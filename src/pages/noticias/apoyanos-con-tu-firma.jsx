import Layout from "@/components/layout"
//import Noticia from '../../models/Noticia';
//import conectarDB from "@/lib/dbConnect";
import LayotutNoticia from "@/components/noticia";
import Image from "next/image";
import Link from "next/link";

export default function Test() {


    return (

        <Layout share title={`Escuela de Oficios | Acto de inaguracion y comienzo de cursos`} description={`${'Este martes 4 de julio se realizo el Acto de inicio de cursada e inauguración de la Escuela Comunitaria de Oficios Inacio Lula Da Silva ubicada en el barrio de Marilo, Trujui, Moreno.'}`}>

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
                    <h1 className="mt-5">{'Apoyanos con tu firma'}</h1>
                    <div className="hr"></div>
                    <div className="mt-5">
                        <h6>{'Acompaña con tu firma el reconocimiento de la Escuela de Oficios Inacio Lula Da Silva para su funcionamiento como Centro de Formación Profesional de la Provincia de Buenos Aires'}</h6>
                        <br></br>
                        <Image
                            className="img-fluid "
                            src={'/img/ina.jpg'}
                            height={500}
                            width={500}
                            alt="banner"
                        ></Image>

                        <br></br>
                        <br></br>


                        <p className="card-text"><small className="text-muted">{'6 Junio, 2023. 12:14 hrs'}</small></p>




                    </div>


                </div>


            </div>



        </Layout>

    )

}