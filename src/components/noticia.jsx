


export default function LayotutNoticia({data}) {


    return (

        <div className="noticia container">
            <div className="container">
                <h1 className="mt-5">{data.title}</h1>
                <div className="hr"></div>
                <div className="mt-5 container">
                    <h6>{data.copete}</h6>
                    <br></br>
                    <img
                        className="img-fluid "
                        src={data.img}
                        height={500}
                        width={500}
                        alt="banner"

                    ></img>

                    <br></br>
                    <br></br>
                    <p>{data.body}</p>
                    <p className="card-text"><small className="text-muted">{data.important}</small></p>

                </div>


            </div>
        </div>


    )

}