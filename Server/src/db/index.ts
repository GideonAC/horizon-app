import mongoose from "mongoose"


export const DATABASE = async () => {
    try {
      const connect = await mongoose.connect(`mongodb+srv://arinzechukwugideon:uVYhuaFwpCauwRMw@cluster0.r9hs4rt.mongodb.net/`);
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

  
  