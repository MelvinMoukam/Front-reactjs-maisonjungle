import "./styles/layout.css";
import Cart from "./components/Molécules/cart";
import PlantList from "./components/Molécules/PlantList";
import Banner from "./components/Molécules/banner";
import Footer from "./components/Molécules/footer";

function App(): JSX.Element {
  /*   const [cart, updateCart] = useState([]);
  cart={cart} updateCart={updateCart}
  cart={cart} updateCart={updateCart}*/
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart />
        <PlantList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
