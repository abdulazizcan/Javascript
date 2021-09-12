import React from "react";
import TwSearch from "../img/TwSearch.js";
import { Timeline } from "react-twitter-widgets";
const TimeLine = () => {
  return (
    <aside className="h-screen sticky top-0">
      
      <div className="flex rounded-full text-grayColors-dark items-center space-x-4 m-3 p-3 bg-gray-200 focus-within:bg-white focus-within:ring-2 focus-within:basis-darkBlue">
        <TwSearch />
        <input
          type="text"
          placeholder="search twitter"
          className="placeholder-gray-400 bg-transparent outline-none w-full h-full "
        />
      </div>
      <h1 className="text-lg ml-2 font-black">Trends For You</h1>
      <div>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "abdulazizcann",
          }}
          options={{
            height: "700",
          }}
        />
      </div>
    </aside>
  );
};

export default TimeLine;
