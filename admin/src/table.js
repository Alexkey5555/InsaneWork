import { render } from './modules/render'
import { list } from './modules/list'
import { addRepair } from './modules/addRepair'

import { Mode } from './modules/mode'

window.mode = new Mode

mode.getRepair().then(data => {
    render(data)
})

list()
addRepair()
