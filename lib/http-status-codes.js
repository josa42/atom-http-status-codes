'use babel'

import HttpStatusCodesView from './http-status-codes-view'

module.exports = {

  httpStatusCodesView: null,

  activate (state) {
    atom.commands.add('atom-workspace', 'http-status-codes:show', () => {
      this.httpStatusCodesView = this.httpStatusCodesView || new HttpStatusCodesView()
      this.httpStatusCodesView.show()
    })
  }
}
