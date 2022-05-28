import { useEffect, useState } from 'react';
import { MainDiv, CardsDiv, GraphicDiv, Index, TableForm, ChartDiv} from './homeStyled'
import { GoPrimitiveDot } from 'react-icons/go'
import { BarChart, Bar, ResponsiveContainer, Tooltip,CartesianGrid, Cell} from 'recharts';
import TrTable from '../../components/trTable';
import Card from '../../components/Card' 

export default function Home() {

  let cont = -1
  const allCollors = ['violet','red','Blue','purple', 'turquoise']
  const [card, setCard] = useState([])
  const [data, setData] = useState([])
  const [table, setTable] = useState([])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      let {ano, porcentagem, saldo} = payload[0].payload
      saldo = saldo.toLocaleString('pt-br', {minimumFractionDigits: 2})

      return (
        <div className="custom-tooltip">
          <p className="label">{` ${ano} | ${porcentagem} | R$ ${saldo}`}</p>
        </div>
      );
    }
    return null;
  };

  function reverseCoin(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }

  useEffect(() => {
    function fetchBuy(){
      try {
        fetch('http://localhost:3000/calculateBuy')
          .then(response => response.json())
            .then(data=> setCard(data))
        
      } catch (e) {
        alert(e.message)
      }
    }

    fetchBuy()

    function chartBuy() {
      fetch('http://localhost:3000/chartSource')
        .then(response => response.json())
          .then(rest => setData(rest))
    }

    chartBuy()

    function table() {
      fetch('http://localhost:3000/tableSource')
        .then(response => response.json())
          .then(rest => setTable(rest))
    }
    table()

  },[])

  return (

    <MainDiv>
      <CardsDiv>
        {
          card.map((c, index) => { 
            return <Card title={c.tag} value={c.valor} key={index}/>
          })
        }
      </CardsDiv>

      <GraphicDiv>
        <Index>
          <h2>Index</h2>
          <div><GoPrimitiveDot className='dot' color={allCollors[0]}/> <span>2017</span></div>
          <div><GoPrimitiveDot className='dot' color={allCollors[1]}/> <span>2018</span></div>
          <div><GoPrimitiveDot className='dot' color={allCollors[2]}/> <span>2019</span></div>
          <div><GoPrimitiveDot className='dot' color={allCollors[3]}/> <span>2020</span></div>
          <div><GoPrimitiveDot className='dot' color={allCollors[4]}/> <span>2021</span></div>
        </Index>

        <ChartDiv>
          <h2> FATURAMENTO DO ANO </h2>
          <ResponsiveContainer width='100%' height='90%'>
            <BarChart width={60} data={data}>
              <CartesianGrid strokeDasharray="1 3" />
              <Tooltip content={ <CustomTooltip />} />              
              <Bar dataKey="saldo" fill='red'>
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={allCollors[index]} width={70} />
                ))
              }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartDiv>
      </GraphicDiv>

      <TableForm>
        <thead className='trTitle'>
          <tr>
            <td>ANO</td>
            <td>COMPRAS</td>
            <td>VENDAS</td>
            <td>ICMs PAGO</td>
            <td>ST PAGO</td>
          </tr>
        </thead>

        {
          table.map((tab, index) => {
            cont = cont + 1

            return (
              <TrTable 
                key={index} color={allCollors[cont]}
                ano={tab.ano} compras={reverseCoin(tab.compras)}
                vendas={reverseCoin(tab.vendas)} icms={reverseCoin(tab.ICMS)}
                st={reverseCoin(tab.ST)}
              />
            )
          })
        }

      </TableForm>

    </MainDiv>
  );
}

