import styled from 'styled-components'

export const CardContainer = styled.div`
    /* position: relative; */
    /* overflow: hidden; */
    width: 500px;
    padding: 3rem 0 2rem;
    border-radius: 0.5rem;
    color: #fff;
    background-color: red;
    box-shadow: 0em;

`

export const CardInfo = styled.div`
    background-color: black;
    height: 100px;
    width: 200px;
    /* position: absolute; */
    /* z-index: 3; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    flex: 0 0 auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    background-color: blue;
`