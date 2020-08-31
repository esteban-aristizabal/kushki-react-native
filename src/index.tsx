import { NativeModules } from 'react-native';

type KushkiReactNativeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { KushkiReactNative } = NativeModules;

export default KushkiReactNative as KushkiReactNativeType;
