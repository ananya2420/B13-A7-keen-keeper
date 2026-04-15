import React, { use } from "react";
import KeeperCard from "../ui/KeeperCard";

const keepersPromise = fetch("/friendsData.json").then((res) => res.json());

const AllKeepers = () => {
  const keepers = use(keepersPromise);
  //console.log(keepers,"keepers");

  return (
    <div className="my-12 container mx-auto px-4">
      <h2 className="font-bold text-3xl text-center mb-10">
        Keepers
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        {keepers.map((keeper, index) => (
          <KeeperCard key={index} keeper={keeper} />
        ))}
      </div>
    </div>
  );
};

export default AllKeepers;