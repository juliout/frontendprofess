import { GoPrimitiveDot } from 'react-icons/go'

export default function TrTable({color, ano, compras, vendas, icms, st}) {
    return (
        <tbody>
            <tr>
                <td><GoPrimitiveDot className='dotTable' color={color} size={10}/> {ano}</td>
                <td>{compras}</td>
                <td>{vendas}</td>
                <td>{icms}</td>
                <td>{st}</td>
            </tr>
        </tbody>
    )
}