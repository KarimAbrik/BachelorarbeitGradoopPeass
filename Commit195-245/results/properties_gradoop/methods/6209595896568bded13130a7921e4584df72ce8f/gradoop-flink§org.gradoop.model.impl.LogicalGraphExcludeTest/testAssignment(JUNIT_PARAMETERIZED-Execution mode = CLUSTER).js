if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphExcludeTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Test Case: org.gradoop.model.impl.LogicalGraphExcludeTest#testAssignment<br>";
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
}`,"org.gradoop.model.impl.LogicalGraphExcludeTest.testAssignment_":
 `@Test
public void testAssignment() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> databaseCommunity = getGraphStore().getGraph(0L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> hadoopCommunity = getGraphStore().getGraph(1L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = databaseCommunity.exclude(hadoopCommunity);
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
}`,"org.gradoop.model.impl.LogicalGraphExcludeTest.testAssignment_":
 `@Test
public void testAssignment() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> databaseCommunity = getGraphStore().getGraph(0L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> hadoopCommunity = getGraphStore().getGraph(1L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = databaseCommunity.exclude(hadoopCommunity);
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
        }
    }
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.LogicalGraphExcludeTest#testAssignment",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphExcludeTest.testAssignment()",
  "otherKiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphExcludeTest.testAssignment()",
  "module" : "gradoop-flink",
  "name" : "LogicalGraphExcludeTest#testAssignment",
  "key" : "org.gradoop.model.impl.LogicalGraphExcludeTest.testAssignment_",
  "otherKey" : "org.gradoop.model.impl.LogicalGraphExcludeTest.testAssignment_",
  "parent" : null,
  "color" : "#00FF00",
  "statistic" : {
    "meanOld" : 4.930724922017242E9,
    "meanCurrent" : 4.405561848806667E9,
    "deviationOld" : 6.89494773265584E7,
    "deviationCurrent" : 6.54675804608697E7,
    "vms" : 29,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 29.982461971375148,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 6.051231651404604E7,
  "inVMDeviation" : 5.8336864669388816E7,
  "ess" : 0,
  "values" : [ 4.4615501674E9, 4.4255556474E9, 4.406170806E9, 4.4777500418E9, 4.441172619E9, 4.3239431606E9, 4.316539536E9, 4.5628393276E9, 4.3672558844E9, 4.4123105336E9, 4.4209678724E9, 4.3664426352E9, 4.4437584604E9, 4.3832197558E9, 4.3757755618E9, 4.3263177814E9, 4.508592825E9, 4.320857515E9, 4.447906166E9, 4.40754705E9, 4.4232746078E9, 4.3571174762E9, 4.4156566756E9, 4.3392772564E9, 4.4214752038E9, 4.429047333E9, 4.3658285208E9, 4.5532996676E9, 4.3548550074E9, 4.3105503688E9 ],
  "valuesPredecessor" : [ 4.982019177E9, 4.9850339238E9, 4.9537802662E9, 5.1207320004E9, 4.9147425666E9, 4.844792672E9, 4.8468103738E9, 4.8878062118E9, 4.902582335E9, 4.9602299866E9, 4.9697449306E9, 4.940556904E9, 4.9326484412E9, 4.905664306E9, 4.8570069774E9, 4.8364766228E9, 4.985752237E9, 4.870201628E9, 4.9750474491E9, 4.9970629078E9, 4.9180268818E9, 4.8464515534E9, 4.919220396E9, 4.8705551022E9, 4.9374805092E9, 4.9361770958E9, 4.9137932324E9, 5.1012368144E9, 4.8793892362E9, 5.3423666282E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4.524425071E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.524425071E9,
        "min" : 4.524425071E9,
        "sum" : 4.524425071E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.416216528E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.416216528E9,
        "min" : 4.416216528E9,
        "sum" : 4.416216528E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.503010822E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.503010822E9,
        "min" : 4.503010822E9,
        "sum" : 4.503010822E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.432049208E9,
        "variance" : 5.0996037134760194E14,
        "n" : 2,
        "max" : 4.448017307E9,
        "min" : 4.416081109E9,
        "sum" : 8.864098416E9,
        "standardDeviation" : 2.2582302171116255E7
      } ],
      "1" : [ {
        "mean" : 4.354075344E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.354075344E9,
        "min" : 4.354075344E9,
        "sum" : 4.354075344E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.420050146E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.420050146E9,
        "min" : 4.420050146E9,
        "sum" : 4.420050146E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.483469282E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.483469282E9,
        "min" : 4.483469282E9,
        "sum" : 4.483469282E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4350917325E9,
        "variance" : 3.6502709541761244E14,
        "n" : 2,
        "max" : 4.44860149E9,
        "min" : 4.421581975E9,
        "sum" : 8.870183465E9,
        "standardDeviation" : 1.9105682280871637E7
      } ],
      "2" : [ {
        "mean" : 4.504039723E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.504039723E9,
        "min" : 4.504039723E9,
        "sum" : 4.504039723E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.42255137E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.42255137E9,
        "min" : 4.42255137E9,
        "sum" : 4.42255137E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.408967393E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.408967393E9,
        "min" : 4.408967393E9,
        "sum" : 4.408967393E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.347647772E9,
        "variance" : 4.134967775171298E15,
        "n" : 2,
        "max" : 4.393117365E9,
        "min" : 4.302178179E9,
        "sum" : 8.695295544E9,
        "standardDeviation" : 6.4303715096184745E7
      } ],
      "3" : [ {
        "mean" : 4.38678558E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.38678558E9,
        "min" : 4.38678558E9,
        "sum" : 4.38678558E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.480090675E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.480090675E9,
        "min" : 4.480090675E9,
        "sum" : 4.480090675E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.489017311E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.489017311E9,
        "min" : 4.489017311E9,
        "sum" : 4.489017311E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.485424183E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.485424183E9,
        "min" : 4.485424183E9,
        "sum" : 4.485424183E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.54743246E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.54743246E9,
        "min" : 4.54743246E9,
        "sum" : 4.54743246E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.40257785E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.40257785E9,
        "min" : 4.40257785E9,
        "sum" : 4.40257785E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.331781083E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.331781083E9,
        "min" : 4.331781083E9,
        "sum" : 4.331781083E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.534327371E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.534327371E9,
        "min" : 4.534327371E9,
        "sum" : 4.534327371E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.431420711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.431420711E9,
        "min" : 4.431420711E9,
        "sum" : 4.431420711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.50575608E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.50575608E9,
        "min" : 4.50575608E9,
        "sum" : 4.50575608E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.344104952E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.344104952E9,
        "min" : 4.344104952E9,
        "sum" : 4.344104952E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.361179551E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.361179551E9,
        "min" : 4.361179551E9,
        "sum" : 4.361179551E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2727024035E9,
        "variance" : 1.7551437334435208E15,
        "n" : 2,
        "max" : 4.302326243E9,
        "min" : 4.243078564E9,
        "sum" : 8.545404807E9,
        "standardDeviation" : 4.189443559046381E7
      }, {
        "mean" : 4.369026493E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.369026493E9,
        "min" : 4.369026493E9,
        "sum" : 4.369026493E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.271780352E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.271780352E9,
        "min" : 4.271780352E9,
        "sum" : 4.271780352E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.338782388E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.338782388E9,
        "min" : 4.338782388E9,
        "sum" : 4.338782388E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3374244345E9,
        "variance" : 1.2673517523069605E15,
        "n" : 2,
        "max" : 4.362597354E9,
        "min" : 4.312251515E9,
        "sum" : 8.674848869E9,
        "standardDeviation" : 3.559988416142615E7
      }, {
        "mean" : 4.297286071E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.297286071E9,
        "min" : 4.297286071E9,
        "sum" : 4.297286071E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.507650857E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.507650857E9,
        "min" : 4.507650857E9,
        "sum" : 4.507650857E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.593587805E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.593587805E9,
        "min" : 4.593587805E9,
        "sum" : 4.593587805E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.570275617E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.570275617E9,
        "min" : 4.570275617E9,
        "sum" : 4.570275617E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.512283865E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.512283865E9,
        "min" : 4.512283865E9,
        "sum" : 4.512283865E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.630398494E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.630398494E9,
        "min" : 4.630398494E9,
        "sum" : 4.630398494E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.330382593E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.330382593E9,
        "min" : 4.330382593E9,
        "sum" : 4.330382593E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.317052058E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.317052058E9,
        "min" : 4.317052058E9,
        "sum" : 4.317052058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3661702015E9,
        "variance" : 4.3064056360921445E15,
        "n" : 2,
        "max" : 4.412572818E9,
        "min" : 4.319767585E9,
        "sum" : 8.732340403E9,
        "standardDeviation" : 6.562320958389756E7
      }, {
        "mean" : 4.456504368E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.456504368E9,
        "min" : 4.456504368E9,
        "sum" : 4.456504368E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.352306592E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.352306592E9,
        "min" : 4.352306592E9,
        "sum" : 4.352306592E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.400633711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.400633711E9,
        "min" : 4.400633711E9,
        "sum" : 4.400633711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.524386939E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.524386939E9,
        "min" : 4.524386939E9,
        "sum" : 4.524386939E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.392112713E9,
        "variance" : 1.5322969293915382E15,
        "n" : 2,
        "max" : 4.4197921E9,
        "min" : 4.364433326E9,
        "sum" : 8.784225426E9,
        "standardDeviation" : 3.914456449357354E7
      } ],
      "10" : [ {
        "mean" : 4.365327231E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.365327231E9,
        "min" : 4.365327231E9,
        "sum" : 4.365327231E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.491250209E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.491250209E9,
        "min" : 4.491250209E9,
        "sum" : 4.491250209E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.410118973E9,
        "variance" : 4.64156201003045E15,
        "n" : 2,
        "max" : 4.458293458E9,
        "min" : 4.361944488E9,
        "sum" : 8.820237946E9,
        "standardDeviation" : 6.812901004733923E7
      }, {
        "mean" : 4.428023976E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.428023976E9,
        "min" : 4.428023976E9,
        "sum" : 4.428023976E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.294922691E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.294922691E9,
        "min" : 4.294922691E9,
        "sum" : 4.294922691E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.417202857E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.417202857E9,
        "min" : 4.417202857E9,
        "sum" : 4.417202857E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.351620645E9,
        "variance" : 1.8967742977020502E15,
        "n" : 2,
        "max" : 4.38241654E9,
        "min" : 4.32082475E9,
        "sum" : 8.70324129E9,
        "standardDeviation" : 4.355197237441779E7
      }, {
        "mean" : 4.416846338E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.416846338E9,
        "min" : 4.416846338E9,
        "sum" : 4.416846338E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.464435906E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.464435906E9,
        "min" : 4.464435906E9,
        "sum" : 4.464435906E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.394732035E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.394732035E9,
        "min" : 4.394732035E9,
        "sum" : 4.394732035E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.489773699E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.489773699E9,
        "min" : 4.489773699E9,
        "sum" : 4.489773699E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.419848062E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.419848062E9,
        "min" : 4.419848062E9,
        "sum" : 4.419848062E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4500026E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.4500026E9,
        "min" : 4.4500026E9,
        "sum" : 4.4500026E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.3997397E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.3997397E9,
        "min" : 4.3997397E9,
        "sum" : 4.3997397E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.397550627E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.397550627E9,
        "min" : 4.397550627E9,
        "sum" : 4.397550627E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.332747237E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.332747237E9,
        "min" : 4.332747237E9,
        "sum" : 4.332747237E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3930306075E9,
        "variance" : 2.1537121772014208E15,
        "n" : 2,
        "max" : 4.425846093E9,
        "min" : 4.360215122E9,
        "sum" : 8.786061215E9,
        "standardDeviation" : 4.640810464995765E7
      } ],
      "14" : [ {
        "mean" : 4.336475119E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.336475119E9,
        "min" : 4.336475119E9,
        "sum" : 4.336475119E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.350878503E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.350878503E9,
        "min" : 4.350878503E9,
        "sum" : 4.350878503E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3996928605E9,
        "variance" : 1.122775250979605E14,
        "n" : 2,
        "max" : 4.407185441E9,
        "min" : 4.39220028E9,
        "sum" : 8.799385721E9,
        "standardDeviation" : 1.0596108960272186E7
      }, {
        "mean" : 4.392138466E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.392138466E9,
        "min" : 4.392138466E9,
        "sum" : 4.392138466E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.348916782E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.348916782E9,
        "min" : 4.348916782E9,
        "sum" : 4.348916782E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2957077495E9,
        "variance" : 7.022849885368245E14,
        "n" : 2,
        "max" : 4.314446546E9,
        "min" : 4.276968953E9,
        "sum" : 8.591415499E9,
        "standardDeviation" : 2.6500660152849484E7
      }, {
        "mean" : 4.350128379E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.350128379E9,
        "min" : 4.350128379E9,
        "sum" : 4.350128379E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.341128247E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.341128247E9,
        "min" : 4.341128247E9,
        "sum" : 4.341128247E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.419733863E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.419733863E9,
        "min" : 4.419733863E9,
        "sum" : 4.419733863E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.46561393E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.46561393E9,
        "min" : 4.46561393E9,
        "sum" : 4.46561393E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.624330792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.624330792E9,
        "min" : 4.624330792E9,
        "sum" : 4.624330792E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.436698111E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.436698111E9,
        "min" : 4.436698111E9,
        "sum" : 4.436698111E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.596587429E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.596587429E9,
        "min" : 4.596587429E9,
        "sum" : 4.596587429E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.254156057E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.254156057E9,
        "min" : 4.254156057E9,
        "sum" : 4.254156057E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.383912534E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.383912534E9,
        "min" : 4.383912534E9,
        "sum" : 4.383912534E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.326804656E9,
        "variance" : 1.8441381120962004E13,
        "n" : 2,
        "max" : 4.329841215E9,
        "min" : 4.323768097E9,
        "sum" : 8.653609312E9,
        "standardDeviation" : 4294342.920746083
      }, {
        "mean" : 4.312609672E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.312609672E9,
        "min" : 4.312609672E9,
        "sum" : 4.312609672E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.425846146E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.425846146E9,
        "min" : 4.425846146E9,
        "sum" : 4.425846146E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.312402756E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.312402756E9,
        "min" : 4.312402756E9,
        "sum" : 4.312402756E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.578537255E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.578537255E9,
        "min" : 4.578537255E9,
        "sum" : 4.578537255E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4613723365E9,
        "variance" : 1.2992360172720498E13,
        "n" : 2,
        "max" : 4.463921097E9,
        "min" : 4.458823576E9,
        "sum" : 8.922744673E9,
        "standardDeviation" : 3604491.6663408307
      } ],
      "19" : [ {
        "mean" : 4.425486838E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.425486838E9,
        "min" : 4.425486838E9,
        "sum" : 4.425486838E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.311102245E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.311102245E9,
        "min" : 4.311102245E9,
        "sum" : 4.311102245E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.484405933E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.484405933E9,
        "min" : 4.484405933E9,
        "sum" : 4.484405933E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.408370117E9,
        "variance" : 1.7936119577299222E15,
        "n" : 2,
        "max" : 4.438316836E9,
        "min" : 4.378423398E9,
        "sum" : 8.816740234E9,
        "standardDeviation" : 4.235105615837605E7
      } ],
      "20" : [ {
        "mean" : 4.36414366E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.36414366E9,
        "min" : 4.36414366E9,
        "sum" : 4.36414366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.41934071E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.41934071E9,
        "min" : 4.41934071E9,
        "sum" : 4.41934071E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.396921594E9,
        "variance" : 1.1805118340069778E15,
        "n" : 2,
        "max" : 4.421216777E9,
        "min" : 4.372626411E9,
        "sum" : 8.793843188E9,
        "standardDeviation" : 3.4358577298936255E7
      }, {
        "mean" : 4.539045481E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.539045481E9,
        "min" : 4.539045481E9,
        "sum" : 4.539045481E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.386028279E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.386028279E9,
        "min" : 4.386028279E9,
        "sum" : 4.386028279E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.295983659E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.295983659E9,
        "min" : 4.295983659E9,
        "sum" : 4.295983659E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3475786865E9,
        "variance" : 5.1065205635340056E14,
        "n" : 2,
        "max" : 4.363557611E9,
        "min" : 4.331599762E9,
        "sum" : 8.695157373E9,
        "standardDeviation" : 2.2597611740035728E7
      }, {
        "mean" : 4.40841807E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.40841807E9,
        "min" : 4.40841807E9,
        "sum" : 4.40841807E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.352372186E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.352372186E9,
        "min" : 4.352372186E9,
        "sum" : 4.352372186E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.350617949E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.350617949E9,
        "min" : 4.350617949E9,
        "sum" : 4.350617949E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.532652783E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.532652783E9,
        "min" : 4.532652783E9,
        "sum" : 4.532652783E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.42132023E9,
        "variance" : 1.0859579476058898E16,
        "n" : 2,
        "max" : 4.495007337E9,
        "min" : 4.347633123E9,
        "sum" : 8.84264046E9,
        "standardDeviation" : 1.0420930609143743E8
      } ],
      "23" : [ {
        "mean" : 4.303999555E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.303999555E9,
        "min" : 4.303999555E9,
        "sum" : 4.303999555E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4049243E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.4049243E9,
        "min" : 4.4049243E9,
        "sum" : 4.4049243E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3696525175E9,
        "variance" : 5.866528780548005E14,
        "n" : 2,
        "max" : 4.386779293E9,
        "min" : 4.352525742E9,
        "sum" : 8.739305035E9,
        "standardDeviation" : 2.4220918191819247E7
      }, {
        "mean" : 4.248157392E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.248157392E9,
        "min" : 4.248157392E9,
        "sum" : 4.248157392E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.444586755E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.444586755E9,
        "min" : 4.444586755E9,
        "sum" : 4.444586755E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.351323031E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.351323031E9,
        "min" : 4.351323031E9,
        "sum" : 4.351323031E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3960540975E9,
        "variance" : 8.821207106281252E13,
        "n" : 2,
        "max" : 4.402695335E9,
        "min" : 4.38941286E9,
        "sum" : 8.792108195E9,
        "standardDeviation" : 9392128.143440789
      }, {
        "mean" : 4.519358038E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.519358038E9,
        "min" : 4.519358038E9,
        "sum" : 4.519358038E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.50562014E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.50562014E9,
        "min" : 4.50562014E9,
        "sum" : 4.50562014E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.333775736E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.333775736E9,
        "min" : 4.333775736E9,
        "sum" : 4.333775736E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.426273464E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.426273464E9,
        "min" : 4.426273464E9,
        "sum" : 4.426273464E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4397836625E9,
        "variance" : 5.6345600082005E12,
        "n" : 2,
        "max" : 4.441462138E9,
        "min" : 4.438105187E9,
        "sum" : 8.879567325E9,
        "standardDeviation" : 2373722.816210962
      } ],
      "26" : [ {
        "mean" : 4.326065241E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.326065241E9,
        "min" : 4.326065241E9,
        "sum" : 4.326065241E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.431782828E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.431782828E9,
        "min" : 4.431782828E9,
        "sum" : 4.431782828E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3837712765E9,
        "variance" : 2.9829608341528205E15,
        "n" : 2,
        "max" : 4.422390966E9,
        "min" : 4.345151587E9,
        "sum" : 8.767542553E9,
        "standardDeviation" : 5.461648866553781E7
      }, {
        "mean" : 4.303751982E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.303751982E9,
        "min" : 4.303751982E9,
        "sum" : 4.303751982E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.484953981E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.484953981E9,
        "min" : 4.484953981E9,
        "sum" : 4.484953981E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.526793923E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.526793923E9,
        "min" : 4.526793923E9,
        "sum" : 4.526793923E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.60770877E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.60770877E9,
        "min" : 4.60770877E9,
        "sum" : 4.60770877E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.575158451E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.575158451E9,
        "min" : 4.575158451E9,
        "sum" : 4.575158451E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.571883213E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.571883213E9,
        "min" : 4.571883213E9,
        "sum" : 4.571883213E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.401080886E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.401080886E9,
        "min" : 4.401080886E9,
        "sum" : 4.401080886E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.359297067E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.359297067E9,
        "min" : 4.359297067E9,
        "sum" : 4.359297067E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.363278252E9,
        "variance" : 1.604227639129992E15,
        "n" : 2,
        "max" : 4.391599866E9,
        "min" : 4.334956638E9,
        "sum" : 8.726556504E9,
        "standardDeviation" : 4.005281062709572E7
      }, {
        "mean" : 4.28734058E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.28734058E9,
        "min" : 4.28734058E9,
        "sum" : 4.28734058E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.311344589E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.311344589E9,
        "min" : 4.311344589E9,
        "sum" : 4.311344589E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.353714372E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.353714372E9,
        "min" : 4.353714372E9,
        "sum" : 4.353714372E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.280812286E9,
        "variance" : 1.9875452013145618E15,
        "n" : 2,
        "max" : 4.312336445E9,
        "min" : 4.249288127E9,
        "sum" : 8.561624572E9,
        "standardDeviation" : 4.458189320020586E7
      }, {
        "mean" : 4.326068311E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.326068311E9,
        "min" : 4.326068311E9,
        "sum" : 4.326068311E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.9430161645E9,
        "variance" : 3.800449234272645E14,
        "n" : 2,
        "max" : 4.956801028E9,
        "min" : 4.929231301E9,
        "sum" : 9.886032329E9,
        "standardDeviation" : 1.9494740917161852E7
      }, {
        "mean" : 4.987816951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.987816951E9,
        "min" : 4.987816951E9,
        "sum" : 4.987816951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.000395676E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.000395676E9,
        "min" : 5.000395676E9,
        "sum" : 5.000395676E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.035850929E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.035850929E9,
        "min" : 5.035850929E9,
        "sum" : 5.035850929E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.916508005E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.916508005E9,
        "min" : 4.916508005E9,
        "sum" : 4.916508005E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.972459584E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.972459584E9,
        "min" : 4.972459584E9,
        "sum" : 4.972459584E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.004399482E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.004399482E9,
        "min" : 5.004399482E9,
        "sum" : 5.004399482E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.919442783E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.919442783E9,
        "min" : 4.919442783E9,
        "sum" : 4.919442783E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.112359765E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.112359765E9,
        "min" : 5.112359765E9,
        "sum" : 5.112359765E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.970523491E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.970523491E9,
        "min" : 4.970523491E9,
        "sum" : 4.970523491E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.916018116E9,
        "variance" : 2.1400224439453522E15,
        "n" : 2,
        "max" : 4.948729142E9,
        "min" : 4.88330709E9,
        "sum" : 9.832036232E9,
        "standardDeviation" : 4.626037660833894E7
      }, {
        "mean" : 4.986141838E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.986141838E9,
        "min" : 4.986141838E9,
        "sum" : 4.986141838E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.98019977E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.98019977E9,
        "min" : 4.98019977E9,
        "sum" : 4.98019977E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 5.060528108E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.060528108E9,
        "min" : 5.060528108E9,
        "sum" : 5.060528108E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.121049134E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.121049134E9,
        "min" : 5.121049134E9,
        "sum" : 5.121049134E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.139432138E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.139432138E9,
        "min" : 5.139432138E9,
        "sum" : 5.139432138E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.168029161E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.168029161E9,
        "min" : 5.168029161E9,
        "sum" : 5.168029161E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.114621461E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.114621461E9,
        "min" : 5.114621461E9,
        "sum" : 5.114621461E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.8699672E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.8699672E9,
        "min" : 4.8699672E9,
        "sum" : 4.8699672E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.856308465E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.856308465E9,
        "min" : 4.856308465E9,
        "sum" : 4.856308465E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.92782296E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.92782296E9,
        "min" : 4.92782296E9,
        "sum" : 4.92782296E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.875403898E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.875403898E9,
        "min" : 4.875403898E9,
        "sum" : 4.875403898E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.04421031E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.04421031E9,
        "min" : 5.04421031E9,
        "sum" : 5.04421031E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.79385435E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.79385435E9,
        "min" : 4.79385435E9,
        "sum" : 4.79385435E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.842345009E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.842345009E9,
        "min" : 4.842345009E9,
        "sum" : 4.842345009E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.82274051E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.82274051E9,
        "min" : 4.82274051E9,
        "sum" : 4.82274051E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.857171582E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.857171582E9,
        "min" : 4.857171582E9,
        "sum" : 4.857171582E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.907851909E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.907851909E9,
        "min" : 4.907851909E9,
        "sum" : 4.907851909E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.808434546E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.808434546E9,
        "min" : 4.808434546E9,
        "sum" : 4.808434546E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.892399359E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.892399359E9,
        "min" : 4.892399359E9,
        "sum" : 4.892399359E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.810378684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.810378684E9,
        "min" : 4.810378684E9,
        "sum" : 4.810378684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.784555651E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.784555651E9,
        "min" : 4.784555651E9,
        "sum" : 4.784555651E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.938283629E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.938283629E9,
        "min" : 4.938283629E9,
        "sum" : 4.938283629E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.877999775E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.877999775E9,
        "min" : 4.877999775E9,
        "sum" : 4.877999775E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.903957003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.903957003E9,
        "min" : 4.903957003E9,
        "sum" : 4.903957003E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.809599212E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.809599212E9,
        "min" : 4.809599212E9,
        "sum" : 4.809599212E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.844228168E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.844228168E9,
        "min" : 4.844228168E9,
        "sum" : 4.844228168E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.003246901E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.003246901E9,
        "min" : 5.003246901E9,
        "sum" : 5.003246901E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.876838905E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.876838905E9,
        "min" : 4.876838905E9,
        "sum" : 4.876838905E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.884264097E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.884264097E9,
        "min" : 4.884264097E9,
        "sum" : 4.884264097E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.8781787E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.8781787E9,
        "min" : 4.8781787E9,
        "sum" : 4.8781787E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.819981671E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.819981671E9,
        "min" : 4.819981671E9,
        "sum" : 4.819981671E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.053648302E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.053648302E9,
        "min" : 5.053648302E9,
        "sum" : 5.053648302E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.942469033E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.942469033E9,
        "min" : 4.942469033E9,
        "sum" : 4.942469033E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.053704947E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.053704947E9,
        "min" : 5.053704947E9,
        "sum" : 5.053704947E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.914512531E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.914512531E9,
        "min" : 4.914512531E9,
        "sum" : 4.914512531E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.945231711E9,
        "variance" : 4.5210515630405006E14,
        "n" : 2,
        "max" : 4.960266756E9,
        "min" : 4.930196666E9,
        "sum" : 9.890463422E9,
        "standardDeviation" : 2.126276454988979E7
      } ],
      "10" : [ {
        "mean" : 4.928352451E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.928352451E9,
        "min" : 4.928352451E9,
        "sum" : 4.928352451E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.983662603E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.983662603E9,
        "min" : 4.983662603E9,
        "sum" : 4.983662603E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.971267504E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.971267504E9,
        "min" : 4.971267504E9,
        "sum" : 4.971267504E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.968653498E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.968653498E9,
        "min" : 4.968653498E9,
        "sum" : 4.968653498E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.996788597E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.996788597E9,
        "min" : 4.996788597E9,
        "sum" : 4.996788597E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.919541778E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.919541778E9,
        "min" : 4.919541778E9,
        "sum" : 4.919541778E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.927631662E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.927631662E9,
        "min" : 4.927631662E9,
        "sum" : 4.927631662E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.924145861E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.924145861E9,
        "min" : 4.924145861E9,
        "sum" : 4.924145861E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.945135627E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.945135627E9,
        "min" : 4.945135627E9,
        "sum" : 4.945135627E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.986329592E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.986329592E9,
        "min" : 4.986329592E9,
        "sum" : 4.986329592E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.876198444E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.876198444E9,
        "min" : 4.876198444E9,
        "sum" : 4.876198444E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.943043802E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.943043802E9,
        "min" : 4.943043802E9,
        "sum" : 4.943043802E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.945353774E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.945353774E9,
        "min" : 4.945353774E9,
        "sum" : 4.945353774E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.924927071E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.924927071E9,
        "min" : 4.924927071E9,
        "sum" : 4.924927071E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.973719115E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.973719115E9,
        "min" : 4.973719115E9,
        "sum" : 4.973719115E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.90103003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.90103003E9,
        "min" : 4.90103003E9,
        "sum" : 4.90103003E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.905599909E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.905599909E9,
        "min" : 4.905599909E9,
        "sum" : 4.905599909E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.881826996E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.881826996E9,
        "min" : 4.881826996E9,
        "sum" : 4.881826996E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.903729899E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.903729899E9,
        "min" : 4.903729899E9,
        "sum" : 4.903729899E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.936134696E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.936134696E9,
        "min" : 4.936134696E9,
        "sum" : 4.936134696E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.831775304E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.831775304E9,
        "min" : 4.831775304E9,
        "sum" : 4.831775304E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.848841682E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.848841682E9,
        "min" : 4.848841682E9,
        "sum" : 4.848841682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.797918995E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.797918995E9,
        "min" : 4.797918995E9,
        "sum" : 4.797918995E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.818829249E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.818829249E9,
        "min" : 4.818829249E9,
        "sum" : 4.818829249E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.987669657E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.987669657E9,
        "min" : 4.987669657E9,
        "sum" : 4.987669657E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.851113392E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.851113392E9,
        "min" : 4.851113392E9,
        "sum" : 4.851113392E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.869577314E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.869577314E9,
        "min" : 4.869577314E9,
        "sum" : 4.869577314E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.816405201E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.816405201E9,
        "min" : 4.816405201E9,
        "sum" : 4.816405201E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.739031761E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.739031761E9,
        "min" : 4.739031761E9,
        "sum" : 4.739031761E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.906255446E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.906255446E9,
        "min" : 4.906255446E9,
        "sum" : 4.906255446E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.9398399E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.9398399E9,
        "min" : 4.9398399E9,
        "sum" : 4.9398399E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.001943558E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.001943558E9,
        "min" : 5.001943558E9,
        "sum" : 5.001943558E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.97540746E9,
        "variance" : 1.2242281661596802E14,
        "n" : 2,
        "max" : 4.983231232E9,
        "min" : 4.967583688E9,
        "sum" : 9.95081492E9,
        "standardDeviation" : 1.1064484471314875E7
      }, {
        "mean" : 5.036162807E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.036162807E9,
        "min" : 5.036162807E9,
        "sum" : 5.036162807E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.817493285E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.817493285E9,
        "min" : 4.817493285E9,
        "sum" : 4.817493285E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.871777968E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.871777968E9,
        "min" : 4.871777968E9,
        "sum" : 4.871777968E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.822122481E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.822122481E9,
        "min" : 4.822122481E9,
        "sum" : 4.822122481E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.845717867E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.845717867E9,
        "min" : 4.845717867E9,
        "sum" : 4.845717867E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.993896539E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.993896539E9,
        "min" : 4.993896539E9,
        "sum" : 4.993896539E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.9062784715E9,
        "variance" : 2.2343868465693848E15,
        "n" : 1,
        "max" : 4.939702915E9,
        "min" : 4.872854028E9,
        "sum" : 4.9062784715E9,
        "standardDeviation" : 4.7269301312473245E7
      }, {
        "mean" : 5.009940214E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.009940214E9,
        "min" : 5.009940214E9,
        "sum" : 5.009940214E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.926320684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.926320684E9,
        "min" : 4.926320684E9,
        "sum" : 4.926320684E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.916576533E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.916576533E9,
        "min" : 4.916576533E9,
        "sum" : 4.916576533E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.116121343E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.116121343E9,
        "min" : 5.116121343E9,
        "sum" : 5.116121343E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.904021153E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.904021153E9,
        "min" : 4.904021153E9,
        "sum" : 4.904021153E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.033634673E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.033634673E9,
        "min" : 5.033634673E9,
        "sum" : 5.033634673E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.965044931E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.965044931E9,
        "min" : 4.965044931E9,
        "sum" : 4.965044931E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.013927357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.013927357E9,
        "min" : 5.013927357E9,
        "sum" : 5.013927357E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.068686425E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.068686425E9,
        "min" : 5.068686425E9,
        "sum" : 5.068686425E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.871494446E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.871494446E9,
        "min" : 4.871494446E9,
        "sum" : 4.871494446E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.90067742E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.90067742E9,
        "min" : 4.90067742E9,
        "sum" : 4.90067742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.928011103E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.928011103E9,
        "min" : 4.928011103E9,
        "sum" : 4.928011103E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.939462129E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.939462129E9,
        "min" : 4.939462129E9,
        "sum" : 4.939462129E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.950489311E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.950489311E9,
        "min" : 4.950489311E9,
        "sum" : 4.950489311E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.798656059E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.798656059E9,
        "min" : 4.798656059E9,
        "sum" : 4.798656059E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.818814477E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.818814477E9,
        "min" : 4.818814477E9,
        "sum" : 4.818814477E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.851644352E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.851644352E9,
        "min" : 4.851644352E9,
        "sum" : 4.851644352E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.874381168E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.874381168E9,
        "min" : 4.874381168E9,
        "sum" : 4.874381168E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.888761711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.888761711E9,
        "min" : 4.888761711E9,
        "sum" : 4.888761711E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.844329988E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.844329988E9,
        "min" : 4.844329988E9,
        "sum" : 4.844329988E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.953261111E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.953261111E9,
        "min" : 4.953261111E9,
        "sum" : 4.953261111E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.919996678E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.919996678E9,
        "min" : 4.919996678E9,
        "sum" : 4.919996678E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.906711183E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.906711183E9,
        "min" : 4.906711183E9,
        "sum" : 4.906711183E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.97180302E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.97180302E9,
        "min" : 4.97180302E9,
        "sum" : 4.97180302E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.782684905E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.782684905E9,
        "min" : 4.782684905E9,
        "sum" : 4.782684905E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.933558538E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.933558538E9,
        "min" : 4.933558538E9,
        "sum" : 4.933558538E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.847199245E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.847199245E9,
        "min" : 4.847199245E9,
        "sum" : 4.847199245E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.809130631E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.809130631E9,
        "min" : 4.809130631E9,
        "sum" : 4.809130631E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.980202192E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.980202192E9,
        "min" : 4.980202192E9,
        "sum" : 4.980202192E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.87180268E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.87180268E9,
        "min" : 4.87180268E9,
        "sum" : 4.87180268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.929182179E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.929182179E9,
        "min" : 4.929182179E9,
        "sum" : 4.929182179E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.888990877E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.888990877E9,
        "min" : 4.888990877E9,
        "sum" : 4.888990877E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.911890368E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.911890368E9,
        "min" : 4.911890368E9,
        "sum" : 4.911890368E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.085536442E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.085536442E9,
        "min" : 5.085536442E9,
        "sum" : 5.085536442E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.882325691E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.882325691E9,
        "min" : 4.882325691E9,
        "sum" : 4.882325691E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.982655028E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.982655028E9,
        "min" : 4.982655028E9,
        "sum" : 4.982655028E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.929512029E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.929512029E9,
        "min" : 4.929512029E9,
        "sum" : 4.929512029E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.892504705E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.892504705E9,
        "min" : 4.892504705E9,
        "sum" : 4.892504705E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.993888026E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.993888026E9,
        "min" : 4.993888026E9,
        "sum" : 4.993888026E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.838663019E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.838663019E9,
        "min" : 4.838663019E9,
        "sum" : 4.838663019E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.934761697E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.934761697E9,
        "min" : 4.934761697E9,
        "sum" : 4.934761697E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.905742715E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.905742715E9,
        "min" : 4.905742715E9,
        "sum" : 4.905742715E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.911308869E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.911308869E9,
        "min" : 4.911308869E9,
        "sum" : 4.911308869E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.978489862E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.978489862E9,
        "min" : 4.978489862E9,
        "sum" : 4.978489862E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 5.099313565E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.099313565E9,
        "min" : 5.099313565E9,
        "sum" : 5.099313565E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.100766027E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.100766027E9,
        "min" : 5.100766027E9,
        "sum" : 5.100766027E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.048980337E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.048980337E9,
        "min" : 5.048980337E9,
        "sum" : 5.048980337E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.091571987E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.091571987E9,
        "min" : 5.091571987E9,
        "sum" : 5.091571987E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.165552156E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.165552156E9,
        "min" : 5.165552156E9,
        "sum" : 5.165552156E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.815709571E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.815709571E9,
        "min" : 4.815709571E9,
        "sum" : 4.815709571E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.879595363E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.879595363E9,
        "min" : 4.879595363E9,
        "sum" : 4.879595363E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.871611645E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.871611645E9,
        "min" : 4.871611645E9,
        "sum" : 4.871611645E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.8174753E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.8174753E9,
        "min" : 4.8174753E9,
        "sum" : 4.8174753E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.012554302E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.012554302E9,
        "min" : 5.012554302E9,
        "sum" : 5.012554302E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 5.38562333E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.38562333E9,
        "min" : 5.38562333E9,
        "sum" : 5.38562333E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.446281026E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.446281026E9,
        "min" : 5.446281026E9,
        "sum" : 5.446281026E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.428561839E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.428561839E9,
        "min" : 5.428561839E9,
        "sum" : 5.428561839E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.448197154E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.448197154E9,
        "min" : 5.448197154E9,
        "sum" : 5.448197154E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.003169792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.003169792E9,
        "min" : 5.003169792E9,
        "sum" : 5.003169792E9,
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
    "parent" : "org.gradoop.model.impl.LogicalGraphExcludeTest#testAssignment",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 364.6207717566395,
      "meanCurrent" : 1947.6275862068967,
      "deviationOld" : 93.07378180021539,
      "deviationCurrent" : 418.15128405241063,
      "vms" : 28,
      "callsOld" : 95868,
      "calls" : 150,
      "tvalue" : -19.88301871000344,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 630.0994354428761,
    "inVMDeviation" : 456.2660858583756,
    "ess" : 1,
    "values" : [ 1798.0, 1753.6, 1859.6, 1840.4, 1619.6, 1930.2, 2075.2, 1830.0, 1993.0, 2277.0, 2234.0, 1712.0, 2295.0, 1909.8, 1940.2, 2087.2, 4129.2, 1692.6, 1589.4, 1865.8, 2063.8, 1878.6, 1450.8, 1994.0, 1684.2, 3853.0, 1825.6, 1651.0, 1811.8, 1965.8 ],
    "valuesPredecessor" : [ 346.7861257908148, 418.93935219943216, 338.4605152747755, 335.9471635450254, 336.644202654071, 304.8636487769798, 350.4040566039052, 337.0824391287884, 534.6375345030693, 329.83168747519767, 311.042042732586, 350.6698561373762, 305.10916813056673, 324.0990297339593, 344.49197366273074, 554.482964329367, 315.20255699640853, 348.4699308977871, 343.61169610820747, 308.6060128171728, 2452.857142663104, 2294.869486583504, 373.29830811810575, 338.79383733474594, 344.9825007760721, 303.71367519026785, 729.9746464931634, 327.92587739883163, 325.17902950053804, 326.13177687596226 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1778.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1778.0,
          "min" : 1778.0,
          "sum" : 1778.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1792.5,
          "variance" : 24420.500000000004,
          "n" : 2,
          "max" : 1903.0,
          "min" : 1682.0,
          "sum" : 3585.0,
          "standardDeviation" : 156.27059864222701
        }, {
          "mean" : 1456.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1456.0,
          "min" : 1456.0,
          "sum" : 1456.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2171.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2171.0,
          "min" : 2171.0,
          "sum" : 2171.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 1852.0,
          "variance" : 88200.0,
          "n" : 2,
          "max" : 2062.0,
          "min" : 1642.0,
          "sum" : 3704.0,
          "standardDeviation" : 296.98484809834997
        }, {
          "mean" : 1546.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1546.0,
          "min" : 1546.0,
          "sum" : 1546.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1707.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1707.0,
          "min" : 1707.0,
          "sum" : 1707.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1811.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1811.0,
          "min" : 1811.0,
          "sum" : 1811.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1745.0,
          "variance" : 4050.0000000000005,
          "n" : 2,
          "max" : 1790.0,
          "min" : 1700.0,
          "sum" : 3490.0,
          "standardDeviation" : 63.63961030678928
        }, {
          "mean" : 1955.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1955.0,
          "min" : 1955.0,
          "sum" : 1955.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1941.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1941.0,
          "min" : 1941.0,
          "sum" : 1941.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1912.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1912.0,
          "min" : 1912.0,
          "sum" : 1912.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1783.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1783.0,
          "min" : 1783.0,
          "sum" : 1783.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1766.5,
          "variance" : 9112.5,
          "n" : 2,
          "max" : 1834.0,
          "min" : 1699.0,
          "sum" : 3533.0,
          "standardDeviation" : 95.45941546018392
        }, {
          "mean" : 2210.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2210.0,
          "min" : 2210.0,
          "sum" : 2210.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1676.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1676.0,
          "min" : 1676.0,
          "sum" : 1676.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 1847.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1847.0,
          "min" : 1847.0,
          "sum" : 1847.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1681.0,
          "variance" : 1568.0,
          "n" : 2,
          "max" : 1709.0,
          "min" : 1653.0,
          "sum" : 3362.0,
          "standardDeviation" : 39.59797974644666
        }, {
          "mean" : 1239.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1239.0,
          "min" : 1239.0,
          "sum" : 1239.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1650.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1650.0,
          "min" : 1650.0,
          "sum" : 1650.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 2139.5,
          "variance" : 6612.500000000001,
          "n" : 2,
          "max" : 2197.0,
          "min" : 2082.0,
          "sum" : 4279.0,
          "standardDeviation" : 81.31727983645297
        }, {
          "mean" : 1668.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1668.0,
          "min" : 1668.0,
          "sum" : 1668.0,
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
          "mean" : 1965.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1965.0,
          "min" : 1965.0,
          "sum" : 1965.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 2274.0,
          "variance" : 22471.999999999996,
          "n" : 2,
          "max" : 2380.0,
          "min" : 2168.0,
          "sum" : 4548.0,
          "standardDeviation" : 149.90663761154806
        }, {
          "mean" : 2284.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2284.0,
          "min" : 2284.0,
          "sum" : 2284.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1896.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1896.0,
          "min" : 1896.0,
          "sum" : 1896.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1648.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1648.0,
          "min" : 1648.0,
          "sum" : 1648.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 2549.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2549.0,
          "min" : 2549.0,
          "sum" : 2549.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1813.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1813.0,
          "min" : 1813.0,
          "sum" : 1813.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1663.0,
          "variance" : 112337.99999999999,
          "n" : 2,
          "max" : 1900.0,
          "min" : 1426.0,
          "sum" : 3326.0,
          "standardDeviation" : 335.1686142824235
        }, {
          "mean" : 1462.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1462.0,
          "min" : 1462.0,
          "sum" : 1462.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1926.5,
          "variance" : 1104.5,
          "n" : 2,
          "max" : 1950.0,
          "min" : 1903.0,
          "sum" : 3853.0,
          "standardDeviation" : 33.23401871576773
        }, {
          "mean" : 2156.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2156.0,
          "min" : 2156.0,
          "sum" : 2156.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1956.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1956.0,
          "min" : 1956.0,
          "sum" : 1956.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2000.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2000.0,
          "min" : 2000.0,
          "sum" : 2000.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 2184.5,
          "variance" : 5512.5,
          "n" : 2,
          "max" : 2237.0,
          "min" : 2132.0,
          "sum" : 4369.0,
          "standardDeviation" : 74.24621202458749
        }, {
          "mean" : 2980.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2980.0,
          "min" : 2980.0,
          "sum" : 2980.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2101.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2101.0,
          "min" : 2101.0,
          "sum" : 2101.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1935.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1935.0,
          "min" : 1935.0,
          "sum" : 1935.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 2061.0,
          "variance" : 15841.999999999998,
          "n" : 2,
          "max" : 2150.0,
          "min" : 1972.0,
          "sum" : 4122.0,
          "standardDeviation" : 125.86500705120545
        }, {
          "mean" : 1766.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1766.0,
          "min" : 1766.0,
          "sum" : 1766.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2642.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2642.0,
          "min" : 2642.0,
          "sum" : 2642.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2640.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2640.0,
          "min" : 2640.0,
          "sum" : 2640.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1817.0,
          "variance" : 88200.0,
          "n" : 2,
          "max" : 2027.0,
          "min" : 1607.0,
          "sum" : 3634.0,
          "standardDeviation" : 296.98484809834997
        }, {
          "mean" : 1580.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1580.0,
          "min" : 1580.0,
          "sum" : 1580.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1745.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1745.0,
          "min" : 1745.0,
          "sum" : 1745.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1601.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1601.0,
          "min" : 1601.0,
          "sum" : 1601.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 2059.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2059.0,
          "min" : 2059.0,
          "sum" : 2059.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2130.0,
          "variance" : 328049.99999999994,
          "n" : 2,
          "max" : 2535.0,
          "min" : 1725.0,
          "sum" : 4260.0,
          "standardDeviation" : 572.7564927611035
        }, {
          "mean" : 3119.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 3119.0,
          "min" : 3119.0,
          "sum" : 3119.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2037.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2037.0,
          "min" : 2037.0,
          "sum" : 2037.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 2020.0,
          "variance" : 145800.0,
          "n" : 2,
          "max" : 2290.0,
          "min" : 1750.0,
          "sum" : 4040.0,
          "standardDeviation" : 381.8376618407357
        }, {
          "mean" : 2061.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2061.0,
          "min" : 2061.0,
          "sum" : 2061.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1555.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1555.0,
          "min" : 1555.0,
          "sum" : 1555.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1893.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1893.0,
          "min" : 1893.0,
          "sum" : 1893.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1896.0,
          "variance" : 120050.00000000001,
          "n" : 2,
          "max" : 2141.0,
          "min" : 1651.0,
          "sum" : 3792.0,
          "standardDeviation" : 346.4823227814083
        }, {
          "mean" : 1852.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1852.0,
          "min" : 1852.0,
          "sum" : 1852.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1835.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1835.0,
          "min" : 1835.0,
          "sum" : 1835.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2222.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2222.0,
          "min" : 2222.0,
          "sum" : 2222.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 2242.0,
          "variance" : 146882.00000000003,
          "n" : 1,
          "max" : 2513.0,
          "min" : 1971.0,
          "sum" : 2242.0,
          "standardDeviation" : 383.2518754031088
        }, {
          "mean" : 2136.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2136.0,
          "min" : 2136.0,
          "sum" : 2136.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2447.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2447.0,
          "min" : 2447.0,
          "sum" : 2447.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1863.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1863.0,
          "min" : 1863.0,
          "sum" : 1863.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1748.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1748.0,
          "min" : 1748.0,
          "sum" : 1748.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 2241.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2241.0,
          "min" : 2241.0,
          "sum" : 2241.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6805.5,
          "variance" : 4.668678449999999E7,
          "n" : 2,
          "max" : 11637.0,
          "min" : 1974.0,
          "sum" : 13611.0,
          "standardDeviation" : 6832.772826605608
        }, {
          "mean" : 2213.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2213.0,
          "min" : 2213.0,
          "sum" : 2213.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2581.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2581.0,
          "min" : 2581.0,
          "sum" : 2581.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 1735.0,
          "variance" : 138338.0,
          "n" : 2,
          "max" : 1998.0,
          "min" : 1472.0,
          "sum" : 3470.0,
          "standardDeviation" : 371.938166904124
        }, {
          "mean" : 1404.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1404.0,
          "min" : 1404.0,
          "sum" : 1404.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1804.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1804.0,
          "min" : 1804.0,
          "sum" : 1804.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1785.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1785.0,
          "min" : 1785.0,
          "sum" : 1785.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1596.5,
          "variance" : 9660.5,
          "n" : 2,
          "max" : 1666.0,
          "min" : 1527.0,
          "sum" : 3193.0,
          "standardDeviation" : 98.2878425849301
        }, {
          "mean" : 1617.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1617.0,
          "min" : 1617.0,
          "sum" : 1617.0,
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
          "mean" : 1468.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1468.0,
          "min" : 1468.0,
          "sum" : 1468.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 2079.5,
          "variance" : 35112.5,
          "n" : 2,
          "max" : 2212.0,
          "min" : 1947.0,
          "sum" : 4159.0,
          "standardDeviation" : 187.3832970144351
        }, {
          "mean" : 1771.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1771.0,
          "min" : 1771.0,
          "sum" : 1771.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1649.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1649.0,
          "min" : 1649.0,
          "sum" : 1649.0,
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
        "20" : [ {
          "mean" : 1986.5,
          "variance" : 168780.50000000003,
          "n" : 2,
          "max" : 2277.0,
          "min" : 1696.0,
          "sum" : 3973.0,
          "standardDeviation" : 410.82903986938413
        }, {
          "mean" : 2326.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2326.0,
          "min" : 2326.0,
          "sum" : 2326.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1994.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1994.0,
          "min" : 1994.0,
          "sum" : 1994.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2026.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2026.0,
          "min" : 2026.0,
          "sum" : 2026.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1950.0,
          "variance" : 126002.00000000001,
          "n" : 2,
          "max" : 2201.0,
          "min" : 1699.0,
          "sum" : 3900.0,
          "standardDeviation" : 354.9676041556469
        }, {
          "mean" : 1819.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1819.0,
          "min" : 1819.0,
          "sum" : 1819.0,
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
          "mean" : 2112.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2112.0,
          "min" : 2112.0,
          "sum" : 2112.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 1293.0,
          "variance" : 2.0000000000000004,
          "n" : 2,
          "max" : 1294.0,
          "min" : 1292.0,
          "sum" : 2586.0,
          "standardDeviation" : 1.4142135623730951
        }, {
          "mean" : 1760.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1760.0,
          "min" : 1760.0,
          "sum" : 1760.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1213.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1213.0,
          "min" : 1213.0,
          "sum" : 1213.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1695.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1695.0,
          "min" : 1695.0,
          "sum" : 1695.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 1976.0,
          "variance" : 34848.0,
          "n" : 1,
          "max" : 2108.0,
          "min" : 1844.0,
          "sum" : 1976.0,
          "standardDeviation" : 186.67619023324855
        }, {
          "mean" : 1715.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1715.0,
          "min" : 1715.0,
          "sum" : 1715.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2112.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2112.0,
          "min" : 2112.0,
          "sum" : 2112.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2216.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2216.0,
          "min" : 2216.0,
          "sum" : 2216.0,
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
        "24" : [ {
          "mean" : 1802.5,
          "variance" : 42924.5,
          "n" : 2,
          "max" : 1949.0,
          "min" : 1656.0,
          "sum" : 3605.0,
          "standardDeviation" : 207.18228688765842
        }, {
          "mean" : 1719.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1719.0,
          "min" : 1719.0,
          "sum" : 1719.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1591.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1591.0,
          "min" : 1591.0,
          "sum" : 1591.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1506.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1506.0,
          "min" : 1506.0,
          "sum" : 1506.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 1596.5,
          "variance" : 20200.500000000004,
          "n" : 2,
          "max" : 1697.0,
          "min" : 1496.0,
          "sum" : 3193.0,
          "standardDeviation" : 142.12846301849606
        }, {
          "mean" : 2434.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2434.0,
          "min" : 2434.0,
          "sum" : 2434.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1520.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1520.0,
          "min" : 1520.0,
          "sum" : 1520.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 12118.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 12118.0,
          "min" : 12118.0,
          "sum" : 12118.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1884.0,
          "variance" : 478242.0,
          "n" : 2,
          "max" : 2373.0,
          "min" : 1395.0,
          "sum" : 3768.0,
          "standardDeviation" : 691.5504320004435
        }, {
          "mean" : 1826.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1826.0,
          "min" : 1826.0,
          "sum" : 1826.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1681.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1681.0,
          "min" : 1681.0,
          "sum" : 1681.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1853.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1853.0,
          "min" : 1853.0,
          "sum" : 1853.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1591.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1591.0,
          "min" : 1591.0,
          "sum" : 1591.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1714.5,
          "variance" : 21012.5,
          "n" : 2,
          "max" : 1817.0,
          "min" : 1612.0,
          "sum" : 3429.0,
          "standardDeviation" : 144.95689014324225
        }, {
          "mean" : 1747.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1747.0,
          "min" : 1747.0,
          "sum" : 1747.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1488.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1488.0,
          "min" : 1488.0,
          "sum" : 1488.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1697.0,
          "variance" : 10657.999999999998,
          "n" : 2,
          "max" : 1770.0,
          "min" : 1624.0,
          "sum" : 3394.0,
          "standardDeviation" : 103.23759005323593
        }, {
          "mean" : 1885.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1885.0,
          "min" : 1885.0,
          "sum" : 1885.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1789.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1789.0,
          "min" : 1789.0,
          "sum" : 1789.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1991.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1991.0,
          "min" : 1991.0,
          "sum" : 1991.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1889.0,
          "variance" : 6498.0,
          "n" : 1,
          "max" : 1946.0,
          "min" : 1832.0,
          "sum" : 1889.0,
          "standardDeviation" : 80.61017305526642
        }, {
          "mean" : 1979.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1979.0,
          "min" : 1979.0,
          "sum" : 1979.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2218.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2218.0,
          "min" : 2218.0,
          "sum" : 2218.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1809.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1809.0,
          "min" : 1809.0,
          "sum" : 1809.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1934.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1934.0,
          "min" : 1934.0,
          "sum" : 1934.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1056.622844827587,
          "variance" : 2504279.5831486946,
          "n" : 459,
          "max" : 18435.0,
          "min" : 72.0,
          "sum" : 484989.88577586244,
          "standardDeviation" : 1582.491574432134
        }, {
          "mean" : 248.52694610778448,
          "variance" : 34592.105878333416,
          "n" : 334,
          "max" : 1029.0,
          "min" : 43.0,
          "sum" : 83008.00000000001,
          "standardDeviation" : 185.98953163641607
        }, {
          "mean" : 230.84591194968553,
          "variance" : 34647.80268039599,
          "n" : 318,
          "max" : 1466.0,
          "min" : 48.0,
          "sum" : 73409.0,
          "standardDeviation" : 186.13920242763476
        }, {
          "mean" : 303.0031055900623,
          "variance" : 953955.4049747498,
          "n" : 322,
          "max" : 14150.0,
          "min" : 21.0,
          "sum" : 97567.00000000007,
          "standardDeviation" : 976.7064067439866
        }, {
          "mean" : 256.54062499999975,
          "variance" : 113832.2240497649,
          "n" : 320,
          "max" : 5255.0,
          "min" : 21.0,
          "sum" : 82092.99999999991,
          "standardDeviation" : 337.3903141018795
        }, {
          "mean" : 228.32608695652166,
          "variance" : 35546.56934850334,
          "n" : 322,
          "max" : 1242.0,
          "min" : 32.0,
          "sum" : 73520.99999999997,
          "standardDeviation" : 188.53797853086084
        }, {
          "mean" : 226.0956790123456,
          "variance" : 33446.84840232388,
          "n" : 324,
          "max" : 1011.0,
          "min" : 27.0,
          "sum" : 73254.99999999999,
          "standardDeviation" : 182.88479543779434
        }, {
          "mean" : 227.4437500000001,
          "variance" : 36475.7021551724,
          "n" : 320,
          "max" : 1007.0,
          "min" : 42.0,
          "sum" : 72782.00000000003,
          "standardDeviation" : 190.98613079271595
        }, {
          "mean" : 149.43437500000016,
          "variance" : 21077.43141653607,
          "n" : 320,
          "max" : 954.0,
          "min" : 26.0,
          "sum" : 47819.00000000005,
          "standardDeviation" : 145.18068541144194
        }, {
          "mean" : 123.81290322580647,
          "variance" : 12537.516715542517,
          "n" : 155,
          "max" : 632.0,
          "min" : 16.0,
          "sum" : 19191.000000000004,
          "standardDeviation" : 111.97105302506768
        } ],
        "1" : [ {
          "mean" : 1454.3539445629006,
          "variance" : 6.039111087018206E7,
          "n" : 464,
          "max" : 166765.0,
          "min" : 78.0,
          "sum" : 674820.2302771859,
          "standardDeviation" : 7771.1717823107
        }, {
          "mean" : 403.5164179104476,
          "variance" : 3416898.9151488044,
          "n" : 335,
          "max" : 33571.0,
          "min" : 41.0,
          "sum" : 135177.99999999994,
          "standardDeviation" : 1848.4855734218768
        }, {
          "mean" : 235.05279503105598,
          "variance" : 28313.134275652577,
          "n" : 322,
          "max" : 995.0,
          "min" : 19.0,
          "sum" : 75687.00000000003,
          "standardDeviation" : 168.26507146657792
        }, {
          "mean" : 255.75937500000015,
          "variance" : 343409.98894004687,
          "n" : 320,
          "max" : 10227.0,
          "min" : 22.0,
          "sum" : 81843.00000000004,
          "standardDeviation" : 586.011935834115
        }, {
          "mean" : 226.77258566978185,
          "variance" : 30330.926246105908,
          "n" : 321,
          "max" : 917.0,
          "min" : 37.0,
          "sum" : 72793.99999999997,
          "standardDeviation" : 174.1577625203824
        }, {
          "mean" : 222.1588785046729,
          "variance" : 31262.99030373832,
          "n" : 321,
          "max" : 974.0,
          "min" : 20.0,
          "sum" : 71313.0,
          "standardDeviation" : 176.81343360655129
        }, {
          "mean" : 250.96573208722756,
          "variance" : 318321.6081970405,
          "n" : 321,
          "max" : 9899.0,
          "min" : 45.0,
          "sum" : 80560.00000000004,
          "standardDeviation" : 564.1999718158806
        }, {
          "mean" : 206.81875,
          "variance" : 29264.619083072077,
          "n" : 320,
          "max" : 1209.0,
          "min" : 27.0,
          "sum" : 66182.0,
          "standardDeviation" : 171.06904770610046
        }, {
          "mean" : 176.1540880503144,
          "variance" : 25932.042428030087,
          "n" : 318,
          "max" : 889.0,
          "min" : 16.0,
          "sum" : 56016.999999999985,
          "standardDeviation" : 161.0342896032708
        }, {
          "mean" : 157.6274509803922,
          "variance" : 22431.722136222914,
          "n" : 153,
          "max" : 763.0,
          "min" : 17.0,
          "sum" : 24117.000000000007,
          "standardDeviation" : 149.77223419653896
        } ],
        "2" : [ {
          "mean" : 1022.4386363636379,
          "variance" : 1720470.265018638,
          "n" : 435,
          "max" : 17227.0,
          "min" : 111.0,
          "sum" : 444760.80681818246,
          "standardDeviation" : 1311.6669794649242
        }, {
          "mean" : 428.90651558073665,
          "variance" : 4921817.033849475,
          "n" : 353,
          "max" : 41567.0,
          "min" : 22.0,
          "sum" : 151404.00000000003,
          "standardDeviation" : 2218.5168545335587
        }, {
          "mean" : 215.80625,
          "variance" : 23700.451371473348,
          "n" : 320,
          "max" : 903.0,
          "min" : 20.0,
          "sum" : 69058.0,
          "standardDeviation" : 153.94950916282048
        }, {
          "mean" : 219.8086419753086,
          "variance" : 26795.046860069546,
          "n" : 324,
          "max" : 887.0,
          "min" : 27.0,
          "sum" : 71217.99999999999,
          "standardDeviation" : 163.69192667956946
        }, {
          "mean" : 221.78125,
          "variance" : 34442.604036050165,
          "n" : 320,
          "max" : 1747.0,
          "min" : 29.0,
          "sum" : 70970.0,
          "standardDeviation" : 185.58718715485227
        }, {
          "mean" : 208.90937500000015,
          "variance" : 24002.233140673972,
          "n" : 320,
          "max" : 798.0,
          "min" : 21.0,
          "sum" : 66851.00000000004,
          "standardDeviation" : 154.92654111117943
        }, {
          "mean" : 202.61585365853674,
          "variance" : 26788.9651301559,
          "n" : 328,
          "max" : 899.0,
          "min" : 19.0,
          "sum" : 66458.00000000004,
          "standardDeviation" : 163.67334886949646
        }, {
          "mean" : 246.77672955974842,
          "variance" : 321729.7638731826,
          "n" : 318,
          "max" : 9826.0,
          "min" : 21.0,
          "sum" : 78475.0,
          "standardDeviation" : 567.2122740854455
        }, {
          "mean" : 132.93827160493836,
          "variance" : 12916.844475021975,
          "n" : 324,
          "max" : 699.0,
          "min" : 16.0,
          "sum" : 43072.00000000003,
          "standardDeviation" : 113.65229639132671
        }, {
          "mean" : 126.31818181818184,
          "variance" : 10789.198752228158,
          "n" : 154,
          "max" : 767.0,
          "min" : 17.0,
          "sum" : 19453.000000000004,
          "standardDeviation" : 103.87106792667609
        } ],
        "3" : [ {
          "mean" : 930.151927437641,
          "variance" : 1504246.883683776,
          "n" : 436,
          "max" : 15657.0,
          "min" : 68.0,
          "sum" : 405546.2403628115,
          "standardDeviation" : 1226.4774289336824
        }, {
          "mean" : 415.4034582132561,
          "variance" : 3212768.9292365587,
          "n" : 347,
          "max" : 33241.0,
          "min" : 37.0,
          "sum" : 144144.99999999985,
          "standardDeviation" : 1792.4198529464459
        }, {
          "mean" : 223.8987341772153,
          "variance" : 26678.07860156721,
          "n" : 316,
          "max" : 1003.0,
          "min" : 42.0,
          "sum" : 70752.00000000003,
          "standardDeviation" : 163.33425421988863
        }, {
          "mean" : 223.67711598746055,
          "variance" : 27110.76648725379,
          "n" : 319,
          "max" : 1027.0,
          "min" : 40.0,
          "sum" : 71352.99999999991,
          "standardDeviation" : 164.65347396047795
        }, {
          "mean" : 221.62499999999994,
          "variance" : 27618.510971786833,
          "n" : 320,
          "max" : 945.0,
          "min" : 23.0,
          "sum" : 70919.99999999999,
          "standardDeviation" : 166.18817939849643
        }, {
          "mean" : 224.89841269841267,
          "variance" : 29089.919583459716,
          "n" : 315,
          "max" : 928.0,
          "min" : 26.0,
          "sum" : 70842.99999999999,
          "standardDeviation" : 170.55767230898678
        }, {
          "mean" : 224.92380952380933,
          "variance" : 25986.554686078252,
          "n" : 315,
          "max" : 846.0,
          "min" : 27.0,
          "sum" : 70850.99999999994,
          "standardDeviation" : 161.20345742594435
        }, {
          "mean" : 201.76825396825404,
          "variance" : 24725.433383884338,
          "n" : 315,
          "max" : 955.0,
          "min" : 26.0,
          "sum" : 63557.00000000002,
          "standardDeviation" : 157.24323000970293
        }, {
          "mean" : 215.3536977491962,
          "variance" : 306609.20352660515,
          "n" : 311,
          "max" : 9445.0,
          "min" : 21.0,
          "sum" : 66975.00000000001,
          "standardDeviation" : 553.7230386453188
        }, {
          "mean" : 190.36500000000007,
          "variance" : 26981.53947236183,
          "n" : 200,
          "max" : 978.0,
          "min" : 20.0,
          "sum" : 38073.000000000015,
          "standardDeviation" : 164.2605840497404
        } ],
        "4" : [ {
          "mean" : 1046.567982456141,
          "variance" : 3644868.2722913073,
          "n" : 451,
          "max" : 23396.0,
          "min" : 107.0,
          "sum" : 472002.16008771956,
          "standardDeviation" : 1909.15381053788
        }, {
          "mean" : 253.80588235294104,
          "variance" : 34348.2984903696,
          "n" : 340,
          "max" : 888.0,
          "min" : 40.0,
          "sum" : 86293.99999999996,
          "standardDeviation" : 185.33293957192174
        }, {
          "mean" : 222.2142857142858,
          "variance" : 28548.810636404083,
          "n" : 322,
          "max" : 878.0,
          "min" : 39.0,
          "sum" : 71553.00000000003,
          "standardDeviation" : 168.9639329454783
        }, {
          "mean" : 282.98170731707296,
          "variance" : 646009.7244349968,
          "n" : 328,
          "max" : 10616.0,
          "min" : 27.0,
          "sum" : 92817.99999999993,
          "standardDeviation" : 803.7473013547211
        }, {
          "mean" : 248.50773993808056,
          "variance" : 290062.3066169259,
          "n" : 323,
          "max" : 9413.0,
          "min" : 40.0,
          "sum" : 80268.00000000001,
          "standardDeviation" : 538.5743278480008
        }, {
          "mean" : 203.81230769230754,
          "variance" : 25827.770218423564,
          "n" : 325,
          "max" : 1147.0,
          "min" : 29.0,
          "sum" : 66238.99999999996,
          "standardDeviation" : 160.71020570711607
        }, {
          "mean" : 201.28086419753066,
          "variance" : 26626.38836333754,
          "n" : 324,
          "max" : 846.0,
          "min" : 28.0,
          "sum" : 65214.999999999935,
          "standardDeviation" : 163.1759429675145
        }, {
          "mean" : 204.82352941176447,
          "variance" : 28807.49360613814,
          "n" : 323,
          "max" : 998.0,
          "min" : 20.0,
          "sum" : 66157.99999999993,
          "standardDeviation" : 169.72770429761354
        }, {
          "mean" : 173.60501567398117,
          "variance" : 23679.686264072083,
          "n" : 319,
          "max" : 900.0,
          "min" : 17.0,
          "sum" : 55379.99999999999,
          "standardDeviation" : 153.88205309285448
        }, {
          "mean" : 144.48251748251752,
          "variance" : 16321.702156997939,
          "n" : 143,
          "max" : 859.0,
          "min" : 18.0,
          "sum" : 20661.000000000007,
          "standardDeviation" : 127.75641728303881
        } ],
        "5" : [ {
          "mean" : 1016.1557017543845,
          "variance" : 3931420.4790003854,
          "n" : 451,
          "max" : 25760.0,
          "min" : 65.0,
          "sum" : 458286.2214912274,
          "standardDeviation" : 1982.780996227366
        }, {
          "mean" : 219.90340909090915,
          "variance" : 20012.526256151254,
          "n" : 352,
          "max" : 815.0,
          "min" : 29.0,
          "sum" : 77406.00000000001,
          "standardDeviation" : 141.465636308438
        }, {
          "mean" : 203.36137071651095,
          "variance" : 17335.31900311526,
          "n" : 321,
          "max" : 849.0,
          "min" : 28.0,
          "sum" : 65279.000000000015,
          "standardDeviation" : 131.66365862725849
        }, {
          "mean" : 197.7920489296636,
          "variance" : 18057.25110223073,
          "n" : 327,
          "max" : 856.0,
          "min" : 17.0,
          "sum" : 64677.99999999999,
          "standardDeviation" : 134.37727152398477
        }, {
          "mean" : 203.1455108359134,
          "variance" : 20168.814164567422,
          "n" : 323,
          "max" : 930.0,
          "min" : 28.0,
          "sum" : 65616.00000000003,
          "standardDeviation" : 142.01695027202712
        }, {
          "mean" : 187.25428571428588,
          "variance" : 19118.963806794934,
          "n" : 350,
          "max" : 1302.0,
          "min" : 41.0,
          "sum" : 65539.00000000006,
          "standardDeviation" : 138.27134123452674
        }, {
          "mean" : 187.39814814814815,
          "variance" : 21523.608789129674,
          "n" : 324,
          "max" : 964.0,
          "min" : 20.0,
          "sum" : 60717.0,
          "standardDeviation" : 146.70926620063804
        }, {
          "mean" : 176.4516129032257,
          "variance" : 14920.342504743827,
          "n" : 341,
          "max" : 679.0,
          "min" : 26.0,
          "sum" : 60169.99999999996,
          "standardDeviation" : 122.14885388223594
        }, {
          "mean" : 131.02445652173915,
          "variance" : 9288.585231311452,
          "n" : 368,
          "max" : 578.0,
          "min" : 30.0,
          "sum" : 48217.00000000001,
          "standardDeviation" : 96.37730661992714
        }, {
          "mean" : 216.3076923076923,
          "variance" : 8932.218623481784,
          "n" : 39,
          "max" : 454.0,
          "min" : 44.0,
          "sum" : 8436.0,
          "standardDeviation" : 94.51041542328434
        } ],
        "6" : [ {
          "mean" : 987.8886414253902,
          "variance" : 2745289.960785874,
          "n" : 444,
          "max" : 17236.0,
          "min" : 105.0,
          "sum" : 438622.55679287325,
          "standardDeviation" : 1656.8916563209177
        }, {
          "mean" : 454.49025069637827,
          "variance" : 2634716.127697983,
          "n" : 359,
          "max" : 20058.0,
          "min" : 39.0,
          "sum" : 163161.9999999998,
          "standardDeviation" : 1623.1808672165844
        }, {
          "mean" : 220.33956386292837,
          "variance" : 26092.168711059177,
          "n" : 321,
          "max" : 878.0,
          "min" : 23.0,
          "sum" : 70729.00000000001,
          "standardDeviation" : 161.53070516486696
        }, {
          "mean" : 246.50308641975303,
          "variance" : 105510.925687039,
          "n" : 324,
          "max" : 5097.0,
          "min" : 44.0,
          "sum" : 79866.99999999999,
          "standardDeviation" : 324.8244536469491
        }, {
          "mean" : 232.82769230769242,
          "variance" : 29476.494909781595,
          "n" : 325,
          "max" : 900.0,
          "min" : 20.0,
          "sum" : 75669.00000000003,
          "standardDeviation" : 171.68720077449453
        }, {
          "mean" : 238.88988095238108,
          "variance" : 164336.24156894098,
          "n" : 336,
          "max" : 7009.0,
          "min" : 39.0,
          "sum" : 80267.00000000004,
          "standardDeviation" : 405.3840667428124
        }, {
          "mean" : 221.2656716417911,
          "variance" : 32182.28549468228,
          "n" : 335,
          "max" : 987.0,
          "min" : 41.0,
          "sum" : 74124.00000000001,
          "standardDeviation" : 179.39421811943183
        }, {
          "mean" : 230.81440443213305,
          "variance" : 189302.39601415826,
          "n" : 361,
          "max" : 7809.0,
          "min" : 21.0,
          "sum" : 83324.00000000003,
          "standardDeviation" : 435.08895184106694
        }, {
          "mean" : 129.30571428571415,
          "variance" : 12394.717159230446,
          "n" : 350,
          "max" : 874.0,
          "min" : 17.0,
          "sum" : 45256.99999999995,
          "standardDeviation" : 111.33156407430215
        }, {
          "mean" : 209.46153846153845,
          "variance" : 9743.518218623482,
          "n" : 39,
          "max" : 459.0,
          "min" : 45.0,
          "sum" : 8169.0,
          "standardDeviation" : 98.70926105803589
        } ],
        "7" : [ {
          "mean" : 1110.288421052631,
          "variance" : 8322897.627608266,
          "n" : 470,
          "max" : 50636.0,
          "min" : 80.0,
          "sum" : 521835.5578947366,
          "standardDeviation" : 2884.943262459119
        }, {
          "mean" : 234.4640718562874,
          "variance" : 34003.54074733417,
          "n" : 334,
          "max" : 938.0,
          "min" : 42.0,
          "sum" : 78311.0,
          "standardDeviation" : 184.4004900951572
        }, {
          "mean" : 223.93538461538458,
          "variance" : 29076.08531813865,
          "n" : 325,
          "max" : 931.0,
          "min" : 38.0,
          "sum" : 72778.99999999999,
          "standardDeviation" : 170.51711151124584
        }, {
          "mean" : 224.0709876543208,
          "variance" : 32494.245719145365,
          "n" : 324,
          "max" : 1231.0,
          "min" : 29.0,
          "sum" : 72598.99999999994,
          "standardDeviation" : 180.26160356311425
        }, {
          "mean" : 208.77881619937688,
          "variance" : 24721.129049844265,
          "n" : 321,
          "max" : 845.0,
          "min" : 40.0,
          "sum" : 67017.99999999997,
          "standardDeviation" : 157.22954254797114
        }, {
          "mean" : 196.3982808022923,
          "variance" : 25856.016203932402,
          "n" : 349,
          "max" : 796.0,
          "min" : 23.0,
          "sum" : 68543.00000000001,
          "standardDeviation" : 160.79806032391187
        }, {
          "mean" : 213.84259259259275,
          "variance" : 30029.612917096652,
          "n" : 324,
          "max" : 995.0,
          "min" : 39.0,
          "sum" : 69285.00000000006,
          "standardDeviation" : 173.29054480004572
        }, {
          "mean" : 212.72136222910217,
          "variance" : 33194.313424225526,
          "n" : 323,
          "max" : 1022.0,
          "min" : 27.0,
          "sum" : 68709.0,
          "standardDeviation" : 182.1930663450877
        }, {
          "mean" : 142.87187499999985,
          "variance" : 13469.585413401237,
          "n" : 320,
          "max" : 889.0,
          "min" : 20.0,
          "sum" : 45718.99999999995,
          "standardDeviation" : 116.05854304359174
        }, {
          "mean" : 120.13084112149532,
          "variance" : 9283.2091341915,
          "n" : 107,
          "max" : 663.0,
          "min" : 18.0,
          "sum" : 12854.0,
          "standardDeviation" : 96.34941169613596
        } ],
        "8" : [ {
          "mean" : 2493.015452538631,
          "variance" : 8.985377290727693E8,
          "n" : 448,
          "max" : 637497.0,
          "min" : 99.0,
          "sum" : 1116870.9227373067,
          "standardDeviation" : 29975.618910587473
        }, {
          "mean" : 253.55649717514112,
          "variance" : 35327.278668715284,
          "n" : 354,
          "max" : 1046.0,
          "min" : 31.0,
          "sum" : 89758.99999999996,
          "standardDeviation" : 187.95552311308992
        }, {
          "mean" : 245.24610591900313,
          "variance" : 308055.0673676011,
          "n" : 321,
          "max" : 9794.0,
          "min" : 23.0,
          "sum" : 78724.0,
          "standardDeviation" : 555.0270870575607
        }, {
          "mean" : 210.91900311526476,
          "variance" : 24841.112169003118,
          "n" : 321,
          "max" : 974.0,
          "min" : 22.0,
          "sum" : 67704.99999999999,
          "standardDeviation" : 157.61063469513445
        }, {
          "mean" : 239.46341463414643,
          "variance" : 321504.85492653097,
          "n" : 328,
          "max" : 10033.0,
          "min" : 44.0,
          "sum" : 78544.00000000003,
          "standardDeviation" : 567.0139812443173
        }, {
          "mean" : 216.25233644859816,
          "variance" : 28199.033002336462,
          "n" : 321,
          "max" : 1001.0,
          "min" : 32.0,
          "sum" : 69417.00000000001,
          "standardDeviation" : 167.9256770191398
        }, {
          "mean" : 199.7816091954023,
          "variance" : 22180.338335155193,
          "n" : 348,
          "max" : 944.0,
          "min" : 29.0,
          "sum" : 69524.0,
          "standardDeviation" : 148.93064941493807
        }, {
          "mean" : 203.24610591900307,
          "variance" : 21166.573617601258,
          "n" : 321,
          "max" : 758.0,
          "min" : 37.0,
          "sum" : 65241.999999999985,
          "standardDeviation" : 145.48736583497984
        }, {
          "mean" : 172.8978328173374,
          "variance" : 21564.210026344645,
          "n" : 323,
          "max" : 943.0,
          "min" : 24.0,
          "sum" : 55845.99999999998,
          "standardDeviation" : 146.84757412482048
        }, {
          "mean" : 150.3181818181818,
          "variance" : 15173.264804003338,
          "n" : 110,
          "max" : 718.0,
          "min" : 22.0,
          "sum" : 16535.0,
          "standardDeviation" : 123.17980680291448
        } ],
        "9" : [ {
          "mean" : 1020.5853658536586,
          "variance" : 1976130.4607635215,
          "n" : 364,
          "max" : 18401.0,
          "min" : 113.0,
          "sum" : 371493.0731707317,
          "standardDeviation" : 1405.7490746088085
        }, {
          "mean" : 409.4000000000005,
          "variance" : 1367981.0983683025,
          "n" : 430,
          "max" : 18793.0,
          "min" : 38.0,
          "sum" : 176042.0000000002,
          "standardDeviation" : 1169.6072410721056
        }, {
          "mean" : 232.006309148265,
          "variance" : 30725.069580321822,
          "n" : 317,
          "max" : 877.0,
          "min" : 27.0,
          "sum" : 73546.0,
          "standardDeviation" : 175.28567990660795
        }, {
          "mean" : 253.94736842105266,
          "variance" : 330082.04380516487,
          "n" : 323,
          "max" : 10029.0,
          "min" : 35.0,
          "sum" : 82025.00000000001,
          "standardDeviation" : 574.527670182355
        }, {
          "mean" : 229.43750000000006,
          "variance" : 29477.456896551757,
          "n" : 320,
          "max" : 976.0,
          "min" : 39.0,
          "sum" : 73420.00000000001,
          "standardDeviation" : 171.69000231973834
        }, {
          "mean" : 238.20504731861197,
          "variance" : 40117.644531406004,
          "n" : 317,
          "max" : 993.0,
          "min" : 33.0,
          "sum" : 75511.0,
          "standardDeviation" : 200.29389539226102
        }, {
          "mean" : 217.53250773993798,
          "variance" : 29987.64723189046,
          "n" : 323,
          "max" : 898.0,
          "min" : 31.0,
          "sum" : 70262.99999999997,
          "standardDeviation" : 173.16941771539933
        }, {
          "mean" : 215.89687500000005,
          "variance" : 28629.095914968653,
          "n" : 320,
          "max" : 920.0,
          "min" : 19.0,
          "sum" : 69087.00000000001,
          "standardDeviation" : 169.20134726109202
        }, {
          "mean" : 134.9939209726443,
          "variance" : 10639.128011713245,
          "n" : 329,
          "max" : 798.0,
          "min" : 25.0,
          "sum" : 44412.99999999998,
          "standardDeviation" : 103.1461487972927
        }, {
          "mean" : 119.88235294117645,
          "variance" : 7701.959752321982,
          "n" : 153,
          "max" : 714.0,
          "min" : 34.0,
          "sum" : 18341.999999999996,
          "standardDeviation" : 87.7608098887082
        } ],
        "10" : [ {
          "mean" : 944.334693877551,
          "variance" : 3344093.004315345,
          "n" : 485,
          "max" : 32635.0,
          "min" : 59.0,
          "sum" : 458002.32653061225,
          "standardDeviation" : 1828.6861415550086
        }, {
          "mean" : 236.259375,
          "variance" : 29829.647247257046,
          "n" : 320,
          "max" : 893.0,
          "min" : 40.0,
          "sum" : 75603.0,
          "standardDeviation" : 172.7126146153113
        }, {
          "mean" : 214.18181818181813,
          "variance" : 27500.042309891356,
          "n" : 319,
          "max" : 913.0,
          "min" : 39.0,
          "sum" : 68323.99999999999,
          "standardDeviation" : 165.83136708684324
        }, {
          "mean" : 219.4875,
          "variance" : 25138.626802507835,
          "n" : 320,
          "max" : 764.0,
          "min" : 48.0,
          "sum" : 70236.0,
          "standardDeviation" : 158.55165342092096
        }, {
          "mean" : 200.0623052959501,
          "variance" : 24201.483605919,
          "n" : 321,
          "max" : 1095.0,
          "min" : 20.0,
          "sum" : 64219.99999999998,
          "standardDeviation" : 155.56826027798536
        }, {
          "mean" : 203.91614906832302,
          "variance" : 22189.098866121007,
          "n" : 322,
          "max" : 725.0,
          "min" : 29.0,
          "sum" : 65661.00000000001,
          "standardDeviation" : 148.96005795555064
        }, {
          "mean" : 222.49689440993797,
          "variance" : 325125.5031055901,
          "n" : 322,
          "max" : 10047.0,
          "min" : 22.0,
          "sum" : 71644.00000000003,
          "standardDeviation" : 570.1977754302362
        }, {
          "mean" : 194.47368421052624,
          "variance" : 22509.30598234716,
          "n" : 323,
          "max" : 845.0,
          "min" : 40.0,
          "sum" : 62814.99999999998,
          "standardDeviation" : 150.0310167343645
        }, {
          "mean" : 131.57680250783704,
          "variance" : 13118.603359555207,
          "n" : 319,
          "max" : 752.0,
          "min" : 26.0,
          "sum" : 41973.000000000015,
          "standardDeviation" : 114.53647174396113
        }, {
          "mean" : 106.25694444444446,
          "variance" : 5369.884566822066,
          "n" : 144,
          "max" : 408.0,
          "min" : 30.0,
          "sum" : 15301.000000000002,
          "standardDeviation" : 73.27949622385559
        } ],
        "11" : [ {
          "mean" : 1044.227956989248,
          "variance" : 1.0196577111716725E7,
          "n" : 460,
          "max" : 65374.0,
          "min" : 85.0,
          "sum" : 480344.86021505407,
          "standardDeviation" : 3193.2079656227725
        }, {
          "mean" : 290.27325581395326,
          "variance" : 345557.78517187596,
          "n" : 344,
          "max" : 10630.0,
          "min" : 43.0,
          "sum" : 99853.99999999991,
          "standardDeviation" : 587.8416327310239
        }, {
          "mean" : 245.5108359133127,
          "variance" : 37564.7723977463,
          "n" : 323,
          "max" : 1149.0,
          "min" : 23.0,
          "sum" : 79300.0,
          "standardDeviation" : 193.81633676691524
        }, {
          "mean" : 244.9722222222224,
          "variance" : 33182.55340557277,
          "n" : 324,
          "max" : 971.0,
          "min" : 40.0,
          "sum" : 79371.00000000006,
          "standardDeviation" : 182.16078997844946
        }, {
          "mean" : 266.2616822429909,
          "variance" : 337212.0688084116,
          "n" : 321,
          "max" : 10137.0,
          "min" : 30.0,
          "sum" : 85470.00000000007,
          "standardDeviation" : 580.6996373413812
        }, {
          "mean" : 240.11214953271022,
          "variance" : 32233.38738317757,
          "n" : 321,
          "max" : 993.0,
          "min" : 35.0,
          "sum" : 77075.99999999999,
          "standardDeviation" : 179.536590652651
        }, {
          "mean" : 255.58409785932727,
          "variance" : 48919.360237143745,
          "n" : 327,
          "max" : 1289.0,
          "min" : 37.0,
          "sum" : 83576.00000000001,
          "standardDeviation" : 221.1772145523669
        }, {
          "mean" : 217.37694704049852,
          "variance" : 31528.3668419003,
          "n" : 321,
          "max" : 865.0,
          "min" : 33.0,
          "sum" : 69778.00000000003,
          "standardDeviation" : 177.56229003338603
        }, {
          "mean" : 137.54385964912288,
          "variance" : 13980.336780367345,
          "n" : 342,
          "max" : 952.0,
          "min" : 18.0,
          "sum" : 47040.00000000002,
          "standardDeviation" : 118.23847419671544
        }, {
          "mean" : 167.53097345132744,
          "variance" : 24938.98340707964,
          "n" : 113,
          "max" : 1052.0,
          "min" : 23.0,
          "sum" : 18931.0,
          "standardDeviation" : 157.92081372345964
        } ],
        "12" : [ {
          "mean" : 977.2197309417037,
          "variance" : 2919867.708913188,
          "n" : 441,
          "max" : 23623.0,
          "min" : 99.0,
          "sum" : 430953.90134529135,
          "standardDeviation" : 1708.762039873659
        }, {
          "mean" : 290.1943661971829,
          "variance" : 2605281.196578342,
          "n" : 355,
          "max" : 30478.0,
          "min" : 42.0,
          "sum" : 103018.99999999993,
          "standardDeviation" : 1614.0883484426563
        }, {
          "mean" : 175.35582822085874,
          "variance" : 15786.057612081173,
          "n" : 326,
          "max" : 792.0,
          "min" : 43.0,
          "sum" : 57165.99999999995,
          "standardDeviation" : 125.64257881817443
        }, {
          "mean" : 171.02187500000005,
          "variance" : 12100.780084247654,
          "n" : 320,
          "max" : 582.0,
          "min" : 20.0,
          "sum" : 54727.000000000015,
          "standardDeviation" : 110.00354578034134
        }, {
          "mean" : 183.14906832298138,
          "variance" : 15431.435653334886,
          "n" : 322,
          "max" : 851.0,
          "min" : 42.0,
          "sum" : 58974.00000000001,
          "standardDeviation" : 124.22332974660954
        }, {
          "mean" : 187.01874999999993,
          "variance" : 17887.64228056426,
          "n" : 320,
          "max" : 655.0,
          "min" : 28.0,
          "sum" : 59845.99999999998,
          "standardDeviation" : 133.74469066308487
        }, {
          "mean" : 207.1615853658535,
          "variance" : 325215.7199876932,
          "n" : 328,
          "max" : 10252.0,
          "min" : 38.0,
          "sum" : 67948.99999999996,
          "standardDeviation" : 570.2768801097351
        }, {
          "mean" : 173.60691823899347,
          "variance" : 17679.526387318216,
          "n" : 318,
          "max" : 721.0,
          "min" : 39.0,
          "sum" : 55206.99999999993,
          "standardDeviation" : 132.96438014490278
        }, {
          "mean" : 197.51234567901258,
          "variance" : 339311.7986087222,
          "n" : 324,
          "max" : 10366.0,
          "min" : 31.0,
          "sum" : 63994.00000000008,
          "standardDeviation" : 582.504762734797
        }, {
          "mean" : 164.03521126760566,
          "variance" : 24468.218609529515,
          "n" : 142,
          "max" : 911.0,
          "min" : 23.0,
          "sum" : 23293.000000000004,
          "standardDeviation" : 156.42320355218888
        } ],
        "13" : [ {
          "mean" : 1049.32,
          "variance" : 2611064.4855614994,
          "n" : 370,
          "max" : 21438.0,
          "min" : 121.0,
          "sum" : 388248.39999999997,
          "standardDeviation" : 1615.878858566291
        }, {
          "mean" : 345.60235294117666,
          "variance" : 1164885.6646170923,
          "n" : 425,
          "max" : 17106.0,
          "min" : 47.0,
          "sum" : 146881.0000000001,
          "standardDeviation" : 1079.2986911032053
        }, {
          "mean" : 241.86111111111097,
          "variance" : 311877.37074303406,
          "n" : 324,
          "max" : 9856.0,
          "min" : 29.0,
          "sum" : 78362.99999999996,
          "standardDeviation" : 558.4598201688588
        }, {
          "mean" : 213.53750000000008,
          "variance" : 24661.622413793113,
          "n" : 320,
          "max" : 935.0,
          "min" : 20.0,
          "sum" : 68332.00000000003,
          "standardDeviation" : 157.04019362504974
        }, {
          "mean" : 196.9415384615385,
          "variance" : 20588.641633428306,
          "n" : 325,
          "max" : 939.0,
          "min" : 39.0,
          "sum" : 64006.000000000015,
          "standardDeviation" : 143.48742674335026
        }, {
          "mean" : 212.15625000000014,
          "variance" : 25056.006857366752,
          "n" : 320,
          "max" : 950.0,
          "min" : 28.0,
          "sum" : 67890.00000000004,
          "standardDeviation" : 158.29089315992488
        }, {
          "mean" : 209.85230769230776,
          "variance" : 21461.589230769234,
          "n" : 325,
          "max" : 839.0,
          "min" : 43.0,
          "sum" : 68202.00000000003,
          "standardDeviation" : 146.4977447975539
        }, {
          "mean" : 209.52795031055902,
          "variance" : 25218.000773978827,
          "n" : 322,
          "max" : 1069.0,
          "min" : 20.0,
          "sum" : 67468.0,
          "standardDeviation" : 158.80176565132652
        }, {
          "mean" : 205.25465838509325,
          "variance" : 41486.17793773336,
          "n" : 322,
          "max" : 2016.0,
          "min" : 25.0,
          "sum" : 66092.00000000003,
          "standardDeviation" : 203.68156013182283
        }, {
          "mean" : 140.94366197183098,
          "variance" : 11715.684746778541,
          "n" : 142,
          "max" : 509.0,
          "min" : 18.0,
          "sum" : 20014.0,
          "standardDeviation" : 108.23901674894567
        } ],
        "14" : [ {
          "mean" : 1064.9304347826092,
          "variance" : 1.1712853101903949E7,
          "n" : 455,
          "max" : 66636.0,
          "min" : 62.0,
          "sum" : 484543.34782608715,
          "standardDeviation" : 3422.404578933348
        }, {
          "mean" : 235.17579250720456,
          "variance" : 30181.706001899056,
          "n" : 347,
          "max" : 1006.0,
          "min" : 40.0,
          "sum" : 81605.99999999999,
          "standardDeviation" : 173.72882893146738
        }, {
          "mean" : 220.90993788819867,
          "variance" : 34397.13516572825,
          "n" : 322,
          "max" : 952.0,
          "min" : 20.0,
          "sum" : 71132.99999999997,
          "standardDeviation" : 185.46464667350554
        }, {
          "mean" : 223.91437308868493,
          "variance" : 35003.77178664564,
          "n" : 327,
          "max" : 1149.0,
          "min" : 20.0,
          "sum" : 73219.99999999997,
          "standardDeviation" : 187.09294959096036
        }, {
          "mean" : 220.13003095975245,
          "variance" : 35326.31844316674,
          "n" : 323,
          "max" : 1010.0,
          "min" : 26.0,
          "sum" : 71102.00000000004,
          "standardDeviation" : 187.95296870006268
        }, {
          "mean" : 240.62643678160927,
          "variance" : 173728.4537083042,
          "n" : 348,
          "max" : 7245.0,
          "min" : 29.0,
          "sum" : 83738.00000000003,
          "standardDeviation" : 416.80745399801117
        }, {
          "mean" : 251.4049079754601,
          "variance" : 343019.86631429894,
          "n" : 326,
          "max" : 10329.0,
          "min" : 28.0,
          "sum" : 81958.0,
          "standardDeviation" : 585.6789788905685
        }, {
          "mean" : 216.14893617021295,
          "variance" : 188170.76175886532,
          "n" : 376,
          "max" : 7891.0,
          "min" : 26.0,
          "sum" : 81272.00000000007,
          "standardDeviation" : 433.786539393358
        }, {
          "mean" : 185.46562500000007,
          "variance" : 93564.14301528213,
          "n" : 320,
          "max" : 5062.0,
          "min" : 19.0,
          "sum" : 59349.00000000002,
          "standardDeviation" : 305.8825640916496
        }, {
          "mean" : 251.44230769230762,
          "variance" : 24958.09464555054,
          "n" : 52,
          "max" : 675.0,
          "min" : 44.0,
          "sum" : 13074.999999999996,
          "standardDeviation" : 157.98131106415892
        } ],
        "15" : [ {
          "mean" : 2264.7926078028754,
          "variance" : 8.56150637407517E8,
          "n" : 482,
          "max" : 645054.0,
          "min" : 78.0,
          "sum" : 1091630.036960986,
          "standardDeviation" : 29260.05190370511
        }, {
          "mean" : 456.90880503144666,
          "variance" : 446419.13045850425,
          "n" : 318,
          "max" : 9935.0,
          "min" : 52.0,
          "sum" : 145297.00000000003,
          "standardDeviation" : 668.1460397686304
        }, {
          "mean" : 372.64506172839526,
          "variance" : 4579176.21728204,
          "n" : 324,
          "max" : 38557.0,
          "min" : 40.0,
          "sum" : 120737.00000000006,
          "standardDeviation" : 2139.9009830555337
        }, {
          "mean" : 224.24610591900313,
          "variance" : 27247.479867601214,
          "n" : 321,
          "max" : 836.0,
          "min" : 46.0,
          "sum" : 71983.0,
          "standardDeviation" : 165.06810675476112
        }, {
          "mean" : 222.6443768996961,
          "variance" : 30255.296927125783,
          "n" : 329,
          "max" : 1042.0,
          "min" : 39.0,
          "sum" : 73250.00000000001,
          "standardDeviation" : 173.9404982375461
        }, {
          "mean" : 215.01562500000009,
          "variance" : 29741.777184561106,
          "n" : 320,
          "max" : 993.0,
          "min" : 22.0,
          "sum" : 68805.00000000003,
          "standardDeviation" : 172.45804470815824
        }, {
          "mean" : 207.52706552706553,
          "variance" : 26800.75855107855,
          "n" : 351,
          "max" : 970.0,
          "min" : 26.0,
          "sum" : 72842.0,
          "standardDeviation" : 163.70937221515007
        }, {
          "mean" : 194.79204892966368,
          "variance" : 26981.95048873381,
          "n" : 327,
          "max" : 998.0,
          "min" : 31.0,
          "sum" : 63697.00000000002,
          "standardDeviation" : 164.26183515574704
        }, {
          "mean" : 123.61497326203204,
          "variance" : 12403.733394503297,
          "n" : 374,
          "max" : 948.0,
          "min" : 19.0,
          "sum" : 46231.999999999985,
          "standardDeviation" : 111.37204943118941
        }, {
          "mean" : 357.03921568627453,
          "variance" : 1758822.7584313725,
          "n" : 51,
          "max" : 9614.0,
          "min" : 34.0,
          "sum" : 18209.0,
          "standardDeviation" : 1326.206152312442
        } ],
        "16" : [ {
          "mean" : 1144.5660792951562,
          "variance" : 4796214.930502474,
          "n" : 449,
          "max" : 31541.0,
          "min" : 67.0,
          "sum" : 513910.16960352514,
          "standardDeviation" : 2190.026239683551
        }, {
          "mean" : 203.26666666666677,
          "variance" : 18344.637984496127,
          "n" : 345,
          "max" : 848.0,
          "min" : 36.0,
          "sum" : 70127.00000000003,
          "standardDeviation" : 135.44237883504604
        }, {
          "mean" : 175.85000000000014,
          "variance" : 13573.469592476495,
          "n" : 320,
          "max" : 545.0,
          "min" : 27.0,
          "sum" : 56272.000000000044,
          "standardDeviation" : 116.50523418489186
        }, {
          "mean" : 181.9718749999999,
          "variance" : 15785.5321218652,
          "n" : 320,
          "max" : 678.0,
          "min" : 20.0,
          "sum" : 58230.99999999997,
          "standardDeviation" : 125.64048759004878
        }, {
          "mean" : 174.23437499999997,
          "variance" : 12673.797560736677,
          "n" : 320,
          "max" : 704.0,
          "min" : 21.0,
          "sum" : 55754.99999999999,
          "standardDeviation" : 112.57796214506939
        }, {
          "mean" : 186.009375,
          "variance" : 19496.078281739818,
          "n" : 320,
          "max" : 880.0,
          "min" : 39.0,
          "sum" : 59523.0,
          "standardDeviation" : 139.62835772771882
        }, {
          "mean" : 165.66874999999993,
          "variance" : 13450.272374608152,
          "n" : 320,
          "max" : 751.0,
          "min" : 37.0,
          "sum" : 53013.99999999998,
          "standardDeviation" : 115.97530933180627
        }, {
          "mean" : 167.941717791411,
          "variance" : 14152.922746578577,
          "n" : 326,
          "max" : 753.0,
          "min" : 29.0,
          "sum" : 54748.999999999985,
          "standardDeviation" : 118.9660571195775
        }, {
          "mean" : 192.74440894568676,
          "variance" : 27056.16523306299,
          "n" : 313,
          "max" : 927.0,
          "min" : 33.0,
          "sum" : 60328.999999999956,
          "standardDeviation" : 164.4875838264487
        }, {
          "mean" : 155.32098765432093,
          "variance" : 14996.741047465688,
          "n" : 162,
          "max" : 518.0,
          "min" : 18.0,
          "sum" : 25161.99999999999,
          "standardDeviation" : 122.46118179842006
        } ],
        "17" : [ {
          "mean" : 1113.6081424936385,
          "variance" : 2142433.279729451,
          "n" : 388,
          "max" : 18131.0,
          "min" : 101.0,
          "sum" : 432079.95928753173,
          "standardDeviation" : 1463.7053254427447
        }, {
          "mean" : 413.58695652173884,
          "variance" : 1391153.4972628707,
          "n" : 414,
          "max" : 19169.0,
          "min" : 43.0,
          "sum" : 171224.99999999988,
          "standardDeviation" : 1179.4717026121782
        }, {
          "mean" : 253.73520249221173,
          "variance" : 335417.46403816197,
          "n" : 321,
          "max" : 10169.0,
          "min" : 27.0,
          "sum" : 81448.99999999997,
          "standardDeviation" : 579.1523668588103
        }, {
          "mean" : 223.33231707317074,
          "variance" : 33220.65681174014,
          "n" : 328,
          "max" : 1290.0,
          "min" : 39.0,
          "sum" : 73253.0,
          "standardDeviation" : 182.26534725981278
        }, {
          "mean" : 230.56832298136658,
          "variance" : 27761.11837038756,
          "n" : 322,
          "max" : 828.0,
          "min" : 39.0,
          "sum" : 74243.00000000004,
          "standardDeviation" : 166.61668094878004
        }, {
          "mean" : 246.80459770114962,
          "variance" : 291590.1980191457,
          "n" : 348,
          "max" : 9747.0,
          "min" : 38.0,
          "sum" : 85888.00000000007,
          "standardDeviation" : 539.9909240155298
        }, {
          "mean" : 224.7098765432099,
          "variance" : 93590.83197645524,
          "n" : 324,
          "max" : 4819.0,
          "min" : 28.0,
          "sum" : 72806.00000000001,
          "standardDeviation" : 305.92618713744537
        }, {
          "mean" : 190.06497175141251,
          "variance" : 24076.06092252048,
          "n" : 354,
          "max" : 959.0,
          "min" : 31.0,
          "sum" : 67283.00000000003,
          "standardDeviation" : 155.1646252292077
        }, {
          "mean" : 132.5918367346939,
          "variance" : 11472.756892230575,
          "n" : 343,
          "max" : 557.0,
          "min" : 16.0,
          "sum" : 45479.000000000015,
          "standardDeviation" : 107.11095598598014
        }, {
          "mean" : 178.98076923076923,
          "variance" : 13120.136877828054,
          "n" : 52,
          "max" : 762.0,
          "min" : 40.0,
          "sum" : 9307.0,
          "standardDeviation" : 114.54316600228952
        } ],
        "18" : [ {
          "mean" : 973.6485260770979,
          "variance" : 1661635.6966398691,
          "n" : 436,
          "max" : 16770.0,
          "min" : 118.0,
          "sum" : 424510.7573696147,
          "standardDeviation" : 1289.0444897829823
        }, {
          "mean" : 472.6022408963584,
          "variance" : 2747801.740219685,
          "n" : 357,
          "max" : 24802.0,
          "min" : 49.0,
          "sum" : 168718.99999999994,
          "standardDeviation" : 1657.649462407443
        }, {
          "mean" : 222.95583596214522,
          "variance" : 22290.694245897066,
          "n" : 317,
          "max" : 800.0,
          "min" : 46.0,
          "sum" : 70677.00000000003,
          "standardDeviation" : 149.30068401014466
        }, {
          "mean" : 222.85937500000017,
          "variance" : 27760.014645376166,
          "n" : 320,
          "max" : 1036.0,
          "min" : 44.0,
          "sum" : 71315.00000000006,
          "standardDeviation" : 166.61336874745726
        }, {
          "mean" : 247.3848484848485,
          "variance" : 328087.6538730774,
          "n" : 330,
          "max" : 10163.0,
          "min" : 29.0,
          "sum" : 81637.0,
          "standardDeviation" : 572.7893625697648
        }, {
          "mean" : 217.77881619937693,
          "variance" : 29004.13529984422,
          "n" : 321,
          "max" : 827.0,
          "min" : 27.0,
          "sum" : 69907.0,
          "standardDeviation" : 170.30600488486664
        }, {
          "mean" : 213.52187500000002,
          "variance" : 30110.75814067399,
          "n" : 320,
          "max" : 859.0,
          "min" : 23.0,
          "sum" : 68327.0,
          "standardDeviation" : 173.52451740510327
        }, {
          "mean" : 248.3074534161491,
          "variance" : 407032.3631218435,
          "n" : 322,
          "max" : 10410.0,
          "min" : 29.0,
          "sum" : 79955.0,
          "standardDeviation" : 637.9908801243506
        }, {
          "mean" : 138.56603773584905,
          "variance" : 15910.328432831386,
          "n" : 318,
          "max" : 1013.0,
          "min" : 26.0,
          "sum" : 44064.0,
          "standardDeviation" : 126.13615038057641
        }, {
          "mean" : 120.15686274509804,
          "variance" : 7122.11996904025,
          "n" : 153,
          "max" : 515.0,
          "min" : 29.0,
          "sum" : 18384.0,
          "standardDeviation" : 84.3926535252936
        } ],
        "19" : [ {
          "mean" : 1060.7154046997396,
          "variance" : 1316149.5287411318,
          "n" : 378,
          "max" : 14106.0,
          "min" : 136.0,
          "sum" : 400950.4229765016,
          "standardDeviation" : 1147.2356029783646
        }, {
          "mean" : 363.99507389162557,
          "variance" : 1074852.4049139454,
          "n" : 406,
          "max" : 20321.0,
          "min" : 38.0,
          "sum" : 147781.99999999997,
          "standardDeviation" : 1036.7508885522816
        }, {
          "mean" : 189.9716981132075,
          "variance" : 16167.838313195629,
          "n" : 318,
          "max" : 641.0,
          "min" : 21.0,
          "sum" : 60410.999999999985,
          "standardDeviation" : 127.15281480641956
        }, {
          "mean" : 184.4330218068536,
          "variance" : 20983.290031152632,
          "n" : 321,
          "max" : 888.0,
          "min" : 19.0,
          "sum" : 59203.0,
          "standardDeviation" : 144.85610111815322
        }, {
          "mean" : 198.21562500000002,
          "variance" : 18870.87185540751,
          "n" : 320,
          "max" : 716.0,
          "min" : 40.0,
          "sum" : 63429.00000000001,
          "standardDeviation" : 137.37129196235838
        }, {
          "mean" : 184.79192546583857,
          "variance" : 17271.25563553337,
          "n" : 322,
          "max" : 694.0,
          "min" : 38.0,
          "sum" : 59503.00000000002,
          "standardDeviation" : 131.42014927526665
        }, {
          "mean" : 184.78437499999993,
          "variance" : 16507.04740399688,
          "n" : 320,
          "max" : 672.0,
          "min" : 38.0,
          "sum" : 59130.99999999998,
          "standardDeviation" : 128.47975484097438
        }, {
          "mean" : 183.8432601880878,
          "variance" : 16183.667179274853,
          "n" : 319,
          "max" : 827.0,
          "min" : 36.0,
          "sum" : 58646.000000000015,
          "standardDeviation" : 127.21504305417207
        }, {
          "mean" : 156.13166144200616,
          "variance" : 15733.592673646013,
          "n" : 319,
          "max" : 878.0,
          "min" : 16.0,
          "sum" : 49805.99999999996,
          "standardDeviation" : 125.43361859424296
        }, {
          "mean" : 159.49425287356317,
          "variance" : 18061.476845392324,
          "n" : 174,
          "max" : 641.0,
          "min" : 21.0,
          "sum" : 27751.999999999993,
          "standardDeviation" : 134.39299403388677
        } ],
        "20" : [ {
          "mean" : 15874.6572668113,
          "variance" : 9.971438763287802E10,
          "n" : 456,
          "max" : 6780482.0,
          "min" : 64.0,
          "sum" : 7238843.713665953,
          "standardDeviation" : 315775.85030030087
        }, {
          "mean" : 245.77011494252878,
          "variance" : 25347.71645301269,
          "n" : 348,
          "max" : 833.0,
          "min" : 36.0,
          "sum" : 85528.00000000001,
          "standardDeviation" : 159.20966193360468
        }, {
          "mean" : 214.99386503067478,
          "variance" : 23453.77226993868,
          "n" : 326,
          "max" : 934.0,
          "min" : 19.0,
          "sum" : 70087.99999999999,
          "standardDeviation" : 153.14624471379858
        }, {
          "mean" : 220.45031055900617,
          "variance" : 30907.662632302003,
          "n" : 322,
          "max" : 1022.0,
          "min" : 39.0,
          "sum" : 70984.99999999999,
          "standardDeviation" : 175.80575255748033
        }, {
          "mean" : 242.3167701863354,
          "variance" : 127659.13298891274,
          "n" : 322,
          "max" : 5972.0,
          "min" : 20.0,
          "sum" : 78026.0,
          "standardDeviation" : 357.29418269671385
        }, {
          "mean" : 239.21183800623058,
          "variance" : 29627.67373442365,
          "n" : 321,
          "max" : 926.0,
          "min" : 34.0,
          "sum" : 76787.00000000001,
          "standardDeviation" : 172.12691170884247
        }, {
          "mean" : 209.9244712990936,
          "variance" : 25241.64579328023,
          "n" : 331,
          "max" : 890.0,
          "min" : 21.0,
          "sum" : 69484.99999999999,
          "standardDeviation" : 158.87619643382777
        }, {
          "mean" : 210.8846153846153,
          "variance" : 26390.357566765568,
          "n" : 338,
          "max" : 1011.0,
          "min" : 23.0,
          "sum" : 71278.99999999997,
          "standardDeviation" : 162.45109284571024
        }, {
          "mean" : 181.66874999999985,
          "variance" : 21731.38209247649,
          "n" : 320,
          "max" : 863.0,
          "min" : 19.0,
          "sum" : 58133.99999999995,
          "standardDeviation" : 147.41567790596932
        }, {
          "mean" : 138.81818181818184,
          "variance" : 10999.673060884066,
          "n" : 110,
          "max" : 532.0,
          "min" : 18.0,
          "sum" : 15270.000000000002,
          "standardDeviation" : 104.87932618435373
        } ],
        "21" : [ {
          "mean" : 15125.824175824175,
          "variance" : 8.524967066936984E10,
          "n" : 450,
          "max" : 6225681.0,
          "min" : 55.0,
          "sum" : 6806620.879120879,
          "standardDeviation" : 291975.4624439695
        }, {
          "mean" : 325.9825581395352,
          "variance" : 1355700.3495491215,
          "n" : 344,
          "max" : 16504.0,
          "min" : 48.0,
          "sum" : 112138.0000000001,
          "standardDeviation" : 1164.345459710786
        }, {
          "mean" : 188.00304878048772,
          "variance" : 14120.6391344074,
          "n" : 328,
          "max" : 700.0,
          "min" : 35.0,
          "sum" : 61664.99999999997,
          "standardDeviation" : 118.83029552436281
        }, {
          "mean" : 210.4844720496894,
          "variance" : 129209.73340299142,
          "n" : 322,
          "max" : 4675.0,
          "min" : 20.0,
          "sum" : 67775.99999999999,
          "standardDeviation" : 359.4575543829778
        }, {
          "mean" : 166.50455927051667,
          "variance" : 13799.592204759434,
          "n" : 329,
          "max" : 650.0,
          "min" : 26.0,
          "sum" : 54779.999999999985,
          "standardDeviation" : 117.4716655400758
        }, {
          "mean" : 187.87227414330218,
          "variance" : 88986.38676012462,
          "n" : 321,
          "max" : 5044.0,
          "min" : 21.0,
          "sum" : 60307.0,
          "standardDeviation" : 298.3058610891255
        }, {
          "mean" : 169.04285714285714,
          "variance" : 13347.892140810478,
          "n" : 350,
          "max" : 986.0,
          "min" : 21.0,
          "sum" : 59165.0,
          "standardDeviation" : 115.53307812401813
        }, {
          "mean" : 171.44891640866874,
          "variance" : 13373.813376151367,
          "n" : 323,
          "max" : 563.0,
          "min" : 20.0,
          "sum" : 55378.0,
          "standardDeviation" : 115.64520472614231
        }, {
          "mean" : 134.14197530864203,
          "variance" : 11047.85594159691,
          "n" : 324,
          "max" : 695.0,
          "min" : 28.0,
          "sum" : 43462.000000000015,
          "standardDeviation" : 105.10878146756774
        }, {
          "mean" : 124.86666666666665,
          "variance" : 10768.020512820514,
          "n" : 105,
          "max" : 556.0,
          "min" : 28.0,
          "sum" : 13110.999999999998,
          "standardDeviation" : 103.76907300742603
        } ],
        "22" : [ {
          "mean" : 1026.0021276595746,
          "variance" : 3909372.2665199833,
          "n" : 465,
          "max" : 32806.0,
          "min" : 81.0,
          "sum" : 477090.9893617022,
          "standardDeviation" : 1977.2132577241089
        }, {
          "mean" : 423.76470588235304,
          "variance" : 130502.88842616694,
          "n" : 340,
          "max" : 2363.0,
          "min" : 51.0,
          "sum" : 144080.00000000003,
          "standardDeviation" : 361.2518351872651
        }, {
          "mean" : 380.3416927899686,
          "variance" : 4114530.7099229153,
          "n" : 319,
          "max" : 33130.0,
          "min" : 24.0,
          "sum" : 121328.99999999999,
          "standardDeviation" : 2028.4306026884221
        }, {
          "mean" : 220.98130841121502,
          "variance" : 31456.718399532714,
          "n" : 321,
          "max" : 999.0,
          "min" : 31.0,
          "sum" : 70935.00000000003,
          "standardDeviation" : 177.3604194839782
        }, {
          "mean" : 253.1192660550457,
          "variance" : 355897.4918669442,
          "n" : 327,
          "max" : 10500.0,
          "min" : 38.0,
          "sum" : 82769.99999999994,
          "standardDeviation" : 596.5714474117448
        }, {
          "mean" : 261.03416149068306,
          "variance" : 340213.49727172474,
          "n" : 322,
          "max" : 10169.0,
          "min" : 21.0,
          "sum" : 84052.99999999994,
          "standardDeviation" : 583.2782331544053
        }, {
          "mean" : 211.62616822429888,
          "variance" : 31696.128563084105,
          "n" : 321,
          "max" : 1116.0,
          "min" : 29.0,
          "sum" : 67931.99999999994,
          "standardDeviation" : 178.03406573766748
        }, {
          "mean" : 229.778735632184,
          "variance" : 113712.4436963797,
          "n" : 348,
          "max" : 5426.0,
          "min" : 19.0,
          "sum" : 79963.00000000003,
          "standardDeviation" : 337.2127573155851
        }, {
          "mean" : 158.7708978328174,
          "variance" : 17608.220641116877,
          "n" : 323,
          "max" : 831.0,
          "min" : 16.0,
          "sum" : 51283.00000000002,
          "standardDeviation" : 132.6959707041509
        }, {
          "mean" : 128.32142857142856,
          "variance" : 10195.445302445301,
          "n" : 112,
          "max" : 648.0,
          "min" : 30.0,
          "sum" : 14371.999999999998,
          "standardDeviation" : 100.97249775283021
        } ],
        "23" : [ {
          "mean" : 1140.0204081632637,
          "variance" : 1.0839923058887353E7,
          "n" : 485,
          "max" : 57857.0,
          "min" : 57.0,
          "sum" : 552909.8979591829,
          "standardDeviation" : 3292.4038420107813
        }, {
          "mean" : 289.1128526645766,
          "variance" : 1840193.3897399483,
          "n" : 319,
          "max" : 24269.0,
          "min" : 48.0,
          "sum" : 92226.99999999994,
          "standardDeviation" : 1356.5372791559944
        }, {
          "mean" : 186.14641744548294,
          "variance" : 15215.662869937698,
          "n" : 321,
          "max" : 760.0,
          "min" : 20.0,
          "sum" : 59753.00000000002,
          "standardDeviation" : 123.35178502939347
        }, {
          "mean" : 219.42024539877292,
          "variance" : 310660.1766965549,
          "n" : 326,
          "max" : 10004.0,
          "min" : 39.0,
          "sum" : 71530.99999999997,
          "standardDeviation" : 557.3689771565645
        }, {
          "mean" : 185.03529411764697,
          "variance" : 16950.94860315807,
          "n" : 340,
          "max" : 1030.0,
          "min" : 29.0,
          "sum" : 62911.99999999997,
          "standardDeviation" : 130.19580870042657
        }, {
          "mean" : 217.53172205438065,
          "variance" : 298583.38308157114,
          "n" : 331,
          "max" : 9786.0,
          "min" : 28.0,
          "sum" : 72003.0,
          "standardDeviation" : 546.4278388603303
        }, {
          "mean" : 174.65740740740742,
          "variance" : 16217.872979016167,
          "n" : 324,
          "max" : 791.0,
          "min" : 26.0,
          "sum" : 56589.00000000001,
          "standardDeviation" : 127.34941295120353
        }, {
          "mean" : 181.27076923076916,
          "variance" : 18821.636334283012,
          "n" : 325,
          "max" : 878.0,
          "min" : 20.0,
          "sum" : 58912.99999999998,
          "standardDeviation" : 137.1919689132094
        }, {
          "mean" : 125.89037433155082,
          "variance" : 8043.197065275046,
          "n" : 374,
          "max" : 589.0,
          "min" : 28.0,
          "sum" : 47083.00000000001,
          "standardDeviation" : 89.68387293864514
        }, {
          "mean" : 176.9807692307692,
          "variance" : 6614.803544494722,
          "n" : 52,
          "max" : 433.0,
          "min" : 29.0,
          "sum" : 9202.999999999998,
          "standardDeviation" : 81.33144253297566
        } ],
        "24" : [ {
          "mean" : 1095.1820040899802,
          "variance" : 2962391.690167287,
          "n" : 484,
          "max" : 22052.0,
          "min" : 57.0,
          "sum" : 530068.0899795505,
          "standardDeviation" : 1721.1599838966995
        }, {
          "mean" : 229.61993769470394,
          "variance" : 25199.9426012461,
          "n" : 321,
          "max" : 782.0,
          "min" : 46.0,
          "sum" : 73707.99999999996,
          "standardDeviation" : 158.74489787469108
        }, {
          "mean" : 252.92812500000002,
          "variance" : 346815.32710619114,
          "n" : 320,
          "max" : 10249.0,
          "min" : 20.0,
          "sum" : 80937.0,
          "standardDeviation" : 588.9102878250567
        }, {
          "mean" : 209.82874617737016,
          "variance" : 23675.9889870734,
          "n" : 327,
          "max" : 852.0,
          "min" : 19.0,
          "sum" : 68614.00000000004,
          "standardDeviation" : 153.87003927689562
        }, {
          "mean" : 203.33540372670814,
          "variance" : 21894.497745786648,
          "n" : 322,
          "max" : 707.0,
          "min" : 19.0,
          "sum" : 65474.00000000002,
          "standardDeviation" : 147.96789430747012
        }, {
          "mean" : 212.22812499999998,
          "variance" : 29220.226792711615,
          "n" : 320,
          "max" : 966.0,
          "min" : 39.0,
          "sum" : 67913.0,
          "standardDeviation" : 170.9392488362799
        }, {
          "mean" : 204.53709198813047,
          "variance" : 21913.820792708775,
          "n" : 337,
          "max" : 773.0,
          "min" : 37.0,
          "sum" : 68928.99999999997,
          "standardDeviation" : 148.03317463564974
        }, {
          "mean" : 197.5209580838324,
          "variance" : 22933.859919800016,
          "n" : 334,
          "max" : 802.0,
          "min" : 31.0,
          "sum" : 65972.00000000001,
          "standardDeviation" : 151.43929450377144
        }, {
          "mean" : 192.77672955974833,
          "variance" : 302138.77333690453,
          "n" : 318,
          "max" : 9662.0,
          "min" : 19.0,
          "sum" : 61302.99999999997,
          "standardDeviation" : 549.6715140307932
        }, {
          "mean" : 172.33035714285725,
          "variance" : 24003.484475546975,
          "n" : 112,
          "max" : 736.0,
          "min" : 17.0,
          "sum" : 19301.00000000001,
          "standardDeviation" : 154.93057953660076
        } ],
        "25" : [ {
          "mean" : 1002.2188183807434,
          "variance" : 3598454.592364389,
          "n" : 452,
          "max" : 28794.0,
          "min" : 90.0,
          "sum" : 453002.905908096,
          "standardDeviation" : 1896.9593017153502
        }, {
          "mean" : 205.92307692307682,
          "variance" : 17128.271208791215,
          "n" : 351,
          "max" : 837.0,
          "min" : 41.0,
          "sum" : 72278.99999999997,
          "standardDeviation" : 130.87502133253395
        }, {
          "mean" : 179.88473520249227,
          "variance" : 16194.93979750779,
          "n" : 321,
          "max" : 760.0,
          "min" : 20.0,
          "sum" : 57743.000000000015,
          "standardDeviation" : 127.25934070828667
        }, {
          "mean" : 187.38437499999992,
          "variance" : 15187.930162617571,
          "n" : 320,
          "max" : 621.0,
          "min" : 22.0,
          "sum" : 59962.99999999997,
          "standardDeviation" : 123.23932068385305
        }, {
          "mean" : 202.56880733944953,
          "variance" : 302827.92699949356,
          "n" : 327,
          "max" : 9910.0,
          "min" : 28.0,
          "sum" : 66240.0,
          "standardDeviation" : 550.2980347043714
        }, {
          "mean" : 185.6884735202493,
          "variance" : 18607.633897975065,
          "n" : 321,
          "max" : 783.0,
          "min" : 22.0,
          "sum" : 59606.00000000002,
          "standardDeviation" : 136.40980132664612
        }, {
          "mean" : 206.4468749999999,
          "variance" : 332288.51754506276,
          "n" : 320,
          "max" : 10275.0,
          "min" : 37.0,
          "sum" : 66062.99999999997,
          "standardDeviation" : 576.4447220203016
        }, {
          "mean" : 170.42367601246113,
          "variance" : 13549.83243769471,
          "n" : 321,
          "max" : 601.0,
          "min" : 36.0,
          "sum" : 54706.00000000002,
          "standardDeviation" : 116.40374752427307
        }, {
          "mean" : 187.4236760124609,
          "variance" : 321316.73868769483,
          "n" : 321,
          "max" : 10084.0,
          "min" : 21.0,
          "sum" : 60162.99999999995,
          "standardDeviation" : 566.8480737267216
        }, {
          "mean" : 147.20422535211267,
          "variance" : 19104.248776346023,
          "n" : 142,
          "max" : 968.0,
          "min" : 31.0,
          "sum" : 20903.0,
          "standardDeviation" : 138.2181202894397
        } ],
        "26" : [ {
          "mean" : 3818.400890868596,
          "variance" : 2.97128408262464E9,
          "n" : 444,
          "max" : 1154649.0,
          "min" : 0.0,
          "sum" : 1695369.9955456567,
          "standardDeviation" : 54509.48617098349
        }, {
          "mean" : 276.1680672268913,
          "variance" : 50149.47167406292,
          "n" : 357,
          "max" : 1465.0,
          "min" : 42.0,
          "sum" : 98592.0000000002,
          "standardDeviation" : 223.94077715785244
        }, {
          "mean" : 249.134375,
          "variance" : 38342.98188675548,
          "n" : 320,
          "max" : 1105.0,
          "min" : 36.0,
          "sum" : 79723.0,
          "standardDeviation" : 195.81364070655414
        }, {
          "mean" : 240.80434782608694,
          "variance" : 35351.154747392684,
          "n" : 322,
          "max" : 885.0,
          "min" : 29.0,
          "sum" : 77539.0,
          "standardDeviation" : 188.01902762059132
        }, {
          "mean" : 272.129230769231,
          "variance" : 340269.5202849003,
          "n" : 325,
          "max" : 10167.0,
          "min" : 26.0,
          "sum" : 88442.00000000007,
          "standardDeviation" : 583.3262554393556
        }, {
          "mean" : 227.68944099378876,
          "variance" : 29452.987364795576,
          "n" : 322,
          "max" : 981.0,
          "min" : 38.0,
          "sum" : 73315.99999999999,
          "standardDeviation" : 171.61872673107553
        }, {
          "mean" : 264.3788819875775,
          "variance" : 484449.29525357514,
          "n" : 322,
          "max" : 10943.0,
          "min" : 18.0,
          "sum" : 85129.99999999994,
          "standardDeviation" : 696.0239185930144
        }, {
          "mean" : 205.69418960244667,
          "variance" : 27505.13318699461,
          "n" : 327,
          "max" : 1048.0,
          "min" : 27.0,
          "sum" : 67262.00000000006,
          "standardDeviation" : 165.84671593671854
        }, {
          "mean" : 147.06906906906892,
          "variance" : 14773.913889793412,
          "n" : 333,
          "max" : 1040.0,
          "min" : 31.0,
          "sum" : 48973.99999999995,
          "standardDeviation" : 121.54799006891645
        }, {
          "mean" : 145.69918699186996,
          "variance" : 15888.949753431958,
          "n" : 123,
          "max" : 656.0,
          "min" : 26.0,
          "sum" : 17921.000000000007,
          "standardDeviation" : 126.05137743567882
        } ],
        "27" : [ {
          "mean" : 1050.9791666666652,
          "variance" : 1702742.5298364635,
          "n" : 475,
          "max" : 15670.0,
          "min" : 74.0,
          "sum" : 499215.10416666593,
          "standardDeviation" : 1304.891769395632
        }, {
          "mean" : 339.2120253164556,
          "variance" : 4340632.580299379,
          "n" : 316,
          "max" : 37118.0,
          "min" : 42.0,
          "sum" : 107190.99999999997,
          "standardDeviation" : 2083.418484198357
        }, {
          "mean" : 192.2179487179487,
          "variance" : 19068.299612498984,
          "n" : 312,
          "max" : 989.0,
          "min" : 38.0,
          "sum" : 59971.99999999999,
          "standardDeviation" : 138.08801400736772
        }, {
          "mean" : 195.43573667711595,
          "variance" : 19900.02651761596,
          "n" : 319,
          "max" : 826.0,
          "min" : 28.0,
          "sum" : 62343.99999999999,
          "standardDeviation" : 141.0674537858253
        }, {
          "mean" : 194.02812499999996,
          "variance" : 17397.44434757055,
          "n" : 320,
          "max" : 793.0,
          "min" : 26.0,
          "sum" : 62088.999999999985,
          "standardDeviation" : 131.8993720514641
        }, {
          "mean" : 186.72641509433964,
          "variance" : 19527.934378906037,
          "n" : 318,
          "max" : 741.0,
          "min" : 21.0,
          "sum" : 59379.00000000001,
          "standardDeviation" : 139.7423857636116
        }, {
          "mean" : 185.60377358490564,
          "variance" : 17852.952919469077,
          "n" : 318,
          "max" : 747.0,
          "min" : 26.0,
          "sum" : 59021.99999999999,
          "standardDeviation" : 133.61494272523967
        }, {
          "mean" : 212.02857142857135,
          "variance" : 317135.6393084624,
          "n" : 315,
          "max" : 9890.0,
          "min" : 20.0,
          "sum" : 66788.99999999997,
          "standardDeviation" : 563.1479728352597
        }, {
          "mean" : 145.40575079872212,
          "variance" : 12166.889325796674,
          "n" : 313,
          "max" : 768.0,
          "min" : 30.0,
          "sum" : 45512.00000000002,
          "standardDeviation" : 110.30362335751566
        }, {
          "mean" : 139.67368421052635,
          "variance" : 11655.681314397112,
          "n" : 190,
          "max" : 550.0,
          "min" : 17.0,
          "sum" : 26538.000000000007,
          "standardDeviation" : 107.96148069750207
        } ],
        "28" : [ {
          "mean" : 883.4359550561791,
          "variance" : 1586844.7824881047,
          "n" : 440,
          "max" : 19028.0,
          "min" : 62.0,
          "sum" : 388711.8202247188,
          "standardDeviation" : 1259.7002748622804
        }, {
          "mean" : 359.7756232686973,
          "variance" : 1115185.485626346,
          "n" : 361,
          "max" : 17548.0,
          "min" : 44.0,
          "sum" : 129878.99999999972,
          "standardDeviation" : 1056.0234304343564
        }, {
          "mean" : 207.52173913043472,
          "variance" : 24779.814167682525,
          "n" : 322,
          "max" : 872.0,
          "min" : 40.0,
          "sum" : 66821.99999999999,
          "standardDeviation" : 157.4160543517799
        }, {
          "mean" : 249.45171339563856,
          "variance" : 365631.39219236776,
          "n" : 321,
          "max" : 10637.0,
          "min" : 30.0,
          "sum" : 80073.99999999999,
          "standardDeviation" : 604.6746167918476
        }, {
          "mean" : 213.93577981651381,
          "variance" : 24966.489728147684,
          "n" : 327,
          "max" : 981.0,
          "min" : 28.0,
          "sum" : 69957.00000000001,
          "standardDeviation" : 158.00787869010736
        }, {
          "mean" : 245.99378881987573,
          "variance" : 296910.9656933884,
          "n" : 322,
          "max" : 9520.0,
          "min" : 39.0,
          "sum" : 79209.99999999999,
          "standardDeviation" : 544.8953713268157
        }, {
          "mean" : 228.79310344827584,
          "variance" : 328899.9051972573,
          "n" : 348,
          "max" : 10468.0,
          "min" : 35.0,
          "sum" : 79620.0,
          "standardDeviation" : 573.4979557045145
        }, {
          "mean" : 215.19076923076938,
          "variance" : 27372.722754036095,
          "n" : 325,
          "max" : 913.0,
          "min" : 38.0,
          "sum" : 69937.00000000004,
          "standardDeviation" : 165.44703912139406
        }, {
          "mean" : 184.36677115987453,
          "variance" : 29638.830464699022,
          "n" : 319,
          "max" : 885.0,
          "min" : 28.0,
          "sum" : 58812.99999999998,
          "standardDeviation" : 172.1593171010475
        }, {
          "mean" : 143.10091743119267,
          "variance" : 14891.980462113492,
          "n" : 109,
          "max" : 579.0,
          "min" : 19.0,
          "sum" : 15598.000000000002,
          "standardDeviation" : 122.03270242895341
        } ],
        "29" : [ {
          "mean" : 999.7418655097617,
          "variance" : 2673977.7266999898,
          "n" : 456,
          "max" : 20626.0,
          "min" : 81.0,
          "sum" : 455882.2906724514,
          "standardDeviation" : 1635.2301754493126
        }, {
          "mean" : 246.29969418960232,
          "variance" : 31868.271871071865,
          "n" : 327,
          "max" : 1705.0,
          "min" : 43.0,
          "sum" : 80539.99999999996,
          "standardDeviation" : 178.51686718927112
        }, {
          "mean" : 205.62135922330094,
          "variance" : 23076.807464380297,
          "n" : 309,
          "max" : 809.0,
          "min" : 28.0,
          "sum" : 63536.99999999999,
          "standardDeviation" : 151.91052453460983
        }, {
          "mean" : 203.8054607508532,
          "variance" : 23299.931202954784,
          "n" : 293,
          "max" : 921.0,
          "min" : 28.0,
          "sum" : 59714.999999999985,
          "standardDeviation" : 152.64314987235682
        }, {
          "mean" : 225.72900763358768,
          "variance" : 30793.677239624438,
          "n" : 262,
          "max" : 849.0,
          "min" : 28.0,
          "sum" : 59140.99999999997,
          "standardDeviation" : 175.48127318783744
        }, {
          "mean" : 216.7247386759582,
          "variance" : 26387.95543480909,
          "n" : 287,
          "max" : 1050.0,
          "min" : 29.0,
          "sum" : 62200.00000000001,
          "standardDeviation" : 162.44369927703903
        }, {
          "mean" : 214.4951456310679,
          "variance" : 24985.932606228725,
          "n" : 309,
          "max" : 907.0,
          "min" : 18.0,
          "sum" : 66278.99999999999,
          "standardDeviation" : 158.06939174371718
        }, {
          "mean" : 228.50491803278675,
          "variance" : 136567.21790336497,
          "n" : 305,
          "max" : 6007.0,
          "min" : 22.0,
          "sum" : 69693.99999999996,
          "standardDeviation" : 369.5500208407043
        }, {
          "mean" : 199.08012820512812,
          "variance" : 24418.97426622146,
          "n" : 312,
          "max" : 975.0,
          "min" : 33.0,
          "sum" : 62112.99999999997,
          "standardDeviation" : 156.26571686144553
        }, {
          "mean" : 187.1826625386996,
          "variance" : 320075.2305059324,
          "n" : 323,
          "max" : 10023.0,
          "min" : 21.0,
          "sum" : 60459.99999999996,
          "standardDeviation" : 565.7519160426524
        }, {
          "mean" : 220.14285714285714,
          "variance" : 11671.20879120879,
          "n" : 14,
          "max" : 409.0,
          "min" : 68.0,
          "sum" : 3082.0,
          "standardDeviation" : 108.03336887836457
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
