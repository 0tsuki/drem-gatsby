import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const bodyStyle = {
  whiteSpace: 'pre-wrap',
}

export default ({ data }) => {
  const review = data.review
  return (
    <Layout>
      <h1>{review.title}</h1>
      TODO: 都道府県, 教習所名, タグ, レーティングの星表示
      <div>
        <p>{review.author}</p>
      </div>
      <div style={bodyStyle}>
        <p>{review.body}</p>
      </div>
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
