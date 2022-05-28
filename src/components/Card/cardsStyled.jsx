import styled from 'styled-components'

export const CardContent = styled.div`
    
    width: 23%;
    min-width: 200px;
    max-width: 300px;
    height: 100px;

    background-color: #ffffffb2;
    
    border: 1px solid #dadada;
    border-radius: 5px;
    -webkit-box-shadow: 4px 4px 8px -5px #D1D1D1; 
    box-shadow: 4px 4px 8px -5px #D1D1D1;
    margin-left: 1%;
    margin-bottom: 5px;

    h2{
        width: 100%;
        height: 30%;

        font-size: 12px;
        color: #888888;
        
        border-bottom: 1px solid #dadada;
        display: flex;
        align-items: center;

        padding-left: 15px;
    }
    span {
        width: 100%;
        height: 70%;

        padding-left: 15px;
        font-size: 20px;
        font-weight: 500;
        
        display: flex;
        align-items: center;
    }

    @media (max-width: 625px) {
        height: 70px;
        
        span {
            font-size: 15px;
        }
    }


`