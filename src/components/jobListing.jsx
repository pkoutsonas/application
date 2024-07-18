import React, { useState, useEffect } from "react";
import JobPost from "./Jobpost.jsx";
import PageTracker from "./PageTracker.jsx";

const JobListing = () => {
  const jobs = [
    {
      title: "Olive Gardener",
      company: "Company A",
      location: "Trikala, Greece",
      salary: "900 /monthly",
      description:
        "Looking for a skilled worker with experience in olive oil production.",
    },
    {
      title: "Veterinary Doctor",
      company: "Company B",
      location: "Larisa, Greece",
      salary: "40 /daily",
      description:
        "We need a veterinary doctor with experience in cattle care.",
    },
    {
      title: "Doctor",
      company: "Company c",
      location: "Larisa, Greece",
      salary: "100 /daily",
      description: "lorem ipsum.",
    },
    {
      title: "Veterinary Doctor",
      company: "Company B",
      location: "Larisa, Greece",
      salary: "40/ daily",
      description:
        "We need a veterinary doctor with experience in cattle care.",
    },
    {
      title: "Software Engineer",
      company: "Company Tornos",
      location: "Larisa, Greece",
      salary: "40/ daily",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus cursus libero, sed sollicitudin diam fermentum vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus cursus libero, sed sollicitudin diam fermentum vitae.",
    },
    {
      title: "Olive Gardener",
      company: "Company A",
      location: "Trikala, Greece",
      salary: "900/ monthly",
      description:
        "Looking for a skilled worker with experience in olive oil production.",
    },
    {
      title: "Veterinary Doctor",
      company: "Company B",
      location: "Larisa, Greece",
      salary: "40/ daily",
      description:
        "We need a veterinary doctor with experience in cattle care.",
    },
    {
      title: "Doctor",
      company: "Company asd",
      location: "Athens, Greece",
      salary: "100/ daily",
      description: "lorem ipsum.",
    },
    {
      title: "ajnfrisgbosngvs",
      company: "Company B",
      location: "Thessaloniki, Greece",
      salary: "40/ daily",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus cursus libero, sed sollicitudin diam fermentum vitae. Fusce nisl orci, scelerisque at tristique sit amet, suscipit ut diam. Pellentesque cursus.",
    },
    {
      title: "Veterinary Doctor",
      company: "Company Trikala",
      location: "Larisa, Greece",
      salary: "40/ daily",
      description:
        "We need a veterinary doctor with experience in cattle care.",
    },
    {
      title: "Olive Gardener",
      company: "Company A",
      location: "Trikala, Greece",
      salary: "900/ monthly",
      description:
        "Looking for a skilled worker with experience in olive oil production.",
    },
    {
      title: "Vineyard Worker",
      company: "Company B",
      location: "Nemea, Greece",
      salary: "850/ monthly",
      description:
        "Seeking an experienced vineyard worker for grape harvesting and wine production.",
    },
    {
      title: "Farm Manager",
      company: "Company C",
      location: "Larissa, Greece",
      salary: "1200/ monthly",
      description:
        "Looking for a farm manager with knowledge in crop management and animal husbandry.",
    },
    {
      title: "Greenhouse Technician",
      company: "Company D",
      location: "Volos, Greece",
      salary: "950/ monthly",
      description:
        "Seeking a technician with experience in greenhouse management and plant care.",
    },
    {
      title: "Fruit Picker",
      company: "Company E",
      location: "Kavala, Greece",
      salary: "800/ monthly",
      description:
        "Looking for reliable fruit pickers for seasonal work in orchards.",
    },
    {
      title: "Agricultural Engineer",
      company: "Company F",
      location: "Thessaloniki, Greece",
      salary: "1500/ monthly",
      description:
        "Seeking an agricultural engineer with expertise in irrigation and soil management.",
    },
    {
      title: "Dairy Farm Worker",
      company: "Company G",
      location: "Ioannina, Greece",
      salary: "900/ monthly",
      description:
        "Looking for a dairy farm worker to assist with milking and general farm tasks.",
    },
    {
      title: "Organic Farmer",
      company: "Company H",
      location: "Patras, Greece",
      salary: "950/ monthly",
      description:
        "Seeking an organic farmer with experience in sustainable farming practices.",
    },
    {
      title: "Tractor Operator",
      company: "Company I",
      location: "Heraklion, Greece",
      salary: "1000/ monthly",
      description:
        "Looking for an experienced tractor operator for fieldwork and equipment maintenance.",
    },
    {
      title: "Agronomy Specialist",
      company: "Company J",
      location: "Athens, Greece",
      salary: "1400/ monthly",
      description:
        "Seeking an agronomy specialist with knowledge in crop science and pest control.",
    },
  ];

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Υπολογισμός των αντικειμένων που θα εμφανιστούν στην τρέχουσα σελίδα

  // Filtering the jobs based on location

  // Calculate current jobs based on pagination
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div>
      <div className="container mx-auto py-8 ml-64 flex-1">
        <h1 className="text-2xl font-bold mb-6">
          Find the job that suits you most!
        </h1>
        <h3 className="text-xl font-bold mb-6">Every opportunity is here</h3>
        <div className="grid justify-self-stretch">
          {currentJobs.map((job, index) => (
            <JobPost
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              description={truncateDescription(job.description, 20)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-items-stretch mt-8">
        <div className="grow">
          <PageTracker
            totalItems={jobs.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobListing;
