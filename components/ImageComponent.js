import Image from 'next/image';

const ImageComponent = () => {
    return (
        <Image
            src="/../public/images/profile.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
    )
}

export default ImageComponent;