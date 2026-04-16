import { createContext, useState } from "react";
import { toast } from "react-toastify";


import {
  addCallListToLocalDB,
  addTextListToLocalDB,
  addVideoListToLocalDB,
} from "../utils/localDB";

export const keeperContext = createContext();

const KeeperProvider = ({ children }) => {
  const [storeKeeper, setStoreKeeper] = useState([]);
  const [textList, setTextList] = useState([]);
  const [videoEditing, setVideoEditing] = useState([]);

 const handleMarkAsCall = (currentKeeper) => {
  const newItem = {
    ...currentKeeper,
    type: "call",
    date: new Date().toISOString(),
  };

  setStoreKeeper(prev => [...prev, newItem]);
  toast.success(`${currentKeeper.name} added to call list`);
};

  const handleMarkAsText = (currentKeeper) => {
  const newItem = {
    ...currentKeeper,
    type: "text",
    date: new Date().toISOString(),
  };

  setTextList(prev => [...prev, newItem]);
  toast.success(`${currentKeeper.name} added to text list`);
};

  const handleMarkAsVideo = (currentKeeper) => {
  const newItem = {
    ...currentKeeper,
    type: "video",
    date: new Date().toISOString(),
  };

  setVideoEditing(prev => [...prev, newItem]);
  toast.success(`${currentKeeper.name} added to video list`);
};

  const data = {
    storeKeeper,
    textList,
    videoEditing,
    handleMarkAsCall,
    handleMarkAsText,
    handleMarkAsVideo,
  };

  return (
    <keeperContext.Provider value={data}>
      {children}
    </keeperContext.Provider>
  );
};

export default KeeperProvider;
