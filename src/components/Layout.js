import React from 'react'
import styled from 'styled-components'

const LayoutWrapper = styled.main``

const Layout = ({ children, language, setLanguage }) => (
  <LayoutWrapper>
    {/* Spot for a Header */}
    {children}
    {/* Spot for a Footer */}
  </LayoutWrapper>
)

export default Layout
