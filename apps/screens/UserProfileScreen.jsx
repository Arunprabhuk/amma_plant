import {View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearUser,
  selectUser,
  selectUsersDetails,
  signoutAction,
} from '../redux/slices/userSlice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/AntDesign';
import auth, {firebase} from '@react-native-firebase/auth';
import {getTokenId, getUserDetails, removeTokenId} from '../utiltis/utilitis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auther from '@react-native-firebase/auth';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUsersDetails);
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '814407182169-57gk9a8i2plth612gk3ont22fbt3emmu.apps.googleusercontent.com',
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     // iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   });
  //   signOut();
  // }, []);

  const signOut = () => {
    // getUserDetails().then(res => {
    //   console.log('idToken', res.token);
    //   dispatch(signoutAction());
    // });
    // dispatch(signoutAction());
    auther()
      .signOut()
      .then(() => {
        AsyncStorage.removeItem('@loggedInUserID:id');
        navigation.navigate('Login');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#f4ede630'}}>
      <View
        style={{
          flex: 0.3,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <Avatar.Image
          size={150}
          style={{marginHorizontal: 20, backgroundColor: 'salmon'}}
          source={{uri: user && user.photoURL}}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingBottom: 20,
        }}>
        <TextInput
          label="Full Name"
          value={user && user.fullname}
          // onChangeText={text => setText(text)}
          mode="outlined"
          disabled
          style={{width: 330, marginRight: 5}}
        />
        <TouchableOpacity onPress={signOut}>
          <Icon name="logout" size={25} color="salmon" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <Button
          style={{width: 150, borderColor: 'salmon'}}
          textColor="salmon"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Wallet
        </Button>
        <Button
          style={{width: 150, borderColor: 'salmon'}}
          mode="outlined"
          textColor="salmon"
          onPress={() => console.log('Pressed')}>
          My Plant
        </Button>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <Icon
          onPress={() => navigation.navigate('Home')}
          name="enviroment"
          size={30}
          color="green"
        />
      </View>
    </View>
  );
};

export default UserProfile;
