$(() => {

  $('body').on('click', '.y', (() => {
    $('.about').removeClass('hidden');
    $('.first-name').addClass('hidden');
    $('.nav').addClass('hidden')
  }))

  $('body').on('click', '.u1', (() => {
    $('.projects').removeClass('hidden');
    $('.first-name').addClass('hidden')
    $('.nav').addClass('hidden')
  }))

  $('body').on('click', '.u2', (() => {
    $('.contact').removeClass('hidden');
    $('.first-name').addClass('hidden')
    $('.nav').addClass('hidden')
  }))

  $('body').on('click', '.last-name', (() => {
    $('.first-name').removeClass('hidden');
    $('.about').addClass('hidden');
    $('.projects').addClass('hidden');
    $('.contact').addClass('hidden');
    $('.nav').removeClass('hidden')
  }))

  $('body').on('submit', 'form', (e) => {
    e.preventDefault();
    alert('Submitted')
  })

})
