import React from 'react'
import { Link } from 'react-router'



const KeeperCard = ({keeper}) => {
  return (
   
      <Link to={`/keeperDetails/${keeper.id}`}
            className="card w-80 bg-white shadow-xl border border-gray-100 rounded-2xl hover:shadow-2xl transition-all"
          >
            {/* Image */}
            <figure className="px-6 pt-6">
              <img
                src={keeper.image}
                alt={keeper.name}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>

            {/* Body */}
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold text-gray-800">
                {keeper.name}
              </h2>

              <p className="text-sm text-gray-500">
                {keeper.days_since_contact} days since contact
              </p>

              {/* Buttons */}
              <div className="card-actions flex flex-col gap-3 mt-3 w-full">
                
                {/* Tags button */}
                <button className="btn w-full bg-green-100 text-green-700 border border-green-200 hover:bg-green-200 rounded-full">
                  {keeper.tags}
                </button>

                {/* Status button */}
                <button
                  className={`btn w-full text-white rounded-full transition-all ${
                    keeper.status === "almost due"
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : keeper.status === "overdue"
                      ? "bg-red-500 hover:bg-red-600"
                      : keeper.status === "on-track"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-400"
                  }`}
                >
                  {keeper.status}
                </button>
              </div>
            </div>
          </Link>
  
  )
}

export default KeeperCard
