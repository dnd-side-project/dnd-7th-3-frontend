export interface FoodWorldCupDocument {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  img_url: string[];
  phone: string;
  place_name: string;
  place_url: string;
  review: number;
  road_address_name: string;
  tag: string;
  x: string;
  y: string;
}

interface Meta {
  is_end: boolean;
  pageable_count: number;
  same_name: null | {
    keyword: string;
    region: string[];
    selected_region: string;
  }
  total_count: number;
}

export interface FoodWorldCup {
  documents: FoodWorldCupDocument[];
  meta: Meta;
}

export interface FoodWorldCupItem extends FoodWorldCupDocument {
  round: number;
}
