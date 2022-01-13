import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Slider from '@react-native-community/slider';

const SettingPopup = props => {
  //   const [modalVisible, setModalVisible] = useState(false);
  const {modalVisible, closePopup, callbackData} = props;
  const [timeDuration, setTimeDuration] = useState(5);
  const [ambtimeDuration, setAmbTimeDuration] = useState(10);
  const [signalRotation, setSgnalRotation] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          closePopup();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text>Time Duration</Text>
              <Text style={{alignSelf: 'center'}}>{timeDuration}</Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={5}
                maximumValue={120}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onValueChange={e => setTimeDuration(parseInt(e))}
              />
            </View>

            <View>
              <Text>AMB Time Duration</Text>
              <Text style={{alignSelf: 'center'}}>{ambtimeDuration}</Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={10}
                maximumValue={300}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onValueChange={e => setAmbTimeDuration(parseInt(e))}
              />
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                callbackData(timeDuration, ambtimeDuration, signalRotation)
              }>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SettingPopup;
