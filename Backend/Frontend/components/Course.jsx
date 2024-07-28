import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="my-10 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-36 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Learn more about our courses, join our community, and get free
            materials.
          </p>
          <Link to="/">
            <button className="bg-pink-500 hover:text-white cursor-pointer px-3 py-2 mt-6 rounded-md">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
