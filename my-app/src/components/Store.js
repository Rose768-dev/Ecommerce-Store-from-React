import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../Data/storeItem.json";
import StoreItem from "./CardStore/StoreItem";
const Store = () => {
  return (
    <>
      {/* <Row  style={{ textAlign: "right"}} dir="rtl" md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default Store;
