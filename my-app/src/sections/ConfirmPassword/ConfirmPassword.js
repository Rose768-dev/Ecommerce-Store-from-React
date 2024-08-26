import './ConfirmPassword.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons} from '../..//components/index'
import React, { useState } from 'react';

const ConfirmPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من صحة حقل البريد الإلكتروني
    if (!validateEmail(email)) {
      alert('البريد الإلكتروني غير صحيح.');
      return;
    }

    // التحقق من تطابق حقلي كلمة المرور وتأكيد كلمة المرور
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    // تنفيذ عملية تسجيل الدخول هنا
    // ...
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
    <SectioWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>عنوان البريد الإلكتروني</Form.Label>
          <Form.Control
            type="email"
            placeholder="أدخل البريد الإلكتروني"
            style={{ textAlign: 'right' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
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

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>تأكيد كلمة المرور</Form.Label>
          <Form.Control
            type="password"
            placeholder="كلمة المرور"
            style={{ textAlign: 'right' }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={!passwordMatch} // تم تعيين خاصية isInvalid لعرض تنسيق خاص للحقل في حالة عدم التطابق
          />
          {!passwordMatch && (
            <Form.Control.Feedback type="invalid">
              كلمة المرور غير متطابقة.
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '100px',
            marginTop: '72px',
            textAlign: 'center',
          }}
          dir="rtl"
        >
          <Link to="/">
            <PrimaryButtons controlId="loginButton" type="submit">
              تسجيل الدخول
            </PrimaryButtons>
          </Link>
        </div>
      </Form>
    </SectioWrapper>
  </>
)
}
export default ConfirmPassword
