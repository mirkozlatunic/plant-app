import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MonogDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbname: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopolgy: true,
    });

    isConnected = true;

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
