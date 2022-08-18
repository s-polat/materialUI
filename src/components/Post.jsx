import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";


function Post() {
  return (
    <Box>
         <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Brithday"
        subheader="September 14, 2016"
      />
      <CardMedia
      sx={{height:"450px" }}
        component="img"
        image="https://i.pinimg.com/originals/9a/0f/81/9a0f8104533ad131bf12cd2f45e22d18.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
       
      </CardActions>
     
    </Card>
    </Box>
  )
}

export default Post