/* eslint-disable jsx-a11y/anchor-has-content */
import data from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
          {
            data.products.map(product=>(
              <div className="product"key ={product.slug}>
                <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.image} />
                </a>
                <div className="product-info">
                <a href={`/product/${product.slug}`}>

                <p>{product.name} </p>
                </a>
                <p><strong>${product.price} </strong></p>
                <button>Add to cart</button>
                </div>
              </div>
            ))

          }
      </div>

      </main>
    </div>
  );
}

export default App;
