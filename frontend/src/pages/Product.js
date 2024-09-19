import React from 'react'
import Hono from '../components/Hono';
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import Productdes from '../components/Productdes'

function Product() {
  return (
    <div>
      <Hono />
      <Productdes/>
      <ContactDetails/>
      <Footer/>
    </div>
  )
}

export default Product
