if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 937394435a5e1430d025a1d7cc9f47224ea805b0 -test org.gradoop.model.impl.DefaultVertexTest#createWithIDTest\")'>937394435a5e1430d025a1d7cc9f47224ea805b0</a><br>Test Case: org.gradoop.model.impl.DefaultVertexTest#createWithIDTest<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.LabeledPropertyContainer.getID_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getID() {
    return id;
}`,"org.gradoop.model.impl.DefaultVertexTest.createWithIDTest_":
 `@Test
public void createWithIDTest() {
    Long vertexID = 0L;
    Vertex v = VertexFactory.createDefaultVertexWithID(vertexID);
    assertThat(v.getID(), is(vertexID));
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
    return createDefaultVertex(vertexID, GConstants.DEFAULT_VERTEX_LABEL, null, null, null, null);
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
}`,"org.gradoop.model.impl.LabeledPropertyContainer.validateLabel_String":
 `/**
 * Checks if the given label is not null or empty.
 *
 * @param label label to check
 */
private void validateLabel(String label) {
    if (label == null || "".equals(label)) {
        throw new IllegalArgumentException("label must not be null or empty");
    }
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
}`,"org.gradoop.model.impl.DefaultVertex.<init>_Long_String_Map_Iterable_Iterable_Iterable":
 `/**
 * Creates a vertex based on the given parameters.
 *
 * @param id            vertex id
 * @param label         label (can not be {@code null})
 * @param properties    key-value-map  (can be {@code null})
 * @param outgoingEdges outgoing edges (can be {@code null})
 * @param incomingEdges incoming edges (can be {@code null})
 * @param graphs        graphs that contain that vertex (can be {@code null})
 */
DefaultVertex(final Long id, final String label, final Map<String, Object> properties, final Iterable<Edge> outgoingEdges, final Iterable<Edge> incomingEdges, final Iterable<Long> graphs) {
    super(id, label, properties);
    this.outgoingEdges = outgoingEdges;
    this.incomingEdges = incomingEdges;
    initGraphs(graphs);
}`,"org.gradoop.model.impl.LabeledPropertyContainer.<init>_Long_String_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param id         entity identifier
 * @param label      label
 * @param properties key-value-map
 */
protected LabeledPropertyContainer(Long id, String label, Map<String, Object> properties) {
    super(properties);
    this.id = id;
    validateLabel(label);
    this.label = label;
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_String_Map_Iterable_Iterable_Iterable":
 `/**
 * Creates a vertex based on the given properties.
 *
 * @param id            vertex identifier
 * @param label         vertex labels
 * @param properties    vertex properties
 * @param outgoingEdges edges starting at that vertex
 * @param incomingEdges edges ending in that vertex
 * @param graphs        graphs that vertex belongs to
 * @return vertex
 */
public static Vertex createDefaultVertex(final Long id, final String label, final Map<String, Object> properties, final Iterable<Edge> outgoingEdges, final Iterable<Edge> incomingEdges, final Iterable<Long> graphs) {
    checkVertexID(id);
    if (label == null || "".equals(label)) {
        return new DefaultVertex(id, GConstants.DEFAULT_VERTEX_LABEL, properties, outgoingEdges, incomingEdges, graphs);
    } else {
        return new DefaultVertex(id, label, properties, outgoingEdges, incomingEdges, graphs);
    }
}`,"org.gradoop.model.impl.DefaultVertex.getDegree_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getDegree() {
    return getOutgoingDegree() + getIncomingDegree();
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
      "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertex(java.lang.Long,java.lang.String,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "VertexFactory#createDefaultVertex",
      "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_String_Map_Iterable_Iterable_Iterable",
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
        "call" : "org.gradoop.model.impl.LabeledPropertyContainer#<init>",
        "kiekerPattern" : "protected new org.gradoop.model.impl.LabeledPropertyContainer.<init>(java.lang.Long,java.lang.String,java.util.Map)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "LabeledPropertyContainer#<init>",
        "key" : "org.gradoop.model.impl.LabeledPropertyContainer.<init>_Long_String_Map",
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
          "call" : "org.gradoop.model.impl.LabeledPropertyContainer#validateLabel",
          "kiekerPattern" : "private void org.gradoop.model.impl.LabeledPropertyContainer.validateLabel(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "LabeledPropertyContainer#validateLabel",
          "key" : "org.gradoop.model.impl.LabeledPropertyContainer.validateLabel_String",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.LabeledPropertyContainer#<init>",
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
        "call" : "org.gradoop.model.impl.DefaultVertex#<init>",
        "kiekerPattern" : "new org.gradoop.model.impl.DefaultVertex.<init>(java.lang.Long,java.lang.String,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "DefaultVertex#<init>",
        "key" : "org.gradoop.model.impl.DefaultVertex.<init>_Long_String_Map_Iterable_Iterable_Iterable",
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
    "call" : "org.gradoop.model.impl.LabeledPropertyContainer#getID",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.LabeledPropertyContainer.getID()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "LabeledPropertyContainer#getID",
    "key" : "org.gradoop.model.impl.LabeledPropertyContainer.getID_",
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
   width = 2330- margin.right - margin.left,
   height = 560 - margin.top - margin.bottom;
