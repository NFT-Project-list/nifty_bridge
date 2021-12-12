// import { useEffect, useState } from 'react';
import FileImageOutlined from '@ant-design/icons/FileImageOutlined';
import Title from 'antd/lib/typography/Title';
import ImageStyle from './style';

const Image = ({
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number | string;
  height?: number | string;
}) => {
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   setIsError(!src);
  // }, [src]);
  return (
    <ImageStyle style={{ width, height }}>
      {false ? (
        <div className='error-container'>
          <FileImageOutlined />
          <Title level={5} style={{ color: 'black' }}>
            No Image
          </Title>
        </div>
      ) : (
        <img
          alt={alt}
          src={`https://ipfs.io/ipfs/QmSC5XcVGBdZH4Sfrvya2Ge2Nm8hBcVqxt7eFXsgiUnNqB?filename=wp8632204-bojack-horseman-quotes-wallpapers.png`}
          // onError={() => {
          //   setIsError(true);
          // }}
        />
      )}
    </ImageStyle>
  );
};

export default Image;
