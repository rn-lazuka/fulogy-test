import React, {useState} from 'react';
import s from './Main.module.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import lightPhoto1 from '../../assets/light-photo.png'
import lightPhoto2 from '../../assets/light-photo2.png'
import lightPhoto3 from '../../assets/light-photo3.png'
import MainDescription from './mainInfo/MainDescription';
import InfoBlock from './infoBlock/InfoBlock';
import Thumbnails from './thumbnails/Thumbnails';

const Main = (props) => {
  const images = [lightPhoto1, lightPhoto2, lightPhoto3].map(photo => {
    return {original: photo, thumbnail: photo}
  });
  const [lightColor, setLightColor] = useState('1')
  return (
      <div className={s.mainContainer}>
        <div className={s.photoContainer} style={{opacity: lightColor}}>
          <ImageGallery
              items={images}
              showBullets={true}
              showIndex={false}
              showThumbnails={false}
              lazyLoad={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
          />
        </div>
        <div className={s.descriptionContainer}>
        <MainDescription/>
        <InfoBlock setInfoPage={props.setInfoPage}/>
        <Thumbnails setLightColor={setLightColor}/>
        </div>
      </div>
  );
};

export default Main;