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
             filter: {frontmatter: { type: {eq: "teaching"}}}) {
        nodes {
          frontmatter {
            date(formatString: "YYYY")
            role
            courses
          }
          id
          slug
        }
      }
    }
`)
  const teaching = data.allMdx.nodes

  return (
    <div>
      <h1>Teaching</h1>
      <ol style={{ listStyle: `none` }}>
        {teaching.map(exp => {
          const role = exp.frontmatter.role

          return (
            <li key={teaching.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={exp.slug} itemProp="url">
                      <span itemProp="headline">{role}</span>
                    </Link>
                  </h2>
                  <small>
                    <ol style={{ listStyle: `none` }}>
                      {exp.frontmatter.courses.map(function(course) {
                        return (
                          <li>{course}</li>
                        )
                      })}
                    </ol>
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
