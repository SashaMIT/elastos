declare module 'ws' {
  import { EventEmitter } from 'events';
  import { Socket } from 'net';

  class WebSocket extends EventEmitter {
    constructor(address: string | URL, options?: any);
    send(data: any, options?: any, cb?: (err?: Error) => void): void;
    close(code?: number, reason?: string): void;
    terminate(): void;
    ping(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
    pong(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
    readyState: number;
    protocol: string;
    url: string;
    binaryType: 'nodebuffer' | 'arraybuffer' | 'fragments';
    bufferedAmount: number;
    extensions: string;
    _socket: Socket;
  }

  export default WebSocket;
} 