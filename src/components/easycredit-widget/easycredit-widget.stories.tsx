import { buildAttributes } from '../../../.storybook/helpers'

export default {
  title: "Marketing/Widget",
  parameters: {
    docs: {
      description: {
        component:
          "Die Widget-Komponente wird typischerweise auf der Produktdetailseite gezeigt, kann aber auch im Warenkorb oder in der Produktübersicht integriert werden. Sie berechnet die günstigstmögliche Rate mit der ein Produkt mit einem bestimmten Preis finanziert werden kann. Bei Klick auf \"mehr Infos\" öffnet sich der Ratenrechner mit weiteren Details zur Finanzierung. Liegt der Produktpreis außerhalb der möglichen Finanzierungsbeträge weist das Widget auf Wunsch auf den minimal oder maximal möglichen Finanzierungsbetrag hin.",
      }
    }    
  },
  argTypes: {
    webshopId: {
      description: 'die Kennung des Webshops'
    },
    amount: {
      description: 'der zu finanzierende Betrag für den die Rate angezeigt werden soll, üblicherweise der Produktpreis'
    },
    extended: {
      description: 'bestimmt, ob das Widget außerhalb der Betragsgrenzen angezeigt wird (optional)',
      defaultValue: 'false',
      table: {
        category: 'optional',
        defaultValue: { summary: 'true' }
      }
    },
    displayType: {
      description: 'mit dieser Option kann eine alternative Darstellungsvariante gewählt werden',
      control: 'radio',
      options: ['normal', 'clean', 'minimal'],
      table: {
        category: 'optional',
        defaultValue: { summary: 'normal' },
      }
    },
    disableFlexprice: {
      description: 'wenn diese Option gesetzt ist, wird die Zins-Flexibilisierung bei der Berechnung nicht berücksichtigt',
      table: {
        category: 'optional',
        defaultValue: { summary: 'false' },
      }
    }
  }
};

let args = {
  webshopId: '2.de.9999.9999',
  amount: 500,
  extended: true,
  displayType: '',
  disableFlexprice: false
}
const Template = (args) => `<easycredit-widget ${buildAttributes(args).join(' ')} />`;

const TemplateFirst = (args) => {
  return `
  <label>Finanzierungsbetrag:</label>
  <input type="number" onKeyup="this.parentElement.querySelector('easycredit-widget').setAttribute('amount', this.value);" />
  <br /><br />

  ` + Template(args)
}

export const WidgetNormal = TemplateFirst.bind({});
WidgetNormal.storyName = 'Standard'
WidgetNormal.args = args

export const WidgetBelow = Template.bind({});
WidgetBelow.storyName = 'unterhalb Betragsgrenze (99 EUR)'
WidgetBelow.args = { ... args, ... {
  amount: 99
}}

export const WidgetAbove = Template.bind({});
WidgetAbove.storyName = 'oberhalb Betragsgrenze (12.000 EUR)'
WidgetAbove.args = { ... args, ... {
  amount: 12000
}}

export const WidgetExtended = Template.bind({});
WidgetExtended.storyName = 'außerhalb Betragsgrenze, nicht anzeigen'
WidgetExtended.args = { ... args, ... {
  amount: 12000,
  extended: false
}}

export const WidgetDisplayTypeClean = Template.bind({});
WidgetDisplayTypeClean.storyName = 'alternative Darstellungsvariante, displayType: clean'
WidgetDisplayTypeClean.args = { ... args, ... {
  amount: 500,
  displayType: 'clean'
}}

export const WidgetDisplayTypeMinimal = Template.bind({});
WidgetDisplayTypeMinimal.storyName = 'alternative Darstellungsvariante, displayType: minimal'
WidgetDisplayTypeMinimal.args = { ... args, ... {
  amount: 500,
  displayType: 'minimal'
}}

export const WidgetWithoutFlexprice = Template.bind({});
WidgetWithoutFlexprice.storyName = 'Berechnung ohne Zins-Flex'
WidgetWithoutFlexprice.args = { ... args, ... {
  amount: 500,
  disableFlexprice: true
}}
