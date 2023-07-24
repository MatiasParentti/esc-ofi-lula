import Layout from "@/components/layout"
import Header from "@/components/header";
import CardNoticia from "@/components/CardNoticia";
//import Noticia from '../../models/Noticia';
//import conectarDB from "@/lib/dbConnect";

export default function Noticias() {

    return (

        <Layout title='Escuela de Oficios | Noticias' description='Novedades'>

            <Header title='Noticias'></Header>
            <CardNoticia key={'nuevos-cursos-en-septiembre-2023'} _id={'nuevos-cursos-en-septiembre-2023'} title={'Cursos de septiembre 2023'} copete={'Se encuentra abierta la inscripción de dos cursos que inician en septiembre del presente año, no te quedes sin vacante.'} body={'body'} important={'24 Julio, 2023. 18:22 hrs'}></CardNoticia>
            <CardNoticia key={'acto-de-inaguracion-comienzo-de-cursos'} _id={'acto-de-inaguracion-comienzo-de-cursos'} title={'Acto de inaguracion y comienzo de cursos'} copete={'Este martes 4 de julio se realizo el Acto de inicio de cursada e inauguración de la Escuela Comunitaria de Oficios Inacio Lula Da Silva ubicada en el barrio de Marilo, Trujui, Moreno.'} body={'body'} important={'6 Julio, 2023. 23:38'}></CardNoticia>
            <CardNoticia key={'nuevos-cursos-en-julio-2023'} _id={'nuevos-cursos-en-julio-2023'} title={'Nuevos cursos en julio 2023'} copete={'Se encuentra abierta la inscripción de tres cursos que inician en julio del presente año, no te quedes sin vacante.'} body={'body'} important={'6 Junio, 2023. 12:14 hrs'}></CardNoticia>
        </Layout>

    )

}


/** 
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
*/