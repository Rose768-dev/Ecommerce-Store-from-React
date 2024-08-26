import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

function InventoryManagementPage() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "بلوزة صيفي", quantity: 30, price: 1.5 },
    { id: 2, name: "شمع رغوة", quantity: 50, price: 0.5 }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, name: '', quantity: 0, price: 0 });

  const handleShow = (item = { id: null, name: '', quantity: 0, price: 0 }) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (currentItem.id) {
      setInventory(inventory.map(item =>
        item.id === currentItem.id ? currentItem : item
      ));
    } else {
      setInventory([...inventory, { ...currentItem, id: inventory.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <Container style={{ textAlign: "right" }} dir="rtl">
      <h1 style={{color:"var(--color-darkest)"}}>إدارة المخزون</h1>
      <Button variant="primary" onClick={() => handleShow()}>أضف منتج</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>المعرف</th>
            <th>الاسم</th>
            <th>الكمية</th>
            <th>السعر ($)</th>
            <th>الأفعال</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Button variant="success" onClick={() => handleShow(item)}>تعديل</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(item.id)}>حذف</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} style={{ textAlign: "right" }} dir="rtl">
        <Modal.Header closeButton style={{ textAlign: "lift" }} dir="ltr">
          <Modal.Title>{currentItem.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>الكمية</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={currentItem.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>السعر ($)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="price"
                value={currentItem.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>إغلاق</Button>
          <Button variant="primary" onClick={handleSave}>حفظ التغييرات</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default InventoryManagementPage;
