import React from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { Link } from "react-router-dom";

const Cardrestorant = (props) => {


  return (
    <div>
      <div className="border border-solid p-4 rounded-md">
        <img src={props.props.image} alt="" className="w-full h-40" />
        <h1 className="text-lg font-bold mt-1">{props.props.name}</h1>
        <Rating
          className="mt-1"
          initialRating={props.props.rating}
          readonly
          emptySymbol={<FaRegStar className="w-10 text-blue-600 " />}
          fullSymbol={<FaStar className="w-10 text-blue-600" />}
        />
        <div className="flex justify-between mt-1">
          <div className="flex">
            <p>{props.props.catagories}</p>
            <Rating
              className="mx-1 mt-[2px]"
              initialRating={props.props.rating}
              readonly
              emptySymbol={
                <IoLogoUsd className="w-[13px] text-blue-600 text-opacity-50" />
              }
              fullSymbol={<IoLogoUsd className="w-[13px] text-blue-600" />}
            />
          </div>
          <div>
            <p>{props.props.status}</p>
          </div>
        </div>
        <Link to={`/detailview/${props.props.id}`}>
          <div className="bg-blue-700 w-full text-center text-white text-base p-4 rounded-md mt-2">
            View Detail
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cardrestorant;
