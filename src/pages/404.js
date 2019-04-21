import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="text-center flex flex-col justify-center h-full">
      <h1 className="text-5xl mt-2">Not Found</h1>
      <p className="text-2xl">You just hit a page that doesn't exist...</p>
      <Link to="/" className="text-2xl text-light-blue-vivid-700 hover:underline">
        Try Home?
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
