import { IKImage } from "imagekitio-react";

function Image({ src, alt = "", width, height, className = "" }) {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            path={src}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            alt={alt}
            width={width}
            height={height}
            transformation={[
                {
                    width: width,
                    height: height
                }
            ]}
            className={className}
        />
    );
}

export default Image;
