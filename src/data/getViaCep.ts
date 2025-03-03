import { IresponseAPIViaCep } from "@/interfaces/responseAPIViaCep";
import axios from "axios";
export const getViaCep = async (cep: string) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  if (response.data.erro) {
    throw new Error("CEP inválido");
  }
  const data: IresponseAPIViaCep = await response.data;

  return data;
};
