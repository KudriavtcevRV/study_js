function DomElement(selector, height, width, bg, fontSize, display ) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.display = display;
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
  display: ${this.display};
  `;
};
let DomElement2 = new DomElement('.red', '100px', '150px', 'blue', '14px', 'inline-block');
console.dir(DomElement2);
DomElement2.createSelector();