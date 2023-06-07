import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { navLinkItem, navLinkText } from '../../components/layout.module.css'

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <li key={node.id} className={navLinkItem}>
              <Link
                className={navLinkText}
                to={node.frontmatter.slug}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))
        }
      </ul>

    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage