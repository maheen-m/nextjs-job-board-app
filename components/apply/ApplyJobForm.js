import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { postApplication } from '@/utils/api/jobs';

export default function ApplyJobForm({ job, submitCallback }) {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    postApplication({
      fullName: fullName,
      email: email,
      jobId: job.id,
    }).then(() => {
      submitCallback();
    });
  };

  return <form onSubmit={handleSubmit} style={{ width: `90%`, }}>
    <Stack direction="column" spacing={2}>
      <TextField
        id="full-name"
        label="Full Name"
        variant="outlined"
        value={fullName}
        onChange={(event) => {
          setFullName(event.target.value);
        }}
        fullWidth
      />
      <TextField
        id="email"
        label="email"
        variant="outlined"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        fullWidth
      />
      <Button
        variant="contained"
        color="success"
        type="submit"
      >
        Submit Application
      </Button>
    </Stack>
  </form>
}