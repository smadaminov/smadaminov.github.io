import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const MyResearch = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
    	<Layout location={location} title={siteTitle} navValue="2">
        	{
            	data.allMdx.nodes.map(node => (
                	<article key={node.id}>
                		<h3>
                    		<Link to={`/research/${node.slug}`}>
                        		{node.frontmatter.title}
	                        </Link>
    	                </h3>
			    <p>{node.frontmatter.authors}<br/>
			    In {node.frontmatter.venue}. {node.frontmatter.misc}</p>
        	            <p>Year: {node.frontmatter.date}</p>
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
