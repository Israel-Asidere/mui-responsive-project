import { Favorite, More, Share } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <More />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia
          component='img'
          height='194'
          image='/static/images/cards/paella.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Favorite />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}
