import "../contact/Contact.css";

export const Contact = () => {

    return (
        <div>
            <section id="contact" className="contact section">
                    <div className="container">
                        <h2 className="title">Entre em contato</h2>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="ubutia-card">
                                    <div className="ubutia-card-header">
                                        <span className="fa fa-phone" aria-hidden="true"></span>
                                    </div>
                                    <div className="ubutia-card-content">
                                        <h4>CELULAR:</h4>
                                        <h6>
                                            +55 (21) 98322-6474
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="ubutia-card">
                                    <div className="ubutia-card-header">
                                        <span className="fa fa-paper-plane" aria-hidden="true"></span>
                                    </div>
                                    <div className="ubutia-card-content">
                                        <h4>Email</h4>
                                        <h6>
                                            gabrielbrelaz@gmail.com
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="social-icons">
                                    <ul>
                                        <a target="blank" href="https://www.linkedin.com/in/gabrielbrelaz/">
                                            <li>
                                                <span className="ion-social-linkedin"></span></li>
                                        </a>
                                        <a target="blank" href="https://www.youtube.com/user/gabrielbrelaz/videos">
                                            <li>
                                                <span className="ion-social-youtube"></span></li>
                                        </a>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
};