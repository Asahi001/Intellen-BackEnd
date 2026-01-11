import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const authSchema = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: false },
  userName: { type: String, required: false },
  status: {type: String, required: false}
});

export default model('Auth', authSchema);