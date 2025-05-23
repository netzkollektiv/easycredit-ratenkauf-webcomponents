/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InstallmentPlan, InstallmentPlans, METHODS } from "./types";
export { InstallmentPlan, InstallmentPlans, METHODS } from "./types";
export namespace Components {
    interface EasycreditAccordion {
        /**
          * close an accordion item
          * @param index
         */
        "close": (index: number) => Promise<void>;
        /**
          * Open an accordion item
          * @param index
         */
        "open": (index: number) => Promise<void>;
    }
    interface EasycreditAccordionItem {
        /**
          * close the accordion item
         */
        "closeItem": () => Promise<void>;
        /**
          * index of accordion item from top to bottom
         */
        "index": number;
        /**
          * The mutation observer config to listen for content changes in the accordion item
         */
        "mutationObserverConfig": { childList: boolean; subtree: boolean; };
        /**
          * accordion item is open or opening (css transition)
         */
        "open": boolean;
        /**
          * open the accordion item
         */
        "openItem": () => Promise<void>;
    }
    interface EasycreditBase {
    }
    interface EasycreditBoxFlash {
        "isOpen": boolean;
        "src": string;
        "toggle": () => Promise<void>;
    }
    interface EasycreditBoxListing {
        "src": string;
        "toggle": () => Promise<void>;
    }
    interface EasycreditBoxModal {
        "delay": number;
        "isOpen": boolean;
        "snoozeFor": number;
        "src": string;
        "toggle": () => Promise<void>;
    }
    interface EasycreditBoxTop {
    }
    interface EasycreditCheckout {
        "alert": string;
        "amount": number;
        "disableFlexprice": boolean;
        "isActive": boolean;
        "paymentPlan": string;
        "paymentType": METHODS;
        "webshopId": string;
    }
    interface EasycreditCheckoutBillPaymentTimeline {
    }
    interface EasycreditCheckoutInstallments {
        "installments": any;
        "rows": number;
        "showMoreButtonText": string;
    }
    interface EasycreditCheckoutLabel {
        "label": string;
        "paymentType": METHODS;
        "slogan": string;
    }
    interface EasycreditCheckoutPrivacyApproval {
        "webshopId": string;
    }
    interface EasycreditCheckoutTotals {
        "amount": number;
        "installmentPlans": InstallmentPlans;
        "selectedInstallment": InstallmentPlan;
    }
    interface EasycreditExpressButton {
        "amount": number;
        "fullWidth": boolean;
        "paymentTypes": string;
        "redirectUrl": string;
        "webshopId": string;
    }
    interface EasycreditExpressButtonSingle {
        "amount": number;
        "bgBlue": boolean;
        "fullWidth": boolean;
        "paymentType": METHODS;
        "webshopId": string;
    }
    interface EasycreditFaq {
        "paymentType": string;
    }
    interface EasycreditInfopage {
        "paymentTypes": string;
        "variant": 'default' | 'enhanced';
    }
    interface EasycreditLogo {
        "alt": string;
        "color": string;
        "paymentType": METHODS;
    }
    interface EasycreditMerchantManager {
        "date": string;
        "txId": string;
    }
    interface EasycreditMerchantStatusWidget {
        "date": string;
        "isManager": boolean;
        "txId": string;
    }
    interface EasycreditModal {
        "close": () => Promise<void>;
        "isOpen": boolean;
        "loading": boolean;
        "loadingMessage": string;
        "open": () => Promise<void>;
        "show": boolean;
        "size": string;
        "submit": () => Promise<void>;
        "toggle": () => Promise<void>;
    }
    interface EasycreditWidget {
        "amount": number;
        "disableFlexprice": boolean;
        "displayType": string;
        "extended": boolean;
        "paymentTypes": string;
        "webshopId": string;
    }
}
export interface EasycreditAccordionItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEasycreditAccordionItemElement;
}
export interface EasycreditCheckoutInstallmentsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEasycreditCheckoutInstallmentsElement;
}
export interface EasycreditExpressButtonSingleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEasycreditExpressButtonSingleElement;
}
export interface EasycreditModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEasycreditModalElement;
}
declare global {
    interface HTMLEasycreditAccordionElement extends Components.EasycreditAccordion, HTMLStencilElement {
    }
    var HTMLEasycreditAccordionElement: {
        prototype: HTMLEasycreditAccordionElement;
        new (): HTMLEasycreditAccordionElement;
    };
    interface HTMLEasycreditAccordionItemElementEventMap {
        "openEvent": any;
        "contentChanged": any;
    }
    interface HTMLEasycreditAccordionItemElement extends Components.EasycreditAccordionItem, HTMLStencilElement {
        addEventListener<K extends keyof HTMLEasycreditAccordionItemElementEventMap>(type: K, listener: (this: HTMLEasycreditAccordionItemElement, ev: EasycreditAccordionItemCustomEvent<HTMLEasycreditAccordionItemElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLEasycreditAccordionItemElementEventMap>(type: K, listener: (this: HTMLEasycreditAccordionItemElement, ev: EasycreditAccordionItemCustomEvent<HTMLEasycreditAccordionItemElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLEasycreditAccordionItemElement: {
        prototype: HTMLEasycreditAccordionItemElement;
        new (): HTMLEasycreditAccordionItemElement;
    };
    interface HTMLEasycreditBaseElement extends Components.EasycreditBase, HTMLStencilElement {
    }
    var HTMLEasycreditBaseElement: {
        prototype: HTMLEasycreditBaseElement;
        new (): HTMLEasycreditBaseElement;
    };
    interface HTMLEasycreditBoxFlashElement extends Components.EasycreditBoxFlash, HTMLStencilElement {
    }
    var HTMLEasycreditBoxFlashElement: {
        prototype: HTMLEasycreditBoxFlashElement;
        new (): HTMLEasycreditBoxFlashElement;
    };
    interface HTMLEasycreditBoxListingElement extends Components.EasycreditBoxListing, HTMLStencilElement {
    }
    var HTMLEasycreditBoxListingElement: {
        prototype: HTMLEasycreditBoxListingElement;
        new (): HTMLEasycreditBoxListingElement;
    };
    interface HTMLEasycreditBoxModalElement extends Components.EasycreditBoxModal, HTMLStencilElement {
    }
    var HTMLEasycreditBoxModalElement: {
        prototype: HTMLEasycreditBoxModalElement;
        new (): HTMLEasycreditBoxModalElement;
    };
    interface HTMLEasycreditBoxTopElement extends Components.EasycreditBoxTop, HTMLStencilElement {
    }
    var HTMLEasycreditBoxTopElement: {
        prototype: HTMLEasycreditBoxTopElement;
        new (): HTMLEasycreditBoxTopElement;
    };
    interface HTMLEasycreditCheckoutElement extends Components.EasycreditCheckout, HTMLStencilElement {
    }
    var HTMLEasycreditCheckoutElement: {
        prototype: HTMLEasycreditCheckoutElement;
        new (): HTMLEasycreditCheckoutElement;
    };
    interface HTMLEasycreditCheckoutBillPaymentTimelineElement extends Components.EasycreditCheckoutBillPaymentTimeline, HTMLStencilElement {
    }
    var HTMLEasycreditCheckoutBillPaymentTimelineElement: {
        prototype: HTMLEasycreditCheckoutBillPaymentTimelineElement;
        new (): HTMLEasycreditCheckoutBillPaymentTimelineElement;
    };
    interface HTMLEasycreditCheckoutInstallmentsElementEventMap {
        "selectedInstallment": string;
    }
    interface HTMLEasycreditCheckoutInstallmentsElement extends Components.EasycreditCheckoutInstallments, HTMLStencilElement {
        addEventListener<K extends keyof HTMLEasycreditCheckoutInstallmentsElementEventMap>(type: K, listener: (this: HTMLEasycreditCheckoutInstallmentsElement, ev: EasycreditCheckoutInstallmentsCustomEvent<HTMLEasycreditCheckoutInstallmentsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLEasycreditCheckoutInstallmentsElementEventMap>(type: K, listener: (this: HTMLEasycreditCheckoutInstallmentsElement, ev: EasycreditCheckoutInstallmentsCustomEvent<HTMLEasycreditCheckoutInstallmentsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLEasycreditCheckoutInstallmentsElement: {
        prototype: HTMLEasycreditCheckoutInstallmentsElement;
        new (): HTMLEasycreditCheckoutInstallmentsElement;
    };
    interface HTMLEasycreditCheckoutLabelElement extends Components.EasycreditCheckoutLabel, HTMLStencilElement {
    }
    var HTMLEasycreditCheckoutLabelElement: {
        prototype: HTMLEasycreditCheckoutLabelElement;
        new (): HTMLEasycreditCheckoutLabelElement;
    };
    interface HTMLEasycreditCheckoutPrivacyApprovalElement extends Components.EasycreditCheckoutPrivacyApproval, HTMLStencilElement {
    }
    var HTMLEasycreditCheckoutPrivacyApprovalElement: {
        prototype: HTMLEasycreditCheckoutPrivacyApprovalElement;
        new (): HTMLEasycreditCheckoutPrivacyApprovalElement;
    };
    interface HTMLEasycreditCheckoutTotalsElement extends Components.EasycreditCheckoutTotals, HTMLStencilElement {
    }
    var HTMLEasycreditCheckoutTotalsElement: {
        prototype: HTMLEasycreditCheckoutTotalsElement;
        new (): HTMLEasycreditCheckoutTotalsElement;
    };
    interface HTMLEasycreditExpressButtonElement extends Components.EasycreditExpressButton, HTMLStencilElement {
    }
    var HTMLEasycreditExpressButtonElement: {
        prototype: HTMLEasycreditExpressButtonElement;
        new (): HTMLEasycreditExpressButtonElement;
    };
    interface HTMLEasycreditExpressButtonSingleElementEventMap {
        "buttonClicked": string;
    }
    interface HTMLEasycreditExpressButtonSingleElement extends Components.EasycreditExpressButtonSingle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLEasycreditExpressButtonSingleElementEventMap>(type: K, listener: (this: HTMLEasycreditExpressButtonSingleElement, ev: EasycreditExpressButtonSingleCustomEvent<HTMLEasycreditExpressButtonSingleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLEasycreditExpressButtonSingleElementEventMap>(type: K, listener: (this: HTMLEasycreditExpressButtonSingleElement, ev: EasycreditExpressButtonSingleCustomEvent<HTMLEasycreditExpressButtonSingleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLEasycreditExpressButtonSingleElement: {
        prototype: HTMLEasycreditExpressButtonSingleElement;
        new (): HTMLEasycreditExpressButtonSingleElement;
    };
    interface HTMLEasycreditFaqElement extends Components.EasycreditFaq, HTMLStencilElement {
    }
    var HTMLEasycreditFaqElement: {
        prototype: HTMLEasycreditFaqElement;
        new (): HTMLEasycreditFaqElement;
    };
    interface HTMLEasycreditInfopageElement extends Components.EasycreditInfopage, HTMLStencilElement {
    }
    var HTMLEasycreditInfopageElement: {
        prototype: HTMLEasycreditInfopageElement;
        new (): HTMLEasycreditInfopageElement;
    };
    interface HTMLEasycreditLogoElement extends Components.EasycreditLogo, HTMLStencilElement {
    }
    var HTMLEasycreditLogoElement: {
        prototype: HTMLEasycreditLogoElement;
        new (): HTMLEasycreditLogoElement;
    };
    interface HTMLEasycreditMerchantManagerElement extends Components.EasycreditMerchantManager, HTMLStencilElement {
    }
    var HTMLEasycreditMerchantManagerElement: {
        prototype: HTMLEasycreditMerchantManagerElement;
        new (): HTMLEasycreditMerchantManagerElement;
    };
    interface HTMLEasycreditMerchantStatusWidgetElement extends Components.EasycreditMerchantStatusWidget, HTMLStencilElement {
    }
    var HTMLEasycreditMerchantStatusWidgetElement: {
        prototype: HTMLEasycreditMerchantStatusWidgetElement;
        new (): HTMLEasycreditMerchantStatusWidgetElement;
    };
    interface HTMLEasycreditModalElementEventMap {
        "modalOpened": any;
        "modalClosed": any;
        "modalSubmit": any;
    }
    interface HTMLEasycreditModalElement extends Components.EasycreditModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLEasycreditModalElementEventMap>(type: K, listener: (this: HTMLEasycreditModalElement, ev: EasycreditModalCustomEvent<HTMLEasycreditModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLEasycreditModalElementEventMap>(type: K, listener: (this: HTMLEasycreditModalElement, ev: EasycreditModalCustomEvent<HTMLEasycreditModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLEasycreditModalElement: {
        prototype: HTMLEasycreditModalElement;
        new (): HTMLEasycreditModalElement;
    };
    interface HTMLEasycreditWidgetElement extends Components.EasycreditWidget, HTMLStencilElement {
    }
    var HTMLEasycreditWidgetElement: {
        prototype: HTMLEasycreditWidgetElement;
        new (): HTMLEasycreditWidgetElement;
    };
    interface HTMLElementTagNameMap {
        "easycredit-accordion": HTMLEasycreditAccordionElement;
        "easycredit-accordion-item": HTMLEasycreditAccordionItemElement;
        "easycredit-base": HTMLEasycreditBaseElement;
        "easycredit-box-flash": HTMLEasycreditBoxFlashElement;
        "easycredit-box-listing": HTMLEasycreditBoxListingElement;
        "easycredit-box-modal": HTMLEasycreditBoxModalElement;
        "easycredit-box-top": HTMLEasycreditBoxTopElement;
        "easycredit-checkout": HTMLEasycreditCheckoutElement;
        "easycredit-checkout-bill-payment-timeline": HTMLEasycreditCheckoutBillPaymentTimelineElement;
        "easycredit-checkout-installments": HTMLEasycreditCheckoutInstallmentsElement;
        "easycredit-checkout-label": HTMLEasycreditCheckoutLabelElement;
        "easycredit-checkout-privacy-approval": HTMLEasycreditCheckoutPrivacyApprovalElement;
        "easycredit-checkout-totals": HTMLEasycreditCheckoutTotalsElement;
        "easycredit-express-button": HTMLEasycreditExpressButtonElement;
        "easycredit-express-button-single": HTMLEasycreditExpressButtonSingleElement;
        "easycredit-faq": HTMLEasycreditFaqElement;
        "easycredit-infopage": HTMLEasycreditInfopageElement;
        "easycredit-logo": HTMLEasycreditLogoElement;
        "easycredit-merchant-manager": HTMLEasycreditMerchantManagerElement;
        "easycredit-merchant-status-widget": HTMLEasycreditMerchantStatusWidgetElement;
        "easycredit-modal": HTMLEasycreditModalElement;
        "easycredit-widget": HTMLEasycreditWidgetElement;
    }
}
declare namespace LocalJSX {
    interface EasycreditAccordion {
    }
    interface EasycreditAccordionItem {
        /**
          * index of accordion item from top to bottom
         */
        "index"?: number;
        /**
          * The mutation observer config to listen for content changes in the accordion item
         */
        "mutationObserverConfig"?: { childList: boolean; subtree: boolean; };
        /**
          * triggered when the content of the accordion item changes
         */
        "onContentChanged"?: (event: EasycreditAccordionItemCustomEvent<any>) => void;
        /**
          * triggered when the accordion item is opened
         */
        "onOpenEvent"?: (event: EasycreditAccordionItemCustomEvent<any>) => void;
        /**
          * accordion item is open or opening (css transition)
         */
        "open"?: boolean;
    }
    interface EasycreditBase {
    }
    interface EasycreditBoxFlash {
        "isOpen"?: boolean;
        "src"?: string;
    }
    interface EasycreditBoxListing {
        "src"?: string;
    }
    interface EasycreditBoxModal {
        "delay"?: number;
        "isOpen"?: boolean;
        "snoozeFor"?: number;
        "src"?: string;
    }
    interface EasycreditBoxTop {
    }
    interface EasycreditCheckout {
        "alert"?: string;
        "amount"?: number;
        "disableFlexprice"?: boolean;
        "isActive"?: boolean;
        "paymentPlan"?: string;
        "paymentType"?: METHODS;
        "webshopId"?: string;
    }
    interface EasycreditCheckoutBillPaymentTimeline {
    }
    interface EasycreditCheckoutInstallments {
        "installments"?: any;
        "onSelectedInstallment"?: (event: EasycreditCheckoutInstallmentsCustomEvent<string>) => void;
        "rows"?: number;
        "showMoreButtonText"?: string;
    }
    interface EasycreditCheckoutLabel {
        "label"?: string;
        "paymentType"?: METHODS;
        "slogan"?: string;
    }
    interface EasycreditCheckoutPrivacyApproval {
        "webshopId"?: string;
    }
    interface EasycreditCheckoutTotals {
        "amount"?: number;
        "installmentPlans"?: InstallmentPlans;
        "selectedInstallment"?: InstallmentPlan;
    }
    interface EasycreditExpressButton {
        "amount"?: number;
        "fullWidth"?: boolean;
        "paymentTypes"?: string;
        "redirectUrl"?: string;
        "webshopId"?: string;
    }
    interface EasycreditExpressButtonSingle {
        "amount"?: number;
        "bgBlue"?: boolean;
        "fullWidth"?: boolean;
        "onButtonClicked"?: (event: EasycreditExpressButtonSingleCustomEvent<string>) => void;
        "paymentType"?: METHODS;
        "webshopId"?: string;
    }
    interface EasycreditFaq {
        "paymentType"?: string;
    }
    interface EasycreditInfopage {
        "paymentTypes"?: string;
        "variant"?: 'default' | 'enhanced';
    }
    interface EasycreditLogo {
        "alt"?: string;
        "color"?: string;
        "paymentType"?: METHODS;
    }
    interface EasycreditMerchantManager {
        "date"?: string;
        "txId"?: string;
    }
    interface EasycreditMerchantStatusWidget {
        "date"?: string;
        "isManager"?: boolean;
        "txId"?: string;
    }
    interface EasycreditModal {
        "isOpen"?: boolean;
        "loading"?: boolean;
        "loadingMessage"?: string;
        "onModalClosed"?: (event: EasycreditModalCustomEvent<any>) => void;
        "onModalOpened"?: (event: EasycreditModalCustomEvent<any>) => void;
        "onModalSubmit"?: (event: EasycreditModalCustomEvent<any>) => void;
        "show"?: boolean;
        "size"?: string;
    }
    interface EasycreditWidget {
        "amount"?: number;
        "disableFlexprice"?: boolean;
        "displayType"?: string;
        "extended"?: boolean;
        "paymentTypes"?: string;
        "webshopId"?: string;
    }
    interface IntrinsicElements {
        "easycredit-accordion": EasycreditAccordion;
        "easycredit-accordion-item": EasycreditAccordionItem;
        "easycredit-base": EasycreditBase;
        "easycredit-box-flash": EasycreditBoxFlash;
        "easycredit-box-listing": EasycreditBoxListing;
        "easycredit-box-modal": EasycreditBoxModal;
        "easycredit-box-top": EasycreditBoxTop;
        "easycredit-checkout": EasycreditCheckout;
        "easycredit-checkout-bill-payment-timeline": EasycreditCheckoutBillPaymentTimeline;
        "easycredit-checkout-installments": EasycreditCheckoutInstallments;
        "easycredit-checkout-label": EasycreditCheckoutLabel;
        "easycredit-checkout-privacy-approval": EasycreditCheckoutPrivacyApproval;
        "easycredit-checkout-totals": EasycreditCheckoutTotals;
        "easycredit-express-button": EasycreditExpressButton;
        "easycredit-express-button-single": EasycreditExpressButtonSingle;
        "easycredit-faq": EasycreditFaq;
        "easycredit-infopage": EasycreditInfopage;
        "easycredit-logo": EasycreditLogo;
        "easycredit-merchant-manager": EasycreditMerchantManager;
        "easycredit-merchant-status-widget": EasycreditMerchantStatusWidget;
        "easycredit-modal": EasycreditModal;
        "easycredit-widget": EasycreditWidget;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "easycredit-accordion": LocalJSX.EasycreditAccordion & JSXBase.HTMLAttributes<HTMLEasycreditAccordionElement>;
            "easycredit-accordion-item": LocalJSX.EasycreditAccordionItem & JSXBase.HTMLAttributes<HTMLEasycreditAccordionItemElement>;
            "easycredit-base": LocalJSX.EasycreditBase & JSXBase.HTMLAttributes<HTMLEasycreditBaseElement>;
            "easycredit-box-flash": LocalJSX.EasycreditBoxFlash & JSXBase.HTMLAttributes<HTMLEasycreditBoxFlashElement>;
            "easycredit-box-listing": LocalJSX.EasycreditBoxListing & JSXBase.HTMLAttributes<HTMLEasycreditBoxListingElement>;
            "easycredit-box-modal": LocalJSX.EasycreditBoxModal & JSXBase.HTMLAttributes<HTMLEasycreditBoxModalElement>;
            "easycredit-box-top": LocalJSX.EasycreditBoxTop & JSXBase.HTMLAttributes<HTMLEasycreditBoxTopElement>;
            "easycredit-checkout": LocalJSX.EasycreditCheckout & JSXBase.HTMLAttributes<HTMLEasycreditCheckoutElement>;
            "easycredit-checkout-bill-payment-timeline": LocalJSX.EasycreditCheckoutBillPaymentTimeline & JSXBase.HTMLAttributes<HTMLEasycreditCheckoutBillPaymentTimelineElement>;
            "easycredit-checkout-installments": LocalJSX.EasycreditCheckoutInstallments & JSXBase.HTMLAttributes<HTMLEasycreditCheckoutInstallmentsElement>;
            "easycredit-checkout-label": LocalJSX.EasycreditCheckoutLabel & JSXBase.HTMLAttributes<HTMLEasycreditCheckoutLabelElement>;
            "easycredit-checkout-privacy-approval": LocalJSX.EasycreditCheckoutPrivacyApproval & JSXBase.HTMLAttributes<HTMLEasycreditCheckoutPrivacyApprovalElement>;
            "easycredit-checkout-totals": LocalJSX.EasycreditCheckoutTotals & JSXBase.HTMLAttributes<HTMLEasycreditCheckoutTotalsElement>;
            "easycredit-express-button": LocalJSX.EasycreditExpressButton & JSXBase.HTMLAttributes<HTMLEasycreditExpressButtonElement>;
            "easycredit-express-button-single": LocalJSX.EasycreditExpressButtonSingle & JSXBase.HTMLAttributes<HTMLEasycreditExpressButtonSingleElement>;
            "easycredit-faq": LocalJSX.EasycreditFaq & JSXBase.HTMLAttributes<HTMLEasycreditFaqElement>;
            "easycredit-infopage": LocalJSX.EasycreditInfopage & JSXBase.HTMLAttributes<HTMLEasycreditInfopageElement>;
            "easycredit-logo": LocalJSX.EasycreditLogo & JSXBase.HTMLAttributes<HTMLEasycreditLogoElement>;
            "easycredit-merchant-manager": LocalJSX.EasycreditMerchantManager & JSXBase.HTMLAttributes<HTMLEasycreditMerchantManagerElement>;
            "easycredit-merchant-status-widget": LocalJSX.EasycreditMerchantStatusWidget & JSXBase.HTMLAttributes<HTMLEasycreditMerchantStatusWidgetElement>;
            "easycredit-modal": LocalJSX.EasycreditModal & JSXBase.HTMLAttributes<HTMLEasycreditModalElement>;
            "easycredit-widget": LocalJSX.EasycreditWidget & JSXBase.HTMLAttributes<HTMLEasycreditWidgetElement>;
        }
    }
}
