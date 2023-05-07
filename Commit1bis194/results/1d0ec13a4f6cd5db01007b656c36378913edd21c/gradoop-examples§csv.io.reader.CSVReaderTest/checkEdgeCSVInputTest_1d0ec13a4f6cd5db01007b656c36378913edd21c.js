if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 1d0ec13a4f6cd5db01007b656c36378913edd21c -test csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest\")'>1d0ec13a4f6cd5db01007b656c36378913edd21c</a><br>Test Case: csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.PropertyContainer.addProperty_String_Object":
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
}`,"org.gradoop.csv.io.reader.CSVReader.readVertexList_String":
 `/**
 * {@inheritDoc}
 */
@Override
public List<Vertex> readVertexList(String line) {
    List<Vertex> vList = setVList();
    if (initialStep) {
        initialStep(line);
    } else {
        if (isNodeCSV) {
            vList.add(readVertex(line));
        } else {
            readEdges(vList, line);
        }
    }
    return vList;
}`,"csv.io.reader.CSVReaderTest.createEdgesFromCSV_":
 `private List<Vertex> createEdgesFromCSV() {
    ConfigurableVertexLineReader reader = new CSVReader();
    Configuration conf = new Configuration();
    conf.set(CSVReader.META_DATA, EDGE_META);
    conf.set(CSVReader.LABEL, "workedAt");
    conf.set(CSVReader.TYPE, "edge");
    reader.setConf(conf);
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : KNOWS_CSV) {
        for (Vertex v : reader.readVertexList(line)) {
            vertices.add(v);
        }
    }
    return vertices;
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
}`,"org.gradoop.model.impl.PropertyContainer.<init>_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param properties key-value-map
 */
protected PropertyContainer(Map<String, Object> properties) {
    this.properties = properties;
}`,"org.gradoop.csv.io.reader.CSVReader.readTypes_String":
 `/**
 * Load Metadata Types e.g. long|string|string|...
 *
 * @param metaData configuration parameter
 */
private void readTypes(String metaData) {
    try {
        BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(metaData), Charset.forName("UTF-8")));
        String line;
        while ((line = in.readLine()) != null) {
            types = getTokens(line);
        }
        in.close();
    } catch (IOException e) {
        e.printStackTrace();
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
}`,"csv.io.reader.CSVReaderTest.checkOutgoingEdge_List":
 `protected void checkOutgoingEdge(List<Edge> edges) {
    for (Edge edge : edges) {
        assertEquals(edge.getLabel(), edgeLabel);
    }
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
}`,"csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest_":
 `@Test
public void checkEdgeCSVInputTest() {
    List<Vertex> vlist = createEdgesFromCSV();
    for (Vertex v : vlist) {
        long id = v.getID();
        assertEquals(vlist.size(), 4);
        if (id == person2) {
            assertEquals(v.getOutgoingDegree(), 1);
            assertEquals(v.getIncomingDegree(), 0);
            checkOutgoingEdge(Lists.newArrayList(v.getOutgoingEdges()));
        } else if (id == person3) {
            assertEquals(v.getIncomingDegree(), 1);
            assertEquals(v.getOutgoingDegree(), 0);
            checkIncomingEdge(Lists.newArrayList(v.getIncomingEdges()));
        } else if (id == person4) {
            assertEquals(v.getIncomingDegree(), 0);
            assertEquals(v.getOutgoingDegree(), 1);
            checkOutgoingEdge(Lists.newArrayList(v.getOutgoingEdges()));
        } else if (id == person5) {
            assertEquals(v.getIncomingDegree(), 1);
            assertEquals(v.getOutgoingDegree(), 0);
            checkIncomingEdge(Lists.newArrayList(v.getIncomingEdges()));
        }
    }
}`,"org.gradoop.csv.io.reader.CSVReader.getTokens_String":
 `/**
 * Splits a line into tokens
 *
 * @param line line of csv input
 * @return tokens as array
 */
private String[] getTokens(String line) {
    return LINE_TOKEN_SEPARATOR.split(line);
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
}`,"org.gradoop.csv.io.reader.CSVReader.initialStep_String":
 `/**
 * Initial step: initializations and reading the headline
 *
 * @param line line of csv input
 */
private void initialStep(String line) {
    // Initialize Lists
    labels = Lists.newArrayList();
    // Get properties (e.g. FirstName, LastName...)
    properties = getTokens(line);
    // Get MetaData (e.g. long, string, string...)
    readTypes(conf.get(META_DATA));
    // Set Labels
    labels.add(conf.get(LABEL));
    // getCSVType
    isNodeCSV = isNodeCSV();
    random = new Random();
    // initialStep is over
    initialStep = false;
}`,"org.gradoop.csv.io.reader.CSVReader.setVList_":
 `/**
 * Sets the size of the initial vertex list
 *
 * @return vertex list
 */
private List<Vertex> setVList() {
    int size = conf.getInt(EXPECTED_SIZE, DEFAULT_EXPECTED_SIZE);
    if (size == 0) {
        return Lists.newArrayList();
    } else {
        return Lists.newArrayListWithExpectedSize(size);
    }
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
}`,"org.gradoop.csv.io.reader.CSVReader.isNodeCSV_":
 `/**
 * Test the type of a CSV input (node or edge)
 *
 * @return true if node input
 */
private boolean isNodeCSV() {
    return conf.get(TYPE).equals(NODE_TYPE);
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_":
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
}`,"csv.io.reader.CSVReaderTest.checkIncomingEdge_List":
 `protected void checkIncomingEdge(List<Edge> edges) {
    for (Edge edge : edges) {
        assertEquals(edge.getLabel(), edgeLabel);
    }
}`,"org.gradoop.csv.io.reader.CSVReader.readEdges_List_String":
 `/**
 * Creates vertices and edges
 *
 * @param vertices vertex list
 * @param line     line of csv input
 */
private void readEdges(List<Vertex> vertices, String line) {
    List<String> label0 = Lists.newArrayListWithExpectedSize(1);
    List<String> label1 = Lists.newArrayListWithExpectedSize(1);
    String[] tokens = getTokens(line);
    long id0 = Long.parseLong(tokens[0]);
    long id1 = Long.parseLong(tokens[1]);
    String label = conf.get(LABEL);
    label0.add(properties[0].replace(".id", ""));
    label1.add(properties[1].replace(".id", ""));
    Edge outgoing = EdgeFactory.createDefaultEdgeWithLabel(id1, label, random.nextLong());
    Edge incoming = EdgeFactory.createDefaultEdgeWithLabel(id0, label, random.nextLong());
    for (int i = 2; i < properties.length; i++) {
        switch(types[i]) {
            case "long":
                outgoing.addProperty(properties[i], Long.parseLong(tokens[i]));
                incoming.addProperty(properties[i], Long.parseLong(tokens[i]));
                break;
            case "string":
                outgoing.addProperty(properties[i], tokens[i]);
                incoming.addProperty(properties[i], tokens[i]);
                break;
            case "integer":
                outgoing.addProperty(properties[i], Integer.parseInt(tokens[i]));
                incoming.addProperty(properties[i], Integer.parseInt(tokens[i]));
                break;
            default:
                outgoing.addProperty(properties[i], tokens[i]);
                incoming.addProperty(properties[i], tokens[i]);
                break;
        }
    }
    List<Edge> outgoingEdgeList = Lists.newArrayListWithExpectedSize(1);
    outgoingEdgeList.add(outgoing);
    List<Edge> incomingEdgeList = Lists.newArrayListWithCapacity(1);
    incomingEdgeList.add(incoming);
    Vertex vex0 = VertexFactory.createDefaultVertex(id0, label0, null, outgoingEdgeList, null, null);
    Vertex vex1 = VertexFactory.createDefaultVertex(id1, label1, null, null, incomingEdgeList, null);
    vertices.add(vex0);
    vertices.add(vex1);
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
}`,"org.gradoop.csv.io.reader.CSVReader.setConf_Configuration":
 `/**
 * {@inheritDoc}
 */
@Override
public void setConf(Configuration conf) {
    this.conf = conf;
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
  "call" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
  "kiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-examples",
  "name" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
  "key" : "csv.io.reader.CSVReaderTest.checkEdgeCSVInputTest_",
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
    "call" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
    "kiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createEdgesFromCSV()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
    "key" : "csv.io.reader.CSVReaderTest.createEdgesFromCSV_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "kiekerPattern" : "public new org.gradoop.csv.io.reader.CSVReader.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#<init>",
      "key" : "org.gradoop.csv.io.reader.CSVReader.<init>_",
      "otherKey" : null,
      "parent" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.csv.io.reader.CSVReader#setConf",
      "kiekerPattern" : "public void org.gradoop.csv.io.reader.CSVReader.setConf(org.apache.hadoop.conf.Configuration)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#setConf",
      "key" : "org.gradoop.csv.io.reader.CSVReader.setConf_Configuration",
      "otherKey" : null,
      "parent" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
      "kiekerPattern" : "public java.util.List org.gradoop.csv.io.reader.CSVReader.readVertexList(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-examples",
      "name" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
      "key" : "org.gradoop.csv.io.reader.CSVReader.readVertexList_String",
      "otherKey" : null,
      "parent" : "csv.io.reader.CSVReaderTest#createEdgesFromCSV",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.csv.io.reader.CSVReader#setVList",
        "kiekerPattern" : "private java.util.List org.gradoop.csv.io.reader.CSVReader.setVList()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#setVList",
        "key" : "org.gradoop.csv.io.reader.CSVReader.setVList_",
        "otherKey" : null,
        "parent" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.csv.io.reader.CSVReader#initialStep",
        "kiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.initialStep(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#initialStep",
        "key" : "org.gradoop.csv.io.reader.CSVReader.initialStep_String",
        "otherKey" : null,
        "parent" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.csv.io.reader.CSVReader#getTokens",
          "kiekerPattern" : "private java.lang.String[] org.gradoop.csv.io.reader.CSVReader.getTokens(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-examples",
          "name" : "org.gradoop.csv.io.reader.CSVReader#getTokens",
          "key" : "org.gradoop.csv.io.reader.CSVReader.getTokens_String",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#initialStep",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.csv.io.reader.CSVReader#readTypes",
          "kiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.readTypes(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-examples",
          "name" : "org.gradoop.csv.io.reader.CSVReader#readTypes",
          "key" : "org.gradoop.csv.io.reader.CSVReader.readTypes_String",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#initialStep",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.csv.io.reader.CSVReader#getTokens",
            "kiekerPattern" : "private java.lang.String[] org.gradoop.csv.io.reader.CSVReader.getTokens(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-examples",
            "name" : "org.gradoop.csv.io.reader.CSVReader#getTokens",
            "key" : "org.gradoop.csv.io.reader.CSVReader.getTokens_String",
            "otherKey" : null,
            "parent" : "org.gradoop.csv.io.reader.CSVReader#readTypes",
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
          "call" : "org.gradoop.csv.io.reader.CSVReader#isNodeCSV",
          "kiekerPattern" : "private boolean org.gradoop.csv.io.reader.CSVReader.isNodeCSV()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-examples",
          "name" : "org.gradoop.csv.io.reader.CSVReader#isNodeCSV",
          "key" : "org.gradoop.csv.io.reader.CSVReader.isNodeCSV_",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#initialStep",
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
        "call" : "org.gradoop.csv.io.reader.CSVReader#readEdges",
        "kiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.readEdges(java.util.List,java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#readEdges",
        "key" : "org.gradoop.csv.io.reader.CSVReader.readEdges_List_String",
        "otherKey" : null,
        "parent" : "org.gradoop.csv.io.reader.CSVReader#readVertexList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.csv.io.reader.CSVReader#getTokens",
          "kiekerPattern" : "private java.lang.String[] org.gradoop.csv.io.reader.CSVReader.getTokens(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-examples",
          "name" : "org.gradoop.csv.io.reader.CSVReader#getTokens",
          "key" : "org.gradoop.csv.io.reader.CSVReader.getTokens_String",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdgeWithLabel",
          "kiekerPattern" : "public static org.gradoop.model.Edge org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel(java.lang.Long,java.lang.String,java.lang.Long)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdgeWithLabel",
          "key" : "org.gradoop.model.impl.EdgeFactory.createDefaultEdgeWithLabel_Long_String_Long",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "kiekerPattern" : "public static org.gradoop.model.Edge org.gradoop.model.impl.EdgeFactory.createDefaultEdge(java.lang.Long,java.lang.String,java.lang.Long,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
            "key" : "org.gradoop.model.impl.EdgeFactory.createDefaultEdge_Long_String_Long_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdgeWithLabel",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.model.impl.EdgeFactory#checkID",
              "kiekerPattern" : "private static void org.gradoop.model.impl.EdgeFactory.checkID(java.lang.Long)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "org.gradoop.model.impl.EdgeFactory#checkID",
              "key" : "org.gradoop.model.impl.EdgeFactory.checkID_Long",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.model.impl.EdgeFactory#checkIndex",
              "kiekerPattern" : "private static void org.gradoop.model.impl.EdgeFactory.checkIndex(java.lang.Long)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "org.gradoop.model.impl.EdgeFactory#checkIndex",
              "key" : "org.gradoop.model.impl.EdgeFactory.checkIndex_Long",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.model.impl.EdgeFactory#checkLabel",
              "kiekerPattern" : "private static void org.gradoop.model.impl.EdgeFactory.checkLabel(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "org.gradoop.model.impl.EdgeFactory#checkLabel",
              "key" : "org.gradoop.model.impl.EdgeFactory.checkLabel_String",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.model.impl.PropertyContainer#<init>",
              "kiekerPattern" : "protected new org.gradoop.model.impl.PropertyContainer.<init>(java.util.Map)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "org.gradoop.model.impl.PropertyContainer#<init>",
              "key" : "org.gradoop.model.impl.PropertyContainer.<init>_Map",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#<init>",
              "kiekerPattern" : "protected new org.gradoop.model.impl.SingleLabeledPropertyContainer.<init>(java.lang.String,java.util.Map)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#<init>",
              "key" : "org.gradoop.model.impl.SingleLabeledPropertyContainer.<init>_String_Map",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.model.impl.DefaultEdge#<init>",
              "kiekerPattern" : "new org.gradoop.model.impl.DefaultEdge.<init>(java.lang.Long,java.lang.String,java.lang.Long,java.util.Map)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-core",
              "name" : "org.gradoop.model.impl.DefaultEdge#<init>",
              "key" : "org.gradoop.model.impl.DefaultEdge.<init>_Long_String_Long_Map",
              "otherKey" : null,
              "parent" : "org.gradoop.model.impl.EdgeFactory#createDefaultEdge",
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
        }, {
          "call" : "org.gradoop.model.impl.PropertyContainer#addProperty",
          "kiekerPattern" : "public void org.gradoop.model.impl.PropertyContainer.addProperty(java.lang.String,java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "org.gradoop.model.impl.PropertyContainer#addProperty",
          "key" : "org.gradoop.model.impl.PropertyContainer.addProperty_String_Object",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readEdges",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertex(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
          "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_Iterable_Map_Iterable_Iterable_Iterable",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readEdges",
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
            "name" : "org.gradoop.model.impl.VertexFactory#checkVertexID",
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
            "name" : "org.gradoop.model.impl.PropertyContainer#<init>",
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
            "name" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#<init>",
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
            "name" : "org.gradoop.model.impl.DefaultVertex#<init>",
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
              "name" : "org.gradoop.model.impl.DefaultVertex#initGraphs",
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
    } ]
  }, {
    "call" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getID",
    "kiekerPattern" : "public java.lang.Long org.gradoop.model.impl.MultiLabeledPropertyContainer.getID()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getID",
    "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
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
    "name" : "org.gradoop.model.impl.DefaultVertex#getOutgoingDegree",
    "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingDegree_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
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
    "name" : "org.gradoop.model.impl.DefaultVertex#getIncomingDegree",
    "key" : "org.gradoop.model.impl.DefaultVertex.getIncomingDegree_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.DefaultVertex#getOutgoingEdges",
    "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.DefaultVertex.getOutgoingEdges()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "org.gradoop.model.impl.DefaultVertex#getOutgoingEdges",
    "key" : "org.gradoop.model.impl.DefaultVertex.getOutgoingEdges_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "csv.io.reader.CSVReaderTest#checkOutgoingEdge",
    "kiekerPattern" : "protected void csv.io.reader.CSVReaderTest.checkOutgoingEdge(java.util.List)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#checkOutgoingEdge",
    "key" : "csv.io.reader.CSVReaderTest.checkOutgoingEdge_List",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#getLabel",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#getLabel",
      "key" : "org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel_",
      "otherKey" : null,
      "parent" : "csv.io.reader.CSVReaderTest#checkOutgoingEdge",
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
    "call" : "org.gradoop.model.impl.DefaultVertex#getIncomingEdges",
    "kiekerPattern" : "public java.lang.Iterable org.gradoop.model.impl.DefaultVertex.getIncomingEdges()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "org.gradoop.model.impl.DefaultVertex#getIncomingEdges",
    "key" : "org.gradoop.model.impl.DefaultVertex.getIncomingEdges_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "csv.io.reader.CSVReaderTest#checkIncomingEdge",
    "kiekerPattern" : "protected void csv.io.reader.CSVReaderTest.checkIncomingEdge(java.util.List)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#checkIncomingEdge",
    "key" : "csv.io.reader.CSVReaderTest.checkIncomingEdge_List",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkEdgeCSVInputTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#getLabel",
      "kiekerPattern" : "public java.lang.String org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "org.gradoop.model.impl.SingleLabeledPropertyContainer#getLabel",
      "key" : "org.gradoop.model.impl.SingleLabeledPropertyContainer.getLabel_",
      "otherKey" : null,
      "parent" : "csv.io.reader.CSVReaderTest#checkIncomingEdge",
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
var margin = {top: 20, right: 120, bottom: 20, left: 343},
   width = 2961- margin.right - margin.left,
   height = 945 - margin.top - margin.bottom;
