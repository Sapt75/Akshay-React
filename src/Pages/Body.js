import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { SWIGGY_DATA_API } from "../constants";
import ShimmerCard from "../components/Shimmer";

const Body = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getData() {
    const response = await fetch(SWIGGY_DATA_API);
    const data = await response.json();
    const finalData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0].info
    );
    setData(finalData);
    setFilterData(finalData);
  }

  function filterResult() {
    setFilterData(
      data.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return filterData.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="m-4">
      <div className="flex space-x-4">
        <input
          className="border-[1px] border-black px-4 py-1"
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          value={searchText}
          placeholder="Enter Your Query"
        />
        <button
          onClick={filterResult}
          className="border-[1px] border-black py-1 px-4 text-base"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-4">
        {filterData.length === 0 ? (
          <div>No data available</div>
        ) : (
          filterData.map((item) => <Cards key={item.info.id} {...item.info} />)
        )}
      </div>
    </div>
  );
};

export default Body;
