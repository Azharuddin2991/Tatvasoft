// import libraries
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './Styles';
import SettingPopup from '../component/SettingPopup';

// create a component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [isPopup, setPopup] = useState(false);
  const [timeDuration, setTimeDuration] = useState(5000);
  const [timeInSec, setTimeInSec] = useState(timeDuration / 1000);
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');
  const [ambtimeDuration, setAmbTimeDuration] = useState(10000);
  const [signalRotation, setSgnalRotation] = useState('');

  useEffect(() => {
    // setTimeout(changeColor1, timeDuration);
    changeColor1();
  }, []);

  const changeColor1 = () => {
    setColor1('green');
    setColor2('');
    setColor3('');
    setColor4('');
    setTimeout(changeColor2, timeDuration);
  };

  const changeColor2 = () => {
    setColor1('');
    setColor2('green');
    setColor3('');
    setColor4('');
    setTimeout(changeColor3, timeDuration);
  };

  const changeColor3 = () => {
    setColor1('');
    setColor2('');
    setColor3('green');
    setColor4('');
    setTimeout(changeColor4, timeDuration);
  };

  const changeColor4 = () => {
    setColor1('');
    setColor2('');
    setColor3('');
    setColor4('green');
    setTimeout(changeColor1, timeDuration);
  };

  const openSetting = () => {
    console.log('openSetting ');
    setPopup(true);
  };

  const _closePopup = () => {
    setPopup(false);
  };

  const _callbackData = (timeDuration, ambtimeDuration, signalRotation) => {
    console.log(
      'timeDuration, ambtimeDuration, signalRotation',
      timeDuration,
      ambtimeDuration,
      signalRotation,
    );
    setPopup(false);
    setTimeDuration(timeDuration * 1000);
    setTimeInSec(timeDuration);
    setAmbTimeDuration(ambtimeDuration * 1000);
    setSgnalRotation(signalRotation);
  };

  return (
    <View style={{flex: 1}}>
      {isPopup ? (
        <SettingPopup
          modalVisible={isPopup}
          closePopup={_closePopup}
          callbackData={_callbackData}
        />
      ) : null}

      <View style={{padding: 25}}>
        <Text style={{alignSelf: 'center'}}>Traffic Signal</Text>
        <TouchableOpacity
          onPress={() => openSetting()}
          style={{alignItems: 'flex-end'}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/settings.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.container}>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => changeColor1()}
            style={Styles.ambTxt}>
            <Text style={{fontSize: 8}}>AMB</Text>
          </TouchableOpacity>

          <View
            style={[
              Styles.abcdTxt,
              {backgroundColor: color1 ? color1 : 'white'},
            ]}>
            <Text style={{fontSize: 10}}>A</Text>
          </View>

          <View style={Styles.timeDurationTxt}>
            <Text>{timeInSec}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => changeColor4()}
              style={Styles.ambRowTxt}>
              <Text style={{fontSize: 8}}>AMB</Text>
            </TouchableOpacity>

            <View
              style={[
                Styles.abcdRowTxt,
                {backgroundColor: color4 ? color4 : 'white'},
              ]}>
              <Text style={{fontSize: 10}}>D</Text>
            </View>

            <View style={Styles.timeRowDurationTxt}>
              <Text>{timeInSec}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={Styles.timeRowDurationTxt}>
              <Text>{timeInSec}</Text>
            </View>

            <View
              style={[
                Styles.abcdRowTxt,
                {backgroundColor: color2 ? color2 : 'white'},
              ]}>
              <Text style={{fontSize: 10}}>B</Text>
            </View>

            <TouchableOpacity
              onPress={() => changeColor2()}
              style={[Styles.ambRowTxt, {marginLeft: 10}]}>
              <Text style={{fontSize: 8}}>AMB</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{alignSelf: 'center', marginTop: 20}}>
          <View style={Styles.timeDurationTxt}>
            <Text>{timeInSec}</Text>
          </View>

          <View
            style={[
              Styles.abcdTxt,
              {backgroundColor: color3 ? color3 : 'white'},
            ]}>
            <Text style={{fontSize: 10}}>C</Text>
          </View>

          <TouchableOpacity
            onPress={() => changeColor3()}
            style={[Styles.ambTxt, {marginTop: 5}]}>
            <Text style={{fontSize: 8}}>AMB</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your Styles

export default Home;
