import Layout from "@/components/layout"
import Link from "next/link"
import Header from "@/components/header"

export default function Cursos() {


    return (

        <Layout share title='Esc-Ofi | Cursos' description='cursos'>


            <Header title='Cursos'></Header>


            <div className="container-xxl py-5 category">



                <div className="container">
                    <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">


                        <div className="alert alert-info" role="alert">
                            Abierta la Inscripción
                        </div>
                    </div>


                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="card-title">Carpintera/o en Aluminio Básico</h2>
                        </div>
                        <img src="/img/carpintero.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">

                            <Link target="_blank" className="btn py-2 px-lg-4  animated slideInLeft" href="https://forms.gle/DMA2D8QZ8FWmRCFz8">inscribite</Link>
                        </div>
                    </div>

                    <div className="card mb-3 mt-5">
                        <div className="card-body">
                            <h2 className="card-title">Auxiliar en Instalaciones Sanitarias y de Gas -
                                Armador de hierros para estructuras de Hormigón Armado
                            </h2>
                        </div>
                        <img src="/img/marilo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <Link target="_blank" className="btn py-2 px-lg-4  animated slideInLeft" href="https://forms.gle/DMA2D8QZ8FWmRCFz8">inscribite</Link>
                        </div>
                    </div>

                    

                </div>
            </div>


        </Layout>

    )

}

