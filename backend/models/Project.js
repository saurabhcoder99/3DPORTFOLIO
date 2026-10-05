import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Data Analytics', 'Data Science', 'Business Analyst', 'Power BI'],
    },
    description: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      default: '',
    },
    solution: {
      type: String,
      default: '',
    },
    features: {
      type: [String],
      default: [],
    },
    technologies: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      default: 'https://github.com/saurabhcoder99',
    },
    liveUrl: {
      type: String,
      default: 'https://demo.saurabhkumar.dev',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model('Project', projectSchema);
