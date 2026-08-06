/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'ai': {
    methods: ["GET","HEAD"],
    pattern: '/ai',
    tokens: [{"old":"/ai","type":0,"val":"ai","end":""}],
    types: placeholder as Registry['ai']['types'],
  },
  'dev': {
    methods: ["GET","HEAD"],
    pattern: '/dev',
    tokens: [{"old":"/dev","type":0,"val":"dev","end":""}],
    types: placeholder as Registry['dev']['types'],
  },
  'multimedia': {
    methods: ["GET","HEAD"],
    pattern: '/multimedia',
    tokens: [{"old":"/multimedia","type":0,"val":"multimedia","end":""}],
    types: placeholder as Registry['multimedia']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
