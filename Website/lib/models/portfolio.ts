import mongoose from "mongoose"

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  education: [
    {
      institution: String,
      degree: String,
      field: String,
      startDate: Date,
      endDate: Date,
      gpa: Number,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      technologies: [String],
      link: String,
    },
  ],
  skills: [String],
  certifications: [
    {
      name: String,
      issuer: String,
      date: Date,
      link: String,
    },
  ],
})

export const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema)

