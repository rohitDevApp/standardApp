import {ReactNode} from 'react';

export type fontWeightType =
  | 'normal'
  | 'bold'
  | 'semibold'
  | 'light'
  | 'medium'
  | '800'
  | '700'
  | '600'
  | '500'
  | '400'
  | '300'
  | '200'
  | '100';

//alignment Type
export type alignType = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type lineType = 'underline' | 'none';
export type ellipsizeMode = 'head' | 'middle' | 'tail' | 'clip' | undefined;

//appTextType
export interface appTextType {
  children: React.ReactNode;
  color: string;
  fontWeight?: fontWeightType;
  size: number;
  numberOfLines?: number;
  ellipsizeMode?: 'tail';
  align?: alignType;
  line?: lineType;
  onPress?: () => void;
}

//customBtnProps
export interface customBtnProps {
  onPress?: () => void;
  size?: number;
  align?: alignType;
  line?: lineType;
  color?: string;
  bgColor?: string;
  fontWeight?: fontWeightType;
  title: string;
  loading?: boolean;
  disabled?: boolean;
  style?: object;
}

//Search Props
export interface searchProps {
  onChangeText: (text: string) => void;
}

//interface Input With Label
export interface inputLabelProps {
  label: string;
  isLabel?: boolean;
  subLabel?: string;
  code?: string;
  dark?: string;
  required?: boolean;
  eye?: boolean;
  editable?: boolean;
  defaultValue?: string;
  value?: string;
  size?: number;
  multiline?: boolean;
  fontWeight?: fontWeightType;
  style?: object;
  onChangeText?: (fieldName: string) => void;
  onBlur?: () => void;
}

//Node Type
export interface childrenType {
  children: ReactNode;
}
