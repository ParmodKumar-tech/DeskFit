import React from 'react';
import './exercisecard.css';
import { Link } from 'react-router-dom';
import sampleData from '../../../../public/data';


function ExerciseCard(){
   
    const arrImg=["/gif/cat-cow-stretch.gif","/gif/hipflexor-stretching.gif","/gif/child-pose.gif",
                "/gif/door-chest-opener.gif","/gif/wrist-stretch.jpg","gif/exersice_13.gif","/gif/standing-side-bend.gif","/gif/bicycle-crunch.gif","gif/knee-to-chest.gif"
    ]
    
    return(
    
        <>
        <div className='w-[80%] mx-auto flex gap-5 md:flex flex-wrap justify-center'>

        {sampleData.map((res,idx)=>{
            return (
                <Link key={idx} to={`/exerciseinfo/${idx}`} >
                <div  className='w-[15rem] h-[20rem] py-2 mx-auto my-5 rounded-lg border border-cyan-800 ' >
                <img className='w-[80%] h-[12rem] mx-auto ' src={arrImg[idx]} alt="exercise-img" />
                <h3 className='w-[80%] mx-auto font-semibold'>{res.name}</h3>
                <p  className='w-[80%] mx-auto' >{res.duration}</p>
               </div>
               </Link>
            )
        })}
       

       </div>

       </>
   
    )
}

export default ExerciseCard;