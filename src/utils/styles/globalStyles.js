import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html {
  min-height: 100%;
  width: 100%;
 }

 body {
  -webkit-overflow-scrolling: touch;
  min-height: 100%;
  scrollbar-width:thin;  
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.text.secondaryColor};
  font-family: ${(props) => props.theme.font.primary};
 }
 
 a{
   color:${({ theme }) => theme.text.primaryColor};
 }
 
 .ant-modal-wrap{
  backdrop-filter: blur(4px);
  }
`;

export default GlobalStyle;
