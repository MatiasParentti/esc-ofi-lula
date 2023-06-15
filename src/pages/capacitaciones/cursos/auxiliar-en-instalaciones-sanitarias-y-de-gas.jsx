import Layout from "@/components/layout"
import Link from "next/link"


export default function primerPost({ data }) {


    return (

        <Layout share title={`Escuela de Oficios | Auxiliar en Instalaciones Sanitarias y de Gas`} description={`Auxiliar en Instalaciones Sanitarias y de Gas`}>

            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Auxiliar en Instalaciones Sanitarias y de Gas</h1>
                            <nav aria-label="breadcrumb">
                                <br></br>
                                <br></br>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <h2 className="card-title"></h2>
                </div>
                <img src="/img/aux1.jpg" className="card-img-top" alt="..." />
                <img src="/img/aux2.jpg" className="card-img-top" alt="..." />
                <img src="/img/aux3.jpg" className="card-img-top" alt="..." />

                <div className="card-body text-center">

                    <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/DMA2D8QZ8FWmRCFz8">inscribite</Link>
                </div>
            </div>



        </Layout>

    )

}
