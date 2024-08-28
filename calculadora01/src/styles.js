import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items:center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 40%;
    border: 1px solid;
    border-color: black;
`
export const Row = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Column = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`