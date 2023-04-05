import { useState } from "react"
import { useEffect } from "react";
export default function Compartir() {


    const [url, setUrl] = useState('');



    useEffect(() => {

        return () => {
            setUrl(window.location.href)
            console.log(window.location.href)
        }

    }, [])


    return (



        <div className="container">

            <div className="section-actions is_area social-share">

                <div className="hr"></div>
                <p >Compartir en redes sociales</p>
                <ul className="list-inline">
                    <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}><i className="fa-3x fab fa-facebook service-i"></i></a></li>
                    <li><a href={`https://twitter.com/intent/tweet?text=Novedades%20de%20la%20escuela%20de%20oficios%20&url=${url}`}><i className="fab fa-twitter fa-3x  service-i"></i></a></li>
                    {/*       <li><a href="#"><i className="fab fa-3x fa-google-plus service-i"></i></a></li> */}
                    <li><a href={`https://api.whatsapp.com/send?text=${url}`}><i className="fa-3x fab fa-whatsapp service-i"></i></a></li>

                </ul>
            </div>

        </div>

    )

}


