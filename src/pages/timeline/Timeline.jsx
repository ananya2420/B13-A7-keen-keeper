import React, { useContext } from 'react'
import { keeperContext } from '../../context/keeperContext';

const Timeline = () => {
    const { storeKeeper, textList, videoEditing } = useContext(keeperContext);
    console.log(storeKeeper,textList,videoEditing,"keeperContext");
  return (
    <div>
      Call: {storeKeeper?.length || 0} <br />
      text: {textList?.length || 0}  <br />
      video: {videoEditing?.length || 0}
    </div>
  )
}

export default Timeline
