import Image from "next/image"
import Link from "next/link"
export default function Banner() {


    return (

        <div>
            <div className="container-xxl py-5">


                <div className="container">

                    <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">

                        <div className="alert alert-info" role="alert">

                            <h6> Acompaña con tu firma el reconocimiento de la Escuela de Oficios Inacio Lula Da Silva para su funcionamiento como Centro de Formación Profesional de la Provincia de Buenos Aires</h6>
                            <div className="mt-2">
                             
                                <a className="btn" target="_blank" href="https://forms.gle/6aky3nSKs6GPNo8D7">Firma</a>
                            </div>
                        </div>
                    </div>
                    <Image
                        className="img-fluid "
                        src="/img/banner.jpg"
                        height={5000}
                        width={5000}
                        alt="banner"
                    ></Image>
                </div>
            </div>

        </div>

    )

}






