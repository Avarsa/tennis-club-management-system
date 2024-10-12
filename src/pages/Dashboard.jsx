import React from 'react'
import { Typography, Grid, Paper } from '@mui/material'

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6">Total Members</Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, mt: 2 }}>
              250
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6">Active Courts</Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, mt: 2 }}>
              8
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6">Upcoming Tournaments</Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, mt: 2 }}>
              3
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography variant="h6">Revenue This Month</Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, mt: 2 }}>
              $15,750
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
