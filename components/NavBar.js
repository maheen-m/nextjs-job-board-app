import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Board
          </Typography>
        </Link>

        <Link href="/saved-jobs">
          <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
            Saved Jobs
          </Typography>
        </Link>

        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          Applications
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
}
