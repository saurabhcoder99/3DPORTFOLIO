// Central portfolio data store for Saurabh Kumar
// Strictly synchronized with Saurabh's verified resume, credentials, and GitHub profile (@saurabhcoder99)
import { careerData } from './careerData';

export const personalInfo = {
  name: "Saurabh Kumar",
  shortName: "SK",
  title: "Data Analyst | Data Science | Business Analyst",
  status: "Available for Opportunities",
  tagline: "Transforming complex datasets into strategic business decisions through predictive analytics, machine learning, and executive BI dashboards.",
  bio: [
    "I am a third-year Information Technology student at Rungta College of Engineering and Technology, Bhilai, specializing in Data Analytics, Data Science, and Business Intelligence.",
    "Passionate about transforming messy raw datasets into meaningful, actionable business insights. Highly proficient in SQL (LeetCode SQL 50 certified), Python, Advanced Excel, Power BI (DAX & Power Query), Exploratory Data Analysis (EDA), predictive statistical modeling, and business problem formulation."
  ],
  location: "Bhilai, India",
  email: "saurabhmka780@gmail.com",
  phone: "+91 8434889588",
  photo: "/images/saurabh_profile.jpg",
  socials: {
    github: "https://github.com/saurabhcoder99/",
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-b4699828b/",
    twitter: "https://x.com/home",
    email: "mailto:saurabhmka780@gmail.com"
  },
  resumeUrl: "/resume/saurabh_resume1.pdf"
};

export const stats = [
  { label: "Core Analytics Domains", value: 3, suffix: "" },
  { label: "Data & BI Tools", value: 16, suffix: "+" },
  { label: "Verified Credentials", value: 8, suffix: "" },
  { label: "Academic Batch", value: 2027, suffix: "" }
];

export const skillsData = [
  {
    category: "Data Analytics & BI",
    description: "Extracting insights, statistical modeling, ETL pipelines, and executive BI dashboards",
    skills: [
      { name: "Power BI (DAX)", level: 94, iconName: "TbChartBar", experience: "2+ yrs" },
      { name: "Power Query (ETL)", level: 90, iconName: "TbChartInfographic", experience: "2+ yrs" },
      { name: "Advanced Excel (Pivot/VLOOKUP)", level: 92, iconName: "SiMicrosoftexcel", experience: "3+ yrs" },
      { name: "SQL (Analytics & CTEs)", level: 94, iconName: "SiMysql", experience: "2.5 yrs" },
      { name: "Data Modeling & Star Schemas", level: 90, iconName: "VscDatabase", experience: "2+ yrs" },
      { name: "Tableau & Visuals", level: 82, iconName: "TbChartLine", experience: "1.5 yrs" }
    ]
  },
  {
    category: "Languages",
    description: "Core programming and query languages for algorithms, analytics, and software systems",
    skills: [
      { name: "Python", level: 92, iconName: "FaPython", experience: "3+ yrs" },
      { name: "SQL (MySQL / CTEs)", level: 94, iconName: "SiMysql", experience: "2.5 yrs" },
      { name: "DAX (Data Analysis Expressions)", level: 90, iconName: "TbChartBar", experience: "2+ yrs" },
      { name: "Java", level: 80, iconName: "FaJava", experience: "2+ yrs" },
      { name: "C Language", level: 78, iconName: "SiC", experience: "2+ yrs" }
    ]
  },
  {
    category: "Data Science & ML",
    description: "Data manipulation, statistical analysis, and machine learning libraries in Python",
    skills: [
      { name: "Pandas", level: 94, iconName: "SiPandas", experience: "2+ yrs" },
      { name: "NumPy", level: 90, iconName: "SiNumpy", experience: "2+ yrs" },
      { name: "Matplotlib", level: 92, iconName: "TbChartLine", experience: "2+ yrs" },
      { name: "Seaborn", level: 92, iconName: "TbChartInfographic", experience: "2+ yrs" },
      { name: "Scikit-Learn", level: 84, iconName: "SiScikitlearn", experience: "1.5 yrs" },
      { name: "Exploratory Data Analysis (EDA)", level: 95, iconName: "TbChartDots", experience: "2+ yrs" }
    ]
  },
  {
    category: "Databases & ETL",
    description: "High-performance relational schema design, query optimization, and data pipelines",
    skills: [
      { name: "MySQL / Relational DB", level: 92, iconName: "SiMysql", experience: "2.5 yrs" },
      { name: "PostgreSQL & SQLite", level: 84, iconName: "VscDatabase", experience: "2 yrs" },
      { name: "Database Normalization", level: 90, iconName: "VscDatabase", experience: "2 yrs" },
      { name: "Complex Joins & Window Functions", level: 94, iconName: "TbApi", experience: "2.5 yrs" }
    ]
  },
  {
    category: "Business Analysis",
    description: "Translating business requirements into KPI trees, retention matrices, and executive strategies",
    skills: [
      { name: "KPI Formulation & Dashboards", level: 92, iconName: "TbChartBar", experience: "2+ yrs" },
      { name: "Cohort & RFM Churn Analysis", level: 90, iconName: "TbChartInfographic", experience: "2 yrs" },
      { name: "Customer Segmentation", level: 92, iconName: "TbChartDots", experience: "2 yrs" },
      { name: "Data Storytelling & Reporting", level: 90, iconName: "TbChartLine", experience: "2+ yrs" },
      { name: "Market & Sales Trend Modeling", level: 88, iconName: "TbChartBar", experience: "2 yrs" }
    ]
  },
  {
    category: "Tools & Analytics Stack",
    description: "Version control, analytical environments, and workflow automation tools",
    skills: [
      { name: "Git & GitHub", level: 92, iconName: "FaGitAlt", experience: "3+ yrs" },
      { name: "Jupyter Notebook", level: 95, iconName: "SiJupyter", experience: "2.5 yrs" },
      { name: "Power BI Desktop", level: 94, iconName: "TbChartBar", experience: "2+ yrs" },
      { name: "VS Code", level: 95, iconName: "VscCode", experience: "3+ yrs" },
      { name: "Google Colab", level: 90, iconName: "SiJupyter", experience: "2+ yrs" }
    ]
  }
];

// Verified projects directly sourced from Saurabh Kumar's GitHub repository: https://github.com/saurabhcoder99/data-set
export const projectsData = [
  {
    id: "amazon-sales-dashboard",
    slug: "amazon-sales-dashboard",
    title: "Amazon Sales Report Dashboard",
    category: "Business Analyst",
    badge: "Power BI & DAX",
    description: "Interactive Power BI executive dashboard with end-to-end data cleaning, data modeling, dynamic DAX measures, and revenue KPIs.",
    overview: "Designed an end-to-end analytics platform to analyze over 500,000+ transaction records from multi-region Amazon operations. The dashboard provides stakeholders with instant visibility into key performance indicators (KPIs), return rates, customer demographics, and quarter-over-quarter revenue growth.",
    problem: "Executives lacked consolidated visibility across regional warehouses, leading to slow inventory turns and unoptimized regional discounting strategies.",
    solution: "Built a robust data pipeline utilizing SQL for data cleansing, complex aggregations, and Power BI for high-impact interactive visual dashboards with dynamic drill-through capabilities.",
    features: [
      "Real-time revenue, gross profit, and AOV (Average Order Value) KPI trackers",
      "Geographical heatmaps of shipping volume and delivery lead times",
      "Dynamic multi-level filtering by product category, date range, and seller rating",
      "Predictive trend forecasting using statistical moving averages"
    ],
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/saurabhcoder99/data-set/blob/main/amazon%20sales%20report.pbix",
    liveUrl: "https://github.com/saurabhcoder99/data-set/blob/main/amazon%20sales%20report.pbix",
    featured: true
  },
  {
    id: "customer-behaviour-analysis",
    slug: "customer-behaviour-analysis",
    title: "Customer Behaviour & Shopping Retention Analytics",
    category: "Data Analytics",
    badge: "Customer Analytics & BI",
    description: "Analyzed consumer shopping behaviour patterns, review ratings, purchase frequency, and cohort churn probability visualized in Power BI & Python.",
    overview: "An end-to-end customer analytics study leveraging transaction histories to segment buyers, calculate purchase frequency trends, discount impacts, and build targeted marketing cohort visualizations.",
    problem: "Marketing and product teams lacked granular visibility into customer churn warning signs, review sentiment trends, and purchase cadence shifts.",
    solution: "Wrote Python Pandas routines to calculate behavioural clusters and built interactive Power BI visual dashboards directly from customer shopping behavior records.",
    features: [
      "Demographic segmentation clustering customers across age, item purchased, and season",
      "Statistical evaluation of correlation between discount application and repeat orders",
      "Interactive Power BI dashboard with dynamic cross-filtering by product category",
      "Data-driven retention recommendations to maximize customer lifetime value (CLV)"
    ],
    technologies: ["Power BI", "Python", "Pandas", "Customer Analytics", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/saurabhcoder99/data-set/blob/main/customer_behavior_dashboard.pbix",
    liveUrl: "https://github.com/saurabhcoder99/data-set/blob/main/_customer%20behaviour.ipynb",
    featured: true
  },
  {
    id: "zomato-data-analysis",
    slug: "zomato-data-analysis",
    title: "Zomato Restaurant Exploratory Data Analysis",
    category: "Data Science",
    badge: "Python Statistical EDA",
    description: "Comprehensive exploratory data analysis (EDA) of restaurant ratings, cuisine popularities, pricing bands, and geographical distributions using Python.",
    overview: "Conducted exhaustive data cleaning, missing value imputation, and visual distribution mapping on thousands of restaurant records from Zomato. Visualized key dining trends across metropolitan locations.",
    problem: "Raw restaurant listings contained noisy unformatted rating strings, duplicate records, and missing cuisine metadata.",
    solution: "Engineered a Python data analysis pipeline utilizing Pandas for data wrangling and Seaborn/Matplotlib for distribution plots and correlation heatmaps.",
    features: [
      "Data preprocessing and cleansing of rating scales, currency normalizations, and missing cuisine tags",
      "Statistical heatmaps identifying correlation between cost-for-two and online delivery ratings",
      "Cuisine demand breakdown across key urban centers using Seaborn violin and box plots",
      "Synthesized actionable business recommendations for aspiring restaurant owners"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/saurabhcoder99/data-set/blob/main/_Zomato%20DataAnalysis.ipynb",
    liveUrl: "https://github.com/saurabhcoder99/data-set/blob/main/_Zomato%20DataAnalysis.ipynb",
    featured: true
  },
  {
    id: "cryptocurrency-dashboard",
    slug: "cryptocurrency-dashboard",
    title: "Cryptocurrency Market Intelligence Dashboard",
    category: "Business Analyst",
    badge: "FinTech BI Dashboard",
    description: "Interactive Power BI dashboard for cryptocurrency tracking, featuring automated data cleaning, DAX measures, and volatility trend indicators.",
    overview: "CryptoPulse tracks leading cryptocurrencies with historical volatility, moving averages, and market cap dominance metrics in an intuitive visual business intelligence environment.",
    problem: "Traders and financial analysts needed a clean visual cockpit to analyze cross-asset correlation and volatility spreads without platform clutter.",
    solution: "Engineered a reactive Power BI dashboard backed by structured financial modeling for rolling historical standard deviations and correlation matrices.",
    features: [
      "Interactive candlestick charts and moving averages (EMA 20/50/200)",
      "DAX calculated columns for daily return rates and drawdown risk factors",
      "Market cap dominance metrics, volume delta, and sentiment indicator integration",
      "Custom price alert triggers and dynamic date range slicers"
    ],
    technologies: ["Power BI", "DAX", "Data Modeling", "Excel", "Financial Analytics"],
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/saurabhcoder99/data-set/blob/main/CRYPTOCURRENCY%20DASHBOARD.pbix",
    liveUrl: "https://github.com/saurabhcoder99/data-set/blob/main/CRYPTOCURRENCY%20DASHBOARD.pbix",
    featured: true
  },
  {
    id: "titanic-eda-prediction",
    slug: "titanic-eda-prediction",
    title: "Titanic Survival Predictive Modeling & EDA",
    category: "Data Science",
    badge: "Machine Learning & EDA",
    description: "Exploratory Data Analysis and statistical survival pattern discovery on the Titanic dataset with feature engineering and predictive modeling in Python.",
    overview: "Investigated demographic, class, and family size influences on passenger survival probabilities. Performed feature engineering to extract titles, group ticket fares, and cabin deck locations.",
    problem: "Evaluating survival factors required addressing significant missing data in Age and Cabin fields, alongside non-linear interaction terms.",
    solution: "Cleaned data through median group imputation and engineered interaction variables to model survival likelihoods with statistical clarity.",
    features: [
      "Univariate, bivariate, and multivariate distribution plots illustrating survival ratios",
      "Feature engineering on passenger names, age imputation through group medians, and family size categorization",
      "Correlation matrix analyzing passenger class, fare, sex, and survival outcomes",
      "Baseline classification model evaluation comparing decision boundaries"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/saurabhcoder99/data-set/blob/main/titanic.ipynb",
    liveUrl: "https://github.com/saurabhcoder99/data-set/blob/main/titanic.ipynb",
    featured: true
  },
  {
    id: "data-set-hub",
    slug: "data-set-hub",
    title: "Data-Set: Analytics & Machine Learning Hub",
    category: "Data Analytics",
    badge: "GitHub Analytics Repo",
    description: "Curated open-source GitHub repository hosting business analytics datasets, Power BI report dashboards (.pbix), and Python exploratory notebooks.",
    overview: "Central repository maintained by Saurabh Kumar showcasing diverse real-world datasets across e-commerce sales, food delivery, cryptocurrency markets, customer retail behaviour, and maritime passenger histories.",
    problem: "Data practitioners often lack end-to-end repositories connecting raw business data directly to production .pbix reports and exploratory Jupyter notebooks.",
    solution: "Organized a clean, public repository structure combining raw CSV datasets, Power BI BI dashboards, and documented Jupyter analysis notebooks.",
    features: [
      "Amazon sales report .pbix dashboard file & raw transaction logs",
      "Customer shopping behaviour CSVs and retention dashboard files",
      "Zomato restaurant dataset & exploratory Jupyter analysis notebook",
      "Cryptocurrency market trend intelligence dashboard .pbix",
      "Titanic historical survival dataset and exploratory notebook"
    ],
    technologies: ["GitHub", "Power BI", "Python", "SQL", "Data Pipelines"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/saurabhcoder99/data-set",
    liveUrl: "https://github.com/saurabhcoder99/data-set",
    featured: true
  }
];

export const certificationsData = [
  {
    id: "pw-skills-data-analytics",
    title: "Data Analytics Certification",
    subtitle: "Professional Certificate of Completion",
    issuer: "PW Skills (PhysicsWallah)",
    date: "25th Sep 2025",
    category: "Data Analytics",
    credentialId: "PWSKILLS-DA-2025-SK",
    previewImage: "/certificates/previews/pw-skills-data-analytics-preview.webp",
    fileUrl: "/certificates/pw-skills-data-analytics.pdf",
    isPdf: true,
    description: "In-depth industrial data analytics program covering Python data analysis, statistical modeling, Exploratory Data Analysis (EDA), Advanced Excel, and Power BI dashboards.",
    skills: ["Python", "Data Analytics", "Power BI", "Advanced Excel", "Data Cleaning"],
    badgeColor: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    accentBorder: "border-blue-500/30"
  },
  {
    id: "leetcode-sql-50-study-plan",
    title: "SQL 50 Study Plan - Badge of Mastery",
    subtitle: "50 Essential SQL Analytical Problems Solved",
    issuer: "LeetCode",
    date: "1st Sep 2025",
    category: "SQL & Databases",
    credentialId: "LEETCODE-SQL50-SAURABH",
    previewImage: "/certificates/previews/leetcode-sql-50-preview.webp",
    fileUrl: "/certificates/leetcode-sql-50.png",
    isPdf: false,
    description: "Earned by mastering LeetCode's curated 50 SQL challenges covering complex multi-table joins, Window functions, CTEs (Common Table Expressions), ranking functions, subqueries, and aggregation queries.",
    skills: ["SQL", "CTEs", "Window Functions", "Query Optimization", "MySQL"],
    badgeColor: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
    accentBorder: "border-amber-500/30"
  },
  {
    id: "accenture-data-analytics-job-simulation",
    title: "Data Analytics and Visualization Job Simulation",
    subtitle: "Certificate of Completion",
    issuer: "Accenture North America / Forage",
    date: "September 2024",
    category: "Data Analytics",
    credentialId: "fM52277dG38y8cKwh",
    previewImage: "/certificates/previews/accenture-forage-preview.webp",
    fileUrl: "/certificates/accenture-data-analytics-forage.pdf",
    isPdf: true,
    description: "Completed comprehensive enterprise simulation advising a high-growth social media client. Performed data cleansing, data modeling, social content analysis, and prepared executive presentations uncovering top content categories and user engagement drivers.",
    skills: ["Data Modeling", "Data Visualization", "Client Presentation", "Insight Synthesis"],
    badgeColor: "from-purple-500/20 via-pink-500/10 to-indigo-500/20",
    accentBorder: "border-purple-500/30"
  },
  {
    id: "iit-bombay-cpp-training",
    title: "C++ Training Spoken Tutorial",
    subtitle: "Certificate for Completion of C++ Training",
    issuer: "IIT Bombay Spoken Tutorial Project (NMEICT, Govt. of India)",
    date: "25th April 2024",
    category: "Programming",
    credentialId: "3338356EPR",
    previewImage: "/certificates/previews/iit-bombay-cpp-preview.webp",
    fileUrl: "/certificates/iit-bombay-cpp.pdf",
    isPdf: true,
    description: "National mission certification passing the IIT Bombay invigilated examination on Object-Oriented Programming, memory management, pointers, and algorithmic logic.",
    skills: ["C++", "OOP", "Data Structures", "Algorithms"],
    badgeColor: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    accentBorder: "border-cyan-500/30"
  },
  {
    id: "great-learning-power-bi",
    title: "Power BI for Beginners",
    subtitle: "Certificate of Completion",
    issuer: "Great Learning Academy",
    date: "July 2024",
    category: "Business Intelligence",
    credentialId: "GL-PBI-2024-SK",
    previewImage: "/certificates/previews/great-learning-power-bi-preview.webp",
    fileUrl: "/certificates/great-learning-power-bi.pdf",
    isPdf: true,
    description: "Hands-on foundation in Power BI Desktop, Power Query editor, relational data modeling, custom calculated columns, and interactive dashboard layout design.",
    skills: ["Power BI", "Data Modeling", "Business Intelligence", "DAX Basics"],
    badgeColor: "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
    accentBorder: "border-yellow-500/30"
  },
  {
    id: "mindluster-advanced-sql",
    title: "Advanced SQL Database Design & Queries",
    subtitle: "Certificate of Completion",
    issuer: "MindLuster Academy",
    date: "June 2024",
    category: "SQL & Databases",
    credentialId: "ML-SQL-2024-SK",
    previewImage: "/certificates/previews/mindluster-sql-preview.webp",
    fileUrl: "/certificates/mindluster-sql.pdf",
    isPdf: true,
    description: "Advanced relational schema normalization, database triggers, stored procedures, indexing techniques, and analytical aggregation query engineering.",
    skills: ["Advanced SQL", "Schema Design", "Stored Procedures", "Query Tuning"],
    badgeColor: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    accentBorder: "border-emerald-500/30"
  },
  {
    id: "simplilearn-python-data-science",
    title: "Python for Data Science",
    subtitle: "SkillUp Certificate of Completion",
    issuer: "Simplilearn",
    date: "May 2024",
    category: "Data Science",
    credentialId: "SL-PYDS-2024-SK",
    previewImage: "/certificates/previews/simplilearn-python-preview.webp",
    fileUrl: "/certificates/simplilearn-python-data-science.pdf",
    isPdf: true,
    description: "Practical statistical analysis and exploratory data modeling using Python standard libraries (Pandas, NumPy, Matplotlib, Seaborn) for numerical computing.",
    skills: ["Python", "Pandas", "NumPy", "Statistical Visualization"],
    badgeColor: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    accentBorder: "border-sky-500/30"
  },
  {
    id: "wscube-ai-automation-workflow-analytics",
    title: "AI Automation Workflow for Data/Business Analytics",
    subtitle: "Certificate of Completion",
    issuer: "WsCube Tech (Upskilling Bharat)",
    date: "1st Aug 2026",
    category: "AI & Automation",
    credentialId: "WS/2026/M/58709",
    previewImage: "/certificates/previews/wscube-ai-automation-58709-preview.webp",
    fileUrl: "/certificates/wscube-ai-automation-analytics-58709.pdf",
    isPdf: true,
    description: "Advanced automation engineering integrating AI models with data analytics and business workflows for seamless, high-throughput intelligence delivery.",
    skills: ["Workflow Engineering", "Business Analytics", "Data Operations", "AI Integration"],
    badgeColor: "from-indigo-500/20 via-purple-500/10 to-pink-500/20",
    accentBorder: "border-indigo-500/30"
  }
];

export const servicesData = [
  {
    id: "data-analytics",
    title: "Data Analytics & Insights",
    iconName: "TbChartDots",
    tagline: "Actionable intelligence from raw complex datasets",
    description: "Transforming messy raw business data into structured statistical insights using Python (Pandas, NumPy), SQL queries, and predictive exploratory analysis.",
    features: ["Exploratory Data Analysis (EDA)", "Data cleansing & outlier detection", "Statistical hypothesis testing", "Cohort analysis & customer lifetime value"]
  },
  {
    id: "dashboard-development",
    title: "Executive BI Dashboards",
    iconName: "TbChartBar",
    tagline: "High-impact visual stories that drive executive decisions",
    description: "Designing interactive, drill-down dashboards in Microsoft Power BI and Tableau with custom DAX measures, automated refreshes, and dynamic filtering.",
    features: ["Custom DAX calculations & metrics", "Multi-source relational data modeling", "Automated scheduled data refreshes", "Interactive cross-filtering visuals"]
  },
  {
    id: "sql-engineering",
    title: "SQL & Relational Engineering",
    iconName: "VscDatabase",
    tagline: "High-performance relational queries and schema architectures",
    description: "Architecting normalized relational schemas in MySQL and writing high-efficiency analytical queries using CTEs, window functions, and subqueries.",
    features: ["Complex multi-table joins & subqueries", "Window functions & aggregate partitioning", "Schema indexing & query optimization", "ETL ingestion pipelines"]
  },
  {
    id: "python-automation",
    title: "Python Analytics & Automation",
    iconName: "FaPython",
    tagline: "Eliminate repetitive tasks with robust data scripts",
    description: "Developing automated Python data pipelines, Jupyter analytics routines, Excel report generators, and scheduled workflow bots to save hundreds of operational hours.",
    features: ["Automated ETL & data wrangling", "Automated Excel/PDF generation", "API data extraction pipelines", "Data cleansing with Pandas & NumPy"]
  },
  {
    id: "data-science",
    title: "Data Science & Predictive Modeling",
    iconName: "TbChartLine",
    tagline: "Uncovering trends and statistical patterns from data",
    description: "Applying machine learning algorithms, Scikit-learn classification models, feature engineering, and regression analysis to forecast trends and optimize outcomes.",
    features: ["Feature engineering & data normalization", "Classification & regression predictive models", "Model performance evaluation & confusion matrix", "Statistical clustering & pattern detection"]
  },
  {
    id: "business-analysis",
    title: "Business Analysis & Strategic Decision Support",
    iconName: "TbChartInfographic",
    tagline: "Translating business questions into analytical frameworks",
    description: "Formulating business metric trees, customer retention matrices, ROI evaluations, and executive presentation dashboards for strategic stakeholders.",
    features: ["Business KPI definition & metric hierarchies", "Customer retention & churn risk diagnostics", "Product performance & revenue attribution", "Executive presentations & data storytelling"]
  }
];
