function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  
  var name = e.parameter.name;
  var email = e.parameter.email;
  var phone = e.parameter.phone;

  
  sheet.appendRow([name, email, phone]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}