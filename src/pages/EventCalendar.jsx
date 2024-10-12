import React, { useState } from 'react'
import { Typography, Button, Box } from '@mui/material'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { motion } from 'framer-motion'

const localizer = momentLocalizer(moment)

const mockEvents = [
  {
    id: 1,
    title: 'Summer Camp',
    start: new Date(2023, 6, 1),
    end: new Date(2023, 6, 5),
  },
  {
    id: 2,
    title: 'Junior Tournament',
    start: new Date(2023, 6, 15),
    end: new Date(2023, 6, 17),
  },
  {
    id: 3,
    title: 'Club Social Night',
    start: new Date(2023, 6, 22, 18, 0),
    end: new Date(2023, 6, 22, 22, 0),
  },
]

const EventCalendar = () => {
  const [events, setEvents] = useState(mockEvents)

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('New Event name')
    if (title) {
      setEvents([
        ...events,
        {
          start: slotInfo.start,
          end: slotInfo.end,
          title,
        },
      ])
    }
  }

  const handleSelectEvent = (event) => {
    window.alert(event.title)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Event Calendar
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New Event
      </Button>
      <Box sx={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable
        />
      </Box>
    </motion.div>
  )
}

export default EventCalendar
