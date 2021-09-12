import React from 'react';
import FeedI from '../Components/FeedI';

const FeedL = ({tweets}) => {
    return (
        <div>
            {
                tweets.map((tweet, index)=>(
                <FeedI {...tweet} key={index}/>))
            }
        </div>
    )
}

export default FeedL
