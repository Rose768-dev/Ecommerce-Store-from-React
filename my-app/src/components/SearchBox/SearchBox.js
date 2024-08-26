import React, { useState } from 'react';
import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import './SearchBox.css';
import storeItems from '../../Data/storeItem.json'; // استيراد بيانات المنتج

function SearchBox() {
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = storeItems.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Form className="d-flex" >
        <Form.Control
          type="search"
          placeholder="بحث"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button
          variant={isHovered ? 'success' : 'outline-success'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: isHovered ? '#A87561' : 'transparent',
            borderColor: '#d7ae9e',
            color: isHovered ? 'white' : '#d7ae9e',
          }}
        >
          بحث
        </Button>
      </Form>
      {filteredProducts.length > 0 && (
        <DropdownButton title="" show className="result-dropdown" >
          {filteredProducts.map((product, index) => (
            <Dropdown.Item key={index} href="#" style={{color:"var(--color-darkest)", textAlign: "right"}} dir="rtl">
              {product.name} - {product.description}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}
    </div>
  );
}

export default SearchBox;
