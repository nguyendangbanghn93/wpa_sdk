import * as React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import WebView from 'react-native-webview';

export interface IWPAProps {
  env: 'develop' | 'qa' | 'staging' | 'production';
  secretkey: string;
  style: StyleProp<ViewStyle>;
}

export default function WPA(props: IWPAProps) {
  const objUrl = {
    develop: 'https://wpa-qa.med247.co',
    qa: 'https://wpa-qa.med247.co',
    staging: 'https://wpa-staging.med247.co',
    production: 'https://wpa.med247.co',
  };
  return (
    <WebView
      source={{ uri: `${objUrl[props.env]}?secretkey=${props.secretkey}` }}
      style={props.style}
    />
  );
}
