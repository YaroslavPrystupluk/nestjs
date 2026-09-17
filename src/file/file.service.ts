import { Injectable } from '@nestjs/common';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  upload(file: Express.Multer.File) {
    const uploadPath = join(process.cwd(), 'uploads');

    if (!existsSync(uploadPath)) {
      mkdirSync(uploadPath, { recursive: true });
    }

    const filePath = join(uploadPath, file.originalname);

    writeFileSync(filePath, file.buffer);

    return {
      filename: file.originalname,
      path: filePath,
    };
  }
}
