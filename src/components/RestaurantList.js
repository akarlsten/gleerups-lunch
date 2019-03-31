import React from "react"
import { StaticQuery, graphql } from "gatsby"

import RestaurantItem from "./RestaurantItem"

const RestaurantList = props => (
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
      <div>
        {data.allApiRestaurants.edges.map(restaurant => (
          <RestaurantItem key={restaurant.node.id} {...restaurant.node} />
        ))}
      </div>
    )}
  />
)

export default RestaurantList
