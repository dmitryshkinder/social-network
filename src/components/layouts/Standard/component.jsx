import React from 'react'

import Header from '@/components/blocks/global/Header'

import { childrenPropType } from '@/prop-types'

const StandardLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)

StandardLayout.propTypes = {
  children: childrenPropType,
}

export default StandardLayout
