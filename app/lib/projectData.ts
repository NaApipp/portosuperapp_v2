export type ProjectType =
  | "Website Development"
  | "UI/UX Design"
  | "Wordpress"
  | "QA Project";

export type ProjectData = {
  id?: string;
  image: string;
  project_name: string;
  project_desc: string;
  target_user: string;
  problem_solution: string;
  tech_stack?: string;
  project_type: ProjectType;
  links: { icon?: string; label: string; href: string }[];
};

export const projectData: ProjectData[] = [
  // Project GreenCode
  {
    id: "1",
    project_type: "Website Development",
    image: "/asset/image/project-image/Cover-GreenCode.png",
    project_name: "GreenCode Web",
    project_desc:
      "A web application for managing B3 (hazardous and toxic) waste, designed with a responsive and attractive user interface. This platform helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
    target_user: "GreenCode targets individuals and households unsure of how to safely dispose of hazardous waste (such as e-waste), as well as small businesses requiring practical waste management solutions to ensure regulatory compliance. The service operates in four areas: Semarang, Kendal, Batang, and Yogyakarta.",
    problem_solution:
      "Many people struggle to manage hazardous and toxic waste (B3) due to a lack of access and education, creating risks of environmental pollution and health hazards. GreenCode addresses this by providing educational guidance alongside a practical pickup solution: users simply sort their waste and fill out an online form, and the GreenCode team collects it for professional management.",
    tech_stack: "HTML, CSS, JS (Native)",
    links: [
      {
        label: "Github",
        href: "https://github.com/NaApipp/Website-GreenCode.git",
      },
      { label: "Demo", href: "https://greencodev2.vercel.app/" },
    ],
  },

  // Project Rent Car Design
  {
    id: "2",
    project_type: "UI/UX Design",
    image: "/asset/image/project-image/rent-car-design.png",
    project_name: "UI Design Rent Car",
    project_desc:
      "I designed an application for Car Rental. This design helps to rent vehicles more efficiently and practically. The design is responsive, intuitive, and attractive, making it easy to use on various devices.",
    target_user: "Individuals or businesses looking for an easy, transparent, and reliable way to rent vehicles for personal or professional use.",
    problem_solution:
      "Many vehicle rental apps suffer from cluttered interfaces and confusing booking processes. This UI design solves this issue by offering a clean, user-centric interface that allows users to quickly browse cars, compare prices effortlessly, and complete their bookings with minimal friction.",
    tech_stack: "-",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/pr4Aq1YidB8YRMuJji62wU/Design-Aplikasi-Sewa-Mobil?node-id=0-1&t=hEefgeNzbCZ6wGrg-1",
      },
    ],
  },

  // Project Coffee Shop Web Template
  {
    id: "3",
    project_type: "Website Development",
    image: "/asset/image/project-image/coffee_shop.png",
    project_name: "CoffeeShop Web Template",
    project_desc:
      "I provide a web application template for Coffee Shops. This website features menu viewing and ordering capabilities. The design is responsive and attractive, making it comfortable to use on various devices.",
    target_user: "Coffee shop owners looking to establish an online presence, or customers wanting to view menus and place orders easily.",
    problem_solution:
      "Many small coffee shops lack the resources to build a custom website from scratch, missing out on potential online customers. This web template provides a ready-to-use, responsive solution that allows cafes to beautifully showcase their menu and handle orders, ultimately increasing their reach and sales.",
    tech_stack: "PHP Native",
    links: [
      {
        label: "Github",
        href: "https://github.com/NaApipp/apps-coffee",
      },
      {
        label: "Demo",
        href: "https://appscoffee.vercel.app/",
      },
    ],
  },

  // Project Scholl Profile
  {
    id: "4",
    project_type: "Wordpress",
    image: "/asset/image/project-image/school-profile.png",
    project_name: "School Profile",
    project_desc:
      "This project website is a duplicate of the 'Re-Design official website' project from my own school, SMK Negeri 4 Kendal. The difference is that in this project I used WordPress technology for time efficiency.",
    target_user: "Prospective students, parents, alumni, and the general public seeking information about the school's programs, achievements, and activities.",
    problem_solution:
      "School websites often suffer from outdated designs and difficult navigation, making it hard for visitors to find essential information. This WordPress-based redesign solves this by providing a modern, fast, and easily manageable profile website using Elementor Pro, ensuring a time-efficient development process while maintaining an attractive and informative digital presence.",
    tech_stack: "Elementor Pro",
    links: [
      {
        label: "Demo",
        href: "https://dev-sschooll.pantheonsite.io/",
      },
    ],
  },

  // Project Scholl Profile
  {
    id: "5",
    project_type: "Website Development",
    image: "/asset/image/project-image/rpl-site-cover.png",
    project_name: "MASTERJAVA Project",
    project_desc:
      "The official profile website for the Software Engineering class at SMKN 4 Kendal. This platform is designed to showcase our class identity, organizational structure, achievements, and activity gallery with a modern and interactive interface.",
    target_user: "This website targets three main groups: RPL 3 (2023) alumni from SMKN 4 Kendal, to reminisce and maintain connections; the school and teachers, as part of the class's organizational identity; and the general public or prospective students interested in viewing the class's track record, achievements, and stories through the gallery and testimonials.",
    problem_solution:
      "Memories, documentation, and records of class achievements are often scattered across various platforms, only to be lost after graduation. This website serves as a permanent digital archive that consolidates the organizational structure, list of achievements, memory gallery, and alumni messages into a single hub—ensuring the journey of RPL 3 remains neatly preserved and accessible at any time.",
    tech_stack: "Next.JS, TailwindCSS, MongoDB",
    links: [
      {
        label: "Demo",
        href: "https://rpl3-23.vercel.app/",
      },
    ],
  },

  // Project GreenCode V6
  {
    id: "6",
    project_type: "Website Development",
    image: "/asset/image/project-image/greencode-v3.png",
    project_name: "GreenCode Web V3",
    project_desc:
      "The system includes new AI-powered support features and a comprehensive dashboard for complaint management.",
    target_user: "This project targets the general public wishing to report or submit hazardous and toxic waste (B3) and consult on handling procedures via an AI-based chatbot, eliminating the need to wait for a manual human response. Additionally, it targets registered users who can track their submission status via a dashboard, while also indirectly serving the GreenCode internal team, who will manage report data through a planned management dashboard.",
    problem_solution:
      "This refactored version transforms GreenCode from a simple static website into a smarter, more secure, and transparent digital platform. Development has focused on enhancing data security through an account authentication system, providing real-time education on hazardous waste (B3) sorting via an RAG-based AI chatbot, and ensuring process transparency through a report status tracking system. Looking ahead, the platform is also being prepared to introduce automated waste classification using computer vision technology.",
    tech_stack: "Next.JS, TailwindCSS, MongoDB",
    links: [
      {
        label: "Beranda",
        href: "https://greencodev3.vercel.app/",
      },
      {
        label: "Dashboard",
        href: "https://greencodev3.vercel.app/login-dashboard",
      },
      {
        label: "Doc",
        href: "https://github.com/NaApipp/greencode_refactor?tab=readme-ov-file#readme",
      },
    ],
  },

  // Project UMKM Profile
  {
    id: "7",
    project_type: "Wordpress",
    image: "/asset/image/project-image/UMKM-profile-Web.png",
    project_name: "UMKM Profile WEB",
    project_desc:
      "This project website aims to help UMKM entrepreneurs who want to reach customers from outside their region. I used WordPress for this project to save time.",
    target_user: "Local UMKM (Micro, Small, and Medium Enterprises) owners seeking to expand their market reach, and potential customers looking for their products or services online.",
    problem_solution:
      "Many local businesses struggle to reach a wider audience due to the lack of an online presence, limiting their customer base. This WordPress-based profile website solves this by providing a quick and cost-effective digital storefront. It helps UMKM entrepreneurs showcase their offerings professionally, building credibility and attracting customers far beyond their local area.",
    tech_stack: "Elementor Pro",
    links: [
      {
        label: "Demo",
        href: "https://dev-nabilcatering.pantheonsite.io/",
      },
      {
        label: "Figma",
        href: "https://www.figma.com/design/QjgXi6yNbZA4W9K8iw7BnU/Nabil-Catering?node-id=0-1&t=7oHFdApomfwXaWrr-1",
      },
    ],
  },
  // Project Parking Logic
  {
    id: "8",
    project_type: "Website Development",
    image: "/asset/image/project-image/parking_logic_cover.png",
    project_name: "ParkingLogic",
    project_desc:
      "ParkingLogic is a web application designed to manage parking systems in a structured and efficient way. It supports multi-role users, allowing each user to have access permissions based on their role.",
    target_user: "ParkingLogic targets three user groups through a multi-role system: Administrators, who manage master data, rates, and system access; Parking Attendants, who record entry and exit transactions and print tickets on-site; and Supervisors/Owners, who monitor reports and operational performance. The platform is ideal for parking operators at malls, office buildings, and other paid parking facilities.",
    problem_solution:
      "Manual parking management is prone to human error, incorrect rate calculations, uncertainty regarding available spaces, and a lack of reporting transparency. ParkingLogic digitizes the entire process through automated entry and exit logging, precise rate calculation, and a real-time parking space monitoring dashboard. With the inclusion of role-based access controls, parking operations become more organized, transparent, secure, and accountable.",
    tech_stack: "Next.JS, TailwindCSS, PostgreSQL",
    links: [
      {
        label: "Demo",
        href: "https://parkinglogic.vercel.app/",
      },
      {
        label: "Github",
        href: "https://github.com/NaApipp/parking_manegement_system",
      },
    ],
  },
  // Project MyFinanceKu
  {
    id: "9",
    project_type: "Website Development",
    image: "/asset/image/project-image/myfinanceku-cover.png",
    project_name: "MyFinanceKu",
    project_desc:
      "MyFinanceKu is a web application designed to manage personal finances in a structured and efficient way. It supports multi-role users, allowing each user to have access permissions based on their role.",
    target_user: "MyFinanceKu targets individuals who wish to manage their personal finances in a structured manner—particularly those with multiple funding sources (such as bank accounts, e-wallets, and cash) who require centralized monitoring, disciplined budgeting, and organized PDF reports. The platform also provides administrative access to manage user data and overall transactions via a backend panel.",
    problem_solution:
      "Spreading funds across multiple locations often leads to uncontrolled spending, unclear savings progress, and a lack of organized transaction records. MyFinanceKu digitizes financial management through a real-time visual dashboard, multi-asset tracking, a budgeting system with automated validation, and savings target indicators. Protected by robust authentication and encryption, the platform ensures financial management becomes more organized, transparent, and secure.",
    tech_stack: "Next.JS, TailwindCSS, MongoDB",
    links: [
      {
        label: "Demo",
        href: "https://myfinanceku.vercel.app/",
      },
      // {
      //   label: "Github",
      //   href: "https://github.com/NaApipp/myfinanceku",
      // },
    ],
  },
  // Project Web Registrasi KYC
  {
    id: "11",
    project_type: "QA Project",
    image: "/asset/image/project-image/webreg-cover.png",
    project_name: "Web Registrasi KYC",
    project_desc:
      "KYC registration provides access to trade securely on the JFXGoldX exchange, the first digital platform for buying and selling physical gold in Indonesia.",
    target_user: "This website targets prospective clients or individual investors wishing to legally open a commodity futures trading account (such as for gold or bullion) with ABI Komoditi Berjangka. The platform is specifically designed for new users who must complete an official identity verification process before they can begin trading.",
    problem_solution:
      "In accordance with Bappebti and ICDX regulatory standards, brokerage firms are required to implement KYC (Know Your Customer) procedures to prevent money laundering and fraud. This website digitizes the manual registration workflow into a fast, efficient, and structured online process, while also enabling companies to meet their legal compliance obligations.",
    tech_stack: "VueJs, TailwindCSS, ExpressJs, MongoDB",
    links: [
      {
        label: "Demo",
        href: "https://webreg.abicommodity.co.id/login",
      },
    ],
  },
  // Project Web Registrasi Dashboard
  {
    id: "12",
    project_type: "QA Project",
    image: "/asset/image/project-image/not-found-image.png",
    project_name: "Web Registrasi Dashboard",
    project_desc:
      "An administrative dashboard for managing and verifying user KYC data, providing real-time monitoring and streamlined registration approval workflows for the JFXGoldX ecosystem.",
    target_user: "Internal compliance teams, administrators, and verification officers at ABI Komoditi Berjangka who are responsible for reviewing and approving user KYC registrations.",
    problem_solution:
      "Manually verifying KYC documents from thousands of applicants is tedious and prone to human error, which can lead to compliance issues. This administrative dashboard streamlines the verification workflow by providing a centralized, real-time monitoring system where staff can efficiently review documents, manage user statuses, and approve registrations in compliance with industry regulations.",
    tech_stack: "VueJs, TailwindCSS, ExpressJs, MongoDB",
    links: [
      {
        label: "Demo",
        href: "https://dashboard.abicommodity.co.id/login",
      },
    ],
  },
  // Project GTM Gold To Mecca
  {
    id: "13",
    project_type: "QA Project",
    image: "/asset/image/project-image/gtm_project.png",
    project_name: "GTM (Gold To Mecca)",
    project_desc:
      "A feature on Nunomics that allows users to save for Umrah or Hajj through incremental digital gold investments, with goal setting and real-time progress tracking.",
    target_user: "Muslim individuals and families who aspire to perform Umrah or Hajj and are looking for a secure, inflation-resistant way to save up using digital gold.",
    problem_solution:
      "Saving up for a pilgrimage like Umrah or Hajj can be challenging due to inflation and lack of disciplined saving habits. GTM (Gold To Mecca) solves this by offering a goal-oriented digital gold investment feature. It allows users to set a target, save in small increments, and visually track their progress, ensuring their savings retain value over time.",
    tech_stack: "ExpressJS, VueJs, MongoDB",
    links: [
      {
        label: "PlayStore",
        href: "https://play.google.com/store/apps/details?id=com.nunomics.app&pcampaignid=web_share",
      },
    ],
  },
  // Project CMS MyFinance
  {
    id: "15",
    project_type: "Website Development",
    image: "/asset/image/project-image/cms-myfinanceku.png",
    project_name: "MyFinanceKu CMS",
    project_desc:
      "This web-based application serves as the administrative hub for the MyFinanceKu platform. The system is specifically designed to help administrators manage article and news content, monitor news data analytics, and centrally manage access rights for other admin accounts in a secure and efficient manner.",
    target_user: "Content Manager and Platform Administrator.",
    problem_solution:
      "This platform resolves the issue of slow and fragmented content management by providing an intuitive, secure, and efficient centralized CMS to supply and manage content across the entire platform ecosystem.",
    tech_stack: "ExpressJS, NextJS, MongoDB",
    links: [
      {
        label: "Demo",
        href: "https://cms-myfinance.vercel.app",
      },
    ],
  },
  // Project CMS Nunomics
  {
    id: "16",
    project_type: "Website Development",
    image: "/asset/image/project-image/cover-platfom-skill.png",
    project_name: "Platform Skill Assessment",
    project_desc:
      "The Information Systems (IS) Skill Assessment Platform is an interactive web application specifically designed to measure and map the interest and aptitude profiles of IS students. The system evaluates whether a user's competency profile leans more towards the Business domain or the Technology domain. Based on the assessment results, the system plots the user's position within a visual quadrant and recommends career paths relevant to their profile.",
    target_user: "Information Systems student with Admin.",
    problem_solution: "The Skill Assessment platform serves as a digital solution to address the inefficiencies, subjectivity, and monitoring difficulties associated with manual competency evaluation processes. Through automated assessments, standardized indicators, and a centralized analytics dashboard, the system ensures that participant skill testing is objective, rapid, transparent, and easily accessible at any time.",
    tech_stack: "NextJS, TailwindCSS, MongoDB",
    links: [
      {
        label: "Github",
        href: "https://github.com/NaApipp/platform_skillassesment",
      },
    ],
  },
];

export const filterProjectsByType = (type: ProjectType | "all") => {
  if (type === "all") return projectData;
  return projectData.filter((p) => p.project_type === type);
};
