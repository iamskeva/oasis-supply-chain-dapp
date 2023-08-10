import { useState } from 'react';
import { useContractRead } from 'wagmi';
import { OasisSupplyChainABI } from '../OasisSupplyChainABI'

function useSearchItem() {
  const [itemId, setItemId] = useState('');
  const [itemDetails, setItemDetails] = useState(null);
  const [items, setItems] = useState([]);

  const { data: searchItemData } = useContractRead({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'getItem',
    args: [itemId]
  });

  const { data: getAllItemData } = useContractRead({
    address: import.meta.env.VITE_OASIS_SUPPLY_CHAIN_CONTRACT,
    abi: OasisSupplyChainABI,
    functionName: 'getAllItems',

  });

  const getAllItem = async () => {
    if (getAllItemData) {
      setItems(getAllItemData);
    }
  };

  
  const getItem = async () => {
    if (searchItemData) {
      setItemDetails(searchItemData);
    }
  };


  return {
    itemId,
    itemDetails,
    setItemDetails,
    setItemId,
    getItem,
    getAllItem,
    items,
    setItems,
  };
}

export default useSearchItem;
