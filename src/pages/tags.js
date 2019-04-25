import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import slugify from '@sindresorhus/slugify'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Badge, Container } from '../components/styled'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Seo title="Tags" />
    <Container>
      <Title>Tags ({group.length})</Title>
      <ul className="w-1/2 mx-auto flex flex-wrap">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Tag>
              <Link to={`/tags/${slugify(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </Tag>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

const Tag = styled(Badge)`
  transition: all 0.1s;
  ${tw`mb-4 mx-2 inline-block text-base border-indigo-500 border-2 bg-white text-indigo-600 hover:bg-indigo-500 hover:text-white`};
`

const Title = styled.h1`
  ${tw`text-center font-semibold text-4xl mt-5 mb-10`}
`

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({ fieldValue: PropTypes.string, totalCount: PropTypes.number }),
      ),
    }),
  }),
}

export default TagsPage

export const tagPageQuery = graphql`
  query Tags {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
