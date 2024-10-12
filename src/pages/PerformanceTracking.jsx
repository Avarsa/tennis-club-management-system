import React, { useState } from 'react'
import { Typography, Button, Box, Grid, Card, CardContent, LinearProgress } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import { motion } from 'framer-motion'

const mockPlayerData = [
  {
    id: 'John Doe',
    data: [
      { x: 'Jan', y: 65 },
      { x: 'Feb', y: 70 },
      { x: 'Mar', y: 75 },
      { x: 'Apr', y: 80 },
    ],
  },
  {
    id: 'Jane Smith',
    data: [
      { x: 'Jan', y: 70 },
      { x: 'Feb', y: 72 },
      { x: 'Mar', y: 78 },
      { x: 'Apr', y: 82 },
    ],
  },
]

const mockSkillsData = [
  { skill: 'Forehand', level: 80 },
  { skill: 'Backhand', level: 75 },
  { skill: 'Serve', level: 70 },
  { skill: 'Volley', level: 65 },
  { skill: 'Footwork', level: 85 },
]

const PerformanceTracking = () => {
  const [playerData, setPlayerData] = useState(mockPlayerData)
  const [skillsData, setSkillsData] = useState(mockSkillsData)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Performance Tracking
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Player Progress
              </Typography>
              <Box sx={{ height: 400 }}>
                <ResponsiveLine
                  data={playerData}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Performance Score',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Skill Assessment
              </Typography>
              {skillsData.map((skill) => (
                <Box key={skill.skill} sx={{ mb: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    {skill.skill}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                  <Typography variant="body2" align="right">
                    {skill.level}%
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default PerformanceTracking
