
import Footer from "./footer";
import NavBar from "./navbar";
import Head from "next/head";
import BtnUp from "@/components/btnUp";
import Compartir from "./compartir";

export default function Layout({ children, title, description, share }) {


    return (

        <>

            <Head>
                <title>{title}</title>
                <link rel="icon" href="/img/favicon.ico" />
                <meta name="description" content={description}  ></meta>
            </Head>

            <NavBar></NavBar>

            {children}

           
            <BtnUp></BtnUp>

            {share ? (
                <>
                    <Compartir></Compartir>
                </>
            ) : (
                <>
                   
                </>
            )}

            <Footer></Footer>
        </>

    )

}