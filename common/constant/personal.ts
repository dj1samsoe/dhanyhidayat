import { da } from 'date-fns/locale';

export const personalData = {
  name: 'Dhany Hidayat',
  age: 22,
  occupation: 'Frontend Developer',
  bio: 'Undergraduate Information Systems student at Brawijaya University who is a enthusiast in Software Engineer with a strong emphasis on frontend development. Proficient in Javascript, Typescript, React JS, Next JS and other elements of web technology.',
  skills: [
    { category: 'Programming', skills: ['Javascript', 'Typescript'] },
    {
      category: 'Frontend',
      skills: ['React JS', 'Next JS', 'Vue JS', 'Tailwind CSS', 'styled-components', 'Bootstrap', 'Material UI']
    },
    { category: 'Backend', skills: ['Node JS'] },
    { category: 'Database', skills: ['MySQL', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code'] },
    { category: 'Languages', skills: ['English', 'Indonesian'] }
  ],
  interests: ['Web Development', 'Frontend Development', 'Some likes Coffee', 'Coding', 'Reading'],
  projects: [
    {
      name: 'Personal Portfolio',
      description: 'A personal portfolio website showcasing my projects and skills.'
    },
    {
      name: 'Do-it',
      description: 'a Fullstack Next JS To-do Lists Project with smooth design'
    }
  ],
  experiences: [
    {
      position: 'Frontend Developer',
      company: 'PT. Kawan Kerja Indonesia',
      location: 'Bandung, Indonesia 🇮🇩',
      type: 'Internship',
      location_type: 'Remote',
      start_date: '2024-02-12',
      end_date: '2024-06-12',
      link: 'https://kawankerja.id',
      responsibilities: [
        'Contributed to the development of "Kawan Kampus", one of the projects created by PT. Kawan Kerja Indonesia.',
        'Responsible for translating Figma designs into code for the "Kawan Kampus" project.',
        'Developed and maintained user interfaces for web applications using HTML, CSS, and JavaScript.',
        'Worked closely with UI/UX designers to ensure the technical feasibility of designs and implement them accordingly.',
        'Optimized web applications for maximum speed and scalability.',
        'Participated in webinars hosted by PT. Kawan Kerja Indonesia.'
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'GasCPNS',
      location: 'Indonesia 🇮🇩',
      location_type: 'Remote',
      type: 'Freelance',
      start_date: '2024-02-29',
      end_date: '2024-03-07',
      link: 'https://projects.co.id/',
      responsibilities: [
        'Responsible for slicing UI designs from Figma into code.',
        'Responsible for creating pages including register, admin dashboard, member dashboard, and create question.',
        'Responsible for configuring user registration/login system using APIs from the backend.',
        'Developed website using Vue.js.'
      ]
    }
  ],
  contact: {
    email: 'dhanyh86@gmail.com',
    linkedin: 'https://www.linkedin.com/in/fauziandhany',
    github: 'https://github.com/dj1samsoe',
    instagram: 'https://www.instagram.com/dhanyhidayat_'
  }
};
