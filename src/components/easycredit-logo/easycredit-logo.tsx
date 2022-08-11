import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'easycredit-logo',
  styleUrl: 'easycredit-logo.scss',
  shadow: false,
})

export class EasycreditLogo {

  @Prop({ mutable: true }) alt: string = 'easyCredit-Ratenkauf - Einfach. Fair. In Raten zahlen.';

  render() { 
    return ([
      <img src="http://159.69.33.205:6006/src/components/easycredit-base/assets/ratenkauf-logo.svg" alt={this.alt} />
    ])
  }
}
