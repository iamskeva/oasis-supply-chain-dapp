import { Chain } from 'wagmi'

export const OasisSapphireTestnet = {
  id: 23295,
  name: 'Oasis Sapphire Testnet',
  network: 'Oasis Sapphire Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'TEST',
    symbol: 'TEST',
  },
  rpcUrls: {
    public: { http: ['https://testnet.sapphire.oasis.dev'] },
    default: { http: ['https://testnet.sapphire.oasis.dev'] },
  },
  blockExplorers: {
    etherscan: { name: 'Sapphire', url: 'https://testnet.explorer.sapphire.oasis.dev' },
    default: { name: 'Sapphire', url: 'https://testnet.explorer.sapphire.oasis.dev' },
  },

} as const satisfies Chain


