import Image from "next/image"

export default function Carrousel() {





    return (

        <div>


            <div id="carouselExampleControls" className="carousel slide container-fluid p-0 mb-5" data-bs-ride="carousel" >

                <div id="carouselExampleControls" data-bs-ride="carousel" className=" carousel-inner owl-carousel header-carousel position-relative">

                    <div className="carousel-item active owl-carousel-item position-relative">
                       
                        <Image
                            className="img-fluid"
                            src={'/img/carousel-1.jpg'}
                            height={5000}
                            width={5000}
                            alt="carousel"
                        ></Image>
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">

                                        <h1 className="display-3 text-white animated slideInDown">Escuela de oficios</h1>
                                        <h4 className="service-i text-uppercase mb-3 animated slideInDown">Inacio Lula Da Silva</h4>
                                        <p className="fs-5 text-white mb-4 pb-2"><i>Solo fracasamos cuando lo dejamos de intentar</i></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 


  <div className="carousel-item  owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/banner.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown"></h5>
                                        <h1 className="display-3 text-white animated slideInDown"></h1>
                                        <p className="fs-5 text-white mb-4 pb-2"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


*/}


                </div>


            </div>




        </div>

    )

}