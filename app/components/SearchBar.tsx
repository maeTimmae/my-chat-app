"use client";

import React from 'react'
import { IconContext } from 'react-icons'
import { CiSearch } from 'react-icons/ci'

export default function SearchBar() {
  return (
    <IconContext.Provider value={{size: "2em", color: "#000000"}}>
    <div className="relative wrapper-div flex flex-row w-full justify-center align-middle">
            <input type="text" id="search-user" className="search p-2 rounded-md" />
            <label htmlFor='search-user' className=' absolute self-center left-[60px]'><CiSearch></CiSearch></label>
    </div>
    </IconContext.Provider>
  )
}
