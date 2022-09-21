import * as fs from 'fs';
import path from 'path';
import inputQuery from './inputQuery';
import resizeImage from './processing';

export default class fileManager {
  static fullDirPath: string = path.join(__dirname, '../assets/full');
  static thumbDirPath: string = path.join(__dirname, '../assets/thumb');

  static async isThumbFolderAndCreate(): Promise<void> {
    try {
      if (await fs.existsSync(fileManager.thumbDirPath)) {
        console.log('Thumb Folder is Active');
      } else {
        console.log('Creating Thumb Folder');
        await fs.mkdirSync(fileManager.thumbDirPath);
        console.log('Thumb Folder is Active');
      }
    } catch (error) {
      console.log('Error Creating/Finding Thumb Folder');
    }
  }

  static availableImageList(): string[] {
    try {
      const filenames = fs.readdirSync(fileManager.fullDirPath);
      if (filenames.length != 0) {
        return filenames;
      } else {
        console.log('No Avaialable Images');
        return [];
      }
    } catch (error) {
      console.log('Error Finding Avaialable Images Dir');
      return [];
    }
  }

  static async isImageAvailable(fileName: string): Promise<boolean> {
    try {
      return fileManager.availableImageList().includes(fileName);
    } catch (error) {
      console.log('Error Finding Chosen Image');
      return false;
    }
  }

  static async checkCache(inputQuery: inputQuery): Promise<boolean | string> {
    const processedImagePath: string = path.join(
      fileManager.thumbDirPath,
      `${inputQuery.imagename.substring(
        0,
        inputQuery.imagename.lastIndexOf('.')
      )}_${inputQuery.width}_${inputQuery.height}.jpg`
    );
    try {
      if (await fs.existsSync(processedImagePath)) {
        console.log('Image is Cached');
        return processedImagePath;
      } else {
        console.log('Image is Not Cached');
        return false;
      }
    } catch (error) {
      console.log('Error finding Cached Image');
      return false;
    }
  }

  static async createProcessedImage(inputQuery: inputQuery): Promise<void> {
    const fullImagePath: string = path.join(
      fileManager.fullDirPath,
      `${inputQuery.imagename}`
    );

    const processedImagePath: string = path.join(
      fileManager.thumbDirPath,
      `${inputQuery.imagename.substring(
        0,
        inputQuery.imagename.lastIndexOf('.')
      )}_${inputQuery.width}_${inputQuery.height}.jpg`
    );

    await resizeImage(
      parseInt(inputQuery.width as unknown as string),
      parseInt(inputQuery.height as unknown as string),
      fullImagePath,
      processedImagePath
    );
  }

  static async createProcessedImagePath(
    inputQuery: inputQuery
  ): Promise<string> {
    return path.join(
      fileManager.thumbDirPath,
      `${inputQuery.imagename.substring(
        0,
        inputQuery.imagename.lastIndexOf('.')
      )}_${inputQuery.width}_${inputQuery.height}.jpg`
    );
  }
}
