if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 937394435a5e1430d025a1d7cc9f47224ea805b0 -test org.gradoop.model.impl.DefaultVertexTest#createWithIDTest\")'>937394435a5e1430d025a1d7cc9f47224ea805b0</a><br>Test Case: org.gradoop.model.impl.DefaultVertexTest#createWithIDTest<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>_Long_Iterable_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param id         unique identifier
 * @param labels     labels
 * @param properties key-value-map
 */
protected MultiLabeledPropertyContainer(Long id, Iterable<String> labels, Map<String, Object> properties) {
    super(properties);
    this.id = id;
    this.labels = (labels != null) ? Lists.newArrayList(labels) : null;
}`,"org.gradoop.model.impl.MultiLabeledPropertyContainer.getLabelCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getLabelCount() {
    return (this.labels != null) ? this.labels.size() : 0;
}`,"org.gradoop.model.impl.DefaultVertexTest.createWithIDTest_":
 `@Test
public void createWithIDTest() {
    Long vertexID = 0L;
    Vertex v = VertexFactory.createDefaultVertexWithID(vertexID);
    assertThat(v.getID(), is(vertexID));
    assertThat(v.getLabelCount(), is(0));
    assertThat(v.getGraphCount(), is(0));
    assertThat(v.getOutgoingDegree(), is(0));
    assertThat(v.getIncomingDegree(), is(0));
    assertThat(v.getDegree(), is(0));
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertexWithID_Long":
 `/**
 * Creates a vertex using the given identifier.
 *
 * @param vertexID vertex identifier
 * @return vertex with identifier
 */
public static Vertex createDefaultVertexWithID(final Long vertexID) {
    return createDefaultVertex(vertexID, null, null, null, null, null);
}`,"org.gradoop.model.impl.PropertyContainer.<init>_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param properties key-value-map
 */
protected PropertyContainer(Map<String, Object> properties) {
    this.properties = properties;
}`,"org.gradoop.model.impl.DefaultVertex.getGraphCount_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getGraphCount() {
    return this.graphs.size();
}`,"org.gradoop.model.impl.VertexFactory.checkVertexID_Long":
 `/**
 * Checks if the given vertexID is valid.
 *
 * @param vertexID vertex identifier
 */
private static void checkVertexID(final Long vertexID) {
    if (vertexID == null) {
        throw new IllegalArgumentException("vertexID must not be null");
    }
}`,"org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getID() {
    return id;
}`,"org.gradoop.model.impl.DefaultVertex.getDegree_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getDegree() {
    return getOutgoingDegree() + getIncomingDegree();
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_Iterable_Map_Iterable_Iterable_Iterable":
 `/**
 * Creates a vertex based on the given properties.
 *
 * @param id            vertex identifier
 * @param labels        vertex labels
 * @param properties    vertex properties
 * @param outgoingEdges edges starting at that vertex
 * @param incomingEdges edges ending in that vertex
 * @param graphs        graphs that vertex belongs to
 * @return vertex
 */
public static Vertex createDefaultVertex(final Long id, final Iterable<String> labels, final Map<String, Object> properties, final Iterable<Edge> outgoingEdges, final Iterable<Edge> incomingEdges, final Iterable<Long> graphs) {
    checkVertexID(id);
    return new DefaultVertex(id, labels, properties, outgoingEdges, incomingEdges, graphs);
}`,"org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getOutgoingDegree() {
    return (outgoingEdges != null) ? Iterables.size(outgoingEdges) : 0;
}`,"org.gradoop.model.impl.DefaultVertex.initGraphs_Iterable":
 `/**
 * Initializes the internal graph storage.
 *
 * @param graphs non-empty set of graphs
 */
private void initGraphs(Iterable<Long> graphs) {
    if (graphs == null) {
        this.graphs = Sets.newHashSet();
    } else {
        this.graphs = Sets.newHashSet(graphs);
    }
}`,"org.gradoop.model.impl.DefaultVertex.getIncomingDegree_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getIncomingDegree() {
    return (incomingEdges != null) ? Iterables.size(incomingEdges) : 0;
}`,"org.gradoop.model.impl.DefaultVertex.<init>_Long_Iterable_Map_Iterable_Iterable_Iterable":
 `/**
 * Creates a vertex based on the given parameters.
 *
 * @param id            vertex id
 * @param labels        labels (can be {@code null})
 * @param properties    key-value-map  (can be {@code null})
 * @param outgoingEdges outgoing edges (can be {@code null})
 * @param incomingEdges incoming edges (can be {@code null})
 * @param graphs        graphs that contain that vertex (can be {@code null})
 */
DefaultVertex(final Long id, final Iterable<String> labels, final Map<String, Object> properties, final Iterable<Edge> outgoingEdges, final Iterable<Edge> incomingEdges, final Iterable<Long> graphs) {
    super(id, labels, properties);
    this.outgoingEdges = outgoingEdges;
    this.incomingEdges = incomingEdges;
    initGraphs(graphs);
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
  "kiekerPattern" : "public void org.gradoop.model.impl.DefaultVertexTest.createWithIDTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-core",
  "name" : "DefaultVertexTest#createWithIDTest",
  "key" : "org.gradoop.model.impl.DefaultVertexTest.createWithIDTest_",
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
    "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithID",
    "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithID(java.lang.Long)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "VertexFactory#createDefaultVertexWithID",
    "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithID_Long",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
      "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertex(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "VertexFactory#createDefaultVertex",
      "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_Iterable_Map_Iterable_Iterable_Iterable",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithID",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.VertexFactory#checkVertexID",
        "kiekerPattern" : "private static void org.gradoop.model.impl.VertexFactory.checkVertexID(java.lang.Long)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "VertexFactory#checkVertexID",
        "key" : "org.gradoop.model.impl.VertexFactory.checkVertexID_Long",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.PropertyContainer#<init>",
        "kiekerPattern" : "protected new org.gradoop.model.impl.PropertyContainer.<init>(java.util.Map)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "PropertyContainer#<init>",
        "key" : "org.gradoop.model.impl.PropertyContainer.<init>_Map",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#<init>",
        "kiekerPattern" : "protected new org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>(java.lang.Long,java.lang.Iterable,java.util.Map)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "MultiLabeledPropertyContainer#<init>",
        "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>_Long_Iterable_Map",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.DefaultVertex#<init>",
        "kiekerPattern" : "new org.gradoop.model.impl.DefaultVertex.<init>(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "DefaultVertex#<init>",
        "key" : "org.gradoop.model.impl.DefaultVertex.<init>_Long_Iterable_Map_Iterable_Iterable_Iterable",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.DefaultVertex#initGraphs",
          "kiekerPattern" : "private void org.gradoop.model.impl.DefaultVertex.initGraphs(java.lang.Iterable)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "DefaultVertex#initGraphs",
          "key" : "org.gradoop.model.impl.DefaultVertex.initGraphs_Iterable",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.DefaultVertex#<init>",
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
    "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getID",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.MultiLabeledPropertyContainer.getID()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "MultiLabeledPropertyContainer#getID",
    "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getLabelCount",
    "kiekerPattern" : "public int org.gradoop.model.impl.MultiLabeledPropertyContainer.getLabelCount()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "MultiLabeledPropertyContainer#getLabelCount",
    "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getLabelCount_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertex#getGraphCount",
    "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getGraphCount()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "DefaultVertex#getGraphCount",
    "key" : "org.gradoop.model.impl.DefaultVertex.getGraphCount_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertex#getOutgoingDegree",
    "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getOutgoingDegree()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "DefaultVertex#getOutgoingDegree",
    "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertex#getIncomingDegree",
    "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getIncomingDegree()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "DefaultVertex#getIncomingDegree",
    "key" : "org.gradoop.model.impl.DefaultVertex.getIncomingDegree_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertex#getDegree",
    "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getDegree()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "DefaultVertex#getDegree",
    "key" : "org.gradoop.model.impl.DefaultVertex.getDegree_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.DefaultVertexTest#createWithIDTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.DefaultVertex#getOutgoingDegree",
      "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getOutgoingDegree()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "DefaultVertex#getOutgoingDegree",
      "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.DefaultVertex#getDegree",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.model.impl.DefaultVertex#getIncomingDegree",
      "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getIncomingDegree()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "DefaultVertex#getIncomingDegree",
      "key" : "org.gradoop.model.impl.DefaultVertex.getIncomingDegree_",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.DefaultVertex#getDegree",
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
var margin = {top: 20, right: 120, bottom: 20, left: 238},
   width = 2155- margin.right - margin.left,
   height = 595 - margin.top - margin.bottom;
