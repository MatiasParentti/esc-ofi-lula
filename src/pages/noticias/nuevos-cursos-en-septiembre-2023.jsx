import Layout from "@/components/layout"
import Image from "next/image"

export default function Test3() {


    return (

        <Layout share title={`Escuela de Oficios | Nuevos cursos en septiembre 2023`} description={`${'Se encuentra abierta la inscripción de dos cursos que inician en septiembre del presente año, no te quedes sin vacante.'}`}>

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
                <div className="pt">
                    <h1 className="mt-5">{'Cursos de septiembre 2023'}</h1>
                    <div className="hr"></div>
                    <div className="mt-5">
                        <h6>{'Comenzamos la inscripción de los cursos que comenzarán en septiembre. Los mismos son  gratuitos,  mixtos  y están destinados a mayores de 18 años.'}</h6>
                        <br></br>
                        <Image
                            className="img-fluid "
                            src={'/img/d.jpeg'}
                            height={500}
                            width={500}
                            alt="banner"
                        ></Image>

                        <br></br>
                        <br></br>

                        <br></br>
                    
                        <p className="p-j">En esta oportunidad se dictarán los cursos de Operador de Máquina Overlock Industrial y Soldador Básico y se entregarán certificados de aprobación emitidos de manera conjunta y en convenio con el Ministerio de Trabajo, Empleo y Seguridad Social de la Nación. 
                        </p>
                        <p className="p-j">Al finalizar la formación del curso de Operador de Maquina Overlock Industrial  las y los estudiantes  desarrollarán  capacidades que les permitan:</p>
                        <p className="p-jj">➤ Organizar el espacio de trabajo para iniciar el proceso de confección de acuerdo a las normas del establecimiento y a los requerimientos de producción, siguiendo las especificaciones de la ficha técnica o prototipo, preservando la higiene y la seguridad laboral.
</p>
                        <p className="p-jj">➤ Desarrollar habilidades en el armado de prendas de indumentaria según el proceso de confección preservando la seguridad e higiene laboral propia y de terceros.

                        </p>
                        <p className="p-jj">➤ Desarrollar habilidades para el sobrehilado de piezas de indumentaria según proceso de confección preservando la seguridad e higiene laboral propia y de terceros.

                        </p>
                        <p className="p-j">Al finalizar el curso de Soldador Básico las y los participantes habrán desarrollado las capacidades necesarias para:


                        </p>
                        <p className="p-jj">➤ Soldar materiales diversos utilizando equipos de soldadura eléctrica por arco voltaico y MIG/MAG aplicadas a elementos de acero de bajo contenido en carbono, atendiendo a las especificaciones de las órdenes de trabajo y planos de fabricación, así como respetando los procedimientos y normas de seguridad y calidad.



                        </p>
                        <br/>

                        <h6 className="p-j">Se dictarán en las siguientes Sedes, días y horarios
</h6>
<br/>
<p className="p-j">
Operador de Maquina Overlock Industrial 
</p>
<p className="p-jj">
🔘 Sede: Bermejo 731, Fco. Alvarez, Moreno
</p>
<p className="p-jj">
🔘 Días y horarios: Lunes y Jueves de 13 a 17 hs
</p>

<p className="p-j">
Soldador Básico

</p>
<p className="p-jj">
🔘 Sede. Lincoln 6877, Trujui, Moreno 

</p>
<p className="p-jj">
🔘 Días y horarios: Miércoles y Viernes de 08 a 12 hs

</p>
<br/>
<h6 className="p-j">
Sede Alvarez
</h6>
<br/>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13129.829378292005!2d-58.8602554!3d-34.6431512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc93e7ded986c7%3A0xe383a860a058597b!2sEscuela%20de%20Oficios%20%22Ignacio%20Lula%20DaSilva%22!5e0!3m2!1ses-419!2sar!4v1677524601525!5m2!1ses-419!2sar"
                                frameborder="0" style={{ minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false"
                                tabIndex="0" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <br></br>
   <br></br>                             
<h6 className="p-j">
Sede Marilo

</h6>
<br/>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.2840163868004!2d-58.73114223034679!3d-34.60810567931903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfc7ba4ed7e9%3A0x817ffe8fd3e21d11!2sSede%20Marilo%20de%20Escuela%20de%20Oficios%20Inacio%20Lula%20Da%20Silva!5e0!3m2!1ses-419!2sar!4v1686079771726!5m2!1ses-419!2sar"  frameorder="0" style={{ minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false"
                            tabIndex="0" referrerPolicy="no-referrer-when-downgrade"></iframe>



<br/>
<br/>
                        <p className="card-text"><small className="text-muted">{'24 Septiembre, 2023. 18:22 hrs'}</small></p>




                    </div>


                </div>


            </div>


        </Layout>

    )

}