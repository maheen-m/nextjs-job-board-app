import { useEffect, useState } from 'react';
import NavBar from '@components/NavBar';
import { getSavedJobsDetails } from '@utils/api/jobs';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import SavedJobsList from '@components/savedJobs/SavedJobsList';

export default function SavedJobsPage() {

    const [savedJobs, setSavedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSavedJobsDetails().then((data) => {
            console.log(data);
            setSavedJobs(data);
            setLoading(false);
        })
    }, []);

    const deleteSavedJob = (deleteId) => {
        let updatedJobs = savedJobs.filter((job) => {
            return job.id !==deleteId;
        });
        setSavedJobs(updatedJobs)
    }

    if (loading) {
        return (
            <main>
                <NavBar />
                <Container>
                    <Box sx={{ display: 'flex', paddingTop: 4, justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                </Container>
            </main>
        );
    }

    return (
        <main>
            <NavBar />
            <Container>
                <h1>Saved Jobs</h1>

    <SavedJobsList savedJobs={savedJobs} deleteCallback={deleteSavedJob} />

            </Container>
        </main>

    );
}