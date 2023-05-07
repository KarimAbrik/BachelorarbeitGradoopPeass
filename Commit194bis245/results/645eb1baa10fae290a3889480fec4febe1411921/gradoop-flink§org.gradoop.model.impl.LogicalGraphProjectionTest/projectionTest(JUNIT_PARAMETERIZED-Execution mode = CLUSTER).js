if (typeof jenkins !== 'undefined') {} else {if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 645eb1baa10fae290a3889480fec4febe1411921 -test org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest\")'>645eb1baa10fae290a3889480fec4febe1411921</a><br>Predecessor: 6209595896568bded13130a7921e4584df72ce8f<br>Comitter: <br>Test Case: org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest<br>";
   if (typeof jenkins !== 'undefined') {
         } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='projectionTest_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
   }
  }
}

var source = {"current":
{
 "org.gradoop.model.impl.AbstractGraph.getEdgeData_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<ED> getEdgeData() {
    return getEdges().map(new MapFunction<Edge<Long, ED>, ED>() {

        @Override
        public ED map(Edge<Long, ED> longEDEdge) throws Exception {
            return longEDEdge.getValue();
        }
    }).withForwardedFields("f2->*");
}`,"org.gradoop.model.impl.AbstractGraph.getVertexCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public long getVertexCount() throws Exception {
    return this.graph.numberOfVertices();
}`,"org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,"org.gradoop.model.impl.DefaultVertexData.<init>_":
 `/**
 * Default constructor.
 */
public DefaultVertexData() {
}`,"org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest_":
 `@Test
public void projectionTest() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> forumGraph = getGraphStore().getGraph(3L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = forumGraph.project(new VertexLabelProjectionFunction(), new EdgePropertyProjectionFunction());
    List<DefaultVertexData> oldVertices = Lists.newArrayList();
    List<DefaultEdgeData> oldEdges = Lists.newArrayList();
    List<DefaultVertexData> newVertices = Lists.newArrayList();
    List<DefaultEdgeData> newEdges = Lists.newArrayList();
    forumGraph.getVertexData().output(new LocalCollectionOutputFormat<>(oldVertices));
    forumGraph.getEdgeData().output(new LocalCollectionOutputFormat<>(oldEdges));
    newGraph.getVertexData().output(new LocalCollectionOutputFormat<>(newVertices));
    newGraph.getEdgeData().output(new LocalCollectionOutputFormat<>(newEdges));
    getExecutionEnvironment().execute();
    Collections.sort(oldVertices, new VertexComparator());
    Collections.sort(newVertices, new VertexComparator());
    Collections.sort(oldEdges, new EdgeComparator());
    Collections.sort(newEdges, new EdgeComparator());
    assertNotNull("graph was null", newGraph);
    assertEquals(oldVertices.size(), newVertices.size());
    assertEquals(oldEdges.size(), newEdges.size());
    assertEquals(forumGraph.getLabel(), newGraph.getLabel());
    assertEquals(forumGraph.getProperties(), newGraph.getProperties());
    for (int i = 0; i < newVertices.size(); i++) {
        DefaultVertexData oldVertex = oldVertices.get(i);
        DefaultVertexData newVertex = newVertices.get(i);
        assertEquals(oldVertex.getId(), newVertex.getId());
        assertEquals(oldVertex.getProperties(), newVertex.getProperties());
        assertEquals(newVertex.getLabel(), "test_label");
    }
    for (int i = 0; i < newEdges.size(); i++) {
        DefaultEdgeData oldEdge = oldEdges.get(i);
        DefaultEdgeData newEdge = newEdges.get(i);
        assertEquals(oldEdge.getId(), newEdge.getId());
        assertEquals(oldEdge.getLabel(), newEdge.getLabel());
        assertEquals(newEdge.getProperties().get("test_property"), "test_value");
        assertNull(newEdge.getProperties().get(PROPERTY_KEY_SINCE));
    }
}`,"org.gradoop.model.impl.AbstractGraph.getGellyGraph_":
 `/**
 * Returns the internal Gelly graph representation. Must only be used by
 * inheriting classes.
 *
 * @return Gelly graph representation
 */
protected Graph<Long, VD, ED> getGellyGraph() {
    return this.graph;
}`,"org.gradoop.model.impl.DefaultEdgeData.<init>_":
 `/**
 * Default constructor is necessary to apply to POJO rules.
 */
public DefaultEdgeData() {
}`,"org.gradoop.model.impl.LogicalGraphProjectionTest$EdgeComparator.compare_DefaultEdgeData_DefaultEdgeData":
 `@Override
public int compare(DefaultEdgeData edge1, DefaultEdgeData edge2) {
    return Long.compare(edge1.getId(), edge2.getId());
}`,"org.gradoop.model.impl.DefaultGraphElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultGraphElement() {
}`,"org.gradoop.model.impl.AbstractGraph.getVertexData_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<VD> getVertexData() {
    return getVertices().map(new MapFunction<Vertex<Long, VD>, VD>() {

        @Override
        public VD map(Vertex<Long, VD> longVDVertex) throws Exception {
            return longVDVertex.getValue();
        }
    }).withForwardedFields("f1->*");
}`,"org.gradoop.model.impl.AbstractGraph.getEdgeCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public long getEdgeCount() throws Exception {
    return this.graph.numberOfEdges();
}`,},
"old":
{
 "org.gradoop.model.impl.AbstractGraph.getEdgeData_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<ED> getEdgeData() {
    return getEdges().map(new MapFunction<Edge<Long, ED>, ED>() {

        @Override
        public ED map(Edge<Long, ED> longEDEdge) throws Exception {
            return longEDEdge.getValue();
        }
    }).withForwardedFields("f2->*");
}`,"org.gradoop.model.impl.AbstractGraph.getVertexCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public long getVertexCount() throws Exception {
    return this.graph.numberOfVertices();
}`,"org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,"org.gradoop.model.impl.DefaultVertexData.<init>_":
 `/**
 * Default constructor.
 */
public DefaultVertexData() {
}`,"org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest_":
 `@Test
public void projectionTest() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> forumGraph = getGraphStore().getGraph(3L);
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> newGraph = forumGraph.project(new VertexLabelProjectionFunction(), new EdgePropertyProjectionFunction());
    Comparator<Vertex<Long, DefaultVertexData>> vertexComp = new Comparator<Vertex<Long, DefaultVertexData>>() {

        @Override
        public int compare(Vertex<Long, DefaultVertexData> vertex1, Vertex<Long, DefaultVertexData> vertex2) {
            return Long.compare(vertex1.getId(), vertex2.getId());
        }
    };
    Comparator<Edge<Long, DefaultEdgeData>> edgeComp = new Comparator<Edge<Long, DefaultEdgeData>>() {

        @Override
        public int compare(Edge<Long, DefaultEdgeData> edge1, Edge<Long, DefaultEdgeData> edge2) {
            return Long.compare(edge1.getValue().getId(), edge2.getValue().getId());
        }
    };
    List<Vertex<Long, DefaultVertexData>> oldVertices = forumGraph.getGellyGraph().getVertices().collect();
    Collections.sort(oldVertices, vertexComp);
    List<Edge<Long, DefaultEdgeData>> oldEdges = forumGraph.getGellyGraph().getEdges().collect();
    Collections.sort(oldEdges, edgeComp);
    List<Vertex<Long, DefaultVertexData>> newVertices = newGraph.getGellyGraph().getVertices().collect();
    Collections.sort(newVertices, vertexComp);
    List<Edge<Long, DefaultEdgeData>> newEdges = newGraph.getGellyGraph().getEdges().collect();
    Collections.sort(newEdges, edgeComp);
    assertNotNull("graph was null", newGraph);
    assertEquals(forumGraph.getVertexCount(), newGraph.getVertexCount());
    assertEquals(forumGraph.getEdgeCount(), newGraph.getEdgeCount());
    assertEquals(forumGraph.getLabel(), newGraph.getLabel());
    assertEquals(forumGraph.getProperties(), newGraph.getProperties());
    for (int i = 0; i < newVertices.size(); i++) {
        Vertex<Long, DefaultVertexData> oldVertex = oldVertices.get(i);
        Vertex<Long, DefaultVertexData> newVertex = newVertices.get(i);
        assertEquals(oldVertex.getId(), newVertex.getId());
        assertEquals(oldVertex.getValue().getProperties(), newVertex.getValue().getProperties());
        assertEquals(newVertex.getValue().getLabel(), "test_label");
    }
    for (int i = 0; i < newEdges.size(); i++) {
        Edge<Long, DefaultEdgeData> oldEdge = oldEdges.get(i);
        Edge<Long, DefaultEdgeData> newEdge = newEdges.get(i);
        assertEquals(oldEdge.getValue().getId(), newEdge.getValue().getId());
        assertEquals(oldEdge.getValue().getLabel(), newEdge.getValue().getLabel());
        assertEquals(newEdge.getValue().getProperties().get("test_property"), "test_value");
        assertNull(newEdge.getValue().getProperties().get(PROPERTY_KEY_SINCE));
    }
}`,"org.gradoop.model.impl.AbstractGraph.getGellyGraph_":
 `/**
 * Returns the internal Gelly graph representation. Must only be used by
 * inheriting classes.
 *
 * @return Gelly graph representation
 */
protected Graph<Long, VD, ED> getGellyGraph() {
    return this.graph;
}`,"org.gradoop.model.impl.DefaultEdgeData.<init>_":
 `/**
 * Default constructor is necessary to apply to POJO rules.
 */
public DefaultEdgeData() {
}`,"org.gradoop.model.impl.LogicalGraphProjectionTest$EdgeComparator.compare_DefaultEdgeData_DefaultEdgeData":
 ``,"org.gradoop.model.impl.DefaultGraphElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultGraphElement() {
}`,"org.gradoop.model.impl.AbstractGraph.getVertexData_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<VD> getVertexData() {
    return getVertices().map(new MapFunction<Vertex<Long, VD>, VD>() {

        @Override
        public VD map(Vertex<Long, VD> longVDVertex) throws Exception {
            return longVDVertex.getValue();
        }
    }).withForwardedFields("f1->*");
}`,"org.gradoop.model.impl.AbstractGraph.getEdgeCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public long getEdgeCount() throws Exception {
    return this.graph.numberOfEdges();
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest()",
  "otherKiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest()",
  "module" : "gradoop-flink",
  "name" : "LogicalGraphProjectionTest#projectionTest",
  "key" : "org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest_",
  "otherKey" : "org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest_",
  "parent" : null,
  "color" : "#00FF00",
  "statistic" : {
    "meanOld" : 4.244248006253333E9,
    "meanCurrent" : 2.3172236747466674E9,
    "deviationOld" : 5.680268569398884E7,
    "deviationCurrent" : 6.0337778475157134E7,
    "vms" : 30,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 127.36737881747993,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 2.9140492196653664E8,
  "inVMDeviation" : 1.957041583116462E7,
  "ess" : 0,
  "values" : [ 2.296532505E9, 2.4049413098E9, 2.2986223724E9, 2.274421448E9, 2.2969039954E9, 2.3248229398E9, 2.3089587886E9, 2.3286544978E9, 2.2961586472E9, 2.310808783E9, 2.2782037192E9, 2.2549328336E9, 2.4958171756E9, 2.3243768878E9, 2.2944637416E9, 2.311169835E9, 2.2831396784E9, 2.2889242342E9, 2.2591395552E9, 2.4658456422E9, 2.4576451166E9, 2.3130707036E9, 2.2771357952E9, 2.3296515258E9, 2.2681065834E9, 2.2938017354E9, 2.3028867268E9, 2.3060069304E9, 2.2539369898E9, 2.3176295456E9 ],
  "valuesPredecessor" : [ 4.2452546192E9, 4.2316515416E9, 4.2558619034E9, 4.2097273634E9, 4.1982489096E9, 4.1989716428E9, 4.407949815E9, 4.2186922732E9, 4.1914681764E9, 4.2585450144E9, 4.1715809436E9, 4.1898625376E9, 4.2919650456E9, 4.3467942416E9, 4.2153067962E9, 4.214329772E9, 4.2463729226E9, 4.2335868782E9, 4.1888692216E9, 4.3166663916E9, 4.265426311E9, 4.3372784064E9, 4.21964712E9, 4.2978440748E9, 4.1775385152E9, 4.2803025998E9, 4.2966938212E9, 4.2322019988E9, 4.1878057362E9, 4.2009955946E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 2.312090061E9,
        "variance" : 4.51016913859442E14,
        "n" : 2,
        "max" : 2.327107E9,
        "min" : 2.297073122E9,
        "sum" : 4.624180122E9,
        "standardDeviation" : 2.1237158799129464E7
      }, {
        "mean" : 2.286160801E9,
        "variance" : 2.437223264656257E15,
        "n" : 3,
        "max" : 2.317916393E9,
        "min" : 2.229284102E9,
        "sum" : 6.858482403E9,
        "standardDeviation" : 4.936824145800878E7
      } ],
      "1" : [ {
        "mean" : 2.419571393E9,
        "variance" : 3.1302900786867915E15,
        "n" : 2,
        "max" : 2.459133307E9,
        "min" : 2.380009479E9,
        "sum" : 4.839142786E9,
        "standardDeviation" : 5.594899533223802E7
      }, {
        "mean" : 2.37884949E9,
        "variance" : 3.0113269925888E15,
        "n" : 2,
        "max" : 2.41765237E9,
        "min" : 2.34004661E9,
        "sum" : 4.75769898E9,
        "standardDeviation" : 5.487555915513572E7
      }, {
        "mean" : 2.427864783E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 2.427864783E9,
        "min" : 2.427864783E9,
        "sum" : 2.427864783E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 2.267767664E9,
        "variance" : 4.389671094522368E15,
        "n" : 2,
        "max" : 2.314616736E9,
        "min" : 2.220918592E9,
        "sum" : 4.535535328E9,
        "standardDeviation" : 6.625459300699362E7
      }, {
        "mean" : 2.319192178E9,
        "variance" : 5.13150438680796E14,
        "n" : 3,
        "max" : 2.345126304E9,
        "min" : 2.303272782E9,
        "sum" : 6.957576534E9,
        "standardDeviation" : 2.265282407738152E7
      } ],
      "3" : [ {
        "mean" : 2.2646769623333335E9,
        "variance" : 2.6163952192924305E15,
        "n" : 3,
        "max" : 2.305249218E9,
        "min" : 2.207218072E9,
        "sum" : 6.794030887E9,
        "standardDeviation" : 5.115071083858396E7
      }, {
        "mean" : 2.2890381765E9,
        "variance" : 8.888146344437404E14,
        "n" : 2,
        "max" : 2.310119147E9,
        "min" : 2.267957206E9,
        "sum" : 4.578076353E9,
        "standardDeviation" : 2.9812994389087126E7
      } ],
      "4" : [ {
        "mean" : 2.338068373E9,
        "variance" : 3.1294061696871675E15,
        "n" : 2,
        "max" : 2.377624701E9,
        "min" : 2.298512045E9,
        "sum" : 4.676136746E9,
        "standardDeviation" : 5.59410955352786E7
      }, {
        "mean" : 2.269461077E9,
        "variance" : 1.727625195909487E15,
        "n" : 3,
        "max" : 2.314444424E9,
        "min" : 2.232478059E9,
        "sum" : 6.808383231E9,
        "standardDeviation" : 4.156471094461607E7
      } ],
      "5" : [ {
        "mean" : 2.3410521115E9,
        "variance" : 9.462965282736245E14,
        "n" : 2,
        "max" : 2.362804083E9,
        "min" : 2.31930014E9,
        "sum" : 4.682104223E9,
        "standardDeviation" : 3.0761933103653036E7
      }, {
        "mean" : 2.314003492E9,
        "variance" : 2.08515560788171E14,
        "n" : 3,
        "max" : 2.326799243E9,
        "min" : 2.298347262E9,
        "sum" : 6.942010476E9,
        "standardDeviation" : 1.4440067894167637E7
      } ],
      "6" : [ {
        "mean" : 2.3028041983333335E9,
        "variance" : 5.730305644344522E14,
        "n" : 3,
        "max" : 2.317801995E9,
        "min" : 2.275197338E9,
        "sum" : 6.908412595E9,
        "standardDeviation" : 2.3938056822441798E7
      }, {
        "mean" : 2.318190674E9,
        "variance" : 2.2282014535881803E14,
        "n" : 2,
        "max" : 2.328745771E9,
        "min" : 2.307635577E9,
        "sum" : 4.636381348E9,
        "standardDeviation" : 1.492716132956357E7
      } ],
      "7" : [ {
        "mean" : 2.3393205605E9,
        "variance" : 2.3004638087576447E14,
        "n" : 2,
        "max" : 2.350045447E9,
        "min" : 2.328595674E9,
        "sum" : 4.678641121E9,
        "standardDeviation" : 1.5167279943212114E7
      }, {
        "mean" : 2.3215437893333335E9,
        "variance" : 3.1865589002124495E15,
        "n" : 3,
        "max" : 2.368149526E9,
        "min" : 2.2587759E9,
        "sum" : 6.964631368E9,
        "standardDeviation" : 5.644961381809843E7
      } ],
      "8" : [ {
        "mean" : 2.283500005E9,
        "variance" : 4.589811008699168E15,
        "n" : 2,
        "max" : 2.331405177E9,
        "min" : 2.235594833E9,
        "sum" : 4.56700001E9,
        "standardDeviation" : 6.774814395021585E7
      }, {
        "mean" : 2.304597742E9,
        "variance" : 6.36477051322821E14,
        "n" : 3,
        "max" : 2.333729093E9,
        "min" : 2.290013546E9,
        "sum" : 6.913793226E9,
        "standardDeviation" : 2.5228496810607266E7
      } ],
      "9" : [ {
        "mean" : 2.328137328E9,
        "variance" : 1.0431745682E14,
        "n" : 2,
        "max" : 2.335359428E9,
        "min" : 2.320915228E9,
        "sum" : 4.656274656E9,
        "standardDeviation" : 1.021359176881473E7
      }, {
        "mean" : 2.2992564196666665E9,
        "variance" : 7.0323866215921336E13,
        "n" : 3,
        "max" : 2.305559719E9,
        "min" : 2.289738831E9,
        "sum" : 6.897769259E9,
        "standardDeviation" : 8385932.638408285
      } ],
      "10" : [ {
        "mean" : 2.2882545676666665E9,
        "variance" : 6.795473505999262E14,
        "n" : 3,
        "max" : 2.317973445E9,
        "min" : 2.26925525E9,
        "sum" : 6.864763703E9,
        "standardDeviation" : 2.606812901993402E7
      }, {
        "mean" : 2.2631274465E9,
        "variance" : 8.454362053039805E14,
        "n" : 2,
        "max" : 2.283687556E9,
        "min" : 2.242567337E9,
        "sum" : 4.526254893E9,
        "standardDeviation" : 2.9076385698775914E7
      } ],
      "11" : [ {
        "mean" : 2.2625934283333335E9,
        "variance" : 3.888717915253633E13,
        "n" : 3,
        "max" : 2.269664822E9,
        "min" : 2.257881414E9,
        "sum" : 6.787780285E9,
        "standardDeviation" : 6235958.559238213
      }, {
        "mean" : 2.2434419415E9,
        "variance" : 2.4290894589536453E14,
        "n" : 2,
        "max" : 2.25446258E9,
        "min" : 2.232421303E9,
        "sum" : 4.486883883E9,
        "standardDeviation" : 1.5585536432711083E7
      } ],
      "12" : [ {
        "mean" : 2.482544259E9,
        "variance" : 5.057521893566738E15,
        "n" : 2,
        "max" : 2.532831046E9,
        "min" : 2.432257472E9,
        "sum" : 4.965088518E9,
        "standardDeviation" : 7.111625618356705E7
      }, {
        "mean" : 2.48204038E9,
        "variance" : 1.2103600491312982E15,
        "n" : 2,
        "max" : 2.506640787E9,
        "min" : 2.457439973E9,
        "sum" : 4.96408076E9,
        "standardDeviation" : 3.479022921929803E7
      }, {
        "mean" : 2.5499166E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 2.5499166E9,
        "min" : 2.5499166E9,
        "sum" : 2.5499166E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 2.3090801913333335E9,
        "variance" : 3.7805422449468975E15,
        "n" : 3,
        "max" : 2.361873236E9,
        "min" : 2.241571468E9,
        "sum" : 6.927240574E9,
        "standardDeviation" : 6.148611424498134E7
      }, {
        "mean" : 2.3473219325E9,
        "variance" : 4.920261472174051E13,
        "n" : 2,
        "max" : 2.352281903E9,
        "min" : 2.342361962E9,
        "sum" : 4.694643865E9,
        "standardDeviation" : 7014457.550070462
      } ],
      "14" : [ {
        "mean" : 2.294867144E9,
        "variance" : 8.400150357984339E15,
        "n" : 2,
        "max" : 2.359675131E9,
        "min" : 2.230059157E9,
        "sum" : 4.589734288E9,
        "standardDeviation" : 9.165233416549924E7
      }, {
        "mean" : 2.2941948066666665E9,
        "variance" : 3.485229552846774E14,
        "n" : 3,
        "max" : 2.306300888E9,
        "min" : 2.27269492E9,
        "sum" : 6.88258442E9,
        "standardDeviation" : 1.866876951715558E7
      } ],
      "15" : [ {
        "mean" : 2.3282982535E9,
        "variance" : 7.68732917463405E13,
        "n" : 2,
        "max" : 2.334497983E9,
        "min" : 2.322098524E9,
        "sum" : 4.656596507E9,
        "standardDeviation" : 8767741.541944567
      }, {
        "mean" : 2.2997508893333335E9,
        "variance" : 1.965687519616013E14,
        "n" : 3,
        "max" : 2.312148838E9,
        "min" : 2.28453599E9,
        "sum" : 6.899252668E9,
        "standardDeviation" : 1.402029785566631E7
      } ],
      "16" : [ {
        "mean" : 2.2836241556666665E9,
        "variance" : 7.688771824286842E14,
        "n" : 3,
        "max" : 2.30455179E9,
        "min" : 2.252174563E9,
        "sum" : 6.850872467E9,
        "standardDeviation" : 2.7728634701850798E7
      }, {
        "mean" : 2.2824129625E9,
        "variance" : 6.827337618431446E14,
        "n" : 2,
        "max" : 2.300889079E9,
        "min" : 2.263936846E9,
        "sum" : 4.564825925E9,
        "standardDeviation" : 2.612917453428532E7
      } ],
      "17" : [ {
        "mean" : 2.313700102E9,
        "variance" : 1.47470974083938E14,
        "n" : 2,
        "max" : 2.322287039E9,
        "min" : 2.305113165E9,
        "sum" : 4.627400204E9,
        "standardDeviation" : 1.2143762764643338E7
      }, {
        "mean" : 2.272406989E9,
        "variance" : 3.4371836872283315E15,
        "n" : 3,
        "max" : 2.319935347E9,
        "min" : 2.206893857E9,
        "sum" : 6.817220967E9,
        "standardDeviation" : 5.8627499411354154E7
      } ],
      "18" : [ {
        "mean" : 2.2484048403333335E9,
        "variance" : 7.545289420140704E14,
        "n" : 3,
        "max" : 2.2667179E9,
        "min" : 2.216820586E9,
        "sum" : 6.745214521E9,
        "standardDeviation" : 2.7468690212932803E7
      }, {
        "mean" : 2.2752416275E9,
        "variance" : 1.2205086015001248E14,
        "n" : 2,
        "max" : 2.283053505E9,
        "min" : 2.26742975E9,
        "sum" : 4.550483255E9,
        "standardDeviation" : 1.1047663108097227E7
      } ],
      "19" : [ {
        "mean" : 2.4856011275E9,
        "variance" : 3.839500098990405E14,
        "n" : 2,
        "max" : 2.499456632E9,
        "min" : 2.471745623E9,
        "sum" : 4.971202255E9,
        "standardDeviation" : 1.959464237742145E7
      }, {
        "mean" : 2.4477892575E9,
        "variance" : 1.1448329261526048E15,
        "n" : 2,
        "max" : 2.471714484E9,
        "min" : 2.423864031E9,
        "sum" : 4.895578515E9,
        "standardDeviation" : 3.383537979914818E7
      }, {
        "mean" : 2.462447441E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 2.462447441E9,
        "min" : 2.462447441E9,
        "sum" : 2.462447441E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 2.441401602E9,
        "variance" : 2.962550526601842E15,
        "n" : 2,
        "max" : 2.479888941E9,
        "min" : 2.402914263E9,
        "sum" : 4.882803204E9,
        "standardDeviation" : 5.442931679345095E7
      }, {
        "mean" : 2.4780477515E9,
        "variance" : 6.479078072793604E14,
        "n" : 2,
        "max" : 2.496046471E9,
        "min" : 2.460049032E9,
        "sum" : 4.956095503E9,
        "standardDeviation" : 2.545403322224909E7
      }, {
        "mean" : 2.449326876E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 2.449326876E9,
        "min" : 2.449326876E9,
        "sum" : 2.449326876E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 2.284626935E9,
        "variance" : 7.49952151522802E14,
        "n" : 2,
        "max" : 2.303991234E9,
        "min" : 2.265262636E9,
        "sum" : 4.56925387E9,
        "standardDeviation" : 2.7385254271647763E7
      }, {
        "mean" : 2.332033216E9,
        "variance" : 1.3629597681930792E15,
        "n" : 3,
        "max" : 2.368346811E9,
        "min" : 2.294538583E9,
        "sum" : 6.996099648E9,
        "standardDeviation" : 3.691828501153702E7
      } ],
      "22" : [ {
        "mean" : 2.275229207E9,
        "variance" : 1.389869385369992E15,
        "n" : 2,
        "max" : 2.301590821E9,
        "min" : 2.248867593E9,
        "sum" : 4.550458414E9,
        "standardDeviation" : 3.7280952044844456E7
      }, {
        "mean" : 2.278406854E9,
        "variance" : 5.75065238775589E14,
        "n" : 3,
        "max" : 2.299348841E9,
        "min" : 2.252247007E9,
        "sum" : 6.835220562E9,
        "standardDeviation" : 2.398051790048724E7
      } ],
      "23" : [ {
        "mean" : 2.3053299726666665E9,
        "variance" : 3.7098985043269955E15,
        "n" : 3,
        "max" : 2.34968712E9,
        "min" : 2.235883745E9,
        "sum" : 6.915989918E9,
        "standardDeviation" : 6.090893616151078E7
      }, {
        "mean" : 2.3661338555E9,
        "variance" : 2.955236166001845E14,
        "n" : 2,
        "max" : 2.378289587E9,
        "min" : 2.353978124E9,
        "sum" : 4.732267711E9,
        "standardDeviation" : 1.7190800347865846E7
      } ],
      "24" : [ {
        "mean" : 2.2740827286666665E9,
        "variance" : 1.0361562216453631E14,
        "n" : 3,
        "max" : 2.284633539E9,
        "min" : 2.264321131E9,
        "sum" : 6.822248186E9,
        "standardDeviation" : 1.017917590792773E7
      }, {
        "mean" : 2.2591423655E9,
        "variance" : 1.920300428487005E14,
        "n" : 2,
        "max" : 2.268941091E9,
        "min" : 2.24934364E9,
        "sum" : 4.518284731E9,
        "standardDeviation" : 1.3857490496071087E7
      } ],
      "25" : [ {
        "mean" : 2.2965588563333335E9,
        "variance" : 4.422569105520933E13,
        "n" : 3,
        "max" : 2.300897433E9,
        "min" : 2.288902469E9,
        "sum" : 6.889676569E9,
        "standardDeviation" : 6650239.924635
      }, {
        "mean" : 2.289666054E9,
        "variance" : 4.1931185184799994E11,
        "n" : 2,
        "max" : 2.290123936E9,
        "min" : 2.289208172E9,
        "sum" : 4.579332108E9,
        "standardDeviation" : 647542.9343665175
      } ],
      "26" : [ {
        "mean" : 2.294242195E9,
        "variance" : 1.1902062048330792E15,
        "n" : 3,
        "max" : 2.334061792E9,
        "min" : 2.273329413E9,
        "sum" : 6.882726585E9,
        "standardDeviation" : 3.449936528159727E7
      }, {
        "mean" : 2.3158535245E9,
        "variance" : 9.64463966511125E13,
        "n" : 2,
        "max" : 2.322797817E9,
        "min" : 2.308909232E9,
        "sum" : 4.631707049E9,
        "standardDeviation" : 9820712.634585766
      } ],
      "27" : [ {
        "mean" : 2.2754550615E9,
        "variance" : 3.441285745200113E15,
        "n" : 2,
        "max" : 2.316935694E9,
        "min" : 2.233974429E9,
        "sum" : 4.550910123E9,
        "standardDeviation" : 5.866247305731419E7
      }, {
        "mean" : 2.326374843E9,
        "variance" : 4.8087894853133206E14,
        "n" : 3,
        "max" : 2.350511781E9,
        "min" : 2.307678017E9,
        "sum" : 6.979124529E9,
        "standardDeviation" : 2.192895228986857E7
      } ],
      "28" : [ {
        "mean" : 2.2566585273333335E9,
        "variance" : 5.987240052992364E14,
        "n" : 3,
        "max" : 2.275062093E9,
        "min" : 2.228890496E9,
        "sum" : 6.769975582E9,
        "standardDeviation" : 2.4468837432522953E7
      }, {
        "mean" : 2.2498546835E9,
        "variance" : 1.1721420260651248E14,
        "n" : 2,
        "max" : 2.257510211E9,
        "min" : 2.242199156E9,
        "sum" : 4.499709367E9,
        "standardDeviation" : 1.0826550817620194E7
      } ],
      "29" : [ {
        "mean" : 2.3118660205E9,
        "variance" : 1.1206178060280502E13,
        "n" : 2,
        "max" : 2.314233105E9,
        "min" : 2.309498936E9,
        "sum" : 4.623732041E9,
        "standardDeviation" : 3347563.0031831367
      }, {
        "mean" : 2.3214718956666665E9,
        "variance" : 3.785483811575463E14,
        "n" : 3,
        "max" : 2.336457153E9,
        "min" : 2.299483408E9,
        "sum" : 6.964415687E9,
        "standardDeviation" : 1.9456319825638823E7
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.789301268E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.789301268E9,
        "min" : 4.789301268E9,
        "sum" : 4.789301268E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.298484725E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.298484725E9,
        "min" : 4.298484725E9,
        "sum" : 4.298484725E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.032938927E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.032938927E9,
        "min" : 4.032938927E9,
        "sum" : 4.032938927E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.075601435E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.075601435E9,
        "min" : 4.075601435E9,
        "sum" : 4.075601435E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.029946741E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.029946741E9,
        "min" : 4.029946741E9,
        "sum" : 4.029946741E9,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4.632634686E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.632634686E9,
        "min" : 4.632634686E9,
        "sum" : 4.632634686E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.459717971E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.459717971E9,
        "min" : 4.459717971E9,
        "sum" : 4.459717971E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.984589653E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.984589653E9,
        "min" : 3.984589653E9,
        "sum" : 3.984589653E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.039185093E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.039185093E9,
        "min" : 4.039185093E9,
        "sum" : 4.039185093E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.042130305E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.042130305E9,
        "min" : 4.042130305E9,
        "sum" : 4.042130305E9,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4.735945334E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.735945334E9,
        "min" : 4.735945334E9,
        "sum" : 4.735945334E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.308833769E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.308833769E9,
        "min" : 4.308833769E9,
        "sum" : 4.308833769E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.046346563E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.046346563E9,
        "min" : 4.046346563E9,
        "sum" : 4.046346563E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.140118344E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.140118344E9,
        "min" : 4.140118344E9,
        "sum" : 4.140118344E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.048065507E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.048065507E9,
        "min" : 4.048065507E9,
        "sum" : 4.048065507E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.712322729E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.712322729E9,
        "min" : 4.712322729E9,
        "sum" : 4.712322729E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.218326726E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.218326726E9,
        "min" : 4.218326726E9,
        "sum" : 4.218326726E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.02417707E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.02417707E9,
        "min" : 4.02417707E9,
        "sum" : 4.02417707E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.046905146E9,
        "variance" : 3.7112151678386688E16,
        "n" : 2,
        "max" : 4.183125834E9,
        "min" : 3.910684458E9,
        "sum" : 8.093810292E9,
        "standardDeviation" : 1.9264514444539392E8
      } ],
      "4" : [ {
        "mean" : 4.630401786E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.630401786E9,
        "min" : 4.630401786E9,
        "sum" : 4.630401786E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.27853992E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.27853992E9,
        "min" : 4.27853992E9,
        "sum" : 4.27853992E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.01366807E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.01366807E9,
        "min" : 4.01366807E9,
        "sum" : 4.01366807E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.12069898E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.12069898E9,
        "min" : 4.12069898E9,
        "sum" : 4.12069898E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.947935792E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.947935792E9,
        "min" : 3.947935792E9,
        "sum" : 3.947935792E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.66471763E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.66471763E9,
        "min" : 4.66471763E9,
        "sum" : 4.66471763E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.246427753E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.246427753E9,
        "min" : 4.246427753E9,
        "sum" : 4.246427753E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.07524239E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.07524239E9,
        "min" : 4.07524239E9,
        "sum" : 4.07524239E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.993315716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.993315716E9,
        "min" : 3.993315716E9,
        "sum" : 3.993315716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.015154725E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.015154725E9,
        "min" : 4.015154725E9,
        "sum" : 4.015154725E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.6340629665E9,
        "variance" : 1.47706373957293216E17,
        "n" : 2,
        "max" : 4.905822395E9,
        "min" : 4.362303538E9,
        "sum" : 9.268125933E9,
        "standardDeviation" : 3.843258694874614E8
      }, {
        "mean" : 4.289889914E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.289889914E9,
        "min" : 4.289889914E9,
        "sum" : 4.289889914E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.256093174E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.256093174E9,
        "min" : 4.256093174E9,
        "sum" : 4.256093174E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.225640054E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.225640054E9,
        "min" : 4.225640054E9,
        "sum" : 4.225640054E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.737958821E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.737958821E9,
        "min" : 4.737958821E9,
        "sum" : 4.737958821E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.250768129E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.250768129E9,
        "min" : 4.250768129E9,
        "sum" : 4.250768129E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.098061238E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.098061238E9,
        "min" : 4.098061238E9,
        "sum" : 4.098061238E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.052954428E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.052954428E9,
        "min" : 4.052954428E9,
        "sum" : 4.052954428E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.95371875E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.95371875E9,
        "min" : 3.95371875E9,
        "sum" : 3.95371875E9,
        "standardDeviation" : 0.0
      } ],
      "8" : [ {
        "mean" : 4.693249565E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.693249565E9,
        "min" : 4.693249565E9,
        "sum" : 4.693249565E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.285635252E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.285635252E9,
        "min" : 4.285635252E9,
        "sum" : 4.285635252E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.961846686E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.961846686E9,
        "min" : 3.961846686E9,
        "sum" : 3.961846686E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.940168201E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.940168201E9,
        "min" : 3.940168201E9,
        "sum" : 3.940168201E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.076441178E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.076441178E9,
        "min" : 4.076441178E9,
        "sum" : 4.076441178E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.780084661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.780084661E9,
        "min" : 4.780084661E9,
        "sum" : 4.780084661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.30731995E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.30731995E9,
        "min" : 4.30731995E9,
        "sum" : 4.30731995E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.022179139E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.022179139E9,
        "min" : 4.022179139E9,
        "sum" : 4.022179139E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.147054355E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.147054355E9,
        "min" : 4.147054355E9,
        "sum" : 4.147054355E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.036086967E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.036086967E9,
        "min" : 4.036086967E9,
        "sum" : 4.036086967E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.556410914E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.556410914E9,
        "min" : 4.556410914E9,
        "sum" : 4.556410914E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.285373914E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.285373914E9,
        "min" : 4.285373914E9,
        "sum" : 4.285373914E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.050396326E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.050396326E9,
        "min" : 4.050396326E9,
        "sum" : 4.050396326E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.982861782E9,
        "variance" : 5.483886088472711E15,
        "n" : 2,
        "max" : 4.035225348E9,
        "min" : 3.930498216E9,
        "sum" : 7.965723564E9,
        "standardDeviation" : 7.405326521141867E7
      } ],
      "11" : [ {
        "mean" : 4.628216474E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.628216474E9,
        "min" : 4.628216474E9,
        "sum" : 4.628216474E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.243733345E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.243733345E9,
        "min" : 4.243733345E9,
        "sum" : 4.243733345E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.037151916E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.037151916E9,
        "min" : 4.037151916E9,
        "sum" : 4.037151916E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0201054765E9,
        "variance" : 7.436877310905245E14,
        "n" : 2,
        "max" : 4.03938873E9,
        "min" : 4.000822223E9,
        "sum" : 8.040210953E9,
        "standardDeviation" : 2.7270638626378454E7
      } ],
      "12" : [ {
        "mean" : 4.79936637E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.79936637E9,
        "min" : 4.79936637E9,
        "sum" : 4.79936637E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.476095028E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.476095028E9,
        "min" : 4.476095028E9,
        "sum" : 4.476095028E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.116051502E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.116051502E9,
        "min" : 4.116051502E9,
        "sum" : 4.116051502E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.139240454E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.139240454E9,
        "min" : 4.139240454E9,
        "sum" : 4.139240454E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.929071874E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.929071874E9,
        "min" : 3.929071874E9,
        "sum" : 3.929071874E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.844405158E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.844405158E9,
        "min" : 4.844405158E9,
        "sum" : 4.844405158E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.437510003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.437510003E9,
        "min" : 4.437510003E9,
        "sum" : 4.437510003E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.161648512E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.161648512E9,
        "min" : 4.161648512E9,
        "sum" : 4.161648512E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.218196132E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.218196132E9,
        "min" : 4.218196132E9,
        "sum" : 4.218196132E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.072211403E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.072211403E9,
        "min" : 4.072211403E9,
        "sum" : 4.072211403E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.706438387E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.706438387E9,
        "min" : 4.706438387E9,
        "sum" : 4.706438387E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.300305748E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.300305748E9,
        "min" : 4.300305748E9,
        "sum" : 4.300305748E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.064561538E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.064561538E9,
        "min" : 4.064561538E9,
        "sum" : 4.064561538E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.024347561E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.024347561E9,
        "min" : 4.024347561E9,
        "sum" : 4.024347561E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.980880747E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.980880747E9,
        "min" : 3.980880747E9,
        "sum" : 3.980880747E9,
        "standardDeviation" : 0.0
      } ],
      "15" : [ {
        "mean" : 4.694711357E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.694711357E9,
        "min" : 4.694711357E9,
        "sum" : 4.694711357E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.399876702E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.399876702E9,
        "min" : 4.399876702E9,
        "sum" : 4.399876702E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.977040657E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.977040657E9,
        "min" : 3.977040657E9,
        "sum" : 3.977040657E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.919922448E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.919922448E9,
        "min" : 3.919922448E9,
        "sum" : 3.919922448E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.080097696E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.080097696E9,
        "min" : 4.080097696E9,
        "sum" : 4.080097696E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.624144865E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.624144865E9,
        "min" : 4.624144865E9,
        "sum" : 4.624144865E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.415473234E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.415473234E9,
        "min" : 4.415473234E9,
        "sum" : 4.415473234E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.060352966E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.060352966E9,
        "min" : 4.060352966E9,
        "sum" : 4.060352966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.009386833E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.009386833E9,
        "min" : 4.009386833E9,
        "sum" : 4.009386833E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.122506715E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.122506715E9,
        "min" : 4.122506715E9,
        "sum" : 4.122506715E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.71162366E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.71162366E9,
        "min" : 4.71162366E9,
        "sum" : 4.71162366E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.430968123E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.430968123E9,
        "min" : 4.430968123E9,
        "sum" : 4.430968123E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.980604839E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.980604839E9,
        "min" : 3.980604839E9,
        "sum" : 3.980604839E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.070244664E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.070244664E9,
        "min" : 4.070244664E9,
        "sum" : 4.070244664E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.974493105E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.974493105E9,
        "min" : 3.974493105E9,
        "sum" : 3.974493105E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.544270799E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.544270799E9,
        "min" : 4.544270799E9,
        "sum" : 4.544270799E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.338166022E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.338166022E9,
        "min" : 4.338166022E9,
        "sum" : 4.338166022E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.99127051E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.99127051E9,
        "min" : 3.99127051E9,
        "sum" : 3.99127051E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0353193885E9,
        "variance" : 3.563371668567605E14,
        "n" : 2,
        "max" : 4.048667369E9,
        "min" : 4.021971408E9,
        "sum" : 8.070638777E9,
        "standardDeviation" : 1.8876895053391606E7
      } ],
      "19" : [ {
        "mean" : 4.728324019E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.728324019E9,
        "min" : 4.728324019E9,
        "sum" : 4.728324019E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.483839626E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.483839626E9,
        "min" : 4.483839626E9,
        "sum" : 4.483839626E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.100645951E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.100645951E9,
        "min" : 4.100645951E9,
        "sum" : 4.100645951E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.187715027E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.187715027E9,
        "min" : 4.187715027E9,
        "sum" : 4.187715027E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.082807335E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.082807335E9,
        "min" : 4.082807335E9,
        "sum" : 4.082807335E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.649005834E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.649005834E9,
        "min" : 4.649005834E9,
        "sum" : 4.649005834E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.497300705E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.497300705E9,
        "min" : 4.497300705E9,
        "sum" : 4.497300705E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.052912245E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.052912245E9,
        "min" : 4.052912245E9,
        "sum" : 4.052912245E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.030571529E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.030571529E9,
        "min" : 4.030571529E9,
        "sum" : 4.030571529E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.097341242E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.097341242E9,
        "min" : 4.097341242E9,
        "sum" : 4.097341242E9,
        "standardDeviation" : 0.0
      } ],
      "21" : [ {
        "mean" : 4.809883619E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.809883619E9,
        "min" : 4.809883619E9,
        "sum" : 4.809883619E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.323831426E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.323831426E9,
        "min" : 4.323831426E9,
        "sum" : 4.323831426E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.125553163E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.125553163E9,
        "min" : 4.125553163E9,
        "sum" : 4.125553163E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.264319381E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.264319381E9,
        "min" : 4.264319381E9,
        "sum" : 4.264319381E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.162804443E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.162804443E9,
        "min" : 4.162804443E9,
        "sum" : 4.162804443E9,
        "standardDeviation" : 0.0
      } ],
      "22" : [ {
        "mean" : 4.67520625E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.67520625E9,
        "min" : 4.67520625E9,
        "sum" : 4.67520625E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.311078759E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.311078759E9,
        "min" : 4.311078759E9,
        "sum" : 4.311078759E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.053559162E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.053559162E9,
        "min" : 4.053559162E9,
        "sum" : 4.053559162E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.027652856E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.027652856E9,
        "min" : 4.027652856E9,
        "sum" : 4.027652856E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.030738573E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.030738573E9,
        "min" : 4.030738573E9,
        "sum" : 4.030738573E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.755262483E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.755262483E9,
        "min" : 4.755262483E9,
        "sum" : 4.755262483E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.422604786E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.422604786E9,
        "min" : 4.422604786E9,
        "sum" : 4.422604786E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.111868065E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.111868065E9,
        "min" : 4.111868065E9,
        "sum" : 4.111868065E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.152155851E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.152155851E9,
        "min" : 4.152155851E9,
        "sum" : 4.152155851E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.047329189E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.047329189E9,
        "min" : 4.047329189E9,
        "sum" : 4.047329189E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.590312224E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.590312224E9,
        "min" : 4.590312224E9,
        "sum" : 4.590312224E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.22457932E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.22457932E9,
        "min" : 4.22457932E9,
        "sum" : 4.22457932E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.045436935E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.045436935E9,
        "min" : 4.045436935E9,
        "sum" : 4.045436935E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0136820485E9,
        "variance" : 1.1826979052811122E15,
        "n" : 2,
        "max" : 4.037999716E9,
        "min" : 3.989364381E9,
        "sum" : 8.027364097E9,
        "standardDeviation" : 3.439037518377943E7
      } ],
      "25" : [ {
        "mean" : 4.744276832E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.744276832E9,
        "min" : 4.744276832E9,
        "sum" : 4.744276832E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.286167287E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286167287E9,
        "min" : 4.286167287E9,
        "sum" : 4.286167287E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.139682661E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.139682661E9,
        "min" : 4.139682661E9,
        "sum" : 4.139682661E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.067747085E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.067747085E9,
        "min" : 4.067747085E9,
        "sum" : 4.067747085E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.163639134E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.163639134E9,
        "min" : 4.163639134E9,
        "sum" : 4.163639134E9,
        "standardDeviation" : 0.0
      } ],
      "26" : [ {
        "mean" : 4.763318259E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.763318259E9,
        "min" : 4.763318259E9,
        "sum" : 4.763318259E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.252243939E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.252243939E9,
        "min" : 4.252243939E9,
        "sum" : 4.252243939E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.330799699E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.330799699E9,
        "min" : 4.330799699E9,
        "sum" : 4.330799699E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.057299889E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.057299889E9,
        "min" : 4.057299889E9,
        "sum" : 4.057299889E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.07980732E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.07980732E9,
        "min" : 4.07980732E9,
        "sum" : 4.07980732E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.678507954E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.678507954E9,
        "min" : 4.678507954E9,
        "sum" : 4.678507954E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.325591808E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.325591808E9,
        "min" : 4.325591808E9,
        "sum" : 4.325591808E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.127764151E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.127764151E9,
        "min" : 4.127764151E9,
        "sum" : 4.127764151E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.084572591E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.084572591E9,
        "min" : 4.084572591E9,
        "sum" : 4.084572591E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.94457349E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.94457349E9,
        "min" : 3.94457349E9,
        "sum" : 3.94457349E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.678631514E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.678631514E9,
        "min" : 4.678631514E9,
        "sum" : 4.678631514E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.268945664E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.268945664E9,
        "min" : 4.268945664E9,
        "sum" : 4.268945664E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.99520539E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.99520539E9,
        "min" : 3.99520539E9,
        "sum" : 3.99520539E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.9981230565E9,
        "variance" : 1.119180794670125E14,
        "n" : 2,
        "max" : 4.005603634E9,
        "min" : 3.990642479E9,
        "sum" : 7.996246113E9,
        "standardDeviation" : 1.0579134154883021E7
      } ],
      "29" : [ {
        "mean" : 4.73418766E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.73418766E9,
        "min" : 4.73418766E9,
        "sum" : 4.73418766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.249535193E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.249535193E9,
        "min" : 4.249535193E9,
        "sum" : 4.249535193E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.044073944E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.044073944E9,
        "min" : 4.044073944E9,
        "sum" : 4.044073944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.935685828E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.935685828E9,
        "min" : 3.935685828E9,
        "sum" : 3.935685828E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.041495348E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.041495348E9,
        "min" : 4.041495348E9,
        "sum" : 4.041495348E9,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ {
    "call" : "org.gradoop.model.impl.AbstractGraph#getGellyGraph",
    "kiekerPattern" : "protected org.apache.flink.graph.Graph org.gradoop.model.impl.AbstractGraph.getGellyGraph()",
    "otherKiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getVertexData()",
    "module" : "gradoop-flink",
    "name" : "AbstractGraph#getGellyGraph",
    "key" : "org.gradoop.model.impl.AbstractGraph.getGellyGraph_",
    "otherKey" : "org.gradoop.model.impl.AbstractGraph.getVertexData_",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 316.9133552271484,
      "meanCurrent" : 793317.7375283447,
      "deviationOld" : 24.37963190478196,
      "deviationCurrent" : 58788.77231490362,
      "vms" : 28,
      "callsOld" : 1350,
      "calls" : 450,
      "tvalue" : -71.3769896334941,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 203.38342401502703,
    "inVMDeviation" : 842062.4072668456,
    "ess" : 1,
    "values" : [ 844223.6857142857, 826215.7666666667, 825879.3333333334, 801877.8, 4945761.533333333, 743661.5222222222, 732663.0666666667, 851080.619047619, 896425.4444444444, 742241.3333333334, 809490.0333333333, 827881.8857142857, 787255.8666666667, 773057.0222222222, 5092068.377777779, 734308.4222222221, 749840.5111111111, 708769.8, 844375.4444444444, 818857.8476190476, 827226.1666666666, 775143.4111111112, 857455.9444444445, 724986.1555555555, 793516.3888888889, 708229.0555555556, 736662.419047619, 734459.6666666666, 789169.2095238095, 947942.8285714287 ],
    "valuesPredecessor" : [ 336.55555555555554, 316.6222222222222, 305.6388888888889, 304.09722222222223, 304.6380952380953, 362.3027777777778, 295.4539682539683, 308.1111111111111, 322.61587301587304, 312.25555555555553, 529.6305555555556, 309.99444444444447, 344.825, 297.9, 339.31388888888887, 331.7138888888889, 285.18333333333334, 336.21666666666664, 293.99047619047616, 364.9, 320.16190476190474, 322.31111111111113, 277.05, 329.625, 302.3888888888889, 351.0361111111111, 310.0444444444444, 263.5047619047619, 299.26944444444445, 342.76666666666665 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1725235.1428571427,
          "variance" : 1.8477088708168096E12,
          "n" : 2,
          "max" : 4632245.0,
          "min" : 882658.0,
          "sum" : 3450470.2857142854,
          "standardDeviation" : 1359304.5541072867
        }, {
          "mean" : 806930.25,
          "variance" : 8.158260364250003E9,
          "n" : 4,
          "max" : 928617.0,
          "min" : 712382.0,
          "sum" : 3227721.0,
          "standardDeviation" : 90323.08876610677
        }, {
          "mean" : 708731.0,
          "variance" : 5.563989996666667E9,
          "n" : 4,
          "max" : 785300.0,
          "min" : 636013.0,
          "sum" : 2834924.0,
          "standardDeviation" : 74592.1577423972
        }, {
          "mean" : 630048.0,
          "variance" : 9.453100675000002E9,
          "n" : 5,
          "max" : 781957.0,
          "min" : 529843.0,
          "sum" : 3150240.0,
          "standardDeviation" : 97227.05731945198
        } ],
        "1" : [ {
          "mean" : 1869792.5,
          "variance" : 9.243074096031E11,
          "n" : 1,
          "max" : 3071731.0,
          "min" : 981709.0,
          "sum" : 1869792.5,
          "standardDeviation" : 961409.0750575948
        }, {
          "mean" : 822571.8,
          "variance" : 6.799520313199998E9,
          "n" : 5,
          "max" : 959099.0,
          "min" : 740053.0,
          "sum" : 4112859.0,
          "standardDeviation" : 82459.20393261142
        }, {
          "mean" : 762507.5,
          "variance" : 5.174449427666668E9,
          "n" : 4,
          "max" : 865017.0,
          "min" : 707495.0,
          "sum" : 3050030.0,
          "standardDeviation" : 71933.64600565349
        }, {
          "mean" : 698562.5,
          "variance" : 1.1914910345666668E10,
          "n" : 4,
          "max" : 789154.0,
          "min" : 545969.0,
          "sum" : 2794250.0,
          "standardDeviation" : 109155.44120961936
        }, {
          "mean" : 566305.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 566305.0,
          "min" : 566305.0,
          "sum" : 566305.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1928990.0000000002,
          "variance" : 3.6237508191540005E12,
          "n" : 1,
          "max" : 5783918.0,
          "min" : 909039.0,
          "sum" : 1928990.0000000002,
          "standardDeviation" : 1903615.197237614
        }, {
          "mean" : 942253.4,
          "variance" : 1.6481506708799997E10,
          "n" : 5,
          "max" : 1060112.0,
          "min" : 737753.0,
          "sum" : 4711267.0,
          "standardDeviation" : 128380.32056666628
        }, {
          "mean" : 673346.0,
          "variance" : 1.6260372720000002E9,
          "n" : 4,
          "max" : 720458.0,
          "min" : 624490.0,
          "sum" : 2693384.0,
          "standardDeviation" : 40324.152464745
        }, {
          "mean" : 626851.5,
          "variance" : 5.036018127E9,
          "n" : 4,
          "max" : 703050.0,
          "min" : 556737.0,
          "sum" : 2507406.0,
          "standardDeviation" : 70964.9077150108
        }, {
          "mean" : 547143.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 547143.0,
          "min" : 547143.0,
          "sum" : 547143.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1581013.0,
          "variance" : 4.977818563887999E11,
          "n" : 1,
          "max" : 2960065.0,
          "min" : 1044294.0,
          "sum" : 1581013.0,
          "standardDeviation" : 705536.5733885097
        }, {
          "mean" : 896146.0,
          "variance" : 1.0268659824499996E10,
          "n" : 5,
          "max" : 1020664.0,
          "min" : 807331.0,
          "sum" : 4480730.0,
          "standardDeviation" : 101334.39605829798
        }, {
          "mean" : 656644.25,
          "variance" : 1.89075412825E9,
          "n" : 4,
          "max" : 703940.0,
          "min" : 604096.0,
          "sum" : 2626577.0,
          "standardDeviation" : 43482.802672435915
        }, {
          "mean" : 667969.4,
          "variance" : 1.27465586153E10,
          "n" : 5,
          "max" : 779847.0,
          "min" : 539159.0,
          "sum" : 3339847.0,
          "standardDeviation" : 112900.65817035788
        } ],
        "4" : [ {
          "mean" : 828626.6666666666,
          "variance" : 2.140190051506666E10,
          "n" : 6,
          "max" : 1010952.0,
          "min" : 607834.0,
          "sum" : 4971760.0,
          "standardDeviation" : 146293.88406583053
        }, {
          "mean" : 737772.0,
          "variance" : 2.1896077076666664E10,
          "n" : 4,
          "max" : 923378.0,
          "min" : 579255.0,
          "sum" : 2951088.0,
          "standardDeviation" : 147973.23094623117
        }, {
          "mean" : 1.3252715E7,
          "variance" : 7.797241988893825E14,
          "n" : 5,
          "max" : 6.3202762E7,
          "min" : 511973.0,
          "sum" : 6.6263575E7,
          "standardDeviation" : 2.7923542019045193E7
        } ],
        "5" : [ {
          "mean" : 1533383.8333333333,
          "variance" : 6.633055939765667E11,
          "n" : 1,
          "max" : 3069110.0,
          "min" : 992043.0,
          "sum" : 1533383.8333333333,
          "standardDeviation" : 814435.7519022397
        }, {
          "mean" : 739024.6,
          "variance" : 1.9994623874799995E10,
          "n" : 5,
          "max" : 964320.0,
          "min" : 611720.0,
          "sum" : 3695123.0,
          "standardDeviation" : 141402.34748687872
        }, {
          "mean" : 685585.75,
          "variance" : 1.394192682825E10,
          "n" : 4,
          "max" : 854140.0,
          "min" : 597154.0,
          "sum" : 2742343.0,
          "standardDeviation" : 118075.93670282696
        }, {
          "mean" : 651364.75,
          "variance" : 1.2983480827583328E10,
          "n" : 4,
          "max" : 744594.0,
          "min" : 505280.0,
          "sum" : 2605459.0,
          "standardDeviation" : 113945.07811916813
        }, {
          "mean" : 578614.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 578614.0,
          "min" : 578614.0,
          "sum" : 578614.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 842910.0,
          "variance" : 2.4308341569600002E10,
          "n" : 6,
          "max" : 1030029.0,
          "min" : 630403.0,
          "sum" : 5057460.0,
          "standardDeviation" : 155911.32598243144
        }, {
          "mean" : 715933.5,
          "variance" : 8.399937419666666E9,
          "n" : 4,
          "max" : 840781.0,
          "min" : 621717.0,
          "sum" : 2863734.0,
          "standardDeviation" : 91651.17249477317
        }, {
          "mean" : 613750.4,
          "variance" : 1.01801504758E10,
          "n" : 5,
          "max" : 786853.0,
          "min" : 532845.0,
          "sum" : 3068752.0,
          "standardDeviation" : 100896.73173993298
        } ],
        "7" : [ {
          "mean" : 1407312.1428571427,
          "variance" : 3.561713671414761E11,
          "n" : 2,
          "max" : 2686610.0,
          "min" : 934517.0,
          "sum" : 2814624.2857142854,
          "standardDeviation" : 596800.9443201947
        }, {
          "mean" : 922263.0,
          "variance" : 7.788174833333332E9,
          "n" : 4,
          "max" : 1022120.0,
          "min" : 813986.0,
          "sum" : 3689052.0,
          "standardDeviation" : 88250.63644718565
        }, {
          "mean" : 722764.5,
          "variance" : 6.541138310333338E9,
          "n" : 4,
          "max" : 786977.0,
          "min" : 604601.0,
          "sum" : 2891058.0,
          "standardDeviation" : 80877.3040496117
        }, {
          "mean" : 675225.75,
          "variance" : 5.90344088425E9,
          "n" : 4,
          "max" : 744386.0,
          "min" : 565370.0,
          "sum" : 2700903.0,
          "standardDeviation" : 76833.85246263524
        }, {
          "mean" : 670572.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 670572.0,
          "min" : 670572.0,
          "sum" : 670572.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 3331723.6666666665,
          "variance" : 2.391076833290147E13,
          "n" : 1,
          "max" : 1.3297349E7,
          "min" : 1086232.0,
          "sum" : 3331723.6666666665,
          "standardDeviation" : 4889863.835824211
        }, {
          "mean" : 884447.8,
          "variance" : 5.02189994677E10,
          "n" : 5,
          "max" : 1222311.0,
          "min" : 635312.0,
          "sum" : 4422239.0,
          "standardDeviation" : 224095.96040022676
        }, {
          "mean" : 659772.5,
          "variance" : 8.940599673666666E9,
          "n" : 4,
          "max" : 772622.0,
          "min" : 576464.0,
          "sum" : 2639090.0,
          "standardDeviation" : 94554.74432130133
        }, {
          "mean" : 610665.8,
          "variance" : 8.423715736699999E9,
          "n" : 5,
          "max" : 723707.0,
          "min" : 506560.0,
          "sum" : 3053329.0,
          "standardDeviation" : 91780.80265883492
        } ],
        "9" : [ {
          "mean" : 893678.0,
          "variance" : 2.75129882784E10,
          "n" : 6,
          "max" : 1099533.0,
          "min" : 703140.0,
          "sum" : 5362068.0,
          "standardDeviation" : 165870.3960277421
        }, {
          "mean" : 733813.0,
          "variance" : 9.398264531333338E9,
          "n" : 4,
          "max" : 814220.0,
          "min" : 608829.0,
          "sum" : 2935252.0,
          "standardDeviation" : 96944.64673891662
        }, {
          "mean" : 574833.0,
          "variance" : 6.543301659999998E8,
          "n" : 4,
          "max" : 608708.0,
          "min" : 551303.0,
          "sum" : 2299332.0,
          "standardDeviation" : 25579.8781466996
        }, {
          "mean" : 536968.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 536968.0,
          "min" : 536968.0,
          "sum" : 536968.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1469844.5,
          "variance" : 4.2915008787069995E11,
          "n" : 1,
          "max" : 2738585.0,
          "min" : 1020240.0,
          "sum" : 1469844.5,
          "standardDeviation" : 655095.4799650963
        }, {
          "mean" : 852721.2,
          "variance" : 1.7366203144699997E10,
          "n" : 5,
          "max" : 1000719.0,
          "min" : 695850.0,
          "sum" : 4263606.0,
          "standardDeviation" : 131780.890665908
        }, {
          "mean" : 788073.75,
          "variance" : 8.86487906758333E9,
          "n" : 4,
          "max" : 876511.0,
          "min" : 664579.0,
          "sum" : 3152295.0,
          "standardDeviation" : 94153.486752129
        }, {
          "mean" : 651321.0,
          "variance" : 5.844246056E9,
          "n" : 5,
          "max" : 746072.0,
          "min" : 544620.0,
          "sum" : 3256605.0,
          "standardDeviation" : 76447.66874143384
        } ],
        "11" : [ {
          "mean" : 1343913.142857143,
          "variance" : 3.601430213244762E11,
          "n" : 2,
          "max" : 2631777.0,
          "min" : 955431.0,
          "sum" : 2687826.285714286,
          "standardDeviation" : 600119.1726019726
        }, {
          "mean" : 838462.0,
          "variance" : 3.0803522980000014E9,
          "n" : 4,
          "max" : 898423.0,
          "min" : 776331.0,
          "sum" : 3353848.0,
          "standardDeviation" : 55500.92159595191
        }, {
          "mean" : 644773.0,
          "variance" : 3.7115438953333344E9,
          "n" : 4,
          "max" : 682013.0,
          "min" : 553944.0,
          "sum" : 2579092.0,
          "standardDeviation" : 60922.441639623525
        }, {
          "mean" : 759492.4,
          "variance" : 1.00318899433E10,
          "n" : 5,
          "max" : 899271.0,
          "min" : 649854.0,
          "sum" : 3797462.0,
          "standardDeviation" : 100159.32279773061
        } ],
        "12" : [ {
          "mean" : 1451102.0,
          "variance" : 5.4197785502200006E11,
          "n" : 1,
          "max" : 2887640.0,
          "min" : 925376.0,
          "sum" : 1451102.0,
          "standardDeviation" : 736191.4526955608
        }, {
          "mean" : 858843.25,
          "variance" : 1.0854746488916672E10,
          "n" : 4,
          "max" : 965524.0,
          "min" : 715614.0,
          "sum" : 3435373.0,
          "standardDeviation" : 104186.11466465515
        }, {
          "mean" : 697232.0,
          "variance" : 3.947482156666667E9,
          "n" : 4,
          "max" : 758240.0,
          "min" : 610041.0,
          "sum" : 2788928.0,
          "standardDeviation" : 62828.991370757074
        }, {
          "mean" : 691182.25,
          "variance" : 1.874120022291667E10,
          "n" : 4,
          "max" : 818337.0,
          "min" : 546034.0,
          "sum" : 2764729.0,
          "standardDeviation" : 136898.50336258856
        }, {
          "mean" : 684353.0,
          "variance" : 4.650915457999999E9,
          "n" : 2,
          "max" : 732576.0,
          "min" : 636130.0,
          "sum" : 1368706.0,
          "standardDeviation" : 68197.62061831776
        } ],
        "13" : [ {
          "mean" : 1624966.3333333333,
          "variance" : 7.864289066250667E11,
          "n" : 1,
          "max" : 3366779.0,
          "min" : 996112.0,
          "sum" : 1624966.3333333333,
          "standardDeviation" : 886808.269371157
        }, {
          "mean" : 749414.4,
          "variance" : 2.28787954393E10,
          "n" : 5,
          "max" : 1008247.0,
          "min" : 629432.0,
          "sum" : 3747072.0,
          "standardDeviation" : 151257.38143740292
        }, {
          "mean" : 715915.25,
          "variance" : 1.0543814674916668E10,
          "n" : 4,
          "max" : 836977.0,
          "min" : 599516.0,
          "sum" : 2863661.0,
          "standardDeviation" : 102683.07881494725
        }, {
          "mean" : 691744.25,
          "variance" : 1.4534491976916668E10,
          "n" : 4,
          "max" : 858916.0,
          "min" : 575697.0,
          "sum" : 2766977.0,
          "standardDeviation" : 120559.08085630326
        }, {
          "mean" : 593179.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 593179.0,
          "min" : 593179.0,
          "sum" : 593179.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1602184.6666666667,
          "variance" : 4.3873561758226666E11,
          "n" : 1,
          "max" : 2810614.0,
          "min" : 1029875.0,
          "sum" : 1602184.6666666667,
          "standardDeviation" : 662371.2082980862
        }, {
          "mean" : 845286.8,
          "variance" : 3.84428503547E10,
          "n" : 5,
          "max" : 1068570.0,
          "min" : 592026.0,
          "sum" : 4226434.0,
          "standardDeviation" : 196068.48383842825
        }, {
          "mean" : 712706.5,
          "variance" : 3.2922997510000014E9,
          "n" : 4,
          "max" : 798651.0,
          "min" : 681858.0,
          "sum" : 2850826.0,
          "standardDeviation" : 57378.56525741996
        }, {
          "mean" : 1.35403162E7,
          "variance" : 8.259926516740139E14,
          "n" : 5,
          "max" : 6.495214E7,
          "min" : 665406.0,
          "sum" : 6.7701581E7,
          "standardDeviation" : 2.874008788563483E7
        } ],
        "15" : [ {
          "mean" : 1588045.3333333333,
          "variance" : 5.112482286426666E11,
          "n" : 1,
          "max" : 2927094.0,
          "min" : 1121308.0,
          "sum" : 1588045.3333333333,
          "standardDeviation" : 715016.2436215464
        }, {
          "mean" : 860211.2,
          "variance" : 6.989969872570001E10,
          "n" : 5,
          "max" : 1312920.0,
          "min" : 645067.0,
          "sum" : 4301056.0,
          "standardDeviation" : 264385.5115654033
        }, {
          "mean" : 585958.75,
          "variance" : 4.748290490916666E9,
          "n" : 4,
          "max" : 682223.0,
          "min" : 527839.0,
          "sum" : 2343835.0,
          "standardDeviation" : 68907.84056199023
        }, {
          "mean" : 549868.75,
          "variance" : 3.708308389166661E8,
          "n" : 4,
          "max" : 568735.0,
          "min" : 523577.0,
          "sum" : 2199475.0,
          "standardDeviation" : 19256.968580663626
        }, {
          "mean" : 582215.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 582215.0,
          "min" : 582215.0,
          "sum" : 582215.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1517745.6666666667,
          "variance" : 5.173010382294666E11,
          "n" : 1,
          "max" : 2952106.0,
          "min" : 981441.0,
          "sum" : 1517745.6666666667,
          "standardDeviation" : 719236.4272125451
        }, {
          "mean" : 823040.0,
          "variance" : 2.44272683335E10,
          "n" : 5,
          "max" : 1044988.0,
          "min" : 666983.0,
          "sum" : 4115200.0,
          "standardDeviation" : 156292.25295420116
        }, {
          "mean" : 575272.25,
          "variance" : 1.3500165609166665E9,
          "n" : 4,
          "max" : 629128.0,
          "min" : 550341.0,
          "sum" : 2301089.0,
          "standardDeviation" : 36742.571506587105
        }, {
          "mean" : 662714.6,
          "variance" : 6.379552536799998E9,
          "n" : 5,
          "max" : 724912.0,
          "min" : 531126.0,
          "sum" : 3313573.0,
          "standardDeviation" : 79872.10111672284
        } ],
        "17" : [ {
          "mean" : 786591.5,
          "variance" : 2.25708513243E10,
          "n" : 6,
          "max" : 954567.0,
          "min" : 556425.0,
          "sum" : 4719549.0,
          "standardDeviation" : 150235.98545055708
        }, {
          "mean" : 683520.5,
          "variance" : 1.2780067096666656E9,
          "n" : 4,
          "max" : 735070.0,
          "min" : 656985.0,
          "sum" : 2734082.0,
          "standardDeviation" : 35749.21970710222
        }, {
          "mean" : 623629.25,
          "variance" : 1.5872318603583332E10,
          "n" : 4,
          "max" : 795849.0,
          "min" : 494604.0,
          "sum" : 2494517.0,
          "standardDeviation" : 125985.39043707938
        }, {
          "mean" : 683399.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 683399.0,
          "min" : 683399.0,
          "sum" : 683399.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1589129.6666666665,
          "variance" : 7.218503985734666E11,
          "n" : 1,
          "max" : 3219681.0,
          "min" : 961372.0,
          "sum" : 1589129.6666666665,
          "standardDeviation" : 849617.7955842654
        }, {
          "mean" : 896456.4,
          "variance" : 3.84624342238E10,
          "n" : 5,
          "max" : 1186070.0,
          "min" : 695023.0,
          "sum" : 4482282.0,
          "standardDeviation" : 196118.4188795127
        }, {
          "mean" : 783948.0,
          "variance" : 4.648959212666669E9,
          "n" : 4,
          "max" : 821723.0,
          "min" : 681771.0,
          "sum" : 3135792.0,
          "standardDeviation" : 68183.27663486604
        }, {
          "mean" : 691685.6,
          "variance" : 5.095405682799998E9,
          "n" : 5,
          "max" : 777651.0,
          "min" : 615029.0,
          "sum" : 3458428.0,
          "standardDeviation" : 71382.11038348473
        } ],
        "19" : [ {
          "mean" : 1295613.8571428573,
          "variance" : 3.146649788291428E11,
          "n" : 2,
          "max" : 2460002.0,
          "min" : 850604.0,
          "sum" : 2591227.7142857146,
          "standardDeviation" : 560950.0680355987
        }, {
          "mean" : 770580.3333333334,
          "variance" : 1.9245093760333336E10,
          "n" : 3,
          "max" : 864728.0,
          "min" : 611269.0,
          "sum" : 2311741.0,
          "standardDeviation" : 138726.68726792742
        }, {
          "mean" : 676994.4,
          "variance" : 9.469042723000001E8,
          "n" : 5,
          "max" : 717550.0,
          "min" : 631556.0,
          "sum" : 3384972.0,
          "standardDeviation" : 30771.809701413404
        }, {
          "mean" : 836285.5,
          "variance" : 2.4462331303000004E10,
          "n" : 4,
          "max" : 1065172.0,
          "min" : 715251.0,
          "sum" : 3345142.0,
          "standardDeviation" : 156404.383899557
        }, {
          "mean" : 649785.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 649785.0,
          "min" : 649785.0,
          "sum" : 649785.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 2149886.5,
          "variance" : 5.445515257524299E12,
          "n" : 1,
          "max" : 6878756.0,
          "min" : 966341.0,
          "sum" : 2149886.5,
          "standardDeviation" : 2333562.781997583
        }, {
          "mean" : 888782.0,
          "variance" : 5.9360677085E9,
          "n" : 5,
          "max" : 1016225.0,
          "min" : 823743.0,
          "sum" : 4443910.0,
          "standardDeviation" : 77045.88054205105
        }, {
          "mean" : 687127.0,
          "variance" : 4.928863076666669E9,
          "n" : 4,
          "max" : 791921.0,
          "min" : 643720.0,
          "sum" : 2748508.0,
          "standardDeviation" : 70205.86212465928
        }, {
          "mean" : 615081.5,
          "variance" : 5.204099046333335E9,
          "n" : 4,
          "max" : 722862.0,
          "min" : 570372.0,
          "sum" : 2460326.0,
          "standardDeviation" : 72139.44168298875
        }, {
          "mean" : 605762.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 605762.0,
          "min" : 605762.0,
          "sum" : 605762.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1530112.1666666667,
          "variance" : 3.943286978177668E11,
          "n" : 1,
          "max" : 2720538.0,
          "min" : 997440.0,
          "sum" : 1530112.1666666667,
          "standardDeviation" : 627955.9680564926
        }, {
          "mean" : 771332.6,
          "variance" : 2.1992481141800003E10,
          "n" : 5,
          "max" : 1001310.0,
          "min" : 605714.0,
          "sum" : 3856663.0,
          "standardDeviation" : 148298.62151011385
        }, {
          "mean" : 770524.5,
          "variance" : 2.511856787E9,
          "n" : 4,
          "max" : 843761.0,
          "min" : 731666.0,
          "sum" : 3082098.0,
          "standardDeviation" : 50118.4276189906
        }, {
          "mean" : 640939.75,
          "variance" : 3.888727480250002E9,
          "n" : 4,
          "max" : 713148.0,
          "min" : 574512.0,
          "sum" : 2563759.0,
          "standardDeviation" : 62359.66228460512
        }, {
          "mean" : 594519.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 594519.0,
          "min" : 594519.0,
          "sum" : 594519.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 1536319.1666666667,
          "variance" : 4.759084611941667E11,
          "n" : 1,
          "max" : 2842201.0,
          "min" : 983125.0,
          "sum" : 1536319.1666666667,
          "standardDeviation" : 689861.1898013735
        }, {
          "mean" : 923193.0,
          "variance" : 1.0882259904999998E10,
          "n" : 5,
          "max" : 1082598.0,
          "min" : 824572.0,
          "sum" : 4615965.0,
          "standardDeviation" : 104318.07084585105
        }, {
          "mean" : 720471.25,
          "variance" : 1.3517837070250002E10,
          "n" : 4,
          "max" : 889330.0,
          "min" : 623076.0,
          "sum" : 2881885.0,
          "standardDeviation" : 116266.2335772945
        }, {
          "mean" : 765534.0,
          "variance" : 1.84753550685E10,
          "n" : 5,
          "max" : 897295.0,
          "min" : 589146.0,
          "sum" : 3827670.0,
          "standardDeviation" : 135924.0783249973
        } ],
        "23" : [ {
          "mean" : 1504939.3333333333,
          "variance" : 5.469312466290666E11,
          "n" : 1,
          "max" : 2895184.0,
          "min" : 1038607.0,
          "sum" : 1504939.3333333333,
          "standardDeviation" : 739548.0015719511
        }, {
          "mean" : 783310.6,
          "variance" : 2.42389982123E10,
          "n" : 5,
          "max" : 981693.0,
          "min" : 566220.0,
          "sum" : 3916553.0,
          "standardDeviation" : 155688.78640512296
        }, {
          "mean" : 610310.0,
          "variance" : 4.63674929E9,
          "n" : 4,
          "max" : 669781.0,
          "min" : 513002.0,
          "sum" : 2441240.0,
          "standardDeviation" : 68093.680250079
        }, {
          "mean" : 575017.25,
          "variance" : 7.715991795833343E8,
          "n" : 4,
          "max" : 603168.0,
          "min" : 540064.0,
          "sum" : 2300069.0,
          "standardDeviation" : 27777.6741211955
        }, {
          "mean" : 711991.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 711991.0,
          "min" : 711991.0,
          "sum" : 711991.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1479244.8333333335,
          "variance" : 3.730919665249667E11,
          "n" : 1,
          "max" : 2642225.0,
          "min" : 1072565.0,
          "sum" : 1479244.8333333335,
          "standardDeviation" : 610812.5461424042
        }, {
          "mean" : 703442.2,
          "variance" : 2.5448869025200005E10,
          "n" : 5,
          "max" : 973728.0,
          "min" : 570310.0,
          "sum" : 3517211.0,
          "standardDeviation" : 159527.016599697
        }, {
          "mean" : 930617.0,
          "variance" : 2.1295505523333332E10,
          "n" : 4,
          "max" : 1135761.0,
          "min" : 813708.0,
          "sum" : 3722468.0,
          "standardDeviation" : 145929.7965575685
        }, {
          "mean" : 636764.4,
          "variance" : 2.37409606753E10,
          "n" : 5,
          "max" : 893270.0,
          "min" : 498327.0,
          "sum" : 3183822.0,
          "standardDeviation" : 154081.01984118615
        } ],
        "25" : [ {
          "mean" : 1352621.8333333335,
          "variance" : 4.028289765577667E11,
          "n" : 1,
          "max" : 2566159.0,
          "min" : 808007.0,
          "sum" : 1352621.8333333335,
          "standardDeviation" : 634688.0939152449
        }, {
          "mean" : 688869.2,
          "variance" : 2.1594491905699997E10,
          "n" : 5,
          "max" : 911492.0,
          "min" : 553708.0,
          "sum" : 3444346.0,
          "standardDeviation" : 146950.6444548645
        }, {
          "mean" : 623989.25,
          "variance" : 4.02346338291667E9,
          "n" : 4,
          "max" : 700749.0,
          "min" : 558772.0,
          "sum" : 2495957.0,
          "standardDeviation" : 63430.77630706304
        }, {
          "mean" : 666102.2,
          "variance" : 1.8904978161700005E10,
          "n" : 5,
          "max" : 891835.0,
          "min" : 563527.0,
          "sum" : 3330511.0,
          "standardDeviation" : 137495.37505567234
        } ],
        "26" : [ {
          "mean" : 1283165.142857143,
          "variance" : 2.646037971874762E11,
          "n" : 2,
          "max" : 2396963.0,
          "min" : 906672.0,
          "sum" : 2566330.285714286,
          "standardDeviation" : 514396.5369124059
        }, {
          "mean" : 754170.5,
          "variance" : 5.336920329666668E9,
          "n" : 4,
          "max" : 839195.0,
          "min" : 666134.0,
          "sum" : 3016682.0,
          "standardDeviation" : 73054.22869120355
        }, {
          "mean" : 594130.0,
          "variance" : 2.4189970113333325E9,
          "n" : 4,
          "max" : 646035.0,
          "min" : 549588.0,
          "sum" : 2376520.0,
          "standardDeviation" : 49183.30012649957
        }, {
          "mean" : 618080.8,
          "variance" : 1.0290291323699999E10,
          "n" : 5,
          "max" : 749979.0,
          "min" : 496690.0,
          "sum" : 3090404.0,
          "standardDeviation" : 101441.07315924847
        } ],
        "27" : [ {
          "mean" : 858822.3333333333,
          "variance" : 7.244837039546663E10,
          "n" : 6,
          "max" : 1243047.0,
          "min" : 622296.0,
          "sum" : 5152934.0,
          "standardDeviation" : 269162.3495132011
        }, {
          "mean" : 720847.25,
          "variance" : 2.0304343516916668E10,
          "n" : 4,
          "max" : 851352.0,
          "min" : 593198.0,
          "sum" : 2883389.0,
          "standardDeviation" : 142493.3104286537
        }, {
          "mean" : 612296.25,
          "variance" : 6.511553828249999E9,
          "n" : 4,
          "max" : 698250.0,
          "min" : 509082.0,
          "sum" : 2449185.0,
          "standardDeviation" : 80694.19947090372
        }, {
          "mean" : 531387.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 531387.0,
          "min" : 531387.0,
          "sum" : 531387.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1530632.5714285714,
          "variance" : 1.1096290113612856E12,
          "n" : 2,
          "max" : 3805473.0,
          "min" : 872094.0,
          "sum" : 3061265.1428571427,
          "standardDeviation" : 1053389.2971552757
        }, {
          "mean" : 772788.25,
          "variance" : 7.200463933583333E9,
          "n" : 4,
          "max" : 836142.0,
          "min" : 654206.0,
          "sum" : 3091153.0,
          "standardDeviation" : 84855.54745320622
        }, {
          "mean" : 626989.2,
          "variance" : 1.2314429067199997E10,
          "n" : 5,
          "max" : 790421.0,
          "min" : 524748.0,
          "sum" : 3134946.0,
          "standardDeviation" : 110970.39725620521
        }, {
          "mean" : 637543.5,
          "variance" : 1.9355624025000008E10,
          "n" : 4,
          "max" : 805337.0,
          "min" : 504183.0,
          "sum" : 2550174.0,
          "standardDeviation" : 139124.4911041906
        } ],
        "29" : [ {
          "mean" : 2904712.714285714,
          "variance" : 1.1812264258888906E13,
          "n" : 2,
          "max" : 1.050326E7,
          "min" : 976389.0,
          "sum" : 5809425.428571428,
          "standardDeviation" : 3436897.4757605013
        }, {
          "mean" : 664092.25,
          "variance" : 4.860082174916667E9,
          "n" : 4,
          "max" : 760051.0,
          "min" : 594390.0,
          "sum" : 2656369.0,
          "standardDeviation" : 69714.2896034713
        }, {
          "mean" : 681112.75,
          "variance" : 1.4840092292916666E10,
          "n" : 4,
          "max" : 849528.0,
          "min" : 560782.0,
          "sum" : 2724451.0,
          "standardDeviation" : 121819.91747213042
        }, {
          "mean" : 610896.25,
          "variance" : 7.143745786916669E9,
          "n" : 4,
          "max" : 693580.0,
          "min" : 523884.0,
          "sum" : 2443585.0,
          "standardDeviation" : 84520.6825985017
        }, {
          "mean" : 585312.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 585312.0,
          "min" : 585312.0,
          "sum" : 585312.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 851.0,
          "variance" : 579998.6666666665,
          "n" : 2,
          "max" : 2551.0,
          "min" : 344.0,
          "sum" : 1702.0,
          "standardDeviation" : 761.5764352096686
        }, {
          "mean" : 291.1428571428571,
          "variance" : 13580.809523809528,
          "n" : 7,
          "max" : 418.0,
          "min" : 104.0,
          "sum" : 2037.9999999999998,
          "standardDeviation" : 116.53673036347608
        }, {
          "mean" : 340.0,
          "variance" : 6099.5,
          "n" : 5,
          "max" : 434.0,
          "min" : 242.0,
          "sum" : 1700.0,
          "standardDeviation" : 78.09929577147287
        }, {
          "mean" : 351.6666666666667,
          "variance" : 30464.666666666664,
          "n" : 6,
          "max" : 648.0,
          "min" : 173.0,
          "sum" : 2110.0,
          "standardDeviation" : 174.54130361225867
        }, {
          "mean" : 286.2,
          "variance" : 5423.700000000001,
          "n" : 5,
          "max" : 387.0,
          "min" : 214.0,
          "sum" : 1431.0,
          "standardDeviation" : 73.64577380949976
        }, {
          "mean" : 310.8,
          "variance" : 11111.7,
          "n" : 5,
          "max" : 491.0,
          "min" : 212.0,
          "sum" : 1554.0,
          "standardDeviation" : 105.41204864720162
        }, {
          "mean" : 301.875,
          "variance" : 3673.839285714286,
          "n" : 8,
          "max" : 382.0,
          "min" : 195.0,
          "sum" : 2415.0,
          "standardDeviation" : 60.61220409879751
        }, {
          "mean" : 326.6,
          "variance" : 6074.300000000001,
          "n" : 5,
          "max" : 401.0,
          "min" : 203.0,
          "sum" : 1633.0,
          "standardDeviation" : 77.9377957091423
        }, {
          "mean" : 281.0,
          "variance" : 9247.999999999998,
          "n" : 2,
          "max" : 349.0,
          "min" : 213.0,
          "sum" : 562.0,
          "standardDeviation" : 96.16652224137046
        } ],
        "1" : [ {
          "mean" : 758.0000000000001,
          "variance" : 523499.4285714286,
          "n" : 3,
          "max" : 2480.0,
          "min" : 274.0,
          "sum" : 2274.0000000000005,
          "standardDeviation" : 723.5326036685759
        }, {
          "mean" : 293.66666666666663,
          "variance" : 36397.46666666667,
          "n" : 6,
          "max" : 623.0,
          "min" : 130.0,
          "sum" : 1761.9999999999998,
          "standardDeviation" : 190.78120103056975
        }, {
          "mean" : 199.4,
          "variance" : 6956.299999999999,
          "n" : 5,
          "max" : 310.0,
          "min" : 119.0,
          "sum" : 997.0,
          "standardDeviation" : 83.40443633284742
        }, {
          "mean" : 367.66666666666663,
          "variance" : 10455.066666666668,
          "n" : 6,
          "max" : 499.0,
          "min" : 259.0,
          "sum" : 2206.0,
          "standardDeviation" : 102.2500203748961
        }, {
          "mean" : 302.0,
          "variance" : 5321.499999999999,
          "n" : 5,
          "max" : 382.0,
          "min" : 218.0,
          "sum" : 1510.0,
          "standardDeviation" : 72.94861204985328
        }, {
          "mean" : 319.4,
          "variance" : 8103.8,
          "n" : 5,
          "max" : 386.0,
          "min" : 164.0,
          "sum" : 1597.0,
          "standardDeviation" : 90.02110863569722
        }, {
          "mean" : 242.375,
          "variance" : 9501.982142857143,
          "n" : 8,
          "max" : 382.0,
          "min" : 115.0,
          "sum" : 1939.0,
          "standardDeviation" : 97.47811109606681
        }, {
          "mean" : 311.0,
          "variance" : 14261.5,
          "n" : 5,
          "max" : 444.0,
          "min" : 124.0,
          "sum" : 1555.0,
          "standardDeviation" : 119.42152234836064
        }, {
          "mean" : 204.0,
          "variance" : 27848.000000000004,
          "n" : 2,
          "max" : 322.0,
          "min" : 86.0,
          "sum" : 408.0,
          "standardDeviation" : 166.87720036002523
        } ],
        "2" : [ {
          "mean" : 836.25,
          "variance" : 271141.9285714286,
          "n" : 3,
          "max" : 2075.0,
          "min" : 388.0,
          "sum" : 2508.75,
          "standardDeviation" : 520.7129041721826
        }, {
          "mean" : 346.5,
          "variance" : 17969.500000000004,
          "n" : 6,
          "max" : 602.0,
          "min" : 202.0,
          "sum" : 2079.0,
          "standardDeviation" : 134.050363669779
        }, {
          "mean" : 220.6,
          "variance" : 5300.8,
          "n" : 5,
          "max" : 300.0,
          "min" : 116.0,
          "sum" : 1103.0,
          "standardDeviation" : 72.80659310804208
        }, {
          "mean" : 247.0,
          "variance" : 27787.000000000004,
          "n" : 5,
          "max" : 531.0,
          "min" : 94.0,
          "sum" : 1235.0,
          "standardDeviation" : 166.69433103738112
        }, {
          "mean" : 286.6666666666667,
          "variance" : 3505.4666666666662,
          "n" : 6,
          "max" : 356.0,
          "min" : 205.0,
          "sum" : 1720.0,
          "standardDeviation" : 59.206981570306944
        }, {
          "mean" : 244.4,
          "variance" : 4493.3,
          "n" : 5,
          "max" : 344.0,
          "min" : 170.0,
          "sum" : 1222.0,
          "standardDeviation" : 67.03208187129503
        }, {
          "mean" : 267.5714285714286,
          "variance" : 21192.619047619046,
          "n" : 7,
          "max" : 518.0,
          "min" : 91.0,
          "sum" : 1873.0000000000002,
          "standardDeviation" : 145.57684928455845
        }, {
          "mean" : 274.5,
          "variance" : 8605.9,
          "n" : 6,
          "max" : 434.0,
          "min" : 177.0,
          "sum" : 1647.0,
          "standardDeviation" : 92.76799016902328
        }, {
          "mean" : 183.0,
          "variance" : 10657.999999999998,
          "n" : 2,
          "max" : 256.0,
          "min" : 110.0,
          "sum" : 366.0,
          "standardDeviation" : 103.23759005323593
        } ],
        "3" : [ {
          "mean" : 764.125,
          "variance" : 379367.5535714285,
          "n" : 3,
          "max" : 2192.0,
          "min" : 291.0,
          "sum" : 2292.375,
          "standardDeviation" : 615.9282048838392
        }, {
          "mean" : 271.33333333333337,
          "variance" : 22315.86666666667,
          "n" : 6,
          "max" : 544.0,
          "min" : 138.0,
          "sum" : 1628.0000000000002,
          "standardDeviation" : 149.38496131360301
        }, {
          "mean" : 241.5,
          "variance" : 7614.3,
          "n" : 6,
          "max" : 363.0,
          "min" : 127.0,
          "sum" : 1449.0,
          "standardDeviation" : 87.25995645197172
        }, {
          "mean" : 326.0,
          "variance" : 9833.499999999998,
          "n" : 5,
          "max" : 496.0,
          "min" : 236.0,
          "sum" : 1630.0,
          "standardDeviation" : 99.16400556653608
        }, {
          "mean" : 243.4,
          "variance" : 2955.3000000000006,
          "n" : 5,
          "max" : 291.0,
          "min" : 174.0,
          "sum" : 1217.0,
          "standardDeviation" : 54.3626710160566
        }, {
          "mean" : 236.66666666666666,
          "variance" : 6377.866666666666,
          "n" : 6,
          "max" : 331.0,
          "min" : 91.0,
          "sum" : 1420.0,
          "standardDeviation" : 79.86154685871459
        }, {
          "mean" : 306.71428571428567,
          "variance" : 16166.904761904765,
          "n" : 7,
          "max" : 456.0,
          "min" : 118.0,
          "sum" : 2146.9999999999995,
          "standardDeviation" : 127.1491437718114
        }, {
          "mean" : 312.4,
          "variance" : 19860.799999999996,
          "n" : 5,
          "max" : 527.0,
          "min" : 172.0,
          "sum" : 1562.0,
          "standardDeviation" : 140.9283505899363
        }, {
          "mean" : 169.5,
          "variance" : 5304.500000000001,
          "n" : 2,
          "max" : 221.0,
          "min" : 118.0,
          "sum" : 339.0,
          "standardDeviation" : 72.8319984622144
        } ],
        "4" : [ {
          "mean" : 1042.857142857143,
          "variance" : 745698.4761904762,
          "n" : 2,
          "max" : 2920.0,
          "min" : 376.0,
          "sum" : 2085.714285714286,
          "standardDeviation" : 863.5383466821124
        }, {
          "mean" : 357.83333333333337,
          "variance" : 29893.366666666672,
          "n" : 6,
          "max" : 655.0,
          "min" : 144.0,
          "sum" : 2147.0,
          "standardDeviation" : 172.89698281539407
        }, {
          "mean" : 207.6,
          "variance" : 6286.299999999998,
          "n" : 5,
          "max" : 302.0,
          "min" : 94.0,
          "sum" : 1038.0,
          "standardDeviation" : 79.28619047476047
        }, {
          "mean" : 273.33333333333337,
          "variance" : 1581.4666666666667,
          "n" : 6,
          "max" : 308.0,
          "min" : 196.0,
          "sum" : 1640.0000000000002,
          "standardDeviation" : 39.76765855147455
        }, {
          "mean" : 290.6666666666667,
          "variance" : 11828.666666666668,
          "n" : 6,
          "max" : 507.0,
          "min" : 214.0,
          "sum" : 1744.0,
          "standardDeviation" : 108.75967389922916
        }, {
          "mean" : 264.0,
          "variance" : 3802.5000000000005,
          "n" : 5,
          "max" : 355.0,
          "min" : 186.0,
          "sum" : 1320.0,
          "standardDeviation" : 61.6644143732834
        }, {
          "mean" : 261.2857142857143,
          "variance" : 6741.9047619047615,
          "n" : 7,
          "max" : 374.0,
          "min" : 155.0,
          "sum" : 1829.0,
          "standardDeviation" : 82.10910279563869
        }, {
          "mean" : 242.83333333333334,
          "variance" : 2786.1666666666674,
          "n" : 6,
          "max" : 340.0,
          "min" : 193.0,
          "sum" : 1457.0,
          "standardDeviation" : 52.78415166190196
        }, {
          "mean" : 224.0,
          "variance" : 450.00000000000006,
          "n" : 2,
          "max" : 239.0,
          "min" : 209.0,
          "sum" : 448.0,
          "standardDeviation" : 21.213203435596427
        } ],
        "5" : [ {
          "mean" : 833.875,
          "variance" : 500012.12500000006,
          "n" : 3,
          "max" : 2535.0,
          "min" : 261.0,
          "sum" : 2501.625,
          "standardDeviation" : 707.1153548042922
        }, {
          "mean" : 339.8,
          "variance" : 12074.7,
          "n" : 5,
          "max" : 491.0,
          "min" : 222.0,
          "sum" : 1699.0,
          "standardDeviation" : 109.88493982343532
        }, {
          "mean" : 273.16666666666663,
          "variance" : 7601.366666666669,
          "n" : 6,
          "max" : 409.0,
          "min" : 193.0,
          "sum" : 1638.9999999999998,
          "standardDeviation" : 87.1858168893695
        }, {
          "mean" : 280.0,
          "variance" : 6336.5,
          "n" : 5,
          "max" : 372.0,
          "min" : 154.0,
          "sum" : 1400.0,
          "standardDeviation" : 79.60213564974246
        }, {
          "mean" : 339.0,
          "variance" : 29453.199999999997,
          "n" : 6,
          "max" : 652.0,
          "min" : 131.0,
          "sum" : 2034.0,
          "standardDeviation" : 171.61934622879787
        }, {
          "mean" : 331.2,
          "variance" : 18644.2,
          "n" : 5,
          "max" : 551.0,
          "min" : 213.0,
          "sum" : 1656.0,
          "standardDeviation" : 136.5437658774651
        }, {
          "mean" : 317.5714285714286,
          "variance" : 11143.619047619048,
          "n" : 7,
          "max" : 440.0,
          "min" : 122.0,
          "sum" : 2223.0000000000005,
          "standardDeviation" : 105.56334140040778
        }, {
          "mean" : 374.3333333333333,
          "variance" : 10447.466666666665,
          "n" : 6,
          "max" : 546.0,
          "min" : 258.0,
          "sum" : 2246.0,
          "standardDeviation" : 102.21284981188356
        }, {
          "mean" : 452.5,
          "variance" : 3444.4999999999995,
          "n" : 2,
          "max" : 494.0,
          "min" : 411.0,
          "sum" : 905.0,
          "standardDeviation" : 58.68986283848344
        } ],
        "6" : [ {
          "mean" : 914.7142857142857,
          "variance" : 767638.238095238,
          "n" : 2,
          "max" : 2877.0,
          "min" : 361.0,
          "sum" : 1829.4285714285713,
          "standardDeviation" : 876.1496664926821
        }, {
          "mean" : 243.33333333333331,
          "variance" : 7452.666666666667,
          "n" : 6,
          "max" : 322.0,
          "min" : 122.0,
          "sum" : 1460.0,
          "standardDeviation" : 86.3288287113098
        }, {
          "mean" : 305.2,
          "variance" : 24769.7,
          "n" : 5,
          "max" : 564.0,
          "min" : 178.0,
          "sum" : 1526.0,
          "standardDeviation" : 157.38392548160692
        }, {
          "mean" : 279.6,
          "variance" : 15379.299999999997,
          "n" : 5,
          "max" : 487.0,
          "min" : 157.0,
          "sum" : 1398.0,
          "standardDeviation" : 124.01330573773122
        }, {
          "mean" : 206.6,
          "variance" : 4359.3,
          "n" : 5,
          "max" : 281.0,
          "min" : 114.0,
          "sum" : 1033.0,
          "standardDeviation" : 66.02499526694417
        }, {
          "mean" : 264.5,
          "variance" : 13277.5,
          "n" : 6,
          "max" : 419.0,
          "min" : 155.0,
          "sum" : 1587.0,
          "standardDeviation" : 115.22803478320716
        }, {
          "mean" : 245.83333333333331,
          "variance" : 8910.966666666665,
          "n" : 6,
          "max" : 373.0,
          "min" : 109.0,
          "sum" : 1475.0,
          "standardDeviation" : 94.39791664367739
        }, {
          "mean" : 303.0,
          "variance" : 8609.5,
          "n" : 5,
          "max" : 413.0,
          "min" : 166.0,
          "sum" : 1515.0,
          "standardDeviation" : 92.78739138482125
        }, {
          "mean" : 294.4,
          "variance" : 14912.299999999997,
          "n" : 5,
          "max" : 472.0,
          "min" : 160.0,
          "sum" : 1472.0,
          "standardDeviation" : 122.11592852695343
        } ],
        "7" : [ {
          "mean" : 705.0,
          "variance" : 590555.142857143,
          "n" : 3,
          "max" : 2543.0,
          "min" : 123.0,
          "sum" : 2115.0,
          "standardDeviation" : 768.4758570424597
        }, {
          "mean" : 275.83333333333337,
          "variance" : 4152.5666666666675,
          "n" : 6,
          "max" : 367.0,
          "min" : 202.0,
          "sum" : 1655.0000000000002,
          "standardDeviation" : 64.44041175121919
        }, {
          "mean" : 257.6,
          "variance" : 19398.299999999996,
          "n" : 5,
          "max" : 499.0,
          "min" : 160.0,
          "sum" : 1288.0,
          "standardDeviation" : 139.27777999379512
        }, {
          "mean" : 256.2,
          "variance" : 1554.6999999999998,
          "n" : 5,
          "max" : 305.0,
          "min" : 203.0,
          "sum" : 1281.0,
          "standardDeviation" : 39.42968424930638
        }, {
          "mean" : 327.3333333333333,
          "variance" : 25031.066666666666,
          "n" : 6,
          "max" : 495.0,
          "min" : 98.0,
          "sum" : 1964.0,
          "standardDeviation" : 158.2120939330071
        }, {
          "mean" : 267.4,
          "variance" : 1763.8000000000002,
          "n" : 5,
          "max" : 314.0,
          "min" : 201.0,
          "sum" : 1337.0,
          "standardDeviation" : 41.99761898012791
        }, {
          "mean" : 293.4285714285714,
          "variance" : 6267.619047619046,
          "n" : 7,
          "max" : 412.0,
          "min" : 160.0,
          "sum" : 2053.9999999999995,
          "standardDeviation" : 79.16829572258737
        }, {
          "mean" : 303.66666666666663,
          "variance" : 2044.6666666666672,
          "n" : 6,
          "max" : 365.0,
          "min" : 238.0,
          "sum" : 1821.9999999999998,
          "standardDeviation" : 45.21799051999842
        }, {
          "mean" : 174.5,
          "variance" : 6612.500000000001,
          "n" : 2,
          "max" : 232.0,
          "min" : 117.0,
          "sum" : 349.0,
          "standardDeviation" : 81.31727983645297
        } ],
        "8" : [ {
          "mean" : 854.8571428571429,
          "variance" : 647785.1428571427,
          "n" : 2,
          "max" : 2655.0,
          "min" : 309.0,
          "sum" : 1709.7142857142858,
          "standardDeviation" : 804.8510066199475
        }, {
          "mean" : 316.42857142857144,
          "variance" : 18334.619047619046,
          "n" : 7,
          "max" : 554.0,
          "min" : 138.0,
          "sum" : 2215.0,
          "standardDeviation" : 135.40538780868008
        }, {
          "mean" : 316.8,
          "variance" : 4234.699999999999,
          "n" : 5,
          "max" : 420.0,
          "min" : 249.0,
          "sum" : 1584.0,
          "standardDeviation" : 65.07457260712512
        }, {
          "mean" : 251.4,
          "variance" : 23446.300000000003,
          "n" : 5,
          "max" : 507.0,
          "min" : 100.0,
          "sum" : 1257.0,
          "standardDeviation" : 153.12184690631184
        }, {
          "mean" : 238.66666666666666,
          "variance" : 6012.2666666666655,
          "n" : 6,
          "max" : 351.0,
          "min" : 129.0,
          "sum" : 1432.0,
          "standardDeviation" : 77.53880748803573
        }, {
          "mean" : 339.4,
          "variance" : 44312.3,
          "n" : 5,
          "max" : 711.0,
          "min" : 190.0,
          "sum" : 1697.0,
          "standardDeviation" : 210.5048693023513
        }, {
          "mean" : 278.5,
          "variance" : 4616.285714285714,
          "n" : 8,
          "max" : 385.0,
          "min" : 214.0,
          "sum" : 2228.0,
          "standardDeviation" : 67.9432536333499
        }, {
          "mean" : 350.4,
          "variance" : 6893.3,
          "n" : 5,
          "max" : 461.0,
          "min" : 268.0,
          "sum" : 1752.0,
          "standardDeviation" : 83.0258995735668
        }, {
          "mean" : 321.5,
          "variance" : 924.5,
          "n" : 2,
          "max" : 343.0,
          "min" : 300.0,
          "sum" : 643.0,
          "standardDeviation" : 30.405591591021544
        } ],
        "9" : [ {
          "mean" : 748.5,
          "variance" : 568309.7142857142,
          "n" : 3,
          "max" : 2585.0,
          "min" : 304.0,
          "sum" : 2245.5,
          "standardDeviation" : 753.8631933485772
        }, {
          "mean" : 218.6,
          "variance" : 9381.3,
          "n" : 5,
          "max" : 347.0,
          "min" : 124.0,
          "sum" : 1093.0,
          "standardDeviation" : 96.85711125157512
        }, {
          "mean" : 268.1666666666667,
          "variance" : 1324.1666666666667,
          "n" : 6,
          "max" : 311.0,
          "min" : 225.0,
          "sum" : 1609.0,
          "standardDeviation" : 36.38910093237626
        }, {
          "mean" : 366.6,
          "variance" : 32473.299999999996,
          "n" : 5,
          "max" : 554.0,
          "min" : 185.0,
          "sum" : 1833.0,
          "standardDeviation" : 180.20349608151335
        }, {
          "mean" : 289.3333333333333,
          "variance" : 15931.866666666665,
          "n" : 6,
          "max" : 458.0,
          "min" : 181.0,
          "sum" : 1736.0,
          "standardDeviation" : 126.22149843297957
        }, {
          "mean" : 271.0,
          "variance" : 4967.499999999999,
          "n" : 5,
          "max" : 390.0,
          "min" : 211.0,
          "sum" : 1355.0,
          "standardDeviation" : 70.48049375536468
        }, {
          "mean" : 261.1428571428571,
          "variance" : 4218.476190476191,
          "n" : 7,
          "max" : 351.0,
          "min" : 179.0,
          "sum" : 1827.9999999999998,
          "standardDeviation" : 64.94979746293433
        }, {
          "mean" : 307.3333333333333,
          "variance" : 961.8666666666666,
          "n" : 6,
          "max" : 353.0,
          "min" : 276.0,
          "sum" : 1844.0,
          "standardDeviation" : 31.013975344458288
        }, {
          "mean" : 254.0,
          "variance" : 71.99999999999999,
          "n" : 2,
          "max" : 260.0,
          "min" : 248.0,
          "sum" : 508.0,
          "standardDeviation" : 8.48528137423857
        } ],
        "10" : [ {
          "mean" : 885.125,
          "variance" : 922598.1249999999,
          "n" : 3,
          "max" : 3183.0,
          "min" : 170.0,
          "sum" : 2655.375,
          "standardDeviation" : 960.5197160912419
        }, {
          "mean" : 294.5,
          "variance" : 6481.500000000001,
          "n" : 6,
          "max" : 411.0,
          "min" : 177.0,
          "sum" : 1767.0,
          "standardDeviation" : 80.50776360078574
        }, {
          "mean" : 282.6,
          "variance" : 6052.299999999999,
          "n" : 5,
          "max" : 406.0,
          "min" : 218.0,
          "sum" : 1413.0,
          "standardDeviation" : 77.79652948557538
        }, {
          "mean" : 279.1666666666667,
          "variance" : 9031.766666666666,
          "n" : 6,
          "max" : 458.0,
          "min" : 179.0,
          "sum" : 1675.0,
          "standardDeviation" : 95.03560736201283
        }, {
          "mean" : 329.2,
          "variance" : 442.6999999999998,
          "n" : 5,
          "max" : 347.0,
          "min" : 302.0,
          "sum" : 1646.0,
          "standardDeviation" : 21.040437257813817
        }, {
          "mean" : 299.33333333333337,
          "variance" : 11663.866666666667,
          "n" : 6,
          "max" : 451.0,
          "min" : 122.0,
          "sum" : 1796.0000000000002,
          "standardDeviation" : 107.9993827142853
        }, {
          "mean" : 1580.2857142857142,
          "variance" : 1.2348455238095235E7,
          "n" : 7,
          "max" : 9547.0,
          "min" : 104.0,
          "sum" : 11062.0,
          "standardDeviation" : 3514.0368862741375
        }, {
          "mean" : 227.8,
          "variance" : 9609.699999999999,
          "n" : 5,
          "max" : 318.0,
          "min" : 92.0,
          "sum" : 1139.0,
          "standardDeviation" : 98.02907731892614
        }, {
          "mean" : 340.0,
          "variance" : 16561.999999999996,
          "n" : 2,
          "max" : 431.0,
          "min" : 249.0,
          "sum" : 680.0,
          "standardDeviation" : 128.69343417595164
        } ],
        "11" : [ {
          "mean" : 823.25,
          "variance" : 430521.9285714285,
          "n" : 3,
          "max" : 2295.0,
          "min" : 225.0,
          "sum" : 2469.75,
          "standardDeviation" : 656.1416985464562
        }, {
          "mean" : 257.66666666666663,
          "variance" : 7070.266666666665,
          "n" : 6,
          "max" : 397.0,
          "min" : 188.0,
          "sum" : 1545.9999999999998,
          "standardDeviation" : 84.08487775258203
        }, {
          "mean" : 321.5,
          "variance" : 20245.900000000005,
          "n" : 6,
          "max" : 468.0,
          "min" : 107.0,
          "sum" : 1929.0,
          "standardDeviation" : 142.28808804675114
        }, {
          "mean" : 252.4,
          "variance" : 20869.299999999996,
          "n" : 5,
          "max" : 386.0,
          "min" : 90.0,
          "sum" : 1262.0,
          "standardDeviation" : 144.46210575787686
        }, {
          "mean" : 261.6,
          "variance" : 21.300000000000047,
          "n" : 5,
          "max" : 267.0,
          "min" : 256.0,
          "sum" : 1308.0,
          "standardDeviation" : 4.615192303685736
        }, {
          "mean" : 262.2857142857143,
          "variance" : 10233.571428571428,
          "n" : 7,
          "max" : 384.0,
          "min" : 100.0,
          "sum" : 1836.0,
          "standardDeviation" : 101.16111618883724
        }, {
          "mean" : 308.3333333333333,
          "variance" : 1343.8666666666668,
          "n" : 6,
          "max" : 359.0,
          "min" : 269.0,
          "sum" : 1850.0,
          "standardDeviation" : 36.6587870321246
        }, {
          "mean" : 276.6666666666667,
          "variance" : 7309.0666666666675,
          "n" : 6,
          "max" : 434.0,
          "min" : 174.0,
          "sum" : 1660.0,
          "standardDeviation" : 85.49307964196089
        }, {
          "mean" : 89.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 89.0,
          "min" : 89.0,
          "sum" : 89.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 953.375,
          "variance" : 664187.9821428572,
          "n" : 3,
          "max" : 2920.0,
          "min" : 375.0,
          "sum" : 2860.125,
          "standardDeviation" : 814.9772893417688
        }, {
          "mean" : 314.16666666666663,
          "variance" : 9936.566666666668,
          "n" : 6,
          "max" : 450.0,
          "min" : 163.0,
          "sum" : 1884.9999999999998,
          "standardDeviation" : 99.68232875824414
        }, {
          "mean" : 258.6,
          "variance" : 6779.3,
          "n" : 5,
          "max" : 333.0,
          "min" : 145.0,
          "sum" : 1293.0,
          "standardDeviation" : 82.33650466226995
        }, {
          "mean" : 300.0,
          "variance" : 17139.6,
          "n" : 6,
          "max" : 434.0,
          "min" : 92.0,
          "sum" : 1800.0,
          "standardDeviation" : 130.9182951309709
        }, {
          "mean" : 308.8,
          "variance" : 6819.700000000001,
          "n" : 5,
          "max" : 402.0,
          "min" : 191.0,
          "sum" : 1544.0,
          "standardDeviation" : 82.58147492022651
        }, {
          "mean" : 366.8,
          "variance" : 16599.700000000004,
          "n" : 5,
          "max" : 554.0,
          "min" : 253.0,
          "sum" : 1834.0,
          "standardDeviation" : 128.8398230362026
        }, {
          "mean" : 267.85714285714283,
          "variance" : 2880.476190476191,
          "n" : 7,
          "max" : 334.0,
          "min" : 176.0,
          "sum" : 1874.9999999999998,
          "standardDeviation" : 53.67006791942964
        }, {
          "mean" : 317.5,
          "variance" : 20767.099999999995,
          "n" : 6,
          "max" : 530.0,
          "min" : 90.0,
          "sum" : 1905.0,
          "standardDeviation" : 144.10794565186194
        }, {
          "mean" : 260.5,
          "variance" : 9384.5,
          "n" : 2,
          "max" : 329.0,
          "min" : 192.0,
          "sum" : 521.0,
          "standardDeviation" : 96.87362902255701
        } ],
        "13" : [ {
          "mean" : 779.4999999999999,
          "variance" : 677120.8571428572,
          "n" : 3,
          "max" : 2773.0,
          "min" : 244.0,
          "sum" : 2338.4999999999995,
          "standardDeviation" : 822.8735365430445
        }, {
          "mean" : 341.8333333333333,
          "variance" : 8488.566666666668,
          "n" : 6,
          "max" : 479.0,
          "min" : 201.0,
          "sum" : 2051.0,
          "standardDeviation" : 92.1334177520115
        }, {
          "mean" : 233.8,
          "variance" : 5826.699999999999,
          "n" : 5,
          "max" : 355.0,
          "min" : 165.0,
          "sum" : 1169.0,
          "standardDeviation" : 76.33282387020671
        }, {
          "mean" : 272.6,
          "variance" : 215.3000000000002,
          "n" : 5,
          "max" : 294.0,
          "min" : 255.0,
          "sum" : 1363.0,
          "standardDeviation" : 14.673104647619747
        }, {
          "mean" : 253.0,
          "variance" : 2536.7999999999997,
          "n" : 6,
          "max" : 311.0,
          "min" : 192.0,
          "sum" : 1518.0,
          "standardDeviation" : 50.366655636442644
        }, {
          "mean" : 231.2,
          "variance" : 1802.7000000000005,
          "n" : 5,
          "max" : 278.0,
          "min" : 163.0,
          "sum" : 1156.0,
          "standardDeviation" : 42.45821475286026
        }, {
          "mean" : 246.33333333333334,
          "variance" : 14401.466666666664,
          "n" : 6,
          "max" : 403.0,
          "min" : 128.0,
          "sum" : 1478.0,
          "standardDeviation" : 120.00611095551203
        }, {
          "mean" : 264.14285714285717,
          "variance" : 2956.1428571428573,
          "n" : 7,
          "max" : 333.0,
          "min" : 192.0,
          "sum" : 1849.0000000000002,
          "standardDeviation" : 54.3704226316373
        }, {
          "mean" : 241.5,
          "variance" : 0.5000000000000001,
          "n" : 2,
          "max" : 242.0,
          "min" : 241.0,
          "sum" : 483.0,
          "standardDeviation" : 0.7071067811865476
        } ],
        "14" : [ {
          "mean" : 783.375,
          "variance" : 733032.8392857142,
          "n" : 3,
          "max" : 2843.0,
          "min" : 160.0,
          "sum" : 2350.125,
          "standardDeviation" : 856.1733698765188
        }, {
          "mean" : 368.6,
          "variance" : 23395.299999999996,
          "n" : 5,
          "max" : 617.0,
          "min" : 259.0,
          "sum" : 1843.0,
          "standardDeviation" : 152.95522220571613
        }, {
          "mean" : 284.66666666666663,
          "variance" : 2708.266666666667,
          "n" : 6,
          "max" : 342.0,
          "min" : 208.0,
          "sum" : 1707.9999999999998,
          "standardDeviation" : 52.041009470096434
        }, {
          "mean" : 290.8,
          "variance" : 10335.699999999997,
          "n" : 5,
          "max" : 448.0,
          "min" : 177.0,
          "sum" : 1454.0,
          "standardDeviation" : 101.66464478863828
        }, {
          "mean" : 349.0,
          "variance" : 2900.8,
          "n" : 6,
          "max" : 429.0,
          "min" : 280.0,
          "sum" : 2094.0,
          "standardDeviation" : 53.85907537267977
        }, {
          "mean" : 292.8,
          "variance" : 14431.699999999999,
          "n" : 5,
          "max" : 442.0,
          "min" : 145.0,
          "sum" : 1464.0,
          "standardDeviation" : 120.13201072153916
        }, {
          "mean" : 275.42857142857144,
          "variance" : 3537.952380952381,
          "n" : 7,
          "max" : 395.0,
          "min" : 216.0,
          "sum" : 1928.0,
          "standardDeviation" : 59.4806891432201
        }, {
          "mean" : 287.16666666666663,
          "variance" : 4724.566666666667,
          "n" : 6,
          "max" : 391.0,
          "min" : 198.0,
          "sum" : 1722.9999999999998,
          "standardDeviation" : 68.73548331587308
        }, {
          "mean" : 352.5,
          "variance" : 3960.4999999999995,
          "n" : 2,
          "max" : 397.0,
          "min" : 308.0,
          "sum" : 705.0,
          "standardDeviation" : 62.932503525602726
        } ],
        "15" : [ {
          "mean" : 1018.375,
          "variance" : 1229761.1249999998,
          "n" : 3,
          "max" : 3699.0,
          "min" : 275.0,
          "sum" : 3055.125,
          "standardDeviation" : 1108.945952244743
        }, {
          "mean" : 320.0,
          "variance" : 2720.0000000000005,
          "n" : 5,
          "max" : 379.0,
          "min" : 251.0,
          "sum" : 1600.0,
          "standardDeviation" : 52.15361924162119
        }, {
          "mean" : 301.8333333333333,
          "variance" : 1279.3666666666663,
          "n" : 6,
          "max" : 338.0,
          "min" : 244.0,
          "sum" : 1811.0,
          "standardDeviation" : 35.76823544245182
        }, {
          "mean" : 311.33333333333337,
          "variance" : 23035.066666666666,
          "n" : 6,
          "max" : 603.0,
          "min" : 180.0,
          "sum" : 1868.0000000000002,
          "standardDeviation" : 151.77307622456186
        }, {
          "mean" : 300.8,
          "variance" : 14708.7,
          "n" : 5,
          "max" : 491.0,
          "min" : 186.0,
          "sum" : 1504.0,
          "standardDeviation" : 121.27942941818287
        }, {
          "mean" : 298.2,
          "variance" : 3484.6999999999994,
          "n" : 5,
          "max" : 366.0,
          "min" : 230.0,
          "sum" : 1491.0,
          "standardDeviation" : 59.031347604471975
        }, {
          "mean" : 254.37499999999997,
          "variance" : 4946.267857142856,
          "n" : 8,
          "max" : 343.0,
          "min" : 165.0,
          "sum" : 2034.9999999999998,
          "standardDeviation" : 70.32970821169995
        }, {
          "mean" : 214.8,
          "variance" : 2558.7000000000003,
          "n" : 5,
          "max" : 286.0,
          "min" : 153.0,
          "sum" : 1074.0,
          "standardDeviation" : 50.58359417834996
        }, {
          "mean" : 244.5,
          "variance" : 60.49999999999999,
          "n" : 2,
          "max" : 250.0,
          "min" : 239.0,
          "sum" : 489.0,
          "standardDeviation" : 7.7781745930520225
        } ],
        "16" : [ {
          "mean" : 712.75,
          "variance" : 434771.07142857136,
          "n" : 3,
          "max" : 2238.0,
          "min" : 161.0,
          "sum" : 2138.25,
          "standardDeviation" : 659.371724771825
        }, {
          "mean" : 356.1666666666667,
          "variance" : 7950.566666666667,
          "n" : 6,
          "max" : 484.0,
          "min" : 222.0,
          "sum" : 2137.0,
          "standardDeviation" : 89.1659501528844
        }, {
          "mean" : 226.83333333333334,
          "variance" : 1766.9666666666665,
          "n" : 6,
          "max" : 263.0,
          "min" : 161.0,
          "sum" : 1361.0,
          "standardDeviation" : 42.03530262370745
        }, {
          "mean" : 253.6,
          "variance" : 3180.7999999999997,
          "n" : 5,
          "max" : 307.0,
          "min" : 167.0,
          "sum" : 1268.0,
          "standardDeviation" : 56.398581542446614
        }, {
          "mean" : 253.0,
          "variance" : 5738.5,
          "n" : 5,
          "max" : 354.0,
          "min" : 169.0,
          "sum" : 1265.0,
          "standardDeviation" : 75.75288773373593
        }, {
          "mean" : 245.33333333333334,
          "variance" : 2686.6666666666665,
          "n" : 6,
          "max" : 318.0,
          "min" : 182.0,
          "sum" : 1472.0,
          "standardDeviation" : 51.83306537980044
        }, {
          "mean" : 218.85714285714283,
          "variance" : 2344.8095238095243,
          "n" : 7,
          "max" : 304.0,
          "min" : 158.0,
          "sum" : 1531.9999999999998,
          "standardDeviation" : 48.42323330602289
        }, {
          "mean" : 239.6,
          "variance" : 1000.8000000000002,
          "n" : 5,
          "max" : 269.0,
          "min" : 189.0,
          "sum" : 1198.0,
          "standardDeviation" : 31.635423183513765
        }, {
          "mean" : 231.0,
          "variance" : 1681.9999999999998,
          "n" : 2,
          "max" : 260.0,
          "min" : 202.0,
          "sum" : 462.0,
          "standardDeviation" : 41.012193308819754
        } ],
        "17" : [ {
          "mean" : 799.25,
          "variance" : 502007.9285714286,
          "n" : 3,
          "max" : 2526.0,
          "min" : 400.0,
          "sum" : 2397.75,
          "standardDeviation" : 708.5251785020971
        }, {
          "mean" : 301.6666666666667,
          "variance" : 22079.066666666666,
          "n" : 6,
          "max" : 521.0,
          "min" : 153.0,
          "sum" : 1810.0,
          "standardDeviation" : 148.59026437376934
        }, {
          "mean" : 289.6,
          "variance" : 11635.299999999997,
          "n" : 5,
          "max" : 442.0,
          "min" : 191.0,
          "sum" : 1448.0,
          "standardDeviation" : 107.86704779495913
        }, {
          "mean" : 341.0,
          "variance" : 19653.6,
          "n" : 6,
          "max" : 471.0,
          "min" : 92.0,
          "sum" : 2046.0,
          "standardDeviation" : 140.19129787543875
        }, {
          "mean" : 336.8,
          "variance" : 17003.699999999997,
          "n" : 5,
          "max" : 520.0,
          "min" : 157.0,
          "sum" : 1684.0,
          "standardDeviation" : 130.39823618439016
        }, {
          "mean" : 276.6,
          "variance" : 2263.7999999999997,
          "n" : 5,
          "max" : 331.0,
          "min" : 226.0,
          "sum" : 1383.0,
          "standardDeviation" : 47.579407310305996
        }, {
          "mean" : 311.85714285714283,
          "variance" : 15387.14285714286,
          "n" : 7,
          "max" : 550.0,
          "min" : 209.0,
          "sum" : 2183.0,
          "standardDeviation" : 124.04492273826793
        }, {
          "mean" : 262.5,
          "variance" : 9707.5,
          "n" : 6,
          "max" : 368.0,
          "min" : 123.0,
          "sum" : 1575.0,
          "standardDeviation" : 98.52664614204626
        }, {
          "mean" : 301.5,
          "variance" : 1104.5,
          "n" : 2,
          "max" : 325.0,
          "min" : 278.0,
          "sum" : 603.0,
          "standardDeviation" : 33.23401871576773
        } ],
        "18" : [ {
          "mean" : 753.2857142857143,
          "variance" : 703686.5714285715,
          "n" : 2,
          "max" : 2648.0,
          "min" : 339.0,
          "sum" : 1506.5714285714287,
          "standardDeviation" : 838.860281231965
        }, {
          "mean" : 278.2857142857143,
          "variance" : 33445.90476190475,
          "n" : 7,
          "max" : 679.0,
          "min" : 119.0,
          "sum" : 1948.0,
          "standardDeviation" : 182.8822155429684
        }, {
          "mean" : 217.0,
          "variance" : 7471.199999999999,
          "n" : 6,
          "max" : 342.0,
          "min" : 94.0,
          "sum" : 1302.0,
          "standardDeviation" : 86.43610356789574
        }, {
          "mean" : 313.6,
          "variance" : 2442.7999999999997,
          "n" : 5,
          "max" : 386.0,
          "min" : 255.0,
          "sum" : 1568.0,
          "standardDeviation" : 49.42469018618124
        }, {
          "mean" : 260.4,
          "variance" : 3536.2999999999997,
          "n" : 5,
          "max" : 319.0,
          "min" : 174.0,
          "sum" : 1302.0,
          "standardDeviation" : 59.46679745875004
        }, {
          "mean" : 262.0,
          "variance" : 2142.8000000000006,
          "n" : 6,
          "max" : 346.0,
          "min" : 206.0,
          "sum" : 1572.0,
          "standardDeviation" : 46.29038777111292
        }, {
          "mean" : 275.2857142857143,
          "variance" : 4304.238095238095,
          "n" : 7,
          "max" : 337.0,
          "min" : 172.0,
          "sum" : 1927.0,
          "standardDeviation" : 65.60669245769135
        }, {
          "mean" : 312.33333333333337,
          "variance" : 2643.4666666666662,
          "n" : 6,
          "max" : 403.0,
          "min" : 266.0,
          "sum" : 1874.0000000000002,
          "standardDeviation" : 51.41465420156656
        }, {
          "mean" : 230.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 230.0,
          "min" : 230.0,
          "sum" : 230.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 921.4999999999999,
          "variance" : 740459.4285714284,
          "n" : 3,
          "max" : 3006.0,
          "min" : 318.0,
          "sum" : 2764.4999999999995,
          "standardDeviation" : 860.4995227026151
        }, {
          "mean" : 360.5,
          "variance" : 25122.699999999997,
          "n" : 6,
          "max" : 628.0,
          "min" : 182.0,
          "sum" : 2163.0,
          "standardDeviation" : 158.50141955200274
        }, {
          "mean" : 260.8,
          "variance" : 11210.699999999999,
          "n" : 5,
          "max" : 424.0,
          "min" : 149.0,
          "sum" : 1304.0,
          "standardDeviation" : 105.88059312263036
        }, {
          "mean" : 373.0,
          "variance" : 4997.0,
          "n" : 5,
          "max" : 494.0,
          "min" : 314.0,
          "sum" : 1865.0,
          "standardDeviation" : 70.68946173228369
        }, {
          "mean" : 292.83333333333337,
          "variance" : 5174.966666666667,
          "n" : 6,
          "max" : 380.0,
          "min" : 209.0,
          "sum" : 1757.0000000000002,
          "standardDeviation" : 71.93724116663543
        }, {
          "mean" : 319.4,
          "variance" : 10109.800000000001,
          "n" : 5,
          "max" : 424.0,
          "min" : 197.0,
          "sum" : 1597.0,
          "standardDeviation" : 100.54750121211367
        }, {
          "mean" : 329.14285714285717,
          "variance" : 10649.142857142855,
          "n" : 7,
          "max" : 393.0,
          "min" : 101.0,
          "sum" : 2304.0,
          "standardDeviation" : 103.19468424847695
        }, {
          "mean" : 331.33333333333337,
          "variance" : 7520.266666666668,
          "n" : 6,
          "max" : 493.0,
          "min" : 251.0,
          "sum" : 1988.0000000000002,
          "standardDeviation" : 86.71947109309805
        }, {
          "mean" : 339.0,
          "variance" : 0.0,
          "n" : 2,
          "max" : 339.0,
          "min" : 339.0,
          "sum" : 678.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1148.1428571428573,
          "variance" : 1427140.142857143,
          "n" : 2,
          "max" : 3788.0,
          "min" : 337.0,
          "sum" : 2296.2857142857147,
          "standardDeviation" : 1194.629709515523
        }, {
          "mean" : 264.0,
          "variance" : 5015.666666666667,
          "n" : 7,
          "max" : 381.0,
          "min" : 156.0,
          "sum" : 1848.0,
          "standardDeviation" : 70.82137153901121
        }, {
          "mean" : 266.2,
          "variance" : 2405.2,
          "n" : 5,
          "max" : 329.0,
          "min" : 203.0,
          "sum" : 1331.0,
          "standardDeviation" : 49.042838417041075
        }, {
          "mean" : 279.0,
          "variance" : 6416.400000000001,
          "n" : 6,
          "max" : 359.0,
          "min" : 193.0,
          "sum" : 1674.0,
          "standardDeviation" : 80.10243441993508
        }, {
          "mean" : 261.4,
          "variance" : 1071.8000000000002,
          "n" : 5,
          "max" : 304.0,
          "min" : 220.0,
          "sum" : 1307.0,
          "standardDeviation" : 32.73835670891256
        }, {
          "mean" : 270.8,
          "variance" : 2709.2,
          "n" : 5,
          "max" : 344.0,
          "min" : 227.0,
          "sum" : 1354.0,
          "standardDeviation" : 52.04997598462462
        }, {
          "mean" : 337.5,
          "variance" : 32221.428571428572,
          "n" : 8,
          "max" : 731.0,
          "min" : 166.0,
          "sum" : 2700.0,
          "standardDeviation" : 179.50328289874972
        }, {
          "mean" : 270.6,
          "variance" : 1900.3000000000002,
          "n" : 5,
          "max" : 343.0,
          "min" : 238.0,
          "sum" : 1353.0,
          "standardDeviation" : 43.592430535587255
        }, {
          "mean" : 272.0,
          "variance" : 2048.0000000000005,
          "n" : 2,
          "max" : 304.0,
          "min" : 240.0,
          "sum" : 544.0,
          "standardDeviation" : 45.254833995939045
        } ],
        "21" : [ {
          "mean" : 806.0,
          "variance" : 604398.2857142857,
          "n" : 3,
          "max" : 2662.0,
          "min" : 250.0,
          "sum" : 2418.0,
          "standardDeviation" : 777.4305664908511
        }, {
          "mean" : 285.1666666666667,
          "variance" : 2903.7666666666664,
          "n" : 6,
          "max" : 355.0,
          "min" : 220.0,
          "sum" : 1711.0,
          "standardDeviation" : 53.88660934468476
        }, {
          "mean" : 274.2,
          "variance" : 13177.2,
          "n" : 5,
          "max" : 457.0,
          "min" : 175.0,
          "sum" : 1371.0,
          "standardDeviation" : 114.79198578298052
        }, {
          "mean" : 415.4,
          "variance" : 13046.300000000001,
          "n" : 5,
          "max" : 609.0,
          "min" : 329.0,
          "sum" : 2077.0,
          "standardDeviation" : 114.22040097985999
        }, {
          "mean" : 318.3333333333333,
          "variance" : 11075.066666666668,
          "n" : 6,
          "max" : 491.0,
          "min" : 179.0,
          "sum" : 1910.0,
          "standardDeviation" : 105.23814264166138
        }, {
          "mean" : 239.0,
          "variance" : 7211.500000000001,
          "n" : 5,
          "max" : 375.0,
          "min" : 162.0,
          "sum" : 1195.0,
          "standardDeviation" : 84.92055110513591
        }, {
          "mean" : 233.0,
          "variance" : 4954.400000000001,
          "n" : 6,
          "max" : 316.0,
          "min" : 110.0,
          "sum" : 1398.0,
          "standardDeviation" : 70.3874988900728
        }, {
          "mean" : 282.7142857142857,
          "variance" : 21268.571428571424,
          "n" : 7,
          "max" : 574.0,
          "min" : 111.0,
          "sum" : 1979.0,
          "standardDeviation" : 145.83748293416005
        }, {
          "mean" : 222.5,
          "variance" : 2964.5,
          "n" : 2,
          "max" : 261.0,
          "min" : 184.0,
          "sum" : 445.0,
          "standardDeviation" : 54.44722215136416
        } ],
        "22" : [ {
          "mean" : 852.75,
          "variance" : 743256.5000000001,
          "n" : 3,
          "max" : 2895.0,
          "min" : 319.0,
          "sum" : 2558.25,
          "standardDeviation" : 862.1232510494077
        }, {
          "mean" : 296.5,
          "variance" : 1496.2999999999995,
          "n" : 6,
          "max" : 355.0,
          "min" : 254.0,
          "sum" : 1779.0,
          "standardDeviation" : 38.68203717489553
        }, {
          "mean" : 223.0,
          "variance" : 1773.0,
          "n" : 5,
          "max" : 279.0,
          "min" : 180.0,
          "sum" : 1115.0,
          "standardDeviation" : 42.1070065428546
        }, {
          "mean" : 213.66666666666666,
          "variance" : 5015.066666666666,
          "n" : 6,
          "max" : 288.0,
          "min" : 93.0,
          "sum" : 1282.0,
          "standardDeviation" : 70.81713540285759
        }, {
          "mean" : 227.2,
          "variance" : 3590.7,
          "n" : 5,
          "max" : 298.0,
          "min" : 151.0,
          "sum" : 1136.0,
          "standardDeviation" : 59.922449883161484
        }, {
          "mean" : 210.4,
          "variance" : 4952.299999999999,
          "n" : 5,
          "max" : 292.0,
          "min" : 108.0,
          "sum" : 1052.0,
          "standardDeviation" : 70.37257988733964
        }, {
          "mean" : 240.375,
          "variance" : 3603.4107142857138,
          "n" : 8,
          "max" : 303.0,
          "min" : 155.0,
          "sum" : 1923.0,
          "standardDeviation" : 60.02841589019082
        }, {
          "mean" : 246.6,
          "variance" : 8221.300000000001,
          "n" : 5,
          "max" : 340.0,
          "min" : 106.0,
          "sum" : 1233.0,
          "standardDeviation" : 90.67138468116609
        }, {
          "mean" : 194.5,
          "variance" : 180.5,
          "n" : 2,
          "max" : 204.0,
          "min" : 185.0,
          "sum" : 389.0,
          "standardDeviation" : 13.435028842544403
        } ],
        "23" : [ {
          "mean" : 838.3750000000001,
          "variance" : 542622.5535714286,
          "n" : 3,
          "max" : 2603.0,
          "min" : 371.0,
          "sum" : 2515.1250000000005,
          "standardDeviation" : 736.6291832200436
        }, {
          "mean" : 304.3333333333333,
          "variance" : 28246.26666666666,
          "n" : 6,
          "max" : 547.0,
          "min" : 106.0,
          "sum" : 1826.0,
          "standardDeviation" : 168.06625677591163
        }, {
          "mean" : 327.4,
          "variance" : 28414.3,
          "n" : 5,
          "max" : 607.0,
          "min" : 195.0,
          "sum" : 1637.0,
          "standardDeviation" : 168.56541756837314
        }, {
          "mean" : 306.66666666666663,
          "variance" : 5160.266666666666,
          "n" : 6,
          "max" : 369.0,
          "min" : 197.0,
          "sum" : 1839.9999999999998,
          "standardDeviation" : 71.83499611377916
        }, {
          "mean" : 266.0,
          "variance" : 10458.5,
          "n" : 5,
          "max" : 350.0,
          "min" : 88.0,
          "sum" : 1330.0,
          "standardDeviation" : 102.26680790950698
        }, {
          "mean" : 353.2,
          "variance" : 19586.700000000004,
          "n" : 5,
          "max" : 554.0,
          "min" : 179.0,
          "sum" : 1766.0,
          "standardDeviation" : 139.95249193922916
        }, {
          "mean" : 260.0,
          "variance" : 5269.333333333332,
          "n" : 7,
          "max" : 351.0,
          "min" : 155.0,
          "sum" : 1820.0,
          "standardDeviation" : 72.59017380701972
        }, {
          "mean" : 253.16666666666666,
          "variance" : 7028.16666666667,
          "n" : 6,
          "max" : 327.0,
          "min" : 92.0,
          "sum" : 1519.0,
          "standardDeviation" : 83.83416169239524
        }, {
          "mean" : 290.0,
          "variance" : 8712.0,
          "n" : 2,
          "max" : 356.0,
          "min" : 224.0,
          "sum" : 580.0,
          "standardDeviation" : 93.33809511662427
        } ],
        "24" : [ {
          "mean" : 869.5000000000001,
          "variance" : 640173.142857143,
          "n" : 3,
          "max" : 2677.0,
          "min" : 209.0,
          "sum" : 2608.5000000000005,
          "standardDeviation" : 800.1082069677469
        }, {
          "mean" : 255.33333333333331,
          "variance" : 5967.466666666667,
          "n" : 6,
          "max" : 347.0,
          "min" : 148.0,
          "sum" : 1532.0,
          "standardDeviation" : 77.24937971703505
        }, {
          "mean" : 327.2,
          "variance" : 4692.2,
          "n" : 5,
          "max" : 395.0,
          "min" : 215.0,
          "sum" : 1636.0,
          "standardDeviation" : 68.4996350355241
        }, {
          "mean" : 288.6666666666667,
          "variance" : 7617.466666666667,
          "n" : 6,
          "max" : 396.0,
          "min" : 194.0,
          "sum" : 1732.0,
          "standardDeviation" : 87.27809958212121
        }, {
          "mean" : 216.4,
          "variance" : 13139.800000000003,
          "n" : 5,
          "max" : 371.0,
          "min" : 99.0,
          "sum" : 1082.0,
          "standardDeviation" : 114.62896667073294
        }, {
          "mean" : 255.16666666666666,
          "variance" : 1691.366666666667,
          "n" : 6,
          "max" : 300.0,
          "min" : 192.0,
          "sum" : 1531.0,
          "standardDeviation" : 41.12622845176381
        }, {
          "mean" : 275.2857142857143,
          "variance" : 8303.238095238094,
          "n" : 7,
          "max" : 379.0,
          "min" : 103.0,
          "sum" : 1927.0,
          "standardDeviation" : 91.12210541486678
        }, {
          "mean" : 174.6,
          "variance" : 2498.8000000000006,
          "n" : 5,
          "max" : 229.0,
          "min" : 107.0,
          "sum" : 873.0,
          "standardDeviation" : 49.9879985596543
        }, {
          "mean" : 343.0,
          "variance" : 512.0000000000001,
          "n" : 2,
          "max" : 359.0,
          "min" : 327.0,
          "sum" : 686.0,
          "standardDeviation" : 22.627416997969522
        } ],
        "25" : [ {
          "mean" : 748.875,
          "variance" : 514876.6964285715,
          "n" : 3,
          "max" : 2416.0,
          "min" : 164.0,
          "sum" : 2246.625,
          "standardDeviation" : 717.5490899085382
        }, {
          "mean" : 338.8,
          "variance" : 14852.199999999999,
          "n" : 5,
          "max" : 459.0,
          "min" : 163.0,
          "sum" : 1694.0,
          "standardDeviation" : 121.86960244458008
        }, {
          "mean" : 356.0,
          "variance" : 5113.6,
          "n" : 6,
          "max" : 459.0,
          "min" : 272.0,
          "sum" : 2136.0,
          "standardDeviation" : 71.50943993627695
        }, {
          "mean" : 249.6,
          "variance" : 8613.8,
          "n" : 5,
          "max" : 411.0,
          "min" : 187.0,
          "sum" : 1248.0,
          "standardDeviation" : 92.81055974402912
        }, {
          "mean" : 264.3333333333333,
          "variance" : 10018.666666666666,
          "n" : 6,
          "max" : 359.0,
          "min" : 115.0,
          "sum" : 1586.0,
          "standardDeviation" : 100.09328981838226
        }, {
          "mean" : 277.0,
          "variance" : 804.9999999999997,
          "n" : 5,
          "max" : 300.0,
          "min" : 229.0,
          "sum" : 1385.0,
          "standardDeviation" : 28.37252191822221
        }, {
          "mean" : 455.00000000000006,
          "variance" : 33819.333333333336,
          "n" : 7,
          "max" : 800.0,
          "min" : 280.0,
          "sum" : 3185.0000000000005,
          "standardDeviation" : 183.90033532686485
        }, {
          "mean" : 288.6666666666667,
          "variance" : 7419.066666666668,
          "n" : 6,
          "max" : 422.0,
          "min" : 197.0,
          "sum" : 1732.0,
          "standardDeviation" : 86.13400412535498
        }, {
          "mean" : 292.0,
          "variance" : 881.9999999999999,
          "n" : 2,
          "max" : 313.0,
          "min" : 271.0,
          "sum" : 584.0,
          "standardDeviation" : 29.698484809834994
        } ],
        "26" : [ {
          "mean" : 818.0,
          "variance" : 752062.2857142856,
          "n" : 3,
          "max" : 2952.0,
          "min" : 350.0,
          "sum" : 2454.0,
          "standardDeviation" : 867.215247625574
        }, {
          "mean" : 385.1666666666667,
          "variance" : 5892.166666666665,
          "n" : 6,
          "max" : 504.0,
          "min" : 268.0,
          "sum" : 2311.0,
          "standardDeviation" : 76.76044988577559
        }, {
          "mean" : 247.8,
          "variance" : 3485.7000000000003,
          "n" : 5,
          "max" : 315.0,
          "min" : 173.0,
          "sum" : 1239.0,
          "standardDeviation" : 59.039817072887345
        }, {
          "mean" : 226.0,
          "variance" : 12981.2,
          "n" : 6,
          "max" : 432.0,
          "min" : 104.0,
          "sum" : 1356.0,
          "standardDeviation" : 113.93506922804761
        }, {
          "mean" : 241.6,
          "variance" : 12872.3,
          "n" : 5,
          "max" : 350.0,
          "min" : 99.0,
          "sum" : 1208.0,
          "standardDeviation" : 113.4561589337485
        }, {
          "mean" : 289.0,
          "variance" : 5175.000000000002,
          "n" : 5,
          "max" : 365.0,
          "min" : 182.0,
          "sum" : 1445.0,
          "standardDeviation" : 71.9374728496908
        }, {
          "mean" : 261.2857142857143,
          "variance" : 9242.238095238094,
          "n" : 7,
          "max" : 365.0,
          "min" : 113.0,
          "sum" : 1829.0,
          "standardDeviation" : 96.13655961827475
        }, {
          "mean" : 282.5,
          "variance" : 6901.099999999999,
          "n" : 6,
          "max" : 434.0,
          "min" : 199.0,
          "sum" : 1695.0,
          "standardDeviation" : 83.07285958723222
        }, {
          "mean" : 207.5,
          "variance" : 5940.5,
          "n" : 2,
          "max" : 262.0,
          "min" : 153.0,
          "sum" : 415.0,
          "standardDeviation" : 77.07463914933368
        } ],
        "27" : [ {
          "mean" : 901.8571428571429,
          "variance" : 739508.8095238096,
          "n" : 2,
          "max" : 2767.0,
          "min" : 295.0,
          "sum" : 1803.7142857142858,
          "standardDeviation" : 859.9469806469522
        }, {
          "mean" : 270.5,
          "variance" : 14299.899999999992,
          "n" : 6,
          "max" : 496.0,
          "min" : 167.0,
          "sum" : 1623.0,
          "standardDeviation" : 119.58218930927796
        }, {
          "mean" : 199.33333333333334,
          "variance" : 6940.666666666667,
          "n" : 6,
          "max" : 319.0,
          "min" : 100.0,
          "sum" : 1196.0,
          "standardDeviation" : 83.31066358316123
        }, {
          "mean" : 272.0,
          "variance" : 5207.5,
          "n" : 5,
          "max" : 348.0,
          "min" : 184.0,
          "sum" : 1360.0,
          "standardDeviation" : 72.16300991505274
        }, {
          "mean" : 170.66666666666669,
          "variance" : 4321.466666666666,
          "n" : 6,
          "max" : 274.0,
          "min" : 104.0,
          "sum" : 1024.0,
          "standardDeviation" : 65.73786326514322
        }, {
          "mean" : 227.6,
          "variance" : 3044.7999999999997,
          "n" : 5,
          "max" : 319.0,
          "min" : 183.0,
          "sum" : 1138.0,
          "standardDeviation" : 55.179706414586875
        }, {
          "mean" : 285.4285714285714,
          "variance" : 10023.95238095238,
          "n" : 7,
          "max" : 440.0,
          "min" : 173.0,
          "sum" : 1997.9999999999998,
          "standardDeviation" : 100.11969027595111
        }, {
          "mean" : 238.33333333333334,
          "variance" : 1275.0666666666664,
          "n" : 6,
          "max" : 293.0,
          "min" : 188.0,
          "sum" : 1430.0,
          "standardDeviation" : 35.70807565056771
        }, {
          "mean" : 142.5,
          "variance" : 2112.5,
          "n" : 2,
          "max" : 175.0,
          "min" : 110.0,
          "sum" : 285.0,
          "standardDeviation" : 45.96194077712559
        } ],
        "28" : [ {
          "mean" : 929.3750000000001,
          "variance" : 1012929.125,
          "n" : 3,
          "max" : 3351.0,
          "min" : 239.0,
          "sum" : 2788.1250000000005,
          "standardDeviation" : 1006.4438012129639
        }, {
          "mean" : 330.5,
          "variance" : 15653.1,
          "n" : 6,
          "max" : 563.0,
          "min" : 184.0,
          "sum" : 1983.0,
          "standardDeviation" : 125.1123495103501
        }, {
          "mean" : 278.6666666666667,
          "variance" : 1492.2666666666667,
          "n" : 6,
          "max" : 321.0,
          "min" : 218.0,
          "sum" : 1672.0,
          "standardDeviation" : 38.629867546584556
        }, {
          "mean" : 237.2,
          "variance" : 3876.7000000000003,
          "n" : 5,
          "max" : 313.0,
          "min" : 153.0,
          "sum" : 1186.0,
          "standardDeviation" : 62.26315122124803
        }, {
          "mean" : 248.6,
          "variance" : 1429.8,
          "n" : 5,
          "max" : 294.0,
          "min" : 210.0,
          "sum" : 1243.0,
          "standardDeviation" : 37.8126962804823
        }, {
          "mean" : 243.14285714285714,
          "variance" : 1532.4761904761904,
          "n" : 7,
          "max" : 313.0,
          "min" : 188.0,
          "sum" : 1702.0,
          "standardDeviation" : 39.14685415810816
        }, {
          "mean" : 229.33333333333334,
          "variance" : 4795.466666666665,
          "n" : 6,
          "max" : 305.0,
          "min" : 114.0,
          "sum" : 1376.0,
          "standardDeviation" : 69.24930805911829
        }, {
          "mean" : 216.83333333333331,
          "variance" : 6138.966666666666,
          "n" : 6,
          "max" : 340.0,
          "min" : 104.0,
          "sum" : 1301.0,
          "standardDeviation" : 78.35155816361706
        }, {
          "mean" : 216.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 216.0,
          "min" : 216.0,
          "sum" : 216.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 879.5,
          "variance" : 904291.1428571427,
          "n" : 3,
          "max" : 3213.0,
          "min" : 367.0,
          "sum" : 2638.5,
          "standardDeviation" : 950.9422394957239
        }, {
          "mean" : 339.5,
          "variance" : 26815.899999999998,
          "n" : 6,
          "max" : 652.0,
          "min" : 186.0,
          "sum" : 2037.0,
          "standardDeviation" : 163.75561059090464
        }, {
          "mean" : 315.2,
          "variance" : 4468.199999999999,
          "n" : 5,
          "max" : 407.0,
          "min" : 240.0,
          "sum" : 1576.0,
          "standardDeviation" : 66.84459589226341
        }, {
          "mean" : 295.83333333333337,
          "variance" : 3426.9666666666667,
          "n" : 6,
          "max" : 352.0,
          "min" : 219.0,
          "sum" : 1775.0000000000002,
          "standardDeviation" : 58.54029950954015
        }, {
          "mean" : 311.8,
          "variance" : 484.70000000000005,
          "n" : 5,
          "max" : 338.0,
          "min" : 289.0,
          "sum" : 1559.0,
          "standardDeviation" : 22.01590334281108
        }, {
          "mean" : 293.4,
          "variance" : 6206.300000000001,
          "n" : 5,
          "max" : 372.0,
          "min" : 180.0,
          "sum" : 1467.0,
          "standardDeviation" : 78.7800736227125
        }, {
          "mean" : 279.87500000000006,
          "variance" : 1425.2678571428585,
          "n" : 8,
          "max" : 327.0,
          "min" : 220.0,
          "sum" : 2239.0000000000005,
          "standardDeviation" : 37.7527198641748
        }, {
          "mean" : 302.2,
          "variance" : 819.1999999999999,
          "n" : 5,
          "max" : 346.0,
          "min" : 268.0,
          "sum" : 1511.0,
          "standardDeviation" : 28.621670111997307
        }, {
          "mean" : 311.0,
          "variance" : 7688.0,
          "n" : 2,
          "max" : 373.0,
          "min" : 249.0,
          "sum" : 622.0,
          "standardDeviation" : 87.68124086713189
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultElement#<init>",
    "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultElement.<init>()",
    "otherKiekerPattern" : "protected org.apache.flink.api.java.ExecutionEnvironment org.gradoop.model.FlinkTestBase.getExecutionEnvironment()",
    "module" : "gradoop-core",
    "name" : "DefaultElement#<init>",
    "key" : "org.gradoop.model.impl.DefaultElement.<init>_",
    "otherKey" : "org.gradoop.model.FlinkTestBase.getExecutionEnvironment_",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 187.0566286613448,
      "meanCurrent" : 366.548275862069,
      "deviationOld" : 23.78020503667852,
      "deviationCurrent" : 53.296944867774954,
      "vms" : 29,
      "callsOld" : 217366,
      "calls" : 150,
      "tvalue" : -16.56215850553453,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 189.88722349689078,
    "inVMDeviation" : 185.48611469147843,
    "ess" : 1,
    "values" : [ 349.0, 359.0, 340.53333333333336, 368.4666666666667, 405.2, 409.0, 334.8, 454.8, 332.4, 324.2, 312.73333333333335, 411.6, 254.6, 295.4, 405.9333333333333, 337.6666666666667, 415.66666666666663, 418.0666666666666, 356.0, 338.8, 376.5333333333333, 444.8, 2329.5333333333333, 425.6, 394.2, 390.8, 428.5, 291.4, 260.3, 393.9 ],
    "valuesPredecessor" : [ 187.98767649105858, 173.6114370880522, 189.50596074202997, 186.83065034597502, 170.52598768018868, 163.16220130518386, 183.54087506526244, 184.1205066101157, 298.8862225574491, 178.0859929134919, 201.984203361675, 206.40955531216431, 172.9830693017695, 175.3525945058004, 179.3790965897023, 187.4548175618463, 167.95288950738248, 183.3731776028401, 203.2960805305514, 185.282627105872, 174.91013536106064, 180.40976609686655, 182.38605858446437, 336.9217197795514, 181.9051426614911, 186.98414562884875, 194.1328174821571, 178.1181019795908, 174.2192237120292, 191.85121749407892 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 402.0,
          "variance" : 577.9999999999999,
          "n" : 1,
          "max" : 419.0,
          "min" : 385.0,
          "sum" : 402.0,
          "standardDeviation" : 24.041630560342615
        }, {
          "mean" : 374.5,
          "variance" : 2964.5,
          "n" : 2,
          "max" : 413.0,
          "min" : 336.0,
          "sum" : 749.0,
          "standardDeviation" : 54.44722215136416
        }, {
          "mean" : 297.0,
          "variance" : 338.0,
          "n" : 2,
          "max" : 310.0,
          "min" : 284.0,
          "sum" : 594.0,
          "standardDeviation" : 18.384776310850235
        } ],
        "1" : [ {
          "mean" : 474.0,
          "variance" : 50367.0,
          "n" : 1,
          "max" : 733.0,
          "min" : 337.0,
          "sum" : 474.0,
          "standardDeviation" : 224.42593433023734
        }, {
          "mean" : 362.5,
          "variance" : 10804.5,
          "n" : 2,
          "max" : 436.0,
          "min" : 289.0,
          "sum" : 725.0,
          "standardDeviation" : 103.94469683442249
        }, {
          "mean" : 298.0,
          "variance" : 9247.999999999998,
          "n" : 2,
          "max" : 366.0,
          "min" : 230.0,
          "sum" : 596.0,
          "standardDeviation" : 96.16652224137046
        } ],
        "2" : [ {
          "mean" : 304.6666666666667,
          "variance" : 3684.3333333333335,
          "n" : 1,
          "max" : 373.0,
          "min" : 257.0,
          "sum" : 304.6666666666667,
          "standardDeviation" : 60.69870948655608
        }, {
          "mean" : 331.0,
          "variance" : 800.0000000000001,
          "n" : 2,
          "max" : 351.0,
          "min" : 311.0,
          "sum" : 662.0,
          "standardDeviation" : 28.284271247461902
        }, {
          "mean" : 368.0,
          "variance" : 4802.000000000001,
          "n" : 2,
          "max" : 417.0,
          "min" : 319.0,
          "sum" : 736.0,
          "standardDeviation" : 69.29646455628166
        } ],
        "3" : [ {
          "mean" : 688.3333333333334,
          "variance" : 122634.33333333331,
          "n" : 1,
          "max" : 895.0,
          "min" : 284.0,
          "sum" : 688.3333333333334,
          "standardDeviation" : 350.19185218010614
        }, {
          "mean" : 283.0,
          "variance" : 128.00000000000003,
          "n" : 2,
          "max" : 291.0,
          "min" : 275.0,
          "sum" : 566.0,
          "standardDeviation" : 11.313708498984761
        }, {
          "mean" : 294.0,
          "variance" : 7937.999999999999,
          "n" : 2,
          "max" : 357.0,
          "min" : 231.0,
          "sum" : 588.0,
          "standardDeviation" : 89.09545442950498
        } ],
        "4" : [ {
          "mean" : 710.0,
          "variance" : 255531.0,
          "n" : 1,
          "max" : 1216.0,
          "min" : 205.0,
          "sum" : 710.0,
          "standardDeviation" : 505.5007418392183
        }, {
          "mean" : 304.5,
          "variance" : 1404.4999999999998,
          "n" : 2,
          "max" : 331.0,
          "min" : 278.0,
          "sum" : 609.0,
          "standardDeviation" : 37.476659402887016
        }, {
          "mean" : 353.5,
          "variance" : 480.5,
          "n" : 2,
          "max" : 369.0,
          "min" : 338.0,
          "sum" : 707.0,
          "standardDeviation" : 21.920310216782973
        } ],
        "5" : [ {
          "mean" : 493.0,
          "variance" : 39217.0,
          "n" : 1,
          "max" : 709.0,
          "min" : 320.0,
          "sum" : 493.0,
          "standardDeviation" : 198.03282556182447
        }, {
          "mean" : 368.0,
          "variance" : 2888.0,
          "n" : 2,
          "max" : 406.0,
          "min" : 330.0,
          "sum" : 736.0,
          "standardDeviation" : 53.74011537017761
        }, {
          "mean" : 408.0,
          "variance" : 5408.0,
          "n" : 2,
          "max" : 460.0,
          "min" : 356.0,
          "sum" : 816.0,
          "standardDeviation" : 73.53910524340094
        } ],
        "6" : [ {
          "mean" : 435.0,
          "variance" : 4909.0,
          "n" : 1,
          "max" : 495.0,
          "min" : 358.0,
          "sum" : 435.0,
          "standardDeviation" : 70.06425622241343
        }, {
          "mean" : 294.0,
          "variance" : 5408.0,
          "n" : 2,
          "max" : 346.0,
          "min" : 242.0,
          "sum" : 588.0,
          "standardDeviation" : 73.53910524340094
        }, {
          "mean" : 325.5,
          "variance" : 312.5,
          "n" : 2,
          "max" : 338.0,
          "min" : 313.0,
          "sum" : 651.0,
          "standardDeviation" : 17.67766952966369
        } ],
        "7" : [ {
          "mean" : 698.0,
          "variance" : 11250.0,
          "n" : 1,
          "max" : 773.0,
          "min" : 623.0,
          "sum" : 698.0,
          "standardDeviation" : 106.06601717798213
        }, {
          "mean" : 368.5,
          "variance" : 1512.5,
          "n" : 2,
          "max" : 396.0,
          "min" : 341.0,
          "sum" : 737.0,
          "standardDeviation" : 38.890872965260115
        }, {
          "mean" : 419.5,
          "variance" : 364.50000000000006,
          "n" : 2,
          "max" : 433.0,
          "min" : 406.0,
          "sum" : 839.0,
          "standardDeviation" : 19.091883092036785
        } ],
        "8" : [ {
          "mean" : 387.0,
          "variance" : 27001.000000000004,
          "n" : 1,
          "max" : 576.0,
          "min" : 278.0,
          "sum" : 387.0,
          "standardDeviation" : 164.3198101264726
        }, {
          "mean" : 400.0,
          "variance" : 1151.9999999999998,
          "n" : 2,
          "max" : 424.0,
          "min" : 376.0,
          "sum" : 800.0,
          "standardDeviation" : 33.94112549695428
        }, {
          "mean" : 237.5,
          "variance" : 144.49999999999997,
          "n" : 2,
          "max" : 246.0,
          "min" : 229.0,
          "sum" : 475.0,
          "standardDeviation" : 12.020815280171307
        } ],
        "9" : [ {
          "mean" : 394.0,
          "variance" : 1597.0,
          "n" : 1,
          "max" : 437.0,
          "min" : 358.0,
          "sum" : 394.0,
          "standardDeviation" : 39.96248240537617
        }, {
          "mean" : 336.5,
          "variance" : 6160.499999999999,
          "n" : 2,
          "max" : 392.0,
          "min" : 281.0,
          "sum" : 673.0,
          "standardDeviation" : 78.48885271170677
        }, {
          "mean" : 277.0,
          "variance" : 1058.0,
          "n" : 2,
          "max" : 300.0,
          "min" : 254.0,
          "sum" : 554.0,
          "standardDeviation" : 32.526911934581186
        } ],
        "10" : [ {
          "mean" : 353.6666666666667,
          "variance" : 4521.333333333332,
          "n" : 1,
          "max" : 431.0,
          "min" : 309.0,
          "sum" : 353.6666666666667,
          "standardDeviation" : 67.24086059334259
        }, {
          "mean" : 270.0,
          "variance" : 13448.0,
          "n" : 2,
          "max" : 352.0,
          "min" : 188.0,
          "sum" : 540.0,
          "standardDeviation" : 115.96551211459379
        }, {
          "mean" : 335.0,
          "variance" : 15487.999999999998,
          "n" : 2,
          "max" : 423.0,
          "min" : 247.0,
          "sum" : 670.0,
          "standardDeviation" : 124.45079348883236
        } ],
        "11" : [ {
          "mean" : 376.0,
          "variance" : 1568.0,
          "n" : 1,
          "max" : 404.0,
          "min" : 348.0,
          "sum" : 376.0,
          "standardDeviation" : 39.59797974644666
        }, {
          "mean" : 407.5,
          "variance" : 41760.5,
          "n" : 2,
          "max" : 552.0,
          "min" : 263.0,
          "sum" : 815.0,
          "standardDeviation" : 204.35385976291224
        }, {
          "mean" : 433.5,
          "variance" : 34060.50000000001,
          "n" : 2,
          "max" : 564.0,
          "min" : 303.0,
          "sum" : 867.0,
          "standardDeviation" : 184.55486988968892
        } ],
        "12" : [ {
          "mean" : 273.5,
          "variance" : 1624.5,
          "n" : 2,
          "max" : 302.0,
          "min" : 245.0,
          "sum" : 547.0,
          "standardDeviation" : 40.30508652763321
        }, {
          "mean" : 239.0,
          "variance" : 4232.0,
          "n" : 2,
          "max" : 285.0,
          "min" : 193.0,
          "sum" : 478.0,
          "standardDeviation" : 65.05382386916237
        }, {
          "mean" : 248.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 248.0,
          "min" : 248.0,
          "sum" : 248.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 563.0,
          "variance" : 72489.0,
          "n" : 1,
          "max" : 850.0,
          "min" : 316.0,
          "sum" : 563.0,
          "standardDeviation" : 269.23781309466915
        }, {
          "mean" : 182.0,
          "variance" : 162.0,
          "n" : 2,
          "max" : 191.0,
          "min" : 173.0,
          "sum" : 364.0,
          "standardDeviation" : 12.727922061357855
        }, {
          "mean" : 275.0,
          "variance" : 3527.9999999999995,
          "n" : 2,
          "max" : 317.0,
          "min" : 233.0,
          "sum" : 550.0,
          "standardDeviation" : 59.39696961966999
        } ],
        "14" : [ {
          "mean" : 529.6666666666666,
          "variance" : 149326.33333333334,
          "n" : 1,
          "max" : 970.0,
          "min" : 247.0,
          "sum" : 529.6666666666666,
          "standardDeviation" : 386.4276560151115
        }, {
          "mean" : 428.0,
          "variance" : 8.000000000000002,
          "n" : 2,
          "max" : 430.0,
          "min" : 426.0,
          "sum" : 856.0,
          "standardDeviation" : 2.8284271247461903
        }, {
          "mean" : 322.0,
          "variance" : 200.00000000000003,
          "n" : 2,
          "max" : 332.0,
          "min" : 312.0,
          "sum" : 644.0,
          "standardDeviation" : 14.142135623730951
        } ],
        "15" : [ {
          "mean" : 512.3333333333334,
          "variance" : 119580.33333333333,
          "n" : 1,
          "max" : 902.0,
          "min" : 242.0,
          "sum" : 512.3333333333334,
          "standardDeviation" : 345.8038943293342
        }, {
          "mean" : 346.5,
          "variance" : 17860.5,
          "n" : 2,
          "max" : 441.0,
          "min" : 252.0,
          "sum" : 693.0,
          "standardDeviation" : 133.64318164425748
        }, {
          "mean" : 241.5,
          "variance" : 1984.4999999999998,
          "n" : 2,
          "max" : 273.0,
          "min" : 210.0,
          "sum" : 483.0,
          "standardDeviation" : 44.54772721475249
        } ],
        "16" : [ {
          "mean" : 469.3333333333333,
          "variance" : 160.33333333333334,
          "n" : 1,
          "max" : 483.0,
          "min" : 458.0,
          "sum" : 469.3333333333333,
          "standardDeviation" : 12.662279942148386
        }, {
          "mean" : 410.0,
          "variance" : 1681.9999999999998,
          "n" : 2,
          "max" : 439.0,
          "min" : 381.0,
          "sum" : 820.0,
          "standardDeviation" : 41.012193308819754
        }, {
          "mean" : 394.5,
          "variance" : 6160.499999999999,
          "n" : 2,
          "max" : 450.0,
          "min" : 339.0,
          "sum" : 789.0,
          "standardDeviation" : 78.48885271170677
        } ],
        "17" : [ {
          "mean" : 454.3333333333333,
          "variance" : 3506.3333333333335,
          "n" : 1,
          "max" : 520.0,
          "min" : 405.0,
          "sum" : 454.3333333333333,
          "standardDeviation" : 59.21430007467228
        }, {
          "mean" : 471.0,
          "variance" : 33282.0,
          "n" : 2,
          "max" : 600.0,
          "min" : 342.0,
          "sum" : 942.0,
          "standardDeviation" : 182.43354954612926
        }, {
          "mean" : 347.0,
          "variance" : 5617.999999999999,
          "n" : 2,
          "max" : 400.0,
          "min" : 294.0,
          "sum" : 694.0,
          "standardDeviation" : 74.95331880577403
        } ],
        "18" : [ {
          "mean" : 407.0,
          "variance" : 22968.999999999996,
          "n" : 1,
          "max" : 582.0,
          "min" : 319.0,
          "sum" : 407.0,
          "standardDeviation" : 151.5552704461313
        }, {
          "mean" : 317.5,
          "variance" : 840.5,
          "n" : 2,
          "max" : 338.0,
          "min" : 297.0,
          "sum" : 635.0,
          "standardDeviation" : 28.991378028648448
        }, {
          "mean" : 369.0,
          "variance" : 338.0,
          "n" : 2,
          "max" : 382.0,
          "min" : 356.0,
          "sum" : 738.0,
          "standardDeviation" : 18.384776310850235
        } ],
        "19" : [ {
          "mean" : 316.6666666666667,
          "variance" : 441.3333333333334,
          "n" : 3,
          "max" : 338.0,
          "min" : 296.0,
          "sum" : 950.0,
          "standardDeviation" : 21.007935008784976
        }, {
          "mean" : 372.0,
          "variance" : 241.99999999999997,
          "n" : 2,
          "max" : 383.0,
          "min" : 361.0,
          "sum" : 744.0,
          "standardDeviation" : 15.556349186104045
        } ],
        "20" : [ {
          "mean" : 659.6666666666666,
          "variance" : 157908.33333333334,
          "n" : 1,
          "max" : 1088.0,
          "min" : 303.0,
          "sum" : 659.6666666666666,
          "standardDeviation" : 397.3768152941655
        }, {
          "mean" : 320.5,
          "variance" : 112.50000000000001,
          "n" : 2,
          "max" : 328.0,
          "min" : 313.0,
          "sum" : 641.0,
          "standardDeviation" : 10.606601717798213
        }, {
          "mean" : 291.0,
          "variance" : 2450.0,
          "n" : 2,
          "max" : 326.0,
          "min" : 256.0,
          "sum" : 582.0,
          "standardDeviation" : 49.49747468305833
        } ],
        "21" : [ {
          "mean" : 583.0,
          "variance" : 13333.0,
          "n" : 1,
          "max" : 670.0,
          "min" : 452.0,
          "sum" : 583.0,
          "standardDeviation" : 115.46861045323097
        }, {
          "mean" : 429.5,
          "variance" : 760.4999999999999,
          "n" : 2,
          "max" : 449.0,
          "min" : 410.0,
          "sum" : 859.0,
          "standardDeviation" : 27.577164466275352
        }, {
          "mean" : 391.0,
          "variance" : 967.9999999999999,
          "n" : 2,
          "max" : 413.0,
          "min" : 369.0,
          "sum" : 782.0,
          "standardDeviation" : 31.11269837220809
        } ],
        "22" : [ {
          "mean" : 390.6666666666667,
          "variance" : 2094.3333333333335,
          "n" : 1,
          "max" : 439.0,
          "min" : 348.0,
          "sum" : 390.6666666666667,
          "standardDeviation" : 45.76388678131845
        }, {
          "mean" : 5344.0,
          "variance" : 5.022024199999999E7,
          "n" : 2,
          "max" : 10355.0,
          "min" : 333.0,
          "sum" : 10688.0,
          "standardDeviation" : 7086.624161051579
        }, {
          "mean" : 284.5,
          "variance" : 364.50000000000006,
          "n" : 2,
          "max" : 298.0,
          "min" : 271.0,
          "sum" : 569.0,
          "standardDeviation" : 19.091883092036785
        } ],
        "23" : [ {
          "mean" : 495.0,
          "variance" : 14748.999999999998,
          "n" : 1,
          "max" : 628.0,
          "min" : 390.0,
          "sum" : 495.0,
          "standardDeviation" : 121.4454610102823
        }, {
          "mean" : 425.5,
          "variance" : 7320.499999999999,
          "n" : 2,
          "max" : 486.0,
          "min" : 365.0,
          "sum" : 851.0,
          "standardDeviation" : 85.55992052357225
        }, {
          "mean" : 391.0,
          "variance" : 50.00000000000001,
          "n" : 2,
          "max" : 396.0,
          "min" : 386.0,
          "sum" : 782.0,
          "standardDeviation" : 7.0710678118654755
        } ],
        "24" : [ {
          "mean" : 631.0,
          "variance" : 322077.00000000006,
          "n" : 1,
          "max" : 1283.0,
          "min" : 248.0,
          "sum" : 631.0,
          "standardDeviation" : 567.5182816438604
        }, {
          "mean" : 412.5,
          "variance" : 26220.5,
          "n" : 2,
          "max" : 527.0,
          "min" : 298.0,
          "sum" : 825.0,
          "standardDeviation" : 161.92745289171938
        }, {
          "mean" : 257.5,
          "variance" : 2380.5000000000005,
          "n" : 2,
          "max" : 292.0,
          "min" : 223.0,
          "sum" : 515.0,
          "standardDeviation" : 48.79036790187178
        } ],
        "25" : [ {
          "mean" : 526.0,
          "variance" : 59743.0,
          "n" : 1,
          "max" : 808.0,
          "min" : 375.0,
          "sum" : 526.0,
          "standardDeviation" : 244.4238122605897
        }, {
          "mean" : 343.5,
          "variance" : 1860.5,
          "n" : 2,
          "max" : 374.0,
          "min" : 313.0,
          "sum" : 687.0,
          "standardDeviation" : 43.1335136523794
        }, {
          "mean" : 370.5,
          "variance" : 12012.5,
          "n" : 2,
          "max" : 448.0,
          "min" : 293.0,
          "sum" : 741.0,
          "standardDeviation" : 109.60155108391487
        } ],
        "26" : [ {
          "mean" : 344.5,
          "variance" : 480.5,
          "n" : 1,
          "max" : 360.0,
          "min" : 329.0,
          "sum" : 344.5,
          "standardDeviation" : 21.920310216782973
        }, {
          "mean" : 403.0,
          "variance" : 8712.0,
          "n" : 2,
          "max" : 469.0,
          "min" : 337.0,
          "sum" : 806.0,
          "standardDeviation" : 93.33809511662427
        }, {
          "mean" : 496.0,
          "variance" : 78408.0,
          "n" : 2,
          "max" : 694.0,
          "min" : 298.0,
          "sum" : 992.0,
          "standardDeviation" : 280.0142853498728
        } ],
        "27" : [ {
          "mean" : 350.0,
          "variance" : 3963.0000000000005,
          "n" : 1,
          "max" : 399.0,
          "min" : 279.0,
          "sum" : 350.0,
          "standardDeviation" : 62.95236294214857
        }, {
          "mean" : 333.0,
          "variance" : 32.00000000000001,
          "n" : 2,
          "max" : 337.0,
          "min" : 329.0,
          "sum" : 666.0,
          "standardDeviation" : 5.656854249492381
        }, {
          "mean" : 220.5,
          "variance" : 1984.4999999999998,
          "n" : 2,
          "max" : 252.0,
          "min" : 189.0,
          "sum" : 441.0,
          "standardDeviation" : 44.54772721475249
        } ],
        "28" : [ {
          "mean" : 294.5,
          "variance" : 312.5,
          "n" : 1,
          "max" : 307.0,
          "min" : 282.0,
          "sum" : 294.5,
          "standardDeviation" : 17.67766952966369
        }, {
          "mean" : 274.5,
          "variance" : 3444.4999999999995,
          "n" : 2,
          "max" : 316.0,
          "min" : 233.0,
          "sum" : 549.0,
          "standardDeviation" : 58.68986283848344
        }, {
          "mean" : 229.0,
          "variance" : 3527.9999999999995,
          "n" : 2,
          "max" : 271.0,
          "min" : 187.0,
          "sum" : 458.0,
          "standardDeviation" : 59.39696961966999
        } ],
        "29" : [ {
          "mean" : 355.5,
          "variance" : 144.49999999999997,
          "n" : 1,
          "max" : 364.0,
          "min" : 347.0,
          "sum" : 355.5,
          "standardDeviation" : 12.020815280171307
        }, {
          "mean" : 381.0,
          "variance" : 162.0,
          "n" : 2,
          "max" : 390.0,
          "min" : 372.0,
          "sum" : 762.0,
          "standardDeviation" : 12.727922061357855
        }, {
          "mean" : 426.0,
          "variance" : 722.0,
          "n" : 2,
          "max" : 445.0,
          "min" : 407.0,
          "sum" : 852.0,
          "standardDeviation" : 26.870057685088806
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 670.2542997542992,
          "variance" : 3862358.571168445,
          "n" : 809,
          "max" : 35782.0,
          "min" : 66.0,
          "sum" : 542235.728501228,
          "standardDeviation" : 1965.2884193340287
        }, {
          "mean" : 177.46987951807222,
          "variance" : 23730.277153139486,
          "n" : 1079,
          "max" : 1022.0,
          "min" : 38.0,
          "sum" : 191489.9999999999,
          "standardDeviation" : 154.04634741901376
        }, {
          "mean" : 180.08232118758463,
          "variance" : 150729.28105190222,
          "n" : 741,
          "max" : 10074.0,
          "min" : 38.0,
          "sum" : 133441.0000000002,
          "standardDeviation" : 388.23869082292947
        }, {
          "mean" : 116.74561403508783,
          "variance" : 9582.317891655099,
          "n" : 798,
          "max" : 731.0,
          "min" : 17.0,
          "sum" : 93163.00000000009,
          "standardDeviation" : 97.88931449170077
        }, {
          "mean" : 113.96765498652303,
          "variance" : 9782.536064399013,
          "n" : 742,
          "max" : 864.0,
          "min" : 28.0,
          "sum" : 84564.00000000009,
          "standardDeviation" : 98.90670383952249
        }, {
          "mean" : 113.28444444444443,
          "variance" : 357826.8778445191,
          "n" : 900,
          "max" : 17869.0,
          "min" : 16.0,
          "sum" : 101955.99999999999,
          "standardDeviation" : 598.1863236856215
        }, {
          "mean" : 94.77415730337076,
          "variance" : 6861.815079435301,
          "n" : 890,
          "max" : 747.0,
          "min" : 15.0,
          "sum" : 84348.99999999997,
          "standardDeviation" : 82.83607353946287
        }, {
          "mean" : 102.99558011049727,
          "variance" : 104498.68139637209,
          "n" : 905,
          "max" : 9497.0,
          "min" : 18.0,
          "sum" : 93211.00000000003,
          "standardDeviation" : 323.2625579871138
        }, {
          "mean" : 98.34999999999997,
          "variance" : 6191.716226912928,
          "n" : 380,
          "max" : 478.0,
          "min" : 16.0,
          "sum" : 37372.999999999985,
          "standardDeviation" : 78.68745914637813
        } ],
        "1" : [ {
          "mean" : 495.1830845771142,
          "variance" : 1414628.3529008315,
          "n" : 1000,
          "max" : 23656.0,
          "min" : 55.0,
          "sum" : 495183.0845771142,
          "standardDeviation" : 1189.3815001507428
        }, {
          "mean" : 180.11148648648657,
          "variance" : 131449.83310353765,
          "n" : 888,
          "max" : 10131.0,
          "min" : 40.0,
          "sum" : 159939.0000000001,
          "standardDeviation" : 362.5601096418877
        }, {
          "mean" : 158.09472259810548,
          "variance" : 53626.2457580191,
          "n" : 739,
          "max" : 5573.0,
          "min" : 39.0,
          "sum" : 116831.99999999994,
          "standardDeviation" : 231.5734133229009
        }, {
          "mean" : 116.81308411214954,
          "variance" : 10766.970363336504,
          "n" : 749,
          "max" : 747.0,
          "min" : 14.0,
          "sum" : 87493.0,
          "standardDeviation" : 103.76401285289859
        }, {
          "mean" : 108.14912280701758,
          "variance" : 8996.67911466244,
          "n" : 798,
          "max" : 879.0,
          "min" : 15.0,
          "sum" : 86303.00000000003,
          "standardDeviation" : 94.85082558766919
        }, {
          "mean" : 103.5207631874299,
          "variance" : 8297.694793124745,
          "n" : 891,
          "max" : 687.0,
          "min" : 17.0,
          "sum" : 92237.00000000004,
          "standardDeviation" : 91.09168344654053
        }, {
          "mean" : 93.98870056497182,
          "variance" : 6949.038333716801,
          "n" : 885,
          "max" : 790.0,
          "min" : 16.0,
          "sum" : 83180.00000000006,
          "standardDeviation" : 83.36089211204977
        }, {
          "mean" : 110.85434782608702,
          "variance" : 197336.76657520016,
          "n" : 920,
          "max" : 13239.0,
          "min" : 16.0,
          "sum" : 101986.00000000006,
          "standardDeviation" : 444.22603095181194
        }, {
          "mean" : 92.8620689655172,
          "variance" : 4773.890498899482,
          "n" : 377,
          "max" : 478.0,
          "min" : 16.0,
          "sum" : 35008.999999999985,
          "standardDeviation" : 69.09334627082033
        } ],
        "2" : [ {
          "mean" : 608.7616926503349,
          "variance" : 966480.6700136337,
          "n" : 893,
          "max" : 14023.0,
          "min" : 50.0,
          "sum" : 543624.191536749,
          "standardDeviation" : 983.0974875431397
        }, {
          "mean" : 164.06881720430107,
          "variance" : 19361.71323541326,
          "n" : 930,
          "max" : 1005.0,
          "min" : 30.0,
          "sum" : 152584.0,
          "standardDeviation" : 139.14637341811414
        }, {
          "mean" : 143.23027166882287,
          "variance" : 130999.6619321801,
          "n" : 773,
          "max" : 9682.0,
          "min" : 35.0,
          "sum" : 110717.00000000007,
          "standardDeviation" : 361.93875439386164
        }, {
          "mean" : 140.28289473684197,
          "variance" : 137587.74463456063,
          "n" : 760,
          "max" : 9813.0,
          "min" : 19.0,
          "sum" : 106614.9999999999,
          "standardDeviation" : 370.9282203264678
        }, {
          "mean" : 112.45112781954883,
          "variance" : 10454.265488061448,
          "n" : 798,
          "max" : 870.0,
          "min" : 14.0,
          "sum" : 89735.99999999997,
          "standardDeviation" : 102.24610255682829
        }, {
          "mean" : 147.4323699421967,
          "variance" : 351612.65543245577,
          "n" : 865,
          "max" : 10235.0,
          "min" : 19.0,
          "sum" : 127529.00000000013,
          "standardDeviation" : 592.9693545474806
        }, {
          "mean" : 115.72528735632181,
          "variance" : 119522.17185693684,
          "n" : 870,
          "max" : 9914.0,
          "min" : 19.0,
          "sum" : 100680.99999999999,
          "standardDeviation" : 345.71978806099145
        }, {
          "mean" : 98.51035986913841,
          "variance" : 6964.112610896552,
          "n" : 917,
          "max" : 749.0,
          "min" : 14.0,
          "sum" : 90333.99999999993,
          "standardDeviation" : 83.45125889341965
        }, {
          "mean" : 116.68181818181817,
          "variance" : 240664.73679850897,
          "n" : 440,
          "max" : 10255.0,
          "min" : 14.0,
          "sum" : 51339.99999999999,
          "standardDeviation" : 490.57592358218005
        } ],
        "3" : [ {
          "mean" : 614.3537787513692,
          "variance" : 3200837.875799844,
          "n" : 908,
          "max" : 27242.0,
          "min" : 64.0,
          "sum" : 557833.2311062432,
          "standardDeviation" : 1789.0885600774054
        }, {
          "mean" : 159.2158634538153,
          "variance" : 228969.48601945466,
          "n" : 996,
          "max" : 14901.0,
          "min" : 35.0,
          "sum" : 158579.00000000003,
          "standardDeviation" : 478.5075610891166
        }, {
          "mean" : 152.26366120218577,
          "variance" : 140191.23955319822,
          "n" : 732,
          "max" : 9871.0,
          "min" : 38.0,
          "sum" : 111456.99999999999,
          "standardDeviation" : 374.42120606770953
        }, {
          "mean" : 144.65341614906836,
          "variance" : 236724.4282376937,
          "n" : 805,
          "max" : 9651.0,
          "min" : 16.0,
          "sum" : 116446.00000000003,
          "standardDeviation" : 486.543346720201
        }, {
          "mean" : 113.82723833543504,
          "variance" : 12926.155721782787,
          "n" : 793,
          "max" : 914.0,
          "min" : 16.0,
          "sum" : 90264.99999999999,
          "standardDeviation" : 113.69325275399058
        }, {
          "mean" : 105.11137440758277,
          "variance" : 9723.188055522756,
          "n" : 844,
          "max" : 919.0,
          "min" : 17.0,
          "sum" : 88713.99999999985,
          "standardDeviation" : 98.6062272654357
        }, {
          "mean" : 109.51545253863131,
          "variance" : 120337.90307587241,
          "n" : 906,
          "max" : 10180.0,
          "min" : 15.0,
          "sum" : 99220.99999999997,
          "standardDeviation" : 346.8975397374164
        }, {
          "mean" : 109.17035398230078,
          "variance" : 121890.37404815803,
          "n" : 904,
          "max" : 10194.0,
          "min" : 17.0,
          "sum" : 98689.99999999991,
          "standardDeviation" : 349.12801956897994
        }, {
          "mean" : 90.43820224719096,
          "variance" : 5928.382085773068,
          "n" : 356,
          "max" : 611.0,
          "min" : 15.0,
          "sum" : 32195.99999999998,
          "standardDeviation" : 76.99598746540671
        } ],
        "4" : [ {
          "mean" : 552.6334563345633,
          "variance" : 1465946.9640024474,
          "n" : 808,
          "max" : 23075.0,
          "min" : 40.0,
          "sum" : 446527.8327183272,
          "standardDeviation" : 1210.7629677201262
        }, {
          "mean" : 190.593439363817,
          "variance" : 162172.89225542234,
          "n" : 1006,
          "max" : 12145.0,
          "min" : 39.0,
          "sum" : 191736.9999999999,
          "standardDeviation" : 402.70695580710094
        }, {
          "mean" : 156.39697802197827,
          "variance" : 82760.54508026372,
          "n" : 728,
          "max" : 7160.0,
          "min" : 37.0,
          "sum" : 113857.00000000017,
          "standardDeviation" : 287.68132556748225
        }, {
          "mean" : 116.43316831683168,
          "variance" : 10331.12811783037,
          "n" : 808,
          "max" : 695.0,
          "min" : 16.0,
          "sum" : 94078.0,
          "standardDeviation" : 101.64215718800133
        }, {
          "mean" : 106.66871921182269,
          "variance" : 10345.795173203416,
          "n" : 812,
          "max" : 932.0,
          "min" : 15.0,
          "sum" : 86615.00000000003,
          "standardDeviation" : 101.71428205126071
        }, {
          "mean" : 98.41638608305276,
          "variance" : 7902.308450295709,
          "n" : 891,
          "max" : 694.0,
          "min" : 14.0,
          "sum" : 87689.0,
          "standardDeviation" : 88.89492927212277
        }, {
          "mean" : 104.8079161816067,
          "variance" : 122402.89662723777,
          "n" : 859,
          "max" : 10025.0,
          "min" : 14.0,
          "sum" : 90030.00000000016,
          "standardDeviation" : 349.86125339516775
        }, {
          "mean" : 92.63141361256544,
          "variance" : 7296.532764771095,
          "n" : 955,
          "max" : 944.0,
          "min" : 15.0,
          "sum" : 88463.0,
          "standardDeviation" : 85.4197445838554
        }, {
          "mean" : 96.85526315789471,
          "variance" : 7204.287703096784,
          "n" : 380,
          "max" : 534.0,
          "min" : 16.0,
          "sum" : 36804.99999999999,
          "standardDeviation" : 84.87807551480408
        } ],
        "5" : [ {
          "mean" : 538.9703087885989,
          "variance" : 1015708.7541708896,
          "n" : 837,
          "max" : 14377.0,
          "min" : 73.0,
          "sum" : 451118.1484560573,
          "standardDeviation" : 1007.8237713860939
        }, {
          "mean" : 170.61656441717804,
          "variance" : 18613.18035993495,
          "n" : 978,
          "max" : 1087.0,
          "min" : 36.0,
          "sum" : 166863.00000000012,
          "standardDeviation" : 136.4301299564541
        }, {
          "mean" : 161.44279946164195,
          "variance" : 151037.55972907983,
          "n" : 743,
          "max" : 10287.0,
          "min" : 36.0,
          "sum" : 119951.99999999997,
          "standardDeviation" : 388.6355101236631
        }, {
          "mean" : 112.19620253164551,
          "variance" : 8925.202266929777,
          "n" : 790,
          "max" : 778.0,
          "min" : 17.0,
          "sum" : 88634.99999999996,
          "standardDeviation" : 94.47328864250348
        }, {
          "mean" : 100.63478260869556,
          "variance" : 7975.182370754914,
          "n" : 805,
          "max" : 865.0,
          "min" : 17.0,
          "sum" : 81010.99999999993,
          "standardDeviation" : 89.3038765718203
        }, {
          "mean" : 90.22999999999999,
          "variance" : 5919.532135706345,
          "n" : 900,
          "max" : 674.0,
          "min" : 17.0,
          "sum" : 81206.99999999999,
          "standardDeviation" : 76.93849579830857
        }, {
          "mean" : 93.05238095238096,
          "variance" : 4936.08545320393,
          "n" : 840,
          "max" : 481.0,
          "min" : 16.0,
          "sum" : 78164.0,
          "standardDeviation" : 70.25728042846471
        }, {
          "mean" : 82.00205761316859,
          "variance" : 3951.0504592016223,
          "n" : 972,
          "max" : 409.0,
          "min" : 19.0,
          "sum" : 79705.99999999987,
          "standardDeviation" : 62.85738189903889
        }, {
          "mean" : 93.30000000000003,
          "variance" : 6069.4928759894465,
          "n" : 380,
          "max" : 551.0,
          "min" : 15.0,
          "sum" : 35454.00000000001,
          "standardDeviation" : 77.90695011351328
        } ],
        "6" : [ {
          "mean" : 599.5638554216864,
          "variance" : 1508088.5646751085,
          "n" : 825,
          "max" : 19601.0,
          "min" : 75.0,
          "sum" : 494640.1807228913,
          "standardDeviation" : 1228.0425744554252
        }, {
          "mean" : 201.1598778004076,
          "variance" : 31395.869418129783,
          "n" : 982,
          "max" : 1044.0,
          "min" : 39.0,
          "sum" : 197539.00000000026,
          "standardDeviation" : 177.18879597234636
        }, {
          "mean" : 169.3682758620689,
          "variance" : 19530.03407506192,
          "n" : 725,
          "max" : 1032.0,
          "min" : 38.0,
          "sum" : 122791.99999999996,
          "standardDeviation" : 139.7498983007212
        }, {
          "mean" : 128.94490358126728,
          "variance" : 13616.956960197575,
          "n" : 726,
          "max" : 858.0,
          "min" : 16.0,
          "sum" : 93614.00000000004,
          "standardDeviation" : 116.69171761610836
        }, {
          "mean" : 128.7875862068965,
          "variance" : 158510.5597904363,
          "n" : 725,
          "max" : 10420.0,
          "min" : 16.0,
          "sum" : 93370.99999999996,
          "standardDeviation" : 398.13384657729904
        }, {
          "mean" : 107.78388278388273,
          "variance" : 11008.064483194077,
          "n" : 819,
          "max" : 975.0,
          "min" : 18.0,
          "sum" : 88274.99999999996,
          "standardDeviation" : 104.91932368822283
        }, {
          "mean" : 97.68618266978919,
          "variance" : 7526.9705708739775,
          "n" : 854,
          "max" : 585.0,
          "min" : 15.0,
          "sum" : 83423.99999999997,
          "standardDeviation" : 86.75811530268496
        }, {
          "mean" : 97.84027777777784,
          "variance" : 7089.696359598284,
          "n" : 864,
          "max" : 556.0,
          "min" : 15.0,
          "sum" : 84534.00000000006,
          "standardDeviation" : 84.2003346762843
        }, {
          "mean" : 98.82644628099172,
          "variance" : 7727.7656996295245,
          "n" : 726,
          "max" : 579.0,
          "min" : 17.0,
          "sum" : 71747.99999999999,
          "standardDeviation" : 87.90771126374253
        } ],
        "7" : [ {
          "mean" : 613.3377192982451,
          "variance" : 2669416.5158973103,
          "n" : 907,
          "max" : 33616.0,
          "min" : 49.0,
          "sum" : 556297.3114035083,
          "standardDeviation" : 1633.834910845435
        }, {
          "mean" : 180.0316593886464,
          "variance" : 118219.91484358224,
          "n" : 916,
          "max" : 9523.0,
          "min" : 37.0,
          "sum" : 164909.00000000012,
          "standardDeviation" : 343.8312301748959
        }, {
          "mean" : 154.88038942976354,
          "variance" : 18004.30600764759,
          "n" : 719,
          "max" : 1038.0,
          "min" : 19.0,
          "sum" : 111358.99999999999,
          "standardDeviation" : 134.18012523338763
        }, {
          "mean" : 126.01736972704725,
          "variance" : 12226.451871830805,
          "n" : 806,
          "max" : 834.0,
          "min" : 23.0,
          "sum" : 101570.00000000009,
          "standardDeviation" : 110.5732873339253
        }, {
          "mean" : 113.32166018158233,
          "variance" : 11169.452244512937,
          "n" : 771,
          "max" : 825.0,
          "min" : 16.0,
          "sum" : 87370.99999999997,
          "standardDeviation" : 105.68562931881011
        }, {
          "mean" : 98.72366930917329,
          "variance" : 7492.955300806621,
          "n" : 883,
          "max" : 816.0,
          "min" : 16.0,
          "sum" : 87173.00000000001,
          "standardDeviation" : 86.56185823332711
        }, {
          "mean" : 108.59726962457346,
          "variance" : 108663.03580119259,
          "n" : 879,
          "max" : 9486.0,
          "min" : 16.0,
          "sum" : 95457.00000000007,
          "standardDeviation" : 329.64076780821966
        }, {
          "mean" : 91.16306695464368,
          "variance" : 6913.23932636741,
          "n" : 926,
          "max" : 807.0,
          "min" : 16.0,
          "sum" : 84417.00000000004,
          "standardDeviation" : 83.14589181894323
        }, {
          "mean" : 104.01818181818177,
          "variance" : 8192.500807620627,
          "n" : 440,
          "max" : 650.0,
          "min" : 16.0,
          "sum" : 45767.99999999998,
          "standardDeviation" : 90.51243454697607
        } ],
        "8" : [ {
          "mean" : 1607.0862697448363,
          "variance" : 8.868311453416966E8,
          "n" : 818,
          "max" : 853796.0,
          "min" : 69.0,
          "sum" : 1314596.5686512762,
          "standardDeviation" : 29779.710296470257
        }, {
          "mean" : 180.37637637637633,
          "variance" : 22347.038559601668,
          "n" : 999,
          "max" : 973.0,
          "min" : 30.0,
          "sum" : 180195.99999999994,
          "standardDeviation" : 149.4892590108121
        }, {
          "mean" : 169.27763819095475,
          "variance" : 145811.81087038972,
          "n" : 796,
          "max" : 10262.0,
          "min" : 37.0,
          "sum" : 134744.99999999997,
          "standardDeviation" : 381.8531273544708
        }, {
          "mean" : 131.6832884097034,
          "variance" : 15951.631002397166,
          "n" : 742,
          "max" : 1094.0,
          "min" : 24.0,
          "sum" : 97708.99999999993,
          "standardDeviation" : 126.29976643841098
        }, {
          "mean" : 139.5358910891088,
          "variance" : 336163.7037907793,
          "n" : 808,
          "max" : 16275.0,
          "min" : 27.0,
          "sum" : 112744.9999999999,
          "standardDeviation" : 579.7962605870956
        }, {
          "mean" : 127.1955555555556,
          "variance" : 234548.73145964654,
          "n" : 900,
          "max" : 10408.0,
          "min" : 15.0,
          "sum" : 114476.00000000004,
          "standardDeviation" : 484.30231411758353
        }, {
          "mean" : 98.7261640798226,
          "variance" : 9222.318937322654,
          "n" : 902,
          "max" : 796.0,
          "min" : 17.0,
          "sum" : 89050.99999999999,
          "standardDeviation" : 96.03290549245428
        }, {
          "mean" : 95.79759299781183,
          "variance" : 8790.233904386196,
          "n" : 914,
          "max" : 757.0,
          "min" : 16.0,
          "sum" : 87559.00000000001,
          "standardDeviation" : 93.75624728190755
        }, {
          "mean" : 94.4196185286103,
          "variance" : 7878.970980181948,
          "n" : 367,
          "max" : 685.0,
          "min" : 19.0,
          "sum" : 34651.99999999998,
          "standardDeviation" : 88.76356786532382
        } ],
        "9" : [ {
          "mean" : 575.1790697674418,
          "variance" : 3322985.3881528047,
          "n" : 855,
          "max" : 40752.0,
          "min" : 61.0,
          "sum" : 491778.1046511627,
          "standardDeviation" : 1822.9057540511535
        }, {
          "mean" : 180.6909469302807,
          "variance" : 21220.042928373245,
          "n" : 961,
          "max" : 1096.0,
          "min" : 35.0,
          "sum" : 173643.99999999974,
          "standardDeviation" : 145.6710092241186
        }, {
          "mean" : 145.74024226110373,
          "variance" : 14313.405480803762,
          "n" : 743,
          "max" : 814.0,
          "min" : 34.0,
          "sum" : 108285.00000000007,
          "standardDeviation" : 119.63864543199978
        }, {
          "mean" : 127.69758576874207,
          "variance" : 46870.97458703938,
          "n" : 787,
          "max" : 5446.0,
          "min" : 24.0,
          "sum" : 100498.00000000001,
          "standardDeviation" : 216.49705445349454
        }, {
          "mean" : 111.10889774236387,
          "variance" : 8510.004082958936,
          "n" : 753,
          "max" : 686.0,
          "min" : 16.0,
          "sum" : 83664.99999999999,
          "standardDeviation" : 92.24968337592783
        }, {
          "mean" : 110.52343749999999,
          "variance" : 122548.30336068427,
          "n" : 896,
          "max" : 10239.0,
          "min" : 19.0,
          "sum" : 99028.99999999999,
          "standardDeviation" : 350.06899799994324
        }, {
          "mean" : 109.85034013605436,
          "variance" : 349899.2511292828,
          "n" : 882,
          "max" : 17512.0,
          "min" : 15.0,
          "sum" : 96887.99999999994,
          "standardDeviation" : 591.5228238447633
        }, {
          "mean" : 99.8465723612622,
          "variance" : 122699.08645610343,
          "n" : 919,
          "max" : 10447.0,
          "min" : 14.0,
          "sum" : 91758.99999999997,
          "standardDeviation" : 350.28429376165786
        }, {
          "mean" : 99.69999999999996,
          "variance" : 7966.59799554565,
          "n" : 450,
          "max" : 640.0,
          "min" : 27.0,
          "sum" : 44864.999999999985,
          "standardDeviation" : 89.25580090697551
        } ],
        "10" : [ {
          "mean" : 655.2893289328927,
          "variance" : 1998558.6441701432,
          "n" : 904,
          "max" : 21091.0,
          "min" : 60.0,
          "sum" : 592381.5533553349,
          "standardDeviation" : 1413.7038742856098
        }, {
          "mean" : 169.0031612223394,
          "variance" : 21648.290074384306,
          "n" : 949,
          "max" : 1037.0,
          "min" : 38.0,
          "sum" : 160384.0000000001,
          "standardDeviation" : 147.13357901711052
        }, {
          "mean" : 151.77648578811363,
          "variance" : 16727.785681812864,
          "n" : 774,
          "max" : 864.0,
          "min" : 37.0,
          "sum" : 117474.99999999996,
          "standardDeviation" : 129.33594118346556
        }, {
          "mean" : 140.83770287141084,
          "variance" : 135203.30612671658,
          "n" : 801,
          "max" : 9893.0,
          "min" : 21.0,
          "sum" : 112811.00000000009,
          "standardDeviation" : 367.7000219291761
        }, {
          "mean" : 133.65552699228812,
          "variance" : 17730.854158602222,
          "n" : 778,
          "max" : 1424.0,
          "min" : 16.0,
          "sum" : 103984.00000000016,
          "standardDeviation" : 133.15725349601584
        }, {
          "mean" : 134.7233065442021,
          "variance" : 131407.90151365192,
          "n" : 871,
          "max" : 10187.0,
          "min" : 17.0,
          "sum" : 117344.00000000003,
          "standardDeviation" : 362.50227794270745
        }, {
          "mean" : 105.06401766004426,
          "variance" : 8422.658880636158,
          "n" : 906,
          "max" : 591.0,
          "min" : 15.0,
          "sum" : 95188.0000000001,
          "standardDeviation" : 91.77504497757633
        }, {
          "mean" : 117.42227122381482,
          "variance" : 124852.61288092856,
          "n" : 907,
          "max" : 10392.0,
          "min" : 16.0,
          "sum" : 106502.00000000004,
          "standardDeviation" : 353.3448922524968
        }, {
          "mean" : 161.42535211267605,
          "variance" : 569072.2507678844,
          "n" : 355,
          "max" : 10275.0,
          "min" : 17.0,
          "sum" : 57306.0,
          "standardDeviation" : 754.3687763739194
        } ],
        "11" : [ {
          "mean" : 700.4362637362633,
          "variance" : 2059060.747858413,
          "n" : 905,
          "max" : 22111.0,
          "min" : 61.0,
          "sum" : 633894.8186813183,
          "standardDeviation" : 1434.9427681473617
        }, {
          "mean" : 228.72004028197352,
          "variance" : 1599271.8388822635,
          "n" : 993,
          "max" : 39704.0,
          "min" : 37.0,
          "sum" : 227118.9999999997,
          "standardDeviation" : 1264.623200357428
        }, {
          "mean" : 158.7074468085107,
          "variance" : 19506.851715443237,
          "n" : 752,
          "max" : 1105.0,
          "min" : 28.0,
          "sum" : 119348.00000000004,
          "standardDeviation" : 139.66693135972895
        }, {
          "mean" : 120.86329113924047,
          "variance" : 128354.21449359083,
          "n" : 790,
          "max" : 9875.0,
          "min" : 25.0,
          "sum" : 95481.99999999997,
          "standardDeviation" : 358.2655642028561
        }, {
          "mean" : 99.64285714285714,
          "variance" : 6218.326839826852,
          "n" : 826,
          "max" : 973.0,
          "min" : 17.0,
          "sum" : 82305.0,
          "standardDeviation" : 78.85636841642437
        }, {
          "mean" : 105.02941176470604,
          "variance" : 127145.68935772189,
          "n" : 850,
          "max" : 10257.0,
          "min" : 19.0,
          "sum" : 89275.00000000013,
          "standardDeviation" : 356.5749421337987
        }, {
          "mean" : 140.0117521367522,
          "variance" : 752426.5699152154,
          "n" : 936,
          "max" : 20393.0,
          "min" : 17.0,
          "sum" : 131051.00000000006,
          "standardDeviation" : 867.4252532150625
        }, {
          "mean" : 103.07242990654204,
          "variance" : 125519.67895829908,
          "n" : 856,
          "max" : 10271.0,
          "min" : 15.0,
          "sum" : 88229.99999999999,
          "standardDeviation" : 354.2875653452984
        }, {
          "mean" : 84.89880952380953,
          "variance" : 3384.2643567874875,
          "n" : 336,
          "max" : 433.0,
          "min" : 16.0,
          "sum" : 28526.000000000004,
          "standardDeviation" : 58.17443043801536
        } ],
        "12" : [ {
          "mean" : 554.3325817361904,
          "variance" : 1614523.4140952434,
          "n" : 882,
          "max" : 27348.0,
          "min" : 46.0,
          "sum" : 488921.3370913199,
          "standardDeviation" : 1270.638978662013
        }, {
          "mean" : 177.66117404737417,
          "variance" : 23261.54384150676,
          "n" : 971,
          "max" : 992.0,
          "min" : 27.0,
          "sum" : 172509.00000000032,
          "standardDeviation" : 152.51735586977227
        }, {
          "mean" : 155.58670143415887,
          "variance" : 135619.43078897469,
          "n" : 767,
          "max" : 9773.0,
          "min" : 31.0,
          "sum" : 119334.99999999985,
          "standardDeviation" : 368.2654352352046
        }, {
          "mean" : 123.81167108753301,
          "variance" : 10628.734737442797,
          "n" : 754,
          "max" : 798.0,
          "min" : 28.0,
          "sum" : 93353.9999999999,
          "standardDeviation" : 103.09575518634507
        }, {
          "mean" : 108.71733668341705,
          "variance" : 9430.167799690278,
          "n" : 796,
          "max" : 801.0,
          "min" : 14.0,
          "sum" : 86538.99999999997,
          "standardDeviation" : 97.10905106986824
        }, {
          "mean" : 115.68795180722888,
          "variance" : 130901.05691136091,
          "n" : 830,
          "max" : 10269.0,
          "min" : 15.0,
          "sum" : 96020.99999999997,
          "standardDeviation" : 361.8025109246216
        }, {
          "mean" : 86.72090395480225,
          "variance" : 4853.889211851622,
          "n" : 885,
          "max" : 521.0,
          "min" : 14.0,
          "sum" : 76748.0,
          "standardDeviation" : 69.66985870411696
        }, {
          "mean" : 87.39087947882744,
          "variance" : 4746.225308030024,
          "n" : 921,
          "max" : 551.0,
          "min" : 14.0,
          "sum" : 80487.00000000007,
          "standardDeviation" : 68.89285382410881
        }, {
          "mean" : 89.63097949886117,
          "variance" : 4044.4023257507215,
          "n" : 439,
          "max" : 411.0,
          "min" : 15.0,
          "sum" : 39348.00000000005,
          "standardDeviation" : 63.59561561735779
        } ],
        "13" : [ {
          "mean" : 558.0200421940929,
          "variance" : 1573423.2171269236,
          "n" : 943,
          "max" : 20239.0,
          "min" : 44.0,
          "sum" : 526212.8997890296,
          "standardDeviation" : 1254.3616771597112
        }, {
          "mean" : 171.2127659574467,
          "variance" : 19599.80445568174,
          "n" : 893,
          "max" : 1020.0,
          "min" : 22.0,
          "sum" : 152892.99999999988,
          "standardDeviation" : 139.9993016256929
        }, {
          "mean" : 142.32820512820513,
          "variance" : 12153.270833744782,
          "n" : 780,
          "max" : 872.0,
          "min" : 27.0,
          "sum" : 111016.0,
          "standardDeviation" : 110.24187423000745
        }, {
          "mean" : 127.42837837837853,
          "variance" : 150545.59296895008,
          "n" : 740,
          "max" : 10376.0,
          "min" : 17.0,
          "sum" : 94297.0000000001,
          "standardDeviation" : 388.0020527896084
        }, {
          "mean" : 112.14435695538053,
          "variance" : 11652.893719756772,
          "n" : 762,
          "max" : 944.0,
          "min" : 15.0,
          "sum" : 85453.99999999997,
          "standardDeviation" : 107.94856979023285
        }, {
          "mean" : 105.34177215189887,
          "variance" : 120163.80125998957,
          "n" : 869,
          "max" : 10061.0,
          "min" : 19.0,
          "sum" : 91542.00000000012,
          "standardDeviation" : 346.646507641415
        }, {
          "mean" : 94.74938875305621,
          "variance" : 6236.885709540239,
          "n" : 818,
          "max" : 654.0,
          "min" : 16.0,
          "sum" : 77504.99999999999,
          "standardDeviation" : 78.9739558939543
        }, {
          "mean" : 91.43078626799563,
          "variance" : 6150.0503593589265,
          "n" : 903,
          "max" : 643.0,
          "min" : 15.0,
          "sum" : 82562.00000000006,
          "standardDeviation" : 78.42225678567868
        }, {
          "mean" : 91.3066914498142,
          "variance" : 7084.626435588044,
          "n" : 538,
          "max" : 549.0,
          "min" : 15.0,
          "sum" : 49123.00000000004,
          "standardDeviation" : 84.17022297456532
        } ],
        "14" : [ {
          "mean" : 591.3374028856833,
          "variance" : 2643059.0793661387,
          "n" : 896,
          "max" : 33632.0,
          "min" : 65.0,
          "sum" : 529838.3129855723,
          "standardDeviation" : 1625.74877498528
        }, {
          "mean" : 175.27470141150954,
          "variance" : 20222.5125005901,
          "n" : 921,
          "max" : 1013.0,
          "min" : 39.0,
          "sum" : 161428.0000000003,
          "standardDeviation" : 142.20588068216483
        }, {
          "mean" : 144.84190715181916,
          "variance" : 14538.997588318003,
          "n" : 797,
          "max" : 1049.0,
          "min" : 37.0,
          "sum" : 115438.99999999987,
          "standardDeviation" : 120.57776572949925
        }, {
          "mean" : 134.43572395128558,
          "variance" : 89057.12696055241,
          "n" : 739,
          "max" : 7586.0,
          "min" : 30.0,
          "sum" : 99348.00000000004,
          "standardDeviation" : 298.4244074477696
        }, {
          "mean" : 103.74064837905239,
          "variance" : 8406.404562874963,
          "n" : 802,
          "max" : 716.0,
          "min" : 22.0,
          "sum" : 83200.00000000001,
          "standardDeviation" : 91.68644699667973
        }, {
          "mean" : 109.07823129251702,
          "variance" : 125149.29353239598,
          "n" : 882,
          "max" : 10197.0,
          "min" : 18.0,
          "sum" : 96207.00000000001,
          "standardDeviation" : 353.76446052761713
        }, {
          "mean" : 93.47902097902096,
          "variance" : 5900.464553532829,
          "n" : 858,
          "max" : 884.0,
          "min" : 17.0,
          "sum" : 80204.99999999999,
          "standardDeviation" : 76.81448140508942
        }, {
          "mean" : 91.92934782608694,
          "variance" : 7481.9786807493965,
          "n" : 920,
          "max" : 722.0,
          "min" : 15.0,
          "sum" : 84574.99999999999,
          "standardDeviation" : 86.4984316664146
        }, {
          "mean" : 115.09259259259262,
          "variance" : 244636.15846008444,
          "n" : 432,
          "max" : 10244.0,
          "min" : 16.0,
          "sum" : 49720.000000000015,
          "standardDeviation" : 494.6070748180665
        } ],
        "15" : [ {
          "mean" : 646.1874258600238,
          "variance" : 2634261.1714806603,
          "n" : 838,
          "max" : 37627.0,
          "min" : 70.0,
          "sum" : 541505.0628707,
          "standardDeviation" : 1623.0407177519178
        }, {
          "mean" : 182.62921348314623,
          "variance" : 23742.69571011697,
          "n" : 979,
          "max" : 1206.0,
          "min" : 39.0,
          "sum" : 178794.00000000015,
          "standardDeviation" : 154.0866500061474
        }, {
          "mean" : 146.62107904642423,
          "variance" : 12677.896439537708,
          "n" : 797,
          "max" : 806.0,
          "min" : 36.0,
          "sum" : 116857.00000000012,
          "standardDeviation" : 112.59616529677069
        }, {
          "mean" : 124.49999999999989,
          "variance" : 11844.103471295048,
          "n" : 750,
          "max" : 937.0,
          "min" : 23.0,
          "sum" : 93374.99999999991,
          "standardDeviation" : 108.83061826202702
        }, {
          "mean" : 123.87234042553179,
          "variance" : 130861.9661387511,
          "n" : 799,
          "max" : 9867.0,
          "min" : 14.0,
          "sum" : 98973.9999999999,
          "standardDeviation" : 361.74848463919113
        }, {
          "mean" : 108.304152637486,
          "variance" : 115902.32873554528,
          "n" : 891,
          "max" : 9907.0,
          "min" : 15.0,
          "sum" : 96499.00000000003,
          "standardDeviation" : 340.444310769831
        }, {
          "mean" : 117.24753559693315,
          "variance" : 225577.67111508234,
          "n" : 913,
          "max" : 10221.0,
          "min" : 16.0,
          "sum" : 107046.99999999996,
          "standardDeviation" : 474.9501775082123
        }, {
          "mean" : 100.0377777777778,
          "variance" : 115653.33116302066,
          "n" : 900,
          "max" : 9988.0,
          "min" : 14.0,
          "sum" : 90034.00000000003,
          "standardDeviation" : 340.0784191374405
        }, {
          "mean" : 93.1578947368421,
          "variance" : 7803.816692126091,
          "n" : 380,
          "max" : 570.0,
          "min" : 21.0,
          "sum" : 35399.99999999999,
          "standardDeviation" : 88.33921378485373
        } ],
        "16" : [ {
          "mean" : 498.26310380267205,
          "variance" : 1912578.9204171055,
          "n" : 968,
          "max" : 35994.0,
          "min" : 43.0,
          "sum" : 482318.68448098656,
          "standardDeviation" : 1382.9602020365971
        }, {
          "mean" : 162.24411134903647,
          "variance" : 17623.614515125875,
          "n" : 934,
          "max" : 962.0,
          "min" : 38.0,
          "sum" : 151536.00000000006,
          "standardDeviation" : 132.75396233305383
        }, {
          "mean" : 147.20626631853793,
          "variance" : 149741.99661427646,
          "n" : 766,
          "max" : 10435.0,
          "min" : 27.0,
          "sum" : 112760.00000000006,
          "standardDeviation" : 386.96511033202523
        }, {
          "mean" : 114.18181818181809,
          "variance" : 9277.883674193172,
          "n" : 770,
          "max" : 717.0,
          "min" : 14.0,
          "sum" : 87919.99999999993,
          "standardDeviation" : 96.32177154824953
        }, {
          "mean" : 106.37055214723927,
          "variance" : 9271.3735789331,
          "n" : 815,
          "max" : 980.0,
          "min" : 15.0,
          "sum" : 86692.0,
          "standardDeviation" : 96.28797214051764
        }, {
          "mean" : 100.30012150668286,
          "variance" : 7393.047287089841,
          "n" : 823,
          "max" : 808.0,
          "min" : 16.0,
          "sum" : 82546.99999999999,
          "standardDeviation" : 85.98283135074026
        }, {
          "mean" : 103.23178807947012,
          "variance" : 104538.47439171621,
          "n" : 906,
          "max" : 9480.0,
          "min" : 15.0,
          "sum" : 93527.99999999993,
          "standardDeviation" : 323.3241011612283
        }, {
          "mean" : 94.82333333333321,
          "variance" : 7486.067753058948,
          "n" : 900,
          "max" : 681.0,
          "min" : 16.0,
          "sum" : 85340.99999999988,
          "standardDeviation" : 86.5220651224816
        }, {
          "mean" : 94.14876033057848,
          "variance" : 5772.707091000412,
          "n" : 363,
          "max" : 698.0,
          "min" : 16.0,
          "sum" : 34175.99999999999,
          "standardDeviation" : 75.97833303646779
        } ],
        "17" : [ {
          "mean" : 605.9910179640717,
          "variance" : 1626118.652266894,
          "n" : 997,
          "max" : 24614.0,
          "min" : 63.0,
          "sum" : 604173.0449101795,
          "standardDeviation" : 1275.1935744297389
        }, {
          "mean" : 167.74619883040918,
          "variance" : 21426.775087993203,
          "n" : 855,
          "max" : 1137.0,
          "min" : 39.0,
          "sum" : 143422.99999999985,
          "standardDeviation" : 146.3788751425328
        }, {
          "mean" : 138.9087353324642,
          "variance" : 11301.566072419426,
          "n" : 767,
          "max" : 692.0,
          "min" : 36.0,
          "sum" : 106543.00000000004,
          "standardDeviation" : 106.30882405717517
        }, {
          "mean" : 139.65053763440858,
          "variance" : 377443.9719243413,
          "n" : 744,
          "max" : 16666.0,
          "min" : 16.0,
          "sum" : 103899.99999999999,
          "standardDeviation" : 614.3646896789734
        }, {
          "mean" : 98.88029925187026,
          "variance" : 6120.819611395985,
          "n" : 802,
          "max" : 668.0,
          "min" : 16.0,
          "sum" : 79301.99999999994,
          "standardDeviation" : 78.23566713076578
        }, {
          "mean" : 96.21509009009013,
          "variance" : 6226.166761885907,
          "n" : 888,
          "max" : 806.0,
          "min" : 16.0,
          "sum" : 85439.00000000003,
          "standardDeviation" : 78.90606289687699
        }, {
          "mean" : 95.43571428571425,
          "variance" : 126101.04949770133,
          "n" : 840,
          "max" : 10245.0,
          "min" : 16.0,
          "sum" : 80165.99999999997,
          "standardDeviation" : 355.1070958143491
        }, {
          "mean" : 96.65031982942428,
          "variance" : 100372.93629125306,
          "n" : 938,
          "max" : 9567.0,
          "min" : 17.0,
          "sum" : 90657.99999999997,
          "standardDeviation" : 316.81688132303344
        }, {
          "mean" : 84.62168674698792,
          "variance" : 4520.916919853324,
          "n" : 415,
          "max" : 590.0,
          "min" : 15.0,
          "sum" : 35117.999999999985,
          "standardDeviation" : 67.23776409022926
        } ],
        "18" : [ {
          "mean" : 884.1200951248511,
          "variance" : 1.2560509635341708E8,
          "n" : 836,
          "max" : 322399.0,
          "min" : 61.0,
          "sum" : 739124.3995243756,
          "standardDeviation" : 11207.367949407973
        }, {
          "mean" : 150.65004703668853,
          "variance" : 12168.83221986596,
          "n" : 1063,
          "max" : 880.0,
          "min" : 40.0,
          "sum" : 160140.9999999999,
          "standardDeviation" : 110.3124300333646
        }, {
          "mean" : 138.06790945406124,
          "variance" : 10659.236715490459,
          "n" : 751,
          "max" : 907.0,
          "min" : 27.0,
          "sum" : 103688.99999999999,
          "standardDeviation" : 103.2435795364073
        }, {
          "mean" : 124.45271122320295,
          "variance" : 121923.65969276633,
          "n" : 793,
          "max" : 9619.0,
          "min" : 17.0,
          "sum" : 98690.99999999994,
          "standardDeviation" : 349.17568599884834
        }, {
          "mean" : 101.13196125907987,
          "variance" : 7118.245595421538,
          "n" : 826,
          "max" : 826.0,
          "min" : 20.0,
          "sum" : 83534.99999999997,
          "standardDeviation" : 84.36969595430304
        }, {
          "mean" : 90.39492753623189,
          "variance" : 5588.306963356292,
          "n" : 828,
          "max" : 626.0,
          "min" : 15.0,
          "sum" : 74847.0,
          "standardDeviation" : 74.75497952214482
        }, {
          "mean" : 95.20766773162944,
          "variance" : 97751.24360852058,
          "n" : 939,
          "max" : 9472.0,
          "min" : 15.0,
          "sum" : 89400.00000000004,
          "standardDeviation" : 312.6519528301728
        }, {
          "mean" : 106.53650057937432,
          "variance" : 247939.53201883033,
          "n" : 863,
          "max" : 10373.0,
          "min" : 15.0,
          "sum" : 91941.00000000004,
          "standardDeviation" : 497.93526890433293
        }, {
          "mean" : 91.39769452449565,
          "variance" : 4443.355832819711,
          "n" : 347,
          "max" : 527.0,
          "min" : 17.0,
          "sum" : 31714.99999999999,
          "standardDeviation" : 66.6585015794663
        } ],
        "19" : [ {
          "mean" : 637.3298490127762,
          "variance" : 1813131.216654513,
          "n" : 856,
          "max" : 19207.0,
          "min" : 68.0,
          "sum" : 545554.3507549365,
          "standardDeviation" : 1346.5256093571013
        }, {
          "mean" : 174.8747433264887,
          "variance" : 23013.583472441762,
          "n" : 974,
          "max" : 1176.0,
          "min" : 31.0,
          "sum" : 170328.0,
          "standardDeviation" : 151.70228565332087
        }, {
          "mean" : 166.3273885350318,
          "variance" : 146581.86334329922,
          "n" : 785,
          "max" : 10182.0,
          "min" : 30.0,
          "sum" : 130566.99999999996,
          "standardDeviation" : 382.8601093654172
        }, {
          "mean" : 126.85290148448064,
          "variance" : 48939.42022467817,
          "n" : 741,
          "max" : 5506.0,
          "min" : 21.0,
          "sum" : 93998.00000000016,
          "standardDeviation" : 221.22255812795893
        }, {
          "mean" : 121.6047678795484,
          "variance" : 250131.23178628393,
          "n" : 797,
          "max" : 14032.0,
          "min" : 21.0,
          "sum" : 96919.00000000007,
          "standardDeviation" : 500.1312145690208
        }, {
          "mean" : 98.47505938242277,
          "variance" : 6498.116499699202,
          "n" : 842,
          "max" : 611.0,
          "min" : 16.0,
          "sum" : 82915.99999999997,
          "standardDeviation" : 80.61089566367069
        }, {
          "mean" : 89.45762711864403,
          "variance" : 4423.157596302003,
          "n" : 826,
          "max" : 439.0,
          "min" : 14.0,
          "sum" : 73891.99999999997,
          "standardDeviation" : 66.50682368225085
        }, {
          "mean" : 105.42841530054642,
          "variance" : 119786.0788415779,
          "n" : 915,
          "max" : 10304.0,
          "min" : 14.0,
          "sum" : 96466.99999999997,
          "standardDeviation" : 346.1012551863658
        }, {
          "mean" : 101.46850393700788,
          "variance" : 15717.75245771793,
          "n" : 508,
          "max" : 2328.0,
          "min" : 16.0,
          "sum" : 51546.0,
          "standardDeviation" : 125.37046086585919
        } ],
        "20" : [ {
          "mean" : 609.6318347509116,
          "variance" : 3137187.773048578,
          "n" : 818,
          "max" : 42136.0,
          "min" : 40.0,
          "sum" : 498678.84082624567,
          "standardDeviation" : 1771.2108211753275
        }, {
          "mean" : 171.5850467289718,
          "variance" : 16380.875360849053,
          "n" : 1070,
          "max" : 994.0,
          "min" : 38.0,
          "sum" : 183595.99999999983,
          "standardDeviation" : 127.98779379631893
        }, {
          "mean" : 160.41644204851764,
          "variance" : 145096.9046145843,
          "n" : 742,
          "max" : 10125.0,
          "min" : 38.0,
          "sum" : 119029.00000000009,
          "standardDeviation" : 380.9158760337829
        }, {
          "mean" : 113.12656641604012,
          "variance" : 9207.749330981162,
          "n" : 798,
          "max" : 960.0,
          "min" : 15.0,
          "sum" : 90275.00000000001,
          "standardDeviation" : 95.95701814344359
        }, {
          "mean" : 110.36925098554526,
          "variance" : 7237.970053254027,
          "n" : 761,
          "max" : 746.0,
          "min" : 17.0,
          "sum" : 83990.99999999994,
          "standardDeviation" : 85.07626022136861
        }, {
          "mean" : 99.15192743764169,
          "variance" : 6493.600047359083,
          "n" : 882,
          "max" : 519.0,
          "min" : 18.0,
          "sum" : 87451.99999999997,
          "standardDeviation" : 80.58287688683671
        }, {
          "mean" : 99.08023255813951,
          "variance" : 128419.17050518472,
          "n" : 860,
          "max" : 10384.0,
          "min" : 17.0,
          "sum" : 85208.99999999999,
          "standardDeviation" : 358.3562061764589
        }, {
          "mean" : 89.54652406417105,
          "variance" : 6356.0403920805165,
          "n" : 935,
          "max" : 725.0,
          "min" : 14.0,
          "sum" : 83725.99999999993,
          "standardDeviation" : 79.72477903437874
        }, {
          "mean" : 93.26842105263158,
          "variance" : 6148.450187473961,
          "n" : 380,
          "max" : 687.0,
          "min" : 17.0,
          "sum" : 35442.0,
          "standardDeviation" : 78.41205384042661
        } ],
        "21" : [ {
          "mean" : 612.5308788598585,
          "variance" : 2781579.8450620105,
          "n" : 837,
          "max" : 36412.0,
          "min" : 73.0,
          "sum" : 512688.34560570156,
          "standardDeviation" : 1667.8068968144994
        }, {
          "mean" : 164.656852791878,
          "variance" : 18046.18091081672,
          "n" : 985,
          "max" : 1342.0,
          "min" : 31.0,
          "sum" : 162186.99999999983,
          "standardDeviation" : 134.33607449533696
        }, {
          "mean" : 142.64507772020704,
          "variance" : 13698.927044481645,
          "n" : 772,
          "max" : 1099.0,
          "min" : 37.0,
          "sum" : 110121.99999999984,
          "standardDeviation" : 117.0424155786339
        }, {
          "mean" : 129.11543624161064,
          "variance" : 133382.9248286064,
          "n" : 745,
          "max" : 9655.0,
          "min" : 16.0,
          "sum" : 96190.99999999993,
          "standardDeviation" : 365.21627130866773
        }, {
          "mean" : 120.75625823451914,
          "variance" : 10849.424680439839,
          "n" : 759,
          "max" : 672.0,
          "min" : 16.0,
          "sum" : 91654.00000000003,
          "standardDeviation" : 104.16057162112658
        }, {
          "mean" : 98.63914027149313,
          "variance" : 9294.570652034667,
          "n" : 884,
          "max" : 1180.0,
          "min" : 15.0,
          "sum" : 87196.99999999993,
          "standardDeviation" : 96.4083536423824
        }, {
          "mean" : 96.60535931790514,
          "variance" : 6081.809922462197,
          "n" : 821,
          "max" : 720.0,
          "min" : 14.0,
          "sum" : 79313.00000000012,
          "standardDeviation" : 77.98595977778434
        }, {
          "mean" : 113.03125000000001,
          "variance" : 218197.9051675979,
          "n" : 896,
          "max" : 10053.0,
          "min" : 16.0,
          "sum" : 101276.00000000001,
          "standardDeviation" : 467.11658626899333
        }, {
          "mean" : 121.57798165137608,
          "variance" : 199451.2517201834,
          "n" : 545,
          "max" : 10265.0,
          "min" : 18.0,
          "sum" : 66259.99999999996,
          "standardDeviation" : 446.59965485900614
        } ],
        "22" : [ {
          "mean" : 600.0011111111108,
          "variance" : 1269091.2091200098,
          "n" : 895,
          "max" : 16805.0,
          "min" : 65.0,
          "sum" : 537000.9944444442,
          "standardDeviation" : 1126.5394840483887
        }, {
          "mean" : 172.4048884165781,
          "variance" : 18268.41355054603,
          "n" : 941,
          "max" : 952.0,
          "min" : 21.0,
          "sum" : 162233.0,
          "standardDeviation" : 135.16069528729878
        }, {
          "mean" : 157.45108005082625,
          "variance" : 83029.85351982429,
          "n" : 787,
          "max" : 5535.0,
          "min" : 33.0,
          "sum" : 123914.00000000026,
          "standardDeviation" : 288.14901269972154
        }, {
          "mean" : 141.76564580559256,
          "variance" : 143059.24633821557,
          "n" : 751,
          "max" : 9945.0,
          "min" : 15.0,
          "sum" : 106466.00000000001,
          "standardDeviation" : 378.23173629167553
        }, {
          "mean" : 116.35301507537694,
          "variance" : 13412.62365127523,
          "n" : 796,
          "max" : 893.0,
          "min" : 17.0,
          "sum" : 92617.00000000004,
          "standardDeviation" : 115.81288206100058
        }, {
          "mean" : 101.33999999999992,
          "variance" : 8901.890945494992,
          "n" : 900,
          "max" : 901.0,
          "min" : 15.0,
          "sum" : 91205.99999999993,
          "standardDeviation" : 94.34983277936952
        }, {
          "mean" : 101.73090079817558,
          "variance" : 129340.6443979318,
          "n" : 877,
          "max" : 10529.0,
          "min" : 15.0,
          "sum" : 89217.99999999999,
          "standardDeviation" : 359.6396034892873
        }, {
          "mean" : 89.2583783783784,
          "variance" : 6491.070614250621,
          "n" : 925,
          "max" : 587.0,
          "min" : 15.0,
          "sum" : 82564.00000000001,
          "standardDeviation" : 80.56718075153567
        }, {
          "mean" : 96.965147453083,
          "variance" : 6761.324050851852,
          "n" : 373,
          "max" : 429.0,
          "min" : 14.0,
          "sum" : 36167.99999999996,
          "standardDeviation" : 82.22727072481399
        } ],
        "23" : [ {
          "mean" : 1848.828039430451,
          "variance" : 1.5554440231951792E9,
          "n" : 908,
          "max" : 1191271.0,
          "min" : 67.0,
          "sum" : 1678735.8598028496,
          "standardDeviation" : 39439.1179312517
        }, {
          "mean" : 172.21530612244908,
          "variance" : 209519.24573075408,
          "n" : 980,
          "max" : 10056.0,
          "min" : 0.0,
          "sum" : 168771.0000000001,
          "standardDeviation" : 457.73272302813797
        }, {
          "mean" : 148.1848852901484,
          "variance" : 13266.707663128715,
          "n" : 741,
          "max" : 777.0,
          "min" : 38.0,
          "sum" : 109804.99999999997,
          "standardDeviation" : 115.18119491969475
        }, {
          "mean" : 118.30108991825617,
          "variance" : 9519.283027459836,
          "n" : 734,
          "max" : 793.0,
          "min" : 17.0,
          "sum" : 86833.00000000003,
          "standardDeviation" : 97.56681314596597
        }, {
          "mean" : 108.82241813602016,
          "variance" : 9265.152535885483,
          "n" : 794,
          "max" : 1005.0,
          "min" : 20.0,
          "sum" : 86405.00000000001,
          "standardDeviation" : 96.25566235752306
        }, {
          "mean" : 101.040650406504,
          "variance" : 9438.201833995083,
          "n" : 861,
          "max" : 881.0,
          "min" : 16.0,
          "sum" : 86995.99999999994,
          "standardDeviation" : 97.15040830585882
        }, {
          "mean" : 91.45528455284558,
          "variance" : 5984.357591227072,
          "n" : 861,
          "max" : 662.0,
          "min" : 19.0,
          "sum" : 78743.00000000004,
          "standardDeviation" : 77.35862971399553
        }, {
          "mean" : 94.24074074074068,
          "variance" : 6202.950704794223,
          "n" : 918,
          "max" : 815.0,
          "min" : 16.0,
          "sum" : 86512.99999999994,
          "standardDeviation" : 78.7588135055006
        }, {
          "mean" : 129.9017857142857,
          "variance" : 235264.08429210618,
          "n" : 448,
          "max" : 9902.0,
          "min" : 17.0,
          "sum" : 58195.99999999999,
          "standardDeviation" : 485.04029141103956
        } ],
        "24" : [ {
          "mean" : 553.8482834994467,
          "variance" : 2355924.0091073597,
          "n" : 898,
          "max" : 32282.0,
          "min" : 69.0,
          "sum" : 497355.7585825031,
          "standardDeviation" : 1534.9019542326994
        }, {
          "mean" : 173.43983822042475,
          "variance" : 21460.762824265323,
          "n" : 989,
          "max" : 1182.0,
          "min" : 38.0,
          "sum" : 171532.0000000001,
          "standardDeviation" : 146.49492422696878
        }, {
          "mean" : 152.4131897711978,
          "variance" : 17376.2832220219,
          "n" : 743,
          "max" : 1150.0,
          "min" : 37.0,
          "sum" : 113242.99999999997,
          "standardDeviation" : 131.81913071334486
        }, {
          "mean" : 129.59950859950845,
          "variance" : 14176.365854616783,
          "n" : 814,
          "max" : 874.0,
          "min" : 16.0,
          "sum" : 105493.99999999988,
          "standardDeviation" : 119.06454490996379
        }, {
          "mean" : 119.5426829268292,
          "variance" : 11636.600129545255,
          "n" : 820,
          "max" : 870.0,
          "min" : 19.0,
          "sum" : 98024.99999999994,
          "standardDeviation" : 107.87307416378405
        }, {
          "mean" : 124.155048076923,
          "variance" : 240850.30685775913,
          "n" : 832,
          "max" : 10241.0,
          "min" : 18.0,
          "sum" : 103296.99999999993,
          "standardDeviation" : 490.7650220398344
        }, {
          "mean" : 108.00102669404517,
          "variance" : 90524.5457337855,
          "n" : 974,
          "max" : 9010.0,
          "min" : 14.0,
          "sum" : 105192.99999999999,
          "standardDeviation" : 300.87297275392734
        }, {
          "mean" : 103.14981729598053,
          "variance" : 7791.312893259261,
          "n" : 821,
          "max" : 665.0,
          "min" : 14.0,
          "sum" : 84686.00000000001,
          "standardDeviation" : 88.26841390474432
        }, {
          "mean" : 110.38700564971752,
          "variance" : 9016.062266929139,
          "n" : 354,
          "max" : 617.0,
          "min" : 24.0,
          "sum" : 39077.0,
          "standardDeviation" : 94.95294764739607
        } ],
        "25" : [ {
          "mean" : 655.1761546723952,
          "variance" : 2471949.906570573,
          "n" : 926,
          "max" : 23912.0,
          "min" : 69.0,
          "sum" : 606693.119226638,
          "standardDeviation" : 1572.2435900872908
        }, {
          "mean" : 193.94719101123607,
          "variance" : 135567.59338355166,
          "n" : 890,
          "max" : 10162.0,
          "min" : 39.0,
          "sum" : 172613.00000000012,
          "standardDeviation" : 368.195048016064
        }, {
          "mean" : 161.60565275908468,
          "variance" : 156257.44401112996,
          "n" : 743,
          "max" : 10338.0,
          "min" : 36.0,
          "sum" : 120072.99999999991,
          "standardDeviation" : 395.29412342094076
        }, {
          "mean" : 118.99619771863124,
          "variance" : 10291.300746945626,
          "n" : 789,
          "max" : 677.0,
          "min" : 16.0,
          "sum" : 93888.00000000004,
          "standardDeviation" : 101.44604845407054
        }, {
          "mean" : 106.10115236875802,
          "variance" : 7662.62693456777,
          "n" : 781,
          "max" : 603.0,
          "min" : 15.0,
          "sum" : 82865.00000000001,
          "standardDeviation" : 87.53643204156639
        }, {
          "mean" : 88.81250000000006,
          "variance" : 5123.621813441485,
          "n" : 864,
          "max" : 648.0,
          "min" : 16.0,
          "sum" : 76734.00000000004,
          "standardDeviation" : 71.57947899671724
        }, {
          "mean" : 89.92290249433103,
          "variance" : 5040.475320510339,
          "n" : 882,
          "max" : 652.0,
          "min" : 15.0,
          "sum" : 79311.99999999997,
          "standardDeviation" : 70.99630497786725
        }, {
          "mean" : 90.03135888501745,
          "variance" : 5691.667620128026,
          "n" : 861,
          "max" : 611.0,
          "min" : 15.0,
          "sum" : 77517.00000000003,
          "standardDeviation" : 75.44314163744791
        }, {
          "mean" : 88.61176470588231,
          "variance" : 4978.430509649835,
          "n" : 510,
          "max" : 575.0,
          "min" : 22.0,
          "sum" : 45191.99999999998,
          "standardDeviation" : 70.5579939457595
        } ],
        "26" : [ {
          "mean" : 637.5474683544311,
          "variance" : 2468508.8963716244,
          "n" : 943,
          "max" : 29300.0,
          "min" : 47.0,
          "sum" : 601207.2626582285,
          "standardDeviation" : 1571.1489096745809
        }, {
          "mean" : 168.86610878661062,
          "variance" : 15326.321321387084,
          "n" : 956,
          "max" : 902.0,
          "min" : 38.0,
          "sum" : 161435.99999999977,
          "standardDeviation" : 123.79952068318796
        }, {
          "mean" : 168.5860655737704,
          "variance" : 146594.60680966996,
          "n" : 732,
          "max" : 9976.0,
          "min" : 39.0,
          "sum" : 123404.99999999994,
          "standardDeviation" : 382.8767514614461
        }, {
          "mean" : 116.58253751705324,
          "variance" : 10152.983956940181,
          "n" : 733,
          "max" : 816.0,
          "min" : 16.0,
          "sum" : 85455.00000000003,
          "standardDeviation" : 100.7620164394311
        }, {
          "mean" : 111.09226932668331,
          "variance" : 10219.691850274441,
          "n" : 802,
          "max" : 1004.0,
          "min" : 23.0,
          "sum" : 89096.00000000001,
          "standardDeviation" : 101.09249156230368
        }, {
          "mean" : 108.37041156840932,
          "variance" : 121594.440593483,
          "n" : 899,
          "max" : 10192.0,
          "min" : 17.0,
          "sum" : 97424.99999999999,
          "standardDeviation" : 348.7039440463543
        }, {
          "mean" : 107.72705018359848,
          "variance" : 134067.60555415557,
          "n" : 817,
          "max" : 10255.0,
          "min" : 17.0,
          "sum" : 88012.99999999996,
          "standardDeviation" : 366.15243486034007
        }, {
          "mean" : 127.60065288356903,
          "variance" : 332293.85886667547,
          "n" : 919,
          "max" : 10308.0,
          "min" : 17.0,
          "sum" : 117264.99999999994,
          "standardDeviation" : 576.4493549885154
        }, {
          "mean" : 97.27477477477474,
          "variance" : 7009.346450287759,
          "n" : 444,
          "max" : 530.0,
          "min" : 14.0,
          "sum" : 43189.999999999985,
          "standardDeviation" : 83.72183974500177
        } ],
        "27" : [ {
          "mean" : 619.8466111771708,
          "variance" : 1656331.5847771924,
          "n" : 836,
          "max" : 19009.0,
          "min" : 48.0,
          "sum" : 518191.76694411476,
          "standardDeviation" : 1286.985464089316
        }, {
          "mean" : 164.89989785495408,
          "variance" : 102233.63618608349,
          "n" : 979,
          "max" : 9561.0,
          "min" : 38.0,
          "sum" : 161437.00000000003,
          "standardDeviation" : 319.7399508758383
        }, {
          "mean" : 135.88425302826363,
          "variance" : 9350.129441725656,
          "n" : 743,
          "max" : 722.0,
          "min" : 37.0,
          "sum" : 100961.99999999988,
          "standardDeviation" : 96.69606735398114
        }, {
          "mean" : 129.35234474017747,
          "variance" : 132297.47975655107,
          "n" : 789,
          "max" : 9931.0,
          "min" : 18.0,
          "sum" : 102059.00000000003,
          "standardDeviation" : 363.7272051366945
        }, {
          "mean" : 109.87329192546585,
          "variance" : 8865.023726090063,
          "n" : 805,
          "max" : 845.0,
          "min" : 21.0,
          "sum" : 88448.00000000001,
          "standardDeviation" : 94.15425495478185
        }, {
          "mean" : 105.25117924528305,
          "variance" : 9065.978156813175,
          "n" : 848,
          "max" : 838.0,
          "min" : 16.0,
          "sum" : 89253.00000000003,
          "standardDeviation" : 95.21543024538184
        }, {
          "mean" : 100.3800904977376,
          "variance" : 8580.24721358184,
          "n" : 884,
          "max" : 797.0,
          "min" : 15.0,
          "sum" : 88736.00000000004,
          "standardDeviation" : 92.62962384454468
        }, {
          "mean" : 106.1368078175895,
          "variance" : 97763.35300240753,
          "n" : 921,
          "max" : 9192.0,
          "min" : 14.0,
          "sum" : 97751.99999999993,
          "standardDeviation" : 312.6713178441661
        }, {
          "mean" : 99.3310657596372,
          "variance" : 6658.781055452489,
          "n" : 441,
          "max" : 516.0,
          "min" : 20.0,
          "sum" : 43805.00000000001,
          "standardDeviation" : 81.6013544952073
        } ],
        "28" : [ {
          "mean" : 518.1448412698423,
          "variance" : 1945386.2908174566,
          "n" : 1003,
          "max" : 32308.0,
          "min" : 53.0,
          "sum" : 519699.2757936519,
          "standardDeviation" : 1394.7710531902562
        }, {
          "mean" : 176.9922394678492,
          "variance" : 122753.99439031772,
          "n" : 902,
          "max" : 9886.0,
          "min" : 37.0,
          "sum" : 159646.99999999997,
          "standardDeviation" : 350.3626612387766
        }, {
          "mean" : 141.1253132832079,
          "variance" : 11962.353160190327,
          "n" : 798,
          "max" : 786.0,
          "min" : 34.0,
          "sum" : 112617.99999999991,
          "standardDeviation" : 109.37254299041568
        }, {
          "mean" : 112.63122476446834,
          "variance" : 11631.893471139452,
          "n" : 743,
          "max" : 1126.0,
          "min" : 18.0,
          "sum" : 83684.99999999999,
          "standardDeviation" : 107.85125623347858
        }, {
          "mean" : 100.23936816524903,
          "variance" : 6602.68107599933,
          "n" : 823,
          "max" : 821.0,
          "min" : 16.0,
          "sum" : 82496.99999999996,
          "standardDeviation" : 81.25688325304712
        }, {
          "mean" : 103.64760793465574,
          "variance" : 122819.97380560308,
          "n" : 857,
          "max" : 10053.0,
          "min" : 15.0,
          "sum" : 88825.99999999997,
          "standardDeviation" : 350.45680733237737
        }, {
          "mean" : 96.55005268703894,
          "variance" : 96621.35113132614,
          "n" : 949,
          "max" : 9413.0,
          "min" : 16.0,
          "sum" : 91625.99999999996,
          "standardDeviation" : 310.8397515301512
        }, {
          "mean" : 112.31954022988505,
          "variance" : 243289.63080301025,
          "n" : 870,
          "max" : 10434.0,
          "min" : 18.0,
          "sum" : 97718.0,
          "standardDeviation" : 493.2439870926054
        }, {
          "mean" : 86.34,
          "variance" : 4657.429163879595,
          "n" : 300,
          "max" : 382.0,
          "min" : 22.0,
          "sum" : 25902.0,
          "standardDeviation" : 68.24536001721725
        } ],
        "29" : [ {
          "mean" : 673.0156075808247,
          "variance" : 7898023.504220424,
          "n" : 892,
          "max" : 74186.0,
          "min" : 40.0,
          "sum" : 600329.9219620957,
          "standardDeviation" : 2810.342239696159
        }, {
          "mean" : 191.86445783132552,
          "variance" : 826932.0469364896,
          "n" : 996,
          "max" : 28550.0,
          "min" : 26.0,
          "sum" : 191097.00000000023,
          "standardDeviation" : 909.3580411127895
        }, {
          "mean" : 149.16485013624,
          "variance" : 14623.665829650092,
          "n" : 734,
          "max" : 962.0,
          "min" : 29.0,
          "sum" : 109487.00000000016,
          "standardDeviation" : 120.9283499831619
        }, {
          "mean" : 128.96414342629467,
          "variance" : 13893.51334025599,
          "n" : 753,
          "max" : 833.0,
          "min" : 28.0,
          "sum" : 97109.99999999988,
          "standardDeviation" : 117.8707484503937
        }, {
          "mean" : 123.0666666666666,
          "variance" : 120553.19832073888,
          "n" : 795,
          "max" : 9493.0,
          "min" : 18.0,
          "sum" : 97837.99999999996,
          "standardDeviation" : 347.2077163899715
        }, {
          "mean" : 98.94450610432855,
          "variance" : 9836.632472561358,
          "n" : 901,
          "max" : 1097.0,
          "min" : 15.0,
          "sum" : 89149.00000000003,
          "standardDeviation" : 99.17979871204295
        }, {
          "mean" : 95.72916666666659,
          "variance" : 6699.387600622032,
          "n" : 912,
          "max" : 595.0,
          "min" : 19.0,
          "sum" : 87304.99999999993,
          "standardDeviation" : 81.84978680865352
        }, {
          "mean" : 91.92444444444452,
          "variance" : 6661.475931281673,
          "n" : 900,
          "max" : 514.0,
          "min" : 14.0,
          "sum" : 82732.00000000007,
          "standardDeviation" : 81.61786527030509
        }, {
          "mean" : 96.71074380165288,
          "variance" : 8347.802840052966,
          "n" : 363,
          "max" : 661.0,
          "min" : 14.0,
          "sum" : 35105.99999999999,
          "standardDeviation" : 91.36631129717871
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultGraphElement#<init>",
    "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultGraphElement.<init>()",
    "otherKiekerPattern" : "private new org.gradoop.model.impl.LogicalGraphProjectionTest$EdgeComparator.<init>()",
    "module" : "gradoop-core",
    "name" : "DefaultGraphElement#<init>",
    "key" : "org.gradoop.model.impl.DefaultGraphElement.<init>_",
    "otherKey" : "org.gradoop.model.impl.LogicalGraphProjectionTest$EdgeComparator.<init>_",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 101.60506098510831,
      "meanCurrent" : 287.6057471264367,
      "deviationOld" : 6.386592737102448,
      "deviationCurrent" : 143.9870147615247,
      "vms" : 29,
      "callsOld" : 211656,
      "calls" : 450,
      "tvalue" : -6.949885276000512,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 69.07532610883459,
    "inVMDeviation" : 228.88221801551882,
    "ess" : 1,
    "values" : [ 252.0111111111111, 269.73333333333335, 887.7333333333333, 257.1333333333333, 413.52222222222224, 1523.3333333333333, 201.26666666666668, 278.96666666666664, 266.8666666666667, 215.0, 234.4, 366.1, 222.4, 248.04444444444442, 228.26666666666668, 646.4, 195.0, 232.74444444444444, 237.06666666666666, 260.0, 248.93333333333334, 273.2, 198.8, 216.2, 255.86666666666667, 229.4, 236.05555555555557, 227.66666666666666, 292.01111111111106, 249.77777777777777 ],
    "valuesPredecessor" : [ 101.45957787143188, 102.76952228349546, 100.87927567459661, 100.05791999512562, 117.37461545127604, 99.57045798456143, 115.01905984754673, 91.47692269204468, 92.70752930201222, 98.43605023139068, 102.84585070602232, 101.8407779175928, 99.04100208198926, 98.32453885200229, 98.35698244320662, 105.05781251904575, 95.7823464043103, 101.32988861184451, 98.9266590780453, 100.72136217267358, 103.96757297482422, 104.87913376297502, 105.41641652718799, 102.73170721146631, 99.94137308112927, 90.46794147024794, 116.95130272096513, 104.02312039562635, 93.6166242329168, 104.1784850556966 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 598.1666666666666,
          "variance" : 16268.566666666668,
          "n" : 1,
          "max" : 844.0,
          "min" : 510.0,
          "sum" : 598.1666666666666,
          "standardDeviation" : 127.54829150822314
        }, {
          "mean" : 329.5,
          "variance" : 16256.999999999996,
          "n" : 4,
          "max" : 498.0,
          "min" : 222.0,
          "sum" : 1318.0,
          "standardDeviation" : 127.50294114254775
        }, {
          "mean" : 196.5,
          "variance" : 361.0,
          "n" : 4,
          "max" : 224.0,
          "min" : 182.0,
          "sum" : 786.0,
          "standardDeviation" : 19.0
        }, {
          "mean" : 181.0,
          "variance" : 181.0,
          "n" : 5,
          "max" : 196.0,
          "min" : 165.0,
          "sum" : 905.0,
          "standardDeviation" : 13.45362404707371
        }, {
          "mean" : 173.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 173.0,
          "min" : 173.0,
          "sum" : 173.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 341.6,
          "variance" : 30221.799999999996,
          "n" : 5,
          "max" : 597.0,
          "min" : 175.0,
          "sum" : 1708.0,
          "standardDeviation" : 173.84418310659692
        }, {
          "mean" : 273.25,
          "variance" : 6653.583333333334,
          "n" : 4,
          "max" : 351.0,
          "min" : 173.0,
          "sum" : 1093.0,
          "standardDeviation" : 81.56950001890004
        }, {
          "mean" : 236.25,
          "variance" : 2060.2499999999995,
          "n" : 4,
          "max" : 304.0,
          "min" : 210.0,
          "sum" : 945.0,
          "standardDeviation" : 45.38997686714546
        }, {
          "mean" : 150.0,
          "variance" : 17.999999999999996,
          "n" : 2,
          "max" : 153.0,
          "min" : 147.0,
          "sum" : 300.0,
          "standardDeviation" : 4.242640687119285
        } ],
        "2" : [ {
          "mean" : 2273.2,
          "variance" : 2.03003097E7,
          "n" : 5,
          "max" : 10332.0,
          "min" : 186.0,
          "sum" : 11366.0,
          "standardDeviation" : 4505.58649900321
        }, {
          "mean" : 187.0,
          "variance" : 2294.666666666667,
          "n" : 4,
          "max" : 256.0,
          "min" : 146.0,
          "sum" : 748.0,
          "standardDeviation" : 47.90267911783919
        }, {
          "mean" : 195.0,
          "variance" : 927.0,
          "n" : 5,
          "max" : 220.0,
          "min" : 150.0,
          "sum" : 975.0,
          "standardDeviation" : 30.44667469527666
        }, {
          "mean" : 227.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 227.0,
          "min" : 227.0,
          "sum" : 227.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 383.0,
          "variance" : 23978.000000000004,
          "n" : 5,
          "max" : 529.0,
          "min" : 184.0,
          "sum" : 1915.0,
          "standardDeviation" : 154.84831287424478
        }, {
          "mean" : 213.4,
          "variance" : 599.3000000000001,
          "n" : 5,
          "max" : 241.0,
          "min" : 178.0,
          "sum" : 1067.0,
          "standardDeviation" : 24.48060456769808
        }, {
          "mean" : 172.25,
          "variance" : 770.25,
          "n" : 4,
          "max" : 201.0,
          "min" : 147.0,
          "sum" : 689.0,
          "standardDeviation" : 27.753378172755834
        }, {
          "mean" : 186.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 186.0,
          "min" : 186.0,
          "sum" : 186.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 880.1666666666667,
          "variance" : 1326756.9666666666,
          "n" : 5,
          "max" : 3210.0,
          "min" : 170.0,
          "sum" : 4400.833333333334,
          "standardDeviation" : 1151.8493680454344
        }, {
          "mean" : 184.25,
          "variance" : 1115.5833333333328,
          "n" : 4,
          "max" : 223.0,
          "min" : 153.0,
          "sum" : 737.0,
          "standardDeviation" : 33.4003492995707
        }, {
          "mean" : 164.2,
          "variance" : 450.2,
          "n" : 5,
          "max" : 201.0,
          "min" : 150.0,
          "sum" : 821.0,
          "standardDeviation" : 21.2179169571379
        }, {
          "mean" : 244.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 244.0,
          "min" : 244.0,
          "sum" : 244.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 4188.0,
          "variance" : 7.4199571E7,
          "n" : 5,
          "max" : 19595.0,
          "min" : 176.0,
          "sum" : 20940.0,
          "standardDeviation" : 8613.917285416665
        }, {
          "mean" : 205.5,
          "variance" : 355.66666666666646,
          "n" : 4,
          "max" : 231.0,
          "min" : 187.0,
          "sum" : 822.0,
          "standardDeviation" : 18.859126879754175
        }, {
          "mean" : 177.6,
          "variance" : 1459.3000000000002,
          "n" : 5,
          "max" : 224.0,
          "min" : 136.0,
          "sum" : 888.0,
          "standardDeviation" : 38.20078533224154
        }, {
          "mean" : 200.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 200.0,
          "min" : 200.0,
          "sum" : 200.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 254.6,
          "variance" : 2172.3,
          "n" : 5,
          "max" : 309.0,
          "min" : 200.0,
          "sum" : 1273.0,
          "standardDeviation" : 46.60793923785947
        }, {
          "mean" : 155.2,
          "variance" : 762.7,
          "n" : 5,
          "max" : 194.0,
          "min" : 134.0,
          "sum" : 776.0,
          "standardDeviation" : 27.617023735370182
        }, {
          "mean" : 204.75,
          "variance" : 764.9166666666666,
          "n" : 4,
          "max" : 234.0,
          "min" : 168.0,
          "sum" : 819.0,
          "standardDeviation" : 27.657126869338157
        }, {
          "mean" : 151.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 151.0,
          "min" : 151.0,
          "sum" : 151.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 535.5,
          "variance" : 2569.1000000000004,
          "n" : 1,
          "max" : 623.0,
          "min" : 486.0,
          "sum" : 535.5,
          "standardDeviation" : 50.68629005954175
        }, {
          "mean" : 422.25,
          "variance" : 62463.583333333336,
          "n" : 4,
          "max" : 721.0,
          "min" : 155.0,
          "sum" : 1689.0,
          "standardDeviation" : 249.9271560541858
        }, {
          "mean" : 206.25,
          "variance" : 880.9166666666666,
          "n" : 4,
          "max" : 237.0,
          "min" : 177.0,
          "sum" : 825.0,
          "standardDeviation" : 29.68024034044648
        }, {
          "mean" : 190.6,
          "variance" : 856.3,
          "n" : 5,
          "max" : 237.0,
          "min" : 164.0,
          "sum" : 953.0,
          "standardDeviation" : 29.26260412198477
        }, {
          "mean" : 182.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 182.0,
          "min" : 182.0,
          "sum" : 182.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 389.6,
          "variance" : 29204.299999999996,
          "n" : 5,
          "max" : 674.0,
          "min" : 269.0,
          "sum" : 1948.0,
          "standardDeviation" : 170.89265636650393
        }, {
          "mean" : 233.0,
          "variance" : 2666.0,
          "n" : 4,
          "max" : 306.0,
          "min" : 189.0,
          "sum" : 932.0,
          "standardDeviation" : 51.633322573702344
        }, {
          "mean" : 187.4,
          "variance" : 614.3,
          "n" : 5,
          "max" : 227.0,
          "min" : 163.0,
          "sum" : 937.0,
          "standardDeviation" : 24.78507615481542
        }, {
          "mean" : 186.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 186.0,
          "min" : 186.0,
          "sum" : 186.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 287.0,
          "variance" : 7003.2,
          "n" : 5,
          "max" : 412.0,
          "min" : 194.0,
          "sum" : 1435.0,
          "standardDeviation" : 83.68512412609543
        }, {
          "mean" : 209.0,
          "variance" : 382.00000000000006,
          "n" : 4,
          "max" : 226.0,
          "min" : 181.0,
          "sum" : 836.0,
          "standardDeviation" : 19.544820285692065
        }, {
          "mean" : 152.8,
          "variance" : 808.6999999999999,
          "n" : 5,
          "max" : 196.0,
          "min" : 127.0,
          "sum" : 764.0,
          "standardDeviation" : 28.43765109849968
        }, {
          "mean" : 190.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 190.0,
          "min" : 190.0,
          "sum" : 190.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 281.0,
          "variance" : 1723.4999999999995,
          "n" : 5,
          "max" : 317.0,
          "min" : 221.0,
          "sum" : 1405.0,
          "standardDeviation" : 41.51505750929414
        }, {
          "mean" : 220.8,
          "variance" : 1272.6999999999996,
          "n" : 5,
          "max" : 258.0,
          "min" : 178.0,
          "sum" : 1104.0,
          "standardDeviation" : 35.674921163192494
        }, {
          "mean" : 197.75,
          "variance" : 50.25,
          "n" : 4,
          "max" : 203.0,
          "min" : 188.0,
          "sum" : 791.0,
          "standardDeviation" : 7.088723439378913
        }, {
          "mean" : 216.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 216.0,
          "min" : 216.0,
          "sum" : 216.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 557.5,
          "variance" : 2909.8999999999983,
          "n" : 1,
          "max" : 649.0,
          "min" : 486.0,
          "sum" : 557.5,
          "standardDeviation" : 53.94348894908447
        }, {
          "mean" : 687.5,
          "variance" : 544947.0,
          "n" : 4,
          "max" : 1787.0,
          "min" : 242.0,
          "sum" : 2750.0,
          "standardDeviation" : 738.2052560094652
        }, {
          "mean" : 218.8,
          "variance" : 411.2,
          "n" : 5,
          "max" : 251.0,
          "min" : 201.0,
          "sum" : 1094.0,
          "standardDeviation" : 20.27806696901852
        }, {
          "mean" : 217.5,
          "variance" : 630.3333333333336,
          "n" : 4,
          "max" : 238.0,
          "min" : 182.0,
          "sum" : 870.0,
          "standardDeviation" : 25.1064400768674
        }, {
          "mean" : 220.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 220.0,
          "min" : 220.0,
          "sum" : 220.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 309.2,
          "variance" : 20494.199999999997,
          "n" : 5,
          "max" : 527.0,
          "min" : 206.0,
          "sum" : 1546.0,
          "standardDeviation" : 143.15795472134965
        }, {
          "mean" : 178.75,
          "variance" : 270.9166666666667,
          "n" : 4,
          "max" : 192.0,
          "min" : 157.0,
          "sum" : 715.0,
          "standardDeviation" : 16.45954636879968
        }, {
          "mean" : 175.75,
          "variance" : 1338.2499999999998,
          "n" : 4,
          "max" : 229.0,
          "min" : 146.0,
          "sum" : 703.0,
          "standardDeviation" : 36.58209944768069
        }, {
          "mean" : 186.0,
          "variance" : 241.99999999999997,
          "n" : 2,
          "max" : 197.0,
          "min" : 175.0,
          "sum" : 372.0,
          "standardDeviation" : 15.556349186104045
        } ],
        "13" : [ {
          "mean" : 695.6666666666666,
          "variance" : 21020.266666666666,
          "n" : 1,
          "max" : 931.0,
          "min" : 545.0,
          "sum" : 695.6666666666666,
          "standardDeviation" : 144.98367724218704
        }, {
          "mean" : 256.5,
          "variance" : 13800.999999999996,
          "n" : 4,
          "max" : 426.0,
          "min" : 164.0,
          "sum" : 1026.0,
          "standardDeviation" : 117.47765745025731
        }, {
          "mean" : 211.0,
          "variance" : 3540.9999999999995,
          "n" : 5,
          "max" : 307.0,
          "min" : 162.0,
          "sum" : 1055.0,
          "standardDeviation" : 59.50630218724736
        }, {
          "mean" : 189.25,
          "variance" : 1492.9166666666663,
          "n" : 4,
          "max" : 240.0,
          "min" : 146.0,
          "sum" : 757.0,
          "standardDeviation" : 38.63827980988111
        }, {
          "mean" : 187.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 187.0,
          "min" : 187.0,
          "sum" : 187.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 342.6,
          "variance" : 17299.800000000003,
          "n" : 5,
          "max" : 501.0,
          "min" : 200.0,
          "sum" : 1713.0,
          "standardDeviation" : 131.52870409154042
        }, {
          "mean" : 180.75,
          "variance" : 833.5833333333333,
          "n" : 4,
          "max" : 206.0,
          "min" : 151.0,
          "sum" : 723.0,
          "standardDeviation" : 28.871843261789387
        }, {
          "mean" : 169.8,
          "variance" : 1102.7,
          "n" : 5,
          "max" : 218.0,
          "min" : 137.0,
          "sum" : 849.0,
          "standardDeviation" : 33.20692698820534
        }, {
          "mean" : 139.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 139.0,
          "min" : 139.0,
          "sum" : 139.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 1565.4,
          "variance" : 7869871.799999999,
          "n" : 5,
          "max" : 6580.0,
          "min" : 199.0,
          "sum" : 7827.0,
          "standardDeviation" : 2805.329178545719
        }, {
          "mean" : 208.25,
          "variance" : 844.2500000000001,
          "n" : 4,
          "max" : 242.0,
          "min" : 174.0,
          "sum" : 833.0,
          "standardDeviation" : 29.055980451535277
        }, {
          "mean" : 174.8,
          "variance" : 534.2,
          "n" : 5,
          "max" : 207.0,
          "min" : 143.0,
          "sum" : 874.0,
          "standardDeviation" : 23.112767034693185
        }, {
          "mean" : 162.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 162.0,
          "min" : 162.0,
          "sum" : 162.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 219.8,
          "variance" : 7077.199999999999,
          "n" : 5,
          "max" : 314.0,
          "min" : 134.0,
          "sum" : 1099.0,
          "standardDeviation" : 84.12609583238722
        }, {
          "mean" : 174.6,
          "variance" : 247.29999999999993,
          "n" : 5,
          "max" : 189.0,
          "min" : 157.0,
          "sum" : 873.0,
          "standardDeviation" : 15.725775020646834
        }, {
          "mean" : 191.5,
          "variance" : 220.33333333333337,
          "n" : 4,
          "max" : 212.0,
          "min" : 177.0,
          "sum" : 766.0,
          "standardDeviation" : 14.84362938547488
        }, {
          "mean" : 187.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 187.0,
          "min" : 187.0,
          "sum" : 187.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 301.8333333333333,
          "variance" : 6738.966666666666,
          "n" : 5,
          "max" : 446.0,
          "min" : 216.0,
          "sum" : 1509.1666666666665,
          "standardDeviation" : 82.09120943600884
        }, {
          "mean" : 173.5,
          "variance" : 1227.0,
          "n" : 4,
          "max" : 208.0,
          "min" : 139.0,
          "sum" : 694.0,
          "standardDeviation" : 35.02855977627399
        }, {
          "mean" : 198.0,
          "variance" : 2690.0,
          "n" : 5,
          "max" : 273.0,
          "min" : 129.0,
          "sum" : 990.0,
          "standardDeviation" : 51.86520991955976
        }, {
          "mean" : 298.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 298.0,
          "min" : 298.0,
          "sum" : 298.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 330.0,
          "variance" : 27014.500000000004,
          "n" : 5,
          "max" : 547.0,
          "min" : 180.0,
          "sum" : 1650.0,
          "standardDeviation" : 164.36088342425032
        }, {
          "mean" : 188.8,
          "variance" : 1239.2000000000003,
          "n" : 5,
          "max" : 238.0,
          "min" : 151.0,
          "sum" : 944.0,
          "standardDeviation" : 35.20227265390688
        }, {
          "mean" : 185.75,
          "variance" : 1604.2500000000002,
          "n" : 4,
          "max" : 239.0,
          "min" : 152.0,
          "sum" : 743.0,
          "standardDeviation" : 40.05308976845607
        }, {
          "mean" : 219.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 219.0,
          "min" : 219.0,
          "sum" : 219.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 604.0,
          "variance" : 13474.799999999997,
          "n" : 1,
          "max" : 834.0,
          "min" : 528.0,
          "sum" : 604.0,
          "standardDeviation" : 116.08100619825794
        }, {
          "mean" : 349.0,
          "variance" : 15731.333333333334,
          "n" : 4,
          "max" : 510.0,
          "min" : 228.0,
          "sum" : 1396.0,
          "standardDeviation" : 125.42461215141681
        }, {
          "mean" : 177.25,
          "variance" : 56.24999999999995,
          "n" : 4,
          "max" : 187.0,
          "min" : 170.0,
          "sum" : 709.0,
          "standardDeviation" : 7.4999999999999964
        }, {
          "mean" : 211.0,
          "variance" : 988.6666666666667,
          "n" : 4,
          "max" : 239.0,
          "min" : 168.0,
          "sum" : 844.0,
          "standardDeviation" : 31.443070248731544
        }, {
          "mean" : 173.5,
          "variance" : 2380.5000000000005,
          "n" : 2,
          "max" : 208.0,
          "min" : 139.0,
          "sum" : 347.0,
          "standardDeviation" : 48.79036790187178
        } ],
        "20" : [ {
          "mean" : 374.0,
          "variance" : 14107.5,
          "n" : 5,
          "max" : 540.0,
          "min" : 221.0,
          "sum" : 1870.0,
          "standardDeviation" : 118.77499736897492
        }, {
          "mean" : 200.5,
          "variance" : 281.6666666666667,
          "n" : 4,
          "max" : 217.0,
          "min" : 180.0,
          "sum" : 802.0,
          "standardDeviation" : 16.782927833565473
        }, {
          "mean" : 169.0,
          "variance" : 20.666666666666664,
          "n" : 4,
          "max" : 174.0,
          "min" : 163.0,
          "sum" : 676.0,
          "standardDeviation" : 4.546060565661952
        }, {
          "mean" : 193.0,
          "variance" : 8.000000000000002,
          "n" : 2,
          "max" : 195.0,
          "min" : 191.0,
          "sum" : 386.0,
          "standardDeviation" : 2.8284271247461903
        } ],
        "21" : [ {
          "mean" : 381.2,
          "variance" : 18642.199999999993,
          "n" : 5,
          "max" : 553.0,
          "min" : 207.0,
          "sum" : 1906.0,
          "standardDeviation" : 136.53644202190122
        }, {
          "mean" : 196.75,
          "variance" : 168.2500000000001,
          "n" : 4,
          "max" : 215.0,
          "min" : 185.0,
          "sum" : 787.0,
          "standardDeviation" : 12.971121771072852
        }, {
          "mean" : 222.0,
          "variance" : 2369.5,
          "n" : 5,
          "max" : 266.0,
          "min" : 139.0,
          "sum" : 1110.0,
          "standardDeviation" : 48.67751020748699
        }, {
          "mean" : 295.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 295.0,
          "min" : 295.0,
          "sum" : 295.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 255.0,
          "variance" : 4850.499999999999,
          "n" : 5,
          "max" : 335.0,
          "min" : 166.0,
          "sum" : 1275.0,
          "standardDeviation" : 69.64553108419807
        }, {
          "mean" : 151.75,
          "variance" : 409.5833333333332,
          "n" : 4,
          "max" : 180.0,
          "min" : 134.0,
          "sum" : 607.0,
          "standardDeviation" : 20.238165265985284
        }, {
          "mean" : 182.0,
          "variance" : 854.0,
          "n" : 5,
          "max" : 220.0,
          "min" : 148.0,
          "sum" : 910.0,
          "standardDeviation" : 29.223278392404914
        }, {
          "mean" : 190.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 190.0,
          "min" : 190.0,
          "sum" : 190.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 214.8,
          "variance" : 2865.2,
          "n" : 5,
          "max" : 297.0,
          "min" : 156.0,
          "sum" : 1074.0,
          "standardDeviation" : 53.52756299328412
        }, {
          "mean" : 196.2,
          "variance" : 99.69999999999999,
          "n" : 5,
          "max" : 205.0,
          "min" : 180.0,
          "sum" : 981.0,
          "standardDeviation" : 9.984988733093292
        }, {
          "mean" : 249.25,
          "variance" : 6166.916666666666,
          "n" : 4,
          "max" : 367.0,
          "min" : 207.0,
          "sum" : 997.0,
          "standardDeviation" : 78.52971836614891
        }, {
          "mean" : 191.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 191.0,
          "min" : 191.0,
          "sum" : 191.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 324.4,
          "variance" : 23328.8,
          "n" : 5,
          "max" : 513.0,
          "min" : 201.0,
          "sum" : 1622.0,
          "standardDeviation" : 152.73768362784608
        }, {
          "mean" : 239.2,
          "variance" : 8424.700000000003,
          "n" : 5,
          "max" : 386.0,
          "min" : 138.0,
          "sum" : 1196.0,
          "standardDeviation" : 91.78616453474893
        }, {
          "mean" : 209.75,
          "variance" : 3679.5833333333326,
          "n" : 4,
          "max" : 297.0,
          "min" : 168.0,
          "sum" : 839.0,
          "standardDeviation" : 60.65956918189687
        }, {
          "mean" : 181.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 181.0,
          "min" : 181.0,
          "sum" : 181.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 310.6,
          "variance" : 19687.299999999996,
          "n" : 5,
          "max" : 503.0,
          "min" : 183.0,
          "sum" : 1553.0,
          "standardDeviation" : 140.31143930556766
        }, {
          "mean" : 191.6,
          "variance" : 659.3000000000001,
          "n" : 5,
          "max" : 218.0,
          "min" : 150.0,
          "sum" : 958.0,
          "standardDeviation" : 25.676837811537464
        }, {
          "mean" : 182.0,
          "variance" : 785.3333333333331,
          "n" : 4,
          "max" : 219.0,
          "min" : 151.0,
          "sum" : 728.0,
          "standardDeviation" : 28.0237994093116
        }, {
          "mean" : 202.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 202.0,
          "min" : 202.0,
          "sum" : 202.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 512.8333333333334,
          "variance" : 20969.366666666672,
          "n" : 1,
          "max" : 710.0,
          "min" : 307.0,
          "sum" : 512.8333333333334,
          "standardDeviation" : 144.80803384711317
        }, {
          "mean" : 255.5,
          "variance" : 3793.6666666666656,
          "n" : 4,
          "max" : 315.0,
          "min" : 181.0,
          "sum" : 1022.0,
          "standardDeviation" : 61.59274849092761
        }, {
          "mean" : 165.0,
          "variance" : 255.5,
          "n" : 5,
          "max" : 190.0,
          "min" : 149.0,
          "sum" : 825.0,
          "standardDeviation" : 15.98436736314578
        }, {
          "mean" : 241.5,
          "variance" : 9390.333333333334,
          "n" : 4,
          "max" : 385.0,
          "min" : 179.0,
          "sum" : 966.0,
          "standardDeviation" : 96.90373229826255
        }, {
          "mean" : 215.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 215.0,
          "min" : 215.0,
          "sum" : 215.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 276.0,
          "variance" : 4234.0,
          "n" : 5,
          "max" : 344.0,
          "min" : 186.0,
          "sum" : 1380.0,
          "standardDeviation" : 65.06919393998976
        }, {
          "mean" : 235.5,
          "variance" : 243.0,
          "n" : 4,
          "max" : 250.0,
          "min" : 214.0,
          "sum" : 942.0,
          "standardDeviation" : 15.588457268119896
        }, {
          "mean" : 170.6,
          "variance" : 888.7999999999998,
          "n" : 5,
          "max" : 209.0,
          "min" : 139.0,
          "sum" : 853.0,
          "standardDeviation" : 29.81274895074253
        }, {
          "mean" : 240.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 240.0,
          "min" : 240.0,
          "sum" : 240.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1089.1666666666665,
          "variance" : 2055489.366666667,
          "n" : 1,
          "max" : 4004.0,
          "min" : 306.0,
          "sum" : 1089.1666666666665,
          "standardDeviation" : 1433.6977947484843
        }, {
          "mean" : 249.5,
          "variance" : 961.0,
          "n" : 4,
          "max" : 294.0,
          "min" : 222.0,
          "sum" : 998.0,
          "standardDeviation" : 31.0
        }, {
          "mean" : 232.0,
          "variance" : 530.0000000000001,
          "n" : 5,
          "max" : 261.0,
          "min" : 201.0,
          "sum" : 1160.0,
          "standardDeviation" : 23.02172886644268
        }, {
          "mean" : 241.5,
          "variance" : 875.0,
          "n" : 4,
          "max" : 269.0,
          "min" : 209.0,
          "sum" : 966.0,
          "standardDeviation" : 29.58039891549808
        }, {
          "mean" : 167.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 167.0,
          "min" : 167.0,
          "sum" : 167.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 589.6666666666666,
          "variance" : 7136.266666666668,
          "n" : 1,
          "max" : 739.0,
          "min" : 511.0,
          "sum" : 589.6666666666666,
          "standardDeviation" : 84.47642669210546
        }, {
          "mean" : 275.25,
          "variance" : 10784.916666666664,
          "n" : 4,
          "max" : 415.0,
          "min" : 170.0,
          "sum" : 1101.0,
          "standardDeviation" : 103.85045337728027
        }, {
          "mean" : 214.75,
          "variance" : 290.91666666666674,
          "n" : 4,
          "max" : 233.0,
          "min" : 193.0,
          "sum" : 859.0,
          "standardDeviation" : 17.056279391082533
        }, {
          "mean" : 199.2,
          "variance" : 456.20000000000005,
          "n" : 5,
          "max" : 236.0,
          "min" : 183.0,
          "sum" : 996.0,
          "standardDeviation" : 21.358838919754042
        }, {
          "mean" : 201.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 201.0,
          "min" : 201.0,
          "sum" : 201.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 247.53562340966934,
          "variance" : 350848.9369459165,
          "n" : 781,
          "max" : 11467.0,
          "min" : 57.0,
          "sum" : 193325.32188295174,
          "standardDeviation" : 592.3250264389616
        }, {
          "mean" : 110.2266666666667,
          "variance" : 3792.423311089927,
          "n" : 1050,
          "max" : 632.0,
          "min" : 18.0,
          "sum" : 115738.00000000004,
          "standardDeviation" : 61.582654303707365
        }, {
          "mean" : 120.80497925311197,
          "variance" : 142523.9439086906,
          "n" : 723,
          "max" : 10148.0,
          "min" : 27.0,
          "sum" : 87341.99999999996,
          "standardDeviation" : 377.523434913239
        }, {
          "mean" : 89.72107969151665,
          "variance" : 116149.15118956605,
          "n" : 778,
          "max" : 9488.0,
          "min" : 26.0,
          "sum" : 69802.99999999996,
          "standardDeviation" : 340.80661846502636
        }, {
          "mean" : 68.05939226519334,
          "variance" : 752.1748909164546,
          "n" : 724,
          "max" : 288.0,
          "min" : 28.0,
          "sum" : 49274.99999999998,
          "standardDeviation" : 27.42580702397752
        }, {
          "mean" : 55.86606129398412,
          "variance" : 598.3274945826023,
          "n" : 881,
          "max" : 282.0,
          "min" : 14.0,
          "sum" : 49218.00000000001,
          "standardDeviation" : 24.46073372944079
        }, {
          "mean" : 69.92334494773532,
          "variance" : 144399.8127218215,
          "n" : 861,
          "max" : 11178.0,
          "min" : 14.0,
          "sum" : 60204.00000000011,
          "standardDeviation" : 379.9997535812642
        }, {
          "mean" : 77.42728297632483,
          "variance" : 232179.43009001334,
          "n" : 887,
          "max" : 10329.0,
          "min" : 14.0,
          "sum" : 68678.00000000013,
          "standardDeviation" : 481.8500078759088
        }, {
          "mean" : 60.037837837837834,
          "variance" : 781.3806782392148,
          "n" : 370,
          "max" : 256.0,
          "min" : 14.0,
          "sum" : 22214.0,
          "standardDeviation" : 27.95318726441074
        } ],
        "1" : [ {
          "mean" : 234.05015353121826,
          "variance" : 230948.6112115546,
          "n" : 972,
          "max" : 11668.0,
          "min" : 60.0,
          "sum" : 227496.74923234415,
          "standardDeviation" : 480.57113023105603
        }, {
          "mean" : 146.48837209302312,
          "variance" : 335291.106965915,
          "n" : 860,
          "max" : 9908.0,
          "min" : 36.0,
          "sum" : 125979.99999999988,
          "standardDeviation" : 579.0432686474431
        }, {
          "mean" : 102.83449235048677,
          "variance" : 4836.578418648623,
          "n" : 719,
          "max" : 562.0,
          "min" : 18.0,
          "sum" : 73937.99999999999,
          "standardDeviation" : 69.54551328913047
        }, {
          "mean" : 85.51165980795605,
          "variance" : 5458.708998477519,
          "n" : 729,
          "max" : 789.0,
          "min" : 27.0,
          "sum" : 62337.99999999996,
          "standardDeviation" : 73.88307653635925
        }, {
          "mean" : 64.84061696658094,
          "variance" : 862.2190945995579,
          "n" : 778,
          "max" : 262.0,
          "min" : 16.0,
          "sum" : 50445.99999999997,
          "standardDeviation" : 29.363567470584325
        }, {
          "mean" : 80.42431192660551,
          "variance" : 223624.5522440725,
          "n" : 872,
          "max" : 9974.0,
          "min" : 15.0,
          "sum" : 70130.0,
          "standardDeviation" : 472.88957722080585
        }, {
          "mean" : 51.92998833138855,
          "variance" : 531.0862141353786,
          "n" : 857,
          "max" : 286.0,
          "min" : 14.0,
          "sum" : 44503.999999999985,
          "standardDeviation" : 23.045307855079276
        }, {
          "mean" : 54.332963374028836,
          "variance" : 600.5934566531016,
          "n" : 901,
          "max" : 257.0,
          "min" : 14.0,
          "sum" : 48953.99999999998,
          "standardDeviation" : 24.507008317073335
        }, {
          "mean" : 58.02989130434777,
          "variance" : 713.881937862812,
          "n" : 368,
          "max" : 254.0,
          "min" : 14.0,
          "sum" : 21354.999999999978,
          "standardDeviation" : 26.71856915822425
        } ],
        "2" : [ {
          "mean" : 268.5661680092058,
          "variance" : 458654.9855361056,
          "n" : 864,
          "max" : 13407.0,
          "min" : 60.0,
          "sum" : 232041.1691599538,
          "standardDeviation" : 677.240714617857
        }, {
          "mean" : 121.13082039911312,
          "variance" : 6071.845242167491,
          "n" : 902,
          "max" : 679.0,
          "min" : 34.0,
          "sum" : 109260.00000000003,
          "standardDeviation" : 77.92204593160713
        }, {
          "mean" : 114.51925630810094,
          "variance" : 142095.46006753136,
          "n" : 753,
          "max" : 10296.0,
          "min" : 31.0,
          "sum" : 86233.0,
          "standardDeviation" : 376.9555147063528
        }, {
          "mean" : 77.5856950067476,
          "variance" : 3286.013254550102,
          "n" : 741,
          "max" : 724.0,
          "min" : 25.0,
          "sum" : 57490.99999999997,
          "standardDeviation" : 57.323758203297366
        }, {
          "mean" : 73.76893453145048,
          "variance" : 127513.10849385052,
          "n" : 779,
          "max" : 9997.0,
          "min" : 14.0,
          "sum" : 57465.99999999993,
          "standardDeviation" : 357.0897765182455
        }, {
          "mean" : 60.050887573964474,
          "variance" : 616.8540424577244,
          "n" : 845,
          "max" : 258.0,
          "min" : 18.0,
          "sum" : 50742.99999999998,
          "standardDeviation" : 24.836546508275347
        }, {
          "mean" : 55.89442467378411,
          "variance" : 545.0351589025734,
          "n" : 843,
          "max" : 242.0,
          "min" : 14.0,
          "sum" : 47119.0,
          "standardDeviation" : 23.345988068671957
        }, {
          "mean" : 54.36971046770597,
          "variance" : 444.60786635977945,
          "n" : 898,
          "max" : 255.0,
          "min" : 14.0,
          "sum" : 48823.99999999996,
          "standardDeviation" : 21.085726602604414
        }, {
          "mean" : 52.49883990719258,
          "variance" : 433.34825446500815,
          "n" : 431,
          "max" : 219.0,
          "min" : 18.0,
          "sum" : 22627.000000000004,
          "standardDeviation" : 20.817018385566367
        } ],
        "3" : [ {
          "mean" : 260.27488687782835,
          "variance" : 287122.56195072294,
          "n" : 879,
          "max" : 11475.0,
          "min" : 55.0,
          "sum" : 228781.62556561112,
          "standardDeviation" : 535.8381863498746
        }, {
          "mean" : 118.45041322314054,
          "variance" : 6085.470134265473,
          "n" : 968,
          "max" : 686.0,
          "min" : 35.0,
          "sum" : 114660.00000000004,
          "standardDeviation" : 78.00942336836924
        }, {
          "mean" : 109.98319327731093,
          "variance" : 4236.555116857397,
          "n" : 714,
          "max" : 522.0,
          "min" : 35.0,
          "sum" : 78528.0,
          "standardDeviation" : 65.08882482313993
        }, {
          "mean" : 76.43893129770996,
          "variance" : 2210.6669664997326,
          "n" : 786,
          "max" : 416.0,
          "min" : 14.0,
          "sum" : 60081.00000000003,
          "standardDeviation" : 47.017730341858616
        }, {
          "mean" : 62.7209302325581,
          "variance" : 734.7706609705464,
          "n" : 774,
          "max" : 271.0,
          "min" : 15.0,
          "sum" : 48545.99999999997,
          "standardDeviation" : 27.10665344469041
        }, {
          "mean" : 69.34803921568627,
          "variance" : 110933.98914952487,
          "n" : 816,
          "max" : 9545.0,
          "min" : 14.0,
          "sum" : 56588.0,
          "standardDeviation" : 333.06754442533855
        }, {
          "mean" : 55.852144469525946,
          "variance" : 469.8978880514216,
          "n" : 886,
          "max" : 234.0,
          "min" : 17.0,
          "sum" : 49484.999999999985,
          "standardDeviation" : 21.677128224269506
        }, {
          "mean" : 56.44937428896474,
          "variance" : 759.2568304736437,
          "n" : 879,
          "max" : 487.0,
          "min" : 22.0,
          "sum" : 49619.00000000001,
          "standardDeviation" : 27.55461541146317
        }, {
          "mean" : 55.58073654390931,
          "variance" : 679.1362187741439,
          "n" : 353,
          "max" : 249.0,
          "min" : 15.0,
          "sum" : 19619.999999999985,
          "standardDeviation" : 26.060242108893462
        } ],
        "4" : [ {
          "mean" : 421.9426751592353,
          "variance" : 2.170879133982194E7,
          "n" : 780,
          "max" : 129836.0,
          "min" : 49.0,
          "sum" : 329115.28662420355,
          "standardDeviation" : 4659.269399790265
        }, {
          "mean" : 129.48673469387754,
          "variance" : 7827.069282483159,
          "n" : 980,
          "max" : 778.0,
          "min" : 18.0,
          "sum" : 126896.99999999999,
          "standardDeviation" : 88.4707255677445
        }, {
          "mean" : 130.47524752475263,
          "variance" : 272405.93529296253,
          "n" : 707,
          "max" : 9867.0,
          "min" : 19.0,
          "sum" : 92246.00000000012,
          "standardDeviation" : 521.9252200200356
        }, {
          "mean" : 72.32826362484163,
          "variance" : 2412.746167158843,
          "n" : 789,
          "max" : 724.0,
          "min" : 14.0,
          "sum" : 57067.000000000044,
          "standardDeviation" : 49.11971261274686
        }, {
          "mean" : 61.867758186398014,
          "variance" : 616.8437763046296,
          "n" : 794,
          "max" : 263.0,
          "min" : 21.0,
          "sum" : 49123.00000000002,
          "standardDeviation" : 24.83633983308792
        }, {
          "mean" : 57.3685419058554,
          "variance" : 639.4008023542775,
          "n" : 871,
          "max" : 251.0,
          "min" : 14.0,
          "sum" : 49968.00000000006,
          "standardDeviation" : 25.28637582482467
        }, {
          "mean" : 52.679131483715345,
          "variance" : 476.23266784380263,
          "n" : 829,
          "max" : 259.0,
          "min" : 14.0,
          "sum" : 43671.00000000002,
          "standardDeviation" : 21.82275573441179
        }, {
          "mean" : 64.51336898395735,
          "variance" : 108150.37428574689,
          "n" : 935,
          "max" : 10091.0,
          "min" : 14.0,
          "sum" : 60320.000000000124,
          "standardDeviation" : 328.8622421101986
        }, {
          "mean" : 53.33692722371963,
          "variance" : 443.08887593793264,
          "n" : 371,
          "max" : 233.0,
          "min" : 18.0,
          "sum" : 19787.99999999998,
          "standardDeviation" : 21.04967638558685
        } ],
        "5" : [ {
          "mean" : 270.2837837837835,
          "variance" : 387675.9894784085,
          "n" : 809,
          "max" : 13142.0,
          "min" : 58.0,
          "sum" : 218659.58108108086,
          "standardDeviation" : 622.636322003791
        }, {
          "mean" : 119.76761303890638,
          "variance" : 6533.235413138532,
          "n" : 951,
          "max" : 794.0,
          "min" : 19.0,
          "sum" : 113898.99999999996,
          "standardDeviation" : 80.82843196016196
        }, {
          "mean" : 117.75242047026288,
          "variance" : 68360.2308632468,
          "n" : 723,
          "max" : 6869.0,
          "min" : 17.0,
          "sum" : 85135.00000000006,
          "standardDeviation" : 261.4578950103569
        }, {
          "mean" : 82.8923476005188,
          "variance" : 3761.862421884213,
          "n" : 771,
          "max" : 491.0,
          "min" : 14.0,
          "sum" : 63910.0,
          "standardDeviation" : 61.33402336292812
        }, {
          "mean" : 74.07251908396945,
          "variance" : 122070.03932027046,
          "n" : 786,
          "max" : 9835.0,
          "min" : 14.0,
          "sum" : 58220.99999999999,
          "standardDeviation" : 349.3852305411184
        }, {
          "mean" : 52.59545454545454,
          "variance" : 452.00680525390436,
          "n" : 880,
          "max" : 235.0,
          "min" : 14.0,
          "sum" : 46283.99999999999,
          "standardDeviation" : 21.260451670975957
        }, {
          "mean" : 56.15024630541873,
          "variance" : 611.9280763880876,
          "n" : 812,
          "max" : 240.0,
          "min" : 21.0,
          "sum" : 45594.000000000015,
          "standardDeviation" : 24.737180041146313
        }, {
          "mean" : 51.867785939139544,
          "variance" : 481.12955990370966,
          "n" : 953,
          "max" : 246.0,
          "min" : 14.0,
          "sum" : 49429.999999999985,
          "standardDeviation" : 21.93466571214865
        }, {
          "mean" : 57.667567567567566,
          "variance" : 712.2333626309236,
          "n" : 370,
          "max" : 235.0,
          "min" : 14.0,
          "sum" : 21337.0,
          "standardDeviation" : 26.687700587179172
        } ],
        "6" : [ {
          "mean" : 373.9027431421452,
          "variance" : 2343564.6646866025,
          "n" : 797,
          "max" : 27778.0,
          "min" : 53.0,
          "sum" : 298000.48628428974,
          "standardDeviation" : 1530.8705577829246
        }, {
          "mean" : 138.5451713395636,
          "variance" : 10680.435327491408,
          "n" : 963,
          "max" : 707.0,
          "min" : 34.0,
          "sum" : 133418.99999999977,
          "standardDeviation" : 103.34619164483715
        }, {
          "mean" : 122.04249291784687,
          "variance" : 6807.9754967552635,
          "n" : 706,
          "max" : 546.0,
          "min" : 35.0,
          "sum" : 86161.9999999999,
          "standardDeviation" : 82.51045689338572
        }, {
          "mean" : 81.50283286118977,
          "variance" : 4629.481552247202,
          "n" : 706,
          "max" : 769.0,
          "min" : 15.0,
          "sum" : 57540.99999999998,
          "standardDeviation" : 68.04029359318787
        }, {
          "mean" : 61.77337110481593,
          "variance" : 931.3698430876168,
          "n" : 706,
          "max" : 281.0,
          "min" : 14.0,
          "sum" : 43612.000000000044,
          "standardDeviation" : 30.51835256182117
        }, {
          "mean" : 67.99367088607609,
          "variance" : 111158.43975710342,
          "n" : 790,
          "max" : 9406.0,
          "min" : 15.0,
          "sum" : 53715.00000000011,
          "standardDeviation" : 333.404318743929
        }, {
          "mean" : 52.09820359281446,
          "variance" : 483.60665144531055,
          "n" : 835,
          "max" : 250.0,
          "min" : 15.0,
          "sum" : 43502.00000000007,
          "standardDeviation" : 21.991058443042494
        }, {
          "mean" : 56.001182033096995,
          "variance" : 602.5621287786591,
          "n" : 846,
          "max" : 242.0,
          "min" : 14.0,
          "sum" : 47377.00000000006,
          "standardDeviation" : 24.5471409491749
        }, {
          "mean" : 68.24045261669022,
          "variance" : 145626.34719979492,
          "n" : 707,
          "max" : 10184.0,
          "min" : 17.0,
          "sum" : 48245.999999999985,
          "standardDeviation" : 381.6102032176222
        } ],
        "7" : [ {
          "mean" : 233.35746606334848,
          "variance" : 367802.14840399043,
          "n" : 879,
          "max" : 12996.0,
          "min" : 37.0,
          "sum" : 205121.21266968333,
          "standardDeviation" : 606.4669392505996
        }, {
          "mean" : 100.5490417136414,
          "variance" : 2190.360741179976,
          "n" : 887,
          "max" : 501.0,
          "min" : 26.0,
          "sum" : 89186.99999999993,
          "standardDeviation" : 46.80128995209401
        }, {
          "mean" : 92.71714285714289,
          "variance" : 1963.6337543429381,
          "n" : 700,
          "max" : 382.0,
          "min" : 18.0,
          "sum" : 64902.00000000002,
          "standardDeviation" : 44.31290731088334
        }, {
          "mean" : 77.43057324840761,
          "variance" : 2092.6791661250472,
          "n" : 785,
          "max" : 585.0,
          "min" : 19.0,
          "sum" : 60782.99999999998,
          "standardDeviation" : 45.74581036690734
        }, {
          "mean" : 61.990703851261614,
          "variance" : 1017.7831581475511,
          "n" : 753,
          "max" : 476.0,
          "min" : 16.0,
          "sum" : 46678.99999999999,
          "standardDeviation" : 31.9027139620997
        }, {
          "mean" : 57.15411355735809,
          "variance" : 548.2210010404546,
          "n" : 863,
          "max" : 258.0,
          "min" : 16.0,
          "sum" : 49324.00000000003,
          "standardDeviation" : 23.414119693903817
        }, {
          "mean" : 67.11163337250287,
          "variance" : 116321.13222921117,
          "n" : 851,
          "max" : 9985.0,
          "min" : 14.0,
          "sum" : 57111.99999999994,
          "standardDeviation" : 341.05883983443556
        }, {
          "mean" : 51.89514348785868,
          "variance" : 412.30391008988596,
          "n" : 906,
          "max" : 258.0,
          "min" : 14.0,
          "sum" : 47016.99999999996,
          "standardDeviation" : 20.30526803787347
        }, {
          "mean" : 58.495348837209306,
          "variance" : 497.5699083861873,
          "n" : 430,
          "max" : 248.0,
          "min" : 28.0,
          "sum" : 25153.0,
          "standardDeviation" : 22.306275089897625
        } ],
        "8" : [ {
          "mean" : 234.05163727959732,
          "variance" : 424399.29745633295,
          "n" : 789,
          "max" : 14748.0,
          "min" : 54.0,
          "sum" : 184666.74181360228,
          "standardDeviation" : 651.4593597887231
        }, {
          "mean" : 118.58702368692072,
          "variance" : 91169.40556340046,
          "n" : 971,
          "max" : 9324.0,
          "min" : 18.0,
          "sum" : 115148.00000000001,
          "standardDeviation" : 301.94271901041174
        }, {
          "mean" : 94.32216494845365,
          "variance" : 2473.9399467908183,
          "n" : 776,
          "max" : 541.0,
          "min" : 26.0,
          "sum" : 73194.00000000003,
          "standardDeviation" : 49.73871677869081
        }, {
          "mean" : 74.19475138121548,
          "variance" : 2717.733803672545,
          "n" : 724,
          "max" : 554.0,
          "min" : 21.0,
          "sum" : 53717.00000000001,
          "standardDeviation" : 52.131888548877114
        }, {
          "mean" : 61.96207332490519,
          "variance" : 772.444129366767,
          "n" : 791,
          "max" : 263.0,
          "min" : 28.0,
          "sum" : 49012.00000000001,
          "standardDeviation" : 27.792879112585062
        }, {
          "mean" : 77.17272727272727,
          "variance" : 205013.96103009634,
          "n" : 880,
          "max" : 9587.0,
          "min" : 15.0,
          "sum" : 67912.0,
          "standardDeviation" : 452.7846740229801
        }, {
          "mean" : 53.27542857142854,
          "variance" : 485.8840065380841,
          "n" : 875,
          "max" : 237.0,
          "min" : 22.0,
          "sum" : 46615.99999999997,
          "standardDeviation" : 22.042776742917034
        }, {
          "mean" : 50.57877094972068,
          "variance" : 343.72057790609017,
          "n" : 895,
          "max" : 169.0,
          "min" : 27.0,
          "sum" : 45268.00000000001,
          "standardDeviation" : 18.53970274589348
        }, {
          "mean" : 52.649859943977575,
          "variance" : 428.32930475560994,
          "n" : 357,
          "max" : 242.0,
          "min" : 14.0,
          "sum" : 18795.999999999993,
          "standardDeviation" : 20.696118108370225
        } ],
        "9" : [ {
          "mean" : 264.4459134615388,
          "variance" : 382864.9284790687,
          "n" : 827,
          "max" : 12056.0,
          "min" : 40.0,
          "sum" : 218696.77043269257,
          "standardDeviation" : 618.7608006968999
        }, {
          "mean" : 121.74169346195072,
          "variance" : 8029.5329915497105,
          "n" : 933,
          "max" : 796.0,
          "min" : 0.0,
          "sum" : 113585.00000000001,
          "standardDeviation" : 89.60766145564625
        }, {
          "mean" : 102.29183955739968,
          "variance" : 5943.55875602962,
          "n" : 723,
          "max" : 861.0,
          "min" : 35.0,
          "sum" : 73956.99999999997,
          "standardDeviation" : 77.09447941344192
        }, {
          "mean" : 95.25911458333324,
          "variance" : 132705.52208109255,
          "n" : 768,
          "max" : 10044.0,
          "min" : 28.0,
          "sum" : 73158.99999999993,
          "standardDeviation" : 364.28769136644263
        }, {
          "mean" : 63.29291553133517,
          "variance" : 486.5457341893081,
          "n" : 734,
          "max" : 282.0,
          "min" : 16.0,
          "sum" : 46457.000000000015,
          "standardDeviation" : 22.05778171506165
        }, {
          "mean" : 56.41619156214361,
          "variance" : 682.0537557988779,
          "n" : 877,
          "max" : 271.0,
          "min" : 14.0,
          "sum" : 49476.99999999995,
          "standardDeviation" : 26.11615890208355
        }, {
          "mean" : 53.44366197183097,
          "variance" : 419.8217341652736,
          "n" : 852,
          "max" : 250.0,
          "min" : 15.0,
          "sum" : 45533.999999999985,
          "standardDeviation" : 20.489551829292743
        }, {
          "mean" : 53.382907880133125,
          "variance" : 452.47210753483745,
          "n" : 901,
          "max" : 256.0,
          "min" : 14.0,
          "sum" : 48097.99999999995,
          "standardDeviation" : 21.27139176299561
        }, {
          "mean" : 58.05215419501133,
          "variance" : 512.517728303443,
          "n" : 441,
          "max" : 232.0,
          "min" : 17.0,
          "sum" : 25600.999999999996,
          "standardDeviation" : 22.63885439467826
        } ],
        "10" : [ {
          "mean" : 297.90465380249725,
          "variance" : 769558.256807863,
          "n" : 876,
          "max" : 19804.0,
          "min" : 38.0,
          "sum" : 260964.4767309876,
          "standardDeviation" : 877.2446960842015
        }, {
          "mean" : 114.516304347826,
          "variance" : 5802.395816577559,
          "n" : 920,
          "max" : 804.0,
          "min" : 24.0,
          "sum" : 105354.99999999991,
          "standardDeviation" : 76.17345874107043
        }, {
          "mean" : 102.3218543046357,
          "variance" : 3485.5395084933284,
          "n" : 755,
          "max" : 431.0,
          "min" : 22.0,
          "sum" : 77252.99999999996,
          "standardDeviation" : 59.03845787699174
        }, {
          "mean" : 77.8693982074264,
          "variance" : 3378.7880495091754,
          "n" : 781,
          "max" : 708.0,
          "min" : 24.0,
          "sum" : 60816.00000000002,
          "standardDeviation" : 58.127343389399584
        }, {
          "mean" : 62.70976253298152,
          "variance" : 644.0398253068108,
          "n" : 758,
          "max" : 258.0,
          "min" : 14.0,
          "sum" : 47533.99999999999,
          "standardDeviation" : 25.377939737236566
        }, {
          "mean" : 71.0484061393152,
          "variance" : 107811.63476991536,
          "n" : 847,
          "max" : 9589.0,
          "min" : 14.0,
          "sum" : 60177.99999999998,
          "standardDeviation" : 328.34682086159347
        }, {
          "mean" : 53.490950226244316,
          "variance" : 382.5718319386294,
          "n" : 884,
          "max" : 238.0,
          "min" : 21.0,
          "sum" : 47285.99999999998,
          "standardDeviation" : 19.55944354879835
        }, {
          "mean" : 53.59364358683314,
          "variance" : 569.0369595500978,
          "n" : 881,
          "max" : 289.0,
          "min" : 14.0,
          "sum" : 47215.99999999999,
          "standardDeviation" : 23.85449558364414
        }, {
          "mean" : 53.753541076487274,
          "variance" : 400.1294263456088,
          "n" : 353,
          "max" : 134.0,
          "min" : 14.0,
          "sum" : 18975.000000000007,
          "standardDeviation" : 20.003235396945385
        } ],
        "11" : [ {
          "mean" : 252.0623582766444,
          "variance" : 107825.3093873946,
          "n" : 877,
          "max" : 8309.0,
          "min" : 42.0,
          "sum" : 221058.68820861715,
          "standardDeviation" : 328.3676436365109
        }, {
          "mean" : 135.46217616580313,
          "variance" : 77060.00816330926,
          "n" : 965,
          "max" : 6050.0,
          "min" : 36.0,
          "sum" : 130721.00000000001,
          "standardDeviation" : 277.59684465661576
        }, {
          "mean" : 130.353825136612,
          "variance" : 246731.4081522428,
          "n" : 732,
          "max" : 9562.0,
          "min" : 20.0,
          "sum" : 95418.99999999997,
          "standardDeviation" : 496.72065404233274
        }, {
          "mean" : 80.71854734111548,
          "variance" : 3750.8466555493774,
          "n" : 771,
          "max" : 624.0,
          "min" : 24.0,
          "sum" : 62234.00000000004,
          "standardDeviation" : 61.24415609304595
        }, {
          "mean" : 63.17821782178216,
          "variance" : 622.6100825695959,
          "n" : 808,
          "max" : 255.0,
          "min" : 15.0,
          "sum" : 51047.999999999985,
          "standardDeviation" : 24.952155870176746
        }, {
          "mean" : 56.90121951219512,
          "variance" : 443.4200229309983,
          "n" : 820,
          "max" : 237.0,
          "min" : 14.0,
          "sum" : 46659.0,
          "standardDeviation" : 21.057540761708104
        }, {
          "mean" : 52.709466811751845,
          "variance" : 427.6224701947028,
          "n" : 919,
          "max" : 250.0,
          "min" : 14.0,
          "sum" : 48439.99999999995,
          "standardDeviation" : 20.679034556639795
        }, {
          "mean" : 54.85006045949225,
          "variance" : 394.0719219091732,
          "n" : 827,
          "max" : 264.0,
          "min" : 15.0,
          "sum" : 45361.00000000009,
          "standardDeviation" : 19.851244845328296
        }, {
          "mean" : 52.220238095238095,
          "variance" : 314.68567874911133,
          "n" : 336,
          "max" : 102.0,
          "min" : 14.0,
          "sum" : 17546.0,
          "standardDeviation" : 17.739382141131955
        } ],
        "12" : [ {
          "mean" : 271.7706635622812,
          "variance" : 666249.3494414011,
          "n" : 854,
          "max" : 14063.0,
          "min" : 48.0,
          "sum" : 232092.14668218812,
          "standardDeviation" : 816.2409873569209
        }, {
          "mean" : 118.89596602972402,
          "variance" : 6139.015732912758,
          "n" : 942,
          "max" : 613.0,
          "min" : 32.0,
          "sum" : 112000.00000000003,
          "standardDeviation" : 78.3518712789475
        }, {
          "mean" : 99.35207496653294,
          "variance" : 4317.517968208852,
          "n" : 747,
          "max" : 560.0,
          "min" : 20.0,
          "sum" : 74216.0000000001,
          "standardDeviation" : 65.70782273222004
        }, {
          "mean" : 83.13877551020411,
          "variance" : 3563.6646388255535,
          "n" : 735,
          "max" : 576.0,
          "min" : 28.0,
          "sum" : 61107.00000000002,
          "standardDeviation" : 59.69643740480292
        }, {
          "mean" : 63.811855670103135,
          "variance" : 729.0510076488205,
          "n" : 776,
          "max" : 258.0,
          "min" : 22.0,
          "sum" : 49518.00000000004,
          "standardDeviation" : 27.00094456956683
        }, {
          "mean" : 62.74475955610357,
          "variance" : 696.3039076890292,
          "n" : 811,
          "max" : 260.0,
          "min" : 23.0,
          "sum" : 50885.99999999999,
          "standardDeviation" : 26.387571083542895
        }, {
          "mean" : 53.69661610268383,
          "variance" : 597.4335516199744,
          "n" : 857,
          "max" : 259.0,
          "min" : 13.0,
          "sum" : 46018.00000000004,
          "standardDeviation" : 24.44245387885542
        }, {
          "mean" : 53.99223085460601,
          "variance" : 477.6454951288692,
          "n" : 901,
          "max" : 239.0,
          "min" : 14.0,
          "sum" : 48647.000000000015,
          "standardDeviation" : 21.855102267636937
        }, {
          "mean" : 55.83449883449881,
          "variance" : 357.3580593860969,
          "n" : 429,
          "max" : 110.0,
          "min" : 21.0,
          "sum" : 23952.99999999999,
          "standardDeviation" : 18.90391650918129
        } ],
        "13" : [ {
          "mean" : 242.34058759521216,
          "variance" : 458033.95903712726,
          "n" : 914,
          "max" : 15769.0,
          "min" : 36.0,
          "sum" : 221499.29706202392,
          "standardDeviation" : 676.7820616986884
        }, {
          "mean" : 104.55324074074085,
          "variance" : 2724.2451343290045,
          "n" : 864,
          "max" : 468.0,
          "min" : 20.0,
          "sum" : 90334.00000000009,
          "standardDeviation" : 52.1943017419431
        }, {
          "mean" : 96.64435695538054,
          "variance" : 2824.826045643772,
          "n" : 762,
          "max" : 519.0,
          "min" : 27.0,
          "sum" : 73642.99999999997,
          "standardDeviation" : 53.149092613550536
        }, {
          "mean" : 77.67361111111109,
          "variance" : 2162.9267018235223,
          "n" : 720,
          "max" : 415.0,
          "min" : 14.0,
          "sum" : 55924.999999999985,
          "standardDeviation" : 46.50727579447674
        }, {
          "mean" : 65.77658142664872,
          "variance" : 586.9634939579834,
          "n" : 743,
          "max" : 267.0,
          "min" : 15.0,
          "sum" : 48872.0,
          "standardDeviation" : 24.227329484653964
        }, {
          "mean" : 57.46941176470585,
          "variance" : 510.93251437677463,
          "n" : 850,
          "max" : 257.0,
          "min" : 15.0,
          "sum" : 48848.99999999998,
          "standardDeviation" : 22.603816367524637
        }, {
          "mean" : 82.3746835443039,
          "variance" : 245098.2472670103,
          "n" : 790,
          "max" : 10296.0,
          "min" : 18.0,
          "sum" : 65076.00000000009,
          "standardDeviation" : 495.07398160983
        }, {
          "mean" : 57.684031710079296,
          "variance" : 628.0236336135055,
          "n" : 883,
          "max" : 247.0,
          "min" : 15.0,
          "sum" : 50935.00000000002,
          "standardDeviation" : 25.0603997097713
        }, {
          "mean" : 72.81818181818173,
          "variance" : 194247.09780921144,
          "n" : 528,
          "max" : 10169.0,
          "min" : 14.0,
          "sum" : 38447.99999999995,
          "standardDeviation" : 440.73472498682406
        } ],
        "14" : [ {
          "mean" : 254.02637614678895,
          "variance" : 216438.58139305207,
          "n" : 867,
          "max" : 9792.0,
          "min" : 56.0,
          "sum" : 220240.86811926603,
          "standardDeviation" : 465.22960072748174
        }, {
          "mean" : 121.18253079507275,
          "variance" : 6320.005882825568,
          "n" : 893,
          "max" : 771.0,
          "min" : 36.0,
          "sum" : 108215.99999999997,
          "standardDeviation" : 79.49846465703327
        }, {
          "mean" : 105.40669240669234,
          "variance" : 4768.615315978714,
          "n" : 777,
          "max" : 474.0,
          "min" : 19.0,
          "sum" : 81900.99999999996,
          "standardDeviation" : 69.05516139999033
        }, {
          "mean" : 88.5374999999999,
          "variance" : 4828.610552851184,
          "n" : 720,
          "max" : 646.0,
          "min" : 14.0,
          "sum" : 63746.99999999993,
          "standardDeviation" : 69.48820441521845
        }, {
          "mean" : 60.113665389527455,
          "variance" : 773.7198002306035,
          "n" : 783,
          "max" : 264.0,
          "min" : 14.0,
          "sum" : 47069.0,
          "standardDeviation" : 27.815819244282622
        }, {
          "mean" : 54.51448435689451,
          "variance" : 717.9020521409972,
          "n" : 863,
          "max" : 256.0,
          "min" : 15.0,
          "sum" : 47045.99999999996,
          "standardDeviation" : 26.793694260795714
        }, {
          "mean" : 66.53799758745471,
          "variance" : 111515.73919453615,
          "n" : 829,
          "max" : 9650.0,
          "min" : 15.0,
          "sum" : 55159.999999999956,
          "standardDeviation" : 333.9397238942024
        }, {
          "mean" : 53.137624861265216,
          "variance" : 534.249927241337,
          "n" : 901,
          "max" : 268.0,
          "min" : 14.0,
          "sum" : 47876.999999999956,
          "standardDeviation" : 23.11384708873313
        }, {
          "mean" : 53.782505910165476,
          "variance" : 673.5118259330213,
          "n" : 423,
          "max" : 256.0,
          "min" : 17.0,
          "sum" : 22749.999999999996,
          "standardDeviation" : 25.952106387209138
        } ],
        "15" : [ {
          "mean" : 298.62653562653605,
          "variance" : 409285.26994690154,
          "n" : 809,
          "max" : 11112.0,
          "min" : 50.0,
          "sum" : 241588.86732186767,
          "standardDeviation" : 639.7540698947538
        }, {
          "mean" : 130.94642857142875,
          "variance" : 9529.243183866614,
          "n" : 952,
          "max" : 906.0,
          "min" : 36.0,
          "sum" : 124661.00000000017,
          "standardDeviation" : 97.61784254871962
        }, {
          "mean" : 112.13015463917527,
          "variance" : 5959.241102427667,
          "n" : 776,
          "max" : 607.0,
          "min" : 17.0,
          "sum" : 87013.00000000001,
          "standardDeviation" : 77.19612103226216
        }, {
          "mean" : 82.14090287277705,
          "variance" : 3983.392447950836,
          "n" : 731,
          "max" : 630.0,
          "min" : 28.0,
          "sum" : 60045.00000000002,
          "standardDeviation" : 63.114122412902454
        }, {
          "mean" : 62.582051282051296,
          "variance" : 608.0741318587269,
          "n" : 780,
          "max" : 257.0,
          "min" : 14.0,
          "sum" : 48814.00000000001,
          "standardDeviation" : 24.659159187991932
        }, {
          "mean" : 55.8073394495413,
          "variance" : 504.1258702956635,
          "n" : 872,
          "max" : 251.0,
          "min" : 19.0,
          "sum" : 48664.000000000015,
          "standardDeviation" : 22.452747499931128
        }, {
          "mean" : 52.699095022624476,
          "variance" : 404.6024453862042,
          "n" : 884,
          "max" : 241.0,
          "min" : 14.0,
          "sum" : 46586.00000000004,
          "standardDeviation" : 20.114732048580816
        }, {
          "mean" : 62.575482406356386,
          "variance" : 117735.82412547733,
          "n" : 881,
          "max" : 10217.0,
          "min" : 14.0,
          "sum" : 55128.99999999998,
          "standardDeviation" : 343.1265424380302
        }, {
          "mean" : 77.51891891891896,
          "variance" : 252533.2313484216,
          "n" : 370,
          "max" : 9708.0,
          "min" : 15.0,
          "sum" : 28682.000000000015,
          "standardDeviation" : 502.5268463957141
        } ],
        "16" : [ {
          "mean" : 239.35275423728825,
          "variance" : 655818.2137145682,
          "n" : 939,
          "max" : 15955.0,
          "min" : 37.0,
          "sum" : 224752.23622881368,
          "standardDeviation" : 809.8260391680229
        }, {
          "mean" : 112.44701986754959,
          "variance" : 3770.923709341042,
          "n" : 906,
          "max" : 459.0,
          "min" : 35.0,
          "sum" : 101876.99999999993,
          "standardDeviation" : 61.40784729447078
        }, {
          "mean" : 96.03078982597057,
          "variance" : 3261.3891311447733,
          "n" : 747,
          "max" : 443.0,
          "min" : 18.0,
          "sum" : 71735.00000000001,
          "standardDeviation" : 57.10857318428445
        }, {
          "mean" : 76.86817576564584,
          "variance" : 1890.2505992010676,
          "n" : 751,
          "max" : 461.0,
          "min" : 22.0,
          "sum" : 57728.00000000003,
          "standardDeviation" : 43.47701230766746
        }, {
          "mean" : 65.15723270440246,
          "variance" : 1113.3719721812959,
          "n" : 795,
          "max" : 324.0,
          "min" : 15.0,
          "sum" : 51799.999999999956,
          "standardDeviation" : 33.36722901562693
        }, {
          "mean" : 59.86232790988735,
          "variance" : 758.6276391855739,
          "n" : 799,
          "max" : 274.0,
          "min" : 14.0,
          "sum" : 47829.99999999999,
          "standardDeviation" : 27.54319587821235
        }, {
          "mean" : 54.58936651583709,
          "variance" : 507.94330695951135,
          "n" : 884,
          "max" : 243.0,
          "min" : 15.0,
          "sum" : 48256.99999999999,
          "standardDeviation" : 22.53759763061519
        }, {
          "mean" : 57.48979591836736,
          "variance" : 624.1661840672707,
          "n" : 882,
          "max" : 254.0,
          "min" : 14.0,
          "sum" : 50706.000000000015,
          "standardDeviation" : 24.9833181156401
        }, {
          "mean" : 59.929178470254946,
          "variance" : 483.5489473345354,
          "n" : 353,
          "max" : 124.0,
          "min" : 19.0,
          "sum" : 21154.999999999996,
          "standardDeviation" : 21.989746413602305
        } ],
        "17" : [ {
          "mean" : 274.6611909650928,
          "variance" : 327757.1040010471,
          "n" : 969,
          "max" : 10839.0,
          "min" : 63.0,
          "sum" : 266146.6940451749,
          "standardDeviation" : 572.500745851957
        }, {
          "mean" : 123.53083434099162,
          "variance" : 9027.559278116589,
          "n" : 827,
          "max" : 720.0,
          "min" : 35.0,
          "sum" : 102160.00000000007,
          "standardDeviation" : 95.01346893002375
        }, {
          "mean" : 104.17112299465238,
          "variance" : 4762.650731267309,
          "n" : 748,
          "max" : 631.0,
          "min" : 19.0,
          "sum" : 77919.99999999999,
          "standardDeviation" : 69.01196078410835
        }, {
          "mean" : 83.60082872928172,
          "variance" : 4566.406140391093,
          "n" : 724,
          "max" : 812.0,
          "min" : 27.0,
          "sum" : 60526.99999999996,
          "standardDeviation" : 67.57518879286312
        }, {
          "mean" : 60.90804597701142,
          "variance" : 722.5388482229464,
          "n" : 783,
          "max" : 257.0,
          "min" : 22.0,
          "sum" : 47690.99999999994,
          "standardDeviation" : 26.880082742114958
        }, {
          "mean" : 56.928653624856096,
          "variance" : 484.9050420791942,
          "n" : 869,
          "max" : 284.0,
          "min" : 14.0,
          "sum" : 49470.99999999995,
          "standardDeviation" : 22.020559531474085
        }, {
          "mean" : 51.326757090012336,
          "variance" : 386.1733449026503,
          "n" : 811,
          "max" : 258.0,
          "min" : 15.0,
          "sum" : 41626.00000000001,
          "standardDeviation" : 19.651293720838083
        }, {
          "mean" : 52.9880434782609,
          "variance" : 421.97700596111144,
          "n" : 920,
          "max" : 263.0,
          "min" : 14.0,
          "sum" : 48749.00000000003,
          "standardDeviation" : 20.542078910400267
        }, {
          "mean" : 51.093827160493795,
          "variance" : 368.7337489304487,
          "n" : 405,
          "max" : 110.0,
          "min" : 15.0,
          "sum" : 20692.999999999985,
          "standardDeviation" : 19.202441223199948
        } ],
        "18" : [ {
          "mean" : 255.26937269372712,
          "variance" : 268219.4187283009,
          "n" : 808,
          "max" : 11662.0,
          "min" : 51.0,
          "sum" : 206257.6531365315,
          "standardDeviation" : 517.8990429884003
        }, {
          "mean" : 116.03484995159742,
          "variance" : 6250.107311435803,
          "n" : 1033,
          "max" : 620.0,
          "min" : 24.0,
          "sum" : 119864.00000000013,
          "standardDeviation" : 79.05762019840847
        }, {
          "mean" : 101.35567715458272,
          "variance" : 4677.3171560819355,
          "n" : 731,
          "max" : 638.0,
          "min" : 25.0,
          "sum" : 74090.99999999997,
          "standardDeviation" : 68.39091428020198
        }, {
          "mean" : 78.72903225806445,
          "variance" : 3290.4742852379795,
          "n" : 775,
          "max" : 640.0,
          "min" : 14.0,
          "sum" : 61014.99999999995,
          "standardDeviation" : 57.36265584191495
        }, {
          "mean" : 60.99628252788109,
          "variance" : 796.6017231359597,
          "n" : 807,
          "max" : 267.0,
          "min" : 28.0,
          "sum" : 49224.000000000044,
          "standardDeviation" : 28.22413370036288
        }, {
          "mean" : 56.300375469336714,
          "variance" : 533.7066539941843,
          "n" : 799,
          "max" : 244.0,
          "min" : 16.0,
          "sum" : 44984.00000000004,
          "standardDeviation" : 23.102091983069073
        }, {
          "mean" : 61.4934782608695,
          "variance" : 32881.99995742072,
          "n" : 920,
          "max" : 5512.0,
          "min" : 14.0,
          "sum" : 56573.99999999994,
          "standardDeviation" : 181.3339459599904
        }, {
          "mean" : 64.31212484993998,
          "variance" : 122428.47938406125,
          "n" : 833,
          "max" : 10131.0,
          "min" : 14.0,
          "sum" : 53572.0,
          "standardDeviation" : 349.89781277404586
        }, {
          "mean" : 92.66379310344828,
          "variance" : 289962.5696362912,
          "n" : 348,
          "max" : 10098.0,
          "min" : 18.0,
          "sum" : 32247.000000000004,
          "standardDeviation" : 538.4817263717416
        } ],
        "19" : [ {
          "mean" : 288.81370192307685,
          "variance" : 590324.0242163631,
          "n" : 827,
          "max" : 13737.0,
          "min" : 47.0,
          "sum" : 238848.93149038457,
          "standardDeviation" : 768.3254676348839
        }, {
          "mean" : 113.762156448203,
          "variance" : 5765.722206561737,
          "n" : 946,
          "max" : 737.0,
          "min" : 36.0,
          "sum" : 107619.00000000004,
          "standardDeviation" : 75.93235283172606
        }, {
          "mean" : 103.18823529411755,
          "variance" : 4745.1294425623655,
          "n" : 765,
          "max" : 712.0,
          "min" : 19.0,
          "sum" : 78938.99999999993,
          "standardDeviation" : 68.88489996045843
        }, {
          "mean" : 83.57894736842111,
          "variance" : 3002.7961165048537,
          "n" : 722,
          "max" : 522.0,
          "min" : 14.0,
          "sum" : 60344.000000000044,
          "standardDeviation" : 54.79777474044775
        }, {
          "mean" : 65.21052631578958,
          "variance" : 633.8193749154375,
          "n" : 779,
          "max" : 269.0,
          "min" : 18.0,
          "sum" : 50799.00000000008,
          "standardDeviation" : 25.17576959926821
        }, {
          "mean" : 58.1781818181818,
          "variance" : 822.5883583406876,
          "n" : 825,
          "max" : 367.0,
          "min" : 14.0,
          "sum" : 47996.999999999985,
          "standardDeviation" : 28.680801215110563
        }, {
          "mean" : 55.27944862155386,
          "variance" : 575.1100162577081,
          "n" : 798,
          "max" : 232.0,
          "min" : 14.0,
          "sum" : 44112.99999999998,
          "standardDeviation" : 23.98145150439623
        }, {
          "mean" : 57.59709821428568,
          "variance" : 543.1905614026331,
          "n" : 896,
          "max" : 238.0,
          "min" : 17.0,
          "sum" : 51606.99999999997,
          "standardDeviation" : 23.30644892304774
        }, {
          "mean" : 61.0903614457831,
          "variance" : 628.8429250199993,
          "n" : 498,
          "max" : 264.0,
          "min" : 18.0,
          "sum" : 30422.999999999985,
          "standardDeviation" : 25.07674071764509
        } ],
        "20" : [ {
          "mean" : 273.5415617128461,
          "variance" : 549854.480615969,
          "n" : 789,
          "max" : 13168.0,
          "min" : 35.0,
          "sum" : 215824.29219143555,
          "standardDeviation" : 741.5217330705615
        }, {
          "mean" : 128.62632084534076,
          "variance" : 6512.820806546955,
          "n" : 1041,
          "max" : 876.0,
          "min" : 34.0,
          "sum" : 133899.99999999974,
          "standardDeviation" : 80.70204958083131
        }, {
          "mean" : 152.88674033149167,
          "variance" : 411437.37581287377,
          "n" : 724,
          "max" : 10233.0,
          "min" : 23.0,
          "sum" : 110689.99999999997,
          "standardDeviation" : 641.4338436759272
        }, {
          "mean" : 79.75835475578393,
          "variance" : 3567.534840018129,
          "n" : 778,
          "max" : 805.0,
          "min" : 14.0,
          "sum" : 62051.9999999999,
          "standardDeviation" : 59.72884428831793
        }, {
          "mean" : 66.69811320754728,
          "variance" : 612.0760828049806,
          "n" : 742,
          "max" : 246.0,
          "min" : 28.0,
          "sum" : 49490.00000000008,
          "standardDeviation" : 24.740171438471897
        }, {
          "mean" : 58.118329466357295,
          "variance" : 727.9697217124644,
          "n" : 862,
          "max" : 391.0,
          "min" : 14.0,
          "sum" : 50097.999999999985,
          "standardDeviation" : 26.980914026631204
        }, {
          "mean" : 51.237349397590336,
          "variance" : 520.3308108186671,
          "n" : 830,
          "max" : 246.0,
          "min" : 14.0,
          "sum" : 42526.99999999998,
          "standardDeviation" : 22.810760855759877
        }, {
          "mean" : 52.26091703056772,
          "variance" : 737.410536425895,
          "n" : 916,
          "max" : 396.0,
          "min" : 14.0,
          "sum" : 47871.00000000003,
          "standardDeviation" : 27.1553040201338
        }, {
          "mean" : 56.148247978436665,
          "variance" : 584.2563415167187,
          "n" : 371,
          "max" : 265.0,
          "min" : 18.0,
          "sum" : 20831.000000000004,
          "standardDeviation" : 24.171395109027504
        } ],
        "21" : [ {
          "mean" : 276.9422604422604,
          "variance" : 383167.4468465447,
          "n" : 809,
          "max" : 13186.0,
          "min" : 38.0,
          "sum" : 224046.28869778867,
          "standardDeviation" : 619.0052074470333
        }, {
          "mean" : 125.95711297071136,
          "variance" : 6633.058891761048,
          "n" : 956,
          "max" : 617.0,
          "min" : 20.0,
          "sum" : 120415.00000000006,
          "standardDeviation" : 81.44359331317011
        }, {
          "mean" : 113.57029177718833,
          "variance" : 6196.346314124576,
          "n" : 754,
          "max" : 771.0,
          "min" : 19.0,
          "sum" : 85632.0,
          "standardDeviation" : 78.7168743924997
        }, {
          "mean" : 129.4628099173553,
          "variance" : 13176.497235679675,
          "n" : 726,
          "max" : 870.0,
          "min" : 34.0,
          "sum" : 93989.99999999994,
          "standardDeviation" : 114.78892470826476
        }, {
          "mean" : 69.75675675675686,
          "variance" : 2318.0138243791807,
          "n" : 740,
          "max" : 584.0,
          "min" : 15.0,
          "sum" : 51620.00000000007,
          "standardDeviation" : 48.14575603705046
        }, {
          "mean" : 53.03935185185191,
          "variance" : 402.19775438822427,
          "n" : 864,
          "max" : 235.0,
          "min" : 14.0,
          "sum" : 45826.00000000005,
          "standardDeviation" : 20.05486859563593
        }, {
          "mean" : 54.08564231738037,
          "variance" : 623.4050142779541,
          "n" : 794,
          "max" : 409.0,
          "min" : 14.0,
          "sum" : 42944.000000000015,
          "standardDeviation" : 24.96807990771325
        }, {
          "mean" : 51.09360730593607,
          "variance" : 393.45408480104425,
          "n" : 876,
          "max" : 246.0,
          "min" : 14.0,
          "sum" : 44757.99999999999,
          "standardDeviation" : 19.835677069387984
        }, {
          "mean" : 57.259328358208926,
          "variance" : 612.1625296415117,
          "n" : 536,
          "max" : 238.0,
          "min" : 14.0,
          "sum" : 30690.999999999985,
          "standardDeviation" : 24.74191847132133
        } ],
        "22" : [ {
          "mean" : 273.43628013777266,
          "variance" : 298436.071509825,
          "n" : 866,
          "max" : 12051.0,
          "min" : 50.0,
          "sum" : 236795.8185993111,
          "standardDeviation" : 546.2930271473589
        }, {
          "mean" : 135.52412280701756,
          "variance" : 8182.126750052963,
          "n" : 912,
          "max" : 786.0,
          "min" : 19.0,
          "sum" : 123598.00000000001,
          "standardDeviation" : 90.45510903234246
        }, {
          "mean" : 110.47916666666669,
          "variance" : 6235.165145588876,
          "n" : 768,
          "max" : 535.0,
          "min" : 18.0,
          "sum" : 84848.00000000001,
          "standardDeviation" : 78.96306190611453
        }, {
          "mean" : 95.90995907230572,
          "variance" : 119399.67494166487,
          "n" : 733,
          "max" : 9268.0,
          "min" : 19.0,
          "sum" : 70302.0000000001,
          "standardDeviation" : 345.54258050443633
        }, {
          "mean" : 66.97039897039889,
          "variance" : 920.6215453303084,
          "n" : 777,
          "max" : 293.0,
          "min" : 21.0,
          "sum" : 52035.999999999935,
          "standardDeviation" : 30.341745917634807
        }, {
          "mean" : 69.16912599318964,
          "variance" : 99401.97250025794,
          "n" : 881,
          "max" : 9380.0,
          "min" : 14.0,
          "sum" : 60938.00000000007,
          "standardDeviation" : 315.28078358862587
        }, {
          "mean" : 55.54534746760893,
          "variance" : 474.8449341067185,
          "n" : 849,
          "max" : 238.0,
          "min" : 15.0,
          "sum" : 47157.99999999998,
          "standardDeviation" : 21.790936971748565
        }, {
          "mean" : 52.44701986754962,
          "variance" : 579.6021623797157,
          "n" : 906,
          "max" : 273.0,
          "min" : 19.0,
          "sum" : 47516.999999999956,
          "standardDeviation" : 24.074928086698737
        }, {
          "mean" : 56.52892561983471,
          "variance" : 493.8520615497008,
          "n" : 363,
          "max" : 144.0,
          "min" : 14.0,
          "sum" : 20520.0,
          "standardDeviation" : 22.222782488916657
        } ],
        "23" : [ {
          "mean" : 249.10746606334845,
          "variance" : 209269.96465540671,
          "n" : 879,
          "max" : 9144.0,
          "min" : 67.0,
          "sum" : 218965.4626696833,
          "standardDeviation" : 457.4603421668448
        }, {
          "mean" : 133.99894957983196,
          "variance" : 191515.12407881126,
          "n" : 952,
          "max" : 9686.0,
          "min" : 27.0,
          "sum" : 127567.00000000003,
          "standardDeviation" : 437.6244098297206
        }, {
          "mean" : 106.6269070735091,
          "variance" : 4594.020330559411,
          "n" : 721,
          "max" : 593.0,
          "min" : 36.0,
          "sum" : 76878.00000000006,
          "standardDeviation" : 67.77920278787153
        }, {
          "mean" : 79.22346368715087,
          "variance" : 2564.3807633707092,
          "n" : 716,
          "max" : 501.0,
          "min" : 23.0,
          "sum" : 56724.00000000002,
          "standardDeviation" : 50.63971527734639
        }, {
          "mean" : 64.24418604651156,
          "variance" : 854.1537501128201,
          "n" : 774,
          "max" : 267.0,
          "min" : 14.0,
          "sum" : 49724.99999999995,
          "standardDeviation" : 29.225908884289982
        }, {
          "mean" : 55.88717339667456,
          "variance" : 567.3820231542016,
          "n" : 842,
          "max" : 261.0,
          "min" : 14.0,
          "sum" : 47056.99999999998,
          "standardDeviation" : 23.81978218108221
        }, {
          "mean" : 67.70432692307693,
          "variance" : 123289.51536031657,
          "n" : 832,
          "max" : 10158.0,
          "min" : 14.0,
          "sum" : 56330.00000000001,
          "standardDeviation" : 351.12606761719724
        }, {
          "mean" : 60.4493882091212,
          "variance" : 621.9960436119327,
          "n" : 899,
          "max" : 251.0,
          "min" : 14.0,
          "sum" : 54343.99999999996,
          "standardDeviation" : 24.939848508199336
        }, {
          "mean" : 84.46241457858767,
          "variance" : 228777.43180328893,
          "n" : 439,
          "max" : 10070.0,
          "min" : 14.0,
          "sum" : 37078.999999999985,
          "standardDeviation" : 478.3068385495747
        } ],
        "24" : [ {
          "mean" : 240.9108571428572,
          "variance" : 425257.9874677999,
          "n" : 870,
          "max" : 13141.0,
          "min" : 56.0,
          "sum" : 209592.44571428577,
          "standardDeviation" : 652.1180778569169
        }, {
          "mean" : 104.68782518210202,
          "variance" : 3047.2816120360676,
          "n" : 961,
          "max" : 534.0,
          "min" : 36.0,
          "sum" : 100605.00000000004,
          "standardDeviation" : 55.20218847143714
        }, {
          "mean" : 113.29005524861877,
          "variance" : 141983.29611120024,
          "n" : 724,
          "max" : 10140.0,
          "min" : 28.0,
          "sum" : 82021.99999999999,
          "standardDeviation" : 376.80670921733895
        }, {
          "mean" : 120.23522012578619,
          "variance" : 6861.585659743675,
          "n" : 795,
          "max" : 649.0,
          "min" : 17.0,
          "sum" : 95587.00000000001,
          "standardDeviation" : 82.83468874658536
        }, {
          "mean" : 66.24843945068663,
          "variance" : 693.6369506866408,
          "n" : 801,
          "max" : 256.0,
          "min" : 27.0,
          "sum" : 53064.99999999999,
          "standardDeviation" : 26.336988261504786
        }, {
          "mean" : 55.17434620174348,
          "variance" : 457.94961537625363,
          "n" : 803,
          "max" : 252.0,
          "min" : 15.0,
          "sum" : 44305.000000000015,
          "standardDeviation" : 21.399757367228574
        }, {
          "mean" : 54.7735849056604,
          "variance" : 542.3390286879564,
          "n" : 954,
          "max" : 292.0,
          "min" : 14.0,
          "sum" : 52254.00000000002,
          "standardDeviation" : 23.288173579908676
        }, {
          "mean" : 57.77175283732658,
          "variance" : 642.4819283630762,
          "n" : 793,
          "max" : 411.0,
          "min" : 14.0,
          "sum" : 45812.99999999998,
          "standardDeviation" : 25.34722723224527
        }, {
          "mean" : 61.59490084985841,
          "variance" : 699.6280421066186,
          "n" : 353,
          "max" : 261.0,
          "min" : 28.0,
          "sum" : 21743.00000000002,
          "standardDeviation" : 26.450482833147273
        } ],
        "25" : [ {
          "mean" : 233.8538205980069,
          "variance" : 301105.9497830585,
          "n" : 898,
          "max" : 13038.0,
          "min" : 37.0,
          "sum" : 210000.7308970102,
          "standardDeviation" : 548.7312181597275
        }, {
          "mean" : 108.33410672853817,
          "variance" : 3866.552586831807,
          "n" : 862,
          "max" : 498.0,
          "min" : 34.0,
          "sum" : 93383.99999999991,
          "standardDeviation" : 62.181609715669204
        }, {
          "mean" : 91.66113416320877,
          "variance" : 2408.1855649168797,
          "n" : 723,
          "max" : 435.0,
          "min" : 30.0,
          "sum" : 66270.99999999994,
          "standardDeviation" : 49.073267314464395
        }, {
          "mean" : 73.72597402597398,
          "variance" : 1918.415059193083,
          "n" : 770,
          "max" : 389.0,
          "min" : 15.0,
          "sum" : 56768.99999999996,
          "standardDeviation" : 43.79971528666691
        }, {
          "mean" : 63.83748361730009,
          "variance" : 725.63497108733,
          "n" : 763,
          "max" : 286.0,
          "min" : 14.0,
          "sum" : 48707.99999999996,
          "standardDeviation" : 26.937612572151416
        }, {
          "mean" : 53.43076923076926,
          "variance" : 582.9066350710905,
          "n" : 845,
          "max" : 278.0,
          "min" : 14.0,
          "sum" : 45149.00000000002,
          "standardDeviation" : 24.143459467754212
        }, {
          "mean" : 53.90866510538645,
          "variance" : 506.3245907130367,
          "n" : 854,
          "max" : 264.0,
          "min" : 16.0,
          "sum" : 46038.00000000003,
          "standardDeviation" : 22.501657510348803
        }, {
          "mean" : 53.479857819905234,
          "variance" : 499.0921205017059,
          "n" : 844,
          "max" : 253.0,
          "min" : 14.0,
          "sum" : 45137.000000000015,
          "standardDeviation" : 22.34036974854503
        }, {
          "mean" : 54.24048096192391,
          "variance" : 427.73723350315083,
          "n" : 499,
          "max" : 222.0,
          "min" : 15.0,
          "sum" : 27066.00000000003,
          "standardDeviation" : 20.681809241532783
        } ],
        "26" : [ {
          "mean" : 290.9118607181718,
          "variance" : 709372.9083450095,
          "n" : 914,
          "max" : 17791.0,
          "min" : 41.0,
          "sum" : 265893.44069640903,
          "standardDeviation" : 842.2427846796965
        }, {
          "mean" : 133.329018338727,
          "variance" : 7380.557936724293,
          "n" : 927,
          "max" : 815.0,
          "min" : 36.0,
          "sum" : 123595.99999999993,
          "standardDeviation" : 85.91017365087963
        }, {
          "mean" : 117.13884992987376,
          "variance" : 7058.836030697944,
          "n" : 713,
          "max" : 954.0,
          "min" : 19.0,
          "sum" : 83519.99999999999,
          "standardDeviation" : 84.01687943918141
        }, {
          "mean" : 100.42436974789922,
          "variance" : 135561.71727344499,
          "n" : 714,
          "max" : 9764.0,
          "min" : 28.0,
          "sum" : 71703.00000000004,
          "standardDeviation" : 368.1870683137106
        }, {
          "mean" : 74.2608695652174,
          "variance" : 951.5170071814289,
          "n" : 782,
          "max" : 301.0,
          "min" : 22.0,
          "sum" : 58072.00000000001,
          "standardDeviation" : 30.846669304503994
        }, {
          "mean" : 62.940909090909074,
          "variance" : 820.0306339848978,
          "n" : 880,
          "max" : 276.0,
          "min" : 14.0,
          "sum" : 55387.999999999985,
          "standardDeviation" : 28.63617701413542
        }, {
          "mean" : 81.14321926489231,
          "variance" : 155252.25991906476,
          "n" : 789,
          "max" : 9897.0,
          "min" : 17.0,
          "sum" : 64022.00000000003,
          "standardDeviation" : 394.0206338747563
        }, {
          "mean" : 72.63666666666666,
          "variance" : 109144.75883203547,
          "n" : 900,
          "max" : 9942.0,
          "min" : 14.0,
          "sum" : 65372.99999999999,
          "standardDeviation" : 330.37063857436766
        }, {
          "mean" : 86.06422018348624,
          "variance" : 234292.4602341032,
          "n" : 436,
          "max" : 10146.0,
          "min" : 14.0,
          "sum" : 37524.0,
          "standardDeviation" : 484.03766406562124
        } ],
        "27" : [ {
          "mean" : 279.17712177121757,
          "variance" : 418466.74198825716,
          "n" : 808,
          "max" : 11408.0,
          "min" : 40.0,
          "sum" : 225575.11439114378,
          "standardDeviation" : 646.890054018654
        }, {
          "mean" : 139.03256302521032,
          "variance" : 108871.03679342402,
          "n" : 952,
          "max" : 9984.0,
          "min" : 27.0,
          "sum" : 132359.00000000023,
          "standardDeviation" : 329.95611343544465
        }, {
          "mean" : 109.92382271468145,
          "variance" : 4240.259098820117,
          "n" : 722,
          "max" : 504.0,
          "min" : 17.0,
          "sum" : 79365.0,
          "standardDeviation" : 65.11727189325515
        }, {
          "mean" : 78.1896103896103,
          "variance" : 2741.914586323953,
          "n" : 770,
          "max" : 492.0,
          "min" : 22.0,
          "sum" : 60205.99999999993,
          "standardDeviation" : 52.36329426539122
        }, {
          "mean" : 75.24650571791602,
          "variance" : 125908.99768179467,
          "n" : 787,
          "max" : 9993.0,
          "min" : 20.0,
          "sum" : 59218.99999999991,
          "standardDeviation" : 354.83657883847695
        }, {
          "mean" : 55.76811594202897,
          "variance" : 575.1094053940385,
          "n" : 828,
          "max" : 257.0,
          "min" : 14.0,
          "sum" : 46175.999999999985,
          "standardDeviation" : 23.981438768223196
        }, {
          "mean" : 54.51578947368422,
          "variance" : 632.9573030937995,
          "n" : 855,
          "max" : 265.0,
          "min" : 14.0,
          "sum" : 46611.00000000001,
          "standardDeviation" : 25.158642711676627
        }, {
          "mean" : 52.7139689578714,
          "variance" : 472.52852829204437,
          "n" : 902,
          "max" : 280.0,
          "min" : 14.0,
          "sum" : 47548.00000000001,
          "standardDeviation" : 21.73772132243958
        }, {
          "mean" : 85.43851508120646,
          "variance" : 370183.8281875576,
          "n" : 431,
          "max" : 12680.0,
          "min" : 21.0,
          "sum" : 36823.999999999985,
          "standardDeviation" : 608.4273401052566
        } ],
        "28" : [ {
          "mean" : 217.34320735444382,
          "variance" : 264835.64895943674,
          "n" : 974,
          "max" : 13769.0,
          "min" : 58.0,
          "sum" : 211692.28396322828,
          "standardDeviation" : 514.6218504488871
        }, {
          "mean" : 122.91885714285719,
          "variance" : 122293.48425498523,
          "n" : 875,
          "max" : 10222.0,
          "min" : 36.0,
          "sum" : 107554.00000000004,
          "standardDeviation" : 349.70485306181445
        }, {
          "mean" : 97.47948717948707,
          "variance" : 3001.8416839472075,
          "n" : 780,
          "max" : 419.0,
          "min" : 20.0,
          "sum" : 76033.99999999991,
          "standardDeviation" : 54.78906536844015
        }, {
          "mean" : 73.7983425414364,
          "variance" : 1984.465502089971,
          "n" : 724,
          "max" : 383.0,
          "min" : 14.0,
          "sum" : 53429.99999999995,
          "standardDeviation" : 44.547340011385316
        }, {
          "mean" : 64.74968866749687,
          "variance" : 893.5519793293851,
          "n" : 803,
          "max" : 272.0,
          "min" : 22.0,
          "sum" : 51993.999999999985,
          "standardDeviation" : 29.892339810215343
        }, {
          "mean" : 55.1616405307599,
          "variance" : 475.9134543102391,
          "n" : 829,
          "max" : 267.0,
          "min" : 18.0,
          "sum" : 45728.999999999956,
          "standardDeviation" : 21.815440731514894
        }, {
          "mean" : 53.91397849462367,
          "variance" : 374.1325277498059,
          "n" : 930,
          "max" : 188.0,
          "min" : 14.0,
          "sum" : 50140.000000000015,
          "standardDeviation" : 19.342505725727623
        }, {
          "mean" : 57.458333333333385,
          "variance" : 792.696712355979,
          "n" : 840,
          "max" : 366.0,
          "min" : 15.0,
          "sum" : 48265.000000000044,
          "standardDeviation" : 28.15487013566177
        }, {
          "mean" : 52.09,
          "variance" : 449.79454849498325,
          "n" : 300,
          "max" : 198.0,
          "min" : 14.0,
          "sum" : 15627.000000000002,
          "standardDeviation" : 21.2083603443308
        } ],
        "29" : [ {
          "mean" : 272.52188940092145,
          "variance" : 613142.7480785485,
          "n" : 863,
          "max" : 16984.0,
          "min" : 43.0,
          "sum" : 235186.3905529952,
          "standardDeviation" : 783.0343211370422
        }, {
          "mean" : 115.77995867768588,
          "variance" : 5502.736433503978,
          "n" : 968,
          "max" : 578.0,
          "min" : 29.0,
          "sum" : 112074.99999999994,
          "standardDeviation" : 74.18043160769543
        }, {
          "mean" : 108.17902097902106,
          "variance" : 4422.402080272666,
          "n" : 715,
          "max" : 647.0,
          "min" : 26.0,
          "sum" : 77348.00000000006,
          "standardDeviation" : 66.50114345086607
        }, {
          "mean" : 132.89100817438694,
          "variance" : 12255.955362420118,
          "n" : 734,
          "max" : 781.0,
          "min" : 34.0,
          "sum" : 97542.00000000001,
          "standardDeviation" : 110.7066184219359
        }, {
          "mean" : 67.3634020618556,
          "variance" : 1005.2226072497506,
          "n" : 776,
          "max" : 350.0,
          "min" : 14.0,
          "sum" : 52273.99999999994,
          "standardDeviation" : 31.70524573709768
        }, {
          "mean" : 52.6927437641723,
          "variance" : 424.51729121463194,
          "n" : 882,
          "max" : 255.0,
          "min" : 14.0,
          "sum" : 46474.99999999997,
          "standardDeviation" : 20.603817394226535
        }, {
          "mean" : 55.989807474518706,
          "variance" : 511.17336538239294,
          "n" : 883,
          "max" : 254.0,
          "min" : 14.0,
          "sum" : 49439.000000000015,
          "standardDeviation" : 22.609143402225413
        }, {
          "mean" : 52.38208616780042,
          "variance" : 437.9412451321804,
          "n" : 882,
          "max" : 253.0,
          "min" : 15.0,
          "sum" : 46200.99999999997,
          "standardDeviation" : 20.92704578128935
        }, {
          "mean" : 52.52974504249294,
          "variance" : 459.76686840072097,
          "n" : 353,
          "max" : 251.0,
          "min" : 14.0,
          "sum" : 18543.000000000007,
          "standardDeviation" : 21.442174992307123
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertexData#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.DefaultVertexData.<init>()",
    "otherKiekerPattern" : "private new org.gradoop.model.impl.LogicalGraphProjectionTest$VertexComparator.<init>()",
    "module" : "gradoop-core",
    "name" : "DefaultVertexData#<init>",
    "key" : "org.gradoop.model.impl.DefaultVertexData.<init>_",
    "otherKey" : "org.gradoop.model.impl.LogicalGraphProjectionTest$VertexComparator.<init>_",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 148.80249054922368,
      "meanCurrent" : 1886.4937037037037,
      "deviationOld" : 12.906056101836187,
      "deviationCurrent" : 745.873895074513,
      "vms" : 29,
      "callsOld" : 107252,
      "calls" : 450,
      "tvalue" : -12.758528230167386,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 181.37075655326333,
    "inVMDeviation" : 2265.96940564022,
    "ess" : 1,
    "values" : [ 1628.9111111111113, 2326.4666666666667, 1491.7333333333333, 1722.0, 1262.3666666666666, 1603.1333333333334, 1804.9333333333334, 1472.1666666666667, 1219.4666666666667, 2846.755555555556, 1901.1333333333334, 3589.8333333333335, 1984.8, 3065.733333333333, 2676.866666666667, 2356.6, 475.0, 1380.0333333333333, 1510.3333333333333, 3784.166666666666, 1514.7333333333333, 670.1333333333333, 1352.8, 1478.9333333333334, 2357.3333333333335, 2236.0, 1733.7333333333333, 1673.0, 1811.611111111111, 1664.1 ],
    "valuesPredecessor" : [ 149.02446816341552, 139.8604430300238, 122.69781309599496, 134.23702524646848, 137.96790087105876, 148.38086832598677, 145.4549318652008, 165.4760540128023, 153.60064944956034, 1177.0227411932335, 136.35473032019019, 145.90638548951046, 141.43277606114816, 132.69320140440462, 158.43134385976015, 150.92036787856696, 143.23736667373032, 159.68477762237765, 142.20514818514818, 150.43493948674273, 150.4164903413418, 162.87332847247532, 164.82432294977755, 143.0862821810706, 186.68108116602497, 132.5218157807857, 151.16735764942868, 165.91076923076926, 149.82893273393267, 149.96065437978882 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1984.6666666666667,
          "variance" : 142140.26666666666,
          "n" : 1,
          "max" : 2611.0,
          "min" : 1521.0,
          "sum" : 1984.6666666666667,
          "standardDeviation" : 377.01494223262114
        }, {
          "mean" : 4705.5,
          "variance" : 7.469257500000001E7,
          "n" : 4,
          "max" : 17668.0,
          "min" : 298.0,
          "sum" : 18822.0,
          "standardDeviation" : 8642.486621337635
        }, {
          "mean" : 409.5,
          "variance" : 9226.999999999998,
          "n" : 4,
          "max" : 499.0,
          "min" : 322.0,
          "sum" : 1638.0,
          "standardDeviation" : 96.05727458136629
        }, {
          "mean" : 322.8,
          "variance" : 1459.7000000000003,
          "n" : 5,
          "max" : 375.0,
          "min" : 282.0,
          "sum" : 1614.0,
          "standardDeviation" : 38.20602046798384
        }, {
          "mean" : 375.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 375.0,
          "min" : 375.0,
          "sum" : 375.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 6272.6,
          "variance" : 5.4963149300000004E7,
          "n" : 5,
          "max" : 15263.0,
          "min" : 285.0,
          "sum" : 31363.0,
          "standardDeviation" : 7413.713597111774
        }, {
          "mean" : 383.75,
          "variance" : 9857.583333333336,
          "n" : 4,
          "max" : 492.0,
          "min" : 270.0,
          "sum" : 1535.0,
          "standardDeviation" : 99.28536313744003
        }, {
          "mean" : 377.5,
          "variance" : 1836.3333333333328,
          "n" : 4,
          "max" : 437.0,
          "min" : 342.0,
          "sum" : 1510.0,
          "standardDeviation" : 42.85246006162695
        }, {
          "mean" : 244.5,
          "variance" : 220.49999999999997,
          "n" : 2,
          "max" : 255.0,
          "min" : 234.0,
          "sum" : 489.0,
          "standardDeviation" : 14.849242404917497
        } ],
        "2" : [ {
          "mean" : 3862.6,
          "variance" : 5.15939338E7,
          "n" : 5,
          "max" : 16698.0,
          "min" : 278.0,
          "sum" : 19313.0,
          "standardDeviation" : 7182.891743580714
        }, {
          "mean" : 313.5,
          "variance" : 3593.6666666666665,
          "n" : 4,
          "max" : 367.0,
          "min" : 236.0,
          "sum" : 1254.0,
          "standardDeviation" : 59.947198989332826
        }, {
          "mean" : 304.2,
          "variance" : 1587.7000000000003,
          "n" : 5,
          "max" : 349.0,
          "min" : 257.0,
          "sum" : 1521.0,
          "standardDeviation" : 39.84595337044905
        }, {
          "mean" : 288.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 288.0,
          "min" : 288.0,
          "sum" : 288.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 4338.0,
          "variance" : 4.85387405E7,
          "n" : 5,
          "max" : 16769.0,
          "min" : 548.0,
          "sum" : 21690.0,
          "standardDeviation" : 6966.974989190072
        }, {
          "mean" : 390.6,
          "variance" : 4255.299999999999,
          "n" : 5,
          "max" : 448.0,
          "min" : 293.0,
          "sum" : 1953.0,
          "standardDeviation" : 65.23266053136265
        }, {
          "mean" : 413.0,
          "variance" : 70484.66666666664,
          "n" : 4,
          "max" : 808.0,
          "min" : 255.0,
          "sum" : 1652.0,
          "standardDeviation" : 265.4894850397406
        }, {
          "mean" : 535.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 535.0,
          "min" : 535.0,
          "sum" : 535.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 3071.5,
          "variance" : 1.78963823E7,
          "n" : 5,
          "max" : 11617.0,
          "min" : 285.0,
          "sum" : 15357.5,
          "standardDeviation" : 4230.4115993600435
        }, {
          "mean" : 439.75,
          "variance" : 27424.249999999996,
          "n" : 4,
          "max" : 678.0,
          "min" : 298.0,
          "sum" : 1759.0,
          "standardDeviation" : 165.60268717626533
        }, {
          "mean" : 285.2,
          "variance" : 1053.7000000000003,
          "n" : 5,
          "max" : 334.0,
          "min" : 260.0,
          "sum" : 1426.0,
          "standardDeviation" : 32.46074552440224
        }, {
          "mean" : 393.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 393.0,
          "min" : 393.0,
          "sum" : 393.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 4038.4,
          "variance" : 5.0861871800000004E7,
          "n" : 5,
          "max" : 16735.0,
          "min" : 229.0,
          "sum" : 20192.0,
          "standardDeviation" : 7131.750963122591
        }, {
          "mean" : 434.75,
          "variance" : 17380.916666666664,
          "n" : 4,
          "max" : 556.0,
          "min" : 284.0,
          "sum" : 1739.0,
          "standardDeviation" : 131.8367045502377
        }, {
          "mean" : 373.2,
          "variance" : 22849.7,
          "n" : 5,
          "max" : 571.0,
          "min" : 226.0,
          "sum" : 1866.0,
          "standardDeviation" : 151.1611722632502
        }, {
          "mean" : 250.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 250.0,
          "min" : 250.0,
          "sum" : 250.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 4724.4,
          "variance" : 8.550045929999998E7,
          "n" : 5,
          "max" : 21259.0,
          "min" : 324.0,
          "sum" : 23622.0,
          "standardDeviation" : 9246.645840519684
        }, {
          "mean" : 269.4,
          "variance" : 4531.800000000001,
          "n" : 5,
          "max" : 340.0,
          "min" : 163.0,
          "sum" : 1347.0,
          "standardDeviation" : 67.31864526266108
        }, {
          "mean" : 415.5,
          "variance" : 7493.666666666667,
          "n" : 4,
          "max" : 531.0,
          "min" : 324.0,
          "sum" : 1662.0,
          "standardDeviation" : 86.56596713874724
        }, {
          "mean" : 443.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 443.0,
          "min" : 443.0,
          "sum" : 443.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 1688.5,
          "variance" : 131200.7,
          "n" : 1,
          "max" : 2365.0,
          "min" : 1384.0,
          "sum" : 1688.5,
          "standardDeviation" : 362.216371800061
        }, {
          "mean" : 4177.75,
          "variance" : 4.305961425E7,
          "n" : 4,
          "max" : 13998.0,
          "min" : 307.0,
          "sum" : 16711.0,
          "standardDeviation" : 6561.982493880946
        }, {
          "mean" : 422.5,
          "variance" : 24796.33333333333,
          "n" : 4,
          "max" : 656.0,
          "min" : 317.0,
          "sum" : 1690.0,
          "standardDeviation" : 157.46851537159208
        }, {
          "mean" : 339.0,
          "variance" : 24152.499999999996,
          "n" : 5,
          "max" : 615.0,
          "min" : 247.0,
          "sum" : 1695.0,
          "standardDeviation" : 155.41074608919422
        }, {
          "mean" : 298.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 298.0,
          "min" : 298.0,
          "sum" : 298.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 2918.4,
          "variance" : 2.01692648E7,
          "n" : 5,
          "max" : 10907.0,
          "min" : 367.0,
          "sum" : 14592.0,
          "standardDeviation" : 4491.0204631019
        }, {
          "mean" : 392.25,
          "variance" : 7503.583333333334,
          "n" : 4,
          "max" : 497.0,
          "min" : 301.0,
          "sum" : 1569.0,
          "standardDeviation" : 86.62322629256737
        }, {
          "mean" : 360.6,
          "variance" : 18017.300000000003,
          "n" : 5,
          "max" : 580.0,
          "min" : 261.0,
          "sum" : 1803.0,
          "standardDeviation" : 134.22853645927904
        }, {
          "mean" : 328.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 328.0,
          "min" : 328.0,
          "sum" : 328.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 8053.666666666667,
          "variance" : 1.4227669146666667E8,
          "n" : 5,
          "max" : 27901.0,
          "min" : 296.0,
          "sum" : 40268.333333333336,
          "standardDeviation" : 11927.979353883316
        }, {
          "mean" : 261.0,
          "variance" : 2256.6666666666656,
          "n" : 4,
          "max" : 300.0,
          "min" : 202.0,
          "sum" : 1044.0,
          "standardDeviation" : 47.50438576243951
        }, {
          "mean" : 228.0,
          "variance" : 4513.499999999999,
          "n" : 5,
          "max" : 318.0,
          "min" : 148.0,
          "sum" : 1140.0,
          "standardDeviation" : 67.18258702967607
        }, {
          "mean" : 249.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 249.0,
          "min" : 249.0,
          "sum" : 249.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 4056.0,
          "variance" : 5.442833600000001E7,
          "n" : 5,
          "max" : 17237.0,
          "min" : 317.0,
          "sum" : 20280.0,
          "standardDeviation" : 7377.556234960192
        }, {
          "mean" : 1339.2,
          "variance" : 4637336.200000001,
          "n" : 5,
          "max" : 5191.0,
          "min" : 339.0,
          "sum" : 6696.0,
          "standardDeviation" : 2153.4475150325816
        }, {
          "mean" : 299.75,
          "variance" : 3283.583333333333,
          "n" : 4,
          "max" : 385.0,
          "min" : 261.0,
          "sum" : 1199.0,
          "standardDeviation" : 57.302559570522966
        }, {
          "mean" : 342.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 342.0,
          "min" : 342.0,
          "sum" : 342.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1670.5,
          "variance" : 24762.7,
          "n" : 1,
          "max" : 1889.0,
          "min" : 1499.0,
          "sum" : 1670.5,
          "standardDeviation" : 157.36168529855036
        }, {
          "mean" : 10284.75,
          "variance" : 1.357566195833333E8,
          "n" : 4,
          "max" : 22712.0,
          "min" : 269.0,
          "sum" : 41139.0,
          "standardDeviation" : 11651.464267779107
        }, {
          "mean" : 1860.4,
          "variance" : 1.2515546799999999E7,
          "n" : 5,
          "max" : 8188.0,
          "min" : 203.0,
          "sum" : 9302.0,
          "standardDeviation" : 3537.7318722594
        }, {
          "mean" : 360.25,
          "variance" : 8282.916666666664,
          "n" : 4,
          "max" : 496.0,
          "min" : 302.0,
          "sum" : 1441.0,
          "standardDeviation" : 91.01053052623452
        }, {
          "mean" : 295.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 295.0,
          "min" : 295.0,
          "sum" : 295.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 5331.8,
          "variance" : 3.77924682E7,
          "n" : 5,
          "max" : 12746.0,
          "min" : 364.0,
          "sum" : 26659.0,
          "standardDeviation" : 6147.557905379989
        }, {
          "mean" : 320.5,
          "variance" : 514.9999999999999,
          "n" : 4,
          "max" : 352.0,
          "min" : 299.0,
          "sum" : 1282.0,
          "standardDeviation" : 22.693611435820433
        }, {
          "mean" : 302.0,
          "variance" : 11577.999999999998,
          "n" : 4,
          "max" : 442.0,
          "min" : 188.0,
          "sum" : 1208.0,
          "standardDeviation" : 107.60111523585617
        }, {
          "mean" : 311.5,
          "variance" : 144.49999999999997,
          "n" : 2,
          "max" : 320.0,
          "min" : 303.0,
          "sum" : 623.0,
          "standardDeviation" : 12.020815280171307
        } ],
        "13" : [ {
          "mean" : 1995.0,
          "variance" : 39460.80000000001,
          "n" : 1,
          "max" : 2295.0,
          "min" : 1742.0,
          "sum" : 1995.0,
          "standardDeviation" : 198.6474263613803
        }, {
          "mean" : 10220.75,
          "variance" : 1.580466275833333E8,
          "n" : 4,
          "max" : 26502.0,
          "min" : 289.0,
          "sum" : 40883.0,
          "standardDeviation" : 12571.659698835843
        }, {
          "mean" : 307.8,
          "variance" : 1542.2000000000003,
          "n" : 5,
          "max" : 362.0,
          "min" : 266.0,
          "sum" : 1539.0,
          "standardDeviation" : 39.27085433244355
        }, {
          "mean" : 309.0,
          "variance" : 8670.0,
          "n" : 4,
          "max" : 447.0,
          "min" : 250.0,
          "sum" : 1236.0,
          "standardDeviation" : 93.11283477587824
        }, {
          "mean" : 333.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 333.0,
          "min" : 333.0,
          "sum" : 333.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 7387.2,
          "variance" : 8.32419042E7,
          "n" : 5,
          "max" : 19201.0,
          "min" : 291.0,
          "sum" : 36936.0,
          "standardDeviation" : 9123.700137553842
        }, {
          "mean" : 341.5,
          "variance" : 6434.999999999999,
          "n" : 4,
          "max" : 415.0,
          "min" : 262.0,
          "sum" : 1366.0,
          "standardDeviation" : 80.21845174272562
        }, {
          "mean" : 319.0,
          "variance" : 3429.999999999999,
          "n" : 5,
          "max" : 410.0,
          "min" : 249.0,
          "sum" : 1595.0,
          "standardDeviation" : 58.56620185738528
        }, {
          "mean" : 256.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 256.0,
          "min" : 256.0,
          "sum" : 256.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 2829.4,
          "variance" : 2.16710978E7,
          "n" : 5,
          "max" : 11095.0,
          "min" : 418.0,
          "sum" : 14147.0,
          "standardDeviation" : 4655.222636996001
        }, {
          "mean" : 4875.5,
          "variance" : 8.075549100000001E7,
          "n" : 4,
          "max" : 18355.0,
          "min" : 332.0,
          "sum" : 19502.0,
          "standardDeviation" : 8986.40590002477
        }, {
          "mean" : 285.8,
          "variance" : 635.1999999999998,
          "n" : 5,
          "max" : 314.0,
          "min" : 262.0,
          "sum" : 1429.0,
          "standardDeviation" : 25.20317440323738
        }, {
          "mean" : 271.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 271.0,
          "min" : 271.0,
          "sum" : 271.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 680.2,
          "variance" : 74807.2,
          "n" : 5,
          "max" : 1068.0,
          "min" : 323.0,
          "sum" : 3401.0,
          "standardDeviation" : 273.509049210442
        }, {
          "mean" : 339.4,
          "variance" : 1483.2999999999997,
          "n" : 5,
          "max" : 387.0,
          "min" : 289.0,
          "sum" : 1697.0,
          "standardDeviation" : 38.5136339495509
        }, {
          "mean" : 443.75,
          "variance" : 13110.249999999996,
          "n" : 4,
          "max" : 549.0,
          "min" : 281.0,
          "sum" : 1775.0,
          "standardDeviation" : 114.49999999999999
        }, {
          "mean" : 252.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 252.0,
          "min" : 252.0,
          "sum" : 252.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 3411.5,
          "variance" : 4.780285150000001E7,
          "n" : 5,
          "max" : 17520.0,
          "min" : 389.0,
          "sum" : 17057.5,
          "standardDeviation" : 6913.9606232607375
        }, {
          "mean" : 394.0,
          "variance" : 8116.666666666667,
          "n" : 4,
          "max" : 490.0,
          "min" : 276.0,
          "sum" : 1576.0,
          "standardDeviation" : 90.0925450115972
        }, {
          "mean" : 347.2,
          "variance" : 6888.2,
          "n" : 5,
          "max" : 487.0,
          "min" : 271.0,
          "sum" : 1736.0,
          "standardDeviation" : 82.9951805829712
        }, {
          "mean" : 331.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 331.0,
          "min" : 331.0,
          "sum" : 331.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 3979.6,
          "variance" : 5.07788038E7,
          "n" : 5,
          "max" : 16691.0,
          "min" : 289.0,
          "sum" : 19898.0,
          "standardDeviation" : 7125.924768056424
        }, {
          "mean" : 264.6,
          "variance" : 329.30000000000007,
          "n" : 5,
          "max" : 283.0,
          "min" : 235.0,
          "sum" : 1323.0,
          "standardDeviation" : 18.14662503056698
        }, {
          "mean" : 278.25,
          "variance" : 606.9166666666666,
          "n" : 4,
          "max" : 312.0,
          "min" : 258.0,
          "sum" : 1113.0,
          "standardDeviation" : 24.635678733630755
        }, {
          "mean" : 321.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 321.0,
          "min" : 321.0,
          "sum" : 321.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 2005.5,
          "variance" : 37965.899999999994,
          "n" : 1,
          "max" : 2325.0,
          "min" : 1838.0,
          "sum" : 2005.5,
          "standardDeviation" : 194.84840261085026
        }, {
          "mean" : 12777.999999999998,
          "variance" : 2.75454202E8,
          "n" : 4,
          "max" : 35428.0,
          "min" : 326.0,
          "sum" : 51111.99999999999,
          "standardDeviation" : 16596.813007321616
        }, {
          "mean" : 302.0,
          "variance" : 3068.0,
          "n" : 4,
          "max" : 333.0,
          "min" : 219.0,
          "sum" : 1208.0,
          "standardDeviation" : 55.389529696504916
        }, {
          "mean" : 459.25,
          "variance" : 21641.583333333332,
          "n" : 4,
          "max" : 659.0,
          "min" : 333.0,
          "sum" : 1837.0,
          "standardDeviation" : 147.1107859177339
        }, {
          "mean" : 300.0,
          "variance" : 5408.0,
          "n" : 2,
          "max" : 352.0,
          "min" : 248.0,
          "sum" : 600.0,
          "standardDeviation" : 73.53910524340094
        } ],
        "20" : [ {
          "mean" : 3852.2,
          "variance" : 3.64620872E7,
          "n" : 5,
          "max" : 14602.0,
          "min" : 283.0,
          "sum" : 19261.0,
          "standardDeviation" : 6038.384485936615
        }, {
          "mean" : 347.0,
          "variance" : 18661.999999999996,
          "n" : 4,
          "max" : 541.0,
          "min" : 221.0,
          "sum" : 1388.0,
          "standardDeviation" : 136.6089308939939
        }, {
          "mean" : 308.0,
          "variance" : 2410.666666666666,
          "n" : 4,
          "max" : 368.0,
          "min" : 248.0,
          "sum" : 1232.0,
          "standardDeviation" : 49.09854037205858
        }, {
          "mean" : 420.0,
          "variance" : 32258.0,
          "n" : 2,
          "max" : 547.0,
          "min" : 293.0,
          "sum" : 840.0,
          "standardDeviation" : 179.60512242138307
        } ],
        "21" : [ {
          "mean" : 854.8,
          "variance" : 258512.70000000004,
          "n" : 5,
          "max" : 1659.0,
          "min" : 468.0,
          "sum" : 4274.0,
          "standardDeviation" : 508.441442056015
        }, {
          "mean" : 664.5,
          "variance" : 72752.33333333331,
          "n" : 4,
          "max" : 995.0,
          "min" : 356.0,
          "sum" : 2658.0,
          "standardDeviation" : 269.7264045905282
        }, {
          "mean" : 541.2,
          "variance" : 62607.7,
          "n" : 5,
          "max" : 853.0,
          "min" : 342.0,
          "sum" : 2706.0,
          "standardDeviation" : 250.21530728554558
        }, {
          "mean" : 414.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 414.0,
          "min" : 414.0,
          "sum" : 414.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 3528.8,
          "variance" : 4.40919172E7,
          "n" : 5,
          "max" : 15397.0,
          "min" : 266.0,
          "sum" : 17644.0,
          "standardDeviation" : 6640.174485659244
        }, {
          "mean" : 244.75,
          "variance" : 8156.249999999999,
          "n" : 4,
          "max" : 369.0,
          "min" : 153.0,
          "sum" : 979.0,
          "standardDeviation" : 90.31195934094221
        }, {
          "mean" : 267.8,
          "variance" : 5238.699999999998,
          "n" : 5,
          "max" : 348.0,
          "min" : 151.0,
          "sum" : 1339.0,
          "standardDeviation" : 72.37886431825245
        }, {
          "mean" : 330.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 330.0,
          "min" : 330.0,
          "sum" : 330.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 3781.0,
          "variance" : 5.56010385E7,
          "n" : 5,
          "max" : 17118.0,
          "min" : 364.0,
          "sum" : 18905.0,
          "standardDeviation" : 7456.6103894464
        }, {
          "mean" : 332.0,
          "variance" : 2025.0,
          "n" : 5,
          "max" : 395.0,
          "min" : 279.0,
          "sum" : 1660.0,
          "standardDeviation" : 45.0
        }, {
          "mean" : 327.5,
          "variance" : 2902.9999999999995,
          "n" : 4,
          "max" : 395.0,
          "min" : 264.0,
          "sum" : 1310.0,
          "standardDeviation" : 53.879495172096775
        }, {
          "mean" : 309.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 309.0,
          "min" : 309.0,
          "sum" : 309.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 6370.8,
          "variance" : 5.55480147E7,
          "n" : 5,
          "max" : 14591.0,
          "min" : 255.0,
          "sum" : 31854.0,
          "standardDeviation" : 7453.054051863572
        }, {
          "mean" : 329.2,
          "variance" : 2161.7,
          "n" : 5,
          "max" : 383.0,
          "min" : 258.0,
          "sum" : 1646.0,
          "standardDeviation" : 46.49408564538074
        }, {
          "mean" : 319.5,
          "variance" : 1085.6666666666667,
          "n" : 4,
          "max" : 367.0,
          "min" : 291.0,
          "sum" : 1278.0,
          "standardDeviation" : 32.949456242351964
        }, {
          "mean" : 582.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 582.0,
          "min" : 582.0,
          "sum" : 582.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 6089.6,
          "variance" : 4.94916263E7,
          "n" : 5,
          "max" : 15047.0,
          "min" : 274.0,
          "sum" : 30448.0,
          "standardDeviation" : 7035.028521619511
        }, {
          "mean" : 318.2,
          "variance" : 1250.7000000000005,
          "n" : 5,
          "max" : 377.0,
          "min" : 290.0,
          "sum" : 1591.0,
          "standardDeviation" : 35.36523716872263
        }, {
          "mean" : 269.0,
          "variance" : 1075.3333333333333,
          "n" : 4,
          "max" : 313.0,
          "min" : 234.0,
          "sum" : 1076.0,
          "standardDeviation" : 32.79227551319568
        }, {
          "mean" : 425.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 425.0,
          "min" : 425.0,
          "sum" : 425.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 4014.9999999999995,
          "variance" : 3.6295092800000004E7,
          "n" : 1,
          "max" : 16274.0,
          "min" : 808.0,
          "sum" : 4014.9999999999995,
          "standardDeviation" : 6024.540878772424
        }, {
          "mean" : 4741.75,
          "variance" : 6.930692691666666E7,
          "n" : 4,
          "max" : 17219.0,
          "min" : 270.0,
          "sum" : 18967.0,
          "standardDeviation" : 8325.078192825978
        }, {
          "mean" : 300.4,
          "variance" : 1979.3,
          "n" : 5,
          "max" : 358.0,
          "min" : 259.0,
          "sum" : 1502.0,
          "standardDeviation" : 44.48932456219132
        }, {
          "mean" : 311.5,
          "variance" : 945.6666666666667,
          "n" : 4,
          "max" : 353.0,
          "min" : 279.0,
          "sum" : 1246.0,
          "standardDeviation" : 30.75169372029233
        }, {
          "mean" : 276.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 276.0,
          "min" : 276.0,
          "sum" : 276.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 4332.4,
          "variance" : 6.46939368E7,
          "n" : 5,
          "max" : 18711.0,
          "min" : 289.0,
          "sum" : 21662.0,
          "standardDeviation" : 8043.254117582012
        }, {
          "mean" : 345.5,
          "variance" : 1624.9999999999998,
          "n" : 4,
          "max" : 387.0,
          "min" : 291.0,
          "sum" : 1382.0,
          "standardDeviation" : 40.311288741492746
        }, {
          "mean" : 327.6,
          "variance" : 7176.8,
          "n" : 5,
          "max" : 477.0,
          "min" : 267.0,
          "sum" : 1638.0,
          "standardDeviation" : 84.71599612824015
        }, {
          "mean" : 413.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 413.0,
          "min" : 413.0,
          "sum" : 413.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 4031.1666666666665,
          "variance" : 3.3972995766666666E7,
          "n" : 1,
          "max" : 15898.0,
          "min" : 851.0,
          "sum" : 4031.1666666666665,
          "standardDeviation" : 5828.6358409722825
        }, {
          "mean" : 4894.75,
          "variance" : 7.678580624999999E7,
          "n" : 4,
          "max" : 18034.0,
          "min" : 330.0,
          "sum" : 19579.0,
          "standardDeviation" : 8762.75106630332
        }, {
          "mean" : 388.6,
          "variance" : 7721.3,
          "n" : 5,
          "max" : 504.0,
          "min" : 315.0,
          "sum" : 1943.0,
          "standardDeviation" : 87.8709280706651
        }, {
          "mean" : 308.25,
          "variance" : 3201.5833333333344,
          "n" : 4,
          "max" : 358.0,
          "min" : 238.0,
          "sum" : 1233.0,
          "standardDeviation" : 56.582535585932646
        }, {
          "mean" : 388.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 388.0,
          "min" : 388.0,
          "sum" : 388.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1750.5,
          "variance" : 81829.9,
          "n" : 1,
          "max" : 2103.0,
          "min" : 1420.0,
          "sum" : 1750.5,
          "standardDeviation" : 286.0592595949308
        }, {
          "mean" : 4944.5,
          "variance" : 7.572634166666667E7,
          "n" : 4,
          "max" : 17987.0,
          "min" : 262.0,
          "sum" : 19778.0,
          "standardDeviation" : 8702.088350888347
        }, {
          "mean" : 347.25,
          "variance" : 5664.250000000001,
          "n" : 4,
          "max" : 459.0,
          "min" : 301.0,
          "sum" : 1389.0,
          "standardDeviation" : 75.26121178934073
        }, {
          "mean" : 348.6,
          "variance" : 4396.3,
          "n" : 5,
          "max" : 399.0,
          "min" : 274.0,
          "sum" : 1743.0,
          "standardDeviation" : 66.30460014207159
        }, {
          "mean" : 301.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 301.0,
          "min" : 301.0,
          "sum" : 301.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 378.1052631578948,
          "variance" : 1740454.0642687127,
          "n" : 394,
          "max" : 20549.0,
          "min" : 59.0,
          "sum" : 148973.47368421056,
          "standardDeviation" : 1319.2626972171663
        }, {
          "mean" : 139.5254237288133,
          "variance" : 8474.366805244634,
          "n" : 531,
          "max" : 805.0,
          "min" : 37.0,
          "sum" : 74087.99999999987,
          "standardDeviation" : 92.05632409152906
        }, {
          "mean" : 130.69647696476974,
          "variance" : 8104.3532755979695,
          "n" : 369,
          "max" : 575.0,
          "min" : 36.0,
          "sum" : 48227.00000000004,
          "standardDeviation" : 90.02418161581903
        }, {
          "mean" : 138.9260204081633,
          "variance" : 10306.994513022608,
          "n" : 392,
          "max" : 598.0,
          "min" : 35.0,
          "sum" : 54459.000000000015,
          "standardDeviation" : 101.52336929506727
        }, {
          "mean" : 151.33333333333334,
          "variance" : 13312.82608695652,
          "n" : 369,
          "max" : 841.0,
          "min" : 34.0,
          "sum" : 55842.0,
          "standardDeviation" : 115.3812206858487
        }, {
          "mean" : 142.75784753363232,
          "variance" : 237114.53448883965,
          "n" : 446,
          "max" : 10208.0,
          "min" : 34.0,
          "sum" : 63670.000000000015,
          "standardDeviation" : 486.94407737320273
        }, {
          "mean" : 117.77136258660505,
          "variance" : 252904.648992815,
          "n" : 433,
          "max" : 10410.0,
          "min" : 28.0,
          "sum" : 50994.999999999985,
          "standardDeviation" : 502.896260666964
        }, {
          "mean" : 54.58628318584073,
          "variance" : 652.0967515648606,
          "n" : 452,
          "max" : 358.0,
          "min" : 28.0,
          "sum" : 24673.000000000007,
          "standardDeviation" : 25.536185141184667
        }, {
          "mean" : 62.619047619047585,
          "variance" : 704.0030395136778,
          "n" : 189,
          "max" : 273.0,
          "min" : 30.0,
          "sum" : 11834.999999999993,
          "standardDeviation" : 26.533055600772364
        } ],
        "1" : [ {
          "mean" : 265.3832335329336,
          "variance" : 653294.9128383227,
          "n" : 496,
          "max" : 13785.0,
          "min" : 51.0,
          "sum" : 131630.08383233508,
          "standardDeviation" : 808.2666099984106
        }, {
          "mean" : 134.15116279069758,
          "variance" : 249547.4666070365,
          "n" : 430,
          "max" : 10381.0,
          "min" : 34.0,
          "sum" : 57684.99999999996,
          "standardDeviation" : 499.54726163500936
        }, {
          "mean" : 97.7049180327869,
          "variance" : 2673.2277565686054,
          "n" : 366,
          "max" : 338.0,
          "min" : 36.0,
          "sum" : 35760.00000000001,
          "standardDeviation" : 51.7032664013465
        }, {
          "mean" : 135.25925925925938,
          "variance" : 11360.224383534733,
          "n" : 378,
          "max" : 708.0,
          "min" : 36.0,
          "sum" : 51128.000000000044,
          "standardDeviation" : 106.58435337109633
        }, {
          "mean" : 169.32987012986996,
          "variance" : 275025.97683982685,
          "n" : 385,
          "max" : 10241.0,
          "min" : 34.0,
          "sum" : 65191.999999999935,
          "standardDeviation" : 524.4291914451625
        }, {
          "mean" : 158.0588235294117,
          "variance" : 233467.62011471268,
          "n" : 442,
          "max" : 10060.0,
          "min" : 35.0,
          "sum" : 69861.99999999997,
          "standardDeviation" : 483.184871570616
        }, {
          "mean" : 117.67505720823807,
          "variance" : 218496.87123422863,
          "n" : 437,
          "max" : 9710.0,
          "min" : 28.0,
          "sum" : 51424.00000000004,
          "standardDeviation" : 467.43648898457707
        }, {
          "mean" : 56.46136865342165,
          "variance" : 606.7003848483068,
          "n" : 453,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 25577.000000000007,
          "standardDeviation" : 24.631288737057726
        }, {
          "mean" : 62.462765957446784,
          "variance" : 1014.1109056775514,
          "n" : 188,
          "max" : 287.0,
          "min" : 27.0,
          "sum" : 11742.999999999995,
          "standardDeviation" : 31.845108033692576
        } ],
        "2" : [ {
          "mean" : 313.6636363636366,
          "variance" : 675188.8114309376,
          "n" : 435,
          "max" : 12889.0,
          "min" : 65.0,
          "sum" : 136443.68181818194,
          "standardDeviation" : 821.6987352010088
        }, {
          "mean" : 118.30585683297181,
          "variance" : 4989.864943883806,
          "n" : 461,
          "max" : 544.0,
          "min" : 34.0,
          "sum" : 54539.00000000001,
          "standardDeviation" : 70.63897609594724
        }, {
          "mean" : 95.84776902887144,
          "variance" : 3021.2609752728267,
          "n" : 381,
          "max" : 483.0,
          "min" : 34.0,
          "sum" : 36518.00000000002,
          "standardDeviation" : 54.965998356009386
        }, {
          "mean" : 117.05066666666674,
          "variance" : 5986.9466238859195,
          "n" : 375,
          "max" : 660.0,
          "min" : 34.0,
          "sum" : 43894.00000000003,
          "standardDeviation" : 77.3753618659449
        }, {
          "mean" : 113.7022900763359,
          "variance" : 5972.617775354418,
          "n" : 393,
          "max" : 548.0,
          "min" : 34.0,
          "sum" : 44685.00000000001,
          "standardDeviation" : 77.28271330222832
        }, {
          "mean" : 116.24193548387092,
          "variance" : 6288.488676152869,
          "n" : 434,
          "max" : 488.0,
          "min" : 35.0,
          "sum" : 50448.99999999998,
          "standardDeviation" : 79.29999165291802
        }, {
          "mean" : 81.39952718676123,
          "variance" : 2993.4347865057753,
          "n" : 423,
          "max" : 443.0,
          "min" : 27.0,
          "sum" : 34432.0,
          "standardDeviation" : 54.71229100033899
        }, {
          "mean" : 57.536796536796565,
          "variance" : 518.7264088045,
          "n" : 462,
          "max" : 178.0,
          "min" : 26.0,
          "sum" : 26582.000000000015,
          "standardDeviation" : 22.77556604794928
        }, {
          "mean" : 52.61611374407583,
          "variance" : 395.6185962536676,
          "n" : 211,
          "max" : 123.0,
          "min" : 28.0,
          "sum" : 11102.0,
          "standardDeviation" : 19.89016330384614
        } ],
        "3" : [ {
          "mean" : 300.1269487750559,
          "variance" : 1132639.209294463,
          "n" : 444,
          "max" : 14823.0,
          "min" : 49.0,
          "sum" : 133256.36525612482,
          "standardDeviation" : 1064.2552369119276
        }, {
          "mean" : 101.51731160896135,
          "variance" : 202401.06653643123,
          "n" : 491,
          "max" : 10031.0,
          "min" : 31.0,
          "sum" : 49845.00000000002,
          "standardDeviation" : 449.89006049970834
        }, {
          "mean" : 142.1236263736265,
          "variance" : 533557.2381179428,
          "n" : 364,
          "max" : 13967.0,
          "min" : 32.0,
          "sum" : 51733.00000000005,
          "standardDeviation" : 730.4500243808216
        }, {
          "mean" : 134.4999999999998,
          "variance" : 10188.655696202526,
          "n" : 396,
          "max" : 717.0,
          "min" : 34.0,
          "sum" : 53261.99999999992,
          "standardDeviation" : 100.93887108642798
        }, {
          "mean" : 134.31328320801993,
          "variance" : 12204.718189947229,
          "n" : 399,
          "max" : 1127.0,
          "min" : 34.0,
          "sum" : 53590.99999999995,
          "standardDeviation" : 110.47496634960895
        }, {
          "mean" : 155.30712530712532,
          "variance" : 242255.89312644457,
          "n" : 407,
          "max" : 9806.0,
          "min" : 34.0,
          "sum" : 63210.00000000001,
          "standardDeviation" : 492.1949747066142
        }, {
          "mean" : 89.0400890868597,
          "variance" : 6395.609996420615,
          "n" : 449,
          "max" : 565.0,
          "min" : 27.0,
          "sum" : 39979.0,
          "standardDeviation" : 79.97255777090423
        }, {
          "mean" : 56.05381165919288,
          "variance" : 567.255524764448,
          "n" : 446,
          "max" : 341.0,
          "min" : 27.0,
          "sum" : 25000.000000000025,
          "standardDeviation" : 23.817126710929006
        }, {
          "mean" : 55.983240223463696,
          "variance" : 544.803088318373,
          "n" : 179,
          "max" : 240.0,
          "min" : 27.0,
          "sum" : 10021.000000000002,
          "standardDeviation" : 23.341017293990703
        } ],
        "4" : [ {
          "mean" : 354.3508771929825,
          "variance" : 1301860.0574803846,
          "n" : 394,
          "max" : 18406.0,
          "min" : 68.0,
          "sum" : 139614.2456140351,
          "standardDeviation" : 1140.9908226977045
        }, {
          "mean" : 127.90524193548373,
          "variance" : 6766.857669436299,
          "n" : 496,
          "max" : 637.0,
          "min" : 34.0,
          "sum" : 63440.99999999993,
          "standardDeviation" : 82.26091216024959
        }, {
          "mean" : 104.20391061452518,
          "variance" : 4407.647379622241,
          "n" : 358,
          "max" : 555.0,
          "min" : 35.0,
          "sum" : 37305.000000000015,
          "standardDeviation" : 66.39011507462719
        }, {
          "mean" : 121.95012468827925,
          "variance" : 6637.672506234411,
          "n" : 401,
          "max" : 533.0,
          "min" : 36.0,
          "sum" : 48901.99999999998,
          "standardDeviation" : 81.47191237619509
        }, {
          "mean" : 130.29675810473836,
          "variance" : 7563.589214463846,
          "n" : 401,
          "max" : 729.0,
          "min" : 35.0,
          "sum" : 52249.00000000008,
          "standardDeviation" : 86.96889797199827
        }, {
          "mean" : 143.05227272727274,
          "variance" : 214885.59862808022,
          "n" : 440,
          "max" : 9674.0,
          "min" : 35.0,
          "sum" : 62943.00000000001,
          "standardDeviation" : 463.5575461882594
        }, {
          "mean" : 88.385150812065,
          "variance" : 4461.6606161981335,
          "n" : 431,
          "max" : 579.0,
          "min" : 27.0,
          "sum" : 38094.000000000015,
          "standardDeviation" : 66.79566315411603
        }, {
          "mean" : 61.85560344827585,
          "variance" : 1460.516901578909,
          "n" : 464,
          "max" : 564.0,
          "min" : 27.0,
          "sum" : 28700.999999999996,
          "standardDeviation" : 38.21670971680986
        }, {
          "mean" : 115.71578947368421,
          "variance" : 552463.5590086328,
          "n" : 190,
          "max" : 10297.0,
          "min" : 27.0,
          "sum" : 21986.0,
          "standardDeviation" : 743.278924098237
        } ],
        "5" : [ {
          "mean" : 387.87914691943126,
          "variance" : 4037626.27752136,
          "n" : 417,
          "max" : 39255.0,
          "min" : 42.0,
          "sum" : 161745.60426540283,
          "standardDeviation" : 2009.3845519266242
        }, {
          "mean" : 133.74207188160673,
          "variance" : 8354.390959257538,
          "n" : 473,
          "max" : 791.0,
          "min" : 36.0,
          "sum" : 63259.999999999985,
          "standardDeviation" : 91.4023575147684
        }, {
          "mean" : 111.64000000000003,
          "variance" : 5606.878074866304,
          "n" : 375,
          "max" : 542.0,
          "min" : 35.0,
          "sum" : 41865.00000000001,
          "standardDeviation" : 74.87908970377714
        }, {
          "mean" : 165.4516971279375,
          "variance" : 269310.5467444944,
          "n" : 383,
          "max" : 10099.0,
          "min" : 34.0,
          "sum" : 63368.000000000065,
          "standardDeviation" : 518.9513915045362
        }, {
          "mean" : 144.50881612090666,
          "variance" : 11772.831361473678,
          "n" : 397,
          "max" : 663.0,
          "min" : 35.0,
          "sum" : 57369.99999999994,
          "standardDeviation" : 108.50267905205695
        }, {
          "mean" : 126.3033707865168,
          "variance" : 9340.567668792386,
          "n" : 445,
          "max" : 638.0,
          "min" : 35.0,
          "sum" : 56204.99999999997,
          "standardDeviation" : 96.64661229858181
        }, {
          "mean" : 108.10361445783124,
          "variance" : 9011.996484488684,
          "n" : 415,
          "max" : 887.0,
          "min" : 26.0,
          "sum" : 44862.99999999996,
          "standardDeviation" : 94.93153577441315
        }, {
          "mean" : 61.89166666666662,
          "variance" : 1007.7752957550454,
          "n" : 480,
          "max" : 258.0,
          "min" : 27.0,
          "sum" : 29707.999999999978,
          "standardDeviation" : 31.745476776306973
        }, {
          "mean" : 63.56315789473683,
          "variance" : 767.4748259537737,
          "n" : 190,
          "max" : 181.0,
          "min" : 28.0,
          "sum" : 12076.999999999998,
          "standardDeviation" : 27.703336007668348
        } ],
        "6" : [ {
          "mean" : 330.7237163814178,
          "variance" : 411753.3671077234,
          "n" : 404,
          "max" : 9758.0,
          "min" : 61.0,
          "sum" : 133612.3814180928,
          "standardDeviation" : 641.6801127569121
        }, {
          "mean" : 129.4876543209876,
          "variance" : 6425.627682321501,
          "n" : 486,
          "max" : 592.0,
          "min" : 34.0,
          "sum" : 62930.99999999997,
          "standardDeviation" : 80.16001298853126
        }, {
          "mean" : 118.86033519553074,
          "variance" : 6902.126097366327,
          "n" : 358,
          "max" : 634.0,
          "min" : 36.0,
          "sum" : 42552.00000000001,
          "standardDeviation" : 83.07903524576056
        }, {
          "mean" : 145.8938547486034,
          "variance" : 13596.336040561471,
          "n" : 358,
          "max" : 671.0,
          "min" : 35.0,
          "sum" : 52230.000000000015,
          "standardDeviation" : 116.60332774222815
        }, {
          "mean" : 201.4413407821228,
          "variance" : 543008.7290424552,
          "n" : 358,
          "max" : 9977.0,
          "min" : 35.0,
          "sum" : 72115.99999999997,
          "standardDeviation" : 736.8912599851183
        }, {
          "mean" : 160.4364089775562,
          "variance" : 235198.56157107235,
          "n" : 401,
          "max" : 9614.0,
          "min" : 35.0,
          "sum" : 64335.00000000004,
          "standardDeviation" : 484.9727431217886
        }, {
          "mean" : 112.32346241457861,
          "variance" : 11664.159973372443,
          "n" : 439,
          "max" : 1135.0,
          "min" : 28.0,
          "sum" : 49310.000000000015,
          "standardDeviation" : 108.00074061492562
        }, {
          "mean" : 56.48058252427182,
          "variance" : 556.6881865211536,
          "n" : 412,
          "max" : 230.0,
          "min" : 27.0,
          "sum" : 23269.99999999999,
          "standardDeviation" : 23.59424053707077
        }, {
          "mean" : 54.72144846796656,
          "variance" : 419.793700689376,
          "n" : 359,
          "max" : 135.0,
          "min" : 26.0,
          "sum" : 19644.999999999996,
          "standardDeviation" : 20.488867725898764
        } ],
        "7" : [ {
          "mean" : 395.62138084632517,
          "variance" : 3782225.9723989824,
          "n" : 444,
          "max" : 38402.0,
          "min" : 59.0,
          "sum" : 175655.89309576838,
          "standardDeviation" : 1944.7945835997648
        }, {
          "mean" : 149.13053097345116,
          "variance" : 10361.138134528977,
          "n" : 452,
          "max" : 800.0,
          "min" : 35.0,
          "sum" : 67406.99999999993,
          "standardDeviation" : 101.78967597221722
        }, {
          "mean" : 166.80965909090904,
          "variance" : 286239.5391656954,
          "n" : 352,
          "max" : 9981.0,
          "min" : 36.0,
          "sum" : 58716.99999999998,
          "standardDeviation" : 535.0135878327721
        }, {
          "mean" : 156.88190954773853,
          "variance" : 15421.792064858304,
          "n" : 398,
          "max" : 1074.0,
          "min" : 36.0,
          "sum" : 62438.999999999935,
          "standardDeviation" : 124.18450815161408
        }, {
          "mean" : 167.49095607235148,
          "variance" : 17718.33346721827,
          "n" : 387,
          "max" : 722.0,
          "min" : 35.0,
          "sum" : 64819.00000000002,
          "standardDeviation" : 133.1102305129785
        }, {
          "mean" : 149.9954648526077,
          "variance" : 16676.44543393115,
          "n" : 441,
          "max" : 1123.0,
          "min" : 36.0,
          "sum" : 66148.0,
          "standardDeviation" : 129.13731232270226
        }, {
          "mean" : 128.808510638298,
          "variance" : 239599.9798326111,
          "n" : 423,
          "max" : 9901.0,
          "min" : 28.0,
          "sum" : 54486.00000000006,
          "standardDeviation" : 489.489509420387
        }, {
          "mean" : 60.310492505353324,
          "variance" : 1321.072915422154,
          "n" : 467,
          "max" : 424.0,
          "min" : 27.0,
          "sum" : 28165.000000000004,
          "standardDeviation" : 36.34656676251767
        }, {
          "mean" : 65.11848341232225,
          "variance" : 1397.5239900699623,
          "n" : 211,
          "max" : 304.0,
          "min" : 27.0,
          "sum" : 13739.999999999995,
          "standardDeviation" : 37.38347215107182
        } ],
        "8" : [ {
          "mean" : 343.9356435643565,
          "variance" : 557152.4772375501,
          "n" : 399,
          "max" : 12920.0,
          "min" : 70.0,
          "sum" : 137230.32178217825,
          "standardDeviation" : 746.4264714206953
        }, {
          "mean" : 153.7922606924643,
          "variance" : 14000.769001205375,
          "n" : 491,
          "max" : 783.0,
          "min" : 34.0,
          "sum" : 75511.99999999997,
          "standardDeviation" : 118.32484524057226
        }, {
          "mean" : 142.4936386768448,
          "variance" : 91748.59753596096,
          "n" : 393,
          "max" : 5734.0,
          "min" : 35.0,
          "sum" : 56000.00000000001,
          "standardDeviation" : 302.9003095672914
        }, {
          "mean" : 170.98373983739833,
          "variance" : 22355.35843054081,
          "n" : 369,
          "max" : 818.0,
          "min" : 35.0,
          "sum" : 63092.999999999985,
          "standardDeviation" : 149.51708407583666
        }, {
          "mean" : 185.425,
          "variance" : 99028.04448621548,
          "n" : 400,
          "max" : 5666.0,
          "min" : 35.0,
          "sum" : 74170.0,
          "standardDeviation" : 314.6872169094504
        }, {
          "mean" : 152.08089887640443,
          "variance" : 18789.633080271276,
          "n" : 445,
          "max" : 902.0,
          "min" : 35.0,
          "sum" : 67675.99999999997,
          "standardDeviation" : 137.0752825285116
        }, {
          "mean" : 92.4773755656109,
          "variance" : 8952.884974502624,
          "n" : 442,
          "max" : 743.0,
          "min" : 27.0,
          "sum" : 40875.000000000015,
          "standardDeviation" : 94.6196859776158
        }, {
          "mean" : 54.643956043956045,
          "variance" : 615.3795614077554,
          "n" : 455,
          "max" : 259.0,
          "min" : 27.0,
          "sum" : 24863.0,
          "standardDeviation" : 24.806845051472294
        }, {
          "mean" : 53.607734806629814,
          "variance" : 408.43971761817056,
          "n" : 181,
          "max" : 115.0,
          "min" : 27.0,
          "sum" : 9702.999999999996,
          "standardDeviation" : 20.20989157858524
        } ],
        "9" : [ {
          "mean" : 9088.740046838411,
          "variance" : 3.2373397244249165E10,
          "n" : 422,
          "max" : 3718077.0,
          "min" : 59.0,
          "sum" : 3835448.2997658094,
          "standardDeviation" : 179926.0882814084
        }, {
          "mean" : 137.8504273504276,
          "variance" : 8409.52790131591,
          "n" : 468,
          "max" : 648.0,
          "min" : 35.0,
          "sum" : 64514.00000000012,
          "standardDeviation" : 91.70347813096247
        }, {
          "mean" : 109.60533333333335,
          "variance" : 5445.667351158647,
          "n" : 375,
          "max" : 587.0,
          "min" : 35.0,
          "sum" : 41102.00000000001,
          "standardDeviation" : 73.79476506608478
        }, {
          "mean" : 134.34908136482932,
          "variance" : 14225.827821522302,
          "n" : 381,
          "max" : 1062.0,
          "min" : 35.0,
          "sum" : 51186.99999999997,
          "standardDeviation" : 119.27207477663119
        }, {
          "mean" : 154.75789473684213,
          "variance" : 13720.05204832663,
          "n" : 380,
          "max" : 697.0,
          "min" : 34.0,
          "sum" : 58808.00000000001,
          "standardDeviation" : 117.13262589187792
        }, {
          "mean" : 151.01801801801793,
          "variance" : 214106.5188619772,
          "n" : 444,
          "max" : 9626.0,
          "min" : 19.0,
          "sum" : 67051.99999999996,
          "standardDeviation" : 462.7164562255996
        }, {
          "mean" : 95.5966981132075,
          "variance" : 7823.4421640126575,
          "n" : 424,
          "max" : 673.0,
          "min" : 29.0,
          "sum" : 40532.99999999998,
          "standardDeviation" : 88.45022421685916
        }, {
          "mean" : 56.09267241379307,
          "variance" : 985.1771384151335,
          "n" : 464,
          "max" : 515.0,
          "min" : 27.0,
          "sum" : 26026.99999999998,
          "standardDeviation" : 31.387531575693135
        }, {
          "mean" : 106.84331797235022,
          "variance" : 481307.003114866,
          "n" : 217,
          "max" : 10273.0,
          "min" : 28.0,
          "sum" : 23184.999999999996,
          "standardDeviation" : 693.7629300523818
        } ],
        "10" : [ {
          "mean" : 311.29687499999994,
          "variance" : 531291.5380662751,
          "n" : 443,
          "max" : 13177.0,
          "min" : 62.0,
          "sum" : 137904.51562499997,
          "standardDeviation" : 728.8974811770686
        }, {
          "mean" : 129.15923566878985,
          "variance" : 212903.53841984004,
          "n" : 471,
          "max" : 10049.0,
          "min" : 36.0,
          "sum" : 60834.000000000015,
          "standardDeviation" : 461.41471413451916
        }, {
          "mean" : 99.29365079365084,
          "variance" : 3476.7968296071754,
          "n" : 378,
          "max" : 481.0,
          "min" : 37.0,
          "sum" : 37533.000000000015,
          "standardDeviation" : 58.96436915296538
        }, {
          "mean" : 131.84556962025334,
          "variance" : 10457.486243012263,
          "n" : 395,
          "max" : 876.0,
          "min" : 34.0,
          "sum" : 52079.00000000007,
          "standardDeviation" : 102.26185135724985
        }, {
          "mean" : 143.77860696517416,
          "variance" : 10668.910962643142,
          "n" : 402,
          "max" : 649.0,
          "min" : 35.0,
          "sum" : 57799.000000000015,
          "standardDeviation" : 103.29042047858621
        }, {
          "mean" : 152.84745762711873,
          "variance" : 261160.61502386045,
          "n" : 413,
          "max" : 10334.0,
          "min" : 36.0,
          "sum" : 63126.00000000004,
          "standardDeviation" : 511.03876078420944
        }, {
          "mean" : 100.33184855233858,
          "variance" : 227082.61061286993,
          "n" : 449,
          "max" : 10092.0,
          "min" : 27.0,
          "sum" : 45049.00000000002,
          "standardDeviation" : 476.53185687094407
        }, {
          "mean" : 53.17264573991033,
          "variance" : 388.8442837708468,
          "n" : 446,
          "max" : 126.0,
          "min" : 28.0,
          "sum" : 23715.000000000007,
          "standardDeviation" : 19.719134965075085
        }, {
          "mean" : 53.435754189944106,
          "variance" : 404.5393886133954,
          "n" : 179,
          "max" : 121.0,
          "min" : 29.0,
          "sum" : 9564.999999999995,
          "standardDeviation" : 20.113164559894482
        } ],
        "11" : [ {
          "mean" : 305.73437499999994,
          "variance" : 278350.96955397085,
          "n" : 443,
          "max" : 10031.0,
          "min" : 50.0,
          "sum" : 135440.32812499997,
          "standardDeviation" : 527.5897739285427
        }, {
          "mean" : 164.83401639344268,
          "variance" : 265342.8409760325,
          "n" : 488,
          "max" : 11330.0,
          "min" : 35.0,
          "sum" : 80439.00000000003,
          "standardDeviation" : 515.1143960093063
        }, {
          "mean" : 122.00787401574804,
          "variance" : 6429.370990468297,
          "n" : 381,
          "max" : 461.0,
          "min" : 35.0,
          "sum" : 46485.00000000001,
          "standardDeviation" : 80.18335856316008
        }, {
          "mean" : 146.7172774869108,
          "variance" : 12759.736131151156,
          "n" : 382,
          "max" : 667.0,
          "min" : 35.0,
          "sum" : 56045.99999999993,
          "standardDeviation" : 112.95900199254221
        }, {
          "mean" : 149.685096153846,
          "variance" : 16588.799391797955,
          "n" : 416,
          "max" : 889.0,
          "min" : 36.0,
          "sum" : 62268.999999999935,
          "standardDeviation" : 128.79751314290954
        }, {
          "mean" : 144.9349397590362,
          "variance" : 15843.389476747581,
          "n" : 415,
          "max" : 1022.0,
          "min" : 35.0,
          "sum" : 60148.00000000003,
          "standardDeviation" : 125.8705266404633
        }, {
          "mean" : 102.84861407249471,
          "variance" : 218159.7270333314,
          "n" : 469,
          "max" : 10059.0,
          "min" : 27.0,
          "sum" : 48236.00000000002,
          "standardDeviation" : 467.07571873662135
        }, {
          "mean" : 55.90909090909094,
          "variance" : 400.6439938957923,
          "n" : 418,
          "max" : 108.0,
          "min" : 27.0,
          "sum" : 23370.000000000015,
          "standardDeviation" : 20.016093372478863
        }, {
          "mean" : 56.331288343558285,
          "variance" : 654.0377187002953,
          "n" : 163,
          "max" : 224.0,
          "min" : 28.0,
          "sum" : 9182.0,
          "standardDeviation" : 25.574161153404333
        } ],
        "12" : [ {
          "mean" : 290.9651162790698,
          "variance" : 560512.187591478,
          "n" : 425,
          "max" : 12592.0,
          "min" : 43.0,
          "sum" : 123660.17441860466,
          "standardDeviation" : 748.6736188697168
        }, {
          "mean" : 154.83844580777088,
          "variance" : 208295.10704348152,
          "n" : 489,
          "max" : 10021.0,
          "min" : 35.0,
          "sum" : 75715.99999999996,
          "standardDeviation" : 456.393587864117
        }, {
          "mean" : 113.98387096774194,
          "variance" : 5260.997043735329,
          "n" : 372,
          "max" : 518.0,
          "min" : 35.0,
          "sum" : 42402.0,
          "standardDeviation" : 72.53273084432523
        }, {
          "mean" : 142.31413612565444,
          "variance" : 10825.43386788693,
          "n" : 382,
          "max" : 758.0,
          "min" : 33.0,
          "sum" : 54364.0,
          "standardDeviation" : 104.04534524853541
        }, {
          "mean" : 152.67183462532313,
          "variance" : 12940.127779786038,
          "n" : 387,
          "max" : 995.0,
          "min" : 35.0,
          "sum" : 59084.00000000005,
          "standardDeviation" : 113.75468245213486
        }, {
          "mean" : 140.25059665871115,
          "variance" : 9398.972936246011,
          "n" : 419,
          "max" : 600.0,
          "min" : 34.0,
          "sum" : 58764.99999999997,
          "standardDeviation" : 96.94830032675154
        }, {
          "mean" : 125.917840375587,
          "variance" : 223444.58382214853,
          "n" : 426,
          "max" : 9679.0,
          "min" : 27.0,
          "sum" : 53641.000000000065,
          "standardDeviation" : 472.6992530374345
        }, {
          "mean" : 55.09677419354839,
          "variance" : 558.8419076751945,
          "n" : 465,
          "max" : 259.0,
          "min" : 27.0,
          "sum" : 25620.000000000004,
          "standardDeviation" : 23.639837302214975
        }, {
          "mean" : 58.9047619047619,
          "variance" : 705.4262930052407,
          "n" : 210,
          "max" : 255.0,
          "min" : 27.0,
          "sum" : 12369.999999999998,
          "standardDeviation" : 26.559862443266546
        } ],
        "13" : [ {
          "mean" : 287.3609958506219,
          "variance" : 485517.4785586736,
          "n" : 477,
          "max" : 12968.0,
          "min" : 64.0,
          "sum" : 137071.19502074664,
          "standardDeviation" : 696.7908427632166
        }, {
          "mean" : 140.95127610208797,
          "variance" : 131401.9487832515,
          "n" : 431,
          "max" : 7530.0,
          "min" : 42.0,
          "sum" : 60749.99999999992,
          "standardDeviation" : 362.4940672386949
        }, {
          "mean" : 100.47872340425535,
          "variance" : 2744.5542127659583,
          "n" : 376,
          "max" : 465.0,
          "min" : 35.0,
          "sum" : 37780.00000000001,
          "standardDeviation" : 52.38849313318678
        }, {
          "mean" : 154.679347826087,
          "variance" : 280255.25385025464,
          "n" : 368,
          "max" : 10141.0,
          "min" : 40.0,
          "sum" : 56922.000000000015,
          "standardDeviation" : 529.3913994864807
        }, {
          "mean" : 134.6587926509185,
          "variance" : 9027.899060643736,
          "n" : 381,
          "max" : 715.0,
          "min" : 35.0,
          "sum" : 51304.999999999956,
          "standardDeviation" : 95.0152569887791
        }, {
          "mean" : 113.61111111111119,
          "variance" : 5715.249806651199,
          "n" : 432,
          "max" : 668.0,
          "min" : 35.0,
          "sum" : 49080.00000000003,
          "standardDeviation" : 75.59927120449773
        }, {
          "mean" : 103.29949238578685,
          "variance" : 5038.8668190800945,
          "n" : 394,
          "max" : 496.0,
          "min" : 28.0,
          "sum" : 40700.00000000002,
          "standardDeviation" : 70.9849760095761
        }, {
          "mean" : 60.300668151447645,
          "variance" : 574.6080575882913,
          "n" : 449,
          "max" : 247.0,
          "min" : 27.0,
          "sum" : 27074.999999999993,
          "standardDeviation" : 23.970983659172006
        }, {
          "mean" : 51.292134831460686,
          "variance" : 435.80907324491005,
          "n" : 267,
          "max" : 176.0,
          "min" : 27.0,
          "sum" : 13695.000000000004,
          "standardDeviation" : 20.876040650585782
        } ],
        "14" : [ {
          "mean" : 399.38914027149326,
          "variance" : 1820641.9253239746,
          "n" : 437,
          "max" : 14949.0,
          "min" : 67.0,
          "sum" : 174533.05429864256,
          "standardDeviation" : 1349.3116487023947
        }, {
          "mean" : 138.55408388520974,
          "variance" : 8565.393639258427,
          "n" : 453,
          "max" : 574.0,
          "min" : 38.0,
          "sum" : 62765.00000000001,
          "standardDeviation" : 92.54941187959234
        }, {
          "mean" : 136.37659033078882,
          "variance" : 228972.8782260995,
          "n" : 393,
          "max" : 9477.0,
          "min" : 35.0,
          "sum" : 53596.00000000001,
          "standardDeviation" : 478.5111056455216
        }, {
          "mean" : 162.12261580381463,
          "variance" : 160551.71989696394,
          "n" : 367,
          "max" : 7503.0,
          "min" : 35.0,
          "sum" : 59498.99999999997,
          "standardDeviation" : 400.6890563728487
        }, {
          "mean" : 137.64050632911386,
          "variance" : 12284.459268778528,
          "n" : 395,
          "max" : 739.0,
          "min" : 34.0,
          "sum" : 54367.99999999998,
          "standardDeviation" : 110.83527989218292
        }, {
          "mean" : 178.07499999999987,
          "variance" : 471864.09231207246,
          "n" : 440,
          "max" : 10288.0,
          "min" : 34.0,
          "sum" : 78352.99999999994,
          "standardDeviation" : 686.9236437276508
        }, {
          "mean" : 107.42142857142858,
          "variance" : 112812.66445618833,
          "n" : 420,
          "max" : 6810.0,
          "min" : 28.0,
          "sum" : 45117.0,
          "standardDeviation" : 335.87596588054396
        }, {
          "mean" : 56.72629310344825,
          "variance" : 523.8493287778361,
          "n" : 464,
          "max" : 234.0,
          "min" : 27.0,
          "sum" : 26320.99999999999,
          "standardDeviation" : 22.887754996456863
        }, {
          "mean" : 57.475728155339816,
          "variance" : 610.9628226379352,
          "n" : 206,
          "max" : 227.0,
          "min" : 27.0,
          "sum" : 11840.000000000002,
          "standardDeviation" : 24.717662159636685
        } ],
        "15" : [ {
          "mean" : 313.7369668246445,
          "variance" : 775209.5102216563,
          "n" : 417,
          "max" : 14085.0,
          "min" : 69.0,
          "sum" : 130828.31516587676,
          "standardDeviation" : 880.4598288517519
        }, {
          "mean" : 134.97251585623675,
          "variance" : 9109.725937936715,
          "n" : 473,
          "max" : 572.0,
          "min" : 35.0,
          "sum" : 63841.999999999985,
          "standardDeviation" : 95.44488429421828
        }, {
          "mean" : 130.94656488549634,
          "variance" : 62609.933361894335,
          "n" : 393,
          "max" : 4796.0,
          "min" : 35.0,
          "sum" : 51462.000000000065,
          "standardDeviation" : 250.21977012597213
        }, {
          "mean" : 197.87700534759358,
          "variance" : 393074.6926065577,
          "n" : 374,
          "max" : 10189.0,
          "min" : 36.0,
          "sum" : 74006.0,
          "standardDeviation" : 626.956691172969
        }, {
          "mean" : 148.2849872773539,
          "variance" : 15459.474697512589,
          "n" : 393,
          "max" : 1170.0,
          "min" : 34.0,
          "sum" : 58276.00000000009,
          "standardDeviation" : 124.33613592802612
        }, {
          "mean" : 136.41136363636366,
          "variance" : 11374.880508386836,
          "n" : 440,
          "max" : 630.0,
          "min" : 34.0,
          "sum" : 60021.00000000001,
          "standardDeviation" : 106.65308485171367
        }, {
          "mean" : 98.37193763919818,
          "variance" : 7890.841264317535,
          "n" : 449,
          "max" : 677.0,
          "min" : 28.0,
          "sum" : 44168.999999999985,
          "standardDeviation" : 88.83040731820121
        }, {
          "mean" : 104.09395973154366,
          "variance" : 537014.5427212814,
          "n" : 447,
          "max" : 11653.0,
          "min" : 26.0,
          "sum" : 46530.000000000015,
          "standardDeviation" : 732.8127610251348
        }, {
          "mean" : 55.058201058201064,
          "variance" : 981.8529775976587,
          "n" : 189,
          "max" : 250.0,
          "min" : 27.0,
          "sum" : 10406.000000000002,
          "standardDeviation" : 31.334533307481358
        } ],
        "16" : [ {
          "mean" : 348.6828282828282,
          "variance" : 2022586.4882672916,
          "n" : 490,
          "max" : 27610.0,
          "min" : 35.0,
          "sum" : 170854.58585858584,
          "standardDeviation" : 1422.1766726631722
        }, {
          "mean" : 129.94819819819836,
          "variance" : 7959.065030606221,
          "n" : 444,
          "max" : 593.0,
          "min" : 35.0,
          "sum" : 57697.00000000007,
          "standardDeviation" : 89.21359218530672
        }, {
          "mean" : 106.70496083550916,
          "variance" : 4707.910106215742,
          "n" : 383,
          "max" : 473.0,
          "min" : 35.0,
          "sum" : 40868.00000000001,
          "standardDeviation" : 68.61421212996432
        }, {
          "mean" : 165.15466666666674,
          "variance" : 264871.195265597,
          "n" : 375,
          "max" : 9923.0,
          "min" : 36.0,
          "sum" : 61933.00000000003,
          "standardDeviation" : 514.6563856259796
        }, {
          "mean" : 142.3832923832924,
          "variance" : 13245.236961547318,
          "n" : 407,
          "max" : 728.0,
          "min" : 35.0,
          "sum" : 57950.00000000001,
          "standardDeviation" : 115.08795315560755
        }, {
          "mean" : 127.03233830845774,
          "variance" : 8824.44034813463,
          "n" : 402,
          "max" : 794.0,
          "min" : 35.0,
          "sum" : 51067.000000000015,
          "standardDeviation" : 93.93849236673235
        }, {
          "mean" : 79.93763919821828,
          "variance" : 4070.1657453070293,
          "n" : 449,
          "max" : 500.0,
          "min" : 27.0,
          "sum" : 35892.00000000001,
          "standardDeviation" : 63.7978506323452
        }, {
          "mean" : 57.13901345291481,
          "variance" : 661.9626543054367,
          "n" : 446,
          "max" : 295.0,
          "min" : 26.0,
          "sum" : 25484.000000000004,
          "standardDeviation" : 25.728634909482405
        }, {
          "mean" : 57.698324022346384,
          "variance" : 504.98713200677895,
          "n" : 179,
          "max" : 217.0,
          "min" : 26.0,
          "sum" : 10328.000000000002,
          "standardDeviation" : 22.47191874332895
        } ],
        "17" : [ {
          "mean" : 242.98399999999995,
          "variance" : 429153.9917274549,
          "n" : 495,
          "max" : 11612.0,
          "min" : 55.0,
          "sum" : 120277.07999999997,
          "standardDeviation" : 655.0984595673042
        }, {
          "mean" : 85.65393794749409,
          "variance" : 1257.1024425894423,
          "n" : 419,
          "max" : 372.0,
          "min" : 33.0,
          "sum" : 35889.00000000002,
          "standardDeviation" : 35.45564049046981
        }, {
          "mean" : 129.0347593582888,
          "variance" : 205356.1516035611,
          "n" : 374,
          "max" : 8760.0,
          "min" : 32.0,
          "sum" : 48259.00000000001,
          "standardDeviation" : 453.16238988199484
        }, {
          "mean" : 159.48509485094857,
          "variance" : 17245.277630493678,
          "n" : 369,
          "max" : 810.0,
          "min" : 36.0,
          "sum" : 58850.00000000002,
          "standardDeviation" : 131.3212763816042
        }, {
          "mean" : 158.3772151898736,
          "variance" : 18253.311662275908,
          "n" : 395,
          "max" : 635.0,
          "min" : 35.0,
          "sum" : 62559.00000000007,
          "standardDeviation" : 135.1048173170591
        }, {
          "mean" : 148.9794520547946,
          "variance" : 16342.27188802858,
          "n" : 438,
          "max" : 786.0,
          "min" : 35.0,
          "sum" : 65253.00000000003,
          "standardDeviation" : 127.83689564452267
        }, {
          "mean" : 158.08433734939746,
          "variance" : 252623.48320819516,
          "n" : 415,
          "max" : 10122.0,
          "min" : 34.0,
          "sum" : 65604.99999999994,
          "standardDeviation" : 502.61663642203007
        }, {
          "mean" : 163.95309168443504,
          "variance" : 407006.86104277166,
          "n" : 469,
          "max" : 13725.0,
          "min" : 34.0,
          "sum" : 76894.00000000003,
          "standardDeviation" : 637.9708935702096
        }, {
          "mean" : 185.50746268656718,
          "variance" : 518370.09119402966,
          "n" : 201,
          "max" : 10230.0,
          "min" : 35.0,
          "sum" : 37287.0,
          "standardDeviation" : 719.9792296962668
        } ],
        "18" : [ {
          "mean" : 279.7190476190476,
          "variance" : 433788.2025002842,
          "n" : 415,
          "max" : 13372.0,
          "min" : 76.0,
          "sum" : 116083.40476190476,
          "standardDeviation" : 658.6259959189921
        }, {
          "mean" : 156.84302325581396,
          "variance" : 211560.73841725,
          "n" : 516,
          "max" : 10410.0,
          "min" : 35.0,
          "sum" : 80931.0,
          "standardDeviation" : 459.95732238681666
        }, {
          "mean" : 116.02110817941958,
          "variance" : 6252.174156440651,
          "n" : 379,
          "max" : 505.0,
          "min" : 34.0,
          "sum" : 43972.00000000002,
          "standardDeviation" : 79.07069088126555
        }, {
          "mean" : 157.50000000000006,
          "variance" : 15522.484415584413,
          "n" : 386,
          "max" : 889.0,
          "min" : 34.0,
          "sum" : 60795.00000000002,
          "standardDeviation" : 124.58926284228674
        }, {
          "mean" : 157.88192771084326,
          "variance" : 20290.867667772534,
          "n" : 415,
          "max" : 926.0,
          "min" : 35.0,
          "sum" : 65520.99999999995,
          "standardDeviation" : 142.44601667920566
        }, {
          "mean" : 146.51597051597042,
          "variance" : 16886.7577492405,
          "n" : 407,
          "max" : 837.0,
          "min" : 35.0,
          "sum" : 59631.99999999996,
          "standardDeviation" : 129.94905828531617
        }, {
          "mean" : 101.19532908704895,
          "variance" : 9494.680914306362,
          "n" : 471,
          "max" : 802.0,
          "min" : 27.0,
          "sum" : 47663.00000000005,
          "standardDeviation" : 97.440653293717
        }, {
          "mean" : 56.56416464891043,
          "variance" : 632.8144408660286,
          "n" : 413,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 23361.000000000007,
          "standardDeviation" : 25.15580332380639
        }, {
          "mean" : 60.260115606936424,
          "variance" : 573.1005511493482,
          "n" : 173,
          "max" : 258.0,
          "min" : 28.0,
          "sum" : 10425.000000000002,
          "standardDeviation" : 23.939518607301782
        } ],
        "19" : [ {
          "mean" : 340.6182669789227,
          "variance" : 1027218.0957218714,
          "n" : 422,
          "max" : 17889.0,
          "min" : 69.0,
          "sum" : 143740.90866510538,
          "standardDeviation" : 1013.5176839709662
        }, {
          "mean" : 135.25155925155934,
          "variance" : 8305.255336105338,
          "n" : 481,
          "max" : 602.0,
          "min" : 34.0,
          "sum" : 65056.000000000044,
          "standardDeviation" : 91.13317363125975
        }, {
          "mean" : 121.59580052493438,
          "variance" : 6797.525666528534,
          "n" : 381,
          "max" : 790.0,
          "min" : 34.0,
          "sum" : 46328.0,
          "standardDeviation" : 82.44710829694716
        }, {
          "mean" : 182.6114130434781,
          "variance" : 253041.05022361115,
          "n" : 368,
          "max" : 9504.0,
          "min" : 35.0,
          "sum" : 67200.99999999994,
          "standardDeviation" : 503.03185806031325
        }, {
          "mean" : 158.234693877551,
          "variance" : 17580.492092489185,
          "n" : 392,
          "max" : 733.0,
          "min" : 34.0,
          "sum" : 62027.99999999999,
          "standardDeviation" : 132.59144803677643
        }, {
          "mean" : 169.3419203747071,
          "variance" : 223257.3945531111,
          "n" : 427,
          "max" : 9522.0,
          "min" : 35.0,
          "sum" : 72308.99999999993,
          "standardDeviation" : 472.50121116576105
        }, {
          "mean" : 102.00985221674877,
          "variance" : 8636.355458249709,
          "n" : 406,
          "max" : 737.0,
          "min" : 27.0,
          "sum" : 41416.0,
          "standardDeviation" : 92.93199372793909
        }, {
          "mean" : 55.5490196078431,
          "variance" : 488.91625995376313,
          "n" : 459,
          "max" : 289.0,
          "min" : 27.0,
          "sum" : 25496.99999999998,
          "standardDeviation" : 22.11145087853267
        }, {
          "mean" : 59.53556485355648,
          "variance" : 805.4094441123729,
          "n" : 239,
          "max" : 254.0,
          "min" : 28.0,
          "sum" : 14228.999999999998,
          "standardDeviation" : 28.37973650533727
        } ],
        "20" : [ {
          "mean" : 364.80940594059405,
          "variance" : 1428901.8072562225,
          "n" : 399,
          "max" : 16912.0,
          "min" : 35.0,
          "sum" : 145558.95297029702,
          "standardDeviation" : 1195.3668086642788
        }, {
          "mean" : 147.11977186311793,
          "variance" : 8794.951341662145,
          "n" : 526,
          "max" : 782.0,
          "min" : 36.0,
          "sum" : 77385.00000000003,
          "standardDeviation" : 93.7814018964429
        }, {
          "mean" : 118.30081300813008,
          "variance" : 6648.02611346765,
          "n" : 369,
          "max" : 552.0,
          "min" : 36.0,
          "sum" : 43653.0,
          "standardDeviation" : 81.53542857842626
        }, {
          "mean" : 169.8316326530612,
          "variance" : 266515.2656975833,
          "n" : 392,
          "max" : 10163.0,
          "min" : 35.0,
          "sum" : 66574.0,
          "standardDeviation" : 516.2511653232207
        }, {
          "mean" : 158.4611398963731,
          "variance" : 13194.789395060909,
          "n" : 386,
          "max" : 727.0,
          "min" : 35.0,
          "sum" : 61166.00000000002,
          "standardDeviation" : 114.86857444514975
        }, {
          "mean" : 148.32167832167812,
          "variance" : 16018.844879419647,
          "n" : 429,
          "max" : 753.0,
          "min" : 35.0,
          "sum" : 63629.99999999991,
          "standardDeviation" : 126.56557541219352
        }, {
          "mean" : 99.38875878220139,
          "variance" : 8044.19123484073,
          "n" : 427,
          "max" : 537.0,
          "min" : 25.0,
          "sum" : 42438.99999999999,
          "standardDeviation" : 89.68941540026186
        }, {
          "mean" : 56.798687089715536,
          "variance" : 945.7971035356449,
          "n" : 457,
          "max" : 408.0,
          "min" : 27.0,
          "sum" : 25957.0,
          "standardDeviation" : 30.75381445505004
        }, {
          "mean" : 59.87368421052632,
          "variance" : 1300.5130604288493,
          "n" : 190,
          "max" : 315.0,
          "min" : 26.0,
          "sum" : 11376.000000000002,
          "standardDeviation" : 36.06262692080056
        } ],
        "21" : [ {
          "mean" : 399.7701421800947,
          "variance" : 2393253.6643795515,
          "n" : 417,
          "max" : 29061.0,
          "min" : 66.0,
          "sum" : 166704.1492890995,
          "standardDeviation" : 1547.0144357372853
        }, {
          "mean" : 157.94154488517742,
          "variance" : 14752.189044470264,
          "n" : 479,
          "max" : 1012.0,
          "min" : 38.0,
          "sum" : 75653.99999999999,
          "standardDeviation" : 121.45858983402641
        }, {
          "mean" : 143.00787401574803,
          "variance" : 10917.723622047242,
          "n" : 381,
          "max" : 631.0,
          "min" : 34.0,
          "sum" : 54486.0,
          "standardDeviation" : 104.48791136800105
        }, {
          "mean" : 130.39178082191765,
          "variance" : 9266.233448743029,
          "n" : 365,
          "max" : 700.0,
          "min" : 30.0,
          "sum" : 47592.99999999994,
          "standardDeviation" : 96.26127699518135
        }, {
          "mean" : 193.71875,
          "variance" : 239699.72748041793,
          "n" : 384,
          "max" : 9400.0,
          "min" : 35.0,
          "sum" : 74388.0,
          "standardDeviation" : 489.59138828253293
        }, {
          "mean" : 169.10779816513738,
          "variance" : 247518.6113413477,
          "n" : 436,
          "max" : 10118.0,
          "min" : 34.0,
          "sum" : 73730.9999999999,
          "standardDeviation" : 497.5124233035269
        }, {
          "mean" : 108.95214105793444,
          "variance" : 11592.166895656821,
          "n" : 397,
          "max" : 613.0,
          "min" : 27.0,
          "sum" : 43253.99999999997,
          "standardDeviation" : 107.66692572771278
        }, {
          "mean" : 56.98198198198202,
          "variance" : 791.6746181847764,
          "n" : 444,
          "max" : 380.0,
          "min" : 27.0,
          "sum" : 25300.000000000015,
          "standardDeviation" : 28.13671299538694
        }, {
          "mean" : 77.80147058823523,
          "variance" : 74215.65785760798,
          "n" : 272,
          "max" : 4537.0,
          "min" : 27.0,
          "sum" : 21161.99999999998,
          "standardDeviation" : 272.4255088232524
        } ],
        "22" : [ {
          "mean" : 380.80909090909097,
          "variance" : 1117080.6286187612,
          "n" : 435,
          "max" : 15649.0,
          "min" : 53.0,
          "sum" : 165651.95454545456,
          "standardDeviation" : 1056.9203511233763
        }, {
          "mean" : 159.1902748414376,
          "variance" : 190921.5060916615,
          "n" : 473,
          "max" : 9447.0,
          "min" : 35.0,
          "sum" : 75296.99999999999,
          "standardDeviation" : 436.94565576472036
        }, {
          "mean" : 158.30708661417336,
          "variance" : 275884.4712391212,
          "n" : 381,
          "max" : 10207.0,
          "min" : 34.0,
          "sum" : 60315.00000000005,
          "standardDeviation" : 525.2470573350423
        }, {
          "mean" : 183.21372031662264,
          "variance" : 406330.1049964397,
          "n" : 379,
          "max" : 12321.0,
          "min" : 35.0,
          "sum" : 69437.99999999999,
          "standardDeviation" : 637.4402756309329
        }, {
          "mean" : 188.53488372093034,
          "variance" : 286476.51885769365,
          "n" : 387,
          "max" : 10278.0,
          "min" : 34.0,
          "sum" : 72963.00000000004,
          "standardDeviation" : 535.2350127352411
        }, {
          "mean" : 134.8475336322871,
          "variance" : 11260.147488285385,
          "n" : 446,
          "max" : 842.0,
          "min" : 35.0,
          "sum" : 60142.00000000005,
          "standardDeviation" : 106.11384211442626
        }, {
          "mean" : 90.90046296296296,
          "variance" : 6857.031832731798,
          "n" : 432,
          "max" : 585.0,
          "min" : 27.0,
          "sum" : 39269.0,
          "standardDeviation" : 82.80719674479869
        }, {
          "mean" : 77.88596491228067,
          "variance" : 243954.8529014845,
          "n" : 456,
          "max" : 10588.0,
          "min" : 26.0,
          "sum" : 35515.999999999985,
          "standardDeviation" : 493.917860480348
        }, {
          "mean" : 57.28494623655914,
          "variance" : 538.4318802673641,
          "n" : 186,
          "max" : 127.0,
          "min" : 28.0,
          "sum" : 10655.0,
          "standardDeviation" : 23.204134982096708
        } ],
        "23" : [ {
          "mean" : 400.7082405345208,
          "variance" : 4197815.483882839,
          "n" : 444,
          "max" : 35739.0,
          "min" : 63.0,
          "sum" : 177914.45879732724,
          "standardDeviation" : 2048.857116512237
        }, {
          "mean" : 106.9064449064449,
          "variance" : 3642.07247920998,
          "n" : 481,
          "max" : 440.0,
          "min" : 34.0,
          "sum" : 51422.0,
          "standardDeviation" : 60.34958557612455
        }, {
          "mean" : 101.99184782608701,
          "variance" : 2777.0707780476205,
          "n" : 368,
          "max" : 345.0,
          "min" : 36.0,
          "sum" : 37533.00000000002,
          "standardDeviation" : 52.69792005428317
        }, {
          "mean" : 129.40109890109895,
          "variance" : 8072.643084188539,
          "n" : 364,
          "max" : 686.0,
          "min" : 34.0,
          "sum" : 47102.000000000015,
          "standardDeviation" : 89.84788859059816
        }, {
          "mean" : 165.15681233933188,
          "variance" : 266701.68410940014,
          "n" : 389,
          "max" : 10104.0,
          "min" : 35.0,
          "sum" : 64246.0000000001,
          "standardDeviation" : 516.4316838744503
        }, {
          "mean" : 128.73672055427258,
          "variance" : 10138.73144940552,
          "n" : 433,
          "max" : 721.0,
          "min" : 34.0,
          "sum" : 55743.00000000003,
          "standardDeviation" : 100.69126798985859
        }, {
          "mean" : 86.83173076923077,
          "variance" : 5388.376436515289,
          "n" : 416,
          "max" : 704.0,
          "min" : 27.0,
          "sum" : 36122.0,
          "standardDeviation" : 73.40556134595859
        }, {
          "mean" : 59.25862068965517,
          "variance" : 794.9740075966337,
          "n" : 464,
          "max" : 387.0,
          "min" : 27.0,
          "sum" : 27495.999999999996,
          "standardDeviation" : 28.195283428201847
        }, {
          "mean" : 64.60648148148147,
          "variance" : 1030.7048880275624,
          "n" : 216,
          "max" : 259.0,
          "min" : 27.0,
          "sum" : 13954.999999999996,
          "standardDeviation" : 32.10459294287287
        } ],
        "24" : [ {
          "mean" : 539.6269662921346,
          "variance" : 1.7021409671343245E7,
          "n" : 440,
          "max" : 77694.0,
          "min" : 64.0,
          "sum" : 237435.86516853923,
          "standardDeviation" : 4125.701112701118
        }, {
          "mean" : 163.8,
          "variance" : 11364.329752066114,
          "n" : 485,
          "max" : 640.0,
          "min" : 36.0,
          "sum" : 79443.0,
          "standardDeviation" : 106.60361040821326
        }, {
          "mean" : 155.95121951219514,
          "variance" : 12116.709570519608,
          "n" : 369,
          "max" : 920.0,
          "min" : 35.0,
          "sum" : 57546.00000000001,
          "standardDeviation" : 110.07592638955899
        }, {
          "mean" : 147.26799007444166,
          "variance" : 9233.141933014826,
          "n" : 403,
          "max" : 536.0,
          "min" : 35.0,
          "sum" : 59348.999999999985,
          "standardDeviation" : 96.08923942364632
        }, {
          "mean" : 185.38834951456315,
          "variance" : 21243.235679021098,
          "n" : 412,
          "max" : 971.0,
          "min" : 34.0,
          "sum" : 76380.00000000001,
          "standardDeviation" : 145.75059409491647
        }, {
          "mean" : 162.09046454767704,
          "variance" : 15504.866796107199,
          "n" : 409,
          "max" : 674.0,
          "min" : 34.0,
          "sum" : 66294.99999999991,
          "standardDeviation" : 124.51853996938448
        }, {
          "mean" : 118.23858921161847,
          "variance" : 14509.799505697856,
          "n" : 482,
          "max" : 855.0,
          "min" : 27.0,
          "sum" : 56991.0000000001,
          "standardDeviation" : 120.45662914799607
        }, {
          "mean" : 58.611111111111136,
          "variance" : 330.0306610407877,
          "n" : 396,
          "max" : 140.0,
          "min" : 27.0,
          "sum" : 23210.00000000001,
          "standardDeviation" : 18.166746022356005
        }, {
          "mean" : 59.97206703910614,
          "variance" : 432.25202435503087,
          "n" : 179,
          "max" : 103.0,
          "min" : 27.0,
          "sum" : 10735.0,
          "standardDeviation" : 20.790671570563344
        } ],
        "25" : [ {
          "mean" : 286.70171673819704,
          "variance" : 589886.4119110244,
          "n" : 461,
          "max" : 12850.0,
          "min" : 65.0,
          "sum" : 132169.49141630883,
          "standardDeviation" : 768.0406316797468
        }, {
          "mean" : 121.19580419580417,
          "variance" : 4379.1017580550315,
          "n" : 429,
          "max" : 434.0,
          "min" : 34.0,
          "sum" : 51992.99999999999,
          "standardDeviation" : 66.17478188898723
        }, {
          "mean" : 106.14666666666666,
          "variance" : 3602.911586452765,
          "n" : 375,
          "max" : 651.0,
          "min" : 35.0,
          "sum" : 39805.0,
          "standardDeviation" : 60.024258316557024
        }, {
          "mean" : 122.30104712041884,
          "variance" : 7495.701783677564,
          "n" : 382,
          "max" : 712.0,
          "min" : 34.0,
          "sum" : 46719.0,
          "standardDeviation" : 86.5777210584661
        }, {
          "mean" : 161.32124352331618,
          "variance" : 241545.21082026782,
          "n" : 386,
          "max" : 9623.0,
          "min" : 35.0,
          "sum" : 62270.000000000044,
          "standardDeviation" : 491.47249243499664
        }, {
          "mean" : 119.95871559633026,
          "variance" : 7073.1936939786965,
          "n" : 436,
          "max" : 533.0,
          "min" : 35.0,
          "sum" : 52301.99999999999,
          "standardDeviation" : 84.10228114610624
        }, {
          "mean" : 119.31764705882345,
          "variance" : 257718.26914539395,
          "n" : 425,
          "max" : 10458.0,
          "min" : 27.0,
          "sum" : 50709.99999999997,
          "standardDeviation" : 507.6595996781642
        }, {
          "mean" : 54.66742081447963,
          "variance" : 395.927689024328,
          "n" : 442,
          "max" : 119.0,
          "min" : 28.0,
          "sum" : 24162.999999999996,
          "standardDeviation" : 19.897931777557385
        }, {
          "mean" : 57.04602510460253,
          "variance" : 536.4306458985267,
          "n" : 239,
          "max" : 241.0,
          "min" : 27.0,
          "sum" : 13634.000000000004,
          "standardDeviation" : 23.160972473074757
        } ],
        "26" : [ {
          "mean" : 346.10580912863105,
          "variance" : 2062728.9264110893,
          "n" : 477,
          "max" : 23603.0,
          "min" : 35.0,
          "sum" : 165092.470954357,
          "standardDeviation" : 1436.2203613690656
        }, {
          "mean" : 163.71145374449327,
          "variance" : 209121.2476830914,
          "n" : 454,
          "max" : 9688.0,
          "min" : 36.0,
          "sum" : 74324.99999999994,
          "standardDeviation" : 457.2977669780287
        }, {
          "mean" : 116.89256198347104,
          "variance" : 5018.598922423634,
          "n" : 363,
          "max" : 593.0,
          "min" : 36.0,
          "sum" : 42431.999999999985,
          "standardDeviation" : 70.84207028612047
        }, {
          "mean" : 142.3250688705235,
          "variance" : 12385.115032799116,
          "n" : 363,
          "max" : 937.0,
          "min" : 35.0,
          "sum" : 51664.00000000003,
          "standardDeviation" : 111.28843171147267
        }, {
          "mean" : 155.28354430379738,
          "variance" : 14399.40163207606,
          "n" : 395,
          "max" : 746.0,
          "min" : 35.0,
          "sum" : 61336.99999999996,
          "standardDeviation" : 119.9975067744162
        }, {
          "mean" : 138.68764044943816,
          "variance" : 13762.949509059623,
          "n" : 445,
          "max" : 639.0,
          "min" : 35.0,
          "sum" : 61715.999999999985,
          "standardDeviation" : 117.31559789328793
        }, {
          "mean" : 105.21250000000005,
          "variance" : 8404.744204260644,
          "n" : 400,
          "max" : 707.0,
          "min" : 26.0,
          "sum" : 42085.00000000002,
          "standardDeviation" : 91.67739200184876
        }, {
          "mean" : 58.15118790496765,
          "variance" : 667.3147550793346,
          "n" : 463,
          "max" : 241.0,
          "min" : 14.0,
          "sum" : 26924.000000000022,
          "standardDeviation" : 25.832436104234045
        }, {
          "mean" : 69.43981481481484,
          "variance" : 1684.4614771748493,
          "n" : 216,
          "max" : 441.0,
          "min" : 28.0,
          "sum" : 14999.000000000005,
          "standardDeviation" : 41.04219142754014
        } ],
        "27" : [ {
          "mean" : 406.59999999999997,
          "variance" : 1531912.8706443917,
          "n" : 415,
          "max" : 16041.0,
          "min" : 62.0,
          "sum" : 168739.0,
          "standardDeviation" : 1237.70467828331
        }, {
          "mean" : 151.06736842105275,
          "variance" : 9530.674776815453,
          "n" : 475,
          "max" : 641.0,
          "min" : 36.0,
          "sum" : 71757.00000000006,
          "standardDeviation" : 97.62517491311067
        }, {
          "mean" : 127.536,
          "variance" : 8056.179850267381,
          "n" : 375,
          "max" : 798.0,
          "min" : 35.0,
          "sum" : 47826.0,
          "standardDeviation" : 89.75622457672438
        }, {
          "mean" : 205.20942408376953,
          "variance" : 551928.7801734204,
          "n" : 382,
          "max" : 10318.0,
          "min" : 35.0,
          "sum" : 78389.99999999996,
          "standardDeviation" : 742.9190939620682
        }, {
          "mean" : 154.62720403022678,
          "variance" : 15176.653601506243,
          "n" : 397,
          "max" : 771.0,
          "min" : 35.0,
          "sum" : 61387.00000000003,
          "standardDeviation" : 123.19356152618627
        }, {
          "mean" : 145.66046511627903,
          "variance" : 15424.280717731892,
          "n" : 430,
          "max" : 988.0,
          "min" : 35.0,
          "sum" : 62633.999999999985,
          "standardDeviation" : 124.19452772860764
        }, {
          "mean" : 153.91294117647078,
          "variance" : 444629.4381576027,
          "n" : 425,
          "max" : 10178.0,
          "min" : 27.0,
          "sum" : 65413.00000000008,
          "standardDeviation" : 666.8053975168488
        }, {
          "mean" : 53.55387931034484,
          "variance" : 491.7508704476059,
          "n" : 464,
          "max" : 247.0,
          "min" : 27.0,
          "sum" : 24849.000000000007,
          "standardDeviation" : 22.175456487919384
        }, {
          "mean" : 57.24528301886792,
          "variance" : 733.0201198247337,
          "n" : 212,
          "max" : 296.0,
          "min" : 27.0,
          "sum" : 12136.0,
          "standardDeviation" : 27.07434431015336
        } ],
        "28" : [ {
          "mean" : 314.11309523809524,
          "variance" : 2427416.7645200263,
          "n" : 499,
          "max" : 32698.0,
          "min" : 60.0,
          "sum" : 156742.43452380953,
          "standardDeviation" : 1558.0169333226215
        }, {
          "mean" : 128.75514874141876,
          "variance" : 8595.584405769105,
          "n" : 437,
          "max" : 668.0,
          "min" : 36.0,
          "sum" : 56266.0,
          "standardDeviation" : 92.7123746096987
        }, {
          "mean" : 118.94402035623405,
          "variance" : 7039.226450122035,
          "n" : 393,
          "max" : 518.0,
          "min" : 35.0,
          "sum" : 46744.99999999998,
          "standardDeviation" : 83.90009803404305
        }, {
          "mean" : 154.17391304347825,
          "variance" : 14035.054140504688,
          "n" : 368,
          "max" : 694.0,
          "min" : 38.0,
          "sum" : 56736.0,
          "standardDeviation" : 118.46963383291386
        }, {
          "mean" : 142.76201923076928,
          "variance" : 14409.805879286365,
          "n" : 416,
          "max" : 675.0,
          "min" : 33.0,
          "sum" : 59389.00000000002,
          "standardDeviation" : 120.04085087705087
        }, {
          "mean" : 129.86893203883494,
          "variance" : 13269.481562846957,
          "n" : 412,
          "max" : 673.0,
          "min" : 34.0,
          "sum" : 53505.99999999999,
          "standardDeviation" : 115.19323575126691
        }, {
          "mean" : 113.59081419624202,
          "variance" : 221191.71506188816,
          "n" : 479,
          "max" : 10202.0,
          "min" : 27.0,
          "sum" : 54409.99999999993,
          "standardDeviation" : 470.31023278458247
        }, {
          "mean" : 80.08313539192396,
          "variance" : 251368.94307205093,
          "n" : 421,
          "max" : 10331.0,
          "min" : 28.0,
          "sum" : 33714.999999999985,
          "standardDeviation" : 501.36707418023667
        }, {
          "mean" : 120.85999999999997,
          "variance" : 640154.6849664431,
          "n" : 150,
          "max" : 9850.0,
          "min" : 27.0,
          "sum" : 18128.999999999996,
          "standardDeviation" : 800.096672263073
        } ],
        "29" : [ {
          "mean" : 352.13211845102524,
          "variance" : 1636455.3523678752,
          "n" : 434,
          "max" : 18762.0,
          "min" : 36.0,
          "sum" : 152825.33940774496,
          "standardDeviation" : 1279.2401464806658
        }, {
          "mean" : 158.7556008146639,
          "variance" : 199380.89933081198,
          "n" : 491,
          "max" : 9823.0,
          "min" : 35.0,
          "sum" : 77948.99999999997,
          "standardDeviation" : 446.5208834207108
        }, {
          "mean" : 130.7692307692309,
          "variance" : 8422.420428056797,
          "n" : 364,
          "max" : 857.0,
          "min" : 38.0,
          "sum" : 47600.000000000044,
          "standardDeviation" : 91.77374585390311
        }, {
          "mean" : 138.9895013123359,
          "variance" : 121018.3525210665,
          "n" : 381,
          "max" : 6679.0,
          "min" : 35.0,
          "sum" : 52954.99999999998,
          "standardDeviation" : 347.87692151257534
        }, {
          "mean" : 174.28831168831178,
          "variance" : 79470.14322240255,
          "n" : 385,
          "max" : 5151.0,
          "min" : 35.0,
          "sum" : 67101.00000000003,
          "standardDeviation" : 281.9044930865816
        }, {
          "mean" : 134.358744394619,
          "variance" : 12304.576631228896,
          "n" : 446,
          "max" : 785.0,
          "min" : 35.0,
          "sum" : 59924.00000000008,
          "standardDeviation" : 110.92599619218615
        }, {
          "mean" : 97.1492204899776,
          "variance" : 7874.118308542784,
          "n" : 449,
          "max" : 514.0,
          "min" : 27.0,
          "sum" : 43619.99999999994,
          "standardDeviation" : 88.73622883886144
        }, {
          "mean" : 54.98654708520179,
          "variance" : 458.45375119665385,
          "n" : 446,
          "max" : 229.0,
          "min" : 27.0,
          "sum" : 24524.0,
          "standardDeviation" : 21.41153313512729
        }, {
          "mean" : 53.69273743016761,
          "variance" : 346.2702278576359,
          "n" : 179,
          "max" : 99.0,
          "min" : 26.0,
          "sum" : 9611.000000000002,
          "standardDeviation" : 18.608337589844933
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultEdgeData#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.DefaultEdgeData.<init>()",
    "otherKiekerPattern" : "public int org.gradoop.model.impl.LogicalGraphProjectionTest$VertexComparator.compare(org.gradoop.model.impl.DefaultVertexData,org.gradoop.model.impl.DefaultVertexData)",
    "module" : "gradoop-core",
    "name" : "DefaultEdgeData#<init>",
    "key" : "org.gradoop.model.impl.DefaultEdgeData.<init>_",
    "otherKey" : "org.gradoop.model.impl.LogicalGraphProjectionTest$VertexComparator.compare_DefaultVertexData_DefaultVertexData",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 155.85005172308527,
      "meanCurrent" : 1815.432857142857,
      "deviationOld" : 84.34224106831299,
      "deviationCurrent" : 304.9816389990297,
      "vms" : 29,
      "callsOld" : 104251,
      "calls" : 1050,
      "tvalue" : -28.69139914285476,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 203.3291593043673,
    "inVMDeviation" : 967.2695672565566,
    "ess" : 1,
    "values" : [ 2074.9833333333336, 1782.3714285714286, 1948.4857142857143, 1711.1857142857143, 1417.9392857142857, 1942.0857142857142, 1902.9, 1848.6, 2080.1714285714284, 1497.0357142857142, 1469.7428571428572, 2360.8023809523806, 2480.6285714285714, 1540.9785714285715, 1581.5142857142857, 1442.2428571428572, 1699.9285714285713, 1906.175, 2250.1714285714284, 2332.092857142857, 1824.6999999999998, 1738.3000000000002, 1903.3142857142857, 1656.3714285714286, 1457.8285714285714, 1874.4714285714285, 1392.2928571428572, 1394.2857142857142, 2151.292857142857, 1800.0928571428572 ],
    "valuesPredecessor" : [ 723.339148959902, 139.80321252432014, 129.75255420838153, 143.26657341639884, 116.47394192418086, 120.45035897999159, 131.69444340710635, 345.881696849417, 125.3789376069477, 131.19726796340709, 132.49045850876902, 133.50309054139177, 137.32566483875843, 133.35393971321795, 397.8052768947632, 116.69958958024422, 121.28597601918463, 141.28345626656574, 124.37569308025742, 118.21437072564167, 129.68697271338937, 126.77603749061821, 138.22022667712702, 443.58923013313444, 114.52171323406392, 114.64859029023923, 122.62410961862051, 126.57798451315287, 137.19998182506632, 125.57015042511452 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 2968.9166666666674,
          "variance" : 9185489.71969697,
          "n" : 7,
          "max" : 11900.0,
          "min" : 987.0,
          "sum" : 20782.41666666667,
          "standardDeviation" : 3030.7572848542277
        }, {
          "mean" : 1270.75,
          "variance" : 490455.9285714285,
          "n" : 8,
          "max" : 2182.0,
          "min" : 448.0,
          "sum" : 10166.0,
          "standardDeviation" : 700.3255875458418
        }, {
          "mean" : 2419.5,
          "variance" : 1.5078752571428569E7,
          "n" : 8,
          "max" : 11905.0,
          "min" : 389.0,
          "sum" : 19356.0,
          "standardDeviation" : 3883.136949867796
        }, {
          "mean" : 1989.1000000000001,
          "variance" : 1.1333230544444446E7,
          "n" : 10,
          "max" : 11435.0,
          "min" : 370.0,
          "sum" : 19891.0,
          "standardDeviation" : 3366.486379661211
        }, {
          "mean" : 1214.5,
          "variance" : 527364.4999999999,
          "n" : 2,
          "max" : 1728.0,
          "min" : 701.0,
          "sum" : 2429.0,
          "standardDeviation" : 726.1986642785843
        } ],
        "1" : [ {
          "mean" : 3014.6,
          "variance" : 1.075196648888889E7,
          "n" : 5,
          "max" : 12089.0,
          "min" : 1000.0,
          "sum" : 15073.0,
          "standardDeviation" : 3279.019135181875
        }, {
          "mean" : 2290.6,
          "variance" : 1.0927905822222225E7,
          "n" : 10,
          "max" : 11449.0,
          "min" : 446.0,
          "sum" : 22906.0,
          "standardDeviation" : 3305.738317263214
        }, {
          "mean" : 1459.125,
          "variance" : 647979.5535714285,
          "n" : 8,
          "max" : 2825.0,
          "min" : 537.0,
          "sum" : 11673.0,
          "standardDeviation" : 804.9717719096916
        }, {
          "mean" : 1171.875,
          "variance" : 275679.5535714285,
          "n" : 8,
          "max" : 1747.0,
          "min" : 528.0,
          "sum" : 9375.0,
          "standardDeviation" : 525.051953211707
        }, {
          "mean" : 839.0,
          "variance" : 267848.66666666674,
          "n" : 4,
          "max" : 1300.0,
          "min" : 377.0,
          "sum" : 3356.0,
          "standardDeviation" : 517.5409806640115
        } ],
        "2" : [ {
          "mean" : 2620.6,
          "variance" : 8774026.48888889,
          "n" : 5,
          "max" : 10792.0,
          "min" : 713.0,
          "sum" : 13103.0,
          "standardDeviation" : 2962.0983253242775
        }, {
          "mean" : 2114.8,
          "variance" : 1.0270143288888888E7,
          "n" : 10,
          "max" : 11084.0,
          "min" : 343.0,
          "sum" : 21148.0,
          "standardDeviation" : 3204.706427878986
        }, {
          "mean" : 1250.125,
          "variance" : 594816.6964285714,
          "n" : 8,
          "max" : 2297.0,
          "min" : 412.0,
          "sum" : 10001.0,
          "standardDeviation" : 771.2436038169596
        }, {
          "mean" : 2101.4,
          "variance" : 1.174091426666667E7,
          "n" : 10,
          "max" : 11686.0,
          "min" : 376.0,
          "sum" : 21014.0,
          "standardDeviation" : 3426.5017534895073
        }, {
          "mean" : 1465.5,
          "variance" : 1419612.5,
          "n" : 2,
          "max" : 2308.0,
          "min" : 623.0,
          "sum" : 2931.0,
          "standardDeviation" : 1191.4749262993325
        } ],
        "3" : [ {
          "mean" : 3454.6999999999994,
          "variance" : 1.1295313566666666E7,
          "n" : 5,
          "max" : 12278.0,
          "min" : 1385.0,
          "sum" : 17273.499999999996,
          "standardDeviation" : 3360.8501255882666
        }, {
          "mean" : 1844.1,
          "variance" : 942091.4333333333,
          "n" : 10,
          "max" : 3512.0,
          "min" : 669.0,
          "sum" : 18441.0,
          "standardDeviation" : 970.6139465994363
        }, {
          "mean" : 1367.0,
          "variance" : 331923.55555555556,
          "n" : 10,
          "max" : 2168.0,
          "min" : 555.0,
          "sum" : 13670.0,
          "standardDeviation" : 576.128072181486
        }, {
          "mean" : 1095.5,
          "variance" : 390635.7142857142,
          "n" : 8,
          "max" : 1952.0,
          "min" : 382.0,
          "sum" : 8764.0,
          "standardDeviation" : 625.0085713697966
        }, {
          "mean" : 871.5,
          "variance" : 314424.5,
          "n" : 2,
          "max" : 1268.0,
          "min" : 475.0,
          "sum" : 1743.0,
          "standardDeviation" : 560.7356774809322
        } ],
        "4" : [ {
          "mean" : 3051.625,
          "variance" : 1.077295626785714E7,
          "n" : 3,
          "max" : 11000.0,
          "min" : 1143.0,
          "sum" : 9154.875,
          "standardDeviation" : 3282.2181932128065
        }, {
          "mean" : 1582.2500000000002,
          "variance" : 719750.0227272728,
          "n" : 12,
          "max" : 2924.0,
          "min" : 416.0,
          "sum" : 18987.000000000004,
          "standardDeviation" : 848.3808241157227
        }, {
          "mean" : 1156.875,
          "variance" : 385521.8392857142,
          "n" : 8,
          "max" : 1834.0,
          "min" : 470.0,
          "sum" : 9255.0,
          "standardDeviation" : 620.9040499833402
        }, {
          "mean" : 985.7,
          "variance" : 384076.01111111115,
          "n" : 10,
          "max" : 1896.0,
          "min" : 367.0,
          "sum" : 9857.0,
          "standardDeviation" : 619.7386635599809
        }, {
          "mean" : 1187.0,
          "variance" : 466577.99999999994,
          "n" : 2,
          "max" : 1670.0,
          "min" : 704.0,
          "sum" : 2374.0,
          "standardDeviation" : 683.0651506262049
        } ],
        "5" : [ {
          "mean" : 3243.6,
          "variance" : 1.0617040044444444E7,
          "n" : 5,
          "max" : 10897.0,
          "min" : 938.0,
          "sum" : 16218.0,
          "standardDeviation" : 3258.379972385732
        }, {
          "mean" : 3071.4,
          "variance" : 1.3423174933333334E7,
          "n" : 10,
          "max" : 12001.0,
          "min" : 484.0,
          "sum" : 30714.0,
          "standardDeviation" : 3663.7651307546084
        }, {
          "mean" : 1206.875,
          "variance" : 413349.83928571426,
          "n" : 8,
          "max" : 2060.0,
          "min" : 571.0,
          "sum" : 9655.0,
          "standardDeviation" : 642.9228875111806
        }, {
          "mean" : 969.4000000000001,
          "variance" : 299138.71111111104,
          "n" : 10,
          "max" : 1824.0,
          "min" : 395.0,
          "sum" : 9694.0,
          "standardDeviation" : 546.9357467848587
        }, {
          "mean" : 846.0,
          "variance" : 380192.0,
          "n" : 2,
          "max" : 1282.0,
          "min" : 410.0,
          "sum" : 1692.0,
          "standardDeviation" : 616.5971131946694
        } ],
        "6" : [ {
          "mean" : 2667.9,
          "variance" : 8815302.544444446,
          "n" : 5,
          "max" : 10858.0,
          "min" : 911.0,
          "sum" : 13339.5,
          "standardDeviation" : 2969.057517874055
        }, {
          "mean" : 3378.7000000000003,
          "variance" : 1.9104275788888887E7,
          "n" : 10,
          "max" : 11863.0,
          "min" : 437.0,
          "sum" : 33787.0,
          "standardDeviation" : 4370.84383030198
        }, {
          "mean" : 927.0,
          "variance" : 272386.88888888893,
          "n" : 10,
          "max" : 1830.0,
          "min" : 391.0,
          "sum" : 9270.0,
          "standardDeviation" : 521.9069734051164
        }, {
          "mean" : 1073.125,
          "variance" : 305163.8392857142,
          "n" : 8,
          "max" : 1674.0,
          "min" : 417.0,
          "sum" : 8585.0,
          "standardDeviation" : 552.4163640640221
        }, {
          "mean" : 810.0,
          "variance" : 312049.99999999994,
          "n" : 2,
          "max" : 1205.0,
          "min" : 415.0,
          "sum" : 1620.0,
          "standardDeviation" : 558.6143571373725
        } ],
        "7" : [ {
          "mean" : 2748.0000000000005,
          "variance" : 8050275.454545455,
          "n" : 7,
          "max" : 11049.0,
          "min" : 1017.0,
          "sum" : 19236.000000000004,
          "standardDeviation" : 2837.300733892242
        }, {
          "mean" : 1485.125,
          "variance" : 497235.8392857143,
          "n" : 8,
          "max" : 2558.0,
          "min" : 443.0,
          "sum" : 11881.0,
          "standardDeviation" : 705.1495155537684
        }, {
          "mean" : 1362.5,
          "variance" : 457990.57142857136,
          "n" : 8,
          "max" : 2286.0,
          "min" : 483.0,
          "sum" : 10900.0,
          "standardDeviation" : 676.7500065966541
        }, {
          "mean" : 2075.7999999999997,
          "variance" : 1.2138692844444444E7,
          "n" : 10,
          "max" : 11857.0,
          "min" : 367.0,
          "sum" : 20757.999999999996,
          "standardDeviation" : 3484.062692381474
        }, {
          "mean" : 963.0,
          "variance" : 381938.0,
          "n" : 2,
          "max" : 1400.0,
          "min" : 526.0,
          "sum" : 1926.0,
          "standardDeviation" : 618.0113267570425
        } ],
        "8" : [ {
          "mean" : 3039.6,
          "variance" : 1.0165178044444446E7,
          "n" : 5,
          "max" : 11600.0,
          "min" : 960.0,
          "sum" : 15198.0,
          "standardDeviation" : 3188.2876351490695
        }, {
          "mean" : 1659.9999999999998,
          "variance" : 607158.8888888889,
          "n" : 10,
          "max" : 2739.0,
          "min" : 823.0,
          "sum" : 16599.999999999996,
          "standardDeviation" : 779.2040098003147
        }, {
          "mean" : 2326.25,
          "variance" : 8262414.2142857155,
          "n" : 8,
          "max" : 9247.0,
          "min" : 652.0,
          "sum" : 18610.0,
          "standardDeviation" : 2874.4415482464965
        }, {
          "mean" : 2059.3,
          "variance" : 1.2095718011111112E7,
          "n" : 10,
          "max" : 11818.0,
          "min" : 379.0,
          "sum" : 20593.0,
          "standardDeviation" : 3477.889879094954
        }, {
          "mean" : 902.5,
          "variance" : 590784.4999999999,
          "n" : 2,
          "max" : 1446.0,
          "min" : 359.0,
          "sum" : 1805.0,
          "standardDeviation" : 768.6250711497771
        } ],
        "9" : [ {
          "mean" : 3280.75,
          "variance" : 1.4898297642857146E7,
          "n" : 3,
          "max" : 12727.0,
          "min" : 1235.0,
          "sum" : 9842.25,
          "standardDeviation" : 3859.8312972016206
        }, {
          "mean" : 1895.0833333333335,
          "variance" : 2518824.083333333,
          "n" : 12,
          "max" : 6557.0,
          "min" : 490.0,
          "sum" : 22741.0,
          "standardDeviation" : 1587.0803644848402
        }, {
          "mean" : 1085.875,
          "variance" : 351994.4107142857,
          "n" : 8,
          "max" : 1961.0,
          "min" : 433.0,
          "sum" : 8687.0,
          "standardDeviation" : 593.2911685793795
        }, {
          "mean" : 929.7,
          "variance" : 293027.1222222222,
          "n" : 10,
          "max" : 1648.0,
          "min" : 376.0,
          "sum" : 9297.0,
          "standardDeviation" : 541.3197966287786
        }, {
          "mean" : 914.5,
          "variance" : 475312.5,
          "n" : 2,
          "max" : 1402.0,
          "min" : 427.0,
          "sum" : 1829.0,
          "standardDeviation" : 689.4291116568838
        } ],
        "10" : [ {
          "mean" : 2838.3999999999996,
          "variance" : 9977216.711111113,
          "n" : 5,
          "max" : 11575.0,
          "min" : 1065.0,
          "sum" : 14191.999999999998,
          "standardDeviation" : 3158.673251716789
        }, {
          "mean" : 1406.2000000000003,
          "variance" : 370364.1777777778,
          "n" : 10,
          "max" : 2373.0,
          "min" : 716.0,
          "sum" : 14062.000000000004,
          "standardDeviation" : 608.5755316949391
        }, {
          "mean" : 1314.4,
          "variance" : 474134.2666666666,
          "n" : 10,
          "max" : 2308.0,
          "min" : 437.0,
          "sum" : 13144.0,
          "standardDeviation" : 688.5740821920809
        }, {
          "mean" : 959.75,
          "variance" : 276206.2142857143,
          "n" : 8,
          "max" : 1539.0,
          "min" : 368.0,
          "sum" : 7678.0,
          "standardDeviation" : 525.5532459092174
        }, {
          "mean" : 1182.5,
          "variance" : 762612.5,
          "n" : 2,
          "max" : 1800.0,
          "min" : 565.0,
          "sum" : 2365.0,
          "standardDeviation" : 873.2768747653862
        } ],
        "11" : [ {
          "mean" : 2602.583333333333,
          "variance" : 7203760.083333334,
          "n" : 7,
          "max" : 10883.0,
          "min" : 873.0,
          "sum" : 18218.083333333332,
          "standardDeviation" : 2683.9821317090273
        }, {
          "mean" : 2512.125,
          "variance" : 1.139564955357143E7,
          "n" : 8,
          "max" : 10674.0,
          "min" : 487.0,
          "sum" : 20097.0,
          "standardDeviation" : 3375.7442962362284
        }, {
          "mean" : 1186.3,
          "variance" : 447502.6777777777,
          "n" : 10,
          "max" : 2134.0,
          "min" : 414.0,
          "sum" : 11863.0,
          "standardDeviation" : 668.9564094750701
        }, {
          "mean" : 3728.0,
          "variance" : 2.5323325428571425E7,
          "n" : 8,
          "max" : 11872.0,
          "min" : 461.0,
          "sum" : 29824.0,
          "standardDeviation" : 5032.22867411363
        }, {
          "mean" : 1313.0,
          "variance" : 1232450.0000000002,
          "n" : 2,
          "max" : 2098.0,
          "min" : 528.0,
          "sum" : 2626.0,
          "standardDeviation" : 1110.1576464628797
        } ],
        "12" : [ {
          "mean" : 2881.2000000000003,
          "variance" : 1.0857429288888887E7,
          "n" : 5,
          "max" : 12070.0,
          "min" : 924.0,
          "sum" : 14406.000000000002,
          "standardDeviation" : 3295.061348273942
        }, {
          "mean" : 4980.2,
          "variance" : 1.2997508639999998E8,
          "n" : 10,
          "max" : 37359.0,
          "min" : 421.0,
          "sum" : 49802.0,
          "standardDeviation" : 11400.661665008745
        }, {
          "mean" : 1182.375,
          "variance" : 419710.2678571429,
          "n" : 8,
          "max" : 2080.0,
          "min" : 432.0,
          "sum" : 9459.0,
          "standardDeviation" : 647.8504980758623
        }, {
          "mean" : 1108.625,
          "variance" : 509004.8392857143,
          "n" : 8,
          "max" : 2167.0,
          "min" : 388.0,
          "sum" : 8869.0,
          "standardDeviation" : 713.4457507657568
        }, {
          "mean" : 1071.5,
          "variance" : 500049.66666666674,
          "n" : 4,
          "max" : 1910.0,
          "min" : 431.0,
          "sum" : 4286.0,
          "standardDeviation" : 707.1418999512522
        } ],
        "13" : [ {
          "mean" : 2911.7499999999995,
          "variance" : 9753419.295454545,
          "n" : 7,
          "max" : 12497.0,
          "min" : 973.0,
          "sum" : 20382.249999999996,
          "standardDeviation" : 3123.0464766721843
        }, {
          "mean" : 1879.0,
          "variance" : 4063281.4285714277,
          "n" : 8,
          "max" : 6340.0,
          "min" : 369.0,
          "sum" : 15032.0,
          "standardDeviation" : 2015.7582763246758
        }, {
          "mean" : 958.8999999999999,
          "variance" : 245354.09999999995,
          "n" : 10,
          "max" : 1609.0,
          "min" : 362.0,
          "sum" : 9588.999999999998,
          "standardDeviation" : 495.3323126952248
        }, {
          "mean" : 906.375,
          "variance" : 263561.98214285716,
          "n" : 8,
          "max" : 1580.0,
          "min" : 367.0,
          "sum" : 7251.0,
          "standardDeviation" : 513.3828806484076
        }, {
          "mean" : 840.0,
          "variance" : 399618.0,
          "n" : 2,
          "max" : 1287.0,
          "min" : 393.0,
          "sum" : 1680.0,
          "standardDeviation" : 632.1534623807735
        } ],
        "14" : [ {
          "mean" : 3391.8,
          "variance" : 1.0925789955555554E7,
          "n" : 5,
          "max" : 12178.0,
          "min" : 1170.0,
          "sum" : 16959.0,
          "standardDeviation" : 3305.4182724060133
        }, {
          "mean" : 1751.3,
          "variance" : 1648366.6777777777,
          "n" : 10,
          "max" : 4297.0,
          "min" : 548.0,
          "sum" : 17513.0,
          "standardDeviation" : 1283.8873306399505
        }, {
          "mean" : 1145.375,
          "variance" : 342957.41071428574,
          "n" : 8,
          "max" : 1922.0,
          "min" : 468.0,
          "sum" : 9163.0,
          "standardDeviation" : 585.6256574931513
        }, {
          "mean" : 982.0,
          "variance" : 339384.6666666666,
          "n" : 10,
          "max" : 1823.0,
          "min" : 379.0,
          "sum" : 9820.0,
          "standardDeviation" : 582.5673065549307
        }, {
          "mean" : 949.0,
          "variance" : 557568.0,
          "n" : 2,
          "max" : 1477.0,
          "min" : 421.0,
          "sum" : 1898.0,
          "standardDeviation" : 746.7047609329942
        } ],
        "15" : [ {
          "mean" : 2905.3,
          "variance" : 8240239.7888888875,
          "n" : 5,
          "max" : 10239.0,
          "min" : 1037.0,
          "sum" : 14526.5,
          "standardDeviation" : 2870.5817857864436
        }, {
          "mean" : 1358.1000000000001,
          "variance" : 370918.3222222222,
          "n" : 10,
          "max" : 2192.0,
          "min" : 511.0,
          "sum" : 13581.000000000002,
          "standardDeviation" : 609.0306414477208
        }, {
          "mean" : 1201.3749999999998,
          "variance" : 424189.69642857136,
          "n" : 8,
          "max" : 1909.0,
          "min" : 467.0,
          "sum" : 9610.999999999998,
          "standardDeviation" : 651.2984695426294
        }, {
          "mean" : 1063.8,
          "variance" : 247746.84444444443,
          "n" : 10,
          "max" : 1692.0,
          "min" : 386.0,
          "sum" : 10638.0,
          "standardDeviation" : 497.74174472756897
        }, {
          "mean" : 1061.0,
          "variance" : 696200.0,
          "n" : 2,
          "max" : 1651.0,
          "min" : 471.0,
          "sum" : 2122.0,
          "standardDeviation" : 834.3860018001261
        } ],
        "16" : [ {
          "mean" : 2674.8999999999996,
          "variance" : 1.1321505211111112E7,
          "n" : 5,
          "max" : 12065.0,
          "min" : 767.0,
          "sum" : 13374.499999999998,
          "standardDeviation" : 3364.7444495995696
        }, {
          "mean" : 1370.0000000000002,
          "variance" : 775284.0,
          "n" : 10,
          "max" : 3088.0,
          "min" : 404.0,
          "sum" : 13700.000000000002,
          "standardDeviation" : 880.502129469316
        }, {
          "mean" : 2139.2999999999997,
          "variance" : 1.0425252677777776E7,
          "n" : 10,
          "max" : 11128.0,
          "min" : 451.0,
          "sum" : 21392.999999999996,
          "standardDeviation" : 3228.8159869800224
        }, {
          "mean" : 1115.875,
          "variance" : 488836.6964285714,
          "n" : 8,
          "max" : 2132.0,
          "min" : 381.0,
          "sum" : 8927.0,
          "standardDeviation" : 699.1685751151659
        }, {
          "mean" : 1051.5,
          "variance" : 780000.5,
          "n" : 2,
          "max" : 1676.0,
          "min" : 427.0,
          "sum" : 2103.0,
          "standardDeviation" : 883.1763697019978
        } ],
        "17" : [ {
          "mean" : 4057.375,
          "variance" : 2.0671921124999996E7,
          "n" : 3,
          "max" : 13816.0,
          "min" : 1004.0,
          "sum" : 12172.125,
          "standardDeviation" : 4546.638442299981
        }, {
          "mean" : 2039.0,
          "variance" : 6530452.909090909,
          "n" : 12,
          "max" : 9891.0,
          "min" : 571.0,
          "sum" : 24468.0,
          "standardDeviation" : 2555.4750848112194
        }, {
          "mean" : 1061.0,
          "variance" : 374170.57142857136,
          "n" : 8,
          "max" : 1865.0,
          "min" : 424.0,
          "sum" : 8488.0,
          "standardDeviation" : 611.69483521489
        }, {
          "mean" : 1973.5,
          "variance" : 1.1706493166666666E7,
          "n" : 10,
          "max" : 11611.0,
          "min" : 372.0,
          "sum" : 19735.0,
          "standardDeviation" : 3421.475290962462
        }, {
          "mean" : 926.5,
          "variance" : 529420.5,
          "n" : 2,
          "max" : 1441.0,
          "min" : 412.0,
          "sum" : 1853.0,
          "standardDeviation" : 727.6128778409574
        } ],
        "18" : [ {
          "mean" : 2889.8,
          "variance" : 8448891.955555554,
          "n" : 5,
          "max" : 10931.0,
          "min" : 1176.0,
          "sum" : 14449.0,
          "standardDeviation" : 2906.69777506289
        }, {
          "mean" : 1418.4999999999998,
          "variance" : 679076.4999999998,
          "n" : 10,
          "max" : 2553.0,
          "min" : 367.0,
          "sum" : 14184.999999999998,
          "standardDeviation" : 824.0609807532448
        }, {
          "mean" : 1963.3000000000002,
          "variance" : 1.08833649E7,
          "n" : 10,
          "max" : 11236.0,
          "min" : 344.0,
          "sum" : 19633.0,
          "standardDeviation" : 3298.994528640507
        }, {
          "mean" : 2324.625,
          "variance" : 1.4301290553571431E7,
          "n" : 8,
          "max" : 11582.0,
          "min" : 401.0,
          "sum" : 18597.0,
          "standardDeviation" : 3781.7047152800587
        }, {
          "mean" : 5946.0,
          "variance" : 5.59682E7,
          "n" : 2,
          "max" : 11236.0,
          "min" : 656.0,
          "sum" : 11892.0,
          "standardDeviation" : 7481.189744953673
        } ],
        "19" : [ {
          "mean" : 2924.75,
          "variance" : 7611331.295454545,
          "n" : 7,
          "max" : 10853.0,
          "min" : 1014.0,
          "sum" : 20473.25,
          "standardDeviation" : 2758.864131387145
        }, {
          "mean" : 2451.25,
          "variance" : 6890140.499999999,
          "n" : 8,
          "max" : 8699.0,
          "min" : 717.0,
          "sum" : 19610.0,
          "standardDeviation" : 2624.9077126634375
        }, {
          "mean" : 1016.6250000000001,
          "variance" : 371269.12500000006,
          "n" : 8,
          "max" : 1774.0,
          "min" : 370.0,
          "sum" : 8133.000000000001,
          "standardDeviation" : 609.3185743106803
        }, {
          "mean" : 2490.625,
          "variance" : 1.4358992839285715E7,
          "n" : 8,
          "max" : 11733.0,
          "min" : 387.0,
          "sum" : 19925.0,
          "standardDeviation" : 3789.3261721954887
        }, {
          "mean" : 3370.5,
          "variance" : 2.5916860333333332E7,
          "n" : 4,
          "max" : 10960.0,
          "min" : 365.0,
          "sum" : 13482.0,
          "standardDeviation" : 5090.8604708176135
        } ],
        "20" : [ {
          "mean" : 3149.8999999999996,
          "variance" : 1.0084368544444446E7,
          "n" : 5,
          "max" : 11697.0,
          "min" : 992.0,
          "sum" : 15749.499999999998,
          "standardDeviation" : 3175.5894798359004
        }, {
          "mean" : 1562.3999999999996,
          "variance" : 668952.9333333331,
          "n" : 10,
          "max" : 2723.0,
          "min" : 484.0,
          "sum" : 15623.999999999996,
          "standardDeviation" : 817.8954293388202
        }, {
          "mean" : 1238.7500000000002,
          "variance" : 578981.3571428572,
          "n" : 8,
          "max" : 2132.0,
          "min" : 407.0,
          "sum" : 9910.000000000002,
          "standardDeviation" : 760.9082448908391
        }, {
          "mean" : 1050.375,
          "variance" : 400919.6964285714,
          "n" : 8,
          "max" : 1720.0,
          "min" : 362.0,
          "sum" : 8403.0,
          "standardDeviation" : 633.1821984457329
        }, {
          "mean" : 3544.5,
          "variance" : 2.5772293666666664E7,
          "n" : 4,
          "max" : 11133.0,
          "min" : 712.0,
          "sum" : 14178.0,
          "standardDeviation" : 5076.641967547708
        } ],
        "21" : [ {
          "mean" : 2937.7000000000003,
          "variance" : 9955220.9,
          "n" : 5,
          "max" : 11512.0,
          "min" : 952.0,
          "sum" : 14688.500000000002,
          "standardDeviation" : 3155.189518872044
        }, {
          "mean" : 2393.2000000000003,
          "variance" : 1.1152641288888888E7,
          "n" : 10,
          "max" : 11686.0,
          "min" : 630.0,
          "sum" : 23932.000000000004,
          "standardDeviation" : 3339.5570498029956
        }, {
          "mean" : 1096.3749999999998,
          "variance" : 435239.41071428574,
          "n" : 8,
          "max" : 1949.0,
          "min" : 438.0,
          "sum" : 8770.999999999998,
          "standardDeviation" : 659.7267697420544
        }, {
          "mean" : 1069.5000000000002,
          "variance" : 323108.2777777778,
          "n" : 10,
          "max" : 1730.0,
          "min" : 406.0,
          "sum" : 10695.000000000002,
          "standardDeviation" : 568.4261410049487
        }, {
          "mean" : 1377.0,
          "variance" : 881791.9999999999,
          "n" : 2,
          "max" : 2041.0,
          "min" : 713.0,
          "sum" : 2754.0,
          "standardDeviation" : 939.0378054157351
        } ],
        "22" : [ {
          "mean" : 2738.4,
          "variance" : 8748980.71111111,
          "n" : 5,
          "max" : 10871.0,
          "min" : 854.0,
          "sum" : 13692.0,
          "standardDeviation" : 2957.8675952637077
        }, {
          "mean" : 2359.2999999999997,
          "variance" : 6041869.344444445,
          "n" : 10,
          "max" : 9071.0,
          "min" : 333.0,
          "sum" : 23592.999999999996,
          "standardDeviation" : 2458.0214288009056
        }, {
          "mean" : 919.25,
          "variance" : 285340.50000000006,
          "n" : 8,
          "max" : 1747.0,
          "min" : 381.0,
          "sum" : 7354.0,
          "standardDeviation" : 534.1727248746421
        }, {
          "mean" : 1995.9000000000005,
          "variance" : 1.140013876666667E7,
          "n" : 10,
          "max" : 11464.0,
          "min" : 348.0,
          "sum" : 19959.000000000007,
          "standardDeviation" : 3376.4091527341097
        }, {
          "mean" : 1009.0,
          "variance" : 508031.99999999994,
          "n" : 2,
          "max" : 1513.0,
          "min" : 505.0,
          "sum" : 2018.0,
          "standardDeviation" : 712.7636354360399
        } ],
        "23" : [ {
          "mean" : 2769.2000000000003,
          "variance" : 8345633.733333335,
          "n" : 5,
          "max" : 10560.0,
          "min" : 826.0,
          "sum" : 13846.000000000002,
          "standardDeviation" : 2888.881052126123
        }, {
          "mean" : 2134.8,
          "variance" : 5923304.6222222205,
          "n" : 10,
          "max" : 8723.0,
          "min" : 515.0,
          "sum" : 21348.0,
          "standardDeviation" : 2433.7840130591335
        }, {
          "mean" : 1197.4,
          "variance" : 312123.6,
          "n" : 10,
          "max" : 1810.0,
          "min" : 372.0,
          "sum" : 11974.0,
          "standardDeviation" : 558.6802305433762
        }, {
          "mean" : 1105.875,
          "variance" : 357674.12499999994,
          "n" : 8,
          "max" : 1805.0,
          "min" : 388.0,
          "sum" : 8847.0,
          "standardDeviation" : 598.0586300689924
        }, {
          "mean" : 979.0,
          "variance" : 773768.0000000001,
          "n" : 2,
          "max" : 1601.0,
          "min" : 357.0,
          "sum" : 1958.0,
          "standardDeviation" : 879.6408357960652
        } ],
        "24" : [ {
          "mean" : 3254.2,
          "variance" : 1.2123927955555554E7,
          "n" : 5,
          "max" : 12459.0,
          "min" : 1033.0,
          "sum" : 16271.0,
          "standardDeviation" : 3481.943129282205
        }, {
          "mean" : 1332.0,
          "variance" : 661865.1111111112,
          "n" : 10,
          "max" : 2977.0,
          "min" : 382.0,
          "sum" : 13320.0,
          "standardDeviation" : 813.550927177341
        }, {
          "mean" : 1140.1000000000004,
          "variance" : 341538.5444444444,
          "n" : 10,
          "max" : 2013.0,
          "min" : 395.0,
          "sum" : 11401.000000000004,
          "standardDeviation" : 584.4129913378418
        }, {
          "mean" : 1005.5,
          "variance" : 299420.0,
          "n" : 8,
          "max" : 1691.0,
          "min" : 458.0,
          "sum" : 8044.0,
          "standardDeviation" : 547.1928362104168
        }, {
          "mean" : 994.0,
          "variance" : 232561.99999999997,
          "n" : 2,
          "max" : 1335.0,
          "min" : 653.0,
          "sum" : 1988.0,
          "standardDeviation" : 482.2468247692254
        } ],
        "25" : [ {
          "mean" : 2686.7000000000003,
          "variance" : 7504845.3444444435,
          "n" : 5,
          "max" : 10225.0,
          "min" : 1093.0,
          "sum" : 13433.500000000002,
          "standardDeviation" : 2739.49727951032
        }, {
          "mean" : 1915.4,
          "variance" : 4773893.155555556,
          "n" : 10,
          "max" : 7759.0,
          "min" : 486.0,
          "sum" : 19154.0,
          "standardDeviation" : 2184.9240617365986
        }, {
          "mean" : 1124.0,
          "variance" : 389081.99999999994,
          "n" : 10,
          "max" : 1883.0,
          "min" : 373.0,
          "sum" : 11240.0,
          "standardDeviation" : 623.7643785917884
        }, {
          "mean" : 2326.0,
          "variance" : 1.4391084285714285E7,
          "n" : 8,
          "max" : 11614.0,
          "min" : 393.0,
          "sum" : 18608.0,
          "standardDeviation" : 3793.5582618057
        }, {
          "mean" : 1585.5,
          "variance" : 1012464.5000000001,
          "n" : 2,
          "max" : 2297.0,
          "min" : 874.0,
          "sum" : 3171.0,
          "standardDeviation" : 1006.2129496284572
        } ],
        "26" : [ {
          "mean" : 2388.7500000000005,
          "variance" : 5745791.295454546,
          "n" : 7,
          "max" : 9690.0,
          "min" : 856.0,
          "sum" : 16721.250000000004,
          "standardDeviation" : 2397.0380254502734
        }, {
          "mean" : 1304.5,
          "variance" : 418041.14285714284,
          "n" : 8,
          "max" : 2045.0,
          "min" : 662.0,
          "sum" : 10436.0,
          "standardDeviation" : 646.561012478438
        }, {
          "mean" : 998.9000000000001,
          "variance" : 265096.3222222223,
          "n" : 10,
          "max" : 1697.0,
          "min" : 372.0,
          "sum" : 9989.0,
          "standardDeviation" : 514.8750549620969
        }, {
          "mean" : 1182.125,
          "variance" : 513685.5535714285,
          "n" : 8,
          "max" : 2215.0,
          "min" : 437.0,
          "sum" : 9457.0,
          "standardDeviation" : 716.7186013851102
        }, {
          "mean" : 1063.5,
          "variance" : 637320.5,
          "n" : 2,
          "max" : 1628.0,
          "min" : 499.0,
          "sum" : 2127.0,
          "standardDeviation" : 798.3235559596121
        } ],
        "27" : [ {
          "mean" : 2845.6,
          "variance" : 1.0859625822222225E7,
          "n" : 5,
          "max" : 11972.0,
          "min" : 820.0,
          "sum" : 14228.0,
          "standardDeviation" : 3295.3946383130237
        }, {
          "mean" : 1384.2,
          "variance" : 509373.2888888888,
          "n" : 10,
          "max" : 2417.0,
          "min" : 405.0,
          "sum" : 13842.0,
          "standardDeviation" : 713.7039224278432
        }, {
          "mean" : 1189.25,
          "variance" : 410141.0714285715,
          "n" : 8,
          "max" : 2007.0,
          "min" : 461.0,
          "sum" : 9514.0,
          "standardDeviation" : 640.4225725476667
        }, {
          "mean" : 902.3,
          "variance" : 268276.23333333334,
          "n" : 10,
          "max" : 1679.0,
          "min" : 376.0,
          "sum" : 9023.0,
          "standardDeviation" : 517.9538911267424
        }, {
          "mean" : 1096.5,
          "variance" : 507024.49999999994,
          "n" : 2,
          "max" : 1600.0,
          "min" : 593.0,
          "sum" : 2193.0,
          "standardDeviation" : 712.0565286548533
        } ],
        "28" : [ {
          "mean" : 2446.75,
          "variance" : 7620962.386363637,
          "n" : 7,
          "max" : 10946.0,
          "min" : 898.0,
          "sum" : 17127.25,
          "standardDeviation" : 2760.609060762432
        }, {
          "mean" : 1498.25,
          "variance" : 682259.9285714285,
          "n" : 8,
          "max" : 2385.0,
          "min" : 652.0,
          "sum" : 11986.0,
          "standardDeviation" : 825.990271475051
        }, {
          "mean" : 2584.0000000000005,
          "variance" : 2.097848955555556E7,
          "n" : 10,
          "max" : 15541.0,
          "min" : 629.0,
          "sum" : 25840.000000000004,
          "standardDeviation" : 4580.228111738056
        }, {
          "mean" : 1053.25,
          "variance" : 407710.7857142856,
          "n" : 8,
          "max" : 1921.0,
          "min" : 372.0,
          "sum" : 8426.0,
          "standardDeviation" : 638.5223455089772
        }, {
          "mean" : 5958.0,
          "variance" : 5.664736800000001E7,
          "n" : 2,
          "max" : 11280.0,
          "min" : 636.0,
          "sum" : 11916.0,
          "standardDeviation" : 7526.444578949612
        } ],
        "29" : [ {
          "mean" : 2608.75,
          "variance" : 7570938.386363639,
          "n" : 7,
          "max" : 11090.0,
          "min" : 1000.0,
          "sum" : 18261.25,
          "standardDeviation" : 2751.533824317564
        }, {
          "mean" : 1404.25,
          "variance" : 619036.5000000001,
          "n" : 8,
          "max" : 2562.0,
          "min" : 517.0,
          "sum" : 11234.0,
          "standardDeviation" : 786.7887264062698
        }, {
          "mean" : 2621.3749999999995,
          "variance" : 1.3820497410714284E7,
          "n" : 8,
          "max" : 11690.0,
          "min" : 612.0,
          "sum" : 20970.999999999996,
          "standardDeviation" : 3717.5929592566054
        }, {
          "mean" : 1045.8000000000002,
          "variance" : 301091.28888888884,
          "n" : 10,
          "max" : 1638.0,
          "min" : 404.0,
          "sum" : 10458.000000000002,
          "standardDeviation" : 548.7178590941695
        }, {
          "mean" : 1039.5,
          "variance" : 477264.5,
          "n" : 2,
          "max" : 1528.0,
          "min" : 551.0,
          "sum" : 2079.0,
          "standardDeviation" : 690.8433252192569
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 5679.8914728682175,
          "variance" : 1.1030532024599594E10,
          "n" : 382,
          "max" : 2066191.0,
          "min" : 57.0,
          "sum" : 2169718.542635659,
          "standardDeviation" : 105026.33967057784
        }, {
          "mean" : 116.29287090558762,
          "variance" : 6573.3735205064695,
          "n" : 519,
          "max" : 564.0,
          "min" : 34.0,
          "sum" : 60355.99999999998,
          "standardDeviation" : 81.07634377860455
        }, {
          "mean" : 115.13521126760563,
          "variance" : 5766.75567756823,
          "n" : 355,
          "max" : 525.0,
          "min" : 36.0,
          "sum" : 40873.0,
          "standardDeviation" : 75.93915773544127
        }, {
          "mean" : 146.1580310880831,
          "variance" : 263343.6502859835,
          "n" : 386,
          "max" : 10026.0,
          "min" : 34.0,
          "sum" : 56417.00000000008,
          "standardDeviation" : 513.1701962175741
        }, {
          "mean" : 133.56497175141237,
          "variance" : 11387.203982010533,
          "n" : 354,
          "max" : 660.0,
          "min" : 36.0,
          "sum" : 47281.99999999998,
          "standardDeviation" : 106.71084285118609
        }, {
          "mean" : 111.1379310344828,
          "variance" : 9479.068488797076,
          "n" : 435,
          "max" : 612.0,
          "min" : 34.0,
          "sum" : 48345.00000000002,
          "standardDeviation" : 97.36050784993408
        }, {
          "mean" : 117.4055944055945,
          "variance" : 246612.51735180704,
          "n" : 429,
          "max" : 10230.0,
          "min" : 27.0,
          "sum" : 50367.000000000044,
          "standardDeviation" : 496.60096390543487
        }, {
          "mean" : 70.61379310344822,
          "variance" : 220577.3942793579,
          "n" : 435,
          "max" : 9832.0,
          "min" : 27.0,
          "sum" : 30716.999999999975,
          "standardDeviation" : 469.6566770305282
        }, {
          "mean" : 52.933333333333316,
          "variance" : 775.1798882681564,
          "n" : 180,
          "max" : 249.0,
          "min" : 28.0,
          "sum" : 9527.999999999996,
          "standardDeviation" : 27.842052515361658
        } ],
        "1" : [ {
          "mean" : 331.76729559748424,
          "variance" : 3880279.4226256534,
          "n" : 472,
          "max" : 40120.0,
          "min" : 64.0,
          "sum" : 156594.16352201256,
          "standardDeviation" : 1969.8424867551348
        }, {
          "mean" : 127.6923076923076,
          "variance" : 10181.054636951832,
          "n" : 429,
          "max" : 624.0,
          "min" : 37.0,
          "sum" : 54779.999999999956,
          "standardDeviation" : 100.90121226700813
        }, {
          "mean" : 112.72237960339946,
          "variance" : 8232.911344321396,
          "n" : 353,
          "max" : 603.0,
          "min" : 35.0,
          "sum" : 39791.00000000001,
          "standardDeviation" : 90.73539190592277
        }, {
          "mean" : 132.24715909090898,
          "variance" : 14115.018510424768,
          "n" : 352,
          "max" : 874.0,
          "min" : 34.0,
          "sum" : 46550.99999999996,
          "standardDeviation" : 118.80664337664274
        }, {
          "mean" : 143.1275510204082,
          "variance" : 17058.244558693037,
          "n" : 392,
          "max" : 756.0,
          "min" : 35.0,
          "sum" : 56106.000000000015,
          "standardDeviation" : 130.60721480336773
        }, {
          "mean" : 127.5939675174014,
          "variance" : 15023.37661468731,
          "n" : 431,
          "max" : 823.0,
          "min" : 34.0,
          "sum" : 54993.0,
          "standardDeviation" : 122.5698846156237
        }, {
          "mean" : 102.04295942720758,
          "variance" : 11382.256523278253,
          "n" : 419,
          "max" : 616.0,
          "min" : 28.0,
          "sum" : 42755.99999999998,
          "standardDeviation" : 106.68765872057674
        }, {
          "mean" : 53.02684563758391,
          "variance" : 715.7391880097512,
          "n" : 447,
          "max" : 252.0,
          "min" : 27.0,
          "sum" : 23703.000000000007,
          "standardDeviation" : 26.753302375776922
        }, {
          "mean" : 58.566666666666656,
          "variance" : 709.3195530726252,
          "n" : 180,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 10541.999999999998,
          "standardDeviation" : 26.633053769191118
        } ],
        "2" : [ {
          "mean" : 313.17482517482506,
          "variance" : 1001531.3688974582,
          "n" : 424,
          "max" : 15740.0,
          "min" : 64.0,
          "sum" : 132786.12587412584,
          "standardDeviation" : 1000.7653915366269
        }, {
          "mean" : 122.06122448979592,
          "variance" : 7202.307606679033,
          "n" : 441,
          "max" : 736.0,
          "min" : 35.0,
          "sum" : 53829.0,
          "standardDeviation" : 84.86641035579997
        }, {
          "mean" : 104.8709677419354,
          "variance" : 6127.70837318494,
          "n" : 372,
          "max" : 789.0,
          "min" : 35.0,
          "sum" : 39011.99999999997,
          "standardDeviation" : 78.27968046169414
        }, {
          "mean" : 126.43869209809266,
          "variance" : 11661.776968776525,
          "n" : 367,
          "max" : 837.0,
          "min" : 34.0,
          "sum" : 46403.00000000001,
          "standardDeviation" : 107.98970769835672
        }, {
          "mean" : 148.3860103626943,
          "variance" : 276698.7363232623,
          "n" : 386,
          "max" : 10220.0,
          "min" : 34.0,
          "sum" : 57277.0,
          "standardDeviation" : 526.0216120305917
        }, {
          "mean" : 123.2676399026764,
          "variance" : 11195.006242952943,
          "n" : 411,
          "max" : 794.0,
          "min" : 34.0,
          "sum" : 50663.0,
          "standardDeviation" : 105.80645652772303
        }, {
          "mean" : 90.88305489260141,
          "variance" : 6741.5532767697105,
          "n" : 419,
          "max" : 605.0,
          "min" : 28.0,
          "sum" : 38079.99999999999,
          "standardDeviation" : 82.10696241348666
        }, {
          "mean" : 50.965596330275204,
          "variance" : 460.4838711378258,
          "n" : 436,
          "max" : 230.0,
          "min" : 26.0,
          "sum" : 22220.99999999999,
          "standardDeviation" : 21.45888792873074
        }, {
          "mean" : 48.488584474885826,
          "variance" : 485.26936450085896,
          "n" : 219,
          "max" : 235.0,
          "min" : 26.0,
          "sum" : 10618.999999999996,
          "standardDeviation" : 22.02883030260252
        } ],
        "3" : [ {
          "mean" : 239.07816091954044,
          "variance" : 576537.8648445368,
          "n" : 430,
          "max" : 14180.0,
          "min" : 53.0,
          "sum" : 102803.60919540239,
          "standardDeviation" : 759.3009053363079
        }, {
          "mean" : 78.45606694560671,
          "variance" : 884.3534117523225,
          "n" : 478,
          "max" : 277.0,
          "min" : 31.0,
          "sum" : 37502.00000000001,
          "standardDeviation" : 29.738080162517594
        }, {
          "mean" : 176.8771428571429,
          "variance" : 1287294.9332869425,
          "n" : 350,
          "max" : 21271.0,
          "min" : 32.0,
          "sum" : 61907.000000000015,
          "standardDeviation" : 1134.5902050022037
        }, {
          "mean" : 163.28277634961432,
          "variance" : 235575.3785943339,
          "n" : 389,
          "max" : 9385.0,
          "min" : 35.0,
          "sum" : 63516.99999999997,
          "standardDeviation" : 485.36108063413354
        }, {
          "mean" : 140.26861702127664,
          "variance" : 18625.487652482272,
          "n" : 376,
          "max" : 848.0,
          "min" : 35.0,
          "sum" : 52741.000000000015,
          "standardDeviation" : 136.47522724832618
        }, {
          "mean" : 123.51344743276292,
          "variance" : 14053.583764801766,
          "n" : 409,
          "max" : 911.0,
          "min" : 35.0,
          "sum" : 50517.00000000004,
          "standardDeviation" : 118.54781214683705
        }, {
          "mean" : 124.8329519450801,
          "variance" : 14218.735792412832,
          "n" : 437,
          "max" : 704.0,
          "min" : 35.0,
          "sum" : 54552.0,
          "standardDeviation" : 119.24234060271054
        }, {
          "mean" : 122.76674364896077,
          "variance" : 16178.720928491992,
          "n" : 433,
          "max" : 799.0,
          "min" : 33.0,
          "sum" : 53158.000000000015,
          "standardDeviation" : 127.19560105794537
        }, {
          "mean" : 122.39655172413798,
          "variance" : 15133.038369543536,
          "n" : 174,
          "max" : 584.0,
          "min" : 34.0,
          "sum" : 21297.000000000007,
          "standardDeviation" : 123.01641504101612
        } ],
        "4" : [ {
          "mean" : 299.0103626943004,
          "variance" : 1041485.4492429851,
          "n" : 381,
          "max" : 12622.0,
          "min" : 43.0,
          "sum" : 113922.94818652845,
          "standardDeviation" : 1020.5319442540665
        }, {
          "mean" : 117.72107438016536,
          "variance" : 5871.609410023441,
          "n" : 484,
          "max" : 666.0,
          "min" : 39.0,
          "sum" : 56977.00000000004,
          "standardDeviation" : 76.62642762143777
        }, {
          "mean" : 95.41091954022995,
          "variance" : 4960.628929411374,
          "n" : 348,
          "max" : 473.0,
          "min" : 35.0,
          "sum" : 33203.00000000002,
          "standardDeviation" : 70.43173240387726
        }, {
          "mean" : 102.05412371134015,
          "variance" : 7361.973807240468,
          "n" : 388,
          "max" : 630.0,
          "min" : 35.0,
          "sum" : 39596.99999999998,
          "standardDeviation" : 85.80194524158802
        }, {
          "mean" : 106.75826972010177,
          "variance" : 6011.066417406652,
          "n" : 393,
          "max" : 535.0,
          "min" : 34.0,
          "sum" : 41955.99999999999,
          "standardDeviation" : 77.53106743368527
        }, {
          "mean" : 125.33642691415325,
          "variance" : 238492.79585604047,
          "n" : 431,
          "max" : 10133.0,
          "min" : 34.0,
          "sum" : 54020.00000000005,
          "standardDeviation" : 488.35724204319985
        }, {
          "mean" : 78.3082706766917,
          "variance" : 3677.369554539617,
          "n" : 399,
          "max" : 380.0,
          "min" : 27.0,
          "sum" : 31244.99999999999,
          "standardDeviation" : 60.64131887203326
        }, {
          "mean" : 52.20594479830149,
          "variance" : 422.2574964990738,
          "n" : 471,
          "max" : 217.0,
          "min" : 26.0,
          "sum" : 24589.0,
          "standardDeviation" : 20.548904995134748
        }, {
          "mean" : 51.316666666666684,
          "variance" : 426.75391061452495,
          "n" : 180,
          "max" : 109.0,
          "min" : 27.0,
          "sum" : 9237.000000000004,
          "standardDeviation" : 20.658022911559687
        } ],
        "5" : [ {
          "mean" : 269.60050890585245,
          "variance" : 367257.199693618,
          "n" : 388,
          "max" : 11795.0,
          "min" : 66.0,
          "sum" : 104604.99745547074,
          "standardDeviation" : 606.0174912439558
        }, {
          "mean" : 122.80083857442365,
          "variance" : 5224.353108539022,
          "n" : 477,
          "max" : 539.0,
          "min" : 36.0,
          "sum" : 58576.00000000008,
          "standardDeviation" : 72.27968669369716
        }, {
          "mean" : 108.28160919540232,
          "variance" : 3973.470899996689,
          "n" : 348,
          "max" : 456.0,
          "min" : 37.0,
          "sum" : 37682.00000000001,
          "standardDeviation" : 63.03547334633642
        }, {
          "mean" : 112.19329896907223,
          "variance" : 7112.352719838041,
          "n" : 388,
          "max" : 556.0,
          "min" : 34.0,
          "sum" : 43531.00000000003,
          "standardDeviation" : 84.33476578397571
        }, {
          "mean" : 122.45244215938297,
          "variance" : 10073.454562319452,
          "n" : 389,
          "max" : 700.0,
          "min" : 34.0,
          "sum" : 47633.99999999998,
          "standardDeviation" : 100.36660083075172
        }, {
          "mean" : 101.4528735632183,
          "variance" : 6698.939594258164,
          "n" : 435,
          "max" : 467.0,
          "min" : 34.0,
          "sum" : 44131.99999999996,
          "standardDeviation" : 81.84705000339453
        }, {
          "mean" : 98.33753148614615,
          "variance" : 9718.501946416323,
          "n" : 397,
          "max" : 1056.0,
          "min" : 27.0,
          "sum" : 39040.00000000002,
          "standardDeviation" : 98.58246267169594
        }, {
          "mean" : 71.39534883720934,
          "variance" : 219788.24379188,
          "n" : 473,
          "max" : 10236.0,
          "min" : 27.0,
          "sum" : 33770.000000000015,
          "standardDeviation" : 468.81578876130015
        }, {
          "mean" : 53.30555555555554,
          "variance" : 433.6547175667286,
          "n" : 180,
          "max" : 98.0,
          "min" : 27.0,
          "sum" : 9594.999999999998,
          "standardDeviation" : 20.82437796350058
        } ],
        "6" : [ {
          "mean" : 361.9618320610685,
          "variance" : 4112961.2612945945,
          "n" : 388,
          "max" : 38886.0,
          "min" : 66.0,
          "sum" : 140441.19083969458,
          "standardDeviation" : 2028.043703004103
        }, {
          "mean" : 122.90566037735847,
          "variance" : 8638.959568733162,
          "n" : 477,
          "max" : 1011.0,
          "min" : 35.0,
          "sum" : 58625.99999999999,
          "standardDeviation" : 92.94600351135686
        }, {
          "mean" : 109.31321839080456,
          "variance" : 6078.111986153901,
          "n" : 348,
          "max" : 485.0,
          "min" : 33.0,
          "sum" : 38040.999999999985,
          "standardDeviation" : 77.96224718512096
        }, {
          "mean" : 125.21551724137936,
          "variance" : 12859.714225380098,
          "n" : 348,
          "max" : 772.0,
          "min" : 35.0,
          "sum" : 43575.000000000015,
          "standardDeviation" : 113.40068000404627
        }, {
          "mean" : 123.09770114942528,
          "variance" : 13217.725297293711,
          "n" : 348,
          "max" : 748.0,
          "min" : 35.0,
          "sum" : 42837.99999999999,
          "standardDeviation" : 114.96836650702537
        }, {
          "mean" : 114.27506426735222,
          "variance" : 10046.437031245858,
          "n" : 389,
          "max" : 570.0,
          "min" : 34.0,
          "sum" : 44453.000000000015,
          "standardDeviation" : 100.23191623053935
        }, {
          "mean" : 112.2348484848485,
          "variance" : 10480.007997698502,
          "n" : 396,
          "max" : 591.0,
          "min" : 35.0,
          "sum" : 44445.00000000001,
          "standardDeviation" : 102.37191019854275
        }, {
          "mean" : 61.86374133949186,
          "variance" : 1564.034631340346,
          "n" : 433,
          "max" : 473.0,
          "min" : 27.0,
          "sum" : 26786.999999999975,
          "standardDeviation" : 39.54787770968685
        }, {
          "mean" : 52.96551724137932,
          "variance" : 565.0477988671371,
          "n" : 348,
          "max" : 231.0,
          "min" : 27.0,
          "sum" : 18432.000000000004,
          "standardDeviation" : 23.770734083471993
        } ],
        "7" : [ {
          "mean" : 2096.820689655172,
          "variance" : 1.514304518032289E9,
          "n" : 430,
          "max" : 811792.0,
          "min" : 53.0,
          "sum" : 901632.8965517239,
          "standardDeviation" : 38914.065812149325
        }, {
          "mean" : 116.35632183908037,
          "variance" : 4964.206843582818,
          "n" : 435,
          "max" : 513.0,
          "min" : 35.0,
          "sum" : 50614.999999999956,
          "standardDeviation" : 70.45712769892637
        }, {
          "mean" : 104.93390804597699,
          "variance" : 5027.8601725794215,
          "n" : 348,
          "max" : 499.0,
          "min" : 35.0,
          "sum" : 36516.99999999999,
          "standardDeviation" : 70.9074056257837
        }, {
          "mean" : 137.16020671834636,
          "variance" : 247974.79810151143,
          "n" : 387,
          "max" : 9770.0,
          "min" : 35.0,
          "sum" : 53081.000000000044,
          "standardDeviation" : 497.9706799616936
        }, {
          "mean" : 116.69398907103826,
          "variance" : 10011.434867879334,
          "n" : 366,
          "max" : 658.0,
          "min" : 35.0,
          "sum" : 42710.0,
          "standardDeviation" : 100.05715800420944
        }, {
          "mean" : 106.40898345153664,
          "variance" : 7987.403426215364,
          "n" : 423,
          "max" : 910.0,
          "min" : 34.0,
          "sum" : 45011.0,
          "standardDeviation" : 89.3722743708325
        }, {
          "mean" : 89.96261682242995,
          "variance" : 5673.127404845804,
          "n" : 428,
          "max" : 552.0,
          "min" : 27.0,
          "sum" : 38504.00000000002,
          "standardDeviation" : 75.32016599056195
        }, {
          "mean" : 48.19817767653755,
          "variance" : 369.2688551190438,
          "n" : 439,
          "max" : 126.0,
          "min" : 27.0,
          "sum" : 21158.99999999998,
          "standardDeviation" : 19.21636945728937
        }, {
          "mean" : 58.031963470319624,
          "variance" : 719.0402580537049,
          "n" : 219,
          "max" : 260.0,
          "min" : 27.0,
          "sum" : 12708.999999999998,
          "standardDeviation" : 26.81492603110635
        } ],
        "8" : [ {
          "mean" : 277.0383631713557,
          "variance" : 374814.621601416,
          "n" : 386,
          "max" : 11742.0,
          "min" : 64.0,
          "sum" : 106936.80818414329,
          "standardDeviation" : 612.2210561565291
        }, {
          "mean" : 126.81628392484338,
          "variance" : 7754.401324237211,
          "n" : 479,
          "max" : 578.0,
          "min" : 35.0,
          "sum" : 60744.99999999998,
          "standardDeviation" : 88.0590786020227
        }, {
          "mean" : 104.9817708333334,
          "variance" : 5653.1093274042705,
          "n" : 384,
          "max" : 605.0,
          "min" : 34.0,
          "sum" : 40313.00000000003,
          "standardDeviation" : 75.18716198530352
        }, {
          "mean" : 132.9915492957747,
          "variance" : 10506.488628948844,
          "n" : 355,
          "max" : 668.0,
          "min" : 35.0,
          "sum" : 47212.000000000015,
          "standardDeviation" : 102.50116403704322
        }, {
          "mean" : 135.74615384615387,
          "variance" : 15476.781154834896,
          "n" : 390,
          "max" : 819.0,
          "min" : 35.0,
          "sum" : 52941.00000000001,
          "standardDeviation" : 124.40571190598483
        }, {
          "mean" : 120.96781609195386,
          "variance" : 13562.671772869337,
          "n" : 435,
          "max" : 1030.0,
          "min" : 34.0,
          "sum" : 52620.99999999993,
          "standardDeviation" : 116.45888447374608
        }, {
          "mean" : 100.1670533642692,
          "variance" : 8913.427842227382,
          "n" : 431,
          "max" : 607.0,
          "min" : 29.0,
          "sum" : 43172.00000000002,
          "standardDeviation" : 94.41095191887105
        }, {
          "mean" : 49.70227272727266,
          "variance" : 441.6127510871811,
          "n" : 440,
          "max" : 163.0,
          "min" : 27.0,
          "sum" : 21868.99999999997,
          "standardDeviation" : 21.01458424730742
        }, {
          "mean" : 56.468571428571444,
          "variance" : 805.5837766830866,
          "n" : 175,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 9882.000000000002,
          "standardDeviation" : 28.382807766024253
        } ],
        "9" : [ {
          "mean" : 305.29876543209883,
          "variance" : 535026.932795502,
          "n" : 400,
          "max" : 13497.0,
          "min" : 58.0,
          "sum" : 122119.50617283954,
          "standardDeviation" : 731.4553525646675
        }, {
          "mean" : 152.83225806451622,
          "variance" : 225208.54076751944,
          "n" : 465,
          "max" : 10142.0,
          "min" : 38.0,
          "sum" : 71067.00000000004,
          "standardDeviation" : 474.56141938375
        }, {
          "mean" : 109.07471264367821,
          "variance" : 7374.167312597302,
          "n" : 348,
          "max" : 714.0,
          "min" : 35.0,
          "sum" : 37958.000000000015,
          "standardDeviation" : 85.8729719562407
        }, {
          "mean" : 128.41343669250642,
          "variance" : 11489.89080344352,
          "n" : 387,
          "max" : 962.0,
          "min" : 35.0,
          "sum" : 49695.999999999985,
          "standardDeviation" : 107.19090821260691
        }, {
          "mean" : 138.49717514124293,
          "variance" : 17421.58214497209,
          "n" : 354,
          "max" : 798.0,
          "min" : 36.0,
          "sum" : 49028.0,
          "standardDeviation" : 131.9908411404825
        }, {
          "mean" : 118.15972222222219,
          "variance" : 11367.614800850739,
          "n" : 432,
          "max" : 733.0,
          "min" : 35.0,
          "sum" : 51044.999999999985,
          "standardDeviation" : 106.61901706942687
        }, {
          "mean" : 91.6293706293706,
          "variance" : 8505.729135350633,
          "n" : 429,
          "max" : 739.0,
          "min" : 27.0,
          "sum" : 39308.999999999985,
          "standardDeviation" : 92.22650993803589
        }, {
          "mean" : 52.44622425629293,
          "variance" : 720.5458400688597,
          "n" : 437,
          "max" : 312.0,
          "min" : 27.0,
          "sum" : 22919.00000000001,
          "standardDeviation" : 26.842984932172868
        }, {
          "mean" : 57.26008968609865,
          "variance" : 456.93204864056884,
          "n" : 223,
          "max" : 216.0,
          "min" : 26.0,
          "sum" : 12769.0,
          "standardDeviation" : 21.375968952086566
        } ],
        "10" : [ {
          "mean" : 364.1313364055299,
          "variance" : 5449953.980401439,
          "n" : 429,
          "max" : 46018.0,
          "min" : 64.0,
          "sum" : 156212.34331797232,
          "standardDeviation" : 2334.513649649845
        }, {
          "mean" : 112.65178571428574,
          "variance" : 5149.744247363372,
          "n" : 448,
          "max" : 593.0,
          "min" : 35.0,
          "sum" : 50468.00000000001,
          "standardDeviation" : 71.761718536859
        }, {
          "mean" : 105.70026525198938,
          "variance" : 3740.2476860996635,
          "n" : 377,
          "max" : 483.0,
          "min" : 36.0,
          "sum" : 39848.99999999999,
          "standardDeviation" : 61.15756442256071
        }, {
          "mean" : 116.83247422680407,
          "variance" : 8662.780648125958,
          "n" : 388,
          "max" : 679.0,
          "min" : 34.0,
          "sum" : 45330.99999999998,
          "standardDeviation" : 93.07406001741816
        }, {
          "mean" : 131.63483146067426,
          "variance" : 13415.905712929261,
          "n" : 356,
          "max" : 752.0,
          "min" : 36.0,
          "sum" : 46862.00000000004,
          "standardDeviation" : 115.82705086865184
        }, {
          "mean" : 120.75057736720555,
          "variance" : 7445.507088786244,
          "n" : 433,
          "max" : 553.0,
          "min" : 34.0,
          "sum" : 52285.0,
          "standardDeviation" : 86.28735184710587
        }, {
          "mean" : 83.37011494252876,
          "variance" : 5470.570072567402,
          "n" : 435,
          "max" : 703.0,
          "min" : 27.0,
          "sum" : 36266.00000000001,
          "standardDeviation" : 73.96330220161484
        }, {
          "mean" : 54.49885057471266,
          "variance" : 732.8035701043486,
          "n" : 435,
          "max" : 291.0,
          "min" : 27.0,
          "sum" : 23707.000000000007,
          "standardDeviation" : 27.070344846424632
        }, {
          "mean" : 54.16091954022988,
          "variance" : 873.0606604212343,
          "n" : 174,
          "max" : 227.0,
          "min" : 27.0,
          "sum" : 9423.999999999998,
          "standardDeviation" : 29.547599909658217
        } ],
        "11" : [ {
          "mean" : 255.15207373271872,
          "variance" : 482915.5842104712,
          "n" : 429,
          "max" : 14281.0,
          "min" : 49.0,
          "sum" : 109460.23963133633,
          "standardDeviation" : 694.9212791464017
        }, {
          "mean" : 216.61344537815125,
          "variance" : 1955387.382892525,
          "n" : 476,
          "max" : 24343.0,
          "min" : 35.0,
          "sum" : 103108.0,
          "standardDeviation" : 1398.3516663888684
        }, {
          "mean" : 103.75920679886691,
          "variance" : 4087.7515130054085,
          "n" : 353,
          "max" : 425.0,
          "min" : 35.0,
          "sum" : 36627.00000000002,
          "standardDeviation" : 63.93552621982092
        }, {
          "mean" : 123.47938144329885,
          "variance" : 12577.630064732677,
          "n" : 388,
          "max" : 919.0,
          "min" : 35.0,
          "sum" : 47909.999999999956,
          "standardDeviation" : 112.15003372595426
        }, {
          "mean" : 130.80306905370853,
          "variance" : 13543.614964915725,
          "n" : 391,
          "max" : 972.0,
          "min" : 35.0,
          "sum" : 51144.00000000004,
          "standardDeviation" : 116.37703796245944
        }, {
          "mean" : 112.68719211822669,
          "variance" : 9409.074749133366,
          "n" : 406,
          "max" : 599.0,
          "min" : 35.0,
          "sum" : 45751.00000000004,
          "standardDeviation" : 97.0003853040459
        }, {
          "mean" : 84.17149220489975,
          "variance" : 5915.655792634417,
          "n" : 449,
          "max" : 536.0,
          "min" : 27.0,
          "sum" : 37792.999999999985,
          "standardDeviation" : 76.91330049240129
        }, {
          "mean" : 57.83374083129585,
          "variance" : 855.7124862169816,
          "n" : 409,
          "max" : 255.0,
          "min" : 27.0,
          "sum" : 23654.000000000004,
          "standardDeviation" : 29.25256375460075
        }, {
          "mean" : 48.71264367816094,
          "variance" : 394.39093747923727,
          "n" : 174,
          "max" : 115.0,
          "min" : 27.0,
          "sum" : 8476.000000000004,
          "standardDeviation" : 19.85927837257027
        } ],
        "12" : [ {
          "mean" : 300.06293706293746,
          "variance" : 877368.1899549046,
          "n" : 424,
          "max" : 14154.0,
          "min" : 62.0,
          "sum" : 127226.68531468548,
          "standardDeviation" : 936.6793421202929
        }, {
          "mean" : 121.01103752759386,
          "variance" : 10481.718904452124,
          "n" : 453,
          "max" : 832.0,
          "min" : 34.0,
          "sum" : 54818.000000000015,
          "standardDeviation" : 102.38026618666375
        }, {
          "mean" : 102.86968085106396,
          "variance" : 6822.118971631204,
          "n" : 376,
          "max" : 601.0,
          "min" : 35.0,
          "sum" : 38679.00000000005,
          "standardDeviation" : 82.5961195918501
        }, {
          "mean" : 130.3937677053825,
          "variance" : 13944.892801957269,
          "n" : 353,
          "max" : 924.0,
          "min" : 36.0,
          "sum" : 46029.000000000015,
          "standardDeviation" : 118.08849563762453
        }, {
          "mean" : 129.38461538461536,
          "variance" : 14459.22444136839,
          "n" : 390,
          "max" : 727.0,
          "min" : 35.0,
          "sum" : 50459.99999999999,
          "standardDeviation" : 120.24651529823386
        }, {
          "mean" : 153.65648854961813,
          "variance" : 259390.3128213118,
          "n" : 393,
          "max" : 10011.0,
          "min" : 35.0,
          "sum" : 60386.99999999993,
          "standardDeviation" : 509.3037530014007
        }, {
          "mean" : 147.1790697674419,
          "variance" : 437284.38510868984,
          "n" : 430,
          "max" : 9713.0,
          "min" : 28.0,
          "sum" : 63287.000000000015,
          "standardDeviation" : 661.2748181419657
        }, {
          "mean" : 55.485125858123524,
          "variance" : 615.6998929313705,
          "n" : 437,
          "max" : 230.0,
          "min" : 26.0,
          "sum" : 24246.99999999998,
          "standardDeviation" : 24.813300726251043
        }, {
          "mean" : 55.12785388127853,
          "variance" : 363.3046793180008,
          "n" : 219,
          "max" : 109.0,
          "min" : 26.0,
          "sum" : 12072.999999999998,
          "standardDeviation" : 19.060552964644042
        } ],
        "13" : [ {
          "mean" : 347.4118993135012,
          "variance" : 4186273.5088489056,
          "n" : 432,
          "max" : 41005.0,
          "min" : 55.0,
          "sum" : 150081.9405034325,
          "standardDeviation" : 2046.0384915364875
        }, {
          "mean" : 116.57736720554269,
          "variance" : 8687.337171756053,
          "n" : 433,
          "max" : 803.0,
          "min" : 34.0,
          "sum" : 50477.999999999985,
          "standardDeviation" : 93.2058859287119
        }, {
          "mean" : 107.87046632124354,
          "variance" : 4002.149411210556,
          "n" : 386,
          "max" : 479.0,
          "min" : 35.0,
          "sum" : 41638.00000000001,
          "standardDeviation" : 63.2625435088612
        }, {
          "mean" : 124.92634560906508,
          "variance" : 12141.619559618848,
          "n" : 353,
          "max" : 700.0,
          "min" : 35.0,
          "sum" : 44098.99999999997,
          "standardDeviation" : 110.18901741833824
        }, {
          "mean" : 129.55524861878456,
          "variance" : 12965.85427985491,
          "n" : 362,
          "max" : 713.0,
          "min" : 35.0,
          "sum" : 46899.00000000001,
          "standardDeviation" : 113.867705166368
        }, {
          "mean" : 111.82296650717701,
          "variance" : 10689.3546751116,
          "n" : 418,
          "max" : 733.0,
          "min" : 34.0,
          "sum" : 46741.99999999999,
          "standardDeviation" : 103.38933540318169
        }, {
          "mean" : 123.0810126582278,
          "variance" : 250806.5619482105,
          "n" : 395,
          "max" : 9842.0,
          "min" : 26.0,
          "sum" : 48616.999999999985,
          "standardDeviation" : 500.80591245332806
        }, {
          "mean" : 50.508045977011506,
          "variance" : 518.7021240531803,
          "n" : 435,
          "max" : 264.0,
          "min" : 27.0,
          "sum" : 21971.000000000004,
          "standardDeviation" : 22.775032910035065
        }, {
          "mean" : 49.34482758620692,
          "variance" : 379.142175066313,
          "n" : 261,
          "max" : 121.0,
          "min" : 26.0,
          "sum" : 12879.000000000005,
          "standardDeviation" : 19.471573512849776
        } ],
        "14" : [ {
          "mean" : 284.33255813953474,
          "variance" : 715996.2597766571,
          "n" : 425,
          "max" : 15004.0,
          "min" : 59.0,
          "sum" : 120841.33720930226,
          "standardDeviation" : 846.1656219539158
        }, {
          "mean" : 148.81818181818187,
          "variance" : 217144.30855249523,
          "n" : 440,
          "max" : 9669.0,
          "min" : 34.0,
          "sum" : 65480.00000000002,
          "standardDeviation" : 465.9874553595786
        }, {
          "mean" : 103.66927083333339,
          "variance" : 5763.062656385983,
          "n" : 384,
          "max" : 534.0,
          "min" : 35.0,
          "sum" : 39809.00000000002,
          "standardDeviation" : 75.91483818322992
        }, {
          "mean" : 2789.184135977337,
          "variance" : 2.504797806014293E9,
          "n" : 353,
          "max" : 940439.0,
          "min" : 34.0,
          "sum" : 984582.0,
          "standardDeviation" : 50047.95506326201
        }, {
          "mean" : 128.05670103092785,
          "variance" : 15386.177655238555,
          "n" : 388,
          "max" : 1063.0,
          "min" : 34.0,
          "sum" : 49686.00000000001,
          "standardDeviation" : 124.04103214355544
        }, {
          "mean" : 108.30023640661942,
          "variance" : 12214.566042598015,
          "n" : 423,
          "max" : 747.0,
          "min" : 34.0,
          "sum" : 45811.000000000015,
          "standardDeviation" : 110.51952787900433
        }, {
          "mean" : 108.93643031784848,
          "variance" : 9308.515556833976,
          "n" : 409,
          "max" : 542.0,
          "min" : 29.0,
          "sum" : 44555.00000000003,
          "standardDeviation" : 96.48064861325288
        }, {
          "mean" : 47.7064220183486,
          "variance" : 683.5825793525256,
          "n" : 436,
          "max" : 381.0,
          "min" : 27.0,
          "sum" : 20799.99999999999,
          "standardDeviation" : 26.145412204678006
        }, {
          "mean" : 49.8110599078341,
          "variance" : 648.1539511862094,
          "n" : 217,
          "max" : 236.0,
          "min" : 26.0,
          "sum" : 10809.0,
          "standardDeviation" : 25.45886783001572
        } ],
        "15" : [ {
          "mean" : 327.58524173028013,
          "variance" : 2151961.462740822,
          "n" : 388,
          "max" : 25947.0,
          "min" : 47.0,
          "sum" : 127103.0737913487,
          "standardDeviation" : 1466.956530624143
        }, {
          "mean" : 78.85953878406698,
          "variance" : 831.2890527280091,
          "n" : 477,
          "max" : 270.0,
          "min" : 31.0,
          "sum" : 37615.99999999995,
          "standardDeviation" : 28.83208373891851
        }, {
          "mean" : 115.76562500000003,
          "variance" : 293943.8091547001,
          "n" : 384,
          "max" : 10670.0,
          "min" : 32.0,
          "sum" : 44454.000000000015,
          "standardDeviation" : 542.1658502291527
        }, {
          "mean" : 120.46498599439775,
          "variance" : 8294.811270575648,
          "n" : 357,
          "max" : 765.0,
          "min" : 35.0,
          "sum" : 43006.0,
          "standardDeviation" : 91.07585448721109
        }, {
          "mean" : 111.89405684754527,
          "variance" : 6637.965430908677,
          "n" : 387,
          "max" : 553.0,
          "min" : 34.0,
          "sum" : 43303.00000000002,
          "standardDeviation" : 81.47371005980197
        }, {
          "mean" : 101.42824074074079,
          "variance" : 6224.899711050962,
          "n" : 432,
          "max" : 596.0,
          "min" : 34.0,
          "sum" : 43817.00000000002,
          "standardDeviation" : 78.89803363234702
        }, {
          "mean" : 85.05287356321843,
          "variance" : 5285.575538958637,
          "n" : 435,
          "max" : 511.0,
          "min" : 28.0,
          "sum" : 36998.000000000015,
          "standardDeviation" : 72.70196379024873
        }, {
          "mean" : 46.574712643678176,
          "variance" : 337.1021240531808,
          "n" : 435,
          "max" : 109.0,
          "min" : 26.0,
          "sum" : 20260.000000000007,
          "standardDeviation" : 18.36034106581849
        }, {
          "mean" : 49.855555555555554,
          "variance" : 768.3030415890752,
          "n" : 180,
          "max" : 322.0,
          "min" : 26.0,
          "sum" : 8974.0,
          "standardDeviation" : 27.718279917575607
        } ],
        "16" : [ {
          "mean" : 339.84666666666664,
          "variance" : 3761824.6200890886,
          "n" : 445,
          "max" : 35086.0,
          "min" : 66.0,
          "sum" : 151231.76666666666,
          "standardDeviation" : 1939.5423738833572
        }, {
          "mean" : 107.27982646420823,
          "variance" : 2880.7323964915604,
          "n" : 461,
          "max" : 429.0,
          "min" : 37.0,
          "sum" : 49455.99999999999,
          "standardDeviation" : 53.67245472764927
        }, {
          "mean" : 94.06868131868126,
          "variance" : 3535.055875942239,
          "n" : 364,
          "max" : 440.0,
          "min" : 36.0,
          "sum" : 34240.99999999998,
          "standardDeviation" : 59.45633587719848
        }, {
          "mean" : 105.07978723404254,
          "variance" : 5499.860283687945,
          "n" : 376,
          "max" : 548.0,
          "min" : 34.0,
          "sum" : 39509.99999999999,
          "standardDeviation" : 74.16104289779065
        }, {
          "mean" : 110.50000000000001,
          "variance" : 8259.713178294574,
          "n" : 388,
          "max" : 611.0,
          "min" : 34.0,
          "sum" : 42874.00000000001,
          "standardDeviation" : 90.882964180833
        }, {
          "mean" : 96.57934508816125,
          "variance" : 4881.405935933643,
          "n" : 397,
          "max" : 467.0,
          "min" : 33.0,
          "sum" : 38342.000000000015,
          "standardDeviation" : 69.86705901877968
        }, {
          "mean" : 77.51034482758622,
          "variance" : 3808.697473383125,
          "n" : 435,
          "max" : 413.0,
          "min" : 27.0,
          "sum" : 33717.00000000001,
          "standardDeviation" : 61.71464553396645
        }, {
          "mean" : 51.96781609195399,
          "variance" : 503.90679591080044,
          "n" : 435,
          "max" : 228.0,
          "min" : 27.0,
          "sum" : 22605.999999999985,
          "standardDeviation" : 22.447868404612507
        }, {
          "mean" : 54.545977011494266,
          "variance" : 371.92561956016186,
          "n" : 174,
          "max" : 116.0,
          "min" : 27.0,
          "sum" : 9491.000000000002,
          "standardDeviation" : 19.285373202511842
        } ],
        "17" : [ {
          "mean" : 285.9978947368422,
          "variance" : 2615626.8459871206,
          "n" : 470,
          "max" : 32641.0,
          "min" : 57.0,
          "sum" : 134419.01052631583,
          "standardDeviation" : 1617.2899696675054
        }, {
          "mean" : 75.7199017199018,
          "variance" : 1118.8671645223374,
          "n" : 407,
          "max" : 292.0,
          "min" : 32.0,
          "sum" : 30818.000000000033,
          "standardDeviation" : 33.44947181230725
        }, {
          "mean" : 123.61497326203214,
          "variance" : 370649.25618270726,
          "n" : 374,
          "max" : 11812.0,
          "min" : 31.0,
          "sum" : 46232.00000000002,
          "standardDeviation" : 608.8097044091095
        }, {
          "mean" : 126.502824858757,
          "variance" : 12130.488660552806,
          "n" : 354,
          "max" : 892.0,
          "min" : 35.0,
          "sum" : 44781.99999999998,
          "standardDeviation" : 110.13849763163108
        }, {
          "mean" : 129.4381443298969,
          "variance" : 16287.69383840806,
          "n" : 388,
          "max" : 746.0,
          "min" : 34.0,
          "sum" : 50221.99999999999,
          "standardDeviation" : 127.62324959978123
        }, {
          "mean" : 122.85150812064963,
          "variance" : 15637.92673609237,
          "n" : 431,
          "max" : 733.0,
          "min" : 35.0,
          "sum" : 52948.999999999985,
          "standardDeviation" : 125.05169625435862
        }, {
          "mean" : 116.639798488665,
          "variance" : 14005.296694908788,
          "n" : 397,
          "max" : 836.0,
          "min" : 35.0,
          "sum" : 46306.0,
          "standardDeviation" : 118.3439761665493
        }, {
          "mean" : 116.68151447661477,
          "variance" : 14511.114858415513,
          "n" : 449,
          "max" : 846.0,
          "min" : 24.0,
          "sum" : 52390.00000000003,
          "standardDeviation" : 120.46208888449308
        }, {
          "mean" : 160.20487804878042,
          "variance" : 469151.86958393117,
          "n" : 205,
          "max" : 9795.0,
          "min" : 34.0,
          "sum" : 32841.999999999985,
          "standardDeviation" : 684.9466180542329
        } ],
        "18" : [ {
          "mean" : 259.7684478371503,
          "variance" : 453489.1783896766,
          "n" : 388,
          "max" : 13186.0,
          "min" : 66.0,
          "sum" : 100790.15776081431,
          "standardDeviation" : 673.4160514790813
        }, {
          "mean" : 104.65764023210833,
          "variance" : 5263.291477366444,
          "n" : 517,
          "max" : 576.0,
          "min" : 34.0,
          "sum" : 54108.00000000001,
          "standardDeviation" : 72.54854565989896
        }, {
          "mean" : 96.87535410764875,
          "variance" : 3988.6435101725497,
          "n" : 353,
          "max" : 425.0,
          "min" : 34.0,
          "sum" : 34197.00000000001,
          "standardDeviation" : 63.15570845278002
        }, {
          "mean" : 115.77120822622103,
          "variance" : 7884.651127660148,
          "n" : 389,
          "max" : 559.0,
          "min" : 34.0,
          "sum" : 45034.999999999985,
          "standardDeviation" : 88.79555804014156
        }, {
          "mean" : 137.3657289002557,
          "variance" : 275750.04795068514,
          "n" : 391,
          "max" : 10316.0,
          "min" : 34.0,
          "sum" : 53709.99999999998,
          "standardDeviation" : 525.1190797816103
        }, {
          "mean" : 103.98727735368954,
          "variance" : 7069.313613231549,
          "n" : 393,
          "max" : 432.0,
          "min" : 34.0,
          "sum" : 40866.999999999985,
          "standardDeviation" : 84.07921035090392
        }, {
          "mean" : 130.07142857142856,
          "variance" : 741044.9792265893,
          "n" : 448,
          "max" : 18220.0,
          "min" : 27.0,
          "sum" : 58271.99999999999,
          "standardDeviation" : 860.8396942675154
        }, {
          "mean" : 77.8171021377672,
          "variance" : 257784.2545639633,
          "n" : 421,
          "max" : 10451.0,
          "min" : 27.0,
          "sum" : 32760.99999999999,
          "standardDeviation" : 507.7245853452079
        }, {
          "mean" : 70.92528735632182,
          "variance" : 1360.2891834429604,
          "n" : 174,
          "max" : 285.0,
          "min" : 29.0,
          "sum" : 12340.999999999996,
          "standardDeviation" : 36.88209841431152
        } ],
        "19" : [ {
          "mean" : 253.8123456790123,
          "variance" : 582990.4201442362,
          "n" : 400,
          "max" : 10430.0,
          "min" : 62.0,
          "sum" : 101524.93827160493,
          "standardDeviation" : 763.5380934467096
        }, {
          "mean" : 124.47741935483872,
          "variance" : 8264.224165739706,
          "n" : 465,
          "max" : 777.0,
          "min" : 35.0,
          "sum" : 57882.0,
          "standardDeviation" : 90.90777835663847
        }, {
          "mean" : 100.70312500000001,
          "variance" : 5355.546099869454,
          "n" : 384,
          "max" : 737.0,
          "min" : 35.0,
          "sum" : 38670.00000000001,
          "standardDeviation" : 73.18159672943365
        }, {
          "mean" : 131.4225352112675,
          "variance" : 10479.402880560203,
          "n" : 355,
          "max" : 945.0,
          "min" : 38.0,
          "sum" : 46654.99999999996,
          "standardDeviation" : 102.36895467162006
        }, {
          "mean" : 128.87305699481848,
          "variance" : 10425.856570890248,
          "n" : 386,
          "max" : 686.0,
          "min" : 35.0,
          "sum" : 49744.999999999935,
          "standardDeviation" : 102.1070838428473
        }, {
          "mean" : 109.24937027707804,
          "variance" : 9645.394728137797,
          "n" : 397,
          "max" : 667.0,
          "min" : 35.0,
          "sum" : 43371.999999999985,
          "standardDeviation" : 98.21097050807408
        }, {
          "mean" : 82.59438775510205,
          "variance" : 4816.722525966911,
          "n" : 392,
          "max" : 448.0,
          "min" : 27.0,
          "sum" : 32377.000000000004,
          "standardDeviation" : 69.40261180940463
        }, {
          "mean" : 55.77345537757433,
          "variance" : 568.0242478953669,
          "n" : 437,
          "max" : 224.0,
          "min" : 26.0,
          "sum" : 24372.99999999998,
          "standardDeviation" : 23.833259279741135
        }, {
          "mean" : 62.53281853281852,
          "variance" : 744.280895513454,
          "n" : 259,
          "max" : 233.0,
          "min" : 28.0,
          "sum" : 16195.999999999996,
          "standardDeviation" : 27.28151197264283
        } ],
        "20" : [ {
          "mean" : 310.9539641943733,
          "variance" : 1331883.0081316808,
          "n" : 386,
          "max" : 20703.0,
          "min" : 60.0,
          "sum" : 120028.2301790281,
          "standardDeviation" : 1154.0723582738133
        }, {
          "mean" : 126.80388349514557,
          "variance" : 7185.574303955275,
          "n" : 515,
          "max" : 558.0,
          "min" : 37.0,
          "sum" : 65303.99999999997,
          "standardDeviation" : 84.76776689258291
        }, {
          "mean" : 108.79154929577457,
          "variance" : 5475.1824142595715,
          "n" : 355,
          "max" : 583.0,
          "min" : 35.0,
          "sum" : 38620.99999999997,
          "standardDeviation" : 73.99447556581215
        }, {
          "mean" : 119.01295336787577,
          "variance" : 10282.127104501717,
          "n" : 386,
          "max" : 799.0,
          "min" : 34.0,
          "sum" : 45939.000000000044,
          "standardDeviation" : 101.40082398334698
        }, {
          "mean" : 143.8258426966292,
          "variance" : 14096.363949992086,
          "n" : 356,
          "max" : 751.0,
          "min" : 35.0,
          "sum" : 51201.99999999999,
          "standardDeviation" : 118.7281093507013
        }, {
          "mean" : 118.68129330254042,
          "variance" : 11246.35652424942,
          "n" : 433,
          "max" : 614.0,
          "min" : 34.0,
          "sum" : 51389.00000000001,
          "standardDeviation" : 106.04884027772025
        }, {
          "mean" : 109.9356435643564,
          "variance" : 263676.44249809603,
          "n" : 404,
          "max" : 10282.0,
          "min" : 27.0,
          "sum" : 44413.999999999985,
          "standardDeviation" : 513.4943451471457
        }, {
          "mean" : 51.150326797385645,
          "variance" : 671.6563918143676,
          "n" : 459,
          "max" : 267.0,
          "min" : 26.0,
          "sum" : 23478.00000000001,
          "standardDeviation" : 25.916334459455634
        }, {
          "mean" : 56.834254143646405,
          "variance" : 719.8279312461632,
          "n" : 181,
          "max" : 185.0,
          "min" : 27.0,
          "sum" : 10287.0,
          "standardDeviation" : 26.82960922649011
        } ],
        "21" : [ {
          "mean" : 295.65394402035633,
          "variance" : 718513.6350418032,
          "n" : 388,
          "max" : 12703.0,
          "min" : 62.0,
          "sum" : 114713.73027989826,
          "standardDeviation" : 847.6518359809074
        }, {
          "mean" : 120.95387840670857,
          "variance" : 6909.918036396947,
          "n" : 477,
          "max" : 590.0,
          "min" : 35.0,
          "sum" : 57694.999999999985,
          "standardDeviation" : 83.12591675522711
        }, {
          "mean" : 113.3413978494624,
          "variance" : 6426.68906326986,
          "n" : 372,
          "max" : 433.0,
          "min" : 35.0,
          "sum" : 42163.000000000015,
          "standardDeviation" : 80.16663310424019
        }, {
          "mean" : 100.90027700831027,
          "variance" : 6857.056694367503,
          "n" : 361,
          "max" : 699.0,
          "min" : 34.0,
          "sum" : 36425.00000000001,
          "standardDeviation" : 82.8073468622652
        }, {
          "mean" : 147.29494382022472,
          "variance" : 16251.904312391209,
          "n" : 356,
          "max" : 920.0,
          "min" : 35.0,
          "sum" : 52437.0,
          "standardDeviation" : 127.48295694872789
        }, {
          "mean" : 121.70093457943929,
          "variance" : 13241.877563527338,
          "n" : 428,
          "max" : 727.0,
          "min" : 34.0,
          "sum" : 52088.000000000015,
          "standardDeviation" : 115.07335731405136
        }, {
          "mean" : 122.07304785894208,
          "variance" : 13354.926468717389,
          "n" : 397,
          "max" : 759.0,
          "min" : 35.0,
          "sum" : 48463.00000000001,
          "standardDeviation" : 115.56351703161941
        }, {
          "mean" : 50.03009259259258,
          "variance" : 493.2450320099682,
          "n" : 432,
          "max" : 243.0,
          "min" : 27.0,
          "sum" : 21612.999999999996,
          "standardDeviation" : 22.209120469076847
        }, {
          "mean" : 56.625000000000014,
          "variance" : 726.265684410646,
          "n" : 264,
          "max" : 254.0,
          "min" : 27.0,
          "sum" : 14949.000000000004,
          "standardDeviation" : 26.94931695629123
        } ],
        "22" : [ {
          "mean" : 338.742459396752,
          "variance" : 1257212.8009604495,
          "n" : 426,
          "max" : 18554.0,
          "min" : 61.0,
          "sum" : 144304.28770301634,
          "standardDeviation" : 1121.2550115653662
        }, {
          "mean" : 134.03189066059227,
          "variance" : 9121.332313997147,
          "n" : 439,
          "max" : 769.0,
          "min" : 36.0,
          "sum" : 58840.00000000001,
          "standardDeviation" : 95.50566639732507
        }, {
          "mean" : 103.23255813953485,
          "variance" : 5623.230750692854,
          "n" : 387,
          "max" : 445.0,
          "min" : 35.0,
          "sum" : 39950.999999999985,
          "standardDeviation" : 74.9882040769937
        }, {
          "mean" : 137.5169491525425,
          "variance" : 14443.366567436498,
          "n" : 354,
          "max" : 843.0,
          "min" : 35.0,
          "sum" : 48681.00000000005,
          "standardDeviation" : 120.18055819239856
        }, {
          "mean" : 149.374358974359,
          "variance" : 245539.81322259575,
          "n" : 390,
          "max" : 9678.0,
          "min" : 34.0,
          "sum" : 58256.000000000015,
          "standardDeviation" : 495.519740497385
        }, {
          "mean" : 134.86206896551727,
          "variance" : 217632.01318925802,
          "n" : 435,
          "max" : 9594.0,
          "min" : 34.0,
          "sum" : 58665.000000000015,
          "standardDeviation" : 466.510464179806
        }, {
          "mean" : 93.9376498800959,
          "variance" : 10081.159564655967,
          "n" : 417,
          "max" : 695.0,
          "min" : 28.0,
          "sum" : 39171.99999999999,
          "standardDeviation" : 100.40497778823502
        }, {
          "mean" : 48.61555555555555,
          "variance" : 539.1592229646127,
          "n" : 450,
          "max" : 270.0,
          "min" : 27.0,
          "sum" : 21877.0,
          "standardDeviation" : 23.219802388578003
        }, {
          "mean" : 59.71186440677969,
          "variance" : 1011.3199152542376,
          "n" : 177,
          "max" : 284.0,
          "min" : 27.0,
          "sum" : 10569.000000000005,
          "standardDeviation" : 31.80125650433073
        } ],
        "23" : [ {
          "mean" : 259.8850574712645,
          "variance" : 460902.2770803541,
          "n" : 430,
          "max" : 12037.0,
          "min" : 51.0,
          "sum" : 111750.57471264372,
          "standardDeviation" : 678.8978399437975
        }, {
          "mean" : 2531.552016985135,
          "variance" : 2.764874977609519E9,
          "n" : 471,
          "max" : 1141272.0,
          "min" : 34.0,
          "sum" : 1192360.9999999986,
          "standardDeviation" : 52582.07848316305
        }, {
          "mean" : 100.97175141242934,
          "variance" : 4278.095517037177,
          "n" : 354,
          "max" : 431.0,
          "min" : 35.0,
          "sum" : 35743.999999999985,
          "standardDeviation" : 65.40715187987608
        }, {
          "mean" : 116.42450142450137,
          "variance" : 6709.622140822143,
          "n" : 351,
          "max" : 514.0,
          "min" : 34.0,
          "sum" : 40864.99999999998,
          "standardDeviation" : 81.91228321089666
        }, {
          "mean" : 112.34805194805205,
          "variance" : 8597.165002705626,
          "n" : 385,
          "max" : 660.0,
          "min" : 35.0,
          "sum" : 43254.00000000004,
          "standardDeviation" : 92.72089841403407
        }, {
          "mean" : 107.39268292682932,
          "variance" : 7090.610704275755,
          "n" : 410,
          "max" : 657.0,
          "min" : 34.0,
          "sum" : 44031.00000000002,
          "standardDeviation" : 84.20576407987612
        }, {
          "mean" : 85.07451923076917,
          "variance" : 5392.690819045415,
          "n" : 416,
          "max" : 491.0,
          "min" : 26.0,
          "sum" : 35390.99999999997,
          "standardDeviation" : 73.43494276599809
        }, {
          "mean" : 58.87356321839079,
          "variance" : 681.4701520207636,
          "n" : 435,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 25609.999999999996,
          "standardDeviation" : 26.104983279457652
        }, {
          "mean" : 55.90134529147982,
          "variance" : 491.68391710095756,
          "n" : 223,
          "max" : 214.0,
          "min" : 26.0,
          "sum" : 12466.0,
          "standardDeviation" : 22.173946809284033
        } ],
        "24" : [ {
          "mean" : 257.6093023255815,
          "variance" : 535939.4553911207,
          "n" : 425,
          "max" : 11545.0,
          "min" : 70.0,
          "sum" : 109483.95348837214,
          "standardDeviation" : 732.0788587243322
        }, {
          "mean" : 112.70378151260492,
          "variance" : 5031.5773330384745,
          "n" : 476,
          "max" : 504.0,
          "min" : 35.0,
          "sum" : 53646.99999999994,
          "standardDeviation" : 70.93361215276207
        }, {
          "mean" : 103.32676056338029,
          "variance" : 3646.9889711148235,
          "n" : 355,
          "max" : 427.0,
          "min" : 36.0,
          "sum" : 36681.0,
          "standardDeviation" : 60.39030527423109
        }, {
          "mean" : 98.92857142857149,
          "variance" : 2746.6445012787754,
          "n" : 392,
          "max" : 337.0,
          "min" : 34.0,
          "sum" : 38780.00000000002,
          "standardDeviation" : 52.408439218114246
        }, {
          "mean" : 135.50385604113117,
          "variance" : 144463.85887684507,
          "n" : 389,
          "max" : 7409.0,
          "min" : 35.0,
          "sum" : 52711.00000000003,
          "standardDeviation" : 380.08401555030576
        }, {
          "mean" : 96.24619289340106,
          "variance" : 4758.033382415628,
          "n" : 394,
          "max" : 479.0,
          "min" : 35.0,
          "sum" : 37921.000000000015,
          "standardDeviation" : 68.97849942130973
        }, {
          "mean" : 77.76744186046517,
          "variance" : 4574.026310603069,
          "n" : 473,
          "max" : 508.0,
          "min" : 27.0,
          "sum" : 36784.00000000002,
          "standardDeviation" : 67.63154819019796
        }, {
          "mean" : 52.56926952141058,
          "variance" : 402.28117446505354,
          "n" : 397,
          "max" : 108.0,
          "min" : 27.0,
          "sum" : 20870.0,
          "standardDeviation" : 20.056948283950216
        }, {
          "mean" : 63.70689655172416,
          "variance" : 754.7979868447281,
          "n" : 174,
          "max" : 264.0,
          "min" : 27.0,
          "sum" : 11085.000000000004,
          "standardDeviation" : 27.47358707640355
        } ],
        "25" : [ {
          "mean" : 257.0297482837527,
          "variance" : 806101.478470808,
          "n" : 432,
          "max" : 13760.0,
          "min" : 52.0,
          "sum" : 111036.85125858118,
          "standardDeviation" : 897.8315423679478
        }, {
          "mean" : 111.41801385681296,
          "variance" : 4497.757730305361,
          "n" : 433,
          "max" : 563.0,
          "min" : 36.0,
          "sum" : 48244.000000000015,
          "standardDeviation" : 67.06532435100394
        }, {
          "mean" : 89.05172413793109,
          "variance" : 3138.5102852032182,
          "n" : 348,
          "max" : 578.0,
          "min" : 35.0,
          "sum" : 30990.00000000002,
          "standardDeviation" : 56.02240877723144
        }, {
          "mean" : 106.41237113402063,
          "variance" : 5888.759743200407,
          "n" : 388,
          "max" : 495.0,
          "min" : 35.0,
          "sum" : 41288.00000000001,
          "standardDeviation" : 76.73825475732691
        }, {
          "mean" : 120.4164456233422,
          "variance" : 8732.66387775834,
          "n" : 377,
          "max" : 839.0,
          "min" : 36.0,
          "sum" : 45397.00000000001,
          "standardDeviation" : 93.44872325376275
        }, {
          "mean" : 95.29411764705885,
          "variance" : 4835.46119381414,
          "n" : 408,
          "max" : 445.0,
          "min" : 35.0,
          "sum" : 38880.000000000015,
          "standardDeviation" : 69.53748049659363
        }, {
          "mean" : 111.34731934731948,
          "variance" : 214776.31133041426,
          "n" : 429,
          "max" : 9563.0,
          "min" : 26.0,
          "sum" : 47768.00000000006,
          "standardDeviation" : 463.4396523069797
        }, {
          "mean" : 53.19451371571073,
          "variance" : 516.6270698254366,
          "n" : 401,
          "max" : 229.0,
          "min" : 27.0,
          "sum" : 21331.0,
          "standardDeviation" : 22.72943179724114
        }, {
          "mean" : 52.00386100386098,
          "variance" : 336.8565741821556,
          "n" : 259,
          "max" : 100.0,
          "min" : 28.0,
          "sum" : 13468.999999999995,
          "standardDeviation" : 18.35365288388542
        } ],
        "26" : [ {
          "mean" : 283.11899313501146,
          "variance" : 696074.5316797184,
          "n" : 432,
          "max" : 15399.0,
          "min" : 38.0,
          "sum" : 122307.40503432495,
          "standardDeviation" : 834.3108123953077
        }, {
          "mean" : 117.10993657505283,
          "variance" : 3914.017549360376,
          "n" : 473,
          "max" : 478.0,
          "min" : 38.0,
          "sum" : 55392.999999999985,
          "standardDeviation" : 62.56210953412917
        }, {
          "mean" : 104.72934472934469,
          "variance" : 3897.6036792836812,
          "n" : 351,
          "max" : 383.0,
          "min" : 36.0,
          "sum" : 36759.999999999985,
          "standardDeviation" : 62.43079111531169
        }, {
          "mean" : 114.19142857142855,
          "variance" : 7863.794195661065,
          "n" : 350,
          "max" : 546.0,
          "min" : 34.0,
          "sum" : 39966.99999999999,
          "standardDeviation" : 88.6780367151927
        }, {
          "mean" : 128.6494845360825,
          "variance" : 10863.71144676203,
          "n" : 388,
          "max" : 686.0,
          "min" : 35.0,
          "sum" : 49916.00000000001,
          "standardDeviation" : 104.22912955005444
        }, {
          "mean" : 111.88045977011497,
          "variance" : 7660.764479050797,
          "n" : 435,
          "max" : 630.0,
          "min" : 35.0,
          "sum" : 48668.00000000001,
          "standardDeviation" : 87.5257932214887
        }, {
          "mean" : 91.96915167095112,
          "variance" : 5467.303169639308,
          "n" : 389,
          "max" : 562.0,
          "min" : 27.0,
          "sum" : 35775.999999999985,
          "standardDeviation" : 73.94121428296474
        }, {
          "mean" : 57.1461187214612,
          "variance" : 1021.2692183108169,
          "n" : 438,
          "max" : 244.0,
          "min" : 27.0,
          "sum" : 25030.000000000004,
          "standardDeviation" : 31.95730305127166
        }, {
          "mean" : 56.47272727272727,
          "variance" : 727.181901203819,
          "n" : 220,
          "max" : 155.0,
          "min" : 27.0,
          "sum" : 12424.0,
          "standardDeviation" : 26.966310485563632
        } ],
        "27" : [ {
          "mean" : 319.9007633587786,
          "variance" : 795651.1916575789,
          "n" : 388,
          "max" : 11695.0,
          "min" : 58.0,
          "sum" : 124121.4961832061,
          "standardDeviation" : 891.9928204069688
        }, {
          "mean" : 125.17190775681351,
          "variance" : 9073.974587319208,
          "n" : 477,
          "max" : 757.0,
          "min" : 35.0,
          "sum" : 59707.000000000044,
          "standardDeviation" : 95.2574122434533
        }, {
          "mean" : 113.46264367816089,
          "variance" : 6736.842980887078,
          "n" : 348,
          "max" : 541.0,
          "min" : 35.0,
          "sum" : 39484.999999999985,
          "standardDeviation" : 82.07827350089107
        }, {
          "mean" : 119.80361757105946,
          "variance" : 11773.13749983264,
          "n" : 387,
          "max" : 1002.0,
          "min" : 34.0,
          "sum" : 46364.000000000015,
          "standardDeviation" : 108.50408978390003
        }, {
          "mean" : 124.51025641025646,
          "variance" : 12832.168274998345,
          "n" : 390,
          "max" : 717.0,
          "min" : 36.0,
          "sum" : 48559.00000000002,
          "standardDeviation" : 113.2791608152106
        }, {
          "mean" : 111.96491228070172,
          "variance" : 9192.697258220924,
          "n" : 399,
          "max" : 601.0,
          "min" : 34.0,
          "sum" : 44673.999999999985,
          "standardDeviation" : 95.87855473577459
        }, {
          "mean" : 95.55477855477865,
          "variance" : 8618.2849595887,
          "n" : 429,
          "max" : 572.0,
          "min" : 27.0,
          "sum" : 40993.000000000044,
          "standardDeviation" : 92.83471850330942
        }, {
          "mean" : 52.75342465753424,
          "variance" : 586.4013040343561,
          "n" : 438,
          "max" : 262.0,
          "min" : 26.0,
          "sum" : 23105.999999999996,
          "standardDeviation" : 24.215724313642905
        }, {
          "mean" : 58.67123287671234,
          "variance" : 555.4051778308406,
          "n" : 219,
          "max" : 245.0,
          "min" : 26.0,
          "sum" : 12849.000000000002,
          "standardDeviation" : 23.567035830389035
        } ],
        "28" : [ {
          "mean" : 290.21263157894754,
          "variance" : 992605.7838063512,
          "n" : 470,
          "max" : 16686.0,
          "min" : 52.0,
          "sum" : 136399.93684210535,
          "standardDeviation" : 996.2960322144976
        }, {
          "mean" : 124.72602739726035,
          "variance" : 9723.165041848217,
          "n" : 438,
          "max" : 625.0,
          "min" : 38.0,
          "sum" : 54630.00000000004,
          "standardDeviation" : 98.60611057053319
        }, {
          "mean" : 112.74611398963728,
          "variance" : 7333.909400444111,
          "n" : 386,
          "max" : 625.0,
          "min" : 35.0,
          "sum" : 43519.99999999999,
          "standardDeviation" : 85.63824729899667
        }, {
          "mean" : 134.8426966292136,
          "variance" : 13196.972369045736,
          "n" : 356,
          "max" : 676.0,
          "min" : 35.0,
          "sum" : 48004.000000000044,
          "standardDeviation" : 114.87807610264778
        }, {
          "mean" : 138.85567010309288,
          "variance" : 15685.700045286236,
          "n" : 388,
          "max" : 773.0,
          "min" : 38.0,
          "sum" : 53876.00000000004,
          "standardDeviation" : 125.24256483035724
        }, {
          "mean" : 166.79856115107916,
          "variance" : 492696.4112479249,
          "n" : 417,
          "max" : 10491.0,
          "min" : 34.0,
          "sum" : 69555.00000000001,
          "standardDeviation" : 701.9233656517818
        }, {
          "mean" : 87.61419068736139,
          "variance" : 6850.735264843555,
          "n" : 451,
          "max" : 686.0,
          "min" : 27.0,
          "sum" : 39513.999999999985,
          "standardDeviation" : 82.76916856440903
        }, {
          "mean" : 56.68973747016706,
          "variance" : 669.29585136632,
          "n" : 419,
          "max" : 242.0,
          "min" : 27.0,
          "sum" : 23752.999999999996,
          "standardDeviation" : 25.870752817927816
        }, {
          "mean" : 50.12,
          "variance" : 621.4083221476512,
          "n" : 150,
          "max" : 247.0,
          "min" : 27.0,
          "sum" : 7518.0,
          "standardDeviation" : 24.928062944152945
        } ],
        "29" : [ {
          "mean" : 286.5454545454549,
          "variance" : 683439.374681394,
          "n" : 424,
          "max" : 15087.0,
          "min" : 56.0,
          "sum" : 121495.27272727288,
          "standardDeviation" : 826.7039220188773
        }, {
          "mean" : 115.0146750524109,
          "variance" : 6195.703565703014,
          "n" : 477,
          "max" : 641.0,
          "min" : 34.0,
          "sum" : 54862.0,
          "standardDeviation" : 78.71279162692055
        }, {
          "mean" : 104.62108262108265,
          "variance" : 4983.407439967441,
          "n" : 351,
          "max" : 508.0,
          "min" : 35.0,
          "sum" : 36722.00000000001,
          "standardDeviation" : 70.59325350178614
        }, {
          "mean" : 112.57790368271957,
          "variance" : 7028.852578547514,
          "n" : 353,
          "max" : 550.0,
          "min" : 36.0,
          "sum" : 39740.00000000001,
          "standardDeviation" : 83.83825247789648
        }, {
          "mean" : 125.03069053708451,
          "variance" : 12141.429824906543,
          "n" : 391,
          "max" : 916.0,
          "min" : 34.0,
          "sum" : 48887.000000000044,
          "standardDeviation" : 110.18815646387112
        }, {
          "mean" : 131.38850574712637,
          "variance" : 243935.27498278522,
          "n" : 435,
          "max" : 10200.0,
          "min" : 33.0,
          "sum" : 57153.99999999997,
          "standardDeviation" : 493.8980410801254
        }, {
          "mean" : 101.24137931034483,
          "variance" : 7222.575242332745,
          "n" : 435,
          "max" : 526.0,
          "min" : 26.0,
          "sum" : 44040.0,
          "standardDeviation" : 84.98573552269077
        }, {
          "mean" : 56.577011494252886,
          "variance" : 1001.6639864399601,
          "n" : 435,
          "max" : 271.0,
          "min" : 27.0,
          "sum" : 24611.000000000007,
          "standardDeviation" : 31.649075601665842
        }, {
          "mean" : 50.833333333333364,
          "variance" : 489.815992292871,
          "n" : 174,
          "max" : 132.0,
          "min" : 27.0,
          "sum" : 8845.000000000005,
          "standardDeviation" : 22.13178692046512
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.AbstractGraph#getVertexCount",
    "kiekerPattern" : "public long org.gradoop.model.impl.AbstractGraph.getVertexCount()",
    "otherKiekerPattern" : "public int org.gradoop.model.impl.LogicalGraphProjectionTest$EdgeComparator.compare(org.gradoop.model.impl.DefaultEdgeData,org.gradoop.model.impl.DefaultEdgeData)",
    "module" : "gradoop-flink",
    "name" : "AbstractGraph#getVertexCount",
    "key" : "org.gradoop.model.impl.AbstractGraph.getVertexCount_",
    "otherKey" : "org.gradoop.model.impl.LogicalGraphProjectionTest$EdgeComparator.compare_DefaultEdgeData_DefaultEdgeData",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#00FF00",
    "statistic" : {
      "meanOld" : 1.5104991710888886E8,
      "meanCurrent" : 1027.915381473175,
      "deviationOld" : 5807399.200383959,
      "deviationCurrent" : 699.2168116411484,
      "vms" : 29,
      "callsOld" : 450,
      "calls" : 3159,
      "tvalue" : 142.4611610123417,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "FASTER",
    "inVMDeviationPredecessor" : 2.1973611555376608E7,
    "inVMDeviation" : 3652.913037810165,
    "ess" : 1,
    "values" : [ 4568.087386877828, 899.4353741496599, 884.7685309973045, 1120.282951981953, 902.1447811447811, 713.3959011060507, 860.7617521367521, 924.6979591836734, 860.4731323722149, 752.535839160839, 25552.804601648353, 831.9699883449885, 940.6867724867725, 1025.141414141414, 23119.543877551023, 931.1930592991913, 932.5200680272109, 794.2027210884355, 845.4189980481459, 906.9124893797791, 941.271711366539, 1008.1240079365081, 813.5855379188713, 770.4752747252749, 878.2884097035039, 842.1154261057173, 979.4590767487964, 963.9383903133904, 928.006641366224, 961.7370851370852 ],
    "valuesPredecessor" : [ 1.5744036253333333E8, 1.4691783633333334E8, 1.4151508793333334E8, 1.5300831333333334E8, 1.4966439766666666E8, 1.4521195266666666E8, 1.4810447913333333E8, 1.4151034846666667E8, 1.4908676146666667E8, 1.4534002806666666E8, 1.4372069453333333E8, 1.622411292E8, 1.5793369673333332E8, 1.5259249286666667E8, 1.5216152386666667E8, 1.5109880373333332E8, 1.4518580733333334E8, 1.610021194E8, 1.5089052473333332E8, 1.5780088653333333E8, 1.62159464E8, 1.5623740653333333E8, 1.51260169E8, 1.539866392E8, 1.5257435453333333E8, 1.508936536E8, 1.5256113106666666E8, 1.4946702E8, 1.4639137633333334E8, 1.4353905246666667E8 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 14443.382352941178,
          "variance" : 5.834408738546344E9,
          "n" : 29,
          "max" : 446682.0,
          "min" : 819.0,
          "sum" : 418858.08823529416,
          "standardDeviation" : 76383.3014378558
        }, {
          "mean" : 988.3181818181818,
          "variance" : 3287808.132034633,
          "n" : 22,
          "max" : 9061.0,
          "min" : 376.0,
          "sum" : 21743.0,
          "standardDeviation" : 1813.2314060909691
        }, {
          "mean" : 492.047619047619,
          "variance" : 28422.347619047614,
          "n" : 21,
          "max" : 940.0,
          "min" : 319.0,
          "sum" : 10332.999999999998,
          "standardDeviation" : 168.58928678610516
        }, {
          "mean" : 432.80769230769226,
          "variance" : 13259.521538461539,
          "n" : 26,
          "max" : 679.0,
          "min" : 311.0,
          "sum" : 11252.999999999998,
          "standardDeviation" : 115.14999582484377
        }, {
          "mean" : 2149.0,
          "variance" : 1.62447684E7,
          "n" : 6,
          "max" : 10376.0,
          "min" : 469.0,
          "sum" : 12894.0,
          "standardDeviation" : 4030.4799217959144
        } ],
        "1" : [ {
          "mean" : 1832.8571428571427,
          "variance" : 4668427.904761906,
          "n" : 23,
          "max" : 9437.0,
          "min" : 841.0,
          "sum" : 42155.71428571428,
          "standardDeviation" : 2160.6545084214426
        }, {
          "mean" : 782.5925925925927,
          "variance" : 896747.01994302,
          "n" : 27,
          "max" : 5336.0,
          "min" : 370.0,
          "sum" : 21130.000000000004,
          "standardDeviation" : 946.9672750116658
        }, {
          "mean" : 684.4166666666669,
          "variance" : 101214.86231884062,
          "n" : 24,
          "max" : 1345.0,
          "min" : 317.0,
          "sum" : 16426.000000000004,
          "standardDeviation" : 318.1428332036424
        }, {
          "mean" : 509.28571428571433,
          "variance" : 24552.51428571429,
          "n" : 21,
          "max" : 907.0,
          "min" : 336.0,
          "sum" : 10695.000000000002,
          "standardDeviation" : 156.69241936262995
        }, {
          "mean" : 403.40000000000003,
          "variance" : 7689.5999999999985,
          "n" : 10,
          "max" : 604.0,
          "min" : 337.0,
          "sum" : 4034.0000000000005,
          "standardDeviation" : 87.69036435093652
        } ],
        "2" : [ {
          "mean" : 1332.1071428571427,
          "variance" : 1667275.7288359783,
          "n" : 23,
          "max" : 6698.0,
          "min" : 604.0,
          "sum" : 30638.464285714283,
          "standardDeviation" : 1291.230315952959
        }, {
          "mean" : 957.1851851851851,
          "variance" : 2667522.2336182343,
          "n" : 27,
          "max" : 9076.0,
          "min" : 363.0,
          "sum" : 25843.999999999996,
          "standardDeviation" : 1633.255103655958
        }, {
          "mean" : 481.0434782608695,
          "variance" : 33769.13438735177,
          "n" : 23,
          "max" : 1049.0,
          "min" : 314.0,
          "sum" : 11063.999999999998,
          "standardDeviation" : 183.7638005357741
        }, {
          "mean" : 482.2222222222222,
          "variance" : 26624.333333333336,
          "n" : 27,
          "max" : 1046.0,
          "min" : 297.0,
          "sum" : 13019.999999999998,
          "standardDeviation" : 163.16964586997588
        }, {
          "mean" : 2203.1666666666665,
          "variance" : 1.7894261366666663E7,
          "n" : 6,
          "max" : 10837.0,
          "min" : 394.0,
          "sum" : 13219.0,
          "standardDeviation" : 4230.160914984992
        } ],
        "3" : [ {
          "mean" : 1916.3448275862067,
          "variance" : 8719544.448275864,
          "n" : 24,
          "max" : 15933.0,
          "min" : 799.0,
          "sum" : 45992.275862068964,
          "standardDeviation" : 2952.8874763993063
        }, {
          "mean" : 1045.2962962962963,
          "variance" : 2337716.601139601,
          "n" : 27,
          "max" : 8562.0,
          "min" : 405.0,
          "sum" : 28223.0,
          "standardDeviation" : 1528.9593196483681
        }, {
          "mean" : 851.111111111111,
          "variance" : 2124018.2564102565,
          "n" : 27,
          "max" : 8093.0,
          "min" : 339.0,
          "sum" : 22979.999999999996,
          "standardDeviation" : 1457.4011995364408
        }, {
          "mean" : 885.086956521739,
          "variance" : 4351641.173913043,
          "n" : 23,
          "max" : 10436.0,
          "min" : 309.0,
          "sum" : 20356.999999999996,
          "standardDeviation" : 2086.0587656902294
        }, {
          "mean" : 386.33333333333337,
          "variance" : 12421.866666666667,
          "n" : 6,
          "max" : 604.0,
          "min" : 298.0,
          "sum" : 2318.0,
          "standardDeviation" : 111.45342824097726
        } ],
        "4" : [ {
          "mean" : 1773.272727272727,
          "variance" : 4050554.7792207785,
          "n" : 17,
          "max" : 8966.0,
          "min" : 874.0,
          "sum" : 30145.63636363636,
          "standardDeviation" : 2012.5990110354269
        }, {
          "mean" : 791.542857142857,
          "variance" : 70256.54957983192,
          "n" : 35,
          "max" : 1260.0,
          "min" : 380.0,
          "sum" : 27703.999999999993,
          "standardDeviation" : 265.0595208247233
        }, {
          "mean" : 1172.571428571429,
          "variance" : 1.0187987357142856E7,
          "n" : 21,
          "max" : 15095.0,
          "min" : 354.0,
          "sum" : 24624.000000000007,
          "standardDeviation" : 3191.8626783028835
        }, {
          "mean" : 401.2,
          "variance" : 5636.096551724138,
          "n" : 30,
          "max" : 547.0,
          "min" : 316.0,
          "sum" : 12036.0,
          "standardDeviation" : 75.0739405634481
        }, {
          "mean" : 584.4,
          "variance" : 5649.300000000002,
          "n" : 5,
          "max" : 673.0,
          "min" : 507.0,
          "sum" : 2922.0,
          "standardDeviation" : 75.16182541689632
        } ],
        "5" : [ {
          "mean" : 1413.2068965517242,
          "variance" : 1611646.4556650245,
          "n" : 24,
          "max" : 6364.0,
          "min" : 805.0,
          "sum" : 33916.96551724138,
          "standardDeviation" : 1269.5063826799078
        }, {
          "mean" : 647.7777777777777,
          "variance" : 45885.48717948714,
          "n" : 27,
          "max" : 1174.0,
          "min" : 363.0,
          "sum" : 17490.0,
          "standardDeviation" : 214.2089801560316
        }, {
          "mean" : 508.81818181818187,
          "variance" : 20560.822510822516,
          "n" : 22,
          "max" : 989.0,
          "min" : 385.0,
          "sum" : 11194.000000000002,
          "standardDeviation" : 143.39045474097122
        }, {
          "mean" : 403.85185185185173,
          "variance" : 17622.746438746435,
          "n" : 27,
          "max" : 863.0,
          "min" : 288.0,
          "sum" : 10903.999999999996,
          "standardDeviation" : 132.75069279949705
        }, {
          "mean" : 352.5,
          "variance" : 5213.500000000001,
          "n" : 6,
          "max" : 490.0,
          "min" : 300.0,
          "sum" : 2115.0,
          "standardDeviation" : 72.20457049245567
        } ],
        "6" : [ {
          "mean" : 1539.5555555555554,
          "variance" : 2828685.5641025645,
          "n" : 22,
          "max" : 6747.0,
          "min" : 649.0,
          "sum" : 33870.22222222222,
          "standardDeviation" : 1681.8696632327265
        }, {
          "mean" : 1184.0740740740741,
          "variance" : 4677299.378917378,
          "n" : 27,
          "max" : 10429.0,
          "min" : 371.0,
          "sum" : 31970.0,
          "standardDeviation" : 2162.706493937025
        }, {
          "mean" : 393.8571428571428,
          "variance" : 4141.608465608467,
          "n" : 28,
          "max" : 528.0,
          "min" : 311.0,
          "sum" : 11027.999999999998,
          "standardDeviation" : 64.35532973739213
        }, {
          "mean" : 501.9047619047619,
          "variance" : 15387.190476190472,
          "n" : 21,
          "max" : 864.0,
          "min" : 352.0,
          "sum" : 10540.0,
          "standardDeviation" : 124.04511468087114
        }, {
          "mean" : 351.8333333333333,
          "variance" : 2957.3666666666663,
          "n" : 6,
          "max" : 462.0,
          "min" : 319.0,
          "sum" : 2111.0,
          "standardDeviation" : 54.38167583540127
        } ],
        "7" : [ {
          "mean" : 1336.142857142857,
          "variance" : 1414989.4201680669,
          "n" : 30,
          "max" : 6665.0,
          "min" : 785.0,
          "sum" : 40084.28571428571,
          "standardDeviation" : 1189.533278293662
        }, {
          "mean" : 1141.2857142857142,
          "variance" : 3267884.7142857146,
          "n" : 21,
          "max" : 8906.0,
          "min" : 338.0,
          "sum" : 23967.0,
          "standardDeviation" : 1807.7291595495478
        }, {
          "mean" : 895.0476190476192,
          "variance" : 2299630.3476190474,
          "n" : 21,
          "max" : 7494.0,
          "min" : 417.0,
          "sum" : 18796.000000000004,
          "standardDeviation" : 1516.4532131322244
        }, {
          "mean" : 417.3928571428571,
          "variance" : 7720.691798941798,
          "n" : 28,
          "max" : 615.0,
          "min" : 289.0,
          "sum" : 11687.0,
          "standardDeviation" : 87.86746723868737
        }, {
          "mean" : 511.8,
          "variance" : 7115.700000000001,
          "n" : 5,
          "max" : 646.0,
          "min" : 447.0,
          "sum" : 2559.0,
          "standardDeviation" : 84.354608647068
        } ],
        "8" : [ {
          "mean" : 1713.2857142857142,
          "variance" : 2780172.804232803,
          "n" : 23,
          "max" : 7275.0,
          "min" : 831.0,
          "sum" : 39405.57142857143,
          "standardDeviation" : 1667.3850197938098
        }, {
          "mean" : 929.1379310344828,
          "variance" : 373135.8374384237,
          "n" : 29,
          "max" : 3404.0,
          "min" : 595.0,
          "sum" : 26945.0,
          "standardDeviation" : 610.848457015669
        }, {
          "mean" : 532.8333333333333,
          "variance" : 15202.75362318841,
          "n" : 24,
          "max" : 891.0,
          "min" : 369.0,
          "sum" : 12787.999999999998,
          "standardDeviation" : 123.29944697032671
        }, {
          "mean" : 435.8518518518519,
          "variance" : 7923.746438746437,
          "n" : 27,
          "max" : 606.0,
          "min" : 314.0,
          "sum" : 11768.000000000002,
          "standardDeviation" : 89.01542809393457
        }, {
          "mean" : 480.83333333333337,
          "variance" : 6861.366666666668,
          "n" : 6,
          "max" : 588.0,
          "min" : 347.0,
          "sum" : 2885.0,
          "standardDeviation" : 82.83336686786713
        } ],
        "9" : [ {
          "mean" : 1617.4545454545453,
          "variance" : 2500382.5454545454,
          "n" : 17,
          "max" : 7562.0,
          "min" : 857.0,
          "sum" : 27496.72727272727,
          "standardDeviation" : 1581.259796951325
        }, {
          "mean" : 910.5312500000001,
          "variance" : 1827978.2570564514,
          "n" : 32,
          "max" : 8272.0,
          "min" : 418.0,
          "sum" : 29137.000000000004,
          "standardDeviation" : 1352.0274616502622
        }, {
          "mean" : 435.5454545454545,
          "variance" : 14582.450216450217,
          "n" : 22,
          "max" : 721.0,
          "min" : 284.0,
          "sum" : 9582.0,
          "standardDeviation" : 120.75781637827929
        }, {
          "mean" : 372.14814814814815,
          "variance" : 10594.669515669517,
          "n" : 27,
          "max" : 682.0,
          "min" : 285.0,
          "sum" : 10048.0,
          "standardDeviation" : 102.93041103420076
        }, {
          "mean" : 333.3333333333333,
          "variance" : 770.6666666666667,
          "n" : 6,
          "max" : 389.0,
          "min" : 312.0,
          "sum" : 2000.0,
          "standardDeviation" : 27.760883751542686
        } ],
        "10" : [ {
          "mean" : 1665.4642857142858,
          "variance" : 3065286.3320105816,
          "n" : 23,
          "max" : 7874.0,
          "min" : 664.0,
          "sum" : 38305.67857142857,
          "standardDeviation" : 1750.7959138661997
        }, {
          "mean" : 782.9285714285714,
          "variance" : 212686.29100529102,
          "n" : 28,
          "max" : 3050.0,
          "min" : 459.0,
          "sum" : 21922.0,
          "standardDeviation" : 461.17923956450056
        }, {
          "mean" : 99411.5,
          "variance" : 2.5388246896298E11,
          "n" : 26,
          "max" : 2569825.0,
          "min" : 331.0,
          "sum" : 2584699.0,
          "standardDeviation" : 503867.51131917606
        }, {
          "mean" : 459.4761904761905,
          "variance" : 7543.761904761904,
          "n" : 21,
          "max" : 736.0,
          "min" : 331.0,
          "sum" : 9649.0,
          "standardDeviation" : 86.85483236275287
        }, {
          "mean" : 486.0,
          "variance" : 16057.199999999997,
          "n" : 6,
          "max" : 731.0,
          "min" : 406.0,
          "sum" : 2916.0,
          "standardDeviation" : 126.71700754042449
        } ],
        "11" : [ {
          "mean" : 1503.4242424242427,
          "variance" : 2317393.6893939395,
          "n" : 28,
          "max" : 7157.0,
          "min" : 838.0,
          "sum" : 42095.8787878788,
          "standardDeviation" : 1522.2988173791437
        }, {
          "mean" : 748.7619047619048,
          "variance" : 23533.790476190483,
          "n" : 21,
          "max" : 998.0,
          "min" : 421.0,
          "sum" : 15724.000000000002,
          "standardDeviation" : 153.40726995872942
        }, {
          "mean" : 529.8888888888889,
          "variance" : 23294.564102564098,
          "n" : 27,
          "max" : 916.0,
          "min" : 319.0,
          "sum" : 14307.0,
          "standardDeviation" : 152.62556831201022
        }, {
          "mean" : 515.3636363636364,
          "variance" : 10413.194805194804,
          "n" : 22,
          "max" : 706.0,
          "min" : 377.0,
          "sum" : 11338.0,
          "standardDeviation" : 102.04506262036789
        }, {
          "mean" : 510.00000000000006,
          "variance" : 4323.600000000002,
          "n" : 6,
          "max" : 612.0,
          "min" : 444.0,
          "sum" : 3060.0000000000005,
          "standardDeviation" : 65.75408732542793
        } ],
        "12" : [ {
          "mean" : 1572.7777777777778,
          "variance" : 3362411.1794871804,
          "n" : 22,
          "max" : 8640.0,
          "min" : 767.0,
          "sum" : 34601.11111111111,
          "standardDeviation" : 1833.6878631564261
        }, {
          "mean" : 1406.642857142857,
          "variance" : 1.5718252534391537E7,
          "n" : 28,
          "max" : 21595.0,
          "min" : 322.0,
          "sum" : 39386.0,
          "standardDeviation" : 3964.6251442464945
        }, {
          "mean" : 449.27272727272725,
          "variance" : 23432.303030303032,
          "n" : 22,
          "max" : 888.0,
          "min" : 298.0,
          "sum" : 9884.0,
          "standardDeviation" : 153.0761347509893
        }, {
          "mean" : 458.8636363636364,
          "variance" : 16790.12337662338,
          "n" : 22,
          "max" : 821.0,
          "min" : 308.0,
          "sum" : 10095.0,
          "standardDeviation" : 129.57670846499914
        }, {
          "mean" : 436.90909090909093,
          "variance" : 11173.290909090909,
          "n" : 11,
          "max" : 676.0,
          "min" : 320.0,
          "sum" : 4806.0,
          "standardDeviation" : 105.70378852761574
        } ],
        "13" : [ {
          "mean" : 1580.5151515151517,
          "variance" : 2994245.320075757,
          "n" : 28,
          "max" : 9947.0,
          "min" : 765.0,
          "sum" : 44254.42424242425,
          "standardDeviation" : 1730.388777146846
        }, {
          "mean" : 1557.1499999999999,
          "variance" : 8611470.239473686,
          "n" : 20,
          "max" : 10619.0,
          "min" : 430.0,
          "sum" : 31142.999999999996,
          "standardDeviation" : 2934.530667666243
        }, {
          "mean" : 460.2142857142858,
          "variance" : 22602.544973544973,
          "n" : 28,
          "max" : 1030.0,
          "min" : 321.0,
          "sum" : 12886.000000000002,
          "standardDeviation" : 150.3414280015491
        }, {
          "mean" : 688.8095238095239,
          "variance" : 1683285.6619047618,
          "n" : 21,
          "max" : 6341.0,
          "min" : 322.0,
          "sum" : 14465.0,
          "standardDeviation" : 1297.414992168952
        }, {
          "mean" : 363.2,
          "variance" : 2248.7000000000003,
          "n" : 5,
          "max" : 444.0,
          "min" : 326.0,
          "sum" : 1816.0,
          "standardDeviation" : 47.420459719408036
        } ],
        "14" : [ {
          "mean" : 102720.17857142858,
          "variance" : 2.847718560529669E11,
          "n" : 23,
          "max" : 2825605.0,
          "min" : 801.0,
          "sum" : 2362564.1071428573,
          "standardDeviation" : 533640.1934383943
        }, {
          "mean" : 1074.777777777778,
          "variance" : 4827669.256410257,
          "n" : 27,
          "max" : 12000.0,
          "min" : 374.0,
          "sum" : 29019.000000000007,
          "standardDeviation" : 2197.1957710705383
        }, {
          "mean" : 993.0000000000002,
          "variance" : 4911930.952380953,
          "n" : 22,
          "max" : 10896.0,
          "min" : 318.0,
          "sum" : 21846.000000000004,
          "standardDeviation" : 2216.287651091562
        }, {
          "mean" : 441.3571428571429,
          "variance" : 14195.126984126977,
          "n" : 28,
          "max" : 737.0,
          "min" : 312.0,
          "sum" : 12358.0,
          "standardDeviation" : 119.14330440325624
        }, {
          "mean" : 353.0,
          "variance" : 1433.9999999999998,
          "n" : 5,
          "max" : 414.0,
          "min" : 315.0,
          "sum" : 1765.0,
          "standardDeviation" : 37.86819245752297
        } ],
        "15" : [ {
          "mean" : 1728.1071428571427,
          "variance" : 2840264.173280423,
          "n" : 23,
          "max" : 6889.0,
          "min" : 821.0,
          "sum" : 39746.46428571428,
          "standardDeviation" : 1685.3083318136248
        }, {
          "mean" : 755.9642857142856,
          "variance" : 35967.44312169311,
          "n" : 28,
          "max" : 1140.0,
          "min" : 494.0,
          "sum" : 21166.999999999996,
          "standardDeviation" : 189.65084529654254
        }, {
          "mean" : 931.8181818181816,
          "variance" : 4077557.393939393,
          "n" : 22,
          "max" : 9950.0,
          "min" : 327.0,
          "sum" : 20499.999999999996,
          "standardDeviation" : 2019.2962620525482
        }, {
          "mean" : 523.9629629629629,
          "variance" : 33669.72934472934,
          "n" : 27,
          "max" : 1046.0,
          "min" : 309.0,
          "sum" : 14147.0,
          "standardDeviation" : 183.49313160096577
        }, {
          "mean" : 524.3333333333333,
          "variance" : 13886.266666666668,
          "n" : 6,
          "max" : 647.0,
          "min" : 382.0,
          "sum" : 3145.9999999999995,
          "standardDeviation" : 117.84000452591076
        } ],
        "16" : [ {
          "mean" : 1606.6785714285716,
          "variance" : 4444517.041005289,
          "n" : 23,
          "max" : 10374.0,
          "min" : 648.0,
          "sum" : 36953.607142857145,
          "standardDeviation" : 2108.2023244948027
        }, {
          "mean" : 902.1111111111111,
          "variance" : 3200835.025641025,
          "n" : 27,
          "max" : 9802.0,
          "min" : 355.0,
          "sum" : 24357.0,
          "standardDeviation" : 1789.0877635378945
        }, {
          "mean" : 832.3928571428572,
          "variance" : 2513961.654761905,
          "n" : 28,
          "max" : 8890.0,
          "min" : 369.0,
          "sum" : 23307.000000000004,
          "standardDeviation" : 1585.5477459735814
        }, {
          "mean" : 497.3333333333332,
          "variance" : 19678.43333333333,
          "n" : 21,
          "max" : 874.0,
          "min" : 340.0,
          "sum" : 10443.999999999996,
          "standardDeviation" : 140.2798393687893
        }, {
          "mean" : 475.5,
          "variance" : 27827.899999999998,
          "n" : 6,
          "max" : 784.0,
          "min" : 339.0,
          "sum" : 2853.0,
          "standardDeviation" : 166.81696556405765
        } ],
        "17" : [ {
          "mean" : 1836.1428571428573,
          "variance" : 4726880.628571429,
          "n" : 16,
          "max" : 10504.0,
          "min" : 863.0,
          "sum" : 29378.285714285717,
          "standardDeviation" : 2174.139054561927
        }, {
          "mean" : 894.9090909090912,
          "variance" : 2262283.335227273,
          "n" : 33,
          "max" : 9236.0,
          "min" : 429.0,
          "sum" : 29532.00000000001,
          "standardDeviation" : 1504.0888721173603
        }, {
          "mean" : 428.95454545454544,
          "variance" : 18197.283549783548,
          "n" : 22,
          "max" : 688.0,
          "min" : 299.0,
          "sum" : 9437.0,
          "standardDeviation" : 134.897307422289
        }, {
          "mean" : 452.8214285714286,
          "variance" : 15936.30026455027,
          "n" : 28,
          "max" : 713.0,
          "min" : 290.0,
          "sum" : 12679.000000000002,
          "standardDeviation" : 126.23905997966821
        }, {
          "mean" : 394.16666666666663,
          "variance" : 8839.366666666669,
          "n" : 6,
          "max" : 528.0,
          "min" : 306.0,
          "sum" : 2365.0,
          "standardDeviation" : 94.01790609594892
        } ],
        "18" : [ {
          "mean" : 1459.5172413793107,
          "variance" : 2307659.1871921187,
          "n" : 24,
          "max" : 7772.0,
          "min" : 761.0,
          "sum" : 35028.41379310346,
          "standardDeviation" : 1519.0981492952055
        }, {
          "mean" : 1119.2307692307693,
          "variance" : 5022886.984615385,
          "n" : 26,
          "max" : 12029.0,
          "min" : 291.0,
          "sum" : 29100.0,
          "standardDeviation" : 2241.179819785861
        }, {
          "mean" : 461.00000000000006,
          "variance" : 48831.64285714285,
          "n" : 29,
          "max" : 1336.0,
          "min" : 292.0,
          "sum" : 13369.000000000002,
          "standardDeviation" : 220.9788289794813
        }, {
          "mean" : 428.5238095238095,
          "variance" : 15600.261904761908,
          "n" : 21,
          "max" : 797.0,
          "min" : 305.0,
          "sum" : 8999.0,
          "standardDeviation" : 124.90100842171735
        }, {
          "mean" : 519.6666666666667,
          "variance" : 19497.466666666667,
          "n" : 6,
          "max" : 783.0,
          "min" : 426.0,
          "sum" : 3118.0000000000005,
          "standardDeviation" : 139.63332935465897
        } ],
        "19" : [ {
          "mean" : 1400.2727272727273,
          "variance" : 1341719.1420454546,
          "n" : 28,
          "max" : 5986.0,
          "min" : 809.0,
          "sum" : 39207.63636363636,
          "standardDeviation" : 1158.3260085336315
        }, {
          "mean" : 1406.3636363636365,
          "variance" : 1.2496785004329002E7,
          "n" : 22,
          "max" : 17207.0,
          "min" : 464.0,
          "sum" : 30940.000000000004,
          "standardDeviation" : 3535.0792076457074
        }, {
          "mean" : 426.00000000000006,
          "variance" : 15501.142857142857,
          "n" : 22,
          "max" : 858.0,
          "min" : 310.0,
          "sum" : 9372.000000000002,
          "standardDeviation" : 124.50358572002196
        }, {
          "mean" : 498.9565217391304,
          "variance" : 21115.316205533592,
          "n" : 23,
          "max" : 863.0,
          "min" : 327.0,
          "sum" : 11475.999999999998,
          "standardDeviation" : 145.31110145317044
        }, {
          "mean" : 503.6666666666667,
          "variance" : 17490.969696969696,
          "n" : 12,
          "max" : 810.0,
          "min" : 313.0,
          "sum" : 6044.0,
          "standardDeviation" : 132.25342981174325
        } ],
        "20" : [ {
          "mean" : 1632.9310344827584,
          "variance" : 2511256.4950738912,
          "n" : 24,
          "max" : 6690.0,
          "min" : 824.0,
          "sum" : 39190.3448275862,
          "standardDeviation" : 1584.6944484896421
        }, {
          "mean" : 1028.1111111111109,
          "variance" : 1684547.4871794868,
          "n" : 27,
          "max" : 7430.0,
          "min" : 369.0,
          "sum" : 27758.999999999993,
          "standardDeviation" : 1297.901185444981
        }, {
          "mean" : 884.7826086956521,
          "variance" : 1986741.4505928855,
          "n" : 23,
          "max" : 7309.0,
          "min" : 337.0,
          "sum" : 20350.0,
          "standardDeviation" : 1409.5181625622586
        }, {
          "mean" : 398.82608695652175,
          "variance" : 13826.786561264826,
          "n" : 23,
          "max" : 728.0,
          "min" : 295.0,
          "sum" : 9173.0,
          "standardDeviation" : 117.58735714890791
        }, {
          "mean" : 471.36363636363643,
          "variance" : 27169.05454545454,
          "n" : 11,
          "max" : 766.0,
          "min" : 313.0,
          "sum" : 5185.000000000001,
          "standardDeviation" : 164.83038113604707
        } ],
        "21" : [ {
          "mean" : 1877.3214285714287,
          "variance" : 4896890.152116401,
          "n" : 23,
          "max" : 9636.0,
          "min" : 776.0,
          "sum" : 43178.39285714286,
          "standardDeviation" : 2212.891807593946
        }, {
          "mean" : 989.2068965517241,
          "variance" : 3418588.5270935963,
          "n" : 29,
          "max" : 10554.0,
          "min" : 414.0,
          "sum" : 28686.999999999996,
          "standardDeviation" : 1848.942542940044
        }, {
          "mean" : 491.0,
          "variance" : 22226.38095238096,
          "n" : 22,
          "max" : 973.0,
          "min" : 336.0,
          "sum" : 10802.0,
          "standardDeviation" : 149.08514665244476
        }, {
          "mean" : 812.0000000000002,
          "variance" : 2698144.8148148144,
          "n" : 28,
          "max" : 9169.0,
          "min" : 301.0,
          "sum" : 22736.000000000007,
          "standardDeviation" : 1642.6030606372358
        }, {
          "mean" : 579.0,
          "variance" : 12667.999999999996,
          "n" : 6,
          "max" : 751.0,
          "min" : 455.0,
          "sum" : 3474.0,
          "standardDeviation" : 112.55221010713204
        } ],
        "22" : [ {
          "mean" : 1567.7037037037037,
          "variance" : 3535381.1396011403,
          "n" : 22,
          "max" : 9090.0,
          "min" : 581.0,
          "sum" : 34489.48148148148,
          "standardDeviation" : 1880.2609232766447
        }, {
          "mean" : 890.2592592592594,
          "variance" : 2175870.2763532763,
          "n" : 27,
          "max" : 8211.0,
          "min" : 314.0,
          "sum" : 24037.000000000004,
          "standardDeviation" : 1475.0831421832725
        }, {
          "mean" : 439.8181818181818,
          "variance" : 11478.34632034632,
          "n" : 22,
          "max" : 763.0,
          "min" : 316.0,
          "sum" : 9676.0,
          "standardDeviation" : 107.137044575377
        }, {
          "mean" : 498.6428571428571,
          "variance" : 34558.90476190476,
          "n" : 28,
          "max" : 942.0,
          "min" : 324.0,
          "sum" : 13962.0,
          "standardDeviation" : 185.90025487315708
        }, {
          "mean" : 543.6666666666666,
          "variance" : 18358.26666666667,
          "n" : 6,
          "max" : 815.0,
          "min" : 445.0,
          "sum" : 3262.0,
          "standardDeviation" : 135.49268122915964
        } ],
        "23" : [ {
          "mean" : 1446.7142857142858,
          "variance" : 2009532.9523809522,
          "n" : 23,
          "max" : 6437.0,
          "min" : 729.0,
          "sum" : 33274.42857142857,
          "standardDeviation" : 1417.579963311048
        }, {
          "mean" : 763.814814814815,
          "variance" : 1246306.695156695,
          "n" : 27,
          "max" : 6296.0,
          "min" : 394.0,
          "sum" : 20623.000000000004,
          "standardDeviation" : 1116.3810707624414
        }, {
          "mean" : 480.0,
          "variance" : 28955.36,
          "n" : 26,
          "max" : 939.0,
          "min" : 298.0,
          "sum" : 12480.0,
          "standardDeviation" : 170.1627456290007
        }, {
          "mean" : 514.0454545454545,
          "variance" : 28264.997835497823,
          "n" : 22,
          "max" : 1118.0,
          "min" : 322.0,
          "sum" : 11309.0,
          "standardDeviation" : 168.121973089474
        }, {
          "mean" : 407.16666666666663,
          "variance" : 35837.366666666676,
          "n" : 6,
          "max" : 792.0,
          "min" : 316.0,
          "sum" : 2443.0,
          "standardDeviation" : 189.30759801620925
        } ],
        "24" : [ {
          "mean" : 1756.2857142857142,
          "variance" : 3311779.9153439146,
          "n" : 23,
          "max" : 7974.0,
          "min" : 825.0,
          "sum" : 40394.57142857143,
          "standardDeviation" : 1819.8296390991973
        }, {
          "mean" : 855.148148148148,
          "variance" : 1432622.3618233618,
          "n" : 27,
          "max" : 6703.0,
          "min" : 343.0,
          "sum" : 23088.999999999996,
          "standardDeviation" : 1196.9220366520794
        }, {
          "mean" : 572.7407407407406,
          "variance" : 22129.199430199427,
          "n" : 27,
          "max" : 944.0,
          "min" : 326.0,
          "sum" : 15463.999999999998,
          "standardDeviation" : 148.75886336685767
        }, {
          "mean" : 469.9130434782608,
          "variance" : 23064.628458498028,
          "n" : 23,
          "max" : 971.0,
          "min" : 321.0,
          "sum" : 10807.999999999998,
          "standardDeviation" : 151.87043312803854
        }, {
          "mean" : 557.1666666666666,
          "variance" : 41386.566666666666,
          "n" : 6,
          "max" : 965.0,
          "min" : 414.0,
          "sum" : 3343.0,
          "standardDeviation" : 203.43688619979088
        } ],
        "25" : [ {
          "mean" : 1548.2222222222224,
          "variance" : 2238540.256410257,
          "n" : 22,
          "max" : 7162.0,
          "min" : 819.0,
          "sum" : 34060.88888888889,
          "standardDeviation" : 1496.1752091283483
        }, {
          "mean" : 1003.5555555555557,
          "variance" : 3045008.9487179485,
          "n" : 27,
          "max" : 9643.0,
          "min" : 321.0,
          "sum" : 27096.000000000004,
          "standardDeviation" : 1744.9954007727208
        }, {
          "mean" : 472.4074074074074,
          "variance" : 20658.173789173787,
          "n" : 27,
          "max" : 830.0,
          "min" : 307.0,
          "sum" : 12755.0,
          "standardDeviation" : 143.72951606811242
        }, {
          "mean" : 453.5454545454545,
          "variance" : 21680.06926406927,
          "n" : 22,
          "max" : 796.0,
          "min" : 284.0,
          "sum" : 9978.0,
          "standardDeviation" : 147.24153376024466
        }, {
          "mean" : 569.6,
          "variance" : 28125.3,
          "n" : 5,
          "max" : 865.0,
          "min" : 466.0,
          "sum" : 2848.0,
          "standardDeviation" : 167.7059927372901
        } ],
        "26" : [ {
          "mean" : 1346.5757575757575,
          "variance" : 1759203.8143939397,
          "n" : 28,
          "max" : 6843.0,
          "min" : 697.0,
          "sum" : 37704.12121212121,
          "standardDeviation" : 1326.3498084570072
        }, {
          "mean" : 1205.2272727272727,
          "variance" : 4644767.326839823,
          "n" : 22,
          "max" : 10823.0,
          "min" : 541.0,
          "sum" : 26515.0,
          "standardDeviation" : 2155.1722267233827
        }, {
          "mean" : 909.6785714285716,
          "variance" : 5390818.078042328,
          "n" : 28,
          "max" : 12727.0,
          "min" : 318.0,
          "sum" : 25471.000000000004,
          "standardDeviation" : 2321.8135321429945
        }, {
          "mean" : 517.8695652173914,
          "variance" : 8166.391304347826,
          "n" : 23,
          "max" : 788.0,
          "min" : 414.0,
          "sum" : 11911.000000000002,
          "standardDeviation" : 90.36808786484212
        }, {
          "mean" : 533.5,
          "variance" : 16606.699999999997,
          "n" : 6,
          "max" : 789.0,
          "min" : 439.0,
          "sum" : 3201.0,
          "standardDeviation" : 128.86698568679256
        } ],
        "27" : [ {
          "mean" : 1952.4814814814818,
          "variance" : 5103383.797720796,
          "n" : 22,
          "max" : 8821.0,
          "min" : 606.0,
          "sum" : 42954.5925925926,
          "standardDeviation" : 2259.0670193070405
        }, {
          "mean" : 1154.1538461538462,
          "variance" : 3521611.415384615,
          "n" : 26,
          "max" : 9067.0,
          "min" : 456.0,
          "sum" : 30008.0,
          "standardDeviation" : 1876.5956984349652
        }, {
          "mean" : 536.6956521739131,
          "variance" : 18683.857707509884,
          "n" : 23,
          "max" : 932.0,
          "min" : 397.0,
          "sum" : 12344.000000000002,
          "standardDeviation" : 136.68890850215274
        }, {
          "mean" : 425.5925925925926,
          "variance" : 23899.404558404556,
          "n" : 27,
          "max" : 864.0,
          "min" : 306.0,
          "sum" : 11491.0,
          "standardDeviation" : 154.59432252966005
        }, {
          "mean" : 575.3333333333334,
          "variance" : 19373.86666666667,
          "n" : 6,
          "max" : 859.0,
          "min" : 507.0,
          "sum" : 3452.0,
          "standardDeviation" : 139.19003795770251
        } ],
        "28" : [ {
          "mean" : 1300.0645161290324,
          "variance" : 1788147.2623655915,
          "n" : 26,
          "max" : 6896.0,
          "min" : 610.0,
          "sum" : 33801.67741935484,
          "standardDeviation" : 1337.216236203252
        }, {
          "mean" : 1486.590909090909,
          "variance" : 7862897.872294376,
          "n" : 22,
          "max" : 12539.0,
          "min" : 464.0,
          "sum" : 32705.0,
          "standardDeviation" : 2804.0859245562315
        }, {
          "mean" : 559.6666666666664,
          "variance" : 22421.384615384617,
          "n" : 27,
          "max" : 981.0,
          "min" : 388.0,
          "sum" : 15110.999999999993,
          "standardDeviation" : 149.7377194142632
        }, {
          "mean" : 474.7619047619048,
          "variance" : 19083.090476190482,
          "n" : 21,
          "max" : 821.0,
          "min" : 322.0,
          "sum" : 9970.000000000002,
          "standardDeviation" : 138.14155955464844
        }, {
          "mean" : 511.5,
          "variance" : 9647.9,
          "n" : 6,
          "max" : 699.0,
          "min" : 425.0,
          "sum" : 3069.0,
          "standardDeviation" : 98.22372422179888
        } ],
        "29" : [ {
          "mean" : 1481.121212121212,
          "variance" : 1961531.4223484853,
          "n" : 28,
          "max" : 7840.0,
          "min" : 800.0,
          "sum" : 41471.393939393936,
          "standardDeviation" : 1400.5468297591785
        }, {
          "mean" : 956.25,
          "variance" : 2821156.1086956514,
          "n" : 24,
          "max" : 8802.0,
          "min" : 389.0,
          "sum" : 22950.0,
          "standardDeviation" : 1679.629753456294
        }, {
          "mean" : 992.9999999999999,
          "variance" : 3573378.199999999,
          "n" : 21,
          "max" : 9222.0,
          "min" : 452.0,
          "sum" : 20852.999999999996,
          "standardDeviation" : 1890.3381179037783
        }, {
          "mean" : 488.5555555555556,
          "variance" : 18042.33333333334,
          "n" : 27,
          "max" : 880.0,
          "min" : 318.0,
          "sum" : 13191.000000000002,
          "standardDeviation" : 134.32175301615646
        }, {
          "mean" : 503.4,
          "variance" : 29056.300000000003,
          "n" : 5,
          "max" : 802.0,
          "min" : 377.0,
          "sum" : 2517.0,
          "standardDeviation" : 170.45908600013084
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 2.204188825E8,
          "variance" : 1.3824600178478582E16,
          "n" : 2,
          "max" : 3.03559126E8,
          "min" : 1.37278639E8,
          "sum" : 4.40837765E8,
          "standardDeviation" : 1.1757805993670155E8
        }, {
          "mean" : 1.452039315E8,
          "variance" : 3.85402052035125E13,
          "n" : 2,
          "max" : 1.49593704E8,
          "min" : 1.40814159E8,
          "sum" : 2.90407863E8,
          "standardDeviation" : 6208075.805232448
        }, {
          "mean" : 1.54278075E8,
          "variance" : 4.15235667602E13,
          "n" : 2,
          "max" : 1.58834585E8,
          "min" : 1.49721565E8,
          "sum" : 3.0855615E8,
          "standardDeviation" : 6443878.239088631
        }, {
          "mean" : 1.5754156933333334E8,
          "variance" : 2.0701308887565702E15,
          "n" : 3,
          "max" : 2.09925128E8,
          "min" : 1.27870857E8,
          "sum" : 4.72624708E8,
          "standardDeviation" : 4.549869106640948E7
        }, {
          "mean" : 1.3557305E8,
          "variance" : 9.403708954752E12,
          "n" : 2,
          "max" : 1.37741426E8,
          "min" : 1.33404674E8,
          "sum" : 2.711461E8,
          "standardDeviation" : 3066546.7475243225
        }, {
          "mean" : 1.4924208766666666E8,
          "variance" : 7.653189086599024E14,
          "n" : 3,
          "max" : 1.81065928E8,
          "min" : 1.30931981E8,
          "sum" : 4.47726263E8,
          "standardDeviation" : 2.7664397854641665E7
        }, {
          "mean" : 1.30306589E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.30306589E8,
          "min" : 1.30306589E8,
          "sum" : 1.30306589E8,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 1.48435777E8,
          "variance" : 1.7344589310751998E13,
          "n" : 2,
          "max" : 1.51380653E8,
          "min" : 1.45490901E8,
          "sum" : 2.96871554E8,
          "standardDeviation" : 4164683.5787070305
        }, {
          "mean" : 1.528463035E8,
          "variance" : 1.294365038999805E14,
          "n" : 2,
          "max" : 1.60891069E8,
          "min" : 1.44801538E8,
          "sum" : 3.05692607E8,
          "standardDeviation" : 1.1377016476211173E7
        }, {
          "mean" : 1.529671715E8,
          "variance" : 2.4414864825125E12,
          "n" : 2,
          "max" : 1.54072044E8,
          "min" : 1.51862299E8,
          "sum" : 3.05934343E8,
          "standardDeviation" : 1562525.6741930675
        }, {
          "mean" : 1.5454053533333334E8,
          "variance" : 1.3002466935487622E15,
          "n" : 3,
          "max" : 1.94488895E8,
          "min" : 1.24400574E8,
          "sum" : 4.63621606E8,
          "standardDeviation" : 3.605893361635591E7
        }, {
          "mean" : 1.32027872E8,
          "variance" : 7.005250243360799E13,
          "n" : 2,
          "max" : 1.3794617E8,
          "min" : 1.26109574E8,
          "sum" : 2.64055744E8,
          "standardDeviation" : 8369737.297765563
        }, {
          "mean" : 1.48017114E8,
          "variance" : 1.4035746862440482E15,
          "n" : 3,
          "max" : 1.91101898E8,
          "min" : 1.23105638E8,
          "sum" : 4.44051342E8,
          "standardDeviation" : 3.746431216830289E7
        }, {
          "mean" : 1.23540349E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.23540349E8,
          "min" : 1.23540349E8,
          "sum" : 1.23540349E8,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1.506416155E8,
          "variance" : 2.4118672443360496E13,
          "n" : 2,
          "max" : 1.54114271E8,
          "min" : 1.4716896E8,
          "sum" : 3.01283231E8,
          "standardDeviation" : 4911076.505549521
        }, {
          "mean" : 1.68027893E8,
          "variance" : 5.333900572800001E10,
          "n" : 2,
          "max" : 1.68191201E8,
          "min" : 1.67864585E8,
          "sum" : 3.36055786E8,
          "standardDeviation" : 230952.38844402542
        }, {
          "mean" : 1.28582325E8,
          "variance" : 2.217786793205202E15,
          "n" : 2,
          "max" : 1.61882376E8,
          "min" : 9.5282274E7,
          "sum" : 2.5716465E8,
          "standardDeviation" : 4.7093383751915745E7
        }, {
          "mean" : 1.2607569866666667E8,
          "variance" : 1.1841195855504234E14,
          "n" : 3,
          "max" : 1.38342859E8,
          "min" : 1.17586372E8,
          "sum" : 3.78227096E8,
          "standardDeviation" : 1.0881725899646726E7
        }, {
          "mean" : 1.35429455E8,
          "variance" : 3.1436328337992E13,
          "n" : 2,
          "max" : 1.39394069E8,
          "min" : 1.31464841E8,
          "sum" : 2.7085891E8,
          "standardDeviation" : 5606810.888374246
        }, {
          "mean" : 1.5299124566666666E8,
          "variance" : 1.3507531997149498E15,
          "n" : 3,
          "max" : 1.94404783E8,
          "min" : 1.24256875E8,
          "sum" : 4.58973737E8,
          "standardDeviation" : 3.675259446236347E7
        }, {
          "mean" : 1.20162909E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.20162909E8,
          "min" : 1.20162909E8,
          "sum" : 1.20162909E8,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1.827193055E8,
          "variance" : 1.7744967214090208E15,
          "n" : 2,
          "max" : 2.1250602E8,
          "min" : 1.52932591E8,
          "sum" : 3.65438611E8,
          "standardDeviation" : 4.212477562443533E7
        }, {
          "mean" : 1.62959078E8,
          "variance" : 7.663745610578E12,
          "n" : 2,
          "max" : 1.64916595E8,
          "min" : 1.61001561E8,
          "sum" : 3.25918156E8,
          "standardDeviation" : 2768347.089975894
        }, {
          "mean" : 1.7725762E8,
          "variance" : 2.494079579311567E15,
          "n" : 3,
          "max" : 2.31994243E8,
          "min" : 1.34172879E8,
          "sum" : 5.3177286E8,
          "standardDeviation" : 4.994076070016923E7
        }, {
          "mean" : 1.2634074E8,
          "variance" : 6.322397313152E12,
          "n" : 2,
          "max" : 1.28118716E8,
          "min" : 1.24562764E8,
          "sum" : 2.5268148E8,
          "standardDeviation" : 2514437.772773866
        }, {
          "mean" : 1.25320522E8,
          "variance" : 2.1195057804979997E14,
          "n" : 2,
          "max" : 1.35614952E8,
          "min" : 1.15026092E8,
          "sum" : 2.50641044E8,
          "standardDeviation" : 1.455852252290046E7
        }, {
          "mean" : 1.4983488533333334E8,
          "variance" : 1.164244985715361E15,
          "n" : 3,
          "max" : 1.88970654E8,
          "min" : 1.26325086E8,
          "sum" : 4.49504656E8,
          "standardDeviation" : 3.4121034358813934E7
        }, {
          "mean" : 1.19167893E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.19167893E8,
          "min" : 1.19167893E8,
          "sum" : 1.19167893E8,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 1.91721801E8,
          "variance" : 2.509811513546402E15,
          "n" : 2,
          "max" : 2.2714645E8,
          "min" : 1.56297152E8,
          "sum" : 3.83443602E8,
          "standardDeviation" : 5.00980190581065E7
        }, {
          "mean" : 1.47994449E8,
          "variance" : 1.7697965752352E13,
          "n" : 2,
          "max" : 1.50969173E8,
          "min" : 1.45019725E8,
          "sum" : 2.95988898E8,
          "standardDeviation" : 4206895.025116743
        }, {
          "mean" : 1.94713497E8,
          "variance" : 1.5045133511616082E15,
          "n" : 2,
          "max" : 2.22140795E8,
          "min" : 1.67286199E8,
          "sum" : 3.89426994E8,
          "standardDeviation" : 3.878805681084847E7
        }, {
          "mean" : 1.2795337633333333E8,
          "variance" : 1.4693569323372938E14,
          "n" : 3,
          "max" : 1.40239063E8,
          "min" : 1.16002597E8,
          "sum" : 3.83860129E8,
          "standardDeviation" : 1.212170339654165E7
        }, {
          "mean" : 1.240669865E8,
          "variance" : 2.4389837041332047E14,
          "n" : 2,
          "max" : 1.35110047E8,
          "min" : 1.13023926E8,
          "sum" : 2.48133973E8,
          "standardDeviation" : 1.5617245929206612E7
        }, {
          "mean" : 1.42845558E8,
          "variance" : 1.089318436657012E15,
          "n" : 3,
          "max" : 1.80036712E8,
          "min" : 1.17043596E8,
          "sum" : 4.28536674E8,
          "standardDeviation" : 3.300482444517789E7
        }, {
          "mean" : 1.15575695E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.15575695E8,
          "min" : 1.15575695E8,
          "sum" : 1.15575695E8,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 1.49295153E8,
          "variance" : 3.874027785420801E13,
          "n" : 2,
          "max" : 1.53696305E8,
          "min" : 1.44894001E8,
          "sum" : 2.98590306E8,
          "standardDeviation" : 6224168.848465472
        }, {
          "mean" : 1.56287576E8,
          "variance" : 1.2421683056672E13,
          "n" : 2,
          "max" : 1.58779732E8,
          "min" : 1.5379542E8,
          "sum" : 3.12575152E8,
          "standardDeviation" : 3524440.814749483
        }, {
          "mean" : 1.421597705E8,
          "variance" : 2.00903511903125E13,
          "n" : 2,
          "max" : 1.45329183E8,
          "min" : 1.38990358E8,
          "sum" : 2.84319541E8,
          "standardDeviation" : 4482226.142254817
        }, {
          "mean" : 1.3652642266666666E8,
          "variance" : 4.196264163268443E14,
          "n" : 3,
          "max" : 1.51125725E8,
          "min" : 1.13109337E8,
          "sum" : 4.09579268E8,
          "standardDeviation" : 2.0484784995865695E7
        }, {
          "mean" : 1.24639859E8,
          "variance" : 1.2970658900321998E13,
          "n" : 2,
          "max" : 1.2718649E8,
          "min" : 1.22093228E8,
          "sum" : 2.49279718E8,
          "standardDeviation" : 3601480.098559757
        }, {
          "mean" : 1.6338669966666666E8,
          "variance" : 6.807366210241824E14,
          "n" : 3,
          "max" : 1.83542768E8,
          "min" : 1.3391701E8,
          "sum" : 4.90160099E8,
          "standardDeviation" : 2.6090929861240715E7
        }, {
          "mean" : 1.33675206E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.33675206E8,
          "min" : 1.33675206E8,
          "sum" : 1.33675206E8,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 1.545649545E8,
          "variance" : 2.5552599232050003E11,
          "n" : 2,
          "max" : 1.54922394E8,
          "min" : 1.54207515E8,
          "sum" : 3.09129909E8,
          "standardDeviation" : 505495.7886278579
        }, {
          "mean" : 1.678861255E8,
          "variance" : 1.6673383182170453E14,
          "n" : 2,
          "max" : 1.77016674E8,
          "min" : 1.58755577E8,
          "sum" : 3.35772251E8,
          "standardDeviation" : 1.291254552060532E7
        }, {
          "mean" : 1.623972655E8,
          "variance" : 1.53970822320005E13,
          "n" : 2,
          "max" : 1.6517189E8,
          "min" : 1.59622641E8,
          "sum" : 3.24794531E8,
          "standardDeviation" : 3923911.5983926677
        }, {
          "mean" : 1.431386175E8,
          "variance" : 4.70200839998805E13,
          "n" : 2,
          "max" : 1.47987333E8,
          "min" : 1.38289902E8,
          "sum" : 2.86277235E8,
          "standardDeviation" : 6857119.220188643
        }, {
          "mean" : 1.45839395E8,
          "variance" : 9.37958612768971E14,
          "n" : 3,
          "max" : 1.80927484E8,
          "min" : 1.2447722E8,
          "sum" : 4.37518185E8,
          "standardDeviation" : 3.0626109984276015E7
        }, {
          "mean" : 1.281776415E8,
          "variance" : 2.483975982845E11,
          "n" : 2,
          "max" : 1.2853006E8,
          "min" : 1.27825223E8,
          "sum" : 2.56355283E8,
          "standardDeviation" : 498395.0223311826
        }, {
          "mean" : 1.358598965E8,
          "variance" : 4.53414123495045E13,
          "n" : 2,
          "max" : 1.40621273E8,
          "min" : 1.3109852E8,
          "sum" : 2.71719793E8,
          "standardDeviation" : 6733603.221864539
        } ],
        "7" : [ {
          "mean" : 1.688433015E8,
          "variance" : 1.4862328100121642E15,
          "n" : 2,
          "max" : 1.96103463E8,
          "min" : 1.4158314E8,
          "sum" : 3.37686603E8,
          "standardDeviation" : 3.855169010578089E7
        }, {
          "mean" : 1.542042895E8,
          "variance" : 3.01544693848445E13,
          "n" : 2,
          "max" : 1.58087231E8,
          "min" : 1.50321348E8,
          "sum" : 3.08408579E8,
          "standardDeviation" : 5491308.531201329
        }, {
          "mean" : 1.477155225E8,
          "variance" : 3.8944637241125E12,
          "n" : 2,
          "max" : 1.49110955E8,
          "min" : 1.4632009E8,
          "sum" : 2.95431045E8,
          "standardDeviation" : 1973439.566876194
        }, {
          "mean" : 1.2849196433333333E8,
          "variance" : 1.6771415331060034E14,
          "n" : 3,
          "max" : 1.43243129E8,
          "min" : 1.18991174E8,
          "sum" : 3.85475893E8,
          "standardDeviation" : 1.295044992695622E7
        }, {
          "mean" : 1.464605565E8,
          "variance" : 1.7054554965150128E15,
          "n" : 2,
          "max" : 1.75662059E8,
          "min" : 1.17259054E8,
          "sum" : 2.92921113E8,
          "standardDeviation" : 4.1297160877171844E7
        }, {
          "mean" : 1.2848432066666667E8,
          "variance" : 2.5302105635922332E13,
          "n" : 3,
          "max" : 1.33186047E8,
          "min" : 1.23180081E8,
          "sum" : 3.85452962E8,
          "standardDeviation" : 5030119.843097412
        }, {
          "mean" : 1.17279032E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.17279032E8,
          "min" : 1.17279032E8,
          "sum" : 1.17279032E8,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1.794353285E8,
          "variance" : 1.4086834856328125E15,
          "n" : 2,
          "max" : 2.05974766E8,
          "min" : 1.52895891E8,
          "sum" : 3.58870657E8,
          "standardDeviation" : 3.753243245025311E7
        }, {
          "mean" : 1.44638707E8,
          "variance" : 1.0781872683842E13,
          "n" : 2,
          "max" : 1.46960546E8,
          "min" : 1.42316868E8,
          "sum" : 2.89277414E8,
          "standardDeviation" : 3283576.2034467845
        }, {
          "mean" : 1.50114676E8,
          "variance" : 8.0788751803298E13,
          "n" : 2,
          "max" : 1.56470333E8,
          "min" : 1.43759019E8,
          "sum" : 3.00229352E8,
          "standardDeviation" : 8988256.327191498
        }, {
          "mean" : 1.5447692066666666E8,
          "variance" : 1.4455257038127005E15,
          "n" : 3,
          "max" : 1.98299121E8,
          "min" : 1.30277421E8,
          "sum" : 4.63430762E8,
          "standardDeviation" : 3.802006975023455E7
        }, {
          "mean" : 1.233041805E8,
          "variance" : 3.765618688049999E10,
          "n" : 2,
          "max" : 1.23441396E8,
          "min" : 1.23166965E8,
          "sum" : 2.46608361E8,
          "standardDeviation" : 194052.0210678054
        }, {
          "mean" : 1.3185742966666667E8,
          "variance" : 6.345392662569333E12,
          "n" : 3,
          "max" : 1.34067257E8,
          "min" : 1.29114563E8,
          "sum" : 3.95572289E8,
          "standardDeviation" : 2519006.2847419283
        }, {
          "mean" : 1.82312587E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.82312587E8,
          "min" : 1.82312587E8,
          "sum" : 1.82312587E8,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 1.89217705E8,
          "variance" : 1.7189942035735222E15,
          "n" : 2,
          "max" : 2.18534886E8,
          "min" : 1.59900524E8,
          "sum" : 3.7843541E8,
          "standardDeviation" : 4.146075498074682E7
        }, {
          "mean" : 1.501903385E8,
          "variance" : 3.1668200572944496E13,
          "n" : 2,
          "max" : 1.54169547E8,
          "min" : 1.4621113E8,
          "sum" : 3.00380677E8,
          "standardDeviation" : 5627450.6282103
        }, {
          "mean" : 1.428459485E8,
          "variance" : 3.31790082789245E13,
          "n" : 2,
          "max" : 1.4691897E8,
          "min" : 1.38772927E8,
          "sum" : 2.85691897E8,
          "standardDeviation" : 5760122.245137207
        }, {
          "mean" : 1.3134420066666667E8,
          "variance" : 6.921690441476234E13,
          "n" : 3,
          "max" : 1.40647002E8,
          "min" : 1.24616669E8,
          "sum" : 3.94032602E8,
          "standardDeviation" : 8319669.729908895
        }, {
          "mean" : 1.2923069E8,
          "variance" : 7.5252451792968E13,
          "n" : 2,
          "max" : 1.35364712E8,
          "min" : 1.23096668E8,
          "sum" : 2.5846138E8,
          "standardDeviation" : 8674817.104294937
        }, {
          "mean" : 1.48435445E8,
          "variance" : 6.49900698087117E14,
          "n" : 3,
          "max" : 1.77609561E8,
          "min" : 1.30449282E8,
          "sum" : 4.45306335E8,
          "standardDeviation" : 2.5493150022841763E7
        }, {
          "mean" : 1.1779212E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.1779212E8,
          "min" : 1.1779212E8,
          "sum" : 1.1779212E8,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1.47149819E8,
          "variance" : 9.05910895125E12,
          "n" : 2,
          "max" : 1.49278094E8,
          "min" : 1.45021544E8,
          "sum" : 2.94299638E8,
          "standardDeviation" : 3009835.369459599
        }, {
          "mean" : 1.81059011E8,
          "variance" : 3.0895737729314585E15,
          "n" : 2,
          "max" : 2.20362788E8,
          "min" : 1.41755234E8,
          "sum" : 3.62118022E8,
          "standardDeviation" : 5.558393448588772E7
        }, {
          "mean" : 1.4864210733333334E8,
          "variance" : 2.0017442632688434E14,
          "n" : 3,
          "max" : 1.6478166E8,
          "min" : 1.38379033E8,
          "sum" : 4.45926322E8,
          "standardDeviation" : 1.4148301181657264E7
        }, {
          "mean" : 1.338503135E8,
          "variance" : 2.318073754206125E14,
          "n" : 2,
          "max" : 1.44616171E8,
          "min" : 1.23084456E8,
          "sum" : 2.67700627E8,
          "standardDeviation" : 1.5225221687076103E7
        }, {
          "mean" : 1.46612355E8,
          "variance" : 1.335765955077248E15,
          "n" : 2,
          "max" : 1.72455787E8,
          "min" : 1.20768923E8,
          "sum" : 2.9322471E8,
          "standardDeviation" : 3.654813203266684E7
        }, {
          "mean" : 1.2338529966666667E8,
          "variance" : 1.716977571408373E14,
          "n" : 3,
          "max" : 1.33019945E8,
          "min" : 1.08464613E8,
          "sum" : 3.70155899E8,
          "standardDeviation" : 1.3103349081087526E7
        }, {
          "mean" : 1.223852E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.223852E8,
          "min" : 1.223852E8,
          "sum" : 1.223852E8,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1.81997962E8,
          "variance" : 2.2297307763199998E15,
          "n" : 2,
          "max" : 2.15387562E8,
          "min" : 1.48608362E8,
          "sum" : 3.63995924E8,
          "standardDeviation" : 4.722002516221269E7
        }, {
          "mean" : 1.44966724E8,
          "variance" : 5.798587434216201E13,
          "n" : 2,
          "max" : 1.50351233E8,
          "min" : 1.39582215E8,
          "sum" : 2.89933448E8,
          "standardDeviation" : 7614845.654519992
        }, {
          "mean" : 1.75878352E8,
          "variance" : 4.2719355095844665E15,
          "n" : 3,
          "max" : 2.51330895E8,
          "min" : 1.36695775E8,
          "sum" : 5.27635056E8,
          "standardDeviation" : 6.536004520794387E7
        }, {
          "mean" : 1.346029985E8,
          "variance" : 1.31778536779805E13,
          "n" : 2,
          "max" : 1.37169889E8,
          "min" : 1.32036108E8,
          "sum" : 2.69205997E8,
          "standardDeviation" : 3630131.358226655
        }, {
          "mean" : 1.8349693466666666E8,
          "variance" : 4.4681708055103835E15,
          "n" : 3,
          "max" : 2.51680337E8,
          "min" : 1.18077314E8,
          "sum" : 5.50490804E8,
          "standardDeviation" : 6.684437751606625E7
        }, {
          "mean" : 1.557690255E8,
          "variance" : 3.0676652851896005E15,
          "n" : 2,
          "max" : 1.94933201E8,
          "min" : 1.1660485E8,
          "sum" : 3.11538051E8,
          "standardDeviation" : 5.538650815126009E7
        }, {
          "mean" : 1.20817658E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.20817658E8,
          "min" : 1.20817658E8,
          "sum" : 1.20817658E8,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1.98332106E8,
          "variance" : 6.225335633397888E15,
          "n" : 2,
          "max" : 2.54123394E8,
          "min" : 1.42540818E8,
          "sum" : 3.96664212E8,
          "standardDeviation" : 7.89007961518633E7
        }, {
          "mean" : 1.452841605E8,
          "variance" : 3.63799637916245E13,
          "n" : 2,
          "max" : 1.49549132E8,
          "min" : 1.41019189E8,
          "sum" : 2.90568321E8,
          "standardDeviation" : 6031580.538434722
        }, {
          "mean" : 1.876026325E8,
          "variance" : 1.4834257948144845E15,
          "n" : 2,
          "max" : 2.14837039E8,
          "min" : 1.60368226E8,
          "sum" : 3.75205265E8,
          "standardDeviation" : 3.8515267035481974E7
        }, {
          "mean" : 1.5222893833333334E8,
          "variance" : 8.972489426452961E14,
          "n" : 3,
          "max" : 1.86610619E8,
          "min" : 1.31770994E8,
          "sum" : 4.56686815E8,
          "standardDeviation" : 2.995411395193148E7
        }, {
          "mean" : 1.811055135E8,
          "variance" : 7.088195797005205E15,
          "n" : 2,
          "max" : 2.4063784E8,
          "min" : 1.21573187E8,
          "sum" : 3.62211027E8,
          "standardDeviation" : 8.419142353592321E7
        }, {
          "mean" : 1.23490253E8,
          "variance" : 9.6317852625616E13,
          "n" : 3,
          "max" : 1.33235069E8,
          "min" : 1.13608177E8,
          "sum" : 3.70470759E8,
          "standardDeviation" : 9814165.915940896
        }, {
          "mean" : 1.17199052E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.17199052E8,
          "min" : 1.17199052E8,
          "sum" : 1.17199052E8,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 1.92535741E8,
          "variance" : 3.293636258268098E15,
          "n" : 2,
          "max" : 2.33116748E8,
          "min" : 1.51954734E8,
          "sum" : 3.85071482E8,
          "standardDeviation" : 5.7390210474157505E7
        }, {
          "mean" : 1.462976375E8,
          "variance" : 1.62552787254045E13,
          "n" : 2,
          "max" : 1.49148539E8,
          "min" : 1.43446736E8,
          "sum" : 2.92595275E8,
          "standardDeviation" : 4031783.5662898
        }, {
          "mean" : 1.5387772E8,
          "variance" : 1.75063912328E13,
          "n" : 2,
          "max" : 1.568363E8,
          "min" : 1.5091914E8,
          "sum" : 3.0775544E8,
          "standardDeviation" : 4184063.9613657915
        }, {
          "mean" : 1.3776982033333334E8,
          "variance" : 2.7595391274808336E13,
          "n" : 3,
          "max" : 1.43561622E8,
          "min" : 1.33312937E8,
          "sum" : 4.13309461E8,
          "standardDeviation" : 5253131.5683893105
        }, {
          "mean" : 1.459021695E8,
          "variance" : 2.3043664433736005E15,
          "n" : 2,
          "max" : 1.79845994E8,
          "min" : 1.11958345E8,
          "sum" : 2.91804339E8,
          "standardDeviation" : 4.800381696671214E7
        }, {
          "mean" : 1.414780175E8,
          "variance" : 8.679317149854452E13,
          "n" : 2,
          "max" : 1.48065626E8,
          "min" : 1.34890409E8,
          "sum" : 2.82956035E8,
          "standardDeviation" : 9316285.284304282
        }, {
          "mean" : 1.576976805E8,
          "variance" : 3.1417625278893605E15,
          "n" : 2,
          "max" : 1.97332025E8,
          "min" : 1.18063336E8,
          "sum" : 3.15395361E8,
          "standardDeviation" : 5.6051427527667485E7
        } ],
        "14" : [ {
          "mean" : 1.88832759E8,
          "variance" : 3.5013701938674415E15,
          "n" : 2,
          "max" : 2.30673948E8,
          "min" : 1.4699157E8,
          "sum" : 3.77665518E8,
          "standardDeviation" : 5.9172376949615955E7
        }, {
          "mean" : 1.478433745E8,
          "variance" : 4.400888817420499E12,
          "n" : 2,
          "max" : 1.49326764E8,
          "min" : 1.46359985E8,
          "sum" : 2.95686749E8,
          "standardDeviation" : 2097829.549181844
        }, {
          "mean" : 1.95902296E8,
          "variance" : 1.4512539335025918E15,
          "n" : 2,
          "max" : 2.2283976E8,
          "min" : 1.68964832E8,
          "sum" : 3.91804592E8,
          "standardDeviation" : 3.8095326924737E7
        }, {
          "mean" : 1.2974313333333333E8,
          "variance" : 2.8435897658665332E13,
          "n" : 3,
          "max" : 1.35660226E8,
          "min" : 1.25309152E8,
          "sum" : 3.892294E8,
          "standardDeviation" : 5332532.011968173
        }, {
          "mean" : 1.563597625E8,
          "variance" : 1.3934342295292002E15,
          "n" : 2,
          "max" : 1.82755162E8,
          "min" : 1.29964363E8,
          "sum" : 3.12719525E8,
          "standardDeviation" : 3.732873195715601E7
        }, {
          "mean" : 1.28981508E8,
          "variance" : 5.7266624424411E13,
          "n" : 3,
          "max" : 1.35426843E8,
          "min" : 1.20649059E8,
          "sum" : 3.86944524E8,
          "standardDeviation" : 7567471.468357909
        }, {
          "mean" : 1.2837255E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.2837255E8,
          "min" : 1.2837255E8,
          "sum" : 1.2837255E8,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 2.03456004E8,
          "variance" : 7.880396630916003E15,
          "n" : 2,
          "max" : 2.66227003E8,
          "min" : 1.40685005E8,
          "sum" : 4.06912008E8,
          "standardDeviation" : 8.8771598109508E7
        }, {
          "mean" : 1.381854225E8,
          "variance" : 1.4355922624244998E12,
          "n" : 2,
          "max" : 1.39032651E8,
          "min" : 1.37338194E8,
          "sum" : 2.76370845E8,
          "standardDeviation" : 1198162.0351290137
        }, {
          "mean" : 1.438308E8,
          "variance" : 2.290754539458E12,
          "n" : 2,
          "max" : 1.44901023E8,
          "min" : 1.42760577E8,
          "sum" : 2.876616E8,
          "standardDeviation" : 1513523.881363621
        }, {
          "mean" : 1.51889012E8,
          "variance" : 8.421646790486439E14,
          "n" : 3,
          "max" : 1.83262534E8,
          "min" : 1.26007092E8,
          "sum" : 4.55667036E8,
          "standardDeviation" : 2.902007372576169E7
        }, {
          "mean" : 1.30219542E8,
          "variance" : 1.2400757766271998E13,
          "n" : 2,
          "max" : 1.32709598E8,
          "min" : 1.27729486E8,
          "sum" : 2.60439084E8,
          "standardDeviation" : 3521470.9662684994
        }, {
          "mean" : 1.4887138466666666E8,
          "variance" : 1.2811135340203585E15,
          "n" : 3,
          "max" : 1.90097838E8,
          "min" : 1.25728693E8,
          "sum" : 4.46614154E8,
          "standardDeviation" : 3.57926463679393E7
        }, {
          "mean" : 1.32817329E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.32817329E8,
          "min" : 1.32817329E8,
          "sum" : 1.32817329E8,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1.724152235E8,
          "variance" : 1.2148517657162645E15,
          "n" : 2,
          "max" : 1.97061235E8,
          "min" : 1.47769212E8,
          "sum" : 3.44830447E8,
          "standardDeviation" : 3.485472372170327E7
        }, {
          "mean" : 1.545920525E8,
          "variance" : 2.2022645489045005E12,
          "n" : 2,
          "max" : 1.55641401E8,
          "min" : 1.53542704E8,
          "sum" : 3.09184105E8,
          "standardDeviation" : 1484002.8803558638
        }, {
          "mean" : 1.37281997E8,
          "variance" : 2.9522419260028025E15,
          "n" : 3,
          "max" : 1.97582608E8,
          "min" : 9.212772E7,
          "sum" : 4.11845991E8,
          "standardDeviation" : 5.433453713801934E7
        }, {
          "mean" : 1.36166697E8,
          "variance" : 5.0413431111282E13,
          "n" : 2,
          "max" : 1.41187326E8,
          "min" : 1.31146068E8,
          "sum" : 2.72333394E8,
          "standardDeviation" : 7100241.62344367
        }, {
          "mean" : 1.254820935E8,
          "variance" : 5.6356745710445E12,
          "n" : 2,
          "max" : 1.27160735E8,
          "min" : 1.23803452E8,
          "sum" : 2.50964187E8,
          "standardDeviation" : 2373957.575662316
        }, {
          "mean" : 1.48563447E8,
          "variance" : 8.17263087922021E14,
          "n" : 3,
          "max" : 1.81458971E8,
          "min" : 1.29733152E8,
          "sum" : 4.45690341E8,
          "standardDeviation" : 2.858781362612435E7
        }, {
          "mean" : 1.42938645E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.42938645E8,
          "min" : 1.42938645E8,
          "sum" : 1.42938645E8,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 2.112770735E8,
          "variance" : 3.897146656618513E15,
          "n" : 2,
          "max" : 2.55419721E8,
          "min" : 1.67134426E8,
          "sum" : 4.22554147E8,
          "standardDeviation" : 6.24271307735548E7
        }, {
          "mean" : 1.555455895E8,
          "variance" : 7.5788885517005E12,
          "n" : 2,
          "max" : 1.57492239E8,
          "min" : 1.5359894E8,
          "sum" : 3.11091179E8,
          "standardDeviation" : 2752978.124086804
        }, {
          "mean" : 1.48170002E8,
          "variance" : 8.062960833447202E13,
          "n" : 2,
          "max" : 1.54519396E8,
          "min" : 1.41820608E8,
          "sum" : 2.96340004E8,
          "standardDeviation" : 8979399.107650356
        }, {
          "mean" : 1.6730772133333334E8,
          "variance" : 1.6737659121237062E15,
          "n" : 3,
          "max" : 2.11798955E8,
          "min" : 1.31308432E8,
          "sum" : 5.01923164E8,
          "standardDeviation" : 4.091168429829926E7
        }, {
          "mean" : 1.30555168E8,
          "variance" : 6.233531168E11,
          "n" : 2,
          "max" : 1.31113448E8,
          "min" : 1.29996888E8,
          "sum" : 2.61110336E8,
          "standardDeviation" : 789527.1476016515
        }, {
          "mean" : 1.6589753E8,
          "variance" : 4.142230144155451E15,
          "n" : 3,
          "max" : 2.39450305E8,
          "min" : 1.19916681E8,
          "sum" : 4.9769259E8,
          "standardDeviation" : 6.436015960324719E7
        }, {
          "mean" : 1.24320371E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.24320371E8,
          "min" : 1.24320371E8,
          "sum" : 1.24320371E8,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1.424358615E8,
          "variance" : 3.80251211105205E13,
          "n" : 2,
          "max" : 1.46796201E8,
          "min" : 1.38075522E8,
          "sum" : 2.84871723E8,
          "standardDeviation" : 6166451.25745112
        }, {
          "mean" : 1.69925791E8,
          "variance" : 1.106058035063522E15,
          "n" : 2,
          "max" : 1.9344236E8,
          "min" : 1.46409222E8,
          "sum" : 3.39851582E8,
          "standardDeviation" : 3.3257450820282694E7
        }, {
          "mean" : 1.4812008533333334E8,
          "variance" : 2.318727997531253E14,
          "n" : 3,
          "max" : 1.63311268E8,
          "min" : 1.32856784E8,
          "sum" : 4.44360256E8,
          "standardDeviation" : 1.522737008656207E7
        }, {
          "mean" : 1.678725955E8,
          "variance" : 1.7548437160191122E15,
          "n" : 2,
          "max" : 1.97493903E8,
          "min" : 1.38251288E8,
          "sum" : 3.35745191E8,
          "standardDeviation" : 4.1890854801723875E7
        }, {
          "mean" : 1.33402193E8,
          "variance" : 9.773862084084698E13,
          "n" : 3,
          "max" : 1.41583676E8,
          "min" : 1.22416807E8,
          "sum" : 4.00206579E8,
          "standardDeviation" : 9886284.48108019
        }, {
          "mean" : 1.654438745E8,
          "variance" : 1.5708196905041205E15,
          "n" : 2,
          "max" : 1.93469039E8,
          "min" : 1.3741871E8,
          "sum" : 3.30887749E8,
          "standardDeviation" : 3.9633567723637E7
        }, {
          "mean" : 1.27434791E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.27434791E8,
          "min" : 1.27434791E8,
          "sum" : 1.27434791E8,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 2.223586755E8,
          "variance" : 8.1046319006645E12,
          "n" : 2,
          "max" : 2.24371712E8,
          "min" : 2.20345639E8,
          "sum" : 4.44717351E8,
          "standardDeviation" : 2846863.519852067
        }, {
          "mean" : 1.623632735E8,
          "variance" : 2.8479359205E9,
          "n" : 2,
          "max" : 1.62401009E8,
          "min" : 1.62325538E8,
          "sum" : 3.24726547E8,
          "standardDeviation" : 53366.055882929926
        }, {
          "mean" : 1.55735309E8,
          "variance" : 4.262301808144199E13,
          "n" : 2,
          "max" : 1.60351748E8,
          "min" : 1.5111887E8,
          "sum" : 3.11470618E8,
          "standardDeviation" : 6528630.643668088
        }, {
          "mean" : 1.6147671E8,
          "variance" : 2.505516759083007E15,
          "n" : 3,
          "max" : 2.15993793E8,
          "min" : 1.17591909E8,
          "sum" : 4.8443013E8,
          "standardDeviation" : 5.0055137189733155E7
        }, {
          "mean" : 1.361355445E8,
          "variance" : 4.27875679832445E13,
          "n" : 2,
          "max" : 1.40760886E8,
          "min" : 1.31510203E8,
          "sum" : 2.72271089E8,
          "standardDeviation" : 6541220.679907115
        }, {
          "mean" : 1.30590108E8,
          "variance" : 3.9829780975529995E12,
          "n" : 3,
          "max" : 1.32588419E8,
          "min" : 1.28596949E8,
          "sum" : 3.91770324E8,
          "standardDeviation" : 1995739.987461543
        }, {
          "mean" : 1.37627239E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.37627239E8,
          "min" : 1.37627239E8,
          "sum" : 1.37627239E8,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1.820876415E8,
          "variance" : 3.2802690730641005E15,
          "n" : 2,
          "max" : 2.22586216E8,
          "min" : 1.41589067E8,
          "sum" : 3.64175283E8,
          "standardDeviation" : 5.727363331467719E7
        }, {
          "mean" : 1.50725699E8,
          "variance" : 2.8518043673087996E13,
          "n" : 2,
          "max" : 1.54501811E8,
          "min" : 1.46949587E8,
          "sum" : 3.01451398E8,
          "standardDeviation" : 5340228.803439792
        }, {
          "mean" : 1.641044845E8,
          "variance" : 3.551296120873605E14,
          "n" : 2,
          "max" : 1.77429829E8,
          "min" : 1.5077914E8,
          "sum" : 3.28208969E8,
          "standardDeviation" : 1.884488291519373E7
        }, {
          "mean" : 1.8120541066666666E8,
          "variance" : 1.298741259236336E15,
          "n" : 3,
          "max" : 2.06454446E8,
          "min" : 1.39934673E8,
          "sum" : 5.43616232E8,
          "standardDeviation" : 3.603805293348041E7
        }, {
          "mean" : 1.45950393E8,
          "variance" : 1.273067147933378E15,
          "n" : 2,
          "max" : 1.7118001E8,
          "min" : 1.20720776E8,
          "sum" : 2.91900786E8,
          "standardDeviation" : 3.56800665348788E7
        }, {
          "mean" : 1.40741282E8,
          "variance" : 2.6950682520951097E14,
          "n" : 3,
          "max" : 1.56658688E8,
          "min" : 1.23867201E8,
          "sum" : 4.22223846E8,
          "standardDeviation" : 1.6416663035145449E7
        }, {
          "mean" : 1.80815446E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.80815446E8,
          "min" : 1.80815446E8,
          "sum" : 1.80815446E8,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1.939679505E8,
          "variance" : 2.0309229799038848E15,
          "n" : 2,
          "max" : 2.25834257E8,
          "min" : 1.62101644E8,
          "sum" : 3.87935901E8,
          "standardDeviation" : 4.506576283503792E7
        }, {
          "mean" : 1.53278893E8,
          "variance" : 2.5148388024242E13,
          "n" : 2,
          "max" : 1.56824904E8,
          "min" : 1.49732882E8,
          "sum" : 3.06557786E8,
          "standardDeviation" : 5014816.848524181
        }, {
          "mean" : 1.940934865E8,
          "variance" : 5.851254800813806E14,
          "n" : 2,
          "max" : 2.11197952E8,
          "min" : 1.76989021E8,
          "sum" : 3.88186973E8,
          "standardDeviation" : 2.4189367087242704E7
        }, {
          "mean" : 1.39034369E8,
          "variance" : 7.8279436630827E13,
          "n" : 3,
          "max" : 1.49091092E8,
          "min" : 1.32448388E8,
          "sum" : 4.17103107E8,
          "standardDeviation" : 8847566.706774637
        }, {
          "mean" : 1.333100265E8,
          "variance" : 2.9938824770405E12,
          "n" : 2,
          "max" : 1.34533522E8,
          "min" : 1.32086531E8,
          "sum" : 2.66620053E8,
          "standardDeviation" : 1730283.9296024512
        }, {
          "mean" : 1.574496095E8,
          "variance" : 2.4339609862725125E15,
          "n" : 2,
          "max" : 1.92334857E8,
          "min" : 1.22564362E8,
          "sum" : 3.14899219E8,
          "standardDeviation" : 4.933519014124211E7
        }, {
          "mean" : 1.311290295E8,
          "variance" : 2.6748870533112504E13,
          "n" : 2,
          "max" : 1.34786137E8,
          "min" : 1.27471922E8,
          "sum" : 2.62258059E8,
          "standardDeviation" : 5171931.025556364
        } ],
        "22" : [ {
          "mean" : 1.768766425E8,
          "variance" : 7.871139528623406E14,
          "n" : 2,
          "max" : 1.96714913E8,
          "min" : 1.57038372E8,
          "sum" : 3.53753285E8,
          "standardDeviation" : 2.8055551195126083E7
        }, {
          "mean" : 1.496821835E8,
          "variance" : 2.1057849947460504E13,
          "n" : 2,
          "max" : 1.52927014E8,
          "min" : 1.46437353E8,
          "sum" : 2.99364367E8,
          "standardDeviation" : 4588883.3007018715
        }, {
          "mean" : 1.79026695E8,
          "variance" : 2.13799023130568E14,
          "n" : 2,
          "max" : 1.89365917E8,
          "min" : 1.68687473E8,
          "sum" : 3.5805339E8,
          "standardDeviation" : 1.4621867976786276E7
        }, {
          "mean" : 1.3035284666666667E8,
          "variance" : 1.905763782822453E14,
          "n" : 3,
          "max" : 1.43181368E8,
          "min" : 1.15744188E8,
          "sum" : 3.9105854E8,
          "standardDeviation" : 1.3804940357793847E7
        }, {
          "mean" : 1.23646113E8,
          "variance" : 2.38102442888E11,
          "n" : 2,
          "max" : 1.23991151E8,
          "min" : 1.23301075E8,
          "sum" : 2.47292226E8,
          "standardDeviation" : 487957.419134088
        }, {
          "mean" : 1.6709337666666666E8,
          "variance" : 3.8046871901985265E15,
          "n" : 3,
          "max" : 2.37990374E8,
          "min" : 1.25737339E8,
          "sum" : 5.0128013E8,
          "standardDeviation" : 6.168214644610324E7
        }, {
          "mean" : 1.18100597E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.18100597E8,
          "min" : 1.18100597E8,
          "sum" : 1.18100597E8,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 2.087672385E8,
          "variance" : 6.355425393561639E15,
          "n" : 2,
          "max" : 2.65138443E8,
          "min" : 1.52396034E8,
          "sum" : 4.17534477E8,
          "standardDeviation" : 7.972092193120724E7
        }, {
          "mean" : 1.40825371E8,
          "variance" : 1.0184938782343202E14,
          "n" : 2,
          "max" : 1.47961525E8,
          "min" : 1.33689217E8,
          "sum" : 2.81650742E8,
          "standardDeviation" : 1.0092045769983012E7
        }, {
          "mean" : 1.643428345E8,
          "variance" : 8.289188962351248E13,
          "n" : 2,
          "max" : 1.70780687E8,
          "min" : 1.57904982E8,
          "sum" : 3.28685669E8,
          "standardDeviation" : 9104498.318057535
        }, {
          "mean" : 1.5472400666666666E8,
          "variance" : 4.578824923904244E14,
          "n" : 3,
          "max" : 1.7820121E8,
          "min" : 1.36314709E8,
          "sum" : 4.6417202E8,
          "standardDeviation" : 2.1398188997913454E7
        }, {
          "mean" : 1.272236575E8,
          "variance" : 3.754420596872451E13,
          "n" : 2,
          "max" : 1.31556336E8,
          "min" : 1.22890979E8,
          "sum" : 2.54447315E8,
          "standardDeviation" : 6127332.696102318
        }, {
          "mean" : 1.2703854066666667E8,
          "variance" : 8.465744975512934E13,
          "n" : 3,
          "max" : 1.37455584E8,
          "min" : 1.2002133E8,
          "sum" : 3.81115622E8,
          "standardDeviation" : 9200948.307382742
        }, {
          "mean" : 1.82193743E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.82193743E8,
          "min" : 1.82193743E8,
          "sum" : 1.82193743E8,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1.486621585E8,
          "variance" : 1.8624366830238053E14,
          "n" : 2,
          "max" : 1.58312124E8,
          "min" : 1.39012193E8,
          "sum" : 2.97324317E8,
          "standardDeviation" : 1.3647112086532466E7
        }, {
          "mean" : 1.470978895E8,
          "variance" : 4.041912141904051E13,
          "n" : 2,
          "max" : 1.51593394E8,
          "min" : 1.42602385E8,
          "sum" : 2.94195779E8,
          "standardDeviation" : 6357603.43360928
        }, {
          "mean" : 1.7075776666666666E8,
          "variance" : 9.426051289422064E14,
          "n" : 3,
          "max" : 2.06105729E8,
          "min" : 1.50739367E8,
          "sum" : 5.122733E8,
          "standardDeviation" : 3.0701875006947156E7
        }, {
          "mean" : 1.381036945E8,
          "variance" : 4.660438083060501E12,
          "n" : 2,
          "max" : 1.396302E8,
          "min" : 1.36577189E8,
          "sum" : 2.76207389E8,
          "standardDeviation" : 2158804.781137123
        }, {
          "mean" : 1.35414005E8,
          "variance" : 1.3793143413350698E14,
          "n" : 3,
          "max" : 1.47837923E8,
          "min" : 1.24493954E8,
          "sum" : 4.06242015E8,
          "standardDeviation" : 1.1744421404799258E7
        }, {
          "mean" : 1.855025785E8,
          "variance" : 7.3548193081617E15,
          "n" : 2,
          "max" : 2.46144228E8,
          "min" : 1.24860929E8,
          "sum" : 3.71005157E8,
          "standardDeviation" : 8.576024316757561E7
        }, {
          "mean" : 1.31367361E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.31367361E8,
          "min" : 1.31367361E8,
          "sum" : 1.31367361E8,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 1.745564895E8,
          "variance" : 1.3231934394360128E15,
          "n" : 2,
          "max" : 2.00278012E8,
          "min" : 1.48834967E8,
          "sum" : 3.49112979E8,
          "standardDeviation" : 3.637572596438472E7
        }, {
          "mean" : 1.512372715E8,
          "variance" : 2.6787581016174047E14,
          "n" : 2,
          "max" : 1.62810426E8,
          "min" : 1.39664117E8,
          "sum" : 3.02474543E8,
          "standardDeviation" : 1.6366912053339215E7
        }, {
          "mean" : 1.69983189E8,
          "variance" : 9.5564095903872E13,
          "n" : 2,
          "max" : 1.76895645E8,
          "min" : 1.63070733E8,
          "sum" : 3.39966378E8,
          "standardDeviation" : 9775689.024507275
        }, {
          "mean" : 1.5714805433333334E8,
          "variance" : 1.0442577636996495E15,
          "n" : 3,
          "max" : 1.94009907E8,
          "min" : 1.33701091E8,
          "sum" : 4.71444163E8,
          "standardDeviation" : 3.2314977389743745E7
        }, {
          "mean" : 1.306347685E8,
          "variance" : 2.6591787693924496E13,
          "n" : 2,
          "max" : 1.34281122E8,
          "min" : 1.26988415E8,
          "sum" : 2.61269537E8,
          "standardDeviation" : 5156722.572906603
        }, {
          "mean" : 1.3923092833333334E8,
          "variance" : 1.1275460635639225E15,
          "n" : 3,
          "max" : 1.7591421E8,
          "min" : 1.10012767E8,
          "sum" : 4.17692785E8,
          "standardDeviation" : 3.3578952687121175E7
        }, {
          "mean" : 1.21444419E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.21444419E8,
          "min" : 1.21444419E8,
          "sum" : 1.21444419E8,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1.74014257E8,
          "variance" : 1.971525510131762E15,
          "n" : 2,
          "max" : 2.05411116E8,
          "min" : 1.42617398E8,
          "sum" : 3.48028514E8,
          "standardDeviation" : 4.440186381371577E7
        }, {
          "mean" : 1.563245555E8,
          "variance" : 1.58567666007645E13,
          "n" : 2,
          "max" : 1.59140294E8,
          "min" : 1.53508817E8,
          "sum" : 3.12649111E8,
          "standardDeviation" : 3982055.574796075
        }, {
          "mean" : 1.7286345E8,
          "variance" : 2.8731506372256794E14,
          "n" : 2,
          "max" : 1.84849172E8,
          "min" : 1.60877728E8,
          "sum" : 3.457269E8,
          "standardDeviation" : 1.6950370607233576E7
        }, {
          "mean" : 1.49551371E8,
          "variance" : 1.4284932066901722E15,
          "n" : 3,
          "max" : 1.93188183E8,
          "min" : 1.27129073E8,
          "sum" : 4.48654113E8,
          "standardDeviation" : 3.779541250853299E7
        }, {
          "mean" : 1.258551925E8,
          "variance" : 1.3493877060125002E12,
          "n" : 2,
          "max" : 1.2667659E8,
          "min" : 1.25033795E8,
          "sum" : 2.51710385E8,
          "standardDeviation" : 1161631.4845993544
        }, {
          "mean" : 1.5155966766666666E8,
          "variance" : 9.330078911317904E14,
          "n" : 3,
          "max" : 1.85353673E8,
          "min" : 1.25917278E8,
          "sum" : 4.54679003E8,
          "standardDeviation" : 3.054517787035771E7
        }, {
          "mean" : 1.2696894E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.2696894E8,
          "min" : 1.2696894E8,
          "sum" : 1.2696894E8,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1.42158886E8,
          "variance" : 1.5027000824404997E14,
          "n" : 2,
          "max" : 1.50826931E8,
          "min" : 1.33490841E8,
          "sum" : 2.84317772E8,
          "standardDeviation" : 1.2258466798260294E7
        }, {
          "mean" : 1.453875405E8,
          "variance" : 2.1792403165320504E13,
          "n" : 2,
          "max" : 1.4868848E8,
          "min" : 1.42086601E8,
          "sum" : 2.90775081E8,
          "standardDeviation" : 4668233.409473063
        }, {
          "mean" : 1.52630597E8,
          "variance" : 1.7153079632658E13,
          "n" : 2,
          "max" : 1.5555917E8,
          "min" : 1.49702024E8,
          "sum" : 3.05261194E8,
          "standardDeviation" : 4141627.654999662
        }, {
          "mean" : 1.6906158733333334E8,
          "variance" : 8.695021621528002E14,
          "n" : 3,
          "max" : 2.01864687E8,
          "min" : 1.44756263E8,
          "sum" : 5.07184762E8,
          "standardDeviation" : 2.9487322058009952E7
        }, {
          "mean" : 1.498580455E8,
          "variance" : 5.911611897786125E14,
          "n" : 2,
          "max" : 1.67050503E8,
          "min" : 1.32665588E8,
          "sum" : 2.99716091E8,
          "standardDeviation" : 2.4313806567023035E7
        }, {
          "mean" : 1.4551576433333334E8,
          "variance" : 7.259558796713294E14,
          "n" : 3,
          "max" : 1.76518797E8,
          "min" : 1.27763725E8,
          "sum" : 4.36547293E8,
          "standardDeviation" : 2.6943568428686824E7
        }, {
          "mean" : 1.18203107E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.18203107E8,
          "min" : 1.18203107E8,
          "sum" : 1.18203107E8,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1.49699987E8,
          "variance" : 3.3498084038496194E14,
          "n" : 2,
          "max" : 1.62641796E8,
          "min" : 1.36758178E8,
          "sum" : 2.99399974E8,
          "standardDeviation" : 1.830248180944218E7
        }, {
          "mean" : 1.405215985E8,
          "variance" : 1.1693215911006452E14,
          "n" : 2,
          "max" : 1.4816791E8,
          "min" : 1.32875287E8,
          "sum" : 2.81043197E8,
          "standardDeviation" : 1.0813517425429365E7
        }, {
          "mean" : 1.6799009066666666E8,
          "variance" : 4.059501844602704E14,
          "n" : 3,
          "max" : 1.91242712E8,
          "min" : 1.55702807E8,
          "sum" : 5.03970272E8,
          "standardDeviation" : 2.0148205489826392E7
        }, {
          "mean" : 1.444996805E8,
          "variance" : 1.567231552461125E14,
          "n" : 2,
          "max" : 1.53351888E8,
          "min" : 1.35647473E8,
          "sum" : 2.88999361E8,
          "standardDeviation" : 1.251891190344083E7
        }, {
          "mean" : 1.30995233E8,
          "variance" : 4.3766284835847E13,
          "n" : 3,
          "max" : 1.35000895E8,
          "min" : 1.2335926E8,
          "sum" : 3.92985699E8,
          "standardDeviation" : 6615609.18100873
        }, {
          "mean" : 1.48396021E8,
          "variance" : 2.36506702472045E15,
          "n" : 2,
          "max" : 1.82784006E8,
          "min" : 1.14008036E8,
          "sum" : 2.96792042E8,
          "standardDeviation" : 4.863195476968256E7
        }, {
          "mean" : 1.326801E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.326801E8,
          "min" : 1.326801E8,
          "sum" : 1.326801E8,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1.63350271E8,
          "variance" : 3.1070024673408004E13,
          "n" : 2,
          "max" : 1.67291719E8,
          "min" : 1.59408823E8,
          "sum" : 3.26700542E8,
          "standardDeviation" : 5574049.216988311
        }, {
          "mean" : 1.431878095E8,
          "variance" : 4.495017016662049E13,
          "n" : 2,
          "max" : 1.47928599E8,
          "min" : 1.3844702E8,
          "sum" : 2.86375619E8,
          "standardDeviation" : 6704488.807255964
        }, {
          "mean" : 1.864952885E8,
          "variance" : 4.631756652819805E15,
          "n" : 2,
          "max" : 2.34618862E8,
          "min" : 1.38371715E8,
          "sum" : 3.72990577E8,
          "standardDeviation" : 6.805701031355847E7
        }, {
          "mean" : 1.2154485133333333E8,
          "variance" : 1.3679501546083333E12,
          "n" : 3,
          "max" : 1.22496888E8,
          "min" : 1.20239273E8,
          "sum" : 3.64634554E8,
          "standardDeviation" : 1169594.012727636
        }, {
          "mean" : 1.464766905E8,
          "variance" : 1.7749204329263402E15,
          "n" : 2,
          "max" : 1.76266961E8,
          "min" : 1.1668642E8,
          "sum" : 2.92953381E8,
          "standardDeviation" : 4.212980456786312E7
        }, {
          "mean" : 1.2600529466666667E8,
          "variance" : 1.5618305498643335E12,
          "n" : 3,
          "max" : 1.27116617E8,
          "min" : 1.24652418E8,
          "sum" : 3.78015884E8,
          "standardDeviation" : 1249732.1912571243
        }, {
          "mean" : 1.3141523E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.3141523E8,
          "min" : 1.3141523E8,
          "sum" : 1.3141523E8,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.AbstractGraph#getEdgeCount",
    "kiekerPattern" : "public long org.gradoop.model.impl.AbstractGraph.getEdgeCount()",
    "otherKiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getEdgeData()",
    "module" : "gradoop-flink",
    "name" : "AbstractGraph#getEdgeCount",
    "key" : "org.gradoop.model.impl.AbstractGraph.getEdgeCount_",
    "otherKey" : "org.gradoop.model.impl.AbstractGraph.getEdgeData_",
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#00FF00",
    "statistic" : {
      "meanOld" : 8.033781584488889E8,
      "meanCurrent" : 2298851.905079365,
      "deviationOld" : 1.237324390359943E7,
      "deviationCurrent" : 1577962.4919831294,
      "vms" : 30,
      "callsOld" : 450,
      "calls" : 450,
      "tvalue" : 351.76231050154723,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "FASTER",
    "inVMDeviationPredecessor" : 7.405136057253328E7,
    "inVMDeviation" : 3574511.6075784434,
    "ess" : 1,
    "values" : [ 1543045.1428571427, 1433207.0, 1826724.1777777777, 699782.9, 650545.1333333333, 4196934.211111112, 629003.9333333333, 4732543.523809524, 1338269.8, 5151739.8, 3508594.4, 1316560.8857142858, 2823305.488888889, 1302628.5777777778, 4433652.711111111, 4255026.455555556, 1326417.4, 4368940.8, 1195758.3111111112, 1458354.438095238, 4237427.3, 4335313.122222222, 1148378.8666666667, 4204887.566666666, 2759894.8777777776, 618768.3, 619988.3714285714, 607388.0666666667, 656659.580952381, 1585816.0095238094 ],
    "valuesPredecessor" : [ 8.045142014E8, 7.904127132666667E8, 8.094296893333334E8, 8.060222807333333E8, 7.999398537333333E8, 8.014322732E8, 8.412637691333333E8, 8.175682537333333E8, 8.065541479333333E8, 8.086771412666667E8, 7.964912102666667E8, 7.819530536666666E8, 7.977558112666667E8, 8.286988423333334E8, 7.999081428E8, 7.835952766666666E8, 8.024706260666667E8, 7.943782912E8, 7.933093090666667E8, 8.146209366E8, 7.976996857333333E8, 8.151576296666666E8, 8.035320753333334E8, 8.122584270666667E8, 7.887639566666666E8, 8.062800015333333E8, 8.023418126666666E8, 8.015964849333333E8, 7.904470588666667E8, 8.042717973333334E8 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 7722085.571428571,
          "variance" : 2.944031046954026E14,
          "n" : 2,
          "max" : 4.6624828E7,
          "min" : 918858.0,
          "sum" : 1.5444171142857142E7,
          "standardDeviation" : 1.7158178944614217E7
        }, {
          "mean" : 729449.5,
          "variance" : 8.398807520333332E9,
          "n" : 4,
          "max" : 865821.0,
          "min" : 672464.0,
          "sum" : 2917798.0,
          "standardDeviation" : 91645.00815829159
        }, {
          "mean" : 560986.0,
          "variance" : 7.281045512666663E9,
          "n" : 4,
          "max" : 639184.0,
          "min" : 443516.0,
          "sum" : 2243944.0,
          "standardDeviation" : 85329.04260957499
        }, {
          "mean" : 507952.8,
          "variance" : 2.9283687427E9,
          "n" : 5,
          "max" : 584279.0,
          "min" : 451252.0,
          "sum" : 2539764.0,
          "standardDeviation" : 54114.40420719792
        } ],
        "1" : [ {
          "mean" : 1.2341536E7,
          "variance" : 6.15628881022813E14,
          "n" : 1,
          "max" : 6.2804772E7,
          "min" : 905190.0,
          "sum" : 1.2341536E7,
          "standardDeviation" : 2.481186976071761E7
        }, {
          "mean" : 752934.2,
          "variance" : 7.784848983700004E9,
          "n" : 5,
          "max" : 844033.0,
          "min" : 653805.0,
          "sum" : 3764671.0,
          "standardDeviation" : 88231.79123025897
        }, {
          "mean" : 596395.0,
          "variance" : 2.0994881431999996E10,
          "n" : 4,
          "max" : 783299.0,
          "min" : 480547.0,
          "sum" : 2385580.0,
          "standardDeviation" : 144896.10564815052
        }, {
          "mean" : 629558.75,
          "variance" : 1.745785355491667E10,
          "n" : 4,
          "max" : 720858.0,
          "min" : 438527.0,
          "sum" : 2518235.0,
          "standardDeviation" : 132128.1709360902
        }, {
          "mean" : 488083.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 488083.0,
          "min" : 488083.0,
          "sum" : 488083.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 1.8550668666666664E7,
          "variance" : 1.0322202610903686E15,
          "n" : 1,
          "max" : 8.0824861E7,
          "min" : 825690.0,
          "sum" : 1.8550668666666664E7,
          "standardDeviation" : 3.2128184839644592E7
        }, {
          "mean" : 839556.2,
          "variance" : 3.91624059887E10,
          "n" : 5,
          "max" : 1121969.0,
          "min" : 598835.0,
          "sum" : 4197781.0,
          "standardDeviation" : 197894.93674346496
        }, {
          "mean" : 555192.5,
          "variance" : 1.4816019370000002E9,
          "n" : 4,
          "max" : 586041.0,
          "min" : 499401.0,
          "sum" : 2220770.0,
          "standardDeviation" : 38491.58267725556
        }, {
          "mean" : 482993.25,
          "variance" : 5.913568447583332E9,
          "n" : 4,
          "max" : 595732.0,
          "min" : 426143.0,
          "sum" : 1931973.0,
          "standardDeviation" : 76899.72982776554
        }, {
          "mean" : 499670.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 499670.0,
          "min" : 499670.0,
          "sum" : 499670.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1279506.5,
          "variance" : 1.3711388340509999E11,
          "n" : 1,
          "max" : 1956205.0,
          "min" : 937105.0,
          "sum" : 1279506.5,
          "standardDeviation" : 370288.9188256921
        }, {
          "mean" : 835096.8,
          "variance" : 1.71155979837E10,
          "n" : 5,
          "max" : 1006407.0,
          "min" : 676189.0,
          "sum" : 4175484.0,
          "standardDeviation" : 130826.59509327605
        }, {
          "mean" : 567469.75,
          "variance" : 2.794804528916665E9,
          "n" : 4,
          "max" : 625434.0,
          "min" : 503803.0,
          "sum" : 2269879.0,
          "standardDeviation" : 52865.91083975254
        }, {
          "mean" : 554374.8,
          "variance" : 2.1661238900699993E10,
          "n" : 5,
          "max" : 765546.0,
          "min" : 415706.0,
          "sum" : 2771874.0,
          "standardDeviation" : 147177.57607971397
        } ],
        "4" : [ {
          "mean" : 704184.0,
          "variance" : 1.5889367724799997E10,
          "n" : 6,
          "max" : 839969.0,
          "min" : 548664.0,
          "sum" : 4225104.0,
          "standardDeviation" : 126053.03536527789
        }, {
          "mean" : 610260.75,
          "variance" : 6.336018812916668E9,
          "n" : 4,
          "max" : 727008.0,
          "min" : 553775.0,
          "sum" : 2441043.0,
          "standardDeviation" : 79599.11314152104
        }, {
          "mean" : 618406.0,
          "variance" : 1.6834503950499998E10,
          "n" : 5,
          "max" : 803792.0,
          "min" : 439842.0,
          "sum" : 3092030.0,
          "standardDeviation" : 129747.84757559563
        } ],
        "5" : [ {
          "mean" : 2272608.1666666665,
          "variance" : 9.117407771886168E12,
          "n" : 1,
          "max" : 8411790.0,
          "min" : 834396.0,
          "sum" : 2272608.1666666665,
          "standardDeviation" : 3019504.5573547604
        }, {
          "mean" : 1.1243491000000002E7,
          "variance" : 5.5889101050564456E14,
          "n" : 5,
          "max" : 5.3533236E7,
          "min" : 548613.0,
          "sum" : 5.621745500000001E7,
          "standardDeviation" : 2.3640875840493824E7
        }, {
          "mean" : 554687.75,
          "variance" : 2.543998560916667E9,
          "n" : 4,
          "max" : 584057.0,
          "min" : 479572.0,
          "sum" : 2218751.0,
          "standardDeviation" : 50438.06658583046
        }, {
          "mean" : 461347.25,
          "variance" : 5.632160732916666E9,
          "n" : 4,
          "max" : 526968.0,
          "min" : 393890.0,
          "sum" : 1845389.0,
          "standardDeviation" : 75047.72303618988
        }, {
          "mean" : 399810.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 399810.0,
          "min" : 399810.0,
          "sum" : 399810.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 749337.3333333334,
          "variance" : 1.5298575209466671E10,
          "n" : 6,
          "max" : 927452.0,
          "min" : 613670.0,
          "sum" : 4496024.0,
          "standardDeviation" : 123687.40926006442
        }, {
          "mean" : 591220.25,
          "variance" : 4.96884152625E9,
          "n" : 4,
          "max" : 661791.0,
          "min" : 518835.0,
          "sum" : 2364881.0,
          "standardDeviation" : 70490.01011668249
        }, {
          "mean" : 514830.8,
          "variance" : 1.05731793857E10,
          "n" : 5,
          "max" : 672722.0,
          "min" : 402523.0,
          "sum" : 2574154.0,
          "standardDeviation" : 102825.9664953362
        } ],
        "7" : [ {
          "mean" : 1197690.4285714284,
          "variance" : 1.3017574126228572E11,
          "n" : 2,
          "max" : 1881685.0,
          "min" : 813163.0,
          "sum" : 2395380.857142857,
          "standardDeviation" : 360798.75451875624
        }, {
          "mean" : 826131.75,
          "variance" : 7.433238528916665E9,
          "n" : 4,
          "max" : 912441.0,
          "min" : 729341.0,
          "sum" : 3304527.0,
          "standardDeviation" : 86216.23123818777
        }, {
          "mean" : 1.5581175000000002E7,
          "variance" : 9.040043884110255E14,
          "n" : 4,
          "max" : 6.0681058E7,
          "min" : 461366.0,
          "sum" : 6.232470000000001E7,
          "standardDeviation" : 3.0066665734847046E7
        }, {
          "mean" : 602133.5,
          "variance" : 2.6667667616666665E9,
          "n" : 4,
          "max" : 644218.0,
          "min" : 527124.0,
          "sum" : 2408534.0,
          "standardDeviation" : 51640.74710600793
        }, {
          "mean" : 555011.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 555011.0,
          "min" : 555011.0,
          "sum" : 555011.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1.1350133E7,
          "variance" : 4.672776219848772E14,
          "n" : 1,
          "max" : 5.5183789E7,
          "min" : 909616.0,
          "sum" : 1.1350133E7,
          "standardDeviation" : 2.1616605237291012E7
        }, {
          "mean" : 784895.2,
          "variance" : 3.9686412412700005E10,
          "n" : 5,
          "max" : 1078841.0,
          "min" : 559441.0,
          "sum" : 3924476.0,
          "standardDeviation" : 199214.48846080448
        }, {
          "mean" : 588115.0,
          "variance" : 8.801712520000004E9,
          "n" : 4,
          "max" : 700419.0,
          "min" : 486273.0,
          "sum" : 2352460.0,
          "standardDeviation" : 93817.44251470514
        }, {
          "mean" : 489395.6,
          "variance" : 4.2788563458000016E9,
          "n" : 5,
          "max" : 571723.0,
          "min" : 424117.0,
          "sum" : 2446978.0,
          "standardDeviation" : 65412.967718946995
        } ],
        "9" : [ {
          "mean" : 1.2110622166666668E7,
          "variance" : 7.692697636250909E14,
          "n" : 6,
          "max" : 6.8725774E7,
          "min" : 712421.0,
          "sum" : 7.2663733E7,
          "standardDeviation" : 2.7735712783793584E7
        }, {
          "mean" : 591539.25,
          "variance" : 6.316449744916664E9,
          "n" : 4,
          "max" : 664551.0,
          "min" : 500434.0,
          "sum" : 2366157.0,
          "standardDeviation" : 79476.0954307436
        }, {
          "mean" : 454590.0,
          "variance" : 2.439202614E9,
          "n" : 4,
          "max" : 502570.0,
          "min" : 401035.0,
          "sum" : 1818360.0,
          "standardDeviation" : 49388.28417752534
        }, {
          "mean" : 427847.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 427847.0,
          "min" : 427847.0,
          "sum" : 427847.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1220050.0,
          "variance" : 1.4878091470999997E11,
          "n" : 1,
          "max" : 1946330.0,
          "min" : 918738.0,
          "sum" : 1220050.0,
          "standardDeviation" : 385721.29149166757
        }, {
          "mean" : 9227651.4,
          "variance" : 3.616075002274078E14,
          "n" : 5,
          "max" : 4.3243742E7,
          "min" : 602484.0,
          "sum" : 4.6138257E7,
          "standardDeviation" : 1.9015980127971523E7
        }, {
          "mean" : 675212.75,
          "variance" : 2.1709736134249996E10,
          "n" : 4,
          "max" : 831545.0,
          "min" : 504414.0,
          "sum" : 2700851.0,
          "standardDeviation" : 147342.2415135931
        }, {
          "mean" : 513951.6,
          "variance" : 6.475661753000002E8,
          "n" : 5,
          "max" : 542961.0,
          "min" : 476242.0,
          "sum" : 2569758.0,
          "standardDeviation" : 25447.32157418537
        } ],
        "11" : [ {
          "mean" : 5663242.142857144,
          "variance" : 1.424538722065705E14,
          "n" : 2,
          "max" : 3.2713704E7,
          "min" : 818961.0,
          "sum" : 1.1326484285714287E7,
          "standardDeviation" : 1.1935404149276659E7
        }, {
          "mean" : 791111.0,
          "variance" : 1.2362265334666664E10,
          "n" : 4,
          "max" : 926490.0,
          "min" : 654680.0,
          "sum" : 3164444.0,
          "standardDeviation" : 111185.72450933917
        }, {
          "mean" : 506037.75,
          "variance" : 4.348907442916667E9,
          "n" : 4,
          "max" : 566768.0,
          "min" : 440685.0,
          "sum" : 2024151.0,
          "standardDeviation" : 65946.24661735243
        }, {
          "mean" : 646666.8,
          "variance" : 6.6363492767E9,
          "n" : 5,
          "max" : 781083.0,
          "min" : 563571.0,
          "sum" : 3233334.0,
          "standardDeviation" : 81463.79120013995
        } ],
        "12" : [ {
          "mean" : 1159403.3333333333,
          "variance" : 1.5045614654266672E11,
          "n" : 1,
          "max" : 1850548.0,
          "min" : 762911.0,
          "sum" : 1159403.3333333333,
          "standardDeviation" : 387886.77025991323
        }, {
          "mean" : 8824060.5,
          "variance" : 2.6024854356828097E14,
          "n" : 4,
          "max" : 3.3021949E7,
          "min" : 620251.0,
          "sum" : 3.5296242E7,
          "standardDeviation" : 1.6132220664504964E7
        }, {
          "mean" : 598282.75,
          "variance" : 4.808960134916667E9,
          "n" : 4,
          "max" : 681265.0,
          "min" : 522925.0,
          "sum" : 2393131.0,
          "standardDeviation" : 69346.66635763155
        }, {
          "mean" : 605489.25,
          "variance" : 1.6207573154916662E10,
          "n" : 4,
          "max" : 733139.0,
          "min" : 490834.0,
          "sum" : 2421957.0,
          "standardDeviation" : 127308.96729970227
        }, {
          "mean" : 539424.5,
          "variance" : 1.4574600499999998E7,
          "n" : 2,
          "max" : 542124.0,
          "min" : 536725.0,
          "sum" : 1078849.0,
          "standardDeviation" : 3817.66951162617
        } ],
        "13" : [ {
          "mean" : 1.0966052666666668E7,
          "variance" : 3.8622037883644594E14,
          "n" : 1,
          "max" : 5.0479659E7,
          "min" : 894527.0,
          "sum" : 1.0966052666666668E7,
          "standardDeviation" : 1.9652490397820983E7
        }, {
          "mean" : 725527.8,
          "variance" : 1.1343820564200003E10,
          "n" : 5,
          "max" : 903282.0,
          "min" : 629392.0,
          "sum" : 3627639.0,
          "standardDeviation" : 106507.37328560874
        }, {
          "mean" : 562687.5,
          "variance" : 3.142581407000002E9,
          "n" : 4,
          "max" : 617601.0,
          "min" : 502526.0,
          "sum" : 2250750.0,
          "standardDeviation" : 56058.73176410613
        }, {
          "mean" : 562415.5,
          "variance" : 1.4672721929000002E10,
          "n" : 4,
          "max" : 701814.0,
          "min" : 411868.0,
          "sum" : 2249662.0,
          "standardDeviation" : 121131.01142564608
        }, {
          "mean" : 445325.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 445325.0,
          "min" : 445325.0,
          "sum" : 445325.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 2327687.666666667,
          "variance" : 4.004094733802266E12,
          "n" : 1,
          "max" : 5414340.0,
          "min" : 881768.0,
          "sum" : 2327687.666666667,
          "standardDeviation" : 2001023.4216026224
        }, {
          "mean" : 1.1707247E7,
          "variance" : 6.034433836613916E14,
          "n" : 5,
          "max" : 5.5649972E7,
          "min" : 504920.0,
          "sum" : 5.8536235E7,
          "standardDeviation" : 2.4565084645923603E7
        }, {
          "mean" : 612019.75,
          "variance" : 2.6367224742500014E9,
          "n" : 4,
          "max" : 676431.0,
          "min" : 568935.0,
          "sum" : 2448079.0,
          "standardDeviation" : 51349.02603019848
        }, {
          "mean" : 638557.8,
          "variance" : 4.453973552700001E9,
          "n" : 5,
          "max" : 739109.0,
          "min" : 573999.0,
          "sum" : 3192789.0,
          "standardDeviation" : 66738.09671169834
        } ],
        "15" : [ {
          "mean" : 3425140.8333333335,
          "variance" : 3.0865541875632973E13,
          "n" : 1,
          "max" : 1.4757637E7,
          "min" : 1002645.0,
          "sum" : 3425140.8333333335,
          "standardDeviation" : 5555676.545267279
        }, {
          "mean" : 1.1240433000000002E7,
          "variance" : 5.5840109060224594E14,
          "n" : 5,
          "max" : 5.3511476E7,
          "min" : 524947.0,
          "sum" : 5.620216500000001E7,
          "standardDeviation" : 2.3630511856543563E7
        }, {
          "mean" : 490862.5,
          "variance" : 1.584218398999999E9,
          "n" : 4,
          "max" : 541620.0,
          "min" : 444390.0,
          "sum" : 1963450.0,
          "standardDeviation" : 39802.241130368515
        }, {
          "mean" : 429383.75,
          "variance" : 2.6118273691666654E8,
          "n" : 4,
          "max" : 441559.0,
          "min" : 406553.0,
          "sum" : 1717535.0,
          "standardDeviation" : 16161.148997415577
        }, {
          "mean" : 517106.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 517106.0,
          "min" : 517106.0,
          "sum" : 517106.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1.1827758E7,
          "variance" : 6.737283244683752E14,
          "n" : 1,
          "max" : 6.4806319E7,
          "min" : 847268.0,
          "sum" : 1.1827758E7,
          "standardDeviation" : 2.59562771688926E7
        }, {
          "mean" : 726074.0,
          "variance" : 6.093524202500001E9,
          "n" : 5,
          "max" : 786706.0,
          "min" : 590598.0,
          "sum" : 3630370.0,
          "standardDeviation" : 78061.02870510996
        }, {
          "mean" : 469637.0,
          "variance" : 1.6016026033333337E9,
          "n" : 4,
          "max" : 528514.0,
          "min" : 443313.0,
          "sum" : 1878548.0,
          "standardDeviation" : 40020.02752789325
        }, {
          "mean" : 511917.0,
          "variance" : 3.925311704499999E9,
          "n" : 5,
          "max" : 595976.0,
          "min" : 453309.0,
          "sum" : 2559585.0,
          "standardDeviation" : 62652.308054053356
        } ],
        "17" : [ {
          "mean" : 1.0132384333333332E7,
          "variance" : 5.385472297005273E14,
          "n" : 6,
          "max" : 5.7502183E7,
          "min" : 537882.0,
          "sum" : 6.079430599999999E7,
          "standardDeviation" : 2.320662038515146E7
        }, {
          "mean" : 567864.5,
          "variance" : 3.243264948333334E9,
          "n" : 4,
          "max" : 623361.0,
          "min" : 489075.0,
          "sum" : 2271458.0,
          "standardDeviation" : 56949.67030925933
        }, {
          "mean" : 473350.25,
          "variance" : 5.655124678916668E9,
          "n" : 4,
          "max" : 568126.0,
          "min" : 392469.0,
          "sum" : 1893401.0,
          "standardDeviation" : 75200.56302260421
        }, {
          "mean" : 574947.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 574947.0,
          "min" : 574947.0,
          "sum" : 574947.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 8737020.666666668,
          "variance" : 3.315295550907783E14,
          "n" : 1,
          "max" : 4.5891068E7,
          "min" : 869638.0,
          "sum" : 8737020.666666668,
          "standardDeviation" : 1.8207953072511427E7
        }, {
          "mean" : 751890.0,
          "variance" : 1.4265431479E10,
          "n" : 5,
          "max" : 875125.0,
          "min" : 604035.0,
          "sum" : 3759450.0,
          "standardDeviation" : 119437.98172691968
        }, {
          "mean" : 629700.0,
          "variance" : 2.431975193333334E9,
          "n" : 4,
          "max" : 697699.0,
          "min" : 581803.0,
          "sum" : 2518800.0,
          "standardDeviation" : 49315.060512315446
        }, {
          "mean" : 584220.8,
          "variance" : 3.8102957296999974E9,
          "n" : 5,
          "max" : 632699.0,
          "min" : 477500.0,
          "sum" : 2921104.0,
          "standardDeviation" : 61727.592936222594
        } ],
        "19" : [ {
          "mean" : 6626931.285714285,
          "variance" : 2.0774568477517253E14,
          "n" : 2,
          "max" : 3.9302972E7,
          "min" : 739542.0,
          "sum" : 1.325386257142857E7,
          "standardDeviation" : 1.4413385611131499E7
        }, {
          "mean" : 770566.3333333334,
          "variance" : 5.507774111233334E10,
          "n" : 3,
          "max" : 966840.0,
          "min" : 510611.0,
          "sum" : 2311699.0,
          "standardDeviation" : 234686.47407196977
        }, {
          "mean" : 599767.6,
          "variance" : 4.1501958963000007E9,
          "n" : 5,
          "max" : 683830.0,
          "min" : 538839.0,
          "sum" : 2998838.0,
          "standardDeviation" : 64422.01406584554
        }, {
          "mean" : 696054.25,
          "variance" : 1.5156064766916668E10,
          "n" : 4,
          "max" : 871618.0,
          "min" : 593032.0,
          "sum" : 2784217.0,
          "standardDeviation" : 123109.97021734944
        }, {
          "mean" : 526700.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 526700.0,
          "min" : 526700.0,
          "sum" : 526700.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1274914.5,
          "variance" : 2.8998728889469995E11,
          "n" : 1,
          "max" : 2281345.0,
          "min" : 842657.0,
          "sum" : 1274914.5,
          "standardDeviation" : 538504.6786191369
        }, {
          "mean" : 1.1472661399999999E7,
          "variance" : 5.731660180903888E14,
          "n" : 5,
          "max" : 5.4299252E7,
          "min" : 713958.0,
          "sum" : 5.736330699999999E7,
          "standardDeviation" : 2.3940885908637315E7
        }, {
          "mean" : 575980.5,
          "variance" : 7.270674019666666E9,
          "n" : 4,
          "max" : 688109.0,
          "min" : 481407.0,
          "sum" : 2303922.0,
          "standardDeviation" : 85268.24742931372
        }, {
          "mean" : 529284.75,
          "variance" : 4.319370444249999E9,
          "n" : 4,
          "max" : 608570.0,
          "min" : 458819.0,
          "sum" : 2117139.0,
          "standardDeviation" : 65721.91753327043
        }, {
          "mean" : 502127.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 502127.0,
          "min" : 502127.0,
          "sum" : 502127.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1422959.8333333333,
          "variance" : 2.6762965056976666E11,
          "n" : 1,
          "max" : 2155800.0,
          "min" : 835738.0,
          "sum" : 1422959.8333333333,
          "standardDeviation" : 517329.3443926863
        }, {
          "mean" : 1.1420395E7,
          "variance" : 5.818268995434695E14,
          "n" : 5,
          "max" : 5.4569463E7,
          "min" : 605816.0,
          "sum" : 5.7101975E7,
          "standardDeviation" : 2.4121088274442956E7
        }, {
          "mean" : 976842.25,
          "variance" : 5.2632646795024994E11,
          "n" : 4,
          "max" : 2064221.0,
          "min" : 581767.0,
          "sum" : 3907369.0,
          "standardDeviation" : 725483.609704761
        }, {
          "mean" : 520022.5,
          "variance" : 9.734539936666664E8,
          "n" : 4,
          "max" : 555247.0,
          "min" : 479905.0,
          "sum" : 2080090.0,
          "standardDeviation" : 31200.22425667268
        }, {
          "mean" : 517303.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 517303.0,
          "min" : 517303.0,
          "sum" : 517303.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 7226291.0,
          "variance" : 1.949283125806836E14,
          "n" : 1,
          "max" : 3.5679903E7,
          "min" : 842479.0,
          "sum" : 7226291.0,
          "standardDeviation" : 1.3961672986454152E7
        }, {
          "mean" : 840826.0,
          "variance" : 5.814665270000002E8,
          "n" : 5,
          "max" : 861054.0,
          "min" : 800977.0,
          "sum" : 4204130.0,
          "standardDeviation" : 24113.617045146922
        }, {
          "mean" : 643355.25,
          "variance" : 1.3477432632249996E10,
          "n" : 4,
          "max" : 794397.0,
          "min" : 536431.0,
          "sum" : 2573421.0,
          "standardDeviation" : 116092.34527844632
        }, {
          "mean" : 644368.2,
          "variance" : 1.0044842866199997E10,
          "n" : 5,
          "max" : 794486.0,
          "min" : 548424.0,
          "sum" : 3221841.0,
          "standardDeviation" : 100223.96353268014
        } ],
        "23" : [ {
          "mean" : 1333088.5,
          "variance" : 4.2123068215350006E11,
          "n" : 1,
          "max" : 2553429.0,
          "min" : 886227.0,
          "sum" : 1333088.5,
          "standardDeviation" : 649022.8672038452
        }, {
          "mean" : 1.15177642E7,
          "variance" : 5.894714539911092E14,
          "n" : 5,
          "max" : 5.4948841E7,
          "min" : 478429.0,
          "sum" : 5.7588821E7,
          "standardDeviation" : 2.427903321780151E7
        }, {
          "mean" : 475863.75,
          "variance" : 2.73526759025E9,
          "n" : 4,
          "max" : 540504.0,
          "min" : 414931.0,
          "sum" : 1903455.0,
          "standardDeviation" : 52299.78575720937
        }, {
          "mean" : 432194.0,
          "variance" : 2.0555016866666666E8,
          "n" : 4,
          "max" : 444991.0,
          "min" : 419256.0,
          "sum" : 1728776.0,
          "standardDeviation" : 14337.020913239496
        }, {
          "mean" : 519173.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 519173.0,
          "min" : 519173.0,
          "sum" : 519173.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1238307.1666666667,
          "variance" : 1.1781916649776668E11,
          "n" : 1,
          "max" : 1852497.0,
          "min" : 948629.0,
          "sum" : 1238307.1666666667,
          "standardDeviation" : 343247.96648744575
        }, {
          "mean" : 6919701.4,
          "variance" : 1.9992293777220134E14,
          "n" : 5,
          "max" : 3.2212705E7,
          "min" : 490083.0,
          "sum" : 3.4598507E7,
          "standardDeviation" : 1.4139410800036943E7
        }, {
          "mean" : 740492.75,
          "variance" : 5.144534118250001E9,
          "n" : 4,
          "max" : 822724.0,
          "min" : 665806.0,
          "sum" : 2961971.0,
          "standardDeviation" : 71725.40775938469
        }, {
          "mean" : 519927.6,
          "variance" : 2.0428073415300007E10,
          "n" : 5,
          "max" : 744113.0,
          "min" : 412599.0,
          "sum" : 2599638.0,
          "standardDeviation" : 142926.81139415377
        } ],
        "25" : [ {
          "mean" : 1138269.5,
          "variance" : 1.911579237667E11,
          "n" : 1,
          "max" : 1957996.0,
          "min" : 751067.0,
          "sum" : 1138269.5,
          "standardDeviation" : 437216.1064813372
        }, {
          "mean" : 598408.4,
          "variance" : 2.53674079943E10,
          "n" : 5,
          "max" : 857703.0,
          "min" : 460716.0,
          "sum" : 2992042.0,
          "standardDeviation" : 159271.49146755674
        }, {
          "mean" : 550516.25,
          "variance" : 2.8672760669166665E9,
          "n" : 4,
          "max" : 618204.0,
          "min" : 492578.0,
          "sum" : 2202065.0,
          "standardDeviation" : 53546.951985306005
        }, {
          "mean" : 589829.6,
          "variance" : 1.1879280556800001E10,
          "n" : 5,
          "max" : 720907.0,
          "min" : 478105.0,
          "sum" : 2949148.0,
          "standardDeviation" : 108992.11236048231
        } ],
        "26" : [ {
          "mean" : 1053045.2857142857,
          "variance" : 5.7422193219904755E10,
          "n" : 2,
          "max" : 1362408.0,
          "min" : 777890.0,
          "sum" : 2106090.5714285714,
          "standardDeviation" : 239629.28289319057
        }, {
          "mean" : 690078.25,
          "variance" : 1.5068424458249998E10,
          "n" : 4,
          "max" : 853075.0,
          "min" : 559063.0,
          "sum" : 2760313.0,
          "standardDeviation" : 122753.51098135645
        }, {
          "mean" : 475585.5,
          "variance" : 1.3692859496666667E9,
          "n" : 4,
          "max" : 516214.0,
          "min" : 439275.0,
          "sum" : 1902342.0,
          "standardDeviation" : 37003.86398292301
        }, {
          "mean" : 506216.0,
          "variance" : 5.419795176500001E9,
          "n" : 5,
          "max" : 590584.0,
          "min" : 426196.0,
          "sum" : 2531080.0,
          "standardDeviation" : 73619.25819036756
        } ],
        "27" : [ {
          "mean" : 751692.6666666667,
          "variance" : 4.993710741626668E10,
          "n" : 6,
          "max" : 1037010.0,
          "min" : 523247.0,
          "sum" : 4510156.0,
          "standardDeviation" : 223466.12140605715
        }, {
          "mean" : 580583.75,
          "variance" : 3.564066758916666E9,
          "n" : 4,
          "max" : 641330.0,
          "min" : 498788.0,
          "sum" : 2322335.0,
          "standardDeviation" : 59699.80535074353
        }, {
          "mean" : 462201.75,
          "variance" : 3.0468424175833335E9,
          "n" : 4,
          "max" : 530326.0,
          "min" : 401851.0,
          "sum" : 1848807.0,
          "standardDeviation" : 55198.21027518314
        }, {
          "mean" : 429523.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 429523.0,
          "min" : 429523.0,
          "sum" : 429523.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1240702.857142857,
          "variance" : 4.8729958046114294E11,
          "n" : 2,
          "max" : 2702747.0,
          "min" : 779986.0,
          "sum" : 2481405.714285714,
          "standardDeviation" : 698068.4640213615
        }, {
          "mean" : 677566.25,
          "variance" : 9.205157409583334E9,
          "n" : 4,
          "max" : 780652.0,
          "min" : 550596.0,
          "sum" : 2710265.0,
          "standardDeviation" : 95943.51155541126
        }, {
          "mean" : 536592.6,
          "variance" : 1.2858192324300001E10,
          "n" : 5,
          "max" : 691034.0,
          "min" : 422123.0,
          "sum" : 2682963.0,
          "standardDeviation" : 113393.96952351567
        }, {
          "mean" : 493815.0,
          "variance" : 7.459345388666667E9,
          "n" : 4,
          "max" : 590459.0,
          "min" : 405577.0,
          "sum" : 1975260.0,
          "standardDeviation" : 86367.50192443143
        } ],
        "29" : [ {
          "mean" : 8374417.571428572,
          "variance" : 2.697498779730456E14,
          "n" : 2,
          "max" : 4.5531917E7,
          "min" : 1112670.0,
          "sum" : 1.6748835142857144E7,
          "standardDeviation" : 1.6424063990774196E7
        }, {
          "mean" : 635829.75,
          "variance" : 2.454760932916667E9,
          "n" : 4,
          "max" : 696893.0,
          "min" : 589855.0,
          "sum" : 2543319.0,
          "standardDeviation" : 49545.54402685136
        }, {
          "mean" : 512462.25,
          "variance" : 2.8941283602499995E9,
          "n" : 4,
          "max" : 556430.0,
          "min" : 435060.0,
          "sum" : 2049849.0,
          "standardDeviation" : 53797.10364183187
        }, {
          "mean" : 486602.0,
          "variance" : 1.8514986413333335E9,
          "n" : 4,
          "max" : 525831.0,
          "min" : 434977.0,
          "sum" : 1946408.0,
          "standardDeviation" : 43029.0441601174
        }, {
          "mean" : 498829.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 498829.0,
          "min" : 498829.0,
          "sum" : 498829.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 8.306016945E8,
          "variance" : 3.7277990205490125E15,
          "n" : 2,
          "max" : 8.73774597E8,
          "min" : 7.87428792E8,
          "sum" : 1.661203389E9,
          "standardDeviation" : 6.10557042425113E7
        }, {
          "mean" : 8.49928588E8,
          "variance" : 1.108973939434418E15,
          "n" : 2,
          "max" : 8.73476135E8,
          "min" : 8.26381041E8,
          "sum" : 1.699857176E9,
          "standardDeviation" : 3.3301260328017887E7
        }, {
          "mean" : 9.284247355E8,
          "variance" : 3.4046638395601616E16,
          "n" : 2,
          "max" : 1.058898178E9,
          "min" : 7.97951293E8,
          "sum" : 1.856849471E9,
          "standardDeviation" : 1.845173119130062E8
        }, {
          "mean" : 7.84859396E8,
          "variance" : 1.2560387762730362E15,
          "n" : 3,
          "max" : 8.2187988E8,
          "min" : 7.51244466E8,
          "sum" : 2.354578188E9,
          "standardDeviation" : 3.544063735703742E7
        }, {
          "mean" : 7.617812925E8,
          "variance" : 9.516369290408644E14,
          "n" : 2,
          "max" : 7.83594556E8,
          "min" : 7.39968029E8,
          "sum" : 1.523562585E9,
          "standardDeviation" : 3.0848613081318006E7
        }, {
          "mean" : 7.4001502E8,
          "variance" : 4.267445206280917E15,
          "n" : 3,
          "max" : 8.12681123E8,
          "min" : 6.86155608E8,
          "sum" : 2.22004506E9,
          "standardDeviation" : 6.532568565488553E7
        }, {
          "mean" : 7.51617152E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.51617152E8,
          "min" : 7.51617152E8,
          "sum" : 7.51617152E8,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 9.099474355E8,
          "variance" : 8.377858128620065E15,
          "n" : 2,
          "max" : 9.74669372E8,
          "min" : 8.45225499E8,
          "sum" : 1.819894871E9,
          "standardDeviation" : 9.153064038135025E7
        }, {
          "mean" : 8.990159565E8,
          "variance" : 6.494335986650513E15,
          "n" : 2,
          "max" : 9.55999884E8,
          "min" : 8.42032029E8,
          "sum" : 1.798031913E9,
          "standardDeviation" : 8.058744310778518E7
        }, {
          "mean" : 8.46446783E8,
          "variance" : 1.55545606388642E14,
          "n" : 2,
          "max" : 8.55265672E8,
          "min" : 8.37627894E8,
          "sum" : 1.692893566E9,
          "standardDeviation" : 1.2471792428862901E7
        }, {
          "mean" : 7.506654863333334E8,
          "variance" : 1.2654282055220765E15,
          "n" : 3,
          "max" : 7.91732444E8,
          "min" : 7.29385719E8,
          "sum" : 2.251996459E9,
          "standardDeviation" : 3.557285770811893E7
        }, {
          "mean" : 7.55852029E8,
          "variance" : 2.477104774366658E15,
          "n" : 2,
          "max" : 7.91045102E8,
          "min" : 7.20658956E8,
          "sum" : 1.511704058E9,
          "standardDeviation" : 4.977052113818639E7
        }, {
          "mean" : 6.888468116666666E8,
          "variance" : 8.070253252502459E15,
          "n" : 3,
          "max" : 7.60347975E8,
          "min" : 5.88012123E8,
          "sum" : 2.066540435E9,
          "standardDeviation" : 8.983458828592949E7
        }, {
          "mean" : 7.15129397E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.15129397E8,
          "min" : 7.15129397E8,
          "sum" : 7.15129397E8,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 8.900965875E8,
          "variance" : 4.52084095582104E15,
          "n" : 2,
          "max" : 9.37640467E8,
          "min" : 8.42552708E8,
          "sum" : 1.780193175E9,
          "standardDeviation" : 6.723719919673216E7
        }, {
          "mean" : 9.245746715E8,
          "variance" : 3.26272916106774E15,
          "n" : 2,
          "max" : 9.64964826E8,
          "min" : 8.84184517E8,
          "sum" : 1.849149343E9,
          "standardDeviation" : 5.712030428024469E7
        }, {
          "mean" : 8.62801673E8,
          "variance" : 1.0858176224127432E16,
          "n" : 2,
          "max" : 9.36484019E8,
          "min" : 7.89119327E8,
          "sum" : 1.725603346E9,
          "standardDeviation" : 1.0420257302066697E8
        }, {
          "mean" : 7.80633054E8,
          "variance" : 2.1083936317105242E15,
          "n" : 3,
          "max" : 8.20703922E8,
          "min" : 7.30528736E8,
          "sum" : 2.341899162E9,
          "standardDeviation" : 4.5917247649554566E7
        }, {
          "mean" : 7.456393E8,
          "variance" : 1.5546684604467203E14,
          "n" : 2,
          "max" : 7.54455956E8,
          "min" : 7.36822644E8,
          "sum" : 1.4912786E9,
          "standardDeviation" : 1.2468634489978123E7
        }, {
          "mean" : 6.848896385E8,
          "variance" : 6.1363557585245E12,
          "n" : 2,
          "max" : 6.8664126E8,
          "min" : 6.83138017E8,
          "sum" : 1.369779277E9,
          "standardDeviation" : 2477166.8814443043
        }, {
          "mean" : 7.917712185E8,
          "variance" : 5.86433442622122E15,
          "n" : 2,
          "max" : 8.45920708E8,
          "min" : 7.37621729E8,
          "sum" : 1.583542437E9,
          "standardDeviation" : 7.65789424464795E7
        } ],
        "3" : [ {
          "mean" : 8.781754325E8,
          "variance" : 1.50692978793845E13,
          "n" : 2,
          "max" : 8.80920364E8,
          "min" : 8.75430501E8,
          "sum" : 1.756350865E9,
          "standardDeviation" : 3881919.3550851233
        }, {
          "mean" : 9.07445861E8,
          "variance" : 2.735827347180978E15,
          "n" : 2,
          "max" : 9.44431178E8,
          "min" : 8.70460544E8,
          "sum" : 1.814891722E9,
          "standardDeviation" : 5.230513691006819E7
        }, {
          "mean" : 8.801548465E8,
          "variance" : 5.834565234459405E14,
          "n" : 2,
          "max" : 8.97234901E8,
          "min" : 8.63074792E8,
          "sum" : 1.760309693E9,
          "standardDeviation" : 2.4154844719971612E7
        }, {
          "mean" : 7.74084491E8,
          "variance" : 5.96058709802131E14,
          "n" : 3,
          "max" : 7.99575565E8,
          "min" : 7.50912422E8,
          "sum" : 2.322253473E9,
          "standardDeviation" : 2.441431362545609E7
        }, {
          "mean" : 7.696628165E8,
          "variance" : 4.0145243386958405E15,
          "n" : 2,
          "max" : 8.14465296E8,
          "min" : 7.24860337E8,
          "sum" : 1.539325633E9,
          "standardDeviation" : 6.3360274136842564E7
        }, {
          "mean" : 7.20721506E8,
          "variance" : 2.4882150017424996E13,
          "n" : 3,
          "max" : 7.26324186E8,
          "min" : 7.16762741E8,
          "sum" : 2.162164518E9,
          "standardDeviation" : 4988201.080291872
        }, {
          "mean" : 7.35038307E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.35038307E8,
          "min" : 7.35038307E8,
          "sum" : 7.35038307E8,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 8.7473173E8,
          "variance" : 1.1550240619807998E15,
          "n" : 2,
          "max" : 8.9876321E8,
          "min" : 8.5070025E8,
          "sum" : 1.74946346E9,
          "standardDeviation" : 3.398564493989778E7
        }, {
          "mean" : 8.42180826E8,
          "variance" : 2.31962106605E12,
          "n" : 2,
          "max" : 8.43257771E8,
          "min" : 8.41103881E8,
          "sum" : 1.684361652E9,
          "standardDeviation" : 1523030.224929893
        }, {
          "mean" : 8.979022605E8,
          "variance" : 1.1681389905778318E16,
          "n" : 2,
          "max" : 9.743267E8,
          "min" : 8.21477821E8,
          "sum" : 1.795804521E9,
          "standardDeviation" : 1.0808047883766207E8
        }, {
          "mean" : 7.82513895E8,
          "variance" : 1.76465718808867E14,
          "n" : 3,
          "max" : 7.90508361E8,
          "min" : 7.67179462E8,
          "sum" : 2.347541685E9,
          "standardDeviation" : 1.3284040003284656E7
        }, {
          "mean" : 7.36169754E8,
          "variance" : 1.3394045745831198E14,
          "n" : 2,
          "max" : 7.44353288E8,
          "min" : 7.2798622E8,
          "sum" : 1.472339508E9,
          "standardDeviation" : 1.1573264770941343E7
        }, {
          "mean" : 7.34848219E8,
          "variance" : 8.110812707426698E13,
          "n" : 3,
          "max" : 7.45007278E8,
          "min" : 7.27844302E8,
          "sum" : 2.204544657E9,
          "standardDeviation" : 9006005.056309206
        }, {
          "mean" : 7.45042323E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.45042323E8,
          "min" : 7.45042323E8,
          "sum" : 7.45042323E8,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 8.56240599E8,
          "variance" : 7.03773824610402E14,
          "n" : 2,
          "max" : 8.74999248E8,
          "min" : 8.3748195E8,
          "sum" : 1.712481198E9,
          "standardDeviation" : 2.6528735827596497E7
        }, {
          "mean" : 9.17760703E8,
          "variance" : 4.685437702985763E15,
          "n" : 2,
          "max" : 9.66162344E8,
          "min" : 8.69359062E8,
          "sum" : 1.835521406E9,
          "standardDeviation" : 6.845025714331366E7
        }, {
          "mean" : 9.146079975E8,
          "variance" : 6.573838285378125E14,
          "n" : 2,
          "max" : 9.3273786E8,
          "min" : 8.96478135E8,
          "sum" : 1.829215995E9,
          "standardDeviation" : 2.5639497431459386E7
        }, {
          "mean" : 7.52491357E8,
          "variance" : 2.594668597692847E15,
          "n" : 3,
          "max" : 8.112323E8,
          "min" : 7.205142E8,
          "sum" : 2.257474071E9,
          "standardDeviation" : 5.093788960776494E7
        }, {
          "mean" : 7.860830945E8,
          "variance" : 3.2302076425920456E14,
          "n" : 2,
          "max" : 7.98791768E8,
          "min" : 7.73374421E8,
          "sum" : 1.572166189E9,
          "standardDeviation" : 1.797277842347155E7
        }, {
          "mean" : 6.918395943333334E8,
          "variance" : 9.396050025350941E14,
          "n" : 3,
          "max" : 7.27167666E8,
          "min" : 6.72291277E8,
          "sum" : 2.075518783E9,
          "standardDeviation" : 3.065297705827436E7
        }, {
          "mean" : 7.39106456E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.39106456E8,
          "min" : 7.39106456E8,
          "sum" : 7.39106456E8,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 9.219102745E8,
          "variance" : 5.2423268570011244E14,
          "n" : 2,
          "max" : 9.38100282E8,
          "min" : 9.05720267E8,
          "sum" : 1.843820549E9,
          "standardDeviation" : 2.2896128181422126E7
        }, {
          "mean" : 9.265987115E8,
          "variance" : 1.9118335136706248E15,
          "n" : 2,
          "max" : 9.57516615E8,
          "min" : 8.95680808E8,
          "sum" : 1.853197423E9,
          "standardDeviation" : 4.372451844984259E7
        }, {
          "mean" : 8.964584805E8,
          "variance" : 5.651211019278126E14,
          "n" : 2,
          "max" : 9.13268018E8,
          "min" : 8.79648943E8,
          "sum" : 1.792916961E9,
          "standardDeviation" : 2.3772275909719132E7
        }, {
          "mean" : 8.474316295E8,
          "variance" : 1.2035461812362448E14,
          "n" : 2,
          "max" : 8.55189033E8,
          "min" : 8.39674226E8,
          "sum" : 1.694863259E9,
          "standardDeviation" : 1.0970625238500515E7
        }, {
          "mean" : 7.347031205E8,
          "variance" : 1.7962669974690005E15,
          "n" : 2,
          "max" : 7.64671996E8,
          "min" : 7.04734245E8,
          "sum" : 1.469406241E9,
          "standardDeviation" : 4.238239018117077E7
        }, {
          "mean" : 8.078938723333334E8,
          "variance" : 9.064782065266528E15,
          "n" : 3,
          "max" : 9.15856119E8,
          "min" : 7.35943413E8,
          "sum" : 2.423681617E9,
          "standardDeviation" : 9.520914906282131E7
        }, {
          "mean" : 7.705352435E8,
          "variance" : 1.6361905671864498E13,
          "n" : 2,
          "max" : 7.7339548E8,
          "min" : 7.67675007E8,
          "sum" : 1.541070487E9,
          "standardDeviation" : 4044985.249894553
        } ],
        "7" : [ {
          "mean" : 8.86468968E8,
          "variance" : 4.3770386477204994E14,
          "n" : 2,
          "max" : 9.01262613E8,
          "min" : 8.71675323E8,
          "sum" : 1.772937936E9,
          "standardDeviation" : 2.0921373395932924E7
        }, {
          "mean" : 9.280388135E8,
          "variance" : 3.93243213588245E13,
          "n" : 2,
          "max" : 9.32473017E8,
          "min" : 9.2360461E8,
          "sum" : 1.856077627E9,
          "standardDeviation" : 6270910.728022247
        }, {
          "mean" : 9.117307425E8,
          "variance" : 1.4008370703453245E15,
          "n" : 2,
          "max" : 9.38196164E8,
          "min" : 8.85265321E8,
          "sum" : 1.823461485E9,
          "standardDeviation" : 3.74277580192205E7
        }, {
          "mean" : 7.924631355E8,
          "variance" : 1.3172806114562642E15,
          "n" : 2,
          "max" : 8.18127124E8,
          "min" : 7.66799147E8,
          "sum" : 1.584926271E9,
          "standardDeviation" : 3.629436060128714E7
        }, {
          "mean" : 7.370777136666666E8,
          "variance" : 3.2973127228267325E15,
          "n" : 3,
          "max" : 7.97612002E8,
          "min" : 6.8337955E8,
          "sum" : 2.211233141E9,
          "standardDeviation" : 5.74222319561573E7
        }, {
          "mean" : 7.31872288E8,
          "variance" : 4.2519506577800006E11,
          "n" : 2,
          "max" : 7.32333371E8,
          "min" : 7.31411205E8,
          "sum" : 1.463744576E9,
          "standardDeviation" : 652069.8319796738
        }, {
          "mean" : 7.75571385E8,
          "variance" : 5.95855727169138E14,
          "n" : 2,
          "max" : 7.92831972E8,
          "min" : 7.58310798E8,
          "sum" : 1.55114277E9,
          "standardDeviation" : 2.4410156229920734E7
        } ],
        "8" : [ {
          "mean" : 8.915085005E8,
          "variance" : 2.1811876384499996E10,
          "n" : 2,
          "max" : 8.91612932E8,
          "min" : 8.91404069E8,
          "sum" : 1.783017001E9,
          "standardDeviation" : 147688.44363896587
        }, {
          "mean" : 8.704278655E8,
          "variance" : 4.4221039492968456E14,
          "n" : 2,
          "max" : 8.85297472E8,
          "min" : 8.55558259E8,
          "sum" : 1.740855731E9,
          "standardDeviation" : 2.102879917945113E7
        }, {
          "mean" : 8.878459145E8,
          "variance" : 1.8621294214962656E16,
          "n" : 2,
          "max" : 9.84337609E8,
          "min" : 7.9135422E8,
          "sum" : 1.775691829E9,
          "standardDeviation" : 1.3645986301826137E8
        }, {
          "mean" : 7.90950631E8,
          "variance" : 1.9980763870738032E15,
          "n" : 3,
          "max" : 8.16794625E8,
          "min" : 7.3933571E8,
          "sum" : 2.372851893E9,
          "standardDeviation" : 4.4699847729872674E7
        }, {
          "mean" : 7.270900265E8,
          "variance" : 1.3396086796961248E14,
          "n" : 2,
          "max" : 7.35274184E8,
          "min" : 7.18905869E8,
          "sum" : 1.454180053E9,
          "standardDeviation" : 1.1574146533097483E7
        }, {
          "mean" : 7.518346383333334E8,
          "variance" : 1.3215353970002402E15,
          "n" : 3,
          "max" : 7.93244463E8,
          "min" : 7.25175298E8,
          "sum" : 2.255503915E9,
          "standardDeviation" : 3.635292831396448E7
        }, {
          "mean" : 7.16211797E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.16211797E8,
          "min" : 7.16211797E8,
          "sum" : 7.16211797E8,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 8.83183392E8,
          "variance" : 6.73500491543072E14,
          "n" : 2,
          "max" : 9.01534148E8,
          "min" : 8.64832636E8,
          "sum" : 1.766366784E9,
          "standardDeviation" : 2.595188801499945E7
        }, {
          "mean" : 9.009363495E8,
          "variance" : 3.1937106933045125E15,
          "n" : 2,
          "max" : 9.40897022E8,
          "min" : 8.60975677E8,
          "sum" : 1.801872699E9,
          "standardDeviation" : 5.6512925011049576E7
        }, {
          "mean" : 9.40128379E8,
          "variance" : 3.20180571754082E14,
          "n" : 2,
          "max" : 9.52781058E8,
          "min" : 9.274757E8,
          "sum" : 1.880256758E9,
          "standardDeviation" : 1.789359024215325E7
        }, {
          "mean" : 7.910420095E8,
          "variance" : 2.370036426593485E15,
          "n" : 2,
          "max" : 8.25466103E8,
          "min" : 7.56617916E8,
          "sum" : 1.582084019E9,
          "standardDeviation" : 4.868301990009951E7
        }, {
          "mean" : 7.44237611E8,
          "variance" : 3.789272403973189E15,
          "n" : 3,
          "max" : 8.05409679E8,
          "min" : 6.82302638E8,
          "sum" : 2.232712833E9,
          "standardDeviation" : 6.155706623916696E7
        }, {
          "mean" : 6.81603786E8,
          "variance" : 4.085899202E11,
          "n" : 2,
          "max" : 6.82055776E8,
          "min" : 6.81151796E8,
          "sum" : 1.363207572E9,
          "standardDeviation" : 639210.3880570153
        }, {
          "mean" : 7.51828227E8,
          "variance" : 2.9753556952320006E14,
          "n" : 2,
          "max" : 7.64025267E8,
          "min" : 7.39631187E8,
          "sum" : 1.503656454E9,
          "standardDeviation" : 1.7249219388807137E7
        } ],
        "10" : [ {
          "mean" : 8.6190653E8,
          "variance" : 4.2915622559045E14,
          "n" : 2,
          "max" : 8.76555015E8,
          "min" : 8.47258045E8,
          "sum" : 1.72381306E9,
          "standardDeviation" : 2.0716086155218847E7
        }, {
          "mean" : 8.497992535E8,
          "variance" : 3.6835575315245E12,
          "n" : 2,
          "max" : 8.51156375E8,
          "min" : 8.48442132E8,
          "sum" : 1.699598507E9,
          "standardDeviation" : 1919259.6310881183
        }, {
          "mean" : 8.940445805E8,
          "variance" : 8.677445139792005E14,
          "n" : 2,
          "max" : 9.14874181E8,
          "min" : 8.7321498E8,
          "sum" : 1.788089161E9,
          "standardDeviation" : 2.9457503525913402E7
        }, {
          "mean" : 7.433447826666666E8,
          "variance" : 1.4942260448070622E15,
          "n" : 3,
          "max" : 7.70802241E8,
          "min" : 6.99139964E8,
          "sum" : 2.230034348E9,
          "standardDeviation" : 3.865522014950972E7
        }, {
          "mean" : 7.292618765E8,
          "variance" : 1.5367064341284502E13,
          "n" : 2,
          "max" : 7.32033795E8,
          "min" : 7.26489958E8,
          "sum" : 1.458523753E9,
          "standardDeviation" : 3920084.736492886
        }, {
          "mean" : 7.603284886666666E8,
          "variance" : 1.4817639881690048E15,
          "n" : 3,
          "max" : 8.03534252E8,
          "min" : 7.29686221E8,
          "sum" : 2.280985466E9,
          "standardDeviation" : 3.849368764056004E7
        }, {
          "mean" : 7.66323859E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.66323859E8,
          "min" : 7.66323859E8,
          "sum" : 7.66323859E8,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 8.620067715E8,
          "variance" : 5.101122392741045E14,
          "n" : 2,
          "max" : 8.77977248E8,
          "min" : 8.46036295E8,
          "sum" : 1.724013543E9,
          "standardDeviation" : 2.25856644638608E7
        }, {
          "mean" : 8.95920209E8,
          "variance" : 9.710507198592E14,
          "n" : 2,
          "max" : 9.17954849E8,
          "min" : 8.73885569E8,
          "sum" : 1.791840418E9,
          "standardDeviation" : 3.1161686730008695E7
        }, {
          "mean" : 7.677745285E8,
          "variance" : 6.375942328561523E15,
          "n" : 2,
          "max" : 8.2423665E8,
          "min" : 7.11312407E8,
          "sum" : 1.535549057E9,
          "standardDeviation" : 7.984949798565751E7
        }, {
          "mean" : 7.857653043333334E8,
          "variance" : 5.02922320117813E15,
          "n" : 3,
          "max" : 8.54768888E8,
          "min" : 7.13078407E8,
          "sum" : 2.357295913E9,
          "standardDeviation" : 7.091701630199997E7
        }, {
          "mean" : 7.117657865E8,
          "variance" : 7.322970240501126E14,
          "n" : 2,
          "max" : 7.30900794E8,
          "min" : 6.92630779E8,
          "sum" : 1.423531573E9,
          "standardDeviation" : 2.7060987122610893E7
        }, {
          "mean" : 7.257033013333334E8,
          "variance" : 2.4434426201760605E15,
          "n" : 3,
          "max" : 7.57025245E8,
          "min" : 6.68718674E8,
          "sum" : 2.177109904E9,
          "standardDeviation" : 4.943119076227135E7
        }, {
          "mean" : 7.19955397E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.19955397E8,
          "min" : 7.19955397E8,
          "sum" : 7.19955397E8,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 8.66191756E8,
          "variance" : 4.1727766579999995E9,
          "n" : 2,
          "max" : 8.66237433E8,
          "min" : 8.66146079E8,
          "sum" : 1.732383512E9,
          "standardDeviation" : 64597.03288851586
        }, {
          "mean" : 8.8972864E8,
          "variance" : 2.6261274247216815E15,
          "n" : 2,
          "max" : 9.25964861E8,
          "min" : 8.53492419E8,
          "sum" : 1.77945728E9,
          "standardDeviation" : 5.124575518734875E7
        }, {
          "mean" : 7.889759205E8,
          "variance" : 2.7643733277218453E14,
          "n" : 2,
          "max" : 8.00732564E8,
          "min" : 7.77219277E8,
          "sum" : 1.577951841E9,
          "standardDeviation" : 1.6626404685685493E7
        }, {
          "mean" : 7.94882743E8,
          "variance" : 1.1943070712008202E14,
          "n" : 2,
          "max" : 8.02610314E8,
          "min" : 7.87155172E8,
          "sum" : 1.589765486E9,
          "standardDeviation" : 1.0928435712401021E7
        }, {
          "mean" : 7.51249498E8,
          "variance" : 6.742071840424574E15,
          "n" : 3,
          "max" : 8.43749622E8,
          "min" : 6.86975365E8,
          "sum" : 2.253748494E9,
          "standardDeviation" : 8.211012020710099E7
        }, {
          "mean" : 7.4318837E8,
          "variance" : 8.2334115632672E13,
          "n" : 2,
          "max" : 7.49604526E8,
          "min" : 7.36772214E8,
          "sum" : 1.48637674E9,
          "standardDeviation" : 9073814.833501508
        }, {
          "mean" : 7.73326908E8,
          "variance" : 1.636276833056322E15,
          "n" : 2,
          "max" : 8.01930027E8,
          "min" : 7.44723789E8,
          "sum" : 1.546653816E9,
          "standardDeviation" : 4.045091881597156E7
        } ],
        "13" : [ {
          "mean" : 8.6826435E8,
          "variance" : 3.4802306028729794E14,
          "n" : 2,
          "max" : 8.81455693E8,
          "min" : 8.55073007E8,
          "sum" : 1.7365287E9,
          "standardDeviation" : 1.865537617651539E7
        }, {
          "mean" : 9.24375094E8,
          "variance" : 2.6208060077222415E15,
          "n" : 2,
          "max" : 9.60574583E8,
          "min" : 8.88175605E8,
          "sum" : 1.848750188E9,
          "standardDeviation" : 5.1193808294775665E7
        }, {
          "mean" : 9.09735105E8,
          "variance" : 5.256553774317457E15,
          "n" : 2,
          "max" : 9.61001828E8,
          "min" : 8.58468382E8,
          "sum" : 1.81947021E9,
          "standardDeviation" : 7.250209496502468E7
        }, {
          "mean" : 8.22998813E8,
          "variance" : 3.8916061646851285E15,
          "n" : 2,
          "max" : 8.67110071E8,
          "min" : 7.78887555E8,
          "sum" : 1.645997626E9,
          "standardDeviation" : 6.238273931693869E7
        }, {
          "mean" : 7.632996046666666E8,
          "variance" : 4.6363499930835E15,
          "n" : 3,
          "max" : 8.36386885E8,
          "min" : 7.01655425E8,
          "sum" : 2.289898814E9,
          "standardDeviation" : 6.809074821944241E7
        }, {
          "mean" : 7.81185664E8,
          "variance" : 5.4262075627200806E14,
          "n" : 2,
          "max" : 7.97657166E8,
          "min" : 7.64714162E8,
          "sum" : 1.562371328E9,
          "standardDeviation" : 2.329422152105556E7
        }, {
          "mean" : 7.637328845E8,
          "variance" : 5.612759628601799E15,
          "n" : 2,
          "max" : 8.1670816E8,
          "min" : 7.10757609E8,
          "sum" : 1.527465769E9,
          "standardDeviation" : 7.491835308255114E7
        } ],
        "14" : [ {
          "mean" : 8.796001155E8,
          "variance" : 2.047955875064405E14,
          "n" : 2,
          "max" : 8.89719295E8,
          "min" : 8.69480936E8,
          "sum" : 1.759200231E9,
          "standardDeviation" : 1.4310680888987795E7
        }, {
          "mean" : 9.173052405E8,
          "variance" : 1.4151209044001442E15,
          "n" : 2,
          "max" : 9.43905249E8,
          "min" : 8.90705232E8,
          "sum" : 1.834610481E9,
          "standardDeviation" : 3.761809277993961E7
        }, {
          "mean" : 8.734308725E8,
          "variance" : 7.292279799451252E13,
          "n" : 2,
          "max" : 8.794692E8,
          "min" : 8.67392545E8,
          "sum" : 1.746861745E9,
          "standardDeviation" : 8539484.644550426
        }, {
          "mean" : 7.876506256666666E8,
          "variance" : 4.880084449561774E15,
          "n" : 3,
          "max" : 8.40597135E8,
          "min" : 7.08474574E8,
          "sum" : 2.362951877E9,
          "standardDeviation" : 6.9857601229657E7
        }, {
          "mean" : 7.075795975E8,
          "variance" : 1.5939438851363445E15,
          "n" : 2,
          "max" : 7.35810289E8,
          "min" : 6.79348906E8,
          "sum" : 1.415159195E9,
          "standardDeviation" : 3.9924226794470854E7
        }, {
          "mean" : 7.442629095E8,
          "variance" : 1.4372066693910302E16,
          "n" : 2,
          "max" : 8.29033384E8,
          "min" : 6.59492435E8,
          "sum" : 1.488525819E9,
          "standardDeviation" : 1.1988355472670262E8
        }, {
          "mean" : 6.95656397E8,
          "variance" : 9.74433598496288E14,
          "n" : 2,
          "max" : 7.17729385E8,
          "min" : 6.73583409E8,
          "sum" : 1.391312794E9,
          "standardDeviation" : 3.1215918991698578E7
        } ],
        "15" : [ {
          "mean" : 8.36996891E8,
          "variance" : 3.0437249804702725E15,
          "n" : 2,
          "max" : 8.76007947E8,
          "min" : 7.97985835E8,
          "sum" : 1.673993782E9,
          "standardDeviation" : 5.516996447769631E7
        }, {
          "mean" : 8.57312726E8,
          "variance" : 2.399131982018E12,
          "n" : 2,
          "max" : 8.58407973E8,
          "min" : 8.56217479E8,
          "sum" : 1.714625452E9,
          "standardDeviation" : 1548913.1615484452
        }, {
          "mean" : 8.79304955E8,
          "variance" : 6.434120298144499E14,
          "n" : 2,
          "max" : 8.9724112E8,
          "min" : 8.6136879E8,
          "sum" : 1.75860991E9,
          "standardDeviation" : 2.5365567799961623E7
        }, {
          "mean" : 7.56027361E8,
          "variance" : 9.59204213140519E14,
          "n" : 3,
          "max" : 7.91762559E8,
          "min" : 7.36955216E8,
          "sum" : 2.268082083E9,
          "standardDeviation" : 3.097102215201363E7
        }, {
          "mean" : 6.932643865E8,
          "variance" : 2.838014178307621E15,
          "n" : 2,
          "max" : 7.30934097E8,
          "min" : 6.55594676E8,
          "sum" : 1.386528773E9,
          "standardDeviation" : 5.327301547976819E7
        }, {
          "mean" : 7.447346056666666E8,
          "variance" : 2.5817575490746725E15,
          "n" : 3,
          "max" : 8.00892612E8,
          "min" : 7.01942809E8,
          "sum" : 2.234203817E9,
          "standardDeviation" : 5.081099830818789E7
        }, {
          "mean" : 7.17885333E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.17885333E8,
          "min" : 7.17885333E8,
          "sum" : 7.17885333E8,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 8.79054234E8,
          "variance" : 1.0825277086921679E15,
          "n" : 2,
          "max" : 9.02319312E8,
          "min" : 8.55789156E8,
          "sum" : 1.758108468E9,
          "standardDeviation" : 3.290178883726792E7
        }, {
          "mean" : 8.57495541E8,
          "variance" : 6.533403979208E14,
          "n" : 2,
          "max" : 8.75569561E8,
          "min" : 8.39421521E8,
          "sum" : 1.714991082E9,
          "standardDeviation" : 2.5560524210602567E7
        }, {
          "mean" : 9.168805695E8,
          "variance" : 6.90378759839916E15,
          "n" : 2,
          "max" : 9.75633389E8,
          "min" : 8.5812775E8,
          "sum" : 1.833761139E9,
          "standardDeviation" : 8.308903416455844E7
        }, {
          "mean" : 7.428807543333334E8,
          "variance" : 3.132335739069614E14,
          "n" : 3,
          "max" : 7.62664219E8,
          "min" : 7.28551177E8,
          "sum" : 2.228642263E9,
          "standardDeviation" : 1.7698405970791873E7
        }, {
          "mean" : 7.795875525E8,
          "variance" : 8.587900105139044E14,
          "n" : 2,
          "max" : 8.00309401E8,
          "min" : 7.58865704E8,
          "sum" : 1.559175105E9,
          "standardDeviation" : 2.9305119186140575E7
        }, {
          "mean" : 7.28741762E8,
          "variance" : 1.4501536463172968E15,
          "n" : 3,
          "max" : 7.65314909E8,
          "min" : 6.89313823E8,
          "sum" : 2.186225286E9,
          "standardDeviation" : 3.808088295086259E7
        }, {
          "mean" : 7.56156048E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.56156048E8,
          "min" : 7.56156048E8,
          "sum" : 7.56156048E8,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 8.835021495E8,
          "variance" : 5.4202158969286056E14,
          "n" : 2,
          "max" : 8.99964555E8,
          "min" : 8.67039744E8,
          "sum" : 1.767004299E9,
          "standardDeviation" : 2.3281357127385434E7
        }, {
          "mean" : 8.57313003E8,
          "variance" : 5.97344311187912E14,
          "n" : 2,
          "max" : 8.74595137E8,
          "min" : 8.40030869E8,
          "sum" : 1.714626006E9,
          "standardDeviation" : 2.4440628289549187E7
        }, {
          "mean" : 8.61246423E8,
          "variance" : 1.2481083616819998E16,
          "n" : 2,
          "max" : 9.40243523E8,
          "min" : 7.82249323E8,
          "sum" : 1.722492846E9,
          "standardDeviation" : 1.1171877020814362E8
        }, {
          "mean" : 7.738462436666666E8,
          "variance" : 4.2726408378850175E15,
          "n" : 3,
          "max" : 8.34666137E8,
          "min" : 7.04727819E8,
          "sum" : 2.321538731E9,
          "standardDeviation" : 6.536544069984549E7
        }, {
          "mean" : 7.61013267E8,
          "variance" : 3.258747826348032E15,
          "n" : 2,
          "max" : 8.01378771E8,
          "min" : 7.20647763E8,
          "sum" : 1.522026534E9,
          "standardDeviation" : 5.708544320882542E7
        }, {
          "mean" : 7.217506223333334E8,
          "variance" : 8.538114831709542E14,
          "n" : 3,
          "max" : 7.48259133E8,
          "min" : 6.90419154E8,
          "sum" : 2.165251867E9,
          "standardDeviation" : 2.9220052757840022E7
        }, {
          "mean" : 7.02734085E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.02734085E8,
          "min" : 7.02734085E8,
          "sum" : 7.02734085E8,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 8.559191005E8,
          "variance" : 6.428121858716064E15,
          "n" : 2,
          "max" : 9.12611789E8,
          "min" : 7.99226412E8,
          "sum" : 1.711838201E9,
          "standardDeviation" : 8.01755689640932E7
        }, {
          "mean" : 8.494746525E8,
          "variance" : 3.88194950337005E13,
          "n" : 2,
          "max" : 8.53880302E8,
          "min" : 8.45069003E8,
          "sum" : 1.698949305E9,
          "standardDeviation" : 6230529.273962245
        }, {
          "mean" : 9.133413625E8,
          "variance" : 2.9760303129304005E15,
          "n" : 2,
          "max" : 9.51916162E8,
          "min" : 8.74766563E8,
          "sum" : 1.826682725E9,
          "standardDeviation" : 5.4553004618722886E7
        }, {
          "mean" : 7.385353133333334E8,
          "variance" : 2.7892446794563438E14,
          "n" : 3,
          "max" : 7.57356859E8,
          "min" : 7.25486336E8,
          "sum" : 2.21560594E9,
          "standardDeviation" : 1.6701031942536796E7
        }, {
          "mean" : 7.592738525E8,
          "variance" : 3.4556260730957405E15,
          "n" : 2,
          "max" : 8.00840823E8,
          "min" : 7.17706882E8,
          "sum" : 1.518547705E9,
          "standardDeviation" : 5.878457342786235E7
        }, {
          "mean" : 7.300751526666666E8,
          "variance" : 5.511718229186712E15,
          "n" : 3,
          "max" : 7.93602468E8,
          "min" : 6.48462439E8,
          "sum" : 2.190225458E9,
          "standardDeviation" : 7.424094711940785E7
        }, {
          "mean" : 7.37790302E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.37790302E8,
          "min" : 7.37790302E8,
          "sum" : 7.37790302E8,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 8.8633024E8,
          "variance" : 6.410090379392001E12,
          "n" : 2,
          "max" : 8.88120504E8,
          "min" : 8.84539976E8,
          "sum" : 1.77266048E9,
          "standardDeviation" : 2531815.629028307
        }, {
          "mean" : 8.859838745E8,
          "variance" : 6.3081637454045E12,
          "n" : 2,
          "max" : 8.87759848E8,
          "min" : 8.84207901E8,
          "sum" : 1.771967749E9,
          "standardDeviation" : 2511605.810115214
        }, {
          "mean" : 9.148545635E8,
          "variance" : 1.716529340526125E14,
          "n" : 2,
          "max" : 9.24118821E8,
          "min" : 9.05590306E8,
          "sum" : 1.829709127E9,
          "standardDeviation" : 1.3101638601816664E7
        }, {
          "mean" : 7.71739322E8,
          "variance" : 9.360590466402E12,
          "n" : 2,
          "max" : 7.73902721E8,
          "min" : 7.69575923E8,
          "sum" : 1.543478644E9,
          "standardDeviation" : 3059508.2066243915
        }, {
          "mean" : 7.573972633333334E8,
          "variance" : 1.305918345113384E15,
          "n" : 3,
          "max" : 7.96775929E8,
          "min" : 7.25753481E8,
          "sum" : 2.27219179E9,
          "standardDeviation" : 3.613749223608888E7
        }, {
          "mean" : 7.614952195E8,
          "variance" : 3.2067864822554444E14,
          "n" : 2,
          "max" : 7.74157736E8,
          "min" : 7.48832703E8,
          "sum" : 1.522990439E9,
          "standardDeviation" : 1.7907502568073094E7
        }, {
          "mean" : 7.5315791E8,
          "variance" : 1.0625515246728E13,
          "n" : 2,
          "max" : 7.55462852E8,
          "min" : 7.50852968E8,
          "sum" : 1.50631582E9,
          "standardDeviation" : 3259680.2368833665
        } ],
        "20" : [ {
          "mean" : 8.5704031E8,
          "variance" : 1.0504961352E10,
          "n" : 2,
          "max" : 8.57112784E8,
          "min" : 8.56967836E8,
          "sum" : 1.71408062E9,
          "standardDeviation" : 102493.71371942769
        }, {
          "mean" : 8.728725975E8,
          "variance" : 1.51330915819205E13,
          "n" : 2,
          "max" : 8.75623333E8,
          "min" : 8.70121862E8,
          "sum" : 1.745745195E9,
          "standardDeviation" : 3890127.450601137
        }, {
          "mean" : 9.095121745E8,
          "variance" : 5.640456979226304E15,
          "n" : 2,
          "max" : 9.62617998E8,
          "min" : 8.56406351E8,
          "sum" : 1.819024349E9,
          "standardDeviation" : 7.510297583469182E7
        }, {
          "mean" : 7.6863747E8,
          "variance" : 6.860427746693079E14,
          "n" : 3,
          "max" : 7.88226258E8,
          "min" : 7.38886816E8,
          "sum" : 2.30591241E9,
          "standardDeviation" : 2.6192418266920447E7
        }, {
          "mean" : 7.474967925E8,
          "variance" : 2.720853116631125E14,
          "n" : 2,
          "max" : 7.59160525E8,
          "min" : 7.3583306E8,
          "sum" : 1.494993585E9,
          "standardDeviation" : 1.6495008689391846E7
        }, {
          "mean" : 7.16771037E8,
          "variance" : 8.13495228384241E15,
          "n" : 3,
          "max" : 8.20898832E8,
          "min" : 6.6297393E8,
          "sum" : 2.150313111E9,
          "standardDeviation" : 9.019397032974216E7
        }, {
          "mean" : 7.35426016E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.35426016E8,
          "min" : 7.35426016E8,
          "sum" : 7.35426016E8,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 8.81526166E8,
          "variance" : 6.688465129671199E13,
          "n" : 2,
          "max" : 8.873091E8,
          "min" : 8.75743232E8,
          "sum" : 1.763052332E9,
          "standardDeviation" : 8178303.693108492
        }, {
          "mean" : 9.13652116E8,
          "variance" : 2.2729587822482005E15,
          "n" : 2,
          "max" : 9.47363826E8,
          "min" : 8.79940406E8,
          "sum" : 1.827304232E9,
          "standardDeviation" : 4.7675557492788695E7
        }, {
          "mean" : 8.218360165E8,
          "variance" : 1.0040715380685612E16,
          "n" : 2,
          "max" : 8.92690499E8,
          "min" : 7.50981534E8,
          "sum" : 1.643672033E9,
          "standardDeviation" : 1.0020337010642712E8
        }, {
          "mean" : 8.342782025E8,
          "variance" : 3.42352812242874E15,
          "n" : 2,
          "max" : 8.75651673E8,
          "min" : 7.92904732E8,
          "sum" : 1.668556405E9,
          "standardDeviation" : 5.8510923103543155E7
        }, {
          "mean" : 7.72748294E8,
          "variance" : 8.94859651469739E14,
          "n" : 3,
          "max" : 8.03141799E8,
          "min" : 7.43337612E8,
          "sum" : 2.318244882E9,
          "standardDeviation" : 2.99142048443501E7
        }, {
          "mean" : 7.484190385E8,
          "variance" : 2.730258937265244E15,
          "n" : 2,
          "max" : 7.85366697E8,
          "min" : 7.1147138E8,
          "sum" : 1.496838077E9,
          "standardDeviation" : 5.225187974862956E7
        }, {
          "mean" : 7.54848242E8,
          "variance" : 3.5770252209122E13,
          "n" : 2,
          "max" : 7.59077323E8,
          "min" : 7.50619161E8,
          "sum" : 1.509696484E9,
          "standardDeviation" : 5980823.706574371
        } ],
        "22" : [ {
          "mean" : 8.67371857E8,
          "variance" : 1.62825051812642E14,
          "n" : 2,
          "max" : 8.76394746E8,
          "min" : 8.58348968E8,
          "sum" : 1.734743714E9,
          "standardDeviation" : 1.2760291995587014E7
        }, {
          "mean" : 8.948582945E8,
          "variance" : 1.8524326692180125E15,
          "n" : 2,
          "max" : 9.25292097E8,
          "min" : 8.64424492E8,
          "sum" : 1.789716589E9,
          "standardDeviation" : 4.303989625008421E7
        }, {
          "mean" : 8.735915605E8,
          "variance" : 5.772944774265244E14,
          "n" : 2,
          "max" : 8.90581182E8,
          "min" : 8.56601939E8,
          "sum" : 1.747183121E9,
          "standardDeviation" : 2.4026953144885525E7
        }, {
          "mean" : 7.704014476666666E8,
          "variance" : 3.1394162077185495E15,
          "n" : 3,
          "max" : 8.35008357E8,
          "min" : 7.35118621E8,
          "sum" : 2.311204343E9,
          "standardDeviation" : 5.603049355233764E7
        }, {
          "mean" : 7.82549891E8,
          "variance" : 1.82683737204872E14,
          "n" : 2,
          "max" : 7.92107185E8,
          "min" : 7.72992597E8,
          "sum" : 1.565099782E9,
          "standardDeviation" : 1.3516054794387007E7
        }, {
          "mean" : 7.176291976666666E8,
          "variance" : 1.491535643888404E15,
          "n" : 3,
          "max" : 7.5172411E8,
          "min" : 6.75688201E8,
          "sum" : 2.152887593E9,
          "standardDeviation" : 3.862040450187445E7
        }, {
          "mean" : 7.52145988E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.52145988E8,
          "min" : 7.52145988E8,
          "sum" : 7.52145988E8,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 8.62349016E8,
          "variance" : 6.914884233600649E15,
          "n" : 2,
          "max" : 9.21149034E8,
          "min" : 8.03548998E8,
          "sum" : 1.724698032E9,
          "standardDeviation" : 8.315578292338212E7
        }, {
          "mean" : 8.80272924E8,
          "variance" : 3.3449750887192194E14,
          "n" : 2,
          "max" : 8.93205393E8,
          "min" : 8.67340455E8,
          "sum" : 1.760545848E9,
          "standardDeviation" : 1.8289273054769617E7
        }, {
          "mean" : 9.534016595E8,
          "variance" : 1.420097973147924E16,
          "n" : 2,
          "max" : 1.037666064E9,
          "min" : 8.69137255E8,
          "sum" : 1.906803319E9,
          "standardDeviation" : 1.1916786366919246E8
        }, {
          "mean" : 7.66381411E8,
          "variance" : 5.540681878876974E15,
          "n" : 3,
          "max" : 8.48959846E8,
          "min" : 7.04445561E8,
          "sum" : 2.299144233E9,
          "standardDeviation" : 7.44357567226731E7
        }, {
          "mean" : 7.48353284E8,
          "variance" : 4.9522167109202E13,
          "n" : 2,
          "max" : 7.53329335E8,
          "min" : 7.43377233E8,
          "sum" : 1.496706568E9,
          "standardDeviation" : 7037198.811260202
        }, {
          "mean" : 7.89279567E8,
          "variance" : 2.6177543468137797E14,
          "n" : 2,
          "max" : 8.00720184E8,
          "min" : 7.7783895E8,
          "sum" : 1.578559134E9,
          "standardDeviation" : 1.617947572331619E7
        }, {
          "mean" : 7.08709636E8,
          "variance" : 3.946074156259848E15,
          "n" : 2,
          "max" : 7.53128518E8,
          "min" : 6.64290754E8,
          "sum" : 1.417419272E9,
          "standardDeviation" : 6.281778534985015E7
        } ],
        "24" : [ {
          "mean" : 8.723597665E8,
          "variance" : 5.702977339631046E14,
          "n" : 2,
          "max" : 8.89246118E8,
          "min" : 8.55473415E8,
          "sum" : 1.744719533E9,
          "standardDeviation" : 2.388090731029926E7
        }, {
          "mean" : 8.63755482E8,
          "variance" : 1.68933117087522E14,
          "n" : 2,
          "max" : 8.72946051E8,
          "min" : 8.54564913E8,
          "sum" : 1.727510964E9,
          "standardDeviation" : 1.2997427325725734E7
        }, {
          "mean" : 8.473872565E8,
          "variance" : 7.239522448591705E15,
          "n" : 2,
          "max" : 9.07551708E8,
          "min" : 7.87222805E8,
          "sum" : 1.694774513E9,
          "standardDeviation" : 8.50853832840383E7
        }, {
          "mean" : 7.618760513333334E8,
          "variance" : 1.9765941817756642E15,
          "n" : 3,
          "max" : 7.89795619E8,
          "min" : 7.10607187E8,
          "sum" : 2.285628154E9,
          "standardDeviation" : 4.445890441492755E7
        }, {
          "mean" : 7.507989895E8,
          "variance" : 1.4199814877189048E15,
          "n" : 2,
          "max" : 7.77444641E8,
          "min" : 7.24153338E8,
          "sum" : 1.501597979E9,
          "standardDeviation" : 3.7682641729567006E7
        }, {
          "mean" : 7.110290596666666E8,
          "variance" : 9.619205660078722E14,
          "n" : 3,
          "max" : 7.3572018E8,
          "min" : 6.76218371E8,
          "sum" : 2.133087179E9,
          "standardDeviation" : 3.101484428475939E7
        }, {
          "mean" : 7.44141028E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.44141028E8,
          "min" : 7.44141028E8,
          "sum" : 7.44141028E8,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 8.50867924E8,
          "variance" : 2.3567023349888E15,
          "n" : 2,
          "max" : 8.85195044E8,
          "min" : 8.16540804E8,
          "sum" : 1.701735848E9,
          "standardDeviation" : 4.854587866120872E7
        }, {
          "mean" : 8.949775175E8,
          "variance" : 1.0014831274245605E15,
          "n" : 2,
          "max" : 9.17354773E8,
          "min" : 8.72600262E8,
          "sum" : 1.789955035E9,
          "standardDeviation" : 3.1646218216787934E7
        }, {
          "mean" : 8.41255623E8,
          "variance" : 1.7679582101093138E16,
          "n" : 2,
          "max" : 9.35275786E8,
          "min" : 7.4723546E8,
          "sum" : 1.682511246E9,
          "standardDeviation" : 1.3296458965112907E8
        }, {
          "mean" : 8.00556053E8,
          "variance" : 8.285770815125E13,
          "n" : 2,
          "max" : 8.06992578E8,
          "min" : 7.94119528E8,
          "sum" : 1.601112106E9,
          "standardDeviation" : 9102620.949553486
        }, {
          "mean" : 7.493316123333334E8,
          "variance" : 3.8145471165715375E15,
          "n" : 3,
          "max" : 8.09288219E8,
          "min" : 6.85910057E8,
          "sum" : 2.247994837E9,
          "standardDeviation" : 6.176202001692899E7
        }, {
          "mean" : 7.403896885E8,
          "variance" : 5.58334391175125E13,
          "n" : 2,
          "max" : 7.45673316E8,
          "min" : 7.35106061E8,
          "sum" : 1.480779377E9,
          "standardDeviation" : 7472177.6690274505
        }, {
          "mean" : 7.95055787E8,
          "variance" : 1.9502085895112E15,
          "n" : 2,
          "max" : 8.26282447E8,
          "min" : 7.63829127E8,
          "sum" : 1.590111574E9,
          "standardDeviation" : 4.416116607961343E7
        } ],
        "26" : [ {
          "mean" : 8.70063363E8,
          "variance" : 2.7118548746528E13,
          "n" : 2,
          "max" : 8.73745655E8,
          "min" : 8.66381071E8,
          "sum" : 1.740126726E9,
          "standardDeviation" : 5207547.287017949
        }, {
          "mean" : 9.06129429E8,
          "variance" : 3.5680803928199995E15,
          "n" : 2,
          "max" : 9.48367329E8,
          "min" : 8.63891529E8,
          "sum" : 1.812258858E9,
          "standardDeviation" : 5.973341102615855E7
        }, {
          "mean" : 8.39375276E8,
          "variance" : 8.621791501075487E15,
          "n" : 2,
          "max" : 9.05032688E8,
          "min" : 7.73717864E8,
          "sum" : 1.678750552E9,
          "standardDeviation" : 9.2853602520718E7
        }, {
          "mean" : 7.83722552E8,
          "variance" : 2.131287789387148E15,
          "n" : 3,
          "max" : 8.31105236E8,
          "min" : 7.38878226E8,
          "sum" : 2.351167656E9,
          "standardDeviation" : 4.616587256174357E7
        }, {
          "mean" : 7.651469255E8,
          "variance" : 1.5850088935369608E15,
          "n" : 2,
          "max" : 7.93298381E8,
          "min" : 7.3699547E8,
          "sum" : 1.530293851E9,
          "standardDeviation" : 3.981217016864266E7
        }, {
          "mean" : 7.472385695E8,
          "variance" : 4.26546096087005E13,
          "n" : 2,
          "max" : 7.51856719E8,
          "min" : 7.4262042E8,
          "sum" : 1.494477139E9,
          "standardDeviation" : 6531049.655966528
        }, {
          "mean" : 7.14026204E8,
          "variance" : 3.182541637243392E15,
          "n" : 2,
          "max" : 7.5391694E8,
          "min" : 6.74135468E8,
          "sum" : 1.428052408E9,
          "standardDeviation" : 5.641401986424467E7
        } ],
        "27" : [ {
          "mean" : 8.655042E8,
          "variance" : 7.07640551664642E14,
          "n" : 2,
          "max" : 8.84314311E8,
          "min" : 8.46694089E8,
          "sum" : 1.7310084E9,
          "standardDeviation" : 2.660151408594334E7
        }, {
          "mean" : 8.62709198E8,
          "variance" : 4.5062847928368194E14,
          "n" : 2,
          "max" : 8.77719669E8,
          "min" : 8.47698727E8,
          "sum" : 1.725418396E9,
          "standardDeviation" : 2.1228011665808033E7
        }, {
          "mean" : 8.85135984E8,
          "variance" : 9.064641782560392E15,
          "n" : 2,
          "max" : 9.52458498E8,
          "min" : 8.1781347E8,
          "sum" : 1.770271968E9,
          "standardDeviation" : 9.520841235185257E7
        }, {
          "mean" : 7.628923646666666E8,
          "variance" : 1.4498127225630642E15,
          "n" : 3,
          "max" : 8.05964989E8,
          "min" : 7.33715732E8,
          "sum" : 2.288677094E9,
          "standardDeviation" : 3.807640637669296E7
        }, {
          "mean" : 7.78846407E8,
          "variance" : 3.373608411202568E15,
          "n" : 2,
          "max" : 8.19917129E8,
          "min" : 7.37775685E8,
          "sum" : 1.557692814E9,
          "standardDeviation" : 5.808277206885505E7
        }, {
          "mean" : 7.3283988E8,
          "variance" : 2.9357213650578E13,
          "n" : 2,
          "max" : 7.36671147E8,
          "min" : 7.29008613E8,
          "sum" : 1.46567976E9,
          "standardDeviation" : 5418229.752472481
        }, {
          "mean" : 7.42599421E8,
          "variance" : 1.0240968786307198E14,
          "n" : 2,
          "max" : 7.49755177E8,
          "min" : 7.35443665E8,
          "sum" : 1.485198842E9,
          "standardDeviation" : 1.0119767184232648E7
        } ],
        "28" : [ {
          "mean" : 8.471702695E8,
          "variance" : 8.071480963365126E14,
          "n" : 2,
          "max" : 8.67259422E8,
          "min" : 8.27081117E8,
          "sum" : 1.694340539E9,
          "standardDeviation" : 2.841035192208137E7
        }, {
          "mean" : 8.87342194E8,
          "variance" : 8.39527105698848E14,
          "n" : 2,
          "max" : 9.07830326E8,
          "min" : 8.66854062E8,
          "sum" : 1.774684388E9,
          "standardDeviation" : 2.8974594142090205E7
        }, {
          "mean" : 8.37585292E8,
          "variance" : 2.2221644448199996E13,
          "n" : 2,
          "max" : 8.40918582E8,
          "min" : 8.34252002E8,
          "sum" : 1.675170584E9,
          "standardDeviation" : 4713983.925322614
        }, {
          "mean" : 7.583212893333334E8,
          "variance" : 1.1377923394051222E15,
          "n" : 3,
          "max" : 7.95015291E8,
          "min" : 7.28662568E8,
          "sum" : 2.274963868E9,
          "standardDeviation" : 3.373117755734481E7
        }, {
          "mean" : 7.523493505E8,
          "variance" : 2.6646094281235005E15,
          "n" : 2,
          "max" : 7.888501E8,
          "min" : 7.15848601E8,
          "sum" : 1.504698701E9,
          "standardDeviation" : 5.161985497968297E7
        }, {
          "mean" : 7.35243143E8,
          "variance" : 2.180789217308923E15,
          "n" : 3,
          "max" : 7.84794402E8,
          "min" : 6.92047585E8,
          "sum" : 2.205729429E9,
          "standardDeviation" : 4.669892094373191E7
        }, {
          "mean" : 7.27118374E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.27118374E8,
          "min" : 7.27118374E8,
          "sum" : 7.27118374E8,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 8.817944615E8,
          "variance" : 1.3932444002816042E15,
          "n" : 2,
          "max" : 9.08188063E8,
          "min" : 8.5540086E8,
          "sum" : 1.763588923E9,
          "standardDeviation" : 3.732618920117086E7
        }, {
          "mean" : 8.97393898E8,
          "variance" : 2.8044209602044015E15,
          "n" : 2,
          "max" : 9.34839999E8,
          "min" : 8.59947797E8,
          "sum" : 1.794787796E9,
          "standardDeviation" : 5.2956783892192714E7
        }, {
          "mean" : 8.5512351E8,
          "variance" : 1.1161969883760198E14,
          "n" : 2,
          "max" : 8.62594109E8,
          "min" : 8.47652911E8,
          "sum" : 1.71024702E9,
          "standardDeviation" : 1.0565022424850881E7
        }, {
          "mean" : 7.992892213333334E8,
          "variance" : 4.001992610801557E15,
          "n" : 3,
          "max" : 8.5652396E8,
          "min" : 7.31363696E8,
          "sum" : 2.397867664E9,
          "standardDeviation" : 6.326130421356769E7
        }, {
          "mean" : 6.972442595E8,
          "variance" : 1.3258911488103402E15,
          "n" : 2,
          "max" : 7.22991989E8,
          "min" : 6.7149653E8,
          "sum" : 1.394488519E9,
          "standardDeviation" : 3.641278825921383E7
        }, {
          "mean" : 7.582652676666666E8,
          "variance" : 1.2350311426163615E15,
          "n" : 3,
          "max" : 7.98728817E8,
          "min" : 7.35376987E8,
          "sum" : 2.274795803E9,
          "standardDeviation" : 3.514300986848397E7
        }, {
          "mean" : 7.28301235E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.28301235E8,
          "min" : 7.28301235E8,
          "sum" : 7.28301235E8,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "children" : [ ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 287},
   width = 925- margin.right - margin.left,
   height = 525 - margin.top - margin.bottom;
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
