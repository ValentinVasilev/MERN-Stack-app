import axios from "axios";

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social_media"); // Name of the preset in Cloudinary
      form.append("cloud_name", "dlu4nc0yv"); // Second parameter is the Cloud Name you use in the Cloudinary
      

      // Post request with Axios
      const res = await axios.post(process.env.CLOUDINARY_URL, form);

      // Here we return the url of the Image
      return res.data.url;

  } catch (error) {}
};

export default uploadPic;
