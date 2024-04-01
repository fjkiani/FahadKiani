// constants.js or wherever you prefer to keep your constants
import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, imedicare, starbucks, tesla, shopify, jobit, tripguide, threejs, web2, cb786, gfbu, insaf, medicai, joy, gpt, s, ml, iphone, luton, snowflake, streamlit, numpy, python, vscode, snow_stream, snow } from "../../../../assets";

import { DollarSign, Braces, MessageCircle, PencilLine, 
//healthHive's icons
HeartPulse,Microscope, DatabaseZap, Brain, Infinity, LockKeyhole
} from "lucide-react";





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
    paragraph: "HealthHive employs data analytics to not only understand the present state of patient health but also to anticipate future health trends and outcomes."
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
