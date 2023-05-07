if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 937394435a5e1430d025a1d7cc9f47224ea805b0 -test org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest\")'>937394435a5e1430d025a1d7cc9f47224ea805b0</a><br>Test Case: org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest<br>";
}

var source = {"current":
{
 "org.gradoop.io.reader.RDFReader.simpleValidate_String":
 `/**
 * Simple validation of input line, not complete.
 *
 * @param line single input line
 * @return input line or null for malformed triple
 */
private String[] simpleValidate(String line) {
    String[] empty = {};
    String[] tokens = getTokens(line);
    String s = tokens[0];
    String p = tokens[1];
    String o = tokens[2];
    if (isNTResource(p)) {
        // predicate has to be URI
        if (isNTResource(s) || s.charAt(0) == '_') {
            //subject has to be blank node or URI
            if (isNTResource(o) || o.charAt(0) == '_' || o.charAt(0) == '"') {
                s = getPlainResource(s);
                p = getPlainResource(p);
                if (isNTResource(o)) {
                    o = getPlainResource(o);
                }
                return new String[] { s, p, o };
            } else {
                // malformed object
                return empty;
            }
        } else {
            // malformed subject
            return empty;
        }
    } else {
        // malformed predicate
        return empty;
    }
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
}`,"org.gradoop.model.impl.PropertyContainer.addProperty_String_Object":
 `/**
 * {@inheritDoc}
 */
@Override
public void addProperty(String key, Object value) {
    if (key == null || "".equals(key)) {
        throw new IllegalArgumentException("key must not be null or empty");
    }
    if (value == null) {
        throw new IllegalArgumentException("value must not be null");
    }
    if (this.properties == null) {
        this.properties = Maps.newHashMap();
    }
    this.properties.put(key, value);
}`,"org.gradoop.model.impl.MultiLabeledPropertyContainer.getLabels_":
 `/**
 * {@inheritDoc}
 */
@Override
public Iterable<String> getLabels() {
    return labels;
}`,"org.gradoop.model.impl.MultiLabeledPropertyContainer.addLabel_String":
 `/**
 * {@inheritDoc}
 */
@Override
public void addLabel(String label) {
    if (label == null || "".equals(label)) {
        throw new IllegalArgumentException("label must not be null or empty");
    }
    if (this.labels == null) {
        this.labels = Lists.newArrayList();
    }
    this.labels.add(label);
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
}`,"org.gradoop.model.impl.DefaultVertex.getIncomingEdges_":
 `/**
 * {@inheritDoc}
 */
@Override
public Iterable<Edge> getIncomingEdges() {
    return incomingEdges;
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
}`,"org.gradoop.io.reader.RDFReader.getTokens_String":
 `/**
 * Separates the whole line using {@code LINE_TOKEN_SEPARATOR}.
 *
 * @param line single input line
 * @return token array
 */
private String[] getTokens(String line) {
    return LINE_TOKEN_SEPARATOR.split(line);
}`,"org.gradoop.model.impl.PropertyContainer.<init>_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param properties key-value-map
 */
protected PropertyContainer(Map<String, Object> properties) {
    this.properties = properties;
}`,"org.gradoop.io.reader.RDFReader.getLiteralValue_String":
 `/**
 * Get value of RDF literal
 *
 * @param token literal (RDF object)
 * @return literal value
 */
private String getLiteralValue(String token) {
    Matcher m = LITERAL_VALUE.matcher(token);
    if (m.find()) {
        return m.group(1);
    }
    return "";
}`,"org.gradoop.model.impl.PropertyContainer.getPropertyKeys_":
 `/**
 * {@inheritDoc}
 */
@Override
public Iterable<String> getPropertyKeys() {
    return (properties != null) ? properties.keySet() : null;
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
}`,"org.gradoop.io.reader.RDFReaderTest.checkLabel_Vertex_String":
 `protected void checkLabel(Vertex vertex, String label) {
    for (String s : vertex.getLabels()) {
        assertEquals(s, label);
    }
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
}`,"org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel_":
 `/**
 * {@inheritDoc}
 */
@Override
public String getLabel() {
    return this.label;
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
}`,"org.gradoop.io.reader.RDFReader.getDatatype_String":
 `/**
 * Get data type of RDF literal, if given
 *
 * @param token literal (RDF object)
 * @return extracted data type
 */
private String getDatatype(String token) {
    Matcher m = LITERAL_DATATYPE.matcher(token);
    if (m.find()) {
        return m.group(1);
    }
    return "";
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
}`,"org.gradoop.io.reader.RDFReader.<init>_":
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
}`,"org.gradoop.model.impl.PropertyContainer.getProperty_String":
 `/**
 * {@inheritDoc}
 */
@Override
public Object getProperty(String key) {
    return (properties != null) ? properties.get(key) : null;
}`,"org.gradoop.io.reader.RDFReaderTest.createVerticesFromRDF_":
 `protected List<Vertex> createVerticesFromRDF() {
    VertexLineReader reader = new RDFReader();
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : RDF_NTRIPLES) {
        for (Vertex v : reader.readVertexList(line)) {
            vertices.add(v);
        }
    }
    return vertices;
}`,"org.gradoop.io.reader.RDFReader.readVertexList_String":
 `/**
 * {@inheritDoc}
 */
@Override
public List<Vertex> readVertexList(String line) {
    String[] triple = simpleValidate(line);
    if (triple.length == 0) {
        return null;
    }
    String s = triple[0];
    String p = triple[1];
    String o = triple[2];
    List<Vertex> vList = Lists.newArrayListWithCapacity(2);
    Long sourceID = HASH_FUNCTION.newHasher().putString(s, Charsets.UTF_8).hash().asLong();
    Long targetID = HASH_FUNCTION.newHasher().putString(o, Charsets.UTF_8).hash().asLong();
    if (o.startsWith("\"")) {
        // create only one vertex with property
        Vertex vertex = VertexFactory.createDefaultVertexWithLabels(sourceID, Lists.newArrayList(s), null);
        switch(getDatatype(o)) {
            case "integer":
                vertex.addProperty(p, Integer.parseInt(getLiteralValue(o)));
                break;
            case "double":
            case "float":
            case "decimal":
                vertex.addProperty(p, Double.parseDouble(getLiteralValue(o)));
                break;
            default:
                vertex.addProperty(p, getLiteralValue(o));
                break;
        }
        vList.add(vertex);
    } else {
        // 2x resource -> 2x vertex
        //outgoing edge on source vertex
        Long edgeOutIndex = HASH_FUNCTION.newHasher().putString(s + p + o, Charsets.UTF_8).hash().asLong();
        Edge edgeOut = EdgeFactory.createDefaultEdgeWithLabel(targetID, p, edgeOutIndex);
        Vertex sourceVertex = VertexFactory.createDefaultVertexWithLabels(sourceID, Lists.newArrayList(s), Lists.newArrayList(edgeOut));
        vList.add(sourceVertex);
        //incoming edge on target vertex
        Long edgeInIndex = HASH_FUNCTION.newHasher().putString(o + p + s, Charsets.UTF_8).hash().asLong();
        Edge edgeIn = EdgeFactory.createDefaultEdgeWithLabel(sourceID, p, edgeInIndex);
        Vertex targetVertex = VertexFactory.createDefaultVertexWithEdges(targetID, null, Lists.newArrayList(edgeIn));
        targetVertex.addLabel(o);
        vList.add(targetVertex);
    }
    return vList;
}`,"org.gradoop.io.reader.RDFReader.isNTResource_String":
 `/**
 * Checks token for starting '<' and ending '>'
 *
 * @param token part of a RDF triple
 * @return token without '<' and '>'
 */
private boolean isNTResource(String token) {
    return RESOURCE.matcher(token).matches();
}`,"org.gradoop.io.reader.RDFReader.getPlainResource_String":
 `/**
 * Retrieves plain string from i.e., <www.example.net>
 *
 * @param token part of a RDF triple
 * @return token without '<' and '>'
 */
private String getPlainResource(String token) {
    Matcher m = RESOURCE.matcher(token);
    if (m.matches()) {
        return m.group(1);
    }
    return "";
}`,"org.gradoop.io.reader.RDFReaderTest.checkSimpleRDFNTripleInputTest_":
 `@Test
public void checkSimpleRDFNTripleInputTest() {
    for (Vertex v : createVerticesFromRDF()) {
        long id = v.getID();
        if (id == lgdID) {
            checkLabel(v, lgd);
            for (Edge e : v.getOutgoingEdges()) {
                assertEquals(e.getOtherID(), geoID);
                assertEquals(e.getLabel(), eLabel);
            }
        } else if (id == geoID) {
            checkLabel(v, geo);
            for (Edge e : v.getIncomingEdges()) {
                assertTrue((long) e.getOtherID() == lgdID || (long) e.getOtherID() == dbpID);
                assertEquals(e.getLabel(), eLabel);
            }
        } else if (id == dbpID) {
            checkLabel(v, dbp);
            if (v.getOutgoingDegree() < 1) {
                for (String prop : v.getPropertyKeys()) {
                    if (prop.equals(post)) {
                        assertEquals(v.getProperty(prop), postVal);
                    } else if (prop.equals(pop)) {
                        assertEquals(v.getProperty(prop), popVal);
                    }
                }
            } else {
                for (Edge e : v.getOutgoingEdges()) {
                    assertTrue((long) e.getOtherID() == geoID || (long) e.getOtherID() == hedbpID);
                    assertEquals(e.getLabel(), eLabel);
                }
            }
        } else if (id == hedbpID) {
            checkLabel(v, hedbp);
            for (Edge e : v.getIncomingEdges()) {
                assertEquals(e.getOtherID(), dbpID);
                assertEquals(e.getLabel(), eLabel);
            }
        } else {
            assertTrue("wrong triple contained", false);
        }
    }
}`,"org.gradoop.model.impl.VertexFactory.createDefaultVertexWithLabels_Long_Iterable_Iterable":
 `/**
 * Creates a vertex with labels and outgoing edges.
 *
 * @param vertexID      vertex identifier
 * @param labels        vertex labels
 * @param outgoingEdges edges starting at that vertex
 * @return vertex with identifier, labels and outgoing edges
 */
public static Vertex createDefaultVertexWithLabels(final Long vertexID, final Iterable<String> labels, final Iterable<Edge> outgoingEdges) {
    return createDefaultVertex(vertexID, labels, null, outgoingEdges, null, null);
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
  "call" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
  "kiekerPattern" : "public void org.gradoop.io.reader.RDFReaderTest.checkSimpleRDFNTripleInputTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-core",
  "name" : "io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
  "key" : "org.gradoop.io.reader.RDFReaderTest.checkSimpleRDFNTripleInputTest_",
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
    "call" : "org.gradoop.io.reader.RDFReaderTest#createVerticesFromRDF",
    "kiekerPattern" : "protected java.util.List org.gradoop.io.reader.RDFReaderTest.createVerticesFromRDF()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "io.reader.RDFReaderTest#createVerticesFromRDF",
    "key" : "org.gradoop.io.reader.RDFReaderTest.createVerticesFromRDF_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.io.reader.RDFReader#<init>",
      "kiekerPattern" : "public new org.gradoop.io.reader.RDFReader.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "io.reader.RDFReader#<init>",
      "key" : "org.gradoop.io.reader.RDFReader.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.RDFReaderTest#createVerticesFromRDF",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.io.reader.RDFReader#readVertexList",
      "kiekerPattern" : "public java.util.List org.gradoop.io.reader.RDFReader.readVertexList(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "io.reader.RDFReader#readVertexList",
      "key" : "org.gradoop.io.reader.RDFReader.readVertexList_String",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.RDFReaderTest#createVerticesFromRDF",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.io.reader.RDFReader#simpleValidate",
        "kiekerPattern" : "private java.lang.String[] org.gradoop.io.reader.RDFReader.simpleValidate(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "io.reader.RDFReader#simpleValidate",
        "key" : "org.gradoop.io.reader.RDFReader.simpleValidate_String",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.io.reader.RDFReader#getTokens",
          "kiekerPattern" : "private java.lang.String[] org.gradoop.io.reader.RDFReader.getTokens(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "io.reader.RDFReader#getTokens",
          "key" : "org.gradoop.io.reader.RDFReader.getTokens_String",
          "otherKey" : null,
          "parent" : "org.gradoop.io.reader.RDFReader#simpleValidate",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.io.reader.RDFReader#isNTResource",
          "kiekerPattern" : "private boolean org.gradoop.io.reader.RDFReader.isNTResource(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "io.reader.RDFReader#isNTResource",
          "key" : "org.gradoop.io.reader.RDFReader.isNTResource_String",
          "otherKey" : null,
          "parent" : "org.gradoop.io.reader.RDFReader#simpleValidate",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.io.reader.RDFReader#getPlainResource",
          "kiekerPattern" : "private java.lang.String org.gradoop.io.reader.RDFReader.getPlainResource(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "io.reader.RDFReader#getPlainResource",
          "key" : "org.gradoop.io.reader.RDFReader.getPlainResource_String",
          "otherKey" : null,
          "parent" : "org.gradoop.io.reader.RDFReader#simpleValidate",
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
        "call" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdgeWithLabel",
        "kiekerPattern" : "public static org.gradoop.model.Edge org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel(java.lang.Long,java.lang.String,java.lang.Long)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.EdgeFactory#createDefaultEdgeWithLabel",
        "key" : "org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel_Long_String_Long",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
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
      }, {
        "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithLabels",
        "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithLabels(java.lang.Long,java.lang.Iterable,java.lang.Iterable)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.VertexFactory#createDefaultVertexWithLabels",
        "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithLabels_Long_Iterable_Iterable",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
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
          "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithLabels",
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
      }, {
        "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithEdges",
        "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithEdges(java.lang.Long,java.lang.Iterable,java.lang.Iterable)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.VertexFactory#createDefaultVertexWithEdges",
        "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithEdges_Long_Iterable_Iterable",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
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
      }, {
        "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#addLabel",
        "kiekerPattern" : "public void org.gradoop.model.impl.MultiLabeledPropertyContainer.addLabel(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.MultiLabeledPropertyContainer#addLabel",
        "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.addLabel_String",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.io.reader.RDFReader#getDatatype",
        "kiekerPattern" : "private java.lang.String org.gradoop.io.reader.RDFReader.getDatatype(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "io.reader.RDFReader#getDatatype",
        "key" : "org.gradoop.io.reader.RDFReader.getDatatype_String",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.io.reader.RDFReader#getLiteralValue",
        "kiekerPattern" : "private java.lang.String org.gradoop.io.reader.RDFReader.getLiteralValue(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "io.reader.RDFReader#getLiteralValue",
        "key" : "org.gradoop.io.reader.RDFReader.getLiteralValue_String",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.PropertyContainer#addProperty",
        "kiekerPattern" : "public void org.gradoop.model.impl.PropertyContainer.addProperty(java.lang.String,java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "model.impl.PropertyContainer#addProperty",
        "key" : "org.gradoop.model.impl.PropertyContainer.addProperty_String_Object",
        "otherKey" : null,
        "parent" : "org.gradoop.io.reader.RDFReader#readVertexList",
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
    "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getID",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.MultiLabeledPropertyContainer.getID()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.MultiLabeledPropertyContainer#getID",
    "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.io.reader.RDFReaderTest#checkLabel",
    "kiekerPattern" : "protected void org.gradoop.io.reader.RDFReaderTest.checkLabel(org.gradoop.model.Vertex,java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "io.reader.RDFReaderTest#checkLabel",
    "key" : "org.gradoop.io.reader.RDFReaderTest.checkLabel_Vertex_String",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getLabels",
      "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.MultiLabeledPropertyContainer.getLabels()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "model.impl.MultiLabeledPropertyContainer#getLabels",
      "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getLabels_",
      "otherKey" : null,
      "parent" : "org.gradoop.io.reader.RDFReaderTest#checkLabel",
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
    "call" : "org.gradoop.model.impl.DefaultVertex#getOutgoingEdges",
    "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.DefaultVertex.getOutgoingEdges()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.DefaultVertex#getOutgoingEdges",
    "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingEdges_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultEdge#getOtherID",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.DefaultEdge.getOtherID()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.DefaultEdge#getOtherID",
    "key" : "org.gradoop.model.impl.DefaultEdge.getOtherID_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#getLabel",
    "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.SingleLabeledPropertyContainer#getLabel",
    "key" : "org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertex#getIncomingEdges",
    "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.DefaultVertex.getIncomingEdges()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.DefaultVertex#getIncomingEdges",
    "key" : "org.gradoop.model.impl.DefaultVertex.getIncomingEdges_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
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
    "name" : "model.impl.DefaultVertex#getOutgoingDegree",
    "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.PropertyContainer#getPropertyKeys",
    "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.PropertyContainer.getPropertyKeys()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.PropertyContainer#getPropertyKeys",
    "key" : "org.gradoop.model.impl.PropertyContainer.getPropertyKeys_",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.PropertyContainer#getProperty",
    "kiekerPattern" : "public java.lang.Object org.gradoop.model.impl.PropertyContainer.getProperty(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "model.impl.PropertyContainer#getProperty",
    "key" : "org.gradoop.model.impl.PropertyContainer.getProperty_String",
    "otherKey" : null,
    "parent" : "org.gradoop.io.reader.RDFReaderTest#checkSimpleRDFNTripleInputTest",
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
var margin = {top: 20, right: 120, bottom: 20, left: 378},
   width = 3087- margin.right - margin.left,
   height = 1120 - margin.top - margin.bottom;
