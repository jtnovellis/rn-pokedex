import { API_HOST } from '../utils/constants';

export async function getPokemons(endpoint: string | null) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const res = await fetch(endpoint || url);
    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
}

export async function getOnePokemon(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
}
