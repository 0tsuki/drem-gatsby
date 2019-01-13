import React from 'react'
import Grid from '@material-ui/core/Grid'

import MaterialHeader from './header'

const mainStyle = {
  maxWidth: 740,
  marginTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
}

const MaterialLayout = ({ children }) => (
  <>
    <MaterialHeader />
    <main style={mainStyle} role="main">
      {children}
    </main>
  </>
)

export default MaterialLayout
