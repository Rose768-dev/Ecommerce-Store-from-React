import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../../Data/storeItem.json";
import StoreItem7 from "./CardStore7/StoreItem7";
const Store5 = () => {
  
  return (
    <>
      <Row  style={{ textAlign: "right"}} dir="rtl" md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem7 {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store5;