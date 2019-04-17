import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Index/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
