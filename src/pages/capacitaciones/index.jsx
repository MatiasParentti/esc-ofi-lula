import Layout from "@/components/layout"
import Link from "next/link"
import Header from "@/components/header"


export default function Index() {




    return (

        <Layout share title='Escuela de Oficios | Inscripcion' description='capacitaciones'>

            <Header title='Cursos y Talleres'></Header>

            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">

                            <div className="col-lg-6 col-sm-6 animated flipInX">

                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-graduation-cap service-i mb-4 "></i>
                                        <h5 className="mb-3 ">Talleres</h5>
                                        <p>resumen de talleres</p>
                                        <Link className="btn  py-2 px-lg-4" href="/capacitaciones/talleres" >inscribite</Link>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-6 col-sm-6 animated flipInX">

                                <div className="service-item text-center pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-graduation-cap service-i mb-4 "></i>
                                        <h5 className="mb-3 ">Cursos</h5>
                                        <p>resumen de noticias</p>
                                        <Link className="btn  py-2 px-lg-4" href="/capacitaciones/cursos" >inscribite</Link>

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

