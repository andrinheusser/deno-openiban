import { z } from "../deps.ts";

export const BankDataSchema = z.object({
  bankCode: z.string().optional(),
  bic: z.string(),
  city: z.string().optional(),
  name: z.string().optional(),
  zip: z.string().optional(),
});

export const ValidationResultSchema = z.object({
  valid: z.boolean().describe(
    "True when iban is considered as technically valid.",
  ),
  messages: z.string().array().describe(
    "Messages returned by the openiban.com validation webservice.",
  ),
  iban: z.string().describe(
    "The original iban that this validation result refers to.",
  ),
  bankData: BankDataSchema.optional().describe(
    "Contains details about the iban's issuing bank (if available).",
  ),
  checkResults: z.object({
    bankCode: z.boolean().describe(
      "If a validateBankCode was set to true, this is the check result.",
    ),
  }).optional(),
});
