import styled from 'styled-components'

export const MainContainer = styled.div`
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

export const Content = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;

  color : ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }
    return '#0f0f0f'
  }};

  .title {
    padding: 0% 3%;
  }

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

export const VideoContainer = styled.div`
   width: 100%;
   height: 50%; 
   height: 500px;
   
   @media (max-width: 767px) {
    height: 300px;
   }
/
`

export const RowContainer = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-between;
   color: #475569;

  .firstContainer {
    display: flex;
    width: 20%;
    justify-content: space-between;
    color: #475569;
  }

  .notLiked {
    color: #3b82f6;
     background-color: #3b82f6;
  }

  .liked {
    color: #3b82f6;
    background-color: #3b82f6;
  }

  .iconButtons {
    align-self: center;
      border: none;
      background-color: transparent;
      color: #475569;
  }

  .text {
    margin:0px ;
  color: #475569;
  }

  .secondContainer {
    display: flex;
    justify-content: space-between;
    width: 25%;
    color: #475569;
    .secondContainer {
    display: flex;
  }
  }
  
  
  
    @media (max-width:768px) {
    flex-direction: column;

    .firstContainer {
      margin-bottom: 8%;
      width: 50%;
      font-size: 4vw;
    }
    .secondContainer {
      width:70%;
      
    }
  }


@media (min-width: 768px) and (max-width: 1024px) {
   flex-direction: row;

   .firstContainer {
    font-size: 1.5vw;
    width: 30%;
    align-self: center;
   }

   .secondContainer {
    font-size: 1.5vw;
    width: 40%;
   }
}
  
  
  /
  `

export const Hr = styled.hr`
  color: #475569;
  width: 100%;/
  `

export const ChannelContainer = styled.div`
   display: flex;

   .profileImg {
      width: 50px;
      height: 50px;
      margin: 2%;
   }

   @media (max-width: 768px) {
    .smallText {
      display: flex;
    }
    .mediumText {
      display:none;
    }
   }

   @media (min-width: 768px) {
    .smallText {
      display: none;
    }
       .mediumText {
        display: flex;
       }
   }

   /
`

export const SmallText = styled.p`
   @media (max-width:768px) {
      display: flex;
      padding: 2% 4%;
   }

   @media (min-width: 768px) {
    display: none;
   }/
`

export const Button = styled.button`
    color: ${props => {
      if (props.like === true) {
        return ' #2563eb'
      }
      return '#64748b'
    }};
    display:flex;
    justify-content: center;
    align-items:center;
    background-color: transparent;
    border:none;
    font-size: 1.2vw;

    @media (max-width: 767px) {
       font-size: 4vw;
    }/
`

export const ProgressContainer = styled.div`
   height: 90vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  /
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
