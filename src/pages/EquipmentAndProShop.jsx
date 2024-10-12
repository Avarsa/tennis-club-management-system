import React, { useState } from 'react'
import { Typography, Button, Grid, Card, CardContent, CardMedia, CardActions, Chip } from '@mui/material'
import { motion } from 'framer-motion'

const mockProducts = [
  { id: 1, name: 'Pro Tennis Racket', price: 199.99, category: 'Rackets', stock: 15, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Tennis Balls (3-pack)', price: 9.99, category: 'Balls', stock: 50, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Performance Tennis Shoes', price: 129.99, category: 'Footwear', stock: 20, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Club T-Shirt', price: 24.99, category: 'Apparel', stock: 30, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Tennis Bag', price: 79.99, category: 'Accessories', stock: 10, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Wristbands (pair)', price: 7.99, category: 'Accessories', stock: 40, image: 'https://via.placeholder.com/150' },
]

const EquipmentAndProShop = () => {
  const [products, setProducts] = useState(mockProducts)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Equipment and Pro Shop
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New Product
      </Button>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price.toFixed(2)}
                  </Typography>
                  <Chip
                    label={product.category}
                    size="small"
                    sx={{ mt: 1, mr: 1 }}
                  />
                  <Chip
                    label={`In Stock: ${product.stock}`}
                    size="small"
                    sx={{ mt: 1 }}
                    color={product.stock > 0 ? 'success' : 'error'}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  )
}

export default EquipmentAndProShop
