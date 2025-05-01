export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "TradeTeq",
    role: "Lead Software Engineer",
    period: "April 2024 - Present",
    description: [
      "Led a team of 4 engineers and 2 QA specialists, overseeing technical grooming sessions and translating business requirements into technical specifications.",
      "Worked with the product owner to review and refine the product roadmap before integrating tickets into sprint planning.",
      "Introduced AI tooling including GitHub Copilot and Cursor IDE to improve code quality and accelerate delivery timelines.",
      "Established and ran a fortnightly front-end guild to introduce new technologies and encourage knowledge sharing among engineers.",
      "Created a front-end technology radar that was later adopted company-wide to visualize technology adoption and retirement plans.",
      "Collaborated with the CTO on strategic decisions including selection of a new front-end technology stack based on React with Refine and Next.js.",
      "Introduced component testing in Storybook to revolutionize the team's automated testing approach.",
      "Implemented real-time UI capabilities using SignalR and introduced front-end monitoring with App Insights.",
      "Focused on improving build times for legacy platforms by leveraging Nx architecture and splitting code into separate libraries.",
      "Improved code coverage on legacy Angular projects by introducing patterns and utilities for easier test writing."
    ],
    technologies: ["React", "Next.js", "Refine", "Nx", "Storybook", "SignalR", "App Insights", "Angular"]
  },
  {
    company: "Pexapark",
    role: "Frontend Software Engineer",
    period: "October 2022 - March 2024",
    description: [
      "Developed the 'Green Power Trader' product for the renewable energy sector, revolutionizing power purchase agreements between energy producers and buyers.",
      "Transformed complex Figma designs into interactive UIs using Angular as the main UI engineer working with the design team.",
      "Contributed to a cross-team initiative to build common UI components within a shared library using Storybook with Angular Material.",
      "Created rich UI experiences allowing users to input and visualize complex data using charts and graphs for analysis.",
      "Collaborated closely with design teams and product owners to iterate on features with a strong focus on improving user experience.",
      "Actively created user stories bringing formal agile training to the team.",
      "Advocated for code quality and built-in quality by integrating tooling and unit tests into the development process."
    ],
    technologies: ["Angular", "Storybook", "Angular Material", "UI/UX", "Data Visualization"]
  },
  {
    company: "Legal & General",
    role: "Senior Engineer",
    period: "February 2020 - October 2022",
    description: [
      "Delivered features to the self-service platform 'My Account' working in scrum teams.",
      "Developed account management tools allowing customers to update preferences and bank details.",
      "Redesigned large portions of the application to adopt L&G's new design library 'Canopy'.",
      "Performed Angular framework upgrades and technical debt management.",
      "Worked closely with product owners to gather requirements and provide technical guidance for sprint planning.",
      "Participated in recruitment by reviewing CVs and conducting technical interviews.",
      "Became a code owner and core contributor to L&G's open source UI library 'Canopy' built with Storybook and Angular.",
      "Advocated for DevOps practices and shift-left with automation, specializing in writing unit tests and leading code reviews.",
      "Gained experience with Java Spring Boot backend making several API contributions.",
      "Presented architectural redesign proposals to senior management for consideration in upcoming funding cycles."
    ],
    technologies: ["Angular", "Java Spring Boot", "Storybook", "Canopy UI Library", "DevOps", "CI/CD"]
  },
  {
    company: "Imagine Communications",
    role: "Contract Software Engineer",
    period: "February 2017 - February 2020",
    description: [
      "Played a key role in creating the UI for xG Gameplan, a cloud-based web application for optimizing advertising campaigns in TV schedules.",
      "Created an MVP product that went live in under 5 months, building from an existing AngularJS application.",
      "Led continuous evolution of the application, introducing component-based architecture and hybrid Angular implementation.",
      "Migrated AngularJS entities to Angular and upgraded to Angular 7 with Angular CLI and unit tests.",
      "Produced prototypes for prominent screens focusing on improving user experience.",
      "Took responsibility as acting UI lead, working with global team leads to create a UI component library using Storybook.",
      "Shared knowledge, best practices, design patterns, and conventions across global teams.",
      "Contributed to API changes working in C# and gained understanding of the .NET ecosystem."
    ],
    technologies: ["AngularJS", "Angular", "Storybook", "C#", ".NET"]
  },
  {
    company: "Vuelio",
    role: "Contract Web Developer",
    period: "May 2016 - February 2017",
    description: [
      "Created the Vuelio Canvas as the sole developer, an AngularJS web application allowing PR teams to create and pin press releases and snippets from across the web."
    ],
    technologies: ["AngularJS", "Web Development"]
  },
  {
    company: "UCL",
    role: "Web Developer",
    period: "June 2014 - May 2016",
    description: [
      "Created a series of online prospectus for the University as single page web applications using BackboneJS and a REST-based search API.",
      "Maintained the search API using a third-party application Funnelback.",
      "Maintained and developed a UI library 'Indigo' and pioneered a module loading JavaScript architecture adopted across hundreds of microsites."
    ],
    technologies: ["BackboneJS", "REST API", "Funnelback", "UI Library", "JavaScript"]
  }
];