import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //Categories.push(value)
    //Hago una copia de las categorias y al final le paso el valor a añadir
    //setCategories([...categories, newCategory]);

    if (categories.includes(newCategory)) {
      return;
    }

    //Para que el newCategory se añada al principio de la lista
    setCategories([newCategory, ...categories]);

    //setCategories(cat => [...cat, 'valorant']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
