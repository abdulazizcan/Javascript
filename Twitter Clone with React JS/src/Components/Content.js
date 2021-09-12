import React, {useEffect, useState} from "react";
import db from "../../src/firebase";
import { PopularIcon } from "../img/icon";
import Tweetbox from "../Components/Tweetbox";
import Delimiter from "../Components/Delimiter";
import FeedL from "../Components/FeedL";



const Content = () => {
    const [tweets, setTweets] = useState([]);
    
    
    useEffect(() => {
        db.collection('feed')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => setTweets(snapshot.docs.map((doc) => doc.data())))}
    , []);

        console.log('tweets');

  return (
    <main className="flex-1 flex flex-col border-r border-l border-grayColors-lightPlus">
      <header className="sticky top-0 z-10  flex justify-between border-b border-grayColors-lightPlus p-4 bg-white">
        <h1 className="font-bold font-xl text-gray-900">Home</h1>
        <PopularIcon />
      </header>

      <div className="flex px-4 py-3 space-x-4">
        <img className="h-11 w-11 rounded-full"
          src="https://pbs.twimg.com/profile_images/1429401866123808770/ciFkZ8qq_normal.jpg"
          alt="UserImage"
        />
        {/*TWEET BOX*/}
        <Tweetbox />
      </div>
      {/* delimiter */}
      <Delimiter />


      <FeedL tweets={tweets} />
    </main>
  );
};

export default Content;
