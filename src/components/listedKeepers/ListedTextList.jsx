import React, { useContext, useEffect, useState } from "react";
import { keeperContext } from "../../context/keeperContext";
import KeeperCard from "../ui/KeeperCard";

const ListedTextList = ({ sortingType }) => {
  const { textList } = useContext(keeperContext);

  const [filteredTextList, setFilteredTextList] = useState([]);

  useEffect(() => {
    let data = [...(textList || [])];

    if (sortingType === "text") {
      data.sort(
        (a, b) => a.days_since_contact - b.days_since_contact
      );
    } else if (sortingType === "rating") {
      data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setFilteredTextList(data);
  }, [sortingType, textList]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTextList.map((keeper) => (
          <KeeperCard key={keeper.id} keeper={keeper} />
        ))}
      </div>
    </div>
  );
};

export default ListedTextList;
