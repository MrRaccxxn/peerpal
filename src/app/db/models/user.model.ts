import { models, model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
