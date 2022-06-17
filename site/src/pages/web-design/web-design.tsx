import "../web-design/web-design.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";


type Site = {
    title: string;
    plataforma: string;
    tecnologias: string;
    images: string[]
}


type Logotipo = {
    images: string[];
}


type Ilustracao = {
    title: string;
    images: string[]
}


export const WebDesign = () => {

    const [sites, setSites] = useState<Site[]>([]);

    useEffect(() => {
        fetch(`/api/designs`)
        .then(res => res.json())
        .then(json => setSites(json.designs.sites));
    }, []);


    
    const [logotipos, setLogotipos] = useState<Logotipo[]>([]);

    useEffect(() => {
        fetch(`/api/designs`)
        .then(res => res.json())
        .then(json => setLogotipos(json.designs.logotipos.images));
    }, []);



    const [ilustracoes, setIlustracoes] = useState<Ilustracao[]>([]);

    useEffect(() => {
        fetch(`/api/designs`)
        .then(res => res.json())
        .then(json => setIlustracoes(json.designs.ilustracoes));
    }, []);



    return (
        <div>

        <div className="container">

        
            {sites.map((site) => (

            <div className="row card-clientes">
                <div className="col-sm-8">
                    <Carousel showThumbs={false}>
                        {site.images.map((image, index) => (
                            <div>
                                <img src={require(`../../images/${image}`)} />
                            </div>
                        ))}    
                    </Carousel>
                </div>

                <div className="text-left col-sm-4">

                    <div>
                        <h5>{site.title}</h5>
                    </div>

                    <div><strong>Plataforma:</strong>: {site.plataforma}</div>
                    <div><strong>Tecnologias:</strong> {site.tecnologias}</div>
                
                </div>

                <hr className="linha-divisoria-2" /> 

            </div>

        
            ))}    

        </div>


        <div className="container">

            <div className="row">

            {logotipos.map((logotipo) => (

                <div className="text-left col-sm-4">

                    <div className="col-sm-4">
                        <div className="ubutia-card">
                            <div className="ubutia-card-header-logotipos-logotipos">
                                <img className="img-responsive" src={require(`../../images/${logotipo}`)} />
                            </div>
                            <div className="ubutia-card-content">
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            </div>
        </div>


        <div className="container">

            <div className="container-ilustracao">

            </div>

        </div>

        </div>
            
    );
};