export type ProjectData = {
  id?: string;
  image: string;
  project_name: string;
  project_desc: string;
  links?: { label: string; href: string }[];
};

export const projectData: ProjectData[] = [
  // Project GreenCode
  {
    id: "1",
    image: "/asset/image/project-image/Cover-GreenCode.png",
    project_name: "GreenCode Web",
    project_desc:
      "I developed the 'GreenCode' web application. This app has comprehensive features for managing B3 waste. Its design is responsive and attractive, making it comfortable to use on various devices.",
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
    image: "/asset/image/project-image/rent-car-design.png",
    project_name: "UI Design Rent Car",
    project_desc:
      "Saya mendesign sebuah aplikasi untuk Rental Mobil. Design ini membantu untuk menyewa kendaraan lebih efisien dan juga praktis. Desainnya responsif, intuitif, dan menarik, sehingga mudah digunakan di berbagai perangkat.",
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
    image: "/asset/image/project-image/rent-car-design.png",
    project_name: "CoffeeShop Web Template",
    project_desc:
      "Saya menyediakan template aplikasi web untuk Coffee Shop. Web ini memiliki fitur yang untuk melihat Menu dan juga memmesannya. Desainnya responsif dan menarik, sehingga nyaman digunakan di berbagai perangkat.",
    links: [
      {
        label: "Github",
        href: "https://github.com/NaApipp/apps-coffee.git",
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
    image: "/asset/image/project-image/school-profile.png",
    project_name: "School Profile",
    project_desc:
      "Project website ini merupakan duplikast dari project 'Re-Design official website' dari sekolah Saya sendiri yaitu SMK Negeri 4 Kendal. Namun bedanya pada project ini saya menggunakan teknologi wordpress untuk efisiensi waktu.",
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
    image: "/asset/image/project-image/rpl-site-cover.png",
    project_name: "MasterJava Project",
    project_desc:
      "Project website ini merupakan duplikast dari project 'Re-Design official website' dari sekolah Saya sendiri yaitu SMK Negeri 4 Kendal. Namun bedanya pada project ini saya menggunakan teknologi wordpress untuk efisiensi waktu.",
    links: [
      {
        label: "Demo",
        href: "https://rpl3-23.vercel.app/",
      },
    ],
  },
];
