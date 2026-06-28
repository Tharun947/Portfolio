import { NavigationItem, ProfileConfig } from '../models/portfolio.models';

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Education', target: 'education' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' }
];

export const profileConfig: ProfileConfig = {
  name: 'Tharun Venkadesh Manimaran',
  shortName: 'Tharun',
  title: 'Software Engineer',
  headline: 'Software Engineer with 2+ years of experience designing and developing enterprise insurance applications.',
  typedTitles: ['Software Engineer', 'Java Developer', 'Spring Boot Developer', 'Backend Developer', 'Full Stack Developer', 'REST API Developer', 'Angular Developer'],
  email: 'tharun.m947@gmail.com',
  phone: '+61402000744',
  location: 'Melbourne, Australia',
  github: 'https://github.com/Tharun947',
  linkedin: 'https://www.linkedin.com/in/tharun-venkadesh-manimaran-a74a821b1/',
  resumePath: 'assets/resume/Tharun_Venkadesh_Resume.pdf',
  profileImage: 'assets/images/profile.jpg',
  summary: [
    'Software Engineer with 2+ years of experience designing and developing enterprise insurance applications.',
    'Skilled in Java, Spring Boot, Angular, and PostgreSQL, with strong expertise in REST API development, backend systems, and batch job automation.',
    'Experienced in production support, debugging, and performance optimization within Agile environments.'
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Tharun947', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tharun-venkadesh-manimaran-a74a821b1/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:tharun.m947@gmail.com', icon: 'mail' },
    { label: 'Phone', href: 'tel:+61402000744', icon: 'phone' }
  ],
  contactItems: [
    { label: 'Email', value: 'tharun.m947@gmail.com', href: 'mailto:tharun.m947@gmail.com', icon: 'mail' },
    { label: 'Phone', value: '+61 402 000 744', href: 'tel:+61402000744', icon: 'phone' },
    { label: 'Location', value: 'Melbourne, Australia', href: 'https://maps.google.com/?q=Melbourne%20Australia', icon: 'map-pin' },
    { label: 'GitHub', value: 'github.com/Tharun947', href: 'https://github.com/Tharun947', icon: 'github' },
    { label: 'LinkedIn', value: 'linkedin.com/in/tharun-venkadesh-manimaran-a74a821b1', href: 'https://www.linkedin.com/in/tharun-venkadesh-manimaran-a74a821b1/', icon: 'linkedin' }
  ],
  highlights: [
    { value: '2+', label: 'Years Industry Experience' },
    { value: 'Insurance', label: 'Enterprise Domain Experience' },
    { value: 'RMIT', label: 'Current Education' },
    { value: 'Java', label: 'Backend Specialization' }
  ],
  skills: [
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: 'REST APIs', level: 88 },
        { name: 'Hibernate', level: 80 }
      ]
    },
    {
      title: 'Frontend',
      icon: 'code',
      skills: [
        { name: 'Angular', level: 82 }
      ]
    },
    {
      title: 'Database',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', level: 84 },
        { name: 'MySQL', level: 76 }
      ]
    },
    {
      title: 'Enterprise Technologies',
      icon: 'briefcase',
      skills: [
        { name: 'Autosys', level: 78 },
        { name: 'Batch Job Automation', level: 78 },
        { name: 'Production Support', level: 82 },
        { name: 'Performance Optimization', level: 78 }
      ]
    },
    {
      title: 'Tools',
      icon: 'tool',
      skills: [
        { name: 'Git', level: 82 },
        { name: 'Postman', level: 82 },
        { name: 'Maven', level: 80 }
      ]
    },
    {
      title: 'Programming Concepts',
      icon: 'layers',
      skills: [
        { name: 'OOP', level: 86 },
        { name: 'Microservices', level: 78 },
        { name: 'Agile/Scrum', level: 82 }
      ]
    }
  ],
  experience: [
    {
      company: 'Cognizant',
      role: 'Software Engineer',
      duration: 'Aug 2022 - Dec 2024',
      location: 'Chennai, India',
      responsibilities: [],
      clientEngagements: [
        {
          client: 'Lincoln Financial Group (USA)',
          responsibilities: [
            'Developed and maintained enterprise insurance applications using Spring Boot in production environments.',
            'Designed and implemented RESTful APIs to support secure transactions and customer data processing.',
            'Developed backend modules for account and policy management, improving business workflow efficiency.',
            'Integrated applications with PostgreSQL database and optimized queries for performance tuning.',
            'Automated batch workflows and scheduled jobs using Autosys, reducing manual intervention.',
            'Resolved production issues and performed debugging and performance optimization.',
            'Followed Agile-based development practices with version control and code reviews.'
          ],
          technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Autosys', 'Git']
        },
        {
          client: 'TIAA (Teachers Insurance and Annuity Association - USA)',
          responsibilities: [
            'Contributed to requirement analysis, design, and development of enterprise internal systems.',
            'Translated business requirements into scalable technical solutions using Spring Boot and Angular.',
            'Built and tested REST APIs and worked on system integration across multiple services.',
            'Collaborated with business analysts and QA teams for timely and quality delivery.',
            'Supported backend processing and batch job execution using Autosys.'
          ],
          technologies: ['Spring Boot', 'Angular', 'REST APIs', 'Autosys']
        }
      ],
      technologies: ['Spring Boot', 'Java', 'Angular', 'REST APIs', 'PostgreSQL', 'Autosys', 'Git']
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Software Engineer Intern',
      duration: '2022',
      location: 'Chennai, India',
      responsibilities: [
        'Assisted in backend development using Java and Spring Boot.',
        'Supported RESTful API design, testing, and integration.',
        'Worked with PostgreSQL for data operations and query handling.',
        'Participated in debugging and issue resolution in an Agile environment.'
      ],
      technologies: [ 'Spring Boot', 'Software Engineering Principles', 'Database Management Systems', 'Java', 'PostgreSQL', 'TypeScript', 'JavaScript']
    }
  ],
  education: [
    {
      degree: 'Master of Information Technology',
      university: 'RMIT University',
      duration: '2025 - 2026',
      location: 'Melbourne, Australia',
      description: 'During my Master of Information Technology at RMIT University, I have strengthened my knowledge in enterprise software engineering and modern application development. I continuously apply these technologies while developing enterprise portfolio projects including Melb-Bank and HomeHunt.',
      highlights: [
        'Enterprise Java Development using Spring Boot',
        'Angular Frontend Development',
        'REST API Design & Development',
        'PostgreSQL Database Design',
        'Database Management Systems',
        'Object-Oriented Programming',
        'Software Engineering Principles',
        'Agile Software Development',
        'Version Control using Git',
        'Enterprise Application Architecture',
        'Full Stack Development Practices',
        'Autosys batch workflow concepts'
      ]
    }
  ],
  certifications: [
    {
      name: 'C Programming',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/c-programming.pdf'
    },
    {
      name: 'C++',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/c-plus-plus.pdf'
    },
    {
      name: 'Java Programming',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/java-programming.pdf'
    },
    {
      name: 'Spring Boot',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/spring-boot.pdf'
    },
    {
      name: 'Oracle Certified Professional: Java SE 11 Developer',
      organization: 'Oracle',
      issueDate: '',
      certificatePath: 'assets/certificates/oracle-certified-professional-java-se-11-developer.pdf'
    }
  ],
  projects: [
    {
      title: 'Home Hunt',
      subtitle: 'Rental Property Management Platform',
      description: 'Full-stack web application for property listing, search, and rental applications using Spring Boot, Angular, and PostgreSQL.',
      image: 'assets/projects/home-hunt.svg',
      stack: ['Spring Boot', 'Angular', 'PostgreSQL'],
      features: ['Property listing', 'Property search', 'Rental applications'],
      github: '',
      demo: ''
    },
    {
      title: 'Melb Bank',
      subtitle: 'Banking Application',
      description: 'Banking system with account management, transactions, and secure authentication using Spring Boot and REST APIs.',
      image: 'assets/projects/melb-bank.svg',
      stack: ['Spring Boot', 'REST APIs'],
      features: ['Account management', 'Transactions', 'Secure authentication'],
      github: '',
      demo: ''
    },
    {
      title: 'Web Content Summarizer',
      subtitle: 'Chrome Extension',
      description: 'Chrome extension to extract and summarize web content using AI APIs with backend integration via Spring Boot.',
      image: 'assets/projects/ai-summarizer.svg',
      stack: ['Chrome Extension', 'AI APIs', 'Spring Boot'],
      features: ['Web content extraction', 'AI-powered summarization', 'Spring Boot backend integration'],
      github: '',
      demo: ''
    },
    {
      title: 'Library Management System',
      subtitle: 'Academic Resource Platform',
      description: 'Library management application for managing books, members, borrowing workflows, and library records.',
      image: 'assets/projects/library.svg',
      stack: ['Java', 'Spring Boot', 'Database Management Systems'],
      features: ['Book management', 'Member records', 'Borrowing workflows', 'Library records'],
      github: '',
      demo: ''
    }
  ],
  resume: {
    title: 'Resume',
    description: 'Download my latest resume for a concise view of my software engineering experience across Java, Spring Boot, Angular, PostgreSQL, REST APIs, Autosys batch automation, production support, and enterprise insurance applications.',
    previewTitle: 'Software Engineer',
    previewStack: 'Java | Spring Boot | Angular | PostgreSQL | REST APIs | Autosys',
    previewHighlights: [
      '2+ years in enterprise insurance applications',
      'Backend systems, REST API development, and batch job automation',
      'Production support, debugging, and performance optimization'
    ]
  },
  footerText: 'Software Engineer focused on Java, Spring Boot, Angular, PostgreSQL, REST APIs, and enterprise insurance application delivery.'
};
