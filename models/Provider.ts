import mongoose from 'mongoose';

const ProviderSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  field: String,
  lang: String,
  bio: String,
  linkedin: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Provider ||
  mongoose.model('Provider', ProviderSchema);
