import React, { useState, useEffect } from 'react';

const PanelControl = () => {
    const [intervaloCronometro, setIntervaloCronometro] = useState<any>();
    const [tiempoRestante, setTiempoRestante] = useState(0);
    const [motores, setMotores] = useState<object>({
        motor1: false,
        motor2: false,
        motor3: false,
        motor4: false
    });

    const [tiempoInput, setTiempoInput] = useState(30);

    useEffect(() => {
        const intervaloActualizacionNiveles = setInterval(actualizarNiveles, 5000);

        return () => clearInterval(intervaloActualizacionNiveles);
    }, []);

    const iniciarCronometro = () => {
        const elementUF:any = document.getElementById('unidadTiempo');
        let unidadTiempo = "";
        if(elementUF){
            unidadTiempo = elementUF['value']
        }

        let nuevoTiempoRestante;

        if (unidadTiempo === "horas") {
            nuevoTiempoRestante = tiempoInput * 3600; // Convertir horas a segundos
        } else {
            nuevoTiempoRestante = tiempoInput * 60; // Convertir minutos a segundos
        }

        setTiempoRestante(()=>nuevoTiempoRestante);

        setIntervaloCronometro(setInterval(() => {
            if (tiempoRestante <= 0) {
                detenerCronometro();
                const temp = document.getElementById('temporizador');
                if (temp) {
                    temp.innerText = '¡Es hora de cambiar el filtro!'
                }
            } else {
                setTiempoRestante(prevTiempo => prevTiempo - 1);
            }
        }, 1000));
    };


    const detenerCronometro = () => {
        clearInterval(intervaloCronometro);
        setIntervaloCronometro(null);
    };

    const actualizarCronometro = () => {
        const horas = Math.floor(tiempoRestante / 3600); // Convertir segundos a horas
        const minutos = Math.floor((tiempoRestante % 3600) / 60); // Convertir segundos restantes a minutos
        const segundos = tiempoRestante % 60; // Segundos restantes
        const temp = document.getElementById('temporizador');
        if (temp) {
            temp.innerText = 'Tiempo restante: ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
        }
    };

    const toggleMotor = (motor: string) => {
        setMotores((prevMotores: any) => ({
            ...prevMotores,
            [motor]: !prevMotores[motor]
        }));
        const Estado = document.getElementById(motor + 'Estado');
        if (Estado) {
            Estado.innerText = motores[motor as keyof typeof motores] ? 'Activo' : 'Desactivado';
        }
        document.getElementById(motor + 'Estado')?.classList.toggle('motor-activo', motores[motor as keyof typeof motores]);
    };

    const actualizarNiveles = () => {
        // Valores aleatorios del 0% al 100%
        const nivel_bt1 = Math.random() * 100;
        const nivel_bt2 = Math.random() * 100;
        const nivel_bt3 = Math.random() * 100;

        // Actualizamos los elementos en el HTML con los nuevos valores
        const nivel_button1 = document.getElementById('nivel_bt1');
        if (nivel_button1) {
            nivel_button1.innerText = nivel_bt1.toFixed(2) + '%';
        }
        const nivel_button2 = document.getElementById('nivel_bt2');
        if (nivel_button2) {
            nivel_button2.innerText = nivel_bt2.toFixed(2) + '%';
        }
        const nivel_button3 = document.getElementById('nivel_bt3');
        if (nivel_button3) {
            nivel_button3.innerText = nivel_bt3.toFixed(2) + '%';
        }
    };

    return (
        <>
            <div className="panel">
                <h2>Panel de Nivel de Agua</h2>
                <p>Nivel de agua (ALMACENADOR DE AGUA): <span id="nivel_bt1">--</span></p>
                <p>Nivel de agua (BEBEDERO): <span id="nivel_bt2">--</span></p>
                <p>Nivel de agua (BOTE DE AGUA PURIFICADA): <span id="nivel_bt3">--</span></p>
            </div>

            <div className="panel" id="cronometroPanel">
                <h2>Temporizador de Cambio de Filtro</h2>
                <label htmlFor="tiempoFiltro">Tiempo restante para cambio de filtro:</label>
                <input type="number" id="tiempoFiltro" defaultValue="30" onChange={(e)=>setTiempoInput(parseInt(e.target.value))}/>
                <select id="unidadTiempo">
                    <option value="minutos" defaultValue="true">Minutos</option>
                    <option value="horas">Horas</option>
                </select>
                <button onClick={iniciarCronometro}>Iniciar</button>
                <button onClick={detenerCronometro}>Detener</button>
                <p id="temporizador"></p>
            </div>

            <div className="panel" id="motor1Panel">
                <h2>Motor 1</h2>
                <button onClick={() => toggleMotor('motor1')}>Activar / Desactivar</button>
                <p id="motor1Estado"></p>
            </div>

            <div className="panel" id="motor2Panel">
                <h2>Motor 2</h2>
                <button onClick={() => toggleMotor('motor2')}>Activar / Desactivar</button>
                <p id="motor2Estado"></p>
            </div>

            <div className="panel" id="motor3Panel">
                <h2>Motor 3</h2>
                <button onClick={() => toggleMotor('motor3')}>Activar / Desactivar</button>
                <p id="motor3Estado"></p>
            </div>
            <div className="panel" id="motor4Panel">
                <h2>Motor 4</h2>
                <button onClick={() => toggleMotor('motor4')}>Activar / Desactivar</button>
                <p id="motor4Estado"></p>
            </div>
        </>
    );
};

export default PanelControl;
