import React, { useState } from 'react'
import { Typography, Button, Box, Chip, TextField, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'

const mockAnnouncements = [
  { id: 1, title: 'Summer Camp Registration Open', date: '2023-04-15', category: 'Event' },
  { id: 2, title: 'Court Maintenance Schedule', date: '2023-04-10', category: 'Maintenance' },
  { id: 3, title: 'New Coach Introduction', date: '2023-04-05', category: 'Staff' },
  { id: 4, title: 'Tournament Results', date: '2023-04-01', category: 'Tournament' },
]

const Communication = () => {
  const [announcements, setAnnouncements] = useState(mockAnnouncements)
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', category: '' })

  const handleInputChange = (e) => {
    setNewAnnouncement({ ...newAnnouncement, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add new announcement logic here
    console.log('New announcement:', newAnnouncement)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Communication
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Create New Announcement
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={newAnnouncement.title}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={newAnnouncement.category}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Post Announcement
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Recent Announcements
          </Typography>
          {announcements.map((announcement) => (
            <motion.div key={announcement.id} whileHover={{ scale: 1.03 }}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">{announcement.title}</Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {announcement.date}
                  </Typography>
                  <Chip label={announcement.category} size="small" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Communication
