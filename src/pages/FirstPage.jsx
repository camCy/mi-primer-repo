import { useContador} from "../hooks/useContador";

export const FirstPage = () =>{
    const{value, modificarValor, reset}=useContador(200)
    return(
        <>
        <h1>contador mejorado</h1>
        <hr />
        <h1>{value}</h1>
        
        <button onClick={()=>modificarValor(+1)}> +1</button>
        <button onClick={()=>modificarValor(-1)}> -1</button>
        <button onClick={reset}>reset</button>
        </>
    )
}