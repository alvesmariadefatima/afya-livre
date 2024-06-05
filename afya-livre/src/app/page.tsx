"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Items } from "./components/Item/Items";
import { Category } from "./components/category/category";

export default function Home() {
  const [categories, setCategories] = React.useState([]);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [search, setSearch] = React.useState("bicicleta");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const getItems = React.useCallback(async () => {
    setItems([]);
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${selectedCategory}&q=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });

    setItems(data);
    console.log(data);
  }, [search, selectedCategory]);

  React.useEffect(() => {
    void getItems();
  }, [search, selectedCategory]);

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: "0",
          width: "100vw",
          zIndex: "1000 !important",
        }}
      >
        <AppBar
          position="static"
          sx={{
            width: "100vw",
            position: "absolute",
            zIndex: "1000 !important",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Afya Livre
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Items items={items} setItems={setItems} setSearch={setSearch} />
      {openDrawer && (
        <Category
          categories={categories}
          setCategories={setCategories}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
}
