import "../customers/Customers.css";
import customer from "../../images/homepage/8.jpg";

export const Customers = () => {

    return (
        <div>

            <section id="team" className="team section">
                <div className="container">
                    <h2 className="title">CLIENTES ATENDIDOS</h2>
                    <div className="row">

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src={customer} />
                                </div>

                                <div className="ubutia-card-content">

                                    <p>
                                        Desenvolvimento e web design com Wordpress
                                    </p>

                                </div>

                                <div>
                                    <a className="btn ubutia-btn small-btn" href="../estacaodossitios.html">VEJA MAIS</a>
                                </div>
                            </div>
                        </div>

                 
                    </div>
                </div>
            </section>

        </div>
    );
};