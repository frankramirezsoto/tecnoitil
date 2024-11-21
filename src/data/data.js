const services = [
    {
        name: "Infraestructura en la Nube",
        slug:"renta",
        shortDescription:"¿No tienes infraestructura? Te ayudamos a obtener y gestionar una infraestructura en la nube.",
        description: `El servicio de Infraestructura en la Nube incluye acceso a servidores virtuales, almacenamiento en la nube, bases de datos administradas, y herramientas avanzadas para el análisis y la gestión de cualquier proceso que tu empresa necesite para sus implementaciones internas. Este servicio está diseñado para ofrecer escalabilidad, flexibilidad y seguridad, adaptándose a empresas de cualquier tamaño y sector.

Utilidad: La empresa puede implementar, escalar y gestionar sus aplicaciones internas, bases de datos y demas procesos tecnogicos sin restricciones de capacidad o ubicación, asegurando que todos los procesos críticos estén siempre accesibles para el personal, sin importar el lugar o el dispositivo utilizado.      
Garantia: Una infraestructura accesible globalmente con altos estándares de seguridad, escalabilidad y redundancia, garantizando un funcionamiento continuo y confiable incluso en escenarios de alta demanda o fallos imprevistos.
        `,
        owner:"Service Owner - Cloud Services",
        packages: [
            {
                name:"Básico",
                includes:["Servidores virtuales con capacidad limitada (EC2 Micro Instances)",
                "Almacenamiento en Amazon S3 con espacio reducido.","Soporte Básico"],
                price: 3000
            },
            {
                name:"Avanzado",
                includes:["Todo lo incluido en el paquete basico","Servidores optimizados para aplicaciones empresariales (EC2 T-Series)",
                    "Almacenamiento escalable con redundancia.","Bases de datos administradas (Amazon RDS).","Monitoreo y soporte técnico 24/7"
                ],
                price: 5000
            },
            {
                name:"Enterprise",
                includes:["Todo lo incluido en el paquete avanzado","Infraestructura personalizada de misión crítica", "Soluciones de alta disponibilidad global y recuperación ante desastres.",
                "Integración avanzada de inteligencia artificial y análisis de datos.", "Consultoría técnica y soporte premium"
                ],
                price: "Cotización"
            },
        ],
        glossary:`EC2 (Elastic Compute Cloud): Servicio de cómputo escalable de AWS.
S3 (Simple Storage Service): Almacenamiento en la nube de alta durabilidad y bajo costo.
Alta Disponibilidad: Garantía de funcionamiento continuo y redundancia en los servicios.
        `
    },
    {
        name: "Soporte Tecnico Integral",
        slug:"soporte",
        shortDescription:"Ofrecemos el mejor equipo de expertos para tus problemas técnicos.",
        description: `Nuestro servicio se adapta a las necesidades únicas de cada cliente, garantizando que sus sistemas y operaciones se mantengan funcionando sin interrupciones. Al ofrecer una solución personalizada, alineada con los requisitos específicos de cada organización, reducimos significativamente los riesgos operativos y optimizamos la infraestructura tecnológica. Esto permite que las empresas se enfoquen en sus objetivos estratégicos, sin tener que preocuparse por fallos o tiempos de inactividad inesperados.
Utilidad: Nuestro servicio asegura que los sistemas de cada cliente sigan operativos sin interrupciones, sin importar su ubicación ni las características particulares de su infraestructura tecnológica. Desde el personal en el campo hasta los empleados administrativos, todos pueden acceder a las aplicaciones de manera continua y sin problemas, mejorando la eficiencia operativa y la productividad global de la organización.
Garantía: Ofrecemos la garantía de que los sistemas de nuestros clientes permanecerán seguros y en pleno funcionamiento en todo momento. Aseguramos un acceso continuo y confiable a las aplicaciones y datos empresariales, con el más alto nivel de seguridad y sin restricciones geográficas. Esto proporciona a las empresas la tranquilidad de saber que sus operaciones no se verán afectadas por problemas técnicos, asegurando una estabilidad total en sus procesos críticos.
        `,
        owner:"Service Owner - Technical Support",
        packages: [
            {
                name:"Basico",
                includes:["Soporte técnico remoto durante el horario laboral",
                "Mantenimiento preventivo mensual","Resolución de incidentes básicos",
            "Acceso a un portal de soporte en línea"],
                price: 3500
            },
            {
                name:"Avanzado",
                includes:["Todo lo incluido en el paquete básico","Mantenimiento y actualizaciones regulares de sistemas",
                    "Gestión proactiva de incidentes con tiempos de respuesta prioritarios","Acceso a consultoría técnica para optimización de infraestructura",
                    "Soporte técnico 24/7"
                ],
                price: 4000
            },
            {
                name:"Premium",
                includes:["Todo lo incluido en el paquete avanzado", "Migración Avanzada",
                "Auditorías de seguridad y optimización continua", "Resolución de incidentes en tiempo real",
                "Implementación de medidas de recuperación ante desastres (DRP)", "Soporte dedicado y personalizado con un equipo técnico asignado"
                ],
                price: 6000
            },
        ],
        glossary:`Soporte Técnico Remoto: Asistencia proporcionada por técnicos a través de canales en línea.
Mantenimiento Preventivo: Conjunto de actividades que se realizan para asegurar el buen funcionamiento de los sistemas informáticos.
Incident Response Time: El tiempo que tarda el equipo de soporte en comenzar a abordar un incidente.
Consultoría Técnica: Asesoría especializada que ayuda a las organizaciones a optimizar su infraestructura de TI.
Auditoría de Sistemas: Evaluación detallada de los sistemas de TI de la empresa para detectar posibles problemas de seguridad, rendimiento o cumplimiento.
Recuperación ante Desastres: Plan de acción para restaurar los sistemas y datos de la empresa en caso de una interrupción significativa o desastre.
        `
    },
    {
        name: "Desarrollo Web",
        slug:"web",
        shortDescription:"¡Ten presencia en la web! Te ayudamos a alcanzar clientes con un sitio web.",
        description: `El servicio de Desarrollo Web incluye el diseño, desarrollo, implementación y optimización de sitios y aplicaciones web personalizados. Nos especializamos en crear soluciones adaptadas a las necesidades específicas de cada cliente, con tecnologías modernas e interfaces intuitivas que maximizan la experiencia del usuario.
Utilidad: Este servicio permite a las empresas tener una presencia digital única y optimizada para atraer clientes, mejorar la interacción con usuarios, y gestionar sus procesos digitales con mayor eficiencia.
Garantía: Soluciones web robustas, seguras y de alta disponibilidad, diseñadas para garantizar tiempos de carga rápidos, compatibilidad móvil y escalabilidad para futuras necesidades.

Mejora de la presencia digital de las empresas.
Incremento en la captación de clientes mediante plataformas modernas y atractivas.
Automatización de procesos internos y externos a través de soluciones web personalizadas.

Resultado Deseado en Cuanto a Utilidad: "Las empresas pueden ofrecer servicios en línea y mejorar la interacción con sus clientes sin limitaciones de lugar o dispositivo."
Resultado Deseado en Cuanto a Garantías: "Un sitio web seguro, confiable y adaptado a las necesidades de la empresa, disponible para usuarios en cualquier momento y lugar."
        `,
        owner:"Service Owner - Software Solutions",
        packages: [
            {
                name:"Basico",
                includes:["Diseño de sitio web estándar con hasta 5 páginas","Optimización básica para dispositivos móviles",
                    "Integración inicial de SEO y analíticas","Soporte técnico estándar"
                ],
                price:2000
            },
            {
                name:"Avanzado",
                includes:["Todo lo incluido en el Plan Básico","Funcionalidades interactivas como formularios dinámicos y galerías multimedia",
                    "Personalización avanzada del diseño","Integración con herramientas de marketing y CRM",
                    "Monitoreo de rendimiento y soporte técnico 24/7"
                ],
                price:4000
            },
            {
                name:"Enterprise",
                includes:["Todo lo incluido en el Plan Avanzado","Desarrollo de aplicaciones web personalizadas",
                    "Soluciones avanzadas de e-commerce","Implementación de inteligencia artificial", 
                    "Análisis de datos para optimización de la experiencia del usuario", "Consultoría técnica y soporte premium"
                ],
                price:"Cotización"
            }
        ],
        glossary:`SEO (Search Engine Optimization): Prácticas para mejorar la visibilidad del sitio web en buscadores.
CRM (Customer Relationship Management): Herramientas para gestionar relaciones y datos de clientes.
E-commerce: Comercio electrónico, habilitación de tiendas en línea.
Alta Disponibilidad: Soluciones diseñadas para mantener el funcionamiento continuo incluso en escenarios de alta demanda o fallos técnicos.`
    },
    {
        name: "Datos al Alcance",
        slug:"datos",
        shortDescription:"Los datos son lo mas importante de tu negocio. Datos seguros y siempre disponibles.",
        description: `Sabemos que para tu empresa los datos son lo mas importante. Nuestro servicio de Datos al Alcance cuenta con todo lo que tu empresa necesita para migrar o empezar a almacenar tus datos de manera segura y disponible para diversas integraciones y soluciones requeridas por las empresas mas grandes a nivel mundial. 
Nuestro servicio explora desde la implementacion de una nueva base de datos o la migracion de una base de datos ya existente hasta su despliegue en un entorno de alta disponibilidad. Asi mismo, ofrecemos una optimizacion para asegurar el mayor rendimiento de las consultas y del almacenamiento de los datos. 
Utilidad: Tu empresa podra consultar, remover, actualizar y agregar datos desde cualquier aplicacion interna que desarrollen y escalar su base de datos de acorde a sus necesidades. 
Garantia: La base de datos asegura disponibilidad y seguridad de los datos siguiendo las ultimas practicas de alta disponibilidad, recuperacion de desastres y seguridad de los datos.
        `,
        owner:"Service Owner - Software Solutions",
        packages: [
            {
                name:"Básico",
                includes:["Implementación o Migración de Base de Datos",
                "Despliegue Básico en Alta Disponibilidad","Consultas y Actualizaciones Básicas",
            "Seguridad Básica", "Soporte Básico"],
                price: 3000
            },
            {
                name:"Optimizado",
                includes:["Implementación y Migración Avanzada","Despliegue en Alta Disponibilidad",
                    "Optimización del Rendimiento","Escalabilidad","Seguridad Avanzada","Recuperación de Desastres",
                    "Soporte Prioritario"
                ],
                price: 7000
            },
            {
                name:"Enterprise",
                includes:["Implementación Personalizada", "Migración Avanzada",
                "Despliegue en Alta Disponibilidad Global", "Optimización y Monitoreo Avanzado",
                "Escalabilidad Dinámica", "Seguridad","Recuperación ante Desastres Global",
                "Soporte Premium 24/7", "Consultoría y Mejora Continua"
                ],
                price: "Cotización"
            },
        ],
        glossary:`Alta Disponibilidad: Configuración de la base de datos que asegura que el servicio esté disponible de manera continua, incluso en caso de fallos de hardware o software.
Implementacion de base de datos: Proceso de configurar una nueva base de datos desde cero.
Migracion de datos: Proceso de trasladar datos de una base de datos existente a una nueva plataforma.
Escalabilidad: Capacidad de la base de datos para acoplarse a un crecimiento de los datos o un aumento en la cantidad de usuarios sin perder rendimiento.
        `
    }
];

export default services;