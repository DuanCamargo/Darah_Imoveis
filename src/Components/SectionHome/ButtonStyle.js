import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 20px;
    background:  #009E10 ;
    white-space: nowrap;
    padding:  12px 20px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background:  #01BF71;
        
    }
    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: none;
    }
`