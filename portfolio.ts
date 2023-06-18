import emoji from 'react-easy-emoji';
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
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Adeema Amir',
  title: "Hi, I'm Adeema Amir",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python ,Django React.js, Next.js, Kotlin ,Xml ,C# ,Swift ,ObjectiveC Angular ,PostgreSQL ,Html ,CSS ,Java ,JavaScript Typescript ,JQuery ,MongoDb ,express ,Node and Blockchain development on Ethereum, Solidity Web3.js, Ethers.js, Django Framework , Game Developer ,Expo App ,React Native App.",
  resumeLink:
    '',
};

export const openSource = {
  githubUserName: 'Adeema-Amir',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Adeema-Amir',
  linkedin: 'https://www.linkedin.com/in/adeema-amir-75a97426a/',
  github: 'https://github.com/Adeema-Amir',
  instagram: 'https://www.instagram.com/adeemaamir240/',
  facebook: 'https://www.facebook.com/profile.php?id=100087931331816',
  twitter: 'https://twitter.com/amir_adeema',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'I Am A Web Developer Android Developer , IOS Developer Game Developer , Metaverse Developer React Native Expo , Python , Django Html , CSS , Java , JavaScript , Typescript JQuery , MongoDb , express , Node , Next Angular , PostgreSQL , Kotlin , Xml C# , Swift , Objective C',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Websites in React.js , Next.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'logos:typescript',
        },
        {
          skillName: 'JQuery',
          fontAwesomeClassName: 'logos:jquery',
        },
        {
          skillName: 'MongoDb',
          fontAwesomeClassName: 'logos:mongodb',
        },
        {
          skillName: 'Express',
          fontAwesomeClassName: 'logos:express',
        },
        {
          skillName: 'Node',
          fontAwesomeClassName: 'logos:nodejs',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'logos:angular',
        },
        {
          skillName: 'Kotlin',
          fontAwesomeClassName: 'logos:kotlin',
        },
        {
          skillName: 'Swift',
          fontAwesomeClassName: 'logos:swift',
        },
      ],
    },
    
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Goverment Girls High School',
    desc:'',
    subHeader: '6 Class',
    duration: 'September 2017 - April 2023',
    grade: 'Grade A',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: '',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2020 – Jun 2023',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Html ,CSS ,Java ,JavaScript Typescript Django, Bootstrap, jQuery, and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Backend Developer',
    companyLogo: '/img/icons/common/dusecaSomftware.jpg',
    date: 'Apr 2020 – Jun 2023',
    desc: 'I worked as API Engineer. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Server and deployed the API on Vercel Server.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Furniture Advertisement',
    desc: 'Furniture Advertisementbuilt with react.js and next.js',
    github: 'https://github.com/Adeema-Amir/Furniture-E-Compress/tree/main/Furn-E-commerce-Website-First-Page-main',
    link: 'https://furniture-advertisement.vercel.app/',
  },
  {
    name: 'Fullstack Cothing Ecommerce',
    desc: 'Fullstack Cothing Ecommerce built with react.js and next.js',
    github: 'https://github.com/Adeema-Amir/One-Stop-Shopping-Mall-component-resposive-full',
    link: 'https://fullstack-cothing-ecommerce.vercel.app/',
  },
  {
    name: 'International Urdu Language',
    desc: 'International Urdu Language built with react.js and next.js',
    github: 'https://github.com/Adeema-Amir/international-urdu-language-with-plasmic',
    link: 'https://international-urdu-language.vercel.app/',
  },
  {
    name: 'Party Blog',
    desc: 'Party Blog built with react.js and next.js',
    github: 'https://github.com/Adeema-Amir/pfnj',
    link: 'https://ranaverse.vercel.app/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Adeema Amir',
  description:
    'A passionate Full Stack Web Developer ,Android Developer ,IOS Developer ,Game Developer ,Metaverse Developer and Blockchain Developer.',
  author: 'Adeema Amir',
  image: 'https://avatars.githubusercontent.com/u/105167729?v=4',
  url: 'https://adeemaamir.vercel.app/',
  keywords: [
    'Adeema',
    'Adeema Amir',
    '@Adeema-Amir',
    'Adeema-Amir',
    'Portfolio',
    'Adeema Portfolio ',
    'Adeema Amir Portfolio',
  ],
};
