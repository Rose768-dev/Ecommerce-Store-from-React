import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, List, Avatar, Badge } from 'antd';

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-size: 16px;
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: #f1f1f1;
  padding: 20px;
`;

const Content = styled.div`
  flex: 3;
  padding: 20px;
`;

const MessageList = ({ messages, onSelectMessage }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={messages}
      renderItem={message => (
        <List.Item onClick={() => onSelectMessage(message)} style={{ cursor: 'pointer' }}>
          <List.Item.Meta
            avatar={<Avatar src={message.senderAvatar} />}
            title={message.senderName}
            description={message.conversation[message.conversation.length - 1].text}
          />
          {message.unreadCount > 0 && <Badge count={message.unreadCount} style={{ backgroundColor: '#52c41a' }} />}
        </List.Item>
      )}
    />
  );
};

const MessageView = ({ message, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    onSendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div>
      {message.conversation.map((msg, index) => (
        <div key={index} style={{
          alignSelf: msg.sender === message.senderName ? 'flex-end' : 'flex-start',
          backgroundColor: msg.sender === message.senderName ? '#624646' : '#556B2F',
          padding: '10px',
          borderRadius: '10px',
          marginBottom: '10px',
          maxWidth: '200px',
          color: 'white'
        }}>
          {msg.text}
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '20%', border: '1px solid #ccc' }}
        />
        <Button onClick={handleSendMessage} type="primary">
          إرسال
        </Button>
      </div>
    </div>
  );
};

const MessagingApp = () => {
  const initialMessages = [
    {
      id: 1,
      senderName: 'أحمد',
      senderAvatar: 'https://placeimg.com/64/64/people/1',
      conversation: [{ sender: 'أحمد', text: 'مرحبا! كيف حالك؟' }],
      unreadCount: 1
    },
    {
      id: 2,
      senderName: 'سارة',
      senderAvatar: 'https://placeimg.com/64/64/people/',
      conversation: [{ sender: 'سارة', text: 'هل تلقيت الرسالة الأخيرة؟' }],
      unreadCount: 2
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleSendMessage = (newMessage) => {
    const updatedMessage = {
      ...selectedMessage,
      conversation: [...selectedMessage.conversation, { sender: 'أنت', text: newMessage }],
      unreadCount: 0
    };
    setMessages(messages.map(msg => msg.id === selectedMessage.id ? updatedMessage : msg));
    setSelectedMessage(updatedMessage);
  };

  return (
    <Container>
      <Sidebar>
        <Button type="primary" block style={{ marginBottom: 20 }}>
          الرسائل
        </Button>
        <MessageList messages={messages} onSelectMessage={handleSelectMessage} />
      </Sidebar>
      <Content>
        {selectedMessage ? (
          <MessageView message={selectedMessage} onSendMessage={handleSendMessage} />
        ) : (
          <div style={{ textAlign: 'center' }}>Select a message to view</div>
        )}
      </Content>
    </Container>
  );
};

export default MessagingApp;

