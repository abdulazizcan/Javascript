import React from 'react'
import { FavIcon, ReplyIcon, RtIcon, ShareIcon } from '../img/icon'

const FeedI = ({content, displayName, avatar, timestamp, userName}) => {
    return (
<article className="flex space-x-3 border-b border-grayColors-lightPlus px-4 py-3 cursor-pointer">
    <img src={avatar} alt="ProfileImage" className="h-11 w-11 rounded-full" />
    <div className="flex-1">
    <div className="flex items-center text-sm">
        <h4 className="font-bold">{displayName}</h4>
        <span className="text-grayColors-dark ml-2">{userName}</span>
        <div className="mx-2 bg-grayColors-dark h-1 w-1 border rounded-full"></div>
        <span className="text-grayColors-dark ">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
        </span>
    </div>
    <p className="mt-2 text-gray-900 text-sm ">{content}</p>
    <ul className=" -ml-1 mt-3 flex justify-between max-w-md">
        <li className="flex items-center space-x-3  text-grayColors-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-basis-lightBlue ">
                <ReplyIcon />
            </div>  
            <span className="group-hover:text-basis-Blue">7</span>
        </li>


        <li className="flex items-center space-x-3  text-grayColors-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-basis-lightBlue ">
                <RtIcon />
            </div>  
            <span className="group-hover:text-green-400">7</span>
        </li>




        <li className="flex items-center space-x-3  text-grayColors-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-basis-lightBlue ">
                <FavIcon />
            </div>  
            <span className="group-hover:text-pink-400">7</span>
        </li>




        <li className="flex items-center space-x-3  text-grayColors-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-basis-lightBlue ">
<ShareIcon/>
            </div>  
            <span className="group-hover:text-basis-Blue">7</span>
        </li>



    </ul>
    </div>
</article>
    )
}

export default FeedI
