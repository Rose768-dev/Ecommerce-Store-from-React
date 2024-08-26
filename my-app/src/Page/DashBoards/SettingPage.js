import React from 'react';
import { Form, ToggleButtonGroup, ToggleButton, Switch, Button } from 'react-bootstrap';

function SettingPage() {
  const [language, setLanguage] = React.useState('English');
  const [notifications, setNotifications] = React.useState(true);

  const handleLanguageChange = (val) => {
    setLanguage(val);
  };

  const handleNotificationsChange = (e) => {
    setNotifications(e.target.checked);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Settings</h1>
      <Form.Group style={{ marginBottom: '20px' }}>
        <Form.Label>Language</Form.Label>
        <ToggleButtonGroup type="radio" name="languages" value={language} onChange={handleLanguageChange}>
          <ToggleButton id="tbg-radio-1" value="English" variant="outline-secondary">English</ToggleButton>
          <ToggleButton id="tbg-radio-2" value="Arabic" variant="outline-secondary">Arabic</ToggleButton>
          <ToggleButton id="tbg-radio-3" value="Spanish" variant="outline-secondary">Spanish</ToggleButton>
        </ToggleButtonGroup>
      </Form.Group>
      <Form.Group style={{ marginBottom: '20px' }}>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Enable Notifications"
          checked={notifications}
          onChange={handleNotificationsChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={() => alert('Settings saved!')}>Save Settings</Button>
    </div>
  );
}

export default SettingPage;
