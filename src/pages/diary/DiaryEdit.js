import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
    <Header>Diary correction</Header>
    <Main>
      <h2 style={{textAlign:"center",color:"red"}}>
        다이어리 수정{ param.pk } 글 수정</h2>
    </Main>
    <Footer>12월1일</Footer>
    
    </>
  )
}

export default DiaryEdit