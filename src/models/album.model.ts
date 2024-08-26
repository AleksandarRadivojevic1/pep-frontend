import type { ArtistModel } from "./artist.model";

export interface AlbumModel{
    albumId:number,
    albumImage:string,
    albumName:string,
    albumGenre:string,
    releaseDate:Date,
    artist:ArtistModel
}
