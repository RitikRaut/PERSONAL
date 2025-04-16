import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPython,faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "PostgreSQL",
    "Snowflake",
    "Apache Sparl",
    "Airflow",
    "Databricks",
    "Kafka",
];

const labelsSecond = [
    "Python",
    "Pandas",
    "Numpy",
    "Scikit-learn",
    "Tensorflow",
    "XGBoost",
    "Power BI",
    "Tableau",
    "Matplotlib",
    "Seaborn",
    "Plotly"
];

const labelsThird = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS(S3,Lambda,EC2)",
    "Git",
    "GitHub Actions",
    "FastAPI",
    "MLflow",
    "Jenkins"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartPie} size="3x"/>
                    <h3>Data Engineering & Automation
                    </h3>
                    <p>I design and optimize scalable data architectures, focusing on ETL processes, data warehousing, and workflow automation. With a strong foundation in SQL, I efficiently handle structured and semi-structured data to power analytics and decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analysis & Machine Learning</h3>
                    <p>I analyze large datasets to uncover insights and build predictive models that drive business decisions. My expertise includes feature engineering, statistical analysis, and end-to-end model development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & MLOps
                    </h3>
                    <p>I implement DevOps and MLOps practices to streamline deployments, automate CI/CD pipelines, and optimize cloud infrastructure for scalable machine learning and data workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;