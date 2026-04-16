import React, { useContext } from "react";
import { keeperContext } from "../../context/keeperContext";

// 🖼️ import your PNG
import callIcon from "../../assets/call.png";

const ListedCallList = ({ sortingType }) => {
  const { storeKeeper } = useContext(keeperContext);

  let list = storeKeeper;

  // filter
  if (sortingType && sortingType !== "call") {
    list = [];
  }

  return (
    <div className="flex flex-col gap-3">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 bg-white shadow rounded-lg"
        >
          <img src={callIcon} className="w-6 h-6" />

          <span>
            {item.name} — {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListedCallList;