// eslint-disable-next-line node/no-unpublished-import
import {MenuItemConstructorOptions} from 'electron';

export const newTemplate = (): MenuItemConstructorOptions[] => {
  const template: MenuItemConstructorOptions[] = [
    {
      role: 'fileMenu',
      submenu: [
        {
          role: 'close',
        },
      ],
    },
    {
      role: 'editMenu',
      submenu: [
        {
          role: 'undo',
        },
        {
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          role: 'cut',
        },
        {
          role: 'copy',
        },
        {
          role: 'paste',
        },
        {
          role: 'pasteAndMatchStyle',
        },
        {
          role: 'delete',
        },
        {
          role: 'selectAll',
        },
        {
          type: 'separator',
        },
        {
          label: 'Substitutions',
          submenu: [
            {
              role: 'showSubstitutions',
            },
            {
              type: 'separator',
            },
            {
              role: 'toggleSmartQuotes',
            },
            {
              role: 'toggleSmartDashes',
            },
            {
              role: 'toggleTextReplacement',
            },
          ],
        },
        {
          label: 'Speech',
          submenu: [
            {
              role: 'startSpeaking',
            },
            {
              role: 'stopSpeaking',
            },
          ],
        },
      ],
    },
    {
      role: 'viewMenu',
      submenu: [
        {
          role: 'reload',
        },
        {
          role: 'forceReload',
        },
        {
          role: 'toggleDevTools',
        },
        {
          type: 'separator',
        },
        {
          role: 'resetZoom',
        },
        {
          role: 'zoomIn',
        },
        {
          role: 'zoomOut',
        },
        {
          type: 'separator',
        },
        {
          role: 'togglefullscreen',
        },
      ],
    },
    {
      role: 'windowMenu',
      submenu: [
        {
          role: 'minimize',
        },
        {
          role: 'zoom',
        },
        {
          type: 'separator',
        },
        {
          role: 'front',
        },
      ],
    },
    {
      role: 'help',
    },
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      role: 'appMenu',
      submenu: [
        {
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          role: 'services',
        },
        {
          type: 'separator',
        },
        {
          role: 'hide',
        },
        {
          role: 'hideOthers',
        },
        {
          role: 'unhide',
        },
        {
          type: 'separator',
        },
        {
          role: 'quit',
        },
      ],
    });
  }

  return template;
};
