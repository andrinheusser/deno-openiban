import client from "./client.ts";
import { ValidationResultSchema } from "./schemas.ts";

type OpenIbanOptions = {
  getBIC?: boolean;
  validateBankCode?: boolean;
};

const defaultOpenIbanOptions: OpenIbanOptions = {
  validateBankCode: true,
  getBIC: true,
};

export async function validate(
  iban: string,
  options: OpenIbanOptions = defaultOpenIbanOptions,
) {
  const optionsString = `?getBIC=${options.getBIC ?? false}&validateBankCode=${
    options.validateBankCode ?? false
  }`;

  const result = await client(`validate/${iban}${optionsString}`);

  return ValidationResultSchema.parse(result);
}
