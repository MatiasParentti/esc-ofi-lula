import Layout from "@/components/layout"
import Link from "next/link"



export default function Index() {




    return (

        <Layout share title='Esc-Ofi | Inscripcion' description='capacitaciones'>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Cursos y Talleres</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">

                            <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">

                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-graduation-cap service-i mb-4"></i>
                                        <h5 className="mb-3">Talleres</h5>
                                        <p>resumen de talleres</p>
                                        <Link className="btn  py-2 px-lg-4  animated slideInLeft" href="/capacitaciones/talleres" >inscribite</Link>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">

                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-globe service-i mb-4"></i>
                                        <h5 className="mb-3">Cursos</h5>
                                        <p>resumen de noticias</p>
                                        <Link className="btn  py-2 px-lg-4  animated slideInLeft " href="/capacitaciones/cursos" >inscribite</Link>
                                        
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )

}

