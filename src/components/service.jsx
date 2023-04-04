import Link from "next/link"
export default function Service() {


    return (

        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">

                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap service-i mb-4"></i>
                                    <h5 className="mb-3">Talleres y Cursos</h5>
                                    <p>resumen de talleres</p>
                                    <Link className="btn  py-2 px-lg-4  animated slideInLeft " href="/capacitaciones" >Saber mas</Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">

                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe service-i mb-4"></i>
                                    <h5 className="mb-3">Novedades</h5>
                                    <p>resumen de noticias</p>
                                    <Link className="btn  py-2 px-lg-4  animated slideInLeft " href="/noticias" >Saber mas</Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">

                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    
                                    <i className="fa fa-3x fa-home service-i mb-4"></i>
                                    <h5 className="mb-3">Nuestro Lugar</h5>
                                    <p>resumen de nuestro lugar</p>
                                    <Link className="btn  py-2 px-lg-4  animated slideInLeft " href="/nosotros" >Saber mas</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}
