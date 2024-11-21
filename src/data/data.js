const services = [
    {
        name: "Renta de Infraestructura",
        slug:"renta",
        shortDescription:"¿No tienes infraestructura? Rentala al mejor costo con nosotros.",
        description: "",
        owner:"",
        packages: {

        },
        glossary:""
    },
    {
        name: "Soporte Tecnico Integral",
        slug:"soporte",
        shortDescription:"Ofrecemos el mejor equipo de expertos para tus problemas técnicos.",
        description: "",
        owner:"",
        packages: {

        },
        glossary:""
    },
    {
        name: "Desarrollo Web",
        slug:"web",
        shortDescription:"¡Ten presencia en la web! Te ayudamos a alcanzar clientes con un sitio web.",
        description: "",
        owner:"",
        packages: [
            {
                name:"Basico"
            }
        ],
        glossary:""
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
                name:"Basico",
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