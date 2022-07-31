import React, { useEffect, useRef } from "react"
import "../styles/index.scss"
import LocomotiveScroll from "locomotive-scroll"
import WordImg from "../components/wordImg/WordImg";
import Cursor from "../components/CustmoCursor/Cursor";
import SightImg from "../components/SightImg/SightImg";

export default function Home() {

  let container = useRef(null);

  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
    })
    console.log(scroll);
  },[])

  return (
    <div ref={container} data-scroll-container className="home">
      <Cursor />
      <div
        data-scroll-section
        data-scroll-section-id="section1"
        className="section-1"
      >
        <h3 className="top-title">.Art_</h3>
        <div className="title">
          <h3 className="title--words">No Words</h3>
          <h3 className="title--words">Can Ever Scream louder</h3>
          <h3 className="title--words">Than Silence</h3>
          <div data-scroll data-scroll-speed="2" className="author">
            Writer : <span className="author--name">COLLINS</span>
          </div>
        </div>
        <img
          data-scroll
          data-scroll-speed="2"
          alt="museum"
          src="./birmingham-museums-trust-9dnNnTrHxmI-unsplash.jpg"
        />
      </div>
      <div
        data-scroll-section
        data-scroll-section-id="section2"
        className="section-2"
      >
        <img
          src="./jack-hamilton-AUgTvvQxDhg-unsplash.jpg"
          alt="jack-hamilton"
        />
        <img data-scroll data-scroll-speed="2" src="./jack.jpg" alt="jack" />
        <div className="writing-1">
          <p>
            <span className="writing-1-point">i am</span> a helper
          </p>
          <p>an option that can not fail</p>
          <p>a handbrake to all that tries to roll</p>
          <p>yet it cross my mind, that i have no where to turn to</p>
          <p>other than inward to myself</p>
          <p>am i also a strain to myself</p>
          <p>another help i have to help, then have no helper</p>
          <p>of my own</p>
          <p>even though i want it not</p>
          <p>
            it was once joyful to{" "}
            <span className="boy writing-1-point">a boy</span> smilling to the
            sound
          </p>
          <p>of a car engine</p>
          <p>a handbrake that could never fail</p>
        </div>
      </div>
      <div
        data-scroll-section
        data-scroll-section-id="section3"
        className="section-3"
      >
        <div className="writing-2">
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            i found my self reading a bible
          </h3>
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
          >
            looking for cracks of hope between pages
          </h3>
        </div>
        <img
          data-scroll
          data-scroll-speed="2"
          className="sec-img"
          alt="jon"
          src="./dan-farrell-fT49QnFucQ8-unsplash.jpg"
        />
        <div className="writing-2">
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            i found my self reading a bible
          </h3>
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
          >
            looking for cracks of hope between pages
          </h3>
        </div>
      </div>
      <div
        className="section-4"
        data-scroll-section
        data-scroll-section-id="section4"
      >
        <div className="hover--words">
          <WordImg
            x={35}
            y={150}
            size={200}
            title={"Heart"}
            src={"./jon-tyson-9sR0K4D1gNQ-unsplash.jpg"}
          />
          <WordImg
            x={450}
            y={100}
            size={375}
            title={"Emotions"}
            src={"./jene-stephaniuk-wsVOc34cQ_Q-unsplash.jpg"}
          />
          <WordImg
            x={335}
            y={450}
            size={350}
            title={"Eyes"}
            src={"./dimitar-belchev-fRBpWLAcWIY-unsplash.jpg"}
          />
        </div>

        <div data-scroll data-scroll-speed="6" className="writing-3">
          <p>life has yet shown me</p>
          <p>a gun is always fully loaded</p>
          <p>bridged to bridge the soul an heaven</p>
          <p>yet another story to be foretold to the children at</p>
          <p>bedtime</p>
          <p>let not the bedbugs bite</p>
        </div>
        <img
          data-scroll
          data-scroll-speed="2"
          className="sec-4-img2"
          alt={"by Steve Johnson on Unsplash"}
          src={"./stev.jpg"}
        />
        <img
          data-scroll
          data-scroll-speed="4"
          className="sec-4-img3"
          alt={"by Birmingham Museums Trust on Unsplash "}
          src={"./birmingham-museums-trust-BqaF65lS6E4-unsplash.jpg"}
        />
        <img
          className="sec-4-img"
          alt={"by Vojtech Bruzek on Unsplash"}
          src={"./so.jpg"}
        />
      </div>
      <div
        className="section-5"
        data-scroll-section
        data-scroll-section-id="section5"
      >
        <SightImg size={450} src={"./ian-dooley-iD5aVJFCXJg-unsplash.jpg"} />
        <div className="writing-4">
          <div data-scroll data-scroll-speed="2" className="L-section">
            <p>my empathy runs deeper than ever</p>
            <p>i feel your pain</p>
            <p>i touch and it hugs me with it's burning warmth</p>
            <p>my voice burns into nothing</p>
            <p>hands tied behind my back as if they weren't</p>
            <p>i could have done something</p>
          </div>
          <div
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
            className="R-section"
          >
            <p>i was reborn into solitude</p>
            <p>within a cascading temple</p>
            <p>a child with cries like a dying vinyl</p>
            <p>i saw everything drift</p>
            <p>drift to a smokey night</p>
            <p>all i want is to feel, and pain is often the most</p>
            <p>familiar sensation</p>
            <p>i dream of embers and anthing that's dying out</p>
            <p>fading like the joy i can't even recall</p>
          </div>
        </div>
      </div>
    </div>
  )
}
