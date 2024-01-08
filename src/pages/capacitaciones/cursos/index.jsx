import Layout from "@/components/layout"
import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"

export default function Cursos() {


    return (

        <Layout share title='Escuela de Oficios | Cursos' description='cursos'>


            <Header title='Cursos'></Header>


            <div  className="container-xxl py-5 category">

            <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">

<div className="alert alert-info" role="alert">
    Inscripciones abiertas
</div>


</div>

                <div className="container">
                  

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2 className="card-title">OPERADOR DE MAQUINA INDUSTRIAL RECTA</h2>
                        </div>
                        <Image
                    className="img-fluid "
                    src="/img/recta.jpg"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="carp1"
                ></Image>

                        <div className="card-body text-center">

                            <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/qud6fyg8Jqd8pQ4T6">inscribite</Link>
                            <Link className="btn py-3 px-5  animated slideInLeft" href="/capacitaciones/cursos/operador-de-maquina-industrial-recta">+info</Link>

                        </div>
                    </div>

                    <div className="card mb-3 mt-5">
                        <div className="card-body">
                            <h2 className="card-title">SOLDADOR BASICO
                            </h2>
                        </div>
                        <Image
                    className="img-fluid "
                    src="/img/soldadorr.jpg"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="carp1"
                ></Image>
                        <div className="card-body text-center">
                            <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/qud6fyg8Jqd8pQ4T6">inscribite</Link>
                            <Link className="btn py-3 px-5  animated slideInLeft" href="/capacitaciones/cursos/soldador-basico">+info</Link>
                        </div>
                    </div>

                    <div className="card mb-3 mt-5">
                        <div className="card-body">
                            <h2 className="card-title">AUXILIAR EN PRODUCCIÓN DE HORMIGONADOS 
                            </h2>
                        </div>
                        <Image
                    className="img-fluid "
                    src="/img/hormigonados.jpg"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="carp1"
                ></Image>
                        <div className="card-body text-center">
                            <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/qud6fyg8Jqd8pQ4T6">inscribite</Link>
                            <Link className="btn py-3 px-5  animated slideInLeft" href="/capacitaciones/cursos/auxiliar-en-produccion-de-hormigonados">+info</Link>
                        </div>
                    </div>

                </div>
            </div>


        </Layout>

    )

}

