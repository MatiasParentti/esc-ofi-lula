
import Link
    from "next/link"
import Logos from "./logos"
export default function About() {


   
    return (

        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }} >
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start service-i pe-3">Sobre Nosotr@s</h6>
                            <h1 className="mb-4">Bienvenidos a nuestra Escuela de Oficios</h1>

                            <p className="mb-4">
                            La Escuela Inacio Lula Da Silva es parte de un proyecto político social y educativo de la Asociación Civil Kasa de los Trabajadores. El trabajo colectivo de trabajador@s del Estado junto a trabajador@s que están fuera de la seguridad social fue generando una construcción política barrial que ya lleva más de 20 años en Moreno, Provincia de Buenos Aires, donde se realizan actividades sociales, productivas y educativas. Dentro del ámbito de la educación nos identificamos con la pedagogía crítica latinoamericana siendo esta una de las herramientas fundamentales para la emancipación de l@s trabajador@s.
                            </p>

                            <div className="row gy-2 gx-4 mb-4 ">
                                <div className="col-sm-6">
                                    <p ><Link className="btn" href="/nosotros">+ info</Link></p>
                                </div>

                            </div>



                        </div>
                    </div>
                    <Logos></Logos>
                </div>
            </div>
        </div>

    )

}



