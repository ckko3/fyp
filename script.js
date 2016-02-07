$(document).ready(function() {
  var link;
  var num = Math.floor((Math.random() * 10) + 1);

  switch (num) {
    case 1:
    link = "http://goo.gl/forms/0qwRe2sWDM";
    break;
    case 2:
    link = "http://goo.gl/forms/8LtkexZ9O4";
    break;
    case 3:
    link = "http://goo.gl/forms/VLIJosVAxY";
    break;
    case 4:
    link = "http://goo.gl/forms/xxqS5sw6RQ";
    break;
    case 5:
    link = "http://goo.gl/forms/blJwCsyCml";
    break;
    case 6:
    link = "http://goo.gl/forms/EEYl9ao24n";
    break;
    case 7:
    link = "http://goo.gl/forms/0FQvf9i6Nm";
    break;
    case 8:
    link = "http://goo.gl/forms/v6BdY4HE4K";
    break;
    case 9:
    link = "http://goo.gl/forms/oeL8oGdKMa";
    break;
    case 10:
    link = "http://goo.gl/forms/W3qGzz1sbp";
    break;
  }

  //console.log(num);
  //console.log(link);

  $("button").click(function() {
      $("#intro").css("display", "none");
      $("#survey").css("display", "inline-block");
      $("iframe").attr("src", link);
  });

});
