import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

const Index = () => {
  return (
  <>
    <Header>My Diary</Header>
    <Main>
      <h2 style={{textAlign:"center",color:"red"}}>
        웹서비스 첫 화면</h2>
    </Main>
    <Footer>무슨 내용을 쓸까</Footer>
  </>
  )
}

export default Index