import React from "react";
import "./Orders.css";

const Orders = () => {
  return (
    <div className='order-container'>
      <div className='order-header'>
        <div className='button active'>All Orders</div>
        <div className='button'> Pending Orders</div>
        <div className='button'>Trades</div>
      </div>
      <table style={{ width: "100%" }}>
        <tr>
          <th className='order-table-header'>MARKET</th>
          <th className='order-table-header'>TIME</th>
          <th className='order-table-header'>PRICE</th>
          <th className='order-table-header'>AMOUNT</th>
          <th className='order-table-header'>SIDE</th>
          <th className='order-table-header'>STATUS</th>
        </tr>
      </table>
    </div>
  );
};

export default Orders;
