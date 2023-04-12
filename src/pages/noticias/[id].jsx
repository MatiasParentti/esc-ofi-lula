import Layout from "@/components/layout"
import Noticia from '../../models/Noticia';
import conectarDB from "@/lib/dbConnect";
import Image
    from "next/image";

export default function primerPost({ data }) {




    return (

        <Layout share title='Esc-Ofi | Noticias' description='Noticias'>

            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown"></h1>
                            <nav aria-label="breadcrumb">
                                <br></br>
                                <br></br>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

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



        </Layout>

    )

}

export async function getStaticPaths() {
    try {
        await conectarDB();
        const data = await Noticia.find({});
        const paths = data.map(({ _id }) => ({ params: { id: `${_id}` } }))
        return {
            paths,
            fallback: false
        }

    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        await conectarDB();
        const res = await Noticia.find({});
        const noticias = res.map((doc) => {
            const noticia = doc.toObject();
            noticia._id = `${noticia._id}`;
            return noticia;
        });
        const data = noticias.find(element => element._id == params.id);
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error);
    }
}



