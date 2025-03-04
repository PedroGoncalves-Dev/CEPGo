import { Input } from "@/components/ui/input";
import { DataTable } from "./components/dataTable/dataTable";
import { columns } from "./components/dataTable/columns";
import { Iendereco } from "@/interfaces/endereco";
import SheetAddNewAdress from "./components/sheetAddNewAddress/sheet";
import { useForm } from "react-hook-form";
import { schemaCep, TypeSchemaCep } from "@/schema/schemaCep";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useEnderecoContext } from "@/hooks/useEnderecoContext";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { Search } from "lucide-react";

const Home = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [searchEndereco, setSearchEndereco] = useState("");
  const { enderecos, saveEnderecos } = useEnderecoContext();

  //segunda forma de armazenar os endereços em um array como exemplo
  const [enderecosSegundoMetodo, setEnderecosSegundoMetodo] = useState<
    Iendereco[]
  >([]);

  const form = useForm<TypeSchemaCep>({
    resolver: zodResolver(schemaCep),
    defaultValues: {
      cep: "",
      logradouro: "Digite um cep",
      complemento: "Digite um cep",
      bairro: "Digite um cep",
      cidade: "Digite um cep",
      uf: "Digite um cep",
    },
  });

  const handleSearch = (value: string) => {
    setSearchEndereco(value);
  };

  const enderecosFiltrados = enderecos.filter((endereco) => {
    const searchLower = searchEndereco.toLowerCase();

    return (
      endereco.cep.toLowerCase().includes(searchLower) ||
      endereco.cep.toLowerCase().includes(searchLower) ||
      endereco.logradouro.toLowerCase().includes(searchLower) ||
      endereco.bairro.toLowerCase().includes(searchLower) ||
      endereco.cidade.toLowerCase().includes(searchLower) ||
      endereco.uf.toLowerCase().includes(searchLower)
    );
  });

  const onSubmit = (data: TypeSchemaCep) => {
    const endereco: Iendereco = { ...data, id: uuidv4() };
    saveEnderecos(endereco);

    //armazenando os endereços em um array com o segundo metodo de exemplo
    setEnderecosSegundoMetodo((prev) => [...prev, endereco]);
    setIsSheetOpen(false);

    toast.success("Endereço cadastrado com sucesso!");

    form.reset();
  };

  return (
    <>
      <section className="flex h-20 w-full flex-row items-center justify-between rounded-lg bg-white px-5 shadow-md">
        <div className="flex w-1/2 items-center lg:w-1/2 2xl:w-1/3">
          <Input
            placeholder="Busque"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="relative right-9 opacity-30" />
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

      <section className="text-cinzaPrimary mt-8 space-y-4 rounded-lg bg-white px-5 py-8 shadow-md">
        <h1 className="text-center text-2xl font-bold">Tabela de endereços</h1>
        <DataTable data={enderecosFiltrados} columns={columns} />
      </section>
    </>
  );
};

export default Home;
