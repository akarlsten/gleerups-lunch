import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import RestaurantItem from './RestaurantItem'
import LocationContext from '../context/LocationContext'
import useGeolocation from '../hooks/useGeolocation'
import ToggleSwitch from './ToggleSwitch'

const RestaurantList = () => {
  const [toggleButton, setToggleButton] = useState(false)
  const handleToggle = () => {
    setToggleButton(!toggleButton)
  }

  // move all this stuff out of here

  const userLocation = useGeolocation()

  return (
    <StaticQuery
      query={graphql`
        query {
          allApiRestaurants(
            filter: { id: { ne: "dummy" }, name: { ne: "string" } }
            sort: { fields: distance }
          ) {
            edges {
              node {
                id
                alternative_id
                name
                emoji
                description
                position {
                  lat
                  long
                }
                address {
                  street
                  postCode
                  city
                }
                distance
                checkDay
                menuItems {
                  dish
                }
              }
            }
          }
        }
      `}
      render={data => (
        <LocationContext.Provider value={{ userLocation, toggleButton, handleToggle }} toggle>
          <div className="legend">
            <ToggleSwitch />
          </div>
          {data.allApiRestaurants.edges.map(restaurant => (
            <RestaurantItem key={restaurant.node.id} {...restaurant.node} />
          ))}
        </LocationContext.Provider>
      )}
    />
  )
}

export default RestaurantList
