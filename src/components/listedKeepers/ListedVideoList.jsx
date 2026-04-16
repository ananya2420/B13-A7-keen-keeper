import React, { useContext } from 'react'
import { keeperContext } from '../../context/keeperContext';
import KeeperCard from '../ui/KeeperCard';

const ListedVideoList = () => {
  const { videoEditing } = useContext(keeperContext);
            console.log(videoEditing,"keeperContext");
      return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {videoEditing.map((keeper,index)=><KeeperCard key={index} keeper={keeper}/>)}
         </div>
        </div>
      )
}

export default ListedVideoList
