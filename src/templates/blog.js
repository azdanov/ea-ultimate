import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'lodash'
import { graphql, Link } from 'gatsby'
import slugify from '@sindresorhus/slugify'
import Layout from '../components/Layout'
import { Container } from '../components/styled'

const Blog = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <Container>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p>{markdownRemark.frontmatter.description}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        {size(markdownRemark.frontmatter.tags) > 0 ? (
          <div>
            <h4>Tags</h4>
            <ul>
              {markdownRemark.frontmatter.tags.map(tag => (
                <li key={`${tag}tag`}>
                  <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      html: PropTypes.string,
      frontmatter: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string),
        }),
      ),
    }),
  }),
}

export default Blog

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
