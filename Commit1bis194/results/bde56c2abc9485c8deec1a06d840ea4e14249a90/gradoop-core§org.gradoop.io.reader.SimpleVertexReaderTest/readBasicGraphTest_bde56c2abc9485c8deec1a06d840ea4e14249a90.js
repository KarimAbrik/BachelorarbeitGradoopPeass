if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit bde56c2abc9485c8deec1a06d840ea4e14249a90 -test org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest\")'>bde56c2abc9485c8deec1a06d840ea4e14249a90</a><br>Test Case: org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest<br>";
}

var source = {"current":
{
 "org.gradoop.io.reader.SimpleVertexReader.readVertex_String":
 `/**
 * {@inheritDoc}
 */
@Override
public Vertex readVertex(String line) {
    String[] tokens = getTokens(line);
    Long vertexID = Long.valueOf(tokens[0]);
    if (tokens.length > 1) {
        List<Edge> edges = Lists.newArrayListWithCapacity(tokens.length - 1);
        for (int i = 1; i < tokens.length; i++) {
            Long otherID = Long.valueOf(tokens[i]);
            Edge e = EdgeFactory.createDefaultEdge(otherID, (long) i - 1);
            edges.add(e);
        }
        return VertexFactory.createDefaultVertexWithOutgoingEdges(vertexID, edges);
    } else {
        return VertexFactory.createDefaultVertexWithID(vertexID);
    }
}`,"org.gradoop.io.reader.SimpleVertexReader.getTokens_String":
 `/**
 * Separates the whole line using {@code LINE_TOKEN_SEPARATOR}.
 *
 * @param line single input line
 * @return token array
 */
private String[] getTokens(String line) {
    return LINE_TOKEN_SEPARATOR.split(line);
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertexWithOutgoingEdges_Long_Iterable":
 `/**
 * Creates a vertex with outgoing edges.
 *
 * @param vertexID      vertex identifier
 * @param outgoingEdges edges starting at that vertex
 * @return vertex with identifier and outgoing edges
 */
public static Vertex createDefaultVertexWithOutgoingEdges(final Long vertexID, final Iterable<Edge> outgoingEdges) {
    return createDefaultVertexWithEdges(vertexID, outgoingEdges, null);
}`,"org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>_Long_Iterable_Map":
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
}`,"org.gradoop.model.impl.EdgeFactory.createDefaultEdge_Long_Long":
 `/**
 * Creates a default edge based on the given parameters.
 *
 * @param otherID the id of the vertex that edge is connected to
 * @param index   vertex centric edge index for parallel edges
 * @return edge connected to otherID with index
 */
public static Edge createDefaultEdge(final Long otherID, final Long index) {
    return createDefaultEdgeWithLabel(otherID, GConstants.DEFAULT_EDGE_LABEL, index);
}`,"org.gradoop.model.impl.EdgeFactory.checkIndex_Long":
 `/**
 * Checks if {@code index} is valid.
 *
 * @param index internal index of edge
 */
private static void checkIndex(Long index) {
    if (index == null) {
        throw new IllegalArgumentException("index must not be null");
    }
}`,"org.gradoop.model.impl.DefaultVertex.getOutgoingEdges_":
 `/**
 * {@inheritDoc}
 */
@Override
public Iterable<Edge> getOutgoingEdges() {
    return outgoingEdges;
}`,"org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel_Long_String_Long":
 `/**
 * Creates a default edge based on the given parameters.
 *
 * @param otherID the id of the vertex that edge is connected to
 * @param label   edge label
 * @param index   vertex centric edge index for parallel edges
 * @return edge connected to otherID with label and index
 */
public static Edge createDefaultEdgeWithLabel(final Long otherID, final String label, final Long index) {
    return createDefaultEdge(otherID, label, index, null);
}`,"org.gradoop.model.impl.DefaultEdge.getIndex_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getIndex() {
    return this.index;
}`,"org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest_":
 `@Test
public void readBasicGraphTest() throws IOException {
    VertexLineReader reader = new SimpleVertexReader();
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : BASIC_GRAPH) {
        vertices.add(reader.readVertex(line));
    }
    validateBasicGraphVertices(vertices);
}`,"org.gradoop.model.impl.PropertyContainer.<init>_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param properties key-value-map
 */
protected PropertyContainer(Map<String, Object> properties) {
    this.properties = properties;
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
}`,"org.gradoop.model.impl.DefaultEdge.getOtherID_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getOtherID() {
    return this.otherID;
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertexWithEdges_Long_Iterable_Iterable":
 `/**
 * Creates a vertex with outgoing and incoming edges.
 *
 * @param vertexID      vertex identifier
 * @param outgoingEdges edges starting at that vertex
 * @param incomingEdges edges ending in that vertex
 * @return vertex with identifier, outgoing and incoming edges
 */
public static Vertex createDefaultVertexWithEdges(final Long vertexID, final Iterable<Edge> outgoingEdges, final Iterable<Edge> incomingEdges) {
    return createDefaultVertex(vertexID, null, null, outgoingEdges, incomingEdges, null);
}`,"org.gradoop.model.impl.EdgeFactory.checkLabel_String":
 `/**
 * Checks if {@code label} is valid (not null or empty).
 *
 * @param label edge label
 */
private static void checkLabel(String label) {
    if (label == null || "".equals(label)) {
        throw new IllegalArgumentException("label must not be null or empty");
    }
}`,"org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_":
 `/**
 * {@inheritDoc}
 */
@Override
public Long getID() {
    return id;
}`,"org.gradoop.model.impl.EdgeFactory.createDefaultEdge_Long_String_Long_Map":
 `/**
 * Creates a default edge based on the given parameters.
 *
 * @param otherID    the id of the vertex that edge is connected to
 * @param label      edge label
 * @param index      vertex centric edge index for parallel edges
 * @param properties edge properties
 * @return edge connected to otherID with label, properties and index
 */
public static Edge createDefaultEdge(final Long otherID, final String label, final Long index, final Map<String, Object> properties) {
    checkID(otherID);
    checkIndex(index);
    checkLabel(label);
    return new DefaultEdge(otherID, label, index, properties);
}`,"org.gradoop.io.reader.SimpleVertexReader.<init>_":
 ``,"org.gradoop.GradoopTest.validateBasicGraphEdges_List_int_long":
 `private void validateBasicGraphEdges(List<Edge> edgeList, int expectedCount, long... otherIDs) {
    assertThat(edgeList.size(), is(expectedCount));
    for (int i = 0; i < otherIDs.length; i++) {
        boolean match = false;
        for (Edge e : edgeList) {
            if (e.getOtherID() == otherIDs[i]) {
                match = true;
                assertThat(e.getIndex(), is((long) i));
            }
        }
        if (!match) {
            assertTrue("edge list contains wrong edges", false);
        }
    }
}`,"org.gradoop.model.impl.SingleLabeledPropertyContainer.<init>_String_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param label      label
 * @param properties key-value-map
 */
protected SingleLabeledPropertyContainer(String label, Map<String, Object> properties) {
    super(properties);
    this.label = label;
}`,"org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_":
 `/**
 * {@inheritDoc}
 */
@Override
public int getOutgoingDegree() {
    return (outgoingEdges != null) ? Iterables.size(outgoingEdges) : 0;
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
}`,"org.gradoop.model.impl.EdgeFactory.checkID_Long":
 `/**
 * Checks if {@code otherID} is valid.
 *
 * @param otherID id of entity that edge points to
 */
private static void checkID(Long otherID) {
    if (otherID == null) {
        throw new IllegalArgumentException("otherID must not be null");
    }
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertexWithID_Long":
 `/**
 * Creates a vertex using the given identifier.
 *
 * @param vertexID vertex identifier
 * @return vertex with identifier
 */
public static Vertex createDefaultVertexWithID(final Long vertexID) {
    return createDefaultVertex(vertexID, null, null, null, null, null);
}`,"org.gradoop.io.reader.SingleVertexReader.<init>_":
 ``,"org.gradoop.model.impl.DefaultEdge.<init>_Long_String_Long_Map":
 `/**
 * Creates an edge instance based on the given parameters.
 *
 * @param otherID    the id of the vertex that edge is connected to
 * @param label      edge label
 * @param index      vertex centric edge index for parallel edges
 * @param properties edge properties
 */
DefaultEdge(final Long otherID, final String label, final Long index, final Map<String, Object> properties) {
    super(label, properties);
    this.otherID = otherID;
    this.index = index;
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
}`,"org.gradoop.GradoopTest.validateBasicGraphVertices_List":
 `protected void validateBasicGraphVertices(List<Vertex> vertices) {
    assertEquals(4, vertices.size());
    for (Vertex v : vertices) {
        Long i = v.getID();
        List<Edge> edgeList = Lists.newArrayList();
        if (v.getOutgoingDegree() > 0) {
            edgeList = Lists.newArrayList(v.getOutgoingEdges());
        }
        if (i.equals(0L)) {
            validateBasicGraphEdges(edgeList, 2, 1, 2);
        } else if (i.equals(1L)) {
            validateBasicGraphEdges(edgeList, 2, 0, 2);
        } else if (i.equals(2L)) {
            validateBasicGraphEdges(edgeList, 1, 1);
        } else if (i.equals(3L)) {
            validateBasicGraphEdges(edgeList, 0);
        }
    }
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
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
  "kiekerPattern" : "public void org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-core",
  "name" : "io.reader.SimpleVertexReaderTest#readBasicGraphTest",
  "key" : "org.gradoop.io.reader.SimpleVertexReaderTest.readBasicGraphTest_",
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
    "call" : "org.gradoop.io.reader.SingleVertexReader#<init>",
    "kiekerPattern" : "public new org.gradoop.io.reader.SingleVertexReader.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "io.reader.SingleVertexReader#<init>",
    "key" : "org.gradoop.io.reader.SingleVertexReader.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.io.reader.SimpleVertexReader#<init>",
    "kiekerPattern" : "public new org.gradoop.io.reader.SimpleVertexReader.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "io.reader.SimpleVertexReader#<init>",
    "key" : "org.gradoop.io.reader.SimpleVertexReader.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.io.reader.SimpleVertexReader#readVertex",
    "kiekerPattern" : "public org.gradoop.model.Vertex org.gradoop.io.reader.SimpleVertexReader.readVertex(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "io.reader.SimpleVertexReader#readVertex",
    "key" : "org.gradoop.io.reader.SimpleVertexReader.readVertex_String",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.io.reader.SimpleVertexReader#getTokens",
      "kiekerPattern" : "private java.lang.String[] org.gradoop.io.reader.SimpleVertexReader.getTokens(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "io.reader.SimpleVertexReader#getTokens",
      "key" : "org.gradoop.io.reader.SimpleVertexReader.getTokens_String",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.SimpleVertexReader#readVertex",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
      "kiekerPattern" : "public static org.gradoop.model.Edge org.gradoop.model.impl.EdgeFactory.createDefaultEdge(java.lang.Long,java.lang.Long)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.EdgeFactory#createDefaultEdge",
      "key" : "org.gradoop.model.impl.EdgeFactory.createDefaultEdge_Long_Long",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.SimpleVertexReader#readVertex",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdgeWithLabel",
        "kiekerPattern" : "public static org.gradoop.model.Edge org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel(java.lang.Long,java.lang.String,java.lang.Long)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.EdgeFactory#createDefaultEdgeWithLabel",
        "key" : "org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel_Long_String_Long",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
          "kiekerPattern" : "public static org.gradoop.model.Edge org.gradoop.model.impl.EdgeFactory.createDefaultEdge(java.lang.Long,java.lang.String,java.lang.Long,java.util.Map)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "model.impl.EdgeFactory#createDefaultEdge",
          "key" : "org.gradoop.model.impl.EdgeFactory.createDefaultEdge_Long_String_Long_Map",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdgeWithLabel",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.EdgeFactory#checkID",
            "kiekerPattern" : "private static void org.gradoop.model.impl.EdgeFactory.checkID(java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.EdgeFactory#checkID",
            "key" : "org.gradoop.model.impl.EdgeFactory.checkID_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.EdgeFactory#checkIndex",
            "kiekerPattern" : "private static void org.gradoop.model.impl.EdgeFactory.checkIndex(java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.EdgeFactory#checkIndex",
            "key" : "org.gradoop.model.impl.EdgeFactory.checkIndex_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.EdgeFactory#checkLabel",
            "kiekerPattern" : "private static void org.gradoop.model.impl.EdgeFactory.checkLabel(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.EdgeFactory#checkLabel",
            "key" : "org.gradoop.model.impl.EdgeFactory.checkLabel_String",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.PropertyContainer#<init>",
            "kiekerPattern" : "protected new org.gradoop.model.impl.PropertyContainer.<init>(java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.PropertyContainer#<init>",
            "key" : "org.gradoop.model.impl.PropertyContainer.<init>_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#<init>",
            "kiekerPattern" : "protected new org.gradoop.model.impl.SingleLabeledPropertyContainer.<init>(java.lang.String,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.SingleLabeledPropertyContainer#<init>",
            "key" : "org.gradoop.model.impl.SingleLabeledPropertyContainer.<init>_String_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.DefaultEdge#<init>",
            "kiekerPattern" : "new org.gradoop.model.impl.DefaultEdge.<init>(java.lang.Long,java.lang.String,java.lang.Long,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.DefaultEdge#<init>",
            "key" : "org.gradoop.model.impl.DefaultEdge.<init>_Long_String_Long_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
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
      } ]
    }, {
      "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithOutgoingEdges",
      "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithOutgoingEdges(java.lang.Long,java.lang.Iterable)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.VertexFactory#createDefaultVertexWithOutgoingEdges",
      "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithOutgoingEdges_Long_Iterable",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.SimpleVertexReader#readVertex",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithEdges",
        "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithEdges(java.lang.Long,java.lang.Iterable,java.lang.Iterable)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.VertexFactory#createDefaultVertexWithEdges",
        "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithEdges_Long_Iterable_Iterable",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithOutgoingEdges",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertex(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "model.impl.VertexFactory#createDefaultVertex",
          "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_Iterable_Map_Iterable_Iterable_Iterable",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.VertexFactory#checkVertexID",
            "kiekerPattern" : "private static void org.gradoop.model.impl.VertexFactory.checkVertexID(java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.VertexFactory#checkVertexID",
            "key" : "org.gradoop.model.impl.VertexFactory.checkVertexID_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.PropertyContainer#<init>",
            "kiekerPattern" : "protected new org.gradoop.model.impl.PropertyContainer.<init>(java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.PropertyContainer#<init>",
            "key" : "org.gradoop.model.impl.PropertyContainer.<init>_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#<init>",
            "kiekerPattern" : "protected new org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>(java.lang.Long,java.lang.Iterable,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.MultiLabeledPropertyContainer#<init>",
            "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>_Long_Iterable_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.model.impl.DefaultVertex#<init>",
            "kiekerPattern" : "new org.gradoop.model.impl.DefaultVertex.<init>(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.DefaultVertex#<init>",
            "key" : "org.gradoop.model.impl.DefaultVertex.<init>_Long_Iterable_Map_Iterable_Iterable_Iterable",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.model.impl.DefaultVertex#initGraphs",
              "kiekerPattern" : "private void org.gradoop.model.impl.DefaultVertex.initGraphs(java.lang.Iterable)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "model.impl.DefaultVertex#initGraphs",
              "key" : "org.gradoop.model.impl.DefaultVertex.initGraphs_Iterable",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.DefaultVertex#<init>",
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
    }, {
      "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithID",
      "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithID(java.lang.Long)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.VertexFactory#createDefaultVertexWithID",
      "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithID_Long",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.SimpleVertexReader#readVertex",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
        "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertex(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.VertexFactory#createDefaultVertex",
        "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_Iterable_Map_Iterable_Iterable_Iterable",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithID",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.model.impl.VertexFactory#checkVertexID",
          "kiekerPattern" : "private static void org.gradoop.model.impl.VertexFactory.checkVertexID(java.lang.Long)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "model.impl.VertexFactory#checkVertexID",
          "key" : "org.gradoop.model.impl.VertexFactory.checkVertexID_Long",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.PropertyContainer#<init>",
          "kiekerPattern" : "protected new org.gradoop.model.impl.PropertyContainer.<init>(java.util.Map)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "model.impl.PropertyContainer#<init>",
          "key" : "org.gradoop.model.impl.PropertyContainer.<init>_Map",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#<init>",
          "kiekerPattern" : "protected new org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>(java.lang.Long,java.lang.Iterable,java.util.Map)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "model.impl.MultiLabeledPropertyContainer#<init>",
          "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.<init>_Long_Iterable_Map",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.DefaultVertex#<init>",
          "kiekerPattern" : "new org.gradoop.model.impl.DefaultVertex.<init>(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "model.impl.DefaultVertex#<init>",
          "key" : "org.gradoop.model.impl.DefaultVertex.<init>_Long_Iterable_Map_Iterable_Iterable_Iterable",
          "otherKey" : null,
          "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.DefaultVertex#initGraphs",
            "kiekerPattern" : "private void org.gradoop.model.impl.DefaultVertex.initGraphs(java.lang.Iterable)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "model.impl.DefaultVertex#initGraphs",
            "key" : "org.gradoop.model.impl.DefaultVertex.initGraphs_Iterable",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.DefaultVertex#<init>",
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
      } ]
    } ]
  }, {
    "call" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
    "kiekerPattern" : "protected void org.gradoop.GradoopTest.validateBasicGraphVertices(java.util.List)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "GradoopTest#validateBasicGraphVertices",
    "key" : "org.gradoop.GradoopTest.validateBasicGraphVertices_List",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getID",
      "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.MultiLabeledPropertyContainer.getID()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.MultiLabeledPropertyContainer#getID",
      "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_",
      "otherKey" : null,
      "parent" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.model.impl.DefaultVertex#getOutgoingDegree",
      "kiekerPattern" : "public int org.gradoop.model.impl.DefaultVertex.getOutgoingDegree()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.DefaultVertex#getOutgoingDegree",
      "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_",
      "otherKey" : null,
      "parent" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.model.impl.DefaultVertex#getOutgoingEdges",
      "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.DefaultVertex.getOutgoingEdges()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.DefaultVertex#getOutgoingEdges",
      "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingEdges_",
      "otherKey" : null,
      "parent" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.GradoopTest#validateBasicGraphEdges",
      "kiekerPattern" : "private void org.gradoop.GradoopTest.validateBasicGraphEdges(java.util.List,int,long)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "GradoopTest#validateBasicGraphEdges",
      "key" : "org.gradoop.GradoopTest.validateBasicGraphEdges_List_int_long",
      "otherKey" : null,
      "parent" : "org.gradoop.GradoopTest#validateBasicGraphVertices",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.DefaultEdge#getOtherID",
        "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.DefaultEdge.getOtherID()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.DefaultEdge#getOtherID",
        "key" : "org.gradoop.model.impl.DefaultEdge.getOtherID_",
        "otherKey" : null,
        "parent" : "org.gradoop.GradoopTest#validateBasicGraphEdges",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.DefaultEdge#getIndex",
        "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.DefaultEdge.getIndex()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.DefaultEdge#getIndex",
        "key" : "org.gradoop.model.impl.DefaultEdge.getIndex_",
        "otherKey" : null,
        "parent" : "org.gradoop.GradoopTest#validateBasicGraphEdges",
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
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 357},
   width = 3206- margin.right - margin.left,
   height = 700 - margin.top - margin.bottom;
