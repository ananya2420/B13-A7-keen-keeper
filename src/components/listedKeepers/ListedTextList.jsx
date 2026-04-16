import React, { useContext } from "react";
import { keeperContext } from "../../context/keeperContext";
import textIcon from "../../assets/text.png";

const ListedTextList = ({ sortingType }) => {
  const { textList } = useContext(keeperContext);

  let list = textList;

  if (sortingType && sortingType !== "text") {
    list = [];
  }

  return (
    <div className="flex flex-col gap-3">
      {list.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-white shadow rounded-lg">
          <img src={textIcon} className="w-6 h-6" />
          <span>
            {item.name} — {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListedTextList;