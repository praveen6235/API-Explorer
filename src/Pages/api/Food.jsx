import { useState, useEffect } from "react";

export default function Food() {

  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });

  }, [search]);

  return (
    <section className="food-page py-4">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">

          <h2 className="fw-bold">
            Food Recipes 🍴
          </h2>

          <input
            type="text"
            className="form-control food-search"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="row">

          {meals.map((meal) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={meal.idMeal}
            >

              <div className="card food-card h-100">

                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="food-img"
                />

                <div className="card-body text-center">
                  <h6>{meal.strMeal}</h6>

                  <p className="text-muted mb-1">
                    {meal.strCategory}
                  </p>

                  <div className="d-flex justify-content-center align-items-center gap-2 mt-2">

                  <a class="youtube btn btn-danger" href={meal.strYoutube} role="button">Youtube</a>
                  
                  <small className="badge bg-success">
                    {meal.strArea}
                  </small>

                </div>
            
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}