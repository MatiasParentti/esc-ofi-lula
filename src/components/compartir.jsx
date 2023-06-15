import { useState } from "react"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Compartir() {

    const router = useRouter();

    const [url, setUrl] = useState(router.asPath);
    const [what, setWhat] = useState(`https://api.whatsapp.com/send?text=https://www.escueladeoficiosluladasilva.com.ar${url}`);

    useEffect(() => {
       
        return () => {
              setUrl(router.asPath)
           
        }

    }, [])



    return (



        <div className="container">

            <div className="section-actions is_area social-share">

                <div className="hr"></div>
                <p >Compartir en redes sociales</p>
                <ul className="list-inline">
                    <li><a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.escueladeoficiosluladasilva.com.ar${url}`}><i className="fa-3x fab fa-facebook service-i"></i></a></li>
                    <li><a href={`https://twitter.com/intent/tweet?text=Novedades%20de%20la%20escuela%20de%20oficios%20&url=https://www.escueladeoficiosluladasilva.com.ar${url}`}><i className="fab fa-twitter fa-3x  service-i"></i></a></li>
                    {/*       <li><a href="#"><i className="fab fa-3x fa-google-plus service-i"></i></a></li> */}
                    <li><a href={what}><i className="fa-3x fab fa-whatsapp service-i"></i></a></li>

                </ul>
            </div>

        </div>

    )

}


