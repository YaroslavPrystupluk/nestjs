import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { FileService } from './file.service.js';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller({
  path: 'file',
  version: '2',
})
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Version('3')
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: /^image\/(jpeg|png|gif)$/,
            errorMessage:
              'Формат файла не підтримується потрібний (jpeg|png|gif)',
          }),
          new MaxFileSizeValidator({
            maxSize: 2 * 1024 * 1024,
            errorMessage: 'Розмір файла не првинен перевмщувати 2 МБ',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.fileService.upload(file);
  }
}
