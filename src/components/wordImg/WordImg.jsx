import React,{useRef,useEffect} from 'react'
import "./workImg.scss"

export default function WordImg(props) {
    const title = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        title.current.addEventListener("mousemove",(event)=>{
            const {clientX,clientY} = event;
            
            
            const posX = clientX - (img.current.clientWidth/2);
            const posY = clientY - (img.current.clientHeight/2);
            img.current.style.transform = `translate(${posX}px,${posY}px)`

        })
        title.current.addEventListener("mouseleave",()=>{
            img.current.style.opacity= "0";
        })
        title.current.addEventListener("mouseenter", () => {
            img.current.style.opacity = "0.7";
        })
    }, [])
    

    return (
    <>
        <img  ref={img} style={{width:`${props.size}px`}} className='wordImg' src={props.src} alt={props.src}/>
        <div style={{transform:`translate(${props.x}px,${props.y}px)`}} ref={title} className='word--wrap' >
            <p className='word--title'>{props.title}</p>
        </div>
    </>
  )
}
