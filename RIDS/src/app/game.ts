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
  
  export const caseOptions = {
    gender: [{ val: "Male", display: "Male" }, { val: "Female", display: "Female"}],
    race: [{ val: "Mexican", display: "Mexican" }, { val: "Indian", display: "Indian" }, { val: "European", display: "European" }, { val: "Chinese", display: "Chinese" }, { val: "African", display: "African"}],
    height: [{ val: "Short", display: "Short" }, { val: "Average", display: "Average" }, { val: "Tall", display: "Tall" }],
    weight: [{ val: "Thin", display: "Thin" }, { val: "Average", display: "Average" }, { val: "Heavy", display: "Heavy" }],
    age: [{ val: "Young", display: "Young" }, { val: "Middle-Aged", display: "Middle-Aged" }, { val: "Old", display: "Old" }],
    hair_color: [{ val: "Black", display: "Black" }, { val: "Gray", display: "Gray" }, { val: "Brown", display: "Brown" }, { val: "Blond", display: "Blond" }, { val: "Red", display: "Red" }],
    face_feature: [{ val: "Big Ears", display: "Big Ears" }, { val: "Big Eyebrows", display: "Big Eyebrows" }, { val: "Big Nose", display: "Big Nose" }, { val: "Big Mouth", display: "Big Mouth" }],
    unique_feature: [{ val: "Scar", display: "Scar" }, { val: "Glasses", display: "Glasses" }, { val: "Limp", display: "Limp" }, { val: "Missing Teeth", display: "Missing Teeth" }, { val: "Mole", display: "Mole" }],
    name: [{ val: "Martha Baggins", display: "Martha Baggins" }, { val: "Tara Nira", display: "Tara Nira" }, { val: "Karla Kun", display: "Karla Kun" }, { val: "Rohan Dalip", display: "Rohan Dalip" }, { val: "Jacob Rodgers", display: "Jacob Rodgers" }, { val: "Sophia Jones", display: "Sophia Jones" }, { val: "Shan Li", display: "Shan Li" }, { val: "Noah Smith", display: "Noah Smith" }, { val: "Martin Garcia", display: "Martin Garcia" }, { val: "Alisha Trayi", display: "Alisha Trayi" }, { val: "Vincent Imari", display: "Vincent Imari" }, { val: "Ezra Banks", display: "Ezra Banks" }, { val: "Mitsu Hakan", display: "Mitsu Hakan" }, { val: "Charles Obasi", display: "Charles Obasi" }, { val: "Adriel Yazzie", display: "Adriel Yazzie" }, { val: "Elizabeth Flores", display: "Elizabeth Flores" }, { val: "Song Tao", display: "Song Tao" }, { val: "Issa Agu", display: "Issa Agu" }, { val: "Dakota Turner", display: "Dakota Turner" }, { val: "Abel Price", display: "Abel Price" }, { val: "Anastasia Hayes", display: "Anastasia Hayes" }, { val: "Ruth Phillips", display: "Ruth Phillips" }, { val: "Winona Miller", display: "Winona Miller" }, { val: "Caton Perez", display: "Caton Perez" }, { val: "Kelly Davis", display: "Kelly Davis" }, { val: "Maria Valdez", display: "Maria Valdez" }, { val: "Olivia Bell", display: "Olivia Bell" }, { val: "Chester Thompson", display: "Chester Thompson" }, { val: "Meagan Harper", display: "Meagan Harper" }, { val: "Cheng Biming", display: "Cheng Biming" }],
    crime_place: [{ val: "Headquarters", display: "Headquarters" }, { val: "Bank", display: "Bank" }, { val: "Restaurant", display: "Restaurant" }, { val: "Hotel", display: "Hotel" }, { val: "Saloon", display: "Saloon" }, { val: "Barber", display: "Barber" }, { val: "Cab", display: "Cab" }, { val: "Blacksmith", display: "Blacksmith" }, { val: "Depot", display: "Depot" }, { val: "Store", display: "Store" }, { val: "Courthouse", display: "Courthouse" }, { val: "Caboose", display: "Caboose" }, { val: "Bonfire", display: "Bonfire" }, { val: "Garden", display: "Garden" }, { val: "Tipi", display: "Tipi" }, { val: "Lake", display: "Lake" }, { val: "Forest", display: "Forest" }, { val: "Spring", display: "Spring" }, { val: "Creek", display: "Creek" }, { val: "Wagons", display: "Wagons" }, { val: "Cabin", display: "Cabin" }, { val: "Meadow", display: "Meadow" }, { val: "Pond", display: "Pond" }, { val: "Mine", display: "Mine" }, { val: "Outpost", display: "Outpost" }, { val: "Barracks", display: "Barracks" }, { val: "Bridge", display: "Bridge" }, { val: "Command", display: "Command" }, { val: "Corral", display: "Corral" }, { val: "Range", display: "Range" }],
    weapon: [{ val: "Rock", display: "Rock" }, { val: "Gun", display: "Gun" }, { val: "Knife", display: "Knife" }, { val: "Hammer", display: "Hammer" }, { val: "Rake", display: "Rake" }, { val: "Shovel", display: "Shovel" }, { val: "Axe", display: "Axe" }, { val: "Bottle", display: "Bottle" }, { val: "Rope", display: "Rope" }, { val: "Bow", display: "Bow" }]
  }
