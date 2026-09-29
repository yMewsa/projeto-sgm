// Componente para contagem do tempo de manutenção de um serviço

import { useEffect } from "react";

function ManutencaoTimer(intervaloSegundo, setIntervaloSegundo, isActive){
    useEffect(()=> {
        // Se um serviço de manutenção estiver desativado
        if (!isActive) return undefined;

        // If isActive = true
        const timerId = setInterval(()=>{
            setIntervaloSegundo((prev)=> prev + 1);
        }, 1000);

        // Limpeza de dados so useEffect
        return () => clearInterval(timerId);
    }, [isActive, setIntervaloSegundo]);

    const horas = String(Math.floor(intervaloSegundo/3600)).padStart(2,"0");
    const minutos = String(Math.floor((intervaloSegundo % 3600 / 60)).padStart(2, "0"));
    const segundos = String(intervaloSegundo % 60).padStart(2, "0");

    return(
        <div className="timer-display" role="timer" aria-label="Tempo de Execução da ordem">
            <span className="digits">{horas}:{minutos}:{segundos}</span>
        </div>
    );
}

export default ManutencaoTimer;