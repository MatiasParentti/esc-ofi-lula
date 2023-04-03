import Image from "next/image"

export default function Banner() {


    return (

        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <Image
                        className="img-fluid"
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






