import React from "react";
import detail from "../json/detail.json";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Detailview = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex justify-around">
        <img src={detail.detail[id - 1].image} alt="foto" className="w-[45%] h-[50%]" />
        <div className="">
          <p>{detail.detail[id - 1].name}</p>
          <Rating
            className="mt-1"
            initialRating={detail.detail[id - 1].rating}
            readonly
            emptySymbol={<FaRegStar className="w-10 text-blue-600 " />}
            fullSymbol={<FaStar className="w-10 text-blue-600" />}
          />
          <div className="border border-solid p-2 mt-64">
            <div className="flex items-center">
              <img
                src={detail.detail[id - 1].review[0].image}
                className="rounded-full w-10 mx-2 "
                alt="foto"
              />
              <p>{detail.detail[id - 1].review[0].name}</p>
            </div>
            <Rating
              className="mt-1"
              initialRating={detail.detail[id - 1].review[0].rating}
              readonly
              emptySymbol={<FaRegStar className="w-10 text-blue-600 " />}
              fullSymbol={<FaStar className="w-10 text-blue-600" />}
            />
            <p>{detail.detail[id - 1].review[0].text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailview;
