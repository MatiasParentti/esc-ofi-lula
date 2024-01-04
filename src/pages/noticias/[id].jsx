import Layout from "@/components/layout"
//import Noticia from '../../models/Noticia';
//import conectarDB from "@/lib/dbConnect";
import LayotutNoticia from "@/components/noticia";

export default function primerPost({ data }) {


    return (

        <Layout share title={`Escuela de Oficios | ${data.title}`} description={`${data.copete}`}>

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

            <LayotutNoticia data={data}></LayotutNoticia>



        </Layout>

    )

}
/**
 * 

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

 * 
 */

