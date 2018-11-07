import { app, BrowserWindow } from 'electron'
import * as elemon from 'elemon'

let mainWindow: any = null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    height: 600,
    resizable: false,
    width: 880,
  })

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('ready-to-show', (): void => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}


app.on('ready', () => {
  createWindow()

  elemon({
    app,
    mainFile: 'main.js',
  })
})

app.on('window-all-closed', (): void => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', (): void => {
  if (mainWindow === null) {
    createWindow()
  }
})
