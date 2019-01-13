import React from 'react'
import { graphql } from 'gatsby'
import Paper from '@material-ui/core/Paper'

import MaterialLayout from '../components/material/layout'

const bodyStyle = {
  whiteSpace: 'pre-wrap',
}

export default ({ data }) => {
  const review = data.review
  return (
    <MaterialLayout>
      <Paper>
        <h1>{review.title}</h1>
        TODO: 都道府県, 教習所名, タグ, レーティングの星表示
        <div>
          <p>{review.author}</p>
        </div>
        <div style={bodyStyle}>
          <p>{review.body}</p>
        </div>
      </Paper>
    </MaterialLayout>
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
