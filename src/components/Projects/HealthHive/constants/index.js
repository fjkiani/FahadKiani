// constants.js or wherever you prefer to keep your constants
import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, imedicare, starbucks, tesla, shopify, jobit, tripguide, threejs, web2, cb786, gfbu, insaf, medicai, joy, gpt, s, ml, iphone, luton, snowflake, streamlit, numpy, python, vscode, snow_stream, snow } from "../../../../assets";

import { DollarSign, Braces, MessageCircle, PencilLine, 
//healthHive's icons
HeartPulse,Microscope, DatabaseZap, Brain, Infinity, LockKeyhole, CircleDollarSign, CandlestickChart, Activity, HandMetal, SquareArrowUpRight
} from "lucide-react";

//videos
import HHVideo from '../../../../assets/videos/HH.mp4';
import MedicalAI from '../../../../assets/videos/medical-ai.mp4';
import DataDashboard from '../../../../assets/videos/analytics.mp4';



export const healthHiveAdCampaignFeatures = {
  "ROI Optimization Dashboard": {
    features: [
      {
        id: 'roiFeature1',
        icon: creator,
        title: 'Comprehensive Ad Spend Analysis',
        content: 'Utilizing Snowflake to aggregate and analyze advertising spend data across multiple channels for a holistic view of marketing investments.'
      },
      {
        id: 'roiFeature2',
        icon: creator,
        title: 'Real-Time ROI Insights',
        content: 'Streamlit dashboard visualizations offer real-time insights into the ROI of various marketing channels, enabling swift strategic adjustments.'
      },
    ],
    title: "Maximizing Marketing ROI with Advanced Analytics",
    paragraph: "HealthHive's cutting-edge dashboard, built on Snowflake and visualized through Streamlit, transforms raw ad spend data into actionable insights, driving optimal budget allocation and maximizing marketing ROI."
  },
  "Data Integration": {
    features: [
      {
        id: 'dataIntegration1',
        icon: python,
        title: 'Seamless Data Pipeline Creation',
        content: 'Efficiently integrate disparate marketing data sources into Snowflake, enabling a unified analytics platform.'
      },
      {
        id: 'dataIntegration2',
        icon: python,
        title: 'Automated Data Cleansing and Transformation',
        content: 'Leverage Snowflakes powerful ETL capabilities to ensure data accuracy and readiness for analysis.'
      },
    ],
    title: "Streamlining Data to Unlock Marketing Insights",
    paragraph: "Through sophisticated data pipelines and transformations within Snowflake, HealthHive ensures that marketing data is accurate, comprehensive, and primed for analysis, laying the groundwork for impactful ROI insights."
  },
  "Interactive and Dynamic Reporting": {
    features: [
      {
        id: 'reporting1',
        icon: web,
        title: 'Customizable Dashboard Widgets',
        content: 'With Streamlit, create dynamic, interactive widgets that allow users to drill down into specific data points or adjust views for personalized insights.'
      },
      {
        id: 'reporting2',
        icon: web,
        title: 'Collaborative Data Exploration',
        content: 'Enable team-wide access to the ROI dashboard, fostering a culture of data-driven decision-making across the marketing department.'
      },
    ],
    title: "Empowering Marketing Teams with Data",
    paragraph: "HealthHive's ROI dashboard not only serves as a tool for analyzing ad spend efficiency but also as a platform for interactive exploration and collaboration, making complex data accessible and actionable for all team members."
  },
};






export const medicalAIFeatures = {
  "Machine Learning": {
    features: [
      {
        id: 'mlfeature1',
        icon: python,
        title: 'AI-Driven Pneumonia Detection',
        content: 'Advanced algorithms that accurately detect signs of pneumonia from chest X-rays, assisting in early and precise diagnosis.'
      },
      {
        id: 'mlfeature2',
        icon: python,
        title: 'Adaptive Learning Models',
        content: 'Models that learn over time, integrating the latest clinical research and patient data to continuously enhance diagnostic accuracy.'
      },
    ],
    title: "Enhancing Diagnostic Precision with AI",
    paragraph: "MedicalAI is revolutionizing pneumonia diagnosis by integrating artificial intelligence with radiological imaging, providing fast, accurate, and constantly improving diagnostic capabilities."
  },
  "Data Transformation": {
    features: [
      {
        id: 'feature1',
        icon: numpy,
        title: 'Cloud-based Data Ecosystem',
        content: 'Creating a centralized, cloud-based ecosystem for seamless data access, management, and collaboration across healthcare systems.'
      },
      {
        id: 'feature2',
        icon: numpy,
        title: 'Real-time Data Synthesis',
        content: 'Rapidly processing and synthesizing patient data into actionable insights for healthcare professionals.'
      },
    ],
    title: "Streamlining Healthcare Data Management",
    paragraph: "MedicalAI is at the forefront of data transformation in healthcare, creating interconnected systems that ensure vital health data is accessible when and where it’s needed most."
  },
  "Web Development": {
    features: [
      {
        id: 'webdev1',
        icon: reactjs,
        title: 'Responsive Health Dashboards',
        content: 'Developing intuitive web interfaces for real-time health monitoring and management.'
      },
      {
        id: 'webdev2',
        icon: reactjs,
        title: 'Secure Data Backend',
        content: 'Ensuring patient data is stored and transmitted securely, complying with HIPAA and other regulatory standards.'
      },
    ],
    title: "Building Digital Interfaces for Healthcare",
    paragraph: "MedicalAI's commitment to web development excellence ensures that healthcare providers have the digital tools they need to deliver patient care efficiently and securely."
  },
  "Data Analytics": {
    features: [
      {
        id: 'dataAnalytic1',
        icon: backend,
        title: 'Health Analytics AI',
        content: 'Leveraging data analytics to extract patterns and predict health outcomes, paving the way for preventive medicine.'
      },
      {
        id: 'dataAnalytic2',
        icon: backend,
        title: 'Interactive Data Visualization',
        content: 'Transforming complex health data into visual reports that allow for immediate comprehension and informed decision-making.'
      },
    ],
    title: "Informing Healthcare Decisions with Data",
    paragraph: "MedicalAI employs data analytics to not only understand the present state of patient health but also to anticipate future health trends and outcomes."
  },
};


export const featuresDataHealthHive = [
  {
    Icon: DollarSign ,
    name: "ROI Dashboard Analytics",
    title: "30% uplift in marketing ROI from actionable insights",
    description: "HealthHive's dashboard transforms complex ad spend data into clear, actionable insights, enabling marketers to optimize budget allocation across multiple channels.",
    features: [
      "Aggregated data visualization from disparate channels into a single dashboard",
      "Real-time ROI analysis per marketing channel",
      "Customizable views and filters for in-depth analysis",
      "Automated insights on underperforming campaigns for quick adjustments",
    ],
  },
  {
    Icon: Brain,
    name: "Data Integration & Transformation",
    title: "Efficiency gain of 40% in marketing data processing",
    description: "Leveraging Snowflake's capabilities, HealthHive streamlines the ingestion and transformation of diverse marketing data sources for unified analysis.",
    features: [
      "Seamless integration of data from social media, search engines, and more",
      "Automated ETL processes reducing manual data handling",
      "High-quality, cleansed data ready for analysis",
      "Enhanced decision-making with a consolidated data view",
    ],
  },
  {
    Icon: HeartPulse,
    name: "Dynamic Web Reporting",
    title: "Interactive reports led to a 50% increase in stakeholder engagement",
    description: "With Streamlit, HealthHive creates dynamic, interactive web reports that drive engagement and provide deep insights into ad spend efficiency.",
    features: [
      "User-friendly, interactive dashboards for non-technical users",
      "Drill-down capabilities for detailed campaign analysis",
      "Real-time updates to marketing data and insights",
      "Collaborative tool for sharing insights and fostering data-driven culture",
    ],
  },
  {
    Icon: Infinity,
    name: "Continuous Improvement Loop",
    title: "20% year-over-year improvement in marketing efficiency",
    description: "HealthHive's platform evolves with ongoing feedback loops, leveraging Snowflake and Streamlit to refine and enhance marketing strategies continually.",
    features: [
      "Feedback-driven improvements to dashboard functionalities",
      "Iterative model enhancements for predictive analytics",
      "Adoption of new data sources for richer insights",
      "Proactive optimization strategies based on trend analysis",
    ],
  },
  {
    Icon: LockKeyhole,
    name: "Data Security & Compliance",
    title: "Adhering to top-tier data security and privacy standards",
    description: "Built on AWS, HealthHive ensures the highest levels of data security and compliance, safeguarding sensitive marketing data and customer information.",
    features: [
      "Robust data encryption and access controls",
      "Compliance with GDPR, CCPA, and other privacy regulations",
      "Regular security audits and updates",
      "Trustworthy data handling practices",
    ],
  },
];


//dataDashboard features
// Project Benefits and Features

export const dataDashboardFeatures = [
  {
    Icon: SquareArrowUpRight,
    name: "Revenue and Expenses Tracking",
    title: "Comprehensive visualization of revenue and expenses",
    description: "Provides a detailed analysis of revenue and expenses, helping businesses make informed financial decisions.",
    features: [
      "increase in financial accuracy",
      "Identifies key trends and anomalies",
      "Monthly tracking of financial performance",
      "Supports strategic financial planning",
    ],
  },
  {
    Icon: HandMetal,
    name: "Profit and Revenue Analysis",
    title: "Detailed profit and revenue analysis",
    description: "Offers insights into profit and revenue trends, aiding in the optimization of business operations.",
    features: [
      "improvement in profit margins",
      "Tracks revenue and profit fluctuations",
      "Helps in identifying high-performing segments",
      "Supports long-term financial strategies",
    ],
  },
  {
    Icon: CandlestickChart,
    name: "Expenses",
    title: "Insightful comparison of operational and non-operational expenses",
    description: "Enables businesses to optimize their expenses by overseeing all transactions.",
    features: [
      "Optimizes operational cost management",
      "Provides actionable insights for cost-saving",
      "Helps in budgeting and financial planning",
    ],
  },
  {
    Icon: LockKeyhole,
    name: "Inventory Management",
    title: "Detailed list of products",
    description: "Provides an exhaustive list of products, their expenses, and prices to facilitate inventory management.",
    features: [
      "All products tracked",
      "Supports inventory optimization",
      "Keep track of your inventory",
      "Aids in inventory cost management",
    ],
  },
  {
    Icon: Activity,
    name: "Expense Breakdown By Category",
    title: "Categorical breakdown of expenses",
    description: "Offers a detailed breakdown of expenses by category to optimize budget allocation.",
    features: [
      "improvement in expense management",
      "Helps in identifying high-cost areas",
      "Supports budget optimization",
      "Provides detailed expense insights",
    ],
  },
  {
    Icon: LockKeyhole,
    name: "Revenue and Predictions",
    title: "Revenue predictions based on historical data",
    description: "Uses machine learning regression models to predict future revenue trends, aiding in strategic planning.",
    features: [
      "Accurate revenue predictions",
      "Supports strategic financial planning",
      "Helps in forecasting and budgeting",
      "Provides data-driven insights",
    ],
  },
];







//MedicalAI's outcomes

export const featuresDataMedicalAI = [
  {
    Icon: HeartPulse ,
    name: "Diagnostic Support",
    title: "100,000+ chest X-ray images labeled in minutes",
    description: "MedicalAI's diagnostic serve as a second opinion, boosting confidence in patient assessments",
     features: [
      "Reduced the radiologist's workload by up to 50%",
      "Iterative learning processes Improved response times to critical cases by 20%",
      "Automatic data labeling saved HealthHive months of time",
      "20%+ increase in early detection.",

    ],
  },
  {
    Icon: Microscope,
    name: "X-Ray Analysis",
    title: "Increased X-rays analyzed by radiologist by 70% ",
    description: "MedicalAI transformed how resources are allocated, ensuring their team is optimally equipped to handle volume of patients throughout",
    features: [
      "Improvement in workflow efficiency for radiology departments",
      "20-30% streamlined workflow improvements",
      "validated on datasets from various institutions, maintaining an accuracy of 90%+",
      "detect abnormalities in chest X-rays in under 30 seconds.",
    ],
  },
  {
    Icon: DatabaseZap,
    name: "Data Training",
    title: "90%+ accurate",
    description: "MedicalAI offers unparalleled accuracy and speed, significantly enhancing radiologists' diagnostic capabilities",
    features: [
      "Real-time feedback from radiologists for rapid model refinement ",
      "trained on a dataset comprising over 1 million anonymized radiographic images",
      "24/7 Operational Capacity",
      "Batch processing allows interpretion of up to 20,000 images per day ",
    ],
  },
  {
    Icon: Brain,
    name: "Continuous Learning",
    title: "20% reduction in diagnostic uncertainty",
    description: "ongoing learning algorithms have allowed HealthHive to improve diagnostic accuracy by 5% each quarter, ensuring the system remains at the cutting edge of medical research.",
    features: [
      "Collaborative Learning Environment with medical professionals worldwide to share insights and data",
      "Advanced error analysis to identify and correct misdiagnoses or uncertainties made by the AI, turning them into learning opportunities for the system",
    ],
  },
  {
    Icon: LockKeyhole,
    name: " GDPR, HIPAA Compliance",
    title: "highest standards of data protection and regulatory compliance, leveraging AWS",
    description: "HIPAA eligibility and GDPR readiness.",
    features: [
      "End-to-End Encryption using AWS's robust security protocols to safeguard patient information",
      "Using AWS's compliance certifications and attestations, HealthHive meets international compliance standards",
    ],
  },

  


];






//Case Study Components 
export const projectsDetails = {
  healthHive: {
    title: "Forecaste ROI",
    name: "Data Dashboard",
    subtitle: "Improved ROI forecast by 400%+ ",
    description: "This interactive web application built with Streamlit visualizes these predictions, allowing users to experiment with budget allocations and see their potential impact on ROI in real-time. Predict ROI based on the input budgets for search engines, social media, video, and email utilizing a Linear Regression model trained on historical data",
    videoSrc: HHVideo,
    benefits: [
      "To record presentations",
      "To deliver better feedback",
      "To share knowledge",
    ],
  },
  medicalAI: {
    title: "MedicalAI's Case Study",
    subtitle: "Medical Diagnostics with AI",
    description: "Built on Sagemaker, React and S3.",
    videoSrc: MedicalAI,
    benefits: [
      "To record presentations",
      "To deliver better feedback",
      "To share knowledge",
    ],
  },

  dataDashboard: {
    title: "Monitor your Key Performance Index (KPIs)",
    subtitle: "One Dashboard to optimize your business",
    description: "Offers insights into profit and revenue trends, aiding in the optimization of business operations.",
    videoSrc: DataDashboard,
    benefits: [
      "To record presentations",
      "To deliver better feedback",
      "To share knowledge",
    ],
  },
  // Define other projects similarly...
};


//Projects


export const projects = [
  {
    name: "Data Dashboard",
    description:
      "Interactive dashboard to visualize key performance indicators (KPIs), product performance, and transaction data. The application is designed to visualize and interact with machine learning model predictions and their performance metrics.",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Snowflake",
        color: "green-text-gradient",
      },
      {
        name: "S3",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://ml-your-business.netlify.app/",
    case_study_link: "/datadashboard"
    
  },
  {
    name: "Pneumonia detection with AI ",
    description:
      " Full-Stack application built with interactive tools for uploading, viewing, and analyzing medical images with AI-powered insights that enable diagnostic results within seconds with over 80% accuracy ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Sagemaker",
        color: "pink-text-gradient",
      },
      {
        name: "S3",
        color: "pink-text-gradient",
      },
      {
        name: "Supervised Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: medicai,
    source_code_link: "https://medicalai.world/",
    case_study_link: "/medicalai"

  },
  {
    name: "Forecaste ROI",
    description:
      "The interactive web application built with Streamlit visualizes these predictions, allowing users to experiment with budget allocations and see their potential impact on ROI in real-time. Predict ROI based on the input budgets for search engines, social media, video, and email utilizing a Linear Regression model trained on historical data",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Snowflake",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://medicalai.world/",
    case_study_link: "/healthhive"
  },

  {
    name: "GPT 4 Summarizer",
    description:
      "GPT summarizer built in react that uses OpenAI's Generative Pretrained Transformer (GPT) models to generate concise summaries of larger text inputs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Open-AI",
        color: "pink-text-gradient",
      },
    ],
    image: s,
    source_code_link: "https://gpt-summarizer-api.netlify.app/",
  
  },
  

  {
    name: "Club Billionaire",
    description:
      "Discord powered server built and integrated with api's to generate real-time new york stock market (NYSE) data to empower retail investors with insights ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "discord",
        color: "pink-text-gradient",
      },
    ],
    image: cb786,
    source_code_link: "https://clubillionaire.life",
  },
 
  {
    name: "Luton Airport Transfer",
    description:
      "Car booking app for a taxi company in UK built with Google maps API. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "noSQL",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: luton,
    source_code_link: "https://lat-taxi.com/",
  },
  {
    name: "Insaf.world",
    description:
      "React web app with Sanity.io CMS, achieving a 90% faster content update time and a 80% boost in web performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
    ],
    image: insaf,
    source_code_link: "https://insaf.vercel.app/",
  }
]