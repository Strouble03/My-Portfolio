// Edit this file to update your portfolio content
window.PORTFOLIO = {
  basics: {
    name: "Albertson Lasiste Domingo",
    title: "Quality Assurance (QA) Specialist",
    location: "Echague, Isabela, Philippines",
    email: "strebladomingo@gmail.com",
    phone: "+63 975 741 6789",
    linkedin: "https://www.linkedin.com/in/albertson-domingo-43292518b/",
    github: "https://github.com/alexsantos",
    summary: "QA Specialist with 3+ years experience in manual and automated testing for web and mobile apps. Skilled in test planning, API testing and writing clear defect reports."
  },
  skills: ["Manual Testing","Test Case Design","Exploratory Testing","Regression Testing","API Testing (Postman)","Automation (Playwright, Selenium)","Python","SQL"],
  tools: ["Jira","Clickup","Postman","Python","Playwright","Selenium","Python","Git","BrowserStack"],
  certifications: [""],
  experience: [
    {
      role: "QA Specialist",
      company: "Wideout Workforce Inc.",
      location: "(Work From Home)Makati City, Philippines",
      period: "Feb 2022 — Present",
      highlights: [
        "Designed, reviewed, and executed test cases, test scenarios, and test plans based on functional requirements and specifications.",
        "Performed smoke, regression, functional, exploratory, and user acceptance testing (UAT) across web and mobile applications.",
        "Identified, documented, and tracked defects using tools such as JIRA, or similar issue trackers.",
        "Collaborated with developers, product owners, and business analysts to clarify requirements and ensure quality at each stage of the SDLC.",
        "Created and maintained test documentation including test reports, defect logs, and traceability matrices.",
        "Conducted cross-browser and cross-platform testing to validate compatibility and performance.",
        "Participated in Agile/Scrum ceremonies (daily stand-ups, sprint planning, retrospectives) to align testing activities with project goals.",
        "Ensured adherence to STLC best practices, improving defect detection rates and test coverage.",
        "Worked alongside automation teams, with hands-on involvement in executing and performing minor editing on Python scripts for Selenium and Playwright test cases."
      ]
    },
    {
      role: "QA tester",
      company: "Asticom Technology Inc.",
      location: "(Work From Home)Mandaluyong City, PH",
      period: "Oct 2020 — Feb 2022",
      highlights: [
        "Created and executed comprehensive test cases, improving test coverage and reducing checkout-related defects by ensuring end-to-end validation.",
        "Performed manual QA testing for platform-wide updates, helping deliver a smoother checkout process, UI flow, and stock management with fewer post-release issues.",
        "Executed inventory updates and validated product availability, pricing, and stock accuracy within the system.",
        "Ensured that updates met both functional and usability requirements, maintaining a smooth customer shopping experience.",
        "Conducted CMS detail updates including content editing, deletion, and verification for consistency and accuracy.",
        "Performed manual QA testing for platform-wide updates, ensuring a smoother checkout process, optimized UI flow, and improved stock management with fewer post-release issues, while adhering to SEO best practices."
      ]
    },
    {
      role: "QA Specialist/Front End Developer",
      company: "Compsci LLC",
      location: "(On Site)Mandaluyong City, PH",
      period: "Jul 2019 — Apr 2020",
      highlights: [
        "Contributed to a JavaScript-based interactive learning tool, implementing dynamic features and UI interactions to improve user engagement.",
        "Assisted in the development of a ReactJS company website, building reusable components, managing state, and ensuring responsive design for a modern user experience.",
        "Participated in a QA project for an Insurance Company, performing manual testing, designing test cases, executing regression tests, and logging defects to ensure business-critical workflows functioned as expected.",
        "Collaborated with developers, product owners, and business analysts across projects to refine requirements and deliver high-quality solutions.",
        "Gained exposure to the full Software Development Life Cycle (SDLC) and applied Software Testing Life Cycle (STLC) best practices throughout project execution."
      ]
    },
    {
      role: "QA Specialist",
      company: "Asticom Technology Inc.",
      location: "(On Site)Mandaluyong City, PH",
      period: "Dec 2017 — Jun 2019",
      highlights: [
        "Performed QA validation on data provided by managers across different regions to ensure accuracy and consistency.",
        "Executed and edited Python scripts to process, clean, and analyze regional data sets.",
        "Created and delivered SIP (Standard Information Process) reports tailored for regional managers to support business decision-making.",
        "Utilized SQL queries to compile, extract, and manage large data sets for reporting purposes.",
        "Conducted data reconciliation to confirm alignment between compiled data and final reports.",
        "Collaborated with cross-regional managers to address data discrepancies and maintain reporting standards."
      ]
    },
    {
      role: "Central Information Management Staff",
      company: "Callang General Hospital Medical Center",
      location: "(On Site)Isabela, PH",
      period: "Sep 2016 — Oct 2017",
      highlights: [
        "Supported day-to-day operations of the Hospital System Management platform, including updates and issue resolution.",
        "Handled computer and printer maintenance, ensuring smooth workflow for hospital staff.",
        "Conducted software updates and repairs to keep systems functional and up to date.",
        "Completed additional tasks from the supervisor, providing reliable support across IT and administrative needs.",
        "Assisted in network management, including monitoring connectivity, resolving issues, and supporting stable system access."
      ]
    },
    {
      role: "IT User Support Technician",
      company: "Amancio Hotel, Dairy and Produce Farm",
      location: "(On Site)Isabela, PH",
      period: "Apr 2014 — Sep 2016",
      highlights: [
        "Supported day-to-day operations of the Hospital System Management platform, including updates and issue resolution.",
        "Handled computer and printer maintenance, ensuring smooth workflow for hospital staff.",
        "Conducted software updates and repairs to keep systems functional and up to date.",
        "Completed additional tasks from the supervisor, providing reliable support across IT and administrative needs.",
        "Assisted in network management, including monitoring connectivity, resolving issues, and supporting stable system access."
      ]
    }
  ],
  projects: [
    {
      name: "Payments Process(Manual)",
      period: "2021",
      link: "Globe Online Shop",
      tech: ["Browser Stack, DevTools(Browser), Jira, Google sheet, Postman"],
      summary: "Credit Card Payment Update"
    },
    {
      name: "System Update / Platform Update",
      period: "2022",
      link: "Globe Online Shop",
      tech: ["Browser Stack, DevTools(Browser), Jira, Google sheet, Postman"],
      summary: "System Update / Platform Update."
    },
    {
      name: "Product Update",
      period: "2020-2022",
      link: "Globe Online Shop",
      tech: ["Browser Stack, DevTools(Browser), Jira, Google sheet, CMS"],
      summary: "Automated end-to-end checkout flows and integrated smoke tests into CI."
    }
  ],
  testArtifacts: {
    testCases: [
      { title: "Login - valid credentials", note: "Positive path" },
      { title: "Checkout - card decline", note: "Negative case" }
    ],
    bugReports: [
      { id: "BUG-112", title: "Total mismatch after coupon", severity: "High" }
    ]
  }
};
