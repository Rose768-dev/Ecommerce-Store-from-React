import React, { useState } from "react";
import axios from "axios";

function ChatComponent() {
  const [inputValue, setInputValue] = useState("");
  const [replyContent, setReplyContent] = useState("");

  const sendToChatGPT = () => {
    let body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputValue }],
      tempreture: "1",
    };

    let headers = {
      Authorization: "Bearer sk-proj-wLMjqKLSs3MpSgCnK2q4T3BlbkFJxlnhA94tXbk4BhLBSDZ2",
    };

    axios
      .post("https://api.openai.com/v1/chat/completions", body, {
        headers: headers,
      })
      .then((response) => {
        let reply = response.data.choices[0].message.content;
        setReplyContent(reply);
      });
  };

  return (
    <div>
      <input
        type="text"
        id="word-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendToChatGPT} id="submit-btn">
        Submit
      </button>
      <div id="reply-content">{replyContent}</div>
    </div>
  );
}

export default ChatComponent;
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// import { IoMdCamera } from 'react-icons/io';
// import { TbCone2, TbCone } from 'react-icons/tb';
// import { SectioWrapper, PrimaryButtons, SecondaryButtons } from '../../components/index';
// import { Link } from 'react-router-dom';
// import OpenAI from 'openai';

// const StepThree = () => {
//   const [productName, setProductName] = useState('');
//   const [category, setCategory] = useState('');
//   const [productionYear, setProductionYear] = useState('');
//   const [renewable, setRenewable] = useState('');
//   const [briefDescription, setBriefDescription] = useState('');
//   const [materialUsed, setMaterialUsed] = useState('');
//   const [generatedDescription, setGeneratedDescription] = useState('');

//   const sendToOpenAI = () => {
//     let body = {
//       model: "gpt-3.5-turbo",
//       prompt: `Create a detailed product description based on the following data:
//         Product Name: ${productName}
//         Category: ${category}
//         Production Year: ${productionYear}
//         Renewable: ${renewable}
//         Brief Description: ${briefDescription}
//         Material Used: ${materialUsed}
//       `,
//       temperature: 0.7,
//       max_tokens: 150
//     };

//     let headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer Your-Key`  // Replace 'Your-Key' with your actual OpenAI API key
//     };

//     axios.post('https://api.openai.com/v1/completions', body, { headers: headers })
//       .then(response => {
//         const generatedText = response.data.choices[0].text.trim();
//         setGeneratedDescription(generatedText);
//       })
//       .catch(error => {
//         console.error('Error fetching data from OpenAI:', error);
//       });
//   };

//   return (
//     <SectioWrapper>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>اسم المنتج*</Form.Label>
//           <Form.Control value={productName} onChange={e => setProductName(e.target.value)} />
//           <br />
//           <Form.Label>الفئة*</Form.Label>
//           <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
//             {/* Insert options here */}
//           </Form.Select>
//           <br />
//           <Form.Label>سنة الصنع*</Form.Label>
//           <Form.Select value={productionYear} onChange={e => setProductionYear(e.target.value)}>
//             {/* Insert options here */}
//           </Form.Select>
//           <br />
//           <Form.Label>خيارات التجديد*</Form.Label>
//           <Form.Select value={renewable} onChange={e => setRenewable(e.target.value)}></Form.Select>