import Link from "next/link"


export default function Footer() {


    return (

        <div>
            <div className="container-fluid  text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contacto</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Bermejo 731, Francisco Alvarez, Moreno</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>011 2349-9535</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>escueladeoficios.luladasilva2@gmail.com</p>
                        <div className="d-flex pt-2">
                     
                            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.facebook.com/Escuela-de-Oficios-In%C3%A1cio-Lula-da-Silva-104201234553498/?ref=page_internal"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" target="_blank" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" target="_blank" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link className="border-bottom" href="#">Escuela de oficios</Link>, All Right Reserved.


                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">

                                    <Link href='/'>Inicio</Link>
                                    <Link href="/nosotros">Nosotros</Link>
                                    <Link href="/contacto">Contacto</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

