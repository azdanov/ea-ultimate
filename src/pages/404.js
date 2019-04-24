import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="flex flex-col h-full justify-center text-center">
      <h1 className="mt-2 text-5xl">Not Found</h1>
      <p className="text-2xl">You just hit a page that doesn't exist...</p>
      <Link to="/" className="hover:underline text-2xl text-light-blue-vivid-700">
        Try Home?
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
