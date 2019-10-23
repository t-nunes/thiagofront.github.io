import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import MainSection from "../sections/MainSection"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <MainSection />
      </Layout>
    )
  }
}

export default IndexPage
