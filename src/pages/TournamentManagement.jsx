import React, { useState } from 'react'
import { Typography, Button, Box, Chip, Card, CardContent, CardActions, Grid } from '@mui/material'
import { motion } from 'framer-motion'

const mockTournaments = [
  { id: 1, name: 'Spring Open', startDate: '2023-05-15', endDate: '2023-05-20', status: 'Upcoming', participants: 32 },
  { id: 2, name: 'Summer Slam', startDate: '2023-07-10', endDate: '2023-07-15', status: 'Registration Open', participants: 16 },
  { id: 3, name: 'Fall Classic', startDate: '2023-09-05', endDate: '2023-09-10', status: 'Completed', participants: 64 },
  { id: 4, name: 'Winter Cup', startDate: '2023-12-01', endDate: '2023-12-05', status: 'Cancelled', participants: 0 },
]

const TournamentManagement = () => {
  const [tournaments, setTournaments] = useState(mockTournaments)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'primary'
      case 'Registration Open':
        return 'success'
      case 'Completed':
        return 'info'
      case 'Cancelled':
        return 'error'
      default:
        return 'default'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Tournament Management
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Create New Tournament
      </Button>
      <Grid container spacing={3}>
        {tournaments.map((tournament) => (
          <Grid item xs={12} sm={6} md={4} key={tournament.id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {tournament.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {tournament.startDate} - {tournament.endDate}
                  </Typography>
                  <Chip
                    label={tournament.status}
                    color={getStatusColor(tournament.status)}
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2">
                    Participants: {tournament.participants}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Details</Button>
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error">
                    Cancel
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  )
}

export default TournamentManagement
