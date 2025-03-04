import { z } from "zod";

export const schemaCep = z.object({
  cep: z.string().min(9, { message: "Minimo 8 digitos" }).max(9),
  logradouro: z.string().min(1, {
    message: "Campo obrigatorio, digite um cep valido",
  }),
  complemento: z.string(),
  bairro: z.string().min(1, {
    message: "Campo obrigatorio, digite um cep valido",
  }),
  cidade: z.string().min(1, {
    message: "Campo obrigatorio, digite um cep valido",
  }),
  uf: z
    .string()
    .min(2, { message: "Campo obrigatorio, digite um cep valido" })
    .max(2),
});

export type TypeSchemaCep = z.infer<typeof schemaCep>;
