import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import RestaurantList from "../components/RestaurantList"

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
    <div className="legend">
      <h4>Avstånd</h4>
    </div>
    <RestaurantList />
    <footer>
      <span className="footer__text">
        Skapad av <a href="https://github.com/acarlsten">Adam</a>{" "}
        <span role="img">💥</span> – 2019
      </span>
    </footer>
  </Layout>
)

export default IndexPage
