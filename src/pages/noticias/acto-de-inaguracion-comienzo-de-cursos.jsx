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
                <div className="container">
                    <h1 className="mt-5">{'Acto de inaguracion y comienzo de cursos'}</h1>
                    <div className="hr"></div>
                    <div className="mt-5 container">
                        <h6>{'Este martes 4 de julio se realizo el Acto de inicio de cursada e inauguración de la Escuela Comunitaria de Oficios Inacio Lula Da Silva ubicada en el barrio de Marilo, Trujui, Moreno.'}</h6>
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

                        <br></br>
                        <p className="p-j">Este martes 4 de julio se realizo el Acto de inicio de cursada e inauguración de la Escuela Comunitaria de Oficios Inacio Lula Da Silva ubicada en el barrio de Marilo, Trujui, Moreno.
</p>
                        <p>Contamos con la visita de compañe@s y vecin@s de la comunidad de Marilo. 
                        </p>
                        <p className="p-j">Los cursos que comenzaron son Armador de Hierros para Estructuras de Hormigon Armado y Auxiliar en Instalaciones  Sanitarias y de Gas en Marilo y Carpintería en Aluminio en Francisco Alvarez.</p>
                        <p className="p-j">La Escuela de Oficios brinda estos cursos en convenio con el Ministerio de Trabajo, Empleo y Seguridad Social de la Nación, con certificación avalada. 
</p>
                        <p className="p-j">Estamos felices de compartir estos momentos y de seguir impulsando la formación en oficios.

                        </p>

                        <p className="card-text"><small className="text-muted">{'6 Junio, 2023. 12:14 hrs'}</small></p>




                    </div>


                </div>


            </div>


            <div className="container-xxl py-5 category">
                        <div className="container">

                            <div className="row g-3">
                                <div className="col-lg-7 col-md-6">
                                    <div className="row g-3">
                                        <div className="col-lg-12 col-md-12 wow zoomIn" >
                                            <Link className="position-relative d-block overflow-hidden" href="/">

                                                <Image
                                                    className="img-fluid"
                                                    src="/img/ina2.jpg"
                                                    height={5000}
                                                    width={5000}
                                                    alt="d"
                                                ></Image>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 col-md-12 wow zoomIn">
                                            <Link className="position-relative d-block overflow-hidden" href="/">
                                                <Image
                                                    className="img-fluid"
                                                    src="/img/ina1.jpg"
                                                    height={5000}
                                                    width={5000}
                                                    alt="c"
                                                ></Image>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 col-md-12 wow zoomIn" >
                                            <Link className="position-relative d-block overflow-hidden" href="/">
                                                <Image
                                                    className="img-fluid"
                                                    src="/img/ina3.jpg"
                                                    height={5000}
                                                    width={5000}
                                                    alt="b"

                                                ></Image>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 wow zoomIn" style={{ minHeight: '350px' }} >
                                    <Link className="position-relative d-block h-100 overflow-hidden" href="/">
                                        <Image
                                            className="img-fluid position-absolute w-100 h-100"
                                            src="/img/ina5.jpg"
                                            height={5000}
                                            width={5000}
                                            alt="a"
                                            style={{ objectFit: 'cover' }}
                                        ></Image>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

        </Layout>

    )

}