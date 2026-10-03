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
  profileImage: 'assets/images/profile.png',
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
        { name: 'Java' },
        { name: 'Spring Boot' },
        { name: 'REST APIs' },
        { name: 'Microservices' },
        { name: 'Node.js' }
      ]
    },
    {
      title: 'Frontend',
      icon: 'code',
      skills: [
        { name: 'Angular' },
        { name: 'React' }
      ]
    },
    {
      title: 'Databases',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'SQL Queries' }
      ]
    },
    {
      title: 'Software Engineering',
      icon: 'briefcase',
      skills: [
        { name: 'Software Development' },
        { name: 'Software Testing' },
        { name: 'Unit Testing' },
        { name: 'Debugging' },
        { name: 'Code Reviews' },
        { name: 'Agile/Scrum' },
        { name: 'SDLC' },
        { name: 'Performance Optimisation' },
        { name: 'Multithreading' },
        { name: 'Software Architecture' }
      ]
    },
    {
      title: 'Enterprise Technologies & Production Support',
      icon: 'server',
      skills: [
        { name: 'Autosys' },
        { name: 'Batch Job Automation' },
        { name: 'L2/L3 Production Support' },
        { name: 'Production Monitoring' },
        { name: 'Incident Management' },
        { name: 'SLA-Based Incident Resolution' },
        { name: 'Root Cause Analysis (RCA)' },
        { name: 'Application Troubleshooting' }
      ]
    },
    {
      title: 'Development & AI Tools',
      icon: 'tool',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Jira' },
        { name: 'Maven' },
        { name: 'Postman' },
        { name: 'OpenAI Codex' },
        { name: 'Claude Code' },
        { name: 'GitHub Copilot' },
        { name: 'AI API Integration' }
      ]
    },
    {
      title: 'Core Programming Concepts',
      icon: 'layers',
      skills: [
        { name: 'Object-Oriented Programming (OOP)' },
        { name: 'Data Structures & Algorithms' },
        { name: 'Design Patterns' },
        { name: 'API Integration' }
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
            'Provided L2/L3 production support for critical applications.',
            'Monitored production applications and resolved incidents within SLAs.',
            'Performed root cause analysis of recurring production incidents.',
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
      certificatePath: 'assets/certificates/C.jpeg'
    },
    {
      name: 'C++',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/C++.jpeg'
    },
    {
      name: 'Java Programming',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/Java.jpeg'
    },
    {
      name: 'Java Web Technologies',
      organization: 'NIIT',
      issueDate: '',
      certificatePath: 'assets/certificates/Java-web.jpeg'
    },
    {
      name: 'Oracle Certified Professional: Java SE 11 Developer',
      organization: 'Oracle',
      issueDate: '',
      certificatePath: 'assets/certificates/oracle-certified-professional-java-se-11-developer.png'
    }
  ],
  projects: [
    {
      title: 'SCOUT',
      subtitle: "School Safety Alert Platform · Master's Capstone",
      description: 'Extended a real client’s school safety platform as part of my Master of Information Technology at RMIT University. Developed full-stack workflows for staff and administrators to report, track, and respond to emergency incidents in real time.',
      image: 'assets/projects/scout.svg',
      stack: ['React', 'Node.js', 'Express', 'Firebase'],
      features: [
        'Role-based workflows for company admins, school admins, and staff',
        'Alert submission, notification, acknowledgement, and resolution',
        'Email and SMS notifications using Gmail and ClickSend',
        'Client- and server-side validation with automated tests',
        'Ownership of end-to-end production deployment'
      ],
      github: '',
      demo: ''
    },
    {
      title: 'MelbBank',
      subtitle: 'Full-Stack Digital Banking Platform',
      description: 'A comprehensive full-stack digital banking platform designed to provide a secure and seamless banking experience. Integrates customer banking, financial management, and administrative operations through dedicated portals with role-based access control.',
      image: 'assets/projects/melb-bank.svg',
      stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      features: [
        'Authentication & Security: JWT authentication, role-based authorization, password management, and session management.',
        'Account Management: Savings, current, and joint accounts, account opening requests, balance enquiries, and account statements.',
        'Money Transfers: Internal and external transfers, beneficiary management, scheduled and recurring transfers, transaction history, and receipts.',
        'Payments & Cards: Bill payments, BPAY and PayID simulations, debit and credit card management, card freezing, and spending limits.',
        'Loans & Fixed Deposits: Loan applications, repayment schedules, EMI calculators, fixed deposit management, and interest calculations.',
        'Financial Analytics: Budget tracking, spending analysis, income and expense reports, financial insights, and interactive dashboards.',
        'Admin Portal: Customer and account management, transaction monitoring, loan approvals, reporting, audit logs, and system configuration.'
      ],
      details: [
        {
          title: 'Technical Architecture & Engineering',
          items: [
            'Modular Design: Organised banking functionality into independent modules with dedicated controllers, services, repositories, entities, and DTOs.',
            'REST API Development: Designed APIs to connect the Angular frontend with Spring Boot backend services.',
            'Security: Implemented JWT authentication, role-based authorization, and protected API endpoints.',
            'Database Management: Used PostgreSQL with Spring Data JPA to manage banking data and entity relationships.',
            'Transaction Management: Designed transaction processing with balance validation, transfer records, and database transaction consistency.',
            'Error Handling & Validation: Applied request validation, structured exception handling, and consistent API responses.',
            'Code Quality: Applied separation of concerns, reusable components, and established software engineering practices.'
          ]
        },
        {
          title: 'Technology Stack',
          items: [
            'Backend: Java, Spring Boot, Spring Security, Spring Data JPA, REST APIs',
            'Frontend: Angular, Angular Material, TypeScript',
            'Database: PostgreSQL',
            'Security: JWT Authentication, Role-Based Access Control',
            'Tools: Maven, Swagger/OpenAPI, Git, Postman'
          ]
        }
      ],
      github: '',
      demo: ''
    },
    {
      title: 'Home Hunt',
      subtitle: 'Rental Property Management Platform',
      description: 'Full-stack web application for property listing, search, and rental applications using Spring Boot, Angular, and PostgreSQL.',
      image: 'assets/projects/home-hunt.svg',
      stack: ['Java','Spring Boot', 'Angular', 'PostgreSQL'],
      features: ['Property listing', 'Property search', 'Rental applications'],
      github: '',
      demo: ''
    },

    {
      title: 'Web Content Summarizer',
      subtitle: 'Chrome Extension',
      description: 'Chrome extension to extract and summarize web content using AI APIs with backend integration via Spring Boot.',
      image: 'assets/projects/ai-summarizer.svg',
      stack: ['Java','Chrome Extension', 'AI APIs', 'Spring Boot'],
      features: ['Web content extraction', 'AI-powered summarization', 'Spring Boot backend integration'],
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
