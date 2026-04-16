import React, { useContext, useState } from 'react'
import { keeperContext } from '../../context/keeperContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedCallList from '../../components/listedKeepers/ListedCallList';
import ListedTextList from '../../components/listedKeepers/ListedTextList';
import ListedVideoList from '../../components/listedKeepers/ListedVideoList';

const Timeline = () => {
    
    const [sortingType,setSortingType]=useState("");
    console.log(sortingType,"sortingType");

    const { storeKeeper, textList, videoEditing } = useContext(keeperContext);
    console.log(storeKeeper,textList,videoEditing,"keeperContext");
  return (
    <div className="container mx-auto my-3">
     {/* Call: {storeKeeper?.length || 0} <br />
      text: {textList?.length || 0}  <br />
      video: {videoEditing?.length || 0} */}

      <div className="flex justify-center my-3">

      <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline: {sortingType}  ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortingType('call')}><a>Call</a></li>
    <li onClick={()=>setSortingType('text')}><a>Text</a></li>
    <li onClick={()=>setSortingType('video')}><a>Video</a></li>
  </ul>
</div>

     </div>
      <Tabs>
    <TabList>
      <Tab>Call</Tab>
      <Tab>Text</Tab>
      <Tab>Video</Tab>
    </TabList>

    <TabPanel>
      <h2><ListedCallList sortingType={sortingType} /></h2>
    </TabPanel>
    <TabPanel>
      <h2><ListedTextList sortingType={sortingType} /> </h2>
    </TabPanel>
    <TabPanel>
      <h2><ListedVideoList sortingType={sortingType} /></h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Timeline
