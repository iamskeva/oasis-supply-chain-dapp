import { useState } from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { OasisSupplyChainABI } from '../OasisSupplyChainABI'

function useApproveItem() {
    const [approveItemId, setApproveItemId] = useState('');

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'approveItem',
    args: [approveItemId],
  })

  const { data, isLoading: approveIsLoading, isSuccess: approveIsSuccess, write } = useContractWrite(config);
  const approveItem = async (itemId) => {
    if (write) {
    setApproveItemId(itemId);
      write(); 
  }
  }


  return {
    approveIsLoading, approveItem, approveItemId, setApproveItemId, approveIsSuccess,
  };
}

export default useApproveItem;
