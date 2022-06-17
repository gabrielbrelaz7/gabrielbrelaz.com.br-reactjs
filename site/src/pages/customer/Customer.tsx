import "../customer/Customer.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Customer = {
    id: number;
    name: string;
    description: string;
    logo: string;
    plataformas: string,
    ferramentas: string,
    tecnologias: string,
    images: Array<string>;
}

export const Customer = () => {

    const param = useParams();
    const customerID = param.id;

    const [customer, setCustomer] = useState<Customer>();

    useEffect(() => {
        fetch(`/api/customers/${customerID}`)
        .then(res => res.json())
        .then(json => setCustomer(json.customer));
    }, []);


    function plataformas() {
        if (customer?.plataformas !== null) {
            return(
                <div>
                    <p><strong>Plataforma:</strong> {customer?.plataformas}</p>
                </div>
            )
        } else { return; } 
    }


    function ferramentas() {
        if (customer?.ferramentas !== null) {
            return(
                <div>
                    <p><strong>Ferramentas:</strong> {customer?.ferramentas}</p>
                </div>
            )
        } else { return; } 
    }


    function tecnologias() {
        if (customer?.tecnologias !== null) {
            return(
                <div>
                    <p><strong>Tecnologias:</strong> {customer?.tecnologias}</p>
                </div>
            )
        } else { return; } 
    }
   
    return (
        <div>

        <div className="container">
            <div className="row">

                <div className="body-cliente col-sm-12">

                    <div className="noticia-topo">

                        <h5>
                           {customer?.description}
                        </h5>
                    </div>

                    
                    <hr className="linha-divisoria" />


                    <div className="headings" />

                        <div className="row">

                            <div className="slider-customer">    

                                <Carousel showThumbs={false}>
                                    {customer?.images.map((image, index) => (
                                        <div>
                                            <img src={require(`../../images/${image}`)} />
                                        </div>
                                    ))}    
                                </Carousel>
                                
                            </div>

                        </div>

                            <div className="card-clientes">

                                <div>

                                    <h3>Serviços realizados</h3>
                                        
                                    {plataformas()}
                                    {ferramentas()}
                                    {tecnologias()}
                                    
                                </div>
                            </div>
                </div>

                <hr className="linha-divisoria" />

    </div>
</div>
</div>
            
    );
};