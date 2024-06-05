"use client";
import { useCallback, useEffect, useState } from "react";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const getGategories = useCallback(async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLB/categories"
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    setCategories(data);
  }, []);

  useEffect(() => {
    void getGategories();
  }, []);
  return (
    <div>
      {categories &&
        categories.length > 0 &&
        categories.map((category) => {
          return (
            <h2 key={category.name} style={{ color: "black" }}>
              {category.name}
            </h2>
          );
        })}
    </div>
  );
};
