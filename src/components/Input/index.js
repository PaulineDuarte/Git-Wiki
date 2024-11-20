import React from "react";

import {InputContainer} from './styles' ; 


function Input ({value,onChage}) {
    return(

        <InputContainer value ={value} onChange={onChage}>
          <input/>
        </InputContainer>
    )
}

export default Input 

