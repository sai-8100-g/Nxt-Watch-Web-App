import styled from 'styled-components'
import {FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const Nav = styled.nav`
background-color: ${props => {
  if (props.theme === true) {
    return '#0f0f0f'
  }
  return '#ffffff'
}};
  display:flex;
  justify-content: space-between;
  height: 10vh;
  padding: 1% 2%;
  
  
  .imgLink {
    align-self: center
  width: 30%; 
  height: 80%;

  @media (max-width:767px) {
    width:30%;
    height: 50%;
    align-self: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 23%;
    height: 55%;
    align-self: center;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 20%;
    height: 70%;
    align-self: center;
  }/

  }
  
  /
`

export const LogoImg = styled.img`
align-self: center
  width: 100%; 
  height: 100%;
`

export const NavRightSideContainer = styled.div`
   width: 20%;
   display:flex;
   justify-content: space-around;
   align-items: center;

   @media (max-width: 768px) {
     width: 40%;
   }

   @media (min-width: 768px) and (max-width: 1200px) {
    width: 25%;
   }/
`

export const ProfileImg = styled.img`
width: 30px;
height: 30px;


@media (max-width: 768px) {
  display:none;
}
@media (min-width:768px) {
  display: flex;
}/
`

export const NavButton = styled.button`
  background-color: transparent; 
  border: 2px solid ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#3b82f6'
  }};
  border-radius: 4px ;
  padding: 2% 4%;
  font-weight: bold;
  color: ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#3b82f6'
  }};
  @media (max-width: 768px) {
    display: none; 
  }

  @media (min-width: 768px) {
    display: flex;
  }/
`

export const DisplayContainer = styled.div`
color : ${props => {
  if (props.theme === true) {
    return '#ffffff'
  }
  return '#000000'
}};
   font-size: 6vw;
  @media (max-width: 768px) {
    display:flex
  }

  @media (min-width: 768px) {
    display:none;
  }/

`

export const NavButtonIcon = styled.button`
  border: none;
  align-self: center;
  display: flex;
  justify-content:center;
  background-color: transparent;
  align-items: center;
  color: ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#000000'
  }}; 
  font-size: 2vw;
  @media (max-width: 767px) {
    font-size: 6vw;
  }/
`

export const ModalContainer = styled.div`

    .buttonsContainer {
      width: 100% ;
      display: flex;
      justify-content: space-around;
    }

   border-radius: 4px;
   background-color: ${props => {
     if (props.theme === true) {
       return '#000000'
     }
     return '#ffffff'
   }};
   width: 100%; 
   padding: 10%;
   color:  ${props => {
     if (props.theme === true) {
       return '#ffffff'
     }
     return ' #1e293b'
   }};


   @media (max-width: 767px) {
      width: 90%;
   }/
`

export const ModalButton = styled.button`
   padding: 2% 6%;
   border-radius: 4px;
   border:  ${props => {
     let border
     if (props.bgcolor === true) {
       border = 'none'
     } else if (props.theme === true) {
       border = '1px solid #ffffff'
     } else {
       border = '1px solid #1e293b'
     }
     return border
   }};
   background-color: ${props => {
     if (props.bgcolor === true) {
       return ' #3b82f6'
     }
     return 'transparent'
   }};

   color: ${props => {
     let color
     if (props.bgcolor === true) {
       color = '#ffffff'
     } else if (props.theme === true) {
       color = '#ffffff'
     } else {
       color = '#1e293b'
     }
     return color
   }};/
`

export const ModalPara = styled.p`
   text-align:center;
   font-weight: 500;
   color:  ${props => {
     if (props.theme === true) {
       return '#ffffff'
     }
     return '#1e293b'
   }}; /
`

export const IconButton = styled.button`
  border:none;
  color : ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#000000'
  }};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  /
`

export const NavigatingSectionLinks = styled.ul`
list-style-type: none;
width: 100%;
height: 90vh;
padding: 0px ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.navLinks {
  text-decoration:none;
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;


  background-color: ${props => {
    if (props.value === true) {
      return '#e2e8f0'
    }
    return 'transparent'
  }};
}/
`

export const Li = styled.li`
   width: 100%;
  display: flex;
  justify-content:center;
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

.icon {
  width: 10%;
  font-size: 6vw;
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

.text {
  width: 50%;
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


 /
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

export const ModalMenuContainer = styled.div`
   height: 100vh;
   width: 100vw;
   background-color: ${props => {
     if (props.theme === true) {
       return '#000000'
     }
     return '#ffffff'
   }};
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;/
`

export const ModalMenuCloseBtn = styled.button`
  border: none;
  color: ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#000000'
  }};
  width: 100%; 
  font-size: 8vw;
  text-align: right;
  background-color: transparent;/
`
