import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getViaCep } from "@/data/getViaCep";
import { TypeSchemaCep } from "@/schema/schemaCep";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { useMask } from "@react-input/mask";
import { useQuery } from "@tanstack/react-query";
import { IresponseAPIViaCep } from "@/interfaces/responseAPIViaCep";

interface IpropsSheet {
  form: UseFormReturn<TypeSchemaCep>;
  onSubmit: (data: TypeSchemaCep) => void;
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SheetAddNewAdress = ({
  form,
  onSubmit,
  isSheetOpen,
  setIsSheetOpen,
}: IpropsSheet) => {
  const cepDigitado = form.watch("cep");

  const { data, isError, isSuccess } = useQuery<IresponseAPIViaCep>({
    queryKey: ["cep", cepDigitado],
    queryFn: () => getViaCep(cepDigitado),
    enabled: cepDigitado.length === 9,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      form.setValue("logradouro", data.logradouro);
      form.setValue("bairro", data.bairro);
      form.setValue("complemento", data.complemento);
      form.setValue("cidade", data.localidade);
      form.setValue("uf", data.uf);
    }
  }, [isSuccess, data]);

  const inputRef = useMask({ mask: "_____-___", replacement: "_" });
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button>Novo endereço</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">
            Adicionar novo endereço
          </SheetTitle>
          <SheetDescription>
            Preencha o cep para que os outros campos sejam preenchidos
            automaticamente
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP:</FormLabel>
                  <FormControl>
                    <Input {...field} ref={inputRef} />
                  </FormControl>

                  {isError && <span>Cep inválido</span>}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logradouro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logradouro:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Digite o cep"
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="complemento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complemento:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Digite o cep"
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bairro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Digite o cep"
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Digite o cep"
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="uf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>UF:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Digite o cep"
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="!mt-10 w-full">
              Salvar
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default SheetAddNewAdress;
