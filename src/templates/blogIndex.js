import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import slugify from '@sindresorhus/slugify/index'
import { NavigateBefore, NavigateNext } from 'styled-icons/material'
import { range } from 'lodash'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, LightBlueLink, TagList, TagListItem } from '../components/styled'

const BlogIndex = ({ pageContext }) => {
  const { group, index, pageCount, pathPrefix } = pageContext
  const previousUrl = `${pathPrefix}/${index - 1 === 1 ? `` : (index - 1).toString()}`
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`
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
        <Wrapper>
          {group &&
            group.map(({ node: post }) => (
              <Article key={post.id}>
                <Header>
                  <BlogTitle to={post.fields.slug}>{post.frontmatter.title}</BlogTitle>
                  <BlogMeta>
                    <span>{post.frontmatter.date}</span>
                    <span> &bull; </span>
                    <span>{post.timeToRead} min read</span>
                  </BlogMeta>
                </Header>
                <p>{post.frontmatter.description}</p>
                <Footer>
                  <LightBlueLink to={post.fields.slug}>View Post</LightBlueLink>
                  <TagList>
                    {post.frontmatter.tags.map(tag => {
                      const slug = slugify(tag)
                      return (
                        <TagListItem key={tag}>
                          <Link to={`/tags/${slug}`}>{slug}</Link>
                        </TagListItem>
                      )
                    })}
                  </TagList>
                </Footer>
              </Article>
            ))}
          <Pagination>
            <PaginationLinks>
              {index > 1 ? (
                <PaginationLink to={previousUrl}>
                  {<NavigateBefore size="1rem" />}Previous
                </PaginationLink>
              ) : (
                <PaginationLinkInactive>
                  {<NavigateBefore size="1rem" />}Previous
                </PaginationLinkInactive>
              )}
              {index < pageCount ? (
                <PaginationLink to={nextUrl}>
                  Next{<NavigateNext size="1rem" />}
                </PaginationLink>
              ) : (
                <PaginationLinkInactive>
                  Next{<NavigateNext size="1rem" />}
                </PaginationLinkInactive>
              )}
            </PaginationLinks>
            <PaginationMeta>
              Showing page{` `}
              {index === pageCount ? (
                <span>{index}</span>
              ) : (
                <select
                  defaultValue={index}
                  onChange={({ currentTarget: { value } }) => {
                    if (value == 1) {
                      navigate(`/${pathPrefix}`)
                    } else {
                      navigate(`/${pathPrefix}/${value}`)
                    }
                  }}
                >
                  {range(1, pageCount + 1).map(i => {
                    return <option value={i}>{i}</option>
                  })}
                </select>
              )}
              {` `}of {pageCount}
            </PaginationMeta>
          </Pagination>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  ${tw`mt-2 mb-8 flex flex-wrap justify-center`}
`
const Article = styled.article`
  ${tw`my-3 mx-auto p-6 px-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white shadow rounded`}
  p {
    ${tw`text-lg`}
  }
`
const Header = styled.header`
  ${tw`mb-3`}
`
const BlogTitle = styled(Link)`
  ${tw`text-3xl font-semibold leading-none hover:underline`}
`
const BlogMeta = styled.div`
  ${tw`block text-cool-grey-500 mt-1`}
`
const Footer = styled.footer`
  ${tw`flex justify-between`}
`
const Pagination = styled.nav`
  ${tw`mt-3 mx-auto px-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex justify-between`}
`
const PaginationLink = styled(Link)`
  ${tw`text-lg inline-block text-light-blue-vivid-700 hover:text-light-blue-vivid-900`}
`
const PaginationLinkInactive = styled.span`
  ${tw`text-lg inline-block cursor-not-allowed text-cool-grey-500`}
`
const PaginationLinks = styled.div`
  ${tw`flex justify-between w-48`}
`
const PaginationMeta = styled.div`
  ${tw`text-lg text-cool-grey-500`}
`

BlogIndex.propTypes = {
  pageContext: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({})),
    index: PropTypes.number,
    pageCount: PropTypes.number,
    pathPrefix: PropTypes.string,
  }),
}

export default BlogIndex
