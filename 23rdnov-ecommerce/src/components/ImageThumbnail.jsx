import React, { useState } from 'react'
import "./ImageThumbnail.css"
const ImageThumbnail = ({imgs}) => {
    const [image,setImage]=useState(imgs[0])
    const [index,setIndex]=useState(0)
    let handleImage=(i)=>{
        setIndex(i)
        setImage(imgs[i])
    }
    let handleNext=()=>{
        setIndex(index+1)
        setImage(imgs[index+1])
    }

    let handlePrev=()=>{
        setIndex(prev=>prev-1)
        setImage(imgs[index-1])
    }
  return (
    <div>
        <img src={image}  height={350} width={450}/> 
        <div className='flex_row'>
        <span className="btns" onClick={()=>handlePrev()}>&lt;</span>
            {imgs.map((im,i)=>         
                <div className='thumbnail' key={i}>
                    <img src={im} className={index==i ? 'clicked':''} onClick={()=>handleImage(i)} height={70} width={100}  />
                </div>
            )} 
            <span className="btns" onClick={()=>handleNext()}>&gt;</span>         
         </div>
    </div>
  )
}

export default ImageThumbnail
