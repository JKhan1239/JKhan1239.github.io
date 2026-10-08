/* =========================================================
   PORTFOLIO CONTENT + CONFIG  —  edit this file only.
   Everything on the site is rendered from the data below.
   ========================================================= */
window.PORTFOLIO = {
  /* ---------- CONFIG ---------- */
  config: {
    name: "Junaid Khan",
    title: "Python Full-Stack Developer",
    email: "khan.junaid.122399@gmail.com",
    phone: "+1 (913)-222-4198",

    // Replace "#" with your real profile URLs. While they are "#", the
    // buttons show a friendly "add your link" message instead of navigating.
    linkedin: "https://www.linkedin.com/in/junaid-khan-110713433/", // e.g. "https://www.linkedin.com/in/your-handle"
    github: "https://github.com/JKhan1239",   // e.g. "https://github.com/your-username"

    // Resume file (put your PDF at this path, relative to index.html).
    resumePath: "C:\Users\junai\OneDrive\Documents\Junaid_Khan_Portfolio/Junaid_Khan_Resume.pdf",

    // GitHub integration: set your username to load public repos live.
    // Leave "" to hide the live repos and show the featured projects only.
    githubUsername: "",
    githubRepoLimit: 6,

    // Contact form: paste a Formspree / Getform / Basin endpoint URL.
    // Leave "" to fall back to opening the visitor's email app (mailto).
    formEndpoint: "" // e.g. "https://formspree.io/f/xxxxxxx"
  },

  /* ---------- HERO ROTATING WORDS ---------- */
  roles: [
    "scalable web applications",
    "RESTful APIs",
    "automation solutions",
    "data-driven systems"
  ],

  /* ---------- HERO FLOATING TECH LABELS ---------- */
  heroTech: ["Python", "Django", "Flask", "FastAPI", "React", "AWS", "PostgreSQL", "Docker"],

  /* ---------- WHAT I DO ---------- */
  whatIDo: [
    { icon: "server",  title: "Backend Development",   text: "Scalable Python services with Django, Flask and FastAPI, built around clean business logic." },
    { icon: "plug",    title: "API Development",       text: "RESTful APIs with authentication, validation, structured logging and third-party integration." },
    { icon: "layers",  title: "Full-Stack Development",text: "React, Angular, TypeScript, jQuery and Django Templates wired to Python back ends." },
    { icon: "database",title: "Data Processing",       text: "Ingestion, validation and transformation pipelines using Pandas, NumPy and SQL databases." },
    { icon: "cloud",   title: "Cloud & DevOps",        text: "AWS-hosted applications, Docker containers and CI/CD deployment workflows." },
    { icon: "check",   title: "Test Automation",       text: "Unit, integration and API testing with PyTest and Postman." }
  ],

  /* ---------- SKILLS ----------
     filter: which filter chip the group belongs to */
  skillFilters: ["All", "Python", "Frontend", "Backend", "Database", "Cloud", "Testing"],
  skills: [
    { group: "Programming",       filter: "Python",   items: ["Python", "JavaScript", "SQL", "TypeScript"] },
    { group: "Python Technologies",filter: "Python",  items: ["Django", "Flask", "FastAPI", "Django REST Framework", "Pandas", "NumPy", "Requests", "Pydantic"] },
    { group: "Frontend",          filter: "Frontend", items: ["React", "Angular", "jQuery", "AJAX", "Django Templates", "HTML5", "CSS3"] },
    { group: "Backend",           filter: "Backend",  items: ["REST APIs", "Web Services", "API Integration", "Microservices", "Object-Oriented Programming", "Data Processing", "Data Validation", "Business Logic"] },
    { group: "Databases",         filter: "Database", items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "MongoDB", "Redis"] },
    { group: "Testing",           filter: "Testing",  items: ["PyTest", "Unit Testing", "Integration Testing", "API Testing", "Postman", "Mocking", "Test Automation"] },
    { group: "Cloud & DevOps",    filter: "Cloud",    items: ["AWS", "Amazon EC2", "Amazon S3", "AWS Lambda", "CloudWatch", "Docker", "Kubernetes", "Jenkins", "GitHub", "GitLab", "Linux", "CI/CD"] }
  ],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      company: "BMO U.S.",
      location: "Chicago, IL",
      dates: "September 2024 – Present",
      role: "Python Developer",
      project: "Financial Transaction Processing Application",
      description: "Developed a Python-based financial transaction processing application to automate transaction ingestion, validation, transformation, reconciliation, and reporting. Built RESTful APIs using FastAPI and developed interactive React and TypeScript interfaces for transaction submission, processing status, and results monitoring. Used Pandas for financial data processing and PostgreSQL for persistent transaction data. Implemented AWS-based application services, Docker containers, structured logging, exception handling, and PyTest-based unit and integration testing.",
      stack: ["Python", "FastAPI", "Django", "Flask", "React", "TypeScript", "Pandas", "NumPy", "PostgreSQL", "AWS", "Docker", "PyTest", "Postman"],
      highlights: ["React & TypeScript interfaces", "FastAPI & Django services", "Financial data processing", "AWS & Docker", "API testing", "CI/CD"],
      responsibilities: [
        "Developed responsive web interfaces using React, TypeScript, CSS, and modern UI components, integrating frontend workflows with Python-based REST services and financial applications.",
        "Built interactive transaction screens that allowed users to submit files, monitor processing status, review validation results, and retrieve financial transaction information.",
        "Designed and developed scalable backend applications using Python, FastAPI, and Django to support transaction processing, business logic, and application integrations.",
        "Developed RESTful APIs and Python services for transaction validation, data transformation, reconciliation, and communication with internal and external applications.",
        "Implemented React components and asynchronous API communication to retrieve backend data, handle user interactions, and dynamically update application content.",
        "Developed reusable frontend components and client-side validation to improve usability, data accuracy, and consistency across financial application workflows.",
        "Developed Python Flask services for supporting lightweight backend applications, API integrations, request handling, and business-process workflows alongside FastAPI-based services.",
        "Used Pandas and NumPy to process, transform, validate, and analyze large financial datasets while implementing reusable Python modules and business rules.",
        "Implemented API authentication, structured logging, exception handling, configuration management, and reusable Python utilities to improve application reliability.",
        "Developed and supported cloud-based Python applications using AWS services for application hosting, cloud storage, monitoring, and automated processing workloads.",
        "Configured Docker-based development environments and supported CI/CD workflows for building, testing, packaging, and promoting Python applications across environments.",
        "Created comprehensive unit and integration tests using PyTest to validate Python business logic, REST APIs, data-processing workflows, and error-handling scenarios.",
        "Used Postman and automated API testing to validate request/response behavior, troubleshoot integration issues, and verify REST endpoint functionality.",
        "Deployed Python applications and API services through CI/CD pipelines, troubleshooting deployment issues and supporting applications across development, QA, and production environments."
      ]
    },
    {
      company: "Legacy Health",
      location: "Portland",
      dates: "August 2022 – August 2024",
      role: "Python Developer",
      project: "Healthcare Data Processing Platform",
      description: "Developed a Python and Django-based healthcare data processing platform to ingest, validate, transform, and standardize data from multiple systems. Built Angular and TypeScript interfaces for data submission, validation results, and processing-status monitoring. Developed REST APIs to connect frontend applications with Python backend services and used Pandas for large-scale data transformation. Implemented PostgreSQL data storage, AWS cloud services, application logging, exception handling, and automated testing using PyTest.",
      stack: ["Python", "Django", "Flask", "FastAPI", "Angular", "TypeScript", "Pandas", "NumPy", "PostgreSQL", "AWS", "Docker", "PyTest", "Postman"],
      highlights: ["Healthcare data processing", "Data ingestion & validation", "Data transformation", "Angular frontend", "Python backend", "Automated testing"],
      responsibilities: [
        "Developed healthcare web interfaces using Angular, TypeScript, CSS, and reusable UI components, integrating frontend workflows with Python REST APIs.",
        "Developed backend services using Python, Flask, FastAPI, and Django to process, validate, transform, and standardize data received from multiple systems.",
        "Designed RESTful APIs and reusable Python modules for data ingestion, business-rule validation, transformation, reporting, and application integration.",
        "Used Pandas and NumPy to process large datasets and implemented Python exception handling, logging, configuration management, and reusable utility modules.",
        "Implemented Angular services and HTTP communication to retrieve healthcare information from backend Python services and dynamically present processing results.",
        "Created reusable Angular components, forms, and client-side validation functionality to improve data-entry accuracy and application usability.",
        "Built and enhanced Flask-based REST services using Python, implementing route handling, request validation, JSON responses, exception handling, and integration with healthcare data-processing workflows.",
        "Deployed Python applications and APIs in AWS environments and supported cloud resources used for application hosting, storage, monitoring, and automated processing.",
        "Used Docker to containerize Python applications and supported CI/CD pipelines for automated application builds, testing, packaging, and environment deployments.",
        "Developed unit and integration tests using PyTest to validate Python business logic, data-processing workflows, API endpoints, and integration scenarios.",
        "Used Postman and automated API testing to verify REST services, troubleshoot request/response issues, and validate application functionality.",
        "Supported application deployments across development, QA, and production environments, investigating configuration issues and resolving runtime problems."
      ]
    },
    {
      company: "Nordstrom",
      location: "Seattle, WA",
      dates: "November 2020 – July 2022",
      role: "Python Developer",
      project: "Retail Inventory Application",
      description: "Developed a Python-based retail inventory application that automated inventory file processing, product validation, data transformation, reporting, and integration with external inventory services. Built web interfaces using Django Templates, jQuery, and AJAX to provide dynamic inventory information and reporting capabilities. Developed REST APIs using Flask and Django and used Pandas for inventory data processing and reconciliation. Implemented MySQL for data persistence, AWS for application hosting, Docker for containerization, and PyTest for automated testing.",
      stack: ["Python", "Flask", "Django", "jQuery", "AJAX", "Pandas", "NumPy", "MySQL", "AWS", "Docker", "PyTest"],
      highlights: ["Inventory processing", "Product validation", "Inventory reconciliation", "REST APIs", "Django Templates", "Automated testing"],
      responsibilities: [
        "Developed retail web interfaces using jQuery, AJAX, CSS, and server-rendered Django templates, integrating product and inventory workflows with Python applications.",
        "Developed Python backend services using Flask and Django to support inventory processing, product workflows, reporting, and application integrations.",
        "Built RESTful APIs and reusable Python modules for data extraction, transformation, validation, reporting, and communication with external retail services.",
        "Used Pandas and NumPy to process inventory datasets and implemented Python logging, exception handling, file processing, and automated business workflows.",
        "Implemented AJAX-based functionality to retrieve inventory and product information from Python APIs and dynamically update web application screens without full-page refreshes.",
        "Developed reusable UI components and client-side validation for inventory management, product information, and reporting workflows.",
        "Supported AWS-based application environments and used Docker to package Python services for consistent development, testing, and deployment across environments.",
        "Created unit and integration tests using PyTest and validated REST API functionality using Postman, ensuring application changes met functional and integration requirements.",
        "Used Git for source-code management and participated in code reviews, defect resolution, Agile development activities, and collaborative release processes.",
        "Deployed Python applications and automation services through CI/CD processes and supported Linux-based runtime environments for scheduled inventory-processing jobs."
      ]
    },
    {
      company: "Sutherland Global Services",
      location: "Mumbai, India",
      dates: "July 2018 – October 2020",
      role: "Python Developer",
      project: "Reusable Python API and Automation Framework",
      description: "Designed and developed a reusable Python framework for building REST APIs, web applications, and backend automation workflows. Implemented modular Python components for authentication, configuration management, logging, validation, API integration, and business logic using Flask, FastAPI, and Django. Developed lightweight web interfaces using JavaScript and jQuery with JSON-based communication between frontend and backend services. Integrated PostgreSQL for application data, Docker for deployment, and PyTest for unit and integration testing.",
      stack: ["Python", "Django", "Flask", "FastAPI", "JavaScript", "jQuery", "PostgreSQL", "Docker", "PyTest", "Postman"],
      highlights: ["REST API development", "Backend automation", "Data processing", "API integration", "PostgreSQL", "PyTest & Postman"],
      responsibilities: [
        "Developed Python applications using Django and Flask, implementing business logic, REST APIs, data processing, automation, and third-party service integrations.",
        "Created reusable Python modules and scripts for file processing, data validation, transformation, report generation, and recurring business operations.",
        "Developed server-rendered web applications using Django Templates, jQuery, AJAX, CSS, and JSON-based communication with Python backend services.",
        "Implemented dynamic web functionality using jQuery and AJAX to retrieve application data and improve user interaction within business workflows.",
        "Used Pandas and NumPy for data manipulation and transformation while implementing logging, exception handling, and configurable application workflows.",
        "Supported cloud-hosted Python applications and used Docker-based environments to package applications and maintain consistent development and testing environments.",
        "Created unit and integration tests using PyTest and used Postman to test REST APIs, validate responses, and troubleshoot backend integration issues.",
        "Managed source code using Git and supported application deployment to Linux-based environments, troubleshooting runtime issues and assisting with production releases."
      ]
    }
  ],

  /* ---------- FEATURED (SAMPLE) PROJECTS ----------
     These are portfolio / sample projects. Set demo and repo to real URLs
     when ready; "#" keeps the buttons as placeholders. */
  projectFilters: ["All", "Full-Stack", "Backend", "Data", "Cloud"],
  projects: [
    {
      id: "financial-transactions",
      title: "Financial Transaction Processing System",
      tags: ["Full-Stack", "Data", "Cloud"],
      short: "Ingest, validate, transform and reconcile transaction files, then monitor results from a React dashboard.",
      stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Pandas", "AWS", "Docker"],
      features: ["Transaction ingestion", "Validation", "Transformation", "Reconciliation", "Reporting", "REST APIs", "Dashboard"],
      overview: "A sample application that automates the lifecycle of financial transaction files: ingestion, validation, transformation, reconciliation and reporting, with a dashboard for submitting files and monitoring processing status.",
      problem: "Transaction data arrives in different files and formats, and manual checking is slow and error-prone. Teams need clear validation feedback and dependable reconciliation.",
      solution: "A FastAPI service accepts files, validates them with Pydantic rules, transforms and reconciles the data with Pandas, and stores results in PostgreSQL. A React and TypeScript dashboard shows status, validation results and reports.",
      arch: [
        ["Frontend", "React + TypeScript dashboard for file submission, processing status and results."],
        ["REST API", "FastAPI endpoints with authentication, request validation and structured error responses."],
        ["Python Backend", "Pandas and NumPy pipeline for validation, transformation and reconciliation."],
        ["Database", "PostgreSQL storing transactions, validation results and reconciliation outcomes."],
        ["Cloud Services", "Docker containers on AWS with S3 file storage and CloudWatch monitoring."]
      ],
      challenges: ["Reporting row-level validation errors clearly without overwhelming the user.", "Keeping large file processing responsive through asynchronous status updates.", "Making reconciliation rules configurable and testable."],
      future: ["Role-based access control", "Scheduled and event-driven processing", "Exportable audit reports"],
      demo: "#", repo: "#"
    },
    {
      id: "healthcare-data",
      title: "Healthcare Data Processing Platform",
      tags: ["Full-Stack", "Data", "Backend"],
      short: "Standardize data from multiple systems with validation, processing status tracking and reporting.",
      stack: ["Python", "Django", "FastAPI", "Angular", "PostgreSQL", "Pandas", "AWS"],
      features: ["Data ingestion", "Validation", "Standardization", "Processing status", "API integration", "Data reporting"],
      overview: "A sample platform that ingests data from multiple source systems, validates it, standardizes it into a common structure and reports on processing outcomes. It uses synthetic, non-sensitive data only.",
      problem: "Data from different systems uses different layouts and quality levels, which makes consolidated reporting unreliable.",
      solution: "Django and FastAPI services ingest and validate incoming records, Pandas standardizes them, PostgreSQL stores the results, and an Angular interface shows processing status and validation outcomes.",
      arch: [
        ["Frontend", "Angular + TypeScript interface for data submission and status monitoring."],
        ["REST API", "REST endpoints connecting the UI and external systems to processing services."],
        ["Python Backend", "Django and FastAPI services applying validation and standardization rules."],
        ["Database", "PostgreSQL storing standardized records and processing history."],
        ["Cloud Services", "AWS-hosted services for storage, monitoring and automated processing."]
      ],
      challenges: ["Defining a common data model across inconsistent sources.", "Surfacing processing failures in a way users can act on.", "Keeping validation rules maintainable as sources grow."],
      future: ["Pluggable source connectors", "Data quality scorecards", "Retry and replay of failed batches"],
      demo: "#", repo: "#"
    },
    {
      id: "retail-inventory",
      title: "Retail Inventory Management System",
      tags: ["Full-Stack", "Backend", "Data"],
      short: "Manage products and stock with file processing, validation, reconciliation and reporting.",
      stack: ["Python", "Flask", "Django", "jQuery", "AJAX", "MySQL", "Pandas", "AWS"],
      features: ["Inventory management", "Product validation", "File processing", "Inventory reconciliation", "Reporting", "REST APIs"],
      overview: "A sample inventory application with server-rendered pages enhanced by AJAX, REST APIs for integration, and automated processing of inventory files.",
      problem: "Inventory files from different sources must be checked and reconciled against product data before reports can be trusted.",
      solution: "Flask and Django services process uploaded files with Pandas, validate products, reconcile quantities in MySQL and expose results through REST APIs and AJAX-powered pages.",
      arch: [
        ["Frontend", "Django Templates with jQuery and AJAX for dynamic updates without page reloads."],
        ["REST API", "Flask and Django REST endpoints for products, stock and reports."],
        ["Python Backend", "Pandas-based file processing, product validation and reconciliation logic."],
        ["Database", "MySQL persisting products, stock levels and reconciliation results."],
        ["Cloud Services", "AWS hosting with Docker-packaged services and scheduled processing jobs."]
      ],
      challenges: ["Handling malformed inventory files gracefully.", "Reconciling quantities consistently across sources.", "Keeping page updates fast with partial AJAX refreshes."],
      future: ["Low-stock alerts", "Barcode scanning support", "Report scheduling"],
      demo: "#", repo: "#"
    },
    {
      id: "api-automation-framework",
      title: "Python REST API & Automation Framework",
      tags: ["Backend", "Cloud"],
      short: "A reusable framework for REST services and automation workflows with authentication, validation and logging.",
      stack: ["Python", "FastAPI", "Flask", "Django", "PostgreSQL", "Docker", "PyTest"],
      features: ["REST API framework", "Authentication", "Validation", "Logging", "Configuration", "Automation", "Testing"],
      overview: "A modular framework that standardizes how REST APIs and automation jobs are built: shared authentication, configuration, logging, validation and testing utilities.",
      problem: "Repeating the same plumbing across services leads to inconsistent behavior and slower delivery.",
      solution: "Reusable Python modules provide authentication, configuration, structured logging and validation, with Docker packaging and a PyTest suite covering the shared components.",
      arch: [
        ["Frontend", "Lightweight JavaScript and jQuery clients, or any consumer of the JSON API."],
        ["REST API", "Flask, FastAPI or Django endpoints built on shared framework components."],
        ["Python Backend", "Reusable modules for auth, config, logging, validation and business logic."],
        ["Database", "PostgreSQL for application data and automation job records."],
        ["Cloud Services", "Docker-based deployment with CI/CD running the PyTest suite."]
      ],
      challenges: ["Keeping the framework flexible across three web frameworks.", "Designing configuration that works across environments.", "Maintaining good test coverage of shared modules."],
      future: ["Project scaffolding command", "OpenAPI-based client generation", "Plugin system for integrations"],
      demo: "#", repo: "#"
    },
    {
      id: "developer-analytics",
      title: "Developer Data Analytics Dashboard",
      tags: ["Full-Stack", "Data"],
      short: "Upload datasets, explore them in an interactive dashboard, and filter and export reports.",
      stack: ["Python", "FastAPI", "React", "Pandas", "PostgreSQL", "Docker"],
      features: ["Data ingestion", "Interactive dashboard", "REST APIs", "Data analytics", "Filtering", "Reporting"],
      overview: "A sample analytics dashboard where datasets are ingested through an API, analyzed with Pandas and explored through interactive filters in a React interface.",
      problem: "Raw data is hard to explore without custom scripts, and sharing findings means repeating manual work.",
      solution: "FastAPI ingests and aggregates data with Pandas, PostgreSQL stores the results, and React renders filterable views and downloadable reports.",
      arch: [
        ["Frontend", "React dashboard with interactive filters and tables."],
        ["REST API", "FastAPI endpoints for ingestion, aggregation and report retrieval."],
        ["Python Backend", "Pandas analytics and aggregation services."],
        ["Database", "PostgreSQL for datasets, aggregates and saved reports."],
        ["Cloud Services", "Docker containers deployable to a cloud environment."]
      ],
      challenges: ["Keeping the dashboard responsive on larger datasets.", "Designing filter parameters that map cleanly to queries.", "Validating uploaded data safely."],
      future: ["Saved dashboard views", "Scheduled report delivery", "Additional chart types"],
      demo: "#", repo: "#"
    }
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    { degree: "Master's in Computer Science", school: "University of Central Missouri", place: "Warrensburg, Missouri" },
    { degree: "Bachelor's in Computer Science", school: "JNTUH", place: "Hyderabad, India" }
  ]
};
