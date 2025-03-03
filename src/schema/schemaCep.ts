import { z } from "zod";

export const schemaCep = z.object({
  cep: z.string().min(9).max(9),
  logradouro: z.string(),
  complemento: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().min(2).max(2),
});

export type TypeSchemaCep = z.infer<typeof schemaCep>;
