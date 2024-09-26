import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
      return {
        title: { type: String},
        image: { type: String },
        description: { type: String },
        link: { type: String }
      };
    }
  

  constructor() {
    super();
    this.title = "My card";
    this.description = 'Description';
    this.image = '';
    this.link = '#';
    this.fancy = false;
    this.text = "These are descriptive words that describe."
  }


  
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) {
       display: block;
       background-color: turquoise;
      border: 2px solid blue;
      box-shadow: 10px 5px 5px green; 
    }
      .card {
        padding: 8px;
        width: 300px;
        border-radius: 8px;
        text-align: center;
        background-color: white;
        border: 2px solid black;
      }

      .title {
        font-size:24px;
      }

      img {
        margin: auto;
        display: flex;
        height: 150px;
        width: 200px;
      }

      button {
        margin: 12px;
        background-color: blue;
      }

      .button-wrapper {
        display: flex;
        justify-content: center;
      }

      a:focus,
      a:hover {
        color: yellow;
      }

      a {
        text-decoration: none;
        color: white;
      }
    `;
  }


  render() {
    return html`<div class="card">
        <img src=${this.image}>
          <div class="title">${this.title}</div>
        <p>${this.description}</p>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
          <div>
        <slot>${this.text}</slot>
          </div>
        </details>
          <div class="button-wrapper">
        <button><a href=${this.link}>Details</a></button>
          </div>
          </div>`;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String},
      link: {type: String},
      description: {type: String},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
