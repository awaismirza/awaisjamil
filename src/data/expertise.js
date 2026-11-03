import { Blocks, Bot, Building2, Layers, Workflow } from 'lucide-react'

// Focus areas shown at the top of /experience.
export const careerSummary = [
  {
    icon: Bot,
    title: 'Agentic Engineering',
    description:
      'LLM agents, agent harnesses and developer tooling that make engineering teams faster and safer.',
  },
  {
    icon: Layers,
    title: 'Frontend Architecture',
    description:
      'Angular, React, component systems, design systems, and maintainable UI foundations.',
  },
  {
    icon: Blocks,
    title: 'Product Engineering',
    description:
      'Turning user needs and business requirements into polished, production-ready software.',
  },
  {
    icon: Building2,
    title: 'Enterprise Systems',
    description:
      'Experience across banking, health tech, logistics, education, and energy platforms.',
  },
  {
    icon: Workflow,
    title: 'Full-Stack Delivery',
    description:
      'Comfortable across frontend, APIs, cloud infrastructure, CI/CD, and practical backend work.',
  },
]

// Grouped skills on /experience.
export const technicalStrengths = [
  { category: 'Frontend', skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'NX Monorepo'] },
  { category: 'Mobile', skills: ['Swift', 'SwiftUI', 'iOS', 'React Native', 'Ionic'] },
  { category: 'Backend', skills: ['Node.js', 'ASP.NET Core', 'FastifyJS', 'Java Spring', 'Python Django'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Elasticsearch'] },
  { category: 'AI & Agents', skills: ['LLM Agents', 'Claude Code', 'Codex', 'Cursor', 'MCP', 'Agent Skills', 'Go'] },
]

// Flat technology list used by /services and the home-page ticker.
export const techStack = [
  'React', 'Angular', 'TypeScript', 'JavaScript', 'Node.js',
  'Swift', 'SwiftUI', 'iOS', 'macOS',
  'ASP.NET Core', 'FastifyJS', 'REST APIs',
  'AWS', 'Docker', 'CI/CD',
  'NX Monorepo', 'Design Systems', 'PostgreSQL',
]

// Years since the earliest dated role in the experience timeline.
export function yearsOfExperience(entries, now = new Date()) {
  const years = entries
    .map((entry) => Number(entry.period?.match(/\b(19|20)\d{2}\b/)?.[0]))
    .filter(Boolean)
  return years.length ? now.getFullYear() - Math.min(...years) : 0
}
