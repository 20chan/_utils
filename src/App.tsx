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
import {
  Base64Encode,
  UrlEncode,
} from './components/fn';
import { UtilProps } from './components/fn/utilBase';

function App() {
  const buildTab = (label: string, fn_elem: () => JSX.Element) => {
    return { label, fn_elem };
  };

  const empty = () => <></>;
  const build = (component: (p: UtilProps) => JSX.Element) => () => component({ live: true });

  const encodeTabs = () => {
    return (
      <TabItem items={[
        buildTab('url', build(UrlEncode)),
        buildTab('base64', build(Base64Encode)),
        buildTab('bin', empty),
        buildTab('oct', empty),
        buildTab('hex', empty),
      ]} />
    );
  };

  const hashTabs = () => {
    return (
      <TabItem items={[
        buildTab('md5', empty),
        buildTab('sha256', empty),
        buildTab('sha512', empty),
      ]} />
    );
  };

  const cryptoTabs = () => {
    return (
      <TabItem items={[
        buildTab('rotn', empty),
      ]} />
    );
  };

  return (
    <GeistProvider themeType='dark'>
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
