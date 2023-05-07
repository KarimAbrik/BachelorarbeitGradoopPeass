if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit a270239794b7b89fff43f04ff300171a425f9a5d -test csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest\")'>a270239794b7b89fff43f04ff300171a425f9a5d</a><br>Test Case: csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest<br>";
}

var source = {"current":
{
 "org.gradoop.csv.io.reader.CSVReader.checkType_":
 `private void checkType() {
    Log.info("###checkType");
    if (conf.get(TYPE).equals("node")) {
        this.node = true;
    }
    Log.info(node);
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
}`,"org.gradoop.csv.io.reader.CSVReader.readVertexList_String":
 `@Override
public List<Vertex> readVertexList(String line) {
    if (once) {
        initializeAndReadFirstLine(line);
    } else {
        vList.add(readRemainingLines(line));
    }
    return vList;
}`,"org.gradoop.csv.io.reader.CSVReader.readRemainingLines_String":
 `private Vertex readRemainingLines(String line) {
    Log.info("###ReadRemainingLines");
    String[] tokens = getTokens(line);
    long id = Long.parseLong(tokens[0]);
    Log.info(id);
    Log.info(labels.get(0));
    Vertex vex = VertexFactory.createDefaultVertexWithLabels(id, labels, null);
    if (node) {
        for (int i = 1; i < properties.length; i++) {
            switch(types[i]) {
                case "long":
                    vex.addProperty(properties[i], Long.parseLong(tokens[i]));
                    Log.info(tokens[i]);
                    break;
                case "string":
                    vex.addProperty(properties[i], tokens[i]);
                    Log.info(tokens[i]);
                    break;
                default:
                    vex.addProperty(properties[i], tokens[i]);
                    break;
            }
        }
    } else {
        //If edge
    }
    return vex;
}`,"org.gradoop.csv.io.reader.CSVReader.<init>_":
 ``,"org.gradoop.model.impl.PropertyContainer.<init>_Map":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param properties key-value-map
 */
protected PropertyContainer(Map<String, Object> properties) {
    this.properties = properties;
}`,"csv.io.reader.CSVReaderTest.createVerticesFromCSV_":
 `private List<Vertex> createVerticesFromCSV() {
    ConfigurableVertexLineReader reader = new CSVReader();
    Configuration conf = new Configuration();
    conf.set(CSVReader.META_DATA, NODE_META);
    conf.set(CSVReader.LABEL, "Person");
    conf.set(CSVReader.TYPE, "node");
    reader.setConf(conf);
    List<Vertex> vertices = Lists.newArrayList();
    for (String line : PERSON_CSV) {
        for (Vertex v : reader.readVertexList(line)) {
            vertices.add(v);
        }
    }
    return vertices;
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
}`,"org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine_String":
 `private void initializeAndReadFirstLine(String line) {
    Log.info("###INITIALIZE");
    vList = Lists.newArrayList();
    labels = Lists.newArrayList();
    Log.info("###ReadFirstLine");
    this.properties = getTokens(line);
    for (int i = 0; i < properties.length; i++) {
        Log.info(properties[i]);
    }
    String metaData = conf.get(META_DATA);
    labels.add(conf.get(LABEL));
    //    this.types =
    //      new String[]{"long", "string", "string", "string", "string", "string",
    //                   "string", "string",};
    try {
        BufferedReader in = new BufferedReader(new FileReader(metaData));
        String datLine;
        while ((datLine = in.readLine()) != null) {
            this.types = getTokens(datLine);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    checkType();
    once = false;
}`,"csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_":
 `@Test
public void checkSimpleCSVInputTest() throws IOException, URISyntaxException {
    Log.info(getClass().getResource("/node_meta.csv").getPath());
    for (Vertex v : createVerticesFromCSV()) {
        System.out.println(v.getID());
    }
}`,"org.gradoop.csv.io.reader.CSVReader.getTokens_String":
 `private String[] getTokens(String line) {
    return LINE_TOKEN_SEPARATOR.split(line);
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
}`,"org.gradoop.csv.io.reader.CSVReader.setConf_Configuration":
 `@Override
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
  "call" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "kiekerPattern" : "public void csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-examples",
  "name" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
  "key" : "csv.io.reader.CSVReaderTest.checkSimpleCSVInputTest_",
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
    "call" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "kiekerPattern" : "private java.util.List csv.io.reader.CSVReaderTest.createVerticesFromCSV()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-examples",
    "name" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
    "key" : "csv.io.reader.CSVReaderTest.createVerticesFromCSV_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
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
      "parent" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
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
      "parent" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
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
      "parent" : "csv.io.reader.CSVReaderTest#createVerticesFromCSV",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.csv.io.reader.CSVReader#initializeAndReadFirstLine",
        "kiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#initializeAndReadFirstLine",
        "key" : "org.gradoop.csv.io.reader.CSVReader.initializeAndReadFirstLine_String",
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
          "parent" : "org.gradoop.csv.io.reader.CSVReader#initializeAndReadFirstLine",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.csv.io.reader.CSVReader#checkType",
          "kiekerPattern" : "private void org.gradoop.csv.io.reader.CSVReader.checkType()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-examples",
          "name" : "org.gradoop.csv.io.reader.CSVReader#checkType",
          "key" : "org.gradoop.csv.io.reader.CSVReader.checkType_",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#initializeAndReadFirstLine",
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
        "call" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
        "kiekerPattern" : "private org.gradoop.model.Vertex org.gradoop.csv.io.reader.CSVReader.readRemainingLines(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-examples",
        "name" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
        "key" : "org.gradoop.csv.io.reader.CSVReader.readRemainingLines_String",
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
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithLabels",
          "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertexWithLabels(java.lang.Long,java.lang.Iterable,java.lang.Iterable)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-core",
          "name" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithLabels",
          "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertexWithLabels_Long_Iterable_Iterable",
          "otherKey" : null,
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
            "kiekerPattern" : "public static org.gradoop.model.Vertex org.gradoop.model.impl.VertexFactory.createDefaultVertex(java.lang.Long,java.lang.Iterable,java.util.Map,java.lang.Iterable,java.lang.Iterable,java.lang.Iterable)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-core",
            "name" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
            "key" : "org.gradoop.model.impl.VertexFactory.createDefaultVertex_Long_Iterable_Map_Iterable_Iterable_Iterable",
            "otherKey" : null,
            "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertexWithLabels",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
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
              "parent" : "org.gradoop.model.impl.VertexFactory#createDefaultVertex",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
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
              "ess" : 6,
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
              "ess" : 6,
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
                "ess" : 7,
                "children" : [ ]
              } ]
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
          "parent" : "org.gradoop.csv.io.reader.CSVReader#readRemainingLines",
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
    "name" : "org.gradoop.model.impl.MultiLabeledPropertyContainer#getID",
    "key" : "org.gradoop.model.impl.MultiLabeledPropertyContainer.getID_",
    "otherKey" : null,
    "parent" : "csv.io.reader.CSVReaderTest#checkSimpleCSVInputTest",
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
var margin = {top: 20, right: 120, bottom: 20, left: 357},
   width = 3392- margin.right - margin.left,
   height = 560 - margin.top - margin.bottom;
