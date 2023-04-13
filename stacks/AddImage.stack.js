import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Pressable,
  Modal,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const AddImage = () => {
  const [uri, setUri] = React.useState(undefined);
  const [visible, setVisible] = React.useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.camera} onPress={chooseImage}>
          <Icon name="camera" size={30} />
        </View>
        <View style={{flex: 0.2, paddingLeft: 10}}>
          <TextInput placeholder="description" />
        </View>
        <View style={styles.buttonContainer}>
          <Button buttonColor="#D3D3D3" style={styles.button} mode="contained">
            <Icon name="enviroment" size={15} /> <Text> Loaction</Text>
          </Button>
          <Button style={styles.button} buttonColor="salmon" mode="contained">
            <Icon name="upload" size={15} /> <Text> Upload Image</Text>
          </Button>
        </View>
      </View>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        style={{justifyContent: 'flex-end', margin: 0, height: 5}}>
        <SafeAreaView style={styles.options}>
          <Pressable style={styles.option} onPress={chooseImage}>
            <Icon name="image" />
            <Text>Library </Text>
          </Pressable>
          <Pressable style={styles.option} onPress={openCamera}>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AddImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 0.3,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    marginVertical: 10,
    padding: 5,
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
