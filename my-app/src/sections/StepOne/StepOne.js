import React, { useState } from 'react';
import './StepOne.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { SectioWrapper, PrimaryButtons, SecondaryButtons } from '../../components/index';

const StepOne = () => {
    const [storeName, setStoreName] = useState('');
    const [storeNameError, setStoreNameError] = useState('');

    const handleStoreNameChange = (event) => {
        const { value } = event.target;
        setStoreName(value);

        // التحقق من عدد الأحرف
        if (value.length > 20) {
            setStoreNameError('لا يسمح بأكثر من 20 حرف');
        } else {
            setStoreNameError('');
        }
    };

    const handleContinue = () => {
        // التحقق من عدم وجود أخطاء قبل المتابعة
        if (storeNameError || !storeName) {
            alert('يرجى تصحيح الأخطاء في الحقول قبل المتابعة');
            return;
        }

        // تنفيذ الإجراءات اللازمة بعد التحقق من صحة الحقول
        console.log('استمرار إلى الصفحة التالية');
    };

    return (
        <>
            <SectioWrapper>
                <Form style={{ textAlign: "right" }} dir="rtl">
                    <Form.Group className="mb-5" controlId="formBasicEmail"  >
                        <Form.Label>اسم المتجر</Form.Label>
                        <Form.Control
                            placeholder="اسم المتجر"
                            value={storeName}
                            onChange={handleStoreNameChange}
                        />
                        {storeNameError && <div style={{ color: 'red' }}>{storeNameError}</div>}
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label>لغة المتجر</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">عربي</option>
                            <option value="2">إنجليزي</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label>العملة الأساسية</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">ريال يمني قديم</option>
                            <option value="2">ريال يمني جديد</option>
                            <option value="1">ريال سعودي</option>
                            <option value="2">دولار</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
          
                <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: '72px', textAlign: "right" }} dir="rtl">
                <Link to="/steptwopage">
                    <PrimaryButtons onClick={handleContinue}>المتابعة</PrimaryButtons>
                    </Link>
                    <Link to="/home">
                        <SecondaryButtons>السابق</SecondaryButtons>
                    </Link>
                </div>
            </SectioWrapper>
        </>
    )
}

export default StepOne;
