import "../skills/Skills.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";


export const Skills = () => {

    const [skillsFrontEnd, setSkillsFrontEnd] = useState([]);
    const [skillsBackEnd, setSkillsBackEnd] = useState([]);
    const [skillsFramework, setSkillsFramework] = useState([]);
    const [skillsPlataforma, setSkillsPlataforma] = useState([]);

    
    useEffect(() => {
        fetch('/api/skills')
        .then(res => res.json())
        .then(json => setSkillsFrontEnd(json.skills.frontend));
    }, []);


    useEffect(() => {
        fetch('/api/skills')
        .then(res => res.json())
        .then(json => setSkillsBackEnd(json.skills.backend));
    }, []);


    useEffect(() => {
        fetch('/api/skills')
        .then(res => res.json())
        .then(json => setSkillsFramework(json.skills.framework));
    }, []);


    useEffect(() => {
        fetch('/api/skills')
        .then(res => res.json())
        .then(json => setSkillsPlataforma(json.skills.plataforma));
    }, []);
    
    return (
        <div>
            <section id="expertise" className="expert">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 bg-img">
                        </div>
                        <div className=" slider col-sm-6">
                            <div className="col-sm-offset-1">   
                                <h2 className="title">HARD SKILLS</h2>
                            </div>


                   
            <Carousel showThumbs={false}>
                <div className="col-sm-offset-1">
                    <h4>Desenvolvimento Front-end</h4>
                    <div className="row">


                    {skillsFrontEnd.map((skillFrontEnd, index) => (
                        <div className="col-sm-3">
                        <img src={require(`../../images/homepage/${skillFrontEnd['image']}`)} />
                        <div>{skillFrontEnd['name']}</div>
                    </div>
                    ))}
                        
                    </div>

                </div>
                <div className="col-sm-offset-1">
                    <h4>Desenvolvimento Back-end</h4>

                    <div className="row">

                    {skillsBackEnd.map((skillBackEnd, index) => (
                        <div className="col-sm-3">
                        <img src={require(`../../images/homepage/${skillBackEnd['image']}`)} />
                        <div>{skillBackEnd['name']}</div>
                    </div>
                    ))}
                        
                    </div>
                
                </div>


                <div className="col-sm-offset-1">
                    <h4>Framework's</h4>

                    <div className="row">

                    {skillsFramework.map((skillFramework, index) => (
                        <div className="col-sm-3">
                        <img src={require(`../../images/homepage/${skillFramework['image']}`)} />
                        <div>{skillFramework['name']}</div>
                    </div>
                    ))}
                        
                    </div>
                
                </div>


                <div className="col-sm-offset-1">
                    <h4>Plataformas</h4>

                    <div className="row">

                    {skillsPlataforma.map((skillPlataforma, index) => (
                        <div className="col-sm-3">
                        <img src={require(`../../images/homepage/${skillPlataforma['image']}`)} />
                        <div>{skillPlataforma['name']}</div>
                    </div>
                    ))}
                        
                    </div>
                
                </div>
               
            </Carousel>
                            
            </div>
        </div>
    </div>
</section>
</div>
    );
};