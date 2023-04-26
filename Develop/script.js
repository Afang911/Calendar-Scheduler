// Wait for the DOM to finish rendering before running the code
$(function () {
  // Set the date to display it in the header
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);

