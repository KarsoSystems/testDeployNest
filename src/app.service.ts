import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AppService {
  AWS_S3_BUCKET = 'demoimagesrepo';
  s3 = new AWS.S3({
    accessKeyId: 'AKIAXYKJVQ37EISWICBK',
    secretAccessKey: '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',
  });

  async uploadFile(file) {
    console.log('ARCHIVO', file);
    const { originalname } = file;

    return await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      originalname,
      file.mimetype,
    );
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'us-east-2',
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
