import { createContext, useState } from "react";

// keeperContext.jsx
export const keeperContext = createContext();

const KeeperProvider = ({ children }) => {

  const [storeKeeper, setStoreKeeper] = useState([]);
  
  
  const handleMarkAsCall = (currentKeeper) => {
      //step 1: store keeper id
     //step 2: Where to store
     //step 3: array or collection
     //step 4: If the keeper is already exist  then show a alert or toast
    const isExistKeeper = storeKeeper.find(
      (keeper) => keeper.id === currentKeeper.id,
    );
  
    if (isExistKeeper) {
      alert("The book is already exist");
    } else {
      setStoreKeeper([...storeKeeper, currentKeeper]);
      alert(`${currentKeeper.name} is added to list`)
    }
  
    console.log(currentKeeper, storeKeeper, "keeper");
  };

  const data = {
    storeKeeper,
    setStoreKeeper,
    handleMarkAsCall
  };

  return (
    <keeperContext.Provider value={data}>
      {children}
    </keeperContext.Provider>
  );
};

export default KeeperProvider;
