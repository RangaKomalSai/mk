import React, {useEffect} from "react";


import Hero from "../components/Hero";
import Explore from "../components/Explore";
import ArcOfRings from "../components/ArcOfRings";

import Hono from "../components/Hono";
import Card from "../components/Card";
const style= document.createElement('style');
style.innerHTML=
`html {
  scroll-behavior: smooth;
}
`
document.head.appendChild(style);
function Homepagel() {
     useEffect(() => {
      const style= document.createElement('style');
      style.innerHTML=
      `html {
        scroll-behavior: smooth;
      }
      `
      document.head.appendChild(style);
       return () => {
         document.head.removeChild(style);
       }
     }, [])
     useEffect(() => {
      const card = document.querySelector(".Card");
      if (card) {
        card.style.display = "flex";
        card.style.flexWrap = "wrap"; 
        card.style.justifyContent = "center";// Corrected flex-wrap value
      }
    }, []);
     
  return (
    <div className="App">
    
      <Hono/>
      <Hero />
      <Explore />
      {/* <ArcOfRings /> */}
      {/* <div className="Card">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div> */}
    </div>
  );
}

export default Homepagel;