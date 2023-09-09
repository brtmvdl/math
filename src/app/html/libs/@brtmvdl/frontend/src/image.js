import { Frontend } from './frontend.js'

export class nImage extends Frontend {
  getName() {
    return 'image'
  }

  getTagName() {
    return 'img'
  }

  onCreate() {
    this.setStyles()
    return this
  }

  setStyles() {
    this.setStyle('width', '100%')
  }

  src(value = '') {
    this.element.src = value
    return this
  }

  alt(value = '') {
    this.element.alt = value
    return this
  }
}
