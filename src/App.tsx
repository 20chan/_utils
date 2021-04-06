import React from 'react';
import {
  GeistProvider,
  CssBaseline,
  Button,
  Row,
  Spacer,
  Text,
  Tabs,
  Col,
} from '@geist-ui/react'

function App() {
  const theme: any = {
    "type": "Custom",
    "layout": {
      "pageWidth": "800pt",
    },
  };

  return (
    <GeistProvider themes={[theme]} themeType='custom'>
      <CssBaseline />
      <div>
        <Spacer y={1} />
        <Col>
          <Row justify='center'>
            <Text h2>utils.0chan.dev</Text>
          </Row>
          <Row justify='center'>
            <Tabs initialValue='1' style={{ width: '50%' }}>
              <Tabs.Item label='encode' value='1'>
                <Tabs initialValue='1'>
                  <Tabs.Item label='url' value='1'>
                  </Tabs.Item>
                  <Tabs.Item label='base64' value='2'>
                  </Tabs.Item>
                  <Tabs.Item label='html' value='3'>
                  </Tabs.Item>
                  <Tabs.Item label='hex' value='4'>
                  </Tabs.Item>
                </Tabs>
              </Tabs.Item>
              <Tabs.Item label='hash' value='2'>
                <Tabs initialValue='1'>
                  <Tabs.Item label='md5' value='1'>
                  </Tabs.Item>
                  <Tabs.Item label='sha256' value='2'>
                  </Tabs.Item>
                  <Tabs.Item label='sha512' value='3'>
                  </Tabs.Item>
                </Tabs>
              </Tabs.Item>
              <Tabs.Item label='crypto' value='3'>
                <Tabs initialValue='1'>
                  <Tabs.Item label='rotn' value='1'>
                  </Tabs.Item>
                </Tabs>
              </Tabs.Item>
            </Tabs>
          </Row>
        </Col>
      </div>
    </GeistProvider>
  );
}

export default App;
