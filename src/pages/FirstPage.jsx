import { useState } from "react";
const origen=10
export const FirstPage = () => {
    //use state
    const [value,setValue] = useState(origen)
    //

    const modificarValor = (num) =>{
         setValue(Math.max(value+num,0))
    }

    return(
        <>
        <h1>contador</h1>
        <h1>{value}</h1>
        
        <button onClick={()=>modificarValor(+1)}>+1</button>
        <button onClick={()=>modificarValor(-1)}>-1</button>
        <button onClick={()=>modificarValor(origen-value)}>reset</button>
        </>
    )
}