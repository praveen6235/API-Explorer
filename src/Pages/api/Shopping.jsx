import { useState, useEffect } from "react";

export default function Shopping() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="shopping-page py-4">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">

          <h2 className="fw-bold m-0 mb-3">
            Shopping 🛒
          </h2>
          
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="row">

          {filteredProducts.map((item) => (
            <div className="col-md-3 col-sm-6 mb-4" key={item.id}>

              <div className="card shopping-card h-100 text-center p-3">

                <img
                  src={item.image}
                  alt={item.title}
                  className="product-img"
                />

                <h6 className="mt-3">
                  {item.title.substring(0, 100)}
                </h6>

                <h5 className="text-primary">
                  ₹ {item.price + 500}
                </h5>

                <button className="btn btn-outline-primary mt-auto">
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}