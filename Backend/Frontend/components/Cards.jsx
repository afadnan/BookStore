import React from "react";

function Cards({ item }) {
  
  return (
    <>
      <div className="mt-4 my-3 p-2 z-1 ">
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="FreeBooks" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary"> {item.category} </div>
            </h2>
            <p> {item.title} </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline"> ${item.price} </div>
              <div className=" cursor-pointer  badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200 ">
                {" "}
                Download{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
