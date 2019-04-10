import React from "react"
import moment from "moment"
import "moment/locale/sv"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import RestaurantList from "../components/RestaurantList"

moment.locale("sv")

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dagens Lunch - Gleerups"
      keywords={[`dagens lunch`, `gleerups`, `malmö`]}
    />
    <header>
      <h1>
        Dagens Lunch <span role="img">🍔</span>
      </h1>
      <h2>– Nära Gleerups</h2>
    </header>
    <div className="date">
      <p>{moment().format("dddd, Do MMMM")}</p>
    </div>
    <div className="legend">
      <h4>Avstånd</h4>
    </div>
    <RestaurantList />
    <footer>
      <span className="footer__text">
        <a href="https://lunch-api.adamkarlsten.com">Raw JSON</a> | Skapad av{" "}
        <a
          href="https://github.com/akarlsten"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adam
        </a>{" "}
        <span role="img">💥</span> – 2019
      </span>
    </footer>
  </Layout>
)

export default IndexPage
