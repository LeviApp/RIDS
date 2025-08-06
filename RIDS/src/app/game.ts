export interface City {
    id: number;
    name: string;
    theme: string;
    description: string;
    travel_time: number;
}

export interface Place {
    id: number;
    name: string;
    description: string;
    city: number;
}

export class PostPlayer {
    user_id: string;
    rank: string;
    name: string;
    description: string;
    question_suspect: string;
    question_place: string;
    question_weapon: string;
    goodbye: string;
    place_id: number;
    city_id: number;
}

export interface PlayerCharacter {
  id: number;
  user_id: string;
  rank: string;
  name: string;
  description: string;
  question_suspect: string;
  question_place: string;
  question_weapon: string;
  goodbye: string;
  place_id: number;
  city_id: number;
}

export interface SelectedCharacter {
  name: string;
  description: string;
}

export interface Witness {
    id: number;
    name: string;
    description: string;
    place: number;
}

export interface Response {
    id: number;
    suspect: string;
    place: string;
    weapon: string;
    goodbye: string;
    witness: number
}

export interface Case {
    id: number; // Implicitly added by Django models, representing the primary key
    user_id: string;
    player: number; // Represents the ID of the related Player object (ForeignKey)
    case_name: string;
    days_left: number;
    evidence: number;
    signatures: number;
    warrant: boolean;
    name: string; // Likely the suspect's name, based on context
    gender: string;
    race: string;
    height: string;
    age: string;
    weight: string;
    hair_color: string;
    face_feature: string;
    unique_feature: string;
    crime_place: string;
    weapon: string;
    notebook: string;
    solved: boolean;
  }
  
