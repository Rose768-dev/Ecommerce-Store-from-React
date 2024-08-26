import React, { useState } from 'react';
import './OrderTracker.css';

const OrderTracker = () => {
  const [orderStatus, setOrderStatus] = useState(1); // حالة الطلب

  const handleNextStep = () => {
    if (orderStatus < 4) {
      setOrderStatus(orderStatus + 1);
    }
  };

  return (
    <div className="order-tracker-container">
      <h3>تتبع الطلب</h3>
      <div>
      <ul className="order-steps">
  <li className={`order-step ${orderStatus >= 1 ? "completed" : "  "}`}>
    
    <span className="step-icon">{orderStatus >= 1 ? "✓" : "○"}</span>
    <hr/>
    قيد المراجعة  {'  '}<span className="space"></span>
  </li>
  <li className={`order-step ${orderStatus >= 2 ? "completed" : "  "}`}>
    <span className="step-icon">{orderStatus >= 2 ? "✓" : "○"}</span>
    <hr/>
    الغيت<span className="space"></span>
  </li>
  <li className={`order-step ${orderStatus >= 3 ? "completed" : "  "}`}>
    <span className="step-icon">{orderStatus >= 3 ? "✓" : "○"}</span>
    <hr/>
    في الطريق<span className="space"></span>
  </li>
  <li className={`order-step ${orderStatus === 4 ? "completed" : "  "}`}>
    <span className="step-icon">{orderStatus === 4 ? "✓" : "○"}</span>
    <hr/>
    تم التوصيل<span className="space"></span>
  </li>
</ul>

      </div>

    </div>
  );
};

export default OrderTracker;
