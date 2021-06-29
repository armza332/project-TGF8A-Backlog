//ถ้าหากจะเปลี่ยนSpreadsheetของ exelให้เปลี่ยน ID ตรง openbyid
function getDataSheet() {
var ss = SpreadsheetApp.openById('1O-LT4nvnCIYAiLPfL5WT90szIJzjppdxxzT03-83yfA').getActiveSheet()
var data= ss.getDataRange().getDisplayValues()
data.shift()
return data   
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function doGet(e) {
    if(!e.parameter.page){
      var htmlOutput =HtmlService.createTemplateFromFile('index')
   return htmlOutput.evaluate()
}

 return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate()
 
 }

function getUrl(){
  var url = ScriptApp.getService().getUrl()
  return url
}

function processForm2(formObject){  
  var result = "";
  if(formObject.searchtext){
      result = userClicked(formObject.searchtext);
  }
  return result;
}

//ถ้าหากจะเปลี่ยนSpreadsheetของ exelให้เปลี่ยน ID ตรง openbyid และชื่อของgetSheetByNameด้านล่างด้วย "ตย.แผ่นงาน1"
function save(user){
  var ss= SpreadsheetApp.openById('1O-LT4nvnCIYAiLPfL5WT90szIJzjppdxxzT03-83yfA');
  var ws = ss.getSheetByName("receiverFiles");
  ws.appendRow([user.data1]);
}

 

//search

function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){
      result = search(formObject.searchtext);
  }
  return result;
}

//ถ้าหากจะเปลี่ยนSpreadsheetของ exelให้เปลี่ยน ID ตรง openbyid และชื่อของgetSheetByNameด้านล่างด้วย "ตย.แผ่นงาน1"
function search(searchtext){
  var spreadsheetId = '1O-LT4nvnCIYAiLPfL5WT90szIJzjppdxxzT03-83yfA';
  var dataRage  = 'Backup!A2:H';
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.indexOf(searchtext)) {
      ar.push(f);
    }
  });
  return ar;
}
