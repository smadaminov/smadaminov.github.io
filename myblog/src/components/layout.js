import * as React from "react"
import { Link } from "gatsby"

//import Bio from "../components/bio"
//import Seo from "../components/seo"
//import ZTabs from "../components/tabs"

import Bio from "./bio"
import Seo from "./seo"
import ZTabs from "./tabs"


const Layout = ({ location, title, children, navValue }) => {
//  const rootPath = `${__PATH_PREFIX__}/`
//  const isRootPath = location.pathname === rootPath
  const isRootPath = true

  let header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )

  let mynews = (
      <p>
      My talk on new building system~{"\n"}
      for OVS was accepted at OVSCON'21!
      </p>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Seo title="All posts" />
      <Bio />
      <ZTabs navValue={navValue} />
      <div id="nr">{mynews}</div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
