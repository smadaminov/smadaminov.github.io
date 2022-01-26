import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const MyBooks = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
    	<Layout location={location} title={siteTitle} navValue="3">
        	{
            	data.allMdx.nodes.map(node => (
                	<article key={node.id}>
                		<h2>
                    		<Link to={`/books/${node.slug}`}>
                        		{node.frontmatter.title}
	                        </Link>
    	                </h2>
        	            <p>Updated: {node.frontmatter.date}</p>
            	    </article>
            	))
        	}
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
    	allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        	nodes {
            	frontmatter {
                	date(formatString: "MMMM D, YYYY")
                    	title
                }
                id
                slug
            }
        }
    }
`

export default MyBooks
