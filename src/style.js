import {createGlobalStyle} from 'styled-components';
 
// 全局 CSS 样式设置
export const GlobalStyle = createGlobalStyle`
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display: block;}body {line-height: 1;}ol,ul {list-style: none;}blockquote,q {quotes: none;}blockquote:before,blockquote:after,q:before,q:after {content: '';content: none;}table {border-collapse: collapse;border-spacing: 0;}

@font-face {font-family: "iconfont";
  src: url('./static/iconfont/iconfont.eot?t=1569226615912'); /* IE9 */
  src: url('./static/iconfont/iconfont.eot?t=1569226615912#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./static/iconfont/iconfont.woff?t=1569226615912') format('woff'),
  url('./static/iconfont/iconfont.ttf?t=1569226615912') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/iconfont/iconfont.svg?t=1569226615912#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
