import React,{useRef,useEffect,useState} from 'react'
import "./sightImg.scss"

export default function SightImg(props) {
    const sightImg = useRef(null);
    const [clipX, setClipX] = useState(50);
    const [clipY, setClipY] = useState(50);
    const [mask, setMask] = useState(0)

    useEffect(() => {
      sightImg.current.addEventListener("mousemove",(event)=>{
        const {clientX,clientY} = event;
        const posx = (clientX / sightImg.current.clientWidth) * 100;    
        const posy = (clientY / sightImg.current.clientHeight) * 100;
        setClipX(posx);
        setClipY(posy);

    })
    sightImg.current.addEventListener("mouseenter",()=>{
        setMask(20);
        
    })
    sightImg.current.addEventListener("mouseleave", () => {
        setMask(0)
    })
}, [])

    
  return (
    <div style={{height: "100vh", width: `${props.size}px` }} ref={sightImg}>
      <img
        style={{
          width: `${props.size}px`,
        }}
        className={"sightImg-1 mask"}
        src={props.src}
        alt={props.src}
      />
      <img
        style={{
          width: `${props.size}px`,
          clipPath: `circle(${mask}% at ${clipX}% ${clipY}%)`,
        }}
        className="sightImg-1 clip"
        src={props.src}
        alt={props.src}
      />
    </div>
  )
}
