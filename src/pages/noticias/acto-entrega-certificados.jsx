import Layout from "@/components/layout"
import Image from "next/image"
import Link from "next/link"

export default function Test4() {


    return (

        <Layout share title={`Escuela de Oficios | Acto de entrega de certificados en la Sede Marilo `} description={`${'La justicia social, como nosotros la entendemos, no consiste solamente en dar a nuestro pueblo lo material sino también en prepararlo intelectual y espiritualmente.   Juan Domingo Perón'}`}>

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
                    <h1 className="mt-5">{'Acto de entrega de certificados en la Sede Marilo '}</h1>
                    <div className="hr"></div>
                    <div className="mt-5">
                        <p className="alineado"><i>{'La justicia social, como nosotros la entendemos, no consiste solamente en dar a nuestro pueblo lo material sino también en prepararlo intelectual y espiritualmente.'}</i></p>
                        <p className="alineado"><i>{'Juan Domingo Perón'}</i></p>
                        <br></br>
                        <Image
                            className="img-fluid "
                            src={'/img/luisito.jpg'}
                            height={1000}
                            width={600}
                            alt="banner"
                        ></Image>

                        <br></br>
                        <br></br>

                        <br></br>

                        <p className="p-j">El sábado 7 de octubre se realizó en la Sede Marilo de la Escuela de Oficios Inacio Lula Da Silva el Acto de entrega de certificados de los siguientes cursos: Carpintería en Aluminio Básico, Auxiliar en instalaciones Sanitarias y de Gas, Armador de Hierro para estructuras de Hormigón Armado, Instalador electricista domiciliario y Albañil en construcción tradicional.
                        </p>
                        <p className="p-j">Contamos con la grata presencia de la Intendenta de Moreno Mariel Fernandez y la Ministra de Trabajo, Empleo y Seguridad Social de la Nación Kelly Olmos quienes nos compartieron muy lindas palabras para los egresados y la escuela  . El Acto se llevó a cabo con la asistencia de estudiantes, docentes ,  familiares ,  amigos,  amigas , vecinos ,  vecinas ,  compañeros y compañeras de la Organización Libres del Pueblo.  </p>
                        <p className="p-j">Fue una jornada muy emotiva en la cual compartimos números musicales de parte de Juan Carlos Acosta y Ruiz Isabel,   estudiantes del curso de Soldador Básico, que nos compartieron música folklórica, el momento murguero de parte de compañeros y docentes de la Escuela  y el del Acto cierre con la banda Viejo Borgoña a todo rock y blues.
                        </p>




                        <br />



                        <p className="card-text"><small className="text-muted">{'10 Octubre, 2023. 16:22 hrs'}</small></p>


                     
                       



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
                                            src="/img/reconocimiento.jpg"
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
                                            src="/img/publico.jpg"
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
                                            src="/img/banda.jpg"
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
                                    src="/img/estu.jpg"
                                    height={5000}
                                    width={5000}
                                    alt="a"
                                    style={{ objectFit: 'cover' }}
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </div>

                <br />
                <div className="container">

                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" >
                                    <Link className="position-relative d-block overflow-hidden" href="/">
                                        <Image
                                            className="img-fluid"
                                            src="/img/juntos.jpg"
                                            height={5000}
                                            width={5000}
                                            alt="juntos"
                                        ></Image>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn">
                                    <Link className="position-relative d-block overflow-hidden" href="/">
                                        <Image
                                            className="img-fluid"
                                            src="/img/abanderados.jpg"
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
                                            src="/img/ministra.jpg"
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
                                    src="/img/walter.jpg"
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