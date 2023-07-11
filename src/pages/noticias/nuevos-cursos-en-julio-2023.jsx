import Layout from "@/components/layout"
//import Noticia from '../../models/Noticia';
//import conectarDB from "@/lib/dbConnect";
import LayotutNoticia from "@/components/noticia";

export default function Test2() {


    return (

        <Layout share title={`Escuela de Oficios | Nuevos cursos en julio 2023`} description={`${'Se encuentra abierta la inscripción de tres cursos que inician en julio del presente año, no te quedes sin vacante.'}`}>

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

          
            <LayotutNoticia></LayotutNoticia>


        </Layout>

    )

}