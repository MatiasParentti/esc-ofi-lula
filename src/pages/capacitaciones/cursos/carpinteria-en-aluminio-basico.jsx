import Layout from "@/components/layout"
import Link from "next/link"
import Image from "next/image"

export default function primerPost({ data }) {


    return (

        <Layout share title={`Escuela de Oficios | Carpintera/o en Aluminio Básico`} description={`Carpintera/o en Aluminio Básico`}>

            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Carpintera/o en Aluminio Básico</h1>
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
                <Image
                    className="img-fluid "
                    src="/img/carp1.jpg"
                    height={5000}
                    width={5000}
                    alt="carp1"
                ></Image>
                <Image
                    className="img-fluid "
                    src="/img/carp2.jpg"
                    height={5000}
                    width={5000}
                    alt="carp2"
                ></Image>
                <Image
                    className="img-fluid "
                    src="/img/carp3.jpg"
                    height={5000}
                    width={5000}
                    alt="carp3"
                ></Image>

                <div className="card-body text-center">

                    <Link target="_blank" className="btn py-3 px-5  animated slideInLeft" href="https://forms.gle/DMA2D8QZ8FWmRCFz8">inscribite</Link>
                </div>
            </div>


        </Layout>

    )

}
