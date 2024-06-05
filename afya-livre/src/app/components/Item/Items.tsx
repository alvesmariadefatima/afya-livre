"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";
import { TextField } from "@mui/material";

type ItemsProps = {
  items: any[];
  setItems: React.Dispatch<React.SetStateAction<never[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export const Items = (props: ItemsProps) => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        marginTop: "120px",
        flexDirection: "column",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        onChange={(event) => {
          console.info(event.target.value);
          setTimeout(() => {
            props.setSearch(event.target.value);
          }, 500);
        }}
      />
      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "14px",
          marginTop: "10px",
        }}
      >
        {props.items &&
          props.items.length > 0 &&
          props.items.map((item) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={item.title}>
                <CardMedia
                  title={item.title}
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.thumbnail}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
