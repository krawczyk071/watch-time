import React from "react";
import { urlForImage } from "../../sanity/lib/image";

const HatBox = ({ detail }) => {
  const photos = detail.images
    .slice(0, -1)
    .map((url) => <img src={urlForImage(url)} key={url} alt="additional" />);

  return (
    <div className="hat__box">
      <h1>{detail.name}</h1>
      <div className="hat__more">
        <div className="hat__reviews">
          Rating: {detail.rating} ({detail?.ratingCount})
        </div>
      </div>
      <div className="hat__photo">
        <img src={urlForImage(detail.images[0])} alt="main" />
      </div>
      <div className="hat__photo-more">{photos}</div>
      <h2>{detail.brand}</h2>
      {/* <div
        className="hat__desc"
        dangerouslySetInnerHTML={{ __html: detail.longDescription }}
      ></div> */}
      <div
        className="hat__desc"
        dangerouslySetInnerHTML={{ __html: detail.details }}
      ></div>
    </div>
  );
};

export default HatBox;
