import RNFS from 'react-native-fs';

export let SaveFilePath = '/sdcard/Android/data/com.weardrink/save.json';

async function readStateFile() {
  var fileExists = await RNFS.exists(SaveFilePath);
  if (!fileExists) {
    await RNFS.writeFile(SaveFilePath, '{}');
  }
  return JSON.parse(await RNFS.readFile(SaveFilePath));
}

async function getState() {
  var data = await readStateFile();
  return {
    water: data.water || 0,
    goal: data.goal || 500,
    lastDate: data.lastDate ? data.lastDate : '0',
  };
}

async function saveState(state) {
  await RNFS.writeFile(SaveFilePath, JSON.stringify(state));
}

export {readStateFile, getState, saveState};
