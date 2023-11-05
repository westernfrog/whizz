"use client";
import { useState } from 'react';

export default function JobFilters(params) {
    const [sortBy, setSortBy] = useState('date'); // default sort by date
    const [filterByTiming, setFilterByTiming] = useState('all'); // default filter by all timing
    const [filterByType, setFilterByType] = useState([]); // default filter by all types
    const [filterByCategory, setFilterByCategory] = useState([]); // default filter by all categories

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleFilterByTimingChange = (event) => {
        setFilterByTiming(event.target.value);
    };

    const handleFilterByTypeChange = (event) => {
        const options = event.target.options;
        const selectedOptions = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        setFilterByType(selectedOptions);
    };

    const handleFilterByCategoryChange = (event) => {
        const options = event.target.options;
        const selectedOptions = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        setFilterByCategory(selectedOptions);
    };

    return (
        <>
            <section className="flex items-center gap-8 text-lime-950 ps-24 pe-8 my-8 justify-center">
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort" name="sort" value={sortBy} onChange={handleSortChange} className="rounded-lg mx-3">
                        <option value="date">Date</option>
                        <option value="title">Title</option>
                        <option value="location">Location</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="filterByTiming">Timing:</label>
                    <select id="filterByTiming" name="filterByTiming" value={filterByTiming} onChange={handleFilterByTimingChange} className="rounded-lg mx-3">
                        <option value="all">All</option>
                        <option value="fulltime">Full-time</option>
                        <option value="parttime">Part-time</option>
                        <option value="freelance">Freelance</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="filterByType">Type:</label>
                    <select id="filterByType" name="filterByType" value={filterByType} onChange={handleFilterByTypeChange} className="rounded-lg mx-3" >
                        <option value="jobs">Jobs</option>
                        <option value="internships">Internships</option>
                        <option value="freelance">Freelance</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="filterByCategory">Category:</label>
                    <select id="filterByCategory" name="filterByCategory" value={filterByCategory} onChange={handleFilterByCategoryChange} className="rounded-lg mx-3" >
                        <option value="marketing">Marketing</option>
                        <option value="software development">Software Development</option>
                        <option value="hardware">Hardware</option>
                    </select>
                </div>
            </section>
        </>
    );
}
