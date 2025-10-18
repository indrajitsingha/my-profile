export const portfolioData = {
  personal: {
    name: "INDRAJIT SINGHA",
    title: "Frontend Developer",
    email: "indrajitdgp19@gmail.com",
    phone: "7001927063",
    location: "Dhangabg, Durgapur-03, West Bengal, India",
    objective: "An enthusiastic learner with highly motivated pursuing Master in Computer Applications. Eager to learn new technologies and willing to innovate the new things which can improve the existing technology. having an interest web development field."
  },

  experience: [
    {
      id: 1,
      title: "Frontend Developer (React js Developer)",
      company: "Encoders Technologies",
      location: "Kolkata, West Bengal",
      duration: "09/2023 - 10/2025",
      description: "Developed and maintained responsive web applications using React.js, Redux, and RESTful APIs, collaborating with cross-functional teams to deliver high-quality, scalable solutions. Optimized performance, created reusable components, and improved performance."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Jet Web Solutions Private Limited",
      location: "DURGAPUR, West Bengal",
      duration: "05/2023 - 09/2023",
      description: "Designed and implemented user-friendly, responsive web sites using HTML5, CSS3, and JavaScript, ensuring optimal performance and cross-browser compatibility."
    }
  ],

  education: [
    {
      id: 1,
      degree: "Master of Computer Application (M.C.A)",
      level: "Post Graduation",
      institution: "Chandigarh University, Mohali, Punjab",
      duration: "05/2021 - 05/2023",
      percentage: "77.4%"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Application (BCA)",
      level: "Graduation",
      institution: "NSHM College of Management and Technology, Durgapur, West Bengal",
      duration: "07/2018 - 07/2021",
      percentage: "74.9%"
    },
    // {
    //   id: 3,
    //   degree: "Intermediate (12th)",
    //   institution: "Bhringhi T.N Institution, Durgapur, West Bengal",
    //   duration: "04/2017 - 04/2018",
    //   percentage: "63.20%"
    // },
    // {
    //   id: 4,
    //   degree: "Matriculation (10th)",
    //   institution: "Benachity High School, Durgapur, West Bengal",
    //   duration: "04/2015 - 04/2016",
    //   percentage: "54.85%"
    // }
  ],

  skills: [
    // Languages
    "HTML", "CSS3", "JavaScript (ES6+)",

    // Frontend Libraries & Frameworks
    "React.js", "Redux Toolkit", "RTK Query", "React Query", "React Hook Form", "React Charts",

    // Styling
    "Tailwind CSS", "Bootstrap", "CSS Modules", "Styled Components", "Shadcn UI",

    // Tools & Platforms
    "Git", "Firebase", "REST APIs", "Vercel", "Netlify"
  ],


  projects: [
    {
      id: 1,
      title: "Employee Management System",
      type: "Organization Project",
      description: "Developed a comprehensive Employee Management System (EMS) to streamline HR processes and enhance organizational efficiency. The system facilitates effective management of employee data, payroll, performance evaluations, and attendance tracking.",
      role: "React.js Developer",
      technologies: ["HTML","CSS","Javascript","Tailwind Css","Metrial UI","React.js", " Redux Toolkit", "REST API Integration","Excel Js","React Charts"],
      link: null,

    },
    {
      id: 2,
      title: "CARVELY",
      type: "Personal Project",
      description: "It's Basically you will get all info about Cars.",
      features: "User login, Google login, search by specific Brands, Category, Price, Tax Calculator, Comparison of two cars, Admin panel",
      technologies: ["HTML", "CSS", "React JS", "Tailwind CSS", "Redux Toolkit", "Supabase", "React Query", "React Hook Form"],
      link: "https://carvelly.netlify.app/",
      githublink:"https://github.com/indrajitsingha/Carvelly-updated"
    },
    {
      id: 3,
      title: "Education System",
      type: "Personal Project",
      description: "Educational platform for students and educators.",
      features: "User login, Google login, see related projects and resources, Admin panel",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React JS", "Redux Toolkit", "Firebase"],
      link: "https://taupe-salamander-98acb4.netlify.app/",
      githublink:null
    },
  ],

  languages: ["Bengali", "Hindi", "English"],

  interests: ["Listening Songs", "Playing Cricket", "Coding"]
};
