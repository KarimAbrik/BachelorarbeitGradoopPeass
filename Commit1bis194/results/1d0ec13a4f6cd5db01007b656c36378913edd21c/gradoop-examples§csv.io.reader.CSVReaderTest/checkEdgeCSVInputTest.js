if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 1d0ec13a4f6cd5db01007b656c36378913edd21c -test csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest\")'>1d0ec13a4f6cd5db01007b656c36378913edd21c</a><br>Predecessor: fe8fa7eccd87e604ab93bf1bada16a320ebda29c<br>Comitter: <br>Test Case: csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest<br>";
   if (typeof jenkins !== 'undefined') {
         } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='checkEdgeCSVInputTest_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
  }
}

var source = {"current":
{
 "org.gradoop.csv.io.reader.CSVReader.initialStep_String":
 `/**
 * Initial step: initializations and reading the headline
 *
 * @param line line of csv input
 */
private void initialStep(String line) {
    // Initialize Lists
    labels = Lists.newArrayList();
    // Get properties (e.g. FirstName, LastName...)
    properties = getTokens(line);
    // Get MetaData (e.g. long, string, string...)
    readTypes(conf.get(META_DATA));
    // Set Labels
    labels.add(conf.get(LABEL));
    // getCSVType
    isNodeCSV = isNodeCSV();
    random = new Random();
    // initialStep is over
    initialStep = false;
}`,"org.gradoop.csv.io.reader.CSVReader.setVList_":
 `/**
 * Sets the size of the initial vertex list
 *
 * @return vertex list
 */
private List<Vertex> setVList() {
    int size = conf.getInt(EXPECTED_SIZE, DEFAULT_EXPECTED_SIZE);
    if (size == 0) {
        return Lists.newArrayList();
    } else {
        return Lists.newArrayListWithExpectedSize(size);
    }
}`,"org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine_String":
 ``,"org.gradoop.csv.io.reader.CSVReader.readVertexList_String":
 `/**
 * {@inheritDoc}
 */
@Override
public List<Vertex> readVertexList(String line) {
    List<Vertex> vList = setVList();
    if (initialStep) {
        initialStep(line);
    } else {
        if (isNodeCSV) {
            vList.add(readVertex(line));
        } else {
            readEdges(vList, line);
        }
    }
    return vList;
}`,"org.gradoop.csv.io.reader.CSVReader.readRemainingLines_String":
 ``,"csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest_":
 `@Test
public void checkEdgeCSVInputTest() {
    List<Vertex> vlist = createEdgesFromCSV();
    for (Vertex v : vlist) {
        long id = v.getID();
        assertEquals(vlist.size(), 4);
        if (id == person2) {
            assertEquals(v.getOutgoingDegree(), 1);
            assertEquals(v.getIncomingDegree(), 0);
            checkOutgoingEdge(Lists.newArrayList(v.getOutgoingEdges()));
        } else if (id == person3) {
            assertEquals(v.getIncomingDegree(), 1);
            assertEquals(v.getOutgoingDegree(), 0);
            checkIncomingEdge(Lists.newArrayList(v.getIncomingEdges()));
        } else if (id == person4) {
            assertEquals(v.getIncomingDegree(), 0);
            assertEquals(v.getOutgoingDegree(), 1);
            checkOutgoingEdge(Lists.newArrayList(v.getOutgoingEdges()));
        } else if (id == person5) {
            assertEquals(v.getIncomingDegree(), 1);
            assertEquals(v.getOutgoingDegree(), 0);
            checkIncomingEdge(Lists.newArrayList(v.getIncomingEdges()));
        }
    }
}`,"csv.io.reader.CSVReaderTest.createEdgesFromCSV_":
 `private List<Vertex> createEdgesFromCSV() {
    ConfigurableVertexLineReader reader = new CSVReader();
    Configuration conf = new Configuration();
    conf.set(CSVReader.META_DATA, EDGE_META);
    conf.set(CSVReader.LABEL, "workedAt");
    conf.set(CSVReader.TYPE, "edge");
    reader.setConf(conf);
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : KNOWS_CSV) {
        for (Vertex v : reader.readVertexList(line)) {
            vertices.add(v);
        }
    }
    return vertices;
}`,"org.gradoop.csv.io.reader.CSVReader.setConf_Configuration":
 `/**
 * {@inheritDoc}
 */
@Override
public void setConf(Configuration conf) {
    this.conf = conf;
}`,},
"old":
{
 "org.gradoop.csv.io.reader.CSVReader.initialStep_String":
 ``,"org.gradoop.csv.io.reader.CSVReader.setVList_":
 ``,"org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine_String":
 `private void initializeAndReadFirstLine(String line) {
    //    Log.info("###INITIALIZE");
    vList = Lists.newArrayList();
    labels = Lists.newArrayList();
    //    Log.info("###ReadFirstLine");
    properties = getTokens(line);
    //    for (int i = 0; i < properties.length; i++) {
    //      Log.info(properties[i]);
    //    }
    String metaData = conf.get(META_DATA);
    labels.add(conf.get(LABEL));
    try {
        BufferedReader in = new BufferedReader(new FileReader(metaData));
        String datLine;
        while ((datLine = in.readLine()) != null) {
            types = getTokens(datLine);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    checkType();
    once = false;
}`,"org.gradoop.csv.io.reader.CSVReader.readVertexList_String":
 `@Override
public List<Vertex> readVertexList(String line) {
    if (once) {
        initializeAndReadFirstLine(line);
    } else {
        vList.add(readRemainingLines(line));
    }
    return vList;
}`,"org.gradoop.csv.io.reader.CSVReader.readRemainingLines_String":
 `private Vertex readRemainingLines(String line) {
    //    Log.info("###ReadRemainingLines");
    String[] tokens = getTokens(line);
    long id = Long.parseLong(tokens[0]);
    //    Log.info(id);
    //    Log.info(labels.get(0));
    Vertex vex = VertexFactory.createDefaultVertexWithLabels(id, labels, null);
    if (node) {
        for (int i = 1; i < properties.length; i++) {
            switch(types[i]) {
                case "long":
                    vex.addProperty(properties[i], Long.parseLong(tokens[i]));
                    //          Log.info(tokens[i]);
                    break;
                case "string":
                    vex.addProperty(properties[i], tokens[i]);
                    //          Log.info(tokens[i]);
                    break;
                default:
                    vex.addProperty(properties[i], tokens[i]);
                    break;
            }
        }
    } else {
        //If edge
    }
    return vex;
}`,"csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest_":
 `@Test
public void checkEdgeCSVInputTest() {
    for (Vertex v : createEdgesFromCSV()) {
        Log.info("####ID: " + v.getID());
        Log.info("#####imcomingDegree: " + v.getIncomingDegree());
        Log.info("#####outgoingdegree: " + v.getOutgoingDegree());
    }
}`,"csv.io.reader.CSVReaderTest.createEdgesFromCSV_":
 `private List<Vertex> createEdgesFromCSV() {
    ConfigurableVertexLineReader reader = new CSVReader();
    Configuration conf = new Configuration();
    conf.set(CSVReader.META_DATA, EDGE_META);
    conf.set(CSVReader.LABEL, "knows");
    conf.set(CSVReader.TYPE, "edge");
    reader.setConf(conf);
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : KNOWS_CSV) {
        for (Vertex v : reader.readVertexList(line)) {
            vertices.add(v);
        }
    }
    return vertices;
}`,"org.gradoop.csv.io.reader.CSVReader.setConf_Configuration":
 `@Override
public void setConf(Configuration conf) {
    this.conf = conf;
}`,},
};
var treeData = [
{
  "call" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
  "kiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest()",
  "otherKiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest()",
  "module" : "gradoop-examples",
  "name" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
  "key" : "csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest_",
  "otherKey" : "csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest_",
  "parent" : null,
  "color" : "#00FF00",
  "statistic" : {
    "meanOld" : 6.534423277419999E9,
    "meanCurrent" : 1.7055793654077778E9,
    "deviationOld" : 7.162877012599076E7,
    "deviationCurrent" : 2.498501576296116E7,
    "vms" : 30,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 348.6452133987911,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 2.2725531534444753E7,
  "inVMDeviation" : 8.465708731692299E7,
  "ess" : 0,
  "values" : [ 1.7474868578666663E9, 1.6991684688E9, 1.7125104218666666E9, 1.7124629316E9, 1.67479011255E9, 1.712278452E9, 1.66203523375E9, 1.7050042602666667E9, 1.7102022046E9, 1.6814745106E9, 1.7222966024E9, 1.694199551E9, 1.7281198814666665E9, 1.6918578092E9, 1.7023665614E9, 1.7210622922E9, 1.6766606934E9, 1.6598859727333333E9, 1.726987716E9, 1.6701437472666667E9, 1.734602751E9, 1.6905737128E9, 1.6689918890666666E9, 1.7351763333333335E9, 1.7004659078E9, 1.7437415648E9, 1.7346531024E9, 1.7154838776666665E9, 1.7361640622E9, 1.6965334802E9 ],
  "valuesPredecessor" : [ 6.5388208286E9, 6.559064746E9, 6.4660078594E9, 6.5418546438E9, 6.532405556E9, 6.5127781538E9, 6.4838311068E9, 6.4656433368E9, 6.5554251852E9, 6.5442093474E9, 6.5749658242E9, 6.4844599734E9, 6.4991992212E9, 6.472985291E9, 6.488507505E9, 6.4663797138E9, 6.5367345768E9, 6.7078028692E9, 6.6789247182E9, 6.6023744612E9, 6.5041790826E9, 6.740917005E9, 6.546166098E9, 6.5183674726E9, 6.5516797666E9, 6.4764289376E9, 6.4855980104E9, 6.5789074434E9, 6.446176515E9, 6.4719030736E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 1.7568622963333333E9,
        "variance" : 5.7088083849960192E16,
        "n" : 1,
        "max" : 2.032714158E9,
        "min" : 1.614765435E9,
        "sum" : 1.7568622963333333E9,
        "standardDeviation" : 2.3893112783804497E8
      }, {
        "mean" : 1.7135984555E9,
        "variance" : 3.109851289219141E15,
        "n" : 2,
        "max" : 1.753031001E9,
        "min" : 1.67416591E9,
        "sum" : 3.427196911E9,
        "standardDeviation" : 5.576604064499416E7
      }, {
        "mean" : 1.776687541E9,
        "variance" : 4.7122414265079216E16,
        "n" : 2,
        "max" : 1.930184144E9,
        "min" : 1.623190938E9,
        "sum" : 3.553375082E9,
        "standardDeviation" : 2.170769777407987E8
      } ],
      "1" : [ {
        "mean" : 1.66399933125E9,
        "variance" : 4.691815950008528E15,
        "n" : 4,
        "max" : 1.745867698E9,
        "min" : 1.607371934E9,
        "sum" : 6.655997325E9,
        "standardDeviation" : 6.84968316786151E7
      }, {
        "mean" : 1.839845019E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.839845019E9,
        "min" : 1.839845019E9,
        "sum" : 1.839845019E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 1.6822737463333333E9,
        "variance" : 4.6093607707606336E13,
        "n" : 1,
        "max" : 1.689955646E9,
        "min" : 1.677078204E9,
        "sum" : 1.6822737463333333E9,
        "standardDeviation" : 6789227.327730773
      }, {
        "mean" : 1.672354677E9,
        "variance" : 6.941383073268281E14,
        "n" : 3,
        "max" : 1.689189279E9,
        "min" : 1.641992321E9,
        "sum" : 5.017064031E9,
        "standardDeviation" : 2.634650465103157E7
      }, {
        "mean" : 1.863214332E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.863214332E9,
        "min" : 1.863214332E9,
        "sum" : 1.863214332E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 1.708312078E9,
        "variance" : 1.1758405646790728E15,
        "n" : 3,
        "max" : 1.747907295E9,
        "min" : 1.688446222E9,
        "sum" : 5.124936234E9,
        "standardDeviation" : 3.429053170598369E7
      }, {
        "mean" : 1.718689212E9,
        "variance" : 6.1564114385928E13,
        "n" : 2,
        "max" : 1.72423737E9,
        "min" : 1.713141054E9,
        "sum" : 3.437378424E9,
        "standardDeviation" : 7846280.289788786
      } ],
      "4" : [ {
        "mean" : 1.77870580475E9,
        "variance" : 5.643577778904612E16,
        "n" : 1,
        "max" : 2.125575923E9,
        "min" : 1.605959713E9,
        "sum" : 1.77870580475E9,
        "standardDeviation" : 2.3756215563310188E8
      }, {
        "mean" : 1.643751977E9,
        "variance" : 4.237104655582281E15,
        "n" : 3,
        "max" : 1.713147398E9,
        "min" : 1.584048041E9,
        "sum" : 4.931255931E9,
        "standardDeviation" : 6.509304613844924E7
      }, {
        "mean" : 1.663988827E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.663988827E9,
        "min" : 1.663988827E9,
        "sum" : 1.663988827E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 1.668028097E9,
        "variance" : 4.782062803097151E15,
        "n" : 3,
        "max" : 1.746844185E9,
        "min" : 1.617525865E9,
        "sum" : 5.004084291E9,
        "standardDeviation" : 6.915246057153101E7
      }, {
        "mean" : 1.7786539845E9,
        "variance" : 3.3302116460802836E16,
        "n" : 2,
        "max" : 1.907692964E9,
        "min" : 1.649615005E9,
        "sum" : 3.557307969E9,
        "standardDeviation" : 1.8248867488368377E8
      } ],
      "6" : [ {
        "mean" : 1.77519005675E9,
        "variance" : 5.508419939737664E16,
        "n" : 1,
        "max" : 2.118733436E9,
        "min" : 1.617418008E9,
        "sum" : 1.77519005675E9,
        "standardDeviation" : 2.3470023305778083E8
      }, {
        "mean" : 1.633741471E9,
        "variance" : 8.678187594379857E15,
        "n" : 3,
        "max" : 1.738869194E9,
        "min" : 1.561446695E9,
        "sum" : 4.901224413E9,
        "standardDeviation" : 9.315679038255803E7
      }, {
        "mean" : 1.633761699E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.633761699E9,
        "min" : 1.633761699E9,
        "sum" : 1.633761699E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 1.7770964923333333E9,
        "variance" : 5.009569758207302E15,
        "n" : 1,
        "max" : 1.847901111E9,
        "min" : 1.706344512E9,
        "sum" : 1.7770964923333333E9,
        "standardDeviation" : 7.077831418031445E7
      }, {
        "mean" : 1.594178446E9,
        "variance" : 1.8498641559768318E15,
        "n" : 2,
        "max" : 1.624591142E9,
        "min" : 1.56376575E9,
        "sum" : 3.188356892E9,
        "standardDeviation" : 4.3010047151529975E7
      }, {
        "mean" : 1.7797839585E9,
        "variance" : 3.236593116426702E16,
        "n" : 2,
        "max" : 1.906996244E9,
        "min" : 1.652571673E9,
        "sum" : 3.559567917E9,
        "standardDeviation" : 1.7990533945457822E8
      } ],
      "8" : [ {
        "mean" : 1.6621295686666667E9,
        "variance" : 5.744531835294183E15,
        "n" : 3,
        "max" : 1.707305512E9,
        "min" : 1.574627173E9,
        "sum" : 4.986388706E9,
        "standardDeviation" : 7.579268985393105E7
      }, {
        "mean" : 1.7823111585E9,
        "variance" : 2.403788798392416E16,
        "n" : 2,
        "max" : 1.891942103E9,
        "min" : 1.672680214E9,
        "sum" : 3.564622317E9,
        "standardDeviation" : 1.5504156856767207E8
      } ],
      "9" : [ {
        "mean" : 1.77065424E9,
        "variance" : 2.877539990400894E16,
        "n" : 1,
        "max" : 1.937905352E9,
        "min" : 1.598735428E9,
        "sum" : 1.77065424E9,
        "standardDeviation" : 1.6963313327298102E8
      }, {
        "mean" : 1.6493560866666667E9,
        "variance" : 1.507959123758274E15,
        "n" : 3,
        "max" : 1.672152871E9,
        "min" : 1.60451836E9,
        "sum" : 4.94806826E9,
        "standardDeviation" : 3.8832449365939744E7
      }, {
        "mean" : 1.688650053E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.688650053E9,
        "min" : 1.688650053E9,
        "sum" : 1.688650053E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 1.6694294753333333E9,
        "variance" : 5.235519060530265E15,
        "n" : 3,
        "max" : 1.75294353E9,
        "min" : 1.625534443E9,
        "sum" : 5.008288426E9,
        "standardDeviation" : 7.235688675261164E7
      }, {
        "mean" : 1.801597293E9,
        "variance" : 7.5800109534888992E16,
        "n" : 2,
        "max" : 1.996276657E9,
        "min" : 1.606917929E9,
        "sum" : 3.603194586E9,
        "standardDeviation" : 2.753181968829685E8
      } ],
      "11" : [ {
        "mean" : 1.670355711E9,
        "variance" : 1.3352250330062802E14,
        "n" : 1,
        "max" : 1.677617897E9,
        "min" : 1.657030909E9,
        "sum" : 1.670355711E9,
        "standardDeviation" : 1.1555193780314894E7
      }, {
        "mean" : 1.6662234196666667E9,
        "variance" : 1.5521809169292248E15,
        "n" : 3,
        "max" : 1.710271982E9,
        "min" : 1.634351599E9,
        "sum" : 4.998670259E9,
        "standardDeviation" : 3.9397727306650884E7
      }, {
        "mean" : 1.801971785E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.801971785E9,
        "min" : 1.801971785E9,
        "sum" : 1.801971785E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 1.6651655283333333E9,
        "variance" : 4.879872317067463E14,
        "n" : 1,
        "max" : 1.689246671E9,
        "min" : 1.645840648E9,
        "sum" : 1.6651655283333333E9,
        "standardDeviation" : 2.2090433035745278E7
      }, {
        "mean" : 1.6737918516666667E9,
        "variance" : 8.534722398173515E15,
        "n" : 3,
        "max" : 1.770102904E9,
        "min" : 1.585914061E9,
        "sum" : 5.021375555E9,
        "standardDeviation" : 9.238356129839072E7
      }, {
        "mean" : 1.954058324E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.954058324E9,
        "min" : 1.954058324E9,
        "sum" : 1.954058324E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 1.746923978E9,
        "variance" : 2.020448475309722E16,
        "n" : 1,
        "max" : 1.890110018E9,
        "min" : 1.605848563E9,
        "sum" : 1.746923978E9,
        "standardDeviation" : 1.4214248046624634E8
      }, {
        "mean" : 1.6708359443333333E9,
        "variance" : 8.812019044345145E15,
        "n" : 3,
        "max" : 1.756697157E9,
        "min" : 1.57060867E9,
        "sum" : 5.012507833E9,
        "standardDeviation" : 9.387235505911815E7
      }, {
        "mean" : 1.699857235E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.699857235E9,
        "min" : 1.699857235E9,
        "sum" : 1.699857235E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 1.664486025E9,
        "variance" : 2.162511370648569E15,
        "n" : 1,
        "max" : 1.716206338E9,
        "min" : 1.626125137E9,
        "sum" : 1.664486025E9,
        "standardDeviation" : 4.6502810352155805E7
      }, {
        "mean" : 1.6581011243333333E9,
        "variance" : 4.779346403863431E15,
        "n" : 3,
        "max" : 1.703634199E9,
        "min" : 1.57855078E9,
        "sum" : 4.974303373E9,
        "standardDeviation" : 6.91328171266254E7
      }, {
        "mean" : 1.873043409E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.873043409E9,
        "min" : 1.873043409E9,
        "sum" : 1.873043409E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 1.665791052E9,
        "variance" : 5.683624823610201E15,
        "n" : 1,
        "max" : 1.752687196E9,
        "min" : 1.617824137E9,
        "sum" : 1.665791052E9,
        "standardDeviation" : 7.538981909787422E7
      }, {
        "mean" : 1.6731459553333333E9,
        "variance" : 7.887232089985556E15,
        "n" : 3,
        "max" : 1.745109734E9,
        "min" : 1.57389367E9,
        "sum" : 5.019437866E9,
        "standardDeviation" : 8.881009002351904E7
      }, {
        "mean" : 1.920082543E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.920082543E9,
        "min" : 1.920082543E9,
        "sum" : 1.920082543E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 1.660002778E9,
        "variance" : 1.3612016057298295E15,
        "n" : 4,
        "max" : 1.711740229E9,
        "min" : 1.624318476E9,
        "sum" : 6.640011112E9,
        "standardDeviation" : 3.68944657872943E7
      }, {
        "mean" : 1.743292355E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.743292355E9,
        "min" : 1.743292355E9,
        "sum" : 1.743292355E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 1.7730512776666667E9,
        "variance" : 1.0726009879553964E16,
        "n" : 1,
        "max" : 1.866294296E9,
        "min" : 1.661581372E9,
        "sum" : 1.7730512776666667E9,
        "standardDeviation" : 1.0356645151570061E8
      }, {
        "mean" : 1.6215988476666667E9,
        "variance" : 5.886677608997766E15,
        "n" : 3,
        "max" : 1.698222042E9,
        "min" : 1.544773069E9,
        "sum" : 4.864796543E9,
        "standardDeviation" : 7.672468708960478E7
      }, {
        "mean" : 1.661582043E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.661582043E9,
        "min" : 1.661582043E9,
        "sum" : 1.661582043E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 1.6715074856666667E9,
        "variance" : 9.130480401323394E15,
        "n" : 3,
        "max" : 1.777494639E9,
        "min" : 1.591952228E9,
        "sum" : 5.014522457E9,
        "standardDeviation" : 9.555354729848282E7
      }, {
        "mean" : 1.8102080615E9,
        "variance" : 4.8442592469675112E16,
        "n" : 2,
        "max" : 1.965839987E9,
        "min" : 1.654576136E9,
        "sum" : 3.620416123E9,
        "standardDeviation" : 2.2009677978033915E8
      } ],
      "19" : [ {
        "mean" : 1.7277498943333333E9,
        "variance" : 3.691977087022543E14,
        "n" : 1,
        "max" : 1.747361961E9,
        "min" : 1.708959272E9,
        "sum" : 1.7277498943333333E9,
        "standardDeviation" : 1.921451817512618E7
      }, {
        "mean" : 1.6002152616666667E9,
        "variance" : 1.968319342390785E15,
        "n" : 3,
        "max" : 1.648443967E9,
        "min" : 1.561140517E9,
        "sum" : 4.800645785E9,
        "standardDeviation" : 4.4365745146348946E7
      }, {
        "mean" : 1.822323057E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.822323057E9,
        "min" : 1.822323057E9,
        "sum" : 1.822323057E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 1.712027492E9,
        "variance" : 2.899344152069919E15,
        "n" : 3,
        "max" : 1.765809437E9,
        "min" : 1.658118545E9,
        "sum" : 5.136082476E9,
        "standardDeviation" : 5.384555833186168E7
      }, {
        "mean" : 1.7684656395E9,
        "variance" : 1.6399996991479205E15,
        "n" : 2,
        "max" : 1.797101279E9,
        "min" : 1.73983E9,
        "sum" : 3.536931279E9,
        "standardDeviation" : 4.0496909748126715E7
      } ],
      "21" : [ {
        "mean" : 1.66194487575E9,
        "variance" : 4.3058912693129255E15,
        "n" : 4,
        "max" : 1.742392272E9,
        "min" : 1.601533466E9,
        "sum" : 6.647779503E9,
        "standardDeviation" : 6.561929037495701E7
      }, {
        "mean" : 1.805089061E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.805089061E9,
        "min" : 1.805089061E9,
        "sum" : 1.805089061E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 1.7490575653333333E9,
        "variance" : 6.088775151092886E15,
        "n" : 1,
        "max" : 1.838873173E9,
        "min" : 1.697933443E9,
        "sum" : 1.7490575653333333E9,
        "standardDeviation" : 7.803060393905E7
      }, {
        "mean" : 1.6406762173333333E9,
        "variance" : 8.85571387990229E15,
        "n" : 3,
        "max" : 1.749257337E9,
        "min" : 1.582736107E9,
        "sum" : 4.922028652E9,
        "standardDeviation" : 9.410480263994123E7
      }, {
        "mean" : 1.673873228E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.673873228E9,
        "min" : 1.673873228E9,
        "sum" : 1.673873228E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 1.7891205466666667E9,
        "variance" : 3.4325760504773408E16,
        "n" : 1,
        "max" : 1.981530874E9,
        "min" : 1.61192489E9,
        "sum" : 1.7891205466666667E9,
        "standardDeviation" : 1.8527212554718912E8
      }, {
        "mean" : 1.618947563E9,
        "variance" : 4.136394915997442E15,
        "n" : 2,
        "max" : 1.664425002E9,
        "min" : 1.573470124E9,
        "sum" : 3.237895126E9,
        "standardDeviation" : 6.431481101579513E7
      }, {
        "mean" : 1.824432997E9,
        "variance" : 2.488291316915202E15,
        "n" : 2,
        "max" : 1.859705446E9,
        "min" : 1.789160548E9,
        "sum" : 3.648865994E9,
        "standardDeviation" : 4.988277575391331E7
      } ],
      "24" : [ {
        "mean" : 1.6788151283333333E9,
        "variance" : 9.441189206445096E15,
        "n" : 3,
        "max" : 1.785218942E9,
        "min" : 1.594793414E9,
        "sum" : 5.036445385E9,
        "standardDeviation" : 9.71657820760225E7
      }, {
        "mean" : 1.732942077E9,
        "variance" : 1.7744748580279218E15,
        "n" : 2,
        "max" : 1.762728608E9,
        "min" : 1.703155546E9,
        "sum" : 3.465884154E9,
        "standardDeviation" : 4.2124516116246626E7
      } ],
      "25" : [ {
        "mean" : 1.757050678E9,
        "variance" : 3.716961013590721E15,
        "n" : 3,
        "max" : 1.793926622E9,
        "min" : 1.686679243E9,
        "sum" : 5.271152034E9,
        "standardDeviation" : 6.096688456523526E7
      }, {
        "mean" : 1.723777895E9,
        "variance" : 4.95718505053245E15,
        "n" : 2,
        "max" : 1.77356336E9,
        "min" : 1.67399243E9,
        "sum" : 3.44755579E9,
        "standardDeviation" : 7.040727981205104E7
      } ],
      "26" : [ {
        "mean" : 1.688487277E9,
        "variance" : 5.878749850150402E15,
        "n" : 3,
        "max" : 1.747488322E9,
        "min" : 1.601821141E9,
        "sum" : 5.065461831E9,
        "standardDeviation" : 7.667300600700615E7
      }, {
        "mean" : 1.8039018405E9,
        "variance" : 1.370000917489054E16,
        "n" : 2,
        "max" : 1.886666595E9,
        "min" : 1.721137086E9,
        "sum" : 3.607803681E9,
        "standardDeviation" : 1.1704703830037965E8
      } ],
      "27" : [ {
        "mean" : 1.6590473303333333E9,
        "variance" : 2.3903813418174565E15,
        "n" : 1,
        "max" : 1.715426606E9,
        "min" : 1.628325046E9,
        "sum" : 1.6590473303333333E9,
        "standardDeviation" : 4.889152627825661E7
      }, {
        "mean" : 1.679790324E9,
        "variance" : 5.374867842947017E15,
        "n" : 3,
        "max" : 1.743213415E9,
        "min" : 1.599519521E9,
        "sum" : 5.039370972E9,
        "standardDeviation" : 7.331349018391511E7
      }, {
        "mean" : 1.879001086E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.879001086E9,
        "min" : 1.879001086E9,
        "sum" : 1.879001086E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 1.699656085E9,
        "variance" : 2.0564054602221728E15,
        "n" : 3,
        "max" : 1.728461276E9,
        "min" : 1.647383961E9,
        "sum" : 5.098968255E9,
        "standardDeviation" : 4.5347606995542474E7
      }, {
        "mean" : 1.790926028E9,
        "variance" : 2.4758751899741472E16,
        "n" : 2,
        "max" : 1.902188672E9,
        "min" : 1.679663384E9,
        "sum" : 3.581852056E9,
        "standardDeviation" : 1.5734914013028947E8
      } ],
      "29" : [ {
        "mean" : 1.606532436E9,
        "variance" : 1.156210799228053E15,
        "n" : 3,
        "max" : 1.639206409E9,
        "min" : 1.571340227E9,
        "sum" : 4.819597308E9,
        "standardDeviation" : 3.400309984733823E7
      }, {
        "mean" : 1.8315350465E9,
        "variance" : 7.524795756014046E14,
        "n" : 2,
        "max" : 1.850931948E9,
        "min" : 1.812138145E9,
        "sum" : 3.663070093E9,
        "standardDeviation" : 2.7431361169315033E7
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 6.531551514E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.531551514E9,
        "min" : 6.531551514E9,
        "sum" : 6.531551514E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.561259179E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.561259179E9,
        "min" : 6.561259179E9,
        "sum" : 6.561259179E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.52165234E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.52165234E9,
        "min" : 6.52165234E9,
        "sum" : 6.52165234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.53959579E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.53959579E9,
        "min" : 6.53959579E9,
        "sum" : 6.53959579E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.54004532E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.54004532E9,
        "min" : 6.54004532E9,
        "sum" : 6.54004532E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 6.542337966E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.542337966E9,
        "min" : 6.542337966E9,
        "sum" : 6.542337966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.619748539E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.619748539E9,
        "min" : 6.619748539E9,
        "sum" : 6.619748539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.524627007E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.524627007E9,
        "min" : 6.524627007E9,
        "sum" : 6.524627007E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.620205951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.620205951E9,
        "min" : 6.620205951E9,
        "sum" : 6.620205951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.488404267E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.488404267E9,
        "min" : 6.488404267E9,
        "sum" : 6.488404267E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 6.448862007E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.448862007E9,
        "min" : 6.448862007E9,
        "sum" : 6.448862007E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.491094754E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.491094754E9,
        "min" : 6.491094754E9,
        "sum" : 6.491094754E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.461581659E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.461581659E9,
        "min" : 6.461581659E9,
        "sum" : 6.461581659E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.458213073E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.458213073E9,
        "min" : 6.458213073E9,
        "sum" : 6.458213073E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.470287804E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.470287804E9,
        "min" : 6.470287804E9,
        "sum" : 6.470287804E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 6.54989716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.54989716E9,
        "min" : 6.54989716E9,
        "sum" : 6.54989716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.552784329E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.552784329E9,
        "min" : 6.552784329E9,
        "sum" : 6.552784329E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.496027375E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.496027375E9,
        "min" : 6.496027375E9,
        "sum" : 6.496027375E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.5718684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.5718684E9,
        "min" : 6.5718684E9,
        "sum" : 6.5718684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.538695955E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.538695955E9,
        "min" : 6.538695955E9,
        "sum" : 6.538695955E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 6.509761569E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.509761569E9,
        "min" : 6.509761569E9,
        "sum" : 6.509761569E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.546997727E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.546997727E9,
        "min" : 6.546997727E9,
        "sum" : 6.546997727E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.546835062E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.546835062E9,
        "min" : 6.546835062E9,
        "sum" : 6.546835062E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.518696212E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.518696212E9,
        "min" : 6.518696212E9,
        "sum" : 6.518696212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.53973721E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.53973721E9,
        "min" : 6.53973721E9,
        "sum" : 6.53973721E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 6.497848038E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.497848038E9,
        "min" : 6.497848038E9,
        "sum" : 6.497848038E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.538877825E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.538877825E9,
        "min" : 6.538877825E9,
        "sum" : 6.538877825E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.49325311E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.49325311E9,
        "min" : 6.49325311E9,
        "sum" : 6.49325311E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.505770766E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.505770766E9,
        "min" : 6.505770766E9,
        "sum" : 6.505770766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.52814103E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.52814103E9,
        "min" : 6.52814103E9,
        "sum" : 6.52814103E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 6.478894257E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.478894257E9,
        "min" : 6.478894257E9,
        "sum" : 6.478894257E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.513929476E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.513929476E9,
        "min" : 6.513929476E9,
        "sum" : 6.513929476E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.459953665E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.459953665E9,
        "min" : 6.459953665E9,
        "sum" : 6.459953665E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.465977175E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.465977175E9,
        "min" : 6.465977175E9,
        "sum" : 6.465977175E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.500400961E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.500400961E9,
        "min" : 6.500400961E9,
        "sum" : 6.500400961E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 6.468922665E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.468922665E9,
        "min" : 6.468922665E9,
        "sum" : 6.468922665E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.490479685E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.490479685E9,
        "min" : 6.490479685E9,
        "sum" : 6.490479685E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.467071698E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.467071698E9,
        "min" : 6.467071698E9,
        "sum" : 6.467071698E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.421134747E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.421134747E9,
        "min" : 6.421134747E9,
        "sum" : 6.421134747E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.480607889E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.480607889E9,
        "min" : 6.480607889E9,
        "sum" : 6.480607889E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 6.529693019E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.529693019E9,
        "min" : 6.529693019E9,
        "sum" : 6.529693019E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.604626626E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.604626626E9,
        "min" : 6.604626626E9,
        "sum" : 6.604626626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.508002558E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.508002558E9,
        "min" : 6.508002558E9,
        "sum" : 6.508002558E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.554638271E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.554638271E9,
        "min" : 6.554638271E9,
        "sum" : 6.554638271E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.580165452E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.580165452E9,
        "min" : 6.580165452E9,
        "sum" : 6.580165452E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 6.532524359E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.532524359E9,
        "min" : 6.532524359E9,
        "sum" : 6.532524359E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.58459792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.58459792E9,
        "min" : 6.58459792E9,
        "sum" : 6.58459792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.543134523E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.543134523E9,
        "min" : 6.543134523E9,
        "sum" : 6.543134523E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.503623324E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.503623324E9,
        "min" : 6.503623324E9,
        "sum" : 6.503623324E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.557166611E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.557166611E9,
        "min" : 6.557166611E9,
        "sum" : 6.557166611E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 6.621700829E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.621700829E9,
        "min" : 6.621700829E9,
        "sum" : 6.621700829E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.578223062E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.578223062E9,
        "min" : 6.578223062E9,
        "sum" : 6.578223062E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.554689545E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.554689545E9,
        "min" : 6.554689545E9,
        "sum" : 6.554689545E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.573878422E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.573878422E9,
        "min" : 6.573878422E9,
        "sum" : 6.573878422E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.546337263E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.546337263E9,
        "min" : 6.546337263E9,
        "sum" : 6.546337263E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 6.479733388E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.479733388E9,
        "min" : 6.479733388E9,
        "sum" : 6.479733388E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.510167826E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.510167826E9,
        "min" : 6.510167826E9,
        "sum" : 6.510167826E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.462596894E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.462596894E9,
        "min" : 6.462596894E9,
        "sum" : 6.462596894E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.478849145E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.478849145E9,
        "min" : 6.478849145E9,
        "sum" : 6.478849145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.490952614E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.490952614E9,
        "min" : 6.490952614E9,
        "sum" : 6.490952614E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 6.508137767E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.508137767E9,
        "min" : 6.508137767E9,
        "sum" : 6.508137767E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.492398484E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.492398484E9,
        "min" : 6.492398484E9,
        "sum" : 6.492398484E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.491181192E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.491181192E9,
        "min" : 6.491181192E9,
        "sum" : 6.491181192E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.495615818E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.495615818E9,
        "min" : 6.495615818E9,
        "sum" : 6.495615818E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.508662845E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.508662845E9,
        "min" : 6.508662845E9,
        "sum" : 6.508662845E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 6.473802632E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.473802632E9,
        "min" : 6.473802632E9,
        "sum" : 6.473802632E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.476227689E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.476227689E9,
        "min" : 6.476227689E9,
        "sum" : 6.476227689E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.438638896E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.438638896E9,
        "min" : 6.438638896E9,
        "sum" : 6.438638896E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.476083815E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.476083815E9,
        "min" : 6.476083815E9,
        "sum" : 6.476083815E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.500173423E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.500173423E9,
        "min" : 6.500173423E9,
        "sum" : 6.500173423E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 6.471545361E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.471545361E9,
        "min" : 6.471545361E9,
        "sum" : 6.471545361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.527443441E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.527443441E9,
        "min" : 6.527443441E9,
        "sum" : 6.527443441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.465995415E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.465995415E9,
        "min" : 6.465995415E9,
        "sum" : 6.465995415E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.500871601E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.500871601E9,
        "min" : 6.500871601E9,
        "sum" : 6.500871601E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.476681707E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.476681707E9,
        "min" : 6.476681707E9,
        "sum" : 6.476681707E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 6.461864759E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.461864759E9,
        "min" : 6.461864759E9,
        "sum" : 6.461864759E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.448734906E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.448734906E9,
        "min" : 6.448734906E9,
        "sum" : 6.448734906E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.475300002E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.475300002E9,
        "min" : 6.475300002E9,
        "sum" : 6.475300002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.491068186E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.491068186E9,
        "min" : 6.491068186E9,
        "sum" : 6.491068186E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.454930716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.454930716E9,
        "min" : 6.454930716E9,
        "sum" : 6.454930716E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 6.545851845E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.545851845E9,
        "min" : 6.545851845E9,
        "sum" : 6.545851845E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.526037669E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.526037669E9,
        "min" : 6.526037669E9,
        "sum" : 6.526037669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.53634295E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.53634295E9,
        "min" : 6.53634295E9,
        "sum" : 6.53634295E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.539117505E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.539117505E9,
        "min" : 6.539117505E9,
        "sum" : 6.539117505E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.536322915E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.536322915E9,
        "min" : 6.536322915E9,
        "sum" : 6.536322915E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 6.742863941E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.742863941E9,
        "min" : 6.742863941E9,
        "sum" : 6.742863941E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.705481349E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.705481349E9,
        "min" : 6.705481349E9,
        "sum" : 6.705481349E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.701634993E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.701634993E9,
        "min" : 6.701634993E9,
        "sum" : 6.701634993E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.713271969E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.713271969E9,
        "min" : 6.713271969E9,
        "sum" : 6.713271969E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.675762094E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.675762094E9,
        "min" : 6.675762094E9,
        "sum" : 6.675762094E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 6.615936484E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.615936484E9,
        "min" : 6.615936484E9,
        "sum" : 6.615936484E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.743315933E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.743315933E9,
        "min" : 6.743315933E9,
        "sum" : 6.743315933E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.699044228E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.699044228E9,
        "min" : 6.699044228E9,
        "sum" : 6.699044228E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.68273198E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.68273198E9,
        "min" : 6.68273198E9,
        "sum" : 6.68273198E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.653594966E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.653594966E9,
        "min" : 6.653594966E9,
        "sum" : 6.653594966E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 6.605668091E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.605668091E9,
        "min" : 6.605668091E9,
        "sum" : 6.605668091E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.648274323E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.648274323E9,
        "min" : 6.648274323E9,
        "sum" : 6.648274323E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.60082936E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.60082936E9,
        "min" : 6.60082936E9,
        "sum" : 6.60082936E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.583408283E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.583408283E9,
        "min" : 6.583408283E9,
        "sum" : 6.583408283E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.573692249E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.573692249E9,
        "min" : 6.573692249E9,
        "sum" : 6.573692249E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 6.523241372E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.523241372E9,
        "min" : 6.523241372E9,
        "sum" : 6.523241372E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.495991313E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.495991313E9,
        "min" : 6.495991313E9,
        "sum" : 6.495991313E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.507725791E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.507725791E9,
        "min" : 6.507725791E9,
        "sum" : 6.507725791E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.500113711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.500113711E9,
        "min" : 6.500113711E9,
        "sum" : 6.500113711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.493823226E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.493823226E9,
        "min" : 6.493823226E9,
        "sum" : 6.493823226E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 6.747337995E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.747337995E9,
        "min" : 6.747337995E9,
        "sum" : 6.747337995E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.728705975E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.728705975E9,
        "min" : 6.728705975E9,
        "sum" : 6.728705975E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.753424709E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.753424709E9,
        "min" : 6.753424709E9,
        "sum" : 6.753424709E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.743427335E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.743427335E9,
        "min" : 6.743427335E9,
        "sum" : 6.743427335E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.731689011E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.731689011E9,
        "min" : 6.731689011E9,
        "sum" : 6.731689011E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 6.572846229E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.572846229E9,
        "min" : 6.572846229E9,
        "sum" : 6.572846229E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.546169604E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.546169604E9,
        "min" : 6.546169604E9,
        "sum" : 6.546169604E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.518756792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.518756792E9,
        "min" : 6.518756792E9,
        "sum" : 6.518756792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.55706446E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.55706446E9,
        "min" : 6.55706446E9,
        "sum" : 6.55706446E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.535993405E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.535993405E9,
        "min" : 6.535993405E9,
        "sum" : 6.535993405E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 6.514219042E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.514219042E9,
        "min" : 6.514219042E9,
        "sum" : 6.514219042E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.525219789E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.525219789E9,
        "min" : 6.525219789E9,
        "sum" : 6.525219789E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.530660924E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.530660924E9,
        "min" : 6.530660924E9,
        "sum" : 6.530660924E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.530190974E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.530190974E9,
        "min" : 6.530190974E9,
        "sum" : 6.530190974E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.491546634E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.491546634E9,
        "min" : 6.491546634E9,
        "sum" : 6.491546634E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 6.516906197E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.516906197E9,
        "min" : 6.516906197E9,
        "sum" : 6.516906197E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.596571025E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.596571025E9,
        "min" : 6.596571025E9,
        "sum" : 6.596571025E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.543345626E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.543345626E9,
        "min" : 6.543345626E9,
        "sum" : 6.543345626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.574404624E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.574404624E9,
        "min" : 6.574404624E9,
        "sum" : 6.574404624E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.527171361E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.527171361E9,
        "min" : 6.527171361E9,
        "sum" : 6.527171361E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 6.48259146E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.48259146E9,
        "min" : 6.48259146E9,
        "sum" : 6.48259146E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.474864049E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.474864049E9,
        "min" : 6.474864049E9,
        "sum" : 6.474864049E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.455869248E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.455869248E9,
        "min" : 6.455869248E9,
        "sum" : 6.455869248E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.485994983E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.485994983E9,
        "min" : 6.485994983E9,
        "sum" : 6.485994983E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.482824948E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.482824948E9,
        "min" : 6.482824948E9,
        "sum" : 6.482824948E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 6.489956331E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.489956331E9,
        "min" : 6.489956331E9,
        "sum" : 6.489956331E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.481092842E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.481092842E9,
        "min" : 6.481092842E9,
        "sum" : 6.481092842E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.493644922E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.493644922E9,
        "min" : 6.493644922E9,
        "sum" : 6.493644922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.477594045E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.477594045E9,
        "min" : 6.477594045E9,
        "sum" : 6.477594045E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.485701912E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.485701912E9,
        "min" : 6.485701912E9,
        "sum" : 6.485701912E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 6.607575756E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.607575756E9,
        "min" : 6.607575756E9,
        "sum" : 6.607575756E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.592146928E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.592146928E9,
        "min" : 6.592146928E9,
        "sum" : 6.592146928E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.535055301E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.535055301E9,
        "min" : 6.535055301E9,
        "sum" : 6.535055301E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.580300935E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.580300935E9,
        "min" : 6.580300935E9,
        "sum" : 6.580300935E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.579458297E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.579458297E9,
        "min" : 6.579458297E9,
        "sum" : 6.579458297E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 6.459978658E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.459978658E9,
        "min" : 6.459978658E9,
        "sum" : 6.459978658E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.447773337E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.447773337E9,
        "min" : 6.447773337E9,
        "sum" : 6.447773337E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.439149384E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.439149384E9,
        "min" : 6.439149384E9,
        "sum" : 6.439149384E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.454685776E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.454685776E9,
        "min" : 6.454685776E9,
        "sum" : 6.454685776E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.42929542E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.42929542E9,
        "min" : 6.42929542E9,
        "sum" : 6.42929542E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 6.478387873E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.478387873E9,
        "min" : 6.478387873E9,
        "sum" : 6.478387873E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.522921129E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.522921129E9,
        "min" : 6.522921129E9,
        "sum" : 6.522921129E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.458743099E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.458743099E9,
        "min" : 6.458743099E9,
        "sum" : 6.458743099E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.4497482E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.4497482E9,
        "min" : 6.4497482E9,
        "sum" : 6.4497482E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 6.449715067E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 6.449715067E9,
        "min" : 6.449715067E9,
        "sum" : 6.449715067E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ {
    "call" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
    "kiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createEdgesFromCSV()",
    "otherKiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createEdgesFromCSV()",
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
    "key" : "csv.io.reader.CSVReaderTest.createEdgesFromCSV_",
    "otherKey" : "csv.io.reader.CSVReaderTest.createEdgesFromCSV_",
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#00FF00",
    "statistic" : {
      "meanOld" : 6.221720728000002E9,
      "meanCurrent" : 1.704455697747222E9,
      "deviationOld" : 7.182727962109773E7,
      "deviationCurrent" : 2.4963875237966795E7,
      "vms" : 30,
      "callsOld" : 150,
      "calls" : 150,
      "tvalue" : 325.3747836386384,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "FASTER",
    "inVMDeviationPredecessor" : 2.2377875886788536E7,
    "inVMDeviation" : 8.450473158809817E7,
    "ess" : 1,
    "values" : [ 1.7462825038E9, 1.698031902E9, 1.7114465246E9, 1.711354656E9, 1.6735268244E9, 1.7113151068E9, 1.66083714435E9, 1.7039761942E9, 1.70916634E9, 1.6803616735333333E9, 1.7211137404E9, 1.6930958693333335E9, 1.7269361916666665E9, 1.6908225197333333E9, 1.7012877780666666E9, 1.7199361868E9, 1.6754149812E9, 1.6589297086E9, 1.7259599178E9, 1.6690934704E9, 1.7333521622E9, 1.6894409242E9, 1.667930289E9, 1.7338769442E9, 1.6993368202E9, 1.7426787768E9, 1.7333659398E9, 1.7143709863333335E9, 1.735050484E9, 1.695378372E9 ],
    "valuesPredecessor" : [ 6.2225939514E9, 6.2487946242E9, 6.1495909444E9, 6.2268957574E9, 6.2251161898E9, 6.1967898206E9, 6.1640303858E9, 6.1586043328E9, 6.2383407566E9, 6.230925401E9, 6.2636854398E9, 6.1710352382E9, 6.1910662436E9, 6.1599303682E9, 6.1751422052E9, 6.1505800448E9, 6.219137521E9, 6.3965416932E9, 6.36588782E9, 6.2852552212E9, 6.1958929714E9, 6.4302817098E9, 6.233303624E9, 6.2080563912E9, 6.241768776E9, 6.1684386436E9, 6.1723334576E9, 6.266724686E9, 6.1330918942E9, 6.161785727E9 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1.755529639E9,
          "variance" : 5.6740057377632112E16,
          "n" : 1,
          "max" : 2.030538822E9,
          "min" : 1.613839438E9,
          "sum" : 1.755529639E9,
          "standardDeviation" : 2.3820171573192355E8
        }, {
          "mean" : 1.712506516E9,
          "variance" : 3.09813581448E15,
          "n" : 2,
          "max" : 1.751864716E9,
          "min" : 1.673148316E9,
          "sum" : 3.425013032E9,
          "standardDeviation" : 5.566090023059275E7
        }, {
          "mean" : 1.775434924E9,
          "variance" : 4.6919165559331584E16,
          "n" : 2,
          "max" : 1.928600138E9,
          "min" : 1.62226971E9,
          "sum" : 3.550869848E9,
          "standardDeviation" : 2.1660832292257744E8
        } ],
        "1" : [ {
          "mean" : 1.66291516925E9,
          "variance" : 4.680875729587166E15,
          "n" : 4,
          "max" : 1.74469679E9,
          "min" : 1.60633538E9,
          "sum" : 6.651660677E9,
          "standardDeviation" : 6.841692575369903E7
        }, {
          "mean" : 1.838498833E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.838498833E9,
          "min" : 1.838498833E9,
          "sum" : 1.838498833E9,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1.681159843E9,
          "variance" : 4.701741575222499E13,
          "n" : 1,
          "max" : 1.688957728E9,
          "min" : 1.676072558E9,
          "sum" : 1.681159843E9,
          "standardDeviation" : 6856924.657032845
        }, {
          "mean" : 1.671369453E9,
          "variance" : 6.91601020432924E14,
          "n" : 3,
          "max" : 1.688173463E9,
          "min" : 1.641062655E9,
          "sum" : 5.014108359E9,
          "standardDeviation" : 2.6298308318842944E7
        }, {
          "mean" : 1.861964421E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.861964421E9,
          "min" : 1.861964421E9,
          "sum" : 1.861964421E9,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1.7072314736666667E9,
          "variance" : 1.1703311404885545E15,
          "n" : 3,
          "max" : 1.746733798E9,
          "min" : 1.687403372E9,
          "sum" : 5.121694421E9,
          "standardDeviation" : 3.421010290087644E7
        }, {
          "mean" : 1.7175394295E9,
          "variance" : 6.137771552251251E13,
          "n" : 2,
          "max" : 1.723079182E9,
          "min" : 1.711999677E9,
          "sum" : 3.435078859E9,
          "standardDeviation" : 7834393.11769026
        } ],
        "4" : [ {
          "mean" : 1.776821021E9,
          "variance" : 5.573328005153504E16,
          "n" : 1,
          "max" : 2.121476758E9,
          "min" : 1.604970467E9,
          "sum" : 1.776821021E9,
          "standardDeviation" : 2.3607896994763222E8
        }, {
          "mean" : 1.642666984E9,
          "variance" : 4.225512293809429E15,
          "n" : 3,
          "max" : 1.711946831E9,
          "min" : 1.583012277E9,
          "sum" : 4.928000952E9,
          "standardDeviation" : 6.500394060216218E7
        }, {
          "mean" : 1.662812149E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.662812149E9,
          "min" : 1.662812149E9,
          "sum" : 1.662812149E9,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 1.667114569E9,
          "variance" : 4.772057562272357E15,
          "n" : 3,
          "max" : 1.745856025E9,
          "min" : 1.616703239E9,
          "sum" : 5.001343707E9,
          "standardDeviation" : 6.908008079231203E7
        }, {
          "mean" : 1.7776159135E9,
          "variance" : 3.321038912369976E16,
          "n" : 2,
          "max" : 1.906477058E9,
          "min" : 1.648754769E9,
          "sum" : 3.555231827E9,
          "standardDeviation" : 1.8223717821481916E8
        } ],
        "6" : [ {
          "mean" : 1.77321955675E9,
          "variance" : 5.4302260259221632E16,
          "n" : 1,
          "max" : 2.114283685E9,
          "min" : 1.616494067E9,
          "sum" : 1.77321955675E9,
          "standardDeviation" : 2.330284537545182E8
        }, {
          "mean" : 1.632731485E9,
          "variance" : 8.658537462345121E15,
          "n" : 3,
          "max" : 1.737740676E9,
          "min" : 1.56052055E9,
          "sum" : 4.898194455E9,
          "standardDeviation" : 9.305126255105366E7
        }, {
          "mean" : 1.63277171E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.63277171E9,
          "min" : 1.63277171E9,
          "sum" : 1.63277171E9,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 1.775923592E9,
          "variance" : 5.023762286569582E15,
          "n" : 1,
          "max" : 1.846832196E9,
          "min" : 1.705075227E9,
          "sum" : 1.775923592E9,
          "standardDeviation" : 7.087850369872083E7
        }, {
          "mean" : 1.5932922645E9,
          "variance" : 1.8477130834301448E15,
          "n" : 2,
          "max" : 1.623687273E9,
          "min" : 1.562897256E9,
          "sum" : 3.186584529E9,
          "standardDeviation" : 4.298503324914551E7
        }, {
          "mean" : 1.778686425E9,
          "variance" : 3.2303382890766044E16,
          "n" : 2,
          "max" : 1.90577573E9,
          "min" : 1.65159712E9,
          "sum" : 3.55737285E9,
          "standardDeviation" : 1.797314187635708E8
        } ],
        "8" : [ {
          "mean" : 1.661116556E9,
          "variance" : 5.732689690915334E15,
          "n" : 3,
          "max" : 1.706229117E9,
          "min" : 1.573704032E9,
          "sum" : 4.983349668E9,
          "standardDeviation" : 7.571452760808413E7
        }, {
          "mean" : 1.781241016E9,
          "variance" : 2.3984631831962976E16,
          "n" : 2,
          "max" : 1.890750449E9,
          "min" : 1.671731583E9,
          "sum" : 3.562482032E9,
          "standardDeviation" : 1.5486972535638776E8
        } ],
        "9" : [ {
          "mean" : 1.7693903206666667E9,
          "variance" : 2.8668372895072784E16,
          "n" : 1,
          "max" : 1.936395866E9,
          "min" : 1.597852136E9,
          "sum" : 1.7693903206666667E9,
          "standardDeviation" : 1.69317373281872E8
        }, {
          "mean" : 1.6483016176666667E9,
          "variance" : 1.4998718589693322E15,
          "n" : 3,
          "max" : 1.671014541E9,
          "min" : 1.603584038E9,
          "sum" : 4.944904853E9,
          "standardDeviation" : 3.8728179133149706E7
        }, {
          "mean" : 1.687513194E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.687513194E9,
          "min" : 1.687513194E9,
          "sum" : 1.687513194E9,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1.6683124893333333E9,
          "variance" : 5.226357956691235E15,
          "n" : 3,
          "max" : 1.751754141E9,
          "min" : 1.624476E9,
          "sum" : 5.004937468E9,
          "standardDeviation" : 7.22935540466177E7
        }, {
          "mean" : 1.800315617E9,
          "variance" : 7.56356216054408E16,
          "n" : 2,
          "max" : 1.994783637E9,
          "min" : 1.605847597E9,
          "sum" : 3.600631234E9,
          "standardDeviation" : 2.750193113318423E8
        } ],
        "11" : [ {
          "mean" : 1.6692133306666667E9,
          "variance" : 1.3193601795801233E14,
          "n" : 1,
          "max" : 1.676279114E9,
          "min" : 1.655959737E9,
          "sum" : 1.6692133306666667E9,
          "standardDeviation" : 1.1486340494605422E7
        }, {
          "mean" : 1.6651861853333333E9,
          "variance" : 1.5519143366570742E15,
          "n" : 3,
          "max" : 1.709228187E9,
          "min" : 1.633309176E9,
          "sum" : 4.995558556E9,
          "standardDeviation" : 3.939434396784739E7
        }, {
          "mean" : 1.80070746E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.80070746E9,
          "min" : 1.80070746E9,
          "sum" : 1.80070746E9,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1.6637408903333333E9,
          "variance" : 4.575141928568583E14,
          "n" : 1,
          "max" : 1.686961862E9,
          "min" : 1.644843152E9,
          "sum" : 1.6637408903333333E9,
          "standardDeviation" : 2.1389581409107994E7
        }, {
          "mean" : 1.6727478806666667E9,
          "variance" : 8.510677100974962E15,
          "n" : 3,
          "max" : 1.768929377E9,
          "min" : 1.585002159E9,
          "sum" : 5.018243642E9,
          "standardDeviation" : 9.225333111045347E7
        }, {
          "mean" : 1.952696426E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.952696426E9,
          "min" : 1.952696426E9,
          "sum" : 1.952696426E9,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 1.7457849006666667E9,
          "variance" : 2.015232817381446E16,
          "n" : 1,
          "max" : 1.888857076E9,
          "min" : 1.604966112E9,
          "sum" : 1.7457849006666667E9,
          "standardDeviation" : 1.419588960714138E8
        }, {
          "mean" : 1.6698336586666667E9,
          "variance" : 8.77928754619663E15,
          "n" : 3,
          "max" : 1.755543625E9,
          "min" : 1.56979792E9,
          "sum" : 5.009500976E9,
          "standardDeviation" : 9.369785240973578E7
        }, {
          "mean" : 1.698826722E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.698826722E9,
          "min" : 1.698826722E9,
          "sum" : 1.698826722E9,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1.6634301943333333E9,
          "variance" : 2.1418676378312565E15,
          "n" : 1,
          "max" : 1.714904907E9,
          "min" : 1.625257682E9,
          "sum" : 1.6634301943333333E9,
          "standardDeviation" : 4.628031587868925E7
        }, {
          "mean" : 1.6570921576666667E9,
          "variance" : 4.768518019750278E15,
          "n" : 3,
          "max" : 1.702573439E9,
          "min" : 1.577631963E9,
          "sum" : 4.971276473E9,
          "standardDeviation" : 6.905445691445468E7
        }, {
          "mean" : 1.871732223E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.871732223E9,
          "min" : 1.871732223E9,
          "sum" : 1.871732223E9,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 1.66467075E9,
          "variance" : 5.639245818894288E15,
          "n" : 1,
          "max" : 1.751223387E9,
          "min" : 1.616841785E9,
          "sum" : 1.66467075E9,
          "standardDeviation" : 7.509491207062092E7
        }, {
          "mean" : 1.672085132E9,
          "variance" : 7.869374650846589E15,
          "n" : 3,
          "max" : 1.743942104E9,
          "min" : 1.572936346E9,
          "sum" : 5.016255396E9,
          "standardDeviation" : 8.870949583244507E7
        }, {
          "mean" : 1.918754788E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.918754788E9,
          "min" : 1.918754788E9,
          "sum" : 1.918754788E9,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1.65879529325E9,
          "variance" : 1.3565724577172815E15,
          "n" : 4,
          "max" : 1.710472587E9,
          "min" : 1.623232615E9,
          "sum" : 6.635181173E9,
          "standardDeviation" : 3.683167736768557E7
        }, {
          "mean" : 1.741893733E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.741893733E9,
          "min" : 1.741893733E9,
          "sum" : 1.741893733E9,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 1.771928267E9,
          "variance" : 1.069154640443704E16,
          "n" : 1,
          "max" : 1.865134702E9,
          "min" : 1.660703329E9,
          "sum" : 1.771928267E9,
          "standardDeviation" : 1.033999342574116E8
        }, {
          "mean" : 1.6206982066666667E9,
          "variance" : 5.865374543772487E15,
          "n" : 3,
          "max" : 1.697169404E9,
          "min" : 1.543998449E9,
          "sum" : 4.86209462E9,
          "standardDeviation" : 7.658573329134145E7
        }, {
          "mean" : 1.660625656E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.660625656E9,
          "min" : 1.660625656E9,
          "sum" : 1.660625656E9,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1.670544409E9,
          "variance" : 9.11420189311064E15,
          "n" : 3,
          "max" : 1.776434164E9,
          "min" : 1.591052936E9,
          "sum" : 5.011633227E9,
          "standardDeviation" : 9.546832926741014E7
        }, {
          "mean" : 1.809083181E9,
          "variance" : 4.8344940677700576E16,
          "n" : 2,
          "max" : 1.964558164E9,
          "min" : 1.653608198E9,
          "sum" : 3.618166362E9,
          "standardDeviation" : 2.1987482956832638E8
        } ],
        "19" : [ {
          "mean" : 1.726484669E9,
          "variance" : 3.7648600673419206E14,
          "n" : 1,
          "max" : 1.746203653E9,
          "min" : 1.707413377E9,
          "sum" : 1.726484669E9,
          "standardDeviation" : 1.940324732446072E7
        }, {
          "mean" : 1.5993139163333333E9,
          "variance" : 1.9630883487942972E15,
          "n" : 3,
          "max" : 1.647459501E9,
          "min" : 1.560254785E9,
          "sum" : 4.797941749E9,
          "standardDeviation" : 4.430675285771117E7
        }, {
          "mean" : 1.821040934E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.821040934E9,
          "min" : 1.821040934E9,
          "sum" : 1.821040934E9,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1.710830494E9,
          "variance" : 2.888333218883017E15,
          "n" : 3,
          "max" : 1.764530261E9,
          "min" : 1.657043935E9,
          "sum" : 5.132491482E9,
          "standardDeviation" : 5.374321556143638E7
        }, {
          "mean" : 1.7671346645E9,
          "variance" : 1.6311292944771125E15,
          "n" : 2,
          "max" : 1.795692757E9,
          "min" : 1.738576572E9,
          "sum" : 3.534269329E9,
          "standardDeviation" : 4.038724172900537E7
        } ],
        "21" : [ {
          "mean" : 1.6609027885E9,
          "variance" : 4.2924228903390355E15,
          "n" : 4,
          "max" : 1.741235298E9,
          "min" : 1.600558317E9,
          "sum" : 6.643611154E9,
          "standardDeviation" : 6.5516584849479415E7
        }, {
          "mean" : 1.803593467E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.803593467E9,
          "min" : 1.803593467E9,
          "sum" : 1.803593467E9,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 1.747785985E9,
          "variance" : 6.08104867194526E15,
          "n" : 1,
          "max" : 1.837561298E9,
          "min" : 1.696869767E9,
          "sum" : 1.747785985E9,
          "standardDeviation" : 7.79810789355037E7
        }, {
          "mean" : 1.639687776E9,
          "variance" : 8.827772859902487E15,
          "n" : 3,
          "max" : 1.748095979E9,
          "min" : 1.581806855E9,
          "sum" : 4.919063328E9,
          "standardDeviation" : 9.395622842527518E7
        }, {
          "mean" : 1.672802132E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.672802132E9,
          "min" : 1.672802132E9,
          "sum" : 1.672802132E9,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 1.787621372E9,
          "variance" : 3.4215108942880724E16,
          "n" : 1,
          "max" : 1.979849901E9,
          "min" : 1.610876757E9,
          "sum" : 1.787621372E9,
          "standardDeviation" : 1.8497326548147634E8
        }, {
          "mean" : 1.6179474755E9,
          "variance" : 4.1282045765481125E15,
          "n" : 2,
          "max" : 1.663379868E9,
          "min" : 1.572515083E9,
          "sum" : 3.235894951E9,
          "standardDeviation" : 6.4251105644557685E7
        }, {
          "mean" : 1.822934199E9,
          "variance" : 2.4853349534342415E15,
          "n" : 2,
          "max" : 1.858185688E9,
          "min" : 1.78768271E9,
          "sum" : 3.645868398E9,
          "standardDeviation" : 4.985313383764597E7
        } ],
        "24" : [ {
          "mean" : 1.677716654E9,
          "variance" : 9.424194029274726E15,
          "n" : 3,
          "max" : 1.784016822E9,
          "min" : 1.593754239E9,
          "sum" : 5.033149962E9,
          "standardDeviation" : 9.707828814557211E7
        }, {
          "mean" : 1.7317670695E9,
          "variance" : 1.7643090785609648E15,
          "n" : 2,
          "max" : 1.761468156E9,
          "min" : 1.702065983E9,
          "sum" : 3.463534139E9,
          "standardDeviation" : 4.200367934551644E7
        } ],
        "25" : [ {
          "mean" : 1.7560028883333333E9,
          "variance" : 3.708433329347462E15,
          "n" : 3,
          "max" : 1.79285052E9,
          "min" : 1.685712683E9,
          "sum" : 5.268008665E9,
          "standardDeviation" : 6.089690738738267E7
        }, {
          "mean" : 1.7226926095E9,
          "variance" : 4.932529263823E15,
          "n" : 2,
          "max" : 1.77235411E9,
          "min" : 1.673031109E9,
          "sum" : 3.445385219E9,
          "standardDeviation" : 7.023196753489824E7
        } ],
        "26" : [ {
          "mean" : 1.687267291E9,
          "variance" : 5.85992294577029E15,
          "n" : 3,
          "max" : 1.746183485E9,
          "min" : 1.600742702E9,
          "sum" : 5.061801873E9,
          "standardDeviation" : 7.655013354508463E7
        }, {
          "mean" : 1.802513913E9,
          "variance" : 1.3638240276770592E16,
          "n" : 2,
          "max" : 1.885091877E9,
          "min" : 1.719935949E9,
          "sum" : 3.605027826E9,
          "standardDeviation" : 1.167828766419572E8
        } ],
        "27" : [ {
          "mean" : 1.6579205066666667E9,
          "variance" : 2.353989089754898E15,
          "n" : 1,
          "max" : 1.71386918E9,
          "min" : 1.627436478E9,
          "sum" : 1.6579205066666667E9,
          "standardDeviation" : 4.851792544776516E7
        }, {
          "mean" : 1.6787543423333333E9,
          "variance" : 5.359937303153896E15,
          "n" : 3,
          "max" : 1.742080297E9,
          "min" : 1.598590799E9,
          "sum" : 5.036263027E9,
          "standardDeviation" : 7.321159268281148E7
        }, {
          "mean" : 1.877671398E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.877671398E9,
          "min" : 1.877671398E9,
          "sum" : 1.877671398E9,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1.6986059803333333E9,
          "variance" : 2.0562465159447292E15,
          "n" : 3,
          "max" : 1.727390637E9,
          "min" : 1.646334513E9,
          "sum" : 5.095817941E9,
          "standardDeviation" : 4.534585445158939E7
        }, {
          "mean" : 1.7897172395E9,
          "variance" : 2.4657998805961512E16,
          "n" : 2,
          "max" : 1.900753267E9,
          "min" : 1.678681212E9,
          "sum" : 3.579434479E9,
          "standardDeviation" : 1.5702865600253195E8
        } ],
        "29" : [ {
          "mean" : 1.6055377073333333E9,
          "variance" : 1.1521557000337102E15,
          "n" : 3,
          "max" : 1.638129905E9,
          "min" : 1.570387771E9,
          "sum" : 4.816613122E9,
          "standardDeviation" : 3.394341909757634E7
        }, {
          "mean" : 1.830139369E9,
          "variance" : 7.449560681922E14,
          "n" : 2,
          "max" : 1.849439059E9,
          "min" : 1.810839679E9,
          "sum" : 3.660278738E9,
          "standardDeviation" : 2.72938833475964E7
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 6.218335957E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.218335957E9,
          "min" : 6.218335957E9,
          "sum" : 6.218335957E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.247803168E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.247803168E9,
          "min" : 6.247803168E9,
          "sum" : 6.247803168E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.208145812E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.208145812E9,
          "min" : 6.208145812E9,
          "sum" : 6.208145812E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.227218223E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.227218223E9,
          "min" : 6.227218223E9,
          "sum" : 6.227218223E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.211466597E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.211466597E9,
          "min" : 6.211466597E9,
          "sum" : 6.211466597E9,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 6.231578512E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.231578512E9,
          "min" : 6.231578512E9,
          "sum" : 6.231578512E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.309445895E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.309445895E9,
          "min" : 6.309445895E9,
          "sum" : 6.309445895E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.215070431E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.215070431E9,
          "min" : 6.215070431E9,
          "sum" : 6.215070431E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.308961972E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.308961972E9,
          "min" : 6.308961972E9,
          "sum" : 6.308961972E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.178916311E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.178916311E9,
          "min" : 6.178916311E9,
          "sum" : 6.178916311E9,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 6.138429812E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.138429812E9,
          "min" : 6.138429812E9,
          "sum" : 6.138429812E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.167274277E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.167274277E9,
          "min" : 6.167274277E9,
          "sum" : 6.167274277E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.136840373E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.136840373E9,
          "min" : 6.136840373E9,
          "sum" : 6.136840373E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.147249853E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.147249853E9,
          "min" : 6.147249853E9,
          "sum" : 6.147249853E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.158160407E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.158160407E9,
          "min" : 6.158160407E9,
          "sum" : 6.158160407E9,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 6.223740038E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.223740038E9,
          "min" : 6.223740038E9,
          "sum" : 6.223740038E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.241314241E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.241314241E9,
          "min" : 6.241314241E9,
          "sum" : 6.241314241E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.18446533E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.18446533E9,
          "min" : 6.18446533E9,
          "sum" : 6.18446533E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.25957643E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.25957643E9,
          "min" : 6.25957643E9,
          "sum" : 6.25957643E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.225382748E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.225382748E9,
          "min" : 6.225382748E9,
          "sum" : 6.225382748E9,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 6.202824144E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.202824144E9,
          "min" : 6.202824144E9,
          "sum" : 6.202824144E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.240978094E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.240978094E9,
          "min" : 6.240978094E9,
          "sum" : 6.240978094E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.238644863E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.238644863E9,
          "min" : 6.238644863E9,
          "sum" : 6.238644863E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.211709914E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.211709914E9,
          "min" : 6.211709914E9,
          "sum" : 6.211709914E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.231423934E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.231423934E9,
          "min" : 6.231423934E9,
          "sum" : 6.231423934E9,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 6.188353637E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.188353637E9,
          "min" : 6.188353637E9,
          "sum" : 6.188353637E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.214148325E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.214148325E9,
          "min" : 6.214148325E9,
          "sum" : 6.214148325E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.182500533E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.182500533E9,
          "min" : 6.182500533E9,
          "sum" : 6.182500533E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.181067586E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.181067586E9,
          "min" : 6.181067586E9,
          "sum" : 6.181067586E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.217879022E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.217879022E9,
          "min" : 6.217879022E9,
          "sum" : 6.217879022E9,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 6.164150482E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.164150482E9,
          "min" : 6.164150482E9,
          "sum" : 6.164150482E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.185504253E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.185504253E9,
          "min" : 6.185504253E9,
          "sum" : 6.185504253E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.133949601E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.133949601E9,
          "min" : 6.133949601E9,
          "sum" : 6.133949601E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.148982684E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.148982684E9,
          "min" : 6.148982684E9,
          "sum" : 6.148982684E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.187564909E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.187564909E9,
          "min" : 6.187564909E9,
          "sum" : 6.187564909E9,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 6.160583335E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.160583335E9,
          "min" : 6.160583335E9,
          "sum" : 6.160583335E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.182325376E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.182325376E9,
          "min" : 6.182325376E9,
          "sum" : 6.182325376E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.161509552E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.161509552E9,
          "min" : 6.161509552E9,
          "sum" : 6.161509552E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.115418951E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.115418951E9,
          "min" : 6.115418951E9,
          "sum" : 6.115418951E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.17318445E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.17318445E9,
          "min" : 6.17318445E9,
          "sum" : 6.17318445E9,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 6.218388232E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.218388232E9,
          "min" : 6.218388232E9,
          "sum" : 6.218388232E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.278618665E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.278618665E9,
          "min" : 6.278618665E9,
          "sum" : 6.278618665E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.183184995E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.183184995E9,
          "min" : 6.183184995E9,
          "sum" : 6.183184995E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.243340548E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.243340548E9,
          "min" : 6.243340548E9,
          "sum" : 6.243340548E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.268171343E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.268171343E9,
          "min" : 6.268171343E9,
          "sum" : 6.268171343E9,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 6.221926191E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.221926191E9,
          "min" : 6.221926191E9,
          "sum" : 6.221926191E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.274032996E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.274032996E9,
          "min" : 6.274032996E9,
          "sum" : 6.274032996E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.219556435E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.219556435E9,
          "min" : 6.219556435E9,
          "sum" : 6.219556435E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.193680799E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.193680799E9,
          "min" : 6.193680799E9,
          "sum" : 6.193680799E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.245430584E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.245430584E9,
          "min" : 6.245430584E9,
          "sum" : 6.245430584E9,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 6.312172709E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.312172709E9,
          "min" : 6.312172709E9,
          "sum" : 6.312172709E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.269285737E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.269285737E9,
          "min" : 6.269285737E9,
          "sum" : 6.269285737E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.248525862E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.248525862E9,
          "min" : 6.248525862E9,
          "sum" : 6.248525862E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.266015019E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.266015019E9,
          "min" : 6.266015019E9,
          "sum" : 6.266015019E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.222427872E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.222427872E9,
          "min" : 6.222427872E9,
          "sum" : 6.222427872E9,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 6.167378309E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.167378309E9,
          "min" : 6.167378309E9,
          "sum" : 6.167378309E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.19707949E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.19707949E9,
          "min" : 6.19707949E9,
          "sum" : 6.19707949E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.151498244E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.151498244E9,
          "min" : 6.151498244E9,
          "sum" : 6.151498244E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.164515923E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.164515923E9,
          "min" : 6.164515923E9,
          "sum" : 6.164515923E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.174704225E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.174704225E9,
          "min" : 6.174704225E9,
          "sum" : 6.174704225E9,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 6.201228357E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.201228357E9,
          "min" : 6.201228357E9,
          "sum" : 6.201228357E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.183775263E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.183775263E9,
          "min" : 6.183775263E9,
          "sum" : 6.183775263E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.183305889E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.183305889E9,
          "min" : 6.183305889E9,
          "sum" : 6.183305889E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.18838128E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.18838128E9,
          "min" : 6.18838128E9,
          "sum" : 6.18838128E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.198640429E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.198640429E9,
          "min" : 6.198640429E9,
          "sum" : 6.198640429E9,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 6.163693278E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.163693278E9,
          "min" : 6.163693278E9,
          "sum" : 6.163693278E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.166223656E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.166223656E9,
          "min" : 6.166223656E9,
          "sum" : 6.166223656E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.129871669E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.129871669E9,
          "min" : 6.129871669E9,
          "sum" : 6.129871669E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.150783131E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.150783131E9,
          "min" : 6.150783131E9,
          "sum" : 6.150783131E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.189080107E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.189080107E9,
          "min" : 6.189080107E9,
          "sum" : 6.189080107E9,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 6.163910328E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.163910328E9,
          "min" : 6.163910328E9,
          "sum" : 6.163910328E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.203804629E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.203804629E9,
          "min" : 6.203804629E9,
          "sum" : 6.203804629E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.146540723E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.146540723E9,
          "min" : 6.146540723E9,
          "sum" : 6.146540723E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.191847137E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.191847137E9,
          "min" : 6.191847137E9,
          "sum" : 6.191847137E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.169608209E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.169608209E9,
          "min" : 6.169608209E9,
          "sum" : 6.169608209E9,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 6.140193769E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.140193769E9,
          "min" : 6.140193769E9,
          "sum" : 6.140193769E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.142231968E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.142231968E9,
          "min" : 6.142231968E9,
          "sum" : 6.142231968E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.139422646E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.139422646E9,
          "min" : 6.139422646E9,
          "sum" : 6.139422646E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.183279959E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.183279959E9,
          "min" : 6.183279959E9,
          "sum" : 6.183279959E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.147771882E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.147771882E9,
          "min" : 6.147771882E9,
          "sum" : 6.147771882E9,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 6.228905E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.228905E9,
          "min" : 6.228905E9,
          "sum" : 6.228905E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.212285921E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.212285921E9,
          "min" : 6.212285921E9,
          "sum" : 6.212285921E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.220948454E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.220948454E9,
          "min" : 6.220948454E9,
          "sum" : 6.220948454E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.211330767E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.211330767E9,
          "min" : 6.211330767E9,
          "sum" : 6.211330767E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.222217463E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.222217463E9,
          "min" : 6.222217463E9,
          "sum" : 6.222217463E9,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 6.43062394E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.43062394E9,
          "min" : 6.43062394E9,
          "sum" : 6.43062394E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.394717179E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.394717179E9,
          "min" : 6.394717179E9,
          "sum" : 6.394717179E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.39032292E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.39032292E9,
          "min" : 6.39032292E9,
          "sum" : 6.39032292E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.401395493E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.401395493E9,
          "min" : 6.401395493E9,
          "sum" : 6.401395493E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.365648934E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.365648934E9,
          "min" : 6.365648934E9,
          "sum" : 6.365648934E9,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 6.30843671E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.30843671E9,
          "min" : 6.30843671E9,
          "sum" : 6.30843671E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.416908131E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.416908131E9,
          "min" : 6.416908131E9,
          "sum" : 6.416908131E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.389037176E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.389037176E9,
          "min" : 6.389037176E9,
          "sum" : 6.389037176E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.370459799E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.370459799E9,
          "min" : 6.370459799E9,
          "sum" : 6.370459799E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.344597284E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.344597284E9,
          "min" : 6.344597284E9,
          "sum" : 6.344597284E9,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 6.282429754E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.282429754E9,
          "min" : 6.282429754E9,
          "sum" : 6.282429754E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.339368253E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.339368253E9,
          "min" : 6.339368253E9,
          "sum" : 6.339368253E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.291154572E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.291154572E9,
          "min" : 6.291154572E9,
          "sum" : 6.291154572E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.261751657E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.261751657E9,
          "min" : 6.261751657E9,
          "sum" : 6.261751657E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.25157187E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.25157187E9,
          "min" : 6.25157187E9,
          "sum" : 6.25157187E9,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 6.214882841E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.214882841E9,
          "min" : 6.214882841E9,
          "sum" : 6.214882841E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.187375556E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.187375556E9,
          "min" : 6.187375556E9,
          "sum" : 6.187375556E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.200445076E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.200445076E9,
          "min" : 6.200445076E9,
          "sum" : 6.200445076E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.191860497E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.191860497E9,
          "min" : 6.191860497E9,
          "sum" : 6.191860497E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.184900887E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.184900887E9,
          "min" : 6.184900887E9,
          "sum" : 6.184900887E9,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 6.438580869E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.438580869E9,
          "min" : 6.438580869E9,
          "sum" : 6.438580869E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.408629788E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.408629788E9,
          "min" : 6.408629788E9,
          "sum" : 6.408629788E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.4456159E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.4456159E9,
          "min" : 6.4456159E9,
          "sum" : 6.4456159E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.433772724E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.433772724E9,
          "min" : 6.433772724E9,
          "sum" : 6.433772724E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.424809268E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.424809268E9,
          "min" : 6.424809268E9,
          "sum" : 6.424809268E9,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 6.260508204E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.260508204E9,
          "min" : 6.260508204E9,
          "sum" : 6.260508204E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.235701735E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.235701735E9,
          "min" : 6.235701735E9,
          "sum" : 6.235701735E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.20959898E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.20959898E9,
          "min" : 6.20959898E9,
          "sum" : 6.20959898E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.246658369E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.246658369E9,
          "min" : 6.246658369E9,
          "sum" : 6.246658369E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.214050832E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.214050832E9,
          "min" : 6.214050832E9,
          "sum" : 6.214050832E9,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 6.202117382E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.202117382E9,
          "min" : 6.202117382E9,
          "sum" : 6.202117382E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.215680524E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.215680524E9,
          "min" : 6.215680524E9,
          "sum" : 6.215680524E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.220619309E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.220619309E9,
          "min" : 6.220619309E9,
          "sum" : 6.220619309E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.219552879E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.219552879E9,
          "min" : 6.219552879E9,
          "sum" : 6.219552879E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.182311862E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.182311862E9,
          "min" : 6.182311862E9,
          "sum" : 6.182311862E9,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 6.210096198E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.210096198E9,
          "min" : 6.210096198E9,
          "sum" : 6.210096198E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.27606944E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.27606944E9,
          "min" : 6.27606944E9,
          "sum" : 6.27606944E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.236433755E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.236433755E9,
          "min" : 6.236433755E9,
          "sum" : 6.236433755E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.266290088E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.266290088E9,
          "min" : 6.266290088E9,
          "sum" : 6.266290088E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.219954399E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.219954399E9,
          "min" : 6.219954399E9,
          "sum" : 6.219954399E9,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 6.174692686E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.174692686E9,
          "min" : 6.174692686E9,
          "sum" : 6.174692686E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.167343187E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.167343187E9,
          "min" : 6.167343187E9,
          "sum" : 6.167343187E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.148553314E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.148553314E9,
          "min" : 6.148553314E9,
          "sum" : 6.148553314E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.177976697E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.177976697E9,
          "min" : 6.177976697E9,
          "sum" : 6.177976697E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.173627334E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.173627334E9,
          "min" : 6.173627334E9,
          "sum" : 6.173627334E9,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 6.178805892E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.178805892E9,
          "min" : 6.178805892E9,
          "sum" : 6.178805892E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.156967022E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.156967022E9,
          "min" : 6.156967022E9,
          "sum" : 6.156967022E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.183024952E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.183024952E9,
          "min" : 6.183024952E9,
          "sum" : 6.183024952E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.166652418E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.166652418E9,
          "min" : 6.166652418E9,
          "sum" : 6.166652418E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.176217004E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.176217004E9,
          "min" : 6.176217004E9,
          "sum" : 6.176217004E9,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 6.294367212E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.294367212E9,
          "min" : 6.294367212E9,
          "sum" : 6.294367212E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.278685118E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.278685118E9,
          "min" : 6.278685118E9,
          "sum" : 6.278685118E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.225311828E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.225311828E9,
          "min" : 6.225311828E9,
          "sum" : 6.225311828E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.267310624E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.267310624E9,
          "min" : 6.267310624E9,
          "sum" : 6.267310624E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.267948648E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.267948648E9,
          "min" : 6.267948648E9,
          "sum" : 6.267948648E9,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 6.148796932E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.148796932E9,
          "min" : 6.148796932E9,
          "sum" : 6.148796932E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.137556927E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.137556927E9,
          "min" : 6.137556927E9,
          "sum" : 6.137556927E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.129308233E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.129308233E9,
          "min" : 6.129308233E9,
          "sum" : 6.129308233E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.131492993E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.131492993E9,
          "min" : 6.131492993E9,
          "sum" : 6.131492993E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.118304386E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.118304386E9,
          "min" : 6.118304386E9,
          "sum" : 6.118304386E9,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 6.171318814E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.171318814E9,
          "min" : 6.171318814E9,
          "sum" : 6.171318814E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.199997201E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.199997201E9,
          "min" : 6.199997201E9,
          "sum" : 6.199997201E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.151386055E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.151386055E9,
          "min" : 6.151386055E9,
          "sum" : 6.151386055E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.143898647E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.143898647E9,
          "min" : 6.143898647E9,
          "sum" : 6.143898647E9,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6.142327918E9,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.142327918E9,
          "min" : 6.142327918E9,
          "sum" : 6.142327918E9,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "children" : [ {
      "call" : "org.gradoop.csv.io.reader.CSVReader#setConf",
      "kiekerPattern" : "public void org.gradoop.csv.io.reader.CSVReader.setConf(org.apache.hadoop.conf.Configuration)",
      "otherKiekerPattern" : "public void org.gradoop.csv.io.reader.CSVReader.setConf(org.apache.hadoop.conf.Configuration)",
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#setConf",
      "key" : "org.gradoop.csv.io.reader.CSVReader.setConf_Configuration",
      "otherKey" : "org.gradoop.csv.io.reader.CSVReader.setConf_Configuration",
      "parent" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
      "color" : "#00FF00",
      "statistic" : {
        "meanOld" : 172929.3517241379,
        "meanCurrent" : 96990.60555555555,
        "deviationOld" : 32702.350865327935,
        "deviationCurrent" : 16961.9623899882,
        "vms" : 29,
        "callsOld" : 150,
        "calls" : 150,
        "tvalue" : 11.140074621927667,
        "change" : true
      },
      "hasSourceChange" : true,
      "state" : "FASTER",
      "inVMDeviationPredecessor" : 7270.11711187315,
      "inVMDeviation" : 10548.328089968694,
      "ess" : 2,
      "values" : [ 84336.26666666666, 86611.4, 100512.0, 110551.6, 97246.05, 87990.6, 121826.05, 84448.4, 88257.0, 106101.13333333335, 113000.6, 81201.93333333333, 113606.13333333335, 73139.53333333334, 73032.33333333334, 75118.13333333333, 83375.6, 118742.0, 140287.4, 109757.26666666668, 114029.2, 75565.0, 92541.0, 80368.86666666667, 109343.6, 97892.8, 87414.2, 117712.46666666665, 95274.0, 90435.6 ],
      "valuesPredecessor" : [ 158178.8, 317316.2, 174510.4, 166718.0, 204500.6, 145092.6, 108471.2, 209056.2, 192674.6, 186187.4, 144033.4, 146626.8, 152958.6, 204523.4, 187961.8, 114845.8, 225954.2, 234680.6, 186972.0, 157734.2, 164990.8, 194322.0, 147371.2, 212656.0, 135552.6, 158270.4, 123802.8, 196175.4, 175799.0, 204330.4 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 89493.33333333333,
            "variance" : 5.485279403333334E8,
            "n" : 1,
            "max" : 116537.0,
            "min" : 75882.0,
            "sum" : 89493.33333333333,
            "standardDeviation" : 23420.67335354245
          }, {
            "mean" : 86716.0,
            "variance" : 8.512515200000001E7,
            "n" : 2,
            "max" : 93240.0,
            "min" : 80192.0,
            "sum" : 173432.0,
            "standardDeviation" : 9226.329280922073
          }, {
            "mean" : 79378.0,
            "variance" : 4.2264818E7,
            "n" : 2,
            "max" : 83975.0,
            "min" : 74781.0,
            "sum" : 158756.0,
            "standardDeviation" : 6501.139746229118
          } ],
          "1" : [ {
            "mean" : 82953.25,
            "variance" : 1.6073985583333319E7,
            "n" : 4,
            "max" : 88359.0,
            "min" : 78801.0,
            "sum" : 331813.0,
            "standardDeviation" : 4009.237531418327
          }, {
            "mean" : 101244.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 101244.0,
            "min" : 101244.0,
            "sum" : 101244.0,
            "standardDeviation" : 0.0
          } ],
          "2" : [ {
            "mean" : 96716.0,
            "variance" : 6.3321004E7,
            "n" : 1,
            "max" : 104838.0,
            "min" : 88934.0,
            "sum" : 96716.0,
            "standardDeviation" : 7957.449591420608
          }, {
            "mean" : 97492.0,
            "variance" : 1.3549257E7,
            "n" : 3,
            "max" : 100405.0,
            "min" : 93355.0,
            "sum" : 292476.0,
            "standardDeviation" : 3680.931539705676
          }, {
            "mean" : 113368.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 113368.0,
            "min" : 113368.0,
            "sum" : 113368.0,
            "standardDeviation" : 0.0
          } ],
          "3" : [ {
            "mean" : 103389.66666666667,
            "variance" : 3.6598304333333336E7,
            "n" : 3,
            "max" : 110333.0,
            "min" : 99254.0,
            "sum" : 310169.0,
            "standardDeviation" : 6049.653240751352
          }, {
            "mean" : 121294.5,
            "variance" : 3.3532730450000006E8,
            "n" : 2,
            "max" : 134243.0,
            "min" : 108346.0,
            "sum" : 242589.0,
            "standardDeviation" : 18311.944312388023
          } ],
          "4" : [ {
            "mean" : 103606.25,
            "variance" : 4.668119909166667E8,
            "n" : 1,
            "max" : 135301.0,
            "min" : 87872.0,
            "sum" : 103606.25,
            "standardDeviation" : 21605.832335660358
          }, {
            "mean" : 94573.66666666667,
            "variance" : 1.2941456233333334E8,
            "n" : 3,
            "max" : 107502.0,
            "min" : 86095.0,
            "sum" : 283721.0,
            "standardDeviation" : 11376.052141816745
          }, {
            "mean" : 98903.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 98903.0,
            "min" : 98903.0,
            "sum" : 98903.0,
            "standardDeviation" : 0.0
          } ],
          "5" : [ {
            "mean" : 81723.66666666667,
            "variance" : 4.940604433333334E7,
            "n" : 3,
            "max" : 86456.0,
            "min" : 73647.0,
            "sum" : 245171.0,
            "standardDeviation" : 7028.943329785306
          }, {
            "mean" : 97391.0,
            "variance" : 5.4549045E8,
            "n" : 2,
            "max" : 113906.0,
            "min" : 80876.0,
            "sum" : 194782.0,
            "standardDeviation" : 23355.736982591665
          } ],
          "6" : [ {
            "mean" : 119867.25,
            "variance" : 5.7224286225E8,
            "n" : 1,
            "max" : 154776.0,
            "min" : 102534.0,
            "sum" : 119867.25,
            "standardDeviation" : 23921.598237785034
          }, {
            "mean" : 120253.0,
            "variance" : 3.557052099999999E7,
            "n" : 3,
            "max" : 127013.0,
            "min" : 115734.0,
            "sum" : 360759.0,
            "standardDeviation" : 5964.102698646293
          }, {
            "mean" : 128504.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 128504.0,
            "min" : 128504.0,
            "sum" : 128504.0,
            "standardDeviation" : 0.0
          } ],
          "7" : [ {
            "mean" : 87862.0,
            "variance" : 1.1152371599999999E8,
            "n" : 1,
            "max" : 100048.0,
            "min" : 81382.0,
            "sum" : 87862.0,
            "standardDeviation" : 10560.478966410566
          }, {
            "mean" : 73427.5,
            "variance" : 5014944.499999999,
            "n" : 2,
            "max" : 75011.0,
            "min" : 71844.0,
            "sum" : 146855.0,
            "standardDeviation" : 2239.407176017796
          }, {
            "mean" : 93762.5,
            "variance" : 1.24850045E7,
            "n" : 2,
            "max" : 96261.0,
            "min" : 91264.0,
            "sum" : 187525.0,
            "standardDeviation" : 3533.412585589178
          } ],
          "8" : [ {
            "mean" : 86406.33333333333,
            "variance" : 5801089.333333333,
            "n" : 3,
            "max" : 87883.0,
            "min" : 83627.0,
            "sum" : 259219.0,
            "standardDeviation" : 2408.545065663778
          }, {
            "mean" : 91033.0,
            "variance" : 4.0734338E7,
            "n" : 2,
            "max" : 95546.0,
            "min" : 86520.0,
            "sum" : 182066.0,
            "standardDeviation" : 6382.345806989778
          } ],
          "9" : [ {
            "mean" : 119901.66666666667,
            "variance" : 1.0234069293333331E9,
            "n" : 1,
            "max" : 146469.0,
            "min" : 84391.0,
            "sum" : 119901.66666666667,
            "standardDeviation" : 31990.731928690428
          }, {
            "mean" : 99564.33333333333,
            "variance" : 5.839203343333334E8,
            "n" : 3,
            "max" : 126442.0,
            "min" : 79636.0,
            "sum" : 298693.0,
            "standardDeviation" : 24164.44359660146
          }, {
            "mean" : 111911.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 111911.0,
            "min" : 111911.0,
            "sum" : 111911.0,
            "standardDeviation" : 0.0
          } ],
          "10" : [ {
            "mean" : 107100.66666666667,
            "variance" : 2.9834712333333332E7,
            "n" : 3,
            "max" : 113269.0,
            "min" : 102877.0,
            "sum" : 321302.0,
            "standardDeviation" : 5462.1161039777735
          }, {
            "mean" : 121850.5,
            "variance" : 4.7898220050000006E8,
            "n" : 2,
            "max" : 137326.0,
            "min" : 106375.0,
            "sum" : 243701.0,
            "standardDeviation" : 21885.661984504834
          } ],
          "11" : [ {
            "mean" : 76201.66666666667,
            "variance" : 4805697.333333333,
            "n" : 1,
            "max" : 78377.0,
            "min" : 73993.0,
            "sum" : 76201.66666666667,
            "standardDeviation" : 2192.1900769169933
          }, {
            "mean" : 78385.0,
            "variance" : 3.3794329E7,
            "n" : 3,
            "max" : 82337.0,
            "min" : 71710.0,
            "sum" : 235155.0,
            "standardDeviation" : 5813.289000213218
          }, {
            "mean" : 94653.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 94653.0,
            "min" : 94653.0,
            "sum" : 94653.0,
            "standardDeviation" : 0.0
          } ],
          "12" : [ {
            "mean" : 90883.66666666667,
            "variance" : 3.810055433333333E7,
            "n" : 1,
            "max" : 96962.0,
            "min" : 84621.0,
            "sum" : 90883.66666666667,
            "standardDeviation" : 6172.5646479671095
          }, {
            "mean" : 114839.0,
            "variance" : 1.7255575E7,
            "n" : 3,
            "max" : 117344.0,
            "min" : 110044.0,
            "sum" : 344517.0,
            "standardDeviation" : 4153.983028371686
          }, {
            "mean" : 132630.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 132630.0,
            "min" : 132630.0,
            "sum" : 132630.0,
            "standardDeviation" : 0.0
          } ],
          "13" : [ {
            "mean" : 74405.66666666667,
            "variance" : 2.328137853333333E8,
            "n" : 1,
            "max" : 91545.0,
            "min" : 62301.0,
            "sum" : 74405.66666666667,
            "standardDeviation" : 15258.2366390528
          }, {
            "mean" : 72019.33333333333,
            "variance" : 3.6705622333333336E7,
            "n" : 3,
            "max" : 76334.0,
            "min" : 65093.0,
            "sum" : 216058.0,
            "standardDeviation" : 6058.516512590631
          }, {
            "mean" : 75234.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 75234.0,
            "min" : 75234.0,
            "sum" : 75234.0,
            "standardDeviation" : 0.0
          } ],
          "14" : [ {
            "mean" : 71629.66666666667,
            "variance" : 8.051235433333336E7,
            "n" : 1,
            "max" : 81927.0,
            "min" : 65488.0,
            "sum" : 71629.66666666667,
            "standardDeviation" : 8972.867676129708
          }, {
            "mean" : 66973.66666666667,
            "variance" : 4.686955033333333E7,
            "n" : 3,
            "max" : 74034.0,
            "min" : 60364.0,
            "sum" : 200921.0,
            "standardDeviation" : 6846.133969864549
          }, {
            "mean" : 92611.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 92611.0,
            "min" : 92611.0,
            "sum" : 92611.0,
            "standardDeviation" : 0.0
          } ],
          "15" : [ {
            "mean" : 66647.66666666667,
            "variance" : 1.8484602333333336E7,
            "n" : 1,
            "max" : 70914.0,
            "min" : 62316.0,
            "sum" : 66647.66666666667,
            "standardDeviation" : 4299.372318528989
          }, {
            "mean" : 72478.33333333333,
            "variance" : 2.695526773333333E8,
            "n" : 3,
            "max" : 90965.0,
            "min" : 59597.0,
            "sum" : 217435.0,
            "standardDeviation" : 16418.05948744654
          }, {
            "mean" : 91508.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 91508.0,
            "min" : 91508.0,
            "sum" : 91508.0,
            "standardDeviation" : 0.0
          } ],
          "16" : [ {
            "mean" : 79191.25,
            "variance" : 1.9430364250000007E7,
            "n" : 4,
            "max" : 84613.0,
            "min" : 73835.0,
            "sum" : 316765.0,
            "standardDeviation" : 4407.988685330307
          }, {
            "mean" : 100113.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 100113.0,
            "min" : 100113.0,
            "sum" : 100113.0,
            "standardDeviation" : 0.0
          } ],
          "17" : [ {
            "mean" : 140474.0,
            "variance" : 9.865030770000001E8,
            "n" : 1,
            "max" : 166022.0,
            "min" : 105407.0,
            "sum" : 140474.0,
            "standardDeviation" : 31408.646532443898
          }, {
            "mean" : 110682.33333333333,
            "variance" : 7.516064433333333E7,
            "n" : 3,
            "max" : 117078.0,
            "min" : 100815.0,
            "sum" : 332047.0,
            "standardDeviation" : 8669.523881582732
          }, {
            "mean" : 121189.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 121189.0,
            "min" : 121189.0,
            "sum" : 121189.0,
            "standardDeviation" : 0.0
          } ],
          "18" : [ {
            "mean" : 127726.0,
            "variance" : 4.6258981E7,
            "n" : 3,
            "max" : 135530.0,
            "min" : 123061.0,
            "sum" : 383178.0,
            "standardDeviation" : 6801.39551856823
          }, {
            "mean" : 159129.5,
            "variance" : 7.101549845000001E8,
            "n" : 2,
            "max" : 177973.0,
            "min" : 140286.0,
            "sum" : 318259.0,
            "standardDeviation" : 26648.733262577418
          } ],
          "19" : [ {
            "mean" : 136311.33333333334,
            "variance" : 6.0763176333333336E7,
            "n" : 1,
            "max" : 145221.0,
            "min" : 130749.0,
            "sum" : 136311.33333333334,
            "standardDeviation" : 7795.073850409201
          }, {
            "mean" : 94271.66666666667,
            "variance" : 2.170835733333333E7,
            "n" : 3,
            "max" : 99053.0,
            "min" : 89745.0,
            "sum" : 282815.0,
            "standardDeviation" : 4659.222825035666
          }, {
            "mean" : 129660.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 129660.0,
            "min" : 129660.0,
            "sum" : 129660.0,
            "standardDeviation" : 0.0
          } ],
          "20" : [ {
            "mean" : 108156.33333333333,
            "variance" : 1.580664063333333E8,
            "n" : 3,
            "max" : 120415.0,
            "min" : 95292.0,
            "sum" : 324469.0,
            "standardDeviation" : 12572.446314593406
          }, {
            "mean" : 122838.5,
            "variance" : 6.745831805E8,
            "n" : 2,
            "max" : 141204.0,
            "min" : 104473.0,
            "sum" : 245677.0,
            "standardDeviation" : 25972.739179763077
          } ],
          "21" : [ {
            "mean" : 73769.5,
            "variance" : 2.606259566666667E7,
            "n" : 4,
            "max" : 78191.0,
            "min" : 67747.0,
            "sum" : 295078.0,
            "standardDeviation" : 5105.153833790581
          }, {
            "mean" : 82747.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 82747.0,
            "min" : 82747.0,
            "sum" : 82747.0,
            "standardDeviation" : 0.0
          } ],
          "22" : [ {
            "mean" : 105536.0,
            "variance" : 1.6653108E7,
            "n" : 1,
            "max" : 110248.0,
            "min" : 103150.0,
            "sum" : 105536.0,
            "standardDeviation" : 4080.821976023948
          }, {
            "mean" : 86664.33333333333,
            "variance" : 1.8285829333333332E7,
            "n" : 3,
            "max" : 91591.0,
            "min" : 83915.0,
            "sum" : 259993.0,
            "standardDeviation" : 4276.193322726807
          }, {
            "mean" : 97176.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 97176.0,
            "min" : 97176.0,
            "sum" : 97176.0,
            "standardDeviation" : 0.0
          } ],
          "23" : [ {
            "mean" : 83167.33333333333,
            "variance" : 4.670165033333333E7,
            "n" : 1,
            "max" : 89071.0,
            "min" : 75681.0,
            "sum" : 83167.33333333333,
            "standardDeviation" : 6833.860573155801
          }, {
            "mean" : 75681.0,
            "variance" : 5222911.999999999,
            "n" : 2,
            "max" : 77297.0,
            "min" : 74065.0,
            "sum" : 151362.0,
            "standardDeviation" : 2285.3691167949214
          }, {
            "mean" : 83657.5,
            "variance" : 1.6114164499999998E7,
            "n" : 2,
            "max" : 86496.0,
            "min" : 80819.0,
            "sum" : 167315.0,
            "standardDeviation" : 4014.24519679603
          } ],
          "24" : [ {
            "mean" : 108111.0,
            "variance" : 2.24072191E8,
            "n" : 3,
            "max" : 123541.0,
            "min" : 93650.0,
            "sum" : 324333.0,
            "standardDeviation" : 14969.04108485243
          }, {
            "mean" : 111192.5,
            "variance" : 7.39206405E7,
            "n" : 2,
            "max" : 117272.0,
            "min" : 105113.0,
            "sum" : 222385.0,
            "standardDeviation" : 8597.711352447232
          } ],
          "25" : [ {
            "mean" : 102936.0,
            "variance" : 1.1102180700000001E8,
            "n" : 3,
            "max" : 109937.0,
            "min" : 90818.0,
            "sum" : 308808.0,
            "standardDeviation" : 10536.688616448719
          }, {
            "mean" : 90328.0,
            "variance" : 1.2540032E7,
            "n" : 2,
            "max" : 92832.0,
            "min" : 87824.0,
            "sum" : 180656.0,
            "standardDeviation" : 3541.19076018223
          } ],
          "26" : [ {
            "mean" : 81373.66666666667,
            "variance" : 5.9016901333333336E7,
            "n" : 3,
            "max" : 88171.0,
            "min" : 73039.0,
            "sum" : 244121.0,
            "standardDeviation" : 7682.2458521797735
          }, {
            "mean" : 96475.0,
            "variance" : 5.60656098E8,
            "n" : 2,
            "max" : 113218.0,
            "min" : 79732.0,
            "sum" : 192950.0,
            "standardDeviation" : 23678.17767481273
          } ],
          "27" : [ {
            "mean" : 107755.33333333333,
            "variance" : 3.323571633333334E7,
            "n" : 1,
            "max" : 114403.0,
            "min" : 104128.0,
            "sum" : 107755.33333333333,
            "standardDeviation" : 5765.042613314609
          }, {
            "mean" : 115420.0,
            "variance" : 9.974395899999999E7,
            "n" : 3,
            "max" : 125495.0,
            "min" : 105523.0,
            "sum" : 346260.0,
            "standardDeviation" : 9987.189744868172
          }, {
            "mean" : 134547.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 134547.0,
            "min" : 134547.0,
            "sum" : 134547.0,
            "standardDeviation" : 0.0
          } ],
          "28" : [ {
            "mean" : 90890.0,
            "variance" : 6669601.0,
            "n" : 3,
            "max" : 93801.0,
            "min" : 88874.0,
            "sum" : 272670.0,
            "standardDeviation" : 2582.5570661652378
          }, {
            "mean" : 101850.0,
            "variance" : 6.181128E8,
            "n" : 2,
            "max" : 119430.0,
            "min" : 84270.0,
            "sum" : 203700.0,
            "standardDeviation" : 24861.87442651901
          } ],
          "29" : [ {
            "mean" : 82909.33333333333,
            "variance" : 652565.3333333335,
            "n" : 3,
            "max" : 83544.0,
            "min" : 82000.0,
            "sum" : 248728.0,
            "standardDeviation" : 807.8151603760191
          }, {
            "mean" : 101725.0,
            "variance" : 5.472672200000001E7,
            "n" : 2,
            "max" : 106956.0,
            "min" : 96494.0,
            "sum" : 203450.0,
            "standardDeviation" : 7397.751144773661
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 157560.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 157560.0,
            "min" : 157560.0,
            "sum" : 157560.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 155706.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 155706.0,
            "min" : 155706.0,
            "sum" : 155706.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 161301.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 161301.0,
            "min" : 161301.0,
            "sum" : 161301.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 163548.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 163548.0,
            "min" : 163548.0,
            "sum" : 163548.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 152779.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 152779.0,
            "min" : 152779.0,
            "sum" : 152779.0,
            "standardDeviation" : 0.0
          } ],
          "1" : [ {
            "mean" : 313281.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 313281.0,
            "min" : 313281.0,
            "sum" : 313281.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 341629.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 341629.0,
            "min" : 341629.0,
            "sum" : 341629.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 312784.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 312784.0,
            "min" : 312784.0,
            "sum" : 312784.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 325963.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 325963.0,
            "min" : 325963.0,
            "sum" : 325963.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 292924.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 292924.0,
            "min" : 292924.0,
            "sum" : 292924.0,
            "standardDeviation" : 0.0
          } ],
          "2" : [ {
            "mean" : 163573.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 163573.0,
            "min" : 163573.0,
            "sum" : 163573.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 188539.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 188539.0,
            "min" : 188539.0,
            "sum" : 188539.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 186125.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 186125.0,
            "min" : 186125.0,
            "sum" : 186125.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 169178.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 169178.0,
            "min" : 169178.0,
            "sum" : 169178.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 165137.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 165137.0,
            "min" : 165137.0,
            "sum" : 165137.0,
            "standardDeviation" : 0.0
          } ],
          "3" : [ {
            "mean" : 165448.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 165448.0,
            "min" : 165448.0,
            "sum" : 165448.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 163807.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 163807.0,
            "min" : 163807.0,
            "sum" : 163807.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 169753.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 169753.0,
            "min" : 169753.0,
            "sum" : 169753.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 171258.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 171258.0,
            "min" : 171258.0,
            "sum" : 171258.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 163324.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 163324.0,
            "min" : 163324.0,
            "sum" : 163324.0,
            "standardDeviation" : 0.0
          } ],
          "4" : [ {
            "mean" : 196815.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 196815.0,
            "min" : 196815.0,
            "sum" : 196815.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 212735.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 212735.0,
            "min" : 212735.0,
            "sum" : 212735.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 214410.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 214410.0,
            "min" : 214410.0,
            "sum" : 214410.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 200866.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 200866.0,
            "min" : 200866.0,
            "sum" : 200866.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 197677.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 197677.0,
            "min" : 197677.0,
            "sum" : 197677.0,
            "standardDeviation" : 0.0
          } ],
          "5" : [ {
            "mean" : 154907.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 154907.0,
            "min" : 154907.0,
            "sum" : 154907.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 156728.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 156728.0,
            "min" : 156728.0,
            "sum" : 156728.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 138068.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 138068.0,
            "min" : 138068.0,
            "sum" : 138068.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 137800.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 137800.0,
            "min" : 137800.0,
            "sum" : 137800.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 137960.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 137960.0,
            "min" : 137960.0,
            "sum" : 137960.0,
            "standardDeviation" : 0.0
          } ],
          "6" : [ {
            "mean" : 109103.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 109103.0,
            "min" : 109103.0,
            "sum" : 109103.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 110060.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 110060.0,
            "min" : 110060.0,
            "sum" : 110060.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 105287.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 105287.0,
            "min" : 105287.0,
            "sum" : 105287.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 108570.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 108570.0,
            "min" : 108570.0,
            "sum" : 108570.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 109336.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 109336.0,
            "min" : 109336.0,
            "sum" : 109336.0,
            "standardDeviation" : 0.0
          } ],
          "7" : [ {
            "mean" : 211858.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 211858.0,
            "min" : 211858.0,
            "sum" : 211858.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 205963.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 205963.0,
            "min" : 205963.0,
            "sum" : 205963.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 199013.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 199013.0,
            "min" : 199013.0,
            "sum" : 199013.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 208276.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 208276.0,
            "min" : 208276.0,
            "sum" : 208276.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 220171.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 220171.0,
            "min" : 220171.0,
            "sum" : 220171.0,
            "standardDeviation" : 0.0
          } ],
          "8" : [ {
            "mean" : 166383.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 166383.0,
            "min" : 166383.0,
            "sum" : 166383.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 203197.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 203197.0,
            "min" : 203197.0,
            "sum" : 203197.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 161053.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 161053.0,
            "min" : 161053.0,
            "sum" : 161053.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 207601.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 207601.0,
            "min" : 207601.0,
            "sum" : 207601.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 225139.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 225139.0,
            "min" : 225139.0,
            "sum" : 225139.0,
            "standardDeviation" : 0.0
          } ],
          "9" : [ {
            "mean" : 177810.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 177810.0,
            "min" : 177810.0,
            "sum" : 177810.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 196078.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 196078.0,
            "min" : 196078.0,
            "sum" : 196078.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 190496.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 190496.0,
            "min" : 190496.0,
            "sum" : 190496.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 163562.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 163562.0,
            "min" : 163562.0,
            "sum" : 163562.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 202991.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 202991.0,
            "min" : 202991.0,
            "sum" : 202991.0,
            "standardDeviation" : 0.0
          } ],
          "10" : [ {
            "mean" : 140702.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 140702.0,
            "min" : 140702.0,
            "sum" : 140702.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 146218.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 146218.0,
            "min" : 146218.0,
            "sum" : 146218.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 140817.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 140817.0,
            "min" : 140817.0,
            "sum" : 140817.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 145430.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 145430.0,
            "min" : 145430.0,
            "sum" : 145430.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 147000.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 147000.0,
            "min" : 147000.0,
            "sum" : 147000.0,
            "standardDeviation" : 0.0
          } ],
          "11" : [ {
            "mean" : 151150.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 151150.0,
            "min" : 151150.0,
            "sum" : 151150.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 150872.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 150872.0,
            "min" : 150872.0,
            "sum" : 150872.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 145451.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 145451.0,
            "min" : 145451.0,
            "sum" : 145451.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 143640.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 143640.0,
            "min" : 143640.0,
            "sum" : 143640.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 142021.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 142021.0,
            "min" : 142021.0,
            "sum" : 142021.0,
            "standardDeviation" : 0.0
          } ],
          "12" : [ {
            "mean" : 160686.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 160686.0,
            "min" : 160686.0,
            "sum" : 160686.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 145974.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 145974.0,
            "min" : 145974.0,
            "sum" : 145974.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 150553.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 150553.0,
            "min" : 150553.0,
            "sum" : 150553.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 157171.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 157171.0,
            "min" : 157171.0,
            "sum" : 157171.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 150409.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 150409.0,
            "min" : 150409.0,
            "sum" : 150409.0,
            "standardDeviation" : 0.0
          } ],
          "13" : [ {
            "mean" : 202851.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 202851.0,
            "min" : 202851.0,
            "sum" : 202851.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 199120.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 199120.0,
            "min" : 199120.0,
            "sum" : 199120.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 204643.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 204643.0,
            "min" : 204643.0,
            "sum" : 204643.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 204575.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 204575.0,
            "min" : 204575.0,
            "sum" : 204575.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 211428.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 211428.0,
            "min" : 211428.0,
            "sum" : 211428.0,
            "standardDeviation" : 0.0
          } ],
          "14" : [ {
            "mean" : 194538.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 194538.0,
            "min" : 194538.0,
            "sum" : 194538.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 190802.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 190802.0,
            "min" : 190802.0,
            "sum" : 190802.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 183681.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 183681.0,
            "min" : 183681.0,
            "sum" : 183681.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 184656.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 184656.0,
            "min" : 184656.0,
            "sum" : 184656.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 186132.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 186132.0,
            "min" : 186132.0,
            "sum" : 186132.0,
            "standardDeviation" : 0.0
          } ],
          "15" : [ {
            "mean" : 115273.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 115273.0,
            "min" : 115273.0,
            "sum" : 115273.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 116798.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 116798.0,
            "min" : 116798.0,
            "sum" : 116798.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 114881.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 114881.0,
            "min" : 114881.0,
            "sum" : 114881.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 115990.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 115990.0,
            "min" : 115990.0,
            "sum" : 115990.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 111287.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 111287.0,
            "min" : 111287.0,
            "sum" : 111287.0,
            "standardDeviation" : 0.0
          } ],
          "16" : [ {
            "mean" : 212535.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 212535.0,
            "min" : 212535.0,
            "sum" : 212535.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 218062.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 218062.0,
            "min" : 218062.0,
            "sum" : 218062.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 227082.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 227082.0,
            "min" : 227082.0,
            "sum" : 227082.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 236872.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 236872.0,
            "min" : 236872.0,
            "sum" : 236872.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 235220.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 235220.0,
            "min" : 235220.0,
            "sum" : 235220.0,
            "standardDeviation" : 0.0
          } ],
          "17" : [ {
            "mean" : 237599.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 237599.0,
            "min" : 237599.0,
            "sum" : 237599.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 239635.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 239635.0,
            "min" : 239635.0,
            "sum" : 239635.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 231092.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 231092.0,
            "min" : 231092.0,
            "sum" : 231092.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 232545.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 232545.0,
            "min" : 232545.0,
            "sum" : 232545.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 232532.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 232532.0,
            "min" : 232532.0,
            "sum" : 232532.0,
            "standardDeviation" : 0.0
          } ],
          "18" : [ {
            "mean" : 167848.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 167848.0,
            "min" : 167848.0,
            "sum" : 167848.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 198930.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 198930.0,
            "min" : 198930.0,
            "sum" : 198930.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 190782.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 190782.0,
            "min" : 190782.0,
            "sum" : 190782.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 185391.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 185391.0,
            "min" : 185391.0,
            "sum" : 185391.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 191909.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 191909.0,
            "min" : 191909.0,
            "sum" : 191909.0,
            "standardDeviation" : 0.0
          } ],
          "19" : [ {
            "mean" : 171421.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 171421.0,
            "min" : 171421.0,
            "sum" : 171421.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 153147.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 153147.0,
            "min" : 153147.0,
            "sum" : 153147.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 151604.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 151604.0,
            "min" : 151604.0,
            "sum" : 151604.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 160999.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 160999.0,
            "min" : 160999.0,
            "sum" : 160999.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 151500.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 151500.0,
            "min" : 151500.0,
            "sum" : 151500.0,
            "standardDeviation" : 0.0
          } ],
          "20" : [ {
            "mean" : 164619.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 164619.0,
            "min" : 164619.0,
            "sum" : 164619.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 154996.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 154996.0,
            "min" : 154996.0,
            "sum" : 154996.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 171295.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 171295.0,
            "min" : 171295.0,
            "sum" : 171295.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 171315.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 171315.0,
            "min" : 171315.0,
            "sum" : 171315.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 162729.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 162729.0,
            "min" : 162729.0,
            "sum" : 162729.0,
            "standardDeviation" : 0.0
          } ],
          "21" : [ {
            "mean" : 203983.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 203983.0,
            "min" : 203983.0,
            "sum" : 203983.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 195034.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 195034.0,
            "min" : 195034.0,
            "sum" : 195034.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 189099.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 189099.0,
            "min" : 189099.0,
            "sum" : 189099.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 192530.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 192530.0,
            "min" : 192530.0,
            "sum" : 192530.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 190964.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 190964.0,
            "min" : 190964.0,
            "sum" : 190964.0,
            "standardDeviation" : 0.0
          } ],
          "22" : [ {
            "mean" : 149739.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 149739.0,
            "min" : 149739.0,
            "sum" : 149739.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 149469.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 149469.0,
            "min" : 149469.0,
            "sum" : 149469.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 137048.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 137048.0,
            "min" : 137048.0,
            "sum" : 137048.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 147535.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 147535.0,
            "min" : 147535.0,
            "sum" : 147535.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 153065.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 153065.0,
            "min" : 153065.0,
            "sum" : 153065.0,
            "standardDeviation" : 0.0
          } ],
          "23" : [ {
            "mean" : 214955.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 214955.0,
            "min" : 214955.0,
            "sum" : 214955.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 205150.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 205150.0,
            "min" : 205150.0,
            "sum" : 205150.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 210734.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 210734.0,
            "min" : 210734.0,
            "sum" : 210734.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 217700.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 217700.0,
            "min" : 217700.0,
            "sum" : 217700.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 214741.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 214741.0,
            "min" : 214741.0,
            "sum" : 214741.0,
            "standardDeviation" : 0.0
          } ],
          "24" : [ {
            "mean" : 124593.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 124593.0,
            "min" : 124593.0,
            "sum" : 124593.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 140905.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 140905.0,
            "min" : 140905.0,
            "sum" : 140905.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 135561.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 135561.0,
            "min" : 135561.0,
            "sum" : 135561.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 138685.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 138685.0,
            "min" : 138685.0,
            "sum" : 138685.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 138019.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 138019.0,
            "min" : 138019.0,
            "sum" : 138019.0,
            "standardDeviation" : 0.0
          } ],
          "25" : [ {
            "mean" : 156393.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 156393.0,
            "min" : 156393.0,
            "sum" : 156393.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 161653.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 161653.0,
            "min" : 161653.0,
            "sum" : 161653.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 159008.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 159008.0,
            "min" : 159008.0,
            "sum" : 159008.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 159038.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 159038.0,
            "min" : 159038.0,
            "sum" : 159038.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 155260.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 155260.0,
            "min" : 155260.0,
            "sum" : 155260.0,
            "standardDeviation" : 0.0
          } ],
          "26" : [ {
            "mean" : 127247.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 127247.0,
            "min" : 127247.0,
            "sum" : 127247.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 120173.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 120173.0,
            "min" : 120173.0,
            "sum" : 120173.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 123725.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 123725.0,
            "min" : 123725.0,
            "sum" : 123725.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 126541.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 126541.0,
            "min" : 126541.0,
            "sum" : 126541.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 121328.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 121328.0,
            "min" : 121328.0,
            "sum" : 121328.0,
            "standardDeviation" : 0.0
          } ],
          "27" : [ {
            "mean" : 199106.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 199106.0,
            "min" : 199106.0,
            "sum" : 199106.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 185594.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 185594.0,
            "min" : 185594.0,
            "sum" : 185594.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 192518.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 192518.0,
            "min" : 192518.0,
            "sum" : 192518.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 200044.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 200044.0,
            "min" : 200044.0,
            "sum" : 200044.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 203615.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 203615.0,
            "min" : 203615.0,
            "sum" : 203615.0,
            "standardDeviation" : 0.0
          } ],
          "28" : [ {
            "mean" : 180098.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 180098.0,
            "min" : 180098.0,
            "sum" : 180098.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 173374.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 173374.0,
            "min" : 173374.0,
            "sum" : 173374.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 174339.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 174339.0,
            "min" : 174339.0,
            "sum" : 174339.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 175638.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 175638.0,
            "min" : 175638.0,
            "sum" : 175638.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 175546.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 175546.0,
            "min" : 175546.0,
            "sum" : 175546.0,
            "standardDeviation" : 0.0
          } ],
          "29" : [ {
            "mean" : 204128.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 204128.0,
            "min" : 204128.0,
            "sum" : 204128.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 202540.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 202540.0,
            "min" : 202540.0,
            "sum" : 202540.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 201932.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 201932.0,
            "min" : 201932.0,
            "sum" : 201932.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 200566.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 200566.0,
            "min" : 200566.0,
            "sum" : 200566.0,
            "standardDeviation" : 0.0
          }, {
            "mean" : 212486.0,
            "variance" : 0.0,
            "n" : 1,
            "max" : 212486.0,
            "min" : 212486.0,
            "sum" : 212486.0,
            "standardDeviation" : 0.0
          } ]
        }
      },
      "children" : [ ]
    }, {
      "call" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
      "kiekerPattern" : "public java.util.List org.gradoop.csv.io.reader.CSVReader.readVertexList(java.lang.String)",
      "otherKiekerPattern" : "public java.util.List org.gradoop.csv.io.reader.CSVReader.readVertexList(java.lang.String)",
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
      "key" : "org.gradoop.csv.io.reader.CSVReader.readVertexList_String",
      "otherKey" : "org.gradoop.csv.io.reader.CSVReader.readVertexList_String",
      "parent" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
      "color" : "#FF0000",
      "statistic" : {
        "meanOld" : 1.1055071961379314E7,
        "meanCurrent" : 1.4768660668412698E7,
        "deviationOld" : 263460.4397136246,
        "deviationCurrent" : 778504.7025343106,
        "vms" : 29,
        "callsOld" : 750,
        "calls" : 750,
        "tvalue" : -24.70471170869789,
        "change" : true
      },
      "hasSourceChange" : true,
      "state" : "SLOWER",
      "inVMDeviationPredecessor" : 609134.5096525226,
      "inVMDeviation" : 6666742.543495952,
      "ess" : 2,
      "values" : [ 1.4727207542857142E7, 1.4116574146666668E7, 1.4158091045714285E7, 1.454023756E7, 1.492030278E7, 1.402616682E7, 1.5034847313333334E7, 1.4503085697142856E7, 1.4833932313333334E7, 1.5310354222857142E7, 1.4245867946666665E7, 1.491360266857143E7, 1.704297838857143E7, 1.4486359417142857E7, 1.470651617142857E7, 1.4275078948571429E7, 1.4678207646666668E7, 1.417446786285714E7, 1.4289326346666666E7, 1.402233976E7, 1.416157888E7, 1.715354654285714E7, 1.518852922857143E7, 1.4285453685714286E7, 1.4695507166666664E7, 1.4692790186666667E7, 1.6069274502857143E7, 1.5034347342857141E7, 1.404201458E7, 1.4731233337142859E7 ],
      "valuesPredecessor" : [ 1.09198128E7, 1.103893992E7, 1.123419236E7, 1.096053804E7, 1.083925236E7, 1.094190448E7, 1.105632744E7, 1.141454412E7, 1.127249024E7, 1.101243032E7, 1.106025988E7, 1.108080732E7, 1.08869914E7, 1.091413252E7, 1.102888996E7, 1.102725504E7, 1.080323524E7, 1.113342276E7, 1.094775976E7, 1.097422772E7, 1.1654112466666667E7, 1.1774188626666667E7, 1.109842712E7, 1.098302912E7, 1.089501848E7, 1.223862048E7, 1.064914972E7, 1.152477856E7, 1.0664643186666667E7, 1.080632592E7 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 2.2843855285714287E7,
            "variance" : 3.78312853769306E14,
            "n" : 2,
            "max" : 6.3666276E7,
            "min" : 378227.0,
            "sum" : 4.5687710571428575E7,
            "standardDeviation" : 1.9450266161914237E7
          }, {
            "mean" : 1.3898763444444444E7,
            "variance" : 5.157727887197777E12,
            "n" : 9,
            "max" : 1.7394451E7,
            "min" : 1.1842917E7,
            "sum" : 1.25088871E8,
            "standardDeviation" : 2271063.162309181
          }, {
            "mean" : 1.409380225E7,
            "variance" : 3.069424289758215E12,
            "n" : 8,
            "max" : 1.698233E7,
            "min" : 1.176106E7,
            "sum" : 1.12750418E8,
            "standardDeviation" : 1751977.2514956393
          }, {
            "mean" : 1.4108864833333332E7,
            "variance" : 8.054653218442967E12,
            "n" : 6,
            "max" : 1.8758796E7,
            "min" : 1.1967679E7,
            "sum" : 8.4653189E7,
            "standardDeviation" : 2838072.0953568053
          } ],
          "1" : [ {
            "mean" : 3.1749279666666668E7,
            "variance" : 8.820453068151962E14,
            "n" : 1,
            "max" : 8.7516302E7,
            "min" : 304634.0,
            "sum" : 3.1749279666666668E7,
            "standardDeviation" : 2.969924757995051E7
          }, {
            "mean" : 1.3196013333333334E7,
            "variance" : 1.619305567218E12,
            "n" : 9,
            "max" : 1.6394671E7,
            "min" : 1.2370954E7,
            "sum" : 1.1876412E8,
            "standardDeviation" : 1272519.377934183
          }, {
            "mean" : 1.3068958100000001E7,
            "variance" : 1.898483100138989E12,
            "n" : 10,
            "max" : 1.6240696E7,
            "min" : 1.1874456E7,
            "sum" : 1.3068958100000001E8,
            "standardDeviation" : 1377854.527930648
          }, {
            "mean" : 1.43422746E7,
            "variance" : 1.1593958409092998E12,
            "n" : 5,
            "max" : 1.5524115E7,
            "min" : 1.3121229E7,
            "sum" : 7.1711373E7,
            "standardDeviation" : 1076752.4510811665
          } ],
          "2" : [ {
            "mean" : 2.575865257142857E7,
            "variance" : 6.2462368374773E14,
            "n" : 2,
            "max" : 7.872164E7,
            "min" : 430044.0,
            "sum" : 5.151730514285714E7,
            "standardDeviation" : 2.4992472541702032E7
          }, {
            "mean" : 1.3060137555555556E7,
            "variance" : 5.851207710702778E11,
            "n" : 9,
            "max" : 1.4043334E7,
            "min" : 1.2029714E7,
            "sum" : 1.17541238E8,
            "standardDeviation" : 764931.8734830428
          }, {
            "mean" : 1.2791123444444444E7,
            "variance" : 1.0728610654437776E12,
            "n" : 9,
            "max" : 1.465273E7,
            "min" : 1.1698652E7,
            "sum" : 1.15120111E8,
            "standardDeviation" : 1035790.068229937
          }, {
            "mean" : 1.39547244E7,
            "variance" : 6.478175438151799E12,
            "n" : 5,
            "max" : 1.8094943E7,
            "min" : 1.1701733E7,
            "sum" : 6.9773622E7,
            "standardDeviation" : 2545226.0092478623
          } ],
          "3" : [ {
            "mean" : 3.1153633E7,
            "variance" : 9.169065559546114E14,
            "n" : 1,
            "max" : 8.9242658E7,
            "min" : 531499.0,
            "sum" : 3.1153633E7,
            "standardDeviation" : 3.0280464923026055E7
          }, {
            "mean" : 1.4962631555555556E7,
            "variance" : 2.0650652917940273E13,
            "n" : 9,
            "max" : 2.6107424E7,
            "min" : 1.2186048E7,
            "sum" : 1.34663684E8,
            "standardDeviation" : 4544298.946805797
          }, {
            "mean" : 1.2579489222222222E7,
            "variance" : 8.55073351604444E11,
            "n" : 9,
            "max" : 1.4664848E7,
            "min" : 1.1648283E7,
            "sum" : 1.13215403E8,
            "standardDeviation" : 924701.7635997263
          }, {
            "mean" : 1.4078869833333334E7,
            "variance" : 4.1308413161237666E12,
            "n" : 6,
            "max" : 1.7274742E7,
            "min" : 1.1654571E7,
            "sum" : 8.4473219E7,
            "standardDeviation" : 2032447.12504994
          } ],
          "4" : [ {
            "mean" : 2.72631485E7,
            "variance" : 8.006509270216222E14,
            "n" : 1,
            "max" : 8.2354654E7,
            "min" : 414072.0,
            "sum" : 2.72631485E7,
            "standardDeviation" : 2.8295775780522827E7
          }, {
            "mean" : 1.41173444E7,
            "variance" : 1.3358897014942043E13,
            "n" : 10,
            "max" : 2.4300299E7,
            "min" : 1.1722642E7,
            "sum" : 1.41173444E8,
            "standardDeviation" : 3654982.491742203
          }, {
            "mean" : 1.5802730111111112E7,
            "variance" : 8.858843220481884E13,
            "n" : 9,
            "max" : 4.0647843E7,
            "min" : 1.1931288E7,
            "sum" : 1.42224571E8,
            "standardDeviation" : 9412142.806227434
          }, {
            "mean" : 1.24692812E7,
            "variance" : 2.3908369890916997E12,
            "n" : 5,
            "max" : 1.5234942E7,
            "min" : 1.1749611E7,
            "sum" : 6.2346406E7,
            "standardDeviation" : 1546233.1612960899
          } ],
          "5" : [ {
            "mean" : 3.08224675E7,
            "variance" : 6.690697616896115E14,
            "n" : 1,
            "max" : 7.7074381E7,
            "min" : 308738.0,
            "sum" : 3.08224675E7,
            "standardDeviation" : 2.586638284897236E7
          }, {
            "mean" : 1.3258107333333336E7,
            "variance" : 7.683011394719995E11,
            "n" : 9,
            "max" : 1.4847723E7,
            "min" : 1.2112846E7,
            "sum" : 1.1932296600000003E8,
            "standardDeviation" : 876527.8885876932
          }, {
            "mean" : 1.3217564111111112E7,
            "variance" : 2.458808195899861E12,
            "n" : 9,
            "max" : 1.5632305E7,
            "min" : 1.1628994E7,
            "sum" : 1.18958077E8,
            "standardDeviation" : 1568058.734837398
          }, {
            "mean" : 1.3591776666666666E7,
            "variance" : 4.461061933881064E12,
            "n" : 6,
            "max" : 1.692368E7,
            "min" : 1.1641679E7,
            "sum" : 8.155066E7,
            "standardDeviation" : 2112122.613363406
          } ],
          "6" : [ {
            "mean" : 2.7385381833333336E7,
            "variance" : 6.643991689532406E14,
            "n" : 1,
            "max" : 7.6384434E7,
            "min" : 320538.0,
            "sum" : 2.7385381833333336E7,
            "standardDeviation" : 2.577594166957321E7
          }, {
            "mean" : 1.4734834E7,
            "variance" : 2.890044154157822E13,
            "n" : 10,
            "max" : 2.9859219E7,
            "min" : 1.2101968E7,
            "sum" : 1.4734834E8,
            "standardDeviation" : 5375913.089102001
          }, {
            "mean" : 1.2609471888888888E7,
            "variance" : 1.0351049404711108E12,
            "n" : 9,
            "max" : 1.5138481E7,
            "min" : 1.1869931E7,
            "sum" : 1.13485247E8,
            "standardDeviation" : 1017401.071589327
          }, {
            "mean" : 1.75304428E7,
            "variance" : 9.945354792528069E13,
            "n" : 5,
            "max" : 3.5216858E7,
            "min" : 1.1924408E7,
            "sum" : 8.7652214E7,
            "standardDeviation" : 9972639.96769565
          } ],
          "7" : [ {
            "mean" : 2.5475367714285713E7,
            "variance" : 8.327712678913555E14,
            "n" : 2,
            "max" : 8.8814918E7,
            "min" : 325007.0,
            "sum" : 5.0950735428571425E7,
            "standardDeviation" : 2.8857776558344815E7
          }, {
            "mean" : 1.3963755555555554E7,
            "variance" : 1.564678249998277E12,
            "n" : 9,
            "max" : 1.601225E7,
            "min" : 1.2021147E7,
            "sum" : 1.2567379999999999E8,
            "standardDeviation" : 1250870.996545318
          }, {
            "mean" : 1.273911425E7,
            "variance" : 1.285032306051642E12,
            "n" : 8,
            "max" : 1.4718201E7,
            "min" : 1.1726764E7,
            "sum" : 1.01912914E8,
            "standardDeviation" : 1133592.6543744195
          }, {
            "mean" : 1.40066155E7,
            "variance" : 2.8424848992515005E12,
            "n" : 6,
            "max" : 1.5540357E7,
            "min" : 1.179749E7,
            "sum" : 8.4039693E7,
            "standardDeviation" : 1685967.0516506247
          } ],
          "8" : [ {
            "mean" : 2.8509956833333332E7,
            "variance" : 8.054761727878396E14,
            "n" : 1,
            "max" : 8.3391761E7,
            "min" : 485478.0,
            "sum" : 2.8509956833333332E7,
            "standardDeviation" : 2.8380912120434742E7
          }, {
            "mean" : 1.5556261E7,
            "variance" : 3.0894980511626754E13,
            "n" : 9,
            "max" : 2.8320063E7,
            "min" : 1.2437511E7,
            "sum" : 1.40006349E8,
            "standardDeviation" : 5558325.333373961
          }, {
            "mean" : 1.3125258444444444E7,
            "variance" : 1.6713628779292773E12,
            "n" : 9,
            "max" : 1.538317E7,
            "min" : 1.1921197E7,
            "sum" : 1.18127326E8,
            "standardDeviation" : 1292812.0040938966
          }, {
            "mean" : 1.4034112666666666E7,
            "variance" : 4.402706799719866E12,
            "n" : 6,
            "max" : 1.634845E7,
            "min" : 1.1836252E7,
            "sum" : 8.4204676E7,
            "standardDeviation" : 2098262.805208124
          } ],
          "9" : [ {
            "mean" : 2.5008730285714284E7,
            "variance" : 7.287839081246739E14,
            "n" : 2,
            "max" : 8.3752885E7,
            "min" : 510128.0,
            "sum" : 5.001746057142857E7,
            "standardDeviation" : 2.6995998002012704E7
          }, {
            "mean" : 1.4002243777777776E7,
            "variance" : 5.817116646809693E12,
            "n" : 9,
            "max" : 1.9093183E7,
            "min" : 1.1756335E7,
            "sum" : 1.2602019399999999E8,
            "standardDeviation" : 2411869.9481542725
          }, {
            "mean" : 1.5008957666666666E7,
            "variance" : 3.844248734271976E13,
            "n" : 9,
            "max" : 3.144092E7,
            "min" : 1.1948373E7,
            "sum" : 1.35080619E8,
            "standardDeviation" : 6200200.588909987
          }, {
            "mean" : 1.43281164E7,
            "variance" : 5.568799711246302E12,
            "n" : 5,
            "max" : 1.641902E7,
            "min" : 1.1767232E7,
            "sum" : 7.1640582E7,
            "standardDeviation" : 2359830.4412068045
          } ],
          "10" : [ {
            "mean" : 2.8214648666666668E7,
            "variance" : 7.486363114370935E14,
            "n" : 1,
            "max" : 8.0525649E7,
            "min" : 286697.0,
            "sum" : 2.8214648666666668E7,
            "standardDeviation" : 2.7361219114598922E7
          }, {
            "mean" : 1.4008259888888888E7,
            "variance" : 9.298090625006613E12,
            "n" : 9,
            "max" : 2.1978729E7,
            "min" : 1.1958134E7,
            "sum" : 1.26074339E8,
            "standardDeviation" : 3049277.0659627854
          }, {
            "mean" : 1.3026910555555556E7,
            "variance" : 1.5786418687107773E12,
            "n" : 9,
            "max" : 1.5789151E7,
            "min" : 1.187685E7,
            "sum" : 1.17242195E8,
            "standardDeviation" : 1256440.1572342303
          }, {
            "mean" : 1.4102586E7,
            "variance" : 4.2552482339203994E12,
            "n" : 6,
            "max" : 1.678291E7,
            "min" : 1.1794812E7,
            "sum" : 8.4615516E7,
            "standardDeviation" : 2062825.3037812968
          } ],
          "11" : [ {
            "mean" : 2.546882385714286E7,
            "variance" : 5.515933044166988E14,
            "n" : 2,
            "max" : 7.5692174E7,
            "min" : 436296.0,
            "sum" : 5.093764771428572E7,
            "standardDeviation" : 2.3486023597380184E7
          }, {
            "mean" : 1.3043556111111112E7,
            "variance" : 4.8263935749261127E11,
            "n" : 9,
            "max" : 1.4215157E7,
            "min" : 1.2177019E7,
            "sum" : 1.17392005E8,
            "standardDeviation" : 694722.5039485991
          }, {
            "mean" : 1.5110996666666666E7,
            "variance" : 4.002921859387275E13,
            "n" : 9,
            "max" : 3.1715156E7,
            "min" : 1.1770948E7,
            "sum" : 1.3599897E8,
            "standardDeviation" : 6326864.831326235
          }, {
            "mean" : 1.37022888E7,
            "variance" : 4.545644680687199E12,
            "n" : 5,
            "max" : 1.6947073E7,
            "min" : 1.2070527E7,
            "sum" : 6.8511444E7,
            "standardDeviation" : 2132051.753754397
          } ],
          "12" : [ {
            "mean" : 2.728965885714286E7,
            "variance" : 8.10865421726379E14,
            "n" : 2,
            "max" : 8.9486191E7,
            "min" : 435727.0,
            "sum" : 5.457931771428572E7,
            "standardDeviation" : 2.8475698792591184E7
          }, {
            "mean" : 1.4239031777777778E7,
            "variance" : 1.2641358260208445E13,
            "n" : 9,
            "max" : 2.3457845E7,
            "min" : 1.198222E7,
            "sum" : 1.28151286E8,
            "standardDeviation" : 3555468.782060735
          }, {
            "mean" : 1.5500345222222224E7,
            "variance" : 4.95877995048807E13,
            "n" : 9,
            "max" : 3.3896956E7,
            "min" : 1.1867962E7,
            "sum" : 1.39503107E8,
            "standardDeviation" : 7041860.514443658
          }, {
            "mean" : 2.07681498E7,
            "variance" : 2.200447413371727E14,
            "n" : 5,
            "max" : 4.7153272E7,
            "min" : 1.246828E7,
            "sum" : 1.03840749E8,
            "standardDeviation" : 1.483390512768545E7
          } ],
          "13" : [ {
            "mean" : 2.5825074714285713E7,
            "variance" : 7.386568619843392E14,
            "n" : 2,
            "max" : 8.4642908E7,
            "min" : 306367.0,
            "sum" : 5.1650149428571425E7,
            "standardDeviation" : 2.7178242437367786E7
          }, {
            "mean" : 1.3659442444444444E7,
            "variance" : 3.2618442056872783E12,
            "n" : 9,
            "max" : 1.7674554E7,
            "min" : 1.1709756E7,
            "sum" : 1.22934982E8,
            "standardDeviation" : 1806057.6418506908
          }, {
            "mean" : 1.3039000999999998E7,
            "variance" : 2.4581509058202505E12,
            "n" : 9,
            "max" : 1.6684418E7,
            "min" : 1.1557414E7,
            "sum" : 1.1735100899999999E8,
            "standardDeviation" : 1567849.1336286953
          }, {
            "mean" : 1.4044569E7,
            "variance" : 3.186562824594001E12,
            "n" : 5,
            "max" : 1.5568204E7,
            "min" : 1.2002586E7,
            "sum" : 7.0222845E7,
            "standardDeviation" : 1785094.6262296576
          } ],
          "14" : [ {
            "mean" : 2.618917414285714E7,
            "variance" : 5.136642526367805E14,
            "n" : 2,
            "max" : 7.2548168E7,
            "min" : 524343.0,
            "sum" : 5.237834828571428E7,
            "standardDeviation" : 2.266416229726527E7
          }, {
            "mean" : 1.4118147666666664E7,
            "variance" : 1.1905406219707E13,
            "n" : 9,
            "max" : 2.3088678E7,
            "min" : 1.2221528E7,
            "sum" : 1.2706332899999997E8,
            "standardDeviation" : 3450421.165554576
          }, {
            "mean" : 1.2853421555555554E7,
            "variance" : 1.1699265932917783E12,
            "n" : 9,
            "max" : 1.4940228E7,
            "min" : 1.1865819E7,
            "sum" : 1.1568079399999999E8,
            "standardDeviation" : 1081631.449844067
          }, {
            "mean" : 1.45080866E7,
            "variance" : 5.416785168070299E12,
            "n" : 5,
            "max" : 1.6827066E7,
            "min" : 1.1787007E7,
            "sum" : 7.2540433E7,
            "standardDeviation" : 2327398.7986742407
          } ],
          "15" : [ {
            "mean" : 2.674275385714286E7,
            "variance" : 6.983240209951724E14,
            "n" : 2,
            "max" : 8.3911727E7,
            "min" : 521556.0,
            "sum" : 5.348550771428572E7,
            "standardDeviation" : 2.6425821103518665E7
          }, {
            "mean" : 1.2820056333333334E7,
            "variance" : 1.6599501216842502E12,
            "n" : 9,
            "max" : 1.5942158E7,
            "min" : 1.1683151E7,
            "sum" : 1.15380507E8,
            "standardDeviation" : 1288390.5159866128
          }, {
            "mean" : 1.2862244222222222E7,
            "variance" : 1.1296801544281943E12,
            "n" : 9,
            "max" : 1.4944191E7,
            "min" : 1.1746381E7,
            "sum" : 1.15760198E8,
            "standardDeviation" : 1062864.1279242584
          }, {
            "mean" : 1.44501522E7,
            "variance" : 3.2616699335666997E12,
            "n" : 5,
            "max" : 1.6702737E7,
            "min" : 1.2442169E7,
            "sum" : 7.2250761E7,
            "standardDeviation" : 1806009.394650731
          } ],
          "16" : [ {
            "mean" : 2.9327253166666664E7,
            "variance" : 6.451134652762785E14,
            "n" : 1,
            "max" : 7.6905694E7,
            "min" : 444056.0,
            "sum" : 2.9327253166666664E7,
            "standardDeviation" : 2.5399083945612654E7
          }, {
            "mean" : 1.5198245777777778E7,
            "variance" : 3.851926953894795E13,
            "n" : 9,
            "max" : 3.1606247E7,
            "min" : 1.1938249E7,
            "sum" : 1.36784212E8,
            "standardDeviation" : 6206389.412448106
          }, {
            "mean" : 1.2982757700000001E7,
            "variance" : 1.1888738158482334E12,
            "n" : 10,
            "max" : 1.5080964E7,
            "min" : 1.1752411E7,
            "sum" : 1.2982757700000001E8,
            "standardDeviation" : 1090354.9036200247
          }, {
            "mean" : 1.42032298E7,
            "variance" : 4.579218380803699E12,
            "n" : 5,
            "max" : 1.6462999E7,
            "min" : 1.1706154E7,
            "sum" : 7.1016149E7,
            "standardDeviation" : 2139910.8347787997
          } ],
          "17" : [ {
            "mean" : 2.5244039285714287E7,
            "variance" : 7.323051906693522E14,
            "n" : 2,
            "max" : 8.4223458E7,
            "min" : 518869.0,
            "sum" : 5.0488078571428575E7,
            "standardDeviation" : 2.7061138015045714E7
          }, {
            "mean" : 1.3918927666666666E7,
            "variance" : 3.3100281460185E12,
            "n" : 9,
            "max" : 1.7978783E7,
            "min" : 1.2083916E7,
            "sum" : 1.25270349E8,
            "standardDeviation" : 1819348.2750750335
          }, {
            "mean" : 1.2519611555555556E7,
            "variance" : 1.0634043366512782E12,
            "n" : 9,
            "max" : 1.3959261E7,
            "min" : 1.1598005E7,
            "sum" : 1.12676504E8,
            "standardDeviation" : 1031214.9808120895
          }, {
            "mean" : 1.3185353E7,
            "variance" : 2.6293418784815005E12,
            "n" : 5,
            "max" : 1.5504519E7,
            "min" : 1.1623137E7,
            "sum" : 6.5926765E7,
            "standardDeviation" : 1621524.5537707717
          } ],
          "18" : [ {
            "mean" : 2.7937871666666664E7,
            "variance" : 6.984930490905798E14,
            "n" : 1,
            "max" : 7.8391945E7,
            "min" : 448024.0,
            "sum" : 2.7937871666666664E7,
            "standardDeviation" : 2.642901907166779E7
          }, {
            "mean" : 1.3968545777777778E7,
            "variance" : 1.0857702342743443E13,
            "n" : 9,
            "max" : 2.235553E7,
            "min" : 1.1790146E7,
            "sum" : 1.25716912E8,
            "standardDeviation" : 3295102.781817806
          }, {
            "mean" : 1.3245419222222222E7,
            "variance" : 2.1821175488626943E12,
            "n" : 9,
            "max" : 1.672699E7,
            "min" : 1.2122806E7,
            "sum" : 1.19208773E8,
            "standardDeviation" : 1477199.2244997607
          }, {
            "mean" : 1.4061600333333334E7,
            "variance" : 5.056402481670269E12,
            "n" : 6,
            "max" : 1.7510263E7,
            "min" : 1.1818516E7,
            "sum" : 8.4369602E7,
            "standardDeviation" : 2248644.5876728203
          } ],
          "19" : [ {
            "mean" : 2.4717646E7,
            "variance" : 5.950906249455048E14,
            "n" : 2,
            "max" : 7.7319122E7,
            "min" : 484444.0,
            "sum" : 4.9435292E7,
            "standardDeviation" : 2.4394479394844744E7
          }, {
            "mean" : 1.3534589555555556E7,
            "variance" : 1.2666739214005276E12,
            "n" : 9,
            "max" : 1.6266451E7,
            "min" : 1.2449134E7,
            "sum" : 1.21811306E8,
            "standardDeviation" : 1125466.0907377563
          }, {
            "mean" : 1.2361918666666666E7,
            "variance" : 3.1489382461125024E11,
            "n" : 9,
            "max" : 1.3268499E7,
            "min" : 1.1742782E7,
            "sum" : 1.11257268E8,
            "standardDeviation" : 561154.0114899387
          }, {
            "mean" : 1.36109256E7,
            "variance" : 2.3390183226778E12,
            "n" : 5,
            "max" : 1.5492501E7,
            "min" : 1.1864315E7,
            "sum" : 6.8054628E7,
            "standardDeviation" : 1529384.94914714
          } ],
          "20" : [ {
            "mean" : 2.7605249E7,
            "variance" : 8.292072226289179E14,
            "n" : 1,
            "max" : 8.3731923E7,
            "min" : 457727.0,
            "sum" : 2.7605249E7,
            "standardDeviation" : 2.8795958442616872E7
          }, {
            "mean" : 1.3846585555555554E7,
            "variance" : 8.360099333294277E12,
            "n" : 9,
            "max" : 2.1007709E7,
            "min" : 1.1818602E7,
            "sum" : 1.2461926999999999E8,
            "standardDeviation" : 2891383.6364782653
          }, {
            "mean" : 1.3477726333333332E7,
            "variance" : 2.4169043159555005E12,
            "n" : 9,
            "max" : 1.6105409E7,
            "min" : 1.1726282E7,
            "sum" : 1.2129953699999999E8,
            "standardDeviation" : 1554639.6096701964
          }, {
            "mean" : 1.3419236E7,
            "variance" : 2.724210984939599E12,
            "n" : 6,
            "max" : 1.5550466E7,
            "min" : 1.1674796E7,
            "sum" : 8.0515416E7,
            "standardDeviation" : 1650518.3988491613
          } ],
          "21" : [ {
            "mean" : 2.6059715285714284E7,
            "variance" : 5.225516858300096E14,
            "n" : 2,
            "max" : 7.4307044E7,
            "min" : 318449.0,
            "sum" : 5.211943057142857E7,
            "standardDeviation" : 2.285938944569626E7
          }, {
            "mean" : 1.3205916749999998E7,
            "variance" : 8.791743296633567E11,
            "n" : 8,
            "max" : 1.4547343E7,
            "min" : 1.1993844E7,
            "sum" : 1.0564733399999999E8,
            "standardDeviation" : 937642.9649196739
          }, {
            "mean" : 1.9908516400000002E7,
            "variance" : 1.149282729919165E14,
            "n" : 10,
            "max" : 4.050779E7,
            "min" : 1.1964198E7,
            "sum" : 1.9908516400000003E8,
            "standardDeviation" : 1.0720460484135767E7
          }, {
            "mean" : 1.4397347E7,
            "variance" : 2.3837684921725E12,
            "n" : 5,
            "max" : 1.589297E7,
            "min" : 1.2068928E7,
            "sum" : 7.1986735E7,
            "standardDeviation" : 1543945.7542842948
          } ],
          "22" : [ {
            "mean" : 2.468029685714286E7,
            "variance" : 7.267806869675075E14,
            "n" : 2,
            "max" : 8.3683954E7,
            "min" : 482070.0,
            "sum" : 4.936059371428572E7,
            "standardDeviation" : 2.69588702835914E7
          }, {
            "mean" : 1.3822770888888888E7,
            "variance" : 1.7158389273758613E12,
            "n" : 9,
            "max" : 1.6374471E7,
            "min" : 1.2353066E7,
            "sum" : 1.24404938E8,
            "standardDeviation" : 1309900.3501701423
          }, {
            "mean" : 1.2746379444444444E7,
            "variance" : 1.2096664625142778E12,
            "n" : 9,
            "max" : 1.46325E7,
            "min" : 1.1820963E7,
            "sum" : 1.14717415E8,
            "standardDeviation" : 1099848.3816027907
          }, {
            "mean" : 1.82460568E7,
            "variance" : 1.502566746812137E14,
            "n" : 5,
            "max" : 4.0046738E7,
            "min" : 1.1749174E7,
            "sum" : 9.1230284E7,
            "standardDeviation" : 1.225792293503323E7
          } ],
          "23" : [ {
            "mean" : 2.396556657142857E7,
            "variance" : 6.116424514444736E14,
            "n" : 2,
            "max" : 7.7622901E7,
            "min" : 414625.0,
            "sum" : 4.793113314285714E7,
            "standardDeviation" : 2.473140617604413E7
          }, {
            "mean" : 1.3662026111111112E7,
            "variance" : 2.4308609789786123E12,
            "n" : 9,
            "max" : 1.6509732E7,
            "min" : 1.1823805E7,
            "sum" : 1.22958235E8,
            "standardDeviation" : 1559121.861490824
          }, {
            "mean" : 1.3015565E7,
            "variance" : 2.2555664230597163E12,
            "n" : 8,
            "max" : 1.6065083E7,
            "min" : 1.1698773E7,
            "sum" : 1.0412452E8,
            "standardDeviation" : 1501854.3281755778
          }, {
            "mean" : 1.3687075666666668E7,
            "variance" : 3.336509747755866E12,
            "n" : 6,
            "max" : 1.706459E7,
            "min" : 1.1633882E7,
            "sum" : 8.2122454E7,
            "standardDeviation" : 1826611.548128355
          } ],
          "24" : [ {
            "mean" : 2.7334799166666664E7,
            "variance" : 7.451953341711978E14,
            "n" : 1,
            "max" : 8.0233165E7,
            "min" : 323646.0,
            "sum" : 2.7334799166666664E7,
            "standardDeviation" : 2.729826613855169E7
          }, {
            "mean" : 1.4120087444444444E7,
            "variance" : 1.2097803847561025E13,
            "n" : 9,
            "max" : 2.3239025E7,
            "min" : 1.193651E7,
            "sum" : 1.27080787E8,
            "standardDeviation" : 3478189.737142157
          }, {
            "mean" : 1.4514319444444444E7,
            "variance" : 2.2717272889469777E13,
            "n" : 9,
            "max" : 2.6996127E7,
            "min" : 1.1968221E7,
            "sum" : 1.30628875E8,
            "standardDeviation" : 4766264.039000544
          }, {
            "mean" : 1.3723869666666668E7,
            "variance" : 1.115475306887467E12,
            "n" : 6,
            "max" : 1.4657376E7,
            "min" : 1.1849734E7,
            "sum" : 8.2343218E7,
            "standardDeviation" : 1056160.6444511493
          } ],
          "25" : [ {
            "mean" : 3.538990166666667E7,
            "variance" : 1.1355467937386125E15,
            "n" : 1,
            "max" : 9.6122552E7,
            "min" : 479322.0,
            "sum" : 3.538990166666667E7,
            "standardDeviation" : 3.369787521103686E7
          }, {
            "mean" : 1.4059262888888888E7,
            "variance" : 2.414068860784861E12,
            "n" : 9,
            "max" : 1.7190062E7,
            "min" : 1.2102544E7,
            "sum" : 1.26533366E8,
            "standardDeviation" : 1553727.4087769904
          }, {
            "mean" : 1.3710817375E7,
            "variance" : 3.432752740234839E12,
            "n" : 8,
            "max" : 1.6616087E7,
            "min" : 1.1675479E7,
            "sum" : 1.09686539E8,
            "standardDeviation" : 1852768.9387062918
          }, {
            "mean" : 1.3672849714285715E7,
            "variance" : 2.2439841655165703E12,
            "n" : 7,
            "max" : 1.6817433E7,
            "min" : 1.207411E7,
            "sum" : 9.5709948E7,
            "standardDeviation" : 1497993.379663799
          } ],
          "26" : [ {
            "mean" : 2.8123995285714287E7,
            "variance" : 5.945739249664185E14,
            "n" : 2,
            "max" : 7.8486016E7,
            "min" : 315679.0,
            "sum" : 5.6247990571428575E7,
            "standardDeviation" : 2.4383886584513523E7
          }, {
            "mean" : 1.5045557750000002E7,
            "variance" : 2.2819023234215914E13,
            "n" : 8,
            "max" : 2.6605372E7,
            "min" : 1.238523E7,
            "sum" : 1.2036446200000001E8,
            "standardDeviation" : 4776926.128193309
          }, {
            "mean" : 1.5781508555555556E7,
            "variance" : 8.086822342621827E13,
            "n" : 9,
            "max" : 3.9620187E7,
            "min" : 1.190348E7,
            "sum" : 1.42033577E8,
            "standardDeviation" : 8992676.099260902
          }, {
            "mean" : 1.3847638833333334E7,
            "variance" : 7.991729543814965E12,
            "n" : 6,
            "max" : 1.8526571E7,
            "min" : 1.174354E7,
            "sum" : 8.3085833E7,
            "standardDeviation" : 2826964.722775112
          } ],
          "27" : [ {
            "mean" : 2.5746437285714284E7,
            "variance" : 5.914375988310188E14,
            "n" : 2,
            "max" : 7.8059464E7,
            "min" : 313072.0,
            "sum" : 5.149287457142857E7,
            "standardDeviation" : 2.4319490102200307E7
          }, {
            "mean" : 1.2845371555555556E7,
            "variance" : 5.2832434571127795E11,
            "n" : 9,
            "max" : 1.3989362E7,
            "min" : 1.2214704E7,
            "sum" : 1.15608344E8,
            "standardDeviation" : 726859.2337662623
          }, {
            "mean" : 1.5325450999999998E7,
            "variance" : 4.319747236999775E13,
            "n" : 9,
            "max" : 3.2515271E7,
            "min" : 1.1681222E7,
            "sum" : 1.3792905899999997E8,
            "standardDeviation" : 6572478.403920225
          }, {
            "mean" : 1.41656812E7,
            "variance" : 2.4309604500756997E12,
            "n" : 5,
            "max" : 1.6202826E7,
            "min" : 1.2270065E7,
            "sum" : 7.0828406E7,
            "standardDeviation" : 1559153.760883031
          } ],
          "28" : [ {
            "mean" : 2.66758335E7,
            "variance" : 5.87081710929235E14,
            "n" : 1,
            "max" : 7.2777636E7,
            "min" : 308335.0,
            "sum" : 2.66758335E7,
            "standardDeviation" : 2.422976910598273E7
          }, {
            "mean" : 1.3575190333333334E7,
            "variance" : 2.22309241692025E12,
            "n" : 9,
            "max" : 1.7168494E7,
            "min" : 1.2614738E7,
            "sum" : 1.22176713E8,
            "standardDeviation" : 1491003.8286068384
          }, {
            "mean" : 1.3471343888888888E7,
            "variance" : 1.9356626093646113E12,
            "n" : 9,
            "max" : 1.6553623E7,
            "min" : 1.2125447E7,
            "sum" : 1.21242095E8,
            "standardDeviation" : 1391280.9239562696
          }, {
            "mean" : 1.34926205E7,
            "variance" : 2.2641955462871006E12,
            "n" : 6,
            "max" : 1.5509882E7,
            "min" : 1.1781598E7,
            "sum" : 8.0955723E7,
            "standardDeviation" : 1504724.4087496889
          } ],
          "29" : [ {
            "mean" : 2.6142366714285713E7,
            "variance" : 9.30252687315222E14,
            "n" : 2,
            "max" : 9.3441601E7,
            "min" : 466320.0,
            "sum" : 5.2284733428571425E7,
            "standardDeviation" : 3.0500044054316085E7
          }, {
            "mean" : 1.42000215E7,
            "variance" : 5.637279384962571E12,
            "n" : 8,
            "max" : 1.9352418E7,
            "min" : 1.181252E7,
            "sum" : 1.13600172E8,
            "standardDeviation" : 2374295.555520115
          }, {
            "mean" : 1.3138074666666668E7,
            "variance" : 2.847409501850998E12,
            "n" : 9,
            "max" : 1.6975223E7,
            "min" : 1.1817326E7,
            "sum" : 1.1824267200000001E8,
            "standardDeviation" : 1687426.8878535146
          }, {
            "mean" : 1.4025542666666666E7,
            "variance" : 3.407702622227467E12,
            "n" : 6,
            "max" : 1.6831325E7,
            "min" : 1.1934775E7,
            "sum" : 8.4153256E7,
            "standardDeviation" : 1845996.376547762
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 1.2233628E7,
            "variance" : 1.269369941947E12,
            "n" : 2,
            "max" : 1.3406289E7,
            "min" : 1.1159425E7,
            "sum" : 2.4467256E7,
            "standardDeviation" : 1126663.189221606
          }, {
            "mean" : 1.0935692E7,
            "variance" : 5.360058722000001E9,
            "n" : 2,
            "max" : 1.0987461E7,
            "min" : 1.0883923E7,
            "sum" : 2.1871384E7,
            "standardDeviation" : 73212.42191049276
          }, {
            "mean" : 1.0963215E7,
            "variance" : 7.081514512199998E10,
            "n" : 2,
            "max" : 1.1151384E7,
            "min" : 1.0775046E7,
            "sum" : 2.192643E7,
            "standardDeviation" : 266111.1518181829
          }, {
            "mean" : 1.0778347666666666E7,
            "variance" : 1.1190602170333332E10,
            "n" : 3,
            "max" : 1.0883469E7,
            "min" : 1.067191E7,
            "sum" : 3.2335043E7,
            "standardDeviation" : 105785.64255291609
          }, {
            "mean" : 1.0771594E7,
            "variance" : 6.755017680000001E8,
            "n" : 2,
            "max" : 1.0789972E7,
            "min" : 1.0753216E7,
            "sum" : 2.1543188E7,
            "standardDeviation" : 25990.416849292742
          }, {
            "mean" : 1.0797843E7,
            "variance" : 4.9172480000000006E8,
            "n" : 2,
            "max" : 1.0813523E7,
            "min" : 1.0782163E7,
            "sum" : 2.1595686E7,
            "standardDeviation" : 22174.86865801013
          }, {
            "mean" : 1.07991835E7,
            "variance" : 2.197236845E8,
            "n" : 2,
            "max" : 1.0809665E7,
            "min" : 1.0788702E7,
            "sum" : 2.1598367E7,
            "standardDeviation" : 14823.079454013596
          }, {
            "mean" : 1.0736224333333334E7,
            "variance" : 5.786850672333335E9,
            "n" : 3,
            "max" : 1.0823956E7,
            "min" : 1.0688588E7,
            "sum" : 3.2208673E7,
            "standardDeviation" : 76071.3525075855
          }, {
            "mean" : 1.0734361E7,
            "variance" : 1.0523232738E10,
            "n" : 2,
            "max" : 1.0806898E7,
            "min" : 1.0661824E7,
            "sum" : 2.1468722E7,
            "standardDeviation" : 102582.8091738572
          }, {
            "mean" : 1.0796528E7,
            "variance" : 6.23327432E8,
            "n" : 2,
            "max" : 1.0814182E7,
            "min" : 1.0778874E7,
            "sum" : 2.1593056E7,
            "standardDeviation" : 24966.52623013462
          }, {
            "mean" : 1.0795838333333334E7,
            "variance" : 3.321722716333333E9,
            "n" : 3,
            "max" : 1.0862346E7,
            "min" : 1.0760518E7,
            "sum" : 3.2387515E7,
            "standardDeviation" : 57634.388314038115
          } ],
          "1" : [ {
            "mean" : 1.1564999E7,
            "variance" : 2.42391778848E11,
            "n" : 2,
            "max" : 1.1913131E7,
            "min" : 1.1216867E7,
            "sum" : 2.3129998E7,
            "standardDeviation" : 492332.9958960703
          }, {
            "mean" : 1.0911009E7,
            "variance" : 2.6749845E8,
            "n" : 2,
            "max" : 1.0922574E7,
            "min" : 1.0899444E7,
            "sum" : 2.1822018E7,
            "standardDeviation" : 16355.379848844845
          }, {
            "mean" : 1.11876365E7,
            "variance" : 7.565853060500001E9,
            "n" : 2,
            "max" : 1.1249142E7,
            "min" : 1.1126131E7,
            "sum" : 2.2375273E7,
            "standardDeviation" : 86981.9122605384
          }, {
            "mean" : 1.1063133E7,
            "variance" : 1.0957924161E10,
            "n" : 3,
            "max" : 1.1143644E7,
            "min" : 1.0944798E7,
            "sum" : 3.3189399E7,
            "standardDeviation" : 104680.10394052921
          }, {
            "mean" : 1.0964454E7,
            "variance" : 4.54390445E9,
            "n" : 2,
            "max" : 1.1012119E7,
            "min" : 1.0916789E7,
            "sum" : 2.1928908E7,
            "standardDeviation" : 67408.48945051357
          }, {
            "mean" : 1.1124431E7,
            "variance" : 1.3263644192000002E10,
            "n" : 2,
            "max" : 1.1205867E7,
            "min" : 1.1042995E7,
            "sum" : 2.2248862E7,
            "standardDeviation" : 115167.89566541537
          }, {
            "mean" : 1.1042069333333334E7,
            "variance" : 1.1812864023333333E9,
            "n" : 3,
            "max" : 1.1081756E7,
            "min" : 1.1022113E7,
            "sum" : 3.3126208E7,
            "standardDeviation" : 34369.847284114214
          }, {
            "mean" : 1.0987222E7,
            "variance" : 1.3491330848E10,
            "n" : 2,
            "max" : 1.1069354E7,
            "min" : 1.090509E7,
            "sum" : 2.1974444E7,
            "standardDeviation" : 116152.18830482704
          }, {
            "mean" : 1.09912745E7,
            "variance" : 3.0289879445E9,
            "n" : 2,
            "max" : 1.1030191E7,
            "min" : 1.0952358E7,
            "sum" : 2.1982549E7,
            "standardDeviation" : 55036.24210009255
          }, {
            "mean" : 1.07848935E7,
            "variance" : 5.6774102405E9,
            "n" : 2,
            "max" : 1.0838173E7,
            "min" : 1.0731614E7,
            "sum" : 2.1569787E7,
            "standardDeviation" : 75348.59149645732
          }, {
            "mean" : 1.0875350666666666E7,
            "variance" : 7.194409816333332E9,
            "n" : 3,
            "max" : 1.0948097E7,
            "min" : 1.0782185E7,
            "sum" : 3.2626052E7,
            "standardDeviation" : 84819.86687288145
          } ],
          "2" : [ {
            "mean" : 1.1457239E7,
            "variance" : 2.2700726281800003E11,
            "n" : 2,
            "max" : 1.1794142E7,
            "min" : 1.1120336E7,
            "sum" : 2.2914478E7,
            "standardDeviation" : 476452.79180418287
          }, {
            "mean" : 1.0892894E7,
            "variance" : 578888.0,
            "n" : 2,
            "max" : 1.0893432E7,
            "min" : 1.0892356E7,
            "sum" : 2.1785788E7,
            "standardDeviation" : 760.8468965567251
          }, {
            "mean" : 1.0994018E7,
            "variance" : 1.0083988098000002E10,
            "n" : 2,
            "max" : 1.1065025E7,
            "min" : 1.0923011E7,
            "sum" : 2.1988036E7,
            "standardDeviation" : 100419.06242342637
          }, {
            "mean" : 1.059326E7,
            "variance" : 6.5498947E9,
            "n" : 3,
            "max" : 1.065004E7,
            "min" : 1.050059E7,
            "sum" : 3.177978E7,
            "standardDeviation" : 80931.41973300604
          }, {
            "mean" : 1.06093E7,
            "variance" : 2.2139188820000005E9,
            "n" : 2,
            "max" : 1.0642571E7,
            "min" : 1.0576029E7,
            "sum" : 2.12186E7,
            "standardDeviation" : 47052.29943371525
          }, {
            "mean" : 1.68465355E7,
            "variance" : 7.58287873972445E13,
            "n" : 2,
            "max" : 2.3004002E7,
            "min" : 1.0689069E7,
            "sum" : 3.3693071E7,
            "standardDeviation" : 8707972.634157993
          }, {
            "mean" : 1.0576719E7,
            "variance" : 3.9674892429999995E9,
            "n" : 3,
            "max" : 1.064425E7,
            "min" : 1.0519562E7,
            "sum" : 3.1730157E7,
            "standardDeviation" : 62988.00872388331
          }, {
            "mean" : 1.0643952E7,
            "variance" : 1.1862346320000002E9,
            "n" : 2,
            "max" : 1.0668306E7,
            "min" : 1.0619598E7,
            "sum" : 2.1287904E7,
            "standardDeviation" : 34441.75709803436
          }, {
            "mean" : 1.0639682E7,
            "variance" : 1.6274653520000002E9,
            "n" : 2,
            "max" : 1.0668208E7,
            "min" : 1.0611156E7,
            "sum" : 2.1279364E7,
            "standardDeviation" : 40341.85608025491
          }, {
            "mean" : 1.0640457E7,
            "variance" : 1.715581324E9,
            "n" : 3,
            "max" : 1.0668205E7,
            "min" : 1.0592847E7,
            "sum" : 3.1921371E7,
            "standardDeviation" : 41419.576579197426
          }, {
            "mean" : 1.062813E7,
            "variance" : 1.6533983858000002E10,
            "n" : 2,
            "max" : 1.0719053E7,
            "min" : 1.0537207E7,
            "sum" : 2.125626E7,
            "standardDeviation" : 128584.53973164893
          } ],
          "3" : [ {
            "mean" : 1.1686473E7,
            "variance" : 2.36468395808E11,
            "n" : 2,
            "max" : 1.2030325E7,
            "min" : 1.1342621E7,
            "sum" : 2.3372946E7,
            "standardDeviation" : 486280.1618491135
          }, {
            "mean" : 1.09039535E7,
            "variance" : 5.327700312500001E9,
            "n" : 2,
            "max" : 1.0955566E7,
            "min" : 1.0852341E7,
            "sum" : 2.1807907E7,
            "standardDeviation" : 72991.09748798137
          }, {
            "mean" : 1.0985718E7,
            "variance" : 5.353641287999999E9,
            "n" : 2,
            "max" : 1.1037456E7,
            "min" : 1.093398E7,
            "sum" : 2.1971436E7,
            "standardDeviation" : 73168.58129005918
          }, {
            "mean" : 1.1005206333333334E7,
            "variance" : 1.929651381633334E10,
            "n" : 3,
            "max" : 1.1099454E7,
            "min" : 1.0845679E7,
            "sum" : 3.3015619E7,
            "standardDeviation" : 138911.89227828314
          }, {
            "mean" : 1.094362E7,
            "variance" : 1.8407884879999998E9,
            "n" : 2,
            "max" : 1.0973958E7,
            "min" : 1.0913282E7,
            "sum" : 2.188724E7,
            "standardDeviation" : 42904.411055274955
          }, {
            "mean" : 1.0892371E7,
            "variance" : 2.1636160200000003E8,
            "n" : 2,
            "max" : 1.0902772E7,
            "min" : 1.088197E7,
            "sum" : 2.1784742E7,
            "standardDeviation" : 14709.235262242562
          }, {
            "mean" : 1.0674705666666666E7,
            "variance" : 2.7460915446333332E10,
            "n" : 3,
            "max" : 1.0862023E7,
            "min" : 1.0547208E7,
            "sum" : 3.2024117E7,
            "standardDeviation" : 165713.35325293895
          }, {
            "mean" : 1.09371275E7,
            "variance" : 1.1089695125E9,
            "n" : 2,
            "max" : 1.0960675E7,
            "min" : 1.091358E7,
            "sum" : 2.1874255E7,
            "standardDeviation" : 33301.193859980456
          }, {
            "mean" : 1.10201215E7,
            "variance" : 7554384.499999999,
            "n" : 2,
            "max" : 1.1022065E7,
            "min" : 1.1018178E7,
            "sum" : 2.2040243E7,
            "standardDeviation" : 2748.52405847211
          }, {
            "mean" : 1.07445555E7,
            "variance" : 9.496517805E8,
            "n" : 2,
            "max" : 1.0766346E7,
            "min" : 1.0722765E7,
            "sum" : 2.1489111E7,
            "standardDeviation" : 30816.420630890927
          }, {
            "mean" : 1.0915278333333334E7,
            "variance" : 1.772177342433333E10,
            "n" : 3,
            "max" : 1.106829E7,
            "min" : 1.0826031E7,
            "sum" : 3.2745835E7,
            "standardDeviation" : 133123.15134616266
          } ],
          "4" : [ {
            "mean" : 1.15181385E7,
            "variance" : 3.6838150290050006E11,
            "n" : 2,
            "max" : 1.1947313E7,
            "min" : 1.1088964E7,
            "sum" : 2.3036277E7,
            "standardDeviation" : 606944.3985246919
          }, {
            "mean" : 1.09124535E7,
            "variance" : 4.801020050000001E7,
            "n" : 2,
            "max" : 1.0917353E7,
            "min" : 1.0907554E7,
            "sum" : 2.1824907E7,
            "standardDeviation" : 6928.93934884698
          }, {
            "mean" : 1.09455965E7,
            "variance" : 6.87259275125E10,
            "n" : 2,
            "max" : 1.1130969E7,
            "min" : 1.0760224E7,
            "sum" : 2.1891193E7,
            "standardDeviation" : 262156.30359100655
          }, {
            "mean" : 1.0801437E7,
            "variance" : 1.0379604759999999E9,
            "n" : 3,
            "max" : 1.0820831E7,
            "min" : 1.0764247E7,
            "sum" : 3.2404311E7,
            "standardDeviation" : 32217.39399765288
          }, {
            "mean" : 1.06669585E7,
            "variance" : 2.4060290805E9,
            "n" : 2,
            "max" : 1.0701643E7,
            "min" : 1.0632274E7,
            "sum" : 2.1333917E7,
            "standardDeviation" : 49051.290304129616
          }, {
            "mean" : 1.07576815E7,
            "variance" : 1.5157467404999998E9,
            "n" : 2,
            "max" : 1.0785211E7,
            "min" : 1.0730152E7,
            "sum" : 2.1515363E7,
            "standardDeviation" : 38932.59226535012
          }, {
            "mean" : 1.0721992333333334E7,
            "variance" : 2.6165827823333335E9,
            "n" : 3,
            "max" : 1.0765356E7,
            "min" : 1.0665579E7,
            "sum" : 3.2165977E7,
            "standardDeviation" : 51152.54424105739
          }, {
            "mean" : 1.07767835E7,
            "variance" : 1.64963631605E10,
            "n" : 2,
            "max" : 1.0867603E7,
            "min" : 1.0685964E7,
            "sum" : 2.1553567E7,
            "standardDeviation" : 128438.1686279433
          }, {
            "mean" : 1.0719489E7,
            "variance" : 3.060338E8,
            "n" : 2,
            "max" : 1.0731859E7,
            "min" : 1.0707119E7,
            "sum" : 2.1438978E7,
            "standardDeviation" : 17493.821766555186
          }, {
            "mean" : 1.0794485E7,
            "variance" : 1.1887894818E10,
            "n" : 2,
            "max" : 1.0871582E7,
            "min" : 1.0717388E7,
            "sum" : 2.158897E7,
            "standardDeviation" : 109031.62301827851
          }, {
            "mean" : 1.0742616333333334E7,
            "variance" : 9.776969603333331E8,
            "n" : 3,
            "max" : 1.077834E7,
            "min" : 1.072022E7,
            "sum" : 3.2227849E7,
            "standardDeviation" : 31268.146096840042
          } ],
          "5" : [ {
            "mean" : 1.2193641E7,
            "variance" : 1.4645638645810002E12,
            "n" : 2,
            "max" : 1.3511472E7,
            "min" : 1.1132165E7,
            "sum" : 2.4387282E7,
            "standardDeviation" : 1210191.6643990737
          }, {
            "mean" : 1.1014717E7,
            "variance" : 4.066937672E9,
            "n" : 2,
            "max" : 1.1059811E7,
            "min" : 1.0969623E7,
            "sum" : 2.2029434E7,
            "standardDeviation" : 63772.54638165235
          }, {
            "mean" : 1.0978461E7,
            "variance" : 8.354590847999999E9,
            "n" : 2,
            "max" : 1.1043093E7,
            "min" : 1.0913829E7,
            "sum" : 2.1956922E7,
            "standardDeviation" : 91403.45096329787
          }, {
            "mean" : 1.0760765666666666E7,
            "variance" : 1.0260602982333334E10,
            "n" : 3,
            "max" : 1.0837947E7,
            "min" : 1.0646064E7,
            "sum" : 3.2282297E7,
            "standardDeviation" : 101294.63451897803
          }, {
            "mean" : 1.07653975E7,
            "variance" : 3.1244512499999996E7,
            "n" : 2,
            "max" : 1.076935E7,
            "min" : 1.0761445E7,
            "sum" : 2.1530795E7,
            "standardDeviation" : 5589.679105279658
          }, {
            "mean" : 1.08537235E7,
            "variance" : 2.3029648445E9,
            "n" : 2,
            "max" : 1.0887657E7,
            "min" : 1.081979E7,
            "sum" : 2.1707447E7,
            "standardDeviation" : 47989.21591878742
          }, {
            "mean" : 1.08139765E7,
            "variance" : 4.6050244805E9,
            "n" : 2,
            "max" : 1.0861961E7,
            "min" : 1.0765992E7,
            "sum" : 2.1627953E7,
            "standardDeviation" : 67860.33068369178
          }, {
            "mean" : 1.0712017E7,
            "variance" : 6.51626083E8,
            "n" : 3,
            "max" : 1.0740838E7,
            "min" : 1.0692255E7,
            "sum" : 3.2136051E7,
            "standardDeviation" : 25526.9677596067
          }, {
            "mean" : 1.0886159E7,
            "variance" : 3.033893408E9,
            "n" : 2,
            "max" : 1.0925107E7,
            "min" : 1.0847211E7,
            "sum" : 2.1772318E7,
            "standardDeviation" : 55080.78982730731
          }, {
            "mean" : 1.0821895E7,
            "variance" : 7.872866162000001E9,
            "n" : 2,
            "max" : 1.0884636E7,
            "min" : 1.0759154E7,
            "sum" : 2.164379E7,
            "standardDeviation" : 88729.17311685036
          }, {
            "mean" : 1.0824441E7,
            "variance" : 7.884097348E9,
            "n" : 3,
            "max" : 1.0924899E7,
            "min" : 1.0756457E7,
            "sum" : 3.2473323E7,
            "standardDeviation" : 88792.43970068623
          } ],
          "6" : [ {
            "mean" : 1.17083125E7,
            "variance" : 3.0783859590050006E11,
            "n" : 2,
            "max" : 1.2100638E7,
            "min" : 1.1315987E7,
            "sum" : 2.3416625E7,
            "standardDeviation" : 554832.0429648057
          }, {
            "mean" : 1.11062845E7,
            "variance" : 6.652857644999999E8,
            "n" : 2,
            "max" : 1.1124523E7,
            "min" : 1.1088046E7,
            "sum" : 2.2212569E7,
            "standardDeviation" : 25793.134057341693
          }, {
            "mean" : 1.1095742E7,
            "variance" : 2.7510366324E10,
            "n" : 3,
            "max" : 1.128426E7,
            "min" : 1.0972224E7,
            "sum" : 3.3287226E7,
            "standardDeviation" : 165862.49221569052
          }, {
            "mean" : 1.08966625E7,
            "variance" : 4.611936840500001E9,
            "n" : 2,
            "max" : 1.0944683E7,
            "min" : 1.0848642E7,
            "sum" : 2.1793325E7,
            "standardDeviation" : 67911.24237193722
          }, {
            "mean" : 1.09280685E7,
            "variance" : 1.0609146112499998E10,
            "n" : 2,
            "max" : 1.1000901E7,
            "min" : 1.0855236E7,
            "sum" : 2.1856137E7,
            "standardDeviation" : 103000.70928153844
          }, {
            "mean" : 1.08689845E7,
            "variance" : 6.768661249999999E7,
            "n" : 2,
            "max" : 1.0874802E7,
            "min" : 1.0863167E7,
            "sum" : 2.1737969E7,
            "standardDeviation" : 8227.18739910548
          }, {
            "mean" : 1.0988558333333334E7,
            "variance" : 1.212853533033333E10,
            "n" : 3,
            "max" : 1.1115128E7,
            "min" : 1.0914614E7,
            "sum" : 3.2965675E7,
            "standardDeviation" : 110129.62966583212
          }, {
            "mean" : 1.10037185E7,
            "variance" : 7.452373612499999E9,
            "n" : 2,
            "max" : 1.1064761E7,
            "min" : 1.0942676E7,
            "sum" : 2.2007437E7,
            "standardDeviation" : 86327.13138115965
          }, {
            "mean" : 1.09584705E7,
            "variance" : 2.31277675205E10,
            "n" : 2,
            "max" : 1.1066006E7,
            "min" : 1.0850935E7,
            "sum" : 2.1916941E7,
            "standardDeviation" : 152078.16253657197
          }, {
            "mean" : 1.0969637666666666E7,
            "variance" : 1.6831477173333337E9,
            "n" : 3,
            "max" : 1.1003763E7,
            "min" : 1.0924119E7,
            "sum" : 3.2908913E7,
            "standardDeviation" : 41026.183314236456
          }, {
            "mean" : 1.11526845E7,
            "variance" : 6.684264845000001E8,
            "n" : 2,
            "max" : 1.1170966E7,
            "min" : 1.1134403E7,
            "sum" : 2.2305369E7,
            "standardDeviation" : 25853.94524052374
          } ],
          "7" : [ {
            "mean" : 1.14638405E7,
            "variance" : 2.6922755101250003E11,
            "n" : 2,
            "max" : 1.1830738E7,
            "min" : 1.1096943E7,
            "sum" : 2.2927681E7,
            "standardDeviation" : 518871.42050078267
          }, {
            "mean" : 1.0786311E7,
            "variance" : 1.9572521780000002E9,
            "n" : 2,
            "max" : 1.0817594E7,
            "min" : 1.0755028E7,
            "sum" : 2.1572622E7,
            "standardDeviation" : 44240.842871717534
          }, {
            "mean" : 1.1025687E7,
            "variance" : 9.237666888E9,
            "n" : 2,
            "max" : 1.1093649E7,
            "min" : 1.0957725E7,
            "sum" : 2.2051374E7,
            "standardDeviation" : 96112.78212600028
          }, {
            "mean" : 1.0755101E7,
            "variance" : 9.622162564E9,
            "n" : 3,
            "max" : 1.0858523E7,
            "min" : 1.0663389E7,
            "sum" : 3.2265303E7,
            "standardDeviation" : 98092.62237293893
          }, {
            "mean" : 1.08834705E7,
            "variance" : 1.92438847445E10,
            "n" : 2,
            "max" : 1.0981562E7,
            "min" : 1.0785379E7,
            "sum" : 2.1766941E7,
            "standardDeviation" : 138722.32965352046
          }, {
            "mean" : 1.0756084E7,
            "variance" : 4.632608768E9,
            "n" : 2,
            "max" : 1.0804212E7,
            "min" : 1.0707956E7,
            "sum" : 2.1512168E7,
            "standardDeviation" : 68063.27032989232
          }, {
            "mean" : 1.0766228333333334E7,
            "variance" : 8.571886822333335E9,
            "n" : 3,
            "max" : 1.0872967E7,
            "min" : 1.070766E7,
            "sum" : 3.2298685E7,
            "standardDeviation" : 92584.4847819187
          }, {
            "mean" : 1.0581757E7,
            "variance" : 3.3701791442000004E10,
            "n" : 2,
            "max" : 1.0711568E7,
            "min" : 1.0451946E7,
            "sum" : 2.1163514E7,
            "standardDeviation" : 183580.47674521385
          }, {
            "mean" : 1.1377015E7,
            "variance" : 9.386911354880001E11,
            "n" : 2,
            "max" : 1.2062103E7,
            "min" : 1.0691927E7,
            "sum" : 2.275403E7,
            "standardDeviation" : 968860.741019059
          }, {
            "mean" : 1.518367E7,
            "variance" : 5.9600137524501E13,
            "n" : 3,
            "max" : 2.4097259E7,
            "min" : 1.0621586E7,
            "sum" : 4.555101E7,
            "standardDeviation" : 7720112.533150083
          }, {
            "mean" : 1.07501375E7,
            "variance" : 2.74967665245E10,
            "n" : 2,
            "max" : 1.0867391E7,
            "min" : 1.0632884E7,
            "sum" : 2.1500275E7,
            "standardDeviation" : 165821.4899357137
          } ],
          "8" : [ {
            "mean" : 1.22521715E7,
            "variance" : 4.724007480405E11,
            "n" : 2,
            "max" : 1.2738176E7,
            "min" : 1.1766167E7,
            "sum" : 2.4504343E7,
            "standardDeviation" : 687314.1552743549
          }, {
            "mean" : 1.14805315E7,
            "variance" : 1.3459228444999998E9,
            "n" : 2,
            "max" : 1.1506473E7,
            "min" : 1.145459E7,
            "sum" : 2.2961063E7,
            "standardDeviation" : 36686.82112830164
          }, {
            "mean" : 1.14922775E7,
            "variance" : 2.5112784500000004E7,
            "n" : 2,
            "max" : 1.1495821E7,
            "min" : 1.1488734E7,
            "sum" : 2.2984555E7,
            "standardDeviation" : 5011.265758269063
          }, {
            "mean" : 1.1130629E7,
            "variance" : 3.1729067283000004E10,
            "n" : 3,
            "max" : 1.1302638E7,
            "min" : 1.0946958E7,
            "sum" : 3.3391887E7,
            "standardDeviation" : 178126.54850695335
          }, {
            "mean" : 1.10909245E7,
            "variance" : 1.8709456205E9,
            "n" : 2,
            "max" : 1.112151E7,
            "min" : 1.1060339E7,
            "sum" : 2.2181849E7,
            "standardDeviation" : 43254.4289119623
          }, {
            "mean" : 1.1220446E7,
            "variance" : 3.069517952E9,
            "n" : 2,
            "max" : 1.1259622E7,
            "min" : 1.118127E7,
            "sum" : 2.2440892E7,
            "standardDeviation" : 55403.23051952837
          }, {
            "mean" : 1.1043951E7,
            "variance" : 5.106249245000001E10,
            "n" : 2,
            "max" : 1.1203736E7,
            "min" : 1.0884166E7,
            "sum" : 2.2087902E7,
            "standardDeviation" : 225970.114063785
          }, {
            "mean" : 1.0945657666666666E7,
            "variance" : 9.550004550333332E9,
            "n" : 3,
            "max" : 1.1032799E7,
            "min" : 1.084E7,
            "sum" : 3.2836973E7,
            "standardDeviation" : 97724.12470998823
          }, {
            "mean" : 1.1235082E7,
            "variance" : 8.759320082E9,
            "n" : 2,
            "max" : 1.1301261E7,
            "min" : 1.1168903E7,
            "sum" : 2.2470164E7,
            "standardDeviation" : 93591.23934428906
          }, {
            "mean" : 1.1243214E7,
            "variance" : 2.325756402E9,
            "n" : 2,
            "max" : 1.1277315E7,
            "min" : 1.1209113E7,
            "sum" : 2.2486428E7,
            "standardDeviation" : 48226.09669048491
          }, {
            "mean" : 1.11554E7,
            "variance" : 3.0155672128E10,
            "n" : 3,
            "max" : 1.1287616E7,
            "min" : 1.0958736E7,
            "sum" : 3.34662E7,
            "standardDeviation" : 173653.8860146815
          } ],
          "9" : [ {
            "mean" : 1.1917876E7,
            "variance" : 2.4210361125000003E11,
            "n" : 2,
            "max" : 1.2265801E7,
            "min" : 1.1569951E7,
            "sum" : 2.3835752E7,
            "standardDeviation" : 492040.2536886591
          }, {
            "mean" : 1.0937283E7,
            "variance" : 2.0615904719999998E9,
            "n" : 2,
            "max" : 1.0969389E7,
            "min" : 1.0905177E7,
            "sum" : 2.1874566E7,
            "standardDeviation" : 45404.74063355059
          }, {
            "mean" : 1.0910924E7,
            "variance" : 6.492073352000001E9,
            "n" : 2,
            "max" : 1.0967898E7,
            "min" : 1.085395E7,
            "sum" : 2.1821848E7,
            "standardDeviation" : 80573.40350264472
          }, {
            "mean" : 1.0629367333333334E7,
            "variance" : 5.306754352333334E9,
            "n" : 3,
            "max" : 1.0708119E7,
            "min" : 1.0564391E7,
            "sum" : 3.1888102E7,
            "standardDeviation" : 72847.4732048637
          }, {
            "mean" : 1.10509025E7,
            "variance" : 1.85236977645E10,
            "n" : 2,
            "max" : 1.1147141E7,
            "min" : 1.0954664E7,
            "sum" : 2.2101805E7,
            "standardDeviation" : 136101.7919224431
          }, {
            "mean" : 1.1101179E7,
            "variance" : 3.1428177619999995E9,
            "n" : 2,
            "max" : 1.114082E7,
            "min" : 1.1061538E7,
            "sum" : 2.2202358E7,
            "standardDeviation" : 56060.83982603186
          }, {
            "mean" : 1.1016007333333334E7,
            "variance" : 1.8196257213333333E9,
            "n" : 3,
            "max" : 1.1063668E7,
            "min" : 1.0981408E7,
            "sum" : 3.3048022E7,
            "standardDeviation" : 42657.071176222744
          }, {
            "mean" : 1.0834918E7,
            "variance" : 1.2869389377800002E11,
            "n" : 2,
            "max" : 1.1088585E7,
            "min" : 1.0581251E7,
            "sum" : 2.1669836E7,
            "standardDeviation" : 358739.3117264959
          }, {
            "mean" : 1.0870619E7,
            "variance" : 9.6530907272E10,
            "n" : 2,
            "max" : 1.1090313E7,
            "min" : 1.0650925E7,
            "sum" : 2.1741238E7,
            "standardDeviation" : 310694.23437199474
          }, {
            "mean" : 1.10823055E7,
            "variance" : 2.1011403124999998E9,
            "n" : 2,
            "max" : 1.1114718E7,
            "min" : 1.1049893E7,
            "sum" : 2.2164611E7,
            "standardDeviation" : 45838.19709041794
          }, {
            "mean" : 1.098754E7,
            "variance" : 2.495378263E9,
            "n" : 3,
            "max" : 1.1040514E7,
            "min" : 1.0941287E7,
            "sum" : 3.296262E7,
            "standardDeviation" : 49953.76124977978
          } ],
          "10" : [ {
            "mean" : 1.18622655E7,
            "variance" : 3.912753875805E11,
            "n" : 2,
            "max" : 1.2304575E7,
            "min" : 1.1419956E7,
            "sum" : 2.3724531E7,
            "standardDeviation" : 625520.0936664625
          }, {
            "mean" : 1.1033921E7,
            "variance" : 4.3725159199999994E8,
            "n" : 2,
            "max" : 1.1048707E7,
            "min" : 1.1019135E7,
            "sum" : 2.2067842E7,
            "standardDeviation" : 20910.56173324858
          }, {
            "mean" : 1.11116265E7,
            "variance" : 1.87472566125E10,
            "n" : 2,
            "max" : 1.1208444E7,
            "min" : 1.1014809E7,
            "sum" : 2.2223253E7,
            "standardDeviation" : 136920.62157505713
          }, {
            "mean" : 1.0962538E7,
            "variance" : 1.0732280511E10,
            "n" : 3,
            "max" : 1.1068917E7,
            "min" : 1.0861968E7,
            "sum" : 3.2887614E7,
            "standardDeviation" : 103596.72056102935
          }, {
            "mean" : 1.1044201E7,
            "variance" : 1.9665228979999998E9,
            "n" : 2,
            "max" : 1.1075558E7,
            "min" : 1.1012844E7,
            "sum" : 2.2088402E7,
            "standardDeviation" : 44345.49467533314
          }, {
            "mean" : 1.096737E7,
            "variance" : 3.2378713919999995E9,
            "n" : 2,
            "max" : 1.1007606E7,
            "min" : 1.0927134E7,
            "sum" : 2.193474E7,
            "standardDeviation" : 56902.29689564385
          }, {
            "mean" : 1.0991802E7,
            "variance" : 1.9827363920000002E9,
            "n" : 2,
            "max" : 1.1023288E7,
            "min" : 1.0960316E7,
            "sum" : 2.1983604E7,
            "standardDeviation" : 44527.92822487927
          }, {
            "mean" : 1.0967245666666666E7,
            "variance" : 2.496720705333334E9,
            "n" : 3,
            "max" : 1.1000567E7,
            "min" : 1.0909793E7,
            "sum" : 3.2901737E7,
            "standardDeviation" : 49967.19629250108
          }, {
            "mean" : 1.1014222E7,
            "variance" : 512.0000000000001,
            "n" : 2,
            "max" : 1.1014238E7,
            "min" : 1.1014206E7,
            "sum" : 2.2028444E7,
            "standardDeviation" : 22.627416997969522
          }, {
            "mean" : 1.09856905E7,
            "variance" : 2.5716640444999995E9,
            "n" : 2,
            "max" : 1.1021549E7,
            "min" : 1.0949832E7,
            "sum" : 2.1971381E7,
            "standardDeviation" : 50711.577026355626
          }, {
            "mean" : 1.0898316333333334E7,
            "variance" : 6.285046994333334E9,
            "n" : 3,
            "max" : 1.0988492E7,
            "min" : 1.0839579E7,
            "sum" : 3.2694949E7,
            "standardDeviation" : 79278.28829088916
          } ],
          "11" : [ {
            "mean" : 1.17876365E7,
            "variance" : 3.5225337190050006E11,
            "n" : 2,
            "max" : 1.2207311E7,
            "min" : 1.1367962E7,
            "sum" : 2.3575273E7,
            "standardDeviation" : 593509.3696821475
          }, {
            "mean" : 1.109579E7,
            "variance" : 3.760872992E9,
            "n" : 2,
            "max" : 1.1139154E7,
            "min" : 1.1052426E7,
            "sum" : 2.219158E7,
            "standardDeviation" : 61325.956918746895
          }, {
            "mean" : 1.1292628E7,
            "variance" : 5.0842227199999994E8,
            "n" : 2,
            "max" : 1.1308572E7,
            "min" : 1.1276684E7,
            "sum" : 2.2585256E7,
            "standardDeviation" : 22548.221038476626
          }, {
            "mean" : 1.1031423E7,
            "variance" : 1.001487088E9,
            "n" : 3,
            "max" : 1.1063427E7,
            "min" : 1.1000147E7,
            "sum" : 3.3094269E7,
            "standardDeviation" : 31646.28079253548
          }, {
            "mean" : 1.1049872E7,
            "variance" : 4.445490632E9,
            "n" : 2,
            "max" : 1.1097018E7,
            "min" : 1.1002726E7,
            "sum" : 2.2099744E7,
            "standardDeviation" : 66674.51261164194
          }, {
            "mean" : 1.0969036E7,
            "variance" : 1.0497362E7,
            "n" : 2,
            "max" : 1.0971327E7,
            "min" : 1.0966745E7,
            "sum" : 2.1938072E7,
            "standardDeviation" : 3239.963271396761
          }, {
            "mean" : 1.0996079333333334E7,
            "variance" : 3.996384893333334E8,
            "n" : 3,
            "max" : 1.101374E7,
            "min" : 1.0974376E7,
            "sum" : 3.2988238E7,
            "standardDeviation" : 19990.960190379385
          }, {
            "mean" : 1.0897702E7,
            "variance" : 1.81603682E8,
            "n" : 2,
            "max" : 1.0907231E7,
            "min" : 1.0888173E7,
            "sum" : 2.1795404E7,
            "standardDeviation" : 13476.041035853223
          }, {
            "mean" : 1.09935455E7,
            "variance" : 2.743184645E8,
            "n" : 2,
            "max" : 1.1005257E7,
            "min" : 1.0981834E7,
            "sum" : 2.1987091E7,
            "standardDeviation" : 16562.562135732504
          }, {
            "mean" : 1.0994918333333334E7,
            "variance" : 2.983854305333333E9,
            "n" : 3,
            "max" : 1.1050957E7,
            "min" : 1.0941827E7,
            "sum" : 3.2984755E7,
            "standardDeviation" : 54624.66755352689
          }, {
            "mean" : 1.08902505E7,
            "variance" : 5.987790744500001E9,
            "n" : 2,
            "max" : 1.0944967E7,
            "min" : 1.0835534E7,
            "sum" : 2.1780501E7,
            "standardDeviation" : 77380.81638558746
          } ],
          "12" : [ {
            "mean" : 1.1768727E7,
            "variance" : 1.88401000482E11,
            "n" : 2,
            "max" : 1.2075648E7,
            "min" : 1.1461806E7,
            "sum" : 2.3537454E7,
            "standardDeviation" : 434051.8407771127
          }, {
            "mean" : 1.09008425E7,
            "variance" : 9.3340150805E9,
            "n" : 2,
            "max" : 1.0969158E7,
            "min" : 1.0832527E7,
            "sum" : 2.1801685E7,
            "standardDeviation" : 96612.70662029917
          }, {
            "mean" : 1.10625585E7,
            "variance" : 2.037574845E8,
            "n" : 2,
            "max" : 1.1072652E7,
            "min" : 1.1052465E7,
            "sum" : 2.2125117E7,
            "standardDeviation" : 14274.364591812835
          }, {
            "mean" : 1.0827091333333334E7,
            "variance" : 1.5518447685333332E10,
            "n" : 3,
            "max" : 1.0968986E7,
            "min" : 1.0735702E7,
            "sum" : 3.2481274E7,
            "standardDeviation" : 124573.06163586625
          }, {
            "mean" : 1.07192125E7,
            "variance" : 5.0953896450000006E8,
            "n" : 2,
            "max" : 1.0735174E7,
            "min" : 1.0703251E7,
            "sum" : 2.1438425E7,
            "standardDeviation" : 22572.969775818157
          }, {
            "mean" : 1.074066E7,
            "variance" : 3.2090577800000006E8,
            "n" : 2,
            "max" : 1.0753327E7,
            "min" : 1.0727993E7,
            "sum" : 2.148132E7,
            "standardDeviation" : 17913.843194579997
          }, {
            "mean" : 1.0735296333333334E7,
            "variance" : 2.0138163263333333E9,
            "n" : 3,
            "max" : 1.0772684E7,
            "min" : 1.0685531E7,
            "sum" : 3.2205889E7,
            "standardDeviation" : 44875.564913807306
          }, {
            "mean" : 1.0789833E7,
            "variance" : 3.8017456020000005E9,
            "n" : 2,
            "max" : 1.0833432E7,
            "min" : 1.0746234E7,
            "sum" : 2.1579666E7,
            "standardDeviation" : 61658.297105904574
          }, {
            "mean" : 1.08196055E7,
            "variance" : 5428512.5,
            "n" : 2,
            "max" : 1.0821253E7,
            "min" : 1.0817958E7,
            "sum" : 2.1639211E7,
            "standardDeviation" : 2329.916844009674
          }, {
            "mean" : 1.0777731333333334E7,
            "variance" : 4.062057742333334E9,
            "n" : 3,
            "max" : 1.085131E7,
            "min" : 1.0739641E7,
            "sum" : 3.2333194E7,
            "standardDeviation" : 63734.27447091034
          }, {
            "mean" : 1.0775775E7,
            "variance" : 4.0498200020000005E9,
            "n" : 2,
            "max" : 1.0820774E7,
            "min" : 1.0730776E7,
            "sum" : 2.155155E7,
            "standardDeviation" : 63638.19609322691
          } ],
          "13" : [ {
            "mean" : 1.17099195E7,
            "variance" : 4.5845195880050006E11,
            "n" : 2,
            "max" : 1.2188695E7,
            "min" : 1.1231144E7,
            "sum" : 2.3419839E7,
            "standardDeviation" : 677090.8054319598
          }, {
            "mean" : 1.1019813E7,
            "variance" : 1.4536831999999998E7,
            "n" : 2,
            "max" : 1.1022509E7,
            "min" : 1.1017117E7,
            "sum" : 2.2039626E7,
            "standardDeviation" : 3812.719764157864
          }, {
            "mean" : 1.1082142E7,
            "variance" : 1.6471125000000003E8,
            "n" : 2,
            "max" : 1.1091217E7,
            "min" : 1.1073067E7,
            "sum" : 2.2164284E7,
            "standardDeviation" : 12833.988078535838
          }, {
            "mean" : 1.0846103666666666E7,
            "variance" : 2.1341038303333333E9,
            "n" : 3,
            "max" : 1.0887526E7,
            "min" : 1.0796285E7,
            "sum" : 3.2538311E7,
            "standardDeviation" : 46196.36165688087
          }, {
            "mean" : 1.0847452E7,
            "variance" : 1.6110125E8,
            "n" : 2,
            "max" : 1.0856427E7,
            "min" : 1.0838477E7,
            "sum" : 2.1694904E7,
            "standardDeviation" : 12692.566722298528
          }, {
            "mean" : 1.0795005E7,
            "variance" : 6.448358719999999E8,
            "n" : 2,
            "max" : 1.0812961E7,
            "min" : 1.0777049E7,
            "sum" : 2.159001E7,
            "standardDeviation" : 25393.618725971293
          }, {
            "mean" : 1.0719178333333334E7,
            "variance" : 1.0287748143333331E9,
            "n" : 3,
            "max" : 1.075615E7,
            "min" : 1.0698796E7,
            "sum" : 3.2157535E7,
            "standardDeviation" : 32074.519705419334
          }, {
            "mean" : 1.0726429E7,
            "variance" : 5.573357042E9,
            "n" : 2,
            "max" : 1.0779218E7,
            "min" : 1.067364E7,
            "sum" : 2.1452858E7,
            "standardDeviation" : 74654.91974411331
          }, {
            "mean" : 1.0770214E7,
            "variance" : 1.7458329799999997E8,
            "n" : 2,
            "max" : 1.0779557E7,
            "min" : 1.0760871E7,
            "sum" : 2.1540428E7,
            "standardDeviation" : 13212.997313251826
          }, {
            "mean" : 1.0848125E7,
            "variance" : 4.342491904000001E9,
            "n" : 3,
            "max" : 1.0892813E7,
            "min" : 1.0772445E7,
            "sum" : 3.2544375E7,
            "standardDeviation" : 65897.58648084162
          }, {
            "mean" : 1.08555715E7,
            "variance" : 2.0174587205E9,
            "n" : 2,
            "max" : 1.0887332E7,
            "min" : 1.0823811E7,
            "sum" : 2.1711143E7,
            "standardDeviation" : 44916.129847750686
          } ],
          "14" : [ {
            "mean" : 1.1781293E7,
            "variance" : 3.3368567859200006E11,
            "n" : 2,
            "max" : 1.2189757E7,
            "min" : 1.1372829E7,
            "sum" : 2.3562586E7,
            "standardDeviation" : 577655.3285411639
          }, {
            "mean" : 1.11501355E7,
            "variance" : 1.2311158612499998E10,
            "n" : 2,
            "max" : 1.1228593E7,
            "min" : 1.1071678E7,
            "sum" : 2.2300271E7,
            "standardDeviation" : 110955.6605698871
          }, {
            "mean" : 1.12240185E7,
            "variance" : 6.3609048405E9,
            "n" : 2,
            "max" : 1.1280414E7,
            "min" : 1.1167623E7,
            "sum" : 2.2448037E7,
            "standardDeviation" : 79755.28095681188
          }, {
            "mean" : 1.1246872666666666E7,
            "variance" : 1.8825122917033334E11,
            "n" : 3,
            "max" : 1.1743602E7,
            "min" : 1.0941973E7,
            "sum" : 3.3740618E7,
            "standardDeviation" : 433879.27948950656
          }, {
            "mean" : 1.08451845E7,
            "variance" : 1.97029115405E10,
            "n" : 2,
            "max" : 1.0944439E7,
            "min" : 1.074593E7,
            "sum" : 2.1690369E7,
            "standardDeviation" : 140367.06002656036
          }, {
            "mean" : 1.0814107E7,
            "variance" : 2.37576402E8,
            "n" : 2,
            "max" : 1.0825006E7,
            "min" : 1.0803208E7,
            "sum" : 2.1628214E7,
            "standardDeviation" : 15413.513616304363
          }, {
            "mean" : 1.0813298666666666E7,
            "variance" : 9.074353923333334E8,
            "n" : 3,
            "max" : 1.0832417E7,
            "min" : 1.0778574E7,
            "sum" : 3.2439896E7,
            "standardDeviation" : 30123.66830804863
          }, {
            "mean" : 1.09339355E7,
            "variance" : 8.9278203125E9,
            "n" : 2,
            "max" : 1.1000748E7,
            "min" : 1.0867123E7,
            "sum" : 2.1867871E7,
            "standardDeviation" : 94487.14363605241
          }, {
            "mean" : 1.08949105E7,
            "variance" : 2.2146509045E9,
            "n" : 2,
            "max" : 1.0928187E7,
            "min" : 1.0861634E7,
            "sum" : 2.1789821E7,
            "standardDeviation" : 47060.0776083083
          }, {
            "mean" : 1.0864407666666666E7,
            "variance" : 2.4857489903333335E9,
            "n" : 3,
            "max" : 1.0907453E7,
            "min" : 1.0809778E7,
            "sum" : 3.2593223E7,
            "standardDeviation" : 49857.2862311351
          }, {
            "mean" : 1.08306715E7,
            "variance" : 5.567973864500001E9,
            "n" : 2,
            "max" : 1.0883435E7,
            "min" : 1.0777908E7,
            "sum" : 2.1661343E7,
            "standardDeviation" : 74618.85729827281
          } ],
          "15" : [ {
            "mean" : 1.17736265E7,
            "variance" : 3.4319866854050006E11,
            "n" : 2,
            "max" : 1.2187872E7,
            "min" : 1.1359381E7,
            "sum" : 2.3547253E7,
            "standardDeviation" : 585831.604252024
          }, {
            "mean" : 1.10561685E7,
            "variance" : 1.9438236005000002E9,
            "n" : 2,
            "max" : 1.1087344E7,
            "min" : 1.1024993E7,
            "sum" : 2.2112337E7,
            "standardDeviation" : 44088.81491376243
          }, {
            "mean" : 1.1084792333333334E7,
            "variance" : 5.446029362333333E9,
            "n" : 3,
            "max" : 1.1169994E7,
            "min" : 1.1040952E7,
            "sum" : 3.3254377E7,
            "standardDeviation" : 73797.21784954588
          }, {
            "mean" : 1.08876645E7,
            "variance" : 2.9548828125E9,
            "n" : 2,
            "max" : 1.0926102E7,
            "min" : 1.0849227E7,
            "sum" : 2.1775329E7,
            "standardDeviation" : 54358.83380371584
          }, {
            "mean" : 1.09012335E7,
            "variance" : 3.3896907845E9,
            "n" : 2,
            "max" : 1.0942402E7,
            "min" : 1.0860065E7,
            "sum" : 2.1802467E7,
            "standardDeviation" : 58221.05104255676
          }, {
            "mean" : 1.0905545E7,
            "variance" : 1.7583873370000002E9,
            "n" : 3,
            "max" : 1.0950838E7,
            "min" : 1.0868073E7,
            "sum" : 3.2716635E7,
            "standardDeviation" : 41933.12934900042
          }, {
            "mean" : 1.094245E7,
            "variance" : 3.1696722000000004E7,
            "n" : 2,
            "max" : 1.0946431E7,
            "min" : 1.0938469E7,
            "sum" : 2.18849E7,
            "standardDeviation" : 5629.984191807292
          }, {
            "mean" : 1.098998E7,
            "variance" : 5.92198445E9,
            "n" : 2,
            "max" : 1.1044395E7,
            "min" : 1.0935565E7,
            "sum" : 2.197996E7,
            "standardDeviation" : 76954.43099653197
          }, {
            "mean" : 1.0986785E7,
            "variance" : 5.1360125E8,
            "n" : 2,
            "max" : 1.100281E7,
            "min" : 1.097076E7,
            "sum" : 2.197357E7,
            "standardDeviation" : 22662.772337028848
          }, {
            "mean" : 1.0956847666666666E7,
            "variance" : 1.0353489112333332E10,
            "n" : 3,
            "max" : 1.1067934E7,
            "min" : 1.0868163E7,
            "sum" : 3.2870543E7,
            "standardDeviation" : 101752.0963535068
          }, {
            "mean" : 1.08820025E7,
            "variance" : 1.2721472405000002E9,
            "n" : 2,
            "max" : 1.0907223E7,
            "min" : 1.0856782E7,
            "sum" : 2.1764005E7,
            "standardDeviation" : 35667.17314983065
          } ],
          "16" : [ {
            "mean" : 1.1721879E7,
            "variance" : 4.2899546664200006E11,
            "n" : 2,
            "max" : 1.2185018E7,
            "min" : 1.125874E7,
            "sum" : 2.3443758E7,
            "standardDeviation" : 654977.4550639129
          }, {
            "mean" : 1.07649975E7,
            "variance" : 2.1287812499999996E7,
            "n" : 2,
            "max" : 1.076826E7,
            "min" : 1.0761735E7,
            "sum" : 2.1529995E7,
            "standardDeviation" : 4613.871747242222
          }, {
            "mean" : 1.0881378E7,
            "variance" : 8.609606642E9,
            "n" : 2,
            "max" : 1.0946989E7,
            "min" : 1.0815767E7,
            "sum" : 2.1762756E7,
            "standardDeviation" : 92787.96604086114
          }, {
            "mean" : 1.0741378333333334E7,
            "variance" : 1.1577071844333336E10,
            "n" : 3,
            "max" : 1.0827664E7,
            "min" : 1.062082E7,
            "sum" : 3.2224135E7,
            "standardDeviation" : 107596.80220310144
          }, {
            "mean" : 1.0699932E7,
            "variance" : 7.665696199999999E7,
            "n" : 2,
            "max" : 1.0706123E7,
            "min" : 1.0693741E7,
            "sum" : 2.1399864E7,
            "standardDeviation" : 8755.396164651831
          }, {
            "mean" : 1.0646372E7,
            "variance" : 5.94377045E9,
            "n" : 2,
            "max" : 1.0700887E7,
            "min" : 1.0591857E7,
            "sum" : 2.1292744E7,
            "standardDeviation" : 77095.85235276927
          }, {
            "mean" : 1.0699189333333334E7,
            "variance" : 2.0853170623333333E9,
            "n" : 3,
            "max" : 1.0728224E7,
            "min" : 1.0646553E7,
            "sum" : 3.2097568E7,
            "standardDeviation" : 45665.2719507213
          }, {
            "mean" : 1.06571495E7,
            "variance" : 1.3763930445000002E9,
            "n" : 2,
            "max" : 1.0683383E7,
            "min" : 1.0630916E7,
            "sum" : 2.1314299E7,
            "standardDeviation" : 37099.77148851459
          }, {
            "mean" : 1.07668745E7,
            "variance" : 9.5616471845E9,
            "n" : 2,
            "max" : 1.0836018E7,
            "min" : 1.0697731E7,
            "sum" : 2.1533749E7,
            "standardDeviation" : 97783.6754499441
          }, {
            "mean" : 1.0751299E7,
            "variance" : 5.390357779999999E8,
            "n" : 2,
            "max" : 1.0767716E7,
            "min" : 1.0734882E7,
            "sum" : 2.1502598E7,
            "standardDeviation" : 23217.1440534791
          }, {
            "mean" : 1.0659805E7,
            "variance" : 1.169942079E9,
            "n" : 3,
            "max" : 1.0699287E7,
            "min" : 1.0639158E7,
            "sum" : 3.1979415E7,
            "standardDeviation" : 34204.41607453634
          } ],
          "17" : [ {
            "mean" : 1.2479297E7,
            "variance" : 1.481017481649E12,
            "n" : 2,
            "max" : 1.385012E7,
            "min" : 1.1526209E7,
            "sum" : 2.4958594E7,
            "standardDeviation" : 1216970.6165922824
          }, {
            "mean" : 1.11857605E7,
            "variance" : 6.18383205E7,
            "n" : 2,
            "max" : 1.1191321E7,
            "min" : 1.11802E7,
            "sum" : 2.2371521E7,
            "standardDeviation" : 7863.734513575595
          }, {
            "mean" : 1.1280483E7,
            "variance" : 1.7214772352E10,
            "n" : 2,
            "max" : 1.1373259E7,
            "min" : 1.1187707E7,
            "sum" : 2.2560966E7,
            "standardDeviation" : 131205.07746272627
          }, {
            "mean" : 1.1008407E7,
            "variance" : 4.1685754320000005E9,
            "n" : 2,
            "max" : 1.1054061E7,
            "min" : 1.0962753E7,
            "sum" : 2.2016814E7,
            "standardDeviation" : 64564.505976581284
          }, {
            "mean" : 1.1031919666666666E7,
            "variance" : 2.4001925903333335E9,
            "n" : 3,
            "max" : 1.10795E7,
            "min" : 1.0981629E7,
            "sum" : 3.3095759E7,
            "standardDeviation" : 48991.760433090516
          }, {
            "mean" : 1.0971568E7,
            "variance" : 4.390407217999999E9,
            "n" : 2,
            "max" : 1.1018421E7,
            "min" : 1.0924715E7,
            "sum" : 2.1943136E7,
            "standardDeviation" : 66260.14803786662
          }, {
            "mean" : 1.1029071E7,
            "variance" : 2.8409214420000005E9,
            "n" : 2,
            "max" : 1.106676E7,
            "min" : 1.0991382E7,
            "sum" : 2.2058142E7,
            "standardDeviation" : 53300.29495227958
          }, {
            "mean" : 1.0983936E7,
            "variance" : 9.78765768E8,
            "n" : 2,
            "max" : 1.1006058E7,
            "min" : 1.0961814E7,
            "sum" : 2.1967872E7,
            "standardDeviation" : 31285.23242681761
          }, {
            "mean" : 1.0945048E7,
            "variance" : 215168.0,
            "n" : 2,
            "max" : 1.0945376E7,
            "min" : 1.094472E7,
            "sum" : 2.1890096E7,
            "standardDeviation" : 463.86204845837517
          }, {
            "mean" : 1.0933967666666666E7,
            "variance" : 1.361338390633333E10,
            "n" : 3,
            "max" : 1.1067937E7,
            "min" : 1.0854632E7,
            "sum" : 3.2801903E7,
            "standardDeviation" : 116676.40681103156
          }, {
            "mean" : 1.0861587E7,
            "variance" : 3.25382445E9,
            "n" : 2,
            "max" : 1.0901922E7,
            "min" : 1.0821252E7,
            "sum" : 2.1723174E7,
            "standardDeviation" : 57042.30403831879
          }, {
            "mean" : 1.0947592E7,
            "variance" : 0.0,
            "n" : 1,
            "max" : 1.0947592E7,
            "min" : 1.0947592E7,
            "sum" : 1.0947592E7,
            "standardDeviation" : 0.0
          } ],
          "18" : [ {
            "mean" : 1.2280733E7,
            "variance" : 1.273567463428E12,
            "n" : 2,
            "max" : 1.3568335E7,
            "min" : 1.1463357E7,
            "sum" : 2.4561466E7,
            "standardDeviation" : 1128524.4629284737
          }, {
            "mean" : 1.0902312E7,
            "variance" : 3.8054087999999995E9,
            "n" : 2,
            "max" : 1.0945932E7,
            "min" : 1.0858692E7,
            "sum" : 2.1804624E7,
            "standardDeviation" : 61687.9955907144
          }, {
            "mean" : 1.09657625E7,
            "variance" : 8.474067112499999E9,
            "n" : 2,
            "max" : 1.1030855E7,
            "min" : 1.090067E7,
            "sum" : 2.1931525E7,
            "standardDeviation" : 92054.69630877068
          }, {
            "mean" : 1.07383485E7,
            "variance" : 1.7928670805000002E9,
            "n" : 2,
            "max" : 1.0768289E7,
            "min" : 1.0708408E7,
            "sum" : 2.1476697E7,
            "standardDeviation" : 42342.261164231655
          }, {
            "mean" : 1.0723628E7,
            "variance" : 3.3355988399999994E8,
            "n" : 3,
            "max" : 1.074471E7,
            "min" : 1.0712616E7,
            "sum" : 3.2170884E7,
            "standardDeviation" : 18263.621875192224
          }, {
            "mean" : 1.0969738E7,
            "variance" : 3.683386536200001E10,
            "n" : 2,
            "max" : 1.1105447E7,
            "min" : 1.0834029E7,
            "sum" : 2.1939476E7,
            "standardDeviation" : 191921.50833609037
          }, {
            "mean" : 1.0920541E7,
            "variance" : 3.1905669620000005E9,
            "n" : 2,
            "max" : 1.0960482E7,
            "min" : 1.08806E7,
            "sum" : 2.1841082E7,
            "standardDeviation" : 56485.10389474379
          }, {
            "mean" : 1.08912695E7,
            "variance" : 5.3343087605E9,
            "n" : 2,
            "max" : 1.0942914E7,
            "min" : 1.0839625E7,
            "sum" : 2.1782539E7,
            "standardDeviation" : 73036.3523219773
          }, {
            "mean" : 1.0832377E7,
            "variance" : 1.1896887729999998E9,
            "n" : 3,
            "max" : 1.0862413E7,
            "min" : 1.0794708E7,
            "sum" : 3.2497131E7,
            "standardDeviation" : 34491.865316332194
          }, {
            "mean" : 1.07760155E7,
            "variance" : 2.1806028612500004E10,
            "n" : 2,
            "max" : 1.0880433E7,
            "min" : 1.0671598E7,
            "sum" : 2.1552031E7,
            "standardDeviation" : 147668.64464909266
          }, {
            "mean" : 1.06924705E7,
            "variance" : 3.01320845E7,
            "n" : 2,
            "max" : 1.0696352E7,
            "min" : 1.0688589E7,
            "sum" : 2.1384941E7,
            "standardDeviation" : 5489.2699423511685
          }, {
            "mean" : 1.0751598E7,
            "variance" : 0.0,
            "n" : 1,
            "max" : 1.0751598E7,
            "min" : 1.0751598E7,
            "sum" : 1.0751598E7,
            "standardDeviation" : 0.0
          } ],
          "19" : [ {
            "mean" : 1.2213834E7,
            "variance" : 1.570415324023E12,
            "n" : 2,
            "max" : 1.3552863E7,
            "min" : 1.1069276E7,
            "sum" : 2.4427668E7,
            "standardDeviation" : 1253162.1299827888
          }, {
            "mean" : 1.0848705E7,
            "variance" : 6.32043458E8,
            "n" : 2,
            "max" : 1.0866482E7,
            "min" : 1.0830928E7,
            "sum" : 2.169741E7,
            "standardDeviation" : 25140.47449830651
          }, {
            "mean" : 1.1088076E7,
            "variance" : 6.625156049999999E9,
            "n" : 2,
            "max" : 1.1145631E7,
            "min" : 1.1030521E7,
            "sum" : 2.2176152E7,
            "standardDeviation" : 81395.06158238348
          }, {
            "mean" : 1.0936136E7,
            "variance" : 5.6310241E7,
            "n" : 3,
            "max" : 1.094168E7,
            "min" : 1.0927597E7,
            "sum" : 3.2808408E7,
            "standardDeviation" : 7504.014991989288
          }, {
            "mean" : 1.0919097E7,
            "variance" : 9.752178481999998E9,
            "n" : 2,
            "max" : 1.0988926E7,
            "min" : 1.0849268E7,
            "sum" : 2.1838194E7,
            "standardDeviation" : 98753.11884695085
          }, {
            "mean" : 1.08638125E7,
            "variance" : 1.8887710440499996E10,
            "n" : 2,
            "max" : 1.0960992E7,
            "min" : 1.0766633E7,
            "sum" : 2.1727625E7,
            "standardDeviation" : 137432.56688463618
          }, {
            "mean" : 1.0879136E7,
            "variance" : 8.611706322E9,
            "n" : 2,
            "max" : 1.0944755E7,
            "min" : 1.0813517E7,
            "sum" : 2.1758272E7,
            "standardDeviation" : 92799.27974936012
          }, {
            "mean" : 1.0861325333333334E7,
            "variance" : 1.3220552816333332E10,
            "n" : 3,
            "max" : 1.0979905E7,
            "min" : 1.0750318E7,
            "sum" : 3.2583976E7,
            "standardDeviation" : 114980.66279306852
          }, {
            "mean" : 1.07182875E7,
            "variance" : 2082840.4999999998,
            "n" : 2,
            "max" : 1.0719308E7,
            "min" : 1.0717267E7,
            "sum" : 2.1436575E7,
            "standardDeviation" : 1443.2049404017434
          }, {
            "mean" : 1.0781755E7,
            "variance" : 1.4726712199999997E8,
            "n" : 2,
            "max" : 1.0790336E7,
            "min" : 1.0773174E7,
            "sum" : 2.156351E7,
            "standardDeviation" : 12135.366578723528
          }, {
            "mean" : 1.07656795E7,
            "variance" : 1.5931319044999998E9,
            "n" : 2,
            "max" : 1.0793903E7,
            "min" : 1.0737456E7,
            "sum" : 2.1531359E7,
            "standardDeviation" : 39914.056477637045
          }, {
            "mean" : 1.0806544E7,
            "variance" : 0.0,
            "n" : 1,
            "max" : 1.0806544E7,
            "min" : 1.0806544E7,
            "sum" : 1.0806544E7,
            "standardDeviation" : 0.0
          } ],
          "20" : [ {
            "mean" : 1.2508593333333334E7,
            "variance" : 1.2317531058063337E12,
            "n" : 2,
            "max" : 1.3763236E7,
            "min" : 1.1655093E7,
            "sum" : 2.5017186666666668E7,
            "standardDeviation" : 1109843.7303541133
          }, {
            "mean" : 1.1540899E7,
            "variance" : 4.1032015783199994E11,
            "n" : 2,
            "max" : 1.1993845E7,
            "min" : 1.1087953E7,
            "sum" : 2.3081798E7,
            "standardDeviation" : 640562.3762226439
          }, {
            "mean" : 1.1044283E7,
            "variance" : 1.79210312E10,
            "n" : 2,
            "max" : 1.1138943E7,
            "min" : 1.0949623E7,
            "sum" : 2.2088566E7,
            "standardDeviation" : 133869.45581423718
          }, {
            "mean" : 1.0920876333333334E7,
            "variance" : 7.404898083333334E8,
            "n" : 3,
            "max" : 1.0938468E7,
            "min" : 1.0889533E7,
            "sum" : 3.2762629E7,
            "standardDeviation" : 27211.942384426242
          }, {
            "mean" : 1.1047601E7,
            "variance" : 291848.00000000006,
            "n" : 2,
            "max" : 1.1047983E7,
            "min" : 1.1047219E7,
            "sum" : 2.2095202E7,
            "standardDeviation" : 540.2295808265224
          }, {
            "mean" : 1.09248325E7,
            "variance" : 4.8394716049999994E8,
            "n" : 2,
            "max" : 1.0940388E7,
            "min" : 1.0909277E7,
            "sum" : 2.1849665E7,
            "standardDeviation" : 21998.79906949468
          }, {
            "mean" : 1.0887843666666666E7,
            "variance" : 1.4612415303333333E9,
            "n" : 3,
            "max" : 1.093143E7,
            "min" : 1.0860016E7,
            "sum" : 3.2663531E7,
            "standardDeviation" : 38226.189063694714
          }, {
            "mean" : 1.10139065E7,
            "variance" : 4.1739643444999995E9,
            "n" : 2,
            "max" : 1.105959E7,
            "min" : 1.0968223E7,
            "sum" : 2.2027813E7,
            "standardDeviation" : 64606.225276671285
          }, {
            "mean" : 1.7509732E7,
            "variance" : 8.7730218418952E13,
            "n" : 2,
            "max" : 2.4132806E7,
            "min" : 1.0886658E7,
            "sum" : 3.5019464E7,
            "standardDeviation" : 9366441.075400624
          }, {
            "mean" : 1.0974951666666666E7,
            "variance" : 1.3923593982333334E10,
            "n" : 3,
            "max" : 1.1082085E7,
            "min" : 1.0848478E7,
            "sum" : 3.2924855E7,
            "standardDeviation" : 117998.27957361638
          }, {
            "mean" : 1.0911051E7,
            "variance" : 6.4836005E8,
            "n" : 2,
            "max" : 1.0929056E7,
            "min" : 1.0893046E7,
            "sum" : 2.1822102E7,
            "standardDeviation" : 25462.915190527576
          } ],
          "21" : [ {
            "mean" : 1.2539092333333334E7,
            "variance" : 1.3314850915003335E12,
            "n" : 2,
            "max" : 1.3779402E7,
            "min" : 1.1497382E7,
            "sum" : 2.5078184666666668E7,
            "standardDeviation" : 1153899.9486525396
          }, {
            "mean" : 1.11030445E7,
            "variance" : 2.1524016605E9,
            "n" : 2,
            "max" : 1.113585E7,
            "min" : 1.1070239E7,
            "sum" : 2.2206089E7,
            "standardDeviation" : 46393.98302043057
          }, {
            "mean" : 1.11462905E7,
            "variance" : 7.608228012500001E9,
            "n" : 2,
            "max" : 1.1207968E7,
            "min" : 1.1084613E7,
            "sum" : 2.2292581E7,
            "standardDeviation" : 87225.15699326657
          }, {
            "mean" : 1.08055505E7,
            "variance" : 2.878800125E8,
            "n" : 2,
            "max" : 1.0817548E7,
            "min" : 1.0793553E7,
            "sum" : 2.1611101E7,
            "standardDeviation" : 16967.027214571208
          }, {
            "mean" : 1.0890508666666666E7,
            "variance" : 9.059748906333334E9,
            "n" : 3,
            "max" : 1.0999873E7,
            "min" : 1.0826375E7,
            "sum" : 3.2671526E7,
            "standardDeviation" : 95182.7132746978
          }, {
            "mean" : 1.0837896E7,
            "variance" : 6.9303645E8,
            "n" : 2,
            "max" : 1.0856511E7,
            "min" : 1.0819281E7,
            "sum" : 2.1675792E7,
            "standardDeviation" : 26325.585463575164
          }, {
            "mean" : 1.08808755E7,
            "variance" : 4.4381142450000006E8,
            "n" : 2,
            "max" : 1.0895772E7,
            "min" : 1.0865979E7,
            "sum" : 2.1761751E7,
            "standardDeviation" : 21066.83233189081
          }, {
            "mean" : 1.10030885E7,
            "variance" : 1.7736166140499996E10,
            "n" : 2,
            "max" : 1.1097259E7,
            "min" : 1.0908918E7,
            "sum" : 2.2006177E7,
            "standardDeviation" : 133177.19827545554
          }, {
            "mean" : 1.0820611E7,
            "variance" : 1.4394293792E10,
            "n" : 2,
            "max" : 1.0905447E7,
            "min" : 1.0735775E7,
            "sum" : 2.1641222E7,
            "standardDeviation" : 119976.2217774839
          }, {
            "mean" : 1.6695315E7,
            "variance" : 9.859769835032502E13,
            "n" : 3,
            "max" : 2.816106E7,
            "min" : 1.094771E7,
            "sum" : 5.0085945E7,
            "standardDeviation" : 9929637.372549161
          }, {
            "mean" : 1.10731965E7,
            "variance" : 3.2080191700499996E10,
            "n" : 2,
            "max" : 1.1199846E7,
            "min" : 1.0946547E7,
            "sum" : 2.2146393E7,
            "standardDeviation" : 179109.4405677713
          }, {
            "mean" : 1.1177954E7,
            "variance" : 0.0,
            "n" : 1,
            "max" : 1.1177954E7,
            "min" : 1.1177954E7,
            "sum" : 1.1177954E7,
            "standardDeviation" : 0.0
          } ],
          "22" : [ {
            "mean" : 1.18272485E7,
            "variance" : 2.2268268272449997E11,
            "n" : 2,
            "max" : 1.2160927E7,
            "min" : 1.149357E7,
            "sum" : 2.3654497E7,
            "standardDeviation" : 471892.6601723108
          }, {
            "mean" : 1.10312705E7,
            "variance" : 626080.5,
            "n" : 2,
            "max" : 1.103183E7,
            "min" : 1.1030711E7,
            "sum" : 2.2062541E7,
            "standardDeviation" : 791.2524881477467
          }, {
            "mean" : 1.1226092E7,
            "variance" : 6.360115328000001E9,
            "n" : 2,
            "max" : 1.1282484E7,
            "min" : 1.11697E7,
            "sum" : 2.2452184E7,
            "standardDeviation" : 79750.33120934358
          }, {
            "mean" : 1.1069182E7,
            "variance" : 1.9781671E7,
            "n" : 3,
            "max" : 1.1072732E7,
            "min" : 1.1064193E7,
            "sum" : 3.3207546E7,
            "standardDeviation" : 4447.65904718426
          }, {
            "mean" : 1.1043811E7,
            "variance" : 1.819975112E9,
            "n" : 2,
            "max" : 1.1073977E7,
            "min" : 1.1013645E7,
            "sum" : 2.2087622E7,
            "standardDeviation" : 42661.166322546786
          }, {
            "mean" : 1.09787745E7,
            "variance" : 1.6319755804999998E9,
            "n" : 2,
            "max" : 1.100734E7,
            "min" : 1.0950209E7,
            "sum" : 2.1957549E7,
            "standardDeviation" : 40397.717515968645
          }, {
            "mean" : 1.0981287666666666E7,
            "variance" : 4.4372906633333343E8,
            "n" : 3,
            "max" : 1.1003308E7,
            "min" : 1.096133E7,
            "sum" : 3.2943863E7,
            "standardDeviation" : 21064.877553248047
          }, {
            "mean" : 1.09454195E7,
            "variance" : 4.621738224500001E9,
            "n" : 2,
            "max" : 1.0993491E7,
            "min" : 1.0897348E7,
            "sum" : 2.1890839E7,
            "standardDeviation" : 67983.36726361825
          }, {
            "mean" : 1.09386575E7,
            "variance" : 6.399085320499999E9,
            "n" : 2,
            "max" : 1.0995222E7,
            "min" : 1.0882093E7,
            "sum" : 2.1877315E7,
            "standardDeviation" : 79994.28304885293
          }, {
            "mean" : 1.1089817E7,
            "variance" : 3.840034248E9,
            "n" : 2,
            "max" : 1.1133635E7,
            "min" : 1.1045999E7,
            "sum" : 2.2179634E7,
            "standardDeviation" : 61968.00987606428
          }, {
            "mean" : 1.1049029333333334E7,
            "variance" : 8.500326982333334E9,
            "n" : 3,
            "max" : 1.1152611E7,
            "min" : 1.0975944E7,
            "sum" : 3.3147088E7,
            "standardDeviation" : 92197.21786655676
          } ],
          "23" : [ {
            "mean" : 1.16842875E7,
            "variance" : 2.322381628125E11,
            "n" : 2,
            "max" : 1.202505E7,
            "min" : 1.1343525E7,
            "sum" : 2.3368575E7,
            "standardDeviation" : 481910.9490481618
          }, {
            "mean" : 1.1057421E7,
            "variance" : 2.1573799200000003E8,
            "n" : 2,
            "max" : 1.1067807E7,
            "min" : 1.1047035E7,
            "sum" : 2.2114842E7,
            "standardDeviation" : 14688.022058806966
          }, {
            "mean" : 1.11677875E7,
            "variance" : 1.9244187605000002E9,
            "n" : 2,
            "max" : 1.1198807E7,
            "min" : 1.1136768E7,
            "sum" : 2.2335575E7,
            "standardDeviation" : 43868.197598032224
          }, {
            "mean" : 1.0880132E7,
            "variance" : 1.3711024164E10,
            "n" : 3,
            "max" : 1.0962562E7,
            "min" : 1.07461E7,
            "sum" : 3.2640396E7,
            "standardDeviation" : 117094.08253195377
          }, {
            "mean" : 1.09139975E7,
            "variance" : 4.1686667405E9,
            "n" : 2,
            "max" : 1.0959652E7,
            "min" : 1.0868343E7,
            "sum" : 2.1827995E7,
            "standardDeviation" : 64565.21308336247
          }, {
            "mean" : 1.0763718E7,
            "variance" : 8024017.999999999,
            "n" : 2,
            "max" : 1.0765721E7,
            "min" : 1.0761715E7,
            "sum" : 2.1527436E7,
            "standardDeviation" : 2832.6697654333093
          }, {
            "mean" : 1.0869134666666666E7,
            "variance" : 3.348962843333334E8,
            "n" : 3,
            "max" : 1.0880034E7,
            "min" : 1.0848007E7,
            "sum" : 3.2607404E7,
            "standardDeviation" : 18300.17170229103
          }, {
            "mean" : 1.0931287E7,
            "variance" : 8.568972019999999E8,
            "n" : 2,
            "max" : 1.0951986E7,
            "min" : 1.0910588E7,
            "sum" : 2.1862574E7,
            "standardDeviation" : 29272.806527560693
          }, {
            "mean" : 1.0854481E7,
            "variance" : 6.929234641999999E9,
            "n" : 2,
            "max" : 1.0913342E7,
            "min" : 1.079562E7,
            "sum" : 2.1708962E7,
            "standardDeviation" : 83242.02449484274
          }, {
            "mean" : 1.0919463333333334E7,
            "variance" : 3.0888183633333325E8,
            "n" : 3,
            "max" : 1.0929828E7,
            "min" : 1.0899171E7,
            "sum" : 3.275839E7,
            "standardDeviation" : 17575.034461796462
          }, {
            "mean" : 1.09117895E7,
            "variance" : 2.6472270845E9,
            "n" : 2,
            "max" : 1.0948171E7,
            "min" : 1.0875408E7,
            "sum" : 2.1823579E7,
            "standardDeviation" : 51451.21071947676
          } ],
          "24" : [ {
            "mean" : 1.17658405E7,
            "variance" : 3.215450605205E11,
            "n" : 2,
            "max" : 1.2166805E7,
            "min" : 1.1364876E7,
            "sum" : 2.3531681E7,
            "standardDeviation" : 567049.4339301469
          }, {
            "mean" : 1.0953487E7,
            "variance" : 4.118507282E9,
            "n" : 2,
            "max" : 1.0998866E7,
            "min" : 1.0908108E7,
            "sum" : 2.1906974E7,
            "standardDeviation" : 64175.59724692868
          }, {
            "mean" : 1.09554175E7,
            "variance" : 1.8749850844999998E9,
            "n" : 2,
            "max" : 1.0986036E7,
            "min" : 1.0924799E7,
            "sum" : 2.1910835E7,
            "standardDeviation" : 43301.09795952061
          }, {
            "mean" : 1.0678311E7,
            "variance" : 2.8570638700000006E8,
            "n" : 3,
            "max" : 1.069479E7,
            "min" : 1.0661014E7,
            "sum" : 3.2034933E7,
            "standardDeviation" : 16902.851445835997
          }, {
            "mean" : 1.0716026E7,
            "variance" : 2.7930188552E10,
            "n" : 2,
            "max" : 1.08342E7,
            "min" : 1.0597852E7,
            "sum" : 2.1432052E7,
            "standardDeviation" : 167123.27351987813
          }, {
            "mean" : 1.1008442E7,
            "variance" : 8.988991362E9,
            "n" : 2,
            "max" : 1.1075483E7,
            "min" : 1.0941401E7,
            "sum" : 2.2016884E7,
            "standardDeviation" : 94810.29143505466
          }, {
            "mean" : 1.0810746666666666E7,
            "variance" : 2.164548542333333E9,
            "n" : 3,
            "max" : 1.0846865E7,
            "min" : 1.0758247E7,
            "sum" : 3.243224E7,
            "standardDeviation" : 46524.70894410123
          }, {
            "mean" : 1.0851257E7,
            "variance" : 2.028335432E9,
            "n" : 2,
            "max" : 1.0883103E7,
            "min" : 1.0819411E7,
            "sum" : 2.1702514E7,
            "standardDeviation" : 45037.045107333586
          }, {
            "mean" : 1.0917561E7,
            "variance" : 6.141422792E9,
            "n" : 2,
            "max" : 1.0972975E7,
            "min" : 1.0862147E7,
            "sum" : 2.1835122E7,
            "standardDeviation" : 78367.23034534269
          }, {
            "mean" : 1.07974855E7,
            "variance" : 1.463931605E8,
            "n" : 2,
            "max" : 1.0806041E7,
            "min" : 1.078893E7,
            "sum" : 2.1594971E7,
            "standardDeviation" : 12099.304132883015
          }, {
            "mean" : 1.0659085333333334E7,
            "variance" : 1.5527130463333333E9,
            "n" : 3,
            "max" : 1.0698024E7,
            "min" : 1.0619231E7,
            "sum" : 3.1977256E7,
            "standardDeviation" : 39404.48002871416
          } ],
          "25" : [ {
            "mean" : 1.233771E7,
            "variance" : 1.449711077527E12,
            "n" : 2,
            "max" : 1.3664668E7,
            "min" : 1.1314929E7,
            "sum" : 2.467542E7,
            "standardDeviation" : 1204039.4833754415
          }, {
            "mean" : 1.06727195E7,
            "variance" : 1.81777151205E10,
            "n" : 2,
            "max" : 1.0768055E7,
            "min" : 1.0577384E7,
            "sum" : 2.1345439E7,
            "standardDeviation" : 134824.7570756202
          }, {
            "mean" : 1.71460425E7,
            "variance" : 8.292663191520448E13,
            "n" : 2,
            "max" : 2.3585244E7,
            "min" : 1.0706841E7,
            "sum" : 3.4292085E7,
            "standardDeviation" : 9106406.092153177
          }, {
            "mean" : 1.0522739333333334E7,
            "variance" : 3.381315237333333E9,
            "n" : 3,
            "max" : 1.0575354E7,
            "min" : 1.0460306E7,
            "sum" : 3.1568218E7,
            "standardDeviation" : 58149.07769976522
          }, {
            "mean" : 1.05047615E7,
            "variance" : 3.7764133245000005E9,
            "n" : 2,
            "max" : 1.0548215E7,
            "min" : 1.0461308E7,
            "sum" : 2.1009523E7,
            "standardDeviation" : 61452.52903257929
          }, {
            "mean" : 1.04600925E7,
            "variance" : 2.36603205E7,
            "n" : 2,
            "max" : 1.0463532E7,
            "min" : 1.0456653E7,
            "sum" : 2.0920185E7,
            "standardDeviation" : 4864.1875477822605
          }, {
            "mean" : 1.69670775E7,
            "variance" : 8.335115662781252E13,
            "n" : 2,
            "max" : 2.342274E7,
            "min" : 1.0511415E7,
            "sum" : 3.3934155E7,
            "standardDeviation" : 9129685.461603401
          }, {
            "mean" : 1.4798633666666666E7,
            "variance" : 5.4320831626386336E13,
            "n" : 3,
            "max" : 2.330904E7,
            "min" : 1.0519563E7,
            "sum" : 4.4395901E7,
            "standardDeviation" : 7370266.726950005
          }, {
            "mean" : 1.05471255E7,
            "variance" : 2.5110658445E9,
            "n" : 2,
            "max" : 1.0582559E7,
            "min" : 1.0511692E7,
            "sum" : 2.1094251E7,
            "standardDeviation" : 50110.536262347065
          }, {
            "mean" : 1.0557318E7,
            "variance" : 1.9110125E8,
            "n" : 2,
            "max" : 1.0567093E7,
            "min" : 1.0547543E7,
            "sum" : 2.1114636E7,
            "standardDeviation" : 13823.937572197005
          }, {
            "mean" : 1.0538566333333334E7,
            "variance" : 7.781496402333332E9,
            "n" : 3,
            "max" : 1.0603856E7,
            "min" : 1.0438213E7,
            "sum" : 3.1615699E7,
            "standardDeviation" : 88212.79046903194
          } ],
          "26" : [ {
            "mean" : 1.12734475E7,
            "variance" : 4.2195431801249994E11,
            "n" : 2,
            "max" : 1.173277E7,
            "min" : 1.0814125E7,
            "sum" : 2.2546895E7,
            "standardDeviation" : 649580.1090031159
          }, {
            "mean" : 1.0454394E7,
            "variance" : 6.434719380000001E8,
            "n" : 2,
            "max" : 1.0472331E7,
            "min" : 1.0436457E7,
            "sum" : 2.0908788E7,
            "standardDeviation" : 25366.748668286207
          }, {
            "mean" : 1.0793675E7,
            "variance" : 8.325402722E9,
            "n" : 2,
            "max" : 1.0858194E7,
            "min" : 1.0729156E7,
            "sum" : 2.158735E7,
            "standardDeviation" : 91243.64483074972
          }, {
            "mean" : 1.0597697333333334E7,
            "variance" : 6.017242885333334E9,
            "n" : 3,
            "max" : 1.0687252E7,
            "min" : 1.0551432E7,
            "sum" : 3.1793092E7,
            "standardDeviation" : 77570.88941950668
          }, {
            "mean" : 1.05693185E7,
            "variance" : 3.1077939605E9,
            "n" : 2,
            "max" : 1.0608738E7,
            "min" : 1.0529899E7,
            "sum" : 2.1138637E7,
            "standardDeviation" : 55747.59152196622
          }, {
            "mean" : 1.0531351E7,
            "variance" : 1.52880098E10,
            "n" : 2,
            "max" : 1.0618781E7,
            "min" : 1.0443921E7,
            "sum" : 2.1062702E7,
            "standardDeviation" : 123644.6917582797
          }, {
            "mean" : 1.0486231333333334E7,
            "variance" : 1.9156810830333332E10,
            "n" : 3,
            "max" : 1.0638725E7,
            "min" : 1.0368559E7,
            "sum" : 3.1458694E7,
            "standardDeviation" : 138408.13137360584
          }, {
            "mean" : 1.05521865E7,
            "variance" : 9.801378124999999E8,
            "n" : 2,
            "max" : 1.0574324E7,
            "min" : 1.0530049E7,
            "sum" : 2.1104373E7,
            "standardDeviation" : 31307.15273703439
          }, {
            "mean" : 1.06426025E7,
            "variance" : 9.5879397645E9,
            "n" : 2,
            "max" : 1.0711841E7,
            "min" : 1.0573364E7,
            "sum" : 2.1285205E7,
            "standardDeviation" : 97918.02573836954
          }, {
            "mean" : 1.0629919666666666E7,
            "variance" : 7.388111409333333E9,
            "n" : 3,
            "max" : 1.0696027E7,
            "min" : 1.0532753E7,
            "sum" : 3.1889759E7,
            "standardDeviation" : 85954.12386461358
          }, {
            "mean" : 1.0726624E7,
            "variance" : 3.4594562E7,
            "n" : 2,
            "max" : 1.0730783E7,
            "min" : 1.0722465E7,
            "sum" : 2.1453248E7,
            "standardDeviation" : 5881.714205909702
          } ],
          "27" : [ {
            "mean" : 1.2026684E7,
            "variance" : 2.4402098E11,
            "n" : 2,
            "max" : 1.2375984E7,
            "min" : 1.1677384E7,
            "sum" : 2.4053368E7,
            "standardDeviation" : 493984.7973369221
          }, {
            "mean" : 1.10252865E7,
            "variance" : 9.322130204999999E8,
            "n" : 2,
            "max" : 1.1046876E7,
            "min" : 1.1003697E7,
            "sum" : 2.2050573E7,
            "standardDeviation" : 30532.163704853934
          }, {
            "mean" : 1.1151971E7,
            "variance" : 1.4910572672E10,
            "n" : 2,
            "max" : 1.1238315E7,
            "min" : 1.1065627E7,
            "sum" : 2.2303942E7,
            "standardDeviation" : 122108.85582954252
          }, {
            "mean" : 1.5164650666666666E7,
            "variance" : 5.329281041643233E13,
            "n" : 3,
            "max" : 2.3593589E7,
            "min" : 1.0863237E7,
            "sum" : 4.5493952E7,
            "standardDeviation" : 7300192.491738305
          }, {
            "mean" : 1.08688445E7,
            "variance" : 1.27579545845E10,
            "n" : 2,
            "max" : 1.0948713E7,
            "min" : 1.0788976E7,
            "sum" : 2.1737689E7,
            "standardDeviation" : 112951.11590639554
          }, {
            "mean" : 1.0828192E7,
            "variance" : 1.4217701192E10,
            "n" : 2,
            "max" : 1.0912506E7,
            "min" : 1.0743878E7,
            "sum" : 2.1656384E7,
            "standardDeviation" : 119238.00229792514
          }, {
            "mean" : 1.0786083E7,
            "variance" : 4.417812002000001E9,
            "n" : 2,
            "max" : 1.0833082E7,
            "min" : 1.0739084E7,
            "sum" : 2.1572166E7,
            "standardDeviation" : 66466.6232179731
          }, {
            "mean" : 1.0722102333333334E7,
            "variance" : 2.354001409333333E9,
            "n" : 3,
            "max" : 1.0768783E7,
            "min" : 1.0671935E7,
            "sum" : 3.2166307E7,
            "standardDeviation" : 48518.052406638635
          }, {
            "mean" : 1.0889196E7,
            "variance" : 5.432988800000001E7,
            "n" : 2,
            "max" : 1.0894408E7,
            "min" : 1.0883984E7,
            "sum" : 2.1778392E7,
            "standardDeviation" : 7370.881087088572
          }, {
            "mean" : 1.0938557E7,
            "variance" : 1.7810899280000002E9,
            "n" : 2,
            "max" : 1.0968399E7,
            "min" : 1.0908715E7,
            "sum" : 2.1877114E7,
            "standardDeviation" : 42202.961128337905
          }, {
            "mean" : 1.1143192333333334E7,
            "variance" : 3.322792795853333E11,
            "n" : 3,
            "max" : 1.1807871E7,
            "min" : 1.0780341E7,
            "sum" : 3.3429577E7,
            "standardDeviation" : 576436.70908898
          } ],
          "28" : [ {
            "mean" : 1.1983320333333334E7,
            "variance" : 1.2247934420523335E12,
            "n" : 2,
            "max" : 1.3184202E7,
            "min" : 1.1004454E7,
            "sum" : 2.3966640666666668E7,
            "standardDeviation" : 1106703.8637559433
          }, {
            "mean" : 1.07656035E7,
            "variance" : 4.8514205045E9,
            "n" : 2,
            "max" : 1.0814855E7,
            "min" : 1.0716352E7,
            "sum" : 2.1531207E7,
            "standardDeviation" : 69652.13926721849
          }, {
            "mean" : 1.07480145E7,
            "variance" : 1.19504254005E10,
            "n" : 2,
            "max" : 1.0825314E7,
            "min" : 1.0670715E7,
            "sum" : 2.1496029E7,
            "standardDeviation" : 109318.00126465906
          }, {
            "mean" : 1.0512227333333334E7,
            "variance" : 1.3230494177333336E10,
            "n" : 3,
            "max" : 1.0644512E7,
            "min" : 1.0435786E7,
            "sum" : 3.1536682E7,
            "standardDeviation" : 115023.8852470796
          }, {
            "mean" : 1.06095495E7,
            "variance" : 4.09331855645E10,
            "n" : 2,
            "max" : 1.0752611E7,
            "min" : 1.0466488E7,
            "sum" : 2.1219099E7,
            "standardDeviation" : 202319.51355343853
          }, {
            "mean" : 1.0458792E7,
            "variance" : 2.573744258E9,
            "n" : 2,
            "max" : 1.0494665E7,
            "min" : 1.0422919E7,
            "sum" : 2.0917584E7,
            "standardDeviation" : 50732.08312301004
          }, {
            "mean" : 1.0479303666666666E7,
            "variance" : 3.1000415923333335E9,
            "n" : 3,
            "max" : 1.054359E7,
            "min" : 1.0446459E7,
            "sum" : 3.1437911E7,
            "standardDeviation" : 55678.01713722691
          }, {
            "mean" : 1.0471733E7,
            "variance" : 7.92099602E8,
            "n" : 2,
            "max" : 1.0491634E7,
            "min" : 1.0451832E7,
            "sum" : 2.0943466E7,
            "standardDeviation" : 28144.264104786966
          }, {
            "mean" : 1.04967185E7,
            "variance" : 2.6729032049999997E8,
            "n" : 2,
            "max" : 1.0508279E7,
            "min" : 1.0485158E7,
            "sum" : 2.0993437E7,
            "standardDeviation" : 16349.015887814165
          }, {
            "mean" : 1.0553329E7,
            "variance" : 5361156.999999999,
            "n" : 3,
            "max" : 1.0555478E7,
            "min" : 1.0550877E7,
            "sum" : 3.1659987E7,
            "standardDeviation" : 2315.417241017264
          }, {
            "mean" : 1.04570185E7,
            "variance" : 4.9553999045E9,
            "n" : 2,
            "max" : 1.0506795E7,
            "min" : 1.0407242E7,
            "sum" : 2.0914037E7,
            "standardDeviation" : 70394.60138746437
          } ],
          "29" : [ {
            "mean" : 1.1576422E7,
            "variance" : 3.18805916018E11,
            "n" : 2,
            "max" : 1.1975675E7,
            "min" : 1.1177169E7,
            "sum" : 2.3152844E7,
            "standardDeviation" : 564629.0074181453
          }, {
            "mean" : 1.0921662E7,
            "variance" : 6.044721152E9,
            "n" : 2,
            "max" : 1.0976638E7,
            "min" : 1.0866686E7,
            "sum" : 2.1843324E7,
            "standardDeviation" : 77747.80480502328
          }, {
            "mean" : 1.1035212E7,
            "variance" : 3.893854752E9,
            "n" : 2,
            "max" : 1.1079336E7,
            "min" : 1.0991088E7,
            "sum" : 2.2070424E7,
            "standardDeviation" : 62400.75922615045
          }, {
            "mean" : 1.0751785333333334E7,
            "variance" : 9.775496643333331E8,
            "n" : 3,
            "max" : 1.0781678E7,
            "min" : 1.0719307E7,
            "sum" : 3.2255356E7,
            "standardDeviation" : 31265.790639824434
          }, {
            "mean" : 1.07581565E7,
            "variance" : 1.82173963205E10,
            "n" : 2,
            "max" : 1.0853596E7,
            "min" : 1.0662717E7,
            "sum" : 2.1516313E7,
            "standardDeviation" : 134971.835286107
          }, {
            "mean" : 1.06447145E7,
            "variance" : 1.8364830125000002E9,
            "n" : 2,
            "max" : 1.0675017E7,
            "min" : 1.0614412E7,
            "sum" : 2.1289429E7,
            "standardDeviation" : 42854.206473810715
          }, {
            "mean" : 1.0699195333333334E7,
            "variance" : 3.8089343404333336E10,
            "n" : 3,
            "max" : 1.0889336E7,
            "min" : 1.0499367E7,
            "sum" : 3.2097586E7,
            "standardDeviation" : 195164.91335363878
          }, {
            "mean" : 1.06667205E7,
            "variance" : 1.1472529005E9,
            "n" : 2,
            "max" : 1.0690671E7,
            "min" : 1.064277E7,
            "sum" : 2.1333441E7,
            "standardDeviation" : 33871.12192561681
          }, {
            "mean" : 1.05867785E7,
            "variance" : 5.440183740499999E9,
            "n" : 2,
            "max" : 1.0638933E7,
            "min" : 1.0534624E7,
            "sum" : 2.1173557E7,
            "standardDeviation" : 73757.60123878758
          }, {
            "mean" : 1.0689016E7,
            "variance" : 6.927673189E9,
            "n" : 3,
            "max" : 1.0764369E7,
            "min" : 1.0599676E7,
            "sum" : 3.2067048E7,
            "standardDeviation" : 83232.64497178976
          }, {
            "mean" : 1.0679413E7,
            "variance" : 2.7736352E9,
            "n" : 2,
            "max" : 1.0716653E7,
            "min" : 1.0642173E7,
            "sum" : 2.1358826E7,
            "standardDeviation" : 52665.31306277406
          } ]
        }
      },
      "children" : [ {
        "call" : "org.gradoop.csv.io.reader.CSVReader#initializeAndReadFirstLine",
        "kiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine(java.lang.String)",
        "otherKiekerPattern" : "private java.util.List org.gradoop.csv.io.reader.CSVReader.setVList()",
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#initializeAndReadFirstLine",
        "key" : "org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine_String",
        "otherKey" : "org.gradoop.csv.io.reader.CSVReader.setVList_",
        "parent" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
        "color" : "#00FF00",
        "statistic" : {
          "meanOld" : 3.0403720226666667E7,
          "meanCurrent" : 262982.9971111111,
          "deviationOld" : 1263241.711870664,
          "deviationCurrent" : 16593.661139904125,
          "vms" : 30,
          "callsOld" : 150,
          "calls" : 750,
          "tvalue" : 130.6744182646787,
          "change" : true
        },
        "hasSourceChange" : true,
        "state" : "FASTER",
        "inVMDeviationPredecessor" : 1232369.2990750342,
        "inVMDeviation" : 264954.32283271884,
        "ess" : 3,
        "values" : [ 280505.21142857143, 239324.45333333337, 260340.9142857143, 250736.9, 243523.62666666668, 252367.14666666667, 242762.63333333336, 265161.26285714284, 252239.49333333335, 270795.2914285714, 255631.28666666665, 262380.2857142857, 273083.2514285714, 274203.6342857143, 261770.73142857142, 281167.4914285714, 248358.69333333333, 254368.13142857142, 250833.91333333336, 244767.79428571428, 247125.95333333337, 284482.89714285714, 269645.5085714286, 258437.17142857143, 312520.32666666666, 261812.61333333337, 294349.3942857143, 254201.10857142857, 265604.4733333334, 276988.32 ],
        "valuesPredecessor" : [ 2.95055314E7, 3.03172692E7, 3.1728655E7, 3.00101474E7, 2.96139018E7, 2.97941558E7, 3.00058306E7, 3.25448106E7, 3.05448364E7, 3.02883438E7, 3.03398464E7, 3.01448978E7, 2.9759914E7, 2.9634199E7, 2.9910549E7, 3.00423456E7, 2.95029642E7, 3.02919814E7, 2.99242772E7, 2.98451456E7, 3.2840987E7, 3.34714952E7, 3.0188446E7, 2.99518066E7, 2.9958926E7, 3.4203489E7, 2.91127882E7, 3.02337144E7, 2.894134E7, 2.94590122E7 ],
        "vmValues" : {
          "values" : {
            "0" : [ {
              "mean" : 583668.1428571428,
              "variance" : 4.041969905654761E11,
              "n" : 2,
              "max" : 1966323.0,
              "min" : 41388.0,
              "sum" : 1167336.2857142857,
              "standardDeviation" : 635764.8862319121
            }, {
              "mean" : 252701.88888888888,
              "variance" : 3.091786693861112E9,
              "n" : 9,
              "max" : 367309.0,
              "min" : 210104.0,
              "sum" : 2274317.0,
              "standardDeviation" : 55603.837042609855
            }, {
              "mean" : 254085.0,
              "variance" : 1.8265130774285715E9,
              "n" : 8,
              "max" : 337601.0,
              "min" : 206574.0,
              "sum" : 2032680.0,
              "standardDeviation" : 42737.724289304075
            }, {
              "mean" : 256382.8333333333,
              "variance" : 3.897469696166666E9,
              "n" : 6,
              "max" : 359460.0,
              "min" : 210398.0,
              "sum" : 1538297.0,
              "standardDeviation" : 62429.71805291664
            } ],
            "1" : [ {
              "mean" : 741796.3333333334,
              "variance" : 9.329993330950665E11,
              "n" : 1,
              "max" : 2669395.0,
              "min" : 35578.0,
              "sum" : 741796.3333333334,
              "standardDeviation" : 965918.9060656524
            }, {
              "mean" : 212434.11111111112,
              "variance" : 2.5659574411111107E8,
              "n" : 9,
              "max" : 253570.0,
              "min" : 201741.0,
              "sum" : 1911907.0,
              "standardDeviation" : 16018.606185030927
            }, {
              "mean" : 212378.80000000002,
              "variance" : 6.08518879511111E8,
              "n" : 10,
              "max" : 269211.0,
              "min" : 191465.0,
              "sum" : 2123788.0,
              "standardDeviation" : 24668.175439442435
            }, {
              "mean" : 241124.0,
              "variance" : 3.993798985E8,
              "n" : 5,
              "max" : 267220.0,
              "min" : 217608.0,
              "sum" : 1205620.0,
              "standardDeviation" : 19984.49144962163
            } ],
            "2" : [ {
              "mean" : 772471.4285714285,
              "variance" : 9.371238103646191E11,
              "n" : 2,
              "max" : 2848093.0,
              "min" : 40898.0,
              "sum" : 1544942.857142857,
              "standardDeviation" : 968051.5535675872
            }, {
              "mean" : 207854.33333333334,
              "variance" : 3.2609172375E8,
              "n" : 9,
              "max" : 235076.0,
              "min" : 187994.0,
              "sum" : 1870689.0,
              "standardDeviation" : 18058.009960956384
            }, {
              "mean" : 208338.77777777778,
              "variance" : 7.447147329444445E8,
              "n" : 9,
              "max" : 261281.0,
              "min" : 183559.0,
              "sum" : 1875049.0,
              "standardDeviation" : 27289.4619394455
            }, {
              "mean" : 243568.4,
              "variance" : 4.520814821299998E9,
              "n" : 5,
              "max" : 347279.0,
              "min" : 185420.0,
              "sum" : 1217842.0,
              "standardDeviation" : 67237.00485075163
            } ],
            "3" : [ {
              "mean" : 769979.5,
              "variance" : 9.518234179223002E11,
              "n" : 1,
              "max" : 2726797.0,
              "min" : 71891.0,
              "sum" : 769979.5,
              "standardDeviation" : 975614.3797230031
            }, {
              "mean" : 227723.77777777778,
              "variance" : 1.631387874694444E9,
              "n" : 9,
              "max" : 329665.0,
              "min" : 202413.0,
              "sum" : 2049514.0,
              "standardDeviation" : 40390.44286331166
            }, {
              "mean" : 217568.66666666666,
              "variance" : 4.6485756125000006E8,
              "n" : 9,
              "max" : 270135.0,
              "min" : 199546.0,
              "sum" : 1958118.0,
              "standardDeviation" : 21560.555680454992
            }, {
              "mean" : 248468.5,
              "variance" : 2.2219285967E9,
              "n" : 6,
              "max" : 324983.0,
              "min" : 197283.0,
              "sum" : 1490811.0,
              "standardDeviation" : 47137.33760725143
            } ],
            "4" : [ {
              "mean" : 733971.6666666667,
              "variance" : 8.789200041554668E11,
              "n" : 1,
              "max" : 2600141.0,
              "min" : 48073.0,
              "sum" : 733971.6666666667,
              "standardDeviation" : 937507.3355208837
            }, {
              "mean" : 234027.8,
              "variance" : 2.0710708912888894E9,
              "n" : 10,
              "max" : 359202.0,
              "min" : 201847.0,
              "sum" : 2340278.0,
              "standardDeviation" : 45509.019889346
            }, {
              "mean" : 216371.66666666666,
              "variance" : 5.933498107500001E8,
              "n" : 9,
              "max" : 277850.0,
              "min" : 200024.0,
              "sum" : 1947345.0,
              "standardDeviation" : 24358.77276773196
            }, {
              "mean" : 213299.2,
              "variance" : 8.745854527E8,
              "n" : 5,
              "max" : 266070.0,
              "min" : 197190.0,
              "sum" : 1066496.0,
              "standardDeviation" : 29573.39095707491
            } ],
            "5" : [ {
              "mean" : 845156.6666666667,
              "variance" : 9.301610644158665E11,
              "n" : 1,
              "max" : 2622950.0,
              "min" : 32059.0,
              "sum" : 845156.6666666667,
              "standardDeviation" : 964448.5804934686
            }, {
              "mean" : 227796.66666666666,
              "variance" : 5.5044490925E8,
              "n" : 9,
              "max" : 281577.0,
              "min" : 206158.0,
              "sum" : 2050170.0,
              "standardDeviation" : 23461.56237870786
            }, {
              "mean" : 223459.33333333334,
              "variance" : 7.198766915E8,
              "n" : 9,
              "max" : 266288.0,
              "min" : 199779.0,
              "sum" : 2011134.0,
              "standardDeviation" : 26830.517913376178
            }, {
              "mean" : 233786.3333333333,
              "variance" : 1.3216912186666665E9,
              "n" : 6,
              "max" : 286559.0,
              "min" : 202252.0,
              "sum" : 1402718.0,
              "standardDeviation" : 36355.07142981109
            } ],
            "6" : [ {
              "mean" : 800511.8333333334,
              "variance" : 8.718475522349666E11,
              "n" : 1,
              "max" : 2587248.0,
              "min" : 33690.0,
              "sum" : 800511.8333333334,
              "standardDeviation" : 933727.7720165373
            }, {
              "mean" : 221536.80000000002,
              "variance" : 1.4177175935111113E9,
              "n" : 10,
              "max" : 325155.0,
              "min" : 199377.0,
              "sum" : 2215368.0,
              "standardDeviation" : 37652.59079414206
            }, {
              "mean" : 214932.55555555556,
              "variance" : 3.589066917777778E8,
              "n" : 9,
              "max" : 259122.0,
              "min" : 198920.0,
              "sum" : 1934393.0,
              "standardDeviation" : 18944.83285167166
            }, {
              "mean" : 223758.6,
              "variance" : 8.593238843E8,
              "n" : 5,
              "max" : 274145.0,
              "min" : 199842.0,
              "sum" : 1118793.0,
              "standardDeviation" : 29314.226653623322
            } ],
            "7" : [ {
              "mean" : 663940.2857142857,
              "variance" : 8.258017654719048E11,
              "n" : 2,
              "max" : 2683916.0,
              "min" : 35203.0,
              "sum" : 1327880.5714285714,
              "standardDeviation" : 908736.3564158225
            }, {
              "mean" : 241381.88888888888,
              "variance" : 8.869961191111115E8,
              "n" : 9,
              "max" : 292377.0,
              "min" : 203331.0,
              "sum" : 2172437.0,
              "standardDeviation" : 29782.480069851663
            }, {
              "mean" : 211985.37499999997,
              "variance" : 2.646678534107146E8,
              "n" : 8,
              "max" : 243304.0,
              "min" : 199727.0,
              "sum" : 1695882.9999999998,
              "standardDeviation" : 16268.615596009226
            }, {
              "mean" : 238805.1666666667,
              "variance" : 8.223782101666667E8,
              "n" : 6,
              "max" : 270394.0,
              "min" : 202532.0,
              "sum" : 1432831.0,
              "standardDeviation" : 28677.137412347605
            } ],
            "8" : [ {
              "mean" : 769137.3333333334,
              "variance" : 9.456342272554666E11,
              "n" : 1,
              "max" : 2712817.0,
              "min" : 52105.0,
              "sum" : 769137.3333333334,
              "standardDeviation" : 972437.2613466982
            }, {
              "mean" : 240310.55555555556,
              "variance" : 4.0727419425277777E9,
              "n" : 9,
              "max" : 407504.0,
              "min" : 202066.0,
              "sum" : 2162795.0,
              "standardDeviation" : 63818.03775209465
            }, {
              "mean" : 218073.0,
              "variance" : 8.646318110000001E8,
              "n" : 9,
              "max" : 268555.0,
              "min" : 191581.0,
              "sum" : 1962657.0,
              "standardDeviation" : 29404.622272697197
            }, {
              "mean" : 235233.0,
              "variance" : 1.7005324476000001E9,
              "n" : 6,
              "max" : 274752.0,
              "min" : 191662.0,
              "sum" : 1411398.0,
              "standardDeviation" : 41237.51262624845
            } ],
            "9" : [ {
              "mean" : 680381.1428571428,
              "variance" : 8.753887293838096E11,
              "n" : 2,
              "max" : 2754187.0,
              "min" : 58529.0,
              "sum" : 1360762.2857142857,
              "standardDeviation" : 935622.1082166719
            }, {
              "mean" : 244268.77777777778,
              "variance" : 3.322884415444444E9,
              "n" : 9,
              "max" : 352480.0,
              "min" : 195928.0,
              "sum" : 2198419.0,
              "standardDeviation" : 57644.465609843624
            }, {
              "mean" : 218736.0,
              "variance" : 4.590727942500001E8,
              "n" : 9,
              "max" : 262347.0,
              "min" : 198192.0,
              "sum" : 1968624.0,
              "standardDeviation" : 21425.984090584967
            }, {
              "mean" : 248415.4,
              "variance" : 2.3123735813E9,
              "n" : 5,
              "max" : 291258.0,
              "min" : 195869.0,
              "sum" : 1242077.0,
              "standardDeviation" : 48087.14569716111
            } ],
            "10" : [ {
              "mean" : 759429.1666666666,
              "variance" : 7.819928996477667E11,
              "n" : 1,
              "max" : 2451876.0,
              "min" : 29947.0,
              "sum" : 759429.1666666666,
              "standardDeviation" : 884303.6241290469
            }, {
              "mean" : 238697.55555555556,
              "variance" : 3.222762513027778E9,
              "n" : 9,
              "max" : 385813.0,
              "min" : 204836.0,
              "sum" : 2148278.0,
              "standardDeviation" : 56769.380065558034
            }, {
              "mean" : 225949.66666666666,
              "variance" : 5.2760081375E8,
              "n" : 9,
              "max" : 277570.0,
              "min" : 203670.0,
              "sum" : 2033547.0,
              "standardDeviation" : 22969.562767932697
            }, {
              "mean" : 241588.0,
              "variance" : 1.2355041211999998E9,
              "n" : 6,
              "max" : 286061.0,
              "min" : 205124.0,
              "sum" : 1449528.0,
              "standardDeviation" : 35149.738565172855
            } ],
            "11" : [ {
              "mean" : 649782.5714285715,
              "variance" : 5.992102118562859E11,
              "n" : 2,
              "max" : 2357525.0,
              "min" : 46283.0,
              "sum" : 1299565.142857143,
              "standardDeviation" : 774086.6953102126
            }, {
              "mean" : 220125.11111111112,
              "variance" : 2.2023318686111104E8,
              "n" : 9,
              "max" : 252902.0,
              "min" : 203597.0,
              "sum" : 1981126.0,
              "standardDeviation" : 14840.255619803556
            }, {
              "mean" : 228284.11111111112,
              "variance" : 5.686364041111112E8,
              "n" : 9,
              "max" : 278205.0,
              "min" : 201339.0,
              "sum" : 2054557.0,
              "standardDeviation" : 23846.098299535526
            }, {
              "mean" : 244851.8,
              "variance" : 2.9373587407000012E9,
              "n" : 5,
              "max" : 329805.0,
              "min" : 205141.0,
              "sum" : 1224259.0,
              "standardDeviation" : 54197.4052949032
            } ],
            "12" : [ {
              "mean" : 691578.142857143,
              "variance" : 7.790456062238094E11,
              "n" : 2,
              "max" : 2654344.0,
              "min" : 49069.0,
              "sum" : 1383156.285714286,
              "standardDeviation" : 882635.6021732918
            }, {
              "mean" : 227797.33333333334,
              "variance" : 3.6318699350000006E8,
              "n" : 9,
              "max" : 272407.0,
              "min" : 210982.0,
              "sum" : 2050176.0,
              "standardDeviation" : 19057.465558148073
            }, {
              "mean" : 232397.77777777778,
              "variance" : 9.407221176944444E8,
              "n" : 9,
              "max" : 286402.0,
              "min" : 207174.0,
              "sum" : 2091580.0,
              "standardDeviation" : 30671.193613787585
            }, {
              "mean" : 260433.8,
              "variance" : 1.4730451652E9,
              "n" : 5,
              "max" : 294760.0,
              "min" : 212210.0,
              "sum" : 1302169.0,
              "standardDeviation" : 38380.27052015137
            } ],
            "13" : [ {
              "mean" : 659905.4285714285,
              "variance" : 7.417286265162858E11,
              "n" : 2,
              "max" : 2567699.0,
              "min" : 31246.0,
              "sum" : 1319810.857142857,
              "standardDeviation" : 861236.6843767663
            }, {
              "mean" : 241195.33333333334,
              "variance" : 1.4923884897499998E9,
              "n" : 9,
              "max" : 324133.0,
              "min" : 201767.0,
              "sum" : 2170758.0,
              "standardDeviation" : 38631.44431353816
            }, {
              "mean" : 230895.4444444444,
              "variance" : 1.0749966402777784E9,
              "n" : 9,
              "max" : 306514.0,
              "min" : 199166.0,
              "sum" : 2078058.9999999998,
              "standardDeviation" : 32787.14138618642
            }, {
              "mean" : 257292.6,
              "variance" : 2.0147389173E9,
              "n" : 5,
              "max" : 305613.0,
              "min" : 207171.0,
              "sum" : 1286463.0,
              "standardDeviation" : 44885.84317243021
            } ],
            "14" : [ {
              "mean" : 642206.1428571428,
              "variance" : 6.445861232634762E11,
              "n" : 2,
              "max" : 2422524.0,
              "min" : 57575.0,
              "sum" : 1284412.2857142857,
              "standardDeviation" : 802861.2104613575
            }, {
              "mean" : 219093.44444444444,
              "variance" : 1.7791486952777773E8,
              "n" : 9,
              "max" : 247157.0,
              "min" : 202594.0,
              "sum" : 1971841.0,
              "standardDeviation" : 13338.473283242642
            }, {
              "mean" : 217930.88888888888,
              "variance" : 6.572768683611113E8,
              "n" : 9,
              "max" : 272906.0,
              "min" : 195823.0,
              "sum" : 1961378.0,
              "standardDeviation" : 25637.411498845027
            }, {
              "mean" : 265327.4,
              "variance" : 3.6038475163E9,
              "n" : 5,
              "max" : 339779.0,
              "min" : 193258.0,
              "sum" : 1326637.0,
              "standardDeviation" : 60032.05407363636
            } ],
            "15" : [ {
              "mean" : 743640.1428571428,
              "variance" : 9.725483988218094E11,
              "n" : 2,
              "max" : 2945258.0,
              "min" : 58692.0,
              "sum" : 1487280.2857142857,
              "standardDeviation" : 986178.685037255
            }, {
              "mean" : 225576.88888888888,
              "variance" : 7.832763906111112E8,
              "n" : 9,
              "max" : 292576.0,
              "min" : 207257.0,
              "sum" : 2030192.0,
              "standardDeviation" : 27987.075420827936
            }, {
              "mean" : 237694.0,
              "variance" : 6.909260262500001E8,
              "n" : 9,
              "max" : 288657.0,
              "min" : 209563.0,
              "sum" : 2139246.0,
              "standardDeviation" : 26285.471771493852
            }, {
              "mean" : 274493.8,
              "variance" : 2.1709432377000003E9,
              "n" : 5,
              "max" : 325190.0,
              "min" : 226495.0,
              "sum" : 1372469.0,
              "standardDeviation" : 46593.38190880761
            } ],
            "16" : [ {
              "mean" : 777137.3333333333,
              "variance" : 8.042822799742667E11,
              "n" : 1,
              "max" : 2504416.0,
              "min" : 49757.0,
              "sum" : 777137.3333333333,
              "standardDeviation" : 896817.8633224623
            }, {
              "mean" : 229591.66666666666,
              "variance" : 2.57273694325E9,
              "n" : 9,
              "max" : 359045.0,
              "min" : 195351.0,
              "sum" : 2066325.0,
              "standardDeviation" : 50722.1543632563
            }, {
              "mean" : 215332.0,
              "variance" : 6.417424037777778E8,
              "n" : 10,
              "max" : 259777.0,
              "min" : 189486.0,
              "sum" : 2153320.0,
              "standardDeviation" : 25332.635152659856
            }, {
              "mean" : 242437.0,
              "variance" : 2.0027621875E9,
              "n" : 5,
              "max" : 287139.0,
              "min" : 192182.0,
              "sum" : 1212185.0,
              "standardDeviation" : 44752.231089633955
            } ],
            "17" : [ {
              "mean" : 676066.1428571428,
              "variance" : 8.055811820514762E11,
              "n" : 2,
              "max" : 2650274.0,
              "min" : 55912.0,
              "sum" : 1352132.2857142857,
              "standardDeviation" : 897541.7439046922
            }, {
              "mean" : 226035.33333333334,
              "variance" : 1.2970779767499998E9,
              "n" : 9,
              "max" : 303625.0,
              "min" : 196456.0,
              "sum" : 2034318.0,
              "standardDeviation" : 36014.968787297315
            }, {
              "mean" : 204920.0,
              "variance" : 6.499146317499999E8,
              "n" : 9,
              "max" : 252689.0,
              "min" : 181385.0,
              "sum" : 1844280.0,
              "standardDeviation" : 25493.423303864074
            }, {
              "mean" : 225694.6,
              "variance" : 1.8954317978000002E9,
              "n" : 5,
              "max" : 282021.0,
              "min" : 179254.0,
              "sum" : 1128473.0,
              "standardDeviation" : 43536.5570273994
            } ],
            "18" : [ {
              "mean" : 783850.8333333334,
              "variance" : 7.896850144557668E11,
              "n" : 1,
              "max" : 2483483.0,
              "min" : 49108.0,
              "sum" : 783850.8333333334,
              "standardDeviation" : 888642.2308532083
            }, {
              "mean" : 229433.66666666666,
              "variance" : 4.129066060000001E9,
              "n" : 9,
              "max" : 394241.0,
              "min" : 193173.0,
              "sum" : 2064903.0,
              "standardDeviation" : 64257.80933085099
            }, {
              "mean" : 219147.33333333334,
              "variance" : 7.757272032500001E8,
              "n" : 9,
              "max" : 285349.0,
              "min" : 194397.0,
              "sum" : 1972326.0,
              "standardDeviation" : 27851.879707660668
            }, {
              "mean" : 241628.0,
              "variance" : 2.4305036299999995E9,
              "n" : 6,
              "max" : 304569.0,
              "min" : 193894.0,
              "sum" : 1449768.0,
              "standardDeviation" : 49300.13823510031
            } ],
            "19" : [ {
              "mean" : 584661.4285714286,
              "variance" : 4.913902220749524E11,
              "n" : 2,
              "max" : 2128399.0,
              "min" : 48608.0,
              "sum" : 1169322.8571428573,
              "standardDeviation" : 700992.3124221495
            }, {
              "mean" : 224484.33333333334,
              "variance" : 8.861246064999996E8,
              "n" : 9,
              "max" : 286279.0,
              "min" : 203861.0,
              "sum" : 2020359.0,
              "standardDeviation" : 29767.845177304986
            }, {
              "mean" : 200725.44444444444,
              "variance" : 6.6941399777777754E7,
              "n" : 9,
              "max" : 214547.0,
              "min" : 190546.0,
              "sum" : 1806529.0,
              "standardDeviation" : 8181.772410534148
            }, {
              "mean" : 224596.8,
              "variance" : 9.727369006999998E8,
              "n" : 5,
              "max" : 262368.0,
              "min" : 191797.0,
              "sum" : 1122984.0,
              "standardDeviation" : 31188.73034767526
            } ],
            "20" : [ {
              "mean" : 780113.8333333334,
              "variance" : 1.0835832064361666E12,
              "n" : 1,
              "max" : 2864613.0,
              "min" : 53889.0,
              "sum" : 780113.8333333334,
              "standardDeviation" : 1040953.0279682012
            }, {
              "mean" : 226040.66666666666,
              "variance" : 2.4504647812499995E9,
              "n" : 9,
              "max" : 349304.0,
              "min" : 190082.0,
              "sum" : 2034366.0,
              "standardDeviation" : 49502.16946003478
            }, {
              "mean" : 226001.0,
              "variance" : 1.28388243E9,
              "n" : 9,
              "max" : 283608.0,
              "min" : 189816.0,
              "sum" : 2034009.0,
              "standardDeviation" : 35831.305167409126
            }, {
              "mean" : 221610.0,
              "variance" : 1.0179293300000004E9,
              "n" : 6,
              "max" : 262887.0,
              "min" : 186016.0,
              "sum" : 1329660.0,
              "standardDeviation" : 31905.004779814724
            } ],
            "21" : [ {
              "mean" : 714024.7142857143,
              "variance" : 6.614641112532382E11,
              "n" : 2,
              "max" : 2480176.0,
              "min" : 38339.0,
              "sum" : 1428049.4285714286,
              "standardDeviation" : 813304.4394648527
            }, {
              "mean" : 236943.5,
              "variance" : 3.638676268571429E8,
              "n" : 8,
              "max" : 265575.0,
              "min" : 208181.0,
              "sum" : 1895548.0,
              "standardDeviation" : 19075.314593923293
            }, {
              "mean" : 241903.0,
              "variance" : 6.573838419999999E8,
              "n" : 10,
              "max" : 289603.0,
              "min" : 216712.0,
              "sum" : 2419030.0,
              "standardDeviation" : 25639.497693987687
            }, {
              "mean" : 273889.0,
              "variance" : 1.450541866000001E9,
              "n" : 5,
              "max" : 319668.0,
              "min" : 220067.0,
              "sum" : 1369445.0,
              "standardDeviation" : 38085.97991387383
            } ],
            "22" : [ {
              "mean" : 651572.857142857,
              "variance" : 8.811934244508096E11,
              "n" : 2,
              "max" : 2749217.0,
              "min" : 50333.0,
              "sum" : 1303145.714285714,
              "standardDeviation" : 938719.0338172597
            }, {
              "mean" : 244739.77777777778,
              "variance" : 8.713192264444445E8,
              "n" : 9,
              "max" : 310407.0,
              "min" : 217305.0,
              "sum" : 2202658.0,
              "standardDeviation" : 29518.116919011696
            }, {
              "mean" : 225715.22222222222,
              "variance" : 6.382609144444442E8,
              "n" : 9,
              "max" : 275534.0,
              "min" : 205199.0,
              "sum" : 2031437.0,
              "standardDeviation" : 25263.826203575027
            }, {
              "mean" : 240779.4,
              "variance" : 1.7309650378E9,
              "n" : 5,
              "max" : 293432.0,
              "min" : 204516.0,
              "sum" : 1203897.0,
              "standardDeviation" : 41604.86795796857
            } ],
            "23" : [ {
              "mean" : 636898.1428571428,
              "variance" : 6.925306467044762E11,
              "n" : 2,
              "max" : 2479124.0,
              "min" : 34044.0,
              "sum" : 1273796.2857142857,
              "standardDeviation" : 832184.2624710444
            }, {
              "mean" : 222948.2222222222,
              "variance" : 1.0643999354444441E9,
              "n" : 9,
              "max" : 280286.0,
              "min" : 189864.0,
              "sum" : 2006533.9999999998,
              "standardDeviation" : 32625.14268849171
            }, {
              "mean" : 224313.125,
              "variance" : 2.208118740125E9,
              "n" : 8,
              "max" : 306543.0,
              "min" : 189360.0,
              "sum" : 1794505.0,
              "standardDeviation" : 46990.62395973265
            }, {
              "mean" : 231015.6666666667,
              "variance" : 1.658501678266667E9,
              "n" : 6,
              "max" : 309716.0,
              "min" : 190309.0,
              "sum" : 1386094.0,
              "standardDeviation" : 40724.7059936185
            } ],
            "24" : [ {
              "mean" : 1887057.1666666667,
              "variance" : 1.3459384967060568E13,
              "n" : 1,
              "max" : 9361469.0,
              "min" : 32580.0,
              "sum" : 1887057.1666666667,
              "standardDeviation" : 3668703.4449598906
            }, {
              "mean" : 250511.33333333337,
              "variance" : 4.702186696E9,
              "n" : 9,
              "max" : 430600.0,
              "min" : 207981.0,
              "sum" : 2254602.0000000005,
              "standardDeviation" : 68572.49226913077
            }, {
              "mean" : 243665.0,
              "variance" : 1.4660293460000005E9,
              "n" : 9,
              "max" : 308293.0,
              "min" : 209952.0,
              "sum" : 2192985.0,
              "standardDeviation" : 38288.76265955849
            }, {
              "mean" : 246394.0,
              "variance" : 5.375673919999998E8,
              "n" : 6,
              "max" : 269376.0,
              "min" : 206877.0,
              "sum" : 1478364.0,
              "standardDeviation" : 23185.49960643505
            } ],
            "25" : [ {
              "mean" : 781906.3333333334,
              "variance" : 8.579317756522666E11,
              "n" : 1,
              "max" : 2586084.0,
              "min" : 34852.0,
              "sum" : 781906.3333333334,
              "standardDeviation" : 926246.066470604
            }, {
              "mean" : 241769.55555555556,
              "variance" : 6.83671385027778E8,
              "n" : 9,
              "max" : 291297.0,
              "min" : 208772.0,
              "sum" : 2175926.0,
              "standardDeviation" : 26147.11045273986
            }, {
              "mean" : 239220.125,
              "variance" : 1.5972867938392859E9,
              "n" : 8,
              "max" : 309794.0,
              "min" : 203416.0,
              "sum" : 1913761.0,
              "standardDeviation" : 39966.07053288184
            }, {
              "mean" : 239103.14285714287,
              "variance" : 7.379553628095238E8,
              "n" : 7,
              "max" : 291600.0,
              "min" : 203357.0,
              "sum" : 1673722.0,
              "standardDeviation" : 27165.333843145087
            } ],
            "26" : [ {
              "mean" : 1012819.4285714286,
              "variance" : 3.0652465449166187E12,
              "n" : 2,
              "max" : 4962263.0,
              "min" : 45023.0,
              "sum" : 2025638.8571428573,
              "standardDeviation" : 1750784.5512559845
            }, {
              "mean" : 228592.125,
              "variance" : 6.297966864107145E8,
              "n" : 8,
              "max" : 287098.0,
              "min" : 209093.0,
              "sum" : 1828737.0,
              "standardDeviation" : 25095.750365564178
            }, {
              "mean" : 231113.2222222222,
              "variance" : 8.951960184444447E8,
              "n" : 9,
              "max" : 284252.0,
              "min" : 207551.0,
              "sum" : 2080018.9999999998,
              "standardDeviation" : 29919.82651093493
            }, {
              "mean" : 237390.0,
              "variance" : 2.0538078183999996E9,
              "n" : 6,
              "max" : 316439.0,
              "min" : 204693.0,
              "sum" : 1424340.0,
              "standardDeviation" : 45318.956501667155
            } ],
            "27" : [ {
              "mean" : 691319.857142857,
              "variance" : 7.655340795498094E11,
              "n" : 2,
              "max" : 2630787.0,
              "min" : 37448.0,
              "sum" : 1382639.714285714,
              "standardDeviation" : 874948.0439144998
            }, {
              "mean" : 207126.22222222222,
              "variance" : 1.1342197569444449E8,
              "n" : 9,
              "max" : 224134.0,
              "min" : 195262.0,
              "sum" : 1864136.0,
              "standardDeviation" : 10649.975384687257
            }, {
              "mean" : 216275.55555555556,
              "variance" : 5.871247922777778E8,
              "n" : 9,
              "max" : 255193.0,
              "min" : 187890.0,
              "sum" : 1946480.0,
              "standardDeviation" : 24230.65810657601
            }, {
              "mean" : 232354.4,
              "variance" : 7.183290132999996E8,
              "n" : 5,
              "max" : 267180.0,
              "min" : 202677.0,
              "sum" : 1161772.0,
              "standardDeviation" : 26801.660644445143
            } ],
            "28" : [ {
              "mean" : 711327.8333333334,
              "variance" : 6.783870092389667E11,
              "n" : 1,
              "max" : 2342163.0,
              "min" : 32023.0,
              "sum" : 711327.8333333334,
              "standardDeviation" : 823642.5251521236
            }, {
              "mean" : 237579.11111111112,
              "variance" : 1.0597229143611113E9,
              "n" : 9,
              "max" : 306756.0,
              "min" : 212717.0,
              "sum" : 2138212.0,
              "standardDeviation" : 32553.385605204126
            }, {
              "mean" : 257516.33333333334,
              "variance" : 2.7316832857500005E9,
              "n" : 9,
              "max" : 358550.0,
              "min" : 211673.0,
              "sum" : 2317647.0,
              "standardDeviation" : 52265.507610182074
            }, {
              "mean" : 245487.5,
              "variance" : 8.759947987E8,
              "n" : 6,
              "max" : 286988.0,
              "min" : 207981.0,
              "sum" : 1472925.0,
              "standardDeviation" : 29597.2093059464
            } ],
            "29" : [ {
              "mean" : 673483.0,
              "variance" : 9.367130473626669E11,
              "n" : 2,
              "max" : 2838920.0,
              "min" : 60926.0,
              "sum" : 1346966.0,
              "standardDeviation" : 967839.3706409483
            }, {
              "mean" : 245130.125,
              "variance" : 2.1869968132678576E9,
              "n" : 8,
              "max" : 354253.0,
              "min" : 210409.0,
              "sum" : 1961041.0,
              "standardDeviation" : 46765.337732853564
            }, {
              "mean" : 231682.66666666666,
              "variance" : 1.05111788075E9,
              "n" : 9,
              "max" : 310410.0,
              "min" : 209660.0,
              "sum" : 2085144.0,
              "standardDeviation" : 32420.94817783712
            }, {
              "mean" : 255259.5,
              "variance" : 2.2346199230999994E9,
              "n" : 6,
              "max" : 335527.0,
              "min" : 210331.0,
              "sum" : 1531557.0,
              "standardDeviation" : 47271.76665939194
            } ]
          }
        },
        "vmValuesPredecessor" : {
          "values" : {
            "0" : [ {
              "mean" : 2.9622971E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9622971E7,
              "min" : 2.9622971E7,
              "sum" : 2.9622971E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9577193E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9577193E7,
              "min" : 2.9577193E7,
              "sum" : 2.9577193E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9459181E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9459181E7,
              "min" : 2.9459181E7,
              "sum" : 2.9459181E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9352153E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9352153E7,
              "min" : 2.9352153E7,
              "sum" : 2.9352153E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9516159E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9516159E7,
              "min" : 2.9516159E7,
              "sum" : 2.9516159E7,
              "standardDeviation" : 0.0
            } ],
            "1" : [ {
              "mean" : 3.0404683E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0404683E7,
              "min" : 3.0404683E7,
              "sum" : 3.0404683E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0663116E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0663116E7,
              "min" : 3.0663116E7,
              "sum" : 3.0663116E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0301408E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0301408E7,
              "min" : 3.0301408E7,
              "sum" : 3.0301408E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0377441E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0377441E7,
              "min" : 3.0377441E7,
              "sum" : 3.0377441E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9839698E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9839698E7,
              "min" : 2.9839698E7,
              "sum" : 2.9839698E7,
              "standardDeviation" : 0.0
            } ],
            "2" : [ {
              "mean" : 2.9133038E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9133038E7,
              "min" : 2.9133038E7,
              "sum" : 2.9133038E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 4.1624133E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 4.1624133E7,
              "min" : 4.1624133E7,
              "sum" : 4.1624133E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9283875E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9283875E7,
              "min" : 2.9283875E7,
              "sum" : 2.9283875E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9296767E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9296767E7,
              "min" : 2.9296767E7,
              "sum" : 2.9296767E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9305462E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9305462E7,
              "min" : 2.9305462E7,
              "sum" : 2.9305462E7,
              "standardDeviation" : 0.0
            } ],
            "3" : [ {
              "mean" : 3.0337453E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0337453E7,
              "min" : 3.0337453E7,
              "sum" : 3.0337453E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0022352E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0022352E7,
              "min" : 3.0022352E7,
              "sum" : 3.0022352E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9457737E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9457737E7,
              "min" : 2.9457737E7,
              "sum" : 2.9457737E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0317413E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0317413E7,
              "min" : 3.0317413E7,
              "sum" : 3.0317413E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9915782E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9915782E7,
              "min" : 2.9915782E7,
              "sum" : 2.9915782E7,
              "standardDeviation" : 0.0
            } ],
            "4" : [ {
              "mean" : 2.9544415E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9544415E7,
              "min" : 2.9544415E7,
              "sum" : 2.9544415E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9608488E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9608488E7,
              "min" : 2.9608488E7,
              "sum" : 2.9608488E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9676272E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9676272E7,
              "min" : 2.9676272E7,
              "sum" : 2.9676272E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9530905E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9530905E7,
              "min" : 2.9530905E7,
              "sum" : 2.9530905E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9709429E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9709429E7,
              "min" : 2.9709429E7,
              "sum" : 2.9709429E7,
              "standardDeviation" : 0.0
            } ],
            "5" : [ {
              "mean" : 2.9578911E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9578911E7,
              "min" : 2.9578911E7,
              "sum" : 2.9578911E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9962066E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9962066E7,
              "min" : 2.9962066E7,
              "sum" : 2.9962066E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9566778E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9566778E7,
              "min" : 2.9566778E7,
              "sum" : 2.9566778E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9908991E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9908991E7,
              "min" : 2.9908991E7,
              "sum" : 2.9908991E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9954033E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9954033E7,
              "min" : 2.9954033E7,
              "sum" : 2.9954033E7,
              "standardDeviation" : 0.0
            } ],
            "6" : [ {
              "mean" : 2.9955653E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9955653E7,
              "min" : 2.9955653E7,
              "sum" : 2.9955653E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9990684E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9990684E7,
              "min" : 2.9990684E7,
              "sum" : 2.9990684E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0021955E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0021955E7,
              "min" : 3.0021955E7,
              "sum" : 3.0021955E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.001122E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.001122E7,
              "min" : 3.001122E7,
              "sum" : 3.001122E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0049641E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0049641E7,
              "min" : 3.0049641E7,
              "sum" : 3.0049641E7,
              "standardDeviation" : 0.0
            } ],
            "7" : [ {
              "mean" : 2.9837936E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9837936E7,
              "min" : 2.9837936E7,
              "sum" : 2.9837936E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9786188E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9786188E7,
              "min" : 2.9786188E7,
              "sum" : 2.9786188E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9543245E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9543245E7,
              "min" : 2.9543245E7,
              "sum" : 2.9543245E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0616561E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0616561E7,
              "min" : 3.0616561E7,
              "sum" : 3.0616561E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 4.2940123E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 4.2940123E7,
              "min" : 4.2940123E7,
              "sum" : 4.2940123E7,
              "standardDeviation" : 0.0
            } ],
            "8" : [ {
              "mean" : 3.0353432E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0353432E7,
              "min" : 3.0353432E7,
              "sum" : 3.0353432E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0818242E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0818242E7,
              "min" : 3.0818242E7,
              "sum" : 3.0818242E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9970877E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9970877E7,
              "min" : 2.9970877E7,
              "sum" : 2.9970877E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0695991E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0695991E7,
              "min" : 3.0695991E7,
              "sum" : 3.0695991E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.088564E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.088564E7,
              "min" : 3.088564E7,
              "sum" : 3.088564E7,
              "standardDeviation" : 0.0
            } ],
            "9" : [ {
              "mean" : 3.0107559E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0107559E7,
              "min" : 3.0107559E7,
              "sum" : 3.0107559E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0554669E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0554669E7,
              "min" : 3.0554669E7,
              "sum" : 3.0554669E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.051645E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.051645E7,
              "min" : 3.051645E7,
              "sum" : 3.051645E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9750516E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9750516E7,
              "min" : 2.9750516E7,
              "sum" : 2.9750516E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0512525E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0512525E7,
              "min" : 3.0512525E7,
              "sum" : 3.0512525E7,
              "standardDeviation" : 0.0
            } ],
            "10" : [ {
              "mean" : 3.04758E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.04758E7,
              "min" : 3.04758E7,
              "sum" : 3.04758E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0303129E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0303129E7,
              "min" : 3.0303129E7,
              "sum" : 3.0303129E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0220968E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0220968E7,
              "min" : 3.0220968E7,
              "sum" : 3.0220968E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0380747E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0380747E7,
              "min" : 3.0380747E7,
              "sum" : 3.0380747E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0318588E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0318588E7,
              "min" : 3.0318588E7,
              "sum" : 3.0318588E7,
              "standardDeviation" : 0.0
            } ],
            "11" : [ {
              "mean" : 3.0330261E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0330261E7,
              "min" : 3.0330261E7,
              "sum" : 3.0330261E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0131211E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0131211E7,
              "min" : 3.0131211E7,
              "sum" : 3.0131211E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0099827E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0099827E7,
              "min" : 3.0099827E7,
              "sum" : 3.0099827E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0047275E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0047275E7,
              "min" : 3.0047275E7,
              "sum" : 3.0047275E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0115915E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0115915E7,
              "min" : 3.0115915E7,
              "sum" : 3.0115915E7,
              "standardDeviation" : 0.0
            } ],
            "12" : [ {
              "mean" : 2.9693731E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9693731E7,
              "min" : 2.9693731E7,
              "sum" : 2.9693731E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9694085E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9694085E7,
              "min" : 2.9694085E7,
              "sum" : 2.9694085E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9687918E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9687918E7,
              "min" : 2.9687918E7,
              "sum" : 2.9687918E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9925875E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9925875E7,
              "min" : 2.9925875E7,
              "sum" : 2.9925875E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9797961E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9797961E7,
              "min" : 2.9797961E7,
              "sum" : 2.9797961E7,
              "standardDeviation" : 0.0
            } ],
            "13" : [ {
              "mean" : 2.9757994E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9757994E7,
              "min" : 2.9757994E7,
              "sum" : 2.9757994E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9569311E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9569311E7,
              "min" : 2.9569311E7,
              "sum" : 2.9569311E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9424286E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9424286E7,
              "min" : 2.9424286E7,
              "sum" : 2.9424286E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9596031E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9596031E7,
              "min" : 2.9596031E7,
              "sum" : 2.9596031E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9823373E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9823373E7,
              "min" : 2.9823373E7,
              "sum" : 2.9823373E7,
              "standardDeviation" : 0.0
            } ],
            "14" : [ {
              "mean" : 3.0021139E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0021139E7,
              "min" : 3.0021139E7,
              "sum" : 3.0021139E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9726565E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9726565E7,
              "min" : 2.9726565E7,
              "sum" : 2.9726565E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9841348E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9841348E7,
              "min" : 2.9841348E7,
              "sum" : 2.9841348E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0089575E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0089575E7,
              "min" : 3.0089575E7,
              "sum" : 3.0089575E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9874118E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9874118E7,
              "min" : 2.9874118E7,
              "sum" : 2.9874118E7,
              "standardDeviation" : 0.0
            } ],
            "15" : [ {
              "mean" : 2.996032E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.996032E7,
              "min" : 2.996032E7,
              "sum" : 2.996032E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9950127E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9950127E7,
              "min" : 2.9950127E7,
              "sum" : 2.9950127E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0032965E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0032965E7,
              "min" : 3.0032965E7,
              "sum" : 3.0032965E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0191649E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0191649E7,
              "min" : 3.0191649E7,
              "sum" : 3.0191649E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0076667E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0076667E7,
              "min" : 3.0076667E7,
              "sum" : 3.0076667E7,
              "standardDeviation" : 0.0
            } ],
            "16" : [ {
              "mean" : 2.9591337E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9591337E7,
              "min" : 2.9591337E7,
              "sum" : 2.9591337E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9308269E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9308269E7,
              "min" : 2.9308269E7,
              "sum" : 2.9308269E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9511715E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9511715E7,
              "min" : 2.9511715E7,
              "sum" : 2.9511715E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9513256E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9513256E7,
              "min" : 2.9513256E7,
              "sum" : 2.9513256E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9590244E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9590244E7,
              "min" : 2.9590244E7,
              "sum" : 2.9590244E7,
              "standardDeviation" : 0.0
            } ],
            "17" : [ {
              "mean" : 3.0451663E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0451663E7,
              "min" : 3.0451663E7,
              "sum" : 3.0451663E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0285327E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0285327E7,
              "min" : 3.0285327E7,
              "sum" : 3.0285327E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0398208E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0398208E7,
              "min" : 3.0398208E7,
              "sum" : 3.0398208E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0330104E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0330104E7,
              "min" : 3.0330104E7,
              "sum" : 3.0330104E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9994605E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9994605E7,
              "min" : 2.9994605E7,
              "sum" : 2.9994605E7,
              "standardDeviation" : 0.0
            } ],
            "18" : [ {
              "mean" : 2.9617499E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9617499E7,
              "min" : 2.9617499E7,
              "sum" : 2.9617499E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0311087E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0311087E7,
              "min" : 3.0311087E7,
              "sum" : 3.0311087E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0083644E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0083644E7,
              "min" : 3.0083644E7,
              "sum" : 3.0083644E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9941228E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9941228E7,
              "min" : 2.9941228E7,
              "sum" : 2.9941228E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9667928E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9667928E7,
              "min" : 2.9667928E7,
              "sum" : 2.9667928E7,
              "standardDeviation" : 0.0
            } ],
            "19" : [ {
              "mean" : 3.0080798E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0080798E7,
              "min" : 3.0080798E7,
              "sum" : 3.0080798E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9958622E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9958622E7,
              "min" : 2.9958622E7,
              "sum" : 2.9958622E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9963717E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9963717E7,
              "min" : 2.9963717E7,
              "sum" : 2.9963717E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9533497E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9533497E7,
              "min" : 2.9533497E7,
              "sum" : 2.9533497E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9689094E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9689094E7,
              "min" : 2.9689094E7,
              "sum" : 2.9689094E7,
              "standardDeviation" : 0.0
            } ],
            "20" : [ {
              "mean" : 3.035093E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.035093E7,
              "min" : 3.035093E7,
              "sum" : 3.035093E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.01157E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.01157E7,
              "min" : 3.01157E7,
              "sum" : 3.01157E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0119662E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0119662E7,
              "min" : 3.0119662E7,
              "sum" : 3.0119662E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 4.3326087E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 4.3326087E7,
              "min" : 4.3326087E7,
              "sum" : 4.3326087E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0292556E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0292556E7,
              "min" : 3.0292556E7,
              "sum" : 3.0292556E7,
              "standardDeviation" : 0.0
            } ],
            "21" : [ {
              "mean" : 2.9979771E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9979771E7,
              "min" : 2.9979771E7,
              "sum" : 2.9979771E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9882801E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9882801E7,
              "min" : 2.9882801E7,
              "sum" : 2.9882801E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0201422E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0201422E7,
              "min" : 3.0201422E7,
              "sum" : 3.0201422E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9895345E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9895345E7,
              "min" : 2.9895345E7,
              "sum" : 2.9895345E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 4.7398137E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 4.7398137E7,
              "min" : 4.7398137E7,
              "sum" : 4.7398137E7,
              "standardDeviation" : 0.0
            } ],
            "22" : [ {
              "mean" : 3.0349716E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0349716E7,
              "min" : 3.0349716E7,
              "sum" : 3.0349716E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0164211E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0164211E7,
              "min" : 3.0164211E7,
              "sum" : 3.0164211E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0016743E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0016743E7,
              "min" : 3.0016743E7,
              "sum" : 3.0016743E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0038713E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0038713E7,
              "min" : 3.0038713E7,
              "sum" : 3.0038713E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0372847E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0372847E7,
              "min" : 3.0372847E7,
              "sum" : 3.0372847E7,
              "standardDeviation" : 0.0
            } ],
            "23" : [ {
              "mean" : 3.0059202E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0059202E7,
              "min" : 3.0059202E7,
              "sum" : 3.0059202E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9693189E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9693189E7,
              "min" : 2.9693189E7,
              "sum" : 2.9693189E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0006966E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0006966E7,
              "min" : 3.0006966E7,
              "sum" : 3.0006966E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9950045E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9950045E7,
              "min" : 2.9950045E7,
              "sum" : 2.9950045E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0049631E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0049631E7,
              "min" : 3.0049631E7,
              "sum" : 3.0049631E7,
              "standardDeviation" : 0.0
            } ],
            "24" : [ {
              "mean" : 2.9587686E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9587686E7,
              "min" : 2.9587686E7,
              "sum" : 2.9587686E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0331991E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0331991E7,
              "min" : 3.0331991E7,
              "sum" : 3.0331991E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9918802E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9918802E7,
              "min" : 2.9918802E7,
              "sum" : 2.9918802E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0180174E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0180174E7,
              "min" : 3.0180174E7,
              "sum" : 3.0180174E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9775977E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9775977E7,
              "min" : 2.9775977E7,
              "sum" : 2.9775977E7,
              "standardDeviation" : 0.0
            } ],
            "25" : [ {
              "mean" : 2.9064782E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9064782E7,
              "min" : 2.9064782E7,
              "sum" : 2.9064782E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 4.1805521E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 4.1805521E7,
              "min" : 4.1805521E7,
              "sum" : 4.1805521E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 4.1872892E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 4.1872892E7,
              "min" : 4.1872892E7,
              "sum" : 4.1872892E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9082914E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9082914E7,
              "min" : 2.9082914E7,
              "sum" : 2.9082914E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9191336E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9191336E7,
              "min" : 2.9191336E7,
              "sum" : 2.9191336E7,
              "standardDeviation" : 0.0
            } ],
            "26" : [ {
              "mean" : 2.9101996E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9101996E7,
              "min" : 2.9101996E7,
              "sum" : 2.9101996E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.8853577E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.8853577E7,
              "min" : 2.8853577E7,
              "sum" : 2.8853577E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9042984E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9042984E7,
              "min" : 2.9042984E7,
              "sum" : 2.9042984E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9264449E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9264449E7,
              "min" : 2.9264449E7,
              "sum" : 2.9264449E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9300935E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9300935E7,
              "min" : 2.9300935E7,
              "sum" : 2.9300935E7,
              "standardDeviation" : 0.0
            } ],
            "27" : [ {
              "mean" : 3.0278904E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0278904E7,
              "min" : 3.0278904E7,
              "sum" : 3.0278904E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9984788E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9984788E7,
              "min" : 2.9984788E7,
              "sum" : 2.9984788E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9676803E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9676803E7,
              "min" : 2.9676803E7,
              "sum" : 2.9676803E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.0031972E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0031972E7,
              "min" : 3.0031972E7,
              "sum" : 3.0031972E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 3.1196105E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.1196105E7,
              "min" : 3.1196105E7,
              "sum" : 3.1196105E7,
              "standardDeviation" : 0.0
            } ],
            "28" : [ {
              "mean" : 2.909422E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.909422E7,
              "min" : 2.909422E7,
              "sum" : 2.909422E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.8790722E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.8790722E7,
              "min" : 2.8790722E7,
              "sum" : 2.8790722E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.8874257E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.8874257E7,
              "min" : 2.8874257E7,
              "sum" : 2.8874257E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.8899114E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.8899114E7,
              "min" : 2.8899114E7,
              "sum" : 2.8899114E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9048387E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9048387E7,
              "min" : 2.9048387E7,
              "sum" : 2.9048387E7,
              "standardDeviation" : 0.0
            } ],
            "29" : [ {
              "mean" : 2.9637877E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9637877E7,
              "min" : 2.9637877E7,
              "sum" : 2.9637877E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9579133E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9579133E7,
              "min" : 2.9579133E7,
              "sum" : 2.9579133E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9283728E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9283728E7,
              "min" : 2.9283728E7,
              "sum" : 2.9283728E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9312368E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9312368E7,
              "min" : 2.9312368E7,
              "sum" : 2.9312368E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 2.9481955E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 2.9481955E7,
              "min" : 2.9481955E7,
              "sum" : 2.9481955E7,
              "standardDeviation" : 0.0
            } ]
          }
        },
        "children" : [ ]
      }, {
        "call" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
        "kiekerPattern" : "private org.gradoop.model.Vertex org.gradoop.csv.io.reader.CSVReader.readRemainingLines(java.lang.String)",
        "otherKiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.initialStep(java.lang.String)",
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
        "key" : "org.gradoop.csv.io.reader.CSVReader.readRemainingLines_String",
        "otherKey" : "org.gradoop.csv.io.reader.CSVReader.initialStep_String",
        "parent" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
        "color" : "#FF0000",
        "statistic" : {
          "meanOld" : 1077149.0781609197,
          "meanCurrent" : 3.269334877528736E7,
          "deviationOld" : 45191.02402508946,
          "deviationCurrent" : 2384610.4060022687,
          "vms" : 29,
          "callsOld" : 450,
          "calls" : 150,
          "tvalue" : -71.38603439666181,
          "change" : true
        },
        "hasSourceChange" : true,
        "state" : "SLOWER",
        "inVMDeviationPredecessor" : 144853.80229304303,
        "inVMDeviation" : 3022607.0184347355,
        "ess" : 3,
        "values" : [ 3.296784446666666E7, 3.1277592E7, 3.1418042066666663E7, 3.0074196E7, 3.60930609E7, 3.12713668E7, 3.525191205E7, 3.0926030333333336E7, 3.14317558E7, 3.502507786666667E7, 3.17433208E7, 3.52755096E7, 4.34471148E7, 3.11235736E7, 3.218591206666667E7, 3.1241142266666662E7, 3.10860954E7, 3.0328339933333337E7, 3.18710474E7, 3.0885004666666664E7, 3.1901654E7, 4.02015926E7, 3.0911360933333337E7, 3.1693639666666664E7, 3.37492068E7, 3.2226833E7, 3.6980805E7, 3.588613766666667E7, 3.17672408E7, 3.131182E7 ],
        "valuesPredecessor" : [ 1158555.4666666666, 1083035.0666666667, 1054241.3333333333, 1079843.8, 1068015.5333333334, 1034064.1333333333, 1150176.5333333334, 1024353.4, 1166518.8, 1050332.4666666666, 1081266.3333333333, 1146515.7333333334, 1012000.5333333333, 1121921.4666666666, 1103646.2, 1065851.8666666667, 1056677.8666666667, 1069222.0666666667, 1037414.2, 1060547.6666666667, 1065003.4666666666, 1115124.9333333333, 1152442.0666666667, 1089920.1333333333, 1027147.4, 1004492.1333333333, 1057164.7333333334, 1874167.2, 1049941.6, 1051886.3333333333 ],
        "vmValues" : {
          "values" : {
            "0" : [ {
              "mean" : 3.3149459333333332E7,
              "variance" : 3.3798747229284332E13,
              "n" : 1,
              "max" : 3.9859025E7,
              "min" : 2.9607477E7,
              "sum" : 3.3149459333333332E7,
              "standardDeviation" : 5813668.998944155
            }, {
              "mean" : 3.2067975E7,
              "variance" : 2.552159503538E12,
              "n" : 2,
              "max" : 3.3197612E7,
              "min" : 3.0938338E7,
              "sum" : 6.413595E7,
              "standardDeviation" : 1597547.965958456
            }, {
              "mean" : 3.37769065E7,
              "variance" : 3.674968193666449E13,
              "n" : 2,
              "max" : 3.8063495E7,
              "min" : 2.9490318E7,
              "sum" : 6.7553813E7,
              "standardDeviation" : 6062151.5930125415
            } ],
            "1" : [ {
              "mean" : 3.0592218E7,
              "variance" : 2.304457328247332E12,
              "n" : 4,
              "max" : 3.2338154E7,
              "min" : 2.9223064E7,
              "sum" : 1.22368872E8,
              "standardDeviation" : 1518043.9151247675
            }, {
              "mean" : 3.4019088E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.4019088E7,
              "min" : 3.4019088E7,
              "sum" : 3.4019088E7,
              "standardDeviation" : 0.0
            } ],
            "2" : [ {
              "mean" : 3.0989927333333332E7,
              "variance" : 1.2881440882333332E10,
              "n" : 1,
              "max" : 3.1069287E7,
              "min" : 3.0859926E7,
              "sum" : 3.0989927333333332E7,
              "standardDeviation" : 113496.43554902212
            }, {
              "mean" : 3.0316669333333332E7,
              "variance" : 3.063436609653333E11,
              "n" : 3,
              "max" : 3.0861748E7,
              "min" : 2.9755148E7,
              "sum" : 9.0950008E7,
              "standardDeviation" : 553483.2074826962
            }, {
              "mean" : 3.5150275E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.5150275E7,
              "min" : 3.5150275E7,
              "sum" : 3.5150275E7,
              "standardDeviation" : 0.0
            } ],
            "3" : [ {
              "mean" : 2.976625E7,
              "variance" : 6.858927948990001E11,
              "n" : 3,
              "max" : 3.0719468E7,
              "min" : 2.9223125E7,
              "sum" : 8.929875E7,
              "standardDeviation" : 828186.4493572689
            }, {
              "mean" : 3.0536115E7,
              "variance" : 1.1070394580000002E11,
              "n" : 2,
              "max" : 3.0771385E7,
              "min" : 3.0300845E7,
              "sum" : 6.107223E7,
              "standardDeviation" : 332722.0248195181
            } ],
            "4" : [ {
              "mean" : 3.30437995E7,
              "variance" : 2.6339858884649668E13,
              "n" : 1,
              "max" : 4.0395367E7,
              "min" : 2.898288E7,
              "sum" : 3.30437995E7,
              "standardDeviation" : 5132237.220223717
            }, {
              "mean" : 3.9050998666666664E7,
              "variance" : 2.341227284531893E14,
              "n" : 3,
              "max" : 5.6645668E7,
              "min" : 2.8859592E7,
              "sum" : 1.17152996E8,
              "standardDeviation" : 1.5301069519912302E7
            }, {
              "mean" : 3.0268509E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0268509E7,
              "min" : 3.0268509E7,
              "sum" : 3.0268509E7,
              "standardDeviation" : 0.0
            } ],
            "5" : [ {
              "mean" : 3.0273145E7,
              "variance" : 2.1014431457249998E12,
              "n" : 3,
              "max" : 3.185753E7,
              "min" : 2.901326E7,
              "sum" : 9.0819435E7,
              "standardDeviation" : 1449635.5216829504
            }, {
              "mean" : 3.27686995E7,
              "variance" : 1.6537696378320498E13,
              "n" : 2,
              "max" : 3.564426E7,
              "min" : 2.9893139E7,
              "sum" : 6.5537399E7,
              "standardDeviation" : 4066656.658524358
            } ],
            "6" : [ {
              "mean" : 3.618793725E7,
              "variance" : 1.1871473682818695E14,
              "n" : 1,
              "max" : 5.2396302E7,
              "min" : 2.9781643E7,
              "sum" : 3.618793725E7,
              "standardDeviation" : 1.089562925342942E7
            }, {
              "mean" : 2.9554708333333332E7,
              "variance" : 3.4011188380173335E12,
              "n" : 3,
              "max" : 3.1655905E7,
              "min" : 2.8204363E7,
              "sum" : 8.8664125E7,
              "standardDeviation" : 1844212.2540579035
            }, {
              "mean" : 5.1407498E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 5.1407498E7,
              "min" : 5.1407498E7,
              "sum" : 5.1407498E7,
              "standardDeviation" : 0.0
            } ],
            "7" : [ {
              "mean" : 3.2891539666666668E7,
              "variance" : 1.3966572397123335E12,
              "n" : 1,
              "max" : 3.3925276E7,
              "min" : 3.160318E7,
              "sum" : 3.2891539666666668E7,
              "standardDeviation" : 1181802.5383761593
            }, {
              "mean" : 2.86747545E7,
              "variance" : 7.539367410125E11,
              "n" : 2,
              "max" : 2.9288732E7,
              "min" : 2.8060777E7,
              "sum" : 5.7349509E7,
              "standardDeviation" : 868295.307491927
            }, {
              "mean" : 3.21945515E7,
              "variance" : 1.0066580013000498E13,
              "n" : 2,
              "max" : 3.4438051E7,
              "min" : 2.9951052E7,
              "sum" : 6.4389103E7,
              "standardDeviation" : 3172787.4200772573
            } ],
            "8" : [ {
              "mean" : 3.0676488333333332E7,
              "variance" : 2.536235232433333E12,
              "n" : 3,
              "max" : 3.1726505E7,
              "min" : 2.8844065E7,
              "sum" : 9.2029465E7,
              "standardDeviation" : 1592556.1944350137
            }, {
              "mean" : 3.2564657E7,
              "variance" : 4.422677042498001E12,
              "n" : 2,
              "max" : 3.4051714E7,
              "min" : 3.10776E7,
              "sum" : 6.5129314E7,
              "standardDeviation" : 2103016.177421848
            } ],
            "9" : [ {
              "mean" : 3.3090316333333332E7,
              "variance" : 2.0228131889941336E13,
              "n" : 1,
              "max" : 3.7575647E7,
              "min" : 2.8580607E7,
              "sum" : 3.3090316333333332E7,
              "standardDeviation" : 4497569.553652432
            }, {
              "mean" : 3.6866306666666664E7,
              "variance" : 1.0036181487578134E14,
              "n" : 3,
              "max" : 4.8433596E7,
              "min" : 3.0981776E7,
              "sum" : 1.1059892E8,
              "standardDeviation" : 1.0018074409574993E7
            }, {
              "mean" : 3.1436153E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.1436153E7,
              "min" : 3.1436153E7,
              "sum" : 3.1436153E7,
              "standardDeviation" : 0.0
            } ],
            "10" : [ {
              "mean" : 3.0649093666666668E7,
              "variance" : 2.704195166234333E12,
              "n" : 3,
              "max" : 3.2545868E7,
              "min" : 2.9624022E7,
              "sum" : 9.1947281E7,
              "standardDeviation" : 1644443.7254689906
            }, {
              "mean" : 3.33846615E7,
              "variance" : 2.83247559342845E13,
              "n" : 2,
              "max" : 3.7147955E7,
              "min" : 2.9621368E7,
              "sum" : 6.6769323E7,
              "standardDeviation" : 5322100.706890513
            } ],
            "11" : [ {
              "mean" : 3.0917315E7,
              "variance" : 3.5007705727599994E11,
              "n" : 1,
              "max" : 3.1600305E7,
              "min" : 3.0560969E7,
              "sum" : 3.0917315E7,
              "standardDeviation" : 591673.1000104703
            }, {
              "mean" : 3.6941646333333336E7,
              "variance" : 1.2925785365562533E14,
              "n" : 3,
              "max" : 5.0068451E7,
              "min" : 3.0226247E7,
              "sum" : 1.10824939E8,
              "standardDeviation" : 1.1369162399034739E7
            }, {
              "mean" : 3.4635294E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.4635294E7,
              "min" : 3.4635294E7,
              "sum" : 3.4635294E7,
              "standardDeviation" : 0.0
            } ],
            "12" : [ {
              "mean" : 3.4478749E7,
              "variance" : 4.7847473402556E13,
              "n" : 1,
              "max" : 4.2458903E7,
              "min" : 3.0196559E7,
              "sum" : 3.4478749E7,
              "standardDeviation" : 6917186.812755313
            }, {
              "mean" : 3.8149800666666664E7,
              "variance" : 1.2578348084813336E14,
              "n" : 3,
              "max" : 5.1039974E7,
              "min" : 3.0624874E7,
              "sum" : 1.14449402E8,
              "standardDeviation" : 1.1215323483882815E7
            }, {
              "mean" : 6.8307423E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 6.8307423E7,
              "min" : 6.8307423E7,
              "sum" : 6.8307423E7,
              "standardDeviation" : 0.0
            } ],
            "13" : [ {
              "mean" : 3.2338736E7,
              "variance" : 1.1586785840851E13,
              "n" : 1,
              "max" : 3.5435751E7,
              "min" : 2.8694242E7,
              "sum" : 3.2338736E7,
              "standardDeviation" : 3403936.8150497447
            }, {
              "mean" : 3.075475E7,
              "variance" : 4.981875006571E12,
              "n" : 3,
              "max" : 3.257186E7,
              "min" : 2.8263331E7,
              "sum" : 9.226425E7,
              "standardDeviation" : 2232011.4261739342
            }, {
              "mean" : 3.1014882E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.1014882E7,
              "min" : 3.1014882E7,
              "sum" : 3.1014882E7,
              "standardDeviation" : 0.0
            } ],
            "14" : [ {
              "mean" : 3.4218835333333336E7,
              "variance" : 5.490427779484133E13,
              "n" : 1,
              "max" : 4.2774366E7,
              "min" : 2.9860764E7,
              "sum" : 3.4218835333333336E7,
              "standardDeviation" : 7409742.086931321
            }, {
              "mean" : 3.0390082E7,
              "variance" : 1.6540651801329998E12,
              "n" : 3,
              "max" : 3.1251421E7,
              "min" : 2.8911731E7,
              "sum" : 9.1170246E7,
              "standardDeviation" : 1286104.653647206
            }, {
              "mean" : 3.5540479E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.5540479E7,
              "min" : 3.5540479E7,
              "sum" : 3.5540479E7,
              "standardDeviation" : 0.0
            } ],
            "15" : [ {
              "mean" : 3.0322933333333332E7,
              "variance" : 3.8245015385763335E12,
              "n" : 1,
              "max" : 3.2577994E7,
              "min" : 2.9092799E7,
              "sum" : 3.0322933333333332E7,
              "standardDeviation" : 1955633.2832554097
            }, {
              "mean" : 3.0256124E7,
              "variance" : 3.3018563665079995E12,
              "n" : 3,
              "max" : 3.175079E7,
              "min" : 2.8233512E7,
              "sum" : 9.0768372E7,
              "standardDeviation" : 1817101.0886871428
            }, {
              "mean" : 3.5114406E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.5114406E7,
              "min" : 3.5114406E7,
              "sum" : 3.5114406E7,
              "standardDeviation" : 0.0
            } ],
            "16" : [ {
              "mean" : 3.056351425E7,
              "variance" : 5.058318396349166E11,
              "n" : 4,
              "max" : 3.1276048E7,
              "min" : 2.9607835E7,
              "sum" : 1.22254057E8,
              "standardDeviation" : 711218.5596811409
            }, {
              "mean" : 3.317642E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.317642E7,
              "min" : 3.317642E7,
              "sum" : 3.317642E7,
              "standardDeviation" : 0.0
            } ],
            "17" : [ {
              "mean" : 3.2774527666666668E7,
              "variance" : 8.078178059982333E12,
              "n" : 1,
              "max" : 3.5429813E7,
              "min" : 2.9776474E7,
              "sum" : 3.2774527666666668E7,
              "standardDeviation" : 2842213.5845116097
            }, {
              "mean" : 2.9466013666666668E7,
              "variance" : 4.1174445295143335E12,
              "n" : 3,
              "max" : 3.1538302E7,
              "min" : 2.7482948E7,
              "sum" : 8.8398041E7,
              "standardDeviation" : 2029148.720403296
            }, {
              "mean" : 3.0469131E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.0469131E7,
              "min" : 3.0469131E7,
              "sum" : 3.0469131E7,
              "standardDeviation" : 0.0
            } ],
            "18" : [ {
              "mean" : 3.0582135E7,
              "variance" : 3.0352783905789995E12,
              "n" : 3,
              "max" : 3.2504677E7,
              "min" : 2.910788E7,
              "sum" : 9.1746405E7,
              "standardDeviation" : 1742205.0368940504
            }, {
              "mean" : 3.3804416E7,
              "variance" : 1.7096756770242E13,
              "n" : 2,
              "max" : 3.6728177E7,
              "min" : 3.0880655E7,
              "sum" : 6.7608832E7,
              "standardDeviation" : 4134822.4593375227
            } ],
            "19" : [ {
              "mean" : 3.2012834333333332E7,
              "variance" : 1.582569480893333E11,
              "n" : 1,
              "max" : 3.2430955E7,
              "min" : 3.1639037E7,
              "sum" : 3.2012834333333332E7,
              "standardDeviation" : 397815.21852404455
            }, {
              "mean" : 2.9272655666666668E7,
              "variance" : 1.1425970974923333E12,
              "n" : 3,
              "max" : 3.0488036E7,
              "min" : 2.8478592E7,
              "sum" : 8.7817967E7,
              "standardDeviation" : 1068923.3356477597
            }, {
              "mean" : 3.4594222E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.4594222E7,
              "min" : 3.4594222E7,
              "sum" : 3.4594222E7,
              "standardDeviation" : 0.0
            } ],
            "20" : [ {
              "mean" : 3.1210406E7,
              "variance" : 9.81314332084E11,
              "n" : 3,
              "max" : 3.1886788E7,
              "min" : 3.0073344E7,
              "sum" : 9.3631218E7,
              "standardDeviation" : 990613.1091823891
            }, {
              "mean" : 3.2938526E7,
              "variance" : 2.5237765244879995E12,
              "n" : 2,
              "max" : 3.4061864E7,
              "min" : 3.1815188E7,
              "sum" : 6.5877052E7,
              "standardDeviation" : 1588639.8347290677
            } ],
            "21" : [ {
              "mean" : 4.119181575E7,
              "variance" : 1.0302453879169823E14,
              "n" : 4,
              "max" : 5.1717774E7,
              "min" : 3.2120269E7,
              "sum" : 1.64767263E8,
              "standardDeviation" : 1.01501004325917E7
            }, {
              "mean" : 3.62407E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.62407E7,
              "min" : 3.62407E7,
              "sum" : 3.62407E7,
              "standardDeviation" : 0.0
            } ],
            "22" : [ {
              "mean" : 3.2748465666666668E7,
              "variance" : 3.3062519373123335E12,
              "n" : 1,
              "max" : 3.4800724E7,
              "min" : 3.1338372E7,
              "sum" : 3.2748465666666668E7,
              "standardDeviation" : 1818310.187320176
            }, {
              "mean" : 3.0241964E7,
              "variance" : 4.415146720321001E12,
              "n" : 3,
              "max" : 3.2660029E7,
              "min" : 2.8860108E7,
              "sum" : 9.0725892E7,
              "standardDeviation" : 2101225.0522780754
            }, {
              "mean" : 3.1082447E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.1082447E7,
              "min" : 3.1082447E7,
              "sum" : 3.1082447E7,
              "standardDeviation" : 0.0
            } ],
            "23" : [ {
              "mean" : 3.2416809333333332E7,
              "variance" : 1.1601734573210334E13,
              "n" : 1,
              "max" : 3.5810595E7,
              "min" : 2.8998464E7,
              "sum" : 3.2416809333333332E7,
              "standardDeviation" : 3406131.907781954
            }, {
              "mean" : 2.9294178E7,
              "variance" : 7.578602366579999E11,
              "n" : 2,
              "max" : 2.9909751E7,
              "min" : 2.8678605E7,
              "sum" : 5.8588356E7,
              "standardDeviation" : 870551.6852306932
            }, {
              "mean" : 3.37315165E7,
              "variance" : 1.2431045358050002E11,
              "n" : 2,
              "max" : 3.3980826E7,
              "min" : 3.3482207E7,
              "sum" : 6.7463033E7,
              "standardDeviation" : 352576.87612845516
            } ],
            "24" : [ {
              "mean" : 3.4382466333333336E7,
              "variance" : 6.638665141865833E13,
              "n" : 3,
              "max" : 4.3758898E7,
              "min" : 2.9024513E7,
              "sum" : 1.03147399E8,
              "standardDeviation" : 8147800.4037076365
            }, {
              "mean" : 3.27993175E7,
              "variance" : 2.3139490375125E12,
              "n" : 2,
              "max" : 3.3874945E7,
              "min" : 3.172369E7,
              "sum" : 6.5598635E7,
              "standardDeviation" : 1521166.9985614663
            } ],
            "25" : [ {
              "mean" : 3.2418317E7,
              "variance" : 1.392463035184E12,
              "n" : 3,
              "max" : 3.3106809E7,
              "min" : 3.1055765E7,
              "sum" : 9.7254951E7,
              "standardDeviation" : 1180026.7095214413
            }, {
              "mean" : 3.1939607E7,
              "variance" : 6.4410115005E11,
              "n" : 2,
              "max" : 3.2507102E7,
              "min" : 3.1372112E7,
              "sum" : 6.3879214E7,
              "standardDeviation" : 802559.1255789195
            } ],
            "26" : [ {
              "mean" : 3.9129796333333336E7,
              "variance" : 2.139702100627613E14,
              "n" : 3,
              "max" : 5.5920097E7,
              "min" : 2.9142615E7,
              "sum" : 1.17389389E8,
              "standardDeviation" : 1.462772060379748E7
            }, {
              "mean" : 3.3757318E7,
              "variance" : 6.378977630792E12,
              "n" : 2,
              "max" : 3.5543232E7,
              "min" : 3.1971404E7,
              "sum" : 6.7514636E7,
              "standardDeviation" : 2525663.8000319838
            } ],
            "27" : [ {
              "mean" : 3.0540872333333332E7,
              "variance" : 1.5843095747023335E12,
              "n" : 1,
              "max" : 3.1964176E7,
              "min" : 2.9574339E7,
              "sum" : 3.0540872333333332E7,
              "standardDeviation" : 1258693.5984195413
            }, {
              "mean" : 3.7680042666666664E7,
              "variance" : 9.940271609689634E13,
              "n" : 3,
              "max" : 4.9171923E7,
              "min" : 3.133809E7,
              "sum" : 1.13040128E8,
              "standardDeviation" : 9970091.07766305
            }, {
              "mean" : 3.5849688E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 3.5849688E7,
              "min" : 3.5849688E7,
              "sum" : 3.5849688E7,
              "standardDeviation" : 0.0
            } ],
            "28" : [ {
              "mean" : 3.0982840666666668E7,
              "variance" : 1.0254762165813331E12,
              "n" : 3,
              "max" : 3.1690982E7,
              "min" : 2.982293E7,
              "sum" : 9.2948522E7,
              "standardDeviation" : 1012657.9958610573
            }, {
              "mean" : 3.2943841E7,
              "variance" : 1.2435732818449998E13,
              "n" : 2,
              "max" : 3.5437406E7,
              "min" : 3.0450276E7,
              "sum" : 6.5887682E7,
              "standardDeviation" : 3526433.4416588666
            } ],
            "29" : [ {
              "mean" : 2.9370513666666668E7,
              "variance" : 4.493275086643334E11,
              "n" : 3,
              "max" : 3.0127956E7,
              "min" : 2.8853813E7,
              "sum" : 8.8111541E7,
              "standardDeviation" : 670318.9603944777
            }, {
              "mean" : 3.42237795E7,
              "variance" : 5.1476238451249994E11,
              "n" : 2,
              "max" : 3.4731107E7,
              "min" : 3.3716452E7,
              "sum" : 6.8447559E7,
              "standardDeviation" : 717469.4310648363
            } ]
          }
        },
        "vmValuesPredecessor" : {
          "values" : {
            "0" : [ {
              "mean" : 1155621.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1155621.0,
              "min" : 1155621.0,
              "sum" : 1155621.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1147585.0,
              "variance" : 2.09346722E8,
              "n" : 2,
              "max" : 1157816.0,
              "min" : 1137354.0,
              "sum" : 2295170.0,
              "standardDeviation" : 14468.818956639136
            }, {
              "mean" : 1142142.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1142142.0,
              "min" : 1142142.0,
              "sum" : 1142142.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1149502.0,
              "variance" : 1.7952031999999996E7,
              "n" : 2,
              "max" : 1152498.0,
              "min" : 1146506.0,
              "sum" : 2299004.0,
              "standardDeviation" : 4236.983832869792
            }, {
              "mean" : 1153446.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1153446.0,
              "min" : 1153446.0,
              "sum" : 1153446.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1177642.0,
              "variance" : 3.781020799999999E7,
              "n" : 2,
              "max" : 1181990.0,
              "min" : 1173294.0,
              "sum" : 2355284.0,
              "standardDeviation" : 6149.000569198217
            }, {
              "mean" : 1161106.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1161106.0,
              "min" : 1161106.0,
              "sum" : 1161106.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1155912.0,
              "variance" : 2580992.0,
              "n" : 2,
              "max" : 1157048.0,
              "min" : 1154776.0,
              "sum" : 2311824.0,
              "standardDeviation" : 1606.546606855836
            }, {
              "mean" : 1164151.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1164151.0,
              "min" : 1164151.0,
              "sum" : 1164151.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1170292.0,
              "variance" : 8712.0,
              "n" : 2,
              "max" : 1170358.0,
              "min" : 1170226.0,
              "sum" : 2340584.0,
              "standardDeviation" : 93.33809511662427
            } ],
            "1" : [ {
              "mean" : 1053005.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1053005.0,
              "min" : 1053005.0,
              "sum" : 1053005.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1100473.0,
              "variance" : 239431.99999999997,
              "n" : 2,
              "max" : 1100819.0,
              "min" : 1100127.0,
              "sum" : 2200946.0,
              "standardDeviation" : 489.31789258109086
            }, {
              "mean" : 1077516.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1077516.0,
              "min" : 1077516.0,
              "sum" : 1077516.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1092655.0,
              "variance" : 5.5989362E7,
              "n" : 2,
              "max" : 1097946.0,
              "min" : 1087364.0,
              "sum" : 2185310.0,
              "standardDeviation" : 7482.603958516046
            }, {
              "mean" : 1087157.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1087157.0,
              "min" : 1087157.0,
              "sum" : 1087157.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1089440.5,
              "variance" : 7996000.5,
              "n" : 2,
              "max" : 1091440.0,
              "min" : 1087441.0,
              "sum" : 2178881.0,
              "standardDeviation" : 2827.7200179650035
            }, {
              "mean" : 1077506.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1077506.0,
              "min" : 1077506.0,
              "sum" : 1077506.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1092687.5,
              "variance" : 2.2761004499999996E7,
              "n" : 2,
              "max" : 1096061.0,
              "min" : 1089314.0,
              "sum" : 2185375.0,
              "standardDeviation" : 4770.849452665636
            }, {
              "mean" : 1066747.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1066747.0,
              "min" : 1066747.0,
              "sum" : 1066747.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1066541.5,
              "variance" : 2.0154900500000004E7,
              "n" : 2,
              "max" : 1069716.0,
              "min" : 1063367.0,
              "sum" : 2133083.0,
              "standardDeviation" : 4489.420953753391
            } ],
            "2" : [ {
              "mean" : 1046571.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1046571.0,
              "min" : 1046571.0,
              "sum" : 1046571.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1051072.5,
              "variance" : 5.54088645E7,
              "n" : 2,
              "max" : 1056336.0,
              "min" : 1045809.0,
              "sum" : 2102145.0,
              "standardDeviation" : 7443.713085550786
            }, {
              "mean" : 1044489.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1044489.0,
              "min" : 1044489.0,
              "sum" : 1044489.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1054269.5,
              "variance" : 1.3204750049999999E8,
              "n" : 2,
              "max" : 1062395.0,
              "min" : 1046144.0,
              "sum" : 2108539.0,
              "standardDeviation" : 11491.192301062583
            }, {
              "mean" : 1054242.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1054242.0,
              "min" : 1054242.0,
              "sum" : 1054242.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1051652.5,
              "variance" : 2.42834805E7,
              "n" : 2,
              "max" : 1055137.0,
              "min" : 1048168.0,
              "sum" : 2103305.0,
              "standardDeviation" : 4927.82715808905
            }, {
              "mean" : 1056026.5,
              "variance" : 5.88938045E7,
              "n" : 2,
              "max" : 1061453.0,
              "min" : 1050600.0,
              "sum" : 2112053.0,
              "standardDeviation" : 7674.2298962176
            }, {
              "mean" : 1057715.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1057715.0,
              "min" : 1057715.0,
              "sum" : 1057715.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1057977.0,
              "variance" : 5.529312799999999E7,
              "n" : 2,
              "max" : 1063235.0,
              "min" : 1052719.0,
              "sum" : 2115954.0,
              "standardDeviation" : 7435.934910957733
            }, {
              "mean" : 1068607.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1068607.0,
              "min" : 1068607.0,
              "sum" : 1068607.0,
              "standardDeviation" : 0.0
            } ],
            "3" : [ {
              "mean" : 1083757.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1083757.0,
              "min" : 1083757.0,
              "sum" : 1083757.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1077042.0,
              "variance" : 2.32761888E8,
              "n" : 2,
              "max" : 1087830.0,
              "min" : 1066254.0,
              "sum" : 2154084.0,
              "standardDeviation" : 15256.53591088095
            }, {
              "mean" : 1086797.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1086797.0,
              "min" : 1086797.0,
              "sum" : 1086797.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1081492.0,
              "variance" : 2.6281249999999996E7,
              "n" : 2,
              "max" : 1085117.0,
              "min" : 1077867.0,
              "sum" : 2162984.0,
              "standardDeviation" : 5126.524163602469
            }, {
              "mean" : 1059722.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1059722.0,
              "min" : 1059722.0,
              "sum" : 1059722.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1061745.5,
              "variance" : 7.505875125E8,
              "n" : 2,
              "max" : 1081118.0,
              "min" : 1042373.0,
              "sum" : 2123491.0,
              "standardDeviation" : 27396.852237072784
            }, {
              "mean" : 1088360.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1088360.0,
              "min" : 1088360.0,
              "sum" : 1088360.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1096231.0,
              "variance" : 1.4364800000000002E7,
              "n" : 2,
              "max" : 1098911.0,
              "min" : 1093551.0,
              "sum" : 2192462.0,
              "standardDeviation" : 3790.092347159895
            }, {
              "mean" : 1058788.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1058788.0,
              "min" : 1058788.0,
              "sum" : 1058788.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1093606.0,
              "variance" : 3.8005245E8,
              "n" : 2,
              "max" : 1107391.0,
              "min" : 1079821.0,
              "sum" : 2187212.0,
              "standardDeviation" : 19494.933957313115
            } ],
            "4" : [ {
              "mean" : 1084981.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1084981.0,
              "min" : 1084981.0,
              "sum" : 1084981.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1075015.0,
              "variance" : 4.40213792E8,
              "n" : 2,
              "max" : 1089851.0,
              "min" : 1060179.0,
              "sum" : 2150030.0,
              "standardDeviation" : 20981.272411367238
            }, {
              "mean" : 1056272.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1056272.0,
              "min" : 1056272.0,
              "sum" : 1056272.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1063741.5,
              "variance" : 9.684144449999999E7,
              "n" : 2,
              "max" : 1070700.0,
              "min" : 1056783.0,
              "sum" : 2127483.0,
              "standardDeviation" : 9840.805073773181
            }, {
              "mean" : 1087191.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1087191.0,
              "min" : 1087191.0,
              "sum" : 1087191.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1068630.5,
              "variance" : 4826724.499999999,
              "n" : 2,
              "max" : 1070184.0,
              "min" : 1067077.0,
              "sum" : 2137261.0,
              "standardDeviation" : 2196.980769146603
            }, {
              "mean" : 1073965.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1073965.0,
              "min" : 1073965.0,
              "sum" : 1073965.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1058748.0,
              "variance" : 9065282.0,
              "n" : 2,
              "max" : 1060877.0,
              "min" : 1056619.0,
              "sum" : 2117496.0,
              "standardDeviation" : 3010.8606742923193
            }, {
              "mean" : 1066000.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1066000.0,
              "min" : 1066000.0,
              "sum" : 1066000.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1059777.0,
              "variance" : 6472801.999999999,
              "n" : 2,
              "max" : 1061576.0,
              "min" : 1057978.0,
              "sum" : 2119554.0,
              "standardDeviation" : 2544.170198709198
            } ],
            "5" : [ {
              "mean" : 1037734.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1037734.0,
              "min" : 1037734.0,
              "sum" : 1037734.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1041652.5,
              "variance" : 1.087075125E8,
              "n" : 2,
              "max" : 1049025.0,
              "min" : 1034280.0,
              "sum" : 2083305.0,
              "standardDeviation" : 10426.289488595643
            }, {
              "mean" : 1029958.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1029958.0,
              "min" : 1029958.0,
              "sum" : 1029958.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1031741.0,
              "variance" : 1.8794727199999997E8,
              "n" : 2,
              "max" : 1041435.0,
              "min" : 1022047.0,
              "sum" : 2063482.0,
              "standardDeviation" : 13709.386273644783
            }, {
              "mean" : 1029125.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1029125.0,
              "min" : 1029125.0,
              "sum" : 1029125.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1038698.5,
              "variance" : 48984.5,
              "n" : 2,
              "max" : 1038855.0,
              "min" : 1038542.0,
              "sum" : 2077397.0,
              "standardDeviation" : 221.32442251138937
            }, {
              "mean" : 1021002.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1021002.0,
              "min" : 1021002.0,
              "sum" : 1021002.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1036708.0,
              "variance" : 9.077433800000001E7,
              "n" : 2,
              "max" : 1043445.0,
              "min" : 1029971.0,
              "sum" : 2073416.0,
              "standardDeviation" : 9527.556769707542
            }, {
              "mean" : 1030958.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1030958.0,
              "min" : 1030958.0,
              "sum" : 1030958.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1032292.5,
              "variance" : 7300020.500000001,
              "n" : 2,
              "max" : 1034203.0,
              "min" : 1030382.0,
              "sum" : 2064585.0,
              "standardDeviation" : 2701.855010913798
            } ],
            "6" : [ {
              "mean" : 1153207.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1153207.0,
              "min" : 1153207.0,
              "sum" : 1153207.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1180155.5,
              "variance" : 2.712353405E8,
              "n" : 2,
              "max" : 1191801.0,
              "min" : 1168510.0,
              "sum" : 2360311.0,
              "standardDeviation" : 16469.224040615878
            }, {
              "mean" : 1143084.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1143084.0,
              "min" : 1143084.0,
              "sum" : 1143084.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1142391.5,
              "variance" : 1.9151860500000004E7,
              "n" : 2,
              "max" : 1145486.0,
              "min" : 1139297.0,
              "sum" : 2284783.0,
              "standardDeviation" : 4376.283868763543
            }, {
              "mean" : 1141635.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1141635.0,
              "min" : 1141635.0,
              "sum" : 1141635.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1161269.5,
              "variance" : 1.0950520050000001E8,
              "n" : 2,
              "max" : 1168669.0,
              "min" : 1153870.0,
              "sum" : 2322539.0,
              "standardDeviation" : 10464.473254779718
            }, {
              "mean" : 1136823.5,
              "variance" : 1.3462860500000002E7,
              "n" : 2,
              "max" : 1139418.0,
              "min" : 1134229.0,
              "sum" : 2273647.0,
              "standardDeviation" : 3669.1770875769953
            }, {
              "mean" : 1145896.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1145896.0,
              "min" : 1145896.0,
              "sum" : 1145896.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1140546.5,
              "variance" : 6.54711245E7,
              "n" : 2,
              "max" : 1146268.0,
              "min" : 1134825.0,
              "sum" : 2281093.0,
              "standardDeviation" : 8091.4228971176635
            }, {
              "mean" : 1146453.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1146453.0,
              "min" : 1146453.0,
              "sum" : 1146453.0,
              "standardDeviation" : 0.0
            } ],
            "7" : [ {
              "mean" : 1069586.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1069586.0,
              "min" : 1069586.0,
              "sum" : 1069586.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1041432.0,
              "variance" : 2.9074249800000006E8,
              "n" : 2,
              "max" : 1053489.0,
              "min" : 1029375.0,
              "sum" : 2082864.0,
              "standardDeviation" : 17051.17292153241
            }, {
              "mean" : 1010172.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1010172.0,
              "min" : 1010172.0,
              "sum" : 1010172.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1014537.0,
              "variance" : 594050.0,
              "n" : 2,
              "max" : 1015082.0,
              "min" : 1013992.0,
              "sum" : 2029074.0,
              "standardDeviation" : 770.7463914933368
            }, {
              "mean" : 1016201.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1016201.0,
              "min" : 1016201.0,
              "sum" : 1016201.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1021670.5,
              "variance" : 9.894024450000001E7,
              "n" : 2,
              "max" : 1028704.0,
              "min" : 1014637.0,
              "sum" : 2043341.0,
              "standardDeviation" : 9946.871090951165
            }, {
              "mean" : 1015276.0,
              "variance" : 5725728.000000001,
              "n" : 2,
              "max" : 1016968.0,
              "min" : 1013584.0,
              "sum" : 2030552.0,
              "standardDeviation" : 2392.849347535277
            }, {
              "mean" : 1012704.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1012704.0,
              "min" : 1012704.0,
              "sum" : 1012704.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1025247.0,
              "variance" : 2.4793191199999997E8,
              "n" : 2,
              "max" : 1036381.0,
              "min" : 1014113.0,
              "sum" : 2050494.0,
              "standardDeviation" : 15745.85380346204
            }, {
              "mean" : 1020313.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1020313.0,
              "min" : 1020313.0,
              "sum" : 1020313.0,
              "standardDeviation" : 0.0
            } ],
            "8" : [ {
              "mean" : 1161821.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1161821.0,
              "min" : 1161821.0,
              "sum" : 1161821.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1171623.5,
              "variance" : 3.6431102450000006E8,
              "n" : 2,
              "max" : 1185120.0,
              "min" : 1158127.0,
              "sum" : 2343247.0,
              "standardDeviation" : 19086.93334456848
            }, {
              "mean" : 1200257.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1200257.0,
              "min" : 1200257.0,
              "sum" : 1200257.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1156631.0,
              "variance" : 1131008.0,
              "n" : 2,
              "max" : 1157383.0,
              "min" : 1155879.0,
              "sum" : 2313262.0,
              "standardDeviation" : 1063.4885989045674
            }, {
              "mean" : 1172103.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1172103.0,
              "min" : 1172103.0,
              "sum" : 1172103.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1153028.0,
              "variance" : 6.88872962E8,
              "n" : 2,
              "max" : 1171587.0,
              "min" : 1134469.0,
              "sum" : 2306056.0,
              "standardDeviation" : 26246.38950408227
            }, {
              "mean" : 1133786.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1133786.0,
              "min" : 1133786.0,
              "sum" : 1133786.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1174192.5,
              "variance" : 3.0928332049999994E8,
              "n" : 2,
              "max" : 1186628.0,
              "min" : 1161757.0,
              "sum" : 2348385.0,
              "standardDeviation" : 17586.452754890623
            }, {
              "mean" : 1170877.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1170877.0,
              "min" : 1170877.0,
              "sum" : 1170877.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1173994.0,
              "variance" : 9.6771872E7,
              "n" : 2,
              "max" : 1180950.0,
              "min" : 1167038.0,
              "sum" : 2347988.0,
              "standardDeviation" : 9837.26953986725
            } ],
            "9" : [ {
              "mean" : 1049281.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1049281.0,
              "min" : 1049281.0,
              "sum" : 1049281.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1047986.0,
              "variance" : 3484800.0000000005,
              "n" : 2,
              "max" : 1049306.0,
              "min" : 1046666.0,
              "sum" : 2095972.0,
              "standardDeviation" : 1866.7619023324855
            }, {
              "mean" : 1030130.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1030130.0,
              "min" : 1030130.0,
              "sum" : 1030130.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1046925.0,
              "variance" : 2.1292224799999997E8,
              "n" : 2,
              "max" : 1057243.0,
              "min" : 1036607.0,
              "sum" : 2093850.0,
              "standardDeviation" : 14591.855536565594
            }, {
              "mean" : 1055163.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1055163.0,
              "min" : 1055163.0,
              "sum" : 1055163.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1058361.0,
              "variance" : 1634432.0000000002,
              "n" : 2,
              "max" : 1059265.0,
              "min" : 1057457.0,
              "sum" : 2116722.0,
              "standardDeviation" : 1278.449060385278
            }, {
              "mean" : 1060226.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1060226.0,
              "min" : 1060226.0,
              "sum" : 1060226.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1037580.5,
              "variance" : 2.270793605E8,
              "n" : 2,
              "max" : 1048236.0,
              "min" : 1026925.0,
              "sum" : 2075161.0,
              "standardDeviation" : 15069.152613866514
            }, {
              "mean" : 1056916.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1056916.0,
              "min" : 1056916.0,
              "sum" : 1056916.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1060783.0,
              "variance" : 266449.99999999994,
              "n" : 2,
              "max" : 1061148.0,
              "min" : 1060418.0,
              "sum" : 2121566.0,
              "standardDeviation" : 516.1879502661797
            } ],
            "10" : [ {
              "mean" : 1063330.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1063330.0,
              "min" : 1063330.0,
              "sum" : 1063330.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1072033.0,
              "variance" : 3.8684808E7,
              "n" : 2,
              "max" : 1076431.0,
              "min" : 1067635.0,
              "sum" : 2144066.0,
              "standardDeviation" : 6219.711247316872
            }, {
              "mean" : 1065659.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1065659.0,
              "min" : 1065659.0,
              "sum" : 1065659.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1102782.0,
              "variance" : 1.4412624200000003E8,
              "n" : 2,
              "max" : 1111271.0,
              "min" : 1094293.0,
              "sum" : 2205564.0,
              "standardDeviation" : 12005.258930985205
            }, {
              "mean" : 1077170.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1077170.0,
              "min" : 1077170.0,
              "sum" : 1077170.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1086414.0,
              "variance" : 4.230160199999999E7,
              "n" : 2,
              "max" : 1091013.0,
              "min" : 1081815.0,
              "sum" : 2172828.0,
              "standardDeviation" : 6503.968173353864
            }, {
              "mean" : 1078601.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1078601.0,
              "min" : 1078601.0,
              "sum" : 1078601.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1083832.5,
              "variance" : 1.0729660049999999E8,
              "n" : 2,
              "max" : 1091157.0,
              "min" : 1076508.0,
              "sum" : 2167665.0,
              "standardDeviation" : 10358.407237601734
            }, {
              "mean" : 1089064.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1089064.0,
              "min" : 1089064.0,
              "sum" : 1089064.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1077524.0,
              "variance" : 1928648.0000000002,
              "n" : 2,
              "max" : 1078506.0,
              "min" : 1076542.0,
              "sum" : 2155048.0,
              "standardDeviation" : 1388.7577182503794
            } ],
            "11" : [ {
              "mean" : 1141573.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1141573.0,
              "min" : 1141573.0,
              "sum" : 1141573.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1143630.0,
              "variance" : 788768.0,
              "n" : 2,
              "max" : 1144258.0,
              "min" : 1143002.0,
              "sum" : 2287260.0,
              "standardDeviation" : 888.1261171703037
            }, {
              "mean" : 1127801.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1127801.0,
              "min" : 1127801.0,
              "sum" : 1127801.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1156089.0,
              "variance" : 3.4663445E8,
              "n" : 2,
              "max" : 1169254.0,
              "min" : 1142924.0,
              "sum" : 2312178.0,
              "standardDeviation" : 18618.121548641797
            }, {
              "mean" : 1154640.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1154640.0,
              "min" : 1154640.0,
              "sum" : 1154640.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1130937.5,
              "variance" : 1757812.4999999998,
              "n" : 2,
              "max" : 1131875.0,
              "min" : 1130000.0,
              "sum" : 2261875.0,
              "standardDeviation" : 1325.8252147247765
            }, {
              "mean" : 1138946.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1138946.0,
              "min" : 1138946.0,
              "sum" : 1138946.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1150639.5,
              "variance" : 1.420118045E8,
              "n" : 2,
              "max" : 1159066.0,
              "min" : 1142213.0,
              "sum" : 2301279.0,
              "standardDeviation" : 11916.870583336886
            }, {
              "mean" : 1163369.5,
              "variance" : 4.5027004050000006E8,
              "n" : 2,
              "max" : 1178374.0,
              "min" : 1148365.0,
              "sum" : 2326739.0,
              "standardDeviation" : 21219.567396627106
            }, {
              "mean" : 1145445.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1145445.0,
              "min" : 1145445.0,
              "sum" : 1145445.0,
              "standardDeviation" : 0.0
            } ],
            "12" : [ {
              "mean" : 1002308.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1002308.0,
              "min" : 1002308.0,
              "sum" : 1002308.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1018961.0,
              "variance" : 1.1082627200000001E8,
              "n" : 2,
              "max" : 1026405.0,
              "min" : 1011517.0,
              "sum" : 2037922.0,
              "standardDeviation" : 10527.40575830532
            }, {
              "mean" : 1011796.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1011796.0,
              "min" : 1011796.0,
              "sum" : 1011796.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1009559.5,
              "variance" : 1.10779245E7,
              "n" : 2,
              "max" : 1011913.0,
              "min" : 1007206.0,
              "sum" : 2019119.0,
              "standardDeviation" : 3328.351619045079
            }, {
              "mean" : 1016304.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1016304.0,
              "min" : 1016304.0,
              "sum" : 1016304.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1008747.0,
              "variance" : 6941538.000000001,
              "n" : 2,
              "max" : 1010610.0,
              "min" : 1006884.0,
              "sum" : 2017494.0,
              "standardDeviation" : 2634.679866701076
            }, {
              "mean" : 1005844.0,
              "variance" : 6.470668800000001E7,
              "n" : 2,
              "max" : 1011532.0,
              "min" : 1000156.0,
              "sum" : 2011688.0,
              "standardDeviation" : 8044.046742778165
            }, {
              "mean" : 1027713.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1027713.0,
              "min" : 1027713.0,
              "sum" : 1027713.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1013035.5,
              "variance" : 6114504.5,
              "n" : 2,
              "max" : 1014784.0,
              "min" : 1011287.0,
              "sum" : 2026071.0,
              "standardDeviation" : 2472.7524138093568
            }, {
              "mean" : 1009593.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1009593.0,
              "min" : 1009593.0,
              "sum" : 1009593.0,
              "standardDeviation" : 0.0
            } ],
            "13" : [ {
              "mean" : 1105634.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1105634.0,
              "min" : 1105634.0,
              "sum" : 1105634.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1128489.0,
              "variance" : 4.6946608199999994E8,
              "n" : 2,
              "max" : 1143810.0,
              "min" : 1113168.0,
              "sum" : 2256978.0,
              "standardDeviation" : 21667.165989118188
            }, {
              "mean" : 1124723.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1124723.0,
              "min" : 1124723.0,
              "sum" : 1124723.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1129161.5,
              "variance" : 5675080.499999999,
              "n" : 2,
              "max" : 1130846.0,
              "min" : 1127477.0,
              "sum" : 2258323.0,
              "standardDeviation" : 2382.2427458174784
            }, {
              "mean" : 1121120.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1121120.0,
              "min" : 1121120.0,
              "sum" : 1121120.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1119875.0,
              "variance" : 1.2115017799999999E8,
              "n" : 2,
              "max" : 1127658.0,
              "min" : 1112092.0,
              "sum" : 2239750.0,
              "standardDeviation" : 11006.824155949798
            }, {
              "mean" : 1120431.5,
              "variance" : 644112.5,
              "n" : 2,
              "max" : 1120999.0,
              "min" : 1119864.0,
              "sum" : 2240863.0,
              "standardDeviation" : 802.5661966467314
            }, {
              "mean" : 1126454.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1126454.0,
              "min" : 1126454.0,
              "sum" : 1126454.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1118559.5,
              "variance" : 3.51876605E7,
              "n" : 2,
              "max" : 1122754.0,
              "min" : 1114365.0,
              "sum" : 2237119.0,
              "standardDeviation" : 5931.918787373947
            }, {
              "mean" : 1117858.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1117858.0,
              "min" : 1117858.0,
              "sum" : 1117858.0,
              "standardDeviation" : 0.0
            } ],
            "14" : [ {
              "mean" : 1105078.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1105078.0,
              "min" : 1105078.0,
              "sum" : 1105078.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1123222.0,
              "variance" : 3.4510899200000006E8,
              "n" : 2,
              "max" : 1136358.0,
              "min" : 1110086.0,
              "sum" : 2246444.0,
              "standardDeviation" : 18577.109355332977
            }, {
              "mean" : 1100688.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1100688.0,
              "min" : 1100688.0,
              "sum" : 1100688.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1114293.0,
              "variance" : 3.6660904199999994E8,
              "n" : 2,
              "max" : 1127832.0,
              "min" : 1100754.0,
              "sum" : 2228586.0,
              "standardDeviation" : 19147.037420969333
            }, {
              "mean" : 1090348.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1090348.0,
              "min" : 1090348.0,
              "sum" : 1090348.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1094814.5,
              "variance" : 1.11533645E7,
              "n" : 2,
              "max" : 1097176.0,
              "min" : 1092453.0,
              "sum" : 2189629.0,
              "standardDeviation" : 3339.665327544064
            }, {
              "mean" : 1096012.0,
              "variance" : 2.0891647999999996E7,
              "n" : 2,
              "max" : 1099244.0,
              "min" : 1092780.0,
              "sum" : 2192024.0,
              "standardDeviation" : 4570.738233589843
            }, {
              "mean" : 1095075.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1095075.0,
              "min" : 1095075.0,
              "sum" : 1095075.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1103239.5,
              "variance" : 6.121711249999999E7,
              "n" : 2,
              "max" : 1108772.0,
              "min" : 1097707.0,
              "sum" : 2206479.0,
              "standardDeviation" : 7824.136533829148
            }, {
              "mean" : 1100342.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1100342.0,
              "min" : 1100342.0,
              "sum" : 1100342.0,
              "standardDeviation" : 0.0
            } ],
            "15" : [ {
              "mean" : 1061517.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1061517.0,
              "min" : 1061517.0,
              "sum" : 1061517.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1064118.5,
              "variance" : 3.80977205E7,
              "n" : 2,
              "max" : 1068483.0,
              "min" : 1059754.0,
              "sum" : 2128237.0,
              "standardDeviation" : 6172.335092977373
            }, {
              "mean" : 1052450.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1052450.0,
              "min" : 1052450.0,
              "sum" : 1052450.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1059037.0,
              "variance" : 1.7204978E7,
              "n" : 2,
              "max" : 1061970.0,
              "min" : 1056104.0,
              "sum" : 2118074.0,
              "standardDeviation" : 4147.888378440288
            }, {
              "mean" : 1058480.0,
              "variance" : 652082.0000000001,
              "n" : 2,
              "max" : 1059051.0,
              "min" : 1057909.0,
              "sum" : 2116960.0,
              "standardDeviation" : 807.5159441150373
            }, {
              "mean" : 1065015.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1065015.0,
              "min" : 1065015.0,
              "sum" : 1065015.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1075902.5,
              "variance" : 3.257628125E8,
              "n" : 2,
              "max" : 1088665.0,
              "min" : 1063140.0,
              "sum" : 2151805.0,
              "standardDeviation" : 18048.900589786626
            }, {
              "mean" : 1092092.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1092092.0,
              "min" : 1092092.0,
              "sum" : 1092092.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1069857.5,
              "variance" : 3.16728405E7,
              "n" : 2,
              "max" : 1073837.0,
              "min" : 1065878.0,
              "sum" : 2139715.0,
              "standardDeviation" : 5627.862871463732
            }, {
              "mean" : 1061913.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1061913.0,
              "min" : 1061913.0,
              "sum" : 1061913.0,
              "standardDeviation" : 0.0
            } ],
            "16" : [ {
              "mean" : 1038862.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1038862.0,
              "min" : 1038862.0,
              "sum" : 1038862.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1054321.0,
              "variance" : 1.1262258E7,
              "n" : 2,
              "max" : 1056694.0,
              "min" : 1051948.0,
              "sum" : 2108642.0,
              "standardDeviation" : 3355.9287835113546
            }, {
              "mean" : 1063728.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1063728.0,
              "min" : 1063728.0,
              "sum" : 1063728.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1064920.5,
              "variance" : 1.5899160499999998E7,
              "n" : 2,
              "max" : 1067740.0,
              "min" : 1062101.0,
              "sum" : 2129841.0,
              "standardDeviation" : 3987.3751391109413
            }, {
              "mean" : 1070449.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1070449.0,
              "min" : 1070449.0,
              "sum" : 1070449.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1058594.5,
              "variance" : 3.733344050000001E7,
              "n" : 2,
              "max" : 1062915.0,
              "min" : 1054274.0,
              "sum" : 2117189.0,
              "standardDeviation" : 6110.1096962329575
            }, {
              "mean" : 1047097.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1047097.0,
              "min" : 1047097.0,
              "sum" : 1047097.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1066505.0,
              "variance" : 3.3734898E7,
              "n" : 2,
              "max" : 1070612.0,
              "min" : 1062398.0,
              "sum" : 2133010.0,
              "standardDeviation" : 5808.175100666302
            }, {
              "mean" : 1056631.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1056631.0,
              "min" : 1056631.0,
              "sum" : 1056631.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1042359.5,
              "variance" : 17860.5,
              "n" : 2,
              "max" : 1042454.0,
              "min" : 1042265.0,
              "sum" : 2084719.0,
              "standardDeviation" : 133.64318164425748
            } ],
            "17" : [ {
              "mean" : 1069440.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1069440.0,
              "min" : 1069440.0,
              "sum" : 1069440.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1081597.0,
              "variance" : 1.39211298E8,
              "n" : 2,
              "max" : 1089940.0,
              "min" : 1073254.0,
              "sum" : 2163194.0,
              "standardDeviation" : 11798.783750878732
            }, {
              "mean" : 1057746.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1057746.0,
              "min" : 1057746.0,
              "sum" : 1057746.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1066264.5,
              "variance" : 2.78034245E7,
              "n" : 2,
              "max" : 1069993.0,
              "min" : 1062536.0,
              "sum" : 2132529.0,
              "standardDeviation" : 5272.895267308085
            }, {
              "mean" : 1075502.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1075502.0,
              "min" : 1075502.0,
              "sum" : 1075502.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1066585.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1066585.0,
              "min" : 1066585.0,
              "sum" : 1066585.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1067991.0,
              "variance" : 1.6909605E8,
              "n" : 2,
              "max" : 1077186.0,
              "min" : 1058796.0,
              "sum" : 2135982.0,
              "standardDeviation" : 13003.69370602061
            }, {
              "mean" : 1056656.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1056656.0,
              "min" : 1056656.0,
              "sum" : 1056656.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1070161.0,
              "variance" : 4524032.0,
              "n" : 2,
              "max" : 1071665.0,
              "min" : 1068657.0,
              "sum" : 2140322.0,
              "standardDeviation" : 2126.977197809135
            }, {
              "mean" : 1076361.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1076361.0,
              "min" : 1076361.0,
              "sum" : 1076361.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1064014.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1064014.0,
              "min" : 1064014.0,
              "sum" : 1064014.0,
              "standardDeviation" : 0.0
            } ],
            "18" : [ {
              "mean" : 1043713.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1043713.0,
              "min" : 1043713.0,
              "sum" : 1043713.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1044488.5,
              "variance" : 2066544.4999999998,
              "n" : 2,
              "max" : 1045505.0,
              "min" : 1043472.0,
              "sum" : 2088977.0,
              "standardDeviation" : 1437.548086152251
            }, {
              "mean" : 1035410.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1035410.0,
              "min" : 1035410.0,
              "sum" : 1035410.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1028256.5,
              "variance" : 28084.499999999996,
              "n" : 2,
              "max" : 1028375.0,
              "min" : 1028138.0,
              "sum" : 2056513.0,
              "standardDeviation" : 167.58430714121175
            }, {
              "mean" : 1043762.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1043762.0,
              "min" : 1043762.0,
              "sum" : 1043762.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1040776.0,
              "variance" : 1.0910599199999999E8,
              "n" : 2,
              "max" : 1048162.0,
              "min" : 1033390.0,
              "sum" : 2081552.0,
              "standardDeviation" : 10445.38137168768
            }, {
              "mean" : 1041093.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1041093.0,
              "min" : 1041093.0,
              "sum" : 1041093.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1030291.5,
              "variance" : 3310164.5,
              "n" : 2,
              "max" : 1031578.0,
              "min" : 1029005.0,
              "sum" : 2060583.0,
              "standardDeviation" : 1819.3857479929868
            }, {
              "mean" : 1041509.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1041509.0,
              "min" : 1041509.0,
              "sum" : 1041509.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1034050.5,
              "variance" : 233244.49999999997,
              "n" : 2,
              "max" : 1034392.0,
              "min" : 1033709.0,
              "sum" : 2068101.0,
              "standardDeviation" : 482.95393155041194
            } ],
            "19" : [ {
              "mean" : 1059003.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1059003.0,
              "min" : 1059003.0,
              "sum" : 1059003.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1073213.5,
              "variance" : 9570312.5,
              "n" : 2,
              "max" : 1075401.0,
              "min" : 1071026.0,
              "sum" : 2146427.0,
              "standardDeviation" : 3093.5921676911453
            }, {
              "mean" : 1061354.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1061354.0,
              "min" : 1061354.0,
              "sum" : 1061354.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1061684.5,
              "variance" : 2.9314824500000004E7,
              "n" : 2,
              "max" : 1065513.0,
              "min" : 1057856.0,
              "sum" : 2123369.0,
              "standardDeviation" : 5414.316623545395
            }, {
              "mean" : 1062685.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1062685.0,
              "min" : 1062685.0,
              "sum" : 1062685.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1068518.0,
              "variance" : 3.67638728E8,
              "n" : 2,
              "max" : 1082076.0,
              "min" : 1054960.0,
              "sum" : 2137036.0,
              "standardDeviation" : 19173.907478654422
            }, {
              "mean" : 1054892.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1054892.0,
              "min" : 1054892.0,
              "sum" : 1054892.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1048162.5,
              "variance" : 2.19055805E7,
              "n" : 2,
              "max" : 1051472.0,
              "min" : 1044853.0,
              "sum" : 2096325.0,
              "standardDeviation" : 4680.339784673758
            }, {
              "mean" : 1048623.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1048623.0,
              "min" : 1048623.0,
              "sum" : 1048623.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1059250.5,
              "variance" : 1.371333605E8,
              "n" : 2,
              "max" : 1067531.0,
              "min" : 1050970.0,
              "sum" : 2118501.0,
              "standardDeviation" : 11710.395403230414
            } ],
            "20" : [ {
              "mean" : 1076394.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1076394.0,
              "min" : 1076394.0,
              "sum" : 1076394.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1063533.5,
              "variance" : 1.1182601249999999E8,
              "n" : 2,
              "max" : 1071011.0,
              "min" : 1056056.0,
              "sum" : 2127067.0,
              "standardDeviation" : 10574.781912644818
            }, {
              "mean" : 1052365.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1052365.0,
              "min" : 1052365.0,
              "sum" : 1052365.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1075521.0,
              "variance" : 1748450.0,
              "n" : 2,
              "max" : 1076456.0,
              "min" : 1074586.0,
              "sum" : 2151042.0,
              "standardDeviation" : 1322.2896808188439
            }, {
              "mean" : 1075376.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1075376.0,
              "min" : 1075376.0,
              "sum" : 1075376.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1064577.5,
              "variance" : 3962112.5,
              "n" : 2,
              "max" : 1065985.0,
              "min" : 1063170.0,
              "sum" : 2129155.0,
              "standardDeviation" : 1990.5055890401313
            }, {
              "mean" : 1076041.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1076041.0,
              "min" : 1076041.0,
              "sum" : 1076041.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1066514.0,
              "variance" : 2.43939872E8,
              "n" : 2,
              "max" : 1077558.0,
              "min" : 1055470.0,
              "sum" : 2133028.0,
              "standardDeviation" : 15618.574582848461
            }, {
              "mean" : 1048572.5,
              "variance" : 7.42371125E7,
              "n" : 2,
              "max" : 1054665.0,
              "min" : 1042480.0,
              "sum" : 2097145.0,
              "standardDeviation" : 8616.096128758081
            }, {
              "mean" : 1057439.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1057439.0,
              "min" : 1057439.0,
              "sum" : 1057439.0,
              "standardDeviation" : 0.0
            } ],
            "21" : [ {
              "mean" : 1140265.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1140265.0,
              "min" : 1140265.0,
              "sum" : 1140265.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1131477.5,
              "variance" : 2.343396005E8,
              "n" : 2,
              "max" : 1142302.0,
              "min" : 1120653.0,
              "sum" : 2262955.0,
              "standardDeviation" : 15308.154705907567
            }, {
              "mean" : 1089475.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1089475.0,
              "min" : 1089475.0,
              "sum" : 1089475.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1108417.5,
              "variance" : 1.1486424500000002E7,
              "n" : 2,
              "max" : 1110814.0,
              "min" : 1106021.0,
              "sum" : 2216835.0,
              "standardDeviation" : 3389.1628022271225
            }, {
              "mean" : 1089208.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1089208.0,
              "min" : 1089208.0,
              "sum" : 1089208.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1096292.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1096292.0,
              "min" : 1096292.0,
              "sum" : 1096292.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1107952.0,
              "variance" : 5.0041824800000006E8,
              "n" : 2,
              "max" : 1123770.0,
              "min" : 1092134.0,
              "sum" : 2215904.0,
              "standardDeviation" : 22370.03012961762
            }, {
              "mean" : 1097949.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1097949.0,
              "min" : 1097949.0,
              "sum" : 1097949.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1116676.5,
              "variance" : 2.6273196449999997E8,
              "n" : 2,
              "max" : 1128138.0,
              "min" : 1105215.0,
              "sum" : 2233353.0,
              "standardDeviation" : 16209.008745139228
            }, {
              "mean" : 1115131.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1115131.0,
              "min" : 1115131.0,
              "sum" : 1115131.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1169507.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1169507.0,
              "min" : 1169507.0,
              "sum" : 1169507.0,
              "standardDeviation" : 0.0
            } ],
            "22" : [ {
              "mean" : 1144473.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1144473.0,
              "min" : 1144473.0,
              "sum" : 1144473.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1153658.5,
              "variance" : 8.62641125E7,
              "n" : 2,
              "max" : 1160226.0,
              "min" : 1147091.0,
              "sum" : 2307317.0,
              "standardDeviation" : 9287.847570885302
            }, {
              "mean" : 1165602.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1165602.0,
              "min" : 1165602.0,
              "sum" : 1165602.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1148226.0,
              "variance" : 1663488.0,
              "n" : 2,
              "max" : 1149138.0,
              "min" : 1147314.0,
              "sum" : 2296452.0,
              "standardDeviation" : 1289.7627688842626
            }, {
              "mean" : 1140732.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1140732.0,
              "min" : 1140732.0,
              "sum" : 1140732.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1152749.5,
              "variance" : 1.2316651250000001E8,
              "n" : 2,
              "max" : 1160597.0,
              "min" : 1144902.0,
              "sum" : 2305499.0,
              "standardDeviation" : 11098.040930722864
            }, {
              "mean" : 1147971.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1147971.0,
              "min" : 1147971.0,
              "sum" : 1147971.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1160079.0,
              "variance" : 1.2630337999999998E7,
              "n" : 2,
              "max" : 1162592.0,
              "min" : 1157566.0,
              "sum" : 2320158.0,
              "standardDeviation" : 3553.9186822435877
            }, {
              "mean" : 1171653.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1171653.0,
              "min" : 1171653.0,
              "sum" : 1171653.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1143387.0,
              "variance" : 4.062609800000001E7,
              "n" : 2,
              "max" : 1147894.0,
              "min" : 1138880.0,
              "sum" : 2286774.0,
              "standardDeviation" : 6373.86052561554
            } ],
            "23" : [ {
              "mean" : 1093221.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1093221.0,
              "min" : 1093221.0,
              "sum" : 1093221.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1107599.5,
              "variance" : 4.229686125E8,
              "n" : 2,
              "max" : 1122142.0,
              "min" : 1093057.0,
              "sum" : 2215199.0,
              "standardDeviation" : 20566.200730810735
            }, {
              "mean" : 1071529.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1071529.0,
              "min" : 1071529.0,
              "sum" : 1071529.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1092006.0,
              "variance" : 3.4163378E7,
              "n" : 2,
              "max" : 1096139.0,
              "min" : 1087873.0,
              "sum" : 2184012.0,
              "standardDeviation" : 5844.944653288002
            }, {
              "mean" : 1082688.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1082688.0,
              "min" : 1082688.0,
              "sum" : 1082688.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1081110.0,
              "variance" : 2.2957087999999996E7,
              "n" : 2,
              "max" : 1084498.0,
              "min" : 1077722.0,
              "sum" : 2162220.0,
              "standardDeviation" : 4791.355549320046
            }, {
              "mean" : 1069598.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1069598.0,
              "min" : 1069598.0,
              "sum" : 1069598.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1097019.0,
              "variance" : 1.8617202E7,
              "n" : 2,
              "max" : 1100070.0,
              "min" : 1093968.0,
              "sum" : 2194038.0,
              "standardDeviation" : 4314.765578800313
            }, {
              "mean" : 1093450.0,
              "variance" : 4885937.999999999,
              "n" : 2,
              "max" : 1095013.0,
              "min" : 1091887.0,
              "sum" : 2186900.0,
              "standardDeviation" : 2210.4157979891474
            }, {
              "mean" : 1089397.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1089397.0,
              "min" : 1089397.0,
              "sum" : 1089397.0,
              "standardDeviation" : 0.0
            } ],
            "24" : [ {
              "mean" : 1030688.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1030688.0,
              "min" : 1030688.0,
              "sum" : 1030688.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1047444.0,
              "variance" : 6251648.000000001,
              "n" : 2,
              "max" : 1049212.0,
              "min" : 1045676.0,
              "sum" : 2094888.0,
              "standardDeviation" : 2500.3295782756322
            }, {
              "mean" : 1022307.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1022307.0,
              "min" : 1022307.0,
              "sum" : 1022307.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1021791.0,
              "variance" : 1755938.0,
              "n" : 2,
              "max" : 1022728.0,
              "min" : 1020854.0,
              "sum" : 2043582.0,
              "standardDeviation" : 1325.11810794359
            }, {
              "mean" : 1023648.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1023648.0,
              "min" : 1023648.0,
              "sum" : 1023648.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1022089.5,
              "variance" : 1.05846005E7,
              "n" : 2,
              "max" : 1024390.0,
              "min" : 1019789.0,
              "sum" : 2044179.0,
              "standardDeviation" : 3253.398300239305
            }, {
              "mean" : 1019169.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1019169.0,
              "min" : 1019169.0,
              "sum" : 1019169.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1031636.5,
              "variance" : 4.122181845E8,
              "n" : 2,
              "max" : 1045993.0,
              "min" : 1017280.0,
              "sum" : 2063273.0,
              "standardDeviation" : 20303.15700820934
            }, {
              "mean" : 1020909.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1020909.0,
              "min" : 1020909.0,
              "sum" : 1020909.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1022284.0,
              "variance" : 2.1008162E7,
              "n" : 2,
              "max" : 1025525.0,
              "min" : 1019043.0,
              "sum" : 2044568.0,
              "standardDeviation" : 4583.466155651201
            } ],
            "25" : [ {
              "mean" : 1003531.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1003531.0,
              "min" : 1003531.0,
              "sum" : 1003531.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1000173.0,
              "variance" : 5.228553800000001E7,
              "n" : 2,
              "max" : 1005286.0,
              "min" : 995060.0,
              "sum" : 2000346.0,
              "standardDeviation" : 7230.873944413635
            }, {
              "mean" : 1000321.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1000321.0,
              "min" : 1000321.0,
              "sum" : 1000321.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1005057.5,
              "variance" : 3.82550045E7,
              "n" : 2,
              "max" : 1009431.0,
              "min" : 1000684.0,
              "sum" : 2010115.0,
              "standardDeviation" : 6185.0630150387315
            }, {
              "mean" : 1011096.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1011096.0,
              "min" : 1011096.0,
              "sum" : 1011096.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1002829.5,
              "variance" : 493024.5,
              "n" : 2,
              "max" : 1003326.0,
              "min" : 1002333.0,
              "sum" : 2005659.0,
              "standardDeviation" : 702.1570337182417
            }, {
              "mean" : 1003277.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1003277.0,
              "min" : 1003277.0,
              "sum" : 1003277.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1005535.5,
              "variance" : 2.08722605E7,
              "n" : 2,
              "max" : 1008766.0,
              "min" : 1002305.0,
              "sum" : 2011071.0,
              "standardDeviation" : 4568.616913246284
            }, {
              "mean" : 1007402.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1007402.0,
              "min" : 1007402.0,
              "sum" : 1007402.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1007282.0,
              "variance" : 112337.99999999999,
              "n" : 2,
              "max" : 1007519.0,
              "min" : 1007045.0,
              "sum" : 2014564.0,
              "standardDeviation" : 335.1686142824235
            } ],
            "26" : [ {
              "mean" : 1029021.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1029021.0,
              "min" : 1029021.0,
              "sum" : 1029021.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1055347.0,
              "variance" : 2.29022802E8,
              "n" : 2,
              "max" : 1066048.0,
              "min" : 1044646.0,
              "sum" : 2110694.0,
              "standardDeviation" : 15133.49933095449
            }, {
              "mean" : 1085909.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1085909.0,
              "min" : 1085909.0,
              "sum" : 1085909.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1061558.5,
              "variance" : 6368880.5,
              "n" : 2,
              "max" : 1063343.0,
              "min" : 1059774.0,
              "sum" : 2123117.0,
              "standardDeviation" : 2523.664102054788
            }, {
              "mean" : 1055985.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1055985.0,
              "min" : 1055985.0,
              "sum" : 1055985.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1043457.0,
              "variance" : 1.3292168E7,
              "n" : 2,
              "max" : 1046035.0,
              "min" : 1040879.0,
              "sum" : 2086914.0,
              "standardDeviation" : 3645.842563797839
            }, {
              "mean" : 1064990.0,
              "variance" : 1.1175125000000001E8,
              "n" : 2,
              "max" : 1072465.0,
              "min" : 1057515.0,
              "sum" : 2129980.0,
              "standardDeviation" : 10571.246378738886
            }, {
              "mean" : 1054939.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1054939.0,
              "min" : 1054939.0,
              "sum" : 1054939.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1059035.0,
              "variance" : 3.4442625800000006E8,
              "n" : 2,
              "max" : 1072158.0,
              "min" : 1045912.0,
              "sum" : 2118070.0,
              "standardDeviation" : 18558.724579022128
            }, {
              "mean" : 1062842.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1062842.0,
              "min" : 1062842.0,
              "sum" : 1062842.0,
              "standardDeviation" : 0.0
            } ],
            "27" : [ {
              "mean" : 1018962.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1018962.0,
              "min" : 1018962.0,
              "sum" : 1018962.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1024915.5,
              "variance" : 2569644.5000000005,
              "n" : 2,
              "max" : 1026049.0,
              "min" : 1023782.0,
              "sum" : 2049831.0,
              "standardDeviation" : 1603.0110729499033
            }, {
              "mean" : 1.3770535E7,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1.3770535E7,
              "min" : 1.3770535E7,
              "sum" : 1.3770535E7,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1026958.5,
              "variance" : 1193512.5000000002,
              "n" : 2,
              "max" : 1027731.0,
              "min" : 1026186.0,
              "sum" : 2053917.0,
              "standardDeviation" : 1092.479976933216
            }, {
              "mean" : 1035826.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1035826.0,
              "min" : 1035826.0,
              "sum" : 1035826.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1019516.5,
              "variance" : 6.505982450000001E7,
              "n" : 2,
              "max" : 1025220.0,
              "min" : 1013813.0,
              "sum" : 2039033.0,
              "standardDeviation" : 8065.967052994948
            }, {
              "mean" : 1008503.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1008503.0,
              "min" : 1008503.0,
              "sum" : 1008503.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1034143.5,
              "variance" : 1310580.5,
              "n" : 2,
              "max" : 1034953.0,
              "min" : 1033334.0,
              "sum" : 2068287.0,
              "standardDeviation" : 1144.8058787410205
            }, {
              "mean" : 1024249.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1024249.0,
              "min" : 1024249.0,
              "sum" : 1024249.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1021682.5,
              "variance" : 1.01205005E7,
              "n" : 2,
              "max" : 1023932.0,
              "min" : 1019433.0,
              "sum" : 2043365.0,
              "standardDeviation" : 3181.2734085582774
            } ],
            "28" : [ {
              "mean" : 1075266.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1075266.0,
              "min" : 1075266.0,
              "sum" : 1075266.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1037519.0,
              "variance" : 50562.0,
              "n" : 2,
              "max" : 1037678.0,
              "min" : 1037360.0,
              "sum" : 2075038.0,
              "standardDeviation" : 224.8599564173221
            }, {
              "mean" : 1053891.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1053891.0,
              "min" : 1053891.0,
              "sum" : 1053891.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1049331.0,
              "variance" : 1.0116002E7,
              "n" : 2,
              "max" : 1051580.0,
              "min" : 1047082.0,
              "sum" : 2098662.0,
              "standardDeviation" : 3180.5663017770908
            }, {
              "mean" : 1052643.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1052643.0,
              "min" : 1052643.0,
              "sum" : 1052643.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1045204.5,
              "variance" : 1.1505604500000002E7,
              "n" : 2,
              "max" : 1047603.0,
              "min" : 1042806.0,
              "sum" : 2090409.0,
              "standardDeviation" : 3391.9912293518687
            }, {
              "mean" : 1045665.0,
              "variance" : 8.413639200000001E7,
              "n" : 2,
              "max" : 1052151.0,
              "min" : 1039179.0,
              "sum" : 2091330.0,
              "standardDeviation" : 9172.589165551895
            }, {
              "mean" : 1048425.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1048425.0,
              "min" : 1048425.0,
              "sum" : 1048425.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1058460.5,
              "variance" : 1.27967405E7,
              "n" : 2,
              "max" : 1060990.0,
              "min" : 1055931.0,
              "sum" : 2116921.0,
              "standardDeviation" : 3577.253206022744
            }, {
              "mean" : 1046539.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1046539.0,
              "min" : 1046539.0,
              "sum" : 1046539.0,
              "standardDeviation" : 0.0
            } ],
            "29" : [ {
              "mean" : 1055082.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1055082.0,
              "min" : 1055082.0,
              "sum" : 1055082.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1062337.0,
              "variance" : 2.6055879200000003E8,
              "n" : 2,
              "max" : 1073751.0,
              "min" : 1050923.0,
              "sum" : 2124674.0,
              "standardDeviation" : 16141.833600926508
            }, {
              "mean" : 1045696.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1045696.0,
              "min" : 1045696.0,
              "sum" : 1045696.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1061796.5,
              "variance" : 4.907432449999999E7,
              "n" : 2,
              "max" : 1066750.0,
              "min" : 1056843.0,
              "sum" : 2123593.0,
              "standardDeviation" : 7005.306881215126
            }, {
              "mean" : 1036554.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1036554.0,
              "min" : 1036554.0,
              "sum" : 1036554.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1061109.0,
              "variance" : 5.333378E8,
              "n" : 2,
              "max" : 1077439.0,
              "min" : 1044779.0,
              "sum" : 2122218.0,
              "standardDeviation" : 23094.10747355264
            }, {
              "mean" : 1046446.0,
              "variance" : 1.0709192E7,
              "n" : 2,
              "max" : 1048760.0,
              "min" : 1044132.0,
              "sum" : 2092892.0,
              "standardDeviation" : 3272.490183331342
            }, {
              "mean" : 1036620.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1036620.0,
              "min" : 1036620.0,
              "sum" : 1036620.0,
              "standardDeviation" : 0.0
            }, {
              "mean" : 1050398.5,
              "variance" : 6.82462445E7,
              "n" : 2,
              "max" : 1056240.0,
              "min" : 1044557.0,
              "sum" : 2100797.0,
              "standardDeviation" : 8261.128524602434
            }, {
              "mean" : 1040169.0,
              "variance" : 0.0,
              "n" : 1,
              "max" : 1040169.0,
              "min" : 1040169.0,
              "sum" : 1040169.0,
              "standardDeviation" : 0.0
            } ]
          }
        },
        "children" : [ ]
      } ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 343},
   width = 1689- margin.right - margin.left,
   height = 245 - margin.top - margin.bottom;
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
    "meanOld" : 4156609.4996479168,
    "meanCurrent" : 1156401.8503999999,
    "deviationOld" : 43192.47039041626,
    "deviationCurrent" : 15544.34183788379,
    "vms" : 30,
    "callsOld" : 300,
    "calls" : 300,
    "tvalue" : 357.97888202299407,
    "mannWhitneyUStatistic" : 2.8719490663203402E-11
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 1166276.3708125, 1151517.559375, 1175168.858875, 1141093.7334999999, 1131445.9949375, 1141490.1875625001, 1152411.1846249998, 1149073.7453125, 1131966.9585, 1141248.6228750001, 1168933.0844375, 1151923.8039374999, 1164496.0728749998, 1170613.570875, 1137841.1495625, 1146105.5731875, 1158856.197625, 1149874.4168125, 1138799.9873125001, 1155325.6494375002, 1163311.6366875, 1151246.600375, 1155515.0855, 1167669.3310625, 1196550.8051875, 1190202.10075, 1164091.2615, 1151158.5635624998, 1155354.3326875, 1172493.0722500002 ],
  "valuesPredecessor" : [ 4116215.2538125, 4156955.3239374994, 4132007.46375, 4153488.0813125004, 4153664.854875, 4149700.304375, 4118243.3883750006, 4126133.1253750003, 4161532.3606875, 4270186.823687499, 4165066.4091875, 4157883.6451875, 4126214.1668125, 4114629.2945000003, 4115737.2126249997, 4150928.4085000004, 4289867.362, 4131847.78625, 4167933.3441875, 4149448.2026250004, 4145165.4177499996, 4181003.7944999994, 4172609.4660624997, 4120323.6615625, 4232175.572375, 4138494.9732500003, 4165083.809, 4128041.9068124997, 4199793.93075, 4107909.6453125007 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 1448148.85125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1448148.85125,
        "min" : 1448148.85125,
        "sum" : 2.317038162E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1357569.874375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1357569.874375,
        "min" : 1357569.874375,
        "sum" : 2.172111799E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1273052.190625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1273052.190625,
        "min" : 1273052.190625,
        "sum" : 2.036883505E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1015485.561875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1015485.561875,
        "min" : 1015485.561875,
        "sum" : 1.624776899E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1010009.44,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1010009.44,
        "min" : 1010009.44,
        "sum" : 1.616015104E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1096693.655625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1096693.655625,
        "min" : 1096693.655625,
        "sum" : 1.7547098489999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1047262.74625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1047262.74625,
        "min" : 1047262.74625,
        "sum" : 1.675620394E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1208000.945625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1208000.945625,
        "min" : 1208000.945625,
        "sum" : 1.932801513E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1015275.86,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1015275.86,
        "min" : 1015275.86,
        "sum" : 1.624441376E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1161617.24125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1161617.24125,
        "min" : 1161617.24125,
        "sum" : 1.858587586E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 1785557.66875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1785557.66875,
        "min" : 1785557.66875,
        "sum" : 2.85689227E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1300421.260625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1300421.260625,
        "min" : 1300421.260625,
        "sum" : 2.0806740170000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1052136.026875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1052136.026875,
        "min" : 1052136.026875,
        "sum" : 1.683417643E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1032238.5725,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1032238.5725,
        "min" : 1032238.5725,
        "sum" : 1.651581716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1092220.878125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1092220.878125,
        "min" : 1092220.878125,
        "sum" : 1.747553405E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1005519.321875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1005519.321875,
        "min" : 1005519.321875,
        "sum" : 1.608830915E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1005520.1225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1005520.1225,
        "min" : 1005520.1225,
        "sum" : 1.608832196E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1060429.05875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1060429.05875,
        "min" : 1060429.05875,
        "sum" : 1.6966864940000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1150621.556875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1150621.556875,
        "min" : 1150621.556875,
        "sum" : 1.840994491E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1068592.0275,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1068592.0275,
        "min" : 1068592.0275,
        "sum" : 1.7097472440000002E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 1820515.1425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1820515.1425,
        "min" : 1820515.1425,
        "sum" : 2.912824228E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222434.229375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1222434.229375,
        "min" : 1222434.229375,
        "sum" : 1.9558947670000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1051057.821875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1051057.821875,
        "min" : 1051057.821875,
        "sum" : 1.6816925149999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1057344.176875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1057344.176875,
        "min" : 1057344.176875,
        "sum" : 1.6917506829999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1049034.39375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1049034.39375,
        "min" : 1049034.39375,
        "sum" : 1.67845503E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1027006.405625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1027006.405625,
        "min" : 1027006.405625,
        "sum" : 1.643210249E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1054115.989375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1054115.989375,
        "min" : 1054115.989375,
        "sum" : 1.6865855829999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1056921.30875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1056921.30875,
        "min" : 1056921.30875,
        "sum" : 1.6910740940000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1165822.555625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1165822.555625,
        "min" : 1165822.555625,
        "sum" : 1.865316089E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 994492.144375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 994492.144375,
        "min" : 994492.144375,
        "sum" : 1.591187431E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 1814755.2775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1814755.2775,
        "min" : 1814755.2775,
        "sum" : 2.903608444E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1362704.72875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1362704.72875,
        "min" : 1362704.72875,
        "sum" : 2.180327566E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1116924.860625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1116924.860625,
        "min" : 1116924.860625,
        "sum" : 1.787079777E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1054941.811875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1054941.811875,
        "min" : 1054941.811875,
        "sum" : 1.6879068989999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1056088.22375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1056088.22375,
        "min" : 1056088.22375,
        "sum" : 1.6897411579999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1093381.08875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1093381.08875,
        "min" : 1093381.08875,
        "sum" : 1.7494097420000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1056165.22875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1056165.22875,
        "min" : 1056165.22875,
        "sum" : 1.689864366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1071638.5275,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1071638.5275,
        "min" : 1071638.5275,
        "sum" : 1.7146216440000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1078590.84,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1078590.84,
        "min" : 1078590.84,
        "sum" : 1.7257453440000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1196830.42,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1196830.42,
        "min" : 1196830.42,
        "sum" : 1.914928672E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 1761103.740625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1761103.740625,
        "min" : 1761103.740625,
        "sum" : 2.817765985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1330807.14875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1330807.14875,
        "min" : 1330807.14875,
        "sum" : 2.129291438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1086240.140625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1086240.140625,
        "min" : 1086240.140625,
        "sum" : 1.737984225E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1030867.9625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1030867.9625,
        "min" : 1030867.9625,
        "sum" : 1.64938874E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1004461.07875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1004461.07875,
        "min" : 1004461.07875,
        "sum" : 1.607137726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 990774.93375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 990774.93375,
        "min" : 990774.93375,
        "sum" : 1.585239894E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1071574.085,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1071574.085,
        "min" : 1071574.085,
        "sum" : 1.714518536E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1022022.994375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1022022.994375,
        "min" : 1022022.994375,
        "sum" : 1.635236791E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1040848.10125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1040848.10125,
        "min" : 1040848.10125,
        "sum" : 1.665356962E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1039711.31,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1039711.31,
        "min" : 1039711.31,
        "sum" : 1.663538096E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 1868130.635625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1868130.635625,
        "min" : 1868130.635625,
        "sum" : 2.989009017E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1295461.7575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1295461.7575,
        "min" : 1295461.7575,
        "sum" : 2.072738812E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1036872.080625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1036872.080625,
        "min" : 1036872.080625,
        "sum" : 1.658995329E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1068667.129375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1068667.129375,
        "min" : 1068667.129375,
        "sum" : 1.709867407E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1092788.803125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1092788.803125,
        "min" : 1092788.803125,
        "sum" : 1.7484620850000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1011687.3225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1011687.3225,
        "min" : 1011687.3225,
        "sum" : 1.618699716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1025747.534375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1025747.534375,
        "min" : 1025747.534375,
        "sum" : 1.641196055E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193342.5175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1193342.5175,
        "min" : 1193342.5175,
        "sum" : 1.909348028E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1032198.83375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1032198.83375,
        "min" : 1032198.83375,
        "sum" : 1.651518134E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1081239.094375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1081239.094375,
        "min" : 1081239.094375,
        "sum" : 1.7299825510000002E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 1780465.715625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1780465.715625,
        "min" : 1780465.715625,
        "sum" : 2.848745145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1326928.735,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1326928.735,
        "min" : 1326928.735,
        "sum" : 2.1230859760000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1084347.38125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1084347.38125,
        "min" : 1084347.38125,
        "sum" : 1.7349558100000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1011982.67625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1011982.67625,
        "min" : 1011982.67625,
        "sum" : 1.619172282E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1020717.910625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1020717.910625,
        "min" : 1020717.910625,
        "sum" : 1.633148657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1087702.06125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1087702.06125,
        "min" : 1087702.06125,
        "sum" : 1.740323298E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1001277.571875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1001277.571875,
        "min" : 1001277.571875,
        "sum" : 1.602044115E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 975847.28,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 975847.28,
        "min" : 975847.28,
        "sum" : 1.561355648E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1022735.209375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1022735.209375,
        "min" : 1022735.209375,
        "sum" : 1.636376335E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200461.4625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1200461.4625,
        "min" : 1200461.4625,
        "sum" : 1.9207383399999998E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 1624299.159375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1624299.159375,
        "min" : 1624299.159375,
        "sum" : 2.598878655E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1211083.346875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1211083.346875,
        "min" : 1211083.346875,
        "sum" : 1.937733355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1067709.386875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1067709.386875,
        "min" : 1067709.386875,
        "sum" : 1.7083350190000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1156432.86,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1156432.86,
        "min" : 1156432.86,
        "sum" : 1.8502925760000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1111797.505625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1111797.505625,
        "min" : 1111797.505625,
        "sum" : 1.778876009E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 978078.17625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 978078.17625,
        "min" : 978078.17625,
        "sum" : 1.564925082E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1016151.40625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1016151.40625,
        "min" : 1016151.40625,
        "sum" : 1.62584225E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193069.8675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1193069.8675,
        "min" : 1193069.8675,
        "sum" : 1.908911788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1033497.665,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1033497.665,
        "min" : 1033497.665,
        "sum" : 1.653596264E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1123056.22,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1123056.22,
        "min" : 1123056.22,
        "sum" : 1.796889952E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 1750777.379375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1750777.379375,
        "min" : 1750777.379375,
        "sum" : 2.801243807E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1396222.796875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1396222.796875,
        "min" : 1396222.796875,
        "sum" : 2.233956475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1037622.173125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1037622.173125,
        "min" : 1037622.173125,
        "sum" : 1.660195477E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1027456.2425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1027456.2425,
        "min" : 1027456.2425,
        "sum" : 1.643929988E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1067647.4075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1067647.4075,
        "min" : 1067647.4075,
        "sum" : 1.708235852E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1066459.716875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1066459.716875,
        "min" : 1066459.716875,
        "sum" : 1.706335547E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 984833.111875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 984833.111875,
        "min" : 984833.111875,
        "sum" : 1.575732979E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1046249.525625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1046249.525625,
        "min" : 1046249.525625,
        "sum" : 1.673999241E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1183380.914375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1183380.914375,
        "min" : 1183380.914375,
        "sum" : 1.893409463E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1116044.0425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1116044.0425,
        "min" : 1116044.0425,
        "sum" : 1.785670468E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 1737516.8,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1737516.8,
        "min" : 1737516.8,
        "sum" : 2.78002688E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1106003.3525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1106003.3525,
        "min" : 1106003.3525,
        "sum" : 1.769605364E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1110962.330625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1110962.330625,
        "min" : 1110962.330625,
        "sum" : 1.777539729E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212860.684375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1212860.684375,
        "min" : 1212860.684375,
        "sum" : 1.940577095E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 999916.209375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 999916.209375,
        "min" : 999916.209375,
        "sum" : 1.599865935E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1003294.255,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1003294.255,
        "min" : 1003294.255,
        "sum" : 1.605270808E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1045713.2075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1045713.2075,
        "min" : 1045713.2075,
        "sum" : 1.673141132E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1045996.37625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1045996.37625,
        "min" : 1045996.37625,
        "sum" : 1.673594202E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1056348.713125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1056348.713125,
        "min" : 1056348.713125,
        "sum" : 1.690157941E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1192973.706875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1192973.706875,
        "min" : 1192973.706875,
        "sum" : 1.9087579309999998E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 1753342.863125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1753342.863125,
        "min" : 1753342.863125,
        "sum" : 2.805348581E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1464116.706875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1464116.706875,
        "min" : 1464116.706875,
        "sum" : 2.342586731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1063475.1675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1063475.1675,
        "min" : 1063475.1675,
        "sum" : 1.701560268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1023414.03,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1023414.03,
        "min" : 1023414.03,
        "sum" : 1.637462448E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1019437.380625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1019437.380625,
        "min" : 1019437.380625,
        "sum" : 1.631099809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1096581.754375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1096581.754375,
        "min" : 1096581.754375,
        "sum" : 1.754530807E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1016598.08125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1016598.08125,
        "min" : 1016598.08125,
        "sum" : 1.62655693E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1005270.540625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1005270.540625,
        "min" : 1005270.540625,
        "sum" : 1.608432865E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1249120.800625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1249120.800625,
        "min" : 1249120.800625,
        "sum" : 1.9985932809999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 997973.519375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 997973.519375,
        "min" : 997973.519375,
        "sum" : 1.596757631E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 1671986.293125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1671986.293125,
        "min" : 1671986.293125,
        "sum" : 2.675178069E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1317251.09625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1317251.09625,
        "min" : 1317251.09625,
        "sum" : 2.107601754E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1049752.93625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1049752.93625,
        "min" : 1049752.93625,
        "sum" : 1.679604698E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1048396.191875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1048396.191875,
        "min" : 1048396.191875,
        "sum" : 1.677433907E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1036500.795625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1036500.795625,
        "min" : 1036500.795625,
        "sum" : 1.658401273E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1022718.075625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1022718.075625,
        "min" : 1022718.075625,
        "sum" : 1.636348921E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1034669.796875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1034669.796875,
        "min" : 1034669.796875,
        "sum" : 1.655471675E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1069832.090625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1069832.090625,
        "min" : 1069832.090625,
        "sum" : 1.711731345E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1127505.02,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1127505.02,
        "min" : 1127505.02,
        "sum" : 1.804008032E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1009387.576875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1009387.576875,
        "min" : 1009387.576875,
        "sum" : 1.615020123E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 1738457.576875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1738457.576875,
        "min" : 1738457.576875,
        "sum" : 2.781532123E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1298067.026875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1298067.026875,
        "min" : 1298067.026875,
        "sum" : 2.076907243E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1057139.464375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1057139.464375,
        "min" : 1057139.464375,
        "sum" : 1.691423143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1038830.640625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1038830.640625,
        "min" : 1038830.640625,
        "sum" : 1.662129025E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1029594.47125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1029594.47125,
        "min" : 1029594.47125,
        "sum" : 1.647351154E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1107462.760625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1107462.760625,
        "min" : 1107462.760625,
        "sum" : 1.7719404170000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 992033.961875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 992033.961875,
        "min" : 992033.961875,
        "sum" : 1.587254339E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1041893.300625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1041893.300625,
        "min" : 1041893.300625,
        "sum" : 1.667029281E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222838.13375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1222838.13375,
        "min" : 1222838.13375,
        "sum" : 1.956541014E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 997794.509375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 997794.509375,
        "min" : 997794.509375,
        "sum" : 1.596471215E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 1689688.919375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1689688.919375,
        "min" : 1689688.919375,
        "sum" : 2.703502271E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1135638.806875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1135638.806875,
        "min" : 1135638.806875,
        "sum" : 1.817022091E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1091890.065625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1091890.065625,
        "min" : 1091890.065625,
        "sum" : 1.747024105E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1182807.721875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1182807.721875,
        "min" : 1182807.721875,
        "sum" : 1.892492355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1004365.861875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1004365.861875,
        "min" : 1004365.861875,
        "sum" : 1.606985379E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 982298.11,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 982298.11,
        "min" : 982298.11,
        "sum" : 1.571676976E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1098906.98875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1098906.98875,
        "min" : 1098906.98875,
        "sum" : 1.758251182E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1054173.883125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1054173.883125,
        "min" : 1054173.883125,
        "sum" : 1.686678213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1063288.971875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1063288.971875,
        "min" : 1063288.971875,
        "sum" : 1.701262355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1107878.005625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1107878.005625,
        "min" : 1107878.005625,
        "sum" : 1.772604809E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 1664268.695,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1664268.695,
        "min" : 1664268.695,
        "sum" : 2.662829912E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1282685.850625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1282685.850625,
        "min" : 1282685.850625,
        "sum" : 2.052297361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1073949.803125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1073949.803125,
        "min" : 1073949.803125,
        "sum" : 1.7183196850000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1017437.148125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1017437.148125,
        "min" : 1017437.148125,
        "sum" : 1.627899437E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1032855.889375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1032855.889375,
        "min" : 1032855.889375,
        "sum" : 1.652569423E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1058303.11,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1058303.11,
        "min" : 1058303.11,
        "sum" : 1.6932849760000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 987537.660625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 987537.660625,
        "min" : 987537.660625,
        "sum" : 1.580060257E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1065721.49375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1065721.49375,
        "min" : 1065721.49375,
        "sum" : 1.7051543899999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1171910.588125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1171910.588125,
        "min" : 1171910.588125,
        "sum" : 1.875056941E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1060231.636875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1060231.636875,
        "min" : 1060231.636875,
        "sum" : 1.6963706190000002E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 1754967.67125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1754967.67125,
        "min" : 1754967.67125,
        "sum" : 2.807948274E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1318012.7975,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1318012.7975,
        "min" : 1318012.7975,
        "sum" : 2.1088204760000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1096814.054375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1096814.054375,
        "min" : 1096814.054375,
        "sum" : 1.754902487E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1017883.70125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1017883.70125,
        "min" : 1017883.70125,
        "sum" : 1.628613922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1011996.708125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1011996.708125,
        "min" : 1011996.708125,
        "sum" : 1.619194733E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1091737.20625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1091737.20625,
        "min" : 1091737.20625,
        "sum" : 1.74677953E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 984509.170625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 984509.170625,
        "min" : 984509.170625,
        "sum" : 1.575214673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1063760.11,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1063760.11,
        "min" : 1063760.11,
        "sum" : 1.7020161760000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1201347.970625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1201347.970625,
        "min" : 1201347.970625,
        "sum" : 1.922156753E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1047532.58625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1047532.58625,
        "min" : 1047532.58625,
        "sum" : 1.676052138E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 1719922.235625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1719922.235625,
        "min" : 1719922.235625,
        "sum" : 2.751875577E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1374101.599375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1374101.599375,
        "min" : 1374101.599375,
        "sum" : 2.198562559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1062573.008125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1062573.008125,
        "min" : 1062573.008125,
        "sum" : 1.700116813E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1025421.824375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1025421.824375,
        "min" : 1025421.824375,
        "sum" : 1.640674919E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1070246.71875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1070246.71875,
        "min" : 1070246.71875,
        "sum" : 1.71239475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1032950.925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1032950.925,
        "min" : 1032950.925,
        "sum" : 1.65272148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1015963.643125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1015963.643125,
        "min" : 1015963.643125,
        "sum" : 1.625541829E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1034367.553125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1034367.553125,
        "min" : 1034367.553125,
        "sum" : 1.654988085E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1090672.129375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1090672.129375,
        "min" : 1090672.129375,
        "sum" : 1.745075407E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1093018.4025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1093018.4025,
        "min" : 1093018.4025,
        "sum" : 1.7488294440000002E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 1694957.104375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1694957.104375,
        "min" : 1694957.104375,
        "sum" : 2.711931367E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1173372.0375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1173372.0375,
        "min" : 1173372.0375,
        "sum" : 1.8773952600000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1121131.48125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1121131.48125,
        "min" : 1121131.48125,
        "sum" : 1.79381037E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1167580.4575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1167580.4575,
        "min" : 1167580.4575,
        "sum" : 1.868128732E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1039971.3675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1039971.3675,
        "min" : 1039971.3675,
        "sum" : 1.663954188E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 966200.11375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 966200.11375,
        "min" : 966200.11375,
        "sum" : 1.545920182E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1014417.76875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1014417.76875,
        "min" : 1014417.76875,
        "sum" : 1.62306843E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1062396.556875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1062396.556875,
        "min" : 1062396.556875,
        "sum" : 1.699834491E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1039459.561875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1039459.561875,
        "min" : 1039459.561875,
        "sum" : 1.663135299E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1132999.779375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1132999.779375,
        "min" : 1132999.779375,
        "sum" : 1.812799647E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 1727013.97375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1727013.97375,
        "min" : 1727013.97375,
        "sum" : 2.763222358E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1422633.0825,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1422633.0825,
        "min" : 1422633.0825,
        "sum" : 2.276212932E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1066927.286875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1066927.286875,
        "min" : 1066927.286875,
        "sum" : 1.707083659E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1011658.365625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1011658.365625,
        "min" : 1011658.365625,
        "sum" : 1.618653385E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1111965.325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1111965.325,
        "min" : 1111965.325,
        "sum" : 1.77914452E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1029025.39875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1029025.39875,
        "min" : 1029025.39875,
        "sum" : 1.646440638E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 995773.65125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 995773.65125,
        "min" : 995773.65125,
        "sum" : 1.593237842E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1035034.65875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1035034.65875,
        "min" : 1035034.65875,
        "sum" : 1.656055454E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1230132.43625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1230132.43625,
        "min" : 1230132.43625,
        "sum" : 1.968211898E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1014796.55,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1014796.55,
        "min" : 1014796.55,
        "sum" : 1.62367448E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 1674350.364375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1674350.364375,
        "min" : 1674350.364375,
        "sum" : 2.678960583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1219145.40875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1219145.40875,
        "min" : 1219145.40875,
        "sum" : 1.950632654E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1069574.17125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1069574.17125,
        "min" : 1069574.17125,
        "sum" : 1.7113186739999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1080535.011875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1080535.011875,
        "min" : 1080535.011875,
        "sum" : 1.7288560190000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1093166.91125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1093166.91125,
        "min" : 1093166.91125,
        "sum" : 1.7490670579999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1031374.345,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1031374.345,
        "min" : 1031374.345,
        "sum" : 1.650198952E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 995169.894375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 995169.894375,
        "min" : 995169.894375,
        "sum" : 1.592271831E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 976507.365625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 976507.365625,
        "min" : 976507.365625,
        "sum" : 1.562411785E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1140116.72,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1140116.72,
        "min" : 1140116.72,
        "sum" : 1.824186752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1039729.3925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1039729.3925,
        "min" : 1039729.3925,
        "sum" : 1.663567028E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 1799846.299375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1799846.299375,
        "min" : 1799846.299375,
        "sum" : 2.879754079E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1328494.619375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1328494.619375,
        "min" : 1328494.619375,
        "sum" : 2.125591391E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1058196.720625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1058196.720625,
        "min" : 1058196.720625,
        "sum" : 1.693114753E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1029988.133125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1029988.133125,
        "min" : 1029988.133125,
        "sum" : 1.647981013E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1104562.0075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1104562.0075,
        "min" : 1104562.0075,
        "sum" : 1.767299212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1037122.638125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1037122.638125,
        "min" : 1037122.638125,
        "sum" : 1.659396221E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1071023.385625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1071023.385625,
        "min" : 1071023.385625,
        "sum" : 1.7136374170000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1123975.361875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1123975.361875,
        "min" : 1123975.361875,
        "sum" : 1.798360579E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1088904.760625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1088904.760625,
        "min" : 1088904.760625,
        "sum" : 1.7422476170000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1082816.79625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1082816.79625,
        "min" : 1082816.79625,
        "sum" : 1.7325068739999998E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 1712349.493125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1712349.493125,
        "min" : 1712349.493125,
        "sum" : 2.739759189E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1379669.684375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1379669.684375,
        "min" : 1379669.684375,
        "sum" : 2.207471495E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1058669.835625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1058669.835625,
        "min" : 1058669.835625,
        "sum" : 1.693871737E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1023208.263125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1023208.263125,
        "min" : 1023208.263125,
        "sum" : 1.637133221E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1089890.9475,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1089890.9475,
        "min" : 1089890.9475,
        "sum" : 1.743825516E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1001735.643125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1001735.643125,
        "min" : 1001735.643125,
        "sum" : 1.602777029E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1010650.915625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1010650.915625,
        "min" : 1010650.915625,
        "sum" : 1.617041465E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1055878.978125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1055878.978125,
        "min" : 1055878.978125,
        "sum" : 1.6894063649999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1129588.883125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1129588.883125,
        "min" : 1129588.883125,
        "sum" : 1.807342213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 999413.088125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 999413.088125,
        "min" : 999413.088125,
        "sum" : 1.599060941E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 1623514.42125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1623514.42125,
        "min" : 1623514.42125,
        "sum" : 2.597623074E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1196385.58875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1196385.58875,
        "min" : 1196385.58875,
        "sum" : 1.9142169420000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1070214.404375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1070214.404375,
        "min" : 1070214.404375,
        "sum" : 1.712343047E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1150622.4725,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1150622.4725,
        "min" : 1150622.4725,
        "sum" : 1.8409959559999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1062248.25625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1062248.25625,
        "min" : 1062248.25625,
        "sum" : 1.6995972100000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 994445.180625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 994445.180625,
        "min" : 994445.180625,
        "sum" : 1.591112289E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 989682.64125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 989682.64125,
        "min" : 989682.64125,
        "sum" : 1.583492226E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1094453.685,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1094453.685,
        "min" : 1094453.685,
        "sum" : 1.751125896E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1047026.780625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1047026.780625,
        "min" : 1047026.780625,
        "sum" : 1.675242849E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1085866.51875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1085866.51875,
        "min" : 1085866.51875,
        "sum" : 1.73738643E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 1692328.23,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1692328.23,
        "min" : 1692328.23,
        "sum" : 2.707725168E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1159414.441875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1159414.441875,
        "min" : 1159414.441875,
        "sum" : 1.855063107E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1110325.76375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1110325.76375,
        "min" : 1110325.76375,
        "sum" : 1.776521222E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1239967.20375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1239967.20375,
        "min" : 1239967.20375,
        "sum" : 1.9839475260000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1008243.923125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1008243.923125,
        "min" : 1008243.923125,
        "sum" : 1.613190277E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 984199.155,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 984199.155,
        "min" : 984199.155,
        "sum" : 1.574718648E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1041071.14125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1041071.14125,
        "min" : 1041071.14125,
        "sum" : 1.665713826E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1163609.948125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1163609.948125,
        "min" : 1163609.948125,
        "sum" : 1.8617759170000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1118870.689375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1118870.689375,
        "min" : 1118870.689375,
        "sum" : 1.790193103E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1037120.35875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1037120.35875,
        "min" : 1037120.35875,
        "sum" : 1.659392574E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 1709326.79,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1709326.79,
        "min" : 1709326.79,
        "sum" : 2.734922864E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1411496.73875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1411496.73875,
        "min" : 1411496.73875,
        "sum" : 2.258394782E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1060319.71,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1060319.71,
        "min" : 1060319.71,
        "sum" : 1.696511536E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1011502.33125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1011502.33125,
        "min" : 1011502.33125,
        "sum" : 1.61840373E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1036006.220625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1036006.220625,
        "min" : 1036006.220625,
        "sum" : 1.657609953E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1116484.60875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1116484.60875,
        "min" : 1116484.60875,
        "sum" : 1.7863753739999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 997808.16125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 997808.16125,
        "min" : 997808.16125,
        "sum" : 1.596493058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1065378.30875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1065378.30875,
        "min" : 1065378.30875,
        "sum" : 1.7046052940000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1102881.07125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1102881.07125,
        "min" : 1102881.07125,
        "sum" : 1.764609714E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1042339.38625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1042339.38625,
        "min" : 1042339.38625,
        "sum" : 1.667743018E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 1857950.291875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1857950.291875,
        "min" : 1857950.291875,
        "sum" : 2.972720467E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1305032.395,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1305032.395,
        "min" : 1305032.395,
        "sum" : 2.088051832E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193265.72625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1193265.72625,
        "min" : 1193265.72625,
        "sum" : 1.909225162E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1070711.515625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1070711.515625,
        "min" : 1070711.515625,
        "sum" : 1.713138425E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1055070.39875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1055070.39875,
        "min" : 1055070.39875,
        "sum" : 1.688112638E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1122235.305,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1122235.305,
        "min" : 1122235.305,
        "sum" : 1.795576488E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1120306.310625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1120306.310625,
        "min" : 1120306.310625,
        "sum" : 1.792490097E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1109470.545625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1109470.545625,
        "min" : 1109470.545625,
        "sum" : 1.775152873E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1047207.671875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1047207.671875,
        "min" : 1047207.671875,
        "sum" : 1.675532275E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1084257.89125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1084257.89125,
        "min" : 1084257.89125,
        "sum" : 1.7348126260000002E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 1759793.781875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1759793.781875,
        "min" : 1759793.781875,
        "sum" : 2.815670051E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1314352.836875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1314352.836875,
        "min" : 1314352.836875,
        "sum" : 2.102964539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1020464.749375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1020464.749375,
        "min" : 1020464.749375,
        "sum" : 1.632743599E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1054171.49375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1054171.49375,
        "min" : 1054171.49375,
        "sum" : 1.6866743899999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1093098.070625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1093098.070625,
        "min" : 1093098.070625,
        "sum" : 1.748956913E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1001951.5325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1001951.5325,
        "min" : 1001951.5325,
        "sum" : 1.603122452E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1073682.63875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1073682.63875,
        "min" : 1073682.63875,
        "sum" : 1.717892222E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1180614.845,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1180614.845,
        "min" : 1180614.845,
        "sum" : 1.888983752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1076718.945625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1076718.945625,
        "min" : 1076718.945625,
        "sum" : 1.722750313E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1087914.81375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1087914.81375,
        "min" : 1087914.81375,
        "sum" : 1.740663702E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 1697031.7425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1697031.7425,
        "min" : 1697031.7425,
        "sum" : 2.715250788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1357822.558125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1357822.558125,
        "min" : 1357822.558125,
        "sum" : 2.172516093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1073453.30125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1073453.30125,
        "min" : 1073453.30125,
        "sum" : 1.717525282E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1018789.9225,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1018789.9225,
        "min" : 1018789.9225,
        "sum" : 1.630063876E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1021686.34125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1021686.34125,
        "min" : 1021686.34125,
        "sum" : 1.634698146E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1090566.57125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1090566.57125,
        "min" : 1090566.57125,
        "sum" : 1.744906514E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1000379.671875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1000379.671875,
        "min" : 1000379.671875,
        "sum" : 1.600607475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1061572.344375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1061572.344375,
        "min" : 1061572.344375,
        "sum" : 1.6985157510000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1175644.748125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1175644.748125,
        "min" : 1175644.748125,
        "sum" : 1.881031597E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 993790.251875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 993790.251875,
        "min" : 993790.251875,
        "sum" : 1.590064403E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 1744789.115,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1744789.115,
        "min" : 1744789.115,
        "sum" : 2.791662584E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1375106.20125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1375106.20125,
        "min" : 1375106.20125,
        "sum" : 2.200169922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1047054.250625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1047054.250625,
        "min" : 1047054.250625,
        "sum" : 1.675286801E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1054795.045625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1054795.045625,
        "min" : 1054795.045625,
        "sum" : 1.687672073E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1081466.47,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1081466.47,
        "min" : 1081466.47,
        "sum" : 1.730346352E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1030486.9525,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1030486.9525,
        "min" : 1030486.9525,
        "sum" : 1.648779124E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1077967.655,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1077967.655,
        "min" : 1077967.655,
        "sum" : 1.724748248E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1189825.315,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1189825.315,
        "min" : 1189825.315,
        "sum" : 1.903720504E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1051327.4625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1051327.4625,
        "min" : 1051327.4625,
        "sum" : 1.6821239399999998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1098870.12125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1098870.12125,
        "min" : 1098870.12125,
        "sum" : 1.7581921940000002E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 1720244.56,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1720244.56,
        "min" : 1720244.56,
        "sum" : 2.752391296E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1204002.6075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1204002.6075,
        "min" : 1204002.6075,
        "sum" : 1.926404172E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1094513.895,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1094513.895,
        "min" : 1094513.895,
        "sum" : 1.751222232E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210743.606875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1210743.606875,
        "min" : 1210743.606875,
        "sum" : 1.937189771E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1006434.556875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1006434.556875,
        "min" : 1006434.556875,
        "sum" : 1.610295291E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 982791.0925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 982791.0925,
        "min" : 982791.0925,
        "sum" : 1.572465748E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1025296.228125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1025296.228125,
        "min" : 1025296.228125,
        "sum" : 1.640473965E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1158235.38125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1158235.38125,
        "min" : 1158235.38125,
        "sum" : 1.8531766100000002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1133166.5125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1133166.5125,
        "min" : 1133166.5125,
        "sum" : 1.81306642E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1105484.174375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 1105484.174375,
        "min" : 1105484.174375,
        "sum" : 1.768774679E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4795569.96125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4795569.96125,
        "min" : 4795569.96125,
        "sum" : 7.672911938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4156762.301875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4156762.301875,
        "min" : 4156762.301875,
        "sum" : 6.650819683E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4112876.03625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4112876.03625,
        "min" : 4112876.03625,
        "sum" : 6.580601658E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4055633.101875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4055633.101875,
        "min" : 4055633.101875,
        "sum" : 6.489012963E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4083390.925625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4083390.925625,
        "min" : 4083390.925625,
        "sum" : 6.533425481E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4101997.909375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4101997.909375,
        "min" : 4101997.909375,
        "sum" : 6.563196655E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4077234.92625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4077234.92625,
        "min" : 4077234.92625,
        "sum" : 6.523575882E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4088541.504375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4088541.504375,
        "min" : 4088541.504375,
        "sum" : 6.541666407E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4088731.94875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4088731.94875,
        "min" : 4088731.94875,
        "sum" : 6.541971118E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4090099.474375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4090099.474375,
        "min" : 4090099.474375,
        "sum" : 6.544159159E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4657132.921875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4657132.921875,
        "min" : 4657132.921875,
        "sum" : 7.451412675E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4150051.79125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4150051.79125,
        "min" : 4150051.79125,
        "sum" : 6.640082866E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061379.684375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4061379.684375,
        "min" : 4061379.684375,
        "sum" : 6.498207495E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4083448.62625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4083448.62625,
        "min" : 4083448.62625,
        "sum" : 6.533517802E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4090154.65125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4090154.65125,
        "min" : 4090154.65125,
        "sum" : 6.544247442E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4138567.113125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4138567.113125,
        "min" : 4138567.113125,
        "sum" : 6.621707381E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079072.32625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4079072.32625,
        "min" : 4079072.32625,
        "sum" : 6.526515722E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4138894.9325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4138894.9325,
        "min" : 4138894.9325,
        "sum" : 6.622231892E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4056302.226875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4056302.226875,
        "min" : 4056302.226875,
        "sum" : 6.490083563E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079876.539375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4079876.539375,
        "min" : 4079876.539375,
        "sum" : 6.527802463E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4629434.58375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4629434.58375,
        "min" : 4629434.58375,
        "sum" : 7.407095334E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4129486.471875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4129486.471875,
        "min" : 4129486.471875,
        "sum" : 6.607178355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4057578.63625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4057578.63625,
        "min" : 4057578.63625,
        "sum" : 6.492125818E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4063547.1425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4063547.1425,
        "min" : 4063547.1425,
        "sum" : 6.501675428E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4031571.69875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4031571.69875,
        "min" : 4031571.69875,
        "sum" : 6.450514718E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4049573.08125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4049573.08125,
        "min" : 4049573.08125,
        "sum" : 6.47931693E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4047994.311875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4047994.311875,
        "min" : 4047994.311875,
        "sum" : 6.476790899E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4037486.879375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4037486.879375,
        "min" : 4037486.879375,
        "sum" : 6.459979007E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4044928.6625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4044928.6625,
        "min" : 4044928.6625,
        "sum" : 6.47188586E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4065770.658125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4065770.658125,
        "min" : 4065770.658125,
        "sum" : 6.505233053E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4672973.945625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4672973.945625,
        "min" : 4672973.945625,
        "sum" : 7.476758313E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4147453.749375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4147453.749375,
        "min" : 4147453.749375,
        "sum" : 6.635925999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4056585.59625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4056585.59625,
        "min" : 4056585.59625,
        "sum" : 6.490536954E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4086809.834375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4086809.834375,
        "min" : 4086809.834375,
        "sum" : 6.538895735E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4094964.734375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4094964.734375,
        "min" : 4094964.734375,
        "sum" : 6.551943575E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4096667.163125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4096667.163125,
        "min" : 4096667.163125,
        "sum" : 6.554667461E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061120.92125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4061120.92125,
        "min" : 4061120.92125,
        "sum" : 6.497793474E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4108670.5925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4108670.5925,
        "min" : 4108670.5925,
        "sum" : 6.573872948E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4087783.39625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4087783.39625,
        "min" : 4087783.39625,
        "sum" : 6.540453434E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4096254.151875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4096254.151875,
        "min" : 4096254.151875,
        "sum" : 6.554006643E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4613761.954375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4613761.954375,
        "min" : 4613761.954375,
        "sum" : 7.382019127E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4191558.891875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4191558.891875,
        "min" : 4191558.891875,
        "sum" : 6.706494227E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4105629.92375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4105629.92375,
        "min" : 4105629.92375,
        "sum" : 6.569007878E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4076083.878125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4076083.878125,
        "min" : 4076083.878125,
        "sum" : 6.521734205E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4069686.651875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4069686.651875,
        "min" : 4069686.651875,
        "sum" : 6.511498643E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092912.24875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4092912.24875,
        "min" : 4092912.24875,
        "sum" : 6.548659598E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092857.338125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4092857.338125,
        "min" : 4092857.338125,
        "sum" : 6.548571741E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4075246.13,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4075246.13,
        "min" : 4075246.13,
        "sum" : 6.520393808E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4088380.318125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4088380.318125,
        "min" : 4088380.318125,
        "sum" : 6.541408509E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4090885.70875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4090885.70875,
        "min" : 4090885.70875,
        "sum" : 6.545417134E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4850060.935625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4850060.935625,
        "min" : 4850060.935625,
        "sum" : 7.760097497E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4154116.42625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4154116.42625,
        "min" : 4154116.42625,
        "sum" : 6.646586282E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4115403.059375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4115403.059375,
        "min" : 4115403.059375,
        "sum" : 6.584644895E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4069569.708125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4069569.708125,
        "min" : 4069569.708125,
        "sum" : 6.511311533E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4062144.699375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4062144.699375,
        "min" : 4062144.699375,
        "sum" : 6.499431519E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4087753.765,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4087753.765,
        "min" : 4087753.765,
        "sum" : 6.540406024E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4059311.503125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4059311.503125,
        "min" : 4059311.503125,
        "sum" : 6.494898405E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4067161.526875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4067161.526875,
        "min" : 4067161.526875,
        "sum" : 6.507458443E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4081065.0,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4081065.0,
        "min" : 4081065.0,
        "sum" : 6.529704E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4068736.983125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4068736.983125,
        "min" : 4068736.983125,
        "sum" : 6.509979173E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4597490.688125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4597490.688125,
        "min" : 4597490.688125,
        "sum" : 7.355985101000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4136454.446875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4136454.446875,
        "min" : 4136454.446875,
        "sum" : 6.618327115E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4040321.655,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4040321.655,
        "min" : 4040321.655,
        "sum" : 6.464514648E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4037613.984375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4037613.984375,
        "min" : 4037613.984375,
        "sum" : 6.460182375E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4050382.594375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4050382.594375,
        "min" : 4050382.594375,
        "sum" : 6.480612151E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4072260.629375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4072260.629375,
        "min" : 4072260.629375,
        "sum" : 6.515617007E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4038533.2625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4038533.2625,
        "min" : 4038533.2625,
        "sum" : 6.46165322E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4042401.51375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4042401.51375,
        "min" : 4042401.51375,
        "sum" : 6.467842422E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4063792.84,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4063792.84,
        "min" : 4063792.84,
        "sum" : 6.502068544E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4103182.269375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4103182.269375,
        "min" : 4103182.269375,
        "sum" : 6.565091631E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4605784.165625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4605784.165625,
        "min" : 4605784.165625,
        "sum" : 7.369254665000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4166100.891875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4166100.891875,
        "min" : 4166100.891875,
        "sum" : 6.665761427E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4054502.3175,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4054502.3175,
        "min" : 4054502.3175,
        "sum" : 6.487203708E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4076414.649375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4076414.649375,
        "min" : 4076414.649375,
        "sum" : 6.522263439E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4044159.18125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4044159.18125,
        "min" : 4044159.18125,
        "sum" : 6.47065469E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4057655.254375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4057655.254375,
        "min" : 4057655.254375,
        "sum" : 6.492248407E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4043056.64125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4043056.64125,
        "min" : 4043056.64125,
        "sum" : 6.468890626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4014347.12375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4014347.12375,
        "min" : 4014347.12375,
        "sum" : 6.422955398E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4051484.62125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4051484.62125,
        "min" : 4051484.62125,
        "sum" : 6.482375394E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048647.691875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048647.691875,
        "min" : 4048647.691875,
        "sum" : 6.477836307E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4706021.18625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4706021.18625,
        "min" : 4706021.18625,
        "sum" : 7.529633898E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4236549.0675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4236549.0675,
        "min" : 4236549.0675,
        "sum" : 6.778478508E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4116819.610625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4116819.610625,
        "min" : 4116819.610625,
        "sum" : 6.586911377E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4107682.818125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4107682.818125,
        "min" : 4107682.818125,
        "sum" : 6.572292509E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4082210.680625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4082210.680625,
        "min" : 4082210.680625,
        "sum" : 6.531537089E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4129167.893125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4129167.893125,
        "min" : 4129167.893125,
        "sum" : 6.606668629E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4068592.071875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4068592.071875,
        "min" : 4068592.071875,
        "sum" : 6.509747315E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4097908.50875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4097908.50875,
        "min" : 4097908.50875,
        "sum" : 6.556653614E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4113900.761875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4113900.761875,
        "min" : 4113900.761875,
        "sum" : 6.582241219E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4067242.061875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4067242.061875,
        "min" : 4067242.061875,
        "sum" : 6.507587299E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4678305.018125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4678305.018125,
        "min" : 4678305.018125,
        "sum" : 7.485288029000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4210440.911875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4210440.911875,
        "min" : 4210440.911875,
        "sum" : 6.736705459E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4093630.6275,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4093630.6275,
        "min" : 4093630.6275,
        "sum" : 6.549809004E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4035575.4025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4035575.4025,
        "min" : 4035575.4025,
        "sum" : 6.456920644E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4083857.346875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4083857.346875,
        "min" : 4083857.346875,
        "sum" : 6.534171755E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4116401.47625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4116401.47625,
        "min" : 4116401.47625,
        "sum" : 6.586242362E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4090579.41125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4090579.41125,
        "min" : 4090579.41125,
        "sum" : 6.544927058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4065865.496875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4065865.496875,
        "min" : 4065865.496875,
        "sum" : 6.505384795E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4099320.609375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4099320.609375,
        "min" : 4099320.609375,
        "sum" : 6.558912975E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4095576.93875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4095576.93875,
        "min" : 4095576.93875,
        "sum" : 6.552923102E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4701182.46625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4701182.46625,
        "min" : 4701182.46625,
        "sum" : 7.521891945999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4170648.959375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4170648.959375,
        "min" : 4170648.959375,
        "sum" : 6.673038335E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4097106.03625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4097106.03625,
        "min" : 4097106.03625,
        "sum" : 6.555369658E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4076115.183125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4076115.183125,
        "min" : 4076115.183125,
        "sum" : 6.521784293E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4139923.150625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4139923.150625,
        "min" : 4139923.150625,
        "sum" : 6.623877041E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4112715.685625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4112715.685625,
        "min" : 4112715.685625,
        "sum" : 6.580345097E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4097850.67125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4097850.67125,
        "min" : 4097850.67125,
        "sum" : 6.556561074E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4110280.536875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4110280.536875,
        "min" : 4110280.536875,
        "sum" : 6.576448859E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092767.138125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4092767.138125,
        "min" : 4092767.138125,
        "sum" : 6.548427421E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4080743.614375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4080743.614375,
        "min" : 4080743.614375,
        "sum" : 6.529189783E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4743900.9375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4743900.9375,
        "min" : 4743900.9375,
        "sum" : 7.5902415E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4130559.77,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4130559.77,
        "min" : 4130559.77,
        "sum" : 6.608895632E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4064391.391875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4064391.391875,
        "min" : 4064391.391875,
        "sum" : 6.503026227E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061173.351875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4061173.351875,
        "min" : 4061173.351875,
        "sum" : 6.497877363E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4050936.93625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4050936.93625,
        "min" : 4050936.93625,
        "sum" : 6.481499098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4069927.574375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4069927.574375,
        "min" : 4069927.574375,
        "sum" : 6.511884119E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4040286.01625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4040286.01625,
        "min" : 4040286.01625,
        "sum" : 6.464457626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4050408.215625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4050408.215625,
        "min" : 4050408.215625,
        "sum" : 6.480653145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058011.660625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4058011.660625,
        "min" : 4058011.660625,
        "sum" : 6.492818657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048882.008125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048882.008125,
        "min" : 4048882.008125,
        "sum" : 6.478211213E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4582879.683125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4582879.683125,
        "min" : 4582879.683125,
        "sum" : 7.332607493000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4179818.57125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4179818.57125,
        "min" : 4179818.57125,
        "sum" : 6.687709714E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4093194.599375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4093194.599375,
        "min" : 4093194.599375,
        "sum" : 6.549111359E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079544.534375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4079544.534375,
        "min" : 4079544.534375,
        "sum" : 6.527271255E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4068566.0125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4068566.0125,
        "min" : 4068566.0125,
        "sum" : 6.50970562E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058847.8325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4058847.8325,
        "min" : 4058847.8325,
        "sum" : 6.494156532E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058048.7775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4058048.7775,
        "min" : 4058048.7775,
        "sum" : 6.492878044E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4060844.03,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4060844.03,
        "min" : 4060844.03,
        "sum" : 6.497350448E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4069022.51375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4069022.51375,
        "min" : 4069022.51375,
        "sum" : 6.510436022E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4069308.083125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4069308.083125,
        "min" : 4069308.083125,
        "sum" : 6.510892933E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4689815.049375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4689815.049375,
        "min" : 4689815.049375,
        "sum" : 7.503704079000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4136185.2475,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4136185.2475,
        "min" : 4136185.2475,
        "sum" : 6.617896396E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4089369.918125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4089369.918125,
        "min" : 4089369.918125,
        "sum" : 6.542991869E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061060.07375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4061060.07375,
        "min" : 4061060.07375,
        "sum" : 6.497696118E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4047141.735625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4047141.735625,
        "min" : 4047141.735625,
        "sum" : 6.475426777E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048721.470625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048721.470625,
        "min" : 4048721.470625,
        "sum" : 6.477954353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4025196.22125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4025196.22125,
        "min" : 4025196.22125,
        "sum" : 6.440313954E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048593.240625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048593.240625,
        "min" : 4048593.240625,
        "sum" : 6.477749185E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4063648.991875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4063648.991875,
        "min" : 4063648.991875,
        "sum" : 6.501838387E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4052409.719375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4052409.719375,
        "min" : 4052409.719375,
        "sum" : 6.483855551E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4698276.531875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4698276.531875,
        "min" : 4698276.531875,
        "sum" : 7.517242451000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4113760.02625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4113760.02625,
        "min" : 4113760.02625,
        "sum" : 6.582016042E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4077414.673125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4077414.673125,
        "min" : 4077414.673125,
        "sum" : 6.523863477E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058995.60625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4058995.60625,
        "min" : 4058995.60625,
        "sum" : 6.49439297E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4045803.464375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4045803.464375,
        "min" : 4045803.464375,
        "sum" : 6.473285543E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4080610.19375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4080610.19375,
        "min" : 4080610.19375,
        "sum" : 6.52897631E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4042239.04375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4042239.04375,
        "min" : 4042239.04375,
        "sum" : 6.46758247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4064178.70625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4064178.70625,
        "min" : 4064178.70625,
        "sum" : 6.50268593E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048944.265,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048944.265,
        "min" : 4048944.265,
        "sum" : 6.478310824E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4050196.5575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4050196.5575,
        "min" : 4050196.5575,
        "sum" : 6.480314492E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4588080.32625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4588080.32625,
        "min" : 4588080.32625,
        "sum" : 7.340928522E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4125134.751875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4125134.751875,
        "min" : 4125134.751875,
        "sum" : 6.600215603E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4076376.7675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4076376.7675,
        "min" : 4076376.7675,
        "sum" : 6.522202828E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4027500.39,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4027500.39,
        "min" : 4027500.39,
        "sum" : 6.444000624E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4039762.998125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4039762.998125,
        "min" : 4039762.998125,
        "sum" : 6.463620797E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4031549.4675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4031549.4675,
        "min" : 4031549.4675,
        "sum" : 6.450479148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048145.639375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048145.639375,
        "min" : 4048145.639375,
        "sum" : 6.477033023E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058115.120625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4058115.120625,
        "min" : 4058115.120625,
        "sum" : 6.492984193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4035353.12625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4035353.12625,
        "min" : 4035353.12625,
        "sum" : 6.456565002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4049077.865625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4049077.865625,
        "min" : 4049077.865625,
        "sum" : 6.478524585E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4659875.61625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4659875.61625,
        "min" : 4659875.61625,
        "sum" : 7.455800986E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4157604.22875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4157604.22875,
        "min" : 4157604.22875,
        "sum" : 6.652166766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4077378.73625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4077378.73625,
        "min" : 4077378.73625,
        "sum" : 6.523805978E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4086678.6775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4086678.6775,
        "min" : 4086678.6775,
        "sum" : 6.538685884E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092366.24375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4092366.24375,
        "min" : 4092366.24375,
        "sum" : 6.54778599E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079873.624375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4079873.624375,
        "min" : 4079873.624375,
        "sum" : 6.527797799E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4086353.140625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4086353.140625,
        "min" : 4086353.140625,
        "sum" : 6.538165025E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4088246.90375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4088246.90375,
        "min" : 4088246.90375,
        "sum" : 6.541195046E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4086314.535625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4086314.535625,
        "min" : 4086314.535625,
        "sum" : 6.538103257E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079790.319375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4079790.319375,
        "min" : 4079790.319375,
        "sum" : 6.527664511E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4837270.296875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4837270.296875,
        "min" : 4837270.296875,
        "sum" : 7.739632475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4295782.5075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4295782.5075,
        "min" : 4295782.5075,
        "sum" : 6.873252012E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4214399.444375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4214399.444375,
        "min" : 4214399.444375,
        "sum" : 6.743039111E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4204840.608125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4204840.608125,
        "min" : 4204840.608125,
        "sum" : 6.727744973E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4215398.676875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4215398.676875,
        "min" : 4215398.676875,
        "sum" : 6.744637883E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4192066.355625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4192066.355625,
        "min" : 4192066.355625,
        "sum" : 6.707306169E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4189653.260625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4189653.260625,
        "min" : 4189653.260625,
        "sum" : 6.703445217E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4197023.9975,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4197023.9975,
        "min" : 4197023.9975,
        "sum" : 6.715238395999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4173464.09375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4173464.09375,
        "min" : 4173464.09375,
        "sum" : 6.67754255E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4181968.995625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4181968.995625,
        "min" : 4181968.995625,
        "sum" : 6.691150393E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4739882.6425,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4739882.6425,
        "min" : 4739882.6425,
        "sum" : 7.583812228E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4256976.555,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4256976.555,
        "min" : 4256976.555,
        "sum" : 6.811162488E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4159272.23125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4159272.23125,
        "min" : 4159272.23125,
        "sum" : 6.65483557E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4125559.08625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4125559.08625,
        "min" : 4125559.08625,
        "sum" : 6.600894538E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4136096.525625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4136096.525625,
        "min" : 4136096.525625,
        "sum" : 6.617754441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4215749.8875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4215749.8875,
        "min" : 4215749.8875,
        "sum" : 6.74519982E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4187741.134375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4187741.134375,
        "min" : 4187741.134375,
        "sum" : 6.700385815E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4178374.773125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4178374.773125,
        "min" : 4178374.773125,
        "sum" : 6.685399637E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4159638.25,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4159638.25,
        "min" : 4159638.25,
        "sum" : 6.6554212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4162464.638125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4162464.638125,
        "min" : 4162464.638125,
        "sum" : 6.659943421E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4774993.6,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4774993.6,
        "min" : 4774993.6,
        "sum" : 7.639989759999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4213022.171875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4213022.171875,
        "min" : 4213022.171875,
        "sum" : 6.740835475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4112379.834375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4112379.834375,
        "min" : 4112379.834375,
        "sum" : 6.579807735E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4142496.964375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4142496.964375,
        "min" : 4142496.964375,
        "sum" : 6.627995143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4129680.204375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4129680.204375,
        "min" : 4129680.204375,
        "sum" : 6.607488327E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4156252.8675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4156252.8675,
        "min" : 4156252.8675,
        "sum" : 6.650004588E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4126637.57,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4126637.57,
        "min" : 4126637.57,
        "sum" : 6.602620112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4115644.225625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4115644.225625,
        "min" : 4115644.225625,
        "sum" : 6.585030761E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4109648.50125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4109648.50125,
        "min" : 4109648.50125,
        "sum" : 6.575437602E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4117183.368125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4117183.368125,
        "min" : 4117183.368125,
        "sum" : 6.587493389E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4743471.2075,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4743471.2075,
        "min" : 4743471.2075,
        "sum" : 7.589553931999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4179151.996875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4179151.996875,
        "min" : 4179151.996875,
        "sum" : 6.686643195E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4070323.658125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4070323.658125,
        "min" : 4070323.658125,
        "sum" : 6.512517853E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4067081.874375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4067081.874375,
        "min" : 4067081.874375,
        "sum" : 6.507330999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4078204.42,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4078204.42,
        "min" : 4078204.42,
        "sum" : 6.525127072E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061063.31875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4061063.31875,
        "min" : 4061063.31875,
        "sum" : 6.49770131E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4068379.2325,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4068379.2325,
        "min" : 4068379.2325,
        "sum" : 6.509406772E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4063732.864375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4063732.864375,
        "min" : 4063732.864375,
        "sum" : 6.501972583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4059670.9375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4059670.9375,
        "min" : 4059670.9375,
        "sum" : 6.4954735E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4060574.6675,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4060574.6675,
        "min" : 4060574.6675,
        "sum" : 6.496919468E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4751285.468125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4751285.468125,
        "min" : 4751285.468125,
        "sum" : 7.602056748999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4372610.025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4372610.025,
        "min" : 4372610.025,
        "sum" : 6.996176040000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4252101.996875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4252101.996875,
        "min" : 4252101.996875,
        "sum" : 6.803363195E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4193141.803125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4193141.803125,
        "min" : 4193141.803125,
        "sum" : 6.709026885E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4218205.229375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4218205.229375,
        "min" : 4218205.229375,
        "sum" : 6.749128367E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4206562.57625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4206562.57625,
        "min" : 4206562.57625,
        "sum" : 6.730500122E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4222119.286875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4222119.286875,
        "min" : 4222119.286875,
        "sum" : 6.755390859E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4215772.326875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4215772.326875,
        "min" : 4215772.326875,
        "sum" : 6.745235723E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4207962.728125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4207962.728125,
        "min" : 4207962.728125,
        "sum" : 6.732740365000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4258912.179375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4258912.179375,
        "min" : 4258912.179375,
        "sum" : 6.814259487E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4669629.263125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4669629.263125,
        "min" : 4669629.263125,
        "sum" : 7.471406820999999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4191476.23875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4191476.23875,
        "min" : 4191476.23875,
        "sum" : 6.706361982E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4124730.35875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4124730.35875,
        "min" : 4124730.35875,
        "sum" : 6.599568574E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4104673.25375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4104673.25375,
        "min" : 4104673.25375,
        "sum" : 6.567477206E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4109178.941875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4109178.941875,
        "min" : 4109178.941875,
        "sum" : 6.574686307E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092562.14875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4092562.14875,
        "min" : 4092562.14875,
        "sum" : 6.548099438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4075357.884375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4075357.884375,
        "min" : 4075357.884375,
        "sum" : 6.520572615E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4099336.461875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4099336.461875,
        "min" : 4099336.461875,
        "sum" : 6.558938339E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4086064.279375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4086064.279375,
        "min" : 4086064.279375,
        "sum" : 6.537702847E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4097655.26125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4097655.26125,
        "min" : 4097655.26125,
        "sum" : 6.556248418E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4634768.308125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4634768.308125,
        "min" : 4634768.308125,
        "sum" : 7.415629293000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4161443.60125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4161443.60125,
        "min" : 4161443.60125,
        "sum" : 6.658309762E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092954.711875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4092954.711875,
        "min" : 4092954.711875,
        "sum" : 6.548727539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4066925.070625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4066925.070625,
        "min" : 4066925.070625,
        "sum" : 6.507080113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4072362.46,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4072362.46,
        "min" : 4072362.46,
        "sum" : 6.515779936E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079357.78875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4079357.78875,
        "min" : 4079357.78875,
        "sum" : 6.526972462E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4082732.99375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4082732.99375,
        "min" : 4082732.99375,
        "sum" : 6.53237279E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4082491.3975,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4082491.3975,
        "min" : 4082491.3975,
        "sum" : 6.531986236E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058232.691875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4058232.691875,
        "min" : 4058232.691875,
        "sum" : 6.493172307E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4053680.70875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4053680.70875,
        "min" : 4053680.70875,
        "sum" : 6.485889134E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4669967.100625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4669967.100625,
        "min" : 4669967.100625,
        "sum" : 7.471947361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4208408.234375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4208408.234375,
        "min" : 4208408.234375,
        "sum" : 6.733453175E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4096545.544375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4096545.544375,
        "min" : 4096545.544375,
        "sum" : 6.554472871E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4057473.919375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4057473.919375,
        "min" : 4057473.919375,
        "sum" : 6.491958271E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4074013.39875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4074013.39875,
        "min" : 4074013.39875,
        "sum" : 6.518421438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4123996.100625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4123996.100625,
        "min" : 4123996.100625,
        "sum" : 6.598393761E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4090547.843125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4090547.843125,
        "min" : 4090547.843125,
        "sum" : 6.544876549E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4110132.569375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4110132.569375,
        "min" : 4110132.569375,
        "sum" : 6.576212111E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4080501.955625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4080501.955625,
        "min" : 4080501.955625,
        "sum" : 6.528803129E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4067249.785625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4067249.785625,
        "min" : 4067249.785625,
        "sum" : 6.507599657E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4913153.685625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4913153.685625,
        "min" : 4913153.685625,
        "sum" : 7.861045897E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4185842.0625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4185842.0625,
        "min" : 4185842.0625,
        "sum" : 6.6973473E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4102727.025625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4102727.025625,
        "min" : 4102727.025625,
        "sum" : 6.564363241E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4047780.071875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4047780.071875,
        "min" : 4047780.071875,
        "sum" : 6.476448115E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4052699.32375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4052699.32375,
        "min" : 4052699.32375,
        "sum" : 6.484318918E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4047746.290625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4047746.290625,
        "min" : 4047746.290625,
        "sum" : 6.476394065E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4035889.035,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4035889.035,
        "min" : 4035889.035,
        "sum" : 6.457422456E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4054857.295,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4054857.295,
        "min" : 4054857.295,
        "sum" : 6.487771672E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4052742.258125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4052742.258125,
        "min" : 4052742.258125,
        "sum" : 6.484387613E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4043211.500625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4043211.500625,
        "min" : 4043211.500625,
        "sum" : 6.469138401E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4657681.293125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4657681.293125,
        "min" : 4657681.293125,
        "sum" : 7.452290069E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4164006.7275,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4164006.7275,
        "min" : 4164006.7275,
        "sum" : 6.662410764E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4030480.673125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4030480.673125,
        "min" : 4030480.673125,
        "sum" : 6.448769077E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4070499.5775,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4070499.5775,
        "min" : 4070499.5775,
        "sum" : 6.512799324E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4057502.96375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4057502.96375,
        "min" : 4057502.96375,
        "sum" : 6.492004742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4051859.403125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4051859.403125,
        "min" : 4051859.403125,
        "sum" : 6.482975045E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4059752.424375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4059752.424375,
        "min" : 4059752.424375,
        "sum" : 6.495603879E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4049720.03,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4049720.03,
        "min" : 4049720.03,
        "sum" : 6.479552048E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4054724.83125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4054724.83125,
        "min" : 4054724.83125,
        "sum" : 6.48755973E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4065103.33,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4065103.33,
        "min" : 4065103.33,
        "sum" : 6.504165328E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4646366.18125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4646366.18125,
        "min" : 4646366.18125,
        "sum" : 7.434185890000001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4274391.164375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4274391.164375,
        "min" : 4274391.164375,
        "sum" : 6.839025863E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4115175.679375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4115175.679375,
        "min" : 4115175.679375,
        "sum" : 6.584281087E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4107397.51625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4107397.51625,
        "min" : 4107397.51625,
        "sum" : 6.571836026E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4131006.385,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4131006.385,
        "min" : 4131006.385,
        "sum" : 6.609610216E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4121271.5475,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4121271.5475,
        "min" : 4121271.5475,
        "sum" : 6.594034476E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4085571.25125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4085571.25125,
        "min" : 4085571.25125,
        "sum" : 6.536914002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4113897.205,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4113897.205,
        "min" : 4113897.205,
        "sum" : 6.582235528E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4113501.928125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4113501.928125,
        "min" : 4113501.928125,
        "sum" : 6.581603085E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4101459.086875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4101459.086875,
        "min" : 4101459.086875,
        "sum" : 6.562334539E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4780001.383125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4780001.383125,
        "min" : 4780001.383125,
        "sum" : 7.648002213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4124876.570625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4124876.570625,
        "min" : 4124876.570625,
        "sum" : 6.599802513E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4055849.65,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4055849.65,
        "min" : 4055849.65,
        "sum" : 6.48935944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4025766.20875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4025766.20875,
        "min" : 4025766.20875,
        "sum" : 6.441225934E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4038422.8025,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4038422.8025,
        "min" : 4038422.8025,
        "sum" : 6.461476484E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4030963.485625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4030963.485625,
        "min" : 4030963.485625,
        "sum" : 6.449541577E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4025466.800625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4025466.800625,
        "min" : 4025466.800625,
        "sum" : 6.440746881E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4035338.9575,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4035338.9575,
        "min" : 4035338.9575,
        "sum" : 6.456542332E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4019328.89375,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4019328.89375,
        "min" : 4019328.89375,
        "sum" : 6.43092623E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4010278.1925,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4010278.1925,
        "min" : 4010278.1925,
        "sum" : 6.416445108E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4673041.635625,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4673041.635625,
        "min" : 4673041.635625,
        "sum" : 7.476866617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4155351.2,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4155351.2,
        "min" : 4155351.2,
        "sum" : 6.64856192E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061398.461875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4061398.461875,
        "min" : 4061398.461875,
        "sum" : 6.498237539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4048783.066875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4048783.066875,
        "min" : 4048783.066875,
        "sum" : 6.478052907E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4049958.866875,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4049958.866875,
        "min" : 4049958.866875,
        "sum" : 6.479934187E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4077847.32,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4077847.32,
        "min" : 4077847.32,
        "sum" : 6.524555712E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4037643.82,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4037643.82,
        "min" : 4037643.82,
        "sum" : 6.460230112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4032177.86125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4032177.86125,
        "min" : 4032177.86125,
        "sum" : 6.451484578E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4032047.448125,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4032047.448125,
        "min" : 4032047.448125,
        "sum" : 6.451275917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4034986.935,
        "variance" : 0.0,
        "n" : 1600,
        "max" : 4034986.935,
        "min" : 4034986.935,
        "sum" : 6.455979096E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
