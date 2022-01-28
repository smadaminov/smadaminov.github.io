import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const MyResearch = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const papers = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle} navValue="2">
      <h3>Publications</h3>
      <ol style={{ listStyle: `none` }}>
        {papers.map(paper => {
          const title = paper.frontmatter.title

          return (
            <li key={paper.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={paper.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>
		    {paper.frontmatter.authors}<br/>
		    {paper.frontmatter.venue}. {paper.frontmatter.misc} {paper.frontmatter.date}
		  </small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
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
    	allMdx(sort: {fields: frontmatter___date, order: DESC},
	       filter: {frontmatter: { type: {eq: "paper"}}}) {
        	nodes {
            	frontmatter {
                	date(formatString: "YYYY")
                    	title
			authors
			venue
			misc
                }
                id
                slug
            }
        }
    }
`

export default MyResearch
