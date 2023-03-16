import React, { useEffect, useState } from "react";
import data from "../json/data.json";
import Cardrestorant from "../Components/Cardrestorant/Cardrestorant";

const Home = () => {
  const [Open, setopen] = useState("");
  const [catagori, setcatagori] = useState("");
  const [harga, setharga] = useState("");
  const [more, setmore] = useState(8);
  const Status = (event) => {
    setopen(event.target.value);
  };

  const Handlechangecatagori = (event) => {
    setcatagori(event.target.value);
  };

  const Handlechangeharga = (event) => {
    setharga(event.target.value);
  };

  const Handleloadmore = () => {
    setmore(more >= data.restorant.length ? more : more + 4);
  };

  const Handleclearfilter = () => {
    setcatagori("");
    setharga("");
    setopen("");
  };

  const getUnique = (arr, comp) => {
    const unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };

  useEffect(() => {
    console.log(Open);
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl">Restorant</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="filter flex justify-between items-center my-4 ">
        <div className="flex">
          <p className="text-lg">filter by: </p>
          <div className="border border-solid rounded-md mx-2 p-1">
            <input
              type="radio"
              value={"OPEN NOW"}
              name="open"
              className="mx-2"
              onChange={(e) => Status(e)}
            />
            <label className="text-lg font-semibold">Open now</label>
          </div>
          <select
            name="price"
            className="border border-solid rounded-md mx-2 p-1"
            value={harga}
            onChange={(e) => Handlechangeharga(e)}
          >
            <option value="">Price</option>
            <option value="murah">murah</option>
            <option value="mahal">mahal</option>
          </select>
          <select
            className="border border-solid rounded-md mx-2 p-1"
            value={catagori}
            onChange={(e) => Handlechangecatagori(e)}
          >
            <option value="" selected>
              catagories
            </option>
            {getUnique(data.restorant, "catagories").map((data) => (
              <option key={data.id} value={data.catagories}>
                {data.catagories}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => Handleclearfilter()}
            className="border border-solid rounded-md px-2 py-1"
          >
            Clear All
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-semibold text-3xl py-3">All Restorant</h1>
        <div className="grid gap-4 grid-cols-4">
          {data.restorant
            .filter((result) => {
              if (catagori === "") {
                return result;
              } else {
                return result.catagories === catagori;
              }
            })
            .filter((statusOpen) => {
              if (Open === "") {
                return statusOpen;
              } else {
                return statusOpen.status === Open;
              }
            })
            .filter((price) => {
              if (harga === "") {
                return price;
              } else if (harga === "murah") {
                return price.price < 3;
              } else if (harga === "mahal") {
                return price.price >= 3;
              }
            })
            .slice(0, more)
            .map((data) => {
              return (
                <div>
                  <Cardrestorant props={data} />
                </div>
              );
            })}
        </div>
        <div>
          <button
            onClick={() => Handleloadmore()}
            className="w-full p-2 text-center bg-blue-600 text-white rounded-md font-semibold text-lg mt-4"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
