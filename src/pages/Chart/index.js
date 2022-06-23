import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie"
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import { theme, flexCenter } from '../../styles/theme';
import styled from "styled-components";
import GuideSection from "../../components/Editor/GuideSection";
import BreadCrumb from "../../components/BreadCrumb";
import RunSection from "../../components/Editor/RunSection";
import Graph1Section from "../../components/Graph/Graph1Section";
import Graph2Section from "../../components/Graph/Graph2Section";
import Graph3Section from "../../components/Graph/Graph3Section";


const Chart = () => {
  const [chart1Data, setChart1Data] = useState({});
  const [chart2Data, setChart2Data] = useState({});
  const [chart3Data, setChart3Data] = useState({});

  useEffect(() => {
    // axios.get(`/chart`)
    //   .then(res => {})
    setChart1Data({
      myscore: [80, 50, 30, 40, 100, 20],
      passer_score: [60, 60, 60, 80, 60, 80],
      coding_status : "",
      recommended_problems:["","","","",""]
    })

    setChart2Data({
      dp_score: [20,20,30,40,50,60],
      dfs_score: [10, 30, 40, 80, 30, 20],
    })

    setChart3Data({
      dfs_bfs: 40,
      dp: 70,
      문자열: 50,
    })
    
  }, []);

  
  // console.log(chart1Data)
  //   console.log(1)
  return (
    <>
    <SubHeader headText={"마이 코딩"} />
    <Header isMyCoding/>
      <Wrapper>
        <div className="main-wrapper">
          <ContentWrapper>
              <Graph1Section chart1Data={chart1Data}/>
              <RightWrapper>
                <Graph2Section chart2Data={chart2Data}/>
                <Graph3Section chart3Data={chart3Data}/>
              </RightWrapper>
            
         
          </ContentWrapper>
        </div>
      </Wrapper>
    
      
    </>
  )
}

export default Chart;

const RightWrapper = styled.div`
  display: flex;
  flex-direction:column;
`
const Wrapper = styled.div`
margin-left: 143px;
padding: 20px;

`;
const ContentWrapper = styled.div`
  display: flex;
  margin-top:120px;
  padding: 50px;
  width: 100%;
  
  gap: 44px;
  min-height: 80vh;
  box-sizing: border-box;
  background-color: ${theme.color.black3};
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
  border-radius: 40px 40px 0px 0px;

  .main-wrapper{
    display: flex;
    margin-top:30px;
    flex-direction : column;
  }
`;
