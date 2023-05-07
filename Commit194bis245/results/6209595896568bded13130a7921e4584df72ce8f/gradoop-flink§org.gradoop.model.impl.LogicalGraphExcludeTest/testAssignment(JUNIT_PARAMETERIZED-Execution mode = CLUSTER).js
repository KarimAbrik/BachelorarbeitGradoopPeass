if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphExcludeTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Predecessor: e56da032dc5cd886fe871f750231dd077f5ba7d6<br>Comitter: <br>Test Case: org.gradoop.model.impl.LogicalGraphExcludeTest#testAssignment<br>";
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
    "meanOld" : 4.897648342796667E9,
    "meanCurrent" : 4.411893201333333E9,
    "deviationOld" : 7.807959973725674E7,
    "deviationCurrent" : 1.135837224563292E8,
    "vms" : 30,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 19.303127618735317,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 5.917322601142636E7,
  "inVMDeviation" : 4.6444705274017744E7,
  "ess" : 0,
  "values" : [ 4.3673731302E9, 4.4352318966E9, 4.3355339198E9, 4.2504737838E9, 4.3911464376E9, 4.6173343078E9, 4.3888496914E9, 4.6887762594E9, 4.3822857202E9, 4.449434174E9, 4.326029001E9, 4.403155658E9, 4.3623781408E9, 4.2775855406E9, 4.4508218822E9, 4.264859868E9, 4.4751817872E9, 4.4064698578E9, 4.3411208636E9, 4.313562668E9, 4.569178544E9, 4.4563288298E9, 4.4528099594E9, 4.3750672964E9, 4.2776413202E9, 4.4268970256E9, 4.446354017E9, 4.3509319182E9, 4.715350677E9, 4.3586318644E9 ],
  "valuesPredecessor" : [ 4.8891209982E9, 4.9370988968E9, 4.8323358834E9, 4.7486373846E9, 4.9084633786E9, 4.8932739718E9, 4.9290472504E9, 4.7394577982E9, 4.9530480234E9, 4.9687262736E9, 4.8331723144E9, 4.8779090139E9, 4.8885173514E9, 4.836603493E9, 4.9541999534E9, 4.7879293E9, 4.9864196302E9, 4.9960553222E9, 4.8627763406E9, 4.8572046384E9, 4.8652162186E9, 5.0081123392E9, 5.0409281732E9, 4.8683165616E9, 4.7833202704E9, 5.011925631E9, 4.9551977792E9, 4.85838517E9, 4.891446234E9, 4.9666046902E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4.353299268E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.353299268E9,
        "min" : 4.353299268E9,
        "sum" : 4.353299268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.304783958E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.304783958E9,
        "min" : 4.304783958E9,
        "sum" : 4.304783958E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.385475448E9,
        "variance" : 9.477861461143326E15,
        "n" : 2,
        "max" : 4.45431534E9,
        "min" : 4.316635556E9,
        "sum" : 8.770950896E9,
        "standardDeviation" : 9.735430889869912E7
      }, {
        "mean" : 4.407831529E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.407831529E9,
        "min" : 4.407831529E9,
        "sum" : 4.407831529E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.496707014E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.496707014E9,
        "min" : 4.496707014E9,
        "sum" : 4.496707014E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.373334951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.373334951E9,
        "min" : 4.373334951E9,
        "sum" : 4.373334951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.425886687E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.425886687E9,
        "min" : 4.425886687E9,
        "sum" : 4.425886687E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4401154155E9,
        "variance" : 1.094041910309645E14,
        "n" : 2,
        "max" : 4.447511502E9,
        "min" : 4.432719329E9,
        "sum" : 8.880230831E9,
        "standardDeviation" : 1.0459645836784557E7
      } ],
      "2" : [ {
        "mean" : 4.265459947E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.265459947E9,
        "min" : 4.265459947E9,
        "sum" : 4.265459947E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.366311715E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.366311715E9,
        "min" : 4.366311715E9,
        "sum" : 4.366311715E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3417024285E9,
        "variance" : 1.6363145321843042E15,
        "n" : 2,
        "max" : 4.370305877E9,
        "min" : 4.31309898E9,
        "sum" : 8.683404857E9,
        "standardDeviation" : 4.045138479934036E7
      }, {
        "mean" : 4.36249308E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.36249308E9,
        "min" : 4.36249308E9,
        "sum" : 4.36249308E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.273858133E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.273858133E9,
        "min" : 4.273858133E9,
        "sum" : 4.273858133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.192398263E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.192398263E9,
        "min" : 4.192398263E9,
        "sum" : 4.192398263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.292418583E9,
        "variance" : 1.3082117438566686E16,
        "n" : 2,
        "max" : 4.373295395E9,
        "min" : 4.211541771E9,
        "sum" : 8.584837166E9,
        "standardDeviation" : 1.1437708441189907E8
      }, {
        "mean" : 4.201275357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.201275357E9,
        "min" : 4.201275357E9,
        "sum" : 4.201275357E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.470467678E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.470467678E9,
        "min" : 4.470467678E9,
        "sum" : 4.470467678E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.348580195E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.348580195E9,
        "min" : 4.348580195E9,
        "sum" : 4.348580195E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.457960416E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.457960416E9,
        "min" : 4.457960416E9,
        "sum" : 4.457960416E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3393619495E9,
        "variance" : 1.6648252606445E12,
        "n" : 2,
        "max" : 4.340274316E9,
        "min" : 4.338449583E9,
        "sum" : 8.678723899E9,
        "standardDeviation" : 1290281.0781548724
      } ],
      "5" : [ {
        "mean" : 4.523433862E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.523433862E9,
        "min" : 4.523433862E9,
        "sum" : 4.523433862E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.675556869E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.675556869E9,
        "min" : 4.675556869E9,
        "sum" : 4.675556869E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.590672145E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.590672145E9,
        "min" : 4.590672145E9,
        "sum" : 4.590672145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.646006426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.646006426E9,
        "min" : 4.646006426E9,
        "sum" : 4.646006426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.651002237E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.651002237E9,
        "min" : 4.651002237E9,
        "sum" : 4.651002237E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.397119546E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.397119546E9,
        "min" : 4.397119546E9,
        "sum" : 4.397119546E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.363578159E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.363578159E9,
        "min" : 4.363578159E9,
        "sum" : 4.363578159E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.469006433E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.469006433E9,
        "min" : 4.469006433E9,
        "sum" : 4.469006433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.3572721595E9,
        "variance" : 1.5733335438079602E15,
        "n" : 2,
        "max" : 4.38531974E9,
        "min" : 4.329224579E9,
        "sum" : 8.714544319E9,
        "standardDeviation" : 3.966526873485115E7
      } ],
      "7" : [ {
        "mean" : 4.767928291E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.767928291E9,
        "min" : 4.767928291E9,
        "sum" : 4.767928291E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.644840083E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.644840083E9,
        "min" : 4.644840083E9,
        "sum" : 4.644840083E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.65410814E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.65410814E9,
        "min" : 4.65410814E9,
        "sum" : 4.65410814E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.798001502E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.798001502E9,
        "min" : 4.798001502E9,
        "sum" : 4.798001502E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.579003281E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.579003281E9,
        "min" : 4.579003281E9,
        "sum" : 4.579003281E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.320851658E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.320851658E9,
        "min" : 4.320851658E9,
        "sum" : 4.320851658E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.420468357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.420468357E9,
        "min" : 4.420468357E9,
        "sum" : 4.420468357E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.416144363E9,
        "variance" : 1.66338002095232E14,
        "n" : 2,
        "max" : 4.425264067E9,
        "min" : 4.407024659E9,
        "sum" : 8.832288726E9,
        "standardDeviation" : 1.2897209081628164E7
      }, {
        "mean" : 4.33781986E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.33781986E9,
        "min" : 4.33781986E9,
        "sum" : 4.33781986E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.44025049E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.44025049E9,
        "min" : 4.44025049E9,
        "sum" : 4.44025049E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.499150983E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.499150983E9,
        "min" : 4.499150983E9,
        "sum" : 4.499150983E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.497101542E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.497101542E9,
        "min" : 4.497101542E9,
        "sum" : 4.497101542E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.456841143E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.456841143E9,
        "min" : 4.456841143E9,
        "sum" : 4.456841143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.353826712E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.353826712E9,
        "min" : 4.353826712E9,
        "sum" : 4.353826712E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.342247772E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.342247772E9,
        "min" : 4.342247772E9,
        "sum" : 4.342247772E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.303991788E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.303991788E9,
        "min" : 4.303991788E9,
        "sum" : 4.303991788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.317132595E9,
        "variance" : 1.6521275265605E14,
        "n" : 2,
        "max" : 4.3262214E9,
        "min" : 4.30804379E9,
        "sum" : 8.63426519E9,
        "standardDeviation" : 1.2853511296764398E7
      }, {
        "mean" : 4.349640255E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.349640255E9,
        "min" : 4.349640255E9,
        "sum" : 4.349640255E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.386596903E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.386596903E9,
        "min" : 4.386596903E9,
        "sum" : 4.386596903E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.433935292E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.433935292E9,
        "min" : 4.433935292E9,
        "sum" : 4.433935292E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.393833414E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.393833414E9,
        "min" : 4.393833414E9,
        "sum" : 4.393833414E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4007063405E9,
        "variance" : 9.723278010463142E15,
        "n" : 2,
        "max" : 4.470431795E9,
        "min" : 4.330980886E9,
        "sum" : 8.801412681E9,
        "standardDeviation" : 9.860668339652815E7
      } ],
      "12" : [ {
        "mean" : 4.419883209E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.419883209E9,
        "min" : 4.419883209E9,
        "sum" : 4.419883209E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.319239598E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.319239598E9,
        "min" : 4.319239598E9,
        "sum" : 4.319239598E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.342760584E9,
        "variance" : 6.737846664100658E15,
        "n" : 2,
        "max" : 4.400803011E9,
        "min" : 4.284718157E9,
        "sum" : 8.685521168E9,
        "standardDeviation" : 8.208438745645031E7
      }, {
        "mean" : 4.387246729E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.387246729E9,
        "min" : 4.387246729E9,
        "sum" : 4.387246729E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.269506555E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.269506555E9,
        "min" : 4.269506555E9,
        "sum" : 4.269506555E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.258254953E9,
        "variance" : 1.6290593220364416E16,
        "n" : 2,
        "max" : 4.34850625E9,
        "min" : 4.168003656E9,
        "sum" : 8.516509906E9,
        "standardDeviation" : 1.2763460823916222E8
      }, {
        "mean" : 4.328018606E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.328018606E9,
        "min" : 4.328018606E9,
        "sum" : 4.328018606E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.273892636E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.273892636E9,
        "min" : 4.273892636E9,
        "sum" : 4.273892636E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.430982151E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.430982151E9,
        "min" : 4.430982151E9,
        "sum" : 4.430982151E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.531684463E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.531684463E9,
        "min" : 4.531684463E9,
        "sum" : 4.531684463E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.35960635E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.35960635E9,
        "min" : 4.35960635E9,
        "sum" : 4.35960635E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4659182235E9,
        "variance" : 5.165818961481111E15,
        "n" : 2,
        "max" : 4.516740556E9,
        "min" : 4.415095891E9,
        "sum" : 8.931836447E9,
        "standardDeviation" : 7.187363189293492E7
      } ],
      "15" : [ {
        "mean" : 4.261522486E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.261522486E9,
        "min" : 4.261522486E9,
        "sum" : 4.261522486E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2761651035E9,
        "variance" : 2.7648412522836125E15,
        "n" : 2,
        "max" : 4.313346021E9,
        "min" : 4.238984186E9,
        "sum" : 8.552330207E9,
        "standardDeviation" : 5.258175778997515E7
      }, {
        "mean" : 4.285991319E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.285991319E9,
        "min" : 4.285991319E9,
        "sum" : 4.285991319E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.224455328E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.224455328E9,
        "min" : 4.224455328E9,
        "sum" : 4.224455328E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.440408222E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.440408222E9,
        "min" : 4.440408222E9,
        "sum" : 4.440408222E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.521056037E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.521056037E9,
        "min" : 4.521056037E9,
        "sum" : 4.521056037E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.426245847E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.426245847E9,
        "min" : 4.426245847E9,
        "sum" : 4.426245847E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.50805527E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.50805527E9,
        "min" : 4.50805527E9,
        "sum" : 4.50805527E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.48014356E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.48014356E9,
        "min" : 4.48014356E9,
        "sum" : 4.48014356E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.425963567E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.425963567E9,
        "min" : 4.425963567E9,
        "sum" : 4.425963567E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.368759033E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.368759033E9,
        "min" : 4.368759033E9,
        "sum" : 4.368759033E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.396014247E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.396014247E9,
        "min" : 4.396014247E9,
        "sum" : 4.396014247E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.420806221E9,
        "variance" : 7.123695325202177E15,
        "n" : 2,
        "max" : 4.480487438E9,
        "min" : 4.361125004E9,
        "sum" : 8.841612442E9,
        "standardDeviation" : 8.440198650033171E7
      } ],
      "18" : [ {
        "mean" : 4.332023562E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.332023562E9,
        "min" : 4.332023562E9,
        "sum" : 4.332023562E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.293392316E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.293392316E9,
        "min" : 4.293392316E9,
        "sum" : 4.293392316E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.36979742E9,
        "variance" : 2.5177289220607995E15,
        "n" : 2,
        "max" : 4.4052779E9,
        "min" : 4.33431694E9,
        "sum" : 8.73959484E9,
        "standardDeviation" : 5.017697601550735E7
      }, {
        "mean" : 4.3405936E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.3405936E9,
        "min" : 4.3405936E9,
        "sum" : 4.3405936E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.298216821E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.298216821E9,
        "min" : 4.298216821E9,
        "sum" : 4.298216821E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.271134759E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.271134759E9,
        "min" : 4.271134759E9,
        "sum" : 4.271134759E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.312194338E9,
        "variance" : 6.889665127496833E15,
        "n" : 2,
        "max" : 4.370887034E9,
        "min" : 4.253501642E9,
        "sum" : 8.624388676E9,
        "standardDeviation" : 8.300400669544111E7
      }, {
        "mean" : 4.374073084E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.374073084E9,
        "min" : 4.374073084E9,
        "sum" : 4.374073084E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.600879782E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.600879782E9,
        "min" : 4.600879782E9,
        "sum" : 4.600879782E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.449681239E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.449681239E9,
        "min" : 4.449681239E9,
        "sum" : 4.449681239E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.643871545E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.643871545E9,
        "min" : 4.643871545E9,
        "sum" : 4.643871545E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.547885509E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.547885509E9,
        "min" : 4.547885509E9,
        "sum" : 4.547885509E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.603574645E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.603574645E9,
        "min" : 4.603574645E9,
        "sum" : 4.603574645E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.517907713E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.517907713E9,
        "min" : 4.517907713E9,
        "sum" : 4.517907713E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.445994018E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.445994018E9,
        "min" : 4.445994018E9,
        "sum" : 4.445994018E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.473860803E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.473860803E9,
        "min" : 4.473860803E9,
        "sum" : 4.473860803E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.4219408075E9,
        "variance" : 1.78038632314205E13,
        "n" : 2,
        "max" : 4.424924418E9,
        "min" : 4.418957197E9,
        "sum" : 8.843881615E9,
        "standardDeviation" : 4219462.4339387715
      } ],
      "22" : [ {
        "mean" : 4.450186829E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.450186829E9,
        "min" : 4.450186829E9,
        "sum" : 4.450186829E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.481601756E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.481601756E9,
        "min" : 4.481601756E9,
        "sum" : 4.481601756E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.39155641E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.39155641E9,
        "min" : 4.39155641E9,
        "sum" : 4.39155641E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.470352401E9,
        "variance" : 7.699942022472979E14,
        "n" : 2,
        "max" : 4.489973744E9,
        "min" : 4.450731058E9,
        "sum" : 8.940704802E9,
        "standardDeviation" : 2.774876938257439E7
      } ],
      "23" : [ {
        "mean" : 4.351606847E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.351606847E9,
        "min" : 4.351606847E9,
        "sum" : 4.351606847E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.371960096E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.371960096E9,
        "min" : 4.371960096E9,
        "sum" : 4.371960096E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.365925519E9,
        "variance" : 1.1804726688771198E14,
        "n" : 2,
        "max" : 4.373608203E9,
        "min" : 4.358242835E9,
        "sum" : 8.731851038E9,
        "standardDeviation" : 1.0864955908226779E7
      }, {
        "mean" : 4.419918501E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.419918501E9,
        "min" : 4.419918501E9,
        "sum" : 4.419918501E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.242084173E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.242084173E9,
        "min" : 4.242084173E9,
        "sum" : 4.242084173E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.28798999E9,
        "variance" : 3.306944336684562E15,
        "n" : 2,
        "max" : 4.328652899E9,
        "min" : 4.247327081E9,
        "sum" : 8.57597998E9,
        "standardDeviation" : 5.750603739334299E7
      }, {
        "mean" : 4.30327868E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.30327868E9,
        "min" : 4.30327868E9,
        "sum" : 4.30327868E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.266863768E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.266863768E9,
        "min" : 4.266863768E9,
        "sum" : 4.266863768E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.416778237E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.416778237E9,
        "min" : 4.416778237E9,
        "sum" : 4.416778237E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.346410933E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.346410933E9,
        "min" : 4.346410933E9,
        "sum" : 4.346410933E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.520307682E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.520307682E9,
        "min" : 4.520307682E9,
        "sum" : 4.520307682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.425494138E9,
        "variance" : 2.6729869036752203E14,
        "n" : 2,
        "max" : 4.437054819E9,
        "min" : 4.413933457E9,
        "sum" : 8.850988276E9,
        "standardDeviation" : 1.6349271860468956E7
      } ],
      "26" : [ {
        "mean" : 4.436482314E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.436482314E9,
        "min" : 4.436482314E9,
        "sum" : 4.436482314E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.435204644E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.435204644E9,
        "min" : 4.435204644E9,
        "sum" : 4.435204644E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.495447355E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.495447355E9,
        "min" : 4.495447355E9,
        "sum" : 4.495447355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.416117957E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.416117957E9,
        "min" : 4.416117957E9,
        "sum" : 4.416117957E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.448517815E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.448517815E9,
        "min" : 4.448517815E9,
        "sum" : 4.448517815E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.316559582E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.316559582E9,
        "min" : 4.316559582E9,
        "sum" : 4.316559582E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.302173997E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.302173997E9,
        "min" : 4.302173997E9,
        "sum" : 4.302173997E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.420467891E9,
        "variance" : 3.846098597774792E15,
        "n" : 2,
        "max" : 4.464320477E9,
        "min" : 4.376615305E9,
        "sum" : 8.840935782E9,
        "standardDeviation" : 6.2016921866332516E7
      }, {
        "mean" : 4.29499023E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.29499023E9,
        "min" : 4.29499023E9,
        "sum" : 4.29499023E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.674566291E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.674566291E9,
        "min" : 4.674566291E9,
        "sum" : 4.674566291E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.720960171E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.720960171E9,
        "min" : 4.720960171E9,
        "sum" : 4.720960171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.674750281E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.674750281E9,
        "min" : 4.674750281E9,
        "sum" : 4.674750281E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.739026728E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.739026728E9,
        "min" : 4.739026728E9,
        "sum" : 4.739026728E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.767449914E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.767449914E9,
        "min" : 4.767449914E9,
        "sum" : 4.767449914E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.325433255E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.325433255E9,
        "min" : 4.325433255E9,
        "sum" : 4.325433255E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.365256213E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.365256213E9,
        "min" : 4.365256213E9,
        "sum" : 4.365256213E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.400223923E9,
        "variance" : 5.201232580305289E15,
        "n" : 2,
        "max" : 4.451220161E9,
        "min" : 4.349227685E9,
        "sum" : 8.800447846E9,
        "standardDeviation" : 7.21195714096062E7
      }, {
        "mean" : 4.302022008E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.302022008E9,
        "min" : 4.302022008E9,
        "sum" : 4.302022008E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.869493974E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.869493974E9,
        "min" : 4.869493974E9,
        "sum" : 4.869493974E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.888770468E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.888770468E9,
        "min" : 4.888770468E9,
        "sum" : 4.888770468E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.82916564E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.82916564E9,
        "min" : 4.82916564E9,
        "sum" : 4.82916564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.859338225E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.859338225E9,
        "min" : 4.859338225E9,
        "sum" : 4.859338225E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.998836684E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.998836684E9,
        "min" : 4.998836684E9,
        "sum" : 4.998836684E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.850679115E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.850679115E9,
        "min" : 4.850679115E9,
        "sum" : 4.850679115E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.886764377E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.886764377E9,
        "min" : 4.886764377E9,
        "sum" : 4.886764377E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.998999648E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.998999648E9,
        "min" : 4.998999648E9,
        "sum" : 4.998999648E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.941559841E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.941559841E9,
        "min" : 4.941559841E9,
        "sum" : 4.941559841E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.007491503E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.007491503E9,
        "min" : 5.007491503E9,
        "sum" : 5.007491503E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.769881525E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.769881525E9,
        "min" : 4.769881525E9,
        "sum" : 4.769881525E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.840653058E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.840653058E9,
        "min" : 4.840653058E9,
        "sum" : 4.840653058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.766335443E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.766335443E9,
        "min" : 4.766335443E9,
        "sum" : 4.766335443E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.863260328E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.863260328E9,
        "min" : 4.863260328E9,
        "sum" : 4.863260328E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.921549063E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.921549063E9,
        "min" : 4.921549063E9,
        "sum" : 4.921549063E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.687684667E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.687684667E9,
        "min" : 4.687684667E9,
        "sum" : 4.687684667E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.752702396E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.752702396E9,
        "min" : 4.752702396E9,
        "sum" : 4.752702396E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.760567742E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.760567742E9,
        "min" : 4.760567742E9,
        "sum" : 4.760567742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.709793006E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.709793006E9,
        "min" : 4.709793006E9,
        "sum" : 4.709793006E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.832439112E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.832439112E9,
        "min" : 4.832439112E9,
        "sum" : 4.832439112E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.904240884E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.904240884E9,
        "min" : 4.904240884E9,
        "sum" : 4.904240884E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.981819034E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.981819034E9,
        "min" : 4.981819034E9,
        "sum" : 4.981819034E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.90362417E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.90362417E9,
        "min" : 4.90362417E9,
        "sum" : 4.90362417E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.861642753E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.861642753E9,
        "min" : 4.861642753E9,
        "sum" : 4.861642753E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.890990052E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.890990052E9,
        "min" : 4.890990052E9,
        "sum" : 4.890990052E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.843614885E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.843614885E9,
        "min" : 4.843614885E9,
        "sum" : 4.843614885E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.92980496E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.92980496E9,
        "min" : 4.92980496E9,
        "sum" : 4.92980496E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.98642234E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.98642234E9,
        "min" : 4.98642234E9,
        "sum" : 4.98642234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.80019242E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.80019242E9,
        "min" : 4.80019242E9,
        "sum" : 4.80019242E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.906335254E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.906335254E9,
        "min" : 4.906335254E9,
        "sum" : 4.906335254E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.891354562E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.891354562E9,
        "min" : 4.891354562E9,
        "sum" : 4.891354562E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.915344933E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.915344933E9,
        "min" : 4.915344933E9,
        "sum" : 4.915344933E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.024874216E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.024874216E9,
        "min" : 5.024874216E9,
        "sum" : 5.024874216E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.882126837E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.882126837E9,
        "min" : 4.882126837E9,
        "sum" : 4.882126837E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.931535704E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.931535704E9,
        "min" : 4.931535704E9,
        "sum" : 4.931535704E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.743287208E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.743287208E9,
        "min" : 4.743287208E9,
        "sum" : 4.743287208E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.737531578E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.737531578E9,
        "min" : 4.737531578E9,
        "sum" : 4.737531578E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.792908348E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.792908348E9,
        "min" : 4.792908348E9,
        "sum" : 4.792908348E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.727542546E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.727542546E9,
        "min" : 4.727542546E9,
        "sum" : 4.727542546E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.696019311E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.696019311E9,
        "min" : 4.696019311E9,
        "sum" : 4.696019311E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.975317126E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.975317126E9,
        "min" : 4.975317126E9,
        "sum" : 4.975317126E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.940798601E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.940798601E9,
        "min" : 4.940798601E9,
        "sum" : 4.940798601E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.869254325E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.869254325E9,
        "min" : 4.869254325E9,
        "sum" : 4.869254325E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.001885366E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.001885366E9,
        "min" : 5.001885366E9,
        "sum" : 5.001885366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.977984699E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.977984699E9,
        "min" : 4.977984699E9,
        "sum" : 4.977984699E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.92888698E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.92888698E9,
        "min" : 4.92888698E9,
        "sum" : 4.92888698E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.016002056E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.016002056E9,
        "min" : 5.016002056E9,
        "sum" : 5.016002056E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.933306363E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.933306363E9,
        "min" : 4.933306363E9,
        "sum" : 4.933306363E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.964684134E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.964684134E9,
        "min" : 4.964684134E9,
        "sum" : 4.964684134E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.000751835E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.000751835E9,
        "min" : 5.000751835E9,
        "sum" : 5.000751835E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.815718598E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.815718598E9,
        "min" : 4.815718598E9,
        "sum" : 4.815718598E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.880400628E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.880400628E9,
        "min" : 4.880400628E9,
        "sum" : 4.880400628E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.758798381E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.758798381E9,
        "min" : 4.758798381E9,
        "sum" : 4.758798381E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.838690058E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.838690058E9,
        "min" : 4.838690058E9,
        "sum" : 4.838690058E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.872253907E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.872253907E9,
        "min" : 4.872253907E9,
        "sum" : 4.872253907E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.8564360855E9,
        "variance" : 2.3265386950302453E14,
        "n" : 1,
        "max" : 4.867221582E9,
        "min" : 4.845650589E9,
        "sum" : 4.8564360855E9,
        "standardDeviation" : 1.525299542722755E7
      }, {
        "mean" : 4.903264737E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.903264737E9,
        "min" : 4.903264737E9,
        "sum" : 4.903264737E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.882409708E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.882409708E9,
        "min" : 4.882409708E9,
        "sum" : 4.882409708E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.780040039E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.780040039E9,
        "min" : 4.780040039E9,
        "sum" : 4.780040039E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.9673945E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.9673945E9,
        "min" : 4.9673945E9,
        "sum" : 4.9673945E9,
        "standardDeviation" : 0.0
      } ],
      "12" : [ {
        "mean" : 4.781937635E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.781937635E9,
        "min" : 4.781937635E9,
        "sum" : 4.781937635E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.960327202E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.960327202E9,
        "min" : 4.960327202E9,
        "sum" : 4.960327202E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.765230453E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.765230453E9,
        "min" : 4.765230453E9,
        "sum" : 4.765230453E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.913938526E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.913938526E9,
        "min" : 4.913938526E9,
        "sum" : 4.913938526E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.021152941E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.021152941E9,
        "min" : 5.021152941E9,
        "sum" : 5.021152941E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.753179587E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.753179587E9,
        "min" : 4.753179587E9,
        "sum" : 4.753179587E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.781978919E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.781978919E9,
        "min" : 4.781978919E9,
        "sum" : 4.781978919E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.837303645E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.837303645E9,
        "min" : 4.837303645E9,
        "sum" : 4.837303645E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.854680193E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.854680193E9,
        "min" : 4.854680193E9,
        "sum" : 4.854680193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.955875121E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.955875121E9,
        "min" : 4.955875121E9,
        "sum" : 4.955875121E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.904355541E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.904355541E9,
        "min" : 4.904355541E9,
        "sum" : 4.904355541E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.952777047E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.952777047E9,
        "min" : 4.952777047E9,
        "sum" : 4.952777047E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.924305084E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.924305084E9,
        "min" : 4.924305084E9,
        "sum" : 4.924305084E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.940726847E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.940726847E9,
        "min" : 4.940726847E9,
        "sum" : 4.940726847E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.048835248E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.048835248E9,
        "min" : 5.048835248E9,
        "sum" : 5.048835248E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.788130438E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.788130438E9,
        "min" : 4.788130438E9,
        "sum" : 4.788130438E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.751506925E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.751506925E9,
        "min" : 4.751506925E9,
        "sum" : 4.751506925E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.841851301E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.841851301E9,
        "min" : 4.841851301E9,
        "sum" : 4.841851301E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.799045766E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.799045766E9,
        "min" : 4.799045766E9,
        "sum" : 4.799045766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.75911207E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.75911207E9,
        "min" : 4.75911207E9,
        "sum" : 4.75911207E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.888192026E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.888192026E9,
        "min" : 4.888192026E9,
        "sum" : 4.888192026E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.052255702E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.052255702E9,
        "min" : 5.052255702E9,
        "sum" : 5.052255702E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.969623818E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.969623818E9,
        "min" : 4.969623818E9,
        "sum" : 4.969623818E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.956987609E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.956987609E9,
        "min" : 4.956987609E9,
        "sum" : 4.956987609E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.065038996E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.065038996E9,
        "min" : 5.065038996E9,
        "sum" : 5.065038996E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 5.013736879E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.013736879E9,
        "min" : 5.013736879E9,
        "sum" : 5.013736879E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.969082414E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.969082414E9,
        "min" : 4.969082414E9,
        "sum" : 4.969082414E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.086553874E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.086553874E9,
        "min" : 5.086553874E9,
        "sum" : 5.086553874E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.915858951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.915858951E9,
        "min" : 4.915858951E9,
        "sum" : 4.915858951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.995044493E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.995044493E9,
        "min" : 4.995044493E9,
        "sum" : 4.995044493E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.823271555E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.823271555E9,
        "min" : 4.823271555E9,
        "sum" : 4.823271555E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.905149436E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.905149436E9,
        "min" : 4.905149436E9,
        "sum" : 4.905149436E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.844040357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.844040357E9,
        "min" : 4.844040357E9,
        "sum" : 4.844040357E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.855594649E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.855594649E9,
        "min" : 4.855594649E9,
        "sum" : 4.855594649E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.885825706E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.885825706E9,
        "min" : 4.885825706E9,
        "sum" : 4.885825706E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.831927401E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.831927401E9,
        "min" : 4.831927401E9,
        "sum" : 4.831927401E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.895948443E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.895948443E9,
        "min" : 4.895948443E9,
        "sum" : 4.895948443E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.881766679E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.881766679E9,
        "min" : 4.881766679E9,
        "sum" : 4.881766679E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.752352746E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.752352746E9,
        "min" : 4.752352746E9,
        "sum" : 4.752352746E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.924027923E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.924027923E9,
        "min" : 4.924027923E9,
        "sum" : 4.924027923E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.81620219E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.81620219E9,
        "min" : 4.81620219E9,
        "sum" : 4.81620219E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.888296711E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.888296711E9,
        "min" : 4.888296711E9,
        "sum" : 4.888296711E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.888853519E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.888853519E9,
        "min" : 4.888853519E9,
        "sum" : 4.888853519E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.802783055E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.802783055E9,
        "min" : 4.802783055E9,
        "sum" : 4.802783055E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.929945618E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.929945618E9,
        "min" : 4.929945618E9,
        "sum" : 4.929945618E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.952509968E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.952509968E9,
        "min" : 4.952509968E9,
        "sum" : 4.952509968E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.014628119E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.014628119E9,
        "min" : 5.014628119E9,
        "sum" : 5.014628119E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.040388935E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.040388935E9,
        "min" : 5.040388935E9,
        "sum" : 5.040388935E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.969497882E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.969497882E9,
        "min" : 4.969497882E9,
        "sum" : 4.969497882E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.063536792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.063536792E9,
        "min" : 5.063536792E9,
        "sum" : 5.063536792E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 5.038852098E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.038852098E9,
        "min" : 5.038852098E9,
        "sum" : 5.038852098E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.024751417E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.024751417E9,
        "min" : 5.024751417E9,
        "sum" : 5.024751417E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.013824374E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.013824374E9,
        "min" : 5.013824374E9,
        "sum" : 5.013824374E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.013053026E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.013053026E9,
        "min" : 5.013053026E9,
        "sum" : 5.013053026E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.114159951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.114159951E9,
        "min" : 5.114159951E9,
        "sum" : 5.114159951E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.751644054E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.751644054E9,
        "min" : 4.751644054E9,
        "sum" : 4.751644054E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.883547063E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.883547063E9,
        "min" : 4.883547063E9,
        "sum" : 4.883547063E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.851517735E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.851517735E9,
        "min" : 4.851517735E9,
        "sum" : 4.851517735E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.885622732E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.885622732E9,
        "min" : 4.885622732E9,
        "sum" : 4.885622732E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.969251224E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.969251224E9,
        "min" : 4.969251224E9,
        "sum" : 4.969251224E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.711831731E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.711831731E9,
        "min" : 4.711831731E9,
        "sum" : 4.711831731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.824608103E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.824608103E9,
        "min" : 4.824608103E9,
        "sum" : 4.824608103E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.76365221E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.76365221E9,
        "min" : 4.76365221E9,
        "sum" : 4.76365221E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.732650986E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.732650986E9,
        "min" : 4.732650986E9,
        "sum" : 4.732650986E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.883858322E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.883858322E9,
        "min" : 4.883858322E9,
        "sum" : 4.883858322E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.9800112E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.9800112E9,
        "min" : 4.9800112E9,
        "sum" : 4.9800112E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.019442837E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.019442837E9,
        "min" : 5.019442837E9,
        "sum" : 5.019442837E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.019696621E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.019696621E9,
        "min" : 5.019696621E9,
        "sum" : 5.019696621E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.92978263E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.92978263E9,
        "min" : 4.92978263E9,
        "sum" : 4.92978263E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.110694867E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.110694867E9,
        "min" : 5.110694867E9,
        "sum" : 5.110694867E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.934447123E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.934447123E9,
        "min" : 4.934447123E9,
        "sum" : 4.934447123E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.945704248E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.945704248E9,
        "min" : 4.945704248E9,
        "sum" : 4.945704248E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.921504631E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.921504631E9,
        "min" : 4.921504631E9,
        "sum" : 4.921504631E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.93504788E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.93504788E9,
        "min" : 4.93504788E9,
        "sum" : 4.93504788E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.039285014E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.039285014E9,
        "min" : 5.039285014E9,
        "sum" : 5.039285014E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.747487682E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.747487682E9,
        "min" : 4.747487682E9,
        "sum" : 4.747487682E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.887889382E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.887889382E9,
        "min" : 4.887889382E9,
        "sum" : 4.887889382E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.857476397E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.857476397E9,
        "min" : 4.857476397E9,
        "sum" : 4.857476397E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.817081661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.817081661E9,
        "min" : 4.817081661E9,
        "sum" : 4.817081661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.981990728E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.981990728E9,
        "min" : 4.981990728E9,
        "sum" : 4.981990728E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.908360336E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.908360336E9,
        "min" : 4.908360336E9,
        "sum" : 4.908360336E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.916126947E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.916126947E9,
        "min" : 4.916126947E9,
        "sum" : 4.916126947E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.918373958E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.918373958E9,
        "min" : 4.918373958E9,
        "sum" : 4.918373958E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.83594141E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.83594141E9,
        "min" : 4.83594141E9,
        "sum" : 4.83594141E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.878428519E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.878428519E9,
        "min" : 4.878428519E9,
        "sum" : 4.878428519E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.937870846E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.937870846E9,
        "min" : 4.937870846E9,
        "sum" : 4.937870846E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.990582855E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.990582855E9,
        "min" : 4.990582855E9,
        "sum" : 4.990582855E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.990264095E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.990264095E9,
        "min" : 4.990264095E9,
        "sum" : 4.990264095E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.883223819E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.883223819E9,
        "min" : 4.883223819E9,
        "sum" : 4.883223819E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 5.031081836E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 5.031081836E9,
        "min" : 5.031081836E9,
        "sum" : 5.031081836E9,
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
      "meanOld" : 428.34390491048964,
      "meanCurrent" : 1993.7724137931032,
      "deviationOld" : 215.49670132214516,
      "deviationCurrent" : 330.2931251139463,
      "vms" : 28,
      "callsOld" : 95859,
      "calls" : 150,
      "tvalue" : -21.26270572631445,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 951.7060672397971,
    "inVMDeviation" : 446.92296791372064,
    "ess" : 1,
    "values" : [ 1835.2, 2065.8, 1801.6, 2015.0, 1955.8, 1686.4, 2279.8, 1696.6, 2443.6, 1848.8, 1774.8, 1812.6, 2040.6, 1800.4, 2015.6, 3463.4, 1880.0, 1843.8, 2077.6, 1832.2, 3761.0, 1722.2, 2072.6, 1989.4, 2008.7, 2028.6, 1904.6, 2141.7, 1980.2, 1801.8 ],
    "valuesPredecessor" : [ 1324.7298265276888, 507.9977193714365, 358.80678501145195, 345.24959949937437, 353.0788005102653, 743.1357871674488, 719.8808052145289, 312.9376073583883, 346.0411998162541, 362.1195757053828, 3326.080679032497, 381.6518477382709, 350.5150433638254, 340.6473787675166, 294.15909209428435, 333.02201716043396, 350.1579647465425, 360.07705383797946, 356.686585589185, 374.3801217333498, 340.02860535270014, 356.4643959647184, 349.6788269948024, 339.5583654836691, 328.23042736323373, 351.4176581089543, 737.8608240138884, 3331.2086129710865, 359.0330317772263, 316.0823912209082 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1667.5,
          "variance" : 33540.5,
          "n" : 2,
          "max" : 1797.0,
          "min" : 1538.0,
          "sum" : 3335.0,
          "standardDeviation" : 183.1406563273158
        }, {
          "mean" : 1570.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1570.0,
          "min" : 1570.0,
          "sum" : 1570.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2054.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2054.0,
          "min" : 2054.0,
          "sum" : 2054.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2217.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2217.0,
          "min" : 2217.0,
          "sum" : 2217.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 2402.0,
          "variance" : 24200.0,
          "n" : 2,
          "max" : 2512.0,
          "min" : 2292.0,
          "sum" : 4804.0,
          "standardDeviation" : 155.56349186104046
        }, {
          "mean" : 1614.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1614.0,
          "min" : 1614.0,
          "sum" : 1614.0,
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
          "mean" : 2402.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2402.0,
          "min" : 2402.0,
          "sum" : 2402.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1610.0,
          "variance" : 2738.0000000000005,
          "n" : 1,
          "max" : 1647.0,
          "min" : 1573.0,
          "sum" : 1610.0,
          "standardDeviation" : 52.32590180780452
        }, {
          "mean" : 2213.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2213.0,
          "min" : 2213.0,
          "sum" : 2213.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2023.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2023.0,
          "min" : 2023.0,
          "sum" : 2023.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1522.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1522.0,
          "min" : 1522.0,
          "sum" : 1522.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1640.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1640.0,
          "min" : 1640.0,
          "sum" : 1640.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 2129.0,
          "variance" : 1058.0,
          "n" : 2,
          "max" : 2152.0,
          "min" : 2106.0,
          "sum" : 4258.0,
          "standardDeviation" : 32.526911934581186
        }, {
          "mean" : 1916.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1916.0,
          "min" : 1916.0,
          "sum" : 1916.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2368.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2368.0,
          "min" : 2368.0,
          "sum" : 2368.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1533.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1533.0,
          "min" : 1533.0,
          "sum" : 1533.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 1977.0,
          "variance" : 61250.00000000001,
          "n" : 2,
          "max" : 2152.0,
          "min" : 1802.0,
          "sum" : 3954.0,
          "standardDeviation" : 247.48737341529164
        }, {
          "mean" : 2384.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2384.0,
          "min" : 2384.0,
          "sum" : 2384.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1836.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1836.0,
          "min" : 1836.0,
          "sum" : 1836.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1605.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1605.0,
          "min" : 1605.0,
          "sum" : 1605.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 2085.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2085.0,
          "min" : 2085.0,
          "sum" : 2085.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1531.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1531.0,
          "min" : 1531.0,
          "sum" : 1531.0,
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
          "mean" : 1638.0,
          "variance" : 5000.0,
          "n" : 2,
          "max" : 1688.0,
          "min" : 1588.0,
          "sum" : 3276.0,
          "standardDeviation" : 70.71067811865476
        } ],
        "6" : [ {
          "mean" : 2144.5,
          "variance" : 257044.5,
          "n" : 2,
          "max" : 2503.0,
          "min" : 1786.0,
          "sum" : 4289.0,
          "standardDeviation" : 506.9955621107546
        }, {
          "mean" : 1981.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1981.0,
          "min" : 1981.0,
          "sum" : 1981.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2823.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2823.0,
          "min" : 2823.0,
          "sum" : 2823.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2306.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2306.0,
          "min" : 2306.0,
          "sum" : 2306.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 2027.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2027.0,
          "min" : 2027.0,
          "sum" : 2027.0,
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
          "mean" : 1504.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1504.0,
          "min" : 1504.0,
          "sum" : 1504.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1620.0,
          "variance" : 1568.0,
          "n" : 2,
          "max" : 1648.0,
          "min" : 1592.0,
          "sum" : 3240.0,
          "standardDeviation" : 39.59797974644666
        } ],
        "8" : [ {
          "mean" : 2382.5,
          "variance" : 125500.50000000001,
          "n" : 2,
          "max" : 2633.0,
          "min" : 2132.0,
          "sum" : 4765.0,
          "standardDeviation" : 354.26049737446033
        }, {
          "mean" : 2750.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2750.0,
          "min" : 2750.0,
          "sum" : 2750.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2360.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2360.0,
          "min" : 2360.0,
          "sum" : 2360.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2343.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2343.0,
          "min" : 2343.0,
          "sum" : 2343.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 1644.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1644.0,
          "min" : 1644.0,
          "sum" : 1644.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2108.0,
          "variance" : 28800.000000000004,
          "n" : 2,
          "max" : 2228.0,
          "min" : 1988.0,
          "sum" : 4216.0,
          "standardDeviation" : 169.7056274847714
        }, {
          "mean" : 1490.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1490.0,
          "min" : 1490.0,
          "sum" : 1490.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1894.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1894.0,
          "min" : 1894.0,
          "sum" : 1894.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1785.5,
          "variance" : 84.5,
          "n" : 2,
          "max" : 1792.0,
          "min" : 1779.0,
          "sum" : 3571.0,
          "standardDeviation" : 9.192388155425117
        }, {
          "mean" : 1748.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1748.0,
          "min" : 1748.0,
          "sum" : 1748.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1574.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1574.0,
          "min" : 1574.0,
          "sum" : 1574.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1981.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1981.0,
          "min" : 1981.0,
          "sum" : 1981.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1740.0,
          "variance" : 135200.0,
          "n" : 2,
          "max" : 2000.0,
          "min" : 1480.0,
          "sum" : 3480.0,
          "standardDeviation" : 367.6955262170047
        }, {
          "mean" : 2049.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2049.0,
          "min" : 2049.0,
          "sum" : 2049.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1923.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1923.0,
          "min" : 1923.0,
          "sum" : 1923.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1611.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1611.0,
          "min" : 1611.0,
          "sum" : 1611.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 2253.0,
          "variance" : 18818.0,
          "n" : 2,
          "max" : 2350.0,
          "min" : 2156.0,
          "sum" : 4506.0,
          "standardDeviation" : 137.17871555019022
        }, {
          "mean" : 2210.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2210.0,
          "min" : 2210.0,
          "sum" : 2210.0,
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
          "mean" : 1896.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1896.0,
          "min" : 1896.0,
          "sum" : 1896.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 1767.0,
          "variance" : 124002.0,
          "n" : 1,
          "max" : 2016.0,
          "min" : 1518.0,
          "sum" : 1767.0,
          "standardDeviation" : 352.13917703090067
        }, {
          "mean" : 1725.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1725.0,
          "min" : 1725.0,
          "sum" : 1725.0,
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
          "mean" : 2085.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2085.0,
          "min" : 2085.0,
          "sum" : 2085.0,
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
        "14" : [ {
          "mean" : 2025.5,
          "variance" : 9384.5,
          "n" : 2,
          "max" : 2094.0,
          "min" : 1957.0,
          "sum" : 4051.0,
          "standardDeviation" : 96.87362902255701
        }, {
          "mean" : 1993.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1993.0,
          "min" : 1993.0,
          "sum" : 1993.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1912.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1912.0,
          "min" : 1912.0,
          "sum" : 1912.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2122.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2122.0,
          "min" : 2122.0,
          "sum" : 2122.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 1702.0,
          "variance" : 189728.0,
          "n" : 1,
          "max" : 2010.0,
          "min" : 1394.0,
          "sum" : 1702.0,
          "standardDeviation" : 435.57777721091327
        }, {
          "mean" : 11338.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 11338.0,
          "min" : 11338.0,
          "sum" : 11338.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1316.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1316.0,
          "min" : 1316.0,
          "sum" : 1316.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1272.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1272.0,
          "min" : 1272.0,
          "sum" : 1272.0,
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
        "16" : [ {
          "mean" : 1876.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1876.0,
          "min" : 1876.0,
          "sum" : 1876.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1782.5,
          "variance" : 155124.5,
          "n" : 2,
          "max" : 2061.0,
          "min" : 1504.0,
          "sum" : 3565.0,
          "standardDeviation" : 393.85847712090697
        }, {
          "mean" : 1783.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1783.0,
          "min" : 1783.0,
          "sum" : 1783.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2176.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2176.0,
          "min" : 2176.0,
          "sum" : 2176.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 1846.0,
          "variance" : 212552.00000000003,
          "n" : 2,
          "max" : 2172.0,
          "min" : 1520.0,
          "sum" : 3692.0,
          "standardDeviation" : 461.033621333629
        }, {
          "mean" : 1618.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1618.0,
          "min" : 1618.0,
          "sum" : 1618.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2190.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2190.0,
          "min" : 2190.0,
          "sum" : 2190.0,
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
        "18" : [ {
          "mean" : 1775.5,
          "variance" : 20200.500000000004,
          "n" : 2,
          "max" : 1876.0,
          "min" : 1675.0,
          "sum" : 3551.0,
          "standardDeviation" : 142.12846301849606
        }, {
          "mean" : 2553.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2553.0,
          "min" : 2553.0,
          "sum" : 2553.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2417.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2417.0,
          "min" : 2417.0,
          "sum" : 2417.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1867.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1867.0,
          "min" : 1867.0,
          "sum" : 1867.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 1806.0,
          "variance" : 182407.99999999997,
          "n" : 1,
          "max" : 2108.0,
          "min" : 1504.0,
          "sum" : 1806.0,
          "standardDeviation" : 427.0924958366747
        }, {
          "mean" : 1867.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1867.0,
          "min" : 1867.0,
          "sum" : 1867.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2013.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2013.0,
          "min" : 2013.0,
          "sum" : 2013.0,
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
          "mean" : 1598.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1598.0,
          "min" : 1598.0,
          "sum" : 1598.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 2028.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2028.0,
          "min" : 2028.0,
          "sum" : 2028.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1660.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1660.0,
          "min" : 1660.0,
          "sum" : 1660.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 6553.5,
          "variance" : 4.838328450000001E7,
          "n" : 2,
          "max" : 11472.0,
          "min" : 1635.0,
          "sum" : 13107.0,
          "standardDeviation" : 6955.809406532068
        }, {
          "mean" : 2010.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2010.0,
          "min" : 2010.0,
          "sum" : 2010.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1886.5,
          "variance" : 3960.4999999999995,
          "n" : 2,
          "max" : 1931.0,
          "min" : 1842.0,
          "sum" : 3773.0,
          "standardDeviation" : 62.932503525602726
        }, {
          "mean" : 1359.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1359.0,
          "min" : 1359.0,
          "sum" : 1359.0,
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
          "mean" : 1734.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1734.0,
          "min" : 1734.0,
          "sum" : 1734.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 2241.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2241.0,
          "min" : 2241.0,
          "sum" : 2241.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2098.5,
          "variance" : 51520.50000000001,
          "n" : 2,
          "max" : 2259.0,
          "min" : 1938.0,
          "sum" : 4197.0,
          "standardDeviation" : 226.98127676088177
        }, {
          "mean" : 2071.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2071.0,
          "min" : 2071.0,
          "sum" : 2071.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1854.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1854.0,
          "min" : 1854.0,
          "sum" : 1854.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 1897.5,
          "variance" : 1512.5,
          "n" : 2,
          "max" : 1925.0,
          "min" : 1870.0,
          "sum" : 3795.0,
          "standardDeviation" : 38.890872965260115
        }, {
          "mean" : 2317.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2317.0,
          "min" : 2317.0,
          "sum" : 2317.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1486.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1486.0,
          "min" : 1486.0,
          "sum" : 1486.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2349.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2349.0,
          "min" : 2349.0,
          "sum" : 2349.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 2201.5,
          "variance" : 67344.5,
          "n" : 1,
          "max" : 2385.0,
          "min" : 2018.0,
          "sum" : 2201.5,
          "standardDeviation" : 259.50818869546293
        }, {
          "mean" : 1993.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1993.0,
          "min" : 1993.0,
          "sum" : 1993.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2135.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2135.0,
          "min" : 2135.0,
          "sum" : 2135.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1884.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1884.0,
          "min" : 1884.0,
          "sum" : 1884.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1830.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1830.0,
          "min" : 1830.0,
          "sum" : 1830.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 2084.5,
          "variance" : 202884.5,
          "n" : 2,
          "max" : 2403.0,
          "min" : 1766.0,
          "sum" : 4169.0,
          "standardDeviation" : 450.4270196158308
        }, {
          "mean" : 1907.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1907.0,
          "min" : 1907.0,
          "sum" : 1907.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2126.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2126.0,
          "min" : 2126.0,
          "sum" : 2126.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1941.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1941.0,
          "min" : 1941.0,
          "sum" : 1941.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1940.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1940.0,
          "min" : 1940.0,
          "sum" : 1940.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1785.5,
          "variance" : 5512.5,
          "n" : 2,
          "max" : 1838.0,
          "min" : 1733.0,
          "sum" : 3571.0,
          "standardDeviation" : 74.24621202458749
        }, {
          "mean" : 2059.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2059.0,
          "min" : 2059.0,
          "sum" : 2059.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1953.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1953.0,
          "min" : 1953.0,
          "sum" : 1953.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1926.5,
          "variance" : 9384.5,
          "n" : 1,
          "max" : 1995.0,
          "min" : 1858.0,
          "sum" : 1926.5,
          "standardDeviation" : 96.87362902255701
        }, {
          "mean" : 2235.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2235.0,
          "min" : 2235.0,
          "sum" : 2235.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2150.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2150.0,
          "min" : 2150.0,
          "sum" : 2150.0,
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
          "mean" : 2119.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2119.0,
          "min" : 2119.0,
          "sum" : 2119.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 2036.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2036.0,
          "min" : 2036.0,
          "sum" : 2036.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1855.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1855.0,
          "min" : 1855.0,
          "sum" : 1855.0,
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
          "mean" : 1818.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1818.0,
          "min" : 1818.0,
          "sum" : 1818.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 2344.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2344.0,
          "min" : 2344.0,
          "sum" : 2344.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1835.0,
          "variance" : 59168.0,
          "n" : 2,
          "max" : 2007.0,
          "min" : 1663.0,
          "sum" : 3670.0,
          "standardDeviation" : 243.24473272817235
        }, {
          "mean" : 1797.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1797.0,
          "min" : 1797.0,
          "sum" : 1797.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1588.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1588.0,
          "min" : 1588.0,
          "sum" : 1588.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 1954.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1954.0,
          "min" : 1954.0,
          "sum" : 1954.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 9571.84084880636,
          "variance" : 2.646813943726716E10,
          "n" : 372,
          "max" : 3159951.0,
          "min" : 111.0,
          "sum" : 3560724.7957559656,
          "standardDeviation" : 162690.31758917664
        }, {
          "mean" : 410.28266033254204,
          "variance" : 2699619.5365795693,
          "n" : 421,
          "max" : 22887.0,
          "min" : 27.0,
          "sum" : 172729.0000000002,
          "standardDeviation" : 1643.0518971047657
        }, {
          "mean" : 233.284375,
          "variance" : 101922.25430054853,
          "n" : 320,
          "max" : 4962.0,
          "min" : 26.0,
          "sum" : 74651.0,
          "standardDeviation" : 319.25264963747526
        }, {
          "mean" : 224.0000000000001,
          "variance" : 33499.59021406725,
          "n" : 328,
          "max" : 1140.0,
          "min" : 26.0,
          "sum" : 73472.00000000004,
          "standardDeviation" : 183.02893272394735
        }, {
          "mean" : 238.95665634674933,
          "variance" : 335505.625444686,
          "n" : 323,
          "max" : 10177.0,
          "min" : 37.0,
          "sum" : 77183.00000000003,
          "standardDeviation" : 579.2284743041264
        }, {
          "mean" : 211.88854489164066,
          "variance" : 30688.652135453725,
          "n" : 323,
          "max" : 914.0,
          "min" : 39.0,
          "sum" : 68439.99999999993,
          "standardDeviation" : 175.18176884440265
        }, {
          "mean" : 201.3159509202453,
          "variance" : 30306.106021708314,
          "n" : 326,
          "max" : 907.0,
          "min" : 40.0,
          "sum" : 65628.99999999997,
          "standardDeviation" : 174.08649006085543
        }, {
          "mean" : 209.41124260355033,
          "variance" : 34161.16865661159,
          "n" : 338,
          "max" : 1527.0,
          "min" : 31.0,
          "sum" : 70781.00000000001,
          "standardDeviation" : 184.82740234232475
        }, {
          "mean" : 165.30153846153854,
          "variance" : 321479.3717568852,
          "n" : 325,
          "max" : 10219.0,
          "min" : 33.0,
          "sum" : 53723.00000000003,
          "standardDeviation" : 566.9915094222181
        }, {
          "mean" : 127.55462184873952,
          "variance" : 7627.893177610026,
          "n" : 119,
          "max" : 447.0,
          "min" : 21.0,
          "sum" : 15179.000000000002,
          "standardDeviation" : 87.3378106985172
        } ],
        "1" : [ {
          "mean" : 1128.0577777777783,
          "variance" : 6262193.827389262,
          "n" : 445,
          "max" : 45139.0,
          "min" : 48.0,
          "sum" : 501985.71111111133,
          "standardDeviation" : 2502.4375771214077
        }, {
          "mean" : 249.29888268156435,
          "variance" : 36246.238150008605,
          "n" : 358,
          "max" : 1034.0,
          "min" : 41.0,
          "sum" : 89249.00000000004,
          "standardDeviation" : 190.38444828821656
        }, {
          "mean" : 212.84374999999997,
          "variance" : 27802.364224137924,
          "n" : 320,
          "max" : 1040.0,
          "min" : 20.0,
          "sum" : 68109.99999999999,
          "standardDeviation" : 166.7404096916459
        }, {
          "mean" : 2006.0529595015573,
          "variance" : 1.0466420337378113E9,
          "n" : 321,
          "max" : 579824.0,
          "min" : 29.0,
          "sum" : 643942.9999999999,
          "standardDeviation" : 32351.84745478705
        }, {
          "mean" : 207.61300309597522,
          "variance" : 28678.722439090052,
          "n" : 323,
          "max" : 946.0,
          "min" : 18.0,
          "sum" : 67059.0,
          "standardDeviation" : 169.34793308183615
        }, {
          "mean" : 200.63888888888889,
          "variance" : 26898.924922600607,
          "n" : 324,
          "max" : 872.0,
          "min" : 21.0,
          "sum" : 65007.0,
          "standardDeviation" : 164.0089172045246
        }, {
          "mean" : 194.12852664576798,
          "variance" : 25934.929969834975,
          "n" : 319,
          "max" : 923.0,
          "min" : 37.0,
          "sum" : 61926.999999999985,
          "standardDeviation" : 161.04325496535077
        }, {
          "mean" : 199.94427244582053,
          "variance" : 24747.313654981463,
          "n" : 323,
          "max" : 1100.0,
          "min" : 18.0,
          "sum" : 64582.00000000003,
          "standardDeviation" : 157.31278922891636
        }, {
          "mean" : 141.14330218068525,
          "variance" : 11121.191900311518,
          "n" : 321,
          "max" : 663.0,
          "min" : 28.0,
          "sum" : 45306.99999999996,
          "standardDeviation" : 105.45706187975995
        }, {
          "mean" : 115.42957746478874,
          "variance" : 9501.310608330838,
          "n" : 142,
          "max" : 625.0,
          "min" : 20.0,
          "sum" : 16391.0,
          "standardDeviation" : 97.47466649509931
        } ],
        "2" : [ {
          "mean" : 1118.0643776824058,
          "variance" : 4269723.61735198,
          "n" : 461,
          "max" : 24138.0,
          "min" : 66.0,
          "sum" : 515427.6781115891,
          "standardDeviation" : 2066.3309554260613
        }, {
          "mean" : 287.48546511627904,
          "variance" : 353533.1018289376,
          "n" : 344,
          "max" : 10811.0,
          "min" : 45.0,
          "sum" : 98894.99999999999,
          "standardDeviation" : 594.5864965073943
        }, {
          "mean" : 232.72699386503064,
          "variance" : 28211.78062293533,
          "n" : 326,
          "max" : 860.0,
          "min" : 40.0,
          "sum" : 75868.99999999999,
          "standardDeviation" : 167.96362886927434
        }, {
          "mean" : 259.02484472049684,
          "variance" : 334789.1831814403,
          "n" : 322,
          "max" : 10190.0,
          "min" : 36.0,
          "sum" : 83405.99999999999,
          "standardDeviation" : 578.6096984854646
        }, {
          "mean" : 205.06837606837604,
          "variance" : 23813.298168498153,
          "n" : 351,
          "max" : 820.0,
          "min" : 30.0,
          "sum" : 71978.99999999999,
          "standardDeviation" : 154.31557979834102
        }, {
          "mean" : 221.66769230769248,
          "variance" : 24114.15466286798,
          "n" : 325,
          "max" : 849.0,
          "min" : 43.0,
          "sum" : 72042.00000000006,
          "standardDeviation" : 155.2873293700036
        }, {
          "mean" : 230.02666666666673,
          "variance" : 310625.57147950097,
          "n" : 375,
          "max" : 10557.0,
          "min" : 29.0,
          "sum" : 86260.00000000003,
          "standardDeviation" : 557.3379329271434
        }, {
          "mean" : 215.05089820359285,
          "variance" : 27430.74514934096,
          "n" : 334,
          "max" : 923.0,
          "min" : 34.0,
          "sum" : 71827.00000000001,
          "standardDeviation" : 165.62229665519362
        }, {
          "mean" : 189.03927492447133,
          "variance" : 30233.504513412066,
          "n" : 331,
          "max" : 955.0,
          "min" : 17.0,
          "sum" : 62572.00000000001,
          "standardDeviation" : 173.8778436529855
        }, {
          "mean" : 311.92307692307685,
          "variance" : 50530.79384615384,
          "n" : 26,
          "max" : 1150.0,
          "min" : 62.0,
          "sum" : 8109.999999999998,
          "standardDeviation" : 224.79055550924252
        } ],
        "3" : [ {
          "mean" : 1180.2560000000014,
          "variance" : 2435614.169582886,
          "n" : 370,
          "max" : 18145.0,
          "min" : 70.0,
          "sum" : 436694.72000000055,
          "standardDeviation" : 1560.6454336532965
        }, {
          "mean" : 341.34278959810877,
          "variance" : 2002103.7850604444,
          "n" : 423,
          "max" : 28974.0,
          "min" : 38.0,
          "sum" : 144388.0,
          "standardDeviation" : 1414.9571672175962
        }, {
          "mean" : 285.96363636363634,
          "variance" : 629726.7281569495,
          "n" : 330,
          "max" : 10531.0,
          "min" : 29.0,
          "sum" : 94367.99999999999,
          "standardDeviation" : 793.5532295674623
        }, {
          "mean" : 224.693009118541,
          "variance" : 32013.317054637144,
          "n" : 329,
          "max" : 943.0,
          "min" : 23.0,
          "sum" : 73923.99999999999,
          "standardDeviation" : 178.92265662748568
        }, {
          "mean" : 234.62285714285701,
          "variance" : 317694.8659516985,
          "n" : 350,
          "max" : 10301.0,
          "min" : 27.0,
          "sum" : 82117.99999999996,
          "standardDeviation" : 563.644272526297
        }, {
          "mean" : 223.96932515337417,
          "variance" : 28574.23290231239,
          "n" : 326,
          "max" : 780.0,
          "min" : 19.0,
          "sum" : 73013.99999999999,
          "standardDeviation" : 169.039146064787
        }, {
          "mean" : 193.7320954907161,
          "variance" : 26515.813674586625,
          "n" : 377,
          "max" : 977.0,
          "min" : 26.0,
          "sum" : 73036.99999999997,
          "standardDeviation" : 162.83677003240584
        }, {
          "mean" : 197.86918604651157,
          "variance" : 28376.41140924807,
          "n" : 344,
          "max" : 910.0,
          "min" : 21.0,
          "sum" : 68066.99999999999,
          "standardDeviation" : 168.45299465799968
        }, {
          "mean" : 162.98165137614663,
          "variance" : 18687.17757640567,
          "n" : 327,
          "max" : 770.0,
          "min" : 18.0,
          "sum" : 53294.99999999995,
          "standardDeviation" : 136.70105184820514
        }, {
          "mean" : 225.59999999999994,
          "variance" : 17620.673684210527,
          "n" : 20,
          "max" : 708.0,
          "min" : 44.0,
          "sum" : 4511.999999999999,
          "standardDeviation" : 132.74288562559775
        } ],
        "4" : [ {
          "mean" : 1188.6622340425533,
          "variance" : 2970068.565609928,
          "n" : 371,
          "max" : 28197.0,
          "min" : 118.0,
          "sum" : 440993.6888297873,
          "standardDeviation" : 1723.3886867476901
        }, {
          "mean" : 452.80568720379165,
          "variance" : 1153561.7768796938,
          "n" : 422,
          "max" : 16392.0,
          "min" : 41.0,
          "sum" : 191084.0000000001,
          "standardDeviation" : 1074.0399326280628
        }, {
          "mean" : 205.2163009404389,
          "variance" : 25802.660613946893,
          "n" : 319,
          "max" : 919.0,
          "min" : 19.0,
          "sum" : 65464.000000000015,
          "standardDeviation" : 160.6320659580362
        }, {
          "mean" : 282.8834355828219,
          "variance" : 639479.063294006,
          "n" : 326,
          "max" : 10431.0,
          "min" : 41.0,
          "sum" : 92219.99999999994,
          "standardDeviation" : 799.6743482781013
        }, {
          "mean" : 222.3034055727554,
          "variance" : 28255.659211968545,
          "n" : 323,
          "max" : 867.0,
          "min" : 27.0,
          "sum" : 71803.99999999999,
          "standardDeviation" : 168.09419743693874
        }, {
          "mean" : 213.8068535825546,
          "variance" : 27473.356327881604,
          "n" : 321,
          "max" : 852.0,
          "min" : 27.0,
          "sum" : 68632.00000000003,
          "standardDeviation" : 165.7508863562473
        }, {
          "mean" : 204.05295950155772,
          "variance" : 29107.13156152647,
          "n" : 321,
          "max" : 1087.0,
          "min" : 27.0,
          "sum" : 65501.00000000003,
          "standardDeviation" : 170.60812278882406
        }, {
          "mean" : 199.75229357798173,
          "variance" : 22821.13170484603,
          "n" : 327,
          "max" : 787.0,
          "min" : 27.0,
          "sum" : 65319.00000000003,
          "standardDeviation" : 151.06664656649406
        }, {
          "mean" : 146.33850931677026,
          "variance" : 12132.853901820787,
          "n" : 322,
          "max" : 631.0,
          "min" : 18.0,
          "sum" : 47121.00000000002,
          "standardDeviation" : 110.1492346855882
        }, {
          "mean" : 137.99295774647888,
          "variance" : 13840.0921486365,
          "n" : 142,
          "max" : 624.0,
          "min" : 18.0,
          "sum" : 19595.0,
          "standardDeviation" : 117.64392100162465
        } ],
        "5" : [ {
          "mean" : 1043.2319999999997,
          "variance" : 2992549.2856042753,
          "n" : 370,
          "max" : 24480.0,
          "min" : 92.0,
          "sum" : 385995.8399999999,
          "standardDeviation" : 1729.8986344882394
        }, {
          "mean" : 536.3711583924346,
          "variance" : 1760437.9306353868,
          "n" : 423,
          "max" : 23386.0,
          "min" : 59.0,
          "sum" : 226884.99999999983,
          "standardDeviation" : 1326.8149571946296
        }, {
          "mean" : 4331.837423312881,
          "variance" : 5.191886723718101E9,
          "n" : 326,
          "max" : 1300967.0,
          "min" : 37.0,
          "sum" : 1412178.999999999,
          "standardDeviation" : 72054.74809974774
        }, {
          "mean" : 186.6055900621118,
          "variance" : 13231.678847158535,
          "n" : 322,
          "max" : 658.0,
          "min" : 38.0,
          "sum" : 60086.99999999999,
          "standardDeviation" : 115.02903480060387
        }, {
          "mean" : 179.22981366459626,
          "variance" : 15444.538921460487,
          "n" : 322,
          "max" : 647.0,
          "min" : 37.0,
          "sum" : 57712.0,
          "standardDeviation" : 124.27605932544083
        }, {
          "mean" : 166.73520249221178,
          "variance" : 15430.089038161994,
          "n" : 321,
          "max" : 688.0,
          "min" : 26.0,
          "sum" : 53521.999999999985,
          "standardDeviation" : 124.21790949038707
        }, {
          "mean" : 169.9968944099378,
          "variance" : 15271.274133627434,
          "n" : 322,
          "max" : 674.0,
          "min" : 32.0,
          "sum" : 54738.99999999997,
          "standardDeviation" : 123.57699678187456
        }, {
          "mean" : 177.5626911314985,
          "variance" : 15200.38792893191,
          "n" : 327,
          "max" : 778.0,
          "min" : 19.0,
          "sum" : 58063.00000000001,
          "standardDeviation" : 123.28985330890742
        }, {
          "mean" : 144.940625,
          "variance" : 17494.38831308778,
          "n" : 320,
          "max" : 778.0,
          "min" : 18.0,
          "sum" : 46381.0,
          "standardDeviation" : 132.26635366973636
        }, {
          "mean" : 132.07746478873239,
          "variance" : 13275.504594945556,
          "n" : 142,
          "max" : 565.0,
          "min" : 30.0,
          "sum" : 18755.0,
          "standardDeviation" : 115.21937595276914
        } ],
        "6" : [ {
          "mean" : 3865.341628959279,
          "variance" : 3.613775191676672E9,
          "n" : 437,
          "max" : 1264285.0,
          "min" : 65.0,
          "sum" : 1689154.291855205,
          "standardDeviation" : 60114.6836611212
        }, {
          "mean" : 354.26330532212893,
          "variance" : 4183617.6832845523,
          "n" : 357,
          "max" : 38742.0,
          "min" : 40.0,
          "sum" : 126472.00000000003,
          "standardDeviation" : 2045.3893720474232
        }, {
          "mean" : 222.153605015674,
          "variance" : 25525.438595453536,
          "n" : 319,
          "max" : 766.0,
          "min" : 19.0,
          "sum" : 70867.0,
          "standardDeviation" : 159.76682570375345
        }, {
          "mean" : 223.80246913580254,
          "variance" : 30063.273554256008,
          "n" : 324,
          "max" : 950.0,
          "min" : 19.0,
          "sum" : 72512.00000000003,
          "standardDeviation" : 173.38763956596216
        }, {
          "mean" : 209.43384615384616,
          "variance" : 26859.74020892687,
          "n" : 325,
          "max" : 1028.0,
          "min" : 34.0,
          "sum" : 68066.0,
          "standardDeviation" : 163.8894145725308
        }, {
          "mean" : 237.93125000000012,
          "variance" : 37874.22096394985,
          "n" : 320,
          "max" : 1559.0,
          "min" : 41.0,
          "sum" : 76138.00000000004,
          "standardDeviation" : 194.61300307006684
        }, {
          "mean" : 197.87187500000007,
          "variance" : 25773.215507445137,
          "n" : 320,
          "max" : 722.0,
          "min" : 28.0,
          "sum" : 63319.00000000002,
          "standardDeviation" : 160.54038590786163
        }, {
          "mean" : 214.99690402476793,
          "variance" : 27552.909928273362,
          "n" : 323,
          "max" : 952.0,
          "min" : 40.0,
          "sum" : 69444.00000000004,
          "standardDeviation" : 165.9906922940963
        }, {
          "mean" : 137.45679012345676,
          "variance" : 10751.995031150858,
          "n" : 324,
          "max" : 582.0,
          "min" : 19.0,
          "sum" : 44535.999999999985,
          "standardDeviation" : 103.69182721483337
        }, {
          "mean" : 129.59310344827588,
          "variance" : 15103.493007662833,
          "n" : 145,
          "max" : 865.0,
          "min" : 33.0,
          "sum" : 18791.000000000004,
          "standardDeviation" : 122.89626929920547
        } ],
        "7" : [ {
          "mean" : 945.2813765182187,
          "variance" : 2335290.9531210233,
          "n" : 489,
          "max" : 20808.0,
          "min" : 61.0,
          "sum" : 462242.593117409,
          "standardDeviation" : 1528.1658787975286
        }, {
          "mean" : 193.40307692307695,
          "variance" : 14938.833941120603,
          "n" : 325,
          "max" : 713.0,
          "min" : 38.0,
          "sum" : 62856.00000000001,
          "standardDeviation" : 122.2245226667734
        }, {
          "mean" : 179.8746438746438,
          "variance" : 13893.401383801383,
          "n" : 351,
          "max" : 655.0,
          "min" : 35.0,
          "sum" : 63135.99999999997,
          "standardDeviation" : 117.87027353748435
        }, {
          "mean" : 170.5197889182059,
          "variance" : 12415.43016291829,
          "n" : 379,
          "max" : 536.0,
          "min" : 32.0,
          "sum" : 64627.00000000004,
          "standardDeviation" : 111.42454919324686
        }, {
          "mean" : 171.9761904761904,
          "variance" : 12747.724804548689,
          "n" : 336,
          "max" : 604.0,
          "min" : 38.0,
          "sum" : 57783.99999999997,
          "standardDeviation" : 112.90582272207527
        }, {
          "mean" : 176.5210843373495,
          "variance" : 16333.507106977766,
          "n" : 332,
          "max" : 666.0,
          "min" : 26.0,
          "sum" : 58605.00000000003,
          "standardDeviation" : 127.8026099380516
        }, {
          "mean" : 206.23853211009177,
          "variance" : 292384.470535262,
          "n" : 327,
          "max" : 9730.0,
          "min" : 39.0,
          "sum" : 67440.00000000001,
          "standardDeviation" : 540.7258737431214
        }, {
          "mean" : 195.70769230769224,
          "variance" : 311441.91737891734,
          "n" : 325,
          "max" : 9960.0,
          "min" : 17.0,
          "sum" : 63604.99999999998,
          "standardDeviation" : 558.0698140725024
        }, {
          "mean" : 301.83641975308626,
          "variance" : 6860931.115573518,
          "n" : 324,
          "max" : 47248.0,
          "min" : 16.0,
          "sum" : 97794.99999999994,
          "standardDeviation" : 2619.337915499548
        }, {
          "mean" : 257.25,
          "variance" : 20267.071428571424,
          "n" : 8,
          "max" : 489.0,
          "min" : 89.0,
          "sum" : 2058.0,
          "standardDeviation" : 142.36246495678355
        } ],
        "8" : [ {
          "mean" : 1069.4815573770509,
          "variance" : 2279665.416496954,
          "n" : 483,
          "max" : 15782.0,
          "min" : 114.0,
          "sum" : 516559.5922131156,
          "standardDeviation" : 1509.85609132028
        }, {
          "mean" : 355.36874999999986,
          "variance" : 2328390.7350705327,
          "n" : 320,
          "max" : 27234.0,
          "min" : 45.0,
          "sum" : 113717.99999999996,
          "standardDeviation" : 1525.906528942888
        }, {
          "mean" : 213.9187499999999,
          "variance" : 26222.958894984324,
          "n" : 320,
          "max" : 860.0,
          "min" : 43.0,
          "sum" : 68453.99999999997,
          "standardDeviation" : 161.93504529589734
        }, {
          "mean" : 208.46788990825684,
          "variance" : 21758.133168233253,
          "n" : 327,
          "max" : 719.0,
          "min" : 19.0,
          "sum" : 68168.99999999999,
          "standardDeviation" : 147.50638348299796
        }, {
          "mean" : 210.26874999999998,
          "variance" : 25497.670493730417,
          "n" : 320,
          "max" : 736.0,
          "min" : 43.0,
          "sum" : 67286.0,
          "standardDeviation" : 159.67990009306249
        }, {
          "mean" : 196.56386292834907,
          "variance" : 21729.790440031156,
          "n" : 321,
          "max" : 725.0,
          "min" : 24.0,
          "sum" : 63097.00000000005,
          "standardDeviation" : 147.41027928889883
        }, {
          "mean" : 231.06422018348624,
          "variance" : 337626.20751955855,
          "n" : 327,
          "max" : 10339.0,
          "min" : 39.0,
          "sum" : 75558.0,
          "standardDeviation" : 581.0561139163399
        }, {
          "mean" : 199.97187500000007,
          "variance" : 23107.112059169296,
          "n" : 320,
          "max" : 753.0,
          "min" : 18.0,
          "sum" : 63991.00000000002,
          "standardDeviation" : 152.0102366920376
        }, {
          "mean" : 152.4883040935673,
          "variance" : 64470.33857248204,
          "n" : 342,
          "max" : 4394.0,
          "min" : 21.0,
          "sum" : 52151.00000000002,
          "standardDeviation" : 253.91009939047726
        }, {
          "mean" : 142.73684210526312,
          "variance" : 13519.434559850952,
          "n" : 114,
          "max" : 656.0,
          "min" : 29.0,
          "sum" : 16271.999999999996,
          "standardDeviation" : 116.27310333800742
        } ],
        "9" : [ {
          "mean" : 1376.9911242603548,
          "variance" : 5762193.551849775,
          "n" : 333,
          "max" : 25395.0,
          "min" : 102.0,
          "sum" : 458538.04437869816,
          "standardDeviation" : 2400.4569464686874
        }, {
          "mean" : 377.1353711790392,
          "variance" : 1535561.2814157263,
          "n" : 458,
          "max" : 18938.0,
          "min" : 42.0,
          "sum" : 172727.99999999997,
          "standardDeviation" : 1239.1776633783093
        }, {
          "mean" : 225.1107594936709,
          "variance" : 38013.978169580034,
          "n" : 316,
          "max" : 1848.0,
          "min" : 29.0,
          "sum" : 71135.00000000001,
          "standardDeviation" : 194.9717368481392
        }, {
          "mean" : 221.00625000000014,
          "variance" : 27164.01876959246,
          "n" : 320,
          "max" : 822.0,
          "min" : 36.0,
          "sum" : 70722.00000000004,
          "standardDeviation" : 164.81510479805078
        }, {
          "mean" : 224.45652173913044,
          "variance" : 28971.76913178922,
          "n" : 322,
          "max" : 889.0,
          "min" : 38.0,
          "sum" : 72275.0,
          "standardDeviation" : 170.21095479371832
        }, {
          "mean" : 240.95911949685512,
          "variance" : 281662.9099954367,
          "n" : 318,
          "max" : 9182.0,
          "min" : 31.0,
          "sum" : 76624.99999999993,
          "standardDeviation" : 530.7192383882807
        }, {
          "mean" : 238.8142414860681,
          "variance" : 255647.05855431416,
          "n" : 323,
          "max" : 8801.0,
          "min" : 38.0,
          "sum" : 77137.0,
          "standardDeviation" : 505.6155244395826
        }, {
          "mean" : 239.47058823529412,
          "variance" : 289674.97040555364,
          "n" : 323,
          "max" : 9459.0,
          "min" : 21.0,
          "sum" : 77349.0,
          "standardDeviation" : 538.2146137049361
        }, {
          "mean" : 168.03749999999997,
          "variance" : 17255.227429467093,
          "n" : 320,
          "max" : 724.0,
          "min" : 29.0,
          "sum" : 53771.999999999985,
          "standardDeviation" : 131.35915434208266
        }, {
          "mean" : 164.75925925925927,
          "variance" : 22038.655969634223,
          "n" : 162,
          "max" : 1024.0,
          "min" : 15.0,
          "sum" : 26691.0,
          "standardDeviation" : 148.4542217979476
        } ],
        "10" : [ {
          "mean" : 26872.662234042575,
          "variance" : 2.4713262667131726E11,
          "n" : 371,
          "max" : 9640783.0,
          "min" : 126.0,
          "sum" : 9969757.688829795,
          "standardDeviation" : 497124.3573506706
        }, {
          "mean" : 356.0379146919431,
          "variance" : 3101876.354853598,
          "n" : 422,
          "max" : 36130.0,
          "min" : 35.0,
          "sum" : 150248.0,
          "standardDeviation" : 1761.2144545323258
        }, {
          "mean" : 219.08125,
          "variance" : 23661.504349529772,
          "n" : 320,
          "max" : 752.0,
          "min" : 29.0,
          "sum" : 70106.0,
          "standardDeviation" : 153.82296431134648
        }, {
          "mean" : 243.19756838905784,
          "variance" : 295572.34804284986,
          "n" : 329,
          "max" : 9628.0,
          "min" : 39.0,
          "sum" : 80012.00000000003,
          "standardDeviation" : 543.6656583258224
        }, {
          "mean" : 207.11963190184065,
          "variance" : 28110.068721094845,
          "n" : 326,
          "max" : 1129.0,
          "min" : 27.0,
          "sum" : 67521.00000000006,
          "standardDeviation" : 167.66057592974815
        }, {
          "mean" : 218.5621118012421,
          "variance" : 28801.461862193082,
          "n" : 322,
          "max" : 894.0,
          "min" : 26.0,
          "sum" : 70376.99999999996,
          "standardDeviation" : 169.70993448290847
        }, {
          "mean" : 215.67428571428573,
          "variance" : 284704.0941792876,
          "n" : 350,
          "max" : 9734.0,
          "min" : 37.0,
          "sum" : 75486.0,
          "standardDeviation" : 533.5766994343809
        }, {
          "mean" : 222.20370370370364,
          "variance" : 327021.33918128686,
          "n" : 324,
          "max" : 10123.0,
          "min" : 18.0,
          "sum" : 71993.99999999999,
          "standardDeviation" : 571.8577962931754
        }, {
          "mean" : 163.56307692307686,
          "variance" : 21893.425792972474,
          "n" : 325,
          "max" : 689.0,
          "min" : 28.0,
          "sum" : 53157.99999999998,
          "standardDeviation" : 147.9642720151472
        }, {
          "mean" : 141.3523809523809,
          "variance" : 15055.538095238091,
          "n" : 105,
          "max" : 514.0,
          "min" : 30.0,
          "sum" : 14841.999999999996,
          "standardDeviation" : 122.70101097887536
        } ],
        "11" : [ {
          "mean" : 1206.2085561497327,
          "variance" : 5238329.205717481,
          "n" : 369,
          "max" : 25169.0,
          "min" : 52.0,
          "sum" : 445090.9572192514,
          "standardDeviation" : 2288.7396544206335
        }, {
          "mean" : 515.2768496420053,
          "variance" : 1269433.7939843093,
          "n" : 419,
          "max" : 15284.0,
          "min" : 46.0,
          "sum" : 215901.00000000023,
          "standardDeviation" : 1126.6915256556736
        }, {
          "mean" : 249.19875776397538,
          "variance" : 759744.5896557727,
          "n" : 322,
          "max" : 15637.0,
          "min" : 25.0,
          "sum" : 80242.00000000007,
          "standardDeviation" : 871.6332885197609
        }, {
          "mean" : 260.67901234567904,
          "variance" : 211913.8966479376,
          "n" : 324,
          "max" : 7848.0,
          "min" : 38.0,
          "sum" : 84460.00000000001,
          "standardDeviation" : 460.3410655676263
        }, {
          "mean" : 228.80851063829795,
          "variance" : 27776.60651271406,
          "n" : 329,
          "max" : 1065.0,
          "min" : 44.0,
          "sum" : 75278.00000000003,
          "standardDeviation" : 166.66315283443447
        }, {
          "mean" : 227.10869565217382,
          "variance" : 31285.548896112687,
          "n" : 322,
          "max" : 855.0,
          "min" : 41.0,
          "sum" : 73128.99999999997,
          "standardDeviation" : 176.8772141800992
        }, {
          "mean" : 228.02461538461543,
          "variance" : 29179.129021842342,
          "n" : 325,
          "max" : 1028.0,
          "min" : 45.0,
          "sum" : 74108.00000000001,
          "standardDeviation" : 170.81899490935527
        }, {
          "mean" : 225.1076923076924,
          "variance" : 31726.009971509986,
          "n" : 325,
          "max" : 1003.0,
          "min" : 31.0,
          "sum" : 73160.00000000003,
          "standardDeviation" : 178.11796644782913
        }, {
          "mean" : 221.18068535825543,
          "variance" : 30146.55475077882,
          "n" : 321,
          "max" : 934.0,
          "min" : 27.0,
          "sum" : 70999.0,
          "standardDeviation" : 173.62763245168904
        }, {
          "mean" : 196.9716312056738,
          "variance" : 27294.056332320164,
          "n" : 141,
          "max" : 741.0,
          "min" : 20.0,
          "sum" : 27773.000000000004,
          "standardDeviation" : 165.20912908286928
        } ],
        "12" : [ {
          "mean" : 1240.1842818428186,
          "variance" : 1.5488667357252266E7,
          "n" : 364,
          "max" : 71025.0,
          "min" : 58.0,
          "sum" : 451427.07859078597,
          "standardDeviation" : 3935.564426769338
        }, {
          "mean" : 463.03488372092994,
          "variance" : 462192.6258199165,
          "n" : 430,
          "max" : 10354.0,
          "min" : 43.0,
          "sum" : 199104.99999999988,
          "standardDeviation" : 679.8475018854717
        }, {
          "mean" : 218.21779141104287,
          "variance" : 25853.653959414816,
          "n" : 326,
          "max" : 790.0,
          "min" : 21.0,
          "sum" : 71138.99999999997,
          "standardDeviation" : 160.7907147798492
        }, {
          "mean" : 208.57453416149073,
          "variance" : 29260.170439813464,
          "n" : 322,
          "max" : 861.0,
          "min" : 22.0,
          "sum" : 67161.00000000001,
          "standardDeviation" : 171.05604473333722
        }, {
          "mean" : 214.43292682926835,
          "variance" : 30396.448086820328,
          "n" : 328,
          "max" : 957.0,
          "min" : 41.0,
          "sum" : 70334.00000000001,
          "standardDeviation" : 174.3457716344745
        }, {
          "mean" : 213.11801242236024,
          "variance" : 27164.515624697666,
          "n" : 322,
          "max" : 888.0,
          "min" : 40.0,
          "sum" : 68624.0,
          "standardDeviation" : 164.81661210174678
        }, {
          "mean" : 195.92236024844723,
          "variance" : 20041.05625858633,
          "n" : 322,
          "max" : 788.0,
          "min" : 31.0,
          "sum" : 63087.00000000001,
          "standardDeviation" : 141.566437613533
        }, {
          "mean" : 176.5545977011494,
          "variance" : 16077.400468713762,
          "n" : 348,
          "max" : 807.0,
          "min" : 20.0,
          "sum" : 61440.999999999985,
          "standardDeviation" : 126.79668950218598
        }, {
          "mean" : 162.7375,
          "variance" : 20889.818025078366,
          "n" : 320,
          "max" : 870.0,
          "min" : 31.0,
          "sum" : 52076.0,
          "standardDeviation" : 144.53310356135844
        }, {
          "mean" : 139.0526315789473,
          "variance" : 15029.236143455988,
          "n" : 114,
          "max" : 719.0,
          "min" : 39.0,
          "sum" : 15851.999999999995,
          "standardDeviation" : 122.59378509311142
        } ],
        "13" : [ {
          "mean" : 1082.3954918032778,
          "variance" : 3639489.3483985267,
          "n" : 483,
          "max" : 24642.0,
          "min" : 94.0,
          "sum" : 522797.02254098316,
          "standardDeviation" : 1907.7445710572804
        }, {
          "mean" : 296.5233644859814,
          "variance" : 1541468.0502336447,
          "n" : 321,
          "max" : 22289.0,
          "min" : 27.0,
          "sum" : 95184.00000000003,
          "standardDeviation" : 1241.5587179967142
        }, {
          "mean" : 195.04307692307688,
          "variance" : 20258.97962013297,
          "n" : 325,
          "max" : 842.0,
          "min" : 20.0,
          "sum" : 63388.999999999985,
          "standardDeviation" : 142.3340423796534
        }, {
          "mean" : 240.11728395061726,
          "variance" : 308800.61158888525,
          "n" : 324,
          "max" : 9834.0,
          "min" : 46.0,
          "sum" : 77798.0,
          "standardDeviation" : 555.6983098668604
        }, {
          "mean" : 198.05413105413106,
          "variance" : 23372.891347171368,
          "n" : 351,
          "max" : 952.0,
          "min" : 37.0,
          "sum" : 69517.0,
          "standardDeviation" : 152.88195232652993
        }, {
          "mean" : 201.92615384615374,
          "variance" : 19907.40811016144,
          "n" : 325,
          "max" : 780.0,
          "min" : 39.0,
          "sum" : 65625.99999999997,
          "standardDeviation" : 141.09361470371874
        }, {
          "mean" : 175.79733333333328,
          "variance" : 18304.798388591786,
          "n" : 375,
          "max" : 695.0,
          "min" : 19.0,
          "sum" : 65923.99999999999,
          "standardDeviation" : 135.29522677682235
        }, {
          "mean" : 177.3205882352942,
          "variance" : 21442.21255422522,
          "n" : 340,
          "max" : 821.0,
          "min" : 19.0,
          "sum" : 60289.00000000003,
          "standardDeviation" : 146.43159684380015
        }, {
          "mean" : 187.66459627329186,
          "variance" : 25415.064723979795,
          "n" : 322,
          "max" : 947.0,
          "min" : 27.0,
          "sum" : 60427.99999999998,
          "standardDeviation" : 159.42102974193773
        }, {
          "mean" : 258.5666666666666,
          "variance" : 10292.391954022987,
          "n" : 30,
          "max" : 521.0,
          "min" : 51.0,
          "sum" : 7756.999999999998,
          "standardDeviation" : 101.45142657460755
        } ],
        "14" : [ {
          "mean" : 1020.7083333333326,
          "variance" : 4550497.4729853505,
          "n" : 451,
          "max" : 28091.0,
          "min" : 73.0,
          "sum" : 460339.45833333296,
          "standardDeviation" : 2133.189507049327
        }, {
          "mean" : 210.9620991253643,
          "variance" : 21083.76171721822,
          "n" : 343,
          "max" : 817.0,
          "min" : 44.0,
          "sum" : 72359.99999999996,
          "standardDeviation" : 145.20248523086036
        }, {
          "mean" : 180.91104294478518,
          "variance" : 15352.02590844739,
          "n" : 326,
          "max" : 687.0,
          "min" : 40.0,
          "sum" : 58976.99999999997,
          "standardDeviation" : 123.9032925649976
        }, {
          "mean" : 194.34276729559733,
          "variance" : 22557.380562664915,
          "n" : 318,
          "max" : 792.0,
          "min" : 19.0,
          "sum" : 61800.99999999995,
          "standardDeviation" : 150.19114675194712
        }, {
          "mean" : 184.1871165644172,
          "variance" : 17698.724879660207,
          "n" : 326,
          "max" : 670.0,
          "min" : 28.0,
          "sum" : 60045.00000000001,
          "standardDeviation" : 133.03655467449616
        }, {
          "mean" : 183.7124999999998,
          "variance" : 21044.531504702187,
          "n" : 320,
          "max" : 945.0,
          "min" : 37.0,
          "sum" : 58787.99999999994,
          "standardDeviation" : 145.06733438201098
        }, {
          "mean" : 174.44444444444437,
          "variance" : 16803.87616099071,
          "n" : 324,
          "max" : 704.0,
          "min" : 18.0,
          "sum" : 56519.99999999998,
          "standardDeviation" : 129.62976572142182
        }, {
          "mean" : 170.70846394984318,
          "variance" : 15438.917884111119,
          "n" : 319,
          "max" : 778.0,
          "min" : 29.0,
          "sum" : 54455.99999999997,
          "standardDeviation" : 124.25344214190253
        }, {
          "mean" : 127.36163522012579,
          "variance" : 11246.78047933655,
          "n" : 318,
          "max" : 753.0,
          "min" : 25.0,
          "sum" : 40501.0,
          "standardDeviation" : 106.05083912603686
        }, {
          "mean" : 108.24503311258279,
          "variance" : 6862.239558498895,
          "n" : 151,
          "max" : 471.0,
          "min" : 14.0,
          "sum" : 16345.000000000002,
          "standardDeviation" : 82.83863566294954
        } ],
        "15" : [ {
          "mean" : 896.9310344827596,
          "variance" : 1365843.2532973157,
          "n" : 430,
          "max" : 18413.0,
          "min" : 60.0,
          "sum" : 385680.34482758667,
          "standardDeviation" : 1168.692967933544
        }, {
          "mean" : 551.745308310992,
          "variance" : 1919871.9699040058,
          "n" : 373,
          "max" : 26030.0,
          "min" : 48.0,
          "sum" : 205801.0,
          "standardDeviation" : 1385.5944464034221
        }, {
          "mean" : 282.98773006134985,
          "variance" : 1464151.1690797533,
          "n" : 326,
          "max" : 21778.0,
          "min" : 38.0,
          "sum" : 92254.00000000006,
          "standardDeviation" : 1210.0211440630917
        }, {
          "mean" : 204.28086419753086,
          "variance" : 24659.45957076788,
          "n" : 324,
          "max" : 1150.0,
          "min" : 41.0,
          "sum" : 66187.0,
          "standardDeviation" : 157.03330720190505
        }, {
          "mean" : 198.28125,
          "variance" : 23541.490473646725,
          "n" : 352,
          "max" : 1032.0,
          "min" : 39.0,
          "sum" : 69795.0,
          "standardDeviation" : 153.4323644921329
        }, {
          "mean" : 203.74691358024683,
          "variance" : 36390.065779918215,
          "n" : 324,
          "max" : 2217.0,
          "min" : 21.0,
          "sum" : 66013.99999999997,
          "standardDeviation" : 190.76180377611817
        }, {
          "mean" : 183.272,
          "variance" : 20543.054160427797,
          "n" : 375,
          "max" : 764.0,
          "min" : 18.0,
          "sum" : 68727.0,
          "standardDeviation" : 143.3284834233161
        }, {
          "mean" : 177.10810810810779,
          "variance" : 21573.915988277407,
          "n" : 333,
          "max" : 840.0,
          "min" : 26.0,
          "sum" : 58976.99999999989,
          "standardDeviation" : 146.88061815051503
        }, {
          "mean" : 134.55192878338278,
          "variance" : 10563.396848947295,
          "n" : 337,
          "max" : 688.0,
          "min" : 28.0,
          "sum" : 45343.99999999999,
          "standardDeviation" : 102.77838707115079
        }, {
          "mean" : 248.85714285714292,
          "variance" : 26644.428571428572,
          "n" : 21,
          "max" : 772.0,
          "min" : 55.0,
          "sum" : 5226.000000000001,
          "standardDeviation" : 163.23121200134665
        } ],
        "16" : [ {
          "mean" : 1084.4289340101536,
          "variance" : 2413179.9911199817,
          "n" : 389,
          "max" : 19929.0,
          "min" : 100.0,
          "sum" : 421842.85532994976,
          "standardDeviation" : 1553.4413381650372
        }, {
          "mean" : 401.0869565217392,
          "variance" : 2449076.573534057,
          "n" : 414,
          "max" : 31500.0,
          "min" : 38.0,
          "sum" : 166050.00000000003,
          "standardDeviation" : 1564.9525786853917
        }, {
          "mean" : 228.21003134796246,
          "variance" : 33008.13499339524,
          "n" : 319,
          "max" : 948.0,
          "min" : 28.0,
          "sum" : 72799.00000000003,
          "standardDeviation" : 181.68141069849506
        }, {
          "mean" : 215.81446540880495,
          "variance" : 28320.448118167562,
          "n" : 318,
          "max" : 1030.0,
          "min" : 30.0,
          "sum" : 68628.99999999997,
          "standardDeviation" : 168.28680316105468
        }, {
          "mean" : 219.50925925925938,
          "variance" : 28218.120657034768,
          "n" : 324,
          "max" : 864.0,
          "min" : 20.0,
          "sum" : 71121.00000000004,
          "standardDeviation" : 167.98250104411105
        }, {
          "mean" : 242.66037735849065,
          "variance" : 349033.4805071127,
          "n" : 318,
          "max" : 10314.0,
          "min" : 21.0,
          "sum" : 77166.00000000003,
          "standardDeviation" : 590.7905555331032
        }, {
          "mean" : 196.68124999999995,
          "variance" : 28096.926293103443,
          "n" : 320,
          "max" : 863.0,
          "min" : 28.0,
          "sum" : 62937.999999999985,
          "standardDeviation" : 167.62137779264148
        }, {
          "mean" : 219.31366459627324,
          "variance" : 28194.166105532026,
          "n" : 322,
          "max" : 915.0,
          "min" : 22.0,
          "sum" : 70618.99999999999,
          "standardDeviation" : 167.91118517100648
        }, {
          "mean" : 195.57097791798108,
          "variance" : 33824.52421834446,
          "n" : 317,
          "max" : 837.0,
          "min" : 16.0,
          "sum" : 61996.0,
          "standardDeviation" : 183.914448095696
        }, {
          "mean" : 296.4129032258067,
          "variance" : 2651544.63359866,
          "n" : 155,
          "max" : 20340.0,
          "min" : 29.0,
          "sum" : 45944.00000000004,
          "standardDeviation" : 1628.356420934514
        } ],
        "17" : [ {
          "mean" : 1052.7780082987558,
          "variance" : 3306350.4474987304,
          "n" : 477,
          "max" : 22839.0,
          "min" : 66.0,
          "sum" : 502175.10995850654,
          "standardDeviation" : 1818.3372755071405
        }, {
          "mean" : 516.2834394904457,
          "variance" : 3806937.066370242,
          "n" : 314,
          "max" : 33113.0,
          "min" : 51.0,
          "sum" : 162112.99999999997,
          "standardDeviation" : 1951.1373776262506
        }, {
          "mean" : 208.34177215189877,
          "variance" : 25179.209805103455,
          "n" : 316,
          "max" : 714.0,
          "min" : 29.0,
          "sum" : 65836.00000000001,
          "standardDeviation" : 158.67958219349916
        }, {
          "mean" : 212.97819314641737,
          "variance" : 23500.69014797508,
          "n" : 321,
          "max" : 800.0,
          "min" : 0.0,
          "sum" : 68365.99999999997,
          "standardDeviation" : 153.29934816552574
        }, {
          "mean" : 193.940251572327,
          "variance" : 25721.627333690445,
          "n" : 318,
          "max" : 802.0,
          "min" : 21.0,
          "sum" : 61672.99999999999,
          "standardDeviation" : 160.37963503416026
        }, {
          "mean" : 214.50937500000003,
          "variance" : 28685.228751959243,
          "n" : 320,
          "max" : 944.0,
          "min" : 42.0,
          "sum" : 68643.00000000001,
          "standardDeviation" : 169.3671418899169
        }, {
          "mean" : 229.8138801261831,
          "variance" : 362483.19626242894,
          "n" : 317,
          "max" : 10503.0,
          "min" : 27.0,
          "sum" : 72851.00000000004,
          "standardDeviation" : 602.0657740333933
        }, {
          "mean" : 197.87155963302746,
          "variance" : 25861.983452468077,
          "n" : 327,
          "max" : 834.0,
          "min" : 20.0,
          "sum" : 64703.99999999998,
          "standardDeviation" : 160.81661435457494
        }, {
          "mean" : 185.88679245283012,
          "variance" : 343806.7820963037,
          "n" : 318,
          "max" : 10326.0,
          "min" : 18.0,
          "sum" : 59111.99999999998,
          "standardDeviation" : 586.3503919128082
        }, {
          "mean" : 148.27108433734938,
          "variance" : 14290.610916392847,
          "n" : 166,
          "max" : 691.0,
          "min" : 17.0,
          "sum" : 24612.999999999996,
          "standardDeviation" : 119.5433432542057
        } ],
        "18" : [ {
          "mean" : 1047.0718085106378,
          "variance" : 949900.1094964533,
          "n" : 371,
          "max" : 10642.0,
          "min" : 99.0,
          "sum" : 388463.6409574466,
          "standardDeviation" : 974.6281903866999
        }, {
          "mean" : 412.1820330969263,
          "variance" : 3592446.4004347213,
          "n" : 423,
          "max" : 38857.0,
          "min" : 45.0,
          "sum" : 174352.99999999983,
          "standardDeviation" : 1895.3750025878048
        }, {
          "mean" : 274.48923076923046,
          "variance" : 340371.0407787271,
          "n" : 325,
          "max" : 10122.0,
          "min" : 47.0,
          "sum" : 89208.9999999999,
          "standardDeviation" : 583.4132675717335
        }, {
          "mean" : 305.16358024691334,
          "variance" : 645039.1403413214,
          "n" : 324,
          "max" : 10183.0,
          "min" : 20.0,
          "sum" : 98872.99999999993,
          "standardDeviation" : 803.1432875529256
        }, {
          "mean" : 246.1859756097561,
          "variance" : 91722.1702002685,
          "n" : 328,
          "max" : 4427.0,
          "min" : 34.0,
          "sum" : 80749.0,
          "standardDeviation" : 302.8566826079103
        }, {
          "mean" : 217.29687500000006,
          "variance" : 34087.95861089343,
          "n" : 320,
          "max" : 1016.0,
          "min" : 20.0,
          "sum" : 69535.00000000001,
          "standardDeviation" : 184.6292463584614
        }, {
          "mean" : 279.219814241486,
          "variance" : 1599686.9235813313,
          "n" : 323,
          "max" : 22708.0,
          "min" : 42.0,
          "sum" : 90187.99999999999,
          "standardDeviation" : 1264.7873036923368
        }, {
          "mean" : 234.90201729106624,
          "variance" : 346935.3198514101,
          "n" : 347,
          "max" : 10672.0,
          "min" : 15.0,
          "sum" : 81510.99999999999,
          "standardDeviation" : 589.0121559453677
        }, {
          "mean" : 157.27863777089783,
          "variance" : 14496.456281368375,
          "n" : 323,
          "max" : 645.0,
          "min" : 20.0,
          "sum" : 50801.0,
          "standardDeviation" : 120.40123039806684
        }, {
          "mean" : 143.52252252252254,
          "variance" : 13040.651760851762,
          "n" : 111,
          "max" : 604.0,
          "min" : 18.0,
          "sum" : 15931.000000000002,
          "standardDeviation" : 114.19567312666344
        } ],
        "19" : [ {
          "mean" : 1133.5022123893798,
          "variance" : 3153860.263853188,
          "n" : 447,
          "max" : 20523.0,
          "min" : 102.0,
          "sum" : 506675.4889380528,
          "standardDeviation" : 1775.9111080944306
        }, {
          "mean" : 446.6246498599442,
          "variance" : 4275475.212649107,
          "n" : 357,
          "max" : 38764.0,
          "min" : 46.0,
          "sum" : 159445.0000000001,
          "standardDeviation" : 2067.7222281169943
        }, {
          "mean" : 223.16615384615378,
          "variance" : 32084.126628679925,
          "n" : 325,
          "max" : 950.0,
          "min" : 27.0,
          "sum" : 72528.99999999997,
          "standardDeviation" : 179.12042493439972
        }, {
          "mean" : 227.03086419753083,
          "variance" : 27425.417001108424,
          "n" : 324,
          "max" : 1005.0,
          "min" : 41.0,
          "sum" : 73557.99999999999,
          "standardDeviation" : 165.60621063567763
        }, {
          "mean" : 215.561604584527,
          "variance" : 27265.827372130563,
          "n" : 349,
          "max" : 1101.0,
          "min" : 27.0,
          "sum" : 75230.99999999993,
          "standardDeviation" : 165.12367296099782
        }, {
          "mean" : 257.23437499999983,
          "variance" : 338626.4307895766,
          "n" : 320,
          "max" : 10023.0,
          "min" : 38.0,
          "sum" : 82314.99999999994,
          "standardDeviation" : 581.916171617164
        }, {
          "mean" : 235.44582043343664,
          "variance" : 224666.5273349614,
          "n" : 323,
          "max" : 8186.0,
          "min" : 37.0,
          "sum" : 76049.00000000003,
          "standardDeviation" : 473.99000763197677
        }, {
          "mean" : 201.01851851851845,
          "variance" : 27177.604430690622,
          "n" : 378,
          "max" : 917.0,
          "min" : 23.0,
          "sum" : 75984.99999999997,
          "standardDeviation" : 164.85631450050866
        }, {
          "mean" : 190.56470588235285,
          "variance" : 25029.491376019418,
          "n" : 340,
          "max" : 909.0,
          "min" : 16.0,
          "sum" : 64791.99999999997,
          "standardDeviation" : 158.2071154405497
        }, {
          "mean" : 298.90625,
          "variance" : 28446.4747983871,
          "n" : 32,
          "max" : 733.0,
          "min" : 66.0,
          "sum" : 9565.0,
          "standardDeviation" : 168.66082769388717
        } ],
        "20" : [ {
          "mean" : 1019.7211796246654,
          "variance" : 1994586.8091469908,
          "n" : 368,
          "max" : 15656.0,
          "min" : 121.0,
          "sum" : 375257.3941018769,
          "standardDeviation" : 1412.2984136318325
        }, {
          "mean" : 338.2064965197214,
          "variance" : 1201587.447957697,
          "n" : 431,
          "max" : 22001.0,
          "min" : 33.0,
          "sum" : 145766.9999999999,
          "standardDeviation" : 1096.1694430870152
        }, {
          "mean" : 216.75776397515529,
          "variance" : 645868.5517308101,
          "n" : 322,
          "max" : 14382.0,
          "min" : 27.0,
          "sum" : 69796.0,
          "standardDeviation" : 803.6594749835343
        }, {
          "mean" : 243.17027863777088,
          "variance" : 44555.86843066748,
          "n" : 323,
          "max" : 1209.0,
          "min" : 28.0,
          "sum" : 78544.0,
          "standardDeviation" : 211.08261044119072
        }, {
          "mean" : 287.22018348623874,
          "variance" : 530753.5403275738,
          "n" : 327,
          "max" : 10561.0,
          "min" : 29.0,
          "sum" : 93921.00000000007,
          "standardDeviation" : 728.5283387264861
        }, {
          "mean" : 235.37888198757753,
          "variance" : 35431.48839999225,
          "n" : 322,
          "max" : 1141.0,
          "min" : 37.0,
          "sum" : 75791.99999999997,
          "standardDeviation" : 188.23253810112706
        }, {
          "mean" : 213.77363896848138,
          "variance" : 29765.813555972727,
          "n" : 349,
          "max" : 903.0,
          "min" : 41.0,
          "sum" : 74607.0,
          "standardDeviation" : 172.52771822513833
        }, {
          "mean" : 221.21671826625382,
          "variance" : 31851.49947118434,
          "n" : 323,
          "max" : 932.0,
          "min" : 28.0,
          "sum" : 71452.99999999999,
          "standardDeviation" : 178.46988393335258
        }, {
          "mean" : 243.16822429906554,
          "variance" : 112463.29661214964,
          "n" : 321,
          "max" : 4983.0,
          "min" : 23.0,
          "sum" : 78057.00000000004,
          "standardDeviation" : 335.35547798142443
        }, {
          "mean" : 212.81651376146783,
          "variance" : 32887.077132178056,
          "n" : 109,
          "max" : 846.0,
          "min" : 29.0,
          "sum" : 23196.999999999993,
          "standardDeviation" : 181.34794493508343
        } ],
        "21" : [ {
          "mean" : 1366.7580993520526,
          "variance" : 7.246920927469082E7,
          "n" : 458,
          "max" : 178402.0,
          "min" : 93.0,
          "sum" : 625975.2095032401,
          "standardDeviation" : 8512.884897300728
        }, {
          "mean" : 240.94955489614242,
          "variance" : 312222.1194715276,
          "n" : 337,
          "max" : 10082.0,
          "min" : 33.0,
          "sum" : 81200.0,
          "standardDeviation" : 558.7683951974445
        }, {
          "mean" : 182.87106918238993,
          "variance" : 19240.16313513083,
          "n" : 318,
          "max" : 834.0,
          "min" : 27.0,
          "sum" : 58153.0,
          "standardDeviation" : 138.70891512491485
        }, {
          "mean" : 183.92721518987338,
          "variance" : 18345.832780791643,
          "n" : 316,
          "max" : 724.0,
          "min" : 29.0,
          "sum" : 58120.999999999985,
          "standardDeviation" : 135.44678948130016
        }, {
          "mean" : 190.41049382716037,
          "variance" : 20873.741189848264,
          "n" : 324,
          "max" : 681.0,
          "min" : 26.0,
          "sum" : 61692.999999999956,
          "standardDeviation" : 144.47747641015974
        }, {
          "mean" : 189.19620253164555,
          "variance" : 22045.301064898536,
          "n" : 316,
          "max" : 997.0,
          "min" : 23.0,
          "sum" : 59785.99999999999,
          "standardDeviation" : 148.4766010686483
        }, {
          "mean" : 207.85,
          "variance" : 352296.9492163009,
          "n" : 320,
          "max" : 10563.0,
          "min" : 41.0,
          "sum" : 66512.0,
          "standardDeviation" : 593.5460801119833
        }, {
          "mean" : 172.1708074534161,
          "variance" : 15463.743319595202,
          "n" : 322,
          "max" : 789.0,
          "min" : 22.0,
          "sum" : 55438.999999999985,
          "standardDeviation" : 124.35330039687408
        }, {
          "mean" : 152.05063291139263,
          "variance" : 19336.9942535664,
          "n" : 316,
          "max" : 840.0,
          "min" : 26.0,
          "sum" : 48048.00000000007,
          "standardDeviation" : 139.05752138437677
        }, {
          "mean" : 143.98224852071004,
          "variance" : 15288.184206818822,
          "n" : 169,
          "max" : 563.0,
          "min" : 18.0,
          "sum" : 24332.999999999996,
          "standardDeviation" : 123.64539703045489
        } ],
        "22" : [ {
          "mean" : 979.6295503211986,
          "variance" : 4578115.323845934,
          "n" : 462,
          "max" : 37614.0,
          "min" : 54.0,
          "sum" : 452588.85224839376,
          "standardDeviation" : 2139.653084928941
        }, {
          "mean" : 297.5945121951217,
          "variance" : 314276.9023551134,
          "n" : 328,
          "max" : 9707.0,
          "min" : 42.0,
          "sum" : 97610.99999999991,
          "standardDeviation" : 560.604051318855
        }, {
          "mean" : 278.64037854889574,
          "variance" : 344967.64241504617,
          "n" : 317,
          "max" : 10112.0,
          "min" : 37.0,
          "sum" : 88328.99999999996,
          "standardDeviation" : 587.3394609721419
        }, {
          "mean" : 236.44479495268138,
          "variance" : 34481.62748073314,
          "n" : 317,
          "max" : 885.0,
          "min" : 40.0,
          "sum" : 74953.0,
          "standardDeviation" : 185.69229246453162
        }, {
          "mean" : 259.6479750778817,
          "variance" : 343137.2038161992,
          "n" : 321,
          "max" : 10139.0,
          "min" : 20.0,
          "sum" : 83347.00000000003,
          "standardDeviation" : 585.7791425240397
        }, {
          "mean" : 263.66876971608843,
          "variance" : 348798.53867348173,
          "n" : 317,
          "max" : 10131.0,
          "min" : 20.0,
          "sum" : 83583.00000000003,
          "standardDeviation" : 590.5916852390336
        }, {
          "mean" : 229.30340557275542,
          "variance" : 38883.466665384694,
          "n" : 323,
          "max" : 903.0,
          "min" : 27.0,
          "sum" : 74065.0,
          "standardDeviation" : 197.18891111161574
        }, {
          "mean" : 230.09779179810735,
          "variance" : 38361.14546979197,
          "n" : 317,
          "max" : 1065.0,
          "min" : 29.0,
          "sum" : 72941.00000000003,
          "standardDeviation" : 195.86001498466186
        }, {
          "mean" : 190.8307210031348,
          "variance" : 29593.090751365293,
          "n" : 319,
          "max" : 969.0,
          "min" : 38.0,
          "sum" : 60875.00000000001,
          "standardDeviation" : 172.02642457298614
        }, {
          "mean" : 166.27011494252866,
          "variance" : 18825.50465085377,
          "n" : 174,
          "max" : 625.0,
          "min" : 18.0,
          "sum" : 28930.99999999999,
          "standardDeviation" : 137.20606637774355
        } ],
        "23" : [ {
          "mean" : 1013.1161290322586,
          "variance" : 3151977.430450501,
          "n" : 460,
          "max" : 20343.0,
          "min" : 64.0,
          "sum" : 466033.41935483896,
          "standardDeviation" : 1775.3809254496628
        }, {
          "mean" : 242.72886297376104,
          "variance" : 28569.894106013337,
          "n" : 343,
          "max" : 954.0,
          "min" : 43.0,
          "sum" : 83256.00000000004,
          "standardDeviation" : 169.02631187484786
        }, {
          "mean" : 218.13749999999987,
          "variance" : 25572.376018808787,
          "n" : 320,
          "max" : 966.0,
          "min" : 37.0,
          "sum" : 69803.99999999996,
          "standardDeviation" : 159.9136517587188
        }, {
          "mean" : 204.59627329192537,
          "variance" : 23925.450204136916,
          "n" : 322,
          "max" : 806.0,
          "min" : 22.0,
          "sum" : 65879.99999999997,
          "standardDeviation" : 154.6785382790286
        }, {
          "mean" : 240.89939024390253,
          "variance" : 321014.5311311256,
          "n" : 328,
          "max" : 10055.0,
          "min" : 36.0,
          "sum" : 79015.00000000003,
          "standardDeviation" : 566.5814426286177
        }, {
          "mean" : 217.66355140186914,
          "variance" : 24399.730198598143,
          "n" : 321,
          "max" : 797.0,
          "min" : 24.0,
          "sum" : 69870.0,
          "standardDeviation" : 156.20412990250335
        }, {
          "mean" : 325.0804597701149,
          "variance" : 4555243.186591138,
          "n" : 348,
          "max" : 39874.0,
          "min" : 40.0,
          "sum" : 113127.99999999999,
          "standardDeviation" : 2134.301568802108
        }, {
          "mean" : 198.0920245398773,
          "variance" : 23990.059197734783,
          "n" : 326,
          "max" : 866.0,
          "min" : 20.0,
          "sum" : 64577.99999999999,
          "standardDeviation" : 154.88724672397913
        }, {
          "mean" : 177.36363636363626,
          "variance" : 25981.634648370487,
          "n" : 319,
          "max" : 925.0,
          "min" : 30.0,
          "sum" : 56578.99999999996,
          "standardDeviation" : 161.18819636800484
        }, {
          "mean" : 153.3271028037383,
          "variance" : 19956.788220772352,
          "n" : 107,
          "max" : 813.0,
          "min" : 23.0,
          "sum" : 16406.0,
          "standardDeviation" : 141.26849691552732
        } ],
        "24" : [ {
          "mean" : 1139.156914893617,
          "variance" : 2064317.188645389,
          "n" : 371,
          "max" : 14368.0,
          "min" : 67.0,
          "sum" : 422627.21542553196,
          "standardDeviation" : 1436.7731862216071
        }, {
          "mean" : 361.4665127020783,
          "variance" : 910843.9207510053,
          "n" : 433,
          "max" : 14883.0,
          "min" : 52.0,
          "sum" : 156514.9999999999,
          "standardDeviation" : 954.3814335741267
        }, {
          "mean" : 204.24620060790278,
          "variance" : 17520.28371265476,
          "n" : 329,
          "max" : 1060.0,
          "min" : 41.0,
          "sum" : 67197.00000000001,
          "standardDeviation" : 132.36420857865906
        }, {
          "mean" : 201.792899408284,
          "variance" : 15248.17063192456,
          "n" : 338,
          "max" : 740.0,
          "min" : 41.0,
          "sum" : 68205.99999999999,
          "standardDeviation" : 123.48348323530787
        }, {
          "mean" : 207.00589970501483,
          "variance" : 21147.254402960345,
          "n" : 339,
          "max" : 869.0,
          "min" : 28.0,
          "sum" : 70175.00000000003,
          "standardDeviation" : 145.420955859052
        }, {
          "mean" : 198.1002638522428,
          "variance" : 90574.95817453337,
          "n" : 379,
          "max" : 5531.0,
          "min" : 37.0,
          "sum" : 75080.00000000001,
          "standardDeviation" : 300.9567380447452
        }, {
          "mean" : 204.62985074626854,
          "variance" : 16828.20988470819,
          "n" : 335,
          "max" : 714.0,
          "min" : 43.0,
          "sum" : 68550.99999999996,
          "standardDeviation" : 129.72359031690493
        }, {
          "mean" : 188.42249240121578,
          "variance" : 16912.476443769014,
          "n" : 329,
          "max" : 784.0,
          "min" : 33.0,
          "sum" : 61990.99999999999,
          "standardDeviation" : 130.04797746896725
        }, {
          "mean" : 165.33435582822082,
          "variance" : 17994.857092968396,
          "n" : 326,
          "max" : 712.0,
          "min" : 33.0,
          "sum" : 53898.999999999985,
          "standardDeviation" : 134.1449107978696
        }, {
          "mean" : 278.4375,
          "variance" : 29106.395833333332,
          "n" : 16,
          "max" : 650.0,
          "min" : 59.0,
          "sum" : 4455.0,
          "standardDeviation" : 170.60596658186762
        } ],
        "25" : [ {
          "mean" : 1102.0,
          "variance" : 6735032.020491806,
          "n" : 484,
          "max" : 37658.0,
          "min" : 80.0,
          "sum" : 533368.0,
          "standardDeviation" : 2595.1940236698692
        }, {
          "mean" : 223.61006289308176,
          "variance" : 29689.468920500763,
          "n" : 318,
          "max" : 1220.0,
          "min" : 27.0,
          "sum" : 71108.0,
          "standardDeviation" : 172.30632292664353
        }, {
          "mean" : 225.14147909967843,
          "variance" : 31660.276693289088,
          "n" : 311,
          "max" : 1085.0,
          "min" : 40.0,
          "sum" : 70019.0,
          "standardDeviation" : 177.93334901948282
        }, {
          "mean" : 247.76993865030673,
          "variance" : 158410.6946012269,
          "n" : 326,
          "max" : 6580.0,
          "min" : 24.0,
          "sum" : 80773.0,
          "standardDeviation" : 398.00841021418995
        }, {
          "mean" : 224.3291925465838,
          "variance" : 35094.03459685381,
          "n" : 322,
          "max" : 1070.0,
          "min" : 28.0,
          "sum" : 72233.99999999999,
          "standardDeviation" : 187.3340187922466
        }, {
          "mean" : 209.29559748427667,
          "variance" : 32560.492788127707,
          "n" : 318,
          "max" : 841.0,
          "min" : 39.0,
          "sum" : 66555.99999999999,
          "standardDeviation" : 180.4452625815588
        }, {
          "mean" : 222.808176100629,
          "variance" : 92156.04826101621,
          "n" : 318,
          "max" : 4438.0,
          "min" : 21.0,
          "sum" : 70853.00000000001,
          "standardDeviation" : 303.5721467147739
        }, {
          "mean" : 233.7608695652175,
          "variance" : 357401.6342272788,
          "n" : 322,
          "max" : 10415.0,
          "min" : 27.0,
          "sum" : 75271.00000000003,
          "standardDeviation" : 597.8307739045213
        }, {
          "mean" : 177.96815286624192,
          "variance" : 25833.117193382303,
          "n" : 314,
          "max" : 1168.0,
          "min" : 30.0,
          "sum" : 55881.99999999996,
          "standardDeviation" : 160.72684030174395
        }, {
          "mean" : 163.75155279503107,
          "variance" : 24032.112888198764,
          "n" : 161,
          "max" : 761.0,
          "min" : 29.0,
          "sum" : 26364.000000000004,
          "standardDeviation" : 155.02294310262195
        } ],
        "26" : [ {
          "mean" : 1068.1612903225812,
          "variance" : 2371620.604643075,
          "n" : 367,
          "max" : 17805.0,
          "min" : 55.0,
          "sum" : 392015.19354838727,
          "standardDeviation" : 1540.0066898046498
        }, {
          "mean" : 3551.2060889929744,
          "variance" : 4.2948413586287866E9,
          "n" : 427,
          "max" : 1354142.0,
          "min" : 39.0,
          "sum" : 1516365.0,
          "standardDeviation" : 65535.039167065326
        }, {
          "mean" : 205.11249999999998,
          "variance" : 24895.172257053302,
          "n" : 320,
          "max" : 988.0,
          "min" : 41.0,
          "sum" : 65636.0,
          "standardDeviation" : 157.7820403501403
        }, {
          "mean" : 196.56441717791404,
          "variance" : 24786.997376120802,
          "n" : 326,
          "max" : 838.0,
          "min" : 20.0,
          "sum" : 64079.99999999998,
          "standardDeviation" : 157.43886869550607
        }, {
          "mean" : 226.2360248447206,
          "variance" : 344055.68243648554,
          "n" : 322,
          "max" : 10294.0,
          "min" : 19.0,
          "sum" : 72848.00000000003,
          "standardDeviation" : 586.5625989069586
        }, {
          "mean" : 199.02492211838003,
          "variance" : 23050.905626947042,
          "n" : 321,
          "max" : 938.0,
          "min" : 39.0,
          "sum" : 63886.99999999999,
          "standardDeviation" : 151.82524700110665
        }, {
          "mean" : 195.0467289719626,
          "variance" : 26568.33843457943,
          "n" : 321,
          "max" : 879.0,
          "min" : 40.0,
          "sum" : 62610.0,
          "standardDeviation" : 162.99797064558635
        }, {
          "mean" : 196.32812500000003,
          "variance" : 99845.18666731965,
          "n" : 320,
          "max" : 5231.0,
          "min" : 29.0,
          "sum" : 62825.00000000001,
          "standardDeviation" : 315.98288983316746
        }, {
          "mean" : 123.02187500000002,
          "variance" : 10749.70171434169,
          "n" : 320,
          "max" : 697.0,
          "min" : 28.0,
          "sum" : 39367.00000000001,
          "standardDeviation" : 103.68076829548328
        }, {
          "mean" : 122.17105263157896,
          "variance" : 7510.619553851517,
          "n" : 152,
          "max" : 557.0,
          "min" : 27.0,
          "sum" : 18570.0,
          "standardDeviation" : 86.66383071299997
        } ],
        "27" : [ {
          "mean" : 20745.09631147541,
          "variance" : 9.583279054448973E10,
          "n" : 483,
          "max" : 4942690.0,
          "min" : 105.0,
          "sum" : 1.0019881518442621E7,
          "standardDeviation" : 309568.7169991337
        }, {
          "mean" : 370.8156250000001,
          "variance" : 3413985.724519988,
          "n" : 320,
          "max" : 28269.0,
          "min" : 41.0,
          "sum" : 118661.00000000004,
          "standardDeviation" : 1847.6974115152047
        }, {
          "mean" : 238.73619631901835,
          "variance" : 332149.4748088722,
          "n" : 326,
          "max" : 10213.0,
          "min" : 29.0,
          "sum" : 77827.99999999999,
          "standardDeviation" : 576.3241056982366
        }, {
          "mean" : 215.22670807453423,
          "variance" : 27835.097976045356,
          "n" : 322,
          "max" : 933.0,
          "min" : 41.0,
          "sum" : 69303.00000000003,
          "standardDeviation" : 166.83853864154216
        }, {
          "mean" : 236.99142857142857,
          "variance" : 310830.50135898485,
          "n" : 350,
          "max" : 10036.0,
          "min" : 29.0,
          "sum" : 82947.0,
          "standardDeviation" : 557.5217496734857
        }, {
          "mean" : 214.4892307692309,
          "variance" : 31598.30621082621,
          "n" : 325,
          "max" : 1007.0,
          "min" : 20.0,
          "sum" : 69709.00000000004,
          "standardDeviation" : 177.75912412820392
        }, {
          "mean" : 198.67801857585133,
          "variance" : 30226.455012210838,
          "n" : 323,
          "max" : 1106.0,
          "min" : 39.0,
          "sum" : 64172.99999999998,
          "standardDeviation" : 173.85757105231522
        }, {
          "mean" : 217.16755319148928,
          "variance" : 272864.8598510637,
          "n" : 376,
          "max" : 9872.0,
          "min" : 29.0,
          "sum" : 81654.99999999997,
          "standardDeviation" : 522.3646808993346
        }, {
          "mean" : 151.28614457831327,
          "variance" : 18169.69128780983,
          "n" : 332,
          "max" : 908.0,
          "min" : 26.0,
          "sum" : 50227.00000000001,
          "standardDeviation" : 134.79499726551364
        }, {
          "mean" : 232.2894736842105,
          "variance" : 13625.6706970128,
          "n" : 38,
          "max" : 618.0,
          "min" : 73.0,
          "sum" : 8826.999999999998,
          "standardDeviation" : 116.72904821428469
        } ],
        "28" : [ {
          "mean" : 1029.479481641469,
          "variance" : 4470683.124578084,
          "n" : 458,
          "max" : 34594.0,
          "min" : 91.0,
          "sum" : 471501.60259179276,
          "standardDeviation" : 2114.3989984338536
        }, {
          "mean" : 263.27405247813385,
          "variance" : 40582.17028966977,
          "n" : 343,
          "max" : 965.0,
          "min" : 31.0,
          "sum" : 90302.99999999991,
          "standardDeviation" : 201.45016825426026
        }, {
          "mean" : 322.9968749999997,
          "variance" : 954706.1724039965,
          "n" : 320,
          "max" : 10637.0,
          "min" : 28.0,
          "sum" : 103358.99999999991,
          "standardDeviation" : 977.0906674428921
        }, {
          "mean" : 242.30030959752315,
          "variance" : 37996.018229717534,
          "n" : 323,
          "max" : 1158.0,
          "min" : 39.0,
          "sum" : 78262.99999999999,
          "standardDeviation" : 194.92567360334434
        }, {
          "mean" : 225.78881987577637,
          "variance" : 31186.84622975565,
          "n" : 322,
          "max" : 985.0,
          "min" : 34.0,
          "sum" : 72703.99999999999,
          "standardDeviation" : 176.5979791213808
        }, {
          "mean" : 255.64615384615396,
          "variance" : 149326.90218423557,
          "n" : 325,
          "max" : 6250.0,
          "min" : 28.0,
          "sum" : 83085.00000000004,
          "standardDeviation" : 386.42839205244167
        }, {
          "mean" : 227.66770186335413,
          "variance" : 119426.49671058997,
          "n" : 322,
          "max" : 5587.0,
          "min" : 22.0,
          "sum" : 73309.00000000003,
          "standardDeviation" : 345.5813894158509
        }, {
          "mean" : 252.70414201183445,
          "variance" : 323856.18520534487,
          "n" : 338,
          "max" : 10160.0,
          "min" : 34.0,
          "sum" : 85414.00000000004,
          "standardDeviation" : 569.0836363886638
        }, {
          "mean" : 196.26299694189612,
          "variance" : 321587.4398228924,
          "n" : 327,
          "max" : 10117.0,
          "min" : 31.0,
          "sum" : 64178.00000000003,
          "standardDeviation" : 567.086800959864
        }, {
          "mean" : 216.06722689075627,
          "variance" : 33108.35137444809,
          "n" : 119,
          "max" : 785.0,
          "min" : 36.0,
          "sum" : 25711.999999999996,
          "standardDeviation" : 181.95700419178178
        } ],
        "29" : [ {
          "mean" : 1048.302575107298,
          "variance" : 3530624.805025614,
          "n" : 461,
          "max" : 27178.0,
          "min" : 104.0,
          "sum" : 483267.4871244644,
          "standardDeviation" : 1878.99569052875
        }, {
          "mean" : 213.5425219941349,
          "variance" : 16982.443039503203,
          "n" : 341,
          "max" : 888.0,
          "min" : 39.0,
          "sum" : 72818.0,
          "standardDeviation" : 130.31670284158974
        }, {
          "mean" : 216.74608150470226,
          "variance" : 204853.00764969143,
          "n" : 319,
          "max" : 6787.0,
          "min" : 35.0,
          "sum" : 69142.00000000001,
          "standardDeviation" : 452.60690190240297
        }, {
          "mean" : 195.68944099378888,
          "variance" : 18669.460885044795,
          "n" : 322,
          "max" : 753.0,
          "min" : 40.0,
          "sum" : 63012.00000000002,
          "standardDeviation" : 136.63623562234432
        }, {
          "mean" : 206.36448598130846,
          "variance" : 124671.80110981311,
          "n" : 321,
          "max" : 6111.0,
          "min" : 27.0,
          "sum" : 66243.00000000001,
          "standardDeviation" : 353.08894220835225
        }, {
          "mean" : 191.1028037383177,
          "variance" : 17059.18627336448,
          "n" : 321,
          "max" : 834.0,
          "min" : 27.0,
          "sum" : 61343.999999999985,
          "standardDeviation" : 130.61081989392946
        }, {
          "mean" : 171.98442367601254,
          "variance" : 14533.959131619926,
          "n" : 321,
          "max" : 647.0,
          "min" : 19.0,
          "sum" : 55207.00000000002,
          "standardDeviation" : 120.55687094321885
        }, {
          "mean" : 188.08049535603718,
          "variance" : 17963.13014633771,
          "n" : 323,
          "max" : 774.0,
          "min" : 20.0,
          "sum" : 60750.00000000001,
          "standardDeviation" : 134.02660238302585
        }, {
          "mean" : 175.39506172839512,
          "variance" : 26684.109696900203,
          "n" : 324,
          "max" : 914.0,
          "min" : 16.0,
          "sum" : 56828.00000000002,
          "standardDeviation" : 163.3527156092001
        }, {
          "mean" : 153.24137931034485,
          "variance" : 15445.05938697319,
          "n" : 145,
          "max" : 648.0,
          "min" : 33.0,
          "sum" : 22220.000000000004,
          "standardDeviation" : 124.27815329724363
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
