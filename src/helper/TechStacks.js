import UIUXimg from "../assets/rectangle.png"
import Mobileimg from "../assets/mobile.png"
import DevOpsImg from "../assets/devops.png"
import DesktopImg from "../assets/workstation.png"
import ProjctMngImg from "../assets/training.png"
import HRimg from "../assets/support.png"
import SalesImg from "../assets/frame.png"
import AiImg from "../assets/Chatbot.png"
import WebDevImg from "../assets/Website.png"
import image11 from "../assets/Idea.png"
import SecurityImg from "../assets/denied.png"
import EntrepreneurImg from "../assets/new-entrepreneurship.png"
import image15 from "../assets/icon.png"
import image2 from "../assets/software.png"

export const UiUx = {
    title: "UI/UX Design",
    image: UIUXimg,
    sections: [
        {
            title: "",
            options: [
                "Adobe XD",
                "Sketch",
                "Figma",
                "InVision",
                "Principle",
                "FlintO",
                "Proto.io",
                "Balsamiq",
                "Axure Rp",
                "UserTesting",
                "Optimal Workshop",
                "Zeplin",
                "Marvel",
            ],
        },
    ],
}

export const MobileDev = {
    title: "Mobile Development",
    image: Mobileimg,
    sections: [
        {
            title: "Platform",
            options: ["IOS", "Android", "Cross platform", "Hybrid"],
        },
        {
            title: "Language",
            options: [
                "Swift or Objective-C",
                "Kotlin or Java",
                "JavaScript",
                "React framework",
                "Flutter",
                "Dart",
                "C",
                "Damarin",
                "HTML5",
                "CSS",
                "Javascript",
            ],
        },
        {
            title: "Development Environment",
            options: [
                "X-Code",
                "Android studio",
                "Visual Studio Code",
                "Android Studio/IntelliJ IDEA for Flutter",
            ],
        },
        {
            title: "UI framework",
            options: ["UI kit", "Android SDK with XML"],
        },
        {
            title: "Version Control",
            options: ["GIT"],
        },
        {
            title: "Database",
            options: ["Core data", "Realm", "SQL Lite", "Mongo DB"],
        },
        {
            title: "Networking",
            options: [
                "URL Session",
                "Alamo Fire",
                "Retro fit",
                "Volley",
                "Axios(React Native)",
                "DIO(Flutter)",
                "Angular HTTP",
                "Ajax",
            ],
        },
        {
            title: "Deployment and Distribution",
            options: ["Test flight", "App store connect"],
        },
        {
            title: "Testing and Debugging",
            options: ["Junit", "Expresso", "XC test", "LLDB"],
        },
        {
            title: "Dependency management",
            options: ["Gradle", "Maven", "Cocoa pods", "Swift package manager"],
        },
    ],
}

export const DevOps = {
    title: "DevOps",
    image: DevOpsImg,
    sections: [
        {
            title: "Version control",
            options: ["GIT"],
        },
        {
            title: "Continuous Integration/Continuous Deployment (CI/CD)",
            options: ["Jenkins", "Travis CI", "Circle CI"],
        },
        {
            title: "Containerization and Orchestration",
            options: ["Docker", "Kubernetes"],
        },
        {
            title: "Configuration Management",
            options: ["Prometheus", "Grafana", "Elk Stack"],
        },
    ],
}

export const CloudComputing = {
    title: "Cloud computing",
    image: DevOpsImg,
    sections: [
        {
            title: "Platforms",
            options: [
                "Amazon Web Services",
                "Microsoft Azure",
                "Google cloud platform",
                "IBM cloud",
                "Digital ocean",
            ],
        },
        {
            title: "Infrastructure as code",
            options: [
                "Terraform",
                "AWS cloud formation",
                "Azure resource manager",
            ],
        },
        {
            title: "Serverless computing",
            options: [
                "AWS lambda",
                "Azure functions",
                "Google Cloud functions",
            ],
        },
        {
            title: "Database services",
            options: ["AWS RDS", "Azure SQL database", "Google Cloud SQL"],
        },
    ],
}

export const DesktopDevelopment = {
    title: "Desktop Development",
    image: DesktopImg,
    sections: [
        {
            title: "Operating System",
            options: ["Windows", "Max OS", "Linux", "Cross-platform"],
        },
        {
            title: "Programming language/framework",
            options: [
                "C",
                ".NET framework",
                ".NET core",
                "C++ with WIN 32 API",
                "Swift",
                "Objective C",
                "Electron",
                "QT",
                "C/C++ with GTK",
                "Python",
            ],
        },
        {
            title: "IDE",
            options: [
                "Visual Studio",
                "XCode",
                "Visual Studio Code",
                "QT creator",
                "UI frameworks",
                "Universal Windows platform",
                "Windows presentation foundation",
                "Cocoa/Cocoa touch",
            ],
        },
    ],
}

export const ProjectManagement = {
    title: "Project Management",
    image: ProjctMngImg,
    sections: [
        {
            title: "Project Management Tools",
            options: ["Jira", "Trello", "Asana"],
        },
        {
            title: "Communication and Collaboration",
            options: ["Slack", "Microsoft Teams"],
        },
        {
            title: "Version Control",
            options: ["GitLab", "GitHub", "BitBucket"],
        },
        {
            title: "Documentation and Wiki",
            options: ["Confluence", "Notion"],
        },
        {
            title: "Time Tracking",
            options: ["Harvest", "Toggl"],
        },
        {
            title: "Resource Management",
            options: ["Resource Guru", "Float"],
        },
        {
            title: "Issue Tracking",
            options: ["Bugzilla", "Redmine"],
        },
        {
            title: "Error Monitoring",
            options: ["Sentry", "Raygun"],
        },
        {
            title: "Analytics and Reporting",
            options: ["Google analytics", "Jira reports"],
        },
        {
            title: "Gantt Charts",
            options: ["TeamGantt", "GanttPRO"],
        },
    ],
}

export const HRandTalent = {
    title: "HR and Talent",
    image: HRimg,
    sections: [
        {
            title: "Applicant Tracking Systems (ATS)",
            options: ["Workday", "Greenhouse", "ICIMS"],
        },
        {
            title: "Human Resource Information Systems (HRIS)",
            options: ["BambooHR", "Namely", "ADP Workforce Now"],
        },
        {
            title: "Learning Management Systems (LMS)",
            options: ["CornerStone OnDemand", "SAP Litmos", "TalentLMS"],
        },
        {
            title: "Performance Management",
            options: ["Glint", "15Five", "Reflektive"],
        },
        {
            title: "Employee Engagement and Feedback",
            options: ["Culture Amp", "Officevibe", "Peakon"],
        },
        {
            title: "Remote Work and Productivity Tools",
            options: ["Slack", "Zoom", "Microsoft Teams"],
        },
    ],
}

export const SalesandMarketing = {
    title: "Sales and Marketing",
    image: SalesImg,
    sections: [
        {
            title: "Sales Management and Customer Data",
            options: [
                "Salesforce",
                "HubSpot CRM",
                "Zoho CRM",
                "Pipedrive",
                "Insightly",
                "Freshsales",
                "Copper (formerly ProsperWorks)",
                "Nimble",
                "SugarCRM",
            ],
        },
        {
            title: "Campaign Management and Lead Nurturing",
            options: [
                "HubSpot Marketing Hub",
                "Marketo",
                "Pardot (by Salesforce)",
                "ActiveCampaign",
                "Eloqua (by Oracle)",
                "SharpSpring",
                "Infusionsoft by Keap",
            ],
        },
        {
            title: "Email Campaigns and Automation",
            options: [
                "Mailchimp",
                "Constant Contact",
                "Campaign Monitor",
                "Sendinblue",
                "GetResponse",
                "AWeber",
                "Emma",
                "Drip",
            ],
        },
        {
            title: "Social Media Marketing and Analytics",
            options: [
                "Hootsuite",
                "Buffer",
                "Sprout Social",
                "Socialbakers",
                "Agorapulse",
                "Later",
                "Loomly",
                "CoSchedule",
            ],
        },
        {
            title: "Marketing Performance and Analytics",
            options: [
                "Google Analytics",
                "Adobe Analytics",
                "Tableau",
                "Mixpanel",
                "Kissmetrics",
                "Moz Analytics",
                "SEMrush",
                "Hotjar",
            ],
        },
        {
            title: "Website and Content Management",
            options: [
                "WordPress",
                "Drupal",
                "Joomla",
                "Wix",
                "Squarespace",
                "Shopify (for e-commerce)",
                "Magento (for e-commerce)",
                "Kentico",
            ],
        },
        {
            title: "Search Engine Optimization",
            options: [
                "SEMrush",
                "Moz",
                "Ahrefs",
                "Google Search Console",
                "Yoast SEO",
                "SE Ranking",
                "Serpstat",
                "SpyFu",
            ],
        },
        {
            title: "Online Advertising and PPC Management",
            options: [
                "Google Ads",
                "Facebook Ads Manager",
                "LinkedIn Ads",
                "Twitter Ads",
                "Microsoft Advertising (formerly Bing Ads)",
                "AdRoll",
                "Taboola",
                "Outbrain",
            ],
        },
        {
            title: "Event Planning and Management",
            options: [
                "Eventbrite",
                "Cvent",
                "Bizzabo",
                "Eventzilla",
                "Splash",
                "Whova",
                "Attendify",
            ],
        },
        {
            title: "Enhancements and Integration Tools",
            options: [
                "Zapier",
                "Integromat",
                "PieSync",
                "Automate.io",
                "Tray.io",
                "Stitch",
                "DataBox",
                "Funnel.io",
            ],
        },
        {
            title: "Internal and External Communication",
            options: [
                "Slack",
                "Microsoft Teams",
                "Zoom",
                "Skype",
                "GoToMeeting",
                "Webex Meetings",
                "BlueJeans",
            ],
        },
        {
            title: "Tools for Sales Productivity and Enablement",
            options: [
                "Outreach",
                "SalesLoft",
                "Gong",
                "Chorus.ai",
                "Highspot",
                "Seismic",
                "DocuSign",
                "PandaDoc",
            ],
        },
        {
            title: "Advanced Analytics and AI in CRM",
            options: [
                "Salesforce Einstein Analytics",
                "Zoho Analytics",
                "InsightSquared",
                "Clari",
                "Troops",
                "People.ai",
                "Gong.io",
            ],
        },
        {
            title: "Other Tools for Various Functions",
            options: [
                "SurveyMonkey (for surveys)",
                "DiscoverOrg (for B2B sales intelligence)",
                "Owler (business insights)",
                "Leadfeeder (website visitor tracking)",
                "Clearbit (data enrichment)",
                "SalesIntel (B2B contact data)",
            ],
        },
    ],
}

export const AIML = {
    title: "AI/ML",
    image: AiImg,
    sections: [
        {
            title: "Machine Learning Frameworks",
            options: [
                "TensorFlow",
                "PyTorch",
                "Scikit-learn",
                "Keras",
                "MXNet",
                "Caffe",
                "Theano",
                "Microsoft Cognitive Toolkit (CNTK)",
                "Accord.NET",
                "H2O.ai",
            ],
        },
        {
            title: "AI Development Platforms",
            options: [
                "IBM Watson",
                "Google Cloud AI Platform",
                "Microsoft Azure Machine Learning",
                "Amazon SageMaker",
                "Oracle AI Platform",
                "DataRobot",
                "Databricks",
            ],
        },
        {
            title: "Data Science and Analytics",
            options: [
                "Jupyter Notebook",
                "Pandas",
                "NumPy",
                "RStudio",
                "MATLAB",
                "KNIME",
                "SAS",
                "RapidMiner",
                "Apache Spark",
            ],
        },
        {
            title: "Natural Language Processing (NLP) Libraries",
            options: [
                "NLTK (Natural Language Toolkit)",
                "Spacy",
                "Gensim",
                "AllenNLP",
                "TextBlob",
                "Stanford CoreNLP",
                "Apache OpenNLP",
                "FastText",
                "Transformers (Hugging Face)",
            ],
        },
        {
            title: "Computer Vision Libraries",
            options: [
                "OpenCV",
                "Pillow",
                "Scikit-image",
                "SimpleCV",
                "Dlib",
                "Mahotas",
                "ImageAI",
                "OpenImaj",
            ],
        },
        {
            title: "Reinforcement Learning",
            options: [
                "OpenAI Gym",
                "Stable Baselines",
                "RLlib (Reinforcement Learning Library)",
                "Keras-RL",
                "Dopamine",
            ],
        },
        {
            title: "AutoML and Model Deployment",
            options: [
                "H2O.ai",
                "MLflow",
                "RLlib (Reinforcement Learning Library)",
                "Auto-Keras",
                "Ludwig",
                "Seldon",
                "DataRobot",
                "Dataiku",
            ],
        },
        {
            title: "AI Ethics and Fairness",
            options: [
                "AI Fairness 360",
                "Ethical AI Toolkit (Microsoft)",
                "Aequitas",
                "Fairness Indicators (TensorFlow)",
                "IBM Trusted AI",
            ],
        },
        {
            title: "AIaaS (AI as a Service)",
            options: [
                "AWS AI Services",
                "Azure Cognitive Services",
                "Google Cloud AI Services",
                "IBM Cloud AI",
                "Salesforce Einstein AI",
                "Algorithmia",
                "Clarifai",
                "Nimbella",
            ],
        },
        {
            title: "Miscellaneous AI Tools",
            options: [
                "Fast.ai",
                "XGBoost",
                "LightGBM",
                "CatBoost",
                "Prophet",
                "Ludwig",
                "ELKI",
                "Mlxtend",
                "TPOT",
            ],
        },
    ],
}

export const FrontendDev = {
    title: "Frontend Development",
    image: WebDevImg,
    sections: [
        {
            title: "Languages",
            options: ["HTML5", "CSS3", "JavaScript"],
        },
        {
            title: "Frameworks and Libraries",
            options: [
                "React.js",
                "Angular",
                "Vue.js",
                "jQuery",
                "Bootstrap",
                "Sass",
                "Next Js",
                "Less",
                "Tailwind CSS",
            ],
        },
        {
            title: "Build Tools",
            options: ["Webpack", "Babel", "Gulp", "Parcel", "Grunt"],
        },
        {
            title: "UI Component Libraries",
            options: [
                "Material-UI",
                "Ant Design",
                "Semantic UI",
                "Foundation",
                "Bulma",
                "Chakra UI",
            ],
        },
    ],
}

export const BackendDev = {
    title: "Backend Development",
    image: WebDevImg,
    sections: [
        {
            title: "Languages",
            options: [
                "JavaScript (Node.js)L5",
                "Python (Django, Flask)",
                "Ruby (Ruby on Rails)",
                "PHP (Laravel, Symfony)",
                "Java (Spring Boot)",
                "C# (ASP.NET Core)",
                "Go (GoLang)",
                "Rust",
            ],
        },
        {
            title: "Frameworks and Libraries",
            options: [
                "Express.js (for Node.js)",
                "Flask (for Python)",
                "Django (for Python)",
                "Ruby on Rails (for Ruby)",
                "Laravel (for PHP)",
                "ASP.NET Core (for C#)",
                "Spring Boot (for Java)",
                "Gin (for Go)",
                "Rocket (for Rust)",
            ],
        },
        {
            title: "Databases",
            options: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "SQLite",
                "Oracle",
                "Redis",
                "Firebase",
            ],
        },
    ],
}

export const FullStackDev = {
    title: "Full Stack Development",
    image: WebDevImg,
    sections: [
        {
            title: "Full-Stack Development Platforms",
            options: [
                "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
                "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
                "MEVN Stack (MongoDB, Express.js, Vue.js, Node.js)",
                "LAMP Stack (Linux, Apache, MySQL, PHP)",
                "Django (Python)",
                "Ruby on Rails (Ruby)",
            ],
        },
        {
            title: "CMS Platforms",
            options: [
                "WordPress",
                "Joomla",
                "Drupal",
                "Magento (for e-commerce)",
                "Shopify (for e-commerce)",
                "Squarespace",
                "Wix",
            ],
        },
        {
            title: "Hosting Services and Platforms",
            options: [
                "Amazon Web Services (AWS)",
                "Microsoft Azure",
                "Google Cloud Platform (GCP)",
                "Heroku",
                "Netlify",
                "DigitalOcean",
                "Linode",
            ],
        },
        {
            title: "Version Control Systems",
            options: ["Git", "GitHub", "GitLab", "Bitbucket"],
        },
        {
            title: "Testing and Debugging Tools",
            options: [
                "Jest",
                "Mocha",
                "Jasmine",
                "Enzyme",
                "Selenium",
                "Cypress",
                "Postman",
            ],
        },
        {
            title: "Miscellaneous Tools",
            options: [
                "Adobe Dreamweaver",
                "Visual Studio Code",
                "Sublime Text",
                "Notepad++",
                "Figma (for design collaboration)",
                "Sketch (for design collaboration)",
                "Zeplin (for design collaboration)",
            ],
        },
    ],
}

export const SecPriv = {
    title: "Security and Privacy",
    image: SecurityImg,
    sections: [
        {
            title: "Firewalls and Intrusion Detection/Prevention Systems (IDS/IPS)",
            options: [
                "Cisco ASA",
                "Palo Alto Networks",
                "Check Point Firewall",
                "Snort (Open-source IDS/IPS)",
            ],
        },
        {
            title: "VPN (Virtual Private Network)",
            options: ["Cisco AnyConnect", "OpenVPN", "NordVPN", "ExpressVPN"],
        },
        {
            title: "Antivirus and Malware Protection",
            options: [
                "Symantec Endpoint Protection",
                "McAfee Endpoint Security",
                "Kaspersky Endpoint Security",
                "Windows Defender",
            ],
        },
        {
            title: "Encryption Tools",
            options: [
                "VeraCrypt",
                "BitLocker (for Windows)",
                "FileVault (for macOS)",
            ],
        },
        {
            title: "Identity Verification and Authentication",
            options: [
                "Okta",
                "OneLogin",
                "Auth0",
                "Microsoft Azure Active Directory",
            ],
        },
        {
            title: "Web Application Firewalls (WAF)",
            options: ["Imperva WAF", "Cloudflare WAF", "Akamai WAF"],
        },
        {
            title: "Secure Development Practices",
            options: [
                "OWASP (Open Web Application Security Project) Guidelines",
                "Static Application Security Testing (SAST) tools like Checkmarx, Fortify",
            ],
        },
        {
            title: "Compliance Management Tools",
            options: [
                "ServiceNow Governance, Risk, and Compliance (GRC)",
                "RSA Archer",
                "IBM OpenPages",
            ],
        },
        {
            title: "Data Privacy and Protection",
            options: [
                "GDPR Compliance Tools",
                "CCPA Compliance Tools",
                "HIPAA Compliance Tools",
            ],
        },
        {
            title: "Threat Detection and Analysis",
            options: ["Splunk", "IBM QRadar", "AlienVault USM"],
        },
        {
            title: "Security Information and Event Management (SIEM)",
            options: [
                "LogRhythm",
                "ArcSight",
                "SolarWinds Security Event Manager",
            ],
        },
        {
            title: "Secure Messaging and Collaboration",
            options: [
                "Signal",
                "Wickr",
                "Telegram (Secret Chat)",
                "ProtonMail (Encrypted Email)",
            ],
        },
        {
            title: "Browsers Focused on Privacy",
            options: ["Brave", "Tor Browser", "DuckDuckGo Privacy Browser"],
        },
        {
            title: "Tools for Data Privacy",
            options: [
                "Privacy Badger (Browser Extension)",
                "Disconnect",
                "Ghostery",
            ],
        },
        {
            title: "Secure SDLC Practices",
            options: [
                "DevSecOps practices",
                "Secure code review tools like Veracode, SonarQube",
            ],
        },
    ],
}

export const DataAnalysis = {
    title: "Data and Analytics",
    image: DevOpsImg,
    sections: [
        {
            title: "Databases",
            options: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "SQL Server",
                "Oracle",
                "Cassandra",
                "Redis",
                "SQLite",
            ],
        },
        {
            title: "Data Warehousing",
            options: [
                "Amazon Redshift",
                "Google BigQuery",
                "Snowflake",
                "Microsoft Azure Synapse Analytics",
            ],
        },
        {
            title: "Data Lakes",
            options: [
                "Amazon S3",
                "Google Cloud Storage",
                "Azure Data Lake Storage",
            ],
        },
        {
            title: "ETL Tools",
            options: [
                "Apache NiFi",
                "Talend",
                "Informatica",
                "Apache Airflow",
                "AWS Glue",
            ],
        },
        {
            title: "Data Integration Platforms",
            options: ["MuleSoft", "Dell Boomi", "Zapier"],
        },
        {
            title: "Analytics Platforms",
            options: [
                "Tableau",
                "Microsoft Power BI",
                "QlikView/Qlik Sense",
                "Looker",
                "Domo",
            ],
        },
        {
            title: "Statistical Analysis and Visualization",
            options: [
                "R (RStudio)",
                "Python (Pandas, NumPy, Matplotlib, Seaborn)",
                "MATLAB",
                "Excel (with Power Query and Power Pivot)",
                "IBM SPSS",
                "SAS",
            ],
        },
        {
            title: "Big Data Processing and Analytics",
            options: [
                "Apache Hadoop",
                "Apache Spark",
                "Apache Kafka",
                "Google Dataflow",
                "Presto",
                "Flink",
                "Druid",
            ],
        },
        {
            title: "ML/AI Frameworks and Platforms",
            options: [
                "TensorFlow",
                "PyTorch",
                "Scikit-learn",
                "Keras",
                "IBM Watson",
                "Google AI Platform",
                "Microsoft Azure ML",
                "AWS SageMaker",
            ],
        },
        {
            title: "AutoML and Model Building",
            options: ["DataRobot", "H2O.ai", "Google AutoM", "Azure AutoML"],
        },
        {
            title: "Data Governance Platforms",
            options: [
                "Collibra",
                "Informatica Axon",
                "IBM InfoSphere Information Governance Catalog",
            ],
        },
        {
            title: "Real-time Data Streaming and Analytics",
            options: [
                "Apache Flink",
                "Apache Kafka Streams",
                "AWS Kinesis",
                "Google Cloud Dataflow",
            ],
        },
        {
            title: "Data Security Tools",
            options: [
                "Varonis",
                "Informatica Secure@Source",
                "Protegrity",
                "Privitar",
            ],
        },
        {
            title: "Data Masking and Encryption",
            options: [
                "TokenEx",
                "Dell EMC Cybersecurity",
                "Vormetric Data Security",
            ],
        },
    ],
}

export const Entrepreneurship = {
    title: "Entrepreneurship",
    image: EntrepreneurImg,
    sections: [
        {
            title: "Business Planning",
            options: ["LivePlan", "Bizplan", "StratPad", "Enloop"],
        },
        {
            title: "Project Management",
            options: ["Trello", "Asana", "Monday.com", "Basecamp"],
        },
        {
            title: "Communication Tools",
            options: ["Slack", "Microsoft Teams", "Zoom", "Google Meet"],
        },
        {
            title: "File Sharing and Collaboration",
            options: [
                "Google Workspace (formerly G Suite)",
                "Microsoft Office 365",
                "Dropbox Business",
                "Box",
            ],
        },
        {
            title: "Accounting and Invoicing",
            options: ["QuickBooks", "Xero", "FreshBooks", "Wave Financial"],
        },
        {
            title: "Payment Processing",
            options: ["PayPal", "Stripe", "Square", "Shopify Payments"],
        },
        {
            title: "Email Marketing",
            options: [
                "Mailchimp",
                "Constant Contact",
                "HubSpot Email Marketing",
                "Sendinblue",
            ],
        },
        {
            title: "CRM and Sales Management",
            options: ["Salesforce", "HubSpot CRM", "Zoho CRM", "Pipedrive"],
        },
        {
            title: "Website Builders",
            options: [
                "Wix",
                "Squarespace",
                "WordPress",
                "Shopify (for e-commerce)",
            ],
        },
        {
            title: "Social Media Management",
            options: ["Hootsuite", "Buffer", "Sprout Social", "Later"],
        },
        {
            title: "Digital Advertising",
            options: [
                "Google Ads",
                "Facebook Ads Manager",
                "LinkedIn Ads",
                "Twitter Ads",
            ],
        },
        {
            title: "Legal Services",
            options: ["LegalZoom", "Rocket Lawyer", "Clerky"],
        },
        {
            title: "Virtual Office Solutions",
            options: ["Regus", "WeWork", "VirtualPostMail"],
        },
        {
            title: "Networking and Education",
            options: [
                "Meetup",
                "LinkedIn Groups",
                "Startup Grind",
                "Coursera (for online courses)",
            ],
        },
        {
            title: "Business Analytics",
            options: ["Google Analytics", "Mixpanel", "Tableau", "Hotjar"],
        },
        {
            title: "Funding Platforms",
            options: ["Kickstarter", "Indiegogo", "AngelList", "SeedInvest"],
        },
    ],
}
