import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'ai': { paramsTuple?: []; params?: {} }
    'dev': { paramsTuple?: []; params?: {} }
    'multimedia': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'ai': { paramsTuple?: []; params?: {} }
    'dev': { paramsTuple?: []; params?: {} }
    'multimedia': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'ai': { paramsTuple?: []; params?: {} }
    'dev': { paramsTuple?: []; params?: {} }
    'multimedia': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}