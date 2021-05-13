miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Reset',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {

          //miro.board.ui.openModal('createsticker.html', {title: 'アップロード'})

          miro.board.widgets.create({
            type: 'sticker',
            text: 'テスト',
            width: 300,
            height: 200,
          });

        },
      },
    },
  })
})