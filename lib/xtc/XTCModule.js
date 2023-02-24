import {NativeModules} from 'react-native';

console.log(JSON.stringify(NativeModules.XTCKeyboard));

export let XTCKeyboard = NativeModules.XTCKeyboard;
