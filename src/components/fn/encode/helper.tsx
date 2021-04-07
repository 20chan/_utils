import { Button, Col, Row, Textarea } from '@geist-ui/react';
import React, { useState } from 'react';

type EncodeProps = {
  live: boolean;
  fn_encode: (x: string) => string;
  fn_decode: (x: string) => string;
}

export const EncoderLayout = (props: EncodeProps) => {
  const { live, fn_encode, fn_decode } = props;

  const [decoded, setDecoded] = useState('');
  const [encoded, setEncoded] = useState('');

  const [decodeSuccess, setDecodeSuccess] = useState(true);

  const encode = (value?: string) => {
    setEncoded(fn_encode(value ?? decoded));
  };

  const decode = (value?: string) => {
    try {
      setDecoded(fn_decode(value ?? encoded));
      setDecodeSuccess(true);
    } catch {
      setDecodeSuccess(false);
    }
  };

  const handleDecodedChange = (value: string) => {
    setDecoded(value);
    if (live) {
      encode(value);
    }
  };

  const handleEncodedChange = (value: string) => {
    setEncoded(value);
    if (live) {
      decode(value);
    }
  };

  return (
    <Row gap={0}>
      <Col span={11.8}>
        <Textarea
          width='100%'
          style={{ height: '50vh' }}
          status={decodeSuccess ? 'success' : 'error'}
          value={decoded}
          onChange={e => handleDecodedChange(e.target.value)} />
      </Col>
      <Col span={.4} />
      <Col span={11.8}>
        <Textarea
          width='100%'
          style={{ height: '50vh' }}
          status='success'
          value={encoded}
          onChange={e => handleEncodedChange(e.target.value)} />
      </Col>
    </Row>
  );
};