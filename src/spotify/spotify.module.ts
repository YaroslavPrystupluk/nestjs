import { Global, Module } from '@nestjs/common';
import { SpotifyService } from './spotify.service.js';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule.register({})],
  providers: [SpotifyService],
  exports: [SpotifyService],
})
export class SpotifyModule {}
