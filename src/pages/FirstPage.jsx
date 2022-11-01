import { useContador} from "../hooks/useContador";

export const FirstPage = () =>{
    const{value, increaseBy, reset, decreaseBy}=useContador(200,1,10)
    return(
        <>
        <h1>contador mejorado</h1>
        <hr />
        <h1>{value}</h1>
        
        <button onClick={increaseBy}> incrementar</button>
        <button onClick={decreaseBy}> decrementar</button>
        <button onClick={reset}>reset</button>
        </>
    )
}