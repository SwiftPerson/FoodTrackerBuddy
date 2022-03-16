import Vagies from "../components/Vagies";
import Popular from "../components/Popular";

import React from 'react'

const Home = () => {
  return (
      <div className="EntireBody">
        <Popular/>
        <Vagies/>
      </div>
    )
}

export default Home