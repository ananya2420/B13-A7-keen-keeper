import { createContext, useState } from "react";
import { toast } from "react-toastify";

// ✅ IMPORT THESE (you forgot this)
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
    console.log("CALL CLICKED"); // debug

    addCallListToLocalDB(currentKeeper);
    setStoreKeeper((prev) => [...prev, currentKeeper]);

    toast.success(`${currentKeeper.name} added to call list`);
  };

  const handleMarkAsText = (currentKeeper) => {
    console.log("TEXT CLICKED");

    addTextListToLocalDB(currentKeeper);
    setTextList((prev) => [...prev, currentKeeper]);

    toast.success(`${currentKeeper.name} added to text list`);
  };

  const handleMarkAsVideo = (currentKeeper) => {
    console.log("VIDEO CLICKED");

    addVideoListToLocalDB(currentKeeper);
    setVideoEditing((prev) => [...prev, currentKeeper]);

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