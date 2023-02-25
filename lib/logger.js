import RNFS from 'react-native-fs';

export let logDirPath = '/sdcard/Android/data/com.weardrink/logs';
export let logFilePath = logDirPath + '/log.txt';

function log(...msg) {
  msg = msg.map(v => (typeof v === 'object' ? JSON.stringify(v) : v));
  var ctx =
    '[WearDrink][Info][' + new Date().toISOString() + '] ' + msg.join(' ');
  console.log(ctx);
  RNFS.appendFile(logFilePath, ctx + '\n').catch(err => {
    console.log(RNFS.exists(logFilePath));
    if (err.code === 'ENOENT') {
      RNFS.mkdir(logDirPath);
      RNFS.writeFile(logFilePath);
    } else {
      console.error(err);
    }
  });
}

export {log};
