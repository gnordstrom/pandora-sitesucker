$(function(){

    var mobileLayout
        url = window.location.pathname, //get current page filename, we need it for menu selections
        currentPage = url.substring(url.lastIndexOf('/')+1);

        $('.fullBleedImageMask').eq(0).children('img').css('marginTop','85px');
        //first spread doesn't need negative margin to cover gap, so remove it to make images smaller
        //$('.fullBleed.image').eq(0).css('marginTop','-3px');
        if (!mobileLayout) {
          if ($.fn.stellar) {
            $.stellar({
              horizontalScrolling: false,
              verticalScrolling: true,
              horizontalOffset: 0,
              verticalOffset: 81, //height of mbl_navBarIcon
              responsive: true,
              scrollProperty: 'scroll',
              positionProperty: 'transform',
              parallaxBackgrounds: false,
              parallaxElements: true,
              hideDistantElements: false
            });
          }
        }
        else {
          $('.fullBleed').eq(0).css('margin-top','25px');
        }
}); //doc ready


animateScroll = function(section, page) {
  var url = window.location.pathname, //get current page filename, we need it for menu selections
      currentPage = url.substring(url.lastIndexOf('/')+1);
  //if on same page as dropdown menu, scroll to content
    $('html, body').stop().animate({
      scrollTop: $(section).offset().top
    }, 1000,'easeInOutCubic', function() {
      //on complete, add section hashtag
      location.hash = section;
    });
    //prevent href from jumping right to the anchor
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
}


var resizedWin = true;
  function setImgSize() {
    if ($('#mbl_menuIcon').is(':visible') && !isMobile && !isTablet && resizedWin) {

      $('.fullBleedImageMask img:gt(0)').each(function() {
        var fullBleedImgMbl = $(this).attr('src').replace(/\.jpg/, '_mbl.jpg');
        $(this).attr("src", fullBleedImgMbl);
      });

      $('.fullBleedImageText:gt(0)').each(function() {
        var imgText = $(this);
        imgText.parent().after(imgText);
      });
      resizedWin=false;
    } else if ($('#mbl_menuIcon').is(':hidden') && !resizedWin) {

      $('.fullBleedImageMask img:gt(0)').each(function() {
        var fullBleedImgWeb = $(this).attr('src').replace(/\_mbl.jpg/, '.jpg');
        $(this).attr("src", fullBleedImgWeb);
      });

      $('.fullBleedImageText:gt(0)').each(function() {
        var imgText = $(this);
        imgText.appendTo(imgText.prev());
      });

      $('.fullBleedImageMask:gt(0)').each(function() {
        $(this).css('top', '200px');
      });

      resizedWin=true;
    }

  }
$(document).ready(function(){
  $('.iconBtn').hover(function(){
    $('.iconBtn #video').toggleClass('over');
    $('.iconBtn #twitter').toggleClass('over');
  })

    $('#mbl_menuIcon').click(function(){
        $('#navBarContainer').toggleClass('active');
    });

  var ua = navigator.userAgent.toLowerCase();
  isMobile = ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1 || ua.indexOf('iphone') > -1; //mobile is in ua string on android mobile devices, not android tablets
  isTablet = ua.indexOf('ipad') > -1 || ua.indexOf('android') > -1;
  var topNavH = window.innerHeight*0.75;

  if (isMobile || isTablet) {

     if (window.innerHeight > window.innerWidth) {
      $('#main .fullBleedImageMask').css('height', window.innerHeight-82);
    } else if (window.innerHeight < window.innerWidth){
      $('#main .fullBleedImageMask').css('height', window.innerHeight+81);
    }
    setImgSize();
    $('#navBarContainer').css('height', topNavH);
    $('#topNav li').css('height',((topNavH/6)-1));
    var h = $('#topNav li').height();
    $('#topNav li a').css('lineHeight', h+'px');


    $('.msgBold').css('display','block');

    $('.webSmOnly').each(function() {
        $(this).hide();
    });
  }

  if (isMobile)
    thisFile = $('.playVideo').attr('data-cell');
  else
    thisFile = $('.playVideo').attr('data-wifi');


  $('.playVideo').click(function(){

    if (isMobile)
      thisFile = $(this).attr('data-cell');
    else
      thisFile = $(this).attr('data-wifi');


    $('#videoShadowBox').fadeIn();
    $('#videoPlayerContainer').removeClass('hide');

  $('#videoPlayer').jPlayer('setMedia', {
      m4v: '//www.pandora.com/radio/util/mediaserverPublicRedirect.jsp?file='+thisFile
    }).jPlayer('play');
    //create video player
    $('#videoPlayer').jPlayer({
      ready: function () {
        console.log('video player is ready');
        $(this).jPlayer("setMedia", {
          m4v: '//www.pandora.com/radio/util/mediaserverPublicRedirect.jsp?file='+thisFile
        }).jPlayer('play');
      },
      swfPath: '//www.pandora.com/static/ads/mip/splash/js',
      solution: 'html, flash',
      supplied: 'm4v',
      wmode: 'window',
      cssSelectorAncestor: '#videoControls',
      errorAlerts: false,
      size: {
        width: playerWidth+'px',
        height: playerHeight+'px',
        cssClass: 'jp-video-360p'
      }
    });
  });

  $(window).resize(function(){
    setPlayerSize();
    setImgSize();
    setMainImg();
  });
  setPlayerSize();
  setMainImg();
  setTextImg();

  function setMainImg() {
    if ($(window).innerWidth() <= 480) {
      $('#main .fullBleedImageMask img').attr("src", '//www.pandora.com/static/ads/mip/splash/img/main_mbl.jpg');
    } else if ($(window).innerWidth() <= 1265) {
      $('#main .fullBleedImageMask img').attr("src", '//www.pandora.com/static/ads/mip/splash/img/main_tbl.jpg');
    } else {
      $('#main .fullBleedImageMask img').attr("src", '//www.pandora.com/static/ads/mip/splash/img/main.jpg');
    }
  }

  function setTextImg() {
    if ($('#mbl_menuIcon').is(':visible') && resizedWin) {
      $('.fullBleedImageMask img:gt(0)').each(function() {
        var fullBleedImgMbl = $(this).attr('src').replace(/\.jpg/, '_mbl.jpg');
        $(this).attr("src", fullBleedImgMbl);
      });
      $('.fullBleedImageText:gt(0)').each(function() {
        var imgText = $(this);
        imgText.parent().after(imgText);
      });
      resizedWin=false;
    } else {
      resizedWin=true;
    }
  }

  //close video player
  $('.close, #videoShadowBox').on('click', function(){
    $('#videoPlayer').jPlayer('pause');
    $('#videoShadowBox').fadeOut();
    $('#videoPlayerContainer').addClass('hide');
  });


  $('#videoPlayer').bind($.jPlayer.event.loadedmetadata, function(event) {
    console.log('video loaded');
    this.video1 = false
    this.video25 = false
    this.video50 = false
    this.video75 = false
    this.video99 = false
  });


  $('#videoPlayer').bind($.jPlayer.event.timeupdate, function(event) {

    videoPercent = Math.ceil(event.jPlayer.status.currentPercentAbsolute)

      if (videoPercent >= 1 && !this.video1) {
        console.log(thisFile + '  Video Started');
        this.video1 = true
        _gaq.push(['_trackEvent', 'Video Player', thisFile, 'Video Started']);
      }
      if (videoPercent >= 25 && !this.video25) {
        console.log(thisFile + '  Video 25');
        this.video25 = true
        _gaq.push(['_trackEvent', 'Video Player', thisFile, '25% Done']);
      }
      if (videoPercent >= 50 && !this.video50) {
        console.log(thisFile + '  Video 50');
        this.video50 = true
        _gaq.push(['_trackEvent', 'Video Player', thisFile, '50% Done']);
      }
      if (videoPercent >= 75 && !this.video75) {
        console.log(thisFile + '  Video 75');
        this.video75 = true
        _gaq.push(['_trackEvent', 'Video Player', thisFile, '75% Done']);
      }
      if (videoPercent >= 99 && !this.video99) {
        console.log(thisFile + '  Video Completed');
        this.video99 = true
        _gaq.push(['_trackEvent', 'Video Player', thisFile, 'Video Completed']);
      }
  });

  $('#videoPlayer').bind($.jPlayer.event.ended, function(event) {
    this.video1 = false
    this.video25 = false
    this.video50 = false
    this.video75 = false
    this.video99 = false

    $('#videoShadowBox').fadeOut();
    $('#videoPlayerContainer').addClass('hide');
  });

});

function loadVideo(thisVideo) {

  $('#videoShadowBox').fadeIn();
  $('#videoPlayerContainer').removeClass('hide');

  $('#videoPlayer').jPlayer('setMedia', {
    m4v: thisVideo
  }).jPlayer('play');

}

function setPlayerSize() {

  playerWidth = $(window).width()*0.62;
  playerHeight = Math.floor(playerWidth*0.561);

  $('#jp_video_0').css({
    'width': playerWidth+'px',
    'height': playerHeight+'px'
  })

  if (isMobile) {
    $('#videoPlayerContainer').css({
      'width': playerWidth+'px',
      'height': 'auto',
      'marginLeft': -playerWidth/2+'px',
      'marginTop': -playerHeight/2+'px',
      'top':'50%',
      'left':'50%'
    })
  } else {
    $('#videoPlayerContainer').css({
      'width': playerWidth+'px',
      'height': (playerHeight)+'px',
      'marginLeft': -playerWidth/2+'px',
      'marginTop': -playerHeight/2+'px',
      'top':'50%',
      'left':'50%'
    })

  }
}
