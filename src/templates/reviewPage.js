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
      <ul>
        <li>トップ</li>
        <li>
          <a href="/">{review.school.prefecture}</a>
        </li>
        <li>
          <a href="/">{review.school.name}</a>
        </li>
      </ul>
      <div>
        <p>タグ</p>
        <ul>
          {review.tags.map(tag => (
            <li>{tag.name}</li>
          ))}
        </ul>
      </div>
      <p>レーティング: {review.rating}</p>
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
  query($id: String) {
    review(id: { eq: $id }) {
      numberId
      title
      body
      author
      rating
      school {
        prefecture
        name
      }
      tags {
        name
      }
    }
  }
`
