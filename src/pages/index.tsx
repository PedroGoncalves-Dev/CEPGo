import { Input } from "@/components/ui/input";
import { DataTable } from "./_components/dataTable/dataTable";
import { columns } from "./_components/dataTable/columns";
import { Iendereco } from "@/interfaces/endereco";
import SheetAddNewAdress from "./_components/sheetAddNewAddress/sheet";
import { useForm } from "react-hook-form";
import { schemaCep, TypeSchemaCep } from "@/schema/schemaCep";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useEnderecoContext } from "@/hooks/useEnderecoContext";

const Home = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { enderecos, saveEnderecos } = useEnderecoContext();

  //segunda forma de armazenar os endereços em um array como exemplo
  const [enderecosSegundoMetodo, setEnderecosSegundoMetodo] = useState<
    Iendereco[]
  >([]);

  const form = useForm<TypeSchemaCep>({
    resolver: zodResolver(schemaCep),
    defaultValues: {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const onSubmit = (data: TypeSchemaCep) => {
    saveEnderecos(data);

    //armazenando os endereços em um array com o segundo metodo de exemplo
    setEnderecosSegundoMetodo((prev) => [...prev, data]);
    setIsSheetOpen(false);

    form.reset();
  };
  return (
    <>
      <section className="flex h-20 w-full flex-row items-center justify-between rounded-lg bg-white px-5">
        <div className="w-1/3">
          <Input placeholder="Busque pelo CEP, rua, bairro" />
        </div>

        <div>
          <SheetAddNewAdress
            form={form}
            onSubmit={onSubmit}
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-white px-5 py-8">
        <DataTable data={enderecos} columns={columns} />
      </section>
    </>
  );
};

export default Home;
