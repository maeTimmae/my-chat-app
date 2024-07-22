"use client";

import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { PiVideoCamera } from 'react-icons/pi';

const video = document.querySelector("video");

export default function Camera() {

    const [ visible, setVisible ]= useState(false);

    //Constraints to declare the video dependencies
    const constraints : MediaStreamConstraints = {
        video: {
            width: {
                min: 1280,
                max: 1920,
                ideal: 1920,
            },
            height : {
                min: 720,
                max: 1080,
                ideal: 1080,
            },
            facingMode:'user'
        },
        audio: {
            
        }
    }

    const openCameraStream = async () => {
        const videoElement : HTMLMediaElement | null = document.querySelector("#camera-stream-window");
        await navigator.mediaDevices.getUserMedia(constraints)
                        .then( stream => {
                            videoElement.srcObject = stream;
                        })
    }

    const closeCameraStream = () => {
        const videoElement : HTMLMediaElement | null = document.querySelector("#camera-stream-window");
        const stream : MediaStream | null = videoElement?.srcObject;
        const tracks : MediaStreamTrack[] | undefined  = stream?.getTracks();
        tracks?.forEach( track => track.stop());
        videoElement.srcObject = null;
    }


    return (
    <>
        <IconContext.Provider value={{size:"2em", color: "white"}}>
            <button onClick={()=> {
                setVisible(visible => !visible)
                visible ? closeCameraStream() : openCameraStream();
            }} className='hover:cursor-pointer'>
                <PiVideoCamera />
            </button>
        </IconContext.Provider>

        {visible ? <video className='relative z-20' id="camera-stream-window" autoPlay></video> : null}
        
    

    </>

  )
}
