import styled from 'styled-components'

export const LoginContainer = styled.div`
   height: 100vh;
   background-color: ${props => {
     if (props.theme === true) {
       return '#212121'
     }
     return '#ffffff'
   }};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items : center;/
`

export const FormContainer = styled.form`
    height : 400px ;
    width: 40%;
    background-color: ${props => {
      if (props.theme === true) {
        return '#0f0f0f'
      }
      return '#ffffff'
    }};
    padding: 2%;
    box-shadow:  ${props => {
      if (props.theme === true) {
        return null
      }
      return '0px 0px 2px 2px #f1f5f9, -0px -0px 2px 2px #f1f5f9'
    }};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 767px) {
        width: 90%; 
        height: 300px;
       
    }

    @media (min-width: 768px) and (max-width: 1200px) {
      width: 60%;
     height: 400px;
    }/
`

export const HoldingContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;/
`

export const Input = styled.input`
   padding: 3% 4%;
   border: 1px solid  ${props => {
     if (props.theme === true) {
       return '#909090'
     }
     return '#cbd5e1'
   }};
   font-size: 1vw;
   color: #475569;
   background-color: transparent;
   border-radius: 5px;
   width: 100%;

   @media (max-width: 767px) {
      font-size: 4vw;
   }
   @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 2vw;
   }/
`

export const Label = styled.label`
    font-size:1vw;
    color: ${props => {
      if (props.theme === true) {
        return '#ffffff'
      }
      return '#475569'
    }};

    @media (max-width: 767px) {
        font-size: 3vw;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 1.6vw;
   }/
`
export const Button = styled.button`
   padding: 2% 10%;
   color: #ffffff;
   border: none;
   border-radius: 5px;
   align-self: stretch;
   background-color:  #3b82f6; 
   font-size: 1vw;

   @media (max-width: 767px) {
      font-size: 4vw;
   }

   @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 1.6vw;
   }/
`

export const Img = styled.img`
   align-self: center;
   width: 100%;
   height: 60%; /
`
export const Para = styled.p`
   color: red; 
   font-size: 0.8vw;
   margin: 0px;
   @media (max-width: 767px) {
      font-size: 3vw;
   }

   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 1.6vw;
   }/
`
