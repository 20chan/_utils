import { UtilProps } from '../utilBase';
import { EncoderLayout } from './helper';

export const UrlEncode = (props: UtilProps) => {
  return (
    <>
      <EncoderLayout
        live={props.live}
        fn_encode={encodeURI}
        fn_decode={decodeURI} />
    </>
  );
};