let burger = document.getElementById("burger-button");
let burgerList = document.querySelector(".burger__menu");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
  burgerList.classList.toggle("d-block");
  
});

$('#headingOne').click(function(){
  if ($('#headingOne').hasClass('active-question')){
      $(".card-header").removeClass("active-question")
      $("#plus-icon1").text("+")
  } else {
      $(".card-header").removeClass("active-question")
      $("#headingOne").addClass("active-question")
      $(".plus-icon").text("+")
      $("#plus-icon1").text("—")
  }
});

$('#headingTwo').click(function(){
  if ($('#headingTwo').hasClass('active-question')){
      $(".card-header").removeClass("active-question")
      $("#plus-icon2").text("+")
  } else {
      $(".card-header").removeClass("active-question")
      $("#headingTwo").addClass("active-question")
      $(".plus-icon").text("+")
      $("#plus-icon2").text("—")
  }
});

$('#headingThree').click(function(){
  if ($('#headingThree').hasClass('active-question')){
      $(".card-header").removeClass("active-question")
      $("#plus-icon3").text("+")
  } else {
      $(".card-header").removeClass("active-question")
      $("#headingThree").addClass("active-question")
      $(".plus-icon").text("+")
      $("#plus-icon3").text("—")
  }
});

$('#headingFour').click(function(){
  if ($('#headingFour').hasClass('active-question')){
      $(".card-header").removeClass("active-question")
      $("#plus-icon4").text("+")
  } else {
      $(".card-header").removeClass("active-question")
      $("#headingFour").addClass("active-question")
      $(".plus-icon").text("+")
      $("#plus-icon4").text("—")
  }
});

$('#headingFive').click(function(){
  if ($('#headingFive').hasClass('active-question')){
      $(".card-header").removeClass("active-question")
      $("#plus-icon5").text("+")
  } else {
      $(".card-header").removeClass("active-question")
      $("#headingFive").addClass("active-question")
      $(".plus-icon").text("+")
      $("#plus-icon5").text("—")
  }
});

$('#headingSix').click(function(){
  if ($('#headingSix').hasClass('active-question')){
      $(".card-header").removeClass("active-question")
      $("#plus-icon6").text("+")
  } else {
      $(".card-header").removeClass("active-question")
      $("#headingSix").addClass("active-question")
      $(".plus-icon").text("+")
      $("#plus-icon6").text("—")
  }
});