// eslint-disable-next-line node/no-unpublished-import
import {app, MenuItemConstructorOptions} from 'electron';

export const newTemplate = (): MenuItemConstructorOptions[] => {
  const template: MenuItemConstructorOptions[] = [
    {
      role: 'fileMenu',
    },
    {
      label: 'Edit',
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
      label: 'View',
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
      label: 'Window',
      role: 'window',
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
    const {name} = app;
    template.unshift({
      label: name,
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
