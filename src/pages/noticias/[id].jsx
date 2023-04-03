import Layout from "@/components/layout"

export default function primerPost({ data }) {


    return (

        <Layout title='Esc-Ofi | Noticias' description='Noticias'>

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
                    <h1 className="mt-5">{data.id} - {data.title}</h1>
                    <div className="mt-5 container">
                        <p>{data.body}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <div className="hr"></div>
                    </div>


                </div>
            </div>



        </Layout>

    )

}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } }))
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
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
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

