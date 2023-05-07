if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 574c807622001f5e7db6555a7dab3b9686005425 -test org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph\")'>574c807622001f5e7db6555a7dab3b9686005425</a><br>Test Case: org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph<br>";
}

var source = {"current":
{
 "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.<init>_GraphHeadToString_VertexToString_EdgeToString_boolean":
 `/**
 * Creates a new MatrixBuilder instance.
 *
 * @param graphHeadToString representation of graph heads
 * @param vertexToString representation of vertices
 * @param edgeLabelingFunction representation of edges
 * @param directed sets mode for either directed or undirected graph
 */
public CanonicalAdjacencyMatrixBuilder(GraphHeadToString<G> graphHeadToString, VertexToString<V> vertexToString, EdgeToString<E> edgeLabelingFunction, boolean directed) {
    this.graphHeadToString = graphHeadToString;
    this.vertexToString = vertexToString;
    this.egeLabelingFunction = edgeLabelingFunction;
    this.directed = directed;
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.EdgeToDataString.<init>_":
 ``,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.setLayoutFactory_LogicalGraphLayoutFactory":
 `@Override
public void setLayoutFactory(LogicalGraphLayoutFactory<EPGMGraphHead, EPGMVertex, EPGMEdge> layoutFactory) {
    Objects.requireNonNull(layoutFactory);
    this.layoutFactory = layoutFactory;
    this.layoutFactory.setGradoopFlinkConfig(config);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setObject_Object":
 `//----------------------------------------------------------------------------
// Setter
//----------------------------------------------------------------------------
/**
 * Sets the given value as internal value if it has a supported type.
 *
 * @param value value
 * @throws UnsupportedTypeException if the type of the Object is not supported
 */
public void setObject(Object value) {
    if (value != null && !PropertyValueStrategyFactory.get(value.getClass()).is(value)) {
        throw new UnsupportedTypeException(value.getClass());
    }
    this.value = value;
}`,"org.gradoop.common.model.impl.properties.strategies.TimeStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.Properties.create_":
 `/**
 * Creates a new property list.
 *
 * @return PropertyList
 */
public static Properties create() {
    return new Properties();
}`,"org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_String_GradoopId_GradoopId_Properties_GradoopIdSet":
 `@Override
public EPGMEdge initEdge(final GradoopId id, final String label, final GradoopId sourceVertexId, final GradoopId targetVertexId, final Properties properties, GradoopIdSet graphIds) {
    checkNotNull(id, "Identifier was null");
    checkNotNull(label, "Label was null");
    checkNotNull(sourceVertexId, "Source vertex id was null");
    checkNotNull(targetVertexId, "Target vertex id was null");
    return new EPGMEdge(id, label, sourceVertexId, targetVertexId, properties, graphIds);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.toString_":
 `@Override
public String toString() {
    return getObject() != null ? getObject().toString() : GradoopConstants.NULL_STRING;
}`,"org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String":
 `/**
 * Splits an escaped string while ignoring escaped delimiters. Does not unescape the tokens.
 *
 * @param escapedString escaped string to be split
 * @param delimiter delimiter string
 * @return string array with still escaped strings split by the delimiter
 * @throws IllegalArgumentException if the delimiter contains the escape character
 */
public static String[] split(String escapedString, String delimiter) throws IllegalArgumentException {
    return split(escapedString, delimiter, 0);
}`,"org.gradoop.common.model.impl.properties.Properties.write_DataOutputView":
 `@Override
public void write(DataOutputView outputView) throws IOException {
    outputView.writeInt(properties.size());
    for (Map.Entry<String, PropertyValue> entry : properties.entrySet()) {
        outputView.writeUTF(entry.getKey());
        entry.getValue().write(outputView);
    }
}`,"org.gradoop.flink.model.GradoopFlinkTestBase.setConfig_GradoopFlinkConfig":
 `/**
 * Sets the default configuration for the test
 */
protected void setConfig(GradoopFlinkConfig config) {
    this.config = config;
}`,"org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.createEdge_String_GradoopId_GradoopId_Properties_GradoopIdSet":
 `@Override
public EPGMEdge createEdge(String label, GradoopId sourceVertexId, GradoopId targetVertexId, Properties properties, GradoopIdSet graphIds) {
    return initEdge(GradoopId.get(), label, sourceVertexId, targetVertexId, properties, graphIds);
}`,"org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is_Object":
 `@Override
public boolean is(Object value) {
    return value instanceof Integer;
}`,"org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable_String":
 `/**
 * Returns GraphHead by given variable.
 *
 * @param variable variable used in GDL script
 * @return graphHead or {@code null} if graph is not cached
 */
public G getGraphHeadByVariable(String variable) {
    return getGraphHeadCache().get(variable);
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.<init>_":
 `/**
 * Required default constructor for instantiation by serialization logic.
 */
public GradoopIdSet() {
    this.ids = new HashSet<>();
}`,"org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory.initGraphHead_GradoopId_String_Properties":
 `@Override
public EPGMGraphHead initGraphHead(final GradoopId id, final String label, Properties properties) {
    Preconditions.checkNotNull(id, "Identifier was null");
    Preconditions.checkNotNull(label, "Label was null");
    return new EPGMGraphHead(id, label, properties);
}`,"org.gradoop.common.model.impl.properties.Type.<init>_int_String":
 `/**
 * Constructs an enum type that represents a supported type.
 *
 * @param typeByte byte representation as int, is casted to byte
 * @param typeString string representation
 */
Type(int typeByte, String typeString) {
    this.typeByte = (byte) typeByte;
    this.typeString = typeString;
}`,"org.gradoop.common.model.impl.id.GradoopId.get_":
 `/**
 * Returns a new GradoopId
 *
 * @return new GradoopId
 */
public static GradoopId get() {
    return new GradoopId(dateToTimestampSeconds(new Date()), MACHINE_IDENTIFIER, PROCESS_IDENTIFIER, NEXT_COUNTER.getAndIncrement(), false);
}`,"org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawBytes_Double":
 `@Override
public byte[] getRawBytes(Double value) {
    byte[] rawBytes = new byte[PropertyValue.OFFSET + Bytes.SIZEOF_DOUBLE];
    rawBytes[0] = getRawType();
    Bytes.putDouble(rawBytes, PropertyValue.OFFSET, value);
    return rawBytes;
}`,"org.gradoop.common.util.AsciiGraphLoader.createGradoopIdSet_GraphElement":
 `/**
 * Creates a {@code GradoopIDSet} from the long identifiers stored at the
 * given graph element.
 *
 * @param e graph element
 * @return GradoopIDSet for the given element
 */
private GradoopIdSet createGradoopIdSet(GraphElement e) {
    GradoopIdSet result = new GradoopIdSet();
    for (Long graphId : e.getGraphs()) {
        result.add(graphHeadIds.get(graphId));
    }
    return result;
}`,"org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.execute_GC":
 `@Override
public DataSet<String> execute(GC collection) {
    // 1-10.
    DataSet<GraphHeadString> graphHeadLabels = getGraphHeadStrings(collection);
    // 11. add empty head to prevent empty result for empty collection
    graphHeadLabels = graphHeadLabels.union(collection.getConfig().getExecutionEnvironment().fromElements(new GraphHeadString(GradoopId.get(), "")));
    // 12. label collection
    return graphHeadLabels.reduceGroup(new ConcatGraphHeadStrings());
}`,"org.gradoop.flink.util.GradoopFlinkConfig.getGraphCollectionFactory_":
 `/**
 * Returns a factory that is able to create graph collection layouts.
 *
 * @return factory for graph collection layouts
 */
public GraphCollectionFactory getGraphCollectionFactory() {
    return (GraphCollectionFactory) graphCollectionFactory;
}`,"org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date":
 `/**
 * Converts a date into the seconds since unix epoch.
 *
 * @param time a time
 * @return int representing the seconds between unix epoch and the given time
 */
private static int dateToTimestampSeconds(final Date time) {
    return (int) (time.getTime() / 1000);
}`,"org.gradoop.common.model.impl.id.GradoopId.<init>_":
 `/**
 * Required default constructor for instantiation by serialization logic.
 */
public GradoopId() {
    bytes = new byte[ID_SIZE];
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath_String_String":
 `/**
 * Returns the path to the element file containing only elements with the specified label.
 *
 * @param label       element label
 * @param elementPath path of the element (e.g. "edge")
 * @return path to csv file
 */
private String getElementCSVPath(String label, String elementPath) {
    Objects.requireNonNull(label);
    if (label.isEmpty()) {
        label = CSVConstants.DEFAULT_DIRECTORY;
    } else {
        label = MultipleFileOutputFormat.cleanFilename(StringEscaper.escape(label, CSVConstants.ESCAPED_CHARACTERS));
    }
    return elementPath + CSVConstants.DIRECTORY_SEPARATOR + label + CSVConstants.DIRECTORY_SEPARATOR + CSVConstants.SIMPLE_FILE;
}`,"org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory.createGraphHead_String_Properties":
 `@Override
public EPGMGraphHead createGraphHead(String label, Properties properties) {
    return initGraphHead(GradoopId.get(), label, properties);
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getVertexPath_":
 `/**
 * Returns the path to the vertex directory.
 *
 * @return vertex path
 */
protected String getVertexPath() {
    return csvRoot + VERTEX_PATH;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromCollections_EPGMGraphHead_Collection_Collection":
 `@Override
public LogicalGraphLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> fromCollections(EPGMGraphHead graphHead, Collection<EPGMVertex> vertices, Collection<EPGMEdge> edges) {
    Objects.requireNonNull(vertices, "EPGMVertex collection was null");
    List<EPGMGraphHead> graphHeads;
    if (graphHead == null) {
        graphHeads = Lists.newArrayListWithCapacity(0);
    } else {
        graphHeads = Lists.newArrayList(graphHead);
    }
    if (edges == null) {
        edges = Lists.newArrayListWithCapacity(0);
    }
    return fromDataSets(createGraphHeadDataSet(graphHeads), createVertexDataSet(vertices), createEdgeDataSet(edges));
}`,"org.gradoop.flink.util.GradoopFlinkConfig.createConfig_ExecutionEnvironment_LogicalGraphLayoutFactory_GraphCollectionLayoutFactory":
 `/**
 * Creates a Gradoop Flink configuration using the given parameters.
 *
 * @param env Flink execution environment
 * @param logicalGraphLayoutFactory factory to create logical graph layouts
 * @param graphCollectionLayoutFactory factory to create graph collection layouts
 * @return Gradoop Flink configuration
 */
public static GradoopFlinkConfig createConfig(ExecutionEnvironment env, LogicalGraphLayoutFactory<EPGMGraphHead, EPGMVertex, EPGMEdge> logicalGraphLayoutFactory, GraphCollectionLayoutFactory<EPGMGraphHead, EPGMVertex, EPGMEdge> graphCollectionLayoutFactory) {
    return new GradoopFlinkConfig(env, logicalGraphLayoutFactory, graphCollectionLayoutFactory);
}`,"org.gradoop.common.model.impl.id.GradoopId.write_DataOutputView":
 `@Override
public void write(DataOutputView out) throws IOException {
    out.write(bytes);
}`,"org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.getLogicalGraph_":
 `/**
 * Will use a single graph head of the collection as final graph head for the graph.
 * Issue #1217 (https://github.com/dbs-leipzig/gradoop/issues/1217) will optimize further.
 *
 * {@inheritDoc}
 */
@Override
public LogicalGraph getLogicalGraph() throws IOException {
    GraphCollection collection = getGraphCollection();
    return collection.getGraphFactory().fromDataSets(collection.getGraphHeads().first(1), collection.getVertices(), collection.getEdges());
}`,"org.gradoop.common.model.impl.properties.strategies.NullStrategy.write_Object_DataOutputView":
 `@Override
public void write(Object value, DataOutputView outputView) throws IOException {
    outputView.write(new byte[] { getRawType() });
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.GraphHeadToDataString.<init>_":
 ``,"org.gradoop.flink.model.impl.epgm.GraphCollection.<init>_GraphCollectionLayout_GradoopFlinkConfig":
 `/**
 * Creates a graph collection from the given arguments.
 *
 * @param layout the graph collection layout
 * @param config the Gradoop Flink configuration
 */
GraphCollection(GraphCollectionLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> layout, GradoopFlinkConfig config) {
    this.layout = Objects.requireNonNull(layout);
    this.config = Objects.requireNonNull(config);
}`,"org.gradoop.common.model.impl.id.GradoopId.hashCode_":
 `/**
 * Returns the hash code of this GradoopId.
 * <p>
 * Note: Implementation taken from org.bson.types.ObjectId
 *
 * @return hash code
 */
@Override
public int hashCode() {
    int result = getTimeStamp();
    result = 31 * result + getMachineIdentifier();
    result = 31 * result + (int) getProcessIdentifier();
    result = 31 * result + getCounter();
    return result;
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.write_DataOutputView":
 `@Override
public void write(DataOutputView out) throws IOException {
    if (isEmpty()) {
        out.writeInt(0);
    } else {
        out.writeInt(size());
        out.write(writeIds(ids));
    }
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getType_":
 `//----------------------------------------------------------------------------
// Util
//----------------------------------------------------------------------------
/**
 * Get the data type as class object according to the first position of the rawBytes[] array.
 *
 * @return Class object
 */
public Class<?> getType() {
    Class<?> clazz = null;
    if (value != null) {
        clazz = PropertyValueStrategyFactory.get(value.getClass()).getType();
    }
    return clazz;
}`,"org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_":
 `/**
 * Returns the Flink execution environment.
 *
 * @return Flink execution environment
 */
public ExecutionEnvironment getExecutionEnvironment() {
    return executionEnvironment;
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraph.<init>_LogicalGraphLayout_GradoopFlinkConfig":
 `/**
 * Creates a new logical graph based on the given parameters.
 *
 * @param layout representation of the logical graph
 * @param config the Gradoop Flink configuration
 */
LogicalGraph(LogicalGraphLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> layout, GradoopFlinkConfig config) {
    Objects.requireNonNull(layout);
    Objects.requireNonNull(config);
    this.layout = layout;
    this.config = config;
}`,"org.gradoop.common.model.impl.id.GradoopId.toString_":
 `/**
 * Returns hex string representation of a GradoopId.
 * <p>
 * Note: Implementation taken from org.bson.types.ObjectId
 *
 * @return GradoopId string representation.
 */
@Override
public String toString() {
    char[] chars = new char[24];
    int i = 0;
    for (byte b : bytes) {
        chars[i++] = HEX_CHARS[b >> 4 & 0xF];
        chars[i++] = HEX_CHARS[b & 0xF];
    }
    return String.valueOf(chars);
}`,"org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Object":
 `/**
 * Get strategy by object.
 *
 * @param value some object.
 * @return strategy that handles operations on the provided object type. If value is {@code null},
 * {@link NullStrategy} is returned.
 * @throws UnsupportedTypeException when there is no matching strategy for a given object.
 */
public static PropertyValueStrategy get(Object value) throws UnsupportedTypeException {
    if (value != null) {
        PropertyValueStrategy strategy = get(value.getClass());
        if (strategy == null) {
            throw new UnsupportedTypeException("No strategy for class " + value.getClass());
        }
        return get(value.getClass());
    }
    return INSTANCE.nullStrategy;
}`,"org.gradoop.common.model.impl.properties.Type.toString_":
 `/**
 * Returns the string representation.
 *
 * @return type string
 */
@Override
public String toString() {
    return typeString;
}`,"org.gradoop.common.model.impl.metadata.MetaData.getVertexLabels_":
 `/**
 * Returns the vertex labels available in the meta data.
 *
 * @return vertex labels
 */
public Set<String> getVertexLabels() {
    return vertexMetaData.keySet();
}`,"org.gradoop.flink.io.impl.csv.CSVBase.<init>_String_GradoopFlinkConfig":
 `/**
 * Constructor.
 *
 * @param csvPath directory to the CSV files
 * @param config  Gradoop Flink configuration
 */
protected CSVBase(String csvPath, GradoopFlinkConfig config) {
    Objects.requireNonNull(csvPath);
    Objects.requireNonNull(config);
    this.csvRoot = csvPath.endsWith(File.separator) ? csvPath : csvPath + File.separator;
    this.config = config;
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.ElementToDataString.<init>_":
 ``,"org.gradoop.common.util.AsciiGraphLoader.updateGraphCache_String_Graph":
 `/**
 * Updates the graph cache.
 *
 * @param variable graph variable used in GDL script
 * @param g graph from GDL loader
 */
private void updateGraphCache(String variable, Graph g) {
    graphHeadCache.put(variable, graphHeads.get(graphHeadIds.get(g.getId())));
}`,"org.gradoop.flink.model.impl.operators.equality.GraphEquality.execute_LG_LG":
 `@Override
public DataSet<Boolean> execute(LG firstGraph, LG secondGraph) {
    BaseGraphCollectionFactory<G, V, E, LG, GC> collectionFactory = firstGraph.getCollectionFactory();
    return collectionEquality.execute(collectionFactory.fromGraph(firstGraph), collectionFactory.fromGraph(secondGraph));
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraph.getEdges_":
 `@Override
public DataSet<EPGMEdge> getEdges() {
    return layout.getEdges();
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getGraphHeadCSVPath_String":
 `/**
 * Returns the path to the graph head file containing only graph heads with the specified label.
 *
 * @param label graph head label
 * @return path to csv file
 */
protected String getGraphHeadCSVPath(String label) {
    return getElementCSVPath(label, getGraphHeadPath());
}`,"org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest.testReadSingleGraph_":
 `/**
 * Test reading a single logical indexed csv graph.
 *
 * @throws Exception on failure
 */
@Test
public void testReadSingleGraph() throws Exception {
    String csvPath = getFilePath("/data/csv/input_indexed");
    String gdlPath = getFilePath("/data/csv/expected/expected.gdl");
    DataSource dataSource = new IndexedCSVDataSource(csvPath, getConfig());
    LogicalGraph input = dataSource.getLogicalGraph();
    LogicalGraph expected = getLoaderFromFile(gdlPath).getLogicalGraphByVariable("expected");
    collectAndAssertTrue(input.equalsByData(expected));
}`,"org.gradoop.common.model.impl.properties.strategies.StringStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getType_":
 `@Override
public Class<Double> getType() {
    return Double.class;
}`,"org.gradoop.common.model.impl.pojo.EPGMVertexFactory.initVertex_GradoopId_String_Properties_GradoopIdSet":
 `@Override
public EPGMVertex initVertex(final GradoopId id, final String label, final Properties properties, final GradoopIdSet graphs) {
    Preconditions.checkNotNull(id, "Identifier was null");
    Preconditions.checkNotNull(label, "Label was null");
    return new EPGMVertex(id, label, properties, graphs);
}`,"org.gradoop.flink.model.impl.operators.equality.GraphEquality.<init>_GraphHeadToString_VertexToString_EdgeToString_boolean":
 `/**
 * constructor to set string representations
 * @param graphHeadToString string representation of graph heads
 * @param vertexToString string representation of vertices
 * @param edgeToString string representation of edges
 * @param directed sets mode for directed or undirected graphs
 */
public GraphEquality(GraphHeadToString<G> graphHeadToString, VertexToString<V> vertexToString, EdgeToString<E> edgeToString, boolean directed) {
    this.directed = directed;
    this.collectionEquality = new CollectionEquality<>(graphHeadToString, vertexToString, edgeToString, this.directed);
}`,"org.gradoop.common.model.impl.metadata.PropertyMetaData.<init>_String_String_Function":
 `/**
 * Constructor.
 *
 * @param key         property key
 * @param typeString  property type string
 * @param valueParser property value parser
 */
public PropertyMetaData(String key, String typeString, Function<String, Object> valueParser) {
    this.key = key;
    this.typeString = typeString;
    this.valueParser = valueParser;
}`,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getVertexFactory_":
 `@Override
public VertexFactory<EPGMVertex> getVertexFactory() {
    return layoutFactory.getVertexFactory();
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getEdgeCSVPath_String":
 `/**
 * Returns the path to the edge file containing only edges with the specified label.
 *
 * @param label edge label
 * @return path to csv file
 */
protected String getEdgeCSVPath(String label) {
    return getElementCSVPath(label, getEdgePath());
}`,"org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromDataSets_DataSet_DataSet_DataSet":
 `@Override
public LogicalGraphLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> fromDataSets(DataSet<EPGMGraphHead> graphHead, DataSet<EPGMVertex> vertices, DataSet<EPGMEdge> edges) {
    return create(graphHead, vertices, edges);
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.AdjacencyMatrix.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.TimeStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.TIME.getTypeByte();
}`,"org.gradoop.flink.model.impl.functions.bool.Equals.cross_DataSet_DataSet":
 `@Override
public Boolean cross(T left, T right) throws Exception {
    return left.equals(right);
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.readDistributed_String_GradoopFlinkConfig":
 `@Override
public DataSet<Tuple3<String, String, String>> readDistributed(String path, GradoopFlinkConfig config) {
    return config.getExecutionEnvironment().readTextFile(path).map(line -> StringEscaper.split(line, CSVConstants.TOKEN_DELIMITER, 3)).map(tokens -> Tuple3.of(tokens[0], tokens[1], tokens[2])).returns(new TypeHint<Tuple3<String, String, String>>() {
    });
}`,"org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_":
 `//------------------------------------------------------------------------------------------------
// private little helpers
//------------------------------------------------------------------------------------------------
/**
 * Returns the timestamp component of the id.
 *
 * @return the timestamp
 */
private int getTimeStamp() {
    return makeInt(bytes[0], bytes[1], bytes[2], bytes[3]);
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getEdgePath_":
 `/**
 * Returns the path to the edge directory.
 *
 * @return edge path
 */
protected String getEdgePath() {
    return csvRoot + EDGE_PATH;
}`,"org.gradoop.common.model.impl.pojo.EPGMGraphHead.toString_":
 `@Override
public String toString() {
    return super.toString() + "[]";
}`,"org.gradoop.common.model.impl.pojo.EPGMElement.<init>_GradoopId_String_Properties":
 `/**
 * Creates an object from the given parameters. Can only be called by
 * inheriting classes.
 *
 * @param id         entity identifier
 * @param label      entity label
 * @param properties key-value properties
 */
protected EPGMElement(GradoopId id, String label, Properties properties) {
    this.id = id;
    this.label = label;
    this.properties = properties;
}`,"org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>_GradoopId_String_Properties_GradoopIdSet":
 `/**
 * Creates an EPGM graph element using the given arguments.
 *  @param id         element id
 * @param label      element label
 * @param properties element properties
 * @param graphIds     graphIds that element is contained in
 */
protected EPGMGraphElement(GradoopId id, String label, Properties properties, GradoopIdSet graphIds) {
    super(id, label, properties);
    this.graphIds = graphIds;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create_Map_Map_Map":
 `/**
 * Creates a collection layout from the given datasets indexed by label.
 *
 * @param graphHeads Mapping from label to graph head dataset
 * @param vertices Mapping from label to vertex dataset
 * @param edges Mapping from label to edge dataset
 * @return GVE layout
 */
GVELayout create(Map<String, DataSet<EPGMGraphHead>> graphHeads, Map<String, DataSet<EPGMVertex>> vertices, Map<String, DataSet<EPGMEdge>> edges) {
    Objects.requireNonNull(graphHeads);
    Objects.requireNonNull(vertices);
    Objects.requireNonNull(edges);
    return new GVELayout(graphHeads.values().stream().reduce(DataSet::union).orElseThrow(() -> new RuntimeException("Error during graph head union")), vertices.values().stream().reduce(DataSet::union).orElseThrow(() -> new RuntimeException("Error during vertex union")), edges.values().stream().reduce(createEdgeDataSet(Collections.EMPTY_LIST), DataSet::union));
}`,"org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.STRING.getTypeByte();
}`,"org.gradoop.common.model.impl.properties.strategies.NullStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.DOUBLE.getTypeByte();
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraph.getCollectionFactory_":
 `@Override
public BaseGraphCollectionFactory<EPGMGraphHead, EPGMVertex, EPGMEdge, LogicalGraph, GraphCollection> getCollectionFactory() {
    return config.getGraphCollectionFactory();
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.getGraphHeadFactory_":
 `@Override
public GraphHeadFactory<EPGMGraphHead> getGraphHeadFactory() {
    return graphHeadFactory;
}`,"org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte":
 `/**
 * Returns a primitive int represented by the given 4 bytes.
 *
 * @param b3 byte 3
 * @param b2 byte 2
 * @param b1 byte 1
 * @param b0 byte 0
 * @return int value
 */
private static int makeInt(final byte b3, final byte b2, final byte b1, final byte b0) {
    return (b3 << 24) | ((b2 & 0xff) << 16) | ((b1 & 0xff) << 8) | ((b0 & 0xff));
}`,"org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.BOOLEAN.getTypeByte();
}`,"org.gradoop.common.model.impl.properties.Property.create_String_PropertyValue":
 `/**
 * Creates a new property from the given arguments.
 *
 * @param key   property key
 * @param value property value
 * @return property
 */
public static Property create(String key, PropertyValue value) {
    return new Property(key, value);
}`,"org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String_int":
 `/**
 * Splits an escaped string while ignoring escaped delimiters. Does not unescape the tokens.
 *
 * @param escapedString escaped string to be split
 * @param delimiter delimiter string
 * @param limit limits the size of the output
 * @return string array with still escaped strings split by the delimiter
 * @throws IllegalArgumentException if the delimiter contains the escape character
 */
public static String[] split(String escapedString, String delimiter, int limit) throws IllegalArgumentException {
    if (delimiter.contains(Character.toString(ESCAPE_CHARACTER))) {
        throw new IllegalArgumentException(String.format("Delimiter must not contain the escape character: '%c'", ESCAPE_CHARACTER));
    }
    if (limit <= 0) {
        limit = escapedString.length() + 1;
    }
    List<String> tokens = new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    boolean escaped = false;
    int delimiterIndex = 0;
    for (char c : escapedString.toCharArray()) {
        // parse and match delimiter
        if (!escaped && c == delimiter.charAt(delimiterIndex)) {
            delimiterIndex++;
            if (delimiterIndex == delimiter.length()) {
                if (tokens.size() < limit - 1) {
                    tokens.add(sb.toString());
                    sb.setLength(0);
                } else {
                    sb.append(delimiter, 0, delimiterIndex);
                }
                delimiterIndex = 0;
            }
        } else {
            // reset delimiter parsing
            sb.append(delimiter, 0, delimiterIndex);
            delimiterIndex = 0;
            // escape
            if (escaped) {
                escaped = false;
            } else if (c == ESCAPE_CHARACTER) {
                escaped = true;
            }
            sb.append(c);
        }
    }
    sb.append(delimiter, 0, delimiterIndex);
    tokens.add(sb.toString());
    return tokens.toArray(new String[0]);
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putLongUnsafe_byte[]_int_long":
 `/**
 * Put a long value out to the specified byte array position (Unsafe).
 *
 * @param bytes the byte array
 * @param offset position in the array
 * @param val long to write out
 * @return incremented offset
 */
private static int putLongUnsafe(byte[] bytes, int offset, long val) {
    if (LexicographicalComparerHolder.UnsafeComparer.LITTLE_ENDIAN) {
        val = Long.reverseBytes(val);
    }
    LexicographicalComparerHolder.UnsafeComparer.UNSAFE.putLong(bytes, (long) offset + LexicographicalComparerHolder.UnsafeComparer.BYTE_ARRAY_BASE_OFFSET, val);
    return offset + SIZEOF_LONG;
}`,"org.gradoop.common.model.impl.properties.strategies.ListStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.MapStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.MAP.getTypeByte();
}`,"org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.<init>_":
 `/**
 * Constructs an {@link PropertyValueStrategyFactory} with type - strategy mappings as defined in
 * {@code initClassStrategyMap}.
 * Only one instance of this class is needed.
 */
private PropertyValueStrategyFactory() {
    nullStrategy = new NullStrategy();
    classStrategyMap = initClassStrategyMap();
    byteStrategyMap = initByteStrategyMap();
}`,"org.gradoop.flink.model.impl.operators.tostring.tuples.GraphHeadString.<init>_GradoopId_GraphHeadString":
 ``,"org.gradoop.common.util.AsciiGraphLoader.<init>_GDLHandler_ElementFactoryProvider":
 `/**
 * Creates a new AsciiGraphLoader.
 *
 * @param gdlHandler GDL Handler
 * @param elementFactoryProvider Factory provider for EPGM elements.
 */
private AsciiGraphLoader(GDLHandler gdlHandler, ElementFactoryProvider<G, V, E> elementFactoryProvider) {
    this.gdlHandler = gdlHandler;
    this.elementFactoryProvider = elementFactoryProvider;
    this.graphHeads = Maps.newHashMap();
    this.vertices = Maps.newHashMap();
    this.edges = Maps.newHashMap();
    this.graphHeadIds = Maps.newHashMap();
    this.vertexIds = Maps.newHashMap();
    this.edgeIds = Maps.newHashMap();
    this.graphHeadCache = Maps.newHashMap();
    this.vertexCache = Maps.newHashMap();
    this.edgeCache = Maps.newHashMap();
    init();
}`,"org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is_Object":
 `@Override
public boolean is(Object value) {
    return value instanceof Float;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges_":
 `@Override
public DataSet<EPGMEdge> getEdges() {
    return edges;
}`,"org.gradoop.common.model.impl.properties.Property.<init>_String_PropertyValue":
 `/**
 * Creates a new property from the given arguments.
 *
 * @param key   property key
 * @param value property value
 */
Property(String key, PropertyValue value) {
    checkNotNull(key, "Property key was null");
    checkNotNull(value, "Property value was null");
    checkArgument(!key.isEmpty(), "Property key was empty");
    this.key = key;
    this.value = value;
}`,"org.gradoop.flink.model.impl.epgm.GraphCollection.getConfig_":
 `//----------------------------------------------------------------------------
// Utility methods
//----------------------------------------------------------------------------
@Override
public GradoopFlinkConfig getConfig() {
    return config;
}`,"org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy.<init>_":
 ``,"org.gradoop.common.util.AsciiGraphLoader.initEdge_Edge":
 `/**
 * Creates a new Edge from the GDL Loader.
 *
 * @param e edge from GDL loader
 * @return edge
 */
private E initEdge(org.s1ck.gdl.model.Edge e) {
    E edge;
    if (!edgeIds.containsKey(e.getId())) {
        edge = elementFactoryProvider.getEdgeFactory().createEdge(e.getLabel(), vertexIds.get(e.getSourceVertexId()), vertexIds.get(e.getTargetVertexId()), Properties.createFromMap(e.getProperties()), createGradoopIdSet(e));
        edgeIds.put(e.getId(), edge.getId());
        edges.put(edge.getId(), edge);
    } else {
        edge = edges.get(edgeIds.get(e.getId()));
        edge.setGraphIds(createGradoopIdSet(e));
    }
    return edge;
}`,"org.gradoop.common.model.impl.id.GradoopId.getMaxNormalizedKeyLen_":
 `//------------------------------------------------------------------------------------------------
// methods inherited from NormalizableKey
//------------------------------------------------------------------------------------------------
@Override
public int getMaxNormalizedKeyLen() {
    return ID_SIZE;
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.fromCollections_EPGMGraphHead_Collection_Collection":
 `@Override
public LogicalGraph fromCollections(EPGMGraphHead graphHead, Collection<EPGMVertex> vertices, Collection<EPGMEdge> edges) {
    return new LogicalGraph(layoutFactory.fromCollections(graphHead, vertices, edges), config);
}`,"org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy.write_T_DataOutputView":
 `@Override
public void write(T value, DataOutputView outputView) throws IOException {
    outputView.write(getRawBytes(value));
}`,"org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawBytes_Long":
 `@Override
public byte[] getRawBytes(Long value) {
    byte[] rawBytes = new byte[PropertyValue.OFFSET + Bytes.SIZEOF_LONG];
    rawBytes[0] = getRawType();
    Bytes.putLong(rawBytes, PropertyValue.OFFSET, value);
    return rawBytes;
}`,"org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getType_":
 `@Override
public Class<Boolean> getType() {
    return Boolean.class;
}`,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getEdgeFactory_":
 `@Override
public EdgeFactory<EPGMEdge> getEdgeFactory() {
    return layoutFactory.getEdgeFactory();
}`,"org.gradoop.common.model.impl.pojo.EPGMElement.toString_":
 `@Override
public String toString() {
    return String.format("%s%s%s{%s}", id, label == null || label.equals("") ? "" : ":", label, properties == null ? "" : properties);
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory_":
 `@Override
public EdgeFactory<EPGMEdge> getEdgeFactory() {
    return edgeFactory;
}`,"org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawBytes_Boolean":
 `/**
 * {@inheritDoc}
 *
 * Warning: Please note that if {@code null} is passed as an argument, it is going to be evaluated
 * as if it was false.
 */
@Override
public byte[] getRawBytes(Boolean value) {
    byte[] rawBytes = new byte[PropertyValue.OFFSET + Bytes.SIZEOF_BOOLEAN];
    rawBytes[0] = getRawType();
    Bytes.putByte(rawBytes, PropertyValue.OFFSET, (byte) (value ? -1 : 0));
    return rawBytes;
}`,"org.gradoop.flink.model.impl.operators.equality.CollectionEquality.<init>_GraphHeadToString_VertexToString_EdgeToString_boolean":
 `/**
 * Constructor to set string representations.
 *
 * @param graphHeadToString string representation of graph heads
 * @param vertexToString string representation of vertices
 * @param edgeToString string representation of edges
 * @param directed sets mode for directed or undirected graphs
 */
public CollectionEquality(GraphHeadToString<G> graphHeadToString, VertexToString<V> vertexToString, EdgeToString<E> edgeToString, boolean directed) {
    // sets mode for directed or undirected graphs
    this.canonicalAdjacencyMatrixBuilder = new CanonicalAdjacencyMatrixBuilder<>(graphHeadToString, vertexToString, edgeToString, directed);
}`,"org.gradoop.common.model.impl.properties.strategies.FloatStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.<init>_":
 ``,"org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>_DataSet_DataSet_DataSet":
 `/**
 * Constructor
 *
 * @param graphHeads graph head dataset
 * @param vertices vertex dataset
 * @param edges edge dataset
 */
protected GVELayout(DataSet<EPGMGraphHead> graphHeads, DataSet<EPGMVertex> vertices, DataSet<EPGMEdge> edges) {
    this.graphHeads = graphHeads;
    this.vertices = vertices;
    this.edges = edges;
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraph.getVertices_":
 `@Override
public DataSet<EPGMVertex> getVertices() {
    return layout.getVertices();
}`,"org.gradoop.flink.util.GradoopFlinkConfig.<init>_ExecutionEnvironment_LogicalGraphLayoutFactory_GraphCollectionLayoutFactory":
 `/**
 * Creates a new Configuration.
 *
 * @param executionEnvironment Flink execution environment
 * @param logicalGraphLayoutFactory Factory for creating logical graphs
 * @param graphCollectionLayoutFactory Factory for creating graph collections
 */
protected GradoopFlinkConfig(ExecutionEnvironment executionEnvironment, LogicalGraphLayoutFactory<EPGMGraphHead, EPGMVertex, EPGMEdge> logicalGraphLayoutFactory, GraphCollectionLayoutFactory<EPGMGraphHead, EPGMVertex, EPGMEdge> graphCollectionLayoutFactory) {
    super();
    Objects.requireNonNull(executionEnvironment);
    Objects.requireNonNull(logicalGraphLayoutFactory);
    Objects.requireNonNull(graphCollectionLayoutFactory);
    this.executionEnvironment = executionEnvironment;
    // init with default layout factories
    this.graphFactory = new LogicalGraphFactory(this);
    this.graphFactory.setLayoutFactory(logicalGraphLayoutFactory);
    this.graphCollectionFactory = new GraphCollectionFactory(this);
    this.graphCollectionFactory.setLayoutFactory(graphCollectionLayoutFactory);
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.getVertexFactory_":
 `@Override
public VertexFactory<EPGMVertex> getVertexFactory() {
    return vertexFactory;
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.SourceStringUpdater.<init>_":
 ``,"org.gradoop.common.model.impl.id.GradoopIdSet.size_":
 `/**
 * Returns the number of contained gradoop ids
 *
 * @return number of elements in the set
 */
public int size() {
    return ids.size();
}`,"org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat.cleanFilename_String":
 `/**
 * Replace illegal filename characters ({@code <, >, :, ", /, \, |, ?, *}) with {@code '_'}
 * and change the string to lower case.
 *
 * @param filename filename to be cleaned
 * @return cleaned filename
 */
public static String cleanFilename(String filename) {
    return filename.replaceAll("[<>:\"/\\\\|?*]", "_").toLowerCase();
}`,"org.gradoop.common.model.impl.properties.strategies.MapStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.metadata.MetaData.<init>_Map_Map_Map":
 `/**
 * Constructor
 *
 * @param graphMetaData  a map between each graph label and its property metadata
 * @param vertexMetaData a map between each vertex label and its property metadata
 * @param edgeMetaData   a map between each edge label and its property metadata
 */
protected MetaData(Map<String, List<PropertyMetaData>> graphMetaData, Map<String, List<PropertyMetaData>> vertexMetaData, Map<String, List<PropertyMetaData>> edgeMetaData) {
    this.graphMetaData = graphMetaData;
    this.vertexMetaData = vertexMetaData;
    this.edgeMetaData = edgeMetaData;
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty_":
 `/**
 * Checks if the set is empty.
 *
 * @return true, iff the set contains no elements
 */
public boolean isEmpty() {
    return ids.isEmpty();
}`,"org.gradoop.flink.model.impl.functions.epgm.LabelCombiner.<init>_":
 ``,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getGraphHeadFactory_":
 `@Override
public GraphHeadFactory<EPGMGraphHead> getGraphHeadFactory() {
    return layoutFactory.getGraphHeadFactory();
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.fromDataSets_DataSet_DataSet_DataSet":
 `@Override
public LogicalGraph fromDataSets(DataSet<EPGMGraphHead> graphHead, DataSet<EPGMVertex> vertices, DataSet<EPGMEdge> edges) {
    return new LogicalGraph(layoutFactory.fromDataSets(graphHead, vertices, edges), config);
}`,"org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.NullStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.NULL.getTypeByte();
}`,"org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromIndexedDataSets_Map_Map_Map":
 `@Override
public GraphCollectionLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> fromIndexedDataSets(Map<String, DataSet<EPGMGraphHead>> graphHeads, Map<String, DataSet<EPGMVertex>> vertices, Map<String, DataSet<EPGMEdge>> edges) {
    return create(graphHeads, vertices, edges);
}`,"org.gradoop.common.model.impl.pojo.EPGMElement.hashCode_":
 `@Override
public int hashCode() {
    int result = id.hashCode();
    result = 31 * result + id.hashCode();
    return result;
}`,"org.gradoop.common.model.impl.properties.strategies.LongStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getType_":
 `@Override
public Class<Integer> getType() {
    return Integer.class;
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putLong_byte[]_int_long":
 `/**
 * Put a long value out to the specified byte array position.
 *
 * @param bytes the byte array
 * @param offset position in the array
 * @param val long to write out
 * @return incremented offset
 * @throws IllegalArgumentException if the byte array given doesn't have
 * enough room at the offset specified.
 */
public static int putLong(byte[] bytes, int offset, long val) {
    if (bytes.length - offset < SIZEOF_LONG) {
        throw new IllegalArgumentException("Not enough room to put a long at" + " offset " + offset + " in a " + bytes.length + " byte array");
    }
    if (UNSAFE_UNALIGNED) {
        return putLongUnsafe(bytes, offset, val);
    } else {
        for (int i = offset + 7; i > offset; i--) {
            bytes[i] = (byte) val;
            val >>>= 8;
        }
        bytes[offset] = (byte) val;
        return offset + SIZEOF_LONG;
    }
}`,"org.gradoop.flink.model.GradoopFlinkTestBase.getLoaderFromFile_String":
 `protected FlinkAsciiGraphLoader getLoaderFromFile(String fileName) throws IOException {
    FlinkAsciiGraphLoader loader = getNewLoader();
    loader.initDatabaseFromFile(fileName);
    return loader;
}`,"org.gradoop.common.model.impl.properties.Properties.toList_":
 `/**
 * Returns a list of properties.
 *
 * @return List of properties
 */
public List<Property> toList() {
    return properties.entrySet().stream().map(e -> Property.create(e.getKey(), e.getValue())).collect(Collectors.toList());
}`,"org.gradoop.common.model.impl.properties.strategies.ShortStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.SHORT.getTypeByte();
}`,"org.gradoop.common.model.impl.pojo.EPGMElement.getId_":
 `@Override
public GradoopId getId() {
    return id;
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.<init>_GradoopFlinkConfig":
 `/**
 * Creates a new factory.
 *
 * @param config the Gradoop Flink configuration
 */
public LogicalGraphFactory(GradoopFlinkConfig config) {
    this.config = config;
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getVertexCSVPath_String":
 `/**
 * Returns the path to the vertex file containing only vertices with the specified label.
 *
 * @param label vertex label
 * @return path to csv file
 */
protected String getVertexCSVPath(String label) {
    return getElementCSVPath(label, getVertexPath());
}`,"org.gradoop.common.model.impl.properties.strategies.LongStrategy.getType_":
 `@Override
public Class<Long> getType() {
    return Long.class;
}`,"org.gradoop.flink.model.GradoopFlinkTestBase.collectAndAssertTrue_DataSet":
 `//----------------------------------------------------------------------------
// Test helper
//----------------------------------------------------------------------------
protected void collectAndAssertTrue(DataSet<Boolean> result) throws Exception {
    assertTrue("expected true", result.collect().get(0));
}`,"org.gradoop.common.model.impl.id.GradoopId.getCounter_":
 `/**
 * Returns the counter component of the id.
 *
 * @return the counter
 */
private int getCounter() {
    return makeInt((byte) 0, bytes[9], bytes[10], bytes[11]);
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser.getSimpleTypeParserMap_":
 `/**
 * Creates the type - parser function mapping of static property SIMPLE_TYPE_PARSER_MAP
 *
 * @return a HashMap containing the mapping of a simple type string to its corresponding
 * parsing function.
 */
private static Map<String, Function<String, Object>> getSimpleTypeParserMap() {
    Map<String, Function<String, Object>> map = new HashMap<>();
    map.put(Type.SHORT.toString(), Short::parseShort);
    map.put(Type.INTEGER.toString(), Integer::parseInt);
    map.put(Type.LONG.toString(), Long::parseLong);
    map.put(Type.FLOAT.toString(), Float::parseFloat);
    map.put(Type.DOUBLE.toString(), Double::parseDouble);
    map.put(Type.BOOLEAN.toString(), Boolean::parseBoolean);
    map.put(Type.STRING.toString(), StringEscaper::unescape);
    map.put(Type.BIG_DECIMAL.toString(), BigDecimal::new);
    map.put(Type.GRADOOP_ID.toString(), GradoopId::fromString);
    map.put(Type.DATE.toString(), LocalDate::parse);
    map.put(Type.TIME.toString(), LocalTime::parse);
    map.put(Type.DATE_TIME.toString(), LocalDateTime::parse);
    map.put(Type.NULL.toString(), CSVMetaDataParser::parseNullProperty);
    return Collections.unmodifiableMap(map);
}`,"org.gradoop.flink.model.impl.epgm.GraphCollection.getEdges_":
 `@Override
public DataSet<EPGMEdge> getEdges() {
    return layout.getEdges();
}`,"org.gradoop.common.util.AsciiGraphLoader.getVerticesByGraphVariables_String":
 `/**
 * Returns all vertices that belong to the given graph variables.
 *
 * @param graphVariables graph variables used in the GDL script
 * @return vertices that are contained in the graphs
 */
public Collection<V> getVerticesByGraphVariables(String... graphVariables) {
    GradoopIdSet graphIds = new GradoopIdSet();
    for (G graphHead : getGraphHeadsByVariables(graphVariables)) {
        graphIds.add(graphHead.getId());
    }
    return getVerticesByGraphIds(graphIds);
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getMetaDataPath_":
 `protected String getMetaDataPath() {
    return csvRoot + METADATA_FILE;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHead_":
 `@Override
public DataSet<EPGMGraphHead> getGraphHead() {
    return graphHeads;
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getVertexFactory_":
 `@Override
public VertexFactory<EPGMVertex> getVertexFactory() {
    return layoutFactory.getVertexFactory();
}`,"org.gradoop.flink.util.FlinkAsciiGraphLoader.getLogicalGraphByVariable_String":
 `/**
 * Builds a {@link LogicalGraph} from the graph referenced by the given
 * graph variable.
 *
 * @param variable graph variable used in GDL script
 * @return LogicalGraph
 */
public LogicalGraph getLogicalGraphByVariable(String variable) {
    EPGMGraphHead graphHead = getGraphHeadByVariable(variable);
    Collection<EPGMVertex> vertices = getVerticesByGraphVariables(variable);
    Collection<EPGMEdge> edges = getEdgesByGraphVariables(variable);
    return config.getLogicalGraphFactory().fromCollections(graphHead, vertices, edges);
}`,"org.gradoop.flink.io.impl.csv.functions.CSVLineToVertex.<init>_VertexFactory":
 `/**
 * Constructor
 *
 * @param epgmVertexFactory EPGM vertex factory
 */
public CSVLineToVertex(VertexFactory<EPGMVertex> epgmVertexFactory) {
    this.vertexFactory = epgmVertexFactory;
}`,"org.gradoop.flink.io.impl.csv.functions.CSVLineToEdge.<init>_EdgeFactory":
 `/**
 * Constructor.
 *
 * @param epgmEdgeFactory EPGM edge factory
 */
public CSVLineToEdge(EdgeFactory<EPGMEdge> epgmEdgeFactory) {
    this.edgeFactory = epgmEdgeFactory;
}`,"org.gradoop.common.util.AsciiGraphLoader.fromFile_String_ElementFactoryProvider":
 `/**
 * Creates an AsciiGraphLoader from the given ASCII GDL file.
 *
 * @param fileName File that contains a GDL script
 * @param elementFactoryProvider Factory provider for graph elements.
 * @param <G> graph head type
 * @param <V> vertex type
 * @param <E> edge type
 *
 * @return AsciiGraphLoader
 * @throws IOException on failure
 */
public static <G extends GraphHead, V extends Vertex, E extends Edge> AsciiGraphLoader<G, V, E> fromFile(String fileName, ElementFactoryProvider<G, V, E> elementFactoryProvider) throws IOException {
    return new AsciiGraphLoader<>(new GDLHandler.Builder().setDefaultGraphLabel(GradoopConstants.DEFAULT_GRAPH_LABEL).setDefaultVertexLabel(GradoopConstants.DEFAULT_VERTEX_LABEL).setDefaultEdgeLabel(GradoopConstants.DEFAULT_EDGE_LABEL).setErrorStrategy(new BailSyntaxErrorStrategy()).buildFromFile(fileName), elementFactoryProvider);
}`,"org.gradoop.common.config.GradoopConfig.<init>_":
 ``,"org.gradoop.common.util.AsciiGraphLoader.initEdges_":
 `/**
 * Initializes edges and their cache.
 */
private void initEdges() {
    for (org.s1ck.gdl.model.Edge e : gdlHandler.getEdges()) {
        initEdge(e);
    }
    for (Map.Entry<String, org.s1ck.gdl.model.Edge> e : gdlHandler.getEdgeCache().entrySet()) {
        updateEdgeCache(e.getKey(), e.getValue());
    }
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaData.<init>_Map_Map_Map":
 `/**
 * Constructor
 *
 * @param graphMetaData  a map between each graph label and its property metadata
 * @param vertexMetaData a map between each vertex label and its property metadata
 * @param edgeMetaData   a map between each edge label and its property metadata
 */
public CSVMetaData(Map<String, List<PropertyMetaData>> graphMetaData, Map<String, List<PropertyMetaData>> vertexMetaData, Map<String, List<PropertyMetaData>> edgeMetaData) {
    super(graphMetaData, vertexMetaData, edgeMetaData);
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.toBytes_String":
 `/**
 * Converts a string to a UTF-8 byte array.
 *
 * @param s string
 * @return the byte array
 */
public static byte[] toBytes(String s) {
    return s.getBytes(StandardCharsets.UTF_8);
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.writeIds_Set":
 `/**
 * Serialize all ids into a byte array.
 * @param ids sequence of {@link GradoopId}s
 * @return a binary representation
 */
private byte[] writeIds(Set<GradoopId> ids) {
    byte[] bytes = new byte[ids.size() * GradoopId.ID_SIZE];
    int i = 0;
    for (GradoopId id : ids) {
        System.arraycopy(id.toByteArray(), 0, bytes, i * GradoopId.ID_SIZE, GradoopId.ID_SIZE);
        i++;
    }
    return bytes;
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.fromTuples_List":
 `@Override
public CSVMetaData fromTuples(List<Tuple3<String, String, String>> metaDataStrings) {
    Map<String, List<PropertyMetaData>> graphMetaDataMap = new HashMap<>(metaDataStrings.size());
    Map<String, List<PropertyMetaData>> vertexMetaDataMap = new HashMap<>(metaDataStrings.size());
    Map<String, List<PropertyMetaData>> edgeMetaDataMap = new HashMap<>(metaDataStrings.size());
    for (Tuple3<String, String, String> tuple : metaDataStrings) {
        List<PropertyMetaData> propertyMetaDataList;
        if (tuple.f2.length() > 0) {
            String[] propertyStrings = StringEscaper.split(tuple.f2, PropertyMetaData.PROPERTY_DELIMITER);
            propertyMetaDataList = new ArrayList<>(propertyStrings.length);
            for (String propertyMetaData : propertyStrings) {
                String[] propertyMetaDataTokens = StringEscaper.split(propertyMetaData, PropertyMetaData.PROPERTY_TOKEN_DELIMITER, 2);
                propertyMetaDataList.add(new PropertyMetaData(StringEscaper.unescape(propertyMetaDataTokens[0]), propertyMetaDataTokens[1], CSVMetaDataParser.getPropertyValueParser(propertyMetaDataTokens[1])));
            }
        } else {
            propertyMetaDataList = new ArrayList<>(0);
        }
        String label = StringEscaper.unescape(tuple.f1);
        switch(tuple.f0) {
            case GRAPH_TYPE:
                graphMetaDataMap.put(label, propertyMetaDataList);
                break;
            case VERTEX_TYPE:
                vertexMetaDataMap.put(label, propertyMetaDataList);
                break;
            case EDGE_TYPE:
                edgeMetaDataMap.put(label, propertyMetaDataList);
                break;
            default:
                throw new IllegalArgumentException("Type " + tuple.f0 + " is not a valid epgm type " + "string. Valid strings are g, v and e.");
        }
    }
    return new CSVMetaData(graphMetaDataMap, vertexMetaDataMap, edgeMetaDataMap);
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.iterator_":
 `@Override
public Iterator<GradoopId> iterator() {
    return ids.iterator();
}`,"org.gradoop.common.model.impl.properties.strategies.SetStrategy.<init>_":
 ``,"org.gradoop.flink.model.impl.epgm.LogicalGraph.getGraphHead_":
 `@Override
public DataSet<EPGMGraphHead> getGraphHead() {
    return layout.getGraphHead();
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putDouble_byte[]_int_double":
 `/**
 * Put a double value out to the specified byte position.
 *
 * @param bytes byte array
 * @param offset offset to write to
 * @param d value
 * @return New offset into array <code>bytes</code>
 */
public static int putDouble(byte[] bytes, int offset, double d) {
    return putLong(bytes, offset, Double.doubleToLongBits(d));
}`,"org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_":
 `/**
 * Returns the process identifier component of the id.
 *
 * @return the process identifier
 */
private short getProcessIdentifier() {
    return (short) makeInt((byte) 0, (byte) 0, bytes[7], bytes[8]);
}`,"org.gradoop.common.model.impl.properties.strategies.ListStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.LIST.getTypeByte();
}`,"org.gradoop.common.model.impl.metadata.MetaData.createStringToClassMap_":
 `/**
 * Create a map between type strings and their corresponding classes.
 *
 * @return map between string types and corresponding classes
 */
private static Map<String, Class<?>> createStringToClassMap() {
    Map<String, Class<?>> stringClassMap = new HashMap<>();
    stringClassMap.put(Type.NULL.toString(), null);
    stringClassMap.put(Type.SHORT.toString(), Short.class);
    stringClassMap.put(Type.INTEGER.toString(), Integer.class);
    stringClassMap.put(Type.LONG.toString(), Long.class);
    stringClassMap.put(Type.FLOAT.toString(), Float.class);
    stringClassMap.put(Type.DOUBLE.toString(), Double.class);
    stringClassMap.put(Type.BOOLEAN.toString(), Boolean.class);
    stringClassMap.put(Type.STRING.toString(), String.class);
    stringClassMap.put(Type.BIG_DECIMAL.toString(), BigDecimal.class);
    stringClassMap.put(Type.GRADOOP_ID.toString(), GradoopId.class);
    stringClassMap.put(Type.MAP.toString(), Map.class);
    stringClassMap.put(Type.LIST.toString(), List.class);
    stringClassMap.put(Type.DATE.toString(), LocalDate.class);
    stringClassMap.put(Type.TIME.toString(), LocalTime.class);
    stringClassMap.put(Type.DATE_TIME.toString(), LocalDateTime.class);
    stringClassMap.put(Type.SET.toString(), Set.class);
    return Collections.unmodifiableMap(stringClassMap);
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putIntUnsafe_byte[]_int_int":
 `/**
 * Put an int value out to the specified byte array position (Unsafe).
 *
 * @param bytes the byte array
 * @param offset position in the array
 * @param val int to write out
 * @return incremented offset
 */
private static int putIntUnsafe(byte[] bytes, int offset, int val) {
    if (LexicographicalComparerHolder.UnsafeComparer.LITTLE_ENDIAN) {
        val = Integer.reverseBytes(val);
    }
    LexicographicalComparerHolder.UnsafeComparer.UNSAFE.putInt(bytes, (long) offset + LexicographicalComparerHolder.UnsafeComparer.BYTE_ARRAY_BASE_OFFSET, val);
    return offset + SIZEOF_INT;
}`,"org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.initClassStrategyMap_":
 `/**
 * Initializes class-strategy mapping.
 *
 * @return Map of supported class-strategy associations.
 */
private Map<Class, PropertyValueStrategy> initClassStrategyMap() {
    Map<Class, PropertyValueStrategy> classMapping = new HashMap<>();
    classMapping.put(Boolean.class, new BooleanStrategy());
    classMapping.put(Set.class, new SetStrategy());
    classMapping.put(Integer.class, new IntegerStrategy());
    classMapping.put(Long.class, new LongStrategy());
    classMapping.put(Float.class, new FloatStrategy());
    classMapping.put(Double.class, new DoubleStrategy());
    classMapping.put(Short.class, new ShortStrategy());
    classMapping.put(BigDecimal.class, new BigDecimalStrategy());
    classMapping.put(LocalDate.class, new DateStrategy());
    classMapping.put(LocalTime.class, new TimeStrategy());
    classMapping.put(LocalDateTime.class, new DateTimeStrategy());
    classMapping.put(GradoopId.class, new GradoopIdStrategy());
    classMapping.put(String.class, new StringStrategy());
    classMapping.put(List.class, new ListStrategy());
    classMapping.put(Map.class, new MapStrategy());
    return Collections.unmodifiableMap(classMapping);
}`,"org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.<init>_String_GradoopFlinkConfig":
 `/**
 * Creates a new data source. The constructor creates a default HDFS configuration.
 *
 * @param csvPath root path of csv files
 * @param config  gradoop configuration
 */
public IndexedCSVDataSource(String csvPath, GradoopFlinkConfig config) {
    this(csvPath, config, new Configuration());
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.createVertexDataSet_Collection":
 `/**
 * Creates a vertex dataset from a given collection.
 * Encapsulates the workaround for dataset creation from an empty collection.
 *
 * @param vertices  vertex collection
 * @return vertex dataset
 */
protected DataSet<EPGMVertex> createVertexDataSet(Collection<EPGMVertex> vertices) {
    ExecutionEnvironment env = getConfig().getExecutionEnvironment();
    DataSet<EPGMVertex> vertexSet;
    if (vertices.isEmpty()) {
        vertexSet = env.fromElements(getVertexFactory().createVertex()).filter(new False<>());
    } else {
        vertexSet = env.fromCollection(vertices);
    }
    return vertexSet;
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.TargetStringUpdater.<init>_":
 ``,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.setGradoopFlinkConfig_GradoopFlinkConfig":
 `@Override
public void setGradoopFlinkConfig(GradoopFlinkConfig config) {
    Objects.requireNonNull(config);
    this.config = config;
}`,"org.gradoop.common.util.AsciiGraphLoader.init_":
 `// ---------------------------------------------------------------------------
//  Private init methods
// ---------------------------------------------------------------------------
/**
 * Initializes the AsciiGraphLoader
 */
private void init() {
    initGraphHeads();
    initVertices();
    initEdges();
}`,"org.gradoop.flink.util.FlinkAsciiGraphLoader.getVerticesByGraphVariables_String":
 `/**
 * Returns all vertices that belong to the given graph variables.
 *
 * @param variables graph variables used in the GDL script
 * @return vertices that are contained in the graphs
 */
public Collection<EPGMVertex> getVerticesByGraphVariables(String... variables) {
    return loader.getVerticesByGraphVariables(variables);
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.readLocal_String_Configuration":
 `@Override
public CSVMetaData readLocal(String path, Configuration hdfsConfig) throws IOException {
    FileSystem fs = FileSystem.get(hdfsConfig);
    Path file = new Path(path);
    Charset charset = StandardCharsets.UTF_8;
    if (!fs.exists(file)) {
        throw new FileNotFoundException(path);
    } else {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(fs.open(file), charset))) {
            return fromTuples(br.lines().map(line -> StringEscaper.split(line, CSVConstants.TOKEN_DELIMITER, 3)).map(tokens -> Tuple3.of(tokens[0], tokens[1], tokens[2])).collect(Collectors.toList()));
        }
    }
}`,"org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawBytes_Integer":
 `@Override
public byte[] getRawBytes(Integer value) {
    byte[] rawBytes = new byte[PropertyValue.OFFSET + Bytes.SIZEOF_INT];
    rawBytes[0] = getRawType();
    Bytes.putInt(rawBytes, PropertyValue.OFFSET, value);
    return rawBytes;
}`,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.setLayoutFactory_GraphCollectionLayoutFactory":
 `@Override
public void setLayoutFactory(GraphCollectionLayoutFactory<EPGMGraphHead, EPGMVertex, EPGMEdge> layoutFactory) {
    Objects.requireNonNull(layoutFactory);
    this.layoutFactory = layoutFactory;
    this.layoutFactory.setGradoopFlinkConfig(config);
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.createEdgeDataSet_Collection":
 `/**
 * Creates an edge dataset from a given collection.
 * Encapsulates the workaround for dataset creation from an empty collection.
 *
 * @param edges edge collection
 * @return edge dataset
 */
protected DataSet<EPGMEdge> createEdgeDataSet(Collection<EPGMEdge> edges) {
    ExecutionEnvironment env = getConfig().getExecutionEnvironment();
    DataSet<EPGMEdge> edgeSet;
    if (edges.isEmpty()) {
        GradoopId dummyId = GradoopId.get();
        edgeSet = env.fromElements(getEdgeFactory().createEdge(dummyId, dummyId)).filter(new False<>());
    } else {
        edgeSet = env.fromCollection(edges);
    }
    return edgeSet;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.create_Object":
 `/**
 * Creates a new Property Value from the given object.
 *
 * If the given object type is not supported, an
 * {@link UnsupportedTypeException} will be thrown.
 *
 * @param value value with supported type
 * @return property value
 */
public static PropertyValue create(Object value) {
    return new PropertyValue(value);
}`,"org.gradoop.flink.io.impl.csv.functions.CSVLineToElement.<init>_":
 `/**
 * Constructor
 */
public CSVLineToElement() {
    this.properties = Properties.create();
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putByte_byte[]_int_byte":
 `/**
 * Write a single byte out to the specified byte array position.
 *
 * @param bytes the byte array
 * @param offset position in the array
 * @param b byte to write out
 * @return incremented offset
 */
public static int putByte(byte[] bytes, int offset, byte b) {
    bytes[offset] = b;
    return offset + 1;
}`,"org.gradoop.common.model.impl.properties.Properties.createFromMap_Map":
 `/**
 * Creates a new property collection from a given map.
 *
 * If map is {@code null} an empty properties instance will be returned.
 *
 * @param map key value map
 * @return PropertyList
 */
public static Properties createFromMap(Map<String, Object> map) {
    Properties properties;
    if (map == null) {
        properties = Properties.createWithCapacity(0);
    } else {
        properties = Properties.createWithCapacity(map.size());
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            properties.set(entry.getKey(), PropertyValue.create(entry.getValue()));
        }
    }
    return properties;
}`,"org.gradoop.common.model.impl.pojo.EPGMEdge.<init>_GradoopId_String_GradoopId_GradoopId_Properties_GradoopIdSet":
 `/**
 * Creates an edge instance based on the given parameters.
 *
 * @param id          edge identifier
 * @param label       edge label
 * @param sourceId    source vertex id
 * @param targetId    target vertex id
 * @param properties  edge properties
 * @param graphIds    graphs that edge is contained in
 */
public EPGMEdge(final GradoopId id, final String label, final GradoopId sourceId, final GradoopId targetId, final Properties properties, GradoopIdSet graphIds) {
    super(id, label, properties, graphIds);
    this.sourceId = sourceId;
    this.targetId = targetId;
}`,"org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getType_":
 `@Override
public Class<Float> getType() {
    return Float.class;
}`,"org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.LONG.getTypeByte();
}`,"org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.DATE_TIME.getTypeByte();
}`,"org.gradoop.common.util.AsciiGraphLoader.updateVertexCache_String_Vertex":
 `/**
 * Updates the vertex cache.
 *
 * @param variable vertex variable used in GDL script
 * @param v vertex from GDL loader
 */
private void updateVertexCache(String variable, org.s1ck.gdl.model.Vertex v) {
    vertexCache.put(variable, vertices.get(vertexIds.get(v.getId())));
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.ConcatGraphHeadStrings.<init>_":
 ``,"org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int":
 `/**
 * Creates a GradoopId using the given time, machine identifier, process identifier, and counter.
 * <p>
 * Note: Implementation taken from org.bson.types.ObjectId
 *
 * @param timestamp         the time in seconds
 * @param machineIdentifier the machine identifier
 * @param processIdentifier the process identifier
 * @param counter           the counter
 * @throws IllegalArgumentException if the high order byte of machineIdentifier
 *                                  or counter is not zero
 */
public GradoopId(final int timestamp, final int machineIdentifier, final short processIdentifier, final int counter) {
    this(timestamp, machineIdentifier, processIdentifier, counter, true);
}`,"org.gradoop.flink.model.impl.functions.bool.False.<init>_":
 ``,"org.gradoop.common.model.impl.id.GradoopIdSet.toString_":
 `@Override
public String toString() {
    if (isEmpty()) {
        return "[]";
    }
    Iterator<GradoopId> it = iterator();
    StringBuilder sb = new StringBuilder();
    sb.append('[');
    for (; ; ) {
        GradoopId id = it.next();
        sb.append(id);
        if (!it.hasNext()) {
            return sb.append(']').toString();
        }
        sb.append(',').append(' ');
    }
}`,"org.gradoop.common.model.impl.properties.Properties.<init>_":
 `/**
 * Default constructor
 */
public Properties() {
    properties = new HashMap<>(DEFAULT_CAPACITY);
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getConfig_":
 `protected GradoopFlinkConfig getConfig() {
    return config;
}`,"org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawBytes_String":
 `@Override
public byte[] getRawBytes(String value) {
    byte[] valueBytes = Bytes.toBytes(value);
    byte[] rawBytes = new byte[PropertyValue.OFFSET + valueBytes.length];
    rawBytes[0] = getRawType();
    Bytes.putBytes(rawBytes, PropertyValue.OFFSET, valueBytes, 0, valueBytes.length);
    return rawBytes;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHeads_":
 `@Override
public DataSet<EPGMGraphHead> getGraphHeads() {
    return graphHeads;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromDataSets_DataSet_DataSet_DataSet":
 `@Override
public GraphCollectionLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> fromDataSets(DataSet<EPGMGraphHead> graphHeads, DataSet<EPGMVertex> vertices, DataSet<EPGMEdge> edges) {
    return create(graphHeads, vertices, edges);
}`,"org.gradoop.common.util.AsciiGraphLoader.initVertex_Vertex":
 `/**
 * Creates a new Vertex from the GDL Loader or updates an existing one.
 *
 * @param v vertex from GDL Loader
 * @return vertex
 */
private V initVertex(org.s1ck.gdl.model.Vertex v) {
    V vertex;
    if (!vertexIds.containsKey(v.getId())) {
        vertex = elementFactoryProvider.getVertexFactory().createVertex(v.getLabel(), Properties.createFromMap(v.getProperties()), createGradoopIdSet(v));
        vertexIds.put(v.getId(), vertex.getId());
        vertices.put(vertex.getId(), vertex);
    } else {
        vertex = vertices.get(vertexIds.get(v.getId()));
        vertex.setGraphIds(createGradoopIdSet(v));
    }
    return vertex;
}`,"org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.BIG_DECIMAL.getTypeByte();
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.VertexToDataString.<init>_":
 ``,"org.gradoop.flink.util.FlinkAsciiGraphLoader.<init>_GradoopFlinkConfig":
 `/**
 * Creates a new FlinkAsciiGraphLoader instance.
 *
 * @param config Gradoop Flink configuration
 */
public FlinkAsciiGraphLoader(GradoopFlinkConfig config) {
    if (config == null) {
        throw new IllegalArgumentException("Config must not be null.");
    }
    this.config = config;
}`,"org.gradoop.common.model.impl.properties.strategies.SetStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.SET.getTypeByte();
}`,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.<init>_GradoopFlinkConfig":
 `/**
 * Creates a new factory.
 *
 * @param config Gradoop Flink configuration
 */
public GraphCollectionFactory(GradoopFlinkConfig config) {
    this.config = config;
}`,"org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.FLOAT.getTypeByte();
}`,"org.gradoop.common.model.impl.id.GradoopId.toByteArray_":
 `/**
 * Returns byte representation of a GradoopId
 *
 * @return Byte representation
 */
public byte[] toByteArray() {
    return bytes;
}`,"org.gradoop.flink.io.impl.csv.functions.CSVLineToGraphHead.<init>_GraphHeadFactory":
 `/**
 * Creates a CSVLineToGraphHead converter
 *
 * @param graphHeadFactory The factory class that is used to create the graph heads.
 */
public CSVLineToGraphHead(GraphHeadFactory<EPGMGraphHead> graphHeadFactory) {
    this.graphHeadFactory = graphHeadFactory;
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getEdgeFactory_":
 `@Override
public EdgeFactory<EPGMEdge> getEdgeFactory() {
    return layoutFactory.getEdgeFactory();
}`,"org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphFactory_":
 `@Override
public BaseGraphFactory<EPGMGraphHead, EPGMVertex, EPGMEdge, LogicalGraph, GraphCollection> getGraphFactory() {
    return config.getLogicalGraphFactory();
}`,"org.gradoop.common.model.impl.pojo.EPGMGraphHead.<init>_GradoopId_String_Properties":
 `/**
 * Creates a graph head based on the given parameters.
 *
 * @param id         graph identifier
 * @param label      graph label
 * @param properties graph properties
 */
public EPGMGraphHead(final GradoopId id, final String label, final Properties properties) {
    super(id, label, properties);
}`,"org.gradoop.common.util.AsciiGraphLoader.getEdgesByGraphVariables_String":
 `/**
 * Returns all edges that belong to the given graph variables.
 *
 * @param variables graph variables used in the GDL script
 * @return edges
 */
public Collection<E> getEdgesByGraphVariables(String... variables) {
    GradoopIdSet graphIds = new GradoopIdSet();
    for (G graphHead : getGraphHeadsByVariables(variables)) {
        graphIds.add(graphHead.getId());
    }
    return getEdgesByGraphIds(graphIds);
}`,"org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy.<init>_":
 ``,"org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.getGraphHeadStrings_GC":
 `/**
 * Created a dataset of (graph id, canonical label) pairs.
 *
 * @param collection input collection
 * @return (graph id, canonical label) pairs
 */
public DataSet<GraphHeadString> getGraphHeadStrings(GC collection) {
    // 1. label graph heads
    DataSet<GraphHeadString> graphHeadLabels = collection.getGraphHeads().map(graphHeadToString);
    // 2. label vertices
    DataSet<VertexString> vertexLabels = collection.getVertices().flatMap(vertexToString);
    // 3. label edges
    DataSet<EdgeString> edgeLabels = collection.getEdges().flatMap(egeLabelingFunction);
    if (directed) {
        // 4. combine labels of parallel edges
        edgeLabels = edgeLabels.groupBy(0, 1, 2).reduceGroup(new MultiEdgeStringCombiner());
        // 5. extend edge labels by vertex labels
        edgeLabels = edgeLabels.join(vertexLabels).where(0, 1).equalTo(0, // graphId,sourceId = graphId,vertexId
        1).with(new SourceStringUpdater()).join(vertexLabels).where(0, 2).equalTo(0, // graphId,targetId = graphId,vertexId
        1).with(new TargetStringUpdater());
        // 6. extend vertex labels by outgoing vertex+edge labels
        DataSet<VertexString> outgoingAdjacencyListLabels = // graphId, sourceId
        edgeLabels.groupBy(0, 1).reduceGroup(new OutgoingAdjacencyList());
        // 7. extend vertex labels by outgoing vertex+edge labels
        DataSet<VertexString> incomingAdjacencyListLabels = // graphId, targetId
        edgeLabels.groupBy(0, 2).reduceGroup(new IncomingAdjacencyList());
        // 8. combine vertex labels
        vertexLabels = vertexLabels.leftOuterJoin(outgoingAdjacencyListLabels).where(0, 1).equalTo(0, 1).with(new LabelCombiner<VertexString>()).leftOuterJoin(incomingAdjacencyListLabels).where(0, 1).equalTo(0, 1).with(new LabelCombiner<VertexString>());
    } else {
        // undirected graph
        // 4. union edges with flipped edges and combine labels of parallel edges
        edgeLabels = edgeLabels.union(edgeLabels.map(new SwitchSourceTargetIds())).groupBy(0, 1, 2).reduceGroup(new MultiEdgeStringCombiner());
        // 5. extend edge labels by vertex labels
        edgeLabels = edgeLabels.join(vertexLabels).where(0, 2).equalTo(0, // graphId,targetId = graphId,vertexId
        1).with(new TargetStringUpdater());
        // 6/7. extend vertex labels by vertex+edge labels
        DataSet<VertexString> adjacencyListLabels = // graphId, sourceId
        edgeLabels.groupBy(0, 1).reduceGroup(new UndirectedAdjacencyList());
        // 8. combine vertex labels
        vertexLabels = vertexLabels.leftOuterJoin(adjacencyListLabels).where(0, 1).equalTo(0, 1).with(new LabelCombiner<VertexString>());
    }
    // 9. create adjacency matrix labels
    DataSet<GraphHeadString> adjacencyMatrixLabels = vertexLabels.groupBy(0).reduceGroup(new AdjacencyMatrix());
    // 10. combine graph labels
    graphHeadLabels = graphHeadLabels.leftOuterJoin(adjacencyMatrixLabels).where(0).equalTo(0).with(new LabelCombiner<GraphHeadString>());
    return graphHeadLabels;
}`,"org.gradoop.common.util.AsciiGraphLoader.getEdgesByGraphIds_GradoopIdSet":
 `/**
 * Returns all edges that belong to the given graphs.
 *
 * @param graphIds Graph identifiers
 * @return edges
 */
public Collection<E> getEdgesByGraphIds(GradoopIdSet graphIds) {
    Collection<E> result = Sets.newHashSetWithExpectedSize(graphIds.size());
    for (E edge : edges.values()) {
        if (edge.getGraphIds().containsAny(graphIds)) {
            result.add(edge);
        }
    }
    return result;
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser.getPropertyValueParser_String":
 `/**
 * Creates a parsing function for the given property type.
 *
 * @param propertyType string specifying the property type
 * @return parsing function for the specific type
 */
static Function<String, Object> getPropertyValueParser(String propertyType) {
    String[] typeTokens = StringEscaper.split(propertyType.toLowerCase(), PropertyMetaData.PROPERTY_TOKEN_DELIMITER);
    String mainType = typeTokens[0];
    if (mainType.equals(Type.LIST.toString())) {
        return getListValueParser(typeTokens);
    } else if (mainType.equals(Type.SET.toString())) {
        return getSetValueParser(typeTokens);
    } else if (mainType.equals(Type.MAP.toString())) {
        return getMapValueParser(typeTokens);
    } else if (SIMPLE_TYPE_PARSER_MAP.containsKey(mainType)) {
        return SIMPLE_TYPE_PARSER_MAP.get(mainType);
    } else {
        throw new TypeNotPresentException(mainType, null);
    }
}`,"org.gradoop.common.model.impl.properties.Property.toString_":
 `@Override
public String toString() {
    return String.format("%s=%s:%s", key, value, value.getType() != null ? value.getType().getSimpleName() : "null");
}`,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.fromIndexedDataSets_Map_Map_Map":
 `@Override
public GraphCollection fromIndexedDataSets(Map<String, DataSet<EPGMGraphHead>> graphHeads, Map<String, DataSet<EPGMVertex>> vertices, Map<String, DataSet<EPGMEdge>> edges) {
    GraphCollectionLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> layout = layoutFactory.fromIndexedDataSets(graphHeads, vertices, edges);
    return new GraphCollection(layout, config);
}`,"org.gradoop.common.model.impl.pojo.EPGMVertex.<init>_GradoopId_String_Properties_GradoopIdSet":
 `/**
 * Creates a vertex based on the given parameters.
 *
 * @param id         vertex identifier
 * @param label      vertex label
 * @param properties vertex properties
 * @param graphs     graphs that vertex is contained in
 */
public EPGMVertex(final GradoopId id, final String label, final Properties properties, final GradoopIdSet graphs) {
    super(id, label, properties, graphs);
}`,"org.gradoop.common.model.impl.id.GradoopId.createMachineIdentifier_":
 `/**
 * Creates the machine identifier from the network interface.
 * <p>
 * Note: Implementation taken from org.bson.types.ObjectId
 *
 * @return a short representing the process
 */
private static int createMachineIdentifier() {
    int machinePiece;
    try {
        StringBuilder sb = new StringBuilder();
        Enumeration<NetworkInterface> e = NetworkInterface.getNetworkInterfaces();
        while (e.hasMoreElements()) {
            NetworkInterface ni = e.nextElement();
            sb.append(ni.toString());
            byte[] mac = ni.getHardwareAddress();
            if (mac != null) {
                ByteBuffer bb = ByteBuffer.wrap(mac);
                try {
                    sb.append(bb.getChar());
                    sb.append(bb.getChar());
                    sb.append(bb.getChar());
                } catch (BufferUnderflowException shortHardwareAddressException) {
                    // mac with less than 6 bytes. continue
                }
            }
        }
        machinePiece = sb.toString().hashCode();
    } catch (SocketException t) {
        machinePiece = new SecureRandom().nextInt();
    }
    machinePiece = machinePiece & LOW_ORDER_THREE_BYTES;
    return machinePiece;
}`,"org.gradoop.common.model.impl.properties.Properties.createWithCapacity_int":
 `/**
 * Creates a new property list with the given initial capacity.
 *
 * @param capacity initial capacity
 * @return PropertyList
 */
public static Properties createWithCapacity(int capacity) {
    return new Properties(capacity);
}`,"org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.is_Object":
 `@Override
public boolean is(Object value) {
    return value instanceof Boolean;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getObject_":
 `/**
 * Returns the wrapped value as object.
 *
 * @return value or {@code null} if the value is empty
 */
public Object getObject() {
    Object obj = null;
    if (value != null) {
        obj = get(value.getClass());
    }
    return obj;
}`,"org.gradoop.flink.model.impl.functions.bool.Equals.<init>_":
 ``,"org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache_":
 `// ---------------------------------------------------------------------------
//  Caches
// ---------------------------------------------------------------------------
/**
 * Returns all graph heads that are bound to a variable in the GDL script.
 *
 * @return variable to graphHead mapping
 */
public Map<String, G> getGraphHeadCache() {
    return new ImmutableMap.Builder<String, G>().putAll(graphHeadCache).build();
}`,"org.gradoop.common.util.AsciiGraphLoader.getVerticesByGraphIds_GradoopIdSet":
 `/**
 * Returns all vertices that belong to the given graphs.
 *
 * @param graphIds graph identifiers
 * @return vertices that are contained in the graphs
 */
public Collection<V> getVerticesByGraphIds(GradoopIdSet graphIds) {
    Collection<V> result = Sets.newHashSetWithExpectedSize(graphIds.size());
    for (V vertex : vertices.values()) {
        if (vertex.getGraphIds().containsAny(graphIds)) {
            result.add(vertex);
        }
    }
    return result;
}`,"org.gradoop.flink.util.FlinkAsciiGraphLoader.getEdgesByGraphVariables_String":
 `/**
 * Returns all edges that belong to the given graph variables.
 *
 * @param variables graph variables used in the GDL script
 * @return edges
 */
public Collection<EPGMEdge> getEdgesByGraphVariables(String... variables) {
    return loader.getEdgesByGraphVariables(variables);
}`,"org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getGraphHeadFactory_":
 `@Override
public GraphHeadFactory<EPGMGraphHead> getGraphHeadFactory() {
    return layoutFactory.getGraphHeadFactory();
}`,"org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.LongStrategy.is_Object":
 `@Override
public boolean is(Object value) {
    return value instanceof Long;
}`,"org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphHeads_":
 `@Override
public DataSet<EPGMGraphHead> getGraphHeads() {
    return layout.getGraphHeads();
}`,"org.gradoop.flink.model.impl.operators.equality.CollectionEquality.execute_GC_GC":
 `@Override
public DataSet<Boolean> execute(GC firstCollection, GC secondCollection) {
    return Equals.cross(canonicalAdjacencyMatrixBuilder.execute(firstCollection), canonicalAdjacencyMatrixBuilder.execute(secondCollection));
}`,"org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices_":
 `@Override
public DataSet<EPGMVertex> getVertices() {
    return vertices;
}`,"org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory_":
 `/**
 * Returns a factory that is able to create logical graph layouts.
 *
 * @return factory for logical graph layouts
 */
public LogicalGraphFactory getLogicalGraphFactory() {
    return (LogicalGraphFactory) graphFactory;
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.MultiEdgeStringCombiner.<init>_":
 ``,"org.gradoop.flink.model.impl.epgm.LogicalGraph.callForValue_BinaryBaseGraphToValueOperator_LogicalGraph":
 `@Override
public <T> T callForValue(BinaryBaseGraphToValueOperator<LogicalGraph, T> operator, LogicalGraph otherGraph) {
    return operator.execute(this, otherGraph);
}`,"org.gradoop.flink.io.impl.csv.CSVBase.getGraphHeadPath_":
 `/**
 * Returns the path to the graph head directory.
 *
 * @return graph head path
 */
protected String getGraphHeadPath() {
    return csvRoot + GRAPH_HEAD_PATH;
}`,"org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create_DataSet_DataSet_DataSet":
 `/**
 * Creates a collection layout from the given datasets.
 *
 * @param graphHeads EPGMGraphHead DataSet
 * @param vertices EPGMVertex DataSet
 * @param edges EPGMEdge DataSet
 * @return GVE layout
 */
GVELayout create(DataSet<EPGMGraphHead> graphHeads, DataSet<EPGMVertex> vertices, DataSet<EPGMEdge> edges) {
    Objects.requireNonNull(graphHeads, "EPGMGraphHead DataSet was null");
    Objects.requireNonNull(vertices, "EPGMVertex DataSet was null");
    Objects.requireNonNull(edges, "EPGMEdge DataSet was null");
    return new GVELayout(graphHeads, vertices, edges);
}`,"org.gradoop.common.model.impl.properties.strategies.DateStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.pojo.EPGMGraphElement.getGraphIds_":
 `@Override
public GradoopIdSet getGraphIds() {
    return graphIds;
}`,"org.gradoop.flink.model.GradoopFlinkTestBase.getNewLoader_":
 `/**
 * Returns an uninitialized loader with the test config.
 *
 * @return uninitialized Flink Ascii graph loader
 */
private FlinkAsciiGraphLoader getNewLoader() {
    return new FlinkAsciiGraphLoader(getConfig());
}`,"org.gradoop.common.model.impl.metadata.MetaData.getGraphLabels_":
 `/**
 * Returns the graph labels available in the meta data.
 *
 * @return graph labels
 */
public Set<String> getGraphLabels() {
    return graphMetaData.keySet();
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig_":
 `protected GradoopFlinkConfig getConfig() {
    return config;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView":
 `/**
 * Byte representation:
 *
 * byte 1       : type info
 *
 * for dynamic length types (e.g. String and BigDecimal)
 * byte 2       : length (short)
 * byte 3       : length (short)
 * byte 4 - end : value bytes
 *
 * If the size of the internal byte representation if larger than
 * {@link #LARGE_PROPERTY_THRESHOLD} (i.e. if a {@code short} is too small to store the length),
 * then the {@link #FLAG_LARGE} bit will be set in the first byte and the byte representation
 * will be:
 * byte 2       ; length (int)
 * byte 3       : length (int)
 * byte 4       : length (int)
 * byte 5       : length (int)
 * byte 6 - end : value bytes
 *
 * for fixed length types (e.g. int, long, float, ...)
 * byte 2 - end : value bytes
 *
 * @param outputView data output to write data to
 * @throws IOException if write to output view fails.
 */
@Override
public void write(DataOutputView outputView) throws IOException {
    PropertyValueStrategyFactory.get(value).write(value, outputView);
}`,"org.gradoop.common.model.impl.pojo.EPGMEdge.toString_":
 `@Override
public String toString() {
    return String.format("(%s)-[%s]->(%s)", sourceId, super.toString(), targetId);
}`,"org.gradoop.flink.model.GradoopFlinkTestBase.getConfig_":
 `/**
 * Returns the configuration for the test
 *
 * @return Gradoop Flink configuration
 */
protected GradoopFlinkConfig getConfig() {
    if (config == null) {
        setConfig(GradoopFlinkConfig.createConfig(getExecutionEnvironment(), graphLayoutFactory, collectionLayoutFactory));
    }
    return config;
}`,"org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.<init>_":
 ``,"org.gradoop.flink.model.GradoopFlinkTestBase.getExecutionEnvironment_":
 `/**
 * Returns the execution environment for the tests
 *
 * @return Flink execution environment
 */
protected ExecutionEnvironment getExecutionEnvironment() {
    return env;
}`,"org.gradoop.flink.model.impl.layouts.common.BaseFactory.createGraphHeadDataSet_Collection":
 `/**
 * Creates a graph head dataset from a given collection.
 * Encapsulates the workaround for dataset creation from an empty collection.
 *
 * @param graphHeads graph heads
 * @return graph head dataset
 */
protected DataSet<EPGMGraphHead> createGraphHeadDataSet(Collection<EPGMGraphHead> graphHeads) {
    ExecutionEnvironment env = getConfig().getExecutionEnvironment();
    DataSet<EPGMGraphHead> graphHeadSet;
    if (graphHeads.isEmpty()) {
        graphHeadSet = env.fromElements(getGraphHeadFactory().createGraphHead()).filter(new False<>());
    } else {
        graphHeadSet = env.fromCollection(graphHeads);
    }
    return graphHeadSet;
}`,"org.gradoop.common.model.impl.id.GradoopId.createProcessIdentifier_":
 `/**
 * Creates the process identifier.  This does not have to be unique per class loader because
 * NEXT_COUNTER will provide the uniqueness.
 * <p>
 * Note: Implementation taken from org.bson.types.ObjectId
 *
 * @return a short representing the process
 */
private static short createProcessIdentifier() {
    short processId;
    String processName = java.lang.management.ManagementFactory.getRuntimeMXBean().getName();
    if (processName.contains("@")) {
        processId = (short) Integer.parseInt(processName.substring(0, processName.indexOf('@')));
    } else {
        processId = (short) java.lang.management.ManagementFactory.getRuntimeMXBean().getName().hashCode();
    }
    return processId;
}`,"org.gradoop.common.model.impl.properties.strategies.StringStrategy.is_Object":
 `@Override
public boolean is(Object value) {
    return value instanceof String;
}`,"org.gradoop.common.model.impl.properties.Properties.toString_":
 `@Override
public String toString() {
    return toList().stream().map(Property::toString).collect(Collectors.joining(","));
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.containsAny_GradoopIdSet":
 `/**
 * Checks if any of the specified ids is contained in the set.
 *
 * @param other the ids to look for
 * @return true, iff any of the specified ids is contained in the set
 */
public boolean containsAny(GradoopIdSet other) {
    // Algorithm: the sizes of both lists might be vastly different
    // to prevent the case of iterating multiple times over large collections
    // we make sure to always iterate over the smaller one
    Set<GradoopId> iterate = this.ids;
    Set<GradoopId> contains = other.ids;
    int thisSize = this.size();
    int otherSize = other.size();
    if (thisSize > otherSize) {
        iterate = other.ids;
        contains = this.ids;
    }
    for (GradoopId id : iterate) {
        if (contains.contains(id)) {
            return true;
        }
    }
    return false;
}`,"org.gradoop.flink.util.FlinkAsciiGraphLoader.initDatabaseFromFile_String":
 `/**
 * Initializes the database from the given GDL file.
 *
 * @param fileName GDL file name (must not be {@code null})
 * @throws IOException on failure
 */
public void initDatabaseFromFile(String fileName) throws IOException {
    if (fileName == null) {
        throw new IllegalArgumentException("FileName must not be null.");
    }
    loader = AsciiGraphLoader.fromFile(fileName, config.getLogicalGraphFactory());
}`,"org.gradoop.common.model.impl.pojo.EPGMGraphElement.toString_":
 `@Override
public String toString() {
    return String.format("%s @ %s", super.toString(), graphIds);
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putFloat_byte[]_int_float":
 `/**
 * Put a float value out to the specified byte position.
 *
 * @param bytes byte array
 * @param offset offset to write to
 * @param f float value
 * @return New offset in <code>bytes</code>
 */
public static int putFloat(byte[] bytes, int offset, float f) {
    return putInt(bytes, offset, Float.floatToRawIntBits(f));
}`,"org.gradoop.common.model.impl.pojo.EPGMVertex.toString_":
 `@Override
public String toString() {
    return String.format("(%s)", super.toString());
}`,"org.gradoop.flink.io.impl.csv.functions.StringEscaper.escape_String_Set":
 `/**
 * Escapes the {@code escapedCharacters} in a string.
 *
 * @param string string to be escaped
 * @param escapedCharacters characters to be escaped
 * @return escaped string
 */
public static String escape(String string, Set<Character> escapedCharacters) {
    StringBuilder sb = new StringBuilder();
    for (char c : string.toCharArray()) {
        if (escapedCharacters.contains(c)) {
            sb.append(escapeCharacter(c));
        } else {
            sb.append(c);
        }
    }
    return sb.toString();
}`,"org.gradoop.common.model.impl.properties.PropertyValue.get_Class":
 `//----------------------------------------------------------------------------
// Getter
//----------------------------------------------------------------------------
/**
 * Returns the value as the specified type. If it is already of the same type as requested, we
 * just return the value. If not, an {@link UnsupportedOperationException} is thrown.
 *
 * @param clazz the requested value type
 * @param <T> PropertyValue supported type
 * @return value
 * @throws UnsupportedOperationException when trying to get the wrong type
 */
@SuppressWarnings("unchecked")
public <T> T get(Class<T> clazz) throws UnsupportedOperationException {
    PropertyValueStrategy strategy = PropertyValueStrategyFactory.get(clazz);
    if (strategy.is(value)) {
        return (T) value;
    }
    String type = value == null ? "null" : value.getClass().getSimpleName();
    throw new UnsupportedOperationException("Value '" + value + "' of type " + type + ", cannot be accessed as " + clazz.getSimpleName());
}`,"org.gradoop.common.util.AsciiGraphLoader.initVertices_":
 `/**
 * Initializes vertices and their cache.
 */
private void initVertices() {
    for (org.s1ck.gdl.model.Vertex v : gdlHandler.getVertices()) {
        initVertex(v);
    }
    for (Map.Entry<String, org.s1ck.gdl.model.Vertex> e : gdlHandler.getVertexCache().entrySet()) {
        updateVertexCache(e.getKey(), e.getValue());
    }
}`,"org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.fromGraph_LogicalGraphLayout":
 `@Override
public GraphCollection fromGraph(LogicalGraphLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> logicalGraphLayout) {
    return new GraphCollection(layoutFactory.fromGraphLayout(logicalGraphLayout), config);
}`,"org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromGraphLayout_LogicalGraphLayout":
 `@Override
public GraphCollectionLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> fromGraphLayout(LogicalGraphLayout<EPGMGraphHead, EPGMVertex, EPGMEdge> graph) {
    return fromDataSets(graph.getGraphHead(), graph.getVertices(), graph.getEdges());
}`,"org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.is_Object":
 `@Override
public boolean is(Object value) {
    return value instanceof Double;
}`,"org.gradoop.flink.util.FlinkAsciiGraphLoader.getGraphHeadByVariable_String":
 `/**
 * Returns GraphHead by given variable.
 *
 * @param variable variable used in GDL script
 * @return graphHead or {@code null} if graph is not cached
 */
public EPGMGraphHead getGraphHeadByVariable(String variable) {
    return loader.getGraphHeadByVariable(variable);
}`,"org.gradoop.common.model.impl.properties.strategies.ShortStrategy.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.INTEGER.getTypeByte();
}`,"org.gradoop.common.model.impl.id.GradoopIdSet.add_GradoopId":
 `/**
 * Adds the given gradoop id to the set.
 *
 * @param id the id to add
 */
@Override
public boolean add(GradoopId id) {
    return this.ids.add(id);
}`,"org.gradoop.common.util.AsciiGraphLoader.getGraphHeadsByVariables_String":
 `/**
 * Returns GraphHeads by their given variables.
 *
 * @param variables variables used in GDL script
 * @return graphHeads that are assigned to the given variables
 */
public Collection<G> getGraphHeadsByVariables(String... variables) {
    Collection<G> result = Sets.newHashSetWithExpectedSize(variables.length);
    for (String variable : variables) {
        G graphHead = getGraphHeadByVariable(variable);
        if (graphHead != null) {
            result.add(graphHead);
        }
    }
    return result;
}`,"org.gradoop.common.util.AsciiGraphLoader.initGraphHead_Graph":
 `/**
 * Creates a new Graph from the GDL Loader.
 *
 * @param g graph from GDL Loader
 * @return graph head
 */
private G initGraphHead(Graph g) {
    G graphHead = elementFactoryProvider.getGraphHeadFactory().createGraphHead(g.getLabel(), Properties.createFromMap(g.getProperties()));
    graphHeadIds.put(g.getId(), graphHead.getId());
    graphHeads.put(graphHead.getId(), graphHead);
    return graphHead;
}`,"org.gradoop.common.model.impl.properties.Properties.<init>_int":
 `/**
 * Creates property list with given capacity.
 *
 * @param capacity initial capacity
 */
private Properties(int capacity) {
    properties = new HashMap<>(capacity);
}`,"org.gradoop.flink.model.GradoopFlinkTestBase.getFilePath_String":
 `/**
 * Returns the encoded file path to a resource.
 *
 * @param  relPath the relative path to the resource
 * @return encoded file path
 */
protected String getFilePath(String relPath) throws UnsupportedEncodingException {
    return URLDecoder.decode(getClass().getResource(relPath).getFile(), StandardCharsets.UTF_8.name());
}`,"org.gradoop.common.model.impl.properties.strategies.DateStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.DATE.getTypeByte();
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.IncomingAdjacencyList.<init>_":
 ``,"org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy.write_T_DataOutputView":
 `@Override
public void write(T value, DataOutputView outputView) throws IOException {
    byte[] rawBytes = getRawBytes(value);
    byte type = rawBytes[0];
    if (rawBytes.length > PropertyValue.LARGE_PROPERTY_THRESHOLD) {
        type |= PropertyValue.FLAG_LARGE;
    }
    outputView.writeByte(type);
    // Write length as an int if the "large" flag is set.
    if ((type & PropertyValue.FLAG_LARGE) == PropertyValue.FLAG_LARGE) {
        outputView.writeInt(rawBytes.length - PropertyValue.OFFSET);
    } else {
        outputView.writeShort(rawBytes.length - PropertyValue.OFFSET);
    }
    outputView.write(rawBytes, PropertyValue.OFFSET, rawBytes.length - PropertyValue.OFFSET);
}`,"org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean":
 `/**
 * Creates a GradoopId using the given time, machine identifier, process identifier, and counter.
 * <p>
 * Note: Implementation taken from org.bson.types.ObjectId
 *
 * @param timestamp         the time in seconds
 * @param machineIdentifier the machine identifier
 * @param processIdentifier the process identifier
 * @param counter           the counter
 * @param checkCounter      if the constructor should test if the counter is between 0 and
 *                          16777215
 */
private GradoopId(final int timestamp, final int machineIdentifier, final short processIdentifier, final int counter, final boolean checkCounter) {
    if ((machineIdentifier & HIGH_ORDER_ONE_BYTE) != 0) {
        throw new IllegalArgumentException("The machine identifier must be between 0" + " and 16777215 (it must fit in three bytes).");
    }
    if (checkCounter && ((counter & HIGH_ORDER_ONE_BYTE) != 0)) {
        throw new IllegalArgumentException("The counter must be between 0" + " and 16777215 (it must fit in three bytes).");
    }
    ByteBuffer buffer = ByteBuffer.allocate(12);
    buffer.put((byte) (timestamp >> 24));
    buffer.put((byte) (timestamp >> 16));
    buffer.put((byte) (timestamp >> 8));
    buffer.put((byte) timestamp);
    buffer.put((byte) (machineIdentifier >> 16));
    buffer.put((byte) (machineIdentifier >> 8));
    buffer.put((byte) machineIdentifier);
    buffer.put((byte) (processIdentifier >> 8));
    buffer.put((byte) processIdentifier);
    buffer.put((byte) (counter >> 16));
    buffer.put((byte) (counter >> 8));
    buffer.put((byte) counter);
    this.bytes = buffer.array();
}`,"org.gradoop.common.util.AsciiGraphLoader.initGraphHeads_":
 `/**
 * Initializes GraphHeads and their cache.
 */
private void initGraphHeads() {
    for (Graph g : gdlHandler.getGraphs()) {
        if (!graphHeadIds.containsKey(g.getId())) {
            initGraphHead(g);
        }
    }
    for (Map.Entry<String, Graph> e : gdlHandler.getGraphCache().entrySet()) {
        updateGraphCache(e.getKey(), e.getValue());
    }
}`,"org.gradoop.common.model.impl.properties.Properties.set_String_PropertyValue":
 `/**
 * Sets the given property. If a property with the same property key already
 * exists, it will be replaced by the given property.
 *
 * @param key   property key
 * @param value property value
 */
public void set(String key, PropertyValue value) {
    Objects.requireNonNull(key);
    Objects.requireNonNull(value);
    properties.put(key, value);
}`,"org.gradoop.flink.model.impl.operators.tostring.functions.OutgoingAdjacencyList.<init>_":
 ``,"org.gradoop.common.model.impl.properties.PropertyValue.<init>_Object":
 `/**
 * Creates a new property value from the given value.
 *
 * If the given object type is not supported, an
 * {@link UnsupportedTypeException} will be thrown.
 *
 * @param value value with supported type
 */
private PropertyValue(Object value) {
    setObject(value);
}`,"org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.initByteStrategyMap_":
 `/**
 * Initializes byte-strategy mapping.
 *
 * @return Array containing PropertyValueStrategies with their respective type byte as index.
 */
private PropertyValueStrategy[] initByteStrategyMap() {
    PropertyValueStrategy[] byteMapping = new PropertyValueStrategy[classStrategyMap.size() + 1];
    for (PropertyValueStrategy strategy : classStrategyMap.values()) {
        byteMapping[strategy.getRawType()] = strategy;
    }
    byteMapping[nullStrategy.getRawType()] = nullStrategy;
    return byteMapping;
}`,"org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy.getRawType_":
 `@Override
public byte getRawType() {
    return Type.GRADOOP_ID.getTypeByte();
}`,"org.gradoop.flink.model.api.epgm.BaseGraphOperators.equalsByData_LG":
 `/**
 * Checks, if another graph has the same attached data and contains
 * vertices and edges with the same attached data as this graph.
 *
 * @param other other graph
 * @return 1-element dataset containing true, iff equal by element data
 */
default DataSet<Boolean> equalsByData(LG other) {
    return callForValue(new GraphEquality<>(new GraphHeadToDataString<>(), new VertexToDataString<>(), new EdgeToDataString<>(), true), other);
}`,"org.gradoop.flink.model.impl.epgm.GraphCollection.getVertices_":
 `@Override
public DataSet<EPGMVertex> getVertices() {
    return layout.getVertices();
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putInt_byte[]_int_int":
 `/**
 * Put an int value out to the specified byte array position.
 *
 * @param bytes the byte array
 * @param offset position in the array
 * @param val int to write out
 * @return incremented offset
 * @throws IllegalArgumentException if the byte array given doesn't have enough room at the
 * offset specified.
 */
public static int putInt(byte[] bytes, int offset, int val) {
    if (bytes.length - offset < SIZEOF_INT) {
        throw new IllegalArgumentException("Not enough room to put an int at" + " offset " + offset + " in a " + bytes.length + " byte array");
    }
    if (UNSAFE_UNALIGNED) {
        return putIntUnsafe(bytes, offset, val);
    } else {
        for (int i = offset + 3; i > offset; i--) {
            bytes[i] = (byte) val;
            val >>>= 8;
        }
        bytes[offset] = (byte) val;
        return offset + SIZEOF_INT;
    }
}`,"org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.<init>_String_GradoopFlinkConfig_Configuration":
 `/**
 * Creates a new data source.
 *
 * @param csvPath  root path of csv files
 * @param conf     gradoop configuration
 * @param hdfsConf HDFS configuration
 */
public IndexedCSVDataSource(String csvPath, GradoopFlinkConfig conf, Configuration hdfsConf) {
    super(csvPath, conf);
    Objects.requireNonNull(hdfsConf);
    this.hdfsConfig = hdfsConf;
}`,"org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.createEdge_GradoopId_GradoopId":
 `@Override
public EPGMEdge createEdge(GradoopId sourceVertexId, GradoopId targetVertexId) {
    return initEdge(GradoopId.get(), sourceVertexId, targetVertexId);
}`,"org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_":
 `/**
 * Returns the machine identifier component of the id.
 *
 * @return the machine identifier
 */
private int getMachineIdentifier() {
    return makeInt((byte) 0, bytes[4], bytes[5], bytes[6]);
}`,"org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_GradoopId_GradoopId":
 `@Override
public EPGMEdge initEdge(final GradoopId id, final GradoopId sourceVertexId, final GradoopId targetVertexId) {
    return initEdge(id, GradoopConstants.DEFAULT_EDGE_LABEL, sourceVertexId, targetVertexId);
}`,"org.gradoop.common.model.impl.properties.Type.getTypeByte_":
 `/**
 * Returns the byte representation.
 *
 * @return type byte
 */
public byte getTypeByte() {
    return typeByte;
}`,"org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_String_GradoopId_GradoopId":
 `@Override
public EPGMEdge initEdge(final GradoopId id, final String label, final GradoopId sourceVertexId, final GradoopId targetVertexId) {
    return initEdge(id, label, sourceVertexId, targetVertexId, null, null);
}`,"org.gradoop.common.model.impl.properties.bytes.Bytes.putBytes_byte[]_int_byte[]_int_int":
 `/**
 * Put bytes at the specified byte array position.
 *
 * @param tgtBytes the byte array
 * @param tgtOffset position in the array
 * @param srcBytes array to write out
 * @param srcOffset source offset
 * @param srcLength source length
 * @return incremented offset
 */
public static int putBytes(byte[] tgtBytes, int tgtOffset, byte[] srcBytes, int srcOffset, int srcLength) {
    System.arraycopy(srcBytes, srcOffset, tgtBytes, tgtOffset, srcLength);
    return tgtOffset + srcLength;
}`,"org.gradoop.flink.io.impl.csv.functions.StringEscaper.unescape_String":
 `/**
 * Unescapes the escaped characters in a string.
 *
 * @param escapedString string to be unescaped
 * @return unescaped string
 */
public static String unescape(String escapedString) {
    StringBuilder sb = new StringBuilder();
    boolean escaped = false;
    for (int i = 0; i < escapedString.length(); i++) {
        if (escaped) {
            escaped = false;
            sb.append(unescapeSequence(escapedString.subSequence(i - 1, i + 1)));
        } else if (escapedString.charAt(i) == ESCAPE_CHARACTER) {
            escaped = true;
        } else {
            sb.append(escapedString.charAt(i));
        }
    }
    return sb.toString();
}`,"org.gradoop.common.model.impl.metadata.MetaData.getEdgeLabels_":
 `/**
 * Returns the edge labels available in the meta data.
 *
 * @return edge labels
 */
public Set<String> getEdgeLabels() {
    return edgeMetaData.keySet();
}`,"org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawBytes_Float":
 `@Override
public byte[] getRawBytes(Float value) {
    byte[] rawBytes = new byte[PropertyValue.OFFSET + Bytes.SIZEOF_FLOAT];
    rawBytes[0] = getRawType();
    Bytes.putFloat(rawBytes, PropertyValue.OFFSET, value);
    return rawBytes;
}`,"org.gradoop.common.model.impl.pojo.EPGMVertexFactory.createVertex_String_Properties_GradoopIdSet":
 `@Override
public EPGMVertex createVertex(String label, Properties properties, GradoopIdSet graphIds) {
    return initVertex(GradoopId.get(), label, properties, graphIds);
}`,"org.gradoop.common.util.AsciiGraphLoader.updateEdgeCache_String_Edge":
 `/**
 * Updates the edge cache.
 *
 * @param variable edge variable used in the GDL script
 * @param e edge from GDL loader
 */
private void updateEdgeCache(String variable, org.s1ck.gdl.model.Edge e) {
    edgeCache.put(variable, edges.get(edgeIds.get(e.getId())));
}`,"org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.getGraphCollection_":
 `@Override
public GraphCollection getGraphCollection() throws IOException {
    CSVMetaDataSource source = new CSVMetaDataSource();
    CSVMetaData metaData = source.readLocal(getMetaDataPath(), hdfsConfig);
    DataSet<Tuple3<String, String, String>> metaDataBroadcast = source.readDistributed(getMetaDataPath(), getConfig());
    ExecutionEnvironment env = getConfig().getExecutionEnvironment();
    GraphCollectionFactory factory = getConfig().getGraphCollectionFactory();
    Map<String, DataSet<EPGMGraphHead>> graphHeads = metaData.getGraphLabels().stream().map(label -> Tuple2.of(label, env.readTextFile(getGraphHeadCSVPath(label)).map(new CSVLineToGraphHead(factory.getGraphHeadFactory())).withBroadcastSet(metaDataBroadcast, BC_METADATA).filter(graphHead -> graphHead.getLabel().equals(label)))).collect(Collectors.toMap(t -> t.f0, t -> t.f1));
    Map<String, DataSet<EPGMVertex>> vertices = metaData.getVertexLabels().stream().map(label -> Tuple2.of(label, env.readTextFile(getVertexCSVPath(label)).map(new CSVLineToVertex(factory.getVertexFactory())).withBroadcastSet(metaDataBroadcast, BC_METADATA).filter(vertex -> vertex.getLabel().equals(label)))).collect(Collectors.toMap(t -> t.f0, t -> t.f1));
    Map<String, DataSet<EPGMEdge>> edges = metaData.getEdgeLabels().stream().map(label -> Tuple2.of(label, env.readTextFile(getEdgeCSVPath(label)).map(new CSVLineToEdge(factory.getEdgeFactory())).withBroadcastSet(metaDataBroadcast, BC_METADATA).filter(edge -> edge.getLabel().equals(label)))).collect(Collectors.toMap(t -> t.f0, t -> t.f1));
    return factory.fromIndexedDataSets(graphHeads, vertices, edges);
}`,"org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class":
 `/**
 * Get a strategy which corresponds the provided class. If there is no mapping for the provided
 * class in the class-strategy map, or the value of the parameter is {@code null}, an instance of
 * {@link NullStrategy} is returned.
 *
 * @param clazz some class
 * @return strategy class which is able to handle the provided type.
 * @throws UnsupportedTypeException when there is no matching strategy for the given class.
 */
public static PropertyValueStrategy get(Class clazz) throws UnsupportedTypeException {
    if (clazz == null) {
        return INSTANCE.nullStrategy;
    }
    PropertyValueStrategy strategy = INSTANCE.classStrategyMap.get(clazz);
    // class could be some implementation of List/Map/Set that we don't register in the class-
    // strategy map, so we need to check for that.
    if (strategy == null) {
        if (Map.class.isAssignableFrom(clazz)) {
            strategy = INSTANCE.classStrategyMap.get(Map.class);
        } else if (Set.class.isAssignableFrom(clazz)) {
            strategy = INSTANCE.classStrategyMap.get(Set.class);
        } else if (List.class.isAssignableFrom(clazz)) {
            strategy = INSTANCE.classStrategyMap.get(List.class);
        }
    }
    if (strategy == null) {
        throw new UnsupportedTypeException("No strategy for class " + clazz);
    }
    return strategy;
}`,"org.gradoop.common.model.impl.properties.bytes.UnsafeAvailChecker.unaligned_":
 `/**
 * True when running JVM is having sun's Unsafe package available in it and underlying
 * system having unaligned-access capability.
 *
 * @return true, if unaligned
 */
static boolean unaligned() {
    return UNALIGNED;
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
  "kiekerPattern" : "public void org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest.testReadSingleGraph()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-flink",
  "name" : "flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
  "key" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest.testReadSingleGraph_",
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
    "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#getFilePath",
    "kiekerPattern" : "protected java.lang.String org.gradoop.flink.model.GradoopFlinkTestBase.getFilePath(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.model.GradoopFlinkTestBase#getFilePath",
    "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.getFilePath_String",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#getConfig",
    "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.GradoopFlinkTestBase.getConfig()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.model.GradoopFlinkTestBase#getConfig",
    "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.getConfig_",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#getExecutionEnvironment",
      "kiekerPattern" : "protected org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.model.GradoopFlinkTestBase.getExecutionEnvironment()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.GradoopFlinkTestBase#getExecutionEnvironment",
      "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.getExecutionEnvironment_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getConfig",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.flink.util.GradoopFlinkConfig#createConfig",
      "kiekerPattern" : "public static org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.util.GradoopFlinkConfig.createConfig(org.apache.flink.api.java.ExecutionEnvironment,org.gradoop.flink.model.api.layouts.LogicalGraphLayoutFactory,org.gradoop.flink.model.api.layouts.GraphCollectionLayoutFactory)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.util.GradoopFlinkConfig#createConfig",
      "key" : "org.gradoop.flink.util.GradoopFlinkConfig.createConfig_ExecutionEnvironment_LogicalGraphLayoutFactory_GraphCollectionLayoutFactory",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getConfig",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.config.GradoopConfig#<init>",
        "kiekerPattern" : "public new org.gradoop.common.config.GradoopConfig.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.config.GradoopConfig#<init>",
        "key" : "org.gradoop.common.config.GradoopConfig.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.GradoopFlinkConfig#createConfig",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.util.GradoopFlinkConfig#<init>",
        "kiekerPattern" : "protected new org.gradoop.flink.util.GradoopFlinkConfig.<init>(org.apache.flink.api.java.ExecutionEnvironment,org.gradoop.flink.model.api.layouts.LogicalGraphLayoutFactory,org.gradoop.flink.model.api.layouts.GraphCollectionLayoutFactory)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.util.GradoopFlinkConfig#<init>",
        "key" : "org.gradoop.flink.util.GradoopFlinkConfig.<init>_ExecutionEnvironment_LogicalGraphLayoutFactory_GraphCollectionLayoutFactory",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.GradoopFlinkConfig#createConfig",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#<init>",
          "kiekerPattern" : "public new org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.<init>(org.gradoop.flink.util.GradoopFlinkConfig)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.LogicalGraphFactory#<init>",
          "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.<init>_GradoopFlinkConfig",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.util.GradoopFlinkConfig#<init>",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#setLayoutFactory",
          "kiekerPattern" : "public void org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.setLayoutFactory(org.gradoop.flink.model.api.layouts.LogicalGraphLayoutFactory)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.LogicalGraphFactory#setLayoutFactory",
          "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.setLayoutFactory_LogicalGraphLayoutFactory",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.util.GradoopFlinkConfig#<init>",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#setGradoopFlinkConfig",
            "kiekerPattern" : "public void org.gradoop.flink.model.impl.layouts.common.BaseFactory.setGradoopFlinkConfig(org.gradoop.flink.util.GradoopFlinkConfig)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.common.BaseFactory#setGradoopFlinkConfig",
            "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.setGradoopFlinkConfig_GradoopFlinkConfig",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#setLayoutFactory",
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
          "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#<init>",
          "kiekerPattern" : "public new org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.<init>(org.gradoop.flink.util.GradoopFlinkConfig)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.GraphCollectionFactory#<init>",
          "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.<init>_GradoopFlinkConfig",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.util.GradoopFlinkConfig#<init>",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#setLayoutFactory",
          "kiekerPattern" : "public void org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.setLayoutFactory(org.gradoop.flink.model.api.layouts.GraphCollectionLayoutFactory)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.GraphCollectionFactory#setLayoutFactory",
          "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.setLayoutFactory_GraphCollectionLayoutFactory",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.util.GradoopFlinkConfig#<init>",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#setGradoopFlinkConfig",
            "kiekerPattern" : "public void org.gradoop.flink.model.impl.layouts.common.BaseFactory.setGradoopFlinkConfig(org.gradoop.flink.util.GradoopFlinkConfig)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.common.BaseFactory#setGradoopFlinkConfig",
            "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.setGradoopFlinkConfig_GradoopFlinkConfig",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#setLayoutFactory",
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
      "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#setConfig",
      "kiekerPattern" : "protected void org.gradoop.flink.model.GradoopFlinkTestBase.setConfig(org.gradoop.flink.util.GradoopFlinkConfig)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.GradoopFlinkTestBase#setConfig",
      "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.setConfig_GradoopFlinkConfig",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getConfig",
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
    "call" : "org.gradoop.flink.io.impl.csv.CSVBase#<init>",
    "kiekerPattern" : "protected new org.gradoop.flink.io.impl.csv.CSVBase.<init>(java.lang.String,org.gradoop.flink.util.GradoopFlinkConfig)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.io.impl.csv.CSVBase#<init>",
    "key" : "org.gradoop.flink.io.impl.csv.CSVBase.<init>_String_GradoopFlinkConfig",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#<init>",
    "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.<init>(java.lang.String,org.gradoop.flink.util.GradoopFlinkConfig,org.apache.hadoop.conf.Configuration)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.io.impl.csv.indexed.IndexedCSVDataSource#<init>",
    "key" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.<init>_String_GradoopFlinkConfig_Configuration",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#<init>",
    "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.<init>(java.lang.String,org.gradoop.flink.util.GradoopFlinkConfig)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.io.impl.csv.indexed.IndexedCSVDataSource#<init>",
    "key" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.<init>_String_GradoopFlinkConfig",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
    "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraph org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.getLogicalGraph()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
    "key" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.getLogicalGraph_",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
      "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.GraphCollection org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.getGraphCollection()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
      "key" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource.getGraphCollection_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.metadata.CSVMetaDataSource#<init>",
        "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getMetaDataPath",
        "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getMetaDataPath()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.CSVBase#getMetaDataPath",
        "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getMetaDataPath_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#readLocal",
        "kiekerPattern" : "public org.gradoop.flink.io.impl.csv.metadata.CSVMetaData org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.readLocal(java.lang.String,org.apache.hadoop.conf.Configuration)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.metadata.CSVMetaDataSource#readLocal",
        "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.readLocal_String_Configuration",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
          "kiekerPattern" : "public static java.lang.String[] org.gradoop.flink.io.impl.csv.functions.StringEscaper.split(java.lang.String,java.lang.String,int)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.functions.StringEscaper#split",
          "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String_int",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#readLocal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
          "kiekerPattern" : "public org.gradoop.flink.io.impl.csv.metadata.CSVMetaData org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.fromTuples(java.util.List)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
          "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.fromTuples_List",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#readLocal",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#unescape",
            "kiekerPattern" : "public static java.lang.String org.gradoop.flink.io.impl.csv.functions.StringEscaper.unescape(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.functions.StringEscaper#unescape",
            "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.unescape_String",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
            "kiekerPattern" : "public static java.lang.String[] org.gradoop.flink.io.impl.csv.functions.StringEscaper.split(java.lang.String,java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.functions.StringEscaper#split",
            "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
              "kiekerPattern" : "public static java.lang.String[] org.gradoop.flink.io.impl.csv.functions.StringEscaper.split(java.lang.String,java.lang.String,int)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.io.impl.csv.functions.StringEscaper#split",
              "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String_int",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
            "kiekerPattern" : "public static java.lang.String[] org.gradoop.flink.io.impl.csv.functions.StringEscaper.split(java.lang.String,java.lang.String,int)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.functions.StringEscaper#split",
            "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String_int",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser#getSimpleTypeParserMap",
            "kiekerPattern" : "private static java.util.Map org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser.getSimpleTypeParserMap()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.metadata.CSVMetaDataParser#getSimpleTypeParserMap",
            "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser.getSimpleTypeParserMap_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.Type#<init>",
              "kiekerPattern" : "new org.gradoop.common.model.impl.properties.Type.<init>(int,java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Type#<init>",
              "key" : "org.gradoop.common.model.impl.properties.Type.<init>_int_String",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser#getSimpleTypeParserMap",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.Type#toString",
              "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Type.toString()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Type#toString",
              "key" : "org.gradoop.common.model.impl.properties.Type.toString_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser#getSimpleTypeParserMap",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser#getPropertyValueParser",
            "kiekerPattern" : "static java.util.function.Function org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser.getPropertyValueParser(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.metadata.CSVMetaDataParser#getPropertyValueParser",
            "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser.getPropertyValueParser_String",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
              "kiekerPattern" : "public static java.lang.String[] org.gradoop.flink.io.impl.csv.functions.StringEscaper.split(java.lang.String,java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.io.impl.csv.functions.StringEscaper#split",
              "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser#getPropertyValueParser",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
                "kiekerPattern" : "public static java.lang.String[] org.gradoop.flink.io.impl.csv.functions.StringEscaper.split(java.lang.String,java.lang.String,int)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.io.impl.csv.functions.StringEscaper#split",
                "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.split_String_String_int",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#split",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.Type#toString",
              "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Type.toString()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Type#toString",
              "key" : "org.gradoop.common.model.impl.properties.Type.toString_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataParser#getPropertyValueParser",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.metadata.PropertyMetaData#<init>",
            "kiekerPattern" : "public new org.gradoop.common.model.impl.metadata.PropertyMetaData.<init>(java.lang.String,java.lang.String,java.util.function.Function)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.metadata.PropertyMetaData#<init>",
            "key" : "org.gradoop.common.model.impl.metadata.PropertyMetaData.<init>_String_String_Function",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.metadata.MetaData#createStringToClassMap",
            "kiekerPattern" : "private static java.util.Map org.gradoop.common.model.impl.metadata.MetaData.createStringToClassMap()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.metadata.MetaData#createStringToClassMap",
            "key" : "org.gradoop.common.model.impl.metadata.MetaData.createStringToClassMap_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.Type#toString",
              "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Type.toString()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Type#toString",
              "key" : "org.gradoop.common.model.impl.properties.Type.toString_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.metadata.MetaData#createStringToClassMap",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.metadata.MetaData#<init>",
            "kiekerPattern" : "protected new org.gradoop.common.model.impl.metadata.MetaData.<init>(java.util.Map,java.util.Map,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.metadata.MetaData#<init>",
            "key" : "org.gradoop.common.model.impl.metadata.MetaData.<init>_Map_Map_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaData#<init>",
            "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.metadata.CSVMetaData.<init>(java.util.Map,java.util.Map,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.metadata.CSVMetaData#<init>",
            "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaData.<init>_Map_Map_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#fromTuples",
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
        "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getConfig",
        "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.io.impl.csv.CSVBase.getConfig()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.CSVBase#getConfig",
        "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getConfig_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#readDistributed",
        "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.readDistributed(java.lang.String,org.gradoop.flink.util.GradoopFlinkConfig)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.metadata.CSVMetaDataSource#readDistributed",
        "key" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource.readDistributed_String_GradoopFlinkConfig",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
          "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
          "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.metadata.CSVMetaDataSource#readDistributed",
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
        "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
        "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
        "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getGraphCollectionFactory",
        "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.GraphCollectionFactory org.gradoop.flink.util.GradoopFlinkConfig.getGraphCollectionFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.util.GradoopFlinkConfig#getGraphCollectionFactory",
        "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getGraphCollectionFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.metadata.MetaData#getGraphLabels",
        "kiekerPattern" : "public java.util.Set org.gradoop.common.model.impl.metadata.MetaData.getGraphLabels()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.metadata.MetaData#getGraphLabels",
        "key" : "org.gradoop.common.model.impl.metadata.MetaData.getGraphLabels_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getGraphHeadCSVPath",
        "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getGraphHeadCSVPath(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.CSVBase#getGraphHeadCSVPath",
        "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getGraphHeadCSVPath_String",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getGraphHeadPath",
          "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getGraphHeadPath()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.CSVBase#getGraphHeadPath",
          "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getGraphHeadPath_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getGraphHeadCSVPath",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
          "kiekerPattern" : "private java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath(java.lang.String,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.CSVBase#getElementCSVPath",
          "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath_String_String",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getGraphHeadCSVPath",
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
        "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#getGraphHeadFactory",
        "kiekerPattern" : "public org.gradoop.common.model.api.entities.GraphHeadFactory org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getGraphHeadFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.epgm.GraphCollectionFactory#getGraphHeadFactory",
        "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getGraphHeadFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getGraphHeadFactory",
          "kiekerPattern" : "public org.gradoop.common.model.api.entities.GraphHeadFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getGraphHeadFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.common.BaseFactory#getGraphHeadFactory",
          "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getGraphHeadFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#getGraphHeadFactory",
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
        "call" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToElement#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.functions.CSVLineToElement.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.functions.CSVLineToElement#<init>",
        "key" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToElement.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.Properties#create",
          "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.create()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.properties.Properties#create",
          "key" : "org.gradoop.common.model.impl.properties.Properties.create_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToElement#<init>",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.Properties#<init>",
            "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.Properties.<init>()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.Properties#<init>",
            "key" : "org.gradoop.common.model.impl.properties.Properties.<init>_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.Properties#create",
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
        "call" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToGraphHead#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.functions.CSVLineToGraphHead.<init>(org.gradoop.common.model.api.entities.GraphHeadFactory)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.functions.CSVLineToGraphHead#<init>",
        "key" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToGraphHead.<init>_GraphHeadFactory",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.metadata.MetaData#getVertexLabels",
        "kiekerPattern" : "public java.util.Set org.gradoop.common.model.impl.metadata.MetaData.getVertexLabels()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.metadata.MetaData#getVertexLabels",
        "key" : "org.gradoop.common.model.impl.metadata.MetaData.getVertexLabels_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getVertexCSVPath",
        "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getVertexCSVPath(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.CSVBase#getVertexCSVPath",
        "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getVertexCSVPath_String",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getVertexPath",
          "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getVertexPath()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.CSVBase#getVertexPath",
          "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getVertexPath_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getVertexCSVPath",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
          "kiekerPattern" : "private java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath(java.lang.String,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.CSVBase#getElementCSVPath",
          "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath_String_String",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getVertexCSVPath",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#escape",
            "kiekerPattern" : "public static java.lang.String org.gradoop.flink.io.impl.csv.functions.StringEscaper.escape(java.lang.String,java.util.Set)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.functions.StringEscaper#escape",
            "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.escape_String_Set",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat#cleanFilename",
            "kiekerPattern" : "public static java.lang.String org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat.cleanFilename(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat#cleanFilename",
            "key" : "org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat.cleanFilename_String",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
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
        "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#getVertexFactory",
        "kiekerPattern" : "public org.gradoop.common.model.api.entities.VertexFactory org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getVertexFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.epgm.GraphCollectionFactory#getVertexFactory",
        "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getVertexFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getVertexFactory",
          "kiekerPattern" : "public org.gradoop.common.model.api.entities.VertexFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getVertexFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.common.BaseFactory#getVertexFactory",
          "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getVertexFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#getVertexFactory",
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
        "call" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToVertex#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.functions.CSVLineToVertex.<init>(org.gradoop.common.model.api.entities.VertexFactory)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.functions.CSVLineToVertex#<init>",
        "key" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToVertex.<init>_VertexFactory",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.metadata.MetaData#getEdgeLabels",
        "kiekerPattern" : "public java.util.Set org.gradoop.common.model.impl.metadata.MetaData.getEdgeLabels()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.metadata.MetaData#getEdgeLabels",
        "key" : "org.gradoop.common.model.impl.metadata.MetaData.getEdgeLabels_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getEdgeCSVPath",
        "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getEdgeCSVPath(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.CSVBase#getEdgeCSVPath",
        "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getEdgeCSVPath_String",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getEdgePath",
          "kiekerPattern" : "protected java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getEdgePath()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.CSVBase#getEdgePath",
          "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getEdgePath_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getEdgeCSVPath",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
          "kiekerPattern" : "private java.lang.String org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath(java.lang.String,java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.io.impl.csv.CSVBase#getElementCSVPath",
          "key" : "org.gradoop.flink.io.impl.csv.CSVBase.getElementCSVPath_String_String",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getEdgeCSVPath",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper#escape",
            "kiekerPattern" : "public static java.lang.String org.gradoop.flink.io.impl.csv.functions.StringEscaper.escape(java.lang.String,java.util.Set)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.functions.StringEscaper#escape",
            "key" : "org.gradoop.flink.io.impl.csv.functions.StringEscaper.escape_String_Set",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat#cleanFilename",
            "kiekerPattern" : "public static java.lang.String org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat.cleanFilename(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat#cleanFilename",
            "key" : "org.gradoop.flink.io.impl.csv.indexed.functions.MultipleFileOutputFormat.cleanFilename_String",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.io.impl.csv.CSVBase#getElementCSVPath",
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
        "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#getEdgeFactory",
        "kiekerPattern" : "public org.gradoop.common.model.api.entities.EdgeFactory org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getEdgeFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.epgm.GraphCollectionFactory#getEdgeFactory",
        "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.getEdgeFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getEdgeFactory",
          "kiekerPattern" : "public org.gradoop.common.model.api.entities.EdgeFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.common.BaseFactory#getEdgeFactory",
          "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#getEdgeFactory",
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
        "call" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToEdge#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.io.impl.csv.functions.CSVLineToEdge.<init>(org.gradoop.common.model.api.entities.EdgeFactory)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.io.impl.csv.functions.CSVLineToEdge#<init>",
        "key" : "org.gradoop.flink.io.impl.csv.functions.CSVLineToEdge.<init>_EdgeFactory",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#fromIndexedDataSets",
        "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.GraphCollection org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.fromIndexedDataSets(java.util.Map,java.util.Map,java.util.Map)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.epgm.GraphCollectionFactory#fromIndexedDataSets",
        "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.fromIndexedDataSets_Map_Map_Map",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getGraphCollection",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromIndexedDataSets",
          "kiekerPattern" : "public org.gradoop.flink.model.api.layouts.GraphCollectionLayout org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromIndexedDataSets(java.util.Map,java.util.Map,java.util.Map)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromIndexedDataSets",
          "key" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromIndexedDataSets_Map_Map_Map",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#fromIndexedDataSets",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
            "kiekerPattern" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create(java.util.Map,java.util.Map,java.util.Map)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.gve.GVEBaseFactory#create",
            "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create_Map_Map_Map",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromIndexedDataSets",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
              "kiekerPattern" : "protected org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.common.BaseFactory.createEdgeDataSet(java.util.Collection)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
              "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.createEdgeDataSet_Collection",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getConfig",
                "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.layouts.common.BaseFactory#getConfig",
                "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
                "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
                "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#<init>",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                "kiekerPattern" : "public new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#<init>",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#createMachineIdentifier",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.createMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#createMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.createMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#createProcessIdentifier",
                "kiekerPattern" : "private static short org.gradoop.common.model.impl.id.GradoopId.createProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#createProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.createProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
                "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#get",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#dateToTimestampSeconds",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds(java.util.Date)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#dateToTimestampSeconds",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                  "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#<init>",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getEdgeFactory",
                "kiekerPattern" : "public org.gradoop.common.model.api.entities.EdgeFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.layouts.common.BaseFactory#getEdgeFactory",
                "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMEdge org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.createEdge(org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                "key" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.createEdge_GradoopId_GradoopId",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
                  "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#get",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#dateToTimestampSeconds",
                    "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds(java.util.Date)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#dateToTimestampSeconds",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                    "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#<init>",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMEdge org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge(org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_GradoopId_GradoopId",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                    "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMEdge org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                    "key" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_String_GradoopId_GradoopId",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                      "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMEdge org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_String_GradoopId_GradoopId_Properties_GradoopIdSet",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#<init>",
                        "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.pojo.EPGMElement#<init>",
                        "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.<init>_GradoopId_String_Properties",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#<init>",
                        "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.pojo.EPGMGraphElement#<init>",
                        "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>_GradoopId_String_Properties_GradoopIdSet",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.pojo.EPGMEdge#<init>",
                        "kiekerPattern" : "public new org.gradoop.common.model.impl.pojo.EPGMEdge.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.pojo.EPGMEdge#<init>",
                        "key" : "org.gradoop.common.model.impl.pojo.EPGMEdge.<init>_GradoopId_String_GradoopId_GradoopId_Properties_GradoopIdSet",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ ]
                      } ]
                    } ]
                  } ]
                } ]
              }, {
                "call" : "org.gradoop.flink.model.impl.functions.bool.False#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.functions.bool.False.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.functions.bool.False#<init>",
                "key" : "org.gradoop.flink.model.impl.functions.bool.False.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#<init>",
              "kiekerPattern" : "protected new org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.layouts.gve.GVELayout#<init>",
              "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>_DataSet_DataSet_DataSet",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
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
          "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#<init>",
          "kiekerPattern" : "new org.gradoop.flink.model.impl.epgm.GraphCollection.<init>(org.gradoop.flink.model.api.layouts.GraphCollectionLayout,org.gradoop.flink.util.GradoopFlinkConfig)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.GraphCollection#<init>",
          "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.<init>_GraphCollectionLayout_GradoopFlinkConfig",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#fromIndexedDataSets",
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
      "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getGraphFactory",
      "kiekerPattern" : "public org.gradoop.flink.model.api.epgm.BaseGraphFactory org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphFactory()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.GraphCollection#getGraphFactory",
      "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphFactory_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getLogicalGraphFactory",
        "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraphFactory org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.util.GradoopFlinkConfig#getLogicalGraphFactory",
        "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getGraphFactory",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getGraphHeads",
      "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphHeads()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.GraphCollection#getGraphHeads",
      "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphHeads_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getGraphHeads",
        "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHeads()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.layouts.gve.GVELayout#getGraphHeads",
        "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHeads_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getGraphHeads",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getVertices",
      "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.GraphCollection.getVertices()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.GraphCollection#getVertices",
      "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getVertices_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getVertices",
        "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.layouts.gve.GVELayout#getVertices",
        "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getVertices",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getEdges",
      "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.GraphCollection.getEdges()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.GraphCollection#getEdges",
      "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getEdges_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getEdges",
        "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.layouts.gve.GVELayout#getEdges",
        "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getEdges",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#fromDataSets",
      "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraph org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.fromDataSets(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.LogicalGraphFactory#fromDataSets",
      "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.fromDataSets_DataSet_DataSet_DataSet",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSource#getLogicalGraph",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromDataSets",
        "kiekerPattern" : "public org.gradoop.flink.model.api.layouts.LogicalGraphLayout org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromDataSets(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromDataSets",
        "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromDataSets_DataSet_DataSet_DataSet",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#fromDataSets",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
          "kiekerPattern" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.gve.GVEBaseFactory#create",
          "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create_DataSet_DataSet_DataSet",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromDataSets",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#<init>",
            "kiekerPattern" : "protected new org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.gve.GVELayout#<init>",
            "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>_DataSet_DataSet_DataSet",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
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
        "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#<init>",
        "kiekerPattern" : "new org.gradoop.flink.model.impl.epgm.LogicalGraph.<init>(org.gradoop.flink.model.api.layouts.LogicalGraphLayout,org.gradoop.flink.util.GradoopFlinkConfig)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.epgm.LogicalGraph#<init>",
        "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.<init>_LogicalGraphLayout_GradoopFlinkConfig",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#fromDataSets",
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
    "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#getLoaderFromFile",
    "kiekerPattern" : "protected org.gradoop.flink.util.FlinkAsciiGraphLoader org.gradoop.flink.model.GradoopFlinkTestBase.getLoaderFromFile(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.model.GradoopFlinkTestBase#getLoaderFromFile",
    "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.getLoaderFromFile_String",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#getNewLoader",
      "kiekerPattern" : "private org.gradoop.flink.util.FlinkAsciiGraphLoader org.gradoop.flink.model.GradoopFlinkTestBase.getNewLoader()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.GradoopFlinkTestBase#getNewLoader",
      "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.getNewLoader_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getLoaderFromFile",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#getConfig",
        "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.GradoopFlinkTestBase.getConfig()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.GradoopFlinkTestBase#getConfig",
        "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.getConfig_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getNewLoader",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.util.FlinkAsciiGraphLoader.<init>(org.gradoop.flink.util.GradoopFlinkConfig)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.util.FlinkAsciiGraphLoader#<init>",
        "key" : "org.gradoop.flink.util.FlinkAsciiGraphLoader.<init>_GradoopFlinkConfig",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getNewLoader",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#initDatabaseFromFile",
      "kiekerPattern" : "public void org.gradoop.flink.util.FlinkAsciiGraphLoader.initDatabaseFromFile(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.util.FlinkAsciiGraphLoader#initDatabaseFromFile",
      "key" : "org.gradoop.flink.util.FlinkAsciiGraphLoader.initDatabaseFromFile_String",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#getLoaderFromFile",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getLogicalGraphFactory",
        "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraphFactory org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.util.GradoopFlinkConfig#getLogicalGraphFactory",
        "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory_",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#initDatabaseFromFile",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.util.AsciiGraphLoader#fromFile",
        "kiekerPattern" : "public static org.gradoop.common.util.AsciiGraphLoader org.gradoop.common.util.AsciiGraphLoader.fromFile(java.lang.String,org.gradoop.common.model.api.entities.ElementFactoryProvider)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.util.AsciiGraphLoader#fromFile",
        "key" : "org.gradoop.common.util.AsciiGraphLoader.fromFile_String_ElementFactoryProvider",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#initDatabaseFromFile",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.util.AsciiGraphLoader#<init>",
          "kiekerPattern" : "private new org.gradoop.common.util.AsciiGraphLoader.<init>(org.s1ck.gdl.GDLHandler,org.gradoop.common.model.api.entities.ElementFactoryProvider)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.util.AsciiGraphLoader#<init>",
          "key" : "org.gradoop.common.util.AsciiGraphLoader.<init>_GDLHandler_ElementFactoryProvider",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#fromFile",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.util.AsciiGraphLoader#init",
            "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.init()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.util.AsciiGraphLoader#init",
            "key" : "org.gradoop.common.util.AsciiGraphLoader.init_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#<init>",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHeads",
              "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.initGraphHeads()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.util.AsciiGraphLoader#initGraphHeads",
              "key" : "org.gradoop.common.util.AsciiGraphLoader.initGraphHeads_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.util.AsciiGraphLoader#init",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHead",
                "kiekerPattern" : "private org.gradoop.common.util.G org.gradoop.common.util.AsciiGraphLoader.initGraphHead(org.s1ck.gdl.model.Graph)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.util.AsciiGraphLoader#initGraphHead",
                "key" : "org.gradoop.common.util.AsciiGraphLoader.initGraphHead_Graph",
                "otherKey" : null,
                "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHeads",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#getGraphHeadFactory",
                  "kiekerPattern" : "public org.gradoop.common.model.api.entities.GraphHeadFactory org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getGraphHeadFactory()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.epgm.LogicalGraphFactory#getGraphHeadFactory",
                  "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getGraphHeadFactory_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHead",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getGraphHeadFactory",
                    "kiekerPattern" : "public org.gradoop.common.model.api.entities.GraphHeadFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getGraphHeadFactory()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-flink",
                    "name" : "flink.model.impl.layouts.common.BaseFactory#getGraphHeadFactory",
                    "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getGraphHeadFactory_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#getGraphHeadFactory",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                  "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.createFromMap(java.util.Map)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.Properties#createFromMap",
                  "key" : "org.gradoop.common.model.impl.properties.Properties.createFromMap_Map",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHead",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.properties.Properties#createWithCapacity",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.createWithCapacity(int)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.Properties#createWithCapacity",
                    "key" : "org.gradoop.common.model.impl.properties.Properties.createWithCapacity_int",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.Properties#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.Properties.<init>(int)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.Properties#<init>",
                      "key" : "org.gradoop.common.model.impl.properties.Properties.<init>_int",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.Properties#createWithCapacity",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory#createGraphHead",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMGraphHead org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory.createGraphHead(java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMGraphHeadFactory#createGraphHead",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory.createGraphHead_String_Properties",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHead",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#get",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory#createGraphHead",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#dateToTimestampSeconds",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds(java.util.Date)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#dateToTimestampSeconds",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#<init>",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory#initGraphHead",
                    "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMGraphHead org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory.initGraphHead(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.pojo.EPGMGraphHeadFactory#initGraphHead",
                    "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory.initGraphHead_GradoopId_String_Properties",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory#createGraphHead",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#<init>",
                      "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMElement#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.<init>_GradoopId_String_Properties",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory#initGraphHead",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphHead#<init>",
                      "kiekerPattern" : "public new org.gradoop.common.model.impl.pojo.EPGMGraphHead.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMGraphHead#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphHead.<init>_GradoopId_String_Properties",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphHeadFactory#initGraphHead",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#getId",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.pojo.EPGMElement.getId()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMElement#getId",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.getId_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHead",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                  "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#hashCode",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHead",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                    "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getCounter",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              }, {
                "call" : "org.gradoop.common.util.AsciiGraphLoader#updateGraphCache",
                "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.updateGraphCache(java.lang.String,org.s1ck.gdl.model.Graph)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.util.AsciiGraphLoader#updateGraphCache",
                "key" : "org.gradoop.common.util.AsciiGraphLoader.updateGraphCache_String_Graph",
                "otherKey" : null,
                "parent" : "org.gradoop.common.util.AsciiGraphLoader#initGraphHeads",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                  "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#hashCode",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#updateGraphCache",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                    "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getCounter",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              } ]
            }, {
              "call" : "org.gradoop.common.util.AsciiGraphLoader#initVertices",
              "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.initVertices()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.util.AsciiGraphLoader#initVertices",
              "key" : "org.gradoop.common.util.AsciiGraphLoader.initVertices_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.util.AsciiGraphLoader#init",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                "kiekerPattern" : "private org.gradoop.common.util.V org.gradoop.common.util.AsciiGraphLoader.initVertex(org.gradoop.common.util.org.s1ck.gdl.model.Vertex)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.util.AsciiGraphLoader#initVertex",
                "key" : "org.gradoop.common.util.AsciiGraphLoader.initVertex_Vertex",
                "otherKey" : null,
                "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertices",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#getVertexFactory",
                  "kiekerPattern" : "public org.gradoop.common.model.api.entities.VertexFactory org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getVertexFactory()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.epgm.LogicalGraphFactory#getVertexFactory",
                  "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getVertexFactory_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getVertexFactory",
                    "kiekerPattern" : "public org.gradoop.common.model.api.entities.VertexFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getVertexFactory()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-flink",
                    "name" : "flink.model.impl.layouts.common.BaseFactory#getVertexFactory",
                    "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getVertexFactory_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#getVertexFactory",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                  "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.createFromMap(java.util.Map)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.Properties#createFromMap",
                  "key" : "org.gradoop.common.model.impl.properties.Properties.createFromMap_Map",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.properties.Properties#createWithCapacity",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.createWithCapacity(int)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.Properties#createWithCapacity",
                    "key" : "org.gradoop.common.model.impl.properties.Properties.createWithCapacity_int",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.Properties#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.Properties.<init>(int)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.Properties#<init>",
                      "key" : "org.gradoop.common.model.impl.properties.Properties.<init>_int",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.Properties#createWithCapacity",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.PropertyValue org.gradoop.common.model.impl.properties.PropertyValue.create(java.lang.Object)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.PropertyValue#create",
                    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.create_Object",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.PropertyValue.<init>(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.PropertyValue#<init>",
                      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setObject(java.lang.Object)",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.properties.PropertyValue#setObject",
                        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setObject_Object",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#<init>",
                          "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.<init>()",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#<init>",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.<init>_",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ {
                            "call" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#<init>",
                            "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.NullStrategy.<init>()",
                            "otherKiekerPattern" : null,
                            "module" : "gradoop-common",
                            "name" : "common.model.impl.properties.strategies.NullStrategy#<init>",
                            "key" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy.<init>_",
                            "otherKey" : null,
                            "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#<init>",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ ]
                          }, {
                            "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                            "kiekerPattern" : "private java.util.Map org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.initClassStrategyMap()",
                            "otherKiekerPattern" : null,
                            "module" : "gradoop-common",
                            "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                            "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.initClassStrategyMap_",
                            "otherKey" : null,
                            "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#<init>",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.BooleanStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.SetStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.SetStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.SetStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.SetStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.IntegerStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.LongStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.LongStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.FloatStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.FloatStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.DoubleStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.ShortStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.ShortStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.ShortStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.ShortStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.BigDecimalStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.DateStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.DateStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.DateStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.DateStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.TimeStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.TimeStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.TimeStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.TimeStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.DateTimeStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.GradoopIdStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.StringStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.StringStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.ListStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.ListStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.ListStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.ListStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.MapStrategy#<init>",
                              "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.strategies.MapStrategy.<init>()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.MapStrategy#<init>",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.MapStrategy.<init>_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initClassStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ ]
                            } ]
                          }, {
                            "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                            "kiekerPattern" : "private org.gradoop.common.model.api.strategies.PropertyValueStrategy[] org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.initByteStrategyMap()",
                            "otherKiekerPattern" : null,
                            "module" : "gradoop-common",
                            "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                            "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.initByteStrategyMap_",
                            "otherKey" : null,
                            "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#<init>",
                            "color" : "#FFF",
                            "statistic" : null,
                            "hasSourceChange" : false,
                            "state" : null,
                            "inVMDeviationPredecessor" : 0.0,
                            "inVMDeviation" : 0.0,
                            "ess" : 13,
                            "children" : [ {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.TimeStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.TimeStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.TimeStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.TimeStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.TimeStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.ShortStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.ShortStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.ShortStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.ShortStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.ShortStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.BooleanStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.SetStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.SetStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.SetStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.SetStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.SetStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.DoubleStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.LongStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.StringStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.GradoopIdStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.GradoopIdStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.FloatStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.MapStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.MapStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.MapStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.MapStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.MapStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.BigDecimalStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.BigDecimalStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.DateTimeStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.DateTimeStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.ListStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.ListStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.ListStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.ListStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.ListStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.IntegerStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.DateStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.DateStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.DateStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.DateStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.DateStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            }, {
                              "call" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#getRawType",
                              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.NullStrategy.getRawType()",
                              "otherKiekerPattern" : null,
                              "module" : "gradoop-common",
                              "name" : "common.model.impl.properties.strategies.NullStrategy#getRawType",
                              "key" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy.getRawType_",
                              "otherKey" : null,
                              "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#initByteStrategyMap",
                              "color" : "#FFF",
                              "statistic" : null,
                              "hasSourceChange" : false,
                              "state" : null,
                              "inVMDeviationPredecessor" : 0.0,
                              "inVMDeviation" : 0.0,
                              "ess" : 14,
                              "children" : [ {
                                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                                "otherKiekerPattern" : null,
                                "module" : "gradoop-common",
                                "name" : "common.model.impl.properties.Type#getTypeByte",
                                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                                "otherKey" : null,
                                "parent" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#getRawType",
                                "color" : "#FFF",
                                "statistic" : null,
                                "hasSourceChange" : false,
                                "state" : null,
                                "inVMDeviationPredecessor" : 0.0,
                                "inVMDeviation" : 0.0,
                                "ess" : 15,
                                "children" : [ ]
                              } ]
                            } ]
                          } ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                          "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.StringStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.StringStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.IntegerStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.FloatStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.LongStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.LongStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.BooleanStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.DoubleStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.properties.Properties#set",
                    "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.Properties.set(java.lang.String,org.gradoop.common.model.impl.properties.PropertyValue)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.Properties#set",
                    "key" : "org.gradoop.common.model.impl.properties.Properties.set_String_PropertyValue",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.util.AsciiGraphLoader#createGradoopIdSet",
                  "kiekerPattern" : "private org.gradoop.common.model.impl.id.GradoopIdSet org.gradoop.common.util.AsciiGraphLoader.createGradoopIdSet(org.s1ck.gdl.model.GraphElement)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.util.AsciiGraphLoader#createGradoopIdSet",
                  "key" : "org.gradoop.common.util.AsciiGraphLoader.createGradoopIdSet_GraphElement",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#<init>",
                    "kiekerPattern" : "public new org.gradoop.common.model.impl.id.GradoopIdSet.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopIdSet#<init>",
                    "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.<init>_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.util.AsciiGraphLoader#createGradoopIdSet",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
                    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.add(org.gradoop.common.model.impl.id.GradoopId)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopIdSet#add",
                    "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.add_GradoopId",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.util.AsciiGraphLoader#createGradoopIdSet",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                      "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#hashCode",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                        "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                        "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                        "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                        "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getCounter",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#createVertex",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMVertex org.gradoop.common.model.impl.pojo.EPGMVertexFactory.createVertex(java.lang.String,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMVertexFactory#createVertex",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory.createVertex_String_Properties_GradoopIdSet",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#get",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#createVertex",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#dateToTimestampSeconds",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds(java.util.Date)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#dateToTimestampSeconds",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#<init>",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#initVertex",
                    "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMVertex org.gradoop.common.model.impl.pojo.EPGMVertexFactory.initVertex(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.pojo.EPGMVertexFactory#initVertex",
                    "key" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory.initVertex_GradoopId_String_Properties_GradoopIdSet",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#createVertex",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#<init>",
                      "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMElement#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.<init>_GradoopId_String_Properties",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#initVertex",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#<init>",
                      "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMGraphElement#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>_GradoopId_String_Properties_GradoopIdSet",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#initVertex",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMVertex#<init>",
                      "kiekerPattern" : "public new org.gradoop.common.model.impl.pojo.EPGMVertex.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMVertex#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMVertex.<init>_GradoopId_String_Properties_GradoopIdSet",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMVertexFactory#initVertex",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#getId",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.pojo.EPGMElement.getId()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMElement#getId",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.getId_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                  "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#hashCode",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertex",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                    "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getCounter",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              }, {
                "call" : "org.gradoop.common.util.AsciiGraphLoader#updateVertexCache",
                "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.updateVertexCache(java.lang.String,org.gradoop.common.util.org.s1ck.gdl.model.Vertex)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.util.AsciiGraphLoader#updateVertexCache",
                "key" : "org.gradoop.common.util.AsciiGraphLoader.updateVertexCache_String_Vertex",
                "otherKey" : null,
                "parent" : "org.gradoop.common.util.AsciiGraphLoader#initVertices",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                  "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#hashCode",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#updateVertexCache",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                    "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getCounter",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              } ]
            }, {
              "call" : "org.gradoop.common.util.AsciiGraphLoader#initEdges",
              "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.initEdges()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.util.AsciiGraphLoader#initEdges",
              "key" : "org.gradoop.common.util.AsciiGraphLoader.initEdges_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.util.AsciiGraphLoader#init",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                "kiekerPattern" : "private org.gradoop.common.util.E org.gradoop.common.util.AsciiGraphLoader.initEdge(org.gradoop.common.util.org.s1ck.gdl.model.Edge)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.util.AsciiGraphLoader#initEdge",
                "key" : "org.gradoop.common.util.AsciiGraphLoader.initEdge_Edge",
                "otherKey" : null,
                "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdges",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#getEdgeFactory",
                  "kiekerPattern" : "public org.gradoop.common.model.api.entities.EdgeFactory org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getEdgeFactory()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.epgm.LogicalGraphFactory#getEdgeFactory",
                  "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.getEdgeFactory_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getEdgeFactory",
                    "kiekerPattern" : "public org.gradoop.common.model.api.entities.EdgeFactory org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-flink",
                    "name" : "flink.model.impl.layouts.common.BaseFactory#getEdgeFactory",
                    "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getEdgeFactory_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#getEdgeFactory",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                  "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.createFromMap(java.util.Map)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.Properties#createFromMap",
                  "key" : "org.gradoop.common.model.impl.properties.Properties.createFromMap_Map",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.properties.Properties#createWithCapacity",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Properties org.gradoop.common.model.impl.properties.Properties.createWithCapacity(int)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.Properties#createWithCapacity",
                    "key" : "org.gradoop.common.model.impl.properties.Properties.createWithCapacity_int",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.Properties#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.Properties.<init>(int)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.Properties#<init>",
                      "key" : "org.gradoop.common.model.impl.properties.Properties.<init>_int",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.Properties#createWithCapacity",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.PropertyValue org.gradoop.common.model.impl.properties.PropertyValue.create(java.lang.Object)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.PropertyValue#create",
                    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.create_Object",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.PropertyValue.<init>(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.PropertyValue#<init>",
                      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setObject(java.lang.Object)",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.properties.PropertyValue#setObject",
                        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setObject_Object",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                          "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.IntegerStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.FloatStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        }, {
                          "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#is",
                          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.LongStrategy.is(java.lang.Object)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.properties.strategies.LongStrategy#is",
                          "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.is_Object",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.properties.Properties#set",
                    "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.Properties.set(java.lang.String,org.gradoop.common.model.impl.properties.PropertyValue)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.Properties#set",
                    "key" : "org.gradoop.common.model.impl.properties.Properties.set_String_PropertyValue",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.Properties#createFromMap",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.util.AsciiGraphLoader#createGradoopIdSet",
                  "kiekerPattern" : "private org.gradoop.common.model.impl.id.GradoopIdSet org.gradoop.common.util.AsciiGraphLoader.createGradoopIdSet(org.s1ck.gdl.model.GraphElement)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.util.AsciiGraphLoader#createGradoopIdSet",
                  "key" : "org.gradoop.common.util.AsciiGraphLoader.createGradoopIdSet_GraphElement",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#<init>",
                    "kiekerPattern" : "public new org.gradoop.common.model.impl.id.GradoopIdSet.<init>()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopIdSet#<init>",
                    "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.<init>_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.util.AsciiGraphLoader#createGradoopIdSet",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
                    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.add(org.gradoop.common.model.impl.id.GradoopId)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopIdSet#add",
                    "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.add_GradoopId",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.util.AsciiGraphLoader#createGradoopIdSet",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                      "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#hashCode",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                        "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                        "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                        "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      }, {
                        "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                        "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                        "otherKiekerPattern" : null,
                        "module" : "gradoop-common",
                        "name" : "common.model.impl.id.GradoopId#getCounter",
                        "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                        "otherKey" : null,
                        "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                        "color" : "#FFF",
                        "statistic" : null,
                        "hasSourceChange" : false,
                        "state" : null,
                        "inVMDeviationPredecessor" : 0.0,
                        "inVMDeviation" : 0.0,
                        "ess" : 11,
                        "children" : [ {
                          "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                          "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                          "otherKiekerPattern" : null,
                          "module" : "gradoop-common",
                          "name" : "common.model.impl.id.GradoopId#makeInt",
                          "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                          "otherKey" : null,
                          "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                          "color" : "#FFF",
                          "statistic" : null,
                          "hasSourceChange" : false,
                          "state" : null,
                          "inVMDeviationPredecessor" : 0.0,
                          "inVMDeviation" : 0.0,
                          "ess" : 12,
                          "children" : [ ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMEdge org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.createEdge(java.lang.String,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.createEdge_String_GradoopId_GradoopId_Properties_GradoopIdSet",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
                    "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#get",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#dateToTimestampSeconds",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds(java.util.Date)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#dateToTimestampSeconds",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                      "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#<init>",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                    "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMEdge org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                    "key" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory.initEdge_GradoopId_String_GradoopId_GradoopId_Properties_GradoopIdSet",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#createEdge",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#<init>",
                      "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMElement#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.<init>_GradoopId_String_Properties",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#<init>",
                      "kiekerPattern" : "protected new org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMGraphElement#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.<init>_GradoopId_String_Properties_GradoopIdSet",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.pojo.EPGMEdge#<init>",
                      "kiekerPattern" : "public new org.gradoop.common.model.impl.pojo.EPGMEdge.<init>(org.gradoop.common.model.impl.id.GradoopId,java.lang.String,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.id.GradoopId,org.gradoop.common.model.impl.properties.Properties,org.gradoop.common.model.impl.id.GradoopIdSet)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.pojo.EPGMEdge#<init>",
                      "key" : "org.gradoop.common.model.impl.pojo.EPGMEdge.<init>_GradoopId_String_GradoopId_GradoopId_Properties_GradoopIdSet",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdgeFactory#initEdge",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                }, {
                  "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#getId",
                  "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.pojo.EPGMElement.getId()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.pojo.EPGMElement#getId",
                  "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.getId_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                  "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#hashCode",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdge",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                    "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getCounter",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              }, {
                "call" : "org.gradoop.common.util.AsciiGraphLoader#updateEdgeCache",
                "kiekerPattern" : "private void org.gradoop.common.util.AsciiGraphLoader.updateEdgeCache(java.lang.String,org.gradoop.common.util.org.s1ck.gdl.model.Edge)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.util.AsciiGraphLoader#updateEdgeCache",
                "key" : "org.gradoop.common.util.AsciiGraphLoader.updateEdgeCache_String_Edge",
                "otherKey" : null,
                "parent" : "org.gradoop.common.util.AsciiGraphLoader#initEdges",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                  "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#hashCode",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.util.AsciiGraphLoader#updateEdgeCache",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                    "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  }, {
                    "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                    "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.id.GradoopId#getCounter",
                    "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                      "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.id.GradoopId#makeInt",
                      "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          } ]
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
    "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraph org.gradoop.flink.util.FlinkAsciiGraphLoader.getLogicalGraphByVariable(java.lang.String)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
    "key" : "org.gradoop.flink.util.FlinkAsciiGraphLoader.getLogicalGraphByVariable_String",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getGraphHeadByVariable",
      "kiekerPattern" : "public org.gradoop.common.model.impl.pojo.EPGMGraphHead org.gradoop.flink.util.FlinkAsciiGraphLoader.getGraphHeadByVariable(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.util.FlinkAsciiGraphLoader#getGraphHeadByVariable",
      "key" : "org.gradoop.flink.util.FlinkAsciiGraphLoader.getGraphHeadByVariable_String",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadByVariable",
        "kiekerPattern" : "public org.gradoop.common.util.G org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.util.AsciiGraphLoader#getGraphHeadByVariable",
        "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable_String",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getGraphHeadByVariable",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadCache",
          "kiekerPattern" : "public java.util.Map org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.util.AsciiGraphLoader#getGraphHeadCache",
          "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadByVariable",
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
      "call" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getVerticesByGraphVariables",
      "kiekerPattern" : "public java.util.Collection org.gradoop.flink.util.FlinkAsciiGraphLoader.getVerticesByGraphVariables(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.util.FlinkAsciiGraphLoader#getVerticesByGraphVariables",
      "key" : "org.gradoop.flink.util.FlinkAsciiGraphLoader.getVerticesByGraphVariables_String",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphVariables",
        "kiekerPattern" : "public java.util.Collection org.gradoop.common.util.AsciiGraphLoader.getVerticesByGraphVariables(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.util.AsciiGraphLoader#getVerticesByGraphVariables",
        "key" : "org.gradoop.common.util.AsciiGraphLoader.getVerticesByGraphVariables_String",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getVerticesByGraphVariables",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#<init>",
          "kiekerPattern" : "public new org.gradoop.common.model.impl.id.GradoopIdSet.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopIdSet#<init>",
          "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadsByVariables",
          "kiekerPattern" : "public java.util.Collection org.gradoop.common.util.AsciiGraphLoader.getGraphHeadsByVariables(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.util.AsciiGraphLoader#getGraphHeadsByVariables",
          "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadsByVariables_String",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadByVariable",
            "kiekerPattern" : "public org.gradoop.common.util.G org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.util.AsciiGraphLoader#getGraphHeadByVariable",
            "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable_String",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadsByVariables",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadCache",
              "kiekerPattern" : "public java.util.Map org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.util.AsciiGraphLoader#getGraphHeadCache",
              "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadByVariable",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.pojo.EPGMElement.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.pojo.EPGMElement#hashCode",
            "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.hashCode_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadsByVariables",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#hashCode",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getCounter",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#getId",
          "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.pojo.EPGMElement.getId()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.pojo.EPGMElement#getId",
          "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.getId_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.add(org.gradoop.common.model.impl.id.GradoopId)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopIdSet#add",
          "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.add_GradoopId",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopId#hashCode",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
              "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getTimeStamp",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
              "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
              "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
              "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getCounter",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
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
          "call" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphIds",
          "kiekerPattern" : "public java.util.Collection org.gradoop.common.util.AsciiGraphLoader.getVerticesByGraphIds(org.gradoop.common.model.impl.id.GradoopIdSet)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.util.AsciiGraphLoader#getVerticesByGraphIds",
          "key" : "org.gradoop.common.util.AsciiGraphLoader.getVerticesByGraphIds_GradoopIdSet",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#size",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopIdSet.size()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#size",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.size_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#getGraphIds",
            "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopIdSet org.gradoop.common.model.impl.pojo.EPGMGraphElement.getGraphIds()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.pojo.EPGMGraphElement#getGraphIds",
            "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.getGraphIds_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#containsAny",
            "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.containsAny(org.gradoop.common.model.impl.id.GradoopIdSet)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#containsAny",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.containsAny_GradoopIdSet",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#size",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopIdSet.size()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopIdSet#size",
              "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.size_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#containsAny",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#hashCode",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#containsAny",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getCounter",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.pojo.EPGMElement.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.pojo.EPGMElement#hashCode",
            "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.hashCode_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getVerticesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#hashCode",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getCounter",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        } ]
      } ]
    }, {
      "call" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getEdgesByGraphVariables",
      "kiekerPattern" : "public java.util.Collection org.gradoop.flink.util.FlinkAsciiGraphLoader.getEdgesByGraphVariables(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.util.FlinkAsciiGraphLoader#getEdgesByGraphVariables",
      "key" : "org.gradoop.flink.util.FlinkAsciiGraphLoader.getEdgesByGraphVariables_String",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphVariables",
        "kiekerPattern" : "public java.util.Collection org.gradoop.common.util.AsciiGraphLoader.getEdgesByGraphVariables(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.util.AsciiGraphLoader#getEdgesByGraphVariables",
        "key" : "org.gradoop.common.util.AsciiGraphLoader.getEdgesByGraphVariables_String",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getEdgesByGraphVariables",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#<init>",
          "kiekerPattern" : "public new org.gradoop.common.model.impl.id.GradoopIdSet.<init>()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopIdSet#<init>",
          "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.<init>_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadsByVariables",
          "kiekerPattern" : "public java.util.Collection org.gradoop.common.util.AsciiGraphLoader.getGraphHeadsByVariables(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.util.AsciiGraphLoader#getGraphHeadsByVariables",
          "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadsByVariables_String",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadByVariable",
            "kiekerPattern" : "public org.gradoop.common.util.G org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.util.AsciiGraphLoader#getGraphHeadByVariable",
            "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadByVariable_String",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadsByVariables",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadCache",
              "kiekerPattern" : "public java.util.Map org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.util.AsciiGraphLoader#getGraphHeadCache",
              "key" : "org.gradoop.common.util.AsciiGraphLoader.getGraphHeadCache_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadByVariable",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.pojo.EPGMElement.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.pojo.EPGMElement#hashCode",
            "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.hashCode_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getGraphHeadsByVariables",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#hashCode",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getCounter",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#getId",
          "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.pojo.EPGMElement.getId()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.pojo.EPGMElement#getId",
          "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.getId_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.add(org.gradoop.common.model.impl.id.GradoopId)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopIdSet#add",
          "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.add_GradoopId",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopId#hashCode",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#add",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
              "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getTimeStamp",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
              "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
              "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
              "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#getCounter",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#makeInt",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
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
          "call" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphIds",
          "kiekerPattern" : "public java.util.Collection org.gradoop.common.util.AsciiGraphLoader.getEdgesByGraphIds(org.gradoop.common.model.impl.id.GradoopIdSet)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.util.AsciiGraphLoader#getEdgesByGraphIds",
          "key" : "org.gradoop.common.util.AsciiGraphLoader.getEdgesByGraphIds_GradoopIdSet",
          "otherKey" : null,
          "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphVariables",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#size",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopIdSet.size()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#size",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.size_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#getGraphIds",
            "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopIdSet org.gradoop.common.model.impl.pojo.EPGMGraphElement.getGraphIds()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.pojo.EPGMGraphElement#getGraphIds",
            "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.getGraphIds_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#containsAny",
            "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.containsAny(org.gradoop.common.model.impl.id.GradoopIdSet)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#containsAny",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.containsAny_GradoopIdSet",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#size",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopIdSet.size()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopIdSet#size",
              "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.size_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#containsAny",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#hashCode",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#containsAny",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getCounter",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.pojo.EPGMElement.hashCode()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.pojo.EPGMElement#hashCode",
            "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.hashCode_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.util.AsciiGraphLoader#getEdgesByGraphIds",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
              "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.hashCode()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#hashCode",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.hashCode_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#hashCode",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getTimeStamp()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getTimeStamp",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getTimeStamp_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getTimeStamp",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getMachineIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getMachineIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getMachineIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                "kiekerPattern" : "private short org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getProcessIdentifier",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getProcessIdentifier_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getProcessIdentifier",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                "kiekerPattern" : "private int org.gradoop.common.model.impl.id.GradoopId.getCounter()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#getCounter",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.getCounter_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#hashCode",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.id.GradoopId#makeInt",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.makeInt(byte,byte,byte,byte)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.id.GradoopId#makeInt",
                  "key" : "org.gradoop.common.model.impl.id.GradoopId.makeInt_byte_byte_byte_byte",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.id.GradoopId#getCounter",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        } ]
      } ]
    }, {
      "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getLogicalGraphFactory",
      "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraphFactory org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.util.GradoopFlinkConfig#getLogicalGraphFactory",
      "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getLogicalGraphFactory_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#fromCollections",
      "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.LogicalGraph org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.fromCollections(org.gradoop.common.model.impl.pojo.EPGMGraphHead,java.util.Collection,java.util.Collection)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.LogicalGraphFactory#fromCollections",
      "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory.fromCollections_EPGMGraphHead_Collection_Collection",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.util.FlinkAsciiGraphLoader#getLogicalGraphByVariable",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromCollections",
        "kiekerPattern" : "public org.gradoop.flink.model.api.layouts.LogicalGraphLayout org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromCollections(org.gradoop.common.model.impl.pojo.EPGMGraphHead,java.util.Collection,java.util.Collection)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromCollections",
        "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromCollections_EPGMGraphHead_Collection_Collection",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#fromCollections",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createGraphHeadDataSet",
          "kiekerPattern" : "protected org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.common.BaseFactory.createGraphHeadDataSet(java.util.Collection)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.common.BaseFactory#createGraphHeadDataSet",
          "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.createGraphHeadDataSet_Collection",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromCollections",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getConfig",
            "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.common.BaseFactory#getConfig",
            "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createGraphHeadDataSet",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
            "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
            "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createGraphHeadDataSet",
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
          "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createVertexDataSet",
          "kiekerPattern" : "protected org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.common.BaseFactory.createVertexDataSet(java.util.Collection)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.common.BaseFactory#createVertexDataSet",
          "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.createVertexDataSet_Collection",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromCollections",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getConfig",
            "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.common.BaseFactory#getConfig",
            "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createVertexDataSet",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
            "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
            "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createVertexDataSet",
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
          "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
          "kiekerPattern" : "protected org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.common.BaseFactory.createEdgeDataSet(java.util.Collection)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
          "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.createEdgeDataSet_Collection",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromCollections",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#getConfig",
            "kiekerPattern" : "protected org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.common.BaseFactory#getConfig",
            "key" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory.getConfig_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
            "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
            "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.common.BaseFactory#createEdgeDataSet",
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
          "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromDataSets",
          "kiekerPattern" : "public org.gradoop.flink.model.api.layouts.LogicalGraphLayout org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromDataSets(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromDataSets",
          "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory.fromDataSets_DataSet_DataSet_DataSet",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromCollections",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
            "kiekerPattern" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.gve.GVEBaseFactory#create",
            "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create_DataSet_DataSet_DataSet",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEGraphLayoutFactory#fromDataSets",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#<init>",
              "kiekerPattern" : "protected new org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.layouts.gve.GVELayout#<init>",
              "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>_DataSet_DataSet_DataSet",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
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
        "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#<init>",
        "kiekerPattern" : "new org.gradoop.flink.model.impl.epgm.LogicalGraph.<init>(org.gradoop.flink.model.api.layouts.LogicalGraphLayout,org.gradoop.flink.util.GradoopFlinkConfig)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.epgm.LogicalGraph#<init>",
        "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.<init>_LogicalGraphLayout_GradoopFlinkConfig",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraphFactory#fromCollections",
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
    "call" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
    "kiekerPattern" : "default org.apache.flink.api.java.DataSet org.gradoop.flink.model.api.epgm.BaseGraphOperators.equalsByData(org.gradoop.flink.model.api.epgm.LG)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.model.api.epgm.BaseGraphOperators#equalsByData",
    "key" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators.equalsByData_LG",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.ElementToDataString#<init>",
      "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.ElementToDataString.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.operators.tostring.functions.ElementToDataString#<init>",
      "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.ElementToDataString.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.GraphHeadToDataString#<init>",
      "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.GraphHeadToDataString.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.operators.tostring.functions.GraphHeadToDataString#<init>",
      "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.GraphHeadToDataString.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.VertexToDataString#<init>",
      "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.VertexToDataString.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.operators.tostring.functions.VertexToDataString#<init>",
      "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.VertexToDataString.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.EdgeToDataString#<init>",
      "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.EdgeToDataString.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.operators.tostring.functions.EdgeToDataString#<init>",
      "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.EdgeToDataString.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality#<init>",
      "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.equality.GraphEquality.<init>(org.gradoop.flink.model.impl.operators.tostring.api.GraphHeadToString,org.gradoop.flink.model.impl.operators.tostring.api.VertexToString,org.gradoop.flink.model.impl.operators.tostring.api.EdgeToString,boolean)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.operators.equality.GraphEquality#<init>",
      "key" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality.<init>_GraphHeadToString_VertexToString_EdgeToString_boolean",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality#<init>",
        "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.equality.CollectionEquality.<init>(org.gradoop.flink.model.impl.operators.tostring.api.GraphHeadToString,org.gradoop.flink.model.impl.operators.tostring.api.VertexToString,org.gradoop.flink.model.impl.operators.tostring.api.EdgeToString,boolean)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.operators.equality.CollectionEquality#<init>",
        "key" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality.<init>_GraphHeadToString_VertexToString_EdgeToString_boolean",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#<init>",
          "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.<init>(org.gradoop.flink.model.impl.operators.tostring.api.GraphHeadToString,org.gradoop.flink.model.impl.operators.tostring.api.VertexToString,org.gradoop.flink.model.impl.operators.tostring.api.EdgeToString,boolean)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#<init>",
          "key" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.<init>_GraphHeadToString_VertexToString_EdgeToString_boolean",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality#<init>",
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
      "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#callForValue",
      "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.T org.gradoop.flink.model.impl.epgm.LogicalGraph.callForValue(org.gradoop.flink.model.api.operators.BinaryBaseGraphToValueOperator,org.gradoop.flink.model.impl.epgm.LogicalGraph)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-flink",
      "name" : "flink.model.impl.epgm.LogicalGraph#callForValue",
      "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.callForValue_BinaryBaseGraphToValueOperator_LogicalGraph",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.api.epgm.BaseGraphOperators#equalsByData",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality#execute",
        "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.operators.equality.GraphEquality.execute(org.gradoop.flink.model.impl.operators.equality.LG,org.gradoop.flink.model.impl.operators.equality.LG)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-flink",
        "name" : "flink.model.impl.operators.equality.GraphEquality#execute",
        "key" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality.execute_LG_LG",
        "otherKey" : null,
        "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#callForValue",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getCollectionFactory",
          "kiekerPattern" : "public org.gradoop.flink.model.api.epgm.BaseGraphCollectionFactory org.gradoop.flink.model.impl.epgm.LogicalGraph.getCollectionFactory()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.LogicalGraph#getCollectionFactory",
          "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.getCollectionFactory_",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getGraphCollectionFactory",
            "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.GraphCollectionFactory org.gradoop.flink.util.GradoopFlinkConfig.getGraphCollectionFactory()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.util.GradoopFlinkConfig#getGraphCollectionFactory",
            "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getGraphCollectionFactory_",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getCollectionFactory",
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
          "call" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#fromGraph",
          "kiekerPattern" : "public org.gradoop.flink.model.impl.epgm.GraphCollection org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.fromGraph(org.gradoop.flink.model.api.layouts.LogicalGraphLayout)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.epgm.GraphCollectionFactory#fromGraph",
          "key" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory.fromGraph_LogicalGraphLayout",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromGraphLayout",
            "kiekerPattern" : "public org.gradoop.flink.model.api.layouts.GraphCollectionLayout org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromGraphLayout(org.gradoop.flink.model.api.layouts.LogicalGraphLayout)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromGraphLayout",
            "key" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromGraphLayout_LogicalGraphLayout",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#fromGraph",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getGraphHead",
              "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.LogicalGraph.getGraphHead()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.epgm.LogicalGraph#getGraphHead",
              "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.getGraphHead_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromGraphLayout",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getGraphHead",
                "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHead()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.layouts.gve.GVELayout#getGraphHead",
                "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHead_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getGraphHead",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getVertices",
              "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.LogicalGraph.getVertices()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.epgm.LogicalGraph#getVertices",
              "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.getVertices_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromGraphLayout",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getVertices",
                "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.layouts.gve.GVELayout#getVertices",
                "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getVertices",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getEdges",
              "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.LogicalGraph.getEdges()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.epgm.LogicalGraph#getEdges",
              "key" : "org.gradoop.flink.model.impl.epgm.LogicalGraph.getEdges_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromGraphLayout",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getEdges",
                "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.layouts.gve.GVELayout#getEdges",
                "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.epgm.LogicalGraph#getEdges",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromDataSets",
              "kiekerPattern" : "public org.gradoop.flink.model.api.layouts.GraphCollectionLayout org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromDataSets(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromDataSets",
              "key" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory.fromDataSets_DataSet_DataSet_DataSet",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromGraphLayout",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
                "kiekerPattern" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.layouts.gve.GVEBaseFactory#create",
                "key" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory.create_DataSet_DataSet_DataSet",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVECollectionLayoutFactory#fromDataSets",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#<init>",
                  "kiekerPattern" : "protected new org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.layouts.gve.GVELayout#<init>",
                  "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.<init>_DataSet_DataSet_DataSet",
                  "otherKey" : null,
                  "parent" : "org.gradoop.flink.model.impl.layouts.gve.GVEBaseFactory#create",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          }, {
            "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#<init>",
            "kiekerPattern" : "new org.gradoop.flink.model.impl.epgm.GraphCollection.<init>(org.gradoop.flink.model.api.layouts.GraphCollectionLayout,org.gradoop.flink.util.GradoopFlinkConfig)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.epgm.GraphCollection#<init>",
            "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.<init>_GraphCollectionLayout_GradoopFlinkConfig",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollectionFactory#fromGraph",
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
          "call" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality#execute",
          "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.operators.equality.CollectionEquality.execute(org.gradoop.flink.model.impl.operators.equality.GC,org.gradoop.flink.model.impl.operators.equality.GC)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-flink",
          "name" : "flink.model.impl.operators.equality.CollectionEquality#execute",
          "key" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality.execute_GC_GC",
          "otherKey" : null,
          "parent" : "org.gradoop.flink.model.impl.operators.equality.GraphEquality#execute",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
            "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.execute(org.gradoop.flink.model.impl.operators.tostring.GC)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
            "key" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.execute_GC",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality#execute",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
              "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.getGraphHeadStrings(org.gradoop.flink.model.impl.operators.tostring.GC)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
              "key" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder.getGraphHeadStrings_GC",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getGraphHeads",
                "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphHeads()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.epgm.GraphCollection#getGraphHeads",
                "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getGraphHeads_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getGraphHeads",
                  "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHeads()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.layouts.gve.GVELayout#getGraphHeads",
                  "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getGraphHeads_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getGraphHeads",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getVertices",
                "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.GraphCollection.getVertices()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.epgm.GraphCollection#getVertices",
                "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getVertices_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getVertices",
                  "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.layouts.gve.GVELayout#getVertices",
                  "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getVertices_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getVertices",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getEdges",
                "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.epgm.GraphCollection.getEdges()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.epgm.GraphCollection#getEdges",
                "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getEdges_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout#getEdges",
                  "kiekerPattern" : "public org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-flink",
                  "name" : "flink.model.impl.layouts.gve.GVELayout#getEdges",
                  "key" : "org.gradoop.flink.model.impl.layouts.gve.GVELayout.getEdges_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getEdges",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.MultiEdgeStringCombiner#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.MultiEdgeStringCombiner.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.operators.tostring.functions.MultiEdgeStringCombiner#<init>",
                "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.MultiEdgeStringCombiner.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.SourceStringUpdater#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.SourceStringUpdater.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.operators.tostring.functions.SourceStringUpdater#<init>",
                "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.SourceStringUpdater.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.TargetStringUpdater#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.TargetStringUpdater.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.operators.tostring.functions.TargetStringUpdater#<init>",
                "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.TargetStringUpdater.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.OutgoingAdjacencyList#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.OutgoingAdjacencyList.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.operators.tostring.functions.OutgoingAdjacencyList#<init>",
                "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.OutgoingAdjacencyList.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.IncomingAdjacencyList#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.IncomingAdjacencyList.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.operators.tostring.functions.IncomingAdjacencyList#<init>",
                "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.IncomingAdjacencyList.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.model.impl.functions.epgm.LabelCombiner#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.functions.epgm.LabelCombiner.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.functions.epgm.LabelCombiner#<init>",
                "key" : "org.gradoop.flink.model.impl.functions.epgm.LabelCombiner.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.AdjacencyMatrix#<init>",
                "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.AdjacencyMatrix.<init>()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-flink",
                "name" : "flink.model.impl.operators.tostring.functions.AdjacencyMatrix#<init>",
                "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.AdjacencyMatrix.<init>_",
                "otherKey" : null,
                "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#getGraphHeadStrings",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.flink.model.impl.epgm.GraphCollection#getConfig",
              "kiekerPattern" : "public org.gradoop.flink.util.GradoopFlinkConfig org.gradoop.flink.model.impl.epgm.GraphCollection.getConfig()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.epgm.GraphCollection#getConfig",
              "key" : "org.gradoop.flink.model.impl.epgm.GraphCollection.getConfig_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.flink.util.GradoopFlinkConfig#getExecutionEnvironment",
              "kiekerPattern" : "public org.apache.flink.api.java.ExecutionEnvironment org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.util.GradoopFlinkConfig#getExecutionEnvironment",
              "key" : "org.gradoop.flink.util.GradoopFlinkConfig.getExecutionEnvironment_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
              "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.id.GradoopId#get",
              "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#dateToTimestampSeconds",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds(java.util.Date)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#dateToTimestampSeconds",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.dateToTimestampSeconds_Date",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              }, {
                "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
                "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(int,int,short,int,boolean)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.id.GradoopId#<init>",
                "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_int_int_short_int_boolean",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.flink.model.impl.operators.tostring.tuples.GraphHeadString#<init>",
              "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.tuples.GraphHeadString.<init>(org.gradoop.common.model.impl.id.GradoopId,org.gradoop.flink.model.impl.operators.tostring.tuples.GraphHeadString)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.operators.tostring.tuples.GraphHeadString#<init>",
              "key" : "org.gradoop.flink.model.impl.operators.tostring.tuples.GraphHeadString.<init>_GradoopId_GraphHeadString",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.flink.model.impl.operators.tostring.functions.ConcatGraphHeadStrings#<init>",
              "kiekerPattern" : "public new org.gradoop.flink.model.impl.operators.tostring.functions.ConcatGraphHeadStrings.<init>()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.operators.tostring.functions.ConcatGraphHeadStrings#<init>",
              "key" : "org.gradoop.flink.model.impl.operators.tostring.functions.ConcatGraphHeadStrings.<init>_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.operators.tostring.CanonicalAdjacencyMatrixBuilder#execute",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.flink.model.impl.functions.bool.Equals#cross",
            "kiekerPattern" : "public static org.apache.flink.api.java.DataSet org.gradoop.flink.model.impl.functions.bool.Equals.cross(org.apache.flink.api.java.DataSet,org.apache.flink.api.java.DataSet)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-flink",
            "name" : "flink.model.impl.functions.bool.Equals#cross",
            "key" : "org.gradoop.flink.model.impl.functions.bool.Equals.cross_DataSet_DataSet",
            "otherKey" : null,
            "parent" : "org.gradoop.flink.model.impl.operators.equality.CollectionEquality#execute",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.flink.model.impl.functions.bool.Equals#<init>",
              "kiekerPattern" : "public new org.gradoop.flink.model.impl.functions.bool.Equals.<init>()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-flink",
              "name" : "flink.model.impl.functions.bool.Equals#<init>",
              "key" : "org.gradoop.flink.model.impl.functions.bool.Equals.<init>_",
              "otherKey" : null,
              "parent" : "org.gradoop.flink.model.impl.functions.bool.Equals#cross",
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
    "call" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
    "kiekerPattern" : "protected void org.gradoop.flink.model.GradoopFlinkTestBase.collectAndAssertTrue(org.apache.flink.api.java.DataSet)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-flink",
    "name" : "flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
    "key" : "org.gradoop.flink.model.GradoopFlinkTestBase.collectAndAssertTrue_DataSet",
    "otherKey" : null,
    "parent" : "org.gradoop.flink.io.impl.csv.indexed.IndexedCSVDataSourceTest#testReadSingleGraph",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.pojo.EPGMEdge#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMEdge.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.pojo.EPGMEdge#toString",
      "key" : "org.gradoop.common.model.impl.pojo.EPGMEdge.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMGraphElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.pojo.EPGMGraphElement#toString",
        "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdge#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMElement.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.pojo.EPGMElement#toString",
          "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
            "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopId#toString",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.Properties#toString",
            "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Properties.toString()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.Properties#toString",
            "key" : "org.gradoop.common.model.impl.properties.Properties.toString_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.Properties#toList",
              "kiekerPattern" : "public java.util.List org.gradoop.common.model.impl.properties.Properties.toList()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Properties#toList",
              "key" : "org.gradoop.common.model.impl.properties.Properties.toList_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.Properties#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Property#create",
                "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Property org.gradoop.common.model.impl.properties.Property.create(java.lang.String,org.gradoop.common.model.impl.properties.PropertyValue)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Property#create",
                "key" : "org.gradoop.common.model.impl.properties.Property.create_String_PropertyValue",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.Properties#toList",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.Property#<init>",
                  "kiekerPattern" : "new org.gradoop.common.model.impl.properties.Property.<init>(java.lang.String,org.gradoop.common.model.impl.properties.PropertyValue)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.Property#<init>",
                  "key" : "org.gradoop.common.model.impl.properties.Property.<init>_String_PropertyValue",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.Property#create",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.Property#toString",
              "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Property.toString()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Property#toString",
              "key" : "org.gradoop.common.model.impl.properties.Property.toString_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.Properties#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.PropertyValue.getType()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.PropertyValue#getType",
                "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getType_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.Property#toString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                  "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getType",
                  "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getType()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.IntegerStrategy#getType",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getType_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getType",
                  "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getType()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.FloatStrategy#getType",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getType_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.properties.PropertyValue#toString",
                "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.PropertyValue.toString()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.PropertyValue#toString",
                "key" : "org.gradoop.common.model.impl.properties.PropertyValue.toString_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.Property#toString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
                  "kiekerPattern" : "public java.lang.Object org.gradoop.common.model.impl.properties.PropertyValue.getObject()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.PropertyValue#getObject",
                  "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getObject_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#toString",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                    "kiekerPattern" : "public org.gradoop.common.model.impl.properties.T org.gradoop.common.model.impl.properties.PropertyValue.get(java.lang.Class)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.PropertyValue#get",
                    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.get_Class",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                      "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#is",
                      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.IntegerStrategy#is",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.is_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#is",
                      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.FloatStrategy#is",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.is_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopIdSet.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopIdSet#toString",
          "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#isEmpty",
            "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#isEmpty",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#iterator",
            "kiekerPattern" : "public java.util.Iterator org.gradoop.common.model.impl.id.GradoopIdSet.iterator()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#iterator",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.iterator_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
            "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopId#toString",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
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
        "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.id.GradoopId#toString",
        "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.pojo.EPGMEdge#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      } ]
    }, {
      "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.id.GradoopId#toString",
      "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphHead#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMGraphHead.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.pojo.EPGMGraphHead#toString",
      "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphHead.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.pojo.EPGMElement#toString",
        "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphHead#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopId#toString",
          "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.Properties#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Properties.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.properties.Properties#toString",
          "key" : "org.gradoop.common.model.impl.properties.Properties.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.Properties#toList",
            "kiekerPattern" : "public java.util.List org.gradoop.common.model.impl.properties.Properties.toList()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.Properties#toList",
            "key" : "org.gradoop.common.model.impl.properties.Properties.toList_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.Properties#toString",
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
      "call" : "org.gradoop.common.model.impl.pojo.EPGMVertex#toString",
      "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMVertex.toString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.pojo.EPGMVertex#toString",
      "key" : "org.gradoop.common.model.impl.pojo.EPGMVertex.toString_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#toString",
        "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMGraphElement.toString()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.pojo.EPGMGraphElement#toString",
        "key" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement.toString_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.pojo.EPGMVertex#toString",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.pojo.EPGMElement.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.pojo.EPGMElement#toString",
          "key" : "org.gradoop.common.model.impl.pojo.EPGMElement.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
            "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopId#toString",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.Properties#toString",
            "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Properties.toString()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.Properties#toString",
            "key" : "org.gradoop.common.model.impl.properties.Properties.toString_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.pojo.EPGMElement#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.Properties#toList",
              "kiekerPattern" : "public java.util.List org.gradoop.common.model.impl.properties.Properties.toList()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Properties#toList",
              "key" : "org.gradoop.common.model.impl.properties.Properties.toList_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.Properties#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Property#create",
                "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.Property org.gradoop.common.model.impl.properties.Property.create(java.lang.String,org.gradoop.common.model.impl.properties.PropertyValue)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Property#create",
                "key" : "org.gradoop.common.model.impl.properties.Property.create_String_PropertyValue",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.Properties#toList",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.Property#<init>",
                  "kiekerPattern" : "new org.gradoop.common.model.impl.properties.Property.<init>(java.lang.String,org.gradoop.common.model.impl.properties.PropertyValue)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.Property#<init>",
                  "key" : "org.gradoop.common.model.impl.properties.Property.<init>_String_PropertyValue",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.Property#create",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.Property#toString",
              "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.Property.toString()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Property#toString",
              "key" : "org.gradoop.common.model.impl.properties.Property.toString_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.Properties#toString",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.PropertyValue.getType()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.PropertyValue#getType",
                "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getType_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.Property#toString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                  "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getType",
                  "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.strategies.LongStrategy.getType()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.LongStrategy#getType",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.getType_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getType",
                  "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getType()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.BooleanStrategy#getType",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getType_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                }, {
                  "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getType",
                  "kiekerPattern" : "public java.lang.Class org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getType()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.strategies.DoubleStrategy#getType",
                  "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getType_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getType",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              }, {
                "call" : "org.gradoop.common.model.impl.properties.PropertyValue#toString",
                "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.PropertyValue.toString()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.PropertyValue#toString",
                "key" : "org.gradoop.common.model.impl.properties.PropertyValue.toString_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.Property#toString",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
                  "kiekerPattern" : "public java.lang.Object org.gradoop.common.model.impl.properties.PropertyValue.getObject()",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.PropertyValue#getObject",
                  "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getObject_",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#toString",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ {
                    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                    "kiekerPattern" : "public org.gradoop.common.model.impl.properties.T org.gradoop.common.model.impl.properties.PropertyValue.get(java.lang.Class)",
                    "otherKiekerPattern" : null,
                    "module" : "gradoop-common",
                    "name" : "common.model.impl.properties.PropertyValue#get",
                    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.get_Class",
                    "otherKey" : null,
                    "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
                    "color" : "#FFF",
                    "statistic" : null,
                    "hasSourceChange" : false,
                    "state" : null,
                    "inVMDeviationPredecessor" : 0.0,
                    "inVMDeviation" : 0.0,
                    "ess" : 9,
                    "children" : [ {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                      "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#is",
                      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.LongStrategy.is(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.LongStrategy#is",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.is_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#is",
                      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.is(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.BooleanStrategy#is",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.is_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    }, {
                      "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#is",
                      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.is(java.lang.Object)",
                      "otherKiekerPattern" : null,
                      "module" : "gradoop-common",
                      "name" : "common.model.impl.properties.strategies.DoubleStrategy#is",
                      "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.is_Object",
                      "otherKey" : null,
                      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#get",
                      "color" : "#FFF",
                      "statistic" : null,
                      "hasSourceChange" : false,
                      "state" : null,
                      "inVMDeviationPredecessor" : 0.0,
                      "inVMDeviation" : 0.0,
                      "ess" : 10,
                      "children" : [ ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
          "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopIdSet.toString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopIdSet#toString",
          "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.toString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.pojo.EPGMGraphElement#toString",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#isEmpty",
            "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#isEmpty",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#iterator",
            "kiekerPattern" : "public java.util.Iterator org.gradoop.common.model.impl.id.GradoopIdSet.iterator()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopIdSet#iterator",
            "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.iterator_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#toString",
            "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.id.GradoopId.toString()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.id.GradoopId#toString",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.toString_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#toString",
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
      "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
      "kiekerPattern" : "public new org.gradoop.common.model.impl.id.GradoopId.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.id.GradoopId#<init>",
      "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.id.GradoopId#getMaxNormalizedKeyLen",
      "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopId.getMaxNormalizedKeyLen()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.id.GradoopId#getMaxNormalizedKeyLen",
      "key" : "org.gradoop.common.model.impl.id.GradoopId.getMaxNormalizedKeyLen_",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.id.GradoopId#write",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.id.GradoopId.write(org.apache.flink.core.memory.DataOutputView)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.id.GradoopId#write",
      "key" : "org.gradoop.common.model.impl.id.GradoopId.write_DataOutputView",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.Properties#write",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.Properties.write(org.apache.flink.core.memory.DataOutputView)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.properties.Properties#write",
      "key" : "org.gradoop.common.model.impl.properties.Properties.write_DataOutputView",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.write(org.apache.flink.core.memory.DataOutputView)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.properties.PropertyValue#write",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.Properties#write",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
          "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Object)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
          "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Object",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
            "kiekerPattern" : "public static org.gradoop.common.model.api.strategies.PropertyValueStrategy org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get(java.lang.Class)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
            "key" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory.get_Class",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.PropertyValueStrategyFactory#get",
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
          "call" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy.write(org.gradoop.common.model.impl.properties.strategies.T,org.apache.flink.core.memory.DataOutputView)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
          "key" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy.write_T_DataOutputView",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawBytes",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawBytes(java.lang.Long)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.LongStrategy#getRawBytes",
            "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawBytes_Long",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawType",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawType()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.strategies.LongStrategy#getRawType",
              "key" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy.getRawType_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Type#getTypeByte",
                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.UnsafeAvailChecker#unaligned",
              "kiekerPattern" : "static boolean org.gradoop.common.model.impl.properties.bytes.UnsafeAvailChecker.unaligned()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.UnsafeAvailChecker#unaligned",
              "key" : "org.gradoop.common.model.impl.properties.bytes.UnsafeAvailChecker.unaligned_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putLong",
              "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putLong(byte[],int,long)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#putLong",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putLong_byte[]_int_long",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.LongStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putLongUnsafe",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.properties.bytes.Bytes.putLongUnsafe(byte[],int,long)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.bytes.Bytes#putLongUnsafe",
                "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putLongUnsafe_byte[]_int_long",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putLong",
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
            "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawBytes",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawBytes(java.lang.Boolean)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.BooleanStrategy#getRawBytes",
            "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawBytes_Boolean",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawType",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawType()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.strategies.BooleanStrategy#getRawType",
              "key" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy.getRawType_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Type#getTypeByte",
                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putByte",
              "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putByte(byte[],int,byte)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#putByte",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putByte_byte[]_int_byte",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.BooleanStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawBytes",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawBytes(java.lang.Double)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.DoubleStrategy#getRawBytes",
            "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawBytes_Double",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawType",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawType()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.strategies.DoubleStrategy#getRawType",
              "key" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy.getRawType_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Type#getTypeByte",
                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putDouble",
              "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putDouble(byte[],int,double)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#putDouble",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putDouble_byte[]_int_double",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.DoubleStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putLong",
                "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putLong(byte[],int,long)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.bytes.Bytes#putLong",
                "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putLong_byte[]_int_long",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putDouble",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putLongUnsafe",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.properties.bytes.Bytes.putLongUnsafe(byte[],int,long)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.bytes.Bytes#putLongUnsafe",
                  "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putLongUnsafe_byte[]_int_long",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putLong",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawBytes",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawBytes(java.lang.Integer)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.IntegerStrategy#getRawBytes",
            "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawBytes_Integer",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawType",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawType()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.strategies.IntegerStrategy#getRawType",
              "key" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy.getRawType_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Type#getTypeByte",
                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putInt",
              "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putInt(byte[],int,int)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#putInt",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putInt_byte[]_int_int",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.IntegerStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putIntUnsafe",
                "kiekerPattern" : "private static int org.gradoop.common.model.impl.properties.bytes.Bytes.putIntUnsafe(byte[],int,int)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.bytes.Bytes#putIntUnsafe",
                "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putIntUnsafe_byte[]_int_int",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putInt",
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
            "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawBytes",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawBytes(java.lang.Float)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.FloatStrategy#getRawBytes",
            "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawBytes_Float",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.AbstractFixSizedPropertyValueStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawType",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawType()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.strategies.FloatStrategy#getRawType",
              "key" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy.getRawType_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Type#getTypeByte",
                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putFloat",
              "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putFloat(byte[],int,float)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#putFloat",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putFloat_byte[]_int_float",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.FloatStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putInt",
                "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putInt(byte[],int,int)",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.bytes.Bytes#putInt",
                "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putInt_byte[]_int_int",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putFloat",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ {
                  "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putIntUnsafe",
                  "kiekerPattern" : "private static int org.gradoop.common.model.impl.properties.bytes.Bytes.putIntUnsafe(byte[],int,int)",
                  "otherKiekerPattern" : null,
                  "module" : "gradoop-common",
                  "name" : "common.model.impl.properties.bytes.Bytes#putIntUnsafe",
                  "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putIntUnsafe_byte[]_int_int",
                  "otherKey" : null,
                  "parent" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putInt",
                  "color" : "#FFF",
                  "statistic" : null,
                  "hasSourceChange" : false,
                  "state" : null,
                  "inVMDeviationPredecessor" : 0.0,
                  "inVMDeviation" : 0.0,
                  "ess" : 8,
                  "children" : [ ]
                } ]
              } ]
            } ]
          } ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy#write",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy.write(org.gradoop.common.model.impl.properties.strategies.T,org.apache.flink.core.memory.DataOutputView)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy#write",
          "key" : "org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy.write_T_DataOutputView",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawBytes",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawBytes(java.lang.String)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.StringStrategy#getRawBytes",
            "key" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawBytes_String",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.AbstractVariableSizedPropertyValueStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#toBytes",
              "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.bytes.Bytes.toBytes(java.lang.String)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#toBytes",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.toBytes_String",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawType",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawType()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.strategies.StringStrategy#getRawType",
              "key" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy.getRawType_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawBytes",
              "color" : "#FFF",
              "statistic" : null,
              "hasSourceChange" : false,
              "state" : null,
              "inVMDeviationPredecessor" : 0.0,
              "inVMDeviation" : 0.0,
              "ess" : 6,
              "children" : [ {
                "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
                "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
                "otherKiekerPattern" : null,
                "module" : "gradoop-common",
                "name" : "common.model.impl.properties.Type#getTypeByte",
                "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
                "otherKey" : null,
                "parent" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawType",
                "color" : "#FFF",
                "statistic" : null,
                "hasSourceChange" : false,
                "state" : null,
                "inVMDeviationPredecessor" : 0.0,
                "inVMDeviation" : 0.0,
                "ess" : 7,
                "children" : [ ]
              } ]
            }, {
              "call" : "org.gradoop.common.model.impl.properties.bytes.Bytes#putBytes",
              "kiekerPattern" : "public static int org.gradoop.common.model.impl.properties.bytes.Bytes.putBytes(byte[],int,byte[],int,int)",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.bytes.Bytes#putBytes",
              "key" : "org.gradoop.common.model.impl.properties.bytes.Bytes.putBytes_byte[]_int_byte[]_int_int",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.StringStrategy#getRawBytes",
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
          "call" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#write",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.strategies.NullStrategy.write(java.lang.Object,org.apache.flink.core.memory.DataOutputView)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.properties.strategies.NullStrategy#write",
          "key" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy.write_Object_DataOutputView",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#getRawType",
            "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.strategies.NullStrategy.getRawType()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "common.model.impl.properties.strategies.NullStrategy#getRawType",
            "key" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy.getRawType_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#write",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.Type#getTypeByte",
              "kiekerPattern" : "public byte org.gradoop.common.model.impl.properties.Type.getTypeByte()",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "common.model.impl.properties.Type#getTypeByte",
              "key" : "org.gradoop.common.model.impl.properties.Type.getTypeByte_",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.strategies.NullStrategy#getRawType",
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
      "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#write",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.id.GradoopIdSet.write(org.apache.flink.core.memory.DataOutputView)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "common.model.impl.id.GradoopIdSet#write",
      "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.write_DataOutputView",
      "otherKey" : null,
      "parent" : "org.gradoop.flink.model.GradoopFlinkTestBase#collectAndAssertTrue",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#isEmpty",
        "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.id.GradoopIdSet#isEmpty",
        "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.isEmpty_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#write",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#size",
        "kiekerPattern" : "public int org.gradoop.common.model.impl.id.GradoopIdSet.size()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.id.GradoopIdSet#size",
        "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.size_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#write",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.id.GradoopIdSet#writeIds",
        "kiekerPattern" : "private byte[] org.gradoop.common.model.impl.id.GradoopIdSet.writeIds(java.util.Set)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "common.model.impl.id.GradoopIdSet#writeIds",
        "key" : "org.gradoop.common.model.impl.id.GradoopIdSet.writeIds_Set",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#write",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.id.GradoopId#toByteArray",
          "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.id.GradoopId.toByteArray()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "common.model.impl.id.GradoopId#toByteArray",
          "key" : "org.gradoop.common.model.impl.id.GradoopId.toByteArray_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.id.GradoopIdSet#writeIds",
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
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 490},
   width = 8170- margin.right - margin.left,
   height = 2310 - margin.top - margin.bottom;
