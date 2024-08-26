import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { SectioWrapper, PrimaryButtons, Text } from '../..//components/index';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setEmailError(!emailRegex.test(email));
  };

  const handleLogin = () => {
    // التحقق من تعبئة حقول البريد الإلكتروني وكلمة المرور
    if (email && password) {
      // التحقق من البريد الإلكتروني قبل تسجيل الدخول
      validateEmail();
      
      // التحقق من عدم وجود خطأ في البريد الإلكتروني
      if (!emailError) {
        // هنا يمكنك إجراء استعلام إلى قاعدة البيانات للتحقق مما إذا كان البريد الإلكتروني وكلمة المرور متطابقان مع السجلات الموجودة
        // إذا كانت متطابقة، يتم توجيه المستخدم إلى الصفحة الرئيسية
        console.log('تم تسجيل الدخول بنجاح!');
      } else {
        // عرض تحذير باللون الأحمر
        console.log('البريد الإلكتروني غير صحيح!');
      }
    } else {
      // عرض تحذير باللون الأحمر
      console.log('يرجى ملأ جميع الحقول بشكل صحيح!');
    }
  };

  return (
    <>
      <SectioWrapper>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان البريد الإلكتروني</Form.Label>
            <Form.Control
              type="email"
              placeholder="أدخل البريد الإلكتروني"
              style={{ textAlign: 'right' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError && (
              <Form.Text className="text-danger">
                الرجاء إدخال عنوان بريد إلكتروني بشكل صحيح
              </Form.Text>
            )}
            <br/>
            <Form.Text className="text-muted">
              لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control
              type="password"
              placeholder="كلمة المرور"
              style={{ textAlign: 'right' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Link to="/confirmpasswordpage">
              <Text href="#" className="text-muted2">
                نسيت كلمة المرور؟
              </Text>
            </Link>
          </Form.Group>
        </Form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '100px',
            marginTop: '72px',
            textAlign: 'right',
          }}
          dir="rtl"
        >
          <PrimaryButtons controlId="loginButton" onClick={handleLogin}>
            تسجيل الدخول
          </PrimaryButtons>
        </div>
      </SectioWrapper>
    </>
  );
}

export default Login;
