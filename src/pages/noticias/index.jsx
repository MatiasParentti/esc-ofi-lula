import Layout from "@/components/layout"
import Link from "next/link";
import Header from "@/components/header";

export default function Noticias({ data }) {


    return (

        <Layout title='Esc-Ofi | Noticias' description='Novedades'>


            <Header title='Noticias'></Header>

            <div className="container">

                <br></br>
                {data.map(({ id, title, body }) => (

                    <div key={id} className="card-noticia card mb-3">
                        <div className="card-body">
                            <h5 className="card-title"> <Link href={`/noticias/${id}`}>{id} - {title}</Link></h5>
                            <p className="card-text">{body}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>



                ))}
            </div>





        </Layout>

    )

}


export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error);
    }
}