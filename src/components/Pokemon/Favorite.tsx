import { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addFavPoke, isPokeFav, removePokeFav } from '../../api/favorite';

interface FavoriteProps {
  id: number;
}

export default function Favorite({ id }: FavoriteProps) {
  const [isFav, setIsFav] = useState<boolean | null>(null);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await isPokeFav(id);
        setIsFav(res);
      } catch {
        setIsFav(false);
      }
    })();
  }, [id, reloadCheck]);

  function onReloadCheck() {
    setReloadCheck((prev) => !prev);
  }

  async function addFavorite() {
    try {
      await addFavPoke(id);
      onReloadCheck();
    } catch (e) {
      console.error(e);
    }
  }

  async function removeFav() {
    try {
      await removePokeFav(id);
      onReloadCheck();
    } catch (e) {
      console.error(e);
    }
  }

  const Icon = isFav ? FontAwesome : FontAwesome5;

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      onPress={isFav ? removeFav : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
