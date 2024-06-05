"use client";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

type CategoryProps = {
  categories: any[];
  setCategories: Dispatch<SetStateAction<never[]>>;
};
export const Category = (props: CategoryProps) => {
  const getGategories = useCallback(async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLB/categories"
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    props.setCategories(data);
  }, []);

  useEffect(() => {
    void getGategories();
  }, []);
  return (
    <Box
      sx={{
        position: "fixed",
        top: "55px",
        left: 0,
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "solid 1px gray",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    >
      <List component="nav" aria-label="secondary mailbox folder">
        {props.categories &&
          props.categories.length > 0 &&
          props.categories.map((category) => {
            return (
              <ListItemButton>
                <ListItemText
                  primary={category.name}
                  style={{ color: "black" }}
                />
              </ListItemButton>
              //   <h2 key={category.name} style={{ color: "black" }}>
              //     {category.name}
              //   </h2>
            );
          })}
      </List>
    </Box>
  );
};
