import sql from "better-sqlite3";

const db = sql("meals.db");

export  function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

// ? value as protection from SQLbase attacks
export  function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}