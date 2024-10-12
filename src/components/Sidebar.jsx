import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import EventIcon from '@mui/icons-material/Event'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import PaymentIcon from '@mui/icons-material/Payment'
import MessageIcon from '@mui/icons-material/Message'
import AssessmentIcon from '@mui/icons-material/Assessment'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import BarChartIcon from '@mui/icons-material/BarChart'

const drawerWidth = 240

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'User Management', icon: <PeopleIcon />, path: '/users' },
  { text: 'Court Management', icon: <SportsTennisIcon />, path: '/courts' },
  { text: 'Lesson Management', icon: <EventIcon />, path: '/lessons' },
  { text: 'Tournament Management', icon: <EmojiEventsIcon />, path: '/tournaments' },
  { text: 'Membership Management', icon: <CardMembershipIcon />, path: '/memberships' },
  { text: 'Billing and Payments', icon: <PaymentIcon />, path: '/billing' },
  { text: 'Communication', icon: <MessageIcon />, path: '/communication' },
  { text: 'Performance Tracking', icon: <AssessmentIcon />, path: '/performance' },
  { text: 'Equipment and Pro Shop', icon: <ShoppingCartIcon />, path: '/equipment' },
  { text: 'Event Calendar', icon: <CalendarTodayIcon />, path: '/events' },
  { text: 'Reporting and Analytics', icon: <BarChartIcon />, path: '/reports' },
]

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
