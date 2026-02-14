export interface Movie {
  id?: string | number;

  title_uz?: string;
  title_ru?: string;
  title_en?: string;

  description_uz?: string;
  description_ru?: string;
  description_en?: string;

  poster_url?: string;
  banner_url?: string;
  trailer_url?: string;
  video_url?: string;

  country?: string;
  language?: string;
  age_rating?: string;

  release_year?: number;
  duration_minutes?: number;

  imdb_rating?: number;
  view_count?: number;

  is_active?: boolean;
  is_featured?: boolean;
  is_premium?: boolean;

  created_at?: number;
  updated_at?: number;
  created_by?: number;
}
