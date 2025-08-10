import type { Meta } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Button',
  component: 'wc-button',
  args: {
    // Nenhum prop neste exemplo, pois só tem slot
  },
  argTypes: {
    // Pode mapear atributos/propriedades aqui se tiver
  },
};

export default meta;

// Template básico
const Template = (args) => {
  // Usamos template string para slot
  return `<wc-button>${args.children || 'Clique aqui'}</wc-button>`;
};

// Exporta uma história padrão
export const Default = Template.bind({});
Default.args = {
  children: 'Clique aqui',
};

// Exemplo com texto diferente
export const WithCustomText = Template.bind({});
WithCustomText.args = {
  children: 'Botão personalizado',
};
