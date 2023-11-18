import mongoose from "mongoose";

const { MONGO_DB_STRING_CONNECTION } = process.env;

if (!MONGO_DB_STRING_CONNECTION) throw new Error("MONGODB_URI not defined");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(`${MONGO_DB_STRING_CONNECTION}`)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
