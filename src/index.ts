import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileManager from './fileManager';
import images from './routes/images';

const app: Application = express();
app.use(cors({ origin: true, credentials: true }));

dotenv.config();

const PORT = process.env.PORT || 4000;

// Routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', images);

app.listen(PORT, () => {
  fileManager.isThumbFolderAndCreate();
  console.log(`Listening to requests on http://localhost:${PORT}`);
});

export default app;
