import React from 'react';
import PropTypes from 'prop-types';

function Picture({ className, img, webp, style, ...rest }) {
  let imageExt = img.slice(-7).split('.')[1].trim();
  let type = 'image/' + imageExt;
  if (imageExt != 'png') {
    type = 'image/jpeg';
  }

  let alt = rest.alt ? rest.alt : 'image';

  return (
    <picture>
      {rest.imgMob ? (
        <>
          <source
            srcSet={rest.webpMob}
            type='image/webp'
            media={`(max-width: ${rest.widthMob}px)`}
          />
          <source srcSet={rest.imgMob} type={type} media={`(max-width: ${rest.widthMob}px)`} />
        </>
      ) : (
        ''
      )}
      {rest.imgTab ? (
        <>
          <source
            srcSet={rest.webpTab}
            type='image/webp'
            media={`(max-width: ${rest.widthTab}px)`}
          />
          <source srcSet={rest.imgTab} type={type} media={`(max-width: ${rest.widthTab}px)`} />
        </>
      ) : (
        ''
      )}
      <source srcSet={webp} type='image/webp' />
      {/* <source srcSet={img} type={type} /> */}
      <img
        className={className ? className : ''}
        src={img}
        alt={alt}
        style={style}
        loading={rest.lazy ? 'lazy' : 'auto'}
        width={rest.width ? rest.width : ''}
        height={rest.height ? rest.height : ''}
      />
    </picture>
  );
}
Picture.propTypes = {
  style: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  lazy: PropTypes.oneOf(['lazy', 'auto']),
  alt: PropTypes.string,
  webp: PropTypes.func,
  img: PropTypes.string,
  className: PropTypes.string,
};

export default Picture;
