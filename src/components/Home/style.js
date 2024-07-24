import styled from 'styled-components'
import {FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const MainContainer = styled.div`

      opacity: ${props => {
        if (props.popup === true) {
          return '0.5'
        }
        return '1'
      }};


    background-color: ${props => {
      if (props.theme === true) {
        return '#0f0f0f'
      }
      return '#ffffff'
    }};/
`

export const SidebarAndContentContainer = styled.div`
   min-height: 90vh;
   display:flex;

   /
`

export const Sidebar = styled.div`
  width: 20%; 
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

export const Content = styled.div`
  width: 70%;
  display: flex;
  background-color: ${props => {
    if (props.theme === true) {
      return '#0f0f0f'
    }
    return '#ffffff'
  }};
  flex-direction: column;

  @media (max-width: 768px)  {
     width: 100%;
  }
  @media (min-width: 768px) and (max-width:1024px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }/
`

export const NavigatingSectionLinks = styled.ul`
list-style-type: none;
padding: 0px ;
display: flex;
flex-direction: column;/
`

export const Heading = styled.h1`
    color: #1e293b;/
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

export const Banner = styled.div`
   height: 90%;
   width: 100%;
   background-position: center;
   padding: 2%;
   background-size: cover;
   @media (max-width:576px) {
      padding: 2% 4%;
   }

   @media (min-width: 576px) {
      background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
   }/
`

export const BannerContainer = styled.div`
    height: 250px;
    background-color: #ffffff;
    width: 100%;/
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

export const Para = styled.p`
  align-self: ${props => (props.link ? 'center' : '')};
  color: #1e293b;
  

  &:hover {
    font-weight: ${props => (props.link ? 'bold' : 'normal')};
  }/
`

export const Li = styled.li`
  display: flex;
  border-radius: 5px ;
  padding: ${props => (props.media ? '' : '0.5% 8%')};
  margin-right: ${props => (props.media ? '2%' : '')};
  margin-bottom: ${props => (props.media ? '' : '0.5%')};


.icon {
  font-size: 1.2vw;
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

export const Button = styled.button`
   background-color: transparent; 
   color: #475569;
   border: ${props => (props.close ? 'none' : '2px solid #475569')};
   font-size: ${props => (props.close ? '1.5vw' : '')};
   padding: 1% 4%;
   width: ${props => (props.close ? '100%' : '')}; 
   text-align: right;


   @media (max-width: 768px) {
     font-size: ${props => (props.close ? '4vw' : '')};
   }

   @media (min-width: 768px) {
    font-size: ${props => (props.close ? '1.5vw' : '')};
   }/
`
export const VideoUl = styled.ul`
   display: flex;
   flex-wrap: wrap;
   padding:0px;/
`

export const FailureContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    margin-top: 4%;
    color: ${props => {
      if (props.theme === true) {
        return '#ffffff'
      }
      return '#1e293b'
    }};
    
     .failurePara {
      color: #475569;
      text-align: center;
     }

     .failureImg {
        width: 40%;
     }

     .failureHeading {
      text-align: center;
     }


     @media (max-width: 767px) {
      .failureImg {
        width: 80%
      }

      .failureHeading {
        
      }
     }/

`

export const FailureBtn = styled.button`
   background-color: #3b82f6;
   color: #ffffff;
   padding:1% 4%; 
   border: none;
   border-left:none;
   border-radius: 4px;

   @media (max-width:767px) {
     padding:1% 4% ;
   }/
`

export const SearchBtn = styled.button`
   background-color: transparent; 
   color: ${props => {
     if (props.theme === true) {
       return '#ffffff'
     }
     return '#1e293b'
   }};
   border: 1px solid #94a3b8;
   border-left: none; 
   padding: 0% 2%; 

   @media (max-width: 767px) {
    padding: 0% 4%;
   }/
`

export const Input = styled.input`
  padding: 1% 4%;
  color:  ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#475569'
  }}; 
  background-color: ${props => {
    if (props.theme === true) {
      return ' #0f0f0f'
    }
    return '#ffffff'
  }};
  border: 1px solid #94a3b8;
  border-right:-1px solid #94a3b8;
  margin: 0px;
  width: 40%;

  @media (max-width: 767px) {
    width:85%;
    padding: 3%;
  }

  &:focus {
    outline:none;
  }/
`

export const VideosUl = styled.ul`
   padding: 0px;
   width: 100%;
   list-style-type: none;
   display; flex;
   flex-direction:row;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   /
`

export const ProgressContainer = styled.div`
   height: 90vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  /
`
