import React from 'react';
import {ScrollView, Text, View} from 'react-native';
// import { XTCKeyboard } from '../../lib/xtc/XTCModule';
import PageButton from '../components/PageButton';
import SettingButton from '../components/SettingButton';
import EssentialStyles from '../styles/essentialsStyle';
import PageComponent from './PageComponent';

class App extends PageComponent {
  render() {
    return (
      <View style={EssentialStyles.background}>
        <Text style={EssentialStyles.title}>设置</Text>
        <ScrollView>
          <SettingButton
            title="喝水量目标"
            description={'114 ml'}
            onPress={() => {
              this.navigation.navigate('SetGoal');
            }}
          />
          <PageButton
            title="水杯皮肤"
            img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA6xJREFUeF7tmj9M1HAUx7+vdzip4YouDgYCPcNiHGBwMAFD3BwccDIRBiX0dMDEQRiARHFxMMErf+IAiZNGE1ejgUETEzUxDCIUo9HBicJiQuCuzxQ9cxy9tr9e4Wrud8lNfe/33vv8vu/dr70SavxDNV4/JACpgBonIFugxgUgh6BnC9SPmx2koBtANxGOCquFaMbeSAysDzStC/sCOPzwh5rc3Jh04ofxZ+AuU256vb/1Wzl/TwAN2eUhJrodJniRz31L1wbCrKEay1MAXQ3j+8+HaMbqb+kNBUA1Vr4C3FhZAtgkm0+tZtKLIus0ZJdbWaGPYBwQ8XOztSnXVE4FngpQDZMrDe74MzC2pmtDImulDPMOAYMiPuVs7Tw6169r827XxQCwPQpFYdi2988nKTcAHCoJeNHStSdBClIN0+n5xztsmX8BfC+IP0gZLraLFICVOTHil4SaXbkC4mkXO18IrsVvy4huWpkWXwDO4FYSmKsqACe4apivAJzdBYF5ipOJsbW+5u/F11JTX45TLj8Ioj4XcG8tXTvtB965HhsAqUnzPNl4CqDOJXFHzp8AWiDwFoNOAnC+B11st8hG9+o17fl/BcBJtsFY6mIoswCOBUl+lw3RT9jcY2W0F0H9Y6OAQsJHxj+32cnkBJjbghaxbUf0nmzSVzPN70T8YgegkHzKMC8R6DLAXd4F0UsGz67p2iORwgu2sQVQSFDNmucI1G6D2wncDqI8wG/AygeAF0Tk7gYo9gDC7KqIjwQQl3OAyK5FaSsVsNcKsG3F9abC2cVyNxxR7nDhtOe15t4dhT2iMjC/pmudURfrtl7KMOcI6AgaK7qboVoDkDLMMQJuBSEdXwXwtKWn3W6w/hw4vYqrn1hsVFA3DOYePwjxBMCvLT19xiv3QP8LOCCQS+54NEYJDBf3YTUBOLE5j9HSQoMM5UAAggyiagMIO4AlAL/eLne99KdIKqCK54BK4MsWkC0QkoCcASXn8Ur6UHQPooQvZ4Ao/YJ9lLsgmkOUsaUCROlLBfwlEKUMRTchytiyBUTpyxaQLfCHQJR9KKrCKGPLGSBKX84AOQPkDCg7BN2ezIZtMc9H2RE+kY5sCO5FoUHXrORWXAIISrnUruHB0gVWlGdh/aP0I+be1Ux6JsyaoRXgBFOzSyOlr6WGSaIiH7ZHg7y9Wi5GRQAKizpvZVRUREjnIH99+S0dCQC/IHG+LgHEeXf2IzepgP2gHOcYUgFx3p39yO03ISe+X+4s/rMAAAAASUVORK5CYII="
            onPress={() => {
              this.navigation.navigate('Skin');
            }}
          />
        </ScrollView>
      </View>
    );
  }

  // setGoal() {
  //   XTCKeyboard.showKeyboard();
  // }
}

export default App;
