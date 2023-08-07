# Deno openiban.com client library

Validate and get BIC using openiban.com

```
const result = await validate(
    "<IBAN>", 
    { validateBankCode: true, getBIC: true }
);
```
