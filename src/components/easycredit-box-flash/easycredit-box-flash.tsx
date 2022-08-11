import { Component, Method, Prop, h } from '@stencil/core';

@Component({
  tag: 'easycredit-box-flash',
  styleUrl: 'easycredit-box-flash.scss',
  shadow: true,
})

export class EasycreditBoxFlash {

  @Prop() src: string
  @Prop() isOpen: boolean = false

  @Method() async toggle () {
    this.isOpen = !this.isOpen
  }

  backgroundSrc() {
    if (!this.src) {
      return 'http://159.69.33.205:6006/src/components/easycredit-base/assets/motiv-online-floor.jpg'
    } else {
      return this.src
    }
  }

  render() { 
    return ([
      <div class={{ 'ec-box-flash': true, 'active': this.isOpen }} onClick={() => this.toggle()}>
        <div class="ec-box-flash__inner">
            <div class="ec-box-flash__close"></div>

            <div class="ec-box-flash__preview">
                <div class="ec-box-flash__preview-logo"></div>
                <div class="ec-box-flash__preview-heading">
                    Ganz entspannt <span>in Raten zahlen</span>.
                </div>
            </div>

            <div class="ec-box-flash__content">
                <div class="ec-box-flash__content-heading">
                    Ganz entspannt <span>in Raten zahlen</span>.
                </div>
                <div class="ec-box-flash__content-description">
                    Der easyCredit-Ratenkauf bietet Ihnen die Möglichkeit hier im Online-Shop bequem und einfach in Raten zu zahlen. Direkt von zu Hause und ganz ohne Risiko. Denn zuerst erhalten Sie Ihre Bestellung und bezahlen später in Ihren Wunschraten. 
                </div>
                <div class="ec-box-flash__content-button">
                  <a class="btn btn-primary" href="https://www.easycredit-ratenkauf.de/" target="_blank">Mehr erfahren</a>
                </div>

                <div class="ec-box-flash__content-logo-finanzgruppe"></div>

                <div class="ec__circle-badge">Flexibel <span>Sofort</span> Transparent</div>
            </div>

            <div class="ec-box-flash__image" style={{backgroundImage: `url(${this.backgroundSrc()})`}}>
                <div class="ec-box-flash__image-logo"></div>
            </div>
        </div>
      </div>
    ])
  }
}
