import React from 'react';
import JobCard from './JobCard';
import Link from 'next/link';

const jobs = [
    {
        id: 1,
        imageSrc: "https://via.placeholder.com/150",
        title: "Frontend Developer",
        description: "We are looking for a frontend developer to join our team.",
        tags: ["React", "JavaScript", "CSS"],
        companyName: "ABC Company",
        dueDate: "2022-01-01",
    },
    {
        id: 2,
        imageSrc: "https://via.placeholder.com/150",
        title: "Backend Developer",
        description: "We are looking for a backend developer to join our team.",
        tags: ["Node.js", "MongoDB", "REST API"],
        companyName: "XYZ Company",
        dueDate: "2022-02-01",
    },
    {
        id: 3,
        imageSrc: "https://via.placeholder.com/150",
        title: "Full Stack Developer",
        description: "We are looking for a full stack developer to join our team.",
        tags: ["React", "Node.js", "MongoDB"],
        companyName: "PQR Company",
        dueDate: "2022-03-01",
    },
];

const JobSection = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4">
                {jobs.map((job) => (
                    <Link key={job.id} href={`./opportunities/${job.id}`}>
                    <JobCard  imageSrc={job.imageSrc} title={job.title} description={job.description} tags={job.tags} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default JobSection;
