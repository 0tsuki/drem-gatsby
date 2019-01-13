import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const review = data.review
  return (
    <Layout>
      <h1>{review.title}</h1>
      <div>Hello review Page</div>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int) {
    review(numberId: { eq: $id }) {
      numberId
      title
      body
      author
    }
  }
`
