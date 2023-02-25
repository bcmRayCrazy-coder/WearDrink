import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  background: {
    backgroundColor: '#000000',
    borderRadius: 8,
    marginBottom: 20,
    width: 320,
    height: 360,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  title: {
    color: '#1296db',
    fontSize: 32,
  },
  sameRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBtnContainer: {
    backgroundColor: '#2a2b2c',
    borderRadius: 20,
    height: 100,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default styles;
