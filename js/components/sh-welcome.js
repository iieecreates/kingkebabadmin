export class ShWelcome extends MinzeElement {
  attrs = ['name']

  html = () => `
    <div>
      <p class="text">xxx님, 방문을 환영합니다.</p>
      <h2 class="headline">${this.name ?? ''}</h2>
    </div>

    <sh-button class="button">
      출근 확인
    </sh-button>

    <img src="assets/icon-sun.svg" class="icon">
  `

  css = () => `
    :host {
      width: 100%;
	  background: rgba(0, 0, 0, 0.1);

	  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	  
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      padding: 24px;
      margin-bottom: 48px;
    }

    .text {
      font-size: 18px;
      margin: 0;
    }

    .headline {
      font-size: 30px;
      margin: 0;
    }

    .button {
      margin-top: 32px;
    }

    .icon {
      width: 512px;
      height: 512px;
      opacity: 5%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(0, 50%);
    }
  `
}
