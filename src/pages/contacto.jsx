import Layout from "@/components/layout"
import Header from "@/components/header";

export default function Contacto() {


    return (

        <Layout share title='Contacto' description='contacto'>

           <Header title='Contacto'></Header>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                       
                        <h1 className="mb-5"></h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>titulo h5</h5>
                            <p className="mb-4">parrafo</p>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:'50px', height:'50px'}}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="service-i">sedes</h5>
                                    <p className="mb-0">1234 etc</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"style={{width:'50px', height:'50px'}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="service-i">celular</h5>
                                    <p className="mb-0">+99999999999</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:'50px', height:'50px'}}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="service-i ">Email</h5>
                                    <p className="mb-0">fjajsdjsadjasd</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">


                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.829378292005!2d-58.8602554!3d-34.6431512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc93e7ded986c7%3A0xe383a860a058597b!2sEscuela%20de%20Oficios%20%22Ignacio%20Lula%20DaSilva%22!5e0!3m2!1ses-419!2sar!4v1677524601525!5m2!1ses-419!2sar"
                                frameborder="0" style={{minHeight:'300px', border:'0'}} allowfullscreen="" aria-hidden="false"
                                tabindex="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>

    )

}

Layout.defaultProps = {
    title: "Esc-Ofi | Contacto",
    description: "Contacto | redes sociales",
};