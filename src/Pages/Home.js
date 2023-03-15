import React, { Component } from "react";
import data from "../json/data.json";
import Cardrestorant from "../Components/Cardrestorant/Cardrestorant";

import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Restorant</h1>
          <p>Loremipsum</p>
        </div>
        <div className="filter flex ">
          <p>filter by: </p>
          <input type="radio" value="open" name="open" />
          <label>Open now</label>
          <select name="price">
            <option value="">Price</option>
          </select>
          <select>
            <option value="">Catagories</option>
          </select>
          <div>
            <button>Clear All</button>
          </div>
        </div>
        <div>
          <h1>All Restorant</h1>
          <div className="grid gap-4 grid-cols-4">
            {data?.restorant?.map((data) => {
              return (
                <div>
                  {/* <div
                    className="border border-solid p-4 rounded-md"
                    key={data.id}
                  >
                    <img src="" alt="" />
                    <h1 className="text-lg font-bold mt-1">{data.name}</h1>
                    <Rating
                      className="mt-1"
                      initialRating={data.rating}
                      readonly
                      emptySymbol={
                        <FaRegStar className="w-10 text-blue-600 " />
                      }
                      fullSymbol={<FaStar className="w-10 text-blue-600" />}
                    />
                    <div className="flex justify-between mt-1">
                      <div className="flex">
                        <p>{data.catagories}</p>
                        <p>price</p>
                      </div>
                      <div>
                        <p>{data.status}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="bg-blue-700 w-full text-center text-white text-base p-4 rounded-md">
                        View Detail
                      </button>
                    </div>
                  </div> */}
                  <Cardrestorant props={data} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
