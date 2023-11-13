import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI as string
export const DATABASE = async () => {
    try {
      const connect = await mongoose.connect(MONGODB_URI);
     console.log(
        `database has been connected successfully to ${JSON.stringify(
          connect.connection.host,
        )}`,
      );
    } catch (error) {
      console.error(`Mongodb connection error ${JSON.stringify(error)}`);
      process.exit(1);
    }

  };

  
  