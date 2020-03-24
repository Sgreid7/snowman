import React, { Component } from 'react'
import styled from 'styled-components'

const Header = ({ text }) => {
  return <HeaderText>{text}</HeaderText>
}

export default Header
const HeaderText = styled.header`
  font-size: 3rem;
  font-style: italic;
  margin-top: 0.5rem;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0.1rem;
  -webkit-text-stroke-color: #61dafb;
`
