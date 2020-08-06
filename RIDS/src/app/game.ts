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

export interface Player {
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

export interface Witness {
    id: number;
    name: string;
    description: string;
    place: number;
}