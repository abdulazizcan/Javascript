import React from 'react'
import { HomeIcon } from '../img/icon'



const Sidebarlink = ({name, Icon, active, onMenuItemClick}) => {
    const isActive = active == name;
    return (
        <div>
            <li className="group" onClick={()=> onMenuItemClick(name)}>
                <a href={name.toLowerCase()} className="cursor-pointer block text-lg pointer-events-none" >
                <div className=" inline-block">

                    <div className={`
                    flex items-center rounded-full pl-3 pr-8 py-3 group-hover:bg-basis-lightBlue group-hover:text-basis-Blue
                    ${isActive ? "text-basis-Blue" : ""}
                    `}>
                        <Icon/>
                        <span className="ml-4 font-bold">{name}</span>
                    </div>
                    </div>
                </a>
            </li>
        </div>
        
    )
}

export default Sidebarlink
