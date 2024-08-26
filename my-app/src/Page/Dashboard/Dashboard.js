import React from 'react';
import { Container, Row, Col, Card, ListGroup  } from 'react-bootstrap';
import {SectionHeader,SectioWrapper} from '../../components/index'

const Dashboard = ({ totalSales, totalOrders, averageOrderValue  }) => {

        // البيانات الخاصة بالمبيعات
        const salesData = [
            { date: '2024-05-01', amount: 100 },
            { date: '2024-05-02', amount: 150 },
            { date: '2024-05-03', amount: 200 }
        ];
    return (
        <SectioWrapper>
             <SectionHeader >لوحة الوصول</SectionHeader>
            <Container style={{ textAlign: "right"}} dir="rtl">
                <Row>
                    <Col md={4}>

                        <Card>
                            <Card.Header>ملخص الأداء</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>إجمالي المبيعات: {totalSales} دولار</ListGroup.Item>
                                    <ListGroup.Item>إجمالي الطلبات: {totalOrders} طلب</ListGroup.Item>
                                    <ListGroup.Item>متوسط قيمة الطلب: {averageOrderValue} دولار</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                            <Card.Title>إحصائيات المبيعات</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {salesData.map((item, index) => (
                                            <li key={index}>{item.date}: {item.amount} دولار</li>
                                        ))}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card>
                        <Card.Body>
    <Card.Title>إدارة المنتجات</Card.Title>
    <div className="product-management">
        <div className="product-list">
            <h5>قائمة المنتجات</h5>
            <ul>
                <li>منتج 1</li>
                <li>منتج 2</li>
                <li>منتج 3</li>
            </ul>
        </div>
        <div className="add-product">
            <h5>إضافة منتج جديد</h5>
            <form>
                <div className="form-group">
                    <label htmlFor="productName">اسم المنتج:</label>
                    <input type="text" id="productName" />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">سعر المنتج:</label>
                    <input type="text" id="productPrice" />
                </div>
                <div className="form-group">
                    <button type="submit">إضافة</button>
                </div>
            </form>
        </div>
    </div>
</Card.Body>

                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                        <Card.Body>
    <Card.Title>معلومات العملاء</Card.Title>
    <div className="customer-info">
        <div className="customer-list">
            <h5>قائمة العملاء</h5>
            <ul>
                <li>العميل 1</li>
                <li>العميل 2</li>
                <li>العميل 3</li>
            </ul>
        </div>
        <div className="customer-details">
            <h5>تفاصيل العميل</h5>
            <div className="customer-card">
                <p><strong>اسم العميل:</strong> علي أحمد</p>
                <p><strong>البريد الإلكتروني:</strong> ali@example.com</p>
                <p><strong>الهاتف:</strong> 123456789</p>
                <p><strong>العنوان:</strong>شارع الثلاثين: صنعاء </p>
            </div>
        </div>
    </div>
</Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </SectioWrapper>
    );
}

export default Dashboard;
