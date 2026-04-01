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
    fetch('/api/saved-jobs', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: deleteId }),
    });
};

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
                <SavedJobsList savedJobs={savedJobs} deleteCallback={deleteSavedJob} />
            </Container>
        </main>

    );
}