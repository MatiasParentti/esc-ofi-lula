import Layout from "@/components/layout"
import Link from "next/link"
import Header from "@/components/header"

export default function Talleres() {


    return (

        <Layout share title='Escuela de Oficios | Talleres' description='talleres'>

<Header title='Talleres'></Header>

            <div className="container-xxl py-5 category">
        <div className="container mt-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              
                <h1 className="mb-5"></h1>
                <div className="alert alert-info" role="alert">
                  Proximamente novedades
                </div>
            </div>
            
        </div>

     
    </div>

         
        </Layout>

    )

}
