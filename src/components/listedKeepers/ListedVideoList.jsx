import React, { useContext } from "react";
import { keeperContext } from "../../context/keeperContext";
import videoIcon from "../../assets/video.png";

const ListedVideoList = ({ sortingType }) => {
  const { videoEditing } = useContext(keeperContext);

  let list = videoEditing;

  if (sortingType && sortingType !== "video") {
    list = [];
  }

  return (
    <div className="flex flex-col gap-3">
      {list.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-white shadow rounded-lg">
          <img src={videoIcon} className="w-6 h-6" />
          <span>
            {item.name} — {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListedVideoList;