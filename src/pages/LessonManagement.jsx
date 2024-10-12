import React, { useState } from 'react'
import { Typography, Button, Box, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { motion } from 'framer-motion'

const mockLessons = [
  { id: 1, student: 'John Doe', coach: 'Emily Davis', date: '2023-05-01', time: '10:00 AM', type: 'Individual', status: 'Scheduled' },
  { id: 2, student: 'Jane Smith', coach: 'Mike Johnson', date: '2023-05-02', time: '2:00 PM', type: 'Group', status: 'Completed' },
  { id: 3, student: 'Tom Brown', coach: 'Sarah Williams', date: '2023-05-03', time: '11:00 AM', type: 'Individual', status: 'Cancelled' },
  { id: 4, student: 'Lisa Taylor', coach: 'David Wilson', date: '2023-05-04', time: '4:00 PM', type: 'Group', status: 'Scheduled' },
  { id: 5, student: 'Michael Lee', coach: 'Emily Davis', date: '2023-05-05', time: '9:00 AM', type: 'Individual', status: 'Scheduled' },
]

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'student', headerName: 'Student', width: 130 },
  { field: 'coach', headerName: 'Coach', width: 130 },
  { field: 'date', headerName: 'Date', width: 110 },
  { field: 'time', headerName: 'Time', width: 110 },
  { field: 'type', headerName: 'Type', width: 110 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === 'Scheduled'
            ? 'primary'
            : params.value === 'Completed'
            ? 'success'
            : 'error'
        }
        size="small"
      />
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => (
      <Box>
        <Button variant="outlined" size="small" sx={{ mr: 1 }}>
          Edit
        </Button>
        <Button variant="outlined" color="error" size="small">
          Cancel
        </Button>
      </Box>
    ),
  },
]

const LessonManagement = () => {
  const [lessons, setLessons] = useState(mockLessons)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Lesson Management
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Schedule New Lesson
      </Button>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={lessons}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </motion.div>
  )
}

export default LessonManagement
