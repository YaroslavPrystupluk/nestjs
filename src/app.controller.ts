import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ArtistResponce } from './spotify/interfaces/artist-responce.interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('artist/:id')
  async getArtist(@Param('id') id: string): Promise<ArtistResponce> {
    return this.appService.getArtist(id);
  }
}
