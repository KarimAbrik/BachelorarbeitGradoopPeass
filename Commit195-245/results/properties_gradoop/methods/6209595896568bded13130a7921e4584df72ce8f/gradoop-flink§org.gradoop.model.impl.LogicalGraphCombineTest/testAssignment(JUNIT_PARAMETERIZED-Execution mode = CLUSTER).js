if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphCombineTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Test Case: org.gradoop.model.impl.LogicalGraphCombineTest#testAssignment<br>";
   if (typeof jenkins !== 'undefined') {
      document.getElementById('testcaseDiv').innerHTML+="<p class='button-wrap'><a role='button' href='dashboard?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a></p>";
   } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='testAssignment_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
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
    "meanOld" : 4.265080011937931E9,
    "meanCurrent" : 4.149792436093104E9,
    "deviationOld" : 6.820395073123303E7,
    "deviationCurrent" : 7.20056530104365E7,
    "vms" : 29,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 6.259781236751491,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 5.161351074671444E7,
  "inVMDeviation" : 4.5845902116667986E7,
  "ess" : 0,
  "values" : [ 4.1105280812E9, 4.1787392562E9, 4.16671202E9, 4.1815217308E9, 4.1927650522E9, 4.087335107E9, 4.2323337804E9, 4.0468855558E9, 4.3375597802E9, 4.2369593312E9, 4.2105793314E9, 4.1237122182E9, 4.1734387164E9, 4.158626134E9, 4.1596304888E9, 4.0540637105E9, 3.9913709998E9, 4.1497934174E9, 4.2367475212E9, 4.095750914E9, 4.1164326392E9, 4.1210319038E9, 4.1735822234E9, 4.4664689588E9, 4.048554139E9, 4.1173941742E9, 4.0906926294E9, 4.1303053186E9, 4.2278542604E9, 4.193080212E9 ],
  "valuesPredecessor" : [ 4.2328298918E9, 4.3446344356E9, 4.2714687918E9, 4.2685489144E9, 4.2936393786E9, 4.1885194982E9, 4.2909925826E9, 4.1612155216E9, 4.3830356544E9, 4.4169536608E9, 4.2908806128E9, 4.248147414E9, 4.2869313248E9, 4.2751391304E9, 4.2637635376E9, 4.1796848476E9, 4.1400731548E9, 4.3319490944E9, 4.3721311592E9, 4.2240014492E9, 4.6468542992E9, 4.2555772716E9, 4.2813130596E9, 4.25704824E9, 4.1537804362E9, 4.343779039E9, 4.1927206978E9, 4.2508908508E9, 4.2561310582E9, 4.2315396384E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4.0982479265E9,
        "variance" : 9.280220712048762E15,
        "n" : 2,
        "max" : 4.166366282E9,
        "min" : 4.030129571E9,
        "sum" : 8.196495853E9,
        "standardDeviation" : 9.633390219465192E7
      }, {
        "mean" : 4.133985715E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133985715E9,
        "min" : 4.133985715E9,
        "sum" : 4.133985715E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.151655045E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.151655045E9,
        "min" : 4.151655045E9,
        "sum" : 4.151655045E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.070503793E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.070503793E9,
        "min" : 4.070503793E9,
        "sum" : 4.070503793E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.1510264435E9,
        "variance" : 7.823456485400204E14,
        "n" : 2,
        "max" : 4.170804533E9,
        "min" : 4.131248354E9,
        "sum" : 8.302052887E9,
        "standardDeviation" : 2.7970442408728905E7
      }, {
        "mean" : 4.242453754E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.242453754E9,
        "min" : 4.242453754E9,
        "sum" : 4.242453754E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.185068373E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.185068373E9,
        "min" : 4.185068373E9,
        "sum" : 4.185068373E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.164121267E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.164121267E9,
        "min" : 4.164121267E9,
        "sum" : 4.164121267E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.125748426E9,
        "variance" : 1.2327767700569672E16,
        "n" : 2,
        "max" : 4.204258832E9,
        "min" : 4.04723802E9,
        "sum" : 8.251496852E9,
        "standardDeviation" : 1.1103048095261802E8
      }, {
        "mean" : 4.22044531E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.22044531E9,
        "min" : 4.22044531E9,
        "sum" : 4.22044531E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.229076649E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.229076649E9,
        "min" : 4.229076649E9,
        "sum" : 4.229076649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.132541289E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.132541289E9,
        "min" : 4.132541289E9,
        "sum" : 4.132541289E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.165233533E9,
        "variance" : 8.398041120045E15,
        "n" : 2,
        "max" : 4.230033383E9,
        "min" : 4.100433683E9,
        "sum" : 8.330467066E9,
        "standardDeviation" : 9.16408267097422E7
      }, {
        "mean" : 4.193450802E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.193450802E9,
        "min" : 4.193450802E9,
        "sum" : 4.193450802E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.241446824E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.241446824E9,
        "min" : 4.241446824E9,
        "sum" : 4.241446824E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.142243962E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.142243962E9,
        "min" : 4.142243962E9,
        "sum" : 4.142243962E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.126814552E9,
        "variance" : 8.173987034931921E14,
        "n" : 2,
        "max" : 4.147030866E9,
        "min" : 4.106598238E9,
        "sum" : 8.253629104E9,
        "standardDeviation" : 2.8590185439993076E7
      }, {
        "mean" : 4.294081784E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.294081784E9,
        "min" : 4.294081784E9,
        "sum" : 4.294081784E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.272359357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.272359357E9,
        "min" : 4.272359357E9,
        "sum" : 4.272359357E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.143755016E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.143755016E9,
        "min" : 4.143755016E9,
        "sum" : 4.143755016E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.0736151385E9,
        "variance" : 1.6580632391454204E16,
        "n" : 2,
        "max" : 4.164666312E9,
        "min" : 3.982563965E9,
        "sum" : 8.147230277E9,
        "standardDeviation" : 1.2876580443368575E8
      }, {
        "mean" : 4.026271074E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.026271074E9,
        "min" : 4.026271074E9,
        "sum" : 4.026271074E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.14340629E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.14340629E9,
        "min" : 4.14340629E9,
        "sum" : 4.14340629E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.119767894E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.119767894E9,
        "min" : 4.119767894E9,
        "sum" : 4.119767894E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.257348966E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.257348966E9,
        "min" : 4.257348966E9,
        "sum" : 4.257348966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2300569135E9,
        "variance" : 3.8811220783764E15,
        "n" : 2,
        "max" : 4.274108713E9,
        "min" : 4.186005114E9,
        "sum" : 8.460113827E9,
        "standardDeviation" : 6.229865229984032E7
      }, {
        "mean" : 4.25954125E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.25954125E9,
        "min" : 4.25954125E9,
        "sum" : 4.25954125E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.184664859E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.184664859E9,
        "min" : 4.184664859E9,
        "sum" : 4.184664859E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.018150357E9,
        "variance" : 2.92295340488045E15,
        "n" : 2,
        "max" : 4.056379622E9,
        "min" : 3.979921092E9,
        "sum" : 8.036300714E9,
        "standardDeviation" : 5.406434504255508E7
      }, {
        "mean" : 4.046883387E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.046883387E9,
        "min" : 4.046883387E9,
        "sum" : 4.046883387E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.050726479E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.050726479E9,
        "min" : 4.050726479E9,
        "sum" : 4.050726479E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.100517199E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.100517199E9,
        "min" : 4.100517199E9,
        "sum" : 4.100517199E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.2719757E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.2719757E9,
        "min" : 4.2719757E9,
        "sum" : 4.2719757E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.326956068E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.326956068E9,
        "min" : 4.326956068E9,
        "sum" : 4.326956068E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3324778535E9,
        "variance" : 3.9325369278906056E14,
        "n" : 2,
        "max" : 4.346500223E9,
        "min" : 4.318455484E9,
        "sum" : 8.664955707E9,
        "standardDeviation" : 1.9830625123506837E7
      }, {
        "mean" : 4.423911426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.423911426E9,
        "min" : 4.423911426E9,
        "sum" : 4.423911426E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.268279056E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.268279056E9,
        "min" : 4.268279056E9,
        "sum" : 4.268279056E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2336646375E9,
        "variance" : 5.171667827100241E15,
        "n" : 2,
        "max" : 4.284515733E9,
        "min" : 4.182813542E9,
        "sum" : 8.467329275E9,
        "standardDeviation" : 7.191430891762947E7
      }, {
        "mean" : 4.21501995E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.21501995E9,
        "min" : 4.21501995E9,
        "sum" : 4.21501995E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.234168375E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.234168375E9,
        "min" : 4.234168375E9,
        "sum" : 4.234168375E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.326630672E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.326630672E9,
        "min" : 4.326630672E9,
        "sum" : 4.326630672E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1295114495E9,
        "variance" : 9.544332592964645E14,
        "n" : 2,
        "max" : 4.151356738E9,
        "min" : 4.107666161E9,
        "sum" : 8.259022899E9,
        "standardDeviation" : 3.0893903270653006E7
      }, {
        "mean" : 4.228930279E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.228930279E9,
        "min" : 4.228930279E9,
        "sum" : 4.228930279E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.238312807E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.238312807E9,
        "min" : 4.238312807E9,
        "sum" : 4.238312807E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.107596062E9,
        "variance" : 6.619104028068872E15,
        "n" : 2,
        "max" : 4.165124768E9,
        "min" : 4.050067356E9,
        "sum" : 8.215192124E9,
        "standardDeviation" : 8.135787625097445E7
      }, {
        "mean" : 4.13747609E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.13747609E9,
        "min" : 4.13747609E9,
        "sum" : 4.13747609E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.157397525E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157397525E9,
        "min" : 4.157397525E9,
        "sum" : 4.157397525E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.108495352E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.108495352E9,
        "min" : 4.108495352E9,
        "sum" : 4.108495352E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.165114449E9,
        "variance" : 1.964204292686162E15,
        "n" : 2,
        "max" : 4.196452958E9,
        "min" : 4.13377594E9,
        "sum" : 8.330228898E9,
        "standardDeviation" : 4.43193444523513E7
      }, {
        "mean" : 4.239841564E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.239841564E9,
        "min" : 4.239841564E9,
        "sum" : 4.239841564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.196376625E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.196376625E9,
        "min" : 4.196376625E9,
        "sum" : 4.196376625E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.100746495E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.100746495E9,
        "min" : 4.100746495E9,
        "sum" : 4.100746495E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.1787777095E9,
        "variance" : 4.1105209138707605E15,
        "n" : 2,
        "max" : 4.22411269E9,
        "min" : 4.133442729E9,
        "sum" : 8.357555419E9,
        "standardDeviation" : 6.41133442730198E7
      }, {
        "mean" : 4.071715246E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.071715246E9,
        "min" : 4.071715246E9,
        "sum" : 4.071715246E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.194690443E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.194690443E9,
        "min" : 4.194690443E9,
        "sum" : 4.194690443E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.169169562E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.169169562E9,
        "min" : 4.169169562E9,
        "sum" : 4.169169562E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.1388012275E9,
        "variance" : 6.074312253425645E14,
        "n" : 2,
        "max" : 4.156228666E9,
        "min" : 4.121373789E9,
        "sum" : 8.277602455E9,
        "standardDeviation" : 2.4646119884123027E7
      }, {
        "mean" : 4.123118697E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.123118697E9,
        "min" : 4.123118697E9,
        "sum" : 4.123118697E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.175129441E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.175129441E9,
        "min" : 4.175129441E9,
        "sum" : 4.175129441E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.222301851E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.222301851E9,
        "min" : 4.222301851E9,
        "sum" : 4.222301851E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.0762036875E9,
        "variance" : 5.58291066270125E13,
        "n" : 1,
        "max" : 4.08148711E9,
        "min" : 4.070920265E9,
        "sum" : 4.0762036875E9,
        "standardDeviation" : 7471887.755247164
      }, {
        "mean" : 3.978694098E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.978694098E9,
        "min" : 3.978694098E9,
        "sum" : 3.978694098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.109154273E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.109154273E9,
        "min" : 4.109154273E9,
        "sum" : 4.109154273E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.030332543E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.030332543E9,
        "min" : 4.030332543E9,
        "sum" : 4.030332543E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.075933951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.075933951E9,
        "min" : 4.075933951E9,
        "sum" : 4.075933951E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.012948453E9,
        "variance" : 2.285942660327762E15,
        "n" : 1,
        "max" : 4.046756312E9,
        "min" : 3.979140594E9,
        "sum" : 4.012948453E9,
        "standardDeviation" : 4.78115327125973E7
      }, {
        "mean" : 3.994102577E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.994102577E9,
        "min" : 3.994102577E9,
        "sum" : 3.994102577E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.984315643E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.984315643E9,
        "min" : 3.984315643E9,
        "sum" : 3.984315643E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.040194933E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.040194933E9,
        "min" : 4.040194933E9,
        "sum" : 4.040194933E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.925293393E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.925293393E9,
        "min" : 3.925293393E9,
        "sum" : 3.925293393E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.1621678485E9,
        "variance" : 4.7570445236844456E14,
        "n" : 2,
        "max" : 4.177590307E9,
        "min" : 4.14674539E9,
        "sum" : 8.324335697E9,
        "standardDeviation" : 2.181064997583622E7
      }, {
        "mean" : 4.123411836E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.123411836E9,
        "min" : 4.123411836E9,
        "sum" : 4.123411836E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.216102656E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.216102656E9,
        "min" : 4.216102656E9,
        "sum" : 4.216102656E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.085116898E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.085116898E9,
        "min" : 4.085116898E9,
        "sum" : 4.085116898E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.177100834E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.177100834E9,
        "min" : 4.177100834E9,
        "sum" : 4.177100834E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2907131985E9,
        "variance" : 3.80747579620805E13,
        "n" : 2,
        "max" : 4.295076383E9,
        "min" : 4.286350014E9,
        "sum" : 8.581426397E9,
        "standardDeviation" : 6170474.695036071
      }, {
        "mean" : 4.315849942E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.315849942E9,
        "min" : 4.315849942E9,
        "sum" : 4.315849942E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.109360433E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.109360433E9,
        "min" : 4.109360433E9,
        "sum" : 4.109360433E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.085243716E9,
        "variance" : 1.5669798459842E15,
        "n" : 2,
        "max" : 4.113234606E9,
        "min" : 4.057252826E9,
        "sum" : 8.170487432E9,
        "standardDeviation" : 3.958509626089344E7
      }, {
        "mean" : 4.082053193E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.082053193E9,
        "min" : 4.082053193E9,
        "sum" : 4.082053193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.197836726E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.197836726E9,
        "min" : 4.197836726E9,
        "sum" : 4.197836726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.028377219E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.028377219E9,
        "min" : 4.028377219E9,
        "sum" : 4.028377219E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.0985868165E9,
        "variance" : 2.3077978111653125E15,
        "n" : 2,
        "max" : 4.132555904E9,
        "min" : 4.064617729E9,
        "sum" : 8.197173633E9,
        "standardDeviation" : 4.803954424393837E7
      }, {
        "mean" : 4.162366617E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.162366617E9,
        "min" : 4.162366617E9,
        "sum" : 4.162366617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.107243339E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.107243339E9,
        "min" : 4.107243339E9,
        "sum" : 4.107243339E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.115379607E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.115379607E9,
        "min" : 4.115379607E9,
        "sum" : 4.115379607E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.095062798E9,
        "variance" : 3.5979982829041995E15,
        "n" : 2,
        "max" : 4.137477408E9,
        "min" : 4.052648188E9,
        "sum" : 8.190125596E9,
        "standardDeviation" : 5.99833167047655E7
      }, {
        "mean" : 4.153833768E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.153833768E9,
        "min" : 4.153833768E9,
        "sum" : 4.153833768E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.141720911E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.141720911E9,
        "min" : 4.141720911E9,
        "sum" : 4.141720911E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.119479244E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.119479244E9,
        "min" : 4.119479244E9,
        "sum" : 4.119479244E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.1677629015E9,
        "variance" : 3.536145388064785E15,
        "n" : 2,
        "max" : 4.209811358E9,
        "min" : 4.125714445E9,
        "sum" : 8.335525803E9,
        "standardDeviation" : 5.946549745915513E7
      }, {
        "mean" : 4.148034536E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.148034536E9,
        "min" : 4.148034536E9,
        "sum" : 4.148034536E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.205872661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.205872661E9,
        "min" : 4.205872661E9,
        "sum" : 4.205872661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.178478117E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.178478117E9,
        "min" : 4.178478117E9,
        "sum" : 4.178478117E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.420955699E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.420955699E9,
        "min" : 4.420955699E9,
        "sum" : 4.420955699E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.49372758E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.49372758E9,
        "min" : 4.49372758E9,
        "sum" : 4.49372758E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.446721456E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.446721456E9,
        "min" : 4.446721456E9,
        "sum" : 4.446721456E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4854700295E9,
        "variance" : 1.5246082851821858E16,
        "n" : 2,
        "max" : 4.57278006E9,
        "min" : 4.398159999E9,
        "sum" : 8.970940059E9,
        "standardDeviation" : 1.2347502926430857E8
      } ],
      "24" : [ {
        "mean" : 4.0322688555E9,
        "variance" : 2.856933651339045E14,
        "n" : 2,
        "max" : 4.044220704E9,
        "min" : 4.020317007E9,
        "sum" : 8.064537711E9,
        "standardDeviation" : 1.6902466244128533E7
      }, {
        "mean" : 4.098575822E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.098575822E9,
        "min" : 4.098575822E9,
        "sum" : 4.098575822E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.056460346E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.056460346E9,
        "min" : 4.056460346E9,
        "sum" : 4.056460346E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.023196816E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023196816E9,
        "min" : 4.023196816E9,
        "sum" : 4.023196816E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.0938064595E9,
        "variance" : 8.091988926846125E14,
        "n" : 2,
        "max" : 4.113921117E9,
        "min" : 4.073691802E9,
        "sum" : 8.187612919E9,
        "standardDeviation" : 2.8446421438989695E7
      }, {
        "mean" : 4.070296927E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.070296927E9,
        "min" : 4.070296927E9,
        "sum" : 4.070296927E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.179389854E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.179389854E9,
        "min" : 4.179389854E9,
        "sum" : 4.179389854E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.149671171E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.149671171E9,
        "min" : 4.149671171E9,
        "sum" : 4.149671171E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.093091437E9,
        "variance" : 4.15036745256008E14,
        "n" : 2,
        "max" : 4.107496935E9,
        "min" : 4.078685939E9,
        "sum" : 8.186182874E9,
        "standardDeviation" : 2.0372450644338496E7
      }, {
        "mean" : 4.085421697E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.085421697E9,
        "min" : 4.085421697E9,
        "sum" : 4.085421697E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.096367466E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.096367466E9,
        "min" : 4.096367466E9,
        "sum" : 4.096367466E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.08549111E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.08549111E9,
        "min" : 4.08549111E9,
        "sum" : 4.08549111E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.0739664395E9,
        "variance" : 7.756196684220039E15,
        "n" : 2,
        "max" : 4.136240819E9,
        "min" : 4.01169206E9,
        "sum" : 8.147932879E9,
        "standardDeviation" : 8.806927207726903E7
      }, {
        "mean" : 4.179040304E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.179040304E9,
        "min" : 4.179040304E9,
        "sum" : 4.179040304E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.217482658E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.217482658E9,
        "min" : 4.217482658E9,
        "sum" : 4.217482658E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.107070752E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.107070752E9,
        "min" : 4.107070752E9,
        "sum" : 4.107070752E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.1873217785E9,
        "variance" : 6.625690056050159E15,
        "n" : 2,
        "max" : 4.244879098E9,
        "min" : 4.129764459E9,
        "sum" : 8.374643557E9,
        "standardDeviation" : 8.13983418507414E7
      }, {
        "mean" : 4.25895752E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.25895752E9,
        "min" : 4.25895752E9,
        "sum" : 4.25895752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.204952417E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.204952417E9,
        "min" : 4.204952417E9,
        "sum" : 4.204952417E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.300717808E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.300717808E9,
        "min" : 4.300717808E9,
        "sum" : 4.300717808E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.19111014E9,
        "variance" : 2.6352687779735115E15,
        "n" : 2,
        "max" : 4.227409374E9,
        "min" : 4.154810906E9,
        "sum" : 8.38222028E9,
        "standardDeviation" : 5.133486902655457E7
      }, {
        "mean" : 4.187472271E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.187472271E9,
        "min" : 4.187472271E9,
        "sum" : 4.187472271E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.189064813E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.189064813E9,
        "min" : 4.189064813E9,
        "sum" : 4.189064813E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.206643696E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.206643696E9,
        "min" : 4.206643696E9,
        "sum" : 4.206643696E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.30749445E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.30749445E9,
        "min" : 4.30749445E9,
        "sum" : 4.30749445E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1697071845E9,
        "variance" : 5.2683570034651256E14,
        "n" : 2,
        "max" : 4.185937337E9,
        "min" : 4.153477032E9,
        "sum" : 8.339414369E9,
        "standardDeviation" : 2.2952901784883596E7
      }, {
        "mean" : 4.238771146E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.238771146E9,
        "min" : 4.238771146E9,
        "sum" : 4.238771146E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.278469494E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.278469494E9,
        "min" : 4.278469494E9,
        "sum" : 4.278469494E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.372016029E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.372016029E9,
        "min" : 4.372016029E9,
        "sum" : 4.372016029E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.319112241E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.319112241E9,
        "min" : 4.319112241E9,
        "sum" : 4.319112241E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.383941619E9,
        "variance" : 2.691057548205E15,
        "n" : 2,
        "max" : 4.420623069E9,
        "min" : 4.347260169E9,
        "sum" : 8.767883238E9,
        "standardDeviation" : 5.1875404077510566E7
      }, {
        "mean" : 4.26416067E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.26416067E9,
        "min" : 4.26416067E9,
        "sum" : 4.26416067E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.196567666E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.196567666E9,
        "min" : 4.196567666E9,
        "sum" : 4.196567666E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.28663165E9,
        "variance" : 3.08873930178578E14,
        "n" : 2,
        "max" : 4.299058917E9,
        "min" : 4.274204383E9,
        "sum" : 8.5732633E9,
        "standardDeviation" : 1.7574809534631606E7
      }, {
        "mean" : 4.369538774E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.369538774E9,
        "min" : 4.369538774E9,
        "sum" : 4.369538774E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.217974219E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.217974219E9,
        "min" : 4.217974219E9,
        "sum" : 4.217974219E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.274398899E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.274398899E9,
        "min" : 4.274398899E9,
        "sum" : 4.274398899E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.260698253E9,
        "variance" : 1.6782497247862078E15,
        "n" : 2,
        "max" : 4.289665905E9,
        "min" : 4.231730601E9,
        "sum" : 8.521396506E9,
        "standardDeviation" : 4.096644632850411E7
      }, {
        "mean" : 4.266231839E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.266231839E9,
        "min" : 4.266231839E9,
        "sum" : 4.266231839E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.280717328E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.280717328E9,
        "min" : 4.280717328E9,
        "sum" : 4.280717328E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.273276198E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.273276198E9,
        "min" : 4.273276198E9,
        "sum" : 4.273276198E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2807543765E9,
        "variance" : 2.5261559764333445E15,
        "n" : 2,
        "max" : 4.316294185E9,
        "min" : 4.245214568E9,
        "sum" : 8.561508753E9,
        "standardDeviation" : 5.02608791848426E7
      }, {
        "mean" : 4.377784681E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.377784681E9,
        "min" : 4.377784681E9,
        "sum" : 4.377784681E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.255627261E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.255627261E9,
        "min" : 4.255627261E9,
        "sum" : 4.255627261E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.146308821E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.146308821E9,
        "min" : 4.146308821E9,
        "sum" : 4.146308821E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.19891269E9,
        "variance" : 1.093531196192E12,
        "n" : 2,
        "max" : 4.199652126E9,
        "min" : 4.198173254E9,
        "sum" : 8.39782538E9,
        "standardDeviation" : 1045720.4197069119
      }, {
        "mean" : 4.235719144E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.235719144E9,
        "min" : 4.235719144E9,
        "sum" : 4.235719144E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.162744146E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.162744146E9,
        "min" : 4.162744146E9,
        "sum" : 4.162744146E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.343939134E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.343939134E9,
        "min" : 4.343939134E9,
        "sum" : 4.343939134E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.295121237E9,
        "variance" : 2.4449744840322048E16,
        "n" : 2,
        "max" : 4.405687382E9,
        "min" : 4.184555092E9,
        "sum" : 8.590242474E9,
        "standardDeviation" : 1.5636414179831016E8
      }, {
        "mean" : 4.250731152E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.250731152E9,
        "min" : 4.250731152E9,
        "sum" : 4.250731152E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.270050153E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.270050153E9,
        "min" : 4.270050153E9,
        "sum" : 4.270050153E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.116709283E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.116709283E9,
        "min" : 4.116709283E9,
        "sum" : 4.116709283E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.163945478E9,
        "variance" : 7.561149393799998E10,
        "n" : 2,
        "max" : 4.164139915E9,
        "min" : 4.163751041E9,
        "sum" : 8.327890956E9,
        "standardDeviation" : 274975.44242713746
      }, {
        "mean" : 4.228507596E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.228507596E9,
        "min" : 4.228507596E9,
        "sum" : 4.228507596E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.132969773E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.132969773E9,
        "min" : 4.132969773E9,
        "sum" : 4.132969773E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.401313917E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.401313917E9,
        "min" : 4.401313917E9,
        "sum" : 4.401313917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.304889707E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.304889707E9,
        "min" : 4.304889707E9,
        "sum" : 4.304889707E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3758168955E9,
        "variance" : 1.0794613425693718E16,
        "n" : 2,
        "max" : 4.44928326E9,
        "min" : 4.302350531E9,
        "sum" : 8.751633791E9,
        "standardDeviation" : 1.0389712905414528E8
      }, {
        "mean" : 4.457340857E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.457340857E9,
        "min" : 4.457340857E9,
        "sum" : 4.457340857E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.461156998E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.461156998E9,
        "min" : 4.461156998E9,
        "sum" : 4.461156998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.331983231E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.331983231E9,
        "min" : 4.331983231E9,
        "sum" : 4.331983231E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.447621863E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.447621863E9,
        "min" : 4.447621863E9,
        "sum" : 4.447621863E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.422003106E9,
        "variance" : 6.737808123984243E15,
        "n" : 2,
        "max" : 4.480045367E9,
        "min" : 4.363960845E9,
        "sum" : 8.844006212E9,
        "standardDeviation" : 8.208415269699897E7
      } ],
      "10" : [ {
        "mean" : 4.38232153E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.38232153E9,
        "min" : 4.38232153E9,
        "sum" : 4.38232153E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.210567998E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.210567998E9,
        "min" : 4.210567998E9,
        "sum" : 4.210567998E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3210747495E9,
        "variance" : 4.4318405728828125E15,
        "n" : 2,
        "max" : 4.368148312E9,
        "min" : 4.274001187E9,
        "sum" : 8.642149499E9,
        "standardDeviation" : 6.657207051671754E7
      }, {
        "mean" : 4.219364037E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.219364037E9,
        "min" : 4.219364037E9,
        "sum" : 4.219364037E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.229809338E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.229809338E9,
        "min" : 4.229809338E9,
        "sum" : 4.229809338E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2570043545E9,
        "variance" : 1.764405733435805E14,
        "n" : 2,
        "max" : 4.26639692E9,
        "min" : 4.247611789E9,
        "sum" : 8.514008709E9,
        "standardDeviation" : 1.3283093515577631E7
      }, {
        "mean" : 4.254643064E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.254643064E9,
        "min" : 4.254643064E9,
        "sum" : 4.254643064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.242275959E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.242275959E9,
        "min" : 4.242275959E9,
        "sum" : 4.242275959E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.359207329E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.359207329E9,
        "min" : 4.359207329E9,
        "sum" : 4.359207329E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.214888314E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.214888314E9,
        "min" : 4.214888314E9,
        "sum" : 4.214888314E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.33908703E9,
        "variance" : 2.9485341392720006E14,
        "n" : 2,
        "max" : 4.35122897E9,
        "min" : 4.32694509E9,
        "sum" : 8.67817406E9,
        "standardDeviation" : 1.717129622152038E7
      }, {
        "mean" : 4.182386921E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.182386921E9,
        "min" : 4.182386921E9,
        "sum" : 4.182386921E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.328400244E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.328400244E9,
        "min" : 4.328400244E9,
        "sum" : 4.328400244E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2605225485E9,
        "variance" : 3.941567464201205E14,
        "n" : 2,
        "max" : 4.274561009E9,
        "min" : 4.246484088E9,
        "sum" : 8.521045097E9,
        "standardDeviation" : 1.985338123393898E7
      }, {
        "mean" : 4.209468201E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.209468201E9,
        "min" : 4.209468201E9,
        "sum" : 4.209468201E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.31678211E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.31678211E9,
        "min" : 4.31678211E9,
        "sum" : 4.31678211E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.314582951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.314582951E9,
        "min" : 4.314582951E9,
        "sum" : 4.314582951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2386010695E9,
        "variance" : 4.3389424653125005E12,
        "n" : 2,
        "max" : 4.240073982E9,
        "min" : 4.237128157E9,
        "sum" : 8.477202139E9,
        "standardDeviation" : 2083012.8336888615
      }, {
        "mean" : 4.286310524E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286310524E9,
        "min" : 4.286310524E9,
        "sum" : 4.286310524E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.240722074E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.240722074E9,
        "min" : 4.240722074E9,
        "sum" : 4.240722074E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.116697355E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.116697355E9,
        "min" : 4.116697355E9,
        "sum" : 4.116697355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2027627595E9,
        "variance" : 1.3053684177184502E13,
        "n" : 2,
        "max" : 4.205317528E9,
        "min" : 4.200207991E9,
        "sum" : 8.405525519E9,
        "standardDeviation" : 3612988.2614235687
      }, {
        "mean" : 4.219094962E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.219094962E9,
        "min" : 4.219094962E9,
        "sum" : 4.219094962E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.157106402E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157106402E9,
        "min" : 4.157106402E9,
        "sum" : 4.157106402E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.1323106295E9,
        "variance" : 5.177950250981513E15,
        "n" : 2,
        "max" : 4.183192602E9,
        "min" : 4.081428657E9,
        "sum" : 8.264621259E9,
        "standardDeviation" : 7.195797558979486E7
      }, {
        "mean" : 4.168767553E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.168767553E9,
        "min" : 4.168767553E9,
        "sum" : 4.168767553E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.136891344E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.136891344E9,
        "min" : 4.136891344E9,
        "sum" : 4.136891344E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.130085618E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.130085618E9,
        "min" : 4.130085618E9,
        "sum" : 4.130085618E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.340323093E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.340323093E9,
        "min" : 4.340323093E9,
        "sum" : 4.340323093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.267849498E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.267849498E9,
        "min" : 4.267849498E9,
        "sum" : 4.267849498E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.337343145E9,
        "variance" : 1.3113167527078582E15,
        "n" : 2,
        "max" : 4.362948972E9,
        "min" : 4.311737318E9,
        "sum" : 8.67468629E9,
        "standardDeviation" : 3.6212107819179185E7
      }, {
        "mean" : 4.376886591E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.376886591E9,
        "min" : 4.376886591E9,
        "sum" : 4.376886591E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.414299293E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.414299293E9,
        "min" : 4.414299293E9,
        "sum" : 4.414299293E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.288295801E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.288295801E9,
        "min" : 4.288295801E9,
        "sum" : 4.288295801E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3947796275E9,
        "variance" : 7.716544339504501E12,
        "n" : 2,
        "max" : 4.396743876E9,
        "min" : 4.392815379E9,
        "sum" : 8.789559255E9,
        "standardDeviation" : 2777866.8685710086
      }, {
        "mean" : 4.368501447E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.368501447E9,
        "min" : 4.368501447E9,
        "sum" : 4.368501447E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.236207036E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.236207036E9,
        "min" : 4.236207036E9,
        "sum" : 4.236207036E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.19403501E9,
        "variance" : 3.052466291114312E15,
        "n" : 2,
        "max" : 4.233102044E9,
        "min" : 4.154967976E9,
        "sum" : 8.38807002E9,
        "standardDeviation" : 5.524912932449082E7
      }, {
        "mean" : 4.250692913E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.250692913E9,
        "min" : 4.250692913E9,
        "sum" : 4.250692913E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.245037277E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.245037277E9,
        "min" : 4.245037277E9,
        "sum" : 4.245037277E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.662850249E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.662850249E9,
        "min" : 4.662850249E9,
        "sum" : 4.662850249E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.557940589E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.557940589E9,
        "min" : 4.557940589E9,
        "sum" : 4.557940589E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.647490426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.647490426E9,
        "min" : 4.647490426E9,
        "sum" : 4.647490426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.664304603E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.664304603E9,
        "min" : 4.664304603E9,
        "sum" : 4.664304603E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.701685629E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.701685629E9,
        "min" : 4.701685629E9,
        "sum" : 4.701685629E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.206219648E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.206219648E9,
        "min" : 4.206219648E9,
        "sum" : 4.206219648E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2488784085E9,
        "variance" : 9.493405069282245E14,
        "n" : 2,
        "max" : 4.270665337E9,
        "min" : 4.22709148E9,
        "sum" : 8.497756817E9,
        "standardDeviation" : 3.0811369767152913E7
      }, {
        "mean" : 4.268018661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.268018661E9,
        "min" : 4.268018661E9,
        "sum" : 4.268018661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.305891232E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.305891232E9,
        "min" : 4.305891232E9,
        "sum" : 4.305891232E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.318433391E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.318433391E9,
        "min" : 4.318433391E9,
        "sum" : 4.318433391E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3324744775E9,
        "variance" : 1.4156046115450312E16,
        "n" : 2,
        "max" : 4.416605465E9,
        "min" : 4.24834349E9,
        "sum" : 8.664948955E9,
        "standardDeviation" : 1.1897918353834133E8
      }, {
        "mean" : 4.240537207E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.240537207E9,
        "min" : 4.240537207E9,
        "sum" : 4.240537207E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.182645745E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.182645745E9,
        "min" : 4.182645745E9,
        "sum" : 4.182645745E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.310815468E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.310815468E9,
        "min" : 4.310815468E9,
        "sum" : 4.310815468E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2132551435E9,
        "variance" : 1.1178980788036258E16,
        "n" : 2,
        "max" : 4.288018038E9,
        "min" : 4.138492249E9,
        "sum" : 8.426510287E9,
        "standardDeviation" : 1.0573069936416887E8
      }, {
        "mean" : 4.298414455E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.298414455E9,
        "min" : 4.298414455E9,
        "sum" : 4.298414455E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.24950099E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.24950099E9,
        "min" : 4.24950099E9,
        "sum" : 4.24950099E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.095442016E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.095442016E9,
        "min" : 4.095442016E9,
        "sum" : 4.095442016E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.180633533E9,
        "variance" : 3.6778891174272194E14,
        "n" : 2,
        "max" : 4.194194302E9,
        "min" : 4.167072764E9,
        "sum" : 8.361267066E9,
        "standardDeviation" : 1.9177823436008632E7
      }, {
        "mean" : 4.203112009E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.203112009E9,
        "min" : 4.203112009E9,
        "sum" : 4.203112009E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.10908109E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.10908109E9,
        "min" : 4.10908109E9,
        "sum" : 4.10908109E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.397989116E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.397989116E9,
        "min" : 4.397989116E9,
        "sum" : 4.397989116E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.185329833E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.185329833E9,
        "min" : 4.185329833E9,
        "sum" : 4.185329833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.348143224E9,
        "variance" : 7.25796389425538E14,
        "n" : 2,
        "max" : 4.367193111E9,
        "min" : 4.329093337E9,
        "sum" : 8.696286448E9,
        "standardDeviation" : 2.6940608557074912E7
      }, {
        "mean" : 4.439289798E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.439289798E9,
        "min" : 4.439289798E9,
        "sum" : 4.439289798E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.258922527E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.258922527E9,
        "min" : 4.258922527E9,
        "sum" : 4.258922527E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1737570075E9,
        "variance" : 1.5232650544210322E16,
        "n" : 2,
        "max" : 4.261028568E9,
        "min" : 4.086485447E9,
        "sum" : 8.347514015E9,
        "standardDeviation" : 1.234206244685641E8
      }, {
        "mean" : 4.212039337E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.212039337E9,
        "min" : 4.212039337E9,
        "sum" : 4.212039337E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.14512761E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.14512761E9,
        "min" : 4.14512761E9,
        "sum" : 4.14512761E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.255662746E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.255662746E9,
        "min" : 4.255662746E9,
        "sum" : 4.255662746E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2324110675E9,
        "variance" : 7.237295331907224E15,
        "n" : 2,
        "max" : 4.292566264E9,
        "min" : 4.172255871E9,
        "sum" : 8.464822135E9,
        "standardDeviation" : 8.507229473751853E7
      }, {
        "mean" : 4.331962263E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.331962263E9,
        "min" : 4.331962263E9,
        "sum" : 4.331962263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.20200711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.20200711E9,
        "min" : 4.20200711E9,
        "sum" : 4.20200711E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.25378947E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.25378947E9,
        "min" : 4.25378947E9,
        "sum" : 4.25378947E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2534862995E9,
        "variance" : 6.743909630229521E15,
        "n" : 2,
        "max" : 4.311554835E9,
        "min" : 4.195417764E9,
        "sum" : 8.506972599E9,
        "standardDeviation" : 8.212131045124353E7
      }, {
        "mean" : 4.322654291E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.322654291E9,
        "min" : 4.322654291E9,
        "sum" : 4.322654291E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.197238931E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.197238931E9,
        "min" : 4.197238931E9,
        "sum" : 4.197238931E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.284552098E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.284552098E9,
        "min" : 4.284552098E9,
        "sum" : 4.284552098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.187371217E9,
        "variance" : 8.792856165160713E15,
        "n" : 2,
        "max" : 4.253676783E9,
        "min" : 4.121065651E9,
        "sum" : 8.374742434E9,
        "standardDeviation" : 9.377023069802438E7
      }, {
        "mean" : 4.271033019E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.271033019E9,
        "min" : 4.271033019E9,
        "sum" : 4.271033019E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.227370641E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.227370641E9,
        "min" : 4.227370641E9,
        "sum" : 4.227370641E9,
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
      "meanOld" : 395.3660695572689,
      "meanCurrent" : 1707.1392857142855,
      "deviationOld" : 130.6703957572537,
      "deviationCurrent" : 139.69248061442542,
      "vms" : 28,
      "callsOld" : 101248,
      "calls" : 150,
      "tvalue" : -36.28808408159175,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 822.8155340842029,
    "inVMDeviation" : 511.35173221207214,
    "ess" : 1,
    "values" : [ 2045.0, 1867.2, 1546.4, 4176.2, 4288.6, 1818.0, 1693.6, 1747.8, 1554.2, 1745.4, 1673.3, 2026.2, 1723.4, 1598.4, 1713.8, 1677.6, 1646.2, 1531.5, 1531.8, 1543.2, 1782.2, 1685.8, 1584.4, 1735.8, 1754.8, 1824.2, 1583.5, 1659.7, 1588.3, 1918.2 ],
    "valuesPredecessor" : [ 335.81992018013807, 342.6480518197092, 351.69667809693465, 334.3759772349821, 689.1173657315368, 2999.846276395134, 308.8942458376469, 414.1689915483455, 360.1915555555556, 358.1996299369912, 345.1443376068376, 648.9531190838591, 349.62749111713345, 368.9040395365359, 359.91900357044176, 355.87484893364945, 330.3822735141239, 327.3830099466948, 366.0004025515577, 807.579553180436, 356.1402821869489, 336.6072825983288, 3230.7826697530877, 356.1113660087232, 327.5723349958245, 651.6488948971956, 348.1142118096745, 335.7670944588161, 309.5910075015295, 293.8169781633799 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1886.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1886.0,
          "min" : 1886.0,
          "sum" : 1886.0,
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
          "mean" : 1700.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1700.0,
          "min" : 1700.0,
          "sum" : 1700.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2703.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2703.0,
          "min" : 2703.0,
          "sum" : 2703.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2047.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2047.0,
          "min" : 2047.0,
          "sum" : 2047.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 2030.0,
          "variance" : 215168.0,
          "n" : 1,
          "max" : 2358.0,
          "min" : 1702.0,
          "sum" : 2030.0,
          "standardDeviation" : 463.86204845837517
        }, {
          "mean" : 1952.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1952.0,
          "min" : 1952.0,
          "sum" : 1952.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1786.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1786.0,
          "min" : 1786.0,
          "sum" : 1786.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1852.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1852.0,
          "min" : 1852.0,
          "sum" : 1852.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1716.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1716.0,
          "min" : 1716.0,
          "sum" : 1716.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1797.0,
          "variance" : 406802.00000000006,
          "n" : 1,
          "max" : 2248.0,
          "min" : 1346.0,
          "sum" : 1797.0,
          "standardDeviation" : 637.8103166302659
        }, {
          "mean" : 1522.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1522.0,
          "min" : 1522.0,
          "sum" : 1522.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1494.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1494.0,
          "min" : 1494.0,
          "sum" : 1494.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1451.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1451.0,
          "min" : 1451.0,
          "sum" : 1451.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1468.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1468.0,
          "min" : 1468.0,
          "sum" : 1468.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 2684.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2684.0,
          "min" : 2684.0,
          "sum" : 2684.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2138.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2138.0,
          "min" : 2138.0,
          "sum" : 2138.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 11955.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 11955.0,
          "min" : 11955.0,
          "sum" : 11955.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2028.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2028.0,
          "min" : 2028.0,
          "sum" : 2028.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2076.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2076.0,
          "min" : 2076.0,
          "sum" : 2076.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 1780.0,
          "variance" : 11552.0,
          "n" : 1,
          "max" : 1856.0,
          "min" : 1704.0,
          "sum" : 1780.0,
          "standardDeviation" : 107.48023074035522
        }, {
          "mean" : 1989.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1989.0,
          "min" : 1989.0,
          "sum" : 1989.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2257.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2257.0,
          "min" : 2257.0,
          "sum" : 2257.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 12978.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 12978.0,
          "min" : 12978.0,
          "sum" : 12978.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2439.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2439.0,
          "min" : 2439.0,
          "sum" : 2439.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 2026.0,
          "variance" : 175232.00000000003,
          "n" : 1,
          "max" : 2322.0,
          "min" : 1730.0,
          "sum" : 2026.0,
          "standardDeviation" : 418.60721446243616
        }, {
          "mean" : 1680.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1680.0,
          "min" : 1680.0,
          "sum" : 1680.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1586.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1586.0,
          "min" : 1586.0,
          "sum" : 1586.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1851.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1851.0,
          "min" : 1851.0,
          "sum" : 1851.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1947.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1947.0,
          "min" : 1947.0,
          "sum" : 1947.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 1722.0,
          "variance" : 25992.0,
          "n" : 1,
          "max" : 1836.0,
          "min" : 1608.0,
          "sum" : 1722.0,
          "standardDeviation" : 161.22034611053283
        }, {
          "mean" : 1476.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1476.0,
          "min" : 1476.0,
          "sum" : 1476.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2079.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2079.0,
          "min" : 2079.0,
          "sum" : 2079.0,
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
          "mean" : 1684.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1684.0,
          "min" : 1684.0,
          "sum" : 1684.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 1722.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1722.0,
          "min" : 1722.0,
          "sum" : 1722.0,
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
          "mean" : 1617.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1617.0,
          "min" : 1617.0,
          "sum" : 1617.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1786.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1786.0,
          "min" : 1786.0,
          "sum" : 1786.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1926.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1926.0,
          "min" : 1926.0,
          "sum" : 1926.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1495.5,
          "variance" : 21424.499999999996,
          "n" : 2,
          "max" : 1599.0,
          "min" : 1392.0,
          "sum" : 2991.0,
          "standardDeviation" : 146.37110370561533
        }, {
          "mean" : 1601.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1601.0,
          "min" : 1601.0,
          "sum" : 1601.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1647.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1647.0,
          "min" : 1647.0,
          "sum" : 1647.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1532.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1532.0,
          "min" : 1532.0,
          "sum" : 1532.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 1770.0,
          "variance" : 121032.00000000001,
          "n" : 1,
          "max" : 2016.0,
          "min" : 1524.0,
          "sum" : 1770.0,
          "standardDeviation" : 347.8965363437814
        }, {
          "mean" : 1697.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1697.0,
          "min" : 1697.0,
          "sum" : 1697.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1826.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1826.0,
          "min" : 1826.0,
          "sum" : 1826.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1605.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1605.0,
          "min" : 1605.0,
          "sum" : 1605.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1829.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1829.0,
          "min" : 1829.0,
          "sum" : 1829.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1952.5,
          "variance" : 398724.5,
          "n" : 1,
          "max" : 2399.0,
          "min" : 1506.0,
          "sum" : 1952.5,
          "standardDeviation" : 631.4463555995869
        }, {
          "mean" : 1763.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1763.0,
          "min" : 1763.0,
          "sum" : 1763.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1637.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1637.0,
          "min" : 1637.0,
          "sum" : 1637.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1672.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1672.0,
          "min" : 1672.0,
          "sum" : 1672.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1342.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1342.0,
          "min" : 1342.0,
          "sum" : 1342.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 2291.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2291.0,
          "min" : 2291.0,
          "sum" : 2291.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2178.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2178.0,
          "min" : 2178.0,
          "sum" : 2178.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2091.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2091.0,
          "min" : 2091.0,
          "sum" : 2091.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2010.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2010.0,
          "min" : 2010.0,
          "sum" : 2010.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1561.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1561.0,
          "min" : 1561.0,
          "sum" : 1561.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1652.0,
          "variance" : 27378.0,
          "n" : 1,
          "max" : 1769.0,
          "min" : 1535.0,
          "sum" : 1652.0,
          "standardDeviation" : 165.46298679765212
        }, {
          "mean" : 1992.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1992.0,
          "min" : 1992.0,
          "sum" : 1992.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1357.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1357.0,
          "min" : 1357.0,
          "sum" : 1357.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1764.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1764.0,
          "min" : 1764.0,
          "sum" : 1764.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1852.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1852.0,
          "min" : 1852.0,
          "sum" : 1852.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 1629.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1629.0,
          "min" : 1629.0,
          "sum" : 1629.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1968.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1968.0,
          "min" : 1968.0,
          "sum" : 1968.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1540.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1540.0,
          "min" : 1540.0,
          "sum" : 1540.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1365.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1365.0,
          "min" : 1365.0,
          "sum" : 1365.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1490.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1490.0,
          "min" : 1490.0,
          "sum" : 1490.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1629.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1629.0,
          "min" : 1629.0,
          "sum" : 1629.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1673.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1673.0,
          "min" : 1673.0,
          "sum" : 1673.0,
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
          "mean" : 2225.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2225.0,
          "min" : 2225.0,
          "sum" : 2225.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1452.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1452.0,
          "min" : 1452.0,
          "sum" : 1452.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 1774.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1774.0,
          "min" : 1774.0,
          "sum" : 1774.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1664.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1664.0,
          "min" : 1664.0,
          "sum" : 1664.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1624.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1624.0,
          "min" : 1624.0,
          "sum" : 1624.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1663.0,
          "variance" : 71.99999999999999,
          "n" : 2,
          "max" : 1669.0,
          "min" : 1657.0,
          "sum" : 3326.0,
          "standardDeviation" : 8.48528137423857
        } ],
        "16" : [ {
          "mean" : 1761.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1761.0,
          "min" : 1761.0,
          "sum" : 1761.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1088.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1088.0,
          "min" : 1088.0,
          "sum" : 1088.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1361.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1361.0,
          "min" : 1361.0,
          "sum" : 1361.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2010.5,
          "variance" : 364.50000000000006,
          "n" : 2,
          "max" : 2024.0,
          "min" : 1997.0,
          "sum" : 4021.0,
          "standardDeviation" : 19.091883092036785
        } ],
        "17" : [ {
          "mean" : 1958.5,
          "variance" : 30012.500000000004,
          "n" : 1,
          "max" : 2081.0,
          "min" : 1836.0,
          "sum" : 1958.5,
          "standardDeviation" : 173.24116139070415
        }, {
          "mean" : 1570.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1570.0,
          "min" : 1570.0,
          "sum" : 1570.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1341.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1341.0,
          "min" : 1341.0,
          "sum" : 1341.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1417.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1417.0,
          "min" : 1417.0,
          "sum" : 1417.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1371.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1371.0,
          "min" : 1371.0,
          "sum" : 1371.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1676.0,
          "variance" : 126002.00000000001,
          "n" : 1,
          "max" : 1927.0,
          "min" : 1425.0,
          "sum" : 1676.0,
          "standardDeviation" : 354.9676041556469
        }, {
          "mean" : 1588.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1588.0,
          "min" : 1588.0,
          "sum" : 1588.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1396.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1396.0,
          "min" : 1396.0,
          "sum" : 1396.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1628.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1628.0,
          "min" : 1628.0,
          "sum" : 1628.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1371.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1371.0,
          "min" : 1371.0,
          "sum" : 1371.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 1422.0,
          "variance" : 48671.99999999999,
          "n" : 1,
          "max" : 1578.0,
          "min" : 1266.0,
          "sum" : 1422.0,
          "standardDeviation" : 220.61731573020282
        }, {
          "mean" : 1390.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1390.0,
          "min" : 1390.0,
          "sum" : 1390.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1806.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1806.0,
          "min" : 1806.0,
          "sum" : 1806.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1783.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1783.0,
          "min" : 1783.0,
          "sum" : 1783.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1315.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1315.0,
          "min" : 1315.0,
          "sum" : 1315.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1627.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1627.0,
          "min" : 1627.0,
          "sum" : 1627.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1659.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1659.0,
          "min" : 1659.0,
          "sum" : 1659.0,
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
          "mean" : 1772.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1772.0,
          "min" : 1772.0,
          "sum" : 1772.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2205.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2205.0,
          "min" : 2205.0,
          "sum" : 2205.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1715.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1715.0,
          "min" : 1715.0,
          "sum" : 1715.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1905.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1905.0,
          "min" : 1905.0,
          "sum" : 1905.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1937.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1937.0,
          "min" : 1937.0,
          "sum" : 1937.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1459.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1459.0,
          "min" : 1459.0,
          "sum" : 1459.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1413.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1413.0,
          "min" : 1413.0,
          "sum" : 1413.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 1595.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1595.0,
          "min" : 1595.0,
          "sum" : 1595.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1582.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1582.0,
          "min" : 1582.0,
          "sum" : 1582.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1517.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1517.0,
          "min" : 1517.0,
          "sum" : 1517.0,
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
          "mean" : 1719.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1719.0,
          "min" : 1719.0,
          "sum" : 1719.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 1663.0,
          "variance" : 48671.99999999999,
          "n" : 2,
          "max" : 1819.0,
          "min" : 1507.0,
          "sum" : 3326.0,
          "standardDeviation" : 220.61731573020282
        }, {
          "mean" : 2012.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2012.0,
          "min" : 2012.0,
          "sum" : 2012.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1607.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1607.0,
          "min" : 1607.0,
          "sum" : 1607.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1734.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1734.0,
          "min" : 1734.0,
          "sum" : 1734.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1874.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1874.0,
          "min" : 1874.0,
          "sum" : 1874.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1805.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1805.0,
          "min" : 1805.0,
          "sum" : 1805.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1803.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1803.0,
          "min" : 1803.0,
          "sum" : 1803.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1679.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1679.0,
          "min" : 1679.0,
          "sum" : 1679.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1613.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1613.0,
          "min" : 1613.0,
          "sum" : 1613.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 1762.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1762.0,
          "min" : 1762.0,
          "sum" : 1762.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1848.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1848.0,
          "min" : 1848.0,
          "sum" : 1848.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2044.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2044.0,
          "min" : 2044.0,
          "sum" : 2044.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2196.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2196.0,
          "min" : 2196.0,
          "sum" : 2196.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1271.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1271.0,
          "min" : 1271.0,
          "sum" : 1271.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1758.5,
          "variance" : 122512.49999999999,
          "n" : 1,
          "max" : 2006.0,
          "min" : 1511.0,
          "sum" : 1758.5,
          "standardDeviation" : 350.017856687341
        }, {
          "mean" : 1641.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1641.0,
          "min" : 1641.0,
          "sum" : 1641.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1434.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1434.0,
          "min" : 1434.0,
          "sum" : 1434.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1877.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1877.0,
          "min" : 1877.0,
          "sum" : 1877.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1207.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1207.0,
          "min" : 1207.0,
          "sum" : 1207.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1602.5,
          "variance" : 115680.50000000001,
          "n" : 1,
          "max" : 1843.0,
          "min" : 1362.0,
          "sum" : 1602.5,
          "standardDeviation" : 340.1183617507294
        }, {
          "mean" : 2111.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2111.0,
          "min" : 2111.0,
          "sum" : 2111.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1556.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1556.0,
          "min" : 1556.0,
          "sum" : 1556.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1610.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1610.0,
          "min" : 1610.0,
          "sum" : 1610.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1419.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1419.0,
          "min" : 1419.0,
          "sum" : 1419.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1314.5,
          "variance" : 44700.5,
          "n" : 1,
          "max" : 1464.0,
          "min" : 1165.0,
          "sum" : 1314.5,
          "standardDeviation" : 211.4249275747777
        }, {
          "mean" : 1193.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1193.0,
          "min" : 1193.0,
          "sum" : 1193.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1367.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1367.0,
          "min" : 1367.0,
          "sum" : 1367.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2145.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2145.0,
          "min" : 2145.0,
          "sum" : 2145.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1922.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1922.0,
          "min" : 1922.0,
          "sum" : 1922.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1981.0,
          "variance" : 347778.0,
          "n" : 1,
          "max" : 2398.0,
          "min" : 1564.0,
          "sum" : 1981.0,
          "standardDeviation" : 589.7270555095806
        }, {
          "mean" : 1761.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1761.0,
          "min" : 1761.0,
          "sum" : 1761.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1894.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1894.0,
          "min" : 1894.0,
          "sum" : 1894.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2279.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2279.0,
          "min" : 2279.0,
          "sum" : 2279.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1676.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1676.0,
          "min" : 1676.0,
          "sum" : 1676.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1041.9538784067074,
          "variance" : 2607414.405431357,
          "n" : 472,
          "max" : 27760.0,
          "min" : 83.0,
          "sum" : 491802.2306079659,
          "standardDeviation" : 1614.7490224277446
        }, {
          "mean" : 332.46003898635485,
          "variance" : 1837462.50670078,
          "n" : 513,
          "max" : 21648.0,
          "min" : 43.0,
          "sum" : 170552.00000000003,
          "standardDeviation" : 1355.5303414902892
        }, {
          "mean" : 207.8075880758806,
          "variance" : 21665.422116177688,
          "n" : 369,
          "max" : 847.0,
          "min" : 20.0,
          "sum" : 76680.99999999994,
          "standardDeviation" : 147.19178685027805
        }, {
          "mean" : 198.98177083333334,
          "variance" : 21701.448752991742,
          "n" : 384,
          "max" : 744.0,
          "min" : 37.0,
          "sum" : 76409.0,
          "standardDeviation" : 147.31411593256004
        }, {
          "mean" : 221.37327188940102,
          "variance" : 251048.742563404,
          "n" : 434,
          "max" : 10152.0,
          "min" : 26.0,
          "sum" : 96076.00000000004,
          "standardDeviation" : 501.04764500335096
        }, {
          "mean" : 204.16531165311662,
          "variance" : 21479.747054318355,
          "n" : 369,
          "max" : 828.0,
          "min" : 39.0,
          "sum" : 75337.00000000003,
          "standardDeviation" : 146.55970474287383
        }, {
          "mean" : 173.67326732673268,
          "variance" : 19225.987273665323,
          "n" : 404,
          "max" : 740.0,
          "min" : 20.0,
          "sum" : 70164.0,
          "standardDeviation" : 138.65780639280763
        }, {
          "mean" : 172.6449275362319,
          "variance" : 26455.047952416047,
          "n" : 414,
          "max" : 990.0,
          "min" : 15.0,
          "sum" : 71475.00000000001,
          "standardDeviation" : 162.65007824288327
        }, {
          "mean" : 306.00000000000006,
          "variance" : 71620.8,
          "n" : 16,
          "max" : 1064.0,
          "min" : 52.0,
          "sum" : 4896.000000000001,
          "standardDeviation" : 267.6206270077103
        } ],
        "1" : [ {
          "mean" : 1142.4242424242432,
          "variance" : 5904674.54361335,
          "n" : 391,
          "max" : 39838.0,
          "min" : 111.0,
          "sum" : 446687.8787878791,
          "standardDeviation" : 2429.9536093541683
        }, {
          "mean" : 337.03736654804277,
          "variance" : 699666.9950361905,
          "n" : 562,
          "max" : 15762.0,
          "min" : 34.0,
          "sum" : 189415.00000000003,
          "standardDeviation" : 836.4609943303934
        }, {
          "mean" : 230.1117021276596,
          "variance" : 291478.9954893618,
          "n" : 376,
          "max" : 10350.0,
          "min" : 38.0,
          "sum" : 86522.00000000001,
          "standardDeviation" : 539.8879471606695
        }, {
          "mean" : 206.09340659340668,
          "variance" : 22088.376926104193,
          "n" : 364,
          "max" : 976.0,
          "min" : 27.0,
          "sum" : 75018.00000000003,
          "standardDeviation" : 148.62158970386568
        }, {
          "mean" : 231.25721784776894,
          "variance" : 437322.2547175021,
          "n" : 381,
          "max" : 12808.0,
          "min" : 21.0,
          "sum" : 88108.99999999997,
          "standardDeviation" : 661.3034513122566
        }, {
          "mean" : 195.32242990654206,
          "variance" : 22169.93326621288,
          "n" : 428,
          "max" : 835.0,
          "min" : 19.0,
          "sum" : 83598.0,
          "standardDeviation" : 148.8957127193825
        }, {
          "mean" : 213.03814713896458,
          "variance" : 23928.146081803436,
          "n" : 367,
          "max" : 925.0,
          "min" : 19.0,
          "sum" : 78185.0,
          "standardDeviation" : 154.68725248643935
        }, {
          "mean" : 210.73937677053826,
          "variance" : 27311.26710983775,
          "n" : 353,
          "max" : 798.0,
          "min" : 36.0,
          "sum" : 74391.0,
          "standardDeviation" : 165.26120872678425
        }, {
          "mean" : 224.01324503311258,
          "variance" : 29761.093156732884,
          "n" : 151,
          "max" : 1021.0,
          "min" : 29.0,
          "sum" : 33826.0,
          "standardDeviation" : 172.5140375642889
        } ],
        "2" : [ {
          "mean" : 1045.142284569139,
          "variance" : 1445822.596180312,
          "n" : 494,
          "max" : 16870.0,
          "min" : 105.0,
          "sum" : 516300.2885771547,
          "standardDeviation" : 1202.423634240575
        }, {
          "mean" : 364.3026584867075,
          "variance" : 1716788.3344396402,
          "n" : 489,
          "max" : 23371.0,
          "min" : 40.0,
          "sum" : 178143.99999999997,
          "standardDeviation" : 1310.262696729034
        }, {
          "mean" : 219.92991913746644,
          "variance" : 23484.25453485829,
          "n" : 371,
          "max" : 789.0,
          "min" : 39.0,
          "sum" : 81594.00000000004,
          "standardDeviation" : 153.2457325176081
        }, {
          "mean" : 293.2301587301588,
          "variance" : 1591766.5171782237,
          "n" : 378,
          "max" : 24492.0,
          "min" : 28.0,
          "sum" : 110841.00000000003,
          "standardDeviation" : 1261.6522964661158
        }, {
          "mean" : 202.48960739030028,
          "variance" : 28919.213433410343,
          "n" : 433,
          "max" : 1471.0,
          "min" : 28.0,
          "sum" : 87678.00000000001,
          "standardDeviation" : 170.05650070905946
        }, {
          "mean" : 231.00804289544223,
          "variance" : 271312.70692438504,
          "n" : 373,
          "max" : 9895.0,
          "min" : 39.0,
          "sum" : 86165.99999999996,
          "standardDeviation" : 520.8768634949963
        }, {
          "mean" : 175.32328767123292,
          "variance" : 21634.142450699976,
          "n" : 365,
          "max" : 726.0,
          "min" : 26.0,
          "sum" : 63993.000000000015,
          "standardDeviation" : 147.08549367867647
        }, {
          "mean" : 122.23423423423414,
          "variance" : 10583.267809570303,
          "n" : 444,
          "max" : 607.0,
          "min" : 18.0,
          "sum" : 54271.999999999956,
          "standardDeviation" : 102.8750106175951
        }, {
          "mean" : 285.28571428571433,
          "variance" : 28418.507936507936,
          "n" : 28,
          "max" : 673.0,
          "min" : 64.0,
          "sum" : 7988.000000000002,
          "standardDeviation" : 168.57789871898373
        } ],
        "3" : [ {
          "mean" : 966.9401709401715,
          "variance" : 1336983.6452350884,
          "n" : 463,
          "max" : 15495.0,
          "min" : 105.0,
          "sum" : 447693.2991452994,
          "standardDeviation" : 1156.2800894398763
        }, {
          "mean" : 397.15503875969,
          "variance" : 1950424.449702717,
          "n" : 516,
          "max" : 27228.0,
          "min" : 27.0,
          "sum" : 204932.00000000003,
          "standardDeviation" : 1396.5759734803964
        }, {
          "mean" : 226.00267379679156,
          "variance" : 29385.766748863825,
          "n" : 374,
          "max" : 913.0,
          "min" : 39.0,
          "sum" : 84525.00000000004,
          "standardDeviation" : 171.4227719670401
        }, {
          "mean" : 211.44591029023755,
          "variance" : 26772.07312476441,
          "n" : 379,
          "max" : 1208.0,
          "min" : 19.0,
          "sum" : 80138.00000000003,
          "standardDeviation" : 163.6217379346779
        }, {
          "mean" : 202.10829493087564,
          "variance" : 29136.018268217693,
          "n" : 434,
          "max" : 1386.0,
          "min" : 22.0,
          "sum" : 87715.00000000003,
          "standardDeviation" : 170.69275985881092
        }, {
          "mean" : 219.00537634408605,
          "variance" : 28488.010752688133,
          "n" : 372,
          "max" : 797.0,
          "min" : 37.0,
          "sum" : 81470.00000000001,
          "standardDeviation" : 168.78391734015457
        }, {
          "mean" : 182.90526315789475,
          "variance" : 22220.307623941113,
          "n" : 380,
          "max" : 796.0,
          "min" : 33.0,
          "sum" : 69504.0,
          "standardDeviation" : 149.06477660380105
        }, {
          "mean" : 154.49999999999997,
          "variance" : 18802.303357314155,
          "n" : 418,
          "max" : 800.0,
          "min" : 26.0,
          "sum" : 64580.999999999985,
          "standardDeviation" : 137.1214912306388
        }, {
          "mean" : 207.37500000000003,
          "variance" : 17543.214743589746,
          "n" : 40,
          "max" : 690.0,
          "min" : 51.0,
          "sum" : 8295.000000000002,
          "standardDeviation" : 132.45080121913097
        } ],
        "4" : [ {
          "mean" : 1047.9781312127243,
          "variance" : 3485470.885974988,
          "n" : 498,
          "max" : 31706.0,
          "min" : 92.0,
          "sum" : 521893.1093439367,
          "standardDeviation" : 1866.9415861175164
        }, {
          "mean" : 232.97499999999988,
          "variance" : 27478.44613778705,
          "n" : 480,
          "max" : 1042.0,
          "min" : 41.0,
          "sum" : 111827.99999999994,
          "standardDeviation" : 165.76623943911815
        }, {
          "mean" : 222.97574123989216,
          "variance" : 25103.439950462616,
          "n" : 371,
          "max" : 941.0,
          "min" : 20.0,
          "sum" : 82723.99999999999,
          "standardDeviation" : 158.44065119300228
        }, {
          "mean" : 227.4297752808989,
          "variance" : 92319.77251938598,
          "n" : 356,
          "max" : 5114.0,
          "min" : 28.0,
          "sum" : 80965.0,
          "standardDeviation" : 303.84168989687043
        }, {
          "mean" : 215.09890109890114,
          "variance" : 77588.20385341531,
          "n" : 455,
          "max" : 5001.0,
          "min" : 20.0,
          "sum" : 97870.00000000001,
          "standardDeviation" : 278.54659188978655
        }, {
          "mean" : 3469.3908355795143,
          "variance" : 3.865833032995485E9,
          "n" : 371,
          "max" : 1197786.0,
          "min" : 22.0,
          "sum" : 1287143.9999999998,
          "standardDeviation" : 62175.82354095107
        }, {
          "mean" : 186.9211267605634,
          "variance" : 23551.225399856754,
          "n" : 355,
          "max" : 877.0,
          "min" : 25.0,
          "sum" : 66357.0,
          "standardDeviation" : 153.4640850487721
        }, {
          "mean" : 146.13394919168596,
          "variance" : 14964.042201265927,
          "n" : 433,
          "max" : 654.0,
          "min" : 19.0,
          "sum" : 63276.00000000002,
          "standardDeviation" : 122.32760195992533
        }, {
          "mean" : 244.89285714285728,
          "variance" : 24221.006493506502,
          "n" : 56,
          "max" : 707.0,
          "min" : 44.0,
          "sum" : 13714.000000000007,
          "standardDeviation" : 155.63099464279762
        } ],
        "5" : [ {
          "mean" : 20644.701943844513,
          "variance" : 1.7797954398368127E11,
          "n" : 458,
          "max" : 9078666.0,
          "min" : 115.0,
          "sum" : 9455273.490280787,
          "standardDeviation" : 421876.21879371355
        }, {
          "mean" : 389.6915520628684,
          "variance" : 2314696.27671983,
          "n" : 509,
          "max" : 33834.0,
          "min" : 37.0,
          "sum" : 198353.00000000003,
          "standardDeviation" : 1521.4125925336066
        }, {
          "mean" : 217.7807486631014,
          "variance" : 20701.672979598858,
          "n" : 374,
          "max" : 901.0,
          "min" : 21.0,
          "sum" : 81449.99999999993,
          "standardDeviation" : 143.88075958792703
        }, {
          "mean" : 209.98337950138514,
          "variance" : 23977.910834102786,
          "n" : 361,
          "max" : 867.0,
          "min" : 25.0,
          "sum" : 75804.00000000004,
          "standardDeviation" : 154.84802496029062
        }, {
          "mean" : 200.52267818574515,
          "variance" : 23044.605004067213,
          "n" : 463,
          "max" : 1006.0,
          "min" : 27.0,
          "sum" : 92842.0,
          "standardDeviation" : 151.80449599424654
        }, {
          "mean" : 234.34139784946254,
          "variance" : 273975.0232950757,
          "n" : 372,
          "max" : 9863.0,
          "min" : 29.0,
          "sum" : 87175.00000000006,
          "standardDeviation" : 523.4262348173577
        }, {
          "mean" : 165.64082687338515,
          "variance" : 16380.743717449228,
          "n" : 387,
          "max" : 837.0,
          "min" : 25.0,
          "sum" : 64103.00000000005,
          "standardDeviation" : 127.98727951421277
        }, {
          "mean" : 137.5023255813952,
          "variance" : 14764.553607632675,
          "n" : 430,
          "max" : 744.0,
          "min" : 14.0,
          "sum" : 59125.99999999994,
          "standardDeviation" : 121.50947949700334
        }, {
          "mean" : 229.21052631578942,
          "variance" : 11326.953216374268,
          "n" : 19,
          "max" : 462.0,
          "min" : 94.0,
          "sum" : 4354.999999999999,
          "standardDeviation" : 106.42815988437584
        } ],
        "6" : [ {
          "mean" : 1036.6052104208418,
          "variance" : 4576363.396037055,
          "n" : 494,
          "max" : 40156.0,
          "min" : 106.0,
          "sum" : 512082.97394789587,
          "standardDeviation" : 2139.243650460848
        }, {
          "mean" : 194.9368635437882,
          "variance" : 16622.459270958883,
          "n" : 491,
          "max" : 902.0,
          "min" : 41.0,
          "sum" : 95714.00000000001,
          "standardDeviation" : 128.9281166811913
        }, {
          "mean" : 214.47978436657675,
          "variance" : 263219.379995629,
          "n" : 371,
          "max" : 9776.0,
          "min" : 36.0,
          "sum" : 79571.99999999997,
          "standardDeviation" : 513.0491009597707
        }, {
          "mean" : 174.21808510638297,
          "variance" : 15703.930978723398,
          "n" : 376,
          "max" : 710.0,
          "min" : 28.0,
          "sum" : 65506.0,
          "standardDeviation" : 125.31532619246298
        }, {
          "mean" : 170.1847575057736,
          "variance" : 13189.743563424865,
          "n" : 433,
          "max" : 730.0,
          "min" : 27.0,
          "sum" : 73689.99999999997,
          "standardDeviation" : 114.84660884599451
        }, {
          "mean" : 193.46361185983818,
          "variance" : 20123.20069935163,
          "n" : 371,
          "max" : 924.0,
          "min" : 39.0,
          "sum" : 71774.99999999997,
          "standardDeviation" : 141.85626774785678
        }, {
          "mean" : 202.3038674033149,
          "variance" : 303021.20934788266,
          "n" : 362,
          "max" : 10402.0,
          "min" : 35.0,
          "sum" : 73234.0,
          "standardDeviation" : 550.4736227539723
        }, {
          "mean" : 139.46241457858764,
          "variance" : 15101.071072695317,
          "n" : 439,
          "max" : 774.0,
          "min" : 16.0,
          "sum" : 61223.99999999997,
          "standardDeviation" : 122.88641533015485
        }, {
          "mean" : 257.1538461538462,
          "variance" : 25066.607287449395,
          "n" : 39,
          "max" : 810.0,
          "min" : 75.0,
          "sum" : 10029.000000000002,
          "standardDeviation" : 158.3243736366874
        } ],
        "7" : [ {
          "mean" : 1608.7983014862004,
          "variance" : 1.5884299820816755E8,
          "n" : 466,
          "max" : 273738.0,
          "min" : 113.0,
          "sum" : 749700.0084925694,
          "standardDeviation" : 12603.29314933869
        }, {
          "mean" : 307.48054474708186,
          "variance" : 1024228.6243770903,
          "n" : 514,
          "max" : 18889.0,
          "min" : 42.0,
          "sum" : 158045.0000000001,
          "standardDeviation" : 1012.0418095993318
        }, {
          "mean" : 219.0853333333334,
          "variance" : 23876.473982174695,
          "n" : 375,
          "max" : 763.0,
          "min" : 20.0,
          "sum" : 82157.00000000003,
          "standardDeviation" : 154.52014102431662
        }, {
          "mean" : 213.80878552971578,
          "variance" : 25287.554015878748,
          "n" : 387,
          "max" : 746.0,
          "min" : 28.0,
          "sum" : 82744.0,
          "standardDeviation" : 159.02060877722343
        }, {
          "mean" : 208.46590909090924,
          "variance" : 25202.855327189925,
          "n" : 440,
          "max" : 1192.0,
          "min" : 20.0,
          "sum" : 91725.00000000006,
          "standardDeviation" : 158.75407184444097
        }, {
          "mean" : 244.5726027397262,
          "variance" : 287384.888258317,
          "n" : 365,
          "max" : 9833.0,
          "min" : 40.0,
          "sum" : 89269.00000000006,
          "standardDeviation" : 536.0829117387692
        }, {
          "mean" : 163.52060737527134,
          "variance" : 20334.5370744129,
          "n" : 461,
          "max" : 882.0,
          "min" : 21.0,
          "sum" : 75383.00000000009,
          "standardDeviation" : 142.59921835133915
        }, {
          "mean" : 186.94736842105266,
          "variance" : 267495.18888888886,
          "n" : 361,
          "max" : 9576.0,
          "min" : 28.0,
          "sum" : 67488.00000000001,
          "standardDeviation" : 517.1993705418529
        }, {
          "mean" : 120.25,
          "variance" : 8681.583333333334,
          "n" : 4,
          "max" : 239.0,
          "min" : 42.0,
          "sum" : 481.0,
          "standardDeviation" : 93.17501453358263
        } ],
        "8" : [ {
          "mean" : 1102.1000000000001,
          "variance" : 2339911.2149284254,
          "n" : 485,
          "max" : 19694.0,
          "min" : 107.0,
          "sum" : 534518.5000000001,
          "standardDeviation" : 1529.6768334940637
        }, {
          "mean" : 270.26868686868704,
          "variance" : 35472.39527256369,
          "n" : 495,
          "max" : 961.0,
          "min" : 39.0,
          "sum" : 133783.0000000001,
          "standardDeviation" : 188.34116722735817
        }, {
          "mean" : 256.43956043956035,
          "variance" : 40472.682287409545,
          "n" : 364,
          "max" : 959.0,
          "min" : 26.0,
          "sum" : 93343.99999999997,
          "standardDeviation" : 201.1782351235082
        }, {
          "mean" : 245.17827298050145,
          "variance" : 34354.92343723252,
          "n" : 359,
          "max" : 1204.0,
          "min" : 36.0,
          "sum" : 88019.00000000001,
          "standardDeviation" : 185.35081180624087
        }, {
          "mean" : 238.11751152073745,
          "variance" : 33492.990778088766,
          "n" : 434,
          "max" : 1326.0,
          "min" : 29.0,
          "sum" : 103343.00000000006,
          "standardDeviation" : 183.0109034404474
        }, {
          "mean" : 255.50928381962848,
          "variance" : 274429.1388763472,
          "n" : 377,
          "max" : 9770.0,
          "min" : 27.0,
          "sum" : 96326.99999999994,
          "standardDeviation" : 523.8598465967278
        }, {
          "mean" : 249.37190082644616,
          "variance" : 304184.2176612941,
          "n" : 363,
          "max" : 10236.0,
          "min" : 20.0,
          "sum" : 90521.99999999996,
          "standardDeviation" : 551.5289817056707
        }, {
          "mean" : 157.29255319148942,
          "variance" : 19133.36485106383,
          "n" : 376,
          "max" : 789.0,
          "min" : 25.0,
          "sum" : 59142.00000000002,
          "standardDeviation" : 138.32340673603954
        }, {
          "mean" : 136.45901639344262,
          "variance" : 14659.969380842713,
          "n" : 122,
          "max" : 1024.0,
          "min" : 28.0,
          "sum" : 16648.0,
          "standardDeviation" : 121.07836049783096
        } ],
        "9" : [ {
          "mean" : 1043.0497925311222,
          "variance" : 2016706.8914864452,
          "n" : 477,
          "max" : 19535.0,
          "min" : 96.0,
          "sum" : 497534.75103734527,
          "standardDeviation" : 1420.108056271228
        }, {
          "mean" : 436.70954356846477,
          "variance" : 3258054.060989812,
          "n" : 482,
          "max" : 39140.0,
          "min" : 44.0,
          "sum" : 210494.00000000003,
          "standardDeviation" : 1805.0080501177306
        }, {
          "mean" : 215.0601092896174,
          "variance" : 20213.10322628939,
          "n" : 366,
          "max" : 775.0,
          "min" : 21.0,
          "sum" : 78711.99999999997,
          "standardDeviation" : 142.1727935516827
        }, {
          "mean" : 202.91666666666663,
          "variance" : 18477.14066852369,
          "n" : 360,
          "max" : 723.0,
          "min" : 27.0,
          "sum" : 73049.99999999999,
          "standardDeviation" : 135.93064653904833
        }, {
          "mean" : 227.45786516853929,
          "variance" : 286487.76441683795,
          "n" : 356,
          "max" : 9857.0,
          "min" : 21.0,
          "sum" : 80974.99999999999,
          "standardDeviation" : 535.2455178857997
        }, {
          "mean" : 235.94987468671678,
          "variance" : 468266.61557159235,
          "n" : 399,
          "max" : 9737.0,
          "min" : 27.0,
          "sum" : 94144.0,
          "standardDeviation" : 684.3000917518515
        }, {
          "mean" : 180.44226044226036,
          "variance" : 19638.03545103544,
          "n" : 407,
          "max" : 1073.0,
          "min" : 19.0,
          "sum" : 73439.99999999997,
          "standardDeviation" : 140.1357750577469
        }, {
          "mean" : 195.6021798365123,
          "variance" : 532296.1090662727,
          "n" : 367,
          "max" : 13924.0,
          "min" : 23.0,
          "sum" : 71786.00000000001,
          "standardDeviation" : 729.5862588250088
        }, {
          "mean" : 178.80745341614912,
          "variance" : 26194.956444099378,
          "n" : 161,
          "max" : 989.0,
          "min" : 29.0,
          "sum" : 28788.000000000007,
          "standardDeviation" : 161.84856021633118
        } ],
        "10" : [ {
          "mean" : 988.5721153846156,
          "variance" : 1403354.105630212,
          "n" : 411,
          "max" : 19154.0,
          "min" : 107.0,
          "sum" : 406303.139423077,
          "standardDeviation" : 1184.6324770283027
        }, {
          "mean" : 385.680811808118,
          "variance" : 3060493.640998974,
          "n" : 542,
          "max" : 40176.0,
          "min" : 26.0,
          "sum" : 209038.99999999994,
          "standardDeviation" : 1749.4266606517044
        }, {
          "mean" : 254.90625000000009,
          "variance" : 406385.218342036,
          "n" : 384,
          "max" : 12206.0,
          "min" : 30.0,
          "sum" : 97884.00000000003,
          "standardDeviation" : 637.4835043685727
        }, {
          "mean" : 256.6508379888267,
          "variance" : 277517.0570161024,
          "n" : 358,
          "max" : 9635.0,
          "min" : 27.0,
          "sum" : 91880.99999999996,
          "standardDeviation" : 526.7988771970784
        }, {
          "mean" : 213.52699228791775,
          "variance" : 28071.94579015717,
          "n" : 389,
          "max" : 882.0,
          "min" : 28.0,
          "sum" : 83062.0,
          "standardDeviation" : 167.54684655390315
        }, {
          "mean" : 203.4618937644342,
          "variance" : 24813.508382516462,
          "n" : 433,
          "max" : 802.0,
          "min" : 33.0,
          "sum" : 88099.0,
          "standardDeviation" : 157.52304079885096
        }, {
          "mean" : 224.33884297520663,
          "variance" : 32782.37934340896,
          "n" : 363,
          "max" : 946.0,
          "min" : 28.0,
          "sum" : 81435.0,
          "standardDeviation" : 181.05904932758529
        }, {
          "mean" : 210.75718015665808,
          "variance" : 33586.100570038114,
          "n" : 383,
          "max" : 1137.0,
          "min" : 21.0,
          "sum" : 80720.00000000004,
          "standardDeviation" : 183.26511007291626
        }, {
          "mean" : 236.0625,
          "variance" : 39441.086148648625,
          "n" : 112,
          "max" : 843.0,
          "min" : 29.0,
          "sum" : 26439.0,
          "standardDeviation" : 198.59779995923577
        } ],
        "11" : [ {
          "mean" : 933.2446183953034,
          "variance" : 1835480.3420052945,
          "n" : 506,
          "max" : 21808.0,
          "min" : 65.0,
          "sum" : 472221.7769080235,
          "standardDeviation" : 1354.7990042826627
        }, {
          "mean" : 2617.3438818565414,
          "variance" : 2.597520698585517E9,
          "n" : 474,
          "max" : 1109796.0,
          "min" : 45.0,
          "sum" : 1240621.0000000007,
          "standardDeviation" : 50965.8777868636
        }, {
          "mean" : 244.28150134048238,
          "variance" : 272575.6490386004,
          "n" : 373,
          "max" : 9898.0,
          "min" : 41.0,
          "sum" : 91116.99999999993,
          "standardDeviation" : 522.0877790550171
        }, {
          "mean" : 209.3732970027248,
          "variance" : 22500.688137460736,
          "n" : 367,
          "max" : 770.0,
          "min" : 21.0,
          "sum" : 76840.0,
          "standardDeviation" : 150.0022937739978
        }, {
          "mean" : 200.54606741573016,
          "variance" : 20976.248436076512,
          "n" : 445,
          "max" : 1018.0,
          "min" : 30.0,
          "sum" : 89242.99999999993,
          "standardDeviation" : 144.8317935954551
        }, {
          "mean" : 204.9410187667561,
          "variance" : 20674.37823229266,
          "n" : 373,
          "max" : 778.0,
          "min" : 39.0,
          "sum" : 76443.00000000001,
          "standardDeviation" : 143.7858763310662
        }, {
          "mean" : 178.29057591623038,
          "variance" : 22543.267050061135,
          "n" : 382,
          "max" : 1153.0,
          "min" : 17.0,
          "sum" : 68107.0,
          "standardDeviation" : 150.1441542320617
        }, {
          "mean" : 158.63231850117083,
          "variance" : 17552.228342733997,
          "n" : 427,
          "max" : 811.0,
          "min" : 24.0,
          "sum" : 67735.99999999994,
          "standardDeviation" : 132.48482306564023
        }, {
          "mean" : 281.7142857142857,
          "variance" : 28402.137566137575,
          "n" : 28,
          "max" : 672.0,
          "min" : 44.0,
          "sum" : 7888.0,
          "standardDeviation" : 168.52933740490874
        } ],
        "12" : [ {
          "mean" : 1164.8434959349595,
          "variance" : 1.0705462034519726E7,
          "n" : 487,
          "max" : 65049.0,
          "min" : 103.0,
          "sum" : 567278.7825203253,
          "standardDeviation" : 3271.9202365766387
        }, {
          "mean" : 256.9958333333337,
          "variance" : 35354.67639178848,
          "n" : 480,
          "max" : 1205.0,
          "min" : 49.0,
          "sum" : 123358.00000000016,
          "standardDeviation" : 188.0283925150361
        }, {
          "mean" : 262.064,
          "variance" : 266562.268620321,
          "n" : 375,
          "max" : 9658.0,
          "min" : 39.0,
          "sum" : 98274.00000000001,
          "standardDeviation" : 516.296686625356
        }, {
          "mean" : 215.11420612813373,
          "variance" : 23428.229937287,
          "n" : 359,
          "max" : 886.0,
          "min" : 24.0,
          "sum" : 77226.00000000001,
          "standardDeviation" : 153.0628300316148
        }, {
          "mean" : 199.175,
          "variance" : 23404.135592255152,
          "n" : 440,
          "max" : 807.0,
          "min" : 27.0,
          "sum" : 87637.0,
          "standardDeviation" : 152.98410241673855
        }, {
          "mean" : 209.7222222222222,
          "variance" : 28465.140141467735,
          "n" : 378,
          "max" : 1211.0,
          "min" : 21.0,
          "sum" : 79274.99999999999,
          "standardDeviation" : 168.71615258020714
        }, {
          "mean" : 228.8016528925618,
          "variance" : 398128.689831515,
          "n" : 363,
          "max" : 10534.0,
          "min" : 33.0,
          "sum" : 83054.99999999994,
          "standardDeviation" : 630.974397128374
        }, {
          "mean" : 122.94266055045863,
          "variance" : 9376.913946008646,
          "n" : 436,
          "max" : 618.0,
          "min" : 17.0,
          "sum" : 53602.99999999996,
          "standardDeviation" : 96.83446672548286
        }, {
          "mean" : 180.45614035087715,
          "variance" : 8404.252506265662,
          "n" : 57,
          "max" : 451.0,
          "min" : 53.0,
          "sum" : 10285.999999999998,
          "standardDeviation" : 91.67471028732876
        } ],
        "13" : [ {
          "mean" : 1020.3925049309668,
          "variance" : 4081920.5827895626,
          "n" : 502,
          "max" : 35702.0,
          "min" : 95.0,
          "sum" : 512237.0374753453,
          "standardDeviation" : 2020.3763468199588
        }, {
          "mean" : 457.8944099378879,
          "variance" : 2333703.385093166,
          "n" : 483,
          "max" : 19842.0,
          "min" : 36.0,
          "sum" : 221162.99999999985,
          "standardDeviation" : 1527.646354721264
        }, {
          "mean" : 238.4636118598381,
          "variance" : 27024.16826691922,
          "n" : 371,
          "max" : 1053.0,
          "min" : 42.0,
          "sum" : 88469.99999999993,
          "standardDeviation" : 164.3902924959963
        }, {
          "mean" : 206.22015915119368,
          "variance" : 26945.16150742142,
          "n" : 377,
          "max" : 1011.0,
          "min" : 30.0,
          "sum" : 77745.00000000001,
          "standardDeviation" : 164.14981421683493
        }, {
          "mean" : 242.0070093457946,
          "variance" : 250991.69315918494,
          "n" : 428,
          "max" : 9861.0,
          "min" : 42.0,
          "sum" : 103579.00000000009,
          "standardDeviation" : 500.99071164961225
        }, {
          "mean" : 215.35013262599463,
          "variance" : 25108.49942152495,
          "n" : 377,
          "max" : 984.0,
          "min" : 28.0,
          "sum" : 81186.99999999997,
          "standardDeviation" : 158.45661684361733
        }, {
          "mean" : 213.75065616797886,
          "variance" : 398028.9771377261,
          "n" : 381,
          "max" : 12173.0,
          "min" : 27.0,
          "sum" : 81438.99999999994,
          "standardDeviation" : 630.8953773310802
        }, {
          "mean" : 166.6216867469879,
          "variance" : 20461.42416623012,
          "n" : 415,
          "max" : 884.0,
          "min" : 26.0,
          "sum" : 69147.99999999999,
          "standardDeviation" : 143.0434345443024
        }, {
          "mean" : 248.85714285714283,
          "variance" : 16459.63763066202,
          "n" : 42,
          "max" : 680.0,
          "min" : 73.0,
          "sum" : 10451.999999999998,
          "standardDeviation" : 128.29511927841222
        } ],
        "14" : [ {
          "mean" : 1207.4887892376676,
          "variance" : 2807832.6009976324,
          "n" : 441,
          "max" : 21113.0,
          "min" : 94.0,
          "sum" : 532502.5560538115,
          "standardDeviation" : 1675.6588557930377
        }, {
          "mean" : 374.40636704119873,
          "variance" : 1399910.1816479398,
          "n" : 534,
          "max" : 26534.0,
          "min" : 52.0,
          "sum" : 199933.00000000012,
          "standardDeviation" : 1183.1780008299427
        }, {
          "mean" : 221.99456521739128,
          "variance" : 24798.027218339066,
          "n" : 368,
          "max" : 865.0,
          "min" : 45.0,
          "sum" : 81693.99999999999,
          "standardDeviation" : 157.47389376763078
        }, {
          "mean" : 220.25277777777774,
          "variance" : 26520.100270813957,
          "n" : 360,
          "max" : 1075.0,
          "min" : 23.0,
          "sum" : 79290.99999999999,
          "standardDeviation" : 162.84993174949125
        }, {
          "mean" : 188.77232142857136,
          "variance" : 21408.610238894224,
          "n" : 448,
          "max" : 766.0,
          "min" : 22.0,
          "sum" : 84569.99999999997,
          "standardDeviation" : 146.3168146143642
        }, {
          "mean" : 226.19160104986864,
          "variance" : 26837.881613482543,
          "n" : 381,
          "max" : 817.0,
          "min" : 30.0,
          "sum" : 86178.99999999996,
          "standardDeviation" : 163.82271397300968
        }, {
          "mean" : 198.26775956284146,
          "variance" : 29690.39934126804,
          "n" : 366,
          "max" : 1287.0,
          "min" : 32.0,
          "sum" : 72565.99999999997,
          "standardDeviation" : 172.3090228086389
        }, {
          "mean" : 157.69336384439356,
          "variance" : 18816.029611823746,
          "n" : 437,
          "max" : 911.0,
          "min" : 24.0,
          "sum" : 68911.99999999999,
          "standardDeviation" : 137.171533533105
        }, {
          "mean" : 230.21951219512195,
          "variance" : 21286.42560975609,
          "n" : 41,
          "max" : 675.0,
          "min" : 53.0,
          "sum" : 9439.0,
          "standardDeviation" : 145.89868268684296
        } ],
        "15" : [ {
          "mean" : 1023.3020000000006,
          "variance" : 1343892.3795551092,
          "n" : 495,
          "max" : 15581.0,
          "min" : 81.0,
          "sum" : 506534.4900000003,
          "standardDeviation" : 1159.2637230393734
        }, {
          "mean" : 387.21900826446307,
          "variance" : 2630902.477815993,
          "n" : 484,
          "max" : 28290.0,
          "min" : 38.0,
          "sum" : 187414.00000000012,
          "standardDeviation" : 1622.0056959875305
        }, {
          "mean" : 239.75331564986757,
          "variance" : 33465.00547434961,
          "n" : 377,
          "max" : 1056.0,
          "min" : 42.0,
          "sum" : 90387.00000000007,
          "standardDeviation" : 182.93442943948415
        }, {
          "mean" : 235.13436692506454,
          "variance" : 36579.183971295075,
          "n" : 387,
          "max" : 1257.0,
          "min" : 27.0,
          "sum" : 90996.99999999997,
          "standardDeviation" : 191.25685339693078
        }, {
          "mean" : 235.4851258581236,
          "variance" : 239393.56227825253,
          "n" : 437,
          "max" : 9823.0,
          "min" : 38.0,
          "sum" : 102907.00000000001,
          "standardDeviation" : 489.27861416400833
        }, {
          "mean" : 244.26358695652146,
          "variance" : 288324.06929718045,
          "n" : 368,
          "max" : 9998.0,
          "min" : 34.0,
          "sum" : 89888.9999999999,
          "standardDeviation" : 536.9581634514745
        }, {
          "mean" : 158.9142857142857,
          "variance" : 20839.76135934549,
          "n" : 455,
          "max" : 981.0,
          "min" : 16.0,
          "sum" : 72306.0,
          "standardDeviation" : 144.3598329153421
        }, {
          "mean" : 164.23306233062314,
          "variance" : 18324.450969129262,
          "n" : 369,
          "max" : 1120.0,
          "min" : 25.0,
          "sum" : 60601.99999999994,
          "standardDeviation" : 135.36783579982824
        }, {
          "mean" : 99.25,
          "variance" : 13911.583333333334,
          "n" : 4,
          "max" : 276.0,
          "min" : 33.0,
          "sum" : 397.0,
          "standardDeviation" : 117.94737527106457
        } ],
        "16" : [ {
          "mean" : 1189.0418326693232,
          "variance" : 5070273.37349603,
          "n" : 497,
          "max" : 35723.0,
          "min" : 98.0,
          "sum" : 590953.7908366537,
          "standardDeviation" : 2251.726753737236
        }, {
          "mean" : 209.9576612903228,
          "variance" : 16007.887092701216,
          "n" : 496,
          "max" : 845.0,
          "min" : 26.0,
          "sum" : 104139.0000000001,
          "standardDeviation" : 126.52227903693964
        }, {
          "mean" : 177.44892473118279,
          "variance" : 14873.752101266547,
          "n" : 372,
          "max" : 669.0,
          "min" : 26.0,
          "sum" : 66011.0,
          "standardDeviation" : 121.95799318317167
        }, {
          "mean" : 172.14062500000009,
          "variance" : 16607.06966582774,
          "n" : 448,
          "max" : 1179.0,
          "min" : 21.0,
          "sum" : 77119.00000000004,
          "standardDeviation" : 128.86841997102215
        }, {
          "mean" : 220.55297157622743,
          "variance" : 272051.19083959266,
          "n" : 387,
          "max" : 10119.0,
          "min" : 39.0,
          "sum" : 85354.00000000001,
          "standardDeviation" : 521.5852670844841
        }, {
          "mean" : 188.24999999999997,
          "variance" : 19242.193152454794,
          "n" : 388,
          "max" : 1033.0,
          "min" : 36.0,
          "sum" : 73040.99999999999,
          "standardDeviation" : 138.71623247642935
        }, {
          "mean" : 155.68325791855221,
          "variance" : 13275.414186187292,
          "n" : 442,
          "max" : 656.0,
          "min" : 16.0,
          "sum" : 68812.00000000007,
          "standardDeviation" : 115.21898361896486
        }, {
          "mean" : 143.2558139534884,
          "variance" : 12376.855651230597,
          "n" : 344,
          "max" : 811.0,
          "min" : 29.0,
          "sum" : 49280.00000000001,
          "standardDeviation" : 111.25131752581898
        } ],
        "17" : [ {
          "mean" : 997.9916839916839,
          "variance" : 1741290.1624307001,
          "n" : 476,
          "max" : 18855.0,
          "min" : 99.0,
          "sum" : 475044.0415800415,
          "standardDeviation" : 1319.5795400167056
        }, {
          "mean" : 369.55648535564893,
          "variance" : 2975996.247326825,
          "n" : 478,
          "max" : 35052.0,
          "min" : 41.0,
          "sum" : 176648.00000000017,
          "standardDeviation" : 1725.1076045646616
        }, {
          "mean" : 199.49218750000009,
          "variance" : 16416.43858110313,
          "n" : 384,
          "max" : 774.0,
          "min" : 41.0,
          "sum" : 76605.00000000003,
          "standardDeviation" : 128.126650549771
        }, {
          "mean" : 212.64166666666668,
          "variance" : 121561.11636490254,
          "n" : 360,
          "max" : 6299.0,
          "min" : 27.0,
          "sum" : 76551.0,
          "standardDeviation" : 348.6561577900246
        }, {
          "mean" : 182.16062176165806,
          "variance" : 18127.901406365658,
          "n" : 386,
          "max" : 702.0,
          "min" : 19.0,
          "sum" : 70314.00000000001,
          "standardDeviation" : 134.63989529989118
        }, {
          "mean" : 186.50000000000003,
          "variance" : 20622.283216783202,
          "n" : 430,
          "max" : 786.0,
          "min" : 23.0,
          "sum" : 80195.00000000001,
          "standardDeviation" : 143.6046072268686
        }, {
          "mean" : 191.65289256198344,
          "variance" : 75533.1775261404,
          "n" : 363,
          "max" : 4670.0,
          "min" : 19.0,
          "sum" : 69569.99999999999,
          "standardDeviation" : 274.8329993398544
        }, {
          "mean" : 156.30708661417322,
          "variance" : 17577.308081226707,
          "n" : 381,
          "max" : 958.0,
          "min" : 19.0,
          "sum" : 59552.99999999999,
          "standardDeviation" : 132.57944064306014
        }, {
          "mean" : 175.97457627118646,
          "variance" : 19735.307040417218,
          "n" : 118,
          "max" : 886.0,
          "min" : 36.0,
          "sum" : 20765.000000000004,
          "standardDeviation" : 140.48240829519267
        } ],
        "18" : [ {
          "mean" : 1021.3283582089563,
          "variance" : 2245123.7210103334,
          "n" : 464,
          "max" : 16474.0,
          "min" : 75.0,
          "sum" : 473896.35820895573,
          "standardDeviation" : 1498.3736920442554
        }, {
          "mean" : 388.2966601178784,
          "variance" : 2744388.7366226795,
          "n" : 509,
          "max" : 30870.0,
          "min" : 40.0,
          "sum" : 197643.0000000001,
          "standardDeviation" : 1656.619671687705
        }, {
          "mean" : 194.53475935828882,
          "variance" : 13817.8580378776,
          "n" : 374,
          "max" : 714.0,
          "min" : 20.0,
          "sum" : 72756.00000000001,
          "standardDeviation" : 117.54938552743523
        }, {
          "mean" : 182.51685393258427,
          "variance" : 14165.08422218705,
          "n" : 356,
          "max" : 618.0,
          "min" : 29.0,
          "sum" : 64976.0,
          "standardDeviation" : 119.0171593602664
        }, {
          "mean" : 170.05311778290996,
          "variance" : 13511.485597895819,
          "n" : 433,
          "max" : 711.0,
          "min" : 39.0,
          "sum" : 73633.00000000001,
          "standardDeviation" : 116.23891602168277
        }, {
          "mean" : 572.7637795275589,
          "variance" : 5.536651449668462E7,
          "n" : 381,
          "max" : 145412.0,
          "min" : 40.0,
          "sum" : 218222.99999999994,
          "standardDeviation" : 7440.867859106532
        }, {
          "mean" : 173.23398328690817,
          "variance" : 16068.503758111454,
          "n" : 359,
          "max" : 971.0,
          "min" : 20.0,
          "sum" : 62191.00000000004,
          "standardDeviation" : 126.76160206510272
        }, {
          "mean" : 140.25721784776903,
          "variance" : 13862.312612239264,
          "n" : 381,
          "max" : 678.0,
          "min" : 16.0,
          "sum" : 53438.0,
          "standardDeviation" : 117.73832261519298
        }, {
          "mean" : 154.94871794871796,
          "variance" : 17967.738726790463,
          "n" : 117,
          "max" : 720.0,
          "min" : 32.0,
          "sum" : 18129.0,
          "standardDeviation" : 134.04379406294967
        } ],
        "19" : [ {
          "mean" : 1033.8016032064131,
          "variance" : 2511333.4685917986,
          "n" : 494,
          "max" : 20843.0,
          "min" : 62.0,
          "sum" : 510697.99198396807,
          "standardDeviation" : 1584.7187348522762
        }, {
          "mean" : 3487.8000000000065,
          "variance" : 5.188028908961954E9,
          "n" : 490,
          "max" : 1594637.0,
          "min" : 46.0,
          "sum" : 1709022.0000000033,
          "standardDeviation" : 72027.97310046948
        }, {
          "mean" : 228.90810810810814,
          "variance" : 27130.68529993405,
          "n" : 370,
          "max" : 1147.0,
          "min" : 30.0,
          "sum" : 84696.00000000001,
          "standardDeviation" : 164.7139499251173
        }, {
          "mean" : 229.25000000000009,
          "variance" : 314453.9530026109,
          "n" : 384,
          "max" : 10819.0,
          "min" : 28.0,
          "sum" : 88032.00000000003,
          "standardDeviation" : 560.7619396879668
        }, {
          "mean" : 198.3087557603686,
          "variance" : 22325.06842200487,
          "n" : 434,
          "max" : 1019.0,
          "min" : 40.0,
          "sum" : 86065.99999999997,
          "standardDeviation" : 149.41575694017305
        }, {
          "mean" : 209.0240641711231,
          "variance" : 22638.704513196943,
          "n" : 374,
          "max" : 833.0,
          "min" : 37.0,
          "sum" : 78175.00000000003,
          "standardDeviation" : 150.46163801180998
        }, {
          "mean" : 203.16500000000005,
          "variance" : 25024.764686716786,
          "n" : 400,
          "max" : 859.0,
          "min" : 27.0,
          "sum" : 81266.00000000001,
          "standardDeviation" : 158.19217643966084
        }, {
          "mean" : 203.96836982968387,
          "variance" : 225197.58680196994,
          "n" : 411,
          "max" : 9374.0,
          "min" : 19.0,
          "sum" : 83831.00000000007,
          "standardDeviation" : 474.54987809709735
        }, {
          "mean" : 210.83333333333334,
          "variance" : 18033.323529411762,
          "n" : 18,
          "max" : 505.0,
          "min" : 60.0,
          "sum" : 3795.0,
          "standardDeviation" : 134.2882106866115
        } ],
        "20" : [ {
          "mean" : 1109.3095238095243,
          "variance" : 5182464.1306447,
          "n" : 499,
          "max" : 37962.0,
          "min" : 88.0,
          "sum" : 553545.4523809527,
          "standardDeviation" : 2276.5026094087175
        }, {
          "mean" : 264.0375939849624,
          "variance" : 245447.62421128192,
          "n" : 399,
          "max" : 9513.0,
          "min" : 42.0,
          "sum" : 105351.00000000001,
          "standardDeviation" : 495.4267092227486
        }, {
          "mean" : 193.72446555819468,
          "variance" : 23316.928661916063,
          "n" : 421,
          "max" : 1009.0,
          "min" : 41.0,
          "sum" : 81557.99999999996,
          "standardDeviation" : 152.69881683207655
        }, {
          "mean" : 221.83045977011486,
          "variance" : 26461.82419921161,
          "n" : 348,
          "max" : 985.0,
          "min" : 30.0,
          "sum" : 77196.99999999997,
          "standardDeviation" : 162.67090766087097
        }, {
          "mean" : 250.80555555555557,
          "variance" : 263109.38826988556,
          "n" : 360,
          "max" : 9360.0,
          "min" : 21.0,
          "sum" : 90290.0,
          "standardDeviation" : 512.9418956079583
        }, {
          "mean" : 251.73976608187144,
          "variance" : 332394.22240229114,
          "n" : 342,
          "max" : 10344.0,
          "min" : 40.0,
          "sum" : 86095.00000000003,
          "standardDeviation" : 576.5364016281115
        }, {
          "mean" : 245.8789625360231,
          "variance" : 302247.436174643,
          "n" : 347,
          "max" : 9962.0,
          "min" : 30.0,
          "sum" : 85320.00000000001,
          "standardDeviation" : 549.7703485771518
        }, {
          "mean" : 183.07901907356947,
          "variance" : 25886.384449308378,
          "n" : 367,
          "max" : 1121.0,
          "min" : 18.0,
          "sum" : 67190.0,
          "standardDeviation" : 160.8924623756762
        }, {
          "mean" : 189.8184931506851,
          "variance" : 347937.8947771031,
          "n" : 292,
          "max" : 9968.0,
          "min" : 16.0,
          "sum" : 55427.00000000005,
          "standardDeviation" : 589.8626066950702
        } ],
        "21" : [ {
          "mean" : 958.2057026476576,
          "variance" : 2777395.4127021045,
          "n" : 486,
          "max" : 24067.0,
          "min" : 66.0,
          "sum" : 465687.9714867616,
          "standardDeviation" : 1666.5519531962107
        }, {
          "mean" : 385.18864097363064,
          "variance" : 2509720.9216593266,
          "n" : 493,
          "max" : 28468.0,
          "min" : 43.0,
          "sum" : 189897.9999999999,
          "standardDeviation" : 1584.2098729837933
        }, {
          "mean" : 240.57219251336906,
          "variance" : 304965.64490831655,
          "n" : 374,
          "max" : 10339.0,
          "min" : 21.0,
          "sum" : 89974.00000000003,
          "standardDeviation" : 552.2369463448788
        }, {
          "mean" : 225.56878306878318,
          "variance" : 272678.12920859456,
          "n" : 378,
          "max" : 9835.0,
          "min" : 26.0,
          "sum" : 85265.00000000004,
          "standardDeviation" : 522.1859144103703
        }, {
          "mean" : 222.20728929384973,
          "variance" : 245465.92725268088,
          "n" : 439,
          "max" : 10015.0,
          "min" : 20.0,
          "sum" : 97549.00000000003,
          "standardDeviation" : 495.44518087542326
        }, {
          "mean" : 208.45108695652178,
          "variance" : 27474.22103423765,
          "n" : 368,
          "max" : 1062.0,
          "min" : 26.0,
          "sum" : 76710.00000000001,
          "standardDeviation" : 165.75349478740304
        }, {
          "mean" : 182.71801566579626,
          "variance" : 89299.9831039055,
          "n" : 383,
          "max" : 5241.0,
          "min" : 19.0,
          "sum" : 69980.99999999997,
          "standardDeviation" : 298.83102767936515
        }, {
          "mean" : 130.57441860465127,
          "variance" : 11332.053889521325,
          "n" : 430,
          "max" : 791.0,
          "min" : 24.0,
          "sum" : 56147.000000000044,
          "standardDeviation" : 106.45212017391351
        }, {
          "mean" : 195.69565217391303,
          "variance" : 10141.221343873516,
          "n" : 23,
          "max" : 436.0,
          "min" : 40.0,
          "sum" : 4501.0,
          "standardDeviation" : 100.70363123479468
        } ],
        "22" : [ {
          "mean" : 21797.897916666676,
          "variance" : 2.0614025958559927E11,
          "n" : 475,
          "max" : 9948121.0,
          "min" : 96.0,
          "sum" : 1.0354001510416672E7,
          "standardDeviation" : 454026.71681917494
        }, {
          "mean" : 203.89546351084795,
          "variance" : 14316.153082146386,
          "n" : 507,
          "max" : 776.0,
          "min" : 39.0,
          "sum" : 103374.99999999991,
          "standardDeviation" : 119.65012779828689
        }, {
          "mean" : 203.71505376344084,
          "variance" : 14404.301336115694,
          "n" : 372,
          "max" : 1118.0,
          "min" : 48.0,
          "sum" : 75781.99999999999,
          "standardDeviation" : 120.01792089565497
        }, {
          "mean" : 183.633952254642,
          "variance" : 14666.961397370049,
          "n" : 377,
          "max" : 921.0,
          "min" : 20.0,
          "sum" : 69230.00000000003,
          "standardDeviation" : 121.10723098712995
        }, {
          "mean" : 190.27168949771698,
          "variance" : 45658.44546670428,
          "n" : 438,
          "max" : 3941.0,
          "min" : 27.0,
          "sum" : 83339.00000000003,
          "standardDeviation" : 213.6783692063946
        }, {
          "mean" : 184.4590163934428,
          "variance" : 12482.079137660001,
          "n" : 366,
          "max" : 703.0,
          "min" : 28.0,
          "sum" : 67512.00000000006,
          "standardDeviation" : 111.72322559638171
        }, {
          "mean" : 174.30726256983215,
          "variance" : 12311.05378464236,
          "n" : 358,
          "max" : 631.0,
          "min" : 21.0,
          "sum" : 62401.999999999905,
          "standardDeviation" : 110.95518818262785
        }, {
          "mean" : 175.28636363636352,
          "variance" : 216720.847194036,
          "n" : 440,
          "max" : 9582.0,
          "min" : 27.0,
          "sum" : 77125.99999999994,
          "standardDeviation" : 465.53286371000274
        }, {
          "mean" : 264.8571428571429,
          "variance" : 21830.85714285714,
          "n" : 42,
          "max" : 861.0,
          "min" : 44.0,
          "sum" : 11124.000000000002,
          "standardDeviation" : 147.752689122253
        } ],
        "23" : [ {
          "mean" : 1083.0279441117764,
          "variance" : 3473019.571217566,
          "n" : 496,
          "max" : 29756.0,
          "min" : 95.0,
          "sum" : 537181.8602794411,
          "standardDeviation" : 1863.6039201551293
        }, {
          "mean" : 268.6109979633402,
          "variance" : 119939.90755226731,
          "n" : 491,
          "max" : 6734.0,
          "min" : 41.0,
          "sum" : 131888.00000000003,
          "standardDeviation" : 346.3234146751665
        }, {
          "mean" : 253.78590785907838,
          "variance" : 36998.53284435017,
          "n" : 369,
          "max" : 911.0,
          "min" : 38.0,
          "sum" : 93646.99999999993,
          "standardDeviation" : 192.3500268893929
        }, {
          "mean" : 238.2968749999999,
          "variance" : 37986.29283616189,
          "n" : 384,
          "max" : 1084.0,
          "min" : 25.0,
          "sum" : 91505.99999999996,
          "standardDeviation" : 194.90072559167626
        }, {
          "mean" : 256.2255125284736,
          "variance" : 290661.37140241923,
          "n" : 439,
          "max" : 9977.0,
          "min" : 28.0,
          "sum" : 112482.9999999999,
          "standardDeviation" : 539.130198933819
        }, {
          "mean" : 241.18032786885252,
          "variance" : 35492.59205030316,
          "n" : 366,
          "max" : 958.0,
          "min" : 39.0,
          "sum" : 88272.00000000001,
          "standardDeviation" : 188.39477713116986
        }, {
          "mean" : 199.71052631578942,
          "variance" : 23598.60199972228,
          "n" : 380,
          "max" : 849.0,
          "min" : 33.0,
          "sum" : 75889.99999999999,
          "standardDeviation" : 153.61836478664353
        }, {
          "mean" : 155.83752860411894,
          "variance" : 17676.819872777265,
          "n" : 437,
          "max" : 871.0,
          "min" : 32.0,
          "sum" : 68100.99999999999,
          "standardDeviation" : 132.95420216291498
        }, {
          "mean" : 223.6153846153846,
          "variance" : 12515.756410256408,
          "n" : 13,
          "max" : 455.0,
          "min" : 34.0,
          "sum" : 2907.0,
          "standardDeviation" : 111.87384149235427
        } ],
        "24" : [ {
          "mean" : 955.6449438202253,
          "variance" : 1426601.531308837,
          "n" : 440,
          "max" : 16738.0,
          "min" : 101.0,
          "sum" : 420483.77528089914,
          "standardDeviation" : 1194.4042579080322
        }, {
          "mean" : 366.10018903591714,
          "variance" : 1488522.2986552657,
          "n" : 529,
          "max" : 21283.0,
          "min" : 39.0,
          "sum" : 193667.00000000017,
          "standardDeviation" : 1220.0501213701286
        }, {
          "mean" : 224.54881266490764,
          "variance" : 26312.682134829916,
          "n" : 379,
          "max" : 874.0,
          "min" : 40.0,
          "sum" : 85104.0,
          "standardDeviation" : 162.21184338644917
        }, {
          "mean" : 216.64935064935068,
          "variance" : 25110.832454004325,
          "n" : 385,
          "max" : 913.0,
          "min" : 19.0,
          "sum" : 83410.00000000001,
          "standardDeviation" : 158.46397841151258
        }, {
          "mean" : 218.25170068027197,
          "variance" : 26360.566048237444,
          "n" : 441,
          "max" : 999.0,
          "min" : 40.0,
          "sum" : 96248.99999999994,
          "standardDeviation" : 162.35937314561622
        }, {
          "mean" : 218.5849056603773,
          "variance" : 25504.297501274857,
          "n" : 371,
          "max" : 778.0,
          "min" : 20.0,
          "sum" : 81094.99999999999,
          "standardDeviation" : 159.70064965827427
        }, {
          "mean" : 172.8421052631578,
          "variance" : 28480.702076291647,
          "n" : 437,
          "max" : 1055.0,
          "min" : 19.0,
          "sum" : 75531.99999999996,
          "standardDeviation" : 168.76226496551783
        }, {
          "mean" : 179.27343749999986,
          "variance" : 23699.83365290471,
          "n" : 384,
          "max" : 850.0,
          "min" : 18.0,
          "sum" : 68840.99999999994,
          "standardDeviation" : 153.94750291220936
        }, {
          "mean" : 166.36363636363635,
          "variance" : 9311.254545454545,
          "n" : 11,
          "max" : 340.0,
          "min" : 44.0,
          "sum" : 1829.9999999999998,
          "standardDeviation" : 96.4948420665817
        } ],
        "25" : [ {
          "mean" : 1150.4661654135325,
          "variance" : 2017554.3298824953,
          "n" : 394,
          "max" : 16924.0,
          "min" : 96.0,
          "sum" : 453283.6691729318,
          "standardDeviation" : 1420.4063960298458
        }, {
          "mean" : 2267.933682373474,
          "variance" : 2.2327480535200667E9,
          "n" : 573,
          "max" : 1131360.0,
          "min" : 39.0,
          "sum" : 1299526.0000000005,
          "standardDeviation" : 47251.96348851619
        }, {
          "mean" : 204.71117166212542,
          "variance" : 17251.293399443133,
          "n" : 367,
          "max" : 821.0,
          "min" : 18.0,
          "sum" : 75129.00000000003,
          "standardDeviation" : 131.3441791608716
        }, {
          "mean" : 189.57734806629827,
          "variance" : 17944.08956857103,
          "n" : 362,
          "max" : 1011.0,
          "min" : 29.0,
          "sum" : 68626.99999999997,
          "standardDeviation" : 133.95555071952424
        }, {
          "mean" : 181.0000000000001,
          "variance" : 13511.421874999995,
          "n" : 385,
          "max" : 722.0,
          "min" : 43.0,
          "sum" : 69685.00000000004,
          "standardDeviation" : 116.23864191825365
        }, {
          "mean" : 208.1398601398602,
          "variance" : 374868.2140382978,
          "n" : 429,
          "max" : 12554.0,
          "min" : 30.0,
          "sum" : 89292.00000000001,
          "standardDeviation" : 612.2648234532977
        }, {
          "mean" : 173.7896174863386,
          "variance" : 16583.520001497127,
          "n" : 366,
          "max" : 931.0,
          "min" : 31.0,
          "sum" : 63606.999999999935,
          "standardDeviation" : 128.777016588742
        }, {
          "mean" : 156.3735632183907,
          "variance" : 18514.643910033446,
          "n" : 348,
          "max" : 888.0,
          "min" : 21.0,
          "sum" : 54417.99999999996,
          "standardDeviation" : 136.06852652260716
        }, {
          "mean" : 173.67763157894737,
          "variance" : 28769.78280759846,
          "n" : 152,
          "max" : 1056.0,
          "min" : 37.0,
          "sum" : 26399.0,
          "standardDeviation" : 169.61657586332316
        } ],
        "26" : [ {
          "mean" : 1076.5755555555559,
          "variance" : 2437723.0688888887,
          "n" : 445,
          "max" : 23313.0,
          "min" : 110.0,
          "sum" : 479076.1222222224,
          "standardDeviation" : 1561.3209371839246
        }, {
          "mean" : 396.9347408829173,
          "variance" : 2354062.1341945976,
          "n" : 521,
          "max" : 34325.0,
          "min" : 46.0,
          "sum" : 206802.9999999999,
          "standardDeviation" : 1534.2953217013333
        }, {
          "mean" : 224.82978723404253,
          "variance" : 22032.104283687957,
          "n" : 376,
          "max" : 1251.0,
          "min" : 46.0,
          "sum" : 84535.99999999999,
          "standardDeviation" : 148.43215380667343
        }, {
          "mean" : 215.62021857923506,
          "variance" : 24681.282768171262,
          "n" : 366,
          "max" : 901.0,
          "min" : 21.0,
          "sum" : 78917.00000000003,
          "standardDeviation" : 157.10277772264647
        }, {
          "mean" : 206.23580786026193,
          "variance" : 24258.4956952978,
          "n" : 458,
          "max" : 911.0,
          "min" : 21.0,
          "sum" : 94455.99999999996,
          "standardDeviation" : 155.75139066890478
        }, {
          "mean" : 223.29729729729726,
          "variance" : 26505.786713542813,
          "n" : 370,
          "max" : 921.0,
          "min" : 27.0,
          "sum" : 82619.99999999999,
          "standardDeviation" : 162.80597874016425
        }, {
          "mean" : 187.76943005181363,
          "variance" : 27711.450595518472,
          "n" : 386,
          "max" : 1212.0,
          "min" : 31.0,
          "sum" : 72479.00000000006,
          "standardDeviation" : 166.46756619689756
        }, {
          "mean" : 163.3610451306414,
          "variance" : 27350.95981223844,
          "n" : 421,
          "max" : 1366.0,
          "min" : 24.0,
          "sum" : 68775.00000000003,
          "standardDeviation" : 165.38125592774546
        }, {
          "mean" : 213.06896551724137,
          "variance" : 22662.709359605906,
          "n" : 29,
          "max" : 675.0,
          "min" : 57.0,
          "sum" : 6179.0,
          "standardDeviation" : 150.54138753049244
        } ],
        "27" : [ {
          "mean" : 964.7044025157244,
          "variance" : 1102994.019581417,
          "n" : 472,
          "max" : 15670.0,
          "min" : 82.0,
          "sum" : 455340.4779874219,
          "standardDeviation" : 1050.235221072602
        }, {
          "mean" : 327.47722772277245,
          "variance" : 1321580.5714049987,
          "n" : 505,
          "max" : 19182.0,
          "min" : 49.0,
          "sum" : 165376.0000000001,
          "standardDeviation" : 1149.6001789339625
        }, {
          "mean" : 222.9673913043478,
          "variance" : 23817.715555029055,
          "n" : 368,
          "max" : 1000.0,
          "min" : 44.0,
          "sum" : 82052.0,
          "standardDeviation" : 154.32989196856536
        }, {
          "mean" : 246.01666666666674,
          "variance" : 122892.17799442889,
          "n" : 360,
          "max" : 5795.0,
          "min" : 20.0,
          "sum" : 88566.00000000003,
          "standardDeviation" : 350.55980658716265
        }, {
          "mean" : 223.70549450549453,
          "variance" : 221274.36241467783,
          "n" : 455,
          "max" : 9623.0,
          "min" : 28.0,
          "sum" : 101786.00000000001,
          "standardDeviation" : 470.3980892974352
        }, {
          "mean" : 244.4026666666665,
          "variance" : 278137.8721853833,
          "n" : 375,
          "max" : 9892.0,
          "min" : 23.0,
          "sum" : 91650.99999999994,
          "standardDeviation" : 527.3877816041847
        }, {
          "mean" : 201.7307692307693,
          "variance" : 22762.89150243695,
          "n" : 364,
          "max" : 813.0,
          "min" : 19.0,
          "sum" : 73430.00000000003,
          "standardDeviation" : 150.87376015211177
        }, {
          "mean" : 150.11294117647066,
          "variance" : 18659.190044395127,
          "n" : 425,
          "max" : 791.0,
          "min" : 17.0,
          "sum" : 63798.00000000003,
          "standardDeviation" : 136.59864583660823
        }, {
          "mean" : 224.26415094339617,
          "variance" : 24368.813497822925,
          "n" : 53,
          "max" : 830.0,
          "min" : 45.0,
          "sum" : 11885.999999999996,
          "standardDeviation" : 156.10513603921854
        } ],
        "28" : [ {
          "mean" : 1002.1063394683033,
          "variance" : 1418463.132111369,
          "n" : 484,
          "max" : 13401.0,
          "min" : 123.0,
          "sum" : 485019.4683026588,
          "standardDeviation" : 1190.9924987636862
        }, {
          "mean" : 290.1272365805168,
          "variance" : 1054525.7367666513,
          "n" : 503,
          "max" : 22595.0,
          "min" : 43.0,
          "sum" : 145933.99999999994,
          "standardDeviation" : 1026.9010355271103
        }, {
          "mean" : 195.45380434782618,
          "variance" : 12204.090503198668,
          "n" : 368,
          "max" : 663.0,
          "min" : 41.0,
          "sum" : 71927.00000000003,
          "standardDeviation" : 110.47212545795735
        }, {
          "mean" : 179.20052770448544,
          "variance" : 10589.192486493279,
          "n" : 379,
          "max" : 655.0,
          "min" : 44.0,
          "sum" : 67916.99999999999,
          "standardDeviation" : 102.9038020993067
        }, {
          "mean" : 183.27107061503435,
          "variance" : 16859.24370455893,
          "n" : 439,
          "max" : 1649.0,
          "min" : 51.0,
          "sum" : 80456.00000000007,
          "standardDeviation" : 129.84315039523236
        }, {
          "mean" : 180.88219178082196,
          "variance" : 13270.159160018055,
          "n" : 365,
          "max" : 646.0,
          "min" : 31.0,
          "sum" : 66022.00000000001,
          "standardDeviation" : 115.1961768463609
        }, {
          "mean" : 175.50130548302863,
          "variance" : 16189.41819200853,
          "n" : 383,
          "max" : 779.0,
          "min" : 32.0,
          "sum" : 67216.99999999997,
          "standardDeviation" : 127.23764455540872
        }, {
          "mean" : 129.85483870967735,
          "variance" : 10866.978879535136,
          "n" : 434,
          "max" : 704.0,
          "min" : 31.0,
          "sum" : 56356.99999999997,
          "standardDeviation" : 104.24480264998891
        }, {
          "mean" : 188.94444444444446,
          "variance" : 11544.996732026144,
          "n" : 18,
          "max" : 521.0,
          "min" : 57.0,
          "sum" : 3401.0,
          "standardDeviation" : 107.44764647039108
        } ],
        "29" : [ {
          "mean" : 879.776344086022,
          "variance" : 1034626.7515943644,
          "n" : 460,
          "max" : 15330.0,
          "min" : 94.0,
          "sum" : 404697.11827957013,
          "standardDeviation" : 1017.1660393438057
        }, {
          "mean" : 300.6510721247565,
          "variance" : 1628306.672933419,
          "n" : 513,
          "max" : 28728.0,
          "min" : 34.0,
          "sum" : 154234.0000000001,
          "standardDeviation" : 1276.0512031001808
        }, {
          "mean" : 192.94999999999987,
          "variance" : 16693.10303430079,
          "n" : 380,
          "max" : 801.0,
          "min" : 32.0,
          "sum" : 73320.99999999996,
          "standardDeviation" : 129.2017919159823
        }, {
          "mean" : 207.56728232189968,
          "variance" : 287507.67998492287,
          "n" : 379,
          "max" : 10247.0,
          "min" : 25.0,
          "sum" : 78667.99999999999,
          "standardDeviation" : 536.1974263132217
        }, {
          "mean" : 179.78341013824894,
          "variance" : 16804.761294579665,
          "n" : 434,
          "max" : 777.0,
          "min" : 19.0,
          "sum" : 78026.00000000004,
          "standardDeviation" : 129.63317975958032
        }, {
          "mean" : 195.99999999999994,
          "variance" : 76659.54838709679,
          "n" : 373,
          "max" : 4927.0,
          "min" : 20.0,
          "sum" : 73107.99999999999,
          "standardDeviation" : 276.87460769651085
        }, {
          "mean" : 163.44764397905786,
          "variance" : 17529.413262151153,
          "n" : 382,
          "max" : 739.0,
          "min" : 26.0,
          "sum" : 62437.0000000001,
          "standardDeviation" : 132.39869056056088
        }, {
          "mean" : 138.52235294117648,
          "variance" : 13784.23593784685,
          "n" : 425,
          "max" : 770.0,
          "min" : 18.0,
          "sum" : 58872.0,
          "standardDeviation" : 117.40628576804076
        }, {
          "mean" : 285.4333333333333,
          "variance" : 29243.288505747125,
          "n" : 30,
          "max" : 649.0,
          "min" : 90.0,
          "sum" : 8562.999999999998,
          "standardDeviation" : 171.00669140635148
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
