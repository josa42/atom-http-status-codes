{SelectListView, $} = require 'atom-space-pen-views'

statusCodes = require '../data/status-codes'

module.exports =
class HttpStatusCodesView extends SelectListView

  getFilterKey: -> 'title'

  initialize: (serializeState) ->
    super
    @panel = atom.workspace.addModalPanel(item: this, visible: false)
    @addClass('http-status-codes-view')

  viewForItem: (item) ->
    "<li><strong>#{item.code}</strong> #{item.message}</li>"

  confirmed: (item) ->
    atom.clipboard.write(item.title)
    @cancel()

  populate: ->
    statusCodes.forEach (item) -> item.title = "#{item.code} #{item.message}"
    @setItems(statusCodes)

  show: ->
    @populate()
    @panel.show()
    @focusFilterEditor()

  cancel: ->
    @panel.hide()
