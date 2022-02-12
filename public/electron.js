const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
// const url = require('url');
const isDev = require('electron-is-dev');
const  ipcMain = electron.ipcMain 
// const  webContents = electron.ipcMain 

let mainWindow;
let formWindow;
let editWindow;
let loadWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 980, 
    height: 600,
    minWidth:980,
    minHeight:700,
    frame:false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });
  formWindow = new BrowserWindow({
    width:400,    
    height: 400,
    minHeight:400,
    minWidth:400,
    frame: false,
    parent: mainWindow,
    show:false,
    backgroundColor:"blue",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });
  editWindow = new BrowserWindow({
    width:400,    
    height: 400,
    minHeight:400,
    minWidth:400,
    frame: false,
    parent: mainWindow,
    show:false,
    backgroundColor:"blue",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });
loadWindow = new BrowserWindow({
    width:600,    
    height: 400,
    minHeight:400,
    minWidth:400,
    frame: false,
    parent: mainWindow,
    show:false,
    backgroundColor:"blue",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
  
  formWindow.loadURL(isDev ? 'http://localhost:3000/form' : `file://${path.join(__dirname, '../build/index.html')}`);
  formWindow.on('close', (e) =>{ 
  e.preventDefault()
  formWindow.hide()
})
  editWindow.loadURL(isDev ? 'http://localhost:3000/edit' : `file://${path.join(__dirname, '../build/index.html')}`);
  editWindow.on('close', (e) =>{ 
  e.preventDefault()
  editWindow.hide()
})
  loadWindow.loadURL(isDev ? 'http://localhost:3000/load' : `file://${path.join(__dirname, '../build/index.html')}`);
  loadWindow.on('close', (e) =>{ 
  e.preventDefault()
  loadWindow.hide()
})
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
ipcMain.on("close",(e)=>{
  // For closing window for creating new data
  e.preventDefault()
 formWindow.hide();
})
ipcMain.on("closed",()=>{
  // For closing window for creating new data
  mainWindow.close()
 
})
// main window
ipcMain.on("minimize",()=>{
  // For closing window for creating new data
  mainWindow.minimize();
 
})
ipcMain.on("maximize",()=>{
  // For closing window for creating new data
  if(mainWindow.isMaximized()){
    mainWindow.restore()
  }else{
    mainWindow.maximize()
  }
 
})
// main window
ipcMain.on("open",(e)=>{
 
  // For open windwo for creating new data
  
  e.preventDefault()
 formWindow.show();
})


ipcMain.on("close-load",(e)=>{
  // For closing endit window
  e.preventDefault()
  loadWindow.hide();
})
ipcMain.on("open-load",(event,arg)=>{
  // reciev data from table show edit window 
  // send the data to edit template
  // and show the window
  
  loadWindow.show();
  
})

ipcMain.on("open-edit",(event,arg)=>{
  // reciev data from table show edit window 
  // send the data to edit template
  // and show the window
  editWindow.webContents.send('data',arg)
  editWindow.show();
  
})
ipcMain.on("close-edit",(e)=>{
  // For closing endit window
  e.preventDefault()
 editWindow.hide();
})
