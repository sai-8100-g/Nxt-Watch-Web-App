import styled from 'styled-components'

export const Li = styled.li`
   width: 30%;
   float: left;
   padding: 2%;
   margin: 1%;
   display: flex;
   box-shadow:  ${props => {
     if (props.theme === true) {
       return '0px 0px 2px 2px #212121, -0px -0px 2px 2px #212121'
     }
     return '0px 0px 2px 2px #e2e8f0, -0px -0px 2px 2px #e2e8f0'
   }};

   .videosLink {
    width: 100%;
      text-decoration: none;
      display: flex;
      flex-direction: column;
   }

   @media (max-width: 767px) {
    width: 48%;
    .videosLink {
      display: flex;
      flex-direction: column;
    }
   }
    
   /
`

export const Img = styled.img`
   width: 100%;
   height: 70%;
    @media (max-width:767px) {
      width: 100%;
    }
  /
`

export const LowerLiContainer = styled.div`
   display: flex;
   flex-direction: column ;
   padding: 2%; 
   width: 100%; 

   color : ${props => {
     if (props.theme === true) {
       return ' #616e7c'
     }
     return '#475569'
   }};

    .views {
      font-size: 1.2vw;
      color: #475569;
    }


   @media (max-width: 767px) {
    .views {
      font-size: 3.5vw;
      color: #475569;
    }
       width: 100%;
   }/
`

export const Para = styled.p`
font-weight: bold;
color:  ${props => {
  if (props.theme === true) {
    return '#ffffff'
  }
  return '#1e293b'
}};
margin-bottom: 0px;

@media (max-width: 768px) {
  margin-bottom: 4%;
  font-size: 3vw;
}

@media (min-width: 768px) and (max-width:1200px) {
  font-size: 1.8vw;
}

@media (min-width: 1200px) {
  font-size: 1.5vw;
}/
`
