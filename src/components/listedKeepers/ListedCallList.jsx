import React, { useContext, useEffect, useState } from "react";
import { keeperContext } from "../../context/keeperContext";
import KeeperCard from "../ui/KeeperCard";

const ListedCallList = ({ sortingType }) => {
  const { storeKeeper } = useContext(keeperContext);

  const [filteredCallList, setFilteredCallList] = useState([]);

  useEffect(() => {
    let data = [...(storeKeeper || [])];

    if (sortingType === "call") {
      data.sort(
        (a, b) => a.days_since_contact - b.days_since_contact
      );
    } else if (sortingType === "rating") {
      data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setFilteredCallList(data);
  }, [sortingType, storeKeeper]); 

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredCallList.map((keeper) => (
          <KeeperCard key={keeper.id} keeper={keeper} />
        ))}
      </div>
    </div>
  );
};

export default ListedCallList;