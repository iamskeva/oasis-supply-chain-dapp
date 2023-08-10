import { useState } from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { OasisSupplyChainABI } from '../OasisSupplyChainABI'

function useCancelItem() {
    const [cancelItemId, setCancelItemId] = useState('');

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'cancelItem',
    args: [cancelItemId],
  })

  const { data, isLoading: cancelIsLoading, isSuccess: cancelIsSuccess, write } = useContractWrite(config);
  const cancelItem = async(itemId) => {
    if (write) {
    setCancelItemId(itemId);
      write(); 
  }
  }

  return {
    cancelIsLoading, cancelItem, cancelItemId, setCancelItemId, cancelIsSuccess,
  };
}

export default useCancelItem;
