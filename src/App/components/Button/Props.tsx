import {ReactElement, ReactNode} from 'react';

export interface Props {
  children: ReactElement | Array<ReactElement | ReactNode> | String;
  bgColor?: string;
  onMyButtonPressedAction: Function;
}
