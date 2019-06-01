<<<<<<< HEAD
import React, { useContext } from 'react'
=======
import React, { useEffect, useState, useContext } from 'react'
>>>>>>> 437b06a19e4179efca3f8d5bdbec0bea6de9022c
import Switch from 'react-switch'

import LocationContext from '../context/LocationContext'

const ToggleSwitch = () => {
  const { userLocation, toggleButton, handleToggle } = useContext(LocationContext)

  return (
    <label className="distance-toggle" htmlFor="toggler">
      <h4>Avstånd</h4>
      <Switch
        checked={toggleButton}
        onChange={handleToggle}
        disabled={!userLocation.latitude}
        offColor="#000"
        onColor="#ff6ac1"
        id="toggler"
      />
    </label>
  )
}

export { ToggleSwitch as default }
