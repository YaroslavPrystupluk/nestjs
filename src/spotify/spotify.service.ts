import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import type { AuthResponce } from './interfaces/auth-response.interface.js';
import type { ArtistResponce } from './interfaces/artist-responce.interface.js';

@Injectable()
export class SpotifyService {
  private accessToken: string | null;
  private tokenExpiry: number = 0;

  private readonly CLIENT_ID: string;
  private readonly CLIENT_SECRET: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.CLIENT_ID = configService.getOrThrow<string>('SPOTIFY_CLIEN_ID');
    this.CLIENT_SECRET = configService.getOrThrow<string>(
      'SPOTIFY_CLIEN_SECRET',
    );
  }
  public async getArtist(id: string): Promise<ArtistResponce> {
    await this.authenticate();

    const responce = await firstValueFrom(
      this.httpService.post<ArtistResponce>(
        `https://api.spotify.com/v1/artist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      ),
    );
    return responce.data;
  }

  private async authenticate(): Promise<void> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return;
    }

    const creds = Buffer.from(
      `${this.CLIENT_ID}:${this.CLIENT_SECRET}`,
    ).toString('base64');

    const responce = await firstValueFrom(
      this.httpService.post<AuthResponce>(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${creds}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      ),
    );

    this.accessToken = responce.data.access_token;
    this.tokenExpiry = Date.now() + responce.data.expires_in * 1000;
  }
}
