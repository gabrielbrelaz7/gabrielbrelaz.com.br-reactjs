import { createServer, Model } from "miragejs"


createServer({

  models: {
    customer: Model,
  },


  seeds(server) {
            server.schema.customers.create({
                id: 1,
                name: "AddTech (.add)",
                description: 'A AddTech é uma consultoria de Inovação, Transformação Ágil, Desenvolvimento Low-code e Web-Mobile baseada no Design Thinking, Lean, Agile, Management 3.0 e Pessoas',
                logo: 'img_addtech/logo_addtech.png',
                plataformas: 'Wordpress',
                ferramentas: 'Email marketing, mídias sociais e landing pages',
                tecnologias: 'HTML 5, CSS3 e PHP',
                images: [
                    'img_addtech/Pagina1.jpg',
                    'img_addtech/Pagina2.jpg',
                    'img_addtech/Pagina3.jpg',
                    'img_addtech/Pagina4.jpg',
                    'img_addtech/Pagina5.jpg'
                ],
                
            })

            server.schema.customers.create({
              id: 2,
                name: "APSA Condomínio Digital",
                description: 'Há mais de 85 anos no mercado imobiliário trabalhando com segurança e eficiência. A Apsa possui serviços de gestão condominial, locação, compra e venda.',
                logo: 'img_apsa/apsa.png',
                plataformas: 'Ionic Framework',
                ferramentas: null,
                tecnologias: 'HTML 5, Angular e CSS',
                images: [
                    'img_apsa/banner1_apsa.JPG',
                ]
                
            })

            server.schema.customers.create({
                id: 3,
                name: "Solarize",
                description: 'Serviços em Tecnologia Ambiental com Foco em Cursos de Energia Solar.',
                logo: 'img_solarize/Solarize.png',
                plataformas: 'CodeIgnitter 4',
                ferramentas: 'Banco de Dados MySQL',
                tecnologias: 'PHP, MySQL, HTML 5, CSS3 e Bootstrap',
                images: [
                    'img_solarize/banner_solarize.JPG',
                    'img_solarize/banner_solarize1.JPG'
                ]
                  
              })


              server.schema.customers.create({
                id: 4,
                name: "Senai São Paulo",
                description: 'Criando Histórias é um projeto do Senai São Paulo e leva as escolas os livros escritos e ilustrados pelos seus próprios alunos. Para educadores, pais ou alunos.',
                logo: 'img_criandohistorias/criandohistorias.png',
                plataformas: 'Joomla, Angular e Laravel Framework',
                ferramentas: 'Banco de Dados MariaDB e API Rest',
                tecnologias: 'HTML 5, PHP, MySQL, Bootstrap, CSS3 e Javascript',
                images: [
                    'img_criandohistorias/banner_criandohistorias1.JPG',
                    'img_criandohistorias/banner_criandohistorias2.JPG',
                    'img_criandohistorias/banner_criandohistorias3.JPG'
                ]
                  
              })


              server.schema.customers.create({
                id: 5,
                name: "Nestlé Purina",
                description: 'Uma marca Néstle, dedicada a enriquecer a vida dos animais de estimação e seus donos. Espalhados globalmente por todo mundo.',
                plataformas: 'Drupal',
                ferramentas: null,
                tecnologias: 'HTML 5, CSS3 e Bootstrap',
                logo: 'img_purina/purina.png',
                images: [
                    'img_purina/banner_purina1.JPG',
                ]
                  
              })


              
              server.schema.customers.create({
                id: 6,
                name: "Getussp",
                description: 'O GETUSSP é um site de educação que destaca-se na preparação dos principais concursos nacionais e pela excelência em todos os nossos cursos, comprovada através de seus elevados índices de aprovação.',
                logo: 'img_getussp/getussp.png',
                plataformas: 'Servidor Linux e Laravel Framework',
                ferramentas: 'Banco de Dados MySQL, Apache, WinSCP, Acesso SSH e Github',
                tecnologias: 'PHP',
                images: [
                    'img_getussp/banner1.jpg',
                    'img_getussp/banner2.jpg',
                    'img_getussp/banner3.jpg',
                    'img_getussp/banner4.jpg',
                    'img_getussp/banner5.jpg',                    
                ]
                  
              })
        },


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
      });



      this.get("/customers/:id", (schema, request) => {
        let id = request.params.id      
        return schema.customers.find(id)
      })


      this.namespace = "api"
      this.get("/designs", () => {
        return {
          designs: 
              {
                  'sites' : [
                  {
                      title: 'Site para Agência de Marketing Digital',
                      plataforma: 'BuilderAll',
                      tecnologias: 'HTML 5 (Arrastar e Soltar)',
                      images: [
                          'img_webdesign/azit/banner1.jpg',
                          'img_webdesign/azit/banner2.jpg',
                          'img_webdesign/azit/banner3.jpg',
                          'img_webdesign/azit/banner4.jpg',
                          'img_webdesign/azit/banner5.jpg',
                        ]
                  },
                  {
                    title: 'Site para Jornal do Bairro',
                    plataforma: 'BuilderAll',
                    tecnologias: 'HTML 5 (Arrastar e Soltar)',
                    images: [
                        'img_webdesign/recreiodabarra/banner1.jpg',
                      ]
                 },
                 {
                    title: 'Site para Gráfca Digital',
                    plataforma: 'BuilderAll',
                    tecnologias: 'HTML 5 (Arrastar e Soltar)',
                    images: [
                        'img_webdesign/gdgrafica/banner1.jpg',
                        'img_webdesign/gdgrafica/banner2.jpg',
                      ]
                 },
                 {
                    title: 'Site para Restaurante Japônes',
                    plataforma: 'BuilderAll',
                    tecnologias: 'HTML 5 (Arrastar e Soltar)',
                    images: [
                        'img_webdesign/poderososushi/banner1.jpg',
                        'img_webdesign/poderososushi/banner2.jpg',
                        'img_webdesign/poderososushi/banner3.jpg',
                      ]
                 }
            

                  ],

                  'logotipos' : 
                    {
                        images: [
                            'img_logotipos/tm-img-01-tn.jpg',
                            'img_logotipos/tm-img-02-tn.jpg',
                            'img_logotipos/tm-img-03-tn.jpg',
                            'img_logotipos/tm-img-04-tn.jpg',
                            'img_logotipos/tm-img-05-tn.jpg',
                            'img_logotipos/tm-img-06-tn.jpg',
                            'img_logotipos/tm-img-07-tn.jpg',
                            'img_logotipos/tm-img-08-tn.jpg',
                            'img_logotipos/tm-img-09-tn.jpg',
                            'img_logotipos/tm-img-10-tn.jpg',
                            'img_logotipos/tm-img-11-tn.jpg',
                            'img_logotipos/tm-img-12-tn.jpg',
                          ]
                    },


                    'ilustracoes' : [
                            {
                            title: 'AZIT Marketing e Comunicacao',
                            images: [
                                'img_ilustracoes/ilustracao_1.jpg',
                                'img_ilustracoes/ilustracao_2.jpg',
                              ]
                            },
                            {
                            title: 'Instituto Joao Calvino',
                            images: [
                                'img_ilustracoes/ilustracao_3.jpg',
                                ]
                            },
                            {
                            title: 'Cantor Judson de Oliveira',
                            images: [
                                'img_ilustracoes/ilustracao_6.jpg',
                                ]
                            },

                            {
                            title: 'Evento',
                            images: [
                                'img_ilustracoes/ilustracao_7.jpg', 
                                ]
                            },

                            {
                            title: 'Empresa AddTech',
                            images: [
                                'img_ilustracoes/ilustracao_5.jpg',
                                ]
                            },
                            
                        ]


      
                }
        }
      });
  },
})