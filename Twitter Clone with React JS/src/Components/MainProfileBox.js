import React from 'react'

const MainProfileBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-basis-lightBlue cursor-pointer rounded-full transition-colors duration-200">
            
            <div className="h-120 w-11">
                <img 
                src="https://pbs.twimg.com/profile_images/1429401866123808770/ciFkZ8qq_normal.jpg"
                alt="User Image" 
                className="rounded-full
                bg-red-900"/>
                </div>
            
            
            <div className="flex flex-col justify-center">
                <span className="font-bold text-darkestBlack ">Abdülaziz CAN</span>
                <span className="text-sm text-gray-700">@abdulazizcan</span>
            </div>
            

            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
            </div>
        </div>
                
    )
}

export default MainProfileBox
