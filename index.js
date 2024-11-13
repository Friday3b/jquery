



$(document).ready(function() {
    const sections = [
      { title: "Section 1", 
        content: "S1 ll be " },

      { title: "Section 2", 
        content: "S2 ll be" },

      { title: "Section 3", 
        content: "S3 ll  be" }
    ];

   
    sections.forEach(section => {
      const button = $('<button></button>')
        .addClass('accordion')
        .text(section.title);
      

      const panel = $('<div></div>')
        .addClass('panel')
        .append($('<p></p>').text(section.content));
      

      $('body').append(button).append(panel);
    });


    $(document).on("click", ".accordion", function() {

      $(this).next(".panel").slideToggle();
      
      $(".panel").not($(this).next(".panel")).slideUp();
    });
  });

