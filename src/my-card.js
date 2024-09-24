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
  }


  
  static get styles() {
    return css`
      :host {
        display: inline-block;
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
        margin: auto;
        display: flex;
        background-color: blue;
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
      <button><a href=${this.link}>Details</a></button>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String},
      link: {type: String},
      description: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
