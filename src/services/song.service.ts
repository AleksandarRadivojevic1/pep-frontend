import { useAxios } from "./main.service";

export class SongService {
  static async getAllSongs(albumId: number) {
    return await useAxios(`/songs?albumId=${albumId}`);
  }
}
