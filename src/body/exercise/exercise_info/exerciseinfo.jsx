import React, { useEffect, useState } from 'react';
import './exerciseinfo.css';
import sampleData from '../../../../public/data'; 
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';


function Exerciseinfo(){
    const {idx}=useParams();

    const arrImg=["/gif/cat-cow-stretch.gif","/gif/hipflexor-stretching.gif","/gif/child-pose.gif",
        "/gif/door-chest-opener.gif","/gif/wrist-stretch.jpg","/gif/exersice_13.gif","/gif/standing-side-bend.gif","/gif/bicycle-crunch.gif","gif/knee-to-chest.gif"
    ]
    const videUrl=["https://www.youtube.com/watch?v=fcnv4gyMzf8",
        "https://www.youtube.com/watch?v=UrHcQJCqo4Q&t=10s",
        "https://www.youtube.com/watch?v=EniGBCHAEVQ",
        "https://www.youtube.com/watch?v=B9uY01NoqBg",
        "https://www.youtube.com/watch?v=bOXI-wxepmI",
        "https://www.youtube.com/watch?v=Q_Bpj91Yiis",
        "https://www.youtube.com/watch?v=7C3uhpdqeTc",
        "https://www.youtube.com/watch?v=PAEo-zRSanM"


    ];

    const [howtodobtnclick, setHowtodobtnclick]=useState(false);

    const [animationbtnclick, setAnimationbtnclick]=useState(false);
    console.log(idx);

    useEffect(()=>{
        setAnimationbtnclick(true);
    },[])

    let handleHowtodobtn=()=>{
        if(!howtodobtnclick){
            setHowtodobtnclick(true);

            setAnimationbtnclick(false)
        }
        
       
       
    }

    
    let handleAnimation=()=>{
        if(!animationbtnclick){
            setAnimationbtnclick(true);
            setHowtodobtnclick(false);
        }
       
    
    }

    return(
        <div className='exercise-info font-medium flex flex-col mx-auto w-[80%] my-1 mt-[5rem] lg:w-[40%] md:w-[50%]'>
            <h2 className='text-black text-xl font-medium my-1'>{sampleData[idx].name}</h2>
            {animationbtnclick && <img className='bg-red-400 h-[20rem] w-screen mx-auto' src={arrImg[idx]} alt='exercise-img'/>}
            {howtodobtnclick &&<ReactPlayer url={videUrl[idx]} controls={true} width="100%" height="20rem" />}


            <div className='flex justify-between my-2'>
                <button onClick={handleAnimation} className={animationbtnclick ? 'btn-change' :'font-bold rounded-xl px-4 py-1 text-black border  border-gray-800 '}>Animation</button>
                <button onClick={handleHowtodobtn} className={howtodobtnclick ? 'btn-change' :'font-bold rounded-xl px-4 py-1 text-black  border border-gray-800 '}>How to do</button>
            </div>

            <div className='flex justify-between my-2'>
                <h3>DURATION</h3>
                <p>{sampleData[idx].duration}</p>
            </div>

            <div className='exercise-instruction my-2'>
                <h3>INSTRUCTIONS</h3>
                <ul className='list-disc list-inside'>
                {sampleData[idx].instructions.map((res,idx)=>{
                    return (
                        <li key={idx}>{res}</li>
                    )
                })}
                </ul>
                
            </div>

            <div className='exercise-focus-area my-2'>
                <h3>FOCUS AREA</h3>
                <ul className='list-disc list-inside '>
                    {sampleData[idx].focus_area.map((res,idx=0)=>{
                        return (
                            <li key={idx}>{res}</li>
                        )
                       
                    })}
                  
                </ul>
            </div>

            <div className='exercise-common-mistakes my-2'>
                <h3>COMMON MISTAKS</h3>
                <ul className='list-disc list-inside '>
                {sampleData[idx].common_mistakes.map((res,idx=1)=>{
                    return (
                        <li key={idx}>{res}</li>
                    )
                })}
                </ul>
               
            </div>

            <div className='exercise-breathing-tips my-2'>
                <h3>BREATING TIPS</h3>
              
                
                <ul className='list-disc list-inside'>
                {sampleData[idx].breathing_tips.map((res,idx)=>{
                    return (
                        <li key={idx}>{res}</li>
                    )
                })}
               </ul>
               
            </div>

        </div>
    )
}

export default Exerciseinfo;
