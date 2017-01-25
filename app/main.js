var app      = require('electron').app
  , Menu     = require('electron').Menu
  , MenuItem = require('electron').MenuItem
  , BW       = require('electron').BrowserWindow
  , win;


app.on('ready', function() {
  win = new BW({
    'width'  : 800,
    'height' : 500,
    'title'  : 'atom-shell-activitykit'
  });

  win.on('closed', function() {
    win = null;
  });

  win.loadURL('file://' + __dirname + '/index.html');
  win.show();

  var menu_tmpl = [{
    lable: 'Atom Shell',
    submenu: [{
      label: 'reload',
      accelerator: 'Command+R',
      click: function() {
        win.reload();
      }
    }, {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        win.toggleDevTools();
      }
    }]
  }];
  menu = Menu.buildFromTemplate(menu_tmpl);
  Menu.setApplicationMenu(menu);
});
