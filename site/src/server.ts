import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/skills", () => {
      return {
        skills: 
            {
                'frontend' : [
                {
                    name: 'HTML 5',
                    image: 'html5.png'
                },
                {   
                    name: 'CSS3',
                    image: 'css3.png'
                },
                {   
                    name: 'Bootstrap',
                    image: 'bootstrap.png'
                },
                {   
                    name: 'JavaScript',
                    image: 'javascript.png'
                },
                {   
                    name: 'TypeScript',
                    image: 'typescript.png'
                },
                {   
                    name: 'JQuery',
                    image: 'jquery.png'
                },
                {   
                    name: 'React JS',
                    image: 'reactjs.png'
                },

                ],

                'backend' : [
                    {
                        name: 'PHP',
                        image: 'php.png'
                    },
                    {   
                        name: 'MySQL',
                        image: 'mysql.png'
                    },
                    {   
                        name: 'PostgreSQL',
                        image: 'postgres.png'
                    },
                    {   
                        name: 'MariaDB',
                        image: 'api.png'
                    },
                    {   
                        name: 'API Restfull',
                        image: 'api.png'
                    },
                    ],


                    'framework' : [
                        {
                            name: 'Laravel',
                            image: 'laravel.png'
                        },

                        {   
                            name: 'Angular',
                            image: 'angular.png'
                        }
                        ],

                    'plataforma' : [
                        {   
                            name: 'Wordpress',
                            image: 'wordpress.png'
                        },
                        {   
                            name: 'Joomla',
                            image: 'jomla.png'
                        },
                        {
                            name: 'Drupal',
                            image: 'drupal.png'
                        },
                        {
                            name: 'BuilderAll',
                            image: 'builderAll.png'
                        },
                        ],
                    }
      }
    });

    this.get("/customers", () => {
        return {
          customers: [
                {
                    id: 1,
                    name: "AddTech (.add)",
                    image: '9.jpg',
                    description: 'Desenvolvimento web e design com Wordpress',
                },

                {
                    id: 2,
                    name: "APSA Condomínio Digital",
                    image: '10.jpg',
                    description: 'Desenvolvimento web front-end com Angular',
                },
                {
                    id: 3,
                    name: "Solarize",
                    image: '12.jpg',
                    description: 'Desenvolvimento fullstack com CodeIgnitter 4',
                },

                {
                    id: 4,
                    name: "Senai São Paulo",
                    image: '13.jpg',
                    description: 'Desenvolvimento fullstack com Angular, Laravel e Joomla',
                },

                {
                    id: 5,
                    name: "Néstle Purina",
                    image: '14.jpg',
                    description: 'Desenvolvimento web front-end com Drupal',
                },

                {
                    id: 6,
                    name: "Getussp",
                    image: 'getussp.png',
                    description: 'Criação de ambiente em Servidor Linux para sistema em Laravel, PHP e MySQL',
                },
                 
  
                ],
        }
      })
  },
})