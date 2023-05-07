if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 645eb1baa10fae290a3889480fec4febe1411921 -test org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy\")'>645eb1baa10fae290a3889480fec4febe1411921</a><br>Test Case: org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.Subgraph.<init>_":
 `/**
 * Default constructor.
 */
public Subgraph() {
}`,"org.gradoop.model.impl.AbstractGraph.<init>_Graph_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment":
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
}`,"org.gradoop.model.impl.DefaultVertexData.toString_":
 `@Override
public String toString() {
    return "DefaultVertexData{" + super.toString() + '}';
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
 ``,"org.gradoop.model.impl.operators.SplitBy.<init>_UnaryFunction_ExecutionEnvironment":
 `/**
 * Creates a split by instance.
 *
 * @param env              Flink Execution Environment
 * @param vertexToLongFunc Function to select a graph id from a vertex
 */
public SplitBy(UnaryFunction<VD, Long> vertexToLongFunc, final ExecutionEnvironment env) {
    this.env = env;
    this.vertexToLongFunc = vertexToLongFunc;
}`,"org.gradoop.model.impl.DefaultElement.<init>_":
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
}`,"org.gradoop.model.impl.GraphCollection.<init>_Graph_DataSet_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment":
 `/**
 * Creates a graph collection from the given arguments.
 *
 * @param graph             Flink Gelly graph
 * @param subgraphs         graph data associated with logical graphs in that
 *                          collection
 * @param vertexDataFactory vertex data factory
 * @param edgeDataFactory   edge data factory
 * @param graphDataFactory  graph data factory
 * @param env               Flink execution environment
 */
public GraphCollection(Graph<Long, VD, ED> graph, DataSet<Subgraph<Long, GD>> subgraphs, VertexDataFactory<VD> vertexDataFactory, EdgeDataFactory<ED> edgeDataFactory, GraphDataFactory<GD> graphDataFactory, ExecutionEnvironment env) {
    super(graph, vertexDataFactory, edgeDataFactory, graphDataFactory, env);
    this.subgraphs = subgraphs;
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
}`,"org.gradoop.model.impl.DefaultGraphDataFactory.getType_":
 `/**
 * {@inheritDoc}
 */
@Override
public Class<DefaultGraphData> getType() {
    return DefaultGraphData.class;
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
}`,"org.gradoop.model.impl.operators.SplitBy.computeNewEdges_LogicalGraph_DataSet_DataSet":
 `/**
 * Computes those edges where source and target are in the same newly created
 * graph.
 *
 * @param logicalGraph the input graph
 * @param vertices     the computed vertices with their graphs
 * @param subgraphs    the computed subgraphs
 * @return a DataSet containing all newly created edges, each edge has a
 * new graph in its graph set
 */
private DataSet<Edge<Long, ED>> computeNewEdges(LogicalGraph<VD, ED, GD> logicalGraph, DataSet<Vertex<Long, VD>> vertices, DataSet<Subgraph<Long, GD>> subgraphs) {
    // construct tuples of the edges with the ids of their source and target
    // vertices
    DataSet<Tuple3<Long, Long, Long>> edgeVertexVertex = logicalGraph.getEdges().map(new EdgeToTupleMapper<ED>());
    // replace the source vertex id by the graph list of this vertex
    DataSet<Tuple3<Long, Set<Long>, Long>> edgeGraphsVertex = edgeVertexVertex.join(vertices).where(1).equalTo(0).with(new JoinEdgeTupleWithSourceGraphs<VD>());
    // replace the target vertex id by the graph list of this vertex
    DataSet<Tuple3<Long, Set<Long>, Set<Long>>> edgeGraphsGraphs = edgeGraphsVertex.join(vertices).where(2).equalTo(0).with(new JoinEdgeTupleWithTargetGraphs<VD>());
    // transform the new subgraphs into a single set of long, containing all
    // the identifiers
    DataSet<Set<Long>> newSubgraphIdentifiers = subgraphs.map(new MapSubgraphIdToSet<GD>()).reduce(new ReduceSets());
    // construct new tuples containing the edge, the graphs of its source and
    // target vertex and the list of new graphs
    DataSet<Tuple4<Long, Set<Long>, Set<Long>, Set<Long>>> edgesWithSubgraphs = edgeGraphsGraphs.crossWithTiny(newSubgraphIdentifiers).with(new CrossEdgesWithGraphSet());
    // remove all edges which source and target are not in at least one common
    // graph
    DataSet<Tuple2<Long, Set<Long>>> newSubgraphs = edgesWithSubgraphs.flatMap(new CheckEdgesSourceTargetGraphs());
    // join the graph set tuples with the edges, add all new graphs to the
    // edge graph sets
    return logicalGraph.getEdges().join(newSubgraphs).where(new KeySelectors.EdgeKeySelector<ED>()).equalTo(0).with(new JoinEdgeTuplesWithEdges<ED>());
}`,"org.gradoop.model.impl.operators.SplitBy$EdgeToTupleMapper.<init>_":
 `/**
 * Creates MapFunction instance.
 */
private EdgeToTupleMapper() {
    reuseTuple = new Tuple3<>();
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
}`,"org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer.<init>_UnaryFunction_GraphDataFactory":
 `/**
 * Creates GroupReduceFunction instance.
 *
 * @param function         Mapping from vertex to long value
 * @param graphDataFactory GraphDataFactory to build new GraphData
 */
public SubgraphsFromGroupsReducer(UnaryFunction<VD, Long> function, GraphDataFactory<GD> graphDataFactory) {
    this.function = function;
    this.graphDataFactory = graphDataFactory;
    reuseSubgraph = new Subgraph<>();
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
}`,"org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer.getProducedType_":
 `/**
 * {@inheritDoc}
 */
@Override
@SuppressWarnings("unchecked")
public TypeInformation<Vertex<Long, VD>> getProducedType() {
    return new TupleTypeInfo(Subgraph.class, BasicTypeInfo.LONG_TYPE_INFO, TypeExtractor.createTypeInfo(graphDataFactory.getType()));
}`,"org.gradoop.model.impl.AbstractGraph.getEdges_":
 `/**
 * {@inheritDoc}
 */
@Override
public DataSet<Edge<Long, ED>> getEdges() {
    return graph.getEdges();
}`,"org.gradoop.model.helper.KeySelectors$EdgeKeySelector.<init>_":
 ``,"org.gradoop.model.impl.operators.SplitBy$CheckEdgesSourceTargetGraphs.<init>_":
 `/**
 * Creates FlatMapFunction instance.
 */
public CheckEdgesSourceTargetGraphs() {
    this.reuseTuple = new Tuple2<>();
}`,"org.gradoop.model.impl.operators.SplitBy.execute_LogicalGraph":
 `/**
 * {@inheritDoc}
 */
@Override
public GraphCollection<VD, ED, GD> execute(LogicalGraph<VD, ED, GD> logicalGraph) {
    DataSet<Vertex<Long, VD>> vertices = computeNewVertices(logicalGraph);
    DataSet<Subgraph<Long, GD>> subgraphs = computeNewSubgraphs(logicalGraph, vertices);
    DataSet<Edge<Long, ED>> edges = computeNewEdges(logicalGraph, vertices, subgraphs);
    Graph<Long, VD, ED> newGraph = Graph.fromDataSet(vertices, edges, env);
    return new GraphCollection<>(newGraph, subgraphs, logicalGraph.getVertexDataFactory(), logicalGraph.getEdgeDataFactory(), logicalGraph.getGraphDataFactory(), env);
}`,"org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithTargetGraphs.<init>_":
 `/**
 * Create JoinFunction instance.
 */
private JoinEdgeTupleWithTargetGraphs() {
    reuseTuple = new Tuple3<>();
}`,"org.gradoop.model.impl.DefaultGraphElement.getGraphs_":
 `/**
 * {@inheritDoc}
 */
@Override
public Set<Long> getGraphs() {
    return graphs;
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
}`,"org.gradoop.model.impl.operators.SplitBy$JoinEdgeTuplesWithEdges.<init>_":
 ``,"org.gradoop.model.impl.DefaultGraphData.toString_":
 `@Override
public String toString() {
    return "DefaultGraphData{" + super.toString() + '}';
}`,"org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven.execute_DefaultVertexData":
 `@Override
public Long execute(DefaultVertexData entity) throws Exception {
    return (entity.getId() % 2) - 2;
}`,"org.gradoop.model.impl.LogicalGraph.callForCollection_UnaryGraphToCollectionOperator":
 `/**
 * {@inheritDoc}
 */
@Override
public GraphCollection<VD, ED, GD> callForCollection(UnaryGraphToCollectionOperator<VD, ED, GD> operator) throws Exception {
    return operator.execute(this);
}`,"org.gradoop.model.impl.operators.SplitBy$ReduceSets.<init>_":
 ``,"org.gradoop.model.impl.DefaultGraphElement.getGraphCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getGraphCount() {
    return (graphs != null) ? graphs.size() : 0;
}`,"org.gradoop.model.impl.DefaultElement.getId_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getId() {
    return id;
}`,"org.gradoop.model.impl.operators.SplitBy$MapSubgraphIdToSet.<init>_":
 ``,"org.gradoop.model.impl.AbstractGraph.getVertexData_":
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
}`,"org.gradoop.model.impl.operators.SplitBy$CrossEdgesWithGraphSet.<init>_":
 `/**
 * Create CrossFunction instance.
 */
private CrossEdgesWithGraphSet() {
    reuseTuple = new Tuple4<>();
}`,"org.gradoop.model.impl.AbstractGraph.getGellyGraph_":
 `/**
 * Returns the internal Gelly graph representation. Must only be used by
 * inheriting classes.
 *
 * @return Gelly graph representation
 */
protected Graph<Long, VD, ED> getGellyGraph() {
    return this.graph;
}`,"org.gradoop.model.impl.operators.SplitBy.computeNewSubgraphs_LogicalGraph_DataSet":
 `/**
 * Computes the new subgraphs created by the SplitBy.
 *
 * @param logicalGraph the input graph
 * @param vertices     the computed vertices with their graphs
 * @return a DataSet containing all newly created subgraphs
 */
private DataSet<Subgraph<Long, GD>> computeNewSubgraphs(LogicalGraph<VD, ED, GD> logicalGraph, DataSet<Vertex<Long, VD>> vertices) {
    // construct a KeySelector using the LongFromVertexFunction
    KeySelector<Vertex<Long, VD>, Long> propertySelector = new LongFromVertexSelector<>(vertexToLongFunc);
    // construct the list of subgraphs
    GraphDataFactory<GD> gdFactory = logicalGraph.getGraphDataFactory();
    return vertices.groupBy(propertySelector).reduceGroup(new SubgraphsFromGroupsReducer<>(vertexToLongFunc, gdFactory));
}`,"org.gradoop.model.impl.GraphCollection.size_":
 `/**
 * {@inheritDoc}
 */
@Override
public long size() throws Exception {
    return subgraphs.count();
}`,"org.gradoop.model.impl.operators.SplitBy$LongFromVertexSelector.<init>_UnaryFunction":
 `/**
 * Creates a KeySelector instance.
 *
 * @param function Mapping from vertex to long value
 */
public LongFromVertexSelector(UnaryFunction<VD, Long> function) {
    this.function = function;
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
}`,"org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven.<init>_":
 ``,"org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithSourceGraphs.<init>_":
 `/**
 * Create JoinFunction instance.
 */
private JoinEdgeTupleWithSourceGraphs() {
    reuseTuple = new Tuple3<>();
}`,"org.gradoop.model.impl.operators.SplitBy$AddNewGraphsToVertexMapper.<init>_UnaryFunction":
 `/**
 * Creates MapFunction instance.
 *
 * @param function Mapping from vertex to long value
 */
public AddNewGraphsToVertexMapper(UnaryFunction<VD, Long> function) {
    this.function = function;
}`,"org.gradoop.model.impl.LogicalGraphSplitByTest.testSplitBy_":
 `@Test
public void testSplitBy() throws Exception {
    LogicalGraph<DefaultVertexData, DefaultEdgeData, DefaultGraphData> inputGraph = getGraphStore().getGraph(0L);
    UnaryFunction<DefaultVertexData, Long> function = new SplitByIdOddOrEven();
    GraphCollection<DefaultVertexData, DefaultEdgeData, DefaultGraphData> labeledGraphCollection = inputGraph.callForCollection(new SplitBy<DefaultVertexData, DefaultEdgeData, DefaultGraphData>(new SplitByIdOddOrEven(), getExecutionEnvironment()));
    List<DefaultVertexData> oldVertices = Lists.newArrayList();
    inputGraph.getVertexData().output(new LocalCollectionOutputFormat<>(oldVertices));
    List<DefaultVertexData> newVertices = Lists.newArrayList();
    labeledGraphCollection.getVertexData().output(new LocalCollectionOutputFormat<>(newVertices));
    List<DefaultEdgeData> newEdges = Lists.newArrayList();
    labeledGraphCollection.getEdgeData().output(new LocalCollectionOutputFormat<>(newEdges));
    assertNotNull("graph collection is null", labeledGraphCollection);
    assertEquals("wrong number of graphs", 2L, labeledGraphCollection.size());
    assertEquals("wrong number of vertices", 3L, newVertices.size());
    assertEquals("wrong number of edges", 1L, newEdges.size());
    for (int i = 0; i < newVertices.size(); i++) {
        DefaultVertexData oldVertex = oldVertices.get(i);
        DefaultVertexData newVertex = newVertices.get(i);
        assertTrue((oldVertex.getGraphCount() + 1) == newVertex.getGraphCount());
        assertTrue(newVertex.getGraphs().containsAll(oldVertex.getGraphs()));
        assertTrue(newVertex.getGraphs().contains(function.execute(newVertex)));
    }
}`,"org.gradoop.model.impl.operators.SplitBy.computeNewVertices_LogicalGraph":
 `/**
 * Computes the vertices in the new graphs created by the SplitBy and add
 * these graphs to the graph sets of the vertices.
 *
 * @param logicalGraph input graph
 * @return a DataSet containing all vertices, each vertex has one new graph
 * in its graph set
 */
private DataSet<Vertex<Long, VD>> computeNewVertices(LogicalGraph<VD, ED, GD> logicalGraph) {
    // add the new graphs to the vertices graph lists
    return logicalGraph.getVertices().map(new AddNewGraphsToVertexMapper<>(vertexToLongFunc));
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
  "call" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
  "kiekerPattern" : "public void org.gradoop.model.impl.LogicalGraphSplitByTest.testSplitBy()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-flink",
  "name" : "impl.LogicalGraphSplitByTest#testSplitBy",
  "key" : "org.gradoop.model.impl.LogicalGraphSplitByTest.testSplitBy_",
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
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
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
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
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
    "call" : "org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven#<init>",
    "kiekerPattern" : "private new org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraphSplitByTest$SplitByIdOddOrEven#<init>",
    "key" : "org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.FlinkTestBase#getExecutionEnvironment",
    "kiekerPattern" : "protected org.apache.flink.api.java.ExecutionEnvironment org.gradoop.model.FlinkTestBase.getExecutionEnvironment()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "FlinkTestBase#getExecutionEnvironment",
    "key" : "org.gradoop.model.FlinkTestBase.getExecutionEnvironment_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.operators.SplitBy#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.operators.SplitBy.<init>(org.gradoop.model.helper.UnaryFunction,org.apache.flink.api.java.ExecutionEnvironment)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.operators.SplitBy#<init>",
    "key" : "org.gradoop.model.impl.operators.SplitBy.<init>_UnaryFunction_ExecutionEnvironment",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraph#callForCollection",
    "kiekerPattern" : "public org.gradoop.model.impl.GraphCollection org.gradoop.model.impl.LogicalGraph.callForCollection(org.gradoop.model.operators.UnaryGraphToCollectionOperator)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraph#callForCollection",
    "key" : "org.gradoop.model.impl.LogicalGraph.callForCollection_UnaryGraphToCollectionOperator",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.operators.SplitBy#execute",
      "kiekerPattern" : "public org.gradoop.model.impl.GraphCollection org.gradoop.model.impl.operators.SplitBy.execute(org.gradoop.model.impl.LogicalGraph)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "impl.operators.SplitBy#execute",
      "key" : "org.gradoop.model.impl.operators.SplitBy.execute_LogicalGraph",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraph#callForCollection",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.operators.SplitBy#computeNewVertices",
        "kiekerPattern" : "private org.apache.flink.api.java.DataSet org.gradoop.model.impl.operators.SplitBy.computeNewVertices(org.gradoop.model.impl.LogicalGraph)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.operators.SplitBy#computeNewVertices",
        "key" : "org.gradoop.model.impl.operators.SplitBy.computeNewVertices_LogicalGraph",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
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
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewVertices",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$AddNewGraphsToVertexMapper#<init>",
          "kiekerPattern" : "public new org.gradoop.model.impl.operators.SplitBy$AddNewGraphsToVertexMapper.<init>(org.gradoop.model.helper.UnaryFunction)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$AddNewGraphsToVertexMapper#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$AddNewGraphsToVertexMapper.<init>_UnaryFunction",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewVertices",
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
        "call" : "org.gradoop.model.impl.operators.SplitBy#computeNewSubgraphs",
        "kiekerPattern" : "private org.apache.flink.api.java.DataSet org.gradoop.model.impl.operators.SplitBy.computeNewSubgraphs(org.gradoop.model.impl.LogicalGraph,org.apache.flink.api.java.DataSet)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.operators.SplitBy#computeNewSubgraphs",
        "key" : "org.gradoop.model.impl.operators.SplitBy.computeNewSubgraphs_LogicalGraph_DataSet",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.operators.SplitBy$LongFromVertexSelector#<init>",
          "kiekerPattern" : "public new org.gradoop.model.impl.operators.SplitBy$LongFromVertexSelector.<init>(org.gradoop.model.helper.UnaryFunction)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$LongFromVertexSelector#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$LongFromVertexSelector.<init>_UnaryFunction",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewSubgraphs",
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
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewSubgraphs",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer#<init>",
          "kiekerPattern" : "public new org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer.<init>(org.gradoop.model.helper.UnaryFunction,org.gradoop.model.GraphDataFactory)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$SubgraphsFromGroupsReducer#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer.<init>_UnaryFunction_GraphDataFactory",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewSubgraphs",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.Subgraph#<init>",
            "kiekerPattern" : "public new org.gradoop.model.impl.Subgraph.<init>()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "impl.Subgraph#<init>",
            "key" : "org.gradoop.model.impl.Subgraph.<init>_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer#<init>",
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
          "call" : "org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer#getProducedType",
          "kiekerPattern" : "public org.apache.flink.api.common.typeinfo.TypeInformation org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer.getProducedType()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$SubgraphsFromGroupsReducer#getProducedType",
          "key" : "org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer.getProducedType_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewSubgraphs",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.DefaultGraphDataFactory#getType",
            "kiekerPattern" : "public java.lang.Class org.gradoop.model.impl.DefaultGraphDataFactory.getType()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "impl.DefaultGraphDataFactory#getType",
            "key" : "org.gradoop.model.impl.DefaultGraphDataFactory.getType_",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.operators.SplitBy$SubgraphsFromGroupsReducer#getProducedType",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          } ]
        } ]
      }, {
        "call" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
        "kiekerPattern" : "private org.apache.flink.api.java.DataSet org.gradoop.model.impl.operators.SplitBy.computeNewEdges(org.gradoop.model.impl.LogicalGraph,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.operators.SplitBy#computeNewEdges",
        "key" : "org.gradoop.model.impl.operators.SplitBy.computeNewEdges_LogicalGraph_DataSet_DataSet",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.AbstractGraph#getEdges",
          "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getEdges()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.AbstractGraph#getEdges",
          "key" : "org.gradoop.model.impl.AbstractGraph.getEdges_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$EdgeToTupleMapper#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$EdgeToTupleMapper.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$EdgeToTupleMapper#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$EdgeToTupleMapper.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithSourceGraphs#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithSourceGraphs.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$JoinEdgeTupleWithSourceGraphs#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithSourceGraphs.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithTargetGraphs#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithTargetGraphs.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$JoinEdgeTupleWithTargetGraphs#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$JoinEdgeTupleWithTargetGraphs.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$MapSubgraphIdToSet#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$MapSubgraphIdToSet.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$MapSubgraphIdToSet#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$MapSubgraphIdToSet.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$ReduceSets#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$ReduceSets.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$ReduceSets#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$ReduceSets.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$CrossEdgesWithGraphSet#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$CrossEdgesWithGraphSet.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$CrossEdgesWithGraphSet#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$CrossEdgesWithGraphSet.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$CheckEdgesSourceTargetGraphs#<init>",
          "kiekerPattern" : "public new org.gradoop.model.impl.operators.SplitBy$CheckEdgesSourceTargetGraphs.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$CheckEdgesSourceTargetGraphs#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$CheckEdgesSourceTargetGraphs.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.helper.KeySelectors$EdgeKeySelector#<init>",
          "kiekerPattern" : "public new org.gradoop.model.helper.KeySelectors$EdgeKeySelector.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "helper.KeySelectors$EdgeKeySelector#<init>",
          "key" : "org.gradoop.model.helper.KeySelectors$EdgeKeySelector.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.operators.SplitBy$JoinEdgeTuplesWithEdges#<init>",
          "kiekerPattern" : "private new org.gradoop.model.impl.operators.SplitBy$JoinEdgeTuplesWithEdges.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "impl.operators.SplitBy$JoinEdgeTuplesWithEdges#<init>",
          "key" : "org.gradoop.model.impl.operators.SplitBy$JoinEdgeTuplesWithEdges.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.operators.SplitBy#computeNewEdges",
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
        "call" : "org.gradoop.model.impl.AbstractGraph#getVertexDataFactory",
        "kiekerPattern" : "public org.gradoop.model.VertexDataFactory org.gradoop.model.impl.AbstractGraph.getVertexDataFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#getVertexDataFactory",
        "key" : "org.gradoop.model.impl.AbstractGraph.getVertexDataFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
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
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
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
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.AbstractGraph#<init>",
        "kiekerPattern" : "protected new org.gradoop.model.impl.AbstractGraph.<init>(org.apache.flink.graph.Graph,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory,org.apache.flink.api.java.ExecutionEnvironment)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.AbstractGraph#<init>",
        "key" : "org.gradoop.model.impl.AbstractGraph.<init>_Graph_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.GraphCollection#<init>",
        "kiekerPattern" : "public new org.gradoop.model.impl.GraphCollection.<init>(org.apache.flink.graph.Graph,org.apache.flink.api.java.DataSet,org.gradoop.model.VertexDataFactory,org.gradoop.model.EdgeDataFactory,org.gradoop.model.GraphDataFactory,org.apache.flink.api.java.ExecutionEnvironment)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "impl.GraphCollection#<init>",
        "key" : "org.gradoop.model.impl.GraphCollection.<init>_Graph_DataSet_VertexDataFactory_EdgeDataFactory_GraphDataFactory_ExecutionEnvironment",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.operators.SplitBy#execute",
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
    "call" : "org.gradoop.model.impl.AbstractGraph#getVertexData",
    "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.model.impl.AbstractGraph.getVertexData()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.AbstractGraph#getVertexData",
    "key" : "org.gradoop.model.impl.AbstractGraph.getVertexData_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
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
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
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
    "call" : "org.gradoop.model.impl.GraphCollection#size",
    "kiekerPattern" : "public long org.gradoop.model.impl.GraphCollection.size()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.GraphCollection#size",
    "key" : "org.gradoop.model.impl.GraphCollection.size_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
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
      "parent" : "org.gradoop.model.impl.GraphCollection#size",
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
    }, {
      "call" : "org.gradoop.model.impl.DefaultEdgeData#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.DefaultEdgeData.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultEdgeData#toString",
      "key" : "org.gradoop.model.impl.DefaultEdgeData.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.GraphCollection#size",
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
    } ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultGraphElement#getGraphCount",
    "kiekerPattern" : "public int org.gradoop.model.impl.DefaultGraphElement.getGraphCount()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultGraphElement#getGraphCount",
    "key" : "org.gradoop.model.impl.DefaultGraphElement.getGraphCount_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultGraphElement#getGraphs",
    "kiekerPattern" : "public java.util.Set org.gradoop.model.impl.DefaultGraphElement.getGraphs()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "impl.DefaultGraphElement#getGraphs",
    "key" : "org.gradoop.model.impl.DefaultGraphElement.getGraphs_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven#execute",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven.execute(org.gradoop.model.impl.DefaultVertexData)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "impl.LogicalGraphSplitByTest$SplitByIdOddOrEven#execute",
    "key" : "org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven.execute_DefaultVertexData",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest#testSplitBy",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultElement#getId",
      "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.DefaultElement.getId()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "impl.DefaultElement#getId",
      "key" : "org.gradoop.model.impl.DefaultElement.getId_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.LogicalGraphSplitByTest$SplitByIdOddOrEven#execute",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 280},
   width = 2852- margin.right - margin.left,
   height = 1295 - margin.top - margin.bottom;
