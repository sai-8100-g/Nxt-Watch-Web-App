import styled from 'styled-components'

export const Li = styled.li`
   width: 96%;
   padding: 2%;
   margin: 2%;
   display: flex;
   box-shadow: ${props => {
     if (props.theme === true) {
       return ' 0px 0px 2px 2px #212121, -0px -0px 2px 2px #212121'
     }
     return ' 0px 0px 2px 2px #e2e8f0, -0px -0px 2px 2px #e2e8f0'
   }};

   .videosLink {
    width: 100%;
      text-decoration: none;
      display: flex;
   }

   @media (max-width: 767px) {
    .videosLink {
      display: flex;
      flex-direction: column;
    }
   }
    
   /
`

export const Img = styled.img`
   width: 50%;
    @media (max-width:767px) {
      width: 100%;
    }
  /
`

export const ProfileImg = styled.img`
margin-top: 4%;
  width: 40px;
  height: 40px;
  
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
  /
`

export const LowerLiContainer = styled.div`
   display: flex;
   padding: 2%; 
   width: 50%; 
   @media (max-width: 767px) {
       width: 100%;
   }/
`

export const Para = styled.p`
font-weight: 500;
color:  ${props => {
  if (props.theme === true) {
    return ' #e2e8f0'
  }
  return '#1e293b'
}};
margin-bottom: 0px;

@media (max-width: 768px) {
  margin-bottom: 4%;
}

@media (min-width: 768px) and (max-width:1200px) {
  font-size: 1.8vw;
}

@media (min-width: 1200px) {
  font-size: 1.5vw;
}/
`

export const ParasContainer = styled.div`
    display: flex;
    flex-direction: column;
    color:  ${props => {
      if (props.theme === true) {
        return '#94a3b8'
      }
      return '#475569'
    }};
    font-weight: 500;
    
    .firstDot {
      display:none;
    }

    .lowerParaContainer {
      display: flex;
    }

    .dotIcon, .firstDot {
      align-self: center;
    }

    .views, .date {
      margin: 0px;
    }


    @media (max-width: 767px) {
      flex-direction: row;

      .firstDot {
        display: flex;
        align-selt: center;
      }

      .name, .views, .date, .dotIcon, .firstDot {
        margin: 0px;
        font-size: 3.5vw;
        margin-right: 5px;
      }
    }


    @media (min-width: 768px) {
      .firstDot {
        display:none;
      }
    }


    @media (min-width: 768px) and (max-width: 1024px) {
      .name, .views, .date, .dotIcon, .firstDot {
        font-size: 1.2vw;
      }

    }

    @media (min-width: 1024px) {
      .name, .views, .date, .dotIcon, .firstDot {
        font-size: 1.3vw;
      }
    }/
`
