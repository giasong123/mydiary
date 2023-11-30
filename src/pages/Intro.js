import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/Main";

const Intro = () => {
  return (
    <Main>
      <h1 style={{ textAlign: "center" }}>인트로</h1>
      <Link to="/home">내용보기</Link>
    </Main>
  );
};

export default Intro;
