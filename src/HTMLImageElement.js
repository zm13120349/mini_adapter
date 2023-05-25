import HTMLElement from './HTMLElement'

const imageConstructor = wx.createImage().constructor;

// imageConstructor.__proto__.__proto__ = new HTMLElement();

export default imageConstructor;