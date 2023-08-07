# Deno openiban.com client library

Validate and get BIC using [openiban.com](https://openiban.com/)

```typescript
import { validate } from "https://deno.land/x/openiban@1.0.0/mod.ts"

const result = await validate("DE89370400440532013000", { validateBankCode: true, getBIC: true });
```

Response format:
```json
{
  "valid": true, 		
  "messages": [ 		
    "Bank code valid: 37040044"
  ],
  "iban": "DE89370400440532013000",	
  "bankData": {
    "bankCode": "37040044",
    "name": "Commerzbank",
    "zip": "50447",
    "city": "Köln",
    "bic": "COBADEFF3701"
  },
  "checkResults": {
    "bankCode": true 		
  }
}
```

## Supported Countries

- Belgium
- Germany
- Netherlands
- Luxembourg
- Switzerland
- Austria
- Liechtenstein
