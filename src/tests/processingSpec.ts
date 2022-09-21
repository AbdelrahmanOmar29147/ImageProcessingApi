import fileManager from '../fileManager';
import * as fs from 'fs';
import resizeImage from '../processing';

describe('resising Images suit', () => {
  it('success with correct input query', async (): Promise<void> => {
    await fileManager.createProcessedImage({
      imagename: 'fjord.jpg',
      width: 250,
      height: 250
    });
    expect(
      fs.existsSync(
        await fileManager.createProcessedImagePath({
          imagename: 'fjord.jpg',
          width: 250,
          height: 250
        })
      )
    ).toBe(true);
  });

  it('failure with incorrect input query', async (): Promise<void> => {
    await fileManager.createProcessedImage({
      imagename: 'fjord.jpg',
      width: -250,
      height: -250
    });
    expect(
      fs.existsSync(
        await fileManager.createProcessedImagePath({
          imagename: 'fjord.jpg',
          width: -250,
          height: -250
        })
      )
    ).toBe(false);
  });
});
