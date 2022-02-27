import React, { Fragment } from 'react'
import Featured from '../../components/featured/Featured'
import Hero from '../../components/hero/Hero'
import Signup from '../../components/signup/Signup'

function HomePage() {
  return (
  <Fragment>
      <Hero />
      <Featured />
      <Signup />
  </Fragment>
    )
}

export default HomePage