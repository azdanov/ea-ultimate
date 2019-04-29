import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'lodash'
import { graphql, Link } from 'gatsby'
import slugify from '@sindresorhus/slugify'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import { Container, TagList, TagListItem } from '../components/styled'
import Seo from '../components/Seo'
import { renderReactWithPrismJs } from '../utils'

export const BlogTemplate = ({ body, description, tags, title, date }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>
      <Date>{date}</Date>
      {description}
    </Description>
    <Main>{renderReactWithPrismJs(body)}</Main>
    {size(tags) > 0 ? (
      <Tags>
        <h4 className="header">Tagged as</h4>
        <TagList>
          {tags.map(tag => (
            <TagListItem key={`${tag}tag`}>
              <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
            </TagListItem>
          ))}
        </TagList>
      </Tags>
    ) : null}
  </Wrapper>
)

const BlogPage = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <Seo
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
      />
      <Container>
        <BlogTemplate
          title={markdownRemark.frontmatter.title}
          date={markdownRemark.frontmatter.date}
          description={markdownRemark.frontmatter.description}
          body={markdownRemark.rawMarkdownBody}
          tags={markdownRemark.frontmatter.tags}
        />
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  ${tw`my-5 mb-10 mx-auto py-8 px-12 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white shadow rounded`}
`
const Title = styled.h1`
  ${tw`text-3xl md:text-4xl leading-tight md:leading-none font-semibold`}
`
const Date = styled.small`
  ${tw`block mb-2`}
`
const Description = styled.blockquote`
  ${tw`my-6 border-l-4 border-cool-gray-100 pl-3 text-cool-gray-400 text-lg`}
`
const Main = styled.main`
  ${tw`text-xl`}

  h1,
  h2,
  h3,
  h4 {
    ${tw`mt-2 mb-4 font-semibold`}
  }

  h1:not(:first-child),
  h2:not(:first-child),
  h3:not(:first-child),
  h4:not(:first-child) {
    ${tw`mt-6`}
  }

  h1 {
    ${tw`text-4xl leading-tight`}
  }

  h2 {
    ${tw`text-3xl`}
  }

  h3 {
    ${tw`text-2xl`}
  }

  h4 {
    ${tw`text-xl`}
  }

  a {
    ${tw`text-light-blue-vivid-700`}
  }

  a:hover {
    ${tw`underline`}
  }

  ul {
    ${tw`mb-3`}
    li {
      ${tw`ml-6`}
      list-style: disc;
    }
    li li {
      ${tw`ml-8`}
      list-style: circle;
    }
    li li li {
      list-style: square;
    }
  }

  ol {
    ${tw`mb-3 list-decimal`}
    li {
      ${tw`ml-6`}
    }
    li li {
      ${tw`ml-8`}
    }
  }

  blockquote {
    ${tw`mb-4`}
  }

  p > code {
    ${tw`text-base px-1 inline-flex rounded bg-cool-gray-050 text-cool-grey-900`}
  }

  blockquote > * {
    ${tw`m-0 pb-1 border-l-4 border-cool-grey-100 pl-3 pt-2 mb-2 text-cool-grey-600`}
  }

  pre {
    ${tw`text-base rounded`}
    margin: 0 auto !important;
    margin-bottom: 1rem !important;
  }

  .gatsby-resp-image-link {
    ${tw`my-10`}
  }

  .gatsby-resp-image-image {
    ${tw`rounded`}
  }
`
const Tags = styled.aside`
  ${tw`flex items-baseline mt-8`}
  .header {
    ${tw`font-semibold`}
  }
`

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      rawMarkdownBody: PropTypes.string,
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

BlogTemplate.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
