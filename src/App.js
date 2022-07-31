import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import HeadBar from "./Components/HeadBar/HeadBar";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Order from "./Components/Order/Orders";
import Orderbook from "./Components/Order/Orderbook";
import Trade from "./Components/Order/Trade";

function App() {
  return (
    <div className='App'>
      <div />
      <Navbar />
      <div>
        <HeadBar />
        <div className='platform'>
          <div>
            <div style={{ height: "50%" }}>
              <AdvancedRealTimeChart
                theme='dark'
                symbol='BTCUSDC'
                autosize></AdvancedRealTimeChart>
            </div>
            <Order />
          </div>
          <Orderbook />
          <Trade />
        </div>
      </div>
    </div>
  );
}

export default App;
