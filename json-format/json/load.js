// create editor 1
const editor1 = new JSONEditor(document.getElementById('jsoneditor1'), {
    onChangeText: function (jsonString) {
        editor2.updateText(jsonString)
    },
    modes: ['code', 'form', 'text', 'tree', 'view', 'preview']
})

// create editor 2
const editor2 = new JSONEditor(document.getElementById('jsoneditor2'), {
    onChangeText: function (jsonString) {
        editor1.updateText(jsonString)
    },
    mode: 'tree',
    modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
})

// set initial data in both editors
const json = {
    'array': [1, 2, 3],
    'boolean': true,
    'null': null,
    'number': 123,
    'object': {'a': 'b', 'c': 'd'},
    'string': 'Hello World'
}
editor1.set(json)
editor2.set(json)
