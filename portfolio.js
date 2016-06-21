function scrollNav(ev){
  var stateObj = { foo: "bar" };
  var window_size = window.innerHeight;
  var profileHeight = document.getElementById("profile").clientHeight;
  var skillsHeight = document.getElementById("skills").clientHeight;
  var projectsHeight = document.getElementById("projects").clientHeight;
  var logosHeight = document.getElementById("logos").clientHeight;
  var contactHeight = document.getElementById("contact").clientHeight;

  if(window.pageYOffset > window_size + profileHeight + skillsHeight + projectsHeight) {
    window.history.pushState(stateObj, "contact", "#/contact");
  } else if(window.pageYOffset > window_size + profileHeight + skillsHeight) {
    window.history.pushState(stateObj, "projects", "#/projects");
  } else if(window.pageYOffset > window_size + profileHeight) {
    window.history.pushState(stateObj, "skills", "#/skills");
  } else if (window.pageYOffset > window_size) {
    window.history.pushState(stateObj, "profile", "#/profile");
  } else if (window.pageYOffset > window_size) {
    window.history.pushState(stateObj, "logos", "#/logo");
  }

};

window.onscroll = scrollNav;



$('a[href*=#]').on('click', function(event){
event.preventDefault();

if( $( $.attr(this, 'href') ).length > 0 ){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top}, 400);
}
return false;
});
