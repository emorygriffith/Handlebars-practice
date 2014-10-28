var data = {
  bands: [

  { song: 'Ten Thousand Miles', band: 'Vanessa Carlton' },
  { song: 'Yesterday', band: 'The Beatles' }
  ]
};

var rendered = Handlebars.templates['songs'];


$('.songs li').append(rendered(data));
