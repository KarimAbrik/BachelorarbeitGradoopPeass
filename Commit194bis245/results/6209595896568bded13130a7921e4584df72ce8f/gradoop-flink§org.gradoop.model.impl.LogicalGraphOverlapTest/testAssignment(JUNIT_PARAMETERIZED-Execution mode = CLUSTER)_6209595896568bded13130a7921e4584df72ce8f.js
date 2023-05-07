if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 6209595896568bded13130a7921e4584df72ce8f -test org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment\")'>6209595896568bded13130a7921e4584df72ce8f</a><br>Test Case: org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment<br>";
}

var source = {"current":
{
 "org.gradoop.model.helper.KeySelectors$VertexKeySelector.<init>_":
 ``,"org.gradoop.model.impl.AbstractGraph.<init>_Graph_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment":
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
}`,"org.gradoop.model.impl.operators.Overlap.executeInternal_LogicalGraph_LogicalGraph":
 `/**
 * {@inheritDoc}
 */
@Override
protected LogicalGraph<VD, ED, GD> executeInternal(LogicalGraph<VD, ED, GD> firstGraph, LogicalGraph<VD, ED, GD> secondGraph) {
    final Long newGraphID = FlinkConstants.OVERLAP_GRAPH_ID;
    // union vertex sets, group by vertex id, filter vertices where
    // the group contains two vertices and update them with the new graph id
    DataSet<Vertex<Long, VD>> newVertexSet = firstGraph.getVertices().union(secondGraph.getVertices()).groupBy(new KeySelectors.VertexKeySelector<VD>()).reduceGroup(new VertexGroupReducer<VD>(2L)).map(new VertexToGraphUpdater<VD>(newGraphID));
    DataSet<Edge<Long, ED>> newEdgeSet = firstGraph.getEdges().union(secondGraph.getEdges()).groupBy(new KeySelectors.EdgeKeySelector<ED>()).reduceGroup(new EdgeGroupReducer<ED>(2L)).map(new EdgeToGraphUpdater<ED>(newGraphID));
    return LogicalGraph.fromDataSets(newVertexSet, newEdgeSet, firstGraph.getGraphDataFactory().createGraphData(newGraphID), firstGraph.getVertexDataFactory(), firstGraph.getEdgeDataFactory(), firstGraph.getGraphDataFactory());
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
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator.<init>_":
 ``,"org.gradoop.model.impl.DefaultEdgeData.toString_":
 `/**
 * {@inheritDoc}
 */
@Override
public String toString() {
    return "DefaultEdgeData{" + super.toString() + ", sourceVertexId=" + sourceVertexId + ", targetVertexId=" + targetVertexId + '}';
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer.<init>_long_Long_Long":
 `/**
 * Creates group reducer
 *
 * @param amount           number of number of times, a vertex must occur
 *                         inside a group
 * @param includedGraphID  graph, a vertex must be part of
 * @param precludedGraphID graph, a vertex must not be part of
 */
public VertexGroupReducer(long amount, Long includedGraphID, Long precludedGraphID) {
    this.amount = amount;
    this.includedGraphID = includedGraphID;
    this.precludedGraphID = precludedGraphID;
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator.execute_LogicalGraph_LogicalGraph":
 `/**
 * {@inheritDoc}
 */
@Override
public LogicalGraph<VD, ED, GD> execute(LogicalGraph<VD, ED, GD> firstGraph, LogicalGraph<VD, ED, GD> secondGraph) {
    return executeInternal(firstGraph, secondGraph);
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
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeGroupReducer.<init>_long":
 `/**
 * Creates group reducer.
 *
 * @param amount number of group elements that must be reached to collect
 *               the vertex
 */
public EdgeGroupReducer(long amount) {
    this.amount = amount;
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
}`,"org.gradoop.model.impl.AbstractGraph.getEdgeData_":
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
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexToGraphUpdater.<init>_long":
 `/**
 * Creates map function
 *
 * @param newGraphID graph identifier to add to the vertex
 */
public VertexToGraphUpdater(final long newGraphID) {
    this.newGraphID = newGraphID;
}`,"org.gradoop.model.impl.AbstractGraph.getEdges_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<Edge<Long, ED>> getEdges() {
    return graph.getEdges();
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeToGraphUpdater.<init>_long":
 `/**
 * Creates map function
 *
 * @param newGraphID graph identifier to add
 */
public EdgeToGraphUpdater(final long newGraphID) {
    this.newGraphID = newGraphID;
}`,"org.gradoop.model.helper.KeySelectors$EdgeKeySelector.<init>_":
 ``,"org.gradoop.model.impl.LogicalGraph.overlap_LogicalGraph":
 `/**
 * {@inheritDoc}
 */
@Override
public LogicalGraph<VD, ED, GD> overlap(LogicalGraph<VD, ED, GD> otherGraph) {
    return callForGraph(new Overlap<VD, ED, GD>(), otherGraph);
}`,"org.gradoop.model.impl.DefaultGraphElement.getGraphs_":
 `/**
 * {@inheritDoc}
 */
@Override
public Set<Long> getGraphs() {
    return graphs;
}`,"org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment_":
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
}`,"org.gradoop.model.impl.AbstractGraph.getExecutionEnvironment_":
 `/**
 * Returns the Flink execution environment associated with that graph.
 *
 * @return Flink execution environment
 */
public ExecutionEnvironment getExecutionEnvironment() {
    return this.env;
}`,"org.gradoop.model.FlinkTestBase.getExecutionEnvironment_":
 `protected ExecutionEnvironment getExecutionEnvironment() {
    return env;
}`,"org.gradoop.model.impl.DefaultGraphData.toString_":
 `@Override
public String toString() {
    return "DefaultGraphData{" + super.toString() + '}';
}`,"org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData_Long":
 `/**
 * {@inheritDoc}
 */
@Override
public DefaultGraphData createGraphData(final Long id) {
    return createGraphData(id, GConstants.DEFAULT_GRAPH_LABEL, null);
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
}`,"org.gradoop.model.impl.operators.Overlap.<init>_":
 ``,"org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData_Long_String_Map":
 `/**
 * {@inheritDoc}
 */
@Override
public DefaultGraphData createGraphData(final Long id, final String label, Map<String, Object> properties) {
    checkId(id);
    checkLabel(label);
    return new DefaultGraphData(id, label, properties);
}`,"org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer.<init>_long":
 `/**
 * Creates group reducer.
 *
 * @param amount number of times, a vertex must occur inside a group
 */
public VertexGroupReducer(long amount) {
    this(amount, null, null);
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
}`,"org.gradoop.model.impl.DefaultElement.equals_Object":
 `/**
 * {@inheritDoc}
 */
@Override
public boolean equals(Object o) {
    if (this == o) {
        return true;
    }
    if (o == null || getClass() != o.getClass()) {
        return false;
    }
    DefaultElement that = (DefaultElement) o;
    return !(id != null ? !id.equals(that.id) : that.id != null);
}`,"org.gradoop.model.impl.LogicalGraph.callForGraph_BinaryGraphToGraphOperator_LogicalGraph":
 `/**
 * {@inheritDoc}
 */
@Override
public LogicalGraph<VD, ED, GD> callForGraph(BinaryGraphToGraphOperator<VD, ED, GD> operator, LogicalGraph<VD, ED, GD> otherGraph) {
    return operator.execute(this, otherGraph);
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
  "call" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-flink",
  "name" : "impl.LogicalGraphOverlapTest#testAssignment",
  "key" : "org.gradoop.model.impl.LogicalGraphOverlapTest.testAssignment_",
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
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
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
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
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
    "call" : "org.gradoop.model.impl.LogicalGraph#overlap",
    "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.overlap(org.gradoop.model.impl.LogicalGraph)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraph#overlap",
    "key" : "org.gradoop.model.impl.LogicalGraph.overlap_LogicalGraph",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator#<init>",
      "kiekerPattern" : "public new org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.operators.AbstractBinaryGraphToGraphOperator#<init>",
      "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#overlap",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.model.impl.operators.Overlap#<init>",
      "kiekerPattern" : "public new org.gradoop.model.impl.operators.Overlap.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.operators.Overlap#<init>",
      "key" : "org.gradoop.model.impl.operators.Overlap.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#overlap",
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
      "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.callForGraph(org.gradoop.model.operators.BinaryGraphToGraphOperator,org.gradoop.model.impl.LogicalGraph)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.LogicalGraph#callForGraph",
      "key" : "org.gradoop.model.impl.LogicalGraph.callForGraph_BinaryGraphToGraphOperator_LogicalGraph",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#overlap",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator#execute",
        "kiekerPattern" : "public org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator.execute(org.gradoop.model.impl.LogicalGraph,org.gradoop.model.impl.LogicalGraph)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.operators.AbstractBinaryGraphToGraphOperator#execute",
        "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator.execute_LogicalGraph_LogicalGraph",
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
          "call" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
          "kiekerPattern" : "protected org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.operators.Overlap.executeInternal(org.gradoop.model.impl.LogicalGraph,org.gradoop.model.impl.LogicalGraph)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.Overlap#executeInternal",
          "key" : "org.gradoop.model.impl.operators.Overlap.executeInternal_LogicalGraph_LogicalGraph",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.AbstractGraph#getVertices",
            "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getVertices()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.AbstractGraph#getVertices",
            "key" : "org.gradoop.model.impl.AbstractGraph.getVertices_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.helper.KeySelectors$VertexKeySelector#<init>",
            "kiekerPattern" : "public new org.gradoop.model.helper.KeySelectors$VertexKeySelector.<init>()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "helper.KeySelectors$VertexKeySelector#<init>",
            "key" : "org.gradoop.model.helper.KeySelectors$VertexKeySelector.<init>_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer#<init>",
            "kiekerPattern" : "public new org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer.<init>(long,java.lang.Long,java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer#<init>",
            "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer.<init>_long_Long_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer#<init>",
            "kiekerPattern" : "public new org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer.<init>(long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer#<init>",
            "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexGroupReducer.<init>_long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexToGraphUpdater#<init>",
            "kiekerPattern" : "public new org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexToGraphUpdater.<init>(long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.operators.AbstractBinaryGraphToGraphOperator$VertexToGraphUpdater#<init>",
            "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$VertexToGraphUpdater.<init>_long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.AbstractGraph#getEdges",
            "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getEdges()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.AbstractGraph#getEdges",
            "key" : "org.gradoop.model.impl.AbstractGraph.getEdges_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.helper.KeySelectors$EdgeKeySelector#<init>",
            "kiekerPattern" : "public new org.gradoop.model.helper.KeySelectors$EdgeKeySelector.<init>()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "helper.KeySelectors$EdgeKeySelector#<init>",
            "key" : "org.gradoop.model.helper.KeySelectors$EdgeKeySelector.<init>_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeGroupReducer#<init>",
            "kiekerPattern" : "public new org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeGroupReducer.<init>(long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.operators.AbstractBinaryGraphToGraphOperator$EdgeGroupReducer#<init>",
            "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeGroupReducer.<init>_long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeToGraphUpdater#<init>",
            "kiekerPattern" : "public new org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeToGraphUpdater.<init>(long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.operators.AbstractBinaryGraphToGraphOperator$EdgeToGraphUpdater#<init>",
            "key" : "org.gradoop.model.impl.operators.AbstractBinaryGraphToGraphOperator$EdgeToGraphUpdater.<init>_long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.AbstractGraph#getGraphDataFactory",
            "kiekerPattern" : "public org.gradoop.model.GraphDataFactory org.gradoop.model.impl.AbstractGraph.getGraphDataFactory()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.AbstractGraph#getGraphDataFactory",
            "key" : "org.gradoop.model.impl.AbstractGraph.getGraphDataFactory_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
            "kiekerPattern" : "public org.gradoop.model.impl.DefaultGraphData org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData(java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultGraphDataFactory#createGraphData",
            "key" : "org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
              "kiekerPattern" : "public org.gradoop.model.impl.DefaultGraphData org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData(java.lang.Long,java.lang.String,java.util.Map)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "impl.DefaultGraphDataFactory#createGraphData",
              "key" : "org.gradoop.model.impl.DefaultGraphDataFactory.createGraphData_Long_String_Map",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.DefaultGraphDataFactory#createGraphData",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
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
                "ess" : 7,
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
                "ess" : 7,
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
                "ess" : 7,
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
                "ess" : 7,
                "children" : [ ]
              } ]
            } ]
          }, {
            "call" : "org.gradoop.model.impl.AbstractGraph#getVertexDataFactory",
            "kiekerPattern" : "public org.gradoop.model.VertexDataFactory org.gradoop.model.impl.AbstractGraph.getVertexDataFactory()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.AbstractGraph#getVertexDataFactory",
            "key" : "org.gradoop.model.impl.AbstractGraph.getVertexDataFactory_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.AbstractGraph#getEdgeDataFactory",
            "kiekerPattern" : "public org.gradoop.model.EdgeDataFactory org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.AbstractGraph#getEdgeDataFactory",
            "key" : "org.gradoop.model.impl.AbstractGraph.getEdgeDataFactory_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.LogicalGraph#fromDataSets",
            "kiekerPattern" : "public static org.gradoop.model.impl.LogicalGraph org.gradoop.model.impl.LogicalGraph.fromDataSets(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.gradoop.model.impl.GD,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.LogicalGraph#fromDataSets",
            "key" : "org.gradoop.model.impl.LogicalGraph.fromDataSets_DataSet_DataSet_GD_VertexDataFactory_EdgeDataFactory_GraphDataFactory",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.Overlap#executeInternal",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
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
              "ess" : 6,
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
                "ess" : 7,
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
                "ess" : 7,
                "children" : [ ]
              } ]
            } ]
          } ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.model.impl.AbstractGraph#getVertexData",
    "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getVertexData()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.AbstractGraph#getVertexData",
    "key" : "org.gradoop.model.impl.AbstractGraph.getVertexData_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.AbstractGraph#getVertices",
      "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getVertices()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.AbstractGraph#getVertices",
      "key" : "org.gradoop.model.impl.AbstractGraph.getVertices_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.AbstractGraph#getVertexData",
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
    "call" : "org.gradoop.model.impl.AbstractGraph#getEdgeData",
    "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getEdgeData()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.AbstractGraph#getEdgeData",
    "key" : "org.gradoop.model.impl.AbstractGraph.getEdgeData_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.AbstractGraph#getEdges",
      "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getEdges()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.AbstractGraph#getEdges",
      "key" : "org.gradoop.model.impl.AbstractGraph.getEdges_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.AbstractGraph#getEdgeData",
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
    "call" : "org.gradoop.model.FlinkTestBase#getExecutionEnvironment",
    "kiekerPattern" : "protected org.apache.flink.api.java.ExecutionEnvironment org.gradoop.model.FlinkTestBase.getExecutionEnvironment()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "FlinkTestBase#getExecutionEnvironment",
    "key" : "org.gradoop.model.FlinkTestBase.getExecutionEnvironment_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
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
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
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
    "call" : "org.gradoop.model.impl.DefaultEdgeData#toString",
    "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultEdgeData.toString()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultEdgeData#toString",
    "key" : "org.gradoop.model.impl.DefaultEdgeData.toString_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
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
    "call" : "org.gradoop.model.impl.DefaultGraphElement#getGraphs",
    "kiekerPattern" : "public java.util.Set org.gradoop.model.impl.DefaultGraphElement.getGraphs()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultGraphElement#getGraphs",
    "key" : "org.gradoop.model.impl.DefaultGraphElement.getGraphs_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultElement#equals",
    "kiekerPattern" : "public boolean org.gradoop.model.impl.DefaultElement.equals(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultElement#equals",
    "key" : "org.gradoop.model.impl.DefaultElement.equals_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphOverlapTest#testAssignment",
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
var margin = {top: 20, right: 120, bottom: 20, left: 301},
   width = 3742- margin.right - margin.left,
   height = 1400 - margin.top - margin.bottom;
