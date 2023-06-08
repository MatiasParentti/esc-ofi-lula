import Layout from "@/components/layout"
import Header from "@/components/header";
import CardNoticia from "@/components/CardNoticia";
import Noticia from '../../models/Noticia';
import conectarDB from "@/lib/dbConnect";

export default function Noticias({ data, notes, noticias }) {




    return (

        <Layout title='Esc-Ofi | Noticias' description='Novedades'>


            <Header title='Noticias'></Header>

            {

                noticias.map(({ _id, title, copete, body, important }) => (

                <CardNoticia key={_id} _id={_id} title={title} copete={copete} body={body} important={important}></CardNoticia>
            )) 
            }
   
        </Layout>

    )

}



export async function getServerSideProps() {
    try {
        await conectarDB();
        const res = await Noticia.find({});
        const noticias = res.map((doc) => {
            const noticia = doc.toObject();
            noticia._id = `${noticia._id}`;
            return noticia;
        });
        return { props: { noticias } };
    } catch (error) {
        console.log(error);
    }
}
