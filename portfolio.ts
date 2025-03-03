import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

import {
  GITHUB_USERNAME,
  USER_NAME
} from "./constants/user"

export const greetings: GreetingsType = {
  name: USER_NAME,
  title: "Hi all, I'm " + USER_NAME.split(" ")[0],
  description:
    `Experienced Software Engineer with 7 years of expertise in designing, developing, and optimizing software solutions. Proficient in multiple programming languages and frameworks, with a strong focus on scalable architecture and problem-solving. Passionate about building efficient and innovative applications.
     I am committed to delivering high-quality solutions while maintaining strong communication and collaboration throughout the development process. Let’s work together to create exceptional applications.`,
  resumeLink: "#",
};

export const openSource = {
  githubUserName: GITHUB_USERNAME,
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:bradudenis95@gmail.com",
  telegram: "@topnotchbusiness",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using React.js/Next.js"),
        emoji("⚡ Building RESTful APIs in Node.js/Express.js REST Framework"),
        emoji("⚡ UI development with Material UI, Shadcn, Chakra UI, AntD, and React Bootstrap."),
        emoji("⚡ Styling: Tailwind CSS, SCSS, CSS, Styled Component"),
        emoji("⚡ Database: Mysql, MongoDB"),
        emoji("⚡ Version control with Github/GitLab/BitBucket."),
      ],
      softwareSkills: [
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "logos:express",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Typescript",
          iconifyTag: "logos:typescript",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Vercel",
          iconifyTag: "logos:vercel",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          iconifyTag: "akar-icons:gitlab-fill",
        },
        {
          skillName: "Bitbucket",
          iconifyTag: "logos:bitbucket",
        },
        {
          skillName: "MaterialUI",
          iconifyTag: "logos:material-ui",
        },
        {
          skillName: "BootStrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
    {
      title: "MVC/CMS Development",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ MVC Frameworks: PHP, Code Igniter, Laravel"),
        emoji("⚡ CMS: Squarespace, Shopify, Wordpress, GoHighLevel, Wix"),
      ],
      softwareSkills: [
        {
          skillName: "Squarespace",
          iconifyTag: "logos:squarespace",
        },
        {
          skillName: "Shopify",
          iconifyTag: "logos:shopify",
        },
        {
          skillName: "Wix",
          iconifyTag: "logos:wix",
        },
        {
          skillName: "Wordpress",
          iconifyTag: "dashicons:wordpress-alt",
        },
        {
          skillName: "GoHighLevel",
          iconifyTag: "akar-icons:gohighlevel-fill",
        },
        {
          skillName: "Php",
          iconifyTag: "logos:php",
        },
        {
          skillName: "CodeIgniter",
          iconifyTag: "logos:codeigniter",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend (7+ years of experience)", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend (5+ years of experience)",
    progressPercentage: "85",
  },
  {
    Stack: "CMS (7+ years of experience)",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Technical University of Moldova",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "2018 - 2021",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Software Engineer",
    company: "Amdaris",
    companyLogo: "data:image/png;base64,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",
    date: "May 2021 - Dec 2024",
    desc: "As a Senior Software Engineer, I’ve developed scalable web applications using React.js, Redux, Next.js, Node.js, and Python. I’ve designed UIs with Material-UI, Ant Design, and Tailwind CSS, integrated APIs with GraphQL, and leveraged AWS and Firebase for cloud services. I’m skilled in testing with Jest, version control with Git, and collaborating effectively within teams.",
  },
  {
    role: "Software Engineer ",
    company: "Endava",
    companyLogo: "data:image/png;base64,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",
    date: "Dec 2018 - Jan 2021",
    desc: "As a Full Stack Engineer, I have developed and maintained web applications using React, Redux, Node.js, Express.js, MongoDB, MySQL, and Firebase. I’ve created responsive UIs with Material-UI, Ant Design, and Bootstrap, and worked with frameworks like Angular, Vue.js, and Laravel.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Junior Software Engineer ",
    company: "Pentalog",
    companyLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///++1zX///3///u+1zG81im71h////m61Ri61CD2+eDK3l/9/vb7/O70+N3E20nL32bQ4nbu9cjb6Zrm8LTp8bzg7KTB2D7w9tLP4XD4++nG3FLp8cDU5IPX54ry9tfY5Y/j7KvGbJh8AAAFc0lEQVR4nO1c2ZKrOgw0QgYc1oSQjaz//5PHhkkuAbNlsJVbNf3Ac1drsSRkM/aHPxACGt+vgb/J8+2JmkUTwFZl4HkBL4CBS83miTjkjgTyqw/ut9gwD5waQXj7Gs+qharEcjbfIlX5IuWgd4++Q6tMOP9BZCtqPhWKJimH7zfUhBT8K8cGK+R5xKhdC1i8502tUBxX5I4FrHgjJbVSJqSm5V7eWTkcdz4xJ8aiPeK7WOJ4IteqZUBlwvJAzInB3XPatDxpQlqxYqetlTThOmaUZQOws4NdVilxFLqXoE1K0sJC1VhkvMBPO1JJVkEWk2pVaKSSJgwPpI6VdyKwyg3Bg1Kq2EGNBSWtS0TGCdimkxZqbw+kCak8C+AidKTkWegUdLkh1tpPIZAmpPF3YA/ewwp5dqOKwijr1cpztkBkwY0uWT3FutNEIbC1ztd/WAVhwkjUOnQP5oZW6RlIovCiy+sNE/oUrU4i+qWSCLLEOiWJtTavP6VyRFoQWPAwqJRM7yK3XicDZENSKXiq1bGcSQdy1Y8NRXm2zSrS1aBvpJDzneRkNQzz/gT6grBdJ9/GOcm2sNzYZAXsOObqCrJOjuyxctl2OIG+xFrbPKHjgQOwCavdqjuY1ZsmxK0lShLbaaSknsE6tlXO3CbaT5mwvFmhJLN12FsWd9TC4OHaKN9ddp/oVDWvq50oPExKCk9SyoQW/Oq0n0FKzZPP5jkxf7R+eSMlo/CqzkKzcsEsp1Lg4cq4u5/nknK4oxKpUa2SOT5VAzGPwKgJ41me/sMqCI3+HgcWziclTZiejRqw/b9mmlay1TGXSIHthjrlflbIM9nqmDmigZ2DT+znKBMWhuoGYLdPSdX/Vs3QOk1oafpg7MfcvNOvBWVCE4jLvvnnFCDfmZAqCj/JCS9SqAYOy5Oa1Pz1s3K4KrIWlsuf2tH0gqfxspQ0v+Dnw8uXlmoBUlKqhQczC5BCvvQ2zwKkHL700Pb3pBD3S2eFJXxqvfSs79cpQVYxi4/Vfpk8JSeRL8tIkZrV+WlIebvlB7Xx9BmHjpKZBZ54bHA9yElkBioqYKdfWI/zBzPQlwJLPmocak7lxsjgH8Z/huiBz7m/EVKPD5WSUWeq8wN2/aRxkKWdwSk2sI/SlGxFDa756tepRjkFuW9ySLWaPrR+QaSGh4z6DaFBmZTpzM75HzNJYbXgYXjmObea8qptJrOk4nTWdBjVGNb4JD2Z1bOjGlibBrDdnNRZjzNMCwXDaxwtiNDKpgmc9tNNx9XvIhvbANOzFBcPo0m8gcmnsRcuP1rpgV9Oiz0Mjuajrgaw8zShOJoZIupJXScVeGqHwx6pSTNYlE25zRWczjWMLiO1fG31Lpk7XnSiJ3tNi9uVwG5j5x6iOFpbkag4Abt4Y1t5/GF7B3XVvm7U4WQz6ioAy0c8yrN9Iwpg8D8tVv83bO/EgjtSSQWmGxYdKXYqB6xXX2azvQ876FHIvZzk2t9pIEdxAtNVbt69UvfSybPRsOhIbXpTlOw1XaL7+L2nnsCCZmefsW3f9E4cE+bTcFrpexiUvSbVlfe+RXTkDkXU1ZzYWVsdVKUT2Q2/RDu743ilvCe91uRN6U6FlSXOHmgjj2cJ5ZXRk8543pHylQJg3X0N2bGQRV2NIuhMgwXt7Xaf3TrlpuW1fB2prB15qCY8tNftt+20qRIm8UMcq5bxUKypn3CA95ddqscuXOq3jNxt6wmV9Atedknebo/LqKN9uqHG2zVtRJqGpY3mA0YitTrh6UfjgBFr0z/HpuI14ERxp2oOOqhHP/gt7ynVgDMPJCWiu7x6SHsl1zDNjGywfg7JJoq/IhE0UD9E9x1R94c//P/xDyU+PEA7x34gAAAAAElFTkSuQmCC",
    date: "Apr 2018 - Oct 2018",
    desc: "I have acquired foundational web development skills, including proficiency in HTML, CSS, Javascript, Php, jQuery, and Frontend development techniques.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/topnotchbusiness/portfolio",
    skills: ["Next.js", "Reactstrap", "Bootstrap", "Github"],
    link: "https://portfolio-git-without-contract-denis-bradus-projects.vercel.app/",
  },
  {
    name: "Probate",
    desc: "Probate is a web application designed to simplify the estate management and will administration process. It helps users track documents, deadlines, and tasks, making the probate process more efficient and organized for executors, attorneys, and individuals involved.",
    skills: ["Frontend Development", "React.js", "Redux", "React-hook", "Node.js", "Express.js", "Ant Design", "CSS", "Github"],
    link: "Private",
  },
  {
    name: "Volition",
    desc: "Volition is a comprehensive web application designed to support individuals recovering from cocaine addiction. Volition helps healthcare providers monitor patient behavior, track recovery milestones, and offer personalized care solutions in a seamless and effective manner.",
    skills: ["React.js", "Redux", "React-hook", "Node.js", "Express.js", "Material UI", "SCSS", "FireBase", "BitBucket"],
    link: "Private",
  },
  {
    name: "Print and Frame It",
    desc: "Print and Frame It is an E-commerce platform that allows users to upload their photos, choose custom frames, and have the framed photo delivered to their doorstep. The platform ensures a smooth and responsive shopping experience. This solution simplifies the process of printing and framing photos, delivering high-quality, personalized products to customers.",
    skills: ["React.js", "Redux", "React-hook", "Node.js", "Express.js", "Material UI", "SCSS", "MongoDB", "Cloudinary", "Gitlab"],
    link: "Private",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Leon Nguyen",
    role: "Frontend Developer",
    feedback:
      "Great job. Did things very quickly and went above and beyond to help me. I really appreciate Denis's quick response and skillset.",
  },
  {
    name: "Tariq Naeem",
    role: "React.js frontend developer",
    feedback:
      "Denis is an exceptional React.js developer with a strong grasp of modern UI frameworks. He writes clean, efficient, and scalable code while paying close attention to performance and design details. Beyond his technical skills, he’s a proactive problem-solver and a great communicator, always going above and beyond. Highly recommended!",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: USER_NAME,
  description: greetings.description,
  author: USER_NAME,
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  // url: "https://portfolio-1hanzla100.vercel.app",
  keywords: [
    USER_NAME.split(" ")[0],
    USER_NAME,
    "@angeldev0522",
    "Portfolio",
    USER_NAME.split(" ")[0] + " Portfolio ",
    USER_NAME + " Portfolio",
  ],
};
