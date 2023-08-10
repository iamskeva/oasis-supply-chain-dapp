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
//   contracts: {
//     multicall3: {
//       address: '0xca11bde05977b3631167028862be2a173976ca11',
//       blockCreated: 11907934,
//     },
//   },
} as const satisfies Chain


