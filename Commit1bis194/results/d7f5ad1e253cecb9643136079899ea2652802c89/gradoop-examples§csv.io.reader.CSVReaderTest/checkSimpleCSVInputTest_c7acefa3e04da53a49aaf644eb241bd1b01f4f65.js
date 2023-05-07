if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit d7f5ad1e253cecb9643136079899ea2652802c89 -test csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest\")'>d7f5ad1e253cecb9643136079899ea2652802c89</a><br>Test Case: csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest<br>";
}

var source = {"current":
{
 "csv.io.reader.CSVReaderTest.createVerticesFromCSV_":
 `private List<Vertex> createVerticesFromCSV() {
    VertexLineReader reader = new CSVReader(NODE_META);
    List<Vertex> vertices = Lists.newArrayList();
    try {
        BufferedReader in = new BufferedReader(new FileReader(NODE_TEXT));
        String line;
        while ((line = in.readLine()) != null) {
            for (Vertex v : reader.readVertexList(line)) {
                vertices.add(v);
            }
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    return vertices;
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_String":
 `public CSVReader(String path) {
    this.path = path;
    //initialize();
}`,"csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_":
 `@Test
public void checkSimpleCSVInputTest() {
    for (Vertex v : createVerticesFromCSV()) {
        if (v.getID() == 0) {
        }
    }
}`,},
};
var treeData = [
{
  "call" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "kiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-examples",
  "name" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "key" : "csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_",
  "otherKey" : null,
  "parent" : null,
  "color" : "#FFF",
  "statistic" : null,
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "children" : [ {
    "call" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "kiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createVerticesFromCSV()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "key" : "csv.io.reader.CSVReaderTest.createVerticesFromCSV_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "kiekerPattern" : "public new org.gradoop.csv.io.reader.CSVReader.<init>(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "key" : "org.gradoop.csv.io.reader.CSVReader.<init>_String",
      "otherKey" : null,
      "parent" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 357},
   width = 1174- margin.right - margin.left,
   height = 140 - margin.top - margin.bottom;
