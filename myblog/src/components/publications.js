/**
 * Publications component that queries for data
 *
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Publications = () => {
  const data = useStaticQuery(graphql`
    query {
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
`)
  const papers = data.allMdx.nodes

  return (
    <div>
      <h1>Publications</h1>
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
    </div>
  )
}

export default Publications
