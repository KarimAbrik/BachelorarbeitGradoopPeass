if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 645eb1baa10fae290a3889480fec4febe1411921 -test org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest\")'>645eb1baa10fae290a3889480fec4febe1411921</a><br>Test Case: org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.AbstractGraph.<init>_Graph_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment":
 `/**
 * Creates a new graph instance.
 *
 * @param graph               Gelly graph
 * @param vertexDataFactory   vertex data factory
 * @param edgeDataFactory     edge data factory
 * @param graphDataFactory    graph data factory
 * @param env                 Flink execution environment
 */
protected AbstractGraph(Graph<Long, VD, ED> graph, VertexDataFactory<VD> vertexDataFactory, EdgeDataFactory<ED> edgeDataFactory, GraphDataFactory<GD> graphDataFactory, ExecutionEnvironment env) {
    this.vertexDataFactory = vertexDataFactory;
    this.edgeDataFactory = edgeDataFactory;
    this.graphDataFactory = graphDataFactory;
    this.env = env;
    this.graph = graph;
}`,"org.gradoop.model.impl.operators.Projection.execute_LogicalGraph":
 `/**
 * {@inheritDoc}
 */
@Override
public LogicalGraph<VD, ED, GD> execute(LogicalGraph<VD, ED, GD> graph) {
    DataSet<Vertex<Long, VD>> vertices = graph.getVertices();
    vertices = vertices.map(new ProjectionVerticesMapper<>(getVertexFunc()));
    DataSet<Edge<Long, ED>> edges = graph.getEdges();
    edges = edges.map(new ProjectionEdgesMapper<>(getEdgeFunc()));
    return LogicalGraph.fromDataSets(vertices, edges, graph.getGraphDataFactory().createGraphData(graph.getId(), graph.getLabel(), graph.getProperties()), graph.getVertexDataFactory(), graph.getEdgeDataFactory(), graph.getGraphDataFactory());
}`,"org.gradoop.model.impl.operators.Projection.<init>_UnaryFunction_UnaryFunction":
 `/**
 * Creates new projection.
 *
 * @param vertexFunc vertex projection function
 * @param edgeFunc   edge projection function
 */
public Projection(UnaryFunction<VD, VD> vertexFunc, UnaryFunction<ED, ED> edgeFunc) {
    this.vertexFunc = vertexFunc;
    this.edgeFunc = edgeFunc;
}`,"org.gradoop.model.impl.operators.Projection$ProjectionVerticesMapper.<init>_UnaryFunction":
 `/**
 * create a new ProjectVerticesMapper
 *
 * @param vertexFunc the vertex projection function
 */
public ProjectionVerticesMapper(UnaryFunction<VD, VD> vertexFunc) {
    this.vertexFunc = vertexFunc;
}`,"org.gradoop.model.impl.DefaultVertexData.toString_":
 `@Override
public String toString() {
    return "DefaultVertexData{" + super.toString() + '}';
}`,"org.gradoop.model.impl.DefaultEPGMElementFactory.checkId_Long":
 `/**
 * Checks if the given identifier is valid.
 *
 * @param id identifier
 */
protected void checkId(final Long id) {
    if (id == null) {
        throw new IllegalArgumentException("id must not be null");
    }
}`,"org.gradoop.model.impl.LogicalGraph.<init>_Graph_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment":
 `/**
 * Creates a new logical graph based on the given parameters.
 *
 * @param graph             flink gelly graph holding vertex and edge set
 * @param graphData         graph data associated with that logical graph
 * @param vertexDataFactory used to create vertex data
 * @param edgeDataFactory   used to create edge data
 * @param graphDataFactory  used to create graph data
 * @param env               Flink execution environment
 */
private LogicalGraph(Graph<Long, VD, ED> graph, GD graphData, VertexDataFactory<VD> vertexDataFactory, EdgeDataFactory<ED> edgeDataFactory, GraphDataFactory<GD> graphDataFactory, ExecutionEnvironment env) {
    super(graph, vertexDataFactory, edgeDataFactory, graphDataFactory, env);
    this.graphData = graphData;
}`,"org.gradoop.model.helper.KeySelectors$GraphKeySelector.<init>_":
 ``,"org.gradoop.model.impl.DefaultElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultElement() {
}`,"org.gradoop.model.impl.DefaultEdgeData.toString_":
 `/**
 * {@inheritDoc}
 */
@Override
public String toString() {
    return "DefaultEdgeData{" + super.toString() + ", sourceVertexId=" + sourceVertexId + ", targetVertexId=" + targetVertexId + '}';
}`,"org.gradoop.model.impl.LogicalGraph.getId_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getId() {
    return graphData.getId();
}`,"org.gradoop.model.impl.DefaultElement.toString_":
 `@Override
public String toString() {
    return "EPGMElement{" + "id=" + id + ", label='" + label + '\'' + ", properties=" + properties + '}';
}`,"org.gradoop.model.impl.AbstractGraph.getGraphDataFactory_":
 `/**
 * Returns the graph data factory.
 *
 * @return graph data factory
 */
public GraphDataFactory<GD> getGraphDataFactory() {
    return graphDataFactory;
}`,"org.gradoop.model.impl.GraphCollection$EdgeInGraphFilter.<init>_long":
 `/**
 * Creates a filter
 *
 * @param graphId graphId for containment check
 */
public EdgeInGraphFilter(long graphId) {
    this.graphId = graphId;
}`,"org.gradoop.model.impl.EPGMDatabase.getGraph_Long":
 `/**
 * Returns a logical graph by its identifier.
 *
 * @param graphID graph identifier
 * @return logical graph or {@code null} if graph does not exist
 * @throws Exception
 */
public LogicalGraph<VD, ED, GD> getGraph(Long graphID) throws Exception {
    return database.getGraph(graphID);
}`,"org.gradoop.model.impl.LogicalGraph.fromDataSets_DataSet_DataSet_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory":
 `/**
 * Creates a logical graph from the given arguments.
 *
 * @param vertices          Vertex DataSet
 * @param edges             Edge DataSet
 * @param graphData         graph data associated with the logical graph
 * @param vertexDataFactory vertex data factory
 * @param edgeDataFactory   edge data factory
 * @param graphDataFactory  graph data factory
 * @param <VD>              vertex data type
 * @param <ED>              edge data type
 * @param <GD>              graph data type
 * @return logical graph
 */
public static <VD extends VertexData, ED extends EdgeData, GD extends GraphData> LogicalGraph<VD, ED, GD> fromDataSets(DataSet<Vertex<Long, VD>> vertices, DataSet<Edge<Long, ED>> edges, GD graphData, VertexDataFactory<VD> vertexDataFactory, EdgeDataFactory<ED> edgeDataFactory, GraphDataFactory<GD> graphDataFactory) {
    Graph<Long, VD, ED> gellyGraph = Graph.fromDataSet(vertices, edges, vertices.getExecutionEnvironment());
    return fromGellyGraph(gellyGraph, graphData, vertexDataFactory, edgeDataFactory, graphDataFactory);
}`,"org.gradoop.model.impl.AbstractGraph.getVertexDataFactory_":
 `/**
 * Returns the vertex data factory.
 *
 * @return vertex data factory
 */
public VertexDataFactory<VD> getVertexDataFactory() {
    return vertexDataFactory;
}`,"org.gradoop.model.impl.DefaultGraphData.<init>_":
 `/**
 * Default constructor.
 */
public DefaultGraphData() {
}`,"org.gradoop.model.impl.DefaultGraphElement.toString_":
 `/**
 * {@inheritDoc}
 */
@Override
public String toString() {
    return "EPGMGraphElement{" + super.toString() + ", graphs=" + graphs + '}';
}`,"org.gradoop.model.impl.AbstractGraph.getEdgeCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public long getEdgeCount() throws Exception {
    return this.graph.numberOfEdges();
}`,"org.gradoop.model.impl.GraphCollection$VertexInGraphFilter.<init>_long":
 `/**
 * Creates a filter
 *
 * @param graphId graphId for containment check
 */
public VertexInGraphFilter(long graphId) {
    this.graphId = graphId;
}`,"org.gradoop.model.impl.DefaultEPGMElementFactory.checkLabel_String":
 `/**
 * Checks if {@code label} is valid (not null or empty).
 *
 * @param label edge label
 */
protected void checkLabel(String label) {
    if (label == null || "".equals(label)) {
        throw new IllegalArgumentException("label must not be null or empty");
    }
}`,"org.gradoop.model.impl.LogicalGraphProjectionTest$EdgePropertyProjectionFunction.<init>_":
 ``,"org.gradoop.model.impl.DefaultEdgeData.<init>_":
 `/**
 * Default constructor is necessary to apply to POJO rules.
 */
public DefaultEdgeData() {
}`,"org.gradoop.model.impl.AbstractGraph.getEdges_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<Edge<Long, ED>> getEdges() {
    return graph.getEdges();
}`,"org.gradoop.model.impl.operators.Projection$ProjectionEdgesMapper.<init>_UnaryFunction":
 `/**
 * Create a new ProjectEdgesMapper
 *
 * @param edgeFunc the edge projection function
 */
public ProjectionEdgesMapper(UnaryFunction<ED, ED> edgeFunc) {
    this.edgeFunc = edgeFunc;
}`,"org.gradoop.model.impl.AbstractGraph.getExecutionEnvironment_":
 `/**
 * Returns the Flink execution environment associated with that graph.
 *
 * @return Flink execution environment
 */
public ExecutionEnvironment getExecutionEnvironment() {
    return this.env;
}`,"org.gradoop.model.impl.LogicalGraph.getProperties_":
 `/**
 * {@inheritDoc}
 */
@Override
public Map<String, Object> getProperties() {
    return graphData.getProperties();
}`,"org.gradoop.model.impl.DefaultVertexData.<init>_":
 `/**
 * Default constructor.
 */
public DefaultVertexData() {
}`,"org.gradoop.model.impl.DefaultGraphData.toString_":
 `@Override
public String toString() {
    return "DefaultGraphData{" + super.toString() + '}';
}`,"org.gradoop.model.impl.DefaultGraphElement.<init>_":
 `/**
 * Default constructor.
 */
protected DefaultGraphElement() {
}`,"org.gradoop.model.impl.DefaultElement.getProperties_":
 `/**
 * {@inheritDoc}
 */
@Override
public Map<String, Object> getProperties() {
    return properties;
}`,"org.gradoop.model.impl.LogicalGraph.project_UnaryFunction_UnaryFunction":
 `/**
 * {@inheritDoc}
 */
@Override
public LogicalGraph<VD, ED, GD> project(UnaryFunction<VD, VD> vertexFunction, UnaryFunction<ED, ED> edgeFunction) throws Exception {
    return callForGraph(new Projection<VD, ED, GD>(vertexFunction, edgeFunction));
}`,"org.gradoop.model.impl.DefaultElement.getId_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getId() {
    return id;
}`,"org.gradoop.model.impl.AbstractGraph.getVertexCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public long getVertexCount() throws Exception {
    return this.graph.numberOfVertices();
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
}`,"org.gradoop.model.impl.LogicalGraph.fromGellyGraph_Graph_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory":
 `/**
 * Creates a logical graph from the given arguments.
 *
 * @param graph             Flink Gelly graph
 * @param graphData         graph data associated with the logical graph
 * @param vertexDataFactory vertex data factory
 * @param edgeDataFactory   edge data factory
 * @param graphDataFactory  graph data factory
 * @param <VD>              vertex data type
 * @param <ED>              edge data type
 * @param <GD>              graph data type
 * @return logical graph
 */
public static <VD extends VertexData, ED extends EdgeData, GD extends GraphData> LogicalGraph<VD, ED, GD> fromGellyGraph(Graph<Long, VD, ED> graph, GD graphData, VertexDataFactory<VD> vertexDataFactory, EdgeDataFactory<ED> edgeDataFactory, GraphDataFactory<GD> graphDataFactory) {
    return new LogicalGraph<>(graph, graphData, vertexDataFactory, edgeDataFactory, graphDataFactory, graph.getContext());
}`,"org.gradoop.model.impl.operators.Projection.getEdgeFunc_":
 `/**
 * Unary function to apply the projection on the edges
 *
 * @return unary vertex to vertex function
 */
protected UnaryFunction<ED, ED> getEdgeFunc() {
    return this.edgeFunc;
}`,"org.gradoop.model.impl.LogicalGraph.getLabel_":
 `/**
 * {@inheritDoc}
 */
@Override
public String getLabel() {
    return graphData.getLabel();
}`,"org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData_Long_String_Map":
 `/**
 * {@inheritDoc}
 */
@Override
public DefaultGraphData createGraphData(final Long id, final String label, Map<String, Object> properties) {
    checkId(id);
    checkLabel(label);
    return new DefaultGraphData(id, label, properties);
}`,"org.gradoop.model.impl.DefaultGraphData.<init>_Long_String_Map":
 `/**
 * Creates a graph based on the given parameters.
 *
 * @param id         graph identifier
 * @param label      labels of that graph
 * @param properties key-value-map
 */
DefaultGraphData(final Long id, final String label, final Map<String, Object> properties) {
    super(id, label, properties);
}`,"org.gradoop.model.impl.DefaultElement.<init>_Long_String_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param id         entity identifier
 * @param label      label
 * @param properties key-value properties
 */
protected DefaultElement(Long id, String label, Map<String, Object> properties) {
    this.id = id;
    this.label = label;
    this.properties = properties;
}`,"org.gradoop.model.impl.GraphCollection.getGraph_Long":
 `/**
 * {@inheritDoc}
 */
@SuppressWarnings("unchecked")
@Override
public LogicalGraph<VD, ED, GD> getGraph(final Long graphID) throws Exception {
    // filter vertices and edges based on given graph id
    Graph<Long, VD, ED> subGraph = getGellyGraph().subgraph(new VertexInGraphFilter<VD>(graphID), new EdgeInGraphFilter<ED>(graphID));
    DataSet<Tuple1<Long>> graphIDDataSet = getExecutionEnvironment().fromCollection(Lists.newArrayList(new Tuple1<>(graphID)));
    // get graph data based on graph id
    List<GD> graphData = this.subgraphs.joinWithTiny(graphIDDataSet).where(new KeySelectors.GraphKeySelector<GD>()).equalTo(0).with(new JoinFunction<Subgraph<Long, GD>, Tuple1<Long>, GD>() {

        @Override
        public GD join(Subgraph<Long, GD> g, Tuple1<Long> gID) throws Exception {
            return g.getValue();
        }
    }).first(1).collect();
    return (graphData.size() > 0) ? LogicalGraph.fromGellyGraph(subGraph, graphData.get(0), getVertexDataFactory(), getEdgeDataFactory(), getGraphDataFactory()) : null;
}`,"org.gradoop.model.FlinkTestBase.getGraphStore_":
 `protected EPGMDatabase<DefaultVertexData, DefaultEdgeData, DefaultGraphData> getGraphStore() {
    return graphStore;
}`,"org.gradoop.model.impl.LogicalGraphProjectionTest$VertexLabelProjectionFunction.<init>_":
 ``,"org.gradoop.model.impl.LogicalGraph.callForGraph_UnaryGraphToGraphOperator":
 `/**
 * {@inheritDoc}
 */
@Override
public LogicalGraph<VD, ED, GD> callForGraph(UnaryGraphToGraphOperator<VD, ED, GD> operator) throws Exception {
    return operator.execute(this);
}`,"org.gradoop.model.impl.operators.Projection.getVertexFunc_":
 `/**
 * Unary function to apply the projection on the vertices
 *
 * @return unary vertex to vertex function
 */
protected UnaryFunction<VD, VD> getVertexFunc() {
    return this.vertexFunc;
}`,"org.gradoop.model.impl.DefaultElement.getLabel_":
 `/**
 * {@inheritDoc}
 */
@Override
public String getLabel() {
    return label;
}`,"org.gradoop.model.impl.AbstractGraph.getVertices_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<Vertex<Long, VD>> getVertices() {
    return graph.getVertices();
}`,"org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory_":
 `/**
 * Returns the edge data factory.
 *
 * @return edge data factory
 */
public EdgeDataFactory<ED> getEdgeDataFactory() {
    return edgeDataFactory;
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-flink",
  "name" : "impl.LogicalGraphProjectionTest#projectionTest",
  "key" : "org.gradoop.model.impl.LogicalGraphProjectionTest.projectionTest_",
  "otherKey" : null,
  "parent" : null,
  "color" : "#FFF",
  "statistic" : null,
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "children" : [ {
    "call" : "org.gradoop.model.FlinkTestBase#getGraphStore",
    "kiekerPattern" : "protected org.gradoop.model.impl.EPGMDatabase org.gradoop.model.FlinkTestBase.getGraphStore()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "FlinkTestBase#getGraphStore",
    "key" : "org.gradoop.model.FlinkTestBase.getGraphStore_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.EPGMDatabase#getGraph",
    "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.EPGMDatabase.getGraph(java.lang.Long)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.EPGMDatabase#getGraph",
    "key" : "org.gradoop.model.impl.EPGMDatabase.getGraph_Long",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.GraphCollection#getGraph",
      "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.GraphCollection.getGraph(java.lang.Long)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.GraphCollection#getGraph",
      "key" : "org.gradoop.model.impl.GraphCollection.getGraph_Long",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.EPGMDatabase#getGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.AbstractGraph#getGellyGraph",
        "kiekerPattern" : "protected org.apache.flink.graph.Graph org.gradoop.model.impl.AbstractGraph.getGellyGraph()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#getGellyGraph",
        "key" : "org.gradoop.model.impl.AbstractGraph.getGellyGraph_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.GraphCollection$VertexInGraphFilter#<init>",
        "kiekerPattern" : "public new org.gradoop.model.impl.GraphCollection$VertexInGraphFilter.<init>(long)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.GraphCollection$VertexInGraphFilter#<init>",
        "key" : "org.gradoop.model.impl.GraphCollection$VertexInGraphFilter.<init>_long",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.GraphCollection$EdgeInGraphFilter#<init>",
        "kiekerPattern" : "public new org.gradoop.model.impl.GraphCollection$EdgeInGraphFilter.<init>(long)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.GraphCollection$EdgeInGraphFilter#<init>",
        "key" : "org.gradoop.model.impl.GraphCollection$EdgeInGraphFilter.<init>_long",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.AbstractGraph#getExecutionEnvironment",
        "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.model.impl.AbstractGraph.getExecutionEnvironment()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#getExecutionEnvironment",
        "key" : "org.gradoop.model.impl.AbstractGraph.getExecutionEnvironment_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.helper.KeySelectors$GraphKeySelector#<init>",
        "kiekerPattern" : "public new org.gradoop.model.helper.KeySelectors$GraphKeySelector.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "helper.KeySelectors$GraphKeySelector#<init>",
        "key" : "org.gradoop.model.helper.KeySelectors$GraphKeySelector.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.DefaultGraphData#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultGraphData.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultGraphData#toString",
        "key" : "org.gradoop.model.impl.DefaultGraphData.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.DefaultElement#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "impl.DefaultElement#toString",
          "key" : "org.gradoop.model.impl.DefaultElement.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.DefaultGraphData#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      }, {
        "call" : "org.gradoop.model.impl.DefaultElement#<init>",
        "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultElement.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultElement#<init>",
        "key" : "org.gradoop.model.impl.DefaultElement.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.DefaultGraphData#<init>",
        "kiekerPattern" : "public new org.gradoop.model.impl.DefaultGraphData.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultGraphData#<init>",
        "key" : "org.gradoop.model.impl.DefaultGraphData.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.AbstractGraph#getVertexDataFactory",
        "kiekerPattern" : "public org.gradoop.model.VertexDataFactory org.gradoop.model.impl.AbstractGraph.getVertexDataFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#getVertexDataFactory",
        "key" : "org.gradoop.model.impl.AbstractGraph.getVertexDataFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.AbstractGraph#getEdgeDataFactory",
        "kiekerPattern" : "public org.gradoop.model.EdgeDataFactory org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#getEdgeDataFactory",
        "key" : "org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.AbstractGraph#getGraphDataFactory",
        "kiekerPattern" : "public org.gradoop.model.GraphDataFactory org.gradoop.model.impl.AbstractGraph.getGraphDataFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#getGraphDataFactory",
        "key" : "org.gradoop.model.impl.AbstractGraph.getGraphDataFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.LogicalGraph#fromGellyGraph",
        "kiekerPattern" : "public static org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.fromGellyGraph(org.apache.flink.graph.Graph,org.gradoop.model.impl.GD,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.LogicalGraph#fromGellyGraph",
        "key" : "org.gradoop.model.impl.LogicalGraph.fromGellyGraph_Graph_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.GraphCollection#getGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.AbstractGraph#<init>",
          "kiekerPattern" : "protected new org.gradoop.model.impl.AbstractGraph.<init>(org.apache.flink.graph.Graph,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory,org.apache.flink.api.java.ExecutionEnvironment)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#<init>",
          "key" : "org.gradoop.model.impl.AbstractGraph.<init>_Graph_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.LogicalGraph#fromGellyGraph",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.LogicalGraph#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.LogicalGraph.<init>(org.apache.flink.graph.Graph,org.gradoop.model.impl.GD,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory,org.apache.flink.api.java.ExecutionEnvironment)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.LogicalGraph#<init>",
          "key" : "org.gradoop.model.impl.LogicalGraph.<init>_Graph_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.LogicalGraph#fromGellyGraph",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraphProjectionTest$VertexLabelProjectionFunction#<init>",
    "kiekerPattern" : "private new org.gradoop.model.impl.LogicalGraphProjectionTest$VertexLabelProjectionFunction.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraphProjectionTest$VertexLabelProjectionFunction#<init>",
    "key" : "org.gradoop.model.impl.LogicalGraphProjectionTest$VertexLabelProjectionFunction.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraphProjectionTest$EdgePropertyProjectionFunction#<init>",
    "kiekerPattern" : "private new org.gradoop.model.impl.LogicalGraphProjectionTest$EdgePropertyProjectionFunction.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraphProjectionTest$EdgePropertyProjectionFunction#<init>",
    "key" : "org.gradoop.model.impl.LogicalGraphProjectionTest$EdgePropertyProjectionFunction.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraph#project",
    "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.project(org.gradoop.model.helper.UnaryFunction,org.gradoop.model.helper.UnaryFunction)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraph#project",
    "key" : "org.gradoop.model.impl.LogicalGraph.project_UnaryFunction_UnaryFunction",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.operators.Projection#<init>",
      "kiekerPattern" : "public new org.gradoop.model.impl.operators.Projection.<init>(org.gradoop.model.helper.UnaryFunction,org.gradoop.model.helper.UnaryFunction)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.operators.Projection#<init>",
      "key" : "org.gradoop.model.impl.operators.Projection.<init>_UnaryFunction_UnaryFunction",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#project",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.model.impl.LogicalGraph#callForGraph",
      "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.callForGraph(org.gradoop.model.operators.UnaryGraphToGraphOperator)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.LogicalGraph#callForGraph",
      "key" : "org.gradoop.model.impl.LogicalGraph.callForGraph_UnaryGraphToGraphOperator",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#project",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.operators.Projection#execute",
        "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.operators.Projection.execute(org.gradoop.model.impl.LogicalGraph)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.operators.Projection#execute",
        "key" : "org.gradoop.model.impl.operators.Projection.execute_LogicalGraph",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.LogicalGraph#callForGraph",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.AbstractGraph#getVertices",
          "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getVertices()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#getVertices",
          "key" : "org.gradoop.model.impl.AbstractGraph.getVertices_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.Projection#getVertexFunc",
          "kiekerPattern" : "protected org.gradoop.model.helper.UnaryFunction org.gradoop.model.impl.operators.Projection.getVertexFunc()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.Projection#getVertexFunc",
          "key" : "org.gradoop.model.impl.operators.Projection.getVertexFunc_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.Projection$ProjectionVerticesMapper#<init>",
          "kiekerPattern" : "public new org.gradoop.model.impl.operators.Projection$ProjectionVerticesMapper.<init>(org.gradoop.model.helper.UnaryFunction)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.Projection$ProjectionVerticesMapper#<init>",
          "key" : "org.gradoop.model.impl.operators.Projection$ProjectionVerticesMapper.<init>_UnaryFunction",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.AbstractGraph#getEdges",
          "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getEdges()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#getEdges",
          "key" : "org.gradoop.model.impl.AbstractGraph.getEdges_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.Projection#getEdgeFunc",
          "kiekerPattern" : "protected org.gradoop.model.helper.UnaryFunction org.gradoop.model.impl.operators.Projection.getEdgeFunc()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.Projection#getEdgeFunc",
          "key" : "org.gradoop.model.impl.operators.Projection.getEdgeFunc_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.Projection$ProjectionEdgesMapper#<init>",
          "kiekerPattern" : "public new org.gradoop.model.impl.operators.Projection$ProjectionEdgesMapper.<init>(org.gradoop.model.helper.UnaryFunction)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.Projection$ProjectionEdgesMapper#<init>",
          "key" : "org.gradoop.model.impl.operators.Projection$ProjectionEdgesMapper.<init>_UnaryFunction",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.AbstractGraph#getGraphDataFactory",
          "kiekerPattern" : "public org.gradoop.model.GraphDataFactory org.gradoop.model.impl.AbstractGraph.getGraphDataFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#getGraphDataFactory",
          "key" : "org.gradoop.model.impl.AbstractGraph.getGraphDataFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.LogicalGraph#getId",
          "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.LogicalGraph.getId()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.LogicalGraph#getId",
          "key" : "org.gradoop.model.impl.LogicalGraph.getId_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.DefaultElement#getId",
            "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.DefaultElement.getId()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultElement#getId",
            "key" : "org.gradoop.model.impl.DefaultElement.getId_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.LogicalGraph#getId",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        }, {
          "call" : "org.gradoop.model.impl.LogicalGraph#getLabel",
          "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.LogicalGraph.getLabel()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.LogicalGraph#getLabel",
          "key" : "org.gradoop.model.impl.LogicalGraph.getLabel_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.DefaultElement#getLabel",
            "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.getLabel()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultElement#getLabel",
            "key" : "org.gradoop.model.impl.DefaultElement.getLabel_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.LogicalGraph#getLabel",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        }, {
          "call" : "org.gradoop.model.impl.LogicalGraph#getProperties",
          "kiekerPattern" : "public java.util.Map org.gradoop.model.impl.LogicalGraph.getProperties()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.LogicalGraph#getProperties",
          "key" : "org.gradoop.model.impl.LogicalGraph.getProperties_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.DefaultElement#getProperties",
            "kiekerPattern" : "public java.util.Map org.gradoop.model.impl.DefaultElement.getProperties()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultElement#getProperties",
            "key" : "org.gradoop.model.impl.DefaultElement.getProperties_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.LogicalGraph#getProperties",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        }, {
          "call" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
          "kiekerPattern" : "public org.gradoop.model.impl.DefaultGraphData org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData(java.lang.Long,java.lang.String,java.util.Map)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "impl.DefaultGraphDataFactory#createGraphData",
          "key" : "org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData_Long_String_Map",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.DefaultEPGMElementFactory#checkId",
            "kiekerPattern" : "protected void org.gradoop.model.impl.DefaultEPGMElementFactory.checkId(java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultEPGMElementFactory#checkId",
            "key" : "org.gradoop.model.impl.DefaultEPGMElementFactory.checkId_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.DefaultEPGMElementFactory#checkLabel",
            "kiekerPattern" : "protected void org.gradoop.model.impl.DefaultEPGMElementFactory.checkLabel(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultEPGMElementFactory#checkLabel",
            "key" : "org.gradoop.model.impl.DefaultEPGMElementFactory.checkLabel_String",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.DefaultElement#<init>",
            "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultElement.<init>(java.lang.Long,java.lang.String,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultElement#<init>",
            "key" : "org.gradoop.model.impl.DefaultElement.<init>_Long_String_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.DefaultGraphData#<init>",
            "kiekerPattern" : "new org.gradoop.model.impl.DefaultGraphData.<init>(java.lang.Long,java.lang.String,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultGraphData#<init>",
            "key" : "org.gradoop.model.impl.DefaultGraphData.<init>_Long_String_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        }, {
          "call" : "org.gradoop.model.impl.AbstractGraph#getVertexDataFactory",
          "kiekerPattern" : "public org.gradoop.model.VertexDataFactory org.gradoop.model.impl.AbstractGraph.getVertexDataFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#getVertexDataFactory",
          "key" : "org.gradoop.model.impl.AbstractGraph.getVertexDataFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.AbstractGraph#getEdgeDataFactory",
          "kiekerPattern" : "public org.gradoop.model.EdgeDataFactory org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#getEdgeDataFactory",
          "key" : "org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.LogicalGraph#fromDataSets",
          "kiekerPattern" : "public static org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.fromDataSets(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.gradoop.model.impl.GD,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.LogicalGraph#fromDataSets",
          "key" : "org.gradoop.model.impl.LogicalGraph.fromDataSets_DataSet_DataSet_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.Projection#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.LogicalGraph#fromGellyGraph",
            "kiekerPattern" : "public static org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.fromGellyGraph(org.apache.flink.graph.Graph,org.gradoop.model.impl.GD,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.LogicalGraph#fromGellyGraph",
            "key" : "org.gradoop.model.impl.LogicalGraph.fromGellyGraph_Graph_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.LogicalGraph#fromDataSets",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.model.impl.AbstractGraph#<init>",
              "kiekerPattern" : "protected new org.gradoop.model.impl.AbstractGraph.<init>(org.apache.flink.graph.Graph,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory,org.apache.flink.api.java.ExecutionEnvironment)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "impl.AbstractGraph#<init>",
              "key" : "org.gradoop.model.impl.AbstractGraph.<init>_Graph_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.LogicalGraph#fromGellyGraph",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.model.impl.LogicalGraph#<init>",
              "kiekerPattern" : "private new org.gradoop.model.impl.LogicalGraph.<init>(org.apache.flink.graph.Graph,org.gradoop.model.impl.GD,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory,org.apache.flink.api.java.ExecutionEnvironment)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "impl.LogicalGraph#<init>",
              "key" : "org.gradoop.model.impl.LogicalGraph.<init>_Graph_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.LogicalGraph#fromGellyGraph",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          } ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.AbstractGraph#getGellyGraph",
    "kiekerPattern" : "protected org.apache.flink.graph.Graph org.gradoop.model.impl.AbstractGraph.getGellyGraph()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.AbstractGraph#getGellyGraph",
    "key" : "org.gradoop.model.impl.AbstractGraph.getGellyGraph_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertexData#toString",
    "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultVertexData.toString()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultVertexData#toString",
    "key" : "org.gradoop.model.impl.DefaultVertexData.toString_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultGraphElement#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultGraphElement.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultGraphElement#toString",
      "key" : "org.gradoop.model.impl.DefaultGraphElement.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.DefaultVertexData#toString",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.DefaultElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultElement#toString",
        "key" : "org.gradoop.model.impl.DefaultElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.DefaultGraphElement#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultElement#<init>",
    "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultElement.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultElement#<init>",
    "key" : "org.gradoop.model.impl.DefaultElement.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultGraphElement#<init>",
    "kiekerPattern" : "protected new org.gradoop.model.impl.DefaultGraphElement.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultGraphElement#<init>",
    "key" : "org.gradoop.model.impl.DefaultGraphElement.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertexData#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.DefaultVertexData.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultVertexData#<init>",
    "key" : "org.gradoop.model.impl.DefaultVertexData.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultEdgeData#toString",
    "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultEdgeData.toString()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultEdgeData#toString",
    "key" : "org.gradoop.model.impl.DefaultEdgeData.toString_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultGraphElement#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultGraphElement.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultGraphElement#toString",
      "key" : "org.gradoop.model.impl.DefaultGraphElement.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.DefaultEdgeData#toString",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.DefaultElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultElement#toString",
        "key" : "org.gradoop.model.impl.DefaultElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.DefaultGraphElement#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultEdgeData#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.DefaultEdgeData.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultEdgeData#<init>",
    "key" : "org.gradoop.model.impl.DefaultEdgeData.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultElement#getId",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.DefaultElement.getId()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultElement#getId",
    "key" : "org.gradoop.model.impl.DefaultElement.getId_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.AbstractGraph#getVertexCount",
    "kiekerPattern" : "public long org.gradoop.model.impl.AbstractGraph.getVertexCount()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.AbstractGraph#getVertexCount",
    "key" : "org.gradoop.model.impl.AbstractGraph.getVertexCount_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultVertexData#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultVertexData.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultVertexData#toString",
      "key" : "org.gradoop.model.impl.DefaultVertexData.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.AbstractGraph#getVertexCount",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.DefaultGraphElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultGraphElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultGraphElement#toString",
        "key" : "org.gradoop.model.impl.DefaultGraphElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.DefaultVertexData#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.DefaultElement#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "impl.DefaultElement#toString",
          "key" : "org.gradoop.model.impl.DefaultElement.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.DefaultGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.AbstractGraph#getEdgeCount",
    "kiekerPattern" : "public long org.gradoop.model.impl.AbstractGraph.getEdgeCount()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.AbstractGraph#getEdgeCount",
    "key" : "org.gradoop.model.impl.AbstractGraph.getEdgeCount_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultEdgeData#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultEdgeData.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultEdgeData#toString",
      "key" : "org.gradoop.model.impl.DefaultEdgeData.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.AbstractGraph#getEdgeCount",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.DefaultGraphElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultGraphElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultGraphElement#toString",
        "key" : "org.gradoop.model.impl.DefaultGraphElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.DefaultEdgeData#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.DefaultElement#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "impl.DefaultElement#toString",
          "key" : "org.gradoop.model.impl.DefaultElement.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.DefaultGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    }, {
      "call" : "org.gradoop.model.impl.DefaultVertexData#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultVertexData.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultVertexData#toString",
      "key" : "org.gradoop.model.impl.DefaultVertexData.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.AbstractGraph#getEdgeCount",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.DefaultGraphElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultGraphElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "impl.DefaultGraphElement#toString",
        "key" : "org.gradoop.model.impl.DefaultGraphElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.DefaultVertexData#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.DefaultElement#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "impl.DefaultElement#toString",
          "key" : "org.gradoop.model.impl.DefaultElement.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.DefaultGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraph#getLabel",
    "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.LogicalGraph.getLabel()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraph#getLabel",
    "key" : "org.gradoop.model.impl.LogicalGraph.getLabel_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultElement#getLabel",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.getLabel()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultElement#getLabel",
      "key" : "org.gradoop.model.impl.DefaultElement.getLabel_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#getLabel",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraph#getProperties",
    "kiekerPattern" : "public java.util.Map org.gradoop.model.impl.LogicalGraph.getProperties()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraph#getProperties",
    "key" : "org.gradoop.model.impl.LogicalGraph.getProperties_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultElement#getProperties",
      "kiekerPattern" : "public java.util.Map org.gradoop.model.impl.DefaultElement.getProperties()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultElement#getProperties",
      "key" : "org.gradoop.model.impl.DefaultElement.getProperties_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#getProperties",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultElement#getProperties",
    "kiekerPattern" : "public java.util.Map org.gradoop.model.impl.DefaultElement.getProperties()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultElement#getProperties",
    "key" : "org.gradoop.model.impl.DefaultElement.getProperties_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultElement#getLabel",
    "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultElement.getLabel()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultElement#getLabel",
    "key" : "org.gradoop.model.impl.DefaultElement.getLabel_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphProjectionTest#projectionTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 322},
   width = 2849- margin.right - margin.left,
   height = 1610 - margin.top - margin.bottom;
