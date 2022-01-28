/**
 * Publications component that queries for data
 *
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Service = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC},
             filter: {frontmatter: { type: {eq: "service"}}}) {
        nodes {
          frontmatter {
            date(formatString: "YYYY")
            role
            venue
          }
          id
          slug
        }
      }
    }
`)
  const services = data.allMdx.nodes

  return (
    <div>
      <h1>Service</h1>
      <ol style={{ listStyle: `none` }}>
        {services.map(service => {
          const venue = service.frontmatter.venue

          return (
            <li key={service.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={service.slug} itemProp="url">
                      <span itemProp="headline">{venue}</span>
                    </Link>
                  </h2>
                  <small>
                    {service.frontmatter.role}. {service.frontmatter.date}
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

export default Service
