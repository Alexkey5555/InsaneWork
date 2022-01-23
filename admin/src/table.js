import { render } from './modules/render'
import { list } from './modules/list'
import { addRepair } from './modules/addRepair'
import { changeRepairs } from './modules/changeRepairs'

import { Mode } from './modules/mode'

window.mode = new Mode

mode.getRepairs().then(data => {
    render(data)
})

list()
addRepair()
changeRepairs()
