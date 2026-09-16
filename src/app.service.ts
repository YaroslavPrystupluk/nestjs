import { Injectable } from '@nestjs/common';
import { SpotifyService } from './spotify/spotify.service.js';

@Injectable()
export class AppService {
  constructor(private readonly spotifyService: SpotifyService) {}

  async getArtist(id: string) {
    const artist = this.spotifyService.getArtist(id);
    return artist;
  }
}
