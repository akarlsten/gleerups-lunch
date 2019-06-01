import React from 'react'

const LunchItems = ({ menuItems }) => (
  <div className="restaurant__item-section">
    {menuItems.length < 1 ? (
      <h3>Inga luncher idag! 😔</h3>
    ) : (
      <React.Fragment>
        <h3>Dagens rätter:</h3>
        <ul className="restaurant__menuitems">
          {menuItems.map((item, index) => (
            <li key={index}>{item.dish}</li>
          ))}
        </ul>
      </React.Fragment>
    )}
  </div>
)

export { LunchItems as default }
