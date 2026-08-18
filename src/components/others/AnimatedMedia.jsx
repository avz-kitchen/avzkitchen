import { Lottie } from "lottie-react";

const AnimatedMedia = ({
  image,
  animationData,
  alt = "Media",
  className = "",
  wrapperClassName = "",
  style = {},
}) => {
  if (animationData) {
    return (
      <div
        className={wrapperClassName || className}
        style={{
          width: "100%",
          minHeight: "260px",
          aspectRatio: "16 / 10",
          display: "block",
          overflow: "hidden",
          ...style,
        }}
      >
        <Lottie
          src={animationData}
          loop
          autoplay
          speed={0.7}
          renderer="svg"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            transform: "scale(1.20)",
            transformOrigin: "center center",
          }}
        />
      </div>
    );
  }

  if (image) {
    return (
      <img
        src={image}
        alt={alt}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          ...style,
        }}
      />
    );
  }

  return null;
};

export default AnimatedMedia;
