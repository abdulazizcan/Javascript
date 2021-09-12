import React, {useState} from "react";
import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../img/icon";

import db from '../firebase'
import firebase from 'firebase'




    const Tweetbox = () => {
        const [content, setContent] = useState('');
        const sendTweet = () => {
            if ( content !== ''){
                db.collection('feed').add({
                    displayName : "Abdülaziz CAN",
                    userName: "@abdulazizcaan",
                    displayName : "Abdülaziz CAN",
                    content,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    avatar: "https://pbs.twimg.com/profile_images/1429401866123808770/ciFkZ8qq_normal.jpg"
                });
            }
        }

     
  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full border-none text-xl placeholder-grayColors-dark overflow-hidden resize-none bg-transparent outline-none"
        placeholder="What's Happening?"
        onChange={(x) => setContent(x.target.value)}
        value={content}
      />
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-grayColors-light2Plus">
            <ImageIcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-grayColors-light2Plus">
            <GifIcon/>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-grayColors-light2Plus">
            <PollIcon/>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-grayColors-light2Plus">
            <EmojiIcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-grayColors-light2Plus">
            <ScheduleIcon />
          </div>
        </div>
        <button 
        className="bg-basis-Blue text-white rounded-full px-4 py-2 font-medium"
        onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Tweetbox;
