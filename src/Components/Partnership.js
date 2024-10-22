import "./css/Partnership.css";

export default function Partnership() {
    const images = [
        './assets/partner-1.png',
        './assets/partner-2.svg',
        './assets/partner-3.png',
        './assets/partner-4.png',
        './assets/partner-5.svg',
        './assets/partner-6.png',
        './assets/partner-7.png',
        './assets/partner-8.png',
        './assets/partner-9.png',
        './assets/partner-10.png',
        './assets/partner-11.png',
        './assets/partner-12.png',
        './assets/partner-1.png',
        './assets/partner-2.svg',
        './assets/partner-3.png',
        './assets/partner-4.png',
        './assets/partner-5.svg',
        './assets/partner-6.png',
        './assets/partner-7.png',
        './assets/partner-8.png',
        './assets/partner-9.png',
        './assets/partner-10.png',
        './assets/partner-11.png',
        './assets/partner-12.png',
        './assets/partner-1.png',
        './assets/partner-2.svg',
        './assets/partner-3.png',
        './assets/partner-4.png',
        './assets/partner-5.svg',
        './assets/partner-6.png',
        './assets/partner-7.png',
        './assets/partner-8.png',
        './assets/partner-9.png',
        './assets/partner-10.png',
        './assets/partner-11.png',
        './assets/partner-12.png',
    ];

    // Duplicate the images to create a seamless loop effect
    const doubledImages = [...images, ...images,...images, ...images,...images,...images,];

    return (
        <section className="partnership">
          <div className="parhtership_content">
          <h1>
                Partnering with <span className="highlight">Excellence</span> for Your Success.
            </h1>
            <p>
                Discover the potential of collaboration as we proudly introduce our
                esteemed partners. These valuable partnerships enable us to deliver
                outstanding solutions and services, supported by a network of expertise
                and innovation.
            </p>
          </div>

            {/* Ribbon of images */}
            <div className="ribbon-container">
                {doubledImages.map((image, index) => (
                    <div key={index} className="ribbon-item">
                        <img src={image} alt={`Partner ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}
