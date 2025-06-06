import { Component, h, Element, Method, Prop, Watch, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'easycredit-modal',
  styleUrl: 'easycredit-modal.scss',
  shadow: {
    delegatesFocus: true
  },
})
export class EasycreditModal {
  @Element() element: HTMLElement;

  @Prop() loading: boolean = false;
  @Prop() loadingMessage: string = 'Loading...';
  @Prop() show: boolean;
  @Prop({ mutable: true }) isOpen = false;
  @Prop() size: string = '';

  @State() hasHeadingSlot: boolean = false;
  @State() submittable: boolean = false;
  @State() submitButtonClicked: boolean = false;
  @State() elementHeight: number = null;
  @State() updateFocus = false;

  @Event() modalOpened: EventEmitter;
  @Event() modalClosed: EventEmitter;
  @Event() modalSubmit: EventEmitter;

  componentWillLoad() {
    this.hasHeadingSlot = !!this.element.querySelector('[slot="heading"]');
    this.submittable = !!this.element.querySelector('[slot="button"]');

    this.moveModal();
  }

  componentDidRender() {
    if (this.updateFocus) {
      requestAnimationFrame(() => {
        this.element.focus();
        this.updateFocus = false;
      });
    }
  }

  moveModal(): void {
    var target = document.querySelector('body');

    if (target && this.element) {
      target.insertBefore(this.element, target.lastChild);
    }
  }

  setElementHeight(): void {
    if (this.size === 'checkout') {
      if (this.elementHeight === null) {
        this.elementHeight = 0;
      }
      var checkoutModalContentContainer = this.element.querySelector<HTMLElement>('[slot="content"] .ec-col-method .ec-container');
      var checkoutModalContentContainerAgreement = this.element.querySelector<HTMLElement>('[slot="content"] .ec-col-agreement .ec-container');

      if (this.elementHeight === 0) {
        setTimeout(() => {
          this.elementHeight =
            checkoutModalContentContainer.offsetHeight > checkoutModalContentContainerAgreement.offsetHeight
              ? checkoutModalContentContainer.offsetHeight
              : checkoutModalContentContainerAgreement.offsetHeight;
        }, 100);
      } else {
        setTimeout(() => {
          this.elementHeight =
            checkoutModalContentContainer.offsetHeight > checkoutModalContentContainerAgreement.offsetHeight
              ? checkoutModalContentContainer.offsetHeight
              : checkoutModalContentContainerAgreement.offsetHeight;
        }, 500);
      }
      // console.log('Set height: ' + this.elementHeight);
    }
  }

  handleKeydown(e) {
    if (e.key == 'Escape') {
      this.close();
    }
  }

  @Method() async open() {
    this.isOpen = true;
    this.updateFocus = true;
    document.addEventListener('keydown', this.handleKeydown.bind(this));

    this.element.querySelectorAll('[data-src]').forEach(el => {
      (el as any).src = (el as any).dataset.src;
    });

    this.setElementHeight();
  }

  @Method() async close() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));

    this.isOpen = false;
    this.submitButtonClicked = false;
    this.modalClosed.emit();

    this.setElementHeight();
  }

  @Method() async toggle() {
    this.isOpen ? this.close() : this.open();
  }

  @Method() async submit() {
    this.submitButtonClicked = true;
    this.modalSubmit.emit();
  }

  @Watch('show') watchShowHandler(shown: boolean) {
    if (shown) {
      this.open();
    } else {
      this.close();
    }
  }

  getSubmitButtonFragment() {
    if (!this.submittable) {
      return;
    }
    return [
      <div class="form-submit" part="submit">
        <button
          class={{ 'btn': true, 'btn-primary': true, 'loading': this.submitButtonClicked }}
          type="button"
          onClick={() => {
            this.submit();
          }}
          disabled={this.submitButtonClicked}
        >
          <slot name="button">Absenden</slot>
        </button>
      </div>,
    ];
  }

  getHeadingFragment() {
    if (!this.hasHeadingSlot) {
      return;
    }
    return [
      <h3 class="heading">
        <slot name="heading" />
      </h3>,
    ];
  }

  render() {
    return [
      <div
        class={{
          'ec-modal': true,
          'show': this.isOpen,
          ['size-' + this.size]: this.size !== '',
        }}
        style={{
          height: this.elementHeight + 'px',
        }}
      >
        <div class="close" onClick={() => this.close()}></div>

        {this.getHeadingFragment()}
        <div class="content" onClick={() => this.setElementHeight()}>
          <slot name="content" />
        </div>

        {this.getSubmitButtonFragment()}
      </div>,
      <div class={{ 'ec-modal-backdrop': true, 'show': this.isOpen }} onClick={() => this.close()} />,
    ];
  }
}
