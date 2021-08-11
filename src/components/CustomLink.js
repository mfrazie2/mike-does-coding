import React from 'react';

const CustomLink = ({ linkText, linkSrc }) => {
  return (
    <a
      href={linkSrc}
      referrerPolicy="no-referrer"
      rel="noreferrer"
      target="_blank">
      {linkText}
    </a>
  );
};

export default CustomLink;
