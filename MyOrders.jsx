import React, { useState } from 'react';
import './MyOrders.css';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('current');

  // Sample order data
  const orders = [
    {
      id: "ORD-3842",
      date: "April 10, 2025",
      time: "12:30 PM",
      status: "Delivered",
      total: 24.97,
      items: [
        { name: "Classic Latte", quantity: 2, price: 4.99 },
        { name: "Cheeseburger Deluxe", quantity: 2, price: 6.99 }
      ],
      address: "123 Main St, Apt 4B, New York, NY 10001"
    },
    {
      id: "ORD-3801",
      date: "April 5, 2025",
      time: "6:45 PM",
      status: "Delivered",
      total: 18.47,
      items: [
        { name: "Caesar Salad", quantity: 1, price: 8.49 },
        { name: "Iced Mocha", quantity: 2, price: 4.99 }
      ],
      address: "123 Main St, Apt 4B, New York, NY 10001"
    },
    {
      id: "ORD-3756",
      date: "March 28, 2025",
      time: "1:15 PM",
      status: "Delivered",
      total: 32.96,
      items: [
        { name: "Veggie Pizza", quantity: 1, price: 13.99 },
        { name: "Chicken Wings", quantity: 1, price: 12.99 },
        { name: "Coke", quantity: 2, price: 2.99 }
      ],
      address: "123 Main St, Apt 4B, New York, NY 10001"
    }
  ];

  const currentOrders = orders.filter(order => order.status === "Processing" || order.status === "Out for Delivery");
  const pastOrders = orders.filter(order => order.status === "Delivered" || order.status === "Canceled");

  const displayOrders = activeTab === 'current' ? currentOrders : pastOrders;

  return (
    <div className="my-orders">
      <div className="orders-header">
        <h2>My Orders</h2>
        <div className="order-tabs">
          <button 
            className={activeTab === 'current' ? 'active' : ''} 
            onClick={() => setActiveTab('current')}
          >
            Current
          </button>
          <button 
            className={activeTab === 'past' ? 'active' : ''} 
            onClick={() => setActiveTab('past')}
          >
            Past Orders
          </button>
        </div>
      </div>

      <div className="orders-list">
        {displayOrders.length === 0 ? (
          <div className="no-orders">
            <img src="/images/empty-orders.svg" alt="No orders" />
            <p>You don't have any {activeTab === 'current' ? 'current' : 'past'} orders</p>
          </div>
        ) : (
          displayOrders.map(order => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <div className="order-header-left">
                  <h3>Order #{order.id}</h3>
                  <span className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
                <div className="order-header-right">
                  <p className="order-date">{order.date} at {order.time}</p>
                  <p className="order-total">${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div className="order-item" key={index}>
                    <span className="item-quantity">{item.quantity}x</span>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="order-delivery">
                <p><strong>Delivered to:</strong> {order.address}</p>
              </div>

              <div className="order-actions">
                <button className="btn-reorder">Reorder</button>
                <button className="btn-details">View Details</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;