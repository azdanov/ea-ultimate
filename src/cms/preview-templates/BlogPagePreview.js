import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { BlogTemplate } from '../../templates/blogPage'

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <Preview>
      <BlogTemplate
        title={entry.getIn([`data`, `title`])}
        body={entry.getIn([`data`, `body`])}
        description={entry.getIn([`data`, `description`])}
        tags={entry.getIn([`data`, `tags`]).filter(Boolean)}
      />
    </Preview>
  )
}

const Preview = styled.div`
  ${tw`subpixel-antialiased text-cool-grey-900 font-main flex flex-col h-screen`}
`

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
