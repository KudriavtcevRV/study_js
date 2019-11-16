function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}
DomElement.prototype.createSelector = function () {
  if (this.selector.startsWith('.')) {
    this.element = document.createElement('div');
    this.element.classList.add(this.selector.slice(1));//
  }
  else if (this.selector.startsWith('#')) {
    this.element = document.createElement('p');
    this.element.id = this.selector.slice(1);
  }
  let body = document.querySelector('body');
  body.appendChild(this.element);
  this.element.style.cssText = `
  height: ${this.height};
  width: ${this.width};
  background: ${this.bg};
  font-size: ${this.fontSize};
  `;
};
let DomElement2 = new DomElement('#red', '100px', '150px', 'red', '14px');
console.log(DomElement2);
DomElement2.createSelector();