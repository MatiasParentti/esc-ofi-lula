import Link from "next/link"
import Image from "next/image"

export default function LayotutNoticia({ data }) {


    return (

        <div className="noticia container">
            <div className="container">
                <h1 className="mt-5">{'Nuevos cursos en julio 2023'}</h1>
                <div className="hr"></div>
                <div className="mt-5 container">
                    <h6>{'Se encuentra abierta la inscripción de tres cursos que inician en julio del presente año, no te quedes sin vacante.'}</h6>
                    <br></br>
                    <Image
                        className="img-fluid "
                        src={'/img/not.jfif'}
                        height={500}
                        width={500}
                        alt="banner"
                    ></Image>

                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <p className="p-j">La Escuela de Oficios Inacio Lula Da Silva en convenio con el Ministerio de Trabajo Empleo y Seguridad Social abre la inscripción para los cursos, Carpintera/o en Aluminio Básico, Auxiliar en Instalaciones Sanitarias y de Gas y Armador de hierros para estructuras de Hormigón Armado.  </p>
                    <p>Carpintera/o en Aluminio Básico se dicta en la Sede de Bermejo 731, Francisco Alvarez, Moreno y su duración  será de dos meses y se cursará dos veces por semana de 13 a 17 hs. 
</p>
                    <p  className="p-j">Auxiliar en Instalaciones Sanitarias y de Gas ( 60 hs) de 13 a 17 hs y Armador de Hierros para estructuras de Hormigón Armado (66hs) 08 a 12 hs. Ambos cursos se dictan  en la Sede  Lincoln 6877, Marilo, Trujui , Moreno dos veces por semana. </p>
                    <p  className="p-j">La inscripción se encuentra abierta a través del Portal Empleo: https://www.portalempleo.gob.ar  hasta el 25/06/2023 y a través del siguiente <a  href="/">link</a> de la Escuela de Oficios hasta el 03/07/2023.</p>
                    <p  className="p-j"> Para más información entra al siguiente    <Link href="/capacitaciones/cursos">Link</Link> 

</p>
                    <p className="card-text"><small className="text-muted">{'6 Junio, 2023. 12:14 hrs'}</small></p>

                </div>


            </div>
        </div>


    )

}