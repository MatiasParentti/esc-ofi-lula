import Link
    from "next/link"
import Image from "next/image"
export default function NavBar() {


    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light  p-0">

                <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">

                    <Image

                        src="/img/favicon.ico"
                        height={70}
                        width={70}
                        alt="EscOfi"

                    ></Image>


                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link className="nav-item nav-link" href="/nosotros">
                            <div>Nosotr@s</div>
                        </Link>
                        <Link className="nav-item nav-link" href="/capacitaciones">
                            <div>Inscripcion</div>
                        </Link>
                        <Link className="nav-item nav-link" href="/contacto">
                            <div >Contacto</div>
                        </Link>
                    </div>
                </div>
            </nav>


        </div>

    )

}