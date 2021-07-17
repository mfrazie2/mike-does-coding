import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title={`404 Page`} />
      <div>Legiterally nothing to see here</div>
    </Layout>
  )
}

export default NotFoundPage
