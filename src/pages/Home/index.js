import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import styled from "styled-components";
import ProblemCard from "../../components/ProblemCard";
import Header from '../../components/Header'
import Button from '../../components/Button'
import ProblemBox from '../../components/ProblemBox'
import SubHeader from '../../components/SubHeader'
import { theme, flexCenter } from '../../styles/theme';
import Graph1Section from "../../components/Graph/Graph1Section";

const Home = ({ history }) => {
  const [, setCookie, removeCookie] = useCookies(["Authorization"]);

  const [email, setEmail] = useState("");
  const [problems, setProblems] = useState(null);
  const [chart1Data, setChart1Data] = useState({});


  useEffect(() => {
    
    // TODO: 연결
    // axios.get('/recommends')
    //   .then(res => {

    //   })

    setChart1Data({
      myscore: [80, 50, 30, 40, 100, 20],
      passer_score: [60, 60, 60, 80, 60, 80],
    })

    setProblems([
      {
        id: 1,
        title: 'A+B',
        category: 'DP'
      },
      {
        id: 2,
        title: '피보나치 함수',
        category: 'BFS'
      },
      {
        id: 3,
        title: '유기농 배추',
        category: '문자열'
      },
      {
        id: 4,
        title: '체스판 다시 칠하기',
        category: '구현'
      }
    ])
  }, []);

  const join = async () => {
    // const resp = await axios.post('/auth/join', {})

    setCookie("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJoQGguY29tIiwiaWF0IjoxNjU1ODg0NTg1LCJleHAiOjE2NTU5NzA5ODV9.vgHvGEy400xVeMemCdLg9PESL75KJY6_fyMzfOsy46A", {
      path: "/",
      maxAge: 24 * 60 * 60,
    })
    window.location.href = "/";
  }

  const login = async () => {
    // const resp = await axios.post('/auth/join', {})

    setCookie("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJoQGguY29tIiwiaWF0IjoxNjU1ODg0NTg1LCJleHAiOjE2NTU5NzA5ODV9.vgHvGEy400xVeMemCdLg9PESL75KJY6_fyMzfOsy46A", {
      path: "/",
      maxAge: 24 * 60 * 60,
    })
    window.location.href = "/";
  }

  const logout = () => {
    removeCookie("Authorization");
    window.location.href = "/";
  }

  const loadUser = () => {
    axios.get('/users/me')
      .then(res => {
        console.log(res.data);
        setEmail(res.data?.email)
      })
  }

  return (
    <>
      <SubHeader headText={"코윗미 메인 홈"} />
      <Header isMainHome />
        <Wrapper>
          <div className="main-wrapper">
            <ContentWrapper>
              <div className="each-wrapper">
                <div className="section-name">
                  맞춤 추천 문제
                </div>
                <div className="section">
                {problems&&problems.map((it) => (
                  <ProblemBox 
                    key={it.id}
                    problem_title={it.title} 
                    problem_source={it.category} 
                    id={it.id}
                    />
                  ))}
                  
                </div>
              </div>
              <div className="each-wrapper">
                <div className="section-name">
                  내 코딩 영역 차트
                </div>
                {/* <Graph1Section chart1Data={chart1Data}/> */}
              </div>
              <div className="each-wrapper">
                <div className="section-name">
                  코딩 가이드
                </div>
                <div className="guideBlock">
                  <img className="guide_img" src={require('../../assets/Graphic/Coding Guide/01.svg').default} alt="" />
                  <div className="problem_title">현직 개발자의 코테 뿌시기</div>
                  <div className="problem_source">코테 문제 속의 노하우</div>
                </div>
                <div className="guideBlock1">
                  <img className="guide_img1" src={require('../../assets/Graphic/Coding Guide/02.svg').default} alt="" />
                  <div className="title">문제 속의 진짜 문제</div>
                  <div className="source">숨겨져 있던 핵심이 무엇일까?</div>
                </div>
                </div>
            </ContentWrapper>
          </div>
        </Wrapper>
      </>

    
  )
}

export default Home;

const RightWrapper = styled.div`
  display: flex;
  flex-direction:column;
`
const Wrapper = styled.div`
  margin-left: 143px;
  padding: 20px;

`;
const ContentWrapper = styled.div`
  display: grid;
  margin-top:120px;
  padding: 30px;
  width: 100%;
  min-height: 100vh;
  gap: 44px;
  box-sizing: border-box;
  background-color: ${theme.color.black3};
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
  border-radius: 40px 40px 0px 0px;
  grid-template-columns: 400px 400px 300px;

  .main-wrapper{
    display: flex;
    margin-top:30px;
    flex-direction : column;
  }

  // .each-wrapper{
  //   background-color:red;
  // }

  .section-name{
    font-family: neoEB;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.25px;
    color: #39E25E;
    margin-bottom:10px;
  }

  .section{
    display:flex;
    flex-direction:column;
  }

  .guideBlock{
    width: 300px;
    height: 480px;
    background: radial-gradient(50% 50% at 50% 50%, #493CAF 0%, #382C8E 100%);
    border-radius: 30px;
  }

  .guideBlock1{
    margin-top:25px;
    width: 300px;
    height: 480px;
    background: radial-gradient(50% 50% at 50% 50%, #EC7138 0%, #B74B18 100%);
    border-radius: 30px;
    position:relative;
  }

  .guide_img{
    width:90%;
    height:60%;
    display: block; 
    margin: 0px auto;
    padding-top:50px;
    cursor:pointer;
  }

  .guide_img1{
    width:100%;
    position:absolute;
    cursor:pointer;
  }

  .problem_title{
    font-size: 20px;
    font-family: 'AppleSDGothicNeoEB00';
    font-style: normal;
    padding-top:30px;
    padding-left:30px;
    font-weight: 600;
    line-height: 32px;
    /* identical to box height */
    letter-spacing: 0.25px;
  }

  .problem_source{
    font-size: 18px;
    font-family: 'AppleSDGothicNeoEB00';
    font-style: normal;
    font-weight: 400;
    padding-left:30px;
    line-height: 34px;
    /* identical to box height */
    letter-spacing: 0.25px;
  }

  .title{
    font-size: 20px;
    font-family: 'AppleSDGothicNeoEB00';
    font-style: normal;
    padding-top:370px;
    padding-left:30px;
    font-weight: 600;
    line-height: 32px;
    /* identical to box height */
    letter-spacing: 0.25px;
  }

  .source{
    font-size: 18px;
      font-family: 'AppleSDGothicNeoEB00';
      font-style: normal;
      font-weight: 400;
      padding-left:30px;
      line-height: 34px;
      /* identical to box height */
      letter-spacing: 0.25px;
  }
  
`;
