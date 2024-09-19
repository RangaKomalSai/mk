import React from 'react'
import Hono from '../components/Hono'
import Footer from '../components/Footer'
import ContactDetails from '../components/ContactDetails'

import Card from '../components/Card'

function Whislist() {
 
  return (
    <div>
      <Hono/>
      <p
        style={{
          padding: '10px',
          fontFamily: 'cursive',
          fontSize: '22px',
          textAlign: 'center',
          width: '100%',
          color:"black",
          opacity:"70%",
          margin: '0 0px',
          
        }}
      >
        My Order !
      </p>
      <Card />
      <ContactDetails/>
      <Footer />
    </div>
  );
}

export default Whislist;