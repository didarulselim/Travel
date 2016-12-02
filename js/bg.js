$(".background").fadeShow({

// the aspect fill will be intact even when resizing the window
//only handy for full width / height slideshows, otherwise slows your page down
correctRatio: true,

// the slides will be shuffled before shown, get a unique slider each refresh
shuffle: true,

// milliseconds per slide
speed: 10000,

// images (urls) to create the slideshow with, array of strings
images: ['img/bg-1.jpg', 'img/bg-2.jpg','img/bg-3.jpg','img/bg-4.jpg','img/bg-5.jpg']

});
