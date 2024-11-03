export interface DragonBallCharacters {
    items: PersonajeDragonBall[];
    meta:  Meta;
    links: Links;
}

export interface PersonajeDragonBall {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      Genero;
    description: string;
    image:       string;
    affiliation: Afiliacion;
    deletedAt:   null;
}

export enum Afiliacion {
    ArmyOfFrieza = "Army of Frieza",
    Freelancer = "Freelancer",
    ZFighter = "Z Fighter",
}

export enum Genero {
    Female = "Female",
    Male = "Male",
}

export interface Links {
    first:    string;
    previous: string;
    next:     string;
    last:     string;
}

export interface Meta {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}
