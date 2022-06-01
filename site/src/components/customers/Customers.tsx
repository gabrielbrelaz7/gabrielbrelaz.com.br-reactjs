import "../customers/Customers.css";

export const Customers = () => {

    return (
        <div>

            <section id="team" className="team section">
                <div className="container">
                    <h2 className="title">CLIENTES ATENDIDOS</h2>
                    <div className="row">

                        {/*
                <!-- ESTAÇÃO DOS SÍTIOS -->
                */
                        }

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/8.jpg"></img>
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

                        {/*
                <!-- ADD TECH -->
                */
                        }

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/9.jpg"></img>
                                </div>

                                <div className="ubutia-card-content">

                                    <p>
                                        Desenvolvimento e web design com Wordpress
                                    </p>

                                </div>
                                <div>
                                    <a className="btn ubutia-btn small-btn" href="../addtech.html">VEJA MAIS</a>
                                </div>
                            </div>
                        </div>

                        {/*
                <!-- APSA CONDOMÍNIO DIGITAL -->
                */
                        }

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/10.jpg"></img>
                                </div>
                                <div className="ubutia-card-content">

                                    <p>
                                        Desenvolvimento web front-end com Angular
                                    </p>

                                </div>
                            </div>
                            <div>
                                <a className="btn ubutia-btn small-btn" href="../apsa.html">VEJA MAIS</a>
                            </div>
                        </div>

                        {/*
                <!-- SOLARIZE -->
                */
                        }

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/12.jpg"></img>
                                </div>
                                <div className="ubutia-card-content">

                                    <p>
                                        Desenvolvimento fullstack com framework PHP
                                    </p>

                                </div>
                            </div>
                            <div>
                                <a className="btn ubutia-btn small-btn" href="../solarize.html">VEJA MAIS</a>
                            </div>
                        </div>

                        {/*
                    <!-- CRIANDO HISTÓRIAS -->
                    */
                        }

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/13.jpg"></img>
                                </div>
                                <div className="ubutia-card-content">

                                    <p>
                                        Desenvolvimento fullstack com Joomla, Angular e Laravel.
                                    </p>

                                </div>
                            </div>
                            <div>
                                <a className="btn ubutia-btn small-btn" href="../criandohistorias.html">VEJA MAIS</a>
                            </div>
                        </div>

                        {/*
                        <!-- NÉSTLE PURINA -->
                        */
                        }

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/14.jpg"></img>
                                </div>
                                <div className="ubutia-card-content">

                                    <p>
                                        Suporte técnico com desenvolvimento web front-end.
                                    </p>

                                </div>
                            </div>
                            <div>
                                <a className="btn ubutia-btn small-btn" href="../purina.html">VEJA MAIS</a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src="assets/images/homepage/getussp.png"></img>
                                </div>
                                <div className="ubutia-card-content">

                                    <p>
                                        Deploy via SSH em servidor linux para sistemas feitos em Laravel, PHP e MySQL.
                                    </p>

                                </div>
                            </div>
                            <div>
                                <a className="btn ubutia-btn small-btn" href="../getussp.html">VEJA MAIS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};