getJobInfo = function(jobFeedURL)  {
  $.ajax({
    type: 'GET',
    url: jobFeedURL,
    async: false,
    crossDomain: true,
    jsonpCallback: 'jsonCallback',
    contentType: "application/javascript",
    dataType: 'json',
    success: function (json) {
      sortJobOpenings(json, 'category');
      $('.sortButton a').eq(0).addClass('active');
      $('#sortMenu').css('display', 'table');
      jobviteData = json;
    },
    error: function () {
      console.log('error');
    }
  });
}

sortJobOpenings = function(json, filter) {
  $('#allJobsContainer').empty();
  filterVar = filter
  filterArray = []
  $.each(json.jobs, function (i, value) {
    //get the value of JSON key we designated as the filter (ex: 'location')
    var thisFilter = json.jobs[i][filterVar]
    //see if this value has already been added to the array
    var filterCheck = $.inArray(thisFilter, filterArray);
    //if it hasn't, it will return -1 matches. we will then add the value to the filterArray
    if (filterCheck == -1) filterArray.push(thisFilter);
  });
  //alphabetize
  filterArray.sort();


  if (filterVar == 'date') {

    filterArray.reverse();

    //make an array to hold old dates
    var oldDateArray = [];

    //get current year to compare if a date is old or not
    var d = new Date();
    var thisYear = d.getFullYear();

    //get year from each date and push to new array of years
    for (var i = 0; i < filterArray.length; i++) {

      var dateString = filterArray[i];
      var dateYear = dateString.slice(6,10);
          dateYear = parseInt(dateYear);

      if (thisYear != dateYear) {
        //push an old date into the old array
        var thisOldDate = filterArray[i];
        oldDateArray.push(thisOldDate);
      }

    };


    //loop through old dates
    for (var i = 0; i < oldDateArray.length; i++) {

      var thisOldDate = oldDateArray[i];
      var index = filterArray.indexOf(thisOldDate);

      //remove them from the new array
      if (index > -1) {
          filterArray.splice(index, 1);
      }

      //then push the old date into the end of the original array
      filterArray.push(thisOldDate);

    }


  }//now we have a proper chronological date array




  //now that filterArray contains all filter values of the json, drw each category with matching jobs
  $.each(filterArray, function (i, value) {
    var thisFilterValue = filterArray[i];
    var openingsTable = ''
    openingsTable += '<div class="jobBlock ' + filterVar + '">'
    openingsTable += '<h2>' + thisFilterValue + '</h2>'
    openingsTable += '<ul>'
    //loop through json again. if we have a filter and json key match then we draw it onto the page. it will now display in the appropriate category
    $.each(json.jobs, function (i, value) {
      if (json.jobs[i][filterVar] == thisFilterValue) {
        var listing = ''
        listing += '<li>'
        listing += '  <a href="https://pandora.com/careers/position?id=' + json.jobs[i].id + '">'
        listing += '    <div class="jobTitle">' + json.jobs[i].title + '</div>'
        if (filterVar != 'location')
          listing += '    <div class="jobLocation">' + json.jobs[i].location + '</div>'
        listing += '  </a>'
        listing += '</li>'
        openingsTable += listing
      }
    });
    openingsTable += '</ul>'
    openingsTable += '</div>'
    $('#allJobsContainer').append(openingsTable);
  });
} //sortJobOpenings();
