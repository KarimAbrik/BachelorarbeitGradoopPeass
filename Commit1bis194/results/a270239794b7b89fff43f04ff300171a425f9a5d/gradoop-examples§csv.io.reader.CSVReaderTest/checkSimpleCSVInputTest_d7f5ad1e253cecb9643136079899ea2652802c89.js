if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit a270239794b7b89fff43f04ff300171a425f9a5d -test csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest\")'>a270239794b7b89fff43f04ff300171a425f9a5d</a><br>Test Case: csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest<br>";
}

var source = {"current":
{
 "csv.io.reader.CSVReaderTest.createVerticesFromCSV_":
 `private List<Vertex> createVerticesFromCSV() {
    ConfigurableVertexLineReader reader = new CSVReader();
    Configuration conf = new Configuration();
    conf.set("Meta", NODE_META);
    conf.set("Label", "Person");
    reader.setConf(conf);
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
}`,"csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_":
 `@Test
public void checkSimpleCSVInputTest() {
    for (Vertex v : createVerticesFromCSV()) {
        if (v.getID() == 0) {
        }
    }
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_":
 ``,"org.gradoop.csv.io.reader.CSVReader.setConf_Configuration":
 `@Override
public void setConf(Configuration conf) {
    this.conf = conf;
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
      "kiekerPattern" : "public new org.gradoop.csv.io.reader.CSVReader.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "key" : "org.gradoop.csv.io.reader.CSVReader.<init>_",
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
    }, {
      "call" : "org.gradoop.csv.io.reader.CSVReader#setConf",
      "kiekerPattern" : "public void org.gradoop.csv.io.reader.CSVReader.setConf(org.apache.hadoop.conf.Configuration)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#setConf",
      "key" : "org.gradoop.csv.io.reader.CSVReader.setConf_Configuration",
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
   width = 1181- margin.right - margin.left,
   height = 210 - margin.top - margin.bottom;
