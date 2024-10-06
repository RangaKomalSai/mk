import React from 'react'
import Hono from '../components/Hono'
import Footer from '../components/Footer'
import ContactDetails from '../components/ContactDetails'

import Card from '../components/Card'

function Whislist() {

  const tempProduct = {
    "id": "1",
    "imgUrl": "https://www.10wallpaper.com/wallpaper/3840x2160/1907/Red_Rose_Leaves_4k_HD_Wallpaper.jpg",
    "name": "Rose",
    "price": "200",
    "description": "rose"

  }

  return (
    <div>
      <Hono />
      <p
        style={{
          padding: '10px',
          fontFamily: 'cursive',
          fontSize: '22px',
          textAlign: 'center',
          width: '100%',
          color: "black",
          opacity: "70%",
          margin: '0 0px',

        }}
      >
        My Order !
      </p>
      <Card product={tempProduct} />
      <ContactDetails />
      <Footer />
    </div>
  );
}

export default Whislist;