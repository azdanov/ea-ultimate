import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, LightBlueLink } from '../components/styled'

const Tag = ({ data: { allMarkdownRemark }, pageContext }) => {
  const { edges } = allMarkdownRemark
  const { tag } = pageContext
  const { totalCount } = allMarkdownRemark
  return (
    <Layout>
      <Seo title={tag} />
      <Container>
        <div className="mx-5 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h3 className="text-center leading-tight text-3xl my-8">
            Found{` `}
            <span className="font-semibold">
              {totalCount} post
              {totalCount === 1 ? `` : `s`}
            </span>
            {` `}
            tagged with "{tag}"
          </h3>
          <ul>
            {edges.map(({ node: post }) => (
              <li key={post.fields.slug} className="shadow p-3 mb-3 bg-white rounded">
                <TitleLink to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </TitleLink>
                <small className="block mt-1 mb-2">{post.frontmatter.date}</small>
                <p>{post.frontmatter.description}</p>
                <LightBlueLink to={post.fields.slug}>View Post</LightBlueLink>
              </li>
            ))}
          </ul>
          <footer className="flex justify-center my-6">
            <LightBlueLink to="/tags/">Browse all tags</LightBlueLink>
          </footer>
        </div>
      </Container>
    </Layout>
  )
}

Tag.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
}

const TitleLink = styled(Link)`
  h2 {
    ${tw`mb-0 text-xl leading-tight font-semibold`}
  }
`

export default Tag

export const tagPageQuery = graphql`
  query Tag($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
