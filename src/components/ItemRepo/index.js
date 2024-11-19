import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo () {

    return ( 
        <ItemContainer>
            <h3> Pauline Duarte </h3>
            <p> Aluna </p>
            <a href='#'> Ver repositorio</a> <br/>
            <a href='#' className='remover'>remover</a>
            <hr/>
        </ItemContainer>
    )
}


export default ItemRepo