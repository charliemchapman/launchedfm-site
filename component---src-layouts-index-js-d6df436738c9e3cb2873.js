webpackJsonp([0x67ef26645b2a,60335399758886],{105:function(e,t){e.exports={layoutContext:{}}},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=n(2),r=a(u),o=n(208),c=a(o),s=n(105),f=a(s);t.default=function(e){return r.default.createElement(c.default,l({},e,f.default))},e.exports=t.default},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(2),c=a(o),s=n(35),f=a(s),d=n(302),i=a(d),m=function(e){function t(n){return l(this,t),u(this,e.call(this,n))}return r(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:i.default.footer},c.default.createElement("div",{className:i.default.links},c.default.createElement(f.default,{to:"/subscribe"},"Subscribe"),c.default.createElement("div",null,"|"),c.default.createElement(f.default,{to:"/contact"},"Contact"),c.default.createElement("div",null,"|"),c.default.createElement(f.default,{to:"/about"},"About"),c.default.createElement("div",null,"|"),c.default.createElement(f.default,{to:"/"},"Home")),c.default.createElement("p",{className:i.default.signature},"Made by Charlie Chapman in St. Louis, MO"))},t}(c.default.Component);t.default=m,e.exports=t.default},206:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return[s.default.createElement(d.default,{to:"/subscribe",onClick:e,key:1},s.default.createElement("div",{className:m.default.link},"Subscribe")),s.default.createElement(d.default,{to:"/contact",onClick:e,key:2},s.default.createElement("div",{className:m.default.link},"Contact")),s.default.createElement(d.default,{to:"/about",onClick:e,key:3},s.default.createElement("div",{className:m.default.link},"About")),s.default.createElement(d.default,{to:"/",onClick:e,key:4},s.default.createElement("div",{className:m.default.link},"Home"))]}t.__esModule=!0;var c=n(2),s=a(c),f=n(35),d=a(f),i=n(303),m=a(i),p=n(478),A=a(p),E=n(479),y=a(E),h=function(e){function t(n){l(this,t);var a=u(this,e.call(this,n));return a.state={isMenuOpen:!1},a}return r(t,e),t.prototype.render=function(){var e=this,t=function(){document.activeElement.blur(),e.setState({isMenuOpen:!e.state.isMenuOpen})},n=function(){e.setState({isMenuOpen:!1})},a=this.state.isMenuOpen?s.default.createElement("div",{className:m.default.menuPopupScreen,onClick:n}):null,l=this.state.isMenuOpen?m.default.menuOpened:m.default.menuClosed,u=m.default.menuPopup+" "+l;return s.default.createElement("div",{className:m.default.header},s.default.createElement("div",{className:m.default.image},s.default.createElement(d.default,{to:"/"},s.default.createElement("img",{src:y.default,alt:"Launched Logo"}))),s.default.createElement("div",{className:m.default.links},o(n)),s.default.createElement("button",{className:m.default.menu,onClick:t},s.default.createElement("img",{src:A.default,alt:"Menu"})),a,s.default.createElement("div",{className:u},o(n)))},t}(s.default.Component);t.default=h,e.exports=t.default},478:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAATCAYAAABhh3Y4AAAAAXNSR0IArs4c6QAAAKlJREFUSA1j+P//fwMQvwdiWoLzQMMVGIHEBwYGBn4gpjUoZALacIDWtkDNP8AIYgB9ZwCkBKCCtKAuMDIygkJwFFAeArA4cwAa9Z9y43Ca8BAYZw9ASX8DUIk/TmXUkwgEJX0H6pmH1yQFkGUNQPwQrzLKJTcCjQCF4CgYYiEASvoOQDfb09jdoHJxIQuQWADE8kBMa/ARlPTpBkDBaAC0LYDGNoKCcQEAJSSOL4f9CeAAAAAASUVORK5CYII="},479:function(e,t,n){e.exports=n.p+"static/launched_artwork.7e9abd15.jpg"},208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(2),u=a(l),r=n(26),o=a(r),c=n(206),s=a(c),f=n(205),d=a(f),i=n(304),m=a(i);t.default=function(e){var t=e.children;return u.default.createElement("div",null,u.default.createElement(o.default,null),u.default.createElement(s.default,null),u.default.createElement("div",{className:m.default.containerBackground},t()),u.default.createElement(d.default,null))},e.exports=t.default},302:function(e,t){e.exports={footer:"src-styles----footer-module---footer---V5wV3",links:"src-styles----footer-module---links---Qlx7p",signature:"src-styles----footer-module---signature---12FZc"}},303:function(e,t){e.exports={header:"src-styles----header-module---header---1C-DW",image:"src-styles----header-module---image---2ijAT",links:"src-styles----header-module---links---uYR05",link:"src-styles----header-module---link---1EMsL",menu:"src-styles----header-module---menu---1Zp9j",menuPopup:"src-styles----header-module---menuPopup---2v0Xa",menuPopupScreen:"src-styles----header-module---menuPopupScreen---1U32i",menuOpened:"src-styles----header-module---menuOpened----sfIA"}},304:function(e,t){e.exports={containerBackground:"src-styles----layout-module---containerBackground---3G-yb"}}});
//# sourceMappingURL=component---src-layouts-index-js-d6df436738c9e3cb2873.js.map