import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => {
    if (props.theme === true) {
      return '#0f0f0f'
    }
    return '#ffffff'
  }};/
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

export const SidebarAndContentContainer = styled.div`
   min-height: 90vh;
   display:flex;

   /
`
export const Content = styled.div`
  width: 70%;
  display: flex;
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

export const TrendingIcon = styled.div` 
   align-self: center;
   background-color: #f1f1f1; 
   display: flex; 
   justify-content: center;
   align-items: center;
   width: 50px; 
   height: 50px ;
   font-size: 2vw;
   color: #ff0000;
   margin-right: 2%;
   border-radius: 50%;
   @media (max-width: 767px) {
    font-size: 7vw;
   }

   
   
   /
`

export const TrendingLogoContainer = styled.div`
  width: 100%;
  padding: 1% 4%;
  color : ${props => {
    if (props.theme === true) {
      return '#ffffff'
    }

    return '#1e293b'
  }};
  background-color:  ${props => {
    if (props.theme === true) {
      return '#231f20'
    }
    return '#f1f5f9'
  }};
  display: flex;
  
  .trendingHeading {
    align-self: center; 
    color: #1e293b;
  }
  
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
