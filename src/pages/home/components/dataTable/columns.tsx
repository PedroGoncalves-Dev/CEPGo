import { Iendereco } from "@/interfaces/endereco";
import { ColumnDef } from "@tanstack/react-table";
import DropdownAcoes from "@/components/dropdown/dropdownAcoes";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Iendereco>[] = [
  {
    accessorKey: "cep",
    header: "CEP",
  },
  {
    accessorKey: "logradouro",
    header: "Logradouro",
  },
  {
    accessorKey: "bairro",
    header: "Bairro",
  },
  {
    accessorKey: "complemento",
    header: "Complemento",
    cell: (props) => {
      const complemento = props.row.original.complemento;

      return complemento ? complemento : "Não informado";
    },
  },
  {
    accessorKey: "cidade",
    header: "Cidade",
  },
  {
    accessorKey: "uf",
    header: "UF",
  },
  {
    accessorKey: "Ações",
    header: "Ações",
    cell: (props) => {
      const endereco = props.row.original;

      return <DropdownAcoes endereco={endereco} />;
    },
  },
];
