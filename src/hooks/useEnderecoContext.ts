import { useContext } from "react";
import { EnderecoContext, IenderecoContext } from "../contexts/enderecoContext";

export const useEnderecoContext = (): IenderecoContext => {
  const context = useContext(EnderecoContext);

  if (!context) {
    throw new Error(
      "useEnderecoContext deve ser usado dentro do EnderecoProvider",
    );
  }

  return context;
};
