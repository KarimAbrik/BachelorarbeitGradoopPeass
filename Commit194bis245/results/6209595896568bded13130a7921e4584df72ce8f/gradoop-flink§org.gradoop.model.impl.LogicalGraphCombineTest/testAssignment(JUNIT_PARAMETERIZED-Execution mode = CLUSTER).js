if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphCombineTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Predecessor: e56da032dc5cd886fe871f750231dd077f5ba7d6<br>Comitter: <br>Test Case: org.gradoop.model.impl.LogicalGraphCombineTest#testAssignment<br>";
   if (typeof jenkins !== 'undefined') {
         } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='testAssignment_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
  }
}

var source = {"current":
{
 "org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,"org.gradoop.model.impl.LogicalGraphCombineTest.testAssignment_":
 `@Test
public void testAssignment() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> databaseCommunity = getGraphStore().getGraph(0L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> graphCommunity = getGraphStore().getGraph(1L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = graphCommunity.combine(databaseCommunity);
    // use collections as data sink
    Collection<DefaultVertexData> vertexData = Lists.newArrayList();
    Collection<DefaultEdgeData> edgeData = Lists.newArrayList();
    newGraph.getVertexData().output(new LocalCollectionOutputFormat<>(vertexData));
    newGraph.getEdgeData().output(new LocalCollectionOutputFormat<>(edgeData));
    getExecutionEnvironment().execute();
    for (VertexData v : vertexData) {
        Set<Long> gIDs = v.getGraphs();
        if (v.equals(VERTEX_PERSON_ALICE)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_BOB)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_EVE)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_CAROL)) {
            assertEquals("wrong number of graphs", 4, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_DAVE)) {
            assertEquals("wrong number of graphs", 4, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_FRANK)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        }
    }
    for (EdgeData e : edgeData) {
        Set<Long> gIDs = e.getGraphs();
        if (e.equals(EDGE_0_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(EDGE_1_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(EDGE_6_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (e.equals(EDGE_21_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (e.equals(EDGE_4_KNOWS)) {
            assertEquals("wrong number of graphs", 4, gIDs.size());
        } else if (e.equals(EDGE_5_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(EDGE_22_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (e.equals(EDGE_23_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        }
    }
}`,},
"old":
{
 "org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,"org.gradoop.model.impl.LogicalGraphCombineTest.testAssignment_":
 `@Test
public void testAssignment() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> databaseCommunity = getGraphStore().getGraph(0L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> graphCommunity = getGraphStore().getGraph(1L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = graphCommunity.combine(databaseCommunity);
    Collection<DefaultVertexData> vertexData = newGraph.getVertexData().collect();
    Collection<DefaultEdgeData> edgeData = newGraph.getEdgeData().collect();
    for (VertexData v : vertexData) {
        Set<Long> gIDs = v.getGraphs();
        if (v.equals(VERTEX_PERSON_ALICE)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_BOB)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_EVE)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_CAROL)) {
            assertEquals("wrong number of graphs", 4, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_DAVE)) {
            assertEquals("wrong number of graphs", 4, gIDs.size());
        } else if (v.equals(VERTEX_PERSON_FRANK)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        }
    }
    for (EdgeData e : edgeData) {
        Set<Long> gIDs = e.getGraphs();
        if (e.equals(EDGE_0_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(EDGE_1_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(EDGE_6_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (e.equals(EDGE_21_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (e.equals(EDGE_4_KNOWS)) {
            assertEquals("wrong number of graphs", 4, gIDs.size());
        } else if (e.equals(EDGE_5_KNOWS)) {
            assertEquals("wrong number of graphs", 3, gIDs.size());
        } else if (e.equals(EDGE_22_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        } else if (e.equals(EDGE_23_KNOWS)) {
            assertEquals("wrong number of graphs", 2, gIDs.size());
        }
    }
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.LogicalGraphCombineTest#testAssignment",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphCombineTest.testAssignment()",
  "otherKiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphCombineTest.testAssignment()",
  "module" : "gradoop-flink",
  "name" : "LogicalGraphCombineTest#testAssignment",
  "key" : "org.gradoop.model.impl.LogicalGraphCombineTest.testAssignment_",
  "otherKey" : "org.gradoop.model.impl.LogicalGraphCombineTest.testAssignment_",
  "parent" : null,
  "color" : "#00FF00",
  "statistic" : {
    "meanOld" : 4.2723119564199996E9,
    "meanCurrent" : 4.154223095772414E9,
    "deviationOld" : 3.982427919373883E7,
    "deviationCurrent" : 4.5284696739976354E7,
    "vms" : 29,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 10.622711098200098,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 4.916367047613776E7,
  "inVMDeviation" : 4.938403636748354E7,
  "ess" : 0,
  "values" : [ 4.1933834792E9, 4.1111298232E9, 4.1283452474E9, 4.1074959906E9, 4.4110939814E9, 4.1682042858E9, 4.1888241134E9, 4.0867851364E9, 4.0682298974E9, 4.2088252516E9, 4.1694599338E9, 4.2523884084E9, 4.2076797088E9, 4.1669548368E9, 4.1381018448E9, 4.2095122332E9, 4.1469773914E9, 4.1686860396E9, 4.1497319684E9, 4.1256388336E9, 4.2599226778E9, 4.158653435E9, 4.1390768492E9, 4.1459485378E9, 4.1362778322E9, 4.1493496482E9, 4.1115686938E9, 4.1261808432E9, 4.1505972814E9, 4.098539555E9 ],
  "valuesPredecessor" : [ 4.3123340594E9, 4.2168674934E9, 4.2533106242E9, 4.3267326922E9, 4.2632803304E9, 4.2973331206E9, 4.261021392E9, 4.2320134792E9, 4.2025346946E9, 4.2648363736E9, 4.2934159796E9, 4.2310477006E9, 4.300390912E9, 4.273494217E9, 4.2361581414E9, 4.2189630636E9, 4.2820488028E9, 4.293535899E9, 4.284079482E9, 4.2760328414E9, 4.380051301E9, 4.3223740886E9, 4.3061155942E9, 4.278177112E9, 4.2602988614E9, 4.2642486024E9, 4.2261242534E9, 4.3295605898E9, 4.2438191482E9, 4.2391578426E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4.198519136E9,
        "variance" : 3.0167529907586585E15,
        "n" : 2,
        "max" : 4.237356959E9,
        "min" : 4.159681313E9,
        "sum" : 8.397038272E9,
        "standardDeviation" : 5.492497601964573E7
      }, {
        "mean" : 4.172110653E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.172110653E9,
        "min" : 4.172110653E9,
        "sum" : 4.172110653E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.236111003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.236111003E9,
        "min" : 4.236111003E9,
        "sum" : 4.236111003E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.161657468E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.161657468E9,
        "min" : 4.161657468E9,
        "sum" : 4.161657468E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.0679602425E9,
        "variance" : 4.1529072118050405E15,
        "n" : 2,
        "max" : 4.113528363E9,
        "min" : 4.022392122E9,
        "sum" : 8.135920485E9,
        "standardDeviation" : 6.444305402295146E7
      }, {
        "mean" : 4.113577669E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.113577669E9,
        "min" : 4.113577669E9,
        "sum" : 4.113577669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.178477684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.178477684E9,
        "min" : 4.178477684E9,
        "sum" : 4.178477684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.127673278E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.127673278E9,
        "min" : 4.127673278E9,
        "sum" : 4.127673278E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.061266231E9,
        "variance" : 8.270466168370569E15,
        "n" : 2,
        "max" : 4.125572009E9,
        "min" : 3.996960453E9,
        "sum" : 8.122532462E9,
        "standardDeviation" : 9.09421033865534E7
      }, {
        "mean" : 4.139635223E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.139635223E9,
        "min" : 4.139635223E9,
        "sum" : 4.139635223E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.151809742E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.151809742E9,
        "min" : 4.151809742E9,
        "sum" : 4.151809742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.22774881E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.22774881E9,
        "min" : 4.22774881E9,
        "sum" : 4.22774881E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.080370149E9,
        "variance" : 1.3936002664896052E16,
        "n" : 2,
        "max" : 4.163844704E9,
        "min" : 3.996895594E9,
        "sum" : 8.160740298E9,
        "standardDeviation" : 1.1805084779405886E8
      }, {
        "mean" : 4.128597162E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.128597162E9,
        "min" : 4.128597162E9,
        "sum" : 4.128597162E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.165199912E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.165199912E9,
        "min" : 4.165199912E9,
        "sum" : 4.165199912E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.082942581E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.082942581E9,
        "min" : 4.082942581E9,
        "sum" : 4.082942581E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.313799215E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.313799215E9,
        "min" : 4.313799215E9,
        "sum" : 4.313799215E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.345782125E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.345782125E9,
        "min" : 4.345782125E9,
        "sum" : 4.345782125E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.446333125E9,
        "variance" : 1.81776763058E11,
        "n" : 2,
        "max" : 4.446634602E9,
        "min" : 4.446031648E9,
        "sum" : 8.89266625E9,
        "standardDeviation" : 426352.86214355356
      }, {
        "mean" : 4.503222317E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.503222317E9,
        "min" : 4.503222317E9,
        "sum" : 4.503222317E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.1405611875E9,
        "variance" : 2.591704016450161E15,
        "n" : 2,
        "max" : 4.176559132E9,
        "min" : 4.104563243E9,
        "sum" : 8.281122375E9,
        "standardDeviation" : 5.090878132945397E7
      }, {
        "mean" : 4.207020576E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.207020576E9,
        "min" : 4.207020576E9,
        "sum" : 4.207020576E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.235931669E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.235931669E9,
        "min" : 4.235931669E9,
        "sum" : 4.235931669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.116946809E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.116946809E9,
        "min" : 4.116946809E9,
        "sum" : 4.116946809E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.1335089405E9,
        "variance" : 7.999767586077181E15,
        "n" : 2,
        "max" : 4.196753575E9,
        "min" : 4.070264306E9,
        "sum" : 8.267017881E9,
        "standardDeviation" : 8.944141985722935E7
      }, {
        "mean" : 4.206111773E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.206111773E9,
        "min" : 4.206111773E9,
        "sum" : 4.206111773E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.252443328E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.252443328E9,
        "min" : 4.252443328E9,
        "sum" : 4.252443328E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.218547585E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.218547585E9,
        "min" : 4.218547585E9,
        "sum" : 4.218547585E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.0819473025E9,
        "variance" : 2.6237698429254047E14,
        "n" : 2,
        "max" : 4.093401057E9,
        "min" : 4.070493548E9,
        "sum" : 8.163894605E9,
        "standardDeviation" : 1.6198054953991868E7
      }, {
        "mean" : 4.106905736E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.106905736E9,
        "min" : 4.106905736E9,
        "sum" : 4.106905736E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.058132065E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.058132065E9,
        "min" : 4.058132065E9,
        "sum" : 4.058132065E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.104993276E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.104993276E9,
        "min" : 4.104993276E9,
        "sum" : 4.104993276E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.071958482E9,
        "variance" : 6.388575168098E14,
        "n" : 2,
        "max" : 4.089831052E9,
        "min" : 4.054085912E9,
        "sum" : 8.143916964E9,
        "standardDeviation" : 2.5275630888462506E7
      }, {
        "mean" : 4.026248574E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.026248574E9,
        "min" : 4.026248574E9,
        "sum" : 4.026248574E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.108355935E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.108355935E9,
        "min" : 4.108355935E9,
        "sum" : 4.108355935E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.062628014E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.062628014E9,
        "min" : 4.062628014E9,
        "sum" : 4.062628014E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.1934208065E9,
        "variance" : 5.543599905833764E15,
        "n" : 2,
        "max" : 4.246068693E9,
        "min" : 4.14077292E9,
        "sum" : 8.386841613E9,
        "standardDeviation" : 7.445535511857937E7
      }, {
        "mean" : 4.162415662E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.162415662E9,
        "min" : 4.162415662E9,
        "sum" : 4.162415662E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.264631479E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.264631479E9,
        "min" : 4.264631479E9,
        "sum" : 4.264631479E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.230237504E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.230237504E9,
        "min" : 4.230237504E9,
        "sum" : 4.230237504E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.1145448125E9,
        "variance" : 2.638356946339005E14,
        "n" : 2,
        "max" : 4.126030362E9,
        "min" : 4.103059263E9,
        "sum" : 8.229089625E9,
        "standardDeviation" : 1.624301987420752E7
      }, {
        "mean" : 4.233597289E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.233597289E9,
        "min" : 4.233597289E9,
        "sum" : 4.233597289E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.245327158E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.245327158E9,
        "min" : 4.245327158E9,
        "sum" : 4.245327158E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.139285597E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.139285597E9,
        "min" : 4.139285597E9,
        "sum" : 4.139285597E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.238629441E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.238629441E9,
        "min" : 4.238629441E9,
        "sum" : 4.238629441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2158974085E9,
        "variance" : 3.416327467507812E15,
        "n" : 2,
        "max" : 4.257227346E9,
        "min" : 4.174567471E9,
        "sum" : 8.431794817E9,
        "standardDeviation" : 5.844935814453237E7
      }, {
        "mean" : 4.251099823E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.251099823E9,
        "min" : 4.251099823E9,
        "sum" : 4.251099823E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.340417961E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.340417961E9,
        "min" : 4.340417961E9,
        "sum" : 4.340417961E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.1795083185E9,
        "variance" : 6.90829232413648E15,
        "n" : 2,
        "max" : 4.238280303E9,
        "min" : 4.120736334E9,
        "sum" : 8.359016637E9,
        "standardDeviation" : 8.311613756748132E7
      }, {
        "mean" : 4.183549298E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.183549298E9,
        "min" : 4.183549298E9,
        "sum" : 4.183549298E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.304024787E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.304024787E9,
        "min" : 4.304024787E9,
        "sum" : 4.304024787E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.191807822E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.191807822E9,
        "min" : 4.191807822E9,
        "sum" : 4.191807822E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.171995483E9,
        "variance" : 6.537612487151251E15,
        "n" : 2,
        "max" : 4.229168958E9,
        "min" : 4.114822008E9,
        "sum" : 8.343990966E9,
        "standardDeviation" : 8.08555037529991E7
      }, {
        "mean" : 4.213261774E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.213261774E9,
        "min" : 4.213261774E9,
        "sum" : 4.213261774E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.168981975E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.168981975E9,
        "min" : 4.168981975E9,
        "sum" : 4.168981975E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.108539469E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.108539469E9,
        "min" : 4.108539469E9,
        "sum" : 4.108539469E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.122789686E9,
        "variance" : 1.2548280909037568E16,
        "n" : 2,
        "max" : 4.201999158E9,
        "min" : 4.043580214E9,
        "sum" : 8.245579372E9,
        "standardDeviation" : 1.1201910957081193E8
      }, {
        "mean" : 4.133860447E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133860447E9,
        "min" : 4.133860447E9,
        "sum" : 4.133860447E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.169530413E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.169530413E9,
        "min" : 4.169530413E9,
        "sum" : 4.169530413E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.141538992E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.141538992E9,
        "min" : 4.141538992E9,
        "sum" : 4.141538992E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.1807025005E9,
        "variance" : 6.923837551030511E15,
        "n" : 2,
        "max" : 4.239540573E9,
        "min" : 4.121864428E9,
        "sum" : 8.361405001E9,
        "standardDeviation" : 8.320960011339143E7
      }, {
        "mean" : 4.210534953E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.210534953E9,
        "min" : 4.210534953E9,
        "sum" : 4.210534953E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.275616171E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.275616171E9,
        "min" : 4.275616171E9,
        "sum" : 4.275616171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.200005041E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.200005041E9,
        "min" : 4.200005041E9,
        "sum" : 4.200005041E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.0881224985E9,
        "variance" : 3.6529046457983645E15,
        "n" : 2,
        "max" : 4.130859512E9,
        "min" : 4.045385485E9,
        "sum" : 8.176244997E9,
        "standardDeviation" : 6.0439264107022054E7
      }, {
        "mean" : 4.166953943E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.166953943E9,
        "min" : 4.166953943E9,
        "sum" : 4.166953943E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.200702592E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.200702592E9,
        "min" : 4.200702592E9,
        "sum" : 4.200702592E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.190985425E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.190985425E9,
        "min" : 4.190985425E9,
        "sum" : 4.190985425E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.164316332E9,
        "variance" : 3.24532344327752E14,
        "n" : 2,
        "max" : 4.177054706E9,
        "min" : 4.151577958E9,
        "sum" : 8.328632664E9,
        "standardDeviation" : 1.8014781273380812E7
      }, {
        "mean" : 4.175773563E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.175773563E9,
        "min" : 4.175773563E9,
        "sum" : 4.175773563E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.229147292E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.229147292E9,
        "min" : 4.229147292E9,
        "sum" : 4.229147292E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.109876679E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.109876679E9,
        "min" : 4.109876679E9,
        "sum" : 4.109876679E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.1415640585E9,
        "variance" : 1.999438239452405E14,
        "n" : 2,
        "max" : 4.151562654E9,
        "min" : 4.131565463E9,
        "sum" : 8.283128117E9,
        "standardDeviation" : 1.4140149360782597E7
      }, {
        "mean" : 4.100646528E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.100646528E9,
        "min" : 4.100646528E9,
        "sum" : 4.100646528E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.185374114E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.185374114E9,
        "min" : 4.185374114E9,
        "sum" : 4.185374114E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.179511083E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.179511083E9,
        "min" : 4.179511083E9,
        "sum" : 4.179511083E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.1311072945E9,
        "variance" : 1.5138718628528447E14,
        "n" : 2,
        "max" : 4.139807501E9,
        "min" : 4.122407088E9,
        "sum" : 8.262214589E9,
        "standardDeviation" : 1.2303950027746556E7
      }, {
        "mean" : 4.139944127E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.139944127E9,
        "min" : 4.139944127E9,
        "sum" : 4.139944127E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.192785887E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.192785887E9,
        "min" : 4.192785887E9,
        "sum" : 4.192785887E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.033249565E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.033249565E9,
        "min" : 4.033249565E9,
        "sum" : 4.033249565E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.296310788E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.296310788E9,
        "min" : 4.296310788E9,
        "sum" : 4.296310788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2262669015E9,
        "variance" : 6.874909827570313E15,
        "n" : 2,
        "max" : 4.284896714E9,
        "min" : 4.167637089E9,
        "sum" : 8.452533803E9,
        "standardDeviation" : 8.291507599689162E7
      }, {
        "mean" : 4.258142795E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.258142795E9,
        "min" : 4.258142795E9,
        "sum" : 4.258142795E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.292626003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.292626003E9,
        "min" : 4.292626003E9,
        "sum" : 4.292626003E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.1609042185E9,
        "variance" : 3.2281831421006445E15,
        "n" : 2,
        "max" : 4.201079977E9,
        "min" : 4.12072846E9,
        "sum" : 8.321808437E9,
        "standardDeviation" : 5.681710254932615E7
      }, {
        "mean" : 4.143050706E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.143050706E9,
        "min" : 4.143050706E9,
        "sum" : 4.143050706E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.168782389E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.168782389E9,
        "min" : 4.168782389E9,
        "sum" : 4.168782389E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.159625643E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.159625643E9,
        "min" : 4.159625643E9,
        "sum" : 4.159625643E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.1644709755E9,
        "variance" : 1.0480631999708645E15,
        "n" : 2,
        "max" : 4.187362712E9,
        "min" : 4.141579239E9,
        "sum" : 8.328941951E9,
        "standardDeviation" : 3.2373804224571206E7
      }, {
        "mean" : 4.123837716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.123837716E9,
        "min" : 4.123837716E9,
        "sum" : 4.123837716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.206267736E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.206267736E9,
        "min" : 4.206267736E9,
        "sum" : 4.206267736E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.036336843E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.036336843E9,
        "min" : 4.036336843E9,
        "sum" : 4.036336843E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.1626086055E9,
        "variance" : 5.3467537873152044E14,
        "n" : 2,
        "max" : 4.17895907E9,
        "min" : 4.146258141E9,
        "sum" : 8.325217211E9,
        "standardDeviation" : 2.3123048646999825E7
      }, {
        "mean" : 4.173865918E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.173865918E9,
        "min" : 4.173865918E9,
        "sum" : 4.173865918E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.223758512E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.223758512E9,
        "min" : 4.223758512E9,
        "sum" : 4.223758512E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.006901048E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.006901048E9,
        "min" : 4.006901048E9,
        "sum" : 4.006901048E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.1320508155E9,
        "variance" : 6.534895542918484E15,
        "n" : 2,
        "max" : 4.189212409E9,
        "min" : 4.074889222E9,
        "sum" : 8.264101631E9,
        "standardDeviation" : 8.083870077455775E7
      }, {
        "mean" : 4.033814421E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.033814421E9,
        "min" : 4.033814421E9,
        "sum" : 4.033814421E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.217576483E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.217576483E9,
        "min" : 4.217576483E9,
        "sum" : 4.217576483E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.165896626E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.165896626E9,
        "min" : 4.165896626E9,
        "sum" : 4.165896626E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.1125031475E9,
        "variance" : 3.2092494741681125E15,
        "n" : 2,
        "max" : 4.152560915E9,
        "min" : 4.07244538E9,
        "sum" : 8.225006295E9,
        "standardDeviation" : 5.665023807688819E7
      }, {
        "mean" : 4.140799427E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.140799427E9,
        "min" : 4.140799427E9,
        "sum" : 4.140799427E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.17801475E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.17801475E9,
        "min" : 4.17801475E9,
        "sum" : 4.17801475E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.202927769E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.202927769E9,
        "min" : 4.202927769E9,
        "sum" : 4.202927769E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.0489240975E9,
        "variance" : 1.2669918263408784E16,
        "n" : 2,
        "max" : 4.128516554E9,
        "min" : 3.969331641E9,
        "sum" : 8.097848195E9,
        "standardDeviation" : 1.125607314448906E8
      }, {
        "mean" : 4.112636512E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.112636512E9,
        "min" : 4.112636512E9,
        "sum" : 4.112636512E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.121069195E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.121069195E9,
        "min" : 4.121069195E9,
        "sum" : 4.121069195E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.226289567E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.226289567E9,
        "min" : 4.226289567E9,
        "sum" : 4.226289567E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.142620177E9,
        "variance" : 3.225144079453298E15,
        "n" : 2,
        "max" : 4.18277702E9,
        "min" : 4.102463334E9,
        "sum" : 8.285240354E9,
        "standardDeviation" : 5.6790351992687084E7
      }, {
        "mean" : 4.091959415E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.091959415E9,
        "min" : 4.091959415E9,
        "sum" : 4.091959415E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.160924268E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.160924268E9,
        "min" : 4.160924268E9,
        "sum" : 4.160924268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.092780179E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.092780179E9,
        "min" : 4.092780179E9,
        "sum" : 4.092780179E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.1429001095E9,
        "variance" : 1.4491152768530706E16,
        "n" : 2,
        "max" : 4.228021061E9,
        "min" : 4.057779158E9,
        "sum" : 8.285800219E9,
        "standardDeviation" : 1.2037920405340245E8
      }, {
        "mean" : 4.133500737E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133500737E9,
        "min" : 4.133500737E9,
        "sum" : 4.133500737E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.14548647E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.14548647E9,
        "min" : 4.14548647E9,
        "sum" : 4.14548647E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.188198981E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.188198981E9,
        "min" : 4.188198981E9,
        "sum" : 4.188198981E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.0619221345E9,
        "variance" : 1.76512788896415E16,
        "n" : 2,
        "max" : 4.155867009E9,
        "min" : 3.96797726E9,
        "sum" : 8.123844269E9,
        "standardDeviation" : 1.3285811563333833E8
      }, {
        "mean" : 4.128301809E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.128301809E9,
        "min" : 4.128301809E9,
        "sum" : 4.128301809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.166992016E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.166992016E9,
        "min" : 4.166992016E9,
        "sum" : 4.166992016E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.073559681E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.073559681E9,
        "min" : 4.073559681E9,
        "sum" : 4.073559681E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.371886689E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.371886689E9,
        "min" : 4.371886689E9,
        "sum" : 4.371886689E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.26956176E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.26956176E9,
        "min" : 4.26956176E9,
        "sum" : 4.26956176E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3278670265E9,
        "variance" : 4.7421734915444444E14,
        "n" : 2,
        "max" : 4.34326536E9,
        "min" : 4.312468693E9,
        "sum" : 8.655734053E9,
        "standardDeviation" : 2.1776532073643968E7
      }, {
        "mean" : 4.264487795E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.264487795E9,
        "min" : 4.264487795E9,
        "sum" : 4.264487795E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.166345518E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.166345518E9,
        "min" : 4.166345518E9,
        "sum" : 4.166345518E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2022870405E9,
        "variance" : 1.4877814813679205E15,
        "n" : 2,
        "max" : 4.229561401E9,
        "min" : 4.17501268E9,
        "sum" : 8.404574081E9,
        "standardDeviation" : 3.857177052415303E7
      }, {
        "mean" : 4.30432809E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.30432809E9,
        "min" : 4.30432809E9,
        "sum" : 4.30432809E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.209089778E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.209089778E9,
        "min" : 4.209089778E9,
        "sum" : 4.209089778E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.243044002E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.243044002E9,
        "min" : 4.243044002E9,
        "sum" : 4.243044002E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2400811385E9,
        "variance" : 9.821934705870125E14,
        "n" : 2,
        "max" : 4.262241841E9,
        "min" : 4.217920436E9,
        "sum" : 8.480162277E9,
        "standardDeviation" : 3.1339966027215354E7
      }, {
        "mean" : 4.301622687E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.301622687E9,
        "min" : 4.301622687E9,
        "sum" : 4.301622687E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.241724155E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.241724155E9,
        "min" : 4.241724155E9,
        "sum" : 4.241724155E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.338107375E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.338107375E9,
        "min" : 4.338107375E9,
        "sum" : 4.338107375E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.264608821E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.264608821E9,
        "min" : 4.264608821E9,
        "sum" : 4.264608821E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.330713103E9,
        "variance" : 3.2736838303148185E15,
        "n" : 2,
        "max" : 4.371171006E9,
        "min" : 4.2902552E9,
        "sum" : 8.661426206E9,
        "standardDeviation" : 5.721611512777513E7
      }, {
        "mean" : 4.369521059E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.369521059E9,
        "min" : 4.369521059E9,
        "sum" : 4.369521059E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.286969864E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286969864E9,
        "min" : 4.286969864E9,
        "sum" : 4.286969864E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.218273794E9,
        "variance" : 3.4694331714100825E15,
        "n" : 2,
        "max" : 4.259923723E9,
        "min" : 4.176623865E9,
        "sum" : 8.436547588E9,
        "standardDeviation" : 5.890189446367648E7
      }, {
        "mean" : 4.267219064E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.267219064E9,
        "min" : 4.267219064E9,
        "sum" : 4.267219064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.325665136E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.325665136E9,
        "min" : 4.325665136E9,
        "sum" : 4.325665136E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.303786424E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.303786424E9,
        "min" : 4.303786424E9,
        "sum" : 4.303786424E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.227765133E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.227765133E9,
        "min" : 4.227765133E9,
        "sum" : 4.227765133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3294778185E9,
        "variance" : 3.1174462952016784E16,
        "n" : 2,
        "max" : 4.454326653E9,
        "min" : 4.204628984E9,
        "sum" : 8.658955637E9,
        "standardDeviation" : 1.7656291499637398E8
      }, {
        "mean" : 4.296158409E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.296158409E9,
        "min" : 4.296158409E9,
        "sum" : 4.296158409E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.280626922E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.280626922E9,
        "min" : 4.280626922E9,
        "sum" : 4.280626922E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.210086371E9,
        "variance" : 2.2383036351521568E16,
        "n" : 2,
        "max" : 4.315876343E9,
        "min" : 4.104296399E9,
        "sum" : 8.420172742E9,
        "standardDeviation" : 1.4960961316546997E8
      }, {
        "mean" : 4.283597239E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.283597239E9,
        "min" : 4.283597239E9,
        "sum" : 4.283597239E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.320710057E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.320710057E9,
        "min" : 4.320710057E9,
        "sum" : 4.320710057E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.238966163E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.238966163E9,
        "min" : 4.238966163E9,
        "sum" : 4.238966163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1901348065E9,
        "variance" : 6.77208574718302E15,
        "n" : 2,
        "max" : 4.248324521E9,
        "min" : 4.131945092E9,
        "sum" : 8.380269613E9,
        "standardDeviation" : 8.229268343651834E7
      }, {
        "mean" : 4.177272285E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.177272285E9,
        "min" : 4.177272285E9,
        "sum" : 4.177272285E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.363559335E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.363559335E9,
        "min" : 4.363559335E9,
        "sum" : 4.363559335E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.249234423E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.249234423E9,
        "min" : 4.249234423E9,
        "sum" : 4.249234423E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1514069225E9,
        "variance" : 7.722525928201564E15,
        "n" : 2,
        "max" : 4.213545984E9,
        "min" : 4.089267861E9,
        "sum" : 8.302813845E9,
        "standardDeviation" : 8.787790352643584E7
      }, {
        "mean" : 4.218195458E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.218195458E9,
        "min" : 4.218195458E9,
        "sum" : 4.218195458E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.242429747E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.242429747E9,
        "min" : 4.242429747E9,
        "sum" : 4.242429747E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.300984426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.300984426E9,
        "min" : 4.300984426E9,
        "sum" : 4.300984426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.209546503E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.209546503E9,
        "min" : 4.209546503E9,
        "sum" : 4.209546503E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.298182934E9,
        "variance" : 2.4088808018000005E12,
        "n" : 2,
        "max" : 4.299280404E9,
        "min" : 4.297085464E9,
        "sum" : 8.596365868E9,
        "standardDeviation" : 1552056.9582976007
      }, {
        "mean" : 4.217285071E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.217285071E9,
        "min" : 4.217285071E9,
        "sum" : 4.217285071E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.259734527E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.259734527E9,
        "min" : 4.259734527E9,
        "sum" : 4.259734527E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.269421667E9,
        "variance" : 5.371129745948192E15,
        "n" : 2,
        "max" : 4.321244103E9,
        "min" : 4.217599231E9,
        "sum" : 8.538843334E9,
        "standardDeviation" : 7.328799182641172E7
      }, {
        "mean" : 4.27350701E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.27350701E9,
        "min" : 4.27350701E9,
        "sum" : 4.27350701E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.394995027E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.394995027E9,
        "min" : 4.394995027E9,
        "sum" : 4.394995027E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.219394279E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.219394279E9,
        "min" : 4.219394279E9,
        "sum" : 4.219394279E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.220037534E9,
        "variance" : 4.2429231599328806E14,
        "n" : 2,
        "max" : 4.234602772E9,
        "min" : 4.205472296E9,
        "sum" : 8.440075068E9,
        "standardDeviation" : 2.0598357118791975E7
      }, {
        "mean" : 4.286833538E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286833538E9,
        "min" : 4.286833538E9,
        "sum" : 4.286833538E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.208935618E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.208935618E9,
        "min" : 4.208935618E9,
        "sum" : 4.208935618E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.267750969E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.267750969E9,
        "min" : 4.267750969E9,
        "sum" : 4.267750969E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2846774365E9,
        "variance" : 2.4234410799599045E15,
        "n" : 2,
        "max" : 4.319487213E9,
        "min" : 4.24986766E9,
        "sum" : 8.569354873E9,
        "standardDeviation" : 4.922845802947625E7
      }, {
        "mean" : 4.374070464E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.374070464E9,
        "min" : 4.374070464E9,
        "sum" : 4.374070464E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.290778254E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.290778254E9,
        "min" : 4.290778254E9,
        "sum" : 4.290778254E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.275691806E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.275691806E9,
        "min" : 4.275691806E9,
        "sum" : 4.275691806E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2503934055E9,
        "variance" : 1.6750845328080128E15,
        "n" : 2,
        "max" : 4.279333728E9,
        "min" : 4.221453083E9,
        "sum" : 8.500786811E9,
        "standardDeviation" : 4.092779657895124E7
      }, {
        "mean" : 4.307103917E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.307103917E9,
        "min" : 4.307103917E9,
        "sum" : 4.307103917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.283888551E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.283888551E9,
        "min" : 4.283888551E9,
        "sum" : 4.283888551E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.206530163E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.206530163E9,
        "min" : 4.206530163E9,
        "sum" : 4.206530163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2350156965E9,
        "variance" : 3.4133235119480456E14,
        "n" : 2,
        "max" : 4.248079623E9,
        "min" : 4.22195177E9,
        "sum" : 8.470031393E9,
        "standardDeviation" : 1.847518203414528E7
      }, {
        "mean" : 4.259759813E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.259759813E9,
        "min" : 4.259759813E9,
        "sum" : 4.259759813E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.244469338E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.244469338E9,
        "min" : 4.244469338E9,
        "sum" : 4.244469338E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.263894607E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.263894607E9,
        "min" : 4.263894607E9,
        "sum" : 4.263894607E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.209665098E9,
        "variance" : 2.8994846590646485E15,
        "n" : 2,
        "max" : 4.24774058E9,
        "min" : 4.171589616E9,
        "sum" : 8.419330196E9,
        "standardDeviation" : 5.384686303829266E7
      }, {
        "mean" : 4.249007692E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.249007692E9,
        "min" : 4.249007692E9,
        "sum" : 4.249007692E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.162582823E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.162582823E9,
        "min" : 4.162582823E9,
        "sum" : 4.162582823E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.289469934E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.289469934E9,
        "min" : 4.289469934E9,
        "sum" : 4.289469934E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.181324591E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.181324591E9,
        "min" : 4.181324591E9,
        "sum" : 4.181324591E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2860407685E9,
        "variance" : 3.878493218843445E14,
        "n" : 2,
        "max" : 4.299966452E9,
        "min" : 4.272115085E9,
        "sum" : 8.572081537E9,
        "standardDeviation" : 1.969389047101523E7
      }, {
        "mean" : 4.367367952E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.367367952E9,
        "min" : 4.367367952E9,
        "sum" : 4.367367952E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.289236595E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.289236595E9,
        "min" : 4.289236595E9,
        "sum" : 4.289236595E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.269186375E9,
        "variance" : 6.376549536672201E13,
        "n" : 2,
        "max" : 4.274832856E9,
        "min" : 4.263539894E9,
        "sum" : 8.53837275E9,
        "standardDeviation" : 7985330.009881997
      }, {
        "mean" : 4.357537213E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.357537213E9,
        "min" : 4.357537213E9,
        "sum" : 4.357537213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.282532937E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.282532937E9,
        "min" : 4.282532937E9,
        "sum" : 4.282532937E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.343806317E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.343806317E9,
        "min" : 4.343806317E9,
        "sum" : 4.343806317E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.260977001E9,
        "variance" : 1.0980353815699968E16,
        "n" : 2,
        "max" : 4.335072729E9,
        "min" : 4.186881273E9,
        "sum" : 8.521954002E9,
        "standardDeviation" : 1.0478718345150788E8
      }, {
        "mean" : 4.277190327E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.277190327E9,
        "min" : 4.277190327E9,
        "sum" : 4.277190327E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.277446764E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.277446764E9,
        "min" : 4.277446764E9,
        "sum" : 4.277446764E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.317273112E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.317273112E9,
        "min" : 4.317273112E9,
        "sum" : 4.317273112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2656531365E9,
        "variance" : 9.715652086941046E14,
        "n" : 2,
        "max" : 4.287693613E9,
        "min" : 4.24361266E9,
        "sum" : 8.531306273E9,
        "standardDeviation" : 3.1169940787465487E7
      }, {
        "mean" : 4.294887203E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.294887203E9,
        "min" : 4.294887203E9,
        "sum" : 4.294887203E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.236697619E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.236697619E9,
        "min" : 4.236697619E9,
        "sum" : 4.236697619E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.360791165E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.360791165E9,
        "min" : 4.360791165E9,
        "sum" : 4.360791165E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.390986231E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.390986231E9,
        "min" : 4.390986231E9,
        "sum" : 4.390986231E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.328948278E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.328948278E9,
        "min" : 4.328948278E9,
        "sum" : 4.328948278E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4097654155E9,
        "variance" : 2.976898617843804E15,
        "n" : 2,
        "max" : 4.448345842E9,
        "min" : 4.371184989E9,
        "sum" : 8.819530831E9,
        "standardDeviation" : 5.456096239843836E7
      } ],
      "21" : [ {
        "mean" : 4.386901008E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.386901008E9,
        "min" : 4.386901008E9,
        "sum" : 4.386901008E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.224843237E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.224843237E9,
        "min" : 4.224843237E9,
        "sum" : 4.224843237E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.306045638E9,
        "variance" : 1.119940259522688E15,
        "n" : 2,
        "max" : 4.329709326E9,
        "min" : 4.28238195E9,
        "sum" : 8.612091276E9,
        "standardDeviation" : 3.346550850536546E7
      }, {
        "mean" : 4.388034922E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.388034922E9,
        "min" : 4.388034922E9,
        "sum" : 4.388034922E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.273303535E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.273303535E9,
        "min" : 4.273303535E9,
        "sum" : 4.273303535E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.335941585E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.335941585E9,
        "min" : 4.335941585E9,
        "sum" : 4.335941585E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.366335232E9,
        "variance" : 1.3172879513672E13,
        "n" : 2,
        "max" : 4.368901638E9,
        "min" : 4.363768826E9,
        "sum" : 8.732670464E9,
        "standardDeviation" : 3629446.1717556855
      }, {
        "mean" : 4.188662387E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.188662387E9,
        "min" : 4.188662387E9,
        "sum" : 4.188662387E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.257188026E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.257188026E9,
        "min" : 4.257188026E9,
        "sum" : 4.257188026E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.268947632E9,
        "variance" : 3.35316539149805E15,
        "n" : 2,
        "max" : 4.309893727E9,
        "min" : 4.228001537E9,
        "sum" : 8.537895264E9,
        "standardDeviation" : 5.790652287521718E7
      }, {
        "mean" : 4.290066888E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.290066888E9,
        "min" : 4.290066888E9,
        "sum" : 4.290066888E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.305735382E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.305735382E9,
        "min" : 4.305735382E9,
        "sum" : 4.305735382E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.279976546E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.279976546E9,
        "min" : 4.279976546E9,
        "sum" : 4.279976546E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2057021635E9,
        "variance" : 8.830397119377121E15,
        "n" : 2,
        "max" : 4.272149124E9,
        "min" : 4.139255203E9,
        "sum" : 8.411404327E9,
        "standardDeviation" : 9.397019271756934E7
      }, {
        "mean" : 4.286799832E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286799832E9,
        "min" : 4.286799832E9,
        "sum" : 4.286799832E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.323313602E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.323313602E9,
        "min" : 4.323313602E9,
        "sum" : 4.323313602E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.196320352E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.196320352E9,
        "min" : 4.196320352E9,
        "sum" : 4.196320352E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.254716882E9,
        "variance" : 6.090472661991201E13,
        "n" : 2,
        "max" : 4.260235248E9,
        "min" : 4.249198516E9,
        "sum" : 8.509433764E9,
        "standardDeviation" : 7804148.039338567
      }, {
        "mean" : 4.346728503E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.346728503E9,
        "min" : 4.346728503E9,
        "sum" : 4.346728503E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.268760393E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.268760393E9,
        "min" : 4.268760393E9,
        "sum" : 4.268760393E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.193763055E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.193763055E9,
        "min" : 4.193763055E9,
        "sum" : 4.193763055E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.209688008E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.209688008E9,
        "min" : 4.209688008E9,
        "sum" : 4.209688008E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2658274335E9,
        "variance" : 5.822561403762005E14,
        "n" : 2,
        "max" : 4.282889909E9,
        "min" : 4.248764958E9,
        "sum" : 8.531654867E9,
        "standardDeviation" : 2.4129984259758655E7
      }, {
        "mean" : 4.195515337E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.195515337E9,
        "min" : 4.195515337E9,
        "sum" : 4.195515337E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.244918127E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.244918127E9,
        "min" : 4.244918127E9,
        "sum" : 4.244918127E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.310327265E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.310327265E9,
        "min" : 4.310327265E9,
        "sum" : 4.310327265E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.383259147E9,
        "variance" : 3.123498137797682E15,
        "n" : 2,
        "max" : 4.422778118E9,
        "min" : 4.343740176E9,
        "sum" : 8.766518294E9,
        "standardDeviation" : 5.5888264759229034E7
      }, {
        "mean" : 4.326039263E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.326039263E9,
        "min" : 4.326039263E9,
        "sum" : 4.326039263E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.355303091E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.355303091E9,
        "min" : 4.355303091E9,
        "sum" : 4.355303091E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2109592905E9,
        "variance" : 2.9154511442595125E15,
        "n" : 2,
        "max" : 4.249139463E9,
        "min" : 4.172779118E9,
        "sum" : 8.421918581E9,
        "standardDeviation" : 5.399491776324428E7
      }, {
        "mean" : 4.270249426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.270249426E9,
        "min" : 4.270249426E9,
        "sum" : 4.270249426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.171624643E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.171624643E9,
        "min" : 4.171624643E9,
        "sum" : 4.171624643E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.254197995E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.254197995E9,
        "min" : 4.254197995E9,
        "sum" : 4.254197995E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1767919315E9,
        "variance" : 3.843444045005E11,
        "n" : 2,
        "max" : 4.177230306E9,
        "min" : 4.176353557E9,
        "sum" : 8.353583863E9,
        "standardDeviation" : 619955.1632985243
      }, {
        "mean" : 4.286263547E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286263547E9,
        "min" : 4.286263547E9,
        "sum" : 4.286263547E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.301743808E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.301743808E9,
        "min" : 4.301743808E9,
        "sum" : 4.301743808E9,
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
    "parent" : "org.gradoop.model.impl.LogicalGraphCombineTest#testAssignment",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 428.6090101319488,
      "meanCurrent" : 1804.8241379310348,
      "deviationOld" : 238.33353190516823,
      "deviationCurrent" : 159.1565102460298,
      "vms" : 29,
      "callsOld" : 101255,
      "calls" : 150,
      "tvalue" : -25.859773659958616,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 584.5751844672905,
    "inVMDeviation" : 368.04521461821207,
    "ess" : 1,
    "values" : [ 1673.2, 2025.8, 1848.9, 1769.0, 2002.4, 1982.1, 1517.8, 1886.4, 1533.8, 1682.2, 1902.4, 1943.5, 1769.6, 1629.8, 1862.8, 2155.1, 1776.8, 2759.2, 1794.4, 1825.6, 1768.8, 1848.2, 1477.7, 1748.6, 1846.7, 1733.0, 1831.2, 1975.0, 1923.8, 1605.3 ],
    "valuesPredecessor" : [ 344.48360769385897, 340.8556058086742, 424.9597373580775, 366.847717442487, 364.73393249802507, 331.7605855683269, 346.25815304838807, 798.2982473727302, 1915.263010027663, 363.34647980790226, 347.327321716829, 303.20303390932344, 337.87040807541007, 498.69834038418685, 333.83353443404155, 327.306896447468, 597.0960698041401, 410.01431674565566, 356.28061929546277, 353.82843555555553, 376.7362060537695, 333.5615017772511, 336.60179599090816, 355.8182486414744, 334.2286113400577, 335.01992643766084, 313.73048036111504, 1538.283290060096, 370.833749632118, 587.8444405655233 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 2085.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2085.0,
          "min" : 2085.0,
          "sum" : 2085.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1544.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1544.0,
          "min" : 1544.0,
          "sum" : 1544.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1551.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1551.0,
          "min" : 1551.0,
          "sum" : 1551.0,
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
          "mean" : 1661.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1661.0,
          "min" : 1661.0,
          "sum" : 1661.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 1811.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1811.0,
          "min" : 1811.0,
          "sum" : 1811.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2313.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2313.0,
          "min" : 2313.0,
          "sum" : 2313.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2027.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2027.0,
          "min" : 2027.0,
          "sum" : 2027.0,
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
          "mean" : 2353.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2353.0,
          "min" : 2353.0,
          "sum" : 2353.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1955.5,
          "variance" : 1300.5,
          "n" : 1,
          "max" : 1981.0,
          "min" : 1930.0,
          "sum" : 1955.5,
          "standardDeviation" : 36.062445840513924
        }, {
          "mean" : 1538.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1538.0,
          "min" : 1538.0,
          "sum" : 1538.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2074.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2074.0,
          "min" : 2074.0,
          "sum" : 2074.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1705.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1705.0,
          "min" : 1705.0,
          "sum" : 1705.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1972.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1972.0,
          "min" : 1972.0,
          "sum" : 1972.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1792.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1792.0,
          "min" : 1792.0,
          "sum" : 1792.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1503.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1503.0,
          "min" : 1503.0,
          "sum" : 1503.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1843.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1843.0,
          "min" : 1843.0,
          "sum" : 1843.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1858.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1858.0,
          "min" : 1858.0,
          "sum" : 1858.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1849.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1849.0,
          "min" : 1849.0,
          "sum" : 1849.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 1636.0,
          "variance" : 11858.0,
          "n" : 2,
          "max" : 1713.0,
          "min" : 1559.0,
          "sum" : 3272.0,
          "standardDeviation" : 108.89444430272832
        }, {
          "mean" : 2071.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2071.0,
          "min" : 2071.0,
          "sum" : 2071.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1824.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1824.0,
          "min" : 1824.0,
          "sum" : 1824.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2845.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2845.0,
          "min" : 2845.0,
          "sum" : 2845.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 1558.5,
          "variance" : 480.5,
          "n" : 1,
          "max" : 1574.0,
          "min" : 1543.0,
          "sum" : 1558.5,
          "standardDeviation" : 21.920310216782973
        }, {
          "mean" : 1817.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1817.0,
          "min" : 1817.0,
          "sum" : 1817.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1875.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1875.0,
          "min" : 1875.0,
          "sum" : 1875.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 3120.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 3120.0,
          "min" : 3120.0,
          "sum" : 3120.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1540.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1540.0,
          "min" : 1540.0,
          "sum" : 1540.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 1302.0,
          "variance" : 7442.0,
          "n" : 1,
          "max" : 1363.0,
          "min" : 1241.0,
          "sum" : 1302.0,
          "standardDeviation" : 86.2670273047588
        }, {
          "mean" : 1562.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1562.0,
          "min" : 1562.0,
          "sum" : 1562.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1548.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1548.0,
          "min" : 1548.0,
          "sum" : 1548.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1351.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1351.0,
          "min" : 1351.0,
          "sum" : 1351.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1826.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1826.0,
          "min" : 1826.0,
          "sum" : 1826.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 2513.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2513.0,
          "min" : 2513.0,
          "sum" : 2513.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1562.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1562.0,
          "min" : 1562.0,
          "sum" : 1562.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2003.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2003.0,
          "min" : 2003.0,
          "sum" : 2003.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2006.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2006.0,
          "min" : 2006.0,
          "sum" : 2006.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1348.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1348.0,
          "min" : 1348.0,
          "sum" : 1348.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1623.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1623.0,
          "min" : 1623.0,
          "sum" : 1623.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1472.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1472.0,
          "min" : 1472.0,
          "sum" : 1472.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1444.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1444.0,
          "min" : 1444.0,
          "sum" : 1444.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1557.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1557.0,
          "min" : 1557.0,
          "sum" : 1557.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1573.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1573.0,
          "min" : 1573.0,
          "sum" : 1573.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 1992.0,
          "variance" : 500000.00000000006,
          "n" : 1,
          "max" : 2492.0,
          "min" : 1492.0,
          "sum" : 1992.0,
          "standardDeviation" : 707.1067811865476
        }, {
          "mean" : 1867.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1867.0,
          "min" : 1867.0,
          "sum" : 1867.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1427.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1427.0,
          "min" : 1427.0,
          "sum" : 1427.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1675.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1675.0,
          "min" : 1675.0,
          "sum" : 1675.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1450.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1450.0,
          "min" : 1450.0,
          "sum" : 1450.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1613.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1613.0,
          "min" : 1613.0,
          "sum" : 1613.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1645.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1645.0,
          "min" : 1645.0,
          "sum" : 1645.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2362.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2362.0,
          "min" : 2362.0,
          "sum" : 2362.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1820.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1820.0,
          "min" : 1820.0,
          "sum" : 1820.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2072.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2072.0,
          "min" : 2072.0,
          "sum" : 2072.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1529.5,
          "variance" : 15312.500000000002,
          "n" : 1,
          "max" : 1617.0,
          "min" : 1442.0,
          "sum" : 1529.5,
          "standardDeviation" : 123.74368670764582
        }, {
          "mean" : 1630.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1630.0,
          "min" : 1630.0,
          "sum" : 1630.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1581.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1581.0,
          "min" : 1581.0,
          "sum" : 1581.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2509.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2509.0,
          "min" : 2509.0,
          "sum" : 2509.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2468.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2468.0,
          "min" : 2468.0,
          "sum" : 2468.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1938.0,
          "variance" : 125000.00000000001,
          "n" : 1,
          "max" : 2188.0,
          "min" : 1688.0,
          "sum" : 1938.0,
          "standardDeviation" : 353.5533905932738
        }, {
          "mean" : 1579.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1579.0,
          "min" : 1579.0,
          "sum" : 1579.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1811.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1811.0,
          "min" : 1811.0,
          "sum" : 1811.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1730.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1730.0,
          "min" : 1730.0,
          "sum" : 1730.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1790.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1790.0,
          "min" : 1790.0,
          "sum" : 1790.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 1805.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1805.0,
          "min" : 1805.0,
          "sum" : 1805.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1330.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1330.0,
          "min" : 1330.0,
          "sum" : 1330.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1424.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1424.0,
          "min" : 1424.0,
          "sum" : 1424.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1854.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1854.0,
          "min" : 1854.0,
          "sum" : 1854.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1736.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1736.0,
          "min" : 1736.0,
          "sum" : 1736.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1717.0,
          "variance" : 2888.0,
          "n" : 1,
          "max" : 1755.0,
          "min" : 1679.0,
          "sum" : 1717.0,
          "standardDeviation" : 53.74011537017761
        }, {
          "mean" : 1782.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1782.0,
          "min" : 1782.0,
          "sum" : 1782.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1743.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1743.0,
          "min" : 1743.0,
          "sum" : 1743.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2416.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2416.0,
          "min" : 2416.0,
          "sum" : 2416.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1656.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1656.0,
          "min" : 1656.0,
          "sum" : 1656.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 1827.5,
          "variance" : 320800.50000000006,
          "n" : 1,
          "max" : 2228.0,
          "min" : 1427.0,
          "sum" : 1827.5,
          "standardDeviation" : 566.3925317304246
        }, {
          "mean" : 2481.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2481.0,
          "min" : 2481.0,
          "sum" : 2481.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2208.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2208.0,
          "min" : 2208.0,
          "sum" : 2208.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2386.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2386.0,
          "min" : 2386.0,
          "sum" : 2386.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1873.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1873.0,
          "min" : 1873.0,
          "sum" : 1873.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1586.0,
          "variance" : 90738.0,
          "n" : 1,
          "max" : 1799.0,
          "min" : 1373.0,
          "sum" : 1586.0,
          "standardDeviation" : 301.22748878546923
        }, {
          "mean" : 1204.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1204.0,
          "min" : 1204.0,
          "sum" : 1204.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2476.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2476.0,
          "min" : 2476.0,
          "sum" : 2476.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1746.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1746.0,
          "min" : 1746.0,
          "sum" : 1746.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1872.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1872.0,
          "min" : 1872.0,
          "sum" : 1872.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 6874.0,
          "variance" : 4.936204800000001E7,
          "n" : 1,
          "max" : 11842.0,
          "min" : 1906.0,
          "sum" : 6874.0,
          "standardDeviation" : 7025.812977869537
        }, {
          "mean" : 1895.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1895.0,
          "min" : 1895.0,
          "sum" : 1895.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1385.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1385.0,
          "min" : 1385.0,
          "sum" : 1385.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1885.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1885.0,
          "min" : 1885.0,
          "sum" : 1885.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1757.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1757.0,
          "min" : 1757.0,
          "sum" : 1757.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 2037.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2037.0,
          "min" : 2037.0,
          "sum" : 2037.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1575.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1575.0,
          "min" : 1575.0,
          "sum" : 1575.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1690.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1690.0,
          "min" : 1690.0,
          "sum" : 1690.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2115.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2115.0,
          "min" : 2115.0,
          "sum" : 2115.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1555.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1555.0,
          "min" : 1555.0,
          "sum" : 1555.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 1442.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1442.0,
          "min" : 1442.0,
          "sum" : 1442.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2656.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2656.0,
          "min" : 2656.0,
          "sum" : 2656.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1504.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1504.0,
          "min" : 1504.0,
          "sum" : 1504.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1788.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1788.0,
          "min" : 1788.0,
          "sum" : 1788.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1738.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1738.0,
          "min" : 1738.0,
          "sum" : 1738.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1701.0,
          "variance" : 2311.9999999999995,
          "n" : 1,
          "max" : 1735.0,
          "min" : 1667.0,
          "sum" : 1701.0,
          "standardDeviation" : 48.08326112068523
        }, {
          "mean" : 1760.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1760.0,
          "min" : 1760.0,
          "sum" : 1760.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1598.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1598.0,
          "min" : 1598.0,
          "sum" : 1598.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1648.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1648.0,
          "min" : 1648.0,
          "sum" : 1648.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2137.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2137.0,
          "min" : 2137.0,
          "sum" : 2137.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1959.0,
          "variance" : 270848.0,
          "n" : 1,
          "max" : 2327.0,
          "min" : 1591.0,
          "sum" : 1959.0,
          "standardDeviation" : 520.430590953299
        }, {
          "mean" : 2000.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2000.0,
          "min" : 2000.0,
          "sum" : 2000.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1595.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1595.0,
          "min" : 1595.0,
          "sum" : 1595.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1788.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1788.0,
          "min" : 1788.0,
          "sum" : 1788.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1899.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1899.0,
          "min" : 1899.0,
          "sum" : 1899.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 1416.5,
          "variance" : 93744.50000000001,
          "n" : 1,
          "max" : 1633.0,
          "min" : 1200.0,
          "sum" : 1416.5,
          "standardDeviation" : 306.1772362537751
        }, {
          "mean" : 1475.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1475.0,
          "min" : 1475.0,
          "sum" : 1475.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1484.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1484.0,
          "min" : 1484.0,
          "sum" : 1484.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1455.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1455.0,
          "min" : 1455.0,
          "sum" : 1455.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1558.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1558.0,
          "min" : 1558.0,
          "sum" : 1558.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 2350.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2350.0,
          "min" : 2350.0,
          "sum" : 2350.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1633.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1633.0,
          "min" : 1633.0,
          "sum" : 1633.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1320.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1320.0,
          "min" : 1320.0,
          "sum" : 1320.0,
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
          "mean" : 1575.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1575.0,
          "min" : 1575.0,
          "sum" : 1575.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1597.5,
          "variance" : 26680.500000000004,
          "n" : 1,
          "max" : 1713.0,
          "min" : 1482.0,
          "sum" : 1597.5,
          "standardDeviation" : 163.3416664540925
        }, {
          "mean" : 2138.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2138.0,
          "min" : 2138.0,
          "sum" : 2138.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1499.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1499.0,
          "min" : 1499.0,
          "sum" : 1499.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2249.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2249.0,
          "min" : 2249.0,
          "sum" : 2249.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1750.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1750.0,
          "min" : 1750.0,
          "sum" : 1750.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 1878.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1878.0,
          "min" : 1878.0,
          "sum" : 1878.0,
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
          "mean" : 2224.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2224.0,
          "min" : 2224.0,
          "sum" : 2224.0,
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
          "mean" : 1619.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1619.0,
          "min" : 1619.0,
          "sum" : 1619.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1578.0,
          "variance" : 109512.0,
          "n" : 1,
          "max" : 1812.0,
          "min" : 1344.0,
          "sum" : 1578.0,
          "standardDeviation" : 330.92597359530424
        }, {
          "mean" : 1976.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1976.0,
          "min" : 1976.0,
          "sum" : 1976.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1669.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1669.0,
          "min" : 1669.0,
          "sum" : 1669.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2087.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2087.0,
          "min" : 2087.0,
          "sum" : 2087.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1846.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1846.0,
          "min" : 1846.0,
          "sum" : 1846.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1749.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1749.0,
          "min" : 1749.0,
          "sum" : 1749.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 3031.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 3031.0,
          "min" : 3031.0,
          "sum" : 3031.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1507.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1507.0,
          "min" : 1507.0,
          "sum" : 1507.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1821.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1821.0,
          "min" : 1821.0,
          "sum" : 1821.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1767.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1767.0,
          "min" : 1767.0,
          "sum" : 1767.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1773.0,
          "variance" : 1568.0,
          "n" : 1,
          "max" : 1801.0,
          "min" : 1745.0,
          "sum" : 1773.0,
          "standardDeviation" : 39.59797974644666
        }, {
          "mean" : 1992.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1992.0,
          "min" : 1992.0,
          "sum" : 1992.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2122.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2122.0,
          "min" : 2122.0,
          "sum" : 2122.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1696.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1696.0,
          "min" : 1696.0,
          "sum" : 1696.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2036.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2036.0,
          "min" : 2036.0,
          "sum" : 2036.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1832.5,
          "variance" : 44104.49999999999,
          "n" : 1,
          "max" : 1981.0,
          "min" : 1684.0,
          "sum" : 1832.5,
          "standardDeviation" : 210.0107140124046
        }, {
          "mean" : 1469.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1469.0,
          "min" : 1469.0,
          "sum" : 1469.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1617.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1617.0,
          "min" : 1617.0,
          "sum" : 1617.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1704.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1704.0,
          "min" : 1704.0,
          "sum" : 1704.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1404.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1404.0,
          "min" : 1404.0,
          "sum" : 1404.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 931.068085106383,
          "variance" : 1876683.3343737237,
          "n" : 465,
          "max" : 21841.0,
          "min" : 47.0,
          "sum" : 432946.6595744681,
          "standardDeviation" : 1369.9209226717153
        }, {
          "mean" : 489.17063492063465,
          "variance" : 5735103.088122064,
          "n" : 504,
          "max" : 39986.0,
          "min" : 26.0,
          "sum" : 246541.99999999985,
          "standardDeviation" : 2394.807526320657
        }, {
          "mean" : 228.75590551181102,
          "variance" : 35381.40605055947,
          "n" : 381,
          "max" : 1174.0,
          "min" : 28.0,
          "sum" : 87156.0,
          "standardDeviation" : 188.09945786886115
        }, {
          "mean" : 219.21529745042477,
          "variance" : 28943.288742595934,
          "n" : 353,
          "max" : 856.0,
          "min" : 20.0,
          "sum" : 77382.99999999994,
          "standardDeviation" : 170.12727218936985
        }, {
          "mean" : 196.61883408071745,
          "variance" : 26179.539779311766,
          "n" : 446,
          "max" : 1022.0,
          "min" : 20.0,
          "sum" : 87691.99999999999,
          "standardDeviation" : 161.80092638582687
        }, {
          "mean" : 208.8271276595745,
          "variance" : 27767.43403546099,
          "n" : 376,
          "max" : 946.0,
          "min" : 23.0,
          "sum" : 78519.00000000001,
          "standardDeviation" : 166.63563255036718
        }, {
          "mean" : 194.04432132963993,
          "variance" : 28867.909141274213,
          "n" : 361,
          "max" : 952.0,
          "min" : 18.0,
          "sum" : 70050.00000000001,
          "standardDeviation" : 169.90558890535124
        }, {
          "mean" : 159.498861047836,
          "variance" : 238981.15011285502,
          "n" : 439,
          "max" : 10114.0,
          "min" : 18.0,
          "sum" : 70020.0,
          "standardDeviation" : 488.85698329148886
        }, {
          "mean" : 248.39215686274517,
          "variance" : 12438.963137254901,
          "n" : 51,
          "max" : 512.0,
          "min" : 66.0,
          "sum" : 12668.000000000004,
          "standardDeviation" : 111.53009969176438
        } ],
        "1" : [ {
          "mean" : 951.894957983194,
          "variance" : 1457157.7994692617,
          "n" : 471,
          "max" : 16453.0,
          "min" : 104.0,
          "sum" : 448342.5252100844,
          "standardDeviation" : 1207.1279134662
        }, {
          "mean" : 338.85658914728657,
          "variance" : 2859781.478422523,
          "n" : 516,
          "max" : 38320.0,
          "min" : 39.0,
          "sum" : 174849.99999999988,
          "standardDeviation" : 1691.0888440358547
        }, {
          "mean" : 240.22131147540955,
          "variance" : 40244.14540759039,
          "n" : 366,
          "max" : 1162.0,
          "min" : 40.0,
          "sum" : 87920.9999999999,
          "standardDeviation" : 200.60943499145395
        }, {
          "mean" : 235.74870466321246,
          "variance" : 38006.334089226846,
          "n" : 386,
          "max" : 880.0,
          "min" : 20.0,
          "sum" : 90999.00000000001,
          "standardDeviation" : 194.9521328152807
        }, {
          "mean" : 234.65127020785224,
          "variance" : 37919.45912454025,
          "n" : 433,
          "max" : 1068.0,
          "min" : 36.0,
          "sum" : 101604.00000000001,
          "standardDeviation" : 194.72919433033212
        }, {
          "mean" : 252.8176943699732,
          "variance" : 38344.00430972353,
          "n" : 373,
          "max" : 1047.0,
          "min" : 25.0,
          "sum" : 94301.0,
          "standardDeviation" : 195.81625139329864
        }, {
          "mean" : 199.5454545454546,
          "variance" : 29154.472537878795,
          "n" : 385,
          "max" : 1181.0,
          "min" : 31.0,
          "sum" : 76825.00000000001,
          "standardDeviation" : 170.74680828021002
        }, {
          "mean" : 167.19859813084133,
          "variance" : 21220.01433058286,
          "n" : 428,
          "max" : 1036.0,
          "min" : 19.0,
          "sum" : 71561.00000000009,
          "standardDeviation" : 145.6709110652599
        }, {
          "mean" : 240.27777777777777,
          "variance" : 21649.153594771244,
          "n" : 18,
          "max" : 588.0,
          "min" : 59.0,
          "sum" : 4325.0,
          "standardDeviation" : 147.13651346545916
        } ],
        "2" : [ {
          "mean" : 1567.1692307692301,
          "variance" : 1.4612413092063716E8,
          "n" : 450,
          "max" : 257227.0,
          "min" : 64.0,
          "sum" : 705226.1538461535,
          "standardDeviation" : 12088.181456308354
        }, {
          "mean" : 345.51679104477597,
          "variance" : 2281529.274483891,
          "n" : 536,
          "max" : 34601.0,
          "min" : 38.0,
          "sum" : 185196.9999999999,
          "standardDeviation" : 1510.4731955529337
        }, {
          "mean" : 247.7506775067751,
          "variance" : 267316.27462589846,
          "n" : 369,
          "max" : 9658.0,
          "min" : 19.0,
          "sum" : 91420.00000000001,
          "standardDeviation" : 517.026377108459
        }, {
          "mean" : 240.19363395225466,
          "variance" : 296227.29485298274,
          "n" : 377,
          "max" : 10297.0,
          "min" : 27.0,
          "sum" : 90553.0,
          "standardDeviation" : 544.2676683884343
        }, {
          "mean" : 214.85454545454553,
          "variance" : 26859.195195692653,
          "n" : 440,
          "max" : 891.0,
          "min" : 20.0,
          "sum" : 94536.00000000003,
          "standardDeviation" : 163.88775181718935
        }, {
          "mean" : 224.15846994535545,
          "variance" : 31144.369339022414,
          "n" : 366,
          "max" : 1004.0,
          "min" : 28.0,
          "sum" : 82042.00000000009,
          "standardDeviation" : 176.47767376929698
        }, {
          "mean" : 255.62857142857143,
          "variance" : 406023.5465773811,
          "n" : 385,
          "max" : 9531.0,
          "min" : 0.0,
          "sum" : 98417.0,
          "standardDeviation" : 637.199769756221
        }, {
          "mean" : 189.23349056603774,
          "variance" : 26146.803509300127,
          "n" : 424,
          "max" : 1042.0,
          "min" : 17.0,
          "sum" : 80235.0,
          "standardDeviation" : 161.69973255791157
        }, {
          "mean" : 229.18518518518522,
          "variance" : 25182.618233618232,
          "n" : 27,
          "max" : 761.0,
          "min" : 42.0,
          "sum" : 6188.000000000001,
          "standardDeviation" : 158.69032180198712
        } ],
        "3" : [ {
          "mean" : 1233.6516393442623,
          "variance" : 9362649.693590738,
          "n" : 483,
          "max" : 45677.0,
          "min" : 111.0,
          "sum" : 595853.7418032787,
          "standardDeviation" : 3059.8447172349674
        }, {
          "mean" : 264.91111111111115,
          "variance" : 41935.38074673865,
          "n" : 495,
          "max" : 1161.0,
          "min" : 42.0,
          "sum" : 131131.00000000003,
          "standardDeviation" : 204.78129979746356
        }, {
          "mean" : 247.83333333333331,
          "variance" : 35205.96392694066,
          "n" : 366,
          "max" : 895.0,
          "min" : 21.0,
          "sum" : 90707.0,
          "standardDeviation" : 187.63252363846908
        }, {
          "mean" : 251.96666666666678,
          "variance" : 277679.7816155989,
          "n" : 360,
          "max" : 9594.0,
          "min" : 21.0,
          "sum" : 90708.00000000004,
          "standardDeviation" : 526.9533011715544
        }, {
          "mean" : 205.32027649769577,
          "variance" : 28038.753998999542,
          "n" : 434,
          "max" : 901.0,
          "min" : 39.0,
          "sum" : 89108.99999999997,
          "standardDeviation" : 167.44776498657586
        }, {
          "mean" : 246.80104712041881,
          "variance" : 39622.8789490319,
          "n" : 382,
          "max" : 1188.0,
          "min" : 40.0,
          "sum" : 94277.99999999999,
          "standardDeviation" : 199.05496464301487
        }, {
          "mean" : 199.0519125683061,
          "variance" : 24640.147982633433,
          "n" : 366,
          "max" : 1027.0,
          "min" : 21.0,
          "sum" : 72853.00000000003,
          "standardDeviation" : 156.97180633041538
        }, {
          "mean" : 153.49066666666658,
          "variance" : 25441.202452762926,
          "n" : 375,
          "max" : 1832.0,
          "min" : 29.0,
          "sum" : 57558.99999999997,
          "standardDeviation" : 159.50298571739316
        }, {
          "mean" : 143.50000000000006,
          "variance" : 14834.982608695653,
          "n" : 116,
          "max" : 864.0,
          "min" : 35.0,
          "sum" : 16646.000000000007,
          "standardDeviation" : 121.79894338086703
        } ],
        "4" : [ {
          "mean" : 1091.9423503325932,
          "variance" : 2387757.463335799,
          "n" : 446,
          "max" : 19297.0,
          "min" : 66.0,
          "sum" : 487006.2882483365,
          "standardDeviation" : 1545.2370249692437
        }, {
          "mean" : 393.814814814815,
          "variance" : 2011022.5036762166,
          "n" : 540,
          "max" : 23588.0,
          "min" : 43.0,
          "sum" : 212660.00000000012,
          "standardDeviation" : 1418.1052512688248
        }, {
          "mean" : 230.05149051490514,
          "variance" : 33062.40766760926,
          "n" : 369,
          "max" : 1155.0,
          "min" : 38.0,
          "sum" : 84889.0,
          "standardDeviation" : 181.83071156328145
        }, {
          "mean" : 307.59791122715404,
          "variance" : 2558562.110152694,
          "n" : 383,
          "max" : 31312.0,
          "min" : 29.0,
          "sum" : 117810.0,
          "standardDeviation" : 1599.5505963090677
        }, {
          "mean" : 202.9400921658985,
          "variance" : 26869.940975511126,
          "n" : 434,
          "max" : 876.0,
          "min" : 28.0,
          "sum" : 88075.99999999996,
          "standardDeviation" : 163.9205325013042
        }, {
          "mean" : 215.74386920980936,
          "variance" : 29962.732031982854,
          "n" : 367,
          "max" : 903.0,
          "min" : 41.0,
          "sum" : 79178.00000000003,
          "standardDeviation" : 173.09746396750836
        }, {
          "mean" : 202.89350649350638,
          "variance" : 27683.94435876625,
          "n" : 385,
          "max" : 1148.0,
          "min" : 30.0,
          "sum" : 78113.99999999996,
          "standardDeviation" : 166.38492828007665
        }, {
          "mean" : 180.71296296296313,
          "variance" : 26676.52066683853,
          "n" : 432,
          "max" : 982.0,
          "min" : 17.0,
          "sum" : 78068.00000000007,
          "standardDeviation" : 163.32948498920373
        }, {
          "mean" : 267.2777777777778,
          "variance" : 34790.44771241832,
          "n" : 18,
          "max" : 796.0,
          "min" : 37.0,
          "sum" : 4811.000000000001,
          "standardDeviation" : 186.52197648646745
        } ],
        "5" : [ {
          "mean" : 948.2047413793106,
          "variance" : 2217850.711770128,
          "n" : 459,
          "max" : 21947.0,
          "min" : 86.0,
          "sum" : 435225.97629310354,
          "standardDeviation" : 1489.245014015534
        }, {
          "mean" : 440.64173228346397,
          "variance" : 8425952.956203697,
          "n" : 508,
          "max" : 59051.0,
          "min" : 34.0,
          "sum" : 223845.9999999997,
          "standardDeviation" : 2902.7492065632705
        }, {
          "mean" : 212.65405405405403,
          "variance" : 205501.1537098074,
          "n" : 370,
          "max" : 8559.0,
          "min" : 27.0,
          "sum" : 78681.99999999999,
          "standardDeviation" : 453.32235077239176
        }, {
          "mean" : 193.54120879120862,
          "variance" : 82794.90463324556,
          "n" : 364,
          "max" : 5147.0,
          "min" : 26.0,
          "sum" : 70448.99999999994,
          "standardDeviation" : 287.74103745077025
        }, {
          "mean" : 200.84137931034488,
          "variance" : 249048.83883680284,
          "n" : 435,
          "max" : 10215.0,
          "min" : 39.0,
          "sum" : 87366.00000000001,
          "standardDeviation" : 499.04793240409566
        }, {
          "mean" : 196.44155844155836,
          "variance" : 17607.992018398265,
          "n" : 385,
          "max" : 870.0,
          "min" : 29.0,
          "sum" : 75629.99999999997,
          "standardDeviation" : 132.6951092482246
        }, {
          "mean" : 175.6253443526172,
          "variance" : 13623.466980198773,
          "n" : 363,
          "max" : 611.0,
          "min" : 25.0,
          "sum" : 63752.000000000044,
          "standardDeviation" : 116.71960837922124
        }, {
          "mean" : 176.43967828418224,
          "variance" : 15693.134120326331,
          "n" : 373,
          "max" : 872.0,
          "min" : 19.0,
          "sum" : 65811.99999999997,
          "standardDeviation" : 125.2722400227853
        }, {
          "mean" : 160.41525423728808,
          "variance" : 13256.620961900622,
          "n" : 118,
          "max" : 856.0,
          "min" : 27.0,
          "sum" : 18928.999999999993,
          "standardDeviation" : 115.13740036104959
        } ],
        "6" : [ {
          "mean" : 976.8950617283955,
          "variance" : 2951424.7745322655,
          "n" : 481,
          "max" : 28154.0,
          "min" : 88.0,
          "sum" : 469886.5246913582,
          "standardDeviation" : 1717.9711215652799
        }, {
          "mean" : 361.35375494071116,
          "variance" : 1377712.5577779498,
          "n" : 506,
          "max" : 21389.0,
          "min" : 40.0,
          "sum" : 182844.99999999985,
          "standardDeviation" : 1173.7600085954325
        }, {
          "mean" : 221.07923497267777,
          "variance" : 27761.738910098098,
          "n" : 366,
          "max" : 1079.0,
          "min" : 21.0,
          "sum" : 80915.00000000006,
          "standardDeviation" : 166.61854311599924
        }, {
          "mean" : 219.2335958005248,
          "variance" : 28250.953184141472,
          "n" : 381,
          "max" : 866.0,
          "min" : 28.0,
          "sum" : 83527.99999999994,
          "standardDeviation" : 168.08019866760472
        }, {
          "mean" : 229.56164383561642,
          "variance" : 231960.4618663993,
          "n" : 438,
          "max" : 9767.0,
          "min" : 21.0,
          "sum" : 100548.0,
          "standardDeviation" : 481.62273811189533
        }, {
          "mean" : 280.1689373297002,
          "variance" : 575036.0096335676,
          "n" : 367,
          "max" : 10220.0,
          "min" : 20.0,
          "sum" : 102821.99999999999,
          "standardDeviation" : 758.3112880826499
        }, {
          "mean" : 193.02077922077916,
          "variance" : 28852.978733766195,
          "n" : 385,
          "max" : 1097.0,
          "min" : 29.0,
          "sum" : 74312.99999999997,
          "standardDeviation" : 169.86164585852273
        }, {
          "mean" : 156.74882629107978,
          "variance" : 19073.816763325045,
          "n" : 426,
          "max" : 898.0,
          "min" : 20.0,
          "sum" : 66774.99999999999,
          "standardDeviation" : 138.10798949852628
        }, {
          "mean" : 282.1153846153845,
          "variance" : 31276.346153846152,
          "n" : 26,
          "max" : 930.0,
          "min" : 57.0,
          "sum" : 7334.999999999998,
          "standardDeviation" : 176.85119777328666
        } ],
        "7" : [ {
          "mean" : 1238.061971830985,
          "variance" : 7687644.719312492,
          "n" : 350,
          "max" : 47621.0,
          "min" : 136.0,
          "sum" : 433321.69014084473,
          "standardDeviation" : 2772.6602242814556
        }, {
          "mean" : 548.4019933554813,
          "variance" : 2701001.691709833,
          "n" : 602,
          "max" : 39168.0,
          "min" : 61.0,
          "sum" : 330137.99999999977,
          "standardDeviation" : 1643.4724493309382
        }, {
          "mean" : 4043.349614395892,
          "variance" : 5.211580706279519E9,
          "n" : 389,
          "max" : 1423383.0,
          "min" : 38.0,
          "sum" : 1572863.0000000019,
          "standardDeviation" : 72191.27860260905
        }, {
          "mean" : 199.9252077562328,
          "variance" : 25561.34161280392,
          "n" : 361,
          "max" : 833.0,
          "min" : 21.0,
          "sum" : 72173.00000000004,
          "standardDeviation" : 159.87914689791137
        }, {
          "mean" : 193.95454545454544,
          "variance" : 25586.694241766883,
          "n" : 462,
          "max" : 979.0,
          "min" : 28.0,
          "sum" : 89607.0,
          "standardDeviation" : 159.9584141011872
        }, {
          "mean" : 201.4193548387098,
          "variance" : 22244.49213111903,
          "n" : 372,
          "max" : 812.0,
          "min" : 20.0,
          "sum" : 74928.00000000004,
          "standardDeviation" : 149.14587534061755
        }, {
          "mean" : 164.7356020942408,
          "variance" : 15727.696314465922,
          "n" : 382,
          "max" : 698.0,
          "min" : 18.0,
          "sum" : 62928.99999999998,
          "standardDeviation" : 125.41011248884965
        }, {
          "mean" : 119.27857142857142,
          "variance" : 8864.330327309925,
          "n" : 420,
          "max" : 632.0,
          "min" : 26.0,
          "sum" : 50097.0,
          "standardDeviation" : 94.15057263399902
        }, {
          "mean" : 170.73529411764707,
          "variance" : 17809.958110516935,
          "n" : 34,
          "max" : 778.0,
          "min" : 49.0,
          "sum" : 5805.0,
          "standardDeviation" : 133.4539550201377
        } ],
        "8" : [ {
          "mean" : 12193.520833333336,
          "variance" : 6.024923812053399E10,
          "n" : 475,
          "max" : 5378595.0,
          "min" : 102.0,
          "sum" : 5791922.395833335,
          "standardDeviation" : 245457.202217686
        }, {
          "mean" : 390.64185110663993,
          "variance" : 1867167.6214707626,
          "n" : 497,
          "max" : 22890.0,
          "min" : 39.0,
          "sum" : 194149.00000000006,
          "standardDeviation" : 1366.4434205157427
        }, {
          "mean" : 217.25130890052347,
          "variance" : 22598.31988017203,
          "n" : 382,
          "max" : 827.0,
          "min" : 39.0,
          "sum" : 82989.99999999997,
          "standardDeviation" : 150.3273756844442
        }, {
          "mean" : 203.72823218997377,
          "variance" : 18199.039703480343,
          "n" : 379,
          "max" : 739.0,
          "min" : 38.0,
          "sum" : 77213.00000000006,
          "standardDeviation" : 134.90381648967661
        }, {
          "mean" : 219.16438356164394,
          "variance" : 241276.49923199916,
          "n" : 438,
          "max" : 9997.0,
          "min" : 23.0,
          "sum" : 95994.00000000004,
          "standardDeviation" : 491.1990423769158
        }, {
          "mean" : 199.74594594594586,
          "variance" : 25050.536907639373,
          "n" : 370,
          "max" : 1102.0,
          "min" : 26.0,
          "sum" : 73905.99999999997,
          "standardDeviation" : 158.2736140600807
        }, {
          "mean" : 202.1086419753086,
          "variance" : 661224.0475736462,
          "n" : 405,
          "max" : 16296.0,
          "min" : 21.0,
          "sum" : 81853.99999999997,
          "standardDeviation" : 813.1568406978116
        }, {
          "mean" : 147.20731707317046,
          "variance" : 15621.23075317552,
          "n" : 410,
          "max" : 740.0,
          "min" : 14.0,
          "sum" : 60354.99999999989,
          "standardDeviation" : 124.9849221033302
        }, {
          "mean" : 206.33333333333334,
          "variance" : 15430.470588235294,
          "n" : 18,
          "max" : 451.0,
          "min" : 43.0,
          "sum" : 3714.0,
          "standardDeviation" : 124.21944529032197
        } ],
        "9" : [ {
          "mean" : 1156.326129666012,
          "variance" : 5879951.739886762,
          "n" : 504,
          "max" : 43582.0,
          "min" : 82.0,
          "sum" : 582788.3693516701,
          "standardDeviation" : 2424.861179508378
        }, {
          "mean" : 272.41014799154345,
          "variance" : 41272.5432866305,
          "n" : 473,
          "max" : 1086.0,
          "min" : 46.0,
          "sum" : 128850.00000000006,
          "standardDeviation" : 203.15645027079623
        }, {
          "mean" : 239.8283378746592,
          "variance" : 32041.874823186077,
          "n" : 367,
          "max" : 1015.0,
          "min" : 28.0,
          "sum" : 88016.99999999993,
          "standardDeviation" : 179.00244362350497
        }, {
          "mean" : 261.4707520891365,
          "variance" : 41384.56268965622,
          "n" : 359,
          "max" : 1026.0,
          "min" : 41.0,
          "sum" : 93868.00000000001,
          "standardDeviation" : 203.43196083618773
        }, {
          "mean" : 218.68666666666664,
          "variance" : 31321.400489977743,
          "n" : 450,
          "max" : 1290.0,
          "min" : 39.0,
          "sum" : 98408.99999999999,
          "standardDeviation" : 176.97853115555498
        }, {
          "mean" : 253.77747989276142,
          "variance" : 287859.3992764276,
          "n" : 373,
          "max" : 10036.0,
          "min" : 33.0,
          "sum" : 94659.00000000001,
          "standardDeviation" : 536.5253016181321
        }, {
          "mean" : 181.35457063711914,
          "variance" : 26097.562819329018,
          "n" : 361,
          "max" : 931.0,
          "min" : 18.0,
          "sum" : 65469.00000000001,
          "standardDeviation" : 161.547401153126
        }, {
          "mean" : 144.74222222222227,
          "variance" : 18069.40779015096,
          "n" : 450,
          "max" : 888.0,
          "min" : 17.0,
          "sum" : 65134.00000000002,
          "standardDeviation" : 134.42249733638695
        }, {
          "mean" : 239.47368421052636,
          "variance" : 21900.79658605974,
          "n" : 38,
          "max" : 649.0,
          "min" : 71.0,
          "sum" : 9100.000000000002,
          "standardDeviation" : 147.98917725989202
        } ],
        "10" : [ {
          "mean" : 1136.6578411405305,
          "variance" : 4262159.719423085,
          "n" : 486,
          "max" : 31332.0,
          "min" : 82.0,
          "sum" : 552415.7107942979,
          "standardDeviation" : 2064.4998714998956
        }, {
          "mean" : 233.64777327935218,
          "variance" : 24178.68298691808,
          "n" : 494,
          "max" : 1006.0,
          "min" : 43.0,
          "sum" : 115421.99999999997,
          "standardDeviation" : 155.4949612910916
        }, {
          "mean" : 248.25133689839555,
          "variance" : 291774.51574887836,
          "n" : 374,
          "max" : 10255.0,
          "min" : 21.0,
          "sum" : 92845.99999999994,
          "standardDeviation" : 540.1615644868472
        }, {
          "mean" : 231.13756613756613,
          "variance" : 292231.715773371,
          "n" : 378,
          "max" : 10288.0,
          "min" : 19.0,
          "sum" : 87370.0,
          "standardDeviation" : 540.5846055645416
        }, {
          "mean" : 229.00911161731216,
          "variance" : 238615.71224555603,
          "n" : 439,
          "max" : 9999.0,
          "min" : 29.0,
          "sum" : 100535.00000000004,
          "standardDeviation" : 488.4830726294986
        }, {
          "mean" : 230.38251366120224,
          "variance" : 273279.27793996554,
          "n" : 366,
          "max" : 9831.0,
          "min" : 38.0,
          "sum" : 84320.00000000001,
          "standardDeviation" : 522.7612054657131
        }, {
          "mean" : 177.6631299734748,
          "variance" : 21263.88887634741,
          "n" : 377,
          "max" : 1122.0,
          "min" : 30.0,
          "sum" : 66979.0,
          "standardDeviation" : 145.82142804247738
        }, {
          "mean" : 145.30864197530863,
          "variance" : 15108.788167705667,
          "n" : 405,
          "max" : 857.0,
          "min" : 32.0,
          "sum" : 58849.99999999999,
          "standardDeviation" : 122.91781062037212
        }, {
          "mean" : 240.92857142857144,
          "variance" : 26706.103896103894,
          "n" : 56,
          "max" : 785.0,
          "min" : 58.0,
          "sum" : 13492.0,
          "standardDeviation" : 163.42002293508557
        } ],
        "11" : [ {
          "mean" : 1090.9115044247785,
          "variance" : 2679779.074191077,
          "n" : 447,
          "max" : 20733.0,
          "min" : 97.0,
          "sum" : 487637.442477876,
          "standardDeviation" : 1637.0030770255373
        }, {
          "mean" : 275.6194029850749,
          "variance" : 548959.2380527275,
          "n" : 536,
          "max" : 11919.0,
          "min" : 39.0,
          "sum" : 147732.00000000015,
          "standardDeviation" : 740.9178348863844
        }, {
          "mean" : 153.31451612903209,
          "variance" : 8006.992457177635,
          "n" : 372,
          "max" : 553.0,
          "min" : 21.0,
          "sum" : 57032.999999999935,
          "standardDeviation" : 89.48179958615961
        }, {
          "mean" : 174.1832460732984,
          "variance" : 246338.8062277557,
          "n" : 382,
          "max" : 9667.0,
          "min" : 18.0,
          "sum" : 66537.99999999999,
          "standardDeviation" : 496.3253028284531
        }, {
          "mean" : 152.9680365296803,
          "variance" : 10536.62140162795,
          "n" : 438,
          "max" : 678.0,
          "min" : 21.0,
          "sum" : 66999.99999999997,
          "standardDeviation" : 102.64804626308262
        }, {
          "mean" : 172.40970350404297,
          "variance" : 261115.5127704524,
          "n" : 371,
          "max" : 9826.0,
          "min" : 35.0,
          "sum" : 63963.99999999994,
          "standardDeviation" : 510.99463086264655
        }, {
          "mean" : 155.73890339425597,
          "variance" : 15944.868822878068,
          "n" : 383,
          "max" : 1011.0,
          "min" : 16.0,
          "sum" : 59648.00000000004,
          "standardDeviation" : 126.27299324431202
        }, {
          "mean" : 164.35469107551484,
          "variance" : 21800.733997438747,
          "n" : 437,
          "max" : 976.0,
          "min" : 18.0,
          "sum" : 71822.99999999999,
          "standardDeviation" : 147.65071621038194
        }, {
          "mean" : 223.8,
          "variance" : 20807.288888888892,
          "n" : 10,
          "max" : 539.0,
          "min" : 74.0,
          "sum" : 2238.0,
          "standardDeviation" : 144.24731848075683
        } ],
        "12" : [ {
          "mean" : 1020.274549098196,
          "variance" : 2400673.275877054,
          "n" : 494,
          "max" : 24343.0,
          "min" : 97.0,
          "sum" : 504015.6272545088,
          "standardDeviation" : 1549.4106221002403
        }, {
          "mean" : 307.47861507128323,
          "variance" : 1366597.343929507,
          "n" : 491,
          "max" : 23967.0,
          "min" : 45.0,
          "sum" : 150972.00000000006,
          "standardDeviation" : 1169.0155447766754
        }, {
          "mean" : 236.46739130434779,
          "variance" : 30792.14062314896,
          "n" : 368,
          "max" : 922.0,
          "min" : 27.0,
          "sum" : 87019.99999999999,
          "standardDeviation" : 175.47689484131226
        }, {
          "mean" : 215.47282608695645,
          "variance" : 29159.301711882472,
          "n" : 368,
          "max" : 1012.0,
          "min" : 41.0,
          "sum" : 79293.99999999997,
          "standardDeviation" : 170.76094902489407
        }, {
          "mean" : 221.93018018018023,
          "variance" : 77663.68134443699,
          "n" : 444,
          "max" : 4815.0,
          "min" : 21.0,
          "sum" : 98537.00000000003,
          "standardDeviation" : 278.6820434553274
        }, {
          "mean" : 222.28455284552834,
          "variance" : 31558.280222693524,
          "n" : 369,
          "max" : 867.0,
          "min" : 18.0,
          "sum" : 82022.99999999996,
          "standardDeviation" : 177.64650354761707
        }, {
          "mean" : 198.24715909090904,
          "variance" : 29356.101131507392,
          "n" : 352,
          "max" : 855.0,
          "min" : 26.0,
          "sum" : 69782.99999999999,
          "standardDeviation" : 171.33622247355459
        }, {
          "mean" : 132.95495495495484,
          "variance" : 12277.176295934767,
          "n" : 444,
          "max" : 713.0,
          "min" : 26.0,
          "sum" : 59031.99999999995,
          "standardDeviation" : 110.8024200815793
        }, {
          "mean" : 214.13333333333338,
          "variance" : 20336.299999999996,
          "n" : 45,
          "max" : 726.0,
          "min" : 50.0,
          "sum" : 9636.000000000002,
          "standardDeviation" : 142.60539961726553
        } ],
        "13" : [ {
          "mean" : 2227.4805725971382,
          "variance" : 7.778518698607901E8,
          "n" : 484,
          "max" : 617261.0,
          "min" : 107.0,
          "sum" : 1078100.5971370148,
          "standardDeviation" : 27889.9958741623
        }, {
          "mean" : 343.2237903225808,
          "variance" : 3773644.711432882,
          "n" : 496,
          "max" : 43123.0,
          "min" : 38.0,
          "sum" : 170239.00000000006,
          "standardDeviation" : 1942.587118106388
        }, {
          "mean" : 190.4569892473118,
          "variance" : 18249.51027446889,
          "n" : 372,
          "max" : 865.0,
          "min" : 28.0,
          "sum" : 70850.0,
          "standardDeviation" : 135.0907482933931
        }, {
          "mean" : 190.87709497206706,
          "variance" : 89800.71314335786,
          "n" : 358,
          "max" : 5381.0,
          "min" : 0.0,
          "sum" : 68334.0,
          "standardDeviation" : 299.6676711681757
        }, {
          "mean" : 163.3289183222958,
          "variance" : 13484.769891968977,
          "n" : 453,
          "max" : 1106.0,
          "min" : 19.0,
          "sum" : 73988.0,
          "standardDeviation" : 116.12394194122493
        }, {
          "mean" : 235.22192513368995,
          "variance" : 515445.6852016459,
          "n" : 374,
          "max" : 10263.0,
          "min" : 36.0,
          "sum" : 87973.00000000004,
          "standardDeviation" : 717.9454611609756
        }, {
          "mean" : 168.4550264550264,
          "variance" : 14831.543064853407,
          "n" : 378,
          "max" : 913.0,
          "min" : 31.0,
          "sum" : 63675.99999999998,
          "standardDeviation" : 121.78482280174902
        }, {
          "mean" : 145.37209302325584,
          "variance" : 14965.161923347963,
          "n" : 430,
          "max" : 877.0,
          "min" : 20.0,
          "sum" : 62510.000000000015,
          "standardDeviation" : 122.33217860950553
        }, {
          "mean" : 255.96774193548387,
          "variance" : 21412.498924731182,
          "n" : 31,
          "max" : 585.0,
          "min" : 63.0,
          "sum" : 7935.0,
          "standardDeviation" : 146.33010259249866
        } ],
        "14" : [ {
          "mean" : 1007.0643776824044,
          "variance" : 2031111.6216530525,
          "n" : 461,
          "max" : 16391.0,
          "min" : 103.0,
          "sum" : 464256.6781115884,
          "standardDeviation" : 1425.1707342115374
        }, {
          "mean" : 384.3604651162785,
          "variance" : 1508374.6814630835,
          "n" : 516,
          "max" : 21315.0,
          "min" : 43.0,
          "sum" : 198329.99999999968,
          "standardDeviation" : 1228.1590619553656
        }, {
          "mean" : 230.19729729729724,
          "variance" : 30670.70080568369,
          "n" : 370,
          "max" : 1380.0,
          "min" : 41.0,
          "sum" : 85172.99999999999,
          "standardDeviation" : 175.13052505398278
        }, {
          "mean" : 228.90322580645176,
          "variance" : 288773.1172941483,
          "n" : 372,
          "max" : 10241.0,
          "min" : 20.0,
          "sum" : 85152.00000000006,
          "standardDeviation" : 537.3761413517987
        }, {
          "mean" : 202.7488789237669,
          "variance" : 17151.222189751592,
          "n" : 446,
          "max" : 861.0,
          "min" : 36.0,
          "sum" : 90426.00000000004,
          "standardDeviation" : 130.96267479610972
        }, {
          "mean" : 204.19354838709677,
          "variance" : 23882.539257455872,
          "n" : 372,
          "max" : 908.0,
          "min" : 27.0,
          "sum" : 75960.0,
          "standardDeviation" : 154.53976594215442
        }, {
          "mean" : 175.44125326370738,
          "variance" : 21125.46185392259,
          "n" : 383,
          "max" : 783.0,
          "min" : 19.0,
          "sum" : 67193.99999999993,
          "standardDeviation" : 145.34600735459708
        }, {
          "mean" : 126.39393939393943,
          "variance" : 9257.300056641174,
          "n" : 429,
          "max" : 546.0,
          "min" : 16.0,
          "sum" : 54223.000000000015,
          "standardDeviation" : 96.21486401092699
        }, {
          "mean" : 216.17391304347822,
          "variance" : 9747.786561264818,
          "n" : 23,
          "max" : 431.0,
          "min" : 58.0,
          "sum" : 4971.999999999999,
          "standardDeviation" : 98.73087947174794
        } ],
        "15" : [ {
          "mean" : 1105.6448979591846,
          "variance" : 6383905.591436084,
          "n" : 485,
          "max" : 38460.0,
          "min" : 94.0,
          "sum" : 536237.7755102045,
          "standardDeviation" : 2526.6391890090053
        }, {
          "mean" : 226.46787148594385,
          "variance" : 27140.55932785469,
          "n" : 498,
          "max" : 1110.0,
          "min" : 41.0,
          "sum" : 112781.00000000003,
          "standardDeviation" : 164.74392045794798
        }, {
          "mean" : 261.970509383378,
          "variance" : 541214.0071924817,
          "n" : 373,
          "max" : 10090.0,
          "min" : 22.0,
          "sum" : 97714.99999999999,
          "standardDeviation" : 735.6724863636547
        }, {
          "mean" : 186.92428198433402,
          "variance" : 21737.619906223943,
          "n" : 383,
          "max" : 798.0,
          "min" : 38.0,
          "sum" : 71591.99999999993,
          "standardDeviation" : 147.43683361434464
        }, {
          "mean" : 193.0823798627003,
          "variance" : 24610.864757626023,
          "n" : 437,
          "max" : 927.0,
          "min" : 30.0,
          "sum" : 84377.00000000003,
          "standardDeviation" : 156.8785031724424
        }, {
          "mean" : 191.57880434782604,
          "variance" : 21832.222655787227,
          "n" : 368,
          "max" : 873.0,
          "min" : 23.0,
          "sum" : 70500.99999999999,
          "standardDeviation" : 147.7573099910364
        }, {
          "mean" : 157.7162471395882,
          "variance" : 15254.28627212227,
          "n" : 437,
          "max" : 962.0,
          "min" : 32.0,
          "sum" : 68922.00000000004,
          "standardDeviation" : 123.50824374155059
        }, {
          "mean" : 156.6683937823835,
          "variance" : 14681.661180270507,
          "n" : 386,
          "max" : 760.0,
          "min" : 28.0,
          "sum" : 60474.00000000003,
          "standardDeviation" : 121.16790490996577
        }, {
          "mean" : 257.625,
          "variance" : 21425.125000000004,
          "n" : 8,
          "max" : 486.0,
          "min" : 74.0,
          "sum" : 2061.0,
          "standardDeviation" : 146.37323867428773
        } ],
        "16" : [ {
          "mean" : 3365.1528822055147,
          "variance" : 1.9885248351348608E9,
          "n" : 394,
          "max" : 891337.0,
          "min" : 118.0,
          "sum" : 1325870.235588973,
          "standardDeviation" : 44592.87874913281
        }, {
          "mean" : 357.70260869565226,
          "variance" : 2160838.348686563,
          "n" : 575,
          "max" : 30681.0,
          "min" : 29.0,
          "sum" : 205679.00000000006,
          "standardDeviation" : 1469.9790300159261
        }, {
          "mean" : 220.6032171581769,
          "variance" : 23132.43353800918,
          "n" : 373,
          "max" : 794.0,
          "min" : 40.0,
          "sum" : 82284.99999999999,
          "standardDeviation" : 152.09350261601966
        }, {
          "mean" : 209.30470914127432,
          "variance" : 25328.595783317942,
          "n" : 361,
          "max" : 893.0,
          "min" : 21.0,
          "sum" : 75559.00000000003,
          "standardDeviation" : 159.14960189494016
        }, {
          "mean" : 229.70982142857127,
          "variance" : 381465.754534196,
          "n" : 448,
          "max" : 10268.0,
          "min" : 23.0,
          "sum" : 102909.99999999993,
          "standardDeviation" : 617.6291399652351
        }, {
          "mean" : 230.2933333333333,
          "variance" : 291929.4324420677,
          "n" : 375,
          "max" : 10321.0,
          "min" : 40.0,
          "sum" : 86359.99999999999,
          "standardDeviation" : 540.304943936355
        }, {
          "mean" : 186.8583106267029,
          "variance" : 19834.4224922202,
          "n" : 367,
          "max" : 696.0,
          "min" : 33.0,
          "sum" : 68576.99999999996,
          "standardDeviation" : 140.83473467941138
        }, {
          "mean" : 136.1103286384977,
          "variance" : 14615.1148577741,
          "n" : 426,
          "max" : 867.0,
          "min" : 25.0,
          "sum" : 57983.000000000015,
          "standardDeviation" : 120.89298928297745
        }, {
          "mean" : 178.1428571428571,
          "variance" : 13537.142857142859,
          "n" : 56,
          "max" : 617.0,
          "min" : 38.0,
          "sum" : 9975.999999999998,
          "standardDeviation" : 116.3492280040691
        } ],
        "17" : [ {
          "mean" : 946.7333333333339,
          "variance" : 1750900.6493927117,
          "n" : 490,
          "max" : 20256.0,
          "min" : 98.0,
          "sum" : 463899.3333333336,
          "standardDeviation" : 1323.216025217618
        }, {
          "mean" : 342.9899799599193,
          "variance" : 2989216.0741965864,
          "n" : 499,
          "max" : 38485.0,
          "min" : 43.0,
          "sum" : 171151.99999999974,
          "standardDeviation" : 1728.9349537205228
        }, {
          "mean" : 1068.2356164383564,
          "variance" : 2.5814011912015653E8,
          "n" : 365,
          "max" : 307024.0,
          "min" : 28.0,
          "sum" : 389906.00000000006,
          "standardDeviation" : 16066.739529853483
        }, {
          "mean" : 203.36243386243382,
          "variance" : 16954.4173648829,
          "n" : 378,
          "max" : 837.0,
          "min" : 25.0,
          "sum" : 76870.99999999999,
          "standardDeviation" : 130.20912934538384
        }, {
          "mean" : 216.68604651162775,
          "variance" : 238642.9711335177,
          "n" : 430,
          "max" : 9926.0,
          "min" : 27.0,
          "sum" : 93174.99999999993,
          "standardDeviation" : 488.5109734013328
        }, {
          "mean" : 202.14745308310995,
          "variance" : 16236.212070108673,
          "n" : 373,
          "max" : 767.0,
          "min" : 22.0,
          "sum" : 75401.00000000001,
          "standardDeviation" : 127.421395652805
        }, {
          "mean" : 154.66193181818178,
          "variance" : 12679.022136428388,
          "n" : 352,
          "max" : 638.0,
          "min" : 20.0,
          "sum" : 54440.999999999985,
          "standardDeviation" : 112.60116401009533
        }, {
          "mean" : 114.17117117117115,
          "variance" : 8546.069957090267,
          "n" : 444,
          "max" : 827.0,
          "min" : 26.0,
          "sum" : 50691.99999999999,
          "standardDeviation" : 92.44495636372093
        }, {
          "mean" : 192.68888888888893,
          "variance" : 11140.310101010102,
          "n" : 45,
          "max" : 457.0,
          "min" : 35.0,
          "sum" : 8671.000000000002,
          "standardDeviation" : 105.547667435193
        } ],
        "18" : [ {
          "mean" : 1069.9258517034054,
          "variance" : 2268801.9362580543,
          "n" : 494,
          "max" : 16920.0,
          "min" : 81.0,
          "sum" : 528543.3707414822,
          "standardDeviation" : 1506.254273440595
        }, {
          "mean" : 353.9463220675947,
          "variance" : 2219336.6763958107,
          "n" : 503,
          "max" : 33054.0,
          "min" : 39.0,
          "sum" : 178035.00000000012,
          "standardDeviation" : 1489.7438291182182
        }, {
          "mean" : 212.32500000000007,
          "variance" : 23012.175417827293,
          "n" : 360,
          "max" : 870.0,
          "min" : 42.0,
          "sum" : 76437.00000000003,
          "standardDeviation" : 151.69764473394864
        }, {
          "mean" : 202.5169712793732,
          "variance" : 27608.01999917977,
          "n" : 383,
          "max" : 990.0,
          "min" : 45.0,
          "sum" : 77563.99999999993,
          "standardDeviation" : 166.15661286623464
        }, {
          "mean" : 219.72183908045972,
          "variance" : 258251.6574712645,
          "n" : 435,
          "max" : 10355.0,
          "min" : 39.0,
          "sum" : 95578.99999999997,
          "standardDeviation" : 508.1846686700264
        }, {
          "mean" : 206.104109589041,
          "variance" : 25726.022098449477,
          "n" : 365,
          "max" : 929.0,
          "min" : 35.0,
          "sum" : 75227.99999999997,
          "standardDeviation" : 160.39333557990955
        }, {
          "mean" : 194.14248704663214,
          "variance" : 22317.660164188135,
          "n" : 386,
          "max" : 817.0,
          "min" : 32.0,
          "sum" : 74939.0,
          "standardDeviation" : 149.39096413166405
        }, {
          "mean" : 210.9576470588236,
          "variance" : 519399.3755604881,
          "n" : 425,
          "max" : 14176.0,
          "min" : 22.0,
          "sum" : 89657.00000000003,
          "standardDeviation" : 720.6936766480528
        }, {
          "mean" : 272.84000000000003,
          "variance" : 27923.973333333335,
          "n" : 25,
          "max" : 742.0,
          "min" : 47.0,
          "sum" : 6821.000000000001,
          "standardDeviation" : 167.10467777214777
        } ],
        "19" : [ {
          "mean" : 1103.806,
          "variance" : 2468427.8280200385,
          "n" : 495,
          "max" : 19317.0,
          "min" : 80.0,
          "sum" : 546383.97,
          "standardDeviation" : 1571.1231103958844
        }, {
          "mean" : 305.79513184584175,
          "variance" : 605740.0981876353,
          "n" : 493,
          "max" : 16782.0,
          "min" : 36.0,
          "sum" : 150756.99999999997,
          "standardDeviation" : 778.2930670304312
        }, {
          "mean" : 224.49863760217985,
          "variance" : 26380.35450633553,
          "n" : 367,
          "max" : 867.0,
          "min" : 36.0,
          "sum" : 82391.0,
          "standardDeviation" : 162.42030201405098
        }, {
          "mean" : 242.22281167108753,
          "variance" : 290991.06192505226,
          "n" : 377,
          "max" : 10165.0,
          "min" : 31.0,
          "sum" : 91318.0,
          "standardDeviation" : 539.4358737839488
        }, {
          "mean" : 211.93348623853203,
          "variance" : 33290.91740482968,
          "n" : 436,
          "max" : 1232.0,
          "min" : 30.0,
          "sum" : 92402.99999999996,
          "standardDeviation" : 182.45798805431806
        }, {
          "mean" : 237.64594594594578,
          "variance" : 280152.47864205687,
          "n" : 370,
          "max" : 9919.0,
          "min" : 40.0,
          "sum" : 87928.99999999994,
          "standardDeviation" : 529.2943213771114
        }, {
          "mean" : 203.4633507853404,
          "variance" : 281503.18369267986,
          "n" : 382,
          "max" : 10157.0,
          "min" : 20.0,
          "sum" : 77723.00000000003,
          "standardDeviation" : 530.5687360678915
        }, {
          "mean" : 136.88729016786561,
          "variance" : 13529.81178518724,
          "n" : 417,
          "max" : 904.0,
          "min" : 29.0,
          "sum" : 57081.99999999996,
          "standardDeviation" : 116.31771913679893
        }, {
          "mean" : 215.36842105263162,
          "variance" : 17567.644381223334,
          "n" : 38,
          "max" : 697.0,
          "min" : 53.0,
          "sum" : 8184.000000000002,
          "standardDeviation" : 132.54299069065604
        } ],
        "20" : [ {
          "mean" : 1209.0609137055833,
          "variance" : 2989116.5560765173,
          "n" : 389,
          "max" : 23233.0,
          "min" : 154.0,
          "sum" : 470324.6954314719,
          "standardDeviation" : 1728.9061733004824
        }, {
          "mean" : 427.62943262411346,
          "variance" : 1333741.359771615,
          "n" : 564,
          "max" : 19050.0,
          "min" : 40.0,
          "sum" : 241183.0,
          "standardDeviation" : 1154.877205494859
        }, {
          "mean" : 249.36729222520114,
          "variance" : 30164.829787540697,
          "n" : 373,
          "max" : 998.0,
          "min" : 33.0,
          "sum" : 93014.00000000003,
          "standardDeviation" : 173.68025157610953
        }, {
          "mean" : 248.1068493150687,
          "variance" : 38043.34294746349,
          "n" : 365,
          "max" : 924.0,
          "min" : 28.0,
          "sum" : 90559.00000000007,
          "standardDeviation" : 195.0470275278849
        }, {
          "mean" : 242.55145118733506,
          "variance" : 34280.63954153929,
          "n" : 379,
          "max" : 963.0,
          "min" : 46.0,
          "sum" : 91926.99999999999,
          "standardDeviation" : 185.15031607194
        }, {
          "mean" : 216.9599056603774,
          "variance" : 30095.267892189666,
          "n" : 424,
          "max" : 868.0,
          "min" : 22.0,
          "sum" : 91991.00000000001,
          "standardDeviation" : 173.47987748493964
        }, {
          "mean" : 277.9198895027627,
          "variance" : 418528.06281660864,
          "n" : 362,
          "max" : 10512.0,
          "min" : 20.0,
          "sum" : 100607.0000000001,
          "standardDeviation" : 646.9374489211524
        }, {
          "mean" : 185.00277008310235,
          "variance" : 261925.8805478609,
          "n" : 361,
          "max" : 9567.0,
          "min" : 27.0,
          "sum" : 66785.99999999994,
          "standardDeviation" : 511.7869483953854
        }, {
          "mean" : 158.81645569620252,
          "variance" : 14538.583931306943,
          "n" : 158,
          "max" : 741.0,
          "min" : 31.0,
          "sum" : 25093.0,
          "standardDeviation" : 120.57605040515692
        } ],
        "21" : [ {
          "mean" : 1022.274,
          "variance" : 4400465.457839681,
          "n" : 495,
          "max" : 28764.0,
          "min" : 72.0,
          "sum" : 506025.63,
          "standardDeviation" : 2097.7286425654966
        }, {
          "mean" : 213.61666666666682,
          "variance" : 28617.497842727924,
          "n" : 480,
          "max" : 963.0,
          "min" : 41.0,
          "sum" : 102536.00000000007,
          "standardDeviation" : 169.1670707990415
        }, {
          "mean" : 210.6395663956641,
          "variance" : 25458.42136502887,
          "n" : 369,
          "max" : 865.0,
          "min" : 29.0,
          "sum" : 77726.00000000006,
          "standardDeviation" : 159.55695335844462
        }, {
          "mean" : 230.35474860335182,
          "variance" : 300493.9382266872,
          "n" : 358,
          "max" : 10111.0,
          "min" : 39.0,
          "sum" : 82466.99999999996,
          "standardDeviation" : 548.1732739077008
        }, {
          "mean" : 201.5848623853211,
          "variance" : 268610.84105768224,
          "n" : 436,
          "max" : 10526.0,
          "min" : 23.0,
          "sum" : 87891.0,
          "standardDeviation" : 518.2767996521571
        }, {
          "mean" : 208.28497409326434,
          "variance" : 26284.18351389542,
          "n" : 386,
          "max" : 918.0,
          "min" : 34.0,
          "sum" : 80398.00000000003,
          "standardDeviation" : 162.1239757528029
        }, {
          "mean" : 182.98060941828257,
          "variance" : 23253.524622960922,
          "n" : 361,
          "max" : 877.0,
          "min" : 28.0,
          "sum" : 66056.00000000001,
          "standardDeviation" : 152.49106407577108
        }, {
          "mean" : 281.29736842105234,
          "variance" : 9060107.792605188,
          "n" : 380,
          "max" : 58769.0,
          "min" : 15.0,
          "sum" : 106892.99999999988,
          "standardDeviation" : 3010.0012944524105
        }, {
          "mean" : 145.14414414414415,
          "variance" : 10601.96085176085,
          "n" : 111,
          "max" : 539.0,
          "min" : 39.0,
          "sum" : 16111.0,
          "standardDeviation" : 102.96582370748486
        } ],
        "22" : [ {
          "mean" : 975.6673469387752,
          "variance" : 1536995.400363091,
          "n" : 485,
          "max" : 17047.0,
          "min" : 115.0,
          "sum" : 473198.6632653059,
          "standardDeviation" : 1239.7561858539327
        }, {
          "mean" : 310.23360655737696,
          "variance" : 1491963.9412091435,
          "n" : 488,
          "max" : 26423.0,
          "min" : 38.0,
          "sum" : 151393.99999999994,
          "standardDeviation" : 1221.459758325727
        }, {
          "mean" : 226.50540540540547,
          "variance" : 329939.2967186698,
          "n" : 370,
          "max" : 10969.0,
          "min" : 35.0,
          "sum" : 83807.00000000003,
          "standardDeviation" : 574.4034267992051
        }, {
          "mean" : 233.13888888888886,
          "variance" : 298012.47647787066,
          "n" : 360,
          "max" : 10126.0,
          "min" : 29.0,
          "sum" : 83929.99999999999,
          "standardDeviation" : 545.9051900081832
        }, {
          "mean" : 186.89145496535812,
          "variance" : 19911.07846848002,
          "n" : 433,
          "max" : 784.0,
          "min" : 20.0,
          "sum" : 80924.00000000007,
          "standardDeviation" : 141.1066209236123
        }, {
          "mean" : 212.92689295039173,
          "variance" : 27654.031290582752,
          "n" : 383,
          "max" : 956.0,
          "min" : 21.0,
          "sum" : 81551.00000000003,
          "standardDeviation" : 166.2950128253483
        }, {
          "mean" : 196.0575342465753,
          "variance" : 22840.109318079176,
          "n" : 365,
          "max" : 854.0,
          "min" : 28.0,
          "sum" : 71560.99999999999,
          "standardDeviation" : 151.129445569284
        }, {
          "mean" : 221.07980049875331,
          "variance" : 247741.20861595988,
          "n" : 401,
          "max" : 9599.0,
          "min" : 20.0,
          "sum" : 88653.00000000007,
          "standardDeviation" : 497.7360832971223
        }, {
          "mean" : 234.60439560439562,
          "variance" : 27914.93064713064,
          "n" : 91,
          "max" : 717.0,
          "min" : 38.0,
          "sum" : 21349.0,
          "standardDeviation" : 167.07761863017632
        } ],
        "23" : [ {
          "mean" : 1080.045816733068,
          "variance" : 3395067.43701839,
          "n" : 497,
          "max" : 30001.0,
          "min" : 90.0,
          "sum" : 536782.7709163348,
          "standardDeviation" : 1842.5708770677968
        }, {
          "mean" : 336.9796747967477,
          "variance" : 632817.8122133354,
          "n" : 492,
          "max" : 13933.0,
          "min" : 39.0,
          "sum" : 165793.99999999988,
          "standardDeviation" : 795.4984677630343
        }, {
          "mean" : 229.0901639344262,
          "variance" : 280247.80280709633,
          "n" : 366,
          "max" : 9912.0,
          "min" : 19.0,
          "sum" : 83846.99999999999,
          "standardDeviation" : 529.3843620726781
        }, {
          "mean" : 202.49739583333337,
          "variance" : 29510.396860041365,
          "n" : 384,
          "max" : 961.0,
          "min" : 19.0,
          "sum" : 77759.00000000001,
          "standardDeviation" : 171.78590413663562
        }, {
          "mean" : 204.30184331797207,
          "variance" : 25654.571497749057,
          "n" : 434,
          "max" : 1102.0,
          "min" : 19.0,
          "sum" : 88666.99999999988,
          "standardDeviation" : 160.17044514438066
        }, {
          "mean" : 200.9643835616439,
          "variance" : 25712.90806864371,
          "n" : 365,
          "max" : 1050.0,
          "min" : 32.0,
          "sum" : 73352.00000000003,
          "standardDeviation" : 160.35244952492528
        }, {
          "mean" : 244.31266149870797,
          "variance" : 397504.22064238,
          "n" : 387,
          "max" : 9805.0,
          "min" : 19.0,
          "sum" : 94548.99999999999,
          "standardDeviation" : 630.4793578241718
        }, {
          "mean" : 172.51740139211142,
          "variance" : 23891.268882533866,
          "n" : 431,
          "max" : 869.0,
          "min" : 21.0,
          "sum" : 74355.00000000003,
          "standardDeviation" : 154.56800730595535
        }, {
          "mean" : 301.38888888888886,
          "variance" : 21168.722222222226,
          "n" : 18,
          "max" : 553.0,
          "min" : 53.0,
          "sum" : 5424.999999999999,
          "standardDeviation" : 145.49474980982038
        } ],
        "24" : [ {
          "mean" : 1081.7330677290836,
          "variance" : 2392990.8787047383,
          "n" : 497,
          "max" : 19822.0,
          "min" : 126.0,
          "sum" : 537621.3346613545,
          "standardDeviation" : 1546.929500237402
        }, {
          "mean" : 319.8244897959182,
          "variance" : 2852210.4272108832,
          "n" : 490,
          "max" : 37283.0,
          "min" : 40.0,
          "sum" : 156713.99999999994,
          "standardDeviation" : 1688.8488467624577
        }, {
          "mean" : 208.43051771117158,
          "variance" : 23482.42070546894,
          "n" : 367,
          "max" : 803.0,
          "min" : 34.0,
          "sum" : 76493.99999999997,
          "standardDeviation" : 153.2397491040394
        }, {
          "mean" : 188.29921259842524,
          "variance" : 17919.504973062572,
          "n" : 381,
          "max" : 781.0,
          "min" : 20.0,
          "sum" : 71742.00000000001,
          "standardDeviation" : 133.86375526281404
        }, {
          "mean" : 178.80365296803657,
          "variance" : 17495.00483788387,
          "n" : 438,
          "max" : 890.0,
          "min" : 19.0,
          "sum" : 78316.00000000001,
          "standardDeviation" : 132.26868426760686
        }, {
          "mean" : 182.6585365853659,
          "variance" : 15653.062433722167,
          "n" : 369,
          "max" : 676.0,
          "min" : 27.0,
          "sum" : 67401.00000000001,
          "standardDeviation" : 125.1121993800851
        }, {
          "mean" : 179.8455497382198,
          "variance" : 19248.041699303307,
          "n" : 382,
          "max" : 781.0,
          "min" : 20.0,
          "sum" : 68700.99999999997,
          "standardDeviation" : 138.73731184978072
        }, {
          "mean" : 156.31797235023024,
          "variance" : 80366.58688179134,
          "n" : 434,
          "max" : 5440.0,
          "min" : 16.0,
          "sum" : 67841.99999999993,
          "standardDeviation" : 283.49001196125295
        }, {
          "mean" : 178.5,
          "variance" : 6922.266666666664,
          "n" : 16,
          "max" : 361.0,
          "min" : 72.0,
          "sum" : 2856.0,
          "standardDeviation" : 83.2001602562559
        } ],
        "25" : [ {
          "mean" : 1060.1456692913382,
          "variance" : 5297458.211480229,
          "n" : 503,
          "max" : 37241.0,
          "min" : 110.0,
          "sum" : 533253.2716535431,
          "standardDeviation" : 2301.620779251054
        }, {
          "mean" : 232.1970021413276,
          "variance" : 28891.377415886254,
          "n" : 467,
          "max" : 1132.0,
          "min" : 42.0,
          "sum" : 108435.99999999999,
          "standardDeviation" : 169.9746375665683
        }, {
          "mean" : 223.13636363636368,
          "variance" : 25495.174384596656,
          "n" : 374,
          "max" : 1144.0,
          "min" : 41.0,
          "sum" : 83453.00000000001,
          "standardDeviation" : 159.6720839238865
        }, {
          "mean" : 214.43175487465192,
          "variance" : 24985.223681548672,
          "n" : 359,
          "max" : 1059.0,
          "min" : 20.0,
          "sum" : 76981.00000000004,
          "standardDeviation" : 158.0671492801356
        }, {
          "mean" : 194.299781181619,
          "variance" : 21746.95598679413,
          "n" : 457,
          "max" : 797.0,
          "min" : 30.0,
          "sum" : 88794.99999999988,
          "standardDeviation" : 147.46849150511486
        }, {
          "mean" : 203.5067024128687,
          "variance" : 23672.12159474185,
          "n" : 373,
          "max" : 816.0,
          "min" : 21.0,
          "sum" : 75908.00000000001,
          "standardDeviation" : 153.8574716896838
        }, {
          "mean" : 206.0249307479224,
          "variance" : 26383.302154509067,
          "n" : 361,
          "max" : 845.0,
          "min" : 39.0,
          "sum" : 74374.99999999999,
          "standardDeviation" : 162.42937589767766
        }, {
          "mean" : 191.78005115089522,
          "variance" : 29301.177139484553,
          "n" : 391,
          "max" : 1134.0,
          "min" : 21.0,
          "sum" : 74986.00000000003,
          "standardDeviation" : 171.1758661128506
        }, {
          "mean" : 163.07692307692304,
          "variance" : 17680.827350427357,
          "n" : 91,
          "max" : 700.0,
          "min" : 31.0,
          "sum" : 14839.999999999996,
          "standardDeviation" : 132.9692722038718
        } ],
        "26" : [ {
          "mean" : 1030.8874680306906,
          "variance" : 1801156.8334579319,
          "n" : 386,
          "max" : 20260.0,
          "min" : 106.0,
          "sum" : 397922.56265984656,
          "standardDeviation" : 1342.0718436275802
        }, {
          "mean" : 404.3007518796992,
          "variance" : 1865109.8980785294,
          "n" : 532,
          "max" : 30481.0,
          "min" : 43.0,
          "sum" : 215087.99999999997,
          "standardDeviation" : 1365.6902643273581
        }, {
          "mean" : 197.57380952380967,
          "variance" : 19303.52437208776,
          "n" : 420,
          "max" : 986.0,
          "min" : 30.0,
          "sum" : 82981.00000000006,
          "standardDeviation" : 138.9371238081736
        }, {
          "mean" : 183.06336088154274,
          "variance" : 15249.91033894951,
          "n" : 363,
          "max" : 719.0,
          "min" : 29.0,
          "sum" : 66452.00000000001,
          "standardDeviation" : 123.49052732476896
        }, {
          "mean" : 193.20353982300892,
          "variance" : 214732.70349076804,
          "n" : 452,
          "max" : 9710.0,
          "min" : 19.0,
          "sum" : 87328.00000000003,
          "standardDeviation" : 463.3926018947303
        }, {
          "mean" : 213.68266666666662,
          "variance" : 250196.51132976817,
          "n" : 375,
          "max" : 9518.0,
          "min" : 19.0,
          "sum" : 80130.99999999999,
          "standardDeviation" : 500.1964727282352
        }, {
          "mean" : 160.77900552486182,
          "variance" : 15294.300056626003,
          "n" : 362,
          "max" : 768.0,
          "min" : 26.0,
          "sum" : 58201.99999999998,
          "standardDeviation" : 123.67012596672652
        }, {
          "mean" : 139.79147982062767,
          "variance" : 14518.309230614197,
          "n" : 446,
          "max" : 839.0,
          "min" : 21.0,
          "sum" : 62346.99999999994,
          "standardDeviation" : 120.4919467458892
        }, {
          "mean" : 222.1428571428571,
          "variance" : 15253.540069686409,
          "n" : 42,
          "max" : 545.0,
          "min" : 41.0,
          "sum" : 9329.999999999998,
          "standardDeviation" : 123.50522284375835
        } ],
        "27" : [ {
          "mean" : 8897.235867446385,
          "variance" : 3.1066739962856384E10,
          "n" : 508,
          "max" : 3993103.0,
          "min" : 71.0,
          "sum" : 4519795.820662764,
          "standardDeviation" : 176257.59547564576
        }, {
          "mean" : 374.88888888888897,
          "variance" : 3280721.338468723,
          "n" : 477,
          "max" : 38185.0,
          "min" : 38.0,
          "sum" : 178822.00000000003,
          "standardDeviation" : 1811.276162949406
        }, {
          "mean" : 222.0706521739133,
          "variance" : 23219.341043715205,
          "n" : 368,
          "max" : 979.0,
          "min" : 26.0,
          "sum" : 81722.00000000009,
          "standardDeviation" : 152.3789389768652
        }, {
          "mean" : 229.56741573033702,
          "variance" : 156154.64051273942,
          "n" : 356,
          "max" : 7121.0,
          "min" : 40.0,
          "sum" : 81725.99999999999,
          "standardDeviation" : 395.1640678411176
        }, {
          "mean" : 189.39198218262814,
          "variance" : 22178.109399856825,
          "n" : 449,
          "max" : 951.0,
          "min" : 27.0,
          "sum" : 85037.00000000003,
          "standardDeviation" : 148.92316609532858
        }, {
          "mean" : 222.03260869565187,
          "variance" : 281685.41582750855,
          "n" : 368,
          "max" : 10012.0,
          "min" : 23.0,
          "sum" : 81707.99999999988,
          "standardDeviation" : 530.7404411079945
        }, {
          "mean" : 221.11977715877444,
          "variance" : 317875.0889653134,
          "n" : 359,
          "max" : 10485.0,
          "min" : 35.0,
          "sum" : 79382.00000000003,
          "standardDeviation" : 563.8041228700916
        }, {
          "mean" : 167.52261306532665,
          "variance" : 22277.19218257534,
          "n" : 398,
          "max" : 1034.0,
          "min" : 19.0,
          "sum" : 66674.00000000001,
          "standardDeviation" : 149.25545947326464
        }, {
          "mean" : 168.1428571428572,
          "variance" : 17327.568253968253,
          "n" : 91,
          "max" : 691.0,
          "min" : 33.0,
          "sum" : 15301.000000000005,
          "standardDeviation" : 131.63422143944277
        } ],
        "28" : [ {
          "mean" : 1039.8522483940046,
          "variance" : 1514200.8171784095,
          "n" : 462,
          "max" : 12462.0,
          "min" : 101.0,
          "sum" : 480411.7387580301,
          "standardDeviation" : 1230.52867385462
        }, {
          "mean" : 453.18627450980415,
          "variance" : 3237772.277610852,
          "n" : 510,
          "max" : 29672.0,
          "min" : 33.0,
          "sum" : 231125.00000000012,
          "standardDeviation" : 1799.3810818197605
        }, {
          "mean" : 288.87139107611563,
          "variance" : 291821.7281530599,
          "n" : 381,
          "max" : 10121.0,
          "min" : 38.0,
          "sum" : 110060.00000000006,
          "standardDeviation" : 540.2052648327855
        }, {
          "mean" : 236.96418732782362,
          "variance" : 34812.979376893,
          "n" : 363,
          "max" : 1050.0,
          "min" : 38.0,
          "sum" : 86017.99999999997,
          "standardDeviation" : 186.5823662002736
        }, {
          "mean" : 215.869179600887,
          "variance" : 25980.94951465878,
          "n" : 451,
          "max" : 879.0,
          "min" : 19.0,
          "sum" : 97357.00000000004,
          "standardDeviation" : 161.18607109381003
        }, {
          "mean" : 230.93261455525604,
          "variance" : 34967.32787936183,
          "n" : 371,
          "max" : 1083.0,
          "min" : 41.0,
          "sum" : 85675.99999999999,
          "standardDeviation" : 186.99552903575483
        }, {
          "mean" : 190.70526315789485,
          "variance" : 28232.19258436325,
          "n" : 380,
          "max" : 1232.0,
          "min" : 16.0,
          "sum" : 72468.00000000004,
          "standardDeviation" : 168.02438092242224
        }, {
          "mean" : 185.07656612528996,
          "variance" : 30177.633658878738,
          "n" : 431,
          "max" : 1143.0,
          "min" : 24.0,
          "sum" : 79767.99999999997,
          "standardDeviation" : 173.71710813526323
        }, {
          "mean" : 335.2222222222221,
          "variance" : 41330.25641025639,
          "n" : 27,
          "max" : 778.0,
          "min" : 40.0,
          "sum" : 9050.999999999996,
          "standardDeviation" : 203.29844173100884
        } ],
        "29" : [ {
          "mean" : 1640.0337301587313,
          "variance" : 1.4029005585770702E8,
          "n" : 499,
          "max" : 261030.0,
          "min" : 104.0,
          "sum" : 818376.8313492069,
          "standardDeviation" : 11844.410321231995
        }, {
          "mean" : 1411.4323770491806,
          "variance" : 6.762581555231382E8,
          "n" : 488,
          "max" : 574690.0,
          "min" : 38.0,
          "sum" : 688779.0000000001,
          "standardDeviation" : 26004.964055409462
        }, {
          "mean" : 207.37398373983743,
          "variance" : 21721.84888653234,
          "n" : 369,
          "max" : 838.0,
          "min" : 20.0,
          "sum" : 76521.00000000001,
          "standardDeviation" : 147.38333992189328
        }, {
          "mean" : 259.67015706806245,
          "variance" : 376332.9302881643,
          "n" : 382,
          "max" : 8421.0,
          "min" : 36.0,
          "sum" : 99193.99999999985,
          "standardDeviation" : 613.4598033189822
        }, {
          "mean" : 204.61784897025186,
          "variance" : 73045.95683664686,
          "n" : 437,
          "max" : 4778.0,
          "min" : 42.0,
          "sum" : 89418.00000000006,
          "standardDeviation" : 270.27015528290735
        }, {
          "mean" : 199.26684636118586,
          "variance" : 20780.434005973624,
          "n" : 371,
          "max" : 739.0,
          "min" : 36.0,
          "sum" : 73927.99999999996,
          "standardDeviation" : 144.1542021793802
        }, {
          "mean" : 176.18157894736848,
          "variance" : 17780.766414386886,
          "n" : 380,
          "max" : 926.0,
          "min" : 22.0,
          "sum" : 66949.00000000003,
          "standardDeviation" : 133.34454024963634
        }, {
          "mean" : 154.48598130841106,
          "variance" : 15485.098163671779,
          "n" : 428,
          "max" : 836.0,
          "min" : 16.0,
          "sum" : 66119.99999999993,
          "standardDeviation" : 124.43913437368398
        }, {
          "mean" : 239.86363636363632,
          "variance" : 16484.980519480516,
          "n" : 22,
          "max" : 528.0,
          "min" : 65.0,
          "sum" : 5276.999999999999,
          "standardDeviation" : 128.39384922760325
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
