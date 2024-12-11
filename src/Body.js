import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import { SWIGGY_DATA_API } from "./constants";

const Body = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getData() {
    const data = await fetch(SWIGGY_DATA_API);
    const response = await data.json();
    const finalData =
      response?.data?.cards[4]?.gridElements?.infoWithStyle?.restaurants;
    setData(finalData);
    setFilterData(finalData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-4">
      {/* <div className="flex flex-wrap mx-4">
        {filterData.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div> */}
    </div>
  );
};

export default Body;
