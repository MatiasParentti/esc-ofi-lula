


export default function Header({ title }) {


    return (




        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 text-white animated slideInDown">{title}</h1>

                    </div>
                </div>
            </div>
        </div>





    )

}