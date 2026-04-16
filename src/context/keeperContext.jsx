import { createContext, useState } from "react";
import { toast } from "react-toastify";

// Create Context
export const keeperContext = createContext();

const KeeperProvider = ({ children }) => {
  // ✅ State
  const [storeKeeper, setStoreKeeper] = useState([]);
  const [textList, setTextList] = useState([]);
  const [videoEditing, setVideoEditing] = useState([]);

  // ✅ CALL
  const handleMarkAsCall = (currentKeeper) => {
    const exists = storeKeeper.find(
      (keeper) => keeper.id === currentKeeper.id
    );

    if (exists) {
      toast.error("Already in call list");
    } else {
      setStoreKeeper([...storeKeeper, currentKeeper]);
      toast.success(`${currentKeeper.name} added to call list`);
    }
  };

  // ✅ TEXT
  const handleMarkAsText = (currentKeeper) => {
    const exists = textList.find(
      (keeper) => keeper.id === currentKeeper.id
    );

    if (exists) {
      toast.error("Already in text list");
    } else {
      setTextList([...textList, currentKeeper]);
      toast.success(`${currentKeeper.name} added to text list`);
    }
  };

  // ✅ VIDEO
  const handleMarkAsVideo = (currentKeeper) => {
    const exists = videoEditing.find(
      (keeper) => keeper.id === currentKeeper.id
    );

    if (exists) {
      toast.error("Already in video list");
    } else {
      setVideoEditing([...videoEditing, currentKeeper]);
      toast.success(`${currentKeeper.name} added to video list`);
    }
  };

  // ✅ Context Data
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
