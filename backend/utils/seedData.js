export const defaultProjects = [
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
    featured: true,
    order: 1
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
    featured: true,
    order: 2
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
    featured: true,
    order: 3
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
    featured: true,
    order: 4
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
    featured: true,
    order: 5
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
    featured: true,
    order: 6
  }
];

export const defaultStats = [
  { label: "Core Analytics Domains", value: 3, suffix: "" },
  { label: "Data & BI Tools", value: 16, suffix: "+" },
  { label: "Verified Credentials", value: 8, suffix: "" },
  { label: "Academic Batch", value: 2027, suffix: "" }
];

export const defaultSkills = [
  {
    category: "Data Analytics & BI",
    description: "Extracting insights, statistical modeling, ETL pipelines, and executive BI dashboards",
    skills: [
      { name: "Power BI (DAX)", level: 94, experience: "2+ yrs" },
      { name: "Power Query (ETL)", level: 90, experience: "2+ yrs" },
      { name: "Advanced Excel (Pivot/VLOOKUP)", level: 92, experience: "3+ yrs" },
      { name: "SQL (Analytics & CTEs)", level: 94, experience: "2.5 yrs" },
      { name: "Data Modeling & Star Schemas", level: 90, experience: "2+ yrs" }
    ]
  },
  {
    category: "Languages",
    description: "Core programming and query languages for algorithms, analytics, and software systems",
    skills: [
      { name: "Python", level: 92, experience: "3+ yrs" },
      { name: "SQL (MySQL / CTEs)", level: 94, experience: "2.5 yrs" },
      { name: "DAX", level: 90, experience: "2+ yrs" },
      { name: "Java", level: 80, experience: "2+ yrs" },
      { name: "C Language", level: 78, experience: "2+ yrs" }
    ]
  },
  {
    category: "Data Science & ML",
    description: "Data manipulation, statistical analysis, and machine learning libraries in Python",
    skills: [
      { name: "Pandas", level: 94, experience: "2+ yrs" },
      { name: "NumPy", level: 90, experience: "2+ yrs" },
      { name: "Matplotlib & Seaborn", level: 92, experience: "2+ yrs" },
      { name: "Scikit-Learn", level: 84, experience: "1.5 yrs" },
      { name: "Exploratory Data Analysis (EDA)", level: 95, experience: "2+ yrs" }
    ]
  },
  {
    category: "Business Analysis",
    description: "Translating business requirements into KPI trees, retention matrices, and executive strategies",
    skills: [
      { name: "KPI Formulation & Dashboards", level: 92, experience: "2+ yrs" },
      { name: "Cohort & RFM Churn Analysis", level: 90, experience: "2 yrs" },
      { name: "Customer Segmentation", level: 92, experience: "2 yrs" },
      { name: "Data Storytelling & Reporting", level: 90, experience: "2+ yrs" }
    ]
  }
];

