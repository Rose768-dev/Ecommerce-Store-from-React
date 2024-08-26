import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [isOrderSuccessVisible, setIsOrderSuccessVisible] = useState(false);

    const showOrderDetails = (id) => {
        setSelectedOrderId(id);
        setIsOrderSuccessVisible(true);
    };

    const hideOrderDetails = () => {
        setIsOrderSuccessVisible(false);
    };

    return (
        <OrderContext.Provider value={{ selectedOrderId, isOrderSuccessVisible, showOrderDetails, hideOrderDetails }}>
            {children}
        </OrderContext.Provider>
    );
};
