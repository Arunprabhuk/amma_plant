import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FAB} from 'react-native-paper';
import Map from '../components/Map';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  console.log(user);
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigation.navigate('Login'); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Map />

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('addImage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {flex: 1},
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 20,
    right: 10,
    padding: 2,
  },
});
export default HomePage;
