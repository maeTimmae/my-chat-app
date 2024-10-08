"use client";

import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { GoPaperclip } from 'react-icons/go';
import { MdOutlineEmojiEmotions } from 'react-icons/md'

export default function MessageInput() {

  const [emojiShown, setEmojiWindowState] = useState(false);

  return (
    <section className='border-t-2 border-white border-opacity-15 w-full h-[30%] grid grid-cols-6 gap-4 justify-items-stretch items-center'>
        <input type="text" className='col-span-4 rounded-md p-2 w-full' id="chat-message-input"></input>
        <div className="flex justify-center gap-4 w-full align-middle">
            <IconContext.Provider value={{size:"2em"}}>
                <div className='relative'>
                    <button onClick={()=>{
                        setEmojiWindowState(prev => !prev);
                    }}><MdOutlineEmojiEmotions></MdOutlineEmojiEmotions></button>
                { emojiShown ? 
                    <EmojiPicker height={400} className='absolute'></EmojiPicker>
                : null } 
                </div>
                <button><GoPaperclip /></button>
            </IconContext.Provider>
            <button type="submit" className='rounded-md col-span-2 p-2 hover:scale-110 bg-green-400'>Send</button>
        </div>
    </section>
  )
}