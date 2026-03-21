import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="drawer"
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div>
                  <div className="flex-row" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image}
                      width={50}
                      height={50}
                    />
                    <h3 style={{ width: "320px", marginRight: "5px" }}>
                      {product.title} ({product.count})
                    </h3>
                    <p
                      style={{
                        marginRight: "10px",
                        width: "60px",
                        color: "red",
                      }}
                    >
                      {product.price}$
                    </p>
                    <button
                      style={{
                        cursor: "pointer",
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "red",
                        border: "none",
                        color: "#fff",
                        width: "50px",
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              );
            })}
          <div>
            <p style={{ textAlign: "center" }}>Toplam Tutar : {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
