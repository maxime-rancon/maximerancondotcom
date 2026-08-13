/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  video: typeof routes['video']
  dev: typeof routes['dev']
  automation: typeof routes['automation']
  ai: typeof routes['ai']
}
