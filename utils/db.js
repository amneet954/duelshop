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

const convertDocToObj = (doc) => {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
};

const db = { connect, disconnect, convertDocToObj };
export default db;
