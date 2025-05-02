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
      "Led the design and implementation of a new UI platform adopting the React framework Refine with Next.js",
      "Feature development on a legacy trade asset finance system using Angular",
      "Implemented real-time capabilities using SignalR, boosting app responsiveness",
      "Creation of a large-scale data upload mechanism with real-time presentation of progress along with screens for allowing ",
      "Adoption of Nx tooling to manage a large-scale Angular application",
      "Improved unit testing practices resulting in improved pipeline speeds",
      "Led a team of 4 engineers and 2 QA's, fostering innovation with AI tools like GitHub Copilot and Cursor",
      "Collaborated with the product owner to refine product roadmap and integrate strategic front-end technologies",
      "Developed a front-end technology radar adopted company-wide for technological strategy assessment",
      "Organized fortnightly front-end guilds to explore new technologies and encourage knowledge sharing"
    ],
    technologies: ["React", "Angular", "Next.js", "Refine", "Nx", "Storybook", "SignalR", "NgRx", "RxJS", "AI"]
  },
  {
    company: "Pexapark",
    role: "Frontend Software Engineer",
    period: "October 2022 - March 2024",
    description: [
      "Working on a cutting-edge product marketed as 'Green Power Trader' in the renewable energy sector that hopes to revolutionize power purchase agreements between solar/wind farm owners and energy buyers",
      "Worked in a small team as the main UI engineer, working closely with a design team to transform complex Figma designs into an interactive UI using the Angular framework",
      "One of the main contributors to a cross-team initiative to build common UI components within a shared library using Storybook and Angular Material",
      "Created a rich Angular UI allowing users to enter lots of complex data often with the aid of charts and graphs to then display the data back to the user for analysis",
      "Strong focus on user experience, highly agile and able to iterate on features",
      "Worked closely with the design team and product owner to relentlessly seek improvements to make the product more intuitive",
      "Active in creating user stories, bringing skills from formal agile training to the team",
      "Strong advocate for code quality, creating a culture for built-in quality, integrating tooling and unit tests into the development process"
    ],
    technologies: ["Angular", "Storybook", "Angular Material", "UI/UX", "Figma"]
  },
  {
    company: "Legal & General",
    role: "Senior Engineer",
    period: "February 2020 - October 2022",
    description: [
      "Code owner and one of the main contributors on L&G's open-source component library",
      "Working in scrum teams to deliver features to the self-service platform 'My Account'",
      "Worked on an account management tool allowing customers to update their preferences",
      "Integrated 3rd party chat tools to improve engagement with customers",
      "Developed tools for customers to update their bank details",
      "Modernized large parts of the application to adopt L&G's new design library 'Canopy'",
      "Took the lead on large technical debt and maintenance tasks including Angular framework upgrades",
      "Working closely with the product owner to gather requirements and provide technical assistance",
      "Improved my teams story writing practices"
    ],
    technologies: ["Angular", "Java Spring Boot", "Storybook", "NgRx", "Open source", "Visual Regression Testing", "E2E Testing"]
  },
  {
    company: "Imagine Communications",
    role: "Contract Software Engineer",
    period: "February 2017 - February 2020",
    description: [
      "Played a key role in creating the user interface for a next generation cloud-based web application XG Gameplan that allows broadcasters to optimize their advertising campaigns within their tv schedules",
      "Masterminded an upgrade from Angular JS to Angular running both in parallel"
    ],
    technologies: ["AngularJS", "Angular", "Storybook", "C#", ".NET"]
  },
  {
    company: "Vuelio",
    role: "Contract Web Developer",
    period: "May 2016 - February 2017",
    description: [
      "Created an Angular JS web application which allows PR teams to create and pin press releases and snippets from across the web"
    ],
    technologies: ["AngularJS", "Web Development"]
  },
  {
    company: "UCL",
    role: "Web Developer",
    period: "June 2014 - May 2016",
    description: [
      "Created a series of online prospectus for the University as single page web applications using BackboneJS and a REST based API",
      "Maintained and developed the University design system 'Indigo' and pioneered a module loading JavaScript architecture adopted across hundreds of microsites"
    ],
    technologies: ["BackboneJS", "REST API", "Funnelback", "UI Library", "JavaScript"]
  },
  {
    company: "IDG UK",
    role: "Junior Web Developer",
    period: "July 20124 - June 2014",
    description: [
      "Working on high traffic online publications Macworld, PC Advisor and Digital Arts",
      "Creating the front-end pages that display articles and product reviews"
    ],
    technologies: ["CSS", "SCSS", "ColdFusion", "MVC", "JavaScript"]
  }
];