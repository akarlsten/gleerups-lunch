import React from "react"

const distanceFromGleerups = (lon2, lat2) => {
  const toRad = x => {
    return (x * Math.PI) / 180
  }

  const R = 6371 // Radius of the earth in km
  const dLat = toRad(lat2 - 55.6124) // Javascript functions in radians
  const dLon = toRad(lon2 - 12.99959)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(55.6124)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return parseFloat(d).toPrecision(1)
}

const RestaurantItem = ({ id, name, address, position, menuItems }, props) => (
  <section>
    <div className="restaurant__title">
      <h2>{name}</h2>
    </div>
    <div className="restaurant__body">
      <p className="restaurant__address">{`${address.street}, ${
        address.postCode
      } ${address.city} `}</p>
      <span role="img">
        {
          <a href="`https://www.google.com/maps/place/${address.street},+${address.postCode}+${address.city}/`">
            🌍
          </a>
        }
      </span>
      <aside>
        Avstånd från Gleerups:
        {` ${distanceFromGleerups(position.long, position.lat)} km`}
      </aside>
      <h3>Dagens rätter:</h3>
      <ul className="restaurant__menuitems">
        {menuItems.map((item, index) => (
          <li key={index}>{item.dish}</li>
        ))}
      </ul>
    </div>
  </section>
)

export default RestaurantItem
