import React,{useEffect} from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
const Cardrestorant = (props) => {

  useEffect(() => {
    console.log(props.status)
  }, [])
  

  return (
    <div>
      <div className="border border-solid p-4 rounded-md">
        <img src="" alt="" />
        <h1 className="text-lg font-bold mt-1">{props.name}</h1>
        {/* <Rating
          className="mt-1"
          initialRating={props.rating}
          readonly
          emptySymbol={<FaRegStar className="w-10 text-blue-600 " />}
          fullSymbol={<FaStar className="w-10 text-blue-600" />}
        /> */}
        <div className="flex justify-between mt-1">
          <div className="flex">
            <p>Catagories</p>
            <p>price</p>
          </div>
          <div>
            <p>{props.status}</p>
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-blue-700 w-full text-center text-white text-base p-4 rounded-md">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardrestorant;
