import React,{useRef,useEffect} from 'react'
import "./cursor.scss"

export default function Cursor() {
    const cursor = useRef(null);
    useEffect(()=>{
        window.addEventListener("mousemove",(event)=>{
            const {clientX,clientY} = event;
            const x = clientX - cursor.current.clientWidth/2;
            const y = clientY - cursor.current.clientHeight / 2;
            cursor.current.style.transform = `translate(${x}px,${y}px)`;
        })
    },[])
  return (
    <div ref={cursor} className='cursor'></div>
  )
}
