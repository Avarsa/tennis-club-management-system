import React, { useState } from 'react'
import { Typography, Button, Box, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { motion } from 'framer-motion'

const mockMembers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', membershipType: 'Gold', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', membershipType: 'Silver', startDate: '2023-02-15', endDate: '2023-08-14', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', membershipType: 'Bronze', startDate: '2023-03-01', endDate: '2023-05-31', status: 'Expiring Soon' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', membershipType: 'Gold', startDate: '2022-12-01', endDate: '2023-11-30', status: 'Active' },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', membershipType: 'Silver', startDate: '2023-01-15', endDate: '2023-07-14', status: 'Active' },
]

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'membershipType', headerName: 'Membership Type', width: 150 },
  { field: 'startDate', headerName: 'Start Date', width: 110 },
  { field: 'endDate', headerName: 'End Date', width: 110 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === 'Active' ? 'success' : 'warning'}
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
        <Button variant="outlined" color="secondary" size="small">
          Renew
        </Button>
      </Box>
    ),
  },
]

const MembershipManagement = () => {
  const [members, setMembers] = useState(mockMembers)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Membership Management
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New Member
      </Button>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={members}
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

export default MembershipManagement
