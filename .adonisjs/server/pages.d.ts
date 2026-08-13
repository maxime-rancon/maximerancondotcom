import '@adonisjs/inertia/types'

import type React from 'react'
import type { Prettify } from '@adonisjs/core/types/common'

type ExtractProps<T> =
  T extends React.FC<infer Props>
    ? Prettify<Omit<Props, 'children'>>
    : T extends React.Component<infer Props>
      ? Prettify<Omit<Props, 'children'>>
      : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'ai': ExtractProps<(typeof import('../../inertia/pages/ai.tsx'))['default']>
    'automation': ExtractProps<(typeof import('../../inertia/pages/automation.tsx'))['default']>
    'dev': ExtractProps<(typeof import('../../inertia/pages/dev.tsx'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
    'video': ExtractProps<(typeof import('../../inertia/pages/video.tsx'))['default']>
  }
}
