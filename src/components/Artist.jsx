import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Artist() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://testbackend-ochre.vercel.app/book");
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
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl pt-8">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
            <br /><br />
            <span> <p className="text-xl">Just a heads up, we're getting ready to upload and update with activities from talented artists. Stay tuned for some exciting updates!</p> </span>
          </h1>
          
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 mb-7">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Artist;
