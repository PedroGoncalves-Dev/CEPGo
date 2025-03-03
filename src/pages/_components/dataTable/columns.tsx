import { Iendereco } from "@/interfaces/endereco";
import { ColumnDef } from "@tanstack/react-table";

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
  },
];
