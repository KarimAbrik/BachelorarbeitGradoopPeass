if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit cf1a996ffc69fd1fdd94a3eb16ef40eb9843e2de -test org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest\")'>cf1a996ffc69fd1fdd94a3eb16ef40eb9843e2de</a><br>Test Case: org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.id.SequenceIdGenerator.<init>_Long":
 `/**
 * Instantiates a new generator.
 *
 * @param offset new identifiers are created based on that offset
 */
public SequenceIdGenerator(Long offset) {
    if (offset == null) {
        throw new IllegalArgumentException("Offset must not be null");
    }
    this.offset = new AtomicLong(offset);
}`,"org.gradoop.model.impl.id.GradoopId.<init>_Long":
 `/**
 * Initializes a GradoopId from the given parameter.
 *
 * @param identifier long identifier
 */
GradoopId(Long identifier) {
    if (identifier == null) {
        throw new IllegalArgumentException("Identifier must not be null.");
    }
    this.identifier = identifier;
}`,"org.gradoop.model.impl.pojo.EdgePojoTest.createWithEmptyLabelTest_":
 `@Test(expected = IllegalArgumentException.class)
public void createWithEmptyLabelTest() {
    GradoopIdGenerator idGen = new SequenceIdGenerator();
    GradoopId edgeId = idGen.createId();
    GradoopId sourceId = idGen.createId();
    GradoopId targetId = idGen.createId();
    new EdgePojoFactory().createEdge(edgeId, "", sourceId, targetId);
}`,"org.gradoop.model.impl.pojo.ElementPojoFactory.<init>_":
 ``,"org.gradoop.model.impl.pojo.EdgePojoFactory.<init>_":
 ``,"org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_GradoopId_String_GradoopId_GradoopId":
 `/**
 * {@inheritDoc}
 */
@Override
public EdgePojo createEdge(final GradoopId id, final String label, final GradoopId sourceVertexId, final GradoopId targetVertexId) {
    return createEdge(id, label, sourceVertexId, targetVertexId, null, null);
}`,"org.gradoop.model.impl.pojo.ElementPojoFactory.checkId_GradoopId":
 `/**
 * Checks if the given identifier is valid.
 *
 * @param id identifier
 */
protected void checkId(final GradoopId id) {
    if (id == null) {
        throw new IllegalArgumentException("id must not be null");
    }
}`,"org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_GradoopId_String_GradoopId_GradoopId_Map_GradoopIds":
 `/**
 * {@inheritDoc}
 */
@Override
public EdgePojo createEdge(final GradoopId id, final String label, final GradoopId sourceVertexId, final GradoopId targetVertexId, final Map<String, Object> properties, GradoopIds graphIds) {
    checkId(id);
    checkLabel(label);
    checkId(sourceVertexId);
    checkId(targetVertexId);
    return new EdgePojo(id, label, sourceVertexId, targetVertexId, properties, graphIds);
}`,"org.gradoop.model.impl.pojo.ElementPojoFactory.checkLabel_String":
 `/**
 * Checks if {@code label} is valid (not null or empty).
 *
 * @param label edge label
 */
protected void checkLabel(String label) {
    if (label == null || "".equals(label)) {
        throw new IllegalArgumentException("label must not be null or empty");
    }
}`,"org.gradoop.model.impl.id.SequenceIdGenerator.createId_":
 `@Override
public GradoopId createId() {
    return new GradoopId(offset.getAndIncrement());
}`,"org.gradoop.model.impl.id.SequenceIdGenerator.<init>_":
 `/**
 * Instantiates a new generator.
 */
public SequenceIdGenerator() {
    this(0L);
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
  "kiekerPattern" : "public void org.gradoop.model.impl.pojo.EdgePojoTest.createWithEmptyLabelTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-core",
  "name" : "pojo.EdgePojoTest#createWithEmptyLabelTest",
  "key" : "org.gradoop.model.impl.pojo.EdgePojoTest.createWithEmptyLabelTest_",
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
    "call" : "org.gradoop.model.impl.id.SequenceIdGenerator#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.id.SequenceIdGenerator.<init>(java.lang.Long)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "id.SequenceIdGenerator#<init>",
    "key" : "org.gradoop.model.impl.id.SequenceIdGenerator.<init>_Long",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.id.SequenceIdGenerator#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.id.SequenceIdGenerator.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "id.SequenceIdGenerator#<init>",
    "key" : "org.gradoop.model.impl.id.SequenceIdGenerator.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.id.SequenceIdGenerator#createId",
    "kiekerPattern" : "public org.gradoop.model.impl.id.GradoopId org.gradoop.model.impl.id.SequenceIdGenerator.createId()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "id.SequenceIdGenerator#createId",
    "key" : "org.gradoop.model.impl.id.SequenceIdGenerator.createId_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.id.GradoopId#<init>",
      "kiekerPattern" : "new org.gradoop.model.impl.id.GradoopId.<init>(java.lang.Long)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "id.GradoopId#<init>",
      "key" : "org.gradoop.model.impl.id.GradoopId.<init>_Long",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.id.SequenceIdGenerator#createId",
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
    "call" : "org.gradoop.model.impl.pojo.ElementPojoFactory#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.pojo.ElementPojoFactory.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "pojo.ElementPojoFactory#<init>",
    "key" : "org.gradoop.model.impl.pojo.ElementPojoFactory.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.pojo.EdgePojoFactory#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.pojo.EdgePojoFactory.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "pojo.EdgePojoFactory#<init>",
    "key" : "org.gradoop.model.impl.pojo.EdgePojoFactory.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.model.impl.pojo.EdgePojoFactory#createEdge",
    "kiekerPattern" : "public org.gradoop.model.impl.pojo.EdgePojo org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge(org.gradoop.model.impl.id.GradoopId,java.lang.String,org.gradoop.model.impl.id.GradoopId,org.gradoop.model.impl.id.GradoopId)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "pojo.EdgePojoFactory#createEdge",
    "key" : "org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_GradoopId_String_GradoopId_GradoopId",
    "otherKey" : null,
    "parent" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.model.impl.pojo.EdgePojoFactory#createEdge",
      "kiekerPattern" : "public org.gradoop.model.impl.pojo.EdgePojo org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge(org.gradoop.model.impl.id.GradoopId,java.lang.String,org.gradoop.model.impl.id.GradoopId,org.gradoop.model.impl.id.GradoopId,java.util.Map,org.gradoop.model.impl.id.GradoopIds)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "pojo.EdgePojoFactory#createEdge",
      "key" : "org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_GradoopId_String_GradoopId_GradoopId_Map_GradoopIds",
      "otherKey" : null,
      "parent" : "org.gradoop.model.impl.pojo.EdgePojoFactory#createEdge",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.model.impl.pojo.ElementPojoFactory#checkId",
        "kiekerPattern" : "protected void org.gradoop.model.impl.pojo.ElementPojoFactory.checkId(org.gradoop.model.impl.id.GradoopId)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "pojo.ElementPojoFactory#checkId",
        "key" : "org.gradoop.model.impl.pojo.ElementPojoFactory.checkId_GradoopId",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.pojo.EdgePojoFactory#createEdge",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.model.impl.pojo.ElementPojoFactory#checkLabel",
        "kiekerPattern" : "protected void org.gradoop.model.impl.pojo.ElementPojoFactory.checkLabel(java.lang.String)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "pojo.ElementPojoFactory#checkLabel",
        "key" : "org.gradoop.model.impl.pojo.ElementPojoFactory.checkLabel_String",
        "otherKey" : null,
        "parent" : "org.gradoop.model.impl.pojo.EdgePojoFactory#createEdge",
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
var margin = {top: 20, right: 120, bottom: 20, left: 294},
   width = 1850- margin.right - margin.left,
   height = 455 - margin.top - margin.bottom;
