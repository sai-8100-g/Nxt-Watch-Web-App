import styled from 'styled-components'

export const Li = styled.li`
   width: 30%;
   float: left;
   height: 330px;
   margin: 1%;
   padding: 1%;
   box-shadow: ${props => {
     if (props.theme === true) {
       return '0px 0px 2px 2px #212121, -0px -0px 2px 2px #212121'
     }
     return '0px 0px 2px 2px #e2e8f0, -0px -0px 2px 2px #e2e8f0 '
   }};


   .videosLink {
      text-decoration: none;
   }


   @media (max-width:768px) {
      width: 100%;

   }

   @media (min-width: 768px) and (max-width:1024px) {
     width: 30%;
     height: 200px;
   }

   @media (min-width: 1024px) and (max-width:2560px) {
       height: 320px;
   }

   @media (min-width: 2560px) {
      height : 700px;
   }
    
   /
`

export const Img = styled.img`
   width: 100%;
   height : 55%;

   @media (min-width: 320px) and (max-width: 576px) {
     height: 60%;
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      height: 45%;
   }

   @media (min-width: 1024px) and (max-width: 1440px) {
    height: 50%;
   }/
`

export const ProfileImg = styled.img`
margin-top: 5%;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 30px; 
    height: 30px;
    margin-top: 8%;
  }/
`

export const Para = styled.p`
font-weight: normal;
color:  ${props => {
  if (props.theme === true) {
    return '#e2e8f0'
  }
  return '#1e293b'
}};
margin-bottom: 0px;

@media (max-width: 768px) {
  margin-bottom: 4%;
}

@media (min-width: 768px) and (max-width:1200px) {
  font-size: 1vw;
}

@media (min-width: 1200px) {
  font-size: 1vw;
}/
`

export const ParasContainer = styled.div`
    display: flex;
    flex-direction: column;
    color:  ${props => {
      if (props.theme === true) {
        return '#64748b'
      }
      return '#475569'
    }};
    font-weight: normal;
    
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
        margin-right: 5px;
        font-size: 3vw;
      }
    }


    @media (min-width: 768px) {
      .firstDot {
        display:none;
      }
    }


    @media (min-width: 768px) and (max-width: 1024px) {
      .name, .views, .date, .dotIcon, .firstDot {
        font-size: 1vw;
      }

    }

    @media (min-width: 1024px) {
      .name, .views, .date, .dotIcon, .firstDot {
        font-size: 1vw;
      }
    }/
`
