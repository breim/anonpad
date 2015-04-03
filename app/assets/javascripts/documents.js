jQuery(function() {
  return $('.source-editor').each(function() {
    var container, editDiv, editor, editorArea, mode;
    container = $(this);
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
    editorArea.closest('form').submit(function() {
      editorArea.val(editor.getSession().getValue());
    });
  });
});
