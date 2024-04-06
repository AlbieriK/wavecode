import { AuthButton, useRestActor } from "@bundly/ares-react";
import "./styles.css"
import Image from "next/image";
import logo from "./img/group-of-members-users-icon12.png"
//import { redirect } from "next/dist/server/api-utils";
export default function IcConnectPage() {
    const backend = useRestActor("backend");

    return (
        <div className="body2">
            <div className="head">

                <div className="Logo">
                    <a href="#">CODEWABE</a>
                </div>

                <nav className="navbar">
                    <a href="#">Quienes Somos</a>
                    <a href="./DB">Base de datos</a>
                </nav>

            </div>

            <div>
                <title>Dividido en forma de pastel</title>

                <div className="container">
                    <div className="slice who-we-are">
                        <div className="content">
                            <h2>Quiénes somos</h2>
                            <p> La empresa Wavecode es una empresa tecnológica fundada en Marzo del año 2024.
                                Nuestro objetivo principal es  consolidarnos como líderes en el desarrollo de soluciones innovadoras para la  industria ganadera en Aguascalientes.      Problemática a resolver:
                                Reducir las bacterias, que causan enfermedades a las gallinas.</p>
                        </div>
                    </div>
                    <div className="slice_us">
                        <div className="content">
                            <h3>Nosotros</h3>
                            <div className="icon">
                                <Image src={logo} width={10} alt="Icono 1" />
                                <p>Karim Albieri Reyes Cortez "Ceo/Lider"</p>
                            </div>
                            <div className="icon">
                                <Image src={logo} width={10} alt="Icono 2" />
                                <p> Brandon Miguel Martínez Castillo "backend/frontend"</p>
                            </div>
                            <div className="icon">
                                <Image src={logo} width={10} alt="Icono 3" />
                                <p>Adrián Emilio Reyes Valadez "backend"</p>
                            </div>
                            <div className="icon">
                                <Image src={logo} width={10} alt="Icono 4" />
                                <p>Carlos Alberto Dantes Tejeda "backend"</p>
                            </div>
                        </div>
                    </div>
                    <div className="slice problem-description">
                        <div className="content">
                            <h2>Descripción del problema</h2>
                            <p>El problema radica en la gestión ineficiente del suministro de agua para las gallinas en las granjas avícolas, también en el  proceso manual de llenado y vaciado de los bebederos que conlleva riesgos de contaminación, ya sea por la defecación de las gallinas en el agua o por la acumulación de bacterias en los recipientes por mantener el agua mucho tiempo. Esto puede provocar enfermedades en las gallinas y afectar negativamente la producción.
                                Nuestra propuesta es desarrollar un Sistema Automatizado de Bebedero para Gallinas que garantice un suministro constante de agua limpia y fresca, purificar el agua contaminada para eliminar bacterias y otros contaminantes, así como la reposición del agua.</p>
                        </div>
                    </div>
                    <div className="slice solution">
                        <div className="content">
                            <h2>Solución</h2>
                            <p>El sistema de the weater clean es la solución por sus diversas funciones: 1.- Llenado y vaciado automático cada cierto tiempo, 2.- Filtro de agua: la agua contaminada pasa por 2 filtros para ser purificada. 3.- Reutilización de La agua purificada para disminuir un gasto considerable del agua.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}
