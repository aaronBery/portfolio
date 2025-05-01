export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5 scale: 1=Beginner, 3=Proficient, 5=Expert
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Frameworks",
    skills: [
      { name: "React", level: 4 },
      { name: "Angular", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Refine", level: 4 },
    ]
  },
  {
    name: "UI Libraries & Tools",
    skills: [
      { name: "Tailwind", level: 4 },
      { name: "MUI", level: 4 },
      { name: "Angular Material", level: 5 },
      { name: "Storybook", level: 5 },
    ]
  },
  {
    name: "State Management",
    skills: [
      { name: "Redux", level: 4 },
      { name: "NgRx", level: 4 },
      { name: "RxJS", level: 4 },
    ]
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "HTML/CSS", level: 5 },
      { name: "C#", level: 2 },
      { name: "SQL", level: 2 },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 5 },
      { name: "Jest", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "Nx", level: 5 },
    ]
  },
  {
    name: "Methodologies",
    skills: [
      { name: "SAFe Agile", level: 5 },
      { name: "Scrum", level: 5 },
      { name: "Kanban", level: 4 },
      { name: "Test-Driven Development", level: 4 },
    ]
  },
  {
    name: "AI & Future Tech",
    skills: [
      { name: "Cursor (Generative AI)", level: 4 },
      { name: "GitHub Copilot", level: 4 },
    ]
  }
];