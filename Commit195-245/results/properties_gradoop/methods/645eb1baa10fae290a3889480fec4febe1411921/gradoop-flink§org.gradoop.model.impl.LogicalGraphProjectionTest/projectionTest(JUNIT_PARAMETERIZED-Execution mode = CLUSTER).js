if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 645eb1baa10fae290a3889480fec4febe1411921 -test org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest\")'>645eb1baa10fae290a3889480fec4febe1411921</a><br>Test Case: org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest<br>";
   if (typeof jenkins !== 'undefined') {
      document.getElementById('testcaseDiv').innerHTML+="<p class='button-wrap'><a role='button' href='dashboard?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a></p>";
   } else {
   document.getElementById('testcaseDiv').innerHTML+="<a href='projectionTest_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";
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
    "meanOld" : 4.241175727933333E9,
    "meanCurrent" : 2.2893557525533338E9,
    "deviationOld" : 5.3937058811020054E7,
    "deviationCurrent" : 3.2044864047124747E7,
    "vms" : 30,
    "callsOld" : 150,
    "calls" : 150,
    "tvalue" : 170.39955176040127,
    "change" : true
  },
  "hasSourceChange" : true,
  "state" : "FASTER",
  "inVMDeviationPredecessor" : 2.8994001323996234E8,
  "inVMDeviation" : 3.117002090144911E7,
  "ess" : 0,
  "values" : [ 2.2615118236E9, 2.247151128E9, 2.296884944E9, 2.2569415138E9, 2.2672028462E9, 2.2945041468E9, 2.3232886154E9, 2.2633905956E9, 2.312488417E9, 2.342493391E9, 2.3028780234E9, 2.2678011772E9, 2.2273253096E9, 2.3148605564E9, 2.2786654588E9, 2.3040079804E9, 2.2820203522E9, 2.3287488158E9, 2.3447835206E9, 2.289220361E9, 2.246216879E9, 2.2636576192E9, 2.2628230374E9, 2.2913696126E9, 2.2771395608E9, 2.2531809746E9, 2.2984584454E9, 2.3093676622E9, 2.3550158252E9, 2.3172739834E9 ],
  "valuesPredecessor" : [ 4.172858166E9, 4.1911878776E9, 4.2267386738E9, 4.2840730372E9, 4.2838112448E9, 4.2206468856E9, 4.2664252444E9, 4.2101852496E9, 4.3249411892E9, 4.2354573684E9, 4.219483232E9, 4.2001380058E9, 4.3355531216E9, 4.2384846998E9, 4.195144683E9, 4.2176898088E9, 4.2570115368E9, 4.2270560728E9, 4.234692972E9, 4.2382153492E9, 4.2072562876E9, 4.1826512108E9, 4.2125296598E9, 4.2109085208E9, 4.3946303724E9, 4.1618486216E9, 4.2076114184E9, 4.2362548478E9, 4.3232813904E9, 4.31850509E9 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 2.255744492E9,
        "variance" : 1.962101570362141E15,
        "n" : 3,
        "max" : 2.282711147E9,
        "min" : 2.204622073E9,
        "sum" : 6.767233476E9,
        "standardDeviation" : 4.429561570135515E7
      }, {
        "mean" : 2.270162821E9,
        "variance" : 1.37084710910805E15,
        "n" : 2,
        "max" : 2.296343416E9,
        "min" : 2.243982226E9,
        "sum" : 4.540325642E9,
        "standardDeviation" : 3.702495251999724E7
      } ],
      "1" : [ {
        "mean" : 2.2536259946666665E9,
        "variance" : 2.0534209815333582E15,
        "n" : 3,
        "max" : 2.299952753E9,
        "min" : 2.209396183E9,
        "sum" : 6.760877984E9,
        "standardDeviation" : 4.531468836407637E7
      }, {
        "mean" : 2.237438828E9,
        "variance" : 1.9419553718480002E12,
        "n" : 2,
        "max" : 2.23842421E9,
        "min" : 2.236453446E9,
        "sum" : 4.474877656E9,
        "standardDeviation" : 1393540.5885183252
      } ],
      "2" : [ {
        "mean" : 2.3080870273333335E9,
        "variance" : 3.7278865451380085E15,
        "n" : 3,
        "max" : 2.378408839E9,
        "min" : 2.268565084E9,
        "sum" : 6.924261082E9,
        "standardDeviation" : 6.105642099843397E7
      }, {
        "mean" : 2.280081819E9,
        "variance" : 2.4076684695168803E14,
        "n" : 2,
        "max" : 2.291053757E9,
        "min" : 2.269109881E9,
        "sum" : 4.560163638E9,
        "standardDeviation" : 1.5516663525116732E7
      } ],
      "3" : [ {
        "mean" : 2.232869764E9,
        "variance" : 5.76614295306189E15,
        "n" : 3,
        "max" : 2.314084758E9,
        "min" : 2.163639959E9,
        "sum" : 6.698609292E9,
        "standardDeviation" : 7.593512331630133E7
      }, {
        "mean" : 2.2930491385E9,
        "variance" : 7.205979113586126E14,
        "n" : 2,
        "max" : 2.312030681E9,
        "min" : 2.274067596E9,
        "sum" : 4.586098277E9,
        "standardDeviation" : 2.6843954838261306E7
      } ],
      "4" : [ {
        "mean" : 2.256475885E9,
        "variance" : 1.616395082708827E15,
        "n" : 3,
        "max" : 2.286705063E9,
        "min" : 2.210848304E9,
        "sum" : 6.769427655E9,
        "standardDeviation" : 4.0204416209028915E7
      }, {
        "mean" : 2.283293288E9,
        "variance" : 1.0775418937472E13,
        "n" : 2,
        "max" : 2.285614432E9,
        "min" : 2.280972144E9,
        "sum" : 4.566586576E9,
        "standardDeviation" : 3282593.3250209354
      } ],
      "5" : [ {
        "mean" : 2.3057267103333335E9,
        "variance" : 4.512690467002645E15,
        "n" : 3,
        "max" : 2.35517333E9,
        "min" : 2.229244688E9,
        "sum" : 6.917180131E9,
        "standardDeviation" : 6.717656188733274E7
      }, {
        "mean" : 2.2776703015E9,
        "variance" : 2.4121323849784047E14,
        "n" : 2,
        "max" : 2.288652406E9,
        "min" : 2.266688197E9,
        "sum" : 4.555340603E9,
        "standardDeviation" : 1.5531041127298597E7
      } ],
      "6" : [ {
        "mean" : 2.326953515E9,
        "variance" : 2.4181066104883197E14,
        "n" : 2,
        "max" : 2.337949211E9,
        "min" : 2.315957819E9,
        "sum" : 4.65390703E9,
        "standardDeviation" : 1.5550262410931591E7
      }, {
        "mean" : 2.320845349E9,
        "variance" : 4.2608455488939906E14,
        "n" : 3,
        "max" : 2.341945047E9,
        "min" : 2.300694114E9,
        "sum" : 6.962536047E9,
        "standardDeviation" : 2.0641815687807094E7
      } ],
      "7" : [ {
        "mean" : 2.272889701E9,
        "variance" : 8.124523616110681E14,
        "n" : 3,
        "max" : 2.303763067E9,
        "min" : 2.247574819E9,
        "sum" : 6.818669103E9,
        "standardDeviation" : 2.8503549982608624E7
      }, {
        "mean" : 2.2491419375E9,
        "variance" : 9.562104919948048E13,
        "n" : 2,
        "max" : 2.256056453E9,
        "min" : 2.242227422E9,
        "sum" : 4.498283875E9,
        "standardDeviation" : 9778601.597338982
      } ],
      "8" : [ {
        "mean" : 2.302078396E9,
        "variance" : 1.085941081713547E15,
        "n" : 3,
        "max" : 2.336074959E9,
        "min" : 2.270277535E9,
        "sum" : 6.906235188E9,
        "standardDeviation" : 3.295362016097089E7
      }, {
        "mean" : 2.3281034485E9,
        "variance" : 1.6179504486605002E12,
        "n" : 2,
        "max" : 2.329002879E9,
        "min" : 2.327204018E9,
        "sum" : 4.656206897E9,
        "standardDeviation" : 1271986.8115120141
      } ],
      "9" : [ {
        "mean" : 2.352287385E9,
        "variance" : 5.279095258669567E15,
        "n" : 2,
        "max" : 2.403663913E9,
        "min" : 2.300910857E9,
        "sum" : 4.70457477E9,
        "standardDeviation" : 7.265738268524106E7
      }, {
        "mean" : 2.3359640616666665E9,
        "variance" : 9.581342049099124E14,
        "n" : 3,
        "max" : 2.364218593E9,
        "min" : 2.302879072E9,
        "sum" : 7.007892185E9,
        "standardDeviation" : 3.0953742987075284E7
      } ],
      "10" : [ {
        "mean" : 2.3333078135E9,
        "variance" : 6.392776427510981E15,
        "n" : 2,
        "max" : 2.389844423E9,
        "min" : 2.276771204E9,
        "sum" : 4.666615627E9,
        "standardDeviation" : 7.995483992549157E7
      }, {
        "mean" : 2.2825914966666665E9,
        "variance" : 1.9657028174153642E15,
        "n" : 3,
        "max" : 2.313271909E9,
        "min" : 2.231758516E9,
        "sum" : 6.84777449E9,
        "standardDeviation" : 4.4336247218448296E7
      } ],
      "11" : [ {
        "mean" : 2.2746106526666665E9,
        "variance" : 4.607349777865163E14,
        "n" : 3,
        "max" : 2.293054572E9,
        "min" : 2.251049887E9,
        "sum" : 6.823831958E9,
        "standardDeviation" : 2.1464738008802164E7
      }, {
        "mean" : 2.257586964E9,
        "variance" : 1.4975036573778E13,
        "n" : 2,
        "max" : 2.260323297E9,
        "min" : 2.254850631E9,
        "sum" : 4.515173928E9,
        "standardDeviation" : 3869759.2397690583
      } ],
      "12" : [ {
        "mean" : 1.853073768E9,
        "variance" : 4.6987366539127405E17,
        "n" : 1,
        "max" : 2.261251677E9,
        "min" : 1.061688669E9,
        "sum" : 1.853073768E9,
        "standardDeviation" : 6.854733148644621E8
      }, {
        "mean" : 2.329415873E9,
        "variance" : 8.00723203370888E14,
        "n" : 2,
        "max" : 2.349424911E9,
        "min" : 2.309406835E9,
        "sum" : 4.658831746E9,
        "standardDeviation" : 2.829705290963863E7
      }, {
        "mean" : 2.312360517E9,
        "variance" : 1.09262897466962E14,
        "n" : 2,
        "max" : 2.319751826E9,
        "min" : 2.304969208E9,
        "sum" : 4.624721034E9,
        "standardDeviation" : 1.0452889431490319E7
      } ],
      "13" : [ {
        "mean" : 2.3277218286666665E9,
        "variance" : 6.552147559018391E15,
        "n" : 3,
        "max" : 2.409956763E9,
        "min" : 2.248130874E9,
        "sum" : 6.983165486E9,
        "standardDeviation" : 8.094533685777329E7
      }, {
        "mean" : 2.295568648E9,
        "variance" : 6.05897917348082E14,
        "n" : 2,
        "max" : 2.312974077E9,
        "min" : 2.278163219E9,
        "sum" : 4.591137296E9,
        "standardDeviation" : 2.4614993750721976E7
      } ],
      "14" : [ {
        "mean" : 2.267667321E9,
        "variance" : 1.656103033325052E15,
        "n" : 3,
        "max" : 2.314459143E9,
        "min" : 2.240530143E9,
        "sum" : 6.803001963E9,
        "standardDeviation" : 4.069524583197713E7
      }, {
        "mean" : 2.2951626655E9,
        "variance" : 5.5606979672252456E14,
        "n" : 2,
        "max" : 2.311837044E9,
        "min" : 2.278488287E9,
        "sum" : 4.590325331E9,
        "standardDeviation" : 2.3581132218842346E7
      } ],
      "15" : [ {
        "mean" : 2.2819479035E9,
        "variance" : 2.7905591837878445E15,
        "n" : 2,
        "max" : 2.319301345E9,
        "min" : 2.244594462E9,
        "sum" : 4.563895807E9,
        "standardDeviation" : 5.282574357061001E7
      }, {
        "mean" : 2.3187146983333335E9,
        "variance" : 8.713271498124433E13,
        "n" : 3,
        "max" : 2.329492466E9,
        "min" : 2.313213975E9,
        "sum" : 6.956144095E9,
        "standardDeviation" : 9334490.611771181
      } ],
      "16" : [ {
        "mean" : 2.250064679E9,
        "variance" : 2.2598289776811905E15,
        "n" : 3,
        "max" : 2.291800934E9,
        "min" : 2.198319493E9,
        "sum" : 6.750194037E9,
        "standardDeviation" : 4.753765852123126E7
      }, {
        "mean" : 2.329953862E9,
        "variance" : 3.12078342332192E14,
        "n" : 2,
        "max" : 2.342445426E9,
        "min" : 2.317462298E9,
        "sum" : 4.659907724E9,
        "standardDeviation" : 1.766573922405151E7
      } ],
      "17" : [ {
        "mean" : 2.3186404175E9,
        "variance" : 6.512270366256051E13,
        "n" : 2,
        "max" : 2.324346673E9,
        "min" : 2.312934162E9,
        "sum" : 4.637280835E9,
        "standardDeviation" : 8069863.918466067
      }, {
        "mean" : 2.335487748E9,
        "variance" : 1.046302703911636E15,
        "n" : 3,
        "max" : 2.372620094E9,
        "min" : 2.313429532E9,
        "sum" : 7.006463244E9,
        "standardDeviation" : 3.2346602664138254E7
      } ],
      "18" : [ {
        "mean" : 2.3756644625E9,
        "variance" : 4.3793290764081045E15,
        "n" : 2,
        "max" : 2.422458314E9,
        "min" : 2.328870611E9,
        "sum" : 4.751328925E9,
        "standardDeviation" : 6.61764994269726E7
      }, {
        "mean" : 2.324196226E9,
        "variance" : 1.1231375937978702E14,
        "n" : 3,
        "max" : 2.335881639E9,
        "min" : 2.315206759E9,
        "sum" : 6.972588678E9,
        "standardDeviation" : 1.0597818614214296E7
      } ],
      "19" : [ {
        "mean" : 2.28799878E9,
        "variance" : 5.055430782864201E15,
        "n" : 2,
        "max" : 2.33827517E9,
        "min" : 2.23772239E9,
        "sum" : 4.57599756E9,
        "standardDeviation" : 7.110155260515906E7
      }, {
        "mean" : 2.2900347483333335E9,
        "variance" : 2.2219623716621125E15,
        "n" : 3,
        "max" : 2.332789697E9,
        "min" : 2.23948583E9,
        "sum" : 6.870104245E9,
        "standardDeviation" : 4.713769586713072E7
      } ],
      "20" : [ {
        "mean" : 2.2346949846666665E9,
        "variance" : 2.414324604433162E15,
        "n" : 3,
        "max" : 2.271306258E9,
        "min" : 2.178852225E9,
        "sum" : 6.704084954E9,
        "standardDeviation" : 4.9135777234446615E7
      }, {
        "mean" : 2.2634997205E9,
        "variance" : 4.2671619000461256E14,
        "n" : 2,
        "max" : 2.278106503E9,
        "min" : 2.248892938E9,
        "sum" : 4.526999441E9,
        "standardDeviation" : 2.0657109914133985E7
      } ],
      "21" : [ {
        "mean" : 2.270367936E9,
        "variance" : 8.746264809745111E14,
        "n" : 3,
        "max" : 2.301515382E9,
        "min" : 2.242669695E9,
        "sum" : 6.811103808E9,
        "standardDeviation" : 2.9574084617693767E7
      }, {
        "mean" : 2.253592144E9,
        "variance" : 7.50512581540178E14,
        "n" : 2,
        "max" : 2.272963677E9,
        "min" : 2.234220611E9,
        "sum" : 4.507184288E9,
        "standardDeviation" : 2.739548469255797E7
      } ],
      "22" : [ {
        "mean" : 2.242649652E9,
        "variance" : 1.0125360920876891E15,
        "n" : 3,
        "max" : 2.264573855E9,
        "min" : 2.206152612E9,
        "sum" : 6.727948956E9,
        "standardDeviation" : 3.1820372280784037E7
      }, {
        "mean" : 2.2930831155E9,
        "variance" : 5.984711187518044E14,
        "n" : 2,
        "max" : 2.310381542E9,
        "min" : 2.275784689E9,
        "sum" : 4.586166231E9,
        "standardDeviation" : 2.446366936401415E7
      } ],
      "23" : [ {
        "mean" : 2.2547649805E9,
        "variance" : 1.1699422673783042E15,
        "n" : 2,
        "max" : 2.278951157E9,
        "min" : 2.230578804E9,
        "sum" : 4.509529961E9,
        "standardDeviation" : 3.420441882824943E7
      }, {
        "mean" : 2.3157727006666665E9,
        "variance" : 4.8613631543728225E14,
        "n" : 3,
        "max" : 2.334502934E9,
        "min" : 2.291473727E9,
        "sum" : 6.947318102E9,
        "standardDeviation" : 2.204849916518769E7
      } ],
      "24" : [ {
        "mean" : 2.2528750013333335E9,
        "variance" : 2.1997417212485034E14,
        "n" : 3,
        "max" : 2.263634959E9,
        "min" : 2.23595632E9,
        "sum" : 6.758625004E9,
        "standardDeviation" : 1.4831526291142471E7
      }, {
        "mean" : 2.3135364E9,
        "variance" : 4.765911938361801E13,
        "n" : 2,
        "max" : 2.318417953E9,
        "min" : 2.308654847E9,
        "sum" : 4.6270728E9,
        "standardDeviation" : 6903558.45804307
      } ],
      "25" : [ {
        "mean" : 2.254848381E9,
        "variance" : 2.419668132613392E15,
        "n" : 3,
        "max" : 2.310401353E9,
        "min" : 2.216821597E9,
        "sum" : 6.764545143E9,
        "standardDeviation" : 4.919012230736362E7
      }, {
        "mean" : 2.250679865E9,
        "variance" : 2.08732739904392E14,
        "n" : 2,
        "max" : 2.260895851E9,
        "min" : 2.240463879E9,
        "sum" : 4.50135973E9,
        "standardDeviation" : 1.4447585954213666E7
      } ],
      "26" : [ {
        "mean" : 2.2839419046666665E9,
        "variance" : 9.206599016197902E14,
        "n" : 3,
        "max" : 2.318637806E9,
        "min" : 2.262374271E9,
        "sum" : 6.851825714E9,
        "standardDeviation" : 3.0342377982283957E7
      }, {
        "mean" : 2.3202332565E9,
        "variance" : 1.7932723181231448E15,
        "n" : 2,
        "max" : 2.35017714E9,
        "min" : 2.290289373E9,
        "sum" : 4.640466513E9,
        "standardDeviation" : 4.2347046155819945E7
      } ],
      "27" : [ {
        "mean" : 2.270629141E9,
        "variance" : 1.8226729971781828E16,
        "n" : 2,
        "max" : 2.366093087E9,
        "min" : 2.175165195E9,
        "sum" : 4.541258282E9,
        "standardDeviation" : 1.3500640715085277E8
      }, {
        "mean" : 2.335193343E9,
        "variance" : 3.6687283067089194E14,
        "n" : 3,
        "max" : 2.357239309E9,
        "min" : 2.322635965E9,
        "sum" : 7.005580029E9,
        "standardDeviation" : 1.915392468062073E7
      } ],
      "28" : [ {
        "mean" : 2.3537472165E9,
        "variance" : 1.2961133703136128E15,
        "n" : 2,
        "max" : 2.379204174E9,
        "min" : 2.328290259E9,
        "sum" : 4.707494433E9,
        "standardDeviation" : 3.600157455325548E7
      }, {
        "mean" : 2.3558615643333335E9,
        "variance" : 2.0255945319657738E14,
        "n" : 3,
        "max" : 2.370090403E9,
        "min" : 2.341625729E9,
        "sum" : 7.067584693E9,
        "standardDeviation" : 1.4232338289844623E7
      } ],
      "29" : [ {
        "mean" : 2.295199182E9,
        "variance" : 2.66134085787931E14,
        "n" : 3,
        "max" : 2.312579732E9,
        "min" : 2.280218323E9,
        "sum" : 6.885597546E9,
        "standardDeviation" : 1.6313616575975144E7
      }, {
        "mean" : 2.3503861855E9,
        "variance" : 1.790537974801805E14,
        "n" : 2,
        "max" : 2.359848051E9,
        "min" : 2.34092432E9,
        "sum" : 4.700772371E9,
        "standardDeviation" : 1.3381098515450086E7
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 4.568430458E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.568430458E9,
        "min" : 4.568430458E9,
        "sum" : 4.568430458E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.230179731E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.230179731E9,
        "min" : 4.230179731E9,
        "sum" : 4.230179731E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.044124001E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.044124001E9,
        "min" : 4.044124001E9,
        "sum" : 4.044124001E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.01077832E9,
        "variance" : 1.5235392565484448E16,
        "n" : 2,
        "max" : 4.098057735E9,
        "min" : 3.923498905E9,
        "sum" : 8.02155664E9,
        "standardDeviation" : 1.2343173240898974E8
      } ],
      "1" : [ {
        "mean" : 4.649001884E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.649001884E9,
        "min" : 4.649001884E9,
        "sum" : 4.649001884E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.194548228E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.194548228E9,
        "min" : 4.194548228E9,
        "sum" : 4.194548228E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.066911729E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.066911729E9,
        "min" : 4.066911729E9,
        "sum" : 4.066911729E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0227387735E9,
        "variance" : 3.6830723370525045E15,
        "n" : 2,
        "max" : 4.065651897E9,
        "min" : 3.97982565E9,
        "sum" : 8.045477547E9,
        "standardDeviation" : 6.068832125749158E7
      } ],
      "2" : [ {
        "mean" : 4.664395564E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.664395564E9,
        "min" : 4.664395564E9,
        "sum" : 4.664395564E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.368526483E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.368526483E9,
        "min" : 4.368526483E9,
        "sum" : 4.368526483E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.023749416E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023749416E9,
        "min" : 4.023749416E9,
        "sum" : 4.023749416E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.011834716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.011834716E9,
        "min" : 4.011834716E9,
        "sum" : 4.011834716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.06518719E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.06518719E9,
        "min" : 4.06518719E9,
        "sum" : 4.06518719E9,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 4.627404742E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.627404742E9,
        "min" : 4.627404742E9,
        "sum" : 4.627404742E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.360811889E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.360811889E9,
        "min" : 4.360811889E9,
        "sum" : 4.360811889E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.100309516E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.100309516E9,
        "min" : 4.100309516E9,
        "sum" : 4.100309516E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.141889221E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.141889221E9,
        "min" : 4.141889221E9,
        "sum" : 4.141889221E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.189949818E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.189949818E9,
        "min" : 4.189949818E9,
        "sum" : 4.189949818E9,
        "standardDeviation" : 0.0
      } ],
      "4" : [ {
        "mean" : 4.768973024E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.768973024E9,
        "min" : 4.768973024E9,
        "sum" : 4.768973024E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.303030461E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.303030461E9,
        "min" : 4.303030461E9,
        "sum" : 4.303030461E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.107323966E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.107323966E9,
        "min" : 4.107323966E9,
        "sum" : 4.107323966E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.136499744E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.136499744E9,
        "min" : 4.136499744E9,
        "sum" : 4.136499744E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.103229029E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.103229029E9,
        "min" : 4.103229029E9,
        "sum" : 4.103229029E9,
        "standardDeviation" : 0.0
      } ],
      "5" : [ {
        "mean" : 4.717857603E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.717857603E9,
        "min" : 4.717857603E9,
        "sum" : 4.717857603E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.286815975E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.286815975E9,
        "min" : 4.286815975E9,
        "sum" : 4.286815975E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.037561379E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.037561379E9,
        "min" : 4.037561379E9,
        "sum" : 4.037561379E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.101906345E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.101906345E9,
        "min" : 4.101906345E9,
        "sum" : 4.101906345E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.959093126E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.959093126E9,
        "min" : 3.959093126E9,
        "sum" : 3.959093126E9,
        "standardDeviation" : 0.0
      } ],
      "6" : [ {
        "mean" : 4.911964187E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.911964187E9,
        "min" : 4.911964187E9,
        "sum" : 4.911964187E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.383147602E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.383147602E9,
        "min" : 4.383147602E9,
        "sum" : 4.383147602E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.990140134E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.990140134E9,
        "min" : 3.990140134E9,
        "sum" : 3.990140134E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.080702509E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.080702509E9,
        "min" : 4.080702509E9,
        "sum" : 4.080702509E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.96617179E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.96617179E9,
        "min" : 3.96617179E9,
        "sum" : 3.96617179E9,
        "standardDeviation" : 0.0
      } ],
      "7" : [ {
        "mean" : 4.557516706E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.557516706E9,
        "min" : 4.557516706E9,
        "sum" : 4.557516706E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.363601246E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.363601246E9,
        "min" : 4.363601246E9,
        "sum" : 4.363601246E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.032982374E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.032982374E9,
        "min" : 4.032982374E9,
        "sum" : 4.032982374E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.048412961E9,
        "variance" : 3.160937224183328E15,
        "n" : 2,
        "max" : 4.088168069E9,
        "min" : 4.008657853E9,
        "sum" : 8.096825922E9,
        "standardDeviation" : 5.622221290720713E7
      } ],
      "8" : [ {
        "mean" : 4.768131543E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.768131543E9,
        "min" : 4.768131543E9,
        "sum" : 4.768131543E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.320606143E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.320606143E9,
        "min" : 4.320606143E9,
        "sum" : 4.320606143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.171902866E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.171902866E9,
        "min" : 4.171902866E9,
        "sum" : 4.171902866E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.180141451E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.180141451E9,
        "min" : 4.180141451E9,
        "sum" : 4.180141451E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.183923943E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.183923943E9,
        "min" : 4.183923943E9,
        "sum" : 4.183923943E9,
        "standardDeviation" : 0.0
      } ],
      "9" : [ {
        "mean" : 4.779973099E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.779973099E9,
        "min" : 4.779973099E9,
        "sum" : 4.779973099E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.347869496E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.347869496E9,
        "min" : 4.347869496E9,
        "sum" : 4.347869496E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.023428041E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023428041E9,
        "min" : 4.023428041E9,
        "sum" : 4.023428041E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.070200757E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.070200757E9,
        "min" : 4.070200757E9,
        "sum" : 4.070200757E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.955815449E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.955815449E9,
        "min" : 3.955815449E9,
        "sum" : 3.955815449E9,
        "standardDeviation" : 0.0
      } ],
      "10" : [ {
        "mean" : 4.678801089E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.678801089E9,
        "min" : 4.678801089E9,
        "sum" : 4.678801089E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.349413393E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.349413393E9,
        "min" : 4.349413393E9,
        "sum" : 4.349413393E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.021222959E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.021222959E9,
        "min" : 4.021222959E9,
        "sum" : 4.021222959E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.023060174E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.023060174E9,
        "min" : 4.023060174E9,
        "sum" : 4.023060174E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.024918545E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.024918545E9,
        "min" : 4.024918545E9,
        "sum" : 4.024918545E9,
        "standardDeviation" : 0.0
      } ],
      "11" : [ {
        "mean" : 4.627203779E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.627203779E9,
        "min" : 4.627203779E9,
        "sum" : 4.627203779E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.351002601E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.351002601E9,
        "min" : 4.351002601E9,
        "sum" : 4.351002601E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.025090672E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.025090672E9,
        "min" : 4.025090672E9,
        "sum" : 4.025090672E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.9986964885E9,
        "variance" : 6.34977938079888E15,
        "n" : 2,
        "max" : 4.055042648E9,
        "min" : 3.942350329E9,
        "sum" : 7.997392977E9,
        "standardDeviation" : 7.968550295253761E7
      } ],
      "12" : [ {
        "mean" : 4.730433145E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.730433145E9,
        "min" : 4.730433145E9,
        "sum" : 4.730433145E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.461316984E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.461316984E9,
        "min" : 4.461316984E9,
        "sum" : 4.461316984E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.133969955E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133969955E9,
        "min" : 4.133969955E9,
        "sum" : 4.133969955E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.223968716E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.223968716E9,
        "min" : 4.223968716E9,
        "sum" : 4.223968716E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.128076808E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.128076808E9,
        "min" : 4.128076808E9,
        "sum" : 4.128076808E9,
        "standardDeviation" : 0.0
      } ],
      "13" : [ {
        "mean" : 4.77270993E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.77270993E9,
        "min" : 4.77270993E9,
        "sum" : 4.77270993E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.300210171E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.300210171E9,
        "min" : 4.300210171E9,
        "sum" : 4.300210171E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.022141786E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.022141786E9,
        "min" : 4.022141786E9,
        "sum" : 4.022141786E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.13116583E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.13116583E9,
        "min" : 4.13116583E9,
        "sum" : 4.13116583E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.966195782E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.966195782E9,
        "min" : 3.966195782E9,
        "sum" : 3.966195782E9,
        "standardDeviation" : 0.0
      } ],
      "14" : [ {
        "mean" : 4.596321086E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.596321086E9,
        "min" : 4.596321086E9,
        "sum" : 4.596321086E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.298770606E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.298770606E9,
        "min" : 4.298770606E9,
        "sum" : 4.298770606E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.01065281E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.01065281E9,
        "min" : 4.01065281E9,
        "sum" : 4.01065281E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0349894565E9,
        "variance" : 4.1513992262071245E15,
        "n" : 2,
        "max" : 4.080549303E9,
        "min" : 3.98942961E9,
        "sum" : 8.069978913E9,
        "standardDeviation" : 6.443135281993639E7
      } ],
      "15" : [ {
        "mean" : 4.744898314E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.744898314E9,
        "min" : 4.744898314E9,
        "sum" : 4.744898314E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.306039559E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.306039559E9,
        "min" : 4.306039559E9,
        "sum" : 4.306039559E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.013179925E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.013179925E9,
        "min" : 4.013179925E9,
        "sum" : 4.013179925E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.018841172E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.018841172E9,
        "min" : 4.018841172E9,
        "sum" : 4.018841172E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.005490074E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.005490074E9,
        "min" : 4.005490074E9,
        "sum" : 4.005490074E9,
        "standardDeviation" : 0.0
      } ],
      "16" : [ {
        "mean" : 4.716477808E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.716477808E9,
        "min" : 4.716477808E9,
        "sum" : 4.716477808E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.37276646E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.37276646E9,
        "min" : 4.37276646E9,
        "sum" : 4.37276646E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.082978641E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.082978641E9,
        "min" : 4.082978641E9,
        "sum" : 4.082978641E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.077276591E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.077276591E9,
        "min" : 4.077276591E9,
        "sum" : 4.077276591E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.035558184E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.035558184E9,
        "min" : 4.035558184E9,
        "sum" : 4.035558184E9,
        "standardDeviation" : 0.0
      } ],
      "17" : [ {
        "mean" : 4.787157138E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.787157138E9,
        "min" : 4.787157138E9,
        "sum" : 4.787157138E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.298989755E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.298989755E9,
        "min" : 4.298989755E9,
        "sum" : 4.298989755E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.965685556E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.965685556E9,
        "min" : 3.965685556E9,
        "sum" : 3.965685556E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.974467912E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.974467912E9,
        "min" : 3.974467912E9,
        "sum" : 3.974467912E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.108980003E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.108980003E9,
        "min" : 4.108980003E9,
        "sum" : 4.108980003E9,
        "standardDeviation" : 0.0
      } ],
      "18" : [ {
        "mean" : 4.786237261E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.786237261E9,
        "min" : 4.786237261E9,
        "sum" : 4.786237261E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.334880211E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.334880211E9,
        "min" : 4.334880211E9,
        "sum" : 4.334880211E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.986048024E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.986048024E9,
        "min" : 3.986048024E9,
        "sum" : 3.986048024E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.092080203E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.092080203E9,
        "min" : 4.092080203E9,
        "sum" : 4.092080203E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.974219161E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.974219161E9,
        "min" : 3.974219161E9,
        "sum" : 3.974219161E9,
        "standardDeviation" : 0.0
      } ],
      "19" : [ {
        "mean" : 4.7021971E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.7021971E9,
        "min" : 4.7021971E9,
        "sum" : 4.7021971E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.295827133E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.295827133E9,
        "min" : 4.295827133E9,
        "sum" : 4.295827133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.025029201E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.025029201E9,
        "min" : 4.025029201E9,
        "sum" : 4.025029201E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.185403597E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.185403597E9,
        "min" : 4.185403597E9,
        "sum" : 4.185403597E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.982619715E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.982619715E9,
        "min" : 3.982619715E9,
        "sum" : 3.982619715E9,
        "standardDeviation" : 0.0
      } ],
      "20" : [ {
        "mean" : 4.687419784E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.687419784E9,
        "min" : 4.687419784E9,
        "sum" : 4.687419784E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.283928729E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.283928729E9,
        "min" : 4.283928729E9,
        "sum" : 4.283928729E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.980940766E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.980940766E9,
        "min" : 3.980940766E9,
        "sum" : 3.980940766E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0419960795E9,
        "variance" : 5.002351776477613E15,
        "n" : 2,
        "max" : 4.092007837E9,
        "min" : 3.991984322E9,
        "sum" : 8.083992159E9,
        "standardDeviation" : 7.072730573461436E7
      } ],
      "21" : [ {
        "mean" : 4.738426107E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.738426107E9,
        "min" : 4.738426107E9,
        "sum" : 4.738426107E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.194294313E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.194294313E9,
        "min" : 4.194294313E9,
        "sum" : 4.194294313E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.947738004E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.947738004E9,
        "min" : 3.947738004E9,
        "sum" : 3.947738004E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.016398815E9,
        "variance" : 1.4018129144620882E15,
        "n" : 2,
        "max" : 4.042873453E9,
        "min" : 3.989924177E9,
        "sum" : 8.03279763E9,
        "standardDeviation" : 3.7440792118518114E7
      } ],
      "22" : [ {
        "mean" : 4.601517969E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.601517969E9,
        "min" : 4.601517969E9,
        "sum" : 4.601517969E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.269186493E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.269186493E9,
        "min" : 4.269186493E9,
        "sum" : 4.269186493E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.066655239E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.066655239E9,
        "min" : 4.066655239E9,
        "sum" : 4.066655239E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.133386102E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.133386102E9,
        "min" : 4.133386102E9,
        "sum" : 4.133386102E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.991902496E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.991902496E9,
        "min" : 3.991902496E9,
        "sum" : 3.991902496E9,
        "standardDeviation" : 0.0
      } ],
      "23" : [ {
        "mean" : 4.583447883E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.583447883E9,
        "min" : 4.583447883E9,
        "sum" : 4.583447883E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.464959288E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.464959288E9,
        "min" : 4.464959288E9,
        "sum" : 4.464959288E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.968496705E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.968496705E9,
        "min" : 3.968496705E9,
        "sum" : 3.968496705E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.042278854E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.042278854E9,
        "min" : 4.042278854E9,
        "sum" : 4.042278854E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.995359874E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.995359874E9,
        "min" : 3.995359874E9,
        "sum" : 3.995359874E9,
        "standardDeviation" : 0.0
      } ],
      "24" : [ {
        "mean" : 4.779930801E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.779930801E9,
        "min" : 4.779930801E9,
        "sum" : 4.779930801E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.41435082E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.41435082E9,
        "min" : 4.41435082E9,
        "sum" : 4.41435082E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.195361398E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.195361398E9,
        "min" : 4.195361398E9,
        "sum" : 4.195361398E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.333152143E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.333152143E9,
        "min" : 4.333152143E9,
        "sum" : 4.333152143E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.2503567E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.2503567E9,
        "min" : 4.2503567E9,
        "sum" : 4.2503567E9,
        "standardDeviation" : 0.0
      } ],
      "25" : [ {
        "mean" : 4.582444985E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.582444985E9,
        "min" : 4.582444985E9,
        "sum" : 4.582444985E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.180608646E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.180608646E9,
        "min" : 4.180608646E9,
        "sum" : 4.180608646E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 3.982128694E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 3.982128694E9,
        "min" : 3.982128694E9,
        "sum" : 3.982128694E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.0320303915E9,
        "variance" : 5.835651079253799E15,
        "n" : 2,
        "max" : 4.086047292E9,
        "min" : 3.978013491E9,
        "sum" : 8.064060783E9,
        "standardDeviation" : 7.639143328445801E7
      } ],
      "26" : [ {
        "mean" : 4.588192917E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.588192917E9,
        "min" : 4.588192917E9,
        "sum" : 4.588192917E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.329396497E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.329396497E9,
        "min" : 4.329396497E9,
        "sum" : 4.329396497E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.031919343E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.031919343E9,
        "min" : 4.031919343E9,
        "sum" : 4.031919343E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.021983176E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.021983176E9,
        "min" : 4.021983176E9,
        "sum" : 4.021983176E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.066565159E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.066565159E9,
        "min" : 4.066565159E9,
        "sum" : 4.066565159E9,
        "standardDeviation" : 0.0
      } ],
      "27" : [ {
        "mean" : 4.722245798E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.722245798E9,
        "min" : 4.722245798E9,
        "sum" : 4.722245798E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.347753133E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.347753133E9,
        "min" : 4.347753133E9,
        "sum" : 4.347753133E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.030563628E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.030563628E9,
        "min" : 4.030563628E9,
        "sum" : 4.030563628E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.028789944E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.028789944E9,
        "min" : 4.028789944E9,
        "sum" : 4.028789944E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.051921736E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.051921736E9,
        "min" : 4.051921736E9,
        "sum" : 4.051921736E9,
        "standardDeviation" : 0.0
      } ],
      "28" : [ {
        "mean" : 4.736299733E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.736299733E9,
        "min" : 4.736299733E9,
        "sum" : 4.736299733E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.475076064E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.475076064E9,
        "min" : 4.475076064E9,
        "sum" : 4.475076064E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.123690433E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.123690433E9,
        "min" : 4.123690433E9,
        "sum" : 4.123690433E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.228182253E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.228182253E9,
        "min" : 4.228182253E9,
        "sum" : 4.228182253E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.053158469E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.053158469E9,
        "min" : 4.053158469E9,
        "sum" : 4.053158469E9,
        "standardDeviation" : 0.0
      } ],
      "29" : [ {
        "mean" : 4.724662187E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.724662187E9,
        "min" : 4.724662187E9,
        "sum" : 4.724662187E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.393121894E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.393121894E9,
        "min" : 4.393121894E9,
        "sum" : 4.393121894E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.149570218E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.149570218E9,
        "min" : 4.149570218E9,
        "sum" : 4.149570218E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.179775488E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.179775488E9,
        "min" : 4.179775488E9,
        "sum" : 4.179775488E9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4.145395663E9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 4.145395663E9,
        "min" : 4.145395663E9,
        "sum" : 4.145395663E9,
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
      "meanOld" : 331.5982789028766,
      "meanCurrent" : 844126.6904761905,
      "deviationOld" : 35.527507634491116,
      "deviationCurrent" : 97534.36704559643,
      "vms" : 29,
      "callsOld" : 1350,
      "calls" : 450,
      "tvalue" : -46.58845359970442,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 217.90070960879987,
    "inVMDeviation" : 679864.7905605723,
    "ess" : 1,
    "values" : [ 1041525.2333333333, 870488.7777777778, 848839.7111111111, 775766.2571428572, 840649.5555555555, 748146.1, 754785.8, 1943516.2571428572, 1170374.3714285714, 909051.0444444445, 849648.9111111112, 744492.3777777777, 799546.9142857143, 989612.1238095239, 804061.638095238, 840060.0666666667, 768306.2, 781197.1777777779, 835345.6111111112, 877057.7444444444, 794617.5619047619, 815391.3333333334, 992573.6222222222, 780321.3222222221, 847200.9238095238, 838627.488888889, 828857.2888888889, 788800.2666666667, 719873.1333333333, 824455.4666666667 ],
    "valuesPredecessor" : [ 346.4888888888889, 320.55555555555554, 329.4952380952381, 302.9861111111111, 328.3388888888889, 365.4166666666667, 319.8277777777778, 281.88055555555553, 281.69135802469134, 321.43888888888887, 327.18611111111113, 791.3, 329.6388888888889, 335.3833333333333, 300.875, 384.71666666666664, 288.77222222222224, 337.5527777777778, 441.6388888888889, 329.925, 328.7583333333333, 336.96666666666664, 288.1968253968254, 333.125, 369.27222222222224, 301.55555555555554, 330.31944444444446, 376.4972222222222, 381.71666666666664, 296.1333333333333 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 5459588.5,
          "variance" : 4.813630066654671E13,
          "n" : 1,
          "max" : 1.5286432E7,
          "min" : 878396.0,
          "sum" : 5459588.5,
          "standardDeviation" : 6938032.910454282
        }, {
          "mean" : 773762.0,
          "variance" : 2.0540226602E10,
          "n" : 5,
          "max" : 984230.0,
          "min" : 625300.0,
          "sum" : 3868810.0,
          "standardDeviation" : 143318.6191742022
        }, {
          "mean" : 758994.25,
          "variance" : 3.0092366810916676E10,
          "n" : 4,
          "max" : 945256.0,
          "min" : 563838.0,
          "sum" : 3035977.0,
          "standardDeviation" : 173471.51584890435
        }, {
          "mean" : 651700.6,
          "variance" : 3.9569255273000007E9,
          "n" : 5,
          "max" : 748886.0,
          "min" : 578673.0,
          "sum" : 3258503.0,
          "standardDeviation" : 62904.097857770765
        } ],
        "1" : [ {
          "mean" : 2311610.6666666665,
          "variance" : 3.7711249951730664E12,
          "n" : 1,
          "max" : 5989029.0,
          "min" : 1030598.0,
          "sum" : 2311610.6666666665,
          "standardDeviation" : 1941938.4632817453
        }, {
          "mean" : 977007.0,
          "variance" : 5.43570547895E10,
          "n" : 5,
          "max" : 1238079.0,
          "min" : 722769.0,
          "sum" : 4885035.0,
          "standardDeviation" : 233145.99458172126
        }, {
          "mean" : 727112.75,
          "variance" : 1.9739566720250004E10,
          "n" : 4,
          "max" : 869239.0,
          "min" : 597740.0,
          "sum" : 2908451.0,
          "standardDeviation" : 140497.56837842427
        }, {
          "mean" : 590447.0,
          "variance" : 1.9611712645000012E9,
          "n" : 5,
          "max" : 644172.0,
          "min" : 530647.0,
          "sum" : 2952235.0,
          "standardDeviation" : 44285.11335087674
        } ],
        "2" : [ {
          "mean" : 2007097.6666666665,
          "variance" : 2.7402620404222666E12,
          "n" : 1,
          "max" : 5007840.0,
          "min" : 906433.0,
          "sum" : 2007097.6666666665,
          "standardDeviation" : 1655373.6860365598
        }, {
          "mean" : 906292.2,
          "variance" : 1.1337274811999998E9,
          "n" : 5,
          "max" : 955134.0,
          "min" : 866336.0,
          "sum" : 4531461.0,
          "standardDeviation" : 33670.86992045201
        }, {
          "mean" : 772345.5,
          "variance" : 1.4476540503E10,
          "n" : 4,
          "max" : 944496.0,
          "min" : 664362.0,
          "sum" : 3089382.0,
          "standardDeviation" : 120318.49609681797
        }, {
          "mean" : 620931.0,
          "variance" : 5.015457576000001E9,
          "n" : 5,
          "max" : 687380.0,
          "min" : 521621.0,
          "sum" : 3104655.0,
          "standardDeviation" : 70819.89534022202
        } ],
        "3" : [ {
          "mean" : 1445881.4285714286,
          "variance" : 5.544336455989524E11,
          "n" : 2,
          "max" : 3053101.0,
          "min" : 938811.0,
          "sum" : 2891762.8571428573,
          "standardDeviation" : 744603.0120802309
        }, {
          "mean" : 685793.25,
          "variance" : 3.876386584916668E9,
          "n" : 4,
          "max" : 748852.0,
          "min" : 609546.0,
          "sum" : 2743173.0,
          "standardDeviation" : 62260.63431187212
        }, {
          "mean" : 756555.8,
          "variance" : 9.906375069700003E9,
          "n" : 5,
          "max" : 875181.0,
          "min" : 646883.0,
          "sum" : 3782779.0,
          "standardDeviation" : 99530.77448558311
        }, {
          "mean" : 554694.75,
          "variance" : 1.7400690262499998E9,
          "n" : 4,
          "max" : 589437.0,
          "min" : 498480.0,
          "sum" : 2218779.0,
          "standardDeviation" : 41714.13460986575
        } ],
        "4" : [ {
          "mean" : 2815866.333333333,
          "variance" : 1.0952031893627066E13,
          "n" : 1,
          "max" : 9312372.0,
          "min" : 906702.0,
          "sum" : 2815866.333333333,
          "standardDeviation" : 3309385.425366327
        }, {
          "mean" : 822766.0,
          "variance" : 2.96330620585E10,
          "n" : 5,
          "max" : 988026.0,
          "min" : 583139.0,
          "sum" : 4113830.0,
          "standardDeviation" : 172142.5631809286
        }, {
          "mean" : 601227.5,
          "variance" : 2.146722693666667E9,
          "n" : 4,
          "max" : 668170.0,
          "min" : 561369.0,
          "sum" : 2404910.0,
          "standardDeviation" : 46332.73889666644
        }, {
          "mean" : 655027.4,
          "variance" : 1.1374935772800003E10,
          "n" : 5,
          "max" : 834752.0,
          "min" : 560262.0,
          "sum" : 3275137.0,
          "standardDeviation" : 106653.34393632486
        } ],
        "5" : [ {
          "mean" : 1377768.5,
          "variance" : 2.9651969358510004E11,
          "n" : 1,
          "max" : 2419449.0,
          "min" : 1022535.0,
          "sum" : 1377768.5,
          "standardDeviation" : 544536.2188000905
        }, {
          "mean" : 789512.8,
          "variance" : 1.08894386382E10,
          "n" : 5,
          "max" : 901745.0,
          "min" : 683465.0,
          "sum" : 3947564.0,
          "standardDeviation" : 104352.47308137934
        }, {
          "mean" : 715685.0,
          "variance" : 1.4404188869999994E10,
          "n" : 4,
          "max" : 839061.0,
          "min" : 552618.0,
          "sum" : 2862740.0,
          "standardDeviation" : 120017.45235589695
        }, {
          "mean" : 606823.8,
          "variance" : 4.443986266199998E9,
          "n" : 5,
          "max" : 690823.0,
          "min" : 527274.0,
          "sum" : 3034119.0,
          "standardDeviation" : 66663.23024126567
        } ],
        "6" : [ {
          "mean" : 843011.5,
          "variance" : 8.030820621100001E9,
          "n" : 6,
          "max" : 966906.0,
          "min" : 688912.0,
          "sum" : 5058069.0,
          "standardDeviation" : 89614.84598603069
        }, {
          "mean" : 816504.5,
          "variance" : 1.5202971627000002E10,
          "n" : 4,
          "max" : 979682.0,
          "min" : 714189.0,
          "sum" : 3266018.0,
          "standardDeviation" : 123300.33100928806
        }, {
          "mean" : 555023.0,
          "variance" : 6.413931780000001E8,
          "n" : 4,
          "max" : 586269.0,
          "min" : 526527.0,
          "sum" : 2220092.0,
          "standardDeviation" : 25325.741410667528
        }, {
          "mean" : 777608.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 777608.0,
          "min" : 777608.0,
          "sum" : 777608.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 5927864.428571428,
          "variance" : 1.4634554628270897E14,
          "n" : 2,
          "max" : 3.3293534E7,
          "min" : 858803.0,
          "sum" : 1.1855728857142856E7,
          "standardDeviation" : 1.2097336330064936E7
        }, {
          "mean" : 744952.0,
          "variance" : 5.573491220666667E9,
          "n" : 4,
          "max" : 834048.0,
          "min" : 655366.0,
          "sum" : 2979808.0,
          "standardDeviation" : 74655.81839794315
        }, {
          "mean" : 767403.5,
          "variance" : 8.290902727000004E9,
          "n" : 4,
          "max" : 858842.0,
          "min" : 684364.0,
          "sum" : 3069614.0,
          "standardDeviation" : 91054.39433108104
        }, {
          "mean" : 2249518.6,
          "variance" : 1.1232876687061305E13,
          "n" : 5,
          "max" : 8244059.0,
          "min" : 703989.0,
          "sum" : 1.1247593E7,
          "standardDeviation" : 3351548.4014200517
        } ],
        "8" : [ {
          "mean" : 1448629.2857142857,
          "variance" : 6.042640016989047E11,
          "n" : 2,
          "max" : 3067761.0,
          "min" : 963182.0,
          "sum" : 2897258.5714285714,
          "standardDeviation" : 777344.1977006741
        }, {
          "mean" : 846442.0,
          "variance" : 1.4875350359999996E10,
          "n" : 4,
          "max" : 958194.0,
          "min" : 692898.0,
          "sum" : 3385768.0,
          "standardDeviation" : 121964.54550401111
        }, {
          "mean" : 782364.5,
          "variance" : 2.9353949796333344E10,
          "n" : 4,
          "max" : 945381.0,
          "min" : 542020.0,
          "sum" : 3129458.0,
          "standardDeviation" : 171329.9442489063
        }, {
          "mean" : 1628626.2,
          "variance" : 5.788423477438199E12,
          "n" : 5,
          "max" : 5931750.0,
          "min" : 494926.0,
          "sum" : 8143131.0,
          "standardDeviation" : 2405914.2705919924
        } ],
        "9" : [ {
          "mean" : 3153125.666666667,
          "variance" : 1.082921675985627E13,
          "n" : 1,
          "max" : 7609441.0,
          "min" : 980701.0,
          "sum" : 3153125.666666667,
          "standardDeviation" : 3290777.531200836
        }, {
          "mean" : 851410.0,
          "variance" : 1.1081894273400002E11,
          "n" : 5,
          "max" : 1284263.0,
          "min" : 566719.0,
          "sum" : 4257050.0,
          "standardDeviation" : 332894.79229029705
        }, {
          "mean" : 797138.5,
          "variance" : 3.2287020201E10,
          "n" : 4,
          "max" : 1048729.0,
          "min" : 653413.0,
          "sum" : 3188554.0,
          "standardDeviation" : 179685.8931608155
        }, {
          "mean" : 613699.25,
          "variance" : 9.82834079425E9,
          "n" : 4,
          "max" : 700785.0,
          "min" : 512628.0,
          "sum" : 2454797.0,
          "standardDeviation" : 99137.98865344202
        }, {
          "mean" : 582239.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 582239.0,
          "min" : 582239.0,
          "sum" : 582239.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1498486.6666666667,
          "variance" : 4.790898662202667E11,
          "n" : 1,
          "max" : 2624638.0,
          "min" : 899716.0,
          "sum" : 1498486.6666666667,
          "standardDeviation" : 692163.1788966145
        }, {
          "mean" : 890223.8,
          "variance" : 1.75673292317E10,
          "n" : 5,
          "max" : 1016400.0,
          "min" : 735910.0,
          "sum" : 4451119.0,
          "standardDeviation" : 132541.80182757438
        }, {
          "mean" : 742680.5,
          "variance" : 7.116238715000001E9,
          "n" : 4,
          "max" : 847374.0,
          "min" : 642695.0,
          "sum" : 2970722.0,
          "standardDeviation" : 84357.80174352578
        }, {
          "mean" : 810473.75,
          "variance" : 1.4345807447583332E10,
          "n" : 4,
          "max" : 958488.0,
          "min" : 694273.0,
          "sum" : 3241895.0,
          "standardDeviation" : 119773.98485306955
        }, {
          "mean" : 582511.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 582511.0,
          "min" : 582511.0,
          "sum" : 582511.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1714310.6666666665,
          "variance" : 3.5510976227586664E11,
          "n" : 1,
          "max" : 2762817.0,
          "min" : 1155397.0,
          "sum" : 1714310.6666666665,
          "standardDeviation" : 595910.8677276046
        }, {
          "mean" : 776909.8,
          "variance" : 2.27483047972E10,
          "n" : 5,
          "max" : 994671.0,
          "min" : 629528.0,
          "sum" : 3884549.0,
          "standardDeviation" : 150825.41164273347
        }, {
          "mean" : 677986.5,
          "variance" : 5.397225053666667E9,
          "n" : 4,
          "max" : 751743.0,
          "min" : 612994.0,
          "sum" : 2711946.0,
          "standardDeviation" : 73465.80873894105
        }, {
          "mean" : 571316.0,
          "variance" : 1.422650215E9,
          "n" : 5,
          "max" : 622636.0,
          "min" : 535739.0,
          "sum" : 2856580.0,
          "standardDeviation" : 37718.03567260628
        } ],
        "12" : [ {
          "mean" : 1374289.857142857,
          "variance" : 9.31894103943143E11,
          "n" : 2,
          "max" : 3467023.0,
          "min" : 669818.0,
          "sum" : 2748579.714285714,
          "standardDeviation" : 965346.6237280488
        }, {
          "mean" : 877724.0,
          "variance" : 1.2178047656E10,
          "n" : 4,
          "max" : 1038676.0,
          "min" : 790982.0,
          "sum" : 3510896.0,
          "standardDeviation" : 110354.1918370118
        }, {
          "mean" : 626018.2,
          "variance" : 2.0354359297000005E9,
          "n" : 5,
          "max" : 698703.0,
          "min" : 592605.0,
          "sum" : 3130091.0,
          "standardDeviation" : 45115.805763612385
        }, {
          "mean" : 650909.25,
          "variance" : 3.890215495583332E9,
          "n" : 4,
          "max" : 687956.0,
          "min" : 557575.0,
          "sum" : 2603637.0,
          "standardDeviation" : 62371.59205586572
        } ],
        "13" : [ {
          "mean" : 2949086.4285714286,
          "variance" : 2.0330790715404285E13,
          "n" : 2,
          "max" : 1.3078185E7,
          "min" : 780799.0,
          "sum" : 5898172.857142857,
          "standardDeviation" : 4508967.810420061
        }, {
          "mean" : 746697.25,
          "variance" : 1.6241258966250002E10,
          "n" : 4,
          "max" : 848574.0,
          "min" : 571390.0,
          "sum" : 2986789.0,
          "standardDeviation" : 127441.19807287595
        }, {
          "mean" : 732688.5,
          "variance" : 5.921435140333335E9,
          "n" : 4,
          "max" : 812419.0,
          "min" : 661913.0,
          "sum" : 2930754.0,
          "standardDeviation" : 76950.86185568901
        }, {
          "mean" : 605693.2,
          "variance" : 1.9019809867E9,
          "n" : 5,
          "max" : 678312.0,
          "min" : 562122.0,
          "sum" : 3028466.0,
          "standardDeviation" : 43611.70699135726
        } ],
        "14" : [ {
          "mean" : 1454126.285714286,
          "variance" : 7.282946802032382E11,
          "n" : 2,
          "max" : 3292336.0,
          "min" : 848749.0,
          "sum" : 2908252.571428572,
          "standardDeviation" : 853401.8280993064
        }, {
          "mean" : 881931.5,
          "variance" : 1.0185214080999998E10,
          "n" : 4,
          "max" : 995531.0,
          "min" : 771939.0,
          "sum" : 3527726.0,
          "standardDeviation" : 100921.82162941768
        }, {
          "mean" : 668318.0,
          "variance" : 8.637580580666672E9,
          "n" : 4,
          "max" : 758414.0,
          "min" : 547804.0,
          "sum" : 2673272.0,
          "standardDeviation" : 92938.58499389084
        }, {
          "mean" : 590334.8,
          "variance" : 2.6274753292000012E9,
          "n" : 5,
          "max" : 680659.0,
          "min" : 557103.0,
          "sum" : 2951674.0,
          "standardDeviation" : 51258.90487710405
        } ],
        "15" : [ {
          "mean" : 1082715.5,
          "variance" : 5.211694335103E11,
          "n" : 6,
          "max" : 2529602.0,
          "min" : 640382.0,
          "sum" : 6496293.0,
          "standardDeviation" : 721920.6559659448
        }, {
          "mean" : 707767.5,
          "variance" : 1.972298109166667E10,
          "n" : 4,
          "max" : 863217.0,
          "min" : 578989.0,
          "sum" : 2831070.0,
          "standardDeviation" : 140438.53136396248
        }, {
          "mean" : 674527.5,
          "variance" : 9.540306569666666E9,
          "n" : 4,
          "max" : 810043.0,
          "min" : 588510.0,
          "sum" : 2698110.0,
          "standardDeviation" : 97674.4929327338
        }, {
          "mean" : 575428.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 575428.0,
          "min" : 575428.0,
          "sum" : 575428.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 2049486.0,
          "variance" : 2.2786246998172E12,
          "n" : 1,
          "max" : 4703356.0,
          "min" : 866848.0,
          "sum" : 2049486.0,
          "standardDeviation" : 1509511.410959586
        }, {
          "mean" : 681864.4,
          "variance" : 1.8588723433000007E9,
          "n" : 5,
          "max" : 731042.0,
          "min" : 635322.0,
          "sum" : 3409322.0,
          "standardDeviation" : 43114.641866771904
        }, {
          "mean" : 735486.75,
          "variance" : 7.184614166916668E9,
          "n" : 4,
          "max" : 843328.0,
          "min" : 645159.0,
          "sum" : 2941947.0,
          "standardDeviation" : 84762.1033653405
        }, {
          "mean" : 624767.6,
          "variance" : 8.603988999800001E9,
          "n" : 5,
          "max" : 746390.0,
          "min" : 529511.0,
          "sum" : 3123838.0,
          "standardDeviation" : 92757.6897071073
        } ],
        "17" : [ {
          "mean" : 1512931.6666666667,
          "variance" : 4.983828812106666E11,
          "n" : 1,
          "max" : 2887175.0,
          "min" : 962311.0,
          "sum" : 1512931.6666666667,
          "standardDeviation" : 705962.3794584713
        }, {
          "mean" : 821999.4,
          "variance" : 2.2549733026799995E10,
          "n" : 5,
          "max" : 1076190.0,
          "min" : 698766.0,
          "sum" : 4109997.0,
          "standardDeviation" : 150165.68525065904
        }, {
          "mean" : 681928.5,
          "variance" : 1.4559415909999993E9,
          "n" : 4,
          "max" : 738903.0,
          "min" : 659110.0,
          "sum" : 2727714.0,
          "standardDeviation" : 38156.80268313894
        }, {
          "mean" : 670964.25,
          "variance" : 8.509152591583333E9,
          "n" : 4,
          "max" : 753239.0,
          "min" : 561089.0,
          "sum" : 2683857.0,
          "standardDeviation" : 92245.06811522951
        }, {
          "mean" : 683458.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 683458.0,
          "min" : 683458.0,
          "sum" : 683458.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1555760.1666666667,
          "variance" : 7.053181152349667E11,
          "n" : 1,
          "max" : 3224648.0,
          "min" : 917013.0,
          "sum" : 1555760.1666666667,
          "standardDeviation" : 839832.1946883
        }, {
          "mean" : 896825.0,
          "variance" : 3.58410525985E10,
          "n" : 5,
          "max" : 1077185.0,
          "min" : 655395.0,
          "sum" : 4484125.0,
          "standardDeviation" : 189317.3330640911
        }, {
          "mean" : 743991.0,
          "variance" : 1.7102561348666664E10,
          "n" : 4,
          "max" : 832104.0,
          "min" : 549388.0,
          "sum" : 2975964.0,
          "standardDeviation" : 130776.76150091294
        }, {
          "mean" : 660971.75,
          "variance" : 1.1532695520916668E10,
          "n" : 4,
          "max" : 768251.0,
          "min" : 565852.0,
          "sum" : 2643887.0,
          "standardDeviation" : 107390.38840099549
        }, {
          "mean" : 870448.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 870448.0,
          "min" : 870448.0,
          "sum" : 870448.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 1815750.1666666665,
          "variance" : 5.988447041525667E11,
          "n" : 1,
          "max" : 2860059.0,
          "min" : 1068415.0,
          "sum" : 1815750.1666666665,
          "standardDeviation" : 773850.56965319
        }, {
          "mean" : 916369.8,
          "variance" : 1.2266212396999989E9,
          "n" : 5,
          "max" : 956459.0,
          "min" : 878800.0,
          "sum" : 4581849.0,
          "standardDeviation" : 35023.15290918279
        }, {
          "mean" : 824308.5,
          "variance" : 5.547831843333334E8,
          "n" : 4,
          "max" : 844516.0,
          "min" : 792076.0,
          "sum" : 3297234.0,
          "standardDeviation" : 23553.8358730236
        }, {
          "mean" : 692206.6,
          "variance" : 3.2015721059799988E10,
          "n" : 5,
          "max" : 989640.0,
          "min" : 547789.0,
          "sum" : 3461033.0,
          "standardDeviation" : 178929.37450234377
        } ],
        "20" : [ {
          "mean" : 1542045.7142857143,
          "variance" : 9.980127069712379E11,
          "n" : 2,
          "max" : 3061790.0,
          "min" : 741393.0,
          "sum" : 3084091.4285714286,
          "standardDeviation" : 999005.8593277809
        }, {
          "mean" : 768893.0,
          "variance" : 2.691935107666666E10,
          "n" : 4,
          "max" : 932342.0,
          "min" : 593946.0,
          "sum" : 3075572.0,
          "standardDeviation" : 164071.17686134472
        }, {
          "mean" : 622608.75,
          "variance" : 1.4497152604249996E10,
          "n" : 4,
          "max" : 785561.0,
          "min" : 526157.0,
          "sum" : 2490435.0,
          "standardDeviation" : 120404.12204011122
        }, {
          "mean" : 653833.0,
          "variance" : 1.5149589607E10,
          "n" : 5,
          "max" : 758864.0,
          "min" : 488253.0,
          "sum" : 3269165.0,
          "standardDeviation" : 123083.66913201768
        } ],
        "21" : [ {
          "mean" : 1404199.0,
          "variance" : 4.5904201217933325E11,
          "n" : 2,
          "max" : 2810110.0,
          "min" : 945731.0,
          "sum" : 2808398.0,
          "standardDeviation" : 677526.3922382162
        }, {
          "mean" : 748051.75,
          "variance" : 2.5447059248250008E10,
          "n" : 4,
          "max" : 972236.0,
          "min" : 623819.0,
          "sum" : 2992207.0,
          "standardDeviation" : 159521.34417766798
        }, {
          "mean" : 806981.75,
          "variance" : 1.985193263691666E10,
          "n" : 4,
          "max" : 942427.0,
          "min" : 670476.0,
          "sum" : 3227927.0,
          "standardDeviation" : 140896.88654089082
        }, {
          "mean" : 640467.6,
          "variance" : 7.721263073299999E9,
          "n" : 5,
          "max" : 793894.0,
          "min" : 574105.0,
          "sum" : 3202338.0,
          "standardDeviation" : 87870.71795143135
        } ],
        "22" : [ {
          "mean" : 4463073.333333333,
          "variance" : 5.101102456902906E13,
          "n" : 1,
          "max" : 1.8948077E7,
          "min" : 981605.0,
          "sum" : 4463073.333333333,
          "standardDeviation" : 7142200.261056047
        }, {
          "mean" : 746355.4,
          "variance" : 6.291278400799998E9,
          "n" : 5,
          "max" : 877967.0,
          "min" : 677372.0,
          "sum" : 3731777.0,
          "standardDeviation" : 79317.57939322152
        }, {
          "mean" : 681535.25,
          "variance" : 6.146981420250001E9,
          "n" : 4,
          "max" : 759575.0,
          "min" : 613805.0,
          "sum" : 2726141.0,
          "standardDeviation" : 78402.6875830797
        }, {
          "mean" : 793522.6,
          "variance" : 2.0134171360800007E10,
          "n" : 5,
          "max" : 988624.0,
          "min" : 644518.0,
          "sum" : 3967613.0,
          "standardDeviation" : 141894.93070860568
        } ],
        "23" : [ {
          "mean" : 1775511.8333333333,
          "variance" : 2.2337641881197666E12,
          "n" : 1,
          "max" : 4781458.0,
          "min" : 914731.0,
          "sum" : 1775511.8333333333,
          "standardDeviation" : 1494578.2643005908
        }, {
          "mean" : 771914.8,
          "variance" : 3.6283256655700005E10,
          "n" : 5,
          "max" : 1018770.0,
          "min" : 555866.0,
          "sum" : 3859574.0,
          "standardDeviation" : 190481.64388124124
        }, {
          "mean" : 634289.0,
          "variance" : 5.290314724666667E9,
          "n" : 4,
          "max" : 715525.0,
          "min" : 567518.0,
          "sum" : 2537156.0,
          "standardDeviation" : 72734.5497316555
        }, {
          "mean" : 704299.0,
          "variance" : 7.942346008666666E9,
          "n" : 4,
          "max" : 801685.0,
          "min" : 627712.0,
          "sum" : 2817196.0,
          "standardDeviation" : 89119.84071275411
        }, {
          "mean" : 715382.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 715382.0,
          "min" : 715382.0,
          "sum" : 715382.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1761319.4285714284,
          "variance" : 1.6342746121066194E12,
          "n" : 2,
          "max" : 4642082.0,
          "min" : 1127796.0,
          "sum" : 3522638.857142857,
          "standardDeviation" : 1278387.5046740011
        }, {
          "mean" : 727990.25,
          "variance" : 2.0809159162249996E10,
          "n" : 4,
          "max" : 916131.0,
          "min" : 602469.0,
          "sum" : 2911961.0,
          "standardDeviation" : 144253.8012055488
        }, {
          "mean" : 784840.0,
          "variance" : 3.1983893347999996E10,
          "n" : 5,
          "max" : 1095311.0,
          "min" : 639657.0,
          "sum" : 3924200.0,
          "standardDeviation" : 178840.41307266094
        }, {
          "mean" : 587303.5,
          "variance" : 1.891037307E9,
          "n" : 4,
          "max" : 640933.0,
          "min" : 537388.0,
          "sum" : 2349214.0,
          "standardDeviation" : 43486.05876599994
        } ],
        "25" : [ {
          "mean" : 1467609.3333333335,
          "variance" : 3.6208177646506665E11,
          "n" : 1,
          "max" : 2637599.0,
          "min" : 1016302.0,
          "sum" : 1467609.3333333335,
          "standardDeviation" : 601732.312964051
        }, {
          "mean" : 897383.6,
          "variance" : 3.54016768853E10,
          "n" : 5,
          "max" : 1201937.0,
          "min" : 752774.0,
          "sum" : 4486918.0,
          "standardDeviation" : 188153.33344190317
        }, {
          "mean" : 714447.0,
          "variance" : 2.3553022481999996E10,
          "n" : 4,
          "max" : 934134.0,
          "min" : 579662.0,
          "sum" : 2857788.0,
          "standardDeviation" : 153469.93999477552
        }, {
          "mean" : 753419.4,
          "variance" : 1.8589842867799995E10,
          "n" : 5,
          "max" : 977076.0,
          "min" : 607606.0,
          "sum" : 3767097.0,
          "standardDeviation" : 136344.57403138562
        } ],
        "26" : [ {
          "mean" : 2854517.3333333335,
          "variance" : 1.3670814717029066E13,
          "n" : 1,
          "max" : 1.0325474E7,
          "min" : 745581.0,
          "sum" : 2854517.3333333335,
          "standardDeviation" : 3697406.4852311094
        }, {
          "mean" : 809282.8,
          "variance" : 2.8100861087000017E9,
          "n" : 5,
          "max" : 888122.0,
          "min" : 749929.0,
          "sum" : 4046414.0,
          "standardDeviation" : 53010.24531824015
        }, {
          "mean" : 601217.25,
          "variance" : 2.472252857583332E9,
          "n" : 4,
          "max" : 651259.0,
          "min" : 552475.0,
          "sum" : 2404869.0,
          "standardDeviation" : 49721.75436952453
        }, {
          "mean" : 625411.8,
          "variance" : 2.3582495067000012E9,
          "n" : 5,
          "max" : 686119.0,
          "min" : 555295.0,
          "sum" : 3127059.0,
          "standardDeviation" : 48561.81119665947
        } ],
        "27" : [ {
          "mean" : 1456822.0,
          "variance" : 5.285853893295999E11,
          "n" : 1,
          "max" : 2883973.0,
          "min" : 949305.0,
          "sum" : 1456822.0,
          "standardDeviation" : 727038.781173054
        }, {
          "mean" : 866450.4,
          "variance" : 2.30406686838E10,
          "n" : 5,
          "max" : 1065771.0,
          "min" : 676320.0,
          "sum" : 4332252.0,
          "standardDeviation" : 151791.53034276978
        }, {
          "mean" : 715346.75,
          "variance" : 1.3242050938250002E10,
          "n" : 4,
          "max" : 872836.0,
          "min" : 598378.0,
          "sum" : 2861387.0,
          "standardDeviation" : 115074.11063419087
        }, {
          "mean" : 616350.25,
          "variance" : 1.6694650749166667E9,
          "n" : 4,
          "max" : 656710.0,
          "min" : 561735.0,
          "sum" : 2465401.0,
          "standardDeviation" : 40859.08803334537
        }, {
          "mean" : 716142.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 716142.0,
          "min" : 716142.0,
          "sum" : 716142.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 802924.3333333333,
          "variance" : 1.7372525729466663E10,
          "n" : 6,
          "max" : 960479.0,
          "min" : 652706.0,
          "sum" : 4817546.0,
          "standardDeviation" : 131804.87748739295
        }, {
          "mean" : 617618.75,
          "variance" : 3.3370885162500014E9,
          "n" : 4,
          "max" : 685397.0,
          "min" : 560848.0,
          "sum" : 2470475.0,
          "standardDeviation" : 57767.538603007844
        }, {
          "mean" : 709737.75,
          "variance" : 6.057034340249999E9,
          "n" : 4,
          "max" : 773327.0,
          "min" : 607838.0,
          "sum" : 2838951.0,
          "standardDeviation" : 77826.95124601759
        }, {
          "mean" : 671125.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 671125.0,
          "min" : 671125.0,
          "sum" : 671125.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1379838.0,
          "variance" : 4.3077701944199994E11,
          "n" : 1,
          "max" : 2656300.0,
          "min" : 974945.0,
          "sum" : 1379838.0,
          "standardDeviation" : 656336.0567895077
        }, {
          "mean" : 900962.0,
          "variance" : 7.757835602499999E9,
          "n" : 5,
          "max" : 1023073.0,
          "min" : 778739.0,
          "sum" : 4504810.0,
          "standardDeviation" : 88078.57629696338
        }, {
          "mean" : 754378.25,
          "variance" : 1.5663267440916666E10,
          "n" : 4,
          "max" : 919010.0,
          "min" : 644425.0,
          "sum" : 3017513.0,
          "standardDeviation" : 125152.97615684841
        }, {
          "mean" : 692934.2,
          "variance" : 7.8429290687E9,
          "n" : 5,
          "max" : 835435.0,
          "min" : 624287.0,
          "sum" : 3464671.0,
          "standardDeviation" : 88560.3131696134
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 920.0,
          "variance" : 564166.3333333333,
          "n" : 2,
          "max" : 2562.0,
          "min" : 342.0,
          "sum" : 1840.0,
          "standardDeviation" : 751.1100673891499
        }, {
          "mean" : 345.14285714285717,
          "variance" : 11319.809523809527,
          "n" : 7,
          "max" : 459.0,
          "min" : 183.0,
          "sum" : 2416.0,
          "standardDeviation" : 106.39459348956377
        }, {
          "mean" : 270.2,
          "variance" : 8061.200000000001,
          "n" : 5,
          "max" : 378.0,
          "min" : 133.0,
          "sum" : 1351.0,
          "standardDeviation" : 89.78418568990867
        }, {
          "mean" : 277.16666666666663,
          "variance" : 4562.566666666668,
          "n" : 6,
          "max" : 361.0,
          "min" : 196.0,
          "sum" : 1662.9999999999998,
          "standardDeviation" : 67.5467739175356
        }, {
          "mean" : 332.0,
          "variance" : 2403.4999999999995,
          "n" : 5,
          "max" : 408.0,
          "min" : 289.0,
          "sum" : 1660.0,
          "standardDeviation" : 49.02550356702111
        }, {
          "mean" : 390.33333333333337,
          "variance" : 7896.666666666666,
          "n" : 6,
          "max" : 514.0,
          "min" : 271.0,
          "sum" : 2342.0,
          "standardDeviation" : 88.8631907297204
        }, {
          "mean" : 296.2857142857143,
          "variance" : 5933.238095238096,
          "n" : 7,
          "max" : 374.0,
          "min" : 158.0,
          "sum" : 2074.0,
          "standardDeviation" : 77.02751518281046
        }, {
          "mean" : 323.0,
          "variance" : 6000.0,
          "n" : 5,
          "max" : 400.0,
          "min" : 197.0,
          "sum" : 1615.0,
          "standardDeviation" : 77.45966692414834
        }, {
          "mean" : 315.5,
          "variance" : 0.5000000000000001,
          "n" : 2,
          "max" : 316.0,
          "min" : 315.0,
          "sum" : 631.0,
          "standardDeviation" : 0.7071067811865476
        } ],
        "1" : [ {
          "mean" : 890.9999999999999,
          "variance" : 819997.7142857142,
          "n" : 3,
          "max" : 3063.0,
          "min" : 353.0,
          "sum" : 2672.9999999999995,
          "standardDeviation" : 905.5372517382784
        }, {
          "mean" : 295.83333333333337,
          "variance" : 5333.366666666667,
          "n" : 6,
          "max" : 399.0,
          "min" : 217.0,
          "sum" : 1775.0000000000002,
          "standardDeviation" : 73.02990255139785
        }, {
          "mean" : 279.6,
          "variance" : 6590.8,
          "n" : 5,
          "max" : 367.0,
          "min" : 171.0,
          "sum" : 1398.0,
          "standardDeviation" : 81.18374221480555
        }, {
          "mean" : 320.0,
          "variance" : 24780.799999999996,
          "n" : 6,
          "max" : 596.0,
          "min" : 180.0,
          "sum" : 1920.0,
          "standardDeviation" : 157.41918561598519
        }, {
          "mean" : 263.8,
          "variance" : 4445.199999999999,
          "n" : 5,
          "max" : 324.0,
          "min" : 180.0,
          "sum" : 1319.0,
          "standardDeviation" : 66.67233309252046
        }, {
          "mean" : 263.5,
          "variance" : 4460.300000000001,
          "n" : 6,
          "max" : 371.0,
          "min" : 187.0,
          "sum" : 1581.0,
          "standardDeviation" : 66.78547746329288
        }, {
          "mean" : 300.0,
          "variance" : 6221.666666666667,
          "n" : 7,
          "max" : 397.0,
          "min" : 184.0,
          "sum" : 2100.0,
          "standardDeviation" : 78.87754221999229
        }, {
          "mean" : 260.2,
          "variance" : 7924.7,
          "n" : 5,
          "max" : 413.0,
          "min" : 184.0,
          "sum" : 1301.0,
          "standardDeviation" : 89.020784090009
        }, {
          "mean" : 179.0,
          "variance" : 10082.0,
          "n" : 2,
          "max" : 250.0,
          "min" : 108.0,
          "sum" : 358.0,
          "standardDeviation" : 100.40916292848975
        } ],
        "2" : [ {
          "mean" : 901.1428571428571,
          "variance" : 796403.4761904763,
          "n" : 2,
          "max" : 2873.0,
          "min" : 242.0,
          "sum" : 1802.2857142857142,
          "standardDeviation" : 892.4144083274745
        }, {
          "mean" : 435.4285714285714,
          "variance" : 15937.619047619046,
          "n" : 7,
          "max" : 588.0,
          "min" : 226.0,
          "sum" : 3047.9999999999995,
          "standardDeviation" : 126.24428322747548
        }, {
          "mean" : 270.4,
          "variance" : 10200.8,
          "n" : 5,
          "max" : 421.0,
          "min" : 179.0,
          "sum" : 1352.0,
          "standardDeviation" : 100.9990098961371
        }, {
          "mean" : 331.6666666666667,
          "variance" : 29213.466666666664,
          "n" : 6,
          "max" : 545.0,
          "min" : 144.0,
          "sum" : 1990.0,
          "standardDeviation" : 170.919474217149
        }, {
          "mean" : 291.8,
          "variance" : 11001.7,
          "n" : 5,
          "max" : 400.0,
          "min" : 150.0,
          "sum" : 1459.0,
          "standardDeviation" : 104.88898893592216
        }, {
          "mean" : 241.2,
          "variance" : 9629.2,
          "n" : 5,
          "max" : 363.0,
          "min" : 109.0,
          "sum" : 1206.0,
          "standardDeviation" : 98.12848719918188
        }, {
          "mean" : 267.0,
          "variance" : 4163.000000000001,
          "n" : 7,
          "max" : 359.0,
          "min" : 178.0,
          "sum" : 1869.0,
          "standardDeviation" : 64.52131430775415
        }, {
          "mean" : 277.8333333333333,
          "variance" : 13748.166666666666,
          "n" : 6,
          "max" : 435.0,
          "min" : 173.0,
          "sum" : 1667.0,
          "standardDeviation" : 117.25257637539
        }, {
          "mean" : 217.0,
          "variance" : 20000.0,
          "n" : 2,
          "max" : 317.0,
          "min" : 117.0,
          "sum" : 434.0,
          "standardDeviation" : 141.4213562373095
        } ],
        "3" : [ {
          "mean" : 646.125,
          "variance" : 483646.41071428574,
          "n" : 3,
          "max" : 2347.0,
          "min" : 226.0,
          "sum" : 1938.375,
          "standardDeviation" : 695.446914375415
        }, {
          "mean" : 372.0,
          "variance" : 18103.200000000004,
          "n" : 6,
          "max" : 592.0,
          "min" : 197.0,
          "sum" : 2232.0,
          "standardDeviation" : 134.54813265147905
        }, {
          "mean" : 303.4,
          "variance" : 4370.299999999998,
          "n" : 5,
          "max" : 377.0,
          "min" : 203.0,
          "sum" : 1517.0,
          "standardDeviation" : 66.10824456903994
        }, {
          "mean" : 340.0,
          "variance" : 3780.8,
          "n" : 6,
          "max" : 439.0,
          "min" : 278.0,
          "sum" : 2040.0,
          "standardDeviation" : 61.48821025204751
        }, {
          "mean" : 219.6,
          "variance" : 1902.3,
          "n" : 5,
          "max" : 268.0,
          "min" : 162.0,
          "sum" : 1098.0,
          "standardDeviation" : 43.61536426535952
        }, {
          "mean" : 263.6,
          "variance" : 2396.300000000001,
          "n" : 5,
          "max" : 326.0,
          "min" : 199.0,
          "sum" : 1318.0,
          "standardDeviation" : 48.95201732308895
        }, {
          "mean" : 251.71428571428572,
          "variance" : 6006.238095238096,
          "n" : 7,
          "max" : 344.0,
          "min" : 142.0,
          "sum" : 1762.0,
          "standardDeviation" : 77.49992319504643
        }, {
          "mean" : 201.5,
          "variance" : 4178.699999999999,
          "n" : 6,
          "max" : 277.0,
          "min" : 100.0,
          "sum" : 1209.0,
          "standardDeviation" : 64.64286503551648
        }, {
          "mean" : 260.0,
          "variance" : 1058.0,
          "n" : 2,
          "max" : 283.0,
          "min" : 237.0,
          "sum" : 520.0,
          "standardDeviation" : 32.526911934581186
        } ],
        "4" : [ {
          "mean" : 785.75,
          "variance" : 385859.0714285714,
          "n" : 3,
          "max" : 2232.0,
          "min" : 312.0,
          "sum" : 2357.25,
          "standardDeviation" : 621.1755560456089
        }, {
          "mean" : 336.16666666666663,
          "variance" : 28735.76666666667,
          "n" : 6,
          "max" : 613.0,
          "min" : 108.0,
          "sum" : 2016.9999999999998,
          "standardDeviation" : 169.51627257188812
        }, {
          "mean" : 263.8,
          "variance" : 2056.1999999999994,
          "n" : 5,
          "max" : 326.0,
          "min" : 218.0,
          "sum" : 1319.0,
          "standardDeviation" : 45.34534154684469
        }, {
          "mean" : 250.8,
          "variance" : 1960.7,
          "n" : 5,
          "max" : 310.0,
          "min" : 202.0,
          "sum" : 1254.0,
          "standardDeviation" : 44.2797922307682
        }, {
          "mean" : 333.5,
          "variance" : 3205.100000000001,
          "n" : 6,
          "max" : 384.0,
          "min" : 224.0,
          "sum" : 2001.0,
          "standardDeviation" : 56.61360260573426
        }, {
          "mean" : 269.4,
          "variance" : 3644.7999999999993,
          "n" : 5,
          "max" : 358.0,
          "min" : 189.0,
          "sum" : 1347.0,
          "standardDeviation" : 60.37217902312289
        }, {
          "mean" : 258.7142857142857,
          "variance" : 2046.2380952380952,
          "n" : 7,
          "max" : 321.0,
          "min" : 209.0,
          "sum" : 1811.0,
          "standardDeviation" : 45.23536332603172
        }, {
          "mean" : 334.33333333333337,
          "variance" : 7848.266666666666,
          "n" : 6,
          "max" : 458.0,
          "min" : 246.0,
          "sum" : 2006.0000000000002,
          "standardDeviation" : 88.59044342741866
        }, {
          "mean" : 331.5,
          "variance" : 12640.5,
          "n" : 2,
          "max" : 411.0,
          "min" : 252.0,
          "sum" : 663.0,
          "standardDeviation" : 112.42997820866105
        } ],
        "5" : [ {
          "mean" : 805.25,
          "variance" : 823544.5,
          "n" : 3,
          "max" : 3039.0,
          "min" : 361.0,
          "sum" : 2415.75,
          "standardDeviation" : 907.4935261477076
        }, {
          "mean" : 381.1666666666667,
          "variance" : 38835.76666666668,
          "n" : 6,
          "max" : 739.0,
          "min" : 186.0,
          "sum" : 2287.0,
          "standardDeviation" : 197.06792399238054
        }, {
          "mean" : 307.8,
          "variance" : 19023.7,
          "n" : 5,
          "max" : 540.0,
          "min" : 185.0,
          "sum" : 1539.0,
          "standardDeviation" : 137.92642966451353
        }, {
          "mean" : 317.4,
          "variance" : 30944.299999999996,
          "n" : 5,
          "max" : 629.0,
          "min" : 207.0,
          "sum" : 1587.0,
          "standardDeviation" : 175.9099201295936
        }, {
          "mean" : 336.1666666666667,
          "variance" : 34019.76666666666,
          "n" : 6,
          "max" : 682.0,
          "min" : 198.0,
          "sum" : 2017.0,
          "standardDeviation" : 184.4444812583631
        }, {
          "mean" : 315.8,
          "variance" : 1320.1999999999998,
          "n" : 5,
          "max" : 352.0,
          "min" : 263.0,
          "sum" : 1579.0,
          "standardDeviation" : 36.33455655433268
        }, {
          "mean" : 378.2857142857143,
          "variance" : 6476.2380952380945,
          "n" : 7,
          "max" : 522.0,
          "min" : 296.0,
          "sum" : 2648.0,
          "standardDeviation" : 80.47507747891949
        }, {
          "mean" : 280.5,
          "variance" : 3593.4999999999995,
          "n" : 6,
          "max" : 346.0,
          "min" : 172.0,
          "sum" : 1683.0,
          "standardDeviation" : 59.94580886100378
        }, {
          "mean" : 344.0,
          "variance" : 392.0,
          "n" : 2,
          "max" : 358.0,
          "min" : 330.0,
          "sum" : 688.0,
          "standardDeviation" : 19.79898987322333
        } ],
        "6" : [ {
          "mean" : 869.75,
          "variance" : 476685.9285714285,
          "n" : 3,
          "max" : 2533.0,
          "min" : 355.0,
          "sum" : 2609.25,
          "standardDeviation" : 690.4244553688901
        }, {
          "mean" : 360.33333333333337,
          "variance" : 39137.066666666666,
          "n" : 6,
          "max" : 695.0,
          "min" : 189.0,
          "sum" : 2162.0,
          "standardDeviation" : 197.83090422546894
        }, {
          "mean" : 227.6,
          "variance" : 13625.299999999997,
          "n" : 5,
          "max" : 426.0,
          "min" : 128.0,
          "sum" : 1138.0,
          "standardDeviation" : 116.7274603510245
        }, {
          "mean" : 299.2,
          "variance" : 1295.2,
          "n" : 5,
          "max" : 337.0,
          "min" : 242.0,
          "sum" : 1496.0,
          "standardDeviation" : 35.988887173681825
        }, {
          "mean" : 316.8333333333333,
          "variance" : 16185.366666666667,
          "n" : 6,
          "max" : 555.0,
          "min" : 208.0,
          "sum" : 1901.0,
          "standardDeviation" : 127.22172246384132
        }, {
          "mean" : 255.6,
          "variance" : 13083.3,
          "n" : 5,
          "max" : 444.0,
          "min" : 144.0,
          "sum" : 1278.0,
          "standardDeviation" : 114.38225386833396
        }, {
          "mean" : 281.7142857142857,
          "variance" : 4245.238095238094,
          "n" : 7,
          "max" : 336.0,
          "min" : 157.0,
          "sum" : 1972.0,
          "standardDeviation" : 65.15549167367317
        }, {
          "mean" : 208.33333333333334,
          "variance" : 6163.866666666666,
          "n" : 6,
          "max" : 316.0,
          "min" : 88.0,
          "sum" : 1250.0,
          "standardDeviation" : 78.51029656463326
        }, {
          "mean" : 293.0,
          "variance" : 287.99999999999994,
          "n" : 2,
          "max" : 305.0,
          "min" : 281.0,
          "sum" : 586.0,
          "standardDeviation" : 16.97056274847714
        } ],
        "7" : [ {
          "mean" : 785.875,
          "variance" : 503912.41071428574,
          "n" : 3,
          "max" : 2469.0,
          "min" : 198.0,
          "sum" : 2357.625,
          "standardDeviation" : 709.8678825769523
        }, {
          "mean" : 288.28571428571433,
          "variance" : 14491.238095238094,
          "n" : 7,
          "max" : 467.0,
          "min" : 157.0,
          "sum" : 2018.0000000000005,
          "standardDeviation" : 120.37955846088693
        }, {
          "mean" : 178.2,
          "variance" : 3703.7,
          "n" : 5,
          "max" : 264.0,
          "min" : 101.0,
          "sum" : 891.0,
          "standardDeviation" : 60.858031515979874
        }, {
          "mean" : 277.6,
          "variance" : 4017.8000000000006,
          "n" : 5,
          "max" : 351.0,
          "min" : 180.0,
          "sum" : 1388.0,
          "standardDeviation" : 63.38611835410022
        }, {
          "mean" : 248.6,
          "variance" : 8097.300000000001,
          "n" : 5,
          "max" : 339.0,
          "min" : 104.0,
          "sum" : 1243.0,
          "standardDeviation" : 89.98499874979163
        }, {
          "mean" : 270.2857142857143,
          "variance" : 5004.904761904762,
          "n" : 7,
          "max" : 374.0,
          "min" : 146.0,
          "sum" : 1892.0,
          "standardDeviation" : 70.7453515215294
        }, {
          "mean" : 228.0,
          "variance" : 4619.199999999999,
          "n" : 6,
          "max" : 326.0,
          "min" : 151.0,
          "sum" : 1368.0,
          "standardDeviation" : 67.96469671822275
        }, {
          "mean" : 205.83333333333334,
          "variance" : 3705.766666666666,
          "n" : 6,
          "max" : 259.0,
          "min" : 99.0,
          "sum" : 1235.0,
          "standardDeviation" : 60.875008555783104
        }, {
          "mean" : 292.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 292.0,
          "min" : 292.0,
          "sum" : 292.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 785.7777777777778,
          "variance" : 555310.1944444444,
          "n" : 4,
          "max" : 2660.0,
          "min" : 226.0,
          "sum" : 3143.1111111111113,
          "standardDeviation" : 745.1913810857211
        }, {
          "mean" : 197.8,
          "variance" : 3364.7000000000003,
          "n" : 5,
          "max" : 292.0,
          "min" : 145.0,
          "sum" : 989.0,
          "standardDeviation" : 58.00603416886902
        }, {
          "mean" : 232.6,
          "variance" : 4248.8,
          "n" : 5,
          "max" : 325.0,
          "min" : 177.0,
          "sum" : 1163.0,
          "standardDeviation" : 65.18281982240413
        }, {
          "mean" : 251.4,
          "variance" : 18570.3,
          "n" : 5,
          "max" : 446.0,
          "min" : 99.0,
          "sum" : 1257.0,
          "standardDeviation" : 136.27288798583524
        }, {
          "mean" : 241.0,
          "variance" : 5586.799999999999,
          "n" : 6,
          "max" : 380.0,
          "min" : 177.0,
          "sum" : 1446.0,
          "standardDeviation" : 74.74489949153721
        }, {
          "mean" : 254.8,
          "variance" : 3842.6999999999994,
          "n" : 5,
          "max" : 324.0,
          "min" : 189.0,
          "sum" : 1274.0,
          "standardDeviation" : 61.98951524249887
        }, {
          "mean" : 190.14285714285714,
          "variance" : 2732.1428571428573,
          "n" : 7,
          "max" : 278.0,
          "min" : 126.0,
          "sum" : 1331.0,
          "standardDeviation" : 52.26990393278772
        }, {
          "mean" : 261.6666666666667,
          "variance" : 10405.066666666666,
          "n" : 6,
          "max" : 402.0,
          "min" : 130.0,
          "sum" : 1570.0,
          "standardDeviation" : 102.00522862415762
        }, {
          "mean" : 251.5,
          "variance" : 112.50000000000001,
          "n" : 2,
          "max" : 259.0,
          "min" : 244.0,
          "sum" : 503.0,
          "standardDeviation" : 10.606601717798213
        } ],
        "9" : [ {
          "mean" : 782.2500000000001,
          "variance" : 453371.642857143,
          "n" : 3,
          "max" : 2359.0,
          "min" : 273.0,
          "sum" : 2346.7500000000005,
          "standardDeviation" : 673.3287776837873
        }, {
          "mean" : 303.8333333333333,
          "variance" : 439.3666666666664,
          "n" : 6,
          "max" : 328.0,
          "min" : 276.0,
          "sum" : 1823.0,
          "standardDeviation" : 20.961075036043987
        }, {
          "mean" : 240.0,
          "variance" : 3814.9999999999995,
          "n" : 5,
          "max" : 287.0,
          "min" : 133.0,
          "sum" : 1200.0,
          "standardDeviation" : 61.765686266729034
        }, {
          "mean" : 331.6,
          "variance" : 7148.8,
          "n" : 5,
          "max" : 463.0,
          "min" : 231.0,
          "sum" : 1658.0,
          "standardDeviation" : 84.55057657993824
        }, {
          "mean" : 307.8333333333333,
          "variance" : 1940.1666666666665,
          "n" : 6,
          "max" : 359.0,
          "min" : 243.0,
          "sum" : 1847.0,
          "standardDeviation" : 44.0473230363284
        }, {
          "mean" : 279.4,
          "variance" : 4035.8,
          "n" : 5,
          "max" : 372.0,
          "min" : 206.0,
          "sum" : 1397.0,
          "standardDeviation" : 63.52794660619844
        }, {
          "mean" : 304.2857142857143,
          "variance" : 3029.238095238095,
          "n" : 7,
          "max" : 395.0,
          "min" : 245.0,
          "sum" : 2130.0,
          "standardDeviation" : 55.0385146532689
        }, {
          "mean" : 247.66666666666669,
          "variance" : 3219.8666666666672,
          "n" : 6,
          "max" : 326.0,
          "min" : 176.0,
          "sum" : 1486.0,
          "standardDeviation" : 56.743868978654135
        }, {
          "mean" : 288.5,
          "variance" : 364.50000000000006,
          "n" : 2,
          "max" : 302.0,
          "min" : 275.0,
          "sum" : 577.0,
          "standardDeviation" : 19.091883092036785
        } ],
        "10" : [ {
          "mean" : 808.125,
          "variance" : 603372.9821428572,
          "n" : 3,
          "max" : 2618.0,
          "min" : 254.0,
          "sum" : 2424.375,
          "standardDeviation" : 776.7708684952449
        }, {
          "mean" : 322.6666666666667,
          "variance" : 2713.4666666666667,
          "n" : 6,
          "max" : 396.0,
          "min" : 252.0,
          "sum" : 1936.0,
          "standardDeviation" : 52.090946110304685
        }, {
          "mean" : 314.4,
          "variance" : 1813.2999999999995,
          "n" : 5,
          "max" : 368.0,
          "min" : 273.0,
          "sum" : 1572.0,
          "standardDeviation" : 42.58286040180955
        }, {
          "mean" : 275.4,
          "variance" : 2933.7999999999997,
          "n" : 5,
          "max" : 330.0,
          "min" : 194.0,
          "sum" : 1377.0,
          "standardDeviation" : 54.16456406175536
        }, {
          "mean" : 266.3333333333333,
          "variance" : 11333.466666666667,
          "n" : 6,
          "max" : 450.0,
          "min" : 155.0,
          "sum" : 1598.0,
          "standardDeviation" : 106.45875570692468
        }, {
          "mean" : 261.2,
          "variance" : 3246.7,
          "n" : 5,
          "max" : 354.0,
          "min" : 212.0,
          "sum" : 1306.0,
          "standardDeviation" : 56.979820989539796
        }, {
          "mean" : 339.85714285714283,
          "variance" : 8163.476190476189,
          "n" : 7,
          "max" : 471.0,
          "min" : 198.0,
          "sum" : 2379.0,
          "standardDeviation" : 90.35195731402939
        }, {
          "mean" : 293.3333333333333,
          "variance" : 12209.866666666665,
          "n" : 6,
          "max" : 429.0,
          "min" : 126.0,
          "sum" : 1760.0,
          "standardDeviation" : 110.49826544641624
        }, {
          "mean" : 185.5,
          "variance" : 8320.5,
          "n" : 2,
          "max" : 250.0,
          "min" : 121.0,
          "sum" : 371.0,
          "standardDeviation" : 91.21677477306463
        } ],
        "11" : [ {
          "mean" : 943.5,
          "variance" : 331112.8571428571,
          "n" : 3,
          "max" : 2313.0,
          "min" : 439.0,
          "sum" : 2830.5,
          "standardDeviation" : 575.4240672259522
        }, {
          "mean" : 368.8333333333333,
          "variance" : 15096.166666666668,
          "n" : 6,
          "max" : 543.0,
          "min" : 208.0,
          "sum" : 2213.0,
          "standardDeviation" : 122.86645867227828
        }, {
          "mean" : 308.2,
          "variance" : 16388.699999999997,
          "n" : 5,
          "max" : 451.0,
          "min" : 143.0,
          "sum" : 1541.0,
          "standardDeviation" : 128.0183580585222
        }, {
          "mean" : 338.83333333333337,
          "variance" : 30880.166666666664,
          "n" : 6,
          "max" : 580.0,
          "min" : 132.0,
          "sum" : 2033.0000000000002,
          "standardDeviation" : 175.72753531153467
        }, {
          "mean" : 2261.0,
          "variance" : 1.7919380499999996E7,
          "n" : 5,
          "max" : 9832.0,
          "min" : 267.0,
          "sum" : 11305.0,
          "standardDeviation" : 4233.128925511246
        }, {
          "mean" : 292.83333333333337,
          "variance" : 11820.56666666667,
          "n" : 6,
          "max" : 481.0,
          "min" : 150.0,
          "sum" : 1757.0000000000002,
          "standardDeviation" : 108.72242945531832
        }, {
          "mean" : 1652.142857142857,
          "variance" : 1.2974947142857146E7,
          "n" : 7,
          "max" : 9819.0,
          "min" : 154.0,
          "sum" : 11565.0,
          "standardDeviation" : 3602.0753938329976
        }, {
          "mean" : 393.6,
          "variance" : 18264.8,
          "n" : 5,
          "max" : 559.0,
          "min" : 262.0,
          "sum" : 1968.0,
          "standardDeviation" : 135.14732701759218
        }, {
          "mean" : 198.0,
          "variance" : 21632.0,
          "n" : 2,
          "max" : 302.0,
          "min" : 94.0,
          "sum" : 396.0,
          "standardDeviation" : 147.07821048680188
        } ],
        "12" : [ {
          "mean" : 584.25,
          "variance" : 277087.07142857136,
          "n" : 3,
          "max" : 1819.0,
          "min" : 178.0,
          "sum" : 1752.75,
          "standardDeviation" : 526.3906072761665
        }, {
          "mean" : 234.5,
          "variance" : 4104.300000000001,
          "n" : 6,
          "max" : 294.0,
          "min" : 160.0,
          "sum" : 1407.0,
          "standardDeviation" : 64.06481093392847
        }, {
          "mean" : 345.8,
          "variance" : 12344.200000000003,
          "n" : 5,
          "max" : 498.0,
          "min" : 214.0,
          "sum" : 1729.0,
          "standardDeviation" : 111.10445535620974
        }, {
          "mean" : 285.5,
          "variance" : 5827.099999999999,
          "n" : 6,
          "max" : 352.0,
          "min" : 161.0,
          "sum" : 1713.0,
          "standardDeviation" : 76.33544393006436
        }, {
          "mean" : 280.8,
          "variance" : 2886.7000000000003,
          "n" : 5,
          "max" : 337.0,
          "min" : 200.0,
          "sum" : 1404.0,
          "standardDeviation" : 53.72801876116409
        }, {
          "mean" : 345.8,
          "variance" : 8582.2,
          "n" : 5,
          "max" : 478.0,
          "min" : 272.0,
          "sum" : 1729.0,
          "standardDeviation" : 92.64016407584779
        }, {
          "mean" : 386.1428571428571,
          "variance" : 10648.809523809527,
          "n" : 7,
          "max" : 561.0,
          "min" : 286.0,
          "sum" : 2703.0,
          "standardDeviation" : 103.19306916556715
        }, {
          "mean" : 301.1666666666667,
          "variance" : 2893.3666666666654,
          "n" : 6,
          "max" : 373.0,
          "min" : 229.0,
          "sum" : 1807.0,
          "standardDeviation" : 53.79002385820874
        }, {
          "mean" : 294.5,
          "variance" : 4.499999999999999,
          "n" : 2,
          "max" : 296.0,
          "min" : 293.0,
          "sum" : 589.0,
          "standardDeviation" : 2.1213203435596424
        } ],
        "13" : [ {
          "mean" : 692.75,
          "variance" : 471758.21428571426,
          "n" : 3,
          "max" : 2376.0,
          "min" : 315.0,
          "sum" : 2078.25,
          "standardDeviation" : 686.846572595157
        }, {
          "mean" : 299.0,
          "variance" : 3273.2,
          "n" : 6,
          "max" : 373.0,
          "min" : 219.0,
          "sum" : 1794.0,
          "standardDeviation" : 57.21188687676714
        }, {
          "mean" : 249.4,
          "variance" : 5417.3,
          "n" : 5,
          "max" : 330.0,
          "min" : 157.0,
          "sum" : 1247.0,
          "standardDeviation" : 73.60230974636598
        }, {
          "mean" : 377.5,
          "variance" : 25135.1,
          "n" : 6,
          "max" : 593.0,
          "min" : 246.0,
          "sum" : 2265.0,
          "standardDeviation" : 158.54053109536375
        }, {
          "mean" : 347.8,
          "variance" : 7674.700000000001,
          "n" : 5,
          "max" : 476.0,
          "min" : 232.0,
          "sum" : 1739.0,
          "standardDeviation" : 87.60536513250773
        }, {
          "mean" : 270.0,
          "variance" : 4649.5,
          "n" : 5,
          "max" : 353.0,
          "min" : 186.0,
          "sum" : 1350.0,
          "standardDeviation" : 68.18724220849528
        }, {
          "mean" : 325.625,
          "variance" : 9319.696428571428,
          "n" : 8,
          "max" : 495.0,
          "min" : 194.0,
          "sum" : 2605.0,
          "standardDeviation" : 96.53857482152628
        }, {
          "mean" : 282.8,
          "variance" : 1992.200000000001,
          "n" : 5,
          "max" : 353.0,
          "min" : 233.0,
          "sum" : 1414.0,
          "standardDeviation" : 44.634067706181575
        }, {
          "mean" : 300.0,
          "variance" : 1352.0,
          "n" : 2,
          "max" : 326.0,
          "min" : 274.0,
          "sum" : 600.0,
          "standardDeviation" : 36.76955262170047
        } ],
        "14" : [ {
          "mean" : 848.125,
          "variance" : 705202.4107142856,
          "n" : 3,
          "max" : 2877.0,
          "min" : 256.0,
          "sum" : 2544.375,
          "standardDeviation" : 839.7633063633381
        }, {
          "mean" : 208.5,
          "variance" : 4995.5,
          "n" : 6,
          "max" : 296.0,
          "min" : 100.0,
          "sum" : 1251.0,
          "standardDeviation" : 70.67885115082163
        }, {
          "mean" : 327.3333333333333,
          "variance" : 3570.2666666666673,
          "n" : 6,
          "max" : 394.0,
          "min" : 256.0,
          "sum" : 1964.0,
          "standardDeviation" : 59.75170848324479
        }, {
          "mean" : 308.4,
          "variance" : 10506.3,
          "n" : 5,
          "max" : 432.0,
          "min" : 194.0,
          "sum" : 1542.0,
          "standardDeviation" : 102.50024390214884
        }, {
          "mean" : 231.0,
          "variance" : 5891.999999999999,
          "n" : 5,
          "max" : 316.0,
          "min" : 124.0,
          "sum" : 1155.0,
          "standardDeviation" : 76.75936424958195
        }, {
          "mean" : 272.7142857142857,
          "variance" : 12344.57142857143,
          "n" : 7,
          "max" : 405.0,
          "min" : 92.0,
          "sum" : 1909.0,
          "standardDeviation" : 111.10612687233512
        }, {
          "mean" : 236.0,
          "variance" : 1684.4000000000003,
          "n" : 6,
          "max" : 278.0,
          "min" : 171.0,
          "sum" : 1416.0,
          "standardDeviation" : 41.04144246977682
        }, {
          "mean" : 232.66666666666666,
          "variance" : 5163.466666666667,
          "n" : 6,
          "max" : 359.0,
          "min" : 171.0,
          "sum" : 1396.0,
          "standardDeviation" : 71.8572659281347
        }, {
          "mean" : 362.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 362.0,
          "min" : 362.0,
          "sum" : 362.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 818.75,
          "variance" : 353476.5,
          "n" : 3,
          "max" : 2221.0,
          "min" : 391.0,
          "sum" : 2456.25,
          "standardDeviation" : 594.5388969613342
        }, {
          "mean" : 420.5,
          "variance" : 5278.700000000003,
          "n" : 6,
          "max" : 523.0,
          "min" : 317.0,
          "sum" : 2523.0,
          "standardDeviation" : 72.65466261706817
        }, {
          "mean" : 344.0,
          "variance" : 2803.5,
          "n" : 5,
          "max" : 403.0,
          "min" : 290.0,
          "sum" : 1720.0,
          "standardDeviation" : 52.94808778416837
        }, {
          "mean" : 394.16666666666663,
          "variance" : 7646.166666666668,
          "n" : 6,
          "max" : 509.0,
          "min" : 260.0,
          "sum" : 2365.0,
          "standardDeviation" : 87.44236196870867
        }, {
          "mean" : 363.0,
          "variance" : 909.5000000000005,
          "n" : 5,
          "max" : 410.0,
          "min" : 329.0,
          "sum" : 1815.0,
          "standardDeviation" : 30.15791770000045
        }, {
          "mean" : 358.0,
          "variance" : 9445.5,
          "n" : 5,
          "max" : 487.0,
          "min" : 228.0,
          "sum" : 1790.0,
          "standardDeviation" : 97.18796221755038
        }, {
          "mean" : 324.14285714285717,
          "variance" : 3427.4761904761895,
          "n" : 7,
          "max" : 405.0,
          "min" : 243.0,
          "sum" : 2269.0,
          "standardDeviation" : 58.544651254202456
        }, {
          "mean" : 280.1666666666667,
          "variance" : 1498.1666666666667,
          "n" : 6,
          "max" : 319.0,
          "min" : 226.0,
          "sum" : 1681.0,
          "standardDeviation" : 38.70615799413146
        }, {
          "mean" : 346.5,
          "variance" : 6844.5,
          "n" : 2,
          "max" : 405.0,
          "min" : 288.0,
          "sum" : 693.0,
          "standardDeviation" : 82.73149339882606
        } ],
        "16" : [ {
          "mean" : 784.25,
          "variance" : 428032.78571428574,
          "n" : 3,
          "max" : 2365.0,
          "min" : 341.0,
          "sum" : 2352.75,
          "standardDeviation" : 654.2421460852898
        }, {
          "mean" : 313.8333333333333,
          "variance" : 22938.966666666667,
          "n" : 6,
          "max" : 607.0,
          "min" : 184.0,
          "sum" : 1883.0,
          "standardDeviation" : 151.456154271349
        }, {
          "mean" : 227.0,
          "variance" : 8120.0,
          "n" : 6,
          "max" : 369.0,
          "min" : 95.0,
          "sum" : 1362.0,
          "standardDeviation" : 90.11104260855048
        }, {
          "mean" : 225.6,
          "variance" : 3142.3,
          "n" : 5,
          "max" : 299.0,
          "min" : 150.0,
          "sum" : 1128.0,
          "standardDeviation" : 56.056221777783065
        }, {
          "mean" : 271.2,
          "variance" : 15966.700000000003,
          "n" : 5,
          "max" : 485.0,
          "min" : 168.0,
          "sum" : 1356.0,
          "standardDeviation" : 126.35940803913257
        }, {
          "mean" : 326.6,
          "variance" : 19936.299999999996,
          "n" : 5,
          "max" : 537.0,
          "min" : 157.0,
          "sum" : 1633.0,
          "standardDeviation" : 141.19596311509758
        }, {
          "mean" : 223.25,
          "variance" : 6790.500000000002,
          "n" : 8,
          "max" : 329.0,
          "min" : 92.0,
          "sum" : 1786.0,
          "standardDeviation" : 82.40449016892224
        }, {
          "mean" : 209.4,
          "variance" : 8243.3,
          "n" : 5,
          "max" : 300.0,
          "min" : 89.0,
          "sum" : 1047.0,
          "standardDeviation" : 90.79262084552907
        }, {
          "mean" : 223.5,
          "variance" : 544.5,
          "n" : 2,
          "max" : 240.0,
          "min" : 207.0,
          "sum" : 447.0,
          "standardDeviation" : 23.33452377915607
        } ],
        "17" : [ {
          "mean" : 806.625,
          "variance" : 390798.8392857142,
          "n" : 3,
          "max" : 2265.0,
          "min" : 292.0,
          "sum" : 2419.875,
          "standardDeviation" : 625.1390559593235
        }, {
          "mean" : 326.4,
          "variance" : 5083.300000000001,
          "n" : 5,
          "max" : 394.0,
          "min" : 208.0,
          "sum" : 1632.0,
          "standardDeviation" : 71.29726502468381
        }, {
          "mean" : 234.66666666666669,
          "variance" : 6538.266666666666,
          "n" : 6,
          "max" : 308.0,
          "min" : 93.0,
          "sum" : 1408.0,
          "standardDeviation" : 80.85954901350036
        }, {
          "mean" : 309.3333333333333,
          "variance" : 5449.866666666667,
          "n" : 6,
          "max" : 391.0,
          "min" : 178.0,
          "sum" : 1856.0,
          "standardDeviation" : 73.82321224836174
        }, {
          "mean" : 303.0,
          "variance" : 21281.499999999996,
          "n" : 5,
          "max" : 463.0,
          "min" : 120.0,
          "sum" : 1515.0,
          "standardDeviation" : 145.88180146954588
        }, {
          "mean" : 339.2,
          "variance" : 9156.2,
          "n" : 5,
          "max" : 469.0,
          "min" : 224.0,
          "sum" : 1696.0,
          "standardDeviation" : 95.68803477969438
        }, {
          "mean" : 311.125,
          "variance" : 6500.982142857141,
          "n" : 8,
          "max" : 415.0,
          "min" : 211.0,
          "sum" : 2489.0,
          "standardDeviation" : 80.62866824434806
        }, {
          "mean" : 324.8,
          "variance" : 578.7000000000003,
          "n" : 5,
          "max" : 352.0,
          "min" : 289.0,
          "sum" : 1624.0,
          "standardDeviation" : 24.056184236075353
        }, {
          "mean" : 275.0,
          "variance" : 4802.000000000001,
          "n" : 2,
          "max" : 324.0,
          "min" : 226.0,
          "sum" : 550.0,
          "standardDeviation" : 69.29646455628166
        } ],
        "18" : [ {
          "mean" : 2412.25,
          "variance" : 2.9721809928571425E7,
          "n" : 3,
          "max" : 15893.0,
          "min" : 128.0,
          "sum" : 7236.75,
          "standardDeviation" : 5451.771265246867
        }, {
          "mean" : 264.0,
          "variance" : 3310.399999999999,
          "n" : 6,
          "max" : 372.0,
          "min" : 200.0,
          "sum" : 1584.0,
          "standardDeviation" : 57.53607563954983
        }, {
          "mean" : 234.4,
          "variance" : 6104.3,
          "n" : 5,
          "max" : 287.0,
          "min" : 103.0,
          "sum" : 1172.0,
          "standardDeviation" : 78.1300198387278
        }, {
          "mean" : 322.8333333333333,
          "variance" : 14471.766666666668,
          "n" : 6,
          "max" : 449.0,
          "min" : 126.0,
          "sum" : 1937.0,
          "standardDeviation" : 120.29865612992802
        }, {
          "mean" : 335.6,
          "variance" : 6859.3,
          "n" : 5,
          "max" : 462.0,
          "min" : 269.0,
          "sum" : 1678.0,
          "standardDeviation" : 82.82089108431519
        }, {
          "mean" : 406.8,
          "variance" : 35171.69999999999,
          "n" : 5,
          "max" : 640.0,
          "min" : 183.0,
          "sum" : 2034.0,
          "standardDeviation" : 187.54119547448767
        }, {
          "mean" : 288.0,
          "variance" : 6277.714285714284,
          "n" : 8,
          "max" : 442.0,
          "min" : 197.0,
          "sum" : 2304.0,
          "standardDeviation" : 79.23202815600699
        }, {
          "mean" : 281.6,
          "variance" : 1746.8000000000006,
          "n" : 5,
          "max" : 344.0,
          "min" : 240.0,
          "sum" : 1408.0,
          "standardDeviation" : 41.79473651071389
        }, {
          "mean" : 260.0,
          "variance" : 2888.0,
          "n" : 2,
          "max" : 298.0,
          "min" : 222.0,
          "sum" : 520.0,
          "standardDeviation" : 53.74011537017761
        } ],
        "19" : [ {
          "mean" : 903.875,
          "variance" : 790139.8392857141,
          "n" : 3,
          "max" : 3081.0,
          "min" : 384.0,
          "sum" : 2711.625,
          "standardDeviation" : 888.8981039948922
        }, {
          "mean" : 229.66666666666669,
          "variance" : 3668.2666666666673,
          "n" : 6,
          "max" : 310.0,
          "min" : 142.0,
          "sum" : 1378.0,
          "standardDeviation" : 60.56621720618407
        }, {
          "mean" : 306.6,
          "variance" : 956.3,
          "n" : 5,
          "max" : 348.0,
          "min" : 265.0,
          "sum" : 1533.0,
          "standardDeviation" : 30.924100633648184
        }, {
          "mean" : 271.1666666666667,
          "variance" : 2531.7666666666673,
          "n" : 6,
          "max" : 348.0,
          "min" : 204.0,
          "sum" : 1627.0,
          "standardDeviation" : 50.31666390637069
        }, {
          "mean" : 243.4,
          "variance" : 1558.8000000000002,
          "n" : 5,
          "max" : 294.0,
          "min" : 196.0,
          "sum" : 1217.0,
          "standardDeviation" : 39.48164130326904
        }, {
          "mean" : 269.6,
          "variance" : 4930.300000000001,
          "n" : 5,
          "max" : 326.0,
          "min" : 147.0,
          "sum" : 1348.0,
          "standardDeviation" : 70.21609502101353
        }, {
          "mean" : 311.0,
          "variance" : 1175.3333333333333,
          "n" : 7,
          "max" : 357.0,
          "min" : 262.0,
          "sum" : 2177.0,
          "standardDeviation" : 34.28313482360289
        }, {
          "mean" : 351.0,
          "variance" : 1830.4000000000005,
          "n" : 6,
          "max" : 392.0,
          "min" : 278.0,
          "sum" : 2106.0,
          "standardDeviation" : 42.78317426278701
        }, {
          "mean" : 374.5,
          "variance" : 16744.5,
          "n" : 2,
          "max" : 466.0,
          "min" : 283.0,
          "sum" : 749.0,
          "standardDeviation" : 129.4005409571382
        } ],
        "20" : [ {
          "mean" : 836.375,
          "variance" : 584798.8392857144,
          "n" : 3,
          "max" : 2637.0,
          "min" : 316.0,
          "sum" : 2509.125,
          "standardDeviation" : 764.7214128594245
        }, {
          "mean" : 232.83333333333334,
          "variance" : 2602.5666666666666,
          "n" : 6,
          "max" : 318.0,
          "min" : 173.0,
          "sum" : 1397.0,
          "standardDeviation" : 51.015357164942664
        }, {
          "mean" : 249.49999999999997,
          "variance" : 8554.699999999999,
          "n" : 6,
          "max" : 343.0,
          "min" : 110.0,
          "sum" : 1496.9999999999998,
          "standardDeviation" : 92.49162124214278
        }, {
          "mean" : 429.4,
          "variance" : 18813.799999999996,
          "n" : 5,
          "max" : 568.0,
          "min" : 266.0,
          "sum" : 2147.0,
          "standardDeviation" : 137.16340619859218
        }, {
          "mean" : 285.2,
          "variance" : 3695.1999999999994,
          "n" : 5,
          "max" : 333.0,
          "min" : 180.0,
          "sum" : 1426.0,
          "standardDeviation" : 60.788156741260046
        }, {
          "mean" : 299.6666666666667,
          "variance" : 2022.6666666666667,
          "n" : 6,
          "max" : 355.0,
          "min" : 258.0,
          "sum" : 1798.0,
          "standardDeviation" : 44.97406660139448
        }, {
          "mean" : 289.57142857142856,
          "variance" : 10850.619047619051,
          "n" : 7,
          "max" : 429.0,
          "min" : 152.0,
          "sum" : 2027.0,
          "standardDeviation" : 104.1663047612761
        }, {
          "mean" : 280.0,
          "variance" : 1027.0000000000002,
          "n" : 5,
          "max" : 315.0,
          "min" : 237.0,
          "sum" : 1400.0,
          "standardDeviation" : 32.046840717924134
        }, {
          "mean" : 296.5,
          "variance" : 544.5,
          "n" : 2,
          "max" : 313.0,
          "min" : 280.0,
          "sum" : 593.0,
          "standardDeviation" : 23.33452377915607
        } ],
        "21" : [ {
          "mean" : 907.5,
          "variance" : 761046.5714285715,
          "n" : 3,
          "max" : 2970.0,
          "min" : 227.0,
          "sum" : 2722.5,
          "standardDeviation" : 872.3798320849534
        }, {
          "mean" : 327.6666666666667,
          "variance" : 3928.6666666666665,
          "n" : 6,
          "max" : 420.0,
          "min" : 271.0,
          "sum" : 1966.0,
          "standardDeviation" : 62.67907678537286
        }, {
          "mean" : 306.83333333333337,
          "variance" : 39026.166666666664,
          "n" : 6,
          "max" : 681.0,
          "min" : 102.0,
          "sum" : 1841.0000000000002,
          "standardDeviation" : 197.55041550618583
        }, {
          "mean" : 252.0,
          "variance" : 6768.000000000001,
          "n" : 5,
          "max" : 365.0,
          "min" : 167.0,
          "sum" : 1260.0,
          "standardDeviation" : 82.26785520481253
        }, {
          "mean" : 261.0,
          "variance" : 4299.0,
          "n" : 5,
          "max" : 356.0,
          "min" : 176.0,
          "sum" : 1305.0,
          "standardDeviation" : 65.56675987114203
        }, {
          "mean" : 338.3333333333333,
          "variance" : 11843.466666666665,
          "n" : 6,
          "max" : 525.0,
          "min" : 216.0,
          "sum" : 2030.0,
          "standardDeviation" : 108.82769255417789
        }, {
          "mean" : 283.85714285714283,
          "variance" : 14799.142857142853,
          "n" : 7,
          "max" : 503.0,
          "min" : 108.0,
          "sum" : 1986.9999999999998,
          "standardDeviation" : 121.65172771951434
        }, {
          "mean" : 327.6,
          "variance" : 17004.8,
          "n" : 5,
          "max" : 416.0,
          "min" : 97.0,
          "sum" : 1638.0,
          "standardDeviation" : 130.4024539646398
        }, {
          "mean" : 207.0,
          "variance" : 1352.0,
          "n" : 2,
          "max" : 233.0,
          "min" : 181.0,
          "sum" : 414.0,
          "standardDeviation" : 36.76955262170047
        } ],
        "22" : [ {
          "mean" : 792.4285714285713,
          "variance" : 568908.619047619,
          "n" : 2,
          "max" : 2475.0,
          "min" : 249.0,
          "sum" : 1584.8571428571427,
          "standardDeviation" : 754.2603125232157
        }, {
          "mean" : 270.2857142857143,
          "variance" : 12045.571428571428,
          "n" : 7,
          "max" : 441.0,
          "min" : 102.0,
          "sum" : 1892.0,
          "standardDeviation" : 109.75231855670033
        }, {
          "mean" : 258.2,
          "variance" : 11146.7,
          "n" : 5,
          "max" : 378.0,
          "min" : 109.0,
          "sum" : 1291.0,
          "standardDeviation" : 105.57793330047714
        }, {
          "mean" : 373.0,
          "variance" : 36689.6,
          "n" : 6,
          "max" : 605.0,
          "min" : 122.0,
          "sum" : 2238.0,
          "standardDeviation" : 191.5452949043646
        }, {
          "mean" : 241.8,
          "variance" : 6643.699999999999,
          "n" : 5,
          "max" : 311.0,
          "min" : 152.0,
          "sum" : 1209.0,
          "standardDeviation" : 81.50889522009238
        }, {
          "mean" : 234.83333333333334,
          "variance" : 4870.566666666666,
          "n" : 6,
          "max" : 363.0,
          "min" : 173.0,
          "sum" : 1409.0,
          "standardDeviation" : 69.78944523827845
        }, {
          "mean" : 223.7142857142857,
          "variance" : 5744.904761904762,
          "n" : 7,
          "max" : 350.0,
          "min" : 120.0,
          "sum" : 1565.9999999999998,
          "standardDeviation" : 75.79514998932822
        }, {
          "mean" : 246.6,
          "variance" : 4667.299999999999,
          "n" : 5,
          "max" : 361.0,
          "min" : 186.0,
          "sum" : 1233.0,
          "standardDeviation" : 68.31764047447774
        }, {
          "mean" : 273.0,
          "variance" : 338.0,
          "n" : 2,
          "max" : 286.0,
          "min" : 260.0,
          "sum" : 546.0,
          "standardDeviation" : 18.384776310850235
        } ],
        "23" : [ {
          "mean" : 854.875,
          "variance" : 730094.9821428572,
          "n" : 3,
          "max" : 2901.0,
          "min" : 284.0,
          "sum" : 2564.625,
          "standardDeviation" : 854.4559568186397
        }, {
          "mean" : 284.6666666666667,
          "variance" : 12349.066666666668,
          "n" : 6,
          "max" : 414.0,
          "min" : 129.0,
          "sum" : 1708.0,
          "standardDeviation" : 111.12635450993012
        }, {
          "mean" : 235.2,
          "variance" : 7677.2,
          "n" : 5,
          "max" : 372.0,
          "min" : 148.0,
          "sum" : 1176.0,
          "standardDeviation" : 87.61963250322384
        }, {
          "mean" : 351.66666666666663,
          "variance" : 25653.46666666666,
          "n" : 6,
          "max" : 654.0,
          "min" : 174.0,
          "sum" : 2110.0,
          "standardDeviation" : 160.16699618419102
        }, {
          "mean" : 267.6,
          "variance" : 14122.300000000003,
          "n" : 5,
          "max" : 454.0,
          "min" : 149.0,
          "sum" : 1338.0,
          "standardDeviation" : 118.83728371180487
        }, {
          "mean" : 251.2,
          "variance" : 4777.7,
          "n" : 5,
          "max" : 326.0,
          "min" : 175.0,
          "sum" : 1256.0,
          "standardDeviation" : 69.12090855884347
        }, {
          "mean" : 318.375,
          "variance" : 5185.6964285714275,
          "n" : 8,
          "max" : 489.0,
          "min" : 272.0,
          "sum" : 2547.0,
          "standardDeviation" : 72.01177979033311
        }, {
          "mean" : 333.4,
          "variance" : 1992.3,
          "n" : 5,
          "max" : 411.0,
          "min" : 303.0,
          "sum" : 1667.0,
          "standardDeviation" : 44.63518791267715
        }, {
          "mean" : 312.0,
          "variance" : 32.00000000000001,
          "n" : 2,
          "max" : 316.0,
          "min" : 308.0,
          "sum" : 624.0,
          "standardDeviation" : 5.656854249492381
        } ],
        "24" : [ {
          "mean" : 950.75,
          "variance" : 563479.0714285715,
          "n" : 3,
          "max" : 2654.0,
          "min" : 299.0,
          "sum" : 2852.25,
          "standardDeviation" : 750.6524305086685
        }, {
          "mean" : 367.5,
          "variance" : 61719.5,
          "n" : 6,
          "max" : 856.0,
          "min" : 176.0,
          "sum" : 2205.0,
          "standardDeviation" : 248.43409588862798
        }, {
          "mean" : 324.4,
          "variance" : 7787.300000000001,
          "n" : 5,
          "max" : 460.0,
          "min" : 221.0,
          "sum" : 1622.0,
          "standardDeviation" : 88.24567978093886
        }, {
          "mean" : 266.4,
          "variance" : 9166.3,
          "n" : 5,
          "max" : 404.0,
          "min" : 157.0,
          "sum" : 1332.0,
          "standardDeviation" : 95.74079590226937
        }, {
          "mean" : 368.0,
          "variance" : 53932.99999999999,
          "n" : 5,
          "max" : 771.0,
          "min" : 185.0,
          "sum" : 1840.0,
          "standardDeviation" : 232.23479498128611
        }, {
          "mean" : 326.0,
          "variance" : 1342.4000000000003,
          "n" : 6,
          "max" : 363.0,
          "min" : 267.0,
          "sum" : 1956.0,
          "standardDeviation" : 36.63877727217436
        }, {
          "mean" : 289.2,
          "variance" : 1214.1999999999996,
          "n" : 5,
          "max" : 327.0,
          "min" : 242.0,
          "sum" : 1446.0,
          "standardDeviation" : 34.845372720061405
        }, {
          "mean" : 306.8571428571429,
          "variance" : 1019.1428571428571,
          "n" : 7,
          "max" : 363.0,
          "min" : 271.0,
          "sum" : 2148.0,
          "standardDeviation" : 31.9240169330687
        }, {
          "mean" : 405.3333333333333,
          "variance" : 49206.33333333333,
          "n" : 3,
          "max" : 661.0,
          "min" : 264.0,
          "sum" : 1216.0,
          "standardDeviation" : 221.82500610466198
        } ],
        "25" : [ {
          "mean" : 951.0000000000001,
          "variance" : 1187706.0,
          "n" : 2,
          "max" : 3389.0,
          "min" : 284.0,
          "sum" : 1902.0000000000002,
          "standardDeviation" : 1089.8192510687265
        }, {
          "mean" : 305.7142857142857,
          "variance" : 17338.2380952381,
          "n" : 7,
          "max" : 567.0,
          "min" : 158.0,
          "sum" : 2140.0,
          "standardDeviation" : 131.674743573846
        }, {
          "mean" : 297.4,
          "variance" : 4116.3,
          "n" : 5,
          "max" : 381.0,
          "min" : 237.0,
          "sum" : 1487.0,
          "standardDeviation" : 64.15839773560434
        }, {
          "mean" : 318.5,
          "variance" : 8101.099999999999,
          "n" : 6,
          "max" : 457.0,
          "min" : 186.0,
          "sum" : 1911.0,
          "standardDeviation" : 90.0061109036492
        }, {
          "mean" : 272.6,
          "variance" : 6541.3,
          "n" : 5,
          "max" : 353.0,
          "min" : 142.0,
          "sum" : 1363.0,
          "standardDeviation" : 80.87830364195332
        }, {
          "mean" : 223.83333333333334,
          "variance" : 3530.1666666666665,
          "n" : 6,
          "max" : 331.0,
          "min" : 168.0,
          "sum" : 1343.0,
          "standardDeviation" : 59.41520568563797
        }, {
          "mean" : 245.85714285714283,
          "variance" : 9335.476190476189,
          "n" : 7,
          "max" : 392.0,
          "min" : 132.0,
          "sum" : 1720.9999999999998,
          "standardDeviation" : 96.62026801078638
        }, {
          "mean" : 251.4,
          "variance" : 1751.2999999999995,
          "n" : 5,
          "max" : 300.0,
          "min" : 201.0,
          "sum" : 1257.0,
          "standardDeviation" : 41.84853641407307
        }, {
          "mean" : 223.0,
          "variance" : 512.0000000000001,
          "n" : 2,
          "max" : 239.0,
          "min" : 207.0,
          "sum" : 446.0,
          "standardDeviation" : 22.627416997969522
        } ],
        "26" : [ {
          "mean" : 730.125,
          "variance" : 570810.125,
          "n" : 3,
          "max" : 2558.0,
          "min" : 228.0,
          "sum" : 2190.375,
          "standardDeviation" : 755.5197714156791
        }, {
          "mean" : 315.16666666666663,
          "variance" : 908.9666666666668,
          "n" : 6,
          "max" : 364.0,
          "min" : 273.0,
          "sum" : 1890.9999999999998,
          "standardDeviation" : 30.14907405985575
        }, {
          "mean" : 236.8,
          "variance" : 15561.200000000003,
          "n" : 5,
          "max" : 429.0,
          "min" : 101.0,
          "sum" : 1184.0,
          "standardDeviation" : 124.74453895862537
        }, {
          "mean" : 271.5,
          "variance" : 11659.899999999998,
          "n" : 6,
          "max" : 412.0,
          "min" : 111.0,
          "sum" : 1629.0,
          "standardDeviation" : 107.98101685018528
        }, {
          "mean" : 404.0,
          "variance" : 97226.49999999999,
          "n" : 5,
          "max" : 954.0,
          "min" : 204.0,
          "sum" : 2020.0,
          "standardDeviation" : 311.81164186091576
        }, {
          "mean" : 331.8,
          "variance" : 33877.69999999999,
          "n" : 5,
          "max" : 625.0,
          "min" : 134.0,
          "sum" : 1659.0,
          "standardDeviation" : 184.05895794554525
        }, {
          "mean" : 282.5,
          "variance" : 10676.000000000002,
          "n" : 8,
          "max" : 451.0,
          "min" : 179.0,
          "sum" : 2260.0,
          "standardDeviation" : 103.32473082471593
        }, {
          "mean" : 255.6,
          "variance" : 13337.3,
          "n" : 5,
          "max" : 394.0,
          "min" : 91.0,
          "sum" : 1278.0,
          "standardDeviation" : 115.48722873114585
        }, {
          "mean" : 376.5,
          "variance" : 5940.5,
          "n" : 2,
          "max" : 431.0,
          "min" : 322.0,
          "sum" : 753.0,
          "standardDeviation" : 77.07463914933368
        } ],
        "27" : [ {
          "mean" : 810.125,
          "variance" : 610014.4107142856,
          "n" : 3,
          "max" : 2688.0,
          "min" : 282.0,
          "sum" : 2430.375,
          "standardDeviation" : 781.0341930506536
        }, {
          "mean" : 382.3333333333333,
          "variance" : 13337.066666666666,
          "n" : 6,
          "max" : 569.0,
          "min" : 209.0,
          "sum" : 2294.0,
          "standardDeviation" : 115.48621851401433
        }, {
          "mean" : 407.8,
          "variance" : 18564.700000000004,
          "n" : 5,
          "max" : 571.0,
          "min" : 233.0,
          "sum" : 2039.0,
          "standardDeviation" : 136.25233942945715
        }, {
          "mean" : 359.2,
          "variance" : 7565.199999999999,
          "n" : 5,
          "max" : 498.0,
          "min" : 269.0,
          "sum" : 1796.0,
          "standardDeviation" : 86.97815817778621
        }, {
          "mean" : 256.1666666666667,
          "variance" : 8939.366666666665,
          "n" : 6,
          "max" : 404.0,
          "min" : 118.0,
          "sum" : 1537.0,
          "standardDeviation" : 94.54822402703641
        }, {
          "mean" : 402.6,
          "variance" : 7325.800000000001,
          "n" : 5,
          "max" : 532.0,
          "min" : 293.0,
          "sum" : 2013.0,
          "standardDeviation" : 85.59088736541993
        }, {
          "mean" : 260.87500000000006,
          "variance" : 6928.982142857143,
          "n" : 8,
          "max" : 343.0,
          "min" : 109.0,
          "sum" : 2087.0000000000005,
          "standardDeviation" : 83.24050782435883
        }, {
          "mean" : 384.4,
          "variance" : 33912.299999999996,
          "n" : 5,
          "max" : 710.0,
          "min" : 257.0,
          "sum" : 1922.0,
          "standardDeviation" : 184.1529255808878
        }, {
          "mean" : 412.0,
          "variance" : 27848.000000000004,
          "n" : 2,
          "max" : 530.0,
          "min" : 294.0,
          "sum" : 824.0,
          "standardDeviation" : 166.87720036002523
        } ],
        "28" : [ {
          "mean" : 920.75,
          "variance" : 731001.6428571428,
          "n" : 3,
          "max" : 2963.0,
          "min" : 338.0,
          "sum" : 2762.25,
          "standardDeviation" : 854.986340743022
        }, {
          "mean" : 375.8333333333333,
          "variance" : 40959.76666666666,
          "n" : 6,
          "max" : 668.0,
          "min" : 128.0,
          "sum" : 2255.0,
          "standardDeviation" : 202.38519379309017
        }, {
          "mean" : 368.6,
          "variance" : 19260.799999999996,
          "n" : 5,
          "max" : 577.0,
          "min" : 228.0,
          "sum" : 1843.0,
          "standardDeviation" : 138.78328429605634
        }, {
          "mean" : 329.8,
          "variance" : 8451.699999999999,
          "n" : 5,
          "max" : 421.0,
          "min" : 195.0,
          "sum" : 1649.0,
          "standardDeviation" : 91.93312787020791
        }, {
          "mean" : 351.3333333333333,
          "variance" : 19541.46666666667,
          "n" : 6,
          "max" : 576.0,
          "min" : 182.0,
          "sum" : 2108.0,
          "standardDeviation" : 139.79079607279826
        }, {
          "mean" : 365.4,
          "variance" : 5320.8,
          "n" : 5,
          "max" : 471.0,
          "min" : 297.0,
          "sum" : 1827.0,
          "standardDeviation" : 72.94381399405984
        }, {
          "mean" : 347.3333333333333,
          "variance" : 3969.4666666666676,
          "n" : 6,
          "max" : 458.0,
          "min" : 263.0,
          "sum" : 2084.0,
          "standardDeviation" : 63.00370359484169
        }, {
          "mean" : 307.0,
          "variance" : 6670.0,
          "n" : 7,
          "max" : 440.0,
          "min" : 226.0,
          "sum" : 2149.0,
          "standardDeviation" : 81.67006795638167
        }, {
          "mean" : 250.0,
          "variance" : 50.00000000000001,
          "n" : 2,
          "max" : 255.0,
          "min" : 245.0,
          "sum" : 500.0,
          "standardDeviation" : 7.0710678118654755
        } ],
        "29" : [ {
          "mean" : 871.0,
          "variance" : 485072.5714285715,
          "n" : 3,
          "max" : 2569.0,
          "min" : 391.0,
          "sum" : 2613.0,
          "standardDeviation" : 696.4715151595013
        }, {
          "mean" : 252.8,
          "variance" : 5845.200000000002,
          "n" : 5,
          "max" : 348.0,
          "min" : 174.0,
          "sum" : 1264.0,
          "standardDeviation" : 76.45390768299552
        }, {
          "mean" : 313.16666666666663,
          "variance" : 13119.366666666667,
          "n" : 6,
          "max" : 495.0,
          "min" : 192.0,
          "sum" : 1878.9999999999998,
          "standardDeviation" : 114.53980385292559
        }, {
          "mean" : 259.6,
          "variance" : 12149.800000000001,
          "n" : 5,
          "max" : 397.0,
          "min" : 95.0,
          "sum" : 1298.0,
          "standardDeviation" : 110.22613120308633
        }, {
          "mean" : 275.4,
          "variance" : 13196.8,
          "n" : 5,
          "max" : 414.0,
          "min" : 94.0,
          "sum" : 1377.0,
          "standardDeviation" : 114.87732587416892
        }, {
          "mean" : 180.16666666666669,
          "variance" : 4750.166666666668,
          "n" : 6,
          "max" : 260.0,
          "min" : 99.0,
          "sum" : 1081.0,
          "standardDeviation" : 68.92145287692844
        }, {
          "mean" : 266.5,
          "variance" : 1788.7,
          "n" : 6,
          "max" : 303.0,
          "min" : 185.0,
          "sum" : 1599.0,
          "standardDeviation" : 42.2930254297325
        }, {
          "mean" : 257.1428571428571,
          "variance" : 3710.1428571428564,
          "n" : 7,
          "max" : 337.0,
          "min" : 160.0,
          "sum" : 1799.9999999999998,
          "standardDeviation" : 60.910942014902844
        }, {
          "mean" : 207.5,
          "variance" : 15664.5,
          "n" : 2,
          "max" : 296.0,
          "min" : 119.0,
          "sum" : 415.0,
          "standardDeviation" : 125.15790027001891
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
      "meanOld" : 181.20003113679604,
      "meanCurrent" : 381.4244444444444,
      "deviationOld" : 9.747298851446011,
      "deviationCurrent" : 76.10032747389947,
      "vms" : 29,
      "callsOld" : 217346,
      "calls" : 150,
      "tvalue" : -14.290148850699158,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 152.30452270817491,
    "inVMDeviation" : 97.27191056064292,
    "ess" : 1,
    "values" : [ 559.0, 399.8, 322.06666666666666, 282.6, 466.6, 534.8, 394.0666666666667, 479.3, 442.7, 412.8, 455.6, 307.5333333333333, 279.7, 337.1, 322.5, 429.6, 355.33333333333337, 496.9333333333333, 338.2666666666667, 418.1333333333334, 363.9, 308.6, 380.06666666666666, 350.46666666666664, 262.2, 347.4, 305.1333333333333, 399.2, 328.46666666666664, 362.8666666666667 ],
    "valuesPredecessor" : [ 187.2409676789539, 183.98353057216121, 162.24493516667422, 163.29051874260247, 173.4455669995021, 176.10591609384468, 191.24372410520974, 175.58102072980662, 172.81850003099208, 226.52543498013816, 177.83472698515044, 185.3808252788348, 186.51107412631333, 180.08141965822963, 168.15455943246883, 190.327238150695, 191.40406228263927, 173.81818896933393, 186.7864769548359, 185.8317451237978, 178.59041422350995, 173.85158454106258, 192.719513878601, 186.16324697834224, 187.41814699152772, 160.047429220578, 193.18724661896343, 186.16758773374346, 193.9884266260085, 190.58230907270152 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 658.0,
          "variance" : 48412.0,
          "n" : 1,
          "max" : 880.0,
          "min" : 440.0,
          "sum" : 658.0,
          "standardDeviation" : 220.02727103702395
        }, {
          "mean" : 613.5,
          "variance" : 49612.50000000001,
          "n" : 2,
          "max" : 771.0,
          "min" : 456.0,
          "sum" : 1227.0,
          "standardDeviation" : 222.73863607376248
        }, {
          "mean" : 455.0,
          "variance" : 7937.999999999999,
          "n" : 2,
          "max" : 518.0,
          "min" : 392.0,
          "sum" : 910.0,
          "standardDeviation" : 89.09545442950498
        } ],
        "1" : [ {
          "mean" : 459.0,
          "variance" : 13701.0,
          "n" : 1,
          "max" : 578.0,
          "min" : 344.0,
          "sum" : 459.0,
          "standardDeviation" : 117.05127081753534
        }, {
          "mean" : 388.0,
          "variance" : 2592.0,
          "n" : 2,
          "max" : 424.0,
          "min" : 352.0,
          "sum" : 776.0,
          "standardDeviation" : 50.91168824543142
        }, {
          "mean" : 382.0,
          "variance" : 1058.0,
          "n" : 2,
          "max" : 405.0,
          "min" : 359.0,
          "sum" : 764.0,
          "standardDeviation" : 32.526911934581186
        } ],
        "2" : [ {
          "mean" : 385.3333333333333,
          "variance" : 1961.333333333333,
          "n" : 1,
          "max" : 436.0,
          "min" : 354.0,
          "sum" : 385.3333333333333,
          "standardDeviation" : 44.28694314731299
        }, {
          "mean" : 321.5,
          "variance" : 1404.4999999999998,
          "n" : 2,
          "max" : 348.0,
          "min" : 295.0,
          "sum" : 643.0,
          "standardDeviation" : 37.476659402887016
        }, {
          "mean" : 291.0,
          "variance" : 200.00000000000003,
          "n" : 2,
          "max" : 301.0,
          "min" : 281.0,
          "sum" : 582.0,
          "standardDeviation" : 14.142135623730951
        } ],
        "3" : [ {
          "mean" : 300.0,
          "variance" : 2178.0,
          "n" : 1,
          "max" : 333.0,
          "min" : 267.0,
          "sum" : 300.0,
          "standardDeviation" : 46.66904755831214
        }, {
          "mean" : 296.0,
          "variance" : 2.0000000000000004,
          "n" : 2,
          "max" : 297.0,
          "min" : 295.0,
          "sum" : 592.0,
          "standardDeviation" : 1.4142135623730951
        }, {
          "mean" : 260.5,
          "variance" : 112.50000000000001,
          "n" : 2,
          "max" : 268.0,
          "min" : 253.0,
          "sum" : 521.0,
          "standardDeviation" : 10.606601717798213
        } ],
        "4" : [ {
          "mean" : 489.0,
          "variance" : 5484.0,
          "n" : 1,
          "max" : 571.0,
          "min" : 427.0,
          "sum" : 489.0,
          "standardDeviation" : 74.05403432629447
        }, {
          "mean" : 466.0,
          "variance" : 3698.0,
          "n" : 2,
          "max" : 509.0,
          "min" : 423.0,
          "sum" : 932.0,
          "standardDeviation" : 60.81118318204309
        }, {
          "mean" : 456.0,
          "variance" : 4607.999999999999,
          "n" : 2,
          "max" : 504.0,
          "min" : 408.0,
          "sum" : 912.0,
          "standardDeviation" : 67.88225099390856
        } ],
        "5" : [ {
          "mean" : 689.0,
          "variance" : 157719.0,
          "n" : 1,
          "max" : 1144.0,
          "min" : 412.0,
          "sum" : 689.0,
          "standardDeviation" : 397.1385148786252
        }, {
          "mean" : 443.0,
          "variance" : 4232.0,
          "n" : 2,
          "max" : 489.0,
          "min" : 397.0,
          "sum" : 886.0,
          "standardDeviation" : 65.05382386916237
        }, {
          "mean" : 549.5,
          "variance" : 58140.49999999999,
          "n" : 2,
          "max" : 720.0,
          "min" : 379.0,
          "sum" : 1099.0,
          "standardDeviation" : 241.1234123846127
        } ],
        "6" : [ {
          "mean" : 701.3333333333334,
          "variance" : 166984.3333333333,
          "n" : 1,
          "max" : 1173.0,
          "min" : 454.0,
          "sum" : 701.3333333333334,
          "standardDeviation" : 408.63716587375325
        }, {
          "mean" : 342.0,
          "variance" : 241.99999999999997,
          "n" : 2,
          "max" : 353.0,
          "min" : 331.0,
          "sum" : 684.0,
          "standardDeviation" : 15.556349186104045
        }, {
          "mean" : 292.5,
          "variance" : 312.5,
          "n" : 2,
          "max" : 305.0,
          "min" : 280.0,
          "sum" : 585.0,
          "standardDeviation" : 17.67766952966369
        } ],
        "7" : [ {
          "mean" : 552.5,
          "variance" : 3612.5000000000005,
          "n" : 1,
          "max" : 595.0,
          "min" : 510.0,
          "sum" : 552.5,
          "standardDeviation" : 60.10407640085654
        }, {
          "mean" : 462.0,
          "variance" : 50.00000000000001,
          "n" : 2,
          "max" : 467.0,
          "min" : 457.0,
          "sum" : 924.0,
          "standardDeviation" : 7.0710678118654755
        }, {
          "mean" : 460.0,
          "variance" : 241.99999999999997,
          "n" : 2,
          "max" : 471.0,
          "min" : 449.0,
          "sum" : 920.0,
          "standardDeviation" : 15.556349186104045
        } ],
        "8" : [ {
          "mean" : 556.5,
          "variance" : 5724.5,
          "n" : 1,
          "max" : 610.0,
          "min" : 503.0,
          "sum" : 556.5,
          "standardDeviation" : 75.66042558696059
        }, {
          "mean" : 429.5,
          "variance" : 1740.5000000000002,
          "n" : 2,
          "max" : 459.0,
          "min" : 400.0,
          "sum" : 859.0,
          "standardDeviation" : 41.71930009000631
        }, {
          "mean" : 399.0,
          "variance" : 200.00000000000003,
          "n" : 2,
          "max" : 409.0,
          "min" : 389.0,
          "sum" : 798.0,
          "standardDeviation" : 14.142135623730951
        } ],
        "9" : [ {
          "mean" : 376.0,
          "variance" : 24336.0,
          "n" : 1,
          "max" : 532.0,
          "min" : 220.0,
          "sum" : 376.0,
          "standardDeviation" : 156.0
        }, {
          "mean" : 456.0,
          "variance" : 1800.0000000000002,
          "n" : 2,
          "max" : 486.0,
          "min" : 426.0,
          "sum" : 912.0,
          "standardDeviation" : 42.42640687119285
        }, {
          "mean" : 388.0,
          "variance" : 1922.0,
          "n" : 2,
          "max" : 419.0,
          "min" : 357.0,
          "sum" : 776.0,
          "standardDeviation" : 43.840620433565945
        } ],
        "10" : [ {
          "mean" : 641.0,
          "variance" : 145179.0,
          "n" : 1,
          "max" : 1079.0,
          "min" : 386.0,
          "sum" : 641.0,
          "standardDeviation" : 381.02362131500456
        }, {
          "mean" : 406.0,
          "variance" : 0.0,
          "n" : 2,
          "max" : 406.0,
          "min" : 406.0,
          "sum" : 812.0,
          "standardDeviation" : 0.0
        }, {
          "mean" : 412.5,
          "variance" : 180.5,
          "n" : 2,
          "max" : 422.0,
          "min" : 403.0,
          "sum" : 825.0,
          "standardDeviation" : 13.435028842544403
        } ],
        "11" : [ {
          "mean" : 688.6666666666666,
          "variance" : 161126.33333333334,
          "n" : 1,
          "max" : 1115.0,
          "min" : 318.0,
          "sum" : 688.6666666666666,
          "standardDeviation" : 401.4054475631009
        }, {
          "mean" : 219.0,
          "variance" : 4418.0,
          "n" : 2,
          "max" : 266.0,
          "min" : 172.0,
          "sum" : 438.0,
          "standardDeviation" : 66.46803743153546
        }, {
          "mean" : 205.5,
          "variance" : 40.5,
          "n" : 2,
          "max" : 210.0,
          "min" : 201.0,
          "sum" : 411.0,
          "standardDeviation" : 6.363961030678928
        } ],
        "12" : [ {
          "mean" : 288.5,
          "variance" : 1860.5,
          "n" : 1,
          "max" : 319.0,
          "min" : 258.0,
          "sum" : 288.5,
          "standardDeviation" : 43.1335136523794
        }, {
          "mean" : 275.5,
          "variance" : 2112.5,
          "n" : 2,
          "max" : 308.0,
          "min" : 243.0,
          "sum" : 551.0,
          "standardDeviation" : 45.96194077712559
        }, {
          "mean" : 279.5,
          "variance" : 220.49999999999997,
          "n" : 2,
          "max" : 290.0,
          "min" : 269.0,
          "sum" : 559.0,
          "standardDeviation" : 14.849242404917497
        } ],
        "13" : [ {
          "mean" : 445.5,
          "variance" : 3960.4999999999995,
          "n" : 1,
          "max" : 490.0,
          "min" : 401.0,
          "sum" : 445.5,
          "standardDeviation" : 62.932503525602726
        }, {
          "mean" : 356.5,
          "variance" : 3612.5000000000005,
          "n" : 2,
          "max" : 399.0,
          "min" : 314.0,
          "sum" : 713.0,
          "standardDeviation" : 60.10407640085654
        }, {
          "mean" : 263.5,
          "variance" : 312.5,
          "n" : 2,
          "max" : 276.0,
          "min" : 251.0,
          "sum" : 527.0,
          "standardDeviation" : 17.67766952966369
        } ],
        "14" : [ {
          "mean" : 442.5,
          "variance" : 41184.49999999999,
          "n" : 1,
          "max" : 586.0,
          "min" : 299.0,
          "sum" : 442.5,
          "standardDeviation" : 202.93964620053913
        }, {
          "mean" : 322.5,
          "variance" : 40.5,
          "n" : 2,
          "max" : 327.0,
          "min" : 318.0,
          "sum" : 645.0,
          "standardDeviation" : 6.363961030678928
        }, {
          "mean" : 262.5,
          "variance" : 4324.500000000001,
          "n" : 2,
          "max" : 309.0,
          "min" : 216.0,
          "sum" : 525.0,
          "standardDeviation" : 65.76093065034893
        } ],
        "15" : [ {
          "mean" : 571.0,
          "variance" : 164043.99999999997,
          "n" : 1,
          "max" : 1023.0,
          "min" : 241.0,
          "sum" : 571.0,
          "standardDeviation" : 405.0234561108776
        }, {
          "mean" : 373.5,
          "variance" : 2520.5,
          "n" : 2,
          "max" : 409.0,
          "min" : 338.0,
          "sum" : 747.0,
          "standardDeviation" : 50.204581464244875
        }, {
          "mean" : 415.0,
          "variance" : 2888.0,
          "n" : 2,
          "max" : 453.0,
          "min" : 377.0,
          "sum" : 830.0,
          "standardDeviation" : 53.74011537017761
        } ],
        "16" : [ {
          "mean" : 410.6666666666667,
          "variance" : 10992.333333333332,
          "n" : 1,
          "max" : 531.0,
          "min" : 339.0,
          "sum" : 410.6666666666667,
          "standardDeviation" : 104.84432904708453
        }, {
          "mean" : 374.0,
          "variance" : 1352.0,
          "n" : 2,
          "max" : 400.0,
          "min" : 348.0,
          "sum" : 748.0,
          "standardDeviation" : 36.76955262170047
        }, {
          "mean" : 309.0,
          "variance" : 50.00000000000001,
          "n" : 2,
          "max" : 314.0,
          "min" : 304.0,
          "sum" : 618.0,
          "standardDeviation" : 7.0710678118654755
        } ],
        "17" : [ {
          "mean" : 696.6666666666666,
          "variance" : 30264.33333333333,
          "n" : 1,
          "max" : 805.0,
          "min" : 496.0,
          "sum" : 696.6666666666666,
          "standardDeviation" : 173.96647186551013
        }, {
          "mean" : 487.5,
          "variance" : 30504.499999999996,
          "n" : 2,
          "max" : 611.0,
          "min" : 364.0,
          "sum" : 975.0,
          "standardDeviation" : 174.65537495307723
        }, {
          "mean" : 406.5,
          "variance" : 3444.4999999999995,
          "n" : 2,
          "max" : 448.0,
          "min" : 365.0,
          "sum" : 813.0,
          "standardDeviation" : 58.68986283848344
        } ],
        "18" : [ {
          "mean" : 527.3333333333334,
          "variance" : 113601.33333333334,
          "n" : 1,
          "max" : 848.0,
          "min" : 176.0,
          "sum" : 527.3333333333334,
          "standardDeviation" : 337.0479688906808
        }, {
          "mean" : 306.0,
          "variance" : 33282.0,
          "n" : 2,
          "max" : 435.0,
          "min" : 177.0,
          "sum" : 612.0,
          "standardDeviation" : 182.43354954612926
        }, {
          "mean" : 276.0,
          "variance" : 14792.0,
          "n" : 2,
          "max" : 362.0,
          "min" : 190.0,
          "sum" : 552.0,
          "standardDeviation" : 121.62236636408618
        } ],
        "19" : [ {
          "mean" : 445.6666666666667,
          "variance" : 12241.333333333334,
          "n" : 1,
          "max" : 573.0,
          "min" : 373.0,
          "sum" : 445.6666666666667,
          "standardDeviation" : 110.64055916947154
        }, {
          "mean" : 563.0,
          "variance" : 241.99999999999997,
          "n" : 2,
          "max" : 574.0,
          "min" : 552.0,
          "sum" : 1126.0,
          "standardDeviation" : 15.556349186104045
        }, {
          "mean" : 259.5,
          "variance" : 60.49999999999999,
          "n" : 2,
          "max" : 265.0,
          "min" : 254.0,
          "sum" : 519.0,
          "standardDeviation" : 7.7781745930520225
        } ],
        "20" : [ {
          "mean" : 343.5,
          "variance" : 7564.500000000001,
          "n" : 1,
          "max" : 405.0,
          "min" : 282.0,
          "sum" : 343.5,
          "standardDeviation" : 86.97413408594535
        }, {
          "mean" : 392.5,
          "variance" : 8320.5,
          "n" : 2,
          "max" : 457.0,
          "min" : 328.0,
          "sum" : 785.0,
          "standardDeviation" : 91.21677477306463
        }, {
          "mean" : 345.5,
          "variance" : 42340.50000000001,
          "n" : 2,
          "max" : 491.0,
          "min" : 200.0,
          "sum" : 691.0,
          "standardDeviation" : 205.76807332528534
        } ],
        "21" : [ {
          "mean" : 258.0,
          "variance" : 15487.999999999998,
          "n" : 1,
          "max" : 346.0,
          "min" : 170.0,
          "sum" : 258.0,
          "standardDeviation" : 124.45079348883236
        }, {
          "mean" : 362.0,
          "variance" : 512.0000000000001,
          "n" : 2,
          "max" : 378.0,
          "min" : 346.0,
          "sum" : 724.0,
          "standardDeviation" : 22.627416997969522
        }, {
          "mean" : 280.5,
          "variance" : 60.49999999999999,
          "n" : 2,
          "max" : 286.0,
          "min" : 275.0,
          "sum" : 561.0,
          "standardDeviation" : 7.7781745930520225
        } ],
        "22" : [ {
          "mean" : 334.3333333333333,
          "variance" : 3152.3333333333335,
          "n" : 1,
          "max" : 399.0,
          "min" : 298.0,
          "sum" : 334.3333333333333,
          "standardDeviation" : 56.1456439390745
        }, {
          "mean" : 357.0,
          "variance" : 46818.00000000001,
          "n" : 2,
          "max" : 510.0,
          "min" : 204.0,
          "sum" : 714.0,
          "standardDeviation" : 216.37467504308356
        }, {
          "mean" : 426.0,
          "variance" : 24200.0,
          "n" : 2,
          "max" : 536.0,
          "min" : 316.0,
          "sum" : 852.0,
          "standardDeviation" : 155.56349186104046
        } ],
        "23" : [ {
          "mean" : 457.3333333333333,
          "variance" : 88622.33333333334,
          "n" : 1,
          "max" : 801.0,
          "min" : 279.0,
          "sum" : 457.3333333333333,
          "standardDeviation" : 297.6950341092934
        }, {
          "mean" : 390.5,
          "variance" : 35644.49999999999,
          "n" : 2,
          "max" : 524.0,
          "min" : 257.0,
          "sum" : 781.0,
          "standardDeviation" : 188.79751057680818
        }, {
          "mean" : 257.0,
          "variance" : 32.00000000000001,
          "n" : 2,
          "max" : 261.0,
          "min" : 253.0,
          "sum" : 514.0,
          "standardDeviation" : 5.656854249492381
        } ],
        "24" : [ {
          "mean" : 291.0,
          "variance" : 71.99999999999999,
          "n" : 1,
          "max" : 297.0,
          "min" : 285.0,
          "sum" : 291.0,
          "standardDeviation" : 8.48528137423857
        }, {
          "mean" : 278.0,
          "variance" : 7688.0,
          "n" : 2,
          "max" : 340.0,
          "min" : 216.0,
          "sum" : 556.0,
          "standardDeviation" : 87.68124086713189
        }, {
          "mean" : 232.0,
          "variance" : 32.00000000000001,
          "n" : 2,
          "max" : 236.0,
          "min" : 228.0,
          "sum" : 464.0,
          "standardDeviation" : 5.656854249492381
        } ],
        "25" : [ {
          "mean" : 484.0,
          "variance" : 17409.0,
          "n" : 1,
          "max" : 569.0,
          "min" : 332.0,
          "sum" : 484.0,
          "standardDeviation" : 131.94316958448437
        }, {
          "mean" : 312.5,
          "variance" : 2244.5,
          "n" : 2,
          "max" : 346.0,
          "min" : 279.0,
          "sum" : 625.0,
          "standardDeviation" : 47.37615433949868
        }, {
          "mean" : 314.0,
          "variance" : 881.9999999999999,
          "n" : 2,
          "max" : 335.0,
          "min" : 293.0,
          "sum" : 628.0,
          "standardDeviation" : 29.698484809834994
        } ],
        "26" : [ {
          "mean" : 346.6666666666667,
          "variance" : 1086.3333333333335,
          "n" : 1,
          "max" : 376.0,
          "min" : 311.0,
          "sum" : 346.6666666666667,
          "standardDeviation" : 32.95957119462165
        }, {
          "mean" : 301.0,
          "variance" : 1568.0,
          "n" : 2,
          "max" : 329.0,
          "min" : 273.0,
          "sum" : 602.0,
          "standardDeviation" : 39.59797974644666
        }, {
          "mean" : 288.5,
          "variance" : 924.5,
          "n" : 2,
          "max" : 310.0,
          "min" : 267.0,
          "sum" : 577.0,
          "standardDeviation" : 30.405591591021544
        } ],
        "27" : [ {
          "mean" : 804.0,
          "variance" : 265203.0,
          "n" : 1,
          "max" : 1398.0,
          "min" : 483.0,
          "sum" : 804.0,
          "standardDeviation" : 514.9786403337521
        }, {
          "mean" : 294.5,
          "variance" : 18624.5,
          "n" : 2,
          "max" : 391.0,
          "min" : 198.0,
          "sum" : 589.0,
          "standardDeviation" : 136.47160876900367
        }, {
          "mean" : 301.5,
          "variance" : 40.5,
          "n" : 2,
          "max" : 306.0,
          "min" : 297.0,
          "sum" : 603.0,
          "standardDeviation" : 6.363961030678928
        } ],
        "28" : [ {
          "mean" : 440.3333333333333,
          "variance" : 4229.333333333332,
          "n" : 1,
          "max" : 491.0,
          "min" : 367.0,
          "sum" : 440.3333333333333,
          "standardDeviation" : 65.03332479070505
        }, {
          "mean" : 288.5,
          "variance" : 40.5,
          "n" : 2,
          "max" : 293.0,
          "min" : 284.0,
          "sum" : 577.0,
          "standardDeviation" : 6.363961030678928
        }, {
          "mean" : 312.5,
          "variance" : 1740.5000000000002,
          "n" : 2,
          "max" : 342.0,
          "min" : 283.0,
          "sum" : 625.0,
          "standardDeviation" : 41.71930009000631
        } ],
        "29" : [ {
          "mean" : 633.3333333333334,
          "variance" : 14484.333333333334,
          "n" : 1,
          "max" : 714.0,
          "min" : 495.0,
          "sum" : 633.3333333333334,
          "standardDeviation" : 120.35087591427548
        }, {
          "mean" : 281.5,
          "variance" : 1200.5000000000002,
          "n" : 2,
          "max" : 306.0,
          "min" : 257.0,
          "sum" : 563.0,
          "standardDeviation" : 34.64823227814083
        }, {
          "mean" : 309.0,
          "variance" : 200.00000000000003,
          "n" : 2,
          "max" : 319.0,
          "min" : 299.0,
          "sum" : 618.0,
          "standardDeviation" : 14.142135623730951
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 660.4860267314697,
          "variance" : 1675460.3109358968,
          "n" : 818,
          "max" : 21440.0,
          "min" : 61.0,
          "sum" : 540277.5698663422,
          "standardDeviation" : 1294.3957319675837
        }, {
          "mean" : 205.8507462686565,
          "variance" : 61182.06335850627,
          "n" : 1005,
          "max" : 6237.0,
          "min" : 42.0,
          "sum" : 206879.9999999998,
          "standardDeviation" : 247.35008259247917
        }, {
          "mean" : 154.86121437422537,
          "variance" : 16058.32562780385,
          "n" : 807,
          "max" : 992.0,
          "min" : 29.0,
          "sum" : 124972.99999999987,
          "standardDeviation" : 126.7214489650582
        }, {
          "mean" : 118.14809960681522,
          "variance" : 9664.937355307655,
          "n" : 763,
          "max" : 900.0,
          "min" : 17.0,
          "sum" : 90147.00000000001,
          "standardDeviation" : 98.31041325977455
        }, {
          "mean" : 114.96182266009853,
          "variance" : 9953.447369300196,
          "n" : 812,
          "max" : 936.0,
          "min" : 24.0,
          "sum" : 93349.00000000001,
          "standardDeviation" : 99.76696532069218
        }, {
          "mean" : 102.19517795637208,
          "variance" : 39515.92048246829,
          "n" : 871,
          "max" : 5424.0,
          "min" : 17.0,
          "sum" : 89012.00000000007,
          "standardDeviation" : 198.78611742892986
        }, {
          "mean" : 97.6511627906977,
          "variance" : 7517.491259732889,
          "n" : 903,
          "max" : 718.0,
          "min" : 16.0,
          "sum" : 88179.00000000001,
          "standardDeviation" : 86.70346740317189
        }, {
          "mean" : 92.01760176017596,
          "variance" : 6027.36753124652,
          "n" : 909,
          "max" : 560.0,
          "min" : 16.0,
          "sum" : 83643.99999999996,
          "standardDeviation" : 77.63612259281449
        }, {
          "mean" : 112.11235955056182,
          "variance" : 69574.37607216321,
          "n" : 356,
          "max" : 4800.0,
          "min" : 20.0,
          "sum" : 39912.00000000001,
          "standardDeviation" : 263.7695510709362
        } ],
        "1" : [ {
          "mean" : 594.8674948240171,
          "variance" : 1675440.6435640818,
          "n" : 961,
          "max" : 17853.0,
          "min" : 39.0,
          "sum" : 571667.6625258804,
          "standardDeviation" : 1294.3881348204957
        }, {
          "mean" : 178.87780269058283,
          "variance" : 16943.54172894866,
          "n" : 892,
          "max" : 981.0,
          "min" : 39.0,
          "sum" : 159558.99999999988,
          "standardDeviation" : 130.16736045932814
        }, {
          "mean" : 175.71465629053176,
          "variance" : 141432.74184984938,
          "n" : 771,
          "max" : 9929.0,
          "min" : 37.0,
          "sum" : 135476.0,
          "standardDeviation" : 376.0754470180809
        }, {
          "mean" : 114.38059701492548,
          "variance" : 11051.688091299427,
          "n" : 804,
          "max" : 837.0,
          "min" : 17.0,
          "sum" : 91962.00000000009,
          "standardDeviation" : 105.12700933299409
        }, {
          "mean" : 105.73650385604107,
          "variance" : 6169.373208868064,
          "n" : 778,
          "max" : 555.0,
          "min" : 15.0,
          "sum" : 82262.99999999996,
          "standardDeviation" : 78.54535765319338
        }, {
          "mean" : 106.47876004592418,
          "variance" : 110479.06822650667,
          "n" : 871,
          "max" : 9620.0,
          "min" : 14.0,
          "sum" : 92742.99999999996,
          "standardDeviation" : 332.38391691913534
        }, {
          "mean" : 87.54152823920246,
          "variance" : 6695.377153759458,
          "n" : 903,
          "max" : 984.0,
          "min" : 14.0,
          "sum" : 79049.99999999983,
          "standardDeviation" : 81.82528431823172
        }, {
          "mean" : 86.135761589404,
          "variance" : 5973.38154842486,
          "n" : 906,
          "max" : 575.0,
          "min" : 16.0,
          "sum" : 78039.00000000003,
          "standardDeviation" : 77.28765456672146
        }, {
          "mean" : 117.73611111111116,
          "variance" : 288561.35356700735,
          "n" : 360,
          "max" : 10184.0,
          "min" : 18.0,
          "sum" : 42385.000000000015,
          "standardDeviation" : 537.1790702987295
        } ],
        "2" : [ {
          "mean" : 503.4889434889429,
          "variance" : 1436317.9476020804,
          "n" : 809,
          "max" : 23544.0,
          "min" : 27.0,
          "sum" : 407322.55528255476,
          "standardDeviation" : 1198.4648295223687
        }, {
          "mean" : 157.5541463414635,
          "variance" : 14660.84496570122,
          "n" : 1025,
          "max" : 985.0,
          "min" : 37.0,
          "sum" : 161493.0000000001,
          "standardDeviation" : 121.08197622148897
        }, {
          "mean" : 139.1560913705583,
          "variance" : 11800.317408845527,
          "n" : 788,
          "max" : 751.0,
          "min" : 37.0,
          "sum" : 109654.99999999994,
          "standardDeviation" : 108.6292658948109
        }, {
          "mean" : 130.87854251012132,
          "variance" : 63247.20955246734,
          "n" : 741,
          "max" : 6277.0,
          "min" : 23.0,
          "sum" : 96980.9999999999,
          "standardDeviation" : 251.4899790299155
        }, {
          "mean" : 116.71747211895915,
          "variance" : 13070.674421393463,
          "n" : 807,
          "max" : 1281.0,
          "min" : 15.0,
          "sum" : 94191.00000000003,
          "standardDeviation" : 114.32705026105354
        }, {
          "mean" : 98.04171364148824,
          "variance" : 10010.22737764703,
          "n" : 887,
          "max" : 852.0,
          "min" : 15.0,
          "sum" : 86963.00000000007,
          "standardDeviation" : 100.05112382001029
        }, {
          "mean" : 104.53801169590649,
          "variance" : 113691.82495857128,
          "n" : 855,
          "max" : 9636.0,
          "min" : 17.0,
          "sum" : 89380.00000000004,
          "standardDeviation" : 337.18218363159593
        }, {
          "mean" : 99.92356020942401,
          "variance" : 105761.38723259469,
          "n" : 955,
          "max" : 9818.0,
          "min" : 14.0,
          "sum" : 95426.99999999993,
          "standardDeviation" : 325.20975882127937
        }, {
          "mean" : 90.084656084656,
          "variance" : 6949.775307706342,
          "n" : 378,
          "max" : 586.0,
          "min" : 16.0,
          "sum" : 34051.99999999997,
          "standardDeviation" : 83.36531237694933
        } ],
        "3" : [ {
          "mean" : 485.2383419689113,
          "variance" : 1193806.8228022275,
          "n" : 960,
          "max" : 18260.0,
          "min" : 47.0,
          "sum" : 465828.80829015485,
          "standardDeviation" : 1092.6146726098032
        }, {
          "mean" : 161.12094064949608,
          "variance" : 14277.566074450488,
          "n" : 893,
          "max" : 952.0,
          "min" : 31.0,
          "sum" : 143881.0,
          "standardDeviation" : 119.48876965828416
        }, {
          "mean" : 144.4734111543449,
          "variance" : 10359.727538868412,
          "n" : 771,
          "max" : 663.0,
          "min" : 36.0,
          "sum" : 111388.99999999991,
          "standardDeviation" : 101.78274676421546
        }, {
          "mean" : 112.04166666666673,
          "variance" : 8947.480091969494,
          "n" : 744,
          "max" : 719.0,
          "min" : 20.0,
          "sum" : 83359.00000000004,
          "standardDeviation" : 94.5911205767724
        }, {
          "mean" : 101.2347066167292,
          "variance" : 6735.5798439450655,
          "n" : 801,
          "max" : 592.0,
          "min" : 15.0,
          "sum" : 81089.00000000009,
          "standardDeviation" : 82.07057843067189
        }, {
          "mean" : 90.26576576576574,
          "variance" : 6622.339660968739,
          "n" : 888,
          "max" : 664.0,
          "min" : 15.0,
          "sum" : 80155.99999999997,
          "standardDeviation" : 81.37775900679951
        }, {
          "mean" : 90.42514970059874,
          "variance" : 6091.436536997957,
          "n" : 835,
          "max" : 684.0,
          "min" : 16.0,
          "sum" : 75504.99999999994,
          "standardDeviation" : 78.0476555509386
        }, {
          "mean" : 108.96604600219058,
          "variance" : 225042.66222305511,
          "n" : 913,
          "max" : 10152.0,
          "min" : 14.0,
          "sum" : 99486.0,
          "standardDeviation" : 474.3866168254066
        }, {
          "mean" : 96.24090909090907,
          "variance" : 7686.447525367573,
          "n" : 440,
          "max" : 816.0,
          "min" : 15.0,
          "sum" : 42345.99999999999,
          "standardDeviation" : 87.6723874738653
        } ],
        "4" : [ {
          "mean" : 508.37341772151944,
          "variance" : 1441167.4253538845,
          "n" : 943,
          "max" : 23952.0,
          "min" : 52.0,
          "sum" : 479396.13291139284,
          "standardDeviation" : 1200.4863286826237
        }, {
          "mean" : 161.231802911534,
          "variance" : 111230.27916681314,
          "n" : 893,
          "max" : 9538.0,
          "min" : 37.0,
          "sum" : 143979.99999999985,
          "standardDeviation" : 333.51203751411003
        }, {
          "mean" : 142.89847715736047,
          "variance" : 141380.26922258298,
          "n" : 788,
          "max" : 10409.0,
          "min" : 34.0,
          "sum" : 112604.00000000006,
          "standardDeviation" : 376.0056771148316
        }, {
          "mean" : 126.24623803009574,
          "variance" : 13911.24613308847,
          "n" : 731,
          "max" : 868.0,
          "min" : 23.0,
          "sum" : 92285.99999999999,
          "standardDeviation" : 117.94594581030952
        }, {
          "mean" : 117.37468982630284,
          "variance" : 11863.20850145647,
          "n" : 806,
          "max" : 855.0,
          "min" : 15.0,
          "sum" : 94604.00000000009,
          "standardDeviation" : 108.9183570453414
        }, {
          "mean" : 105.26659038901595,
          "variance" : 12060.663097868683,
          "n" : 874,
          "max" : 766.0,
          "min" : 19.0,
          "sum" : 92002.99999999994,
          "standardDeviation" : 109.82105034040005
        }, {
          "mean" : 99.85294117647057,
          "variance" : 8532.49778285873,
          "n" : 850,
          "max" : 670.0,
          "min" : 15.0,
          "sum" : 84874.99999999999,
          "standardDeviation" : 92.37152041001994
        }, {
          "mean" : 110.24809575625684,
          "variance" : 118912.1627823177,
          "n" : 919,
          "max" : 10178.0,
          "min" : 16.0,
          "sum" : 101318.00000000004,
          "standardDeviation" : 344.83642902442557
        }, {
          "mean" : 125.95691609977327,
          "variance" : 244744.85495774075,
          "n" : 441,
          "max" : 10272.0,
          "min" : 15.0,
          "sum" : 55547.00000000001,
          "standardDeviation" : 494.7169442800001
        } ],
        "5" : [ {
          "mean" : 550.4852135815993,
          "variance" : 2371314.403564013,
          "n" : 908,
          "max" : 31941.0,
          "min" : 69.0,
          "sum" : 499840.5739320922,
          "standardDeviation" : 1539.9072710926503
        }, {
          "mean" : 165.2163934426229,
          "variance" : 68417.25290382757,
          "n" : 915,
          "max" : 7119.0,
          "min" : 37.0,
          "sum" : 151172.99999999994,
          "standardDeviation" : 261.5669185960403
        }, {
          "mean" : 163.04671717171746,
          "variance" : 265884.94218895654,
          "n" : 792,
          "max" : 10368.0,
          "min" : 0.0,
          "sum" : 129133.00000000023,
          "standardDeviation" : 515.6403225010206
        }, {
          "mean" : 122.16599190283404,
          "variance" : 10487.192679724263,
          "n" : 741,
          "max" : 791.0,
          "min" : 15.0,
          "sum" : 90525.00000000001,
          "standardDeviation" : 102.40699526753171
        }, {
          "mean" : 106.32795031055905,
          "variance" : 9081.84505114181,
          "n" : 805,
          "max" : 757.0,
          "min" : 16.0,
          "sum" : 85594.00000000003,
          "standardDeviation" : 95.29871484517412
        }, {
          "mean" : 107.35274356103022,
          "variance" : 117075.22408719531,
          "n" : 893,
          "max" : 10019.0,
          "min" : 16.0,
          "sum" : 95865.99999999999,
          "standardDeviation" : 342.16256967587105
        }, {
          "mean" : 102.98928571428576,
          "variance" : 108762.36579686706,
          "n" : 840,
          "max" : 9461.0,
          "min" : 19.0,
          "sum" : 86511.00000000003,
          "standardDeviation" : 329.7913973966984
        }, {
          "mean" : 92.83155650319819,
          "variance" : 5997.1007320464205,
          "n" : 938,
          "max" : 694.0,
          "min" : 15.0,
          "sum" : 87075.9999999999,
          "standardDeviation" : 77.44094996864656
        }, {
          "mean" : 121.73734939759039,
          "variance" : 233302.12166928552,
          "n" : 415,
          "max" : 9784.0,
          "min" : 20.0,
          "sum" : 50521.000000000015,
          "standardDeviation" : 483.0135833175766
        } ],
        "6" : [ {
          "mean" : 593.34628190899,
          "variance" : 1156823.0132889375,
          "n" : 896,
          "max" : 14642.0,
          "min" : 77.0,
          "sum" : 531638.2685904551,
          "standardDeviation" : 1075.5570711445012
        }, {
          "mean" : 197.49946062567395,
          "variance" : 33544.67359582106,
          "n" : 927,
          "max" : 1258.0,
          "min" : 41.0,
          "sum" : 183081.99999999974,
          "standardDeviation" : 183.15205048216376
        }, {
          "mean" : 152.74092615769695,
          "variance" : 15067.039312925612,
          "n" : 799,
          "max" : 802.0,
          "min" : 38.0,
          "sum" : 122039.99999999985,
          "standardDeviation" : 122.74786887325422
        }, {
          "mean" : 130.77656675749316,
          "variance" : 13812.553010843414,
          "n" : 734,
          "max" : 801.0,
          "min" : 22.0,
          "sum" : 95989.99999999997,
          "standardDeviation" : 117.52681826223075
        }, {
          "mean" : 127.20676691729321,
          "variance" : 19036.989816133802,
          "n" : 798,
          "max" : 1302.0,
          "min" : 25.0,
          "sum" : 101510.99999999999,
          "standardDeviation" : 137.97459844527108
        }, {
          "mean" : 116.1865407319952,
          "variance" : 14602.77130799569,
          "n" : 847,
          "max" : 928.0,
          "min" : 15.0,
          "sum" : 98409.99999999993,
          "standardDeviation" : 120.84192694588948
        }, {
          "mean" : 119.11060948081277,
          "variance" : 127428.50752572979,
          "n" : 886,
          "max" : 10255.0,
          "min" : 15.0,
          "sum" : 105532.00000000012,
          "standardDeviation" : 356.97129790184783
        }, {
          "mean" : 115.14455231930971,
          "variance" : 105562.3937688868,
          "n" : 927,
          "max" : 9530.0,
          "min" : 14.0,
          "sum" : 106739.0000000001,
          "standardDeviation" : 324.90366844479735
        }, {
          "mean" : 94.69053117782913,
          "variance" : 7673.144748096824,
          "n" : 433,
          "max" : 702.0,
          "min" : 20.0,
          "sum" : 41001.000000000015,
          "standardDeviation" : 87.59648821783225
        } ],
        "7" : [ {
          "mean" : 500.3847583643129,
          "variance" : 2402870.0118232886,
          "n" : 1071,
          "max" : 39845.0,
          "min" : 49.0,
          "sum" : 535912.0762081791,
          "standardDeviation" : 1550.1193540573863
        }, {
          "mean" : 169.22039859320017,
          "variance" : 19330.064043502905,
          "n" : 853,
          "max" : 999.0,
          "min" : 31.0,
          "sum" : 144344.99999999974,
          "standardDeviation" : 139.03260065000188
        }, {
          "mean" : 150.27191867852605,
          "variance" : 15955.182963616797,
          "n" : 787,
          "max" : 1036.0,
          "min" : 28.0,
          "sum" : 118264.0,
          "standardDeviation" : 126.3138272859183
        }, {
          "mean" : 118.53815789473693,
          "variance" : 13356.298937313639,
          "n" : 760,
          "max" : 1407.0,
          "min" : 16.0,
          "sum" : 90089.00000000006,
          "standardDeviation" : 115.56945503598102
        }, {
          "mean" : 95.49043062200964,
          "variance" : 6567.294519095783,
          "n" : 836,
          "max" : 597.0,
          "min" : 22.0,
          "sum" : 79830.00000000006,
          "standardDeviation" : 81.0388457413837
        }, {
          "mean" : 95.38033175355446,
          "variance" : 7445.332044492419,
          "n" : 844,
          "max" : 681.0,
          "min" : 18.0,
          "sum" : 80500.99999999996,
          "standardDeviation" : 86.28633753087692
        }, {
          "mean" : 109.30076004343118,
          "variance" : 214530.2735755086,
          "n" : 921,
          "max" : 10191.0,
          "min" : 15.0,
          "sum" : 100666.00000000012,
          "standardDeviation" : 463.17412878474613
        }, {
          "mean" : 90.26755447941889,
          "variance" : 5511.364691466732,
          "n" : 826,
          "max" : 600.0,
          "min" : 15.0,
          "sum" : 74561.0,
          "standardDeviation" : 74.23856606553451
        }, {
          "mean" : 138.19540229885058,
          "variance" : 577266.4631488287,
          "n" : 348,
          "max" : 10084.0,
          "min" : 17.0,
          "sum" : 48092.0,
          "standardDeviation" : 759.7805361739854
        } ],
        "8" : [ {
          "mean" : 504.95715509854284,
          "variance" : 1754059.4338402674,
          "n" : 1162,
          "max" : 26132.0,
          "min" : 46.0,
          "sum" : 586760.2142245068,
          "standardDeviation" : 1324.4090885524258
        }, {
          "mean" : 173.19613259668515,
          "variance" : 18027.162032048775,
          "n" : 724,
          "max" : 1126.0,
          "min" : 37.0,
          "sum" : 125394.00000000004,
          "standardDeviation" : 134.26526740765377
        }, {
          "mean" : 146.12125340599442,
          "variance" : 12561.430025166277,
          "n" : 734,
          "max" : 693.0,
          "min" : 21.0,
          "sum" : 107252.99999999991,
          "standardDeviation" : 112.07778560074372
        }, {
          "mean" : 119.05882352941177,
          "variance" : 9771.729411764709,
          "n" : 731,
          "max" : 821.0,
          "min" : 16.0,
          "sum" : 87032.0,
          "standardDeviation" : 98.85205820702323
        }, {
          "mean" : 93.97062579821213,
          "variance" : 6240.440312523475,
          "n" : 783,
          "max" : 920.0,
          "min" : 14.0,
          "sum" : 73579.00000000009,
          "standardDeviation" : 78.99645759477747
        }, {
          "mean" : 102.0173410404624,
          "variance" : 137970.37122671795,
          "n" : 865,
          "max" : 9638.0,
          "min" : 17.0,
          "sum" : 88244.99999999997,
          "standardDeviation" : 371.44363129109905
        }, {
          "mean" : 78.7542857142857,
          "variance" : 3195.0093494606062,
          "n" : 875,
          "max" : 615.0,
          "min" : 14.0,
          "sum" : 68909.99999999999,
          "standardDeviation" : 56.52441374716421
        }, {
          "mean" : 83.15366430260043,
          "variance" : 3976.667483598414,
          "n" : 846,
          "max" : 593.0,
          "min" : 15.0,
          "sum" : 70347.99999999997,
          "standardDeviation" : 63.06082368315858
        }, {
          "mean" : 84.68702290076331,
          "variance" : 4743.473559762373,
          "n" : 524,
          "max" : 566.0,
          "min" : 17.0,
          "sum" : 44375.99999999997,
          "standardDeviation" : 68.87287971155536
        } ],
        "9" : [ {
          "mean" : 576.9396267837542,
          "variance" : 1223814.858988431,
          "n" : 906,
          "max" : 17353.0,
          "min" : 69.0,
          "sum" : 522707.3018660813,
          "standardDeviation" : 1106.2616593683572
        }, {
          "mean" : 523.7416576964476,
          "variance" : 1.066490985646529E8,
          "n" : 929,
          "max" : 314908.0,
          "min" : 38.0,
          "sum" : 486555.9999999999,
          "standardDeviation" : 10327.105042781975
        }, {
          "mean" : 188.22791293213834,
          "variance" : 403926.77363012545,
          "n" : 781,
          "max" : 10468.0,
          "min" : 37.0,
          "sum" : 147006.00000000003,
          "standardDeviation" : 635.5523374436801
        }, {
          "mean" : 129.13802435723952,
          "variance" : 128666.79393159287,
          "n" : 739,
          "max" : 9451.0,
          "min" : 17.0,
          "sum" : 95433.0,
          "standardDeviation" : 358.7015387917828
        }, {
          "mean" : 118.0611735330835,
          "variance" : 120227.22250312098,
          "n" : 801,
          "max" : 9528.0,
          "min" : 23.0,
          "sum" : 94566.99999999988,
          "standardDeviation" : 346.73797384065244
        }, {
          "mean" : 98.03707995365005,
          "variance" : 6738.55082765833,
          "n" : 863,
          "max" : 582.0,
          "min" : 16.0,
          "sum" : 84606.0,
          "standardDeviation" : 82.08867661047003
        }, {
          "mean" : 93.6879999999999,
          "variance" : 6847.999798627001,
          "n" : 875,
          "max" : 596.0,
          "min" : 19.0,
          "sum" : 81976.99999999991,
          "standardDeviation" : 82.75264224559238
        }, {
          "mean" : 94.39487726787621,
          "variance" : 7367.209289968892,
          "n" : 937,
          "max" : 665.0,
          "min" : 15.0,
          "sum" : 88448.00000000001,
          "standardDeviation" : 85.83244893377383
        }, {
          "mean" : 96.63373493975892,
          "variance" : 6315.015284325708,
          "n" : 415,
          "max" : 541.0,
          "min" : 16.0,
          "sum" : 40102.999999999956,
          "standardDeviation" : 79.46707044006158
        } ],
        "10" : [ {
          "mean" : 602.4144893111642,
          "variance" : 1586166.9587909984,
          "n" : 837,
          "max" : 22935.0,
          "min" : 44.0,
          "sum" : 504220.9275534444,
          "standardDeviation" : 1259.4312044693027
        }, {
          "mean" : 165.88121827411163,
          "variance" : 18138.704372498072,
          "n" : 985,
          "max" : 944.0,
          "min" : 35.0,
          "sum" : 163392.99999999997,
          "standardDeviation" : 134.68000732290622
        }, {
          "mean" : 139.2528160200251,
          "variance" : 10788.006179403446,
          "n" : 799,
          "max" : 785.0,
          "min" : 27.0,
          "sum" : 111263.00000000006,
          "standardDeviation" : 103.86532712798552
        }, {
          "mean" : 123.16916780354698,
          "variance" : 10118.733638240925,
          "n" : 733,
          "max" : 800.0,
          "min" : 22.0,
          "sum" : 90282.99999999994,
          "standardDeviation" : 100.59191636628127
        }, {
          "mean" : 110.69764560099144,
          "variance" : 9375.521371621146,
          "n" : 807,
          "max" : 779.0,
          "min" : 16.0,
          "sum" : 89333.00000000009,
          "standardDeviation" : 96.82727596922855
        }, {
          "mean" : 95.2932584269663,
          "variance" : 6805.714802644051,
          "n" : 890,
          "max" : 636.0,
          "min" : 16.0,
          "sum" : 84811.00000000001,
          "standardDeviation" : 82.49675631589433
        }, {
          "mean" : 97.25990675990681,
          "variance" : 6194.213583188504,
          "n" : 858,
          "max" : 612.0,
          "min" : 16.0,
          "sum" : 83449.00000000004,
          "standardDeviation" : 78.70332637943903
        }, {
          "mean" : 116.86582809224309,
          "variance" : 200448.58428750897,
          "n" : 954,
          "max" : 9926.0,
          "min" : 16.0,
          "sum" : 111489.99999999991,
          "standardDeviation" : 447.71484707066503
        }, {
          "mean" : 131.08947368421067,
          "variance" : 267376.4352451048,
          "n" : 380,
          "max" : 9999.0,
          "min" : 15.0,
          "sum" : 49814.00000000006,
          "standardDeviation" : 517.0845532841846
        } ],
        "11" : [ {
          "mean" : 578.7365010799138,
          "variance" : 1267278.7650878513,
          "n" : 921,
          "max" : 16497.0,
          "min" : 44.0,
          "sum" : 533016.3174946005,
          "standardDeviation" : 1125.7347667580723
        }, {
          "mean" : 173.71532091097308,
          "variance" : 19785.258770207794,
          "n" : 966,
          "max" : 1012.0,
          "min" : 28.0,
          "sum" : 167809.0,
          "standardDeviation" : 140.66008236243783
        }, {
          "mean" : 154.78465679676987,
          "variance" : 14450.913133541091,
          "n" : 743,
          "max" : 850.0,
          "min" : 31.0,
          "sum" : 115005.00000000001,
          "standardDeviation" : 120.21195087652929
        }, {
          "mean" : 139.62358845671275,
          "variance" : 375437.0315031866,
          "n" : 797,
          "max" : 17157.0,
          "min" : 15.0,
          "sum" : 111280.00000000006,
          "standardDeviation" : 612.7291665190965
        }, {
          "mean" : 118.53785900783299,
          "variance" : 12092.154773972257,
          "n" : 766,
          "max" : 998.0,
          "min" : 14.0,
          "sum" : 90800.00000000007,
          "standardDeviation" : 109.9643340996173
        }, {
          "mean" : 100.41865756541519,
          "variance" : 8678.432726669615,
          "n" : 879,
          "max" : 803.0,
          "min" : 14.0,
          "sum" : 88267.99999999996,
          "standardDeviation" : 93.15810607064537
        }, {
          "mean" : 108.31333333333338,
          "variance" : 123111.89726362629,
          "n" : 900,
          "max" : 10236.0,
          "min" : 14.0,
          "sum" : 97482.00000000004,
          "standardDeviation" : 350.8730500674372
        }, {
          "mean" : 103.67766776677672,
          "variance" : 107533.46977605247,
          "n" : 909,
          "max" : 9618.0,
          "min" : 14.0,
          "sum" : 94243.00000000004,
          "standardDeviation" : 327.92296317283495
        }, {
          "mean" : 123.78453038674031,
          "variance" : 286750.09194839373,
          "n" : 362,
          "max" : 10147.0,
          "min" : 17.0,
          "sum" : 44809.99999999999,
          "standardDeviation" : 535.490515273981
        } ],
        "12" : [ {
          "mean" : 511.5513761467893,
          "variance" : 1795209.277890666,
          "n" : 1085,
          "max" : 27004.0,
          "min" : 42.0,
          "sum" : 555033.2431192665,
          "standardDeviation" : 1339.8542002362294
        }, {
          "mean" : 183.19557195571966,
          "variance" : 138081.7905222401,
          "n" : 813,
          "max" : 9922.0,
          "min" : 28.0,
          "sum" : 148938.0000000001,
          "standardDeviation" : 371.5935824556717
        }, {
          "mean" : 168.60519125683064,
          "variance" : 19289.09288683067,
          "n" : 732,
          "max" : 1043.0,
          "min" : 39.0,
          "sum" : 123419.00000000003,
          "standardDeviation" : 138.88517878748138
        }, {
          "mean" : 124.78768020969858,
          "variance" : 11240.359060622024,
          "n" : 763,
          "max" : 885.0,
          "min" : 29.0,
          "sum" : 95213.00000000001,
          "standardDeviation" : 106.02055961285068
        }, {
          "mean" : 116.31788931788923,
          "variance" : 10666.552166673306,
          "n" : 777,
          "max" : 763.0,
          "min" : 29.0,
          "sum" : 90378.99999999993,
          "standardDeviation" : 103.27900157666758
        }, {
          "mean" : 100.64852607709743,
          "variance" : 8537.340571037337,
          "n" : 882,
          "max" : 664.0,
          "min" : 15.0,
          "sum" : 88771.99999999993,
          "standardDeviation" : 92.39773033488072
        }, {
          "mean" : 116.06490384615385,
          "variance" : 128841.76473549023,
          "n" : 832,
          "max" : 10096.0,
          "min" : 16.0,
          "sum" : 96566.0,
          "standardDeviation" : 358.94535062525915
        }, {
          "mean" : 117.18969298245612,
          "variance" : 157687.92336236467,
          "n" : 912,
          "max" : 9928.0,
          "min" : 17.0,
          "sum" : 106876.99999999999,
          "standardDeviation" : 397.0993872601224
        }, {
          "mean" : 102.80444444444446,
          "variance" : 8918.001761940122,
          "n" : 450,
          "max" : 721.0,
          "min" : 20.0,
          "sum" : 46262.00000000001,
          "standardDeviation" : 94.43517227145891
        } ],
        "13" : [ {
          "mean" : 560.239199157008,
          "variance" : 1589361.8003183445,
          "n" : 944,
          "max" : 19010.0,
          "min" : 49.0,
          "sum" : 528865.8040042155,
          "standardDeviation" : 1260.6989332581925
        }, {
          "mean" : 155.2587859424922,
          "variance" : 13026.595005347539,
          "n" : 939,
          "max" : 927.0,
          "min" : 33.0,
          "sum" : 145788.00000000017,
          "standardDeviation" : 114.13410973651803
        }, {
          "mean" : 146.4067567567566,
          "variance" : 13033.69224115862,
          "n" : 740,
          "max" : 843.0,
          "min" : 35.0,
          "sum" : 108340.99999999988,
          "standardDeviation" : 114.16519715376758
        }, {
          "mean" : 123.18508655126492,
          "variance" : 17271.191030625825,
          "n" : 751,
          "max" : 1776.0,
          "min" : 17.0,
          "sum" : 92511.99999999996,
          "standardDeviation" : 131.41990347974627
        }, {
          "mean" : 118.2701005025126,
          "variance" : 11738.104312442709,
          "n" : 796,
          "max" : 758.0,
          "min" : 23.0,
          "sum" : 94143.00000000003,
          "standardDeviation" : 108.3425323335333
        }, {
          "mean" : 107.43707865168534,
          "variance" : 10480.41504657423,
          "n" : 890,
          "max" : 917.0,
          "min" : 16.0,
          "sum" : 95618.99999999996,
          "standardDeviation" : 102.37389826793854
        }, {
          "mean" : 127.91549295774642,
          "variance" : 262477.8048360668,
          "n" : 852,
          "max" : 9965.0,
          "min" : 16.0,
          "sum" : 108983.99999999996,
          "standardDeviation" : 512.325877577999
        }, {
          "mean" : 97.62959076600221,
          "variance" : 8227.052778928983,
          "n" : 953,
          "max" : 792.0,
          "min" : 15.0,
          "sum" : 93041.0000000001,
          "standardDeviation" : 90.70310236661689
        }, {
          "mean" : 98.19525065963063,
          "variance" : 7649.490876854998,
          "n" : 379,
          "max" : 586.0,
          "min" : 16.0,
          "sum" : 37216.00000000001,
          "standardDeviation" : 87.46136791095253
        } ],
        "14" : [ {
          "mean" : 464.6433823529422,
          "variance" : 1021394.5406001405,
          "n" : 1083,
          "max" : 16494.0,
          "min" : 40.0,
          "sum" : 503208.7830882364,
          "standardDeviation" : 1010.6406584934828
        }, {
          "mean" : 164.50486618004885,
          "variance" : 131909.15162062764,
          "n" : 822,
          "max" : 10085.0,
          "min" : 35.0,
          "sum" : 135223.00000000015,
          "standardDeviation" : 363.1929950048977
        }, {
          "mean" : 132.79151061173525,
          "variance" : 11617.085227840196,
          "n" : 801,
          "max" : 670.0,
          "min" : 28.0,
          "sum" : 106365.99999999993,
          "standardDeviation" : 107.78258313772312
        }, {
          "mean" : 112.81867388362659,
          "variance" : 11161.937265989714,
          "n" : 739,
          "max" : 1034.0,
          "min" : 17.0,
          "sum" : 83373.00000000004,
          "standardDeviation" : 105.65006988161302
        }, {
          "mean" : 109.05301204819273,
          "variance" : 11352.069562689865,
          "n" : 830,
          "max" : 958.0,
          "min" : 19.0,
          "sum" : 90513.99999999996,
          "standardDeviation" : 106.54609125955707
        }, {
          "mean" : 110.9349315068494,
          "variance" : 126615.66547553829,
          "n" : 876,
          "max" : 10239.0,
          "min" : 20.0,
          "sum" : 97179.00000000007,
          "standardDeviation" : 355.8309506992587
        }, {
          "mean" : 95.73427331887208,
          "variance" : 8801.511288776466,
          "n" : 922,
          "max" : 894.0,
          "min" : 14.0,
          "sum" : 88267.00000000006,
          "standardDeviation" : 93.81637004689782
        }, {
          "mean" : 95.86244019138756,
          "variance" : 9441.1846474515,
          "n" : 836,
          "max" : 669.0,
          "min" : 16.0,
          "sum" : 80141.0,
          "standardDeviation" : 97.1657586161478
        }, {
          "mean" : 101.21428571428572,
          "variance" : 10349.989765458418,
          "n" : 336,
          "max" : 825.0,
          "min" : 29.0,
          "sum" : 34008.0,
          "standardDeviation" : 101.73489944683888
        } ],
        "15" : [ {
          "mean" : 570.4319196428565,
          "variance" : 1315464.9562537414,
          "n" : 891,
          "max" : 18930.0,
          "min" : 64.0,
          "sum" : 508254.84040178516,
          "standardDeviation" : 1146.9372067614431
        }, {
          "mean" : 188.49152542372883,
          "variance" : 126504.5174254543,
          "n" : 944,
          "max" : 10193.0,
          "min" : 40.0,
          "sum" : 177936.00000000003,
          "standardDeviation" : 355.67473543316834
        }, {
          "mean" : 148.67049808429113,
          "variance" : 15935.768527500957,
          "n" : 783,
          "max" : 901.0,
          "min" : 36.0,
          "sum" : 116408.99999999996,
          "standardDeviation" : 126.23695389029695
        }, {
          "mean" : 135.83378378378387,
          "variance" : 15175.51631313317,
          "n" : 740,
          "max" : 1042.0,
          "min" : 16.0,
          "sum" : 100517.00000000006,
          "standardDeviation" : 123.1889455800851
        }, {
          "mean" : 122.71059113300495,
          "variance" : 13108.817495581083,
          "n" : 812,
          "max" : 1101.0,
          "min" : 15.0,
          "sum" : 99641.00000000003,
          "standardDeviation" : 114.49374435130106
        }, {
          "mean" : 117.99886749716879,
          "variance" : 113018.11677876132,
          "n" : 883,
          "max" : 9732.0,
          "min" : 18.0,
          "sum" : 104193.00000000004,
          "standardDeviation" : 336.1816722826533
        }, {
          "mean" : 131.46332945285215,
          "variance" : 226177.8247026546,
          "n" : 859,
          "max" : 9798.0,
          "min" : 17.0,
          "sum" : 112927.0,
          "standardDeviation" : 475.5815647211891
        }, {
          "mean" : 121.46016771488463,
          "variance" : 195842.43755128342,
          "n" : 954,
          "max" : 9631.0,
          "min" : 17.0,
          "sum" : 115872.99999999994,
          "standardDeviation" : 442.5408879993841
        }, {
          "mean" : 113.9050131926121,
          "variance" : 11002.34545099189,
          "n" : 379,
          "max" : 780.0,
          "min" : 21.0,
          "sum" : 43169.999999999985,
          "standardDeviation" : 104.8920657199194
        } ],
        "16" : [ {
          "mean" : 543.5137524557961,
          "variance" : 2012205.1350122562,
          "n" : 1013,
          "max" : 27720.0,
          "min" : 63.0,
          "sum" : 550579.4312377215,
          "standardDeviation" : 1418.5221658515795
        }, {
          "mean" : 165.54524886877823,
          "variance" : 131592.91867502301,
          "n" : 884,
          "max" : 10339.0,
          "min" : 36.0,
          "sum" : 146341.99999999994,
          "standardDeviation" : 362.75738266095016
        }, {
          "mean" : 139.22074468085117,
          "variance" : 12399.293417287576,
          "n" : 752,
          "max" : 783.0,
          "min" : 26.0,
          "sum" : 104694.00000000007,
          "standardDeviation" : 111.352114561366
        }, {
          "mean" : 131.89730423620017,
          "variance" : 19138.752936168265,
          "n" : 779,
          "max" : 1330.0,
          "min" : 16.0,
          "sum" : 102747.99999999993,
          "standardDeviation" : 138.34288176906054
        }, {
          "mean" : 137.60533333333345,
          "variance" : 20746.38608633732,
          "n" : 750,
          "max" : 914.0,
          "min" : 15.0,
          "sum" : 103204.00000000009,
          "standardDeviation" : 144.03605828519926
        }, {
          "mean" : 121.66029246344209,
          "variance" : 19020.438522887336,
          "n" : 889,
          "max" : 1394.0,
          "min" : 17.0,
          "sum" : 108156.00000000001,
          "standardDeviation" : 137.91460590846546
        }, {
          "mean" : 123.70279720279724,
          "variance" : 138126.29546474534,
          "n" : 858,
          "max" : 10518.0,
          "min" : 15.0,
          "sum" : 106137.00000000003,
          "standardDeviation" : 371.6534615266557
        }, {
          "mean" : 125.85471898197248,
          "variance" : 124358.98205573317,
          "n" : 943,
          "max" : 10248.0,
          "min" : 15.0,
          "sum" : 118681.00000000004,
          "standardDeviation" : 352.6456891211534
        }, {
          "mean" : 122.49602122015926,
          "variance" : 15748.872989446372,
          "n" : 377,
          "max" : 865.0,
          "min" : 19.0,
          "sum" : 46181.000000000044,
          "standardDeviation" : 125.4945137822621
        } ],
        "17" : [ {
          "mean" : 580.0078212290505,
          "variance" : 2860639.511124438,
          "n" : 890,
          "max" : 38483.0,
          "min" : 57.0,
          "sum" : 516206.9608938549,
          "standardDeviation" : 1691.342517388018
        }, {
          "mean" : 136.9416846652267,
          "variance" : 8959.95119023991,
          "n" : 926,
          "max" : 689.0,
          "min" : 32.0,
          "sum" : 126807.99999999991,
          "standardDeviation" : 94.65701870564016
        }, {
          "mean" : 175.8725000000001,
          "variance" : 1537926.3641989953,
          "n" : 800,
          "max" : 35099.0,
          "min" : 32.0,
          "sum" : 140698.00000000006,
          "standardDeviation" : 1240.1315914849501
        }, {
          "mean" : 117.16329284750346,
          "variance" : 10001.885461574942,
          "n" : 741,
          "max" : 782.0,
          "min" : 23.0,
          "sum" : 86818.00000000006,
          "standardDeviation" : 100.00942686354593
        }, {
          "mean" : 105.34629861982441,
          "variance" : 7174.498017061478,
          "n" : 797,
          "max" : 630.0,
          "min" : 17.0,
          "sum" : 83961.00000000006,
          "standardDeviation" : 84.70240856706188
        }, {
          "mean" : 93.6325167037863,
          "variance" : 7355.414415286798,
          "n" : 898,
          "max" : 1003.0,
          "min" : 15.0,
          "sum" : 84082.00000000009,
          "standardDeviation" : 85.7637126953282
        }, {
          "mean" : 102.38702460850108,
          "variance" : 107125.94634880808,
          "n" : 894,
          "max" : 9573.0,
          "min" : 18.0,
          "sum" : 91533.99999999997,
          "standardDeviation" : 327.30100267003166
        }, {
          "mean" : 102.25599128540313,
          "variance" : 131688.67267398915,
          "n" : 918,
          "max" : 10852.0,
          "min" : 19.0,
          "sum" : 93871.00000000007,
          "standardDeviation" : 362.889339432821
        }, {
          "mean" : 92.52631578947367,
          "variance" : 5650.413553673102,
          "n" : 380,
          "max" : 516.0,
          "min" : 14.0,
          "sum" : 35159.99999999999,
          "standardDeviation" : 75.1692327596411
        } ],
        "18" : [ {
          "mean" : 597.3521878335101,
          "variance" : 2118513.37369446,
          "n" : 932,
          "max" : 37044.0,
          "min" : 58.0,
          "sum" : 556732.2390608315,
          "standardDeviation" : 1455.5113787581531
        }, {
          "mean" : 186.01569037656878,
          "variance" : 23343.362057219227,
          "n" : 956,
          "max" : 1070.0,
          "min" : 38.0,
          "sum" : 177830.99999999977,
          "standardDeviation" : 152.78534634322503
        }, {
          "mean" : 155.61859838274944,
          "variance" : 14985.591178599627,
          "n" : 742,
          "max" : 1010.0,
          "min" : 37.0,
          "sum" : 115469.00000000009,
          "standardDeviation" : 122.41564923897445
        }, {
          "mean" : 138.59230769230757,
          "variance" : 141918.26232842891,
          "n" : 780,
          "max" : 10168.0,
          "min" : 30.0,
          "sum" : 108101.99999999991,
          "standardDeviation" : 376.72040338748434
        }, {
          "mean" : 116.11184210526322,
          "variance" : 9774.816196865679,
          "n" : 760,
          "max" : 987.0,
          "min" : 21.0,
          "sum" : 88245.00000000004,
          "standardDeviation" : 98.86767012965198
        }, {
          "mean" : 114.1170568561873,
          "variance" : 110798.67489847119,
          "n" : 897,
          "max" : 9692.0,
          "min" : 15.0,
          "sum" : 102363.00000000001,
          "standardDeviation" : 332.8643490950498
        }, {
          "mean" : 94.24191750278708,
          "variance" : 6725.203687390504,
          "n" : 897,
          "max" : 919.0,
          "min" : 15.0,
          "sum" : 84535.0,
          "standardDeviation" : 82.00733922881844
        }, {
          "mean" : 90.1841234840132,
          "variance" : 5168.214405494663,
          "n" : 907,
          "max" : 481.0,
          "min" : 14.0,
          "sum" : 81796.99999999997,
          "standardDeviation" : 71.89029423708504
        }, {
          "mean" : 101.89544235924932,
          "variance" : 8905.228285623689,
          "n" : 373,
          "max" : 642.0,
          "min" : 18.0,
          "sum" : 38006.99999999999,
          "standardDeviation" : 94.36751711062281
        } ],
        "19" : [ {
          "mean" : 610.2349665924288,
          "variance" : 1648315.0027001656,
          "n" : 893,
          "max" : 24293.0,
          "min" : 43.0,
          "sum" : 544939.825167039,
          "standardDeviation" : 1283.8672060225565
        }, {
          "mean" : 165.24772497472188,
          "variance" : 12084.961849576128,
          "n" : 989,
          "max" : 908.0,
          "min" : 0.0,
          "sum" : 163429.99999999994,
          "standardDeviation" : 109.93162351924094
        }, {
          "mean" : 160.1001353179974,
          "variance" : 84595.10920052366,
          "n" : 739,
          "max" : 7438.0,
          "min" : 35.0,
          "sum" : 118314.00000000007,
          "standardDeviation" : 290.85238386598047
        }, {
          "mean" : 123.77462887989196,
          "variance" : 9641.855895976947,
          "n" : 741,
          "max" : 739.0,
          "min" : 15.0,
          "sum" : 91716.99999999994,
          "standardDeviation" : 98.19295237427657
        }, {
          "mean" : 115.42857142857132,
          "variance" : 10546.12828713575,
          "n" : 805,
          "max" : 888.0,
          "min" : 23.0,
          "sum" : 92919.99999999991,
          "standardDeviation" : 102.69434398804907
        }, {
          "mean" : 112.95608108108098,
          "variance" : 124696.22016590998,
          "n" : 888,
          "max" : 10313.0,
          "min" : 16.0,
          "sum" : 100304.99999999991,
          "standardDeviation" : 353.12351970084063
        }, {
          "mean" : 98.59743290548415,
          "variance" : 6397.941722374281,
          "n" : 857,
          "max" : 524.0,
          "min" : 15.0,
          "sum" : 84497.99999999993,
          "standardDeviation" : 79.98713473036949
        }, {
          "mean" : 117.2232704402516,
          "variance" : 219950.71295214692,
          "n" : 954,
          "max" : 10267.0,
          "min" : 15.0,
          "sum" : 111831.00000000003,
          "standardDeviation" : 468.98903286979635
        }, {
          "mean" : 101.53157894736844,
          "variance" : 6372.228551590051,
          "n" : 380,
          "max" : 701.0,
          "min" : 18.0,
          "sum" : 38582.00000000001,
          "standardDeviation" : 79.82623974352074
        } ],
        "20" : [ {
          "mean" : 594.0440386680987,
          "variance" : 1666183.4959079728,
          "n" : 926,
          "max" : 23769.0,
          "min" : 41.0,
          "sum" : 550084.7798066593,
          "standardDeviation" : 1290.807303941209
        }, {
          "mean" : 185.50561797752792,
          "variance" : 202750.15819948984,
          "n" : 979,
          "max" : 10483.0,
          "min" : 37.0,
          "sum" : 181609.99999999983,
          "standardDeviation" : 450.2778677655497
        }, {
          "mean" : 146.1066499372647,
          "variance" : 16124.929566275569,
          "n" : 797,
          "max" : 940.0,
          "min" : 35.0,
          "sum" : 116446.99999999997,
          "standardDeviation" : 126.98397365918098
        }, {
          "mean" : 103.9932614555257,
          "variance" : 5617.099819577977,
          "n" : 742,
          "max" : 619.0,
          "min" : 28.0,
          "sum" : 77163.00000000007,
          "standardDeviation" : 74.94731362482565
        }, {
          "mean" : 113.09610705596113,
          "variance" : 258315.66310297494,
          "n" : 822,
          "max" : 14545.0,
          "min" : 15.0,
          "sum" : 92965.00000000004,
          "standardDeviation" : 508.24763954491215
        }, {
          "mean" : 86.14251207729468,
          "variance" : 4562.627791505295,
          "n" : 828,
          "max" : 829.0,
          "min" : 14.0,
          "sum" : 71326.0,
          "standardDeviation" : 67.54722637906974
        }, {
          "mean" : 84.18351648351647,
          "variance" : 3113.432731295104,
          "n" : 910,
          "max" : 421.0,
          "min" : 18.0,
          "sum" : 76606.99999999999,
          "standardDeviation" : 55.79814272263105
        }, {
          "mean" : 108.01809954751131,
          "variance" : 239044.7924240175,
          "n" : 884,
          "max" : 10370.0,
          "min" : 14.0,
          "sum" : 95488.0,
          "standardDeviation" : 488.9220719337771
        }, {
          "mean" : 89.43785310734455,
          "variance" : 4453.294993678073,
          "n" : 354,
          "max" : 463.0,
          "min" : 16.0,
          "sum" : 31660.99999999997,
          "standardDeviation" : 66.73301277237582
        } ],
        "21" : [ {
          "mean" : 548.4539999999986,
          "variance" : 1637561.127011013,
          "n" : 995,
          "max" : 19964.0,
          "min" : 42.0,
          "sum" : 545711.7299999986,
          "standardDeviation" : 1279.6722732836768
        }, {
          "mean" : 177.35386338185887,
          "variance" : 134024.87688247891,
          "n" : 893,
          "max" : 10383.0,
          "min" : 18.0,
          "sum" : 158376.99999999997,
          "standardDeviation" : 366.09408200963713
        }, {
          "mean" : 149.29599999999988,
          "variance" : 15262.296779706281,
          "n" : 750,
          "max" : 1082.0,
          "min" : 30.0,
          "sum" : 111971.99999999991,
          "standardDeviation" : 123.54066852541426
        }, {
          "mean" : 104.86649874055416,
          "variance" : 7165.566013703034,
          "n" : 794,
          "max" : 737.0,
          "min" : 16.0,
          "sum" : 83264.0,
          "standardDeviation" : 84.64966635317019
        }, {
          "mean" : 100.17079207920783,
          "variance" : 7043.752702221897,
          "n" : 808,
          "max" : 790.0,
          "min" : 16.0,
          "sum" : 80937.99999999993,
          "standardDeviation" : 83.92706775660578
        }, {
          "mean" : 89.38902147971353,
          "variance" : 4237.387310630359,
          "n" : 838,
          "max" : 471.0,
          "min" : 15.0,
          "sum" : 74907.99999999994,
          "standardDeviation" : 65.09521726386939
        }, {
          "mean" : 84.46178686759954,
          "variance" : 4547.1863075795245,
          "n" : 929,
          "max" : 457.0,
          "min" : 14.0,
          "sum" : 78464.99999999997,
          "standardDeviation" : 67.43282811494358
        }, {
          "mean" : 92.87217194570141,
          "variance" : 4934.474015209358,
          "n" : 884,
          "max" : 545.0,
          "min" : 14.0,
          "sum" : 82099.00000000004,
          "standardDeviation" : 70.24581137127934
        }, {
          "mean" : 123.78531073446331,
          "variance" : 264392.2993870136,
          "n" : 354,
          "max" : 9650.0,
          "min" : 14.0,
          "sum" : 43820.000000000015,
          "standardDeviation" : 514.1909172544898
        } ],
        "22" : [ {
          "mean" : 672.5682926829272,
          "variance" : 2887772.7389201596,
          "n" : 815,
          "max" : 32739.0,
          "min" : 67.0,
          "sum" : 548143.1585365856,
          "standardDeviation" : 1699.344796949742
        }, {
          "mean" : 176.65196078431345,
          "variance" : 20819.769819507776,
          "n" : 1020,
          "max" : 1037.0,
          "min" : 36.0,
          "sum" : 180184.9999999997,
          "standardDeviation" : 144.29057425732208
        }, {
          "mean" : 174.4063694267518,
          "variance" : 131679.2798063176,
          "n" : 785,
          "max" : 9523.0,
          "min" : 25.0,
          "sum" : 136909.00000000017,
          "standardDeviation" : 362.8763974224799
        }, {
          "mean" : 142.73837981407704,
          "variance" : 14574.118963860845,
          "n" : 753,
          "max" : 836.0,
          "min" : 21.0,
          "sum" : 107482.00000000001,
          "standardDeviation" : 120.72331574248963
        }, {
          "mean" : 120.07361963190186,
          "variance" : 8633.962632459557,
          "n" : 815,
          "max" : 824.0,
          "min" : 23.0,
          "sum" : 97860.00000000001,
          "standardDeviation" : 92.91911876712756
        }, {
          "mean" : 108.55266138165356,
          "variance" : 9806.301928850053,
          "n" : 883,
          "max" : 945.0,
          "min" : 23.0,
          "sum" : 95852.0000000001,
          "standardDeviation" : 99.02677379804945
        }, {
          "mean" : 100.84804469273749,
          "variance" : 6291.513796508063,
          "n" : 895,
          "max" : 698.0,
          "min" : 17.0,
          "sum" : 90259.00000000006,
          "standardDeviation" : 79.31906326040458
        }, {
          "mean" : 109.19404630650483,
          "variance" : 121409.17422500023,
          "n" : 907,
          "max" : 10261.0,
          "min" : 16.0,
          "sum" : 99038.99999999988,
          "standardDeviation" : 348.43819283339224
        }, {
          "mean" : 108.7088948787062,
          "variance" : 7786.72043418081,
          "n" : 371,
          "max" : 625.0,
          "min" : 30.0,
          "sum" : 40331.0,
          "standardDeviation" : 88.24239590004801
        } ],
        "23" : [ {
          "mean" : 606.6877777777778,
          "variance" : 2110285.3184266486,
          "n" : 895,
          "max" : 27258.0,
          "min" : 54.0,
          "sum" : 542985.5611111111,
          "standardDeviation" : 1452.6821119662238
        }, {
          "mean" : 181.58297413793102,
          "variance" : 98874.1915976174,
          "n" : 928,
          "max" : 8713.0,
          "min" : 37.0,
          "sum" : 168508.99999999997,
          "standardDeviation" : 314.44266822048405
        }, {
          "mean" : 146.09457755359415,
          "variance" : 56649.46200338826,
          "n" : 793,
          "max" : 6042.0,
          "min" : 37.0,
          "sum" : 115853.00000000016,
          "standardDeviation" : 238.0114745204278
        }, {
          "mean" : 119.78418230563001,
          "variance" : 9523.385574968064,
          "n" : 746,
          "max" : 575.0,
          "min" : 17.0,
          "sum" : 89358.99999999999,
          "standardDeviation" : 97.58783517922745
        }, {
          "mean" : 111.57372986369262,
          "variance" : 9501.684073291695,
          "n" : 807,
          "max" : 683.0,
          "min" : 16.0,
          "sum" : 90039.99999999994,
          "standardDeviation" : 97.47658217896078
        }, {
          "mean" : 113.45688689809633,
          "variance" : 145444.15649119456,
          "n" : 893,
          "max" : 11164.0,
          "min" : 16.0,
          "sum" : 101317.00000000001,
          "standardDeviation" : 381.3714154091711
        }, {
          "mean" : 96.19623059866964,
          "variance" : 6636.333259915692,
          "n" : 902,
          "max" : 837.0,
          "min" : 16.0,
          "sum" : 86769.00000000001,
          "standardDeviation" : 81.46369289392479
        }, {
          "mean" : 119.11978021978027,
          "variance" : 225582.20675902755,
          "n" : 910,
          "max" : 10137.0,
          "min" : 14.0,
          "sum" : 108399.00000000004,
          "standardDeviation" : 474.9549523470911
        }, {
          "mean" : 122.527027027027,
          "variance" : 261312.92745184194,
          "n" : 370,
          "max" : 9757.0,
          "min" : 17.0,
          "sum" : 45334.99999999999,
          "standardDeviation" : 511.1877614456766
        } ],
        "24" : [ {
          "mean" : 543.7050092764384,
          "variance" : 2423520.215592339,
          "n" : 1073,
          "max" : 40180.0,
          "min" : 54.0,
          "sum" : 583395.4749536185,
          "standardDeviation" : 1556.765947595315
        }, {
          "mean" : 173.2423076923077,
          "variance" : 20132.972020341673,
          "n" : 780,
          "max" : 897.0,
          "min" : 0.0,
          "sum" : 135129.0,
          "standardDeviation" : 141.8907044888483
        }, {
          "mean" : 154.50758620689646,
          "variance" : 15724.247525242894,
          "n" : 725,
          "max" : 859.0,
          "min" : 32.0,
          "sum" : 112017.99999999994,
          "standardDeviation" : 125.39636169061244
        }, {
          "mean" : 124.95394736842094,
          "variance" : 13521.105913251513,
          "n" : 760,
          "max" : 796.0,
          "min" : 24.0,
          "sum" : 94964.99999999991,
          "standardDeviation" : 116.28029030429668
        }, {
          "mean" : 127.46153846153855,
          "variance" : 14839.340748440756,
          "n" : 741,
          "max" : 1027.0,
          "min" : 28.0,
          "sum" : 94449.00000000007,
          "standardDeviation" : 121.81683277954963
        }, {
          "mean" : 116.25568181818178,
          "variance" : 114330.22237951188,
          "n" : 880,
          "max" : 9779.0,
          "min" : 17.0,
          "sum" : 102304.99999999997,
          "standardDeviation" : 338.1275238419846
        }, {
          "mean" : 107.50119617224891,
          "variance" : 121445.58442970515,
          "n" : 836,
          "max" : 9872.0,
          "min" : 14.0,
          "sum" : 89871.00000000009,
          "standardDeviation" : 348.49043664024003
        }, {
          "mean" : 101.85036496350352,
          "variance" : 7983.394147247875,
          "n" : 822,
          "max" : 731.0,
          "min" : 14.0,
          "sum" : 83720.9999999999,
          "standardDeviation" : 89.34984133868328
        }, {
          "mean" : 98.71178343949043,
          "variance" : 8898.138489318255,
          "n" : 628,
          "max" : 729.0,
          "min" : 15.0,
          "sum" : 61990.99999999999,
          "standardDeviation" : 94.32994481774202
        } ],
        "25" : [ {
          "mean" : 528.4750593824225,
          "variance" : 2911971.131957484,
          "n" : 837,
          "max" : 44074.0,
          "min" : 42.0,
          "sum" : 442333.6247030876,
          "standardDeviation" : 1706.4498621282385
        }, {
          "mean" : 142.6336734693879,
          "variance" : 8681.840131537818,
          "n" : 980,
          "max" : 702.0,
          "min" : 35.0,
          "sum" : 139781.00000000015,
          "standardDeviation" : 93.17639256559474
        }, {
          "mean" : 125.68460575719652,
          "variance" : 8639.263810339371,
          "n" : 799,
          "max" : 796.0,
          "min" : 28.0,
          "sum" : 100422.00000000001,
          "standardDeviation" : 92.94764015476332
        }, {
          "mean" : 113.68639798488672,
          "variance" : 8494.911618030543,
          "n" : 794,
          "max" : 784.0,
          "min" : 18.0,
          "sum" : 90267.00000000006,
          "standardDeviation" : 92.16784481602325
        }, {
          "mean" : 120.44473684210523,
          "variance" : 11992.292067124326,
          "n" : 760,
          "max" : 1091.0,
          "min" : 17.0,
          "sum" : 91537.99999999997,
          "standardDeviation" : 109.50932411043512
        }, {
          "mean" : 104.18763796909488,
          "variance" : 8568.7139243594,
          "n" : 906,
          "max" : 655.0,
          "min" : 19.0,
          "sum" : 94393.99999999996,
          "standardDeviation" : 92.56734804648667
        }, {
          "mean" : 93.39183222958059,
          "variance" : 6356.74464039613,
          "n" : 906,
          "max" : 771.0,
          "min" : 17.0,
          "sum" : 84613.00000000001,
          "standardDeviation" : 79.72919565878067
        }, {
          "mean" : 92.79756637168127,
          "variance" : 5514.4384879800855,
          "n" : 904,
          "max" : 672.0,
          "min" : 19.0,
          "sum" : 83888.99999999987,
          "standardDeviation" : 74.25926533423345
        }, {
          "mean" : 89.98885793871872,
          "variance" : 4399.2177526026635,
          "n" : 359,
          "max" : 448.0,
          "min" : 18.0,
          "sum" : 32306.000000000022,
          "standardDeviation" : 66.32659913339944
        } ],
        "26" : [ {
          "mean" : 583.917098445595,
          "variance" : 1673455.6694687533,
          "n" : 960,
          "max" : 26141.0,
          "min" : 63.0,
          "sum" : 560560.4145077711,
          "standardDeviation" : 1293.6211460349407
        }, {
          "mean" : 186.24327354260083,
          "variance" : 26580.305510259554,
          "n" : 892,
          "max" : 1142.0,
          "min" : 38.0,
          "sum" : 166128.99999999994,
          "standardDeviation" : 163.03467579094809
        }, {
          "mean" : 165.6251621271077,
          "variance" : 129281.66840500623,
          "n" : 771,
          "max" : 9467.0,
          "min" : 28.0,
          "sum" : 127697.00000000004,
          "standardDeviation" : 359.5576009556831
        }, {
          "mean" : 136.61378413524054,
          "variance" : 15750.135799333555,
          "n" : 769,
          "max" : 790.0,
          "min" : 19.0,
          "sum" : 105055.99999999997,
          "standardDeviation" : 125.49954501644042
        }, {
          "mean" : 124.45477707006363,
          "variance" : 13360.465107890292,
          "n" : 785,
          "max" : 1069.0,
          "min" : 22.0,
          "sum" : 97696.99999999994,
          "standardDeviation" : 115.58747816217071
        }, {
          "mean" : 108.60089686098657,
          "variance" : 8795.463433538174,
          "n" : 892,
          "max" : 656.0,
          "min" : 18.0,
          "sum" : 96872.00000000001,
          "standardDeviation" : 93.78413209886934
        }, {
          "mean" : 118.03875968992239,
          "variance" : 231616.13929424732,
          "n" : 903,
          "max" : 10256.0,
          "min" : 14.0,
          "sum" : 106588.99999999991,
          "standardDeviation" : 481.26514448300463
        }, {
          "mean" : 98.96589658965893,
          "variance" : 7860.378791623654,
          "n" : 909,
          "max" : 768.0,
          "min" : 14.0,
          "sum" : 89959.99999999996,
          "standardDeviation" : 88.65877729601088
        }, {
          "mean" : 134.67768595041312,
          "variance" : 301984.9925117575,
          "n" : 363,
          "max" : 10452.0,
          "min" : 19.0,
          "sum" : 48887.99999999996,
          "standardDeviation" : 549.5316119312496
        } ],
        "27" : [ {
          "mean" : 642.9988913525501,
          "variance" : 5246275.317423853,
          "n" : 897,
          "max" : 59759.0,
          "min" : 69.0,
          "sum" : 576770.0055432374,
          "standardDeviation" : 2290.4749108915935
        }, {
          "mean" : 174.16303219106945,
          "variance" : 83170.2862826882,
          "n" : 963,
          "max" : 8017.0,
          "min" : 37.0,
          "sum" : 167718.99999999988,
          "standardDeviation" : 288.39259054748305
        }, {
          "mean" : 150.17350993377488,
          "variance" : 16223.467201854999,
          "n" : 755,
          "max" : 885.0,
          "min" : 30.0,
          "sum" : 113381.00000000003,
          "standardDeviation" : 127.37137512743983
        }, {
          "mean" : 119.4594594594595,
          "variance" : 11688.660059247339,
          "n" : 740,
          "max" : 749.0,
          "min" : 24.0,
          "sum" : 88400.00000000003,
          "standardDeviation" : 108.11410666165327
        }, {
          "mean" : 105.20736196319032,
          "variance" : 8036.174392909362,
          "n" : 815,
          "max" : 665.0,
          "min" : 16.0,
          "sum" : 85744.00000000012,
          "standardDeviation" : 89.64471201866489
        }, {
          "mean" : 91.75819209039551,
          "variance" : 5698.620195822784,
          "n" : 885,
          "max" : 765.0,
          "min" : 18.0,
          "sum" : 81206.00000000003,
          "standardDeviation" : 75.48920582323531
        }, {
          "mean" : 115.11512415349891,
          "variance" : 229943.21610998455,
          "n" : 886,
          "max" : 10098.0,
          "min" : 19.0,
          "sum" : 101992.00000000003,
          "standardDeviation" : 479.5239473790486
        }, {
          "mean" : 102.84290357529783,
          "variance" : 111768.06097724318,
          "n" : 923,
          "max" : 9992.0,
          "min" : 15.0,
          "sum" : 94923.9999999999,
          "standardDeviation" : 334.31730582972096
        }, {
          "mean" : 101.2157894736842,
          "variance" : 8904.227718372445,
          "n" : 380,
          "max" : 776.0,
          "min" : 16.0,
          "sum" : 38461.99999999999,
          "standardDeviation" : 94.36221552280577
        } ],
        "28" : [ {
          "mean" : 589.9698189134799,
          "variance" : 2234557.406943171,
          "n" : 989,
          "max" : 32117.0,
          "min" : 72.0,
          "sum" : 583480.1509054316,
          "standardDeviation" : 1494.8436061819882
        }, {
          "mean" : 174.0143027413588,
          "variance" : 24197.422229555035,
          "n" : 839,
          "max" : 1047.0,
          "min" : 40.0,
          "sum" : 145998.00000000003,
          "standardDeviation" : 155.5552063723842
        }, {
          "mean" : 152.71623465211476,
          "variance" : 16359.971279791858,
          "n" : 733,
          "max" : 840.0,
          "min" : 35.0,
          "sum" : 111941.00000000012,
          "standardDeviation" : 127.90610337193397
        }, {
          "mean" : 136.71208226221086,
          "variance" : 142092.8101755814,
          "n" : 778,
          "max" : 10080.0,
          "min" : 30.0,
          "sum" : 106362.00000000004,
          "standardDeviation" : 376.9519998296619
        }, {
          "mean" : 127.19919246298777,
          "variance" : 14459.402317406304,
          "n" : 743,
          "max" : 831.0,
          "min" : 15.0,
          "sum" : 94508.99999999991,
          "standardDeviation" : 120.24725492669803
        }, {
          "mean" : 121.38844847112125,
          "variance" : 128567.5779616489,
          "n" : 883,
          "max" : 10307.0,
          "min" : 17.0,
          "sum" : 107186.00000000006,
          "standardDeviation" : 358.56321334131434
        }, {
          "mean" : 131.5483870967742,
          "variance" : 255370.20967741922,
          "n" : 837,
          "max" : 10294.0,
          "min" : 19.0,
          "sum" : 110106.00000000001,
          "standardDeviation" : 505.34167617308117
        }, {
          "mean" : 101.21724524076149,
          "variance" : 9615.183693299648,
          "n" : 893,
          "max" : 868.0,
          "min" : 15.0,
          "sum" : 90387.0,
          "standardDeviation" : 98.05704305810801
        }, {
          "mean" : 100.86727272727273,
          "variance" : 10395.41950985262,
          "n" : 550,
          "max" : 826.0,
          "min" : 20.0,
          "sum" : 55477.00000000001,
          "standardDeviation" : 101.95793009792136
        } ],
        "29" : [ {
          "mean" : 663.2847682119212,
          "variance" : 3437675.2624638653,
          "n" : 901,
          "max" : 44877.0,
          "min" : 73.0,
          "sum" : 597619.576158941,
          "standardDeviation" : 1854.0968859430905
        }, {
          "mean" : 164.19083969465623,
          "variance" : 18419.899129970978,
          "n" : 917,
          "max" : 2105.0,
          "min" : 37.0,
          "sum" : 150562.99999999977,
          "standardDeviation" : 135.7199290081268
        }, {
          "mean" : 159.61911170928644,
          "variance" : 142742.0905776463,
          "n" : 743,
          "max" : 9903.0,
          "min" : 32.0,
          "sum" : 118596.99999999983,
          "standardDeviation" : 377.81224249307525
        }, {
          "mean" : 125.68035943517332,
          "variance" : 12177.731888816663,
          "n" : 779,
          "max" : 765.0,
          "min" : 24.0,
          "sum" : 97905.00000000001,
          "standardDeviation" : 110.35276112910208
        }, {
          "mean" : 115.9582210242587,
          "variance" : 10276.95776633165,
          "n" : 742,
          "max" : 762.0,
          "min" : 18.0,
          "sum" : 86040.99999999996,
          "standardDeviation" : 101.3753311527595
        }, {
          "mean" : 111.25249169435205,
          "variance" : 119394.87852759843,
          "n" : 903,
          "max" : 10166.0,
          "min" : 16.0,
          "sum" : 100460.9999999999,
          "standardDeviation" : 345.53564002516214
        }, {
          "mean" : 99.78536585365856,
          "variance" : 6752.796366776855,
          "n" : 820,
          "max" : 628.0,
          "min" : 16.0,
          "sum" : 81824.00000000001,
          "standardDeviation" : 82.17540000983783
        }, {
          "mean" : 96.17706013363029,
          "variance" : 6250.932940288466,
          "n" : 898,
          "max" : 627.0,
          "min" : 18.0,
          "sum" : 86367.0,
          "standardDeviation" : 79.06284171650084
        }, {
          "mean" : 113.69357798165152,
          "variance" : 167459.74600647594,
          "n" : 545,
          "max" : 9464.0,
          "min" : 16.0,
          "sum" : 61963.00000000007,
          "standardDeviation" : 409.2184575583999
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
      "meanOld" : 107.25406915113867,
      "meanCurrent" : 247.8835249042146,
      "deviationOld" : 15.944156283061703,
      "deviationCurrent" : 28.63816452838035,
      "vms" : 29,
      "callsOld" : 211658,
      "calls" : 450,
      "tvalue" : -23.104696125455252,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 235.99114027043424,
    "inVMDeviation" : 146.9184344625109,
    "ess" : 1,
    "values" : [ 242.46666666666667, 258.84444444444443, 206.8, 233.54444444444442, 205.6, 251.73333333333332, 235.06666666666666, 259.1666666666667, 305.93333333333334, 206.26666666666668, 251.13333333333333, 284.0, 239.01111111111112, 227.7111111111111, 246.44444444444443, 263.4888888888889, 213.53333333333333, 318.8666666666667, 246.13333333333333, 252.86666666666667, 237.08888888888887, 258.3777777777778, 887.0666666666667, 266.53333333333336, 260.56666666666666, 246.86666666666667, 192.2, 267.06666666666666, 232.13333333333333, 279.1777777777778 ],
    "valuesPredecessor" : [ 111.10422075001283, 105.12166851902336, 108.87415219927756, 99.57353031247766, 105.388405108625, 102.25448874260752, 101.83813632486627, 105.9720374914109, 118.0025224686138, 103.94399565381707, 104.40774452050145, 101.6271308329916, 108.6978176982474, 1996.9515064005284, 97.13244261923333, 102.2008408360092, 105.30614938931411, 104.93834472263146, 100.81271855038088, 106.13523747621649, 101.93830446619532, 98.67678328904377, 102.4644950997863, 186.65802781556704, 107.03646900779036, 110.63011974746908, 99.94772904494349, 97.86633961526583, 110.54940616726536, 101.26874691343654 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 338.6,
          "variance" : 19622.299999999996,
          "n" : 5,
          "max" : 538.0,
          "min" : 189.0,
          "sum" : 1693.0,
          "standardDeviation" : 140.079620216504
        }, {
          "mean" : 209.6,
          "variance" : 530.8000000000001,
          "n" : 5,
          "max" : 246.0,
          "min" : 188.0,
          "sum" : 1048.0,
          "standardDeviation" : 23.03909720453473
        }, {
          "mean" : 175.0,
          "variance" : 975.3333333333331,
          "n" : 4,
          "max" : 216.0,
          "min" : 143.0,
          "sum" : 700.0,
          "standardDeviation" : 31.230327140991225
        }, {
          "mean" : 196.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 196.0,
          "min" : 196.0,
          "sum" : 196.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 903.6666666666666,
          "variance" : 1080462.666666667,
          "n" : 1,
          "max" : 3016.0,
          "min" : 340.0,
          "sum" : 903.6666666666666,
          "standardDeviation" : 1039.4530613099694
        }, {
          "mean" : 230.0,
          "variance" : 372.66666666666646,
          "n" : 4,
          "max" : 256.0,
          "min" : 213.0,
          "sum" : 920.0,
          "standardDeviation" : 19.304576314093673
        }, {
          "mean" : 212.4,
          "variance" : 952.3000000000001,
          "n" : 5,
          "max" : 250.0,
          "min" : 172.0,
          "sum" : 1062.0,
          "standardDeviation" : 30.859358386071477
        }, {
          "mean" : 195.5,
          "variance" : 1136.3333333333337,
          "n" : 4,
          "max" : 243.0,
          "min" : 171.0,
          "sum" : 782.0,
          "standardDeviation" : 33.70954365359065
        }, {
          "mean" : 215.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 215.0,
          "min" : 215.0,
          "sum" : 215.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 243.6,
          "variance" : 3469.2999999999997,
          "n" : 5,
          "max" : 323.0,
          "min" : 178.0,
          "sum" : 1218.0,
          "standardDeviation" : 58.90076400183617
        }, {
          "mean" : 199.8,
          "variance" : 346.7,
          "n" : 5,
          "max" : 224.0,
          "min" : 181.0,
          "sum" : 999.0,
          "standardDeviation" : 18.619881847100963
        }, {
          "mean" : 175.0,
          "variance" : 35.33333333333336,
          "n" : 4,
          "max" : 180.0,
          "min" : 167.0,
          "sum" : 700.0,
          "standardDeviation" : 5.9441848333756715
        }, {
          "mean" : 185.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 185.0,
          "min" : 185.0,
          "sum" : 185.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 514.1666666666666,
          "variance" : 17204.166666666664,
          "n" : 1,
          "max" : 641.0,
          "min" : 300.0,
          "sum" : 514.1666666666666,
          "standardDeviation" : 131.16465479185567
        }, {
          "mean" : 278.75,
          "variance" : 1300.25,
          "n" : 4,
          "max" : 319.0,
          "min" : 236.0,
          "sum" : 1115.0,
          "standardDeviation" : 36.058979464205585
        }, {
          "mean" : 177.4,
          "variance" : 893.2999999999997,
          "n" : 5,
          "max" : 212.0,
          "min" : 143.0,
          "sum" : 887.0,
          "standardDeviation" : 29.88812473207377
        }, {
          "mean" : 202.75,
          "variance" : 110.91666666666667,
          "n" : 4,
          "max" : 211.0,
          "min" : 189.0,
          "sum" : 811.0,
          "standardDeviation" : 10.53169818531972
        }, {
          "mean" : 176.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 176.0,
          "min" : 176.0,
          "sum" : 176.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 237.8,
          "variance" : 12553.2,
          "n" : 5,
          "max" : 428.0,
          "min" : 152.0,
          "sum" : 1189.0,
          "standardDeviation" : 112.0410639006967
        }, {
          "mean" : 194.0,
          "variance" : 729.4999999999999,
          "n" : 5,
          "max" : 239.0,
          "min" : 167.0,
          "sum" : 970.0,
          "standardDeviation" : 27.009257672139007
        }, {
          "mean" : 185.25,
          "variance" : 174.9166666666667,
          "n" : 4,
          "max" : 197.0,
          "min" : 171.0,
          "sum" : 741.0,
          "standardDeviation" : 13.225606476327153
        }, {
          "mean" : 184.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 184.0,
          "min" : 184.0,
          "sum" : 184.0,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 310.8,
          "variance" : 27194.7,
          "n" : 5,
          "max" : 561.0,
          "min" : 150.0,
          "sum" : 1554.0,
          "standardDeviation" : 164.90815625674796
        }, {
          "mean" : 236.4,
          "variance" : 13933.300000000003,
          "n" : 5,
          "max" : 444.0,
          "min" : 149.0,
          "sum" : 1182.0,
          "standardDeviation" : 118.03940020179704
        }, {
          "mean" : 206.5,
          "variance" : 1265.6666666666665,
          "n" : 4,
          "max" : 245.0,
          "min" : 159.0,
          "sum" : 826.0,
          "standardDeviation" : 35.57620927904864
        }, {
          "mean" : 214.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 214.0,
          "min" : 214.0,
          "sum" : 214.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 300.4,
          "variance" : 22223.300000000003,
          "n" : 5,
          "max" : 514.0,
          "min" : 153.0,
          "sum" : 1502.0,
          "standardDeviation" : 149.07481343271908
        }, {
          "mean" : 221.0,
          "variance" : 122.00000000000001,
          "n" : 4,
          "max" : 237.0,
          "min" : 212.0,
          "sum" : 884.0,
          "standardDeviation" : 11.045361017187261
        }, {
          "mean" : 191.8,
          "variance" : 802.7,
          "n" : 5,
          "max" : 213.0,
          "min" : 144.0,
          "sum" : 959.0,
          "standardDeviation" : 28.331960751066983
        }, {
          "mean" : 181.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 181.0,
          "min" : 181.0,
          "sum" : 181.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 580.5,
          "variance" : 3614.3,
          "n" : 1,
          "max" : 663.0,
          "min" : 503.0,
          "sum" : 580.5,
          "standardDeviation" : 60.11904856199905
        }, {
          "mean" : 262.75,
          "variance" : 11134.25,
          "n" : 4,
          "max" : 416.0,
          "min" : 176.0,
          "sum" : 1051.0,
          "standardDeviation" : 105.51895564305022
        }, {
          "mean" : 238.6,
          "variance" : 153.8,
          "n" : 5,
          "max" : 253.0,
          "min" : 222.0,
          "sum" : 1193.0,
          "standardDeviation" : 12.401612798341997
        }, {
          "mean" : 225.75,
          "variance" : 512.25,
          "n" : 4,
          "max" : 240.0,
          "min" : 192.0,
          "sum" : 903.0,
          "standardDeviation" : 22.63294059551255
        }, {
          "mean" : 160.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 160.0,
          "min" : 160.0,
          "sum" : 160.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 624.0,
          "variance" : 11460.000000000002,
          "n" : 1,
          "max" : 803.0,
          "min" : 533.0,
          "sum" : 624.0,
          "standardDeviation" : 107.0513895285811
        }, {
          "mean" : 445.75,
          "variance" : 34520.25,
          "n" : 4,
          "max" : 688.0,
          "min" : 252.0,
          "sum" : 1783.0,
          "standardDeviation" : 185.7962593810758
        }, {
          "mean" : 224.6,
          "variance" : 207.80000000000004,
          "n" : 5,
          "max" : 238.0,
          "min" : 208.0,
          "sum" : 1123.0,
          "standardDeviation" : 14.415269681833914
        }, {
          "mean" : 215.25,
          "variance" : 548.9166666666666,
          "n" : 4,
          "max" : 245.0,
          "min" : 192.0,
          "sum" : 861.0,
          "standardDeviation" : 23.428970670233607
        }, {
          "mean" : 198.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 198.0,
          "min" : 198.0,
          "sum" : 198.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 269.0,
          "variance" : 2261.4999999999995,
          "n" : 5,
          "max" : 303.0,
          "min" : 191.0,
          "sum" : 1345.0,
          "standardDeviation" : 47.555231047698626
        }, {
          "mean" : 173.5,
          "variance" : 1225.0,
          "n" : 4,
          "max" : 218.0,
          "min" : 140.0,
          "sum" : 694.0,
          "standardDeviation" : 35.0
        }, {
          "mean" : 174.0,
          "variance" : 522.4999999999999,
          "n" : 5,
          "max" : 200.0,
          "min" : 151.0,
          "sum" : 870.0,
          "standardDeviation" : 22.85825890132492
        }, {
          "mean" : 185.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 185.0,
          "min" : 185.0,
          "sum" : 185.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 340.0,
          "variance" : 17474.000000000004,
          "n" : 5,
          "max" : 516.0,
          "min" : 218.0,
          "sum" : 1700.0,
          "standardDeviation" : 132.18925826253812
        }, {
          "mean" : 155.0,
          "variance" : 644.6666666666665,
          "n" : 4,
          "max" : 193.0,
          "min" : 140.0,
          "sum" : 620.0,
          "standardDeviation" : 25.39028685672272
        }, {
          "mean" : 245.4,
          "variance" : 3802.2999999999997,
          "n" : 5,
          "max" : 347.0,
          "min" : 197.0,
          "sum" : 1227.0,
          "standardDeviation" : 61.66279267110759
        }, {
          "mean" : 220.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 220.0,
          "min" : 220.0,
          "sum" : 220.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 440.4,
          "variance" : 8036.3,
          "n" : 5,
          "max" : 577.0,
          "min" : 325.0,
          "sum" : 2202.0,
          "standardDeviation" : 89.6454125987493
        }, {
          "mean" : 197.0,
          "variance" : 151.99999999999994,
          "n" : 5,
          "max" : 208.0,
          "min" : 176.0,
          "sum" : 985.0,
          "standardDeviation" : 12.32882800593795
        }, {
          "mean" : 212.5,
          "variance" : 287.0,
          "n" : 4,
          "max" : 235.0,
          "min" : 194.0,
          "sum" : 850.0,
          "standardDeviation" : 16.941074346097416
        }, {
          "mean" : 223.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 223.0,
          "min" : 223.0,
          "sum" : 223.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 479.1666666666667,
          "variance" : 9440.166666666666,
          "n" : 1,
          "max" : 582.0,
          "min" : 330.0,
          "sum" : 479.1666666666667,
          "standardDeviation" : 97.16052010290325
        }, {
          "mean" : 259.4,
          "variance" : 11593.3,
          "n" : 5,
          "max" : 429.0,
          "min" : 166.0,
          "sum" : 1297.0,
          "standardDeviation" : 107.672187680942
        }, {
          "mean" : 208.0,
          "variance" : 1412.0,
          "n" : 4,
          "max" : 263.0,
          "min" : 179.0,
          "sum" : 832.0,
          "standardDeviation" : 37.57658845611187
        }, {
          "mean" : 194.75,
          "variance" : 798.2499999999997,
          "n" : 4,
          "max" : 232.0,
          "min" : 166.0,
          "sum" : 779.0,
          "standardDeviation" : 28.253318389173327
        }, {
          "mean" : 198.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 198.0,
          "min" : 198.0,
          "sum" : 198.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 533.6666666666666,
          "variance" : 32778.66666666667,
          "n" : 1,
          "max" : 834.0,
          "min" : 312.0,
          "sum" : 533.6666666666666,
          "standardDeviation" : 181.04879636900841
        }, {
          "mean" : 249.75,
          "variance" : 3597.5833333333326,
          "n" : 4,
          "max" : 322.0,
          "min" : 185.0,
          "sum" : 999.0,
          "standardDeviation" : 59.97985773018583
        }, {
          "mean" : 172.4,
          "variance" : 1176.2999999999995,
          "n" : 5,
          "max" : 220.0,
          "min" : 130.0,
          "sum" : 862.0,
          "standardDeviation" : 34.297230208866715
        }, {
          "mean" : 198.75,
          "variance" : 866.9166666666666,
          "n" : 4,
          "max" : 237.0,
          "min" : 166.0,
          "sum" : 795.0,
          "standardDeviation" : 29.44344862047696
        }, {
          "mean" : 226.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 226.0,
          "min" : 226.0,
          "sum" : 226.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 624.6666666666666,
          "variance" : 14863.866666666665,
          "n" : 1,
          "max" : 864.0,
          "min" : 535.0,
          "sum" : 624.6666666666666,
          "standardDeviation" : 121.91745841620332
        }, {
          "mean" : 277.5,
          "variance" : 7486.333333333331,
          "n" : 4,
          "max" : 404.0,
          "min" : 208.0,
          "sum" : 1110.0,
          "standardDeviation" : 86.52359986346691
        }, {
          "mean" : 211.8,
          "variance" : 1364.2,
          "n" : 5,
          "max" : 271.0,
          "min" : 172.0,
          "sum" : 1059.0,
          "standardDeviation" : 36.93507817779732
        }, {
          "mean" : 186.5,
          "variance" : 1447.0000000000005,
          "n" : 4,
          "max" : 226.0,
          "min" : 151.0,
          "sum" : 746.0,
          "standardDeviation" : 38.039453203220475
        }, {
          "mean" : 157.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 157.0,
          "min" : 157.0,
          "sum" : 157.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 377.66666666666663,
          "variance" : 22875.866666666665,
          "n" : 5,
          "max" : 559.0,
          "min" : 200.0,
          "sum" : 1888.333333333333,
          "standardDeviation" : 151.24769970702584
        }, {
          "mean" : 192.5,
          "variance" : 815.0000000000002,
          "n" : 4,
          "max" : 214.0,
          "min" : 151.0,
          "sum" : 770.0,
          "standardDeviation" : 28.5482048472404
        }, {
          "mean" : 215.6,
          "variance" : 6333.3,
          "n" : 5,
          "max" : 350.0,
          "min" : 145.0,
          "sum" : 1078.0,
          "standardDeviation" : 79.58203314819244
        }, {
          "mean" : 216.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 216.0,
          "min" : 216.0,
          "sum" : 216.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 247.8,
          "variance" : 2707.199999999999,
          "n" : 5,
          "max" : 306.0,
          "min" : 184.0,
          "sum" : 1239.0,
          "standardDeviation" : 52.03076013282911
        }, {
          "mean" : 200.8,
          "variance" : 618.7,
          "n" : 5,
          "max" : 225.0,
          "min" : 164.0,
          "sum" : 1004.0,
          "standardDeviation" : 24.873680869545627
        }, {
          "mean" : 194.5,
          "variance" : 687.0000000000001,
          "n" : 4,
          "max" : 232.0,
          "min" : 171.0,
          "sum" : 778.0,
          "standardDeviation" : 26.210684844162316
        }, {
          "mean" : 182.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 182.0,
          "min" : 182.0,
          "sum" : 182.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 368.0,
          "variance" : 663.5,
          "n" : 5,
          "max" : 401.0,
          "min" : 332.0,
          "sum" : 1840.0,
          "standardDeviation" : 25.758493744782516
        }, {
          "mean" : 321.5,
          "variance" : 17243.0,
          "n" : 4,
          "max" : 501.0,
          "min" : 186.0,
          "sum" : 1286.0,
          "standardDeviation" : 131.31260411704582
        }, {
          "mean" : 275.4,
          "variance" : 152.3,
          "n" : 5,
          "max" : 291.0,
          "min" : 260.0,
          "sum" : 1377.0,
          "standardDeviation" : 12.340988615179905
        }, {
          "mean" : 280.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 280.0,
          "min" : 280.0,
          "sum" : 280.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 313.2,
          "variance" : 21079.699999999997,
          "n" : 5,
          "max" : 542.0,
          "min" : 181.0,
          "sum" : 1566.0,
          "standardDeviation" : 145.188498167038
        }, {
          "mean" : 211.75,
          "variance" : 1070.9166666666667,
          "n" : 4,
          "max" : 249.0,
          "min" : 170.0,
          "sum" : 847.0,
          "standardDeviation" : 32.72486312678277
        }, {
          "mean" : 211.0,
          "variance" : 536.4999999999999,
          "n" : 5,
          "max" : 233.0,
          "min" : 183.0,
          "sum" : 1055.0,
          "standardDeviation" : 23.162469643800936
        }, {
          "mean" : 224.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 224.0,
          "min" : 224.0,
          "sum" : 224.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 371.0,
          "variance" : 66888.5,
          "n" : 5,
          "max" : 826.0,
          "min" : 200.0,
          "sum" : 1855.0,
          "standardDeviation" : 258.6281113877608
        }, {
          "mean" : 218.75,
          "variance" : 1686.2499999999995,
          "n" : 4,
          "max" : 254.0,
          "min" : 162.0,
          "sum" : 875.0,
          "standardDeviation" : 41.06397447885433
        }, {
          "mean" : 181.8,
          "variance" : 992.6999999999999,
          "n" : 5,
          "max" : 215.0,
          "min" : 146.0,
          "sum" : 909.0,
          "standardDeviation" : 31.507142047478695
        }, {
          "mean" : 154.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 154.0,
          "min" : 154.0,
          "sum" : 154.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 534.3333333333333,
          "variance" : 28475.86666666666,
          "n" : 1,
          "max" : 794.0,
          "min" : 312.0,
          "sum" : 534.3333333333333,
          "standardDeviation" : 168.74793825901003
        }, {
          "mean" : 250.5,
          "variance" : 5121.666666666668,
          "n" : 4,
          "max" : 317.0,
          "min" : 175.0,
          "sum" : 1002.0,
          "standardDeviation" : 71.56582051976116
        }, {
          "mean" : 208.2,
          "variance" : 444.70000000000005,
          "n" : 5,
          "max" : 230.0,
          "min" : 181.0,
          "sum" : 1041.0,
          "standardDeviation" : 21.08791122894821
        }, {
          "mean" : 196.75,
          "variance" : 1236.25,
          "n" : 4,
          "max" : 239.0,
          "min" : 155.0,
          "sum" : 787.0,
          "standardDeviation" : 35.16034698349833
        }, {
          "mean" : 192.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 192.0,
          "min" : 192.0,
          "sum" : 192.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 662.6666666666666,
          "variance" : 65530.66666666667,
          "n" : 1,
          "max" : 1175.0,
          "min" : 507.0,
          "sum" : 662.6666666666666,
          "standardDeviation" : 255.9895831213971
        }, {
          "mean" : 296.0,
          "variance" : 13843.333333333336,
          "n" : 4,
          "max" : 465.0,
          "min" : 192.0,
          "sum" : 1184.0,
          "standardDeviation" : 117.65769559758229
        }, {
          "mean" : 204.2,
          "variance" : 2626.6999999999994,
          "n" : 5,
          "max" : 291.0,
          "min" : 157.0,
          "sum" : 1021.0,
          "standardDeviation" : 51.251341445858756
        }, {
          "mean" : 201.5,
          "variance" : 680.3333333333334,
          "n" : 4,
          "max" : 234.0,
          "min" : 175.0,
          "sum" : 806.0,
          "standardDeviation" : 26.083200212652844
        }, {
          "mean" : 202.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 202.0,
          "min" : 202.0,
          "sum" : 202.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 2260.6,
          "variance" : 1.9728907799999997E7,
          "n" : 5,
          "max" : 10206.0,
          "min" : 244.0,
          "sum" : 11303.0,
          "standardDeviation" : 4441.723516834428
        }, {
          "mean" : 225.6,
          "variance" : 989.8000000000003,
          "n" : 5,
          "max" : 263.0,
          "min" : 195.0,
          "sum" : 1128.0,
          "standardDeviation" : 31.46108707594193
        }, {
          "mean" : 173.25,
          "variance" : 1196.25,
          "n" : 4,
          "max" : 204.0,
          "min" : 135.0,
          "sum" : 693.0,
          "standardDeviation" : 34.586847211042524
        }, {
          "mean" : 182.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 182.0,
          "min" : 182.0,
          "sum" : 182.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 440.4,
          "variance" : 79199.29999999999,
          "n" : 5,
          "max" : 876.0,
          "min" : 219.0,
          "sum" : 2202.0,
          "standardDeviation" : 281.42370191581233
        }, {
          "mean" : 183.5,
          "variance" : 289.6666666666666,
          "n" : 4,
          "max" : 196.0,
          "min" : 159.0,
          "sum" : 734.0,
          "standardDeviation" : 17.019596548292988
        }, {
          "mean" : 183.2,
          "variance" : 1439.2000000000003,
          "n" : 5,
          "max" : 225.0,
          "min" : 142.0,
          "sum" : 916.0,
          "standardDeviation" : 37.93678953206241
        }, {
          "mean" : 146.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 146.0,
          "min" : 146.0,
          "sum" : 146.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1080.5,
          "variance" : 1245494.7000000002,
          "n" : 1,
          "max" : 3343.0,
          "min" : 493.0,
          "sum" : 1080.5,
          "standardDeviation" : 1116.0173385749883
        }, {
          "mean" : 272.75,
          "variance" : 12000.250000000002,
          "n" : 4,
          "max" : 435.0,
          "min" : 204.0,
          "sum" : 1091.0,
          "standardDeviation" : 109.54565258375159
        }, {
          "mean" : 173.4,
          "variance" : 429.29999999999995,
          "n" : 5,
          "max" : 201.0,
          "min" : 147.0,
          "sum" : 867.0,
          "standardDeviation" : 20.719555979798407
        }, {
          "mean" : 170.5,
          "variance" : 633.666666666667,
          "n" : 4,
          "max" : 197.0,
          "min" : 148.0,
          "sum" : 682.0,
          "standardDeviation" : 25.172736574847537
        }, {
          "mean" : 188.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 188.0,
          "min" : 188.0,
          "sum" : 188.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 320.8,
          "variance" : 20836.700000000004,
          "n" : 5,
          "max" : 508.0,
          "min" : 184.0,
          "sum" : 1604.0,
          "standardDeviation" : 144.34922930171814
        }, {
          "mean" : 215.6,
          "variance" : 382.30000000000007,
          "n" : 5,
          "max" : 240.0,
          "min" : 193.0,
          "sum" : 1078.0,
          "standardDeviation" : 19.552493447128427
        }, {
          "mean" : 200.5,
          "variance" : 636.3333333333333,
          "n" : 4,
          "max" : 225.0,
          "min" : 168.0,
          "sum" : 802.0,
          "standardDeviation" : 25.22564832335005
        }, {
          "mean" : 219.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 219.0,
          "min" : 219.0,
          "sum" : 219.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 215.6,
          "variance" : 4467.8,
          "n" : 5,
          "max" : 287.0,
          "min" : 138.0,
          "sum" : 1078.0,
          "standardDeviation" : 66.84160381080035
        }, {
          "mean" : 179.8,
          "variance" : 642.7,
          "n" : 5,
          "max" : 207.0,
          "min" : 141.0,
          "sum" : 899.0,
          "standardDeviation" : 25.351528553521188
        }, {
          "mean" : 175.75,
          "variance" : 16.916666666666643,
          "n" : 4,
          "max" : 181.0,
          "min" : 172.0,
          "sum" : 703.0,
          "standardDeviation" : 4.112987559751019
        }, {
          "mean" : 203.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 203.0,
          "min" : 203.0,
          "sum" : 203.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 417.0,
          "variance" : 22865.000000000004,
          "n" : 5,
          "max" : 630.0,
          "min" : 214.0,
          "sum" : 2085.0,
          "standardDeviation" : 151.21177202850313
        }, {
          "mean" : 226.75,
          "variance" : 276.91666666666646,
          "n" : 4,
          "max" : 249.0,
          "min" : 214.0,
          "sum" : 907.0,
          "standardDeviation" : 16.640813281407446
        }, {
          "mean" : 171.8,
          "variance" : 606.7,
          "n" : 5,
          "max" : 199.0,
          "min" : 149.0,
          "sum" : 859.0,
          "standardDeviation" : 24.631280924872748
        }, {
          "mean" : 155.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 155.0,
          "min" : 155.0,
          "sum" : 155.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 315.4,
          "variance" : 16522.299999999996,
          "n" : 5,
          "max" : 516.0,
          "min" : 200.0,
          "sum" : 1577.0,
          "standardDeviation" : 128.53909910995952
        }, {
          "mean" : 191.0,
          "variance" : 175.33333333333343,
          "n" : 4,
          "max" : 201.0,
          "min" : 172.0,
          "sum" : 764.0,
          "standardDeviation" : 13.241349377360807
        }, {
          "mean" : 184.6,
          "variance" : 485.30000000000007,
          "n" : 5,
          "max" : 211.0,
          "min" : 162.0,
          "sum" : 923.0,
          "standardDeviation" : 22.029525641738182
        }, {
          "mean" : 218.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 218.0,
          "min" : 218.0,
          "sum" : 218.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 622.6666666666667,
          "variance" : 17949.86666666667,
          "n" : 1,
          "max" : 847.0,
          "min" : 474.0,
          "sum" : 622.6666666666667,
          "standardDeviation" : 133.977112473238
        }, {
          "mean" : 441.25,
          "variance" : 20276.25,
          "n" : 4,
          "max" : 588.0,
          "min" : 301.0,
          "sum" : 1765.0,
          "standardDeviation" : 142.39469793500038
        }, {
          "mean" : 194.8,
          "variance" : 134.20000000000005,
          "n" : 5,
          "max" : 209.0,
          "min" : 179.0,
          "sum" : 974.0,
          "standardDeviation" : 11.584472366059666
        }, {
          "mean" : 164.5,
          "variance" : 397.6666666666667,
          "n" : 4,
          "max" : 187.0,
          "min" : 140.0,
          "sum" : 658.0,
          "standardDeviation" : 19.9415813481947
        }, {
          "mean" : 168.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 168.0,
          "min" : 168.0,
          "sum" : 168.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 346.32367758186365,
          "variance" : 1440354.8749241624,
          "n" : 789,
          "max" : 30001.0,
          "min" : 61.0,
          "sum" : 273249.3816120904,
          "standardDeviation" : 1200.1478554428877
        }, {
          "mean" : 143.12269938650323,
          "variance" : 8928.420958110148,
          "n" : 978,
          "max" : 919.0,
          "min" : 36.0,
          "sum" : 139974.00000000015,
          "standardDeviation" : 94.49032203411177
        }, {
          "mean" : 120.91243654822328,
          "variance" : 155129.02027715606,
          "n" : 788,
          "max" : 10980.0,
          "min" : 36.0,
          "sum" : 95278.99999999994,
          "standardDeviation" : 393.86421553265797
        }, {
          "mean" : 77.2190860215055,
          "variance" : 2356.8900255430603,
          "n" : 744,
          "max" : 571.0,
          "min" : 28.0,
          "sum" : 57451.000000000095,
          "standardDeviation" : 48.54781174824526
        }, {
          "mean" : 66.39344262295084,
          "variance" : 707.2844013909589,
          "n" : 793,
          "max" : 426.0,
          "min" : 28.0,
          "sum" : 52650.00000000002,
          "standardDeviation" : 26.594819070468574
        }, {
          "mean" : 56.12307692307691,
          "variance" : 647.6388625592415,
          "n" : 845,
          "max" : 269.0,
          "min" : 15.0,
          "sum" : 47423.999999999985,
          "standardDeviation" : 25.448749724873352
        }, {
          "mean" : 56.030612244897995,
          "variance" : 532.422444346638,
          "n" : 882,
          "max" : 258.0,
          "min" : 15.0,
          "sum" : 49419.00000000003,
          "standardDeviation" : 23.074281014728022
        }, {
          "mean" : 53.50113122171943,
          "variance" : 566.06455138027,
          "n" : 884,
          "max" : 246.0,
          "min" : 15.0,
          "sum" : 47294.99999999998,
          "standardDeviation" : 23.792111116508135
        }, {
          "mean" : 60.084985835694056,
          "variance" : 531.3393477980944,
          "n" : 353,
          "max" : 228.0,
          "min" : 15.0,
          "sum" : 21210.0,
          "standardDeviation" : 23.050799287618954
        } ],
        "1" : [ {
          "mean" : 255.35005336179267,
          "variance" : 232434.5034001039,
          "n" : 932,
          "max" : 10275.0,
          "min" : 39.0,
          "sum" : 237986.24973319078,
          "standardDeviation" : 482.1146164555726
        }, {
          "mean" : 142.0763888888889,
          "variance" : 129612.07527037476,
          "n" : 864,
          "max" : 10384.0,
          "min" : 35.0,
          "sum" : 122754.00000000003,
          "standardDeviation" : 360.01677081821447
        }, {
          "mean" : 137.39199999999997,
          "variance" : 144626.91155140198,
          "n" : 750,
          "max" : 10227.0,
          "min" : 29.0,
          "sum" : 103043.99999999997,
          "standardDeviation" : 380.29845062976784
        }, {
          "mean" : 80.76844783715019,
          "variance" : 4227.4571433202045,
          "n" : 786,
          "max" : 672.0,
          "min" : 14.0,
          "sum" : 63484.00000000005,
          "standardDeviation" : 65.01889835517213
        }, {
          "mean" : 66.1926121372031,
          "variance" : 684.8558502350973,
          "n" : 758,
          "max" : 268.0,
          "min" : 24.0,
          "sum" : 50173.99999999995,
          "standardDeviation" : 26.16975067200865
        }, {
          "mean" : 60.131205673758906,
          "variance" : 708.5472617398968,
          "n" : 846,
          "max" : 269.0,
          "min" : 14.0,
          "sum" : 50871.00000000004,
          "standardDeviation" : 26.618551082654683
        }, {
          "mean" : 52.55795454545456,
          "variance" : 464.533611283483,
          "n" : 880,
          "max" : 252.0,
          "min" : 14.0,
          "sum" : 46251.00000000001,
          "standardDeviation" : 21.55304181046107
        }, {
          "mean" : 53.17175141242935,
          "variance" : 429.1062146892652,
          "n" : 885,
          "max" : 242.0,
          "min" : 15.0,
          "sum" : 47056.99999999998,
          "standardDeviation" : 20.71487906528216
        }, {
          "mean" : 56.393767705382416,
          "variance" : 477.50075650270406,
          "n" : 353,
          "max" : 236.0,
          "min" : 14.0,
          "sum" : 19906.999999999993,
          "standardDeviation" : 21.851790693275095
        } ],
        "2" : [ {
          "mean" : 287.5712468193384,
          "variance" : 854196.4847263416,
          "n" : 781,
          "max" : 15939.0,
          "min" : 36.0,
          "sum" : 224593.14376590328,
          "standardDeviation" : 924.2275070167202
        }, {
          "mean" : 143.705115346038,
          "variance" : 266436.8185782247,
          "n" : 997,
          "max" : 15550.0,
          "min" : 25.0,
          "sum" : 143273.9999999999,
          "standardDeviation" : 516.1751820634393
        }, {
          "mean" : 106.18359374999986,
          "variance" : 5221.970160731747,
          "n" : 768,
          "max" : 527.0,
          "min" : 35.0,
          "sum" : 81548.99999999988,
          "standardDeviation" : 72.26320059844946
        }, {
          "mean" : 129.79750346740627,
          "variance" : 11286.11727153644,
          "n" : 721,
          "max" : 713.0,
          "min" : 27.0,
          "sum" : 93583.99999999993,
          "standardDeviation" : 106.23613919724511
        }, {
          "mean" : 66.20278833967056,
          "variance" : 537.2405505909297,
          "n" : 789,
          "max" : 279.0,
          "min" : 15.0,
          "sum" : 52234.00000000007,
          "standardDeviation" : 23.178450133495332
        }, {
          "mean" : 56.040369088811936,
          "variance" : 660.8932876234315,
          "n" : 867,
          "max" : 249.0,
          "min" : 15.0,
          "sum" : 48586.99999999995,
          "standardDeviation" : 25.707844865399192
        }, {
          "mean" : 55.36077481840194,
          "variance" : 611.108471641353,
          "n" : 826,
          "max" : 247.0,
          "min" : 17.0,
          "sum" : 45728.00000000001,
          "standardDeviation" : 24.72060823769013
        }, {
          "mean" : 62.98290598290608,
          "variance" : 96576.62644544989,
          "n" : 936,
          "max" : 9538.0,
          "min" : 14.0,
          "sum" : 58952.000000000095,
          "standardDeviation" : 310.76780149405744
        }, {
          "mean" : 52.98918918918919,
          "variance" : 564.2437852486636,
          "n" : 370,
          "max" : 228.0,
          "min" : 15.0,
          "sum" : 19606.0,
          "standardDeviation" : 23.75381622494928
        } ],
        "3" : [ {
          "mean" : 252.71931696905034,
          "variance" : 435736.9798935497,
          "n" : 932,
          "max" : 14649.0,
          "min" : 58.0,
          "sum" : 235534.40341515493,
          "standardDeviation" : 660.1037644897579
        }, {
          "mean" : 129.99421296296296,
          "variance" : 43654.30471734047,
          "n" : 864,
          "max" : 5733.0,
          "min" : 25.0,
          "sum" : 112315.0,
          "standardDeviation" : 208.93612592689774
        }, {
          "mean" : 115.0093085106383,
          "variance" : 5110.869420559818,
          "n" : 752,
          "max" : 556.0,
          "min" : 35.0,
          "sum" : 86487.0,
          "standardDeviation" : 71.49034494643188
        }, {
          "mean" : 80.52000000000004,
          "variance" : 3030.2278453038666,
          "n" : 725,
          "max" : 575.0,
          "min" : 22.0,
          "sum" : 58377.00000000003,
          "standardDeviation" : 55.04750535041408
        }, {
          "mean" : 62.86862244897952,
          "variance" : 711.8154126593168,
          "n" : 784,
          "max" : 273.0,
          "min" : 15.0,
          "sum" : 49288.99999999994,
          "standardDeviation" : 26.679869052514423
        }, {
          "mean" : 53.87571921749138,
          "variance" : 497.20343050171533,
          "n" : 869,
          "max" : 229.0,
          "min" : 14.0,
          "sum" : 46818.00000000001,
          "standardDeviation" : 22.298058895377313
        }, {
          "mean" : 54.736972704714645,
          "variance" : 601.9679977806207,
          "n" : 806,
          "max" : 246.0,
          "min" : 14.0,
          "sum" : 44118.00000000001,
          "standardDeviation" : 24.535036127558907
        }, {
          "mean" : 50.606263982102824,
          "variance" : 423.65666844535406,
          "n" : 894,
          "max" : 226.0,
          "min" : 14.0,
          "sum" : 45241.99999999993,
          "standardDeviation" : 20.582921766487722
        }, {
          "mean" : 56.867749419953576,
          "variance" : 457.0638644579947,
          "n" : 431,
          "max" : 138.0,
          "min" : 19.0,
          "sum" : 24509.999999999993,
          "standardDeviation" : 21.379052000918907
        } ],
        "4" : [ {
          "mean" : 238.56039173014136,
          "variance" : 150892.00914843025,
          "n" : 914,
          "max" : 6515.0,
          "min" : 61.0,
          "sum" : 218044.1980413492,
          "standardDeviation" : 388.4482065197756
        }, {
          "mean" : 118.00347222222237,
          "variance" : 5661.5260597721135,
          "n" : 864,
          "max" : 567.0,
          "min" : 27.0,
          "sum" : 101955.00000000013,
          "standardDeviation" : 75.24311303881647
        }, {
          "mean" : 124.96098829648889,
          "variance" : 152451.3708719388,
          "n" : 769,
          "max" : 10755.0,
          "min" : 35.0,
          "sum" : 96094.99999999996,
          "standardDeviation" : 390.4502156126166
        }, {
          "mean" : 82.18793828892005,
          "variance" : 3702.557326220904,
          "n" : 713,
          "max" : 886.0,
          "min" : 15.0,
          "sum" : 58600.0,
          "standardDeviation" : 60.84864276400012
        }, {
          "mean" : 83.3456162642948,
          "variance" : 133906.14757299752,
          "n" : 787,
          "max" : 10291.0,
          "min" : 14.0,
          "sum" : 65593.00000000001,
          "standardDeviation" : 365.93188925399426
        }, {
          "mean" : 58.82222222222221,
          "variance" : 773.8137913088739,
          "n" : 855,
          "max" : 240.0,
          "min" : 14.0,
          "sum" : 50292.999999999985,
          "standardDeviation" : 27.817508718590776
        }, {
          "mean" : 67.3345498783455,
          "variance" : 111371.78440777524,
          "n" : 822,
          "max" : 9599.0,
          "min" : 14.0,
          "sum" : 55349.0,
          "standardDeviation" : 333.72411421378473
        }, {
          "mean" : 60.0934371523915,
          "variance" : 778.8331306004449,
          "n" : 899,
          "max" : 406.0,
          "min" : 14.0,
          "sum" : 54023.99999999996,
          "standardDeviation" : 27.907581955455132
        }, {
          "mean" : 100.83796296296295,
          "variance" : 710722.4098779755,
          "n" : 432,
          "max" : 17573.0,
          "min" : 14.0,
          "sum" : 43561.99999999999,
          "standardDeviation" : 843.0435397285098
        } ],
        "5" : [ {
          "mean" : 244.91638418079077,
          "variance" : 294918.73281949013,
          "n" : 880,
          "max" : 12787.0,
          "min" : 61.0,
          "sum" : 215526.4180790959,
          "standardDeviation" : 543.0642069032815
        }, {
          "mean" : 113.03611738148996,
          "variance" : 6886.385134738758,
          "n" : 886,
          "max" : 805.0,
          "min" : 20.0,
          "sum" : 100150.0000000001,
          "standardDeviation" : 82.98424630457734
        }, {
          "mean" : 116.8173575129533,
          "variance" : 222406.4711380145,
          "n" : 772,
          "max" : 13103.0,
          "min" : 20.0,
          "sum" : 90182.99999999994,
          "standardDeviation" : 471.5999057866896
        }, {
          "mean" : 82.43905817174513,
          "variance" : 2348.754255977193,
          "n" : 722,
          "max" : 447.0,
          "min" : 28.0,
          "sum" : 59520.999999999985,
          "standardDeviation" : 48.46394800237795
        }, {
          "mean" : 62.071246819338455,
          "variance" : 687.4598855772198,
          "n" : 786,
          "max" : 260.0,
          "min" : 14.0,
          "sum" : 48788.00000000003,
          "standardDeviation" : 26.219456241066858
        }, {
          "mean" : 69.48169336384437,
          "variance" : 119333.12967593799,
          "n" : 874,
          "max" : 10245.0,
          "min" : 14.0,
          "sum" : 60726.99999999998,
          "standardDeviation" : 345.4462761066299
        }, {
          "mean" : 67.21824907521584,
          "variance" : 117976.6424319921,
          "n" : 811,
          "max" : 9819.0,
          "min" : 17.0,
          "sum" : 54514.000000000044,
          "standardDeviation" : 343.4772808090691
        }, {
          "mean" : 76.05119825708056,
          "variance" : 224961.88941513846,
          "n" : 918,
          "max" : 10223.0,
          "min" : 14.0,
          "sum" : 69814.99999999996,
          "standardDeviation" : 474.3014752403143
        }, {
          "mean" : 54.63300492610833,
          "variance" : 794.3020190962724,
          "n" : 406,
          "max" : 254.0,
          "min" : 14.0,
          "sum" : 22180.99999999998,
          "standardDeviation" : 28.183364226015893
        } ],
        "6" : [ {
          "mean" : 258.42201834862374,
          "variance" : 265116.1477580338,
          "n" : 867,
          "max" : 11166.0,
          "min" : 62.0,
          "sum" : 224051.88990825677,
          "standardDeviation" : 514.8943073661175
        }, {
          "mean" : 127.34482758620675,
          "variance" : 7026.092542815434,
          "n" : 899,
          "max" : 681.0,
          "min" : 18.0,
          "sum" : 114482.99999999987,
          "standardDeviation" : 83.82179038182991
        }, {
          "mean" : 104.34403080872914,
          "variance" : 3651.5858608525214,
          "n" : 779,
          "max" : 615.0,
          "min" : 18.0,
          "sum" : 81284.0,
          "standardDeviation" : 60.42835312047252
        }, {
          "mean" : 94.68994413407805,
          "variance" : 134341.61002461248,
          "n" : 716,
          "max" : 9741.0,
          "min" : 21.0,
          "sum" : 67797.99999999988,
          "standardDeviation" : 366.52641108740374
        }, {
          "mean" : 61.973007712082314,
          "variance" : 896.0520375314723,
          "n" : 778,
          "max" : 282.0,
          "min" : 14.0,
          "sum" : 48215.000000000044,
          "standardDeviation" : 29.934128307526716
        }, {
          "mean" : 66.57659831121825,
          "variance" : 122745.67196377687,
          "n" : 829,
          "max" : 10122.0,
          "min" : 14.0,
          "sum" : 55191.99999999993,
          "standardDeviation" : 350.350784163211
        }, {
          "mean" : 66.07808857808844,
          "variance" : 119282.1350852571,
          "n" : 858,
          "max" : 10148.0,
          "min" : 14.0,
          "sum" : 56694.99999999988,
          "standardDeviation" : 345.3724584926498
        }, {
          "mean" : 54.73539140022054,
          "variance" : 603.724606993436,
          "n" : 907,
          "max" : 272.0,
          "min" : 15.0,
          "sum" : 49645.00000000003,
          "standardDeviation" : 24.57080802483785
        }, {
          "mean" : 50.132387706855795,
          "variance" : 365.97295329008523,
          "n" : 423,
          "max" : 108.0,
          "min" : 23.0,
          "sum" : 21206.0,
          "standardDeviation" : 19.1304195795619
        } ],
        "7" : [ {
          "mean" : 252.86628462273183,
          "variance" : 309417.6972082669,
          "n" : 1042,
          "max" : 12443.0,
          "min" : 44.0,
          "sum" : 263486.6685768866,
          "standardDeviation" : 556.2532671439035
        }, {
          "mean" : 133.48848484848506,
          "variance" : 8930.859393939383,
          "n" : 825,
          "max" : 844.0,
          "min" : 27.0,
          "sum" : 110128.00000000017,
          "standardDeviation" : 94.50322425155336
        }, {
          "mean" : 117.00520833333336,
          "variance" : 5171.986935028247,
          "n" : 768,
          "max" : 495.0,
          "min" : 33.0,
          "sum" : 89860.00000000001,
          "standardDeviation" : 71.9165275512399
        }, {
          "mean" : 75.68064952638704,
          "variance" : 3274.242050526053,
          "n" : 739,
          "max" : 662.0,
          "min" : 16.0,
          "sum" : 55928.00000000002,
          "standardDeviation" : 57.220993092798146
        }, {
          "mean" : 70.35006119951035,
          "variance" : 127590.34544423645,
          "n" : 817,
          "max" : 10243.0,
          "min" : 14.0,
          "sum" : 57475.999999999956,
          "standardDeviation" : 357.1979079505316
        }, {
          "mean" : 65.14565483476133,
          "variance" : 121491.6172390621,
          "n" : 817,
          "max" : 9998.0,
          "min" : 15.0,
          "sum" : 53224.00000000001,
          "standardDeviation" : 348.5564763981041
        }, {
          "mean" : 64.79490022172948,
          "variance" : 116545.48174976817,
          "n" : 902,
          "max" : 10282.0,
          "min" : 15.0,
          "sum" : 58444.999999999985,
          "standardDeviation" : 341.3875828874978
        }, {
          "mean" : 52.72841051314139,
          "variance" : 345.25572065332267,
          "n" : 799,
          "max" : 166.0,
          "min" : 15.0,
          "sum" : 42129.99999999997,
          "standardDeviation" : 18.581058114470302
        }, {
          "mean" : 49.33045977011494,
          "variance" : 440.37751333267084,
          "n" : 348,
          "max" : 242.0,
          "min" : 14.0,
          "sum" : 17167.0,
          "standardDeviation" : 20.98517365505158
        } ],
        "8" : [ {
          "mean" : 321.0397877984082,
          "variance" : 1.2209626096645594E7,
          "n" : 1126,
          "max" : 116633.0,
          "min" : 40.0,
          "sum" : 361490.80106100766,
          "standardDeviation" : 3494.2275393347804
        }, {
          "mean" : 108.08356940509925,
          "variance" : 4507.11499206397,
          "n" : 706,
          "max" : 578.0,
          "min" : 18.0,
          "sum" : 76307.00000000007,
          "standardDeviation" : 67.13505039890839
        }, {
          "mean" : 119.24475524475507,
          "variance" : 140953.54365242593,
          "n" : 715,
          "max" : 9994.0,
          "min" : 19.0,
          "sum" : 85259.99999999987,
          "standardDeviation" : 375.43780264169715
        }, {
          "mean" : 127.62025316455686,
          "variance" : 8430.678124442855,
          "n" : 711,
          "max" : 735.0,
          "min" : 35.0,
          "sum" : 90737.99999999993,
          "standardDeviation" : 91.81872425841505
        }, {
          "mean" : 75.35209424083779,
          "variance" : 129720.37783309183,
          "n" : 764,
          "max" : 9959.0,
          "min" : 15.0,
          "sum" : 57569.000000000065,
          "standardDeviation" : 360.16715262929216
        }, {
          "mean" : 55.231678486997644,
          "variance" : 427.43738581840114,
          "n" : 846,
          "max" : 262.0,
          "min" : 14.0,
          "sum" : 46726.00000000001,
          "standardDeviation" : 20.674558902632025
        }, {
          "mean" : 51.30696576151121,
          "variance" : 502.8087339267224,
          "n" : 847,
          "max" : 239.0,
          "min" : 21.0,
          "sum" : 43456.99999999999,
          "standardDeviation" : 22.42339702022694
        }, {
          "mean" : 52.25030229746069,
          "variance" : 464.8367886494253,
          "n" : 827,
          "max" : 263.0,
          "min" : 14.0,
          "sum" : 43210.99999999999,
          "standardDeviation" : 21.560073948143714
        }, {
          "mean" : 54.339805825242735,
          "variance" : 473.15473537078327,
          "n" : 515,
          "max" : 246.0,
          "min" : 15.0,
          "sum" : 27985.000000000007,
          "standardDeviation" : 21.75212025000743
        } ],
        "9" : [ {
          "mean" : 252.833333333333,
          "variance" : 207292.40465380234,
          "n" : 877,
          "max" : 11006.0,
          "min" : 68.0,
          "sum" : 221734.83333333305,
          "standardDeviation" : 455.29375644061093
        }, {
          "mean" : 129.30487804878067,
          "variance" : 10304.48075309276,
          "n" : 902,
          "max" : 1145.0,
          "min" : 36.0,
          "sum" : 116633.00000000016,
          "standardDeviation" : 101.51098833669565
        }, {
          "mean" : 105.70565045992109,
          "variance" : 5372.992191714499,
          "n" : 761,
          "max" : 657.0,
          "min" : 34.0,
          "sum" : 80441.99999999994,
          "standardDeviation" : 73.3006970752291
        }, {
          "mean" : 83.47500000000005,
          "variance" : 4059.9047983310174,
          "n" : 720,
          "max" : 781.0,
          "min" : 15.0,
          "sum" : 60102.00000000004,
          "standardDeviation" : 63.71738223068347
        }, {
          "mean" : 63.988491048593424,
          "variance" : 856.1752835076014,
          "n" : 782,
          "max" : 287.0,
          "min" : 15.0,
          "sum" : 50039.00000000006,
          "standardDeviation" : 29.260473056797995
        }, {
          "mean" : 71.479240806643,
          "variance" : 113524.70354716644,
          "n" : 843,
          "max" : 9812.0,
          "min" : 13.0,
          "sum" : 60257.00000000005,
          "standardDeviation" : 336.9342718501139
        }, {
          "mean" : 71.80519480519479,
          "variance" : 193893.42418101995,
          "n" : 847,
          "max" : 12850.0,
          "min" : 14.0,
          "sum" : 60818.999999999985,
          "standardDeviation" : 440.3333103241452
        }, {
          "mean" : 63.32317736670298,
          "variance" : 37292.654701875836,
          "n" : 919,
          "max" : 5865.0,
          "min" : 21.0,
          "sum" : 58194.00000000004,
          "standardDeviation" : 193.11306196597846
        }, {
          "mean" : 62.24197530864199,
          "variance" : 580.7135802469129,
          "n" : 405,
          "max" : 237.0,
          "min" : 17.0,
          "sum" : 25208.000000000007,
          "standardDeviation" : 24.09799950715646
        } ],
        "10" : [ {
          "mean" : 276.0724815724819,
          "variance" : 399765.74012741406,
          "n" : 809,
          "max" : 12345.0,
          "min" : 50.0,
          "sum" : 223342.63759213785,
          "standardDeviation" : 632.2703062199063
        }, {
          "mean" : 136.78056426332296,
          "variance" : 9916.062676250305,
          "n" : 957,
          "max" : 869.0,
          "min" : 19.0,
          "sum" : 130899.00000000007,
          "standardDeviation" : 99.57942898134286
        }, {
          "mean" : 120.49999999999989,
          "variance" : 5674.951219512194,
          "n" : 780,
          "max" : 605.0,
          "min" : 26.0,
          "sum" : 93989.99999999991,
          "standardDeviation" : 75.33227209843199
        }, {
          "mean" : 83.84733893557427,
          "variance" : 3276.842019556767,
          "n" : 714,
          "max" : 588.0,
          "min" : 19.0,
          "sum" : 59867.00000000003,
          "standardDeviation" : 57.24370724854189
        }, {
          "mean" : 77.79695431472086,
          "variance" : 133102.9574494161,
          "n" : 788,
          "max" : 10274.0,
          "min" : 18.0,
          "sum" : 61304.000000000044,
          "standardDeviation" : 364.8327801190788
        }, {
          "mean" : 54.65097588978182,
          "variance" : 519.6688467476932,
          "n" : 871,
          "max" : 267.0,
          "min" : 14.0,
          "sum" : 47600.99999999996,
          "standardDeviation" : 22.796246330211762
        }, {
          "mean" : 55.80481927710845,
          "variance" : 476.9510020782768,
          "n" : 830,
          "max" : 243.0,
          "min" : 14.0,
          "sum" : 46318.000000000015,
          "standardDeviation" : 21.83920790867372
        }, {
          "mean" : 54.93048128342242,
          "variance" : 525.422356834499,
          "n" : 935,
          "max" : 252.0,
          "min" : 15.0,
          "sum" : 51359.999999999956,
          "standardDeviation" : 22.922093203599427
        }, {
          "mean" : 59.07008086253367,
          "variance" : 635.7031835069572,
          "n" : 371,
          "max" : 255.0,
          "min" : 17.0,
          "sum" : 21914.999999999993,
          "standardDeviation" : 25.213154969320225
        } ],
        "11" : [ {
          "mean" : 287.5183946488292,
          "variance" : 1572084.4552974226,
          "n" : 892,
          "max" : 35076.0,
          "min" : 39.0,
          "sum" : 256466.40802675564,
          "standardDeviation" : 1253.827920927518
        }, {
          "mean" : 117.20660276890321,
          "variance" : 6226.223794310058,
          "n" : 939,
          "max" : 650.0,
          "min" : 36.0,
          "sum" : 110057.00000000012,
          "standardDeviation" : 78.9064242904851
        }, {
          "mean" : 110.48132780082987,
          "variance" : 5966.543625935322,
          "n" : 723,
          "max" : 662.0,
          "min" : 35.0,
          "sum" : 79878.0,
          "standardDeviation" : 77.24340506435045
        }, {
          "mean" : 75.75609756097562,
          "variance" : 2687.6730829519083,
          "n" : 779,
          "max" : 623.0,
          "min" : 15.0,
          "sum" : 59014.00000000001,
          "standardDeviation" : 51.84277271666619
        }, {
          "mean" : 65.16711229946515,
          "variance" : 758.3749812082544,
          "n" : 748,
          "max" : 259.0,
          "min" : 23.0,
          "sum" : 48744.99999999993,
          "standardDeviation" : 27.53860891926559
        }, {
          "mean" : 58.583430571761994,
          "variance" : 689.9839774697645,
          "n" : 857,
          "max" : 287.0,
          "min" : 18.0,
          "sum" : 50206.00000000003,
          "standardDeviation" : 26.26754608770611
        }, {
          "mean" : 52.40685714285716,
          "variance" : 460.9647126511933,
          "n" : 875,
          "max" : 229.0,
          "min" : 16.0,
          "sum" : 45856.000000000015,
          "standardDeviation" : 21.470088790016526
        }, {
          "mean" : 52.505061867266534,
          "variance" : 422.1016072315287,
          "n" : 889,
          "max" : 250.0,
          "min" : 14.0,
          "sum" : 46676.99999999995,
          "standardDeviation" : 20.545111516648642
        }, {
          "mean" : 56.883852691218124,
          "variance" : 620.9097669327838,
          "n" : 353,
          "max" : 245.0,
          "min" : 21.0,
          "sum" : 20079.999999999996,
          "standardDeviation" : 24.918061058854153
        } ],
        "12" : [ {
          "mean" : 242.9187913125591,
          "variance" : 196535.91400383087,
          "n" : 1054,
          "max" : 9948.0,
          "min" : 37.0,
          "sum" : 256036.4060434373,
          "standardDeviation" : 443.3237124312559
        }, {
          "mean" : 128.5552731893264,
          "variance" : 10554.183645822219,
          "n" : 787,
          "max" : 890.0,
          "min" : 18.0,
          "sum" : 101172.99999999988,
          "standardDeviation" : 102.73355657146412
        }, {
          "mean" : 131.2776998597475,
          "variance" : 7973.228954252491,
          "n" : 713,
          "max" : 682.0,
          "min" : 37.0,
          "sum" : 93600.99999999997,
          "standardDeviation" : 89.29293899437117
        }, {
          "mean" : 85.45698924731185,
          "variance" : 3445.1906105732332,
          "n" : 744,
          "max" : 653.0,
          "min" : 28.0,
          "sum" : 63580.00000000002,
          "standardDeviation" : 58.695746102875574
        }, {
          "mean" : 63.196569920844375,
          "variance" : 753.3919565149193,
          "n" : 758,
          "max" : 251.0,
          "min" : 15.0,
          "sum" : 47903.00000000004,
          "standardDeviation" : 27.447986383611447
        }, {
          "mean" : 64.86095017381233,
          "variance" : 111012.89711603346,
          "n" : 863,
          "max" : 9817.0,
          "min" : 14.0,
          "sum" : 55975.00000000004,
          "standardDeviation" : 333.1859797711084
        }, {
          "mean" : 74.24189526184534,
          "variance" : 153480.42331125995,
          "n" : 802,
          "max" : 10037.0,
          "min" : 14.0,
          "sum" : 59541.99999999996,
          "standardDeviation" : 391.76577608471615
        }, {
          "mean" : 73.14781634938404,
          "variance" : 158583.41758771485,
          "n" : 893,
          "max" : 9939.0,
          "min" : 15.0,
          "sum" : 65320.99999999995,
          "standardDeviation" : 398.22533519066167
        }, {
          "mean" : 53.68863636363638,
          "variance" : 433.25362911575894,
          "n" : 440,
          "max" : 199.0,
          "min" : 28.0,
          "sum" : 23623.000000000007,
          "standardDeviation" : 20.814745473239853
        } ],
        "13" : [ {
          "mean" : 14898.434167573445,
          "variance" : 1.9713253986795193E11,
          "n" : 914,
          "max" : 1.3459989E7,
          "min" : 35.0,
          "sum" : 1.3617168829162128E7,
          "standardDeviation" : 443996.10343780264
        }, {
          "mean" : 123.25466520307363,
          "variance" : 7681.126283157024,
          "n" : 911,
          "max" : 699.0,
          "min" : 36.0,
          "sum" : 112285.00000000007,
          "standardDeviation" : 87.64203490995074
        }, {
          "mean" : 113.86407766990298,
          "variance" : 6221.212055016179,
          "n" : 721,
          "max" : 678.0,
          "min" : 18.0,
          "sum" : 82096.00000000004,
          "standardDeviation" : 78.8746604114159
        }, {
          "mean" : 80.6616643929058,
          "variance" : 4113.836192307976,
          "n" : 733,
          "max" : 703.0,
          "min" : 14.0,
          "sum" : 59124.999999999956,
          "standardDeviation" : 64.13919388570436
        }, {
          "mean" : 68.09395109395098,
          "variance" : 1314.7140999615235,
          "n" : 777,
          "max" : 612.0,
          "min" : 16.0,
          "sum" : 52908.99999999991,
          "standardDeviation" : 36.25898647179101
        }, {
          "mean" : 58.41905855338686,
          "variance" : 707.9586708367966,
          "n" : 871,
          "max" : 284.0,
          "min" : 14.0,
          "sum" : 50882.999999999956,
          "standardDeviation" : 26.607492757432006
        }, {
          "mean" : 54.15272727272727,
          "variance" : 640.5373256840253,
          "n" : 825,
          "max" : 245.0,
          "min" : 14.0,
          "sum" : 44676.0,
          "standardDeviation" : 25.308838884548326
        }, {
          "mean" : 54.71229946524067,
          "variance" : 576.2137136575482,
          "n" : 935,
          "max" : 255.0,
          "min" : 14.0,
          "sum" : 51156.00000000002,
          "standardDeviation" : 24.004451954950945
        }, {
          "mean" : 54.71815718157181,
          "variance" : 424.2953487687053,
          "n" : 369,
          "max" : 124.0,
          "min" : 15.0,
          "sum" : 20191.0,
          "standardDeviation" : 20.598430735585303
        } ],
        "14" : [ {
          "mean" : 235.94995278564693,
          "variance" : 238915.29711483687,
          "n" : 1054,
          "max" : 11926.0,
          "min" : 43.0,
          "sum" : 248691.25023607185,
          "standardDeviation" : 488.7896245981873
        }, {
          "mean" : 117.52518891687652,
          "variance" : 5124.168973797809,
          "n" : 794,
          "max" : 685.0,
          "min" : 19.0,
          "sum" : 93314.99999999996,
          "standardDeviation" : 71.58330094231341
        }, {
          "mean" : 102.7212276214834,
          "variance" : 6087.899139080001,
          "n" : 782,
          "max" : 734.0,
          "min" : 18.0,
          "sum" : 80328.00000000001,
          "standardDeviation" : 78.02499047792317
        }, {
          "mean" : 77.02496532593612,
          "variance" : 4600.143820311288,
          "n" : 721,
          "max" : 875.0,
          "min" : 14.0,
          "sum" : 55534.99999999994,
          "standardDeviation" : 67.82436008036706
        }, {
          "mean" : 62.38148148148155,
          "variance" : 932.6070732042305,
          "n" : 810,
          "max" : 278.0,
          "min" : 15.0,
          "sum" : 50529.00000000006,
          "standardDeviation" : 30.53861609837994
        }, {
          "mean" : 55.28925619834715,
          "variance" : 634.7755700134812,
          "n" : 847,
          "max" : 320.0,
          "min" : 17.0,
          "sum" : 46830.00000000004,
          "standardDeviation" : 25.194752826997156
        }, {
          "mean" : 54.532150776053165,
          "variance" : 461.12160668978373,
          "n" : 902,
          "max" : 237.0,
          "min" : 14.0,
          "sum" : 49187.999999999956,
          "standardDeviation" : 21.473742260951717
        }, {
          "mean" : 51.475247524752504,
          "variance" : 437.36245966604133,
          "n" : 808,
          "max" : 256.0,
          "min" : 14.0,
          "sum" : 41592.00000000002,
          "standardDeviation" : 20.91321256206328
        }, {
          "mean" : 57.035714285714306,
          "variance" : 758.1599147121535,
          "n" : 336,
          "max" : 251.0,
          "min" : 14.0,
          "sum" : 19164.000000000007,
          "standardDeviation" : 27.5347038246674
        } ],
        "15" : [ {
          "mean" : 244.25374855824714,
          "variance" : 329867.3627890503,
          "n" : 862,
          "max" : 10593.0,
          "min" : 65.0,
          "sum" : 210546.73125720903,
          "standardDeviation" : 574.3408071772807
        }, {
          "mean" : 119.97925764192135,
          "variance" : 106113.95038895655,
          "n" : 916,
          "max" : 9774.0,
          "min" : 35.0,
          "sum" : 109900.99999999996,
          "standardDeviation" : 325.7513628351485
        }, {
          "mean" : 91.08781127129761,
          "variance" : 2107.857108457773,
          "n" : 763,
          "max" : 428.0,
          "min" : 19.0,
          "sum" : 69500.00000000007,
          "standardDeviation" : 45.911404993288684
        }, {
          "mean" : 118.46324549237166,
          "variance" : 7144.7045500077065,
          "n" : 721,
          "max" : 665.0,
          "min" : 24.0,
          "sum" : 85411.99999999996,
          "standardDeviation" : 84.5263541743503
        }, {
          "mean" : 64.3972257250945,
          "variance" : 941.9417599704478,
          "n" : 793,
          "max" : 466.0,
          "min" : 14.0,
          "sum" : 51066.99999999994,
          "standardDeviation" : 30.691069710429577
        }, {
          "mean" : 72.32638888888884,
          "variance" : 118864.792535728,
          "n" : 864,
          "max" : 10164.0,
          "min" : 18.0,
          "sum" : 62489.99999999996,
          "standardDeviation" : 344.7677370864739
        }, {
          "mean" : 67.26474127557167,
          "variance" : 119711.9876589389,
          "n" : 831,
          "max" : 10008.0,
          "min" : 14.0,
          "sum" : 55897.00000000005,
          "standardDeviation" : 345.9942017706928
        }, {
          "mean" : 56.012834224599004,
          "variance" : 463.30390362880553,
          "n" : 935,
          "max" : 229.0,
          "min" : 21.0,
          "sum" : 52372.000000000065,
          "standardDeviation" : 21.524495432618288
        }, {
          "mean" : 64.33333333333331,
          "variance" : 705.7010869565216,
          "n" : 369,
          "max" : 256.0,
          "min" : 28.0,
          "sum" : 23738.999999999993,
          "standardDeviation" : 26.565035045271852
        } ],
        "16" : [ {
          "mean" : 255.36198179979738,
          "variance" : 459670.48422117,
          "n" : 984,
          "max" : 13977.0,
          "min" : 37.0,
          "sum" : 251276.1900910006,
          "standardDeviation" : 677.9900325382151
        }, {
          "mean" : 128.2549707602338,
          "variance" : 6411.108215894934,
          "n" : 855,
          "max" : 568.0,
          "min" : 27.0,
          "sum" : 109657.99999999988,
          "standardDeviation" : 80.06939625034607
        }, {
          "mean" : 119.25238744884032,
          "variance" : 5531.3146288551425,
          "n" : 733,
          "max" : 488.0,
          "min" : 35.0,
          "sum" : 87411.99999999996,
          "standardDeviation" : 74.37280839698836
        }, {
          "mean" : 80.7078947368421,
          "variance" : 3137.1345884474017,
          "n" : 760,
          "max" : 628.0,
          "min" : 19.0,
          "sum" : 61338.0,
          "standardDeviation" : 56.0101293378921
        }, {
          "mean" : 65.16142270861826,
          "variance" : 908.9054138635383,
          "n" : 731,
          "max" : 253.0,
          "min" : 21.0,
          "sum" : 47632.99999999995,
          "standardDeviation" : 30.14805821049738
        }, {
          "mean" : 74.27866972477065,
          "variance" : 269860.4170875511,
          "n" : 872,
          "max" : 15375.0,
          "min" : 14.0,
          "sum" : 64771.00000000001,
          "standardDeviation" : 519.48091118688
        }, {
          "mean" : 56.293124246079614,
          "variance" : 665.4876459036265,
          "n" : 829,
          "max" : 247.0,
          "min" : 14.0,
          "sum" : 46667.0,
          "standardDeviation" : 25.797047232263356
        }, {
          "mean" : 56.643939393939334,
          "variance" : 531.7636577037989,
          "n" : 924,
          "max" : 269.0,
          "min" : 14.0,
          "sum" : 52338.99999999994,
          "standardDeviation" : 23.060001251166465
        }, {
          "mean" : 59.635869565217405,
          "variance" : 567.3384373889348,
          "n" : 368,
          "max" : 232.0,
          "min" : 15.0,
          "sum" : 21946.000000000004,
          "standardDeviation" : 23.818867256629456
        } ],
        "17" : [ {
          "mean" : 290.57093425605535,
          "variance" : 1053252.0628031678,
          "n" : 862,
          "max" : 19461.0,
          "min" : 50.0,
          "sum" : 250472.14532871972,
          "standardDeviation" : 1026.28069396397
        }, {
          "mean" : 124.50222717149212,
          "variance" : 6242.609248099964,
          "n" : 898,
          "max" : 653.0,
          "min" : 36.0,
          "sum" : 111802.99999999993,
          "standardDeviation" : 79.01018445808087
        }, {
          "mean" : 107.84743589743594,
          "variance" : 4929.700699450319,
          "n" : 780,
          "max" : 700.0,
          "min" : 26.0,
          "sum" : 84121.00000000003,
          "standardDeviation" : 70.21182734732318
        }, {
          "mean" : 75.9695290858726,
          "variance" : 2828.379097974885,
          "n" : 722,
          "max" : 783.0,
          "min" : 14.0,
          "sum" : 54850.000000000015,
          "standardDeviation" : 53.182507443471344
        }, {
          "mean" : 77.0888030888031,
          "variance" : 127995.11452652962,
          "n" : 777,
          "max" : 10013.0,
          "min" : 23.0,
          "sum" : 59898.000000000015,
          "standardDeviation" : 357.76404867807724
        }, {
          "mean" : 55.92150170648459,
          "variance" : 556.0200268994842,
          "n" : 879,
          "max" : 288.0,
          "min" : 15.0,
          "sum" : 49154.999999999956,
          "standardDeviation" : 23.580076906140153
        }, {
          "mean" : 53.71247113163974,
          "variance" : 445.5391968922293,
          "n" : 866,
          "max" : 233.0,
          "min" : 18.0,
          "sum" : 46515.000000000015,
          "standardDeviation" : 21.107799432726978
        }, {
          "mean" : 69.61290322580639,
          "variance" : 101466.57381995824,
          "n" : 899,
          "max" : 9574.0,
          "min" : 23.0,
          "sum" : 62581.99999999995,
          "standardDeviation" : 318.53818267196516
        }, {
          "mean" : 56.037837837837856,
          "variance" : 405.6787812202445,
          "n" : 370,
          "max" : 115.0,
          "min" : 23.0,
          "sum" : 20734.000000000007,
          "standardDeviation" : 20.141469192197587
        } ],
        "18" : [ {
          "mean" : 238.25412541254119,
          "variance" : 211816.13468835832,
          "n" : 904,
          "max" : 9976.0,
          "min" : 59.0,
          "sum" : 215381.72937293723,
          "standardDeviation" : 460.23486904879155
        }, {
          "mean" : 124.28586839266443,
          "variance" : 60912.28212189628,
          "n" : 927,
          "max" : 7243.0,
          "min" : 35.0,
          "sum" : 115212.99999999993,
          "standardDeviation" : 246.80413716527582
        }, {
          "mean" : 105.03319502074689,
          "variance" : 5037.3673176170405,
          "n" : 723,
          "max" : 616.0,
          "min" : 35.0,
          "sum" : 75939.0,
          "standardDeviation" : 70.9744131192153
        }, {
          "mean" : 76.94480946123515,
          "variance" : 2696.433792101805,
          "n" : 761,
          "max" : 683.0,
          "min" : 23.0,
          "sum" : 58554.99999999995,
          "standardDeviation" : 51.92719703683037
        }, {
          "mean" : 93.92037786774624,
          "variance" : 237834.00311120844,
          "n" : 741,
          "max" : 9454.0,
          "min" : 28.0,
          "sum" : 69594.99999999996,
          "standardDeviation" : 487.6822768065377
        }, {
          "mean" : 70.52559726962455,
          "variance" : 116227.00361510416,
          "n" : 879,
          "max" : 10128.0,
          "min" : 14.0,
          "sum" : 61991.999999999985,
          "standardDeviation" : 340.9208172216888
        }, {
          "mean" : 52.56386651323357,
          "variance" : 380.38214908815127,
          "n" : 869,
          "max" : 166.0,
          "min" : 14.0,
          "sum" : 45677.99999999997,
          "standardDeviation" : 19.503388143811097
        }, {
          "mean" : 54.09121621621626,
          "variance" : 489.0029441786766,
          "n" : 888,
          "max" : 242.0,
          "min" : 14.0,
          "sum" : 48033.00000000004,
          "standardDeviation" : 22.113410957576775
        }, {
          "mean" : 57.429752066115675,
          "variance" : 606.7540294963705,
          "n" : 363,
          "max" : 267.0,
          "min" : 14.0,
          "sum" : 20846.99999999999,
          "standardDeviation" : 24.63237766632305
        } ],
        "19" : [ {
          "mean" : 283.55287356321804,
          "variance" : 547876.5673967956,
          "n" : 865,
          "max" : 17224.0,
          "min" : 47.0,
          "sum" : 245273.2356321836,
          "standardDeviation" : 740.1868462738281
        }, {
          "mean" : 127.13423517169622,
          "variance" : 107023.79967048213,
          "n" : 961,
          "max" : 10006.0,
          "min" : 18.0,
          "sum" : 122176.00000000007,
          "standardDeviation" : 327.1449215110669
        }, {
          "mean" : 115.75450762829394,
          "variance" : 140961.64103868086,
          "n" : 721,
          "max" : 9995.0,
          "min" : 28.0,
          "sum" : 83458.99999999993,
          "standardDeviation" : 375.44858641188256
        }, {
          "mean" : 81.8044382801665,
          "variance" : 4209.04364694098,
          "n" : 721,
          "max" : 721.0,
          "min" : 24.0,
          "sum" : 58981.000000000044,
          "standardDeviation" : 64.877142715605
        }, {
          "mean" : 76.83460559796436,
          "variance" : 124896.3726098443,
          "n" : 786,
          "max" : 9940.0,
          "min" : 15.0,
          "sum" : 60391.999999999985,
          "standardDeviation" : 353.4068089466363
        }, {
          "mean" : 67.51093210586875,
          "variance" : 110839.57274901507,
          "n" : 869,
          "max" : 9850.0,
          "min" : 15.0,
          "sum" : 58666.99999999994,
          "standardDeviation" : 332.9257766364976
        }, {
          "mean" : 55.29141475211607,
          "variance" : 588.6595266885467,
          "n" : 827,
          "max" : 242.0,
          "min" : 15.0,
          "sum" : 45725.999999999985,
          "standardDeviation" : 24.262306705846143
        }, {
          "mean" : 55.532620320855585,
          "variance" : 608.9515579017278,
          "n" : 935,
          "max" : 337.0,
          "min" : 15.0,
          "sum" : 51922.99999999997,
          "standardDeviation" : 24.676943852546405
        }, {
          "mean" : 60.088948787061966,
          "variance" : 637.7839586216944,
          "n" : 371,
          "max" : 276.0,
          "min" : 14.0,
          "sum" : 22292.99999999999,
          "standardDeviation" : 25.254384938495225
        } ],
        "20" : [ {
          "mean" : 270.8770764119601,
          "variance" : 390250.0281102897,
          "n" : 898,
          "max" : 11974.0,
          "min" : 36.0,
          "sum" : 243247.61461794018,
          "standardDeviation" : 624.6999504644527
        }, {
          "mean" : 120.50893796004219,
          "variance" : 7680.555446344564,
          "n" : 951,
          "max" : 984.0,
          "min" : 26.0,
          "sum" : 114604.00000000012,
          "standardDeviation" : 87.63877821115813
        }, {
          "mean" : 107.14781491002569,
          "variance" : 5335.72458337882,
          "n" : 778,
          "max" : 621.0,
          "min" : 17.0,
          "sum" : 83360.99999999999,
          "standardDeviation" : 73.04604426920612
        }, {
          "mean" : 87.06767955801112,
          "variance" : 125304.38683776165,
          "n" : 724,
          "max" : 9491.0,
          "min" : 26.0,
          "sum" : 63037.00000000005,
          "standardDeviation" : 353.9835968484439
        }, {
          "mean" : 63.52860696517417,
          "variance" : 585.9306874717331,
          "n" : 804,
          "max" : 267.0,
          "min" : 28.0,
          "sum" : 51077.00000000003,
          "standardDeviation" : 24.206005194408537
        }, {
          "mean" : 52.65375000000003,
          "variance" : 422.814879536922,
          "n" : 800,
          "max" : 235.0,
          "min" : 14.0,
          "sum" : 42123.00000000002,
          "standardDeviation" : 20.562462876244226
        }, {
          "mean" : 53.433221099887824,
          "variance" : 414.51772657914984,
          "n" : 891,
          "max" : 245.0,
          "min" : 14.0,
          "sum" : 47609.00000000005,
          "standardDeviation" : 20.359708410955935
        }, {
          "mean" : 63.67482517482514,
          "variance" : 107436.831127449,
          "n" : 858,
          "max" : 9632.0,
          "min" : 14.0,
          "sum" : 54632.99999999997,
          "standardDeviation" : 327.77558043186957
        }, {
          "mean" : 55.77053824362605,
          "variance" : 436.3534477208344,
          "n" : 353,
          "max" : 109.0,
          "min" : 14.0,
          "sum" : 19686.999999999996,
          "standardDeviation" : 20.889074841189938
        } ],
        "21" : [ {
          "mean" : 222.78806584362147,
          "variance" : 255114.1259954315,
          "n" : 967,
          "max" : 10936.0,
          "min" : 40.0,
          "sum" : 215436.05967078195,
          "standardDeviation" : 505.0882358513525
        }, {
          "mean" : 104.50231481481484,
          "variance" : 3082.1112344963726,
          "n" : 864,
          "max" : 530.0,
          "min" : 25.0,
          "sum" : 90290.00000000001,
          "standardDeviation" : 55.516765346122
        }, {
          "mean" : 94.40766073871399,
          "variance" : 2320.239064520361,
          "n" : 731,
          "max" : 392.0,
          "min" : 19.0,
          "sum" : 69011.99999999993,
          "standardDeviation" : 48.16885990471812
        }, {
          "mean" : 72.53221649484541,
          "variance" : 1415.7357349517797,
          "n" : 776,
          "max" : 383.0,
          "min" : 22.0,
          "sum" : 56285.000000000044,
          "standardDeviation" : 37.62626389839655
        }, {
          "mean" : 78.30164765525981,
          "variance" : 115388.34797951521,
          "n" : 789,
          "max" : 9540.0,
          "min" : 22.0,
          "sum" : 61779.99999999999,
          "standardDeviation" : 339.6886044298737
        }, {
          "mean" : 58.70320197044336,
          "variance" : 629.9845520035477,
          "n" : 812,
          "max" : 247.0,
          "min" : 17.0,
          "sum" : 47667.00000000001,
          "standardDeviation" : 25.099493062680523
        }, {
          "mean" : 76.67290748898671,
          "variance" : 209559.10678448094,
          "n" : 908,
          "max" : 10225.0,
          "min" : 18.0,
          "sum" : 69618.99999999993,
          "standardDeviation" : 457.77626280147047
        }, {
          "mean" : 62.50175029171529,
          "variance" : 714.8110366525259,
          "n" : 857,
          "max" : 288.0,
          "min" : 27.0,
          "sum" : 53564.0,
          "standardDeviation" : 26.735950266495596
        }, {
          "mean" : 92.66005665722378,
          "variance" : 296460.16820113326,
          "n" : 353,
          "max" : 10282.0,
          "min" : 28.0,
          "sum" : 32708.999999999993,
          "standardDeviation" : 544.4815591010712
        } ],
        "22" : [ {
          "mean" : 284.41161616161605,
          "variance" : 487019.2538724805,
          "n" : 787,
          "max" : 12583.0,
          "min" : 37.0,
          "sum" : 223831.94191919183,
          "standardDeviation" : 697.8676478190406
        }, {
          "mean" : 118.10191725529775,
          "variance" : 6285.713844805266,
          "n" : 991,
          "max" : 559.0,
          "min" : 36.0,
          "sum" : 117039.00000000007,
          "standardDeviation" : 79.28249393658896
        }, {
          "mean" : 103.61096605744135,
          "variance" : 5517.80662468643,
          "n" : 766,
          "max" : 546.0,
          "min" : 34.0,
          "sum" : 79366.00000000007,
          "standardDeviation" : 74.28194009775478
        }, {
          "mean" : 85.57687074829933,
          "variance" : 4265.149055589531,
          "n" : 735,
          "max" : 654.0,
          "min" : 22.0,
          "sum" : 62899.00000000001,
          "standardDeviation" : 65.30810865114324
        }, {
          "mean" : 78.4786432160804,
          "variance" : 125774.23979488634,
          "n" : 796,
          "max" : 10044.0,
          "min" : 14.0,
          "sum" : 62469.0,
          "standardDeviation" : 354.6466407494738
        }, {
          "mean" : 58.330243337195824,
          "variance" : 750.6692350915299,
          "n" : 863,
          "max" : 279.0,
          "min" : 14.0,
          "sum" : 50339.0,
          "standardDeviation" : 27.398343655986395
        }, {
          "mean" : 67.084004602992,
          "variance" : 101361.25215168667,
          "n" : 869,
          "max" : 9411.0,
          "min" : 15.0,
          "sum" : 58296.000000000044,
          "standardDeviation" : 318.3728194298104
        }, {
          "mean" : 53.23423423423425,
          "variance" : 731.7060645764136,
          "n" : 888,
          "max" : 292.0,
          "min" : 15.0,
          "sum" : 47272.000000000015,
          "standardDeviation" : 27.050065888578047
        }, {
          "mean" : 59.61325966850829,
          "variance" : 507.62841095177623,
          "n" : 362,
          "max" : 239.0,
          "min" : 28.0,
          "sum" : 21580.0,
          "standardDeviation" : 22.530610532157716
        } ],
        "23" : [ {
          "mean" : 276.8543577981652,
          "variance" : 743974.7858822504,
          "n" : 867,
          "max" : 15862.0,
          "min" : 41.0,
          "sum" : 240032.72821100923,
          "standardDeviation" : 862.5397300311739
        }, {
          "mean" : 776.2169076751953,
          "variance" : 3.7135106931258667E8,
          "n" : 899,
          "max" : 577737.0,
          "min" : 27.0,
          "sum" : 697819.0000000006,
          "standardDeviation" : 19270.471434622108
        }, {
          "mean" : 124.43540051679591,
          "variance" : 261269.07150068012,
          "n" : 774,
          "max" : 10154.0,
          "min" : 33.0,
          "sum" : 96313.00000000003,
          "standardDeviation" : 511.14486351784865
        }, {
          "mean" : 78.25549450549448,
          "variance" : 2403.257878984842,
          "n" : 728,
          "max" : 443.0,
          "min" : 14.0,
          "sum" : 56969.999999999985,
          "standardDeviation" : 49.02303416746909
        }, {
          "mean" : 62.74365482233504,
          "variance" : 702.2086636265722,
          "n" : 788,
          "max" : 273.0,
          "min" : 15.0,
          "sum" : 49442.00000000001,
          "standardDeviation" : 26.49922005694832
        }, {
          "mean" : 56.679633867276884,
          "variance" : 434.36918382913757,
          "n" : 874,
          "max" : 236.0,
          "min" : 14.0,
          "sum" : 49538.0,
          "standardDeviation" : 20.84152546790032
        }, {
          "mean" : 67.2371134020619,
          "variance" : 117891.73614395157,
          "n" : 873,
          "max" : 10177.0,
          "min" : 15.0,
          "sum" : 58698.00000000004,
          "standardDeviation" : 343.35366044932675
        }, {
          "mean" : 55.64943820224715,
          "variance" : 619.2290491778407,
          "n" : 890,
          "max" : 277.0,
          "min" : 14.0,
          "sum" : 49527.99999999996,
          "standardDeviation" : 24.884313315376833
        }, {
          "mean" : 50.817174515235436,
          "variance" : 385.2498153277932,
          "n" : 361,
          "max" : 119.0,
          "min" : 14.0,
          "sum" : 18344.999999999993,
          "standardDeviation" : 19.62778172203352
        } ],
        "24" : [ {
          "mean" : 276.74952380952453,
          "variance" : 549663.8790512537,
          "n" : 1045,
          "max" : 13982.0,
          "min" : 42.0,
          "sum" : 289203.2523809531,
          "standardDeviation" : 741.3932013791695
        }, {
          "mean" : 129.8000000000001,
          "variance" : 10243.13484646196,
          "n" : 750,
          "max" : 980.0,
          "min" : 19.0,
          "sum" : 97350.00000000007,
          "standardDeviation" : 101.20837340092943
        }, {
          "mean" : 121.4730878186968,
          "variance" : 8365.463813714263,
          "n" : 706,
          "max" : 855.0,
          "min" : 18.0,
          "sum" : 85759.99999999994,
          "standardDeviation" : 91.46290949731625
        }, {
          "mean" : 83.78706199460923,
          "variance" : 4648.945149521113,
          "n" : 742,
          "max" : 751.0,
          "min" : 15.0,
          "sum" : 62170.00000000005,
          "standardDeviation" : 68.18317350725994
        }, {
          "mean" : 65.8575380359613,
          "variance" : 605.2192886671795,
          "n" : 723,
          "max" : 267.0,
          "min" : 28.0,
          "sum" : 47615.00000000002,
          "standardDeviation" : 24.60120502469705
        }, {
          "mean" : 58.819976771196245,
          "variance" : 634.1942981389947,
          "n" : 861,
          "max" : 271.0,
          "min" : 14.0,
          "sum" : 50643.99999999996,
          "standardDeviation" : 25.183214610906898
        }, {
          "mean" : 53.56319018404903,
          "variance" : 616.3249332991667,
          "n" : 815,
          "max" : 265.0,
          "min" : 15.0,
          "sum" : 43653.999999999956,
          "standardDeviation" : 24.825892396833726
        }, {
          "mean" : 55.913098236775866,
          "variance" : 566.3770539449404,
          "n" : 794,
          "max" : 244.0,
          "min" : 14.0,
          "sum" : 44395.00000000004,
          "standardDeviation" : 23.798677567145205
        }, {
          "mean" : 55.41100323624591,
          "variance" : 544.446685863847,
          "n" : 618,
          "max" : 285.0,
          "min" : 15.0,
          "sum" : 34243.99999999997,
          "standardDeviation" : 23.33338136369967
        } ],
        "25" : [ {
          "mean" : 280.0270602706025,
          "variance" : 499301.3810402389,
          "n" : 808,
          "max" : 14458.0,
          "min" : 47.0,
          "sum" : 226261.8646986468,
          "standardDeviation" : 706.6126103037215
        }, {
          "mean" : 129.8487394957985,
          "variance" : 8700.174782846896,
          "n" : 952,
          "max" : 780.0,
          "min" : 35.0,
          "sum" : 123616.00000000017,
          "standardDeviation" : 93.27472746058761
        }, {
          "mean" : 121.51282051282053,
          "variance" : 180953.40034890242,
          "n" : 780,
          "max" : 9884.0,
          "min" : 19.0,
          "sum" : 94780.00000000001,
          "standardDeviation" : 425.3861779006253
        }, {
          "mean" : 146.08516129032253,
          "variance" : 141595.92555472185,
          "n" : 775,
          "max" : 10127.0,
          "min" : 33.0,
          "sum" : 113215.99999999996,
          "standardDeviation" : 376.29234054750816
        }, {
          "mean" : 65.22807017543853,
          "variance" : 739.3762920815551,
          "n" : 741,
          "max" : 284.0,
          "min" : 14.0,
          "sum" : 48333.99999999995,
          "standardDeviation" : 27.191474621313848
        }, {
          "mean" : 56.681818181818144,
          "variance" : 749.2023994208307,
          "n" : 880,
          "max" : 275.0,
          "min" : 14.0,
          "sum" : 49879.99999999996,
          "standardDeviation" : 27.371561873974798
        }, {
          "mean" : 64.1968325791855,
          "variance" : 119101.33380649066,
          "n" : 884,
          "max" : 10292.0,
          "min" : 14.0,
          "sum" : 56749.99999999998,
          "standardDeviation" : 345.1106109734829
        }, {
          "mean" : 54.82292849035184,
          "variance" : 590.2413373232895,
          "n" : 881,
          "max" : 240.0,
          "min" : 15.0,
          "sum" : 48298.99999999997,
          "standardDeviation" : 24.29488294524774
        }, {
          "mean" : 54.52691218130315,
          "variance" : 629.6306657223794,
          "n" : 353,
          "max" : 244.0,
          "min" : 15.0,
          "sum" : 19248.000000000015,
          "standardDeviation" : 25.09244240249202
        } ],
        "26" : [ {
          "mean" : 251.74386339381027,
          "variance" : 432743.73346924625,
          "n" : 932,
          "max" : 14039.0,
          "min" : 51.0,
          "sum" : 234625.28068303116,
          "standardDeviation" : 657.8326029236057
        }, {
          "mean" : 126.3707995365006,
          "variance" : 19458.73473799112,
          "n" : 863,
          "max" : 3012.0,
          "min" : 20.0,
          "sum" : 109058.00000000001,
          "standardDeviation" : 139.49456884764768
        }, {
          "mean" : 102.99867021276606,
          "variance" : 5490.869505552884,
          "n" : 752,
          "max" : 969.0,
          "min" : 19.0,
          "sum" : 77455.00000000007,
          "standardDeviation" : 74.10040152086144
        }, {
          "mean" : 90.12000000000005,
          "variance" : 133927.0082777035,
          "n" : 750,
          "max" : 10006.0,
          "min" : 15.0,
          "sum" : 67590.00000000003,
          "standardDeviation" : 365.96039167880383
        }, {
          "mean" : 72.60443864229758,
          "variance" : 62566.35705216811,
          "n" : 766,
          "max" : 6933.0,
          "min" : 14.0,
          "sum" : 55614.99999999995,
          "standardDeviation" : 250.13267889695683
        }, {
          "mean" : 56.78923253150063,
          "variance" : 591.561030717657,
          "n" : 873,
          "max" : 239.0,
          "min" : 17.0,
          "sum" : 49577.00000000005,
          "standardDeviation" : 24.32202768515933
        }, {
          "mean" : 50.208000000000006,
          "variance" : 444.8971899313506,
          "n" : 875,
          "max" : 263.0,
          "min" : 14.0,
          "sum" : 43932.00000000001,
          "standardDeviation" : 21.092586136634612
        }, {
          "mean" : 52.49550561797752,
          "variance" : 361.06240947409657,
          "n" : 890,
          "max" : 187.0,
          "min" : 14.0,
          "sum" : 46720.99999999999,
          "standardDeviation" : 19.001642283605293
        }, {
          "mean" : 57.95467422096318,
          "variance" : 326.61157610095296,
          "n" : 353,
          "max" : 101.0,
          "min" : 27.0,
          "sum" : 20458.0,
          "standardDeviation" : 18.072398183444083
        } ],
        "27" : [ {
          "mean" : 275.42153493699965,
          "variance" : 759782.5308201171,
          "n" : 868,
          "max" : 21581.0,
          "min" : 64.0,
          "sum" : 239065.89232531568,
          "standardDeviation" : 871.655052655646
        }, {
          "mean" : 109.74331550802141,
          "variance" : 3527.540038246178,
          "n" : 935,
          "max" : 585.0,
          "min" : 36.0,
          "sum" : 102610.00000000001,
          "standardDeviation" : 59.39309756399457
        }, {
          "mean" : 100.3147896879241,
          "variance" : 2320.974142380982,
          "n" : 737,
          "max" : 353.0,
          "min" : 19.0,
          "sum" : 73932.00000000006,
          "standardDeviation" : 48.17648951906917
        }, {
          "mean" : 78.4111111111111,
          "variance" : 3527.380126719207,
          "n" : 720,
          "max" : 558.0,
          "min" : 14.0,
          "sum" : 56455.99999999999,
          "standardDeviation" : 59.391751335679665
        }, {
          "mean" : 63.09798994974872,
          "variance" : 746.6645997282005,
          "n" : 796,
          "max" : 277.0,
          "min" : 14.0,
          "sum" : 50225.999999999985,
          "standardDeviation" : 27.325164221431507
        }, {
          "mean" : 55.93418013856812,
          "variance" : 518.7367031998828,
          "n" : 866,
          "max" : 309.0,
          "min" : 18.0,
          "sum" : 48438.999999999985,
          "standardDeviation" : 22.775792043305163
        }, {
          "mean" : 54.03958090803254,
          "variance" : 422.63712616448356,
          "n" : 859,
          "max" : 231.0,
          "min" : 15.0,
          "sum" : 46419.99999999995,
          "standardDeviation" : 20.558140143614246
        }, {
          "mean" : 58.01769911504425,
          "variance" : 586.5090994619699,
          "n" : 904,
          "max" : 259.0,
          "min" : 14.0,
          "sum" : 52448.0,
          "standardDeviation" : 24.217949943419445
        }, {
          "mean" : 56.46361185983831,
          "variance" : 458.4655642165072,
          "n" : 371,
          "max" : 237.0,
          "min" : 21.0,
          "sum" : 20948.00000000001,
          "standardDeviation" : 21.411808989819313
        } ],
        "28" : [ {
          "mean" : 266.60766045548667,
          "variance" : 407650.5205215683,
          "n" : 961,
          "max" : 12044.0,
          "min" : 53.0,
          "sum" : 256209.9616977227,
          "standardDeviation" : 638.4751526266064
        }, {
          "mean" : 118.61481481481471,
          "variance" : 7047.549842054652,
          "n" : 810,
          "max" : 559.0,
          "min" : 34.0,
          "sum" : 96077.99999999991,
          "standardDeviation" : 83.94968637258064
        }, {
          "mean" : 107.18232819074335,
          "variance" : 4688.0818782797805,
          "n" : 713,
          "max" : 524.0,
          "min" : 18.0,
          "sum" : 76421.00000000001,
          "standardDeviation" : 68.46956899440642
        }, {
          "mean" : 118.5981554677207,
          "variance" : 9101.72880925812,
          "n" : 759,
          "max" : 621.0,
          "min" : 36.0,
          "sum" : 90016.00000000001,
          "standardDeviation" : 95.40298113401971
        }, {
          "mean" : 71.70758620689655,
          "variance" : 2446.991724137928,
          "n" : 725,
          "max" : 838.0,
          "min" : 15.0,
          "sum" : 51988.0,
          "standardDeviation" : 49.467077173994504
        }, {
          "mean" : 76.06141367323283,
          "variance" : 129026.70736087627,
          "n" : 863,
          "max" : 7535.0,
          "min" : 14.0,
          "sum" : 65640.99999999994,
          "standardDeviation" : 359.20287771797746
        }, {
          "mean" : 68.55240443896423,
          "variance" : 120736.80311458201,
          "n" : 811,
          "max" : 9927.0,
          "min" : 20.0,
          "sum" : 55595.99999999999,
          "standardDeviation" : 347.47201774327385
        }, {
          "mean" : 54.54764638346725,
          "variance" : 592.0112329598692,
          "n" : 871,
          "max" : 257.0,
          "min" : 15.0,
          "sum" : 47510.99999999998,
          "standardDeviation" : 24.33128095600125
        }, {
          "mean" : 74.52592592592593,
          "variance" : 188377.80452140459,
          "n" : 540,
          "max" : 10127.0,
          "min" : 28.0,
          "sum" : 40244.0,
          "standardDeviation" : 434.0251196894076
        } ],
        "29" : [ {
          "mean" : 281.34435575826643,
          "variance" : 590561.3516033804,
          "n" : 872,
          "max" : 18425.0,
          "min" : 52.0,
          "sum" : 245332.27822120834,
          "standardDeviation" : 768.4798966813513
        }, {
          "mean" : 118.21171171171171,
          "variance" : 5261.970911159185,
          "n" : 888,
          "max" : 583.0,
          "min" : 18.0,
          "sum" : 104972.0,
          "standardDeviation" : 72.53944382995492
        }, {
          "mean" : 108.45643153526964,
          "variance" : 5844.065619935393,
          "n" : 723,
          "max" : 812.0,
          "min" : 36.0,
          "sum" : 78413.99999999996,
          "standardDeviation" : 76.44648860435248
        }, {
          "mean" : 85.39868421052624,
          "variance" : 3764.2084304139808,
          "n" : 760,
          "max" : 536.0,
          "min" : 15.0,
          "sum" : 64902.99999999994,
          "standardDeviation" : 61.35314523652378
        }, {
          "mean" : 61.29972375690612,
          "variance" : 693.217095359269,
          "n" : 724,
          "max" : 258.0,
          "min" : 14.0,
          "sum" : 44381.00000000003,
          "standardDeviation" : 26.329016224676323
        }, {
          "mean" : 54.761041902604816,
          "variance" : 506.22968235991954,
          "n" : 883,
          "max" : 276.0,
          "min" : 14.0,
          "sum" : 48354.00000000005,
          "standardDeviation" : 22.499548492356897
        }, {
          "mean" : 54.191435768261975,
          "variance" : 684.4601535475717,
          "n" : 794,
          "max" : 324.0,
          "min" : 17.0,
          "sum" : 43028.00000000001,
          "standardDeviation" : 26.162189387502945
        }, {
          "mean" : 52.59749144811862,
          "variance" : 374.2202220104861,
          "n" : 877,
          "max" : 248.0,
          "min" : 17.0,
          "sum" : 46128.00000000003,
          "standardDeviation" : 19.344772472440354
        }, {
          "mean" : 72.97196261682244,
          "variance" : 183519.43554202095,
          "n" : 535,
          "max" : 9950.0,
          "min" : 20.0,
          "sum" : 39040.00000000001,
          "standardDeviation" : 428.39168472558026
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
      "meanOld" : 145.76455013361223,
      "meanCurrent" : 1857.301111111111,
      "deviationOld" : 11.395169282861772,
      "deviationCurrent" : 885.1041451824028,
      "vms" : 30,
      "callsOld" : 107253,
      "calls" : 450,
      "tvalue" : -10.59049950669756,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 80.88112672428657,
    "inVMDeviation" : 2129.8669630517857,
    "ess" : 1,
    "values" : [ 2667.5333333333333, 1754.1333333333334, 1270.5333333333333, 551.7444444444445, 1271.7333333333333, 1966.2, 2695.266666666667, 3242.888888888889, 594.3555555555555, 2491.0, 2112.133333333333, 620.1333333333333, 1542.611111111111, 1640.2777777777778, 3132.3111111111116, 2376.7222222222217, 2786.6666666666665, 1290.4, 1399.7333333333333, 1352.2666666666667, 1426.6333333333334, 2596.755555555556, 3473.0666666666666, 3245.0666666666666, 2506.011111111111, 1293.2, 1136.7333333333333, 542.0666666666667, 2081.7333333333327, 659.1222222222223 ],
    "valuesPredecessor" : [ 168.13710101779404, 138.2742634414766, 143.0972892434199, 137.42648450966374, 156.56389345094738, 133.41091656672953, 165.90637419768612, 139.87303722932754, 139.53913736613035, 148.63126186313687, 149.18962052165844, 157.97346609911827, 146.79512182417218, 159.42907988277287, 138.80304046047064, 150.438310209153, 152.09836007130127, 146.0063843918639, 155.60729406187033, 133.46558804831534, 140.2688484048141, 133.20722900346144, 149.43079149706017, 125.00389134674852, 144.76870655660127, 128.14233709283596, 128.08412702052044, 160.42740817740827, 159.59335479935888, 143.34378565254963 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 7345.0,
          "variance" : 8.184724649999999E7,
          "n" : 5,
          "max" : 17847.0,
          "min" : 276.0,
          "sum" : 36725.0,
          "standardDeviation" : 9046.94680541452
        }, {
          "mean" : 330.0,
          "variance" : 1247.4999999999998,
          "n" : 5,
          "max" : 361.0,
          "min" : 278.0,
          "sum" : 1650.0,
          "standardDeviation" : 35.31996602489872
        }, {
          "mean" : 324.5,
          "variance" : 17064.333333333332,
          "n" : 4,
          "max" : 517.0,
          "min" : 237.0,
          "sum" : 1298.0,
          "standardDeviation" : 130.63052221182204
        }, {
          "mean" : 340.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 340.0,
          "min" : 340.0,
          "sum" : 340.0,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 4632.0,
          "variance" : 5.03022004E7,
          "n" : 1,
          "max" : 19090.0,
          "min" : 1089.0,
          "sum" : 4632.0,
          "standardDeviation" : 7092.404415993211
        }, {
          "mean" : 4487.5,
          "variance" : 6.721487299999999E7,
          "n" : 4,
          "max" : 16785.0,
          "min" : 327.0,
          "sum" : 17950.0,
          "standardDeviation" : 8198.467722690624
        }, {
          "mean" : 371.6,
          "variance" : 7232.3,
          "n" : 5,
          "max" : 502.0,
          "min" : 276.0,
          "sum" : 1858.0,
          "standardDeviation" : 85.04293033521364
        }, {
          "mean" : 379.75,
          "variance" : 1456.916666666667,
          "n" : 4,
          "max" : 417.0,
          "min" : 332.0,
          "sum" : 1519.0,
          "standardDeviation" : 38.16957776379858
        }, {
          "mean" : 353.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 353.0,
          "min" : 353.0,
          "sum" : 353.0,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 3202.6,
          "variance" : 3.565974529999999E7,
          "n" : 5,
          "max" : 13872.0,
          "min" : 270.0,
          "sum" : 16013.0,
          "standardDeviation" : 5971.578124750608
        }, {
          "mean" : 316.8,
          "variance" : 4235.200000000001,
          "n" : 5,
          "max" : 402.0,
          "min" : 254.0,
          "sum" : 1584.0,
          "standardDeviation" : 65.07841424005352
        }, {
          "mean" : 274.0,
          "variance" : 8358.666666666666,
          "n" : 4,
          "max" : 397.0,
          "min" : 177.0,
          "sum" : 1096.0,
          "standardDeviation" : 91.42574400390005
        }, {
          "mean" : 365.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 365.0,
          "min" : 365.0,
          "sum" : 365.0,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1573.1666666666667,
          "variance" : 347205.7666666666,
          "n" : 1,
          "max" : 2236.0,
          "min" : 892.0,
          "sum" : 1573.1666666666667,
          "standardDeviation" : 589.2416878214461
        }, {
          "mean" : 792.75,
          "variance" : 83828.91666666667,
          "n" : 4,
          "max" : 1104.0,
          "min" : 454.0,
          "sum" : 3171.0,
          "standardDeviation" : 289.53223769844124
        }, {
          "mean" : 385.4,
          "variance" : 1541.2999999999997,
          "n" : 5,
          "max" : 451.0,
          "min" : 355.0,
          "sum" : 1927.0,
          "standardDeviation" : 39.259393780342556
        }, {
          "mean" : 312.5,
          "variance" : 527.0000000000001,
          "n" : 4,
          "max" : 336.0,
          "min" : 285.0,
          "sum" : 1250.0,
          "standardDeviation" : 22.956480566497994
        }, {
          "mean" : 355.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 355.0,
          "min" : 355.0,
          "sum" : 355.0,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 3177.8,
          "variance" : 3.40866617E7,
          "n" : 5,
          "max" : 13615.0,
          "min" : 282.0,
          "sum" : 15889.0,
          "standardDeviation" : 5838.378345054387
        }, {
          "mean" : 321.6,
          "variance" : 8210.800000000001,
          "n" : 5,
          "max" : 449.0,
          "min" : 203.0,
          "sum" : 1608.0,
          "standardDeviation" : 90.61346478311047
        }, {
          "mean" : 333.75,
          "variance" : 4400.916666666666,
          "n" : 4,
          "max" : 429.0,
          "min" : 286.0,
          "sum" : 1335.0,
          "standardDeviation" : 66.33940508224856
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
          "mean" : 5212.4,
          "variance" : 1.029511293E8,
          "n" : 5,
          "max" : 23338.0,
          "min" : 299.0,
          "sum" : 26062.0,
          "standardDeviation" : 10146.48359285127
        }, {
          "mean" : 353.0,
          "variance" : 1492.5000000000005,
          "n" : 5,
          "max" : 404.0,
          "min" : 306.0,
          "sum" : 1765.0,
          "standardDeviation" : 38.63288754416372
        }, {
          "mean" : 313.5,
          "variance" : 1924.333333333333,
          "n" : 4,
          "max" : 349.0,
          "min" : 251.0,
          "sum" : 1254.0,
          "standardDeviation" : 43.8672239073016
        }, {
          "mean" : 412.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 412.0,
          "min" : 412.0,
          "sum" : 412.0,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 7240.6,
          "variance" : 7.443883630000001E7,
          "n" : 5,
          "max" : 16842.0,
          "min" : 273.0,
          "sum" : 36203.0,
          "standardDeviation" : 8627.7944052927
        }, {
          "mean" : 527.25,
          "variance" : 70714.91666666667,
          "n" : 4,
          "max" : 879.0,
          "min" : 312.0,
          "sum" : 2109.0,
          "standardDeviation" : 265.922764476204
        }, {
          "mean" : 349.2,
          "variance" : 5864.200000000001,
          "n" : 5,
          "max" : 458.0,
          "min" : 253.0,
          "sum" : 1746.0,
          "standardDeviation" : 76.57806474441621
        }, {
          "mean" : 371.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 371.0,
          "min" : 371.0,
          "sum" : 371.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 1814.3333333333335,
          "variance" : 103585.86666666668,
          "n" : 1,
          "max" : 2306.0,
          "min" : 1359.0,
          "sum" : 1814.3333333333335,
          "standardDeviation" : 321.847582974716
        }, {
          "mean" : 10834.75,
          "variance" : 1.5474045891666666E8,
          "n" : 4,
          "max" : 24691.0,
          "min" : 281.0,
          "sum" : 43339.0,
          "standardDeviation" : 12439.47181019623
        }, {
          "mean" : 343.6,
          "variance" : 1047.3000000000004,
          "n" : 5,
          "max" : 380.0,
          "min" : 295.0,
          "sum" : 1718.0,
          "standardDeviation" : 32.362014770406375
        }, {
          "mean" : 368.0,
          "variance" : 5068.666666666666,
          "n" : 4,
          "max" : 455.0,
          "min" : 287.0,
          "sum" : 1472.0,
          "standardDeviation" : 71.19456908126256
        }, {
          "mean" : 300.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 300.0,
          "min" : 300.0,
          "sum" : 300.0,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1844.3333333333333,
          "variance" : 33720.666666666664,
          "n" : 1,
          "max" : 2076.0,
          "min" : 1523.0,
          "sum" : 1844.3333333333333,
          "standardDeviation" : 183.6318781330373
        }, {
          "mean" : 1000.75,
          "variance" : 322060.9166666666,
          "n" : 4,
          "max" : 1752.0,
          "min" : 391.0,
          "sum" : 4003.0,
          "standardDeviation" : 567.504111585693
        }, {
          "mean" : 330.4,
          "variance" : 1750.8,
          "n" : 5,
          "max" : 399.0,
          "min" : 291.0,
          "sum" : 1652.0,
          "standardDeviation" : 41.842562063047716
        }, {
          "mean" : 294.0,
          "variance" : 1156.6666666666665,
          "n" : 4,
          "max" : 343.0,
          "min" : 270.0,
          "sum" : 1176.0,
          "standardDeviation" : 34.009802508492555
        }, {
          "mean" : 240.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 240.0,
          "min" : 240.0,
          "sum" : 240.0,
          "standardDeviation" : 0.0
        } ],
        "9" : [ {
          "mean" : 4249.8,
          "variance" : 5.77970612E7,
          "n" : 5,
          "max" : 17838.0,
          "min" : 363.0,
          "sum" : 21249.0,
          "standardDeviation" : 7602.437845849186
        }, {
          "mean" : 3605.75,
          "variance" : 4.3116305583333336E7,
          "n" : 4,
          "max" : 13455.0,
          "min" : 292.0,
          "sum" : 14423.0,
          "standardDeviation" : 6566.300753341514
        }, {
          "mean" : 294.8,
          "variance" : 3361.200000000001,
          "n" : 5,
          "max" : 354.0,
          "min" : 218.0,
          "sum" : 1474.0,
          "standardDeviation" : 57.97585704411795
        }, {
          "mean" : 219.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 219.0,
          "min" : 219.0,
          "sum" : 219.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 5661.0,
          "variance" : 1.043862875E8,
          "n" : 5,
          "max" : 23917.0,
          "min" : 700.0,
          "sum" : 28305.0,
          "standardDeviation" : 10216.960776082093
        }, {
          "mean" : 391.5,
          "variance" : 12150.999999999998,
          "n" : 4,
          "max" : 554.0,
          "min" : 309.0,
          "sum" : 1566.0,
          "standardDeviation" : 110.23157442402788
        }, {
          "mean" : 293.6,
          "variance" : 2784.7999999999997,
          "n" : 5,
          "max" : 334.0,
          "min" : 202.0,
          "sum" : 1468.0,
          "standardDeviation" : 52.771204268995035
        }, {
          "mean" : 343.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 343.0,
          "min" : 343.0,
          "sum" : 343.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1193.6,
          "variance" : 507598.3000000001,
          "n" : 5,
          "max" : 2368.0,
          "min" : 437.0,
          "sum" : 5968.0,
          "standardDeviation" : 712.4593321727214
        }, {
          "mean" : 304.0,
          "variance" : 1348.9999999999998,
          "n" : 5,
          "max" : 335.0,
          "min" : 257.0,
          "sum" : 1520.0,
          "standardDeviation" : 36.72873534441391
        }, {
          "mean" : 354.75,
          "variance" : 2476.25,
          "n" : 4,
          "max" : 403.0,
          "min" : 292.0,
          "sum" : 1419.0,
          "standardDeviation" : 49.76193324218825
        }, {
          "mean" : 395.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 395.0,
          "min" : 395.0,
          "sum" : 395.0,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1609.1666666666665,
          "variance" : 322822.9666666666,
          "n" : 1,
          "max" : 2105.0,
          "min" : 741.0,
          "sum" : 1609.1666666666665,
          "standardDeviation" : 568.1751197180906
        }, {
          "mean" : 3651.4,
          "variance" : 4.8851469800000004E7,
          "n" : 5,
          "max" : 16137.0,
          "min" : 304.0,
          "sum" : 18257.0,
          "standardDeviation" : 6989.382647988305
        }, {
          "mean" : 407.75,
          "variance" : 35764.91666666667,
          "n" : 4,
          "max" : 677.0,
          "min" : 271.0,
          "sum" : 1631.0,
          "standardDeviation" : 189.11614597031812
        }, {
          "mean" : 325.75,
          "variance" : 7100.916666666666,
          "n" : 4,
          "max" : 436.0,
          "min" : 233.0,
          "sum" : 1303.0,
          "standardDeviation" : 84.2669369721403
        }, {
          "mean" : 339.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 339.0,
          "min" : 339.0,
          "sum" : 339.0,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 3512.166666666667,
          "variance" : 2.269939936666667E7,
          "n" : 1,
          "max" : 13207.0,
          "min" : 1104.0,
          "sum" : 3512.166666666667,
          "standardDeviation" : 4764.388666625202
        }, {
          "mean" : 4474.75,
          "variance" : 6.103009691666667E7,
          "n" : 4,
          "max" : 16182.0,
          "min" : 320.0,
          "sum" : 17899.0,
          "standardDeviation" : 7812.176195956327
        }, {
          "mean" : 283.8,
          "variance" : 849.6999999999999,
          "n" : 5,
          "max" : 325.0,
          "min" : 252.0,
          "sum" : 1419.0,
          "standardDeviation" : 29.149614062625254
        }, {
          "mean" : 365.75,
          "variance" : 30144.25,
          "n" : 4,
          "max" : 592.0,
          "min" : 169.0,
          "sum" : 1463.0,
          "standardDeviation" : 173.6209952741891
        }, {
          "mean" : 311.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 311.0,
          "min" : 311.0,
          "sum" : 311.0,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1977.6666666666665,
          "variance" : 37591.86666666667,
          "n" : 1,
          "max" : 2235.0,
          "min" : 1785.0,
          "sum" : 1977.6666666666665,
          "standardDeviation" : 193.88622093038657
        }, {
          "mean" : 7972.250000000001,
          "variance" : 7.783483225000001E7,
          "n" : 4,
          "max" : 16653.0,
          "min" : 344.0,
          "sum" : 31889.000000000004,
          "standardDeviation" : 8822.405128421615
        }, {
          "mean" : 2294.0,
          "variance" : 1.91482765E7,
          "n" : 5,
          "max" : 10121.0,
          "min" : 252.0,
          "sum" : 11470.0,
          "standardDeviation" : 4375.874369768858
        }, {
          "mean" : 323.0,
          "variance" : 11394.666666666666,
          "n" : 4,
          "max" : 479.0,
          "min" : 239.0,
          "sum" : 1292.0,
          "standardDeviation" : 106.74580397686209
        }, {
          "mean" : 356.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 356.0,
          "min" : 356.0,
          "sum" : 356.0,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 6578.166666666666,
          "variance" : 7.293882856666668E7,
          "n" : 5,
          "max" : 18687.0,
          "min" : 278.0,
          "sum" : 32890.83333333333,
          "standardDeviation" : 8540.423207702688
        }, {
          "mean" : 282.5,
          "variance" : 1375.0,
          "n" : 4,
          "max" : 324.0,
          "min" : 243.0,
          "sum" : 1130.0,
          "standardDeviation" : 37.080992435478315
        }, {
          "mean" : 269.2,
          "variance" : 2552.1999999999994,
          "n" : 5,
          "max" : 314.0,
          "min" : 191.0,
          "sum" : 1346.0,
          "standardDeviation" : 50.51930324143435
        }, {
          "mean" : 284.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 284.0,
          "min" : 284.0,
          "sum" : 284.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 5245.4,
          "variance" : 9.363965829999998E7,
          "n" : 5,
          "max" : 22545.0,
          "min" : 535.0,
          "sum" : 26227.0,
          "standardDeviation" : 9676.758667033087
        }, {
          "mean" : 802.2,
          "variance" : 205005.2,
          "n" : 5,
          "max" : 1424.0,
          "min" : 405.0,
          "sum" : 4011.0,
          "standardDeviation" : 452.77499930981173
        }, {
          "mean" : 2821.5,
          "variance" : 2.3901139666666664E7,
          "n" : 4,
          "max" : 10154.0,
          "min" : 316.0,
          "sum" : 11286.0,
          "standardDeviation" : 4888.879183071173
        }, {
          "mean" : 276.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 276.0,
          "min" : 276.0,
          "sum" : 276.0,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 3195.0,
          "variance" : 3.708298849999999E7,
          "n" : 5,
          "max" : 14086.0,
          "min" : 321.0,
          "sum" : 15975.0,
          "standardDeviation" : 6089.580322156856
        }, {
          "mean" : 346.5,
          "variance" : 8533.666666666666,
          "n" : 4,
          "max" : 484.0,
          "min" : 287.0,
          "sum" : 1386.0,
          "standardDeviation" : 92.37784727231235
        }, {
          "mean" : 344.2,
          "variance" : 824.1999999999997,
          "n" : 5,
          "max" : 374.0,
          "min" : 305.0,
          "sum" : 1721.0,
          "standardDeviation" : 28.708883642524306
        }, {
          "mean" : 274.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 274.0,
          "min" : 274.0,
          "sum" : 274.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 3440.2,
          "variance" : 2.8047550699999996E7,
          "n" : 5,
          "max" : 12824.0,
          "min" : 291.0,
          "sum" : 17201.0,
          "standardDeviation" : 5295.9938349662
        }, {
          "mean" : 313.25,
          "variance" : 1154.9166666666665,
          "n" : 4,
          "max" : 351.0,
          "min" : 269.0,
          "sum" : 1253.0,
          "standardDeviation" : 33.98406489322115
        }, {
          "mean" : 437.2,
          "variance" : 36227.2,
          "n" : 5,
          "max" : 773.0,
          "min" : 320.0,
          "sum" : 2186.0,
          "standardDeviation" : 190.33444249530876
        }, {
          "mean" : 356.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 356.0,
          "min" : 356.0,
          "sum" : 356.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 3379.8,
          "variance" : 3.3076069699999996E7,
          "n" : 5,
          "max" : 13630.0,
          "min" : 309.0,
          "sum" : 16899.0,
          "standardDeviation" : 5751.179852864975
        }, {
          "mean" : 392.5,
          "variance" : 14179.666666666666,
          "n" : 4,
          "max" : 563.0,
          "min" : 303.0,
          "sum" : 1570.0,
          "standardDeviation" : 119.07840554301467
        }, {
          "mean" : 308.8,
          "variance" : 2284.6999999999994,
          "n" : 5,
          "max" : 364.0,
          "min" : 258.0,
          "sum" : 1544.0,
          "standardDeviation" : 47.79853554242012
        }, {
          "mean" : 271.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 271.0,
          "min" : 271.0,
          "sum" : 271.0,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1680.5,
          "variance" : 286775.5,
          "n" : 1,
          "max" : 2250.0,
          "min" : 787.0,
          "sum" : 1680.5,
          "standardDeviation" : 535.5142388396409
        }, {
          "mean" : 4142.5,
          "variance" : 5.355552299999999E7,
          "n" : 4,
          "max" : 15116.0,
          "min" : 347.0,
          "sum" : 16570.0,
          "standardDeviation" : 7318.163909068995
        }, {
          "mean" : 347.4,
          "variance" : 5374.799999999999,
          "n" : 5,
          "max" : 421.0,
          "min" : 267.0,
          "sum" : 1737.0,
          "standardDeviation" : 73.31302749170845
        }, {
          "mean" : 267.25,
          "variance" : 8791.583333333332,
          "n" : 4,
          "max" : 386.0,
          "min" : 162.0,
          "sum" : 1069.0,
          "standardDeviation" : 93.7634434805662
        }, {
          "mean" : 343.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 343.0,
          "min" : 343.0,
          "sum" : 343.0,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1749.3333333333333,
          "variance" : 107552.66666666666,
          "n" : 1,
          "max" : 2123.0,
          "min" : 1227.0,
          "sum" : 1749.3333333333333,
          "standardDeviation" : 327.9522322940746
        }, {
          "mean" : 8277.25,
          "variance" : 8.377993225E7,
          "n" : 4,
          "max" : 17009.0,
          "min" : 343.0,
          "sum" : 33109.0,
          "standardDeviation" : 9153.13783628325
        }, {
          "mean" : 284.6,
          "variance" : 516.8000000000003,
          "n" : 5,
          "max" : 310.0,
          "min" : 252.0,
          "sum" : 1423.0,
          "standardDeviation" : 22.733235581412522
        }, {
          "mean" : 475.0,
          "variance" : 3918.0,
          "n" : 4,
          "max" : 535.0,
          "min" : 418.0,
          "sum" : 1900.0,
          "standardDeviation" : 62.5939294181153
        }, {
          "mean" : 770.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 770.0,
          "min" : 770.0,
          "sum" : 770.0,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 4108.8,
          "variance" : 5.868466120000001E7,
          "n" : 5,
          "max" : 17809.0,
          "min" : 515.0,
          "sum" : 20544.0,
          "standardDeviation" : 7660.591439308065
        }, {
          "mean" : 670.4,
          "variance" : 84295.30000000002,
          "n" : 5,
          "max" : 1033.0,
          "min" : 364.0,
          "sum" : 3352.0,
          "standardDeviation" : 290.3365288764058
        }, {
          "mean" : 6957.75,
          "variance" : 5.8942274916666664E7,
          "n" : 4,
          "max" : 15949.0,
          "min" : 350.0,
          "sum" : 27831.0,
          "standardDeviation" : 7677.38724545445
        }, {
          "mean" : 369.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 369.0,
          "min" : 369.0,
          "sum" : 369.0,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 9081.0,
          "variance" : 1.2516501349999999E8,
          "n" : 5,
          "max" : 23025.0,
          "min" : 351.0,
          "sum" : 45405.0,
          "standardDeviation" : 11187.717081692761
        }, {
          "mean" : 321.5,
          "variance" : 756.333333333333,
          "n" : 4,
          "max" : 358.0,
          "min" : 297.0,
          "sum" : 1286.0,
          "standardDeviation" : 27.501515109777735
        }, {
          "mean" : 342.0,
          "variance" : 20087.0,
          "n" : 5,
          "max" : 587.0,
          "min" : 255.0,
          "sum" : 1710.0,
          "standardDeviation" : 141.72861390700186
        }, {
          "mean" : 275.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 275.0,
          "min" : 275.0,
          "sum" : 275.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 2411.1666666666665,
          "variance" : 716949.3666666668,
          "n" : 1,
          "max" : 4005.0,
          "min" : 1724.0,
          "sum" : 2411.1666666666665,
          "standardDeviation" : 846.7286263417972
        }, {
          "mean" : 7900.749999999999,
          "variance" : 7.390193025E7,
          "n" : 4,
          "max" : 16266.0,
          "min" : 303.0,
          "sum" : 31602.999999999996,
          "standardDeviation" : 8596.62318878756
        }, {
          "mean" : 356.8,
          "variance" : 6556.700000000001,
          "n" : 5,
          "max" : 490.0,
          "min" : 280.0,
          "sum" : 1784.0,
          "standardDeviation" : 80.9734524396731
        }, {
          "mean" : 376.5,
          "variance" : 13755.0,
          "n" : 4,
          "max" : 545.0,
          "min" : 296.0,
          "sum" : 1506.0,
          "standardDeviation" : 117.28171212938528
        }, {
          "mean" : 286.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 286.0,
          "min" : 286.0,
          "sum" : 286.0,
          "standardDeviation" : 0.0
        } ],
        "25" : [ {
          "mean" : 852.2,
          "variance" : 348303.69999999995,
          "n" : 5,
          "max" : 1870.0,
          "min" : 345.0,
          "sum" : 4261.0,
          "standardDeviation" : 590.1726018716897
        }, {
          "mean" : 2712.4,
          "variance" : 2.5596542299999997E7,
          "n" : 5,
          "max" : 11759.0,
          "min" : 286.0,
          "sum" : 13562.0,
          "standardDeviation" : 5059.302550747484
        }, {
          "mean" : 283.75,
          "variance" : 894.9166666666666,
          "n" : 4,
          "max" : 322.0,
          "min" : 249.0,
          "sum" : 1135.0,
          "standardDeviation" : 29.915157807818208
        }, {
          "mean" : 440.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 440.0,
          "min" : 440.0,
          "sum" : 440.0,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 2833.0000000000005,
          "variance" : 2.65259405E7,
          "n" : 5,
          "max" : 12029.0,
          "min" : 239.0,
          "sum" : 14165.000000000002,
          "standardDeviation" : 5150.3340182943475
        }, {
          "mean" : 291.8,
          "variance" : 7893.2,
          "n" : 5,
          "max" : 390.0,
          "min" : 178.0,
          "sum" : 1459.0,
          "standardDeviation" : 88.84368294932398
        }, {
          "mean" : 269.25,
          "variance" : 2986.2500000000005,
          "n" : 4,
          "max" : 331.0,
          "min" : 204.0,
          "sum" : 1077.0,
          "standardDeviation" : 54.646591842492796
        }, {
          "mean" : 350.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 350.0,
          "min" : 350.0,
          "sum" : 350.0,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 979.2,
          "variance" : 280699.69999999995,
          "n" : 5,
          "max" : 1552.0,
          "min" : 349.0,
          "sum" : 4896.0,
          "standardDeviation" : 529.8110040382325
        }, {
          "mean" : 373.25,
          "variance" : 8662.916666666666,
          "n" : 4,
          "max" : 484.0,
          "min" : 263.0,
          "sum" : 1493.0,
          "standardDeviation" : 93.07479071513761
        }, {
          "mean" : 299.8,
          "variance" : 15.699999999999969,
          "n" : 5,
          "max" : 305.0,
          "min" : 296.0,
          "sum" : 1499.0,
          "standardDeviation" : 3.962322551231786
        }, {
          "mean" : 243.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 243.0,
          "min" : 243.0,
          "sum" : 243.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 5581.199999999999,
          "variance" : 1.139804112E8,
          "n" : 5,
          "max" : 24650.0,
          "min" : 266.0,
          "sum" : 27905.999999999993,
          "standardDeviation" : 10676.160883014081
        }, {
          "mean" : 305.0,
          "variance" : 811.3333333333338,
          "n" : 4,
          "max" : 330.0,
          "min" : 273.0,
          "sum" : 1220.0,
          "standardDeviation" : 28.48391358878435
        }, {
          "mean" : 354.8,
          "variance" : 10850.699999999999,
          "n" : 5,
          "max" : 538.0,
          "min" : 281.0,
          "sum" : 1774.0,
          "standardDeviation" : 104.16669333332992
        }, {
          "mean" : 326.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 326.0,
          "min" : 326.0,
          "sum" : 326.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 1775.8333333333335,
          "variance" : 79853.76666666665,
          "n" : 1,
          "max" : 2223.0,
          "min" : 1459.0,
          "sum" : 1775.8333333333335,
          "standardDeviation" : 282.58408778037494
        }, {
          "mean" : 1143.0,
          "variance" : 575221.3333333334,
          "n" : 4,
          "max" : 2147.0,
          "min" : 319.0,
          "sum" : 4572.0,
          "standardDeviation" : 758.433473241611
        }, {
          "mean" : 355.0,
          "variance" : 3672.5,
          "n" : 5,
          "max" : 397.0,
          "min" : 249.0,
          "sum" : 1775.0,
          "standardDeviation" : 60.60115510450275
        }, {
          "mean" : 337.75,
          "variance" : 7506.25,
          "n" : 4,
          "max" : 451.0,
          "min" : 267.0,
          "sum" : 1351.0,
          "standardDeviation" : 86.63861725581728
        }, {
          "mean" : 413.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 413.0,
          "min" : 413.0,
          "sum" : 413.0,
          "standardDeviation" : 0.0
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 559.9727722772271,
          "variance" : 1.0950476577420587E7,
          "n" : 399,
          "max" : 62548.0,
          "min" : 66.0,
          "sum" : 223429.13613861363,
          "standardDeviation" : 3309.1504313676323
        }, {
          "mean" : 144.84909456740448,
          "variance" : 8874.72516550918,
          "n" : 497,
          "max" : 612.0,
          "min" : 35.0,
          "sum" : 71990.00000000003,
          "standardDeviation" : 94.20575972576826
        }, {
          "mean" : 123.66331658291459,
          "variance" : 8671.211295773584,
          "n" : 398,
          "max" : 865.0,
          "min" : 35.0,
          "sum" : 49218.00000000001,
          "standardDeviation" : 93.1193389998747
        }, {
          "mean" : 165.0341207349081,
          "variance" : 283020.3383063961,
          "n" : 381,
          "max" : 10312.0,
          "min" : 34.0,
          "sum" : 62877.999999999985,
          "standardDeviation" : 531.9965585475118
        }, {
          "mean" : 157.84019370460052,
          "variance" : 17026.54236112744,
          "n" : 413,
          "max" : 981.0,
          "min" : 36.0,
          "sum" : 65188.000000000015,
          "standardDeviation" : 130.4857937138271
        }, {
          "mean" : 134.24213075060533,
          "variance" : 11103.766473118785,
          "n" : 413,
          "max" : 617.0,
          "min" : 35.0,
          "sum" : 55442.0,
          "standardDeviation" : 105.37441090283156
        }, {
          "mean" : 83.73883928571423,
          "variance" : 4552.305244287309,
          "n" : 448,
          "max" : 495.0,
          "min" : 26.0,
          "sum" : 37514.99999999998,
          "standardDeviation" : 67.47077325988867
        }, {
          "mean" : 54.46085011185682,
          "variance" : 581.9127015178417,
          "n" : 447,
          "max" : 248.0,
          "min" : 26.0,
          "sum" : 24344.0,
          "standardDeviation" : 24.122866776522265
        }, {
          "mean" : 61.93296089385476,
          "variance" : 866.0741321950908,
          "n" : 179,
          "max" : 226.0,
          "min" : 28.0,
          "sum" : 11086.000000000002,
          "standardDeviation" : 29.42913746943819
        } ],
        "1" : [ {
          "mean" : 318.9016393442625,
          "variance" : 780569.271619484,
          "n" : 483,
          "max" : 11872.0,
          "min" : 46.0,
          "sum" : 154029.4918032788,
          "standardDeviation" : 883.4983144406581
        }, {
          "mean" : 124.90719257540603,
          "variance" : 5934.544855123295,
          "n" : 431,
          "max" : 497.0,
          "min" : 34.0,
          "sum" : 53835.0,
          "standardDeviation" : 77.03599713850204
        }, {
          "mean" : 113.46133333333329,
          "variance" : 4831.810666666668,
          "n" : 375,
          "max" : 480.0,
          "min" : 34.0,
          "sum" : 42547.999999999985,
          "standardDeviation" : 69.51122691095783
        }, {
          "mean" : 133.62216624685144,
          "variance" : 10274.8669821642,
          "n" : 397,
          "max" : 751.0,
          "min" : 34.0,
          "sum" : 53048.00000000002,
          "standardDeviation" : 101.36501853284594
        }, {
          "mean" : 141.93283582089552,
          "variance" : 13176.386998920603,
          "n" : 402,
          "max" : 691.0,
          "min" : 23.0,
          "sum" : 57057.0,
          "standardDeviation" : 114.78844453567878
        }, {
          "mean" : 146.69975786924945,
          "variance" : 16227.53584945578,
          "n" : 413,
          "max" : 844.0,
          "min" : 35.0,
          "sum" : 60587.00000000002,
          "standardDeviation" : 127.38734571948574
        }, {
          "mean" : 85.38702460850108,
          "variance" : 6221.937320050962,
          "n" : 447,
          "max" : 640.0,
          "min" : 27.0,
          "sum" : 38167.999999999985,
          "standardDeviation" : 78.87925785687237
        }, {
          "mean" : 54.74776785714284,
          "variance" : 553.1375788990092,
          "n" : 448,
          "max" : 240.0,
          "min" : 26.0,
          "sum" : 24526.999999999993,
          "standardDeviation" : 23.51887707563882
        }, {
          "mean" : 58.83240223463689,
          "variance" : 518.8931015002196,
          "n" : 179,
          "max" : 242.0,
          "min" : 27.0,
          "sum" : 10531.000000000004,
          "standardDeviation" : 22.779225217294368
        } ],
        "2" : [ {
          "mean" : 296.6381909547741,
          "variance" : 583083.3095705225,
          "n" : 393,
          "max" : 13681.0,
          "min" : 70.0,
          "sum" : 116578.80904522621,
          "standardDeviation" : 763.5989193094255
        }, {
          "mean" : 135.7611650485436,
          "variance" : 9647.39226323145,
          "n" : 515,
          "max" : 747.0,
          "min" : 35.0,
          "sum" : 69916.99999999996,
          "standardDeviation" : 98.22113959444499
        }, {
          "mean" : 182.98162729658796,
          "variance" : 1143122.181240504,
          "n" : 381,
          "max" : 20896.0,
          "min" : 36.0,
          "sum" : 69716.00000000001,
          "standardDeviation" : 1069.1689208167734
        }, {
          "mean" : 118.06793478260882,
          "variance" : 7986.722892725978,
          "n" : 368,
          "max" : 674.0,
          "min" : 34.0,
          "sum" : 43449.000000000044,
          "standardDeviation" : 89.36846699326323
        }, {
          "mean" : 157.49246231155777,
          "variance" : 15165.656114324773,
          "n" : 398,
          "max" : 655.0,
          "min" : 35.0,
          "sum" : 62681.99999999999,
          "standardDeviation" : 123.14891844561515
        }, {
          "mean" : 154.10526315789454,
          "variance" : 247372.10357315285,
          "n" : 437,
          "max" : 10280.0,
          "min" : 35.0,
          "sum" : 67343.99999999991,
          "standardDeviation" : 497.36516119763843
        }, {
          "mean" : 106.1305361305362,
          "variance" : 9670.464228917508,
          "n" : 429,
          "max" : 700.0,
          "min" : 27.0,
          "sum" : 45530.00000000003,
          "standardDeviation" : 98.3385185414012
        }, {
          "mean" : 55.015021459227455,
          "variance" : 568.3933222576028,
          "n" : 466,
          "max" : 253.0,
          "min" : 26.0,
          "sum" : 25636.999999999993,
          "standardDeviation" : 23.841000865265762
        }, {
          "mean" : 57.01595744680849,
          "variance" : 663.2671236773236,
          "n" : 188,
          "max" : 238.0,
          "min" : 26.0,
          "sum" : 10718.999999999996,
          "standardDeviation" : 25.75397296879306
        } ],
        "3" : [ {
          "mean" : 268.1782786885247,
          "variance" : 439178.25767916656,
          "n" : 483,
          "max" : 14240.0,
          "min" : 75.0,
          "sum" : 129530.10860655743,
          "standardDeviation" : 662.7052570179043
        }, {
          "mean" : 141.44315545243614,
          "variance" : 8762.424086764153,
          "n" : 431,
          "max" : 527.0,
          "min" : 42.0,
          "sum" : 60961.99999999998,
          "standardDeviation" : 93.60782064958116
        }, {
          "mean" : 132.19414893617025,
          "variance" : 7631.4422056737585,
          "n" : 376,
          "max" : 491.0,
          "min" : 34.0,
          "sum" : 49705.000000000015,
          "standardDeviation" : 87.35812615706543
        }, {
          "mean" : 136.2117962466489,
          "variance" : 12620.31254864655,
          "n" : 373,
          "max" : 832.0,
          "min" : 35.0,
          "sum" : 50807.000000000044,
          "standardDeviation" : 112.3401644499711
        }, {
          "mean" : 141.54336734693888,
          "variance" : 10257.118319066753,
          "n" : 392,
          "max" : 515.0,
          "min" : 35.0,
          "sum" : 55485.000000000044,
          "standardDeviation" : 101.27743242730214
        }, {
          "mean" : 142.66287015945335,
          "variance" : 226674.0732985927,
          "n" : 439,
          "max" : 9911.0,
          "min" : 36.0,
          "sum" : 62629.00000000002,
          "standardDeviation" : 476.10300702536284
        }, {
          "mean" : 101.12165450121655,
          "variance" : 7932.1705299388805,
          "n" : 411,
          "max" : 684.0,
          "min" : 26.0,
          "sum" : 41561.00000000001,
          "standardDeviation" : 89.0627336765433
        }, {
          "mean" : 60.34130434782611,
          "variance" : 1122.164303305864,
          "n" : 460,
          "max" : 310.0,
          "min" : 27.0,
          "sum" : 27757.00000000001,
          "standardDeviation" : 33.498720920445066
        }, {
          "mean" : 61.61611374407584,
          "variance" : 660.4662153012866,
          "n" : 211,
          "max" : 123.0,
          "min" : 27.0,
          "sum" : 13001.000000000002,
          "standardDeviation" : 25.699537258505
        } ],
        "4" : [ {
          "mean" : 373.61618257261426,
          "variance" : 2383057.950091011,
          "n" : 477,
          "max" : 23064.0,
          "min" : 71.0,
          "sum" : 178214.919087137,
          "standardDeviation" : 1543.7156312258455
        }, {
          "mean" : 132.38515081206484,
          "variance" : 7318.255965035345,
          "n" : 431,
          "max" : 605.0,
          "min" : 35.0,
          "sum" : 57057.99999999994,
          "standardDeviation" : 85.54680569743878
        }, {
          "mean" : 118.6535433070866,
          "variance" : 5157.953336096145,
          "n" : 381,
          "max" : 452.0,
          "min" : 35.0,
          "sum" : 45206.99999999999,
          "standardDeviation" : 71.81889261257197
        }, {
          "mean" : 143.76033057851228,
          "variance" : 10107.09985845396,
          "n" : 363,
          "max" : 562.0,
          "min" : 36.0,
          "sum" : 52184.999999999956,
          "standardDeviation" : 100.53407312177279
        }, {
          "mean" : 187.06265664160412,
          "variance" : 240587.28500900496,
          "n" : 399,
          "max" : 9648.0,
          "min" : 35.0,
          "sum" : 74638.00000000004,
          "standardDeviation" : 490.4969775737716
        }, {
          "mean" : 136.9377880184331,
          "variance" : 12791.873718883358,
          "n" : 434,
          "max" : 601.0,
          "min" : 34.0,
          "sum" : 59430.99999999997,
          "standardDeviation" : 113.1011658599652
        }, {
          "mean" : 108.17108433734934,
          "variance" : 10357.465828531524,
          "n" : 415,
          "max" : 755.0,
          "min" : 28.0,
          "sum" : 44890.99999999998,
          "standardDeviation" : 101.77163567778364
        }, {
          "mean" : 76.49353448275863,
          "variance" : 194753.55503370072,
          "n" : 464,
          "max" : 9544.0,
          "min" : 27.0,
          "sum" : 35493.00000000001,
          "standardDeviation" : 441.3089111197515
        }, {
          "mean" : 59.70616113744075,
          "variance" : 498.2465809072443,
          "n" : 211,
          "max" : 240.0,
          "min" : 28.0,
          "sum" : 12597.999999999998,
          "standardDeviation" : 22.321437698034693
        } ],
        "5" : [ {
          "mean" : 294.5946547884189,
          "variance" : 426852.8263999363,
          "n" : 444,
          "max" : 9825.0,
          "min" : 70.0,
          "sum" : 130800.02672605799,
          "standardDeviation" : 653.3397480636979
        }, {
          "mean" : 124.26769911504431,
          "variance" : 7836.733056334986,
          "n" : 452,
          "max" : 591.0,
          "min" : 37.0,
          "sum" : 56169.00000000003,
          "standardDeviation" : 88.52532437859229
        }, {
          "mean" : 113.04381443298965,
          "variance" : 4189.277145102426,
          "n" : 388,
          "max" : 527.0,
          "min" : 36.0,
          "sum" : 43860.999999999985,
          "standardDeviation" : 64.7246254921759
        }, {
          "mean" : 140.804347826087,
          "variance" : 10843.498400663439,
          "n" : 368,
          "max" : 709.0,
          "min" : 35.0,
          "sum" : 51816.000000000015,
          "standardDeviation" : 104.13211992782745
        }, {
          "mean" : 151.69269521410595,
          "variance" : 16496.14774953564,
          "n" : 397,
          "max" : 854.0,
          "min" : 35.0,
          "sum" : 60222.000000000065,
          "standardDeviation" : 128.43733004674164
        }, {
          "mean" : 131.57142857142856,
          "variance" : 12595.663636363632,
          "n" : 441,
          "max" : 888.0,
          "min" : 35.0,
          "sum" : 58022.99999999999,
          "standardDeviation" : 112.23040424218222
        }, {
          "mean" : 95.69565217391306,
          "variance" : 6463.432571849673,
          "n" : 414,
          "max" : 639.0,
          "min" : 30.0,
          "sum" : 39618.00000000001,
          "standardDeviation" : 80.39547606581898
        }, {
          "mean" : 55.25319148936167,
          "variance" : 713.0807467223152,
          "n" : 470,
          "max" : 242.0,
          "min" : 27.0,
          "sum" : 25968.999999999985,
          "standardDeviation" : 26.703571797089527
        }, {
          "mean" : 52.06965174129351,
          "variance" : 383.2851243781094,
          "n" : 201,
          "max" : 111.0,
          "min" : 27.0,
          "sum" : 10465.999999999996,
          "standardDeviation" : 19.577669023101535
        } ],
        "6" : [ {
          "mean" : 412.3611738148988,
          "variance" : 3268155.0231045014,
          "n" : 438,
          "max" : 31314.0,
          "min" : 60.0,
          "sum" : 180614.19413092567,
          "standardDeviation" : 1807.8039227483996
        }, {
          "mean" : 159.2292576419215,
          "variance" : 13505.656297478346,
          "n" : 458,
          "max" : 628.0,
          "min" : 35.0,
          "sum" : 72927.00000000004,
          "standardDeviation" : 116.21383866596244
        }, {
          "mean" : 137.28498727735368,
          "variance" : 10411.581840369736,
          "n" : 393,
          "max" : 831.0,
          "min" : 35.0,
          "sum" : 53952.99999999999,
          "standardDeviation" : 102.03715911553857
        }, {
          "mean" : 162.47107438016522,
          "variance" : 19002.918359892254,
          "n" : 363,
          "max" : 709.0,
          "min" : 35.0,
          "sum" : 58976.99999999998,
          "standardDeviation" : 137.85107311839198
        }, {
          "mean" : 195.11479591836743,
          "variance" : 264630.6082715693,
          "n" : 392,
          "max" : 9912.0,
          "min" : 36.0,
          "sum" : 76485.00000000003,
          "standardDeviation" : 514.4225969682605
        }, {
          "mean" : 156.66511627906957,
          "variance" : 19779.71509730579,
          "n" : 430,
          "max" : 867.0,
          "min" : 36.0,
          "sum" : 67365.99999999991,
          "standardDeviation" : 140.64037506102503
        }, {
          "mean" : 103.67915690866508,
          "variance" : 10064.528273465927,
          "n" : 427,
          "max" : 798.0,
          "min" : 27.0,
          "sum" : 44270.999999999985,
          "standardDeviation" : 100.32212255263505
        }, {
          "mean" : 57.71794871794873,
          "variance" : 868.9395486740237,
          "n" : 468,
          "max" : 379.0,
          "min" : 27.0,
          "sum" : 27012.000000000007,
          "standardDeviation" : 29.47778059274517
        }, {
          "mean" : 56.4057971014493,
          "variance" : 383.46559729843824,
          "n" : 207,
          "max" : 101.0,
          "min" : 27.0,
          "sum" : 11676.000000000005,
          "standardDeviation" : 19.58227763306501
        } ],
        "7" : [ {
          "mean" : 283.60377358490547,
          "variance" : 954022.7236152225,
          "n" : 525,
          "max" : 20141.0,
          "min" : 71.0,
          "sum" : 148891.98113207537,
          "standardDeviation" : 976.7408682016037
        }, {
          "mean" : 134.94145199063263,
          "variance" : 7168.595155633257,
          "n" : 427,
          "max" : 929.0,
          "min" : 37.0,
          "sum" : 57620.00000000013,
          "standardDeviation" : 84.66755668869426
        }, {
          "mean" : 143.4136125654449,
          "variance" : 267975.4872682798,
          "n" : 382,
          "max" : 10137.0,
          "min" : 35.0,
          "sum" : 54783.999999999956,
          "standardDeviation" : 517.6634884442593
        }, {
          "mean" : 145.22337662337668,
          "variance" : 8605.533306277053,
          "n" : 385,
          "max" : 592.0,
          "min" : 36.0,
          "sum" : 55911.00000000002,
          "standardDeviation" : 92.76601374575202
        }, {
          "mean" : 137.03482587064667,
          "variance" : 11028.627213061869,
          "n" : 402,
          "max" : 832.0,
          "min" : 34.0,
          "sum" : 55087.99999999996,
          "standardDeviation" : 105.01727102273163
        }, {
          "mean" : 119.35662650602397,
          "variance" : 7279.819370234555,
          "n" : 415,
          "max" : 599.0,
          "min" : 35.0,
          "sum" : 49532.99999999995,
          "standardDeviation" : 85.32185751748818
        }, {
          "mean" : 76.08387096774196,
          "variance" : 3397.197691879864,
          "n" : 465,
          "max" : 559.0,
          "min" : 26.0,
          "sum" : 35379.00000000001,
          "standardDeviation" : 58.28548440117714
        }, {
          "mean" : 57.86034912718204,
          "variance" : 574.400448877806,
          "n" : 401,
          "max" : 230.0,
          "min" : 28.0,
          "sum" : 23201.999999999996,
          "standardDeviation" : 23.966652850947
        }, {
          "mean" : 113.66091954022988,
          "variance" : 629643.6936083981,
          "n" : 174,
          "max" : 10516.0,
          "min" : 28.0,
          "sum" : 19777.0,
          "standardDeviation" : 793.5009096456022
        } ],
        "8" : [ {
          "mean" : 301.71678321678297,
          "variance" : 1025991.7445164288,
          "n" : 567,
          "max" : 18529.0,
          "min" : 58.0,
          "sum" : 171073.41608391594,
          "standardDeviation" : 1012.9125058544932
        }, {
          "mean" : 121.36592178770945,
          "variance" : 5806.994577719355,
          "n" : 358,
          "max" : 635.0,
          "min" : 34.0,
          "sum" : 43448.999999999985,
          "standardDeviation" : 76.20363887452721
        }, {
          "mean" : 111.62087912087918,
          "variance" : 4910.461932007383,
          "n" : 364,
          "max" : 460.0,
          "min" : 35.0,
          "sum" : 40630.00000000002,
          "standardDeviation" : 70.07468824052935
        }, {
          "mean" : 110.25484764542931,
          "variance" : 5719.140427823943,
          "n" : 361,
          "max" : 592.0,
          "min" : 35.0,
          "sum" : 39801.99999999998,
          "standardDeviation" : 75.62499869635664
        }, {
          "mean" : 149.94858611825197,
          "variance" : 14807.24992711949,
          "n" : 389,
          "max" : 743.0,
          "min" : 34.0,
          "sum" : 58330.000000000015,
          "standardDeviation" : 121.6850439746787
        }, {
          "mean" : 136.82298850574708,
          "variance" : 12487.514677684201,
          "n" : 435,
          "max" : 738.0,
          "min" : 35.0,
          "sum" : 59517.99999999998,
          "standardDeviation" : 111.74754886655994
        }, {
          "mean" : 91.13095238095245,
          "variance" : 6950.242953744746,
          "n" : 420,
          "max" : 675.0,
          "min" : 28.0,
          "sum" : 38275.00000000003,
          "standardDeviation" : 83.36811712966022
        }, {
          "mean" : 53.64941176470588,
          "variance" : 344.60557158712555,
          "n" : 425,
          "max" : 114.0,
          "min" : 27.0,
          "sum" : 22801.0,
          "standardDeviation" : 18.56355492859936
        }, {
          "mean" : 97.55468750000001,
          "variance" : 394984.95386029425,
          "n" : 256,
          "max" : 10107.0,
          "min" : 27.0,
          "sum" : 24974.000000000004,
          "standardDeviation" : 628.4782843187935
        } ],
        "9" : [ {
          "mean" : 356.2477678571428,
          "variance" : 1462163.461963687,
          "n" : 443,
          "max" : 18219.0,
          "min" : 61.0,
          "sum" : 157817.76116071426,
          "standardDeviation" : 1209.1995128859783
        }, {
          "mean" : 146.0795698924731,
          "variance" : 155471.73718946977,
          "n" : 465,
          "max" : 8404.0,
          "min" : 35.0,
          "sum" : 67927.0,
          "standardDeviation" : 394.29904538239725
        }, {
          "mean" : 109.03457446808504,
          "variance" : 5915.964134751772,
          "n" : 376,
          "max" : 560.0,
          "min" : 35.0,
          "sum" : 40996.99999999998,
          "standardDeviation" : 76.91530494480128
        }, {
          "mean" : 137.2425068119891,
          "variance" : 11565.577641786158,
          "n" : 367,
          "max" : 763.0,
          "min" : 34.0,
          "sum" : 50368.0,
          "standardDeviation" : 107.54337562949267
        }, {
          "mean" : 146.6683544303799,
          "variance" : 14373.399884341068,
          "n" : 395,
          "max" : 780.0,
          "min" : 35.0,
          "sum" : 57934.000000000065,
          "standardDeviation" : 119.8891149535314
        }, {
          "mean" : 157.08545034642043,
          "variance" : 215856.95332948436,
          "n" : 433,
          "max" : 9525.0,
          "min" : 35.0,
          "sum" : 68018.00000000004,
          "standardDeviation" : 464.6040823426806
        }, {
          "mean" : 116.10798122065721,
          "variance" : 255886.4212537975,
          "n" : 426,
          "max" : 10386.0,
          "min" : 27.0,
          "sum" : 49461.99999999997,
          "standardDeviation" : 505.85217332121596
        }, {
          "mean" : 55.228144989339,
          "variance" : 448.94570189346314,
          "n" : 469,
          "max" : 248.0,
          "min" : 27.0,
          "sum" : 25901.999999999993,
          "standardDeviation" : 21.188338818639444
        }, {
          "mean" : 64.33333333333334,
          "variance" : 530.5133333333335,
          "n" : 201,
          "max" : 232.0,
          "min" : 28.0,
          "sum" : 12931.000000000002,
          "standardDeviation" : 23.032875055740078
        } ],
        "10" : [ {
          "mean" : 298.02132701421783,
          "variance" : 619495.8594015599,
          "n" : 417,
          "max" : 12105.0,
          "min" : 64.0,
          "sum" : 124274.89336492884,
          "standardDeviation" : 787.0805926978253
        }, {
          "mean" : 161.9770354906053,
          "variance" : 217053.4618146242,
          "n" : 479,
          "max" : 10103.0,
          "min" : 34.0,
          "sum" : 77586.99999999993,
          "standardDeviation" : 465.8899674972881
        }, {
          "mean" : 119.24744897959184,
          "variance" : 7168.667512657236,
          "n" : 392,
          "max" : 626.0,
          "min" : 34.0,
          "sum" : 46745.0,
          "standardDeviation" : 84.66798398838392
        }, {
          "mean" : 182.30494505494502,
          "variance" : 395608.90124269645,
          "n" : 364,
          "max" : 11922.0,
          "min" : 36.0,
          "sum" : 66358.99999999999,
          "standardDeviation" : 628.9744837771215
        }, {
          "mean" : 170.41854636591495,
          "variance" : 259758.314328535,
          "n" : 399,
          "max" : 10093.0,
          "min" : 34.0,
          "sum" : 67997.00000000006,
          "standardDeviation" : 509.66490395997937
        }, {
          "mean" : 157.16856492027335,
          "variance" : 235906.37791368927,
          "n" : 439,
          "max" : 10017.0,
          "min" : 35.0,
          "sum" : 68997.0,
          "standardDeviation" : 485.7019434938358
        }, {
          "mean" : 101.40603248259862,
          "variance" : 9374.953358873347,
          "n" : 431,
          "max" : 708.0,
          "min" : 29.0,
          "sum" : 43706.00000000001,
          "standardDeviation" : 96.82434280114349
        }, {
          "mean" : 57.73275862068965,
          "variance" : 730.7750800625606,
          "n" : 464,
          "max" : 266.0,
          "min" : 27.0,
          "sum" : 26788.0,
          "standardDeviation" : 27.032851866988814
        }, {
          "mean" : 57.36315789473685,
          "variance" : 359.3753550543023,
          "n" : 190,
          "max" : 106.0,
          "min" : 28.0,
          "sum" : 10899.000000000002,
          "standardDeviation" : 18.95719797476152
        } ],
        "11" : [ {
          "mean" : 281.37173913043466,
          "variance" : 523827.02272899565,
          "n" : 455,
          "max" : 12367.0,
          "min" : 61.0,
          "sum" : 128024.14130434777,
          "standardDeviation" : 723.758953470695
        }, {
          "mean" : 83.14468085106377,
          "variance" : 998.7764641836405,
          "n" : 470,
          "max" : 286.0,
          "min" : 32.0,
          "sum" : 39077.99999999997,
          "standardDeviation" : 31.60342488059863
        }, {
          "mean" : 178.5094850948511,
          "variance" : 1017338.0929804399,
          "n" : 369,
          "max" : 16625.0,
          "min" : 36.0,
          "sum" : 65870.00000000006,
          "standardDeviation" : 1008.631792568745
        }, {
          "mean" : 168.79336734693882,
          "variance" : 360702.95719374664,
          "n" : 392,
          "max" : 11800.0,
          "min" : 34.0,
          "sum" : 66167.00000000001,
          "standardDeviation" : 600.5855119745619
        }, {
          "mean" : 145.04347826086965,
          "variance" : 15742.462207357863,
          "n" : 391,
          "max" : 935.0,
          "min" : 35.0,
          "sum" : 56712.00000000003,
          "standardDeviation" : 125.46896910135933
        }, {
          "mean" : 127.75235849056604,
          "variance" : 9472.76358780499,
          "n" : 424,
          "max" : 604.0,
          "min" : 35.0,
          "sum" : 54167.0,
          "standardDeviation" : 97.32812331389623
        }, {
          "mean" : 122.12612612612612,
          "variance" : 10800.683830557426,
          "n" : 444,
          "max" : 627.0,
          "min" : 35.0,
          "sum" : 54224.0,
          "standardDeviation" : 103.92633848335765
        }, {
          "mean" : 169.40133037694014,
          "variance" : 425611.4274648931,
          "n" : 451,
          "max" : 10048.0,
          "min" : 36.0,
          "sum" : 76400.0,
          "standardDeviation" : 652.3890154385596
        }, {
          "mean" : 134.7094972067039,
          "variance" : 15400.173560981739,
          "n" : 179,
          "max" : 719.0,
          "min" : 38.0,
          "sum" : 24113.0,
          "standardDeviation" : 124.097435755062
        } ],
        "12" : [ {
          "mean" : 280.48789571694624,
          "variance" : 487078.37718530296,
          "n" : 532,
          "max" : 11691.0,
          "min" : 43.0,
          "sum" : 149219.5605214154,
          "standardDeviation" : 697.9100065089359
        }, {
          "mean" : 130.11027568922302,
          "variance" : 9525.832029823305,
          "n" : 399,
          "max" : 551.0,
          "min" : 36.0,
          "sum" : 51913.999999999985,
          "standardDeviation" : 97.60036900454477
        }, {
          "mean" : 128.3140495867768,
          "variance" : 9717.591708141183,
          "n" : 363,
          "max" : 703.0,
          "min" : 35.0,
          "sum" : 46577.99999999998,
          "standardDeviation" : 98.57784592970766
        }, {
          "mean" : 145.76640419947526,
          "variance" : 12497.216342036201,
          "n" : 381,
          "max" : 712.0,
          "min" : 35.0,
          "sum" : 55537.00000000007,
          "standardDeviation" : 111.79094928497656
        }, {
          "mean" : 157.02368421052628,
          "variance" : 16091.55352728787,
          "n" : 380,
          "max" : 727.0,
          "min" : 35.0,
          "sum" : 59668.999999999985,
          "standardDeviation" : 126.8524872727684
        }, {
          "mean" : 127.76781609195402,
          "variance" : 11172.418316648129,
          "n" : 435,
          "max" : 735.0,
          "min" : 35.0,
          "sum" : 55579.0,
          "standardDeviation" : 105.69966091075283
        }, {
          "mean" : 90.15931372549034,
          "variance" : 7051.849249650728,
          "n" : 408,
          "max" : 567.0,
          "min" : 27.0,
          "sum" : 36785.00000000006,
          "standardDeviation" : 83.97528951811198
        }, {
          "mean" : 124.24565217391306,
          "variance" : 2109388.9918111204,
          "n" : 460,
          "max" : 31202.0,
          "min" : 27.0,
          "sum" : 57153.00000000001,
          "standardDeviation" : 1452.373571713256
        }, {
          "mean" : 56.949308755760406,
          "variance" : 626.4279740570062,
          "n" : 217,
          "max" : 263.0,
          "min" : 27.0,
          "sum" : 12358.000000000007,
          "standardDeviation" : 25.02854318686979
        } ],
        "13" : [ {
          "mean" : 395.6078838174276,
          "variance" : 5013183.669210061,
          "n" : 477,
          "max" : 47186.0,
          "min" : 38.0,
          "sum" : 188704.96058091297,
          "standardDeviation" : 2239.0139948669507
        }, {
          "mean" : 161.35520361990942,
          "variance" : 219025.4993946296,
          "n" : 442,
          "max" : 9756.0,
          "min" : 36.0,
          "sum" : 71318.99999999996,
          "standardDeviation" : 468.0016019145977
        }, {
          "mean" : 128.38108108108105,
          "variance" : 10023.586090969015,
          "n" : 370,
          "max" : 703.0,
          "min" : 35.0,
          "sum" : 47500.999999999985,
          "standardDeviation" : 100.11786099876991
        }, {
          "mean" : 154.2638522427442,
          "variance" : 17823.289986179174,
          "n" : 379,
          "max" : 917.0,
          "min" : 34.0,
          "sum" : 58466.00000000005,
          "standardDeviation" : 133.50389502250178
        }, {
          "mean" : 167.41085271317817,
          "variance" : 20213.408482949744,
          "n" : 387,
          "max" : 839.0,
          "min" : 37.0,
          "sum" : 64787.999999999956,
          "standardDeviation" : 142.17386708868034
        }, {
          "mean" : 146.53514739229036,
          "variance" : 16305.058420944142,
          "n" : 441,
          "max" : 757.0,
          "min" : 34.0,
          "sum" : 64622.000000000044,
          "standardDeviation" : 127.69126211665441
        }, {
          "mean" : 88.81030444964873,
          "variance" : 6667.435762113666,
          "n" : 427,
          "max" : 680.0,
          "min" : 27.0,
          "sum" : 37922.00000000001,
          "standardDeviation" : 81.6543676854684
        }, {
          "mean" : 56.09071274298058,
          "variance" : 629.3770347722834,
          "n" : 463,
          "max" : 254.0,
          "min" : 26.0,
          "sum" : 25970.000000000007,
          "standardDeviation" : 25.087387962326478
        }, {
          "mean" : 56.433862433862416,
          "variance" : 401.66182595969843,
          "n" : 189,
          "max" : 114.0,
          "min" : 26.0,
          "sum" : 10665.999999999996,
          "standardDeviation" : 20.041502587373493
        } ],
        "14" : [ {
          "mean" : 302.02607076350085,
          "variance" : 1065617.450811584,
          "n" : 532,
          "max" : 18930.0,
          "min" : 37.0,
          "sum" : 160677.86964618246,
          "standardDeviation" : 1032.2874845756796
        }, {
          "mean" : 132.54950495049502,
          "variance" : 8088.203498513625,
          "n" : 404,
          "max" : 667.0,
          "min" : 36.0,
          "sum" : 53549.999999999985,
          "standardDeviation" : 89.93444000222398
        }, {
          "mean" : 112.93908629441623,
          "variance" : 7620.108239366579,
          "n" : 394,
          "max" : 544.0,
          "min" : 34.0,
          "sum" : 44497.99999999999,
          "standardDeviation" : 87.29323134909475
        }, {
          "mean" : 150.98092643051774,
          "variance" : 13933.838433019162,
          "n" : 367,
          "max" : 702.0,
          "min" : 35.0,
          "sum" : 55410.00000000001,
          "standardDeviation" : 118.04168091407018
        }, {
          "mean" : 137.4773269689738,
          "variance" : 11848.819460780396,
          "n" : 419,
          "max" : 616.0,
          "min" : 35.0,
          "sum" : 57603.00000000003,
          "standardDeviation" : 108.85228275410854
        }, {
          "mean" : 132.33095238095243,
          "variance" : 14166.527440618267,
          "n" : 420,
          "max" : 739.0,
          "min" : 35.0,
          "sum" : 55579.00000000002,
          "standardDeviation" : 119.0232222745556
        }, {
          "mean" : 81.95698924731188,
          "variance" : 6877.433490915836,
          "n" : 465,
          "max" : 735.0,
          "min" : 28.0,
          "sum" : 38110.00000000002,
          "standardDeviation" : 82.93029296292059
        }, {
          "mean" : 52.184466019417485,
          "variance" : 514.62768998181,
          "n" : 412,
          "max" : 222.0,
          "min" : 27.0,
          "sum" : 21500.000000000004,
          "standardDeviation" : 22.685406982944123
        }, {
          "mean" : 57.36419753086422,
          "variance" : 342.6553561843417,
          "n" : 162,
          "max" : 98.0,
          "min" : 28.0,
          "sum" : 9293.000000000004,
          "standardDeviation" : 18.51095233056208
        } ],
        "15" : [ {
          "mean" : 309.60820045558063,
          "variance" : 663430.9100695855,
          "n" : 434,
          "max" : 13966.0,
          "min" : 61.0,
          "sum" : 134369.958997722,
          "standardDeviation" : 814.5126825713554
        }, {
          "mean" : 168.7151898734177,
          "variance" : 13368.335202183744,
          "n" : 474,
          "max" : 693.0,
          "min" : 35.0,
          "sum" : 79970.99999999999,
          "standardDeviation" : 115.62151703806582
        }, {
          "mean" : 134.4111405835544,
          "variance" : 11063.18955640838,
          "n" : 377,
          "max" : 597.0,
          "min" : 35.0,
          "sum" : 50673.000000000015,
          "standardDeviation" : 105.1816978205257
        }, {
          "mean" : 135.68664850136244,
          "variance" : 9673.947990649336,
          "n" : 367,
          "max" : 797.0,
          "min" : 35.0,
          "sum" : 49797.000000000015,
          "standardDeviation" : 98.35623005508769
        }, {
          "mean" : 181.5945273631842,
          "variance" : 241181.4586233423,
          "n" : 402,
          "max" : 9665.0,
          "min" : 34.0,
          "sum" : 73001.00000000004,
          "standardDeviation" : 491.10228936886693
        }, {
          "mean" : 151.16972477064212,
          "variance" : 18565.957334176946,
          "n" : 436,
          "max" : 988.0,
          "min" : 34.0,
          "sum" : 65909.99999999997,
          "standardDeviation" : 136.25695334248798
        }, {
          "mean" : 101.67749419953597,
          "variance" : 10739.912027194741,
          "n" : 431,
          "max" : 700.0,
          "min" : 27.0,
          "sum" : 43823.0,
          "standardDeviation" : 103.63354682338505
        }, {
          "mean" : 60.86422413793101,
          "variance" : 859.0635985328066,
          "n" : 464,
          "max" : 358.0,
          "min" : 27.0,
          "sum" : 28240.99999999999,
          "standardDeviation" : 29.309786736392446
        }, {
          "mean" : 63.321052631578944,
          "variance" : 562.9281258702312,
          "n" : 190,
          "max" : 228.0,
          "min" : 28.0,
          "sum" : 12031.0,
          "standardDeviation" : 23.726106420359645
        } ],
        "16" : [ {
          "mean" : 297.8725490196078,
          "variance" : 521657.99354751717,
          "n" : 505,
          "max" : 13560.0,
          "min" : 44.0,
          "sum" : 150425.63725490193,
          "standardDeviation" : 722.2589518638846
        }, {
          "mean" : 139.70823529411766,
          "variance" : 10486.457125416207,
          "n" : 425,
          "max" : 706.0,
          "min" : 35.0,
          "sum" : 59376.00000000001,
          "standardDeviation" : 102.40340387612224
        }, {
          "mean" : 156.007894736842,
          "variance" : 266054.1292251076,
          "n" : 380,
          "max" : 10005.0,
          "min" : 34.0,
          "sum" : 59282.999999999956,
          "standardDeviation" : 515.8043516926816
        }, {
          "mean" : 140.49468085106392,
          "variance" : 13517.871971631195,
          "n" : 376,
          "max" : 704.0,
          "min" : 36.0,
          "sum" : 52826.00000000004,
          "standardDeviation" : 116.26638366970565
        }, {
          "mean" : 161.7253333333333,
          "variance" : 17507.568741532967,
          "n" : 375,
          "max" : 705.0,
          "min" : 36.0,
          "sum" : 60646.99999999999,
          "standardDeviation" : 132.31616961480168
        }, {
          "mean" : 185.68792710706163,
          "variance" : 495688.01882651495,
          "n" : 439,
          "max" : 10642.0,
          "min" : 36.0,
          "sum" : 81517.00000000006,
          "standardDeviation" : 704.0511478767114
        }, {
          "mean" : 94.09692671394795,
          "variance" : 7594.315227499359,
          "n" : 423,
          "max" : 649.0,
          "min" : 28.0,
          "sum" : 39802.999999999985,
          "standardDeviation" : 87.1453683651596
        }, {
          "mean" : 59.536637931034505,
          "variance" : 667.8431472033966,
          "n" : 464,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 27625.00000000001,
          "standardDeviation" : 25.842661380039722
        }, {
          "mean" : 65.15425531914897,
          "variance" : 1129.6605700307207,
          "n" : 188,
          "max" : 336.0,
          "min" : 27.0,
          "sum" : 12249.000000000007,
          "standardDeviation" : 33.610423532450774
        } ],
        "17" : [ {
          "mean" : 334.23515981735153,
          "variance" : 911660.7248936822,
          "n" : 433,
          "max" : 14638.0,
          "min" : 67.0,
          "sum" : 144723.82420091322,
          "standardDeviation" : 954.8092610012128
        }, {
          "mean" : 159.28665207877478,
          "variance" : 237659.36282582817,
          "n" : 457,
          "max" : 10359.0,
          "min" : 35.0,
          "sum" : 72794.00000000007,
          "standardDeviation" : 487.5031926314208
        }, {
          "mean" : 142.52911392405068,
          "variance" : 264188.47821114183,
          "n" : 395,
          "max" : 10217.0,
          "min" : 34.0,
          "sum" : 56299.000000000015,
          "standardDeviation" : 513.9926830326885
        }, {
          "mean" : 137.43051771117175,
          "variance" : 12899.4097765072,
          "n" : 367,
          "max" : 819.0,
          "min" : 37.0,
          "sum" : 50437.00000000003,
          "standardDeviation" : 113.57556857223828
        }, {
          "mean" : 146.6142131979695,
          "variance" : 10959.20956846333,
          "n" : 394,
          "max" : 521.0,
          "min" : 34.0,
          "sum" : 57765.99999999998,
          "standardDeviation" : 104.68624345377634
        }, {
          "mean" : 136.16216216216225,
          "variance" : 12437.192605698257,
          "n" : 444,
          "max" : 739.0,
          "min" : 35.0,
          "sum" : 60456.00000000004,
          "standardDeviation" : 111.52216194863807
        }, {
          "mean" : 91.23648648648648,
          "variance" : 6067.205798914032,
          "n" : 444,
          "max" : 489.0,
          "min" : 26.0,
          "sum" : 40509.0,
          "standardDeviation" : 77.89227046963025
        }, {
          "mean" : 62.01108647450115,
          "variance" : 967.5754323725051,
          "n" : 451,
          "max" : 420.0,
          "min" : 26.0,
          "sum" : 27967.00000000002,
          "standardDeviation" : 31.105874563697853
        }, {
          "mean" : 58.00526315789476,
          "variance" : 671.2433583959898,
          "n" : 190,
          "max" : 251.0,
          "min" : 27.0,
          "sum" : 11021.000000000004,
          "standardDeviation" : 25.908364641481906
        } ],
        "18" : [ {
          "mean" : 332.58474576271215,
          "variance" : 942299.8866457938,
          "n" : 467,
          "max" : 15445.0,
          "min" : 64.0,
          "sum" : 155317.07627118658,
          "standardDeviation" : 970.7213228552229
        }, {
          "mean" : 138.39082969432314,
          "variance" : 9571.910375240092,
          "n" : 458,
          "max" : 619.0,
          "min" : 35.0,
          "sum" : 63383.0,
          "standardDeviation" : 97.8361404351178
        }, {
          "mean" : 122.64130434782606,
          "variance" : 6109.642104016107,
          "n" : 368,
          "max" : 487.0,
          "min" : 35.0,
          "sum" : 45131.99999999999,
          "standardDeviation" : 78.16419963139204
        }, {
          "mean" : 207.81958762886592,
          "variance" : 511742.6547057729,
          "n" : 388,
          "max" : 10066.0,
          "min" : 35.0,
          "sum" : 80633.99999999997,
          "standardDeviation" : 715.3619047068224
        }, {
          "mean" : 165.06951871657762,
          "variance" : 13657.582285558628,
          "n" : 374,
          "max" : 663.0,
          "min" : 35.0,
          "sum" : 61736.00000000003,
          "standardDeviation" : 116.86565913714186
        }, {
          "mean" : 145.5235955056177,
          "variance" : 13035.227482538727,
          "n" : 445,
          "max" : 752.0,
          "min" : 35.0,
          "sum" : 64757.999999999876,
          "standardDeviation" : 114.171920727203
        }, {
          "mean" : 102.18451025056955,
          "variance" : 8022.598298332659,
          "n" : 439,
          "max" : 654.0,
          "min" : 27.0,
          "sum" : 44859.00000000003,
          "standardDeviation" : 89.56895834122813
        }, {
          "mean" : 61.33481152993351,
          "variance" : 792.3032076866225,
          "n" : 451,
          "max" : 253.0,
          "min" : 26.0,
          "sum" : 27662.000000000015,
          "standardDeviation" : 28.147881051450792
        }, {
          "mean" : 69.27027027027029,
          "variance" : 1434.100470035252,
          "n" : 185,
          "max" : 291.0,
          "min" : 28.0,
          "sum" : 12815.000000000004,
          "standardDeviation" : 37.869519009821765
        } ],
        "19" : [ {
          "mean" : 344.90454545454554,
          "variance" : 1078989.9635328224,
          "n" : 435,
          "max" : 16590.0,
          "min" : 57.0,
          "sum" : 150033.47727272732,
          "standardDeviation" : 1038.7444168479667
        }, {
          "mean" : 113.02685950413225,
          "variance" : 3787.9226725185213,
          "n" : 484,
          "max" : 529.0,
          "min" : 36.0,
          "sum" : 54705.00000000001,
          "standardDeviation" : 61.54610200913232
        }, {
          "mean" : 99.15176151761517,
          "variance" : 4430.324731942967,
          "n" : 369,
          "max" : 646.0,
          "min" : 35.0,
          "sum" : 36587.0,
          "standardDeviation" : 66.56068458138759
        }, {
          "mean" : 121.62872628726282,
          "variance" : 6496.022107340644,
          "n" : 369,
          "max" : 474.0,
          "min" : 36.0,
          "sum" : 44880.99999999998,
          "standardDeviation" : 80.59790386443461
        }, {
          "mean" : 136.1788413098237,
          "variance" : 8258.71793501768,
          "n" : 397,
          "max" : 469.0,
          "min" : 35.0,
          "sum" : 54063.00000000001,
          "standardDeviation" : 90.8774886042615
        }, {
          "mean" : 120.28082191780823,
          "variance" : 7948.815695432749,
          "n" : 438,
          "max" : 655.0,
          "min" : 37.0,
          "sum" : 52683.0,
          "standardDeviation" : 89.15613100304851
        }, {
          "mean" : 105.12121212121225,
          "variance" : 20732.144151798366,
          "n" : 429,
          "max" : 2535.0,
          "min" : 27.0,
          "sum" : 45097.00000000006,
          "standardDeviation" : 143.9866110157412
        }, {
          "mean" : 59.4353448275862,
          "variance" : 842.1426789305134,
          "n" : 464,
          "max" : 268.0,
          "min" : 26.0,
          "sum" : 27577.999999999996,
          "standardDeviation" : 29.01969467328203
        }, {
          "mean" : 60.58947368421051,
          "variance" : 815.1533277638538,
          "n" : 190,
          "max" : 254.0,
          "min" : 28.0,
          "sum" : 11511.999999999996,
          "standardDeviation" : 28.550890139606047
        } ],
        "20" : [ {
          "mean" : 388.3733905579401,
          "variance" : 2196335.3957635337,
          "n" : 461,
          "max" : 23030.0,
          "min" : 44.0,
          "sum" : 179040.1330472104,
          "standardDeviation" : 1482.0038447195518
        }, {
          "mean" : 127.62736842105264,
          "variance" : 221970.3988274483,
          "n" : 475,
          "max" : 10294.0,
          "min" : 34.0,
          "sum" : 60623.0,
          "standardDeviation" : 471.13734603345586
        }, {
          "mean" : 100.72959183673466,
          "variance" : 3186.5251578892394,
          "n" : 392,
          "max" : 339.0,
          "min" : 35.0,
          "sum" : 39485.999999999985,
          "standardDeviation" : 56.44931494614651
        }, {
          "mean" : 122.880758807588,
          "variance" : 7047.290090726987,
          "n" : 369,
          "max" : 608.0,
          "min" : 35.0,
          "sum" : 45342.99999999997,
          "standardDeviation" : 83.94813929282165
        }, {
          "mean" : 123.11835748792267,
          "variance" : 7616.525909160025,
          "n" : 414,
          "max" : 735.0,
          "min" : 34.0,
          "sum" : 50970.999999999985,
          "standardDeviation" : 87.27270999092457
        }, {
          "mean" : 136.34398034398023,
          "variance" : 253523.7138984035,
          "n" : 407,
          "max" : 10165.0,
          "min" : 35.0,
          "sum" : 55491.999999999956,
          "standardDeviation" : 503.5113840802445
        }, {
          "mean" : 82.0881057268723,
          "variance" : 3291.1180480594394,
          "n" : 454,
          "max" : 466.0,
          "min" : 27.0,
          "sum" : 37268.00000000002,
          "standardDeviation" : 57.36826690827813
        }, {
          "mean" : 53.950471698113255,
          "variance" : 423.06373500156093,
          "n" : 424,
          "max" : 128.0,
          "min" : 27.0,
          "sum" : 22875.00000000002,
          "standardDeviation" : 20.568513193752263
        }, {
          "mean" : 57.89385474860337,
          "variance" : 601.7695687653003,
          "n" : 179,
          "max" : 138.0,
          "min" : 27.0,
          "sum" : 10363.000000000002,
          "standardDeviation" : 24.530992005324617
        } ],
        "21" : [ {
          "mean" : 254.63126252505003,
          "variance" : 697480.9561291259,
          "n" : 494,
          "max" : 15708.0,
          "min" : 35.0,
          "sum" : 125787.84368737471,
          "standardDeviation" : 835.1532530794129
        }, {
          "mean" : 84.36890951276104,
          "variance" : 1474.1449846220257,
          "n" : 431,
          "max" : 443.0,
          "min" : 33.0,
          "sum" : 36363.00000000001,
          "standardDeviation" : 38.394595773650565
        }, {
          "mean" : 116.5775401069519,
          "variance" : 109117.34919929468,
          "n" : 374,
          "max" : 6361.0,
          "min" : 33.0,
          "sum" : 43600.00000000001,
          "standardDeviation" : 330.3291528147261
        }, {
          "mean" : 145.5076923076923,
          "variance" : 14969.582202887088,
          "n" : 390,
          "max" : 826.0,
          "min" : 34.0,
          "sum" : 56748.0,
          "standardDeviation" : 122.35024398376608
        }, {
          "mean" : 168.0170731707317,
          "variance" : 226491.01437772083,
          "n" : 410,
          "max" : 9469.0,
          "min" : 34.0,
          "sum" : 68887.0,
          "standardDeviation" : 475.9107210157393
        }, {
          "mean" : 146.4079601990049,
          "variance" : 15346.571308048286,
          "n" : 402,
          "max" : 690.0,
          "min" : 35.0,
          "sum" : 58855.99999999996,
          "standardDeviation" : 123.8812790862618
        }, {
          "mean" : 106.05095541401273,
          "variance" : 217583.05271717074,
          "n" : 471,
          "max" : 10047.0,
          "min" : 27.0,
          "sum" : 49950.0,
          "standardDeviation" : 466.45798601500087
        }, {
          "mean" : 58.53066037735845,
          "variance" : 659.2851097283553,
          "n" : 424,
          "max" : 276.0,
          "min" : 27.0,
          "sum" : 24816.99999999998,
          "standardDeviation" : 25.676547854576466
        }, {
          "mean" : 62.608938547486034,
          "variance" : 585.3743016759773,
          "n" : 179,
          "max" : 232.0,
          "min" : 26.0,
          "sum" : 11207.0,
          "standardDeviation" : 24.19450974241837
        } ],
        "22" : [ {
          "mean" : 387.18407960199,
          "variance" : 1680821.452314488,
          "n" : 397,
          "max" : 18657.0,
          "min" : 65.0,
          "sum" : 153712.07960199003,
          "standardDeviation" : 1296.464983065292
        }, {
          "mean" : 131.94911937377705,
          "variance" : 9915.562111968065,
          "n" : 511,
          "max" : 705.0,
          "min" : 34.0,
          "sum" : 67426.00000000007,
          "standardDeviation" : 99.57691555761338
        }, {
          "mean" : 119.03693931398418,
          "variance" : 7030.416621295253,
          "n" : 379,
          "max" : 702.0,
          "min" : 35.0,
          "sum" : 45115.0,
          "standardDeviation" : 83.8475796984937
        }, {
          "mean" : 151.61417322834637,
          "variance" : 17103.9849564857,
          "n" : 381,
          "max" : 784.0,
          "min" : 34.0,
          "sum" : 57764.99999999997,
          "standardDeviation" : 130.78220428057367
        }, {
          "mean" : 154.2128712871287,
          "variance" : 17199.180379824582,
          "n" : 404,
          "max" : 984.0,
          "min" : 35.0,
          "sum" : 62302.0,
          "standardDeviation" : 131.14564567618928
        }, {
          "mean" : 134.88811188811187,
          "variance" : 11433.291190118298,
          "n" : 429,
          "max" : 599.0,
          "min" : 34.0,
          "sum" : 57866.99999999999,
          "standardDeviation" : 106.92656914966597
        }, {
          "mean" : 104.45454545454545,
          "variance" : 8389.278111410236,
          "n" : 440,
          "max" : 750.0,
          "min" : 28.0,
          "sum" : 45960.0,
          "standardDeviation" : 91.59300252426621
        }, {
          "mean" : 74.71777777777778,
          "variance" : 201518.38565206627,
          "n" : 450,
          "max" : 9564.0,
          "min" : 25.0,
          "sum" : 33623.0,
          "standardDeviation" : 448.907992412773
        }, {
          "mean" : 56.76630434782608,
          "variance" : 757.5789676882871,
          "n" : 184,
          "max" : 261.0,
          "min" : 25.0,
          "sum" : 10444.999999999998,
          "standardDeviation" : 27.52415244268726
        } ],
        "23" : [ {
          "mean" : 256.2176870748301,
          "variance" : 500814.9252319106,
          "n" : 436,
          "max" : 11909.0,
          "min" : 33.0,
          "sum" : 111710.91156462593,
          "standardDeviation" : 707.6827857394234
        }, {
          "mean" : 83.49782608695648,
          "variance" : 1091.1742872028046,
          "n" : 460,
          "max" : 337.0,
          "min" : 31.0,
          "sum" : 38408.99999999998,
          "standardDeviation" : 33.0329273180989
        }, {
          "mean" : 123.76666666666672,
          "variance" : 463577.58808911766,
          "n" : 390,
          "max" : 13496.0,
          "min" : 32.0,
          "sum" : 48269.00000000002,
          "standardDeviation" : 680.865323018523
        }, {
          "mean" : 129.77358490566036,
          "variance" : 9074.072921978586,
          "n" : 371,
          "max" : 628.0,
          "min" : 35.0,
          "sum" : 48145.99999999999,
          "standardDeviation" : 95.25792839432624
        }, {
          "mean" : 154.8743718592965,
          "variance" : 260855.94891333254,
          "n" : 398,
          "max" : 10150.0,
          "min" : 36.0,
          "sum" : 61640.00000000001,
          "standardDeviation" : 510.740588668389
        }, {
          "mean" : 119.75339366515841,
          "variance" : 7856.5943762120205,
          "n" : 442,
          "max" : 600.0,
          "min" : 35.0,
          "sum" : 52931.00000000002,
          "standardDeviation" : 88.63743213909133
        }, {
          "mean" : 85.52941176470591,
          "variance" : 3679.7825796985444,
          "n" : 442,
          "max" : 375.0,
          "min" : 26.0,
          "sum" : 37804.000000000015,
          "standardDeviation" : 60.66121149217632
        }, {
          "mean" : 82.50551876379689,
          "variance" : 210254.4850358474,
          "n" : 453,
          "max" : 9805.0,
          "min" : 27.0,
          "sum" : 37374.99999999999,
          "standardDeviation" : 458.53515136339047
        }, {
          "mean" : 57.94535519125682,
          "variance" : 604.1508436918274,
          "n" : 183,
          "max" : 128.0,
          "min" : 27.0,
          "sum" : 10603.999999999998,
          "standardDeviation" : 24.57948013469421
        } ],
        "24" : [ {
          "mean" : 276.17481203007526,
          "variance" : 637380.0729613585,
          "n" : 527,
          "max" : 14003.0,
          "min" : 45.0,
          "sum" : 145544.12593984965,
          "standardDeviation" : 798.3608663764517
        }, {
          "mean" : 137.4237726098192,
          "variance" : 11668.094562932609,
          "n" : 387,
          "max" : 839.0,
          "min" : 35.0,
          "sum" : 53183.00000000003,
          "standardDeviation" : 108.01895464654622
        }, {
          "mean" : 118.90782122905031,
          "variance" : 6433.854224371311,
          "n" : 358,
          "max" : 494.0,
          "min" : 35.0,
          "sum" : 42569.000000000015,
          "standardDeviation" : 80.2113098282986
        }, {
          "mean" : 142.19512195121945,
          "variance" : 12210.065084835627,
          "n" : 369,
          "max" : 750.0,
          "min" : 34.0,
          "sum" : 52469.99999999998,
          "standardDeviation" : 110.49916327663132
        }, {
          "mean" : 165.56910569105702,
          "variance" : 18911.131760339347,
          "n" : 369,
          "max" : 1000.0,
          "min" : 35.0,
          "sum" : 61095.00000000004,
          "standardDeviation" : 137.51775071000597
        }, {
          "mean" : 146.5158371040722,
          "variance" : 12245.470270159349,
          "n" : 442,
          "max" : 623.0,
          "min" : 35.0,
          "sum" : 64759.99999999991,
          "standardDeviation" : 110.65925298030594
        }, {
          "mean" : 136.9778869778869,
          "variance" : 243332.61281030232,
          "n" : 407,
          "max" : 9874.0,
          "min" : 28.0,
          "sum" : 55749.99999999996,
          "standardDeviation" : 493.287555904568
        }, {
          "mean" : 59.044554455445535,
          "variance" : 1110.5687295776718,
          "n" : 404,
          "max" : 369.0,
          "min" : 26.0,
          "sum" : 23853.999999999996,
          "standardDeviation" : 33.32519661723951
        }, {
          "mean" : 58.72756410256412,
          "variance" : 1005.0670191277109,
          "n" : 312,
          "max" : 356.0,
          "min" : 27.0,
          "sum" : 18323.000000000007,
          "standardDeviation" : 31.702791976854513
        } ],
        "25" : [ {
          "mean" : 327.8289786223277,
          "variance" : 976879.7087772881,
          "n" : 416,
          "max" : 13800.0,
          "min" : 43.0,
          "sum" : 136376.85510688834,
          "standardDeviation" : 988.3722521283609
        }, {
          "mean" : 115.15822784810138,
          "variance" : 5528.425228142477,
          "n" : 474,
          "max" : 606.0,
          "min" : 35.0,
          "sum" : 54585.00000000005,
          "standardDeviation" : 74.35338074453963
        }, {
          "mean" : 99.90379746835448,
          "variance" : 4943.092244425884,
          "n" : 395,
          "max" : 578.0,
          "min" : 35.0,
          "sum" : 39462.00000000002,
          "standardDeviation" : 70.30712797736716
        }, {
          "mean" : 104.92171717171728,
          "variance" : 4258.6292993223415,
          "n" : 396,
          "max" : 474.0,
          "min" : 35.0,
          "sum" : 41549.000000000044,
          "standardDeviation" : 65.25817419543962
        }, {
          "mean" : 130.3155080213903,
          "variance" : 7933.010107381962,
          "n" : 374,
          "max" : 481.0,
          "min" : 37.0,
          "sum" : 48737.99999999996,
          "standardDeviation" : 89.06744695668537
        }, {
          "mean" : 120.73094170403594,
          "variance" : 7126.821826976368,
          "n" : 446,
          "max" : 623.0,
          "min" : 34.0,
          "sum" : 53846.00000000003,
          "standardDeviation" : 84.4205059625703
        }, {
          "mean" : 108.11581291759474,
          "variance" : 239936.07137885774,
          "n" : 449,
          "max" : 10364.0,
          "min" : 27.0,
          "sum" : 48544.00000000004,
          "standardDeviation" : 489.83269733538384
        }, {
          "mean" : 55.316143497757835,
          "variance" : 727.5425253186885,
          "n" : 446,
          "max" : 281.0,
          "min" : 28.0,
          "sum" : 24670.999999999993,
          "standardDeviation" : 26.972996224347945
        }, {
          "mean" : 57.74860335195531,
          "variance" : 415.02071433055033,
          "n" : 179,
          "max" : 105.0,
          "min" : 27.0,
          "sum" : 10337.0,
          "standardDeviation" : 20.372057194366757
        } ],
        "26" : [ {
          "mean" : 257.04918032786884,
          "variance" : 530057.7881307438,
          "n" : 483,
          "max" : 12596.0,
          "min" : 38.0,
          "sum" : 124154.75409836065,
          "standardDeviation" : 728.0506768973872
        }, {
          "mean" : 81.58004640371227,
          "variance" : 1386.0953218583056,
          "n" : 431,
          "max" : 549.0,
          "min" : 31.0,
          "sum" : 35160.99999999999,
          "standardDeviation" : 37.23030112500174
        }, {
          "mean" : 124.03199999999998,
          "variance" : 363289.6460320859,
          "n" : 375,
          "max" : 11709.0,
          "min" : 31.0,
          "sum" : 46511.99999999999,
          "standardDeviation" : 602.7351375455772
        }, {
          "mean" : 149.60103626943004,
          "variance" : 18474.219635286994,
          "n" : 386,
          "max" : 753.0,
          "min" : 34.0,
          "sum" : 57745.99999999999,
          "standardDeviation" : 135.91990154236794
        }, {
          "mean" : 164.15544041450778,
          "variance" : 22235.8926586367,
          "n" : 386,
          "max" : 884.0,
          "min" : 36.0,
          "sum" : 63364.0,
          "standardDeviation" : 149.11704348811608
        }, {
          "mean" : 133.6863636363636,
          "variance" : 12686.010747566781,
          "n" : 440,
          "max" : 685.0,
          "min" : 34.0,
          "sum" : 58821.999999999985,
          "standardDeviation" : 112.63219232336189
        }, {
          "mean" : 80.89639639639636,
          "variance" : 5391.501657413622,
          "n" : 444,
          "max" : 691.0,
          "min" : 28.0,
          "sum" : 35917.99999999998,
          "standardDeviation" : 73.42684561802734
        }, {
          "mean" : 55.44345898004436,
          "variance" : 482.2562404533137,
          "n" : 451,
          "max" : 245.0,
          "min" : 27.0,
          "sum" : 25005.000000000007,
          "standardDeviation" : 21.960333341124713
        }, {
          "mean" : 62.67039106145247,
          "variance" : 912.5705228799193,
          "n" : 179,
          "max" : 270.0,
          "min" : 28.0,
          "sum" : 11217.999999999993,
          "standardDeviation" : 30.208782214447496
        } ],
        "27" : [ {
          "mean" : 457.4031531531536,
          "variance" : 1.1440198385633374E7,
          "n" : 439,
          "max" : 70064.0,
          "min" : 46.0,
          "sum" : 200799.98423423443,
          "standardDeviation" : 3382.336231901461
        }, {
          "mean" : 131.19375000000008,
          "variance" : 7597.697246868478,
          "n" : 480,
          "max" : 602.0,
          "min" : 34.0,
          "sum" : 62973.00000000004,
          "standardDeviation" : 87.16477067524745
        }, {
          "mean" : 160.5901639344263,
          "variance" : 600116.741163261,
          "n" : 366,
          "max" : 14854.0,
          "min" : 35.0,
          "sum" : 58776.00000000003,
          "standardDeviation" : 774.6720216732117
        }, {
          "mean" : 141.05449591280654,
          "variance" : 12964.997022081267,
          "n" : 367,
          "max" : 618.0,
          "min" : 35.0,
          "sum" : 51767.0,
          "standardDeviation" : 113.86394083326498
        }, {
          "mean" : 158.72456575682372,
          "variance" : 19229.04086268411,
          "n" : 403,
          "max" : 794.0,
          "min" : 34.0,
          "sum" : 63965.999999999956,
          "standardDeviation" : 138.66881719652804
        }, {
          "mean" : 133.78032036613277,
          "variance" : 12380.387409988889,
          "n" : 437,
          "max" : 652.0,
          "min" : 35.0,
          "sum" : 58462.00000000002,
          "standardDeviation" : 111.26718927873073
        }, {
          "mean" : 88.6009174311927,
          "variance" : 7749.173700305815,
          "n" : 436,
          "max" : 625.0,
          "min" : 26.0,
          "sum" : 38630.000000000015,
          "standardDeviation" : 88.02939111629601
        }, {
          "mean" : 59.02188183807439,
          "variance" : 584.490748205306,
          "n" : 457,
          "max" : 240.0,
          "min" : 26.0,
          "sum" : 26972.999999999996,
          "standardDeviation" : 24.17624346761312
        }, {
          "mean" : 58.84736842105265,
          "variance" : 729.1353104984689,
          "n" : 190,
          "max" : 248.0,
          "min" : 27.0,
          "sum" : 11181.000000000004,
          "standardDeviation" : 27.00250563370868
        } ],
        "28" : [ {
          "mean" : 326.95131845841814,
          "variance" : 777432.2252675671,
          "n" : 488,
          "max" : 13243.0,
          "min" : 73.0,
          "sum" : 159552.24340770804,
          "standardDeviation" : 881.7211720649375
        }, {
          "mean" : 171.35835351089585,
          "variance" : 242246.33243611746,
          "n" : 413,
          "max" : 9879.0,
          "min" : 38.0,
          "sum" : 70770.99999999999,
          "standardDeviation" : 492.1852623109691
        }, {
          "mean" : 164.56712328767134,
          "variance" : 259109.79561944897,
          "n" : 365,
          "max" : 9659.0,
          "min" : 35.0,
          "sum" : 60067.00000000004,
          "standardDeviation" : 509.0282856771802
        }, {
          "mean" : 128.00797872340422,
          "variance" : 8495.570602836875,
          "n" : 376,
          "max" : 513.0,
          "min" : 35.0,
          "sum" : 48130.999999999985,
          "standardDeviation" : 92.17141966378122
        }, {
          "mean" : 162.70108695652158,
          "variance" : 17102.744195000592,
          "n" : 368,
          "max" : 861.0,
          "min" : 35.0,
          "sum" : 59873.99999999994,
          "standardDeviation" : 130.7774605771216
        }, {
          "mean" : 155.427293064877,
          "variance" : 15965.662302745748,
          "n" : 447,
          "max" : 718.0,
          "min" : 34.0,
          "sum" : 69476.00000000001,
          "standardDeviation" : 126.3553018386872
        }, {
          "mean" : 130.12686567164175,
          "variance" : 253004.011296386,
          "n" : 402,
          "max" : 10012.0,
          "min" : 27.0,
          "sum" : 52310.999999999985,
          "standardDeviation" : 502.9950410256407
        }, {
          "mean" : 78.43764172335604,
          "variance" : 206236.91030715322,
          "n" : 441,
          "max" : 9578.0,
          "min" : 27.0,
          "sum" : 34591.000000000015,
          "standardDeviation" : 454.133141608442
        }, {
          "mean" : 57.35636363636364,
          "variance" : 550.8725414731254,
          "n" : 275,
          "max" : 132.0,
          "min" : 27.0,
          "sum" : 15773.0,
          "standardDeviation" : 23.470674073684492
        } ],
        "29" : [ {
          "mean" : 344.393258426966,
          "variance" : 968158.797702197,
          "n" : 440,
          "max" : 14761.0,
          "min" : 54.0,
          "sum" : 151533.03370786505,
          "standardDeviation" : 983.9506073488633
        }, {
          "mean" : 136.91333333333316,
          "variance" : 10579.620534521157,
          "n" : 450,
          "max" : 670.0,
          "min" : 35.0,
          "sum" : 61610.99999999992,
          "standardDeviation" : 102.8572823601769
        }, {
          "mean" : 113.22666666666669,
          "variance" : 5139.908377896618,
          "n" : 375,
          "max" : 510.0,
          "min" : 35.0,
          "sum" : 42460.00000000001,
          "standardDeviation" : 71.69315433077706
        }, {
          "mean" : 154.34574468085108,
          "variance" : 90030.36547517731,
          "n" : 376,
          "max" : 5493.0,
          "min" : 35.0,
          "sum" : 58034.00000000001,
          "standardDeviation" : 300.0506048572096
        }, {
          "mean" : 155.130081300813,
          "variance" : 16584.537380699898,
          "n" : 369,
          "max" : 700.0,
          "min" : 34.0,
          "sum" : 57243.0,
          "standardDeviation" : 128.78096668646302
        }, {
          "mean" : 128.8984547461367,
          "variance" : 10073.179931235236,
          "n" : 453,
          "max" : 623.0,
          "min" : 34.0,
          "sum" : 58390.99999999993,
          "standardDeviation" : 100.36523268161757
        }, {
          "mean" : 111.30303030303038,
          "variance" : 10191.128193325669,
          "n" : 396,
          "max" : 681.0,
          "min" : 28.0,
          "sum" : 44076.00000000003,
          "standardDeviation" : 100.95111784089202
        }, {
          "mean" : 53.33483146067418,
          "variance" : 492.0115092620711,
          "n" : 445,
          "max" : 255.0,
          "min" : 26.0,
          "sum" : 23734.00000000001,
          "standardDeviation" : 22.181332450104776
        }, {
          "mean" : 56.7232472324723,
          "variance" : 512.6971983053164,
          "n" : 271,
          "max" : 227.0,
          "min" : 27.0,
          "sum" : 15371.999999999995,
          "standardDeviation" : 22.64281780842032
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
      "meanOld" : 135.23380673845642,
      "meanCurrent" : 1858.250328407225,
      "deviationOld" : 18.001611394693985,
      "deviationCurrent" : 400.15061651533733,
      "vms" : 29,
      "callsOld" : 104253,
      "calls" : 1050,
      "tvalue" : -23.165439470523552,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 79.4375676176367,
    "inVMDeviation" : 1001.9881536731027,
    "ess" : 1,
    "values" : [ 1951.142857142857, 1706.8428571428572, 1680.9285714285713, 1894.1214285714286, 1371.2428571428572, 1656.4285714285716, 1475.442857142857, 2633.0071428571428, 1804.2761904761905, 1811.142857142857, 4502.428571428572, 1528.442857142857, 2867.12380952381, 1714.5833333333333, 2105.0785714285716, 1796.4642857142858, 2114.0142857142855, 1401.7, 1852.3428571428572, 1455.7, 2337.6761904761906, 2374.1214285714286, 1733.1571428571428, 1521.0, 1832.2261904761904, 1866.142857142857, 1335.2142857142858, 1775.4285714285713, 1569.2428571428572, 2725.023809523809 ],
    "valuesPredecessor" : [ 117.75669837531511, 133.52785246190572, 180.6703241118445, 119.18354649020202, 114.05636731804489, 135.4717404791763, 133.95748368746865, 115.11271520235546, 121.91626982285133, 118.71298767882247, 166.26220953008593, 137.4702329486525, 145.57107527770881, 127.25260128739117, 114.65812092994543, 143.42264057285635, 123.40426558752995, 143.59798024517445, 123.14964226330602, 131.9856370008888, 145.50872540835758, 130.58180662235543, 143.37047777162886, 191.58564355939833, 136.53294071648497, 129.04692038735425, 129.7664994952812, 132.187237744688, 132.62434787899068, 138.6692112976286 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 2780.6000000000004,
          "variance" : 9277250.266666668,
          "n" : 5,
          "max" : 11180.0,
          "min" : 910.0,
          "sum" : 13903.000000000002,
          "standardDeviation" : 3045.857886813938
        }, {
          "mean" : 2335.7,
          "variance" : 6943836.01111111,
          "n" : 10,
          "max" : 9437.0,
          "min" : 561.0,
          "sum" : 23357.0,
          "standardDeviation" : 2635.1159388366787
        }, {
          "mean" : 2084.8,
          "variance" : 1.1095746177777778E7,
          "n" : 10,
          "max" : 11415.0,
          "min" : 406.0,
          "sum" : 20848.0,
          "standardDeviation" : 3331.0277960079798
        }, {
          "mean" : 1018.375,
          "variance" : 291351.9821428572,
          "n" : 8,
          "max" : 1675.0,
          "min" : 400.0,
          "sum" : 8147.0,
          "standardDeviation" : 539.770304984312
        }, {
          "mean" : 1017.5,
          "variance" : 828184.4999999999,
          "n" : 2,
          "max" : 1661.0,
          "min" : 374.0,
          "sum" : 2035.0,
          "standardDeviation" : 910.0464273870866
        } ],
        "1" : [ {
          "mean" : 2336.5,
          "variance" : 5414902.09090909,
          "n" : 7,
          "max" : 9399.0,
          "min" : 776.0,
          "sum" : 16355.5,
          "standardDeviation" : 2326.994218065247
        }, {
          "mean" : 2290.875,
          "variance" : 7346389.8392857155,
          "n" : 8,
          "max" : 8775.0,
          "min" : 516.0,
          "sum" : 18327.0,
          "standardDeviation" : 2710.4224466465953
        }, {
          "mean" : 1219.4,
          "variance" : 451002.48888888885,
          "n" : 10,
          "max" : 2009.0,
          "min" : 422.0,
          "sum" : 12194.0,
          "standardDeviation" : 671.5671886631217
        }, {
          "mean" : 1279.125,
          "variance" : 509833.26785714284,
          "n" : 8,
          "max" : 2183.0,
          "min" : 351.0,
          "sum" : 10233.0,
          "standardDeviation" : 714.0260974622306
        }, {
          "mean" : 1315.0,
          "variance" : 1299272.0000000002,
          "n" : 2,
          "max" : 2121.0,
          "min" : 509.0,
          "sum" : 2630.0,
          "standardDeviation" : 1139.8561312727147
        } ],
        "2" : [ {
          "mean" : 2656.2999999999997,
          "variance" : 7956506.233333333,
          "n" : 5,
          "max" : 10368.0,
          "min" : 808.0,
          "sum" : 13281.499999999998,
          "standardDeviation" : 2820.727961596675
        }, {
          "mean" : 1335.4,
          "variance" : 489745.8222222222,
          "n" : 10,
          "max" : 2596.0,
          "min" : 458.0,
          "sum" : 13354.0,
          "standardDeviation" : 699.8184208937503
        }, {
          "mean" : 2080.0,
          "variance" : 1.1731752E7,
          "n" : 10,
          "max" : 11708.0,
          "min" : 366.0,
          "sum" : 20800.0,
          "standardDeviation" : 3425.1645215960066
        }, {
          "mean" : 1080.25,
          "variance" : 346532.5,
          "n" : 8,
          "max" : 1779.0,
          "min" : 460.0,
          "sum" : 8642.0,
          "standardDeviation" : 588.6701113526998
        }, {
          "mean" : 1377.5,
          "variance" : 657804.4999999999,
          "n" : 2,
          "max" : 1951.0,
          "min" : 804.0,
          "sum" : 2755.0,
          "standardDeviation" : 811.05147802097
        } ],
        "3" : [ {
          "mean" : 2349.7499999999995,
          "variance" : 5868764.386363636,
          "n" : 7,
          "max" : 9702.0,
          "min" : 775.0,
          "sum" : 16448.249999999996,
          "standardDeviation" : 2422.5532783333447
        }, {
          "mean" : 3527.0000000000005,
          "variance" : 1.844155285714286E7,
          "n" : 8,
          "max" : 12141.0,
          "min" : 613.0,
          "sum" : 28216.000000000004,
          "standardDeviation" : 4294.362916329133
        }, {
          "mean" : 1070.1000000000001,
          "variance" : 503130.7666666667,
          "n" : 10,
          "max" : 1939.0,
          "min" : 365.0,
          "sum" : 10701.000000000002,
          "standardDeviation" : 709.3171129097808
        }, {
          "mean" : 1131.375,
          "variance" : 462101.9821428572,
          "n" : 8,
          "max" : 1876.0,
          "min" : 447.0,
          "sum" : 9051.0,
          "standardDeviation" : 679.7808339037349
        }, {
          "mean" : 939.0,
          "variance" : 587528.0000000001,
          "n" : 2,
          "max" : 1481.0,
          "min" : 397.0,
          "sum" : 1878.0,
          "standardDeviation" : 766.5037508062176
        } ],
        "4" : [ {
          "mean" : 2757.3,
          "variance" : 1.011962201111111E7,
          "n" : 5,
          "max" : 11592.0,
          "min" : 746.0,
          "sum" : 13786.5,
          "standardDeviation" : 3181.1353336680145
        }, {
          "mean" : 1391.1000000000001,
          "variance" : 474344.1000000001,
          "n" : 10,
          "max" : 2504.0,
          "min" : 495.0,
          "sum" : 13911.000000000002,
          "standardDeviation" : 688.7264333536212
        }, {
          "mean" : 1030.9,
          "variance" : 247594.98888888894,
          "n" : 10,
          "max" : 1585.0,
          "min" : 413.0,
          "sum" : 10309.0,
          "standardDeviation" : 497.58917682048605
        }, {
          "mean" : 1008.125,
          "variance" : 335743.55357142864,
          "n" : 8,
          "max" : 1854.0,
          "min" : 365.0,
          "sum" : 8065.0,
          "standardDeviation" : 579.4338215632814
        }, {
          "mean" : 961.0,
          "variance" : 640712.0,
          "n" : 2,
          "max" : 1527.0,
          "min" : 395.0,
          "sum" : 1922.0,
          "standardDeviation" : 800.4448763031718
        } ],
        "5" : [ {
          "mean" : 2626.6,
          "variance" : 7865026.266666666,
          "n" : 5,
          "max" : 10440.0,
          "min" : 1049.0,
          "sum" : 13133.0,
          "standardDeviation" : 2804.465415487712
        }, {
          "mean" : 1227.8,
          "variance" : 440437.7333333333,
          "n" : 10,
          "max" : 2296.0,
          "min" : 467.0,
          "sum" : 12278.0,
          "standardDeviation" : 663.6548299630865
        }, {
          "mean" : 2147.9000000000005,
          "variance" : 1.1484474988888891E7,
          "n" : 10,
          "max" : 11621.0,
          "min" : 387.0,
          "sum" : 21479.000000000007,
          "standardDeviation" : 3388.8751804822928
        }, {
          "mean" : 1101.125,
          "variance" : 331539.83928571426,
          "n" : 8,
          "max" : 1842.0,
          "min" : 524.0,
          "sum" : 8809.0,
          "standardDeviation" : 575.7949628867157
        }, {
          "mean" : 1138.0,
          "variance" : 811538.0,
          "n" : 2,
          "max" : 1775.0,
          "min" : 501.0,
          "sum" : 2276.0,
          "standardDeviation" : 900.8540392316615
        } ],
        "6" : [ {
          "mean" : 2621.1000000000004,
          "variance" : 8980947.433333334,
          "n" : 5,
          "max" : 10889.0,
          "min" : 965.0,
          "sum" : 13105.500000000002,
          "standardDeviation" : 2996.8228898841076
        }, {
          "mean" : 1499.7,
          "variance" : 625780.2333333333,
          "n" : 10,
          "max" : 2615.0,
          "min" : 462.0,
          "sum" : 14997.0,
          "standardDeviation" : 791.0627240196148
        }, {
          "mean" : 1392.0,
          "variance" : 724380.0,
          "n" : 8,
          "max" : 2560.0,
          "min" : 470.0,
          "sum" : 11136.0,
          "standardDeviation" : 851.1051638898685
        }, {
          "mean" : 1015.8000000000001,
          "variance" : 355241.73333333334,
          "n" : 10,
          "max" : 1797.0,
          "min" : 367.0,
          "sum" : 10158.0,
          "standardDeviation" : 596.0215879759166
        }, {
          "mean" : 1122.0,
          "variance" : 506017.99999999994,
          "n" : 2,
          "max" : 1625.0,
          "min" : 619.0,
          "sum" : 2244.0,
          "standardDeviation" : 711.3494218736668
        } ],
        "7" : [ {
          "mean" : 2913.75,
          "variance" : 9979790.022727272,
          "n" : 7,
          "max" : 12388.0,
          "min" : 1034.0,
          "sum" : 20396.25,
          "standardDeviation" : 3159.080566039314
        }, {
          "mean" : 3685.875,
          "variance" : 2.0441456410714295E7,
          "n" : 8,
          "max" : 11907.0,
          "min" : 581.0,
          "sum" : 29487.0,
          "standardDeviation" : 4521.222888855878
        }, {
          "mean" : 3079.3,
          "variance" : 1.8645829122222222E7,
          "n" : 10,
          "max" : 11447.0,
          "min" : 483.0,
          "sum" : 30793.0,
          "standardDeviation" : 4318.081648396916
        }, {
          "mean" : 1160.0,
          "variance" : 352968.5714285715,
          "n" : 8,
          "max" : 1777.0,
          "min" : 402.0,
          "sum" : 9280.0,
          "standardDeviation" : 594.1115816314066
        }, {
          "mean" : 1099.5,
          "variance" : 678612.4999999999,
          "n" : 2,
          "max" : 1682.0,
          "min" : 517.0,
          "sum" : 2199.0,
          "standardDeviation" : 823.7794000823278
        } ],
        "8" : [ {
          "mean" : 2679.6666666666674,
          "variance" : 6619713.515151516,
          "n" : 7,
          "max" : 10511.0,
          "min" : 924.0,
          "sum" : 18757.66666666667,
          "standardDeviation" : 2572.8803927022173
        }, {
          "mean" : 1362.125,
          "variance" : 463644.98214285716,
          "n" : 8,
          "max" : 2364.0,
          "min" : 573.0,
          "sum" : 10897.0,
          "standardDeviation" : 680.914812691615
        }, {
          "mean" : 2146.9,
          "variance" : 1.0872335877777778E7,
          "n" : 10,
          "max" : 11386.0,
          "min" : 526.0,
          "sum" : 21469.0,
          "standardDeviation" : 3297.3225316577355
        }, {
          "mean" : 1235.3749999999998,
          "variance" : 571022.2678571428,
          "n" : 8,
          "max" : 2263.0,
          "min" : 455.0,
          "sum" : 9882.999999999998,
          "standardDeviation" : 755.6601536783204
        }, {
          "mean" : 1071.5,
          "variance" : 489060.49999999994,
          "n" : 2,
          "max" : 1566.0,
          "min" : 577.0,
          "sum" : 2143.0,
          "standardDeviation" : 699.3286065934955
        } ],
        "9" : [ {
          "mean" : 2538.6,
          "variance" : 8327740.711111111,
          "n" : 5,
          "max" : 10507.0,
          "min" : 918.0,
          "sum" : 12693.0,
          "standardDeviation" : 2885.7825127876686
        }, {
          "mean" : 2102.2000000000003,
          "variance" : 5037962.177777777,
          "n" : 10,
          "max" : 8160.0,
          "min" : 490.0,
          "sum" : 21022.000000000004,
          "standardDeviation" : 2244.5405270963092
        }, {
          "mean" : 2223.625,
          "variance" : 1.411846741071429E7,
          "n" : 8,
          "max" : 11428.0,
          "min" : 352.0,
          "sum" : 17789.0,
          "standardDeviation" : 3757.454911334837
        }, {
          "mean" : 1000.9999999999999,
          "variance" : 368459.3333333333,
          "n" : 10,
          "max" : 2052.0,
          "min" : 400.0,
          "sum" : 10009.999999999998,
          "standardDeviation" : 607.008511747021
        }, {
          "mean" : 938.0,
          "variance" : 572450.0,
          "n" : 2,
          "max" : 1473.0,
          "min" : 403.0,
          "sum" : 1876.0,
          "standardDeviation" : 756.6042558696058
        } ],
        "10" : [ {
          "mean" : 2967.2000000000003,
          "variance" : 1.3617974400000002E7,
          "n" : 5,
          "max" : 13300.0,
          "min" : 928.0,
          "sum" : 14836.000000000002,
          "standardDeviation" : 3690.253974999553
        }, {
          "mean" : 9649.7,
          "variance" : 3.7206307867777777E8,
          "n" : 10,
          "max" : 63533.0,
          "min" : 689.0,
          "sum" : 96497.0,
          "standardDeviation" : 19288.936691217008
        }, {
          "mean" : 4080.75,
          "variance" : 3.7664271642857134E7,
          "n" : 8,
          "max" : 16255.0,
          "min" : 440.0,
          "sum" : 32646.0,
          "standardDeviation" : 6137.1224236491435
        }, {
          "mean" : 1111.3,
          "variance" : 339993.78888888884,
          "n" : 10,
          "max" : 2023.0,
          "min" : 449.0,
          "sum" : 11113.0,
          "standardDeviation" : 583.0898634763674
        }, {
          "mean" : 1246.5,
          "variance" : 1012464.5000000001,
          "n" : 2,
          "max" : 1958.0,
          "min" : 535.0,
          "sum" : 2493.0,
          "standardDeviation" : 1006.2129496284572
        } ],
        "11" : [ {
          "mean" : 2607.1000000000004,
          "variance" : 6679221.433333334,
          "n" : 5,
          "max" : 9669.0,
          "min" : 1042.0,
          "sum" : 13035.500000000002,
          "standardDeviation" : 2584.418974031365
        }, {
          "mean" : 1687.3000000000002,
          "variance" : 545822.011111111,
          "n" : 10,
          "max" : 2697.0,
          "min" : 488.0,
          "sum" : 16873.0,
          "standardDeviation" : 738.797679416436
        }, {
          "mean" : 1160.9,
          "variance" : 564898.5444444445,
          "n" : 10,
          "max" : 2539.0,
          "min" : 439.0,
          "sum" : 11609.0,
          "standardDeviation" : 751.5973286570705
        }, {
          "mean" : 1209.0,
          "variance" : 505852.0,
          "n" : 8,
          "max" : 2078.0,
          "min" : 432.0,
          "sum" : 9672.0,
          "standardDeviation" : 711.2327326550712
        }, {
          "mean" : 1153.0,
          "variance" : 753991.9999999999,
          "n" : 2,
          "max" : 1767.0,
          "min" : 539.0,
          "sum" : 2306.0,
          "standardDeviation" : 868.3271272970803
        } ],
        "12" : [ {
          "mean" : 2463.3333333333335,
          "variance" : 7421735.878787878,
          "n" : 7,
          "max" : 10832.0,
          "min" : 779.0,
          "sum" : 17243.333333333336,
          "standardDeviation" : 2724.2863063172854
        }, {
          "mean" : 3167.6000000000004,
          "variance" : 1.6712176933333328E7,
          "n" : 10,
          "max" : 11755.0,
          "min" : 409.0,
          "sum" : 31676.000000000004,
          "standardDeviation" : 4088.0529513856995
        }, {
          "mean" : 3588.5,
          "variance" : 2.3739148000000004E7,
          "n" : 8,
          "max" : 11652.0,
          "min" : 408.0,
          "sum" : 28708.0,
          "standardDeviation" : 4872.283653483241
        }, {
          "mean" : 2550.625,
          "variance" : 1.5717308553571433E7,
          "n" : 8,
          "max" : 12246.0,
          "min" : 567.0,
          "sum" : 20405.0,
          "standardDeviation" : 3964.5060920083642
        }, {
          "mean" : 1158.5,
          "variance" : 660100.5,
          "n" : 2,
          "max" : 1733.0,
          "min" : 584.0,
          "sum" : 2317.0,
          "standardDeviation" : 812.4656915833431
        } ],
        "13" : [ {
          "mean" : 2614.916666666666,
          "variance" : 8184489.537878788,
          "n" : 7,
          "max" : 11353.0,
          "min" : 772.0,
          "sum" : 18304.416666666664,
          "standardDeviation" : 2860.854686606572
        }, {
          "mean" : 2381.625,
          "variance" : 9360955.410714285,
          "n" : 8,
          "max" : 9826.0,
          "min" : 360.0,
          "sum" : 19053.0,
          "standardDeviation" : 3059.5678470519797
        }, {
          "mean" : 1114.0,
          "variance" : 501904.8888888889,
          "n" : 10,
          "max" : 2181.0,
          "min" : 384.0,
          "sum" : 11140.0,
          "standardDeviation" : 708.452460570848
        }, {
          "mean" : 1117.5,
          "variance" : 419670.5714285715,
          "n" : 8,
          "max" : 1823.0,
          "min" : 373.0,
          "sum" : 8940.0,
          "standardDeviation" : 647.8198603227378
        }, {
          "mean" : 1286.5,
          "variance" : 1052700.5,
          "n" : 2,
          "max" : 2012.0,
          "min" : 561.0,
          "sum" : 2573.0,
          "standardDeviation" : 1026.0119395016804
        } ],
        "14" : [ {
          "mean" : 3107.2500000000005,
          "variance" : 7364248.204545457,
          "n" : 7,
          "max" : 10851.0,
          "min" : 1087.0,
          "sum" : 21750.750000000004,
          "standardDeviation" : 2713.7148347874463
        }, {
          "mean" : 1156.125,
          "variance" : 326284.12499999994,
          "n" : 8,
          "max" : 1843.0,
          "min" : 564.0,
          "sum" : 9249.0,
          "standardDeviation" : 571.2128543721683
        }, {
          "mean" : 2227.1000000000004,
          "variance" : 1.1268732544444446E7,
          "n" : 10,
          "max" : 11612.0,
          "min" : 493.0,
          "sum" : 22271.000000000004,
          "standardDeviation" : 3356.89328761646
        }, {
          "mean" : 2274.875,
          "variance" : 1.4534176982142862E7,
          "n" : 8,
          "max" : 11592.0,
          "min" : 335.0,
          "sum" : 18199.0,
          "standardDeviation" : 3812.371569265365
        }, {
          "mean" : 1104.0,
          "variance" : 949442.0,
          "n" : 2,
          "max" : 1793.0,
          "min" : 415.0,
          "sum" : 2208.0,
          "standardDeviation" : 974.3931444750625
        } ],
        "15" : [ {
          "mean" : 3112.75,
          "variance" : 1.341221992857143E7,
          "n" : 3,
          "max" : 12063.0,
          "min" : 1016.0,
          "sum" : 9338.25,
          "standardDeviation" : 3662.269778234726
        }, {
          "mean" : 2616.5,
          "variance" : 1.1468046272727272E7,
          "n" : 12,
          "max" : 13063.0,
          "min" : 388.0,
          "sum" : 31398.0,
          "standardDeviation" : 3386.450394251667
        }, {
          "mean" : 1111.5,
          "variance" : 342407.71428571426,
          "n" : 8,
          "max" : 1944.0,
          "min" : 424.0,
          "sum" : 8892.0,
          "standardDeviation" : 585.1561452174234
        }, {
          "mean" : 1091.0,
          "variance" : 448939.99999999994,
          "n" : 10,
          "max" : 2022.0,
          "min" : 373.0,
          "sum" : 10910.0,
          "standardDeviation" : 670.0298500813228
        }, {
          "mean" : 1169.0,
          "variance" : 761378.0,
          "n" : 2,
          "max" : 1786.0,
          "min" : 552.0,
          "sum" : 2338.0,
          "standardDeviation" : 872.5697679841996
        } ],
        "16" : [ {
          "mean" : 2860.7,
          "variance" : 9724873.788888888,
          "n" : 5,
          "max" : 11458.0,
          "min" : 871.0,
          "sum" : 14303.5,
          "standardDeviation" : 3118.472989924538
        }, {
          "mean" : 2469.6,
          "variance" : 8991012.933333332,
          "n" : 10,
          "max" : 10701.0,
          "min" : 482.0,
          "sum" : 24696.0,
          "standardDeviation" : 2998.501781445749
        }, {
          "mean" : 2262.2000000000003,
          "variance" : 1.2589337955555554E7,
          "n" : 10,
          "max" : 12172.0,
          "min" : 410.0,
          "sum" : 22622.000000000004,
          "standardDeviation" : 3548.1457066410835
        }, {
          "mean" : 1231.0,
          "variance" : 434266.5714285714,
          "n" : 8,
          "max" : 1915.0,
          "min" : 382.0,
          "sum" : 9848.0,
          "standardDeviation" : 658.9890525862864
        }, {
          "mean" : 1260.5,
          "variance" : 1494720.5,
          "n" : 2,
          "max" : 2125.0,
          "min" : 396.0,
          "sum" : 2521.0,
          "standardDeviation" : 1222.5876246715407
        } ],
        "17" : [ {
          "mean" : 2528.9,
          "variance" : 6642502.3222222235,
          "n" : 5,
          "max" : 9464.0,
          "min" : 877.0,
          "sum" : 12644.5,
          "standardDeviation" : 2577.3052442856324
        }, {
          "mean" : 1301.5000000000002,
          "variance" : 442877.1666666668,
          "n" : 10,
          "max" : 2339.0,
          "min" : 571.0,
          "sum" : 13015.000000000002,
          "standardDeviation" : 665.4901702254263
        }, {
          "mean" : 1143.0000000000002,
          "variance" : 413528.85714285716,
          "n" : 8,
          "max" : 1973.0,
          "min" : 489.0,
          "sum" : 9144.000000000002,
          "standardDeviation" : 643.0620943134941
        }, {
          "mean" : 1107.0,
          "variance" : 461115.99999999994,
          "n" : 10,
          "max" : 1985.0,
          "min" : 383.0,
          "sum" : 11070.0,
          "standardDeviation" : 679.0552260309908
        }, {
          "mean" : 1593.0,
          "variance" : 2205000.0,
          "n" : 2,
          "max" : 2643.0,
          "min" : 543.0,
          "sum" : 3186.0,
          "standardDeviation" : 1484.9242404917497
        } ],
        "18" : [ {
          "mean" : 2766.8,
          "variance" : 9463240.622222222,
          "n" : 5,
          "max" : 11270.0,
          "min" : 1080.0,
          "sum" : 13834.0,
          "standardDeviation" : 3076.238063320559
        }, {
          "mean" : 1993.4999999999998,
          "variance" : 5008973.166666667,
          "n" : 10,
          "max" : 8062.0,
          "min" : 426.0,
          "sum" : 19934.999999999996,
          "standardDeviation" : 2238.0735391551966
        }, {
          "mean" : 1071.75,
          "variance" : 298459.9285714285,
          "n" : 8,
          "max" : 1686.0,
          "min" : 424.0,
          "sum" : 8574.0,
          "standardDeviation" : 546.3148621183836
        }, {
          "mean" : 2050.9,
          "variance" : 1.0532604544444446E7,
          "n" : 10,
          "max" : 11142.0,
          "min" : 390.0,
          "sum" : 20509.0,
          "standardDeviation" : 3245.3974401364844
        }, {
          "mean" : 990.0,
          "variance" : 506017.99999999994,
          "n" : 2,
          "max" : 1493.0,
          "min" : 487.0,
          "sum" : 1980.0,
          "standardDeviation" : 711.3494218736668
        } ],
        "19" : [ {
          "mean" : 2636.2999999999997,
          "variance" : 8985119.566666666,
          "n" : 5,
          "max" : 10936.0,
          "min" : 799.0,
          "sum" : 13181.499999999998,
          "standardDeviation" : 2997.5189018030674
        }, {
          "mean" : 1454.2,
          "variance" : 706680.3999999999,
          "n" : 10,
          "max" : 2657.0,
          "min" : 452.0,
          "sum" : 14542.0,
          "standardDeviation" : 840.6428492528797
        }, {
          "mean" : 1294.0,
          "variance" : 565436.5714285715,
          "n" : 8,
          "max" : 2266.0,
          "min" : 535.0,
          "sum" : 10352.0,
          "standardDeviation" : 751.9551658367482
        }, {
          "mean" : 1110.3000000000002,
          "variance" : 553242.2333333334,
          "n" : 10,
          "max" : 2309.0,
          "min" : 374.0,
          "sum" : 11103.000000000002,
          "standardDeviation" : 743.8025499642586
        }, {
          "mean" : 885.5,
          "variance" : 521220.50000000006,
          "n" : 2,
          "max" : 1396.0,
          "min" : 375.0,
          "sum" : 1771.0,
          "standardDeviation" : 721.956023591465
        } ],
        "20" : [ {
          "mean" : 2644.666666666667,
          "variance" : 8877254.424242424,
          "n" : 7,
          "max" : 11809.0,
          "min" : 839.0,
          "sum" : 18512.666666666668,
          "standardDeviation" : 2979.472172087268
        }, {
          "mean" : 1363.125,
          "variance" : 500237.26785714296,
          "n" : 8,
          "max" : 2121.0,
          "min" : 482.0,
          "sum" : 10905.0,
          "standardDeviation" : 707.2745349983576
        }, {
          "mean" : 2200.9,
          "variance" : 1.0550990544444446E7,
          "n" : 10,
          "max" : 11226.0,
          "min" : 427.0,
          "sum" : 22009.0,
          "standardDeviation" : 3248.228831908929
        }, {
          "mean" : 2285.5,
          "variance" : 1.6295197714285713E7,
          "n" : 8,
          "max" : 12212.0,
          "min" : 393.0,
          "sum" : 18284.0,
          "standardDeviation" : 4036.7310678673794
        }, {
          "mean" : 6054.0,
          "variance" : 6.036807200000001E7,
          "n" : 2,
          "max" : 11548.0,
          "min" : 560.0,
          "sum" : 12108.0,
          "standardDeviation" : 7769.689311677785
        } ],
        "21" : [ {
          "mean" : 2923.75,
          "variance" : 1.5234358750000004E7,
          "n" : 7,
          "max" : 15088.0,
          "min" : 916.0,
          "sum" : 20466.25,
          "standardDeviation" : 3903.1216673324448
        }, {
          "mean" : 2466.875,
          "variance" : 1.2525159267857144E7,
          "n" : 8,
          "max" : 11083.0,
          "min" : 390.0,
          "sum" : 19735.0,
          "standardDeviation" : 3539.090175151962
        }, {
          "mean" : 1107.6,
          "variance" : 363002.0444444443,
          "n" : 10,
          "max" : 2020.0,
          "min" : 376.0,
          "sum" : 11076.0,
          "standardDeviation" : 602.4965099022934
        }, {
          "mean" : 3725.625,
          "variance" : 2.5543356553571425E7,
          "n" : 8,
          "max" : 12169.0,
          "min" : 396.0,
          "sum" : 29805.0,
          "standardDeviation" : 5054.0435844550675
        }, {
          "mean" : 1006.0,
          "variance" : 793800.0000000001,
          "n" : 2,
          "max" : 1636.0,
          "min" : 376.0,
          "sum" : 2012.0,
          "standardDeviation" : 890.9545442950499
        } ],
        "22" : [ {
          "mean" : 2718.4999999999995,
          "variance" : 9408202.277777774,
          "n" : 5,
          "max" : 11216.0,
          "min" : 982.0,
          "sum" : 13592.499999999998,
          "standardDeviation" : 3067.279295691505
        }, {
          "mean" : 1505.3,
          "variance" : 479474.6777777777,
          "n" : 10,
          "max" : 2577.0,
          "min" : 555.0,
          "sum" : 15053.0,
          "standardDeviation" : 692.4411005838531
        }, {
          "mean" : 1177.8999999999996,
          "variance" : 383516.0999999999,
          "n" : 10,
          "max" : 2061.0,
          "min" : 400.0,
          "sum" : 11778.999999999996,
          "standardDeviation" : 619.2867671765641
        }, {
          "mean" : 995.7499999999999,
          "variance" : 354035.0714285714,
          "n" : 8,
          "max" : 1949.0,
          "min" : 410.0,
          "sum" : 7965.999999999999,
          "standardDeviation" : 595.0084633251627
        }, {
          "mean" : 6135.0,
          "variance" : 6.0412032E7,
          "n" : 2,
          "max" : 11631.0,
          "min" : 639.0,
          "sum" : 12270.0,
          "standardDeviation" : 7772.51773880253
        } ],
        "23" : [ {
          "mean" : 2908.6,
          "variance" : 1.056303248888889E7,
          "n" : 5,
          "max" : 11840.0,
          "min" : 1001.0,
          "sum" : 14543.0,
          "standardDeviation" : 3250.081920335069
        }, {
          "mean" : 1656.0000000000002,
          "variance" : 589427.5555555554,
          "n" : 10,
          "max" : 2785.0,
          "min" : 621.0,
          "sum" : 16560.000000000004,
          "standardDeviation" : 767.7418547634064
        }, {
          "mean" : 1170.625,
          "variance" : 435611.69642857136,
          "n" : 8,
          "max" : 2166.0,
          "min" : 428.0,
          "sum" : 9365.0,
          "standardDeviation" : 660.0088608712548
        }, {
          "mean" : 1037.8000000000002,
          "variance" : 416360.3999999999,
          "n" : 10,
          "max" : 2208.0,
          "min" : 384.0,
          "sum" : 10378.000000000002,
          "standardDeviation" : 645.2599476180122
        }, {
          "mean" : 1194.5,
          "variance" : 424120.50000000006,
          "n" : 2,
          "max" : 1655.0,
          "min" : 734.0,
          "sum" : 2389.0,
          "standardDeviation" : 651.2453454728103
        } ],
        "24" : [ {
          "mean" : 2745.4166666666665,
          "variance" : 6332315.174242424,
          "n" : 7,
          "max" : 10231.0,
          "min" : 1030.0,
          "sum" : 19217.916666666664,
          "standardDeviation" : 2516.4091825938053
        }, {
          "mean" : 2922.75,
          "variance" : 1.9178683357142854E7,
          "n" : 8,
          "max" : 13669.0,
          "min" : 589.0,
          "sum" : 23382.0,
          "standardDeviation" : 4379.347366576766
        }, {
          "mean" : 1086.8,
          "variance" : 595186.8444444444,
          "n" : 10,
          "max" : 2620.0,
          "min" : 372.0,
          "sum" : 10868.0,
          "standardDeviation" : 771.4835347850558
        }, {
          "mean" : 1038.9999999999998,
          "variance" : 427443.7142857142,
          "n" : 8,
          "max" : 1858.0,
          "min" : 368.0,
          "sum" : 8311.999999999998,
          "standardDeviation" : 653.7917973527308
        }, {
          "mean" : 1174.0,
          "variance" : 720000.0,
          "n" : 2,
          "max" : 1774.0,
          "min" : 574.0,
          "sum" : 2348.0,
          "standardDeviation" : 848.5281374238571
        } ],
        "25" : [ {
          "mean" : 3405.2,
          "variance" : 9141640.4,
          "n" : 5,
          "max" : 11280.0,
          "min" : 1041.0,
          "sum" : 17026.0,
          "standardDeviation" : 3023.514577441293
        }, {
          "mean" : 1502.3,
          "variance" : 691654.4555555556,
          "n" : 10,
          "max" : 2810.0,
          "min" : 448.0,
          "sum" : 15023.0,
          "standardDeviation" : 831.6576552618004
        }, {
          "mean" : 1263.1999999999998,
          "variance" : 460128.84444444446,
          "n" : 10,
          "max" : 2226.0,
          "min" : 440.0,
          "sum" : 12631.999999999998,
          "standardDeviation" : 678.3279770468298
        }, {
          "mean" : 2283.625,
          "variance" : 1.2480294839285716E7,
          "n" : 8,
          "max" : 10929.0,
          "min" : 383.0,
          "sum" : 18269.0,
          "standardDeviation" : 3532.746076253672
        }, {
          "mean" : 1182.5,
          "variance" : 785004.5,
          "n" : 2,
          "max" : 1809.0,
          "min" : 556.0,
          "sum" : 2365.0,
          "standardDeviation" : 886.004796826744
        } ],
        "26" : [ {
          "mean" : 2889.7,
          "variance" : 1.0997253788888892E7,
          "n" : 5,
          "max" : 12122.0,
          "min" : 781.0,
          "sum" : 14448.5,
          "standardDeviation" : 3316.2107576100907
        }, {
          "mean" : 1154.9,
          "variance" : 475811.4333333333,
          "n" : 10,
          "max" : 2388.0,
          "min" : 358.0,
          "sum" : 11549.0,
          "standardDeviation" : 689.790862025102
        }, {
          "mean" : 1074.2,
          "variance" : 375141.5111111111,
          "n" : 10,
          "max" : 1873.0,
          "min" : 392.0,
          "sum" : 10742.0,
          "standardDeviation" : 612.4879681357921
        }, {
          "mean" : 955.625,
          "variance" : 247948.5535714286,
          "n" : 8,
          "max" : 1508.0,
          "min" : 439.0,
          "sum" : 7645.0,
          "standardDeviation" : 497.94432778316553
        }, {
          "mean" : 1174.0,
          "variance" : 793800.0000000001,
          "n" : 2,
          "max" : 1804.0,
          "min" : 544.0,
          "sum" : 2348.0,
          "standardDeviation" : 890.9545442950499
        } ],
        "27" : [ {
          "mean" : 3190.0,
          "variance" : 8408617.777777778,
          "n" : 5,
          "max" : 10886.0,
          "min" : 1104.0,
          "sum" : 15950.0,
          "standardDeviation" : 2899.761676030942
        }, {
          "mean" : 1516.3999999999999,
          "variance" : 488378.7111111112,
          "n" : 10,
          "max" : 2573.0,
          "min" : 626.0,
          "sum" : 15163.999999999998,
          "standardDeviation" : 698.8409769833987
        }, {
          "mean" : 2439.125,
          "variance" : 1.3617563267857146E7,
          "n" : 8,
          "max" : 11501.0,
          "min" : 616.0,
          "sum" : 19513.0,
          "standardDeviation" : 3690.198269450728
        }, {
          "mean" : 959.1000000000001,
          "variance" : 355346.98888888885,
          "n" : 10,
          "max" : 1935.0,
          "min" : 373.0,
          "sum" : 9591.000000000002,
          "standardDeviation" : 596.1098798786084
        }, {
          "mean" : 961.0,
          "variance" : 532512.0,
          "n" : 2,
          "max" : 1477.0,
          "min" : 445.0,
          "sum" : 1922.0,
          "standardDeviation" : 729.734198184517
        } ],
        "28" : [ {
          "mean" : 2789.3,
          "variance" : 8749640.233333332,
          "n" : 5,
          "max" : 10599.0,
          "min" : 934.0,
          "sum" : 13946.5,
          "standardDeviation" : 2957.9790792589006
        }, {
          "mean" : 1338.0,
          "variance" : 527564.4444444445,
          "n" : 10,
          "max" : 2381.0,
          "min" : 384.0,
          "sum" : 13380.0,
          "standardDeviation" : 726.3363163469417
        }, {
          "mean" : 1658.75,
          "variance" : 2399454.5,
          "n" : 8,
          "max" : 5188.0,
          "min" : 372.0,
          "sum" : 13270.0,
          "standardDeviation" : 1549.0172691096766
        }, {
          "mean" : 1213.7,
          "variance" : 399270.4555555555,
          "n" : 10,
          "max" : 2101.0,
          "min" : 457.0,
          "sum" : 12137.0,
          "standardDeviation" : 631.8785132883975
        }, {
          "mean" : 1095.0,
          "variance" : 636191.9999999999,
          "n" : 2,
          "max" : 1659.0,
          "min" : 531.0,
          "sum" : 2190.0,
          "standardDeviation" : 797.6164491784256
        } ],
        "29" : [ {
          "mean" : 2646.833333333334,
          "variance" : 7502388.515151516,
          "n" : 7,
          "max" : 11052.0,
          "min" : 958.0,
          "sum" : 18527.833333333336,
          "standardDeviation" : 2739.048834020948
        }, {
          "mean" : 1916.5,
          "variance" : 1408241.1428571427,
          "n" : 8,
          "max" : 4242.0,
          "min" : 394.0,
          "sum" : 15332.0,
          "standardDeviation" : 1186.6933651357215
        }, {
          "mean" : 2110.7999999999997,
          "variance" : 1.1310703511111112E7,
          "n" : 10,
          "max" : 11517.0,
          "min" : 434.0,
          "sum" : 21107.999999999996,
          "standardDeviation" : 3363.1389372297886
        }, {
          "mean" : 3585.5,
          "variance" : 2.4788886857142862E7,
          "n" : 8,
          "max" : 11669.0,
          "min" : 444.0,
          "sum" : 28684.0,
          "standardDeviation" : 4978.843927775088
        }, {
          "mean" : 5862.0,
          "variance" : 5.7910322E7,
          "n" : 2,
          "max" : 11243.0,
          "min" : 481.0,
          "sum" : 11724.0,
          "standardDeviation" : 7609.883179129624
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 295.09462915601034,
          "variance" : 397966.74743261875,
          "n" : 386,
          "max" : 10176.0,
          "min" : 68.0,
          "sum" : 113906.52685421999,
          "standardDeviation" : 630.8460568416186
        }, {
          "mean" : 115.6471816283925,
          "variance" : 3745.0656353456025,
          "n" : 479,
          "max" : 574.0,
          "min" : 38.0,
          "sum" : 55395.00000000001,
          "standardDeviation" : 61.196941388811275
        }, {
          "mean" : 92.17135549872123,
          "variance" : 2761.1577414912454,
          "n" : 391,
          "max" : 520.0,
          "min" : 35.0,
          "sum" : 36039.0,
          "standardDeviation" : 52.54671960732892
        }, {
          "mean" : 113.06077348066297,
          "variance" : 5566.788540120288,
          "n" : 362,
          "max" : 548.0,
          "min" : 36.0,
          "sum" : 40928.0,
          "standardDeviation" : 74.61091434984756
        }, {
          "mean" : 141.56052631578956,
          "variance" : 259649.79316067212,
          "n" : 380,
          "max" : 9957.0,
          "min" : 35.0,
          "sum" : 53793.00000000003,
          "standardDeviation" : 509.55842958454934
        }, {
          "mean" : 96.11547344110852,
          "variance" : 5458.889412796167,
          "n" : 433,
          "max" : 609.0,
          "min" : 34.0,
          "sum" : 41617.99999999999,
          "standardDeviation" : 73.88429747108763
        }, {
          "mean" : 80.68433179723503,
          "variance" : 4205.786959483192,
          "n" : 434,
          "max" : 422.0,
          "min" : 26.0,
          "sum" : 35017.00000000001,
          "standardDeviation" : 64.85203897706835
        }, {
          "mean" : 49.24311926605506,
          "variance" : 415.39822840873137,
          "n" : 436,
          "max" : 227.0,
          "min" : 26.0,
          "sum" : 21470.000000000007,
          "standardDeviation" : 20.381320575682317
        }, {
          "mean" : 63.43678160919542,
          "variance" : 628.0855757092548,
          "n" : 174,
          "max" : 226.0,
          "min" : 27.0,
          "sum" : 11038.000000000004,
          "standardDeviation" : 25.061635535400615
        } ],
        "1" : [ {
          "mean" : 295.1425389755011,
          "variance" : 936365.2653515767,
          "n" : 444,
          "max" : 19307.0,
          "min" : 38.0,
          "sum" : 131043.28730512249,
          "standardDeviation" : 967.6596846782327
        }, {
          "mean" : 164.05773672055426,
          "variance" : 607508.4850846801,
          "n" : 433,
          "max" : 16218.0,
          "min" : 36.0,
          "sum" : 71037.0,
          "standardDeviation" : 779.4283065713486
        }, {
          "mean" : 110.34308510638301,
          "variance" : 6931.64464539007,
          "n" : 376,
          "max" : 668.0,
          "min" : 35.0,
          "sum" : 41489.000000000015,
          "standardDeviation" : 83.25649911802724
        }, {
          "mean" : 117.25449871465295,
          "variance" : 11672.978877905283,
          "n" : 389,
          "max" : 943.0,
          "min" : 35.0,
          "sum" : 45612.0,
          "standardDeviation" : 108.04156088239971
        }, {
          "mean" : 130.65168539325822,
          "variance" : 10834.283968982434,
          "n" : 356,
          "max" : 568.0,
          "min" : 35.0,
          "sum" : 46511.99999999993,
          "standardDeviation" : 104.08786657907075
        }, {
          "mean" : 121.12933025404159,
          "variance" : 11184.196197930027,
          "n" : 433,
          "max" : 679.0,
          "min" : 34.0,
          "sum" : 52449.00000000001,
          "standardDeviation" : 105.75536013805649
        }, {
          "mean" : 82.0852534562212,
          "variance" : 6141.750220836307,
          "n" : 434,
          "max" : 418.0,
          "min" : 26.0,
          "sum" : 35625.0,
          "standardDeviation" : 78.36931938479692
        }, {
          "mean" : 49.211009174311926,
          "variance" : 384.35997047347905,
          "n" : 436,
          "max" : 218.0,
          "min" : 26.0,
          "sum" : 21456.0,
          "standardDeviation" : 19.60510062390599
        }, {
          "mean" : 107.96551724137932,
          "variance" : 560246.7040063783,
          "n" : 174,
          "max" : 9915.0,
          "min" : 26.0,
          "sum" : 18786.0,
          "standardDeviation" : 748.4962952522733
        } ],
        "2" : [ {
          "mean" : 284.32474226804095,
          "variance" : 1082911.9459495454,
          "n" : 383,
          "max" : 14587.0,
          "min" : 63.0,
          "sum" : 108896.37628865968,
          "standardDeviation" : 1040.6305520930784
        }, {
          "mean" : 124.8941908713693,
          "variance" : 9695.321421485329,
          "n" : 482,
          "max" : 739.0,
          "min" : 35.0,
          "sum" : 60199.00000000001,
          "standardDeviation" : 98.46482326945663
        }, {
          "mean" : 601.5438144329895,
          "variance" : 9.724172783011664E7,
          "n" : 388,
          "max" : 194338.0,
          "min" : 35.0,
          "sum" : 233398.99999999994,
          "standardDeviation" : 9861.122037076544
        }, {
          "mean" : 110.66572237960334,
          "variance" : 7136.467486479526,
          "n" : 353,
          "max" : 524.0,
          "min" : 35.0,
          "sum" : 39064.99999999998,
          "standardDeviation" : 84.47761529825239
        }, {
          "mean" : 132.43076923076924,
          "variance" : 11266.729127941466,
          "n" : 390,
          "max" : 695.0,
          "min" : 35.0,
          "sum" : 51648.00000000001,
          "standardDeviation" : 106.14484974760417
        }, {
          "mean" : 128.6287703016241,
          "variance" : 94842.86651918189,
          "n" : 431,
          "max" : 6122.0,
          "min" : 34.0,
          "sum" : 55438.99999999998,
          "standardDeviation" : 307.96569049032377
        }, {
          "mean" : 90.69269521410574,
          "variance" : 8013.294214182112,
          "n" : 397,
          "max" : 642.0,
          "min" : 26.0,
          "sum" : 36004.99999999998,
          "standardDeviation" : 89.51700516763344
        }, {
          "mean" : 53.18471337579615,
          "variance" : 813.1892126304374,
          "n" : 471,
          "max" : 269.0,
          "min" : 26.0,
          "sum" : 25049.999999999985,
          "standardDeviation" : 28.51647265407202
        }, {
          "mean" : 100.7111111111111,
          "variance" : 480561.4132836748,
          "n" : 180,
          "max" : 9345.0,
          "min" : 27.0,
          "sum" : 18127.999999999996,
          "standardDeviation" : 693.225369763452
        } ],
        "3" : [ {
          "mean" : 242.83518930957646,
          "variance" : 453143.63349109166,
          "n" : 444,
          "max" : 13873.0,
          "min" : 70.0,
          "sum" : 107818.82405345194,
          "standardDeviation" : 673.1594413592456
        }, {
          "mean" : 119.81524249422635,
          "variance" : 7727.521341202627,
          "n" : 433,
          "max" : 741.0,
          "min" : 34.0,
          "sum" : 51880.000000000015,
          "standardDeviation" : 87.90632139500906
        }, {
          "mean" : 108.94148936170214,
          "variance" : 6915.916567375892,
          "n" : 376,
          "max" : 660.0,
          "min" : 35.0,
          "sum" : 40962.00000000001,
          "standardDeviation" : 83.16198991952929
        }, {
          "mean" : 119.22379603399436,
          "variance" : 8353.691250321912,
          "n" : 353,
          "max" : 602.0,
          "min" : 35.0,
          "sum" : 42086.00000000001,
          "standardDeviation" : 91.39852980394112
        }, {
          "mean" : 117.2179487179487,
          "variance" : 9415.255718146464,
          "n" : 390,
          "max" : 562.0,
          "min" : 34.0,
          "sum" : 45714.99999999999,
          "standardDeviation" : 97.0322406118011
        }, {
          "mean" : 97.939675174014,
          "variance" : 7677.8289105919175,
          "n" : 431,
          "max" : 610.0,
          "min" : 34.0,
          "sum" : 42212.00000000004,
          "standardDeviation" : 87.62322129773544
        }, {
          "mean" : 128.68607594936717,
          "variance" : 266104.68292745616,
          "n" : 395,
          "max" : 10211.0,
          "min" : 28.0,
          "sum" : 50831.00000000003,
          "standardDeviation" : 515.8533540915055
        }, {
          "mean" : 47.59447004608294,
          "variance" : 349.14232500718396,
          "n" : 434,
          "max" : 105.0,
          "min" : 26.0,
          "sum" : 20655.999999999996,
          "standardDeviation" : 18.685350545472353
        }, {
          "mean" : 54.803652968036516,
          "variance" : 637.6539315487415,
          "n" : 219,
          "max" : 237.0,
          "min" : 27.0,
          "sum" : 12001.999999999996,
          "standardDeviation" : 25.25181046081135
        } ],
        "4" : [ {
          "mean" : 239.62471395881,
          "variance" : 515841.6340667187,
          "n" : 432,
          "max" : 14039.0,
          "min" : 69.0,
          "sum" : 103517.87643020591,
          "standardDeviation" : 718.2211595788018
        }, {
          "mean" : 104.87066974595845,
          "variance" : 3518.450827559665,
          "n" : 433,
          "max" : 502.0,
          "min" : 37.0,
          "sum" : 45409.00000000001,
          "standardDeviation" : 59.31653081190491
        }, {
          "mean" : 99.48453608247421,
          "variance" : 2260.1108713604513,
          "n" : 388,
          "max" : 355.0,
          "min" : 36.0,
          "sum" : 38599.99999999999,
          "standardDeviation" : 47.540623380015234
        }, {
          "mean" : 118.74928774928773,
          "variance" : 7068.268392348389,
          "n" : 351,
          "max" : 523.0,
          "min" : 34.0,
          "sum" : 41680.99999999999,
          "standardDeviation" : 84.07299442953361
        }, {
          "mean" : 147.95618556701046,
          "variance" : 271848.4554396759,
          "n" : 388,
          "max" : 10199.0,
          "min" : 35.0,
          "sum" : 57407.00000000006,
          "standardDeviation" : 521.3908854589577
        }, {
          "mean" : 99.5011876484561,
          "variance" : 8129.993450967086,
          "n" : 421,
          "max" : 975.0,
          "min" : 34.0,
          "sum" : 41890.000000000015,
          "standardDeviation" : 90.1664763144656
        }, {
          "mean" : 77.74384236453206,
          "variance" : 3807.7268138417576,
          "n" : 406,
          "max" : 467.0,
          "min" : 27.0,
          "sum" : 31564.000000000015,
          "standardDeviation" : 61.70678093890296
        }, {
          "mean" : 55.814220183486206,
          "variance" : 500.91942950543074,
          "n" : 436,
          "max" : 240.0,
          "min" : 27.0,
          "sum" : 24334.999999999985,
          "standardDeviation" : 22.38122940111715
        }, {
          "mean" : 54.28181818181815,
          "variance" : 803.2078870900788,
          "n" : 220,
          "max" : 227.0,
          "min" : 27.0,
          "sum" : 11941.999999999993,
          "standardDeviation" : 28.340922481282764
        } ],
        "5" : [ {
          "mean" : 339.94036697247714,
          "variance" : 1773623.5826426225,
          "n" : 431,
          "max" : 19818.0,
          "min" : 70.0,
          "sum" : 146514.29816513765,
          "standardDeviation" : 1331.7745990379237
        }, {
          "mean" : 113.68894009216594,
          "variance" : 7772.616644139587,
          "n" : 434,
          "max" : 686.0,
          "min" : 36.0,
          "sum" : 49341.000000000015,
          "standardDeviation" : 88.1624446356814
        }, {
          "mean" : 104.08333333333334,
          "variance" : 5374.567449956483,
          "n" : 384,
          "max" : 484.0,
          "min" : 35.0,
          "sum" : 39968.0,
          "standardDeviation" : 73.31144146691213
        }, {
          "mean" : 127.28732394366203,
          "variance" : 12054.815516829796,
          "n" : 355,
          "max" : 959.0,
          "min" : 35.0,
          "sum" : 45187.00000000002,
          "standardDeviation" : 109.7944238876902
        }, {
          "mean" : 124.82262210796917,
          "variance" : 11300.950414756308,
          "n" : 389,
          "max" : 602.0,
          "min" : 34.0,
          "sum" : 48556.00000000001,
          "standardDeviation" : 106.30592840832682
        }, {
          "mean" : 148.31944444444446,
          "variance" : 244932.98356535184,
          "n" : 432,
          "max" : 10145.0,
          "min" : 35.0,
          "sum" : 64074.00000000001,
          "standardDeviation" : 494.90704537857596
        }, {
          "mean" : 101.96977329974807,
          "variance" : 9067.589993130307,
          "n" : 397,
          "max" : 725.0,
          "min" : 26.0,
          "sum" : 40481.999999999985,
          "standardDeviation" : 95.22389402419073
        }, {
          "mean" : 56.31848552338533,
          "variance" : 609.4228941298124,
          "n" : 449,
          "max" : 180.0,
          "min" : 27.0,
          "sum" : 25287.00000000001,
          "standardDeviation" : 24.686492139018302
        }, {
          "mean" : 55.661764705882355,
          "variance" : 1488.4613880034767,
          "n" : 204,
          "max" : 389.0,
          "min" : 26.0,
          "sum" : 11355.0,
          "standardDeviation" : 38.580583043850915
        } ],
        "6" : [ {
          "mean" : 302.94883720930244,
          "variance" : 485186.2817585518,
          "n" : 425,
          "max" : 12714.0,
          "min" : 65.0,
          "sum" : 128753.25581395354,
          "standardDeviation" : 696.5531435278659
        }, {
          "mean" : 137.29318181818192,
          "variance" : 11493.606331538627,
          "n" : 440,
          "max" : 676.0,
          "min" : 36.0,
          "sum" : 60409.000000000044,
          "standardDeviation" : 107.20823817010812
        }, {
          "mean" : 136.9766839378238,
          "variance" : 254776.83322118287,
          "n" : 386,
          "max" : 9872.0,
          "min" : 35.0,
          "sum" : 52872.999999999985,
          "standardDeviation" : 504.75423051340823
        }, {
          "mean" : 134.83852691218124,
          "variance" : 13041.01078418748,
          "n" : 353,
          "max" : 727.0,
          "min" : 34.0,
          "sum" : 47597.99999999998,
          "standardDeviation" : 114.1972450814269
        }, {
          "mean" : 122.51036269430057,
          "variance" : 15184.411580647342,
          "n" : 386,
          "max" : 947.0,
          "min" : 35.0,
          "sum" : 47289.00000000002,
          "standardDeviation" : 123.22504445382579
        }, {
          "mean" : 124.5714285714286,
          "variance" : 21447.58722182341,
          "n" : 399,
          "max" : 1129.0,
          "min" : 34.0,
          "sum" : 49704.00000000001,
          "standardDeviation" : 146.44994783824066
        }, {
          "mean" : 105.4023255813953,
          "variance" : 12161.975285954351,
          "n" : 430,
          "max" : 681.0,
          "min" : 28.0,
          "sum" : 45322.99999999998,
          "standardDeviation" : 110.2813460470734
        }, {
          "mean" : 54.13863636363634,
          "variance" : 443.0445174984467,
          "n" : 440,
          "max" : 226.0,
          "min" : 27.0,
          "sum" : 23820.99999999999,
          "standardDeviation" : 21.04862269837261
        }, {
          "mean" : 45.05555555555554,
          "variance" : 323.3178294573644,
          "n" : 216,
          "max" : 103.0,
          "min" : 28.0,
          "sum" : 9731.999999999996,
          "standardDeviation" : 17.981040833538096
        } ],
        "7" : [ {
          "mean" : 260.86293436293414,
          "variance" : 1702467.619474546,
          "n" : 513,
          "max" : 26130.0,
          "min" : 40.0,
          "sum" : 133822.6853281852,
          "standardDeviation" : 1304.7864267666744
        }, {
          "mean" : 110.6146095717885,
          "variance" : 4091.954634506272,
          "n" : 397,
          "max" : 437.0,
          "min" : 35.0,
          "sum" : 43914.00000000004,
          "standardDeviation" : 63.96838777479289
        }, {
          "mean" : 103.69689119170982,
          "variance" : 2988.2221721283913,
          "n" : 386,
          "max" : 424.0,
          "min" : 35.0,
          "sum" : 40026.99999999999,
          "standardDeviation" : 54.66463365036293
        }, {
          "mean" : 108.84745762711857,
          "variance" : 4277.342103999618,
          "n" : 354,
          "max" : 436.0,
          "min" : 35.0,
          "sum" : 38531.99999999998,
          "standardDeviation" : 65.4013922175944
        }, {
          "mean" : 103.39759036144582,
          "variance" : 6173.35603282696,
          "n" : 415,
          "max" : 571.0,
          "min" : 34.0,
          "sum" : 42910.000000000015,
          "standardDeviation" : 78.57070721857453
        }, {
          "mean" : 92.63681592039798,
          "variance" : 3981.239339462289,
          "n" : 402,
          "max" : 435.0,
          "min" : 35.0,
          "sum" : 37239.999999999985,
          "standardDeviation" : 63.09706284338669
        }, {
          "mean" : 75.40732265446225,
          "variance" : 2663.182331576848,
          "n" : 437,
          "max" : 424.0,
          "min" : 27.0,
          "sum" : 32953.0,
          "standardDeviation" : 51.606029992403485
        }, {
          "mean" : 56.332493702770776,
          "variance" : 603.1669465435216,
          "n" : 397,
          "max" : 228.0,
          "min" : 27.0,
          "sum" : 22363.999999999996,
          "standardDeviation" : 24.559457374777676
        }, {
          "mean" : 47.436781609195386,
          "variance" : 322.07401501561355,
          "n" : 174,
          "max" : 105.0,
          "min" : 28.0,
          "sum" : 8253.999999999996,
          "standardDeviation" : 17.946420674207253
        } ],
        "8" : [ {
          "mean" : 238.39247311827918,
          "variance" : 266985.6679504258,
          "n" : 553,
          "max" : 11451.0,
          "min" : 67.0,
          "sum" : 131831.0376344084,
          "standardDeviation" : 516.7065588420819
        }, {
          "mean" : 110.90517241379307,
          "variance" : 8163.21000198748,
          "n" : 348,
          "max" : 598.0,
          "min" : 35.0,
          "sum" : 38594.999999999985,
          "standardDeviation" : 90.35048423770334
        }, {
          "mean" : 107.82905982905983,
          "variance" : 8119.9306959706955,
          "n" : 351,
          "max" : 836.0,
          "min" : 34.0,
          "sum" : 37848.0,
          "standardDeviation" : 90.11065805980276
        }, {
          "mean" : 105.92571428571425,
          "variance" : 3828.372689316415,
          "n" : 350,
          "max" : 499.0,
          "min" : 35.0,
          "sum" : 37073.999999999985,
          "standardDeviation" : 61.87384495339218
        }, {
          "mean" : 118.5026595744681,
          "variance" : 10911.098659574463,
          "n" : 376,
          "max" : 547.0,
          "min" : 34.0,
          "sum" : 44557.00000000001,
          "standardDeviation" : 104.4562045049238
        }, {
          "mean" : 118.15085158150852,
          "variance" : 9623.816212687678,
          "n" : 411,
          "max" : 587.0,
          "min" : 34.0,
          "sum" : 48560.0,
          "standardDeviation" : 98.10105102743638
        }, {
          "mean" : 91.93192488262906,
          "variance" : 8307.178884286111,
          "n" : 426,
          "max" : 671.0,
          "min" : 27.0,
          "sum" : 39162.99999999998,
          "standardDeviation" : 91.14372652182986
        }, {
          "mean" : 78.5885286783042,
          "variance" : 256729.82776807976,
          "n" : 401,
          "max" : 10181.0,
          "min" : 26.0,
          "sum" : 31513.999999999985,
          "standardDeviation" : 506.6851367151791
        }, {
          "mean" : 56.05019305019302,
          "variance" : 717.7455329083236,
          "n" : 259,
          "max" : 247.0,
          "min" : 27.0,
          "sum" : 14516.999999999993,
          "standardDeviation" : 26.790773279402064
        } ],
        "9" : [ {
          "mean" : 270.27356321839085,
          "variance" : 1013761.0194607773,
          "n" : 430,
          "max" : 17429.0,
          "min" : 71.0,
          "sum" : 116217.63218390806,
          "standardDeviation" : 1006.8570005024434
        }, {
          "mean" : 114.55632183908058,
          "variance" : 5162.565368928439,
          "n" : 435,
          "max" : 556.0,
          "min" : 35.0,
          "sum" : 49832.00000000005,
          "standardDeviation" : 71.85099420974242
        }, {
          "mean" : 126.2441558441558,
          "variance" : 264007.6798160173,
          "n" : 385,
          "max" : 10128.0,
          "min" : 36.0,
          "sum" : 48603.999999999985,
          "standardDeviation" : 513.8167765030812
        }, {
          "mean" : 106.12429378531075,
          "variance" : 5607.010003040926,
          "n" : 354,
          "max" : 630.0,
          "min" : 34.0,
          "sum" : 37568.00000000001,
          "standardDeviation" : 74.87997063995769
        }, {
          "mean" : 109.78497409326421,
          "variance" : 7299.914682726603,
          "n" : 386,
          "max" : 744.0,
          "min" : 35.0,
          "sum" : 42376.999999999985,
          "standardDeviation" : 85.43953817013879
        }, {
          "mean" : 106.31873479318739,
          "variance" : 7487.359135956317,
          "n" : 411,
          "max" : 530.0,
          "min" : 31.0,
          "sum" : 43697.000000000015,
          "standardDeviation" : 86.52952753803939
        }, {
          "mean" : 85.8574821852731,
          "variance" : 5575.998687931235,
          "n" : 421,
          "max" : 647.0,
          "min" : 29.0,
          "sum" : 36145.99999999998,
          "standardDeviation" : 74.67261002490294
        }, {
          "mean" : 56.7750556792873,
          "variance" : 886.630090677697,
          "n" : 449,
          "max" : 268.0,
          "min" : 26.0,
          "sum" : 25491.999999999996,
          "standardDeviation" : 29.776334406331767
        }, {
          "mean" : 61.73529411764704,
          "variance" : 716.3138220805569,
          "n" : 204,
          "max" : 235.0,
          "min" : 28.0,
          "sum" : 12593.999999999996,
          "standardDeviation" : 26.764039719006487
        } ],
        "10" : [ {
          "mean" : 407.96437659033097,
          "variance" : 2818993.2589318203,
          "n" : 388,
          "max" : 23269.0,
          "min" : 73.0,
          "sum" : 158290.1781170484,
          "standardDeviation" : 1678.9857828259953
        }, {
          "mean" : 173.04612159329156,
          "variance" : 20016.51047337172,
          "n" : 477,
          "max" : 997.0,
          "min" : 35.0,
          "sum" : 82543.00000000007,
          "standardDeviation" : 141.47971753354514
        }, {
          "mean" : 163.63402061855675,
          "variance" : 12516.604731079677,
          "n" : 388,
          "max" : 837.0,
          "min" : 36.0,
          "sum" : 63490.000000000015,
          "standardDeviation" : 111.8776328453533
        }, {
          "mean" : 177.91168091168103,
          "variance" : 25440.64074888074,
          "n" : 351,
          "max" : 1444.0,
          "min" : 35.0,
          "sum" : 62447.000000000044,
          "standardDeviation" : 159.50122491341796
        }, {
          "mean" : 165.37789203084827,
          "variance" : 24057.751159462532,
          "n" : 389,
          "max" : 1010.0,
          "min" : 35.0,
          "sum" : 64331.99999999998,
          "standardDeviation" : 155.10561292055982
        }, {
          "mean" : 139.5185185185186,
          "variance" : 18638.9045286586,
          "n" : 432,
          "max" : 926.0,
          "min" : 35.0,
          "sum" : 60272.00000000003,
          "standardDeviation" : 136.5243733868008
        }, {
          "mean" : 126.10025062656652,
          "variance" : 12824.281381846586,
          "n" : 399,
          "max" : 850.0,
          "min" : 31.0,
          "sum" : 50314.000000000044,
          "standardDeviation" : 113.24434370796003
        }, {
          "mean" : 53.64543524416135,
          "variance" : 621.2463567782441,
          "n" : 471,
          "max" : 253.0,
          "min" : 26.0,
          "sum" : 25266.999999999996,
          "standardDeviation" : 24.924814077104852
        }, {
          "mean" : 60.03333333333334,
          "variance" : 831.4625698324021,
          "n" : 180,
          "max" : 279.0,
          "min" : 29.0,
          "sum" : 10806.000000000002,
          "standardDeviation" : 28.835092679448806
        } ],
        "11" : [ {
          "mean" : 321.5881006864988,
          "variance" : 1499392.6693993667,
          "n" : 432,
          "max" : 15340.0,
          "min" : 39.0,
          "sum" : 138926.0594965675,
          "standardDeviation" : 1224.4969046099573
        }, {
          "mean" : 120.45842217484004,
          "variance" : 7961.372733402585,
          "n" : 469,
          "max" : 601.0,
          "min" : 37.0,
          "sum" : 56494.99999999998,
          "standardDeviation" : 89.22652483091889
        }, {
          "mean" : 128.04788732394374,
          "variance" : 10117.876231399696,
          "n" : 355,
          "max" : 619.0,
          "min" : 37.0,
          "sum" : 45457.00000000003,
          "standardDeviation" : 100.58765446812892
        }, {
          "mean" : 136.43005181347144,
          "variance" : 13656.219769867454,
          "n" : 386,
          "max" : 820.0,
          "min" : 34.0,
          "sum" : 52661.99999999997,
          "standardDeviation" : 116.85982958171492
        }, {
          "mean" : 137.30056179775283,
          "variance" : 15594.019267289128,
          "n" : 356,
          "max" : 709.0,
          "min" : 34.0,
          "sum" : 48879.00000000001,
          "standardDeviation" : 124.87601558061151
        }, {
          "mean" : 111.0577367205541,
          "variance" : 10320.086936532378,
          "n" : 433,
          "max" : 655.0,
          "min" : 35.0,
          "sum" : 48087.99999999993,
          "standardDeviation" : 101.58782868302865
        }, {
          "mean" : 104.29398148148145,
          "variance" : 248846.12451125702,
          "n" : 432,
          "max" : 10297.0,
          "min" : 27.0,
          "sum" : 45054.999999999985,
          "standardDeviation" : 498.8447900011155
        }, {
          "mean" : 74.36757990867576,
          "variance" : 242287.0659488209,
          "n" : 438,
          "max" : 10340.0,
          "min" : 27.0,
          "sum" : 32572.999999999985,
          "standardDeviation" : 492.2266408361304
        }, {
          "mean" : 55.02298850574711,
          "variance" : 673.1092950634508,
          "n" : 174,
          "max" : 240.0,
          "min" : 28.0,
          "sum" : 9573.999999999996,
          "standardDeviation" : 25.944349964172368
        } ],
        "12" : [ {
          "mean" : 321.302681992337,
          "variance" : 3306290.9446760956,
          "n" : 517,
          "max" : 40601.0,
          "min" : 43.0,
          "sum" : 166113.48659003823,
          "standardDeviation" : 1818.3209135562665
        }, {
          "mean" : 129.35051546391736,
          "variance" : 12107.137803351181,
          "n" : 388,
          "max" : 677.0,
          "min" : 35.0,
          "sum" : 50187.999999999935,
          "standardDeviation" : 110.0324397773274
        }, {
          "mean" : 138.9088319088319,
          "variance" : 10450.014521774514,
          "n" : 351,
          "max" : 717.0,
          "min" : 34.0,
          "sum" : 48757.0,
          "standardDeviation" : 102.22531252960059
        }, {
          "mean" : 146.4861878453038,
          "variance" : 21382.66047351585,
          "n" : 362,
          "max" : 920.0,
          "min" : 35.0,
          "sum" : 53027.99999999997,
          "standardDeviation" : 146.22811109193694
        }, {
          "mean" : 166.06084656084647,
          "variance" : 281280.59310485184,
          "n" : 378,
          "max" : 10082.0,
          "min" : 35.0,
          "sum" : 62770.99999999996,
          "standardDeviation" : 530.3589285614524
        }, {
          "mean" : 110.10955710955713,
          "variance" : 14356.635165457588,
          "n" : 429,
          "max" : 739.0,
          "min" : 35.0,
          "sum" : 47237.00000000001,
          "standardDeviation" : 119.8191769520121
        }, {
          "mean" : 106.28680203045687,
          "variance" : 10989.258502215163,
          "n" : 394,
          "max" : 631.0,
          "min" : 28.0,
          "sum" : 41877.00000000001,
          "standardDeviation" : 104.82966422828589
        }, {
          "mean" : 56.318706697459625,
          "variance" : 595.6898575827571,
          "n" : 433,
          "max" : 235.0,
          "min" : 27.0,
          "sum" : 24386.00000000002,
          "standardDeviation" : 24.406758440701566
        }, {
          "mean" : 51.57847533632289,
          "variance" : 631.5332282955601,
          "n" : 223,
          "max" : 263.0,
          "min" : 27.0,
          "sum" : 11502.000000000004,
          "standardDeviation" : 25.130324874453176
        } ],
        "13" : [ {
          "mean" : 277.84210526315803,
          "variance" : 536305.1974891353,
          "n" : 432,
          "max" : 11568.0,
          "min" : 44.0,
          "sum" : 120027.78947368427,
          "standardDeviation" : 732.3286130482239
        }, {
          "mean" : 120.42004264392327,
          "variance" : 5911.030452134935,
          "n" : 469,
          "max" : 546.0,
          "min" : 35.0,
          "sum" : 56477.000000000015,
          "standardDeviation" : 76.88322607783141
        }, {
          "mean" : 110.33333333333334,
          "variance" : 4570.177142857142,
          "n" : 351,
          "max" : 497.0,
          "min" : 34.0,
          "sum" : 38727.0,
          "standardDeviation" : 67.60308530575466
        }, {
          "mean" : 124.19491525423727,
          "variance" : 12244.723940077789,
          "n" : 354,
          "max" : 656.0,
          "min" : 35.0,
          "sum" : 43964.99999999999,
          "standardDeviation" : 110.65588072975511
        }, {
          "mean" : 131.69230769230757,
          "variance" : 13260.12102036781,
          "n" : 390,
          "max" : 758.0,
          "min" : 34.0,
          "sum" : 51359.99999999995,
          "standardDeviation" : 115.15259884330796
        }, {
          "mean" : 138.5545243619491,
          "variance" : 246886.83364808722,
          "n" : 431,
          "max" : 10182.0,
          "min" : 34.0,
          "sum" : 59717.00000000006,
          "standardDeviation" : 496.8770810251638
        }, {
          "mean" : 98.56675062972302,
          "variance" : 10650.655255324013,
          "n" : 397,
          "max" : 684.0,
          "min" : 27.0,
          "sum" : 39131.00000000004,
          "standardDeviation" : 103.20201187633899
        }, {
          "mean" : 49.723991507431,
          "variance" : 443.09386999141697,
          "n" : 471,
          "max" : 233.0,
          "min" : 27.0,
          "sum" : 23420.000000000004,
          "standardDeviation" : 21.049795010674497
        }, {
          "mean" : 52.10000000000001,
          "variance" : 434.81675977653606,
          "n" : 180,
          "max" : 120.0,
          "min" : 27.0,
          "sum" : 9378.000000000002,
          "standardDeviation" : 20.852260303778486
        } ],
        "14" : [ {
          "mean" : 225.6743295019155,
          "variance" : 424521.9781881295,
          "n" : 517,
          "max" : 13673.0,
          "min" : 64.0,
          "sum" : 116673.62835249031,
          "standardDeviation" : 651.5535113773308
        }, {
          "mean" : 105.29667519181585,
          "variance" : 3060.1117581480767,
          "n" : 391,
          "max" : 450.0,
          "min" : 34.0,
          "sum" : 41171.0,
          "standardDeviation" : 55.318276890627
        }, {
          "mean" : 89.80361757105942,
          "variance" : 3760.603821076164,
          "n" : 387,
          "max" : 405.0,
          "min" : 35.0,
          "sum" : 34753.99999999999,
          "standardDeviation" : 61.323762287356146
        }, {
          "mean" : 165.74787535410766,
          "variance" : 583169.6890934842,
          "n" : 353,
          "max" : 10297.0,
          "min" : 35.0,
          "sum" : 58509.00000000001,
          "standardDeviation" : 763.655478009216
        }, {
          "mean" : 112.02544529262082,
          "variance" : 7322.943228436401,
          "n" : 393,
          "max" : 503.0,
          "min" : 35.0,
          "sum" : 44025.99999999998,
          "standardDeviation" : 85.57419721175538
        }, {
          "mean" : 97.2887323943662,
          "variance" : 6300.968202154096,
          "n" : 426,
          "max" : 597.0,
          "min" : 34.0,
          "sum" : 41445.00000000001,
          "standardDeviation" : 79.37863819790621
        }, {
          "mean" : 75.71689497716899,
          "variance" : 3685.6359152795653,
          "n" : 438,
          "max" : 508.0,
          "min" : 27.0,
          "sum" : 33164.000000000015,
          "standardDeviation" : 60.70943843653609
        }, {
          "mean" : 50.977329974811084,
          "variance" : 471.1989797216497,
          "n" : 397,
          "max" : 297.0,
          "min" : 28.0,
          "sum" : 20238.0,
          "standardDeviation" : 21.70711818094815
        }, {
          "mean" : 49.25862068965517,
          "variance" : 368.67839346222814,
          "n" : 174,
          "max" : 100.0,
          "min" : 26.0,
          "sum" : 8571.0,
          "standardDeviation" : 19.20099980371408
        } ],
        "15" : [ {
          "mean" : 362.8648018648018,
          "variance" : 5155559.860183428,
          "n" : 424,
          "max" : 45769.0,
          "min" : 66.0,
          "sum" : 153854.67599067595,
          "standardDeviation" : 2270.5857967016855
        }, {
          "mean" : 133.51473922902488,
          "variance" : 9727.341259534105,
          "n" : 441,
          "max" : 656.0,
          "min" : 36.0,
          "sum" : 58879.99999999997,
          "standardDeviation" : 98.62728455926435
        }, {
          "mean" : 116.10621761658037,
          "variance" : 9257.40946773434,
          "n" : 386,
          "max" : 558.0,
          "min" : 35.0,
          "sum" : 44817.00000000002,
          "standardDeviation" : 96.21543258612071
        }, {
          "mean" : 112.48732394366195,
          "variance" : 7702.414386886291,
          "n" : 355,
          "max" : 521.0,
          "min" : 35.0,
          "sum" : 39932.99999999999,
          "standardDeviation" : 87.76340004173888
        }, {
          "mean" : 129.34871794871785,
          "variance" : 11456.38193922615,
          "n" : 390,
          "max" : 615.0,
          "min" : 35.0,
          "sum" : 50445.99999999996,
          "standardDeviation" : 107.03448948458693
        }, {
          "mean" : 145.53146853146856,
          "variance" : 256031.64678779154,
          "n" : 429,
          "max" : 10373.0,
          "min" : 34.0,
          "sum" : 62433.000000000015,
          "standardDeviation" : 505.9956983886242
        }, {
          "mean" : 105.53015075376884,
          "variance" : 10402.808912319782,
          "n" : 398,
          "max" : 809.0,
          "min" : 27.0,
          "sum" : 42001.0,
          "standardDeviation" : 101.99416116778343
        }, {
          "mean" : 72.51592356687901,
          "variance" : 183928.18219270892,
          "n" : 471,
          "max" : 9349.0,
          "min" : 27.0,
          "sum" : 34155.000000000015,
          "standardDeviation" : 428.8684905570808
        }, {
          "mean" : 65.60220994475135,
          "variance" : 881.8408839779003,
          "n" : 181,
          "max" : 244.0,
          "min" : 28.0,
          "sum" : 11873.999999999995,
          "standardDeviation" : 29.695805831428455
        } ],
        "16" : [ {
          "mean" : 276.63541666666646,
          "variance" : 856746.4993693461,
          "n" : 475,
          "max" : 12437.0,
          "min" : 54.0,
          "sum" : 131401.82291666657,
          "standardDeviation" : 925.6060173580042
        }, {
          "mean" : 111.56876456876458,
          "variance" : 3956.942106180426,
          "n" : 429,
          "max" : 510.0,
          "min" : 36.0,
          "sum" : 47863.00000000001,
          "standardDeviation" : 62.904229636650236
        }, {
          "mean" : 97.79378531073439,
          "variance" : 2959.8412077271464,
          "n" : 354,
          "max" : 457.0,
          "min" : 35.0,
          "sum" : 34618.99999999998,
          "standardDeviation" : 54.40442268535846
        }, {
          "mean" : 110.26562499999999,
          "variance" : 5718.420120757185,
          "n" : 384,
          "max" : 682.0,
          "min" : 35.0,
          "sum" : 42341.99999999999,
          "standardDeviation" : 75.6202361855422
        }, {
          "mean" : 109.74719101123598,
          "variance" : 7320.149992087354,
          "n" : 356,
          "max" : 800.0,
          "min" : 34.0,
          "sum" : 39070.00000000001,
          "standardDeviation" : 85.55787510268914
        }, {
          "mean" : 94.5462962962962,
          "variance" : 6959.9004038841695,
          "n" : 432,
          "max" : 914.0,
          "min" : 34.0,
          "sum" : 40843.99999999996,
          "standardDeviation" : 83.42601754779002
        }, {
          "mean" : 141.7783251231528,
          "variance" : 516170.340862373,
          "n" : 406,
          "max" : 10332.0,
          "min" : 28.0,
          "sum" : 57562.00000000004,
          "standardDeviation" : 718.449957103745
        }, {
          "mean" : 54.07189542483656,
          "variance" : 882.5166538231002,
          "n" : 459,
          "max" : 455.0,
          "min" : 27.0,
          "sum" : 24818.99999999998,
          "standardDeviation" : 29.707181855960357
        }, {
          "mean" : 57.272222222222226,
          "variance" : 399.8975481067662,
          "n" : 180,
          "max" : 120.0,
          "min" : 27.0,
          "sum" : 10309.0,
          "standardDeviation" : 19.997438538642047
        } ],
        "17" : [ {
          "mean" : 348.60372960372945,
          "variance" : 2473241.4267150285,
          "n" : 424,
          "max" : 20635.0,
          "min" : 60.0,
          "sum" : 147807.9813519813,
          "standardDeviation" : 1572.6542616592587
        }, {
          "mean" : 130.952380952381,
          "variance" : 5989.22727272727,
          "n" : 441,
          "max" : 693.0,
          "min" : 41.0,
          "sum" : 57750.000000000015,
          "standardDeviation" : 77.39009802763704
        }, {
          "mean" : 110.32987012987017,
          "variance" : 5075.747673160173,
          "n" : 385,
          "max" : 512.0,
          "min" : 35.0,
          "sum" : 42477.000000000015,
          "standardDeviation" : 71.24428168744613
        }, {
          "mean" : 132.71067415730332,
          "variance" : 10114.431547713237,
          "n" : 356,
          "max" : 653.0,
          "min" : 35.0,
          "sum" : 47244.99999999998,
          "standardDeviation" : 100.57053021493542
        }, {
          "mean" : 166.66406250000006,
          "variance" : 275796.1610027742,
          "n" : 384,
          "max" : 10205.0,
          "min" : 34.0,
          "sum" : 63999.00000000002,
          "standardDeviation" : 525.1629851796242
        }, {
          "mean" : 144.84827586206885,
          "variance" : 257665.0230096932,
          "n" : 435,
          "max" : 10489.0,
          "min" : 35.0,
          "sum" : 63008.99999999995,
          "standardDeviation" : 507.60715421445076
        }, {
          "mean" : 98.27186761229311,
          "variance" : 9761.629704323661,
          "n" : 423,
          "max" : 751.0,
          "min" : 27.0,
          "sum" : 41568.999999999985,
          "standardDeviation" : 98.80096003745946
        }, {
          "mean" : 55.61073825503351,
          "variance" : 549.0050862250573,
          "n" : 447,
          "max" : 240.0,
          "min" : 26.0,
          "sum" : 24857.999999999978,
          "standardDeviation" : 23.430857564866407
        }, {
          "mean" : 57.15555555555556,
          "variance" : 555.5175667287396,
          "n" : 180,
          "max" : 227.0,
          "min" : 28.0,
          "sum" : 10288.0,
          "standardDeviation" : 23.569420161063352
        } ],
        "18" : [ {
          "mean" : 317.79862700228796,
          "variance" : 1211124.1933008637,
          "n" : 432,
          "max" : 17572.0,
          "min" : 68.0,
          "sum" : 137289.0068649884,
          "standardDeviation" : 1100.5108783200935
        }, {
          "mean" : 113.01066098081031,
          "variance" : 6025.476381827127,
          "n" : 469,
          "max" : 720.0,
          "min" : 35.0,
          "sum" : 53002.00000000004,
          "standardDeviation" : 77.62394206575138
        }, {
          "mean" : 95.37464788732392,
          "variance" : 3491.62477918358,
          "n" : 355,
          "max" : 476.0,
          "min" : 34.0,
          "sum" : 33857.99999999999,
          "standardDeviation" : 59.089971900345155
        }, {
          "mean" : 119.77807486631019,
          "variance" : 6475.240161431377,
          "n" : 374,
          "max" : 537.0,
          "min" : 35.0,
          "sum" : 44797.000000000015,
          "standardDeviation" : 80.46887697384236
        }, {
          "mean" : 117.89890710382508,
          "variance" : 5697.532217980388,
          "n" : 366,
          "max" : 516.0,
          "min" : 35.0,
          "sum" : 43150.99999999998,
          "standardDeviation" : 75.48199929771593
        }, {
          "mean" : 103.18894009216594,
          "variance" : 4471.082002107253,
          "n" : 434,
          "max" : 517.0,
          "min" : 34.0,
          "sum" : 44784.000000000015,
          "standardDeviation" : 66.86614989744253
        }, {
          "mean" : 84.01395348837208,
          "variance" : 4485.00679785331,
          "n" : 430,
          "max" : 490.0,
          "min" : 27.0,
          "sum" : 36125.99999999999,
          "standardDeviation" : 66.97019335385937
        }, {
          "mean" : 54.3432494279176,
          "variance" : 555.4369554720467,
          "n" : 437,
          "max" : 156.0,
          "min" : 27.0,
          "sum" : 23747.99999999999,
          "standardDeviation" : 23.56771001756528
        }, {
          "mean" : 62.86516853932584,
          "variance" : 1173.710531327366,
          "n" : 178,
          "max" : 271.0,
          "min" : 27.0,
          "sum" : 11190.0,
          "standardDeviation" : 34.25945900517645
        } ],
        "19" : [ {
          "mean" : 336.38228438228447,
          "variance" : 4250899.386227478,
          "n" : 424,
          "max" : 37631.0,
          "min" : 69.0,
          "sum" : 142626.08857808862,
          "standardDeviation" : 2061.770934470529
        }, {
          "mean" : 117.75262054507343,
          "variance" : 5327.627750471263,
          "n" : 477,
          "max" : 587.0,
          "min" : 36.0,
          "sum" : 56168.00000000002,
          "standardDeviation" : 72.9906004254744
        }, {
          "mean" : 124.00568181818178,
          "variance" : 286411.2877169124,
          "n" : 352,
          "max" : 10072.0,
          "min" : 35.0,
          "sum" : 43649.999999999985,
          "standardDeviation" : 535.1740723511485
        }, {
          "mean" : 122.97167138810195,
          "variance" : 4899.482149755344,
          "n" : 353,
          "max" : 500.0,
          "min" : 37.0,
          "sum" : 43408.99999999999,
          "standardDeviation" : 69.99630097194668
        }, {
          "mean" : 118.236503856041,
          "variance" : 9083.505777436196,
          "n" : 389,
          "max" : 758.0,
          "min" : 36.0,
          "sum" : 45993.99999999995,
          "standardDeviation" : 95.30742771387861
        }, {
          "mean" : 109.55684454756383,
          "variance" : 7343.703156531587,
          "n" : 431,
          "max" : 611.0,
          "min" : 35.0,
          "sum" : 47219.00000000001,
          "standardDeviation" : 85.69540919169233
        }, {
          "mean" : 111.46482412060301,
          "variance" : 237388.8639988355,
          "n" : 398,
          "max" : 9723.0,
          "min" : 28.0,
          "sum" : 44363.0,
          "standardDeviation" : 487.2256807669681
        }, {
          "mean" : 52.78980891719744,
          "variance" : 605.4472150697933,
          "n" : 471,
          "max" : 236.0,
          "min" : 26.0,
          "sum" : 24863.999999999993,
          "standardDeviation" : 24.605837012176465
        }, {
          "mean" : 57.53888888888888,
          "variance" : 407.19959652389826,
          "n" : 180,
          "max" : 140.0,
          "min" : 27.0,
          "sum" : 10356.999999999998,
          "standardDeviation" : 20.179187211676744
        } ],
        "20" : [ {
          "mean" : 311.3340961098399,
          "variance" : 783724.0165641466,
          "n" : 432,
          "max" : 17275.0,
          "min" : 70.0,
          "sum" : 134496.32951945084,
          "standardDeviation" : 885.2818853699349
        }, {
          "mean" : 144.92226890756305,
          "variance" : 10703.002366209654,
          "n" : 476,
          "max" : 784.0,
          "min" : 35.0,
          "sum" : 68983.00000000001,
          "standardDeviation" : 103.45531579483799
        }, {
          "mean" : 119.7020725388601,
          "variance" : 7272.931787901221,
          "n" : 386,
          "max" : 618.0,
          "min" : 35.0,
          "sum" : 46204.99999999999,
          "standardDeviation" : 85.2814856103083
        }, {
          "mean" : 144.24293785310743,
          "variance" : 13616.768009474878,
          "n" : 354,
          "max" : 787.0,
          "min" : 34.0,
          "sum" : 51062.00000000003,
          "standardDeviation" : 116.69090799833069
        }, {
          "mean" : 172.1534526854219,
          "variance" : 277611.3917765099,
          "n" : 391,
          "max" : 10259.0,
          "min" : 35.0,
          "sum" : 67311.99999999997,
          "standardDeviation" : 526.8884054299448
        }, {
          "mean" : 112.61068702290072,
          "variance" : 9628.274069169647,
          "n" : 393,
          "max" : 732.0,
          "min" : 34.0,
          "sum" : 44255.999999999985,
          "standardDeviation" : 98.12376913454582
        }, {
          "mean" : 93.92677345537756,
          "variance" : 6164.76526777654,
          "n" : 437,
          "max" : 498.0,
          "min" : 27.0,
          "sum" : 41045.99999999999,
          "standardDeviation" : 78.51601917937855
        }, {
          "mean" : 98.63048498845266,
          "variance" : 471496.5575870323,
          "n" : 433,
          "max" : 10240.0,
          "min" : 26.0,
          "sum" : 42707.00000000001,
          "standardDeviation" : 686.6560693586217
        }, {
          "mean" : 55.867816091954026,
          "variance" : 436.7858946249416,
          "n" : 174,
          "max" : 123.0,
          "min" : 27.0,
          "sum" : 9721.0,
          "standardDeviation" : 20.899423308429867
        } ],
        "21" : [ {
          "mean" : 301.04439746300227,
          "variance" : 2821901.334889096,
          "n" : 468,
          "max" : 33449.0,
          "min" : 46.0,
          "sum" : 140888.77801268507,
          "standardDeviation" : 1679.8515812086187
        }, {
          "mean" : 80.90762124711316,
          "variance" : 965.1997797451036,
          "n" : 433,
          "max" : 290.0,
          "min" : 33.0,
          "sum" : 35032.99999999999,
          "standardDeviation" : 31.067664536380967
        }, {
          "mean" : 111.52941176470578,
          "variance" : 168385.4015201585,
          "n" : 357,
          "max" : 7786.0,
          "min" : 33.0,
          "sum" : 39815.99999999996,
          "standardDeviation" : 410.34790302883056
        }, {
          "mean" : 113.35064935064938,
          "variance" : 7235.264745670996,
          "n" : 385,
          "max" : 615.0,
          "min" : 35.0,
          "sum" : 43640.00000000001,
          "standardDeviation" : 85.06035942594526
        }, {
          "mean" : 113.53298153034305,
          "variance" : 8475.762798229825,
          "n" : 379,
          "max" : 667.0,
          "min" : 33.0,
          "sum" : 43029.000000000015,
          "standardDeviation" : 92.06390605568409
        }, {
          "mean" : 92.09535452322737,
          "variance" : 4741.581571503908,
          "n" : 409,
          "max" : 560.0,
          "min" : 34.0,
          "sum" : 37666.99999999999,
          "standardDeviation" : 68.85914297683284
        }, {
          "mean" : 92.98398169336394,
          "variance" : 7251.277265761129,
          "n" : 437,
          "max" : 482.0,
          "min" : 35.0,
          "sum" : 40634.000000000044,
          "standardDeviation" : 85.15443186212406
        }, {
          "mean" : 119.53348729792147,
          "variance" : 9325.254084338389,
          "n" : 433,
          "max" : 744.0,
          "min" : 35.0,
          "sum" : 51757.99999999999,
          "standardDeviation" : 96.56735516901345
        }, {
          "mean" : 122.44827586206894,
          "variance" : 12050.953956547739,
          "n" : 174,
          "max" : 557.0,
          "min" : 35.0,
          "sum" : 21305.999999999996,
          "standardDeviation" : 109.77683706751502
        } ],
        "22" : [ {
          "mean" : 406.31794871794847,
          "variance" : 3470281.281682161,
          "n" : 385,
          "max" : 25866.0,
          "min" : 63.0,
          "sum" : 156432.41025641016,
          "standardDeviation" : 1862.8690994490626
        }, {
          "mean" : 122.90833333333347,
          "variance" : 7616.738970076541,
          "n" : 480,
          "max" : 540.0,
          "min" : 35.0,
          "sum" : 58996.000000000065,
          "standardDeviation" : 87.27393064413073
        }, {
          "mean" : 108.71649484536086,
          "variance" : 7285.666187165345,
          "n" : 388,
          "max" : 546.0,
          "min" : 34.0,
          "sum" : 42182.000000000015,
          "standardDeviation" : 85.35611394133021
        }, {
          "mean" : 137.86968838526894,
          "variance" : 13038.301152459433,
          "n" : 353,
          "max" : 844.0,
          "min" : 35.0,
          "sum" : 48667.999999999935,
          "standardDeviation" : 114.18538064244228
        }, {
          "mean" : 137.31377551020415,
          "variance" : 14966.855257320325,
          "n" : 392,
          "max" : 862.0,
          "min" : 35.0,
          "sum" : 53827.00000000003,
          "standardDeviation" : 122.3390994626016
        }, {
          "mean" : 124.31177829099312,
          "variance" : 14371.557661876657,
          "n" : 433,
          "max" : 824.0,
          "min" : 35.0,
          "sum" : 53827.00000000002,
          "standardDeviation" : 119.8814316809599
        }, {
          "mean" : 99.11655011655016,
          "variance" : 10434.813487135916,
          "n" : 429,
          "max" : 808.0,
          "min" : 26.0,
          "sum" : 42521.000000000015,
          "standardDeviation" : 102.15093483241314
        }, {
          "mean" : 72.3493150684932,
          "variance" : 238708.5161436944,
          "n" : 438,
          "max" : 10261.0,
          "min" : 27.0,
          "sum" : 31689.000000000022,
          "standardDeviation" : 488.5780553235014
        }, {
          "mean" : 56.89265536723165,
          "variance" : 459.1304571135079,
          "n" : 177,
          "max" : 224.0,
          "min" : 28.0,
          "sum" : 10070.000000000002,
          "standardDeviation" : 21.427329677622172
        } ],
        "23" : [ {
          "mean" : 302.5777262180972,
          "variance" : 1955977.518944586,
          "n" : 426,
          "max" : 17134.0,
          "min" : 48.0,
          "sum" : 128898.1113689094,
          "standardDeviation" : 1398.5626617869455
        }, {
          "mean" : 81.06150341685647,
          "variance" : 656.3181265017009,
          "n" : 439,
          "max" : 272.0,
          "min" : 34.0,
          "sum" : 35585.99999999999,
          "standardDeviation" : 25.618706573550917
        }, {
          "mean" : 129.95595854922288,
          "variance" : 476679.5694838839,
          "n" : 386,
          "max" : 13589.0,
          "min" : 33.0,
          "sum" : 50163.00000000004,
          "standardDeviation" : 690.419850151981
        }, {
          "mean" : 132.08169014084493,
          "variance" : 11263.730596005415,
          "n" : 355,
          "max" : 822.0,
          "min" : 35.0,
          "sum" : 46888.99999999995,
          "standardDeviation" : 106.13072409064877
        }, {
          "mean" : 127.97948717948722,
          "variance" : 13147.891608990842,
          "n" : 390,
          "max" : 888.0,
          "min" : 35.0,
          "sum" : 49912.000000000015,
          "standardDeviation" : 114.66425602161661
        }, {
          "mean" : 125.20323325635103,
          "variance" : 13270.967859892222,
          "n" : 433,
          "max" : 789.0,
          "min" : 34.0,
          "sum" : 54212.99999999999,
          "standardDeviation" : 115.19968689146782
        }, {
          "mean" : 113.27610208816715,
          "variance" : 12232.874753143038,
          "n" : 431,
          "max" : 694.0,
          "min" : 35.0,
          "sum" : 48822.000000000044,
          "standardDeviation" : 110.60232706929379
        }, {
          "mean" : 529.5936073059357,
          "variance" : 7.566473470403232E7,
          "n" : 438,
          "max" : 182146.0,
          "min" : 34.0,
          "sum" : 231961.99999999985,
          "standardDeviation" : 8698.547850304229
        }, {
          "mean" : 109.12429378531073,
          "variance" : 15597.870826913195,
          "n" : 177,
          "max" : 739.0,
          "min" : 35.0,
          "sum" : 19315.0,
          "standardDeviation" : 124.89143616322616
        } ],
        "24" : [ {
          "mean" : 300.8996138996138,
          "variance" : 1111000.0324563289,
          "n" : 513,
          "max" : 17543.0,
          "min" : 69.0,
          "sum" : 154361.5019305019,
          "standardDeviation" : 1054.039862840267
        }, {
          "mean" : 147.45879120879107,
          "variance" : 281394.6842475707,
          "n" : 364,
          "max" : 10123.0,
          "min" : 35.0,
          "sum" : 53674.99999999995,
          "standardDeviation" : 530.4664779678078
        }, {
          "mean" : 106.19252873563221,
          "variance" : 4402.841788399744,
          "n" : 348,
          "max" : 534.0,
          "min" : 36.0,
          "sum" : 36955.00000000001,
          "standardDeviation" : 66.3539131355472
        }, {
          "mean" : 115.22580645161284,
          "variance" : 9697.037822798004,
          "n" : 372,
          "max" : 784.0,
          "min" : 36.0,
          "sum" : 42863.99999999998,
          "standardDeviation" : 98.47353869338708
        }, {
          "mean" : 141.6647887323944,
          "variance" : 11839.037033500432,
          "n" : 355,
          "max" : 599.0,
          "min" : 34.0,
          "sum" : 50291.000000000015,
          "standardDeviation" : 108.80733906083924
        }, {
          "mean" : 125.67703349282299,
          "variance" : 12252.468583984493,
          "n" : 418,
          "max" : 720.0,
          "min" : 33.0,
          "sum" : 52533.00000000001,
          "standardDeviation" : 110.69086946981894
        }, {
          "mean" : 105.91707317073163,
          "variance" : 9633.337849603431,
          "n" : 410,
          "max" : 597.0,
          "min" : 29.0,
          "sum" : 43425.99999999996,
          "standardDeviation" : 98.14956876931977
        }, {
          "mean" : 58.028205128205116,
          "variance" : 828.5261947135989,
          "n" : 390,
          "max" : 277.0,
          "min" : 26.0,
          "sum" : 22630.999999999996,
          "standardDeviation" : 28.784130952898316
        }, {
          "mean" : 58.33986928104574,
          "variance" : 957.5037822779387,
          "n" : 306,
          "max" : 237.0,
          "min" : 26.0,
          "sum" : 17851.999999999996,
          "standardDeviation" : 30.943558009348873
        } ],
        "25" : [ {
          "mean" : 358.590330788804,
          "variance" : 1643825.4108246346,
          "n" : 388,
          "max" : 20677.0,
          "min" : 61.0,
          "sum" : 139133.04834605596,
          "standardDeviation" : 1282.1175495346106
        }, {
          "mean" : 115.07547169811323,
          "variance" : 5358.922863485017,
          "n" : 477,
          "max" : 531.0,
          "min" : 34.0,
          "sum" : 54891.000000000015,
          "standardDeviation" : 73.20466421946772
        }, {
          "mean" : 119.33160621761655,
          "variance" : 236321.13650494575,
          "n" : 386,
          "max" : 9579.0,
          "min" : 34.0,
          "sum" : 46061.99999999999,
          "standardDeviation" : 486.12872421298636
        }, {
          "mean" : 98.11609498680747,
          "variance" : 3062.4362217475636,
          "n" : 379,
          "max" : 480.0,
          "min" : 34.0,
          "sum" : 37186.00000000003,
          "standardDeviation" : 55.339282808395375
        }, {
          "mean" : 126.8333333333333,
          "variance" : 7545.2570776255725,
          "n" : 366,
          "max" : 546.0,
          "min" : 36.0,
          "sum" : 46420.999999999985,
          "standardDeviation" : 86.86343924589661
        }, {
          "mean" : 122.99310344827589,
          "variance" : 234005.93774034633,
          "n" : 435,
          "max" : 10056.0,
          "min" : 34.0,
          "sum" : 53502.000000000015,
          "standardDeviation" : 483.74160224271213
        }, {
          "mean" : 89.16551724137936,
          "variance" : 6770.249038614326,
          "n" : 435,
          "max" : 820.0,
          "min" : 27.0,
          "sum" : 38787.00000000002,
          "standardDeviation" : 82.28152306936428
        }, {
          "mean" : 53.60229885057471,
          "variance" : 423.5442343344453,
          "n" : 435,
          "max" : 238.0,
          "min" : 27.0,
          "sum" : 23317.0,
          "standardDeviation" : 20.58019033766319
        }, {
          "mean" : 52.52298850574711,
          "variance" : 797.8116072021795,
          "n" : 174,
          "max" : 271.0,
          "min" : 27.0,
          "sum" : 9138.999999999996,
          "standardDeviation" : 28.245559070448216
        } ],
        "26" : [ {
          "mean" : 292.2828507795096,
          "variance" : 1836010.4622275704,
          "n" : 444,
          "max" : 22150.0,
          "min" : 42.0,
          "sum" : 129773.58574610227,
          "standardDeviation" : 1354.9946354977094
        }, {
          "mean" : 119.52886836027717,
          "variance" : 8301.43955820717,
          "n" : 433,
          "max" : 805.0,
          "min" : 35.0,
          "sum" : 51756.000000000015,
          "standardDeviation" : 91.11223605096721
        }, {
          "mean" : 106.98670212765958,
          "variance" : 6508.066489361704,
          "n" : 376,
          "max" : 618.0,
          "min" : 35.0,
          "sum" : 40227.0,
          "standardDeviation" : 80.67258821533932
        }, {
          "mean" : 136.05769230769224,
          "variance" : 15118.307957194329,
          "n" : 364,
          "max" : 776.0,
          "min" : 35.0,
          "sum" : 49524.99999999997,
          "standardDeviation" : 122.95652872944295
        }, {
          "mean" : 135.45931758530173,
          "variance" : 19175.13320900677,
          "n" : 381,
          "max" : 1119.0,
          "min" : 34.0,
          "sum" : 51609.99999999996,
          "standardDeviation" : 138.47430523027285
        }, {
          "mean" : 117.95150115473443,
          "variance" : 12700.518475750589,
          "n" : 433,
          "max" : 770.0,
          "min" : 34.0,
          "sum" : 51073.00000000001,
          "standardDeviation" : 112.69657703653021
        }, {
          "mean" : 78.38747099767981,
          "variance" : 6672.442540333455,
          "n" : 431,
          "max" : 612.0,
          "min" : 26.0,
          "sum" : 33785.0,
          "standardDeviation" : 81.68502029340175
        }, {
          "mean" : 75.91343963553533,
          "variance" : 240155.04271850717,
          "n" : 439,
          "max" : 10310.0,
          "min" : 27.0,
          "sum" : 33326.00000000001,
          "standardDeviation" : 490.0561628206579
        }, {
          "mean" : 56.683908045977,
          "variance" : 599.5006644076807,
          "n" : 174,
          "max" : 246.0,
          "min" : 27.0,
          "sum" : 9862.999999999998,
          "standardDeviation" : 24.484702661206256
        } ],
        "27" : [ {
          "mean" : 313.0697674418605,
          "variance" : 1178881.3937225586,
          "n" : 425,
          "max" : 19038.0,
          "min" : 62.0,
          "sum" : 133054.65116279072,
          "standardDeviation" : 1085.763046765987
        }, {
          "mean" : 116.43392070484583,
          "variance" : 6285.69871439547,
          "n" : 454,
          "max" : 559.0,
          "min" : 35.0,
          "sum" : 52861.00000000001,
          "standardDeviation" : 79.28239851565712
        }, {
          "mean" : 110.95417789757411,
          "variance" : 5559.78978655205,
          "n" : 371,
          "max" : 575.0,
          "min" : 35.0,
          "sum" : 41163.99999999999,
          "standardDeviation" : 74.56399792495068
        }, {
          "mean" : 113.83898305084746,
          "variance" : 9996.475416526628,
          "n" : 354,
          "max" : 594.0,
          "min" : 35.0,
          "sum" : 40299.0,
          "standardDeviation" : 99.98237552952334
        }, {
          "mean" : 138.56122448979593,
          "variance" : 14801.505193381685,
          "n" : 392,
          "max" : 710.0,
          "min" : 34.0,
          "sum" : 54316.00000000001,
          "standardDeviation" : 121.66143675537324
        }, {
          "mean" : 116.11627906976746,
          "variance" : 9074.382718057152,
          "n" : 430,
          "max" : 538.0,
          "min" : 34.0,
          "sum" : 49930.00000000001,
          "standardDeviation" : 95.25955447122956
        }, {
          "mean" : 102.54028436018967,
          "variance" : 11355.726401819174,
          "n" : 422,
          "max" : 1108.0,
          "min" : 27.0,
          "sum" : 43272.000000000044,
          "standardDeviation" : 106.56325070970374
        }, {
          "mean" : 56.751677852349026,
          "variance" : 646.8238480753606,
          "n" : 447,
          "max" : 239.0,
          "min" : 27.0,
          "sum" : 25368.000000000015,
          "standardDeviation" : 25.43273182486224
        }, {
          "mean" : 106.03333333333333,
          "variance" : 504111.540782123,
          "n" : 180,
          "max" : 9573.0,
          "min" : 26.0,
          "sum" : 19086.0,
          "standardDeviation" : 710.0081272648384
        } ],
        "28" : [ {
          "mean" : 334.07822410148,
          "variance" : 1720492.5468341275,
          "n" : 468,
          "max" : 19812.0,
          "min" : 67.0,
          "sum" : 156348.60887949262,
          "standardDeviation" : 1311.6754731388887
        }, {
          "mean" : 125.2292191435767,
          "variance" : 10801.414497621037,
          "n" : 397,
          "max" : 773.0,
          "min" : 35.0,
          "sum" : 49715.99999999995,
          "standardDeviation" : 103.92985373616686
        }, {
          "mean" : 106.69540229885061,
          "variance" : 7854.863725197923,
          "n" : 348,
          "max" : 562.0,
          "min" : 34.0,
          "sum" : 37130.000000000015,
          "standardDeviation" : 88.62766907234965
        }, {
          "mean" : 96.50260416666663,
          "variance" : 5558.391638109223,
          "n" : 384,
          "max" : 666.0,
          "min" : 34.0,
          "sum" : 37056.999999999985,
          "standardDeviation" : 74.5546218427082
        }, {
          "mean" : 142.72549019607854,
          "variance" : 14390.463758537115,
          "n" : 357,
          "max" : 790.0,
          "min" : 35.0,
          "sum" : 50953.00000000004,
          "standardDeviation" : 119.96025907998497
        }, {
          "mean" : 122.27644230769234,
          "variance" : 15230.687250926785,
          "n" : 416,
          "max" : 673.0,
          "min" : 35.0,
          "sum" : 50867.000000000015,
          "standardDeviation" : 123.41267054450603
        }, {
          "mean" : 102.85085574572128,
          "variance" : 10081.450740687475,
          "n" : 409,
          "max" : 551.0,
          "min" : 27.0,
          "sum" : 42066.0,
          "standardDeviation" : 100.40642778571238
        }, {
          "mean" : 51.438515081206475,
          "variance" : 575.5119084875624,
          "n" : 431,
          "max" : 236.0,
          "min" : 27.0,
          "sum" : 22169.99999999999,
          "standardDeviation" : 23.98982927174686
        }, {
          "mean" : 54.95094339622642,
          "variance" : 653.8119782732987,
          "n" : 265,
          "max" : 238.0,
          "min" : 27.0,
          "sum" : 14562.000000000002,
          "standardDeviation" : 25.56974732517509
        } ],
        "29" : [ {
          "mean" : 306.89814814814844,
          "variance" : 1126064.1612958661,
          "n" : 427,
          "max" : 14704.0,
          "min" : 50.0,
          "sum" : 131045.50925925939,
          "standardDeviation" : 1061.161703651176
        }, {
          "mean" : 84.8493150684932,
          "variance" : 1047.8811322529082,
          "n" : 438,
          "max" : 297.0,
          "min" : 34.0,
          "sum" : 37164.00000000002,
          "standardDeviation" : 32.37099214193022
        }, {
          "mean" : 116.87356321839079,
          "variance" : 323757.1078869788,
          "n" : 348,
          "max" : 10646.0,
          "min" : 33.0,
          "sum" : 40671.99999999999,
          "standardDeviation" : 568.9965798552561
        }, {
          "mean" : 129.80208333333334,
          "variance" : 13857.934617058307,
          "n" : 384,
          "max" : 829.0,
          "min" : 36.0,
          "sum" : 49844.0,
          "standardDeviation" : 117.71972909015
        }, {
          "mean" : 131.90422535211283,
          "variance" : 16090.917354977324,
          "n" : 355,
          "max" : 705.0,
          "min" : 34.0,
          "sum" : 46826.00000000006,
          "standardDeviation" : 126.8499797200509
        }, {
          "mean" : 117.56744186046517,
          "variance" : 11993.341594839267,
          "n" : 430,
          "max" : 670.0,
          "min" : 36.0,
          "sum" : 50554.00000000002,
          "standardDeviation" : 109.51411596154747
        }, {
          "mean" : 111.63224181360195,
          "variance" : 9980.283604305025,
          "n" : 397,
          "max" : 635.0,
          "min" : 35.0,
          "sum" : 44317.99999999997,
          "standardDeviation" : 99.90136938153063
        }, {
          "mean" : 116.34027777777781,
          "variance" : 12511.839858855377,
          "n" : 432,
          "max" : 692.0,
          "min" : 35.0,
          "sum" : 50259.000000000015,
          "standardDeviation" : 111.85633580113098
        }, {
          "mean" : 118.15530303030295,
          "variance" : 14782.268564926837,
          "n" : 264,
          "max" : 623.0,
          "min" : 35.0,
          "sum" : 31192.999999999978,
          "standardDeviation" : 121.58235301608057
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
      "meanOld" : 1.5300840083555555E8,
      "meanCurrent" : 1398.9237401620255,
      "deviationOld" : 5227384.0539198015,
      "deviationCurrent" : 2572.6801198115354,
      "vms" : 29,
      "callsOld" : 450,
      "calls" : 3151,
      "tvalue" : 160.31991343932935,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "FASTER",
    "inVMDeviationPredecessor" : 2.4500383626516804E7,
    "inVMDeviation" : 7102.512116859986,
    "ess" : 1,
    "values" : [ 787.090496156534, 815.6318452380953, 1035.205882352941, 891.9396939693968, 1897.262244897959, 1019.2046703296704, 1029.9404502541759, 14728.736981465136, 879.3984272608127, 734.2272563825962, 856.2678326474623, 76427.41524216524, 862.7809523809523, 813.4742571344512, 935.6118746564047, 806.6199633699633, 796.9308176100628, 799.4716981132076, 866.7001078748651, 890.6568334578043, 935.4296316657503, 975.1472269868497, 726.6231292517008, 937.1129090255305, 837.2013221153848, 886.5931241655541, 757.2196261682243, 1201.798412698413, 838.6439888164026, 1025.8668082524273 ],
    "valuesPredecessor" : [ 1.4984097973333332E8, 1.545728634E8, 1.6003340426666668E8, 1.6697625266666666E8, 1.4633548013333333E8, 1.5352156453333333E8, 1.5486020013333333E8, 1.5379705293333334E8, 1.5719511833333334E8, 1.5162299213333333E8, 1.503417474E8, 1.48784212E8, 1.4791127186666667E8, 1.4835114E8, 1.4638067993333334E8, 1.5395825453333333E8, 1.558130672E8, 1.54262479E8, 1.5274342113333333E8, 1.4831448266666666E8, 1.528012948E8, 1.4851715426666668E8, 1.533781264E8, 1.5547236613333333E8, 1.64610857E8, 1.5985628413333333E8, 1.566711462E8, 1.4821466173333332E8, 1.4486853033333334E8, 1.5024494006666666E8 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1549.4814814814815,
          "variance" : 2665710.720797721,
          "n" : 22,
          "max" : 8415.0,
          "min" : 773.0,
          "sum" : 34088.59259259259,
          "standardDeviation" : 1632.7004381691459
        }, {
          "mean" : 830.3793103448276,
          "variance" : 875465.6009852216,
          "n" : 29,
          "max" : 5521.0,
          "min" : 350.0,
          "sum" : 24081.0,
          "standardDeviation" : 935.6631877899341
        }, {
          "mean" : 477.9642857142858,
          "variance" : 19451.813492063484,
          "n" : 28,
          "max" : 932.0,
          "min" : 304.0,
          "sum" : 13383.000000000002,
          "standardDeviation" : 139.46975834231407
        }, {
          "mean" : 454.6818181818182,
          "variance" : 15955.655844155848,
          "n" : 22,
          "max" : 765.0,
          "min" : 289.0,
          "sum" : 10003.0,
          "standardDeviation" : 126.31569911992669
        }, {
          "mean" : 375.2,
          "variance" : 10870.7,
          "n" : 5,
          "max" : 557.0,
          "min" : 302.0,
          "sum" : 1876.0,
          "standardDeviation" : 104.26264911270958
        } ],
        "1" : [ {
          "mean" : 1323.53125,
          "variance" : 2200099.5473790327,
          "n" : 27,
          "max" : 7482.0,
          "min" : 654.0,
          "sum" : 35735.34375,
          "standardDeviation" : 1483.273254454159
        }, {
          "mean" : 875.5217391304346,
          "variance" : 1294610.9881422922,
          "n" : 23,
          "max" : 6020.0,
          "min" : 477.0,
          "sum" : 20136.999999999996,
          "standardDeviation" : 1137.8097328386202
        }, {
          "mean" : 545.7142857142859,
          "variance" : 27195.61904761905,
          "n" : 28,
          "max" : 981.0,
          "min" : 329.0,
          "sum" : 15280.000000000005,
          "standardDeviation" : 164.91094277706088
        }, {
          "mean" : 534.047619047619,
          "variance" : 34263.84761904762,
          "n" : 21,
          "max" : 1054.0,
          "min" : 315.0,
          "sum" : 11215.0,
          "standardDeviation" : 185.10496378824536
        }, {
          "mean" : 545.6666666666667,
          "variance" : 22194.666666666668,
          "n" : 6,
          "max" : 842.0,
          "min" : 424.0,
          "sum" : 3274.0000000000005,
          "standardDeviation" : 148.97874568765394
        } ],
        "2" : [ {
          "mean" : 1781.9999999999998,
          "variance" : 6907939.039999998,
          "n" : 21,
          "max" : 12332.0,
          "min" : 723.0,
          "sum" : 37421.99999999999,
          "standardDeviation" : 2628.2958433174904
        }, {
          "mean" : 1568.2592592592587,
          "variance" : 1.3318076199430197E7,
          "n" : 27,
          "max" : 17442.0,
          "min" : 339.0,
          "sum" : 42342.999999999985,
          "standardDeviation" : 3649.3939496072767
        }, {
          "mean" : 476.0,
          "variance" : 8889.846153846156,
          "n" : 27,
          "max" : 715.0,
          "min" : 312.0,
          "sum" : 12852.0,
          "standardDeviation" : 94.28598068560434
        }, {
          "mean" : 469.22727272727263,
          "variance" : 16873.612554112562,
          "n" : 22,
          "max" : 728.0,
          "min" : 312.0,
          "sum" : 10322.999999999998,
          "standardDeviation" : 129.89847017618246
        }, {
          "mean" : 530.2,
          "variance" : 8975.2,
          "n" : 5,
          "max" : 662.0,
          "min" : 428.0,
          "sum" : 2651.0,
          "standardDeviation" : 94.73753216122954
        } ],
        "3" : [ {
          "mean" : 1475.8181818181815,
          "variance" : 2535905.59090909,
          "n" : 28,
          "max" : 7481.0,
          "min" : 673.0,
          "sum" : 41322.90909090908,
          "standardDeviation" : 1592.4526966001501
        }, {
          "mean" : 1129.4761904761904,
          "variance" : 2778447.061904761,
          "n" : 21,
          "max" : 8303.0,
          "min" : 492.0,
          "sum" : 23718.999999999996,
          "standardDeviation" : 1666.8674398118048
        }, {
          "mean" : 440.65384615384625,
          "variance" : 15770.715384615385,
          "n" : 26,
          "max" : 721.0,
          "min" : 303.0,
          "sum" : 11457.000000000002,
          "standardDeviation" : 125.5815089279285
        }, {
          "mean" : 556.6666666666666,
          "variance" : 29375.73333333333,
          "n" : 21,
          "max" : 1021.0,
          "min" : 403.0,
          "sum" : 11690.0,
          "standardDeviation" : 171.3935043498829
        }, {
          "mean" : 379.4,
          "variance" : 11657.800000000001,
          "n" : 5,
          "max" : 568.0,
          "min" : 312.0,
          "sum" : 1897.0,
          "standardDeviation" : 107.97129248091828
        } ],
        "4" : [ {
          "mean" : 6517.892857142855,
          "variance" : 7.589694508399472E8,
          "n" : 23,
          "max" : 146955.0,
          "min" : 673.0,
          "sum" : 149911.53571428568,
          "standardDeviation" : 27549.40019020282
        }, {
          "mean" : 799.851851851852,
          "variance" : 1700818.5925925921,
          "n" : 27,
          "max" : 7247.0,
          "min" : 319.0,
          "sum" : 21596.000000000004,
          "standardDeviation" : 1304.154359189353
        }, {
          "mean" : 517.4999999999999,
          "variance" : 19469.44444444444,
          "n" : 28,
          "max" : 897.0,
          "min" : 315.0,
          "sum" : 14489.999999999996,
          "standardDeviation" : 139.53295110634062
        }, {
          "mean" : 514.4090909090909,
          "variance" : 42505.30086580088,
          "n" : 22,
          "max" : 1278.0,
          "min" : 307.0,
          "sum" : 11317.0,
          "standardDeviation" : 206.16813736802513
        }, {
          "mean" : 379.6,
          "variance" : 12680.299999999997,
          "n" : 5,
          "max" : 568.0,
          "min" : 300.0,
          "sum" : 1898.0,
          "standardDeviation" : 112.6068381582575
        } ],
        "5" : [ {
          "mean" : 1834.1428571428573,
          "variance" : 5635996.571428571,
          "n" : 23,
          "max" : 10087.0,
          "min" : 814.0,
          "sum" : 42185.28571428572,
          "standardDeviation" : 2374.025394015104
        }, {
          "mean" : 891.0000000000001,
          "variance" : 1459648.5185185191,
          "n" : 28,
          "max" : 6942.0,
          "min" : 364.0,
          "sum" : 24948.000000000004,
          "standardDeviation" : 1208.159144532921
        }, {
          "mean" : 894.7037037037036,
          "variance" : 3750179.5242165253,
          "n" : 27,
          "max" : 10539.0,
          "min" : 326.0,
          "sum" : 24156.999999999996,
          "standardDeviation" : 1936.538025502346
        }, {
          "mean" : 568.2857142857142,
          "variance" : 15860.314285714285,
          "n" : 21,
          "max" : 861.0,
          "min" : 438.0,
          "sum" : 11933.999999999998,
          "standardDeviation" : 125.93773971972931
        }, {
          "mean" : 554.6,
          "variance" : 21486.300000000003,
          "n" : 5,
          "max" : 812.0,
          "min" : 451.0,
          "sum" : 2773.0,
          "standardDeviation" : 146.58205892946108
        } ],
        "6" : [ {
          "mean" : 1859.8148148148148,
          "variance" : 4427122.002849004,
          "n" : 22,
          "max" : 7499.0,
          "min" : 741.0,
          "sum" : 40915.92592592593,
          "standardDeviation" : 2104.0727180515896
        }, {
          "mean" : 990.1071428571432,
          "variance" : 2844533.728835979,
          "n" : 28,
          "max" : 9498.0,
          "min" : 346.0,
          "sum" : 27723.00000000001,
          "standardDeviation" : 1686.5745547813708
        }, {
          "mean" : 1110.45,
          "variance" : 4433159.628947366,
          "n" : 20,
          "max" : 9978.0,
          "min" : 394.0,
          "sum" : 22209.0,
          "standardDeviation" : 2105.50697670356
        }, {
          "mean" : 416.7407407407407,
          "variance" : 10616.737891737892,
          "n" : 27,
          "max" : 620.0,
          "min" : 293.0,
          "sum" : 11251.999999999998,
          "standardDeviation" : 103.03755573448883
        }, {
          "mean" : 590.8,
          "variance" : 17570.200000000004,
          "n" : 5,
          "max" : 758.0,
          "min" : 483.0,
          "sum" : 2954.0,
          "standardDeviation" : 132.55263105649772
        } ],
        "7" : [ {
          "mean" : 52320.81818181818,
          "variance" : 8.616001154040341E10,
          "n" : 28,
          "max" : 1687418.0,
          "min" : 824.0,
          "sum" : 1464982.909090909,
          "standardDeviation" : 293530.2566012632
        }, {
          "mean" : 962.7142857142857,
          "variance" : 2475851.4142857143,
          "n" : 21,
          "max" : 7798.0,
          "min" : 403.0,
          "sum" : 20217.0,
          "standardDeviation" : 1573.4838462106036
        }, {
          "mean" : 611.3846153846152,
          "variance" : 22304.166153846156,
          "n" : 26,
          "max" : 1056.0,
          "min" : 439.0,
          "sum" : 15895.999999999996,
          "standardDeviation" : 149.345793894057
        }, {
          "mean" : 597.5454545454546,
          "variance" : 39095.116883116876,
          "n" : 22,
          "max" : 977.0,
          "min" : 333.0,
          "sum" : 13146.000000000002,
          "standardDeviation" : 197.72485145554384
        }, {
          "mean" : 469.66666666666663,
          "variance" : 2300.666666666667,
          "n" : 6,
          "max" : 552.0,
          "min" : 415.0,
          "sum" : 2818.0,
          "standardDeviation" : 47.96526521001074
        } ],
        "8" : [ {
          "mean" : 1486.3142857142857,
          "variance" : 2071907.1630252101,
          "n" : 30,
          "max" : 7301.0,
          "min" : 781.0,
          "sum" : 44589.42857142857,
          "standardDeviation" : 1439.4120893702436
        }, {
          "mean" : 1010.0454545454548,
          "variance" : 1781326.7121212124,
          "n" : 22,
          "max" : 6888.0,
          "min" : 399.0,
          "sum" : 22221.000000000007,
          "standardDeviation" : 1334.6635201882204
        }, {
          "mean" : 523.6896551724137,
          "variance" : 16961.150246305417,
          "n" : 29,
          "max" : 893.0,
          "min" : 394.0,
          "sum" : 15186.999999999998,
          "standardDeviation" : 130.234980885726
        }, {
          "mean" : 511.68181818181824,
          "variance" : 20178.227272727283,
          "n" : 22,
          "max" : 869.0,
          "min" : 385.0,
          "sum" : 11257.000000000002,
          "standardDeviation" : 142.05008719718296
        }, {
          "mean" : 433.3333333333333,
          "variance" : 7841.066666666665,
          "n" : 6,
          "max" : 553.0,
          "min" : 318.0,
          "sum" : 2600.0,
          "standardDeviation" : 88.54979766587084
        } ],
        "9" : [ {
          "mean" : 1366.5185185185187,
          "variance" : 1718869.0284900288,
          "n" : 22,
          "max" : 6040.0,
          "min" : 587.0,
          "sum" : 30063.407407407412,
          "standardDeviation" : 1311.0564551116893
        }, {
          "mean" : 900.7037037037037,
          "variance" : 1812975.6011396013,
          "n" : 27,
          "max" : 7597.0,
          "min" : 455.0,
          "sum" : 24319.0,
          "standardDeviation" : 1346.4678240268504
        }, {
          "mean" : 408.8636363636364,
          "variance" : 9883.932900432901,
          "n" : 22,
          "max" : 633.0,
          "min" : 293.0,
          "sum" : 8995.0,
          "standardDeviation" : 99.41797071170232
        }, {
          "mean" : 388.925925925926,
          "variance" : 8070.917378917379,
          "n" : 27,
          "max" : 572.0,
          "min" : 297.0,
          "sum" : 10501.000000000002,
          "standardDeviation" : 89.83828459469481
        }, {
          "mean" : 349.4,
          "variance" : 3672.8,
          "n" : 5,
          "max" : 457.0,
          "min" : 316.0,
          "sum" : 1747.0,
          "standardDeviation" : 60.603630254300775
        } ],
        "10" : [ {
          "mean" : 1646.8148148148146,
          "variance" : 3789974.387464387,
          "n" : 22,
          "max" : 9446.0,
          "min" : 797.0,
          "sum" : 36229.92592592592,
          "standardDeviation" : 1946.785655244148
        }, {
          "mean" : 1060.0714285714287,
          "variance" : 3248523.253968254,
          "n" : 28,
          "max" : 10221.0,
          "min" : 506.0,
          "sum" : 29682.000000000004,
          "standardDeviation" : 1802.3660155385348
        }, {
          "mean" : 376.1666666666667,
          "variance" : 4042.7536231884064,
          "n" : 24,
          "max" : 596.0,
          "min" : 325.0,
          "sum" : 9028.0,
          "standardDeviation" : 63.58265190433949
        }, {
          "mean" : 511.0357142857143,
          "variance" : 9368.924603174602,
          "n" : 28,
          "max" : 781.0,
          "min" : 387.0,
          "sum" : 14309.0,
          "standardDeviation" : 96.7932053564433
        }, {
          "mean" : 538.0,
          "variance" : 5149.200000000002,
          "n" : 6,
          "max" : 666.0,
          "min" : 459.0,
          "sum" : 3228.0,
          "standardDeviation" : 71.75792639144474
        } ],
        "11" : [ {
          "mean" : 389347.23076923075,
          "variance" : 3.911442447733545E12,
          "n" : 21,
          "max" : 1.0085997E7,
          "min" : 821.0,
          "sum" : 8176291.846153846,
          "standardDeviation" : 1977736.6982825457
        }, {
          "mean" : 1279.8620689655172,
          "variance" : 5805836.551724137,
          "n" : 29,
          "max" : 13748.0,
          "min" : 344.0,
          "sum" : 37116.0,
          "standardDeviation" : 2409.530359162162
        }, {
          "mean" : 867.5862068965517,
          "variance" : 4057279.89408867,
          "n" : 29,
          "max" : 11324.0,
          "min" : 344.0,
          "sum" : 25160.0,
          "standardDeviation" : 2014.2690719188115
        }, {
          "mean" : 526.4347826086957,
          "variance" : 23892.43873517787,
          "n" : 23,
          "max" : 853.0,
          "min" : 315.0,
          "sum" : 12108.000000000002,
          "standardDeviation" : 154.57179152477295
        }, {
          "mean" : 580.8333333333334,
          "variance" : 8651.366666666663,
          "n" : 6,
          "max" : 740.0,
          "min" : 494.0,
          "sum" : 3485.0,
          "standardDeviation" : 93.01272314402296
        } ],
        "12" : [ {
          "mean" : 1396.0,
          "variance" : 2153258.8124999995,
          "n" : 28,
          "max" : 6044.0,
          "min" : 570.0,
          "sum" : 39088.0,
          "standardDeviation" : 1467.39865493328
        }, {
          "mean" : 945.7142857142853,
          "variance" : 4228270.656084657,
          "n" : 28,
          "max" : 11397.0,
          "min" : 323.0,
          "sum" : 26479.99999999999,
          "standardDeviation" : 2056.275919249325
        }, {
          "mean" : 503.7727272727275,
          "variance" : 18821.13636363638,
          "n" : 22,
          "max" : 923.0,
          "min" : 311.0,
          "sum" : 11083.000000000004,
          "standardDeviation" : 137.19014674398588
        }, {
          "mean" : 502.2380952380952,
          "variance" : 12494.190476190479,
          "n" : 21,
          "max" : 723.0,
          "min" : 307.0,
          "sum" : 10546.999999999998,
          "standardDeviation" : 111.77741487523532
        }, {
          "mean" : 565.6666666666666,
          "variance" : 10692.666666666668,
          "n" : 6,
          "max" : 719.0,
          "min" : 455.0,
          "sum" : 3394.0,
          "standardDeviation" : 103.40535124773122
        } ],
        "13" : [ {
          "mean" : 1346.0303030303032,
          "variance" : 1922594.967803031,
          "n" : 28,
          "max" : 7201.0,
          "min" : 627.0,
          "sum" : 37688.84848484849,
          "standardDeviation" : 1386.57670822895
        }, {
          "mean" : 981.3809523809524,
          "variance" : 2975644.0476190476,
          "n" : 21,
          "max" : 8451.0,
          "min" : 319.0,
          "sum" : 20609.0,
          "standardDeviation" : 1725.005521040164
        }, {
          "mean" : 443.6785714285714,
          "variance" : 13502.892857142857,
          "n" : 28,
          "max" : 778.0,
          "min" : 308.0,
          "sum" : 12422.999999999998,
          "standardDeviation" : 116.20194859443131
        }, {
          "mean" : 493.9523809523809,
          "variance" : 18857.74761904762,
          "n" : 21,
          "max" : 882.0,
          "min" : 317.0,
          "sum" : 10372.999999999998,
          "standardDeviation" : 137.32351444325775
        }, {
          "mean" : 538.8,
          "variance" : 6284.700000000003,
          "n" : 5,
          "max" : 668.0,
          "min" : 474.0,
          "sum" : 2694.0,
          "standardDeviation" : 79.27609980315633
        } ],
        "14" : [ {
          "mean" : 1735.7058823529412,
          "variance" : 2600861.244206774,
          "n" : 29,
          "max" : 7984.0,
          "min" : 945.0,
          "sum" : 50335.470588235294,
          "standardDeviation" : 1612.7185880390832
        }, {
          "mean" : 931.7272727272727,
          "variance" : 1496230.7792207792,
          "n" : 22,
          "max" : 6316.0,
          "min" : 478.0,
          "sum" : 20498.0,
          "standardDeviation" : 1223.2051255700244
        }, {
          "mean" : 589.8214285714287,
          "variance" : 30808.003968253954,
          "n" : 28,
          "max" : 976.0,
          "min" : 387.0,
          "sum" : 16515.000000000004,
          "standardDeviation" : 175.52208968746342
        }, {
          "mean" : 450.04545454545456,
          "variance" : 23761.56926406926,
          "n" : 22,
          "max" : 930.0,
          "min" : 310.0,
          "sum" : 9901.0,
          "standardDeviation" : 154.1478811533563
        }, {
          "mean" : 476.83333333333337,
          "variance" : 4283.766666666667,
          "n" : 6,
          "max" : 590.0,
          "min" : 396.0,
          "sum" : 2861.0,
          "standardDeviation" : 65.45049019424276
        } ],
        "15" : [ {
          "mean" : 1660.904761904762,
          "variance" : 2636248.890476191,
          "n" : 16,
          "max" : 7303.0,
          "min" : 803.0,
          "sum" : 26574.47619047619,
          "standardDeviation" : 1623.6529464378127
        }, {
          "mean" : 947.4848484848482,
          "variance" : 1155009.8200757576,
          "n" : 33,
          "max" : 6550.0,
          "min" : 302.0,
          "sum" : 31266.99999999999,
          "standardDeviation" : 1074.7138317132415
        }, {
          "mean" : 470.85714285714283,
          "variance" : 14559.028571428566,
          "n" : 21,
          "max" : 813.0,
          "min" : 326.0,
          "sum" : 9888.0,
          "standardDeviation" : 120.66079964689678
        }, {
          "mean" : 470.75,
          "variance" : 24764.342592592584,
          "n" : 28,
          "max" : 855.0,
          "min" : 287.0,
          "sum" : 13181.0,
          "standardDeviation" : 157.3669043750705
        }, {
          "mean" : 496.33333333333337,
          "variance" : 11737.866666666667,
          "n" : 6,
          "max" : 717.0,
          "min" : 442.0,
          "sum" : 2978.0,
          "standardDeviation" : 108.34143559445143
        } ],
        "16" : [ {
          "mean" : 1424.666666666667,
          "variance" : 2124331.230769231,
          "n" : 22,
          "max" : 6955.0,
          "min" : 577.0,
          "sum" : 31342.66666666667,
          "standardDeviation" : 1457.508569706961
        }, {
          "mean" : 914.4285714285712,
          "variance" : 2382233.3650793657,
          "n" : 28,
          "max" : 8724.0,
          "min" : 384.0,
          "sum" : 25603.999999999993,
          "standardDeviation" : 1543.4485301037303
        }, {
          "mean" : 484.6896551724138,
          "variance" : 17584.650246305417,
          "n" : 29,
          "max" : 858.0,
          "min" : 311.0,
          "sum" : 14056.0,
          "standardDeviation" : 132.6071274340313
        }, {
          "mean" : 516.1818181818182,
          "variance" : 16014.060606060606,
          "n" : 22,
          "max" : 718.0,
          "min" : 313.0,
          "sum" : 11356.000000000002,
          "standardDeviation" : 126.54667362700849
        }, {
          "mean" : 423.2,
          "variance" : 2612.7000000000003,
          "n" : 5,
          "max" : 486.0,
          "min" : 359.0,
          "sum" : 2116.0,
          "standardDeviation" : 51.11457717716151
        } ],
        "17" : [ {
          "mean" : 1508.0000000000002,
          "variance" : 3069743.25925926,
          "n" : 23,
          "max" : 8320.0,
          "min" : 680.0,
          "sum" : 34684.00000000001,
          "standardDeviation" : 1752.0682804215307
        }, {
          "mean" : 860.9999999999999,
          "variance" : 870687.7037037038,
          "n" : 28,
          "max" : 5545.0,
          "min" : 481.0,
          "sum" : 24107.999999999996,
          "standardDeviation" : 933.1064803674358
        }, {
          "mean" : 483.60869565217405,
          "variance" : 8085.976284584984,
          "n" : 23,
          "max" : 644.0,
          "min" : 333.0,
          "sum" : 11123.000000000004,
          "standardDeviation" : 89.92205671905522
        }, {
          "mean" : 452.2962962962963,
          "variance" : 19794.37037037037,
          "n" : 27,
          "max" : 860.0,
          "min" : 315.0,
          "sum" : 12212.0,
          "standardDeviation" : 140.69246735476057
        }, {
          "mean" : 523.4,
          "variance" : 6627.300000000002,
          "n" : 5,
          "max" : 632.0,
          "min" : 403.0,
          "sum" : 2617.0,
          "standardDeviation" : 81.4082305421264
        } ],
        "18" : [ {
          "mean" : 1720.7777777777778,
          "variance" : 3146975.2564102565,
          "n" : 22,
          "max" : 7175.0,
          "min" : 824.0,
          "sum" : 37857.11111111111,
          "standardDeviation" : 1773.9716052998865
        }, {
          "mean" : 897.6153846153848,
          "variance" : 1200870.326153846,
          "n" : 26,
          "max" : 6161.0,
          "min" : 356.0,
          "sum" : 23338.000000000004,
          "standardDeviation" : 1095.8422907306717
        }, {
          "mean" : 491.99999999999994,
          "variance" : 18412.181818181816,
          "n" : 23,
          "max" : 818.0,
          "min" : 324.0,
          "sum" : 11315.999999999998,
          "standardDeviation" : 135.69149501048994
        }, {
          "mean" : 535.3846153846154,
          "variance" : 35005.04615384616,
          "n" : 26,
          "max" : 1079.0,
          "min" : 297.0,
          "sum" : 13920.0,
          "standardDeviation" : 187.09635526606647
        }, {
          "mean" : 473.1666666666667,
          "variance" : 7299.766666666667,
          "n" : 6,
          "max" : 544.0,
          "min" : 311.0,
          "sum" : 2839.0,
          "standardDeviation" : 85.43867196221315
        } ],
        "19" : [ {
          "mean" : 1542.2692307692307,
          "variance" : 3092295.8046153844,
          "n" : 21,
          "max" : 8359.0,
          "min" : 627.0,
          "sum" : 32387.653846153844,
          "standardDeviation" : 1758.4924806820711
        }, {
          "mean" : 1257.1111111111109,
          "variance" : 5439000.564102565,
          "n" : 27,
          "max" : 11047.0,
          "min" : 370.0,
          "sum" : 33941.99999999999,
          "standardDeviation" : 2332.166495793678
        }, {
          "mean" : 492.56521739130443,
          "variance" : 31048.802371541507,
          "n" : 23,
          "max" : 980.0,
          "min" : 292.0,
          "sum" : 11329.000000000002,
          "standardDeviation" : 176.20670353746905
        }, {
          "mean" : 455.8148148148149,
          "variance" : 30805.233618233622,
          "n" : 27,
          "max" : 1073.0,
          "min" : 296.0,
          "sum" : 12307.000000000002,
          "standardDeviation" : 175.51419776825355
        }, {
          "mean" : 354.4,
          "variance" : 3697.3000000000006,
          "n" : 5,
          "max" : 460.0,
          "min" : 309.0,
          "sum" : 1772.0,
          "standardDeviation" : 60.805427389337545
        } ],
        "20" : [ {
          "mean" : 1511.205882352941,
          "variance" : 2767921.5017825314,
          "n" : 29,
          "max" : 7335.0,
          "min" : 595.0,
          "sum" : 43824.97058823529,
          "standardDeviation" : 1663.7071562575343
        }, {
          "mean" : 996.0869565217392,
          "variance" : 3442415.0830039526,
          "n" : 23,
          "max" : 9462.0,
          "min" : 369.0,
          "sum" : 22910.000000000004,
          "standardDeviation" : 1855.3746476127005
        }, {
          "mean" : 809.142857142857,
          "variance" : 2311897.9047619053,
          "n" : 28,
          "max" : 8522.0,
          "min" : 307.0,
          "sum" : 22655.999999999996,
          "standardDeviation" : 1520.492651992079
        }, {
          "mean" : 375.909090909091,
          "variance" : 5500.943722943724,
          "n" : 22,
          "max" : 544.0,
          "min" : 301.0,
          "sum" : 8270.000000000002,
          "standardDeviation" : 74.16834717683632
        }, {
          "mean" : 486.0,
          "variance" : 1874.4999999999995,
          "n" : 5,
          "max" : 554.0,
          "min" : 439.0,
          "sum" : 2430.0,
          "standardDeviation" : 43.295496301578524
        } ],
        "21" : [ {
          "mean" : 1974.8787878787875,
          "variance" : 1.3967102859848486E7,
          "n" : 28,
          "max" : 21056.0,
          "min" : 809.0,
          "sum" : 55296.60606060605,
          "standardDeviation" : 3737.258736005374
        }, {
          "mean" : 1028.2272727272732,
          "variance" : 3662621.612554112,
          "n" : 22,
          "max" : 9544.0,
          "min" : 374.0,
          "sum" : 22621.00000000001,
          "standardDeviation" : 1913.7976937372748
        }, {
          "mean" : 447.0357142857143,
          "variance" : 11291.2208994709,
          "n" : 28,
          "max" : 682.0,
          "min" : 305.0,
          "sum" : 12517.0,
          "standardDeviation" : 106.26015668852978
        }, {
          "mean" : 470.8181818181818,
          "variance" : 23883.20346320346,
          "n" : 22,
          "max" : 935.0,
          "min" : 294.0,
          "sum" : 10358.0,
          "standardDeviation" : 154.54191490726217
        }, {
          "mean" : 428.83333333333337,
          "variance" : 13190.96666666667,
          "n" : 6,
          "max" : 617.0,
          "min" : 313.0,
          "sum" : 2573.0,
          "standardDeviation" : 114.8519336653357
        } ],
        "22" : [ {
          "mean" : 1312.7142857142858,
          "variance" : 1568665.2486772486,
          "n" : 23,
          "max" : 6587.0,
          "min" : 608.0,
          "sum" : 30192.428571428572,
          "standardDeviation" : 1252.4636715997988
        }, {
          "mean" : 671.6071428571429,
          "variance" : 29860.691798941796,
          "n" : 28,
          "max" : 1112.0,
          "min" : 474.0,
          "sum" : 18805.0,
          "standardDeviation" : 172.80246467843506
        }, {
          "mean" : 573.8148148148148,
          "variance" : 16427.00284900285,
          "n" : 27,
          "max" : 878.0,
          "min" : 329.0,
          "sum" : 15493.0,
          "standardDeviation" : 128.167869799739
        }, {
          "mean" : 374.1904761904762,
          "variance" : 3878.061904761906,
          "n" : 21,
          "max" : 516.0,
          "min" : 305.0,
          "sum" : 7858.0,
          "standardDeviation" : 62.27408694442582
        }, {
          "mean" : 657.8333333333334,
          "variance" : 19194.166666666664,
          "n" : 6,
          "max" : 852.0,
          "min" : 502.0,
          "sum" : 3947.0,
          "standardDeviation" : 138.54301377791182
        } ],
        "23" : [ {
          "mean" : 1605.074074074074,
          "variance" : 2661914.917378918,
          "n" : 22,
          "max" : 7516.0,
          "min" : 790.0,
          "sum" : 35311.62962962963,
          "standardDeviation" : 1631.5375930020484
        }, {
          "mean" : 1058.8076923076924,
          "variance" : 3040227.6015384616,
          "n" : 26,
          "max" : 9542.0,
          "min" : 442.0,
          "sum" : 27529.0,
          "standardDeviation" : 1743.6248454121264
        }, {
          "mean" : 902.1739130434784,
          "variance" : 3832721.2411067192,
          "n" : 23,
          "max" : 9867.0,
          "min" : 342.0,
          "sum" : 20750.000000000004,
          "standardDeviation" : 1957.7337002531062
        }, {
          "mean" : 412.2592592592592,
          "variance" : 12725.968660968645,
          "n" : 27,
          "max" : 652.0,
          "min" : 294.0,
          "sum" : 11130.999999999998,
          "standardDeviation" : 112.80943515933694
        }, {
          "mean" : 360.2,
          "variance" : 4969.2,
          "n" : 5,
          "max" : 476.0,
          "min" : 303.0,
          "sum" : 1801.0,
          "standardDeviation" : 70.49255279815024
        } ],
        "24" : [ {
          "mean" : 1522.8125000000002,
          "variance" : 1879277.060483871,
          "n" : 27,
          "max" : 6751.0,
          "min" : 804.0,
          "sum" : 41115.93750000001,
          "standardDeviation" : 1370.8672658152834
        }, {
          "mean" : 996.7727272727275,
          "variance" : 3200007.5173160178,
          "n" : 22,
          "max" : 8977.0,
          "min" : 360.0,
          "sum" : 21929.000000000004,
          "standardDeviation" : 1788.8564831523008
        }, {
          "mean" : 453.07407407407413,
          "variance" : 25539.994301994317,
          "n" : 27,
          "max" : 953.0,
          "min" : 311.0,
          "sum" : 12233.000000000002,
          "standardDeviation" : 159.8123721806116
        }, {
          "mean" : 411.1818181818182,
          "variance" : 6908.1558441558445,
          "n" : 22,
          "max" : 580.0,
          "min" : 317.0,
          "sum" : 9046.0,
          "standardDeviation" : 83.1153165436783
        }, {
          "mean" : 457.5,
          "variance" : 2255.5000000000005,
          "n" : 6,
          "max" : 536.0,
          "min" : 409.0,
          "sum" : 2745.0,
          "standardDeviation" : 47.49210460697652
        } ],
        "25" : [ {
          "mean" : 1495.107142857143,
          "variance" : 1898853.6547619046,
          "n" : 23,
          "max" : 7276.0,
          "min" : 812.0,
          "sum" : 34387.46428571429,
          "standardDeviation" : 1377.9889893471227
        }, {
          "mean" : 880.3214285714286,
          "variance" : 849862.2261904763,
          "n" : 28,
          "max" : 5414.0,
          "min" : 343.0,
          "sum" : 24649.0,
          "standardDeviation" : 921.8797243623901
        }, {
          "mean" : 799.5769230769231,
          "variance" : 1555466.7338461536,
          "n" : 26,
          "max" : 6865.0,
          "min" : 347.0,
          "sum" : 20789.0,
          "standardDeviation" : 1247.1835205157874
        }, {
          "mean" : 481.7916666666667,
          "variance" : 14297.650362318842,
          "n" : 24,
          "max" : 710.0,
          "min" : 313.0,
          "sum" : 11563.0,
          "standardDeviation" : 119.57278269873476
        }, {
          "mean" : 579.5,
          "variance" : 14194.700000000003,
          "n" : 6,
          "max" : 786.0,
          "min" : 466.0,
          "sum" : 3477.0,
          "standardDeviation" : 119.14151249669446
        } ],
        "26" : [ {
          "mean" : 1569.5000000000002,
          "variance" : 4152167.3703703703,
          "n" : 23,
          "max" : 10691.0,
          "min" : 655.0,
          "sum" : 36098.50000000001,
          "standardDeviation" : 2037.6867694447963
        }, {
          "mean" : 704.0357142857143,
          "variance" : 599306.9986772487,
          "n" : 28,
          "max" : 4542.0,
          "min" : 322.0,
          "sum" : 19713.0,
          "standardDeviation" : 774.1492095696079
        }, {
          "mean" : 462.6296296296296,
          "variance" : 14005.319088319091,
          "n" : 27,
          "max" : 770.0,
          "min" : 305.0,
          "sum" : 12491.0,
          "standardDeviation" : 118.3440707780457
        }, {
          "mean" : 434.4347826086956,
          "variance" : 22724.25691699604,
          "n" : 23,
          "max" : 865.0,
          "min" : 302.0,
          "sum" : 9992.0,
          "standardDeviation" : 150.74566964591733
        }, {
          "mean" : 454.6666666666667,
          "variance" : 22853.86666666666,
          "n" : 6,
          "max" : 752.0,
          "min" : 345.0,
          "sum" : 2728.0,
          "standardDeviation" : 151.17495383384994
        } ],
        "27" : [ {
          "mean" : 1677.4333333333334,
          "variance" : 2290565.7712643677,
          "n" : 25,
          "max" : 6512.0,
          "min" : 815.0,
          "sum" : 41935.833333333336,
          "standardDeviation" : 1513.461519584944
        }, {
          "mean" : 2298.3076923076924,
          "variance" : 6.107558646153848E7,
          "n" : 26,
          "max" : 40600.0,
          "min" : 415.0,
          "sum" : 59756.0,
          "standardDeviation" : 7815.087105179217
        }, {
          "mean" : 546.55,
          "variance" : 24093.523684210522,
          "n" : 20,
          "max" : 868.0,
          "min" : 315.0,
          "sum" : 10931.0,
          "standardDeviation" : 155.22088675242944
        }, {
          "mean" : 407.64285714285717,
          "variance" : 13244.90476190476,
          "n" : 28,
          "max" : 689.0,
          "min" : 299.0,
          "sum" : 11414.0,
          "standardDeviation" : 115.08650990409241
        }, {
          "mean" : 358.6666666666667,
          "variance" : 2787.866666666666,
          "n" : 6,
          "max" : 448.0,
          "min" : 317.0,
          "sum" : 2152.0,
          "standardDeviation" : 52.80025252464865
        } ],
        "28" : [ {
          "mean" : 1391.1034482758623,
          "variance" : 1984564.3817733994,
          "n" : 24,
          "max" : 7208.0,
          "min" : 775.0,
          "sum" : 33386.482758620696,
          "standardDeviation" : 1408.7456767541114
        }, {
          "mean" : 965.9666666666668,
          "variance" : 2232729.964367816,
          "n" : 30,
          "max" : 8805.0,
          "min" : 434.0,
          "sum" : 28979.000000000004,
          "standardDeviation" : 1494.2322324082747
        }, {
          "mean" : 578.2272727272726,
          "variance" : 30593.898268398265,
          "n" : 22,
          "max" : 924.0,
          "min" : 301.0,
          "sum" : 12720.999999999998,
          "standardDeviation" : 174.9111153368998
        }, {
          "mean" : 515.2068965517242,
          "variance" : 13221.884236453208,
          "n" : 29,
          "max" : 711.0,
          "min" : 321.0,
          "sum" : 14941.000000000002,
          "standardDeviation" : 114.98645240398196
        }, {
          "mean" : 510.3333333333333,
          "variance" : 12083.466666666667,
          "n" : 6,
          "max" : 724.0,
          "min" : 430.0,
          "sum" : 3062.0,
          "standardDeviation" : 109.92482279570282
        } ],
        "29" : [ {
          "mean" : 1640.3437500000002,
          "variance" : 3462403.9747983865,
          "n" : 27,
          "max" : 8798.0,
          "min" : 770.0,
          "sum" : 44289.28125000001,
          "standardDeviation" : 1860.753603999838
        }, {
          "mean" : 1736.0476190476188,
          "variance" : 1.836775984761904E7,
          "n" : 21,
          "max" : 20387.0,
          "min" : 414.0,
          "sum" : 36456.99999999999,
          "standardDeviation" : 4285.762458141963
        }, {
          "mean" : 452.4444444444445,
          "variance" : 11051.71794871795,
          "n" : 27,
          "max" : 721.0,
          "min" : 310.0,
          "sum" : 12216.000000000002,
          "standardDeviation" : 105.12715133930887
        }, {
          "mean" : 461.9090909090909,
          "variance" : 30440.08658008658,
          "n" : 22,
          "max" : 843.0,
          "min" : 311.0,
          "sum" : 10162.0,
          "standardDeviation" : 174.47087602258028
        }, {
          "mean" : 423.33333333333337,
          "variance" : 4366.666666666666,
          "n" : 6,
          "max" : 551.0,
          "min" : 363.0,
          "sum" : 2540.0,
          "standardDeviation" : 66.08075867199669
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1.79083569E8,
          "variance" : 2.912326018735232E15,
          "n" : 2,
          "max" : 2.17243273E8,
          "min" : 1.40923865E8,
          "sum" : 3.58167138E8,
          "standardDeviation" : 5.3965970932942845E7
        }, {
          "mean" : 1.505202725E8,
          "variance" : 8.178011736524452E13,
          "n" : 2,
          "max" : 1.56914806E8,
          "min" : 1.44125739E8,
          "sum" : 3.01040545E8,
          "standardDeviation" : 9043236.000749096
        }, {
          "mean" : 1.7472337966666666E8,
          "variance" : 2.7684022656909034E14,
          "n" : 3,
          "max" : 1.8488929E8,
          "min" : 1.55521964E8,
          "sum" : 5.24170139E8,
          "standardDeviation" : 1.6638516357208366E7
        }, {
          "mean" : 1.438558445E8,
          "variance" : 1.1411367038401252E14,
          "n" : 2,
          "max" : 1.51409442E8,
          "min" : 1.36302247E8,
          "sum" : 2.87711689E8,
          "standardDeviation" : 1.0682400029207505E7
        }, {
          "mean" : 1.24346384E8,
          "variance" : 1.104552762818E14,
          "n" : 2,
          "max" : 1.31777914E8,
          "min" : 1.16914854E8,
          "sum" : 2.48692768E8,
          "standardDeviation" : 1.0509770515182527E7
        }, {
          "mean" : 1.295804E8,
          "variance" : 1.27893935435119E14,
          "n" : 3,
          "max" : 1.40298042E8,
          "min" : 1.17760693E8,
          "sum" : 3.887412E8,
          "standardDeviation" : 1.1309020091728505E7
        }, {
          "mean" : 1.39091217E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.39091217E8,
          "min" : 1.39091217E8,
          "sum" : 1.39091217E8,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 1.694270725E8,
          "variance" : 1.8890166914363402E15,
          "n" : 2,
          "max" : 2.00159927E8,
          "min" : 1.38694218E8,
          "sum" : 3.38854145E8,
          "standardDeviation" : 4.3462819644339E7
        }, {
          "mean" : 1.48732917E8,
          "variance" : 3.711504615200001E10,
          "n" : 2,
          "max" : 1.48869143E8,
          "min" : 1.48596691E8,
          "sum" : 2.97465834E8,
          "standardDeviation" : 192652.65674783726
        }, {
          "mean" : 1.82747595E8,
          "variance" : 1.10057075200324E14,
          "n" : 3,
          "max" : 1.92653837E8,
          "min" : 1.71756523E8,
          "sum" : 5.48242785E8,
          "standardDeviation" : 1.0490809082255E7
        }, {
          "mean" : 1.300680815E8,
          "variance" : 2.62317485812805E13,
          "n" : 2,
          "max" : 1.33689666E8,
          "min" : 1.26446497E8,
          "sum" : 2.60136163E8,
          "standardDeviation" : 5121693.917180184
        }, {
          "mean" : 1.27885826E8,
          "variance" : 2.5386446380049996E13,
          "n" : 2,
          "max" : 1.31448581E8,
          "min" : 1.24323071E8,
          "sum" : 2.55771652E8,
          "standardDeviation" : 5038496.440412556
        }, {
          "mean" : 1.55599083E8,
          "variance" : 9.84468356189311E14,
          "n" : 3,
          "max" : 1.91814629E8,
          "min" : 1.36600228E8,
          "sum" : 4.66797249E8,
          "standardDeviation" : 3.1376238719599757E7
        }, {
          "mean" : 1.51325123E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.51325123E8,
          "min" : 1.51325123E8,
          "sum" : 1.51325123E8,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 2.116565545E8,
          "variance" : 8.539795990081845E14,
          "n" : 2,
          "max" : 2.32320286E8,
          "min" : 1.90992823E8,
          "sum" : 4.23313109E8,
          "standardDeviation" : 2.922292933653614E7
        }, {
          "mean" : 1.44896016E8,
          "variance" : 2.66575527762048E14,
          "n" : 2,
          "max" : 1.56441048E8,
          "min" : 1.33350984E8,
          "sum" : 2.89792032E8,
          "standardDeviation" : 1.6327140832431378E7
        }, {
          "mean" : 1.50194561E8,
          "variance" : 2.2971401142272004E13,
          "n" : 2,
          "max" : 1.53583617E8,
          "min" : 1.46805505E8,
          "sum" : 3.00389122E8,
          "standardDeviation" : 4792848.958841912
        }, {
          "mean" : 1.6616222033333334E8,
          "variance" : 1.5425558986320122E15,
          "n" : 3,
          "max" : 2.09869104E8,
          "min" : 1.33828457E8,
          "sum" : 4.98486661E8,
          "standardDeviation" : 3.927538540399078E7
        }, {
          "mean" : 1.237090515E8,
          "variance" : 2.0744651102980504E13,
          "n" : 2,
          "max" : 1.26929661E8,
          "min" : 1.20488442E8,
          "sum" : 2.47418103E8,
          "standardDeviation" : 4554629.634007633
        }, {
          "mean" : 1.7141721333333334E8,
          "variance" : 6.049535344689923E15,
          "n" : 3,
          "max" : 2.61216257E8,
          "min" : 1.25239348E8,
          "sum" : 5.1425164E8,
          "standardDeviation" : 7.777875895570669E7
        }, {
          "mean" : 1.26850397E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.26850397E8,
          "min" : 1.26850397E8,
          "sum" : 1.26850397E8,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 1.67423729E8,
          "variance" : 1.8870354952535122E15,
          "n" : 2,
          "max" : 1.98140463E8,
          "min" : 1.36706995E8,
          "sum" : 3.34847458E8,
          "standardDeviation" : 4.344002181460677E7
        }, {
          "mean" : 1.789837695E8,
          "variance" : 1.4231671079981045E15,
          "n" : 2,
          "max" : 2.05659293E8,
          "min" : 1.52308246E8,
          "sum" : 3.57967539E8,
          "standardDeviation" : 3.772488711710221E7
        }, {
          "mean" : 1.71316405E8,
          "variance" : 1.014272515077192E15,
          "n" : 2,
          "max" : 1.93836091E8,
          "min" : 1.48796719E8,
          "sum" : 3.4263281E8,
          "standardDeviation" : 3.1847645361583516E7
        }, {
          "mean" : 1.6177185533333334E8,
          "variance" : 1.0163634100462924E15,
          "n" : 3,
          "max" : 1.98573012E8,
          "min" : 1.42584155E8,
          "sum" : 4.85315566E8,
          "standardDeviation" : 3.1880454984932262E7
        }, {
          "mean" : 1.377027605E8,
          "variance" : 6.666273631111249E13,
          "n" : 2,
          "max" : 1.43476093E8,
          "min" : 1.31929428E8,
          "sum" : 2.75405521E8,
          "standardDeviation" : 8164725.121589366
        }, {
          "mean" : 1.7738648E8,
          "variance" : 5.647190209959549E15,
          "n" : 3,
          "max" : 2.6376646E8,
          "min" : 1.27050547E8,
          "sum" : 5.3215944E8,
          "standardDeviation" : 7.514778912223266E7
        }, {
          "mean" : 1.76315456E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.76315456E8,
          "min" : 1.76315456E8,
          "sum" : 1.76315456E8,
          "standardDeviation" : 0.0
        } ],
        "4" : [ {
          "mean" : 1.41746755E8,
          "variance" : 7.67354839778E13,
          "n" : 2,
          "max" : 1.47940925E8,
          "min" : 1.35552585E8,
          "sum" : 2.8349351E8,
          "standardDeviation" : 8759879.221644554
        }, {
          "mean" : 1.502467895E8,
          "variance" : 1.480037930633205E14,
          "n" : 2,
          "max" : 1.58849225E8,
          "min" : 1.41644354E8,
          "sum" : 3.00493579E8,
          "standardDeviation" : 1.2165680953539778E7
        }, {
          "mean" : 1.85931414E8,
          "variance" : 2.531080424245248E15,
          "n" : 2,
          "max" : 2.21505846E8,
          "min" : 1.50356982E8,
          "sum" : 3.71862828E8,
          "standardDeviation" : 5.030984420811943E7
        }, {
          "mean" : 1.4016299233333334E8,
          "variance" : 9.906658996166334E12,
          "n" : 3,
          "max" : 1.43287158E8,
          "min" : 1.36992696E8,
          "sum" : 4.20488977E8,
          "standardDeviation" : 3147484.5505842175
        }, {
          "mean" : 1.550373795E8,
          "variance" : 8.154353837448406E14,
          "n" : 2,
          "max" : 1.752294E8,
          "min" : 1.34845359E8,
          "sum" : 3.10074759E8,
          "standardDeviation" : 2.8555829242815565E7
        }, {
          "mean" : 1.28695887E8,
          "variance" : 7.807381524820298E13,
          "n" : 3,
          "max" : 1.35739964E8,
          "min" : 1.18781701E8,
          "sum" : 3.86087661E8,
          "standardDeviation" : 8835938.84362058
        }, {
          "mean" : 1.22530888E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.22530888E8,
          "min" : 1.22530888E8,
          "sum" : 1.22530888E8,
          "standardDeviation" : 0.0
        } ],
        "5" : [ {
          "mean" : 1.738094615E8,
          "variance" : 2.89426739261062E15,
          "n" : 2,
          "max" : 2.11850672E8,
          "min" : 1.35768251E8,
          "sum" : 3.47618923E8,
          "standardDeviation" : 5.3798395818189785E7
        }, {
          "mean" : 1.64815332E8,
          "variance" : 1.95684217122578E14,
          "n" : 2,
          "max" : 1.74706849E8,
          "min" : 1.54923815E8,
          "sum" : 3.29630664E8,
          "standardDeviation" : 1.398871749384403E7
        }, {
          "mean" : 1.630679625E8,
          "variance" : 1.927572467187645E14,
          "n" : 2,
          "max" : 1.72885224E8,
          "min" : 1.53250701E8,
          "sum" : 3.26135925E8,
          "standardDeviation" : 1.3883704358663235E7
        }, {
          "mean" : 1.3225293966666667E8,
          "variance" : 9.293594175065734E13,
          "n" : 3,
          "max" : 1.43260461E8,
          "min" : 1.25313283E8,
          "sum" : 3.96758819E8,
          "standardDeviation" : 9640328.923364459
        }, {
          "mean" : 1.24714755E8,
          "variance" : 6.516108959193801E13,
          "n" : 2,
          "max" : 1.30422692E8,
          "min" : 1.19006818E8,
          "sum" : 2.4942951E8,
          "standardDeviation" : 8072241.918571197
        }, {
          "mean" : 1.77470161E8,
          "variance" : 4.520492612861676E15,
          "n" : 3,
          "max" : 2.51655109E8,
          "min" : 1.2055503E8,
          "sum" : 5.32410483E8,
          "standardDeviation" : 6.723460874327801E7
        }, {
          "mean" : 1.20839144E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.20839144E8,
          "min" : 1.20839144E8,
          "sum" : 1.20839144E8,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 1.92544004E8,
          "variance" : 3.801421581136328E15,
          "n" : 2,
          "max" : 2.36141146E8,
          "min" : 1.48946862E8,
          "sum" : 3.85088008E8,
          "standardDeviation" : 6.165566949710568E7
        }, {
          "mean" : 1.606553275E8,
          "variance" : 1.1024278028460502E13,
          "n" : 2,
          "max" : 1.63003122E8,
          "min" : 1.58307533E8,
          "sum" : 3.21310655E8,
          "standardDeviation" : 3320282.8235649597
        }, {
          "mean" : 1.667519425E8,
          "variance" : 1.6563800028906053E14,
          "n" : 2,
          "max" : 1.75852437E8,
          "min" : 1.57651448E8,
          "sum" : 3.33503885E8,
          "standardDeviation" : 1.287004274620176E7
        }, {
          "mean" : 1.4926612733333334E8,
          "variance" : 1.2190946355140605E15,
          "n" : 3,
          "max" : 1.89382513E8,
          "min" : 1.25729237E8,
          "sum" : 4.47798382E8,
          "standardDeviation" : 3.491553573288058E7
        }, {
          "mean" : 1.28291939E8,
          "variance" : 1.3727197795971202E14,
          "n" : 2,
          "max" : 1.36576623E8,
          "min" : 1.20007255E8,
          "sum" : 2.56583878E8,
          "standardDeviation" : 1.1716312472775383E7
        }, {
          "mean" : 1.4904582633333334E8,
          "variance" : 1.31975132111066E15,
          "n" : 3,
          "max" : 1.9085834E8,
          "min" : 1.25217824E8,
          "sum" : 4.47137479E8,
          "standardDeviation" : 3.632838175738991E7
        }, {
          "mean" : 1.31480715E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.31480715E8,
          "min" : 1.31480715E8,
          "sum" : 1.31480715E8,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 2.12683525E8,
          "variance" : 9.0211380539858E15,
          "n" : 2,
          "max" : 2.79844295E8,
          "min" : 1.45522755E8,
          "sum" : 4.2536705E8,
          "standardDeviation" : 9.497967179342009E7
        }, {
          "mean" : 1.5086169866666666E8,
          "variance" : 6.6682248337462336E13,
          "n" : 3,
          "max" : 1.59732749E8,
          "min" : 1.43658395E8,
          "sum" : 4.52585096E8,
          "standardDeviation" : 8165919.932099649
        }, {
          "mean" : 1.56054622E8,
          "variance" : 1.1415989435761998E13,
          "n" : 2,
          "max" : 1.58443763E8,
          "min" : 1.53665481E8,
          "sum" : 3.12109244E8,
          "standardDeviation" : 3378755.6046216185
        }, {
          "mean" : 1.5845548E8,
          "variance" : 2.406055995747272E15,
          "n" : 2,
          "max" : 1.93140174E8,
          "min" : 1.23770786E8,
          "sum" : 3.1691096E8,
          "standardDeviation" : 4.9051564661560714E7
        }, {
          "mean" : 1.2680788133333333E8,
          "variance" : 4.859283953706533E13,
          "n" : 3,
          "max" : 1.34640874E8,
          "min" : 1.2128639E8,
          "sum" : 3.80423644E8,
          "standardDeviation" : 6970856.442150084
        }, {
          "mean" : 1.438978015E8,
          "variance" : 4.70153905604045E13,
          "n" : 2,
          "max" : 1.48746275E8,
          "min" : 1.39049328E8,
          "sum" : 2.87795603E8,
          "standardDeviation" : 6856776.980506549
        }, {
          "mean" : 1.31764197E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.31764197E8,
          "min" : 1.31764197E8,
          "sum" : 1.31764197E8,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 1.458104145E8,
          "variance" : 7.068085618050002E10,
          "n" : 2,
          "max" : 1.45998405E8,
          "min" : 1.45622424E8,
          "sum" : 2.91620829E8,
          "standardDeviation" : 265858.71469729935
        }, {
          "mean" : 1.85480761E8,
          "variance" : 2.418516817036898E15,
          "n" : 2,
          "max" : 2.20255154E8,
          "min" : 1.50706368E8,
          "sum" : 3.70961522E8,
          "standardDeviation" : 4.917841820389202E7
        }, {
          "mean" : 1.613348465E8,
          "variance" : 1.0129459581234452E14,
          "n" : 2,
          "max" : 1.68451538E8,
          "min" : 1.54218155E8,
          "sum" : 3.22669693E8,
          "standardDeviation" : 1.0064521638525326E7
        }, {
          "mean" : 1.6897934366666666E8,
          "variance" : 3.140781066397112E15,
          "n" : 3,
          "max" : 2.3369007E8,
          "min" : 1.36208662E8,
          "sum" : 5.06938031E8,
          "standardDeviation" : 5.6042671834925145E7
        }, {
          "mean" : 1.56817467E8,
          "variance" : 2.1907365018742078E15,
          "n" : 2,
          "max" : 1.89913815E8,
          "min" : 1.23721119E8,
          "sum" : 3.13634934E8,
          "standardDeviation" : 4.680530420661966E7
        }, {
          "mean" : 1.431784785E8,
          "variance" : 4.789397985684499E12,
          "n" : 2,
          "max" : 1.4472596E8,
          "min" : 1.41630997E8,
          "sum" : 2.86356957E8,
          "standardDeviation" : 2188469.3248214605
        }, {
          "mean" : 1.328724045E8,
          "variance" : 1.3996001909004498E13,
          "n" : 2,
          "max" : 1.35517778E8,
          "min" : 1.30227031E8,
          "sum" : 2.65744809E8,
          "standardDeviation" : 3741123.0812423825
        } ],
        "9" : [ {
          "mean" : 1.805646115E8,
          "variance" : 1.0719744124060124E15,
          "n" : 2,
          "max" : 2.03716009E8,
          "min" : 1.57413214E8,
          "sum" : 3.61129223E8,
          "standardDeviation" : 3.2741020332390565E7
        }, {
          "mean" : 1.571669235E8,
          "variance" : 4.349367577170051E13,
          "n" : 2,
          "max" : 1.61830274E8,
          "min" : 1.52503573E8,
          "sum" : 3.14333847E8,
          "standardDeviation" : 6594973.523199354
        }, {
          "mean" : 1.93767845E8,
          "variance" : 1.7233799159142718E15,
          "n" : 2,
          "max" : 2.23122401E8,
          "min" : 1.64413289E8,
          "sum" : 3.8753569E8,
          "standardDeviation" : 4.151361121264051E7
        }, {
          "mean" : 1.3171516033333333E8,
          "variance" : 1.1463544307968234E14,
          "n" : 3,
          "max" : 1.4028004E8,
          "min" : 1.19711479E8,
          "sum" : 3.95145481E8,
          "standardDeviation" : 1.0706794248498583E7
        }, {
          "mean" : 1.279952065E8,
          "variance" : 4.6961191860204056E14,
          "n" : 2,
          "max" : 1.43318586E8,
          "min" : 1.12671827E8,
          "sum" : 2.55990413E8,
          "standardDeviation" : 2.1670531110289857E7
        }, {
          "mean" : 1.4786957433333334E8,
          "variance" : 8.164125842192494E14,
          "n" : 3,
          "max" : 1.80511797E8,
          "min" : 1.27391955E8,
          "sum" : 4.43608723E8,
          "standardDeviation" : 2.8572934469865873E7
        }, {
          "mean" : 1.16601505E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.16601505E8,
          "min" : 1.16601505E8,
          "sum" : 1.16601505E8,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 1.779411295E8,
          "variance" : 1.1866977441475242E15,
          "n" : 2,
          "max" : 2.02299883E8,
          "min" : 1.53582376E8,
          "sum" : 3.55882259E8,
          "standardDeviation" : 3.4448479562203094E7
        }, {
          "mean" : 1.54500186E8,
          "variance" : 1.6835837726449998E13,
          "n" : 2,
          "max" : 1.57401551E8,
          "min" : 1.51598821E8,
          "sum" : 3.09000372E8,
          "standardDeviation" : 4103149.7323946147
        }, {
          "mean" : 1.497860235E8,
          "variance" : 6.42858595344045E13,
          "n" : 2,
          "max" : 1.55455497E8,
          "min" : 1.4411655E8,
          "sum" : 2.99572047E8,
          "standardDeviation" : 8017846.315214859
        }, {
          "mean" : 1.5985998166666666E8,
          "variance" : 2.0709329308171028E15,
          "n" : 3,
          "max" : 2.12400227E8,
          "min" : 1.3283164E8,
          "sum" : 4.79579945E8,
          "standardDeviation" : 4.550750411544345E7
        }, {
          "mean" : 1.25665733E8,
          "variance" : 1.6318738889042E13,
          "n" : 2,
          "max" : 1.28522194E8,
          "min" : 1.22809272E8,
          "sum" : 2.51331466E8,
          "standardDeviation" : 4039645.8865898135
        }, {
          "mean" : 1.4442120833333334E8,
          "variance" : 8.062676758153022E14,
          "n" : 3,
          "max" : 1.76933858E8,
          "min" : 1.24495635E8,
          "sum" : 4.33263625E8,
          "standardDeviation" : 2.8394852981047504E7
        }, {
          "mean" : 1.26496497E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.26496497E8,
          "min" : 1.26496497E8,
          "sum" : 1.26496497E8,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1.794137155E8,
          "variance" : 3.7804361905193645E15,
          "n" : 2,
          "max" : 2.22890354E8,
          "min" : 1.35937077E8,
          "sum" : 3.58827431E8,
          "standardDeviation" : 6.1485251813092254E7
        }, {
          "mean" : 1.463790365E8,
          "variance" : 1.0324600711445001E12,
          "n" : 2,
          "max" : 1.47097528E8,
          "min" : 1.45660545E8,
          "sum" : 2.92758073E8,
          "standardDeviation" : 1016100.4237497887
        }, {
          "mean" : 1.39968794E8,
          "variance" : 4.5084986824334806E14,
          "n" : 3,
          "max" : 1.58470548E8,
          "min" : 1.16785448E8,
          "sum" : 4.19906382E8,
          "standardDeviation" : 2.1233225573222455E7
        }, {
          "mean" : 1.516411975E8,
          "variance" : 1.2158522053296125E15,
          "n" : 2,
          "max" : 1.76297355E8,
          "min" : 1.2698504E8,
          "sum" : 3.03282395E8,
          "standardDeviation" : 3.48690723325071E7
        }, {
          "mean" : 1.30641715E8,
          "variance" : 8.037573114419998E13,
          "n" : 2,
          "max" : 1.36981105E8,
          "min" : 1.24302325E8,
          "sum" : 2.6128343E8,
          "standardDeviation" : 8965251.315172374
        }, {
          "mean" : 1.5473305066666666E8,
          "variance" : 8.675554562045944E14,
          "n" : 3,
          "max" : 1.88508803E8,
          "min" : 1.34387665E8,
          "sum" : 4.64199152E8,
          "standardDeviation" : 2.9454294359305136E7
        }, {
          "mean" : 1.31506317E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.31506317E8,
          "min" : 1.31506317E8,
          "sum" : 1.31506317E8,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 1.77192783E8,
          "variance" : 1.9564128825385282E15,
          "n" : 2,
          "max" : 2.08469075E8,
          "min" : 1.45916491E8,
          "sum" : 3.54385566E8,
          "standardDeviation" : 4.4231356327141136E7
        }, {
          "mean" : 1.60842827E8,
          "variance" : 1.31753586136608E14,
          "n" : 2,
          "max" : 1.68959279E8,
          "min" : 1.52726375E8,
          "sum" : 3.21685654E8,
          "standardDeviation" : 1.1478396496750232E7
        }, {
          "mean" : 1.42883143E8,
          "variance" : 2.306855265245E13,
          "n" : 2,
          "max" : 1.46279358E8,
          "min" : 1.39486928E8,
          "sum" : 2.85766286E8,
          "standardDeviation" : 4802973.313734941
        }, {
          "mean" : 1.4687846866666666E8,
          "variance" : 2.5415149203525332E13,
          "n" : 3,
          "max" : 1.5133135E8,
          "min" : 1.4140487E8,
          "sum" : 4.40635406E8,
          "standardDeviation" : 5041343.98781965
        }, {
          "mean" : 1.325748005E8,
          "variance" : 2.033465878125E11,
          "n" : 2,
          "max" : 1.32893663E8,
          "min" : 1.32255938E8,
          "sum" : 2.65149601E8,
          "standardDeviation" : 450939.672032191
        }, {
          "mean" : 1.4036372633333334E8,
          "variance" : 6.241386831932024E14,
          "n" : 3,
          "max" : 1.69204605E8,
          "min" : 1.25403406E8,
          "sum" : 4.21091179E8,
          "standardDeviation" : 2.4982767724837903E7
        }, {
          "mean" : 1.29955386E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.29955386E8,
          "min" : 1.29955386E8,
          "sum" : 1.29955386E8,
          "standardDeviation" : 0.0
        } ],
        "13" : [ {
          "mean" : 1.559164975E8,
          "variance" : 3.2159069189940496E13,
          "n" : 2,
          "max" : 1.59926427E8,
          "min" : 1.51906568E8,
          "sum" : 3.11832995E8,
          "standardDeviation" : 5670896.683059963
        }, {
          "mean" : 1.5192841E8,
          "variance" : 7.439699257849798E13,
          "n" : 2,
          "max" : 1.58027467E8,
          "min" : 1.45829353E8,
          "sum" : 3.0385682E8,
          "standardDeviation" : 8625369.127086561
        }, {
          "mean" : 1.7467794E8,
          "variance" : 1.51634749370405E15,
          "n" : 2,
          "max" : 2.02212895E8,
          "min" : 1.47142985E8,
          "sum" : 3.4935588E8,
          "standardDeviation" : 3.894030680033287E7
        }, {
          "mean" : 1.2581405866666667E8,
          "variance" : 2.9520342017644336E13,
          "n" : 3,
          "max" : 1.31518258E8,
          "min" : 1.20699897E8,
          "sum" : 3.77442176E8,
          "standardDeviation" : 5433262.557399958
        }, {
          "mean" : 1.227745835E8,
          "variance" : 2.21652876253205E13,
          "n" : 2,
          "max" : 1.26103644E8,
          "min" : 1.19445523E8,
          "sum" : 2.45549167E8,
          "standardDeviation" : 4708002.509060557
        }, {
          "mean" : 1.7097454366666666E8,
          "variance" : 1.5743967424804802E15,
          "n" : 3,
          "max" : 1.9487621E8,
          "min" : 1.2517213E8,
          "sum" : 5.12923631E8,
          "standardDeviation" : 3.9678668607710116E7
        }, {
          "mean" : 1.24306431E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.24306431E8,
          "min" : 1.24306431E8,
          "sum" : 1.24306431E8,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 1.801361975E8,
          "variance" : 1.1481566349693845E15,
          "n" : 2,
          "max" : 2.04096129E8,
          "min" : 1.56176266E8,
          "sum" : 3.60272395E8,
          "standardDeviation" : 3.3884460080830336E7
        }, {
          "mean" : 1.550068585E8,
          "variance" : 2.019690025038405E14,
          "n" : 2,
          "max" : 1.65055963E8,
          "min" : 1.44957754E8,
          "sum" : 3.10013717E8,
          "standardDeviation" : 1.42115798736045E7
        }, {
          "mean" : 1.3749905E8,
          "variance" : 4.0046288519181E13,
          "n" : 3,
          "max" : 1.44789999E8,
          "min" : 1.3343187E8,
          "sum" : 4.1249715E8,
          "standardDeviation" : 6328213.691017474
        }, {
          "mean" : 1.781307085E8,
          "variance" : 4.844833580657725E15,
          "n" : 2,
          "max" : 2.27348762E8,
          "min" : 1.28912655E8,
          "sum" : 3.56261417E8,
          "standardDeviation" : 6.960483877330458E7
        }, {
          "mean" : 1.2651772733333333E8,
          "variance" : 1.0582967164020336E13,
          "n" : 3,
          "max" : 1.29957065E8,
          "min" : 1.23489936E8,
          "sum" : 3.79553182E8,
          "standardDeviation" : 3253147.2705705063
        }, {
          "mean" : 1.222603565E8,
          "variance" : 9.501728940090448E13,
          "n" : 2,
          "max" : 1.29153008E8,
          "min" : 1.15367705E8,
          "sum" : 2.44520713E8,
          "standardDeviation" : 9747681.232011257
        }, {
          "mean" : 1.32591625E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.32591625E8,
          "min" : 1.32591625E8,
          "sum" : 1.32591625E8,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 2.210034095E8,
          "variance" : 7.196583645355863E15,
          "n" : 2,
          "max" : 2.80989173E8,
          "min" : 1.61017646E8,
          "sum" : 4.42006819E8,
          "standardDeviation" : 8.483268029100497E7
        }, {
          "mean" : 1.50678108E8,
          "variance" : 2.5810445606912004E13,
          "n" : 2,
          "max" : 1.54270492E8,
          "min" : 1.47085724E8,
          "sum" : 3.01356216E8,
          "standardDeviation" : 5080398.174052109
        }, {
          "mean" : 1.560671745E8,
          "variance" : 1.1555160296112052E14,
          "n" : 2,
          "max" : 1.63668214E8,
          "min" : 1.48466135E8,
          "sum" : 3.12134349E8,
          "standardDeviation" : 1.074949314903361E7
        }, {
          "mean" : 1.5148481733333334E8,
          "variance" : 1.360714795369414E15,
          "n" : 3,
          "max" : 1.93019179E8,
          "min" : 1.22539165E8,
          "sum" : 4.54454452E8,
          "standardDeviation" : 3.6887867861526154E7
        }, {
          "mean" : 1.28996298E8,
          "variance" : 1.7295470492480002E12,
          "n" : 2,
          "max" : 1.2992623E8,
          "min" : 1.28066366E8,
          "sum" : 2.57992596E8,
          "standardDeviation" : 1315122.446484737
        }, {
          "mean" : 1.39554759E8,
          "variance" : 1.385801678030476E15,
          "n" : 3,
          "max" : 1.82539585E8,
          "min" : 1.17888483E8,
          "sum" : 4.18664277E8,
          "standardDeviation" : 3.722635730272942E7
        }, {
          "mean" : 1.22765109E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.22765109E8,
          "min" : 1.22765109E8,
          "sum" : 1.22765109E8,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1.429225315E8,
          "variance" : 1.860560044710125E14,
          "n" : 2,
          "max" : 1.52567634E8,
          "min" : 1.33277429E8,
          "sum" : 2.85845063E8,
          "standardDeviation" : 1.3640234765978646E7
        }, {
          "mean" : 2.192432585E8,
          "variance" : 7.9378300269099E15,
          "n" : 2,
          "max" : 2.82242584E8,
          "min" : 1.56243933E8,
          "sum" : 4.38486517E8,
          "standardDeviation" : 8.909450054245716E7
        }, {
          "mean" : 1.47445532E8,
          "variance" : 1.8259841964768797E14,
          "n" : 2,
          "max" : 1.57000594E8,
          "min" : 1.3789047E8,
          "sum" : 2.94891064E8,
          "standardDeviation" : 1.351289826971579E7
        }, {
          "mean" : 1.4953103E8,
          "variance" : 4.2948707665201206E14,
          "n" : 3,
          "max" : 1.69704176E8,
          "min" : 1.28296802E8,
          "sum" : 4.4859309E8,
          "standardDeviation" : 2.0724069982800484E7
        }, {
          "mean" : 1.39538847E8,
          "variance" : 1.57738841138E11,
          "n" : 2,
          "max" : 1.39819684E8,
          "min" : 1.3925801E8,
          "sum" : 2.79077694E8,
          "standardDeviation" : 397163.4942161729
        }, {
          "mean" : 1.5251468033333334E8,
          "variance" : 8.874382732916664E14,
          "n" : 3,
          "max" : 1.85821351E8,
          "min" : 1.28415706E8,
          "sum" : 4.57544041E8,
          "standardDeviation" : 2.978990220345925E7
        }, {
          "mean" : 1.32758539E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.32758539E8,
          "min" : 1.32758539E8,
          "sum" : 1.32758539E8,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 1.85125836E8,
          "variance" : 7.1361093119405E14,
          "n" : 2,
          "max" : 2.04015131E8,
          "min" : 1.66236541E8,
          "sum" : 3.70251672E8,
          "standardDeviation" : 2.6713497172666293E7
        }, {
          "mean" : 1.59244746E8,
          "variance" : 6.0040679125448E13,
          "n" : 2,
          "max" : 1.64723828E8,
          "min" : 1.53765664E8,
          "sum" : 3.18489492E8,
          "standardDeviation" : 7748592.073754302
        }, {
          "mean" : 1.545690635E8,
          "variance" : 9.570963948585605E14,
          "n" : 2,
          "max" : 1.76444808E8,
          "min" : 1.32693319E8,
          "sum" : 3.09138127E8,
          "standardDeviation" : 3.093697455890864E7
        }, {
          "mean" : 1.4104731833333334E8,
          "variance" : 6.296553792283733E13,
          "n" : 3,
          "max" : 1.49612393E8,
          "min" : 1.33946065E8,
          "sum" : 4.23141955E8,
          "standardDeviation" : 7935082.72942616
        }, {
          "mean" : 1.23986255E8,
          "variance" : 3.1974756980167996E13,
          "n" : 2,
          "max" : 1.27984677E8,
          "min" : 1.19987833E8,
          "sum" : 2.4797251E8,
          "standardDeviation" : 5654622.620490955
        }, {
          "mean" : 1.7111812433333334E8,
          "variance" : 1.0725757939813764E15,
          "n" : 3,
          "max" : 1.92304292E8,
          "min" : 1.33396909E8,
          "sum" : 5.13354373E8,
          "standardDeviation" : 3.275020296091883E7
        }, {
          "mean" : 1.31589056E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.31589056E8,
          "min" : 1.31589056E8,
          "sum" : 1.31589056E8,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1.80769512E8,
          "variance" : 2.41545791647205E15,
          "n" : 2,
          "max" : 2.15521907E8,
          "min" : 1.46017117E8,
          "sum" : 3.61539024E8,
          "standardDeviation" : 4.9147308333946936E7
        }, {
          "mean" : 1.615428505E8,
          "variance" : 5.266969416804499E12,
          "n" : 2,
          "max" : 1.63165652E8,
          "min" : 1.59920049E8,
          "sum" : 3.23085701E8,
          "standardDeviation" : 2294987.890339402
        }, {
          "mean" : 1.812625505E8,
          "variance" : 1.6648910995951125E15,
          "n" : 2,
          "max" : 2.10114683E8,
          "min" : 1.52410418E8,
          "sum" : 3.62525101E8,
          "standardDeviation" : 4.080307708488555E7
        }, {
          "mean" : 1.2855830333333333E8,
          "variance" : 1.7977700970440034E14,
          "n" : 3,
          "max" : 1.41620077E8,
          "min" : 1.14828836E8,
          "sum" : 3.8567491E8,
          "standardDeviation" : 1.3408094931958094E7
        }, {
          "mean" : 1.21044727E8,
          "variance" : 3.4469489351249996E13,
          "n" : 2,
          "max" : 1.25196202E8,
          "min" : 1.16893252E8,
          "sum" : 2.42089454E8,
          "standardDeviation" : 5871072.248852844
        }, {
          "mean" : 1.6680432233333334E8,
          "variance" : 5.397544795754051E15,
          "n" : 3,
          "max" : 2.51571498E8,
          "min" : 1.21515697E8,
          "sum" : 5.00412967E8,
          "standardDeviation" : 7.346798483526039E7
        }, {
          "mean" : 1.1582416E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.1582416E8,
          "min" : 1.1582416E8,
          "sum" : 1.1582416E8,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 1.445291225E8,
          "variance" : 1.30548491776125E13,
          "n" : 2,
          "max" : 1.47084005E8,
          "min" : 1.4197424E8,
          "sum" : 2.89058245E8,
          "standardDeviation" : 3613149.481769679
        }, {
          "mean" : 1.436108365E8,
          "variance" : 1.683770130189405E14,
          "n" : 2,
          "max" : 1.52786266E8,
          "min" : 1.34435407E8,
          "sum" : 2.87221673E8,
          "standardDeviation" : 1.2976016839498186E7
        }, {
          "mean" : 1.686613645E8,
          "variance" : 6.717165495770645E14,
          "n" : 2,
          "max" : 1.86987801E8,
          "min" : 1.50334928E8,
          "sum" : 3.37322729E8,
          "standardDeviation" : 2.5917495048269317E7
        }, {
          "mean" : 1.5373163833333334E8,
          "variance" : 1.1552425399387775E15,
          "n" : 3,
          "max" : 1.92787793E8,
          "min" : 1.30856155E8,
          "sum" : 4.61194915E8,
          "standardDeviation" : 3.398885905614923E7
        }, {
          "mean" : 1.20678046E8,
          "variance" : 1.83074839630722E14,
          "n" : 2,
          "max" : 1.30245565E8,
          "min" : 1.11110527E8,
          "sum" : 2.41356092E8,
          "standardDeviation" : 1.3530515128062272E7
        }, {
          "mean" : 1.6183433566666666E8,
          "variance" : 5.653061857195899E15,
          "n" : 3,
          "max" : 2.48505303E8,
          "min" : 1.14120562E8,
          "sum" : 4.85503007E8,
          "standardDeviation" : 7.518684630436297E7
        }, {
          "mean" : 1.23060579E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.23060579E8,
          "min" : 1.23060579E8,
          "sum" : 1.23060579E8,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 1.510890205E8,
          "variance" : 2.24640655470125E13,
          "n" : 2,
          "max" : 1.54440443E8,
          "min" : 1.47737598E8,
          "sum" : 3.02178041E8,
          "standardDeviation" : 4739627.152742344
        }, {
          "mean" : 1.53698673E8,
          "variance" : 3.8898246266912E13,
          "n" : 2,
          "max" : 1.58108789E8,
          "min" : 1.49288557E8,
          "sum" : 3.07397346E8,
          "standardDeviation" : 6236845.858838584
        }, {
          "mean" : 1.9605847866666666E8,
          "variance" : 4.989657108603425E15,
          "n" : 3,
          "max" : 2.77438803E8,
          "min" : 1.50615505E8,
          "sum" : 5.88175436E8,
          "standardDeviation" : 7.063750497153354E7
        }, {
          "mean" : 1.24521194E8,
          "variance" : 1.1596860576098E13,
          "n" : 2,
          "max" : 1.26929187E8,
          "min" : 1.22113201E8,
          "sum" : 2.49042388E8,
          "standardDeviation" : 3405416.3586994763
        }, {
          "mean" : 1.2942360833333333E8,
          "variance" : 7.499373848240333E12,
          "n" : 3,
          "max" : 1.32320153E8,
          "min" : 1.26876748E8,
          "sum" : 3.88270825E8,
          "standardDeviation" : 2738498.4659919627
        }, {
          "mean" : 1.361496935E8,
          "variance" : 2.5421808340920504E13,
          "n" : 2,
          "max" : 1.39714929E8,
          "min" : 1.32584458E8,
          "sum" : 2.72299387E8,
          "standardDeviation" : 5042004.397154023
        }, {
          "mean" : 1.84655999E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.84655999E8,
          "min" : 1.84655999E8,
          "sum" : 1.84655999E8,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 1.54004948E8,
          "variance" : 2.8091604919058E13,
          "n" : 2,
          "max" : 1.57752721E8,
          "min" : 1.50257175E8,
          "sum" : 3.08009896E8,
          "standardDeviation" : 5300151.405295702
        }, {
          "mean" : 1.431144645E8,
          "variance" : 5.01642646932845E13,
          "n" : 2,
          "max" : 1.48122671E8,
          "min" : 1.38106258E8,
          "sum" : 2.86228929E8,
          "standardDeviation" : 7082673.55546509
        }, {
          "mean" : 1.9852285766666666E8,
          "variance" : 4.3524663677029135E15,
          "n" : 3,
          "max" : 2.71796576E8,
          "min" : 1.4383917E8,
          "sum" : 5.95568573E8,
          "standardDeviation" : 6.59732246271388E7
        }, {
          "mean" : 1.30182226E8,
          "variance" : 2.1781330429445003E14,
          "n" : 2,
          "max" : 1.40618061E8,
          "min" : 1.19746391E8,
          "sum" : 2.60364452E8,
          "standardDeviation" : 1.4758499391687829E7
        }, {
          "mean" : 1.25403408E8,
          "variance" : 1.8877251050761004E13,
          "n" : 3,
          "max" : 1.30322803E8,
          "min" : 1.22091117E8,
          "sum" : 3.76210224E8,
          "standardDeviation" : 4344795.858352956
        }, {
          "mean" : 1.36362003E8,
          "variance" : 3.0266954182658004E13,
          "n" : 2,
          "max" : 1.4025218E8,
          "min" : 1.32471826E8,
          "sum" : 2.72724006E8,
          "standardDeviation" : 5501541.07343188
        }, {
          "mean" : 1.28651234E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.28651234E8,
          "min" : 1.28651234E8,
          "sum" : 1.28651234E8,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 1.784183415E8,
          "variance" : 2.0851689224457042E15,
          "n" : 2,
          "max" : 2.10707418E8,
          "min" : 1.46129265E8,
          "sum" : 3.56836683E8,
          "standardDeviation" : 4.5663649902802385E7
        }, {
          "mean" : 1.43397646E8,
          "variance" : 1.7105914633679998E12,
          "n" : 2,
          "max" : 1.44322468E8,
          "min" : 1.42472824E8,
          "sum" : 2.86795292E8,
          "standardDeviation" : 1307895.8151810104
        }, {
          "mean" : 1.97969313E8,
          "variance" : 5.715441203648721E14,
          "n" : 2,
          "max" : 2.14874107E8,
          "min" : 1.81064519E8,
          "sum" : 3.95938626E8,
          "standardDeviation" : 2.3906988943923324E7
        }, {
          "mean" : 1.4443437433333334E8,
          "variance" : 1.7204604250346334E13,
          "n" : 3,
          "max" : 1.484703E8,
          "min" : 1.4018301E8,
          "sum" : 4.33303123E8,
          "standardDeviation" : 4147843.3251927844
        }, {
          "mean" : 1.2799962E8,
          "variance" : 3.4017919305728E13,
          "n" : 2,
          "max" : 1.32123812E8,
          "min" : 1.23875428E8,
          "sum" : 2.5599924E8,
          "standardDeviation" : 5832488.260230619
        }, {
          "mean" : 1.4333012233333334E8,
          "variance" : 1.0470580995292342E15,
          "n" : 3,
          "max" : 1.8068301E8,
          "min" : 1.23860308E8,
          "sum" : 4.29990367E8,
          "standardDeviation" : 3.235827714093002E7
        }, {
          "mean" : 1.41808565E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.41808565E8,
          "min" : 1.41808565E8,
          "sum" : 1.41808565E8,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 1.86131271E8,
          "variance" : 1.603009814366088E15,
          "n" : 2,
          "max" : 2.14442133E8,
          "min" : 1.57820409E8,
          "sum" : 3.72262542E8,
          "standardDeviation" : 4.0037605002873085E7
        }, {
          "mean" : 1.621005235E8,
          "variance" : 2.4935716911978447E14,
          "n" : 2,
          "max" : 1.7326648E8,
          "min" : 1.50934567E8,
          "sum" : 3.24201047E8,
          "standardDeviation" : 1.5791047119168015E7
        }, {
          "mean" : 1.56425024E8,
          "variance" : 1.328120760402E12,
          "n" : 2,
          "max" : 1.57239923E8,
          "min" : 1.55610125E8,
          "sum" : 3.12850048E8,
          "standardDeviation" : 1152441.2177642728
        }, {
          "mean" : 1.5805199566666666E8,
          "variance" : 1.2692866343183868E15,
          "n" : 3,
          "max" : 1.99036885E8,
          "min" : 1.34482902E8,
          "sum" : 4.74155987E8,
          "standardDeviation" : 3.562704919465527E7
        }, {
          "mean" : 1.338424065E8,
          "variance" : 9.53322684728445E13,
          "n" : 2,
          "max" : 1.40746473E8,
          "min" : 1.2693834E8,
          "sum" : 2.67684813E8,
          "standardDeviation" : 9763824.479825746
        }, {
          "mean" : 1.1788990266666667E8,
          "variance" : 1.476780556849643E14,
          "n" : 3,
          "max" : 1.31777725E8,
          "min" : 1.09206926E8,
          "sum" : 3.53669708E8,
          "standardDeviation" : 1.2152286027121166E7
        }, {
          "mean" : 2.27261347E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2.27261347E8,
          "min" : 2.27261347E8,
          "sum" : 2.27261347E8,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 1.842226465E8,
          "variance" : 6.879475871748605E14,
          "n" : 2,
          "max" : 2.02769177E8,
          "min" : 1.65676116E8,
          "sum" : 3.68445293E8,
          "standardDeviation" : 2.622875496806626E7
        }, {
          "mean" : 1.46383092E8,
          "variance" : 2.165904845E10,
          "n" : 2,
          "max" : 1.46487157E8,
          "min" : 1.46279027E8,
          "sum" : 2.92766184E8,
          "standardDeviation" : 147170.13436835614
        }, {
          "mean" : 1.637796945E8,
          "variance" : 1.5133883804112498E13,
          "n" : 2,
          "max" : 1.66530502E8,
          "min" : 1.61028887E8,
          "sum" : 3.27559389E8,
          "standardDeviation" : 3890229.2739776275
        }, {
          "mean" : 1.7255470733333334E8,
          "variance" : 1.244905994274616E15,
          "n" : 3,
          "max" : 2.12044215E8,
          "min" : 1.44130087E8,
          "sum" : 5.17664122E8,
          "standardDeviation" : 3.5283225395003445E7
        }, {
          "mean" : 1.37397416E8,
          "variance" : 3.0832024600658004E13,
          "n" : 2,
          "max" : 1.41323739E8,
          "min" : 1.33471093E8,
          "sum" : 2.74794832E8,
          "standardDeviation" : 5552659.236857418
        }, {
          "mean" : 1.48019998E8,
          "variance" : 3.1470909276872E13,
          "n" : 2,
          "max" : 1.51986792E8,
          "min" : 1.44053204E8,
          "sum" : 2.96039996E8,
          "standardDeviation" : 5609893.873940219
        }, {
          "mean" : 1.959465195E8,
          "variance" : 6.994423589322424E15,
          "n" : 2,
          "max" : 2.55083748E8,
          "min" : 1.36809291E8,
          "sum" : 3.91893039E8,
          "standardDeviation" : 8.363267058585672E7
        } ],
        "25" : [ {
          "mean" : 1.81431503E8,
          "variance" : 3.5114931933138E15,
          "n" : 2,
          "max" : 2.23333133E8,
          "min" : 1.39529873E8,
          "sum" : 3.62863006E8,
          "standardDeviation" : 5.925785343153935E7
        }, {
          "mean" : 1.51081559E8,
          "variance" : 5.892130921257801E13,
          "n" : 2,
          "max" : 1.56509326E8,
          "min" : 1.45653792E8,
          "sum" : 3.02163118E8,
          "standardDeviation" : 7676021.704801127
        }, {
          "mean" : 2.14985562E8,
          "variance" : 2.5010080032023125E15,
          "n" : 2,
          "max" : 2.50348028E8,
          "min" : 1.79623096E8,
          "sum" : 4.29971124E8,
          "standardDeviation" : 5.0010079016157456E7
        }, {
          "mean" : 1.3582670033333334E8,
          "variance" : 2.751577135839523E14,
          "n" : 3,
          "max" : 1.54575057E8,
          "min" : 1.23056634E8,
          "sum" : 4.07480101E8,
          "standardDeviation" : 1.6587878513660278E7
        }, {
          "mean" : 1.261848685E8,
          "variance" : 4.953060232600499E12,
          "n" : 2,
          "max" : 1.27758568E8,
          "min" : 1.24611169E8,
          "sum" : 2.52369737E8,
          "standardDeviation" : 2225547.1759997583
        }, {
          "mean" : 1.71920174E8,
          "variance" : 4.311263424626679E15,
          "n" : 3,
          "max" : 2.46679819E8,
          "min" : 1.23608287E8,
          "sum" : 5.15760522E8,
          "standardDeviation" : 6.5660211883808896E7
        }, {
          "mean" : 1.27236654E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.27236654E8,
          "min" : 1.27236654E8,
          "sum" : 1.27236654E8,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 1.38421013E8,
          "variance" : 6.508687680800001E10,
          "n" : 2,
          "max" : 1.38601411E8,
          "min" : 1.38240615E8,
          "sum" : 2.76842026E8,
          "standardDeviation" : 255121.2982249816
        }, {
          "mean" : 1.91401167E8,
          "variance" : 2.858700691125E15,
          "n" : 2,
          "max" : 2.29207917E8,
          "min" : 1.53594417E8,
          "sum" : 3.82802334E8,
          "standardDeviation" : 5.346681859924901E7
        }, {
          "mean" : 1.45601101E8,
          "variance" : 2.4582641572807996E13,
          "n" : 2,
          "max" : 1.49106999E8,
          "min" : 1.42095203E8,
          "sum" : 2.91202202E8,
          "standardDeviation" : 4958088.499896709
        }, {
          "mean" : 1.6768143733333334E8,
          "variance" : 5.003343849873651E15,
          "n" : 3,
          "max" : 2.49356557E8,
          "min" : 1.26369567E8,
          "sum" : 5.03044312E8,
          "standardDeviation" : 7.073431875598754E7
        }, {
          "mean" : 1.366674835E8,
          "variance" : 6.112299661654049E13,
          "n" : 2,
          "max" : 1.42195729E8,
          "min" : 1.31139238E8,
          "sum" : 2.73334967E8,
          "standardDeviation" : 7818119.762228032
        }, {
          "mean" : 1.2977558933333333E8,
          "variance" : 1.4078405096278538E14,
          "n" : 3,
          "max" : 1.38397062E8,
          "min" : 1.16243318E8,
          "sum" : 3.89326768E8,
          "standardDeviation" : 1.1865245507901864E7
        }, {
          "mean" : 2.33514584E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 2.33514584E8,
          "min" : 2.33514584E8,
          "sum" : 2.33514584E8,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 1.84995256E8,
          "variance" : 1.275089448247808E15,
          "n" : 2,
          "max" : 2.10244904E8,
          "min" : 1.59745608E8,
          "sum" : 3.69990512E8,
          "standardDeviation" : 3.5708394646746695E7
        }, {
          "mean" : 1.56786222E8,
          "variance" : 6.323826886658E12,
          "n" : 2,
          "max" : 1.58564399E8,
          "min" : 1.55008045E8,
          "sum" : 3.13572444E8,
          "standardDeviation" : 2514722.029699903
        }, {
          "mean" : 1.825442945E8,
          "variance" : 3.0729266613565245E15,
          "n" : 2,
          "max" : 2.21742041E8,
          "min" : 1.43346548E8,
          "sum" : 3.65088589E8,
          "standardDeviation" : 5.543398471476252E7
        }, {
          "mean" : 1.2480247133333333E8,
          "variance" : 3.905515416822932E13,
          "n" : 3,
          "max" : 1.31583362E8,
          "min" : 1.19274318E8,
          "sum" : 3.74407414E8,
          "standardDeviation" : 6249412.305827591
        }, {
          "mean" : 1.262823885E8,
          "variance" : 3.9416261451844995E12,
          "n" : 2,
          "max" : 1.27686245E8,
          "min" : 1.24878532E8,
          "sum" : 2.52564777E8,
          "standardDeviation" : 1985352.9019256248
        }, {
          "mean" : 1.3911069033333334E8,
          "variance" : 1.1188508857718455E15,
          "n" : 3,
          "max" : 1.76094185E8,
          "min" : 1.10974425E8,
          "sum" : 4.17332071E8,
          "standardDeviation" : 3.3449228477976073E7
        }, {
          "mean" : 1.30264119E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 1.30264119E8,
          "min" : 1.30264119E8,
          "sum" : 1.30264119E8,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1.41476956E8,
          "variance" : 4.28925747983202E14,
          "n" : 2,
          "max" : 1.56121507E8,
          "min" : 1.26832405E8,
          "sum" : 2.82953912E8,
          "standardDeviation" : 2.0710522639064472E7
        }, {
          "mean" : 1.90667683E8,
          "variance" : 2.4987571938049995E15,
          "n" : 2,
          "max" : 2.26014233E8,
          "min" : 1.55321133E8,
          "sum" : 3.81335366E8,
          "standardDeviation" : 4.998757039309872E7
        }, {
          "mean" : 1.476621265E8,
          "variance" : 9.609460577860502E12,
          "n" : 2,
          "max" : 1.49854096E8,
          "min" : 1.45470157E8,
          "sum" : 2.95324253E8,
          "standardDeviation" : 3099912.995208172
        }, {
          "mean" : 1.50788196E8,
          "variance" : 7.70668214037349E14,
          "n" : 3,
          "max" : 1.82506664E8,
          "min" : 1.30913703E8,
          "sum" : 4.52364588E8,
          "standardDeviation" : 2.7760911621150862E7
        }, {
          "mean" : 1.29628253E8,
          "variance" : 3.7975612500000006E11,
          "n" : 2,
          "max" : 1.30064003E8,
          "min" : 1.29192503E8,
          "sum" : 2.59256506E8,
          "standardDeviation" : 616243.5598040762
        }, {
          "mean" : 1.270173305E8,
          "variance" : 1.6445851752245002E12,
          "n" : 2,
          "max" : 1.27924134E8,
          "min" : 1.26110527E8,
          "sum" : 2.54034661E8,
          "standardDeviation" : 1282413.808107391
        }, {
          "mean" : 1.238793345E8,
          "variance" : 1.441828012657805E14,
          "n" : 2,
          "max" : 1.3237E8,
          "min" : 1.15388669E8,
          "sum" : 2.47758669E8,
          "standardDeviation" : 1.2007614303673336E7
        } ],
        "29" : [ {
          "mean" : 1.87762343E8,
          "variance" : 1.628335739550258E15,
          "n" : 2,
          "max" : 2.1629597E8,
          "min" : 1.59228716E8,
          "sum" : 3.75524686E8,
          "standardDeviation" : 4.035264228709513E7
        }, {
          "mean" : 1.498167795E8,
          "variance" : 2.8217400556005005E12,
          "n" : 2,
          "max" : 1.5100458E8,
          "min" : 1.48628979E8,
          "sum" : 2.99633559E8,
          "standardDeviation" : 1679803.5764935436
        }, {
          "mean" : 1.828065655E8,
          "variance" : 1.5264427500219645E15,
          "n" : 2,
          "max" : 2.10433027E8,
          "min" : 1.55180104E8,
          "sum" : 3.65613131E8,
          "standardDeviation" : 3.906971653367816E7
        }, {
          "mean" : 1.3379084633333333E8,
          "variance" : 3.2636128594206332E13,
          "n" : 3,
          "max" : 1.39872321E8,
          "min" : 1.28536994E8,
          "sum" : 4.01372539E8,
          "standardDeviation" : 5712803.917010134
        }, {
          "mean" : 1.251257285E8,
          "variance" : 8.254443020674048E13,
          "n" : 2,
          "max" : 1.31550074E8,
          "min" : 1.18701383E8,
          "sum" : 2.50251457E8,
          "standardDeviation" : 9085396.535470562
        }, {
          "mean" : 1.55739898E8,
          "variance" : 9.887191214064081E14,
          "n" : 2,
          "max" : 1.77974096E8,
          "min" : 1.335057E8,
          "sum" : 3.11479796E8,
          "standardDeviation" : 3.1443904360088747E7
        }, {
          "mean" : 1.248994665E8,
          "variance" : 2.210652875205E11,
          "n" : 2,
          "max" : 1.25231931E8,
          "min" : 1.24567002E8,
          "sum" : 2.49798933E8,
          "standardDeviation" : 470175.80490758986
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
      "meanOld" : 8.011754971288886E8,
      "meanCurrent" : 2297737.5345502645,
      "deviationOld" : 1.3434616736725103E7,
      "deviationCurrent" : 1574223.399430828,
      "vms" : 30,
      "callsOld" : 450,
      "calls" : 450,
      "tvalue" : 323.4852243792755,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "FASTER",
    "inVMDeviationPredecessor" : 7.271766563909326E7,
    "inVMDeviation" : 3839390.934538259,
    "ess" : 1,
    "values" : [ 2897463.3666666667, 733494.5444444444, 4461499.322222223, 1765721.380952381, 2425151.344444445, 648993.0444444445, 3431534.2666666666, 1409706.6476190474, 1545606.0095238094, 1133539.3333333333, 3680184.9, 5387539.077777778, 1482981.0857142855, 1678058.438095238, 1787906.923809524, 633647.7333333333, 6518696.9, 636857.0888888888, 2661126.566666667, 3346318.788888889, 1455616.1333333333, 1377006.8857142855, 1316655.4555555556, 1426695.5666666667, 1831585.4761904762, 1619047.2222222225, 1164415.8444444442, 3910356.3333333335, 5545593.4, 1019126.9555555555 ],
    "valuesPredecessor" : [ 7.856880168666667E8, 7.885974532E8, 7.891628323333334E8, 7.992309366666666E8, 8.204217563333334E8, 8.141790631333333E8, 7.957769787333333E8, 7.865255186666666E8, 8.184749106666666E8, 8.020581138666667E8, 7.803011898E8, 7.981259756666666E8, 8.144256943333334E8, 7.993324526666666E8, 7.946855681333333E8, 7.956218559333333E8, 8.027796318666667E8, 7.993662844E8, 8.123170622E8, 8.087769574E8, 7.954924160666667E8, 7.987879902666667E8, 8.122048170666667E8, 7.873545351333333E8, 8.200856266E8, 7.840662633333334E8, 7.756345338E8, 8.084274957333333E8, 8.2439531E8, 8.22967673E8 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1190256.5,
          "variance" : 3.7521505874949994E11,
          "n" : 1,
          "max" : 2334772.0,
          "min" : 722369.0,
          "sum" : 1190256.5,
          "standardDeviation" : 612548.0052612203
        }, {
          "mean" : 7445034.0,
          "variance" : 2.3205586622269856E14,
          "n" : 5,
          "max" : 3.4695136E7,
          "min" : 576439.0,
          "sum" : 3.722517E7,
          "standardDeviation" : 1.5233379999944154E7
        }, {
          "mean" : 620303.5,
          "variance" : 1.9802818761000004E10,
          "n" : 4,
          "max" : 780731.0,
          "min" : 438601.0,
          "sum" : 2481214.0,
          "standardDeviation" : 140722.48846932748
        }, {
          "mean" : 513062.0,
          "variance" : 5.514636466000001E9,
          "n" : 5,
          "max" : 609525.0,
          "min" : 438280.0,
          "sum" : 2565310.0,
          "standardDeviation" : 74260.59834124689
        } ],
        "1" : [ {
          "mean" : 1580348.1666666665,
          "variance" : 3.946545198581667E11,
          "n" : 1,
          "max" : 2528058.0,
          "min" : 1003293.0,
          "sum" : 1580348.1666666665,
          "standardDeviation" : 628215.3451310837
        }, {
          "mean" : 897797.4,
          "variance" : 4.06702443863E10,
          "n" : 5,
          "max" : 1186523.0,
          "min" : 707146.0,
          "sum" : 4488987.0,
          "standardDeviation" : 201668.64998382868
        }, {
          "mean" : 564318.5,
          "variance" : 1.1550087528333336E10,
          "n" : 4,
          "max" : 666093.0,
          "min" : 465712.0,
          "sum" : 2257274.0,
          "standardDeviation" : 107471.33351891255
        }, {
          "mean" : 535161.8,
          "variance" : 8.194584745700002E9,
          "n" : 5,
          "max" : 632372.0,
          "min" : 420242.0,
          "sum" : 2675809.0,
          "standardDeviation" : 90523.94570333311
        } ],
        "2" : [ {
          "mean" : 1153962.8333333333,
          "variance" : 2.0802627417136667E11,
          "n" : 1,
          "max" : 2028519.0,
          "min" : 780593.0,
          "sum" : 1153962.8333333333,
          "standardDeviation" : 456098.9740959375
        }, {
          "mean" : 1.21226942E7,
          "variance" : 6.334424893799702E14,
          "n" : 5,
          "max" : 5.7144838E7,
          "min" : 790000.0,
          "sum" : 6.0613471E7,
          "standardDeviation" : 2.5168283401534762E7
        }, {
          "mean" : 638913.25,
          "variance" : 3.983831317583332E9,
          "n" : 4,
          "max" : 717426.0,
          "min" : 586841.0,
          "sum" : 2555653.0,
          "standardDeviation" : 63117.59911136776
        }, {
          "mean" : 519880.6,
          "variance" : 6.473704668299998E9,
          "n" : 5,
          "max" : 636880.0,
          "min" : 443553.0,
          "sum" : 2599403.0,
          "standardDeviation" : 80459.33549501884
        } ],
        "3" : [ {
          "mean" : 9594176.857142858,
          "variance" : 3.010232000757402E14,
          "n" : 2,
          "max" : 4.7264705E7,
          "min" : 853858.0,
          "sum" : 1.9188353714285716E7,
          "standardDeviation" : 1.7350020175081648E7
        }, {
          "mean" : 599789.75,
          "variance" : 5.786336691583331E9,
          "n" : 4,
          "max" : 688738.0,
          "min" : 506301.0,
          "sum" : 2399159.0,
          "standardDeviation" : 76067.9741519605
        }, {
          "mean" : 629898.2,
          "variance" : 8.8746826167E9,
          "n" : 5,
          "max" : 749082.0,
          "min" : 496517.0,
          "sum" : 3149491.0,
          "standardDeviation" : 94205.53389636938
        }, {
          "mean" : 437204.25,
          "variance" : 9.47182088916667E8,
          "n" : 4,
          "max" : 475131.0,
          "min" : 403295.0,
          "sum" : 1748817.0,
          "standardDeviation" : 30776.323512022467
        } ],
        "4" : [ {
          "mean" : 1248998.1666666667,
          "variance" : 2.948256968813667E11,
          "n" : 1,
          "max" : 2153156.0,
          "min" : 765560.0,
          "sum" : 1248998.1666666667,
          "standardDeviation" : 542978.5418240455
        }, {
          "mean" : 6023372.800000001,
          "variance" : 1.438552827832967E14,
          "n" : 5,
          "max" : 2.7477704E7,
          "min" : 495309.0,
          "sum" : 3.0116864000000004E7,
          "standardDeviation" : 1.1993968600229729E7
        }, {
          "mean" : 549354.5,
          "variance" : 1.939052121666667E9,
          "n" : 4,
          "max" : 609911.0,
          "min" : 516018.0,
          "sum" : 2197418.0,
          "standardDeviation" : 44034.66954192647
        }, {
          "mean" : 562798.0,
          "variance" : 1.7683882706000004E10,
          "n" : 5,
          "max" : 784260.0,
          "min" : 447687.0,
          "sum" : 2813990.0,
          "standardDeviation" : 132980.7606610821
        } ],
        "5" : [ {
          "mean" : 1206500.6666666667,
          "variance" : 2.3714119322506665E11,
          "n" : 1,
          "max" : 2142504.0,
          "min" : 862959.0,
          "sum" : 1206500.6666666667,
          "standardDeviation" : 486971.45011290617
        }, {
          "mean" : 721115.4,
          "variance" : 7.1617640393E9,
          "n" : 5,
          "max" : 818874.0,
          "min" : 598173.0,
          "sum" : 3605577.0,
          "standardDeviation" : 84627.20625957116
        }, {
          "mean" : 598998.25,
          "variance" : 2.182607427625E10,
          "n" : 4,
          "max" : 719766.0,
          "min" : 401865.0,
          "sum" : 2395993.0,
          "standardDeviation" : 147736.50285643694
        }, {
          "mean" : 505365.0,
          "variance" : 3.5541889194999986E9,
          "n" : 5,
          "max" : 599117.0,
          "min" : 445899.0,
          "sum" : 2526825.0,
          "standardDeviation" : 59617.01870690951
        } ],
        "6" : [ {
          "mean" : 7728891.333333333,
          "variance" : 2.931441222707262E14,
          "n" : 6,
          "max" : 4.2677798E7,
          "min" : 663234.0,
          "sum" : 4.6373348E7,
          "standardDeviation" : 1.7121452107538257E7
        }, {
          "mean" : 684423.0,
          "variance" : 7.327069229999997E9,
          "n" : 4,
          "max" : 808324.0,
          "min" : 612697.0,
          "sum" : 2737692.0,
          "standardDeviation" : 85598.30156025292
        }, {
          "mean" : 446506.75,
          "variance" : 1.5424199491666648E8,
          "n" : 4,
          "max" : 461291.0,
          "min" : 430918.0,
          "sum" : 1786027.0,
          "standardDeviation" : 12419.42007167269
        }, {
          "mean" : 575947.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 575947.0,
          "min" : 575947.0,
          "sum" : 575947.0,
          "standardDeviation" : 0.0
        } ],
        "7" : [ {
          "mean" : 6352239.857142856,
          "variance" : 1.6985421458941444E14,
          "n" : 2,
          "max" : 3.5822314E7,
          "min" : 774665.0,
          "sum" : 1.2704479714285713E7,
          "standardDeviation" : 1.303281299602716E7
        }, {
          "mean" : 640592.0,
          "variance" : 2.282224115333333E9,
          "n" : 4,
          "max" : 711630.0,
          "min" : 608098.0,
          "sum" : 2562368.0,
          "standardDeviation" : 47772.62935335811
        }, {
          "mean" : 648660.0,
          "variance" : 1.8588357113333347E9,
          "n" : 4,
          "max" : 699079.0,
          "min" : 596108.0,
          "sum" : 2594640.0,
          "standardDeviation" : 43114.21704418781
        }, {
          "mean" : 656822.4,
          "variance" : 1.42207820123E10,
          "n" : 5,
          "max" : 815430.0,
          "min" : 520638.0,
          "sum" : 3284112.0,
          "standardDeviation" : 119250.92038345028
        } ],
        "8" : [ {
          "mean" : 7705695.571428572,
          "variance" : 2.9102904221242994E14,
          "n" : 2,
          "max" : 4.6377811E7,
          "min" : 841539.0,
          "sum" : 1.5411391142857144E7,
          "standardDeviation" : 1.705957333031603E7
        }, {
          "mean" : 715397.75,
          "variance" : 8.707774522249998E9,
          "n" : 4,
          "max" : 820285.0,
          "min" : 614717.0,
          "sum" : 2861591.0,
          "standardDeviation" : 93315.4570382099
        }, {
          "mean" : 656884.5,
          "variance" : 2.7829221374999996E10,
          "n" : 4,
          "max" : 784405.0,
          "min" : 413068.0,
          "sum" : 2627538.0,
          "standardDeviation" : 166820.92607044237
        }, {
          "mean" : 456714.0,
          "variance" : 3.454214177500001E9,
          "n" : 5,
          "max" : 554819.0,
          "min" : 408236.0,
          "sum" : 2283570.0,
          "standardDeviation" : 58772.56313536105
        } ],
        "9" : [ {
          "mean" : 8275033.0,
          "variance" : 2.7457422205301203E14,
          "n" : 1,
          "max" : 4.204647E7,
          "min" : 874400.0,
          "sum" : 8275033.0,
          "standardDeviation" : 1.6570281290702702E7
        }, {
          "mean" : 743771.6,
          "variance" : 5.211466335930001E10,
          "n" : 5,
          "max" : 1027218.0,
          "min" : 470592.0,
          "sum" : 3718858.0,
          "standardDeviation" : 228286.36262225566
        }, {
          "mean" : 624317.5,
          "variance" : 8.93123785433333E9,
          "n" : 4,
          "max" : 744540.0,
          "min" : 538532.0,
          "sum" : 2497270.0,
          "standardDeviation" : 94505.22659796827
        }, {
          "mean" : 516879.25,
          "variance" : 3.8185466769166684E9,
          "n" : 4,
          "max" : 568762.0,
          "min" : 444294.0,
          "sum" : 2067517.0,
          "standardDeviation" : 61794.39033534248
        }, {
          "mean" : 444412.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 444412.0,
          "min" : 444412.0,
          "sum" : 444412.0,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 3706194.4999999995,
          "variance" : 4.24746992376715E13,
          "n" : 1,
          "max" : 1.6998941E7,
          "min" : 801674.0,
          "sum" : 3706194.4999999995,
          "standardDeviation" : 6517261.636429176
        }, {
          "mean" : 9231573.8,
          "variance" : 3.624653714930942E14,
          "n" : 5,
          "max" : 4.3287662E7,
          "min" : 559922.0,
          "sum" : 4.6157869E7,
          "standardDeviation" : 1.9038523353797536E7
        }, {
          "mean" : 571363.0,
          "variance" : 2.0253238033333333E9,
          "n" : 4,
          "max" : 633339.0,
          "min" : 525950.0,
          "sum" : 2285452.0,
          "standardDeviation" : 45003.59767100107
        }, {
          "mean" : 634502.0,
          "variance" : 4.537550251333333E9,
          "n" : 4,
          "max" : 719056.0,
          "min" : 568893.0,
          "sum" : 2538008.0,
          "standardDeviation" : 67361.34092588518
        }, {
          "mean" : 515250.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 515250.0,
          "min" : 515250.0,
          "sum" : 515250.0,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 1372833.1666666667,
          "variance" : 1.0644836695296669E11,
          "n" : 1,
          "max" : 1889269.0,
          "min" : 1075276.0,
          "sum" : 1372833.1666666667,
          "standardDeviation" : 326264.25938641623
        }, {
          "mean" : 1.49511432E7,
          "variance" : 1.0226736733782922E15,
          "n" : 5,
          "max" : 7.2157135E7,
          "min" : 527655.0,
          "sum" : 7.4755716E7,
          "standardDeviation" : 3.1979269431591026E7
        }, {
          "mean" : 566984.25,
          "variance" : 5.994421409166666E8,
          "n" : 4,
          "max" : 602042.0,
          "min" : 545037.0,
          "sum" : 2267937.0,
          "standardDeviation" : 24483.507528878836
        }, {
          "mean" : 483320.0,
          "variance" : 4.332252364000001E9,
          "n" : 5,
          "max" : 562182.0,
          "min" : 397673.0,
          "sum" : 2416600.0,
          "standardDeviation" : 65819.84779684621
        } ],
        "12" : [ {
          "mean" : 7084672.142857143,
          "variance" : 2.493862708085111E14,
          "n" : 2,
          "max" : 4.2876787E7,
          "min" : 660784.0,
          "sum" : 1.4169344285714285E7,
          "standardDeviation" : 1.5791968553936241E7
        }, {
          "mean" : 784648.75,
          "variance" : 8.904147338916668E9,
          "n" : 4,
          "max" : 911795.0,
          "min" : 705763.0,
          "sum" : 3138595.0,
          "standardDeviation" : 94361.7896127276
        }, {
          "mean" : 544212.4,
          "variance" : 1.6177490017999997E9,
          "n" : 5,
          "max" : 573379.0,
          "min" : 474031.0,
          "sum" : 2721062.0,
          "standardDeviation" : 40221.250624514396
        }, {
          "mean" : 553928.75,
          "variance" : 1.244144017825E10,
          "n" : 4,
          "max" : 665850.0,
          "min" : 405942.0,
          "sum" : 2215715.0,
          "standardDeviation" : 111541.20394836161
        } ],
        "13" : [ {
          "mean" : 8856182.285714285,
          "variance" : 3.969239980834883E14,
          "n" : 2,
          "max" : 5.4008646E7,
          "min" : 623878.0,
          "sum" : 1.771236457142857E7,
          "standardDeviation" : 1.9922951540459268E7
        }, {
          "mean" : 642123.0,
          "variance" : 1.506837195466667E10,
          "n" : 4,
          "max" : 779779.0,
          "min" : 493985.0,
          "sum" : 2568492.0,
          "standardDeviation" : 122753.29712340386
        }, {
          "mean" : 619390.25,
          "variance" : 7.538494354250004E9,
          "n" : 4,
          "max" : 697732.0,
          "min" : 495247.0,
          "sum" : 2477561.0,
          "standardDeviation" : 86824.5031903437
        }, {
          "mean" : 482491.8,
          "variance" : 2.5668393076999993E9,
          "n" : 5,
          "max" : 546648.0,
          "min" : 415943.0,
          "sum" : 2412459.0,
          "standardDeviation" : 50663.98432515942
        } ],
        "14" : [ {
          "mean" : 9774760.42857143,
          "variance" : 5.08099354276508E14,
          "n" : 2,
          "max" : 6.0878317E7,
          "min" : 627151.0,
          "sum" : 1.954952085714286E7,
          "standardDeviation" : 2.2541059298012327E7
        }, {
          "mean" : 701767.0,
          "variance" : 1.0081642246666668E10,
          "n" : 4,
          "max" : 805394.0,
          "min" : 606108.0,
          "sum" : 2807068.0,
          "standardDeviation" : 100407.38143516476
        }, {
          "mean" : 536008.75,
          "variance" : 1.3667654612250002E10,
          "n" : 4,
          "max" : 675427.0,
          "min" : 426514.0,
          "sum" : 2144035.0,
          "standardDeviation" : 116908.74480657981
        }, {
          "mean" : 463596.0,
          "variance" : 1.1584156159999998E9,
          "n" : 5,
          "max" : 507141.0,
          "min" : 429774.0,
          "sum" : 2317980.0,
          "standardDeviation" : 34035.505226160516
        } ],
        "15" : [ {
          "mean" : 771433.3333333334,
          "variance" : 3.638659712546666E10,
          "n" : 6,
          "max" : 1064840.0,
          "min" : 545875.0,
          "sum" : 4628600.0,
          "standardDeviation" : 190752.71197408088
        }, {
          "mean" : 549321.75,
          "variance" : 4.0078383809166656E9,
          "n" : 4,
          "max" : 608337.0,
          "min" : 488296.0,
          "sum" : 2197287.0,
          "standardDeviation" : 63307.490717265566
        }, {
          "mean" : 558489.25,
          "variance" : 6.503041007583335E9,
          "n" : 4,
          "max" : 642902.0,
          "min" : 471524.0,
          "sum" : 2233957.0,
          "standardDeviation" : 80641.43480608052
        }, {
          "mean" : 444872.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 444872.0,
          "min" : 444872.0,
          "sum" : 444872.0,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 1295707.5,
          "variance" : 2.1843748815950006E11,
          "n" : 1,
          "max" : 2018030.0,
          "min" : 798480.0,
          "sum" : 1295707.5,
          "standardDeviation" : 467372.96472891973
        }, {
          "mean" : 1.83101658E7,
          "variance" : 1.5593910123147865E15,
          "n" : 5,
          "max" : 8.8950222E7,
          "min" : 547427.0,
          "sum" : 9.1550829E7,
          "standardDeviation" : 3.948912524119503E7
        }, {
          "mean" : 577489.5,
          "variance" : 1.8848645269666656E10,
          "n" : 4,
          "max" : 699621.0,
          "min" : 430522.0,
          "sum" : 2309958.0,
          "standardDeviation" : 137290.36845192985
        }, {
          "mean" : 524791.8,
          "variance" : 6.940039806700001E9,
          "n" : 5,
          "max" : 614026.0,
          "min" : 429958.0,
          "sum" : 2623959.0,
          "standardDeviation" : 83306.9013149571
        } ],
        "17" : [ {
          "mean" : 1275644.3333333333,
          "variance" : 1.7719940016746674E11,
          "n" : 1,
          "max" : 2021190.0,
          "min" : 924141.0,
          "sum" : 1275644.3333333333,
          "standardDeviation" : 420950.5911237882
        }, {
          "mean" : 667857.8,
          "variance" : 7.983831002700001E9,
          "n" : 5,
          "max" : 780260.0,
          "min" : 572712.0,
          "sum" : 3339289.0,
          "standardDeviation" : 89352.2859399803
        }, {
          "mean" : 575042.75,
          "variance" : 5.545602311583337E9,
          "n" : 4,
          "max" : 652758.0,
          "min" : 477466.0,
          "sum" : 2300171.0,
          "standardDeviation" : 74468.80092752492
        }, {
          "mean" : 524420.75,
          "variance" : 9.290720002916668E9,
          "n" : 4,
          "max" : 614625.0,
          "min" : 401339.0,
          "sum" : 2097683.0,
          "standardDeviation" : 96388.38105766
        }, {
          "mean" : 540069.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 540069.0,
          "min" : 540069.0,
          "sum" : 540069.0,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 1565532.5,
          "variance" : 1.3164749166203003E12,
          "n" : 1,
          "max" : 3876335.0,
          "min" : 830095.0,
          "sum" : 1565532.5,
          "standardDeviation" : 1147377.408100883
        }, {
          "mean" : 6628969.6,
          "variance" : 1.7216529677070684E14,
          "n" : 5,
          "max" : 3.0099353E7,
          "min" : 542590.0,
          "sum" : 3.3144848E7,
          "standardDeviation" : 1.3121177415564002E7
        }, {
          "mean" : 564481.25,
          "variance" : 1.4216146784916666E10,
          "n" : 4,
          "max" : 682054.0,
          "min" : 450242.0,
          "sum" : 2257925.0,
          "standardDeviation" : 119231.48403386022
        }, {
          "mean" : 537497.75,
          "variance" : 3.61904957225E9,
          "n" : 4,
          "max" : 618626.0,
          "min" : 480298.0,
          "sum" : 2149991.0,
          "standardDeviation" : 60158.53698561826
        }, {
          "mean" : 798602.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 798602.0,
          "min" : 798602.0,
          "sum" : 798602.0,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 2368715.8333333335,
          "variance" : 7.430743327214167E12,
          "n" : 1,
          "max" : 7875897.0,
          "min" : 918637.0,
          "sum" : 2368715.8333333335,
          "standardDeviation" : 2725938.9808310396
        }, {
          "mean" : 8452084.2,
          "variance" : 2.942415069787298E14,
          "n" : 5,
          "max" : 3.9136957E7,
          "min" : 713152.0,
          "sum" : 4.2260421E7,
          "standardDeviation" : 1.7153469240323655E7
        }, {
          "mean" : 704139.75,
          "variance" : 9.807929269166667E8,
          "n" : 4,
          "max" : 747465.0,
          "min" : 675322.0,
          "sum" : 2816559.0,
          "standardDeviation" : 31317.613684900494
        }, {
          "mean" : 549817.2,
          "variance" : 3.354754200120001E10,
          "n" : 5,
          "max" : 847272.0,
          "min" : 402825.0,
          "sum" : 2749086.0,
          "standardDeviation" : 183159.88098161673
        } ],
        "20" : [ {
          "mean" : 7270522.0,
          "variance" : 2.5686929533776103E14,
          "n" : 2,
          "max" : 4.3598104E7,
          "min" : 640412.0,
          "sum" : 1.4541044E7,
          "standardDeviation" : 1.6027142457024615E7
        }, {
          "mean" : 656276.0,
          "variance" : 1.692874285933333E10,
          "n" : 4,
          "max" : 776959.0,
          "min" : 503937.0,
          "sum" : 2625104.0,
          "standardDeviation" : 130110.50249435412
        }, {
          "mean" : 525654.25,
          "variance" : 4.832084777583333E9,
          "n" : 4,
          "max" : 586452.0,
          "min" : 461964.0,
          "sum" : 2102617.0,
          "standardDeviation" : 69513.19858547248
        }, {
          "mean" : 513095.4,
          "variance" : 7.958969668300004E9,
          "n" : 5,
          "max" : 621727.0,
          "min" : 417842.0,
          "sum" : 2565477.0,
          "standardDeviation" : 89213.05772307103
        } ],
        "21" : [ {
          "mean" : 6399397.142857143,
          "variance" : 1.5599237570577816E14,
          "n" : 2,
          "max" : 3.4621881E7,
          "min" : 871829.0,
          "sum" : 1.2798794285714285E7,
          "standardDeviation" : 1.2489690777027994E7
        }, {
          "mean" : 659999.5,
          "variance" : 2.8020836190333344E10,
          "n" : 4,
          "max" : 892778.0,
          "min" : 515340.0,
          "sum" : 2639998.0,
          "standardDeviation" : 167394.2537554182
        }, {
          "mean" : 645285.75,
          "variance" : 7.585346680916666E9,
          "n" : 4,
          "max" : 774797.0,
          "min" : 585978.0,
          "sum" : 2581143.0,
          "standardDeviation" : 87093.89577299127
        }, {
          "mean" : 527033.6,
          "variance" : 2.8009341832999997E9,
          "n" : 5,
          "max" : 592548.0,
          "min" : 461659.0,
          "sum" : 2635168.0,
          "standardDeviation" : 52923.85268761147
        } ],
        "22" : [ {
          "mean" : 1.0929267833333334E7,
          "variance" : 5.5280327316620294E14,
          "n" : 1,
          "max" : 5.8912718E7,
          "min" : 767225.0,
          "sum" : 1.0929267833333334E7,
          "standardDeviation" : 2.3511768822574854E7
        }, {
          "mean" : 668834.2,
          "variance" : 4.2772305847E9,
          "n" : 5,
          "max" : 758403.0,
          "min" : 583715.0,
          "sum" : 3344171.0,
          "standardDeviation" : 65400.53963615285
        }, {
          "mean" : 570969.25,
          "variance" : 7.122141492249997E9,
          "n" : 4,
          "max" : 651523.0,
          "min" : 479885.0,
          "sum" : 2283877.0,
          "standardDeviation" : 84392.78104346365
        }, {
          "mean" : 638503.2,
          "variance" : 1.3675495543200003E10,
          "n" : 5,
          "max" : 799557.0,
          "min" : 519369.0,
          "sum" : 3192516.0,
          "standardDeviation" : 116942.27440579391
        } ],
        "23" : [ {
          "mean" : 1.32006285E7,
          "variance" : 8.665894544998699E14,
          "n" : 1,
          "max" : 7.3282176E7,
          "min" : 714639.0,
          "sum" : 1.32006285E7,
          "standardDeviation" : 2.9437891475101776E7
        }, {
          "mean" : 630869.6,
          "variance" : 1.6471496018799997E10,
          "n" : 5,
          "max" : 769618.0,
          "min" : 483229.0,
          "sum" : 3154348.0,
          "standardDeviation" : 128341.32623126503
        }, {
          "mean" : 539271.75,
          "variance" : 4.006719436249998E9,
          "n" : 4,
          "max" : 600604.0,
          "min" : 470926.0,
          "sum" : 2157087.0,
          "standardDeviation" : 63298.65272065432
        }, {
          "mean" : 592122.5,
          "variance" : 8.168478602999999E9,
          "n" : 4,
          "max" : 667210.0,
          "min" : 484438.0,
          "sum" : 2368490.0,
          "standardDeviation" : 90379.6359972754
        }, {
          "mean" : 519880.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 519880.0,
          "min" : 519880.0,
          "sum" : 519880.0,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 9930504.57142857,
          "variance" : 4.534636319233123E14,
          "n" : 2,
          "max" : 5.808932E7,
          "min" : 936601.0,
          "sum" : 1.986100914285714E7,
          "standardDeviation" : 2.129468553238841E7
        }, {
          "mean" : 625783.75,
          "variance" : 1.2339663261583334E10,
          "n" : 4,
          "max" : 776895.0,
          "min" : 525534.0,
          "sum" : 2503135.0,
          "standardDeviation" : 111084.0369341308
        }, {
          "mean" : 627692.6,
          "variance" : 5.136620380299999E9,
          "n" : 5,
          "max" : 719004.0,
          "min" : 546415.0,
          "sum" : 3138463.0,
          "standardDeviation" : 71670.21961944863
        }, {
          "mean" : 492793.75,
          "variance" : 1.5390438382499998E9,
          "n" : 4,
          "max" : 544231.0,
          "min" : 448903.0,
          "sum" : 1971175.0,
          "standardDeviation" : 39230.64922034811
        } ],
        "25" : [ {
          "mean" : 1.4930070333333334E7,
          "variance" : 8.853437996911774E14,
          "n" : 1,
          "max" : 7.5422069E7,
          "min" : 874904.0,
          "sum" : 1.4930070333333334E7,
          "standardDeviation" : 2.9754727350308176E7
        }, {
          "mean" : 781270.6,
          "variance" : 1.50565444018E10,
          "n" : 5,
          "max" : 907254.0,
          "min" : 618814.0,
          "sum" : 3906353.0,
          "standardDeviation" : 122705.11155530563
        }, {
          "mean" : 594890.0,
          "variance" : 5.641067608666668E9,
          "n" : 4,
          "max" : 666209.0,
          "min" : 500355.0,
          "sum" : 2379560.0,
          "standardDeviation" : 75107.04100593145
        }, {
          "mean" : 613945.0,
          "variance" : 5.680001623999999E9,
          "n" : 5,
          "max" : 746040.0,
          "min" : 558896.0,
          "sum" : 3069725.0,
          "standardDeviation" : 75365.78549978763
        } ],
        "26" : [ {
          "mean" : 9568797.666666666,
          "variance" : 3.1433695060075425E14,
          "n" : 1,
          "max" : 4.5391597E7,
          "min" : 637455.0,
          "sum" : 9568797.666666666,
          "standardDeviation" : 1.7729550208641905E7
        }, {
          "mean" : 680691.0,
          "variance" : 7.730810595000002E9,
          "n" : 5,
          "max" : 790956.0,
          "min" : 593500.0,
          "sum" : 3403455.0,
          "standardDeviation" : 87925.02826271938
        }, {
          "mean" : 474125.25,
          "variance" : 1.8333337425000024E8,
          "n" : 4,
          "max" : 492752.0,
          "min" : 462249.0,
          "sum" : 1896501.0,
          "standardDeviation" : 13540.065518674577
        }, {
          "mean" : 519496.8,
          "variance" : 3.2611270637000003E9,
          "n" : 5,
          "max" : 612642.0,
          "min" : 462708.0,
          "sum" : 2597484.0,
          "standardDeviation" : 57106.27867143857
        } ],
        "27" : [ {
          "mean" : 1195228.0,
          "variance" : 1.8261607819039996E11,
          "n" : 1,
          "max" : 2023888.0,
          "min" : 929241.0,
          "sum" : 1195228.0,
          "standardDeviation" : 427336.0249152884
        }, {
          "mean" : 1.04153396E7,
          "variance" : 4.691827357929813E14,
          "n" : 5,
          "max" : 4.9162558E7,
          "min" : 591329.0,
          "sum" : 5.2076698E7,
          "standardDeviation" : 2.1660626394289277E7
        }, {
          "mean" : 634485.25,
          "variance" : 1.7997081900916668E10,
          "n" : 4,
          "max" : 819840.0,
          "min" : 501590.0,
          "sum" : 2537941.0,
          "standardDeviation" : 134153.20309600016
        }, {
          "mean" : 546550.75,
          "variance" : 9.181498390916668E9,
          "n" : 4,
          "max" : 601993.0,
          "min" : 403667.0,
          "sum" : 2186203.0,
          "standardDeviation" : 95820.13562355601
        }, {
          "mean" : 659275.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 659275.0,
          "min" : 659275.0,
          "sum" : 659275.0,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 1.2979498166666666E7,
          "variance" : 9.08170013498207E14,
          "n" : 6,
          "max" : 7.4493414E7,
          "min" : 510663.0,
          "sum" : 7.7876989E7,
          "standardDeviation" : 3.0135859262649324E7
        }, {
          "mean" : 568904.25,
          "variance" : 2.9351681809166665E9,
          "n" : 4,
          "max" : 628294.0,
          "min" : 506559.0,
          "sum" : 2275617.0,
          "standardDeviation" : 54177.19244217687
        }, {
          "mean" : 590101.5,
          "variance" : 5.296328808333334E9,
          "n" : 4,
          "max" : 658442.0,
          "min" : 487066.0,
          "sum" : 2360406.0,
          "standardDeviation" : 72775.8806771401
        }, {
          "mean" : 670889.0,
          "variance" : 0.0,
          "n" : 1,
          "max" : 670889.0,
          "min" : 670889.0,
          "sum" : 670889.0,
          "standardDeviation" : 0.0
        } ],
        "29" : [ {
          "mean" : 5721460.333333333,
          "variance" : 1.248894614995103E14,
          "n" : 1,
          "max" : 2.8517758E7,
          "min" : 850824.0,
          "sum" : 5721460.333333333,
          "standardDeviation" : 1.1175395362111816E7
        }, {
          "mean" : 811645.4,
          "variance" : 8.345002224799999E9,
          "n" : 5,
          "max" : 968118.0,
          "min" : 733170.0,
          "sum" : 4058227.0,
          "standardDeviation" : 91350.98371008382
        }, {
          "mean" : 629410.75,
          "variance" : 2.2002270909583332E10,
          "n" : 4,
          "max" : 837750.0,
          "min" : 487079.0,
          "sum" : 2517643.0,
          "standardDeviation" : 148331.62477901782
        }, {
          "mean" : 597914.8,
          "variance" : 1.29273803232E10,
          "n" : 5,
          "max" : 718231.0,
          "min" : 416751.0,
          "sum" : 2989574.0,
          "standardDeviation" : 113698.63817654106
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 8.16522142E8,
          "variance" : 4.601814109416883E15,
          "n" : 2,
          "max" : 8.64489913E8,
          "min" : 7.68554371E8,
          "sum" : 1.633044284E9,
          "standardDeviation" : 6.783667230500685E7
        }, {
          "mean" : 8.738865745E8,
          "variance" : 2.5513846762681205E15,
          "n" : 2,
          "max" : 9.0960341E8,
          "min" : 8.38169739E8,
          "sum" : 1.747773149E9,
          "standardDeviation" : 5.0511233169148825E7
        }, {
          "mean" : 8.422821325E8,
          "variance" : 1.6931160347490312E16,
          "n" : 2,
          "max" : 9.3429072E8,
          "min" : 7.50273545E8,
          "sum" : 1.684564265E9,
          "standardDeviation" : 1.3011979229729162E8
        }, {
          "mean" : 7.588558203333334E8,
          "variance" : 7.577119708375762E14,
          "n" : 3,
          "max" : 7.82295768E8,
          "min" : 7.28544488E8,
          "sum" : 2.276567461E9,
          "standardDeviation" : 2.7526568453724418E7
        }, {
          "mean" : 7.623186155E8,
          "variance" : 2.1897827027706125E15,
          "n" : 2,
          "max" : 7.95407758E8,
          "min" : 7.29229473E8,
          "sum" : 1.524637231E9,
          "standardDeviation" : 4.679511409079598E7
        }, {
          "mean" : 7.232798523333334E8,
          "variance" : 1.0927131320175902E15,
          "n" : 3,
          "max" : 7.44233862E8,
          "min" : 6.85172968E8,
          "sum" : 2.169839557E9,
          "standardDeviation" : 3.3056211700943444E7
        }, {
          "mean" : 7.48894306E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.48894306E8,
          "min" : 7.48894306E8,
          "sum" : 7.48894306E8,
          "standardDeviation" : 0.0
        } ],
        "1" : [ {
          "mean" : 8.665514595E8,
          "variance" : 2.1551700877093802E15,
          "n" : 2,
          "max" : 8.9937805E8,
          "min" : 8.33724869E8,
          "sum" : 1.733102919E9,
          "standardDeviation" : 4.64238094915678E7
        }, {
          "mean" : 8.42379902E8,
          "variance" : 1.459932435889538E15,
          "n" : 2,
          "max" : 8.69397789E8,
          "min" : 8.15362015E8,
          "sum" : 1.684759804E9,
          "standardDeviation" : 3.8209062222063735E7
        }, {
          "mean" : 8.17346352E8,
          "variance" : 4.87456292488768E16,
          "n" : 2,
          "max" : 9.73464303E8,
          "min" : 6.61228401E8,
          "sum" : 1.634692704E9,
          "standardDeviation" : 2.207841236340983E8
        }, {
          "mean" : 7.755364803333334E8,
          "variance" : 3.9315738975946845E15,
          "n" : 3,
          "max" : 8.42298637E8,
          "min" : 7.17892576E8,
          "sum" : 2.326609441E9,
          "standardDeviation" : 6.270226389529077E7
        }, {
          "mean" : 7.64675465E8,
          "variance" : 2.5753807573328185E15,
          "n" : 2,
          "max" : 8.00559868E8,
          "min" : 7.28791062E8,
          "sum" : 1.52935093E9,
          "standardDeviation" : 5.074820940026178E7
        }, {
          "mean" : 7.297676626666666E8,
          "variance" : 2.981906674115583E14,
          "n" : 3,
          "max" : 7.48452581E8,
          "min" : 7.14396436E8,
          "sum" : 2.189302988E9,
          "standardDeviation" : 1.7268198151850075E7
        }, {
          "mean" : 7.31143012E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.31143012E8,
          "min" : 7.31143012E8,
          "sum" : 7.31143012E8,
          "standardDeviation" : 0.0
        } ],
        "2" : [ {
          "mean" : 8.38838485E8,
          "variance" : 3.37510753171488E14,
          "n" : 2,
          "max" : 8.51829073E8,
          "min" : 8.25847897E8,
          "sum" : 1.67767697E9,
          "standardDeviation" : 1.837146573280118E7
        }, {
          "mean" : 8.75256429E8,
          "variance" : 1.3495391759619198E14,
          "n" : 2,
          "max" : 8.83470865E8,
          "min" : 8.67041993E8,
          "sum" : 1.750512858E9,
          "standardDeviation" : 1.1616966798445797E7
        }, {
          "mean" : 8.84772537E8,
          "variance" : 2.0742047643949518E15,
          "n" : 2,
          "max" : 9.16976611E8,
          "min" : 8.52568463E8,
          "sum" : 1.769545074E9,
          "standardDeviation" : 4.5543438214466766E7
        }, {
          "mean" : 7.697669983333334E8,
          "variance" : 1.725983428682457E15,
          "n" : 3,
          "max" : 8.11568305E8,
          "min" : 7.28483227E8,
          "sum" : 2.309300995E9,
          "standardDeviation" : 4.154495671778293E7
        }, {
          "mean" : 7.638925525E8,
          "variance" : 1.0469910422412004E15,
          "n" : 2,
          "max" : 7.86772577E8,
          "min" : 7.41012528E8,
          "sum" : 1.527785105E9,
          "standardDeviation" : 3.235724095532869E7
        }, {
          "mean" : 6.837120423333334E8,
          "variance" : 8.44257423697971E15,
          "n" : 3,
          "max" : 7.86343936E8,
          "min" : 6.09102426E8,
          "sum" : 2.051136127E9,
          "standardDeviation" : 9.188348185054651E7
        }, {
          "mean" : 7.51485356E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.51485356E8,
          "min" : 7.51485356E8,
          "sum" : 7.51485356E8,
          "standardDeviation" : 0.0
        } ],
        "3" : [ {
          "mean" : 8.794553545E8,
          "variance" : 1.3454345088264612E16,
          "n" : 2,
          "max" : 9.61474697E8,
          "min" : 7.97436012E8,
          "sum" : 1.758910709E9,
          "standardDeviation" : 1.1599286654042399E8
        }, {
          "mean" : 8.603004115E8,
          "variance" : 2.119681818906125E14,
          "n" : 2,
          "max" : 8.70595269E8,
          "min" : 8.50005554E8,
          "sum" : 1.720600823E9,
          "standardDeviation" : 1.4559127099198375E7
        }, {
          "mean" : 9.192489865E8,
          "variance" : 2.8795034614038044E14,
          "n" : 2,
          "max" : 9.31247952E8,
          "min" : 9.07250021E8,
          "sum" : 1.838497973E9,
          "standardDeviation" : 1.6969099744546864E7
        }, {
          "mean" : 7.53332576E8,
          "variance" : 2.7567405074566105E15,
          "n" : 3,
          "max" : 8.06796091E8,
          "min" : 7.01842387E8,
          "sum" : 2.259997728E9,
          "standardDeviation" : 5.250467129176804E7
        }, {
          "mean" : 7.685459285E8,
          "variance" : 1.9645301640175442E15,
          "n" : 2,
          "max" : 7.99887037E8,
          "min" : 7.3720482E8,
          "sum" : 1.537091857E9,
          "standardDeviation" : 4.432302070050669E7
        }, {
          "mean" : 6.845668875E8,
          "variance" : 7.548383662211704E15,
          "n" : 2,
          "max" : 7.46001339E8,
          "min" : 6.23132436E8,
          "sum" : 1.369133775E9,
          "standardDeviation" : 8.688143450825213E7
        }, {
          "mean" : 7.521155925E8,
          "variance" : 1.2614000242576442E15,
          "n" : 2,
          "max" : 7.77229334E8,
          "min" : 7.27001851E8,
          "sum" : 1.504231185E9,
          "standardDeviation" : 3.551619383123203E7
        } ],
        "4" : [ {
          "mean" : 8.92431285E8,
          "variance" : 5.244526721283201E13,
          "n" : 2,
          "max" : 8.97552089E8,
          "min" : 8.87310481E8,
          "sum" : 1.78486257E9,
          "standardDeviation" : 7241910.467054395
        }, {
          "mean" : 9.229334805E8,
          "variance" : 2.1885080298392208E15,
          "n" : 2,
          "max" : 9.56012991E8,
          "min" : 8.8985397E8,
          "sum" : 1.845866961E9,
          "standardDeviation" : 4.6781492385763206E7
        }, {
          "mean" : 8.426279795E8,
          "variance" : 1.353740033224842E16,
          "n" : 2,
          "max" : 9.2490009E8,
          "min" : 7.60355869E8,
          "sum" : 1.685255959E9,
          "standardDeviation" : 1.1635033447415791E8
        }, {
          "mean" : 8.180513386666666E8,
          "variance" : 6.410502271421444E14,
          "n" : 3,
          "max" : 8.44678743E8,
          "min" : 7.94283631E8,
          "sum" : 2.454154016E9,
          "standardDeviation" : 2.5318969709333442E7
        }, {
          "mean" : 7.19694118E8,
          "variance" : 4.733659011210368E15,
          "n" : 2,
          "max" : 7.6834419E8,
          "min" : 6.71044046E8,
          "sum" : 1.439388236E9,
          "standardDeviation" : 6.880159163282757E7
        }, {
          "mean" : 7.626704465E8,
          "variance" : 8.66028150495605E13,
          "n" : 2,
          "max" : 7.69250827E8,
          "min" : 7.56090066E8,
          "sum" : 1.525340893E9,
          "standardDeviation" : 9306063.348675448
        }, {
          "mean" : 7.85728855E8,
          "variance" : 1.169964083411208E15,
          "n" : 2,
          "max" : 8.09915257E8,
          "min" : 7.61542453E8,
          "sum" : 1.57145771E9,
          "standardDeviation" : 3.420473773340775E7
        } ],
        "5" : [ {
          "mean" : 9.184248665E8,
          "variance" : 5.86169655979758E15,
          "n" : 2,
          "max" : 9.72562176E8,
          "min" : 8.64287557E8,
          "sum" : 1.836849733E9,
          "standardDeviation" : 7.65617173252898E7
        }, {
          "mean" : 9.0037216E8,
          "variance" : 3.4295987270769915E15,
          "n" : 2,
          "max" : 9.41782296E8,
          "min" : 8.58962024E8,
          "sum" : 1.80074432E9,
          "standardDeviation" : 5.8562775950914346E7
        }, {
          "mean" : 9.15506185E8,
          "variance" : 2.083853221033088E15,
          "n" : 2,
          "max" : 9.47785073E8,
          "min" : 8.83227297E8,
          "sum" : 1.83101237E9,
          "standardDeviation" : 4.564924118792215E7
        }, {
          "mean" : 7.761631863333334E8,
          "variance" : 2.3326913412972305E15,
          "n" : 3,
          "max" : 8.20699242E8,
          "min" : 7.24824621E8,
          "sum" : 2.328489559E9,
          "standardDeviation" : 4.829794344790708E7
        }, {
          "mean" : 7.72608389E8,
          "variance" : 2.3486613983143203E14,
          "n" : 2,
          "max" : 7.83445043E8,
          "min" : 7.61771735E8,
          "sum" : 1.545216778E9,
          "standardDeviation" : 1.532534305754465E7
        }, {
          "mean" : 7.16741548E8,
          "variance" : 5.54087773897813E14,
          "n" : 3,
          "max" : 7.33318669E8,
          "min" : 6.89798576E8,
          "sum" : 2.150224644E9,
          "standardDeviation" : 2.3539069095820528E7
        }, {
          "mean" : 7.20148543E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.20148543E8,
          "min" : 7.20148543E8,
          "sum" : 7.20148543E8,
          "standardDeviation" : 0.0
        } ],
        "6" : [ {
          "mean" : 8.572319475E8,
          "variance" : 4.21711004038005E13,
          "n" : 2,
          "max" : 8.61823848E8,
          "min" : 8.52640047E8,
          "sum" : 1.714463895E9,
          "standardDeviation" : 6493927.964167796
        }, {
          "mean" : 8.50458233E8,
          "variance" : 7.379081511456202E13,
          "n" : 2,
          "max" : 8.56532392E8,
          "min" : 8.44384074E8,
          "sum" : 1.700916466E9,
          "standardDeviation" : 8590158.037810598
        }, {
          "mean" : 8.636977305E8,
          "variance" : 1.4317467800635804E16,
          "n" : 2,
          "max" : 9.48307032E8,
          "min" : 7.79088429E8,
          "sum" : 1.727395461E9,
          "standardDeviation" : 1.1965562168421425E8
        }, {
          "mean" : 8.169197205E8,
          "variance" : 8.147878331040045E14,
          "n" : 2,
          "max" : 8.37103722E8,
          "min" : 7.96735719E8,
          "sum" : 1.633839441E9,
          "standardDeviation" : 2.8544488664258894E7
        }, {
          "mean" : 7.55801586E8,
          "variance" : 1.355998679477287E15,
          "n" : 3,
          "max" : 7.96539959E8,
          "min" : 7.24883115E8,
          "sum" : 2.267404758E9,
          "standardDeviation" : 3.6823887348802365E7
        }, {
          "mean" : 7.497385765E8,
          "variance" : 6.633719546148449E13,
          "n" : 2,
          "max" : 7.55497795E8,
          "min" : 7.43979358E8,
          "sum" : 1.499477153E9,
          "standardDeviation" : 8144764.9113700325
        }, {
          "mean" : 6.965787535E8,
          "variance" : 3.9175875990378125E15,
          "n" : 2,
          "max" : 7.40837016E8,
          "min" : 6.52320491E8,
          "sum" : 1.393157507E9,
          "standardDeviation" : 6.259063507456856E7
        } ],
        "7" : [ {
          "mean" : 8.67468268E8,
          "variance" : 1.6765379484841803E14,
          "n" : 2,
          "max" : 8.76623971E8,
          "min" : 8.58312565E8,
          "sum" : 1.734936536E9,
          "standardDeviation" : 1.2948119355660034E7
        }, {
          "mean" : 8.83904245E8,
          "variance" : 2.2654591339566075E15,
          "n" : 2,
          "max" : 9.17560293E8,
          "min" : 8.50248197E8,
          "sum" : 1.76780849E9,
          "standardDeviation" : 4.759683953747988E7
        }, {
          "mean" : 7.906555226666666E8,
          "variance" : 2.7226555877617575E15,
          "n" : 3,
          "max" : 8.35936251E8,
          "min" : 7.33592821E8,
          "sum" : 2.371966568E9,
          "standardDeviation" : 5.217907231603258E7
        }, {
          "mean" : 7.399747635E8,
          "variance" : 3.57248378448405E13,
          "n" : 2,
          "max" : 7.44201159E8,
          "min" : 7.35748368E8,
          "sum" : 1.479949527E9,
          "standardDeviation" : 5977025.836052618
        }, {
          "mean" : 7.361380795E8,
          "variance" : 1.8044024886444504E13,
          "n" : 2,
          "max" : 7.39141746E8,
          "min" : 7.33134413E8,
          "sum" : 1.472276159E9,
          "standardDeviation" : 4247825.901145726
        }, {
          "mean" : 7.661470596666666E8,
          "variance" : 1.4370141888590905E15,
          "n" : 3,
          "max" : 8.09160845E8,
          "min" : 7.3761344E8,
          "sum" : 2.298441179E9,
          "standardDeviation" : 3.790796999127084E7
        }, {
          "mean" : 6.72504321E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.72504321E8,
          "min" : 6.72504321E8,
          "sum" : 6.72504321E8,
          "standardDeviation" : 0.0
        } ],
        "8" : [ {
          "mean" : 9.019895645E8,
          "variance" : 3.444713238560445E14,
          "n" : 2,
          "max" : 9.15113423E8,
          "min" : 8.88865706E8,
          "sum" : 1.803979129E9,
          "standardDeviation" : 1.8559938681365423E7
        }, {
          "mean" : 9.031765755E8,
          "variance" : 1.5626105705351247E14,
          "n" : 2,
          "max" : 9.12015723E8,
          "min" : 8.94337428E8,
          "sum" : 1.806353151E9,
          "standardDeviation" : 1.2500442274316236E7
        }, {
          "mean" : 8.808427365E8,
          "variance" : 9.510411712055804E14,
          "n" : 2,
          "max" : 9.02649171E8,
          "min" : 8.59036302E8,
          "sum" : 1.761685473E9,
          "standardDeviation" : 3.083895541690056E7
        }, {
          "mean" : 8.057288995E8,
          "variance" : 5.59651847406125E13,
          "n" : 2,
          "max" : 8.11018757E8,
          "min" : 8.00439042E8,
          "sum" : 1.611457799E9,
          "standardDeviation" : 7480988.2195210345
        }, {
          "mean" : 7.337756736666666E8,
          "variance" : 1.2723362869375852E15,
          "n" : 3,
          "max" : 7.55472569E8,
          "min" : 6.92607763E8,
          "sum" : 2.201327021E9,
          "standardDeviation" : 3.566982319745341E7
        }, {
          "mean" : 7.623867465E8,
          "variance" : 1.0830672465312502E13,
          "n" : 2,
          "max" : 7.64713834E8,
          "min" : 7.60059659E8,
          "sum" : 1.524773493E9,
          "standardDeviation" : 3290998.7033289
        }, {
          "mean" : 7.83773797E8,
          "variance" : 4.4136540236889806E14,
          "n" : 2,
          "max" : 7.9862919E8,
          "min" : 7.68918404E8,
          "sum" : 1.567547594E9,
          "standardDeviation" : 2.100869825498234E7
        } ],
        "9" : [ {
          "mean" : 8.66710621E8,
          "variance" : 2.2263998727036018E15,
          "n" : 2,
          "max" : 9.00075272E8,
          "min" : 8.3334597E8,
          "sum" : 1.733421242E9,
          "standardDeviation" : 4.7184741948045045E7
        }, {
          "mean" : 8.87868213E8,
          "variance" : 3.950544849714738E15,
          "n" : 2,
          "max" : 9.3231225E8,
          "min" : 8.43424176E8,
          "sum" : 1.775736426E9,
          "standardDeviation" : 6.285335989201164E7
        }, {
          "mean" : 8.56199307E8,
          "variance" : 1.3837728311368202E14,
          "n" : 2,
          "max" : 8.64517278E8,
          "min" : 8.47881336E8,
          "sum" : 1.712398614E9,
          "standardDeviation" : 1.1763387399626097E7
        }, {
          "mean" : 7.999153026666666E8,
          "variance" : 7.711052068029162E14,
          "n" : 3,
          "max" : 8.22818355E8,
          "min" : 7.69029455E8,
          "sum" : 2.399745908E9,
          "standardDeviation" : 2.7768781154435214E7
        }, {
          "mean" : 7.317346495E8,
          "variance" : 3.3116706481880444E14,
          "n" : 2,
          "max" : 7.44602576E8,
          "min" : 7.18866723E8,
          "sum" : 1.463469299E9,
          "standardDeviation" : 1.819799617592015E7
        }, {
          "mean" : 7.322592473333334E8,
          "variance" : 1.834879323377333E14,
          "n" : 3,
          "max" : 7.42008694E8,
          "min" : 7.16792114E8,
          "sum" : 2.196777742E9,
          "standardDeviation" : 1.3545771751278453E7
        }, {
          "mean" : 7.49322477E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.49322477E8,
          "min" : 7.49322477E8,
          "sum" : 7.49322477E8,
          "standardDeviation" : 0.0
        } ],
        "10" : [ {
          "mean" : 7.915841495E8,
          "variance" : 1.8200879949223208E15,
          "n" : 2,
          "max" : 8.21751085E8,
          "min" : 7.61417214E8,
          "sum" : 1.583168299E9,
          "standardDeviation" : 4.266248931933439E7
        }, {
          "mean" : 8.92335061E8,
          "variance" : 5.253426354321801E13,
          "n" : 2,
          "max" : 8.97460208E8,
          "min" : 8.87209914E8,
          "sum" : 1.784670122E9,
          "standardDeviation" : 7248052.396555781
        }, {
          "mean" : 9.208851895E8,
          "variance" : 1.0053637837263845E15,
          "n" : 2,
          "max" : 9.43305758E8,
          "min" : 8.98464621E8,
          "sum" : 1.841770379E9,
          "standardDeviation" : 3.1707472048815E7
        }, {
          "mean" : 7.118844446666666E8,
          "variance" : 1.5675324931606902E15,
          "n" : 3,
          "max" : 7.45185305E8,
          "min" : 6.68107975E8,
          "sum" : 2.135653334E9,
          "standardDeviation" : 3.959207614107513E7
        }, {
          "mean" : 7.57860138E8,
          "variance" : 1.9737471494558722E15,
          "n" : 2,
          "max" : 7.89274682E8,
          "min" : 7.26445594E8,
          "sum" : 1.515720276E9,
          "standardDeviation" : 4.442687418056634E7
        }, {
          "mean" : 6.98502466E8,
          "variance" : 6.104016608450304E15,
          "n" : 3,
          "max" : 7.57400114E8,
          "min" : 6.09873266E8,
          "sum" : 2.095507398E9,
          "standardDeviation" : 7.812820622829059E7
        }, {
          "mean" : 7.48028039E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.48028039E8,
          "min" : 7.48028039E8,
          "sum" : 7.48028039E8,
          "standardDeviation" : 0.0
        } ],
        "11" : [ {
          "mean" : 8.738710395E8,
          "variance" : 5.483146006802112E15,
          "n" : 2,
          "max" : 9.26231072E8,
          "min" : 8.21511007E8,
          "sum" : 1.747742079E9,
          "standardDeviation" : 7.404826808779603E7
        }, {
          "mean" : 8.54404854E8,
          "variance" : 5.0734497802562E13,
          "n" : 2,
          "max" : 8.59441445E8,
          "min" : 8.49368263E8,
          "sum" : 1.708809708E9,
          "standardDeviation" : 7122815.300326269
        }, {
          "mean" : 9.421814065E8,
          "variance" : 1.5754725056459208E15,
          "n" : 2,
          "max" : 9.70248046E8,
          "min" : 9.14114767E8,
          "sum" : 1.884362813E9,
          "standardDeviation" : 3.969222223113643E7
        }, {
          "mean" : 7.548729236666666E8,
          "variance" : 2.2583919509851455E15,
          "n" : 3,
          "max" : 8.09066561E8,
          "min" : 7.20314255E8,
          "sum" : 2.264618771E9,
          "standardDeviation" : 4.752254150385E7
        }, {
          "mean" : 7.440649115E8,
          "variance" : 1.766508415675205E14,
          "n" : 2,
          "max" : 7.53463072E8,
          "min" : 7.34666751E8,
          "sum" : 1.488129823E9,
          "standardDeviation" : 1.3291006040459108E7
        }, {
          "mean" : 7.221887073333334E8,
          "variance" : 1.1689539658983686E16,
          "n" : 3,
          "max" : 8.00675844E8,
          "min" : 5.98865613E8,
          "sum" : 2.166566122E9,
          "standardDeviation" : 1.081181745081912E8
        }, {
          "mean" : 7.11660319E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.11660319E8,
          "min" : 7.11660319E8,
          "sum" : 7.11660319E8,
          "standardDeviation" : 0.0
        } ],
        "12" : [ {
          "mean" : 8.31084641E8,
          "variance" : 2.0365530001960502E15,
          "n" : 2,
          "max" : 8.62995086E8,
          "min" : 7.99174196E8,
          "sum" : 1.662169282E9,
          "standardDeviation" : 4.512818410036072E7
        }, {
          "mean" : 8.875218605E8,
          "variance" : 1.5030681501668453E14,
          "n" : 2,
          "max" : 8.96190967E8,
          "min" : 8.78852754E8,
          "sum" : 1.775043721E9,
          "standardDeviation" : 1.2259967985956755E7
        }, {
          "mean" : 9.37834093E8,
          "variance" : 9.472872602439968E15,
          "n" : 2,
          "max" : 1.006655865E9,
          "min" : 8.69012321E8,
          "sum" : 1.875668186E9,
          "standardDeviation" : 9.732868334894893E7
        }, {
          "mean" : 7.598256043333334E8,
          "variance" : 1.8179790683644638E14,
          "n" : 3,
          "max" : 7.73196972E8,
          "min" : 7.46233199E8,
          "sum" : 2.279476813E9,
          "standardDeviation" : 1.3483245411860097E7
        }, {
          "mean" : 7.631218155E8,
          "variance" : 3.1694104215511244E14,
          "n" : 2,
          "max" : 7.75710323E8,
          "min" : 7.50533308E8,
          "sum" : 1.526243631E9,
          "standardDeviation" : 1.7802838036535423E7
        }, {
          "mean" : 7.951254825E8,
          "variance" : 2.47342797093216E15,
          "n" : 2,
          "max" : 8.30292427E8,
          "min" : 7.59958538E8,
          "sum" : 1.590250965E9,
          "standardDeviation" : 4.973356985912192E7
        }, {
          "mean" : 7.537664085E8,
          "variance" : 6.113606153698805E14,
          "n" : 2,
          "max" : 7.71250124E8,
          "min" : 7.36282693E8,
          "sum" : 1.507532817E9,
          "standardDeviation" : 2.4725707580772698E7
        } ],
        "13" : [ {
          "mean" : 8.58385776E8,
          "variance" : 1.0473549120000002E11,
          "n" : 2,
          "max" : 8.58614616E8,
          "min" : 8.58156936E8,
          "sum" : 1.716771552E9,
          "standardDeviation" : 323628.6316134591
        }, {
          "mean" : 9.02954932E8,
          "variance" : 3.398836846688018E15,
          "n" : 2,
          "max" : 9.44178935E8,
          "min" : 8.61730929E8,
          "sum" : 1.805909864E9,
          "standardDeviation" : 5.829954413790916E7
        }, {
          "mean" : 8.760798665E8,
          "variance" : 1.7064731454311642E15,
          "n" : 2,
          "max" : 9.0529008E8,
          "min" : 8.46869653E8,
          "sum" : 1.752159733E9,
          "standardDeviation" : 4.130948009151367E7
        }, {
          "mean" : 7.771833786666666E8,
          "variance" : 1.8234391478639052E15,
          "n" : 3,
          "max" : 8.25182214E8,
          "min" : 7.43410374E8,
          "sum" : 2.331550136E9,
          "standardDeviation" : 4.270174642639227E7
        }, {
          "mean" : 7.85185832E8,
          "variance" : 1.146016717267298E15,
          "n" : 2,
          "max" : 8.09123425E8,
          "min" : 7.61248239E8,
          "sum" : 1.570371664E9,
          "standardDeviation" : 3.385286867116726E7
        }, {
          "mean" : 6.950509356666666E8,
          "variance" : 1.8370639442017042E15,
          "n" : 3,
          "max" : 7.420616E8,
          "min" : 6.58145528E8,
          "sum" : 2.085152807E9,
          "standardDeviation" : 4.2860983938795716E7
        }, {
          "mean" : 7.28071034E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.28071034E8,
          "min" : 7.28071034E8,
          "sum" : 7.28071034E8,
          "standardDeviation" : 0.0
        } ],
        "14" : [ {
          "mean" : 8.05242062E8,
          "variance" : 1.7366695877708818E15,
          "n" : 2,
          "max" : 8.34709583E8,
          "min" : 7.75774541E8,
          "sum" : 1.610484124E9,
          "standardDeviation" : 4.1673367847713985E7
        }, {
          "mean" : 8.46997043E8,
          "variance" : 2.5887958483984197E14,
          "n" : 2,
          "max" : 8.58374204E8,
          "min" : 8.35619882E8,
          "sum" : 1.693994086E9,
          "standardDeviation" : 1.6089735387502244E7
        }, {
          "mean" : 9.283295605E8,
          "variance" : 2.0397227483341845E15,
          "n" : 2,
          "max" : 9.60264829E8,
          "min" : 8.96394292E8,
          "sum" : 1.856659121E9,
          "standardDeviation" : 4.516328983072629E7
        }, {
          "mean" : 7.569466393333334E8,
          "variance" : 3.3882020551332815E15,
          "n" : 3,
          "max" : 8.21906048E8,
          "min" : 7.0952008E8,
          "sum" : 2.270839918E9,
          "standardDeviation" : 5.82082644916792E7
        }, {
          "mean" : 7.337046225E8,
          "variance" : 8.761044791630448E13,
          "n" : 2,
          "max" : 7.40323174E8,
          "min" : 7.27086071E8,
          "sum" : 1.467409245E9,
          "standardDeviation" : 9360045.294564791
        }, {
          "mean" : 7.571732133333334E8,
          "variance" : 5.674527965827753E15,
          "n" : 3,
          "max" : 8.35322043E8,
          "min" : 6.85021642E8,
          "sum" : 2.27151964E9,
          "standardDeviation" : 7.532946280060513E7
        }, {
          "mean" : 7.49377388E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.49377388E8,
          "min" : 7.49377388E8,
          "sum" : 7.49377388E8,
          "standardDeviation" : 0.0
        } ],
        "15" : [ {
          "mean" : 8.47521463E8,
          "variance" : 1.8914911050605E14,
          "n" : 2,
          "max" : 8.57246408E8,
          "min" : 8.37796518E8,
          "sum" : 1.695042926E9,
          "standardDeviation" : 1.3753149112332419E7
        }, {
          "mean" : 9.05945019E8,
          "variance" : 6.797554031077923E15,
          "n" : 2,
          "max" : 9.6424405E8,
          "min" : 8.47645988E8,
          "sum" : 1.811890038E9,
          "standardDeviation" : 8.24472803134095E7
        }, {
          "mean" : 8.543267355E8,
          "variance" : 2.7956794748260504E13,
          "n" : 2,
          "max" : 8.58065505E8,
          "min" : 8.50587966E8,
          "sum" : 1.708653471E9,
          "standardDeviation" : 5287418.533486876
        }, {
          "mean" : 7.801735763333334E8,
          "variance" : 2.429291506973752E15,
          "n" : 3,
          "max" : 8.26266625E8,
          "min" : 7.28215728E8,
          "sum" : 2.340520729E9,
          "standardDeviation" : 4.928784339950118E7
        }, {
          "mean" : 7.4813093E8,
          "variance" : 4.476712916515968E15,
          "n" : 2,
          "max" : 7.95442202E8,
          "min" : 7.00819658E8,
          "sum" : 1.49626186E9,
          "standardDeviation" : 6.6908242515522465E7
        }, {
          "mean" : 7.109521263333334E8,
          "variance" : 8.572813071504962E14,
          "n" : 3,
          "max" : 7.35085972E8,
          "min" : 6.7838034E8,
          "sum" : 2.132856379E9,
          "standardDeviation" : 2.927936657700259E7
        }, {
          "mean" : 7.49102436E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.49102436E8,
          "min" : 7.49102436E8,
          "sum" : 7.49102436E8,
          "standardDeviation" : 0.0
        } ],
        "16" : [ {
          "mean" : 8.16931249E8,
          "variance" : 1.60568948057045E15,
          "n" : 2,
          "max" : 8.45265764E8,
          "min" : 7.88596734E8,
          "sum" : 1.633862498E9,
          "standardDeviation" : 4.00710553962639E7
        }, {
          "mean" : 8.76043571E8,
          "variance" : 8.303962685313802E13,
          "n" : 2,
          "max" : 8.82487158E8,
          "min" : 8.69599984E8,
          "sum" : 1.752087142E9,
          "standardDeviation" : 9112608.125730965
        }, {
          "mean" : 9.348087435E8,
          "variance" : 1.6693265452021202E15,
          "n" : 2,
          "max" : 9.63699283E8,
          "min" : 9.05918204E8,
          "sum" : 1.869617487E9,
          "standardDeviation" : 4.0857392785175614E7
        }, {
          "mean" : 7.731936536666666E8,
          "variance" : 2.4975680567699855E15,
          "n" : 3,
          "max" : 8.23545993E8,
          "min" : 7.23603359E8,
          "sum" : 2.319580961E9,
          "standardDeviation" : 4.997567465047356E7
        }, {
          "mean" : 7.501021895E8,
          "variance" : 9.923663525074606E14,
          "n" : 2,
          "max" : 7.72377359E8,
          "min" : 7.2782702E8,
          "sum" : 1.500204379E9,
          "standardDeviation" : 3.1501846811059516E7
        }, {
          "mean" : 7.483035386666666E8,
          "variance" : 4.223100645036916E15,
          "n" : 3,
          "max" : 8.17630409E8,
          "min" : 6.88771661E8,
          "sum" : 2.244910616E9,
          "standardDeviation" : 6.498538793480359E7
        }, {
          "mean" : 7.21431395E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.21431395E8,
          "min" : 7.21431395E8,
          "sum" : 7.21431395E8,
          "standardDeviation" : 0.0
        } ],
        "17" : [ {
          "mean" : 8.70446047E8,
          "variance" : 7.4592406890125E14,
          "n" : 2,
          "max" : 8.89758272E8,
          "min" : 8.51133822E8,
          "sum" : 1.740892094E9,
          "standardDeviation" : 2.7311610514600746E7
        }, {
          "mean" : 8.88037248E8,
          "variance" : 2.9868296952301515E15,
          "n" : 2,
          "max" : 9.26681974E8,
          "min" : 8.49392522E8,
          "sum" : 1.776074496E9,
          "standardDeviation" : 5.4651895623392165E7
        }, {
          "mean" : 8.88150769E8,
          "variance" : 1.1824113146156822E15,
          "n" : 2,
          "max" : 9.1246549E8,
          "min" : 8.63836048E8,
          "sum" : 1.776301538E9,
          "standardDeviation" : 3.438620820351791E7
        }, {
          "mean" : 7.68323042E8,
          "variance" : 2.508355055510847E15,
          "n" : 3,
          "max" : 8.19016685E8,
          "min" : 7.18872881E8,
          "sum" : 2.304969126E9,
          "standardDeviation" : 5.008348086456099E7
        }, {
          "mean" : 7.258600745E8,
          "variance" : 4.687225346066004E15,
          "n" : 2,
          "max" : 7.74270948E8,
          "min" : 6.77449201E8,
          "sum" : 1.451720149E9,
          "standardDeviation" : 6.846331387002826E7
        }, {
          "mean" : 7.376087113333334E8,
          "variance" : 1.7922828044529434E14,
          "n" : 3,
          "max" : 7.50552018E8,
          "min" : 7.23817127E8,
          "sum" : 2.212826134E9,
          "standardDeviation" : 1.3387616682789149E7
        }, {
          "mean" : 7.27710729E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.27710729E8,
          "min" : 7.27710729E8,
          "sum" : 7.27710729E8,
          "standardDeviation" : 0.0
        } ],
        "18" : [ {
          "mean" : 9.18737864E8,
          "variance" : 7.494002504529033E15,
          "n" : 2,
          "max" : 9.79950618E8,
          "min" : 8.5752511E8,
          "sum" : 1.837475728E9,
          "standardDeviation" : 8.656790689700793E7
        }, {
          "mean" : 8.956965555E8,
          "variance" : 5.626913786957741E15,
          "n" : 2,
          "max" : 9.48738585E8,
          "min" : 8.42654526E8,
          "sum" : 1.791393111E9,
          "standardDeviation" : 7.50127574946938E7
        }, {
          "mean" : 8.63372501E8,
          "variance" : 6.773960633154723E15,
          "n" : 2,
          "max" : 9.2157027E8,
          "min" : 8.05174732E8,
          "sum" : 1.726745002E9,
          "standardDeviation" : 8.230407421965648E7
        }, {
          "mean" : 8.022643393333334E8,
          "variance" : 8.598804565375364E14,
          "n" : 3,
          "max" : 8.33071608E8,
          "min" : 7.74692525E8,
          "sum" : 2.406793018E9,
          "standardDeviation" : 2.9323718327277943E7
        }, {
          "mean" : 7.302495615E8,
          "variance" : 1.8118333848050003E11,
          "n" : 2,
          "max" : 7.30550546E8,
          "min" : 7.29948577E8,
          "sum" : 1.460499123E9,
          "standardDeviation" : 425656.36196408485
        }, {
          "mean" : 7.35709506E8,
          "variance" : 2.823565504039276E15,
          "n" : 3,
          "max" : 7.91362606E8,
          "min" : 6.85508532E8,
          "sum" : 2.207128518E9,
          "standardDeviation" : 5.3137232747286305E7
        }, {
          "mean" : 7.54721433E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.54721433E8,
          "min" : 7.54721433E8,
          "sum" : 7.54721433E8,
          "standardDeviation" : 0.0
        } ],
        "19" : [ {
          "mean" : 9.052748795E8,
          "variance" : 1.500491063478245E14,
          "n" : 2,
          "max" : 9.13936551E8,
          "min" : 8.96613208E8,
          "sum" : 1.810549759E9,
          "standardDeviation" : 1.224945330812051E7
        }, {
          "mean" : 8.874872635E8,
          "variance" : 1.0664784802494044E15,
          "n" : 2,
          "max" : 9.10579237E8,
          "min" : 8.6439529E8,
          "sum" : 1.774974527E9,
          "standardDeviation" : 3.2656982105660107E7
        }, {
          "mean" : 8.97965172E8,
          "variance" : 2.4255440916729796E16,
          "n" : 2,
          "max" : 1.008091102E9,
          "min" : 7.87839242E8,
          "sum" : 1.795930344E9,
          "standardDeviation" : 1.557415837749501E8
        }, {
          "mean" : 7.710048213333334E8,
          "variance" : 2.289967637602272E15,
          "n" : 3,
          "max" : 8.07050611E8,
          "min" : 7.16712195E8,
          "sum" : 2.313014464E9,
          "standardDeviation" : 4.7853606317625344E7
        }, {
          "mean" : 7.29139102E8,
          "variance" : 9.32402592946845E15,
          "n" : 2,
          "max" : 7.97418037E8,
          "min" : 6.60860167E8,
          "sum" : 1.458278204E9,
          "standardDeviation" : 9.6560995901391E7
        }, {
          "mean" : 7.369281216666666E8,
          "variance" : 9.879134412190031E13,
          "n" : 3,
          "max" : 7.44812372E8,
          "min" : 7.25763096E8,
          "sum" : 2.210784365E9,
          "standardDeviation" : 9939383.488018777
        }, {
          "mean" : 7.68122698E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.68122698E8,
          "min" : 7.68122698E8,
          "sum" : 7.68122698E8,
          "standardDeviation" : 0.0
        } ],
        "20" : [ {
          "mean" : 8.45303291E8,
          "variance" : 1.75376970218738E14,
          "n" : 2,
          "max" : 8.54667504E8,
          "min" : 8.35939078E8,
          "sum" : 1.690606582E9,
          "standardDeviation" : 1.3242997025550447E7
        }, {
          "mean" : 8.893247205E8,
          "variance" : 2.2968423614162645E15,
          "n" : 2,
          "max" : 9.23213084E8,
          "min" : 8.55436357E8,
          "sum" : 1.778649441E9,
          "standardDeviation" : 4.792538326832937E7
        }, {
          "mean" : 8.68002549E8,
          "variance" : 3.093807767657202E15,
          "n" : 2,
          "max" : 9.07333248E8,
          "min" : 8.2867185E8,
          "sum" : 1.736005098E9,
          "standardDeviation" : 5.562200794341393E7
        }, {
          "mean" : 7.72871873E8,
          "variance" : 1.8602426389220592E15,
          "n" : 3,
          "max" : 8.19286375E8,
          "min" : 7.34027706E8,
          "sum" : 2.318615619E9,
          "standardDeviation" : 4.313053024160565E7
        }, {
          "mean" : 7.265283625E8,
          "variance" : 8.3072183045E9,
          "n" : 2,
          "max" : 7.26592811E8,
          "min" : 7.26463914E8,
          "sum" : 1.453056725E9,
          "standardDeviation" : 91143.94277460242
        }, {
          "mean" : 7.37337623E8,
          "variance" : 4.731060619293919E15,
          "n" : 3,
          "max" : 7.98618606E8,
          "min" : 6.62941658E8,
          "sum" : 2.212012869E9,
          "standardDeviation" : 6.878270581544404E7
        }, {
          "mean" : 7.43439907E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.43439907E8,
          "min" : 7.43439907E8,
          "sum" : 7.43439907E8,
          "standardDeviation" : 0.0
        } ],
        "21" : [ {
          "mean" : 8.48730047E8,
          "variance" : 4.427303372583201E13,
          "n" : 2,
          "max" : 8.53434993E8,
          "min" : 8.44025101E8,
          "sum" : 1.697460094E9,
          "standardDeviation" : 6653798.4434330445
        }, {
          "mean" : 8.6745788E8,
          "variance" : 5.659203271999999E13,
          "n" : 2,
          "max" : 8.7277728E8,
          "min" : 8.6213848E8,
          "sum" : 1.73491576E9,
          "standardDeviation" : 7522767.623687441
        }, {
          "mean" : 8.860543175E8,
          "variance" : 2.0165685933805916E16,
          "n" : 2,
          "max" : 9.86467678E8,
          "min" : 7.85640957E8,
          "sum" : 1.772108635E9,
          "standardDeviation" : 1.4200593626255882E8
        }, {
          "mean" : 7.691887033333334E8,
          "variance" : 1.5210613144682012E15,
          "n" : 3,
          "max" : 8.03999938E8,
          "min" : 7.27040516E8,
          "sum" : 2.30756611E9,
          "standardDeviation" : 3.900078607500368E7
        }, {
          "mean" : 7.183985325E8,
          "variance" : 2.71246690611125E13,
          "n" : 2,
          "max" : 7.2208124E8,
          "min" : 7.14715825E8,
          "sum" : 1.436797065E9,
          "standardDeviation" : 5208134.892753115
        }, {
          "mean" : 7.842311263333334E8,
          "variance" : 2.32800694568165E15,
          "n" : 3,
          "max" : 8.24621253E8,
          "min" : 7.30802267E8,
          "sum" : 2.352693379E9,
          "standardDeviation" : 4.82494243041474E7
        }, {
          "mean" : 6.80278811E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 6.80278811E8,
          "min" : 6.80278811E8,
          "sum" : 6.80278811E8,
          "standardDeviation" : 0.0
        } ],
        "22" : [ {
          "mean" : 8.888793985E8,
          "variance" : 3.4759591993836125E15,
          "n" : 2,
          "max" : 9.30568481E8,
          "min" : 8.47190316E8,
          "sum" : 1.777758797E9,
          "standardDeviation" : 5.8957265874390855E7
        }, {
          "mean" : 9.04107211E8,
          "variance" : 1.7430603609122002E15,
          "n" : 2,
          "max" : 9.33628901E8,
          "min" : 8.74585521E8,
          "sum" : 1.808214422E9,
          "standardDeviation" : 4.174997438217418E7
        }, {
          "mean" : 8.36253044E8,
          "variance" : 1.3733697402670802E16,
          "n" : 2,
          "max" : 9.19119495E8,
          "min" : 7.53386593E8,
          "sum" : 1.672506088E9,
          "standardDeviation" : 1.1719085886992553E8
        }, {
          "mean" : 7.879805716666666E8,
          "variance" : 1.6341506798978302E15,
          "n" : 3,
          "max" : 8.31780798E8,
          "min" : 7.52105273E8,
          "sum" : 2.363941715E9,
          "standardDeviation" : 4.042462961979776E7
        }, {
          "mean" : 7.35162808E8,
          "variance" : 1.1989737883037042E16,
          "n" : 2,
          "max" : 8.12589347E8,
          "min" : 6.57736269E8,
          "sum" : 1.470325616E9,
          "standardDeviation" : 1.0949766154140937E8
        }, {
          "mean" : 7.61794094E8,
          "variance" : 1.5764101828871697E14,
          "n" : 3,
          "max" : 7.76288682E8,
          "min" : 7.54279953E8,
          "sum" : 2.285382282E9,
          "standardDeviation" : 1.2555517444084771E7
        }, {
          "mean" : 8.04943336E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.04943336E8,
          "min" : 8.04943336E8,
          "sum" : 8.04943336E8,
          "standardDeviation" : 0.0
        } ],
        "23" : [ {
          "mean" : 8.119767935E8,
          "variance" : 2.835815898498084E15,
          "n" : 2,
          "max" : 8.49631912E8,
          "min" : 7.74321675E8,
          "sum" : 1.623953587E9,
          "standardDeviation" : 5.325237927546603E7
        }, {
          "mean" : 8.607579175E8,
          "variance" : 6.621738021892844E14,
          "n" : 2,
          "max" : 8.78953711E8,
          "min" : 8.42562124E8,
          "sum" : 1.721515835E9,
          "standardDeviation" : 2.5732737945840206E7
        }, {
          "mean" : 9.036503825E8,
          "variance" : 2.3601586030834053E14,
          "n" : 2,
          "max" : 9.14513528E8,
          "min" : 8.92787237E8,
          "sum" : 1.807300765E9,
          "standardDeviation" : 1.5362807696132258E7
        }, {
          "mean" : 7.361303283333334E8,
          "variance" : 8.976520604367861E14,
          "n" : 3,
          "max" : 7.70721719E8,
          "min" : 7.18356272E8,
          "sum" : 2.208390985E9,
          "standardDeviation" : 2.9960842118284762E7
        }, {
          "mean" : 7.367225085E8,
          "variance" : 1.857915140835605E14,
          "n" : 2,
          "max" : 7.46360753E8,
          "min" : 7.27084264E8,
          "sum" : 1.473445017E9,
          "standardDeviation" : 1.363053608936789E7
        }, {
          "mean" : 7.515778096666666E8,
          "variance" : 1.4463188175649378E15,
          "n" : 3,
          "max" : 7.94902671E8,
          "min" : 7.23707633E8,
          "sum" : 2.254733429E9,
          "standardDeviation" : 3.803049851849089E7
        }, {
          "mean" : 7.20978409E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.20978409E8,
          "min" : 7.20978409E8,
          "sum" : 7.20978409E8,
          "standardDeviation" : 0.0
        } ],
        "24" : [ {
          "mean" : 8.870946835E8,
          "variance" : 3.9352512867588045E15,
          "n" : 2,
          "max" : 9.3145261E8,
          "min" : 8.42736757E8,
          "sum" : 1.774189367E9,
          "standardDeviation" : 6.2731581255048916E7
        }, {
          "mean" : 9.038182645E8,
          "variance" : 5.1738995116001256E14,
          "n" : 2,
          "max" : 9.19902262E8,
          "min" : 8.87734267E8,
          "sum" : 1.807636529E9,
          "standardDeviation" : 2.2746207401674956E7
        }, {
          "mean" : 8.31936445E8,
          "variance" : 2.38602250920005E15,
          "n" : 2,
          "max" : 8.6647644E8,
          "min" : 7.9739645E8,
          "sum" : 1.66387289E9,
          "standardDeviation" : 4.884692937329889E7
        }, {
          "mean" : 7.972545175E8,
          "variance" : 4.050155251487813E15,
          "n" : 2,
          "max" : 8.4225538E8,
          "min" : 7.52253655E8,
          "sum" : 1.594509035E9,
          "standardDeviation" : 6.364083006598683E7
        }, {
          "mean" : 7.644262143333334E8,
          "variance" : 1.2247570688639436E14,
          "n" : 3,
          "max" : 7.75658206E8,
          "min" : 7.535322E8,
          "sum" : 2.293278643E9,
          "standardDeviation" : 1.10668743051683E7
        }, {
          "mean" : 8.16117094E8,
          "variance" : 5.646496195977033E15,
          "n" : 2,
          "max" : 8.6925134E8,
          "min" : 7.62982848E8,
          "sum" : 1.632234188E9,
          "standardDeviation" : 7.514317131966838E7
        }, {
          "mean" : 7.677818735E8,
          "variance" : 4.598479978600501E12,
          "n" : 2,
          "max" : 7.69298198E8,
          "min" : 7.66265549E8,
          "sum" : 1.535563747E9,
          "standardDeviation" : 2144406.6728586024
        } ],
        "25" : [ {
          "mean" : 8.61703198E8,
          "variance" : 1.797161679780488E15,
          "n" : 2,
          "max" : 8.91679536E8,
          "min" : 8.3172686E8,
          "sum" : 1.723406396E9,
          "standardDeviation" : 4.239294374987998E7
        }, {
          "mean" : 8.48596849E8,
          "variance" : 1.369762813636769E16,
          "n" : 2,
          "max" : 9.31354411E8,
          "min" : 7.65839287E8,
          "sum" : 1.697193698E9,
          "standardDeviation" : 1.1703686656933229E8
        }, {
          "mean" : 8.72760124E8,
          "variance" : 4.4145006971853785E15,
          "n" : 2,
          "max" : 9.19741507E8,
          "min" : 8.25778741E8,
          "sum" : 1.745520248E9,
          "standardDeviation" : 6.644170901764477E7
        }, {
          "mean" : 7.625064876666666E8,
          "variance" : 4.842623068447464E14,
          "n" : 3,
          "max" : 7.75851577E8,
          "min" : 7.37107124E8,
          "sum" : 2.287519463E9,
          "standardDeviation" : 2.2005960711696874E7
        }, {
          "mean" : 7.612793325E8,
          "variance" : 1.9031408928475205E15,
          "n" : 2,
          "max" : 7.92126868E8,
          "min" : 7.30431797E8,
          "sum" : 1.522558665E9,
          "standardDeviation" : 4.3625003069885515E7
        }, {
          "mean" : 6.804912126666666E8,
          "variance" : 6.767846816376861E14,
          "n" : 3,
          "max" : 7.10515769E8,
          "min" : 6.64654802E8,
          "sum" : 2.041473638E9,
          "standardDeviation" : 2.6015085655013442E7
        }, {
          "mean" : 7.43321842E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.43321842E8,
          "min" : 7.43321842E8,
          "sum" : 7.43321842E8,
          "standardDeviation" : 0.0
        } ],
        "26" : [ {
          "mean" : 8.29581911E8,
          "variance" : 1.44850072322E13,
          "n" : 2,
          "max" : 8.32273101E8,
          "min" : 8.26890721E8,
          "sum" : 1.659163822E9,
          "standardDeviation" : 3805917.3969228496
        }, {
          "mean" : 8.63828543E8,
          "variance" : 1.73997087889202E14,
          "n" : 2,
          "max" : 8.73155844E8,
          "min" : 8.54501242E8,
          "sum" : 1.727657086E9,
          "standardDeviation" : 1.3190795574536132E7
        }, {
          "mean" : 8.551732295E8,
          "variance" : 3.418693328348045E14,
          "n" : 2,
          "max" : 8.68247428E8,
          "min" : 8.42099031E8,
          "sum" : 1.710346459E9,
          "standardDeviation" : 1.8489708835857976E7
        }, {
          "mean" : 7.05173821E8,
          "variance" : 1.75114354945593E14,
          "n" : 3,
          "max" : 7.16669597E8,
          "min" : 6.90708152E8,
          "sum" : 2.115521463E9,
          "standardDeviation" : 1.3233078060133742E7
        }, {
          "mean" : 7.45402319E8,
          "variance" : 5.9624488566962E13,
          "n" : 2,
          "max" : 7.50862378E8,
          "min" : 7.3994226E8,
          "sum" : 1.490804638E9,
          "standardDeviation" : 7721689.489157279
        }, {
          "mean" : 7.33879957E8,
          "variance" : 3.7078875912475294E14,
          "n" : 3,
          "max" : 7.49116166E8,
          "min" : 7.12237509E8,
          "sum" : 2.201639871E9,
          "standardDeviation" : 1.925587596357935E7
        }, {
          "mean" : 7.29384668E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 7.29384668E8,
          "min" : 7.29384668E8,
          "sum" : 7.29384668E8,
          "standardDeviation" : 0.0
        } ],
        "27" : [ {
          "mean" : 8.976219925E8,
          "variance" : 6.955167942957785E15,
          "n" : 2,
          "max" : 9.56593036E8,
          "min" : 8.38650949E8,
          "sum" : 1.795243985E9,
          "standardDeviation" : 8.339764950499375E7
        }, {
          "mean" : 8.99528248E8,
          "variance" : 2.311397831214368E15,
          "n" : 2,
          "max" : 9.3352382E8,
          "min" : 8.65532676E8,
          "sum" : 1.799056496E9,
          "standardDeviation" : 4.807699898303104E7
        }, {
          "mean" : 8.53717429E8,
          "variance" : 3.4997869349319675E15,
          "n" : 2,
          "max" : 8.95549157E8,
          "min" : 8.11885701E8,
          "sum" : 1.707434858E9,
          "standardDeviation" : 5.9158997075102344E7
        }, {
          "mean" : 7.86509992E8,
          "variance" : 1.529587733341773E15,
          "n" : 3,
          "max" : 8.11113509E8,
          "min" : 7.41412076E8,
          "sum" : 2.359529976E9,
          "standardDeviation" : 3.910994417461847E7
        }, {
          "mean" : 7.182836035E8,
          "variance" : 1.4785802908039808E15,
          "n" : 2,
          "max" : 7.45473494E8,
          "min" : 6.91093713E8,
          "sum" : 1.436567207E9,
          "standardDeviation" : 3.845231190453938E7
        }, {
          "mean" : 7.378531006666666E8,
          "variance" : 4.3239189277508655E15,
          "n" : 3,
          "max" : 7.98637497E8,
          "min" : 6.68054535E8,
          "sum" : 2.213559302E9,
          "standardDeviation" : 6.5756512436038345E7
        }, {
          "mean" : 8.15020612E8,
          "variance" : 0.0,
          "n" : 1,
          "max" : 8.15020612E8,
          "min" : 8.15020612E8,
          "sum" : 8.15020612E8,
          "standardDeviation" : 0.0
        } ],
        "28" : [ {
          "mean" : 8.7970017E8,
          "variance" : 3.0494926080000006E11,
          "n" : 2,
          "max" : 8.8009065E8,
          "min" : 8.7930969E8,
          "sum" : 1.75940034E9,
          "standardDeviation" : 552222.1118354462
        }, {
          "mean" : 9.020103685E8,
          "variance" : 2.0864485081445E12,
          "n" : 2,
          "max" : 9.03031752E8,
          "min" : 9.00988985E8,
          "sum" : 1.804020737E9,
          "standardDeviation" : 1444454.3980841
        }, {
          "mean" : 9.46822442E8,
          "variance" : 6.847643682890977E15,
          "n" : 2,
          "max" : 1.005335875E9,
          "min" : 8.88309009E8,
          "sum" : 1.893644884E9,
          "standardDeviation" : 8.275049052960941E7
        }, {
          "mean" : 7.86685108E8,
          "variance" : 3.8017319991241685E15,
          "n" : 2,
          "max" : 8.3028403E8,
          "min" : 7.43086186E8,
          "sum" : 1.573370216E9,
          "standardDeviation" : 6.165818679724671E7
        }, {
          "mean" : 7.488550776666666E8,
          "variance" : 7.535028996241324E14,
          "n" : 3,
          "max" : 7.78072984E8,
          "min" : 7.23604773E8,
          "sum" : 2.246565233E9,
          "standardDeviation" : 2.745000727912713E7
        }, {
          "mean" : 7.680367315E8,
          "variance" : 3.127689828565245E14,
          "n" : 2,
          "max" : 7.8054211E8,
          "min" : 7.55531353E8,
          "sum" : 1.536073463E9,
          "standardDeviation" : 1.7685275877308913E7
        }, {
          "mean" : 7.764273885E8,
          "variance" : 9.193276897035125E14,
          "n" : 2,
          "max" : 7.97867161E8,
          "min" : 7.54987616E8,
          "sum" : 1.552854777E9,
          "standardDeviation" : 3.0320417043693718E7
        } ],
        "29" : [ {
          "mean" : 8.744440045E8,
          "variance" : 1.3657735621410125E15,
          "n" : 2,
          "max" : 9.00576107E8,
          "min" : 8.48311902E8,
          "sum" : 1.748888009E9,
          "standardDeviation" : 3.695637376882386E7
        }, {
          "mean" : 9.175122515E8,
          "variance" : 4.6036763107062E15,
          "n" : 2,
          "max" : 9.65489727E8,
          "min" : 8.69534776E8,
          "sum" : 1.835024503E9,
          "standardDeviation" : 6.785039654052289E7
        }, {
          "mean" : 8.91328681E8,
          "variance" : 4.3766357557832E15,
          "n" : 2,
          "max" : 9.38108141E8,
          "min" : 8.44549221E8,
          "sum" : 1.782657362E9,
          "standardDeviation" : 6.6156146772489704E7
        }, {
          "mean" : 8.2401581E8,
          "variance" : 5.653957695177681E14,
          "n" : 2,
          "max" : 8.40829432E8,
          "min" : 8.07202188E8,
          "sum" : 1.64803162E9,
          "standardDeviation" : 2.3778052265014645E7
        }, {
          "mean" : 7.863620236666666E8,
          "variance" : 2.3023574370891205E15,
          "n" : 3,
          "max" : 8.4176721E8,
          "min" : 7.58421875E8,
          "sum" : 2.359086071E9,
          "standardDeviation" : 4.7982886919078976E7
        }, {
          "mean" : 7.28728668E8,
          "variance" : 1.842198018499538E15,
          "n" : 2,
          "max" : 7.59078281E8,
          "min" : 6.98379055E8,
          "sum" : 1.457457336E9,
          "standardDeviation" : 4.2920834317374796E7
        }, {
          "mean" : 7.56685097E8,
          "variance" : 2.3680714248648004E13,
          "n" : 2,
          "max" : 7.60126079E8,
          "min" : 7.53244115E8,
          "sum" : 1.513370194E9,
          "standardDeviation" : 4866283.412281698
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
