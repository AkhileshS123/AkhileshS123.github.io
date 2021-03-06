$('[data-toggle="collapse"]').on('click', function() {
  var $this = $(this), $parent = typeof $this.data('parent')!== 'undefined' ? $($this.data('parent')) : undefined;
  if($parent === undefined) {
      $this.find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
      return true;
  }
  var currentIcon = $this.find('.glyphicon');
  currentIcon.toggleClass('glyphicon-plus glyphicon-minus');
  $parent.find('.glyphicon').not(currentIcon).removeClass('glyphicon-minus').addClass('glyphicon-plus');
});
