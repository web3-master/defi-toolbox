# Deploy ERC-20 token

Example:

```typescript
import { deployErc20Token } from '@dany-armstrong/hardhat-erc20';
...
const abc = await deployErc20Token({
  name: 'ABC Token',
  symbol: 'ABC',
  decimals: 8
}, signer);
```
