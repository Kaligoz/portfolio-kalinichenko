"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import React, { useEffect } from 'react';
import Project from '@/Project'

import websitephoto from "./images/website1.jpg"
import buttonphoto from "./images/button2.jpg"
import animationphoto from "./images/animation3.jpg"
import carphoto from "./images/photo4.jpg"


const ScrollableDiv = () => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollableDiv = document.getElementById('myScrollableDiv');
        if (scrollableDiv.scrollTop + scrollableDiv.clientHeight >= scrollableDiv.scrollHeight) {
          console.log('Scrolled to the bottom!');
          // Do something when scrolled to the bottom
        }
      };
  
      const scrollableDiv = document.getElementById('myScrollableDiv');
      scrollableDiv.addEventListener('scroll', handleScroll);
  
      return () => {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={styles.scrollable} id="myScrollableDiv">

        <Project
          title="A normal Website"
          photo={websitephoto}
          description="A website that made me remember how to use the basics of html and css after a very long time. "
          link="https://github.com/Kaligoz/HW_web_site_2_variants"
          />

        <Project
          title="The Button"
          photo={buttonphoto}
          description="A button that changes the color of the screen plus the gifs, it's not a lot but one of the first JavaScript exercises I have that I am moderately proud of."
          link="https://github.com/Kaligoz/Javascript_HW_3"
          />

        <Project
          title="First Animation"
          photo={animationphoto}
          description="A animation with a kunai on which i spent too much time, the first personal projects in Blender i have
          done. The explosion itself took a week. Very pround with what i have sadly the project file might be lost, but the video remains. "
          link="https://www.instagram.com/p/CNLLvtvHodL/?igshid=MzRlODBiNWFlZA=="
          />

        <Project
          title="A car"
          photo={carphoto}
          description="One of the newst photos in Blender i have done. Decided to make a cool car in a long corridor of windows. Used a 
          couple of new techniques. "
          link="https://www.instagram.com/p/CX7Gidasl54/?igshid=MTc4MmM1YmI2Ng=="
          />
        <div className={styles.con}>
            <p>TO BE CONTINUED...<span className={styles.terminalcursor}>|</span></p>
        </div>
      </div>
    );
  };

export default function Projects() {
  return (
    <main>
        <ScrollableDiv></ScrollableDiv>
    </main>
  )
}
