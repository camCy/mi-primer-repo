import { useState } from "react";

export const useContador = (initialState, numToSum, numToRes) => {
    //use state
    const [value,setValue] = useState(initialState)
    //

    const modificarValor = (num) => {
         setValue(Math.max(value+num,0))
    }
    const increaseBy = ()=>{
        setValue(value+numToSum)
    }
    const decreaseBy = ()=>{
        setValue(value-numToRes)
    }
    const reset=()=>{
        setValue(initialState)
    }
    return {
        value,
        modificarValor,
        reset,
        increaseBy,
        decreaseBy
    }
}