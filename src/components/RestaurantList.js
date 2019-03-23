import React from "react"
import { StaticQuery, graphql } from "gatsby"

import RestaurantItem from "./RestaurantItem"

const RestaurantList = props => (
  <StaticQuery
    query={graphql`
      query {
        allApiRestaurants(
          filter: { id: { ne: "dummy" } }
          sort: { fields: alternative_id }
        ) {
          edges {
            node {
              id
              alternative_id
              name
              emoji
              position {
                lat
                long
              }
              address {
                street
                postCode
                city
              }
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
