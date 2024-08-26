import React, { useState } from 'react';
import { Button, Card, Form, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const ProductesAper = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewProduct({ ...newProduct, imageUrl: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      quantity: '',
      description: '',
      imageUrl: ''
    });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((product, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (index) => {
    const product = products[index];
    setNewProduct(product);
    handleDeleteProduct(index);
  };

  return (
    <Container style={{ textAlign: "right" }} dir="rtl">
      <Form>
        <Row>
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>الاسم</InputGroup.Text>
              <FormControl
                name="name"
                value={newProduct.name}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>الفئة</InputGroup.Text>
              <FormControl
                name="category"
                value={newProduct.category}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>السعر</InputGroup.Text>
              <FormControl
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                type="number"
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>الكمية</InputGroup.Text>
              <FormControl
                name="quantity"
                value={newProduct.quantity}
                onChange={handleChange}
                type="number"
              />
            </InputGroup>
          </Col>
          <Col md={12}>
            <InputGroup className="mb-3">
              <InputGroup.Text>الوصف</InputGroup.Text>
              <FormControl
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                as="textarea"
                rows={3}
              />
            </InputGroup>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button variant="primary" onClick={handleAddProduct}>
             إضافة منتج
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  الفئة: {product.category}<br />
                  السعر: ${product.price}<br />
                  الكمية: {product.quantity}<br />
                  الوصف: {product.description}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDeleteProduct(index)}>حذف</Button>
                <Button variant="warning" onClick={() => handleEditProduct(index)}>تعديل</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductesAper;
