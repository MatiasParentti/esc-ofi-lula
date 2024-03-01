import Layout from "@/components/layout"
import Header from "@/components/header";
import CardNoticia from "@/components/CardNoticia";
//import Noticia from '../../models/Noticia';
//import conectarDB from "@/lib/dbConnect";

export default function Noticias() {

    return (

        <Layout title='Escuela de Oficios | Noticias' description='Novedades'>
            <Header title='Noticias'></Header>
            <CardNoticia key={'apoyanos-con-tu-firma'} _id={'apoyanos-con-tu-firma'} title={'Sumate a la campaña de reconocimiento de la Escuela'} copete={'Nos encontramos en una campaña para lograr que la Escuela de Oficios Inacio Lula Da Silva sea reconocida como un Centro de Formación Profesional de la Provincia de Buenos Aires.'} body={'body'} important={'01 Marzo, 2024. 18:27 hrs'}></CardNoticia>
            <CardNoticia key={'acto-entrega-certificados'} _id={'acto-entrega-certificados'} title={'Acto de entrega de certificados en la Sede Marilo'} copete={'El sábado 7 de octubre se realizó en la Sede Marilo de la Escuela de Oficios Inacio Lula Da Silva el Acto de entrega de certificados.'} body={'body'} important={'10 Octubre, 2023. 16:22 hrs'}></CardNoticia>
            <CardNoticia key={'nuevos-cursos-en-septiembre-2023'} _id={'nuevos-cursos-en-septiembre-2023'} title={'Cursos de septiembre 2023'} copete={'Comenzamos la inscripción de los cursos que comenzarán en septiembre. Los mismos son  gratuitos,  mixtos  y están destinados a mayores de 18 años.'} body={'body'} important={'24 Julio, 2023. 18:22 hrs'}></CardNoticia>
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