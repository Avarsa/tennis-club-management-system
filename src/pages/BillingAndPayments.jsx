import React, { useState } from 'react'
import { Typography, Button, Box, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { motion } from 'framer-motion'

const mockInvoices = [
  { id: 1, member: 'John Doe', amount: 150, date: '2023-04-01', dueDate: '2023-04-15', status: 'Paid' },
  { id: 2, member: 'Jane Smith', amount: 200, date: '2023-04-05', dueDate: '2023-04-20', status: 'Pending' },
  { id: 3, member: 'Mike Johnson', amount: 100, date: '2023-04-10', dueDate: '2023-04-25', status: 'Overdue' },
  { id: 4, member: 'Sarah Williams', amount: 175, date: '2023-04-15', dueDate: '2023-04-30', status: 'Paid' },
  { id: 5, member: 'Tom Brown', amount: 125, date: '2023-04-20', dueDate: '2023-05-05', status: 'Pending' },
]

const columns = [
  { field: 'id', headerName: 'Invoice ID', width: 100 },
  { field: 'member', headerName: 'Member', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 110, valueFormatter: ({ value }) => `$${value.toFixed(2)}` },
  { field: 'date', headerName: 'Invoice Date', width: 120 },
  { field: 'dueDate', headerName: 'Due Date', width: 120 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === 'Paid'
            ? 'success'
            : params.value === 'Pending'
            ? 'warning'
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
          View
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          disabled={params.row.status === 'Paid'}
        >
          Pay
        </Button>
      </Box>
    ),
  },
]

const BillingAndPayments = () => {
  const [invoices, setInvoices] = useState(mockInvoices)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Billing and Payments
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Generate New Invoice
      </Button>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={invoices}
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

export default BillingAndPayments
