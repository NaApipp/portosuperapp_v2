export type ProjectType = "Website Development" | "UI/UX Design" | "Wordpress";

export type ProjectData = {
  id?: string;
  image: string;
  project_name: string;
  project_desc: string;
  tech_stack?: string;
  project_type: ProjectType;
  links: {icon?:string; label: string; href: string }[];
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
      "This project website is a duplicate of the 'Re-Design official website' project from my own school, SMK Negeri 4 Kendal. The difference is that in this project I used WordPress technology for time efficiency.",
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
    image: "/asset/image/project-image/Cover-GreenCode.png",
    project_name: "GreenCode Web V3",
    project_desc:
      "A web application for managing B3 (hazardous and toxic) waste, designed with a responsive and attractive user interface. This platform helps users to efficiently track, record, and manage waste disposal processes, ensuring compliance with environmental regulations. The intuitive dashboard and real-time data features make waste management easier and more organized for both individuals and organizations.",
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
  // Project Scholl Profile
  {
    id: "7",
    project_type: "Wordpress",
    image: "/asset/image/project-image/UMKM-profile-Web.png",
    project_name: "UMKM Profile WEB",
    project_desc:
      "This project website aims to help UMKM entrepreneurs who want to reach customers from outside their region. I used WordPress for this project to save time.",
    tech_stack: "Elementor Pro",
    links: [
      {
        label: "Demo",
        href: "https://dev-nabilcatering.pantheonsite.io/",
      },
    ],
  },
];

export const filterProjectsByType = (type: ProjectType | "all") => {
  if (type === "all") return projectData;
  return projectData.filter((p) => p.project_type === type);
};
