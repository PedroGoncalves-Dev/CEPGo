import { Iendereco } from "@/interfaces/endereco";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface IpropsDetalhes {
  endereco: Iendereco;
}

const DialogDetalhes = ({ endereco }: IpropsDetalhes) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center">Detalhes do endereço</DialogTitle>
      </DialogHeader>

      <div>
        <div className="mx-auto my-4 h-2 w-4/6 rounded-full bg-blue-900"></div>
        <div>
          <ul className="divide-y divide-gray-200 border bg-white">
            <li className="flex items-center gap-4 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold">ID:</span>
              <span className="opacity-70">{endereco.id}</span>
            </li>

            <li className="flex items-center gap-4 bg-slate-100 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold">CEP:</span>
              <span className="opacity-70">{endereco.cep}</span>
            </li>
            <li className="flex items-center gap-4 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold">Logradouro:</span>
              <span className="opacity-70">{endereco.logradouro}</span>
            </li>
            <li className="flex items-center gap-4 bg-slate-100 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold">Complemento:</span>
              <span className="opacity-70">
                {endereco.complemento ? endereco.complemento : "Não informado"}
              </span>
            </li>
            <li className="flex items-center gap-4 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold">Bairro: </span>
              <span className="opacity-70">{endereco.bairro}</span>
            </li>
            <li className="flex items-center gap-4 bg-slate-100 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold">Cidade:</span>
              <span className="opacity-70">{endereco.cidade}</span>
            </li>
            <li className="flex items-center gap-4 px-2 py-2 transition-colors duration-200 ease-in-out hover:bg-slate-50">
              <span className="font-semibold"> UF:</span>
              <span className="opacity-70">{endereco.uf}</span>
            </li>
          </ul>
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant={"outline"}>Fechar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogDetalhes;
