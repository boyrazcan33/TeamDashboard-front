export interface Member {

    id : number ;
    name : string ;
    role : string ;
    email : string ;

}

export interface Team {

    id : number ;
    createdAt : number ;
    name : string ;
    members : Member [] ;
}

export type ViewType = 'list' | 'details' ;