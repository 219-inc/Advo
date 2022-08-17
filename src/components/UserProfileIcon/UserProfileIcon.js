import { Image } from 'react-native'

const UserProfileIcon = ({style}) => {
  return (
    <Image
      source={{
        uri: "https://images.hindustantimes.com/img/2022/06/12/1600x900/WhatsApp_Image_2021-06-18_at_1.28.03_PM_(3)_1624202772291_1655053847920.jpeg",
      }}
      style={style}
    />
  );
}

export default UserProfileIcon