import { Iendereco } from "@/interfaces/endereco";
import { createContext, useState } from "react";

export interface IenderecoContext {
  enderecos: Iendereco[];
  setEnderecos: React.Dispatch<React.SetStateAction<Iendereco[]>>;
  salvarEnderecos: (data: Iendereco) => void;
  deleteEndereco: (id: string) => void;
}

export const EnderecoContext = createContext<IenderecoContext>({
  enderecos: [],
  setEnderecos: () => {},
  salvarEnderecos: () => {},
  deleteEndereco: () => {},
});

const getEnderecos = (): Iendereco[] => {
  const enderecosString = localStorage.getItem("enderecos");

  if (enderecosString) {
    return JSON.parse(enderecosString);
  }

  return [];
};

export const EnderecoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [enderecos, setEnderecos] = useState<Iendereco[]>(getEnderecos());

  const salvarEnderecos = (data: Iendereco) => {
    const newEnderecos = [...enderecos, data];

    setEnderecos(newEnderecos);
    localStorage.setItem("enderecos", JSON.stringify(newEnderecos));
  };

  const deleteEndereco = (id: string) => {
    const enderecosFiltrados = enderecos.filter(
      (endereco) => endereco.id !== id,
    );

    setEnderecos(enderecosFiltrados);

    localStorage.setItem("enderecos", JSON.stringify(enderecosFiltrados));
  };

  return (
    <EnderecoContext.Provider
      value={{ enderecos, setEnderecos, salvarEnderecos, deleteEndereco }}
    >
      {children}
    </EnderecoContext.Provider>
  );
};
