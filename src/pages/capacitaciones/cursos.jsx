import Layout from "@/components/layout"
import Link from "next/link"

export default function Cursos() {


    return (

        <Layout title='Esc-Ofi | Cursos' description='cursos'>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Cursos</h1>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5 category">



                <div className="container mt-5">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">


                        <div className="alert alert-info" role="alert">
                            Abierta la Inscripción
                        </div>
                    </div>
                    <div className="card mt-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="/img/albañil.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body ">
                                    <h2 className="card-title">Curso de albañil</h2>
                                    <p className="card-text">

                                    </p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Inscripción: a partir del 10/10 al 30/10
                                            Inicio: Noviembre 2022</li>
                                        <li className="list-group-item"> Requisitos: ser mayor de 18 años</li>
                                        <li className="list-group-item"> Documentación requerida: fotocopia de DNI y completar
                                            planilla de inscripción</li>
                                    </ul>
                                    <Link className="btn py-2 px-lg-4  animated slideInLeft" href="/capacitaciones/talleres">inscribite</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </Layout>

    )

}

