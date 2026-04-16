import React, { useContext, useEffect, useState } from "react";
import { keeperContext } from "../../context/keeperContext";
import KeeperCard from "../ui/KeeperCard";

const ListedVideoList = ({ sortingType }) => {
  const { videoEditing } = useContext(keeperContext);

  const [filteredVideoList, setFilteredVideoList] = useState([]);

  useEffect(() => {
    let data = [...(videoEditing || [])];

    if (sortingType === "video") {
      data.sort(
        (a, b) => a.days_since_contact - b.days_since_contact
      );
    } else if (sortingType === "rating") {
      data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setFilteredVideoList(data);
  }, [sortingType, videoEditing]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredVideoList.map((keeper) => (
          <KeeperCard key={keeper.id} keeper={keeper} />
        ))}
      </div>
    </div>
  );
};

export default ListedVideoList;