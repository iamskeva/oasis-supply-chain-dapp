import { useContractRead } from 'wagmi';
import { OasisSupplyChainABI } from '../OasisSupplyChainABI';

function useGetItemCount() {
  const { data: itemCount } = useContractRead({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'getItemCount',
  });

  const getItemCount = () => {
    return Number(itemCount) || 0; // Return 0 if itemCount is not available
  };

  return {
    getItemCount,
  };
}

export default useGetItemCount;
