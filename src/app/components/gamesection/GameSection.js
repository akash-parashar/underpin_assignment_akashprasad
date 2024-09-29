import React from 'react'
import Leftbar from '../leftbar/Leftbar'
import Gamecards from '../gamecards/Gamecards'

const GameSection = () => {
  return (
    <div className='flex sm:flex-row flex-col gap-10'><Leftbar/>
    <Gamecards/>
    </div>
  )
}

export default GameSection