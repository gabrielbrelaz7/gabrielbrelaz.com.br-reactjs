import "../skills/Skills.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import iconCarousel from "../../images/homepage/angular.png";




export const Skills = () => {

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


                   
            <Carousel>
            <div className="col-sm-offset-1">
                <h4>Desenvolvimento Front-end</h4>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                        <div>Angular</div>
                    </div>
                </div>
            </div>
            <div className="col-sm-offset-1">
                <h4>Desenvolvimento Front-end</h4>

                <div className="row">
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
                    <div className="col-sm-3">
                        <img src={iconCarousel} />
                    </div>
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