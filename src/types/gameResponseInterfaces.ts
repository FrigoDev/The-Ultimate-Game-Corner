export interface RootGameRequest {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    seo_h1: string;
    noindex: boolean;
    nofollow: boolean;
    description: string;
    filters: Filters;
    nofollow_collections: string[];
}
  
export interface DetailedGameResponse {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
  esrb_rating: EsrbRating;
  clip: null;
  description_raw: string;
}

  interface Filters {
    years: Year2[];
  }
  
  interface Year2 {
    from: number;
    to: number;
    filter: string;
    decade: number;
    years: Year[];
    nofollow: boolean;
    count: number;
  }
  
  interface Year {
    year: number;
    count: number;
    nofollow: boolean;
  }
  
  interface Result {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: Addedbystatus;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game?: any;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Platform2[];
    parent_platforms: Parentplatform[];
    genres: Genre[];
    stores: Store2[];
    clip?: any;
    tags: Tag[];
    esrb_rating: Platform3;
    short_screenshots: Shortscreenshot[];
  }
  
  interface Shortscreenshot {
    id: number;
    image: string;
  }
  
  interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }
  
  interface Store2 {
    id: number;
    store: Store;
  }
  
  interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  }
  
  interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  interface Parentplatform {
    platform: Platform3;
  }
  
  interface Platform3 {
    id: number;
    name: string;
    slug: string;
  }
  
  interface Platform2 {
    platform: Platform;
    released_at?: string | string;
    requirements_en?: (Requirementsen | null)[];
    requirements_ru?: (Requirementsru | null)[];
  }
  
  interface Requirementsru {
    minimum: string;
    recommended: string;
  }
  
  interface Requirementsen {
    minimum: string;
    recommended?: string;
  }
  
  interface Platform {
    id: number;
    name: string;
    slug: string;
    image?: any;
    year_end?: any;
    year_start?: (null | number)[];
    games_count: number;
    image_background: string;
  }
  
  interface Addedbystatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  }
  
  interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
  }
  
interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

interface ParentPlatform {
  platform: Platform;
}

interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}