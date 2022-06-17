import "../what-do/WhatDo.css";

export const WhatDo = () => {

    return (
        <div>
            <section className="purpose section">
                <div className="container">
                    <h2 className="title">O QUE EU FAÇO?</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <div className="card-icon">
                                        <span className="graphic-design" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="ubutia-card-content">
                                    <h5>Web Design</h5>
                                    <p>
                                        Designer, layout e identidade visual para web
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <div className="card-icon">
                                        <span className="webdevelopment" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="ubutia-card-content">
                                    <h5>Front-end</h5>
                                    <p>
                                        Programação web de páginas interativas através de design pré-estabelecido.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <div className="card-icon">
                                        <span className="printing" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="ubutia-card-content">
                                    <h5>Back-end</h5>
                                    <p>
                                        Banco de dados, api's e programação de regras de negócios com sistemas dinâmicos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};