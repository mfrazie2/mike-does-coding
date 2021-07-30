import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {

  return (
    <Layout>
      <SEO title={`Home`} />
      <StaticImage 
        src="https://lh3.googleusercontent.com/pw/AM-JKLX72lJj-vodUgH4IEMAwa3l4P_vlW11Bp3HF6t9JnnSVSXOnEgjZjWcK1oU2qopPpgs0ADZzU-q6foIii85H2fTNviICoGAEtNFfic1qDSn8Fa8PHAHy3Hh052U8vZPstIfZioavFqqxD-VnltKv8MT=w2078-h1560-no"
        alt="Winter in the mountains"
        layout="fullWidth"
        aspectRatio={21/9}
      />
      <h1>Welcome to my portfolio</h1>
      <p>I want this to be like the original Space Jam website.</p>
    </Layout>
  )
}

export default IndexPage
