import React from 'react';
import { CardContent } from './cardsStyled';

export default function Card({title, value}) {
    return (
        <CardContent>
            <h2>{title === 'ICMS' || title === 'ST' ? title + ' PAGO' : title}</h2>
            <span>{value}</span>
        </CardContent>
    );
}