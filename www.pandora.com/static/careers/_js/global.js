$(function(){

    var jobviteData,
        mobileLayout,
        jobFeedURL = 'https://pandora.com/static/careers/jobvite.js',
        url = window.location.pathname, //get current page filename, we need it for menu selections
        currentPage = url.substring(url.lastIndexOf('/')+1);


        init(jobFeedURL, currentPage) //run application
}); //doc ready


init = function(jobFeedURL, currentPage){
  if (typeof getJobInfo == 'function') {
    getJobInfo(jobFeedURL);
  }
  eventListeners();
  checkConsole();
}


checkConsole = function(){
  //if console is undefined (IE), make it an empty object so it wont fail
  if (typeof console === "undefined" || typeof console.log === "undefined") {
    console = {};
    console.log = function() {};
  }
}

eventListeners = function () {
  //select filter to sort jobs
  if($('.sortButton').length){
    $('.sortButton').on('click', function () {
      $('.sortButton').removeClass('active');
      $(this).addClass('active');
      var thisFilter = $(this).attr('data-filter');
      sortJobOpenings(jobviteData, thisFilter);
    });
  }

}
successfulAjaxCall = function(json) {
  jobviteData = json
}
