if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit bde56c2abc9485c8deec1a06d840ea4e14249a90 -test org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest\")'>bde56c2abc9485c8deec1a06d840ea4e14249a90</a><br>Predecessor: 553458a9a08bb522283b19464f76ca91713bc19b<br>Comitter: <br>Test Case: org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest<br>";
   if (typeof jenkins !== 'undefined') {
         } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='readBasicGraphTest_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
  }
}

var source = {"current":
{
 "org.gradoop.io.reader.SimpleVertexReader.readVertex_String":
 `/**
 * {@inheritDoc}
 */
@Override
public Vertex readVertex(String line) {
    String[] tokens = getTokens(line);
    Long vertexID = Long.valueOf(tokens[0]);
    if (tokens.length > 1) {
        List<Edge> edges = Lists.newArrayListWithCapacity(tokens.length - 1);
        for (int i = 1; i < tokens.length; i++) {
            Long otherID = Long.valueOf(tokens[i]);
            Edge e = EdgeFactory.createDefaultEdge(otherID, (long) i - 1);
            edges.add(e);
        }
        return VertexFactory.createDefaultVertexWithOutgoingEdges(vertexID, edges);
    } else {
        return VertexFactory.createDefaultVertexWithID(vertexID);
    }
}`,"org.gradoop.GradoopTest.validateBasicGraphEdges_List_int_long":
 `private void validateBasicGraphEdges(List<Edge> edgeList, int expectedCount, long... otherIDs) {
    assertThat(edgeList.size(), is(expectedCount));
    for (int i = 0; i < otherIDs.length; i++) {
        boolean match = false;
        for (Edge e : edgeList) {
            if (e.getOtherID() == otherIDs[i]) {
                match = true;
                assertThat(e.getIndex(), is((long) i));
            }
        }
        if (!match) {
            assertTrue("edge list contains wrong edges", false);
        }
    }
}`,"org.gradoop.GradoopTest.validateBasicGraphEdges_Iterable_int_long":
 ``,"org.gradoop.GradoopTest.validateBasicGraphVertices_List":
 `protected void validateBasicGraphVertices(List<Vertex> vertices) {
    assertEquals(4, vertices.size());
    for (Vertex v : vertices) {
        Long i = v.getID();
        List<Edge> edgeList = Lists.newArrayList();
        if (v.getOutgoingDegree() > 0) {
            edgeList = Lists.newArrayList(v.getOutgoingEdges());
        }
        if (i.equals(0L)) {
            validateBasicGraphEdges(edgeList, 2, 1, 2);
        } else if (i.equals(1L)) {
            validateBasicGraphEdges(edgeList, 2, 0, 2);
        } else if (i.equals(2L)) {
            validateBasicGraphEdges(edgeList, 1, 1);
        } else if (i.equals(3L)) {
            validateBasicGraphEdges(edgeList, 0);
        }
    }
}`,"org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest_":
 `@Test
public void readBasicGraphTest() throws IOException {
    VertexLineReader reader = new SimpleVertexReader();
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : BASIC_GRAPH) {
        vertices.add(reader.readVertex(line));
    }
    validateBasicGraphVertices(vertices);
}`,},
"old":
{
 "org.gradoop.io.reader.SimpleVertexReader.readVertex_String":
 `/**
 * {@inheritDoc}
 */
@Override
public Vertex readVertex(String line) {
    String[] tokens = getTokens(line);
    Long vertexID = Long.valueOf(tokens[0]);
    List<Edge> edges = Lists.newArrayListWithCapacity(tokens.length - 1);
    for (int i = 1; i < tokens.length; i++) {
        Long otherID = Long.valueOf(tokens[i]);
        Edge e = EdgeFactory.createDefaultEdge(otherID, (long) i - 1);
        edges.add(e);
    }
    return VertexFactory.createDefaultVertexWithOutgoingEdges(vertexID, edges);
}`,"org.gradoop.GradoopTest.validateBasicGraphEdges_List_int_long":
 ``,"org.gradoop.GradoopTest.validateBasicGraphEdges_Iterable_int_long":
 `private void validateBasicGraphEdges(Iterable<Edge> edges, int expectedCount, long... otherIDs) {
    List<Edge> edgeList = Lists.newArrayList(edges);
    assertThat(edgeList.size(), is(expectedCount));
    for (int i = 0; i < otherIDs.length; i++) {
        boolean match = false;
        for (Edge e : edgeList) {
            if (e.getOtherID() == otherIDs[i]) {
                match = true;
                assertThat(e.getIndex(), is((long) i));
            }
        }
        if (!match) {
            assertTrue("edge list contains wrong edges", false);
        }
    }
}`,"org.gradoop.GradoopTest.validateBasicGraphVertices_List":
 `protected void validateBasicGraphVertices(List<Vertex> vertices) {
    assertEquals(3, vertices.size());
    for (Vertex v : vertices) {
        Long i = v.getID();
        if (i.equals(0L)) {
            validateBasicGraphEdges(v.getOutgoingEdges(), 2, 1, 2);
        } else if (i.equals(1L)) {
            validateBasicGraphEdges(v.getOutgoingEdges(), 2, 0, 2);
        } else if (i.equals(2L)) {
            validateBasicGraphEdges(v.getOutgoingEdges(), 1, 1);
        }
    }
}`,"org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest_":
 `@Test
public void readBasicGraphTest() throws IOException {
    VertexLineReader reader = new SimpleVertexReader();
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : BASIC_GRAPH) {
        vertices.add(reader.readVertex(line));
    }
    validateBasicGraphVertices(vertices);
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
  "kiekerPattern" : "public void org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest()",
  "otherKiekerPattern" : "public void org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest()",
  "module" : "gradoop-core",
  "name" : "io.reader.SimpleVertexReaderTest#readBasicGraphTest",
  "key" : "org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest_",
  "otherKey" : "org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest_",
  "parent" : null,
  "color" : "#FF0000",
  "statistic" : {
    "meanOld" : 1.1792643490680003E9,
    "meanCurrent" : 1.3981737065241377E9,
    "deviationOld" : 1.0786470431736456E7,
    "deviationCurrent" : 1.680042855692074E7,
    "vms" : 29,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : -59.335760767155904,
    "change" : true
  },
  "hasSourceChange" : false,
  "state" : "SLOWER",
  "inVMDeviationPredecessor" : 7180503.12685918,
  "inVMDeviation" : 2.8436373109860778E7,
  "ess" : 0,
  "values" : [ 1.3564592896666667E9, 1.3743345225333333E9, 1.3910192742E9, 1.3971048218666668E9, 1.3951815285333333E9, 1.383671597E9, 1.4102004240666668E9, 1.4088513315333333E9, 1.3852475219333332E9, 1.3864399558E9, 1.3921431806E9, 1.3914735815333333E9, 1.3858374635333333E9, 1.4133303323333333E9, 1.4165463904E9, 1.3814932793333333E9, 1.4102133078E9, 1.4078797225333333E9, 1.398825204733333E9, 1.4239890225333333E9, 1.4087820376666667E9, 1.3995406703333333E9, 1.4377635052E9, 1.3918489678E9, 1.4121917136666667E9, 1.395906143733333E9, 1.3128262499E9, 1.395446282266667E9, 1.3771233234E9, 1.4181930926666667E9 ],
  "valuesPredecessor" : [ 1.18525397095E9, 1.1806941024E9, 1.1664013405E9, 1.1671802108E9, 1.1843494564E9, 1.15984033104E9, 1.17244732145E9, 1.1803710434E9, 1.1825785298E9, 1.18117051055E9, 1.18113378515E9, 1.1675345469E9, 1.19576992625E9, 1.1902535869E9, 1.1909337841E9, 1.1992877135E9, 1.1847402476E9, 1.1791202055E9, 1.1658033874E9, 1.1642877843E9, 1.1755960513E9, 1.17000303385E9, 1.1691396501E9, 1.177764929E9, 1.18727894965E9, 1.1798593047E9, 1.1895412442E9, 1.2037196887E9, 1.1728146407E9, 1.17306119495E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 1.3387212876666667E9,
        "variance" : 5.842097954269622E14,
        "n" : 2,
        "max" : 1.363970404E9,
        "min" : 1.315797633E9,
        "sum" : 2.6774425753333335E9,
        "standardDeviation" : 2.4170432255691297E7
      }, {
        "mean" : 1.3682846243333333E9,
        "variance" : 7.114827009934626E15,
        "n" : 3,
        "max" : 1.465624917E9,
        "min" : 1.31670285E9,
        "sum" : 4.104853873E9,
        "standardDeviation" : 8.434943396333271E7
      } ],
      "1" : [ {
        "mean" : 1.3648679833333333E9,
        "variance" : 6.4112650223697336E13,
        "n" : 2,
        "max" : 1.373325932E9,
        "min" : 1.35740482E9,
        "sum" : 2.7297359666666665E9,
        "standardDeviation" : 8007037.543542389
      }, {
        "mean" : 1.3806455486666667E9,
        "variance" : 7.687335255737644E14,
        "n" : 3,
        "max" : 1.412625516E9,
        "min" : 1.363353723E9,
        "sum" : 4.141936646E9,
        "standardDeviation" : 2.772604417463415E7
      } ],
      "2" : [ {
        "mean" : 1.379638434E9,
        "variance" : 2.1216947305776703E14,
        "n" : 2,
        "max" : 1.395358321E9,
        "min" : 1.3665984E9,
        "sum" : 2.759276868E9,
        "standardDeviation" : 1.4566038344648384E7
      }, {
        "mean" : 1.398606501E9,
        "variance" : 3.070972985733817E15,
        "n" : 3,
        "max" : 1.462392669E9,
        "min" : 1.362301324E9,
        "sum" : 4.195819503E9,
        "standardDeviation" : 5.541636027143805E7
      } ],
      "3" : [ {
        "mean" : 1.3836852196666667E9,
        "variance" : 2.6662960951578028E14,
        "n" : 2,
        "max" : 1.401775142E9,
        "min" : 1.370036386E9,
        "sum" : 2.7673704393333335E9,
        "standardDeviation" : 1.632879694024579E7
      }, {
        "mean" : 1.4060512233333333E9,
        "variance" : 5.746882280258471E15,
        "n" : 3,
        "max" : 1.493511526E9,
        "min" : 1.35917403E9,
        "sum" : 4.21815367E9,
        "standardDeviation" : 7.580819401791914E7
      } ],
      "4" : [ {
        "mean" : 1.3813137443333333E9,
        "variance" : 2.044965427556203E14,
        "n" : 2,
        "max" : 1.391851269E9,
        "min" : 1.365035124E9,
        "sum" : 2.7626274886666665E9,
        "standardDeviation" : 1.4300228765849179E7
      }, {
        "mean" : 1.404426718E9,
        "variance" : 5.366987678333826E15,
        "n" : 3,
        "max" : 1.488939936E9,
        "min" : 1.358988181E9,
        "sum" : 4.213280154E9,
        "standardDeviation" : 7.325972753384922E7
      } ],
      "5" : [ {
        "mean" : 1.370688402E9,
        "variance" : 1.3718481699666898E14,
        "n" : 2,
        "max" : 1.384165235E9,
        "min" : 1.362967109E9,
        "sum" : 2.741376804E9,
        "standardDeviation" : 1.1712592240689889E7
      }, {
        "mean" : 1.3923270603333333E9,
        "variance" : 2.0419479906489422E15,
        "n" : 3,
        "max" : 1.4438202E9,
        "min" : 1.359280462E9,
        "sum" : 4.176981181E9,
        "standardDeviation" : 4.5187918635946736E7
      } ],
      "6" : [ {
        "mean" : 1.3592844556666667E9,
        "variance" : 7.545118603216133E13,
        "n" : 2,
        "max" : 1.365089691E9,
        "min" : 1.349298363E9,
        "sum" : 2.7185689113333335E9,
        "standardDeviation" : 8686264.21611508
      }, {
        "mean" : 1.444144403E9,
        "variance" : 2.053113049259794E16,
        "n" : 3,
        "max" : 1.60959725E9,
        "min" : 1.361034499E9,
        "sum" : 4.332433209E9,
        "standardDeviation" : 1.4328688178824306E8
      } ],
      "7" : [ {
        "mean" : 1.3889242363333333E9,
        "variance" : 4.749483542554723E14,
        "n" : 2,
        "max" : 1.411228481E9,
        "min" : 1.36768059E9,
        "sum" : 2.7778484726666665E9,
        "standardDeviation" : 2.1793309850857265E7
      }, {
        "mean" : 1.4221360616666667E9,
        "variance" : 7.838622522639886E15,
        "n" : 3,
        "max" : 1.524059243E9,
        "min" : 1.364291786E9,
        "sum" : 4.266408185E9,
        "standardDeviation" : 8.853599563251032E7
      } ],
      "8" : [ {
        "mean" : 1.3589180813333333E9,
        "variance" : 9.748506213309033E13,
        "n" : 2,
        "max" : 1.369424801E9,
        "min" : 1.349831747E9,
        "sum" : 2.7178361626666665E9,
        "standardDeviation" : 9873452.391797427
      }, {
        "mean" : 1.4028004823333333E9,
        "variance" : 7.081769655093729E15,
        "n" : 3,
        "max" : 1.499901719E9,
        "min" : 1.351043303E9,
        "sum" : 4.208401447E9,
        "standardDeviation" : 8.415325100727677E7
      } ],
      "9" : [ {
        "mean" : 1.383379677E9,
        "variance" : 1.78071025921717E14,
        "n" : 2,
        "max" : 1.397254036E9,
        "min" : 1.37063753E9,
        "sum" : 2.766759354E9,
        "standardDeviation" : 1.3344325607602544E7
      }, {
        "mean" : 1.3884801416666667E9,
        "variance" : 3.438934017395454E14,
        "n" : 3,
        "max" : 1.407283933E9,
        "min" : 1.370206579E9,
        "sum" : 4.165440425E9,
        "standardDeviation" : 1.8544363071821727E7
      } ],
      "10" : [ {
        "mean" : 1.375737045E9,
        "variance" : 1.3840928274499E13,
        "n" : 2,
        "max" : 1.378616418E9,
        "min" : 1.37153641E9,
        "sum" : 2.75147409E9,
        "standardDeviation" : 3720339.8063213257
      }, {
        "mean" : 1.4030806043333333E9,
        "variance" : 1.8738795232832E15,
        "n" : 3,
        "max" : 1.453023133E9,
        "min" : 1.376324012E9,
        "sum" : 4.209241813E9,
        "standardDeviation" : 4.328833010504332E7
      } ],
      "11" : [ {
        "mean" : 1.3696767173333333E9,
        "variance" : 2.651318472599123E14,
        "n" : 2,
        "max" : 1.386283129E9,
        "min" : 1.353737926E9,
        "sum" : 2.7393534346666665E9,
        "standardDeviation" : 1.6282869748908278E7
      }, {
        "mean" : 1.4060048243333333E9,
        "variance" : 3.1221422977311075E15,
        "n" : 3,
        "max" : 1.468800166E9,
        "min" : 1.361773561E9,
        "sum" : 4.218014473E9,
        "standardDeviation" : 5.587613352524589E7
      } ],
      "12" : [ {
        "mean" : 1.3830384063333333E9,
        "variance" : 2.2081526701796336E13,
        "n" : 2,
        "max" : 1.38764147E9,
        "min" : 1.378248827E9,
        "sum" : 2.7660768126666665E9,
        "standardDeviation" : 4699098.498839574
      }, {
        "mean" : 1.3877035016666667E9,
        "variance" : 1.0049488784351694E15,
        "n" : 3,
        "max" : 1.424189905E9,
        "min" : 1.366909681E9,
        "sum" : 4.163110505E9,
        "standardDeviation" : 3.170092866833982E7
      } ],
      "13" : [ {
        "mean" : 1.3572466803333333E9,
        "variance" : 1.953941630067433E13,
        "n" : 2,
        "max" : 1.361325788E9,
        "min" : 1.352550046E9,
        "sum" : 2.7144933606666665E9,
        "standardDeviation" : 4420341.197314335
      }, {
        "mean" : 1.4507194336666667E9,
        "variance" : 3.0623418250089772E16,
        "n" : 3,
        "max" : 1.652786779E9,
        "min" : 1.349589779E9,
        "sum" : 4.352158301E9,
        "standardDeviation" : 1.7499548065618658E8
      } ],
      "14" : [ {
        "mean" : 1.366908288E9,
        "variance" : 1.47563767701052E14,
        "n" : 2,
        "max" : 1.377917686E9,
        "min" : 1.353876396E9,
        "sum" : 2.733816576E9,
        "standardDeviation" : 1.2147582792516872E7
      }, {
        "mean" : 1.4496384586666667E9,
        "variance" : 1.9113834311025972E16,
        "n" : 3,
        "max" : 1.608873928E9,
        "min" : 1.360177793E9,
        "sum" : 4.348915376E9,
        "standardDeviation" : 1.3825279133177012E8
      } ],
      "15" : [ {
        "mean" : 1.3577093833333333E9,
        "variance" : 3.3338061175572332E13,
        "n" : 2,
        "max" : 1.363017388E9,
        "min" : 1.351561547E9,
        "sum" : 2.7154187666666665E9,
        "standardDeviation" : 5773912.120527323
      }, {
        "mean" : 1.39734921E9,
        "variance" : 4.210592658258688E15,
        "n" : 3,
        "max" : 1.472238538E9,
        "min" : 1.357834746E9,
        "sum" : 4.19204763E9,
        "standardDeviation" : 6.488907965334913E7
      } ],
      "16" : [ {
        "mean" : 1.377645977E9,
        "variance" : 4.2349567432839995E12,
        "n" : 2,
        "max" : 1.380022155E9,
        "min" : 1.376440849E9,
        "sum" : 2.755291954E9,
        "standardDeviation" : 2057901.0528409765
      }, {
        "mean" : 1.4319248616666667E9,
        "variance" : 1.735835892511939E16,
        "n" : 3,
        "max" : 1.583988543E9,
        "min" : 1.351913506E9,
        "sum" : 4.295774585E9,
        "standardDeviation" : 1.3175112494821207E8
      } ],
      "17" : [ {
        "mean" : 1.3701356543333333E9,
        "variance" : 5.4886122302756336E13,
        "n" : 2,
        "max" : 1.378157863E9,
        "min" : 1.36355176E9,
        "sum" : 2.7402713086666665E9,
        "standardDeviation" : 7408516.876052611
      }, {
        "mean" : 1.4330424346666667E9,
        "variance" : 1.5696209800854236E16,
        "n" : 3,
        "max" : 1.577475417E9,
        "min" : 1.353716442E9,
        "sum" : 4.299127304E9,
        "standardDeviation" : 1.2528451540734887E8
      } ],
      "18" : [ {
        "mean" : 1.3663845683333333E9,
        "variance" : 1.363864149086533E13,
        "n" : 2,
        "max" : 1.370626209E9,
        "min" : 1.363882953E9,
        "sum" : 2.7327691366666665E9,
        "standardDeviation" : 3693053.139458642
      }, {
        "mean" : 1.4204522956666667E9,
        "variance" : 1.0563291490335802E16,
        "n" : 3,
        "max" : 1.539023664E9,
        "min" : 1.356817537E9,
        "sum" : 4.261356887E9,
        "standardDeviation" : 1.0277787451750402E8
      } ],
      "19" : [ {
        "mean" : 1.3888870733333333E9,
        "variance" : 4.2224244625943335E12,
        "n" : 2,
        "max" : 1.391242945E9,
        "min" : 1.387464544E9,
        "sum" : 2.7777741466666665E9,
        "standardDeviation" : 2054853.8786479037
      }, {
        "mean" : 1.447390322E9,
        "variance" : 1.7069258289360486E16,
        "n" : 3,
        "max" : 1.598213776E9,
        "min" : 1.369067825E9,
        "sum" : 4.342170966E9,
        "standardDeviation" : 1.3064937156129181E8
      } ],
      "20" : [ {
        "mean" : 1.3843788106666667E9,
        "variance" : 2.316338914669803E14,
        "n" : 2,
        "max" : 1.399645505E9,
        "min" : 1.369206901E9,
        "sum" : 2.7687576213333335E9,
        "standardDeviation" : 1.5219523365302224E7
      }, {
        "mean" : 1.4250508556666667E9,
        "variance" : 8.659320725916355E15,
        "n" : 3,
        "max" : 1.531883448E9,
        "min" : 1.36166367E9,
        "sum" : 4.275152567E9,
        "standardDeviation" : 9.305547123042446E7
      } ],
      "21" : [ {
        "mean" : 1.3794560893333333E9,
        "variance" : 1.6430291820655434E14,
        "n" : 2,
        "max" : 1.391981601E9,
        "min" : 1.366364235E9,
        "sum" : 2.7589121786666665E9,
        "standardDeviation" : 1.2818069987582153E7
      }, {
        "mean" : 1.412930391E9,
        "variance" : 1.287804695791129E15,
        "n" : 3,
        "max" : 1.451194838E9,
        "min" : 1.380025776E9,
        "sum" : 4.238791173E9,
        "standardDeviation" : 3.588599581718653E7
      } ],
      "22" : [ {
        "mean" : 1.370146905E9,
        "variance" : 3.2823206516689E13,
        "n" : 2,
        "max" : 1.373621572E9,
        "min" : 1.363534305E9,
        "sum" : 2.74029381E9,
        "standardDeviation" : 5729154.083866919
      }, {
        "mean" : 1.4828412386666667E9,
        "variance" : 4.5326252984614216E16,
        "n" : 3,
        "max" : 1.728530469E9,
        "min" : 1.352658057E9,
        "sum" : 4.448523716E9,
        "standardDeviation" : 2.1289963124583897E8
      } ],
      "23" : [ {
        "mean" : 1.381619529E9,
        "variance" : 2.6638353501015097E14,
        "n" : 2,
        "max" : 1.39732575E9,
        "min" : 1.364745914E9,
        "sum" : 2.763239058E9,
        "standardDeviation" : 1.6321260215135073E7
      }, {
        "mean" : 1.3986685936666667E9,
        "variance" : 1.4130077331375442E15,
        "n" : 3,
        "max" : 1.441880036E9,
        "min" : 1.373515173E9,
        "sum" : 4.196005781E9,
        "standardDeviation" : 3.7589995120211765E7
      } ],
      "24" : [ {
        "mean" : 1.3855498946666667E9,
        "variance" : 1.1798375737034233E14,
        "n" : 2,
        "max" : 1.397865011E9,
        "min" : 1.377333893E9,
        "sum" : 2.7710997893333335E9,
        "standardDeviation" : 1.0862032837841282E7
      }, {
        "mean" : 1.4299529263333333E9,
        "variance" : 9.34857549239422E15,
        "n" : 3,
        "max" : 1.541591214E9,
        "min" : 1.37301797E9,
        "sum" : 4.289858779E9,
        "standardDeviation" : 9.6688031795017E7
      } ],
      "25" : [ {
        "mean" : 1.3784527173333333E9,
        "variance" : 5.7972573201114336E13,
        "n" : 2,
        "max" : 1.384907325E9,
        "min" : 1.370055684E9,
        "sum" : 2.7569054346666665E9,
        "standardDeviation" : 7613972.235378478
      }, {
        "mean" : 1.4075417613333333E9,
        "variance" : 5.779569640621442E15,
        "n" : 3,
        "max" : 1.495324103E9,
        "min" : 1.3631358E9,
        "sum" : 4.222625284E9,
        "standardDeviation" : 7.602348085046779E7
      } ],
      "26" : [ {
        "mean" : 1.3082541105E9,
        "variance" : 6.930390488927299E13,
        "n" : 3,
        "max" : 1.319511974E9,
        "min" : 1.299910184E9,
        "sum" : 3.9247623315E9,
        "standardDeviation" : 8324896.6894054
      }, {
        "mean" : 1.319684459E9,
        "variance" : 1.9293987467042004E13,
        "n" : 2,
        "max" : 1.32279042E9,
        "min" : 1.316578498E9,
        "sum" : 2.639368918E9,
        "standardDeviation" : 4392492.170401901
      } ],
      "27" : [ {
        "mean" : 1.3788373396666667E9,
        "variance" : 8.303862147012133E13,
        "n" : 2,
        "max" : 1.389333337E9,
        "min" : 1.372945795E9,
        "sum" : 2.7576746793333335E9,
        "standardDeviation" : 9112552.961169627
      }, {
        "mean" : 1.4065189106666667E9,
        "variance" : 5.146039769063055E15,
        "n" : 3,
        "max" : 1.489325659E9,
        "min" : 1.363293013E9,
        "sum" : 4.219556732E9,
        "standardDeviation" : 7.173590292916828E7
      } ],
      "28" : [ {
        "mean" : 1.370905144E9,
        "variance" : 5.067419286312401E13,
        "n" : 2,
        "max" : 1.378847622E9,
        "min" : 1.365100336E9,
        "sum" : 2.741810288E9,
        "standardDeviation" : 7118580.818051025
      }, {
        "mean" : 1.3812687763333333E9,
        "variance" : 8.785748750767344E14,
        "n" : 3,
        "max" : 1.415453883E9,
        "min" : 1.362724074E9,
        "sum" : 4.143806329E9,
        "standardDeviation" : 2.9640763739767812E7
      } ],
      "29" : [ {
        "mean" : 1.3778860726666667E9,
        "variance" : 3.5311461829381336E13,
        "n" : 2,
        "max" : 1.38411277E9,
        "min" : 1.372276198E9,
        "sum" : 2.7557721453333335E9,
        "standardDeviation" : 5942344.809027943
      }, {
        "mean" : 1.4450644393333333E9,
        "variance" : 1.7525767532352914E16,
        "n" : 3,
        "max" : 1.597897206E9,
        "min" : 1.365932065E9,
        "sum" : 4.335193318E9,
        "standardDeviation" : 1.3238492184668507E8
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 1.19262863525E9,
        "variance" : 1.905001835669365E14,
        "n" : 3,
        "max" : 1.212990335E9,
        "min" : 1.182334377E9,
        "sum" : 3.57788590575E9,
        "standardDeviation" : 1.380218039176914E7
      }, {
        "mean" : 1.1741919745E9,
        "variance" : 9.875047328550448E13,
        "n" : 2,
        "max" : 1.181218726E9,
        "min" : 1.167165223E9,
        "sum" : 2.348383949E9,
        "standardDeviation" : 9937327.270725489
      } ],
      "1" : [ {
        "mean" : 1.184868466E9,
        "variance" : 4.546420516186067E13,
        "n" : 3,
        "max" : 1.190623762E9,
        "min" : 1.176717745E9,
        "sum" : 3.554605398E9,
        "standardDeviation" : 6742714.969643954
      }, {
        "mean" : 1.174432557E9,
        "variance" : 3.600162144482E12,
        "n" : 2,
        "max" : 1.175774228E9,
        "min" : 1.173090886E9,
        "sum" : 2.348865114E9,
        "standardDeviation" : 1897409.3244426728
      } ],
      "2" : [ {
        "mean" : 1.1710017525E9,
        "variance" : 1.401991765533845E14,
        "n" : 3,
        "max" : 1.182128203E9,
        "min" : 1.155830312E9,
        "sum" : 3.5130052575E9,
        "standardDeviation" : 1.1840573320299339E7
      }, {
        "mean" : 1.1595007225E9,
        "variance" : 8.662655868961252E13,
        "n" : 2,
        "max" : 1.166082005E9,
        "min" : 1.15291944E9,
        "sum" : 2.319001445E9,
        "standardDeviation" : 9307338.96930871
      } ],
      "3" : [ {
        "mean" : 1.169846517E9,
        "variance" : 9.291037443040798E13,
        "n" : 3,
        "max" : 1.181618181E9,
        "min" : 1.158352743E9,
        "sum" : 3.509539551E9,
        "standardDeviation" : 9639002.77157383
      }, {
        "mean" : 1.1631807515E9,
        "variance" : 6.762883379054449E13,
        "n" : 2,
        "max" : 1.168995768E9,
        "min" : 1.157365735E9,
        "sum" : 2.326361503E9,
        "standardDeviation" : 8223675.199723327
      } ],
      "4" : [ {
        "mean" : 1.195146409E9,
        "variance" : 1.3927280194640202E14,
        "n" : 3,
        "max" : 1.20524211E9,
        "min" : 1.182384259E9,
        "sum" : 3.585439227E9,
        "standardDeviation" : 1.1801389831134383E7
      }, {
        "mean" : 1.1681540275E9,
        "variance" : 1.2456013764012502E13,
        "n" : 2,
        "max" : 1.170649625E9,
        "min" : 1.16565843E9,
        "sum" : 2.336308055E9,
        "standardDeviation" : 3529307.83072439
      } ],
      "5" : [ {
        "mean" : 1.1590697838E9,
        "variance" : 5.113178101849612E13,
        "n" : 4,
        "max" : 1.166404818E9,
        "min" : 1.147811525E9,
        "sum" : 4.6362791352E9,
        "standardDeviation" : 7150648.992818492
      }, {
        "mean" : 1.16292252E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 1.16292252E9,
        "min" : 1.16292252E9,
        "sum" : 1.16292252E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 1.17124864575E9,
        "variance" : 4.0673525488791336E13,
        "n" : 3,
        "max" : 1.180509044E9,
        "min" : 1.166478395E9,
        "sum" : 3.51374593725E9,
        "standardDeviation" : 6377579.908459896
      }, {
        "mean" : 1.174245335E9,
        "variance" : 1.3224123920897998E13,
        "n" : 2,
        "max" : 1.176816728E9,
        "min" : 1.171673942E9,
        "sum" : 2.34849067E9,
        "standardDeviation" : 3636498.85479124
      } ],
      "7" : [ {
        "mean" : 1.185916771E9,
        "variance" : 3.62378013708942E14,
        "n" : 3,
        "max" : 1.212883439E9,
        "min" : 1.168233772E9,
        "sum" : 3.557750313E9,
        "standardDeviation" : 1.903622897816009E7
      }, {
        "mean" : 1.172052452E9,
        "variance" : 2.3480615194579995E12,
        "n" : 2,
        "max" : 1.173135979E9,
        "min" : 1.170968925E9,
        "sum" : 2.344104904E9,
        "standardDeviation" : 1532338.5785974325
      } ],
      "8" : [ {
        "mean" : 1.180225157E9,
        "variance" : 6.216453383102066E13,
        "n" : 3,
        "max" : 1.187821262E9,
        "min" : 1.171981406E9,
        "sum" : 3.540675471E9,
        "standardDeviation" : 7884448.860321225
      }, {
        "mean" : 1.186108589E9,
        "variance" : 2.5726351843458004E13,
        "n" : 2,
        "max" : 1.189695116E9,
        "min" : 1.182522062E9,
        "sum" : 2.372217178E9,
        "standardDeviation" : 5072115.12521729
      } ],
      "9" : [ {
        "mean" : 1.18494301525E9,
        "variance" : 1.3603240747876978E14,
        "n" : 3,
        "max" : 1.197548896E9,
        "min" : 1.17389481E9,
        "sum" : 3.55482904575E9,
        "standardDeviation" : 1.1663293166116068E7
      }, {
        "mean" : 1.1755117535E9,
        "variance" : 7.93700589112605E13,
        "n" : 2,
        "max" : 1.181811359E9,
        "min" : 1.169212148E9,
        "sum" : 2.351023507E9,
        "standardDeviation" : 8908987.535700142
      } ],
      "10" : [ {
        "mean" : 1.17468510225E9,
        "variance" : 6.688482551462228E13,
        "n" : 3,
        "max" : 1.186452409E9,
        "min" : 1.167493778E9,
        "sum" : 3.52405530675E9,
        "standardDeviation" : 8178314.344326848
      }, {
        "mean" : 1.1908068095E9,
        "variance" : 3.0982457595950444E14,
        "n" : 2,
        "max" : 1.203253186E9,
        "min" : 1.178360433E9,
        "sum" : 2.381613619E9,
        "standardDeviation" : 1.7601834448701773E7
      } ],
      "11" : [ {
        "mean" : 1.1640943145E9,
        "variance" : 6.011689589004925E13,
        "n" : 3,
        "max" : 1.173177747E9,
        "min" : 1.156218208E9,
        "sum" : 3.4922829435E9,
        "standardDeviation" : 7753508.618041851
      }, {
        "mean" : 1.1726948955E9,
        "variance" : 5.2881607843002444E14,
        "n" : 2,
        "max" : 1.188955524E9,
        "min" : 1.156434267E9,
        "sum" : 2.345389791E9,
        "standardDeviation" : 2.2996001357410476E7
      } ],
      "12" : [ {
        "mean" : 1.19931663775E9,
        "variance" : 9.24796941010349E13,
        "n" : 3,
        "max" : 1.209535054E9,
        "min" : 1.186453158E9,
        "sum" : 3.59794991325E9,
        "standardDeviation" : 9616636.31947444
      }, {
        "mean" : 1.190449859E9,
        "variance" : 2.3730414314561996E13,
        "n" : 2,
        "max" : 1.19389445E9,
        "min" : 1.187005268E9,
        "sum" : 2.380899718E9,
        "standardDeviation" : 4871387.309028301
      } ],
      "13" : [ {
        "mean" : 1.1948262485E9,
        "variance" : 1.69426529048603E14,
        "n" : 3,
        "max" : 1.213912149E9,
        "min" : 1.184730314E9,
        "sum" : 3.5844787455E9,
        "standardDeviation" : 1.301639462557136E7
      }, {
        "mean" : 1.1833945945E9,
        "variance" : 1.35238742775125E13,
        "n" : 2,
        "max" : 1.185994967E9,
        "min" : 1.180794222E9,
        "sum" : 2.366789189E9,
        "standardDeviation" : 3677482.056722031
      } ],
      "14" : [ {
        "mean" : 1.1926044495E9,
        "variance" : 1.893054906875475E14,
        "n" : 3,
        "max" : 1.20795394E9,
        "min" : 1.176534494E9,
        "sum" : 3.5778133485E9,
        "standardDeviation" : 1.3758833187721534E7
      }, {
        "mean" : 1.188427786E9,
        "variance" : 3.08409424581122E14,
        "n" : 2,
        "max" : 1.200845705E9,
        "min" : 1.176009867E9,
        "sum" : 2.376855572E9,
        "standardDeviation" : 1.7561589466250543E7
      } ],
      "15" : [ {
        "mean" : 1.2040528045E9,
        "variance" : 1.5537862426683353E14,
        "n" : 3,
        "max" : 1.215536463E9,
        "min" : 1.190504953E9,
        "sum" : 3.6121584135E9,
        "standardDeviation" : 1.2465096239774225E7
      }, {
        "mean" : 1.192140077E9,
        "variance" : 2.0707427420480002E12,
        "n" : 2,
        "max" : 1.193157609E9,
        "min" : 1.191122545E9,
        "sum" : 2.384280154E9,
        "standardDeviation" : 1439007.5545486202
      } ],
      "16" : [ {
        "mean" : 1.186867565E9,
        "variance" : 3.3353270437470556E14,
        "n" : 3,
        "max" : 1.206762363E9,
        "min" : 1.166468299E9,
        "sum" : 3.560602695E9,
        "standardDeviation" : 1.8262877768158708E7
      }, {
        "mean" : 1.1815492715E9,
        "variance" : 4.27747844943005E13,
        "n" : 2,
        "max" : 1.186173922E9,
        "min" : 1.176924621E9,
        "sum" : 2.363098543E9,
        "standardDeviation" : 6540243.458335515
      } ],
      "17" : [ {
        "mean" : 1.1805363255E9,
        "variance" : 8.49761644860194E13,
        "n" : 3,
        "max" : 1.188200924E9,
        "min" : 1.167495528E9,
        "sum" : 3.5416089765E9,
        "standardDeviation" : 9218251.704418762
      }, {
        "mean" : 1.1769960255E9,
        "variance" : 1.35217108541205E13,
        "n" : 2,
        "max" : 1.17959619E9,
        "min" : 1.174395861E9,
        "sum" : 2.353992051E9,
        "standardDeviation" : 3677187.9003010574
      } ],
      "18" : [ {
        "mean" : 1.167612925E9,
        "variance" : 2.545927202418467E13,
        "n" : 3,
        "max" : 1.174452932E9,
        "min" : 1.162512625E9,
        "sum" : 3.502838775E9,
        "standardDeviation" : 5045718.187154795
      }, {
        "mean" : 1.163089081E9,
        "variance" : 1.54973032992E13,
        "n" : 2,
        "max" : 1.165872721E9,
        "min" : 1.160305441E9,
        "sum" : 2.326178162E9,
        "standardDeviation" : 3936661.4407642423
      } ],
      "19" : [ {
        "mean" : 1.1701830545E9,
        "variance" : 8.373246170335083E13,
        "n" : 3,
        "max" : 1.179494787E9,
        "min" : 1.160720151E9,
        "sum" : 3.5105491635E9,
        "standardDeviation" : 9150544.339182824
      }, {
        "mean" : 1.155444879E9,
        "variance" : 4.6866360482E12,
        "n" : 2,
        "max" : 1.156975669E9,
        "min" : 1.153914089E9,
        "sum" : 2.310889758E9,
        "standardDeviation" : 2164863.97914511
      } ],
      "20" : [ {
        "mean" : 1.1790688335E9,
        "variance" : 5.768279671799493E13,
        "n" : 3,
        "max" : 1.189545264E9,
        "min" : 1.171366025E9,
        "sum" : 3.5372065005E9,
        "standardDeviation" : 7594919.138344722
      }, {
        "mean" : 1.170386878E9,
        "variance" : 3.49541347694792E14,
        "n" : 2,
        "max" : 1.183606964E9,
        "min" : 1.157166792E9,
        "sum" : 2.340773756E9,
        "standardDeviation" : 1.869602491693868E7
      } ],
      "21" : [ {
        "mean" : 1.16759364975E9,
        "variance" : 7.877697706965758E13,
        "n" : 3,
        "max" : 1.175407502E9,
        "min" : 1.155096703E9,
        "sum" : 3.50278094925E9,
        "standardDeviation" : 8875639.530177956
      }, {
        "mean" : 1.17361711E9,
        "variance" : 6.564613611232801E13,
        "n" : 2,
        "max" : 1.179346252E9,
        "min" : 1.167887968E9,
        "sum" : 2.34723422E9,
        "standardDeviation" : 8102230.317161319
      } ],
      "22" : [ {
        "mean" : 1.1682921225E9,
        "variance" : 5.071222599992599E13,
        "n" : 3,
        "max" : 1.178409097E9,
        "min" : 1.161724847E9,
        "sum" : 3.5048763675E9,
        "standardDeviation" : 7121251.7158099385
      }, {
        "mean" : 1.1704109415E9,
        "variance" : 1.6485018123420447E14,
        "n" : 2,
        "max" : 1.179489768E9,
        "min" : 1.161332115E9,
        "sum" : 2.340821883E9,
        "standardDeviation" : 1.2839399566732258E7
      } ],
      "23" : [ {
        "mean" : 1.184056421E9,
        "variance" : 9.779959860858831E13,
        "n" : 3,
        "max" : 1.193406868E9,
        "min" : 1.170959746E9,
        "sum" : 3.552169263E9,
        "standardDeviation" : 9889367.957993489
      }, {
        "mean" : 1.168327691E9,
        "variance" : 6.090525638419999E13,
        "n" : 2,
        "max" : 1.173846081E9,
        "min" : 1.162809301E9,
        "sum" : 2.336655382E9,
        "standardDeviation" : 7804181.980464064
      } ],
      "24" : [ {
        "mean" : 1.19285100475E9,
        "variance" : 1.67179268192473E14,
        "n" : 3,
        "max" : 1.207857569E9,
        "min" : 1.178606708E9,
        "sum" : 3.57855301425E9,
        "standardDeviation" : 1.2929782217519095E7
      }, {
        "mean" : 1.178920867E9,
        "variance" : 1.3088119588992E13,
        "n" : 2,
        "max" : 1.181479003E9,
        "min" : 1.176362731E9,
        "sum" : 2.357841734E9,
        "standardDeviation" : 3617750.62559486
      } ],
      "25" : [ {
        "mean" : 1.1865710435E9,
        "variance" : 9.872244652727766E13,
        "n" : 3,
        "max" : 1.201042918E9,
        "min" : 1.178803406E9,
        "sum" : 3.5597131305E9,
        "standardDeviation" : 9935916.99478602
      }, {
        "mean" : 1.1697916965E9,
        "variance" : 8.414431807866048E13,
        "n" : 2,
        "max" : 1.176278002E9,
        "min" : 1.163305391E9,
        "sum" : 2.339583393E9,
        "standardDeviation" : 9173021.207795199
      } ],
      "26" : [ {
        "mean" : 1.184370885E9,
        "variance" : 8.8243496333526E13,
        "n" : 3,
        "max" : 1.195400002E9,
        "min" : 1.175661649E9,
        "sum" : 3.553112655E9,
        "standardDeviation" : 9393800.952411436
      }, {
        "mean" : 1.197296783E9,
        "variance" : 5.6258540999817794E14,
        "n" : 2,
        "max" : 1.214068566E9,
        "min" : 1.180525E9,
        "sum" : 2.394593566E9,
        "standardDeviation" : 2.3718882983778514E7
      } ],
      "27" : [ {
        "mean" : 1.2045433705E9,
        "variance" : 2.0518766769945384E14,
        "n" : 3,
        "max" : 1.221473561E9,
        "min" : 1.190030879E9,
        "sum" : 3.6136301115E9,
        "standardDeviation" : 1.432437320441819E7
      }, {
        "mean" : 1.202484166E9,
        "variance" : 7.523956669447999E12,
        "n" : 2,
        "max" : 1.204423748E9,
        "min" : 1.200544584E9,
        "sum" : 2.404968332E9,
        "standardDeviation" : 2742983.1697347322
      } ],
      "28" : [ {
        "mean" : 1.1763806885E9,
        "variance" : 9.698904346826544E13,
        "n" : 3,
        "max" : 1.190993792E9,
        "min" : 1.169471366E9,
        "sum" : 3.5291420655E9,
        "standardDeviation" : 9848301.55246403
      }, {
        "mean" : 1.167465569E9,
        "variance" : 3.2330995523911996E13,
        "n" : 2,
        "max" : 1.171486203E9,
        "min" : 1.163444935E9,
        "sum" : 2.334931138E9,
        "standardDeviation" : 5686035.132138386
      } ],
      "29" : [ {
        "mean" : 1.18033694125E9,
        "variance" : 1.0745548076750675E14,
        "n" : 3,
        "max" : 1.192419703E9,
        "min" : 1.170469004E9,
        "sum" : 3.54101082375E9,
        "standardDeviation" : 1.036607354630994E7
      }, {
        "mean" : 1.1621475755E9,
        "variance" : 5.06458421990645E13,
        "n" : 2,
        "max" : 1.167179764E9,
        "min" : 1.157115387E9,
        "sum" : 2.324295151E9,
        "standardDeviation" : 7116589.225117922
      } ]
    }
  },
  "children" : [ {
    "call" : "org.gradoop.io.reader.SimpleVertexReader#readVertex",
    "kiekerPattern" : "public org.gradoop.model.Vertex org.gradoop.io.reader.SimpleVertexReader.readVertex(java.lang.String)",
    "otherKiekerPattern" : "public org.gradoop.model.Vertex org.gradoop.io.reader.SimpleVertexReader.readVertex(java.lang.String)",
    "module" : "gradoop-core",
    "name" : "io.reader.SimpleVertexReader#readVertex",
    "key" : "org.gradoop.io.reader.SimpleVertexReader.readVertex_String",
    "otherKey" : "org.gradoop.io.reader.SimpleVertexReader.readVertex_String",
    "parent" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
    "color" : "#00FF00",
    "statistic" : {
      "meanOld" : 2.6611933713E8,
      "meanCurrent" : 2.2797216132574567E8,
      "deviationOld" : 3186913.0915533765,
      "deviationCurrent" : 2786436.4937878205,
      "vms" : 29,
      "callsOld" : 750,
      "calls" : 1050,
      "tvalue" : 48.99210091372728,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "FASTER",
    "inVMDeviationPredecessor" : 2355550.145911585,
    "inVMDeviation" : 9820891.116350517,
    "ess" : 1,
    "values" : [ 2.207335212877551E8, 2.2344408509591836E8, 2.2672855447692305E8, 2.2832111436122447E8, 2.2936056308571428E8, 2.2423150876938775E8, 2.2651162048367348E8, 2.2829214168163264E8, 2.270248526021978E8, 2.3110951837362638E8, 2.286680753387755E8, 2.2785177256923077E8, 2.2544284344489795E8, 2.266492753979592E8, 2.3053383095714286E8, 2.2666898575714287E8, 2.291555307265306E8, 2.3035404383061224E8, 2.263883256489796E8, 2.3245783719795915E8, 2.2856251925102037E8, 2.3198828897362638E8, 2.2983807216530612E8, 2.267063817346939E8, 2.3133584558367348E8, 2.3018746252653062E8, 2.115668785102041E8, 2.2597171146734697E8, 2.2478258966530612E8, 2.3189180599183673E8 ],
    "valuesPredecessor" : [ 2.6985652128E8, 2.6614778907333332E8, 2.6395345384666663E8, 2.6317331687666664E8, 2.6830437590666667E8, 2.6294545237333333E8, 2.6382947149E8, 2.6312089861666667E8, 2.685484156E8, 2.6713616108333337E8, 2.6768324857E8, 2.6363636302666664E8, 2.7103343575333333E8, 2.712004044966667E8, 2.709126924266666E8, 2.7067628961333334E8, 2.6646899248666665E8, 2.6635120629666668E8, 2.6333144920666668E8, 2.6128916996E8, 2.6510162562666667E8, 2.6263154919666663E8, 2.6280666094666663E8, 2.6468908202333337E8, 2.6469408864333332E8, 2.6471794131333336E8, 2.692803383233334E8, 2.728027383533333E8, 2.6401653613666666E8, 2.6324044535333332E8 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 2.195838847857143E8,
          "variance" : 4.928628032598643E15,
          "n" : 9,
          "max" : 3.35454992E8,
          "min" : 3379311.0,
          "sum" : 1.9762549630714288E9,
          "standardDeviation" : 7.020418814143956E7
        }, {
          "mean" : 2.1345759514285713E8,
          "variance" : 5.976440358935371E13,
          "n" : 14,
          "max" : 2.30044445E8,
          "min" : 2.06009825E8,
          "sum" : 2.988406332E9,
          "standardDeviation" : 7730744.051470965
        }, {
          "mean" : 2.300843291666667E8,
          "variance" : 1.0175301241415798E15,
          "n" : 12,
          "max" : 2.91636216E8,
          "min" : 2.05859954E8,
          "sum" : 2.76101195E9,
          "standardDeviation" : 3.1898748002728567E7
        } ],
        "1" : [ {
          "mean" : 2.2172279092857146E8,
          "variance" : 4.959345574356362E15,
          "n" : 9,
          "max" : 3.46043013E8,
          "min" : 4051906.0,
          "sum" : 1.9955051183571432E9,
          "standardDeviation" : 7.04226211835115E7
        }, {
          "mean" : 2.1970497985714284E8,
          "variance" : 1.0978573568786107E13,
          "n" : 14,
          "max" : 2.24130806E8,
          "min" : 2.14701857E8,
          "sum" : 3.0758697179999995E9,
          "standardDeviation" : 3313393.059808345
        }, {
          "mean" : 2.2909734516666666E8,
          "variance" : 1.72357306110057E14,
          "n" : 12,
          "max" : 2.60814938E8,
          "min" : 2.14911978E8,
          "sum" : 2.749168142E9,
          "standardDeviation" : 1.3128492149141004E7
        } ],
        "2" : [ {
          "mean" : 2.2780838846153846E8,
          "variance" : 6.125821832106795E15,
          "n" : 8,
          "max" : 3.72123016E8,
          "min" : 3628769.0,
          "sum" : 1.8224671076923077E9,
          "standardDeviation" : 7.8267629529115E7
        }, {
          "mean" : 2.2343161678571427E8,
          "variance" : 3.0315050144260355E13,
          "n" : 14,
          "max" : 2.33022633E8,
          "min" : 2.16765821E8,
          "sum" : 3.128042635E9,
          "standardDeviation" : 5505910.473687377
        }, {
          "mean" : 2.296145895384615E8,
          "variance" : 1.6997401545620462E14,
          "n" : 13,
          "max" : 2.52543076E8,
          "min" : 2.17000771E8,
          "sum" : 2.9849896639999995E9,
          "standardDeviation" : 1.3037408310557917E7
        } ],
        "3" : [ {
          "mean" : 2.2403811207142857E8,
          "variance" : 4.887512669844771E15,
          "n" : 9,
          "max" : 3.41782208E8,
          "min" : 4537678.0,
          "sum" : 2.016343008642857E9,
          "standardDeviation" : 6.991074788503389E7
        }, {
          "mean" : 2.2367716907142854E8,
          "variance" : 2.693942804252357E13,
          "n" : 14,
          "max" : 2.31189317E8,
          "min" : 2.17040951E8,
          "sum" : 3.1314803669999995E9,
          "standardDeviation" : 5190320.6107641915
        }, {
          "mean" : 2.3695130225000003E8,
          "variance" : 4.815636897286652E14,
          "n" : 12,
          "max" : 2.80294432E8,
          "min" : 2.1643543E8,
          "sum" : 2.8434156270000005E9,
          "standardDeviation" : 2.194455945624485E7
        } ],
        "4" : [ {
          "mean" : 2.22507477E8,
          "variance" : 4.657393061633323E15,
          "n" : 9,
          "max" : 3.27597603E8,
          "min" : 4335396.0,
          "sum" : 2.002567293E9,
          "standardDeviation" : 6.824509551340172E7
        }, {
          "mean" : 2.24006221E8,
          "variance" : 3.4763527157342312E13,
          "n" : 14,
          "max" : 2.33180023E8,
          "min" : 2.16217376E8,
          "sum" : 3.136087094E9,
          "standardDeviation" : 5896060.308150037
        }, {
          "mean" : 2.4074711008333334E8,
          "variance" : 5.6239499245795344E14,
          "n" : 12,
          "max" : 2.8539151E8,
          "min" : 2.16681375E8,
          "sum" : 2.888965321E9,
          "standardDeviation" : 2.371486859457487E7
        } ],
        "5" : [ {
          "mean" : 2.167462782142857E8,
          "variance" : 4.041187573203398E15,
          "n" : 9,
          "max" : 2.91348856E8,
          "min" : 5108096.0,
          "sum" : 1.9507165039285712E9,
          "standardDeviation" : 6.357033563859324E7
        }, {
          "mean" : 2.225634492857143E8,
          "variance" : 1.1691095129763746E13,
          "n" : 14,
          "max" : 2.27669734E8,
          "min" : 2.16540371E8,
          "sum" : 3.11588829E9,
          "standardDeviation" : 3419224.3462170986
        }, {
          "mean" : 2.3179150108333334E8,
          "variance" : 3.8673062369934356E14,
          "n" : 12,
          "max" : 2.70993537E8,
          "min" : 2.12188472E8,
          "sum" : 2.781498013E9,
          "standardDeviation" : 1.9665467797622908E7
        } ],
        "6" : [ {
          "mean" : 2.212572352142857E8,
          "variance" : 4.798757286568474E15,
          "n" : 9,
          "max" : 3.35900692E8,
          "min" : 3733703.0,
          "sum" : 1.9913151169285712E9,
          "standardDeviation" : 6.927306321051838E7
        }, {
          "mean" : 2.2046231071428573E8,
          "variance" : 1.485769740076327E13,
          "n" : 14,
          "max" : 2.25376862E8,
          "min" : 2.14535718E8,
          "sum" : 3.08647235E9,
          "standardDeviation" : 3854568.3806054434
        }, {
          "mean" : 2.375099375E8,
          "variance" : 1.565375439638772E15,
          "n" : 12,
          "max" : 3.56749561E8,
          "min" : 2.14836479E8,
          "sum" : 2.85011925E9,
          "standardDeviation" : 3.956482578805032E7
        } ],
        "7" : [ {
          "mean" : 2.2348679342857146E8,
          "variance" : 4.954112131537385E15,
          "n" : 9,
          "max" : 3.41690061E8,
          "min" : 3434723.0,
          "sum" : 2.0113811408571432E9,
          "standardDeviation" : 7.038545397692186E7
        }, {
          "mean" : 2.2335633628571424E8,
          "variance" : 3.700859567971208E13,
          "n" : 14,
          "max" : 2.3600371E8,
          "min" : 2.16296274E8,
          "sum" : 3.1269887079999995E9,
          "standardDeviation" : 6083469.04978665
        }, {
          "mean" : 2.376545925E8,
          "variance" : 6.818849261034188E14,
          "n" : 12,
          "max" : 2.94230128E8,
          "min" : 2.16997437E8,
          "sum" : 2.85185511E9,
          "standardDeviation" : 2.6112926417837944E7
        } ],
        "8" : [ {
          "mean" : 2.252779593846154E8,
          "variance" : 5.214729501115344E15,
          "n" : 8,
          "max" : 3.30398052E8,
          "min" : 5493374.0,
          "sum" : 1.8022236750769231E9,
          "standardDeviation" : 7.221308400224535E7
        }, {
          "mean" : 2.1990534606666666E8,
          "variance" : 3.295489039542222E13,
          "n" : 15,
          "max" : 2.28545469E8,
          "min" : 2.1379551E8,
          "sum" : 3.298580191E9,
          "standardDeviation" : 5740635.016740066
        }, {
          "mean" : 2.3708883125000003E8,
          "variance" : 6.473868317185816E14,
          "n" : 12,
          "max" : 2.83574669E8,
          "min" : 2.14606456E8,
          "sum" : 2.8450659750000005E9,
          "standardDeviation" : 2.544379750977793E7
        } ],
        "9" : [ {
          "mean" : 2.2467765338461536E8,
          "variance" : 5.541844650093779E15,
          "n" : 8,
          "max" : 3.54812713E8,
          "min" : 5428676.0,
          "sum" : 1.797421227076923E9,
          "standardDeviation" : 7.444356688185877E7
        }, {
          "mean" : 2.251278672666667E8,
          "variance" : 3.923403514724352E13,
          "n" : 15,
          "max" : 2.38445742E8,
          "min" : 2.16697723E8,
          "sum" : 3.3769180090000005E9,
          "standardDeviation" : 6263707.779521928
        }, {
          "mean" : 2.4287449225E8,
          "variance" : 1.1815153344787968E15,
          "n" : 12,
          "max" : 3.31232257E8,
          "min" : 2.15963826E8,
          "sum" : 2.914493907E9,
          "standardDeviation" : 3.437317754410838E7
        } ],
        "10" : [ {
          "mean" : 2.2127024142857143E8,
          "variance" : 4.631842729499862E15,
          "n" : 9,
          "max" : 3.29766359E8,
          "min" : 5465434.0,
          "sum" : 1.991432172857143E9,
          "standardDeviation" : 6.80576426972009E7
        }, {
          "mean" : 2.2267051571428567E8,
          "variance" : 1.776027933878654E13,
          "n" : 14,
          "max" : 2.30309093E8,
          "min" : 2.16917998E8,
          "sum" : 3.1173872199999995E9,
          "standardDeviation" : 4214294.643091124
        }, {
          "mean" : 2.4121360366666666E8,
          "variance" : 1.3033520866763672E15,
          "n" : 12,
          "max" : 3.49322439E8,
          "min" : 2.17263865E8,
          "sum" : 2.894563244E9,
          "standardDeviation" : 3.610196790586861E7
        } ],
        "11" : [ {
          "mean" : 2.261169386153846E8,
          "variance" : 5.4868877814271E15,
          "n" : 8,
          "max" : 3.44885336E8,
          "min" : 4136127.0,
          "sum" : 1.8089355089230769E9,
          "standardDeviation" : 7.407352955966862E7
        }, {
          "mean" : 2.236062504E8,
          "variance" : 2.269965403082084E13,
          "n" : 15,
          "max" : 2.32188627E8,
          "min" : 2.16410597E8,
          "sum" : 3.354093756E9,
          "standardDeviation" : 4764415.392345722
        }, {
          "mean" : 2.3431523124999997E8,
          "variance" : 2.759843828497087E14,
          "n" : 12,
          "max" : 2.6328279E8,
          "min" : 2.17502443E8,
          "sum" : 2.8117827749999995E9,
          "standardDeviation" : 1.6612777698196912E7
        } ],
        "12" : [ {
          "mean" : 2.202745602857143E8,
          "variance" : 4.563660951995615E15,
          "n" : 9,
          "max" : 3.21993416E8,
          "min" : 3429390.0,
          "sum" : 1.9824710425714288E9,
          "standardDeviation" : 6.755487363614571E7
        }, {
          "mean" : 2.2189869978571427E8,
          "variance" : 7.301967274942184E12,
          "n" : 14,
          "max" : 2.26350314E8,
          "min" : 2.17897609E8,
          "sum" : 3.106581797E9,
          "standardDeviation" : 2702215.2532583675
        }, {
          "mean" : 2.3345389008333334E8,
          "variance" : 5.801428086530814E14,
          "n" : 12,
          "max" : 3.01794128E8,
          "min" : 2.16516693E8,
          "sum" : 2.801446681E9,
          "standardDeviation" : 2.4086153878381692E7
        } ],
        "13" : [ {
          "mean" : 2.150833762142857E8,
          "variance" : 4.085340582147059E15,
          "n" : 9,
          "max" : 2.92824987E8,
          "min" : 3359573.0,
          "sum" : 1.9357503859285712E9,
          "standardDeviation" : 6.391666904765187E7
        }, {
          "mean" : 2.1877796242857143E8,
          "variance" : 4.458142776904256E12,
          "n" : 14,
          "max" : 2.22028844E8,
          "min" : 2.15147283E8,
          "sum" : 3.062891474E9,
          "standardDeviation" : 2111431.452096955
        }, {
          "mean" : 2.4450689825E8,
          "variance" : 2.403032731984673E15,
          "n" : 12,
          "max" : 3.84961048E8,
          "min" : 2.15637709E8,
          "sum" : 2.934082779E9,
          "standardDeviation" : 4.902073777478949E7
        } ],
        "14" : [ {
          "mean" : 2.2044286349999997E8,
          "variance" : 4.440600581404604E15,
          "n" : 9,
          "max" : 3.17725817E8,
          "min" : 5873388.0,
          "sum" : 1.9839857714999998E9,
          "standardDeviation" : 6.6637831457848355E7
        }, {
          "mean" : 2.2092115528571433E8,
          "variance" : 2.5494337944396996E13,
          "n" : 14,
          "max" : 2.31553243E8,
          "min" : 2.14868307E8,
          "sum" : 3.0928961740000005E9,
          "standardDeviation" : 5049191.811012629
        }, {
          "mean" : 2.4931684483333334E8,
          "variance" : 1.980621177960529E15,
          "n" : 12,
          "max" : 3.5955573E8,
          "min" : 2.16469584E8,
          "sum" : 2.991802138E9,
          "standardDeviation" : 4.450417034346926E7
        } ],
        "15" : [ {
          "mean" : 2.224474715E8,
          "variance" : 4.780657853612061E15,
          "n" : 9,
          "max" : 3.37126452E8,
          "min" : 4605067.0,
          "sum" : 2.0020272435E9,
          "standardDeviation" : 6.914230147754745E7
        }, {
          "mean" : 2.2006185714285713E8,
          "variance" : 6.586320523164596E12,
          "n" : 14,
          "max" : 2.26098627E8,
          "min" : 2.15800986E8,
          "sum" : 3.080866E9,
          "standardDeviation" : 2566382.7701971107
        }, {
          "mean" : 2.375434381666667E8,
          "variance" : 1.1168564922902185E15,
          "n" : 12,
          "max" : 3.16389025E8,
          "min" : 2.14997063E8,
          "sum" : 2.850521258E9,
          "standardDeviation" : 3.3419402931384314E7
        } ],
        "16" : [ {
          "mean" : 2.2098650671428573E8,
          "variance" : 4.626265568392409E15,
          "n" : 9,
          "max" : 3.30210021E8,
          "min" : 5134410.0,
          "sum" : 1.9888785604285717E9,
          "standardDeviation" : 6.801665655111554E7
        }, {
          "mean" : 2.2306053714285713E8,
          "variance" : 1.0559097376165645E13,
          "n" : 14,
          "max" : 2.27886771E8,
          "min" : 2.177035E8,
          "sum" : 3.12284752E9,
          "standardDeviation" : 3249476.477244549
        }, {
          "mean" : 2.4239312458333334E8,
          "variance" : 1.9674319140540115E15,
          "n" : 12,
          "max" : 3.59596301E8,
          "min" : 2.17505616E8,
          "sum" : 2.908717495E9,
          "standardDeviation" : 4.4355742740416504E7
        } ],
        "17" : [ {
          "mean" : 2.2003338278571427E8,
          "variance" : 4.275337241138298E15,
          "n" : 9,
          "max" : 3.0904326E8,
          "min" : 6098222.0,
          "sum" : 1.9803004450714283E9,
          "standardDeviation" : 6.5386063049692005E7
        }, {
          "mean" : 2.2116276042857143E8,
          "variance" : 1.6225208249838264E13,
          "n" : 14,
          "max" : 2.27391639E8,
          "min" : 2.1581987E8,
          "sum" : 3.096278646E9,
          "standardDeviation" : 4028052.662247387
        }, {
          "mean" : 2.488177035833333E8,
          "variance" : 2.9159535152195885E15,
          "n" : 12,
          "max" : 3.68142917E8,
          "min" : 2.12697091E8,
          "sum" : 2.985812443E9,
          "standardDeviation" : 5.399956958365121E7
        } ],
        "18" : [ {
          "mean" : 2.1620116185714287E8,
          "variance" : 4.1256667419970725E15,
          "n" : 9,
          "max" : 2.93706666E8,
          "min" : 4168924.0,
          "sum" : 1.9458104567142859E9,
          "standardDeviation" : 6.423135326300601E7
        }, {
          "mean" : 2.200394792142857E8,
          "variance" : 7.536135924212299E12,
          "n" : 14,
          "max" : 2.25264828E8,
          "min" : 2.15792898E8,
          "sum" : 3.080552709E9,
          "standardDeviation" : 2745202.3466790747
        }, {
          "mean" : 2.41435686E8,
          "variance" : 1.5911898373910095E15,
          "n" : 12,
          "max" : 3.4764472E8,
          "min" : 2.14568772E8,
          "sum" : 2.897228232E9,
          "standardDeviation" : 3.988972094902407E7
        } ],
        "19" : [ {
          "mean" : 2.245375562142857E8,
          "variance" : 5.016114874503281E15,
          "n" : 9,
          "max" : 3.4339311E8,
          "min" : 3968895.0,
          "sum" : 2.0208380059285712E9,
          "standardDeviation" : 7.08245358227167E7
        }, {
          "mean" : 2.271428961428571E8,
          "variance" : 4.252960933536969E13,
          "n" : 14,
          "max" : 2.36644556E8,
          "min" : 2.17273346E8,
          "sum" : 3.1800005459999995E9,
          "standardDeviation" : 6521472.9421634255
        }, {
          "mean" : 2.445988125E8,
          "variance" : 1.77607911334558E15,
          "n" : 12,
          "max" : 3.30664184E8,
          "min" : 2.12906841E8,
          "sum" : 2.93518575E9,
          "standardDeviation" : 4.214355363926469E7
        } ],
        "20" : [ {
          "mean" : 2.2227062064285713E8,
          "variance" : 4.805723602108878E15,
          "n" : 9,
          "max" : 3.38516147E8,
          "min" : 4788068.0,
          "sum" : 2.0004355857857141E9,
          "standardDeviation" : 6.932332653666353E7
        }, {
          "mean" : 2.2357037142857143E8,
          "variance" : 1.770369537712889E13,
          "n" : 14,
          "max" : 2.29531939E8,
          "min" : 2.15541356E8,
          "sum" : 3.1299852E9,
          "standardDeviation" : 4207575.950250796
        }, {
          "mean" : 2.3910561566666663E8,
          "variance" : 8.654744436596671E14,
          "n" : 12,
          "max" : 3.03951712E8,
          "min" : 2.13214762E8,
          "sum" : 2.8692673879999995E9,
          "standardDeviation" : 2.9418947018200144E7
        } ],
        "21" : [ {
          "mean" : 2.3186395438461536E8,
          "variance" : 2.9263838102222265E15,
          "n" : 8,
          "max" : 3.61700983E8,
          "min" : 9.9754955E7,
          "sum" : 1.854911635076923E9,
          "standardDeviation" : 5.4096060949224636E7
        }, {
          "mean" : 2.2490534578571427E8,
          "variance" : 3.3219918676893754E13,
          "n" : 14,
          "max" : 2.37366828E8,
          "min" : 2.18464464E8,
          "sum" : 3.148674841E9,
          "standardDeviation" : 5763672.325600559
        }, {
          "mean" : 2.3969258753846154E8,
          "variance" : 1.3297189667907438E15,
          "n" : 13,
          "max" : 3.56658491E8,
          "min" : 2.15594676E8,
          "sum" : 3.116003638E9,
          "standardDeviation" : 3.64653118290622E7
        } ],
        "22" : [ {
          "mean" : 2.2238385764285716E8,
          "variance" : 4.72882995856726E15,
          "n" : 9,
          "max" : 3.32653025E8,
          "min" : 5441272.0,
          "sum" : 2.0014547187857144E9,
          "standardDeviation" : 6.876648863048963E7
        }, {
          "mean" : 2.2171188278571427E8,
          "variance" : 1.1067404005904645E13,
          "n" : 14,
          "max" : 2.26675186E8,
          "min" : 2.16971122E8,
          "sum" : 3.103966359E9,
          "standardDeviation" : 3326770.8075406463
        }, {
          "mean" : 2.449092873333333E8,
          "variance" : 1.8715262106278302E15,
          "n" : 12,
          "max" : 3.42171036E8,
          "min" : 2.13341851E8,
          "sum" : 2.938911448E9,
          "standardDeviation" : 4.3261139728719935E7
        } ],
        "23" : [ {
          "mean" : 2.1799462785714287E8,
          "variance" : 4.1400062384847275E15,
          "n" : 9,
          "max" : 2.9695801E8,
          "min" : 5548648.0,
          "sum" : 1.9619516507142859E9,
          "standardDeviation" : 6.4342880247038424E7
        }, {
          "mean" : 2.2424196314285716E8,
          "variance" : 2.1114649921499055E13,
          "n" : 14,
          "max" : 2.31114299E8,
          "min" : 2.16852347E8,
          "sum" : 3.1393874840000005E9,
          "standardDeviation" : 4595067.999659968
        }, {
          "mean" : 2.3611535216666666E8,
          "variance" : 4.045458885866985E14,
          "n" : 12,
          "max" : 2.81314056E8,
          "min" : 2.18110924E8,
          "sum" : 2.833384226E9,
          "standardDeviation" : 2.0113326144292954E7
        } ],
        "24" : [ {
          "mean" : 2.2344240871428573E8,
          "variance" : 4.681468421981518E15,
          "n" : 9,
          "max" : 3.26689617E8,
          "min" : 3935443.0,
          "sum" : 2.0109816784285717E9,
          "standardDeviation" : 6.842125709150277E7
        }, {
          "mean" : 2.24870903E8,
          "variance" : 1.6116709857757709E13,
          "n" : 14,
          "max" : 2.33596732E8,
          "min" : 2.19354447E8,
          "sum" : 3.148192642E9,
          "standardDeviation" : 4014562.2249203846
        }, {
          "mean" : 2.4479835625E8,
          "variance" : 2.1640769666013788E15,
          "n" : 12,
          "max" : 3.6896398E8,
          "min" : 2.19341672E8,
          "sum" : 2.937580275E9,
          "standardDeviation" : 4.6519640654258914E7
        } ],
        "25" : [ {
          "mean" : 2.2069100871428567E8,
          "variance" : 4.681678847055974E15,
          "n" : 9,
          "max" : 3.28473838E8,
          "min" : 3387138.0,
          "sum" : 1.986219078428571E9,
          "standardDeviation" : 6.842279479132648E7
        }, {
          "mean" : 2.2292724621428573E8,
          "variance" : 7.830296644784645E12,
          "n" : 14,
          "max" : 2.26674823E8,
          "min" : 2.18937304E8,
          "sum" : 3.120981447E9,
          "standardDeviation" : 2798266.72152328
        }, {
          "mean" : 2.4578005525000003E8,
          "variance" : 1.5094748973534435E15,
          "n" : 12,
          "max" : 3.10224343E8,
          "min" : 2.18480977E8,
          "sum" : 2.9493606630000005E9,
          "standardDeviation" : 3.8851961306392804E7
        } ],
        "26" : [ {
          "mean" : 2.0740489242857143E8,
          "variance" : 3.944287681054155E15,
          "n" : 9,
          "max" : 2.9682013E8,
          "min" : 3755883.0,
          "sum" : 1.866644031857143E9,
          "standardDeviation" : 6.2803564238458276E7
        }, {
          "mean" : 2.0853577213333338E8,
          "variance" : 5.099904182274281E12,
          "n" : 15,
          "max" : 2.13495704E8,
          "min" : 2.04840556E8,
          "sum" : 3.128036582000001E9,
          "standardDeviation" : 2258296.7436265503
        }, {
          "mean" : 2.1910546672727272E8,
          "variance" : 3.312902461636486E14,
          "n" : 11,
          "max" : 2.60474842E8,
          "min" : 2.04935434E8,
          "sum" : 2.410160134E9,
          "standardDeviation" : 1.8201380336767007E7
        } ],
        "27" : [ {
          "mean" : 2.1862904292857143E8,
          "variance" : 4.069800565175505E15,
          "n" : 9,
          "max" : 2.95280065E8,
          "min" : 5994481.0,
          "sum" : 1.967661386357143E9,
          "standardDeviation" : 6.379498855847146E7
        }, {
          "mean" : 2.223459075E8,
          "variance" : 1.1715160706822883E13,
          "n" : 14,
          "max" : 2.27407824E8,
          "min" : 2.1683053E8,
          "sum" : 3.112842705E9,
          "standardDeviation" : 3422741.6944348696
        }, {
          "mean" : 2.357088175E8,
          "variance" : 6.110498153404568E14,
          "n" : 12,
          "max" : 2.88881195E8,
          "min" : 2.17009425E8,
          "sum" : 2.82850581E9,
          "standardDeviation" : 2.471942182455845E7
        } ],
        "28" : [ {
          "mean" : 2.2192208514285716E8,
          "variance" : 4.794584231062317E15,
          "n" : 9,
          "max" : 3.33968806E8,
          "min" : 3248291.0,
          "sum" : 1.9972987662857144E9,
          "standardDeviation" : 6.924293632611428E7
        }, {
          "mean" : 2.2276849292857143E8,
          "variance" : 1.040206418638331E13,
          "n" : 14,
          "max" : 2.27726712E8,
          "min" : 2.17874497E8,
          "sum" : 3.118758901E9,
          "standardDeviation" : 3225223.1219534734
        }, {
          "mean" : 2.292777475833333E8,
          "variance" : 1.9304662975243722E14,
          "n" : 12,
          "max" : 2.58459579E8,
          "min" : 2.16468879E8,
          "sum" : 2.751332971E9,
          "standardDeviation" : 1.3894122129607081E7
        } ],
        "29" : [ {
          "mean" : 2.2419822785714287E8,
          "variance" : 3.5325909884492475E15,
          "n" : 9,
          "max" : 3.36591368E8,
          "min" : 4.5101467E7,
          "sum" : 2.0177840507142859E9,
          "standardDeviation" : 5.943560371064845E7
        }, {
          "mean" : 2.2438071421428573E8,
          "variance" : 3.2007979317631254E13,
          "n" : 14,
          "max" : 2.333092E8,
          "min" : 2.17587586E8,
          "sum" : 3.141329999E9,
          "standardDeviation" : 5657559.484232689
        }, {
          "mean" : 2.4642493E8,
          "variance" : 2.2043075615038878E15,
          "n" : 12,
          "max" : 3.57313562E8,
          "min" : 2.13787033E8,
          "sum" : 2.95709916E9,
          "standardDeviation" : 4.695005390309885E7
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 2.71728559E8,
          "variance" : 1.0333055705882308E16,
          "n" : 7,
          "max" : 4.71644048E8,
          "min" : 3744036.0,
          "sum" : 1.902099913E9,
          "standardDeviation" : 1.0165163897292708E8
        }, {
          "mean" : 2.70268493E8,
          "variance" : 5.37051190727833E13,
          "n" : 12,
          "max" : 2.83074703E8,
          "min" : 2.61216679E8,
          "sum" : 3.243221916E9,
          "standardDeviation" : 7328377.656260852
        }, {
          "mean" : 2.6684853383333334E8,
          "variance" : 2.026737309146534E13,
          "n" : 6,
          "max" : 2.73044668E8,
          "min" : 2.62269479E8,
          "sum" : 1.601091203E9,
          "standardDeviation" : 4501929.929648544
        } ],
        "1" : [ {
          "mean" : 2.631072998333333E8,
          "variance" : 7.737464792416217E15,
          "n" : 7,
          "max" : 3.86746778E8,
          "min" : 4408639.0,
          "sum" : 1.8417510988333333E9,
          "standardDeviation" : 8.796286030147165E7
        }, {
          "mean" : 2.6809504233333334E8,
          "variance" : 2.4537485638339004E13,
          "n" : 12,
          "max" : 2.77884714E8,
          "min" : 2.60076933E8,
          "sum" : 3.217140508E9,
          "standardDeviation" : 4953532.6423007455
        }, {
          "mean" : 2.6580052E8,
          "variance" : 2.4785150107034453E13,
          "n" : 6,
          "max" : 2.72646071E8,
          "min" : 2.59179953E8,
          "sum" : 1.59480312E9,
          "standardDeviation" : 4978468.650803624
        } ],
        "2" : [ {
          "mean" : 2.6724442816666663E8,
          "variance" : 7.55482808284619E15,
          "n" : 7,
          "max" : 3.67575932E8,
          "min" : 5093339.0,
          "sum" : 1.8707109971666665E9,
          "standardDeviation" : 8.691851403956576E7
        }, {
          "mean" : 2.6326785875E8,
          "variance" : 2.692388418119059E13,
          "n" : 12,
          "max" : 2.71051846E8,
          "min" : 2.56496309E8,
          "sum" : 3.159214305E9,
          "standardDeviation" : 5188823.005382877
        }, {
          "mean" : 2.61485174E8,
          "variance" : 3.4828213107342848E13,
          "n" : 6,
          "max" : 2.71274338E8,
          "min" : 2.56425356E8,
          "sum" : 1.568911044E9,
          "standardDeviation" : 5901543.281832545
        } ],
        "3" : [ {
          "mean" : 2.6341246341666666E8,
          "variance" : 7.604640877131327E15,
          "n" : 7,
          "max" : 3.81255059E8,
          "min" : 5243071.0,
          "sum" : 1.8438872439166665E9,
          "standardDeviation" : 8.720459206447403E7
        }, {
          "mean" : 2.634202155E8,
          "variance" : 1.215955506194334E13,
          "n" : 12,
          "max" : 2.69606169E8,
          "min" : 2.59336867E8,
          "sum" : 3.161042586E9,
          "standardDeviation" : 3487055.3568796897
        }, {
          "mean" : 2.6240051533333334E8,
          "variance" : 1.4605310504505068E13,
          "n" : 6,
          "max" : 2.66529703E8,
          "min" : 2.58104853E8,
          "sum" : 1.574403092E9,
          "standardDeviation" : 3821689.4830042208
        } ],
        "4" : [ {
          "mean" : 2.689365966666667E8,
          "variance" : 7.846741587054348E15,
          "n" : 7,
          "max" : 3.82954324E8,
          "min" : 4575899.0,
          "sum" : 1.8825561766666667E9,
          "standardDeviation" : 8.858183553671908E7
        }, {
          "mean" : 2.698306390833333E8,
          "variance" : 5.422159348318197E13,
          "n" : 12,
          "max" : 2.80554028E8,
          "min" : 2.5967512E8,
          "sum" : 3.237967669E9,
          "standardDeviation" : 7363531.318815855
        }, {
          "mean" : 2.645142586666667E8,
          "variance" : 2.5902845942139055E13,
          "n" : 6,
          "max" : 2.70710194E8,
          "min" : 2.58270314E8,
          "sum" : 1.587085552E9,
          "standardDeviation" : 5089483.85812737
        } ],
        "5" : [ {
          "mean" : 2.648038473333333E8,
          "variance" : 8.46031457398192E15,
          "n" : 7,
          "max" : 4.15731263E8,
          "min" : 4155840.0,
          "sum" : 1.8536269313333333E9,
          "standardDeviation" : 9.197996832996802E7
        }, {
          "mean" : 2.62264835E8,
          "variance" : 1.522640110094351E13,
          "n" : 13,
          "max" : 2.67261696E8,
          "min" : 2.56916704E8,
          "sum" : 3.409442855E9,
          "standardDeviation" : 3902102.1387123517
        }, {
          "mean" : 2.621133046E8,
          "variance" : 2.0606917938392277E13,
          "n" : 5,
          "max" : 2.66645959E8,
          "min" : 2.5681775E8,
          "sum" : 1.310566523E9,
          "standardDeviation" : 4539484.325162086
        } ],
        "6" : [ {
          "mean" : 2.6044993175E8,
          "variance" : 7.532899476145239E15,
          "n" : 7,
          "max" : 3.79762056E8,
          "min" : 3579303.0,
          "sum" : 1.82314952225E9,
          "standardDeviation" : 8.679227774488488E7
        }, {
          "mean" : 2.6489707858333334E8,
          "variance" : 1.5821529872750807E13,
          "n" : 12,
          "max" : 2.70997832E8,
          "min" : 2.5761028E8,
          "sum" : 3.178764943E9,
          "standardDeviation" : 3977628.6745686564
        }, {
          "mean" : 2.6563705366666666E8,
          "variance" : 9.806385954263441E12,
          "n" : 6,
          "max" : 2.67983356E8,
          "min" : 2.61367534E8,
          "sum" : 1.593822322E9,
          "standardDeviation" : 3131514.9615263604
        } ],
        "7" : [ {
          "mean" : 2.611128799166667E8,
          "variance" : 7.269050791810659E15,
          "n" : 7,
          "max" : 3.65417186E8,
          "min" : 5244148.0,
          "sum" : 1.8277901594166667E9,
          "standardDeviation" : 8.525872853738002E7
        }, {
          "mean" : 2.6418027816666666E8,
          "variance" : 2.9858768708063945E13,
          "n" : 12,
          "max" : 2.72747416E8,
          "min" : 2.56519756E8,
          "sum" : 3.170163338E9,
          "standardDeviation" : 5464317.77151219
        }, {
          "mean" : 2.63344828E8,
          "variance" : 4.988193776406002E13,
          "n" : 6,
          "max" : 2.73153925E8,
          "min" : 2.56387632E8,
          "sum" : 1.580068968E9,
          "standardDeviation" : 7062714.617203503
        } ],
        "8" : [ {
          "mean" : 2.68099062E8,
          "variance" : 5.367173890057846E15,
          "n" : 7,
          "max" : 3.79390704E8,
          "min" : 5.6286645E7,
          "sum" : 1.876693434E9,
          "standardDeviation" : 7.326099842383972E7
        }, {
          "mean" : 2.683544746666667E8,
          "variance" : 1.4172125405300252E13,
          "n" : 12,
          "max" : 2.74835588E8,
          "min" : 2.61913704E8,
          "sum" : 3.220253696E9,
          "standardDeviation" : 3764588.3447330934
        }, {
          "mean" : 2.694605433333334E8,
          "variance" : 1.2033315052799014E13,
          "n" : 6,
          "max" : 2.73734377E8,
          "min" : 2.65109457E8,
          "sum" : 1.6167632600000002E9,
          "standardDeviation" : 3468906.895954259
        } ],
        "9" : [ {
          "mean" : 2.6461048158333334E8,
          "variance" : 7.580141793575656E15,
          "n" : 7,
          "max" : 3.72528059E8,
          "min" : 3660248.0,
          "sum" : 1.8522733710833335E9,
          "standardDeviation" : 8.70640097490097E7
        }, {
          "mean" : 2.678245055E8,
          "variance" : 2.5222211202430664E13,
          "n" : 12,
          "max" : 2.76094036E8,
          "min" : 2.60826272E8,
          "sum" : 3.213894066E9,
          "standardDeviation" : 5022171.960659119
        }, {
          "mean" : 2.687060983333333E8,
          "variance" : 7.100867598095057E12,
          "n" : 6,
          "max" : 2.71842292E8,
          "min" : 2.65684688E8,
          "sum" : 1.61223659E9,
          "standardDeviation" : 2664745.3158031926
        } ],
        "10" : [ {
          "mean" : 2.6450258475E8,
          "variance" : 7.903549509890368E15,
          "n" : 7,
          "max" : 3.87394202E8,
          "min" : 3529118.0,
          "sum" : 1.85151809325E9,
          "standardDeviation" : 8.890190948393835E7
        }, {
          "mean" : 2.6803306358333334E8,
          "variance" : 4.03591182598297E13,
          "n" : 12,
          "max" : 2.79445675E8,
          "min" : 2.6014171E8,
          "sum" : 3.216396763E9,
          "standardDeviation" : 6352882.673230295
        }, {
          "mean" : 2.70694393E8,
          "variance" : 6.66054570769376E13,
          "n" : 6,
          "max" : 2.80591184E8,
          "min" : 2.59384816E8,
          "sum" : 1.624166358E9,
          "standardDeviation" : 8161216.6419558795
        } ],
        "11" : [ {
          "mean" : 2.6372272366666666E8,
          "variance" : 7.844225197144244E15,
          "n" : 7,
          "max" : 3.85570035E8,
          "min" : 3870531.0,
          "sum" : 1.8460590656666665E9,
          "standardDeviation" : 8.856763063977857E7
        }, {
          "mean" : 2.6363642575E8,
          "variance" : 1.3107068645656387E13,
          "n" : 12,
          "max" : 2.70896336E8,
          "min" : 2.5944952E8,
          "sum" : 3.163637109E9,
          "standardDeviation" : 3620368.578702504
        }, {
          "mean" : 2.635354835E8,
          "variance" : 3.01333954247411E13,
          "n" : 6,
          "max" : 2.72882549E8,
          "min" : 2.58291198E8,
          "sum" : 1.581212901E9,
          "standardDeviation" : 5489389.348984193
        } ],
        "12" : [ {
          "mean" : 2.6818103783333334E8,
          "variance" : 8.092569721033991E15,
          "n" : 7,
          "max" : 3.94613996E8,
          "min" : 3327643.0,
          "sum" : 1.8772672648333335E9,
          "standardDeviation" : 8.995871120149505E7
        }, {
          "mean" : 2.7272980425E8,
          "variance" : 2.6994671618380777E13,
          "n" : 12,
          "max" : 2.79979345E8,
          "min" : 2.66628861E8,
          "sum" : 3.272757651E9,
          "standardDeviation" : 5195639.673647584
        }, {
          "mean" : 2.709684963333334E8,
          "variance" : 2.7082169432997945E13,
          "n" : 6,
          "max" : 2.76953966E8,
          "min" : 2.64651894E8,
          "sum" : 1.6258109780000002E9,
          "standardDeviation" : 5204053.173536752
        } ],
        "13" : [ {
          "mean" : 2.713692469166666E8,
          "variance" : 5.313022198328128E15,
          "n" : 7,
          "max" : 4.04602158E8,
          "min" : 7.3269344E7,
          "sum" : 1.8995847284166665E9,
          "standardDeviation" : 7.289048084851772E7
        }, {
          "mean" : 2.7168176300000006E8,
          "variance" : 3.2301235866670477E13,
          "n" : 12,
          "max" : 2.79186263E8,
          "min" : 2.63155408E8,
          "sum" : 3.260181156000001E9,
          "standardDeviation" : 5683417.622053695
        }, {
          "mean" : 2.700407046666666E8,
          "variance" : 5.466545473365145E13,
          "n" : 6,
          "max" : 2.84008538E8,
          "min" : 2.64562809E8,
          "sum" : 1.6202442279999998E9,
          "standardDeviation" : 7393609.046578771
        } ],
        "14" : [ {
          "mean" : 2.6714442966666663E8,
          "variance" : 7.628381974261278E15,
          "n" : 7,
          "max" : 3.71783248E8,
          "min" : 4940906.0,
          "sum" : 1.8700110076666665E9,
          "standardDeviation" : 8.73406089643373E7
        }, {
          "mean" : 2.715097109166666E8,
          "variance" : 2.4063124127533086E13,
          "n" : 12,
          "max" : 2.7694705E8,
          "min" : 2.63338548E8,
          "sum" : 3.2581165309999995E9,
          "standardDeviation" : 4905417.834143498
        }, {
          "mean" : 2.74114962E8,
          "variance" : 2.0148562486703625E13,
          "n" : 6,
          "max" : 2.80535334E8,
          "min" : 2.68152112E8,
          "sum" : 1.644689772E9,
          "standardDeviation" : 4488715.015091025
        } ],
        "15" : [ {
          "mean" : 2.6431324133333334E8,
          "variance" : 7.582588698255847E15,
          "n" : 7,
          "max" : 3.75555269E8,
          "min" : 3892527.0,
          "sum" : 1.8501926893333335E9,
          "standardDeviation" : 8.707806094680707E7
        }, {
          "mean" : 2.739712219166667E8,
          "variance" : 7.411881000839469E13,
          "n" : 12,
          "max" : 2.86808643E8,
          "min" : 2.63383157E8,
          "sum" : 3.287654663E9,
          "standardDeviation" : 8609228.188890958
        }, {
          "mean" : 2.715099813333333E8,
          "variance" : 4.023994862313539E13,
          "n" : 6,
          "max" : 2.79656667E8,
          "min" : 2.63572861E8,
          "sum" : 1.629059888E9,
          "standardDeviation" : 6343496.561292943
        } ],
        "16" : [ {
          "mean" : 2.6779315516666666E8,
          "variance" : 8.255033194623508E15,
          "n" : 7,
          "max" : 4.07534667E8,
          "min" : 5210702.0,
          "sum" : 1.8745520861666665E9,
          "standardDeviation" : 9.085721322285594E7
        }, {
          "mean" : 2.6810486933333334E8,
          "variance" : 4.872354910220931E13,
          "n" : 12,
          "max" : 2.77821314E8,
          "min" : 2.57660131E8,
          "sum" : 3.217258432E9,
          "standardDeviation" : 6980225.576742439
        }, {
          "mean" : 2.6165238233333334E8,
          "variance" : 1.3673428453983844E13,
          "n" : 6,
          "max" : 2.66209615E8,
          "min" : 2.57734866E8,
          "sum" : 1.569914294E9,
          "standardDeviation" : 3697759.9237895156
        } ],
        "17" : [ {
          "mean" : 2.676305919166667E8,
          "variance" : 7.990367782206091E15,
          "n" : 7,
          "max" : 3.88415254E8,
          "min" : 3385890.0,
          "sum" : 1.8734141434166667E9,
          "standardDeviation" : 8.938885714789115E7
        }, {
          "mean" : 2.6625219916666666E8,
          "variance" : 1.6447340576837438E13,
          "n" : 12,
          "max" : 2.72116346E8,
          "min" : 2.59255429E8,
          "sum" : 3.19502639E9,
          "standardDeviation" : 4055532.0954022096
        }, {
          "mean" : 2.65056604E8,
          "variance" : 1.4526184924554393E13,
          "n" : 6,
          "max" : 2.69564845E8,
          "min" : 2.61113155E8,
          "sum" : 1.590339624E9,
          "standardDeviation" : 3811323.251123472
        } ],
        "18" : [ {
          "mean" : 2.623852121666667E8,
          "variance" : 7.821411531174213E15,
          "n" : 7,
          "max" : 3.9147797E8,
          "min" : 3854660.0,
          "sum" : 1.8366964851666667E9,
          "standardDeviation" : 8.843874451378317E7
        }, {
          "mean" : 2.6422793483333334E8,
          "variance" : 1.063321962095397E13,
          "n" : 12,
          "max" : 2.6770682E8,
          "min" : 2.59232608E8,
          "sum" : 3.170735218E9,
          "standardDeviation" : 3260861.791145704
        }, {
          "mean" : 2.6264242116666666E8,
          "variance" : 8.092601733429757E12,
          "n" : 6,
          "max" : 2.65225876E8,
          "min" : 2.58134771E8,
          "sum" : 1.575854527E9,
          "standardDeviation" : 2844749.854280646
        } ],
        "19" : [ {
          "mean" : 2.6084668799999997E8,
          "variance" : 7.553535988322785E15,
          "n" : 7,
          "max" : 3.79776691E8,
          "min" : 4531614.0,
          "sum" : 1.8259268159999998E9,
          "standardDeviation" : 8.691108092943491E7
        }, {
          "mean" : 2.6300617158333334E8,
          "variance" : 1.286260406628336E13,
          "n" : 12,
          "max" : 2.69283099E8,
          "min" : 2.57414822E8,
          "sum" : 3.156074059E9,
          "standardDeviation" : 3586447.27638416
        }, {
          "mean" : 2.583713956666667E8,
          "variance" : 9.275167204737088E12,
          "n" : 6,
          "max" : 2.63137724E8,
          "min" : 2.55491177E8,
          "sum" : 1.550228374E9,
          "standardDeviation" : 3045515.9176627346
        } ],
        "20" : [ {
          "mean" : 2.641597046666667E8,
          "variance" : 7.780651439362437E15,
          "n" : 7,
          "max" : 3.92215021E8,
          "min" : 5343589.0,
          "sum" : 1.8491179326666667E9,
          "standardDeviation" : 8.820800099402796E7
        }, {
          "mean" : 2.67308905E8,
          "variance" : 3.6042722311016734E13,
          "n" : 12,
          "max" : 2.79318915E8,
          "min" : 2.57309207E8,
          "sum" : 3.20770686E9,
          "standardDeviation" : 6003559.136963401
        }, {
          "mean" : 2.6178597466666666E8,
          "variance" : 3.836119193680548E13,
          "n" : 6,
          "max" : 2.69308846E8,
          "min" : 2.54632276E8,
          "sum" : 1.570715848E9,
          "standardDeviation" : 6193641.250250572
        } ],
        "21" : [ {
          "mean" : 2.6108321141666666E8,
          "variance" : 7.386207770629853E15,
          "n" : 7,
          "max" : 3.65483684E8,
          "min" : 3472862.0,
          "sum" : 1.8275824799166665E9,
          "standardDeviation" : 8.594304957720463E7
        }, {
          "mean" : 2.636822615833333E8,
          "variance" : 2.950987038784226E13,
          "n" : 12,
          "max" : 2.75113133E8,
          "min" : 2.57704263E8,
          "sum" : 3.164187139E9,
          "standardDeviation" : 5432298.81245889
        }, {
          "mean" : 2.623365185E8,
          "variance" : 6.38320224759869E12,
          "n" : 6,
          "max" : 2.65179585E8,
          "min" : 2.58441264E8,
          "sum" : 1.574019111E9,
          "standardDeviation" : 2526499.9995247754
        } ],
        "22" : [ {
          "mean" : 2.6171507166666666E8,
          "variance" : 7.911917972300116E15,
          "n" : 7,
          "max" : 3.96889836E8,
          "min" : 4292282.0,
          "sum" : 1.8320055016666665E9,
          "standardDeviation" : 8.894896273875326E7
        }, {
          "mean" : 2.6380922583333334E8,
          "variance" : 2.425073649678125E13,
          "n" : 12,
          "max" : 2.70329426E8,
          "min" : 2.57141469E8,
          "sum" : 3.16571071E9,
          "standardDeviation" : 4924503.680248523
        }, {
          "mean" : 2.62075052E8,
          "variance" : 6.1217184837408E13,
          "n" : 6,
          "max" : 2.72495903E8,
          "min" : 2.55266074E8,
          "sum" : 1.572450312E9,
          "standardDeviation" : 7824141.1565364795
        } ],
        "23" : [ {
          "mean" : 2.6028726508333337E8,
          "variance" : 7.51821308525431E15,
          "n" : 7,
          "max" : 3.83281105E8,
          "min" : 5003202.0,
          "sum" : 1.8220108555833335E9,
          "standardDeviation" : 8.670762991371815E7
        }, {
          "mean" : 2.680671805E8,
          "variance" : 2.7496201551447008E13,
          "n" : 12,
          "max" : 2.76609442E8,
          "min" : 2.61625329E8,
          "sum" : 3.216806166E9,
          "standardDeviation" : 5243682.060484503
        }, {
          "mean" : 2.630683381666667E8,
          "variance" : 1.8383985266946977E13,
          "n" : 6,
          "max" : 2.69284144E8,
          "min" : 2.58390109E8,
          "sum" : 1.578410029E9,
          "standardDeviation" : 4287654.984597872
        } ],
        "24" : [ {
          "mean" : 2.576651715833333E8,
          "variance" : 6.987517073633226E15,
          "n" : 7,
          "max" : 3.54094815E8,
          "min" : 4262498.0,
          "sum" : 1.8036562010833333E9,
          "standardDeviation" : 8.359136961213894E7
        }, {
          "mean" : 2.697945171666667E8,
          "variance" : 3.4789847355632746E13,
          "n" : 12,
          "max" : 2.80567821E8,
          "min" : 2.59708548E8,
          "sum" : 3.237534206E9,
          "standardDeviation" : 5898291.901528166
        }, {
          "mean" : 2.6269363483333334E8,
          "variance" : 3.398194856554898E13,
          "n" : 6,
          "max" : 2.70160594E8,
          "min" : 2.56266192E8,
          "sum" : 1.576161809E9,
          "standardDeviation" : 5829403.791602447
        } ],
        "25" : [ {
          "mean" : 2.6558990683333334E8,
          "variance" : 8.27638867535485E15,
          "n" : 7,
          "max" : 4.07814438E8,
          "min" : 3854841.0,
          "sum" : 1.8591293478333335E9,
          "standardDeviation" : 9.09746595231598E7
        }, {
          "mean" : 2.6552664075E8,
          "variance" : 1.993305508780088E13,
          "n" : 12,
          "max" : 2.71450125E8,
          "min" : 2.58531855E8,
          "sum" : 3.186319689E9,
          "standardDeviation" : 4464645.012517891
        }, {
          "mean" : 2.620832493333333E8,
          "variance" : 2.6356063348393027E13,
          "n" : 6,
          "max" : 2.70031904E8,
          "min" : 2.56724895E8,
          "sum" : 1.572499496E9,
          "standardDeviation" : 5133815.671446826
        } ],
        "26" : [ {
          "mean" : 2.654558635833333E8,
          "variance" : 7.684603660235363E15,
          "n" : 7,
          "max" : 3.76184175E8,
          "min" : 3910880.0,
          "sum" : 1.8581910450833333E9,
          "standardDeviation" : 8.76618711883072E7
        }, {
          "mean" : 2.693079053333334E8,
          "variance" : 9.007571909811514E12,
          "n" : 12,
          "max" : 2.73650547E8,
          "min" : 2.64790262E8,
          "sum" : 3.2316948640000005E9,
          "standardDeviation" : 3001261.7196458415
        }, {
          "mean" : 2.736870915E8,
          "variance" : 2.396830624496744E13,
          "n" : 6,
          "max" : 2.78958155E8,
          "min" : 2.67709606E8,
          "sum" : 1.642122549E9,
          "standardDeviation" : 4895743.686608546
        } ],
        "27" : [ {
          "mean" : 2.7144442183333325E8,
          "variance" : 8.253753333700364E15,
          "n" : 7,
          "max" : 3.97940711E8,
          "min" : 3454733.0,
          "sum" : 1.9001109528333328E9,
          "standardDeviation" : 9.08501696954957E7
        }, {
          "mean" : 2.732986245833334E8,
          "variance" : 1.838624020520535E13,
          "n" : 12,
          "max" : 2.81381846E8,
          "min" : 2.67580964E8,
          "sum" : 3.2795834950000005E9,
          "standardDeviation" : 4287917.933590305
        }, {
          "mean" : 2.733956685E8,
          "variance" : 6.377641946920319E12,
          "n" : 6,
          "max" : 2.76523616E8,
          "min" : 2.70198343E8,
          "sum" : 1.640374011E9,
          "standardDeviation" : 2525399.3638472944
        } ],
        "28" : [ {
          "mean" : 2.6213157491666666E8,
          "variance" : 7.947951522013286E15,
          "n" : 7,
          "max" : 3.9730919E8,
          "min" : 3263664.0,
          "sum" : 1.8349210244166665E9,
          "standardDeviation" : 8.915128446642418E7
        }, {
          "mean" : 2.651094488333333E8,
          "variance" : 2.6767903691871973E13,
          "n" : 12,
          "max" : 2.70882099E8,
          "min" : 2.56789096E8,
          "sum" : 3.181313386E9,
          "standardDeviation" : 5173770.742105991
        }, {
          "mean" : 2.640298321666667E8,
          "variance" : 8.662307659816378E13,
          "n" : 6,
          "max" : 2.78622465E8,
          "min" : 2.56816722E8,
          "sum" : 1.584178993E9,
          "standardDeviation" : 9307151.905828323
        } ],
        "29" : [ {
          "mean" : 2.600859808333333E8,
          "variance" : 7.364240103877004E15,
          "n" : 7,
          "max" : 3.6592894E8,
          "min" : 3535222.0,
          "sum" : 1.8206018658333333E9,
          "standardDeviation" : 8.581515078281343E7
        }, {
          "mean" : 2.6629347074999997E8,
          "variance" : 4.9140537662667195E13,
          "n" : 12,
          "max" : 2.7510772E8,
          "min" : 2.5521322E8,
          "sum" : 3.1955216489999995E9,
          "standardDeviation" : 7010031.21695383
        }, {
          "mean" : 2.608146031666667E8,
          "variance" : 3.350792168593777E13,
          "n" : 6,
          "max" : 2.69455261E8,
          "min" : 2.55649301E8,
          "sum" : 1.564887619E9,
          "standardDeviation" : 5788602.740380253
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
    "kiekerPattern" : "protected void org.gradoop.GradoopTest.validateBasicGraphVertices(java.util.List)",
    "otherKiekerPattern" : "protected void org.gradoop.GradoopTest.validateBasicGraphVertices(java.util.List)",
    "module" : "gradoop-core",
    "name" : "GradoopTest#validateBasicGraphVertices",
    "key" : "org.gradoop.GradoopTest.validateBasicGraphVertices_List",
    "otherKey" : "org.gradoop.GradoopTest.validateBasicGraphVertices_List",
    "parent" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 2.4252751707166663E8,
      "meanCurrent" : 3.3019856720777774E8,
      "deviationOld" : 2390281.0869904268,
      "deviationCurrent" : 4870252.026235324,
      "vms" : 30,
      "callsOld" : 150,
      "calls" : 150,
      "tvalue" : -88.51177652168344,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 1607114.219146764,
    "inVMDeviation" : 7185102.906753947,
    "ess" : 1,
    "values" : [ 3.303689798E8, 3.247900975333333E8, 3.260395265333333E8, 3.287031664666667E8, 3.270487620666667E8, 3.256204808666667E8, 3.356537635333333E8, 3.378572684666667E8, 3.298972478666667E8, 3.250384506E8, 3.329498494E8, 3.245458351333333E8, 3.310127848666667E8, 3.364880435333333E8, 3.362417987333333E8, 3.252994357333333E8, 3.314931140666667E8, 3.312899196E8, 3.348550680666667E8, 3.316177556E8, 3.303491747333333E8, 3.31150697E8, 3.422114724666667E8, 3.283259778E8, 3.328925522E8, 3.268134831333333E8, 3.196272199E8, 3.295988131333333E8, 3.243890187333333E8, 3.337872586666667E8 ],
    "valuesPredecessor" : [ 2.426468293E8, 2.42008675E8, 2.39667807E8, 2.4128427125E8, 2.39803005E8, 2.390407282E8, 2.414891813E8, 2.481415573E8, 2.404341647E8, 2.4133822265E8, 2.4118390535E8, 2.4085551195E8, 2.4321591E8, 2.446827101E8, 2.3937149445E8, 2.441843392E8, 2.4423363545E8, 2.4316669155E8, 2.408900485E8, 2.4309357445E8, 2.4254668405E8, 2.42628492E8, 2.4145956945E8, 2.4289707085E8, 2.4524154905E8, 2.4955324525E8, 2.4054012195E8, 2.4365843045E8, 2.417714438E8, 2.447966426E8 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 3.25910239E8,
          "variance" : 2.0628683903599E13,
          "n" : 2,
          "max" : 3.30497444E8,
          "min" : 3.21415081E8,
          "sum" : 6.51820478E8,
          "standardDeviation" : 4541881.097474812
        }, {
          "mean" : 3.333414736666667E8,
          "variance" : 4.2162725661745625E14,
          "n" : 3,
          "max" : 3.57051166E8,
          "min" : 3.21363649E8,
          "sum" : 1.000024421E9,
          "standardDeviation" : 2.0533564147937305E7
        } ],
        "1" : [ {
          "mean" : 3.221135143333333E8,
          "variance" : 5.882339408417333E12,
          "n" : 2,
          "max" : 3.24606673E8,
          "min" : 3.19762191E8,
          "sum" : 6.442270286666666E8,
          "standardDeviation" : 2425353.4605119587
        }, {
          "mean" : 3.265744863333333E8,
          "variance" : 4.2164275598194336E13,
          "n" : 3,
          "max" : 3.34061092E8,
          "min" : 3.22474354E8,
          "sum" : 9.79723459E8,
          "standardDeviation" : 6493402.466980954
        } ],
        "2" : [ {
          "mean" : 3.229957323333333E8,
          "variance" : 8.812928887544336E12,
          "n" : 2,
          "max" : 3.25879694E8,
          "min" : 3.1994907E8,
          "sum" : 6.459914646666666E8,
          "standardDeviation" : 2968657.7585744597
        }, {
          "mean" : 3.280687226666667E8,
          "variance" : 1.8727803570180934E14,
          "n" : 3,
          "max" : 3.43860222E8,
          "min" : 3.19673526E8,
          "sum" : 9.84206168E8,
          "standardDeviation" : 1.3684956547311699E7
        } ],
        "3" : [ {
          "mean" : 3.254570716666667E8,
          "variance" : 1.4059256720160332E13,
          "n" : 2,
          "max" : 3.28951183E8,
          "min" : 3.21495824E8,
          "sum" : 6.509141433333334E8,
          "standardDeviation" : 3749567.5377515648
        }, {
          "mean" : 3.308672296666667E8,
          "variance" : 3.4472844254218425E14,
          "n" : 3,
          "max" : 3.52234497E8,
          "min" : 3.18664268E8,
          "sum" : 9.92601689E8,
          "standardDeviation" : 1.8566864100924104E7
        } ],
        "4" : [ {
          "mean" : 3.243580926666667E8,
          "variance" : 4.861257407334333E12,
          "n" : 2,
          "max" : 3.26548621E8,
          "min" : 3.22139242E8,
          "sum" : 6.487161853333334E8,
          "standardDeviation" : 2204825.9358358276
        }, {
          "mean" : 3.288425416666667E8,
          "variance" : 2.571747335668163E14,
          "n" : 3,
          "max" : 3.47307789E8,
          "min" : 3.18405462E8,
          "sum" : 9.86527625E8,
          "standardDeviation" : 1.6036668406087853E7
        } ],
        "5" : [ {
          "mean" : 3.223884706666667E8,
          "variance" : 7.788426918010333E12,
          "n" : 2,
          "max" : 3.24541473E8,
          "min" : 3.19235467E8,
          "sum" : 6.447769413333334E8,
          "standardDeviation" : 2790775.325605831
        }, {
          "mean" : 3.277751543333333E8,
          "variance" : 1.2659856489460833E14,
          "n" : 3,
          "max" : 3.40733166E8,
          "min" : 3.20480051E8,
          "sum" : 9.83325463E8,
          "standardDeviation" : 1.1251602770032736E7
        } ],
        "6" : [ {
          "mean" : 3.230296253333333E8,
          "variance" : 2.285176489477333E12,
          "n" : 2,
          "max" : 3.23999484E8,
          "min" : 3.21287832E8,
          "sum" : 6.460592506666666E8,
          "standardDeviation" : 1511680.022186353
        }, {
          "mean" : 3.440698556666667E8,
          "variance" : 1.1741995350512342E15,
          "n" : 3,
          "max" : 3.83632953E8,
          "min" : 3.2376818E8,
          "sum" : 1.032209567E9,
          "standardDeviation" : 3.4266595031476855E7
        } ],
        "7" : [ {
          "mean" : 3.327523166666667E8,
          "variance" : 2.086998592899634E13,
          "n" : 2,
          "max" : 3.37447953E8,
          "min" : 3.28322856E8,
          "sum" : 6.655046333333334E8,
          "standardDeviation" : 4568367.972153331
        }, {
          "mean" : 3.412605696666667E8,
          "variance" : 4.452956983263344E14,
          "n" : 3,
          "max" : 3.65612319E8,
          "min" : 3.28349898E8,
          "sum" : 1.023781709E9,
          "standardDeviation" : 2.1102030668310914E7
        } ],
        "8" : [ {
          "mean" : 3.232604396666667E8,
          "variance" : 1.8477965672583333E12,
          "n" : 2,
          "max" : 3.24797658E8,
          "min" : 3.22217028E8,
          "sum" : 6.465208793333334E8,
          "standardDeviation" : 1359336.811558612
        }, {
          "mean" : 3.343217866666667E8,
          "variance" : 3.695601584982403E14,
          "n" : 3,
          "max" : 3.56519293E8,
          "min" : 3.23108173E8,
          "sum" : 1.00296536E9,
          "standardDeviation" : 1.9223947526411954E7
        } ],
        "9" : [ {
          "mean" : 3.24282319E8,
          "variance" : 1.1769725778913E13,
          "n" : 2,
          "max" : 3.27314822E8,
          "min" : 3.20558655E8,
          "sum" : 6.48564638E8,
          "standardDeviation" : 3430703.3941909056
        }, {
          "mean" : 3.255425383333333E8,
          "variance" : 3.0438989572022336E13,
          "n" : 3,
          "max" : 3.31823292E8,
          "min" : 3.21478533E8,
          "sum" : 9.76627615E8,
          "standardDeviation" : 5517154.118929644
        } ],
        "10" : [ {
          "mean" : 3.28712888E8,
          "variance" : 4.80429715899E11,
          "n" : 2,
          "max" : 3.2919459E8,
          "min" : 3.27918501E8,
          "sum" : 6.57425776E8,
          "standardDeviation" : 693130.3743878204
        }, {
          "mean" : 3.357744903333333E8,
          "variance" : 8.399319027066134E13,
          "n" : 3,
          "max" : 3.46349993E8,
          "min" : 3.30151705E8,
          "sum" : 1.007323471E9,
          "standardDeviation" : 9164779.8811898
        } ],
        "11" : [ {
          "mean" : 3.188759003333333E8,
          "variance" : 1.2663955431626334E13,
          "n" : 2,
          "max" : 3.2282536E8,
          "min" : 3.15918683E8,
          "sum" : 6.377518006666666E8,
          "standardDeviation" : 3558645.16798547
        }, {
          "mean" : 3.283257916666667E8,
          "variance" : 2.0170730801413738E14,
          "n" : 3,
          "max" : 3.44304243E8,
          "min" : 3.17139047E8,
          "sum" : 9.84977375E8,
          "standardDeviation" : 1.4202369802752545E7
        } ],
        "12" : [ {
          "mean" : 3.300418656666667E8,
          "variance" : 5.793979924323334E11,
          "n" : 2,
          "max" : 3.30760696E8,
          "min" : 3.29244432E8,
          "sum" : 6.600837313333334E8,
          "standardDeviation" : 761181.9706432447
        }, {
          "mean" : 3.316600643333333E8,
          "variance" : 4.7638945219860336E13,
          "n" : 3,
          "max" : 3.39421008E8,
          "min" : 3.26209637E8,
          "sum" : 9.94980193E8,
          "standardDeviation" : 6902097.160998267
        } ],
        "13" : [ {
          "mean" : 3.235325163333333E8,
          "variance" : 1.5973402263343333E12,
          "n" : 2,
          "max" : 3.24519232E8,
          "min" : 3.22107958E8,
          "sum" : 6.470650326666666E8,
          "standardDeviation" : 1263859.2589107116
        }, {
          "mean" : 3.451250616666667E8,
          "variance" : 1.5807015622066505E15,
          "n" : 3,
          "max" : 3.91033354E8,
          "min" : 3.22018983E8,
          "sum" : 1.035375185E9,
          "standardDeviation" : 3.975803770568475E7
        } ],
        "14" : [ {
          "mean" : 3.257586223333333E8,
          "variance" : 1.7629616380322332E13,
          "n" : 2,
          "max" : 3.29731221E8,
          "min" : 3.21365362E8,
          "sum" : 6.515172446666666E8,
          "standardDeviation" : 4198763.672835413
        }, {
          "mean" : 3.43230583E8,
          "variance" : 9.991162749689469E14,
          "n" : 3,
          "max" : 3.79505776E8,
          "min" : 3.21600272E8,
          "sum" : 1.029691749E9,
          "standardDeviation" : 3.1608800593647126E7
        } ],
        "15" : [ {
          "mean" : 3.193640373333333E8,
          "variance" : 2.461507150323333E11,
          "n" : 2,
          "max" : 3.19921167E8,
          "min" : 3.18969906E8,
          "sum" : 6.387280746666666E8,
          "standardDeviation" : 496135.78285821446
        }, {
          "mean" : 3.29256368E8,
          "variance" : 2.26245424535697E14,
          "n" : 3,
          "max" : 3.46624545E8,
          "min" : 3.20499855E8,
          "sum" : 9.87769104E8,
          "standardDeviation" : 1.504145686214261E7
        } ],
        "16" : [ {
          "mean" : 3.236521606666667E8,
          "variance" : 9.213890303453334E11,
          "n" : 2,
          "max" : 3.24741276E8,
          "min" : 3.2292939E8,
          "sum" : 6.473043213333334E8,
          "standardDeviation" : 959890.1136824639
        }, {
          "mean" : 3.367204163333333E8,
          "variance" : 1.0196145030580852E15,
          "n" : 3,
          "max" : 3.73584871E8,
          "min" : 3.17677051E8,
          "sum" : 1.010161249E9,
          "standardDeviation" : 3.1931403086273633E7
        } ],
        "17" : [ {
          "mean" : 3.21294125E8,
          "variance" : 3.49589115763E11,
          "n" : 2,
          "max" : 3.21731796E8,
          "min" : 3.20621503E8,
          "sum" : 6.4258825E8,
          "standardDeviation" : 591260.6157719285
        }, {
          "mean" : 3.379537826666667E8,
          "variance" : 1.0476519928034405E15,
          "n" : 3,
          "max" : 3.75315915E8,
          "min" : 3.18432899E8,
          "sum" : 1.013861348E9,
          "standardDeviation" : 3.23674526770866E7
        } ],
        "18" : [ {
          "mean" : 3.243679796666667E8,
          "variance" : 6.171237380625334E12,
          "n" : 2,
          "max" : 3.26077731E8,
          "min" : 3.21518411E8,
          "sum" : 6.487359593333334E8,
          "standardDeviation" : 2484197.532529435
        }, {
          "mean" : 3.418464603333333E8,
          "variance" : 7.070338321273625E14,
          "n" : 3,
          "max" : 3.72327564E8,
          "min" : 3.2341051E8,
          "sum" : 1.025539381E9,
          "standardDeviation" : 2.6590107787058E7
        } ],
        "19" : [ {
          "mean" : 3.21507978E8,
          "variance" : 5.2796971682499994E11,
          "n" : 2,
          "max" : 3.22097313E8,
          "min" : 3.20696123E8,
          "sum" : 6.43015956E8,
          "standardDeviation" : 726615.2467606222
        }, {
          "mean" : 3.383576073333333E8,
          "variance" : 1.0365806445735624E15,
          "n" : 3,
          "max" : 3.75495342E8,
          "min" : 3.18314921E8,
          "sum" : 1.015072822E9,
          "standardDeviation" : 3.219597248994915E7
        } ],
        "20" : [ {
          "mean" : 3.248652453333333E8,
          "variance" : 2.2993822498416332E13,
          "n" : 2,
          "max" : 3.30162999E8,
          "min" : 3.20822031E8,
          "sum" : 6.497304906666666E8,
          "standardDeviation" : 4795187.430999578
        }, {
          "mean" : 3.340051276666667E8,
          "variance" : 5.423379660743213E14,
          "n" : 3,
          "max" : 3.60876215E8,
          "min" : 3.19677135E8,
          "sum" : 1.002015383E9,
          "standardDeviation" : 2.3288150765449826E7
        } ],
        "21" : [ {
          "mean" : 3.27097073E8,
          "variance" : 3.2608337272209995E12,
          "n" : 2,
          "max" : 3.29028972E8,
          "min" : 3.25451669E8,
          "sum" : 6.54194146E8,
          "standardDeviation" : 1805777.8731674058
        }, {
          "mean" : 3.33853113E8,
          "variance" : 8.0655016274683E13,
          "n" : 3,
          "max" : 3.43737379E8,
          "min" : 3.26194184E8,
          "sum" : 1.001559339E9,
          "standardDeviation" : 8980813.786883848
        } ],
        "22" : [ {
          "mean" : 3.252682436666667E8,
          "variance" : 9.646174116882332E12,
          "n" : 2,
          "max" : 3.28545405E8,
          "min" : 3.22368182E8,
          "sum" : 6.505364873333334E8,
          "standardDeviation" : 3105829.054678047
        }, {
          "mean" : 3.535069583333333E8,
          "variance" : 2.808043430068933E15,
          "n" : 3,
          "max" : 4.14658485E8,
          "min" : 3.21084165E8,
          "sum" : 1.060520875E9,
          "standardDeviation" : 5.299097498696295E7
        } ],
        "23" : [ {
          "mean" : 3.2456156E8,
          "variance" : 1.835873651251E12,
          "n" : 2,
          "max" : 3.25867349E8,
          "min" : 3.23162301E8,
          "sum" : 6.4912312E8,
          "standardDeviation" : 1354944.1506021568
        }, {
          "mean" : 3.308355896666667E8,
          "variance" : 5.669656295122633E13,
          "n" : 3,
          "max" : 3.38700824E8,
          "min" : 3.23693591E8,
          "sum" : 9.92506769E8,
          "standardDeviation" : 7529712.009846481
        } ],
        "24" : [ {
          "mean" : 3.2625202E8,
          "variance" : 1.9118939356509998E12,
          "n" : 2,
          "max" : 3.27837119E8,
          "min" : 3.2529367E8,
          "sum" : 6.5250404E8,
          "standardDeviation" : 1382712.5282035307
        }, {
          "mean" : 3.373195736666667E8,
          "variance" : 5.301832343759723E14,
          "n" : 3,
          "max" : 3.63894529E8,
          "min" : 3.23316522E8,
          "sum" : 1.011958721E9,
          "standardDeviation" : 2.302570811888252E7
        } ],
        "25" : [ {
          "mean" : 3.221844343333333E8,
          "variance" : 6.500457706581333E12,
          "n" : 2,
          "max" : 3.24686125E8,
          "min" : 3.19589485E8,
          "sum" : 6.443688686666666E8,
          "standardDeviation" : 2549599.5188619983
        }, {
          "mean" : 3.298995156666667E8,
          "variance" : 3.2051384399994425E14,
          "n" : 3,
          "max" : 3.50408634E8,
          "min" : 3.1739865E8,
          "sum" : 9.89698547E8,
          "standardDeviation" : 1.790290043540276E7
        } ],
        "26" : [ {
          "mean" : 3.180633255E8,
          "variance" : 2.411058603733681E12,
          "n" : 3,
          "max" : 3.2027043E8,
          "min" : 3.16962645E8,
          "sum" : 9.541899765E8,
          "standardDeviation" : 1552758.3854977828
        }, {
          "mean" : 3.219730615E8,
          "variance" : 2.2855497940845E12,
          "n" : 2,
          "max" : 3.23042068E8,
          "min" : 3.20904055E8,
          "sum" : 6.43946123E8,
          "standardDeviation" : 1511803.490564994
        } ],
        "27" : [ {
          "mean" : 3.238529653333333E8,
          "variance" : 1.0784865325453334E12,
          "n" : 2,
          "max" : 3.2491395E8,
          "min" : 3.2283851E8,
          "sum" : 6.477059306666666E8,
          "standardDeviation" : 1038502.0618878584
        }, {
          "mean" : 3.334293783333333E8,
          "variance" : 2.587778179102443E14,
          "n" : 3,
          "max" : 3.5189908E8,
          "min" : 3.22482684E8,
          "sum" : 1.000288135E9,
          "standardDeviation" : 1.6086572596741803E7
        } ],
        "28" : [ {
          "mean" : 3.236081013333333E8,
          "variance" : 1.2378823678623333E12,
          "n" : 2,
          "max" : 3.24439855E8,
          "min" : 3.22344273E8,
          "sum" : 6.472162026666666E8,
          "standardDeviation" : 1112601.621364239
        }, {
          "mean" : 3.249096303333333E8,
          "variance" : 4.9574034753637336E13,
          "n" : 3,
          "max" : 3.32571197E8,
          "min" : 3.18723145E8,
          "sum" : 9.74728891E8,
          "standardDeviation" : 7040883.094728767
        } ],
        "29" : [ {
          "mean" : 3.244272406666667E8,
          "variance" : 5.722181248672334E12,
          "n" : 2,
          "max" : 3.26389971E8,
          "min" : 3.21762739E8,
          "sum" : 6.488544813333334E8,
          "standardDeviation" : 2392108.1180984136
        }, {
          "mean" : 3.400272706666667E8,
          "variance" : 1.0864303756787405E15,
          "n" : 3,
          "max" : 3.78040853E8,
          "min" : 3.19390742E8,
          "sum" : 1.020081812E9,
          "standardDeviation" : 3.2961043303857062E7
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 2.438217825E8,
          "variance" : 1.7051980254696553E12,
          "n" : 3,
          "max" : 2.45296545E8,
          "min" : 2.42170177E8,
          "sum" : 7.314653475E8,
          "standardDeviation" : 1305832.3113898106
        }, {
          "mean" : 2.408843995E8,
          "variance" : 1.9574190870125E12,
          "n" : 2,
          "max" : 2.41873697E8,
          "min" : 2.39895102E8,
          "sum" : 4.81768799E8,
          "standardDeviation" : 1399077.941721797
        } ],
        "1" : [ {
          "mean" : 2.42760545E8,
          "variance" : 5.706286154460667E12,
          "n" : 3,
          "max" : 2.46277209E8,
          "min" : 2.40962234E8,
          "sum" : 7.28281635E8,
          "standardDeviation" : 2388783.4046770893
        }, {
          "mean" : 2.4088087E8,
          "variance" : 1.6777570791199997E11,
          "n" : 2,
          "max" : 2.41170504E8,
          "min" : 2.40591236E8,
          "sum" : 4.8176174E8,
          "standardDeviation" : 409604.330924369
        } ],
        "2" : [ {
          "mean" : 2.41158354E8,
          "variance" : 2.874327916383201E13,
          "n" : 3,
          "max" : 2.4909198E8,
          "min" : 2.37404102E8,
          "sum" : 7.23475062E8,
          "standardDeviation" : 5361275.889546444
        }, {
          "mean" : 2.374319865E8,
          "variance" : 8.748060037204999E11,
          "n" : 2,
          "max" : 2.38093351E8,
          "min" : 2.36770622E8,
          "sum" : 4.74863973E8,
          "standardDeviation" : 935310.6455721008
        } ],
        "3" : [ {
          "mean" : 2.4127712375E8,
          "variance" : 2.8744984492369165E12,
          "n" : 3,
          "max" : 2.43482509E8,
          "min" : 2.39418806E8,
          "sum" : 7.2383137125E8,
          "standardDeviation" : 1695434.590079168
        }, {
          "mean" : 2.412949925E8,
          "variance" : 8.113636699740499E12,
          "n" : 2,
          "max" : 2.43309147E8,
          "min" : 2.39280838E8,
          "sum" : 4.82589985E8,
          "standardDeviation" : 2848444.6106148
        } ],
        "4" : [ {
          "mean" : 2.41338801E8,
          "variance" : 1.6440586013520076E12,
          "n" : 3,
          "max" : 2.43034281E8,
          "min" : 2.40215117E8,
          "sum" : 7.24016403E8,
          "standardDeviation" : 1282208.4859148327
        }, {
          "mean" : 2.37499311E8,
          "variance" : 1.5118400720000002E9,
          "n" : 2,
          "max" : 2.37526805E8,
          "min" : 2.37471817E8,
          "sum" : 4.74998622E8,
          "standardDeviation" : 38882.38768388588
        } ],
        "5" : [ {
          "mean" : 2.38859576E8,
          "variance" : 1.637299941452494E12,
          "n" : 4,
          "max" : 2.40156889E8,
          "min" : 2.37441326E8,
          "sum" : 9.55438304E8,
          "standardDeviation" : 1279570.217476358
        }, {
          "mean" : 2.39765337E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2.39765337E8,
          "min" : 2.39765337E8,
          "sum" : 2.39765337E8,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 2.397640945E8,
          "variance" : 2.7733217762789995E12,
          "n" : 3,
          "max" : 2.41903951E8,
          "min" : 2.37843061E8,
          "sum" : 7.192922835E8,
          "standardDeviation" : 1665329.3296759652
        }, {
          "mean" : 2.440768115E8,
          "variance" : 3.74440839510125E13,
          "n" : 2,
          "max" : 2.48403709E8,
          "min" : 2.39749914E8,
          "sum" : 4.88153623E8,
          "standardDeviation" : 6119157.127498239
        } ],
        "7" : [ {
          "mean" : 2.491059235E8,
          "variance" : 2.119786270285167E13,
          "n" : 3,
          "max" : 2.55687155E8,
          "min" : 2.45053573E8,
          "sum" : 7.473177705E8,
          "standardDeviation" : 4604113.671799565
        }, {
          "mean" : 2.46695008E8,
          "variance" : 8.72499364128E11,
          "n" : 2,
          "max" : 2.473555E8,
          "min" : 2.46034516E8,
          "sum" : 4.93390016E8,
          "standardDeviation" : 934076.7442389303
        } ],
        "8" : [ {
          "mean" : 2.400422795E8,
          "variance" : 3.675138083467674E12,
          "n" : 3,
          "max" : 2.42130134E8,
          "min" : 2.38308452E8,
          "sum" : 7.201268385E8,
          "standardDeviation" : 1917064.9658964805
        }, {
          "mean" : 2.410219925E8,
          "variance" : 4.78917205605E10,
          "n" : 2,
          "max" : 2.41176737E8,
          "min" : 2.40867248E8,
          "sum" : 4.82043985E8,
          "standardDeviation" : 218841.7706026434
        } ],
        "9" : [ {
          "mean" : 2.4204489175E8,
          "variance" : 6.621682239998917E12,
          "n" : 3,
          "max" : 2.45206748E8,
          "min" : 2.3993995E8,
          "sum" : 7.2613467525E8,
          "standardDeviation" : 2573262.9558595284
        }, {
          "mean" : 2.40278219E8,
          "variance" : 1.7905283237119998E12,
          "n" : 2,
          "max" : 2.41224403E8,
          "min" : 2.39332035E8,
          "sum" : 4.80556438E8,
          "standardDeviation" : 1338106.2453004245
        } ],
        "10" : [ {
          "mean" : 2.3965009425E8,
          "variance" : 2.9274357934424854E11,
          "n" : 3,
          "max" : 2.40182423E8,
          "min" : 2.3890893E8,
          "sum" : 7.1895028275E8,
          "standardDeviation" : 541057.8336409598
        }, {
          "mean" : 2.43484622E8,
          "variance" : 8.973313715858E12,
          "n" : 2,
          "max" : 2.45602795E8,
          "min" : 2.41366449E8,
          "sum" : 4.86969244E8,
          "standardDeviation" : 2995548.984052506
        } ],
        "11" : [ {
          "mean" : 2.3867197825E8,
          "variance" : 2.394688712896916E12,
          "n" : 3,
          "max" : 2.40381653E8,
          "min" : 2.36688403E8,
          "sum" : 7.1601593475E8,
          "standardDeviation" : 1547478.178488122
        }, {
          "mean" : 2.441308125E8,
          "variance" : 1.86322586770445E13,
          "n" : 2,
          "max" : 2.47183046E8,
          "min" : 2.41078579E8,
          "sum" : 4.88261625E8,
          "standardDeviation" : 4316510.0112295
        } ],
        "12" : [ {
          "mean" : 2.43950017E8,
          "variance" : 8.064070465097999E12,
          "n" : 3,
          "max" : 2.47438997E8,
          "min" : 2.40492614E8,
          "sum" : 7.31850051E8,
          "standardDeviation" : 2839730.7029185
        }, {
          "mean" : 2.421147495E8,
          "variance" : 2.2001957197605E12,
          "n" : 2,
          "max" : 2.43163605E8,
          "min" : 2.41065894E8,
          "sum" : 4.84229499E8,
          "standardDeviation" : 1483305.6730696138
        } ],
        "13" : [ {
          "mean" : 2.448186795E8,
          "variance" : 1.458333226302031E13,
          "n" : 3,
          "max" : 2.48686598E8,
          "min" : 2.41402957E8,
          "sum" : 7.344560385E8,
          "standardDeviation" : 3818812.9389929944
        }, {
          "mean" : 2.44478756E8,
          "variance" : 1.734139721205E13,
          "n" : 2,
          "max" : 2.47423361E8,
          "min" : 2.41534151E8,
          "sum" : 4.88957512E8,
          "standardDeviation" : 4164300.3268316276
        } ],
        "14" : [ {
          "mean" : 2.3993026775E8,
          "variance" : 5.697988930303605E12,
          "n" : 3,
          "max" : 2.42006985E8,
          "min" : 2.36742838E8,
          "sum" : 7.1979080325E8,
          "standardDeviation" : 2387046.067905604
        }, {
          "mean" : 2.385333345E8,
          "variance" : 6.711411128044499E12,
          "n" : 2,
          "max" : 2.40365193E8,
          "min" : 2.36701476E8,
          "sum" : 4.77066669E8,
          "standardDeviation" : 2590639.135048434
        } ],
        "15" : [ {
          "mean" : 2.44935196E8,
          "variance" : 2.1255656818637953E13,
          "n" : 3,
          "max" : 2.51804046E8,
          "min" : 2.41958073E8,
          "sum" : 7.34805588E8,
          "standardDeviation" : 4610385.755946888
        }, {
          "mean" : 2.43058054E8,
          "variance" : 1.6553912761800003E11,
          "n" : 2,
          "max" : 2.43345751E8,
          "min" : 2.42770357E8,
          "sum" : 4.86116108E8,
          "standardDeviation" : 406864.99925405235
        } ],
        "16" : [ {
          "mean" : 2.4300026175E8,
          "variance" : 1.9055547669979543E13,
          "n" : 3,
          "max" : 2.46578717E8,
          "min" : 2.37424915E8,
          "sum" : 7.2900078525E8,
          "standardDeviation" : 4365266.048018098
        }, {
          "mean" : 2.46083696E8,
          "variance" : 5.5015350580352E13,
          "n" : 2,
          "max" : 2.51328472E8,
          "min" : 2.4083892E8,
          "sum" : 4.92167392E8,
          "standardDeviation" : 7417233.350808912
        } ],
        "17" : [ {
          "mean" : 2.4281192225E8,
          "variance" : 1.9250516604922498E12,
          "n" : 3,
          "max" : 2.4391895E8,
          "min" : 2.40912273E8,
          "sum" : 7.2843576675E8,
          "standardDeviation" : 1387462.3095753808
        }, {
          "mean" : 2.436988455E8,
          "variance" : 4.215208289645E11,
          "n" : 2,
          "max" : 2.44157932E8,
          "min" : 2.43239759E8,
          "sum" : 4.87397691E8,
          "standardDeviation" : 649246.3546023959
        } ],
        "18" : [ {
          "mean" : 2.410119275E8,
          "variance" : 3.0663105114750005E12,
          "n" : 3,
          "max" : 2.43574379E8,
          "min" : 2.39719943E8,
          "sum" : 7.230357825E8,
          "standardDeviation" : 1751088.3791159715
        }, {
          "mean" : 2.4070723E8,
          "variance" : 5.74913645E9,
          "n" : 2,
          "max" : 2.40760845E8,
          "min" : 2.40653615E8,
          "sum" : 4.8141446E8,
          "standardDeviation" : 75823.06014663349
        } ],
        "19" : [ {
          "mean" : 2.4455744875E8,
          "variance" : 1.2187302082573604E13,
          "n" : 3,
          "max" : 2.49603936E8,
          "min" : 2.41560405E8,
          "sum" : 7.3367234625E8,
          "standardDeviation" : 3491031.664504578
        }, {
          "mean" : 2.40897763E8,
          "variance" : 8.973444577999999E11,
          "n" : 2,
          "max" : 2.41567593E8,
          "min" : 2.40227933E8,
          "sum" : 4.81795526E8,
          "standardDeviation" : 947282.6704843702
        } ],
        "20" : [ {
          "mean" : 2.4256424875E8,
          "variance" : 1.836044077480917E12,
          "n" : 3,
          "max" : 2.43852786E8,
          "min" : 2.40654802E8,
          "sum" : 7.2769274625E8,
          "standardDeviation" : 1355007.0396425684
        }, {
          "mean" : 2.42520337E8,
          "variance" : 1.5174176908178002E13,
          "n" : 2,
          "max" : 2.45274804E8,
          "min" : 2.3976587E8,
          "sum" : 4.85040674E8,
          "standardDeviation" : 3895404.588509132
        } ],
        "21" : [ {
          "mean" : 2.4222643E8,
          "variance" : 5.450053519061999E12,
          "n" : 3,
          "max" : 2.44385923E8,
          "min" : 2.38970686E8,
          "sum" : 7.2667929E8,
          "standardDeviation" : 2334534.968481303
        }, {
          "mean" : 2.43231585E8,
          "variance" : 5.65084426418E11,
          "n" : 2,
          "max" : 2.43763132E8,
          "min" : 2.42700038E8,
          "sum" : 4.8646317E8,
          "standardDeviation" : 751720.9764387315
        } ],
        "22" : [ {
          "mean" : 2.4203683675E8,
          "variance" : 2.0986958997789165E12,
          "n" : 3,
          "max" : 2.43910125E8,
          "min" : 2.40485831E8,
          "sum" : 7.2611051025E8,
          "standardDeviation" : 1448687.6474171085
        }, {
          "mean" : 2.405936685E8,
          "variance" : 5.2189858581125E12,
          "n" : 2,
          "max" : 2.42209061E8,
          "min" : 2.38978276E8,
          "sum" : 4.81187337E8,
          "standardDeviation" : 2284509.98205578
        } ],
        "23" : [ {
          "mean" : 2.4338410475E8,
          "variance" : 4.557741236180918E12,
          "n" : 3,
          "max" : 2.45023194E8,
          "min" : 2.4050741E8,
          "sum" : 7.3015231425E8,
          "standardDeviation" : 2134886.7033594353
        }, {
          "mean" : 2.4216652E8,
          "variance" : 3.8629588839200006E11,
          "n" : 2,
          "max" : 2.42606006E8,
          "min" : 2.41727034E8,
          "sum" : 4.8433304E8,
          "standardDeviation" : 621527.0616731021
        } ],
        "24" : [ {
          "mean" : 2.4381342575E8,
          "variance" : 1.0394270548809167E12,
          "n" : 3,
          "max" : 2.45147687E8,
          "min" : 2.4273889E8,
          "sum" : 7.3144027725E8,
          "standardDeviation" : 1019522.9545630234
        }, {
          "mean" : 2.47383734E8,
          "variance" : 5.0103633644082E13,
          "n" : 2,
          "max" : 2.52388913E8,
          "min" : 2.42378555E8,
          "sum" : 4.94767468E8,
          "standardDeviation" : 7078392.023905005
        } ],
        "25" : [ {
          "mean" : 2.5052493175E8,
          "variance" : 8.331278276136897E12,
          "n" : 3,
          "max" : 2.54185675E8,
          "min" : 2.47789319E8,
          "sum" : 7.5157479525E8,
          "standardDeviation" : 2886395.3776530507
        }, {
          "mean" : 2.480957155E8,
          "variance" : 4.0569780031249994E11,
          "n" : 2,
          "max" : 2.48546103E8,
          "min" : 2.47645328E8,
          "sum" : 4.96191431E8,
          "standardDeviation" : 636944.1108233123
        } ],
        "26" : [ {
          "mean" : 2.3801249225E8,
          "variance" : 4.655239613252905E12,
          "n" : 3,
          "max" : 2.40719309E8,
          "min" : 2.36209742E8,
          "sum" : 7.1403747675E8,
          "standardDeviation" : 2157600.4294708753
        }, {
          "mean" : 2.443315665E8,
          "variance" : 4.757600327946051E13,
          "n" : 2,
          "max" : 2.49208861E8,
          "min" : 2.39454272E8,
          "sum" : 4.88663133E8,
          "standardDeviation" : 6897536.029587704
        } ],
        "27" : [ {
          "mean" : 2.4330937575E8,
          "variance" : 5.680479446494917E12,
          "n" : 3,
          "max" : 2.46200868E8,
          "min" : 2.4125403E8,
          "sum" : 7.2992812725E8,
          "standardDeviation" : 2383375.641080297
        }, {
          "mean" : 2.441820125E8,
          "variance" : 1.2763913470245002E12,
          "n" : 2,
          "max" : 2.44980884E8,
          "min" : 2.43383141E8,
          "sum" : 4.88364025E8,
          "standardDeviation" : 1129774.909893338
        } ],
        "28" : [ {
          "mean" : 2.42727874E8,
          "variance" : 7.752131433755317E12,
          "n" : 3,
          "max" : 2.46519174E8,
          "min" : 2.40173603E8,
          "sum" : 7.28183622E8,
          "standardDeviation" : 2784264.971901079
        }, {
          "mean" : 2.403367985E8,
          "variance" : 1.2084636473045002E12,
          "n" : 2,
          "max" : 2.41114122E8,
          "min" : 2.39559475E8,
          "sum" : 4.80673597E8,
          "standardDeviation" : 1099301.4360513226
        } ],
        "29" : [ {
          "mean" : 2.4617185E8,
          "variance" : 1.082209766397E13,
          "n" : 3,
          "max" : 2.50152657E8,
          "min" : 2.42750088E8,
          "sum" : 7.3851555E8,
          "standardDeviation" : 3289695.6795378504
        }, {
          "mean" : 2.427338315E8,
          "variance" : 2.5727807173445005E12,
          "n" : 2,
          "max" : 2.43868023E8,
          "min" : 2.4159964E8,
          "sum" : 4.85467663E8,
          "standardDeviation" : 1603989.0016282843
        } ]
      }
    },
    "children" : [ {
      "call" : "org.gradoop.GradoopTest#validateBasicGraphEdges",
      "kiekerPattern" : "private void org.gradoop.GradoopTest.validateBasicGraphEdges(java.lang.Iterable,int,long)",
      "otherKiekerPattern" : "private void org.gradoop.GradoopTest.validateBasicGraphEdges(java.util.List,int,long)",
      "module" : "gradoop-core",
      "name" : "GradoopTest#validateBasicGraphEdges",
      "key" : "org.gradoop.GradoopTest.validateBasicGraphEdges_Iterable_int_long",
      "otherKey" : "org.gradoop.GradoopTest.validateBasicGraphEdges_List_int_long",
      "parent" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
      "color" : "#00FF00",
      "statistic" : {
        "meanOld" : 4.844744137033333E7,
        "meanCurrent" : 4.08691962289168E7,
        "deviationOld" : 479039.5386586077,
        "deviationCurrent" : 500653.67131732084,
        "vms" : 30,
        "callsOld" : 750,
        "calls" : 1050,
        "tvalue" : 59.9029911595209,
        "change" : true
      },
      "hasSourceChange" : true,
      "state" : "FASTER",
      "inVMDeviationPredecessor" : 541246.3161471747,
      "inVMDeviation" : 1773076.2475001344,
      "ess" : 2,
      "values" : [ 4.149511150816326E7, 4.0072041222448975E7, 4.017014439340659E7, 4.05864561122449E7, 4.05770578122449E7, 4.01002691E7, 4.101534380816326E7, 4.159124306530613E7, 4.0779965017582424E7, 4.097661358901099E7, 4.137483617755102E7, 4.006121395824175E7, 4.0962538110204086E7, 4.142950487142857E7, 4.177534984285714E7, 4.0847486306122445E7, 4.086860118367348E7, 4.1230113846938774E7, 4.108187243673469E7, 4.094645567142857E7, 4.071876072653061E7, 4.0998460615384616E7, 4.1236034675510205E7, 4.0583703026530616E7, 4.141644199591837E7, 4.096037036734694E7, 3.987974054081633E7, 4.078452893469387E7, 4.02147826E7, 4.134084535102041E7 ],
      "valuesPredecessor" : [ 4.8994373096666664E7, 4.74794026E7, 4.793922614666666E7, 4.847494692333334E7, 4.800605679333333E7, 4.7770264903333336E7, 4.863760363E7, 4.925402267666666E7, 4.806603336E7, 4.813289389E7, 4.857186176333333E7, 4.7715594153333336E7, 4.834426091666666E7, 4.885080600666666E7, 4.801193097E7, 4.867691264333333E7, 4.843164646E7, 4.864668844666667E7, 4.845563074E7, 4.834190128666666E7, 4.857472571333334E7, 4.814407827333334E7, 4.848679313666666E7, 4.838620979E7, 4.895270000666666E7, 4.96145862E7, 4.810017002E7, 4.915099448E7, 4.832209007E7, 4.888883601333334E7 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 4.0105565642857134E7,
            "variance" : 1.5000451524866947E14,
            "n" : 9,
            "max" : 5.7665683E7,
            "min" : 823810.0,
            "sum" : 3.609500907857142E8,
            "standardDeviation" : 1.2247633046783753E7
          }, {
            "mean" : 4.051233642857143E7,
            "variance" : 4.320448240607253E11,
            "n" : 14,
            "max" : 4.192722E7,
            "min" : 3.9869425E7,
            "sum" : 5.6717271E8,
            "standardDeviation" : 657301.1669400301
          }, {
            "mean" : 4.3683841833333336E7,
            "variance" : 2.8861881740230504E13,
            "n" : 12,
            "max" : 5.4734778E7,
            "min" : 3.9685668E7,
            "sum" : 5.24206102E8,
            "standardDeviation" : 5372325.543024222
          } ],
          "1" : [ {
            "mean" : 3.982413564285715E7,
            "variance" : 1.822018494560337E14,
            "n" : 9,
            "max" : 6.8152979E7,
            "min" : 837170.0,
            "sum" : 3.584172207857143E8,
            "standardDeviation" : 1.3498216528713476E7
          }, {
            "mean" : 3.9408503071428575E7,
            "variance" : 7.497023016945613E10,
            "n" : 14,
            "max" : 3.9995479E7,
            "min" : 3.9023647E7,
            "sum" : 5.51719043E8,
            "standardDeviation" : 273806.92133227043
          }, {
            "mean" : 4.103209824999999E7,
            "variance" : 4.405649490520938E12,
            "n" : 12,
            "max" : 4.6238706E7,
            "min" : 3.9105324E7,
            "sum" : 4.923851789999999E8,
            "standardDeviation" : 2098963.9088180955
          } ],
          "2" : [ {
            "mean" : 4.072247184615385E7,
            "variance" : 2.522381210073158E14,
            "n" : 8,
            "max" : 7.8002994E7,
            "min" : 1173394.0,
            "sum" : 3.257797747692308E8,
            "standardDeviation" : 1.588200620221878E7
          }, {
            "mean" : 3.933099164285715E7,
            "variance" : 1.9176132073009552E11,
            "n" : 14,
            "max" : 4.0084516E7,
            "min" : 3.8815492E7,
            "sum" : 5.506338830000001E8,
            "standardDeviation" : 437905.60710054345
          }, {
            "mean" : 4.073395353846154E7,
            "variance" : 5.704380362540266E12,
            "n" : 13,
            "max" : 4.5173686E7,
            "min" : 3.8693197E7,
            "sum" : 5.2954139600000006E8,
            "standardDeviation" : 2388384.4670697944
          } ],
          "3" : [ {
            "mean" : 3.934548821428572E7,
            "variance" : 1.690292407674739E14,
            "n" : 9,
            "max" : 6.555951E7,
            "min" : 843322.0,
            "sum" : 3.5410939392857146E8,
            "standardDeviation" : 1.300112459625989E7
          }, {
            "mean" : 4.0066291428571425E7,
            "variance" : 4.344583828721953E12,
            "n" : 14,
            "max" : 4.7088468E7,
            "min" : 3.8989621E7,
            "sum" : 5.6092808E8,
            "standardDeviation" : 2084366.5293613677
          }, {
            "mean" : 4.2124040833333336E7,
            "variance" : 1.5456474682102506E13,
            "n" : 12,
            "max" : 4.9931209E7,
            "min" : 3.9044027E7,
            "sum" : 5.0548849E8,
            "standardDeviation" : 3931472.3300695512
          } ],
          "4" : [ {
            "mean" : 3.903032171428572E7,
            "variance" : 1.4516401384867453E14,
            "n" : 9,
            "max" : 5.8562363E7,
            "min" : 1134810.0,
            "sum" : 3.5127289542857146E8,
            "standardDeviation" : 1.2048402958428744E7
          }, {
            "mean" : 3.9896946428571425E7,
            "variance" : 4.153266611011855E11,
            "n" : 14,
            "max" : 4.1103052E7,
            "min" : 3.8997348E7,
            "sum" : 5.5855725E8,
            "standardDeviation" : 644458.424649089
          }, {
            "mean" : 4.253057316666667E7,
            "variance" : 1.918562291240724E13,
            "n" : 12,
            "max" : 5.1306409E7,
            "min" : 3.9369166E7,
            "sum" : 5.1036687800000006E8,
            "standardDeviation" : 4380139.599648308
          } ],
          "5" : [ {
            "mean" : 3.94196005E7,
            "variance" : 1.4284936609030056E14,
            "n" : 9,
            "max" : 5.7129403E7,
            "min" : 1166778.0,
            "sum" : 3.547764045E8,
            "standardDeviation" : 1.195196076341872E7
          }, {
            "mean" : 3.93758455E7,
            "variance" : 9.061827067780743E10,
            "n" : 14,
            "max" : 4.0004964E7,
            "min" : 3.8992564E7,
            "sum" : 5.51261837E8,
            "standardDeviation" : 301028.68746650615
          }, {
            "mean" : 4.1455931416666664E7,
            "variance" : 1.3341581981490457E13,
            "n" : 12,
            "max" : 4.8851294E7,
            "min" : 3.8368737E7,
            "sum" : 4.97471177E8,
            "standardDeviation" : 3652613.0347315
          } ],
          "6" : [ {
            "mean" : 3.9962389142857134E7,
            "variance" : 1.7968589448718984E14,
            "n" : 9,
            "max" : 6.7353511E7,
            "min" : 857910.0,
            "sum" : 3.596615022857142E8,
            "standardDeviation" : 1.3404696732384132E7
          }, {
            "mean" : 3.981854614285714E7,
            "variance" : 5.726171680643987E10,
            "n" : 14,
            "max" : 4.0177284E7,
            "min" : 3.9428338E7,
            "sum" : 5.57459646E8,
            "standardDeviation" : 239294.20554296728
          }, {
            "mean" : 4.320132375E7,
            "variance" : 4.807478202496492E13,
            "n" : 12,
            "max" : 6.4270058E7,
            "min" : 3.948591E7,
            "sum" : 5.18415885E8,
            "standardDeviation" : 6933598.05764402
          } ],
          "7" : [ {
            "mean" : 4.042236114285714E7,
            "variance" : 1.6515336321020338E14,
            "n" : 9,
            "max" : 6.3612012E7,
            "min" : 1186709.0,
            "sum" : 3.6380125028571427E8,
            "standardDeviation" : 1.2851200847010499E7
          }, {
            "mean" : 4.086503757142857E7,
            "variance" : 4.898140702501092E11,
            "n" : 14,
            "max" : 4.2735829E7,
            "min" : 4.0142908E7,
            "sum" : 5.72110526E8,
            "standardDeviation" : 699867.1804350517
          }, {
            "mean" : 4.331514425000001E7,
            "variance" : 2.0384289739814566E13,
            "n" : 12,
            "max" : 5.3669728E7,
            "min" : 4.0338665E7,
            "sum" : 5.197817310000001E8,
            "standardDeviation" : 4514896.426255487
          } ],
          "8" : [ {
            "mean" : 4.017611507692308E7,
            "variance" : 1.9133364847363238E14,
            "n" : 8,
            "max" : 6.7440435E7,
            "min" : 1328652.0,
            "sum" : 3.2140892061538464E8,
            "standardDeviation" : 1.3832340672266295E7
          }, {
            "mean" : 3.9526572400000006E7,
            "variance" : 1.3969877708939923E11,
            "n" : 15,
            "max" : 4.0213877E7,
            "min" : 3.9056365E7,
            "sum" : 5.928985860000001E8,
            "standardDeviation" : 373762.995880276
          }, {
            "mean" : 4.2749272416666664E7,
            "variance" : 2.09925149265459E13,
            "n" : 12,
            "max" : 5.13215E7,
            "min" : 3.9018168E7,
            "sum" : 5.12991269E8,
            "standardDeviation" : 4581758.93370067
          } ],
          "9" : [ {
            "mean" : 4.012471207692308E7,
            "variance" : 2.021770292065461E14,
            "n" : 8,
            "max" : 6.9338836E7,
            "min" : 1241945.0,
            "sum" : 3.2099769661538464E8,
            "standardDeviation" : 1.421889690540536E7
          }, {
            "mean" : 3.966962126666666E7,
            "variance" : 2.443620680446361E11,
            "n" : 15,
            "max" : 4.1002356E7,
            "min" : 3.9106142E7,
            "sum" : 5.950443189999999E8,
            "standardDeviation" : 494329.9182172126
          }, {
            "mean" : 4.3178288333333336E7,
            "variance" : 3.7790932638568414E13,
            "n" : 12,
            "max" : 5.9712006E7,
            "min" : 3.9036275E7,
            "sum" : 5.1813946E8,
            "standardDeviation" : 6147433.012125338
          } ],
          "10" : [ {
            "mean" : 4.032866435714286E7,
            "variance" : 1.722549346920481E14,
            "n" : 9,
            "max" : 6.5658806E7,
            "min" : 1281015.0,
            "sum" : 3.6295797921428573E8,
            "standardDeviation" : 1.3124592743854877E7
          }, {
            "mean" : 4.018829842857143E7,
            "variance" : 2.664577617844171E11,
            "n" : 14,
            "max" : 4.1736525E7,
            "min" : 3.9786311E7,
            "sum" : 5.62636178E8,
            "standardDeviation" : 516195.468581832
          }, {
            "mean" : 4.3543759083333336E7,
            "variance" : 3.8707344479067555E13,
            "n" : 12,
            "max" : 6.2163688E7,
            "min" : 3.9885689E7,
            "sum" : 5.22525109E8,
            "standardDeviation" : 6221522.681712858
          } ],
          "11" : [ {
            "mean" : 4.0138755692307696E7,
            "variance" : 2.061291263626999E14,
            "n" : 8,
            "max" : 6.6958136E7,
            "min" : 873593.0,
            "sum" : 3.2111004553846157E8,
            "standardDeviation" : 1.4357197719704911E7
          }, {
            "mean" : 3.9192342599999994E7,
            "variance" : 4.600580054585439E11,
            "n" : 15,
            "max" : 4.0855251E7,
            "min" : 3.8462119E7,
            "sum" : 5.878851389999999E8,
            "standardDeviation" : 678275.7591559232
          }, {
            "mean" : 4.109560866666667E7,
            "variance" : 8.121563899318245E12,
            "n" : 12,
            "max" : 4.6369959E7,
            "min" : 3.8631254E7,
            "sum" : 4.9314730400000006E8,
            "standardDeviation" : 2849835.767078209
          } ],
          "12" : [ {
            "mean" : 3.9926197428571425E7,
            "variance" : 1.5683970973587103E14,
            "n" : 9,
            "max" : 6.1546724E7,
            "min" : 1027128.0,
            "sum" : 3.593357768571428E8,
            "standardDeviation" : 1.2523566174850957E7
          }, {
            "mean" : 4.050230000000001E7,
            "variance" : 4.682456979830806E10,
            "n" : 14,
            "max" : 4.0883988E7,
            "min" : 4.0159555E7,
            "sum" : 5.670322000000001E8,
            "standardDeviation" : 216389.8560429949
          }, {
            "mean" : 4.2276738083333336E7,
            "variance" : 1.6799897743113719E13,
            "n" : 12,
            "max" : 5.4188394E7,
            "min" : 3.9611642E7,
            "sum" : 5.07320857E8,
            "standardDeviation" : 4098767.83230201
          } ],
          "13" : [ {
            "mean" : 3.96263375E7,
            "variance" : 1.5245962024630584E14,
            "n" : 9,
            "max" : 6.0117817E7,
            "min" : 785346.0,
            "sum" : 3.566370375E8,
            "standardDeviation" : 1.2347453998549897E7
          }, {
            "mean" : 4.00480925E7,
            "variance" : 2.2387858671426987E11,
            "n" : 14,
            "max" : 4.1212197E7,
            "min" : 3.9414754E7,
            "sum" : 5.60673295E8,
            "standardDeviation" : 473158.0990686621
          }, {
            "mean" : 4.4393528166666664E7,
            "variance" : 6.841597343329614E13,
            "n" : 12,
            "max" : 6.7672747E7,
            "min" : 3.9559013E7,
            "sum" : 5.32722338E8,
            "standardDeviation" : 8271394.890421817
          } ],
          "14" : [ {
            "mean" : 4.01846285E7,
            "variance" : 1.803617916315953E14,
            "n" : 9,
            "max" : 6.83119E7,
            "min" : 1296054.0,
            "sum" : 3.616616565E8,
            "standardDeviation" : 1.3429884274691101E7
          }, {
            "mean" : 4.006827792857142E7,
            "variance" : 6.891731181689904E11,
            "n" : 14,
            "max" : 4.2750611E7,
            "min" : 3.9392463E7,
            "sum" : 5.609558909999999E8,
            "standardDeviation" : 830164.5127135888
          }, {
            "mean" : 4.495997474999999E7,
            "variance" : 6.083999445311841E13,
            "n" : 12,
            "max" : 6.4443507E7,
            "min" : 3.9588044E7,
            "sum" : 5.395196969999999E8,
            "standardDeviation" : 7799999.644430659
          } ],
          "15" : [ {
            "mean" : 4.016642485714285E7,
            "variance" : 1.821258716080255E14,
            "n" : 9,
            "max" : 6.8608088E7,
            "min" : 1170811.0,
            "sum" : 3.614978237142857E8,
            "standardDeviation" : 1.3495401869082132E7
          }, {
            "mean" : 3.963897985714285E7,
            "variance" : 2.11139715857825E11,
            "n" : 14,
            "max" : 4.087555E7,
            "min" : 3.9223273E7,
            "sum" : 5.549457179999999E8,
            "standardDeviation" : 459499.4187785497
          }, {
            "mean" : 4.2768206583333336E7,
            "variance" : 3.358213212980299E13,
            "n" : 12,
            "max" : 5.6173106E7,
            "min" : 3.9132686E7,
            "sum" : 5.13218479E8,
            "standardDeviation" : 5795009.243288831
          } ],
          "16" : [ {
            "mean" : 3.945653971428572E7,
            "variance" : 1.5636835407825038E14,
            "n" : 9,
            "max" : 6.1591992E7,
            "min" : 1265840.0,
            "sum" : 3.5510885742857146E8,
            "standardDeviation" : 1.2504733266977364E7
          }, {
            "mean" : 3.957538400000001E7,
            "variance" : 1.0658143295000137E11,
            "n" : 14,
            "max" : 4.0236473E7,
            "min" : 3.9169459E7,
            "sum" : 5.540553760000001E8,
            "standardDeviation" : 326468.1193470526
          }, {
            "mean" : 4.3436400666666664E7,
            "variance" : 6.522050423992082E13,
            "n" : 12,
            "max" : 6.4152182E7,
            "min" : 3.9014003E7,
            "sum" : 5.21236808E8,
            "standardDeviation" : 8075921.262612756
          } ],
          "17" : [ {
            "mean" : 3.923007907142857E7,
            "variance" : 1.5586858938271428E14,
            "n" : 9,
            "max" : 6.2397295E7,
            "min" : 1290885.0,
            "sum" : 3.530707116428571E8,
            "standardDeviation" : 1.248473425358803E7
          }, {
            "mean" : 3.963839971428572E7,
            "variance" : 1.673453437157597E11,
            "n" : 14,
            "max" : 4.0706339E7,
            "min" : 3.9161614E7,
            "sum" : 5.54937596E8,
            "standardDeviation" : 409078.6522366569
          }, {
            "mean" : 4.458713975E7,
            "variance" : 9.49759245717542E13,
            "n" : 12,
            "max" : 6.5357854E7,
            "min" : 3.8490989E7,
            "sum" : 5.35045677E8,
            "standardDeviation" : 9745559.223141287
          } ],
          "18" : [ {
            "mean" : 3.9195947142857134E7,
            "variance" : 1.4461705823667356E14,
            "n" : 9,
            "max" : 5.8532298E7,
            "min" : 1323791.0,
            "sum" : 3.527635242857142E8,
            "standardDeviation" : 1.2025683275251912E7
          }, {
            "mean" : 4.010131492857143E7,
            "variance" : 2.613009427006225E12,
            "n" : 14,
            "max" : 4.567139E7,
            "min" : 3.9358878E7,
            "sum" : 5.61418409E8,
            "standardDeviation" : 1616480.5680880377
          }, {
            "mean" : 4.3640300166666664E7,
            "variance" : 4.521499509551688E13,
            "n" : 12,
            "max" : 6.1425657E7,
            "min" : 3.9333407E7,
            "sum" : 5.23683602E8,
            "standardDeviation" : 6724209.626083714
          } ],
          "19" : [ {
            "mean" : 3.937054349999999E7,
            "variance" : 1.6027249101578172E14,
            "n" : 9,
            "max" : 6.2412622E7,
            "min" : 789622.0,
            "sum" : 3.5433489149999994E8,
            "standardDeviation" : 1.2659877211718198E7
          }, {
            "mean" : 3.972289542857143E7,
            "variance" : 2.0898054202164752E11,
            "n" : 14,
            "max" : 4.0288137E7,
            "min" : 3.9028632E7,
            "sum" : 5.56120536E8,
            "standardDeviation" : 457143.89640642423
          }, {
            "mean" : 4.355587675E7,
            "variance" : 5.962589780531347E13,
            "n" : 12,
            "max" : 5.9863264E7,
            "min" : 3.840076E7,
            "sum" : 5.22670521E8,
            "standardDeviation" : 7721780.740561951
          } ],
          "20" : [ {
            "mean" : 3.991744371428571E7,
            "variance" : 1.8392292551244084E14,
            "n" : 9,
            "max" : 6.9075739E7,
            "min" : 1086717.0,
            "sum" : 3.592569934285714E8,
            "standardDeviation" : 1.3561818665372312E7
          }, {
            "mean" : 3.9765656928571425E7,
            "variance" : 1.2698331829068669E11,
            "n" : 14,
            "max" : 4.0356228E7,
            "min" : 3.9114077E7,
            "sum" : 5.56719197E8,
            "standardDeviation" : 356347.1878529234
          }, {
            "mean" : 4.243170291666667E7,
            "variance" : 2.5534962517934086E13,
            "n" : 12,
            "max" : 5.4869604E7,
            "min" : 3.8743769E7,
            "sum" : 5.0918043500000006E8,
            "standardDeviation" : 5053213.0885144835
          } ],
          "21" : [ {
            "mean" : 4.0380795692307696E7,
            "variance" : 2.1274946090379938E14,
            "n" : 8,
            "max" : 7.1506566E7,
            "min" : 1364841.0,
            "sum" : 3.2304636553846157E8,
            "standardDeviation" : 1.4585933665823363E7
          }, {
            "mean" : 3.9942338428571425E7,
            "variance" : 2.1947641318795633E11,
            "n" : 14,
            "max" : 4.0771581E7,
            "min" : 3.9399983E7,
            "sum" : 5.59192738E8,
            "standardDeviation" : 468483.09808141034
          }, {
            "mean" : 4.2515924461538464E7,
            "variance" : 4.360252146828559E13,
            "n" : 13,
            "max" : 6.3826478E7,
            "min" : 3.9092439E7,
            "sum" : 5.52707018E8,
            "standardDeviation" : 6603220.537607811
          } ],
          "22" : [ {
            "mean" : 3.983497607142857E7,
            "variance" : 1.7412366526526353E14,
            "n" : 9,
            "max" : 6.5877224E7,
            "min" : 1251025.0,
            "sum" : 3.585147846428571E8,
            "standardDeviation" : 1.3195592645473091E7
          }, {
            "mean" : 3.969610707142858E7,
            "variance" : 8.768374491283992E10,
            "n" : 14,
            "max" : 4.0520156E7,
            "min" : 3.9275753E7,
            "sum" : 5.557454990000001E8,
            "standardDeviation" : 296114.4118627797
          }, {
            "mean" : 4.408341083333333E7,
            "variance" : 6.0615381692449414E13,
            "n" : 12,
            "max" : 6.2076252E7,
            "min" : 3.8740072E7,
            "sum" : 5.2900092999999994E8,
            "standardDeviation" : 7785588.076211675
          } ],
          "23" : [ {
            "mean" : 3.957582821428572E7,
            "variance" : 1.6363083447130066E14,
            "n" : 9,
            "max" : 6.3868098E7,
            "min" : 1290908.0,
            "sum" : 3.5618245392857146E8,
            "standardDeviation" : 1.2791826862153063E7
          }, {
            "mean" : 3.999694735714286E7,
            "variance" : 3.9682114765286194E11,
            "n" : 14,
            "max" : 4.1460037E7,
            "min" : 3.9246023E7,
            "sum" : 5.59957263E8,
            "standardDeviation" : 629937.4156635419
          }, {
            "mean" : 4.202415741666667E7,
            "variance" : 8.713598043192069E12,
            "n" : 12,
            "max" : 4.7801799E7,
            "min" : 3.9516213E7,
            "sum" : 5.0428988900000006E8,
            "standardDeviation" : 2951880.42494815
          } ],
          "24" : [ {
            "mean" : 3.9818293428571425E7,
            "variance" : 1.6960667462174797E14,
            "n" : 9,
            "max" : 6.5107233E7,
            "min" : 809093.0,
            "sum" : 3.583646408571428E8,
            "standardDeviation" : 1.302331273608017E7
          }, {
            "mean" : 4.025133735714286E7,
            "variance" : 1.4716161280486255E11,
            "n" : 14,
            "max" : 4.0983941E7,
            "min" : 3.9705852E7,
            "sum" : 5.63518723E8,
            "standardDeviation" : 383616.491831181
          }, {
            "mean" : 4.397434216666667E7,
            "variance" : 7.129029264208598E13,
            "n" : 12,
            "max" : 6.686585E7,
            "min" : 3.8996094E7,
            "sum" : 5.2769210600000006E8,
            "standardDeviation" : 8443357.900864204
          } ],
          "25" : [ {
            "mean" : 3.9941418428571425E7,
            "variance" : 1.9403897067986997E14,
            "n" : 9,
            "max" : 7.129444E7,
            "min" : 1173112.0,
            "sum" : 3.594727658571428E8,
            "standardDeviation" : 1.3929787172813157E7
          }, {
            "mean" : 3.959953378571428E7,
            "variance" : 1.0764725532340273E12,
            "n" : 14,
            "max" : 4.2644215E7,
            "min" : 3.8724069E7,
            "sum" : 5.54393473E8,
            "standardDeviation" : 1037531.9528737548
          }, {
            "mean" : 4.3312227E7,
            "variance" : 4.842893778238291E13,
            "n" : 12,
            "max" : 5.5039485E7,
            "min" : 3.872383E7,
            "sum" : 5.19746724E8,
            "standardDeviation" : 6959090.298478883
          } ],
          "26" : [ {
            "mean" : 3.9119892214285724E7,
            "variance" : 1.4657790570951275E14,
            "n" : 9,
            "max" : 5.8498988E7,
            "min" : 897464.0,
            "sum" : 3.520790299285715E8,
            "standardDeviation" : 1.2106936264369808E7
          }, {
            "mean" : 3.9233036333333336E7,
            "variance" : 5.0870586686666626E10,
            "n" : 15,
            "max" : 3.9772964E7,
            "min" : 3.8966589E7,
            "sum" : 5.88495545E8,
            "standardDeviation" : 225545.0879240482
          }, {
            "mean" : 4.1383304E7,
            "variance" : 1.0926325345794002E13,
            "n" : 11,
            "max" : 4.8967825E7,
            "min" : 3.9174392E7,
            "sum" : 4.55216344E8,
            "standardDeviation" : 3305499.258174777
          } ],
          "27" : [ {
            "mean" : 3.9446647857142866E7,
            "variance" : 1.4512669048691275E14,
            "n" : 9,
            "max" : 5.8790647E7,
            "min" : 1241862.0,
            "sum" : 3.550198307142858E8,
            "standardDeviation" : 1.2046853966364527E7
          }, {
            "mean" : 4.0103187285714276E7,
            "variance" : 1.3956248575145047E11,
            "n" : 14,
            "max" : 4.11532E7,
            "min" : 3.9636002E7,
            "sum" : 5.614446219999999E8,
            "standardDeviation" : 373580.62818011653
          }, {
            "mean" : 4.258283833333333E7,
            "variance" : 1.8392825274740062E13,
            "n" : 12,
            "max" : 5.2247732E7,
            "min" : 3.9841701E7,
            "sum" : 5.1099405999999994E8,
            "standardDeviation" : 4288685.7281386405
          } ],
          "28" : [ {
            "mean" : 3.9683563E7,
            "variance" : 1.6381252318126306E14,
            "n" : 9,
            "max" : 6.3266266E7,
            "min" : 811845.0,
            "sum" : 3.57152067E8,
            "standardDeviation" : 1.2798926641764265E7
          }, {
            "mean" : 3.989819857142857E7,
            "variance" : 1.3415319560318665E11,
            "n" : 14,
            "max" : 4.0988306E7,
            "min" : 3.9570851E7,
            "sum" : 5.5857478E8,
            "standardDeviation" : 366269.29383062763
          }, {
            "mean" : 4.098254533333334E7,
            "variance" : 5.072645822611678E12,
            "n" : 12,
            "max" : 4.6294523E7,
            "min" : 3.9137385E7,
            "sum" : 4.917905440000001E8,
            "standardDeviation" : 2252253.4987455737
          } ],
          "29" : [ {
            "mean" : 4.004993514285714E7,
            "variance" : 1.7852058856689003E14,
            "n" : 9,
            "max" : 6.7196263E7,
            "min" : 845574.0,
            "sum" : 3.6044941628571427E8,
            "standardDeviation" : 1.3361159701421507E7
          }, {
            "mean" : 3.990938021428572E7,
            "variance" : 2.9873145261710455E11,
            "n" : 14,
            "max" : 4.1283221E7,
            "min" : 3.9234671E7,
            "sum" : 5.58731323E8,
            "standardDeviation" : 546563.3107125876
          }, {
            "mean" : 4.397907066666667E7,
            "variance" : 7.067170776924517E13,
            "n" : 12,
            "max" : 6.4105105E7,
            "min" : 3.875265E7,
            "sum" : 5.2774884800000006E8,
            "standardDeviation" : 8406646.642344685
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 5.0151446916666664E7,
            "variance" : 3.726995271200187E14,
            "n" : 7,
            "max" : 9.178668E7,
            "min" : 2794079.0,
            "sum" : 3.510601284166666E8,
            "standardDeviation" : 1.93054274006047E7
          }, {
            "mean" : 4.86623215E7,
            "variance" : 3.1954132206863696E11,
            "n" : 12,
            "max" : 4.9467681E7,
            "min" : 4.7731309E7,
            "sum" : 5.83947858E8,
            "standardDeviation" : 565279.8617221712
          }, {
            "mean" : 4.8308556833333336E7,
            "variance" : 1.9285054588176715E11,
            "n" : 6,
            "max" : 4.9020885E7,
            "min" : 4.7872037E7,
            "sum" : 2.89851341E8,
            "standardDeviation" : 439147.52177573217
          } ],
          "1" : [ {
            "mean" : 4.910292200000001E7,
            "variance" : 1.6278153741795472E14,
            "n" : 7,
            "max" : 8.1164598E7,
            "min" : 2.3195462E7,
            "sum" : 3.4372045400000006E8,
            "standardDeviation" : 1.2758586811161913E7
          }, {
            "mean" : 4.6881100416666664E7,
            "variance" : 4.522055402806278E11,
            "n" : 12,
            "max" : 4.8150096E7,
            "min" : 4.5641998E7,
            "sum" : 5.62573205E8,
            "standardDeviation" : 672462.2965495001
          }, {
            "mean" : 4.6781901E7,
            "variance" : 4.201005641600011E11,
            "n" : 6,
            "max" : 4.7506311E7,
            "min" : 4.5750743E7,
            "sum" : 2.80691406E8,
            "standardDeviation" : 648151.6521308891
          } ],
          "2" : [ {
            "mean" : 4.7881453666666664E7,
            "variance" : 2.5180776939708397E14,
            "n" : 7,
            "max" : 7.1862976E7,
            "min" : 2627017.0,
            "sum" : 3.351701756666666E8,
            "standardDeviation" : 1.5868452016409287E7
          }, {
            "mean" : 4.829231724999999E7,
            "variance" : 6.793580197228206E12,
            "n" : 12,
            "max" : 5.6372764E7,
            "min" : 4.7016846E7,
            "sum" : 5.795078069999999E8,
            "standardDeviation" : 2606449.7304241657
          }, {
            "mean" : 4.7300445166666664E7,
            "variance" : 2.792015565873663E11,
            "n" : 6,
            "max" : 4.8113918E7,
            "min" : 4.6850672E7,
            "sum" : 2.83802671E8,
            "standardDeviation" : 528395.265485381
          } ],
          "3" : [ {
            "mean" : 4.9403556583333336E7,
            "variance" : 3.092015274783144E14,
            "n" : 7,
            "max" : 8.3342722E7,
            "min" : 2896236.0,
            "sum" : 3.458248960833334E8,
            "standardDeviation" : 1.7584127145761725E7
          }, {
            "mean" : 4.8215446583333336E7,
            "variance" : 5.983877405424458E11,
            "n" : 12,
            "max" : 4.954732E7,
            "min" : 4.7404567E7,
            "sum" : 5.78585359E8,
            "standardDeviation" : 773555.2601737292
          }, {
            "mean" : 4.7910569666666664E7,
            "variance" : 1.3509937160626732E11,
            "n" : 6,
            "max" : 4.8400252E7,
            "min" : 4.7529201E7,
            "sum" : 2.87463418E8,
            "standardDeviation" : 367558.6641697721
          } ],
          "4" : [ {
            "mean" : 4.878244683333333E7,
            "variance" : 2.8908082483762656E14,
            "n" : 7,
            "max" : 7.9620008E7,
            "min" : 2643114.0,
            "sum" : 3.414771278333333E8,
            "standardDeviation" : 1.7002377034921516E7
          }, {
            "mean" : 4.7914883916666664E7,
            "variance" : 4.668669560062639E11,
            "n" : 12,
            "max" : 4.8982277E7,
            "min" : 4.7008222E7,
            "sum" : 5.74978607E8,
            "standardDeviation" : 683276.6321236691
          }, {
            "mean" : 4.7282614166666664E7,
            "variance" : 3.169804422437661E11,
            "n" : 6,
            "max" : 4.8193668E7,
            "min" : 4.6602253E7,
            "sum" : 2.83695685E8,
            "standardDeviation" : 563010.1617588853
          } ],
          "5" : [ {
            "mean" : 4.8268436083333336E7,
            "variance" : 3.1502398065973E14,
            "n" : 7,
            "max" : 8.2958138E7,
            "min" : 1958037.0,
            "sum" : 3.378790525833334E8,
            "standardDeviation" : 1.7748914914994944E7
          }, {
            "mean" : 4.764298615384615E7,
            "variance" : 5.668785096648092E11,
            "n" : 13,
            "max" : 4.9098695E7,
            "min" : 4.6761937E7,
            "sum" : 6.1935882E8,
            "standardDeviation" : 752913.3480453173
          }, {
            "mean" : 4.740375E7,
            "variance" : 2.8859634954049896E11,
            "n" : 5,
            "max" : 4.8028944E7,
            "min" : 4.6598848E7,
            "sum" : 2.3701875E8,
            "standardDeviation" : 537211.6431542591
          } ],
          "6" : [ {
            "mean" : 4.896232125E7,
            "variance" : 3.151171446279412E14,
            "n" : 7,
            "max" : 8.3936771E7,
            "min" : 2795463.0,
            "sum" : 3.4273624875E8,
            "standardDeviation" : 1.7751539218556266E7
          }, {
            "mean" : 4.8141070583333336E7,
            "variance" : 4.2395073717800796E12,
            "n" : 12,
            "max" : 5.4564853E7,
            "min" : 4.6683683E7,
            "sum" : 5.77692847E8,
            "standardDeviation" : 2059006.4040162866
          }, {
            "mean" : 4.92518325E7,
            "variance" : 1.3846705623361102E13,
            "n" : 6,
            "max" : 5.6802056E7,
            "min" : 4.7180931E7,
            "sum" : 2.95510995E8,
            "standardDeviation" : 3721116.1797720185
          } ],
          "7" : [ {
            "mean" : 4.8788256416666664E7,
            "variance" : 2.886017718220764E14,
            "n" : 7,
            "max" : 7.9881968E7,
            "min" : 2832276.0,
            "sum" : 3.415177949166666E8,
            "standardDeviation" : 1.6988283368900944E7
          }, {
            "mean" : 4.9653468083333336E7,
            "variance" : 6.836493678969903E12,
            "n" : 12,
            "max" : 5.7816162E7,
            "min" : 4.8070827E7,
            "sum" : 5.95841617E8,
            "standardDeviation" : 2614668.9425183265
          }, {
            "mean" : 4.8998525833333336E7,
            "variance" : 2.376215512881667E11,
            "n" : 6,
            "max" : 4.9405666E7,
            "min" : 4.8116052E7,
            "sum" : 2.93991155E8,
            "standardDeviation" : 487464.41027850093
          } ],
          "8" : [ {
            "mean" : 4.8367244E7,
            "variance" : 3.032555631646766E14,
            "n" : 7,
            "max" : 8.1464661E7,
            "min" : 2432373.0,
            "sum" : 3.38570708E8,
            "standardDeviation" : 1.7414234498383116E7
          }, {
            "mean" : 4.786420374999999E7,
            "variance" : 4.191711601274791E11,
            "n" : 12,
            "max" : 4.9584595E7,
            "min" : 4.715287E7,
            "sum" : 5.743704449999999E8,
            "standardDeviation" : 647434.2902005416
          }, {
            "mean" : 4.8118280166666664E7,
            "variance" : 9.703217798656688E10,
            "n" : 6,
            "max" : 4.8492587E7,
            "min" : 4.7820633E7,
            "sum" : 2.88709681E8,
            "standardDeviation" : 311499.8844085931
          } ],
          "9" : [ {
            "mean" : 4.801293375000001E7,
            "variance" : 2.6440806330915584E14,
            "n" : 7,
            "max" : 7.4202177E7,
            "min" : 2293318.0,
            "sum" : 3.3609053625000006E8,
            "standardDeviation" : 1.626062924087367E7
          }, {
            "mean" : 4.8158040083333336E7,
            "variance" : 4.254199226649935E11,
            "n" : 12,
            "max" : 4.9334501E7,
            "min" : 4.7221476E7,
            "sum" : 5.77896481E8,
            "standardDeviation" : 652242.2269870248
          }, {
            "mean" : 4.8222555E7,
            "variance" : 2.4724471973E11,
            "n" : 6,
            "max" : 4.8837795E7,
            "min" : 4.7688215E7,
            "sum" : 2.8933533E8,
            "standardDeviation" : 497237.0860364299
          } ],
          "10" : [ {
            "mean" : 4.945423158333333E7,
            "variance" : 3.074459681869945E14,
            "n" : 7,
            "max" : 8.1201394E7,
            "min" : 2444937.0,
            "sum" : 3.461796210833333E8,
            "standardDeviation" : 1.7534137223912515E7
          }, {
            "mean" : 4.804507449999999E7,
            "variance" : 2.750439298742753E11,
            "n" : 12,
            "max" : 4.9034979E7,
            "min" : 4.730658E7,
            "sum" : 5.765408939999999E8,
            "standardDeviation" : 524446.3079041317
          }, {
            "mean" : 4.8596004833333336E7,
            "variance" : 1.2841458519653667E12,
            "n" : 6,
            "max" : 5.0494127E7,
            "min" : 4.7235447E7,
            "sum" : 2.91576029E8,
            "standardDeviation" : 1133201.593700506
          } ],
          "11" : [ {
            "mean" : 4.7974324833333336E7,
            "variance" : 2.897436851679667E14,
            "n" : 7,
            "max" : 7.8774348E7,
            "min" : 2195041.0,
            "sum" : 3.358202738333334E8,
            "standardDeviation" : 1.7021859039716158E7
          }, {
            "mean" : 4.766454883333333E7,
            "variance" : 2.950441374297891E11,
            "n" : 12,
            "max" : 4.8787546E7,
            "min" : 4.6804013E7,
            "sum" : 5.71974586E8,
            "standardDeviation" : 543179.6548378714
          }, {
            "mean" : 4.751583233333333E7,
            "variance" : 7.050343002838651E11,
            "n" : 6,
            "max" : 4.9007779E7,
            "min" : 4.6568241E7,
            "sum" : 2.85094994E8,
            "standardDeviation" : 839663.2064607006
          } ],
          "12" : [ {
            "mean" : 4.9075428416666664E7,
            "variance" : 3.2671174489815675E14,
            "n" : 7,
            "max" : 8.54087E7,
            "min" : 2550829.0,
            "sum" : 3.435279989166666E8,
            "standardDeviation" : 1.8075169290995777E7
          }, {
            "mean" : 4.801160025E7,
            "variance" : 2.347457749347501E11,
            "n" : 12,
            "max" : 4.8772579E7,
            "min" : 4.7235189E7,
            "sum" : 5.76139203E8,
            "standardDeviation" : 484505.70165349974
          }, {
            "mean" : 4.81565535E7,
            "variance" : 8.549297704350999E11,
            "n" : 6,
            "max" : 4.9931633E7,
            "min" : 4.7430317E7,
            "sum" : 2.88939321E8,
            "standardDeviation" : 924624.1238660712
          } ],
          "13" : [ {
            "mean" : 4.8700420166666664E7,
            "variance" : 3.086665705840904E14,
            "n" : 7,
            "max" : 8.3397818E7,
            "min" : 3105663.0,
            "sum" : 3.409029411666666E8,
            "standardDeviation" : 1.7568909203023687E7
          }, {
            "mean" : 4.871061575E7,
            "variance" : 3.0022495055447524E12,
            "n" : 12,
            "max" : 5.3952396E7,
            "min" : 4.7515303E7,
            "sum" : 5.84527389E8,
            "standardDeviation" : 1732700.0621990964
          }, {
            "mean" : 4.9306636666666664E7,
            "variance" : 1.003243950052227E13,
            "n" : 6,
            "max" : 5.5703614E7,
            "min" : 4.7508626E7,
            "sum" : 2.9583982E8,
            "standardDeviation" : 3167402.642627279
          } ],
          "14" : [ {
            "mean" : 4.829164375E7,
            "variance" : 2.7058807938392175E14,
            "n" : 7,
            "max" : 7.6192478E7,
            "min" : 2835418.0,
            "sum" : 3.3804150625E8,
            "standardDeviation" : 1.6449561677562164E7
          }, {
            "mean" : 4.7895265416666664E7,
            "variance" : 3.9984441377971924E11,
            "n" : 12,
            "max" : 4.9085654E7,
            "min" : 4.6824599E7,
            "sum" : 5.74743185E8,
            "standardDeviation" : 632332.5183633365
          }, {
            "mean" : 4.79189305E7,
            "variance" : 2.2353406497790018E11,
            "n" : 6,
            "max" : 4.8337896E7,
            "min" : 4.7170056E7,
            "sum" : 2.87513583E8,
            "standardDeviation" : 472793.89270368137
          } ],
          "15" : [ {
            "mean" : 4.874372158333333E7,
            "variance" : 3.224558645978135E14,
            "n" : 7,
            "max" : 8.5537938E7,
            "min" : 2963872.0,
            "sum" : 3.412060510833333E8,
            "standardDeviation" : 1.795705612281182E7
          }, {
            "mean" : 4.8839319666666664E7,
            "variance" : 6.635583133787703E12,
            "n" : 12,
            "max" : 5.6844144E7,
            "min" : 4.7432188E7,
            "sum" : 5.86071836E8,
            "standardDeviation" : 2575962.564515972
          }, {
            "mean" : 4.8274154833333336E7,
            "variance" : 5.4651557354776666E11,
            "n" : 6,
            "max" : 4.9201827E7,
            "min" : 4.7496703E7,
            "sum" : 2.89644929E8,
            "standardDeviation" : 739266.9163081537
          } ],
          "16" : [ {
            "mean" : 4.9193639500000015E7,
            "variance" : 3.144071339352172E14,
            "n" : 7,
            "max" : 8.4526261E7,
            "min" : 2839508.0,
            "sum" : 3.443554765000001E8,
            "standardDeviation" : 1.7731529373836234E7
          }, {
            "mean" : 4.8330678666666664E7,
            "variance" : 2.176102060215878E12,
            "n" : 12,
            "max" : 5.2324137E7,
            "min" : 4.6683426E7,
            "sum" : 5.79968144E8,
            "standardDeviation" : 1475161.706463355
          }, {
            "mean" : 4.7744590166666664E7,
            "variance" : 4.742053905285663E11,
            "n" : 6,
            "max" : 4.8860203E7,
            "min" : 4.7135165E7,
            "sum" : 2.86467541E8,
            "standardDeviation" : 688625.7260141871
          } ],
          "17" : [ {
            "mean" : 4.942613616666667E7,
            "variance" : 3.093081138941744E14,
            "n" : 7,
            "max" : 8.1832824E7,
            "min" : 2637896.0,
            "sum" : 3.459829531666667E8,
            "standardDeviation" : 1.758715764113617E7
          }, {
            "mean" : 4.828397816666667E7,
            "variance" : 2.2109032018724216E11,
            "n" : 12,
            "max" : 4.8899469E7,
            "min" : 4.7299709E7,
            "sum" : 5.79407738E8,
            "standardDeviation" : 470202.42469307
          }, {
            "mean" : 4.846275333333333E7,
            "variance" : 1.01593557595066E11,
            "n" : 6,
            "max" : 4.882719E7,
            "min" : 4.8115067E7,
            "sum" : 2.9077652E8,
            "standardDeviation" : 318737.4430390411
          } ],
          "18" : [ {
            "mean" : 4.92844965E7,
            "variance" : 3.263765285573765E14,
            "n" : 7,
            "max" : 8.5277006E7,
            "min" : 2589913.0,
            "sum" : 3.449914755E8,
            "standardDeviation" : 1.8065894070246745E7
          }, {
            "mean" : 4.807553125000001E7,
            "variance" : 1.223395687447503E11,
            "n" : 12,
            "max" : 4.8717492E7,
            "min" : 4.7508188E7,
            "sum" : 5.769063750000001E8,
            "standardDeviation" : 349770.7374048754
          }, {
            "mean" : 4.824881966666667E7,
            "variance" : 8.612366170546622E10,
            "n" : 6,
            "max" : 4.8532923E7,
            "min" : 4.7709469E7,
            "sum" : 2.89492918E8,
            "standardDeviation" : 293468.3316909445
          } ],
          "19" : [ {
            "mean" : 4.8912355166666664E7,
            "variance" : 2.851496068691444E14,
            "n" : 7,
            "max" : 7.868406E7,
            "min" : 2514761.0,
            "sum" : 3.423864861666666E8,
            "standardDeviation" : 1.68863734078441E7
          }, {
            "mean" : 4.823578625E7,
            "variance" : 1.2376386902675021E11,
            "n" : 12,
            "max" : 4.8767781E7,
            "min" : 4.753208E7,
            "sum" : 5.78829435E8,
            "standardDeviation" : 351800.8940107319
          }, {
            "mean" : 4.7888601833333336E7,
            "variance" : 3.1559990684256775E11,
            "n" : 6,
            "max" : 4.8806339E7,
            "min" : 4.7282954E7,
            "sum" : 2.87331611E8,
            "standardDeviation" : 561782.7932952092
          } ],
          "20" : [ {
            "mean" : 4.9203996833333336E7,
            "variance" : 3.154193394479338E14,
            "n" : 7,
            "max" : 8.4771005E7,
            "min" : 3059905.0,
            "sum" : 3.444279778333334E8,
            "standardDeviation" : 1.7760048970876567E7
          }, {
            "mean" : 4.834517833333333E7,
            "variance" : 4.9191802435496936E11,
            "n" : 12,
            "max" : 4.9805088E7,
            "min" : 4.7367518E7,
            "sum" : 5.8014214E8,
            "standardDeviation" : 701368.6793370298
          }, {
            "mean" : 4.8299670833333336E7,
            "variance" : 1.0219160011245667E12,
            "n" : 6,
            "max" : 4.9745405E7,
            "min" : 4.7248013E7,
            "sum" : 2.89798025E8,
            "standardDeviation" : 1010898.6107046377
          } ],
          "21" : [ {
            "mean" : 4.8343005833333336E7,
            "variance" : 2.777633349793389E14,
            "n" : 7,
            "max" : 7.7312136E7,
            "min" : 2685443.0,
            "sum" : 3.384010408333334E8,
            "standardDeviation" : 1.6666233377081305E7
          }, {
            "mean" : 4.815379025E7,
            "variance" : 8.068336948727518E11,
            "n" : 12,
            "max" : 4.978554E7,
            "min" : 4.7026388E7,
            "sum" : 5.77845483E8,
            "standardDeviation" : 898239.2191798084
          }, {
            "mean" : 4.7892572166666664E7,
            "variance" : 2.2312315495776648E11,
            "n" : 6,
            "max" : 4.879969E7,
            "min" : 4.7419464E7,
            "sum" : 2.87355433E8,
            "standardDeviation" : 472359.13768843986
          } ],
          "22" : [ {
            "mean" : 4.9303539916666664E7,
            "variance" : 3.3117630664890594E14,
            "n" : 7,
            "max" : 8.5417571E7,
            "min" : 2693090.0,
            "sum" : 3.451247794166666E8,
            "standardDeviation" : 1.819825009853711E7
          }, {
            "mean" : 4.818965875E7,
            "variance" : 2.3908680302911343E11,
            "n" : 12,
            "max" : 4.9336904E7,
            "min" : 4.7492512E7,
            "sum" : 5.78275905E8,
            "standardDeviation" : 488965.03252187005
          }, {
            "mean" : 4.812819066666667E7,
            "variance" : 3.8507666844106805E11,
            "n" : 6,
            "max" : 4.9211407E7,
            "min" : 4.7624183E7,
            "sum" : 2.88769144E8,
            "standardDeviation" : 620545.4604145195
          } ],
          "23" : [ {
            "mean" : 4.844003125E7,
            "variance" : 2.990298890251672E14,
            "n" : 7,
            "max" : 8.1729861E7,
            "min" : 2714313.0,
            "sum" : 3.3908021875E8,
            "standardDeviation" : 1.729248070767081E7
          }, {
            "mean" : 4.8610226833333336E7,
            "variance" : 3.732930585259709E11,
            "n" : 12,
            "max" : 4.9727577E7,
            "min" : 4.7837154E7,
            "sum" : 5.83322722E8,
            "standardDeviation" : 610977.1342087778
          }, {
            "mean" : 4.7875384E7,
            "variance" : 4.229038135568013E11,
            "n" : 6,
            "max" : 4.8665451E7,
            "min" : 4.7088757E7,
            "sum" : 2.87252304E8,
            "standardDeviation" : 650310.5516265297
          } ],
          "24" : [ {
            "mean" : 4.8857477166666664E7,
            "variance" : 2.895604285366955E14,
            "n" : 7,
            "max" : 7.9389172E7,
            "min" : 2974041.0,
            "sum" : 3.420023401666666E8,
            "standardDeviation" : 1.7016475208946638E7
          }, {
            "mean" : 4.866089525E7,
            "variance" : 2.2413813080474933E11,
            "n" : 12,
            "max" : 4.9284383E7,
            "min" : 4.7809761E7,
            "sum" : 5.83930743E8,
            "standardDeviation" : 473432.2874548686
          }, {
            "mean" : 4.9647402833333336E7,
            "variance" : 1.611389310691497E13,
            "n" : 6,
            "max" : 5.7793378E7,
            "min" : 4.7726766E7,
            "sum" : 2.97884417E8,
            "standardDeviation" : 4014211.3929033396
          } ],
          "25" : [ {
            "mean" : 4.998170399999999E7,
            "variance" : 2.9786713773993906E14,
            "n" : 7,
            "max" : 8.0699839E7,
            "min" : 2773531.0,
            "sum" : 3.4987192799999994E8,
            "standardDeviation" : 1.7258827820565887E7
          }, {
            "mean" : 4.9561546583333336E7,
            "variance" : 3.324183904157209E11,
            "n" : 12,
            "max" : 5.0464128E7,
            "min" : 4.873518E7,
            "sum" : 5.94738559E8,
            "standardDeviation" : 576557.3609067192
          }, {
            "mean" : 4.929236133333333E7,
            "variance" : 4.2041324607466516E11,
            "n" : 6,
            "max" : 5.0335167E7,
            "min" : 4.8299709E7,
            "sum" : 2.95754168E8,
            "standardDeviation" : 648392.817722918
          } ],
          "26" : [ {
            "mean" : 4.855823150000001E7,
            "variance" : 3.138555593144704E14,
            "n" : 7,
            "max" : 8.1953556E7,
            "min" : 1944830.0,
            "sum" : 3.3990762050000006E8,
            "standardDeviation" : 1.7715969048134804E7
          }, {
            "mean" : 4.7552535166666664E7,
            "variance" : 2.0477478674015155E11,
            "n" : 12,
            "max" : 4.8355697E7,
            "min" : 4.7011099E7,
            "sum" : 5.70630422E8,
            "standardDeviation" : 452520.48212224775
          }, {
            "mean" : 4.8661034666666664E7,
            "variance" : 1.268294887716268E12,
            "n" : 6,
            "max" : 5.0403266E7,
            "min" : 4.7359227E7,
            "sum" : 2.91966208E8,
            "standardDeviation" : 1126185.9916178447
          } ],
          "27" : [ {
            "mean" : 4.9955382E7,
            "variance" : 3.313845617067227E14,
            "n" : 7,
            "max" : 8.5593132E7,
            "min" : 2597756.0,
            "sum" : 3.49687674E8,
            "standardDeviation" : 1.820397104224028E7
          }, {
            "mean" : 4.86872095E7,
            "variance" : 2.821540505300906E11,
            "n" : 12,
            "max" : 4.9581682E7,
            "min" : 4.7986418E7,
            "sum" : 5.84246514E8,
            "standardDeviation" : 531181.7490559052
          }, {
            "mean" : 4.9140112333333336E7,
            "variance" : 2.5726980693946704E11,
            "n" : 6,
            "max" : 5.0022654E7,
            "min" : 4.8581572E7,
            "sum" : 2.94840674E8,
            "standardDeviation" : 507217.711579029
          } ],
          "28" : [ {
            "mean" : 4.889215625000001E7,
            "variance" : 3.0498017585871644E14,
            "n" : 7,
            "max" : 8.0472006E7,
            "min" : 1950893.0,
            "sum" : 3.4224509375000006E8,
            "standardDeviation" : 1.7463681623836264E7
          }, {
            "mean" : 4.807374308333332E7,
            "variance" : 3.4080401212680927E11,
            "n" : 12,
            "max" : 4.8742944E7,
            "min" : 4.705999E7,
            "sum" : 5.768849169999999E8,
            "standardDeviation" : 583784.2170929335
          }, {
            "mean" : 4.8153706833333336E7,
            "variance" : 6.016888213245671E11,
            "n" : 6,
            "max" : 4.9199092E7,
            "min" : 4.741977E7,
            "sum" : 2.88922241E8,
            "standardDeviation" : 775686.0326991631
          } ],
          "29" : [ {
            "mean" : 4.8172254333333336E7,
            "variance" : 2.5590085768980966E14,
            "n" : 7,
            "max" : 7.3228227E7,
            "min" : 2887193.0,
            "sum" : 3.372057803333334E8,
            "standardDeviation" : 1.5996901502785146E7
          }, {
            "mean" : 4.961510825E7,
            "variance" : 2.4073521857812944E12,
            "n" : 12,
            "max" : 5.362665E7,
            "min" : 4.8077309E7,
            "sum" : 5.95381299E8,
            "standardDeviation" : 1551564.4317208661
          }, {
            "mean" : 4.82723035E7,
            "variance" : 3.295797734659001E11,
            "n" : 6,
            "max" : 4.9051814E7,
            "min" : 4.7769932E7,
            "sum" : 2.89633821E8,
            "standardDeviation" : 574090.3878884405
          } ]
        }
      },
      "children" : [ ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 357},
   width = 1300- margin.right - margin.left,
   height = 175 - margin.top - margin.bottom;
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
    "meanOld" : 1246.80909621,
    "meanCurrent" : 1467.0196545533333,
    "deviationOld" : 10.513311886538316,
    "deviationCurrent" : 19.007656664982594,
    "vms" : 30,
    "callsOld" : 300,
    "calls" : 300,
    "tvalue" : -55.52777253088521,
    "mannWhitneyUStatistic" : 2.8719490663203402E-11
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 1469.9454744000002, 1454.8394095000003, 1481.8594617, 1476.0358603999998, 1473.2582963999998, 1484.9239329000002, 1471.817817, 1462.2127622, 1443.5714051, 1471.0394591, 1481.5765794, 1494.9621519000002, 1462.2131858, 1444.6948303999998, 1461.2371422, 1450.7240888, 1484.1501511, 1480.8316654999999, 1470.1577151, 1464.3580353, 1462.1260675, 1476.4225792, 1478.3035677, 1489.2432231000003, 1394.5452945999998, 1459.7020263000002, 1481.7394974, 1473.9749733, 1446.6238423, 1463.499141 ],
  "valuesPredecessor" : [ 1256.0308163000002, 1237.8916095, 1239.2952616000002, 1240.272686, 1253.9732141999998, 1239.6608861, 1239.6257317, 1235.6827867999998, 1253.6296006999999, 1252.6839866000003, 1240.8492304, 1269.3065995, 1246.3365851, 1247.3150335, 1236.5479867000001, 1238.5479655, 1259.3298725, 1231.8368305, 1261.7092756, 1242.9124384, 1238.9333148, 1236.3278523999998, 1255.8643092, 1248.8210861000002, 1257.1589850999999, 1253.525589, 1263.4351004000002, 1260.4631822000001, 1231.9413925, 1234.3636774000001 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 1661.05785,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1661.05785,
        "min" : 1661.05785,
        "sum" : 1.66105785E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1457.14379,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1457.14379,
        "min" : 1457.14379,
        "sum" : 1.45714379E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1415.993661,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1415.993661,
        "min" : 1415.993661,
        "sum" : 1.415993661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1399.939078,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1399.939078,
        "min" : 1399.939078,
        "sum" : 1.399939078E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1372.138441,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1372.138441,
        "min" : 1372.138441,
        "sum" : 1.372138441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1351.178324,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1351.178324,
        "min" : 1351.178324,
        "sum" : 1.351178324E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1357.810834,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1357.810834,
        "min" : 1357.810834,
        "sum" : 1.357810834E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1353.350065,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1353.350065,
        "min" : 1353.350065,
        "sum" : 1.353350065E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1503.577988,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1503.577988,
        "min" : 1503.577988,
        "sum" : 1.503577988E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1563.52402,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1563.52402,
        "min" : 1563.52402,
        "sum" : 1.56352402E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 1689.868145,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1689.868145,
        "min" : 1689.868145,
        "sum" : 1.689868145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1452.220662,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1452.220662,
        "min" : 1452.220662,
        "sum" : 1.452220662E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1406.707907,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1406.707907,
        "min" : 1406.707907,
        "sum" : 1.406707907E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.551065,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.551065,
        "min" : 1395.551065,
        "sum" : 1.395551065E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.946098,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.946098,
        "min" : 1404.946098,
        "sum" : 1.404946098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1388.52052,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1388.52052,
        "min" : 1388.52052,
        "sum" : 1.38852052E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1394.789105,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1394.789105,
        "min" : 1394.789105,
        "sum" : 1.394789105E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1397.444848,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1397.444848,
        "min" : 1397.444848,
        "sum" : 1.397444848E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1444.905797,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1444.905797,
        "min" : 1444.905797,
        "sum" : 1.444905797E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1491.284276,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1491.284276,
        "min" : 1491.284276,
        "sum" : 1.491284276E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 1777.220745,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1777.220745,
        "min" : 1777.220745,
        "sum" : 1.777220745E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1465.242438,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1465.242438,
        "min" : 1465.242438,
        "sum" : 1.465242438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1437.534178,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1437.534178,
        "min" : 1437.534178,
        "sum" : 1.437534178E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1430.640066,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1430.640066,
        "min" : 1430.640066,
        "sum" : 1.430640066E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1399.042247,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1399.042247,
        "min" : 1399.042247,
        "sum" : 1.399042247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1409.696312,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1409.696312,
        "min" : 1409.696312,
        "sum" : 1.409696312E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.036959,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.036959,
        "min" : 1404.036959,
        "sum" : 1.404036959E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.086478,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.086478,
        "min" : 1395.086478,
        "sum" : 1.395086478E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1497.423627,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1497.423627,
        "min" : 1497.423627,
        "sum" : 1.497423627E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1516.659914,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1516.659914,
        "min" : 1516.659914,
        "sum" : 1.516659914E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 1673.521375,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1673.521375,
        "min" : 1673.521375,
        "sum" : 1.673521375E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1449.53067,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1449.53067,
        "min" : 1449.53067,
        "sum" : 1.44953067E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1446.510076,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1446.510076,
        "min" : 1446.510076,
        "sum" : 1.446510076E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1436.860861,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1436.860861,
        "min" : 1436.860861,
        "sum" : 1.436860861E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1414.020193,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1414.020193,
        "min" : 1414.020193,
        "sum" : 1.414020193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.624662,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.624662,
        "min" : 1404.624662,
        "sum" : 1.404624662E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1393.933701,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1393.933701,
        "min" : 1393.933701,
        "sum" : 1.393933701E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.187315,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.187315,
        "min" : 1400.187315,
        "sum" : 1.400187315E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1531.473871,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1531.473871,
        "min" : 1531.473871,
        "sum" : 1.531473871E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1548.79202,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1548.79202,
        "min" : 1548.79202,
        "sum" : 1.54879202E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 1661.454564,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1661.454564,
        "min" : 1661.454564,
        "sum" : 1.661454564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1432.974369,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1432.974369,
        "min" : 1432.974369,
        "sum" : 1.432974369E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1431.892538,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1431.892538,
        "min" : 1431.892538,
        "sum" : 1.431892538E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1401.277171,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1401.277171,
        "min" : 1401.277171,
        "sum" : 1.401277171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1422.369355,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1422.369355,
        "min" : 1422.369355,
        "sum" : 1.422369355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1427.830506,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1427.830506,
        "min" : 1427.830506,
        "sum" : 1.427830506E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1393.944307,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1393.944307,
        "min" : 1393.944307,
        "sum" : 1.393944307E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.143752,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.143752,
        "min" : 1400.143752,
        "sum" : 1.400143752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1526.002895,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1526.002895,
        "min" : 1526.002895,
        "sum" : 1.526002895E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1603.687694,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1603.687694,
        "min" : 1603.687694,
        "sum" : 1.603687694E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 1595.579675,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1595.579675,
        "min" : 1595.579675,
        "sum" : 1.595579675E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1433.160064,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1433.160064,
        "min" : 1433.160064,
        "sum" : 1.433160064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1412.362678,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1412.362678,
        "min" : 1412.362678,
        "sum" : 1.412362678E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1418.225939,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1418.225939,
        "min" : 1418.225939,
        "sum" : 1.418225939E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.35746,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.35746,
        "min" : 1398.35746,
        "sum" : 1.39835746E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1396.463297,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1396.463297,
        "min" : 1396.463297,
        "sum" : 1.396463297E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1407.99775,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1407.99775,
        "min" : 1407.99775,
        "sum" : 1.40799775E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1392.906763,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1392.906763,
        "min" : 1392.906763,
        "sum" : 1.392906763E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1479.388434,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1479.388434,
        "min" : 1479.388434,
        "sum" : 1.479388434E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1512.506244,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1512.506244,
        "min" : 1512.506244,
        "sum" : 1.512506244E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 1676.584739,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1676.584739,
        "min" : 1676.584739,
        "sum" : 1.676584739E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1446.019027,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1446.019027,
        "min" : 1446.019027,
        "sum" : 1.446019027E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1421.837653,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1421.837653,
        "min" : 1421.837653,
        "sum" : 1.421837653E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1399.658646,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1399.658646,
        "min" : 1399.658646,
        "sum" : 1.399658646E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1397.999128,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1397.999128,
        "min" : 1397.999128,
        "sum" : 1.397999128E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1383.406674,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1383.406674,
        "min" : 1383.406674,
        "sum" : 1.383406674E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.201322,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.201322,
        "min" : 1395.201322,
        "sum" : 1.395201322E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.963624,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.963624,
        "min" : 1395.963624,
        "sum" : 1.395963624E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1648.60742,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1648.60742,
        "min" : 1648.60742,
        "sum" : 1.64860742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1469.713177,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1469.713177,
        "min" : 1469.713177,
        "sum" : 1.469713177E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 1693.195102,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1693.195102,
        "min" : 1693.195102,
        "sum" : 1.693195102E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1440.931272,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1440.931272,
        "min" : 1440.931272,
        "sum" : 1.440931272E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1444.349387,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1444.349387,
        "min" : 1444.349387,
        "sum" : 1.444349387E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1442.886185,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1442.886185,
        "min" : 1442.886185,
        "sum" : 1.442886185E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1419.403005,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1419.403005,
        "min" : 1419.403005,
        "sum" : 1.419403005E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.782938,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.782938,
        "min" : 1398.782938,
        "sum" : 1.398782938E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.586724,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.586724,
        "min" : 1395.586724,
        "sum" : 1.395586724E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1409.843281,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1409.843281,
        "min" : 1409.843281,
        "sum" : 1.409843281E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1559.002883,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1559.002883,
        "min" : 1559.002883,
        "sum" : 1.559002883E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1535.768956,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1535.768956,
        "min" : 1535.768956,
        "sum" : 1.535768956E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 1710.129012,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1710.129012,
        "min" : 1710.129012,
        "sum" : 1.710129012E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1459.140939,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1459.140939,
        "min" : 1459.140939,
        "sum" : 1.459140939E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1438.843975,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1438.843975,
        "min" : 1438.843975,
        "sum" : 1.438843975E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1391.787327,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1391.787327,
        "min" : 1391.787327,
        "sum" : 1.391787327E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1383.152459,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1383.152459,
        "min" : 1383.152459,
        "sum" : 1.383152459E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1403.263883,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1403.263883,
        "min" : 1403.263883,
        "sum" : 1.403263883E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1391.498098,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1391.498098,
        "min" : 1391.498098,
        "sum" : 1.391498098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1384.630821,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1384.630821,
        "min" : 1384.630821,
        "sum" : 1.384630821E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1536.181071,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1536.181071,
        "min" : 1536.181071,
        "sum" : 1.536181071E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1611.767006,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1611.767006,
        "min" : 1611.767006,
        "sum" : 1.611767006E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 1708.928472,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1708.928472,
        "min" : 1708.928472,
        "sum" : 1.708928472E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1446.876402,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1446.876402,
        "min" : 1446.876402,
        "sum" : 1.446876402E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1437.559517,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1437.559517,
        "min" : 1437.559517,
        "sum" : 1.437559517E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1430.161881,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1430.161881,
        "min" : 1430.161881,
        "sum" : 1.430161881E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1414.277796,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1414.277796,
        "min" : 1414.277796,
        "sum" : 1.414277796E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1402.033627,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1402.033627,
        "min" : 1402.033627,
        "sum" : 1.402033627E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1401.607586,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1401.607586,
        "min" : 1401.607586,
        "sum" : 1.401607586E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1419.524724,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1419.524724,
        "min" : 1419.524724,
        "sum" : 1.419524724E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1439.072095,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1439.072095,
        "min" : 1439.072095,
        "sum" : 1.439072095E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1717.352874,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1717.352874,
        "min" : 1717.352874,
        "sum" : 1.717352874E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 1658.048197,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1658.048197,
        "min" : 1658.048197,
        "sum" : 1.658048197E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1456.67362,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1456.67362,
        "min" : 1456.67362,
        "sum" : 1.45667362E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1433.430831,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1433.430831,
        "min" : 1433.430831,
        "sum" : 1.433430831E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1405.702232,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1405.702232,
        "min" : 1405.702232,
        "sum" : 1.405702232E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1411.249846,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1411.249846,
        "min" : 1411.249846,
        "sum" : 1.411249846E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1412.798695,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1412.798695,
        "min" : 1412.798695,
        "sum" : 1.412798695E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1413.838426,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1413.838426,
        "min" : 1413.838426,
        "sum" : 1.413838426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1410.683301,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1410.683301,
        "min" : 1410.683301,
        "sum" : 1.410683301E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1489.817552,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1489.817552,
        "min" : 1489.817552,
        "sum" : 1.489817552E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1668.115904,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1668.115904,
        "min" : 1668.115904,
        "sum" : 1.668115904E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 1709.845165,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1709.845165,
        "min" : 1709.845165,
        "sum" : 1.709845165E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1469.401185,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1469.401185,
        "min" : 1469.401185,
        "sum" : 1.469401185E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1422.650145,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1422.650145,
        "min" : 1422.650145,
        "sum" : 1.422650145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1418.444236,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1418.444236,
        "min" : 1418.444236,
        "sum" : 1.418444236E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.35113,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.35113,
        "min" : 1400.35113,
        "sum" : 1.40035113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1384.737101,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1384.737101,
        "min" : 1384.737101,
        "sum" : 1.384737101E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1419.161427,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1419.161427,
        "min" : 1419.161427,
        "sum" : 1.419161427E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1393.517484,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1393.517484,
        "min" : 1393.517484,
        "sum" : 1.393517484E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1502.976041,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1502.976041,
        "min" : 1502.976041,
        "sum" : 1.502976041E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1501.043708,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1501.043708,
        "min" : 1501.043708,
        "sum" : 1.501043708E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 1650.291298,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1650.291298,
        "min" : 1650.291298,
        "sum" : 1.650291298E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1460.650092,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1460.650092,
        "min" : 1460.650092,
        "sum" : 1.460650092E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1421.720549,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1421.720549,
        "min" : 1421.720549,
        "sum" : 1.421720549E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1416.073513,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1416.073513,
        "min" : 1416.073513,
        "sum" : 1.416073513E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1410.846434,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1410.846434,
        "min" : 1410.846434,
        "sum" : 1.410846434E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1420.365845,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1420.365845,
        "min" : 1420.365845,
        "sum" : 1.420365845E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.703378,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.703378,
        "min" : 1404.703378,
        "sum" : 1.404703378E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.941373,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.941373,
        "min" : 1398.941373,
        "sum" : 1.398941373E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1456.626468,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1456.626468,
        "min" : 1456.626468,
        "sum" : 1.456626468E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1581.041725,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1581.041725,
        "min" : 1581.041725,
        "sum" : 1.581041725E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 1584.708597,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1584.708597,
        "min" : 1584.708597,
        "sum" : 1.584708597E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1436.927397,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1436.927397,
        "min" : 1436.927397,
        "sum" : 1.436927397E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1403.069257,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1403.069257,
        "min" : 1403.069257,
        "sum" : 1.403069257E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1389.955547,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1389.955547,
        "min" : 1389.955547,
        "sum" : 1.389955547E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1393.047175,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1393.047175,
        "min" : 1393.047175,
        "sum" : 1.393047175E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1384.436515,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1384.436515,
        "min" : 1384.436515,
        "sum" : 1.384436515E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1381.335722,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1381.335722,
        "min" : 1381.335722,
        "sum" : 1.381335722E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1381.125495,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1381.125495,
        "min" : 1381.125495,
        "sum" : 1.381125495E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1690.716047,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1690.716047,
        "min" : 1690.716047,
        "sum" : 1.690716047E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1567.04967,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1567.04967,
        "min" : 1567.04967,
        "sum" : 1.56704967E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 1671.214601,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1671.214601,
        "min" : 1671.214601,
        "sum" : 1.671214601E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1431.011168,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1431.011168,
        "min" : 1431.011168,
        "sum" : 1.431011168E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1417.496353,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1417.496353,
        "min" : 1417.496353,
        "sum" : 1.417496353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1410.222234,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1410.222234,
        "min" : 1410.222234,
        "sum" : 1.410222234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.670696,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.670696,
        "min" : 1400.670696,
        "sum" : 1.400670696E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1385.192659,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1385.192659,
        "min" : 1385.192659,
        "sum" : 1.385192659E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1391.565226,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1391.565226,
        "min" : 1391.565226,
        "sum" : 1.391565226E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1411.254664,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1411.254664,
        "min" : 1411.254664,
        "sum" : 1.411254664E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1645.293086,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1645.293086,
        "min" : 1645.293086,
        "sum" : 1.645293086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1654.67393,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1654.67393,
        "min" : 1654.67393,
        "sum" : 1.65467393E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 1687.083702,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1687.083702,
        "min" : 1687.083702,
        "sum" : 1.687083702E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1463.518607,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1463.518607,
        "min" : 1463.518607,
        "sum" : 1.463518607E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1424.001161,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1424.001161,
        "min" : 1424.001161,
        "sum" : 1.424001161E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1394.508726,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1394.508726,
        "min" : 1394.508726,
        "sum" : 1.394508726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1382.873843,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1382.873843,
        "min" : 1382.873843,
        "sum" : 1.382873843E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1391.238881,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1391.238881,
        "min" : 1391.238881,
        "sum" : 1.391238881E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1394.025145,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1394.025145,
        "min" : 1394.025145,
        "sum" : 1.394025145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1389.904964,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1389.904964,
        "min" : 1389.904964,
        "sum" : 1.389904964E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1506.141636,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1506.141636,
        "min" : 1506.141636,
        "sum" : 1.506141636E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1588.835193,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1588.835193,
        "min" : 1588.835193,
        "sum" : 1.588835193E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 1685.647967,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1685.647967,
        "min" : 1685.647967,
        "sum" : 1.685647967E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1432.626164,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1432.626164,
        "min" : 1432.626164,
        "sum" : 1.432626164E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1430.79491,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1430.79491,
        "min" : 1430.79491,
        "sum" : 1.43079491E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1411.065784,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1411.065784,
        "min" : 1411.065784,
        "sum" : 1.411065784E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1414.973056,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1414.973056,
        "min" : 1414.973056,
        "sum" : 1.414973056E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1411.239426,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1411.239426,
        "min" : 1411.239426,
        "sum" : 1.411239426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1386.121677,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1386.121677,
        "min" : 1386.121677,
        "sum" : 1.386121677E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1394.043365,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1394.043365,
        "min" : 1394.043365,
        "sum" : 1.394043365E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1622.807401,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1622.807401,
        "min" : 1622.807401,
        "sum" : 1.622807401E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1574.906042,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1574.906042,
        "min" : 1574.906042,
        "sum" : 1.574906042E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 1630.902612,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1630.902612,
        "min" : 1630.902612,
        "sum" : 1.630902612E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1437.446234,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1437.446234,
        "min" : 1437.446234,
        "sum" : 1.437446234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1442.915564,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1442.915564,
        "min" : 1442.915564,
        "sum" : 1.442915564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1410.701159,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1410.701159,
        "min" : 1410.701159,
        "sum" : 1.410701159E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1396.296015,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1396.296015,
        "min" : 1396.296015,
        "sum" : 1.396296015E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1401.266365,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1401.266365,
        "min" : 1401.266365,
        "sum" : 1.401266365E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1385.994211,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1385.994211,
        "min" : 1385.994211,
        "sum" : 1.385994211E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.410762,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.410762,
        "min" : 1400.410762,
        "sum" : 1.400410762E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1613.914994,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1613.914994,
        "min" : 1613.914994,
        "sum" : 1.613914994E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1688.468739,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1688.468739,
        "min" : 1688.468739,
        "sum" : 1.688468739E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 1615.509054,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1615.509054,
        "min" : 1615.509054,
        "sum" : 1.615509054E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1422.401604,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1422.401604,
        "min" : 1422.401604,
        "sum" : 1.422401604E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.132192,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.132192,
        "min" : 1404.132192,
        "sum" : 1.404132192E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.213489,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.213489,
        "min" : 1398.213489,
        "sum" : 1.398213489E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1406.143355,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1406.143355,
        "min" : 1406.143355,
        "sum" : 1.406143355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.569702,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.569702,
        "min" : 1398.569702,
        "sum" : 1.398569702E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1390.502073,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1390.502073,
        "min" : 1390.502073,
        "sum" : 1.390502073E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1399.634301,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1399.634301,
        "min" : 1399.634301,
        "sum" : 1.399634301E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1576.696271,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1576.696271,
        "min" : 1576.696271,
        "sum" : 1.576696271E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1631.778312,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1631.778312,
        "min" : 1631.778312,
        "sum" : 1.631778312E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 1699.252498,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1699.252498,
        "min" : 1699.252498,
        "sum" : 1.699252498E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1448.338936,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1448.338936,
        "min" : 1448.338936,
        "sum" : 1.448338936E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1413.688564,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1413.688564,
        "min" : 1413.688564,
        "sum" : 1.413688564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1418.907731,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1418.907731,
        "min" : 1418.907731,
        "sum" : 1.418907731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1422.696344,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1422.696344,
        "min" : 1422.696344,
        "sum" : 1.422696344E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1419.393427,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1419.393427,
        "min" : 1419.393427,
        "sum" : 1.419393427E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1406.277995,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1406.277995,
        "min" : 1406.277995,
        "sum" : 1.406277995E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.588597,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.588597,
        "min" : 1400.588597,
        "sum" : 1.400588597E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1634.46734,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1634.46734,
        "min" : 1634.46734,
        "sum" : 1.63446734E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1577.890079,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1577.890079,
        "min" : 1577.890079,
        "sum" : 1.577890079E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 1688.612813,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1688.612813,
        "min" : 1688.612813,
        "sum" : 1.688612813E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1440.087202,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1440.087202,
        "min" : 1440.087202,
        "sum" : 1.440087202E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1420.588121,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1420.588121,
        "min" : 1420.588121,
        "sum" : 1.420588121E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1435.23994,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1435.23994,
        "min" : 1435.23994,
        "sum" : 1.43523994E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.102224,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.102224,
        "min" : 1404.102224,
        "sum" : 1.404102224E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1419.209491,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1419.209491,
        "min" : 1419.209491,
        "sum" : 1.419209491E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1416.747553,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1416.747553,
        "min" : 1416.747553,
        "sum" : 1.416747553E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1396.403604,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1396.403604,
        "min" : 1396.403604,
        "sum" : 1.396403604E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1569.504799,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1569.504799,
        "min" : 1569.504799,
        "sum" : 1.569504799E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1527.682423,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1527.682423,
        "min" : 1527.682423,
        "sum" : 1.527682423E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 1808.973861,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1808.973861,
        "min" : 1808.973861,
        "sum" : 1.808973861E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1470.934499,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1470.934499,
        "min" : 1470.934499,
        "sum" : 1.470934499E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1415.929265,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1415.929265,
        "min" : 1415.929265,
        "sum" : 1.415929265E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1400.761071,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1400.761071,
        "min" : 1400.761071,
        "sum" : 1.400761071E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1414.155717,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1414.155717,
        "min" : 1414.155717,
        "sum" : 1.414155717E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1427.141399,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1427.141399,
        "min" : 1427.141399,
        "sum" : 1.427141399E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1441.537559,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1441.537559,
        "min" : 1441.537559,
        "sum" : 1.441537559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1413.302139,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1413.302139,
        "min" : 1413.302139,
        "sum" : 1.413302139E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1485.794877,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1485.794877,
        "min" : 1485.794877,
        "sum" : 1.485794877E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1671.091132,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1671.091132,
        "min" : 1671.091132,
        "sum" : 1.671091132E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 1698.710085,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1698.710085,
        "min" : 1698.710085,
        "sum" : 1.698710085E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1436.683093,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1436.683093,
        "min" : 1436.683093,
        "sum" : 1.436683093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1423.893309,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1423.893309,
        "min" : 1423.893309,
        "sum" : 1.423893309E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1407.35248,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1407.35248,
        "min" : 1407.35248,
        "sum" : 1.40735248E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1407.595149,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1407.595149,
        "min" : 1407.595149,
        "sum" : 1.407595149E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1397.244621,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1397.244621,
        "min" : 1397.244621,
        "sum" : 1.397244621E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1401.107143,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1401.107143,
        "min" : 1401.107143,
        "sum" : 1.401107143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1386.643742,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1386.643742,
        "min" : 1386.643742,
        "sum" : 1.386643742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1768.540293,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1768.540293,
        "min" : 1768.540293,
        "sum" : 1.768540293E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1487.995879,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1487.995879,
        "min" : 1487.995879,
        "sum" : 1.487995879E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 1623.423064,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1623.423064,
        "min" : 1623.423064,
        "sum" : 1.623423064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1434.782539,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1434.782539,
        "min" : 1434.782539,
        "sum" : 1.434782539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1405.712275,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1405.712275,
        "min" : 1405.712275,
        "sum" : 1.405712275E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1397.351346,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1397.351346,
        "min" : 1397.351346,
        "sum" : 1.397351346E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1415.769247,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1415.769247,
        "min" : 1415.769247,
        "sum" : 1.415769247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1430.620855,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1430.620855,
        "min" : 1430.620855,
        "sum" : 1.430620855E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1413.56176,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1413.56176,
        "min" : 1413.56176,
        "sum" : 1.41356176E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1406.658731,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1406.658731,
        "min" : 1406.658731,
        "sum" : 1.406658731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1476.696192,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1476.696192,
        "min" : 1476.696192,
        "sum" : 1.476696192E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1543.818086,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1543.818086,
        "min" : 1543.818086,
        "sum" : 1.543818086E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 1674.402554,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1674.402554,
        "min" : 1674.402554,
        "sum" : 1.674402554E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1453.160971,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1453.160971,
        "min" : 1453.160971,
        "sum" : 1.453160971E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1437.946259,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1437.946259,
        "min" : 1437.946259,
        "sum" : 1.437946259E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1429.898779,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1429.898779,
        "min" : 1429.898779,
        "sum" : 1.429898779E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1413.220131,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1413.220131,
        "min" : 1413.220131,
        "sum" : 1.413220131E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1409.008716,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1409.008716,
        "min" : 1409.008716,
        "sum" : 1.409008716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1406.910263,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1406.910263,
        "min" : 1406.910263,
        "sum" : 1.406910263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1404.573599,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1404.573599,
        "min" : 1404.573599,
        "sum" : 1.404573599E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1576.469204,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1576.469204,
        "min" : 1576.469204,
        "sum" : 1.576469204E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1643.648853,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1643.648853,
        "min" : 1643.648853,
        "sum" : 1.643648853E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 1674.613908,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1674.613908,
        "min" : 1674.613908,
        "sum" : 1.674613908E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1432.504339,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1432.504339,
        "min" : 1432.504339,
        "sum" : 1.432504339E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1410.85252,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1410.85252,
        "min" : 1410.85252,
        "sum" : 1.41085252E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1416.550591,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1416.550591,
        "min" : 1416.550591,
        "sum" : 1.416550591E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1411.672033,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1411.672033,
        "min" : 1411.672033,
        "sum" : 1.411672033E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1401.056931,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1401.056931,
        "min" : 1401.056931,
        "sum" : 1.401056931E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1394.493679,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1394.493679,
        "min" : 1394.493679,
        "sum" : 1.394493679E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.376658,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.376658,
        "min" : 1395.376658,
        "sum" : 1.395376658E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1528.704475,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1528.704475,
        "min" : 1528.704475,
        "sum" : 1.528704475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1717.210543,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1717.210543,
        "min" : 1717.210543,
        "sum" : 1.717210543E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 1571.1386,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1571.1386,
        "min" : 1571.1386,
        "sum" : 1.5711386E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1393.54219,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1393.54219,
        "min" : 1393.54219,
        "sum" : 1.39354219E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1353.508173,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1353.508173,
        "min" : 1353.508173,
        "sum" : 1.353508173E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1351.62768,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1351.62768,
        "min" : 1351.62768,
        "sum" : 1.35162768E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1336.085598,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1336.085598,
        "min" : 1336.085598,
        "sum" : 1.336085598E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1331.161857,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1331.161857,
        "min" : 1331.161857,
        "sum" : 1.331161857E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1340.319956,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1340.319956,
        "min" : 1340.319956,
        "sum" : 1.340319956E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1348.442905,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1348.442905,
        "min" : 1348.442905,
        "sum" : 1.348442905E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1354.816539,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1354.816539,
        "min" : 1354.816539,
        "sum" : 1.354816539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1564.809448,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1564.809448,
        "min" : 1564.809448,
        "sum" : 1.564809448E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 1602.898608,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1602.898608,
        "min" : 1602.898608,
        "sum" : 1.602898608E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1443.411764,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1443.411764,
        "min" : 1443.411764,
        "sum" : 1.443411764E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1440.357215,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1440.357215,
        "min" : 1440.357215,
        "sum" : 1.440357215E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1425.97934,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1425.97934,
        "min" : 1425.97934,
        "sum" : 1.42597934E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1410.46502,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1410.46502,
        "min" : 1410.46502,
        "sum" : 1.41046502E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1409.099608,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1409.099608,
        "min" : 1409.099608,
        "sum" : 1.409099608E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1403.442415,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1403.442415,
        "min" : 1403.442415,
        "sum" : 1.403442415E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1399.559203,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1399.559203,
        "min" : 1399.559203,
        "sum" : 1.399559203E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1527.514251,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1527.514251,
        "min" : 1527.514251,
        "sum" : 1.527514251E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1534.292839,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1534.292839,
        "min" : 1534.292839,
        "sum" : 1.534292839E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 1663.363617,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1663.363617,
        "min" : 1663.363617,
        "sum" : 1.663363617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1428.042562,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1428.042562,
        "min" : 1428.042562,
        "sum" : 1.428042562E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1427.390441,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1427.390441,
        "min" : 1427.390441,
        "sum" : 1.427390441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1412.753353,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1412.753353,
        "min" : 1412.753353,
        "sum" : 1.412753353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.394775,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.394775,
        "min" : 1398.394775,
        "sum" : 1.398394775E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1402.201151,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1402.201151,
        "min" : 1402.201151,
        "sum" : 1.402201151E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1398.598579,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1398.598579,
        "min" : 1398.598579,
        "sum" : 1.398598579E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1395.510526,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1395.510526,
        "min" : 1395.510526,
        "sum" : 1.395510526E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1449.559239,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1449.559239,
        "min" : 1449.559239,
        "sum" : 1.449559239E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1531.426645,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1531.426645,
        "min" : 1531.426645,
        "sum" : 1.531426645E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 1720.532304,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1720.532304,
        "min" : 1720.532304,
        "sum" : 1.720532304E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1440.177358,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1440.177358,
        "min" : 1440.177358,
        "sum" : 1.440177358E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1416.395726,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1416.395726,
        "min" : 1416.395726,
        "sum" : 1.416395726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1414.547021,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1414.547021,
        "min" : 1414.547021,
        "sum" : 1.414547021E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1420.520583,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1420.520583,
        "min" : 1420.520583,
        "sum" : 1.420520583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1408.948019,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1408.948019,
        "min" : 1408.948019,
        "sum" : 1.408948019E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1407.779598,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1407.779598,
        "min" : 1407.779598,
        "sum" : 1.407779598E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1401.587247,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1401.587247,
        "min" : 1401.587247,
        "sum" : 1.401587247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1637.775371,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1637.775371,
        "min" : 1637.775371,
        "sum" : 1.637775371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1624.169004,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1624.169004,
        "min" : 1624.169004,
        "sum" : 1.624169004E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 1604.36858,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1604.36858,
        "min" : 1604.36858,
        "sum" : 1.60436858E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1248.399972,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1248.399972,
        "min" : 1248.399972,
        "sum" : 1.248399972E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1235.425632,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1235.425632,
        "min" : 1235.425632,
        "sum" : 1.235425632E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.926696,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.926696,
        "min" : 1220.926696,
        "sum" : 1.220926696E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1246.830104,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1246.830104,
        "min" : 1246.830104,
        "sum" : 1.246830104E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1215.916673,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1215.916673,
        "min" : 1215.916673,
        "sum" : 1.215916673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1221.319731,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1221.319731,
        "min" : 1221.319731,
        "sum" : 1.221319731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.205654,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.205654,
        "min" : 1200.205654,
        "sum" : 1.200205654E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1215.00217,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1215.00217,
        "min" : 1215.00217,
        "sum" : 1.21500217E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1208.697544,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1208.697544,
        "min" : 1208.697544,
        "sum" : 1.208697544E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 1521.493408,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1521.493408,
        "min" : 1521.493408,
        "sum" : 1.521493408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1245.175792,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1245.175792,
        "min" : 1245.175792,
        "sum" : 1.245175792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1229.58591,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1229.58591,
        "min" : 1229.58591,
        "sum" : 1.22958591E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1223.881228,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1223.881228,
        "min" : 1223.881228,
        "sum" : 1.223881228E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1214.808663,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1214.808663,
        "min" : 1214.808663,
        "sum" : 1.214808663E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1223.693599,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1223.693599,
        "min" : 1223.693599,
        "sum" : 1.223693599E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.209615,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.209615,
        "min" : 1210.209615,
        "sum" : 1.210209615E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1209.310841,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1209.310841,
        "min" : 1209.310841,
        "sum" : 1.209310841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1215.053217,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1215.053217,
        "min" : 1215.053217,
        "sum" : 1.215053217E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.998588,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.998588,
        "min" : 1194.998588,
        "sum" : 1.194998588E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 1456.802939,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1456.802939,
        "min" : 1456.802939,
        "sum" : 1.456802939E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1272.359925,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1272.359925,
        "min" : 1272.359925,
        "sum" : 1.272359925E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1248.765153,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1248.765153,
        "min" : 1248.765153,
        "sum" : 1.248765153E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1214.679371,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1214.679371,
        "min" : 1214.679371,
        "sum" : 1.214679371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.737594,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.737594,
        "min" : 1210.737594,
        "sum" : 1.210737594E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1187.998147,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1187.998147,
        "min" : 1187.998147,
        "sum" : 1.187998147E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.05862,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.05862,
        "min" : 1200.05862,
        "sum" : 1.20005862E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1186.469768,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1186.469768,
        "min" : 1186.469768,
        "sum" : 1.186469768E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.369003,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.369003,
        "min" : 1198.369003,
        "sum" : 1.198369003E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1189.239347,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1189.239347,
        "min" : 1189.239347,
        "sum" : 1.189239347E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 1475.819018,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1475.819018,
        "min" : 1475.819018,
        "sum" : 1.475819018E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1264.295204,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1264.295204,
        "min" : 1264.295204,
        "sum" : 1.264295204E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1231.160669,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1231.160669,
        "min" : 1231.160669,
        "sum" : 1.231160669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1218.029587,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1218.029587,
        "min" : 1218.029587,
        "sum" : 1.218029587E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1204.46328,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1204.46328,
        "min" : 1204.46328,
        "sum" : 1.20446328E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1208.207024,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1208.207024,
        "min" : 1208.207024,
        "sum" : 1.208207024E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.809268,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.809268,
        "min" : 1194.809268,
        "sum" : 1.194809268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.529285,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.529285,
        "min" : 1205.529285,
        "sum" : 1.205529285E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193.934223,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1193.934223,
        "min" : 1193.934223,
        "sum" : 1.193934223E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193.08559,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1193.08559,
        "min" : 1193.08559,
        "sum" : 1.19308559E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 1476.788547,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1476.788547,
        "min" : 1476.788547,
        "sum" : 1.476788547E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1268.304646,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1268.304646,
        "min" : 1268.304646,
        "sum" : 1.268304646E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1282.197649,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1282.197649,
        "min" : 1282.197649,
        "sum" : 1.282197649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1241.745485,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1241.745485,
        "min" : 1241.745485,
        "sum" : 1.241745485E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1241.272911,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1241.272911,
        "min" : 1241.272911,
        "sum" : 1.241272911E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1223.618849,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1223.618849,
        "min" : 1223.618849,
        "sum" : 1.223618849E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1218.004163,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1218.004163,
        "min" : 1218.004163,
        "sum" : 1.218004163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1206.316335,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1206.316335,
        "min" : 1206.316335,
        "sum" : 1.206316335E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.896913,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.896913,
        "min" : 1200.896913,
        "sum" : 1.200896913E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1199.497594,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1199.497594,
        "min" : 1199.497594,
        "sum" : 1.199497594E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 1498.612666,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1498.612666,
        "min" : 1498.612666,
        "sum" : 1.498612666E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1228.70553,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1228.70553,
        "min" : 1228.70553,
        "sum" : 1.22870553E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1256.343214,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1256.343214,
        "min" : 1256.343214,
        "sum" : 1.256343214E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1199.415109,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1199.415109,
        "min" : 1199.415109,
        "sum" : 1.199415109E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1195.723234,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1195.723234,
        "min" : 1195.723234,
        "sum" : 1.195723234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1189.711105,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1189.711105,
        "min" : 1189.711105,
        "sum" : 1.189711105E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1180.375025,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1180.375025,
        "min" : 1180.375025,
        "sum" : 1.180375025E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.842212,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.842212,
        "min" : 1194.842212,
        "sum" : 1.194842212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1196.108985,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1196.108985,
        "min" : 1196.108985,
        "sum" : 1.196108985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1178.531225,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1178.531225,
        "min" : 1178.531225,
        "sum" : 1.178531225E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 1466.724524,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1466.724524,
        "min" : 1466.724524,
        "sum" : 1.466724524E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.876966,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.876966,
        "min" : 1234.876966,
        "sum" : 1.234876966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1242.305084,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1242.305084,
        "min" : 1242.305084,
        "sum" : 1.242305084E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1214.693893,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1214.693893,
        "min" : 1214.693893,
        "sum" : 1.214693893E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1201.189483,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1201.189483,
        "min" : 1201.189483,
        "sum" : 1.201189483E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.041682,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.041682,
        "min" : 1205.041682,
        "sum" : 1.205041682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1201.124606,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1201.124606,
        "min" : 1201.124606,
        "sum" : 1.201124606E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1211.598472,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1211.598472,
        "min" : 1211.598472,
        "sum" : 1.211598472E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1206.345018,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1206.345018,
        "min" : 1206.345018,
        "sum" : 1.206345018E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1218.827132,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1218.827132,
        "min" : 1218.827132,
        "sum" : 1.218827132E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 1437.209453,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1437.209453,
        "min" : 1437.209453,
        "sum" : 1.437209453E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1260.333829,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1260.333829,
        "min" : 1260.333829,
        "sum" : 1.260333829E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1219.652786,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1219.652786,
        "min" : 1219.652786,
        "sum" : 1.219652786E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1248.125166,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1248.125166,
        "min" : 1248.125166,
        "sum" : 1.248125166E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1214.475224,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1214.475224,
        "min" : 1214.475224,
        "sum" : 1.214475224E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.52347,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.52347,
        "min" : 1217.52347,
        "sum" : 1.21752347E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1202.749412,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1202.749412,
        "min" : 1202.749412,
        "sum" : 1.202749412E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1207.27465,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1207.27465,
        "min" : 1207.27465,
        "sum" : 1.20727465E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.333522,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.333522,
        "min" : 1205.333522,
        "sum" : 1.205333522E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1195.814792,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1195.814792,
        "min" : 1195.814792,
        "sum" : 1.195814792E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 1513.785511,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1513.785511,
        "min" : 1513.785511,
        "sum" : 1.513785511E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1250.096329,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1250.096329,
        "min" : 1250.096329,
        "sum" : 1.250096329E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1249.496951,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1249.496951,
        "min" : 1249.496951,
        "sum" : 1.249496951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222.227524,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1222.227524,
        "min" : 1222.227524,
        "sum" : 1.222227524E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1208.018885,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1208.018885,
        "min" : 1208.018885,
        "sum" : 1.208018885E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1211.218344,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1211.218344,
        "min" : 1211.218344,
        "sum" : 1.211218344E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.26785,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.26785,
        "min" : 1224.26785,
        "sum" : 1.22426785E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1226.338818,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1226.338818,
        "min" : 1226.338818,
        "sum" : 1.226338818E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.225259,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.225259,
        "min" : 1220.225259,
        "sum" : 1.220225259E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.620536,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.620536,
        "min" : 1210.620536,
        "sum" : 1.210620536E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 1431.524537,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1431.524537,
        "min" : 1431.524537,
        "sum" : 1.431524537E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1298.492092,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1298.492092,
        "min" : 1298.492092,
        "sum" : 1.298492092E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.415592,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.415592,
        "min" : 1234.415592,
        "sum" : 1.234415592E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1229.213833,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1229.213833,
        "min" : 1229.213833,
        "sum" : 1.229213833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1223.921804,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1223.921804,
        "min" : 1223.921804,
        "sum" : 1.223921804E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.26694,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.26694,
        "min" : 1205.26694,
        "sum" : 1.20526694E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1206.977769,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1206.977769,
        "min" : 1206.977769,
        "sum" : 1.206977769E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.023574,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.023574,
        "min" : 1200.023574,
        "sum" : 1.200023574E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1213.250425,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1213.250425,
        "min" : 1213.250425,
        "sum" : 1.213250425E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.279285,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.279285,
        "min" : 1220.279285,
        "sum" : 1.220279285E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 1466.269064,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1466.269064,
        "min" : 1466.269064,
        "sum" : 1.466269064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1290.683499,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1290.683499,
        "min" : 1290.683499,
        "sum" : 1.290683499E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1243.446764,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1243.446764,
        "min" : 1243.446764,
        "sum" : 1.243446764E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1203.353433,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1203.353433,
        "min" : 1203.353433,
        "sum" : 1.203353433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.246825,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.246825,
        "min" : 1198.246825,
        "sum" : 1.198246825E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1203.355539,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1203.355539,
        "min" : 1203.355539,
        "sum" : 1.203355539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.669347,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.669347,
        "min" : 1217.669347,
        "sum" : 1.217669347E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1209.366476,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1209.366476,
        "min" : 1209.366476,
        "sum" : 1.209366476E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.967928,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.967928,
        "min" : 1234.967928,
        "sum" : 1.234967928E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.79146,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.79146,
        "min" : 1205.79146,
        "sum" : 1.20579146E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 1497.578849,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1497.578849,
        "min" : 1497.578849,
        "sum" : 1.497578849E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1248.531791,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1248.531791,
        "min" : 1248.531791,
        "sum" : 1.248531791E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1229.115415,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1229.115415,
        "min" : 1229.115415,
        "sum" : 1.229115415E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1207.904542,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1207.904542,
        "min" : 1207.904542,
        "sum" : 1.207904542E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1202.813644,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1202.813644,
        "min" : 1202.813644,
        "sum" : 1.202813644E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.144922,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.144922,
        "min" : 1194.144922,
        "sum" : 1.194144922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1191.023284,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1191.023284,
        "min" : 1191.023284,
        "sum" : 1.191023284E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.561408,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.561408,
        "min" : 1224.561408,
        "sum" : 1.224561408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1191.235447,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1191.235447,
        "min" : 1191.235447,
        "sum" : 1.191235447E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.570353,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.570353,
        "min" : 1198.570353,
        "sum" : 1.198570353E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 1482.730615,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1482.730615,
        "min" : 1482.730615,
        "sum" : 1.482730615E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1282.045118,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1282.045118,
        "min" : 1282.045118,
        "sum" : 1.282045118E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1236.787824,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1236.787824,
        "min" : 1236.787824,
        "sum" : 1.236787824E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1240.831638,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1240.831638,
        "min" : 1240.831638,
        "sum" : 1.240831638E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.335092,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.335092,
        "min" : 1234.335092,
        "sum" : 1.234335092E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.530604,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.530604,
        "min" : 1217.530604,
        "sum" : 1.217530604E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1230.510059,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1230.510059,
        "min" : 1230.510059,
        "sum" : 1.230510059E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1218.826417,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1218.826417,
        "min" : 1218.826417,
        "sum" : 1.218826417E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1225.841418,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1225.841418,
        "min" : 1225.841418,
        "sum" : 1.225841418E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1235.193037,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1235.193037,
        "min" : 1235.193037,
        "sum" : 1.235193037E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 1551.330065,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1551.330065,
        "min" : 1551.330065,
        "sum" : 1.551330065E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1281.360073,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1281.360073,
        "min" : 1281.360073,
        "sum" : 1.281360073E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.146946,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.146946,
        "min" : 1234.146946,
        "sum" : 1.234146946E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222.080793,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1222.080793,
        "min" : 1222.080793,
        "sum" : 1.222080793E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.89088,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.89088,
        "min" : 1224.89088,
        "sum" : 1.22489088E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1246.788815,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1246.788815,
        "min" : 1246.788815,
        "sum" : 1.246788815E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.436809,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.436809,
        "min" : 1217.436809,
        "sum" : 1.217436809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1218.671924,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1218.671924,
        "min" : 1218.671924,
        "sum" : 1.218671924E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1213.3525,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1213.3525,
        "min" : 1213.3525,
        "sum" : 1.2133525E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.292199,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.292199,
        "min" : 1224.292199,
        "sum" : 1.224292199E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 1469.480783,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1469.480783,
        "min" : 1469.480783,
        "sum" : 1.469480783E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1279.596927,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1279.596927,
        "min" : 1279.596927,
        "sum" : 1.279596927E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1241.573352,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1241.573352,
        "min" : 1241.573352,
        "sum" : 1.241573352E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1232.570175,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1232.570175,
        "min" : 1232.570175,
        "sum" : 1.232570175E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1241.78944,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1241.78944,
        "min" : 1241.78944,
        "sum" : 1.24178944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.571476,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.571476,
        "min" : 1220.571476,
        "sum" : 1.220571476E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1209.736311,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1209.736311,
        "min" : 1209.736311,
        "sum" : 1.209736311E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1209.01206,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1209.01206,
        "min" : 1209.01206,
        "sum" : 1.20901206E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.470243,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.470243,
        "min" : 1234.470243,
        "sum" : 1.234470243E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1221.507396,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1221.507396,
        "min" : 1221.507396,
        "sum" : 1.221507396E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 1456.01682,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1456.01682,
        "min" : 1456.01682,
        "sum" : 1.45601682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1282.51156,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1282.51156,
        "min" : 1282.51156,
        "sum" : 1.28251156E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1238.939205,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1238.939205,
        "min" : 1238.939205,
        "sum" : 1.238939205E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1230.033122,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1230.033122,
        "min" : 1230.033122,
        "sum" : 1.230033122E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1249.181028,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1249.181028,
        "min" : 1249.181028,
        "sum" : 1.249181028E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.181713,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.181713,
        "min" : 1224.181713,
        "sum" : 1.224181713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1247.441429,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1247.441429,
        "min" : 1247.441429,
        "sum" : 1.247441429E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1227.152302,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1227.152302,
        "min" : 1227.152302,
        "sum" : 1.227152302E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.940142,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.940142,
        "min" : 1224.940142,
        "sum" : 1.224940142E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.901404,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.901404,
        "min" : 1212.901404,
        "sum" : 1.212901404E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 1504.865086,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1504.865086,
        "min" : 1504.865086,
        "sum" : 1.504865086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1258.472104,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1258.472104,
        "min" : 1258.472104,
        "sum" : 1.258472104E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1273.637632,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1273.637632,
        "min" : 1273.637632,
        "sum" : 1.273637632E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1241.456776,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1241.456776,
        "min" : 1241.456776,
        "sum" : 1.241456776E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1211.632779,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1211.632779,
        "min" : 1211.632779,
        "sum" : 1.211632779E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1230.354268,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1230.354268,
        "min" : 1230.354268,
        "sum" : 1.230354268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.984171,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.984171,
        "min" : 1198.984171,
        "sum" : 1.198984171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1219.828997,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1219.828997,
        "min" : 1219.828997,
        "sum" : 1.219828997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1209.858649,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1209.858649,
        "min" : 1209.858649,
        "sum" : 1.209858649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1190.64168,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1190.64168,
        "min" : 1190.64168,
        "sum" : 1.19064168E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 1505.330059,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1505.330059,
        "min" : 1505.330059,
        "sum" : 1.505330059E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1267.265386,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1267.265386,
        "min" : 1267.265386,
        "sum" : 1.267265386E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1263.75812,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1263.75812,
        "min" : 1263.75812,
        "sum" : 1.26375812E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.997584,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.997584,
        "min" : 1220.997584,
        "sum" : 1.220997584E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1213.568566,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1213.568566,
        "min" : 1213.568566,
        "sum" : 1.213568566E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.065849,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.065849,
        "min" : 1200.065849,
        "sum" : 1.200065849E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1218.331399,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1218.331399,
        "min" : 1218.331399,
        "sum" : 1.218331399E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.87272,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.87272,
        "min" : 1212.87272,
        "sum" : 1.21287272E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1207.641193,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1207.641193,
        "min" : 1207.641193,
        "sum" : 1.207641193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.00899,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.00899,
        "min" : 1217.00899,
        "sum" : 1.21700899E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 1484.886479,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1484.886479,
        "min" : 1484.886479,
        "sum" : 1.484886479E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1234.841592,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1234.841592,
        "min" : 1234.841592,
        "sum" : 1.234841592E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1251.228038,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1251.228038,
        "min" : 1251.228038,
        "sum" : 1.251228038E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1207.134717,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1207.134717,
        "min" : 1207.134717,
        "sum" : 1.207134717E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.271162,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.271162,
        "min" : 1200.271162,
        "sum" : 1.200271162E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.169982,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.169982,
        "min" : 1198.169982,
        "sum" : 1.198169982E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.828655,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.828655,
        "min" : 1194.828655,
        "sum" : 1.194828655E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.406723,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.406723,
        "min" : 1198.406723,
        "sum" : 1.198406723E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1192.984898,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1192.984898,
        "min" : 1192.984898,
        "sum" : 1.192984898E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.075622,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.075622,
        "min" : 1194.075622,
        "sum" : 1.194075622E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 1453.851137,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1453.851137,
        "min" : 1453.851137,
        "sum" : 1.453851137E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1226.985991,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1226.985991,
        "min" : 1226.985991,
        "sum" : 1.226985991E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1267.73686,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1267.73686,
        "min" : 1267.73686,
        "sum" : 1.26773686E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.393997,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.393997,
        "min" : 1212.393997,
        "sum" : 1.212393997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1209.70468,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1209.70468,
        "min" : 1209.70468,
        "sum" : 1.20970468E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1197.024712,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1197.024712,
        "min" : 1197.024712,
        "sum" : 1.197024712E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193.636688,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1193.636688,
        "min" : 1193.636688,
        "sum" : 1.193636688E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1189.962657,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1189.962657,
        "min" : 1189.962657,
        "sum" : 1.189962657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1186.853296,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1186.853296,
        "min" : 1186.853296,
        "sum" : 1.186853296E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1181.263907,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1181.263907,
        "min" : 1181.263907,
        "sum" : 1.181263907E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 1474.886042,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1474.886042,
        "min" : 1474.886042,
        "sum" : 1.474886042E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1261.531766,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1261.531766,
        "min" : 1261.531766,
        "sum" : 1.261531766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1254.267148,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1254.267148,
        "min" : 1254.267148,
        "sum" : 1.254267148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222.612824,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1222.612824,
        "min" : 1222.612824,
        "sum" : 1.222612824E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1204.360142,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1204.360142,
        "min" : 1204.360142,
        "sum" : 1.204360142E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.11007,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.11007,
        "min" : 1210.11007,
        "sum" : 1.21011007E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.521376,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.521376,
        "min" : 1210.521376,
        "sum" : 1.210521376E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1216.616631,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1216.616631,
        "min" : 1216.616631,
        "sum" : 1.216616631E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1189.74529,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1189.74529,
        "min" : 1189.74529,
        "sum" : 1.18974529E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1184.473095,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1184.473095,
        "min" : 1184.473095,
        "sum" : 1.184473095E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 1459.743807,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1459.743807,
        "min" : 1459.743807,
        "sum" : 1.459743807E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1245.358055,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1245.358055,
        "min" : 1245.358055,
        "sum" : 1.245358055E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1252.266641,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1252.266641,
        "min" : 1252.266641,
        "sum" : 1.252266641E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1187.233418,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1187.233418,
        "min" : 1187.233418,
        "sum" : 1.187233418E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1204.567626,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1204.567626,
        "min" : 1204.567626,
        "sum" : 1.204567626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1208.269486,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1208.269486,
        "min" : 1208.269486,
        "sum" : 1.208269486E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.682458,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.682458,
        "min" : 1200.682458,
        "sum" : 1.200682458E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.26862,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.26862,
        "min" : 1212.26862,
        "sum" : 1.21226862E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1200.733509,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1200.733509,
        "min" : 1200.733509,
        "sum" : 1.200733509E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1192.154904,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1192.154904,
        "min" : 1192.154904,
        "sum" : 1.192154904E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 1504.677148,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1504.677148,
        "min" : 1504.677148,
        "sum" : 1.504677148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1229.349779,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1229.349779,
        "min" : 1229.349779,
        "sum" : 1.229349779E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1230.725382,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1230.725382,
        "min" : 1230.725382,
        "sum" : 1.230725382E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.029829,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.029829,
        "min" : 1198.029829,
        "sum" : 1.198029829E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.671526,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.671526,
        "min" : 1210.671526,
        "sum" : 1.210671526E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1199.104198,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1199.104198,
        "min" : 1199.104198,
        "sum" : 1.199104198E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193.637936,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1193.637936,
        "min" : 1193.637936,
        "sum" : 1.193637936E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1193.04752,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1193.04752,
        "min" : 1193.04752,
        "sum" : 1.19304752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1211.868133,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1211.868133,
        "min" : 1211.868133,
        "sum" : 1.211868133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1207.804644,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1207.804644,
        "min" : 1207.804644,
        "sum" : 1.207804644E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 1456.278337,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1456.278337,
        "min" : 1456.278337,
        "sum" : 1.456278337E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1233.931529,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1233.931529,
        "min" : 1233.931529,
        "sum" : 1.233931529E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1235.172944,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1235.172944,
        "min" : 1235.172944,
        "sum" : 1.235172944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1204.531764,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1204.531764,
        "min" : 1204.531764,
        "sum" : 1.204531764E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1216.433454,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1216.433454,
        "min" : 1216.433454,
        "sum" : 1.216433454E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1228.120099,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1228.120099,
        "min" : 1228.120099,
        "sum" : 1.228120099E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1223.873905,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1223.873905,
        "min" : 1223.873905,
        "sum" : 1.223873905E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1207.210476,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1207.210476,
        "min" : 1207.210476,
        "sum" : 1.207210476E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1196.475099,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1196.475099,
        "min" : 1196.475099,
        "sum" : 1.196475099E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1194.22971,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1194.22971,
        "min" : 1194.22971,
        "sum" : 1.19422971E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 1420.919641,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1420.919641,
        "min" : 1420.919641,
        "sum" : 1.420919641E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222.452448,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1222.452448,
        "min" : 1222.452448,
        "sum" : 1.222452448E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1226.106063,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1226.106063,
        "min" : 1226.106063,
        "sum" : 1.226106063E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1242.076607,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1242.076607,
        "min" : 1242.076607,
        "sum" : 1.242076607E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.835846,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.835846,
        "min" : 1220.835846,
        "sum" : 1.220835846E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1233.422358,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1233.422358,
        "min" : 1233.422358,
        "sum" : 1.233422358E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.81194,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.81194,
        "min" : 1212.81194,
        "sum" : 1.21281194E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1210.59773,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1210.59773,
        "min" : 1210.59773,
        "sum" : 1.21059773E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1215.398117,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1215.398117,
        "min" : 1215.398117,
        "sum" : 1.215398117E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1188.331866,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1188.331866,
        "min" : 1188.331866,
        "sum" : 1.188331866E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 1519.373983,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1519.373983,
        "min" : 1519.373983,
        "sum" : 1.519373983E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1250.332463,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1250.332463,
        "min" : 1250.332463,
        "sum" : 1.250332463E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1261.670285,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1261.670285,
        "min" : 1261.670285,
        "sum" : 1.261670285E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1238.091829,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1238.091829,
        "min" : 1238.091829,
        "sum" : 1.238091829E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1220.629004,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1220.629004,
        "min" : 1220.629004,
        "sum" : 1.220629004E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.352835,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.352835,
        "min" : 1217.352835,
        "sum" : 1.217352835E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1214.78332,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1214.78332,
        "min" : 1214.78332,
        "sum" : 1.21478332E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1199.250365,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1199.250365,
        "min" : 1199.250365,
        "sum" : 1.199250365E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.052791,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.052791,
        "min" : 1212.052791,
        "sum" : 1.212052791E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1201.719015,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1201.719015,
        "min" : 1201.719015,
        "sum" : 1.201719015E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 1468.373997,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1468.373997,
        "min" : 1468.373997,
        "sum" : 1.468373997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1295.304424,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1295.304424,
        "min" : 1295.304424,
        "sum" : 1.295304424E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1226.999991,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1226.999991,
        "min" : 1226.999991,
        "sum" : 1.226999991E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1232.175917,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1232.175917,
        "min" : 1232.175917,
        "sum" : 1.232175917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1225.616475,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1225.616475,
        "min" : 1225.616475,
        "sum" : 1.225616475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1211.635833,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1211.635833,
        "min" : 1211.635833,
        "sum" : 1.211635833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1213.62321,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1213.62321,
        "min" : 1213.62321,
        "sum" : 1.21362321E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1216.567626,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1216.567626,
        "min" : 1216.567626,
        "sum" : 1.216567626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1251.340937,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1251.340937,
        "min" : 1251.340937,
        "sum" : 1.251340937E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1229.951441,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1229.951441,
        "min" : 1229.951441,
        "sum" : 1.229951441E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 1500.983985,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1500.983985,
        "min" : 1500.983985,
        "sum" : 1.500983985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1307.588833,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1307.588833,
        "min" : 1307.588833,
        "sum" : 1.307588833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1247.333749,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1247.333749,
        "min" : 1247.333749,
        "sum" : 1.247333749E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1253.752,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1253.752,
        "min" : 1253.752,
        "sum" : 1.253752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1243.097651,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1243.097651,
        "min" : 1243.097651,
        "sum" : 1.243097651E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1221.522296,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1221.522296,
        "min" : 1221.522296,
        "sum" : 1.221522296E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1227.065114,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1227.065114,
        "min" : 1227.065114,
        "sum" : 1.227065114E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1232.734795,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1232.734795,
        "min" : 1232.734795,
        "sum" : 1.232734795E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1236.619209,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1236.619209,
        "min" : 1236.619209,
        "sum" : 1.236619209E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1222.368363,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1222.368363,
        "min" : 1222.368363,
        "sum" : 1.222368363E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 1482.486169,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1482.486169,
        "min" : 1482.486169,
        "sum" : 1.482486169E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1239.806493,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1239.806493,
        "min" : 1239.806493,
        "sum" : 1.239806493E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1219.675453,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1219.675453,
        "min" : 1219.675453,
        "sum" : 1.219675453E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1225.2853,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1225.2853,
        "min" : 1225.2853,
        "sum" : 1.2252853E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1202.506954,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1202.506954,
        "min" : 1202.506954,
        "sum" : 1.202506954E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.638791,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.638791,
        "min" : 1205.638791,
        "sum" : 1.205638791E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.740755,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.740755,
        "min" : 1205.740755,
        "sum" : 1.205740755E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1196.98737,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1196.98737,
        "min" : 1196.98737,
        "sum" : 1.19698737E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1205.937777,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1205.937777,
        "min" : 1205.937777,
        "sum" : 1.205937777E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1212.543799,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1212.543799,
        "min" : 1212.543799,
        "sum" : 1.212543799E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 1425.540486,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1425.540486,
        "min" : 1425.540486,
        "sum" : 1.425540486E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1280.871904,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1280.871904,
        "min" : 1280.871904,
        "sum" : 1.280871904E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1213.175596,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1213.175596,
        "min" : 1213.175596,
        "sum" : 1.213175596E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1204.218444,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1204.218444,
        "min" : 1204.218444,
        "sum" : 1.204218444E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1224.172371,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1224.172371,
        "min" : 1224.172371,
        "sum" : 1.224172371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1217.369683,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1217.369683,
        "min" : 1217.369683,
        "sum" : 1.217369683E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1202.409108,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1202.409108,
        "min" : 1202.409108,
        "sum" : 1.202409108E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1198.370716,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1198.370716,
        "min" : 1198.370716,
        "sum" : 1.198370716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1188.477425,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1188.477425,
        "min" : 1188.477425,
        "sum" : 1.188477425E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1189.031041,
        "variance" : 0.0,
        "n" : 1000000,
        "max" : 1189.031041,
        "min" : 1189.031041,
        "sum" : 1.189031041E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
