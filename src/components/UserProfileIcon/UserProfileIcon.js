import { Image } from 'react-native'
import React from 'react'

const UserProfileIcon = ({style}) => {
  return (
      <Image 
        source={{
            uri: 'https://randomuser.me/api/portraits/
        }}
        style={style}
      />
  )
}

//https://instagram.fdel10-1.fna.fbcdn.net/v/t51.2885-19/289151338_574117537668674_2375738513202398590_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=0_2p0-A7qR0AX8ukYir&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_ftAj00Vne5S_tWSbERnxd37fQ6Wlvw2jZLUMZxHwC1A&oe=62EA2A50&_nc_sid=8fd12b
export default UserProfileIcon