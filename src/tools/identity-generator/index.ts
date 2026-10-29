import { User } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.identity-generator.title'),
  path: '/identity-generator',
  description: translate('tools.identity-generator.description'),
  keywords: [
    'identity',
    'fake',
    'person',
    'name',
    'username',
    'email',
    'phone',
    'address',
    'random',
    'generator',
    'faker',
  ],
  component: () => import('./identity-generator.vue'),
  icon: User,
  createdAt: new Date('2026-10-29'),
});
