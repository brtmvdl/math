import { Frontend, nLink } from '../index.js'
import { nFlex } from '../styleds/flex.js'

import * as COLORS from '../../src/utils/colors.js'

export class HeaderComponent extends Frontend {
  children = {
    menu: new Frontend(),
    logo: new Frontend(),
    search: new Frontend(),
  }

  onCreate() {
    this.setStyles()
    this.append(this.getFlex())
  }

  setStyles() {
    this.setStyle('background-color', COLORS.BLACK_1)
    this.setStyle('color', COLORS.WHITE_1)
    this.setStyle('margin-bottom', '1rem')
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getMenu())
    flex.append(this.getLogo())
    flex.append(this.getSearch())
    return flex
  }

  getMenu() {
    this.children.menu.on('click', () => this.dispatchEvent('openmenu'))

    this.children.menu.setText('menu')

    this.children.menu.setStyle('padding', '1rem')

    return this.children.menu
  }

  getLogo() {
    const link = new nLink()
    link.href('/')
    link.setText('nElement')
    this.children.logo.append(link)

    this.children.logo.setStyle('padding', '1rem')

    return this.children.logo
  }

  getSearch() {
    this.children.search.on('click', () => this.dispatchEvent('opensearch'))

    this.children.search.setText('search')

    this.children.search.setStyle('padding', '1rem')

    return this.children.search
  }
}
