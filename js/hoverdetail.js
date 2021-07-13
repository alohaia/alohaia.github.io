document.addEventListener('DOMContentLoaded', () => {
  $('a').each(function(){
    var href = $(this).attr('href');
    if(href && href[0] == '/'){
      $(this).mouseenter(function(){
        var hover_detail=document.createElement("div");
        hover_detail.classList = 'hover-detail';
        $('div.main-inner').append(hover_detail);

        $.get(href, function(data){
          // hover_detail.innerHTML = data;
          // hover_detail.innerHTML = $('div.hover-detail').find('div.main-inner');
        });
        console.log(hover_detail.innerHTML);

        console.log('enter');
      });
      $(this).mouseleave(function(){
        $('div.hover-detail').remove();
        console.log('leave');
      });
    };
  });
});

