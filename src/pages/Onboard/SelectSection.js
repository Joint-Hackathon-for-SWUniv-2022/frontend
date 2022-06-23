import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../../styles/theme';
import BasicButton from "./BasicButton";

const SelectSection = ({ problem, markProblem }) => {
    const [result, setResult] = useState(""); // 서버로 제출할 정답
    const [source, setSource] = useState();
    // const monaco = useMonaco();

    // TODO: 소스코드 전송
    // axios.post(``)
    //   .then(res => {})

    const [isCategorySelect, setIsCategorySelect] = useState(false);
    const categoryList = [problem.choice1, problem.choice2, problem.choice3, problem.choice4];

    const handleClick = (idx) => {
        const newArr = Array(categoryList.length).fill(false);
        newArr[idx] = true;
        setIsCategorySelect(newArr);
        setResult(categoryList[idx]);
    };

    const submit = () => {
        markProblem(result);
    }

    return (
        <OutputWrapper>
            <div className="output-title">
                정답 선택
            </div>
            <div className="button-wrapper">
                {categoryList.map((elm, index) => {
                    return (
                        <BasicButton
                            key={index}
                            isSelected={isCategorySelect[index]}
                            handleClick={handleClick}
                            elementIndex={index}
                            content={elm}
                        />
                    );
                })}
            </div>
            <Button color="grey" onClick={submit}>다음 문제 풀기</Button>
        </OutputWrapper>
    );
};

export default SelectSection;


const Input = styled.input`
width: 145px;
height: 46px;
border-radius: 100px;
padding: 10px;
appearance: none;
background-color: #2DDE54;
color: black;
&:checked {
    background-color: #2DDE54;
    color: black;
  }
`;

const OutputWrapper = styled.div`
padding: 30px;
display: flex;
gap: 36px;
flex-direction: column;
background-color: ${theme.color.black4};

.button-wrapper{
    flex-direction: row;
    ${flexCenter}
    gap: 40px;

}
.output-title{
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.25px;
    color: ${theme.color.green}
}

`;

const Button = styled.button`
width: 165px;
height: 48px;
border-radius: 100px;
align-self: center;
color: ${(props) => props.color === 'grey' ? theme.color.white : theme.color.black};
background-color: ${(props) => props.color === 'grey' ? theme.color.grey : theme.color.green};
font-family: 'AppleSDGothicNeoB00';
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.25px;

`