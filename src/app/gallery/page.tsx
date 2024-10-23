import ImageGallery from '../components/Image';
import Router from '../Router'; // Import the custom Router component

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-center">
      <h1 className="text-4xl font-cursive text-pink-600 my-8">Our Gallery</h1>
      
      <ImageGallery />

      <div className="mt-8">
        <Router to="./">Back to Home</Router>
      </div>
    </div>
  );
};

export default Gallery;
