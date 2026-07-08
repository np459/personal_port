export const profile = {
  name: "Neha Prasla",
  email: "nehakprasla@gmail.com",
  github: "#",
  linkedin: "#",
  updated: "07/08/2026",
}

export const education = {
  school: "Prairie View A&M University",
  degree: "B.S. Kinesiology",
  grad: "Class of 2030",
}

export const experience = [
  {
    role: "Clinical Intern",
    company: "Larry L. Likover, M.D., P.A. – Orthopedic Surgery · Houston, TX",
    period: "Feb 2026 – May 2026",
    description:
      "Observed patient consultations and surgical case discussions at a practice affiliated with Memorial Hermann Memorial City Medical Center, gaining exposure to orthopedic evaluation techniques and treatment planning for musculoskeletal conditions. Retrieved and organized patient files, prepared intake forms and documentation packets, and assisted with clinical documentation under physician supervision.",
    tags: ["Orthopedics", "Patient Intake", "Clinical Documentation"],
  },
  {
    role: "Clinical Intern",
    company: "Specialized Gastroenterology and Medical Associates (SGMA) · Houston, TX",
    period: "Dec 2025 – Feb 2026",
    description:
      "Maintained and organized patient records for weight loss and aesthetic clients, ensuring up-to-date documentation. Welcomed patients upon arrival, recorded weight, escorted them to their rooms, and retrieved their files prior to appointments.",
    tags: ["Gastroenterology", "Patient Records", "Front Office"],
  },
  {
    role: "Clinical Intern",
    company: "Houston Brain Center · Katy, TX",
    period: "May 2025 – Jul 2025",
    description:
      "Administered EEG-guided neurofeedback and V-Light therapy sessions for 20+ clients under clinical supervision. Tracked neurological progress and maintained patient outcome documentation in clinical logs.",
    tags: ["EEG Neurofeedback", "V-Light Therapy", "Patient Outcomes"],
  },
  {
    role: "Clinical Intern",
    company: "APEX MD Clinic Primary Care & Wellness · Houston, TX",
    period: "Aug 2024 – May 2025",
    description:
      "Conducted 200+ patient intakes including vitals, STD and drug testing, B12 injections, and lab collections. Operated the BD Veritor diagnostic system to administer and analyze strep, influenza, and COVID-19 rapid tests. Assisted with Ozempic injections and immigrant medical testing while improving clinic workflow through accurate data log management.",
    tags: ["Patient Intake", "BD Veritor", "Lab Collections", "Rapid Testing"],
  },
]

export const research = [
  {
    role: "Undergraduate Researcher",
    company: "Chitrala Lab, Dept. of Engineering Technology, University of Houston",
    period: "Jun 2026 – Present",
    description:
      "Co-authoring a bioinformatics manuscript analyzing gene expression differences in triple-negative breast cancer between African American and European American patient cohorts using public NCBI datasets. Compiling, cleaning, and organizing large-scale gene expression data, reproducing core analyses from a published study to validate the analytical pipeline, and extending prior work with additional statistical analysis and machine learning models. Developing a reproducible analysis pipeline and summary documentation to support a manuscript in progress.",
    tags: ["Bioinformatics", "Python", "R", "Machine Learning", "NCBI"],
    link: {
      label: "Chitrala Lab",
      sub: "University of Houston",
      href: "#", // TODO: replace with the real lab URL
    },
  },
]

export const skills = {
  "Languages & Frameworks": ["Python", "Java", "R", "HTML/CSS", "React (Next.js, Node.js)", "Git"],
  "AI/ML": [
    "LLM Fine-Tuning",
    "Hugging Face Transformers",
    "PyTorch",
    "TensorFlow/Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Jupyter",
    "Prompt Engineering",
  ],
  Certifications: ["Patient Care Technician", "BLS/CPR"],
}

export const projects = [
  {
    title: "TNBC Gene Expression Analysis Pipeline",
    period: "Jun 2026 – Present",
    meta: "Bioinformatics · Python, R",
  },
  {
    title: "Personal Portfolio Website",
    period: "Jul 2026",
    meta: "Built from scratch in React",
  },
]
