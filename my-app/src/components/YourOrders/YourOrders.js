import React from 'react';
import './YourOrders.css';
import OrderSuccessful from '../Order/OrderSuccessful';
import { OrderProvider, useOrderContext } from '../../context/OrderContext'; // تأكد من تعديل المسار

const YourOrdersContent = () => {
    const { selectedOrderId, isOrderSuccessVisible, showOrderDetails } = useOrderContext();
    const data = [
        {
            id: 112345,
            date: '12/12/2023',
            status: 'تم التوصيل',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2023',
            status: 'على الطريق',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2023',
            status: 'تم التوصيل',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2023',
            status: 'ألغيت',
            total: 100
        },
        {
            id: 112345,
            date: '12/12/2023',
            status: 'تم التوصيل',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2023',
            status: 'على الطريق',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2023',
            status: 'تم التوصيل',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2023',
            status: 'ألغيت',
            total: 100
        }
    ];

    return (
        <div className='yourorders' style={{ textAlign: "right" }} dir="rtl">
            <h1 className='mainhead1'>طلباتك</h1>
            {isOrderSuccessVisible && selectedOrderId && (
                <OrderSuccessful orderid={selectedOrderId} message={`Order ID: ${selectedOrderId}`} />
            )}
            <table className='yourorderstable'>
                <thead>
                    <tr>
                        <th scope='col'>معرف الطلب</th>
                        <th scope='col'>التاريخ</th>
                        <th scope='col'>الحالة</th>
                        <th scope='col'>المجموع</th>
                        <th scope='col'>فاتورة</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td data-label='OrderID'>{item.id}</td>
                            <td data-label='OrderDate'>{item.date}</td>
                            <td data-label='Delivery Status'>
                                {item.status === 'تم التوصيل' && <span className='greendot'>تم التوصيل</span>}
                                {item.status === 'على الطريق' && <span className='yellowdot'>في الطريق</span>}
                                {item.status === 'ألغيت' && <span className='reddot'>ألغيت</span>}
                            </td>
                            <td data-label='Total'>${item.total}</td>
                            <td data-label='Invoice'>
                                <button className='mainbutton1' onClick={() => showOrderDetails(item.id)}>
                                    عرض
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// تغليف مكون YourOrders بـ OrderProvider
const YourOrders = () => {
    return (
        <OrderProvider>
            <YourOrdersContent />
        </OrderProvider>
    );
}

export default YourOrders;