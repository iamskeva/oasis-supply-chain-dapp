import { useState } from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { OasisSupplyChainABI } from '../OasisSupplyChainABI'

function useShipItem() {
    const [shipItemId, setShipItemId] = useState('');

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'shipItem',
    args: [shipItemId],
  })

  const { data, isLoading: shipIsLoading, isSuccess: shipIsSuccess, write } = useContractWrite(config);
  
  const shipItem = async (itemId) => {
    if (write) {
    setShipItemId(itemId);
      write(); 
  }
  }


  return {
    shipIsLoading, shipItem, shipItemId, setShipItemId, shipIsSuccess,
  };
}

export default useShipItem;
