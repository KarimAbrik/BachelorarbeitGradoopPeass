if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Test Case: org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment<br>";
   if (typeof jenkins !== 'undefined') {
      document.getElementById('testcaseDiv').innerHTML+="<p class='button-wrap'><a role='button' href='dashboard?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a></p>";
   } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='testAssignment_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
}

var source = {"current":
{
 "org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment_":
 `@Test
public void testAssignment() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> databaseCommunity = getGraphStore().getGraph(0L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> graphCommunity = getGraphStore().getGraph(2L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = graphCommunity.overlap(databaseCommunity);
    // use collections as data sink
    Collection<DefaultVertexData> vertexData = Lists.newArrayList();
    Collection<DefaultEdgeData> edgeData = Lists.newArrayList();
    newGraph.getVertexData().output(new LocalCollectionOutputFormat<>(vertexData));
    newGraph.getEdgeData().output(new LocalCollectionOutputFormat<>(edgeData));
    getExecutionEnvironment().execute();
    for (DefaultVertexData v : vertexData) {
        Set<Long> gIDs = v.getGraphs();
        if (v.equals(GradoopTestBaseUtils.VERTEX_PERSON_ALICE)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (v.equals(GradoopTestBaseUtils.VERTEX_PERSON_BOB)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        }
    }
    for (DefaultEdgeData e : edgeData) {
        Set<Long> gIDs = e.getGraphs();
        if (e.equals(GradoopTestBaseUtils.EDGE_0_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(GradoopTestBaseUtils.EDGE_1_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        }
    }
}`,"org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,},
"old":
{
 "org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment_":
 `@Test
public void testAssignment() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> databaseCommunity = getGraphStore().getGraph(0L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> graphCommunity = getGraphStore().getGraph(2L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = graphCommunity.overlap(databaseCommunity);
    Collection<DefaultVertexData> vertexData = newGraph.getVertexData().collect();
    Collection<DefaultEdgeData> edgeData = newGraph.getEdgeData().collect();
    for (DefaultVertexData v : vertexData) {
        Set<Long> gIDs = v.getGraphs();
        if (v.equals(GradoopTestBaseUtils.VERTEX_PERSON_ALICE)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (v.equals(GradoopTestBaseUtils.VERTEX_PERSON_BOB)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        }
    }
    for (DefaultEdgeData e : edgeData) {
        Set<Long> gIDs = e.getGraphs();
        if (e.equals(GradoopTestBaseUtils.EDGE_0_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(GradoopTestBaseUtils.EDGE_1_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        }
    }
}`,"org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment()",
  "otherKiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment()",
  "module" : "gradoop-flink",
  "name" : "LogicalGraphOverlapTest#testAssignment",
  "key" : "org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment_",
  "otherKey" : "org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment_",
  "parent" : null,
  "color" : "#00FF00",
  "statistic" : {
    "meanOld" : 4.14805624398E9,
    "meanCurrent" : 4.0246514107366667E9,
    "deviationOld" : 9.247937668565497E7,
    "deviationCurrent" : 7.473484767880335E7,
    "vms" : 30,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 5.684639333427139,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 4.005310283473569E7,
  "inVMDeviation" : 5.0932563112217985E7,
  "ess" : 0,
  "values" : [ 3.9466341303E9, 3.9667872251E9, 4.1111848112E9, 3.9929180815E9, 3.9397222295E9, 4.1351333298E9, 4.0581023449E9, 3.9898361535E9, 3.9268080837E9, 4.1811506144E9, 4.0113871429E9, 4.1260219674E9, 4.0136994653E9, 3.9755333766E9, 3.9121102479E9, 4.1570476178E9, 3.961656206E9, 3.9801310692E9, 3.971172467E9, 3.992499302E9, 4.0425768896E9, 3.9624653777E9, 3.9386301024E9, 4.0421047861E9, 4.1196270176E9, 4.0999682394E9, 3.9761976522E9, 4.0800521581E9, 4.070333923E9, 4.05805031E9 ],
  "valuesPredecessor" : [ 4.0734452746E9, 4.0794722526E9, 4.2044277722E9, 4.0809860128E9, 4.0478321412E9, 4.1573942384E9, 4.1989611574E9, 4.0888829628E9, 4.0407136732E9, 4.1390219296E9, 4.4113217406E9, 4.2503166598E9, 4.1166547762E9, 4.0787324302E9, 4.0274274064E9, 4.1823863256E9, 4.0576732448E9, 4.0759854348E9, 4.097607238E9, 4.3631103972E9, 4.1706610612E9, 4.0844326354E9, 4.0601327528E9, 4.1341040458E9, 4.1945931794E9, 4.2348528824E9, 4.135035729E9, 4.2437259464E9, 4.2232708104E9, 4.1885252082E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 3.9824935635E9,
        "variance" : 3.82376707846638E15,
        "n" : 1,
        "max" : 4.026218654E9,
        "min" : 3.938768473E9,
        "sum" : 3.9824935635E9,
        "standardDeviation" : 6.183661600109097E7
      }, {
        "mean" : 3.937867143E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.937867143E9,
        "min" : 3.937867143E9,
        "sum" : 3.937867143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.939434562E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.939434562E9,
        "min" : 3.939434562E9,
        "sum" : 3.939434562E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.976826846E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.976826846E9,
        "min" : 3.976826846E9,
        "sum" : 3.976826846E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.896548537E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.896548537E9,
        "min" : 3.896548537E9,
        "sum" : 3.896548537E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 3.9626049515E9,
        "variance" : 9.336597585005E11,
        "n" : 1,
        "max" : 3.963288201E9,
        "min" : 3.961921702E9,
        "sum" : 3.9626049515E9,
        "standardDeviation" : 966260.709384636
      }, {
        "mean" : 3.960251361E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.960251361E9,
        "min" : 3.960251361E9,
        "sum" : 3.960251361E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.979646382E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.979646382E9,
        "min" : 3.979646382E9,
        "sum" : 3.979646382E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.975889679E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.975889679E9,
        "min" : 3.975889679E9,
        "sum" : 3.975889679E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.955543752E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.955543752E9,
        "min" : 3.955543752E9,
        "sum" : 3.955543752E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.0701473095E9,
        "variance" : 8.921190670346065E15,
        "n" : 2,
        "max" : 4.136934998E9,
        "min" : 4.003359621E9,
        "sum" : 8.140294619E9,
        "standardDeviation" : 9.44520548762496E7
      }, {
        "mean" : 4.211443303E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.211443303E9,
        "min" : 4.211443303E9,
        "sum" : 4.211443303E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.126377137E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.126377137E9,
        "min" : 4.126377137E9,
        "sum" : 4.126377137E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.077808997E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.077808997E9,
        "min" : 4.077808997E9,
        "sum" : 4.077808997E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 3.9974969105E9,
        "variance" : 3.64775946935805E13,
        "n" : 1,
        "max" : 4.001767601E9,
        "min" : 3.99322622E9,
        "sum" : 3.9974969105E9,
        "standardDeviation" : 6039668.425797935
      }, {
        "mean" : 3.912479275E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.912479275E9,
        "min" : 3.912479275E9,
        "sum" : 3.912479275E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.029239541E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.029239541E9,
        "min" : 4.029239541E9,
        "sum" : 4.029239541E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.075754106E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.075754106E9,
        "min" : 4.075754106E9,
        "sum" : 4.075754106E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.949620575E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.949620575E9,
        "min" : 3.949620575E9,
        "sum" : 3.949620575E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 3.9774399055E9,
        "variance" : 4.245789410478085E15,
        "n" : 1,
        "max" : 4.023514787E9,
        "min" : 3.931365024E9,
        "sum" : 3.9774399055E9,
        "standardDeviation" : 6.5159722302033216E7
      }, {
        "mean" : 3.836821886E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.836821886E9,
        "min" : 3.836821886E9,
        "sum" : 3.836821886E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.938972371E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.938972371E9,
        "min" : 3.938972371E9,
        "sum" : 3.938972371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.003605661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.003605661E9,
        "min" : 4.003605661E9,
        "sum" : 4.003605661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.941771324E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.941771324E9,
        "min" : 3.941771324E9,
        "sum" : 3.941771324E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.1335547275E9,
        "variance" : 1.1511765152156405E15,
        "n" : 2,
        "max" : 4.157546148E9,
        "min" : 4.109563307E9,
        "sum" : 8.267109455E9,
        "standardDeviation" : 3.39289922516959E7
      }, {
        "mean" : 4.120463508E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.120463508E9,
        "min" : 4.120463508E9,
        "sum" : 4.120463508E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.165031448E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.165031448E9,
        "min" : 4.165031448E9,
        "sum" : 4.165031448E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.123062238E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.123062238E9,
        "min" : 4.123062238E9,
        "sum" : 4.123062238E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.0677468385E9,
        "variance" : 1.8002016656481602E15,
        "n" : 1,
        "max" : 4.097748519E9,
        "min" : 4.037745158E9,
        "sum" : 4.0677468385E9,
        "standardDeviation" : 4.242878345708442E7
      }, {
        "mean" : 4.077882559E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.077882559E9,
        "min" : 4.077882559E9,
        "sum" : 4.077882559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.078441824E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.078441824E9,
        "min" : 4.078441824E9,
        "sum" : 4.078441824E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.031510482E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.031510482E9,
        "min" : 4.031510482E9,
        "sum" : 4.031510482E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.034930021E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.034930021E9,
        "min" : 4.034930021E9,
        "sum" : 4.034930021E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.0625090595E9,
        "variance" : 9.974194651840144E15,
        "n" : 1,
        "max" : 4.133128443E9,
        "min" : 3.991889676E9,
        "sum" : 4.0625090595E9,
        "standardDeviation" : 9.987088991212676E7
      }, {
        "mean" : 3.858566078E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.858566078E9,
        "min" : 3.858566078E9,
        "sum" : 3.858566078E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.999755024E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.999755024E9,
        "min" : 3.999755024E9,
        "sum" : 3.999755024E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.002002661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.002002661E9,
        "min" : 4.002002661E9,
        "sum" : 4.002002661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.026347945E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.026347945E9,
        "min" : 4.026347945E9,
        "sum" : 4.026347945E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 3.9529901285E9,
        "variance" : 2.6395089986181005E15,
        "n" : 1,
        "max" : 3.989318554E9,
        "min" : 3.916661703E9,
        "sum" : 3.9529901285E9,
        "standardDeviation" : 5.1376152041760586E7
      }, {
        "mean" : 3.804722994E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.804722994E9,
        "min" : 3.804722994E9,
        "sum" : 3.804722994E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.977763438E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.977763438E9,
        "min" : 3.977763438E9,
        "sum" : 3.977763438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.964836374E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.964836374E9,
        "min" : 3.964836374E9,
        "sum" : 3.964836374E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.933727484E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.933727484E9,
        "min" : 3.933727484E9,
        "sum" : 3.933727484E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.1873955045E9,
        "variance" : 3.8510417575476125E15,
        "n" : 2,
        "max" : 4.231276262E9,
        "min" : 4.143514747E9,
        "sum" : 8.374791009E9,
        "standardDeviation" : 6.205676238370491E7
      }, {
        "mean" : 4.106029575E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.106029575E9,
        "min" : 4.106029575E9,
        "sum" : 4.106029575E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.229561033E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.229561033E9,
        "min" : 4.229561033E9,
        "sum" : 4.229561033E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.195371455E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.195371455E9,
        "min" : 4.195371455E9,
        "sum" : 4.195371455E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.0379342335E9,
        "variance" : 1.706834496988445E14,
        "n" : 1,
        "max" : 4.047172292E9,
        "min" : 4.028696175E9,
        "sum" : 4.0379342335E9,
        "standardDeviation" : 1.3064587620696051E7
      }, {
        "mean" : 3.91543991E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.91543991E9,
        "min" : 3.91543991E9,
        "sum" : 3.91543991E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.019601318E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.019601318E9,
        "min" : 4.019601318E9,
        "sum" : 4.019601318E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.10105583E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.10105583E9,
        "min" : 4.10105583E9,
        "sum" : 4.10105583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.982904423E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.982904423E9,
        "min" : 3.982904423E9,
        "sum" : 3.982904423E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.1567603045E9,
        "variance" : 1.06718073036125E13,
        "n" : 2,
        "max" : 4.159070262E9,
        "min" : 4.154450347E9,
        "sum" : 8.313520609E9,
        "standardDeviation" : 3266773.225005449
      }, {
        "mean" : 4.108005731E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.108005731E9,
        "min" : 4.108005731E9,
        "sum" : 4.108005731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.092510875E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.092510875E9,
        "min" : 4.092510875E9,
        "sum" : 4.092510875E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.116072622E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.116072622E9,
        "min" : 4.116072622E9,
        "sum" : 4.116072622E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.1367938175E9,
        "variance" : 1.058882320546111E16,
        "n" : 1,
        "max" : 4.209556525E9,
        "min" : 4.06403111E9,
        "sum" : 4.1367938175E9,
        "standardDeviation" : 1.0290200778148651E8
      }, {
        "mean" : 3.94651542E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.94651542E9,
        "min" : 3.94651542E9,
        "sum" : 3.94651542E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.969930786E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.969930786E9,
        "min" : 3.969930786E9,
        "sum" : 3.969930786E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.989317875E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.989317875E9,
        "min" : 3.989317875E9,
        "sum" : 3.989317875E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.025939428E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.025939428E9,
        "min" : 4.025939428E9,
        "sum" : 4.025939428E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 3.990038312E9,
        "variance" : 7.307478935337798E13,
        "n" : 1,
        "max" : 3.996082929E9,
        "min" : 3.983993695E9,
        "sum" : 3.990038312E9,
        "standardDeviation" : 8548379.34075097
      }, {
        "mean" : 3.879217688E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.879217688E9,
        "min" : 3.879217688E9,
        "sum" : 3.879217688E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.937948035E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.937948035E9,
        "min" : 3.937948035E9,
        "sum" : 3.937948035E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.085839999E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.085839999E9,
        "min" : 4.085839999E9,
        "sum" : 4.085839999E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.984622849E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.984622849E9,
        "min" : 3.984622849E9,
        "sum" : 3.984622849E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 3.9678497845E9,
        "variance" : 3.502225401209645E14,
        "n" : 1,
        "max" : 3.981082746E9,
        "min" : 3.954616823E9,
        "sum" : 3.9678497845E9,
        "standardDeviation" : 1.8714233623661015E7
      }, {
        "mean" : 3.839668112E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.839668112E9,
        "min" : 3.839668112E9,
        "sum" : 3.839668112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.927125494E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.927125494E9,
        "min" : 3.927125494E9,
        "sum" : 3.927125494E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.950252259E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.950252259E9,
        "min" : 3.950252259E9,
        "sum" : 3.950252259E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.87565559E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.87565559E9,
        "min" : 3.87565559E9,
        "sum" : 3.87565559E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.148134652E9,
        "variance" : 8.791097299072713E15,
        "n" : 2,
        "max" : 4.214433586E9,
        "min" : 4.081835718E9,
        "sum" : 8.296269304E9,
        "standardDeviation" : 9.376085163367872E7
      }, {
        "mean" : 4.157009068E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157009068E9,
        "min" : 4.157009068E9,
        "sum" : 4.157009068E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.217847742E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.217847742E9,
        "min" : 4.217847742E9,
        "sum" : 4.217847742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.114111975E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.114111975E9,
        "min" : 4.114111975E9,
        "sum" : 4.114111975E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 3.974693383E9,
        "variance" : 9.489468389369922E15,
        "n" : 1,
        "max" : 4.043575414E9,
        "min" : 3.905811352E9,
        "sum" : 3.974693383E9,
        "standardDeviation" : 9.741390244400397E7
      }, {
        "mean" : 3.870541957E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.870541957E9,
        "min" : 3.870541957E9,
        "sum" : 3.870541957E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.97175682E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.97175682E9,
        "min" : 3.97175682E9,
        "sum" : 3.97175682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.987038652E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.987038652E9,
        "min" : 3.987038652E9,
        "sum" : 3.987038652E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.004250218E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.004250218E9,
        "min" : 4.004250218E9,
        "sum" : 4.004250218E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 3.974060693E9,
        "variance" : 2.7596812403888725E15,
        "n" : 1,
        "max" : 4.011206899E9,
        "min" : 3.936914487E9,
        "sum" : 3.974060693E9,
        "standardDeviation" : 5.253266831590484E7
      }, {
        "mean" : 4.00469802E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.00469802E9,
        "min" : 4.00469802E9,
        "sum" : 4.00469802E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.983018754E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.983018754E9,
        "min" : 3.983018754E9,
        "sum" : 3.983018754E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.964376219E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.964376219E9,
        "min" : 3.964376219E9,
        "sum" : 3.964376219E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.97450166E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.97450166E9,
        "min" : 3.97450166E9,
        "sum" : 3.97450166E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.010446693E9,
        "variance" : 7.23491357339538E14,
        "n" : 1,
        "max" : 4.029466306E9,
        "min" : 3.99142708E9,
        "sum" : 4.010446693E9,
        "standardDeviation" : 2.689779465568763E7
      }, {
        "mean" : 3.877765654E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.877765654E9,
        "min" : 3.877765654E9,
        "sum" : 3.877765654E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.038717665E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.038717665E9,
        "min" : 4.038717665E9,
        "sum" : 4.038717665E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.980272376E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.980272376E9,
        "min" : 3.980272376E9,
        "sum" : 3.980272376E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.948659947E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.948659947E9,
        "min" : 3.948659947E9,
        "sum" : 3.948659947E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.006692066E9,
        "variance" : 1.8701678509123282E15,
        "n" : 2,
        "max" : 4.037271208E9,
        "min" : 3.976112924E9,
        "sum" : 8.013384132E9,
        "standardDeviation" : 4.324543734213273E7
      }, {
        "mean" : 4.014949563E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.014949563E9,
        "min" : 4.014949563E9,
        "sum" : 4.014949563E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.965036607E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.965036607E9,
        "min" : 3.965036607E9,
        "sum" : 3.965036607E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.969126208E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.969126208E9,
        "min" : 3.969126208E9,
        "sum" : 3.969126208E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.0277318995E9,
        "variance" : 1.1379971963543445E15,
        "n" : 2,
        "max" : 4.051585591E9,
        "min" : 4.003878208E9,
        "sum" : 8.055463799E9,
        "standardDeviation" : 3.373421403196382E7
      }, {
        "mean" : 4.092895705E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.092895705E9,
        "min" : 4.092895705E9,
        "sum" : 4.092895705E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.029885665E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.029885665E9,
        "min" : 4.029885665E9,
        "sum" : 4.029885665E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.034639279E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.034639279E9,
        "min" : 4.034639279E9,
        "sum" : 4.034639279E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 3.9910035135E9,
        "variance" : 3.4096697261911256E14,
        "n" : 1,
        "max" : 4.004060446E9,
        "min" : 3.977946581E9,
        "sum" : 3.9910035135E9,
        "standardDeviation" : 1.8465291024490044E7
      }, {
        "mean" : 3.866227484E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.866227484E9,
        "min" : 3.866227484E9,
        "sum" : 3.866227484E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.943966944E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.943966944E9,
        "min" : 3.943966944E9,
        "sum" : 3.943966944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.057744394E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.057744394E9,
        "min" : 4.057744394E9,
        "sum" : 4.057744394E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.953384553E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.953384553E9,
        "min" : 3.953384553E9,
        "sum" : 3.953384553E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 3.965362825E9,
        "variance" : 5.4890877844444994E14,
        "n" : 1,
        "max" : 3.98192949E9,
        "min" : 3.94879616E9,
        "sum" : 3.965362825E9,
        "standardDeviation" : 2.342880232629167E7
      }, {
        "mean" : 3.886205481E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.886205481E9,
        "min" : 3.886205481E9,
        "sum" : 3.886205481E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.954138278E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.954138278E9,
        "min" : 3.954138278E9,
        "sum" : 3.954138278E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.970162478E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.970162478E9,
        "min" : 3.970162478E9,
        "sum" : 3.970162478E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.91728145E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.91728145E9,
        "min" : 3.91728145E9,
        "sum" : 3.91728145E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.0616616275E9,
        "variance" : 6.243834115155126E14,
        "n" : 1,
        "max" : 4.079330575E9,
        "min" : 4.04399268E9,
        "sum" : 4.0616616275E9,
        "standardDeviation" : 2.4987665187358193E7
      }, {
        "mean" : 3.954141063E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.954141063E9,
        "min" : 3.954141063E9,
        "sum" : 3.954141063E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.067301082E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.067301082E9,
        "min" : 4.067301082E9,
        "sum" : 4.067301082E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.048148209E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.048148209E9,
        "min" : 4.048148209E9,
        "sum" : 4.048148209E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.079271949E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.079271949E9,
        "min" : 4.079271949E9,
        "sum" : 4.079271949E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.10356615E9,
        "variance" : 3.12936455656845E15,
        "n" : 1,
        "max" : 4.143122215E9,
        "min" : 4.064010085E9,
        "sum" : 4.10356615E9,
        "standardDeviation" : 5.59407235971117E7
      }, {
        "mean" : 4.026840972E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.026840972E9,
        "min" : 4.026840972E9,
        "sum" : 4.026840972E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.117965928E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.117965928E9,
        "min" : 4.117965928E9,
        "sum" : 4.117965928E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.170266084E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.170266084E9,
        "min" : 4.170266084E9,
        "sum" : 4.170266084E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.179495954E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.179495954E9,
        "min" : 4.179495954E9,
        "sum" : 4.179495954E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.0283996455E9,
        "variance" : 4.4548952873529845E15,
        "n" : 2,
        "max" : 4.075595489E9,
        "min" : 3.981203802E9,
        "sum" : 8.056799291E9,
        "standardDeviation" : 6.674500196533808E7
      }, {
        "mean" : 4.073715053E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.073715053E9,
        "min" : 4.073715053E9,
        "sum" : 4.073715053E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.246397198E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.246397198E9,
        "min" : 4.246397198E9,
        "sum" : 4.246397198E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.122929655E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.122929655E9,
        "min" : 4.122929655E9,
        "sum" : 4.122929655E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 3.9531044195E9,
        "variance" : 3.886704801486125E14,
        "n" : 2,
        "max" : 3.967044837E9,
        "min" : 3.939164002E9,
        "sum" : 7.906208839E9,
        "standardDeviation" : 1.9714727493643235E7
      }, {
        "mean" : 4.002328535E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.002328535E9,
        "min" : 4.002328535E9,
        "sum" : 4.002328535E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.096529716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.096529716E9,
        "min" : 4.096529716E9,
        "sum" : 4.096529716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.875921171E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.875921171E9,
        "min" : 3.875921171E9,
        "sum" : 3.875921171E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.0989235905E9,
        "variance" : 1.3297661254232045E15,
        "n" : 1,
        "max" : 4.124708917E9,
        "min" : 4.073138264E9,
        "sum" : 4.0989235905E9,
        "standardDeviation" : 3.646595844651837E7
      }, {
        "mean" : 4.071629477E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.071629477E9,
        "min" : 4.071629477E9,
        "sum" : 4.071629477E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.051693744E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.051693744E9,
        "min" : 4.051693744E9,
        "sum" : 4.051693744E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.112839418E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.112839418E9,
        "min" : 4.112839418E9,
        "sum" : 4.112839418E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.065174561E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.065174561E9,
        "min" : 4.065174561E9,
        "sum" : 4.065174561E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.104115724E9,
        "variance" : 2.6537550345378E13,
        "n" : 1,
        "max" : 4.107758357E9,
        "min" : 4.100473091E9,
        "sum" : 4.104115724E9,
        "standardDeviation" : 5151460.991347794
      }, {
        "mean" : 3.997624286E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.997624286E9,
        "min" : 3.997624286E9,
        "sum" : 3.997624286E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.022269495E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.022269495E9,
        "min" : 4.022269495E9,
        "sum" : 4.022269495E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.068940676E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.068940676E9,
        "min" : 4.068940676E9,
        "sum" : 4.068940676E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.158719434E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.158719434E9,
        "min" : 4.158719434E9,
        "sum" : 4.158719434E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.04950928E9,
        "variance" : 6.079560788423119E14,
        "n" : 2,
        "max" : 4.066944246E9,
        "min" : 4.032074314E9,
        "sum" : 8.09901856E9,
        "standardDeviation" : 2.465676537671379E7
      }, {
        "mean" : 4.073237275E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.073237275E9,
        "min" : 4.073237275E9,
        "sum" : 4.073237275E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.084561702E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.084561702E9,
        "min" : 4.084561702E9,
        "sum" : 4.084561702E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.033434013E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.033434013E9,
        "min" : 4.033434013E9,
        "sum" : 4.033434013E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.0466272435E9,
        "variance" : 1.388407336192422E16,
        "n" : 2,
        "max" : 4.129946129E9,
        "min" : 3.963308358E9,
        "sum" : 8.093254487E9,
        "standardDeviation" : 1.1783069787591101E8
      }, {
        "mean" : 4.060059473E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.060059473E9,
        "min" : 4.060059473E9,
        "sum" : 4.060059473E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.11076247E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.11076247E9,
        "min" : 4.11076247E9,
        "sum" : 4.11076247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.103149943E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.103149943E9,
        "min" : 4.103149943E9,
        "sum" : 4.103149943E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.073961462E9,
        "variance" : 5.71950525997805E15,
        "n" : 2,
        "max" : 4.127438117E9,
        "min" : 4.020484807E9,
        "sum" : 8.147922924E9,
        "standardDeviation" : 7.562741077134699E7
      }, {
        "mean" : 4.1052078E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.1052078E9,
        "min" : 4.1052078E9,
        "sum" : 4.1052078E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.082283672E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.082283672E9,
        "min" : 4.082283672E9,
        "sum" : 4.082283672E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.061946867E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.061946867E9,
        "min" : 4.061946867E9,
        "sum" : 4.061946867E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.202160144E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.202160144E9,
        "min" : 4.202160144E9,
        "sum" : 4.202160144E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1749272165E9,
        "variance" : 2.793608804411124E15,
        "n" : 2,
        "max" : 4.212301063E9,
        "min" : 4.13755337E9,
        "sum" : 8.349854433E9,
        "standardDeviation" : 5.285460059835023E7
      }, {
        "mean" : 4.263058684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.263058684E9,
        "min" : 4.263058684E9,
        "sum" : 4.263058684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2070656E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.2070656E9,
        "min" : 4.2070656E9,
        "sum" : 4.2070656E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.062813971E9,
        "variance" : 2.3396439021512E15,
        "n" : 2,
        "max" : 4.097016631E9,
        "min" : 4.028611311E9,
        "sum" : 8.125627942E9,
        "standardDeviation" : 4.836986564123576E7
      }, {
        "mean" : 4.14713595E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.14713595E9,
        "min" : 4.14713595E9,
        "sum" : 4.14713595E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.085563245E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.085563245E9,
        "min" : 4.085563245E9,
        "sum" : 4.085563245E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.046602927E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.046602927E9,
        "min" : 4.046602927E9,
        "sum" : 4.046602927E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.023187698E9,
        "variance" : 5.983408754851249E15,
        "n" : 2,
        "max" : 4.077884173E9,
        "min" : 3.968491223E9,
        "sum" : 8.046375396E9,
        "standardDeviation" : 7.735249675900093E7
      }, {
        "mean" : 4.030090689E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.030090689E9,
        "min" : 4.030090689E9,
        "sum" : 4.030090689E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.087483928E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.087483928E9,
        "min" : 4.087483928E9,
        "sum" : 4.087483928E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.075210693E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.075210693E9,
        "min" : 4.075210693E9,
        "sum" : 4.075210693E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.1641337225E9,
        "variance" : 1.2228874840598642E15,
        "n" : 2,
        "max" : 4.188861111E9,
        "min" : 4.139406334E9,
        "sum" : 8.328267445E9,
        "standardDeviation" : 3.49698081787685E7
      }, {
        "mean" : 4.134745128E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.134745128E9,
        "min" : 4.134745128E9,
        "sum" : 4.134745128E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.158708212E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.158708212E9,
        "min" : 4.158708212E9,
        "sum" : 4.158708212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.165250407E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.165250407E9,
        "min" : 4.165250407E9,
        "sum" : 4.165250407E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.195791467E9,
        "variance" : 1.8060681479782044E16,
        "n" : 2,
        "max" : 4.290819572E9,
        "min" : 4.100763362E9,
        "sum" : 8.391582934E9,
        "standardDeviation" : 1.343900348976145E8
      }, {
        "mean" : 4.192020887E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.192020887E9,
        "min" : 4.192020887E9,
        "sum" : 4.192020887E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.178123183E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.178123183E9,
        "min" : 4.178123183E9,
        "sum" : 4.178123183E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.233078783E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.233078783E9,
        "min" : 4.233078783E9,
        "sum" : 4.233078783E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.114072984E9,
        "variance" : 2.6623505809929797E14,
        "n" : 2,
        "max" : 4.125610641E9,
        "min" : 4.102535327E9,
        "sum" : 8.228145968E9,
        "standardDeviation" : 1.6316711007408876E7
      }, {
        "mean" : 4.105694483E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.105694483E9,
        "min" : 4.105694483E9,
        "sum" : 4.105694483E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.093851281E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.093851281E9,
        "min" : 4.093851281E9,
        "sum" : 4.093851281E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.016723082E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.016723082E9,
        "min" : 4.016723082E9,
        "sum" : 4.016723082E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.0020056285E9,
        "variance" : 7.33159518186946E15,
        "n" : 2,
        "max" : 4.062551459E9,
        "min" : 3.941459798E9,
        "sum" : 8.004011257E9,
        "standardDeviation" : 8.562473463824259E7
      }, {
        "mean" : 4.065255671E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.065255671E9,
        "min" : 4.065255671E9,
        "sum" : 4.065255671E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.068097985E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.068097985E9,
        "min" : 4.068097985E9,
        "sum" : 4.068097985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.066203453E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.066203453E9,
        "min" : 4.066203453E9,
        "sum" : 4.066203453E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.1328764185E9,
        "variance" : 4.214604428891364E15,
        "n" : 2,
        "max" : 4.17878178E9,
        "min" : 4.086971057E9,
        "sum" : 8.265752837E9,
        "standardDeviation" : 6.491998481893972E7
      }, {
        "mean" : 4.148210919E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.148210919E9,
        "min" : 4.148210919E9,
        "sum" : 4.148210919E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.158978566E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.158978566E9,
        "min" : 4.158978566E9,
        "sum" : 4.158978566E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.122167326E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.122167326E9,
        "min" : 4.122167326E9,
        "sum" : 4.122167326E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.411242574E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.411242574E9,
        "min" : 4.411242574E9,
        "sum" : 4.411242574E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3041865E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.3041865E9,
        "min" : 4.3041865E9,
        "sum" : 4.3041865E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3876502575E9,
        "variance" : 1.0129482045908406E15,
        "n" : 2,
        "max" : 4.410155237E9,
        "min" : 4.365145278E9,
        "sum" : 8.775300515E9,
        "standardDeviation" : 3.1826847229828477E7
      }, {
        "mean" : 4.565879114E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.565879114E9,
        "min" : 4.565879114E9,
        "sum" : 4.565879114E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.311742223E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.311742223E9,
        "min" : 4.311742223E9,
        "sum" : 4.311742223E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2025512545E9,
        "variance" : 2.4784572006432047E14,
        "n" : 2,
        "max" : 4.213683319E9,
        "min" : 4.19141919E9,
        "sum" : 8.405102509E9,
        "standardDeviation" : 1.5743116593112066E7
      }, {
        "mean" : 4.260523479E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.260523479E9,
        "min" : 4.260523479E9,
        "sum" : 4.260523479E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.274215088E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.274215088E9,
        "min" : 4.274215088E9,
        "sum" : 4.274215088E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.126170682E9,
        "variance" : 2.594102970378402E15,
        "n" : 2,
        "max" : 4.162185283E9,
        "min" : 4.090156081E9,
        "sum" : 8.252341364E9,
        "standardDeviation" : 5.093233717765563E7
      }, {
        "mean" : 4.058372458E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.058372458E9,
        "min" : 4.058372458E9,
        "sum" : 4.058372458E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.15982775E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.15982775E9,
        "min" : 4.15982775E9,
        "sum" : 4.15982775E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.112732309E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.112732309E9,
        "min" : 4.112732309E9,
        "sum" : 4.112732309E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.040721114E9,
        "variance" : 4.2807740549529775E15,
        "n" : 2,
        "max" : 4.086985431E9,
        "min" : 3.994456797E9,
        "sum" : 8.081442228E9,
        "standardDeviation" : 6.542762455532814E7
      }, {
        "mean" : 4.085739368E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.085739368E9,
        "min" : 4.085739368E9,
        "sum" : 4.085739368E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.140468559E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.140468559E9,
        "min" : 4.140468559E9,
        "sum" : 4.140468559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.086011996E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.086011996E9,
        "min" : 4.086011996E9,
        "sum" : 4.086011996E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 3.996342702E9,
        "variance" : 1.347702604306632E15,
        "n" : 2,
        "max" : 4.022301348E9,
        "min" : 3.970384056E9,
        "sum" : 7.992685404E9,
        "standardDeviation" : 3.671106923404209E7
      }, {
        "mean" : 4.016189841E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.016189841E9,
        "min" : 4.016189841E9,
        "sum" : 4.016189841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.068251703E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.068251703E9,
        "min" : 4.068251703E9,
        "sum" : 4.068251703E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.060010084E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.060010084E9,
        "min" : 4.060010084E9,
        "sum" : 4.060010084E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.1809999315E9,
        "variance" : 1.8775867215862296E16,
        "n" : 2,
        "max" : 4.277891281E9,
        "min" : 4.084108582E9,
        "sum" : 8.361999863E9,
        "standardDeviation" : 1.370250605395316E8
      }, {
        "mean" : 4.170874378E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.170874378E9,
        "min" : 4.170874378E9,
        "sum" : 4.170874378E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.159859176E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.159859176E9,
        "min" : 4.159859176E9,
        "sum" : 4.159859176E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.219198211E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.219198211E9,
        "min" : 4.219198211E9,
        "sum" : 4.219198211E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.034338688E9,
        "variance" : 5.2055144352393806E14,
        "n" : 2,
        "max" : 4.050471751E9,
        "min" : 4.018205625E9,
        "sum" : 8.068677376E9,
        "standardDeviation" : 2.2815596497219574E7
      }, {
        "mean" : 4.133375856E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133375856E9,
        "min" : 4.133375856E9,
        "sum" : 4.133375856E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.073976269E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.073976269E9,
        "min" : 4.073976269E9,
        "sum" : 4.073976269E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.012336723E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.012336723E9,
        "min" : 4.012336723E9,
        "sum" : 4.012336723E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.0855050695E9,
        "variance" : 8.584134529260499E12,
        "n" : 2,
        "max" : 4.0875768E9,
        "min" : 4.083433339E9,
        "sum" : 8.171010139E9,
        "standardDeviation" : 2929869.370681993
      }, {
        "mean" : 4.04443985E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.04443985E9,
        "min" : 4.04443985E9,
        "sum" : 4.04443985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.090095605E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.090095605E9,
        "min" : 4.090095605E9,
        "sum" : 4.090095605E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.07438158E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.07438158E9,
        "min" : 4.07438158E9,
        "sum" : 4.07438158E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.097787345E9,
        "variance" : 3.78376996971122E14,
        "n" : 2,
        "max" : 4.111541926E9,
        "min" : 4.084032764E9,
        "sum" : 8.19557469E9,
        "standardDeviation" : 1.9451914994959287E7
      }, {
        "mean" : 4.062164105E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.062164105E9,
        "min" : 4.062164105E9,
        "sum" : 4.062164105E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.114219235E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.114219235E9,
        "min" : 4.114219235E9,
        "sum" : 4.114219235E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.11607816E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.11607816E9,
        "min" : 4.11607816E9,
        "sum" : 4.11607816E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.330401568E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.330401568E9,
        "min" : 4.330401568E9,
        "sum" : 4.330401568E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.252752506E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.252752506E9,
        "min" : 4.252752506E9,
        "sum" : 4.252752506E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3296538155E9,
        "variance" : 5.1524750384450006E11,
        "n" : 2,
        "max" : 4.330161382E9,
        "min" : 4.329146249E9,
        "sum" : 8.659307631E9,
        "standardDeviation" : 717807.4281062436
      }, {
        "mean" : 4.573090281E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.573090281E9,
        "min" : 4.573090281E9,
        "sum" : 4.573090281E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.171470868E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.171470868E9,
        "min" : 4.171470868E9,
        "sum" : 4.171470868E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.15229785E9,
        "variance" : 8.64224015176832E14,
        "n" : 2,
        "max" : 4.173085154E9,
        "min" : 4.131510546E9,
        "sum" : 8.3045957E9,
        "standardDeviation" : 2.9397687241972487E7
      }, {
        "mean" : 4.174995378E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.174995378E9,
        "min" : 4.174995378E9,
        "sum" : 4.174995378E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.20224336E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.20224336E9,
        "min" : 4.20224336E9,
        "sum" : 4.20224336E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.0461842715E9,
        "variance" : 1.1582075879904002E15,
        "n" : 2,
        "max" : 4.070248847E9,
        "min" : 4.022119696E9,
        "sum" : 8.092368543E9,
        "standardDeviation" : 3.40324490448513E7
      }, {
        "mean" : 4.101979113E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.101979113E9,
        "min" : 4.101979113E9,
        "sum" : 4.101979113E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.106877014E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.106877014E9,
        "min" : 4.106877014E9,
        "sum" : 4.106877014E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.120938507E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.120938507E9,
        "min" : 4.120938507E9,
        "sum" : 4.120938507E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.0246036335E9,
        "variance" : 6.338975702721605E14,
        "n" : 2,
        "max" : 4.042406689E9,
        "min" : 4.006800578E9,
        "sum" : 8.049207267E9,
        "standardDeviation" : 2.5177322539780922E7
      }, {
        "mean" : 4.073835637E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.073835637E9,
        "min" : 4.073835637E9,
        "sum" : 4.073835637E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.108361748E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.108361748E9,
        "min" : 4.108361748E9,
        "sum" : 4.108361748E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.069259112E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.069259112E9,
        "min" : 4.069259112E9,
        "sum" : 4.069259112E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.0892124595E9,
        "variance" : 2.0487293449230128E15,
        "n" : 2,
        "max" : 4.121218157E9,
        "min" : 4.057206762E9,
        "sum" : 8.178424919E9,
        "standardDeviation" : 4.5262891477710664E7
      }, {
        "mean" : 4.150355859E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.150355859E9,
        "min" : 4.150355859E9,
        "sum" : 4.150355859E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.157816171E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157816171E9,
        "min" : 4.157816171E9,
        "sum" : 4.157816171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.18392328E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.18392328E9,
        "min" : 4.18392328E9,
        "sum" : 4.18392328E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.160571074E9,
        "variance" : 1.4963419263315918E15,
        "n" : 2,
        "max" : 4.187923788E9,
        "min" : 4.13321836E9,
        "sum" : 8.321142148E9,
        "standardDeviation" : 3.868257910651243E7
      }, {
        "mean" : 4.215890665E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.215890665E9,
        "min" : 4.215890665E9,
        "sum" : 4.215890665E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.195276157E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.195276157E9,
        "min" : 4.195276157E9,
        "sum" : 4.195276157E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.240656927E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.240656927E9,
        "min" : 4.240656927E9,
        "sum" : 4.240656927E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.204238756E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.204238756E9,
        "min" : 4.204238756E9,
        "sum" : 4.204238756E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2217095185E9,
        "variance" : 1.1962983557936645E15,
        "n" : 2,
        "max" : 4.246166607E9,
        "min" : 4.19725243E9,
        "sum" : 8.443419037E9,
        "standardDeviation" : 3.4587546252859056E7
      }, {
        "mean" : 4.209691193E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.209691193E9,
        "min" : 4.209691193E9,
        "sum" : 4.209691193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.316915426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.316915426E9,
        "min" : 4.316915426E9,
        "sum" : 4.316915426E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.1015274565E9,
        "variance" : 8.339932729310405E14,
        "n" : 2,
        "max" : 4.121947952E9,
        "min" : 4.081106961E9,
        "sum" : 8.203054913E9,
        "standardDeviation" : 2.8878941686478756E7
      }, {
        "mean" : 4.156208229E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.156208229E9,
        "min" : 4.156208229E9,
        "sum" : 4.156208229E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.171131812E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.171131812E9,
        "min" : 4.171131812E9,
        "sum" : 4.171131812E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.144783691E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.144783691E9,
        "min" : 4.144783691E9,
        "sum" : 4.144783691E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.2308822745E9,
        "variance" : 3.5262411752627405E15,
        "n" : 2,
        "max" : 4.272871804E9,
        "min" : 4.188892745E9,
        "sum" : 8.461764549E9,
        "standardDeviation" : 5.9382162096565165E7
      }, {
        "mean" : 4.220854408E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.220854408E9,
        "min" : 4.220854408E9,
        "sum" : 4.220854408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.222752183E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.222752183E9,
        "min" : 4.222752183E9,
        "sum" : 4.222752183E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.313258592E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.313258592E9,
        "min" : 4.313258592E9,
        "sum" : 4.313258592E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.2118704555E9,
        "variance" : 6.278996627165405E14,
        "n" : 2,
        "max" : 4.229589085E9,
        "min" : 4.194151826E9,
        "sum" : 8.423740911E9,
        "standardDeviation" : 2.5057926145564012E7
      }, {
        "mean" : 4.233226632E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.233226632E9,
        "min" : 4.233226632E9,
        "sum" : 4.233226632E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.212766682E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.212766682E9,
        "min" : 4.212766682E9,
        "sum" : 4.212766682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.246619827E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.246619827E9,
        "min" : 4.246619827E9,
        "sum" : 4.246619827E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.289666471E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.289666471E9,
        "min" : 4.289666471E9,
        "sum" : 4.289666471E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1710761255E9,
        "variance" : 2.793195016506325E15,
        "n" : 2,
        "max" : 4.208447204E9,
        "min" : 4.133705047E9,
        "sum" : 8.342152251E9,
        "standardDeviation" : 5.2850686055209585E7
      }, {
        "mean" : 4.168460743E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.168460743E9,
        "min" : 4.168460743E9,
        "sum" : 4.168460743E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.142346576E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.142346576E9,
        "min" : 4.142346576E9,
        "sum" : 4.142346576E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ {
    "call" : "org.gradoop.model.impl.DefaultElement#<init>",
    "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultElement.<init>()",
    "otherKiekerPattern" : "protected org.apache.flink.api.java.ExecutionEnvironment org.gradoop.model.FlinkTestBase.getExecutionEnvironment()",
    "module" : "gradoop-core",
    "name" : "DefaultElement#<init>",
    "key" : "org.gradoop.model.impl.DefaultElement.<init>_",
    "otherKey" : "org.gradoop.model.FlinkTestBase.getExecutionEnvironment_",
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 347.0021214835974,
      "meanCurrent" : 1885.4620689655173,
      "deviationOld" : 19.70641654172828,
      "deviationCurrent" : 410.4315528578191,
      "vms" : 29,
      "callsOld" : 96756,
      "calls" : 150,
      "tvalue" : -20.162502380233313,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 302.6300521007251,
    "inVMDeviation" : 562.9823862014582,
    "ess" : 1,
    "values" : [ 1693.2, 1440.4, 1826.8, 1655.2, 3735.6, 2157.4, 1595.2, 1969.8, 1879.0, 1661.7, 1832.0, 1474.5, 2222.6, 2032.8, 1527.2, 1757.2, 1869.2, 1770.8, 1534.6, 2029.2, 1961.2, 3967.8, 1867.2, 1961.4, 1666.0, 1759.2, 1760.4, 1978.2, 1896.8, 2163.6 ],
    "valuesPredecessor" : [ 348.73836823232546, 348.71507348659134, 310.8933827128266, 514.836672605004, 367.3431044055366, 375.0917157533453, 342.48400780713047, 314.51842324805335, 341.06695611965694, 348.81729980480634, 382.34227552695324, 336.8349578060167, 356.5817623068077, 337.54257208699704, 366.31071597889, 350.33490697992244, 337.9036798557416, 345.05752540384594, 394.4534153373055, 360.9979444838317, 340.59150263484185, 321.05194986117135, 351.37616887241046, 328.75741279069774, 348.1509110248615, 358.0633547748639, 318.2577107339898, 321.3388577401062, 355.4684047139612, 353.97716254083815 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1540.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1540.0,
          "min" : 1540.0,
          "sum" : 1540.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1682.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1682.0,
          "min" : 1682.0,
          "sum" : 1682.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2035.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2035.0,
          "min" : 2035.0,
          "sum" : 2035.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1604.5,
          "variance" : 27144.5,
          "n" : 2,
          "max" : 1721.0,
          "min" : 1488.0,
          "sum" : 3209.0,
          "standardDeviation" : 164.75588001646557
        } ],
        "1" : [ {
          "mean" : 1514.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1514.0,
          "min" : 1514.0,
          "sum" : 1514.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1414.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1414.0,
          "min" : 1414.0,
          "sum" : 1414.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1445.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1445.0,
          "min" : 1445.0,
          "sum" : 1445.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1414.5,
          "variance" : 8844.500000000002,
          "n" : 2,
          "max" : 1481.0,
          "min" : 1348.0,
          "sum" : 2829.0,
          "standardDeviation" : 94.04520189781083
        } ],
        "2" : [ {
          "mean" : 1623.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1623.0,
          "min" : 1623.0,
          "sum" : 1623.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1644.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1644.0,
          "min" : 1644.0,
          "sum" : 1644.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2452.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2452.0,
          "min" : 2452.0,
          "sum" : 2452.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1461.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1461.0,
          "min" : 1461.0,
          "sum" : 1461.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1954.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1954.0,
          "min" : 1954.0,
          "sum" : 1954.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1590.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1590.0,
          "min" : 1590.0,
          "sum" : 1590.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1535.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1535.0,
          "min" : 1535.0,
          "sum" : 1535.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1850.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1850.0,
          "min" : 1850.0,
          "sum" : 1850.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1650.5,
          "variance" : 2520.5,
          "n" : 2,
          "max" : 1686.0,
          "min" : 1615.0,
          "sum" : 3301.0,
          "standardDeviation" : 50.204581464244875
        } ],
        "4" : [ {
          "mean" : 12015.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 12015.0,
          "min" : 12015.0,
          "sum" : 12015.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1716.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1716.0,
          "min" : 1716.0,
          "sum" : 1716.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1567.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1567.0,
          "min" : 1567.0,
          "sum" : 1567.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1690.0,
          "variance" : 13122.0,
          "n" : 2,
          "max" : 1771.0,
          "min" : 1609.0,
          "sum" : 3380.0,
          "standardDeviation" : 114.5512985522207
        } ],
        "5" : [ {
          "mean" : 2716.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2716.0,
          "min" : 2716.0,
          "sum" : 2716.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1549.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1549.0,
          "min" : 1549.0,
          "sum" : 1549.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2239.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2239.0,
          "min" : 2239.0,
          "sum" : 2239.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1798.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1798.0,
          "min" : 1798.0,
          "sum" : 1798.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2485.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2485.0,
          "min" : 2485.0,
          "sum" : 2485.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 1609.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1609.0,
          "min" : 1609.0,
          "sum" : 1609.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1590.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1590.0,
          "min" : 1590.0,
          "sum" : 1590.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1688.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1688.0,
          "min" : 1688.0,
          "sum" : 1688.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1544.5,
          "variance" : 312840.49999999994,
          "n" : 2,
          "max" : 1940.0,
          "min" : 1149.0,
          "sum" : 3089.0,
          "standardDeviation" : 559.3214639185591
        } ],
        "7" : [ {
          "mean" : 1861.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1861.0,
          "min" : 1861.0,
          "sum" : 1861.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1925.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1925.0,
          "min" : 1925.0,
          "sum" : 1925.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2338.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2338.0,
          "min" : 2338.0,
          "sum" : 2338.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1862.5,
          "variance" : 32004.5,
          "n" : 2,
          "max" : 1989.0,
          "min" : 1736.0,
          "sum" : 3725.0,
          "standardDeviation" : 178.89801564019652
        } ],
        "8" : [ {
          "mean" : 1701.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1701.0,
          "min" : 1701.0,
          "sum" : 1701.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1977.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1977.0,
          "min" : 1977.0,
          "sum" : 1977.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1984.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1984.0,
          "min" : 1984.0,
          "sum" : 1984.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1866.5,
          "variance" : 8320.5,
          "n" : 2,
          "max" : 1931.0,
          "min" : 1802.0,
          "sum" : 3733.0,
          "standardDeviation" : 91.21677477306463
        } ],
        "9" : [ {
          "mean" : 1875.5,
          "variance" : 252760.50000000003,
          "n" : 1,
          "max" : 2231.0,
          "min" : 1520.0,
          "sum" : 1875.5,
          "standardDeviation" : 502.7529214236353
        }, {
          "mean" : 1688.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1688.0,
          "min" : 1688.0,
          "sum" : 1688.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1689.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1689.0,
          "min" : 1689.0,
          "sum" : 1689.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1554.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1554.0,
          "min" : 1554.0,
          "sum" : 1554.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1502.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1502.0,
          "min" : 1502.0,
          "sum" : 1502.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1740.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1740.0,
          "min" : 1740.0,
          "sum" : 1740.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1817.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1817.0,
          "min" : 1817.0,
          "sum" : 1817.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1739.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1739.0,
          "min" : 1739.0,
          "sum" : 1739.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1932.0,
          "variance" : 120050.00000000001,
          "n" : 2,
          "max" : 2177.0,
          "min" : 1687.0,
          "sum" : 3864.0,
          "standardDeviation" : 346.4823227814083
        } ],
        "11" : [ {
          "mean" : 1449.5,
          "variance" : 30012.500000000004,
          "n" : 1,
          "max" : 1572.0,
          "min" : 1327.0,
          "sum" : 1449.5,
          "standardDeviation" : 173.24116139070415
        }, {
          "mean" : 1642.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1642.0,
          "min" : 1642.0,
          "sum" : 1642.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1467.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1467.0,
          "min" : 1467.0,
          "sum" : 1467.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1467.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1467.0,
          "min" : 1467.0,
          "sum" : 1467.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1347.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1347.0,
          "min" : 1347.0,
          "sum" : 1347.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1777.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1777.0,
          "min" : 1777.0,
          "sum" : 1777.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2488.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2488.0,
          "min" : 2488.0,
          "sum" : 2488.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1753.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1753.0,
          "min" : 1753.0,
          "sum" : 1753.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2547.5,
          "variance" : 197820.5,
          "n" : 2,
          "max" : 2862.0,
          "min" : 2233.0,
          "sum" : 5095.0,
          "standardDeviation" : 444.7701653663384
        } ],
        "13" : [ {
          "mean" : 2039.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2039.0,
          "min" : 2039.0,
          "sum" : 2039.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2083.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2083.0,
          "min" : 2083.0,
          "sum" : 2083.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2073.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2073.0,
          "min" : 2073.0,
          "sum" : 2073.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1984.5,
          "variance" : 17484.499999999996,
          "n" : 2,
          "max" : 2078.0,
          "min" : 1891.0,
          "sum" : 3969.0,
          "standardDeviation" : 132.22896808188437
        } ],
        "14" : [ {
          "mean" : 1350.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1350.0,
          "min" : 1350.0,
          "sum" : 1350.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1626.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1626.0,
          "min" : 1626.0,
          "sum" : 1626.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1438.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1438.0,
          "min" : 1438.0,
          "sum" : 1438.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1611.0,
          "variance" : 76050.0,
          "n" : 2,
          "max" : 1806.0,
          "min" : 1416.0,
          "sum" : 3222.0,
          "standardDeviation" : 275.77164466275354
        } ],
        "15" : [ {
          "mean" : 1782.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1782.0,
          "min" : 1782.0,
          "sum" : 1782.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1620.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1620.0,
          "min" : 1620.0,
          "sum" : 1620.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1823.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1823.0,
          "min" : 1823.0,
          "sum" : 1823.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2090.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2090.0,
          "min" : 2090.0,
          "sum" : 2090.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1471.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1471.0,
          "min" : 1471.0,
          "sum" : 1471.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1641.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1641.0,
          "min" : 1641.0,
          "sum" : 1641.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2539.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2539.0,
          "min" : 2539.0,
          "sum" : 2539.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1483.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1483.0,
          "min" : 1483.0,
          "sum" : 1483.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1841.5,
          "variance" : 48360.50000000001,
          "n" : 2,
          "max" : 1997.0,
          "min" : 1686.0,
          "sum" : 3683.0,
          "standardDeviation" : 219.9102089490163
        } ],
        "17" : [ {
          "mean" : 1676.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1676.0,
          "min" : 1676.0,
          "sum" : 1676.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1785.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1785.0,
          "min" : 1785.0,
          "sum" : 1785.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1683.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1683.0,
          "min" : 1683.0,
          "sum" : 1683.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1855.0,
          "variance" : 542882.0,
          "n" : 2,
          "max" : 2376.0,
          "min" : 1334.0,
          "sum" : 3710.0,
          "standardDeviation" : 736.8052659963826
        } ],
        "18" : [ {
          "mean" : 1393.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1393.0,
          "min" : 1393.0,
          "sum" : 1393.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1717.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1717.0,
          "min" : 1717.0,
          "sum" : 1717.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1753.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1753.0,
          "min" : 1753.0,
          "sum" : 1753.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1405.0,
          "variance" : 27848.000000000004,
          "n" : 2,
          "max" : 1523.0,
          "min" : 1287.0,
          "sum" : 2810.0,
          "standardDeviation" : 166.87720036002523
        } ],
        "19" : [ {
          "mean" : 1568.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1568.0,
          "min" : 1568.0,
          "sum" : 1568.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2004.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2004.0,
          "min" : 2004.0,
          "sum" : 2004.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1625.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1625.0,
          "min" : 1625.0,
          "sum" : 1625.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2474.5,
          "variance" : 599512.5,
          "n" : 2,
          "max" : 3022.0,
          "min" : 1927.0,
          "sum" : 4949.0,
          "standardDeviation" : 774.2819253992695
        } ],
        "20" : [ {
          "mean" : 1796.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1796.0,
          "min" : 1796.0,
          "sum" : 1796.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1891.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1891.0,
          "min" : 1891.0,
          "sum" : 1891.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1621.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1621.0,
          "min" : 1621.0,
          "sum" : 1621.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2249.0,
          "variance" : 7200.000000000001,
          "n" : 2,
          "max" : 2309.0,
          "min" : 2189.0,
          "sum" : 4498.0,
          "standardDeviation" : 84.8528137423857
        } ],
        "21" : [ {
          "mean" : 1720.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1720.0,
          "min" : 1720.0,
          "sum" : 1720.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 11987.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 11987.0,
          "min" : 11987.0,
          "sum" : 11987.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1949.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1949.0,
          "min" : 1949.0,
          "sum" : 1949.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2091.5,
          "variance" : 147424.49999999997,
          "n" : 2,
          "max" : 2363.0,
          "min" : 1820.0,
          "sum" : 4183.0,
          "standardDeviation" : 383.9589821842953
        } ],
        "22" : [ {
          "mean" : 1683.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1683.0,
          "min" : 1683.0,
          "sum" : 1683.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1699.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1699.0,
          "min" : 1699.0,
          "sum" : 1699.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1509.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1509.0,
          "min" : 1509.0,
          "sum" : 1509.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2222.5,
          "variance" : 34584.5,
          "n" : 2,
          "max" : 2354.0,
          "min" : 2091.0,
          "sum" : 4445.0,
          "standardDeviation" : 185.969083452062
        } ],
        "23" : [ {
          "mean" : 1608.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1608.0,
          "min" : 1608.0,
          "sum" : 1608.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2325.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2325.0,
          "min" : 2325.0,
          "sum" : 2325.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2243.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2243.0,
          "min" : 2243.0,
          "sum" : 2243.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1815.5,
          "variance" : 10224.500000000002,
          "n" : 2,
          "max" : 1887.0,
          "min" : 1744.0,
          "sum" : 3631.0,
          "standardDeviation" : 101.1162697096763
        } ],
        "24" : [ {
          "mean" : 1560.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1560.0,
          "min" : 1560.0,
          "sum" : 1560.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1865.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1865.0,
          "min" : 1865.0,
          "sum" : 1865.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1594.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1594.0,
          "min" : 1594.0,
          "sum" : 1594.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1655.5,
          "variance" : 143112.5,
          "n" : 2,
          "max" : 1923.0,
          "min" : 1388.0,
          "sum" : 3311.0,
          "standardDeviation" : 378.3021279348029
        } ],
        "25" : [ {
          "mean" : 2165.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2165.0,
          "min" : 2165.0,
          "sum" : 2165.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1976.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1976.0,
          "min" : 1976.0,
          "sum" : 1976.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1889.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1889.0,
          "min" : 1889.0,
          "sum" : 1889.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1371.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1371.0,
          "min" : 1371.0,
          "sum" : 1371.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1395.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1395.0,
          "min" : 1395.0,
          "sum" : 1395.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1374.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1374.0,
          "min" : 1374.0,
          "sum" : 1374.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1525.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1525.0,
          "min" : 1525.0,
          "sum" : 1525.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2278.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2278.0,
          "min" : 2278.0,
          "sum" : 2278.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1812.5,
          "variance" : 12.500000000000002,
          "n" : 2,
          "max" : 1815.0,
          "min" : 1810.0,
          "sum" : 3625.0,
          "standardDeviation" : 3.5355339059327378
        } ],
        "27" : [ {
          "mean" : 1951.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1951.0,
          "min" : 1951.0,
          "sum" : 1951.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2348.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2348.0,
          "min" : 2348.0,
          "sum" : 2348.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1936.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1936.0,
          "min" : 1936.0,
          "sum" : 1936.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1828.0,
          "variance" : 72962.00000000001,
          "n" : 2,
          "max" : 2019.0,
          "min" : 1637.0,
          "sum" : 3656.0,
          "standardDeviation" : 270.1147904132612
        } ],
        "28" : [ {
          "mean" : 2195.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2195.0,
          "min" : 2195.0,
          "sum" : 2195.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1706.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1706.0,
          "min" : 1706.0,
          "sum" : 1706.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1934.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1934.0,
          "min" : 1934.0,
          "sum" : 1934.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1824.5,
          "variance" : 16380.499999999998,
          "n" : 2,
          "max" : 1915.0,
          "min" : 1734.0,
          "sum" : 3649.0,
          "standardDeviation" : 127.9863273947651
        } ],
        "29" : [ {
          "mean" : 2282.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2282.0,
          "min" : 2282.0,
          "sum" : 2282.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2219.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2219.0,
          "min" : 2219.0,
          "sum" : 2219.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1676.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1676.0,
          "min" : 1676.0,
          "sum" : 1676.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2681.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2681.0,
          "min" : 2681.0,
          "sum" : 2681.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1960.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1960.0,
          "min" : 1960.0,
          "sum" : 1960.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 997.8571428571425,
          "variance" : 1180150.1568986557,
          "n" : 464,
          "max" : 13315.0,
          "min" : 56.0,
          "sum" : 463005.71428571414,
          "standardDeviation" : 1086.3471622362051
        }, {
          "mean" : 341.42828282828333,
          "variance" : 4466670.366809807,
          "n" : 495,
          "max" : 47058.0,
          "min" : 43.0,
          "sum" : 169007.00000000026,
          "standardDeviation" : 2113.4498732664106
        }, {
          "mean" : 271.89080459770094,
          "variance" : 214634.91023220346,
          "n" : 348,
          "max" : 6020.0,
          "min" : 18.0,
          "sum" : 94617.99999999993,
          "standardDeviation" : 463.2870710825022
        }, {
          "mean" : 214.820796460177,
          "variance" : 29266.31593018468,
          "n" : 452,
          "max" : 1073.0,
          "min" : 19.0,
          "sum" : 97099.0,
          "standardDeviation" : 171.0740071728744
        }, {
          "mean" : 229.7937853107346,
          "variance" : 30964.40211424271,
          "n" : 354,
          "max" : 1191.0,
          "min" : 37.0,
          "sum" : 81347.00000000004,
          "standardDeviation" : 175.96704837623068
        }, {
          "mean" : 213.68863636363636,
          "variance" : 32299.772991302532,
          "n" : 440,
          "max" : 952.0,
          "min" : 20.0,
          "sum" : 94023.0,
          "standardDeviation" : 179.7213759999142
        }, {
          "mean" : 212.225,
          "variance" : 30502.25285515321,
          "n" : 360,
          "max" : 813.0,
          "min" : 16.0,
          "sum" : 76401.0,
          "standardDeviation" : 174.64894175217097
        }, {
          "mean" : 158.84713375796173,
          "variance" : 14106.500518914962,
          "n" : 314,
          "max" : 693.0,
          "min" : 16.0,
          "sum" : 49877.999999999985,
          "standardDeviation" : 118.7707898387266
        } ],
        "1" : [ {
          "mean" : 1006.291571753987,
          "variance" : 2046835.417074921,
          "n" : 434,
          "max" : 22064.0,
          "min" : 102.0,
          "sum" : 436730.54214123037,
          "standardDeviation" : 1430.6765592106838
        }, {
          "mean" : 393.7509803921569,
          "variance" : 4004184.580303558,
          "n" : 510,
          "max" : 44851.0,
          "min" : 39.0,
          "sum" : 200813.00000000003,
          "standardDeviation" : 2001.0458716140313
        }, {
          "mean" : 240.80056179775278,
          "variance" : 32589.146027852534,
          "n" : 356,
          "max" : 950.0,
          "min" : 27.0,
          "sum" : 85724.99999999999,
          "standardDeviation" : 180.52464105449022
        }, {
          "mean" : 199.17577197149635,
          "variance" : 24443.278554462162,
          "n" : 421,
          "max" : 752.0,
          "min" : 18.0,
          "sum" : 83852.99999999996,
          "standardDeviation" : 156.34346342096353
        }, {
          "mean" : 220.07049608355092,
          "variance" : 30664.39554085273,
          "n" : 383,
          "max" : 1012.0,
          "min" : 25.0,
          "sum" : 84287.0,
          "standardDeviation" : 175.1125225129623
        }, {
          "mean" : 231.3351351351351,
          "variance" : 285430.2125833151,
          "n" : 370,
          "max" : 9989.0,
          "min" : 27.0,
          "sum" : 85593.99999999999,
          "standardDeviation" : 534.2566916598379
        }, {
          "mean" : 189.53738317757004,
          "variance" : 74656.17892709402,
          "n" : 428,
          "max" : 4728.0,
          "min" : 16.0,
          "sum" : 81121.99999999997,
          "standardDeviation" : 273.232829153259
        }, {
          "mean" : 206.70461538461544,
          "variance" : 303821.56679962046,
          "n" : 325,
          "max" : 9794.0,
          "min" : 23.0,
          "sum" : 67179.00000000001,
          "standardDeviation" : 551.2001150214144
        } ],
        "2" : [ {
          "mean" : 1025.58947368421,
          "variance" : 1805245.9629495905,
          "n" : 375,
          "max" : 18307.0,
          "min" : 122.0,
          "sum" : 384596.0526315787,
          "standardDeviation" : 1343.594419067596
        }, {
          "mean" : 315.84991273996525,
          "variance" : 440563.8305812863,
          "n" : 573,
          "max" : 14531.0,
          "min" : 20.0,
          "sum" : 180982.0000000001,
          "standardDeviation" : 663.7498252966145
        }, {
          "mean" : 237.6819484240688,
          "variance" : 346157.614069756,
          "n" : 349,
          "max" : 9645.0,
          "min" : 40.0,
          "sum" : 82951.00000000001,
          "standardDeviation" : 588.35160751863
        }, {
          "mean" : 176.9483695652175,
          "variance" : 12992.877436026545,
          "n" : 368,
          "max" : 655.0,
          "min" : 27.0,
          "sum" : 65117.00000000004,
          "standardDeviation" : 113.98630372122146
        }, {
          "mean" : 186.39386792452825,
          "variance" : 16638.390600606625,
          "n" : 424,
          "max" : 857.0,
          "min" : 19.0,
          "sum" : 79030.99999999999,
          "standardDeviation" : 128.98988565235115
        }, {
          "mean" : 190.16091954022988,
          "variance" : 18329.311206068433,
          "n" : 348,
          "max" : 816.0,
          "min" : 28.0,
          "sum" : 66176.0,
          "standardDeviation" : 135.38578657329
        }, {
          "mean" : 174.9145496535796,
          "variance" : 21329.92092207682,
          "n" : 433,
          "max" : 1007.0,
          "min" : 21.0,
          "sum" : 75737.99999999997,
          "standardDeviation" : 146.04766660949028
        }, {
          "mean" : 190.9093484419264,
          "variance" : 29780.781531676545,
          "n" : 353,
          "max" : 954.0,
          "min" : 29.0,
          "sum" : 67391.00000000001,
          "standardDeviation" : 172.57109123974544
        }, {
          "mean" : 320.0,
          "variance" : 13228.000000000002,
          "n" : 3,
          "max" : 436.0,
          "min" : 206.0,
          "sum" : 960.0,
          "standardDeviation" : 115.013042738639
        } ],
        "3" : [ {
          "mean" : 2246.9461697722545,
          "variance" : 9.122205160427394E8,
          "n" : 478,
          "max" : 664263.0,
          "min" : 108.0,
          "sum" : 1074040.2691511377,
          "standardDeviation" : 30202.988528335063
        }, {
          "mean" : 324.8872651356996,
          "variance" : 2546402.6609044326,
          "n" : 479,
          "max" : 34814.0,
          "min" : 42.0,
          "sum" : 155621.0000000001,
          "standardDeviation" : 1595.7451741755112
        }, {
          "mean" : 200.3577464788733,
          "variance" : 15199.97617569825,
          "n" : 355,
          "max" : 964.0,
          "min" : 27.0,
          "sum" : 71127.00000000003,
          "standardDeviation" : 123.28818343903949
        }, {
          "mean" : 211.57272727272712,
          "variance" : 236635.67123628076,
          "n" : 440,
          "max" : 10099.0,
          "min" : 41.0,
          "sum" : 93091.99999999993,
          "standardDeviation" : 486.45212635600717
        }, {
          "mean" : 193.1727019498608,
          "variance" : 14674.841599103649,
          "n" : 359,
          "max" : 850.0,
          "min" : 21.0,
          "sum" : 69349.00000000003,
          "standardDeviation" : 121.1397606036253
        }, {
          "mean" : 181.18077803203653,
          "variance" : 15093.35944618226,
          "n" : 437,
          "max" : 923.0,
          "min" : 21.0,
          "sum" : 79175.99999999996,
          "standardDeviation" : 122.85503427284638
        }, {
          "mean" : 186.41988950276223,
          "variance" : 18011.01988032017,
          "n" : 362,
          "max" : 718.0,
          "min" : 37.0,
          "sum" : 67483.99999999993,
          "standardDeviation" : 134.2051410353574
        }, {
          "mean" : 160.18730158730168,
          "variance" : 17216.43295925588,
          "n" : 315,
          "max" : 910.0,
          "min" : 21.0,
          "sum" : 50459.00000000003,
          "standardDeviation" : 131.21140559896415
        } ],
        "4" : [ {
          "mean" : 941.3604166666671,
          "variance" : 1320413.3959246697,
          "n" : 475,
          "max" : 16925.0,
          "min" : 116.0,
          "sum" : 447146.19791666686,
          "standardDeviation" : 1149.092422707882
        }, {
          "mean" : 716.0338266384774,
          "variance" : 7.344914485902278E7,
          "n" : 473,
          "max" : 185583.0,
          "min" : 34.0,
          "sum" : 338683.9999999998,
          "standardDeviation" : 8570.247654474331
        }, {
          "mean" : 231.80397727272702,
          "variance" : 265267.4514941077,
          "n" : 352,
          "max" : 9536.0,
          "min" : 27.0,
          "sum" : 81594.99999999991,
          "standardDeviation" : 515.0412133937514
        }, {
          "mean" : 175.7119437939111,
          "variance" : 13534.121054194015,
          "n" : 427,
          "max" : 766.0,
          "min" : 28.0,
          "sum" : 75029.00000000004,
          "standardDeviation" : 116.33624136181302
        }, {
          "mean" : 193.68965517241384,
          "variance" : 18494.948642699925,
          "n" : 377,
          "max" : 1117.0,
          "min" : 38.0,
          "sum" : 73021.00000000001,
          "standardDeviation" : 135.99613466087897
        }, {
          "mean" : 162.51886792452837,
          "variance" : 12059.063472947066,
          "n" : 424,
          "max" : 598.0,
          "min" : 19.0,
          "sum" : 68908.00000000003,
          "standardDeviation" : 109.81376722864518
        }, {
          "mean" : 165.6246719160106,
          "variance" : 14742.571916010502,
          "n" : 381,
          "max" : 827.0,
          "min" : 32.0,
          "sum" : 63103.000000000044,
          "standardDeviation" : 121.41899322597969
        }, {
          "mean" : 119.27672955974842,
          "variance" : 8255.961034065444,
          "n" : 318,
          "max" : 717.0,
          "min" : 30.0,
          "sum" : 37930.0,
          "standardDeviation" : 90.8623191100989
        } ],
        "5" : [ {
          "mean" : 1053.8616822429906,
          "variance" : 5415489.374090794,
          "n" : 530,
          "max" : 46065.0,
          "min" : 88.0,
          "sum" : 558546.691588785,
          "standardDeviation" : 2327.1204038662877
        }, {
          "mean" : 420.9633027522938,
          "variance" : 2239466.619339872,
          "n" : 436,
          "max" : 30993.0,
          "min" : 36.0,
          "sum" : 183540.00000000012,
          "standardDeviation" : 1496.484754128779
        }, {
          "mean" : 235.23098591549302,
          "variance" : 130525.98039309306,
          "n" : 355,
          "max" : 6371.0,
          "min" : 47.0,
          "sum" : 83507.00000000003,
          "standardDeviation" : 361.28379481107794
        }, {
          "mean" : 214.26635514018702,
          "variance" : 26282.331699096063,
          "n" : 428,
          "max" : 936.0,
          "min" : 27.0,
          "sum" : 91706.00000000004,
          "standardDeviation" : 162.1182645450415
        }, {
          "mean" : 230.67887323943668,
          "variance" : 34158.26381793585,
          "n" : 355,
          "max" : 1172.0,
          "min" : 39.0,
          "sum" : 81891.00000000003,
          "standardDeviation" : 184.81954392849218
        }, {
          "mean" : 213.5629453681711,
          "variance" : 29605.451385589866,
          "n" : 421,
          "max" : 1039.0,
          "min" : 21.0,
          "sum" : 89910.00000000004,
          "standardDeviation" : 172.06234737905288
        }, {
          "mean" : 199.07200000000006,
          "variance" : 25685.200684491996,
          "n" : 375,
          "max" : 1059.0,
          "min" : 30.0,
          "sum" : 74652.00000000003,
          "standardDeviation" : 160.2660309750385
        }, {
          "mean" : 140.5648148148147,
          "variance" : 13912.395166838653,
          "n" : 324,
          "max" : 610.0,
          "min" : 15.0,
          "sum" : 45542.99999999996,
          "standardDeviation" : 117.95081672815434
        } ],
        "6" : [ {
          "mean" : 1084.7181628392466,
          "variance" : 2320588.4120334387,
          "n" : 474,
          "max" : 18236.0,
          "min" : 97.0,
          "sum" : 514156.40918580286,
          "standardDeviation" : 1523.3477646399192
        }, {
          "mean" : 302.7586206896551,
          "variance" : 721200.5249509395,
          "n" : 493,
          "max" : 15944.0,
          "min" : 28.0,
          "sum" : 149259.99999999997,
          "standardDeviation" : 849.2352588952837
        }, {
          "mean" : 212.65102639296188,
          "variance" : 26504.92785923754,
          "n" : 341,
          "max" : 1008.0,
          "min" : 40.0,
          "sum" : 72514.0,
          "standardDeviation" : 162.80334105674103
        }, {
          "mean" : 196.55172413793107,
          "variance" : 25766.114253932912,
          "n" : 435,
          "max" : 1099.0,
          "min" : 18.0,
          "sum" : 85500.00000000001,
          "standardDeviation" : 160.51826766425344
        }, {
          "mean" : 209.82825484764547,
          "variance" : 24343.314866112632,
          "n" : 361,
          "max" : 950.0,
          "min" : 26.0,
          "sum" : 75748.00000000001,
          "standardDeviation" : 156.02344332219
        }, {
          "mean" : 214.23848238482378,
          "variance" : 122026.94297160352,
          "n" : 369,
          "max" : 6263.0,
          "min" : 26.0,
          "sum" : 79053.99999999997,
          "standardDeviation" : 349.3235505539292
        }, {
          "mean" : 178.32227488151662,
          "variance" : 25000.233184361325,
          "n" : 422,
          "max" : 904.0,
          "min" : 16.0,
          "sum" : 75252.00000000001,
          "standardDeviation" : 158.114620400396
        }, {
          "mean" : 161.23564954682786,
          "variance" : 19636.156422228323,
          "n" : 331,
          "max" : 837.0,
          "min" : 31.0,
          "sum" : 53369.00000000002,
          "standardDeviation" : 140.12907058218977
        } ],
        "7" : [ {
          "mean" : 906.120689655172,
          "variance" : 2360778.171147687,
          "n" : 459,
          "max" : 24069.0,
          "min" : 49.0,
          "sum" : 415909.39655172394,
          "standardDeviation" : 1536.4824018346865
        }, {
          "mean" : 353.0362173038229,
          "variance" : 2362552.555137274,
          "n" : 497,
          "max" : 32349.0,
          "min" : 17.0,
          "sum" : 175459.0,
          "standardDeviation" : 1537.0597109862954
        }, {
          "mean" : 228.32758620689637,
          "variance" : 415933.37940971885,
          "n" : 348,
          "max" : 11959.0,
          "min" : 28.0,
          "sum" : 79457.99999999994,
          "standardDeviation" : 644.9289723758104
        }, {
          "mean" : 176.14318181818203,
          "variance" : 13837.107014909921,
          "n" : 440,
          "max" : 809.0,
          "min" : 41.0,
          "sum" : 77503.00000000009,
          "standardDeviation" : 117.63123316071255
        }, {
          "mean" : 188.4484679665737,
          "variance" : 13651.471499042971,
          "n" : 359,
          "max" : 830.0,
          "min" : 27.0,
          "sum" : 67652.99999999996,
          "standardDeviation" : 116.83951172032076
        }, {
          "mean" : 172.8484848484848,
          "variance" : 15826.11483998866,
          "n" : 429,
          "max" : 864.0,
          "min" : 19.0,
          "sum" : 74151.99999999997,
          "standardDeviation" : 125.80188726719747
        }, {
          "mean" : 185.64864864864873,
          "variance" : 17406.51578407676,
          "n" : 370,
          "max" : 951.0,
          "min" : 28.0,
          "sum" : 68690.00000000003,
          "standardDeviation" : 131.93375528679823
        }, {
          "mean" : 171.37577639751552,
          "variance" : 11271.20726185639,
          "n" : 322,
          "max" : 548.0,
          "min" : 29.0,
          "sum" : 55183.0,
          "standardDeviation" : 106.16594209941525
        } ],
        "8" : [ {
          "mean" : 1018.0266940451745,
          "variance" : 1497793.5527839055,
          "n" : 482,
          "max" : 16404.0,
          "min" : 97.0,
          "sum" : 490688.8665297741,
          "standardDeviation" : 1223.8437615904677
        }, {
          "mean" : 324.25208333333296,
          "variance" : 1286475.0532315583,
          "n" : 480,
          "max" : 17778.0,
          "min" : 30.0,
          "sum" : 155640.99999999983,
          "standardDeviation" : 1134.2288363604403
        }, {
          "mean" : 199.912,
          "variance" : 17945.61522994652,
          "n" : 375,
          "max" : 819.0,
          "min" : 29.0,
          "sum" : 74967.0,
          "standardDeviation" : 133.96124525379167
        }, {
          "mean" : 208.86854460093912,
          "variance" : 85686.9003258769,
          "n" : 426,
          "max" : 5404.0,
          "min" : 23.0,
          "sum" : 88978.00000000006,
          "standardDeviation" : 292.72324869384204
        }, {
          "mean" : 198.87798408488067,
          "variance" : 25384.947838478474,
          "n" : 377,
          "max" : 1073.0,
          "min" : 21.0,
          "sum" : 74977.00000000001,
          "standardDeviation" : 159.3265446762669
        }, {
          "mean" : 205.2646370023421,
          "variance" : 249755.73496718015,
          "n" : 427,
          "max" : 10155.0,
          "min" : 38.0,
          "sum" : 87648.00000000009,
          "standardDeviation" : 499.75567527260773
        }, {
          "mean" : 201.26988636363646,
          "variance" : 26851.46256636882,
          "n" : 352,
          "max" : 858.0,
          "min" : 28.0,
          "sum" : 70847.00000000003,
          "standardDeviation" : 163.86415888280396
        }, {
          "mean" : 183.12459016393427,
          "variance" : 31385.57653149268,
          "n" : 305,
          "max" : 1033.0,
          "min" : 26.0,
          "sum" : 55852.999999999956,
          "standardDeviation" : 177.15974862110377
        } ],
        "9" : [ {
          "mean" : 945.4781659388639,
          "variance" : 1306549.5586031917,
          "n" : 453,
          "max" : 12891.0,
          "min" : 93.0,
          "sum" : 428301.6091703053,
          "standardDeviation" : 1143.0439880438512
        }, {
          "mean" : 392.8989898989899,
          "variance" : 2144406.1962540396,
          "n" : 495,
          "max" : 32163.0,
          "min" : 44.0,
          "sum" : 194485.0,
          "standardDeviation" : 1464.3791162994778
        }, {
          "mean" : 246.16809116809114,
          "variance" : 30936.088807488803,
          "n" : 351,
          "max" : 1276.0,
          "min" : 42.0,
          "sum" : 86404.99999999999,
          "standardDeviation" : 175.8865793842407
        }, {
          "mean" : 235.8004750593825,
          "variance" : 238678.40771405946,
          "n" : 421,
          "max" : 9659.0,
          "min" : 19.0,
          "sum" : 99272.00000000003,
          "standardDeviation" : 488.54724204938407
        }, {
          "mean" : 240.3641160949869,
          "variance" : 33041.44907930923,
          "n" : 379,
          "max" : 903.0,
          "min" : 34.0,
          "sum" : 91098.00000000004,
          "standardDeviation" : 181.77307028080156
        }, {
          "mean" : 241.87533875338752,
          "variance" : 37251.359417344174,
          "n" : 369,
          "max" : 1095.0,
          "min" : 42.0,
          "sum" : 89252.0,
          "standardDeviation" : 193.0061123833755
        }, {
          "mean" : 219.19811320754715,
          "variance" : 249965.81881439843,
          "n" : 424,
          "max" : 9878.0,
          "min" : 18.0,
          "sum" : 92939.99999999999,
          "standardDeviation" : 499.9658176459651
        }, {
          "mean" : 130.3323353293413,
          "variance" : 10919.18952185718,
          "n" : 334,
          "max" : 647.0,
          "min" : 15.0,
          "sum" : 43530.99999999999,
          "standardDeviation" : 104.49492581870749
        } ],
        "10" : [ {
          "mean" : 951.8322851153051,
          "variance" : 1697147.6860983404,
          "n" : 472,
          "max" : 15386.0,
          "min" : 132.0,
          "sum" : 449264.83857442404,
          "standardDeviation" : 1302.746209397034
        }, {
          "mean" : 539.3060344827583,
          "variance" : 1249529.5389699854,
          "n" : 464,
          "max" : 17521.0,
          "min" : 43.0,
          "sum" : 250237.99999999983,
          "standardDeviation" : 1117.8235723807159
        }, {
          "mean" : 391.0857142857147,
          "variance" : 1832003.236185018,
          "n" : 350,
          "max" : 19975.0,
          "min" : 40.0,
          "sum" : 136880.00000000015,
          "standardDeviation" : 1353.5151407298767
        }, {
          "mean" : 238.29117647058814,
          "variance" : 30118.43119035225,
          "n" : 340,
          "max" : 1008.0,
          "min" : 41.0,
          "sum" : 81018.99999999997,
          "standardDeviation" : 173.54662540756087
        }, {
          "mean" : 218.61707988980723,
          "variance" : 29154.369541725653,
          "n" : 363,
          "max" : 903.0,
          "min" : 21.0,
          "sum" : 79358.00000000003,
          "standardDeviation" : 170.7465066750288
        }, {
          "mean" : 243.35194174757285,
          "variance" : 270522.7833782157,
          "n" : 412,
          "max" : 10150.0,
          "min" : 19.0,
          "sum" : 100261.00000000001,
          "standardDeviation" : 520.11804754134
        }, {
          "mean" : 220.82132564841504,
          "variance" : 29937.28590228381,
          "n" : 347,
          "max" : 1036.0,
          "min" : 20.0,
          "sum" : 76625.00000000001,
          "standardDeviation" : 173.02394603719975
        }, {
          "mean" : 127.16766467065865,
          "variance" : 9470.278110445772,
          "n" : 334,
          "max" : 816.0,
          "min" : 18.0,
          "sum" : 42473.99999999999,
          "standardDeviation" : 97.31535392961263
        }, {
          "mean" : 118.41958041958043,
          "variance" : 8437.033980104403,
          "n" : 143,
          "max" : 461.0,
          "min" : 28.0,
          "sum" : 16934.0,
          "standardDeviation" : 91.85332862833226
        } ],
        "11" : [ {
          "mean" : 945.219206680586,
          "variance" : 1692196.6108437225,
          "n" : 474,
          "max" : 20884.0,
          "min" : 75.0,
          "sum" : 448033.90396659775,
          "standardDeviation" : 1300.8445759750557
        }, {
          "mean" : 372.1549893842888,
          "variance" : 1700623.3950761172,
          "n" : 471,
          "max" : 22740.0,
          "min" : 38.0,
          "sum" : 175285.00000000003,
          "standardDeviation" : 1304.0795202272434
        }, {
          "mean" : 252.48710601719165,
          "variance" : 323338.80802292255,
          "n" : 349,
          "max" : 10470.0,
          "min" : 35.0,
          "sum" : 88117.99999999988,
          "standardDeviation" : 568.6288842671664
        }, {
          "mean" : 211.5424657534247,
          "variance" : 25755.941186211065,
          "n" : 365,
          "max" : 973.0,
          "min" : 39.0,
          "sum" : 77213.00000000001,
          "standardDeviation" : 160.4865763427305
        }, {
          "mean" : 227.73985680190924,
          "variance" : 269265.29819232377,
          "n" : 419,
          "max" : 10405.0,
          "min" : 30.0,
          "sum" : 95422.99999999997,
          "standardDeviation" : 518.9077935359265
        }, {
          "mean" : 213.9568965517242,
          "variance" : 24297.17104740137,
          "n" : 348,
          "max" : 913.0,
          "min" : 31.0,
          "sum" : 74457.00000000003,
          "standardDeviation" : 155.8754985474028
        }, {
          "mean" : 188.38858695652178,
          "variance" : 21942.494365300314,
          "n" : 368,
          "max" : 907.0,
          "min" : 20.0,
          "sum" : 69327.00000000001,
          "standardDeviation" : 148.12999144434025
        }, {
          "mean" : 130.56265356265362,
          "variance" : 12221.59643432057,
          "n" : 407,
          "max" : 920.0,
          "min" : 20.0,
          "sum" : 53139.00000000002,
          "standardDeviation" : 110.55132941001013
        }, {
          "mean" : 215.65217391304347,
          "variance" : 6826.78260869565,
          "n" : 23,
          "max" : 399.0,
          "min" : 104.0,
          "sum" : 4960.0,
          "standardDeviation" : 82.6243463435303
        } ],
        "12" : [ {
          "mean" : 916.0796645702301,
          "variance" : 1969970.9978419032,
          "n" : 472,
          "max" : 18645.0,
          "min" : 87.0,
          "sum" : 432389.6016771486,
          "standardDeviation" : 1403.556553132756
        }, {
          "mean" : 556.7979381443296,
          "variance" : 1925870.6119792098,
          "n" : 485,
          "max" : 22976.0,
          "min" : 60.0,
          "sum" : 270046.9999999998,
          "standardDeviation" : 1387.7574038639498
        }, {
          "mean" : 297.98265895953773,
          "variance" : 1533697.2866549396,
          "n" : 346,
          "max" : 22991.0,
          "min" : 30.0,
          "sum" : 103102.00000000006,
          "standardDeviation" : 1238.4253254253724
        }, {
          "mean" : 183.85912240184766,
          "variance" : 17217.6074223762,
          "n" : 433,
          "max" : 944.0,
          "min" : 28.0,
          "sum" : 79611.00000000003,
          "standardDeviation" : 131.21588098388168
        }, {
          "mean" : 199.84657534246557,
          "variance" : 17542.003868734002,
          "n" : 365,
          "max" : 723.0,
          "min" : 19.0,
          "sum" : 72943.99999999993,
          "standardDeviation" : 132.44623010389537
        }, {
          "mean" : 185.0077120822622,
          "variance" : 18084.966435215847,
          "n" : 389,
          "max" : 1011.0,
          "min" : 22.0,
          "sum" : 71968.0,
          "standardDeviation" : 134.48035706085795
        }, {
          "mean" : 163.1809290953543,
          "variance" : 17585.03090991899,
          "n" : 409,
          "max" : 829.0,
          "min" : 21.0,
          "sum" : 66740.9999999999,
          "standardDeviation" : 132.60856273227228
        }, {
          "mean" : 162.5138461538462,
          "variance" : 16378.404900284899,
          "n" : 325,
          "max" : 722.0,
          "min" : 20.0,
          "sum" : 52817.000000000015,
          "standardDeviation" : 127.97814227548741
        } ],
        "13" : [ {
          "mean" : 1054.7495183044325,
          "variance" : 4329251.226713083,
          "n" : 514,
          "max" : 39610.0,
          "min" : 55.0,
          "sum" : 542141.2524084783,
          "standardDeviation" : 2080.6852781507064
        }, {
          "mean" : 228.92342342342354,
          "variance" : 28331.298863197266,
          "n" : 444,
          "max" : 875.0,
          "min" : 29.0,
          "sum" : 101642.00000000006,
          "standardDeviation" : 168.31903892072717
        }, {
          "mean" : 217.35410764872518,
          "variance" : 26603.74072881791,
          "n" : 353,
          "max" : 877.0,
          "min" : 37.0,
          "sum" : 76725.99999999999,
          "standardDeviation" : 163.10653183983132
        }, {
          "mean" : 192.13392857142853,
          "variance" : 22372.20573665707,
          "n" : 448,
          "max" : 1040.0,
          "min" : 19.0,
          "sum" : 86075.99999999999,
          "standardDeviation" : 149.57341253263252
        }, {
          "mean" : 188.77337110481596,
          "variance" : 22140.505311614706,
          "n" : 353,
          "max" : 923.0,
          "min" : 19.0,
          "sum" : 66637.00000000003,
          "standardDeviation" : 148.79685921287017
        }, {
          "mean" : 209.4611872146119,
          "variance" : 224814.18498897625,
          "n" : 438,
          "max" : 9681.0,
          "min" : 29.0,
          "sum" : 91744.00000000001,
          "standardDeviation" : 474.1457423503624
        }, {
          "mean" : 184.01388888888906,
          "variance" : 23128.721255029406,
          "n" : 360,
          "max" : 1043.0,
          "min" : 23.0,
          "sum" : 66245.00000000006,
          "standardDeviation" : 152.08129817643393
        }, {
          "mean" : 181.61146496815277,
          "variance" : 29759.362935227207,
          "n" : 314,
          "max" : 995.0,
          "min" : 29.0,
          "sum" : 57025.99999999997,
          "standardDeviation" : 172.50902276468673
        } ],
        "14" : [ {
          "mean" : 1068.1260504201682,
          "variance" : 2111229.8198673166,
          "n" : 471,
          "max" : 19209.0,
          "min" : 114.0,
          "sum" : 503087.36974789924,
          "standardDeviation" : 1453.0071644239463
        }, {
          "mean" : 416.38923395445113,
          "variance" : 5991162.101294631,
          "n" : 483,
          "max" : 53742.0,
          "min" : 48.0,
          "sum" : 201115.99999999988,
          "standardDeviation" : 2447.685049448689
        }, {
          "mean" : 226.78062678062682,
          "variance" : 23170.994595034575,
          "n" : 351,
          "max" : 1031.0,
          "min" : 46.0,
          "sum" : 79600.00000000001,
          "standardDeviation" : 152.22021743196458
        }, {
          "mean" : 213.66294642857136,
          "variance" : 20169.306722395322,
          "n" : 448,
          "max" : 969.0,
          "min" : 29.0,
          "sum" : 95720.99999999997,
          "standardDeviation" : 142.01868441298603
        }, {
          "mean" : 296.686111111111,
          "variance" : 1206784.1881073972,
          "n" : 360,
          "max" : 20453.0,
          "min" : 23.0,
          "sum" : 106806.99999999997,
          "standardDeviation" : 1098.5372948186134
        }, {
          "mean" : 201.3861607142858,
          "variance" : 23916.747638023346,
          "n" : 448,
          "max" : 1028.0,
          "min" : 29.0,
          "sum" : 90221.00000000004,
          "standardDeviation" : 154.650404584092
        }, {
          "mean" : 185.2178770949719,
          "variance" : 291337.45379716135,
          "n" : 358,
          "max" : 10113.0,
          "min" : 25.0,
          "sum" : 66307.99999999994,
          "standardDeviation" : 539.7568469201307
        }, {
          "mean" : 126.57328990228015,
          "variance" : 8286.761767899345,
          "n" : 307,
          "max" : 664.0,
          "min" : 27.0,
          "sum" : 38858.00000000001,
          "standardDeviation" : 91.03165256052064
        } ],
        "15" : [ {
          "mean" : 967.8519793459549,
          "variance" : 2974159.0263279704,
          "n" : 576,
          "max" : 24187.0,
          "min" : 72.0,
          "sum" : 557482.74010327,
          "standardDeviation" : 1724.5750277468273
        }, {
          "mean" : 252.20725388601034,
          "variance" : 32561.14134984187,
          "n" : 386,
          "max" : 951.0,
          "min" : 33.0,
          "sum" : 97351.99999999999,
          "standardDeviation" : 180.44705968743816
        }, {
          "mean" : 230.40974212034396,
          "variance" : 31337.236801370076,
          "n" : 349,
          "max" : 1326.0,
          "min" : 37.0,
          "sum" : 80413.00000000004,
          "standardDeviation" : 177.02326627132965
        }, {
          "mean" : 229.42068965517223,
          "variance" : 225110.2627045925,
          "n" : 435,
          "max" : 9618.0,
          "min" : 28.0,
          "sum" : 99797.99999999991,
          "standardDeviation" : 474.4578618851125
        }, {
          "mean" : 226.91011235955045,
          "variance" : 23800.825700269033,
          "n" : 356,
          "max" : 833.0,
          "min" : 20.0,
          "sum" : 80779.99999999996,
          "standardDeviation" : 154.2751622921494
        }, {
          "mean" : 222.57027027027013,
          "variance" : 30012.934073097484,
          "n" : 370,
          "max" : 894.0,
          "min" : 37.0,
          "sum" : 82350.99999999994,
          "standardDeviation" : 173.2424141862999
        }, {
          "mean" : 209.21311475409854,
          "variance" : 264267.0741937964,
          "n" : 427,
          "max" : 10411.0,
          "min" : 30.0,
          "sum" : 89334.00000000007,
          "standardDeviation" : 514.069133671529
        }, {
          "mean" : 129.1353846153847,
          "variance" : 8395.172972459637,
          "n" : 325,
          "max" : 518.0,
          "min" : 15.0,
          "sum" : 41969.00000000003,
          "standardDeviation" : 91.62517652075567
        } ],
        "16" : [ {
          "mean" : 963.4879649890603,
          "variance" : 2175024.4828592255,
          "n" : 452,
          "max" : 20467.0,
          "min" : 76.0,
          "sum" : 435496.56017505523,
          "standardDeviation" : 1474.7964208185567
        }, {
          "mean" : 347.26043737574537,
          "variance" : 2111167.2686906466,
          "n" : 503,
          "max" : 32241.0,
          "min" : 38.0,
          "sum" : 174671.9999999999,
          "standardDeviation" : 1452.985639533525
        }, {
          "mean" : 206.24857142857132,
          "variance" : 22122.015399099466,
          "n" : 350,
          "max" : 785.0,
          "min" : 20.0,
          "sum" : 72186.99999999996,
          "standardDeviation" : 148.7347148418938
        }, {
          "mean" : 196.18847006651882,
          "variance" : 23310.517733431876,
          "n" : 451,
          "max" : 1199.0,
          "min" : 31.0,
          "sum" : 88480.99999999999,
          "standardDeviation" : 152.6778233190134
        }, {
          "mean" : 263.4478873239438,
          "variance" : 435392.5700167106,
          "n" : 355,
          "max" : 9704.0,
          "min" : 28.0,
          "sum" : 93524.00000000004,
          "standardDeviation" : 659.8428373610724
        }, {
          "mean" : 237.24942791762018,
          "variance" : 467408.1188356811,
          "n" : 437,
          "max" : 10093.0,
          "min" : 29.0,
          "sum" : 103678.00000000001,
          "standardDeviation" : 683.6725230954372
        }, {
          "mean" : 189.0692520775624,
          "variance" : 24484.44241305017,
          "n" : 361,
          "max" : 1019.0,
          "min" : 19.0,
          "sum" : 68254.00000000003,
          "standardDeviation" : 156.47505364450325
        }, {
          "mean" : 168.0605095541402,
          "variance" : 18133.6289147555,
          "n" : 314,
          "max" : 1013.0,
          "min" : 21.0,
          "sum" : 52771.00000000002,
          "standardDeviation" : 134.66116334992617
        } ],
        "17" : [ {
          "mean" : 1107.0961145194276,
          "variance" : 5112701.910825034,
          "n" : 484,
          "max" : 35396.0,
          "min" : 71.0,
          "sum" : 535834.519427403,
          "standardDeviation" : 2261.1284596026458
        }, {
          "mean" : 331.1215932914046,
          "variance" : 4248985.938965517,
          "n" : 477,
          "max" : 44992.0,
          "min" : 28.0,
          "sum" : 157945.0,
          "standardDeviation" : 2061.3068522094222
        }, {
          "mean" : 221.64088397790053,
          "variance" : 294671.98702193104,
          "n" : 362,
          "max" : 10221.0,
          "min" : 28.0,
          "sum" : 80233.99999999999,
          "standardDeviation" : 542.8369801532787
        }, {
          "mean" : 177.9214780600464,
          "variance" : 17445.901227439917,
          "n" : 433,
          "max" : 841.0,
          "min" : 19.0,
          "sum" : 77040.0000000001,
          "standardDeviation" : 132.08293314217366
        }, {
          "mean" : 197.67787114845933,
          "variance" : 16086.24706511819,
          "n" : 357,
          "max" : 660.0,
          "min" : 19.0,
          "sum" : 70570.99999999999,
          "standardDeviation" : 126.83156967063914
        }, {
          "mean" : 172.06363636363645,
          "variance" : 13732.30573617728,
          "n" : 440,
          "max" : 527.0,
          "min" : 21.0,
          "sum" : 75708.00000000004,
          "standardDeviation" : 117.18492111264692
        }, {
          "mean" : 166.00558659217882,
          "variance" : 16171.450949094728,
          "n" : 358,
          "max" : 786.0,
          "min" : 34.0,
          "sum" : 59430.000000000015,
          "standardDeviation" : 127.16701989546947
        }, {
          "mean" : 178.49681528662407,
          "variance" : 344703.79072464927,
          "n" : 314,
          "max" : 10300.0,
          "min" : 20.0,
          "sum" : 56047.999999999956,
          "standardDeviation" : 587.114801997573
        } ],
        "18" : [ {
          "mean" : 1319.3471074380175,
          "variance" : 3.104900549417373E7,
          "n" : 479,
          "max" : 115658.0,
          "min" : 94.0,
          "sum" : 631967.2644628104,
          "standardDeviation" : 5572.163448264393
        }, {
          "mean" : 368.07337526205424,
          "variance" : 1954787.513512323,
          "n" : 477,
          "max" : 21806.0,
          "min" : 31.0,
          "sum" : 175570.99999999988,
          "standardDeviation" : 1398.1371583333028
        }, {
          "mean" : 227.99714285714293,
          "variance" : 32621.802284076948,
          "n" : 350,
          "max" : 976.0,
          "min" : 40.0,
          "sum" : 79799.00000000003,
          "standardDeviation" : 180.61506660319606
        }, {
          "mean" : 201.5691964285716,
          "variance" : 29048.652919263335,
          "n" : 448,
          "max" : 964.0,
          "min" : 35.0,
          "sum" : 90303.00000000007,
          "standardDeviation" : 170.43665368477326
        }, {
          "mean" : 207.28571428571425,
          "variance" : 25657.569823434977,
          "n" : 357,
          "max" : 779.0,
          "min" : 29.0,
          "sum" : 74000.99999999999,
          "standardDeviation" : 160.17980466786372
        }, {
          "mean" : 190.24153498871334,
          "variance" : 26242.563700805895,
          "n" : 443,
          "max" : 971.0,
          "min" : 23.0,
          "sum" : 84277.00000000001,
          "standardDeviation" : 161.99556691714096
        }, {
          "mean" : 213.30252100840332,
          "variance" : 331290.3408082335,
          "n" : 357,
          "max" : 10650.0,
          "min" : 18.0,
          "sum" : 76148.99999999999,
          "standardDeviation" : 575.578266448824
        }, {
          "mean" : 191.2261146496817,
          "variance" : 356912.9359292645,
          "n" : 314,
          "max" : 10446.0,
          "min" : 19.0,
          "sum" : 60045.00000000006,
          "standardDeviation" : 597.4219078082629
        } ],
        "19" : [ {
          "mean" : 1051.325396825398,
          "variance" : 2439965.381899706,
          "n" : 373,
          "max" : 22124.0,
          "min" : 100.0,
          "sum" : 392144.3730158735,
          "standardDeviation" : 1562.03885415815
        }, {
          "mean" : 519.3768115942031,
          "variance" : 5010383.384689402,
          "n" : 483,
          "max" : 38858.0,
          "min" : 43.0,
          "sum" : 250859.0000000001,
          "standardDeviation" : 2238.3885687452484
        }, {
          "mean" : 224.28953771289534,
          "variance" : 27361.981817102824,
          "n" : 411,
          "max" : 950.0,
          "min" : 39.0,
          "sum" : 92182.99999999999,
          "standardDeviation" : 165.41457558843726
        }, {
          "mean" : 281.07692307692275,
          "variance" : 344646.7169230769,
          "n" : 351,
          "max" : 10548.0,
          "min" : 27.0,
          "sum" : 98657.99999999988,
          "standardDeviation" : 587.0661946689461
        }, {
          "mean" : 237.60273972602727,
          "variance" : 38817.64120126452,
          "n" : 365,
          "max" : 1133.0,
          "min" : 36.0,
          "sum" : 86724.99999999996,
          "standardDeviation" : 197.02193076219845
        }, {
          "mean" : 222.29611650485427,
          "variance" : 31429.834242789322,
          "n" : 412,
          "max" : 1052.0,
          "min" : 26.0,
          "sum" : 91585.99999999996,
          "standardDeviation" : 177.2846136662438
        }, {
          "mean" : 225.07407407407396,
          "variance" : 29252.78878306877,
          "n" : 351,
          "max" : 1150.0,
          "min" : 26.0,
          "sum" : 79000.99999999996,
          "standardDeviation" : 171.0344666523937
        }, {
          "mean" : 160.46407185628735,
          "variance" : 13743.738945532363,
          "n" : 334,
          "max" : 695.0,
          "min" : 33.0,
          "sum" : 53594.99999999997,
          "standardDeviation" : 117.23369372979921
        }, {
          "mean" : 132.68055555555554,
          "variance" : 9714.666472416468,
          "n" : 144,
          "max" : 474.0,
          "min" : 30.0,
          "sum" : 19106.0,
          "standardDeviation" : 98.5630076266774
        } ],
        "20" : [ {
          "mean" : 1055.5624999999993,
          "variance" : 1944734.890253779,
          "n" : 459,
          "max" : 19469.0,
          "min" : 123.0,
          "sum" : 484503.1874999997,
          "standardDeviation" : 1394.5375184102359
        }, {
          "mean" : 344.8861788617885,
          "variance" : 4788387.628566223,
          "n" : 492,
          "max" : 48573.0,
          "min" : 24.0,
          "sum" : 169683.99999999994,
          "standardDeviation" : 2188.2384761643834
        }, {
          "mean" : 211.5895953757226,
          "variance" : 22561.871659545952,
          "n" : 346,
          "max" : 792.0,
          "min" : 37.0,
          "sum" : 73210.00000000003,
          "standardDeviation" : 150.2060972781929
        }, {
          "mean" : 201.98102981029825,
          "variance" : 20409.029530458338,
          "n" : 369,
          "max" : 840.0,
          "min" : 39.0,
          "sum" : 74531.00000000006,
          "standardDeviation" : 142.86017475300224
        }, {
          "mean" : 196.8909952606634,
          "variance" : 23303.59379045604,
          "n" : 422,
          "max" : 998.0,
          "min" : 30.0,
          "sum" : 83087.99999999996,
          "standardDeviation" : 152.65514662289
        }, {
          "mean" : 199.43390804597703,
          "variance" : 21022.86881811256,
          "n" : 348,
          "max" : 836.0,
          "min" : 26.0,
          "sum" : 69403.00000000001,
          "standardDeviation" : 144.99265091070154
        }, {
          "mean" : 177.2022727272726,
          "variance" : 22602.289288672608,
          "n" : 440,
          "max" : 1011.0,
          "min" : 19.0,
          "sum" : 77968.99999999994,
          "standardDeviation" : 150.3405776517857
        }, {
          "mean" : 188.5644699140402,
          "variance" : 272411.75804433017,
          "n" : 349,
          "max" : 9611.0,
          "min" : 21.0,
          "sum" : 65809.00000000003,
          "standardDeviation" : 521.9307981373873
        }, {
          "mean" : 551.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 551.0,
          "min" : 551.0,
          "sum" : 551.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1006.8923395445138,
          "variance" : 4193517.1668084133,
          "n" : 478,
          "max" : 29168.0,
          "min" : 83.0,
          "sum" : 481294.53830227756,
          "standardDeviation" : 2047.8078930428053
        }, {
          "mean" : 211.79079497907944,
          "variance" : 22654.5389507294,
          "n" : 478,
          "max" : 1362.0,
          "min" : 22.0,
          "sum" : 101235.99999999997,
          "standardDeviation" : 150.51424833127726
        }, {
          "mean" : 241.61428571428576,
          "variance" : 294942.9252967665,
          "n" : 350,
          "max" : 9943.0,
          "min" : 30.0,
          "sum" : 84565.00000000001,
          "standardDeviation" : 543.0864804952951
        }, {
          "mean" : 205.056179775281,
          "variance" : 101816.41350339107,
          "n" : 445,
          "max" : 6094.0,
          "min" : 18.0,
          "sum" : 91250.00000000004,
          "standardDeviation" : 319.08684320007785
        }, {
          "mean" : 226.05849582172712,
          "variance" : 297467.8876301333,
          "n" : 359,
          "max" : 10158.0,
          "min" : 39.0,
          "sum" : 81155.00000000003,
          "standardDeviation" : 545.4061675761774
        }, {
          "mean" : 183.2689655172412,
          "variance" : 19151.29385030987,
          "n" : 435,
          "max" : 877.0,
          "min" : 26.0,
          "sum" : 79721.99999999993,
          "standardDeviation" : 138.38819982321422
        }, {
          "mean" : 178.26027397260293,
          "variance" : 20590.791961463216,
          "n" : 365,
          "max" : 770.0,
          "min" : 20.0,
          "sum" : 65065.00000000007,
          "standardDeviation" : 143.49491963642203
        }, {
          "mean" : 162.23809523809533,
          "variance" : 17281.290263876257,
          "n" : 315,
          "max" : 890.0,
          "min" : 21.0,
          "sum" : 51105.00000000003,
          "standardDeviation" : 131.45832139456314
        } ],
        "22" : [ {
          "mean" : 992.2958435207825,
          "variance" : 1810131.2627522903,
          "n" : 404,
          "max" : 17732.0,
          "min" : 81.0,
          "sum" : 400887.52078239614,
          "standardDeviation" : 1345.4111872406481
        }, {
          "mean" : 413.8807339449539,
          "variance" : 3159770.4177347557,
          "n" : 545,
          "max" : 41121.0,
          "min" : 29.0,
          "sum" : 225564.99999999985,
          "standardDeviation" : 1777.574307232965
        }, {
          "mean" : 252.2215909090908,
          "variance" : 29575.71713934214,
          "n" : 352,
          "max" : 848.0,
          "min" : 39.0,
          "sum" : 88781.99999999996,
          "standardDeviation" : 171.97592023112463
        }, {
          "mean" : 204.62817551963067,
          "variance" : 24414.460963561705,
          "n" : 433,
          "max" : 823.0,
          "min" : 28.0,
          "sum" : 88604.00000000009,
          "standardDeviation" : 156.25127507819482
        }, {
          "mean" : 226.57567567567565,
          "variance" : 23178.21241485385,
          "n" : 370,
          "max" : 878.0,
          "min" : 27.0,
          "sum" : 83832.99999999999,
          "standardDeviation" : 152.24392406547412
        }, {
          "mean" : 208.00236406619388,
          "variance" : 27461.66113183872,
          "n" : 423,
          "max" : 795.0,
          "min" : 29.0,
          "sum" : 87985.00000000001,
          "standardDeviation" : 165.71560316348825
        }, {
          "mean" : 236.107329842932,
          "variance" : 79762.49501174918,
          "n" : 382,
          "max" : 4369.0,
          "min" : 17.0,
          "sum" : 90193.00000000001,
          "standardDeviation" : 282.42254692525734
        }, {
          "mean" : 213.5331230283912,
          "variance" : 35927.43956394999,
          "n" : 317,
          "max" : 920.0,
          "min" : 19.0,
          "sum" : 67690.00000000001,
          "standardDeviation" : 189.54534962364545
        } ],
        "23" : [ {
          "mean" : 1026.8687500000003,
          "variance" : 3313868.648708247,
          "n" : 475,
          "max" : 22775.0,
          "min" : 86.0,
          "sum" : 487762.6562500002,
          "standardDeviation" : 1820.40343020668
        }, {
          "mean" : 230.39511201629333,
          "variance" : 27916.80683320169,
          "n" : 491,
          "max" : 913.0,
          "min" : 34.0,
          "sum" : 113124.00000000003,
          "standardDeviation" : 167.0832332497839
        }, {
          "mean" : 216.06666666666658,
          "variance" : 29010.23100775195,
          "n" : 345,
          "max" : 1778.0,
          "min" : 19.0,
          "sum" : 74542.99999999997,
          "standardDeviation" : 170.32390028340694
        }, {
          "mean" : 223.445701357466,
          "variance" : 245167.39953930283,
          "n" : 442,
          "max" : 10130.0,
          "min" : 31.0,
          "sum" : 98762.99999999997,
          "standardDeviation" : 495.1438170262281
        }, {
          "mean" : 210.4621848739497,
          "variance" : 23249.524549145503,
          "n" : 357,
          "max" : 737.0,
          "min" : 22.0,
          "sum" : 75135.00000000004,
          "standardDeviation" : 152.47794774702834
        }, {
          "mean" : 184.4269141531323,
          "variance" : 20242.840576269326,
          "n" : 431,
          "max" : 846.0,
          "min" : 28.0,
          "sum" : 79488.00000000001,
          "standardDeviation" : 142.27733683292405
        }, {
          "mean" : 173.15068493150682,
          "variance" : 20879.78217672738,
          "n" : 365,
          "max" : 956.0,
          "min" : 18.0,
          "sum" : 63199.999999999985,
          "standardDeviation" : 144.49838122528357
        }, {
          "mean" : 213.87774294670848,
          "variance" : 407496.8434967766,
          "n" : 319,
          "max" : 10039.0,
          "min" : 19.0,
          "sum" : 68227.0,
          "standardDeviation" : 638.3547943712623
        } ],
        "24" : [ {
          "mean" : 1018.6322067594443,
          "variance" : 2342532.268841138,
          "n" : 498,
          "max" : 20992.0,
          "min" : 110.0,
          "sum" : 507278.8389662033,
          "standardDeviation" : 1530.5333282359904
        }, {
          "mean" : 255.8148148148148,
          "variance" : 22266.194889212366,
          "n" : 459,
          "max" : 1012.0,
          "min" : 39.0,
          "sum" : 117419.0,
          "standardDeviation" : 149.21861441928874
        }, {
          "mean" : 240.58333333333334,
          "variance" : 18728.86047070126,
          "n" : 348,
          "max" : 823.0,
          "min" : 71.0,
          "sum" : 83723.0,
          "standardDeviation" : 136.85342696001902
        }, {
          "mean" : 226.8111888111887,
          "variance" : 80534.27501470491,
          "n" : 429,
          "max" : 5440.0,
          "min" : 38.0,
          "sum" : 97301.99999999996,
          "standardDeviation" : 283.7856145309429
        }, {
          "mean" : 237.01086956521738,
          "variance" : 17726.081625399827,
          "n" : 368,
          "max" : 913.0,
          "min" : 38.0,
          "sum" : 87220.0,
          "standardDeviation" : 133.13933162442956
        }, {
          "mean" : 218.63215258855593,
          "variance" : 16007.703116391951,
          "n" : 367,
          "max" : 775.0,
          "min" : 38.0,
          "sum" : 80238.00000000003,
          "standardDeviation" : 126.52155198381006
        }, {
          "mean" : 204.17577197149635,
          "variance" : 19135.55474493836,
          "n" : 421,
          "max" : 760.0,
          "min" : 28.0,
          "sum" : 85957.99999999996,
          "standardDeviation" : 138.33132235664618
        }, {
          "mean" : 190.46428571428575,
          "variance" : 26025.658422174838,
          "n" : 336,
          "max" : 868.0,
          "min" : 18.0,
          "sum" : 63996.000000000015,
          "standardDeviation" : 161.32469873573245
        } ],
        "25" : [ {
          "mean" : 1040.3361702127659,
          "variance" : 4271773.093571656,
          "n" : 465,
          "max" : 35125.0,
          "min" : 94.0,
          "sum" : 483756.31914893613,
          "standardDeviation" : 2066.826817508341
        }, {
          "mean" : 395.8143459915611,
          "variance" : 1830880.4813159541,
          "n" : 474,
          "max" : 21335.0,
          "min" : 40.0,
          "sum" : 187615.99999999994,
          "standardDeviation" : 1353.1003219702352
        }, {
          "mean" : 254.3859154929577,
          "variance" : 205912.96646773294,
          "n" : 355,
          "max" : 8183.0,
          "min" : 41.0,
          "sum" : 90306.99999999999,
          "standardDeviation" : 453.7763396958164
        }, {
          "mean" : 209.89890710382505,
          "variance" : 28916.304820720106,
          "n" : 366,
          "max" : 1135.0,
          "min" : 20.0,
          "sum" : 76822.99999999997,
          "standardDeviation" : 170.04794859309567
        }, {
          "mean" : 202.6315789473684,
          "variance" : 26261.293197021343,
          "n" : 418,
          "max" : 953.0,
          "min" : 26.0,
          "sum" : 84700.0,
          "standardDeviation" : 162.05336527521217
        }, {
          "mean" : 247.01724137931026,
          "variance" : 332953.9997018782,
          "n" : 348,
          "max" : 10479.0,
          "min" : 38.0,
          "sum" : 85961.99999999997,
          "standardDeviation" : 577.0216631131609
        }, {
          "mean" : 215.3540051679586,
          "variance" : 274670.50907070463,
          "n" : 387,
          "max" : 10047.0,
          "min" : 0.0,
          "sum" : 83341.99999999999,
          "standardDeviation" : 524.0901726522876
        }, {
          "mean" : 145.68939393939388,
          "variance" : 12236.91340621403,
          "n" : 396,
          "max" : 705.0,
          "min" : 15.0,
          "sum" : 57692.99999999998,
          "standardDeviation" : 110.62058310375167
        }, {
          "mean" : 284.68749999999994,
          "variance" : 59919.29583333332,
          "n" : 16,
          "max" : 837.0,
          "min" : 64.0,
          "sum" : 4554.999999999999,
          "standardDeviation" : 244.78418215508395
        } ],
        "26" : [ {
          "mean" : 1014.5765765765768,
          "variance" : 4369474.754845137,
          "n" : 439,
          "max" : 38594.0,
          "min" : 87.0,
          "sum" : 445399.1171171172,
          "standardDeviation" : 2090.328862845542
        }, {
          "mean" : 323.69471624266123,
          "variance" : 1416229.161521044,
          "n" : 511,
          "max" : 24987.0,
          "min" : 30.0,
          "sum" : 165407.99999999988,
          "standardDeviation" : 1190.0542683092415
        }, {
          "mean" : 199.72571428571422,
          "variance" : 15528.514809660253,
          "n" : 350,
          "max" : 756.0,
          "min" : 29.0,
          "sum" : 69903.99999999997,
          "standardDeviation" : 124.6134615908741
        }, {
          "mean" : 178.84928229665064,
          "variance" : 16145.840539052004,
          "n" : 418,
          "max" : 693.0,
          "min" : 31.0,
          "sum" : 74758.99999999997,
          "standardDeviation" : 127.06628403731654
        }, {
          "mean" : 186.14397905759182,
          "variance" : 12564.002837668842,
          "n" : 382,
          "max" : 577.0,
          "min" : 37.0,
          "sum" : 71107.00000000007,
          "standardDeviation" : 112.08926281169326
        }, {
          "mean" : 173.02439024390253,
          "variance" : 15499.409729586423,
          "n" : 369,
          "max" : 862.0,
          "min" : 19.0,
          "sum" : 63846.00000000004,
          "standardDeviation" : 124.49662537429046
        }, {
          "mean" : 163.24822695035454,
          "variance" : 14437.021175758806,
          "n" : 423,
          "max" : 926.0,
          "min" : 19.0,
          "sum" : 69053.99999999997,
          "standardDeviation" : 120.15415588217832
        }, {
          "mean" : 200.91291291291284,
          "variance" : 289244.9170917905,
          "n" : 333,
          "max" : 9581.0,
          "min" : 28.0,
          "sum" : 66903.99999999997,
          "standardDeviation" : 537.8149468839542
        } ],
        "27" : [ {
          "mean" : 1064.1689860834992,
          "variance" : 3295313.2442951845,
          "n" : 498,
          "max" : 28609.0,
          "min" : 119.0,
          "sum" : 529956.1550695826,
          "standardDeviation" : 1815.299767061954
        }, {
          "mean" : 198.6918103448277,
          "variance" : 17907.341099091394,
          "n" : 464,
          "max" : 978.0,
          "min" : 21.0,
          "sum" : 92193.00000000006,
          "standardDeviation" : 133.81831376568528
        }, {
          "mean" : 199.1773255813954,
          "variance" : 16309.586539765402,
          "n" : 344,
          "max" : 920.0,
          "min" : 30.0,
          "sum" : 68517.00000000001,
          "standardDeviation" : 127.70899161674326
        }, {
          "mean" : 204.38228438228458,
          "variance" : 142674.87688168525,
          "n" : 429,
          "max" : 7518.0,
          "min" : 19.0,
          "sum" : 87680.00000000009,
          "standardDeviation" : 377.7232808309348
        }, {
          "mean" : 195.5686813186812,
          "variance" : 17933.8878318651,
          "n" : 364,
          "max" : 776.0,
          "min" : 27.0,
          "sum" : 71186.99999999996,
          "standardDeviation" : 133.9174664928556
        }, {
          "mean" : 188.01639344262267,
          "variance" : 17251.314799011896,
          "n" : 366,
          "max" : 739.0,
          "min" : 20.0,
          "sum" : 68813.9999999999,
          "standardDeviation" : 131.3442606245583
        }, {
          "mean" : 167.52380952380952,
          "variance" : 15251.47675872259,
          "n" : 420,
          "max" : 702.0,
          "min" : 19.0,
          "sum" : 70360.0,
          "standardDeviation" : 123.49686942883447
        }, {
          "mean" : 140.56304985337232,
          "variance" : 10200.458513023985,
          "n" : 341,
          "max" : 732.0,
          "min" : 29.0,
          "sum" : 47931.99999999996,
          "standardDeviation" : 100.9973193358318
        } ],
        "28" : [ {
          "mean" : 951.1979166666671,
          "variance" : 1656004.2592858395,
          "n" : 475,
          "max" : 13290.0,
          "min" : 107.0,
          "sum" : 451819.01041666686,
          "standardDeviation" : 1286.858290289121
        }, {
          "mean" : 379.8215767634855,
          "variance" : 3128654.1801571753,
          "n" : 482,
          "max" : 37436.0,
          "min" : 54.0,
          "sum" : 183074.0,
          "standardDeviation" : 1768.8002092257834
        }, {
          "mean" : 251.97701149425302,
          "variance" : 30428.466328795257,
          "n" : 348,
          "max" : 1183.0,
          "min" : 49.0,
          "sum" : 87688.00000000006,
          "standardDeviation" : 174.4375714368761
        }, {
          "mean" : 230.63785046728952,
          "variance" : 31909.013739630973,
          "n" : 428,
          "max" : 963.0,
          "min" : 20.0,
          "sum" : 98712.99999999991,
          "standardDeviation" : 178.6309428392264
        }, {
          "mean" : 236.48773841961847,
          "variance" : 30782.4581825762,
          "n" : 367,
          "max" : 890.0,
          "min" : 30.0,
          "sum" : 86790.99999999997,
          "standardDeviation" : 175.4493037392175
        }, {
          "mean" : 231.76229508196732,
          "variance" : 33695.24471143049,
          "n" : 366,
          "max" : 915.0,
          "min" : 41.0,
          "sum" : 84825.00000000004,
          "standardDeviation" : 183.5626451962122
        }, {
          "mean" : 200.50118764845604,
          "variance" : 27165.241070014705,
          "n" : 421,
          "max" : 1069.0,
          "min" : 34.0,
          "sum" : 84410.99999999999,
          "standardDeviation" : 164.81881285221874
        }, {
          "mean" : 205.66275659824052,
          "variance" : 322072.000638261,
          "n" : 341,
          "max" : 10317.0,
          "min" : 25.0,
          "sum" : 70131.00000000001,
          "standardDeviation" : 567.5138770446596
        } ],
        "29" : [ {
          "mean" : 1153.7255936675465,
          "variance" : 3613999.9033379387,
          "n" : 374,
          "max" : 24342.0,
          "min" : 116.0,
          "sum" : 431493.3720316624,
          "standardDeviation" : 1901.0523147293814
        }, {
          "mean" : 384.70639032815177,
          "variance" : 1107992.0001494046,
          "n" : 579,
          "max" : 21358.0,
          "min" : 30.0,
          "sum" : 222744.99999999988,
          "standardDeviation" : 1052.6119893623693
        }, {
          "mean" : 242.89080459770122,
          "variance" : 32544.90446851502,
          "n" : 348,
          "max" : 1134.0,
          "min" : 38.0,
          "sum" : 84526.00000000003,
          "standardDeviation" : 180.402063371002
        }, {
          "mean" : 223.46475195822435,
          "variance" : 27319.13946112941,
          "n" : 383,
          "max" : 889.0,
          "min" : 44.0,
          "sum" : 85586.99999999993,
          "standardDeviation" : 165.28502491493114
        }, {
          "mean" : 231.82063882063878,
          "variance" : 32557.29041042834,
          "n" : 407,
          "max" : 1354.0,
          "min" : 32.0,
          "sum" : 94350.99999999999,
          "standardDeviation" : 180.43638882007238
        }, {
          "mean" : 228.6405797101449,
          "variance" : 28941.091371755974,
          "n" : 345,
          "max" : 816.0,
          "min" : 27.0,
          "sum" : 78880.99999999999,
          "standardDeviation" : 170.12081404624178
        }, {
          "mean" : 190.05429864253392,
          "variance" : 23414.4142785319,
          "n" : 442,
          "max" : 905.0,
          "min" : 24.0,
          "sum" : 84004.0,
          "standardDeviation" : 153.01769269771356
        }, {
          "mean" : 172.3554913294798,
          "variance" : 17920.745723381082,
          "n" : 346,
          "max" : 677.0,
          "min" : 32.0,
          "sum" : 59635.000000000015,
          "standardDeviation" : 133.86838955997447
        } ]
      }
    },
    "children" : [ ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 266},
   width = 855- margin.right - margin.left,
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
    "meanOld" : "NaN",
    "meanCurrent" : "NaN",
    "deviationOld" : "NaN",
    "deviationCurrent" : "NaN",
    "vms" : 0,
    "callsOld" : 0,
    "calls" : 0,
    "tvalue" : -1.0
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ ],
  "valuesPredecessor" : [ ],
  "vmValues" : {
    "values" : { }
  },
  "vmValuesPredecessor" : {
    "values" : { }
  },
  "children" : [ ]
}];
