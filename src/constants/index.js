import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    mysql,
    python,
    django,
    photoshop,
    illustrator,
    after,
    premiere
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Frontend",
    },
    {
        imageUrl: illustrator,
        name: "Illustrator",
        type: "Frontend",
    },
    {
        imageUrl: after,
        name: "After Effects",
        type: "Frontend",
    },
    {
        imageUrl: premiere,
        name: "Premiere",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Desarrollador Web Fullstack",
        company_name: "U.E Humanitas",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Marzo 2023 - April 2023",
        points: [
            "Desarrollé un sistema interno de cobranza, utilizando Django en el backend y React.js en el frontend",
            "Implementé un diseño responsivo para garantizar la compatibilidad entre navegadores",
        ],
    },
    {
        title: "Desarrollador Web Fullstack",
        company_name: "Parrino Tecno",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Septiembre 2023 - Act",
        points: [
            "Desarrollé un e-commerce utilizando Django, Django REST para el backend y React.js para el frontend",
            "Manteminiento del e-commerce y actualización del stock del inventario",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Synfiniti',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jean-gutierrez-rivas/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'React Expense Tracker',
        description: 'Es una app web que calcula la tasa de interés y las cuotas a pagar dependiendo de la cantidad de dinero que pidas prestado y el tiempo en que quieras pagar.',
        link: 'https://github.com/Synfiniti/react-expense-tracker',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Spotify Clone',
        description: 'Desarrollé una app web clon de Spotify, página de inicio moderna, reproductor de música completo, búsqueda, letras, funciones de exploración de canciones, búsqueda, música popular a tu alrededor, listas de éxitos mundiales. ',
        link: 'https://github.com/Synfiniti/spotify-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'App Web CRM',
        description: 'Realicé una app web CRM en los los usuarios puede registrar clientes potenciales con diferentes estados y también organizar los datos relevantes de todos sus contactos',
        link: 'https://github.com/Synfiniti/CRM-DJANGO',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Mobile APP Pomodoro',
        description: 'Es una aplicación para dispositivo iOS y Android que nos va a permitir contar el tiempo en el que queremos concentrarnos en algo. ',
        link: 'https://github.com/Synfiniti/pomodoro-react-native',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'E-commerce',
        description: 'E-commerce que contiene registro de usuario, autenticación de usuarios, carrito de compras, pasarela de pago, modo nocturno/claro, panel de administrador.',
        link: 'https://github.com/Synfiniti/ecommerce-django-react',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Django CRUD App',
        description: 'Es una aplicación web/CRUD completo que permite llevar un registro de tareas pendientes por realizar y tareas completadas. La app cuenta funcionalidades como autenticación de usuario, login, register y rutas protegidas. ',
        link: 'https://github.com/Synfiniti/django-auth-crud',
    }
];