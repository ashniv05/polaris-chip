import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get properties() {
      return {
        title: { type: String

         },
        image: { type: String 

        },
        description: { type: String 

        },
        link: { type: String 

        }
      };
    }
  

  constructor() {
    super();
    this.title = "My card";
    this.description = 'Description';
    this.image = '';
    this.link = '#';
    }
  }

  static get styles() {
    return css`
      .card {
        border: 1px solid #ccc;
        padding: 16px;
        background-color: white;
      }
      .card img {
        max-width: 100%;
      }
      .card h3 {
        margin: 0;
      }
      .card a {
        color: blue;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
