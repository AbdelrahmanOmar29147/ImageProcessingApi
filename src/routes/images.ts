import express from 'express';
import fileManager from '../fileManager';
import inputQuery from '../inputQuery';

const router: express.Router = express.Router();

const isValid = async (input: inputQuery): Promise<boolean | string> => {
  console.log(input.imagename);
  console.log(input.width);
  if (Object.keys(input).length === 0) {
    return 'Please Enter a Valid Query in the Form: http://localhost:4000/api?imagename={filename.jpg}&height={height}&width={width}';
  }

  if (
    (input.width === undefined && input.height === undefined) ||
    (((input.height as number) < 0 || input.height === undefined) &&
      ((input.width as number) < 0 || input.width === undefined))
  ) {
    return 'Please Enter a Valid Width and Height';
  }

  if (
    Number.isNaN(input.width) ||
    (input.width as number) < 0 ||
    input.width === undefined
  ) {
    return 'Please Enter a Valid Width';
  }

  if (
    Number.isNaN(input.height) ||
    (input.height as number) < 0 ||
    input.height === undefined
  ) {
    return 'Please Enter a Valid Height';
  }
  if (!(await fileManager.isImageAvailable(input.imagename))) {
    return `Please Enter a Valid Image Name From: ${await fileManager
      .availableImageList()
      .join(' , ')}`;
  }

  return true;
};

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    //validate input
    const Query = req.query as unknown as inputQuery;
    const isValidated: boolean | string = await isValid(Query);
    if (typeof isValidated === 'string') {
      res.send(isValidated);
      return;
    }
    //caching
    const checkCache: boolean | string = await fileManager.checkCache(Query);
    if (checkCache === false) {
      await fileManager.createProcessedImage(Query);
      res.sendFile(await fileManager.createProcessedImagePath(Query));
    } else {
      res.sendFile(checkCache as string);
    }
  }
);

router.get(
  '/full',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      let imagesURL: string[] = [];
      for (let i = 0; i < fileManager.availableImageList().length; i++) {
        imagesURL[i] = `http://localhost:4000/images/full/${
          fileManager.availableImageList()[i]
        }`;
      }
      res.send(imagesURL);
    } catch (error) {
      console.log('Error Finding Avaialable Images Dir');
      res.send(error);
    }
  }
);

export default router;
