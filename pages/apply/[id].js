import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import NavBar from '@components/NavBar';
import { getJob } from '@utils/api/jobs';

import ApplyJobDetails from '@components/apply/ApplyJobDetails';
import ApplyJobForm from '@components/apply/ApplyJobForm';
import SuccessfulApplicationMessage from '@components/apply/SuccessfulApplicationMessage';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ApplyPage() {

    const router = useRouter();
    const { id } = router.query;

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (!router.isReady && !id) return;

        getJob(id).then((data) => {
            setJob(data);
            setLoading(false);
        });

    }, [router.isReady, id]);

    const handleSubmit = () => {
        setSubmitted(true);
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
      <Container sx={{ paddingTop: 2 }}>
        {submitted && <SuccessfulApplicationMessage job={job} />}
        <Typography
              variant="h4"
              
            >
             Apply for Job
        </Typography>
        <Typography
              variant="body1"
              sx={{paddingBottom: 4}}
            >
             Enter your details to apply for the job
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ApplyJobForm job={job} submitCallback={handleSubmit} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ApplyJobDetails job={job} />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}