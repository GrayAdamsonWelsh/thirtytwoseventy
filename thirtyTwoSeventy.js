function createScreen(inTagValue, outTag1, outTag2) 
{
    var tmpStr = "";

    var iRowCount = 0;
    var iColCount = 0;

    const iRowSize = 24;
    const iColSize = 80;

    for (let iRowCount = 0; iRowCount < iRowSize; iRowCount++) {
        tmpStr = tmpStr + "<tr>";
        for (let iColCount = 0; iColCount < iColSize; iColCount++){
            tmpStr = tmpStr + "<td>";
            tmpStr = tmpStr + "a";
            tmpStr = tmpStr + "</td>";
        }
        tmpStr = tmpStr + "</tr>";
    }

    alert (outTag1);
    document.getElementById(outTag1).innerHTML = tmpStr;

    tmpStr = "";

    tmpStr = "​<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>";
    alert(tmpStr);
    document.getElementById(outTag2).innerHTML = tmpStr;

}