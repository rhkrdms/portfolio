// 무한글씨슬라이딩
$.each($(".ezkorry-roller"), function(index, item) {
    const wrapper = $("<div />", { class:"ezkorry-roller-wrapper"});
    const roller = $(item);
    roller.append(wrapper);
    const span = roller.find('span').first();
    wrapper.append(span);
    const span_width = span.get(0).offsetWidth;
    const max_width = roller.width() + span_width;
    let inner_width = span_width;
    while(max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
    }
        
    anime({
        targets: wrapper.get(0),
        translateX: {
            value: '-=' + span_width + 'px',
            duration: 2000
        },
        loop: true,
        easing: 'linear'
    });
});

// 타이핑
const typer = new Typewriter('#typing', {
    strings: ['PELENTED', 'PASSION'],
    autoStart: true,
    loop: true,
    pauseFor: 100,
});


$( '#menu a' ).on( 'click', function(e){
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
    }, '300' );
    e.preventDefault();
  
  });
