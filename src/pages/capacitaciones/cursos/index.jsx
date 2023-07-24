import Layout from "@/components/layout"
import Link from "next/link"
import Header from "@/components/header"

export default function Cursos() {


    return (

        <Layout share title='Escuela de Oficios | Cursos' description='cursos'>


            <Header title='Cursos'></Header>


            <div className="container-xxl py-5 category">

                <div className="container">
                    <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">

                        <div className="alert alert-info" role="alert">
                            Inscripciones abiertas | inicio de cursada Septiembre 2023
                        </div>
                    </div>


                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="card-title">SOLDADOR BÁSICO</h2>
                        </div>
                        <img src="/img/soldador.jpg" className="card-img-top" alt="..." />

                        <div className="card-body text-center">

                        <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/5SgFEnRrCgfd5kL16">inscribite</Link>
                            <Link  className="btn py-3 px-5  animated slideInLeft" href="/capacitaciones/cursos/soldador-basico">+info</Link>
                           
                        </div>
                    </div>

                    <div className="card mb-3 mt-5">
                        <div className="card-body">
                            <h2 className="card-title">OPERADOR/A DE MÁQUINA INDUSTRIAL OVERLOCK
                            </h2>
                        </div>
                        <img src="/img/overlock.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/5SgFEnRrCgfd5kL16">inscribite</Link>
                            <Link  className="btn py-3 px-5  animated slideInLeft" href="/capacitaciones/cursos/operador-de-maquina-industrial-overlock">+info</Link>
                        </div>
                    </div>


                </div>
            </div>


        </Layout>

    )

}

