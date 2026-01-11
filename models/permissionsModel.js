import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const permissionSchema = new Schema({
  role: { type: String, required: true, unique: true},
  permissions: {
    createData: Boolean,
    updateData: Boolean,
    readData: Boolean,
    deleteData: Boolean,
  },
});

export default model("Permissions", permissionSchema);
