import React, { useRef, useState } from "react";
import { FaMusic, FaHeart, FaComment, FaShare } from "react-icons/fa";

const VideoInfo = () => {
    return (
        <div className="flex flex-row">
            <img
                className="w-[50px] h-[50px] rounded-full"
                src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg"
                alt="avt"
            />
            <div className="ml-3 min-w-[80%]">
                <div >
                    <a href="#" className="text-xl font-bold hover:underline">
                        anh huy 7 mau
                    </a>
                    <a href="#" className="text-xl">
                        code tiktok clone
                    </a>
                </div>
                <div>Hay ghe tham anh dang code</div>
                <div className="flex flex-row items-center">
                    <FaMusic /> <span className="ml-3">bai hat dang phat</span>
                </div>
            </div>
            <div>
                <button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md">Follow</button>
            </div>
        </div>
    );
};

const VideoContent = () => {
    const videoRef = useRef()
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if(playing) {
            videoRef.current.pause()
            setPlaying(false);
        } else {
            videoRef.current.play()
            setPlaying(true);
        }


        
    };
    return <div className="flex flex-row">
        <video 
            ref={videoRef}
            onClick={handleVideo}
            className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4" 
            src="https://v16-webapp.tiktok.com/8a85d0f8f0fa67b7726b65481d7f06d6/625e80a0/video/tos/alisg/tos-alisg-pve-0037/7f8c8c6348a944b8952ae264fa045d16/?a=1988&br=5076&bt=2538&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZdWQwwe2NI9Uml7Gb&l=202204190327010102451581161B864BEC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ams7azszdTt4NTMzODgzM0ApZDYzMzM7Nzw2N2UzZzU4NWdicDViMDJwYmVgLS1kLzRzc2JeYTBfLV4yYzNeLl81Xy86Yw%3D%3D&vl=&vr=" 
            loop 
        />
        <div className="flex flex-col justify-end ml-7">
            <div className="text-center mb-4">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaHeart className="text-xl"/> 
                </div>
                <span>
                    23123
                </span>
            </div>
            <div className="text-center mb-4">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaComment className="text-xl"/> 
                </div>
                <span>
                    231
                </span>
            </div>
            <div className="text-center mb-4">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaShare className="text-xl"/> 
                </div>
                <span>
                    23
                </span>
            </div>
        </div>
    </div>;
};

const Video = () => {
    return (
        <div className="snap-start max-w-[600px] border-b-2 border-gray-200 pb-10 pt-10" >
            <VideoInfo />
            <VideoContent />
        </div>
    );
};

export default Video;
