import styled from 'styled-components'

//div principal do Home
export const MainDiv = styled.div`
    width:100%;
    min-height: 100vh;
    height: 100%;
    background-color: #eeeeee;
`
// div dos cards
export const CardsDiv = styled.div`
    width: 100%;
    min-height: 130px;
    height: auto;

    border-bottom: 1px solid #dadada;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
//parte dos graficos
export const GraphicDiv = styled.div`
    width: 100%;
    min-width: 400px;
    height: auto;

    padding: 10px;

    display: flex;
    align-items: center;

    @media (max-width: 625px) {
        flex-direction:  column;
    }
`
export const Index = styled.div`
    width: 23%;
    min-width: 120px;
    max-width: 250px;
    height: 350px;

    background-color: #ffffffb2;

    border-radius: 5px;
    -webkit-box-shadow: 4px 4px 8px -5px #D1D1D1; 
    box-shadow: 4px 4px 8px -5px #D1D1D1;

    h2 {
        width: 100%;
        height: 40px;
        
        border-bottom: 1px solid #ebebeb;
        padding: 10px;

        font-size: 15px;
        color: #888888;

        display: flex;
        align-items: center;
        
    }

    div {
        width: 100%;
        height: 45px;

        border-bottom: 1px solid #ebebeb;

        display: flex;
        align-items: center;
    }
    
    .dot {
        width: 25px;
        height: 25px;

        margin: 0 10px;
        fill: ${props => props.color};
        
    }

    span {
        height: 100%;
        
        border-left: 1px solid #ebebeb;
        padding-left: 25px;

        color: #888888;
        font-size: 14px;
        font-weight: 700;

        display: flex;
        align-items: center;
                
    }

    @media (max-width: 625px) {
        height: 42px;
        width: 100%;
        min-width: 200px;
        max-width: 600px;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 10px;


        h2 {
            width: 16%;
            margin-right: 5px;
         }

        div{
            width: 16%;
            border-left: 1px solid #ebebeb;
        }

        .dot {
            width: 10px;
            margin: 0;
            margin-left: 5px;
        }
        span {
            padding-left: 10%;
            font-size: 13px;
            font-weight: 700;
            border-left:  0;
        }
    }

`
export const ChartDiv = styled.div`
    width: 100%;
    max-width: 500px;
    height: 350px;

    margin-left: 1%;
    background-color: #ffffffd3;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border-radius: 5px;
    -webkit-box-shadow: 4px 4px 8px -5px #D1D1D1; 
    box-shadow: 4px 4px 8px -5px #D1D1D1;

    h2 {
        width: 100%;
        height: 10%;

        color: #888888;
        font-size: 12px;
    
        display: flex;
        align-items: center;

        padding-left: 20px;
        border-bottom: 1px solid #ebebeb;
    }
    
    .label {
        background-color: #000000ae;
        padding: 10px;
        border-radius: 5px;

        color: white;
        font-size: 15px;
        font-weight: 700;
    }

    @media (max-width: 625px) {
        margin-left: 0;
    }

    @media (max-width: 450px) {
        .recharts-surface {
        width: 80%;
    }
    }
   
`


//parte da tabela

export const TableForm = styled.table`
    width:95%;
    max-width: 1000px;
    height: auto;

    margin: 10px;
    background-color: #f0f0f0;

    border: 1px solid #e0e0e0;
    border-radius: 5px;
    -webkit-box-shadow: 4px 4px 8px -5px #D1D1D1; 
    box-shadow: 4px 4px 8px -5px #D1D1D1;

    thead,tbody  {
        width: 100%;
        height: 35px;
    }
    .trTitle {
        height: 25px;
        background-color: #ebebeb;
    }
    td {
        width: 20%;

        font-size: 11px;
        color: #888888;
        font-weight: 700;
        
        border-right: 1px solid #e0e0e0;
        margin: 0;
        padding-left: 10px;
        
    }
    .dotTable {
        padding: 0;
        margin-right: 10px;
        fill: ${props => props.color};
    }

    @media (max-width: 625px) {
        td {
            font-size: 10px;
            padding: 0 6px;
        }
    }
    @media (max-width: 455px) {
        td {
            font-size: 8px;
            padding: 0 4px;
        }
    }


`
