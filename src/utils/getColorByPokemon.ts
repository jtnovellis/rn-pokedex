import { POKEMON_TYPE_COLORS } from './constants';

export const getColorByPokemon = (type: string) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];
