import styled from 'styled-components';
import { flexCenter } from "../../styles/theme";

const BasicButton = (props) => {
    const { isSelected, handleClick, elementIndex } = props;
    return (
        <Wrapper>
            <div
                onClick={() => handleClick(elementIndex)}
                className={isSelected ? "select" : "non-select"}
            >
                {props.content} {isSelected}
            </div>
        </Wrapper>
    );
}


export default BasicButton;

const Wrapper = styled.div`
cursor: pointer;
font-family: 'AppleSDGothicNeoB00';
font-weight: 400;
font-size: 13px;
line-height: 22px;
letter-spacing: 0.25px;

.select{
    width: 110px;
    height: 27px;
    border-radius: 100px;
    padding: 10px;
    ${flexCenter}
    border: 1px solid #2DDE54;
    font-weight: 400;
    font-size: 13px;
    font-family: 'AppleSDGothicNeoB00';
    line-height: 22px;
    color: black;
    background-color:  #2DDE54;
    &:hover{
        background-color: #2DDE54;
        color: black;
        border-radius: 100px;
    }
}

.non-select{
    width: 110px;
    height: 27px;
    border-radius: 100px;
    padding: 10px;
    ${flexCenter}

    border: 1px solid #2DDE54;

    font-weight: 400;
    font-size: 13px;
    font-family: 'AppleSDGothicNeoB00';
    line-height: 22px;
    background-color: black;
    color: #2DDE54;
    border: 1px solid #2DDE54;
    &:hover{
        background-color: #2DDE54;
        color: black;
        border-radius: 100px;
    }

}
`