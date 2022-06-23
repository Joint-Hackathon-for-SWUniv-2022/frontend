import { Link } from "react-router-dom";
import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// from "../"

const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  background-color: ${theme.color.black2};
  height:100px;
  width:85vw;
  float:right;
  display: flex;
  justify-content: space-between;
  align-items:center;
  z-index: 50;
  
  .head_text{
    // margin-left:20px;
    font-family: 'neoB';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 46px;
    /* identical to box height */

    letter-spacing: 0.25px;

    color: #FFFFFF;
  }

`
const OnboardingHeader = ({ headText }) => {
    return (
        <HeaderBlock>
            <div className="head_text">{headText}</div>
        </HeaderBlock>
    );
};

export default OnboardingHeader;