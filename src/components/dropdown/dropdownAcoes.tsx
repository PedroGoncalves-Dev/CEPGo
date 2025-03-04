import {
  ArrowDownNarrowWide,
  Delete,
  Files,
  MapPin,
  ReceiptText,
} from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DialogDetalhes from "../dialog/dialogDetalhes";
import DialogExcluirEndereco from "../dialog/dialogExcluirEndereco";
import { useState } from "react";
import { Iendereco } from "@/interfaces/endereco";
import { toast } from "sonner";

interface IdropDownAcoesProps {
  endereco: Iendereco;
}

const DropdownAcoes = ({ endereco }: IdropDownAcoesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetalhes, setIsOpenDetalhes] = useState(false);
  const [isOpenExcluir, setIsOpenExcluir] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(endereco.cep);

    toast.success("CEP copiado com sucesso!");
  };

  const handleViewOnMap = () => {
    window.open(
      `https://maps.google.com/?q=${endereco.cep}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleOpenDetalhes = () => {
    setIsOpenExcluir(false);
    setIsOpenDetalhes(true);
    setIsOpen(true);
  };

  const handleOpenExcluir = () => {
    setIsOpenDetalhes(false);
    setIsOpenExcluir(true);
    setIsOpen(true);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ArrowDownNarrowWide
            size={23}
            className="cursor-pointer opacity-65 transition-transform duration-100 ease-in hover:scale-125"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleCopy}
            className="flex cursor-pointer flex-row items-center justify-between text-xs"
          >
            Copiar CEP <Files />
          </DropdownMenuItem>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="flex cursor-pointer flex-row items-center justify-between text-xs"
              onClick={handleOpenDetalhes}
            >
              Detalhes <ReceiptText />
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            className="flex cursor-pointer flex-row items-center justify-between text-xs"
            onClick={handleViewOnMap}
          >
            Ver no mapa <MapPin />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer flex-row items-center justify-between text-xs"
            onClick={handleOpenExcluir}
          >
            Excluir <Delete />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isOpenDetalhes && <DialogDetalhes endereco={endereco} />}

      {isOpenExcluir && (
        <DialogExcluirEndereco
          endereco={endereco}
          setIsOpenExcluir={setIsOpenExcluir}
        />
      )}
    </Dialog>
  );
};

export default DropdownAcoes;
