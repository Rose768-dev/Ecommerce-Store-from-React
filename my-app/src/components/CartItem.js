import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../Data/storeItem.json";
import FormatCurrency from "./FormatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack style={{ textAlign: "right"}} dir="rtl" direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px"}}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
// import React from 'react';
// import './YourOrders.css';
// import OrderSuccessful from '../Order/OrderSuccessful';
// import { OrderProvider, useOrderContext } from '../../context/OrderContext'; // تأكد من تعديل المسار

// const YourOrdersContent = () => {
//     const { selectedOrderId, isOrderSuccessVisible, showOrderDetails } = useOrderContext();
//     const data = [
//         {
//             id: 112345,
//             date: '12/12/2023',
//             status: 'تم التوصيل',
//             total: 1000
//         },
//         {
//             id: 112346,
//             date: '12/12/2023',
//             status: 'على الطريق',
//             total: 1600
//         },
//         {
//             id: 112347,
//             date: '12/12/2023',
//             status: 'تم التوصيل',
//             total: 2000
//         },
//         {
//             id: 112348,
//             date: '12/12/2023',
//             status: 'ألغيت',
//             total: 100
//         },
//         {
//             id: 112345,
//             date: '12/12/2023',
//             status: 'تم التوصيل',
//             total: 1000
//         },
//         {
//             id: 112346,
//             date: '12/12/2023',
//             status: 'على الطريق',
//             total: 1600
//         },
//         {
//             id: 112347,
//             date: '12/12/2023',
//             status: 'تم التوصيل',
//             total: 2000
//         },
//         {
//             id: 112348,
//             date: '12/12/2023',
//             status: 'ألغيت',
//             total: 100
//         }
//     ];

//     return (
//         <div className='yourorders' style={{ textAlign: "right" }} dir="rtl">
//             <h1 className='mainhead1'>طلباتك</h1>
//             {isOrderSuccessVisible && selectedOrderId && (
//                 <OrderSuccessful orderid={selectedOrderId} message={`Order ID: ${selectedOrderId}`} />
//             )}
//             <table className='yourorderstable'>
//                 <thead>
//                     <tr>
//                         <th scope='col'>معرف الطلب</th>
//                         <th scope='col'>التاريخ</th>
//                         <th scope='col'>الحالة</th>
//                         <th scope='col'>المجموع</th>
//                         <th scope='col'>فاتورة</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={index}>
//                             <td data-label='OrderID'>{item.id}</td>
//                             <td data-label='OrderDate'>{item.date}</td>
//                             <td data-label='Delivery Status'>
//                                 {item.status === 'Delivered' && <span className='greendot'>تم التوصيل</span>}
//                                 {item.status === 'On the way' && <span className='yellowdot'>في الطريق</span>}
//                                 {item.status === 'Cancelled' && <span className='reddot'>ألغيت</span>}
//                             </td>
//                             <td data-label='Total'>${item.total}</td>
//                             <td data-label='Invoice'>
//                                 <button className='mainbutton1' onClick={() => showOrderDetails(item.id)}>
//                                     عرض
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// // تغليف مكون YourOrders بـ OrderProvider
// const YourOrders = () => {
//     return (
//         <OrderProvider>
//             <YourOrdersContent />
//         </OrderProvider>
//     );
// }

// export default YourOrders;
// import React, { useState } from 'react'
// import './YourOrders.css'
// import OrderSuccessful from '../Order/OrderSuccessful'


// const YourOrders = () => {

//   const data = [
//     {
//         id: 112345,
//         date: '12/12/2023',
//         status: 'Delivered',
//         total: 1000
//     },
//     {
//         id: 112346,
//         date: '12/12/2023',
//         status: 'On the way',
//         total: 1600
//     },
//     {
//         id: 112347,
//         date: '12/12/2023',
//         status: 'Delivered',
//         total: 2000
//     },
//     {
//         id: 112348,
//         date: '12/12/2023',
//         status: 'Cancelled',
//         total: 100
//     },
//     {
//         id: 112345,
//         date: '12/12/2023',
//         status: 'Delivered',
//         total: 1000
//     },
//     {
//         id: 112346,
//         date: '12/12/2023',
//         status: 'On the way',
//         total: 1600
//     },
//     {
//         id: 112347,
//         date: '12/12/2023',
//         status: 'Delivered',
//         total: 2000
//     },
//     {
//         id: 112348,
//         date: '12/12/2023',
//         status: 'Cancelled',
//         total: 100
//     }
// ]
//     const [selectedorderid, setselectedorderid] = useState(0)
//     // const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
//     return (
//         <div className='yourorders' style={{ textAlign: "right"}} dir="rtl">
//             <h1 className='mainhead1'>طلباتك</h1>

//               {/* <OrderSuccessful orderid={selectedorderid} message={`Order ID: ${selectedorderid}`} /> */}

//             <table className='yourorderstable'>
//                 <thead>
//                     <tr>
//                         <th scope='col'>معرف الطلب</th>
//                         <th scope='col'>التاريخ</th>
//                         <th scope='col'>الحالة</th>
//                         <th scope='col'>المجموع</th>
//                         <th scope='col'>فاتورة</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {data.map((item, index) => {
//                         return (
//                             <tr key={index}>
//                                 <td data-label='OrderID'>{item.id}</td>
//                                 <td data-label='OrderDate'>{item.date}</td>
//                                 <td data-label='Delivery Status'>
//                                 <div >
//                                 {item.status == 'Delivered' && <><span className='greendot'></span>تم التوصيل</>}
//                                 {item.status == 'On the way' && <><span className='yellowdot'></span> في الطريق</>}
//                                 {item.status == 'Cancelled' && <><span className='reddot'></span> ألغيت</>}
//                                 </div>
                            
//                                 </td>
//                                 <td data-label='Total'>${item.total}</td>
//                                 <td data-label='Invoice'>
//                                     <button className='mainbutton1'
//                                         onClick={() => {
//                                             setselectedorderid(item.id)
//                                             // setordersuccesscont(true)
//                                         }}
//                                         style={{color:"var(--color-darkest),"}}
//                                     >عرض</button>
//                                 </td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default YourOrders