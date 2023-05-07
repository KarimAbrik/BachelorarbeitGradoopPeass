if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit cf1a996ffc69fd1fdd94a3eb16ef40eb9843e2de -test org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest\")'>cf1a996ffc69fd1fdd94a3eb16ef40eb9843e2de</a><br>Test Case: org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest<br>";
}

var source = {"current":
{
 "org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_Long_String_Long_Long_Map_Set":
 `/**
 * {@inheritDoc}
 */
@Override
public EdgePojo createEdge(final Long id, final String label, final Long sourceVertexId, final Long targetVertexId, final Map<String, Object> properties, Set<Long> graphs) {
    checkId(id);
    checkLabel(label);
    checkId(sourceVertexId);
    checkId(targetVertexId);
    return new EdgePojo(id, label, sourceVertexId, targetVertexId, properties, graphs);
}`,"org.gradoop.model.impl.pojo.EdgePojoTest.createWithEmptyLabelTest_":
 `@Test(expected = IllegalArgumentException.class)
public void createWithEmptyLabelTest() {
    new EdgePojoFactory().createEdge(0L, "", 23L, 42L);
}`,"org.gradoop.model.impl.pojo.ElementPojoFactory.<init>_":
 ``,"org.gradoop.model.impl.pojo.EdgePojoFactory.<init>_":
 ``,"org.gradoop.model.impl.pojo.ElementPojoFactory.checkLabel_String":
 `/**
 * Checks if {@code label} is valid (not null or empty).
 *
 * @param label edge label
 */
protected void checkLabel(String label) {
    if (label == null || "".equals(label)) {
        throw new IllegalArgumentException("label must not be null or empty");
    }
}`,"org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_Long_String_Long_Long":
 `/**
 * {@inheritDoc}
 */
@Override
public EdgePojo createEdge(final Long id, final String label, final Long sourceVertexId, final Long targetVertexId) {
    return createEdge(id, label, sourceVertexId, targetVertexId, null, null);
}`,"org.gradoop.model.impl.pojo.ElementPojoFactory.checkId_Long":
 `/**
 * Checks if the given identifier is valid.
 *
 * @param id identifier
 */
protected void checkId(final Long id) {
    if (id == null) {
        throw new IllegalArgumentException("id must not be null");
    }
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.model.impl.pojo.EdgePojoTest#createWithEmptyLabelTest",
  "kiekerPattern" : "public void org.gradoop.model.impl.pojo.EdgePojoTest.createWithEmptyLabelTest()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-core",
  "name" : "EdgePojoTest#createWithEmptyLabelTest",
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
    "call" : "org.gradoop.model.impl.pojo.ElementPojoFactory#<init>",
    "kiekerPattern" : "public new org.gradoop.model.impl.pojo.ElementPojoFactory.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "ElementPojoFactory#<init>",
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
    "name" : "EdgePojoFactory#<init>",
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
    "kiekerPattern" : "public org.gradoop.model.impl.pojo.EdgePojo org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge(java.lang.Long,java.lang.String,java.lang.Long,java.lang.Long)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-core",
    "name" : "EdgePojoFactory#createEdge",
    "key" : "org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_Long_String_Long_Long",
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
      "kiekerPattern" : "public org.gradoop.model.impl.pojo.EdgePojo org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge(java.lang.Long,java.lang.String,java.lang.Long,java.lang.Long,java.util.Map,java.util.Set)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-core",
      "name" : "EdgePojoFactory#createEdge",
      "key" : "org.gradoop.model.impl.pojo.EdgePojoFactory.createEdge_Long_String_Long_Long_Map_Set",
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
        "kiekerPattern" : "protected void org.gradoop.model.impl.pojo.ElementPojoFactory.checkId(java.lang.Long)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-core",
        "name" : "ElementPojoFactory#checkId",
        "key" : "org.gradoop.model.impl.pojo.ElementPojoFactory.checkId_Long",
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
        "name" : "ElementPojoFactory#checkLabel",
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
var margin = {top: 20, right: 120, bottom: 20, left: 259},
   width = 1850- margin.right - margin.left,
   height = 245 - margin.top - margin.bottom;
