
import Link from "next/link"

export default function CardNoticia({ _id, title,copete, body, important }) {


    return (

        <div className="container">
            <br></br>
                <div key={_id} className="card-noticia card mb-3">
                    <div className="card-body">
                        <h5 className="card-title"><Link href={`/noticias/${_id}`}>{title}</Link></h5>
                        <p className="card-text">{copete}</p>
                        <p className="card-text"><small className="text-muted">{important}</small></p>
                    </div>
                </div>

        </div>

    )

}

