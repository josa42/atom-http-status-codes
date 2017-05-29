'use babel'

import quickSelect from 'atom-quick-select'
import data from '../data/status-codes.json'

module.exports = {

  httpStatusCodesView: null,

  activate (state) {
    atom.commands.add('atom-workspace', 'http-status-codes:show', async () => {
      const item = await quickSelect(data, {
        normalizeItem: ({ code, message }) => ({ label: `<strong>${code}</strong> ${message}` })
      })
      if (item) {
        atom.clipboard.write(item.title)
      }
    })
  }
}
