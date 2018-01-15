// La funcionalidad de tu proyecto

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
