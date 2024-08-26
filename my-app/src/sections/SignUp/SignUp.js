import React, { useState } from 'react';
import './SignUp.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SectioWrapper, PrimaryButtons } from '../../components/index';
import { Home } from '../../Page/index';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };
    const [fieldsFilled, setFieldsFilled] = useState(false);


    const handleSignUp = () => {
        // Check if all fields are filled
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('يرجى ملء جميع الحقول');
            return;
        }

        // Check if password matches confirmation
        if (password !== confirmPassword) {
            alert('تأكيد كلمة المرور غير متطابق');
            return;
        }

        // Check email validation
        if (!validateEmail()) {
            alert('البريد الإلكتروني غير صالح');
            return;
        }

        // If all checks pass, set fieldsFilled to true
        // Now you can navigate to the home page
        // Replace the alert below with your navigation logic
        alert('تم إنشاء الحساب بنجاح والآن يمكنك التنقل إلى الصفحة الرئيسية');
        setFieldsFilled(true);
    };

    if (fieldsFilled) {
        return <Home />;
    }

    return (
        <>
            <SectioWrapper>
                <Form>
                    <Row className="checkbox-label">
                        <Col>
                            <Form.Control
                                placeholder="الاسم الأول"
                                style={{ textAlign: "right" }}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="الاسم الأخير"
                                style={{ textAlign: "right" }}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    {/* ----------------------- */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>عنوان البريد الإلكتروني</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="أدخل البريد الإلكتروني"
                            style={{ textAlign: "right" }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted" style={{ color: "#f3ebeb" }}>
                            لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>كلمة المرور</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="كلمة المرور"
                            style={{ textAlign: "right", marginBottom: "16px" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Label>تأكيد كلمة المرور</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="تأكيد كلمة المرور"
                            style={{ textAlign: "right" }}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Col xs="auto">
                        <div className="checkbox-label">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                            />
                            <Form.Check.Label htmlFor="autoSizingCheck" className="label-text">
                                بالتسجيل فأنا أوافق على سياسات المنصة
                            </Form.Check.Label>
                        </div>
                    </Col>
                    <Form.Group className="mb-3">
                    </Form.Group>
                    <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: '72px', textAlign: "center" }} dir="rtl">
                        <PrimaryButtons controlId="loginButton" onClick={handleSignUp}>إنشاء حساب</PrimaryButtons>
                    </div>
                </Form>
            </SectioWrapper>
        </>
    );
}

export default SignUp;
