import styled from 'styled-components'
import {FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const Sidebar = styled.div`
  width: 20%; 
  background-color: ${props => {
    if (props.theme === true) {
      return '#212121'
    }
    return '#ffffff'
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%;
  height: 90vh;
  @media (max-width: 768px) {
      display: none;
   }

   @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    width: 25%;
   }
   @media (min-width: 1024px) {
      display: flex;
      width: 20%;
   }/
`

export const NavigatingSectionLinks = styled.ul`
list-style-type: none;
padding: 0px ;
display: flex;
flex-direction: column;


.navLinks {
  text-decoration:none;
}/
`
export const Li = styled.li`

  display: flex;
  border-radius: 5px ;
  padding: ${props => (props.media ? '' : '0.5% 8%')};
  margin-right: ${props => (props.media ? '2%' : '')};
  margin-bottom: ${props => (props.media ? '' : '0.5%')};
  background-color: ${props => {
    if (props.value === true) {
      return '#e2e8f0'
    }
    return 'transparent'
  }};

.text {
   color : ${props => {
     let color
     if (props.value === true) {
       color = '#1e293b'
     } else if (props.theme === true) {
       color = '#ffffff'
     } else {
       color = '#1e293b'
     }
     return color
   }};
}

.icon {
  font-size: 1.2vw;
  color : ${props => {
    let color
    if (props.value === true) {
      color = '#ff0000'
    } else if (props.theme === true) {
      color = '#ffffff'
    } else {
      color = '#1e293b'
    }
    return color
  }};
}
 

  &:hover {

    .icon{
      color: #ff0000;
    }

    .text {
      color: #1e293b;
      font-weight: bold;
    }

    background-color: #e2e8f0;

  }


  @media (min-width: 768px) and (max-width: 1024px) {
    .icon {
        font-size: 2.5vw;
    }
  }/
`

export const Para = styled.p`
  align-self: ${props => (props.link ? 'center' : '')};
  color: ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  

  &:hover {
    font-weight: ${props => (props.link ? 'bold' : 'normal')};
  }/
`

export const FaFireIcon = styled(FaFire)`
 align-self: center;
   font-size: 2.5vw;
   margin-right: 5%;
   /
`

export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
 align-self: center;
   font-size: 2.5vw;
   margin-right: 5%;

   /
`

export const MdPlaylistAddIcon = styled(MdPlaylistAdd)`
  align-self: center;
   font-size: 2.5vw;
   margin-right: 5%;

 /
`

export const FaHomeIcon = styled(FaHome)`
   align-self: center;
   font-size: 2.5vw;
   margin-right: 5%;

  /
`

export const Heading = styled.h1`
    color: ${props => {
      if (props.theme === true) {
        return '#ffffff'
      }
      return '#1e293b '
    }};/
`

export const IconsList = styled.ul`
   list-style-type: none;
   width: 30%;
   padding: 0px;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;/
`

export const Img = styled.img`
  width: ${props => (props.Banner ? '30%' : '30px')};
  height: 30px ${props => (props.Banner ? '30%' : '30px')};
  align-self: center;
  margin-right: ${props => (props.Banner ? '0%' : '10%')};
  @media (max-width:767px) {
    width: ${props => (props.Banner ? '50%' : '30px')};
    height: ${props => (props.Banner ? '15%' : '30px')};
  }/
`
