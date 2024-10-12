import React, { useState } from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Coach' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Admin' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Parent' },
]

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers)

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UserManagement
