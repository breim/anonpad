jQuery(function() {
  return $('.source-editor').each(function() {
    var container, editDiv, editor, editorArea, mode, selectMode;
    container = $(this);
    selectMode = $('.source-mode')
    mode = container.data('mode');
    editorArea = container.find('textarea');
    editDiv = $('<div>', {
      position: 'absolute',
      width: editorArea.width(),
      height: editorArea.height(),
      'class': editorArea.attr('class')
    }).insertBefore(editorArea);

    editorArea.css('display', 'none');
    editor = ace.edit(editDiv[0]);
    editor.setFontSize('14px');
    editor.getSession().setMode('ace/mode/' + mode);
    editor.getSession().setValue(editorArea.val());
    editor.setTheme("ace/theme/ambiance");
    editorArea.closest('form').submit(function() {
      editorArea.val(editor.getSession().getValue());
    });

    selectMode.on('change', function(e){
      console.log('changed');
      editor.getSession().setMode('ace/mode/' + $(this).val());
      $('#document_editor_session').val($(this).val())
    })
  });
});
