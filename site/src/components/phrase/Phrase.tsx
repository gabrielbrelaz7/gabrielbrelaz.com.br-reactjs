import "../phrase/Phrase.css";
import quote from '../../images/homepage/quote.png';
import mouse from '../../images/homepage/mouse.png';

export const Phrase = () => {

    return (
        <div>
            <section className="ubutia-quote section bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <img className="quote" src={quote} />
                            <p>
                                A quem muito foi dado, muito será exigido; e a quem muito foi confiado, muito
                                mais será pedido.
                            </p>
                            <p className="author">Jesus Cristo</p>
                            <img src={mouse} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};