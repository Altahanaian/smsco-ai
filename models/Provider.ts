// models/Provider.ts
import mongoose, { Schema, Document, Model } from 'mongoose'

export interface Provider extends Document {
  name: string
  img?: string
  keywords: string[]
  isActive: boolean
  lang: string
  // أي حقول إضافية…
}

const providerSchema = new Schema<Provider>({
  name: { type: String, required: true },
  img: String,
  keywords: { type: [String], default: [] },
  isActive: { type: Boolean, default: true },
  lang: { type: String, required: true },
})

const ProviderModel: Model<Provider> =
  mongoose.models.Provider || mongoose.model<Provider>('Provider', providerSchema)

export default ProviderModel
