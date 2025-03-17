$(document).ready(function() {
  // $("#resumeBtn").addClass("active");
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })

  $( "#nav" ).click(function() {
    $("#about").addClass("active");
  });

  const timer = 0;

  resumeTF=true;
  awardTF=true;
  certificateTF=true;
  otherTF=true;  
  
  $('#resumeBtn').click(() => {    
    $("#resume").offset({top:$('#resume').offset().top+(resumeTF?1:0),left:0});
    resumeTF=false;
    // $('html, body').animate({ scrollTop: $('#resume').offset().top }, timer);    
  })
  $('#awardBtn').click(() => {
    $("#award").offset({top:$('#award').offset().top+(awardTF?1:0),left:0});
    awardTF=false;
    // $('html, body').animate({ scrollTop: $('#award').offset().top }, timer);    
  })
  $('#certificateBtn').click(() => {
    $("#certificate").offset({top:$('#certificate').offset().top+(certificateTF?1:0),left:0});
    certificateTF=false;
    // $('html, body').animate({ scrollTop: $('#certificate').offset().top }, timer);    
  })
  $('#otherBtn').click(() => {
    $("#other").offset({top:$('#other').offset().top+(otherTF?1:0),left:0});
    otherTF=false;
    // $('html, body').animate({ scrollTop: $('#other').offset().top }, timer);    
  })

});

$( document ).ready(function() {




  // $( "#resumeBtn" ).click(function() {
  //   $("#awardBtn").removeClass("active");
  //   $("#certificateBtn").removeClass("active");
  //   $("#otherBtn").removeClass("active");
  //   $("#resumeBtn").addClass("active");
  // });

  // $( "#awardBtn" ).click(function() {
  //   $("#resumeBtn").removeClass("active");    
  //   $("#certificateBtn").removeClass("active");
  //   $("#otherBtn").removeClass("active");
  //   $("#awardBtn").addClass("active");
  // });

  // $( "#certificateBtn" ).click(function() {
  //   $("#resumeBtn").removeClass("active");
  //   $("#awardBtn").removeClass("active");    
  //   $("#otherBtn").removeClass("active");
  //   $("#certificateBtn").addClass("active");
  // });

  // $( "#otherBtn" ).click(function() {
  //   $("#resumeBtn").removeClass("active");
  //   $("#awardBtn").removeClass("active");
  //   $("#certificateBtn").removeClass("active");
  //   $("#otherBtn").addClass("active");
  // });
  

});

