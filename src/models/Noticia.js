import mongoose from "mongoose";

const NoticiaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "por favor ingrese el título"],
  },
  copete: {
    type: String,
    required: [true, "por favor ingrese el copete"],
  },
  body: {
    type: String,
    required: [true, "por favor ingrese el body"],
  },
  important: {
    type: String,
    required: [true, "por favor ingrese la fecha"],
  },
  img: {
    type: String,
    required: [true, "por favor ingrese la imagen"],
  },
});

export default mongoose.models.Noticia || mongoose.model("Noticia", NoticiaSchema);
