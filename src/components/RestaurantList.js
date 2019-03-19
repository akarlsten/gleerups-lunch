import React from "react"
import { StaticQuery, graphql } from "gatsby"

import RestaurantItem from "./RestaurantItem"

const RestaurantList = props => (
  <StaticQuery
    query={graphql`
      query {
        allDbJson {
          edges {
            node {
              restaurants {
                name
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
      }
    `}
    render={data => (
      <div>
        {data.allDbJson.edges[0].node.restaurants.map(restaurant => (
          <RestaurantItem key={restaurant.name} {...restaurant} />
        ))}
      </div>
    )}
  />
)

export default RestaurantList
