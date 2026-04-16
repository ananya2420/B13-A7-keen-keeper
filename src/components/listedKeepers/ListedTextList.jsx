import React, { useContext } from 'react'
import { keeperContext } from '../../context/keeperContext';
import KeeperCard from '../ui/KeeperCard';

const ListedTextList = () => {
 
    const {  textList } = useContext(keeperContext);
            console.log(textList,"keeperContext");


      return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {textList.map((keeper,index)=><KeeperCard key={index} keeper={keeper}/>)}
         </div>
        </div>
      )
}

export default ListedTextList
