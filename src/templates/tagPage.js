import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, LightBlueLink } from '../components/styled'

const TagPage = ({ data: { allMarkdownRemark }, pageContext }) => {
  const { edges } = allMarkdownRemark
  const { tag } = pageContext
  const { totalCount } = allMarkdownRemark
  return (
    <Layout>
      <Seo title={tag} />
      <Container>
        <Wrapper>
          <Title>
            Found{` `}
            <span className="found">
              {totalCount} post
              {totalCount === 1 ? `` : `s`}
            </span>
            {` `}
            tagged with "{tag}"
          </Title>
          <ul>
            {edges.map(({ node: post }) => (
              <ListSection key={post.fields.slug}>
                <TitleLink to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </TitleLink>
                <small className="date">{post.frontmatter.date}</small>
                <p>{post.frontmatter.description}</p>
                <LightBlueLink to={post.fields.slug}>View Post</LightBlueLink>
              </ListSection>
            ))}
          </ul>
          <Footer>
            <LightBlueLink to="/tags/">Browse all tags</LightBlueLink>
          </Footer>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  ${tw`mx-5 md:mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2`}
`
const Title = styled.h1`
  ${tw`text-center leading-tight text-3xl mt-8 mb-6`}
  .found {
    ${tw`font-semibold`}
  }
`
const TitleLink = styled(Link)`
  h2 {
    ${tw`mb-0 text-xl leading-tight font-semibold`}
  }
`
const ListSection = styled.li`
  ${tw`shadow p-3 mb-3 bg-white rounded`}
  .date {
    ${tw`block mt-1 mb-2`}
  }
`
const Footer = styled.footer`
  ${tw`flex justify-center my-6`}
`

TagPage.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({ tag: PropTypes.string }),
}

export default TagPage

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
