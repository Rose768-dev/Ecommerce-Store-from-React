import './ProductsAperture.css'
import Form from 'react-bootstrap/Form';
import {SectioWrapper} from '../../components/index'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { IoMdCamera } from 'react-icons/io';
import { TbCone2 , TbCone} from "react-icons/tb";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ProductesAper from '../../components/index';

const ProductsAperture = () => {
  
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    detailedDescription: '',
    materialsUsed: '',
    imageUrl: ''
  });

  const [images, setImages] = useState(Array(3).fill(null));
  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = URL.createObjectURL(file);
    setImages(updatedImages);
  };


  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const icons = [IoMdCamera,TbCone2 , TbCone];
  const showAllImages = () => {
    // console.log(images);
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };


  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const handlePriceChange = (e) => {
    const price = e.target.value;
    const regex = /^[0-9]+$/;
    if (regex.test(price)) {
      setPrice(price);
      setError('');
    } else {
      setError('يرجى إدخال قيمة سعر صحيحة');
    }

  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      imageUrl: '',
      name: '',
      category: '',
      price: '',
      quantity: '',
      description: '',
      detailedDescription: '',
      materialsUsed: '',
     
    });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (index) => {
    // Handle edit functionality
  };

  return (
<>

<SectioWrapper style={{ textAlign: "right" }} dir="rtl">
  <Form style={{textAlign: "right"}}>
    <h1> أدارة المنتجات</h1>
  </Form>
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)"  ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">
  <Form.Group className="mb-7" controlId="formBasicEmail">
    <Form.Label >اسم المنتج*</Form.Label>
    <Form.Control  type="text" name="name" value={newProduct.name} onChange={handleInputChange}   />

    
    <Form.Label>الفئة*</Form.Label>
    <Form.Select    aria-label="Default select example" name="category" value={newProduct.category} onChange={handleInputChange}>
      <option value="مجوهرات">مجوهرات</option>
      <option value="فن">فن</option>
      <option value="ملابس">ملابس</option>
      <option value="ديكورات منزل">ديكورات منزل</option>
      <option value="حاجات الفرح">حاجات الفرح</option>
      <option value="اللعاب">اللعاب</option>
      <option value="شموع">شموع</option>
    </Form.Select>
  <Form.Label>السعر*</Form.Label>
  <Form.Control
           type="text" name="price" value={newProduct.price} onChange={handlePriceChange}
          
          />
          {error && <Form.Text ClassName="text-danger">{error}</Form.Text>}
          </Form.Group>
          

          <Form.Label>الكمية*</Form.Label>
          <Form.Control
         type="text" name="quantity" value={newProduct.quantity} onChange={handleInputChange}/>
          
  
    <Form.Label>الوصف الموجز*</Form.Label>
    <Form.Control   type="text" name="description" value={newProduct.description} onChange={handleInputChange}   />
    <Form.Label>الوصف التفصيلي*</Form.Label>
    <Form.Control as="textarea" rows={3} name="detailedDescription" value={newProduct.detailedDescription} onChange={handleInputChange}   />

  <Form.Label>المواد المستخدمة*</Form.Label>
  <Form.Control   type="text" name="materialsUsed" value={newProduct.materialsUsed} onChange={handleInputChange}  />
</Form>
{/* ======== */}
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)",marginBottom:"24px",borderRadius:"12px",padding:"24px" }} dir="rtl">
  <Form.Group className="mb-7" controlId="formBasicEmail">
    <Form.Label>الصور*</Form.Label>
    {/* ======== */}
    <div>
      <div style={{ display: 'flex' }}>
        {images.map((selectedImage, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              style={{
                width: '150px',
                height: '150px',
                border: '2px solid var(--color-light)',
                borderRadius: '12px',
                position: 'relative',
                marginRight: '20px', // للتحريك إلى اليمين
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  style={{ width: '100%', height: '100%', border: '2px solid var(--color-light)', borderRadius: '12px', objectFit: 'cover'  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '48px',
                    color: 'var(--color-light)',

                  }}
                  //onClick={() => document.getElementById(`imageInput-${index}`).click()}
                >
                  <Icon />
                </div>
              )}
              <input
                              type="file"
                              accept="image/*"
                              style={{
                              position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                opacity: '0',
                                cursor: 'pointer',
                              }}
   
   
     //id={`imageInput-${index}`}
               // type="file"
               // accept="image/*"
              //  style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event, index)}
              />
            </div>
          );
        })}
      </div>

    </div>
    </Form.Group>
</Form>
   {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
    <button style={{ border: '2', backgroundColor: 'var(--color-primary)' , font_size: '16px',  padding: '10px 20px' , border_radius: '3px',cursor: 'pointer'}  } onClick={handleAddProduct}>إضافة المنتج</button> */}
        
  {products.length > 0 ? (
    <div style={{ textAlign: "right" }}>
      <h2>قائمةالمنتجات: {products.length}</h2>
      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "24px", border: "2px solid var(--color-light)", borderRadius: "12px", padding: "24px" }}>
          <h3>اسم المنتج: {product.name}</h3>
          <p>الفئة: {product.category}</p>
          <p>السعر: {product.price}</p>
          <p>الكمية: {product.quantity}</p>
          <p>الوصف الموجز: {product.description}</p>
          <p>الوصف التفصيلي: {product.detailedDescription}</p>
          <p>المواد المستخدمة: {product.materialsUsed}</p>
         
        </div>
      ))}
    </div>
  ) : (
    <p>لا يوجد منتجات.</p>
    
  )}
  

       
    

   <Button variant="primary" onClick={handleAddProduct} style={{fontsize: '16px' ,
    border_radius: '999px',
    padding:' 12px 30px',
    letter_spacing: '0.5px',
    transition: 'all.3s',
    display:'center',
    margin:  '18 auto',} } href='/productesaper'>إضافة المنتج</Button>



{/* ===== */}

{/*<h2 style={{textAlign: "right"}}>قائمة المنتجات</h2>
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">
  
  <Form.Group className="mb-7">
   

        <div className="product-list">
         
          {products.map((product) => (
            
            <div key={product} className="product-card">
               <img src={product.setImages} alt={product.name} />
  <tr>
              <td>${product.name}</td>
              <td>Category: {product.category}</td>
              <td>Price: ${product.price.toFixed(2)}</td>
              <td>quantity: {product.quantity.toFixed(2)}</td>
              <td>{product.description}</td>
              <td> Detaileddescription: {product.Detaileddescription}</td>
              <td> Materialsused: {product.Materialsused}</td> 
              </tr>

              <button className="btn" onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </div>
          ))}
          
        </div>
    
   </Form.Group>
   </Form>
    */}






</SectioWrapper>
</>
  )
}



export default ProductsAperture





/////////////////////////////////////////////////////////
{/*
return(
  <>
  <SectioWrapper>
      <div> 
          
      </div>
  <Form style={{ textAlign: "right", border: "5px solid var(--color-light)", marginBottom: "24px", borderRadius: "12px", padding: "24px" }} dir="rtl">س
  
     
     <Button variant="primary" style={{fontsize: '16px' , display:'start',
      border_radius: '999px',
      padding:' 12px 30px',
      letter_spacing: '0.5px',
      transition: 'all.3s',
      margin:  '18 auto', }}>إضافة المنتج</Button>
  
  
  </Form>
  
  {products.length > 0 ? (
    <div style={{ textAlign: "right" }}>
      <h2>قائمةالمنتجات: {products.length}</h2>
      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "24px", border: "2px solid var(--color-light)", borderRadius: "12px", padding: "24px" }}>
          <h3>اسم المنتج: {product.name}</h3>
          <p>الفئة: {product.category}</p>
          <p>السعر: {product.price}</p>
          <p>الكمية: {product.quantity}</p>
          <p>الوصف الموجز: {product.description}</p>
          <p>الوصف التفصيلي: {product.detailedDescription}</p>
          <p>المواد المستخدمة: {product.materialsUsed}</p>
          <Button variant="danger" onClick={() => handleDeleteProduct(index)}>حذف</Button>
          <Button variant="primary" onClick={() => handleEditProduct(index)}>تعديل</Button>
        </div>
      ))}
    </div>
  ) : (
    <p>لا يوجد منتجات.</p>
  )}
  
  
  </SectioWrapper>
  </>
  
  )
  
  }
export default ProductesAper();*/}