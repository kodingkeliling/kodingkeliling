import { services as idServices } from "../id/services";
import { projects as idProjects } from "../id/projects";

export const es = {
    services: idServices,
    projects: idProjects,
    navigation: {
        layanan: "Servicios",
        project: "Proyectos",
        review: "Reseñas",
        kontak: "Contacto"
    },
    hero: {
        badge: "Solución Digital de Confianza",
        title: "Realiza tus Ideas Digitales con ",
        brand: "KodingKeliling",
        description: "Desarrollo profesional de sitios web, software a medida y aplicaciones móviles para clientes en todo el mundo. Diseñado específicamente para aumentar el valor de su negocio digitalmente.",
        ctaConsultation: "Consultar",
        ctaServices: "Ver Servicios",
        freeConsultation: "Consulta Gratis 0 Rp",
        fullOwnership: "100% Propiedad del Código",
        worldwideService: "Alcance Global, Soporte Multilingüe"
    },
    footer: {
        description: "KodingKeliling es su socio tecnológico para soluciones digitales innovadoras. Ayudamos a las empresas a crecer con soluciones digitales que trascienden las fronteras geográficas para el mercado global.",
        quickLinks: "Enlaces Rápidos",
        contactNow: "Contactar Ahora",
        services: "Servicios",
        copyright: "© 2026 KodingKeliling. Todos los derechos reservados.",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio"
    },
    common: {
        backToServices: "Volver a todos los servicios",
        consultationFree: "Consulta Gratis 0 Rp",
        seeDetail: "Ver Detalle",
        visitWebsite: "Visitar Sitio Web",
        latestProjects: "Nuestros Últimos Proyectos",
        latestProjectsDesc: "Mira nuestro mejor trabajo para clientes en varios sectores.",
        seeAllProjects: "Ver Todos los Proyectos",
        ourServices: "Nuestros Servicios",
        ourServicesDesc: "Brindamos varias soluciones digitales para ayudar a que su negocio crezca y se desarrolle en la era digital.",
        whatClientsSay: "Lo que dicen nuestros clientes",
        whatClientsSayDesc: "La confianza del cliente es nuestra máxima priority. Aquí hay testimonios de varios clientes que han trabajado con nosotros.",
        trustedBy: "Con la confianza de empresas y organizaciones",
        home: "Inicio",
        consultNow: "Consultar",
        worldwideContent: "Socio Digital Global",
        worldwideContentDesc: "Ofrecemos soluciones digitales que funcionan en todo el mundo, soportando todos los idiomas and contextos culturales.",
        globalDigitalPartner: "Socio Digital Global",
        promoText: "🚀 ¡10% DE DESCUENTO EN TU PRIMER PROYECTO! • 📞 CONSULTA GRATUITA AHORA • 🌐 KODINGKELILING: SOLUCIONES DIGITALES PROFESIONALES • 💸 SIN CARGOS PARA PYMES • ✨ ",
        reviews: [
            {
                name: "Chalida Rahma Listy Hidayat",
                role: "Estudiante",
                review: "Muy satisfecha con los resultados del sitio web creado por KodingKeliling. El diseño es muy moderno and el rendimiento es súper rápido.",
                avatar: "/images/chalida.png"
            },
            {
                name: "Elsa Irham",
                role: "Dueña de PYME",
                review: "La aplicación móvil desarrollada es verdaderamente intuitiva and fácil de usar para nuestros clientes.",
                avatar: "/images/elsa.png"
            },
            {
                name: "Ranca Gigih Pramudita",
                role: "Barista",
                review: "El sistema personalizado de KodingKeliling es verdaderamente la solución adecuada para la eficiencia de nuestro negocio.",
                avatar: "/images/ranca.png"
            }
        ]
    },
    chat: {
        welcome: "¡Hola! 👋 Bienvenido a **Koding Keliling**.",
        assistantDesc: "Soy tu asistente digital. ¿En qué podemos ayudarte hoy con el **desarrollo de sitios web**, **software a medida** o **aplicaciones móviles**?",
        directContact: "o si prefieres contactar directamente con nuestro administrador, haz clic [aquí]({link})",
        typeMessage: "Escribe un message...",
        error: "Lo sentimos, el servicio está experimentando problemas en este momento. Puedes chatear con nosotros directamente a través de WhatsApp."
    },
    worldwide: {
        ctaTitle: "¿Listo para expandir tu negocio en todo el mundo?",
        ctaDesc: "Ayudamos a las marcas locales a globalizarse con tecnología de punta and un soporte multilingüe integral.",
        features: [
            {
                title: "Soporte para todos los idiomas",
                desc: "Construimos sistemas que soportan múltiples idiomas desde cero, incluyendo RTL and caracteres especiales."
            },
            {
                title: "Acceso global rápido",
                desc: "Optimización de CDN e infraestructura en la nube para asegurar que su sitio web sea rápido desde cualquier país."
            },
            {
                title: "Cumplimiento internacional",
                desc: "Asegurando que su sitio web cumpla con GDPR, CCPA and otros estándares globales de regulación de privacidad."
            }
        ]
    },
    faq: {
        title: "Preguntas Frecuentes",
        description: "Todo lo que necesitas saber sobre nuestros servicios and procesos.",
        stillHaveQuestions: "¿Aún tienes preguntas?",
        footerContactDesc: "Estamos aquí para ayudar. Contáctanos por WhatsApp para una consulta gratuita.",
        items: [
            {
                question: "¿Qué servicios ofrece KodingKeliling?",
                answer: "Ofrecemos desarrollo web profesional, software a medida, aplicaciones móviles and diseño UI/UX."
            },
            {
                question: "¿Cuánto tiempo se tarda en crear un sitio web?",
                answer: "La duración depende de la complejidad del proyecto. Una página de destino simple suele tardar de 1 a 2 semanas, mientras que un sistema más complejo puede tardar de 4 a 8 semanas o más."
            },
            {
                question: "¿Obtengo la propiedad total del código fuente una vez finalizado el proyecto?",
                answer: "Sí, tienes el 100% de la propiedad del código fuente. Proporcionaremos todos los archivos and la documentación necesaria una vez completado el proyecto."
            },
            {
                question: "¿Puedo consultar de forma gratuita?",
                answer: "¡Por supuesto! Ofrecemos una consulta inicial gratuita para discutir ideas, necesidades and proporcionar un presupuesto aproximado para su proyecto."
            },
            {
                question: "¿Qué tecnología se utiliza?",
                answer: "Utilizamos tecnología moderna and confiable como React, Next.js, TypeScript, Node.js, Flutter and varios servicios en la nube como AWS o Vercel para garantizar un alto rendimiento and escalabilidad."
            }
        ]
    }
};
