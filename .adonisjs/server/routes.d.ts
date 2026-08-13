import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'video': { paramsTuple?: []; params?: {} }
    'dev': { paramsTuple?: []; params?: {} }
    'automation': { paramsTuple?: []; params?: {} }
    'ai': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'video': { paramsTuple?: []; params?: {} }
    'dev': { paramsTuple?: []; params?: {} }
    'automation': { paramsTuple?: []; params?: {} }
    'ai': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'video': { paramsTuple?: []; params?: {} }
    'dev': { paramsTuple?: []; params?: {} }
    'automation': { paramsTuple?: []; params?: {} }
    'ai': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}