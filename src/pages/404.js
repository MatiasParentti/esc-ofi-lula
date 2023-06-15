import Link from 'next/link'
import Layout from '@/components/layout'
import Header from '@/components/header'


export default function FourOhFour() {
    return <>


        <Layout title='Escuela de Oficio | 404' description='404'>

            <Header title='404'></Header>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary service-i"></i>
                         
                            <h1 className="mb-4">Esta pagina no existe</h1>
                            <p className="mb-4">¡Lo sentimos, la página que estas buscado no existe en nuestro sitio web! ¿Quieres ir a nuestra página de inicio?</p>
                          
                            <Link className="btn btn-primary py-3 px-5" href="/">Volver a Inicio</Link>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>



    </>
}