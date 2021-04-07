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
import { TabItem } from './components/TabItem';
import { UrlEncode } from './components/fn';
import { UtilProps } from './components/fn/utilBase';

function App() {
  const theme: any = {
    "type": "Custom",
    "layout": {
      "pageWidth": "800pt",
    },
  };

  const buildTab = (label: string, fn_elem: () => JSX.Element) => {
    return { label, fn_elem };
  };

  const z = () => <></>;
  const y = (component: (p: UtilProps) => JSX.Element) => () => component({ live: true });

  const encodeTabs = () => {
    return (
      <TabItem items={[
        buildTab('url', y(UrlEncode)),
        buildTab('baseurl', z),
        buildTab('html', z),
        buildTab('bin', z),
        buildTab('oct', z),
        buildTab('hex', z),
      ]} />
    );
  };

  const hashTabs = () => {
    return (
      <TabItem items={[
        buildTab('md5', z),
        buildTab('sha256', z),
        buildTab('sha512', z),
      ]} />
    );
  };

  const cryptoTabs = () => {
    return (
      <TabItem items={[
        buildTab('rotn', z),
      ]} />
    );
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
            <TabItem style={{ width: '50%' }} items={[
              buildTab('encode', encodeTabs),
              buildTab('hash', hashTabs),
              buildTab('crypto', cryptoTabs),
            ]} />
          </Row>
        </Col>
      </div>
    </GeistProvider>
  );
}

export default App;
