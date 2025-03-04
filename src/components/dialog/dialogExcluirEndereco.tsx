import { Iendereco } from "@/interfaces/endereco";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useEnderecoContext } from "@/hooks/useEnderecoContext";
import React from "react";
import { toast } from "sonner";

interface IpropsExcluirEndereco {
  endereco: Iendereco;
  setIsOpenExcluir: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogExcluirEndereco = ({
  endereco,
  setIsOpenExcluir,
}: IpropsExcluirEndereco) => {
  const { deleteEndereco } = useEnderecoContext();

  const handleDelete = (id: string) => {
    deleteEndereco(id);
    setIsOpenExcluir(false);
    toast.success("Endereço excluido com sucesso!");
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center">Excluir endereço</DialogTitle>
      </DialogHeader>
      <p>
        Deseja excluir o endereco de ID{" "}
        <span className="mr-2 bg-yellow-300 px-2 py-1 font-semibold">
          {endereco.id}
          {/* {endereco.logradouro} */}
        </span>
        CEP:{" "}
        <span className="mr-2 bg-yellow-300 px-2 py-1 font-semibold">
          {" "}
          {endereco.cep}
        </span>
        ?
      </p>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant={"outline"}>Cancelar</Button>
        </DialogClose>
        <Button onClick={() => handleDelete(endereco.id)}>Excluir</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogExcluirEndereco;
