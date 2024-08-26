import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

function CustomerManagementPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "أحمد علي", email: "ahmed@example.com" },
    { id: 2, name: "سارة صالح", email: "sara@example.com" }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState({ id: null, name: '', email: '' });

  const handleShow = (customer = { id: null, name: '', email: '' }) => {
    setCurrentCustomer(customer);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (currentCustomer.id) {
      setCustomers(customers.map(customer => 
        customer.id === currentCustomer.id ? currentCustomer : customer
      ));
    } else {
      setCustomers([...customers, { ...currentCustomer, id: customers.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    setCurrentCustomer({ ...currentCustomer, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <Container style={{ textAlign: "right" }} dir="rtl">
      <h1 style={{color:"var(--color-darkest)"}}>إدارة العملاء</h1>
      <Button variant="primary" onClick={() => handleShow()}>إضافة عميل</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>المعرف</th>
            <th>الاسم</th>
            <th>الايمل</th>
            <th>الأفعال</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <Button variant="success" onClick={() => handleShow(customer)}>تعديل</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(customer.id)}>الحذف</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} style={{ textAlign: "right" }} dir="rtl">
        <Modal.Header closeButton style={{ textAlign: "lift" }} dir="ltr">
          <Modal.Title>{currentCustomer.id ? 'تعديل عميل' : 'إضافة عميل'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentCustomer.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>الايميل</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentCustomer.email}
                onChange={handleChange}
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

export default CustomerManagementPage;
