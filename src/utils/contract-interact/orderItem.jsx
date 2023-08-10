import { useState } from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { OasisSupplyChainABI } from '../OasisSupplyChainABI'

function useOrderItem() {
  const [itemName, setItemName] = useState('');

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'orderItem',
    args: [itemName],
  })

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const orderItem = async => {
    if (write) {
      write(); 
      if (isSuccess) {
        getAllItem(); 
      }
  }
  }


  return {
    isLoading, orderItem, itemName, setItemName
  };
}

export default useOrderItem;
