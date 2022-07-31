import { useEffect, useRef, useState } from "react";
import "./Orderbook.css";
const Orderbook = () => {
  const [order, setOrder] = useState({ asks: [], bids: [] });
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      const ws = new WebSocket(
        "wss://api-betatestnet.brine.finance/liveorderbookwire",
      );

      ws.onmessage = (event) => {
        console.table(JSON.parse(event.data));
        setOrder(JSON.parse(event.data)["btcusdc"]);
      };
      ws.onclose = () => {
        ws.close();
      };
    }

    return () => {};
  }, []);

  return (
    <div className='orderbook'>
      <div className='orderbook-heading'>
        <div className='button active'> ORDER BOOK</div>
        <div className='button'> Trades</div>
      </div>
      <div className='overbook-subheading'>
        <div>AMOUNT (BTC)</div>
        <div> PRICE (USDC)</div>
      </div>
      <div className='orderbook-row'>
        {order["asks"].map((data, i) => (
          <div className='ask-row' key={i}>
            <div style={{ color: "#AD5950" }}>{data[1]}</div>
            <div>{data[0]}</div>
          </div>
        ))}
      </div>
      <div className='price'>Insert Price here</div>
      <div className='orderbook-row'>
        {order["bids"].map((data, i) => (
          <div className='ask-row' key={i}>
            <div style={{ color: "#39A290" }}>{data[1]}</div>
            <div>{data[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orderbook;
