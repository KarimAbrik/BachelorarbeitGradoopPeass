if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit a270239794b7b89fff43f04ff300171a425f9a5d -test csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest\")'>a270239794b7b89fff43f04ff300171a425f9a5d</a><br>Predecessor: d7f5ad1e253cecb9643136079899ea2652802c89<br>Comitter: <br>Test Case: csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest<br>";
   if (typeof jenkins !== 'undefined') {
         } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='checkSimpleCSVInputTest_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
  }
}

var source = {"current":
{
 "csv.io.reader.CSVReaderTest.createVerticesFromCSV_":
 `private List<Vertex> createVerticesFromCSV() {
    ConfigurableVertexLineReader reader = new CSVReader();
    Configuration conf = new Configuration();
    conf.set(CSVReader.META_DATA, NODE_META);
    conf.set(CSVReader.LABEL, "Person");
    conf.set(CSVReader.TYPE, "node");
    reader.setConf(conf);
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : PERSON_CSV) {
        for (Vertex v : reader.readVertexList(line)) {
            vertices.add(v);
        }
    }
    return vertices;
}`,"csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_":
 `@Test
public void checkSimpleCSVInputTest() throws IOException, URISyntaxException {
    Log.info(getClass().getResource("/node_meta.csv").getPath());
    for (Vertex v : createVerticesFromCSV()) {
        System.out.println(v.getID());
    }
}`,},
"old":
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
}`,},
};
var treeData = [
{
  "call" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "kiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest()",
  "otherKiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest()",
  "module" : "gradoop-examples",
  "name" : "CSVReaderTest#checkSimpleCSVInputTest",
  "key" : "csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_",
  "otherKey" : "csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_",
  "parent" : null,
  "color" : "#FF0000",
  "statistic" : {
    "meanOld" : 6.113145046713334E9,
    "meanCurrent" : 8.366712975964285E9,
    "deviationOld" : 3.606997292576723E7,
    "deviationCurrent" : 1.0578271116041763E8,
    "vms" : 29,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : -107.06899738921824,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "SLOWER",
  "inVMDeviationPredecessor" : 2.294587161022538E7,
  "inVMDeviation" : 3.5393287013622604E7,
  "ess" : 0,
  "values" : [ 8.2462651862E9, 8.2665838948E9, 8.364000609E9, 8.3401886568E9, 8.2514369016E9, 8.486951404E9, 8.3514552142E9, 9.2979008742E9, 8.3563709658E9, 8.341393005E9, 8.3087776164E9, 8.4351548006E9, 8.710451565E9, 8.2920258042E9, 8.3550713042E9, 8.2397474886E9, 8.2719151944E9, 8.501861443E9, 8.3316905986E9, 9.2871334404E9, 8.5070271584E9, 8.3784128898E9, 8.3788419612E9, 8.296207652E9, 8.33589473E9, 8.3406877766E9, 8.2735457072E9, 8.3244948772E9, 8.4469142318E9, 8.5345946904E9 ],
  "valuesPredecessor" : [ 6.1217184168E9, 6.108001517E9, 6.1139537062E9, 6.0866389656E9, 6.111730981E9, 6.0858651512E9, 6.1177048232E9, 6.1192733882E9, 6.1244583018E9, 6.0688685406E9, 6.1458487882E9, 6.1044593888E9, 6.136899708E9, 6.0438002058E9, 6.1325957018E9, 6.1291856306E9, 6.0905196308E9, 6.2256946606E9, 6.1238151994E9, 6.1052670462E9, 6.0579593118E9, 6.1042180802E9, 6.1711421604E9, 6.1062756082E9, 6.1660750002E9, 6.1321508238E9, 6.125186971E9, 6.080737643E9, 6.0816462368E9, 6.0726598142E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 8.288087452E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.288087452E9,
        "min" : 8.288087452E9,
        "sum" : 8.288087452E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.243834844E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.243834844E9,
        "min" : 8.243834844E9,
        "sum" : 8.243834844E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.285259844E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.285259844E9,
        "min" : 8.285259844E9,
        "sum" : 8.285259844E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.208146464E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.208146464E9,
        "min" : 8.208146464E9,
        "sum" : 8.208146464E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.205997327E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.205997327E9,
        "min" : 8.205997327E9,
        "sum" : 8.205997327E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 8.267155899E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.267155899E9,
        "min" : 8.267155899E9,
        "sum" : 8.267155899E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.318505011E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.318505011E9,
        "min" : 8.318505011E9,
        "sum" : 8.318505011E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.23148417E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.23148417E9,
        "min" : 8.23148417E9,
        "sum" : 8.23148417E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.272245815E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.272245815E9,
        "min" : 8.272245815E9,
        "sum" : 8.272245815E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.243528579E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.243528579E9,
        "min" : 8.243528579E9,
        "sum" : 8.243528579E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 8.303381176E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.303381176E9,
        "min" : 8.303381176E9,
        "sum" : 8.303381176E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.431645964E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.431645964E9,
        "min" : 8.431645964E9,
        "sum" : 8.431645964E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.360440394E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.360440394E9,
        "min" : 8.360440394E9,
        "sum" : 8.360440394E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.38513831E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.38513831E9,
        "min" : 8.38513831E9,
        "sum" : 8.38513831E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.339397201E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.339397201E9,
        "min" : 8.339397201E9,
        "sum" : 8.339397201E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 8.324754221E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.324754221E9,
        "min" : 8.324754221E9,
        "sum" : 8.324754221E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.326342985E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.326342985E9,
        "min" : 8.326342985E9,
        "sum" : 8.326342985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.412485943E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.412485943E9,
        "min" : 8.412485943E9,
        "sum" : 8.412485943E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.302932449E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.302932449E9,
        "min" : 8.302932449E9,
        "sum" : 8.302932449E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.334427686E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.334427686E9,
        "min" : 8.334427686E9,
        "sum" : 8.334427686E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 8.205821142E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.205821142E9,
        "min" : 8.205821142E9,
        "sum" : 8.205821142E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.281558585E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.281558585E9,
        "min" : 8.281558585E9,
        "sum" : 8.281558585E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.257548286E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.257548286E9,
        "min" : 8.257548286E9,
        "sum" : 8.257548286E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.258039067E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.258039067E9,
        "min" : 8.258039067E9,
        "sum" : 8.258039067E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.254217428E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.254217428E9,
        "min" : 8.254217428E9,
        "sum" : 8.254217428E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 8.466616842E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.466616842E9,
        "min" : 8.466616842E9,
        "sum" : 8.466616842E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.481149158E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.481149158E9,
        "min" : 8.481149158E9,
        "sum" : 8.481149158E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.451066719E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.451066719E9,
        "min" : 8.451066719E9,
        "sum" : 8.451066719E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.478993978E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.478993978E9,
        "min" : 8.478993978E9,
        "sum" : 8.478993978E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.556930323E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.556930323E9,
        "min" : 8.556930323E9,
        "sum" : 8.556930323E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 8.324415599E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.324415599E9,
        "min" : 8.324415599E9,
        "sum" : 8.324415599E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.37353583E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.37353583E9,
        "min" : 8.37353583E9,
        "sum" : 8.37353583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.39359677E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.39359677E9,
        "min" : 8.39359677E9,
        "sum" : 8.39359677E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.327355627E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.327355627E9,
        "min" : 8.327355627E9,
        "sum" : 8.327355627E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.338372245E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.338372245E9,
        "min" : 8.338372245E9,
        "sum" : 8.338372245E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 9.359776335E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.359776335E9,
        "min" : 9.359776335E9,
        "sum" : 9.359776335E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.432567409E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.432567409E9,
        "min" : 9.432567409E9,
        "sum" : 9.432567409E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.239657097E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.239657097E9,
        "min" : 9.239657097E9,
        "sum" : 9.239657097E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.216641677E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.216641677E9,
        "min" : 9.216641677E9,
        "sum" : 9.216641677E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.240861853E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.240861853E9,
        "min" : 9.240861853E9,
        "sum" : 9.240861853E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 8.366710647E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.366710647E9,
        "min" : 8.366710647E9,
        "sum" : 8.366710647E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.411014624E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.411014624E9,
        "min" : 8.411014624E9,
        "sum" : 8.411014624E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.314138531E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.314138531E9,
        "min" : 8.314138531E9,
        "sum" : 8.314138531E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.35868559E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.35868559E9,
        "min" : 8.35868559E9,
        "sum" : 8.35868559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.331305437E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.331305437E9,
        "min" : 8.331305437E9,
        "sum" : 8.331305437E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 8.334908433E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.334908433E9,
        "min" : 8.334908433E9,
        "sum" : 8.334908433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.333091967E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.333091967E9,
        "min" : 8.333091967E9,
        "sum" : 8.333091967E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.353378507E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.353378507E9,
        "min" : 8.353378507E9,
        "sum" : 8.353378507E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.352008663E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.352008663E9,
        "min" : 8.352008663E9,
        "sum" : 8.352008663E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.333577455E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.333577455E9,
        "min" : 8.333577455E9,
        "sum" : 8.333577455E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 8.265952388E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.265952388E9,
        "min" : 8.265952388E9,
        "sum" : 8.265952388E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.287861836E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.287861836E9,
        "min" : 8.287861836E9,
        "sum" : 8.287861836E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.353771517E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.353771517E9,
        "min" : 8.353771517E9,
        "sum" : 8.353771517E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.296464411E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.296464411E9,
        "min" : 8.296464411E9,
        "sum" : 8.296464411E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.33983793E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.33983793E9,
        "min" : 8.33983793E9,
        "sum" : 8.33983793E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 8.421254086E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.421254086E9,
        "min" : 8.421254086E9,
        "sum" : 8.421254086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.457415364E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.457415364E9,
        "min" : 8.457415364E9,
        "sum" : 8.457415364E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.442734604E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.442734604E9,
        "min" : 8.442734604E9,
        "sum" : 8.442734604E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.449554424E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.449554424E9,
        "min" : 8.449554424E9,
        "sum" : 8.449554424E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.404815525E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.404815525E9,
        "min" : 8.404815525E9,
        "sum" : 8.404815525E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 8.745314028E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.745314028E9,
        "min" : 8.745314028E9,
        "sum" : 8.745314028E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.69442618E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.69442618E9,
        "min" : 8.69442618E9,
        "sum" : 8.69442618E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.716372701E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.716372701E9,
        "min" : 8.716372701E9,
        "sum" : 8.716372701E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.712663371E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.712663371E9,
        "min" : 8.712663371E9,
        "sum" : 8.712663371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.683481545E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.683481545E9,
        "min" : 8.683481545E9,
        "sum" : 8.683481545E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 8.277970077E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.277970077E9,
        "min" : 8.277970077E9,
        "sum" : 8.277970077E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.305312091E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.305312091E9,
        "min" : 8.305312091E9,
        "sum" : 8.305312091E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.321589131E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.321589131E9,
        "min" : 8.321589131E9,
        "sum" : 8.321589131E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.305009002E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.305009002E9,
        "min" : 8.305009002E9,
        "sum" : 8.305009002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.25024872E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.25024872E9,
        "min" : 8.25024872E9,
        "sum" : 8.25024872E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 8.381540553E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.381540553E9,
        "min" : 8.381540553E9,
        "sum" : 8.381540553E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.360847218E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.360847218E9,
        "min" : 8.360847218E9,
        "sum" : 8.360847218E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.40219728E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.40219728E9,
        "min" : 8.40219728E9,
        "sum" : 8.40219728E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.260855582E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.260855582E9,
        "min" : 8.260855582E9,
        "sum" : 8.260855582E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.369915888E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.369915888E9,
        "min" : 8.369915888E9,
        "sum" : 8.369915888E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 8.250099586E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.250099586E9,
        "min" : 8.250099586E9,
        "sum" : 8.250099586E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.220365964E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.220365964E9,
        "min" : 8.220365964E9,
        "sum" : 8.220365964E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.200381206E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.200381206E9,
        "min" : 8.200381206E9,
        "sum" : 8.200381206E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.285613073E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.285613073E9,
        "min" : 8.285613073E9,
        "sum" : 8.285613073E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.242277614E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.242277614E9,
        "min" : 8.242277614E9,
        "sum" : 8.242277614E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 8.236575711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.236575711E9,
        "min" : 8.236575711E9,
        "sum" : 8.236575711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.245399397E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.245399397E9,
        "min" : 8.245399397E9,
        "sum" : 8.245399397E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.247186132E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.247186132E9,
        "min" : 8.247186132E9,
        "sum" : 8.247186132E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.330485949E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.330485949E9,
        "min" : 8.330485949E9,
        "sum" : 8.330485949E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.299928783E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.299928783E9,
        "min" : 8.299928783E9,
        "sum" : 8.299928783E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 8.482447856E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.482447856E9,
        "min" : 8.482447856E9,
        "sum" : 8.482447856E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.501226593E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.501226593E9,
        "min" : 8.501226593E9,
        "sum" : 8.501226593E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.490130935E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.490130935E9,
        "min" : 8.490130935E9,
        "sum" : 8.490130935E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.502741849E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.502741849E9,
        "min" : 8.502741849E9,
        "sum" : 8.502741849E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.532759982E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.532759982E9,
        "min" : 8.532759982E9,
        "sum" : 8.532759982E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 8.302673274E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.302673274E9,
        "min" : 8.302673274E9,
        "sum" : 8.302673274E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.367856003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.367856003E9,
        "min" : 8.367856003E9,
        "sum" : 8.367856003E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.348561673E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.348561673E9,
        "min" : 8.348561673E9,
        "sum" : 8.348561673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.317775267E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.317775267E9,
        "min" : 8.317775267E9,
        "sum" : 8.317775267E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.321586776E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.321586776E9,
        "min" : 8.321586776E9,
        "sum" : 8.321586776E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 9.258549093E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.258549093E9,
        "min" : 9.258549093E9,
        "sum" : 9.258549093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.352164998E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.352164998E9,
        "min" : 9.352164998E9,
        "sum" : 9.352164998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.301716084E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.301716084E9,
        "min" : 9.301716084E9,
        "sum" : 9.301716084E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.25318919E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.25318919E9,
        "min" : 9.25318919E9,
        "sum" : 9.25318919E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 9.270047837E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 9.270047837E9,
        "min" : 9.270047837E9,
        "sum" : 9.270047837E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 8.485302545E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.485302545E9,
        "min" : 8.485302545E9,
        "sum" : 8.485302545E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.543429673E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.543429673E9,
        "min" : 8.543429673E9,
        "sum" : 8.543429673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.512353259E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.512353259E9,
        "min" : 8.512353259E9,
        "sum" : 8.512353259E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.478316966E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.478316966E9,
        "min" : 8.478316966E9,
        "sum" : 8.478316966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.515733349E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.515733349E9,
        "min" : 8.515733349E9,
        "sum" : 8.515733349E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 8.384367385E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.384367385E9,
        "min" : 8.384367385E9,
        "sum" : 8.384367385E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.353291401E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.353291401E9,
        "min" : 8.353291401E9,
        "sum" : 8.353291401E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.430835573E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.430835573E9,
        "min" : 8.430835573E9,
        "sum" : 8.430835573E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.338311373E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.338311373E9,
        "min" : 8.338311373E9,
        "sum" : 8.338311373E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.385258717E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.385258717E9,
        "min" : 8.385258717E9,
        "sum" : 8.385258717E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 8.320884817E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.320884817E9,
        "min" : 8.320884817E9,
        "sum" : 8.320884817E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.390369361E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.390369361E9,
        "min" : 8.390369361E9,
        "sum" : 8.390369361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.391544277E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.391544277E9,
        "min" : 8.391544277E9,
        "sum" : 8.391544277E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.375027433E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.375027433E9,
        "min" : 8.375027433E9,
        "sum" : 8.375027433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.416383918E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.416383918E9,
        "min" : 8.416383918E9,
        "sum" : 8.416383918E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 8.329592551E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.329592551E9,
        "min" : 8.329592551E9,
        "sum" : 8.329592551E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.249934931E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.249934931E9,
        "min" : 8.249934931E9,
        "sum" : 8.249934931E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.349249684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.349249684E9,
        "min" : 8.349249684E9,
        "sum" : 8.349249684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.274510466E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.274510466E9,
        "min" : 8.274510466E9,
        "sum" : 8.274510466E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.277750628E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.277750628E9,
        "min" : 8.277750628E9,
        "sum" : 8.277750628E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 8.313672971E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.313672971E9,
        "min" : 8.313672971E9,
        "sum" : 8.313672971E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.326567082E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.326567082E9,
        "min" : 8.326567082E9,
        "sum" : 8.326567082E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.332436749E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.332436749E9,
        "min" : 8.332436749E9,
        "sum" : 8.332436749E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.311207711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.311207711E9,
        "min" : 8.311207711E9,
        "sum" : 8.311207711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.395589137E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.395589137E9,
        "min" : 8.395589137E9,
        "sum" : 8.395589137E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 8.334534424E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.334534424E9,
        "min" : 8.334534424E9,
        "sum" : 8.334534424E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.341138168E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.341138168E9,
        "min" : 8.341138168E9,
        "sum" : 8.341138168E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.352239575E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.352239575E9,
        "min" : 8.352239575E9,
        "sum" : 8.352239575E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.373874625E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.373874625E9,
        "min" : 8.373874625E9,
        "sum" : 8.373874625E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.301652091E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.301652091E9,
        "min" : 8.301652091E9,
        "sum" : 8.301652091E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 8.27016574E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.27016574E9,
        "min" : 8.27016574E9,
        "sum" : 8.27016574E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.26429245E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.26429245E9,
        "min" : 8.26429245E9,
        "sum" : 8.26429245E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.305070193E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.305070193E9,
        "min" : 8.305070193E9,
        "sum" : 8.305070193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.27516474E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.27516474E9,
        "min" : 8.27516474E9,
        "sum" : 8.27516474E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.253035413E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.253035413E9,
        "min" : 8.253035413E9,
        "sum" : 8.253035413E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 8.280701727E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.280701727E9,
        "min" : 8.280701727E9,
        "sum" : 8.280701727E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.370427363E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.370427363E9,
        "min" : 8.370427363E9,
        "sum" : 8.370427363E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.382582938E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.382582938E9,
        "min" : 8.382582938E9,
        "sum" : 8.382582938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.271506512E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.271506512E9,
        "min" : 8.271506512E9,
        "sum" : 8.271506512E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.317255846E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.317255846E9,
        "min" : 8.317255846E9,
        "sum" : 8.317255846E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 8.433330155E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.433330155E9,
        "min" : 8.433330155E9,
        "sum" : 8.433330155E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.498066854E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.498066854E9,
        "min" : 8.498066854E9,
        "sum" : 8.498066854E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.411586847E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.411586847E9,
        "min" : 8.411586847E9,
        "sum" : 8.411586847E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.447494843E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.447494843E9,
        "min" : 8.447494843E9,
        "sum" : 8.447494843E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.44409246E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.44409246E9,
        "min" : 8.44409246E9,
        "sum" : 8.44409246E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 8.548688294E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.548688294E9,
        "min" : 8.548688294E9,
        "sum" : 8.548688294E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.53074669E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.53074669E9,
        "min" : 8.53074669E9,
        "sum" : 8.53074669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.528662011E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.528662011E9,
        "min" : 8.528662011E9,
        "sum" : 8.528662011E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.489829474E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.489829474E9,
        "min" : 8.489829474E9,
        "sum" : 8.489829474E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 8.575046983E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 8.575046983E9,
        "min" : 8.575046983E9,
        "sum" : 8.575046983E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 6.129986326E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.129986326E9,
        "min" : 6.129986326E9,
        "sum" : 6.129986326E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.076789408E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.076789408E9,
        "min" : 6.076789408E9,
        "sum" : 6.076789408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.162619066E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.162619066E9,
        "min" : 6.162619066E9,
        "sum" : 6.162619066E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.1167951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.1167951E9,
        "min" : 6.1167951E9,
        "sum" : 6.1167951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.122402184E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.122402184E9,
        "min" : 6.122402184E9,
        "sum" : 6.122402184E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 6.114105421E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.114105421E9,
        "min" : 6.114105421E9,
        "sum" : 6.114105421E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.080773836E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.080773836E9,
        "min" : 6.080773836E9,
        "sum" : 6.080773836E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.155430213E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.155430213E9,
        "min" : 6.155430213E9,
        "sum" : 6.155430213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.101242907E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.101242907E9,
        "min" : 6.101242907E9,
        "sum" : 6.101242907E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.088455208E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.088455208E9,
        "min" : 6.088455208E9,
        "sum" : 6.088455208E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 6.108137673E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.108137673E9,
        "min" : 6.108137673E9,
        "sum" : 6.108137673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.107145317E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.107145317E9,
        "min" : 6.107145317E9,
        "sum" : 6.107145317E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.139601813E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.139601813E9,
        "min" : 6.139601813E9,
        "sum" : 6.139601813E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.096218936E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.096218936E9,
        "min" : 6.096218936E9,
        "sum" : 6.096218936E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.118664792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.118664792E9,
        "min" : 6.118664792E9,
        "sum" : 6.118664792E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 6.06694955E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.06694955E9,
        "min" : 6.06694955E9,
        "sum" : 6.06694955E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.079003147E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.079003147E9,
        "min" : 6.079003147E9,
        "sum" : 6.079003147E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.116857058E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.116857058E9,
        "min" : 6.116857058E9,
        "sum" : 6.116857058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.083830165E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.083830165E9,
        "min" : 6.083830165E9,
        "sum" : 6.083830165E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.086554908E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.086554908E9,
        "min" : 6.086554908E9,
        "sum" : 6.086554908E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 6.137414032E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.137414032E9,
        "min" : 6.137414032E9,
        "sum" : 6.137414032E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.117898343E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.117898343E9,
        "min" : 6.117898343E9,
        "sum" : 6.117898343E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.097984366E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.097984366E9,
        "min" : 6.097984366E9,
        "sum" : 6.097984366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.071250574E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.071250574E9,
        "min" : 6.071250574E9,
        "sum" : 6.071250574E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.13410759E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.13410759E9,
        "min" : 6.13410759E9,
        "sum" : 6.13410759E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 6.075120875E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.075120875E9,
        "min" : 6.075120875E9,
        "sum" : 6.075120875E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.059054684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.059054684E9,
        "min" : 6.059054684E9,
        "sum" : 6.059054684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.129479607E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.129479607E9,
        "min" : 6.129479607E9,
        "sum" : 6.129479607E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.093225163E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.093225163E9,
        "min" : 6.093225163E9,
        "sum" : 6.093225163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.072445427E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.072445427E9,
        "min" : 6.072445427E9,
        "sum" : 6.072445427E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 6.108025248E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.108025248E9,
        "min" : 6.108025248E9,
        "sum" : 6.108025248E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.085801648E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.085801648E9,
        "min" : 6.085801648E9,
        "sum" : 6.085801648E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.114681355E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.114681355E9,
        "min" : 6.114681355E9,
        "sum" : 6.114681355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.12021861E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.12021861E9,
        "min" : 6.12021861E9,
        "sum" : 6.12021861E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.159797255E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.159797255E9,
        "min" : 6.159797255E9,
        "sum" : 6.159797255E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 6.128976166E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.128976166E9,
        "min" : 6.128976166E9,
        "sum" : 6.128976166E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.094408672E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.094408672E9,
        "min" : 6.094408672E9,
        "sum" : 6.094408672E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.123610137E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.123610137E9,
        "min" : 6.123610137E9,
        "sum" : 6.123610137E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.127669615E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.127669615E9,
        "min" : 6.127669615E9,
        "sum" : 6.127669615E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.121702351E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.121702351E9,
        "min" : 6.121702351E9,
        "sum" : 6.121702351E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 6.116191657E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.116191657E9,
        "min" : 6.116191657E9,
        "sum" : 6.116191657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.109609208E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.109609208E9,
        "min" : 6.109609208E9,
        "sum" : 6.109609208E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.145711792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.145711792E9,
        "min" : 6.145711792E9,
        "sum" : 6.145711792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.100037924E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.100037924E9,
        "min" : 6.100037924E9,
        "sum" : 6.100037924E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.150740928E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.150740928E9,
        "min" : 6.150740928E9,
        "sum" : 6.150740928E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 6.062178605E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.062178605E9,
        "min" : 6.062178605E9,
        "sum" : 6.062178605E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.055018404E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.055018404E9,
        "min" : 6.055018404E9,
        "sum" : 6.055018404E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.041832923E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.041832923E9,
        "min" : 6.041832923E9,
        "sum" : 6.041832923E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.063174431E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.063174431E9,
        "min" : 6.063174431E9,
        "sum" : 6.063174431E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.12213834E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.12213834E9,
        "min" : 6.12213834E9,
        "sum" : 6.12213834E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 6.139281716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.139281716E9,
        "min" : 6.139281716E9,
        "sum" : 6.139281716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.128468354E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.128468354E9,
        "min" : 6.128468354E9,
        "sum" : 6.128468354E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.161745885E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.161745885E9,
        "min" : 6.161745885E9,
        "sum" : 6.161745885E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.115840349E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.115840349E9,
        "min" : 6.115840349E9,
        "sum" : 6.115840349E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.183907637E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.183907637E9,
        "min" : 6.183907637E9,
        "sum" : 6.183907637E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 6.09407711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.09407711E9,
        "min" : 6.09407711E9,
        "sum" : 6.09407711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.111989788E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.111989788E9,
        "min" : 6.111989788E9,
        "sum" : 6.111989788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.108541436E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.108541436E9,
        "min" : 6.108541436E9,
        "sum" : 6.108541436E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.092417771E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.092417771E9,
        "min" : 6.092417771E9,
        "sum" : 6.092417771E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.115270839E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.115270839E9,
        "min" : 6.115270839E9,
        "sum" : 6.115270839E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 6.102620962E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.102620962E9,
        "min" : 6.102620962E9,
        "sum" : 6.102620962E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.15626198E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.15626198E9,
        "min" : 6.15626198E9,
        "sum" : 6.15626198E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.167119135E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.167119135E9,
        "min" : 6.167119135E9,
        "sum" : 6.167119135E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.11319712E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.11319712E9,
        "min" : 6.11319712E9,
        "sum" : 6.11319712E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.145299343E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.145299343E9,
        "min" : 6.145299343E9,
        "sum" : 6.145299343E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 6.054127744E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.054127744E9,
        "min" : 6.054127744E9,
        "sum" : 6.054127744E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.012802814E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.012802814E9,
        "min" : 6.012802814E9,
        "sum" : 6.012802814E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.04833741E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.04833741E9,
        "min" : 6.04833741E9,
        "sum" : 6.04833741E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.053980549E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.053980549E9,
        "min" : 6.053980549E9,
        "sum" : 6.053980549E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.049752512E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.049752512E9,
        "min" : 6.049752512E9,
        "sum" : 6.049752512E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 6.163654709E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.163654709E9,
        "min" : 6.163654709E9,
        "sum" : 6.163654709E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.12856892E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.12856892E9,
        "min" : 6.12856892E9,
        "sum" : 6.12856892E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.130858833E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.130858833E9,
        "min" : 6.130858833E9,
        "sum" : 6.130858833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.121798689E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.121798689E9,
        "min" : 6.121798689E9,
        "sum" : 6.121798689E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.118097358E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.118097358E9,
        "min" : 6.118097358E9,
        "sum" : 6.118097358E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 6.124387538E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.124387538E9,
        "min" : 6.124387538E9,
        "sum" : 6.124387538E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.134896737E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.134896737E9,
        "min" : 6.134896737E9,
        "sum" : 6.134896737E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.162713615E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.162713615E9,
        "min" : 6.162713615E9,
        "sum" : 6.162713615E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.074613258E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.074613258E9,
        "min" : 6.074613258E9,
        "sum" : 6.074613258E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.149317005E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.149317005E9,
        "min" : 6.149317005E9,
        "sum" : 6.149317005E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 6.094328209E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.094328209E9,
        "min" : 6.094328209E9,
        "sum" : 6.094328209E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.086791817E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.086791817E9,
        "min" : 6.086791817E9,
        "sum" : 6.086791817E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.109689422E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.109689422E9,
        "min" : 6.109689422E9,
        "sum" : 6.109689422E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.067399489E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.067399489E9,
        "min" : 6.067399489E9,
        "sum" : 6.067399489E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.094389217E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.094389217E9,
        "min" : 6.094389217E9,
        "sum" : 6.094389217E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 6.234262518E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.234262518E9,
        "min" : 6.234262518E9,
        "sum" : 6.234262518E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.255525352E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.255525352E9,
        "min" : 6.255525352E9,
        "sum" : 6.255525352E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.260580391E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.260580391E9,
        "min" : 6.260580391E9,
        "sum" : 6.260580391E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.136869963E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.136869963E9,
        "min" : 6.136869963E9,
        "sum" : 6.136869963E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.241235079E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.241235079E9,
        "min" : 6.241235079E9,
        "sum" : 6.241235079E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 6.115145214E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.115145214E9,
        "min" : 6.115145214E9,
        "sum" : 6.115145214E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.11030669E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.11030669E9,
        "min" : 6.11030669E9,
        "sum" : 6.11030669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.171992295E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.171992295E9,
        "min" : 6.171992295E9,
        "sum" : 6.171992295E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.116046039E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.116046039E9,
        "min" : 6.116046039E9,
        "sum" : 6.116046039E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.105585759E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.105585759E9,
        "min" : 6.105585759E9,
        "sum" : 6.105585759E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 6.095372526E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.095372526E9,
        "min" : 6.095372526E9,
        "sum" : 6.095372526E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.099688705E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.099688705E9,
        "min" : 6.099688705E9,
        "sum" : 6.099688705E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.137909552E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.137909552E9,
        "min" : 6.137909552E9,
        "sum" : 6.137909552E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.088733653E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.088733653E9,
        "min" : 6.088733653E9,
        "sum" : 6.088733653E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.104630795E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.104630795E9,
        "min" : 6.104630795E9,
        "sum" : 6.104630795E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 6.037998579E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.037998579E9,
        "min" : 6.037998579E9,
        "sum" : 6.037998579E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.038442647E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.038442647E9,
        "min" : 6.038442647E9,
        "sum" : 6.038442647E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.101411179E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.101411179E9,
        "min" : 6.101411179E9,
        "sum" : 6.101411179E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.058265376E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.058265376E9,
        "min" : 6.058265376E9,
        "sum" : 6.058265376E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.053678778E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.053678778E9,
        "min" : 6.053678778E9,
        "sum" : 6.053678778E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 6.073646391E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.073646391E9,
        "min" : 6.073646391E9,
        "sum" : 6.073646391E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.100336791E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.100336791E9,
        "min" : 6.100336791E9,
        "sum" : 6.100336791E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.111343937E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.111343937E9,
        "min" : 6.111343937E9,
        "sum" : 6.111343937E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.090029926E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.090029926E9,
        "min" : 6.090029926E9,
        "sum" : 6.090029926E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.145733356E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.145733356E9,
        "min" : 6.145733356E9,
        "sum" : 6.145733356E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 6.176392401E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.176392401E9,
        "min" : 6.176392401E9,
        "sum" : 6.176392401E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.189909074E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.189909074E9,
        "min" : 6.189909074E9,
        "sum" : 6.189909074E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.189741698E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.189741698E9,
        "min" : 6.189741698E9,
        "sum" : 6.189741698E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.143146113E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.143146113E9,
        "min" : 6.143146113E9,
        "sum" : 6.143146113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.156521516E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.156521516E9,
        "min" : 6.156521516E9,
        "sum" : 6.156521516E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 6.117451114E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.117451114E9,
        "min" : 6.117451114E9,
        "sum" : 6.117451114E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.075587445E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.075587445E9,
        "min" : 6.075587445E9,
        "sum" : 6.075587445E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.106521324E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.106521324E9,
        "min" : 6.106521324E9,
        "sum" : 6.106521324E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.095047713E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.095047713E9,
        "min" : 6.095047713E9,
        "sum" : 6.095047713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.136770445E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.136770445E9,
        "min" : 6.136770445E9,
        "sum" : 6.136770445E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 6.157929536E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.157929536E9,
        "min" : 6.157929536E9,
        "sum" : 6.157929536E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.150347891E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.150347891E9,
        "min" : 6.150347891E9,
        "sum" : 6.150347891E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.185470151E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.185470151E9,
        "min" : 6.185470151E9,
        "sum" : 6.185470151E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.158718801E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.158718801E9,
        "min" : 6.158718801E9,
        "sum" : 6.158718801E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.177908622E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.177908622E9,
        "min" : 6.177908622E9,
        "sum" : 6.177908622E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 6.141114637E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.141114637E9,
        "min" : 6.141114637E9,
        "sum" : 6.141114637E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.128067208E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.128067208E9,
        "min" : 6.128067208E9,
        "sum" : 6.128067208E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.136388007E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.136388007E9,
        "min" : 6.136388007E9,
        "sum" : 6.136388007E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.126050155E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.126050155E9,
        "min" : 6.126050155E9,
        "sum" : 6.126050155E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.129134112E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.129134112E9,
        "min" : 6.129134112E9,
        "sum" : 6.129134112E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 6.119605016E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.119605016E9,
        "min" : 6.119605016E9,
        "sum" : 6.119605016E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.112790707E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.112790707E9,
        "min" : 6.112790707E9,
        "sum" : 6.112790707E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.153533772E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.153533772E9,
        "min" : 6.153533772E9,
        "sum" : 6.153533772E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.128981392E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.128981392E9,
        "min" : 6.128981392E9,
        "sum" : 6.128981392E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.111023968E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.111023968E9,
        "min" : 6.111023968E9,
        "sum" : 6.111023968E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 6.096079039E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.096079039E9,
        "min" : 6.096079039E9,
        "sum" : 6.096079039E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.08061962E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.08061962E9,
        "min" : 6.08061962E9,
        "sum" : 6.08061962E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.090060286E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.090060286E9,
        "min" : 6.090060286E9,
        "sum" : 6.090060286E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.074226052E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.074226052E9,
        "min" : 6.074226052E9,
        "sum" : 6.074226052E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.062703218E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.062703218E9,
        "min" : 6.062703218E9,
        "sum" : 6.062703218E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 6.077973673E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.077973673E9,
        "min" : 6.077973673E9,
        "sum" : 6.077973673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.064319468E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.064319468E9,
        "min" : 6.064319468E9,
        "sum" : 6.064319468E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.126737782E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.126737782E9,
        "min" : 6.126737782E9,
        "sum" : 6.126737782E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.067398059E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.067398059E9,
        "min" : 6.067398059E9,
        "sum" : 6.067398059E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.071802202E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.071802202E9,
        "min" : 6.071802202E9,
        "sum" : 6.071802202E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 6.072819054E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.072819054E9,
        "min" : 6.072819054E9,
        "sum" : 6.072819054E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.038817227E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.038817227E9,
        "min" : 6.038817227E9,
        "sum" : 6.038817227E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.100983051E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.100983051E9,
        "min" : 6.100983051E9,
        "sum" : 6.100983051E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.070928132E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.070928132E9,
        "min" : 6.070928132E9,
        "sum" : 6.070928132E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.079751607E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.079751607E9,
        "min" : 6.079751607E9,
        "sum" : 6.079751607E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ {
    "call" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "kiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createVerticesFromCSV()",
    "otherKiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createVerticesFromCSV()",
    "module" : "gradoop-examples",
    "name" : "CSVReaderTest#createVerticesFromCSV",
    "key" : "csv.io.reader.CSVReaderTest.createVerticesFromCSV_",
    "otherKey" : "csv.io.reader.CSVReaderTest.createVerticesFromCSV_",
    "parent" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 6.1128898203133335E9,
      "meanCurrent" : 8.252348439821428E9,
      "deviationOld" : 3.606435764415261E7,
      "deviationCurrent" : 9.969473314403512E7,
      "vms" : 29,
      "callsOld" : 150,
      "calls" : 150,
      "tvalue" : -107.19824331525184,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 2.2938575480806783E7,
    "inVMDeviation" : 3.422540831181401E7,
    "ess" : 1,
    "values" : [ 8.1400537036E9, 8.1645179992E9, 8.2454336034E9, 8.2282509006E9, 8.1333848088E9, 8.3631198578E9, 8.2439156246E9, 9.131826809E9, 8.2311641538E9, 8.2292104576E9, 8.1950190112E9, 8.3148168678E9, 8.5757047936E9, 8.181567737E9, 8.2410513408E9, 8.1284559998E9, 8.1680281662E9, 8.3793194216E9, 8.2188534122E9, 9.126335356E9, 8.3823215514E9, 8.2679961284E9, 8.2679709878E9, 8.1908590706E9, 8.226881805E9, 8.2261230566E9, 8.1609238086E9, 8.2185284542E9, 8.3317109644E9, 8.4105726284E9 ],
    "valuesPredecessor" : [ 6.1215143884E9, 6.1075980482E9, 6.1137306328E9, 6.0864231144E9, 6.1114504E9, 6.0856023704E9, 6.1174723834E9, 6.118928465E9, 6.124224739E9, 6.0686277874E9, 6.1455914382E9, 6.1042562848E9, 6.1366253116E9, 6.0435413866E9, 6.1323467712E9, 6.1289114638E9, 6.0903223956E9, 6.2254583354E9, 6.1235692656E9, 6.105001731E9, 6.05763433E9, 6.1039081782E9, 6.1708375514E9, 6.1060416E9, 6.1657658668E9, 6.131908627E9, 6.1249863296E9, 6.080517187E9, 6.0814273564E9, 6.0724708702E9 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 8.188306345E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.188306345E9,
          "min" : 8.188306345E9,
          "sum" : 8.188306345E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.147314557E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.147314557E9,
          "min" : 8.147314557E9,
          "sum" : 8.147314557E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.167084047E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.167084047E9,
          "min" : 8.167084047E9,
          "sum" : 8.167084047E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.095767376E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.095767376E9,
          "min" : 8.095767376E9,
          "sum" : 8.095767376E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.101796193E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.101796193E9,
          "min" : 8.101796193E9,
          "sum" : 8.101796193E9,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 8.164611161E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.164611161E9,
          "min" : 8.164611161E9,
          "sum" : 8.164611161E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.209012234E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.209012234E9,
          "min" : 8.209012234E9,
          "sum" : 8.209012234E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.131602274E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.131602274E9,
          "min" : 8.131602274E9,
          "sum" : 8.131602274E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.174726679E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.174726679E9,
          "min" : 8.174726679E9,
          "sum" : 8.174726679E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.142637648E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.142637648E9,
          "min" : 8.142637648E9,
          "sum" : 8.142637648E9,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 8.190186128E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.190186128E9,
          "min" : 8.190186128E9,
          "sum" : 8.190186128E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.2996129E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.2996129E9,
          "min" : 8.2996129E9,
          "sum" : 8.2996129E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.239347423E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.239347423E9,
          "min" : 8.239347423E9,
          "sum" : 8.239347423E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.264688956E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.264688956E9,
          "min" : 8.264688956E9,
          "sum" : 8.264688956E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.23333261E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.23333261E9,
          "min" : 8.23333261E9,
          "sum" : 8.23333261E9,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 8.214259238E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.214259238E9,
          "min" : 8.214259238E9,
          "sum" : 8.214259238E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.216364483E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.216364483E9,
          "min" : 8.216364483E9,
          "sum" : 8.216364483E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.297361869E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.297361869E9,
          "min" : 8.297361869E9,
          "sum" : 8.297361869E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.180222679E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.180222679E9,
          "min" : 8.180222679E9,
          "sum" : 8.180222679E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.233046234E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.233046234E9,
          "min" : 8.233046234E9,
          "sum" : 8.233046234E9,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 8.088694194E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.088694194E9,
          "min" : 8.088694194E9,
          "sum" : 8.088694194E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.138734687E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.138734687E9,
          "min" : 8.138734687E9,
          "sum" : 8.138734687E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.143747574E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.143747574E9,
          "min" : 8.143747574E9,
          "sum" : 8.143747574E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.142772835E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.142772835E9,
          "min" : 8.142772835E9,
          "sum" : 8.142772835E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.152974754E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.152974754E9,
          "min" : 8.152974754E9,
          "sum" : 8.152974754E9,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 8.336706325E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.336706325E9,
          "min" : 8.336706325E9,
          "sum" : 8.336706325E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.367792661E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.367792661E9,
          "min" : 8.367792661E9,
          "sum" : 8.367792661E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.319995025E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.319995025E9,
          "min" : 8.319995025E9,
          "sum" : 8.319995025E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.36105671E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.36105671E9,
          "min" : 8.36105671E9,
          "sum" : 8.36105671E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.430048568E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.430048568E9,
          "min" : 8.430048568E9,
          "sum" : 8.430048568E9,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 8.215491048E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.215491048E9,
          "min" : 8.215491048E9,
          "sum" : 8.215491048E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.27398364E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.27398364E9,
          "min" : 8.27398364E9,
          "sum" : 8.27398364E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.279378744E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.279378744E9,
          "min" : 8.279378744E9,
          "sum" : 8.279378744E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.218009307E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.218009307E9,
          "min" : 8.218009307E9,
          "sum" : 8.218009307E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.232715384E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.232715384E9,
          "min" : 8.232715384E9,
          "sum" : 8.232715384E9,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 9.188968071E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.188968071E9,
          "min" : 9.188968071E9,
          "sum" : 9.188968071E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.256084832E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.256084832E9,
          "min" : 9.256084832E9,
          "sum" : 9.256084832E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.066116225E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.066116225E9,
          "min" : 9.066116225E9,
          "sum" : 9.066116225E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.066348716E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.066348716E9,
          "min" : 9.066348716E9,
          "sum" : 9.066348716E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.081616201E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.081616201E9,
          "min" : 9.081616201E9,
          "sum" : 9.081616201E9,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 8.253413809E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.253413809E9,
          "min" : 8.253413809E9,
          "sum" : 8.253413809E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.290303421E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.290303421E9,
          "min" : 8.290303421E9,
          "sum" : 8.290303421E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.194734472E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.194734472E9,
          "min" : 8.194734472E9,
          "sum" : 8.194734472E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.200315542E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.200315542E9,
          "min" : 8.200315542E9,
          "sum" : 8.200315542E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.217053525E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.217053525E9,
          "min" : 8.217053525E9,
          "sum" : 8.217053525E9,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 8.230636375E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.230636375E9,
          "min" : 8.230636375E9,
          "sum" : 8.230636375E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.213246851E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.213246851E9,
          "min" : 8.213246851E9,
          "sum" : 8.213246851E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.249708532E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.249708532E9,
          "min" : 8.249708532E9,
          "sum" : 8.249708532E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.239674881E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.239674881E9,
          "min" : 8.239674881E9,
          "sum" : 8.239674881E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.212785649E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.212785649E9,
          "min" : 8.212785649E9,
          "sum" : 8.212785649E9,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 8.161589026E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.161589026E9,
          "min" : 8.161589026E9,
          "sum" : 8.161589026E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.182174297E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.182174297E9,
          "min" : 8.182174297E9,
          "sum" : 8.182174297E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.230331753E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.230331753E9,
          "min" : 8.230331753E9,
          "sum" : 8.230331753E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.186196851E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.186196851E9,
          "min" : 8.186196851E9,
          "sum" : 8.186196851E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.214803129E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.214803129E9,
          "min" : 8.214803129E9,
          "sum" : 8.214803129E9,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 8.308619438E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.308619438E9,
          "min" : 8.308619438E9,
          "sum" : 8.308619438E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.356134514E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.356134514E9,
          "min" : 8.356134514E9,
          "sum" : 8.356134514E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.311367135E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.311367135E9,
          "min" : 8.311367135E9,
          "sum" : 8.311367135E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.322510544E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.322510544E9,
          "min" : 8.322510544E9,
          "sum" : 8.322510544E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.275452708E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.275452708E9,
          "min" : 8.275452708E9,
          "sum" : 8.275452708E9,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 8.60504261E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.60504261E9,
          "min" : 8.60504261E9,
          "sum" : 8.60504261E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.547893333E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.547893333E9,
          "min" : 8.547893333E9,
          "sum" : 8.547893333E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.586261236E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.586261236E9,
          "min" : 8.586261236E9,
          "sum" : 8.586261236E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.576802602E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.576802602E9,
          "min" : 8.576802602E9,
          "sum" : 8.576802602E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.562524187E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.562524187E9,
          "min" : 8.562524187E9,
          "sum" : 8.562524187E9,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 8.166643693E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.166643693E9,
          "min" : 8.166643693E9,
          "sum" : 8.166643693E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.193896066E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.193896066E9,
          "min" : 8.193896066E9,
          "sum" : 8.193896066E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.209647313E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.209647313E9,
          "min" : 8.209647313E9,
          "sum" : 8.209647313E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.193931208E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.193931208E9,
          "min" : 8.193931208E9,
          "sum" : 8.193931208E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.143720405E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.143720405E9,
          "min" : 8.143720405E9,
          "sum" : 8.143720405E9,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 8.261464311E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.261464311E9,
          "min" : 8.261464311E9,
          "sum" : 8.261464311E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.247280359E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.247280359E9,
          "min" : 8.247280359E9,
          "sum" : 8.247280359E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.293127868E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.293127868E9,
          "min" : 8.293127868E9,
          "sum" : 8.293127868E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.156269809E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.156269809E9,
          "min" : 8.156269809E9,
          "sum" : 8.156269809E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.247114357E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.247114357E9,
          "min" : 8.247114357E9,
          "sum" : 8.247114357E9,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 8.143560569E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.143560569E9,
          "min" : 8.143560569E9,
          "sum" : 8.143560569E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.100937414E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.100937414E9,
          "min" : 8.100937414E9,
          "sum" : 8.100937414E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.088999515E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.088999515E9,
          "min" : 8.088999515E9,
          "sum" : 8.088999515E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.178718579E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.178718579E9,
          "min" : 8.178718579E9,
          "sum" : 8.178718579E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.130063922E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.130063922E9,
          "min" : 8.130063922E9,
          "sum" : 8.130063922E9,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 8.133757457E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.133757457E9,
          "min" : 8.133757457E9,
          "sum" : 8.133757457E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.139482437E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.139482437E9,
          "min" : 8.139482437E9,
          "sum" : 8.139482437E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.140674871E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.140674871E9,
          "min" : 8.140674871E9,
          "sum" : 8.140674871E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.241354791E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.241354791E9,
          "min" : 8.241354791E9,
          "sum" : 8.241354791E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.184871275E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.184871275E9,
          "min" : 8.184871275E9,
          "sum" : 8.184871275E9,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 8.375504298E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.375504298E9,
          "min" : 8.375504298E9,
          "sum" : 8.375504298E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.365691006E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.365691006E9,
          "min" : 8.365691006E9,
          "sum" : 8.365691006E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.373630673E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.373630673E9,
          "min" : 8.373630673E9,
          "sum" : 8.373630673E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.371438314E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.371438314E9,
          "min" : 8.371438314E9,
          "sum" : 8.371438314E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.410332817E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.410332817E9,
          "min" : 8.410332817E9,
          "sum" : 8.410332817E9,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 8.188085753E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.188085753E9,
          "min" : 8.188085753E9,
          "sum" : 8.188085753E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.256971204E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.256971204E9,
          "min" : 8.256971204E9,
          "sum" : 8.256971204E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.232067906E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.232067906E9,
          "min" : 8.232067906E9,
          "sum" : 8.232067906E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.213287709E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.213287709E9,
          "min" : 8.213287709E9,
          "sum" : 8.213287709E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.203854489E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.203854489E9,
          "min" : 8.203854489E9,
          "sum" : 8.203854489E9,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 9.097928316E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.097928316E9,
          "min" : 9.097928316E9,
          "sum" : 9.097928316E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.181116911E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.181116911E9,
          "min" : 9.181116911E9,
          "sum" : 9.181116911E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.137717857E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.137717857E9,
          "min" : 9.137717857E9,
          "sum" : 9.137717857E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.095337766E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.095337766E9,
          "min" : 9.095337766E9,
          "sum" : 9.095337766E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 9.11957593E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 9.11957593E9,
          "min" : 9.11957593E9,
          "sum" : 9.11957593E9,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 8.355386188E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.355386188E9,
          "min" : 8.355386188E9,
          "sum" : 8.355386188E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.412027571E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.412027571E9,
          "min" : 8.412027571E9,
          "sum" : 8.412027571E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.393195522E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.393195522E9,
          "min" : 8.393195522E9,
          "sum" : 8.393195522E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.360972E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.360972E9,
          "min" : 8.360972E9,
          "sum" : 8.360972E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.390026476E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.390026476E9,
          "min" : 8.390026476E9,
          "sum" : 8.390026476E9,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 8.271042673E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.271042673E9,
          "min" : 8.271042673E9,
          "sum" : 8.271042673E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.246883164E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.246883164E9,
          "min" : 8.246883164E9,
          "sum" : 8.246883164E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.327772313E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.327772313E9,
          "min" : 8.327772313E9,
          "sum" : 8.327772313E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.223478239E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.223478239E9,
          "min" : 8.223478239E9,
          "sum" : 8.223478239E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.270804253E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.270804253E9,
          "min" : 8.270804253E9,
          "sum" : 8.270804253E9,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 8.209128741E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.209128741E9,
          "min" : 8.209128741E9,
          "sum" : 8.209128741E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.280641973E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.280641973E9,
          "min" : 8.280641973E9,
          "sum" : 8.280641973E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.286308309E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.286308309E9,
          "min" : 8.286308309E9,
          "sum" : 8.286308309E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.266492259E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.266492259E9,
          "min" : 8.266492259E9,
          "sum" : 8.266492259E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.297283657E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.297283657E9,
          "min" : 8.297283657E9,
          "sum" : 8.297283657E9,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 8.222912654E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.222912654E9,
          "min" : 8.222912654E9,
          "sum" : 8.222912654E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.143836104E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.143836104E9,
          "min" : 8.143836104E9,
          "sum" : 8.143836104E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.241189134E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.241189134E9,
          "min" : 8.241189134E9,
          "sum" : 8.241189134E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.172109416E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.172109416E9,
          "min" : 8.172109416E9,
          "sum" : 8.172109416E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.174248045E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.174248045E9,
          "min" : 8.174248045E9,
          "sum" : 8.174248045E9,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 8.198087744E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.198087744E9,
          "min" : 8.198087744E9,
          "sum" : 8.198087744E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.21815665E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.21815665E9,
          "min" : 8.21815665E9,
          "sum" : 8.21815665E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.226691266E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.226691266E9,
          "min" : 8.226691266E9,
          "sum" : 8.226691266E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.207057714E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.207057714E9,
          "min" : 8.207057714E9,
          "sum" : 8.207057714E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.284415651E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.284415651E9,
          "min" : 8.284415651E9,
          "sum" : 8.284415651E9,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 8.218793445E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.218793445E9,
          "min" : 8.218793445E9,
          "sum" : 8.218793445E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.219543095E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.219543095E9,
          "min" : 8.219543095E9,
          "sum" : 8.219543095E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.242663506E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.242663506E9,
          "min" : 8.242663506E9,
          "sum" : 8.242663506E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.25499917E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.25499917E9,
          "min" : 8.25499917E9,
          "sum" : 8.25499917E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.194616067E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.194616067E9,
          "min" : 8.194616067E9,
          "sum" : 8.194616067E9,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 8.140933702E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.140933702E9,
          "min" : 8.140933702E9,
          "sum" : 8.140933702E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.162288074E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.162288074E9,
          "min" : 8.162288074E9,
          "sum" : 8.162288074E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.186899323E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.186899323E9,
          "min" : 8.186899323E9,
          "sum" : 8.186899323E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.163479737E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.163479737E9,
          "min" : 8.163479737E9,
          "sum" : 8.163479737E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.151018207E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.151018207E9,
          "min" : 8.151018207E9,
          "sum" : 8.151018207E9,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 8.182329419E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.182329419E9,
          "min" : 8.182329419E9,
          "sum" : 8.182329419E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.261752387E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.261752387E9,
          "min" : 8.261752387E9,
          "sum" : 8.261752387E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.273518445E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.273518445E9,
          "min" : 8.273518445E9,
          "sum" : 8.273518445E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.158709678E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.158709678E9,
          "min" : 8.158709678E9,
          "sum" : 8.158709678E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.216332342E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.216332342E9,
          "min" : 8.216332342E9,
          "sum" : 8.216332342E9,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 8.314006141E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.314006141E9,
          "min" : 8.314006141E9,
          "sum" : 8.314006141E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.37081387E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.37081387E9,
          "min" : 8.37081387E9,
          "sum" : 8.37081387E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.311037501E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.311037501E9,
          "min" : 8.311037501E9,
          "sum" : 8.311037501E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.328383973E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.328383973E9,
          "min" : 8.328383973E9,
          "sum" : 8.328383973E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.334313337E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.334313337E9,
          "min" : 8.334313337E9,
          "sum" : 8.334313337E9,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 8.406176147E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.406176147E9,
          "min" : 8.406176147E9,
          "sum" : 8.406176147E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.397097953E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.397097953E9,
          "min" : 8.397097953E9,
          "sum" : 8.397097953E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.421192656E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.421192656E9,
          "min" : 8.421192656E9,
          "sum" : 8.421192656E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.373809354E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.373809354E9,
          "min" : 8.373809354E9,
          "sum" : 8.373809354E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 8.454587032E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.454587032E9,
          "min" : 8.454587032E9,
          "sum" : 8.454587032E9,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 6.129790532E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.129790532E9,
          "min" : 6.129790532E9,
          "sum" : 6.129790532E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.076604246E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.076604246E9,
          "min" : 6.076604246E9,
          "sum" : 6.076604246E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.162388964E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.162388964E9,
          "min" : 6.162388964E9,
          "sum" : 6.162388964E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.116598065E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.116598065E9,
          "min" : 6.116598065E9,
          "sum" : 6.116598065E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.122190135E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.122190135E9,
          "min" : 6.122190135E9,
          "sum" : 6.122190135E9,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 6.113659792E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.113659792E9,
          "min" : 6.113659792E9,
          "sum" : 6.113659792E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.080374347E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.080374347E9,
          "min" : 6.080374347E9,
          "sum" : 6.080374347E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.155044123E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.155044123E9,
          "min" : 6.155044123E9,
          "sum" : 6.155044123E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.100840067E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.100840067E9,
          "min" : 6.100840067E9,
          "sum" : 6.100840067E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.088071912E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.088071912E9,
          "min" : 6.088071912E9,
          "sum" : 6.088071912E9,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 6.107927363E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.107927363E9,
          "min" : 6.107927363E9,
          "sum" : 6.107927363E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.10691934E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.10691934E9,
          "min" : 6.10691934E9,
          "sum" : 6.10691934E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.139385749E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.139385749E9,
          "min" : 6.139385749E9,
          "sum" : 6.139385749E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.09599493E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.09599493E9,
          "min" : 6.09599493E9,
          "sum" : 6.09599493E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.118425782E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.118425782E9,
          "min" : 6.118425782E9,
          "sum" : 6.118425782E9,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 6.066745769E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.066745769E9,
          "min" : 6.066745769E9,
          "sum" : 6.066745769E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.07877868E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.07877868E9,
          "min" : 6.07877868E9,
          "sum" : 6.07877868E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.116638612E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.116638612E9,
          "min" : 6.116638612E9,
          "sum" : 6.116638612E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.083617203E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.083617203E9,
          "min" : 6.083617203E9,
          "sum" : 6.083617203E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.086335308E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.086335308E9,
          "min" : 6.086335308E9,
          "sum" : 6.086335308E9,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 6.13711023E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.13711023E9,
          "min" : 6.13711023E9,
          "sum" : 6.13711023E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.117613678E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.117613678E9,
          "min" : 6.117613678E9,
          "sum" : 6.117613678E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.097726623E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.097726623E9,
          "min" : 6.097726623E9,
          "sum" : 6.097726623E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.070989205E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.070989205E9,
          "min" : 6.070989205E9,
          "sum" : 6.070989205E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.133812264E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.133812264E9,
          "min" : 6.133812264E9,
          "sum" : 6.133812264E9,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 6.074867464E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.074867464E9,
          "min" : 6.074867464E9,
          "sum" : 6.074867464E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.058804216E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.058804216E9,
          "min" : 6.058804216E9,
          "sum" : 6.058804216E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.12920022E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.12920022E9,
          "min" : 6.12920022E9,
          "sum" : 6.12920022E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.092942053E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.092942053E9,
          "min" : 6.092942053E9,
          "sum" : 6.092942053E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.072197899E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.072197899E9,
          "min" : 6.072197899E9,
          "sum" : 6.072197899E9,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 6.107802378E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.107802378E9,
          "min" : 6.107802378E9,
          "sum" : 6.107802378E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.085582853E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.085582853E9,
          "min" : 6.085582853E9,
          "sum" : 6.085582853E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.114462033E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.114462033E9,
          "min" : 6.114462033E9,
          "sum" : 6.114462033E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.119974931E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.119974931E9,
          "min" : 6.119974931E9,
          "sum" : 6.119974931E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.159539722E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.159539722E9,
          "min" : 6.159539722E9,
          "sum" : 6.159539722E9,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 6.128617878E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.128617878E9,
          "min" : 6.128617878E9,
          "sum" : 6.128617878E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.094074456E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.094074456E9,
          "min" : 6.094074456E9,
          "sum" : 6.094074456E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.123261029E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.123261029E9,
          "min" : 6.123261029E9,
          "sum" : 6.123261029E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.127324162E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.127324162E9,
          "min" : 6.127324162E9,
          "sum" : 6.127324162E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.1213648E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.1213648E9,
          "min" : 6.1213648E9,
          "sum" : 6.1213648E9,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 6.115941455E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.115941455E9,
          "min" : 6.115941455E9,
          "sum" : 6.115941455E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.109388641E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.109388641E9,
          "min" : 6.109388641E9,
          "sum" : 6.109388641E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.145488027E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.145488027E9,
          "min" : 6.145488027E9,
          "sum" : 6.145488027E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.099810776E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.099810776E9,
          "min" : 6.099810776E9,
          "sum" : 6.099810776E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.150494796E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.150494796E9,
          "min" : 6.150494796E9,
          "sum" : 6.150494796E9,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 6.061926612E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.061926612E9,
          "min" : 6.061926612E9,
          "sum" : 6.061926612E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.054781579E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.054781579E9,
          "min" : 6.054781579E9,
          "sum" : 6.054781579E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.041599243E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.041599243E9,
          "min" : 6.041599243E9,
          "sum" : 6.041599243E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.062937535E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.062937535E9,
          "min" : 6.062937535E9,
          "sum" : 6.062937535E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.121893968E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.121893968E9,
          "min" : 6.121893968E9,
          "sum" : 6.121893968E9,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 6.139018983E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.139018983E9,
          "min" : 6.139018983E9,
          "sum" : 6.139018983E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.128217328E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.128217328E9,
          "min" : 6.128217328E9,
          "sum" : 6.128217328E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.16150505E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.16150505E9,
          "min" : 6.16150505E9,
          "sum" : 6.16150505E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.115595997E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.115595997E9,
          "min" : 6.115595997E9,
          "sum" : 6.115595997E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.183619833E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.183619833E9,
          "min" : 6.183619833E9,
          "sum" : 6.183619833E9,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 6.093881342E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.093881342E9,
          "min" : 6.093881342E9,
          "sum" : 6.093881342E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.111784597E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.111784597E9,
          "min" : 6.111784597E9,
          "sum" : 6.111784597E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.108341272E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.108341272E9,
          "min" : 6.108341272E9,
          "sum" : 6.108341272E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.092220261E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.092220261E9,
          "min" : 6.092220261E9,
          "sum" : 6.092220261E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.115053952E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.115053952E9,
          "min" : 6.115053952E9,
          "sum" : 6.115053952E9,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 6.102360295E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.102360295E9,
          "min" : 6.102360295E9,
          "sum" : 6.102360295E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.155967382E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.155967382E9,
          "min" : 6.155967382E9,
          "sum" : 6.155967382E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.16684347E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.16684347E9,
          "min" : 6.16684347E9,
          "sum" : 6.16684347E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.112934366E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.112934366E9,
          "min" : 6.112934366E9,
          "sum" : 6.112934366E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.145021045E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.145021045E9,
          "min" : 6.145021045E9,
          "sum" : 6.145021045E9,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 6.053878073E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.053878073E9,
          "min" : 6.053878073E9,
          "sum" : 6.053878073E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.012542667E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.012542667E9,
          "min" : 6.012542667E9,
          "sum" : 6.012542667E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.04808026E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.04808026E9,
          "min" : 6.04808026E9,
          "sum" : 6.04808026E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.053714584E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.053714584E9,
          "min" : 6.053714584E9,
          "sum" : 6.053714584E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.049491349E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.049491349E9,
          "min" : 6.049491349E9,
          "sum" : 6.049491349E9,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 6.163380575E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.163380575E9,
          "min" : 6.163380575E9,
          "sum" : 6.163380575E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.128327676E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.128327676E9,
          "min" : 6.128327676E9,
          "sum" : 6.128327676E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.130623744E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.130623744E9,
          "min" : 6.130623744E9,
          "sum" : 6.130623744E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.121549321E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.121549321E9,
          "min" : 6.121549321E9,
          "sum" : 6.121549321E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.11785254E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.11785254E9,
          "min" : 6.11785254E9,
          "sum" : 6.11785254E9,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 6.124114548E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.124114548E9,
          "min" : 6.124114548E9,
          "sum" : 6.124114548E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.134602961E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.134602961E9,
          "min" : 6.134602961E9,
          "sum" : 6.134602961E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.16245652E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.16245652E9,
          "min" : 6.16245652E9,
          "sum" : 6.16245652E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.074375281E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.074375281E9,
          "min" : 6.074375281E9,
          "sum" : 6.074375281E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.149008009E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.149008009E9,
          "min" : 6.149008009E9,
          "sum" : 6.149008009E9,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 6.094129103E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.094129103E9,
          "min" : 6.094129103E9,
          "sum" : 6.094129103E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.086588192E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.086588192E9,
          "min" : 6.086588192E9,
          "sum" : 6.086588192E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.109497866E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.109497866E9,
          "min" : 6.109497866E9,
          "sum" : 6.109497866E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.067209119E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.067209119E9,
          "min" : 6.067209119E9,
          "sum" : 6.067209119E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.094187698E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.094187698E9,
          "min" : 6.094187698E9,
          "sum" : 6.094187698E9,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 6.234012878E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.234012878E9,
          "min" : 6.234012878E9,
          "sum" : 6.234012878E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.255287929E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.255287929E9,
          "min" : 6.255287929E9,
          "sum" : 6.255287929E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.260333755E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.260333755E9,
          "min" : 6.260333755E9,
          "sum" : 6.260333755E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.136663084E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.136663084E9,
          "min" : 6.136663084E9,
          "sum" : 6.136663084E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.240994031E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.240994031E9,
          "min" : 6.240994031E9,
          "sum" : 6.240994031E9,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 6.114895837E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.114895837E9,
          "min" : 6.114895837E9,
          "sum" : 6.114895837E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.11006245E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.11006245E9,
          "min" : 6.11006245E9,
          "sum" : 6.11006245E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.171748409E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.171748409E9,
          "min" : 6.171748409E9,
          "sum" : 6.171748409E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.115798476E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.115798476E9,
          "min" : 6.115798476E9,
          "sum" : 6.115798476E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.105341156E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.105341156E9,
          "min" : 6.105341156E9,
          "sum" : 6.105341156E9,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 6.095120819E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.095120819E9,
          "min" : 6.095120819E9,
          "sum" : 6.095120819E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.099429551E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.099429551E9,
          "min" : 6.099429551E9,
          "sum" : 6.099429551E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.137628816E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.137628816E9,
          "min" : 6.137628816E9,
          "sum" : 6.137628816E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.088464379E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.088464379E9,
          "min" : 6.088464379E9,
          "sum" : 6.088464379E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.10436509E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.10436509E9,
          "min" : 6.10436509E9,
          "sum" : 6.10436509E9,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 6.037693755E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.037693755E9,
          "min" : 6.037693755E9,
          "sum" : 6.037693755E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.038126741E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.038126741E9,
          "min" : 6.038126741E9,
          "sum" : 6.038126741E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.101064999E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.101064999E9,
          "min" : 6.101064999E9,
          "sum" : 6.101064999E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.057940314E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.057940314E9,
          "min" : 6.057940314E9,
          "sum" : 6.057940314E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.053345841E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.053345841E9,
          "min" : 6.053345841E9,
          "sum" : 6.053345841E9,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 6.073375893E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.073375893E9,
          "min" : 6.073375893E9,
          "sum" : 6.073375893E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.100016383E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.100016383E9,
          "min" : 6.100016383E9,
          "sum" : 6.100016383E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.111023391E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.111023391E9,
          "min" : 6.111023391E9,
          "sum" : 6.111023391E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.089709492E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.089709492E9,
          "min" : 6.089709492E9,
          "sum" : 6.089709492E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.145415732E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.145415732E9,
          "min" : 6.145415732E9,
          "sum" : 6.145415732E9,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 6.176072627E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.176072627E9,
          "min" : 6.176072627E9,
          "sum" : 6.176072627E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.189607642E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.189607642E9,
          "min" : 6.189607642E9,
          "sum" : 6.189607642E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.189429914E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.189429914E9,
          "min" : 6.189429914E9,
          "sum" : 6.189429914E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.142835268E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.142835268E9,
          "min" : 6.142835268E9,
          "sum" : 6.142835268E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.156242306E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.156242306E9,
          "min" : 6.156242306E9,
          "sum" : 6.156242306E9,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 6.117208871E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.117208871E9,
          "min" : 6.117208871E9,
          "sum" : 6.117208871E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.075375424E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.075375424E9,
          "min" : 6.075375424E9,
          "sum" : 6.075375424E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.106306193E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.106306193E9,
          "min" : 6.106306193E9,
          "sum" : 6.106306193E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.094813199E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.094813199E9,
          "min" : 6.094813199E9,
          "sum" : 6.094813199E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.136504313E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.136504313E9,
          "min" : 6.136504313E9,
          "sum" : 6.136504313E9,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 6.157609741E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.157609741E9,
          "min" : 6.157609741E9,
          "sum" : 6.157609741E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.15005483E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.15005483E9,
          "min" : 6.15005483E9,
          "sum" : 6.15005483E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.185157254E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.185157254E9,
          "min" : 6.185157254E9,
          "sum" : 6.185157254E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.158416873E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.158416873E9,
          "min" : 6.158416873E9,
          "sum" : 6.158416873E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.177590636E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.177590636E9,
          "min" : 6.177590636E9,
          "sum" : 6.177590636E9,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 6.140869458E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.140869458E9,
          "min" : 6.140869458E9,
          "sum" : 6.140869458E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.127815375E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.127815375E9,
          "min" : 6.127815375E9,
          "sum" : 6.127815375E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.136141369E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.136141369E9,
          "min" : 6.136141369E9,
          "sum" : 6.136141369E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.12581365E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.12581365E9,
          "min" : 6.12581365E9,
          "sum" : 6.12581365E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.128903283E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.128903283E9,
          "min" : 6.128903283E9,
          "sum" : 6.128903283E9,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 6.119407572E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.119407572E9,
          "min" : 6.119407572E9,
          "sum" : 6.119407572E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.112592863E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.112592863E9,
          "min" : 6.112592863E9,
          "sum" : 6.112592863E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.153337478E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.153337478E9,
          "min" : 6.153337478E9,
          "sum" : 6.153337478E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.128769448E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.128769448E9,
          "min" : 6.128769448E9,
          "sum" : 6.128769448E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.110824287E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.110824287E9,
          "min" : 6.110824287E9,
          "sum" : 6.110824287E9,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 6.095855854E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.095855854E9,
          "min" : 6.095855854E9,
          "sum" : 6.095855854E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.080399168E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.080399168E9,
          "min" : 6.080399168E9,
          "sum" : 6.080399168E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.089843539E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.089843539E9,
          "min" : 6.089843539E9,
          "sum" : 6.089843539E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.07400591E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.07400591E9,
          "min" : 6.07400591E9,
          "sum" : 6.07400591E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.062481464E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.062481464E9,
          "min" : 6.062481464E9,
          "sum" : 6.062481464E9,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 6.077767189E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.077767189E9,
          "min" : 6.077767189E9,
          "sum" : 6.077767189E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.064105162E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.064105162E9,
          "min" : 6.064105162E9,
          "sum" : 6.064105162E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.126519476E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.126519476E9,
          "min" : 6.126519476E9,
          "sum" : 6.126519476E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.067164089E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.067164089E9,
          "min" : 6.067164089E9,
          "sum" : 6.067164089E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.071580866E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.071580866E9,
          "min" : 6.071580866E9,
          "sum" : 6.071580866E9,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 6.072624064E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.072624064E9,
          "min" : 6.072624064E9,
          "sum" : 6.072624064E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.038629322E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.038629322E9,
          "min" : 6.038629322E9,
          "sum" : 6.038629322E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.100798127E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.100798127E9,
          "min" : 6.100798127E9,
          "sum" : 6.100798127E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.070748748E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.070748748E9,
          "min" : 6.070748748E9,
          "sum" : 6.070748748E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.07955409E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.07955409E9,
          "min" : 6.07955409E9,
          "sum" : 6.07955409E9,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "children" : [ ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 259},
   width = 820- margin.right - margin.left,
   height = 105 - margin.top - margin.bottom;
var kopemeData = [
{
  "call" : "overall",
  "kiekerPattern" : "public overall.overall()",
  "otherKiekerPattern" : "public overall.overall()",
  "name" : null,
  "key" : "overall.overall_",
  "otherKey" : "overall.overall_",
  "parent" : null,
  "color" : null,
  "statistic" : {
    "meanOld" : 3879636.9094416667,
    "meanCurrent" : 5152560.955829167,
    "deviationOld" : 21147.493726459576,
    "deviationCurrent" : 161236.42265014016,
    "vms" : 30,
    "callsOld" : 300,
    "calls" : 300,
    "tvalue" : -42.87422228341872,
    "mannWhitneyUStatistic" : 2.8719490663203402E-11
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 5059080.1256875, 5052164.5486875, 5118558.174375, 5215190.4266875, 5075200.125125, 5051617.314875, 5118016.087625001, 5058489.477562499, 5104150.7965, 5155571.8118125005, 5196918.7750625, 5059238.379312499, 5182978.3435, 5327275.4214375, 5124501.757125, 5093825.845625001, 5049656.4825625, 5025106.225374999, 5098476.7223125, 5093686.06175, 5089893.3748125, 5154277.8350625, 5102770.5746875, 5699751.1426874995, 5123093.159187499, 5099696.90025, 5101472.458500001, 5198713.6081875, 5049843.49725, 5697613.221250001 ],
  "valuesPredecessor" : [ 3882775.4745624997, 3880983.5103125, 3879447.63175, 3893732.0799375, 3837430.5742499996, 3914890.2446250003, 3866722.017125, 3858909.8664374994, 3877739.6701249997, 3857787.9724375005, 3884742.0185625, 3863569.2224374996, 3941845.3372500003, 3887502.3827500003, 3871537.6538125, 3890362.8306875, 3875916.5841874997, 3887753.30625, 3861588.27875, 3846542.268625, 3912589.3040625, 3874724.2310625, 3891946.2098125, 3908244.6764374995, 3862346.3275625, 3873999.1962500005, 3878236.17675, 3877395.5378749995, 3885693.1290625, 3862153.5695000007 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 5266112.62125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5266112.62125,
        "min" : 5266112.62125,
        "sum" : 8.425780194E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4750355.7,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4750355.7,
        "min" : 4750355.7,
        "sum" : 7.60056912E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4615893.195,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4615893.195,
        "min" : 4615893.195,
        "sum" : 7.385429112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4981080.6025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4981080.6025,
        "min" : 4981080.6025,
        "sum" : 7.969728964E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5181460.7425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5181460.7425,
        "min" : 5181460.7425,
        "sum" : 8.290337188E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5153941.33375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5153941.33375,
        "min" : 5153941.33375,
        "sum" : 8.246306134E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5179850.85125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5179850.85125,
        "min" : 5179850.85125,
        "sum" : 8.287761362E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5131542.639375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5131542.639375,
        "min" : 5131542.639375,
        "sum" : 8.210468223E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5130176.904375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5130176.904375,
        "min" : 5130176.904375,
        "sum" : 8.208283047E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5108020.3825,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5108020.3825,
        "min" : 5108020.3825,
        "sum" : 8.172832612E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 5275604.595625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5275604.595625,
        "min" : 5275604.595625,
        "sum" : 8.440967353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4837834.07875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4837834.07875,
        "min" : 4837834.07875,
        "sum" : 7.740534526000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4683680.29625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4683680.29625,
        "min" : 4683680.29625,
        "sum" : 7.493888473999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4729859.22625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4729859.22625,
        "min" : 4729859.22625,
        "sum" : 7.567774762E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5168577.066875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5168577.066875,
        "min" : 5168577.066875,
        "sum" : 8.269723306999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5200872.220625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5200872.220625,
        "min" : 5200872.220625,
        "sum" : 8.321395553E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5146356.37125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5146356.37125,
        "min" : 5146356.37125,
        "sum" : 8.234170194E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5171853.3775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5171853.3775,
        "min" : 5171853.3775,
        "sum" : 8.274965404000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5153930.6175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5153930.6175,
        "min" : 5153930.6175,
        "sum" : 8.246288988E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5147605.298125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5147605.298125,
        "min" : 5147605.298125,
        "sum" : 8.236168477E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 5162337.4225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5162337.4225,
        "min" : 5162337.4225,
        "sum" : 8.259739876000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4710247.833125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4710247.833125,
        "min" : 4710247.833125,
        "sum" : 7.536396533E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4627838.599375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4627838.599375,
        "min" : 4627838.599375,
        "sum" : 7.404541759E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5179670.285,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5179670.285,
        "min" : 5179670.285,
        "sum" : 8.287472456E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5191137.874375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5191137.874375,
        "min" : 5191137.874375,
        "sum" : 8.305820598999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5271136.748125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5271136.748125,
        "min" : 5271136.748125,
        "sum" : 8.433818797E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5226715.26,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5226715.26,
        "min" : 5226715.26,
        "sum" : 8.362744416E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5242199.879375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5242199.879375,
        "min" : 5242199.879375,
        "sum" : 8.387519806999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5213491.81375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5213491.81375,
        "min" : 5213491.81375,
        "sum" : 8.341586902E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5216732.249375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5216732.249375,
        "min" : 5216732.249375,
        "sum" : 8.346771598999999E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 5205243.145,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5205243.145,
        "min" : 5205243.145,
        "sum" : 8.328389031999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4710073.948125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4710073.948125,
        "min" : 4710073.948125,
        "sum" : 7.536118317E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4631917.701875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4631917.701875,
        "min" : 4631917.701875,
        "sum" : 7.411068323E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5057383.338125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5057383.338125,
        "min" : 5057383.338125,
        "sum" : 8.091813341E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5204574.775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5204574.775,
        "min" : 5204574.775,
        "sum" : 8.327319640000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5205923.1125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5205923.1125,
        "min" : 5205923.1125,
        "sum" : 8.32947698E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5259331.634375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5259331.634375,
        "min" : 5259331.634375,
        "sum" : 8.414930615000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5190995.77625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5190995.77625,
        "min" : 5190995.77625,
        "sum" : 8.305593242E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5210759.19875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5210759.19875,
        "min" : 5210759.19875,
        "sum" : 8.337214718000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5260657.9875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5260657.9875,
        "min" : 5260657.9875,
        "sum" : 8.41705278E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 5225781.16625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5225781.16625,
        "min" : 5225781.16625,
        "sum" : 8.361249866E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4708516.850625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4708516.850625,
        "min" : 4708516.850625,
        "sum" : 7.533626961E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4670566.87,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4670566.87,
        "min" : 4670566.87,
        "sum" : 7.472906992E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4947154.308125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4947154.308125,
        "min" : 4947154.308125,
        "sum" : 7.915446893000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5130104.150625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5130104.150625,
        "min" : 5130104.150625,
        "sum" : 8.208166641E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5177467.70625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5177467.70625,
        "min" : 5177467.70625,
        "sum" : 8.28394833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5162556.888125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5162556.888125,
        "min" : 5162556.888125,
        "sum" : 8.260091020999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5162735.465625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5162735.465625,
        "min" : 5162735.465625,
        "sum" : 8.260376745E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5160311.84875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5160311.84875,
        "min" : 5160311.84875,
        "sum" : 8.256498958E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5176450.2325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5176450.2325,
        "min" : 5176450.2325,
        "sum" : 8.282320372E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 5220018.98875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5220018.98875,
        "min" : 5220018.98875,
        "sum" : 8.352030381999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4692236.62875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4692236.62875,
        "min" : 4692236.62875,
        "sum" : 7.507578606E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4784479.70125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4784479.70125,
        "min" : 4784479.70125,
        "sum" : 7.655167522E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5305708.613125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5305708.613125,
        "min" : 5305708.613125,
        "sum" : 8.489133781E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5293171.92875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5293171.92875,
        "min" : 5293171.92875,
        "sum" : 8.469075086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5302209.975625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5302209.975625,
        "min" : 5302209.975625,
        "sum" : 8.483535961E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5283423.048125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5283423.048125,
        "min" : 5283423.048125,
        "sum" : 8.453476877E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5300857.666875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5300857.666875,
        "min" : 5300857.666875,
        "sum" : 8.481372267E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5349591.12,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5349591.12,
        "min" : 5349591.12,
        "sum" : 8.559345792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5298085.76375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5298085.76375,
        "min" : 5298085.76375,
        "sum" : 8.476937222E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 5214784.04375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5214784.04375,
        "min" : 5214784.04375,
        "sum" : 8.34365447E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4787339.50375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4787339.50375,
        "min" : 4787339.50375,
        "sum" : 7.659743206E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4644460.965625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4644460.965625,
        "min" : 4644460.965625,
        "sum" : 7.431137545E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4993212.10125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4993212.10125,
        "min" : 4993212.10125,
        "sum" : 7.989139362E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5204000.199375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5204000.199375,
        "min" : 5204000.199375,
        "sum" : 8.326400319E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5234873.44,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5234873.44,
        "min" : 5234873.44,
        "sum" : 8.375797504000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5247372.189375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5247372.189375,
        "min" : 5247372.189375,
        "sum" : 8.395795503E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5205998.8825,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5205998.8825,
        "min" : 5205998.8825,
        "sum" : 8.329598212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5212853.225625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5212853.225625,
        "min" : 5212853.225625,
        "sum" : 8.340565161E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5239872.671875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5239872.671875,
        "min" : 5239872.671875,
        "sum" : 8.383796275E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 5233143.38375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5233143.38375,
        "min" : 5233143.38375,
        "sum" : 8.373029414E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5285052.771875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5285052.771875,
        "min" : 5285052.771875,
        "sum" : 8.456084434999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5796975.549375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5796975.549375,
        "min" : 5796975.549375,
        "sum" : 9.275160879E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5824133.75375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5824133.75375,
        "min" : 5824133.75375,
        "sum" : 9.318614006E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5851322.993125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5851322.993125,
        "min" : 5851322.993125,
        "sum" : 9.362116789E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5896700.986875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5896700.986875,
        "min" : 5896700.986875,
        "sum" : 9.434721579E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5776372.96375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5776372.96375,
        "min" : 5776372.96375,
        "sum" : 9.242196742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5761690.635625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5761690.635625,
        "min" : 5761690.635625,
        "sum" : 9.218705017E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5777041.3575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5777041.3575,
        "min" : 5777041.3575,
        "sum" : 9.243266172E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5773697.816875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5773697.816875,
        "min" : 5773697.816875,
        "sum" : 9.237916507E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 5192553.765,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5192553.765,
        "min" : 5192553.765,
        "sum" : 8.308086023999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4730763.350625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4730763.350625,
        "min" : 4730763.350625,
        "sum" : 7.569221361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4601516.603125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4601516.603125,
        "min" : 4601516.603125,
        "sum" : 7.362426565000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5159277.27,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5159277.27,
        "min" : 5159277.27,
        "sum" : 8.254843631999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5230711.98625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5230711.98625,
        "min" : 5230711.98625,
        "sum" : 8.369139178E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5258028.62,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5258028.62,
        "min" : 5258028.62,
        "sum" : 8.412845792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5197987.220625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5197987.220625,
        "min" : 5197987.220625,
        "sum" : 8.316779553E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5225545.73375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5225545.73375,
        "min" : 5225545.73375,
        "sum" : 8.360873173999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5208470.1275,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5208470.1275,
        "min" : 5208470.1275,
        "sum" : 8.333552204000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5222851.07,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5222851.07,
        "min" : 5222851.07,
        "sum" : 8.356561712E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 5232069.436875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5232069.436875,
        "min" : 5232069.436875,
        "sum" : 8.371311098999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4729408.2225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4729408.2225,
        "min" : 4729408.2225,
        "sum" : 7.567053156E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4671841.355625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4671841.355625,
        "min" : 4671841.355625,
        "sum" : 7.474946169E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5066282.83,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5066282.83,
        "min" : 5066282.83,
        "sum" : 8.106052528E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5210903.8225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5210903.8225,
        "min" : 5210903.8225,
        "sum" : 8.337446116E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5209673.748125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5209673.748125,
        "min" : 5209673.748125,
        "sum" : 8.335477997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5222247.290625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5222247.290625,
        "min" : 5222247.290625,
        "sum" : 8.355595665000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5221579.273125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5221579.273125,
        "min" : 5221579.273125,
        "sum" : 8.354526837E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5209940.924375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5209940.924375,
        "min" : 5209940.924375,
        "sum" : 8.335905479000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5223022.09875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5223022.09875,
        "min" : 5223022.09875,
        "sum" : 8.356835358E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 5254817.099375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5254817.099375,
        "min" : 5254817.099375,
        "sum" : 8.407707359E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4762548.256875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4762548.256875,
        "min" : 4762548.256875,
        "sum" : 7.620077211E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4685021.745,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4685021.745,
        "min" : 4685021.745,
        "sum" : 7.496034792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4857491.925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4857491.925,
        "min" : 4857491.925,
        "sum" : 7.77198708E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5167691.863125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5167691.863125,
        "min" : 5167691.863125,
        "sum" : 8.268306981E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5181379.725625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5181379.725625,
        "min" : 5181379.725625,
        "sum" : 8.290207561E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5222578.5825,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5222578.5825,
        "min" : 5222578.5825,
        "sum" : 8.356125731999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5186748.474375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5186748.474375,
        "min" : 5186748.474375,
        "sum" : 8.298797559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5213820.535625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5213820.535625,
        "min" : 5213820.535625,
        "sum" : 8.342112856999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5219903.04375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5219903.04375,
        "min" : 5219903.04375,
        "sum" : 8.35184487E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 5309364.576875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5309364.576875,
        "min" : 5309364.576875,
        "sum" : 8.494983323E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4747252.97125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4747252.97125,
        "min" : 4747252.97125,
        "sum" : 7.595604754000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4700901.524375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4700901.524375,
        "min" : 4700901.524375,
        "sum" : 7.521442439E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5116609.76625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5116609.76625,
        "min" : 5116609.76625,
        "sum" : 8.186575626000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5264698.891875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5264698.891875,
        "min" : 5264698.891875,
        "sum" : 8.423518227E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5287380.886875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5287380.886875,
        "min" : 5287380.886875,
        "sum" : 8.459809419E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5278192.888125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5278192.888125,
        "min" : 5278192.888125,
        "sum" : 8.445108620999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5282411.79375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5282411.79375,
        "min" : 5282411.79375,
        "sum" : 8.45185887E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5254412.57625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5254412.57625,
        "min" : 5254412.57625,
        "sum" : 8.407060122E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5314492.2425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5314492.2425,
        "min" : 5314492.2425,
        "sum" : 8.503187588E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 5209229.0525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5209229.0525,
        "min" : 5209229.0525,
        "sum" : 8.334766484E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4731957.303125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4731957.303125,
        "min" : 4731957.303125,
        "sum" : 7.571131684999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5194498.278125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5194498.278125,
        "min" : 5194498.278125,
        "sum" : 8.311197245E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5484316.91625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5484316.91625,
        "min" : 5484316.91625,
        "sum" : 8.774907066E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5467283.088125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5467283.088125,
        "min" : 5467283.088125,
        "sum" : 8.747652941E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5435447.875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5435447.875,
        "min" : 5435447.875,
        "sum" : 8.6967166E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5449096.121875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5449096.121875,
        "min" : 5449096.121875,
        "sum" : 8.718553795E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5447052.328125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5447052.328125,
        "min" : 5447052.328125,
        "sum" : 8.715283725E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5428345.5975,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5428345.5975,
        "min" : 5428345.5975,
        "sum" : 8.685352956E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5425527.65375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5425527.65375,
        "min" : 5425527.65375,
        "sum" : 8.680844246E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 5147006.960625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5147006.960625,
        "min" : 5147006.960625,
        "sum" : 8.235211137E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4711224.410625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4711224.410625,
        "min" : 4711224.410625,
        "sum" : 7.537959056999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4624109.129375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4624109.129375,
        "min" : 4624109.129375,
        "sum" : 7.398574606999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4982067.840625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4982067.840625,
        "min" : 4982067.840625,
        "sum" : 7.971308545E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5175086.581875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5175086.581875,
        "min" : 5175086.581875,
        "sum" : 8.280138531E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5192163.220625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5192163.220625,
        "min" : 5192163.220625,
        "sum" : 8.307461153E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5202378.2775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5202378.2775,
        "min" : 5202378.2775,
        "sum" : 8.323805244E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5192078.2525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5192078.2525,
        "min" : 5192078.2525,
        "sum" : 8.307325204000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5157739.979375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5157739.979375,
        "min" : 5157739.979375,
        "sum" : 8.252383967E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5201040.1225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5201040.1225,
        "min" : 5201040.1225,
        "sum" : 8.321664195999999E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 5226703.740625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5226703.740625,
        "min" : 5226703.740625,
        "sum" : 8.362725984999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4717618.38,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4717618.38,
        "min" : 4717618.38,
        "sum" : 7.548189408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4658146.875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4658146.875,
        "min" : 4658146.875,
        "sum" : 7.453035E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5264232.929375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5264232.929375,
        "min" : 5264232.929375,
        "sum" : 8.422772687E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5239752.04125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5239752.04125,
        "min" : 5239752.04125,
        "sum" : 8.383603266E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5226806.055,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5226806.055,
        "min" : 5226806.055,
        "sum" : 8.362889688E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5252706.010625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5252706.010625,
        "min" : 5252706.010625,
        "sum" : 8.404329617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5164259.736875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5164259.736875,
        "min" : 5164259.736875,
        "sum" : 8.262815579000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5232427.444375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5232427.444375,
        "min" : 5232427.444375,
        "sum" : 8.371883911E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5262364.358125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5262364.358125,
        "min" : 5262364.358125,
        "sum" : 8.419782973E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 5256248.138125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5256248.138125,
        "min" : 5256248.138125,
        "sum" : 8.409997020999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4760853.2925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4760853.2925,
        "min" : 4760853.2925,
        "sum" : 7.617365268000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4684230.895625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4684230.895625,
        "min" : 4684230.895625,
        "sum" : 7.494769433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4643951.5375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4643951.5375,
        "min" : 4643951.5375,
        "sum" : 7.430322459999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5157664.189375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5157664.189375,
        "min" : 5157664.189375,
        "sum" : 8.252262703E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5139066.75625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5139066.75625,
        "min" : 5139066.75625,
        "sum" : 8.222506809999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5126721.09125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5126721.09125,
        "min" : 5126721.09125,
        "sum" : 8.202753745999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5179746.749375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5179746.749375,
        "min" : 5179746.749375,
        "sum" : 8.287594798999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5153010.41375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5153010.41375,
        "min" : 5153010.41375,
        "sum" : 8.244816662E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5149569.19,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5149569.19,
        "min" : 5149569.19,
        "sum" : 8.239310704000001E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 5207512.22125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5207512.22125,
        "min" : 5207512.22125,
        "sum" : 8.332019554000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4784676.72375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4784676.72375,
        "min" : 4784676.72375,
        "sum" : 7.655482758E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4708289.770625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4708289.770625,
        "min" : 4708289.770625,
        "sum" : 7.533263633E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4747865.60125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4747865.60125,
        "min" : 4747865.60125,
        "sum" : 7.596584962E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5147892.81625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5147892.81625,
        "min" : 5147892.81625,
        "sum" : 8.236628506E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5155830.91,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5155830.91,
        "min" : 5155830.91,
        "sum" : 8.249329456E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5155585.703125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5155585.703125,
        "min" : 5155585.703125,
        "sum" : 8.248937125E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5207836.485,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5207836.485,
        "min" : 5207836.485,
        "sum" : 8.332538376000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5188617.138125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5188617.138125,
        "min" : 5188617.138125,
        "sum" : 8.301787420999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5192457.45625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5192457.45625,
        "min" : 5192457.45625,
        "sum" : 8.30793193E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 5218248.434375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5218248.434375,
        "min" : 5218248.434375,
        "sum" : 8.349197495E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4765314.798125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4765314.798125,
        "min" : 4765314.798125,
        "sum" : 7.624503677E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4820304.3,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4820304.3,
        "min" : 4820304.3,
        "sum" : 7.71248688E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5286154.63375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5286154.63375,
        "min" : 5286154.63375,
        "sum" : 8.457847414E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5303170.645625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5303170.645625,
        "min" : 5303170.645625,
        "sum" : 8.485073033E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5314657.405,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5314657.405,
        "min" : 5314657.405,
        "sum" : 8.503451848E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5307892.273125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5307892.273125,
        "min" : 5307892.273125,
        "sum" : 8.492627637E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5315772.059375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5315772.059375,
        "min" : 5315772.059375,
        "sum" : 8.505235295E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5334575.981875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5334575.981875,
        "min" : 5334575.981875,
        "sum" : 8.535321570999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5321045.550625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5321045.550625,
        "min" : 5321045.550625,
        "sum" : 8.513672881E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 5289869.95625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5289869.95625,
        "min" : 5289869.95625,
        "sum" : 8.46379193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4705447.966875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4705447.966875,
        "min" : 4705447.966875,
        "sum" : 7.528716747E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4636287.46125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4636287.46125,
        "min" : 4636287.46125,
        "sum" : 7.418059938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4992596.289375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4992596.289375,
        "min" : 4992596.289375,
        "sum" : 7.988154063E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5190680.520625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5190680.520625,
        "min" : 5190680.520625,
        "sum" : 8.305088833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5231238.8175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5231238.8175,
        "min" : 5231238.8175,
        "sum" : 8.369982108E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5219304.429375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5219304.429375,
        "min" : 5219304.429375,
        "sum" : 8.350887087E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5199993.134375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5199993.134375,
        "min" : 5199993.134375,
        "sum" : 8.319989015000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5202485.81875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5202485.81875,
        "min" : 5202485.81875,
        "sum" : 8.323977309999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5231029.35375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5231029.35375,
        "min" : 5231029.35375,
        "sum" : 8.369646966E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 5251564.691875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5251564.691875,
        "min" : 5251564.691875,
        "sum" : 8.402503506999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5321459.266875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5321459.266875,
        "min" : 5321459.266875,
        "sum" : 8.514334827E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5798634.74,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5798634.74,
        "min" : 5798634.74,
        "sum" : 9.277815584E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5832769.209375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5832769.209375,
        "min" : 5832769.209375,
        "sum" : 9.332430735E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5788309.929375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5788309.929375,
        "min" : 5788309.929375,
        "sum" : 9.261295887E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5846651.176875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5846651.176875,
        "min" : 5846651.176875,
        "sum" : 9.354641883E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5815224.32625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5815224.32625,
        "min" : 5815224.32625,
        "sum" : 9.304358922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5785068.65,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5785068.65,
        "min" : 5785068.65,
        "sum" : 9.25610984E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5795281.22875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5795281.22875,
        "min" : 5795281.22875,
        "sum" : 9.272449966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5762548.2075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5762548.2075,
        "min" : 5762548.2075,
        "sum" : 9.220077132E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 5224190.288125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5224190.288125,
        "min" : 5224190.288125,
        "sum" : 8.358704461E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4684122.8775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4684122.8775,
        "min" : 4684122.8775,
        "sum" : 7.494596604000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4837385.32375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4837385.32375,
        "min" : 4837385.32375,
        "sum" : 7.739816518000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5322746.358125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5322746.358125,
        "min" : 5322746.358125,
        "sum" : 8.516394173E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5304678.58875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5304678.58875,
        "min" : 5304678.58875,
        "sum" : 8.487485742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5340909.09875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5340909.09875,
        "min" : 5340909.09875,
        "sum" : 8.545454558E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5321655.835625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5321655.835625,
        "min" : 5321655.835625,
        "sum" : 8.514649337E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5300389.904375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5300389.904375,
        "min" : 5300389.904375,
        "sum" : 8.480623847E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5323676.99375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5323676.99375,
        "min" : 5323676.99375,
        "sum" : 8.517883190000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5309432.481875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5309432.481875,
        "min" : 5309432.481875,
        "sum" : 8.495091970999999E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 5289246.06,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5289246.06,
        "min" : 5289246.06,
        "sum" : 8.462793695999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4771182.823125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4771182.823125,
        "min" : 4771182.823125,
        "sum" : 7.633892517E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4669177.00625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4669177.00625,
        "min" : 4669177.00625,
        "sum" : 7.470683209999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5075757.48,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5075757.48,
        "min" : 5075757.48,
        "sum" : 8.121211968000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5233286.830625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5233286.830625,
        "min" : 5233286.830625,
        "sum" : 8.373258929000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5230606.735625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5230606.735625,
        "min" : 5230606.735625,
        "sum" : 8.368970777E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5270810.605625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5270810.605625,
        "min" : 5270810.605625,
        "sum" : 8.433296969E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5212862.355625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5212862.355625,
        "min" : 5212862.355625,
        "sum" : 8.340579769E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5242253.913125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5242253.913125,
        "min" : 5242253.913125,
        "sum" : 8.387606261E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5235747.781875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5235747.781875,
        "min" : 5235747.781875,
        "sum" : 8.377196451000001E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 5229166.42375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5229166.42375,
        "min" : 5229166.42375,
        "sum" : 8.366666278E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4694313.25625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4694313.25625,
        "min" : 4694313.25625,
        "sum" : 7.510901209999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4612613.014375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4612613.014375,
        "min" : 4612613.014375,
        "sum" : 7.380180823E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5177701.525625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5177701.525625,
        "min" : 5177701.525625,
        "sum" : 8.284322441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5202300.418125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5202300.418125,
        "min" : 5202300.418125,
        "sum" : 8.323680669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5245710.3525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5245710.3525,
        "min" : 5245710.3525,
        "sum" : 8.393136564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5246300.19125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5246300.19125,
        "min" : 5246300.19125,
        "sum" : 8.394080306E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5236087.519375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5236087.519375,
        "min" : 5236087.519375,
        "sum" : 8.377740031E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5261853.08625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5261853.08625,
        "min" : 5261853.08625,
        "sum" : 8.418964938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5274115.08875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5274115.08875,
        "min" : 5274115.08875,
        "sum" : 8.438584142E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 5290874.08875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5290874.08875,
        "min" : 5290874.08875,
        "sum" : 8.465398542E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4767544.29875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4767544.29875,
        "min" : 4767544.29875,
        "sum" : 7.628070878E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4713102.72875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4713102.72875,
        "min" : 4713102.72875,
        "sum" : 7.540964366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4699218.081875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4699218.081875,
        "min" : 4699218.081875,
        "sum" : 7.518748931E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5207363.805625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5207363.805625,
        "min" : 5207363.805625,
        "sum" : 8.331782089E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5157791.12,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5157791.12,
        "min" : 5157791.12,
        "sum" : 8.252465792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5219855.679375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5219855.679375,
        "min" : 5219855.679375,
        "sum" : 8.351769087E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5173257.203125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5173257.203125,
        "min" : 5173257.203125,
        "sum" : 8.277211525E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5175188.888125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5175188.888125,
        "min" : 5175188.888125,
        "sum" : 8.280302220999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5186605.3625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5186605.3625,
        "min" : 5186605.3625,
        "sum" : 8.29856858E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 5278128.676875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5278128.676875,
        "min" : 5278128.676875,
        "sum" : 8.445005883E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4709882.075625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4709882.075625,
        "min" : 4709882.075625,
        "sum" : 7.535811320999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4665778.25625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4665778.25625,
        "min" : 4665778.25625,
        "sum" : 7.465245209999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5247967.13,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5247967.13,
        "min" : 5247967.13,
        "sum" : 8.396747408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5197738.883125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5197738.883125,
        "min" : 5197738.883125,
        "sum" : 8.316382213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5205698.534375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5205698.534375,
        "min" : 5205698.534375,
        "sum" : 8.329117655E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5209592.380625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5209592.380625,
        "min" : 5209592.380625,
        "sum" : 8.335347809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5196026.494375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5196026.494375,
        "min" : 5196026.494375,
        "sum" : 8.313642391E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5239547.95375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5239547.95375,
        "min" : 5239547.95375,
        "sum" : 8.383276726000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5235221.35875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5235221.35875,
        "min" : 5235221.35875,
        "sum" : 8.376354173999999E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 5336408.971875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5336408.971875,
        "min" : 5336408.971875,
        "sum" : 8.538254355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4694964.608125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4694964.608125,
        "min" : 4694964.608125,
        "sum" : 7.511943373E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4652201.068125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4652201.068125,
        "min" : 4652201.068125,
        "sum" : 7.443521709E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5049642.608125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5049642.608125,
        "min" : 5049642.608125,
        "sum" : 8.079428173E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5210429.985,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5210429.985,
        "min" : 5210429.985,
        "sum" : 8.336687976000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5214539.8775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5214539.8775,
        "min" : 5214539.8775,
        "sum" : 8.343263804000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5221626.38125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5221626.38125,
        "min" : 5221626.38125,
        "sum" : 8.354602209999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5235105.49875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5235105.49875,
        "min" : 5235105.49875,
        "sum" : 8.376168798E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5189797.410625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5189797.410625,
        "min" : 5189797.410625,
        "sum" : 8.303675856999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5210008.175625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5210008.175625,
        "min" : 5210008.175625,
        "sum" : 8.336013081E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 5239813.1675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5239813.1675,
        "min" : 5239813.1675,
        "sum" : 8.383701068000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4719332.90125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4719332.90125,
        "min" : 4719332.90125,
        "sum" : 7.550932642E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4651561.320625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4651561.320625,
        "min" : 4651561.320625,
        "sum" : 7.442498113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4908371.6,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4908371.6,
        "min" : 4908371.6,
        "sum" : 7.853394559999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5170287.526875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5170287.526875,
        "min" : 5170287.526875,
        "sum" : 8.272460043000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5166624.045625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5166624.045625,
        "min" : 5166624.045625,
        "sum" : 8.266598473E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5191979.260625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5191979.260625,
        "min" : 5191979.260625,
        "sum" : 8.307166817E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5173619.548125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5173619.548125,
        "min" : 5173619.548125,
        "sum" : 8.277791277E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5159747.3925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5159747.3925,
        "min" : 5159747.3925,
        "sum" : 8.255595828E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5211047.03,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5211047.03,
        "min" : 5211047.03,
        "sum" : 8.337675248E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 5189475.53875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5189475.53875,
        "min" : 5189475.53875,
        "sum" : 8.303160862E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4729297.54375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4729297.54375,
        "min" : 4729297.54375,
        "sum" : 7.56687607E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4672107.21625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4672107.21625,
        "min" : 4672107.21625,
        "sum" : 7.475371545999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5131035.509375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5131035.509375,
        "min" : 5131035.509375,
        "sum" : 8.209656815000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5176720.93125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5176720.93125,
        "min" : 5176720.93125,
        "sum" : 8.282753490000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5232919.93125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5232919.93125,
        "min" : 5232919.93125,
        "sum" : 8.372671890000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5240456.248125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5240456.248125,
        "min" : 5240456.248125,
        "sum" : 8.384729997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5171173.526875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5171173.526875,
        "min" : 5171173.526875,
        "sum" : 8.273877643000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5199639.299375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5199639.299375,
        "min" : 5199639.299375,
        "sum" : 8.319422879000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5195432.71125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5195432.71125,
        "min" : 5195432.71125,
        "sum" : 8.312692338E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 5262048.696875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5262048.696875,
        "min" : 5262048.696875,
        "sum" : 8.419277915000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4748743.59875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4748743.59875,
        "min" : 4748743.59875,
        "sum" : 7.597989758E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4671855.433125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4671855.433125,
        "min" : 4671855.433125,
        "sum" : 7.474968693000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5215763.63,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5215763.63,
        "min" : 5215763.63,
        "sum" : 8.345221808E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5272243.760625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5272243.760625,
        "min" : 5272243.760625,
        "sum" : 8.435590017E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5312646.913125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5312646.913125,
        "min" : 5312646.913125,
        "sum" : 8.500235061E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5258733.974375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5258733.974375,
        "min" : 5258733.974375,
        "sum" : 8.413974359E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5281090.70625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5281090.70625,
        "min" : 5281090.70625,
        "sum" : 8.44974513E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5279007.336875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5279007.336875,
        "min" : 5279007.336875,
        "sum" : 8.446411739E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5240644.300625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5240644.300625,
        "min" : 5240644.300625,
        "sum" : 8.385030881E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 5237587.15,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5237587.15,
        "min" : 5237587.15,
        "sum" : 8.380139440000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4672442.355,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4672442.355,
        "min" : 4672442.355,
        "sum" : 7.475907768000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4942803.430625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4942803.430625,
        "min" : 4942803.430625,
        "sum" : 7.908485489E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5319657.713125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5319657.713125,
        "min" : 5319657.713125,
        "sum" : 8.511452341E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5344171.654375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5344171.654375,
        "min" : 5344171.654375,
        "sum" : 8.550674647E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5332898.7425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5332898.7425,
        "min" : 5332898.7425,
        "sum" : 8.532637988E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5331823.138125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5331823.138125,
        "min" : 5331823.138125,
        "sum" : 8.530917020999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5307241.203125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5307241.203125,
        "min" : 5307241.203125,
        "sum" : 8.491585925E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5360908.648125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5360908.648125,
        "min" : 5360908.648125,
        "sum" : 8.577453837E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5302370.231875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 5302370.231875,
        "min" : 5302370.231875,
        "sum" : 8.483792370999999E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4288150.46,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4288150.46,
        "min" : 4288150.46,
        "sum" : 6.861040736E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3905503.06625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3905503.06625,
        "min" : 3905503.06625,
        "sum" : 6.248804906E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3839671.691875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3839671.691875,
        "min" : 3839671.691875,
        "sum" : 6.143474707E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3877707.72875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3877707.72875,
        "min" : 3877707.72875,
        "sum" : 6.204332366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3832233.20125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3832233.20125,
        "min" : 3832233.20125,
        "sum" : 6.131573122E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3798872.285625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3798872.285625,
        "min" : 3798872.285625,
        "sum" : 6.078195657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3852579.653125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3852579.653125,
        "min" : 3852579.653125,
        "sum" : 6.164127445E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823952.7525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823952.7525,
        "min" : 3823952.7525,
        "sum" : 6.118324404E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3827363.19125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3827363.19125,
        "min" : 3827363.19125,
        "sum" : 6.123781106E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3781720.715,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3781720.715,
        "min" : 3781720.715,
        "sum" : 6.050753144E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4316237.065625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4316237.065625,
        "min" : 4316237.065625,
        "sum" : 6.905979305E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3912469.9975,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3912469.9975,
        "min" : 3912469.9975,
        "sum" : 6.259951996E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836354.534375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836354.534375,
        "min" : 3836354.534375,
        "sum" : 6.138167255E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3834707.18625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3834707.18625,
        "min" : 3834707.18625,
        "sum" : 6.135531498E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3822485.178125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3822485.178125,
        "min" : 3822485.178125,
        "sum" : 6.115976285E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3801504.993125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3801504.993125,
        "min" : 3801504.993125,
        "sum" : 6.082407989E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3848266.130625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3848266.130625,
        "min" : 3848266.130625,
        "sum" : 6.157225809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3814359.146875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3814359.146875,
        "min" : 3814359.146875,
        "sum" : 6.102974635E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3806343.76,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3806343.76,
        "min" : 3806343.76,
        "sum" : 6.090150016E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3801748.325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3801748.325,
        "min" : 3801748.325,
        "sum" : 6.08279732E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4277070.563125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4277070.563125,
        "min" : 4277070.563125,
        "sum" : 6.843312901000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3902420.693125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3902420.693125,
        "min" : 3902420.693125,
        "sum" : 6.243873109E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823423.35875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823423.35875,
        "min" : 3823423.35875,
        "sum" : 6.117477374E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823024.275625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823024.275625,
        "min" : 3823024.275625,
        "sum" : 6.116838841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3818540.274375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3818540.274375,
        "min" : 3818540.274375,
        "sum" : 6.109664439E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3817910.808125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3817910.808125,
        "min" : 3817910.808125,
        "sum" : 6.108657293E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3838128.3075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3838128.3075,
        "min" : 3838128.3075,
        "sum" : 6.141005292E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3811116.635625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3811116.635625,
        "min" : 3811116.635625,
        "sum" : 6.097786617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3825008.990625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3825008.990625,
        "min" : 3825008.990625,
        "sum" : 6.120014385E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3822521.935,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3822521.935,
        "min" : 3822521.935,
        "sum" : 6.116035096E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4268824.0825,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4268824.0825,
        "min" : 4268824.0825,
        "sum" : 6.830118531999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3919601.455625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3919601.455625,
        "min" : 3919601.455625,
        "sum" : 6.271362329E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3834693.140625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3834693.140625,
        "min" : 3834693.140625,
        "sum" : 6.135509025E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3826888.80375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3826888.80375,
        "min" : 3826888.80375,
        "sum" : 6.123022086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3792433.235,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3792433.235,
        "min" : 3792433.235,
        "sum" : 6.067893176E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3800575.695,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3800575.695,
        "min" : 3800575.695,
        "sum" : 6.080921112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823911.713125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823911.713125,
        "min" : 3823911.713125,
        "sum" : 6.118258741E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3803263.345625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3803263.345625,
        "min" : 3803263.345625,
        "sum" : 6.085221353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3804958.98375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3804958.98375,
        "min" : 3804958.98375,
        "sum" : 6.087934374E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3792069.71625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3792069.71625,
        "min" : 3792069.71625,
        "sum" : 6.067311546E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4267811.508125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4267811.508125,
        "min" : 4267811.508125,
        "sum" : 6.828498413E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3888371.365625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3888371.365625,
        "min" : 3888371.365625,
        "sum" : 6.221394185E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3860016.0175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3860016.0175,
        "min" : 3860016.0175,
        "sum" : 6.176025628E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3858979.6,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3858979.6,
        "min" : 3858979.6,
        "sum" : 6.17436736E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836708.289375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836708.289375,
        "min" : 3836708.289375,
        "sum" : 6.138733263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3824719.89625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3824719.89625,
        "min" : 3824719.89625,
        "sum" : 6.119551834E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3812184.055,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3812184.055,
        "min" : 3812184.055,
        "sum" : 6.099494488E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3795356.86875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3795356.86875,
        "min" : 3795356.86875,
        "sum" : 6.07257099E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3834781.01125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3834781.01125,
        "min" : 3834781.01125,
        "sum" : 6.135649618E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3830906.49125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3830906.49125,
        "min" : 3830906.49125,
        "sum" : 6.129450386E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4228830.9575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4228830.9575,
        "min" : 4228830.9575,
        "sum" : 6.766129531999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3889363.329375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3889363.329375,
        "min" : 3889363.329375,
        "sum" : 6.222981327E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3811894.15125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3811894.15125,
        "min" : 3811894.15125,
        "sum" : 6.099030642E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3817525.448125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3817525.448125,
        "min" : 3817525.448125,
        "sum" : 6.108040717E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3798044.575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3798044.575,
        "min" : 3798044.575,
        "sum" : 6.07687132E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3787862.73375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3787862.73375,
        "min" : 3787862.73375,
        "sum" : 6.060580374E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3832000.01125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3832000.01125,
        "min" : 3832000.01125,
        "sum" : 6.131200018E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3809297.756875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3809297.756875,
        "min" : 3809297.756875,
        "sum" : 6.094876411E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3796263.284375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3796263.284375,
        "min" : 3796263.284375,
        "sum" : 6.074021255E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3806797.476875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3806797.476875,
        "min" : 3806797.476875,
        "sum" : 6.090875963E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4278285.0175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4278285.0175,
        "min" : 4278285.0175,
        "sum" : 6.845256028E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3921066.12625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3921066.12625,
        "min" : 3921066.12625,
        "sum" : 6.273705802E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3837465.673125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3837465.673125,
        "min" : 3837465.673125,
        "sum" : 6.139945077E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3871365.095625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3871365.095625,
        "min" : 3871365.095625,
        "sum" : 6.194184153E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3818625.479375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3818625.479375,
        "min" : 3818625.479375,
        "sum" : 6.109800767E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3804675.435,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3804675.435,
        "min" : 3804675.435,
        "sum" : 6.087480696E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3822708.405,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3822708.405,
        "min" : 3822708.405,
        "sum" : 6.116333448E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3826125.11125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3826125.11125,
        "min" : 3826125.11125,
        "sum" : 6.121800178E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3851160.103125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3851160.103125,
        "min" : 3851160.103125,
        "sum" : 6.161856165E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3843547.38125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3843547.38125,
        "min" : 3843547.38125,
        "sum" : 6.14967581E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4255887.69125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4255887.69125,
        "min" : 4255887.69125,
        "sum" : 6.809420306E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3902516.695625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3902516.695625,
        "min" : 3902516.695625,
        "sum" : 6.244026713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3809809.54875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3809809.54875,
        "min" : 3809809.54875,
        "sum" : 6.095695278E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3827876.180625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3827876.180625,
        "min" : 3827876.180625,
        "sum" : 6.124601889E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831691.77375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831691.77375,
        "min" : 3831691.77375,
        "sum" : 6.130706838E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3809998.24,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3809998.24,
        "min" : 3809998.24,
        "sum" : 6.095997184E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3828317.9725,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3828317.9725,
        "min" : 3828317.9725,
        "sum" : 6.125308756E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3830816.79125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3830816.79125,
        "min" : 3830816.79125,
        "sum" : 6.129306866E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3827070.610625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3827070.610625,
        "min" : 3827070.610625,
        "sum" : 6.123312977E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823256.80625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823256.80625,
        "min" : 3823256.80625,
        "sum" : 6.11721089E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4210813.245625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4210813.245625,
        "min" : 4210813.245625,
        "sum" : 6.737301193000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3915017.9325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3915017.9325,
        "min" : 3915017.9325,
        "sum" : 6.264028692E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3839617.786875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3839617.786875,
        "min" : 3839617.786875,
        "sum" : 6.143388459E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3849313.71125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3849313.71125,
        "min" : 3849313.71125,
        "sum" : 6.158901938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823873.845,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823873.845,
        "min" : 3823873.845,
        "sum" : 6.118198152E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3819697.7025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3819697.7025,
        "min" : 3819697.7025,
        "sum" : 6.111516324E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3842291.865625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3842291.865625,
        "min" : 3842291.865625,
        "sum" : 6.147666985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3813708.4675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3813708.4675,
        "min" : 3813708.4675,
        "sum" : 6.101933548E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3845472.27,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3845472.27,
        "min" : 3845472.27,
        "sum" : 6.152755632E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3822554.940625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3822554.940625,
        "min" : 3822554.940625,
        "sum" : 6.116087905E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4242378.635,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4242378.635,
        "min" : 4242378.635,
        "sum" : 6.787805816E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3923421.630625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3923421.630625,
        "min" : 3923421.630625,
        "sum" : 6.277474609E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3815136.14375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3815136.14375,
        "min" : 3815136.14375,
        "sum" : 6.10421783E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3848365.83375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3848365.83375,
        "min" : 3848365.83375,
        "sum" : 6.157385334E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3789913.15875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3789913.15875,
        "min" : 3789913.15875,
        "sum" : 6.063861054E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3785391.076875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3785391.076875,
        "min" : 3785391.076875,
        "sum" : 6.056625723E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3777122.13875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3777122.13875,
        "min" : 3777122.13875,
        "sum" : 6.043395422E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3790524.92625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3790524.92625,
        "min" : 3790524.92625,
        "sum" : 6.064839882E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3827413.331875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3827413.331875,
        "min" : 3827413.331875,
        "sum" : 6.123861331E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3816215.911875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3816215.911875,
        "min" : 3816215.911875,
        "sum" : 6.105945459E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4352241.878125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4352241.878125,
        "min" : 4352241.878125,
        "sum" : 6.963587005E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3968536.333125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3968536.333125,
        "min" : 3968536.333125,
        "sum" : 6.349658133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3860865.73625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3860865.73625,
        "min" : 3860865.73625,
        "sum" : 6.177385178E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3882722.998125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3882722.998125,
        "min" : 3882722.998125,
        "sum" : 6.212356797E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3838113.090625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3838113.090625,
        "min" : 3838113.090625,
        "sum" : 6.140980945E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831314.52375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831314.52375,
        "min" : 3831314.52375,
        "sum" : 6.130103238E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3852109.6825,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3852109.6825,
        "min" : 3852109.6825,
        "sum" : 6.163375492E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823342.55125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823342.55125,
        "min" : 3823342.55125,
        "sum" : 6.117348082E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3866023.914375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3866023.914375,
        "min" : 3866023.914375,
        "sum" : 6.185638263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3850622.3325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3850622.3325,
        "min" : 3850622.3325,
        "sum" : 6.160995732E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4279122.7775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4279122.7775,
        "min" : 4279122.7775,
        "sum" : 6.846596444E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3900121.27125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3900121.27125,
        "min" : 3900121.27125,
        "sum" : 6.240194034E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831252.7425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831252.7425,
        "min" : 3831252.7425,
        "sum" : 6.130004388E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3819653.628125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3819653.628125,
        "min" : 3819653.628125,
        "sum" : 6.111445805E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3800671.0175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3800671.0175,
        "min" : 3800671.0175,
        "sum" : 6.081073628E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3829998.625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3829998.625,
        "min" : 3829998.625,
        "sum" : 6.1279978E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3818744.6875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3818744.6875,
        "min" : 3818744.6875,
        "sum" : 6.1099915E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3808680.875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3808680.875,
        "min" : 3808680.875,
        "sum" : 6.0938894E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3822959.159375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3822959.159375,
        "min" : 3822959.159375,
        "sum" : 6.116734655E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3828787.17875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3828787.17875,
        "min" : 3828787.17875,
        "sum" : 6.126059486E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4275321.685625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4275321.685625,
        "min" : 4275321.685625,
        "sum" : 6.840514697E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3907578.289375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3907578.289375,
        "min" : 3907578.289375,
        "sum" : 6.252125263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836041.206875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836041.206875,
        "min" : 3836041.206875,
        "sum" : 6.137665931E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3820230.83,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3820230.83,
        "min" : 3820230.83,
        "sum" : 6.112369328E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3815238.27625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3815238.27625,
        "min" : 3815238.27625,
        "sum" : 6.104381242E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3848735.364375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3848735.364375,
        "min" : 3848735.364375,
        "sum" : 6.157976583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3855541.555,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3855541.555,
        "min" : 3855541.555,
        "sum" : 6.168866488E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3821809.4275,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3821809.4275,
        "min" : 3821809.4275,
        "sum" : 6.114895084E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3841928.979375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3841928.979375,
        "min" : 3841928.979375,
        "sum" : 6.147086367E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3824994.57125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3824994.57125,
        "min" : 3824994.57125,
        "sum" : 6.119991314E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4243221.4375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4243221.4375,
        "min" : 4243221.4375,
        "sum" : 6.7891543E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3876716.046875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3876716.046875,
        "min" : 3876716.046875,
        "sum" : 6.202745675E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3775781.093125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3775781.093125,
        "min" : 3775781.093125,
        "sum" : 6.041249749E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3807647.37625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3807647.37625,
        "min" : 3807647.37625,
        "sum" : 6.092235802E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3784896.98125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3784896.98125,
        "min" : 3784896.98125,
        "sum" : 6.05583517E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3758912.286875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3758912.286875,
        "min" : 3758912.286875,
        "sum" : 6.014259659E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3781106.6125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3781106.6125,
        "min" : 3781106.6125,
        "sum" : 6.04977058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3784622.820625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3784622.820625,
        "min" : 3784622.820625,
        "sum" : 6.055396513E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3782094.7875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3782094.7875,
        "min" : 3782094.7875,
        "sum" : 6.05135166E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3779306.3,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3779306.3,
        "min" : 3779306.3,
        "sum" : 6.04689008E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4316741.61,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4316741.61,
        "min" : 4316741.61,
        "sum" : 6.906786576000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3938220.251875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3938220.251875,
        "min" : 3938220.251875,
        "sum" : 6.301152403E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3844167.815,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3844167.815,
        "min" : 3844167.815,
        "sum" : 6.150668504E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3825797.495,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3825797.495,
        "min" : 3825797.495,
        "sum" : 6.121275992E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3853220.05375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3853220.05375,
        "min" : 3853220.05375,
        "sum" : 6.165152086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831441.55625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831441.55625,
        "min" : 3831441.55625,
        "sum" : 6.13030649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3832808.638125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3832808.638125,
        "min" : 3832808.638125,
        "sum" : 6.132493821E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3827124.9775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3827124.9775,
        "min" : 3827124.9775,
        "sum" : 6.123399964E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3824827.41625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3824827.41625,
        "min" : 3824827.41625,
        "sum" : 6.119723866E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3809278.493125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3809278.493125,
        "min" : 3809278.493125,
        "sum" : 6.094845589E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4249830.65875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4249830.65875,
        "min" : 4249830.65875,
        "sum" : 6.799729054000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3910405.31375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3910405.31375,
        "min" : 3910405.31375,
        "sum" : 6.256648502E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3789192.719375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3789192.719375,
        "min" : 3789192.719375,
        "sum" : 6.062708351E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3830638.450625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3830638.450625,
        "min" : 3830638.450625,
        "sum" : 6.129021521E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3828942.415,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3828942.415,
        "min" : 3828942.415,
        "sum" : 6.126307864E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3835455.335625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3835455.335625,
        "min" : 3835455.335625,
        "sum" : 6.136728537E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3852803.4325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3852803.4325,
        "min" : 3852803.4325,
        "sum" : 6.164485492E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3797660.04875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3797660.04875,
        "min" : 3797660.04875,
        "sum" : 6.076256078E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3844451.68875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3844451.68875,
        "min" : 3844451.68875,
        "sum" : 6.151122702E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3838016.638125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3838016.638125,
        "min" : 3838016.638125,
        "sum" : 6.140826621E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4294179.66125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4294179.66125,
        "min" : 4294179.66125,
        "sum" : 6.870687458E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3951429.228125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3951429.228125,
        "min" : 3951429.228125,
        "sum" : 6.322286765E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3856648.60375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3856648.60375,
        "min" : 3856648.60375,
        "sum" : 6.170637766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3828797.245,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3828797.245,
        "min" : 3828797.245,
        "sum" : 6.126075592E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3810012.49125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3810012.49125,
        "min" : 3810012.49125,
        "sum" : 6.096019986E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3805235.2775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3805235.2775,
        "min" : 3805235.2775,
        "sum" : 6.088376444E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3819560.631875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3819560.631875,
        "min" : 3819560.631875,
        "sum" : 6.111297011E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3793111.838125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3793111.838125,
        "min" : 3793111.838125,
        "sum" : 6.068978941E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3809973.160625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3809973.160625,
        "min" : 3809973.160625,
        "sum" : 6.095957057E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3805007.24125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3805007.24125,
        "min" : 3805007.24125,
        "sum" : 6.088011586E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4295032.141875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4295032.141875,
        "min" : 4295032.141875,
        "sum" : 6.872051427E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3967418.665625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3967418.665625,
        "min" : 3967418.665625,
        "sum" : 6.347869865E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3885188.684375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3885188.684375,
        "min" : 3885188.684375,
        "sum" : 6.216301895E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3917689.306875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3917689.306875,
        "min" : 3917689.306875,
        "sum" : 6.268302891E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3897752.5025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3897752.5025,
        "min" : 3897752.5025,
        "sum" : 6.236404004E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3910826.851875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3910826.851875,
        "min" : 3910826.851875,
        "sum" : 6.257322963E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3914216.94,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3914216.94,
        "min" : 3914216.94,
        "sum" : 6.262747104E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836526.901875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836526.901875,
        "min" : 3836526.901875,
        "sum" : 6.138443043E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3901950.01,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3901950.01,
        "min" : 3901950.01,
        "sum" : 6.243120016E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3891851.3675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3891851.3675,
        "min" : 3891851.3675,
        "sum" : 6.226962188E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4296094.145625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4296094.145625,
        "min" : 4296094.145625,
        "sum" : 6.873750633E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3946510.77125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3946510.77125,
        "min" : 3946510.77125,
        "sum" : 6.314417234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836379.104375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836379.104375,
        "min" : 3836379.104375,
        "sum" : 6.138206567E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3837091.749375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3837091.749375,
        "min" : 3837091.749375,
        "sum" : 6.139346799E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823075.631875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823075.631875,
        "min" : 3823075.631875,
        "sum" : 6.116921011E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3820009.963125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3820009.963125,
        "min" : 3820009.963125,
        "sum" : 6.112015941E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3858507.299375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3858507.299375,
        "min" : 3858507.299375,
        "sum" : 6.173611679E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3823609.894375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3823609.894375,
        "min" : 3823609.894375,
        "sum" : 6.117775831E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3817041.150625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3817041.150625,
        "min" : 3817041.150625,
        "sum" : 6.107265841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3819213.3525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3819213.3525,
        "min" : 3819213.3525,
        "sum" : 6.110741364E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4337094.564375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4337094.564375,
        "min" : 4337094.564375,
        "sum" : 6.939351303E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3916891.150625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3916891.150625,
        "min" : 3916891.150625,
        "sum" : 6.267025841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3872750.3625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3872750.3625,
        "min" : 3872750.3625,
        "sum" : 6.19640058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3833283.174375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3833283.174375,
        "min" : 3833283.174375,
        "sum" : 6.133253079E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3810533.9075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3810533.9075,
        "min" : 3810533.9075,
        "sum" : 6.096854252E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3813209.6675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3813209.6675,
        "min" : 3813209.6675,
        "sum" : 6.101135468E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3837123.06875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3837123.06875,
        "min" : 3837123.06875,
        "sum" : 6.13939691E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3806350.141875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3806350.141875,
        "min" : 3806350.141875,
        "sum" : 6.090160227E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3816334.900625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3816334.900625,
        "min" : 3816334.900625,
        "sum" : 6.106135841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3813360.3525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3813360.3525,
        "min" : 3813360.3525,
        "sum" : 6.101376564E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4229486.405625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4229486.405625,
        "min" : 4229486.405625,
        "sum" : 6.767178248999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3860712.623125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3860712.623125,
        "min" : 3860712.623125,
        "sum" : 6.177140197E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3820670.949375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3820670.949375,
        "min" : 3820670.949375,
        "sum" : 6.113073519E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3824241.58,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3824241.58,
        "min" : 3824241.58,
        "sum" : 6.118786528E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3774693.194375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3774693.194375,
        "min" : 3774693.194375,
        "sum" : 6.039509111E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3774873.728125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3774873.728125,
        "min" : 3774873.728125,
        "sum" : 6.039797965E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3814207.900625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3814207.900625,
        "min" : 3814207.900625,
        "sum" : 6.102732641E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3787301.72375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3787301.72375,
        "min" : 3787301.72375,
        "sum" : 6.059682758E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3784413.206875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3784413.206875,
        "min" : 3784413.206875,
        "sum" : 6.055061131E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3794821.374375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3794821.374375,
        "min" : 3794821.374375,
        "sum" : 6.071714199E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4243368.828125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4243368.828125,
        "min" : 4243368.828125,
        "sum" : 6.789390125E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3903848.854375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3903848.854375,
        "min" : 3903848.854375,
        "sum" : 6.246158167E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3785438.18625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3785438.18625,
        "min" : 3785438.18625,
        "sum" : 6.056701098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3825590.84375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3825590.84375,
        "min" : 3825590.84375,
        "sum" : 6.12094535E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3797044.765625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3797044.765625,
        "min" : 3797044.765625,
        "sum" : 6.075271625E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3813787.514375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3813787.514375,
        "min" : 3813787.514375,
        "sum" : 6.102060023E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3820669.645625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3820669.645625,
        "min" : 3820669.645625,
        "sum" : 6.113071433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3807298.71125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3807298.71125,
        "min" : 3807298.71125,
        "sum" : 6.091677938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3842158.680625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3842158.680625,
        "min" : 3842158.680625,
        "sum" : 6.147453889E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3796486.194375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3796486.194375,
        "min" : 3796486.194375,
        "sum" : 6.074377911E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4306999.3975,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4306999.3975,
        "min" : 4306999.3975,
        "sum" : 6.891199036E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3922806.870625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3922806.870625,
        "min" : 3922806.870625,
        "sum" : 6.276490993E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3865171.82875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3865171.82875,
        "min" : 3865171.82875,
        "sum" : 6.184274926E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3862585.20375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3862585.20375,
        "min" : 3862585.20375,
        "sum" : 6.180136326E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3861232.413125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3861232.413125,
        "min" : 3861232.413125,
        "sum" : 6.177971861E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3869572.106875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3869572.106875,
        "min" : 3869572.106875,
        "sum" : 6.191315371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3869713.49125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3869713.49125,
        "min" : 3869713.49125,
        "sum" : 6.191541586E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3840510.65875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3840510.65875,
        "min" : 3840510.65875,
        "sum" : 6.144817054E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3848843.07125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3848843.07125,
        "min" : 3848843.07125,
        "sum" : 6.158148914E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3835011.7225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3835011.7225,
        "min" : 3835011.7225,
        "sum" : 6.136018756E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4233123.1625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4233123.1625,
        "min" : 4233123.1625,
        "sum" : 6.772997059999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3897389.019375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3897389.019375,
        "min" : 3897389.019375,
        "sum" : 6.235822431E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3811434.01,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3811434.01,
        "min" : 3811434.01,
        "sum" : 6.098294416E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3852289.669375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3852289.669375,
        "min" : 3852289.669375,
        "sum" : 6.163663471E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3824537.97375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3824537.97375,
        "min" : 3824537.97375,
        "sum" : 6.119260758E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3798261.366875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3798261.366875,
        "min" : 3798261.366875,
        "sum" : 6.077218187E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3817588.425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3817588.425,
        "min" : 3817588.425,
        "sum" : 6.10814148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3810466.48625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3810466.48625,
        "min" : 3810466.48625,
        "sum" : 6.096746378E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836635.249375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836635.249375,
        "min" : 3836635.249375,
        "sum" : 6.138616399E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3833651.175625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3833651.175625,
        "min" : 3833651.175625,
        "sum" : 6.133841881E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4285007.99625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4285007.99625,
        "min" : 4285007.99625,
        "sum" : 6.856012794E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3961933.31625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3961933.31625,
        "min" : 3961933.31625,
        "sum" : 6.339093306E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3893891.259375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3893891.259375,
        "min" : 3893891.259375,
        "sum" : 6.230226015E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3880833.834375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3880833.834375,
        "min" : 3880833.834375,
        "sum" : 6.209334135E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3850073.8575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3850073.8575,
        "min" : 3850073.8575,
        "sum" : 6.160118172E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3845264.373125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3845264.373125,
        "min" : 3845264.373125,
        "sum" : 6.152422997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3867225.615,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3867225.615,
        "min" : 3867225.615,
        "sum" : 6.187560984E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3850510.225625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3850510.225625,
        "min" : 3850510.225625,
        "sum" : 6.160816361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3862522.420625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3862522.420625,
        "min" : 3862522.420625,
        "sum" : 6.180035873E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3851639.548125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3851639.548125,
        "min" : 3851639.548125,
        "sum" : 6.162623277E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4343515.579375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4343515.579375,
        "min" : 4343515.579375,
        "sum" : 6.949624927E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3914049.325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3914049.325,
        "min" : 3914049.325,
        "sum" : 6.26247892E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3839587.760625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3839587.760625,
        "min" : 3839587.760625,
        "sum" : 6.143340417E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3848645.92875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3848645.92875,
        "min" : 3848645.92875,
        "sum" : 6.157833486E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3839363.48875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3839363.48875,
        "min" : 3839363.48875,
        "sum" : 6.142981582E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831289.16,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831289.16,
        "min" : 3831289.16,
        "sum" : 6.130062656E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3836485.07125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3836485.07125,
        "min" : 3836485.07125,
        "sum" : 6.138376114E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3829980.261875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3829980.261875,
        "min" : 3829980.261875,
        "sum" : 6.127968419E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831912.095625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831912.095625,
        "min" : 3831912.095625,
        "sum" : 6.131059353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3822492.128125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3822492.128125,
        "min" : 3822492.128125,
        "sum" : 6.115987405E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4266721.6075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4266721.6075,
        "min" : 4266721.6075,
        "sum" : 6.826754572E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3920390.691875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3920390.691875,
        "min" : 3920390.691875,
        "sum" : 6.272625107E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3899330.7525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3899330.7525,
        "min" : 3899330.7525,
        "sum" : 6.238929204E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3853870.005,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3853870.005,
        "min" : 3853870.005,
        "sum" : 6.166192008E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3825873.03875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3825873.03875,
        "min" : 3825873.03875,
        "sum" : 6.121396862E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3821538.6675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3821538.6675,
        "min" : 3821538.6675,
        "sum" : 6.114461868E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3846995.730625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3846995.730625,
        "min" : 3846995.730625,
        "sum" : 6.155193169E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3831685.01875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3831685.01875,
        "min" : 3831685.01875,
        "sum" : 6.13069603E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3820412.38125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3820412.38125,
        "min" : 3820412.38125,
        "sum" : 6.11265981E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3832644.204375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3832644.204375,
        "min" : 3832644.204375,
        "sum" : 6.132230727E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4275297.619375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4275297.619375,
        "min" : 4275297.619375,
        "sum" : 6.840476191E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3896010.9775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3896010.9775,
        "min" : 3896010.9775,
        "sum" : 6.233617564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3821812.445,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3821812.445,
        "min" : 3821812.445,
        "sum" : 6.114899912E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3806090.023125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3806090.023125,
        "min" : 3806090.023125,
        "sum" : 6.089744037E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3811067.09,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3811067.09,
        "min" : 3811067.09,
        "sum" : 6.097707344E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3801337.758125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3801337.758125,
        "min" : 3801337.758125,
        "sum" : 6.082140413E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3807214.52875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3807214.52875,
        "min" : 3807214.52875,
        "sum" : 6.091543246E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3797417.66,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3797417.66,
        "min" : 3797417.66,
        "sum" : 6.075868256E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3790083.593125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3790083.593125,
        "min" : 3790083.593125,
        "sum" : 6.064133749E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3782766.969375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3782766.969375,
        "min" : 3782766.969375,
        "sum" : 6.052427151E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4247032.466875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4247032.466875,
        "min" : 4247032.466875,
        "sum" : 6.795251947E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3905815.653125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3905815.653125,
        "min" : 3905815.653125,
        "sum" : 6.249305045E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3813115.724375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3813115.724375,
        "min" : 3813115.724375,
        "sum" : 6.100985159E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3830163.183125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3830163.183125,
        "min" : 3830163.183125,
        "sum" : 6.128261093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3799918.644375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3799918.644375,
        "min" : 3799918.644375,
        "sum" : 6.079869831E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3791297.465625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3791297.465625,
        "min" : 3791297.465625,
        "sum" : 6.066075945E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3830312.704375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3830312.704375,
        "min" : 3830312.704375,
        "sum" : 6.128500327E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3793241.61875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3793241.61875,
        "min" : 3793241.61875,
        "sum" : 6.06918659E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3795944.27125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3795944.27125,
        "min" : 3795944.27125,
        "sum" : 6.073510834E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3816621.54375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3816621.54375,
        "min" : 3816621.54375,
        "sum" : 6.10659447E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4265607.909375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4265607.909375,
        "min" : 4265607.909375,
        "sum" : 6.824972655E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3920044.666875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3920044.666875,
        "min" : 3920044.666875,
        "sum" : 6.272071467E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3809163.938125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3809163.938125,
        "min" : 3809163.938125,
        "sum" : 6.094662301E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3829904.215625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3829904.215625,
        "min" : 3829904.215625,
        "sum" : 6.127846745E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3796622.38875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3796622.38875,
        "min" : 3796622.38875,
        "sum" : 6.074595822E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3775193.393125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3775193.393125,
        "min" : 3775193.393125,
        "sum" : 6.040309429E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3814069.780625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3814069.780625,
        "min" : 3814069.780625,
        "sum" : 6.102511649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3795269.925625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3795269.925625,
        "min" : 3795269.925625,
        "sum" : 6.072431881E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3800855.92625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3800855.92625,
        "min" : 3800855.92625,
        "sum" : 6.081369482E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3814803.550625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 3814803.550625,
        "min" : 3814803.550625,
        "sum" : 6.103685681E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
