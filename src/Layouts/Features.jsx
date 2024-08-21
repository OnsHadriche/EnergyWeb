import useMeasure from "react-use-measure";
import { CardPartner } from "../components/CardPartner";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import {  motion } from "framer-motion";

export const Features = () => {
  const images = [
    "/src/assets/images/steg.png",
    "/src/assets/images/soscité.png",
    "/src/assets/images/s5.png",
    "/src/assets/images/s4.jpeg",
    "/src/assets/images/s2.jpg",
    "/src/assets/images/s3.jpg",
  ]
  const FAST_DURATION = 25
  const SLOW_DURATION=75
  const [duration, setDuration] = useState(FAST_DURATION)
  let [ref, {width}] = useMeasure()
  const xTranslation = useMotionValue(0)
  const [mustFinish,setMustFinish]=useState(false)
  const [rerender,setRerender]=useState(false)
  useEffect(()=>{
    let controls
    let finalPosition = -width /2 -8
    if(mustFinish){
      controls =animate(xTranslation,[xTranslation.get(),finalPosition],{
        ease:'linear',
        duration:duration *(1-xTranslation.get()/finalPosition),
        onComplete:()=>{
          setMustFinish(false)
          setRerender(prev=>!prev)

        }
      })

    }else{

      controls = animate(xTranslation,[0,finalPosition],{
        ease:'linear',
        duration:duration,
        repeat:Infinity,
        repeatType:'loop',
        repeatDelay:0
      })
    }
    return controls.stop
  },[xTranslation, width, duration, rerender, mustFinish])
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
            Our Partners
          </h2>
          <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div className="py-5">
          <motion.div className="left-0  gap-4 d-flex" ref={ref} style={{x:xTranslation}} onHoverStart={()=>{
            setMustFinish(true)
            setDuration(SLOW_DURATION)}}
            onHoverEnd={()=>{
              setMustFinish(true)
              setDuration(FAST_DURATION)}}>

          {[...images,...images].map((item,index)=>(
            <CardPartner key={index} image={item}/>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
