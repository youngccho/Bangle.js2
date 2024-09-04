function showCustomOptions() {
  // Create the popup window
  var popup = window.open("", "custom-options", "width=400,height=400");

  // Write the custom options to the popup window
  popup.document.write("<h2>Custom options</h2>");
  popup.document.write("<label for='custom-frequency'>Frequency:</label>");
  popup.document.write("<input type='number' id='custom-frequency' name='custom-frequency' min='1' max='7' step='1' value='1'> times per week<br>");
  popup.document.write("<label for='custom-days'>Days:</label>");
  popup.document.write("<input type='checkbox' id='custom-days-mon' name='custom-days' value='monday'> <label for='custom-days-mon'>Mon</label>");
  popup.document.write("<input type='checkbox' id='custom-days-tue' name='custom-days' value='tuesday'> <label for='custom-days-tue'>Tue</label>");
  popup.document.write("<input type='checkbox' id='custom-days-wed' name='custom-days' value='wednesday'> <label for='custom-days-wed'>Wed</label>");
  popup.document.write("<input type='checkbox' id='custom-days-thu' name='custom-days' value='thursday'> <label for='custom-days-thu'>Thu</label>");
  popup.document.write("<input type='checkbox' id='custom-days-fri' name='custom-days' value='friday'> <label for='custom-days-fri'>Fri</label><br>");
  popup.document.write("<label for='custom-end'>End:</label>");
  popup.document.write("<select id='custom-end' name='custom-end'>");
  popup.document.write("<option value='never'>Never</option>");
  popup.document.write("<option value='on'>On:</option>");
  popup.document.write("<option value='after'>After:</option>");
  popup.document.write("</select>");
  popup.document.write("<input type='date' id='custom-end-date' name='custom-end-date' style='display:none;'>");
  popup.document.write("<input type='number' id='custom-end-occurrences' name='custom-end-occurrences' style='display:none;'> occurrences");

  // Add event listeners to the custom end select element
  var customEndSelect = popup.document.getElementById("custom-end");
  customEndSelect.addEventListener("change", function() {
    var customEndDateInput = popup.document.getElementById("custom-end-date");
    var customEndOccurrencesInput = popup.document.getElementById("custom-end-occurrences");
    if (this.value == "on") {
      customEndDateInput.style.display = "inline-block";
      customEndOccurrencesInput.style.display = "none";
    } else if (this.value == "after") {
      customEndDateInput.style.display = "none";
      customEndOccurrencesInput.style.display = "inline-block";
    } else {
      customEndDateInput.style.display = "none";
      customEndOccurrencesInput.style.display = "none";
    }
  });
}
