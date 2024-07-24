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

export const FailureContainer = styled.div`
     width: 100%;
     padding: 2%;
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
