import React, { useContext } from 'react'
import { keeperContext } from '../../context/keeperContext';
import KeeperCard from '../ui/KeeperCard';

const ListedCallList = () => {

     const { storeKeeper } = useContext(keeperContext);
        console.log(storeKeeper,"keeperContext");
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     {storeKeeper.map((keeper,index)=><KeeperCard key={index} keeper={keeper}/>)}
     </div>
    </div>
  )
}

export default ListedCallList
