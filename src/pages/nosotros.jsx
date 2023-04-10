
import Header from "@/components/header"
import Layout from "@/components/layout"


export default function Nosotros() {


    return (

        <Layout share title='Esc-Ofi | Nosotros' description='Sobre Nosotros'>


            <Header title='Nosotros'></Header>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100 animated fadeIn" src="img/about.jpg" alt="" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start service-i  pe-3">Nosotros</h6>
                            <h1 className="mb-4">Bienvenidos</h1>
                            <p className="mb-4">etc.</p>
                            <p className="mb-4">etc</p>

                        </div>




                    </div>
                </div>
            </div>

        </Layout>

    )

}