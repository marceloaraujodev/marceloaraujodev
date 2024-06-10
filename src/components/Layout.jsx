import React from 'react'
import Nav from './Nav'
import FooterComponent from './Footer'
import Quiz from './Quiz'
import Resume from './Resume'

export default function Layout({children}) {
  return (
   <>
    <Nav />
    {children}
    <Quiz />
    <Resume />
    <FooterComponent/>
   </>
  )
}
