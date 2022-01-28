import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Publications from "../../components/publications"
import Service from "../../components/service"

const MyResearch = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} navValue="2">
      <Publications />
      <Service />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default MyResearch
