import React from 'react'

import CustomerSupport from '../components/CustomerSupport'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import Hono from '../components/Hono'

function Profile() {
  return (
    <div className="App">
      <Hono />
      <CustomerSupport />
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default Profile;
