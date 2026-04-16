import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addCallListToLocalDB,
  getAllCallListFromLocalDB,
  addTextListToLocalDB,
  getAllTextListFromLocalDB,
  addVideoListToLocalDB,
  getAllVideoListFromLocalDB,
} from "../utils/localDB";

export const keeperContext = createContext();

const KeeperProvider = ({ children }) => {
  const [storeKeeper, setStoreKeeper] = useState(() =>
    getAllCallListFromLocalDB()
  );

  const [textList, setTextList] = useState(() =>
    getAllTextListFromLocalDB()
  );

  const [videoEditing, setVideoEditing] = useState(() =>
    getAllVideoListFromLocalDB()
  );


  const handleMarkAsCall = (currentKeeper) => {
    const exists = storeKeeper.find(
      (keeper) => keeper.id === currentKeeper.id
    );

    if (exists) {
      toast.error("Already in call list");
      return;
    }

    addCallListToLocalDB(currentKeeper);
    setStoreKeeper([...storeKeeper, currentKeeper]);

    toast.success(`${currentKeeper.name} added to call list`);
  };


  const handleMarkAsText = (currentKeeper) => {
    const exists = textList.find(
      (keeper) => keeper.id === currentKeeper.id
    );

    if (exists) {
      toast.error("Already in text list");
      return;
    }

    addTextListToLocalDB(currentKeeper);
    setTextList([...textList, currentKeeper]);

    toast.success(`${currentKeeper.name} added to text list`);
  };


  const handleMarkAsVideo = (currentKeeper) => {
    const exists = videoEditing.find(
      (keeper) => keeper.id === currentKeeper.id
    );

    if (exists) {
      toast.error("Already in video list");
      return;
    }

    addVideoListToLocalDB(currentKeeper);
    setVideoEditing([...videoEditing, currentKeeper]);

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