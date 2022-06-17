import "../customers/Customers.css";
import customer from "../../images/homepage/8.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Customers = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('/api/customers')
        .then(res => res.json())
        .then(json => setCustomers(json.customers));
    }, []);

    return (
        <div>

            <section id="team" className="team section">
                <div className="container">
                    <h2 className="title">CLIENTES ATENDIDOS</h2>
                    <div className="row">

                    {customers.map((customer, index) => (
                        <div className="col-sm-4">
                            <div className="ubutia-card">
                                <div className="ubutia-card-header">
                                    <img className="img-responsive" src={require(`../../images/homepage/${customer['image']}`)} />
                                </div>

                                <div>
                                    <h5>
                                        {customer['name']}
                                    </h5>
                                </div>

                                <div className="ubutia-card-content">

                                    <p>
                                        {customer['description']}
                                    </p>

                                </div>

                                <div>
                                    <a className="btn ubutia-btn small-btn" href={`/cliente/${customer['id']}`}>VEJA MAIS</a>
                                </div>
                            </div>
                        </div>
                    ))}

                    </div>
                </div>
            </section>
        </div>
    );
};