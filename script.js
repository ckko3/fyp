$(document).ready(function() {
  var link;
  var num = Math.floor((Math.random() * 15) + 1);

  switch (num) {
    case 1:
    link = "https://docs.google.com/forms/d/1qstPK3yP9plXbP-Pv0ZBYi-fLEb8tec_4IKx5wlkeo8/viewform";
    break;
    case 2:
    link = "https://docs.google.com/forms/d/1SOEP51jhck203HWBGzxCq8pFYqriNPj0gPAjpiFZ6V8/viewform";
    break;
    case 3:
    link = "https://docs.google.com/forms/d/1s_Bp0eVkkkISO-G9jwZz3dpIizorP_OLo8fNkALDN9Q/viewform";
    break;
    case 4:
    link = "https://docs.google.com/forms/d/122n3G4lO27y3Dj4nJTx2Zz7CDffeZV5GKZjk-mvwWv4/viewform";
    break;
    case 5:
    link = "https://docs.google.com/forms/d/1oBqiNkDwMVzz71TLXH0yW__kgxJ9c-srBc-D4ARrX4w/viewform";
    break;
    case 6:
    link = "https://docs.google.com/forms/d/1jurlOQwhpC7WU0GQYs4oNr4ob39kh7Ngw_RwTvKT1mg/viewform";
    break;
    case 7:
    link = "https://docs.google.com/forms/d/1UGmXp4zrVd8lNGgTWeoA1l6GgTt5toWrEWoJNWP3Xyw/viewform";
    break;
    case 8:
    link = "https://docs.google.com/forms/d/1h0A6mUf5H-BRNAMxTQB4A3ZgHj46Vf4JqVF6uHDjxbM/viewform";
    break;
    case 9:
    link = "https://docs.google.com/forms/d/1yTPRJzsZVRqn0LJEFElb_kVft7bTBxqSQM5pVi7XjJU/viewform";
    break;
    case 10:
    link = "https://docs.google.com/forms/d/1VYVWhn8s3W0hNgxDZmXqeGKE3ybOZXr-ymJojfLL8kU/viewform";
    break;
    case 11:
    link = "https://docs.google.com/forms/d/1w5DIWlopDS9J34syLk4pievCdZGDgKnS8h1Lu_PQNr4/viewform";
    break;
    case 12:
    link = "https://docs.google.com/forms/d/1GygqnvYG7ixIz-CcHAqbEWYuGfdiO4vePqERAbBeqO8/viewform";
    break;
    case 13:
    link = "https://docs.google.com/forms/d/1h0zj_UQX1O0kjnYbdmi9qbnhvPROITyvqTond7DxzP8/viewform";
    break;
    case 14:
    link = "https://docs.google.com/forms/d/1Z1hViVbBcz5-dBwP9wcRjFWskaw924HdToazhcv4QtY/viewform";
    break;
    case 15:
    link = "https://docs.google.com/forms/d/1VBhmQGSGli4QSDTrzVLaWC6IZp-wlPfrTMavrX8UxiQ/viewform";
    break;
  }

  console.log(num);
  console.log(link);

  $("button").click(function() {
      $("#intro").css("display", "none");
      $("#survey").css("display", "inline-block");
      $("iframe").attr("src", link);
  });

});
