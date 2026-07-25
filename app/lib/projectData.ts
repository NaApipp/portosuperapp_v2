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
    target_user: "Users who want to manage B3 (hazardous and toxic) waste.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to order coffee.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
  // Project Cuanlytics
  {
    id: "10",
    project_type: "Website Development",
    image: "/asset/image/project-image/not-found-image.png",
    project_name: "Annotation Tools",
    project_desc:
      "A web application for showcasing products and providing reviews in a simple, secure and modern way.",
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
    tech_stack: "Next.JS, TailwindCSS, MongoDB",
    links: [
      // {
      //   label: "Demo",
      //   href: "https://myfinanceku.vercel.app/",
      // },
      {
        label: "Github",
        href: "https://github.com/NaApipp/review_app",
      },
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
    target_user: "Users who want to rent vehicles.",
    problem_solution: "GreenCode helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
    tech_stack: "ExpressJS, VueJs, MongoDB",
    links: [
      {
        label: "PlayStore",
        href: "https://play.google.com/store/apps/details?id=com.nunomics.app&pcampaignid=web_share",
      },
    ],
  },
];

export const filterProjectsByType = (type: ProjectType | "all") => {
  if (type === "all") return projectData;
  return projectData.filter((p) => p.project_type === type);
};
