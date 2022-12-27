import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants';

export async function addFavPoke(id: number) {
  try {
    const favorites = await getFavPoke();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (e) {
    throw e;
  }
}

export async function getFavPoke() {
  try {
    const res = await AsyncStorage.getItem(FAVORITE_STORAGE);
    if (!res) {
      return [];
    }
    return JSON.parse(res);
  } catch (e) {
    throw e;
  }
}

export async function isPokeFav(id: number) {
  try {
    const res = await getFavPoke();
    return includes(res, id);
  } catch (e) {
    throw e;
  }
}

export async function removePokeFav(id: number) {
  try {
    const favorites = await getFavPoke();
    const newFav = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFav));
  } catch (e) {
    throw e;
  }
}
