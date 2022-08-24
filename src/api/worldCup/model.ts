import { FoodWorldCup } from '@/models/worldCup';

export type FoodWorldCupResponse = FoodWorldCup;

export type FoodWorldCupRequest = {
  food: string;
  latitude: number;
  longitude: number;
  radius: number;
  round: number;
}
