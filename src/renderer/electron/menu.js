
// Modules
const {remote, shell} = require('electron')

// Menu template
const template = [
  {
    label: 'Equipo',
    submenu: [
      {
        label: 'Add New 1',
        click: window.newItem,
        accelerator: 'CmdOrCtrl+O'
      }, {
        label: 'Add New 2',
        click: () => { window.newItem() },
        accelerator: 'CmdOrCtrl+O'
      }
    ]
  },
  {
    label: 'Ayuda',
    submenu: [
      {
        label: 'Aplicación',
        click: () => { shell.openExternal('https://devinventario.ecuatask.com/') }
      }
    ]
  }
]

// Set Mac-specific first menu item
if (process.platform === 'darwin') {
  template.unshift({
    label: remote.app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { role: 'quit' }
    ]
  })
}

// Build menu
const menu = remote.Menu.buildFromTemplate(template)

// Set as main app menu
remote.Menu.setApplicationMenu(menu)
