/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

//import { middleware } from '#start/kernel'
//import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')
router.on('/video').renderInertia('video', {}).as('video')
router.on('/dev').renderInertia('dev', {}).as('dev')
router.on('/automation').renderInertia('automation', {}).as('automation')
router.on('/ai').renderInertia('ai', {}).as('ai')
