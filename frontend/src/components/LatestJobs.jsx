import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    // FIX 1: Changed store.jobs to store.job to match your store.js setup
    const { allJobs } = useSelector(store => store.job); 

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'>
                <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
            </h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    // FIX 2: Safely check if allJobs exists, and added a key prop
                    allJobs && allJobs.length !== 0 
                        ? allJobs.slice(0, 6).map((item, index) => (
                            <LatestJobCards key={index} job={item} />
                        )) 
                        : <span>No jobs found</span>
                }
            </div>
        </div>
    )
}

export default LatestJobs;