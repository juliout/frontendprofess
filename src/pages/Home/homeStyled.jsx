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
    height: auto;

    padding: 10px;

    display: flex;
    align-items: center;

`
export const Index = styled.div`
    width: 23%;
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
        width: 70%;        
        height: 100%;
        
        border-left: 1px solid #ebebeb;
        padding-left: 25px;

        color: #888888;
        font-size: 14px;
        font-weight: 700;

        display: flex;
        align-items: center;
                
    }

`
export const ChartDiv = styled.div`
    width: 600px;
    height: 350px;

    margin-left: 10px;
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
`
