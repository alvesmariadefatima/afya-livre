"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from "react";

export const Items = () => {
  const [items, setItems] = useState([]);
  const getItems = useCallback(async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLB/search?q=bicicleta"
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });

    setItems(data);
    console.log(data);
  }, []);

  useEffect(() => {
    void getItems();
  }, []);
  return (
    <div>
      {items &&
        items.length > 0 &&
        items.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        title = {item.title}
        component="img"
        alt="green iguana"
        height="140"
        image= {item.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          );
        })}
    </div>
  );
};
