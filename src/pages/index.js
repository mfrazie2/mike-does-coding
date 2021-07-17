import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title={`Home Page`} />
      <div title="General Kenobi. You are a bold one.">Hello There</div>
    </Layout>
  )
}

export default IndexPage
