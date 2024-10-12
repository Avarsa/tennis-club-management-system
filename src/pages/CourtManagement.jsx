import React, { useState } from 'react'
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'

const mockCourts = [
  { id: 1, name: 'Court 1', surface: 'Hard', status: 'Available' },
  { id: 2, name: 'Court 2', surface: 'Clay', status: 'Occupied' },
  { id: 3, name: 'Court 3', surface: 'Grass', status: 'Maintenance' },
  { id: 4, name: 'Court 4', surface: 'Hard', status: 'Available' },
]

const CourtManagement = () => {
  const [courts, setCourts] = useState(mockCourts)

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Court Management
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New Court
      </Button>
      <Grid container spacing={3}>
        {courts.map((court) => (
          <Grid item xs={12} sm={6} md={4} key={court.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {court.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Surface: {court.surface}
                </Typography>
                <Typography variant="body2">Status: {court.status}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Book</Button>
                <Button size="small" color="error">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CourtManagement
