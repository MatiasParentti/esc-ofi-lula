
import Carrousel from "@/components/carrousel";
import React, { useState, useEffect } from "react";
import Banner from "@/components/banner";
import Service from "@/components/service";
import About from "@/components/about";
import Layout from "@/components/layout";


export default function Index() {

    const [spinner, setSpinner] = useState("show  bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center");

    useEffect(() => {
        const timer = setTimeout(() => {
           
            setSpinner('bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center')
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (

        <Layout title='Esc-Ofi | Inicio' description='Escuela de Oficios Lula Da Silva'>
          
            <div id="spinner" className={spinner}>
                <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            </div>


            <Carrousel></Carrousel>
            <Banner></Banner>
            <Service></Service>
            <About></About>




        </Layout>


    )




}