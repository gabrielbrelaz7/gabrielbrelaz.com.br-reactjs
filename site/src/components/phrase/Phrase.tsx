import "../phrase/Phrase.css";

export const Phrase = () => {

    return (
        <div>
            <section className="ubutia-quote section bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <img className="quote" src="assets/images/homepage/quote.png"></img>
                            <p>
                                A quem muito foi dado, muito será exigido; e a quem muito foi confiado, muito
                                mais será pedido.
                            </p>
                            <p className="author">Jesus Cristo</p>
                            <img src="assets/images/homepage/mouse.png"></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};