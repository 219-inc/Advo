import { Image } from 'react-native'

const UserProfileIcon = ({style}) => {
  return (
    <Image
      source={require("assets/images/skate_3.png")}
      style={style}
    />
  );
}

export default UserProfileIcon