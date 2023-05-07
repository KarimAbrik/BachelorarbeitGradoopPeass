if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Predecessor: e56da032dc5cd886fe871f750231dd077f5ba7d6<br>Comitter: <br>Test Case: org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment<br>";
   if (typeof jenkins !== 'undefined') {
         } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='testAssignment_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
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
    "meanOld" : 4.1563969801862073E9,
    "meanCurrent" : 4.040042373872414E9,
    "deviationOld" : 5.554427725245873E7,
    "deviationCurrent" : 6.1530995184478074E7,
    "vms" : 29,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 7.559017204232653,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 4.890651458837083E7,
  "inVMDeviation" : 5.434333292658569E7,
  "ess" : 0,
  "values" : [ 4.0584081168E9, 4.0402787809E9, 4.0991659394E9, 4.0719859252E9, 3.985624582E9, 4.0388186935E9, 4.0901469858E9, 4.0083768374E9, 3.9667818424E9, 4.0142378444E9, 3.9915806867E9, 3.9451596721E9, 3.9853632902E9, 4.054298239E9, 4.2084940522E9, 4.1161593846E9, 4.1073367492E9, 4.0593200266E9, 4.0362584854E9, 3.9218796824E9, 4.1098662026E9, 4.0537049225E9, 4.0758499706E9, 3.975700457E9, 3.9692477613E9, 4.1063306668E9, 4.453619637E9, 4.0082190975E9, 4.0304746148E9, 4.032159333E9 ],
  "valuesPredecessor" : [ 4.1757114606E9, 4.2197459062E9, 4.2468627756E9, 4.1737046146E9, 4.1022434082E9, 4.1691780704E9, 4.1241297852E9, 4.0972543726E9, 4.0606296736E9, 4.1148089372E9, 4.179589366E9, 4.0649792928E9, 4.1090828224E9, 4.1482864752E9, 4.5847649064E9, 4.1955204116E9, 4.2261831734E9, 4.1505616562E9, 4.1656897504E9, 4.0436547196E9, 4.176886451E9, 4.2150259854E9, 4.1787784016E9, 4.0994872428E9, 4.099088176E9, 4.2155497178E9, 4.179761414E9, 4.1744365096E9, 4.1784172078E9, 4.2502646476E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4.059669717E9,
        "variance" : 1.7196488091196178E16,
        "n" : 2,
        "max" : 4.152396434E9,
        "min" : 3.966943E9,
        "sum" : 8.119339434E9,
        "standardDeviation" : 1.3113538077573183E8
      }, {
        "mean" : 4.022954102E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.022954102E9,
        "min" : 4.022954102E9,
        "sum" : 4.022954102E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.048078669E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.048078669E9,
        "min" : 4.048078669E9,
        "sum" : 4.048078669E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.101668379E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.101668379E9,
        "min" : 4.101668379E9,
        "sum" : 4.101668379E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.0637561435E9,
        "variance" : 6.427262977988405E14,
        "n" : 1,
        "max" : 4.081682748E9,
        "min" : 4.045829539E9,
        "sum" : 4.0637561435E9,
        "standardDeviation" : 2.5352047211198557E7
      }, {
        "mean" : 3.92535772E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.92535772E9,
        "min" : 3.92535772E9,
        "sum" : 3.92535772E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.03485677E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.03485677E9,
        "min" : 4.03485677E9,
        "sum" : 4.03485677E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.12328795E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.12328795E9,
        "min" : 4.12328795E9,
        "sum" : 4.12328795E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.054135321E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.054135321E9,
        "min" : 4.054135321E9,
        "sum" : 4.054135321E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.074293994E9,
        "variance" : 6.80182565532192E14,
        "n" : 1,
        "max" : 4.092735558E9,
        "min" : 4.05585243E9,
        "sum" : 4.074293994E9,
        "standardDeviation" : 2.6080309920171425E7
      }, {
        "mean" : 4.022908949E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.022908949E9,
        "min" : 4.022908949E9,
        "sum" : 4.022908949E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.123719653E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.123719653E9,
        "min" : 4.123719653E9,
        "sum" : 4.123719653E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.117913305E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.117913305E9,
        "min" : 4.117913305E9,
        "sum" : 4.117913305E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.156993796E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.156993796E9,
        "min" : 4.156993796E9,
        "sum" : 4.156993796E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.1114812305E9,
        "variance" : 2.646309113323345E15,
        "n" : 2,
        "max" : 4.147856422E9,
        "min" : 4.075106039E9,
        "sum" : 8.222962461E9,
        "standardDeviation" : 5.144228915321853E7
      }, {
        "mean" : 4.023002338E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023002338E9,
        "min" : 4.023002338E9,
        "sum" : 4.023002338E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.047806945E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.047806945E9,
        "min" : 4.047806945E9,
        "sum" : 4.047806945E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.066157882E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.066157882E9,
        "min" : 4.066157882E9,
        "sum" : 4.066157882E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 3.9475729215E9,
        "variance" : 8.893921781778845E14,
        "n" : 2,
        "max" : 3.96866074E9,
        "min" : 3.926485103E9,
        "sum" : 7.895145843E9,
        "standardDeviation" : 2.982267892356226E7
      }, {
        "mean" : 4.075641435E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.075641435E9,
        "min" : 4.075641435E9,
        "sum" : 4.075641435E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.974307738E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.974307738E9,
        "min" : 3.974307738E9,
        "sum" : 3.974307738E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.983027894E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.983027894E9,
        "min" : 3.983027894E9,
        "sum" : 3.983027894E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.0289712395E9,
        "variance" : 8.351650855634646E14,
        "n" : 1,
        "max" : 4.049406076E9,
        "min" : 4.008536403E9,
        "sum" : 4.0289712395E9,
        "standardDeviation" : 2.889922292317675E7
      }, {
        "mean" : 3.927004513E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.927004513E9,
        "min" : 3.927004513E9,
        "sum" : 3.927004513E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.09300832E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.09300832E9,
        "min" : 4.09300832E9,
        "sum" : 4.09300832E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.09330281E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.09330281E9,
        "min" : 4.09330281E9,
        "sum" : 4.09330281E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.051806585E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.051806585E9,
        "min" : 4.051806585E9,
        "sum" : 4.051806585E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.0499415585E9,
        "variance" : 1.9291223940883704E16,
        "n" : 2,
        "max" : 4.148153635E9,
        "min" : 3.951729482E9,
        "sum" : 8.099883117E9,
        "standardDeviation" : 1.3889285057512394E8
      }, {
        "mean" : 4.076476008E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.076476008E9,
        "min" : 4.076476008E9,
        "sum" : 4.076476008E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.085992119E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.085992119E9,
        "min" : 4.085992119E9,
        "sum" : 4.085992119E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.188383685E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.188383685E9,
        "min" : 4.188383685E9,
        "sum" : 4.188383685E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.041415846E9,
        "variance" : 1.052340297366402E15,
        "n" : 1,
        "max" : 4.064354245E9,
        "min" : 4.018477447E9,
        "sum" : 4.041415846E9,
        "standardDeviation" : 3.2439794964925442E7
      }, {
        "mean" : 3.897606536E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.897606536E9,
        "min" : 3.897606536E9,
        "sum" : 3.897606536E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.972277872E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.972277872E9,
        "min" : 3.972277872E9,
        "sum" : 3.972277872E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.042677746E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.042677746E9,
        "min" : 4.042677746E9,
        "sum" : 4.042677746E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.087906187E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.087906187E9,
        "min" : 4.087906187E9,
        "sum" : 4.087906187E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 3.988697832E9,
        "variance" : 1.1488690817863198E14,
        "n" : 1,
        "max" : 3.996276978E9,
        "min" : 3.981118686E9,
        "sum" : 3.988697832E9,
        "standardDeviation" : 1.0718531064405793E7
      }, {
        "mean" : 3.92055708E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.92055708E9,
        "min" : 3.92055708E9,
        "sum" : 3.92055708E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.959732618E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.959732618E9,
        "min" : 3.959732618E9,
        "sum" : 3.959732618E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.977421588E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.977421588E9,
        "min" : 3.977421588E9,
        "sum" : 3.977421588E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.987500094E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.987500094E9,
        "min" : 3.987500094E9,
        "sum" : 3.987500094E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 3.9644495035E9,
        "variance" : 3.6940468630342205E15,
        "n" : 2,
        "max" : 4.007426514E9,
        "min" : 3.921472493E9,
        "sum" : 7.928899007E9,
        "standardDeviation" : 6.077867111935091E7
      }, {
        "mean" : 3.98482331E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.98482331E9,
        "min" : 3.98482331E9,
        "sum" : 3.98482331E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.10100536E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.10100536E9,
        "min" : 4.10100536E9,
        "sum" : 4.10100536E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.056461545E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.056461545E9,
        "min" : 4.056461545E9,
        "sum" : 4.056461545E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.0044369695E9,
        "variance" : 3.0104043144218164E16,
        "n" : 1,
        "max" : 4.12712365E9,
        "min" : 3.881750289E9,
        "sum" : 4.0044369695E9,
        "standardDeviation" : 1.7350516748563474E8
      }, {
        "mean" : 4.022671012E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.022671012E9,
        "min" : 4.022671012E9,
        "sum" : 4.022671012E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.983983189E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.983983189E9,
        "min" : 3.983983189E9,
        "sum" : 3.983983189E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.052691812E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.052691812E9,
        "min" : 4.052691812E9,
        "sum" : 4.052691812E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.894120451E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.894120451E9,
        "min" : 3.894120451E9,
        "sum" : 3.894120451E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 3.9538092905E9,
        "variance" : 4.92716420243045E13,
        "n" : 1,
        "max" : 3.958772739E9,
        "min" : 3.948845842E9,
        "sum" : 3.9538092905E9,
        "standardDeviation" : 7019376.184840395
      }, {
        "mean" : 3.90003869E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.90003869E9,
        "min" : 3.90003869E9,
        "sum" : 3.90003869E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.904495548E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.904495548E9,
        "min" : 3.904495548E9,
        "sum" : 3.904495548E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.986508308E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.986508308E9,
        "min" : 3.986508308E9,
        "sum" : 3.986508308E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.980946524E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.980946524E9,
        "min" : 3.980946524E9,
        "sum" : 3.980946524E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 3.979830079E9,
        "variance" : 3.1013798025779994E14,
        "n" : 1,
        "max" : 3.992282749E9,
        "min" : 3.967377409E9,
        "sum" : 3.979830079E9,
        "standardDeviation" : 1.761073480175657E7
      }, {
        "mean" : 3.88125118E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.88125118E9,
        "min" : 3.88125118E9,
        "sum" : 3.88125118E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.964079479E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.964079479E9,
        "min" : 3.964079479E9,
        "sum" : 3.964079479E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.078050465E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.078050465E9,
        "min" : 4.078050465E9,
        "sum" : 4.078050465E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.023605248E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023605248E9,
        "min" : 4.023605248E9,
        "sum" : 4.023605248E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.034730895E9,
        "variance" : 1.320724759930578E15,
        "n" : 1,
        "max" : 4.060428412E9,
        "min" : 4.009033378E9,
        "sum" : 4.034730895E9,
        "standardDeviation" : 3.634177706071317E7
      }, {
        "mean" : 4.005864362E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.005864362E9,
        "min" : 4.005864362E9,
        "sum" : 4.005864362E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.062226797E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.062226797E9,
        "min" : 4.062226797E9,
        "sum" : 4.062226797E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.115402789E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.115402789E9,
        "min" : 4.115402789E9,
        "sum" : 4.115402789E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.053266352E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.053266352E9,
        "min" : 4.053266352E9,
        "sum" : 4.053266352E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.201434727E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.201434727E9,
        "min" : 4.201434727E9,
        "sum" : 4.201434727E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.188128064E9,
        "variance" : 5.867889445620001E13,
        "n" : 2,
        "max" : 4.193544654E9,
        "min" : 4.182711474E9,
        "sum" : 8.376256128E9,
        "standardDeviation" : 7660215.039814483
      }, {
        "mean" : 4.237497699E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.237497699E9,
        "min" : 4.237497699E9,
        "sum" : 4.237497699E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.227281707E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.227281707E9,
        "min" : 4.227281707E9,
        "sum" : 4.227281707E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.089301734E9,
        "variance" : 1.5762949381257798E16,
        "n" : 2,
        "max" : 4.178079404E9,
        "min" : 4.000524064E9,
        "sum" : 8.178603468E9,
        "standardDeviation" : 1.2555058494988304E8
      }, {
        "mean" : 4.1065693E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.1065693E9,
        "min" : 4.1065693E9,
        "sum" : 4.1065693E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.180714534E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.180714534E9,
        "min" : 4.180714534E9,
        "sum" : 4.180714534E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.114909621E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.114909621E9,
        "min" : 4.114909621E9,
        "sum" : 4.114909621E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.0465432295E9,
        "variance" : 2.6163591955879805E15,
        "n" : 2,
        "max" : 4.082711995E9,
        "min" : 4.010374464E9,
        "sum" : 8.093086459E9,
        "standardDeviation" : 5.11503587043921E7
      }, {
        "mean" : 4.104175932E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.104175932E9,
        "min" : 4.104175932E9,
        "sum" : 4.104175932E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.228536215E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.228536215E9,
        "min" : 4.228536215E9,
        "sum" : 4.228536215E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.11088514E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.11088514E9,
        "min" : 4.11088514E9,
        "sum" : 4.11088514E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.0302970535E9,
        "variance" : 7.33082239525392E15,
        "n" : 2,
        "max" : 4.090839693E9,
        "min" : 3.969754414E9,
        "sum" : 8.060594107E9,
        "standardDeviation" : 8.562022188276505E7
      }, {
        "mean" : 3.999685149E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.999685149E9,
        "min" : 3.999685149E9,
        "sum" : 3.999685149E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.079225353E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.079225353E9,
        "min" : 4.079225353E9,
        "sum" : 4.079225353E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.157095524E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157095524E9,
        "min" : 4.157095524E9,
        "sum" : 4.157095524E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 3.997984698E9,
        "variance" : 1.3505318923274978E16,
        "n" : 2,
        "max" : 4.080159265E9,
        "min" : 3.915810131E9,
        "sum" : 7.995969396E9,
        "standardDeviation" : 1.1621238713353658E8
      }, {
        "mean" : 4.04293726E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.04293726E9,
        "min" : 4.04293726E9,
        "sum" : 4.04293726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.105915299E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.105915299E9,
        "min" : 4.105915299E9,
        "sum" : 4.105915299E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.036470472E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.036470472E9,
        "min" : 4.036470472E9,
        "sum" : 4.036470472E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 3.961371533E9,
        "variance" : 3.263523037449248E15,
        "n" : 1,
        "max" : 4.001766601E9,
        "min" : 3.920976465E9,
        "sum" : 3.961371533E9,
        "standardDeviation" : 5.712725301858342E7
      }, {
        "mean" : 3.816410252E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.816410252E9,
        "min" : 3.816410252E9,
        "sum" : 3.816410252E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.888329982E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.888329982E9,
        "min" : 3.888329982E9,
        "sum" : 3.888329982E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.974622183E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.974622183E9,
        "min" : 3.974622183E9,
        "sum" : 3.974622183E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.968664462E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.968664462E9,
        "min" : 3.968664462E9,
        "sum" : 3.968664462E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.109914925E9,
        "variance" : 8.927095812449043E15,
        "n" : 2,
        "max" : 4.176724714E9,
        "min" : 4.043105136E9,
        "sum" : 8.21982985E9,
        "standardDeviation" : 9.448330970308483E7
      }, {
        "mean" : 4.053935357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.053935357E9,
        "min" : 4.053935357E9,
        "sum" : 4.053935357E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.084498617E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.084498617E9,
        "min" : 4.084498617E9,
        "sum" : 4.084498617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.191067189E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.191067189E9,
        "min" : 4.191067189E9,
        "sum" : 4.191067189E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.0860993935E9,
        "variance" : 1.7526241235943848E15,
        "n" : 1,
        "max" : 4.115701962E9,
        "min" : 4.056496825E9,
        "sum" : 4.0860993935E9,
        "standardDeviation" : 4.186435385377857E7
      }, {
        "mean" : 4.011223932E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.011223932E9,
        "min" : 4.011223932E9,
        "sum" : 4.011223932E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.054194367E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.054194367E9,
        "min" : 4.054194367E9,
        "sum" : 4.054194367E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.158373695E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.158373695E9,
        "min" : 4.158373695E9,
        "sum" : 4.158373695E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.958633225E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.958633225E9,
        "min" : 3.958633225E9,
        "sum" : 3.958633225E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.046450505E9,
        "variance" : 2.983783413000392E15,
        "n" : 2,
        "max" : 4.085075519E9,
        "min" : 4.007825491E9,
        "sum" : 8.09290101E9,
        "standardDeviation" : 5.462401864565067E7
      }, {
        "mean" : 4.06226444E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.06226444E9,
        "min" : 4.06226444E9,
        "sum" : 4.06226444E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.126463649E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.126463649E9,
        "min" : 4.126463649E9,
        "sum" : 4.126463649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.097620754E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.097620754E9,
        "min" : 4.097620754E9,
        "sum" : 4.097620754E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.030956447E9,
        "variance" : 2.27943105313032E14,
        "n" : 1,
        "max" : 4.041632193E9,
        "min" : 4.020280701E9,
        "sum" : 4.030956447E9,
        "standardDeviation" : 1.509778478165032E7
      }, {
        "mean" : 3.878036454E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.878036454E9,
        "min" : 3.878036454E9,
        "sum" : 3.878036454E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.974758008E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.974758008E9,
        "min" : 3.974758008E9,
        "sum" : 3.974758008E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.004582851E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.004582851E9,
        "min" : 4.004582851E9,
        "sum" : 4.004582851E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.990168525E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.990168525E9,
        "min" : 3.990168525E9,
        "sum" : 3.990168525E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.0645509865E9,
        "variance" : 5.55401401641845E13,
        "n" : 1,
        "max" : 4.069820718E9,
        "min" : 4.059281255E9,
        "sum" : 4.0645509865E9,
        "standardDeviation" : 7452525.757364714
      }, {
        "mean" : 3.892839914E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.892839914E9,
        "min" : 3.892839914E9,
        "sum" : 3.892839914E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.90489814E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.90489814E9,
        "min" : 3.90489814E9,
        "sum" : 3.90489814E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.988899025E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.988899025E9,
        "min" : 3.988899025E9,
        "sum" : 3.988899025E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.995050741E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.995050741E9,
        "min" : 3.995050741E9,
        "sum" : 3.995050741E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.07545632E9,
        "variance" : 8.1098585858205E14,
        "n" : 2,
        "max" : 4.095593175E9,
        "min" : 4.055319465E9,
        "sum" : 8.15091264E9,
        "standardDeviation" : 2.847781344454047E7
      }, {
        "mean" : 4.120109844E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.120109844E9,
        "min" : 4.120109844E9,
        "sum" : 4.120109844E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.127229767E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.127229767E9,
        "min" : 4.127229767E9,
        "sum" : 4.127229767E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.133401083E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133401083E9,
        "min" : 4.133401083E9,
        "sum" : 4.133401083E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.446145812E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.446145812E9,
        "min" : 4.446145812E9,
        "sum" : 4.446145812E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.405425011E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.405425011E9,
        "min" : 4.405425011E9,
        "sum" : 4.405425011E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.495451058E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.495451058E9,
        "min" : 4.495451058E9,
        "sum" : 4.495451058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.460538152E9,
        "variance" : 2.6458069412551996E13,
        "n" : 2,
        "max" : 4.464175326E9,
        "min" : 4.456900978E9,
        "sum" : 8.921076304E9,
        "standardDeviation" : 5143740.799510799
      } ],
      "27" : [ {
        "mean" : 4.0914294685E9,
        "variance" : 2.2082044205542445E15,
        "n" : 1,
        "max" : 4.124657502E9,
        "min" : 4.058201435E9,
        "sum" : 4.0914294685E9,
        "standardDeviation" : 4.699153562668754E7
      }, {
        "mean" : 3.972185133E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.972185133E9,
        "min" : 3.972185133E9,
        "sum" : 3.972185133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.864050046E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.864050046E9,
        "min" : 3.864050046E9,
        "sum" : 3.864050046E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.113048811E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.113048811E9,
        "min" : 4.113048811E9,
        "sum" : 4.113048811E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.000382029E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.000382029E9,
        "min" : 4.000382029E9,
        "sum" : 4.000382029E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.06359532E9,
        "variance" : 8.285639559014481E14,
        "n" : 1,
        "max" : 4.083949238E9,
        "min" : 4.043241402E9,
        "sum" : 4.06359532E9,
        "standardDeviation" : 2.8784786883029863E7
      }, {
        "mean" : 3.952072554E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.952072554E9,
        "min" : 3.952072554E9,
        "sum" : 3.952072554E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.023147378E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023147378E9,
        "min" : 4.023147378E9,
        "sum" : 4.023147378E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.12231623E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.12231623E9,
        "min" : 4.12231623E9,
        "sum" : 4.12231623E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.991241592E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.991241592E9,
        "min" : 3.991241592E9,
        "sum" : 3.991241592E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.008812053E9,
        "variance" : 3.66408367332872E14,
        "n" : 2,
        "max" : 4.022347347E9,
        "min" : 3.995276759E9,
        "sum" : 8.017624106E9,
        "standardDeviation" : 1.914179634550718E7
      }, {
        "mean" : 4.039973628E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.039973628E9,
        "min" : 4.039973628E9,
        "sum" : 4.039973628E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.046721762E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.046721762E9,
        "min" : 4.046721762E9,
        "sum" : 4.046721762E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.056477169E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.056477169E9,
        "min" : 4.056477169E9,
        "sum" : 4.056477169E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.1308641825E9,
        "variance" : 5.35633521056248E15,
        "n" : 2,
        "max" : 4.182615198E9,
        "min" : 4.079113167E9,
        "sum" : 8.261728365E9,
        "standardDeviation" : 7.318698798668025E7
      }, {
        "mean" : 4.183070137E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.183070137E9,
        "min" : 4.183070137E9,
        "sum" : 4.183070137E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.227974331E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.227974331E9,
        "min" : 4.227974331E9,
        "sum" : 4.227974331E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.20578447E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.20578447E9,
        "min" : 4.20578447E9,
        "sum" : 4.20578447E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.140957495E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.140957495E9,
        "min" : 4.140957495E9,
        "sum" : 4.140957495E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.167844125E9,
        "variance" : 7.420935522809762E15,
        "n" : 2,
        "max" : 4.228757734E9,
        "min" : 4.106930516E9,
        "sum" : 8.33568825E9,
        "standardDeviation" : 8.614485198089182E7
      }, {
        "mean" : 4.199766611E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.199766611E9,
        "min" : 4.199766611E9,
        "sum" : 4.199766611E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.422317175E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.422317175E9,
        "min" : 4.422317175E9,
        "sum" : 4.422317175E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.203545726E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.203545726E9,
        "min" : 4.203545726E9,
        "sum" : 4.203545726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1940339E9,
        "variance" : 9.413432827986338E15,
        "n" : 2,
        "max" : 4.262639413E9,
        "min" : 4.125428387E9,
        "sum" : 8.3880678E9,
        "standardDeviation" : 9.702284693816368E7
      }, {
        "mean" : 4.306482142E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.306482142E9,
        "min" : 4.306482142E9,
        "sum" : 4.306482142E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.33621821E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.33621821E9,
        "min" : 4.33621821E9,
        "sum" : 4.33621821E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.1577817645E9,
        "variance" : 1.8964505234800445E15,
        "n" : 2,
        "max" : 4.188575031E9,
        "min" : 4.126988498E9,
        "sum" : 8.315563529E9,
        "standardDeviation" : 4.354825511406909E7
      }, {
        "mean" : 4.172145854E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.172145854E9,
        "min" : 4.172145854E9,
        "sum" : 4.172145854E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.196083974E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.196083974E9,
        "min" : 4.196083974E9,
        "sum" : 4.196083974E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.184729716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.184729716E9,
        "min" : 4.184729716E9,
        "sum" : 4.184729716E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.056999527E9,
        "variance" : 4.466764914545952E15,
        "n" : 2,
        "max" : 4.104258203E9,
        "min" : 4.009740851E9,
        "sum" : 8.113999054E9,
        "standardDeviation" : 6.683386053899589E7
      }, {
        "mean" : 4.135389311E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.135389311E9,
        "min" : 4.135389311E9,
        "sum" : 4.135389311E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.146321697E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.146321697E9,
        "min" : 4.146321697E9,
        "sum" : 4.146321697E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.115506979E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.115506979E9,
        "min" : 4.115506979E9,
        "sum" : 4.115506979E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.105225918E9,
        "variance" : 4.977601540891848E15,
        "n" : 2,
        "max" : 4.1551138E9,
        "min" : 4.055338036E9,
        "sum" : 8.210451836E9,
        "standardDeviation" : 7.055211932246861E7
      }, {
        "mean" : 4.177195728E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.177195728E9,
        "min" : 4.177195728E9,
        "sum" : 4.177195728E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.185201981E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.185201981E9,
        "min" : 4.185201981E9,
        "sum" : 4.185201981E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.273040807E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.273040807E9,
        "min" : 4.273040807E9,
        "sum" : 4.273040807E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.10393958E9,
        "variance" : 2.9330645996178004E13,
        "n" : 2,
        "max" : 4.107769113E9,
        "min" : 4.100110047E9,
        "sum" : 8.20787916E9,
        "standardDeviation" : 5415777.506155326
      }, {
        "mean" : 4.087873907E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.087873907E9,
        "min" : 4.087873907E9,
        "sum" : 4.087873907E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.102992729E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.102992729E9,
        "min" : 4.102992729E9,
        "sum" : 4.102992729E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.22190313E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.22190313E9,
        "min" : 4.22190313E9,
        "sum" : 4.22190313E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.070930865E9,
        "variance" : 2.7912149246178E15,
        "n" : 2,
        "max" : 4.108288695E9,
        "min" : 4.033573035E9,
        "sum" : 8.14186173E9,
        "standardDeviation" : 5.283194984682848E7
      }, {
        "mean" : 4.106084564E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.106084564E9,
        "min" : 4.106084564E9,
        "sum" : 4.106084564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.125545837E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.125545837E9,
        "min" : 4.125545837E9,
        "sum" : 4.125545837E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.112779732E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.112779732E9,
        "min" : 4.112779732E9,
        "sum" : 4.112779732E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.0537083665E9,
        "variance" : 1.4023583940057384E16,
        "n" : 2,
        "max" : 4.13744481E9,
        "min" : 3.969971923E9,
        "sum" : 8.107416733E9,
        "standardDeviation" : 1.184212140625884E8
      }, {
        "mean" : 4.054079954E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.054079954E9,
        "min" : 4.054079954E9,
        "sum" : 4.054079954E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.079608899E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.079608899E9,
        "min" : 4.079608899E9,
        "sum" : 4.079608899E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.062042782E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.062042782E9,
        "min" : 4.062042782E9,
        "sum" : 4.062042782E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.104292799E9,
        "variance" : 4.2524836864322E13,
        "n" : 2,
        "max" : 4.108903918E9,
        "min" : 4.09968168E9,
        "sum" : 8.208585598E9,
        "standardDeviation" : 6521107.027516264
      }, {
        "mean" : 4.101891732E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.101891732E9,
        "min" : 4.101891732E9,
        "sum" : 4.101891732E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.157623163E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157623163E9,
        "min" : 4.157623163E9,
        "sum" : 4.157623163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.105944193E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.105944193E9,
        "min" : 4.105944193E9,
        "sum" : 4.105944193E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.161129421E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.161129421E9,
        "min" : 4.161129421E9,
        "sum" : 4.161129421E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1017009245E9,
        "variance" : 3.123638747878921E15,
        "n" : 2,
        "max" : 4.141220785E9,
        "min" : 4.062181064E9,
        "sum" : 8.203401849E9,
        "standardDeviation" : 5.588952270219277E7
      }, {
        "mean" : 4.187252984E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.187252984E9,
        "min" : 4.187252984E9,
        "sum" : 4.187252984E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.346162576E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.346162576E9,
        "min" : 4.346162576E9,
        "sum" : 4.346162576E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.0656031195E9,
        "variance" : 5.540434324573512E15,
        "n" : 2,
        "max" : 4.118235972E9,
        "min" : 4.012970267E9,
        "sum" : 8.131206239E9,
        "standardDeviation" : 7.443409383188266E7
      }, {
        "mean" : 4.029242701E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.029242701E9,
        "min" : 4.029242701E9,
        "sum" : 4.029242701E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.063984703E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.063984703E9,
        "min" : 4.063984703E9,
        "sum" : 4.063984703E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.100462821E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.100462821E9,
        "min" : 4.100462821E9,
        "sum" : 4.100462821E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.096339176E9,
        "variance" : 5.2705499252179994E14,
        "n" : 2,
        "max" : 4.112572706E9,
        "min" : 4.080105646E9,
        "sum" : 8.192678352E9,
        "standardDeviation" : 2.295767829119051E7
      }, {
        "mean" : 4.087863647E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.087863647E9,
        "min" : 4.087863647E9,
        "sum" : 4.087863647E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.151159148E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.151159148E9,
        "min" : 4.151159148E9,
        "sum" : 4.151159148E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.113712965E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.113712965E9,
        "min" : 4.113712965E9,
        "sum" : 4.113712965E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.0968875745E9,
        "variance" : 9.404138298100502E12,
        "n" : 2,
        "max" : 4.099056E9,
        "min" : 4.094719149E9,
        "sum" : 8.193775149E9,
        "standardDeviation" : 3066616.75109566
      }, {
        "mean" : 4.143356433E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.143356433E9,
        "min" : 4.143356433E9,
        "sum" : 4.143356433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.180281844E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.180281844E9,
        "min" : 4.180281844E9,
        "sum" : 4.180281844E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.22401895E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.22401895E9,
        "min" : 4.22401895E9,
        "sum" : 4.22401895E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.543391408E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.543391408E9,
        "min" : 4.543391408E9,
        "sum" : 4.543391408E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.660155411E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.660155411E9,
        "min" : 4.660155411E9,
        "sum" : 4.660155411E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.517969619E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.517969619E9,
        "min" : 4.517969619E9,
        "sum" : 4.517969619E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.56039509E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.56039509E9,
        "min" : 4.56039509E9,
        "sum" : 4.56039509E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.641913004E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.641913004E9,
        "min" : 4.641913004E9,
        "sum" : 4.641913004E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.2384693E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.2384693E9,
        "min" : 4.2384693E9,
        "sum" : 4.2384693E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1564141425E9,
        "variance" : 2.1333007079387645E15,
        "n" : 2,
        "max" : 4.189073756E9,
        "min" : 4.123754529E9,
        "sum" : 8.312828285E9,
        "standardDeviation" : 4.618766835356343E7
      }, {
        "mean" : 4.206754103E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.206754103E9,
        "min" : 4.206754103E9,
        "sum" : 4.206754103E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.21955037E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.21955037E9,
        "min" : 4.21955037E9,
        "sum" : 4.21955037E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.248709862E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.248709862E9,
        "min" : 4.248709862E9,
        "sum" : 4.248709862E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.190362357E9,
        "variance" : 2.70752254863005E15,
        "n" : 2,
        "max" : 4.227155852E9,
        "min" : 4.153568862E9,
        "sum" : 8.380724714E9,
        "standardDeviation" : 5.203385963610666E7
      }, {
        "mean" : 4.269265602E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.269265602E9,
        "min" : 4.269265602E9,
        "sum" : 4.269265602E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.232215689E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.232215689E9,
        "min" : 4.232215689E9,
        "sum" : 4.232215689E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.1488654465E9,
        "variance" : 5.821173283498444E14,
        "n" : 2,
        "max" : 4.165925888E9,
        "min" : 4.131805005E9,
        "sum" : 8.297730893E9,
        "standardDeviation" : 2.4127107749372788E7
      }, {
        "mean" : 4.119645643E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.119645643E9,
        "min" : 4.119645643E9,
        "sum" : 4.119645643E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.180012962E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.180012962E9,
        "min" : 4.180012962E9,
        "sum" : 4.180012962E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.155418783E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.155418783E9,
        "min" : 4.155418783E9,
        "sum" : 4.155418783E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.144194064E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.144194064E9,
        "min" : 4.144194064E9,
        "sum" : 4.144194064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.119655974E9,
        "variance" : 6.26119777516005E15,
        "n" : 2,
        "max" : 4.175607729E9,
        "min" : 4.063704219E9,
        "sum" : 8.239311948E9,
        "standardDeviation" : 7.912773075957663E7
      }, {
        "mean" : 4.167613928E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.167613928E9,
        "min" : 4.167613928E9,
        "sum" : 4.167613928E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.277328812E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.277328812E9,
        "min" : 4.277328812E9,
        "sum" : 4.277328812E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.032649433E9,
        "variance" : 7.555863192688321E15,
        "n" : 2,
        "max" : 4.094114314E9,
        "min" : 3.971184552E9,
        "sum" : 8.065298866E9,
        "standardDeviation" : 8.692446831984836E7
      }, {
        "mean" : 4.015354983E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.015354983E9,
        "min" : 4.015354983E9,
        "sum" : 4.015354983E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.096485396E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.096485396E9,
        "min" : 4.096485396E9,
        "sum" : 4.096485396E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.041134353E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.041134353E9,
        "min" : 4.041134353E9,
        "sum" : 4.041134353E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.181545044E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.181545044E9,
        "min" : 4.181545044E9,
        "sum" : 4.181545044E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.155906323E9,
        "variance" : 3.5219519063045115E15,
        "n" : 2,
        "max" : 4.197870307E9,
        "min" : 4.113942339E9,
        "sum" : 8.311812646E9,
        "standardDeviation" : 5.934603530400756E7
      }, {
        "mean" : 4.239463123E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.239463123E9,
        "min" : 4.239463123E9,
        "sum" : 4.239463123E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.151611442E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.151611442E9,
        "min" : 4.151611442E9,
        "sum" : 4.151611442E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.1542672355E9,
        "variance" : 3.446611262418744E15,
        "n" : 2,
        "max" : 4.195779952E9,
        "min" : 4.112754519E9,
        "sum" : 8.308534471E9,
        "standardDeviation" : 5.870784668524936E7
      }, {
        "mean" : 4.219068778E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.219068778E9,
        "min" : 4.219068778E9,
        "sum" : 4.219068778E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.209652369E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.209652369E9,
        "min" : 4.209652369E9,
        "sum" : 4.209652369E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.337874309E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.337874309E9,
        "min" : 4.337874309E9,
        "sum" : 4.337874309E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.140332888E9,
        "variance" : 1.288607490986642E15,
        "n" : 2,
        "max" : 4.165716027E9,
        "min" : 4.114949749E9,
        "sum" : 8.280665776E9,
        "standardDeviation" : 3.589717942940144E7
      }, {
        "mean" : 4.135819752E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.135819752E9,
        "min" : 4.135819752E9,
        "sum" : 4.135819752E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.215254522E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.215254522E9,
        "min" : 4.215254522E9,
        "sum" : 4.215254522E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.262151958E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.262151958E9,
        "min" : 4.262151958E9,
        "sum" : 4.262151958E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.061398565E9,
        "variance" : 1.9606130383268178E15,
        "n" : 2,
        "max" : 4.092708412E9,
        "min" : 4.030088718E9,
        "sum" : 8.12279713E9,
        "standardDeviation" : 4.427881026322656E7
      }, {
        "mean" : 4.094432853E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.094432853E9,
        "min" : 4.094432853E9,
        "sum" : 4.094432853E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.189365142E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.189365142E9,
        "min" : 4.189365142E9,
        "sum" : 4.189365142E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.090841089E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.090841089E9,
        "min" : 4.090841089E9,
        "sum" : 4.090841089E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.0561366635E9,
        "variance" : 9.271102177738084E15,
        "n" : 2,
        "max" : 4.124221545E9,
        "min" : 3.988051782E9,
        "sum" : 8.112273327E9,
        "standardDeviation" : 9.628656280986503E7
      }, {
        "mean" : 4.082208114E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.082208114E9,
        "min" : 4.082208114E9,
        "sum" : 4.082208114E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.157293418E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.157293418E9,
        "min" : 4.157293418E9,
        "sum" : 4.157293418E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.143666021E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.143666021E9,
        "min" : 4.143666021E9,
        "sum" : 4.143666021E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.184739656E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.184739656E9,
        "min" : 4.184739656E9,
        "sum" : 4.184739656E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2335569275E9,
        "variance" : 6.213695652402051E13,
        "n" : 2,
        "max" : 4.239130838E9,
        "min" : 4.227983017E9,
        "sum" : 8.467113855E9,
        "standardDeviation" : 7882699.8245538
      }, {
        "mean" : 4.218635184E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.218635184E9,
        "min" : 4.218635184E9,
        "sum" : 4.218635184E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.207259894E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.207259894E9,
        "min" : 4.207259894E9,
        "sum" : 4.207259894E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.273507913E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.273507913E9,
        "min" : 4.273507913E9,
        "sum" : 4.273507913E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1435616235E9,
        "variance" : 6.231229801398406E14,
        "n" : 2,
        "max" : 4.161212728E9,
        "min" : 4.125910519E9,
        "sum" : 8.287123247E9,
        "standardDeviation" : 2.496243137476477E7
      }, {
        "mean" : 4.153693732E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.153693732E9,
        "min" : 4.153693732E9,
        "sum" : 4.153693732E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.184482178E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.184482178E9,
        "min" : 4.184482178E9,
        "sum" : 4.184482178E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.1248635485E9,
        "variance" : 4.735032696988061E15,
        "n" : 2,
        "max" : 4.173520679E9,
        "min" : 4.076206418E9,
        "sum" : 8.249727097E9,
        "standardDeviation" : 6.881157385925758E7
      }, {
        "mean" : 4.186118196E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.186118196E9,
        "min" : 4.186118196E9,
        "sum" : 4.186118196E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.187136637E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.187136637E9,
        "min" : 4.187136637E9,
        "sum" : 4.187136637E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.249200618E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.249200618E9,
        "min" : 4.249200618E9,
        "sum" : 4.249200618E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.135771436E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.135771436E9,
        "min" : 4.135771436E9,
        "sum" : 4.135771436E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.1623646785E9,
        "variance" : 5.1882325458772056E14,
        "n" : 2,
        "max" : 4.178470939E9,
        "min" : 4.146258418E9,
        "sum" : 8.324729357E9,
        "standardDeviation" : 2.277769203821407E7
      }, {
        "mean" : 4.212389748E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.212389748E9,
        "min" : 4.212389748E9,
        "sum" : 4.212389748E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.219195498E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.219195498E9,
        "min" : 4.219195498E9,
        "sum" : 4.219195498E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.267610512E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.267610512E9,
        "min" : 4.267610512E9,
        "sum" : 4.267610512E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.198303655E9,
        "variance" : 3.31446571653125E15,
        "n" : 2,
        "max" : 4.23901278E9,
        "min" : 4.15759453E9,
        "sum" : 8.39660731E9,
        "standardDeviation" : 5.757139668734162E7
      }, {
        "mean" : 4.302557071E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.302557071E9,
        "min" : 4.302557071E9,
        "sum" : 4.302557071E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.284548345E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.284548345E9,
        "min" : 4.284548345E9,
        "sum" : 4.284548345E9,
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
      "meanOld" : 338.03320339150315,
      "meanCurrent" : 1829.8758620689653,
      "deviationOld" : 20.509226096614338,
      "deviationCurrent" : 145.02043859690068,
      "vms" : 29,
      "callsOld" : 96766,
      "calls" : 150,
      "tvalue" : -54.852019414505904,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 336.2289875685628,
    "inVMDeviation" : 415.14113029186416,
    "ess" : 1,
    "values" : [ 1645.6, 2145.2, 1734.6, 1730.8, 1907.6, 1708.0, 1940.1, 1828.2, 1829.6, 3717.6, 1998.8, 1950.4, 1826.2, 1573.6, 2051.9, 1831.6, 1941.2, 1850.6, 1860.8, 1728.6, 1951.0, 1465.6, 1951.8, 1911.8, 1940.4, 1729.8, 1820.6, 1783.8, 1689.0, 1739.2 ],
    "valuesPredecessor" : [ 939.3954570184127, 340.8475508869886, 390.39046216750813, 330.7988474598404, 328.74155849321613, 336.5266170137308, 342.2141278102261, 336.9334998575781, 318.4532981953241, 355.7901962696217, 326.87008447906794, 339.72161498708, 293.4236262019378, 333.66889753421543, 329.40806592245787, 330.5108873050302, 398.7719746781047, 324.79714568399027, 352.55037465717623, 322.9472997416019, 352.3914817394062, 338.6299002038468, 331.5287875703563, 337.23297128724926, 313.6013724406505, 359.9465884847278, 340.9321943972834, 322.2755903712769, 338.9825636998909, 334.07531881420476 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1420.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1420.0,
          "min" : 1420.0,
          "sum" : 1420.0,
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
          "mean" : 1582.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1582.0,
          "min" : 1582.0,
          "sum" : 1582.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1901.0,
          "variance" : 48671.99999999999,
          "n" : 2,
          "max" : 2057.0,
          "min" : 1745.0,
          "sum" : 3802.0,
          "standardDeviation" : 220.61731573020282
        } ],
        "1" : [ {
          "mean" : 1722.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1722.0,
          "min" : 1722.0,
          "sum" : 1722.0,
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
          "mean" : 2191.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2191.0,
          "min" : 2191.0,
          "sum" : 2191.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2225.5,
          "variance" : 350284.5,
          "n" : 2,
          "max" : 2644.0,
          "min" : 1807.0,
          "sum" : 4451.0,
          "standardDeviation" : 591.8483758531403
        } ],
        "2" : [ {
          "mean" : 1863.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1863.0,
          "min" : 1863.0,
          "sum" : 1863.0,
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
          "mean" : 1746.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1746.0,
          "min" : 1746.0,
          "sum" : 1746.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1565.0,
          "variance" : 27378.0,
          "n" : 2,
          "max" : 1682.0,
          "min" : 1448.0,
          "sum" : 3130.0,
          "standardDeviation" : 165.46298679765212
        } ],
        "3" : [ {
          "mean" : 2115.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2115.0,
          "min" : 2115.0,
          "sum" : 2115.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1480.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1480.0,
          "min" : 1480.0,
          "sum" : 1480.0,
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
          "mean" : 2047.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2047.0,
          "min" : 2047.0,
          "sum" : 2047.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1567.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1567.0,
          "min" : 1567.0,
          "sum" : 1567.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 2191.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2191.0,
          "min" : 2191.0,
          "sum" : 2191.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1967.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1967.0,
          "min" : 1967.0,
          "sum" : 1967.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2017.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2017.0,
          "min" : 2017.0,
          "sum" : 2017.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1681.5,
          "variance" : 35644.49999999999,
          "n" : 2,
          "max" : 1815.0,
          "min" : 1548.0,
          "sum" : 3363.0,
          "standardDeviation" : 188.79751057680818
        } ],
        "5" : [ {
          "mean" : 1931.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1931.0,
          "min" : 1931.0,
          "sum" : 1931.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1545.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1545.0,
          "min" : 1545.0,
          "sum" : 1545.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1452.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1452.0,
          "min" : 1452.0,
          "sum" : 1452.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1806.0,
          "variance" : 109512.0,
          "n" : 2,
          "max" : 2040.0,
          "min" : 1572.0,
          "sum" : 3612.0,
          "standardDeviation" : 330.92597359530424
        } ],
        "6" : [ {
          "mean" : 1787.5,
          "variance" : 79600.5,
          "n" : 1,
          "max" : 1987.0,
          "min" : 1588.0,
          "sum" : 1787.5,
          "standardDeviation" : 282.13560569343247
        }, {
          "mean" : 2218.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2218.0,
          "min" : 2218.0,
          "sum" : 2218.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2168.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2168.0,
          "min" : 2168.0,
          "sum" : 2168.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1807.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1807.0,
          "min" : 1807.0,
          "sum" : 1807.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1720.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1720.0,
          "min" : 1720.0,
          "sum" : 1720.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 1967.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1967.0,
          "min" : 1967.0,
          "sum" : 1967.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1810.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1810.0,
          "min" : 1810.0,
          "sum" : 1810.0,
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
          "mean" : 1719.5,
          "variance" : 924.5,
          "n" : 2,
          "max" : 1741.0,
          "min" : 1698.0,
          "sum" : 3439.0,
          "standardDeviation" : 30.405591591021544
        } ],
        "8" : [ {
          "mean" : 2159.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2159.0,
          "min" : 2159.0,
          "sum" : 2159.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2107.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2107.0,
          "min" : 2107.0,
          "sum" : 2107.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2185.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2185.0,
          "min" : 2185.0,
          "sum" : 2185.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1348.5,
          "variance" : 1404.4999999999998,
          "n" : 2,
          "max" : 1375.0,
          "min" : 1322.0,
          "sum" : 2697.0,
          "standardDeviation" : 37.476659402887016
        } ],
        "9" : [ {
          "mean" : 11837.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 11837.0,
          "min" : 11837.0,
          "sum" : 11837.0,
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
          "mean" : 1509.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1509.0,
          "min" : 1509.0,
          "sum" : 1509.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1633.0,
          "variance" : 241.99999999999997,
          "n" : 2,
          "max" : 1644.0,
          "min" : 1622.0,
          "sum" : 3266.0,
          "standardDeviation" : 15.556349186104045
        } ],
        "10" : [ {
          "mean" : 2161.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2161.0,
          "min" : 2161.0,
          "sum" : 2161.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1692.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1692.0,
          "min" : 1692.0,
          "sum" : 1692.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2094.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2094.0,
          "min" : 2094.0,
          "sum" : 2094.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2023.5,
          "variance" : 135720.5,
          "n" : 2,
          "max" : 2284.0,
          "min" : 1763.0,
          "sum" : 4047.0,
          "standardDeviation" : 368.4026329981913
        } ],
        "11" : [ {
          "mean" : 2349.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2349.0,
          "min" : 2349.0,
          "sum" : 2349.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1932.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1932.0,
          "min" : 1932.0,
          "sum" : 1932.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1841.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1841.0,
          "min" : 1841.0,
          "sum" : 1841.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1815.0,
          "variance" : 39761.99999999999,
          "n" : 2,
          "max" : 1956.0,
          "min" : 1674.0,
          "sum" : 3630.0,
          "standardDeviation" : 199.4041122946064
        } ],
        "12" : [ {
          "mean" : 2112.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2112.0,
          "min" : 2112.0,
          "sum" : 2112.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1652.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1652.0,
          "min" : 1652.0,
          "sum" : 1652.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2046.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2046.0,
          "min" : 2046.0,
          "sum" : 2046.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1660.5,
          "variance" : 65884.50000000001,
          "n" : 2,
          "max" : 1842.0,
          "min" : 1479.0,
          "sum" : 3321.0,
          "standardDeviation" : 256.6797615707168
        } ],
        "13" : [ {
          "mean" : 1648.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1648.0,
          "min" : 1648.0,
          "sum" : 1648.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1508.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1508.0,
          "min" : 1508.0,
          "sum" : 1508.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1388.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1388.0,
          "min" : 1388.0,
          "sum" : 1388.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1662.0,
          "variance" : 17672.0,
          "n" : 2,
          "max" : 1756.0,
          "min" : 1568.0,
          "sum" : 3324.0,
          "standardDeviation" : 132.93607486307093
        } ],
        "14" : [ {
          "mean" : 2123.5,
          "variance" : 463684.50000000006,
          "n" : 1,
          "max" : 2605.0,
          "min" : 1642.0,
          "sum" : 2123.5,
          "standardDeviation" : 680.9438302826453
        }, {
          "mean" : 2007.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2007.0,
          "min" : 2007.0,
          "sum" : 2007.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1992.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1992.0,
          "min" : 1992.0,
          "sum" : 1992.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1839.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1839.0,
          "min" : 1839.0,
          "sum" : 1839.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2298.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2298.0,
          "min" : 2298.0,
          "sum" : 2298.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 2000.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2000.0,
          "min" : 2000.0,
          "sum" : 2000.0,
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
          "mean" : 1545.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1545.0,
          "min" : 1545.0,
          "sum" : 1545.0,
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
          "mean" : 1674.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1674.0,
          "min" : 1674.0,
          "sum" : 1674.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 2295.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2295.0,
          "min" : 2295.0,
          "sum" : 2295.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2167.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2167.0,
          "min" : 2167.0,
          "sum" : 2167.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1641.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1641.0,
          "min" : 1641.0,
          "sum" : 1641.0,
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
          "mean" : 1395.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1395.0,
          "min" : 1395.0,
          "sum" : 1395.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 1791.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1791.0,
          "min" : 1791.0,
          "sum" : 1791.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2096.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2096.0,
          "min" : 2096.0,
          "sum" : 2096.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1600.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1600.0,
          "min" : 1600.0,
          "sum" : 1600.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2077.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2077.0,
          "min" : 2077.0,
          "sum" : 2077.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1689.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1689.0,
          "min" : 1689.0,
          "sum" : 1689.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1629.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1629.0,
          "min" : 1629.0,
          "sum" : 1629.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1530.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1530.0,
          "min" : 1530.0,
          "sum" : 1530.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2659.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2659.0,
          "min" : 2659.0,
          "sum" : 2659.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1743.0,
          "variance" : 18431.999999999996,
          "n" : 2,
          "max" : 1839.0,
          "min" : 1647.0,
          "sum" : 3486.0,
          "standardDeviation" : 135.7645019878171
        } ],
        "19" : [ {
          "mean" : 2296.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2296.0,
          "min" : 2296.0,
          "sum" : 2296.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1422.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1422.0,
          "min" : 1422.0,
          "sum" : 1422.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1645.0,
          "variance" : 13122.0,
          "n" : 2,
          "max" : 1726.0,
          "min" : 1564.0,
          "sum" : 3290.0,
          "standardDeviation" : 114.5512985522207
        }, {
          "mean" : 1635.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1635.0,
          "min" : 1635.0,
          "sum" : 1635.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1803.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1803.0,
          "min" : 1803.0,
          "sum" : 1803.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2235.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2235.0,
          "min" : 2235.0,
          "sum" : 2235.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1904.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1904.0,
          "min" : 1904.0,
          "sum" : 1904.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1773.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1773.0,
          "min" : 1773.0,
          "sum" : 1773.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2040.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2040.0,
          "min" : 2040.0,
          "sum" : 2040.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1441.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1441.0,
          "min" : 1441.0,
          "sum" : 1441.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1298.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1298.0,
          "min" : 1298.0,
          "sum" : 1298.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1773.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1773.0,
          "min" : 1773.0,
          "sum" : 1773.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1408.0,
          "variance" : 12482.000000000002,
          "n" : 2,
          "max" : 1487.0,
          "min" : 1329.0,
          "sum" : 2816.0,
          "standardDeviation" : 111.72287142747452
        } ],
        "22" : [ {
          "mean" : 2150.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2150.0,
          "min" : 2150.0,
          "sum" : 2150.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1613.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1613.0,
          "min" : 1613.0,
          "sum" : 1613.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1973.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1973.0,
          "min" : 1973.0,
          "sum" : 1973.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2118.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2118.0,
          "min" : 2118.0,
          "sum" : 2118.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1905.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1905.0,
          "min" : 1905.0,
          "sum" : 1905.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 1871.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1871.0,
          "min" : 1871.0,
          "sum" : 1871.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1913.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1913.0,
          "min" : 1913.0,
          "sum" : 1913.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2056.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2056.0,
          "min" : 2056.0,
          "sum" : 2056.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1859.5,
          "variance" : 21840.5,
          "n" : 2,
          "max" : 1964.0,
          "min" : 1755.0,
          "sum" : 3719.0,
          "standardDeviation" : 147.78531726798843
        } ],
        "24" : [ {
          "mean" : 2763.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2763.0,
          "min" : 2763.0,
          "sum" : 2763.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2270.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2270.0,
          "min" : 2270.0,
          "sum" : 2270.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1712.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1712.0,
          "min" : 1712.0,
          "sum" : 1712.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1478.5,
          "variance" : 24864.5,
          "n" : 2,
          "max" : 1590.0,
          "min" : 1367.0,
          "sum" : 2957.0,
          "standardDeviation" : 157.6848122046001
        } ],
        "25" : [ {
          "mean" : 1729.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1729.0,
          "min" : 1729.0,
          "sum" : 1729.0,
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
          "mean" : 2016.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2016.0,
          "min" : 2016.0,
          "sum" : 2016.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1608.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1608.0,
          "min" : 1608.0,
          "sum" : 1608.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1620.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1620.0,
          "min" : 1620.0,
          "sum" : 1620.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1616.5,
          "variance" : 65160.49999999999,
          "n" : 2,
          "max" : 1797.0,
          "min" : 1436.0,
          "sum" : 3233.0,
          "standardDeviation" : 255.26554800834364
        }, {
          "mean" : 1600.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1600.0,
          "min" : 1600.0,
          "sum" : 1600.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2319.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2319.0,
          "min" : 2319.0,
          "sum" : 2319.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1951.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1951.0,
          "min" : 1951.0,
          "sum" : 1951.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1582.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1582.0,
          "min" : 1582.0,
          "sum" : 1582.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1815.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1815.0,
          "min" : 1815.0,
          "sum" : 1815.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1999.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1999.0,
          "min" : 1999.0,
          "sum" : 1999.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1761.5,
          "variance" : 144184.5,
          "n" : 2,
          "max" : 2030.0,
          "min" : 1493.0,
          "sum" : 3523.0,
          "standardDeviation" : 379.716341497176
        } ],
        "28" : [ {
          "mean" : 2121.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2121.0,
          "min" : 2121.0,
          "sum" : 2121.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1457.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1457.0,
          "min" : 1457.0,
          "sum" : 1457.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1663.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1663.0,
          "min" : 1663.0,
          "sum" : 1663.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1602.0,
          "variance" : 243602.0,
          "n" : 2,
          "max" : 1951.0,
          "min" : 1253.0,
          "sum" : 3204.0,
          "standardDeviation" : 493.5605332682102
        } ],
        "29" : [ {
          "mean" : 1846.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1846.0,
          "min" : 1846.0,
          "sum" : 1846.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2038.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2038.0,
          "min" : 2038.0,
          "sum" : 2038.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1760.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1760.0,
          "min" : 1760.0,
          "sum" : 1760.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1526.0,
          "variance" : 2048.0000000000005,
          "n" : 2,
          "max" : 1558.0,
          "min" : 1494.0,
          "sum" : 3052.0,
          "standardDeviation" : 45.254833995939045
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 5188.730223123732,
          "variance" : 4.557413909107965E9,
          "n" : 488,
          "max" : 1061856.0,
          "min" : 74.0,
          "sum" : 2532100.348884381,
          "standardDeviation" : 67508.62099841742
        }, {
          "mean" : 220.31276595744697,
          "variance" : 216183.18768316496,
          "n" : 470,
          "max" : 9930.0,
          "min" : 27.0,
          "sum" : 103547.00000000007,
          "standardDeviation" : 464.9550383458222
        }, {
          "mean" : 185.06051873198842,
          "variance" : 15097.652396261936,
          "n" : 347,
          "max" : 685.0,
          "min" : 28.0,
          "sum" : 64215.999999999985,
          "standardDeviation" : 122.8725046390035
        }, {
          "mean" : 165.4895591647334,
          "variance" : 11456.37605352614,
          "n" : 431,
          "max" : 632.0,
          "min" : 28.0,
          "sum" : 71326.0000000001,
          "standardDeviation" : 107.03446199017465
        }, {
          "mean" : 185.84196185286103,
          "variance" : 58104.433972096915,
          "n" : 367,
          "max" : 4304.0,
          "min" : 28.0,
          "sum" : 68204.0,
          "standardDeviation" : 241.04861329635753
        }, {
          "mean" : 172.26086956521726,
          "variance" : 12598.476720767694,
          "n" : 368,
          "max" : 774.0,
          "min" : 30.0,
          "sum" : 63391.999999999956,
          "standardDeviation" : 112.2429361731405
        }, {
          "mean" : 171.10165484633563,
          "variance" : 17914.996750809518,
          "n" : 423,
          "max" : 813.0,
          "min" : 20.0,
          "sum" : 72375.99999999997,
          "standardDeviation" : 133.84691535784273
        }, {
          "mean" : 164.31722054380643,
          "variance" : 21828.1081570997,
          "n" : 331,
          "max" : 1139.0,
          "min" : 17.0,
          "sum" : 54388.99999999993,
          "standardDeviation" : 147.74338617041272
        } ],
        "1" : [ {
          "mean" : 989.9601677148844,
          "variance" : 2162399.4038722403,
          "n" : 472,
          "max" : 19400.0,
          "min" : 93.0,
          "sum" : 467261.1991614254,
          "standardDeviation" : 1470.5099128779243
        }, {
          "mean" : 364.3148936170208,
          "variance" : 2763457.2140634228,
          "n" : 470,
          "max" : 26465.0,
          "min" : 38.0,
          "sum" : 171227.99999999977,
          "standardDeviation" : 1662.364946112442
        }, {
          "mean" : 230.05714285714274,
          "variance" : 23739.80188293083,
          "n" : 350,
          "max" : 934.0,
          "min" : 43.0,
          "sum" : 80519.99999999996,
          "standardDeviation" : 154.07725946073558
        }, {
          "mean" : 211.25068119891014,
          "variance" : 22218.406932594822,
          "n" : 367,
          "max" : 891.0,
          "min" : 20.0,
          "sum" : 77529.00000000003,
          "standardDeviation" : 149.05840108023037
        }, {
          "mean" : 202.6808510638298,
          "variance" : 21724.56851870526,
          "n" : 423,
          "max" : 834.0,
          "min" : 19.0,
          "sum" : 85734.00000000001,
          "standardDeviation" : 147.39256602252794
        }, {
          "mean" : 204.55459770114948,
          "variance" : 21514.582024909723,
          "n" : 348,
          "max" : 798.0,
          "min" : 40.0,
          "sum" : 71185.00000000001,
          "standardDeviation" : 146.6784988500691
        }, {
          "mean" : 205.0190735694823,
          "variance" : 20975.734607882536,
          "n" : 367,
          "max" : 937.0,
          "min" : 29.0,
          "sum" : 75242.0,
          "standardDeviation" : 144.8300197054552
        }, {
          "mean" : 162.111111111111,
          "variance" : 17944.229755178905,
          "n" : 414,
          "max" : 746.0,
          "min" : 18.0,
          "sum" : 67113.99999999996,
          "standardDeviation" : 133.95607397643045
        }, {
          "mean" : 250.73333333333335,
          "variance" : 19315.352380952383,
          "n" : 15,
          "max" : 540.0,
          "min" : 88.0,
          "sum" : 3761.0,
          "standardDeviation" : 138.97968333879734
        } ],
        "2" : [ {
          "mean" : 1027.27380952381,
          "variance" : 7710107.809571148,
          "n" : 499,
          "max" : 58711.0,
          "min" : 83.0,
          "sum" : 512609.63095238124,
          "standardDeviation" : 2776.708088649426
        }, {
          "mean" : 638.0486725663718,
          "variance" : 7.614020120383415E7,
          "n" : 452,
          "max" : 185708.0,
          "min" : 43.0,
          "sum" : 288398.00000000006,
          "standardDeviation" : 8725.835272558963
        }, {
          "mean" : 227.97971014492745,
          "variance" : 29377.76412200875,
          "n" : 345,
          "max" : 903.0,
          "min" : 38.0,
          "sum" : 78652.99999999997,
          "standardDeviation" : 171.39942859300538
        }, {
          "mean" : 238.9648648648649,
          "variance" : 306148.6085182744,
          "n" : 370,
          "max" : 10448.0,
          "min" : 27.0,
          "sum" : 88417.00000000001,
          "standardDeviation" : 553.3069749409223
        }, {
          "mean" : 208.2227488151661,
          "variance" : 26601.893257984262,
          "n" : 422,
          "max" : 814.0,
          "min" : 21.0,
          "sum" : 87870.0000000001,
          "standardDeviation" : 163.10086835447646
        }, {
          "mean" : 203.43188405797088,
          "variance" : 25840.60653859118,
          "n" : 345,
          "max" : 1110.0,
          "min" : 26.0,
          "sum" : 70183.99999999996,
          "standardDeviation" : 160.7501369784523
        }, {
          "mean" : 181.28776978417284,
          "variance" : 23412.767951023787,
          "n" : 417,
          "max" : 1018.0,
          "min" : 25.0,
          "sum" : 75597.00000000007,
          "standardDeviation" : 153.01231306997417
        }, {
          "mean" : 152.743169398907,
          "variance" : 17940.996871023282,
          "n" : 366,
          "max" : 868.0,
          "min" : 15.0,
          "sum" : 55903.99999999996,
          "standardDeviation" : 133.944006476674
        }, {
          "mean" : 176.7,
          "variance" : 6224.01111111111,
          "n" : 10,
          "max" : 276.0,
          "min" : 42.0,
          "sum" : 1767.0,
          "standardDeviation" : 78.89240211269467
        } ],
        "3" : [ {
          "mean" : 1032.3031578947357,
          "variance" : 3894119.473302243,
          "n" : 470,
          "max" : 32715.0,
          "min" : 93.0,
          "sum" : 485182.48421052576,
          "standardDeviation" : 1973.3523439320822
        }, {
          "mean" : 230.05613305613292,
          "variance" : 32261.119759182235,
          "n" : 481,
          "max" : 1364.0,
          "min" : 33.0,
          "sum" : 110656.99999999994,
          "standardDeviation" : 179.61380726208728
        }, {
          "mean" : 210.44000000000008,
          "variance" : 18634.814441260754,
          "n" : 350,
          "max" : 852.0,
          "min" : 46.0,
          "sum" : 73654.00000000003,
          "standardDeviation" : 136.50939323453443
        }, {
          "mean" : 197.61662817551965,
          "variance" : 22054.62583397483,
          "n" : 433,
          "max" : 990.0,
          "min" : 36.0,
          "sum" : 85568.00000000001,
          "standardDeviation" : 148.5079992255462
        }, {
          "mean" : 244.04371584699422,
          "variance" : 300562.0364398533,
          "n" : 366,
          "max" : 10224.0,
          "min" : 0.0,
          "sum" : 89319.99999999988,
          "standardDeviation" : 548.2353841552489
        }, {
          "mean" : 193.0899182561307,
          "variance" : 22854.114843435917,
          "n" : 367,
          "max" : 1000.0,
          "min" : 38.0,
          "sum" : 70863.99999999996,
          "standardDeviation" : 151.17577465796535
        }, {
          "mean" : 205.90070921985824,
          "variance" : 234784.9427246142,
          "n" : 423,
          "max" : 9720.0,
          "min" : 39.0,
          "sum" : 87096.00000000004,
          "standardDeviation" : 484.5461203276879
        }, {
          "mean" : 192.07784431137722,
          "variance" : 83173.63956771136,
          "n" : 334,
          "max" : 4475.0,
          "min" : 30.0,
          "sum" : 64153.99999999999,
          "standardDeviation" : 288.3984042391902
        } ],
        "4" : [ {
          "mean" : 940.5464601769914,
          "variance" : 1801846.2616947605,
          "n" : 447,
          "max" : 19187.0,
          "min" : 58.0,
          "sum" : 420424.26769911515,
          "standardDeviation" : 1342.3286712630259
        }, {
          "mean" : 355.825396825397,
          "variance" : 1078708.824323897,
          "n" : 504,
          "max" : 22740.0,
          "min" : 28.0,
          "sum" : 179336.0000000001,
          "standardDeviation" : 1038.6090815720306
        }, {
          "mean" : 258.6885714285714,
          "variance" : 305422.4270896439,
          "n" : 350,
          "max" : 10095.0,
          "min" : 41.0,
          "sum" : 90540.99999999999,
          "standardDeviation" : 552.6503660449741
        }, {
          "mean" : 189.35308056872043,
          "variance" : 19618.15769832604,
          "n" : 422,
          "max" : 836.0,
          "min" : 22.0,
          "sum" : 79907.00000000001,
          "standardDeviation" : 140.06483391032182
        }, {
          "mean" : 214.63684210526307,
          "variance" : 26055.176475489516,
          "n" : 380,
          "max" : 1225.0,
          "min" : 39.0,
          "sum" : 81561.99999999997,
          "standardDeviation" : 161.41615927623081
        }, {
          "mean" : 196.65675675675675,
          "variance" : 24684.60544202739,
          "n" : 370,
          "max" : 992.0,
          "min" : 20.0,
          "sum" : 72763.0,
          "standardDeviation" : 157.1133522079756
        }, {
          "mean" : 189.9646226415095,
          "variance" : 22815.968012623223,
          "n" : 424,
          "max" : 850.0,
          "min" : 27.0,
          "sum" : 80545.00000000003,
          "standardDeviation" : 151.04955482431328
        }, {
          "mean" : 168.5167173252279,
          "variance" : 19817.896823337527,
          "n" : 329,
          "max" : 859.0,
          "min" : 19.0,
          "sum" : 55441.99999999998,
          "standardDeviation" : 140.77605202355096
        } ],
        "5" : [ {
          "mean" : 968.7320261437917,
          "variance" : 3264479.7904786384,
          "n" : 454,
          "max" : 21276.0,
          "min" : 98.0,
          "sum" : 439804.33986928145,
          "standardDeviation" : 1806.7871458693296
        }, {
          "mean" : 356.9498997995992,
          "variance" : 1125950.2565210762,
          "n" : 499,
          "max" : 16765.0,
          "min" : 27.0,
          "sum" : 178118.0,
          "standardDeviation" : 1061.1080324458374
        }, {
          "mean" : 262.9090909090909,
          "variance" : 300057.0629370631,
          "n" : 352,
          "max" : 10044.0,
          "min" : 42.0,
          "sum" : 92543.99999999999,
          "standardDeviation" : 547.7746461247208
        }, {
          "mean" : 202.33799533799535,
          "variance" : 26917.439230551343,
          "n" : 429,
          "max" : 1141.0,
          "min" : 27.0,
          "sum" : 86803.0,
          "standardDeviation" : 164.06535048739372
        }, {
          "mean" : 215.04087193460487,
          "variance" : 22431.61307901911,
          "n" : 367,
          "max" : 693.0,
          "min" : 29.0,
          "sum" : 78919.99999999999,
          "standardDeviation" : 149.7718701192554
        }, {
          "mean" : 219.3972972972972,
          "variance" : 31785.535494030617,
          "n" : 370,
          "max" : 1101.0,
          "min" : 19.0,
          "sum" : 81176.99999999997,
          "standardDeviation" : 178.28498392750473
        }, {
          "mean" : 177.81516587677743,
          "variance" : 22301.80423500805,
          "n" : 422,
          "max" : 806.0,
          "min" : 19.0,
          "sum" : 75038.00000000007,
          "standardDeviation" : 149.33788613412221
        }, {
          "mean" : 159.31927710843377,
          "variance" : 19133.746696756803,
          "n" : 332,
          "max" : 732.0,
          "min" : 28.0,
          "sum" : 52894.00000000001,
          "standardDeviation" : 138.32478699335417
        } ],
        "6" : [ {
          "mean" : 1193.6447368421047,
          "variance" : 2512991.849708372,
          "n" : 375,
          "max" : 17195.0,
          "min" : 110.0,
          "sum" : 447616.77631578926,
          "standardDeviation" : 1585.241889967702
        }, {
          "mean" : 343.75259515570923,
          "variance" : 1133378.1241267042,
          "n" : 578,
          "max" : 18284.0,
          "min" : 38.0,
          "sum" : 198688.99999999994,
          "standardDeviation" : 1064.6023314490271
        }, {
          "mean" : 219.0257142857142,
          "variance" : 25439.824551780595,
          "n" : 350,
          "max" : 948.0,
          "min" : 39.0,
          "sum" : 76658.99999999997,
          "standardDeviation" : 159.4986663009462
        }, {
          "mean" : 198.45475638051053,
          "variance" : 24902.49039011493,
          "n" : 431,
          "max" : 1103.0,
          "min" : 21.0,
          "sum" : 85534.00000000004,
          "standardDeviation" : 157.80522928634187
        }, {
          "mean" : 237.61517615176174,
          "variance" : 285610.6123777546,
          "n" : 369,
          "max" : 9987.0,
          "min" : 20.0,
          "sum" : 87680.00000000009,
          "standardDeviation" : 534.4254974996558
        }, {
          "mean" : 218.89218328840977,
          "variance" : 27466.07483062577,
          "n" : 371,
          "max" : 990.0,
          "min" : 28.0,
          "sum" : 81209.00000000003,
          "standardDeviation" : 165.72891971718687
        }, {
          "mean" : 178.00472813238773,
          "variance" : 21653.118461004127,
          "n" : 423,
          "max" : 854.0,
          "min" : 29.0,
          "sum" : 75296.00000000001,
          "standardDeviation" : 147.14998627592232
        }, {
          "mean" : 155.9240121580547,
          "variance" : 14938.296037512038,
          "n" : 329,
          "max" : 681.0,
          "min" : 21.0,
          "sum" : 51298.99999999999,
          "standardDeviation" : 122.22232217361949
        } ],
        "7" : [ {
          "mean" : 986.3191919191929,
          "variance" : 968697.0598535967,
          "n" : 490,
          "max" : 10830.0,
          "min" : 112.0,
          "sum" : 483296.40404040454,
          "standardDeviation" : 984.2240902627799
        }, {
          "mean" : 331.11991434689514,
          "variance" : 1559694.5263622245,
          "n" : 467,
          "max" : 20738.0,
          "min" : 39.0,
          "sum" : 154633.00000000003,
          "standardDeviation" : 1248.8773063684937
        }, {
          "mean" : 230.08882521489974,
          "variance" : 25297.632892006714,
          "n" : 349,
          "max" : 964.0,
          "min" : 30.0,
          "sum" : 80301.00000000001,
          "standardDeviation" : 159.05229609158968
        }, {
          "mean" : 219.58035714285714,
          "variance" : 233346.0248481941,
          "n" : 448,
          "max" : 10026.0,
          "min" : 41.0,
          "sum" : 98372.0,
          "standardDeviation" : 483.0590283269676
        }, {
          "mean" : 202.86554621848742,
          "variance" : 22179.07737701822,
          "n" : 357,
          "max" : 856.0,
          "min" : 26.0,
          "sum" : 72423.00000000001,
          "standardDeviation" : 148.92641598124297
        }, {
          "mean" : 180.28310502283114,
          "variance" : 21116.931109787554,
          "n" : 438,
          "max" : 1002.0,
          "min" : 21.0,
          "sum" : 78964.00000000004,
          "standardDeviation" : 145.31665806020848
        }, {
          "mean" : 198.78611111111127,
          "variance" : 303004.46944444446,
          "n" : 360,
          "max" : 10284.0,
          "min" : 24.0,
          "sum" : 71563.00000000006,
          "standardDeviation" : 550.4584175434549
        }, {
          "mean" : 150.10062893081755,
          "variance" : 17835.42201853066,
          "n" : 318,
          "max" : 925.0,
          "min" : 22.0,
          "sum" : 47731.99999999998,
          "standardDeviation" : 133.54932429080523
        } ],
        "8" : [ {
          "mean" : 1010.2226640159045,
          "variance" : 1330787.177413606,
          "n" : 498,
          "max" : 14016.0,
          "min" : 108.0,
          "sum" : 503090.8866799204,
          "standardDeviation" : 1153.597493675158
        }, {
          "mean" : 268.9695652173913,
          "variance" : 1031376.4653026423,
          "n" : 460,
          "max" : 17164.0,
          "min" : 45.0,
          "sum" : 123725.99999999999,
          "standardDeviation" : 1015.5670658812456
        }, {
          "mean" : 194.48126801152728,
          "variance" : 16568.903549832587,
          "n" : 347,
          "max" : 821.0,
          "min" : 20.0,
          "sum" : 67484.99999999997,
          "standardDeviation" : 128.72025306777712
        }, {
          "mean" : 175.9734513274335,
          "variance" : 14787.737652806942,
          "n" : 452,
          "max" : 849.0,
          "min" : 19.0,
          "sum" : 79539.99999999994,
          "standardDeviation" : 121.60484222598598
        }, {
          "mean" : 188.1073446327684,
          "variance" : 13748.515356668422,
          "n" : 354,
          "max" : 715.0,
          "min" : 19.0,
          "sum" : 66590.00000000001,
          "standardDeviation" : 117.25406328425647
        }, {
          "mean" : 169.66591422121905,
          "variance" : 14970.526143223407,
          "n" : 443,
          "max" : 733.0,
          "min" : 22.0,
          "sum" : 75162.00000000004,
          "standardDeviation" : 122.35410145648329
        }, {
          "mean" : 172.20891364902505,
          "variance" : 13964.975786246705,
          "n" : 359,
          "max" : 674.0,
          "min" : 18.0,
          "sum" : 61822.99999999999,
          "standardDeviation" : 118.17349866296887
        }, {
          "mean" : 158.95833333333331,
          "variance" : 17160.51594319399,
          "n" : 312,
          "max" : 897.0,
          "min" : 27.0,
          "sum" : 49594.99999999999,
          "standardDeviation" : 130.99815244191038
        } ],
        "9" : [ {
          "mean" : 1065.4073275862072,
          "variance" : 2159193.0799461915,
          "n" : 459,
          "max" : 17763.0,
          "min" : 94.0,
          "sum" : 489021.9633620691,
          "standardDeviation" : 1469.419300249657
        }, {
          "mean" : 341.5658436213991,
          "variance" : 3641052.2832845445,
          "n" : 486,
          "max" : 42049.0,
          "min" : 37.0,
          "sum" : 166000.99999999997,
          "standardDeviation" : 1908.1541560588191
        }, {
          "mean" : 263.67521367521374,
          "variance" : 325304.9856410252,
          "n" : 351,
          "max" : 10439.0,
          "min" : 32.0,
          "sum" : 92550.00000000003,
          "standardDeviation" : 570.3551399268925
        }, {
          "mean" : 205.6264775413712,
          "variance" : 28336.62318353444,
          "n" : 423,
          "max" : 1050.0,
          "min" : 30.0,
          "sum" : 86980.00000000001,
          "standardDeviation" : 168.33485433365973
        }, {
          "mean" : 234.66052631578947,
          "variance" : 31319.544084154975,
          "n" : 380,
          "max" : 972.0,
          "min" : 32.0,
          "sum" : 89171.0,
          "standardDeviation" : 176.9732863574471
        }, {
          "mean" : 219.64420485175205,
          "variance" : 31946.41901362278,
          "n" : 371,
          "max" : 1018.0,
          "min" : 18.0,
          "sum" : 81488.00000000001,
          "standardDeviation" : 178.73561204646035
        }, {
          "mean" : 191.31690140845075,
          "variance" : 27389.586396023198,
          "n" : 426,
          "max" : 1176.0,
          "min" : 21.0,
          "sum" : 81501.00000000001,
          "standardDeviation" : 165.49799514200527
        }, {
          "mean" : 185.56495468277944,
          "variance" : 27138.46470749794,
          "n" : 331,
          "max" : 902.0,
          "min" : 29.0,
          "sum" : 61421.99999999999,
          "standardDeviation" : 164.73756313451386
        } ],
        "10" : [ {
          "mean" : 996.1695278969958,
          "variance" : 1629963.8529189155,
          "n" : 461,
          "max" : 17377.0,
          "min" : 120.0,
          "sum" : 459234.152360515,
          "standardDeviation" : 1276.7003771123887
        }, {
          "mean" : 326.8512396694214,
          "variance" : 749112.230412539,
          "n" : 484,
          "max" : 13447.0,
          "min" : 20.0,
          "sum" : 158195.99999999994,
          "standardDeviation" : 865.5126980076832
        }, {
          "mean" : 210.8657142857142,
          "variance" : 26060.133778141633,
          "n" : 350,
          "max" : 1189.0,
          "min" : 21.0,
          "sum" : 73802.99999999997,
          "standardDeviation" : 161.43151420383083
        }, {
          "mean" : 201.4755784061698,
          "variance" : 24050.368603079518,
          "n" : 389,
          "max" : 1064.0,
          "min" : 21.0,
          "sum" : 78374.00000000006,
          "standardDeviation" : 155.08181261218067
        }, {
          "mean" : 200.71882640586804,
          "variance" : 41516.325159403605,
          "n" : 409,
          "max" : 2830.0,
          "min" : 19.0,
          "sum" : 82094.00000000003,
          "standardDeviation" : 203.7555524627577
        }, {
          "mean" : 206.4626038781165,
          "variance" : 24157.56595875654,
          "n" : 361,
          "max" : 989.0,
          "min" : 45.0,
          "sum" : 74533.00000000006,
          "standardDeviation" : 155.42704384616127
        }, {
          "mean" : 171.19859813084116,
          "variance" : 19725.747351660128,
          "n" : 428,
          "max" : 824.0,
          "min" : 19.0,
          "sum" : 73273.00000000001,
          "standardDeviation" : 140.4483796690447
        }, {
          "mean" : 158.83625730994152,
          "variance" : 16808.899795921872,
          "n" : 342,
          "max" : 712.0,
          "min" : 21.0,
          "sum" : 54322.0,
          "standardDeviation" : 129.64914113067573
        } ],
        "11" : [ {
          "mean" : 999.5583333333327,
          "variance" : 2371229.5164231006,
          "n" : 475,
          "max" : 26897.0,
          "min" : 112.0,
          "sum" : 474790.208333333,
          "standardDeviation" : 1539.879708426311
        }, {
          "mean" : 318.72989690721664,
          "variance" : 851256.2925960652,
          "n" : 485,
          "max" : 16947.0,
          "min" : 21.0,
          "sum" : 154584.00000000006,
          "standardDeviation" : 922.6355144888284
        }, {
          "mean" : 226.07262569832406,
          "variance" : 27380.145971237656,
          "n" : 358,
          "max" : 982.0,
          "min" : 41.0,
          "sum" : 80934.00000000001,
          "standardDeviation" : 165.46947141765352
        }, {
          "mean" : 208.97716894977168,
          "variance" : 31075.052109129316,
          "n" : 438,
          "max" : 1334.0,
          "min" : 22.0,
          "sum" : 91532.0,
          "standardDeviation" : 176.28117343927943
        }, {
          "mean" : 221.61064425770306,
          "variance" : 28271.715953797233,
          "n" : 357,
          "max" : 790.0,
          "min" : 40.0,
          "sum" : 79114.99999999999,
          "standardDeviation" : 168.14195179608578
        }, {
          "mean" : 216.27394209354117,
          "variance" : 249976.145770363,
          "n" : 449,
          "max" : 10286.0,
          "min" : 18.0,
          "sum" : 97106.99999999999,
          "standardDeviation" : 499.97614520131157
        }, {
          "mean" : 180.3483146067415,
          "variance" : 20243.97974363032,
          "n" : 356,
          "max" : 699.0,
          "min" : 19.0,
          "sum" : 64203.99999999997,
          "standardDeviation" : 142.28134011046677
        }, {
          "mean" : 173.7328990228014,
          "variance" : 24228.56894679696,
          "n" : 307,
          "max" : 825.0,
          "min" : 31.0,
          "sum" : 53336.00000000003,
          "standardDeviation" : 155.65528884942188
        } ],
        "12" : [ {
          "mean" : 962.9916492693109,
          "variance" : 1766750.5815200778,
          "n" : 474,
          "max" : 15496.0,
          "min" : 69.0,
          "sum" : 456458.0417536534,
          "standardDeviation" : 1329.1917023214062
        }, {
          "mean" : 268.0591836734692,
          "variance" : 2145780.407533075,
          "n" : 490,
          "max" : 32339.0,
          "min" : 33.0,
          "sum" : 131348.9999999999,
          "standardDeviation" : 1464.8482540976984
        }, {
          "mean" : 151.81940700808622,
          "variance" : 10114.31594667443,
          "n" : 371,
          "max" : 614.0,
          "min" : 17.0,
          "sum" : 56324.999999999985,
          "standardDeviation" : 100.56995548708585
        }, {
          "mean" : 177.82823529411775,
          "variance" : 214183.78410654824,
          "n" : 425,
          "max" : 9483.0,
          "min" : 22.0,
          "sum" : 75577.00000000004,
          "standardDeviation" : 462.7999396138122
        }, {
          "mean" : 155.43220338983062,
          "variance" : 9168.297090315455,
          "n" : 354,
          "max" : 492.0,
          "min" : 27.0,
          "sum" : 55023.00000000004,
          "standardDeviation" : 95.75122500686587
        }, {
          "mean" : 176.30769230769218,
          "variance" : 231162.73504273486,
          "n" : 442,
          "max" : 9988.0,
          "min" : 27.0,
          "sum" : 77927.99999999994,
          "standardDeviation" : 480.7938591982377
        }, {
          "mean" : 150.10112359550556,
          "variance" : 10876.8742522551,
          "n" : 356,
          "max" : 553.0,
          "min" : 19.0,
          "sum" : 53435.99999999998,
          "standardDeviation" : 104.2922540376566
        }, {
          "mean" : 129.46666666666658,
          "variance" : 8692.70191082802,
          "n" : 315,
          "max" : 590.0,
          "min" : 18.0,
          "sum" : 40781.99999999997,
          "standardDeviation" : 93.23466045858707
        } ],
        "13" : [ {
          "mean" : 1034.0273109243717,
          "variance" : 2803177.2055683327,
          "n" : 471,
          "max" : 21036.0,
          "min" : 54.0,
          "sum" : 487026.8634453791,
          "standardDeviation" : 1674.2691556522007
        }, {
          "mean" : 331.68583162217675,
          "variance" : 2259211.8949223035,
          "n" : 487,
          "max" : 29983.0,
          "min" : 36.0,
          "sum" : 161531.0000000001,
          "standardDeviation" : 1503.067495131973
        }, {
          "mean" : 225.14739884393074,
          "variance" : 288576.9376308957,
          "n" : 346,
          "max" : 9830.0,
          "min" : 27.0,
          "sum" : 77901.00000000004,
          "standardDeviation" : 537.1935755674073
        }, {
          "mean" : 180.42307692307688,
          "variance" : 19598.648264433963,
          "n" : 442,
          "max" : 903.0,
          "min" : 35.0,
          "sum" : 79746.99999999999,
          "standardDeviation" : 139.9951722897399
        }, {
          "mean" : 186.04735376044576,
          "variance" : 20372.156969234842,
          "n" : 359,
          "max" : 1066.0,
          "min" : 40.0,
          "sum" : 66791.00000000003,
          "standardDeviation" : 142.73106518636664
        }, {
          "mean" : 204.8651399491095,
          "variance" : 276597.6986031053,
          "n" : 393,
          "max" : 10242.0,
          "min" : 20.0,
          "sum" : 80512.00000000003,
          "standardDeviation" : 525.9255637474806
        }, {
          "mean" : 167.07444168734503,
          "variance" : 17681.25812624225,
          "n" : 403,
          "max" : 754.0,
          "min" : 19.0,
          "sum" : 67331.00000000004,
          "standardDeviation" : 132.9708920261959
        }, {
          "mean" : 171.0030769230768,
          "variance" : 82749.1141880341,
          "n" : 325,
          "max" : 4833.0,
          "min" : 23.0,
          "sum" : 55575.99999999996,
          "standardDeviation" : 287.6614575990918
        } ],
        "14" : [ {
          "mean" : 1058.879093198991,
          "variance" : 2042622.2429203864,
          "n" : 392,
          "max" : 16143.0,
          "min" : 72.0,
          "sum" : 415080.6045340045,
          "standardDeviation" : 1429.2033595399873
        }, {
          "mean" : 414.6082251082245,
          "variance" : 1899366.256157798,
          "n" : 462,
          "max" : 28726.0,
          "min" : 35.0,
          "sum" : 191548.9999999997,
          "standardDeviation" : 1378.174972983401
        }, {
          "mean" : 189.46113989637297,
          "variance" : 21694.680304151814,
          "n" : 386,
          "max" : 1099.0,
          "min" : 28.0,
          "sum" : 73131.99999999997,
          "standardDeviation" : 147.29114129557084
        }, {
          "mean" : 216.06162464985994,
          "variance" : 24638.569225442992,
          "n" : 357,
          "max" : 922.0,
          "min" : 27.0,
          "sum" : 77134.0,
          "standardDeviation" : 156.96677745766138
        }, {
          "mean" : 205.6805970149253,
          "variance" : 25460.427616408982,
          "n" : 335,
          "max" : 906.0,
          "min" : 28.0,
          "sum" : 68902.99999999997,
          "standardDeviation" : 159.5632401789616
        }, {
          "mean" : 198.2094395280235,
          "variance" : 19806.947129566568,
          "n" : 339,
          "max" : 836.0,
          "min" : 19.0,
          "sum" : 67192.99999999997,
          "standardDeviation" : 140.73715617976146
        }, {
          "mean" : 195.71388101982998,
          "variance" : 23171.670744269915,
          "n" : 353,
          "max" : 774.0,
          "min" : 31.0,
          "sum" : 69086.99999999999,
          "standardDeviation" : 152.2224383731581
        }, {
          "mean" : 167.98575498575505,
          "variance" : 19201.265510785513,
          "n" : 351,
          "max" : 839.0,
          "min" : 24.0,
          "sum" : 58963.00000000002,
          "standardDeviation" : 138.5686310489698
        }, {
          "mean" : 164.53815261044173,
          "variance" : 17341.999546573395,
          "n" : 249,
          "max" : 1003.0,
          "min" : 22.0,
          "sum" : 40969.99999999999,
          "standardDeviation" : 131.68902591550062
        } ],
        "15" : [ {
          "mean" : 916.2733333333326,
          "variance" : 1602519.3928285069,
          "n" : 445,
          "max" : 14959.0,
          "min" : 57.0,
          "sum" : 407741.633333333,
          "standardDeviation" : 1265.906549800777
        }, {
          "mean" : 320.7690802348334,
          "variance" : 2987891.9465715075,
          "n" : 511,
          "max" : 38163.0,
          "min" : 19.0,
          "sum" : 163912.99999999985,
          "standardDeviation" : 1728.5519797135137
        }, {
          "mean" : 273.4608695652172,
          "variance" : 830901.0980283112,
          "n" : 345,
          "max" : 14060.0,
          "min" : 45.0,
          "sum" : 94343.99999999993,
          "standardDeviation" : 911.5377655524269
        }, {
          "mean" : 201.44270833333326,
          "variance" : 20047.526735204512,
          "n" : 384,
          "max" : 740.0,
          "min" : 22.0,
          "sum" : 77353.99999999997,
          "standardDeviation" : 141.58928891411423
        }, {
          "mean" : 211.3390243902439,
          "variance" : 23403.075490488405,
          "n" : 410,
          "max" : 875.0,
          "min" : 22.0,
          "sum" : 86649.0,
          "standardDeviation" : 152.9806376326377
        }, {
          "mean" : 212.08333333333326,
          "variance" : 25116.44986072424,
          "n" : 360,
          "max" : 1025.0,
          "min" : 21.0,
          "sum" : 76349.99999999997,
          "standardDeviation" : 158.48170197446845
        }, {
          "mean" : 200.75586854460087,
          "variance" : 22598.13320077327,
          "n" : 426,
          "max" : 900.0,
          "min" : 29.0,
          "sum" : 85521.99999999997,
          "standardDeviation" : 150.32675477363725
        }, {
          "mean" : 215.8526011560693,
          "variance" : 24069.795601910013,
          "n" : 346,
          "max" : 876.0,
          "min" : 28.0,
          "sum" : 74684.99999999999,
          "standardDeviation" : 155.1444346469122
        } ],
        "16" : [ {
          "mean" : 1187.8763326226017,
          "variance" : 3345197.9419386555,
          "n" : 464,
          "max" : 27194.0,
          "min" : 78.0,
          "sum" : 551174.6183368872,
          "standardDeviation" : 1828.9882290322853
        }, {
          "mean" : 437.6584362139921,
          "variance" : 2438028.0727843526,
          "n" : 486,
          "max" : 32270.0,
          "min" : 20.0,
          "sum" : 212702.00000000017,
          "standardDeviation" : 1561.4186090809706
        }, {
          "mean" : 257.99421965317913,
          "variance" : 41003.66373460669,
          "n" : 346,
          "max" : 1085.0,
          "min" : 39.0,
          "sum" : 89265.99999999999,
          "standardDeviation" : 202.49361405883073
        }, {
          "mean" : 240.4686648501363,
          "variance" : 41588.63221214697,
          "n" : 367,
          "max" : 1186.0,
          "min" : 26.0,
          "sum" : 88252.00000000001,
          "standardDeviation" : 203.93291105691344
        }, {
          "mean" : 238.03073286052032,
          "variance" : 107050.85924282645,
          "n" : 423,
          "max" : 5758.0,
          "min" : 28.0,
          "sum" : 100687.00000000009,
          "standardDeviation" : 327.1862760612469
        }, {
          "mean" : 253.08045977011506,
          "variance" : 104168.49494849115,
          "n" : 348,
          "max" : 4898.0,
          "min" : 19.0,
          "sum" : 88072.00000000004,
          "standardDeviation" : 322.7514445335468
        }, {
          "mean" : 225.7301204819279,
          "variance" : 271020.2603224492,
          "n" : 415,
          "max" : 10224.0,
          "min" : 22.0,
          "sum" : 93678.00000000009,
          "standardDeviation" : 520.5960625306815
        }, {
          "mean" : 163.2010869565219,
          "variance" : 18391.22375903329,
          "n" : 368,
          "max" : 807.0,
          "min" : 30.0,
          "sum" : 60058.00000000006,
          "standardDeviation" : 135.61424615073923
        }, {
          "mean" : 268.75,
          "variance" : 9824.5,
          "n" : 8,
          "max" : 398.0,
          "min" : 125.0,
          "sum" : 2150.0,
          "standardDeviation" : 99.11861580954407
        } ],
        "17" : [ {
          "mean" : 992.4004629629616,
          "variance" : 1445341.7394893435,
          "n" : 427,
          "max" : 14191.0,
          "min" : 76.0,
          "sum" : 423754.9976851846,
          "standardDeviation" : 1202.223664502302
        }, {
          "mean" : 402.2241379310346,
          "variance" : 1906065.1838308282,
          "n" : 522,
          "max" : 26456.0,
          "min" : 34.0,
          "sum" : 209961.00000000006,
          "standardDeviation" : 1380.6031956470433
        }, {
          "mean" : 206.78186968838514,
          "variance" : 16678.114215812526,
          "n" : 353,
          "max" : 748.0,
          "min" : 31.0,
          "sum" : 72993.99999999996,
          "standardDeviation" : 129.143773430284
        }, {
          "mean" : 176.77156177156178,
          "variance" : 13496.33087162058,
          "n" : 429,
          "max" : 709.0,
          "min" : 32.0,
          "sum" : 75835.0,
          "standardDeviation" : 116.17370989867105
        }, {
          "mean" : 191.5216216216215,
          "variance" : 15752.385710100345,
          "n" : 370,
          "max" : 753.0,
          "min" : 40.0,
          "sum" : 70862.99999999996,
          "standardDeviation" : 125.50850851675493
        }, {
          "mean" : 187.16304347826087,
          "variance" : 15848.000592346889,
          "n" : 368,
          "max" : 781.0,
          "min" : 28.0,
          "sum" : 68876.0,
          "standardDeviation" : 125.88884220750816
        }, {
          "mean" : 169.0825471698112,
          "variance" : 19321.15392635711,
          "n" : 424,
          "max" : 1470.0,
          "min" : 22.0,
          "sum" : 71690.99999999994,
          "standardDeviation" : 139.00055369082926
        }, {
          "mean" : 160.63746223564954,
          "variance" : 18250.54089535842,
          "n" : 331,
          "max" : 750.0,
          "min" : 17.0,
          "sum" : 53171.0,
          "standardDeviation" : 135.09456278976745
        } ],
        "18" : [ {
          "mean" : 1095.318421052631,
          "variance" : 1021890.2809262602,
          "n" : 375,
          "max" : 11999.0,
          "min" : 111.0,
          "sum" : 410744.4078947366,
          "standardDeviation" : 1010.8858891716019
        }, {
          "mean" : 437.12147887323874,
          "variance" : 1749535.0134355533,
          "n" : 568,
          "max" : 25383.0,
          "min" : 44.0,
          "sum" : 248284.9999999996,
          "standardDeviation" : 1322.6998954545786
        }, {
          "mean" : 234.84045584045583,
          "variance" : 30150.32875864875,
          "n" : 351,
          "max" : 945.0,
          "min" : 19.0,
          "sum" : 82429.0,
          "standardDeviation" : 173.6385002199937
        }, {
          "mean" : 226.66307277628027,
          "variance" : 31924.169957018974,
          "n" : 371,
          "max" : 873.0,
          "min" : 21.0,
          "sum" : 84091.99999999999,
          "standardDeviation" : 178.67336107270992
        }, {
          "mean" : 232.00468384074932,
          "variance" : 250800.9671141604,
          "n" : 427,
          "max" : 10021.0,
          "min" : 27.0,
          "sum" : 99065.99999999996,
          "standardDeviation" : 500.8003265915073
        }, {
          "mean" : 209.88081395348834,
          "variance" : 27252.3385229507,
          "n" : 344,
          "max" : 1650.0,
          "min" : 37.0,
          "sum" : 72198.99999999999,
          "standardDeviation" : 165.08282322201393
        }, {
          "mean" : 183.42954545454558,
          "variance" : 27365.420992959203,
          "n" : 440,
          "max" : 929.0,
          "min" : 17.0,
          "sum" : 80709.00000000006,
          "standardDeviation" : 165.4249708869831
        }, {
          "mean" : 169.42939481268021,
          "variance" : 18203.829538072012,
          "n" : 347,
          "max" : 709.0,
          "min" : 33.0,
          "sum" : 58792.00000000004,
          "standardDeviation" : 134.9215680981807
        }, {
          "mean" : 306.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 306.0,
          "min" : 306.0,
          "sum" : 306.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 1040.591666666666,
          "variance" : 6470884.0500348,
          "n" : 475,
          "max" : 44368.0,
          "min" : 57.0,
          "sum" : 494281.04166666634,
          "standardDeviation" : 2543.7932404255657
        }, {
          "mean" : 233.61283643892338,
          "variance" : 32209.432780942036,
          "n" : 483,
          "max" : 1046.0,
          "min" : 25.0,
          "sum" : 112835.0,
          "standardDeviation" : 179.4698659411714
        }, {
          "mean" : 217.6704871060172,
          "variance" : 33496.370994302284,
          "n" : 349,
          "max" : 1824.0,
          "min" : 29.0,
          "sum" : 75967.0,
          "standardDeviation" : 183.02013822064032
        }, {
          "mean" : 198.99556541019942,
          "variance" : 20857.337758068472,
          "n" : 451,
          "max" : 851.0,
          "min" : 38.0,
          "sum" : 89746.99999999994,
          "standardDeviation" : 144.4206971249913
        }, {
          "mean" : 224.5915492957746,
          "variance" : 293768.6547306437,
          "n" : 355,
          "max" : 10003.0,
          "min" : 36.0,
          "sum" : 79729.99999999999,
          "standardDeviation" : 542.0042940149494
        }, {
          "mean" : 185.78587196467967,
          "variance" : 23098.597853054373,
          "n" : 453,
          "max" : 953.0,
          "min" : 20.0,
          "sum" : 84160.9999999999,
          "standardDeviation" : 151.98222874091027
        }, {
          "mean" : 161.43465909090895,
          "variance" : 21015.699422105656,
          "n" : 352,
          "max" : 925.0,
          "min" : 27.0,
          "sum" : 56824.99999999995,
          "standardDeviation" : 144.96792549424737
        }, {
          "mean" : 156.21824104234526,
          "variance" : 327013.8051563729,
          "n" : 307,
          "max" : 9957.0,
          "min" : 28.0,
          "sum" : 47958.99999999999,
          "standardDeviation" : 571.8512089314605
        } ],
        "20" : [ {
          "mean" : 1047.0159817351596,
          "variance" : 2220750.8853275254,
          "n" : 433,
          "max" : 19779.0,
          "min" : 66.0,
          "sum" : 453357.9200913241,
          "standardDeviation" : 1490.2184018886378
        }, {
          "mean" : 376.4694280078896,
          "variance" : 3343071.265367854,
          "n" : 507,
          "max" : 40930.0,
          "min" : 31.0,
          "sum" : 190870.00000000003,
          "standardDeviation" : 1828.4067559949165
        }, {
          "mean" : 240.35593220338995,
          "variance" : 25729.08541796708,
          "n" : 354,
          "max" : 795.0,
          "min" : 21.0,
          "sum" : 85086.00000000004,
          "standardDeviation" : 160.40288469340905
        }, {
          "mean" : 217.61748633879768,
          "variance" : 29529.45876188338,
          "n" : 366,
          "max" : 1008.0,
          "min" : 28.0,
          "sum" : 79647.99999999996,
          "standardDeviation" : 171.841376745775
        }, {
          "mean" : 234.38207547169813,
          "variance" : 223806.63854320013,
          "n" : 424,
          "max" : 9391.0,
          "min" : 21.0,
          "sum" : 99378.0,
          "standardDeviation" : 473.08206322286213
        }, {
          "mean" : 228.61095100864557,
          "variance" : 31204.099648514944,
          "n" : 347,
          "max" : 1201.0,
          "min" : 29.0,
          "sum" : 79328.00000000001,
          "standardDeviation" : 176.6468217900196
        }, {
          "mean" : 188.69270833333337,
          "variance" : 22783.299581157513,
          "n" : 384,
          "max" : 948.0,
          "min" : 28.0,
          "sum" : 72458.00000000001,
          "standardDeviation" : 150.9413779622987
        }, {
          "mean" : 186.3316708229426,
          "variance" : 267489.40721945156,
          "n" : 401,
          "max" : 10131.0,
          "min" : 23.0,
          "sum" : 74718.99999999999,
          "standardDeviation" : 517.1937811105732
        }, {
          "mean" : 197.0,
          "variance" : 9455.111111111111,
          "n" : 10,
          "max" : 419.0,
          "min" : 108.0,
          "sum" : 1970.0,
          "standardDeviation" : 97.23739564134321
        } ],
        "21" : [ {
          "mean" : 955.1663286004058,
          "variance" : 1336180.586099705,
          "n" : 488,
          "max" : 20966.0,
          "min" : 60.0,
          "sum" : 466121.168356998,
          "standardDeviation" : 1155.9327775003635
        }, {
          "mean" : 333.6695095948828,
          "variance" : 1115623.217465785,
          "n" : 469,
          "max" : 19589.0,
          "min" : 21.0,
          "sum" : 156491.00000000003,
          "standardDeviation" : 1056.2306648955923
        }, {
          "mean" : 254.65129682997124,
          "variance" : 274541.15840149287,
          "n" : 347,
          "max" : 9538.0,
          "min" : 35.0,
          "sum" : 88364.00000000001,
          "standardDeviation" : 523.9667531451713
        }, {
          "mean" : 214.9135514018692,
          "variance" : 254449.96674801383,
          "n" : 428,
          "max" : 10152.0,
          "min" : 29.0,
          "sum" : 91983.00000000001,
          "standardDeviation" : 504.4303388457259
        }, {
          "mean" : 217.9726775956284,
          "variance" : 21627.829388427264,
          "n" : 366,
          "max" : 753.0,
          "min" : 41.0,
          "sum" : 79778.0,
          "standardDeviation" : 147.06403159313723
        }, {
          "mean" : 203.93188010899175,
          "variance" : 24961.752177603066,
          "n" : 367,
          "max" : 998.0,
          "min" : 20.0,
          "sum" : 74842.99999999997,
          "standardDeviation" : 157.99288647785085
        }, {
          "mean" : 183.31818181818178,
          "variance" : 25364.802594288212,
          "n" : 418,
          "max" : 1225.0,
          "min" : 14.0,
          "sum" : 76626.99999999999,
          "standardDeviation" : 159.26331214152307
        }, {
          "mean" : 168.22647058823532,
          "variance" : 20639.031155648103,
          "n" : 340,
          "max" : 851.0,
          "min" : 20.0,
          "sum" : 57197.00000000001,
          "standardDeviation" : 143.66290807180573
        } ],
        "22" : [ {
          "mean" : 951.9205020920504,
          "variance" : 1381036.2913607524,
          "n" : 473,
          "max" : 16675.0,
          "min" : 70.0,
          "sum" : 450258.3974895398,
          "standardDeviation" : 1175.175004567725
        }, {
          "mean" : 317.35123966942143,
          "variance" : 695566.5181972181,
          "n" : 484,
          "max" : 17665.0,
          "min" : 48.0,
          "sum" : 153597.99999999997,
          "standardDeviation" : 834.0063058497927
        }, {
          "mean" : 243.05444126074497,
          "variance" : 295677.62633797707,
          "n" : 349,
          "max" : 10010.0,
          "min" : 20.0,
          "sum" : 84826.0,
          "standardDeviation" : 543.7624723516483
        }, {
          "mean" : 178.5210280373833,
          "variance" : 19239.45388933878,
          "n" : 428,
          "max" : 1201.0,
          "min" : 38.0,
          "sum" : 76407.00000000006,
          "standardDeviation" : 138.7063585036345
        }, {
          "mean" : 199.76151761517607,
          "variance" : 20808.12775421233,
          "n" : 369,
          "max" : 760.0,
          "min" : 28.0,
          "sum" : 73711.99999999997,
          "standardDeviation" : 144.2502261842675
        }, {
          "mean" : 196.33243243243217,
          "variance" : 23316.867508972384,
          "n" : 370,
          "max" : 815.0,
          "min" : 19.0,
          "sum" : 72642.9999999999,
          "standardDeviation" : 152.69861659154736
        }, {
          "mean" : 245.00239808153478,
          "variance" : 1393205.1418211588,
          "n" : 417,
          "max" : 22050.0,
          "min" : 20.0,
          "sum" : 102166.0,
          "standardDeviation" : 1180.341112484505
        }, {
          "mean" : 166.86350148367964,
          "variance" : 19066.64797936979,
          "n" : 337,
          "max" : 773.0,
          "min" : 26.0,
          "sum" : 56233.00000000004,
          "standardDeviation" : 138.08203351403031
        } ],
        "23" : [ {
          "mean" : 1135.9937369519844,
          "variance" : 1.0594274152680356E7,
          "n" : 474,
          "max" : 60073.0,
          "min" : 63.0,
          "sum" : 538461.0313152405,
          "standardDeviation" : 3254.884660426596
        }, {
          "mean" : 221.92960662525883,
          "variance" : 24556.650636151997,
          "n" : 483,
          "max" : 1086.0,
          "min" : 43.0,
          "sum" : 107192.00000000001,
          "standardDeviation" : 156.705617755561
        }, {
          "mean" : 211.98000000000002,
          "variance" : 22834.844871060166,
          "n" : 350,
          "max" : 902.0,
          "min" : 39.0,
          "sum" : 74193.0,
          "standardDeviation" : 151.11202755260803
        }, {
          "mean" : 207.9594594594594,
          "variance" : 232882.72521505732,
          "n" : 444,
          "max" : 9888.0,
          "min" : 19.0,
          "sum" : 92333.99999999997,
          "standardDeviation" : 482.5792424204105
        }, {
          "mean" : 230.5694444444445,
          "variance" : 282417.02023367374,
          "n" : 360,
          "max" : 9749.0,
          "min" : 20.0,
          "sum" : 83005.00000000003,
          "standardDeviation" : 531.4292241057823
        }, {
          "mean" : 180.1710213776722,
          "variance" : 20062.875443954323,
          "n" : 421,
          "max" : 863.0,
          "min" : 19.0,
          "sum" : 75851.99999999999,
          "standardDeviation" : 141.64348006157687
        }, {
          "mean" : 168.92307692307696,
          "variance" : 16858.81055646481,
          "n" : 377,
          "max" : 825.0,
          "min" : 19.0,
          "sum" : 63684.000000000015,
          "standardDeviation" : 129.84148241784985
        }, {
          "mean" : 168.86206896551718,
          "variance" : 26061.01236174365,
          "n" : 319,
          "max" : 1078.0,
          "min" : 28.0,
          "sum" : 53866.99999999998,
          "standardDeviation" : 161.43423540793214
        } ],
        "24" : [ {
          "mean" : 930.4742268041228,
          "variance" : 944824.8779500715,
          "n" : 480,
          "max" : 12201.0,
          "min" : 90.0,
          "sum" : 446627.628865979,
          "standardDeviation" : 972.0210275246475
        }, {
          "mean" : 361.9710144927534,
          "variance" : 4173067.6298634904,
          "n" : 483,
          "max" : 40003.0,
          "min" : 40.0,
          "sum" : 174831.99999999988,
          "standardDeviation" : 2042.808759983051
        }, {
          "mean" : 189.0693333333335,
          "variance" : 16796.096784313726,
          "n" : 375,
          "max" : 1051.0,
          "min" : 21.0,
          "sum" : 70901.00000000006,
          "standardDeviation" : 129.599756112092
        }, {
          "mean" : 176.2877358490568,
          "variance" : 17217.221976894594,
          "n" : 424,
          "max" : 801.0,
          "min" : 19.0,
          "sum" : 74746.00000000007,
          "standardDeviation" : 131.21441223011516
        }, {
          "mean" : 179.41456582633046,
          "variance" : 17511.44562993736,
          "n" : 357,
          "max" : 984.0,
          "min" : 18.0,
          "sum" : 64050.99999999997,
          "standardDeviation" : 132.33081889694992
        }, {
          "mean" : 166.1932584269665,
          "variance" : 15236.840945439813,
          "n" : 445,
          "max" : 850.0,
          "min" : 20.0,
          "sum" : 73956.0000000001,
          "standardDeviation" : 123.43759939920986
        }, {
          "mean" : 172.62606232294615,
          "variance" : 17834.462046098368,
          "n" : 353,
          "max" : 899.0,
          "min" : 30.0,
          "sum" : 60936.99999999999,
          "standardDeviation" : 133.54573016797792
        }, {
          "mean" : 148.1967741935483,
          "variance" : 16301.466008977968,
          "n" : 310,
          "max" : 677.0,
          "min" : 17.0,
          "sum" : 45940.99999999997,
          "standardDeviation" : 127.67719455320895
        } ],
        "25" : [ {
          "mean" : 1061.850427350426,
          "variance" : 2577124.1531689856,
          "n" : 463,
          "max" : 22997.0,
          "min" : 74.0,
          "sum" : 491636.7478632472,
          "standardDeviation" : 1605.342378799297
        }, {
          "mean" : 383.6354378818737,
          "variance" : 8848991.403557915,
          "n" : 491,
          "max" : 66017.0,
          "min" : 39.0,
          "sum" : 188365.0,
          "standardDeviation" : 2974.725433306058
        }, {
          "mean" : 234.95652173913032,
          "variance" : 25864.06496461074,
          "n" : 345,
          "max" : 998.0,
          "min" : 44.0,
          "sum" : 81059.99999999996,
          "standardDeviation" : 160.82308591931303
        }, {
          "mean" : 213.36010362694293,
          "variance" : 25838.527131417817,
          "n" : 386,
          "max" : 1235.0,
          "min" : 29.0,
          "sum" : 82356.99999999997,
          "standardDeviation" : 160.743669024375
        }, {
          "mean" : 214.19268292682932,
          "variance" : 27199.373540461584,
          "n" : 410,
          "max" : 1148.0,
          "min" : 38.0,
          "sum" : 87819.00000000001,
          "standardDeviation" : 164.92232577932432
        }, {
          "mean" : 206.81871345029242,
          "variance" : 19666.096071067204,
          "n" : 342,
          "max" : 705.0,
          "min" : 27.0,
          "sum" : 70732.00000000001,
          "standardDeviation" : 140.2358587204685
        }, {
          "mean" : 228.4478672985782,
          "variance" : 486634.39988855243,
          "n" : 422,
          "max" : 10175.0,
          "min" : 19.0,
          "sum" : 96405.0,
          "standardDeviation" : 697.5918576707676
        }, {
          "mean" : 169.96428571428558,
          "variance" : 23033.84720582446,
          "n" : 364,
          "max" : 1014.0,
          "min" : 18.0,
          "sum" : 61866.99999999995,
          "standardDeviation" : 151.76905878941352
        }, {
          "mean" : 293.0,
          "variance" : 9247.999999999998,
          "n" : 2,
          "max" : 361.0,
          "min" : 225.0,
          "sum" : 586.0,
          "standardDeviation" : 96.16652224137046
        } ],
        "26" : [ {
          "mean" : 1274.9210526315776,
          "variance" : 8298384.283988335,
          "n" : 375,
          "max" : 44885.0,
          "min" : 112.0,
          "sum" : 478095.3947368416,
          "standardDeviation" : 2880.691632922263
        }, {
          "mean" : 343.0104166666669,
          "variance" : 1978980.9285869552,
          "n" : 576,
          "max" : 33348.0,
          "min" : 42.0,
          "sum" : 197574.00000000015,
          "standardDeviation" : 1406.762570083152
        }, {
          "mean" : 193.35362318840592,
          "variance" : 19070.86295921807,
          "n" : 345,
          "max" : 895.0,
          "min" : 30.0,
          "sum" : 66707.00000000004,
          "standardDeviation" : 138.09729526394813
        }, {
          "mean" : 207.51081081081074,
          "variance" : 18571.101508825894,
          "n" : 370,
          "max" : 911.0,
          "min" : 20.0,
          "sum" : 76778.99999999997,
          "standardDeviation" : 136.27582877688138
        }, {
          "mean" : 201.81990521327015,
          "variance" : 87865.92473348272,
          "n" : 422,
          "max" : 5623.0,
          "min" : 29.0,
          "sum" : 85168.0,
          "standardDeviation" : 296.4218695263268
        }, {
          "mean" : 188.4265129682996,
          "variance" : 19434.753977111828,
          "n" : 347,
          "max" : 880.0,
          "min" : 40.0,
          "sum" : 65383.999999999956,
          "standardDeviation" : 139.40858645403384
        }, {
          "mean" : 170.86516853932594,
          "variance" : 16664.220518271093,
          "n" : 445,
          "max" : 792.0,
          "min" : 29.0,
          "sum" : 76035.00000000004,
          "standardDeviation" : 129.08997063393846
        }, {
          "mean" : 155.2994186046513,
          "variance" : 16812.134576920467,
          "n" : 344,
          "max" : 710.0,
          "min" : 19.0,
          "sum" : 53423.000000000044,
          "standardDeviation" : 129.66161566524022
        } ],
        "27" : [ {
          "mean" : 975.0442105263148,
          "variance" : 2324894.827155229,
          "n" : 470,
          "max" : 24412.0,
          "min" : 68.0,
          "sum" : 458270.778947368,
          "standardDeviation" : 1524.7605802732537
        }, {
          "mean" : 296.56314699792944,
          "variance" : 911212.3046141432,
          "n" : 483,
          "max" : 20601.0,
          "min" : 37.0,
          "sum" : 143239.9999999999,
          "standardDeviation" : 954.5744102028627
        }, {
          "mean" : 197.64553314121045,
          "variance" : 16251.32196698372,
          "n" : 347,
          "max" : 1274.0,
          "min" : 20.0,
          "sum" : 68583.00000000003,
          "standardDeviation" : 127.48067291548048
        }, {
          "mean" : 200.09069212410492,
          "variance" : 243003.3697456921,
          "n" : 419,
          "max" : 9855.0,
          "min" : 26.0,
          "sum" : 83837.99999999996,
          "standardDeviation" : 492.9537196793347
        }, {
          "mean" : 183.4397905759161,
          "variance" : 15501.438622528189,
          "n" : 382,
          "max" : 723.0,
          "min" : 34.0,
          "sum" : 70073.99999999996,
          "standardDeviation" : 124.50477349293958
        }, {
          "mean" : 178.3896457765668,
          "variance" : 16061.304045502584,
          "n" : 367,
          "max" : 725.0,
          "min" : 28.0,
          "sum" : 65469.000000000015,
          "standardDeviation" : 126.73320024958963
        }, {
          "mean" : 210.04761904761926,
          "variance" : 337571.9738606663,
          "n" : 420,
          "max" : 10180.0,
          "min" : 19.0,
          "sum" : 88220.00000000009,
          "standardDeviation" : 581.0094438653009
        }, {
          "mean" : 182.9198813056381,
          "variance" : 14855.389395223969,
          "n" : 337,
          "max" : 881.0,
          "min" : 33.0,
          "sum" : 61644.000000000044,
          "standardDeviation" : 121.88268702003566
        } ],
        "28" : [ {
          "mean" : 996.0533880903482,
          "variance" : 3403199.3263619523,
          "n" : 482,
          "max" : 28974.0,
          "min" : 57.0,
          "sum" : 480097.73305954784,
          "standardDeviation" : 1844.776226636161
        }, {
          "mean" : 357.0677966101698,
          "variance" : 2827423.5367951314,
          "n" : 472,
          "max" : 30369.0,
          "min" : 26.0,
          "sum" : 168536.00000000015,
          "standardDeviation" : 1681.4944355528303
        }, {
          "mean" : 208.46820809248558,
          "variance" : 24288.707681997137,
          "n" : 346,
          "max" : 998.0,
          "min" : 39.0,
          "sum" : 72130.00000000001,
          "standardDeviation" : 155.84834834542565
        }, {
          "mean" : 205.20923913043467,
          "variance" : 23417.669996149754,
          "n" : 368,
          "max" : 906.0,
          "min" : 19.0,
          "sum" : 75516.99999999996,
          "standardDeviation" : 153.02833069778208
        }, {
          "mean" : 221.1756440281029,
          "variance" : 252072.4690767553,
          "n" : 427,
          "max" : 10110.0,
          "min" : 20.0,
          "sum" : 94441.99999999994,
          "standardDeviation" : 502.06819166001276
        }, {
          "mean" : 200.35040431266836,
          "variance" : 21749.363371457715,
          "n" : 371,
          "max" : 908.0,
          "min" : 41.0,
          "sum" : 74329.99999999996,
          "standardDeviation" : 147.47665364883255
        }, {
          "mean" : 175.46024096385534,
          "variance" : 21878.118584482847,
          "n" : 415,
          "max" : 964.0,
          "min" : 28.0,
          "sum" : 72815.99999999997,
          "standardDeviation" : 147.9125369415414
        }, {
          "mean" : 161.6140350877192,
          "variance" : 20910.26115141225,
          "n" : 342,
          "max" : 787.0,
          "min" : 16.0,
          "sum" : 55271.99999999996,
          "standardDeviation" : 144.60380752736856
        }, {
          "mean" : 189.0,
          "variance" : 3679.3333333333335,
          "n" : 4,
          "max" : 257.0,
          "min" : 110.0,
          "sum" : 756.0,
          "standardDeviation" : 60.65750846625118
        } ],
        "29" : [ {
          "mean" : 956.2043010752705,
          "variance" : 2673557.606878014,
          "n" : 460,
          "max" : 24277.0,
          "min" : 82.0,
          "sum" : 439853.97849462443,
          "standardDeviation" : 1635.1017114779172
        }, {
          "mean" : 355.5176715176716,
          "variance" : 3760351.1293745693,
          "n" : 481,
          "max" : 41445.0,
          "min" : 20.0,
          "sum" : 171004.00000000003,
          "standardDeviation" : 1939.1624814271158
        }, {
          "mean" : 217.69800569800566,
          "variance" : 19786.697110297104,
          "n" : 351,
          "max" : 650.0,
          "min" : 23.0,
          "sum" : 76411.99999999999,
          "standardDeviation" : 140.66519509209485
        }, {
          "mean" : 206.90710382513663,
          "variance" : 21931.88175761659,
          "n" : 366,
          "max" : 906.0,
          "min" : 21.0,
          "sum" : 75728.0,
          "standardDeviation" : 148.09416517073382
        }, {
          "mean" : 204.02612826603325,
          "variance" : 25170.57788711686,
          "n" : 421,
          "max" : 865.0,
          "min" : 21.0,
          "sum" : 85895.0,
          "standardDeviation" : 158.6523806537956
        }, {
          "mean" : 229.79885057471276,
          "variance" : 32546.213024611658,
          "n" : 348,
          "max" : 1215.0,
          "min" : 19.0,
          "sum" : 79970.00000000004,
          "standardDeviation" : 180.4056901115141
        }, {
          "mean" : 200.95095367847398,
          "variance" : 24345.855511383103,
          "n" : 367,
          "max" : 794.0,
          "min" : 25.0,
          "sum" : 73748.99999999996,
          "standardDeviation" : 156.0315849800389
        }, {
          "mean" : 166.6487804878049,
          "variance" : 21489.191746675417,
          "n" : 410,
          "max" : 851.0,
          "min" : 24.0,
          "sum" : 68326.00000000001,
          "standardDeviation" : 146.59192251510797
        }, {
          "mean" : 308.59090909090907,
          "variance" : 33910.25324675325,
          "n" : 22,
          "max" : 867.0,
          "min" : 47.0,
          "sum" : 6788.999999999999,
          "standardDeviation" : 184.14736828625396
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
