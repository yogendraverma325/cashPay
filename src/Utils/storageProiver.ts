import AsyncStorage from '@react-native-async-storage/async-storage';
const setStorageData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
    // saving error
  }
};
const getStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
    // error reading value
  }
};
const removeStorageData = async () => {
  let keys = ['UserToken'];
  try {
    await AsyncStorage.removeItem('UserToken');
  } catch (e) {
    // read key error
  }
};

export {setStorageData, getStorageData, removeStorageData};
