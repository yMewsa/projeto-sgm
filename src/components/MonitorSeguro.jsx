// Nesse Componente vou demonstrar um problema no useEffect
// Gerar um looping infinito ao não utilizar um dos elementos

import { useEffect, useState } from "react";

function MonitorSeguro() {
    const [contador, setContador] = useState(0);

    // useEffect com erro grave(sem array de dependência)
    useEffect(() => {
        const intervalo =setInterval(()=>{
        console.log("Executando efeito sem array...");
        setContador((prev) => prev +1);},1000)

        return () => clearInterval(intervalo);
    }, []);

    return <div>Contador em colapso: {contador}</div>
}


export default MonitorSeguro;