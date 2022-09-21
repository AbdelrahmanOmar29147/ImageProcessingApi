import sharp from 'sharp';
import inputQuery from './inputQuery';

const resizeImage = async (
  height: number,
  width: number,
  source: string,
  target: string
): Promise<void> => {
  try {
    await sharp(source).resize(width, height).toFile(target);
  } catch (error) {
    console.error('Error Resizing Image');
  }
};

export default resizeImage;
