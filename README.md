# Electron Application Menu Template


## Why?

As far as I can tell, you cannot delete a menu item from existing application menu (You can add new ones though). You cannot change the `click` handling function either (You can change it, but it won't take effect).

So what could you do if you would like to delete an menu item or overwrite the `click` handling function? You need to build a new application menu from scratch. This project provide you with a template so that you can build an application menu quickly.

The template returned should generate application menu identical to the default one provided by an Electron app.


## Install

```
yarn add electron-application-menu-template
```


## Usage

```ts
import {newTemplate} from 'electron-application-menu-template';

const template = newTemplate();

// Optional: make some modifications to the template
const fileMenu = template.find(item => item.label === 'File')!;
(fileMenu.submenu! as MenuItemConstructorOptions[]).unshift(
  {
    label: 'Open',
    accelerator: 'CmdOrCtrl+O',
    async click() {
      // open a file here
    },
  },
  {
    type: 'separator',
  }
);

app.whenReady().then(() => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});
```
