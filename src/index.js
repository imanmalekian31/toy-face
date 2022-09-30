const GROUPS = [
  {
    rows: 3,
    cols: 6,
    img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",
  },
  {
    rows: 3,
    cols: 6,
    img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
  },
];

class ToyFace extends HTMLElement {
  static get observedAttributes() {
    return ["size", "rounded", "toy-number", "group"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });

    const span = document.createElement("span");
    shadowRoot.appendChild(span);
  }

  connectedCallback() {
    // size validate
    this.size = parseInt(this.getAttribute("size")) || 48;

    // rounded validate
    this.rounded = parseInt(this.getAttribute("rounded")) || 0;

    // toy-number validate
    const toyNumber = parseInt(this.getAttribute("toy-number")) || 1;
    if (!(toyNumber >= 1 && toyNumber <= 18)) {
      console.warn(
        "The toy-number attribute should be a number between 1 and 18! (include 1 and 18)"
      );
      this["toy-number"] = 1;
    }
    this["toy-number"] = toyNumber;

    // group validate
    const group = this.getAttribute("group") || 1;
    if (!(group >= 1 && group <= 2)) {
      console.warn("The group attribute should be 1 or 2!");
      this.group = 1;
    }
    this.group = group;

    this.style.cssText = this.avatarStyle;
  }

  get currentGroup() {
    return GROUPS[this.group - 1];
  }
  get posX() {
    return (this["toy-number"] - 1) % this.currentGroup.cols;
  }
  get posY() {
    return Math.floor((this["toy-number"] - 1) / this.currentGroup.cols);
  }
  get avatarStyle() {
    return `
    display:inline-block;
    width:${this.size}px;
    height:${this.size}px;
    background-image:${this.currentGroup.img};
    background-repeat:no-repeat;
    background-size:${this.size * this.currentGroup.cols}px ${
      this.size * this.currentGroup.rows
    }px;
    margin:8px;
    border-radius:${this.rounded}px;
    background-position-x:-${this.posX * this.size}px;
    background-position-y:-${this.posY * this.size}px`;
  }
}

window.customElements.define("toy-face", ToyFace);
