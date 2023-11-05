// Complete the function/method so that it returns the url with anything after the anchor (#) removed

function removeUrlAnchor(url){
  let urlNew = "";
  
  for (letter of url) {
      if (letter === "#") {
          break;
      }
      urlNew += letter;
  }
  return urlNew;
}