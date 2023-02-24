import {addPlugin} from 'react-native-flipper';

let state;

export default function (_state) {
  console.log('初始化flipper插件');
  state = _state;
  addPlugin({
    getId() {
      return 'WearDrinkDebugPlugin';
    },
    onConnect(connection) {
      console.log('Wear Drink Debug Plugin 连接成功');
      connection.send('state', state);
      // 同步数据
      // connection.receive('getState', (params, responder) => {
      //   connection.send('state', state);
      // });
    },
    onDisconnect() {
      console.log('Wear Drink Debug Plugin 连接关闭');
    },
    runInBackground() {
      return true;
    },
  });
}
