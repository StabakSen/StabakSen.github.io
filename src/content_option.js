import oraclecert from "./assets/certificates/oracle-ja-java8.png";
import codecampcert from "./assets/certificates/free-code-camp.png";
import awscert from "./assets/certificates/aws-accredition.png";
import profileimg from "./assets/images/cutout_transparent.png";

const logotext = "STBK";
const meta = {
    title: "Stabak Sen",
    description: "I’m Stabak Sen, Full stack developer,currently working from remote locations.",
};

const introdata = {
    title: "I’m Stabak Sen",
    animated: {
        first: "I love coding",
        second: "I solve complex problems",
        third: "I love to learn and help others learn",
    },
    description: "Full stack developer, certified by Oracle as a Java Associate, currently working from remote locations.",
    your_img_url: profileimg,
};

const dataabout = {
    title: "Bio",
    aboutme: `Full Stack developer certified by Oracle as a Java Associate and certified by freeCodeCamp
              in Front-End libraries,
              accredited as a Technical AWS Partner. A demonstrated history of working in banking tech.`,
};
const worktimeline = [{
        jobtitle: "Specialist Software Engineer",
        where: "LTIMindtree",
        date: "September, 2022 - Present",
    },
    {
        jobtitle: "Senior Developer",
        where: "Barclays",
        date: "June, 2018 - September, 2022",
    },
    {
        jobtitle: "Senior Associate Consultant",
        where: "Infrasoft Technologies",
        date: "August, 2015 - May, 2018",
    },
];

const skills = [{
        name: "Java",
        value: 95,
    },
    {
        name: "Spring/ Spring-boot",
        value: 90,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Angular",
        value: 75,
    },
    {
        name: "SQL",
        value: 85,
    },
];

const services = [{
        title: "Java Development",
        description: `Monitored Java application vulnerabilities and applied vulnerability fixes and upgrades for code and libraries.
                      Re-engineering of a desktop application to convert into a Web Application using Vaadin framework.
                      Added new features and developed new payment systems to existing banking apps using Java on a Microservice architecture.`,
    },
    {
        title: "Spring and Microservices",
        description: `Migrated legacy banking forms in Spring Web flow to Spring 4.
                      Implemented Microservice architecture with API Gateway design pattern.
                      Creation of middleware or an Integration Hub framework for internal servers of a Banking Organization using Apache Camel and SOAP/REST web services.`,
    },
    {
        title: "React and Angular",
        description: `Created features using React for mobile banking application.
                      Created web application from scratch using Angular 2, later migrated to Angular 5 with spring.
                      `,
    },
];

const dataportfolio = [{
        img: oraclecert,
        description: "Oracle Certified Associate",
        link: "https://brm-certview.oracle.com/pls/certview/ecertificate?ssn=OC3402474&trackId=OCAJSE8&key=e6b6d6b2aa9b114d43c7b4315b5411d6fdf2fb0a",
    },
    {
        img: codecampcert,
        description: "Certified in front end libraries",
        link: "https://freecodecamp.org/certification/stabaksen/front-end-development-libraries",
    },
    {
        img: awscert,
        description: "AWS Partner : Accreditation (Technical)",
        link: "https://1drv.ms/b/s!Aos9JY7FeoY3uz1n6CPUKBFu38rs?e=aQLL7x",
    }
];

const contactConfig = {
    YOUR_EMAIL: "stabaksen@gmail.com",
    YOUR_FONE: "+91-8668674967/ 9563092026",
    description: "Get in touch with me anytime. For opportunities/ networking as well as if I can help you with any problem.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/StabakSen",
    facebook: "https://www.facebook.com/stabaksen",
    linkedin: "https://www.linkedin.com/in/stabaksen/",
    twitter: "https://x.com/stabaksen",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};