import { UtilProps } from '../utilBase';
import { EncoderLayout } from './helper';

export const Base64Encode = (props: UtilProps) => {
  return (
    <>
      <EncoderLayout
        live={props.live}
        fn_encode={btoa}
        fn_decode={atob} />
    </>
  );
};