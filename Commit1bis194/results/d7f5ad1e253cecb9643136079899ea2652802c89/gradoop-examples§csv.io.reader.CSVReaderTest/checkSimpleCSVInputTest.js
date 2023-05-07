if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit d7f5ad1e253cecb9643136079899ea2652802c89 -test csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest\")'>d7f5ad1e253cecb9643136079899ea2652802c89</a><br>Predecessor: c7acefa3e04da53a49aaf644eb241bd1b01f4f65<br>Comitter: <br>Test Case: csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest<br>";
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
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_String":
 ``,"csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_":
 `@Test
public void checkSimpleCSVInputTest() {
    for (Vertex v : createVerticesFromCSV()) {
        if (v.getID() == 0) {
        }
    }
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_":
 ``,},
"old":
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
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_":
 ``,},
};
var treeData = [
{
  "call" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "kiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest()",
  "otherKiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest()",
  "module" : "gradoop-examples",
  "name" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "key" : "csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_",
  "otherKey" : "csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_",
  "parent" : null,
  "color" : "#FF0000",
  "statistic" : {
    "meanOld" : 9984656.113333333,
    "meanCurrent" : 1.265579005203333E9,
    "deviationOld" : 891492.907908684,
    "deviationCurrent" : 1.0221842372228004E7,
    "vms" : 30,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : -670.24772436576,
    "change" : true
  },
  "hasSourceChange" : false,
  "state" : "SLOWER",
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 2.8356293219750933E7,
  "ess" : 0,
  "values" : [ 1.2708530761E9, 1.262523919E9, 1.25600005015E9, 1.25897335215E9, 1.24900728765E9, 1.2642647082E9, 1.270008348E9, 1.2647407811E9, 1.2704036313E9, 1.26252899705E9, 1.2712053959E9, 1.25353384785E9, 1.26180287625E9, 1.26630653415E9, 1.25665039675E9, 1.2838225126E9, 1.2595544969E9, 1.26645216595E9, 1.25988636355E9, 1.286632431E9, 1.25769791395E9, 1.2908196393E9, 1.2501979713E9, 1.26386550075E9, 1.26894070155E9, 1.2668860586E9, 1.27440141925E9, 1.27665051995E9, 1.27196530215E9, 1.2507939577E9 ],
  "valuesPredecessor" : [ 9251655.7, 9947190.6, 1.0046042299999999E7, 1.0364355500000002E7, 9353108.0, 1.0021314500000002E7, 1.0286013E7, 1.00798358E7, 9444506.1, 1.2319248099999998E7, 9211807.3, 9350391.7, 9559534.9, 1.00874638E7, 9830475.700000001, 9724446.5, 1.01396657E7, 9016774.4, 9468358.799999999, 1.16815221E7, 9461908.5, 9163133.7, 9460977.700000001, 1.17653167E7, 9717617.600000001, 1.0108895899999999E7, 1.04961156E7, 1.20535787E7, 8981213.000000002, 9147215.5 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 1.2805311795E9,
        "variance" : 6.948337939939151E14,
        "n" : 3,
        "max" : 1.318528915E9,
        "min" : 1.258372096E9,
        "sum" : 3.8415935385E9,
        "standardDeviation" : 2.635970018786092E7
      }, {
        "mean" : 1.256335921E9,
        "variance" : 2.92586490578E13,
        "n" : 2,
        "max" : 1.260160751E9,
        "min" : 1.252511091E9,
        "sum" : 2.512671842E9,
        "standardDeviation" : 5409126.459771485
      } ],
      "1" : [ {
        "mean" : 1.28483566E9,
        "variance" : 5.203499862903686E14,
        "n" : 3,
        "max" : 1.311136949E9,
        "min" : 1.263934014E9,
        "sum" : 3.85450698E9,
        "standardDeviation" : 2.2811181168242224E7
      }, {
        "mean" : 1.2290563075E9,
        "variance" : 4.0289348345688444E14,
        "n" : 2,
        "max" : 1.243249501E9,
        "min" : 1.214863114E9,
        "sum" : 2.458112615E9,
        "standardDeviation" : 2.0072206741085656E7
      } ],
      "2" : [ {
        "mean" : 1.26943196925E9,
        "variance" : 6.068841517414374E14,
        "n" : 3,
        "max" : 1.306023485E9,
        "min" : 1.25361983E9,
        "sum" : 3.80829590775E9,
        "standardDeviation" : 2.4635018809439488E7
      }, {
        "mean" : 1.2358521715E9,
        "variance" : 1.536846696405E11,
        "n" : 2,
        "max" : 1.236129376E9,
        "min" : 1.235574967E9,
        "sum" : 2.471704343E9,
        "standardDeviation" : 392026.36345085263
      } ],
      "3" : [ {
        "mean" : 1.28127107825E9,
        "variance" : 8.060771649818484E14,
        "n" : 3,
        "max" : 1.320362494E9,
        "min" : 1.256708716E9,
        "sum" : 3.84381323475E9,
        "standardDeviation" : 2.8391498110910743E7
      }, {
        "mean" : 1.225526763E9,
        "variance" : 7.56284964649992E14,
        "n" : 2,
        "max" : 1.244972649E9,
        "min" : 1.206080877E9,
        "sum" : 2.451053526E9,
        "standardDeviation" : 2.7500635713561095E7
      } ],
      "4" : [ {
        "mean" : 1.26135540875E9,
        "variance" : 3.894408654600297E14,
        "n" : 3,
        "max" : 1.28798672E9,
        "min" : 1.245137218E9,
        "sum" : 3.78406622625E9,
        "standardDeviation" : 1.9734256141543053E7
      }, {
        "mean" : 1.230485106E9,
        "variance" : 4.502094243602E12,
        "n" : 2,
        "max" : 1.231985455E9,
        "min" : 1.228984757E9,
        "sum" : 2.460970212E9,
        "standardDeviation" : 2121813.9040929107
      } ],
      "5" : [ {
        "mean" : 1.270996762E9,
        "variance" : 4.7504832515454875E14,
        "n" : 3,
        "max" : 1.301049024E9,
        "min" : 1.249739977E9,
        "sum" : 3.812990286E9,
        "standardDeviation" : 2.1795603344586466E7
      }, {
        "mean" : 1.2541666275E9,
        "variance" : 7.7308664219405E12,
        "n" : 2,
        "max" : 1.256132698E9,
        "min" : 1.252200557E9,
        "sum" : 2.508333255E9,
        "standardDeviation" : 2780443.565681652
      } ],
      "6" : [ {
        "mean" : 1.279047321E9,
        "variance" : 2.0932571157536425E14,
        "n" : 3,
        "max" : 1.292905239E9,
        "min" : 1.262005864E9,
        "sum" : 3.837141963E9,
        "standardDeviation" : 1.446809287969096E7
      }, {
        "mean" : 1.2564498885E9,
        "variance" : 9.457814331404999E11,
        "n" : 2,
        "max" : 1.257137559E9,
        "min" : 1.255762218E9,
        "sum" : 2.512899777E9,
        "standardDeviation" : 972512.9475438874
      } ],
      "7" : [ {
        "mean" : 1.2766208505E9,
        "variance" : 2.6109165883304762E14,
        "n" : 3,
        "max" : 1.297215439E9,
        "min" : 1.263246376E9,
        "sum" : 3.8298625515E9,
        "standardDeviation" : 1.615833094205734E7
      }, {
        "mean" : 1.246920677E9,
        "variance" : 2.5716525697928E13,
        "n" : 2,
        "max" : 1.250506519E9,
        "min" : 1.243334835E9,
        "sum" : 2.493841354E9,
        "standardDeviation" : 5071146.388927064
      } ],
      "8" : [ {
        "mean" : 1.2953265445E9,
        "variance" : 7.580237728720768E14,
        "n" : 3,
        "max" : 1.33493899E9,
        "min" : 1.275153375E9,
        "sum" : 3.8859796335E9,
        "standardDeviation" : 2.753223152728592E7
      }, {
        "mean" : 1.2330192615E9,
        "variance" : 1.1412188628841128E15,
        "n" : 2,
        "max" : 1.256906694E9,
        "min" : 1.209131829E9,
        "sum" : 2.466038523E9,
        "standardDeviation" : 3.378193101177185E7
      } ],
      "9" : [ {
        "mean" : 1.28613443375E9,
        "variance" : 1.1763494314373638E15,
        "n" : 3,
        "max" : 1.336848003E9,
        "min" : 1.26111228E9,
        "sum" : 3.85840330125E9,
        "standardDeviation" : 3.429795083437732E7
      }, {
        "mean" : 1.227120842E9,
        "variance" : 9.328399986081619E14,
        "n" : 2,
        "max" : 1.248717601E9,
        "min" : 1.205524083E9,
        "sum" : 2.454241684E9,
        "standardDeviation" : 3.05424294811032E7
      } ],
      "10" : [ {
        "mean" : 1.2827990645E9,
        "variance" : 3.4747085812383775E14,
        "n" : 3,
        "max" : 1.307055042E9,
        "min" : 1.263551819E9,
        "sum" : 3.8483971935E9,
        "standardDeviation" : 1.864057021992186E7
      }, {
        "mean" : 1.253814893E9,
        "variance" : 4.65750460125E12,
        "n" : 2,
        "max" : 1.255340918E9,
        "min" : 1.252288868E9,
        "sum" : 2.507629786E9,
        "standardDeviation" : 2158125.2515204023
      } ],
      "11" : [ {
        "mean" : 1.27302881575E9,
        "variance" : 4.9686238193727825E14,
        "n" : 3,
        "max" : 1.304560495E9,
        "min" : 1.257125863E9,
        "sum" : 3.81908644725E9,
        "standardDeviation" : 2.2290410089033317E7
      }, {
        "mean" : 1.224291396E9,
        "variance" : 7.402002106723921E14,
        "n" : 2,
        "max" : 1.243529382E9,
        "min" : 1.20505341E9,
        "sum" : 2.448582792E9,
        "standardDeviation" : 2.720662071394373E7
      } ],
      "12" : [ {
        "mean" : 1.27713702675E9,
        "variance" : 3.511545591692569E14,
        "n" : 3,
        "max" : 1.296740016E9,
        "min" : 1.252267682E9,
        "sum" : 3.83141108025E9,
        "standardDeviation" : 1.873911842027946E7
      }, {
        "mean" : 1.2388016505E9,
        "variance" : 7.311364485321644E14,
        "n" : 2,
        "max" : 1.257921489E9,
        "min" : 1.219681812E9,
        "sum" : 2.477603301E9,
        "standardDeviation" : 2.7039534917083252E7
      } ],
      "13" : [ {
        "mean" : 1.27755589225E9,
        "variance" : 4.180474481533769E14,
        "n" : 3,
        "max" : 1.304754707E9,
        "min" : 1.255846608E9,
        "sum" : 3.83266767675E9,
        "standardDeviation" : 2.0446208649854302E7
      }, {
        "mean" : 1.249432497E9,
        "variance" : 2.957696268482E12,
        "n" : 2,
        "max" : 1.250648576E9,
        "min" : 1.248216418E9,
        "sum" : 2.498864994E9,
        "standardDeviation" : 1719795.414717111
      } ],
      "14" : [ {
        "mean" : 1.26799061525E9,
        "variance" : 5.300081486188182E14,
        "n" : 3,
        "max" : 1.30047124E9,
        "min" : 1.250110282E9,
        "sum" : 3.80397184575E9,
        "standardDeviation" : 2.3021905842454012E7
      }, {
        "mean" : 1.239640069E9,
        "variance" : 2.4638318675912E13,
        "n" : 2,
        "max" : 1.243149935E9,
        "min" : 1.236130203E9,
        "sum" : 2.479280138E9,
        "standardDeviation" : 4963700.099312206
      } ],
      "15" : [ {
        "mean" : 1.306957E9,
        "variance" : 3.6623801105621306E14,
        "n" : 3,
        "max" : 1.326047239E9,
        "min" : 1.290242988E9,
        "sum" : 3.920871E9,
        "standardDeviation" : 1.9137345977334816E7
      }, {
        "mean" : 1.2491207815E9,
        "variance" : 7.723365324121205E14,
        "n" : 2,
        "max" : 1.268771946E9,
        "min" : 1.229469617E9,
        "sum" : 2.498241563E9,
        "standardDeviation" : 2.77909433523247E7
      } ],
      "16" : [ {
        "mean" : 1.2702461905E9,
        "variance" : 4.7810442457546256E14,
        "n" : 3,
        "max" : 1.30155492E9,
        "min" : 1.251719259E9,
        "sum" : 3.8107385715E9,
        "standardDeviation" : 2.186559911311516E7
      }, {
        "mean" : 1.2435169565E9,
        "variance" : 5.2889686854050006E11,
        "n" : 2,
        "max" : 1.244031202E9,
        "min" : 1.243002711E9,
        "sum" : 2.487033913E9,
        "standardDeviation" : 727252.9604893335
      } ],
      "17" : [ {
        "mean" : 1.27808719525E9,
        "variance" : 3.8820315616480925E14,
        "n" : 3,
        "max" : 1.300620067E9,
        "min" : 1.258361477E9,
        "sum" : 3.83426158575E9,
        "standardDeviation" : 1.9702871774561424E7
      }, {
        "mean" : 1.248999622E9,
        "variance" : 3.6007676413298E13,
        "n" : 2,
        "max" : 1.253242715E9,
        "min" : 1.244756529E9,
        "sum" : 2.497999244E9,
        "standardDeviation" : 6000639.667010343
      } ],
      "18" : [ {
        "mean" : 1.28016659725E9,
        "variance" : 5.829567624126356E14,
        "n" : 3,
        "max" : 1.311254156E9,
        "min" : 1.252551323E9,
        "sum" : 3.84049979175E9,
        "standardDeviation" : 2.414449755974714E7
      }, {
        "mean" : 1.229466013E9,
        "variance" : 3.47947240577672E14,
        "n" : 2,
        "max" : 1.242655919E9,
        "min" : 1.216276107E9,
        "sum" : 2.458932026E9,
        "standardDeviation" : 1.865334395162626E7
      } ],
      "19" : [ {
        "mean" : 1.300187678E9,
        "variance" : 1.0913545107755681E15,
        "n" : 3,
        "max" : 1.34327922E9,
        "min" : 1.271656188E9,
        "sum" : 3.900563034E9,
        "standardDeviation" : 3.303565514373172E7
      }, {
        "mean" : 1.2662995605E9,
        "variance" : 3.54845753068805E13,
        "n" : 2,
        "max" : 1.27051172E9,
        "min" : 1.262087401E9,
        "sum" : 2.532599121E9,
        "standardDeviation" : 5956893.091778675
      } ],
      "20" : [ {
        "mean" : 1.28121845725E9,
        "variance" : 1.1729252575555332E15,
        "n" : 3,
        "max" : 1.326260394E9,
        "min" : 1.249299838E9,
        "sum" : 3.84365537175E9,
        "standardDeviation" : 3.424799640206027E7
      }, {
        "mean" : 1.222417099E9,
        "variance" : 9.336023471174479E14,
        "n" : 2,
        "max" : 1.244022681E9,
        "min" : 1.200811517E9,
        "sum" : 2.444834198E9,
        "standardDeviation" : 3.0554907087364018E7
      } ],
      "21" : [ {
        "mean" : 1.3172044605E9,
        "variance" : 7.682419445666676E14,
        "n" : 3,
        "max" : 1.353792573E9,
        "min" : 1.286531811E9,
        "sum" : 3.9516133815E9,
        "standardDeviation" : 2.7717177788632587E7
      }, {
        "mean" : 1.2512424075E9,
        "variance" : 1.722349996847045E14,
        "n" : 2,
        "max" : 1.260522359E9,
        "min" : 1.241962456E9,
        "sum" : 2.502484815E9,
        "standardDeviation" : 1.3123833269464547E7
      } ],
      "22" : [ {
        "mean" : 1.2673933185E9,
        "variance" : 4.72711926581439E14,
        "n" : 3,
        "max" : 1.298103751E9,
        "min" : 1.2504865E9,
        "sum" : 3.8021799555E9,
        "standardDeviation" : 2.1741939347294644E7
      }, {
        "mean" : 1.2244049505E9,
        "variance" : 8.695863270426606E14,
        "n" : 2,
        "max" : 1.245256645E9,
        "min" : 1.203553256E9,
        "sum" : 2.448809901E9,
        "standardDeviation" : 2.9488749160360474E7
      } ],
      "23" : [ {
        "mean" : 1.28003913125E9,
        "variance" : 5.752196188926309E14,
        "n" : 3,
        "max" : 1.314548631E9,
        "min" : 1.259230994E9,
        "sum" : 3.84011739375E9,
        "standardDeviation" : 2.398373654985042E7
      }, {
        "mean" : 1.239605055E9,
        "variance" : 1.20253684445E12,
        "n" : 2,
        "max" : 1.24038047E9,
        "min" : 1.23882964E9,
        "sum" : 2.47921011E9,
        "standardDeviation" : 1096602.4094675335
      } ],
      "24" : [ {
        "mean" : 1.27779743725E9,
        "variance" : 1.660262317901989E14,
        "n" : 3,
        "max" : 1.295946904E9,
        "min" : 1.265987191E9,
        "sum" : 3.83339231175E9,
        "standardDeviation" : 1.2885116677399507E7
      }, {
        "mean" : 1.255655598E9,
        "variance" : 4.1423227148180005E12,
        "n" : 2,
        "max" : 1.257094751E9,
        "min" : 1.254216445E9,
        "sum" : 2.511311196E9,
        "standardDeviation" : 2035269.690929927
      } ],
      "25" : [ {
        "mean" : 1.278784341E9,
        "variance" : 3.671623627499732E14,
        "n" : 3,
        "max" : 1.305118859E9,
        "min" : 1.262124144E9,
        "sum" : 3.836353023E9,
        "standardDeviation" : 1.91614812253639E7
      }, {
        "mean" : 1.249038635E9,
        "variance" : 3.4788325876322E13,
        "n" : 2,
        "max" : 1.253209266E9,
        "min" : 1.244868004E9,
        "sum" : 2.49807727E9,
        "standardDeviation" : 5898162.923853664
      } ],
      "26" : [ {
        "mean" : 1.29574957975E9,
        "variance" : 2.557810561125102E14,
        "n" : 3,
        "max" : 1.316947304E9,
        "min" : 1.282377135E9,
        "sum" : 3.88724873925E9,
        "standardDeviation" : 1.5993156539986413E7
      }, {
        "mean" : 1.2423791785E9,
        "variance" : 8.375082320556125E14,
        "n" : 2,
        "max" : 1.262842661E9,
        "min" : 1.221915696E9,
        "sum" : 2.484758357E9,
        "standardDeviation" : 2.893973448488449E7
      } ],
      "27" : [ {
        "mean" : 1.29303792325E9,
        "variance" : 3.2603705488136385E15,
        "n" : 3,
        "max" : 1.334945817E9,
        "min" : 1.211409294E9,
        "sum" : 3.87911376975E9,
        "standardDeviation" : 5.7099654541981585E7
      }, {
        "mean" : 1.252069415E9,
        "variance" : 1.5446091108679203E14,
        "n" : 2,
        "max" : 1.260857501E9,
        "min" : 1.243281329E9,
        "sum" : 2.50413883E9,
        "standardDeviation" : 1.2428230408501124E7
      } ],
      "28" : [ {
        "mean" : 1.28604259025E9,
        "variance" : 4.926681894947987E14,
        "n" : 3,
        "max" : 1.318355415E9,
        "min" : 1.268058427E9,
        "sum" : 3.85812777075E9,
        "standardDeviation" : 2.2196130056719318E7
      }, {
        "mean" : 1.25084937E9,
        "variance" : 1.179669504098E12,
        "n" : 2,
        "max" : 1.251617377E9,
        "min" : 1.250081363E9,
        "sum" : 2.50169874E9,
        "standardDeviation" : 1086125.9153974736
      } ],
      "29" : [ {
        "mean" : 1.2716178875E9,
        "variance" : 4.9409706955459044E14,
        "n" : 3,
        "max" : 1.302798701E9,
        "min" : 1.255388489E9,
        "sum" : 3.8148536625E9,
        "standardDeviation" : 2.22282943464988E7
      }, {
        "mean" : 1.219558063E9,
        "variance" : 6.09128831494152E14,
        "n" : 2,
        "max" : 1.237009837E9,
        "min" : 1.202106289E9,
        "sum" : 2.439116126E9,
        "standardDeviation" : 2.468053547827016E7
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 9251655.7,
        "variance" : 1.701926273272601E13,
        "n" : 5,
        "max" : 1.8419059E7,
        "min" : 1205898.0,
        "sum" : 4.62582785E7,
        "standardDeviation" : 4125440.9137358894
      } ],
      "1" : [ {
        "mean" : 9947190.6,
        "variance" : 2.155123659595426E13,
        "n" : 5,
        "max" : 2.1591278E7,
        "min" : 3784373.0,
        "sum" : 4.9735953E7,
        "standardDeviation" : 4642330.944251418
      } ],
      "2" : [ {
        "mean" : 1.0046042299999999E7,
        "variance" : 2.7923280105190676E13,
        "n" : 5,
        "max" : 2.2471842E7,
        "min" : 1373962.0,
        "sum" : 5.023021149999999E7,
        "standardDeviation" : 5284248.300864625
      } ],
      "3" : [ {
        "mean" : 1.0364355500000002E7,
        "variance" : 2.77352418709205E13,
        "n" : 5,
        "max" : 2.0741893E7,
        "min" : 1741354.0,
        "sum" : 5.182177750000001E7,
        "standardDeviation" : 5266425.910512793
      } ],
      "4" : [ {
        "mean" : 9353108.0,
        "variance" : 1.951222991796356E13,
        "n" : 5,
        "max" : 1.9611449E7,
        "min" : 1300507.0,
        "sum" : 4.676554E7,
        "standardDeviation" : 4417264.981633268
      } ],
      "5" : [ {
        "mean" : 1.0021314500000002E7,
        "variance" : 2.9000817665710273E13,
        "n" : 5,
        "max" : 2.3239173E7,
        "min" : 2336927.0,
        "sum" : 5.010657250000001E7,
        "standardDeviation" : 5385240.7249546675
      } ],
      "6" : [ {
        "mean" : 1.0286013E7,
        "variance" : 2.2716262783359773E13,
        "n" : 5,
        "max" : 2.1991127E7,
        "min" : 3255942.0,
        "sum" : 5.1430065E7,
        "standardDeviation" : 4766158.073685741
      } ],
      "7" : [ {
        "mean" : 1.00798358E7,
        "variance" : 3.733648898517374E13,
        "n" : 5,
        "max" : 2.5898362E7,
        "min" : 1394698.0,
        "sum" : 5.0399179E7,
        "standardDeviation" : 6110359.153533755
      } ],
      "8" : [ {
        "mean" : 9444506.1,
        "variance" : 3.4888994529820543E13,
        "n" : 5,
        "max" : 2.4719498E7,
        "min" : 1043134.0,
        "sum" : 4.72225305E7,
        "standardDeviation" : 5906690.658043685
      } ],
      "9" : [ {
        "mean" : 1.2319248099999998E7,
        "variance" : 5.236186696378721E13,
        "n" : 5,
        "max" : 2.7372301E7,
        "min" : 1421934.0,
        "sum" : 6.1596240499999985E7,
        "standardDeviation" : 7236150.009762595
      } ],
      "10" : [ {
        "mean" : 9211807.3,
        "variance" : 1.5976816486670232E13,
        "n" : 5,
        "max" : 1.7796673E7,
        "min" : 997203.0,
        "sum" : 4.60590365E7,
        "standardDeviation" : 3997101.0103161307
      } ],
      "11" : [ {
        "mean" : 9350391.7,
        "variance" : 1.488462665561912E13,
        "n" : 5,
        "max" : 1.8185119E7,
        "min" : 2189634.0,
        "sum" : 4.67519585E7,
        "standardDeviation" : 3858059.960086043
      } ],
      "12" : [ {
        "mean" : 9559534.9,
        "variance" : 1.925665412670233E13,
        "n" : 5,
        "max" : 1.934438E7,
        "min" : 1061504.0,
        "sum" : 4.77976745E7,
        "standardDeviation" : 4388240.4362913305
      } ],
      "13" : [ {
        "mean" : 1.00874638E7,
        "variance" : 3.5063666660504395E13,
        "n" : 5,
        "max" : 2.5524349E7,
        "min" : 1979966.0,
        "sum" : 5.0437319E7,
        "standardDeviation" : 5921458.153234252
      } ],
      "14" : [ {
        "mean" : 9830475.700000001,
        "variance" : 2.374253904563357E13,
        "n" : 5,
        "max" : 2.0926225E7,
        "min" : 1270493.0,
        "sum" : 4.915237850000001E7,
        "standardDeviation" : 4872631.634510613
      } ],
      "15" : [ {
        "mean" : 9724446.5,
        "variance" : 2.7365574584958938E13,
        "n" : 5,
        "max" : 2.1544807E7,
        "min" : 1032743.0,
        "sum" : 4.86222325E7,
        "standardDeviation" : 5231211.5790664535
      } ],
      "16" : [ {
        "mean" : 1.01396657E7,
        "variance" : 1.3077717624685344E13,
        "n" : 5,
        "max" : 1.7742849E7,
        "min" : 5696100.0,
        "sum" : 5.06983285E7,
        "standardDeviation" : 3616312.711130682
      } ],
      "17" : [ {
        "mean" : 9016774.4,
        "variance" : 1.43331137124596E13,
        "n" : 5,
        "max" : 1.6873169E7,
        "min" : 1079781.0,
        "sum" : 4.5083872E7,
        "standardDeviation" : 3785909.892279477
      } ],
      "18" : [ {
        "mean" : 9468358.799999999,
        "variance" : 1.2803238568427064E13,
        "n" : 5,
        "max" : 1.8093468E7,
        "min" : 3486198.0,
        "sum" : 4.734179399999999E7,
        "standardDeviation" : 3578161.3390716556
      } ],
      "19" : [ {
        "mean" : 1.16815221E7,
        "variance" : 3.0367889978390098E13,
        "n" : 5,
        "max" : 2.0417972E7,
        "min" : 2362589.0,
        "sum" : 5.84076105E7,
        "standardDeviation" : 5510706.849251745
      } ],
      "20" : [ {
        "mean" : 9461908.5,
        "variance" : 1.759525136638472E13,
        "n" : 5,
        "max" : 1.8605456E7,
        "min" : 984447.0,
        "sum" : 4.73095425E7,
        "standardDeviation" : 4194669.398937742
      } ],
      "21" : [ {
        "mean" : 9163133.7,
        "variance" : 1.4766299053550453E13,
        "n" : 5,
        "max" : 1.7201075E7,
        "min" : 1062292.0,
        "sum" : 4.58156685E7,
        "standardDeviation" : 3842694.2440884435
      } ],
      "22" : [ {
        "mean" : 9460977.700000001,
        "variance" : 1.125881379123157E13,
        "n" : 5,
        "max" : 1.7439167E7,
        "min" : 3507656.0,
        "sum" : 4.730488850000001E7,
        "standardDeviation" : 3355415.5914329854
      } ],
      "23" : [ {
        "mean" : 1.17653167E7,
        "variance" : 1.4587825673582676E13,
        "n" : 5,
        "max" : 1.7840231E7,
        "min" : 6218965.0,
        "sum" : 5.88265835E7,
        "standardDeviation" : 3819401.2192466343
      } ],
      "24" : [ {
        "mean" : 9717617.600000001,
        "variance" : 1.1404298028132045E13,
        "n" : 5,
        "max" : 1.8751E7,
        "min" : 6021752.0,
        "sum" : 4.858808800000001E7,
        "standardDeviation" : 3377025.026281571
      } ],
      "25" : [ {
        "mean" : 1.0108895899999999E7,
        "variance" : 3.439452297432454E13,
        "n" : 5,
        "max" : 2.5885265E7,
        "min" : 3296813.0,
        "sum" : 5.054447949999999E7,
        "standardDeviation" : 5864684.388296146
      } ],
      "26" : [ {
        "mean" : 1.04961156E7,
        "variance" : 2.7595519292493156E13,
        "n" : 5,
        "max" : 1.9850129E7,
        "min" : 1847556.0,
        "sum" : 5.2480578E7,
        "standardDeviation" : 5253143.753267481
      } ],
      "27" : [ {
        "mean" : 1.20535787E7,
        "variance" : 3.0004865084447566E13,
        "n" : 5,
        "max" : 1.92592E7,
        "min" : 1503561.0,
        "sum" : 6.02678935E7,
        "standardDeviation" : 5477669.676463484
      } ],
      "28" : [ {
        "mean" : 8981213.000000002,
        "variance" : 1.4126432009596223E13,
        "n" : 5,
        "max" : 1.6734564E7,
        "min" : 1010413.0,
        "sum" : 4.490606500000001E7,
        "standardDeviation" : 3758514.601487697
      } ],
      "29" : [ {
        "mean" : 9147215.5,
        "variance" : 1.4315161035352275E13,
        "n" : 5,
        "max" : 1.7460145E7,
        "min" : 1728917.0,
        "sum" : 4.57360775E7,
        "standardDeviation" : 3783538.1635913593
      } ]
    }
  },
  "children" : [ {
    "call" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "kiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createVerticesFromCSV()",
    "otherKiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createVerticesFromCSV()",
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "key" : "csv.io.reader.CSVReaderTest.createVerticesFromCSV_",
    "otherKey" : "csv.io.reader.CSVReaderTest.createVerticesFromCSV_",
    "parent" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 9886630.850000001,
      "meanCurrent" : 1.26542275672E9,
      "deviationOld" : 878717.8833809302,
      "deviationCurrent" : 1.0214086500177475E7,
      "vms" : 30,
      "callsOld" : 150,
      "calls" : 150,
      "tvalue" : -670.7938706921201,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 2.8348845617578078E7,
    "ess" : 1,
    "values" : [ 1.27070252785E9, 1.2623718866E9, 1.2558409767E9, 1.25881132205E9, 1.2488751768E9, 1.2641080655E9, 1.26986987975E9, 1.26458143E9, 1.2702437576E9, 1.2623658415E9, 1.2710239334E9, 1.25338909945E9, 1.26165700065E9, 1.2661481219E9, 1.25650038545E9, 1.28364783655E9, 1.25936022385E9, 1.26628608825E9, 1.2597402765E9, 1.28645041615E9, 1.2575572676E9, 1.29064618465E9, 1.25006130165E9, 1.26369332275E9, 1.26876984095E9, 1.2667495533E9, 1.27424802805E9, 1.2764961114E9, 1.27182910675E9, 1.250657738E9 ],
    "valuesPredecessor" : [ 9171350.299999999, 9855249.8, 9948001.399999999, 1.02651243E7, 9264150.0, 9926755.600000001, 1.00496017E7, 9982618.0, 9352301.299999999, 1.21961878E7, 9140480.1, 9267821.5, 9476904.1, 9988221.100000001, 9728576.0, 9615195.0, 1.00543263E7, 8935865.5, 9383295.299999999, 1.15762338E7, 9372664.0, 9082842.299999999, 9377316.7, 1.1644066700000001E7, 9644429.6, 1.00129379E7, 1.03862902E7, 1.1935696200000001E7, 8897556.9, 9066866.1 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1.28037578175E9,
          "variance" : 6.940241296116871E14,
          "n" : 3,
          "max" : 1.318347836E9,
          "min" : 1.258218253E9,
          "sum" : 3.84112734525E9,
          "standardDeviation" : 2.634433771442522E7
        }, {
          "mean" : 1.256192647E9,
          "variance" : 2.91848E13,
          "n" : 2,
          "max" : 1.260012647E9,
          "min" : 1.252372647E9,
          "sum" : 2.512385294E9,
          "standardDeviation" : 5402295.808265223
        } ],
        "1" : [ {
          "mean" : 1.284678489E9,
          "variance" : 5.204135128377406E14,
          "n" : 3,
          "max" : 1.310979095E9,
          "min" : 1.26377616E9,
          "sum" : 3.854035467E9,
          "standardDeviation" : 2.2812573568927743E7
        }, {
          "mean" : 1.228911983E9,
          "variance" : 4.0298582966480006E14,
          "n" : 2,
          "max" : 1.243106803E9,
          "min" : 1.214717163E9,
          "sum" : 2.457823966E9,
          "standardDeviation" : 2.0074506959444858E7
        } ],
        "2" : [ {
          "mean" : 1.2692684125E9,
          "variance" : 6.064336518746024E14,
          "n" : 3,
          "max" : 1.305846076E9,
          "min" : 1.253471234E9,
          "sum" : 3.8078052375E9,
          "standardDeviation" : 2.4625873626626983E7
        }, {
          "mean" : 1.235699823E9,
          "variance" : 1.575962082E11,
          "n" : 2,
          "max" : 1.235980533E9,
          "min" : 1.235419113E9,
          "sum" : 2.471399646E9,
          "standardDeviation" : 396983.8890937515
        } ],
        "3" : [ {
          "mean" : 1.28110430275E9,
          "variance" : 8.056841423664489E14,
          "n" : 3,
          "max" : 1.32018606E9,
          "min" : 1.256553741E9,
          "sum" : 3.84331290825E9,
          "standardDeviation" : 2.838457578274597E7
        }, {
          "mean" : 1.225371851E9,
          "variance" : 7.565006737965619E14,
          "n" : 2,
          "max" : 1.24482051E9,
          "min" : 1.205923192E9,
          "sum" : 2.450743702E9,
          "standardDeviation" : 2.7504557327769555E7
        } ],
        "4" : [ {
          "mean" : 1.261217018E9,
          "variance" : 3.893017220850653E14,
          "n" : 3,
          "max" : 1.287841913E9,
          "min" : 1.24499383E9,
          "sum" : 3.783651054E9,
          "standardDeviation" : 1.9730730399178468E7
        }, {
          "mean" : 1.230362415E9,
          "variance" : 4.504555152161999E12,
          "n" : 2,
          "max" : 1.231863174E9,
          "min" : 1.228861656E9,
          "sum" : 2.46072483E9,
          "standardDeviation" : 2122393.7316534836
        } ],
        "5" : [ {
          "mean" : 1.2708441135E9,
          "variance" : 4.748370068671062E14,
          "n" : 3,
          "max" : 1.300887351E9,
          "min" : 1.249589E9,
          "sum" : 3.8125323405E9,
          "standardDeviation" : 2.1790755077947762E7
        }, {
          "mean" : 1.2540039935E9,
          "variance" : 7.6767451163045E12,
          "n" : 2,
          "max" : 1.25596317E9,
          "min" : 1.252044817E9,
          "sum" : 2.508007987E9,
          "standardDeviation" : 2770693.977382652
        } ],
        "6" : [ {
          "mean" : 1.27890162225E9,
          "variance" : 2.091798824527279E14,
          "n" : 3,
          "max" : 1.29274594E9,
          "min" : 1.261856699E9,
          "sum" : 3.83670486675E9,
          "standardDeviation" : 1.4463052321440585E7
        }, {
          "mean" : 1.256322266E9,
          "variance" : 9.404485228819999E11,
          "n" : 2,
          "max" : 1.257007995E9,
          "min" : 1.255636537E9,
          "sum" : 2.512644532E9,
          "standardDeviation" : 969767.25191254
        } ],
        "7" : [ {
          "mean" : 1.276452898E9,
          "variance" : 2.60687829927294E14,
          "n" : 3,
          "max" : 1.297021682E9,
          "min" : 1.26307527E9,
          "sum" : 3.829358694E9,
          "standardDeviation" : 1.6145830109576095E7
        }, {
          "mean" : 1.246774228E9,
          "variance" : 2.5718734624032E13,
          "n" : 2,
          "max" : 1.250360224E9,
          "min" : 1.243188232E9,
          "sum" : 2.493548456E9,
          "standardDeviation" : 5071364.177815669
        } ],
        "8" : [ {
          "mean" : 1.295158795E9,
          "variance" : 7.576748805621024E14,
          "n" : 3,
          "max" : 1.334766339E9,
          "min" : 1.275001271E9,
          "sum" : 3.885476385E9,
          "standardDeviation" : 2.7525894727730513E7
        }, {
          "mean" : 1.2328712015E9,
          "variance" : 1.1404631896560125E15,
          "n" : 2,
          "max" : 1.256750724E9,
          "min" : 1.208991679E9,
          "sum" : 2.465742403E9,
          "standardDeviation" : 3.377074458249348E7
        } ],
        "9" : [ {
          "mean" : 1.2859638725E9,
          "variance" : 1.175267813937234E15,
          "n" : 3,
          "max" : 1.336654804E9,
          "min" : 1.260957974E9,
          "sum" : 3.8578916175E9,
          "standardDeviation" : 3.428217924720122E7
        }, {
          "mean" : 1.226968795E9,
          "variance" : 9.330515724545281E14,
          "n" : 2,
          "max" : 1.248568003E9,
          "min" : 1.205369587E9,
          "sum" : 2.45393759E9,
          "standardDeviation" : 3.0545892890117455E7
        } ],
        "10" : [ {
          "mean" : 1.282612408E9,
          "variance" : 3.4742073311331294E14,
          "n" : 3,
          "max" : 1.306868228E9,
          "min" : 1.263370172E9,
          "sum" : 3.847837224E9,
          "standardDeviation" : 1.863922565755651E7
        }, {
          "mean" : 1.2536412215E9,
          "variance" : 4.658423313600501E12,
          "n" : 2,
          "max" : 1.255167397E9,
          "min" : 1.252115046E9,
          "sum" : 2.507282443E9,
          "standardDeviation" : 2158338.0906615397
        } ],
        "11" : [ {
          "mean" : 1.27288118875E9,
          "variance" : 4.965615536625069E14,
          "n" : 3,
          "max" : 1.304402805E9,
          "min" : 1.256974244E9,
          "sum" : 3.81864356625E9,
          "standardDeviation" : 2.2283661136862293E7
        }, {
          "mean" : 1.2241509655E9,
          "variance" : 7.398915501333005E14,
          "n" : 2,
          "max" : 1.24338494E9,
          "min" : 1.204916991E9,
          "sum" : 2.448301931E9,
          "standardDeviation" : 2.720094759623827E7
        } ],
        "12" : [ {
          "mean" : 1.27698997675E9,
          "variance" : 3.5089220557404094E14,
          "n" : 3,
          "max" : 1.296578116E9,
          "min" : 1.252124813E9,
          "sum" : 3.83096993025E9,
          "standardDeviation" : 1.8732116953885403E7
        }, {
          "mean" : 1.2386575365E9,
          "variance" : 7.310798549054045E14,
          "n" : 2,
          "max" : 1.257776635E9,
          "min" : 1.219538438E9,
          "sum" : 2.477315073E9,
          "standardDeviation" : 2.70384883990471E7
        } ],
        "13" : [ {
          "mean" : 1.2773973685E9,
          "variance" : 4.179405968238473E14,
          "n" : 3,
          "max" : 1.304592736E9,
          "min" : 1.255690715E9,
          "sum" : 3.8321921055E9,
          "standardDeviation" : 2.044359549648367E7
        }, {
          "mean" : 1.249274252E9,
          "variance" : 2.9522750425919995E12,
          "n" : 2,
          "max" : 1.250489216E9,
          "min" : 1.248059288E9,
          "sum" : 2.498548504E9,
          "standardDeviation" : 1718218.566595065
        } ],
        "14" : [ {
          "mean" : 1.26783861475E9,
          "variance" : 5.2982219613715494E14,
          "n" : 3,
          "max" : 1.300312685E9,
          "min" : 1.249952841E9,
          "sum" : 3.80351584425E9,
          "standardDeviation" : 2.301786688937867E7
        }, {
          "mean" : 1.2394930415E9,
          "variance" : 2.4542641537960504E13,
          "n" : 2,
          "max" : 1.242996086E9,
          "min" : 1.235989997E9,
          "sum" : 2.478986083E9,
          "standardDeviation" : 4954053.041496478
        } ],
        "15" : [ {
          "mean" : 1.30678388625E9,
          "variance" : 3.6632400013240494E14,
          "n" : 3,
          "max" : 1.325870711E9,
          "min" : 1.290073641E9,
          "sum" : 3.92035165875E9,
          "standardDeviation" : 1.9139592475609425E7
        }, {
          "mean" : 1.248943762E9,
          "variance" : 7.728083503031121E14,
          "n" : 2,
          "max" : 1.268600928E9,
          "min" : 1.229286596E9,
          "sum" : 2.497887524E9,
          "standardDeviation" : 2.7799430755019285E7
        } ],
        "16" : [ {
          "mean" : 1.27004561875E9,
          "variance" : 4.7777206694209944E14,
          "n" : 3,
          "max" : 1.301344402E9,
          "min" : 1.251524205E9,
          "sum" : 3.81013685625E9,
          "standardDeviation" : 2.1857997779808182E7
        }, {
          "mean" : 1.2433321315E9,
          "variance" : 5.2239020051250006E11,
          "n" : 2,
          "max" : 1.243843204E9,
          "min" : 1.242821059E9,
          "sum" : 2.486664263E9,
          "standardDeviation" : 722765.6608559237
        } ],
        "17" : [ {
          "mean" : 1.27791827875E9,
          "variance" : 3.8807047379627225E14,
          "n" : 3,
          "max" : 1.300440513E9,
          "min" : 1.258195933E9,
          "sum" : 3.83375483625E9,
          "standardDeviation" : 1.9699504404839028E7
        }, {
          "mean" : 1.2488378025E9,
          "variance" : 3.60094670208045E13,
          "n" : 2,
          "max" : 1.253081001E9,
          "min" : 1.244594604E9,
          "sum" : 2.497675605E9,
          "standardDeviation" : 6000788.866541173
        } ],
        "18" : [ {
          "mean" : 1.2800180365E9,
          "variance" : 5.82641721140937E14,
          "n" : 3,
          "max" : 1.31109937E9,
          "min" : 1.252413322E9,
          "sum" : 3.8400541095E9,
          "standardDeviation" : 2.4137972597982146E7
        }, {
          "mean" : 1.2293236365E9,
          "variance" : 3.4827429516542444E14,
          "n" : 2,
          "max" : 1.24251974E9,
          "min" : 1.216127533E9,
          "sum" : 2.458647273E9,
          "standardDeviation" : 1.8662108540179066E7
        } ],
        "19" : [ {
          "mean" : 1.30000165925E9,
          "variance" : 1.0913920474555971E15,
          "n" : 3,
          "max" : 1.343092264E9,
          "min" : 1.271469914E9,
          "sum" : 3.90000497775E9,
          "standardDeviation" : 3.3036223262588553E7
        }, {
          "mean" : 1.2661235515E9,
          "variance" : 3.54239292958445E13,
          "n" : 2,
          "max" : 1.27033211E9,
          "min" : 1.261914993E9,
          "sum" : 2.532247103E9,
          "standardDeviation" : 5951800.508740569
        } ],
        "20" : [ {
          "mean" : 1.281073195E9,
          "variance" : 1.1724508946761362E15,
          "n" : 3,
          "max" : 1.326105264E9,
          "min" : 1.249165788E9,
          "sum" : 3.843219585E9,
          "standardDeviation" : 3.4241070291042835E7
        }, {
          "mean" : 1.2222833765E9,
          "variance" : 9.333665586849244E14,
          "n" : 2,
          "max" : 1.24388623E9,
          "min" : 1.200680523E9,
          "sum" : 2.444566753E9,
          "standardDeviation" : 3.0551048405659083E7
        } ],
        "21" : [ {
          "mean" : 1.31701991475E9,
          "variance" : 7.67990068104484E14,
          "n" : 3,
          "max" : 1.353605774E9,
          "min" : 1.286357051E9,
          "sum" : 3.95105974425E9,
          "standardDeviation" : 2.7712633727318015E7
        }, {
          "mean" : 1.2510855895E9,
          "variance" : 1.718753111515845E14,
          "n" : 2,
          "max" : 1.260355846E9,
          "min" : 1.241815333E9,
          "sum" : 2.502171179E9,
          "standardDeviation" : 1.311012246897734E7
        } ],
        "22" : [ {
          "mean" : 1.26725182375E9,
          "variance" : 4.7246768296132694E14,
          "n" : 3,
          "max" : 1.29795279E9,
          "min" : 1.250342741E9,
          "sum" : 3.80175547125E9,
          "standardDeviation" : 2.173632174406072E7
        }, {
          "mean" : 1.2242755185E9,
          "variance" : 8.691939424262205E14,
          "n" : 2,
          "max" : 1.245122508E9,
          "min" : 1.203428529E9,
          "sum" : 2.448551037E9,
          "standardDeviation" : 2.9482095285549507E7
        } ],
        "23" : [ {
          "mean" : 1.27986012825E9,
          "variance" : 5.753072164813742E14,
          "n" : 3,
          "max" : 1.314375509E9,
          "min" : 1.259059437E9,
          "sum" : 3.83958038475E9,
          "standardDeviation" : 2.3985562667600155E7
        }, {
          "mean" : 1.2394431145E9,
          "variance" : 1.2094494944805002E12,
          "n" : 2,
          "max" : 1.240220755E9,
          "min" : 1.238665474E9,
          "sum" : 2.478886229E9,
          "standardDeviation" : 1099749.741750595
        } ],
        "24" : [ {
          "mean" : 1.27763023725E9,
          "variance" : 1.660504340810929E14,
          "n" : 3,
          "max" : 1.295780912E9,
          "min" : 1.265818515E9,
          "sum" : 3.83289071175E9,
          "standardDeviation" : 1.2886055800014716E7
        }, {
          "mean" : 1.2554792465E9,
          "variance" : 4.1398160896125005E12,
          "n" : 2,
          "max" : 1.256917964E9,
          "min" : 1.254040529E9,
          "sum" : 2.510958493E9,
          "standardDeviation" : 2034653.8009235135
        } ],
        "25" : [ {
          "mean" : 1.2786421385E9,
          "variance" : 3.6721731625997175E14,
          "n" : 3,
          "max" : 1.304975482E9,
          "min" : 1.261971224E9,
          "sum" : 3.8359264155E9,
          "standardDeviation" : 1.9162915129488304E7
        }, {
          "mean" : 1.2489106755E9,
          "variance" : 3.4742172309264496E13,
          "n" : 2,
          "max" : 1.253078539E9,
          "min" : 1.244742812E9,
          "sum" : 2.497821351E9,
          "standardDeviation" : 5894249.087819796
        } ],
        "26" : [ {
          "mean" : 1.29559062475E9,
          "variance" : 2.555384148111189E14,
          "n" : 3,
          "max" : 1.316774158E9,
          "min" : 1.282220681E9,
          "sum" : 3.88677187425E9,
          "standardDeviation" : 1.5985568954876736E7
        }, {
          "mean" : 1.242234133E9,
          "variance" : 8.372888369664081E14,
          "n" : 2,
          "max" : 1.262694935E9,
          "min" : 1.221773331E9,
          "sum" : 2.484468266E9,
          "standardDeviation" : 2.893594368543055E7
        } ],
        "27" : [ {
          "mean" : 1.292879941E9,
          "variance" : 3.258706037485952E15,
          "n" : 3,
          "max" : 1.334779082E9,
          "min" : 1.211270884E9,
          "sum" : 3.878639823E9,
          "standardDeviation" : 5.708507718735214E7
        }, {
          "mean" : 1.251920367E9,
          "variance" : 1.54002759303698E14,
          "n" : 2,
          "max" : 1.26069541E9,
          "min" : 1.243145324E9,
          "sum" : 2.503840734E9,
          "standardDeviation" : 1.2409784821007092E7
        } ],
        "28" : [ {
          "mean" : 1.28590130825E9,
          "variance" : 4.923916971847785E14,
          "n" : 3,
          "max" : 1.318206103E9,
          "min" : 1.267926714E9,
          "sum" : 3.85770392475E9,
          "standardDeviation" : 2.2189900792585317E7
        }, {
          "mean" : 1.2507208045E9,
          "variance" : 1.1824928491005E12,
          "n" : 2,
          "max" : 1.25148973E9,
          "min" : 1.249951879E9,
          "sum" : 2.501441609E9,
          "standardDeviation" : 1087424.8705545133
        } ],
        "29" : [ {
          "mean" : 1.271476912E9,
          "variance" : 4.941867791673838E14,
          "n" : 3,
          "max" : 1.302661427E9,
          "min" : 1.255248238E9,
          "sum" : 3.814430736E9,
          "standardDeviation" : 2.2230312169814076E7
        }, {
          "mean" : 1.219428977E9,
          "variance" : 6.090059772003919E14,
          "n" : 2,
          "max" : 1.236878991E9,
          "min" : 1.201978963E9,
          "sum" : 2.438857954E9,
          "standardDeviation" : 2.467804646240038E7
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 9171350.299999999,
          "variance" : 1.6575442851611566E13,
          "n" : 5,
          "max" : 1.818481E7,
          "min" : 1172757.0,
          "sum" : 4.585675149999999E7,
          "standardDeviation" : 4071294.984597845
        } ],
        "1" : [ {
          "mean" : 9855249.8,
          "variance" : 2.0814050598720625E13,
          "n" : 5,
          "max" : 2.1298459E7,
          "min" : 3734083.0,
          "sum" : 4.9276249E7,
          "standardDeviation" : 4562241.8391313525
        } ],
        "2" : [ {
          "mean" : 9948001.399999999,
          "variance" : 2.710883714490849E13,
          "n" : 5,
          "max" : 2.2169934E7,
          "min" : 1320632.0,
          "sum" : 4.974000699999999E7,
          "standardDeviation" : 5206614.749038812
        } ],
        "3" : [ {
          "mean" : 1.02651243E7,
          "variance" : 2.6818085721064895E13,
          "n" : 5,
          "max" : 2.0446316E7,
          "min" : 1699944.0,
          "sum" : 5.13256215E7,
          "standardDeviation" : 5178618.128522791
        } ],
        "4" : [ {
          "mean" : 9264150.0,
          "variance" : 1.9001309963320445E13,
          "n" : 5,
          "max" : 1.9349514E7,
          "min" : 1254968.0,
          "sum" : 4.632075E7,
          "standardDeviation" : 4359049.204049026
        } ],
        "5" : [ {
          "mean" : 9926755.600000001,
          "variance" : 2.812963099727004E13,
          "n" : 5,
          "max" : 2.2934857E7,
          "min" : 2286856.0,
          "sum" : 4.963377800000001E7,
          "standardDeviation" : 5303737.455537372
        } ],
        "6" : [ {
          "mean" : 1.00496017E7,
          "variance" : 2.4317022402693125E13,
          "n" : 5,
          "max" : 2.1675607E7,
          "min" : 1799999.0,
          "sum" : 5.02480085E7,
          "standardDeviation" : 4931229.299342419
        } ],
        "7" : [ {
          "mean" : 9982618.0,
          "variance" : 3.633978693577822E13,
          "n" : 5,
          "max" : 2.5562073E7,
          "min" : 1340142.0,
          "sum" : 4.991309E7,
          "standardDeviation" : 6028249.077118348
        } ],
        "8" : [ {
          "mean" : 9352301.299999999,
          "variance" : 3.380558228518223E13,
          "n" : 5,
          "max" : 2.4357348E7,
          "min" : 995257.0,
          "sum" : 4.676150649999999E7,
          "standardDeviation" : 5814256.812799227
        } ],
        "9" : [ {
          "mean" : 1.21961878E7,
          "variance" : 5.071712628245374E13,
          "n" : 5,
          "max" : 2.6971234E7,
          "min" : 1367341.0,
          "sum" : 6.0980939E7,
          "standardDeviation" : 7121595.767976005
        } ],
        "10" : [ {
          "mean" : 9140480.1,
          "variance" : 1.5623440448498543E13,
          "n" : 5,
          "max" : 1.758831E7,
          "min" : 958745.0,
          "sum" : 4.57024005E7,
          "standardDeviation" : 3952649.8008928825
        } ],
        "11" : [ {
          "mean" : 9267821.5,
          "variance" : 1.4475842275786055E13,
          "n" : 5,
          "max" : 1.7959757E7,
          "min" : 2154829.0,
          "sum" : 4.63391075E7,
          "standardDeviation" : 3804713.1660331576
        } ],
        "12" : [ {
          "mean" : 9476904.1,
          "variance" : 1.8741184747699438E13,
          "n" : 5,
          "max" : 1.9087175E7,
          "min" : 1026253.0,
          "sum" : 4.73845205E7,
          "standardDeviation" : 4329109.001595991
        } ],
        "13" : [ {
          "mean" : 9988221.100000001,
          "variance" : 3.400295014332054E13,
          "n" : 5,
          "max" : 2.516535E7,
          "min" : 1926085.0,
          "sum" : 4.994110550000001E7,
          "standardDeviation" : 5831204.862060716
        } ],
        "14" : [ {
          "mean" : 9728576.0,
          "variance" : 2.3076296316387105E13,
          "n" : 5,
          "max" : 2.0649071E7,
          "min" : 1221733.0,
          "sum" : 4.864288E7,
          "standardDeviation" : 4803779.37840479
        } ],
        "15" : [ {
          "mean" : 9615195.0,
          "variance" : 2.639859193292933E13,
          "n" : 5,
          "max" : 2.1234095E7,
          "min" : 991514.0,
          "sum" : 4.8075975E7,
          "standardDeviation" : 5137956.007297973
        } ],
        "16" : [ {
          "mean" : 1.00543263E7,
          "variance" : 1.2642441771346682E13,
          "n" : 5,
          "max" : 1.7501888E7,
          "min" : 5658677.0,
          "sum" : 5.02716315E7,
          "standardDeviation" : 3555621.151268324
        } ],
        "17" : [ {
          "mean" : 8935865.5,
          "variance" : 1.4013235261396053E13,
          "n" : 5,
          "max" : 1.6671671E7,
          "min" : 1037601.0,
          "sum" : 4.46793275E7,
          "standardDeviation" : 3743425.605163812
        } ],
        "18" : [ {
          "mean" : 9383295.299999999,
          "variance" : 1.2482141400314676E13,
          "n" : 5,
          "max" : 1.789507E7,
          "min" : 3442587.0,
          "sum" : 4.691647649999999E7,
          "standardDeviation" : 3533007.4158306937
        } ],
        "19" : [ {
          "mean" : 1.15762338E7,
          "variance" : 2.947418586595929E13,
          "n" : 5,
          "max" : 2.0142865E7,
          "min" : 2324781.0,
          "sum" : 5.7881169E7,
          "standardDeviation" : 5429013.341847604
        } ],
        "20" : [ {
          "mean" : 9372664.0,
          "variance" : 1.7114649117471555E13,
          "n" : 5,
          "max" : 1.834223E7,
          "min" : 946007.0,
          "sum" : 4.686332E7,
          "standardDeviation" : 4136985.510909067
        } ],
        "21" : [ {
          "mean" : 9082842.299999999,
          "variance" : 1.4407882288894896E13,
          "n" : 5,
          "max" : 1.6976724E7,
          "min" : 1020415.0,
          "sum" : 4.541421149999999E7,
          "standardDeviation" : 3795771.6328692506
        } ],
        "22" : [ {
          "mean" : 9377316.7,
          "variance" : 1.096327312691868E13,
          "n" : 5,
          "max" : 1.7238671E7,
          "min" : 3468207.0,
          "sum" : 4.68865835E7,
          "standardDeviation" : 3311083.376618396
        } ],
        "23" : [ {
          "mean" : 1.1644066700000001E7,
          "variance" : 1.4271211949019572E13,
          "n" : 5,
          "max" : 1.759311E7,
          "min" : 6185637.0,
          "sum" : 5.822033350000001E7,
          "standardDeviation" : 3777725.7641363502
        } ],
        "24" : [ {
          "mean" : 9644429.6,
          "variance" : 1.1046668716953598E13,
          "n" : 5,
          "max" : 1.853697E7,
          "min" : 5980568.0,
          "sum" : 4.8222148E7,
          "standardDeviation" : 3323652.917642514
        } ],
        "25" : [ {
          "mean" : 1.00129379E7,
          "variance" : 3.3325812328030105E13,
          "n" : 5,
          "max" : 2.5528473E7,
          "min" : 3244583.0,
          "sum" : 5.00646895E7,
          "standardDeviation" : 5772851.316986269
        } ],
        "26" : [ {
          "mean" : 1.03862902E7,
          "variance" : 2.659029273192684E13,
          "n" : 5,
          "max" : 1.9534616E7,
          "min" : 1805373.0,
          "sum" : 5.1931451E7,
          "standardDeviation" : 5156577.61814237
        } ],
        "27" : [ {
          "mean" : 1.1935696200000001E7,
          "variance" : 2.920200753952818E13,
          "n" : 5,
          "max" : 1.8969535E7,
          "min" : 1461203.0,
          "sum" : 5.967848100000001E7,
          "standardDeviation" : 5403888.187178578
        } ],
        "28" : [ {
          "mean" : 8897556.9,
          "variance" : 1.375481919012921E13,
          "n" : 5,
          "max" : 1.6509931E7,
          "min" : 971249.0,
          "sum" : 4.44877845E7,
          "standardDeviation" : 3708749.0060840207
        } ],
        "29" : [ {
          "mean" : 9066866.1,
          "variance" : 1.3919591347085213E13,
          "n" : 5,
          "max" : 1.7224044E7,
          "min" : 1683587.0,
          "sum" : 4.53343305E7,
          "standardDeviation" : 3730896.855594538
        } ]
      }
    },
    "children" : [ {
      "call" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "kiekerPattern" : "public new org.gradoop.csv.io.reader.CSVReader.<init>(java.lang.String)",
      "otherKiekerPattern" : "public new org.gradoop.csv.io.reader.CSVReader.<init>()",
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "key" : "org.gradoop.csv.io.reader.CSVReader.<init>_String",
      "otherKey" : "org.gradoop.csv.io.reader.CSVReader.<init>_",
      "parent" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
      "color" : null,
      "statistic" : {
        "meanOld" : 14505.517241379312,
        "meanCurrent" : 14614.551724137931,
        "deviationOld" : 1517.4771820051872,
        "deviationCurrent" : 2719.826375579973,
        "vms" : 29,
        "callsOld" : 150,
        "calls" : 150,
        "tvalue" : -0.18852662373005485
      },
      "hasSourceChange" : true,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 1029.3294488167476,
      "ess" : 2,
      "values" : [ 17502.4, 10585.15, 11754.35, 12065.6, 11703.65, 30930.95, 11818.6, 13423.85, 17841.2, 15900.95, 13852.55, 10034.6, 15396.55, 12255.05, 18758.65, 20179.35, 13085.75, 14725.35, 12118.6, 17776.2, 15328.95, 16397.2, 18157.0, 15737.6, 15999.25, 14674.1, 17677.75, 15218.85, 11804.2, 12048.7 ],
      "valuesPredecessor" : [ 15295.599999999999, 13468.800000000001, 14297.3, 15968.2, 13210.1, 13983.5, 15345.7, 14161.000000000002, 13766.0, 17576.3, 12488.3, 12936.0, 13129.0, 15466.599999999999, 13351.9, 14270.600000000002, 25641.8, 13982.900000000001, 12285.199999999999, 18021.5, 13698.699999999999, 13055.2, 15976.0, 15113.9, 12512.1, 15332.0, 15188.900000000001, 17500.800000000003, 14886.900000000003, 14391.000000000002 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 19604.0,
            "variance" : 1.6174837999999996E7,
            "n" : 3,
            "max" : 24892.0,
            "min" : 15124.0,
            "sum" : 58812.0,
            "standardDeviation" : 4021.795370229569
          }, {
            "mean" : 14350.0,
            "variance" : 952200.0000000001,
            "n" : 2,
            "max" : 15040.0,
            "min" : 13660.0,
            "sum" : 28700.0,
            "standardDeviation" : 975.8073580374356
          } ],
          "1" : [ {
            "mean" : 10719.25,
            "variance" : 51668.249999999985,
            "n" : 3,
            "max" : 11026.0,
            "min" : 10481.0,
            "sum" : 32157.75,
            "standardDeviation" : 227.30651112539647
          }, {
            "mean" : 10384.0,
            "variance" : 10657.999999999998,
            "n" : 2,
            "max" : 10457.0,
            "min" : 10311.0,
            "sum" : 20768.0,
            "standardDeviation" : 103.23759005323593
          } ],
          "2" : [ {
            "mean" : 11730.25,
            "variance" : 179426.25,
            "n" : 3,
            "max" : 12251.0,
            "min" : 11348.0,
            "sum" : 35190.75,
            "standardDeviation" : 423.5873581683004
          }, {
            "mean" : 11790.5,
            "variance" : 17112.5,
            "n" : 2,
            "max" : 11883.0,
            "min" : 11698.0,
            "sum" : 23581.0,
            "standardDeviation" : 130.8147545195113
          } ],
          "3" : [ {
            "mean" : 12470.0,
            "variance" : 515791.33333333384,
            "n" : 3,
            "max" : 13023.0,
            "min" : 11443.0,
            "sum" : 37410.0,
            "standardDeviation" : 718.1861411454094
          }, {
            "mean" : 11459.0,
            "variance" : 9800.0,
            "n" : 2,
            "max" : 11529.0,
            "min" : 11389.0,
            "sum" : 22918.0,
            "standardDeviation" : 98.99494936611666
          } ],
          "4" : [ {
            "mean" : 11951.75,
            "variance" : 19860.25,
            "n" : 3,
            "max" : 12154.0,
            "min" : 11830.0,
            "sum" : 35855.25,
            "standardDeviation" : 140.92639923023648
          }, {
            "mean" : 11331.5,
            "variance" : 18240.500000000004,
            "n" : 2,
            "max" : 11427.0,
            "min" : 11236.0,
            "sum" : 22663.0,
            "standardDeviation" : 135.0573952066306
          } ],
          "5" : [ {
            "mean" : 31042.25,
            "variance" : 504238.25000000006,
            "n" : 3,
            "max" : 32095.0,
            "min" : 30581.0,
            "sum" : 93126.75,
            "standardDeviation" : 710.09735248063
          }, {
            "mean" : 30764.0,
            "variance" : 1167392.0000000002,
            "n" : 2,
            "max" : 31528.0,
            "min" : 30000.0,
            "sum" : 61528.0,
            "standardDeviation" : 1080.4591616530447
          } ],
          "6" : [ {
            "mean" : 12088.0,
            "variance" : 184750.66666666686,
            "n" : 3,
            "max" : 12607.0,
            "min" : 11583.0,
            "sum" : 36264.0,
            "standardDeviation" : 429.82632151447734
          }, {
            "mean" : 11414.5,
            "variance" : 77224.50000000001,
            "n" : 2,
            "max" : 11611.0,
            "min" : 11218.0,
            "sum" : 22829.0,
            "standardDeviation" : 277.8929650063132
          } ],
          "7" : [ {
            "mean" : 14456.75,
            "variance" : 3289334.25,
            "n" : 3,
            "max" : 16285.0,
            "min" : 12334.0,
            "sum" : 43370.25,
            "standardDeviation" : 1813.6521855085666
          }, {
            "mean" : 11874.5,
            "variance" : 94612.49999999999,
            "n" : 2,
            "max" : 12092.0,
            "min" : 11657.0,
            "sum" : 23749.0,
            "standardDeviation" : 307.59144981614816
          } ],
          "8" : [ {
            "mean" : 18581.0,
            "variance" : 145307.33333333328,
            "n" : 3,
            "max" : 18967.0,
            "min" : 18055.0,
            "sum" : 55743.0,
            "standardDeviation" : 381.1919901222129
          }, {
            "mean" : 16731.5,
            "variance" : 1.15728605E7,
            "n" : 2,
            "max" : 19137.0,
            "min" : 14326.0,
            "sum" : 33463.0,
            "standardDeviation" : 3401.89072428848
          } ],
          "9" : [ {
            "mean" : 15994.25,
            "variance" : 638520.9166666665,
            "n" : 3,
            "max" : 16630.0,
            "min" : 14843.0,
            "sum" : 47982.75,
            "standardDeviation" : 799.0750381952039
          }, {
            "mean" : 15761.0,
            "variance" : 4418.0,
            "n" : 2,
            "max" : 15808.0,
            "min" : 15714.0,
            "sum" : 31522.0,
            "standardDeviation" : 66.46803743153546
          } ],
          "10" : [ {
            "mean" : 14187.25,
            "variance" : 1210142.9166666672,
            "n" : 3,
            "max" : 15367.0,
            "min" : 12723.0,
            "sum" : 42561.75,
            "standardDeviation" : 1100.0649602031087
          }, {
            "mean" : 13350.5,
            "variance" : 209304.5,
            "n" : 2,
            "max" : 13674.0,
            "min" : 13027.0,
            "sum" : 26701.0,
            "standardDeviation" : 457.49808742769625
          } ],
          "11" : [ {
            "mean" : 9961.0,
            "variance" : 183924.66666666686,
            "n" : 3,
            "max" : 10513.0,
            "min" : 9543.0,
            "sum" : 29883.0,
            "standardDeviation" : 428.86439193137363
          }, {
            "mean" : 10145.0,
            "variance" : 58481.99999999999,
            "n" : 2,
            "max" : 10316.0,
            "min" : 9974.0,
            "sum" : 20290.0,
            "standardDeviation" : 241.83051916579925
          } ],
          "12" : [ {
            "mean" : 16193.25,
            "variance" : 4524525.583333335,
            "n" : 3,
            "max" : 18179.0,
            "min" : 14050.0,
            "sum" : 48579.75,
            "standardDeviation" : 2127.09322394044
          }, {
            "mean" : 14201.5,
            "variance" : 82012.49999999999,
            "n" : 2,
            "max" : 14404.0,
            "min" : 13999.0,
            "sum" : 28403.0,
            "standardDeviation" : 286.37824638055173
          } ],
          "13" : [ {
            "mean" : 12027.75,
            "variance" : 85890.24999999991,
            "n" : 3,
            "max" : 12315.0,
            "min" : 11710.0,
            "sum" : 36083.25,
            "standardDeviation" : 293.0703840376914
          }, {
            "mean" : 12596.0,
            "variance" : 364658.0,
            "n" : 2,
            "max" : 13023.0,
            "min" : 12169.0,
            "sum" : 25192.0,
            "standardDeviation" : 603.8691911333116
          } ],
          "14" : [ {
            "mean" : 18525.75,
            "variance" : 759483.5833333336,
            "n" : 3,
            "max" : 19307.0,
            "min" : 17443.0,
            "sum" : 55577.25,
            "standardDeviation" : 871.4835531054695
          }, {
            "mean" : 19108.0,
            "variance" : 781250.0,
            "n" : 2,
            "max" : 19733.0,
            "min" : 18483.0,
            "sum" : 38216.0,
            "standardDeviation" : 883.8834764831844
          } ],
          "15" : [ {
            "mean" : 21361.25,
            "variance" : 8573722.25,
            "n" : 3,
            "max" : 24511.0,
            "min" : 18268.0,
            "sum" : 64083.75,
            "standardDeviation" : 2928.0919128333385
          }, {
            "mean" : 18406.5,
            "variance" : 838512.5,
            "n" : 2,
            "max" : 19054.0,
            "min" : 17759.0,
            "sum" : 36813.0,
            "standardDeviation" : 915.703281636579
          } ],
          "16" : [ {
            "mean" : 13662.25,
            "variance" : 1669352.9166666672,
            "n" : 3,
            "max" : 15469.0,
            "min" : 12555.0,
            "sum" : 40986.75,
            "standardDeviation" : 1292.034410016493
          }, {
            "mean" : 12221.0,
            "variance" : 266449.99999999994,
            "n" : 2,
            "max" : 12586.0,
            "min" : 11856.0,
            "sum" : 24442.0,
            "standardDeviation" : 516.1879502661797
          } ],
          "17" : [ {
            "mean" : 14668.25,
            "variance" : 27628.916666666715,
            "n" : 3,
            "max" : 14909.0,
            "min" : 14554.0,
            "sum" : 44004.75,
            "standardDeviation" : 166.2194834147511
          }, {
            "mean" : 14811.0,
            "variance" : 8450.0,
            "n" : 2,
            "max" : 14876.0,
            "min" : 14746.0,
            "sum" : 29622.0,
            "standardDeviation" : 91.92388155425118
          } ],
          "18" : [ {
            "mean" : 12568.0,
            "variance" : 356214.0,
            "n" : 3,
            "max" : 12962.0,
            "min" : 11698.0,
            "sum" : 37704.0,
            "standardDeviation" : 596.8366610723574
          }, {
            "mean" : 11444.5,
            "variance" : 2812.5,
            "n" : 2,
            "max" : 11482.0,
            "min" : 11407.0,
            "sum" : 22889.0,
            "standardDeviation" : 53.033008588991066
          } ],
          "19" : [ {
            "mean" : 18532.0,
            "variance" : 2791500.666666667,
            "n" : 3,
            "max" : 20658.0,
            "min" : 16993.0,
            "sum" : 55596.0,
            "standardDeviation" : 1670.7784612768585
          }, {
            "mean" : 16642.5,
            "variance" : 9526612.5,
            "n" : 2,
            "max" : 18825.0,
            "min" : 14460.0,
            "sum" : 33285.0,
            "standardDeviation" : 3086.52109987928
          } ],
          "20" : [ {
            "mean" : 16661.25,
            "variance" : 1.280368825E7,
            "n" : 3,
            "max" : 21587.0,
            "min" : 13035.0,
            "sum" : 49983.75,
            "standardDeviation" : 3578.2241754814636
          }, {
            "mean" : 13330.5,
            "variance" : 810264.5,
            "n" : 2,
            "max" : 13967.0,
            "min" : 12694.0,
            "sum" : 26661.0,
            "standardDeviation" : 900.146932450475
          } ],
          "21" : [ {
            "mean" : 17783.0,
            "variance" : 2.1078868666666664E7,
            "n" : 3,
            "max" : 22383.0,
            "min" : 13034.0,
            "sum" : 53349.0,
            "standardDeviation" : 4591.172907511398
          }, {
            "mean" : 14318.5,
            "variance" : 48984.5,
            "n" : 2,
            "max" : 14475.0,
            "min" : 14162.0,
            "sum" : 28637.0,
            "standardDeviation" : 221.32442251138937
          } ],
          "22" : [ {
            "mean" : 19955.0,
            "variance" : 1.067441666666667E7,
            "n" : 3,
            "max" : 23666.0,
            "min" : 16893.0,
            "sum" : 59865.0,
            "standardDeviation" : 3267.172579871879
          }, {
            "mean" : 15460.0,
            "variance" : 2125922.0,
            "n" : 2,
            "max" : 16491.0,
            "min" : 14429.0,
            "sum" : 30920.0,
            "standardDeviation" : 1458.054182806661
          } ],
          "23" : [ {
            "mean" : 15869.0,
            "variance" : 93215.33333333334,
            "n" : 3,
            "max" : 16173.0,
            "min" : 15454.0,
            "sum" : 47607.0,
            "standardDeviation" : 305.3118624183039
          }, {
            "mean" : 15540.5,
            "variance" : 364.50000000000006,
            "n" : 2,
            "max" : 15554.0,
            "min" : 15527.0,
            "sum" : 31081.0,
            "standardDeviation" : 19.091883092036785
          } ],
          "24" : [ {
            "mean" : 15854.75,
            "variance" : 1413962.9166666667,
            "n" : 3,
            "max" : 17070.0,
            "min" : 14683.0,
            "sum" : 47564.25,
            "standardDeviation" : 1189.1017267949226
          }, {
            "mean" : 16216.0,
            "variance" : 1065799.9999999998,
            "n" : 2,
            "max" : 16946.0,
            "min" : 15486.0,
            "sum" : 32432.0,
            "standardDeviation" : 1032.3759005323593
          } ],
          "25" : [ {
            "mean" : 15394.5,
            "variance" : 747897.6666666666,
            "n" : 3,
            "max" : 16575.0,
            "min" : 14505.0,
            "sum" : 46183.5,
            "standardDeviation" : 864.8107692823133
          }, {
            "mean" : 13593.5,
            "variance" : 362100.49999999994,
            "n" : 2,
            "max" : 14019.0,
            "min" : 13168.0,
            "sum" : 27187.0,
            "standardDeviation" : 601.7478707897519
          } ],
          "26" : [ {
            "mean" : 18150.25,
            "variance" : 755180.9166666665,
            "n" : 3,
            "max" : 18911.0,
            "min" : 17145.0,
            "sum" : 54450.75,
            "standardDeviation" : 869.0114594564715
          }, {
            "mean" : 16969.0,
            "variance" : 2433218.0000000005,
            "n" : 2,
            "max" : 18072.0,
            "min" : 15866.0,
            "sum" : 33938.0,
            "standardDeviation" : 1559.877559297524
          } ],
          "27" : [ {
            "mean" : 16329.75,
            "variance" : 2737540.9166666665,
            "n" : 3,
            "max" : 17839.0,
            "min" : 13989.0,
            "sum" : 48989.25,
            "standardDeviation" : 1654.5515757046278
          }, {
            "mean" : 13552.5,
            "variance" : 150700.5,
            "n" : 2,
            "max" : 13827.0,
            "min" : 13278.0,
            "sum" : 27105.0,
            "standardDeviation" : 388.2016228714146
          } ],
          "28" : [ {
            "mean" : 11934.0,
            "variance" : 266125.3333333334,
            "n" : 3,
            "max" : 12698.0,
            "min" : 11608.0,
            "sum" : 35802.0,
            "standardDeviation" : 515.8733694748483
          }, {
            "mean" : 11609.5,
            "variance" : 8844.500000000002,
            "n" : 2,
            "max" : 11676.0,
            "min" : 11543.0,
            "sum" : 23219.0,
            "standardDeviation" : 94.04520189781083
          } ],
          "29" : [ {
            "mean" : 12446.5,
            "variance" : 51890.99999999998,
            "n" : 3,
            "max" : 12753.0,
            "min" : 12261.0,
            "sum" : 37339.5,
            "standardDeviation" : 227.79596133382168
          }, {
            "mean" : 11452.0,
            "variance" : 3871.9999999999995,
            "n" : 2,
            "max" : 11496.0,
            "min" : 11408.0,
            "sum" : 22904.0,
            "standardDeviation" : 62.22539674441618
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 15295.599999999999,
            "variance" : 1.4174448160000005E8,
            "n" : 5,
            "max" : 40439.0,
            "min" : 1201.0,
            "sum" : 76478.0,
            "standardDeviation" : 11905.649146518641
          } ],
          "1" : [ {
            "mean" : 13468.800000000001,
            "variance" : 1.2378941128888887E8,
            "n" : 5,
            "max" : 32905.0,
            "min" : 2480.0,
            "sum" : 67344.0,
            "standardDeviation" : 11126.068995332038
          } ],
          "2" : [ {
            "mean" : 14297.3,
            "variance" : 1.6083941445555556E8,
            "n" : 5,
            "max" : 37289.0,
            "min" : 2129.0,
            "sum" : 71486.5,
            "standardDeviation" : 12682.248004811905
          } ],
          "3" : [ {
            "mean" : 15968.2,
            "variance" : 1.8075857728888893E8,
            "n" : 5,
            "max" : 46901.0,
            "min" : 2075.0,
            "sum" : 79841.0,
            "standardDeviation" : 13444.648648770593
          } ],
          "4" : [ {
            "mean" : 13210.1,
            "variance" : 8.572672454444443E7,
            "n" : 5,
            "max" : 30170.0,
            "min" : 1963.0,
            "sum" : 66050.5,
            "standardDeviation" : 9258.872746962474
          } ],
          "5" : [ {
            "mean" : 13983.5,
            "variance" : 1.4413302049999997E8,
            "n" : 5,
            "max" : 36836.0,
            "min" : 2651.0,
            "sum" : 69917.5,
            "standardDeviation" : 12005.541241443469
          } ],
          "6" : [ {
            "mean" : 15345.7,
            "variance" : 1.737537380111111E8,
            "n" : 5,
            "max" : 43155.0,
            "min" : 2360.0,
            "sum" : 76728.5,
            "standardDeviation" : 13181.568116544826
          } ],
          "7" : [ {
            "mean" : 14161.000000000002,
            "variance" : 1.3310232622222221E8,
            "n" : 5,
            "max" : 40037.0,
            "min" : 1732.0,
            "sum" : 70805.00000000001,
            "standardDeviation" : 11536.998146061314
          } ],
          "8" : [ {
            "mean" : 13766.0,
            "variance" : 1.413346371111111E8,
            "n" : 5,
            "max" : 41533.0,
            "min" : 1415.0,
            "sum" : 68830.0,
            "standardDeviation" : 11888.424500795347
          } ],
          "9" : [ {
            "mean" : 17576.3,
            "variance" : 2.3642186489999998E8,
            "n" : 5,
            "max" : 44641.0,
            "min" : 2318.0,
            "sum" : 87881.5,
            "standardDeviation" : 15376.015898144746
          } ],
          "10" : [ {
            "mean" : 12488.3,
            "variance" : 1.1989148645555554E8,
            "n" : 5,
            "max" : 37896.0,
            "min" : 1477.0,
            "sum" : 62441.5,
            "standardDeviation" : 10949.497086878262
          } ],
          "11" : [ {
            "mean" : 12936.0,
            "variance" : 7.953085444444445E7,
            "n" : 5,
            "max" : 28531.0,
            "min" : 1540.0,
            "sum" : 64680.0,
            "standardDeviation" : 8918.007313545131
          } ],
          "12" : [ {
            "mean" : 13129.0,
            "variance" : 7.288973711111112E7,
            "n" : 5,
            "max" : 28146.0,
            "min" : 1225.0,
            "sum" : 65645.0,
            "standardDeviation" : 8537.548659370037
          } ],
          "13" : [ {
            "mean" : 15466.599999999999,
            "variance" : 1.8958106782222223E8,
            "n" : 5,
            "max" : 50522.0,
            "min" : 1613.0,
            "sum" : 77333.0,
            "standardDeviation" : 13768.844098987476
          } ],
          "14" : [ {
            "mean" : 13351.9,
            "variance" : 1.2539089454444446E8,
            "n" : 5,
            "max" : 34482.0,
            "min" : 2340.0,
            "sum" : 66759.5,
            "standardDeviation" : 11197.80757757716
          } ],
          "15" : [ {
            "mean" : 14270.600000000002,
            "variance" : 1.4981218404444444E8,
            "n" : 5,
            "max" : 37080.0,
            "min" : 1684.0,
            "sum" : 71353.00000000001,
            "standardDeviation" : 12239.778757985965
          } ],
          "16" : [ {
            "mean" : 25641.8,
            "variance" : 1.4295319608444448E9,
            "n" : 5,
            "max" : 128861.0,
            "min" : 2132.0,
            "sum" : 128209.0,
            "standardDeviation" : 37809.15181334335
          } ],
          "17" : [ {
            "mean" : 13982.900000000001,
            "variance" : 5.679322387777778E7,
            "n" : 5,
            "max" : 27311.0,
            "min" : 1979.0,
            "sum" : 69914.5,
            "standardDeviation" : 7536.127910125848
          } ],
          "18" : [ {
            "mean" : 12285.199999999999,
            "variance" : 7.932071928888889E7,
            "n" : 5,
            "max" : 28349.0,
            "min" : 1845.0,
            "sum" : 61425.99999999999,
            "standardDeviation" : 8906.218012652109
          } ],
          "19" : [ {
            "mean" : 18021.5,
            "variance" : 1.5039759805555558E8,
            "n" : 5,
            "max" : 43872.0,
            "min" : 1442.0,
            "sum" : 90107.5,
            "standardDeviation" : 12263.669844526783
          } ],
          "20" : [ {
            "mean" : 13698.699999999999,
            "variance" : 9.755427467777777E7,
            "n" : 5,
            "max" : 30666.0,
            "min" : 1427.0,
            "sum" : 68493.5,
            "standardDeviation" : 9876.956751843038
          } ],
          "21" : [ {
            "mean" : 13055.2,
            "variance" : 7.754171395555556E7,
            "n" : 5,
            "max" : 29434.0,
            "min" : 2124.0,
            "sum" : 65276.0,
            "standardDeviation" : 8805.777305584985
          } ],
          "22" : [ {
            "mean" : 15976.0,
            "variance" : 1.4944962977777776E8,
            "n" : 5,
            "max" : 45531.0,
            "min" : 1536.0,
            "sum" : 79880.0,
            "standardDeviation" : 12224.959295546867
          } ],
          "23" : [ {
            "mean" : 15113.9,
            "variance" : 9.720529143333332E7,
            "n" : 5,
            "max" : 31457.0,
            "min" : 1469.0,
            "sum" : 75569.5,
            "standardDeviation" : 9859.274386755515
          } ],
          "24" : [ {
            "mean" : 12512.1,
            "variance" : 5.5817068099999994E7,
            "n" : 5,
            "max" : 28492.0,
            "min" : 1860.0,
            "sum" : 62560.5,
            "standardDeviation" : 7471.0821237622595
          } ],
          "25" : [ {
            "mean" : 15332.0,
            "variance" : 1.5064864888888893E8,
            "n" : 5,
            "max" : 40718.0,
            "min" : 1716.0,
            "sum" : 76660.0,
            "standardDeviation" : 12273.901127550642
          } ],
          "26" : [ {
            "mean" : 15188.900000000001,
            "variance" : 1.7040549610000002E8,
            "n" : 5,
            "max" : 44407.0,
            "min" : 1865.0,
            "sum" : 75944.5,
            "standardDeviation" : 13053.945614257784
          } ],
          "27" : [ {
            "mean" : 17500.800000000003,
            "variance" : 1.5331255951111114E8,
            "n" : 5,
            "max" : 42107.0,
            "min" : 1524.0,
            "sum" : 87504.00000000001,
            "standardDeviation" : 12381.944900180712
          } ],
          "28" : [ {
            "mean" : 14886.900000000003,
            "variance" : 1.3447390476666665E8,
            "n" : 5,
            "max" : 38638.0,
            "min" : 1583.0,
            "sum" : 74434.50000000001,
            "standardDeviation" : 11596.288404772738
          } ],
          "29" : [ {
            "mean" : 14391.000000000002,
            "variance" : 9.335438333333334E7,
            "n" : 5,
            "max" : 32029.0,
            "min" : 1645.0,
            "sum" : 71955.00000000001,
            "standardDeviation" : 9662.007210374733
          } ]
        }
      },
      "children" : [ ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 357},
   width = 1174- margin.right - margin.left,
   height = 140 - margin.top - margin.bottom;
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
    "meanOld" : 34738.252156250004,
    "meanCurrent" : 4095082.34909375,
    "deviationOld" : 2886.8670254416384,
    "deviationCurrent" : 32817.96156041963,
    "vms" : 30,
    "callsOld" : 300,
    "calls" : 300,
    "tvalue" : -675.0532635287161,
    "mannWhitneyUStatistic" : 2.8719490663203402E-11
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 4085600.7296875, 4035304.175, 4069662.885625, 4108000.8825000003, 4104251.3159374995, 4101598.2649999997, 4103681.06875, 4148083.16, 4149195.3096875, 4061702.4199999995, 4083333.8190625, 4190056.3649999998, 4119853.9078125, 4096977.6306250007, 4087248.7893750006, 4040754.7390625, 4067452.0028125, 4065524.0874999994, 4080796.196875, 4092153.3409375004, 4091952.784375, 4090592.761875, 4124690.2143750004, 4069870.5181250004, 4104734.2637500004, 4062505.019687501, 4116931.6168749994, 4088547.981875, 4134208.9125, 4077205.3081250004 ],
  "valuesPredecessor" : [ 35273.766875, 42181.4515625, 31491.43125, 33253.936875, 32541.566562500004, 32021.68875, 34609.761249999996, 35584.2346875, 32975.20437500001, 40215.2140625, 33732.644375, 40405.97125, 41322.58875, 32482.680312500004, 31517.296875, 35908.708125, 32221.4865625, 33752.0240625, 36004.7425, 32796.3525, 33044.91312500001, 36777.9871875, 33254.005625000005, 32079.983125000006, 34338.75781249999, 34982.154062500005, 34911.50375, 34770.8359375, 32607.645624999997, 35087.026874999996 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4750425.409375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4750425.409375,
        "min" : 4750425.409375,
        "sum" : 1.520136131E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4114994.24375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4114994.24375,
        "min" : 4114994.24375,
        "sum" : 1.316798158E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4311537.3625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4311537.3625,
        "min" : 4311537.3625,
        "sum" : 1.379691956E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4121959.421875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4121959.421875,
        "min" : 4121959.421875,
        "sum" : 1.319027015E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3934349.84375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3934349.84375,
        "min" : 3934349.84375,
        "sum" : 1.25899195E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3989268.446875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3989268.446875,
        "min" : 3989268.446875,
        "sum" : 1.276565903E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3967439.95625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3967439.95625,
        "min" : 3967439.95625,
        "sum" : 1.269580786E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3915186.025,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3915186.025,
        "min" : 3915186.025,
        "sum" : 1.252859528E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3939452.865625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3939452.865625,
        "min" : 3939452.865625,
        "sum" : 1.260624917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3811393.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3811393.721875,
        "min" : 3811393.721875,
        "sum" : 1.219645991E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4590735.79375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4590735.79375,
        "min" : 4590735.79375,
        "sum" : 1.469035454E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4127187.8125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4127187.8125,
        "min" : 4127187.8125,
        "sum" : 1.3207001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4389553.715625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4389553.715625,
        "min" : 4389553.715625,
        "sum" : 1.404657189E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4099003.628125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4099003.628125,
        "min" : 4099003.628125,
        "sum" : 1.311681161E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3951262.825,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3951262.825,
        "min" : 3951262.825,
        "sum" : 1.264404104E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4053311.190625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4053311.190625,
        "min" : 4053311.190625,
        "sum" : 1.297059581E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3962866.890625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3962866.890625,
        "min" : 3962866.890625,
        "sum" : 1.268117405E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3797708.640625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3797708.640625,
        "min" : 3797708.640625,
        "sum" : 1.215266765E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3886562.6875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3886562.6875,
        "min" : 3886562.6875,
        "sum" : 1.24370006E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3838435.671875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3838435.671875,
        "min" : 3838435.671875,
        "sum" : 1.228299415E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4805003.14375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4805003.14375,
        "min" : 4805003.14375,
        "sum" : 1.537601006E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4168802.640625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4168802.640625,
        "min" : 4168802.640625,
        "sum" : 1.334016845E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4324895.559375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4324895.559375,
        "min" : 4324895.559375,
        "sum" : 1.383966579E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4083220.496875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4083220.496875,
        "min" : 4083220.496875,
        "sum" : 1.306630559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3927527.65,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3927527.65,
        "min" : 3927527.65,
        "sum" : 1.256808848E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3944660.790625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3944660.790625,
        "min" : 3944660.790625,
        "sum" : 1.262291453E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3919085.41875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3919085.41875,
        "min" : 3919085.41875,
        "sum" : 1.254107334E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3864083.778125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3864083.778125,
        "min" : 3864083.778125,
        "sum" : 1.236506809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3862442.575,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3862442.575,
        "min" : 3862442.575,
        "sum" : 1.235981624E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3774797.975,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3774797.975,
        "min" : 3774797.975,
        "sum" : 1.207935352E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4855101.0125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4855101.0125,
        "min" : 4855101.0125,
        "sum" : 1.553632324E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4245003.715625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4245003.715625,
        "min" : 4245003.715625,
        "sum" : 1.358401189E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4369183.68125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4369183.68125,
        "min" : 4369183.68125,
        "sum" : 1.398138778E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4127823.346875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4127823.346875,
        "min" : 4127823.346875,
        "sum" : 1.320903471E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3952956.3125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3952956.3125,
        "min" : 3952956.3125,
        "sum" : 1.26494602E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4012838.259375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4012838.259375,
        "min" : 4012838.259375,
        "sum" : 1.284108243E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3928486.54375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3928486.54375,
        "min" : 3928486.54375,
        "sum" : 1.257115694E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3891797.384375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3891797.384375,
        "min" : 3891797.384375,
        "sum" : 1.245375163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3770329.48125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3770329.48125,
        "min" : 3770329.48125,
        "sum" : 1.206505434E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3883290.95,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3883290.95,
        "min" : 3883290.95,
        "sum" : 1.242653104E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4700305.415625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4700305.415625,
        "min" : 4700305.415625,
        "sum" : 1.504097733E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092677.709375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4092677.709375,
        "min" : 4092677.709375,
        "sum" : 1.309656867E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4234656.3125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4234656.3125,
        "min" : 4234656.3125,
        "sum" : 1.35509002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4026703.828125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4026703.828125,
        "min" : 4026703.828125,
        "sum" : 1.288545225E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3892613.478125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3892613.478125,
        "min" : 3892613.478125,
        "sum" : 1.245636313E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3953186.696875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3953186.696875,
        "min" : 3953186.696875,
        "sum" : 1.265019743E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3900632.990625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3900632.990625,
        "min" : 3900632.990625,
        "sum" : 1.248202557E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3851239.28125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3851239.28125,
        "min" : 3851239.28125,
        "sum" : 1.23239657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3841882.03125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3841882.03125,
        "min" : 3841882.03125,
        "sum" : 1.22940225E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3859144.00625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3859144.00625,
        "min" : 3859144.00625,
        "sum" : 1.234926082E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4704349.675,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4704349.675,
        "min" : 4704349.675,
        "sum" : 1.505391896E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4106513.1,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4106513.1,
        "min" : 4106513.1,
        "sum" : 1.314084192E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4268938.34375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4268938.34375,
        "min" : 4268938.34375,
        "sum" : 1.36606027E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4067376.7625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4067376.7625,
        "min" : 4067376.7625,
        "sum" : 1.301560564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3907191.44375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3907191.44375,
        "min" : 3907191.44375,
        "sum" : 1.250301262E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3972123.00625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3972123.00625,
        "min" : 3972123.00625,
        "sum" : 1.271079362E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3947071.815625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3947071.815625,
        "min" : 3947071.815625,
        "sum" : 1.263062981E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3926926.6125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3926926.6125,
        "min" : 3926926.6125,
        "sum" : 1.256616516E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3914788.6625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3914788.6625,
        "min" : 3914788.6625,
        "sum" : 1.252732372E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3801744.778125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3801744.778125,
        "min" : 3801744.778125,
        "sum" : 1.216558329E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4892284.90625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4892284.90625,
        "min" : 4892284.90625,
        "sum" : 1.56553117E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079842.88125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4079842.88125,
        "min" : 4079842.88125,
        "sum" : 1.305549722E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4247875.753125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4247875.753125,
        "min" : 4247875.753125,
        "sum" : 1.359320241E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4041990.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4041990.721875,
        "min" : 4041990.721875,
        "sum" : 1.293437031E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3945146.40625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3945146.40625,
        "min" : 3945146.40625,
        "sum" : 1.26244685E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4029982.79375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4029982.79375,
        "min" : 4029982.79375,
        "sum" : 1.289594494E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3977532.215625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3977532.215625,
        "min" : 3977532.215625,
        "sum" : 1.272810309E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3925777.740625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3925777.740625,
        "min" : 3925777.740625,
        "sum" : 1.256248877E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3930147.70625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3930147.70625,
        "min" : 3930147.70625,
        "sum" : 1.257647266E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3899195.18125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3899195.18125,
        "min" : 3899195.18125,
        "sum" : 1.247742458E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4813069.040625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4813069.040625,
        "min" : 4813069.040625,
        "sum" : 1.540182093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4198425.034375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4198425.034375,
        "min" : 4198425.034375,
        "sum" : 1.343496011E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4351472.4375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4351472.4375,
        "min" : 4351472.4375,
        "sum" : 1.39247118E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4054753.659375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4054753.659375,
        "min" : 4054753.659375,
        "sum" : 1.297521171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3949735.90625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3949735.90625,
        "min" : 3949735.90625,
        "sum" : 1.26391549E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4006852.303125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4006852.303125,
        "min" : 4006852.303125,
        "sum" : 1.282192737E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3951983.996875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3951983.996875,
        "min" : 3951983.996875,
        "sum" : 1.264634879E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3909153.71875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3909153.71875,
        "min" : 3909153.71875,
        "sum" : 1.25092919E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3886500.640625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3886500.640625,
        "min" : 3886500.640625,
        "sum" : 1.243680205E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3783980.88125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3783980.88125,
        "min" : 3783980.88125,
        "sum" : 1.210873882E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4877740.228125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4877740.228125,
        "min" : 4877740.228125,
        "sum" : 1.560876873E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4123365.203125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4123365.203125,
        "min" : 4123365.203125,
        "sum" : 1.319476865E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4375077.7,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4375077.7,
        "min" : 4375077.7,
        "sum" : 1.400024864E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4172999.103125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4172999.103125,
        "min" : 4172999.103125,
        "sum" : 1.335359713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3996492.80625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3996492.80625,
        "min" : 3996492.80625,
        "sum" : 1.278877698E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4042403.403125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4042403.403125,
        "min" : 4042403.403125,
        "sum" : 1.293569089E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3986608.7125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3986608.7125,
        "min" : 3986608.7125,
        "sum" : 1.275714788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3929156.603125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3929156.603125,
        "min" : 3929156.603125,
        "sum" : 1.257330113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3779910.440625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3779910.440625,
        "min" : 3779910.440625,
        "sum" : 1.209571341E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3885561.96875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3885561.96875,
        "min" : 3885561.96875,
        "sum" : 1.24337983E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4720978.309375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4720978.309375,
        "min" : 4720978.309375,
        "sum" : 1.510713059E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4141880.0625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4141880.0625,
        "min" : 4141880.0625,
        "sum" : 1.32540162E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4372223.753125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4372223.753125,
        "min" : 4372223.753125,
        "sum" : 1.399111601E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4179183.1375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4179183.1375,
        "min" : 4179183.1375,
        "sum" : 1.337338604E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3978888.975,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3978888.975,
        "min" : 3978888.975,
        "sum" : 1.273244472E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3982561.946875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3982561.946875,
        "min" : 3982561.946875,
        "sum" : 1.274419823E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3942303.53125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3942303.53125,
        "min" : 3942303.53125,
        "sum" : 1.26153713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3768470.59375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3768470.59375,
        "min" : 3768470.59375,
        "sum" : 1.20591059E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3903331.76875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3903331.76875,
        "min" : 3903331.76875,
        "sum" : 1.249066166E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3818139.890625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3818139.890625,
        "min" : 3818139.890625,
        "sum" : 1.221804765E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4812789.8875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4812789.8875,
        "min" : 4812789.8875,
        "sum" : 1.540092764E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4120340.2875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4120340.2875,
        "min" : 4120340.2875,
        "sum" : 1.318508892E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4293075.9375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4293075.9375,
        "min" : 4293075.9375,
        "sum" : 1.3737843E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4086441.509375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4086441.509375,
        "min" : 4086441.509375,
        "sum" : 1.307661283E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3983874.015625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3983874.015625,
        "min" : 3983874.015625,
        "sum" : 1.274839685E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4021159.221875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4021159.221875,
        "min" : 4021159.221875,
        "sum" : 1.286770951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3949591.278125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3949591.278125,
        "min" : 3949591.278125,
        "sum" : 1.263869209E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3924250.95,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3924250.95,
        "min" : 3924250.95,
        "sum" : 1.255760304E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3914717.015625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3914717.015625,
        "min" : 3914717.015625,
        "sum" : 1.252709445E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3813287.740625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3813287.740625,
        "min" : 3813287.740625,
        "sum" : 1.220252077E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4716972.71875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4716972.71875,
        "min" : 4716972.71875,
        "sum" : 1.50943127E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4195788.178125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4195788.178125,
        "min" : 4195788.178125,
        "sum" : 1.342652217E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4290743.103125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4290743.103125,
        "min" : 4290743.103125,
        "sum" : 1.373037793E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4077811.45,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4077811.45,
        "min" : 4077811.45,
        "sum" : 1.304899664E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3930617.396875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3930617.396875,
        "min" : 3930617.396875,
        "sum" : 1.257797567E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3979550.684375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3979550.684375,
        "min" : 3979550.684375,
        "sum" : 1.273456219E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3930585.3,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3930585.3,
        "min" : 3930585.3,
        "sum" : 1.257787296E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3886509.725,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3886509.725,
        "min" : 3886509.725,
        "sum" : 1.243683112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3767733.5875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3767733.5875,
        "min" : 3767733.5875,
        "sum" : 1.205674748E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3848738.053125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3848738.053125,
        "min" : 3848738.053125,
        "sum" : 1.231596177E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4835008.89375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4835008.89375,
        "min" : 4835008.89375,
        "sum" : 1.547202846E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4098828.321875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4098828.321875,
        "min" : 4098828.321875,
        "sum" : 1.311625063E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4289071.63125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4289071.63125,
        "min" : 4289071.63125,
        "sum" : 1.372502922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4053974.503125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4053974.503125,
        "min" : 4053974.503125,
        "sum" : 1.297271841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3914821.071875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3914821.071875,
        "min" : 3914821.071875,
        "sum" : 1.252742743E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4014705.396875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4014705.396875,
        "min" : 4014705.396875,
        "sum" : 1.284705727E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3986995.365625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3986995.365625,
        "min" : 3986995.365625,
        "sum" : 1.275838517E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3932939.371875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3932939.371875,
        "min" : 3932939.371875,
        "sum" : 1.258540599E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3812926.49375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3812926.49375,
        "min" : 3812926.49375,
        "sum" : 1.220136478E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3894067.140625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3894067.140625,
        "min" : 3894067.140625,
        "sum" : 1.246101485E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4781196.61875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4781196.61875,
        "min" : 4781196.61875,
        "sum" : 1.529982918E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4228910.284375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4228910.284375,
        "min" : 4228910.284375,
        "sum" : 1.353251291E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4263230.83125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4263230.83125,
        "min" : 4263230.83125,
        "sum" : 1.364233866E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079209.78125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4079209.78125,
        "min" : 4079209.78125,
        "sum" : 1.30534713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3925869.0625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3925869.0625,
        "min" : 3925869.0625,
        "sum" : 1.2562781E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3997065.696875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3997065.696875,
        "min" : 3997065.696875,
        "sum" : 1.279061023E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3972956.59375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3972956.59375,
        "min" : 3972956.59375,
        "sum" : 1.27134611E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3902622.85,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3902622.85,
        "min" : 3902622.85,
        "sum" : 1.248839312E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3909727.865625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3909727.865625,
        "min" : 3909727.865625,
        "sum" : 1.251112917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3981723.575,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3981723.575,
        "min" : 3981723.575,
        "sum" : 1.274151544E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4646380.125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4646380.125,
        "min" : 4646380.125,
        "sum" : 1.48684164E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4132072.196875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4132072.196875,
        "min" : 4132072.196875,
        "sum" : 1.322263103E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4270209.628125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4270209.628125,
        "min" : 4270209.628125,
        "sum" : 1.366467081E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4065740.946875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4065740.946875,
        "min" : 4065740.946875,
        "sum" : 1.301037103E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3908344.765625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3908344.765625,
        "min" : 3908344.765625,
        "sum" : 1.250670325E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3964323.978125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3964323.978125,
        "min" : 3964323.978125,
        "sum" : 1.268583673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3918021.409375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3918021.409375,
        "min" : 3918021.409375,
        "sum" : 1.253766851E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3886213.234375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3886213.234375,
        "min" : 3886213.234375,
        "sum" : 1.243588235E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3864293.903125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3864293.903125,
        "min" : 3864293.903125,
        "sum" : 1.236574049E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3751947.203125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3751947.203125,
        "min" : 3751947.203125,
        "sum" : 1.200623105E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4745738.39375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4745738.39375,
        "min" : 4745738.39375,
        "sum" : 1.518636286E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4245556.621875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4245556.621875,
        "min" : 4245556.621875,
        "sum" : 1.358578119E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4416180.575,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4416180.575,
        "min" : 4416180.575,
        "sum" : 1.413177784E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4145238.175,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4145238.175,
        "min" : 4145238.175,
        "sum" : 1.326476216E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4035637.2,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4035637.2,
        "min" : 4035637.2,
        "sum" : 1.291403904E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4128856.25625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4128856.25625,
        "min" : 4128856.25625,
        "sum" : 1.321234002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4033552.271875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4033552.271875,
        "min" : 4033552.271875,
        "sum" : 1.290736727E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3966070.065625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3966070.065625,
        "min" : 3966070.065625,
        "sum" : 1.269142421E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3843498.115625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3843498.115625,
        "min" : 3843498.115625,
        "sum" : 1.229919397E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3931625.421875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3931625.421875,
        "min" : 3931625.421875,
        "sum" : 1.258120135E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4756769.175,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4756769.175,
        "min" : 4756769.175,
        "sum" : 1.522166136E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4212678.29375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4212678.29375,
        "min" : 4212678.29375,
        "sum" : 1.348057054E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4320463.10625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4320463.10625,
        "min" : 4320463.10625,
        "sum" : 1.382548194E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4069153.478125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4069153.478125,
        "min" : 4069153.478125,
        "sum" : 1.302129113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3913299.384375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3913299.384375,
        "min" : 3913299.384375,
        "sum" : 1.252255803E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3962945.28125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3962945.28125,
        "min" : 3962945.28125,
        "sum" : 1.26814249E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3939065.053125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3939065.053125,
        "min" : 3939065.053125,
        "sum" : 1.260500817E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3885702.846875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3885702.846875,
        "min" : 3885702.846875,
        "sum" : 1.243424911E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3888884.978125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3888884.978125,
        "min" : 3888884.978125,
        "sum" : 1.244443193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3936518.221875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3936518.221875,
        "min" : 3936518.221875,
        "sum" : 1.259685831E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4885781.475,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4885781.475,
        "min" : 4885781.475,
        "sum" : 1.563450072E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4327991.89375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4327991.89375,
        "min" : 4327991.89375,
        "sum" : 1.384957406E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4226640.56875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4226640.56875,
        "min" : 4226640.56875,
        "sum" : 1.352524982E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4065296.9875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4065296.9875,
        "min" : 4065296.9875,
        "sum" : 1.300895036E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3952927.790625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3952927.790625,
        "min" : 3952927.790625,
        "sum" : 1.264936893E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4027216.54375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4027216.54375,
        "min" : 4027216.54375,
        "sum" : 1.288709294E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3936383.434375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3936383.434375,
        "min" : 3936383.434375,
        "sum" : 1.259642699E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3917887.68125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3917887.68125,
        "min" : 3917887.68125,
        "sum" : 1.253724058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3891217.53125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3891217.53125,
        "min" : 3891217.53125,
        "sum" : 1.24518961E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3967195.171875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3967195.171875,
        "min" : 3967195.171875,
        "sum" : 1.269502455E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4706407.1125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4706407.1125,
        "min" : 4706407.1125,
        "sum" : 1.506050276E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4109334.303125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4109334.303125,
        "min" : 4109334.303125,
        "sum" : 1.314986977E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4304480.359375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4304480.359375,
        "min" : 4304480.359375,
        "sum" : 1.377433715E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4099411.60625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4099411.60625,
        "min" : 4099411.60625,
        "sum" : 1.311811714E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3988513.725,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3988513.725,
        "min" : 3988513.725,
        "sum" : 1.276324392E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4004778.846875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4004778.846875,
        "min" : 4004778.846875,
        "sum" : 1.281529231E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3915324.365625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3915324.365625,
        "min" : 3915324.365625,
        "sum" : 1.252903797E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3883775.840625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3883775.840625,
        "min" : 3883775.840625,
        "sum" : 1.242808269E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3803234.590625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3803234.590625,
        "min" : 3803234.590625,
        "sum" : 1.217035069E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3839980.125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3839980.125,
        "min" : 3839980.125,
        "sum" : 1.22879364E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4881340.04375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4881340.04375,
        "min" : 4881340.04375,
        "sum" : 1.562028814E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4142747.63125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4142747.63125,
        "min" : 4142747.63125,
        "sum" : 1.325679242E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4329523.4375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4329523.4375,
        "min" : 4329523.4375,
        "sum" : 1.3854475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4198682.66875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4198682.66875,
        "min" : 4198682.66875,
        "sum" : 1.343578454E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3976134.346875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3976134.346875,
        "min" : 3976134.346875,
        "sum" : 1.272362991E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4091418.4875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4091418.4875,
        "min" : 4091418.4875,
        "sum" : 1.309253916E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3992788.596875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3992788.596875,
        "min" : 3992788.596875,
        "sum" : 1.277692351E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3971988.690625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3971988.690625,
        "min" : 3971988.690625,
        "sum" : 1.271036381E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3945656.2625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3945656.2625,
        "min" : 3945656.2625,
        "sum" : 1.262610004E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3811808.959375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3811808.959375,
        "min" : 3811808.959375,
        "sum" : 1.219778867E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4807539.5875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4807539.5875,
        "min" : 4807539.5875,
        "sum" : 1.538412668E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4217381.103125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4217381.103125,
        "min" : 4217381.103125,
        "sum" : 1.349561953E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4380896.46875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4380896.46875,
        "min" : 4380896.46875,
        "sum" : 1.40188687E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4145681.465625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4145681.465625,
        "min" : 4145681.465625,
        "sum" : 1.326618069E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3942041.93125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3942041.93125,
        "min" : 3942041.93125,
        "sum" : 1.261453418E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4028457.809375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4028457.809375,
        "min" : 4028457.809375,
        "sum" : 1.289106499E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3905412.815625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3905412.815625,
        "min" : 3905412.815625,
        "sum" : 1.249732101E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3888850.834375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3888850.834375,
        "min" : 3888850.834375,
        "sum" : 1.244432267E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3753788.040625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3753788.040625,
        "min" : 3753788.040625,
        "sum" : 1.201212173E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3851483.353125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3851483.353125,
        "min" : 3851483.353125,
        "sum" : 1.232474673E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4914864.834375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4914864.834375,
        "min" : 4914864.834375,
        "sum" : 1.572756747E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4361177.5625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4361177.5625,
        "min" : 4361177.5625,
        "sum" : 1.39557682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4433562.725,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4433562.725,
        "min" : 4433562.725,
        "sum" : 1.418740072E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4230925.2125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4230925.2125,
        "min" : 4230925.2125,
        "sum" : 1.353896068E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4116679.925,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4116679.925,
        "min" : 4116679.925,
        "sum" : 1.317337576E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4102882.928125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4102882.928125,
        "min" : 4102882.928125,
        "sum" : 1.312922537E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4022334.8375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4022334.8375,
        "min" : 4022334.8375,
        "sum" : 1.287147148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3941089.703125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3941089.703125,
        "min" : 3941089.703125,
        "sum" : 1.261148705E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3882573.084375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3882573.084375,
        "min" : 3882573.084375,
        "sum" : 1.242423387E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3894472.8375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3894472.8375,
        "min" : 3894472.8375,
        "sum" : 1.246231308E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4860901.909375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4860901.909375,
        "min" : 4860901.909375,
        "sum" : 1.555488611E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4153367.2125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4153367.2125,
        "min" : 4153367.2125,
        "sum" : 1.329077508E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4323706.075,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4323706.075,
        "min" : 4323706.075,
        "sum" : 1.383585944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4058197.809375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4058197.809375,
        "min" : 4058197.809375,
        "sum" : 1.298623299E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3909513.871875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3909513.871875,
        "min" : 3909513.871875,
        "sum" : 1.251044439E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3961932.890625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3961932.890625,
        "min" : 3961932.890625,
        "sum" : 1.267818525E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3919025.771875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3919025.771875,
        "min" : 3919025.771875,
        "sum" : 1.254088247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3892626.234375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3892626.234375,
        "min" : 3892626.234375,
        "sum" : 1.245640395E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3762449.96875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3762449.96875,
        "min" : 3762449.96875,
        "sum" : 1.20398399E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3856983.4375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3856983.4375,
        "min" : 3856983.4375,
        "sum" : 1.2342347E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4823629.803125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4823629.803125,
        "min" : 4823629.803125,
        "sum" : 1.543561537E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4088020.528125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4088020.528125,
        "min" : 4088020.528125,
        "sum" : 1.308166569E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4309951.00625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4309951.00625,
        "min" : 4309951.00625,
        "sum" : 1.379184322E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4109312.35,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4109312.35,
        "min" : 4109312.35,
        "sum" : 1.314979952E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3986978.45,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3986978.45,
        "min" : 3986978.45,
        "sum" : 1.275833104E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3973661.509375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3973661.509375,
        "min" : 3973661.509375,
        "sum" : 1.271571683E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3936444.2625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3936444.2625,
        "min" : 3936444.2625,
        "sum" : 1.259662164E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3877746.425,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3877746.425,
        "min" : 3877746.425,
        "sum" : 1.240878856E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3872404.13125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3872404.13125,
        "min" : 3872404.13125,
        "sum" : 1.239169322E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3894339.428125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3894339.428125,
        "min" : 3894339.428125,
        "sum" : 1.246188617E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4770900.759375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4770900.759375,
        "min" : 4770900.759375,
        "sum" : 1.526688243E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4168701.73125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4168701.73125,
        "min" : 4168701.73125,
        "sum" : 1.333984554E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4302040.140625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4302040.140625,
        "min" : 4302040.140625,
        "sum" : 1.376652845E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4051306.7875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4051306.7875,
        "min" : 4051306.7875,
        "sum" : 1.296418172E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3991595.7625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3991595.7625,
        "min" : 3991595.7625,
        "sum" : 1.277310644E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3978025.35,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3978025.35,
        "min" : 3978025.35,
        "sum" : 1.272968112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3957328.3125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3957328.3125,
        "min" : 3957328.3125,
        "sum" : 1.26634506E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3929986.603125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3929986.603125,
        "min" : 3929986.603125,
        "sum" : 1.257595713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3920799.1625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3920799.1625,
        "min" : 3920799.1625,
        "sum" : 1.254655732E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3945298.040625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3945298.040625,
        "min" : 3945298.040625,
        "sum" : 1.262495373E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4917073.81875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4917073.81875,
        "min" : 4917073.81875,
        "sum" : 1.573463622E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4201596.575,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4201596.575,
        "min" : 4201596.575,
        "sum" : 1.344510904E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4372451.284375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4372451.284375,
        "min" : 4372451.284375,
        "sum" : 1.399184411E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4079610.246875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4079610.246875,
        "min" : 4079610.246875,
        "sum" : 1.305475279E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3945932.184375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3945932.184375,
        "min" : 3945932.184375,
        "sum" : 1.262698299E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4002686.175,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4002686.175,
        "min" : 4002686.175,
        "sum" : 1.280859576E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3962406.865625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3962406.865625,
        "min" : 3962406.865625,
        "sum" : 1.267970197E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3917176.48125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3917176.48125,
        "min" : 3917176.48125,
        "sum" : 1.253496474E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3891641.15625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3891641.15625,
        "min" : 3891641.15625,
        "sum" : 1.24532517E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3789434.0375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3789434.0375,
        "min" : 3789434.0375,
        "sum" : 1.212618892E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4922995.215625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4922995.215625,
        "min" : 4922995.215625,
        "sum" : 1.575358469E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4141496.196875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4141496.196875,
        "min" : 4141496.196875,
        "sum" : 1.325278783E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4294549.6,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4294549.6,
        "min" : 4294549.6,
        "sum" : 1.374255872E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4061104.73125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4061104.73125,
        "min" : 4061104.73125,
        "sum" : 1.299553514E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4009572.740625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4009572.740625,
        "min" : 4009572.740625,
        "sum" : 1.283063277E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4117249.51875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4117249.51875,
        "min" : 4117249.51875,
        "sum" : 1.317519846E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4015421.575,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4015421.575,
        "min" : 4015421.575,
        "sum" : 1.284934904E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3947915.83125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3947915.83125,
        "min" : 3947915.83125,
        "sum" : 1.263333066E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3819877.296875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3819877.296875,
        "min" : 3819877.296875,
        "sum" : 1.222360735E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3916719.4375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3916719.4375,
        "min" : 3916719.4375,
        "sum" : 1.25335022E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4807894.028125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4807894.028125,
        "min" : 4807894.028125,
        "sum" : 1.538526089E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4379329.634375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4379329.634375,
        "min" : 4379329.634375,
        "sum" : 1.401385483E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4280338.7625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4280338.7625,
        "min" : 4280338.7625,
        "sum" : 1.369708404E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4172849.975,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4172849.975,
        "min" : 4172849.975,
        "sum" : 1.335311992E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4080594.540625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4080594.540625,
        "min" : 4080594.540625,
        "sum" : 1.305790253E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4128811.503125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4128811.503125,
        "min" : 4128811.503125,
        "sum" : 1.321219681E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3785500.171875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3785500.171875,
        "min" : 3785500.171875,
        "sum" : 1.211360055E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3888125.9875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3888125.9875,
        "min" : 3888125.9875,
        "sum" : 1.244200316E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3941427.853125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3941427.853125,
        "min" : 3941427.853125,
        "sum" : 1.261256913E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4015959.14375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4015959.14375,
        "min" : 4015959.14375,
        "sum" : 1.285106926E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4822888.6875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4822888.6875,
        "min" : 4822888.6875,
        "sum" : 1.54332438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4168171.0875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4168171.0875,
        "min" : 4168171.0875,
        "sum" : 1.333814748E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4279342.75,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4279342.75,
        "min" : 4279342.75,
        "sum" : 1.36938968E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4121610.73125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4121610.73125,
        "min" : 4121610.73125,
        "sum" : 1.318915434E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3991815.734375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3991815.734375,
        "min" : 3991815.734375,
        "sum" : 1.277381035E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4004351.925,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4004351.925,
        "min" : 4004351.925,
        "sum" : 1.281392616E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3963985.7,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3963985.7,
        "min" : 3963985.7,
        "sum" : 1.268475424E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3912499.834375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3912499.834375,
        "min" : 3912499.834375,
        "sum" : 1.251999947E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3907764.059375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3907764.059375,
        "min" : 3907764.059375,
        "sum" : 1.250484499E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3874912.128125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3874912.128125,
        "min" : 3874912.128125,
        "sum" : 1.239971881E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4902327.159375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4902327.159375,
        "min" : 4902327.159375,
        "sum" : 1.568744691E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4152688.125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4152688.125,
        "min" : 4152688.125,
        "sum" : 1.3288602E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4332417.428125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4332417.428125,
        "min" : 4332417.428125,
        "sum" : 1.386373577E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4072906.15625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 4072906.15625,
        "min" : 4072906.15625,
        "sum" : 1.30332997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3924767.696875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3924767.696875,
        "min" : 3924767.696875,
        "sum" : 1.255925663E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3977336.040625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3977336.040625,
        "min" : 3977336.040625,
        "sum" : 1.272747533E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3926395.509375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3926395.509375,
        "min" : 3926395.509375,
        "sum" : 1.256446563E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3866857.2,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3866857.2,
        "min" : 3866857.2,
        "sum" : 1.237394304E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3757778.671875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3757778.671875,
        "min" : 3757778.671875,
        "sum" : 1.202489175E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3858579.09375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 3858579.09375,
        "min" : 3858579.09375,
        "sum" : 1.23474531E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 65159.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 65159.721875,
        "min" : 65159.721875,
        "sum" : 2.0851111E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35109.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35109.721875,
        "min" : 35109.721875,
        "sum" : 1.1235111E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29622.221875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29622.221875,
        "min" : 29622.221875,
        "sum" : 9479111.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28685.0875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28685.0875,
        "min" : 28685.0875,
        "sum" : 9179228.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28641.3375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28641.3375,
        "min" : 28641.3375,
        "sum" : 9165228.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27669.090625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27669.090625,
        "min" : 27669.090625,
        "sum" : 8854109.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26791.565625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26791.565625,
        "min" : 26791.565625,
        "sum" : 8573301.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28531.253125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28531.253125,
        "min" : 28531.253125,
        "sum" : 9130001.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27146.70625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27146.70625,
        "min" : 27146.70625,
        "sum" : 8686946.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27470.096875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27470.096875,
        "min" : 27470.096875,
        "sum" : 8790431.0,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 83181.803125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 83181.803125,
        "min" : 83181.803125,
        "sum" : 2.6618177E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 41933.115625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 41933.115625,
        "min" : 41933.115625,
        "sum" : 1.3418597E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29411.03125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29411.03125,
        "min" : 29411.03125,
        "sum" : 9411530.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27604.81875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27604.81875,
        "min" : 27604.81875,
        "sum" : 8833542.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26987.078125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26987.078125,
        "min" : 26987.078125,
        "sum" : 8635865.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27198.98125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27198.98125,
        "min" : 27198.98125,
        "sum" : 8703674.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27955.64375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27955.64375,
        "min" : 27955.64375,
        "sum" : 8945806.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27190.596875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27190.596875,
        "min" : 27190.596875,
        "sum" : 8700991.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27500.209375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27500.209375,
        "min" : 27500.209375,
        "sum" : 8800067.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27134.334375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27134.334375,
        "min" : 27134.334375,
        "sum" : 8682987.0,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 77770.478125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 77770.478125,
        "min" : 77770.478125,
        "sum" : 2.4886553E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 44213.20625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 44213.20625,
        "min" : 44213.20625,
        "sum" : 1.4148226E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29274.015625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29274.015625,
        "min" : 29274.015625,
        "sum" : 9367685.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28879.859375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28879.859375,
        "min" : 28879.859375,
        "sum" : 9241555.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28520.634375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28520.634375,
        "min" : 28520.634375,
        "sum" : 9126603.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29107.33125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29107.33125,
        "min" : 29107.33125,
        "sum" : 9314346.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28258.346875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28258.346875,
        "min" : 28258.346875,
        "sum" : 9042671.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27875.078125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27875.078125,
        "min" : 27875.078125,
        "sum" : 8920025.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27639.396875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27639.396875,
        "min" : 27639.396875,
        "sum" : 8844607.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27576.690625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27576.690625,
        "min" : 27576.690625,
        "sum" : 8824541.0,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 74684.275,
        "variance" : 0.0,
        "n" : 320,
        "max" : 74684.275,
        "min" : 74684.275,
        "sum" : 2.3898968E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 56810.409375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 56810.409375,
        "min" : 56810.409375,
        "sum" : 1.8179331E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29903.0375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29903.0375,
        "min" : 29903.0375,
        "sum" : 9568972.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28062.396875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28062.396875,
        "min" : 28062.396875,
        "sum" : 8979967.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27857.08125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27857.08125,
        "min" : 27857.08125,
        "sum" : 8914266.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27915.071875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27915.071875,
        "min" : 27915.071875,
        "sum" : 8932823.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28708.15625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28708.15625,
        "min" : 28708.15625,
        "sum" : 9186610.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 32303.575,
        "variance" : 0.0,
        "n" : 320,
        "max" : 32303.575,
        "min" : 32303.575,
        "sum" : 1.0337144E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26572.58125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26572.58125,
        "min" : 26572.58125,
        "sum" : 8503226.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26270.496875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26270.496875,
        "min" : 26270.496875,
        "sum" : 8406559.0,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 69199.45625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 69199.45625,
        "min" : 69199.45625,
        "sum" : 2.2143826E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 33870.821875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 33870.821875,
        "min" : 33870.821875,
        "sum" : 1.0838663E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29459.65625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29459.65625,
        "min" : 29459.65625,
        "sum" : 9427090.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27431.215625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27431.215625,
        "min" : 27431.215625,
        "sum" : 8777989.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26946.728125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26946.728125,
        "min" : 26946.728125,
        "sum" : 8622953.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26919.546875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26919.546875,
        "min" : 26919.546875,
        "sum" : 8614255.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28021.834375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28021.834375,
        "min" : 28021.834375,
        "sum" : 8966987.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 32282.153125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 32282.153125,
        "min" : 32282.153125,
        "sum" : 1.0330289E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 25872.315625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 25872.315625,
        "min" : 25872.315625,
        "sum" : 8279141.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26072.728125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26072.728125,
        "min" : 26072.728125,
        "sum" : 8343273.0,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 83095.7375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 83095.7375,
        "min" : 83095.7375,
        "sum" : 2.6590636E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 44486.709375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 44486.709375,
        "min" : 44486.709375,
        "sum" : 1.4235747E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28480.759375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28480.759375,
        "min" : 28480.759375,
        "sum" : 9113843.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27999.375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27999.375,
        "min" : 27999.375,
        "sum" : 8959800.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28209.55,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28209.55,
        "min" : 28209.55,
        "sum" : 9027056.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27565.228125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27565.228125,
        "min" : 27565.228125,
        "sum" : 8820873.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27201.73125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27201.73125,
        "min" : 27201.73125,
        "sum" : 8704554.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26919.984375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26919.984375,
        "min" : 26919.984375,
        "sum" : 8614395.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26773.5625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26773.5625,
        "min" : 26773.5625,
        "sum" : 8567540.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26975.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26975.721875,
        "min" : 26975.721875,
        "sum" : 8632231.0,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 83757.15625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 83757.15625,
        "min" : 83757.15625,
        "sum" : 2.680229E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 42974.63125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 42974.63125,
        "min" : 42974.63125,
        "sum" : 1.3751882E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30408.396875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30408.396875,
        "min" : 30408.396875,
        "sum" : 9730687.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28975.40625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28975.40625,
        "min" : 28975.40625,
        "sum" : 9272130.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28760.05625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28760.05625,
        "min" : 28760.05625,
        "sum" : 9203218.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28928.25,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28928.25,
        "min" : 28928.25,
        "sum" : 9257040.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29422.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29422.721875,
        "min" : 29422.721875,
        "sum" : 9415271.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29132.1875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29132.1875,
        "min" : 29132.1875,
        "sum" : 9322300.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28666.946875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28666.946875,
        "min" : 28666.946875,
        "sum" : 9173423.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29021.671875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29021.671875,
        "min" : 29021.671875,
        "sum" : 9286935.0,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 88689.01875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 88689.01875,
        "min" : 88689.01875,
        "sum" : 2.8380486E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34715.4,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34715.4,
        "min" : 34715.4,
        "sum" : 1.1108928E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30595.24375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30595.24375,
        "min" : 30595.24375,
        "sum" : 9790478.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28755.44375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28755.44375,
        "min" : 28755.44375,
        "sum" : 9201742.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29117.828125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29117.828125,
        "min" : 29117.828125,
        "sum" : 9317705.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27974.2,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27974.2,
        "min" : 27974.2,
        "sum" : 8951744.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27573.034375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27573.034375,
        "min" : 27573.034375,
        "sum" : 8823371.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27374.4125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27374.4125,
        "min" : 27374.4125,
        "sum" : 8759812.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27438.16875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27438.16875,
        "min" : 27438.16875,
        "sum" : 8780214.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27588.790625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27588.790625,
        "min" : 27588.790625,
        "sum" : 8828413.0,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 83640.75,
        "variance" : 0.0,
        "n" : 320,
        "max" : 83640.75,
        "min" : 83640.75,
        "sum" : 2.676504E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 33301.66875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 33301.66875,
        "min" : 33301.66875,
        "sum" : 1.0656534E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28643.4375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28643.4375,
        "min" : 28643.4375,
        "sum" : 9165900.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26424.128125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26424.128125,
        "min" : 26424.128125,
        "sum" : 8455721.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26503.78125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26503.78125,
        "min" : 26503.78125,
        "sum" : 8481210.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 25971.784375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 25971.784375,
        "min" : 25971.784375,
        "sum" : 8310971.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26045.33125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26045.33125,
        "min" : 26045.33125,
        "sum" : 8334506.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 25791.7625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 25791.7625,
        "min" : 25791.7625,
        "sum" : 8253364.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 25741.4125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 25741.4125,
        "min" : 25741.4125,
        "sum" : 8237252.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 25899.46875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 25899.46875,
        "min" : 25899.46875,
        "sum" : 8287830.0,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 93345.784375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 93345.784375,
        "min" : 93345.784375,
        "sum" : 2.9870651E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 61846.959375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 61846.959375,
        "min" : 61846.959375,
        "sum" : 1.9791027E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 55905.940625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 55905.940625,
        "min" : 55905.940625,
        "sum" : 1.7889901E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 33186.090625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 33186.090625,
        "min" : 33186.090625,
        "sum" : 1.0619549E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27552.009375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27552.009375,
        "min" : 27552.009375,
        "sum" : 8816643.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27533.178125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27533.178125,
        "min" : 27533.178125,
        "sum" : 8810617.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30155.384375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30155.384375,
        "min" : 30155.384375,
        "sum" : 9649723.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35033.80625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35033.80625,
        "min" : 35033.80625,
        "sum" : 1.1210818E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29217.753125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29217.753125,
        "min" : 29217.753125,
        "sum" : 9349681.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28037.609375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28037.609375,
        "min" : 28037.609375,
        "sum" : 8972035.0,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 61084.4625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 61084.4625,
        "min" : 61084.4625,
        "sum" : 1.9547028E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34172.2875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34172.2875,
        "min" : 34172.2875,
        "sum" : 1.0935132E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30194.60625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30194.60625,
        "min" : 30194.60625,
        "sum" : 9662274.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28662.984375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28662.984375,
        "min" : 28662.984375,
        "sum" : 9172155.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28052.53125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28052.53125,
        "min" : 28052.53125,
        "sum" : 8976810.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27647.21875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27647.21875,
        "min" : 27647.21875,
        "sum" : 8847110.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27997.975,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27997.975,
        "min" : 27997.975,
        "sum" : 8959352.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28282.29375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28282.29375,
        "min" : 28282.29375,
        "sum" : 9050334.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28540.121875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28540.121875,
        "min" : 28540.121875,
        "sum" : 9132839.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27580.384375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27580.384375,
        "min" : 27580.384375,
        "sum" : 8825723.0,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 66132.078125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 66132.078125,
        "min" : 66132.078125,
        "sum" : 2.1162265E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35073.728125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35073.728125,
        "min" : 35073.728125,
        "sum" : 1.1223593E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30555.628125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30555.628125,
        "min" : 30555.628125,
        "sum" : 9777801.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28602.646875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28602.646875,
        "min" : 28602.646875,
        "sum" : 9152847.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28038.2875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28038.2875,
        "min" : 28038.2875,
        "sum" : 8972252.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27857.134375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27857.134375,
        "min" : 27857.134375,
        "sum" : 8914283.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27498.034375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27498.034375,
        "min" : 27498.034375,
        "sum" : 8799371.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27417.165625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27417.165625,
        "min" : 27417.165625,
        "sum" : 8773493.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27423.43125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27423.43125,
        "min" : 27423.43125,
        "sum" : 8775498.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26817.53125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26817.53125,
        "min" : 26817.53125,
        "sum" : 8581610.0,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 66186.234375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 66186.234375,
        "min" : 66186.234375,
        "sum" : 2.1179595E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34995.359375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34995.359375,
        "min" : 34995.359375,
        "sum" : 1.1198515E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 31317.85625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 31317.85625,
        "min" : 31317.85625,
        "sum" : 1.0021714E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27689.890625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27689.890625,
        "min" : 27689.890625,
        "sum" : 8860765.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29370.728125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29370.728125,
        "min" : 29370.728125,
        "sum" : 9398633.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27334.665625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27334.665625,
        "min" : 27334.665625,
        "sum" : 8747093.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28699.55,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28699.55,
        "min" : 28699.55,
        "sum" : 9183856.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 32821.0125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 32821.0125,
        "min" : 32821.0125,
        "sum" : 1.0502724E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26717.334375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26717.334375,
        "min" : 26717.334375,
        "sum" : 8549547.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27407.425,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27407.425,
        "min" : 27407.425,
        "sum" : 8770376.0,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 90654.340625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 90654.340625,
        "min" : 90654.340625,
        "sum" : 2.9009389E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35766.3625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35766.3625,
        "min" : 35766.3625,
        "sum" : 1.1445236E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29812.30625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29812.30625,
        "min" : 29812.30625,
        "sum" : 9539938.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29057.59375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29057.59375,
        "min" : 29057.59375,
        "sum" : 9298430.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28857.090625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28857.090625,
        "min" : 28857.090625,
        "sum" : 9234269.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27997.840625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27997.840625,
        "min" : 27997.840625,
        "sum" : 8959309.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27536.6375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27536.6375,
        "min" : 27536.6375,
        "sum" : 8811724.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27423.921875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27423.921875,
        "min" : 27423.921875,
        "sum" : 8775655.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27254.103125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27254.103125,
        "min" : 27254.103125,
        "sum" : 8721313.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28377.471875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28377.471875,
        "min" : 28377.471875,
        "sum" : 9080791.0,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 72337.075,
        "variance" : 0.0,
        "n" : 320,
        "max" : 72337.075,
        "min" : 72337.075,
        "sum" : 2.3147864E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 42742.14375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 42742.14375,
        "min" : 42742.14375,
        "sum" : 1.3677486E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30213.640625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30213.640625,
        "min" : 30213.640625,
        "sum" : 9668365.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28280.41875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28280.41875,
        "min" : 28280.41875,
        "sum" : 9049734.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27823.3875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27823.3875,
        "min" : 27823.3875,
        "sum" : 8903484.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28343.040625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28343.040625,
        "min" : 28343.040625,
        "sum" : 9069773.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28149.365625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28149.365625,
        "min" : 28149.365625,
        "sum" : 9007797.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28717.81875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28717.81875,
        "min" : 28717.81875,
        "sum" : 9189702.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27768.178125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27768.178125,
        "min" : 27768.178125,
        "sum" : 8885817.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29012.509375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29012.509375,
        "min" : 29012.509375,
        "sum" : 9284003.0,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 73163.50625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 73163.50625,
        "min" : 73163.50625,
        "sum" : 2.3412322E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 46595.55,
        "variance" : 0.0,
        "n" : 320,
        "max" : 46595.55,
        "min" : 46595.55,
        "sum" : 1.4910576E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28810.121875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28810.121875,
        "min" : 28810.121875,
        "sum" : 9219239.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27934.765625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27934.765625,
        "min" : 27934.765625,
        "sum" : 8939125.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27898.33125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27898.33125,
        "min" : 27898.33125,
        "sum" : 8927466.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27573.275,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27573.275,
        "min" : 27573.275,
        "sum" : 8823448.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26457.959375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26457.959375,
        "min" : 26457.959375,
        "sum" : 8466547.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26737.746875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26737.746875,
        "min" : 26737.746875,
        "sum" : 8556079.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26042.440625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26042.440625,
        "min" : 26042.440625,
        "sum" : 8333581.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26306.54375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26306.54375,
        "min" : 26306.54375,
        "sum" : 8418094.0,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 80262.959375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 80262.959375,
        "min" : 80262.959375,
        "sum" : 2.5684147E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 39277.4875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 39277.4875,
        "min" : 39277.4875,
        "sum" : 1.2568796E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30060.75625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30060.75625,
        "min" : 30060.75625,
        "sum" : 9619442.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27515.409375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27515.409375,
        "min" : 27515.409375,
        "sum" : 8804931.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 46340.75,
        "variance" : 0.0,
        "n" : 320,
        "max" : 46340.75,
        "min" : 46340.75,
        "sum" : 1.482904E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26259.09375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26259.09375,
        "min" : 26259.09375,
        "sum" : 8402910.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26435.2375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26435.2375,
        "min" : 26435.2375,
        "sum" : 8459276.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26145.546875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26145.546875,
        "min" : 26145.546875,
        "sum" : 8366575.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26085.809375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26085.809375,
        "min" : 26085.809375,
        "sum" : 8347459.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27459.296875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27459.296875,
        "min" : 27459.296875,
        "sum" : 8786975.0,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 58344.278125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 58344.278125,
        "min" : 58344.278125,
        "sum" : 1.8670169E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34835.784375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34835.784375,
        "min" : 34835.784375,
        "sum" : 1.1147451E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29660.865625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29660.865625,
        "min" : 29660.865625,
        "sum" : 9491477.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28536.484375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28536.484375,
        "min" : 28536.484375,
        "sum" : 9131675.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28240.93125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28240.93125,
        "min" : 28240.93125,
        "sum" : 9037098.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27941.628125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27941.628125,
        "min" : 27941.628125,
        "sum" : 8941321.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27043.328125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27043.328125,
        "min" : 27043.328125,
        "sum" : 8653865.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26760.078125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26760.078125,
        "min" : 26760.078125,
        "sum" : 8563225.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26818.3125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26818.3125,
        "min" : 26818.3125,
        "sum" : 8581860.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26991.278125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26991.278125,
        "min" : 26991.278125,
        "sum" : 8637209.0,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 72765.775,
        "variance" : 0.0,
        "n" : 320,
        "max" : 72765.775,
        "min" : 72765.775,
        "sum" : 2.3285048E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35016.0,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35016.0,
        "min" : 35016.0,
        "sum" : 1.120512E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30735.834375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30735.834375,
        "min" : 30735.834375,
        "sum" : 9835467.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28401.49375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28401.49375,
        "min" : 28401.49375,
        "sum" : 9088478.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28694.16875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28694.16875,
        "min" : 28694.16875,
        "sum" : 9182134.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27910.571875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27910.571875,
        "min" : 27910.571875,
        "sum" : 8931383.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27560.428125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27560.428125,
        "min" : 27560.428125,
        "sum" : 8819337.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27146.90625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27146.90625,
        "min" : 27146.90625,
        "sum" : 8687010.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27143.828125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27143.828125,
        "min" : 27143.828125,
        "sum" : 8686025.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27164.3625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27164.3625,
        "min" : 27164.3625,
        "sum" : 8692596.0,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 75019.046875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 75019.046875,
        "min" : 75019.046875,
        "sum" : 2.4006095E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 59727.128125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 59727.128125,
        "min" : 59727.128125,
        "sum" : 1.9112681E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 39324.140625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 39324.140625,
        "min" : 39324.140625,
        "sum" : 1.2583725E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 53044.909375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 53044.909375,
        "min" : 53044.909375,
        "sum" : 1.6974371E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 37602.03125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 37602.03125,
        "min" : 37602.03125,
        "sum" : 1.203265E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27742.88125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27742.88125,
        "min" : 27742.88125,
        "sum" : 8877722.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27432.346875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27432.346875,
        "min" : 27432.346875,
        "sum" : 8778351.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27135.05,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27135.05,
        "min" : 27135.05,
        "sum" : 8683216.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27471.721875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27471.721875,
        "min" : 27471.721875,
        "sum" : 8790951.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27652.884375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27652.884375,
        "min" : 27652.884375,
        "sum" : 8848923.0,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 63594.665625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 63594.665625,
        "min" : 63594.665625,
        "sum" : 2.0350293E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34814.096875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34814.096875,
        "min" : 34814.096875,
        "sum" : 1.1140511E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 31031.203125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 31031.203125,
        "min" : 31031.203125,
        "sum" : 9929985.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29505.3125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29505.3125,
        "min" : 29505.3125,
        "sum" : 9441700.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28862.740625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28862.740625,
        "min" : 28862.740625,
        "sum" : 9236077.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28311.259375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28311.259375,
        "min" : 28311.259375,
        "sum" : 9059603.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28361.365625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28361.365625,
        "min" : 28361.365625,
        "sum" : 9075637.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28522.396875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28522.396875,
        "min" : 28522.396875,
        "sum" : 9127167.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28979.009375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28979.009375,
        "min" : 28979.009375,
        "sum" : 9273283.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28467.08125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28467.08125,
        "min" : 28467.08125,
        "sum" : 9109466.0,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 59457.66875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 59457.66875,
        "min" : 59457.66875,
        "sum" : 1.9026454E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34043.434375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34043.434375,
        "min" : 34043.434375,
        "sum" : 1.0893899E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30187.375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30187.375,
        "min" : 30187.375,
        "sum" : 9659960.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28895.95625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28895.95625,
        "min" : 28895.95625,
        "sum" : 9246706.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28077.290625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28077.290625,
        "min" : 28077.290625,
        "sum" : 8984733.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27873.915625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27873.915625,
        "min" : 27873.915625,
        "sum" : 8919653.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27908.971875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27908.971875,
        "min" : 27908.971875,
        "sum" : 8930871.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28281.8,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28281.8,
        "min" : 28281.8,
        "sum" : 9050176.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28255.709375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28255.709375,
        "min" : 28255.709375,
        "sum" : 9041827.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27817.709375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27817.709375,
        "min" : 27817.709375,
        "sum" : 8901667.0,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 67832.65,
        "variance" : 0.0,
        "n" : 320,
        "max" : 67832.65,
        "min" : 67832.65,
        "sum" : 2.1706448E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 33115.109375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 33115.109375,
        "min" : 33115.109375,
        "sum" : 1.0596835E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 30207.2375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 30207.2375,
        "min" : 30207.2375,
        "sum" : 9666316.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29119.175,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29119.175,
        "min" : 29119.175,
        "sum" : 9318136.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27867.35,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27867.35,
        "min" : 27867.35,
        "sum" : 8917552.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28024.2875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28024.2875,
        "min" : 28024.2875,
        "sum" : 8967772.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28352.925,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28352.925,
        "min" : 28352.925,
        "sum" : 9072936.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28488.0375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28488.0375,
        "min" : 28488.0375,
        "sum" : 9116172.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28786.565625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28786.565625,
        "min" : 28786.565625,
        "sum" : 9211701.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27958.70625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27958.70625,
        "min" : 27958.70625,
        "sum" : 8946786.0,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 77415.9625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 77415.9625,
        "min" : 77415.9625,
        "sum" : 2.4773108E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35527.41875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35527.41875,
        "min" : 35527.41875,
        "sum" : 1.1368774E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 35550.946875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 35550.946875,
        "min" : 35550.946875,
        "sum" : 1.1376303E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 53244.453125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 53244.453125,
        "min" : 53244.453125,
        "sum" : 1.7038225E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 51444.225,
        "variance" : 0.0,
        "n" : 320,
        "max" : 51444.225,
        "min" : 51444.225,
        "sum" : 1.6462152E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29224.090625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29224.090625,
        "min" : 29224.090625,
        "sum" : 9351709.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 31395.49375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 31395.49375,
        "min" : 31395.49375,
        "sum" : 1.0046558E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 32438.740625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 32438.740625,
        "min" : 32438.740625,
        "sum" : 1.0380397E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29054.346875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29054.346875,
        "min" : 29054.346875,
        "sum" : 9297391.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28764.034375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28764.034375,
        "min" : 28764.034375,
        "sum" : 9204491.0,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 79891.6375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 79891.6375,
        "min" : 79891.6375,
        "sum" : 2.5565324E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34058.228125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34058.228125,
        "min" : 34058.228125,
        "sum" : 1.0898633E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29901.378125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29901.378125,
        "min" : 29901.378125,
        "sum" : 9568441.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28787.525,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28787.525,
        "min" : 28787.525,
        "sum" : 9212008.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28238.84375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28238.84375,
        "min" : 28238.84375,
        "sum" : 9036430.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27650.8125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27650.8125,
        "min" : 27650.8125,
        "sum" : 8848260.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26826.065625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26826.065625,
        "min" : 26826.065625,
        "sum" : 8584341.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28089.95625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28089.95625,
        "min" : 28089.95625,
        "sum" : 8988786.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26500.565625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26500.565625,
        "min" : 26500.565625,
        "sum" : 8480181.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27381.43125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27381.43125,
        "min" : 27381.43125,
        "sum" : 8762058.0,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 94596.21875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 94596.21875,
        "min" : 94596.21875,
        "sum" : 3.027079E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34806.271875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34806.271875,
        "min" : 34806.271875,
        "sum" : 1.1138007E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29389.178125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29389.178125,
        "min" : 29389.178125,
        "sum" : 9404537.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27925.6625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27925.6625,
        "min" : 27925.6625,
        "sum" : 8936212.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27685.259375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27685.259375,
        "min" : 27685.259375,
        "sum" : 8859283.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27904.25,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27904.25,
        "min" : 27904.25,
        "sum" : 8929360.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27344.996875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27344.996875,
        "min" : 27344.996875,
        "sum" : 8750399.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26858.103125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26858.103125,
        "min" : 26858.103125,
        "sum" : 8594593.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26789.459375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26789.459375,
        "min" : 26789.459375,
        "sum" : 8572627.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27570.86875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27570.86875,
        "min" : 27570.86875,
        "sum" : 8822678.0,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 75527.928125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 75527.928125,
        "min" : 75527.928125,
        "sum" : 2.4168937E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 60518.175,
        "variance" : 0.0,
        "n" : 320,
        "max" : 60518.175,
        "min" : 60518.175,
        "sum" : 1.9365816E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 33316.76875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 33316.76875,
        "min" : 33316.76875,
        "sum" : 1.0661366E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28261.175,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28261.175,
        "min" : 28261.175,
        "sum" : 9043576.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27827.078125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27827.078125,
        "min" : 27827.078125,
        "sum" : 8904665.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28294.359375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28294.359375,
        "min" : 28294.359375,
        "sum" : 9054195.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28571.9625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28571.9625,
        "min" : 28571.9625,
        "sum" : 9143028.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 31657.534375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 31657.534375,
        "min" : 31657.534375,
        "sum" : 1.0130411E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26687.509375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26687.509375,
        "min" : 26687.509375,
        "sum" : 8540003.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27117.38125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27117.38125,
        "min" : 27117.38125,
        "sum" : 8677562.0,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 69124.815625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 69124.815625,
        "min" : 69124.815625,
        "sum" : 2.2119941E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 60196.93125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 60196.93125,
        "min" : 60196.93125,
        "sum" : 1.9263018E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 39757.253125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 39757.253125,
        "min" : 39757.253125,
        "sum" : 1.2722321E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 51215.753125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 51215.753125,
        "min" : 51215.753125,
        "sum" : 1.6389041E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 48931.95625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 48931.95625,
        "min" : 48931.95625,
        "sum" : 1.5658226E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 33000.971875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 33000.971875,
        "min" : 33000.971875,
        "sum" : 1.0560311E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28171.2875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28171.2875,
        "min" : 28171.2875,
        "sum" : 9014812.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27284.2625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27284.2625,
        "min" : 27284.2625,
        "sum" : 8730964.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28735.68125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28735.68125,
        "min" : 28735.68125,
        "sum" : 9195418.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26806.975,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26806.975,
        "min" : 26806.975,
        "sum" : 8578232.0,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 57866.55,
        "variance" : 0.0,
        "n" : 320,
        "max" : 57866.55,
        "min" : 57866.55,
        "sum" : 1.8517296E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34474.25625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34474.25625,
        "min" : 34474.25625,
        "sum" : 1.1031762E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29714.153125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29714.153125,
        "min" : 29714.153125,
        "sum" : 9508529.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28494.8625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28494.8625,
        "min" : 28494.8625,
        "sum" : 9118356.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28305.178125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28305.178125,
        "min" : 28305.178125,
        "sum" : 9057657.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27856.43125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27856.43125,
        "min" : 27856.43125,
        "sum" : 8914058.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27139.28125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27139.28125,
        "min" : 27139.28125,
        "sum" : 8684570.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27575.35,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27575.35,
        "min" : 27575.35,
        "sum" : 8824112.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26860.05625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26860.05625,
        "min" : 26860.05625,
        "sum" : 8595218.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26628.19375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26628.19375,
        "min" : 26628.19375,
        "sum" : 8521022.0,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 63450.025,
        "variance" : 0.0,
        "n" : 320,
        "max" : 63450.025,
        "min" : 63450.025,
        "sum" : 2.0304008E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 34804.9125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 34804.9125,
        "min" : 34804.9125,
        "sum" : 1.1137572E7,
        "standardDeviation" : 0.0
      }, {
        "mean" : 29863.296875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 29863.296875,
        "min" : 29863.296875,
        "sum" : 9556255.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27737.471875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27737.471875,
        "min" : 27737.471875,
        "sum" : 8875991.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27589.103125,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27589.103125,
        "min" : 27589.103125,
        "sum" : 8828513.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27825.01875,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27825.01875,
        "min" : 27825.01875,
        "sum" : 8904006.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 28045.25625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 28045.25625,
        "min" : 28045.25625,
        "sum" : 8974482.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 27681.84375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 27681.84375,
        "min" : 27681.84375,
        "sum" : 8858190.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26570.965625,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26570.965625,
        "min" : 26570.965625,
        "sum" : 8502709.0,
        "standardDeviation" : 0.0
      }, {
        "mean" : 26648.99375,
        "variance" : 0.0,
        "n" : 320,
        "max" : 26648.99375,
        "min" : 26648.99375,
        "sum" : 8527678.0,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
