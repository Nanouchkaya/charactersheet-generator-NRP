/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, 
        {` `}
        <a href="https://www.nano-roleplay.com/">NRP</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
