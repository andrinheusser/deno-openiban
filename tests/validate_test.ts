import { assert } from "https://deno.land/std@0.197.0/assert/assert.ts";
import { validate } from "../mod.ts";

Deno.test("Validate CH Postfinance IBAN", async () => {
  const iban = "CH0209000000100013997";
  const expected_bic = "POFICHBEXXX";

  const result = await validate(iban, { validateBankCode: true, getBIC: true });

  assert(result.valid, "iban should be valid");
  assert(result.iban === iban, "iban should be the same");
  assert(
    result.bankData?.bic === expected_bic,
    "bic should be the expected one",
  );
});

Deno.test("Validate CH UBS IBAN", async () => {
  const iban = "CH020023023012625140U";
  const expected_bic = "UBSWCHZH80A";

  const result = await validate(iban, { validateBankCode: true, getBIC: true });

  assert(result.valid, "iban should be valid");
  assert(result.iban === iban, "iban should be the same");
  assert(
    result.bankData?.bic === expected_bic,
    "bic should be the expected one",
  );
});
