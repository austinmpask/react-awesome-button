import React from 'react';
import PropTypes from 'prop-types';

const ICONS = {
  facebook: 'M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z',
  whatsapp: 'M2.5,46.6c0.6-1.9,1.2-3.6,1.8-5.4c0.6-1.7,1.1-3.5,1.8-5.2c0.3-0.9,0.2-1.5-0.2-2.3c-2.4-4.4-3.1-9.1-2.3-14c0.7-4.2,2.5-7.8,5.3-11c4.7-5.1,10.6-7.6,17.5-7.3c5.1,0.2,9.6,2.1,13.4,5.4c3.6,3.1,5.9,7,7,11.6c0.9,3.7,0.8,7.4-0.3,11.1c-1.4,4.6-4,8.5-7.8,11.4c-5.4,4.1-11.4,5.3-18,4c-2-0.4-3.9-1.1-5.6-2c-0.3-0.2-0.5-0.2-0.9-0.1c-3.4,1.1-6.7,2.2-10.1,3.2C3.7,46.2,3.2,46.4,2.5,46.6z M8.3,40.9c0.2,0,0.3-0.1,0.3-0.1c2.1-0.7,4.2-1.3,6.3-2c0.2-0.1,0.5,0,0.7,0.1c0.9,0.5,1.8,1,2.7,1.4c3.9,1.6,7.9,1.9,11.9,0.8c4.8-1.3,8.5-4.2,11-8.6c2.2-3.7,2.9-7.7,2.2-11.9C42.7,15.2,39.9,11,35.4,8c-3.9-2.6-8.3-3.5-12.9-2.7c-4,0.6-7.4,2.5-10.2,5.4c-2.4,2.5-4,5.5-4.7,8.8c-1,4.9-0.3,9.5,2.4,13.7c0.5,0.8,0.5,1.5,0.2,2.3C9.5,37.3,8.9,39.1,8.3,40.9z M36.8,29.8c0,1.7-0.9,3.1-2.5,3.9c-1.6,0.8-3.3,1-5,0.4c-1.5-0.6-3.1-1.2-4.6-1.9c-2-1-3.6-2.4-5-4c-1.6-1.8-3-3.7-4.1-5.9c-0.8-1.5-1.3-3.1-1.1-4.8c0.2-1.8,1-3.3,2.5-4.4c0.3-0.2,0.7-0.3,1.1-0.4c0.5,0,1,0,1.4,0.1c0.4,0,0.6,0.3,0.8,0.6c0.4,0.9,0.7,1.7,1,2.6c0.2,0.6,0.4,1.2,0.7,1.8c0.3,0.7,0.1,1.3-0.3,1.8c-0.4,0.5-0.8,0.9-1.2,1.3C20,21.2,20,21.6,20.2,22c1,1.9,2.3,3.5,4,4.9c1.1,0.9,2.3,1.5,3.6,2.2c0.4,0.2,0.7,0.2,1-0.2c0.6-0.7,1.3-1.4,1.9-2.1c0.4-0.5,0.6-0.6,1.1-0.3c1.5,0.8,3.1,1.6,4.6,2.4C36.8,29,36.9,29.3,36.8,29.8z',
  messenger: 'M27.5,30l-5.4-5.7L11.7,30l11.5-12.2l5.5,5.7L39,17.8L27.5,30z M25.5,3.8c-11.6,0-21.1,8.7-21.1,19.5c0,6.1,3.1,11.6,7.9,15.2v7.4l7.2-3.9c1.9,0.5,3.9,0.8,6,0.8c11.6,0,21.1-8.7,21.1-19.5S37.1,3.8,25.5,3.8z',
  instagram: 'M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z',
  twitter: 'M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z',
  github: 'M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z',
  linkedin: 'M13.8,41.7H5.4V13.6h8.4C13.8,13.6,13.8,41.7,13.8,41.7z M44.7,41.7h-8.4v-15c0-3.9-1.4-5.9-4.2-5.9c-2.2,0-3.6,1.1-4.3,3.3c0,3.5,0,17.6,0,17.6h-8.4c0,0,0.1-25.3,0-28.1h6.7l0.5,5.6h0.2c1.7-2.8,4.5-4.7,8.3-4.7c2.9,0,5.2,0.8,7,2.8s2.7,4.7,2.7,8.5L44.7,41.7L44.7,41.7z M9.6,2.3C12,2.3,14,4.2,14,6.5s-2,4.2-4.4,4.2S5.2,8.8,5.2,6.5C5.3,4.2,7.2,2.3,9.6,2.3z',
  gplus: 'M29.9,5.2c0,0-9.1,0-12.2,0C12.2,5.2,6.9,9.1,6.9,14c0,5,3.8,8.8,9.5,8.8c0.4,0,0.7-0.1,1.1-0.1c-0.4,0.7-0.7,1.5-0.7,2.3c0,1.4,0.7,2.5,1.7,3.4c-0.7,0-1.4,0-2.1,0c-6.9,0-12.2,4.4-12.2,8.9c0,4.5,5.9,7.4,12.7,7.4c7.9,0,12.2-4.5,12.2-8.9c0-3.6-1-5.8-4.4-8.1c-1.1-0.8-3.3-2.7-3.3-3.9c0-1.3,0.4-2,2.4-3.5c2-1.6,3.5-3.5,3.5-6.1c0-3.2-1.3-7-4-7H28L29.9,5.2z M25.8,35c0.1,0.4,0.2,0.8,0.2,1.3c0,3.6-2.3,6.5-9,6.5c-4.7,0-8.2-3-8.2-6.6c0-3.5,4.3-6.5,9-6.4c1.1,0,2.1,0.2,3.1,0.5C23.5,32,25.3,33,25.8,35z M18.2,21.5c-3.2-0.1-6.2-3.6-6.8-7.8s1.6-7.4,4.8-7.4c3.2,0.1,6.2,3.4,6.8,7.7C23.6,18.2,21.4,21.6,18.2,21.5z M39.8,21v-6h-3.9v6h-6v4h6v6h3.9v-6h6v-3.9L39.8,21L39.8,21z',
  pinterest: 'M7.6,17.7c0,3.3,1.1,6.6,3.3,8.5c0.5,0.4,1.7,1.3,2.6,1.3c0.7,0,0.8-0.8,1-1.4c1-3.3,0.1-1.9-1.1-4.7c-1.3-2.8-0.4-7.3,1.1-9.6c2.9-4.4,6.2-6,11.6-6c3.1,0,5.4,1.1,7.1,2.6c6.1,5.2,1.9,21.8-5.6,20.9c-7.5-0.8-1.4-10-1.4-14c0-6.2-8.5-5.2-8.5,2.7c0,2.7,1.1,3.5,0.9,4.2c-1.1,3.8-1.9,8.2-2.9,12.2c-1.1,4.1-1,7.5-0.6,11.7c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0,0.3-0.1c2.9-2.9,4.8-7.7,5.5-10.5c0.4-1.5,0.9-3.3,1.2-4.8c0.1-0.3,0.7,0.6,1.1,1c3.1,2.8,8.4,2.2,11.8,0.1c6.6-4,9.4-15.4,5.9-22.2c-1-1.9-2-2.8-3.4-4.3C31.8-0.1,19.3,0.2,13.2,6C9.9,9.1,7.6,12.7,7.6,17.7L7.6,17.7z',
  reddit: 'M48.9,18.6L48.9,18.6c0,0.1,0,0.2,0,0.3c0,1.2-0.4,2.4-1,3.3s-1.4,1.7-2.4,2.2c0.1,0.5,0.1,1,0.1,1.4c0,2.6-0.9,5.1-2.4,7.2l0,0l0,0c-2.8,3.8-7.2,6.1-11.6,7.2l0,0l0,0c-2.3,0.6-4.8,0.9-7.2,0.9c-3.6,0-7.2-0.7-10.6-2l0,0l0,0C10.3,37.7,7,35.4,5,32c-1.1-1.8-1.7-3.9-1.7-6.1c0-0.5,0-1,0.1-1.4c-0.9-0.5-1.7-1.3-2.3-2.1c-0.6-1-1-2.1-1.1-3.2l0,0l0,0l0,0c0-1.6,0.7-3.2,1.8-4.4s2.6-1.9,4.2-1.9h0.1c0.2,0,0.3,0,0.5,0c0.8,0,1.6,0.1,2.4,0.4l0,0l0,0c0.7,0.3,1.3,0.6,1.9,1.1c0.2-0.1,0.4-0.2,0.6-0.3c3.5-2.1,7.6-2.9,11.6-3.2c0-2,0.3-4.1,1.2-5.9c0.8-1.5,2.2-2.7,3.9-3.1l0,0l0,0c0.6-0.1,1.3-0.2,1.9-0.2c1.7,0,3.4,0.4,4.9,1c0.7-1.1,1.7-1.9,2.8-2.3l0,0l0,0c0.7-0.2,1.4-0.3,2.1-0.3c0.8,0,1.5,0.1,2.2,0.5l0,0l0,0l0,0c1,0.4,1.9,1.1,2.5,2.1c0.6,0.9,1,2,1,3.2c0,0.2,0,0.4,0,0.6l0,0l0,0c-0.1,1.5-0.9,2.8-1.9,3.7c-1.1,0.9-2.4,1.5-3.8,1.5c-0.2,0-0.4,0-0.7,0c-1.4-0.1-2.7-0.8-3.6-1.8c-1-1-1.6-2.4-1.6-3.8C34,6,34,6,34,5.9c-1.3-0.6-2.7-1.1-4.1-1.1c-0.2,0-0.4,0-0.6,0l0,0c-1,0.1-2,0.8-2.4,1.7l0,0l0,0c-0.7,1.4-0.8,3-0.9,4.6c3.9,0.3,7.9,1.2,11.4,3.2l0,0l0,0c0.1,0,0.2,0.1,0.3,0.2c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.7,2.3-1.1,3.5-1.1c0.6,0,1.1,0.1,1.6,0.2l0,0l0,0l0,0l0,0c1.3,0.3,2.4,1.1,3.3,2.1C48.2,15.9,48.8,17.2,48.9,18.6L48.9,18.6L48.9,18.6z M42.5,26c0-1.8-0.6-3.6-1.7-5c-2.1-2.9-5.2-4.8-8.5-5.8l0,0c-0.6-0.2-1.3-0.4-1.9-0.5c-1.9-0.4-3.9-0.7-5.9-0.7c-2.7,0-5.3,0.4-7.9,1.2c-3.3,1.1-6.5,2.9-8.5,5.8l0,0c-1,1.4-1.6,3.2-1.6,5c0,0.7,0.1,1.3,0.3,2l0,0c0.4,1.4,1.1,2.7,2,3.8c0.9,1.1,2.1,2.1,3.3,2.9c0.3,0.2,0.5,0.3,0.8,0.5c3.5,2,7.6,2.9,11.6,2.9c0.7,0,1.4,0,2-0.1c4.1-0.3,8.2-1.6,11.5-4l0,0c1.1-0.8,2-1.7,2.8-2.8s1.3-2.3,1.6-3.6l0,0l0,0C42.5,27,42.5,26.5,42.5,26zM37.3,5.5c0,0.1,0,0.1,0,0.2l0,0l0,0c0,0.7,0.3,1.3,0.8,1.8s1.1,0.8,1.8,0.8l0,0l0,0H40c0.7,0,1.3-0.3,1.8-0.8s0.8-1.1,0.9-1.8l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.4-0.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8c-0.2,0-0.4,0-0.7,0.1l0,0l0,0c-0.6,0.1-1.1,0.5-1.5,1C37.5,4.4,37.3,4.9,37.3,5.5z M8.2,16.2c-0.5-0.2-1.1-0.4-1.6-0.4c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.8,0-1.6,0.4-2.1,0.9c-0.6,0.5-1,1.3-1,2.1l0,0l0,0c0,0.1,0,0.1,0,0.2c0,0.5,0.2,1,0.4,1.4C3.8,20.7,4,21,4.3,21.3C5.2,19.3,6.6,17.6,8.2,16.2zM45.7,18.9c0-0.4-0.1-0.9-0.3-1.3l0,0l0,0c-0.3-0.6-0.7-1-1.3-1.4c-0.5-0.3-1.2-0.5-1.8-0.5s-1.1,0.1-1.7,0.4c1.6,1.4,3,3.1,3.9,5.1c0.3-0.3,0.5-0.6,0.7-0.9C45.6,19.9,45.7,19.4,45.7,18.9z M32.9,29.2c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.2c-2.1,1.1-4.6,1.7-7.1,1.7c-1.9,0-3.7-0.3-5.4-1.1l0,0l0,0c-0.3-0.1-0.5-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.5-0.2C17.3,29,17.1,29,16.9,29s-0.4,0-0.6,0.1l0,0l0,0c-0.3,0.1-0.5,0.3-0.7,0.5s-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.6,0.5c2.4,1.4,5.2,2.1,8.1,2.1c2.6,0,5.2-0.5,7.5-1.5l0,0l0,0c0.3-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6l0,0c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.1-0.5C33.3,29.5,33.1,29.3,32.9,29.2zM16.8,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C19.9,21.1,18.5,19.8,16.8,19.8z M32.1,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C35.1,21.1,33.8,19.8,32.1,19.8z',
};

function getIcon({
  type,
  width,
  height,
  margin,
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      space="preserve"
      viewBox="0 0 50 50"
      style={{
        marginRight: margin,
      }}
      width={width}
      height={height}
    >
      <path
        fill="#FFFFFF"
        d={ICONS[type]}
      />
    </svg>
  );
}

getIcon.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
};

export default getIcon;
