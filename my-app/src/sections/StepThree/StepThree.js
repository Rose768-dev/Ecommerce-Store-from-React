//sk-proj-8XZtiOyTJ2NuvYdqzY3oT3BlbkFJm4JOrLOzNtof7ZF2qpbG
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { IoMdCamera } from 'react-icons/io';
import { TbCone2, TbCone } from 'react-icons/tb';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../../components/index'
import { Link } from 'react-router-dom';
import OpenAI from 'openai';


const StepThree = () => {
   const [images, setImages] = useState(Array(3).fill(null));

    const handleImageChange = (event, index) => {
      const file = event.target.files[0];
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file);
      setImages(updatedImages);
    };
  
    const icons = [IoMdCamera, TbCone2, TbCone];
    const showAllImages = () => {
      // console.log(images);
     }
    //  ====switch
  
    const [isChecked, setIsChecked] = useState(false);
  
    const handleChange = () => {
      setIsChecked(!isChecked);
    };
    // ------------------------------
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [productionYear, setProductionYear] = useState('');
    const [renewable, setRenewable] = useState('');
    const [briefDescription, setBriefDescription] = useState('');
    const [materialUsed, setMaterialUsed] = useState('');
    const [generatedDescription, setGeneratedDescription] = useState('');
  
    const sendToOpenAI = () => {
      let body = {
        model: "gpt-3.5-turbo",
        prompt: `Create a detailed product description based on the following data:
          Product Name: ${productName}
          Category: ${category}
          Production Year: ${productionYear}
          Renewable: ${renewable}
          Brief Description: ${briefDescription}
          Material Used: ${materialUsed}
        `,
        temperature: 0.7,
        max_tokens: 150
      };
  
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-proj-8XZtiOyTJ2NuvYdqzY3oT3BlbkFJm4JOrLOzNtof7ZF2qpbG`  // Replace 'Your-Key' with your actual OpenAI API key
      };
  
      axios.post('https://api.openai.com/v1/completions', body, { headers: headers })
        .then(response => {
          const generatedText = response.data.choices[0].text.trim();
          setGeneratedDescription(generatedText);
        })
        .catch(error => {
          console.error('Error fetching data from OpenAI:', error);
        });
    };
  
  
  return (
    <>
    <SectioWrapper>
      <Form style={{ textAlign: "right", border: "2px solid var(--color-light)",marginBottom:"24px",borderRadius:"12px",padding:"24px" }} dir="rtl">
        <Form.Group className="mb-3">
          <Form.Label>اسم المنتج*</Form.Label>
          <Form.Control value={productName} onChange={e => setProductName(e.target.value)} />
          <br />
          <Form.Label>الفئة*</Form.Label>
          <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="jewelry">مجوهرات</option>
            <option value="art">فن</option>
            <option value="clothes">ملابس</option>
            <option value="home_decor">ديكور منزلي</option>
          </Form.Select>
          <br />
          <Form.Label>سنة الصنع*</Form.Label>
          <Form.Select value={productionYear} onChange={e => setProductionYear(e.target.value)}>
            <option value="2020-2023">2020-2023</option>
            <option value="2010-2019">2010-2019</option>
            <option value="2000-2009">2000-2009</option>
            <option value="1990-1999">التسعينات</option>
            <option value="1980-1989">الثمانينات</option>
          </Form.Select>
          <br />
          <Form.Label>خيارات التجديد*</Form.Label>
          <Form.Select value={renewable} onChange={e => setRenewable(e.target.value)}>
            <option value="renewable">قابل للتجديد</option>
            <option value="non-renewable">غير قابل للتجديد</option>
          </Form.Select>
          <br />
          <Form.Label>وصف موجز للمنتج*</Form.Label>
          <Form.Control as="textarea" rows={3} value={briefDescription} onChange={e => setBriefDescription(e.target.value)} />
          <br />
          <Form.Label>المواد المستخدمة*</Form.Label>
          <Form.Control as="textarea" rows={3} value={materialUsed} onChange={e => setMaterialUsed(e.target.value)} />
          <br />
          <Button variant="primary" onClick={sendToOpenAI}>توليد الوصف</Button>
          {generatedDescription && (
            <div>
              <h4>الوصف الذي تم إنشاؤه:</h4>
              <p>{generatedDescription}</p>
            </div>
          )}
        </Form.Group>
      </Form>
 {/* ------------------------------------------------- */}
          <Form style={{ textAlign: "right", border: "2px solid var(--color-light)",marginBottom:"24px",borderRadius:"12px",padding:"24px" }} dir="rtl">
          <Form.Group className="mb-7" controlId="formBasicEmail">
          <Form.Label>الصور*</Form.Label>
 
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
                  style={{ width: '100%', height: '100%', border: '2px solid var(--color-light)', borderRadius: '12px' }}
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
                  }}
                  onClick={() => document.getElementById(`imageInput-${index}`).click()}
                >
                  <Icon size={50} />
                </div>
              )}
              <input
                id={`imageInput-${index}`}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event, index)}
              />
            </div>
          );
        })}
      </div>

    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
          <Button style={{ border: '0', backgroundColor: 'var(--color-primary)' }} onClick={showAllImages}>
             عرض جميع الصور 
          </Button>
        </div>
  </Form.Group>
</Form>

<Form style={{ textAlign: "right", border: "2px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">

  <Form.Label>السعر*</Form.Label>
  <Form.Control
            type="text"
            placeholder="ريال يمني"
            style={{ width: '200px' }} // تم تعيين ارتفاع أقل هنا
          />
            <br/>
          <Form.Label>الكمية*</Form.Label>
  <Form.Control
            type="text"
            style={{ width: '200px' }} // تم تعيين ارتفاع أقل هنا
          />
            <br/>
          <Form.Label>معرف الطلب*</Form.Label>
  <Form.Control
            type="text"
            placeholder="12345A"
            style={{ width: '200px' }} // تم تعيين ارتفاع أقل هنا
          />
</Form>

<Form style={{ textAlign: "right", border: "2px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="سياسة الإستبدال والاسترجاع"
        checked={isChecked}
        onChange={handleChange}
        style={{ marginBottom: "16px" }}
      />

      {isChecked && (
        ['checkbox'].map((type) => (
          <div key={`reverse-${type}`} className="mb-3">
            <Form.Check
              reverse
              label="شحن مجاني للطلبات التي تزيد عن عشرة ألف ريال يمني"
              name="group1"
              type={type}
              id={`reverse-${type}-1`}
            />
            <Form.Check
              reverse
              label="الاستبدال والإسترجاع خلال 24 ساعة"
              name="group1"
              type={type}
              id={`reverse-${type}-2`}
            />
          </div>
        ))
      )}
    </div>
</Form>
<div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "right"}} dir="rtl">
    <Link to="/stepfourpage">
    <PrimaryButtons>المتابعة</PrimaryButtons></Link>
    <Link to="/steptwopage">
      <SecondaryButtons>السابق</SecondaryButtons>
    </Link>
    </div>



{/* ======== */}
  {/*  */}
{/* */}
</SectioWrapper> 
</>
  )
}

export default StepThree
{/* */}
    // -----------------
   
    // "model": "gpt-3.5-turbo",
    // "messages": [{"role": "user", "content": {briefDescription}}],
    // "temperature": 0.7,
    // prompt: `Product name: ${productName}\nBrief description: ${briefDescription}\nDetailed description: ${detailedDescription}`,
      