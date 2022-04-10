import mongoose from 'mongoose';

const connection = {};

const connect = async () => {
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    connection.isConnected === 1
      ? console.log('Console Log: Use Previous Connection')
      : null;
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  });

  connection.isConnected = db.connections[0].readyState;
};

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else console.log('Console Log: Not Disconnected');
  }
};

const db = { connect, disconnect };

export default db;
