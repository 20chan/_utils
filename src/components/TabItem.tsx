import {
  Tabs,
} from '@geist-ui/react';

type Props = {
  items: {
    label: string;
    fn_elem: () => JSX.Element;
  }[];
  style?: any;
};

export const TabItem = (props: Props) => {
  const { items, style } = props;
  return (
    <Tabs initialValue='0' style={style}>
      {
        items.map((x, i) => (
          <Tabs.Item label={x.label} value={(i).toString()}>
            {
              x.fn_elem()
            }
          </Tabs.Item>
        ))
      }
    </Tabs>
  );
};