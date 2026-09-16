import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service.js';
import type { Socket, Server } from 'socket.io';
import { SandMessageDto } from './dto/sand-message.dto.js';

@WebSocketGateway(3001) // можна змінити порт для сщлуеші
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket, ...args: any[]) {
    console.log('Clien connected: ', client.id);
  }

  handleDisconnect(client: Socket, reason?: string) {
    console.log('Clien disconnected: ', client.id);
  }

  @SubscribeMessage('send')
  async handleMessage(@MessageBody() dto: SandMessageDto) {
    const message = await this.chatService.sendMessage(dto);

    this.server.emit('messages', message);

    return message;
  }
}
