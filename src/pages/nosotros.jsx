
import Header from "@/components/header"
import Layout from "@/components/layout"
import Link from "next/link"
import Image from "next/image"


export default function Nosotros() {


    return (

        <Layout share title='Escuela de Oficios | Nosotr@s' description='Sobre Nosotr@s'>


            <Header title='Nosotr@s'></Header>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100 animated fadeIn" src="img/about.jpg" alt="" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start service-i  pe-3"></h6>
                            <h2 className="mb-4">Bienvenid@s</h2>
                            <p className="mb-4 p-j">La Escuela Inacio Lula Da Silva es parte de un proyecto político social y educativo de la Asociación Civil Kasa de los Trabajadores. El trabajo colectivo de trabajador@s del Estado junto a trabajador@s que están fuera de la seguridad social fue generando una construcción política barrial que ya lleva más de 20 años en Moreno, Provincia de Buenos Aires, donde se realizan actividades sociales, productivas y educativas. Dentro del ámbito de la educación nos identificamos con la pedagogía crítica latinoamericana siendo esta una de las herramientas fundamentales para la emancipación de l@s trabajador@s.
                            </p>
                            <p className="mb-4 p-j">A partir de la articulación con las experiencias educativas fuimos percibiendo la necesidad de formación en oficios de jóvenes y adultos. Esta necesidad la fuimos canalizando a través de diferentes jornadas y asambleas que nos fueron llevando a la construcción de la Escuela de Oficios con una perspectiva de organización popular. Con este proyecto buscamos la formación de jóvenes y adultas/os, teniendo en cuenta también que aquellos que no estén alfabetizados o que no hayan finalizado sus estudios primarios o secundario tengan en nuestro espacio el lugar para hacerlo y así garantizar una mejor inserción laboral.

</p>

                        </div>
                    </div>
                    <div className="row g-10 mt-5">
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">

                            <h2 className="mb-4">Historia</h2>
                            <p className="mb-4 p-j">
                            En  nuestros comienzos participamos de diferentes experiencias pedagógicas populares. Se llevaron adelante actividades de alfabetización con el Programa YO SÍ PUEDO, apoyo escolar y la creación de un Bachillerato Popular. 

                            </p>
                            <p className="mb-4 p-j">La Asociación Civil Kasa de los Trabajadores en el área de educación, llevó adelante propuestas educativas desde el año 2007 hasta la actualidad en los espacios que se fueron generando en diferentes puntos del partido de Moreno, ya sean clubes de barrio, comedores, merenderos u ollas populares. La cantidad de participantes varía según el momento del año y la demanda, siendo actividades que involucran desde un/a participante o hasta han llegado a formarse grupos de 15 participantes entre niñas/os, jóvenes y adultas/os. Hoy en día contamos con sedes propias en Francisco Alvarez, Trujui y Cuartel V.



                            </p>
                            <p className="mb-4 p-j">Entre los años 2013 al 2015 se realizó la coordinación de diferentes puntos de Fines II en distintos barrios de Moreno, llegando a formar 9 sedes y un total de 27 comisiones de diferentes años. De ese periodo se egresaron más de 300 estudiantes, entre los cuales se encontraban cooperativistas y vecinas/os. En el año 2019 se retomó la articulación con el programa Fines hasta la actualidad. Durante los años 2020 y 2021 se continuó bajo la modalidad virtual debido a la pandemia Covid-19. Con respecto a la educación Primaria de Adultos, se trabajó siendo sede descentralizada del Centro de Adultos nº 705/01 y brindando apoyo escolar desde nuestro espacio con un coordinador de apoyo para l@s adultas/os y jóvenes que allí asistían (durante los años 2015 hasta el año 2017). Además, se trabajó de manera articulada en la formación de cooperativistas en diferentes oficios desde una perspectiva popular de género. Durante el año 2021 se dictaron talleres breves de cuatro a seis encuentros de Carpintería en Aluminio, Plomería, Costura básica, Panificados con Masa Madre y Cuidados de Adulto Mayor.
                           


                            </p>
                            <p className="mb-4 p-j">A partir de febrero de 2022 como Institución se ejecutó el dictado de cursos en el marco de la Línea de Fortalecimiento Institucional del Ministerio de Trabajo Empleo y Seguridad Social de Nación. Se dictaron los cursos de Auxiliar en Instalaciones  Sanitarias y Gas, Albañil en Construcción Tradicional, Soldador por Arco Eléctrico con Proceso GMAW y Carpintería en Aluminio.
                            


                            </p>
                            <p className="mb-4 p-j">En noviembre de 2022 hasta febrero de 2023, dentro de la misma línea mencionada, se han ejecutado los cursos Cuidador/a Domiciliario no Terapéutico de Personas Mayores, Operador de Maquina Industrial Recta, Albañil en Construcción Tradicional y Instalador Electricista Domiciliario. En la cursada de Cuidador Domiciliario se concretó la posibilidad de que un grupo de participantes puedan realizar prácticas profesionalizantes bajo la supervisión de las capacitadoras y del profesional a cargo en el UPA (Unidad de Pronta Atención) de Cuartel V. La experiencia fue muy enriquecedora para su formación, aunque fue limitada a quienes cumplían los requisitos de vacunación contra el Covid-19. Como en la primera oportunidad, los aprobados en su gran mayoría accedió a trabajos relacionados con el rubro en el cual se formaron y mantienen un vínculo con la Escuela de Oficios Inacio Lula Da Silva. En algunos casos, en esta segunda propuesta participaron familiares y recomendados de la cursada anterior.

                           

                            </p>
                            <p className="mb-4 p-j"><b>Capacitación en oficios a partir de ser parte de Programas del Ministerio de Desarrollo Social:</b> L@s compañeras/os cooperativistas, que fueron parte de programas sociales desde el año 2009, fueron aprendiendo y enseñando  oficios para llevar adelante los proyectos colectivos que incluyeron la adquisición de herramientas e insumos. En este caso, muchos cooperativistas que  fueron capacitados luego pasaron a ser capacitadores en cada cooperativa, donde el proceso de aprendizaje se dio mediante la práctica misma del trabajo. Nuevamente la formación se acompañó con espacios de discusión política posicionándonos como trabajadoras/es comprometidos no solo con un proyecto individual sino colectivo, social y político. En este sentido, es destacable las experiencias autogestivas de formación en salud preventiva que se desarrollaron en cada lugar de trabajo, trasladando el aula al espacio mismo del trabajo.

                           



                            </p>
                            <p className="mb-4 p-j">Se logró adquirir un terreno en la localidad Francisco Alvarez y la custodia de un predio de media hectárea en la localidad de Cuartel V. En los mismos se construyeron la Escuela de Oficios Sede Central (Francisco Alvarez) y la Sede Anexo donde se producen todos los productos hormigonados (Cuartel V). La construcción fue llevada a cabo por compañeros y compañeras en todas sus etapas, siendo las mismas procesos de aprendizaje continuo junto a aquellas/os más experimentad@s en las áreas de construcción y carpintería. Por último, en el año 2022 abrimos una nueva Sede en el barrio Marilo (localidad de Trujui) en la cual estamos llevando a cabo una obra de construcción de nuevas aulas para ampliar la oferta de cursos.

                           

                            </p>
                            <p className="mb-4 p-j"><b>Capacitación mediante el IMDEL:</b> Esta modalidad se llevó a cabo durante dos años (2016-2017) en coordinación con el centro de capacitación del IMDEL del Municipio de Moreno donde se capacitó en diferentes niveles de los oficios de panadería y repostería.


                            
                            </p>

                            <p className="mb-4 p-j"><b>Capacitación Hacemos Futuro (2016-2019):</b> Los programas de cooperativas durante este periodo fueron desarticulados, transformando a los cooperativistas en sujetos individuales de derecho, lo cual desarmó la organización colectiva. En nuestro caso resistimos con mucho esfuerzo fortaleciendo la autogestión para sostenerlas. Aun así continuaron con programas de capacitación en los cuales participamos proponiendo nuestros propios docentes. Se desarrollaron capacitaciones en Carpintería en Aluminio, Panaderia y Producción de Productos Hormigonados. Nuevamente durante esta etapa, aún en un contexto de dificultades por los cambios de las políticas públicas, logramos desarrollar estrategias de resistencia para seguir organizándonos en los barrios.


                            
                            </p>





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
                                                    src="/img/d.jpeg"
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
                                                    src="/img/c.jpg"
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
                                                    src="/img/b.jpg"
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
                                            src="/img/a.jpg"
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
                    <div className="row g-10">
                        <div className="col-lg-12 wow fadeInUp mt-2">
                            <h4>Seguinos en nuestras redes</h4>
                            <div className="row gy-2 gx-4 mb-4 mt-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right service-i me-2"></i><Link target="_blank" className="deco-none" href="https://www.instagram.com/escueladeoficios.luladasilva/">Instagram</Link></p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right service-i  me-2"></i><Link target="_blank" className="deco-none" href="https://www.facebook.com/Escuela-de-Oficios-In%C3%A1cio-Lula-da-Silva-104201234553498/?ref=page_internal">Facebook</Link></p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right service-i me-2"></i><Link target="_blank" className="deco-none" href="https://www.youtube.com/@escueladeoficiosluladasilva">Youtube</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>

        </Layout>

    )

}