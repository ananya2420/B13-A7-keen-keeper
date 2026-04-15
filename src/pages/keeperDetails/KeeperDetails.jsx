import { useLoaderData, useParams } from "react-router";
import React from "react";
import vector from "../../assets/Vector (2)_edited.png"
import archieve from "../../assets/Archive_edited.png"
import trash from "../../assets/Trash_edited.png"
import call from "../../assets/call.png"
import text from "../../assets/text.png"
import video from "../../assets/video.png"
const KeeperDetails = () => {
  const { keeperId: keeperParamsId } = useParams();
  const keepers = useLoaderData();

const expectedKeeper = keepers.find(
  (k) => String(k.id ?? k.keeperId) === String(keeperParamsId)
);


  if (!expectedKeeper) {
    return <div className="p-6">Keeper not found</div>;
  }

  const {
    id,
    name,
    image,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedKeeper;

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex flex-col items-center text-center">

            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={image} alt={name} />
              </div>
            </div>

            <h2 className="text-xl font-bold mt-3">{name}</h2>

            {/* STATUS */}
            <div className="flex gap-2 mt-2">
              <div
                className={`badge ${
                  status === "overdue"
                    ? "badge-error"
                    : status === "on-track"
                    ? "badge-success"
                    : "badge-warning"
                }`}
              >
                {status}
              </div>
            </div>

            {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
  {tags?.map((tag, i) => (
    <div
      key={i}
      className="badge bg-green-100 text-green-700 border border-green-300"
    >
      {tag}
    </div>
  ))}
</div>

            <p className="text-sm text-gray-500 mt-3 italic">"{bio}"</p>

            <p className="text-xs text-gray-400 mt-2">{email}</p>
          </div>

          {/* ACTIONS */}
         <div className="mt-6 flex flex-col gap-3">
  <button className="btn bg-white text-black hover:bg-gray-100 btn-sm">
    <img src={vector} alt="" />
    Snooze 2 Weeks
  </button>

  <button className="btn bg-white text-black hover:bg-gray-100 btn-sm">
    <img src={archieve} alt="" />
    Archive
  </button>

  <button className="btn bg-white text-black hover:bg-gray-100 btn-sm">
    <img src={trash} alt="" />
    Delete
  </button>
</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="stats shadow">
              <div className="stat">
                <div className="stat-value text-green-950">
                  {days_since_contact}
                </div>
                <div className="stat-title text-gray-500">Days Since Contact</div>
                
              </div>
            </div>

            <div className="stats shadow">
              <div className="stat">
                <div className="stat-value text-green-950">
                  {goal}
                </div>
                <div className="stat-title text-gray-500">Goal (Days)</div>
                
              </div>
            </div>

            <div className="stats shadow">
              <div className="stat">
                 <div className="stat-value text-green-950 text-sm">
                  {next_due_date}
                </div>
                <div className="stat-title text-gray-500">Next Due</div>
               
              </div>
            </div>

          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="card bg-base-100 shadow p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-green-950">Relationship Goal</h2>
              <button className="btn btn-sm">Edit</button>
            </div>

            <p className="text-gray-500 mt-2">
              Connect every <span className="font-bold text-black">30 days</span>
            </p>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="card bg-base-100 shadow p-5">
            <h2 className="font-bold text-lg mb-4 text-green-950">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-4">
              <button className="btn">
                <img src={call} alt="" /> <span className="text-xs">Call</span>
              </button>

              <button className="btn">
                <img src={text} alt="" /> <span className="text-xs">Text</span>
              </button>

              <button className="btn">
                <img src={video} alt="" /> <span className="text-xs">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KeeperDetails;
