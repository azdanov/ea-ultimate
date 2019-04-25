import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import slugify from '@sindresorhus/slugify'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Badge, LightBlueLink } from '../components/styled'

const BlogIndex = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo
        title="Blog"
        keywords={[
          `PHP`,
          `Inspection`,
          `PHP Inspections`,
          `EA Ultimate`,
          `Blog`,
          `Posts`,
        ]}
      />
      <Container>
        {edges &&
          edges.map(({ node: post }) => (
            <Article key={post.id}>
              <Header>
                <BlogTitle to={post.fields.slug}>{post.frontmatter.title}</BlogTitle>
                <BlogMeta>
                  <span>{post.frontmatter.date}</span>
                  <span> &bull; </span>
                  <span>{post.timeToRead} min read</span>
                </BlogMeta>
              </Header>
              <p>{post.excerpt}</p>
              <Footer>
                <LightBlueLink to={post.fields.slug}>View Post</LightBlueLink>
                <div>
                  {post.frontmatter.tags.map(tag => {
                    const slug = slugify(tag)
                    return (
                      <Badge key={tag}>
                        <Link to={`/tags/${slug}`}>{slug}</Link>
                      </Badge>
                    )
                  })}
                </div>
              </Footer>
            </Article>
          ))}
      </Container>
    </Layout>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const Container = styled.div`
  ${tw`mt-2 mb-10 flex flex-wrap container justify-center`}
`
const Article = styled.article`
  ${tw`my-3 mx-auto p-6 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white shadow rounded`}
`
const Header = styled.header`
  ${tw`mb-3`}
`
const BlogTitle = styled(Link)`
  ${tw`text-2xl font-semibold leading-none hover:underline`}
`
const BlogMeta = styled.div`
  ${tw`block text-cool-grey-500`}
`
const Footer = styled.footer`
  ${tw`flex justify-between`}
`

export default BlogIndex

export const BlogIndexQuery = graphql`
  query BlogFeed {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
