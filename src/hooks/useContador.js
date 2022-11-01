import { useState } from "react";

export const useContador = (initialState) => {
    //use state
    const [value,setValue] = useState(initialState)
    //

    const modificarValor = (num) => {
         setValue(Math.max(value+num,0))
    }

    const reset=()=>{
        setValue(initialState)
    }
    return {
        value,
        modificarValor,
        reset
    }
}