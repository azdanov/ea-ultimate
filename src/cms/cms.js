import CMS from 'netlify-cms'
import React from 'react'
import './cms.css'
import BlogPagePreview from './preview-templates/BlogPagePreview'
import StyledSheets from './StyledSheets'

CMS.registerPreviewTemplate(`blog`, props => (
  <StyledSheets>
    <BlogPagePreview {...props} />
  </StyledSheets>
))
