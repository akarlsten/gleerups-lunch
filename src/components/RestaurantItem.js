import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'

import LunchItems from './LunchItems'
import LocationContext from '../context/LocationContext'

moment.locale('sv')

const weekday = moment()
  .utc()
  .format('E')

const googleDirectionsFormatter = (name, { street, postCode, city }, customLat, customLong) => {
  const formattedName = () => encodeURI(`${name} `)
  const formattedStreet = () => encodeURI(`${street} `)
  const formattedPostcode = () => encodeURI(`${postCode} `)
  const formattedCity = () => encodeURI(city)
  let adress = encodeURI('Hans Michelsensgatan 9 21120 MALMÖ')

  if (customLat) {
    adress = encodeURI(`${customLat},${customLong}`)
  }

  return `https://www.google.com/maps/dir/?api=1&origin=${adress}&destination=${formattedName(
    name
  ) +
    formattedStreet(street) +
    formattedPostcode(postCode) +
    formattedCity(city)}&travelmode=walking`
}

const distanceTo = (latitude, longitude, restaurantLatitude, restaurantLongitude) => {
  const toRad = x => (x * Math.PI) / 180

  const R = 6371 // Radius of the earth in km
  const dLat = toRad(latitude - restaurantLatitude) // Javascript functions in radians
  const dLon = toRad(longitude - restaurantLongitude)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(55.6124)) * Math.cos(toRad(latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return parseFloat(parseFloat(d).toPrecision(1))
}

const RestaurantItem = ({
  name,
  emoji,
  address,
  position,
  menuItems,
  description,
  distance,
  checkDay,
}) => {
  const { userLocation, toggleButton } = useContext(LocationContext)
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()

  let restaurantDistance = distance // to avoid reassigning function params

  let adressLink = googleDirectionsFormatter(name, address)

  useEffect(() => {
    setLatitude(userLocation.latitude)
    setLongitude(userLocation.longitude)
  }, [userLocation])

  if (latitude && toggleButton) {
    // the toggle button at the top of the page
    restaurantDistance = distanceTo(latitude, longitude, position.lat, position.long)
    adressLink = googleDirectionsFormatter(name, address, latitude, longitude)
  } // maybe refactor all of the above into the context? or a hook?

  return (
    <section className={checkDay !== weekday ? 'faded' : ''}>
      <div className="restaurant__title">
        <h2>{`${name} ${emoji}`}</h2>
        <h4>
          {`${restaurantDistance} km`}
          {restaurantDistance > 1 ? '🚴‍♀️' : restaurantDistance > 0.4 ? '🏃‍♀️' : '🚶‍♀️'}
        </h4>
      </div>
      <div className="restaurant__body">
        <div className="restaurant__address-section">
          <div className="restaurant__desc">
            {checkDay !== weekday && (
              <p className="not_faded">
                ⚠️ Datan kan vara gammal, den uppdaterades i {moment(checkDay, 'E').format('dddd')}
                s.
              </p>
            )}
            {description ? <p>{description}</p> : <p>Ingen beskrivning ännu.</p>}
          </div>
          <a
            href={`${adressLink}`}
            className="address__directions-section"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="restaurant__address">
              <span role="img">🌍</span> Vägbeskrivning:
            </h4>
            <p className="restaurant__address">{`${address.street}`}</p>
          </a>
        </div>
        <LunchItems menuItems={menuItems} />
      </div>
    </section>
  )
}

export default RestaurantItem
