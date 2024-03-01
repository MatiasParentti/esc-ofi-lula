import Layout from "@/components/layout"
import LayotutNoticia from "@/components/noticia";
import Image from "next/image";
import Link from "next/link";

export default function Test() {


    return (

        <Layout share title={`Escuela de Oficios | Sumate a la campaña de reconocimiento de la Escuela`} description={`${'Sumate a la campaña de reconocimiento de la Escuela'}`}>

            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"></h1>
                            <nav aria-label="breadcrumb">
                                <br></br>
                                <br></br>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="noticia container">
                <div className="pt">
                    <h1 className="mt-5">{'Sumate a la campaña de reconocimiento de la Escuela '}</h1>
                    <div className="hr"></div>
                    <div className="mt-5">
                        <h6>{'Acompaña con tu firma el reconocimiento de la Escuela de Oficios Inacio Lula Da Silva para su funcionamiento como Centro de Formación Profesional de la Provincia de Buenos Aires'}</h6>
                        <br></br>
                        <Image
                            className="img-fluid "
                            src={'/img/d.JPEG'}
                            height={500}
                            width={500}
                            alt="banner"
                        ></Image>

                        <br></br>
                        <br></br>

                        <p className="p-j">Nos encontramos en una campaña para lograr que la Escuela de Oficios Inacio Lula Da Silva sea reconocida como un Centro de Formación Profesional de la Provincia de Buenos Aires. Para ello iniciamos una red solidaria cuyo objetivo es sumar apoyo a este proyecto educativo, apoyando con tu firma y difundiendo en redes sociales.</p>
                        <p className="p-j">La Escuela de Oficios Inacio Lula Da Silva nació como parte de un proyecto educativo orientado a la formación de jóvenes y adultos  e incluye a sectores sociales no alfabetizados y que no hayan completado el trayecto educativo de los niveles primario y secundario. Desde esta perspectiva la escuela integra la formación profesional, sociocultural y política de las y los estudiantes para una mejor inserción laboral en la sociedad.</p>
                        <h5 className="p-j">¡Sumate, queremos llegar a las 500 mil firmas!</h5>
                        
                        <br></br>
                        <div className="mt-2">
                            <a className="btn" target="_blank" href="https://forms.gle/6aky3nSKs6GPNo8D7">Firma</a>
                        </div>
                        <br></br>
                        <br></br>


                        <p className="card-text"><small className="text-muted">{'6 Junio, 2023. 12:14 hrs'}</small></p>




                    </div>


                </div>


            </div>



        </Layout>

    )

}