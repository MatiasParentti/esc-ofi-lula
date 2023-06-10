
import Image from "next/image"
export default function Logos() {


    return (

        <div>
            <div className="row g-4 mt-5">
                <div className="col-lg-2 col-sm-3" >
                    <div className="text-center pt-3">
                        <div className="p-4">
                            <Image
                                className="img-fluid "
                                src="/img/logolula.png"
                                height={150}
                                width={150}
                                alt="banner"
                            ></Image>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-3" >
                    <div className="text-center pt-3">
                        <div className="p-4">
                            <Image
                                className="img-fluid "
                                src="/img/LOGO ASOC CIVIL KASA-fotor-bg-remover-20230606131352_adobe_express.svg"
                                height={150}
                                width={150}
                                alt="banner"
                            ></Image>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-3 " >
                    <div className="text-center pt-3">
                        <div className="p-4">

                            <Image
                                className="img-fluid "
                                src="/img/LOGO COOPERATIVA JDP_adobe_express.svg"
                                height={150}
                                width={150}
                                alt="banner"
                            ></Image>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6" >
                    <div className="text-center pt-5">
                        <div className="p-6">
                            <Image
                                className="img-fluid"
                                src="/img/FOMENTAR EMPLEO LOGO.jpg"
                                height={300}
                                width={300}
                                alt="banner"
                            ></Image>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3 " >
                    <div className="text-center pt-5">
                        <div className="p-6">
                            <Image
                                className="img-fluid "
                                src="/img/MINISTERIO DE TRABAJO LOGO.jpg"
                                height={300}
                                width={300}
                                alt="banner"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}