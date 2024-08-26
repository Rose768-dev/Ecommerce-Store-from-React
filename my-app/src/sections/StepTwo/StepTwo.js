import './StepTwo.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../../components/index'
import Figure from 'react-bootstrap/Figure';
import map from '../../aasets/imgase/map.jpg'
import Image from 'react-bootstrap/Image';
import React from 'react';
import { GoogleMap, useJsApiLoader,MarkerF } from '@react-google-maps/api';
import { StretchVertical } from 'lucide-react';


const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const StepTwo = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCHI_FTMFvKomUbaJ54kUQG_BHsT6da6rU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <>
      <SectioWrapper>
        <Form style={{ textAlign: "right" }} dir="rtl">
        <Form.Group className="mb-5" controlId="formBasicEmail"  >
           <Form.Label>فئة المتجر</Form.Label>
           <Form.Select aria-label="Default select example">
           <option>تحديد الكل</option>
           <option value="1">مجوهرات </option>
           <option value="2">فن</option>
           <option value="1">ملابس</option>
           <option value="2">ديكورات منزل</option>
           <option value="1">حاجات الفرح</option>
           <option value="2">اللعاب</option>
           <option value="2">شموع</option>
           </Form.Select>
           </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>حدد موقع استلام الشحنات</Form.Label>
            <br />
            <Form.Text className="text-muted2" style={{ color: "#A87561", marginBottom: "44px" }}>
              يرجى التأكد من صحة الموقع المحدد ليتمكن مندوبي شركات الشحن من الوصول له بسهولة
            </Form.Text>
            <br />
            <br />
{/* ----------- */}
       <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          StretchVertical: false,
          mapTypeControl:false
        }}
      >
        <MarkerF position={center}></MarkerF>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
    <Form.Label>أضف وصفا لمتجرك(اختياري)</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-" controlId="formBasicstep2"  >
    <Form.Label>عنوان المتجر*</Form.Label>
    <Form.Control/>
    <Form.Label >الحي*</Form.Label>
    <Form.Control />
    <Form.Label>الشارع*</Form.Label>
    <Form.Control/>
    </Form.Group>
        </Form>



    <div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "right"}} dir="rtl">
    <Link to="/stepthreepage">
    <PrimaryButtons>المتابعة</PrimaryButtons></Link>
    <Link to="/steponepage">
    <SecondaryButtons >السابق</SecondaryButtons>
    </Link>
    </div>
    </SectioWrapper>
    </>
  ) : <></>
}
export default  React.memo(StepTwo)

// "react-google-maps": "^9.4.5",